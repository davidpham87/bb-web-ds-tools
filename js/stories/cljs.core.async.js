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
cljs.core.async.t_cljs$core$async54159 = (function (f,blockable,meta54160){
this.f = f;
this.blockable = blockable;
this.meta54160 = meta54160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54161,meta54160__$1){
var self__ = this;
var _54161__$1 = this;
return (new cljs.core.async.t_cljs$core$async54159(self__.f,self__.blockable,meta54160__$1));
}));

(cljs.core.async.t_cljs$core$async54159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54161){
var self__ = this;
var _54161__$1 = this;
return self__.meta54160;
}));

(cljs.core.async.t_cljs$core$async54159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54160","meta54160",1624580439,null)], null);
}));

(cljs.core.async.t_cljs$core$async54159.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54159");

(cljs.core.async.t_cljs$core$async54159.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54159");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54159.
 */
cljs.core.async.__GT_t_cljs$core$async54159 = (function cljs$core$async$__GT_t_cljs$core$async54159(f,blockable,meta54160){
return (new cljs.core.async.t_cljs$core$async54159(f,blockable,meta54160));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54158 = arguments.length;
switch (G__54158) {
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
return (new cljs.core.async.t_cljs$core$async54159(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54168 = arguments.length;
switch (G__54168) {
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
var G__54170 = arguments.length;
switch (G__54170) {
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
var G__54172 = arguments.length;
switch (G__54172) {
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
var val_55744 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55744) : fn1.call(null,val_55744));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55744) : fn1.call(null,val_55744));
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
var G__54174 = arguments.length;
switch (G__54174) {
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
var n__5616__auto___55748 = n;
var x_55749 = (0);
while(true){
if((x_55749 < n__5616__auto___55748)){
(a[x_55749] = x_55749);

var G__55750 = (x_55749 + (1));
x_55749 = G__55750;
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
cljs.core.async.t_cljs$core$async54177 = (function (flag,meta54178){
this.flag = flag;
this.meta54178 = meta54178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54179,meta54178__$1){
var self__ = this;
var _54179__$1 = this;
return (new cljs.core.async.t_cljs$core$async54177(self__.flag,meta54178__$1));
}));

(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54179){
var self__ = this;
var _54179__$1 = this;
return self__.meta54178;
}));

(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54178","meta54178",363216509,null)], null);
}));

(cljs.core.async.t_cljs$core$async54177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54177");

(cljs.core.async.t_cljs$core$async54177.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54177.
 */
cljs.core.async.__GT_t_cljs$core$async54177 = (function cljs$core$async$__GT_t_cljs$core$async54177(flag,meta54178){
return (new cljs.core.async.t_cljs$core$async54177(flag,meta54178));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async54177(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54180 = (function (flag,cb,meta54181){
this.flag = flag;
this.cb = cb;
this.meta54181 = meta54181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54182,meta54181__$1){
var self__ = this;
var _54182__$1 = this;
return (new cljs.core.async.t_cljs$core$async54180(self__.flag,self__.cb,meta54181__$1));
}));

(cljs.core.async.t_cljs$core$async54180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54182){
var self__ = this;
var _54182__$1 = this;
return self__.meta54181;
}));

(cljs.core.async.t_cljs$core$async54180.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54180.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54180.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54180.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54181","meta54181",-3180469,null)], null);
}));

(cljs.core.async.t_cljs$core$async54180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54180");

(cljs.core.async.t_cljs$core$async54180.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54180.
 */
cljs.core.async.__GT_t_cljs$core$async54180 = (function cljs$core$async$__GT_t_cljs$core$async54180(flag,cb,meta54181){
return (new cljs.core.async.t_cljs$core$async54180(flag,cb,meta54181));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async54180(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_55751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_55751)){
if((!(((port_55751.cljs$core$IFn$_invoke$arity$1 ? port_55751.cljs$core$IFn$_invoke$arity$1((1)) : port_55751.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__55752 = (i + (1));
i = G__55752;
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
return (function (p1__54183_SHARP_){
var G__54189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54183_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54189) : fret.call(null,G__54189));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__54184_SHARP_){
var G__54190 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54184_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54190) : fret.call(null,G__54190));
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
var G__55753 = (i + (1));
i = G__55753;
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
var len__5749__auto___55754 = arguments.length;
var i__5750__auto___55755 = (0);
while(true){
if((i__5750__auto___55755 < len__5749__auto___55754)){
args__5755__auto__.push((arguments[i__5750__auto___55755]));

var G__55756 = (i__5750__auto___55755 + (1));
i__5750__auto___55755 = G__55756;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54193){
var map__54194 = p__54193;
var map__54194__$1 = cljs.core.__destructure_map(map__54194);
var opts = map__54194__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54191){
var G__54192 = cljs.core.first(seq54191);
var seq54191__$1 = cljs.core.next(seq54191);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54192,seq54191__$1);
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
var G__54200 = arguments.length;
switch (G__54200) {
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
var c__54100__auto___55758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54232){
var state_val_54233 = (state_54232[(1)]);
if((state_val_54233 === (7))){
var inst_54227 = (state_54232[(2)]);
var state_54232__$1 = state_54232;
var statearr_54241_55759 = state_54232__$1;
(statearr_54241_55759[(2)] = inst_54227);

(statearr_54241_55759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (1))){
var state_54232__$1 = state_54232;
var statearr_54245_55760 = state_54232__$1;
(statearr_54245_55760[(2)] = null);

(statearr_54245_55760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (4))){
var inst_54207 = (state_54232[(7)]);
var inst_54207__$1 = (state_54232[(2)]);
var inst_54210 = (inst_54207__$1 == null);
var state_54232__$1 = (function (){var statearr_54249 = state_54232;
(statearr_54249[(7)] = inst_54207__$1);

return statearr_54249;
})();
if(cljs.core.truth_(inst_54210)){
var statearr_54250_55761 = state_54232__$1;
(statearr_54250_55761[(1)] = (5));

} else {
var statearr_54251_55762 = state_54232__$1;
(statearr_54251_55762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (13))){
var state_54232__$1 = state_54232;
var statearr_54252_55763 = state_54232__$1;
(statearr_54252_55763[(2)] = null);

(statearr_54252_55763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (6))){
var inst_54207 = (state_54232[(7)]);
var state_54232__$1 = state_54232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54232__$1,(11),to,inst_54207);
} else {
if((state_val_54233 === (3))){
var inst_54230 = (state_54232[(2)]);
var state_54232__$1 = state_54232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54232__$1,inst_54230);
} else {
if((state_val_54233 === (12))){
var state_54232__$1 = state_54232;
var statearr_54256_55764 = state_54232__$1;
(statearr_54256_55764[(2)] = null);

(statearr_54256_55764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (2))){
var state_54232__$1 = state_54232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54232__$1,(4),from);
} else {
if((state_val_54233 === (11))){
var inst_54219 = (state_54232[(2)]);
var state_54232__$1 = state_54232;
if(cljs.core.truth_(inst_54219)){
var statearr_54257_55765 = state_54232__$1;
(statearr_54257_55765[(1)] = (12));

} else {
var statearr_54258_55766 = state_54232__$1;
(statearr_54258_55766[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (9))){
var state_54232__$1 = state_54232;
var statearr_54259_55767 = state_54232__$1;
(statearr_54259_55767[(2)] = null);

(statearr_54259_55767[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (5))){
var state_54232__$1 = state_54232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54260_55768 = state_54232__$1;
(statearr_54260_55768[(1)] = (8));

} else {
var statearr_54261_55769 = state_54232__$1;
(statearr_54261_55769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (14))){
var inst_54225 = (state_54232[(2)]);
var state_54232__$1 = state_54232;
var statearr_54262_55770 = state_54232__$1;
(statearr_54262_55770[(2)] = inst_54225);

(statearr_54262_55770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (10))){
var inst_54216 = (state_54232[(2)]);
var state_54232__$1 = state_54232;
var statearr_54263_55773 = state_54232__$1;
(statearr_54263_55773[(2)] = inst_54216);

(statearr_54263_55773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54233 === (8))){
var inst_54213 = cljs.core.async.close_BANG_(to);
var state_54232__$1 = state_54232;
var statearr_54264_55774 = state_54232__$1;
(statearr_54264_55774[(2)] = inst_54213);

(statearr_54264_55774[(1)] = (10));


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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_54265 = [null,null,null,null,null,null,null,null];
(statearr_54265[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_54265[(1)] = (1));

return statearr_54265;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_54232){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54232);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54266){var ex__54033__auto__ = e54266;
var statearr_54267_55777 = state_54232;
(statearr_54267_55777[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54232[(4)]))){
var statearr_54268_55778 = state_54232;
(statearr_54268_55778[(1)] = cljs.core.first((state_54232[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55779 = state_54232;
state_54232 = G__55779;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_54232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_54232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54269 = f__54101__auto__();
(statearr_54269[(6)] = c__54100__auto___55758);

return statearr_54269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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
var process__$1 = (function (p__54272){
var vec__54273 = p__54272;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54273,(1),null);
var job = vec__54273;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54100__auto___55785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54283){
var state_val_54284 = (state_54283[(1)]);
if((state_val_54284 === (1))){
var state_54283__$1 = state_54283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54283__$1,(2),res,v);
} else {
if((state_val_54284 === (2))){
var inst_54280 = (state_54283[(2)]);
var inst_54281 = cljs.core.async.close_BANG_(res);
var state_54283__$1 = (function (){var statearr_54285 = state_54283;
(statearr_54285[(7)] = inst_54280);

return statearr_54285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54283__$1,inst_54281);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0 = (function (){
var statearr_54286 = [null,null,null,null,null,null,null,null];
(statearr_54286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__);

(statearr_54286[(1)] = (1));

return statearr_54286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1 = (function (state_54283){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54283);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54287){var ex__54033__auto__ = e54287;
var statearr_54288_55789 = state_54283;
(statearr_54288_55789[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54283[(4)]))){
var statearr_54289_55790 = state_54283;
(statearr_54289_55790[(1)] = cljs.core.first((state_54283[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55791 = state_54283;
state_54283 = G__55791;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = function(state_54283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1.call(this,state_54283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54290 = f__54101__auto__();
(statearr_54290[(6)] = c__54100__auto___55785);

return statearr_54290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54291){
var vec__54292 = p__54291;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54292,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54292,(1),null);
var job = vec__54292;
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
var n__5616__auto___55796 = n;
var __55797 = (0);
while(true){
if((__55797 < n__5616__auto___55796)){
var G__54295_55798 = type;
var G__54295_55799__$1 = (((G__54295_55798 instanceof cljs.core.Keyword))?G__54295_55798.fqn:null);
switch (G__54295_55799__$1) {
case "compute":
var c__54100__auto___55801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55797,c__54100__auto___55801,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async){
return (function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = ((function (__55797,c__54100__auto___55801,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async){
return (function (state_54309){
var state_val_54310 = (state_54309[(1)]);
if((state_val_54310 === (1))){
var state_54309__$1 = state_54309;
var statearr_54311_55802 = state_54309__$1;
(statearr_54311_55802[(2)] = null);

(statearr_54311_55802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54310 === (2))){
var state_54309__$1 = state_54309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54309__$1,(4),jobs);
} else {
if((state_val_54310 === (3))){
var inst_54307 = (state_54309[(2)]);
var state_54309__$1 = state_54309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54309__$1,inst_54307);
} else {
if((state_val_54310 === (4))){
var inst_54298 = (state_54309[(2)]);
var inst_54299 = process__$1(inst_54298);
var state_54309__$1 = state_54309;
if(cljs.core.truth_(inst_54299)){
var statearr_54312_55810 = state_54309__$1;
(statearr_54312_55810[(1)] = (5));

} else {
var statearr_54313_55811 = state_54309__$1;
(statearr_54313_55811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54310 === (5))){
var state_54309__$1 = state_54309;
var statearr_54314_55812 = state_54309__$1;
(statearr_54314_55812[(2)] = null);

(statearr_54314_55812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54310 === (6))){
var state_54309__$1 = state_54309;
var statearr_54315_55813 = state_54309__$1;
(statearr_54315_55813[(2)] = null);

(statearr_54315_55813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54310 === (7))){
var inst_54305 = (state_54309[(2)]);
var state_54309__$1 = state_54309;
var statearr_54316_55817 = state_54309__$1;
(statearr_54316_55817[(2)] = inst_54305);

(statearr_54316_55817[(1)] = (3));


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
});})(__55797,c__54100__auto___55801,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async))
;
return ((function (__55797,switch__54029__auto__,c__54100__auto___55801,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0 = (function (){
var statearr_54334 = [null,null,null,null,null,null,null];
(statearr_54334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__);

(statearr_54334[(1)] = (1));

return statearr_54334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1 = (function (state_54309){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54309);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54341){var ex__54033__auto__ = e54341;
var statearr_54342_55821 = state_54309;
(statearr_54342_55821[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54309[(4)]))){
var statearr_54343_55822 = state_54309;
(statearr_54343_55822[(1)] = cljs.core.first((state_54309[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55823 = state_54309;
state_54309 = G__55823;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = function(state_54309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1.call(this,state_54309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__;
})()
;})(__55797,switch__54029__auto__,c__54100__auto___55801,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async))
})();
var state__54102__auto__ = (function (){var statearr_54344 = f__54101__auto__();
(statearr_54344[(6)] = c__54100__auto___55801);

return statearr_54344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
});})(__55797,c__54100__auto___55801,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async))
);


break;
case "async":
var c__54100__auto___55824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55797,c__54100__auto___55824,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async){
return (function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = ((function (__55797,c__54100__auto___55824,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async){
return (function (state_54360){
var state_val_54361 = (state_54360[(1)]);
if((state_val_54361 === (1))){
var state_54360__$1 = state_54360;
var statearr_54362_55828 = state_54360__$1;
(statearr_54362_55828[(2)] = null);

(statearr_54362_55828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54361 === (2))){
var state_54360__$1 = state_54360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54360__$1,(4),jobs);
} else {
if((state_val_54361 === (3))){
var inst_54358 = (state_54360[(2)]);
var state_54360__$1 = state_54360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54360__$1,inst_54358);
} else {
if((state_val_54361 === (4))){
var inst_54348 = (state_54360[(2)]);
var inst_54349 = async(inst_54348);
var state_54360__$1 = state_54360;
if(cljs.core.truth_(inst_54349)){
var statearr_54379_55829 = state_54360__$1;
(statearr_54379_55829[(1)] = (5));

} else {
var statearr_54385_55830 = state_54360__$1;
(statearr_54385_55830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54361 === (5))){
var state_54360__$1 = state_54360;
var statearr_54386_55831 = state_54360__$1;
(statearr_54386_55831[(2)] = null);

(statearr_54386_55831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54361 === (6))){
var state_54360__$1 = state_54360;
var statearr_54387_55832 = state_54360__$1;
(statearr_54387_55832[(2)] = null);

(statearr_54387_55832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54361 === (7))){
var inst_54354 = (state_54360[(2)]);
var state_54360__$1 = state_54360;
var statearr_54388_55833 = state_54360__$1;
(statearr_54388_55833[(2)] = inst_54354);

(statearr_54388_55833[(1)] = (3));


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
});})(__55797,c__54100__auto___55824,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async))
;
return ((function (__55797,switch__54029__auto__,c__54100__auto___55824,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0 = (function (){
var statearr_54405 = [null,null,null,null,null,null,null];
(statearr_54405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__);

(statearr_54405[(1)] = (1));

return statearr_54405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1 = (function (state_54360){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54360);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54411){var ex__54033__auto__ = e54411;
var statearr_54416_55834 = state_54360;
(statearr_54416_55834[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54360[(4)]))){
var statearr_54422_55835 = state_54360;
(statearr_54422_55835[(1)] = cljs.core.first((state_54360[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55836 = state_54360;
state_54360 = G__55836;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = function(state_54360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1.call(this,state_54360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__;
})()
;})(__55797,switch__54029__auto__,c__54100__auto___55824,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async))
})();
var state__54102__auto__ = (function (){var statearr_54435 = f__54101__auto__();
(statearr_54435[(6)] = c__54100__auto___55824);

return statearr_54435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
});})(__55797,c__54100__auto___55824,G__54295_55798,G__54295_55799__$1,n__5616__auto___55796,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54295_55799__$1)].join('')));

}

var G__55837 = (__55797 + (1));
__55797 = G__55837;
continue;
} else {
}
break;
}

var c__54100__auto___55838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54458){
var state_val_54459 = (state_54458[(1)]);
if((state_val_54459 === (7))){
var inst_54454 = (state_54458[(2)]);
var state_54458__$1 = state_54458;
var statearr_54472_55839 = state_54458__$1;
(statearr_54472_55839[(2)] = inst_54454);

(statearr_54472_55839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54459 === (1))){
var state_54458__$1 = state_54458;
var statearr_54473_55840 = state_54458__$1;
(statearr_54473_55840[(2)] = null);

(statearr_54473_55840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54459 === (4))){
var inst_54438 = (state_54458[(7)]);
var inst_54438__$1 = (state_54458[(2)]);
var inst_54439 = (inst_54438__$1 == null);
var state_54458__$1 = (function (){var statearr_54474 = state_54458;
(statearr_54474[(7)] = inst_54438__$1);

return statearr_54474;
})();
if(cljs.core.truth_(inst_54439)){
var statearr_54475_55841 = state_54458__$1;
(statearr_54475_55841[(1)] = (5));

} else {
var statearr_54477_55842 = state_54458__$1;
(statearr_54477_55842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54459 === (6))){
var inst_54438 = (state_54458[(7)]);
var inst_54443 = (state_54458[(8)]);
var inst_54443__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54446 = [inst_54438,inst_54443__$1];
var inst_54447 = (new cljs.core.PersistentVector(null,2,(5),inst_54445,inst_54446,null));
var state_54458__$1 = (function (){var statearr_54478 = state_54458;
(statearr_54478[(8)] = inst_54443__$1);

return statearr_54478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54458__$1,(8),jobs,inst_54447);
} else {
if((state_val_54459 === (3))){
var inst_54456 = (state_54458[(2)]);
var state_54458__$1 = state_54458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54458__$1,inst_54456);
} else {
if((state_val_54459 === (2))){
var state_54458__$1 = state_54458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54458__$1,(4),from);
} else {
if((state_val_54459 === (9))){
var inst_54451 = (state_54458[(2)]);
var state_54458__$1 = (function (){var statearr_54479 = state_54458;
(statearr_54479[(9)] = inst_54451);

return statearr_54479;
})();
var statearr_54480_55843 = state_54458__$1;
(statearr_54480_55843[(2)] = null);

(statearr_54480_55843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54459 === (5))){
var inst_54441 = cljs.core.async.close_BANG_(jobs);
var state_54458__$1 = state_54458;
var statearr_54481_55844 = state_54458__$1;
(statearr_54481_55844[(2)] = inst_54441);

(statearr_54481_55844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54459 === (8))){
var inst_54443 = (state_54458[(8)]);
var inst_54449 = (state_54458[(2)]);
var state_54458__$1 = (function (){var statearr_54482 = state_54458;
(statearr_54482[(10)] = inst_54449);

return statearr_54482;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54458__$1,(9),results,inst_54443);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0 = (function (){
var statearr_54483 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54483[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__);

(statearr_54483[(1)] = (1));

return statearr_54483;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1 = (function (state_54458){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54458);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54484){var ex__54033__auto__ = e54484;
var statearr_54485_55845 = state_54458;
(statearr_54485_55845[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54458[(4)]))){
var statearr_54486_55846 = state_54458;
(statearr_54486_55846[(1)] = cljs.core.first((state_54458[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55847 = state_54458;
state_54458 = G__55847;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = function(state_54458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1.call(this,state_54458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54487 = f__54101__auto__();
(statearr_54487[(6)] = c__54100__auto___55838);

return statearr_54487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));


var c__54100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54525){
var state_val_54526 = (state_54525[(1)]);
if((state_val_54526 === (7))){
var inst_54521 = (state_54525[(2)]);
var state_54525__$1 = state_54525;
var statearr_54527_55848 = state_54525__$1;
(statearr_54527_55848[(2)] = inst_54521);

(statearr_54527_55848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (20))){
var state_54525__$1 = state_54525;
var statearr_54528_55849 = state_54525__$1;
(statearr_54528_55849[(2)] = null);

(statearr_54528_55849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (1))){
var state_54525__$1 = state_54525;
var statearr_54529_55850 = state_54525__$1;
(statearr_54529_55850[(2)] = null);

(statearr_54529_55850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (4))){
var inst_54490 = (state_54525[(7)]);
var inst_54490__$1 = (state_54525[(2)]);
var inst_54491 = (inst_54490__$1 == null);
var state_54525__$1 = (function (){var statearr_54530 = state_54525;
(statearr_54530[(7)] = inst_54490__$1);

return statearr_54530;
})();
if(cljs.core.truth_(inst_54491)){
var statearr_54531_55851 = state_54525__$1;
(statearr_54531_55851[(1)] = (5));

} else {
var statearr_54532_55852 = state_54525__$1;
(statearr_54532_55852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (15))){
var inst_54503 = (state_54525[(8)]);
var state_54525__$1 = state_54525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54525__$1,(18),to,inst_54503);
} else {
if((state_val_54526 === (21))){
var inst_54516 = (state_54525[(2)]);
var state_54525__$1 = state_54525;
var statearr_54533_55853 = state_54525__$1;
(statearr_54533_55853[(2)] = inst_54516);

(statearr_54533_55853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (13))){
var inst_54518 = (state_54525[(2)]);
var state_54525__$1 = (function (){var statearr_54534 = state_54525;
(statearr_54534[(9)] = inst_54518);

return statearr_54534;
})();
var statearr_54535_55854 = state_54525__$1;
(statearr_54535_55854[(2)] = null);

(statearr_54535_55854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (6))){
var inst_54490 = (state_54525[(7)]);
var state_54525__$1 = state_54525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54525__$1,(11),inst_54490);
} else {
if((state_val_54526 === (17))){
var inst_54511 = (state_54525[(2)]);
var state_54525__$1 = state_54525;
if(cljs.core.truth_(inst_54511)){
var statearr_54536_55855 = state_54525__$1;
(statearr_54536_55855[(1)] = (19));

} else {
var statearr_54537_55856 = state_54525__$1;
(statearr_54537_55856[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (3))){
var inst_54523 = (state_54525[(2)]);
var state_54525__$1 = state_54525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54525__$1,inst_54523);
} else {
if((state_val_54526 === (12))){
var inst_54500 = (state_54525[(10)]);
var state_54525__$1 = state_54525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54525__$1,(14),inst_54500);
} else {
if((state_val_54526 === (2))){
var state_54525__$1 = state_54525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54525__$1,(4),results);
} else {
if((state_val_54526 === (19))){
var state_54525__$1 = state_54525;
var statearr_54538_55857 = state_54525__$1;
(statearr_54538_55857[(2)] = null);

(statearr_54538_55857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (11))){
var inst_54500 = (state_54525[(2)]);
var state_54525__$1 = (function (){var statearr_54539 = state_54525;
(statearr_54539[(10)] = inst_54500);

return statearr_54539;
})();
var statearr_54540_55858 = state_54525__$1;
(statearr_54540_55858[(2)] = null);

(statearr_54540_55858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (9))){
var state_54525__$1 = state_54525;
var statearr_54541_55859 = state_54525__$1;
(statearr_54541_55859[(2)] = null);

(statearr_54541_55859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (5))){
var state_54525__$1 = state_54525;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54542_55860 = state_54525__$1;
(statearr_54542_55860[(1)] = (8));

} else {
var statearr_54543_55861 = state_54525__$1;
(statearr_54543_55861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (14))){
var inst_54503 = (state_54525[(8)]);
var inst_54505 = (state_54525[(11)]);
var inst_54503__$1 = (state_54525[(2)]);
var inst_54504 = (inst_54503__$1 == null);
var inst_54505__$1 = cljs.core.not(inst_54504);
var state_54525__$1 = (function (){var statearr_54544 = state_54525;
(statearr_54544[(8)] = inst_54503__$1);

(statearr_54544[(11)] = inst_54505__$1);

return statearr_54544;
})();
if(inst_54505__$1){
var statearr_54545_55862 = state_54525__$1;
(statearr_54545_55862[(1)] = (15));

} else {
var statearr_54546_55863 = state_54525__$1;
(statearr_54546_55863[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (16))){
var inst_54505 = (state_54525[(11)]);
var state_54525__$1 = state_54525;
var statearr_54547_55864 = state_54525__$1;
(statearr_54547_55864[(2)] = inst_54505);

(statearr_54547_55864[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (10))){
var inst_54497 = (state_54525[(2)]);
var state_54525__$1 = state_54525;
var statearr_54548_55865 = state_54525__$1;
(statearr_54548_55865[(2)] = inst_54497);

(statearr_54548_55865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (18))){
var inst_54508 = (state_54525[(2)]);
var state_54525__$1 = state_54525;
var statearr_54549_55866 = state_54525__$1;
(statearr_54549_55866[(2)] = inst_54508);

(statearr_54549_55866[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54526 === (8))){
var inst_54494 = cljs.core.async.close_BANG_(to);
var state_54525__$1 = state_54525;
var statearr_54550_55867 = state_54525__$1;
(statearr_54550_55867[(2)] = inst_54494);

(statearr_54550_55867[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0 = (function (){
var statearr_54551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54551[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__);

(statearr_54551[(1)] = (1));

return statearr_54551;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1 = (function (state_54525){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54525);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54552){var ex__54033__auto__ = e54552;
var statearr_54553_55868 = state_54525;
(statearr_54553_55868[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54525[(4)]))){
var statearr_54554_55869 = state_54525;
(statearr_54554_55869[(1)] = cljs.core.first((state_54525[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55870 = state_54525;
state_54525 = G__55870;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__ = function(state_54525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1.call(this,state_54525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54555 = f__54101__auto__();
(statearr_54555[(6)] = c__54100__auto__);

return statearr_54555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));

return c__54100__auto__;
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
var G__54557 = arguments.length;
switch (G__54557) {
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
var G__54559 = arguments.length;
switch (G__54559) {
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
var G__54561 = arguments.length;
switch (G__54561) {
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
var c__54100__auto___55901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54587){
var state_val_54588 = (state_54587[(1)]);
if((state_val_54588 === (7))){
var inst_54583 = (state_54587[(2)]);
var state_54587__$1 = state_54587;
var statearr_54589_55902 = state_54587__$1;
(statearr_54589_55902[(2)] = inst_54583);

(statearr_54589_55902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (1))){
var state_54587__$1 = state_54587;
var statearr_54590_55903 = state_54587__$1;
(statearr_54590_55903[(2)] = null);

(statearr_54590_55903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (4))){
var inst_54564 = (state_54587[(7)]);
var inst_54564__$1 = (state_54587[(2)]);
var inst_54565 = (inst_54564__$1 == null);
var state_54587__$1 = (function (){var statearr_54591 = state_54587;
(statearr_54591[(7)] = inst_54564__$1);

return statearr_54591;
})();
if(cljs.core.truth_(inst_54565)){
var statearr_54592_55904 = state_54587__$1;
(statearr_54592_55904[(1)] = (5));

} else {
var statearr_54593_55905 = state_54587__$1;
(statearr_54593_55905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (13))){
var state_54587__$1 = state_54587;
var statearr_54594_55906 = state_54587__$1;
(statearr_54594_55906[(2)] = null);

(statearr_54594_55906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (6))){
var inst_54564 = (state_54587[(7)]);
var inst_54570 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54564) : p.call(null,inst_54564));
var state_54587__$1 = state_54587;
if(cljs.core.truth_(inst_54570)){
var statearr_54595_55909 = state_54587__$1;
(statearr_54595_55909[(1)] = (9));

} else {
var statearr_54596_55910 = state_54587__$1;
(statearr_54596_55910[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (3))){
var inst_54585 = (state_54587[(2)]);
var state_54587__$1 = state_54587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54587__$1,inst_54585);
} else {
if((state_val_54588 === (12))){
var state_54587__$1 = state_54587;
var statearr_54597_55911 = state_54587__$1;
(statearr_54597_55911[(2)] = null);

(statearr_54597_55911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (2))){
var state_54587__$1 = state_54587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54587__$1,(4),ch);
} else {
if((state_val_54588 === (11))){
var inst_54564 = (state_54587[(7)]);
var inst_54574 = (state_54587[(2)]);
var state_54587__$1 = state_54587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54587__$1,(8),inst_54574,inst_54564);
} else {
if((state_val_54588 === (9))){
var state_54587__$1 = state_54587;
var statearr_54598_55912 = state_54587__$1;
(statearr_54598_55912[(2)] = tc);

(statearr_54598_55912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (5))){
var inst_54567 = cljs.core.async.close_BANG_(tc);
var inst_54568 = cljs.core.async.close_BANG_(fc);
var state_54587__$1 = (function (){var statearr_54599 = state_54587;
(statearr_54599[(8)] = inst_54567);

return statearr_54599;
})();
var statearr_54600_55917 = state_54587__$1;
(statearr_54600_55917[(2)] = inst_54568);

(statearr_54600_55917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (14))){
var inst_54581 = (state_54587[(2)]);
var state_54587__$1 = state_54587;
var statearr_54601_55918 = state_54587__$1;
(statearr_54601_55918[(2)] = inst_54581);

(statearr_54601_55918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (10))){
var state_54587__$1 = state_54587;
var statearr_54602_55919 = state_54587__$1;
(statearr_54602_55919[(2)] = fc);

(statearr_54602_55919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54588 === (8))){
var inst_54576 = (state_54587[(2)]);
var state_54587__$1 = state_54587;
if(cljs.core.truth_(inst_54576)){
var statearr_54603_55920 = state_54587__$1;
(statearr_54603_55920[(1)] = (12));

} else {
var statearr_54604_55921 = state_54587__$1;
(statearr_54604_55921[(1)] = (13));

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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_54605 = [null,null,null,null,null,null,null,null,null];
(statearr_54605[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_54605[(1)] = (1));

return statearr_54605;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_54587){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54587);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54606){var ex__54033__auto__ = e54606;
var statearr_54607_55922 = state_54587;
(statearr_54607_55922[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54587[(4)]))){
var statearr_54608_55923 = state_54587;
(statearr_54608_55923[(1)] = cljs.core.first((state_54587[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55924 = state_54587;
state_54587 = G__55924;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_54587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_54587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54609 = f__54101__auto__();
(statearr_54609[(6)] = c__54100__auto___55901);

return statearr_54609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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
var c__54100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54631){
var state_val_54632 = (state_54631[(1)]);
if((state_val_54632 === (7))){
var inst_54627 = (state_54631[(2)]);
var state_54631__$1 = state_54631;
var statearr_54633_55925 = state_54631__$1;
(statearr_54633_55925[(2)] = inst_54627);

(statearr_54633_55925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54632 === (1))){
var inst_54610 = init;
var inst_54611 = inst_54610;
var state_54631__$1 = (function (){var statearr_54634 = state_54631;
(statearr_54634[(7)] = inst_54611);

return statearr_54634;
})();
var statearr_54635_55926 = state_54631__$1;
(statearr_54635_55926[(2)] = null);

(statearr_54635_55926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54632 === (4))){
var inst_54614 = (state_54631[(8)]);
var inst_54614__$1 = (state_54631[(2)]);
var inst_54615 = (inst_54614__$1 == null);
var state_54631__$1 = (function (){var statearr_54636 = state_54631;
(statearr_54636[(8)] = inst_54614__$1);

return statearr_54636;
})();
if(cljs.core.truth_(inst_54615)){
var statearr_54637_55927 = state_54631__$1;
(statearr_54637_55927[(1)] = (5));

} else {
var statearr_54638_55928 = state_54631__$1;
(statearr_54638_55928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54632 === (6))){
var inst_54611 = (state_54631[(7)]);
var inst_54614 = (state_54631[(8)]);
var inst_54618 = (state_54631[(9)]);
var inst_54618__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54611,inst_54614) : f.call(null,inst_54611,inst_54614));
var inst_54619 = cljs.core.reduced_QMARK_(inst_54618__$1);
var state_54631__$1 = (function (){var statearr_54639 = state_54631;
(statearr_54639[(9)] = inst_54618__$1);

return statearr_54639;
})();
if(inst_54619){
var statearr_54640_55929 = state_54631__$1;
(statearr_54640_55929[(1)] = (8));

} else {
var statearr_54641_55930 = state_54631__$1;
(statearr_54641_55930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54632 === (3))){
var inst_54629 = (state_54631[(2)]);
var state_54631__$1 = state_54631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54631__$1,inst_54629);
} else {
if((state_val_54632 === (2))){
var state_54631__$1 = state_54631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54631__$1,(4),ch);
} else {
if((state_val_54632 === (9))){
var inst_54618 = (state_54631[(9)]);
var inst_54611 = inst_54618;
var state_54631__$1 = (function (){var statearr_54642 = state_54631;
(statearr_54642[(7)] = inst_54611);

return statearr_54642;
})();
var statearr_54643_55931 = state_54631__$1;
(statearr_54643_55931[(2)] = null);

(statearr_54643_55931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54632 === (5))){
var inst_54611 = (state_54631[(7)]);
var state_54631__$1 = state_54631;
var statearr_54644_55932 = state_54631__$1;
(statearr_54644_55932[(2)] = inst_54611);

(statearr_54644_55932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54632 === (10))){
var inst_54625 = (state_54631[(2)]);
var state_54631__$1 = state_54631;
var statearr_54645_55933 = state_54631__$1;
(statearr_54645_55933[(2)] = inst_54625);

(statearr_54645_55933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54632 === (8))){
var inst_54618 = (state_54631[(9)]);
var inst_54621 = cljs.core.deref(inst_54618);
var state_54631__$1 = state_54631;
var statearr_54646_55934 = state_54631__$1;
(statearr_54646_55934[(2)] = inst_54621);

(statearr_54646_55934[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54030__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54030__auto____0 = (function (){
var statearr_54647 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54647[(0)] = cljs$core$async$reduce_$_state_machine__54030__auto__);

(statearr_54647[(1)] = (1));

return statearr_54647;
});
var cljs$core$async$reduce_$_state_machine__54030__auto____1 = (function (state_54631){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54631);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54648){var ex__54033__auto__ = e54648;
var statearr_54649_55935 = state_54631;
(statearr_54649_55935[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54631[(4)]))){
var statearr_54650_55936 = state_54631;
(statearr_54650_55936[(1)] = cljs.core.first((state_54631[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55937 = state_54631;
state_54631 = G__55937;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54030__auto__ = function(state_54631){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54030__auto____1.call(this,state_54631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54030__auto____0;
cljs$core$async$reduce_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54030__auto____1;
return cljs$core$async$reduce_$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54651 = f__54101__auto__();
(statearr_54651[(6)] = c__54100__auto__);

return statearr_54651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));

return c__54100__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54657){
var state_val_54658 = (state_54657[(1)]);
if((state_val_54658 === (1))){
var inst_54652 = cljs.core.async.reduce(f__$1,init,ch);
var state_54657__$1 = state_54657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54657__$1,(2),inst_54652);
} else {
if((state_val_54658 === (2))){
var inst_54654 = (state_54657[(2)]);
var inst_54655 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54654) : f__$1.call(null,inst_54654));
var state_54657__$1 = state_54657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54657__$1,inst_54655);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54030__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54030__auto____0 = (function (){
var statearr_54659 = [null,null,null,null,null,null,null];
(statearr_54659[(0)] = cljs$core$async$transduce_$_state_machine__54030__auto__);

(statearr_54659[(1)] = (1));

return statearr_54659;
});
var cljs$core$async$transduce_$_state_machine__54030__auto____1 = (function (state_54657){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54657);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54660){var ex__54033__auto__ = e54660;
var statearr_54661_55938 = state_54657;
(statearr_54661_55938[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54657[(4)]))){
var statearr_54662_55939 = state_54657;
(statearr_54662_55939[(1)] = cljs.core.first((state_54657[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55941 = state_54657;
state_54657 = G__55941;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54030__auto__ = function(state_54657){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54030__auto____1.call(this,state_54657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54030__auto____0;
cljs$core$async$transduce_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54030__auto____1;
return cljs$core$async$transduce_$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54663 = f__54101__auto__();
(statearr_54663[(6)] = c__54100__auto__);

return statearr_54663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));

return c__54100__auto__;
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
var G__54665 = arguments.length;
switch (G__54665) {
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
var c__54100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54690){
var state_val_54691 = (state_54690[(1)]);
if((state_val_54691 === (7))){
var inst_54672 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54692_55943 = state_54690__$1;
(statearr_54692_55943[(2)] = inst_54672);

(statearr_54692_55943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (1))){
var inst_54666 = cljs.core.seq(coll);
var inst_54667 = inst_54666;
var state_54690__$1 = (function (){var statearr_54693 = state_54690;
(statearr_54693[(7)] = inst_54667);

return statearr_54693;
})();
var statearr_54694_55944 = state_54690__$1;
(statearr_54694_55944[(2)] = null);

(statearr_54694_55944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (4))){
var inst_54667 = (state_54690[(7)]);
var inst_54670 = cljs.core.first(inst_54667);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54690__$1,(7),ch,inst_54670);
} else {
if((state_val_54691 === (13))){
var inst_54684 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54695_55945 = state_54690__$1;
(statearr_54695_55945[(2)] = inst_54684);

(statearr_54695_55945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (6))){
var inst_54675 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54675)){
var statearr_54696_55946 = state_54690__$1;
(statearr_54696_55946[(1)] = (8));

} else {
var statearr_54697_55947 = state_54690__$1;
(statearr_54697_55947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (3))){
var inst_54688 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54690__$1,inst_54688);
} else {
if((state_val_54691 === (12))){
var state_54690__$1 = state_54690;
var statearr_54698_55948 = state_54690__$1;
(statearr_54698_55948[(2)] = null);

(statearr_54698_55948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (2))){
var inst_54667 = (state_54690[(7)]);
var state_54690__$1 = state_54690;
if(cljs.core.truth_(inst_54667)){
var statearr_54699_55949 = state_54690__$1;
(statearr_54699_55949[(1)] = (4));

} else {
var statearr_54700_55950 = state_54690__$1;
(statearr_54700_55950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (11))){
var inst_54681 = cljs.core.async.close_BANG_(ch);
var state_54690__$1 = state_54690;
var statearr_54701_55951 = state_54690__$1;
(statearr_54701_55951[(2)] = inst_54681);

(statearr_54701_55951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (9))){
var state_54690__$1 = state_54690;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54702_55952 = state_54690__$1;
(statearr_54702_55952[(1)] = (11));

} else {
var statearr_54703_55953 = state_54690__$1;
(statearr_54703_55953[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (5))){
var inst_54667 = (state_54690[(7)]);
var state_54690__$1 = state_54690;
var statearr_54704_55954 = state_54690__$1;
(statearr_54704_55954[(2)] = inst_54667);

(statearr_54704_55954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (10))){
var inst_54686 = (state_54690[(2)]);
var state_54690__$1 = state_54690;
var statearr_54705_55955 = state_54690__$1;
(statearr_54705_55955[(2)] = inst_54686);

(statearr_54705_55955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54691 === (8))){
var inst_54667 = (state_54690[(7)]);
var inst_54677 = cljs.core.next(inst_54667);
var inst_54667__$1 = inst_54677;
var state_54690__$1 = (function (){var statearr_54706 = state_54690;
(statearr_54706[(7)] = inst_54667__$1);

return statearr_54706;
})();
var statearr_54707_55956 = state_54690__$1;
(statearr_54707_55956[(2)] = null);

(statearr_54707_55956[(1)] = (2));


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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_54708 = [null,null,null,null,null,null,null,null];
(statearr_54708[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_54708[(1)] = (1));

return statearr_54708;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_54690){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54690);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54709){var ex__54033__auto__ = e54709;
var statearr_54710_55957 = state_54690;
(statearr_54710_55957[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54690[(4)]))){
var statearr_54711_55958 = state_54690;
(statearr_54711_55958[(1)] = cljs.core.first((state_54690[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55959 = state_54690;
state_54690 = G__55959;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_54690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_54690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54712 = f__54101__auto__();
(statearr_54712[(6)] = c__54100__auto__);

return statearr_54712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));

return c__54100__auto__;
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
var G__54714 = arguments.length;
switch (G__54714) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_55961 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_55961(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_55962 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_55962(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_55963 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_55963(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_55964 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_55964(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54715 = (function (ch,cs,meta54716){
this.ch = ch;
this.cs = cs;
this.meta54716 = meta54716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54717,meta54716__$1){
var self__ = this;
var _54717__$1 = this;
return (new cljs.core.async.t_cljs$core$async54715(self__.ch,self__.cs,meta54716__$1));
}));

(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54717){
var self__ = this;
var _54717__$1 = this;
return self__.meta54716;
}));

(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54715.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54716","meta54716",-1799156715,null)], null);
}));

(cljs.core.async.t_cljs$core$async54715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54715");

(cljs.core.async.t_cljs$core$async54715.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54715.
 */
cljs.core.async.__GT_t_cljs$core$async54715 = (function cljs$core$async$__GT_t_cljs$core$async54715(ch,cs,meta54716){
return (new cljs.core.async.t_cljs$core$async54715(ch,cs,meta54716));
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
var m = (new cljs.core.async.t_cljs$core$async54715(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54100__auto___55966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_54850){
var state_val_54851 = (state_54850[(1)]);
if((state_val_54851 === (7))){
var inst_54846 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54852_55967 = state_54850__$1;
(statearr_54852_55967[(2)] = inst_54846);

(statearr_54852_55967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (20))){
var inst_54751 = (state_54850[(7)]);
var inst_54763 = cljs.core.first(inst_54751);
var inst_54764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54763,(0),null);
var inst_54765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54763,(1),null);
var state_54850__$1 = (function (){var statearr_54853 = state_54850;
(statearr_54853[(8)] = inst_54764);

return statearr_54853;
})();
if(cljs.core.truth_(inst_54765)){
var statearr_54854_55968 = state_54850__$1;
(statearr_54854_55968[(1)] = (22));

} else {
var statearr_54855_55969 = state_54850__$1;
(statearr_54855_55969[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (27))){
var inst_54793 = (state_54850[(9)]);
var inst_54795 = (state_54850[(10)]);
var inst_54800 = (state_54850[(11)]);
var inst_54720 = (state_54850[(12)]);
var inst_54800__$1 = cljs.core._nth(inst_54793,inst_54795);
var inst_54801 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54800__$1,inst_54720,done);
var state_54850__$1 = (function (){var statearr_54856 = state_54850;
(statearr_54856[(11)] = inst_54800__$1);

return statearr_54856;
})();
if(cljs.core.truth_(inst_54801)){
var statearr_54857_55970 = state_54850__$1;
(statearr_54857_55970[(1)] = (30));

} else {
var statearr_54858_55971 = state_54850__$1;
(statearr_54858_55971[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (1))){
var state_54850__$1 = state_54850;
var statearr_54859_55972 = state_54850__$1;
(statearr_54859_55972[(2)] = null);

(statearr_54859_55972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (24))){
var inst_54751 = (state_54850[(7)]);
var inst_54770 = (state_54850[(2)]);
var inst_54771 = cljs.core.next(inst_54751);
var inst_54729 = inst_54771;
var inst_54730 = null;
var inst_54731 = (0);
var inst_54732 = (0);
var state_54850__$1 = (function (){var statearr_54860 = state_54850;
(statearr_54860[(13)] = inst_54770);

(statearr_54860[(14)] = inst_54729);

(statearr_54860[(15)] = inst_54730);

(statearr_54860[(16)] = inst_54731);

(statearr_54860[(17)] = inst_54732);

return statearr_54860;
})();
var statearr_54861_55973 = state_54850__$1;
(statearr_54861_55973[(2)] = null);

(statearr_54861_55973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (39))){
var state_54850__$1 = state_54850;
var statearr_54865_55974 = state_54850__$1;
(statearr_54865_55974[(2)] = null);

(statearr_54865_55974[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (4))){
var inst_54720 = (state_54850[(12)]);
var inst_54720__$1 = (state_54850[(2)]);
var inst_54721 = (inst_54720__$1 == null);
var state_54850__$1 = (function (){var statearr_54866 = state_54850;
(statearr_54866[(12)] = inst_54720__$1);

return statearr_54866;
})();
if(cljs.core.truth_(inst_54721)){
var statearr_54867_55975 = state_54850__$1;
(statearr_54867_55975[(1)] = (5));

} else {
var statearr_54868_55976 = state_54850__$1;
(statearr_54868_55976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (15))){
var inst_54732 = (state_54850[(17)]);
var inst_54729 = (state_54850[(14)]);
var inst_54730 = (state_54850[(15)]);
var inst_54731 = (state_54850[(16)]);
var inst_54747 = (state_54850[(2)]);
var inst_54748 = (inst_54732 + (1));
var tmp54862 = inst_54729;
var tmp54863 = inst_54731;
var tmp54864 = inst_54730;
var inst_54729__$1 = tmp54862;
var inst_54730__$1 = tmp54864;
var inst_54731__$1 = tmp54863;
var inst_54732__$1 = inst_54748;
var state_54850__$1 = (function (){var statearr_54869 = state_54850;
(statearr_54869[(18)] = inst_54747);

(statearr_54869[(14)] = inst_54729__$1);

(statearr_54869[(15)] = inst_54730__$1);

(statearr_54869[(16)] = inst_54731__$1);

(statearr_54869[(17)] = inst_54732__$1);

return statearr_54869;
})();
var statearr_54870_55977 = state_54850__$1;
(statearr_54870_55977[(2)] = null);

(statearr_54870_55977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (21))){
var inst_54774 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54874_55978 = state_54850__$1;
(statearr_54874_55978[(2)] = inst_54774);

(statearr_54874_55978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (31))){
var inst_54800 = (state_54850[(11)]);
var inst_54804 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54800);
var state_54850__$1 = state_54850;
var statearr_54875_55979 = state_54850__$1;
(statearr_54875_55979[(2)] = inst_54804);

(statearr_54875_55979[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (32))){
var inst_54795 = (state_54850[(10)]);
var inst_54792 = (state_54850[(19)]);
var inst_54793 = (state_54850[(9)]);
var inst_54794 = (state_54850[(20)]);
var inst_54806 = (state_54850[(2)]);
var inst_54807 = (inst_54795 + (1));
var tmp54871 = inst_54794;
var tmp54872 = inst_54793;
var tmp54873 = inst_54792;
var inst_54792__$1 = tmp54873;
var inst_54793__$1 = tmp54872;
var inst_54794__$1 = tmp54871;
var inst_54795__$1 = inst_54807;
var state_54850__$1 = (function (){var statearr_54876 = state_54850;
(statearr_54876[(21)] = inst_54806);

(statearr_54876[(19)] = inst_54792__$1);

(statearr_54876[(9)] = inst_54793__$1);

(statearr_54876[(20)] = inst_54794__$1);

(statearr_54876[(10)] = inst_54795__$1);

return statearr_54876;
})();
var statearr_54877_55984 = state_54850__$1;
(statearr_54877_55984[(2)] = null);

(statearr_54877_55984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (40))){
var inst_54819 = (state_54850[(22)]);
var inst_54823 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54819);
var state_54850__$1 = state_54850;
var statearr_54878_55985 = state_54850__$1;
(statearr_54878_55985[(2)] = inst_54823);

(statearr_54878_55985[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (33))){
var inst_54810 = (state_54850[(23)]);
var inst_54812 = cljs.core.chunked_seq_QMARK_(inst_54810);
var state_54850__$1 = state_54850;
if(inst_54812){
var statearr_54879_55986 = state_54850__$1;
(statearr_54879_55986[(1)] = (36));

} else {
var statearr_54880_55988 = state_54850__$1;
(statearr_54880_55988[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (13))){
var inst_54741 = (state_54850[(24)]);
var inst_54744 = cljs.core.async.close_BANG_(inst_54741);
var state_54850__$1 = state_54850;
var statearr_54881_55992 = state_54850__$1;
(statearr_54881_55992[(2)] = inst_54744);

(statearr_54881_55992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (22))){
var inst_54764 = (state_54850[(8)]);
var inst_54767 = cljs.core.async.close_BANG_(inst_54764);
var state_54850__$1 = state_54850;
var statearr_54882_55993 = state_54850__$1;
(statearr_54882_55993[(2)] = inst_54767);

(statearr_54882_55993[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (36))){
var inst_54810 = (state_54850[(23)]);
var inst_54814 = cljs.core.chunk_first(inst_54810);
var inst_54815 = cljs.core.chunk_rest(inst_54810);
var inst_54816 = cljs.core.count(inst_54814);
var inst_54792 = inst_54815;
var inst_54793 = inst_54814;
var inst_54794 = inst_54816;
var inst_54795 = (0);
var state_54850__$1 = (function (){var statearr_54883 = state_54850;
(statearr_54883[(19)] = inst_54792);

(statearr_54883[(9)] = inst_54793);

(statearr_54883[(20)] = inst_54794);

(statearr_54883[(10)] = inst_54795);

return statearr_54883;
})();
var statearr_54884_55995 = state_54850__$1;
(statearr_54884_55995[(2)] = null);

(statearr_54884_55995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (41))){
var inst_54810 = (state_54850[(23)]);
var inst_54825 = (state_54850[(2)]);
var inst_54826 = cljs.core.next(inst_54810);
var inst_54792 = inst_54826;
var inst_54793 = null;
var inst_54794 = (0);
var inst_54795 = (0);
var state_54850__$1 = (function (){var statearr_54885 = state_54850;
(statearr_54885[(25)] = inst_54825);

(statearr_54885[(19)] = inst_54792);

(statearr_54885[(9)] = inst_54793);

(statearr_54885[(20)] = inst_54794);

(statearr_54885[(10)] = inst_54795);

return statearr_54885;
})();
var statearr_54886_55999 = state_54850__$1;
(statearr_54886_55999[(2)] = null);

(statearr_54886_55999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (43))){
var state_54850__$1 = state_54850;
var statearr_54887_56000 = state_54850__$1;
(statearr_54887_56000[(2)] = null);

(statearr_54887_56000[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (29))){
var inst_54834 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54888_56001 = state_54850__$1;
(statearr_54888_56001[(2)] = inst_54834);

(statearr_54888_56001[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (44))){
var inst_54843 = (state_54850[(2)]);
var state_54850__$1 = (function (){var statearr_54889 = state_54850;
(statearr_54889[(26)] = inst_54843);

return statearr_54889;
})();
var statearr_54890_56002 = state_54850__$1;
(statearr_54890_56002[(2)] = null);

(statearr_54890_56002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (6))){
var inst_54784 = (state_54850[(27)]);
var inst_54783 = cljs.core.deref(cs);
var inst_54784__$1 = cljs.core.keys(inst_54783);
var inst_54785 = cljs.core.count(inst_54784__$1);
var inst_54786 = cljs.core.reset_BANG_(dctr,inst_54785);
var inst_54791 = cljs.core.seq(inst_54784__$1);
var inst_54792 = inst_54791;
var inst_54793 = null;
var inst_54794 = (0);
var inst_54795 = (0);
var state_54850__$1 = (function (){var statearr_54891 = state_54850;
(statearr_54891[(27)] = inst_54784__$1);

(statearr_54891[(28)] = inst_54786);

(statearr_54891[(19)] = inst_54792);

(statearr_54891[(9)] = inst_54793);

(statearr_54891[(20)] = inst_54794);

(statearr_54891[(10)] = inst_54795);

return statearr_54891;
})();
var statearr_54892_56004 = state_54850__$1;
(statearr_54892_56004[(2)] = null);

(statearr_54892_56004[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (28))){
var inst_54792 = (state_54850[(19)]);
var inst_54810 = (state_54850[(23)]);
var inst_54810__$1 = cljs.core.seq(inst_54792);
var state_54850__$1 = (function (){var statearr_54893 = state_54850;
(statearr_54893[(23)] = inst_54810__$1);

return statearr_54893;
})();
if(inst_54810__$1){
var statearr_54894_56008 = state_54850__$1;
(statearr_54894_56008[(1)] = (33));

} else {
var statearr_54895_56009 = state_54850__$1;
(statearr_54895_56009[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (25))){
var inst_54795 = (state_54850[(10)]);
var inst_54794 = (state_54850[(20)]);
var inst_54797 = (inst_54795 < inst_54794);
var inst_54798 = inst_54797;
var state_54850__$1 = state_54850;
if(cljs.core.truth_(inst_54798)){
var statearr_54896_56010 = state_54850__$1;
(statearr_54896_56010[(1)] = (27));

} else {
var statearr_54897_56012 = state_54850__$1;
(statearr_54897_56012[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (34))){
var state_54850__$1 = state_54850;
var statearr_54898_56016 = state_54850__$1;
(statearr_54898_56016[(2)] = null);

(statearr_54898_56016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (17))){
var state_54850__$1 = state_54850;
var statearr_54899_56017 = state_54850__$1;
(statearr_54899_56017[(2)] = null);

(statearr_54899_56017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (3))){
var inst_54848 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54850__$1,inst_54848);
} else {
if((state_val_54851 === (12))){
var inst_54779 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54900_56018 = state_54850__$1;
(statearr_54900_56018[(2)] = inst_54779);

(statearr_54900_56018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (2))){
var state_54850__$1 = state_54850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54850__$1,(4),ch);
} else {
if((state_val_54851 === (23))){
var state_54850__$1 = state_54850;
var statearr_54901_56020 = state_54850__$1;
(statearr_54901_56020[(2)] = null);

(statearr_54901_56020[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (35))){
var inst_54832 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54902_56021 = state_54850__$1;
(statearr_54902_56021[(2)] = inst_54832);

(statearr_54902_56021[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (19))){
var inst_54751 = (state_54850[(7)]);
var inst_54755 = cljs.core.chunk_first(inst_54751);
var inst_54756 = cljs.core.chunk_rest(inst_54751);
var inst_54757 = cljs.core.count(inst_54755);
var inst_54729 = inst_54756;
var inst_54730 = inst_54755;
var inst_54731 = inst_54757;
var inst_54732 = (0);
var state_54850__$1 = (function (){var statearr_54903 = state_54850;
(statearr_54903[(14)] = inst_54729);

(statearr_54903[(15)] = inst_54730);

(statearr_54903[(16)] = inst_54731);

(statearr_54903[(17)] = inst_54732);

return statearr_54903;
})();
var statearr_54904_56027 = state_54850__$1;
(statearr_54904_56027[(2)] = null);

(statearr_54904_56027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (11))){
var inst_54729 = (state_54850[(14)]);
var inst_54751 = (state_54850[(7)]);
var inst_54751__$1 = cljs.core.seq(inst_54729);
var state_54850__$1 = (function (){var statearr_54905 = state_54850;
(statearr_54905[(7)] = inst_54751__$1);

return statearr_54905;
})();
if(inst_54751__$1){
var statearr_54906_56028 = state_54850__$1;
(statearr_54906_56028[(1)] = (16));

} else {
var statearr_54907_56029 = state_54850__$1;
(statearr_54907_56029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (9))){
var inst_54781 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54908_56030 = state_54850__$1;
(statearr_54908_56030[(2)] = inst_54781);

(statearr_54908_56030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (5))){
var inst_54727 = cljs.core.deref(cs);
var inst_54728 = cljs.core.seq(inst_54727);
var inst_54729 = inst_54728;
var inst_54730 = null;
var inst_54731 = (0);
var inst_54732 = (0);
var state_54850__$1 = (function (){var statearr_54909 = state_54850;
(statearr_54909[(14)] = inst_54729);

(statearr_54909[(15)] = inst_54730);

(statearr_54909[(16)] = inst_54731);

(statearr_54909[(17)] = inst_54732);

return statearr_54909;
})();
var statearr_54910_56031 = state_54850__$1;
(statearr_54910_56031[(2)] = null);

(statearr_54910_56031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (14))){
var state_54850__$1 = state_54850;
var statearr_54911_56032 = state_54850__$1;
(statearr_54911_56032[(2)] = null);

(statearr_54911_56032[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (45))){
var inst_54840 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54912_56033 = state_54850__$1;
(statearr_54912_56033[(2)] = inst_54840);

(statearr_54912_56033[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (26))){
var inst_54784 = (state_54850[(27)]);
var inst_54836 = (state_54850[(2)]);
var inst_54837 = cljs.core.seq(inst_54784);
var state_54850__$1 = (function (){var statearr_54913 = state_54850;
(statearr_54913[(29)] = inst_54836);

return statearr_54913;
})();
if(inst_54837){
var statearr_54914_56034 = state_54850__$1;
(statearr_54914_56034[(1)] = (42));

} else {
var statearr_54915_56035 = state_54850__$1;
(statearr_54915_56035[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (16))){
var inst_54751 = (state_54850[(7)]);
var inst_54753 = cljs.core.chunked_seq_QMARK_(inst_54751);
var state_54850__$1 = state_54850;
if(inst_54753){
var statearr_54916_56036 = state_54850__$1;
(statearr_54916_56036[(1)] = (19));

} else {
var statearr_54917_56037 = state_54850__$1;
(statearr_54917_56037[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (38))){
var inst_54829 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54918_56038 = state_54850__$1;
(statearr_54918_56038[(2)] = inst_54829);

(statearr_54918_56038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (30))){
var state_54850__$1 = state_54850;
var statearr_54919_56039 = state_54850__$1;
(statearr_54919_56039[(2)] = null);

(statearr_54919_56039[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (10))){
var inst_54730 = (state_54850[(15)]);
var inst_54732 = (state_54850[(17)]);
var inst_54740 = cljs.core._nth(inst_54730,inst_54732);
var inst_54741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54740,(0),null);
var inst_54742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54740,(1),null);
var state_54850__$1 = (function (){var statearr_54920 = state_54850;
(statearr_54920[(24)] = inst_54741);

return statearr_54920;
})();
if(cljs.core.truth_(inst_54742)){
var statearr_54921_56040 = state_54850__$1;
(statearr_54921_56040[(1)] = (13));

} else {
var statearr_54922_56041 = state_54850__$1;
(statearr_54922_56041[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (18))){
var inst_54777 = (state_54850[(2)]);
var state_54850__$1 = state_54850;
var statearr_54923_56042 = state_54850__$1;
(statearr_54923_56042[(2)] = inst_54777);

(statearr_54923_56042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (42))){
var state_54850__$1 = state_54850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54850__$1,(45),dchan);
} else {
if((state_val_54851 === (37))){
var inst_54810 = (state_54850[(23)]);
var inst_54819 = (state_54850[(22)]);
var inst_54720 = (state_54850[(12)]);
var inst_54819__$1 = cljs.core.first(inst_54810);
var inst_54820 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54819__$1,inst_54720,done);
var state_54850__$1 = (function (){var statearr_54924 = state_54850;
(statearr_54924[(22)] = inst_54819__$1);

return statearr_54924;
})();
if(cljs.core.truth_(inst_54820)){
var statearr_54925_56043 = state_54850__$1;
(statearr_54925_56043[(1)] = (39));

} else {
var statearr_54926_56044 = state_54850__$1;
(statearr_54926_56044[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54851 === (8))){
var inst_54732 = (state_54850[(17)]);
var inst_54731 = (state_54850[(16)]);
var inst_54734 = (inst_54732 < inst_54731);
var inst_54735 = inst_54734;
var state_54850__$1 = state_54850;
if(cljs.core.truth_(inst_54735)){
var statearr_54927_56049 = state_54850__$1;
(statearr_54927_56049[(1)] = (10));

} else {
var statearr_54928_56050 = state_54850__$1;
(statearr_54928_56050[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54030__auto__ = null;
var cljs$core$async$mult_$_state_machine__54030__auto____0 = (function (){
var statearr_54929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54929[(0)] = cljs$core$async$mult_$_state_machine__54030__auto__);

(statearr_54929[(1)] = (1));

return statearr_54929;
});
var cljs$core$async$mult_$_state_machine__54030__auto____1 = (function (state_54850){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_54850);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e54930){var ex__54033__auto__ = e54930;
var statearr_54931_56055 = state_54850;
(statearr_54931_56055[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_54850[(4)]))){
var statearr_54932_56057 = state_54850;
(statearr_54932_56057[(1)] = cljs.core.first((state_54850[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56061 = state_54850;
state_54850 = G__56061;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54030__auto__ = function(state_54850){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54030__auto____1.call(this,state_54850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54030__auto____0;
cljs$core$async$mult_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54030__auto____1;
return cljs$core$async$mult_$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_54933 = f__54101__auto__();
(statearr_54933[(6)] = c__54100__auto___55966);

return statearr_54933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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
var G__54935 = arguments.length;
switch (G__54935) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56072 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56072(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56077 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56077(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56078 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56078(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56083 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56083(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56088 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56088(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56094 = arguments.length;
var i__5750__auto___56095 = (0);
while(true){
if((i__5750__auto___56095 < len__5749__auto___56094)){
args__5755__auto__.push((arguments[i__5750__auto___56095]));

var G__56096 = (i__5750__auto___56095 + (1));
i__5750__auto___56095 = G__56096;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54940){
var map__54941 = p__54940;
var map__54941__$1 = cljs.core.__destructure_map(map__54941);
var opts = map__54941__$1;
var statearr_54942_56099 = state;
(statearr_54942_56099[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_54943_56101 = state;
(statearr_54943_56101[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_54944_56105 = state;
(statearr_54944_56105[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54936){
var G__54937 = cljs.core.first(seq54936);
var seq54936__$1 = cljs.core.next(seq54936);
var G__54938 = cljs.core.first(seq54936__$1);
var seq54936__$2 = cljs.core.next(seq54936__$1);
var G__54939 = cljs.core.first(seq54936__$2);
var seq54936__$3 = cljs.core.next(seq54936__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54937,G__54938,G__54939,seq54936__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54945 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54946){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta54946 = meta54946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54947,meta54946__$1){
var self__ = this;
var _54947__$1 = this;
return (new cljs.core.async.t_cljs$core$async54945(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54946__$1));
}));

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54947){
var self__ = this;
var _54947__$1 = this;
return self__.meta54946;
}));

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta54946","meta54946",943953420,null)], null);
}));

(cljs.core.async.t_cljs$core$async54945.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54945");

(cljs.core.async.t_cljs$core$async54945.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54945");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54945.
 */
cljs.core.async.__GT_t_cljs$core$async54945 = (function cljs$core$async$__GT_t_cljs$core$async54945(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54946){
return (new cljs.core.async.t_cljs$core$async54945(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54946));
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
var m = (new cljs.core.async.t_cljs$core$async54945(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__54100__auto___56115 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55015){
var state_val_55016 = (state_55015[(1)]);
if((state_val_55016 === (7))){
var inst_54975 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
if(cljs.core.truth_(inst_54975)){
var statearr_55017_56116 = state_55015__$1;
(statearr_55017_56116[(1)] = (8));

} else {
var statearr_55018_56117 = state_55015__$1;
(statearr_55018_56117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (20))){
var inst_54968 = (state_55015[(7)]);
var state_55015__$1 = state_55015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55015__$1,(23),out,inst_54968);
} else {
if((state_val_55016 === (1))){
var inst_54951 = calc_state();
var inst_54952 = cljs.core.__destructure_map(inst_54951);
var inst_54953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54952,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54952,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54952,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54956 = inst_54951;
var state_55015__$1 = (function (){var statearr_55019 = state_55015;
(statearr_55019[(8)] = inst_54953);

(statearr_55019[(9)] = inst_54954);

(statearr_55019[(10)] = inst_54955);

(statearr_55019[(11)] = inst_54956);

return statearr_55019;
})();
var statearr_55020_56118 = state_55015__$1;
(statearr_55020_56118[(2)] = null);

(statearr_55020_56118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (24))){
var inst_54959 = (state_55015[(12)]);
var inst_54956 = inst_54959;
var state_55015__$1 = (function (){var statearr_55021 = state_55015;
(statearr_55021[(11)] = inst_54956);

return statearr_55021;
})();
var statearr_55022_56120 = state_55015__$1;
(statearr_55022_56120[(2)] = null);

(statearr_55022_56120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (4))){
var inst_54968 = (state_55015[(7)]);
var inst_54970 = (state_55015[(13)]);
var inst_54967 = (state_55015[(2)]);
var inst_54968__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54967,(0),null);
var inst_54969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54967,(1),null);
var inst_54970__$1 = (inst_54968__$1 == null);
var state_55015__$1 = (function (){var statearr_55023 = state_55015;
(statearr_55023[(7)] = inst_54968__$1);

(statearr_55023[(14)] = inst_54969);

(statearr_55023[(13)] = inst_54970__$1);

return statearr_55023;
})();
if(cljs.core.truth_(inst_54970__$1)){
var statearr_55024_56124 = state_55015__$1;
(statearr_55024_56124[(1)] = (5));

} else {
var statearr_55025_56125 = state_55015__$1;
(statearr_55025_56125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (15))){
var inst_54960 = (state_55015[(15)]);
var inst_54989 = (state_55015[(16)]);
var inst_54989__$1 = cljs.core.empty_QMARK_(inst_54960);
var state_55015__$1 = (function (){var statearr_55026 = state_55015;
(statearr_55026[(16)] = inst_54989__$1);

return statearr_55026;
})();
if(inst_54989__$1){
var statearr_55027_56126 = state_55015__$1;
(statearr_55027_56126[(1)] = (17));

} else {
var statearr_55028_56127 = state_55015__$1;
(statearr_55028_56127[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (21))){
var inst_54959 = (state_55015[(12)]);
var inst_54956 = inst_54959;
var state_55015__$1 = (function (){var statearr_55029 = state_55015;
(statearr_55029[(11)] = inst_54956);

return statearr_55029;
})();
var statearr_55030_56129 = state_55015__$1;
(statearr_55030_56129[(2)] = null);

(statearr_55030_56129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (13))){
var inst_54982 = (state_55015[(2)]);
var inst_54983 = calc_state();
var inst_54956 = inst_54983;
var state_55015__$1 = (function (){var statearr_55031 = state_55015;
(statearr_55031[(17)] = inst_54982);

(statearr_55031[(11)] = inst_54956);

return statearr_55031;
})();
var statearr_55032_56130 = state_55015__$1;
(statearr_55032_56130[(2)] = null);

(statearr_55032_56130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (22))){
var inst_55009 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
var statearr_55033_56131 = state_55015__$1;
(statearr_55033_56131[(2)] = inst_55009);

(statearr_55033_56131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (6))){
var inst_54969 = (state_55015[(14)]);
var inst_54973 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54969,change);
var state_55015__$1 = state_55015;
var statearr_55034_56132 = state_55015__$1;
(statearr_55034_56132[(2)] = inst_54973);

(statearr_55034_56132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (25))){
var state_55015__$1 = state_55015;
var statearr_55035_56133 = state_55015__$1;
(statearr_55035_56133[(2)] = null);

(statearr_55035_56133[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (17))){
var inst_54961 = (state_55015[(18)]);
var inst_54969 = (state_55015[(14)]);
var inst_54991 = (inst_54961.cljs$core$IFn$_invoke$arity$1 ? inst_54961.cljs$core$IFn$_invoke$arity$1(inst_54969) : inst_54961.call(null,inst_54969));
var inst_54992 = cljs.core.not(inst_54991);
var state_55015__$1 = state_55015;
var statearr_55036_56135 = state_55015__$1;
(statearr_55036_56135[(2)] = inst_54992);

(statearr_55036_56135[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (3))){
var inst_55013 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55015__$1,inst_55013);
} else {
if((state_val_55016 === (12))){
var state_55015__$1 = state_55015;
var statearr_55037_56136 = state_55015__$1;
(statearr_55037_56136[(2)] = null);

(statearr_55037_56136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (2))){
var inst_54956 = (state_55015[(11)]);
var inst_54959 = (state_55015[(12)]);
var inst_54959__$1 = cljs.core.__destructure_map(inst_54956);
var inst_54960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54959__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54959__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54959__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55015__$1 = (function (){var statearr_55038 = state_55015;
(statearr_55038[(12)] = inst_54959__$1);

(statearr_55038[(15)] = inst_54960);

(statearr_55038[(18)] = inst_54961);

return statearr_55038;
})();
return cljs.core.async.ioc_alts_BANG_(state_55015__$1,(4),inst_54962);
} else {
if((state_val_55016 === (23))){
var inst_55000 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
if(cljs.core.truth_(inst_55000)){
var statearr_55039_56137 = state_55015__$1;
(statearr_55039_56137[(1)] = (24));

} else {
var statearr_55040_56138 = state_55015__$1;
(statearr_55040_56138[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (19))){
var inst_54995 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
var statearr_55041_56139 = state_55015__$1;
(statearr_55041_56139[(2)] = inst_54995);

(statearr_55041_56139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (11))){
var inst_54969 = (state_55015[(14)]);
var inst_54979 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_54969);
var state_55015__$1 = state_55015;
var statearr_55042_56140 = state_55015__$1;
(statearr_55042_56140[(2)] = inst_54979);

(statearr_55042_56140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (9))){
var inst_54960 = (state_55015[(15)]);
var inst_54969 = (state_55015[(14)]);
var inst_54986 = (state_55015[(19)]);
var inst_54986__$1 = (inst_54960.cljs$core$IFn$_invoke$arity$1 ? inst_54960.cljs$core$IFn$_invoke$arity$1(inst_54969) : inst_54960.call(null,inst_54969));
var state_55015__$1 = (function (){var statearr_55043 = state_55015;
(statearr_55043[(19)] = inst_54986__$1);

return statearr_55043;
})();
if(cljs.core.truth_(inst_54986__$1)){
var statearr_55044_56141 = state_55015__$1;
(statearr_55044_56141[(1)] = (14));

} else {
var statearr_55045_56142 = state_55015__$1;
(statearr_55045_56142[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (5))){
var inst_54970 = (state_55015[(13)]);
var state_55015__$1 = state_55015;
var statearr_55046_56143 = state_55015__$1;
(statearr_55046_56143[(2)] = inst_54970);

(statearr_55046_56143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (14))){
var inst_54986 = (state_55015[(19)]);
var state_55015__$1 = state_55015;
var statearr_55047_56144 = state_55015__$1;
(statearr_55047_56144[(2)] = inst_54986);

(statearr_55047_56144[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (26))){
var inst_55005 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
var statearr_55048_56145 = state_55015__$1;
(statearr_55048_56145[(2)] = inst_55005);

(statearr_55048_56145[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (16))){
var inst_54997 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
if(cljs.core.truth_(inst_54997)){
var statearr_55049_56150 = state_55015__$1;
(statearr_55049_56150[(1)] = (20));

} else {
var statearr_55050_56151 = state_55015__$1;
(statearr_55050_56151[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (10))){
var inst_55011 = (state_55015[(2)]);
var state_55015__$1 = state_55015;
var statearr_55051_56152 = state_55015__$1;
(statearr_55051_56152[(2)] = inst_55011);

(statearr_55051_56152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (18))){
var inst_54989 = (state_55015[(16)]);
var state_55015__$1 = state_55015;
var statearr_55052_56153 = state_55015__$1;
(statearr_55052_56153[(2)] = inst_54989);

(statearr_55052_56153[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55016 === (8))){
var inst_54968 = (state_55015[(7)]);
var inst_54977 = (inst_54968 == null);
var state_55015__$1 = state_55015;
if(cljs.core.truth_(inst_54977)){
var statearr_55053_56154 = state_55015__$1;
(statearr_55053_56154[(1)] = (11));

} else {
var statearr_55054_56155 = state_55015__$1;
(statearr_55054_56155[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54030__auto__ = null;
var cljs$core$async$mix_$_state_machine__54030__auto____0 = (function (){
var statearr_55055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55055[(0)] = cljs$core$async$mix_$_state_machine__54030__auto__);

(statearr_55055[(1)] = (1));

return statearr_55055;
});
var cljs$core$async$mix_$_state_machine__54030__auto____1 = (function (state_55015){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55015);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55056){var ex__54033__auto__ = e55056;
var statearr_55057_56156 = state_55015;
(statearr_55057_56156[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55015[(4)]))){
var statearr_55058_56157 = state_55015;
(statearr_55058_56157[(1)] = cljs.core.first((state_55015[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56158 = state_55015;
state_55015 = G__56158;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54030__auto__ = function(state_55015){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54030__auto____1.call(this,state_55015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54030__auto____0;
cljs$core$async$mix_$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54030__auto____1;
return cljs$core$async$mix_$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55059 = f__54101__auto__();
(statearr_55059[(6)] = c__54100__auto___56115);

return statearr_55059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56159 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56159(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56160 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56160(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56161 = (function() {
var G__56162 = null;
var G__56162__1 = (function (p){
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
var G__56162__2 = (function (p,v){
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
G__56162 = function(p,v){
switch(arguments.length){
case 1:
return G__56162__1.call(this,p);
case 2:
return G__56162__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56162.cljs$core$IFn$_invoke$arity$1 = G__56162__1;
G__56162.cljs$core$IFn$_invoke$arity$2 = G__56162__2;
return G__56162;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55061 = arguments.length;
switch (G__55061) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56161(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56161(p,v);
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
cljs.core.async.t_cljs$core$async55065 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55066){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55066 = meta55066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55067,meta55066__$1){
var self__ = this;
var _55067__$1 = this;
return (new cljs.core.async.t_cljs$core$async55065(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55066__$1));
}));

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55067){
var self__ = this;
var _55067__$1 = this;
return self__.meta55066;
}));

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55066","meta55066",574868693,null)], null);
}));

(cljs.core.async.t_cljs$core$async55065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55065");

(cljs.core.async.t_cljs$core$async55065.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55065.
 */
cljs.core.async.__GT_t_cljs$core$async55065 = (function cljs$core$async$__GT_t_cljs$core$async55065(ch,topic_fn,buf_fn,mults,ensure_mult,meta55066){
return (new cljs.core.async.t_cljs$core$async55065(ch,topic_fn,buf_fn,mults,ensure_mult,meta55066));
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
var G__55064 = arguments.length;
switch (G__55064) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55062_SHARP_){
if(cljs.core.truth_((p1__55062_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55062_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55062_SHARP_.call(null,topic)))){
return p1__55062_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55062_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async55065(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__54100__auto___56167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55139){
var state_val_55140 = (state_55139[(1)]);
if((state_val_55140 === (7))){
var inst_55135 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
var statearr_55141_56169 = state_55139__$1;
(statearr_55141_56169[(2)] = inst_55135);

(statearr_55141_56169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (20))){
var state_55139__$1 = state_55139;
var statearr_55142_56171 = state_55139__$1;
(statearr_55142_56171[(2)] = null);

(statearr_55142_56171[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (1))){
var state_55139__$1 = state_55139;
var statearr_55143_56172 = state_55139__$1;
(statearr_55143_56172[(2)] = null);

(statearr_55143_56172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (24))){
var inst_55118 = (state_55139[(7)]);
var inst_55127 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55118);
var state_55139__$1 = state_55139;
var statearr_55144_56173 = state_55139__$1;
(statearr_55144_56173[(2)] = inst_55127);

(statearr_55144_56173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (4))){
var inst_55070 = (state_55139[(8)]);
var inst_55070__$1 = (state_55139[(2)]);
var inst_55071 = (inst_55070__$1 == null);
var state_55139__$1 = (function (){var statearr_55145 = state_55139;
(statearr_55145[(8)] = inst_55070__$1);

return statearr_55145;
})();
if(cljs.core.truth_(inst_55071)){
var statearr_55146_56174 = state_55139__$1;
(statearr_55146_56174[(1)] = (5));

} else {
var statearr_55147_56175 = state_55139__$1;
(statearr_55147_56175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (15))){
var inst_55112 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
var statearr_55148_56176 = state_55139__$1;
(statearr_55148_56176[(2)] = inst_55112);

(statearr_55148_56176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (21))){
var inst_55132 = (state_55139[(2)]);
var state_55139__$1 = (function (){var statearr_55149 = state_55139;
(statearr_55149[(9)] = inst_55132);

return statearr_55149;
})();
var statearr_55150_56177 = state_55139__$1;
(statearr_55150_56177[(2)] = null);

(statearr_55150_56177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (13))){
var inst_55094 = (state_55139[(10)]);
var inst_55096 = cljs.core.chunked_seq_QMARK_(inst_55094);
var state_55139__$1 = state_55139;
if(inst_55096){
var statearr_55151_56178 = state_55139__$1;
(statearr_55151_56178[(1)] = (16));

} else {
var statearr_55152_56179 = state_55139__$1;
(statearr_55152_56179[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (22))){
var inst_55124 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
if(cljs.core.truth_(inst_55124)){
var statearr_55153_56180 = state_55139__$1;
(statearr_55153_56180[(1)] = (23));

} else {
var statearr_55154_56181 = state_55139__$1;
(statearr_55154_56181[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (6))){
var inst_55070 = (state_55139[(8)]);
var inst_55118 = (state_55139[(7)]);
var inst_55120 = (state_55139[(11)]);
var inst_55118__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55070) : topic_fn.call(null,inst_55070));
var inst_55119 = cljs.core.deref(mults);
var inst_55120__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55119,inst_55118__$1);
var state_55139__$1 = (function (){var statearr_55155 = state_55139;
(statearr_55155[(7)] = inst_55118__$1);

(statearr_55155[(11)] = inst_55120__$1);

return statearr_55155;
})();
if(cljs.core.truth_(inst_55120__$1)){
var statearr_55156_56182 = state_55139__$1;
(statearr_55156_56182[(1)] = (19));

} else {
var statearr_55157_56184 = state_55139__$1;
(statearr_55157_56184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (25))){
var inst_55129 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
var statearr_55158_56185 = state_55139__$1;
(statearr_55158_56185[(2)] = inst_55129);

(statearr_55158_56185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (17))){
var inst_55094 = (state_55139[(10)]);
var inst_55103 = cljs.core.first(inst_55094);
var inst_55104 = cljs.core.async.muxch_STAR_(inst_55103);
var inst_55105 = cljs.core.async.close_BANG_(inst_55104);
var inst_55106 = cljs.core.next(inst_55094);
var inst_55080 = inst_55106;
var inst_55081 = null;
var inst_55082 = (0);
var inst_55083 = (0);
var state_55139__$1 = (function (){var statearr_55159 = state_55139;
(statearr_55159[(12)] = inst_55105);

(statearr_55159[(13)] = inst_55080);

(statearr_55159[(14)] = inst_55081);

(statearr_55159[(15)] = inst_55082);

(statearr_55159[(16)] = inst_55083);

return statearr_55159;
})();
var statearr_55160_56186 = state_55139__$1;
(statearr_55160_56186[(2)] = null);

(statearr_55160_56186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (3))){
var inst_55137 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55139__$1,inst_55137);
} else {
if((state_val_55140 === (12))){
var inst_55114 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
var statearr_55161_56187 = state_55139__$1;
(statearr_55161_56187[(2)] = inst_55114);

(statearr_55161_56187[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (2))){
var state_55139__$1 = state_55139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55139__$1,(4),ch);
} else {
if((state_val_55140 === (23))){
var state_55139__$1 = state_55139;
var statearr_55162_56188 = state_55139__$1;
(statearr_55162_56188[(2)] = null);

(statearr_55162_56188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (19))){
var inst_55120 = (state_55139[(11)]);
var inst_55070 = (state_55139[(8)]);
var inst_55122 = cljs.core.async.muxch_STAR_(inst_55120);
var state_55139__$1 = state_55139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55139__$1,(22),inst_55122,inst_55070);
} else {
if((state_val_55140 === (11))){
var inst_55080 = (state_55139[(13)]);
var inst_55094 = (state_55139[(10)]);
var inst_55094__$1 = cljs.core.seq(inst_55080);
var state_55139__$1 = (function (){var statearr_55163 = state_55139;
(statearr_55163[(10)] = inst_55094__$1);

return statearr_55163;
})();
if(inst_55094__$1){
var statearr_55164_56189 = state_55139__$1;
(statearr_55164_56189[(1)] = (13));

} else {
var statearr_55165_56190 = state_55139__$1;
(statearr_55165_56190[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (9))){
var inst_55116 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
var statearr_55166_56191 = state_55139__$1;
(statearr_55166_56191[(2)] = inst_55116);

(statearr_55166_56191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (5))){
var inst_55077 = cljs.core.deref(mults);
var inst_55078 = cljs.core.vals(inst_55077);
var inst_55079 = cljs.core.seq(inst_55078);
var inst_55080 = inst_55079;
var inst_55081 = null;
var inst_55082 = (0);
var inst_55083 = (0);
var state_55139__$1 = (function (){var statearr_55167 = state_55139;
(statearr_55167[(13)] = inst_55080);

(statearr_55167[(14)] = inst_55081);

(statearr_55167[(15)] = inst_55082);

(statearr_55167[(16)] = inst_55083);

return statearr_55167;
})();
var statearr_55168_56192 = state_55139__$1;
(statearr_55168_56192[(2)] = null);

(statearr_55168_56192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (14))){
var state_55139__$1 = state_55139;
var statearr_55172_56193 = state_55139__$1;
(statearr_55172_56193[(2)] = null);

(statearr_55172_56193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (16))){
var inst_55094 = (state_55139[(10)]);
var inst_55098 = cljs.core.chunk_first(inst_55094);
var inst_55099 = cljs.core.chunk_rest(inst_55094);
var inst_55100 = cljs.core.count(inst_55098);
var inst_55080 = inst_55099;
var inst_55081 = inst_55098;
var inst_55082 = inst_55100;
var inst_55083 = (0);
var state_55139__$1 = (function (){var statearr_55173 = state_55139;
(statearr_55173[(13)] = inst_55080);

(statearr_55173[(14)] = inst_55081);

(statearr_55173[(15)] = inst_55082);

(statearr_55173[(16)] = inst_55083);

return statearr_55173;
})();
var statearr_55174_56194 = state_55139__$1;
(statearr_55174_56194[(2)] = null);

(statearr_55174_56194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (10))){
var inst_55081 = (state_55139[(14)]);
var inst_55083 = (state_55139[(16)]);
var inst_55080 = (state_55139[(13)]);
var inst_55082 = (state_55139[(15)]);
var inst_55088 = cljs.core._nth(inst_55081,inst_55083);
var inst_55089 = cljs.core.async.muxch_STAR_(inst_55088);
var inst_55090 = cljs.core.async.close_BANG_(inst_55089);
var inst_55091 = (inst_55083 + (1));
var tmp55169 = inst_55082;
var tmp55170 = inst_55080;
var tmp55171 = inst_55081;
var inst_55080__$1 = tmp55170;
var inst_55081__$1 = tmp55171;
var inst_55082__$1 = tmp55169;
var inst_55083__$1 = inst_55091;
var state_55139__$1 = (function (){var statearr_55175 = state_55139;
(statearr_55175[(17)] = inst_55090);

(statearr_55175[(13)] = inst_55080__$1);

(statearr_55175[(14)] = inst_55081__$1);

(statearr_55175[(15)] = inst_55082__$1);

(statearr_55175[(16)] = inst_55083__$1);

return statearr_55175;
})();
var statearr_55176_56195 = state_55139__$1;
(statearr_55176_56195[(2)] = null);

(statearr_55176_56195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (18))){
var inst_55109 = (state_55139[(2)]);
var state_55139__$1 = state_55139;
var statearr_55177_56196 = state_55139__$1;
(statearr_55177_56196[(2)] = inst_55109);

(statearr_55177_56196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55140 === (8))){
var inst_55083 = (state_55139[(16)]);
var inst_55082 = (state_55139[(15)]);
var inst_55085 = (inst_55083 < inst_55082);
var inst_55086 = inst_55085;
var state_55139__$1 = state_55139;
if(cljs.core.truth_(inst_55086)){
var statearr_55178_56197 = state_55139__$1;
(statearr_55178_56197[(1)] = (10));

} else {
var statearr_55179_56198 = state_55139__$1;
(statearr_55179_56198[(1)] = (11));

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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55180[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55180[(1)] = (1));

return statearr_55180;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55139){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55139);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55181){var ex__54033__auto__ = e55181;
var statearr_55182_56199 = state_55139;
(statearr_55182_56199[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55139[(4)]))){
var statearr_55183_56200 = state_55139;
(statearr_55183_56200[(1)] = cljs.core.first((state_55139[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56201 = state_55139;
state_55139 = G__56201;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55184 = f__54101__auto__();
(statearr_55184[(6)] = c__54100__auto___56167);

return statearr_55184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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
var G__55186 = arguments.length;
switch (G__55186) {
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
var G__55188 = arguments.length;
switch (G__55188) {
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
var G__55190 = arguments.length;
switch (G__55190) {
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
var c__54100__auto___56209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55233){
var state_val_55234 = (state_55233[(1)]);
if((state_val_55234 === (7))){
var state_55233__$1 = state_55233;
var statearr_55235_56210 = state_55233__$1;
(statearr_55235_56210[(2)] = null);

(statearr_55235_56210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (1))){
var state_55233__$1 = state_55233;
var statearr_55236_56211 = state_55233__$1;
(statearr_55236_56211[(2)] = null);

(statearr_55236_56211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (4))){
var inst_55194 = (state_55233[(7)]);
var inst_55193 = (state_55233[(8)]);
var inst_55196 = (inst_55194 < inst_55193);
var state_55233__$1 = state_55233;
if(cljs.core.truth_(inst_55196)){
var statearr_55237_56212 = state_55233__$1;
(statearr_55237_56212[(1)] = (6));

} else {
var statearr_55238_56213 = state_55233__$1;
(statearr_55238_56213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (15))){
var inst_55219 = (state_55233[(9)]);
var inst_55224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55219);
var state_55233__$1 = state_55233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55233__$1,(17),out,inst_55224);
} else {
if((state_val_55234 === (13))){
var inst_55219 = (state_55233[(9)]);
var inst_55219__$1 = (state_55233[(2)]);
var inst_55220 = cljs.core.some(cljs.core.nil_QMARK_,inst_55219__$1);
var state_55233__$1 = (function (){var statearr_55239 = state_55233;
(statearr_55239[(9)] = inst_55219__$1);

return statearr_55239;
})();
if(cljs.core.truth_(inst_55220)){
var statearr_55240_56214 = state_55233__$1;
(statearr_55240_56214[(1)] = (14));

} else {
var statearr_55241_56215 = state_55233__$1;
(statearr_55241_56215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (6))){
var state_55233__$1 = state_55233;
var statearr_55242_56216 = state_55233__$1;
(statearr_55242_56216[(2)] = null);

(statearr_55242_56216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (17))){
var inst_55226 = (state_55233[(2)]);
var state_55233__$1 = (function (){var statearr_55244 = state_55233;
(statearr_55244[(10)] = inst_55226);

return statearr_55244;
})();
var statearr_55245_56221 = state_55233__$1;
(statearr_55245_56221[(2)] = null);

(statearr_55245_56221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (3))){
var inst_55231 = (state_55233[(2)]);
var state_55233__$1 = state_55233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55233__$1,inst_55231);
} else {
if((state_val_55234 === (12))){
var _ = (function (){var statearr_55246 = state_55233;
(statearr_55246[(4)] = cljs.core.rest((state_55233[(4)])));

return statearr_55246;
})();
var state_55233__$1 = state_55233;
var ex55243 = (state_55233__$1[(2)]);
var statearr_55247_56222 = state_55233__$1;
(statearr_55247_56222[(5)] = ex55243);


if((ex55243 instanceof Object)){
var statearr_55248_56223 = state_55233__$1;
(statearr_55248_56223[(1)] = (11));

(statearr_55248_56223[(5)] = null);

} else {
throw ex55243;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (2))){
var inst_55192 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55193 = cnt;
var inst_55194 = (0);
var state_55233__$1 = (function (){var statearr_55249 = state_55233;
(statearr_55249[(11)] = inst_55192);

(statearr_55249[(8)] = inst_55193);

(statearr_55249[(7)] = inst_55194);

return statearr_55249;
})();
var statearr_55250_56224 = state_55233__$1;
(statearr_55250_56224[(2)] = null);

(statearr_55250_56224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (11))){
var inst_55198 = (state_55233[(2)]);
var inst_55199 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55233__$1 = (function (){var statearr_55251 = state_55233;
(statearr_55251[(12)] = inst_55198);

return statearr_55251;
})();
var statearr_55252_56225 = state_55233__$1;
(statearr_55252_56225[(2)] = inst_55199);

(statearr_55252_56225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (9))){
var inst_55194 = (state_55233[(7)]);
var _ = (function (){var statearr_55253 = state_55233;
(statearr_55253[(4)] = cljs.core.cons((12),(state_55233[(4)])));

return statearr_55253;
})();
var inst_55205 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55194) : chs__$1.call(null,inst_55194));
var inst_55206 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55194) : done.call(null,inst_55194));
var inst_55207 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55205,inst_55206);
var ___$1 = (function (){var statearr_55254 = state_55233;
(statearr_55254[(4)] = cljs.core.rest((state_55233[(4)])));

return statearr_55254;
})();
var state_55233__$1 = state_55233;
var statearr_55255_56226 = state_55233__$1;
(statearr_55255_56226[(2)] = inst_55207);

(statearr_55255_56226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (5))){
var inst_55217 = (state_55233[(2)]);
var state_55233__$1 = (function (){var statearr_55256 = state_55233;
(statearr_55256[(13)] = inst_55217);

return statearr_55256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55233__$1,(13),dchan);
} else {
if((state_val_55234 === (14))){
var inst_55222 = cljs.core.async.close_BANG_(out);
var state_55233__$1 = state_55233;
var statearr_55257_56227 = state_55233__$1;
(statearr_55257_56227[(2)] = inst_55222);

(statearr_55257_56227[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (16))){
var inst_55229 = (state_55233[(2)]);
var state_55233__$1 = state_55233;
var statearr_55258_56228 = state_55233__$1;
(statearr_55258_56228[(2)] = inst_55229);

(statearr_55258_56228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (10))){
var inst_55194 = (state_55233[(7)]);
var inst_55210 = (state_55233[(2)]);
var inst_55211 = (inst_55194 + (1));
var inst_55194__$1 = inst_55211;
var state_55233__$1 = (function (){var statearr_55259 = state_55233;
(statearr_55259[(14)] = inst_55210);

(statearr_55259[(7)] = inst_55194__$1);

return statearr_55259;
})();
var statearr_55260_56230 = state_55233__$1;
(statearr_55260_56230[(2)] = null);

(statearr_55260_56230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55234 === (8))){
var inst_55215 = (state_55233[(2)]);
var state_55233__$1 = state_55233;
var statearr_55261_56231 = state_55233__$1;
(statearr_55261_56231[(2)] = inst_55215);

(statearr_55261_56231[(1)] = (5));


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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55262[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55262[(1)] = (1));

return statearr_55262;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55233){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55233);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55263){var ex__54033__auto__ = e55263;
var statearr_55264_56232 = state_55233;
(statearr_55264_56232[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55233[(4)]))){
var statearr_55265_56233 = state_55233;
(statearr_55265_56233[(1)] = cljs.core.first((state_55233[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56234 = state_55233;
state_55233 = G__56234;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55266 = f__54101__auto__();
(statearr_55266[(6)] = c__54100__auto___56209);

return statearr_55266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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
var G__55269 = arguments.length;
switch (G__55269) {
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
var c__54100__auto___56237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55301){
var state_val_55302 = (state_55301[(1)]);
if((state_val_55302 === (7))){
var inst_55280 = (state_55301[(7)]);
var inst_55281 = (state_55301[(8)]);
var inst_55280__$1 = (state_55301[(2)]);
var inst_55281__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55280__$1,(0),null);
var inst_55282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55280__$1,(1),null);
var inst_55283 = (inst_55281__$1 == null);
var state_55301__$1 = (function (){var statearr_55303 = state_55301;
(statearr_55303[(7)] = inst_55280__$1);

(statearr_55303[(8)] = inst_55281__$1);

(statearr_55303[(9)] = inst_55282);

return statearr_55303;
})();
if(cljs.core.truth_(inst_55283)){
var statearr_55304_56238 = state_55301__$1;
(statearr_55304_56238[(1)] = (8));

} else {
var statearr_55305_56239 = state_55301__$1;
(statearr_55305_56239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55302 === (1))){
var inst_55270 = cljs.core.vec(chs);
var inst_55271 = inst_55270;
var state_55301__$1 = (function (){var statearr_55306 = state_55301;
(statearr_55306[(10)] = inst_55271);

return statearr_55306;
})();
var statearr_55307_56240 = state_55301__$1;
(statearr_55307_56240[(2)] = null);

(statearr_55307_56240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55302 === (4))){
var inst_55271 = (state_55301[(10)]);
var state_55301__$1 = state_55301;
return cljs.core.async.ioc_alts_BANG_(state_55301__$1,(7),inst_55271);
} else {
if((state_val_55302 === (6))){
var inst_55297 = (state_55301[(2)]);
var state_55301__$1 = state_55301;
var statearr_55308_56241 = state_55301__$1;
(statearr_55308_56241[(2)] = inst_55297);

(statearr_55308_56241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55302 === (3))){
var inst_55299 = (state_55301[(2)]);
var state_55301__$1 = state_55301;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55301__$1,inst_55299);
} else {
if((state_val_55302 === (2))){
var inst_55271 = (state_55301[(10)]);
var inst_55273 = cljs.core.count(inst_55271);
var inst_55274 = (inst_55273 > (0));
var state_55301__$1 = state_55301;
if(cljs.core.truth_(inst_55274)){
var statearr_55310_56246 = state_55301__$1;
(statearr_55310_56246[(1)] = (4));

} else {
var statearr_55311_56247 = state_55301__$1;
(statearr_55311_56247[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55302 === (11))){
var inst_55271 = (state_55301[(10)]);
var inst_55290 = (state_55301[(2)]);
var tmp55309 = inst_55271;
var inst_55271__$1 = tmp55309;
var state_55301__$1 = (function (){var statearr_55312 = state_55301;
(statearr_55312[(11)] = inst_55290);

(statearr_55312[(10)] = inst_55271__$1);

return statearr_55312;
})();
var statearr_55313_56248 = state_55301__$1;
(statearr_55313_56248[(2)] = null);

(statearr_55313_56248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55302 === (9))){
var inst_55281 = (state_55301[(8)]);
var state_55301__$1 = state_55301;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55301__$1,(11),out,inst_55281);
} else {
if((state_val_55302 === (5))){
var inst_55295 = cljs.core.async.close_BANG_(out);
var state_55301__$1 = state_55301;
var statearr_55314_56249 = state_55301__$1;
(statearr_55314_56249[(2)] = inst_55295);

(statearr_55314_56249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55302 === (10))){
var inst_55293 = (state_55301[(2)]);
var state_55301__$1 = state_55301;
var statearr_55315_56250 = state_55301__$1;
(statearr_55315_56250[(2)] = inst_55293);

(statearr_55315_56250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55302 === (8))){
var inst_55271 = (state_55301[(10)]);
var inst_55280 = (state_55301[(7)]);
var inst_55281 = (state_55301[(8)]);
var inst_55282 = (state_55301[(9)]);
var inst_55285 = (function (){var cs = inst_55271;
var vec__55276 = inst_55280;
var v = inst_55281;
var c = inst_55282;
return (function (p1__55267_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55267_SHARP_);
});
})();
var inst_55286 = cljs.core.filterv(inst_55285,inst_55271);
var inst_55271__$1 = inst_55286;
var state_55301__$1 = (function (){var statearr_55316 = state_55301;
(statearr_55316[(10)] = inst_55271__$1);

return statearr_55316;
})();
var statearr_55317_56251 = state_55301__$1;
(statearr_55317_56251[(2)] = null);

(statearr_55317_56251[(1)] = (2));


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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55318[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55318[(1)] = (1));

return statearr_55318;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55301){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55301);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55319){var ex__54033__auto__ = e55319;
var statearr_55320_56252 = state_55301;
(statearr_55320_56252[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55301[(4)]))){
var statearr_55321_56253 = state_55301;
(statearr_55321_56253[(1)] = cljs.core.first((state_55301[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56254 = state_55301;
state_55301 = G__56254;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55301){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55322 = f__54101__auto__();
(statearr_55322[(6)] = c__54100__auto___56237);

return statearr_55322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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
var G__55324 = arguments.length;
switch (G__55324) {
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
var c__54100__auto___56256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55348){
var state_val_55349 = (state_55348[(1)]);
if((state_val_55349 === (7))){
var inst_55330 = (state_55348[(7)]);
var inst_55330__$1 = (state_55348[(2)]);
var inst_55331 = (inst_55330__$1 == null);
var inst_55332 = cljs.core.not(inst_55331);
var state_55348__$1 = (function (){var statearr_55350 = state_55348;
(statearr_55350[(7)] = inst_55330__$1);

return statearr_55350;
})();
if(inst_55332){
var statearr_55351_56257 = state_55348__$1;
(statearr_55351_56257[(1)] = (8));

} else {
var statearr_55352_56258 = state_55348__$1;
(statearr_55352_56258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (1))){
var inst_55325 = (0);
var state_55348__$1 = (function (){var statearr_55353 = state_55348;
(statearr_55353[(8)] = inst_55325);

return statearr_55353;
})();
var statearr_55354_56259 = state_55348__$1;
(statearr_55354_56259[(2)] = null);

(statearr_55354_56259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (4))){
var state_55348__$1 = state_55348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55348__$1,(7),ch);
} else {
if((state_val_55349 === (6))){
var inst_55343 = (state_55348[(2)]);
var state_55348__$1 = state_55348;
var statearr_55355_56260 = state_55348__$1;
(statearr_55355_56260[(2)] = inst_55343);

(statearr_55355_56260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (3))){
var inst_55345 = (state_55348[(2)]);
var inst_55346 = cljs.core.async.close_BANG_(out);
var state_55348__$1 = (function (){var statearr_55356 = state_55348;
(statearr_55356[(9)] = inst_55345);

return statearr_55356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55348__$1,inst_55346);
} else {
if((state_val_55349 === (2))){
var inst_55325 = (state_55348[(8)]);
var inst_55327 = (inst_55325 < n);
var state_55348__$1 = state_55348;
if(cljs.core.truth_(inst_55327)){
var statearr_55357_56261 = state_55348__$1;
(statearr_55357_56261[(1)] = (4));

} else {
var statearr_55358_56262 = state_55348__$1;
(statearr_55358_56262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (11))){
var inst_55325 = (state_55348[(8)]);
var inst_55335 = (state_55348[(2)]);
var inst_55336 = (inst_55325 + (1));
var inst_55325__$1 = inst_55336;
var state_55348__$1 = (function (){var statearr_55359 = state_55348;
(statearr_55359[(10)] = inst_55335);

(statearr_55359[(8)] = inst_55325__$1);

return statearr_55359;
})();
var statearr_55360_56263 = state_55348__$1;
(statearr_55360_56263[(2)] = null);

(statearr_55360_56263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (9))){
var state_55348__$1 = state_55348;
var statearr_55361_56264 = state_55348__$1;
(statearr_55361_56264[(2)] = null);

(statearr_55361_56264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (5))){
var state_55348__$1 = state_55348;
var statearr_55362_56265 = state_55348__$1;
(statearr_55362_56265[(2)] = null);

(statearr_55362_56265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (10))){
var inst_55340 = (state_55348[(2)]);
var state_55348__$1 = state_55348;
var statearr_55363_56266 = state_55348__$1;
(statearr_55363_56266[(2)] = inst_55340);

(statearr_55363_56266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55349 === (8))){
var inst_55330 = (state_55348[(7)]);
var state_55348__$1 = state_55348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55348__$1,(11),out,inst_55330);
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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55364 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55364[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55364[(1)] = (1));

return statearr_55364;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55348){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55348);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55365){var ex__54033__auto__ = e55365;
var statearr_55366_56267 = state_55348;
(statearr_55366_56267[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55348[(4)]))){
var statearr_55367_56268 = state_55348;
(statearr_55367_56268[(1)] = cljs.core.first((state_55348[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56269 = state_55348;
state_55348 = G__56269;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55368 = f__54101__auto__();
(statearr_55368[(6)] = c__54100__auto___56256);

return statearr_55368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
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
cljs.core.async.t_cljs$core$async55373 = (function (f,ch,meta55371,_,fn1,meta55374){
this.f = f;
this.ch = ch;
this.meta55371 = meta55371;
this._ = _;
this.fn1 = fn1;
this.meta55374 = meta55374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55375,meta55374__$1){
var self__ = this;
var _55375__$1 = this;
return (new cljs.core.async.t_cljs$core$async55373(self__.f,self__.ch,self__.meta55371,self__._,self__.fn1,meta55374__$1));
}));

(cljs.core.async.t_cljs$core$async55373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55375){
var self__ = this;
var _55375__$1 = this;
return self__.meta55374;
}));

(cljs.core.async.t_cljs$core$async55373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55369_SHARP_){
var G__55376 = (((p1__55369_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55369_SHARP_) : self__.f.call(null,p1__55369_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55376) : f1.call(null,G__55376));
});
}));

(cljs.core.async.t_cljs$core$async55373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55371","meta55371",217939676,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55370","cljs.core.async/t_cljs$core$async55370",1659702003,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55374","meta55374",-555522527,null)], null);
}));

(cljs.core.async.t_cljs$core$async55373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55373");

(cljs.core.async.t_cljs$core$async55373.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55373.
 */
cljs.core.async.__GT_t_cljs$core$async55373 = (function cljs$core$async$__GT_t_cljs$core$async55373(f,ch,meta55371,_,fn1,meta55374){
return (new cljs.core.async.t_cljs$core$async55373(f,ch,meta55371,_,fn1,meta55374));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55370 = (function (f,ch,meta55371){
this.f = f;
this.ch = ch;
this.meta55371 = meta55371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55372,meta55371__$1){
var self__ = this;
var _55372__$1 = this;
return (new cljs.core.async.t_cljs$core$async55370(self__.f,self__.ch,meta55371__$1));
}));

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55372){
var self__ = this;
var _55372__$1 = this;
return self__.meta55371;
}));

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async55373(self__.f,self__.ch,self__.meta55371,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55377 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55377) : self__.f.call(null,G__55377));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55371","meta55371",217939676,null)], null);
}));

(cljs.core.async.t_cljs$core$async55370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55370");

(cljs.core.async.t_cljs$core$async55370.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55370.
 */
cljs.core.async.__GT_t_cljs$core$async55370 = (function cljs$core$async$__GT_t_cljs$core$async55370(f,ch,meta55371){
return (new cljs.core.async.t_cljs$core$async55370(f,ch,meta55371));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55378 = (function (f,ch,meta55379){
this.f = f;
this.ch = ch;
this.meta55379 = meta55379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55380,meta55379__$1){
var self__ = this;
var _55380__$1 = this;
return (new cljs.core.async.t_cljs$core$async55378(self__.f,self__.ch,meta55379__$1));
}));

(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55380){
var self__ = this;
var _55380__$1 = this;
return self__.meta55379;
}));

(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55379","meta55379",-1171496773,null)], null);
}));

(cljs.core.async.t_cljs$core$async55378.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55378");

(cljs.core.async.t_cljs$core$async55378.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55378");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55378.
 */
cljs.core.async.__GT_t_cljs$core$async55378 = (function cljs$core$async$__GT_t_cljs$core$async55378(f,ch,meta55379){
return (new cljs.core.async.t_cljs$core$async55378(f,ch,meta55379));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55378(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55381 = (function (p,ch,meta55382){
this.p = p;
this.ch = ch;
this.meta55382 = meta55382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55383,meta55382__$1){
var self__ = this;
var _55383__$1 = this;
return (new cljs.core.async.t_cljs$core$async55381(self__.p,self__.ch,meta55382__$1));
}));

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55383){
var self__ = this;
var _55383__$1 = this;
return self__.meta55382;
}));

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55381.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55382","meta55382",1114925751,null)], null);
}));

(cljs.core.async.t_cljs$core$async55381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55381");

(cljs.core.async.t_cljs$core$async55381.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55381.
 */
cljs.core.async.__GT_t_cljs$core$async55381 = (function cljs$core$async$__GT_t_cljs$core$async55381(p,ch,meta55382){
return (new cljs.core.async.t_cljs$core$async55381(p,ch,meta55382));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async55381(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55385 = arguments.length;
switch (G__55385) {
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
var c__54100__auto___56279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55406){
var state_val_55407 = (state_55406[(1)]);
if((state_val_55407 === (7))){
var inst_55402 = (state_55406[(2)]);
var state_55406__$1 = state_55406;
var statearr_55408_56281 = state_55406__$1;
(statearr_55408_56281[(2)] = inst_55402);

(statearr_55408_56281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (1))){
var state_55406__$1 = state_55406;
var statearr_55409_56282 = state_55406__$1;
(statearr_55409_56282[(2)] = null);

(statearr_55409_56282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (4))){
var inst_55388 = (state_55406[(7)]);
var inst_55388__$1 = (state_55406[(2)]);
var inst_55389 = (inst_55388__$1 == null);
var state_55406__$1 = (function (){var statearr_55410 = state_55406;
(statearr_55410[(7)] = inst_55388__$1);

return statearr_55410;
})();
if(cljs.core.truth_(inst_55389)){
var statearr_55411_56283 = state_55406__$1;
(statearr_55411_56283[(1)] = (5));

} else {
var statearr_55412_56284 = state_55406__$1;
(statearr_55412_56284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (6))){
var inst_55388 = (state_55406[(7)]);
var inst_55393 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55388) : p.call(null,inst_55388));
var state_55406__$1 = state_55406;
if(cljs.core.truth_(inst_55393)){
var statearr_55413_56286 = state_55406__$1;
(statearr_55413_56286[(1)] = (8));

} else {
var statearr_55414_56287 = state_55406__$1;
(statearr_55414_56287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (3))){
var inst_55404 = (state_55406[(2)]);
var state_55406__$1 = state_55406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55406__$1,inst_55404);
} else {
if((state_val_55407 === (2))){
var state_55406__$1 = state_55406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55406__$1,(4),ch);
} else {
if((state_val_55407 === (11))){
var inst_55396 = (state_55406[(2)]);
var state_55406__$1 = state_55406;
var statearr_55415_56288 = state_55406__$1;
(statearr_55415_56288[(2)] = inst_55396);

(statearr_55415_56288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (9))){
var state_55406__$1 = state_55406;
var statearr_55416_56289 = state_55406__$1;
(statearr_55416_56289[(2)] = null);

(statearr_55416_56289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (5))){
var inst_55391 = cljs.core.async.close_BANG_(out);
var state_55406__$1 = state_55406;
var statearr_55417_56294 = state_55406__$1;
(statearr_55417_56294[(2)] = inst_55391);

(statearr_55417_56294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (10))){
var inst_55399 = (state_55406[(2)]);
var state_55406__$1 = (function (){var statearr_55418 = state_55406;
(statearr_55418[(8)] = inst_55399);

return statearr_55418;
})();
var statearr_55419_56295 = state_55406__$1;
(statearr_55419_56295[(2)] = null);

(statearr_55419_56295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55407 === (8))){
var inst_55388 = (state_55406[(7)]);
var state_55406__$1 = state_55406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55406__$1,(11),out,inst_55388);
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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55420 = [null,null,null,null,null,null,null,null,null];
(statearr_55420[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55420[(1)] = (1));

return statearr_55420;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55406){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55406);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55421){var ex__54033__auto__ = e55421;
var statearr_55422_56296 = state_55406;
(statearr_55422_56296[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55406[(4)]))){
var statearr_55423_56297 = state_55406;
(statearr_55423_56297[(1)] = cljs.core.first((state_55406[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56298 = state_55406;
state_55406 = G__56298;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55406){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55424 = f__54101__auto__();
(statearr_55424[(6)] = c__54100__auto___56279);

return statearr_55424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55426 = arguments.length;
switch (G__55426) {
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
var c__54100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55488){
var state_val_55489 = (state_55488[(1)]);
if((state_val_55489 === (7))){
var inst_55484 = (state_55488[(2)]);
var state_55488__$1 = state_55488;
var statearr_55490_56300 = state_55488__$1;
(statearr_55490_56300[(2)] = inst_55484);

(statearr_55490_56300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (20))){
var inst_55454 = (state_55488[(7)]);
var inst_55465 = (state_55488[(2)]);
var inst_55466 = cljs.core.next(inst_55454);
var inst_55440 = inst_55466;
var inst_55441 = null;
var inst_55442 = (0);
var inst_55443 = (0);
var state_55488__$1 = (function (){var statearr_55491 = state_55488;
(statearr_55491[(8)] = inst_55465);

(statearr_55491[(9)] = inst_55440);

(statearr_55491[(10)] = inst_55441);

(statearr_55491[(11)] = inst_55442);

(statearr_55491[(12)] = inst_55443);

return statearr_55491;
})();
var statearr_55492_56301 = state_55488__$1;
(statearr_55492_56301[(2)] = null);

(statearr_55492_56301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (1))){
var state_55488__$1 = state_55488;
var statearr_55493_56302 = state_55488__$1;
(statearr_55493_56302[(2)] = null);

(statearr_55493_56302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (4))){
var inst_55429 = (state_55488[(13)]);
var inst_55429__$1 = (state_55488[(2)]);
var inst_55430 = (inst_55429__$1 == null);
var state_55488__$1 = (function (){var statearr_55494 = state_55488;
(statearr_55494[(13)] = inst_55429__$1);

return statearr_55494;
})();
if(cljs.core.truth_(inst_55430)){
var statearr_55495_56305 = state_55488__$1;
(statearr_55495_56305[(1)] = (5));

} else {
var statearr_55496_56306 = state_55488__$1;
(statearr_55496_56306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (15))){
var state_55488__$1 = state_55488;
var statearr_55500_56307 = state_55488__$1;
(statearr_55500_56307[(2)] = null);

(statearr_55500_56307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (21))){
var state_55488__$1 = state_55488;
var statearr_55501_56309 = state_55488__$1;
(statearr_55501_56309[(2)] = null);

(statearr_55501_56309[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (13))){
var inst_55443 = (state_55488[(12)]);
var inst_55440 = (state_55488[(9)]);
var inst_55441 = (state_55488[(10)]);
var inst_55442 = (state_55488[(11)]);
var inst_55450 = (state_55488[(2)]);
var inst_55451 = (inst_55443 + (1));
var tmp55497 = inst_55441;
var tmp55498 = inst_55442;
var tmp55499 = inst_55440;
var inst_55440__$1 = tmp55499;
var inst_55441__$1 = tmp55497;
var inst_55442__$1 = tmp55498;
var inst_55443__$1 = inst_55451;
var state_55488__$1 = (function (){var statearr_55502 = state_55488;
(statearr_55502[(14)] = inst_55450);

(statearr_55502[(9)] = inst_55440__$1);

(statearr_55502[(10)] = inst_55441__$1);

(statearr_55502[(11)] = inst_55442__$1);

(statearr_55502[(12)] = inst_55443__$1);

return statearr_55502;
})();
var statearr_55503_56311 = state_55488__$1;
(statearr_55503_56311[(2)] = null);

(statearr_55503_56311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (22))){
var state_55488__$1 = state_55488;
var statearr_55504_56312 = state_55488__$1;
(statearr_55504_56312[(2)] = null);

(statearr_55504_56312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (6))){
var inst_55429 = (state_55488[(13)]);
var inst_55438 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55429) : f.call(null,inst_55429));
var inst_55439 = cljs.core.seq(inst_55438);
var inst_55440 = inst_55439;
var inst_55441 = null;
var inst_55442 = (0);
var inst_55443 = (0);
var state_55488__$1 = (function (){var statearr_55505 = state_55488;
(statearr_55505[(9)] = inst_55440);

(statearr_55505[(10)] = inst_55441);

(statearr_55505[(11)] = inst_55442);

(statearr_55505[(12)] = inst_55443);

return statearr_55505;
})();
var statearr_55506_56313 = state_55488__$1;
(statearr_55506_56313[(2)] = null);

(statearr_55506_56313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (17))){
var inst_55454 = (state_55488[(7)]);
var inst_55458 = cljs.core.chunk_first(inst_55454);
var inst_55459 = cljs.core.chunk_rest(inst_55454);
var inst_55460 = cljs.core.count(inst_55458);
var inst_55440 = inst_55459;
var inst_55441 = inst_55458;
var inst_55442 = inst_55460;
var inst_55443 = (0);
var state_55488__$1 = (function (){var statearr_55507 = state_55488;
(statearr_55507[(9)] = inst_55440);

(statearr_55507[(10)] = inst_55441);

(statearr_55507[(11)] = inst_55442);

(statearr_55507[(12)] = inst_55443);

return statearr_55507;
})();
var statearr_55508_56317 = state_55488__$1;
(statearr_55508_56317[(2)] = null);

(statearr_55508_56317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (3))){
var inst_55486 = (state_55488[(2)]);
var state_55488__$1 = state_55488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55488__$1,inst_55486);
} else {
if((state_val_55489 === (12))){
var inst_55474 = (state_55488[(2)]);
var state_55488__$1 = state_55488;
var statearr_55509_56318 = state_55488__$1;
(statearr_55509_56318[(2)] = inst_55474);

(statearr_55509_56318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (2))){
var state_55488__$1 = state_55488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55488__$1,(4),in$);
} else {
if((state_val_55489 === (23))){
var inst_55482 = (state_55488[(2)]);
var state_55488__$1 = state_55488;
var statearr_55510_56319 = state_55488__$1;
(statearr_55510_56319[(2)] = inst_55482);

(statearr_55510_56319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (19))){
var inst_55469 = (state_55488[(2)]);
var state_55488__$1 = state_55488;
var statearr_55511_56320 = state_55488__$1;
(statearr_55511_56320[(2)] = inst_55469);

(statearr_55511_56320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (11))){
var inst_55440 = (state_55488[(9)]);
var inst_55454 = (state_55488[(7)]);
var inst_55454__$1 = cljs.core.seq(inst_55440);
var state_55488__$1 = (function (){var statearr_55512 = state_55488;
(statearr_55512[(7)] = inst_55454__$1);

return statearr_55512;
})();
if(inst_55454__$1){
var statearr_55513_56321 = state_55488__$1;
(statearr_55513_56321[(1)] = (14));

} else {
var statearr_55514_56322 = state_55488__$1;
(statearr_55514_56322[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (9))){
var inst_55476 = (state_55488[(2)]);
var inst_55477 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55488__$1 = (function (){var statearr_55515 = state_55488;
(statearr_55515[(15)] = inst_55476);

return statearr_55515;
})();
if(cljs.core.truth_(inst_55477)){
var statearr_55516_56323 = state_55488__$1;
(statearr_55516_56323[(1)] = (21));

} else {
var statearr_55517_56324 = state_55488__$1;
(statearr_55517_56324[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (5))){
var inst_55432 = cljs.core.async.close_BANG_(out);
var state_55488__$1 = state_55488;
var statearr_55518_56325 = state_55488__$1;
(statearr_55518_56325[(2)] = inst_55432);

(statearr_55518_56325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (14))){
var inst_55454 = (state_55488[(7)]);
var inst_55456 = cljs.core.chunked_seq_QMARK_(inst_55454);
var state_55488__$1 = state_55488;
if(inst_55456){
var statearr_55519_56326 = state_55488__$1;
(statearr_55519_56326[(1)] = (17));

} else {
var statearr_55520_56327 = state_55488__$1;
(statearr_55520_56327[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (16))){
var inst_55472 = (state_55488[(2)]);
var state_55488__$1 = state_55488;
var statearr_55521_56328 = state_55488__$1;
(statearr_55521_56328[(2)] = inst_55472);

(statearr_55521_56328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55489 === (10))){
var inst_55441 = (state_55488[(10)]);
var inst_55443 = (state_55488[(12)]);
var inst_55448 = cljs.core._nth(inst_55441,inst_55443);
var state_55488__$1 = state_55488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55488__$1,(13),out,inst_55448);
} else {
if((state_val_55489 === (18))){
var inst_55454 = (state_55488[(7)]);
var inst_55463 = cljs.core.first(inst_55454);
var state_55488__$1 = state_55488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55488__$1,(20),out,inst_55463);
} else {
if((state_val_55489 === (8))){
var inst_55443 = (state_55488[(12)]);
var inst_55442 = (state_55488[(11)]);
var inst_55445 = (inst_55443 < inst_55442);
var inst_55446 = inst_55445;
var state_55488__$1 = state_55488;
if(cljs.core.truth_(inst_55446)){
var statearr_55522_56329 = state_55488__$1;
(statearr_55522_56329[(1)] = (10));

} else {
var statearr_55523_56330 = state_55488__$1;
(statearr_55523_56330[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54030__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54030__auto____0 = (function (){
var statearr_55524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55524[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54030__auto__);

(statearr_55524[(1)] = (1));

return statearr_55524;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54030__auto____1 = (function (state_55488){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55488);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55525){var ex__54033__auto__ = e55525;
var statearr_55526_56331 = state_55488;
(statearr_55526_56331[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55488[(4)]))){
var statearr_55527_56332 = state_55488;
(statearr_55527_56332[(1)] = cljs.core.first((state_55488[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56333 = state_55488;
state_55488 = G__56333;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54030__auto__ = function(state_55488){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54030__auto____1.call(this,state_55488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54030__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54030__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55528 = f__54101__auto__();
(statearr_55528[(6)] = c__54100__auto__);

return statearr_55528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));

return c__54100__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55530 = arguments.length;
switch (G__55530) {
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
var G__55532 = arguments.length;
switch (G__55532) {
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
var G__55534 = arguments.length;
switch (G__55534) {
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
var c__54100__auto___56341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55558){
var state_val_55559 = (state_55558[(1)]);
if((state_val_55559 === (7))){
var inst_55553 = (state_55558[(2)]);
var state_55558__$1 = state_55558;
var statearr_55560_56342 = state_55558__$1;
(statearr_55560_56342[(2)] = inst_55553);

(statearr_55560_56342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55559 === (1))){
var inst_55535 = null;
var state_55558__$1 = (function (){var statearr_55561 = state_55558;
(statearr_55561[(7)] = inst_55535);

return statearr_55561;
})();
var statearr_55562_56343 = state_55558__$1;
(statearr_55562_56343[(2)] = null);

(statearr_55562_56343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55559 === (4))){
var inst_55538 = (state_55558[(8)]);
var inst_55538__$1 = (state_55558[(2)]);
var inst_55539 = (inst_55538__$1 == null);
var inst_55540 = cljs.core.not(inst_55539);
var state_55558__$1 = (function (){var statearr_55563 = state_55558;
(statearr_55563[(8)] = inst_55538__$1);

return statearr_55563;
})();
if(inst_55540){
var statearr_55564_56344 = state_55558__$1;
(statearr_55564_56344[(1)] = (5));

} else {
var statearr_55565_56345 = state_55558__$1;
(statearr_55565_56345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55559 === (6))){
var state_55558__$1 = state_55558;
var statearr_55566_56346 = state_55558__$1;
(statearr_55566_56346[(2)] = null);

(statearr_55566_56346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55559 === (3))){
var inst_55555 = (state_55558[(2)]);
var inst_55556 = cljs.core.async.close_BANG_(out);
var state_55558__$1 = (function (){var statearr_55567 = state_55558;
(statearr_55567[(9)] = inst_55555);

return statearr_55567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55558__$1,inst_55556);
} else {
if((state_val_55559 === (2))){
var state_55558__$1 = state_55558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55558__$1,(4),ch);
} else {
if((state_val_55559 === (11))){
var inst_55538 = (state_55558[(8)]);
var inst_55547 = (state_55558[(2)]);
var inst_55535 = inst_55538;
var state_55558__$1 = (function (){var statearr_55568 = state_55558;
(statearr_55568[(10)] = inst_55547);

(statearr_55568[(7)] = inst_55535);

return statearr_55568;
})();
var statearr_55569_56347 = state_55558__$1;
(statearr_55569_56347[(2)] = null);

(statearr_55569_56347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55559 === (9))){
var inst_55538 = (state_55558[(8)]);
var state_55558__$1 = state_55558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55558__$1,(11),out,inst_55538);
} else {
if((state_val_55559 === (5))){
var inst_55538 = (state_55558[(8)]);
var inst_55535 = (state_55558[(7)]);
var inst_55542 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55538,inst_55535);
var state_55558__$1 = state_55558;
if(inst_55542){
var statearr_55571_56348 = state_55558__$1;
(statearr_55571_56348[(1)] = (8));

} else {
var statearr_55572_56349 = state_55558__$1;
(statearr_55572_56349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55559 === (10))){
var inst_55550 = (state_55558[(2)]);
var state_55558__$1 = state_55558;
var statearr_55573_56350 = state_55558__$1;
(statearr_55573_56350[(2)] = inst_55550);

(statearr_55573_56350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55559 === (8))){
var inst_55535 = (state_55558[(7)]);
var tmp55570 = inst_55535;
var inst_55535__$1 = tmp55570;
var state_55558__$1 = (function (){var statearr_55574 = state_55558;
(statearr_55574[(7)] = inst_55535__$1);

return statearr_55574;
})();
var statearr_55575_56351 = state_55558__$1;
(statearr_55575_56351[(2)] = null);

(statearr_55575_56351[(1)] = (2));


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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55576[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55576[(1)] = (1));

return statearr_55576;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55558){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55558);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55577){var ex__54033__auto__ = e55577;
var statearr_55578_56356 = state_55558;
(statearr_55578_56356[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55558[(4)]))){
var statearr_55579_56357 = state_55558;
(statearr_55579_56357[(1)] = cljs.core.first((state_55558[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56358 = state_55558;
state_55558 = G__56358;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55580 = f__54101__auto__();
(statearr_55580[(6)] = c__54100__auto___56341);

return statearr_55580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55582 = arguments.length;
switch (G__55582) {
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
var c__54100__auto___56360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55620){
var state_val_55621 = (state_55620[(1)]);
if((state_val_55621 === (7))){
var inst_55616 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
var statearr_55622_56361 = state_55620__$1;
(statearr_55622_56361[(2)] = inst_55616);

(statearr_55622_56361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (1))){
var inst_55583 = (new Array(n));
var inst_55584 = inst_55583;
var inst_55585 = (0);
var state_55620__$1 = (function (){var statearr_55623 = state_55620;
(statearr_55623[(7)] = inst_55584);

(statearr_55623[(8)] = inst_55585);

return statearr_55623;
})();
var statearr_55624_56362 = state_55620__$1;
(statearr_55624_56362[(2)] = null);

(statearr_55624_56362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (4))){
var inst_55588 = (state_55620[(9)]);
var inst_55588__$1 = (state_55620[(2)]);
var inst_55589 = (inst_55588__$1 == null);
var inst_55590 = cljs.core.not(inst_55589);
var state_55620__$1 = (function (){var statearr_55625 = state_55620;
(statearr_55625[(9)] = inst_55588__$1);

return statearr_55625;
})();
if(inst_55590){
var statearr_55626_56363 = state_55620__$1;
(statearr_55626_56363[(1)] = (5));

} else {
var statearr_55627_56364 = state_55620__$1;
(statearr_55627_56364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (15))){
var inst_55610 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
var statearr_55628_56365 = state_55620__$1;
(statearr_55628_56365[(2)] = inst_55610);

(statearr_55628_56365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (13))){
var state_55620__$1 = state_55620;
var statearr_55629_56366 = state_55620__$1;
(statearr_55629_56366[(2)] = null);

(statearr_55629_56366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (6))){
var inst_55585 = (state_55620[(8)]);
var inst_55606 = (inst_55585 > (0));
var state_55620__$1 = state_55620;
if(cljs.core.truth_(inst_55606)){
var statearr_55630_56367 = state_55620__$1;
(statearr_55630_56367[(1)] = (12));

} else {
var statearr_55631_56368 = state_55620__$1;
(statearr_55631_56368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (3))){
var inst_55618 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55620__$1,inst_55618);
} else {
if((state_val_55621 === (12))){
var inst_55584 = (state_55620[(7)]);
var inst_55608 = cljs.core.vec(inst_55584);
var state_55620__$1 = state_55620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55620__$1,(15),out,inst_55608);
} else {
if((state_val_55621 === (2))){
var state_55620__$1 = state_55620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55620__$1,(4),ch);
} else {
if((state_val_55621 === (11))){
var inst_55600 = (state_55620[(2)]);
var inst_55601 = (new Array(n));
var inst_55584 = inst_55601;
var inst_55585 = (0);
var state_55620__$1 = (function (){var statearr_55632 = state_55620;
(statearr_55632[(10)] = inst_55600);

(statearr_55632[(7)] = inst_55584);

(statearr_55632[(8)] = inst_55585);

return statearr_55632;
})();
var statearr_55633_56373 = state_55620__$1;
(statearr_55633_56373[(2)] = null);

(statearr_55633_56373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (9))){
var inst_55584 = (state_55620[(7)]);
var inst_55598 = cljs.core.vec(inst_55584);
var state_55620__$1 = state_55620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55620__$1,(11),out,inst_55598);
} else {
if((state_val_55621 === (5))){
var inst_55584 = (state_55620[(7)]);
var inst_55585 = (state_55620[(8)]);
var inst_55588 = (state_55620[(9)]);
var inst_55593 = (state_55620[(11)]);
var inst_55592 = (inst_55584[inst_55585] = inst_55588);
var inst_55593__$1 = (inst_55585 + (1));
var inst_55594 = (inst_55593__$1 < n);
var state_55620__$1 = (function (){var statearr_55634 = state_55620;
(statearr_55634[(12)] = inst_55592);

(statearr_55634[(11)] = inst_55593__$1);

return statearr_55634;
})();
if(cljs.core.truth_(inst_55594)){
var statearr_55635_56374 = state_55620__$1;
(statearr_55635_56374[(1)] = (8));

} else {
var statearr_55636_56375 = state_55620__$1;
(statearr_55636_56375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (14))){
var inst_55613 = (state_55620[(2)]);
var inst_55614 = cljs.core.async.close_BANG_(out);
var state_55620__$1 = (function (){var statearr_55638 = state_55620;
(statearr_55638[(13)] = inst_55613);

return statearr_55638;
})();
var statearr_55639_56376 = state_55620__$1;
(statearr_55639_56376[(2)] = inst_55614);

(statearr_55639_56376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (10))){
var inst_55604 = (state_55620[(2)]);
var state_55620__$1 = state_55620;
var statearr_55640_56377 = state_55620__$1;
(statearr_55640_56377[(2)] = inst_55604);

(statearr_55640_56377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55621 === (8))){
var inst_55584 = (state_55620[(7)]);
var inst_55593 = (state_55620[(11)]);
var tmp55637 = inst_55584;
var inst_55584__$1 = tmp55637;
var inst_55585 = inst_55593;
var state_55620__$1 = (function (){var statearr_55641 = state_55620;
(statearr_55641[(7)] = inst_55584__$1);

(statearr_55641[(8)] = inst_55585);

return statearr_55641;
})();
var statearr_55642_56378 = state_55620__$1;
(statearr_55642_56378[(2)] = null);

(statearr_55642_56378[(1)] = (2));


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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55643[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55643[(1)] = (1));

return statearr_55643;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55620){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55620);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55644){var ex__54033__auto__ = e55644;
var statearr_55645_56380 = state_55620;
(statearr_55645_56380[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55620[(4)]))){
var statearr_55646_56381 = state_55620;
(statearr_55646_56381[(1)] = cljs.core.first((state_55620[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56382 = state_55620;
state_55620 = G__56382;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55647 = f__54101__auto__();
(statearr_55647[(6)] = c__54100__auto___56360);

return statearr_55647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55649 = arguments.length;
switch (G__55649) {
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
var c__54100__auto___56384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54101__auto__ = (function (){var switch__54029__auto__ = (function (state_55694){
var state_val_55695 = (state_55694[(1)]);
if((state_val_55695 === (7))){
var inst_55690 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
var statearr_55696_56385 = state_55694__$1;
(statearr_55696_56385[(2)] = inst_55690);

(statearr_55696_56385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (1))){
var inst_55650 = [];
var inst_55651 = inst_55650;
var inst_55652 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55694__$1 = (function (){var statearr_55697 = state_55694;
(statearr_55697[(7)] = inst_55651);

(statearr_55697[(8)] = inst_55652);

return statearr_55697;
})();
var statearr_55698_56386 = state_55694__$1;
(statearr_55698_56386[(2)] = null);

(statearr_55698_56386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (4))){
var inst_55655 = (state_55694[(9)]);
var inst_55655__$1 = (state_55694[(2)]);
var inst_55656 = (inst_55655__$1 == null);
var inst_55657 = cljs.core.not(inst_55656);
var state_55694__$1 = (function (){var statearr_55699 = state_55694;
(statearr_55699[(9)] = inst_55655__$1);

return statearr_55699;
})();
if(inst_55657){
var statearr_55700_56387 = state_55694__$1;
(statearr_55700_56387[(1)] = (5));

} else {
var statearr_55701_56388 = state_55694__$1;
(statearr_55701_56388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (15))){
var inst_55651 = (state_55694[(7)]);
var inst_55682 = cljs.core.vec(inst_55651);
var state_55694__$1 = state_55694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55694__$1,(18),out,inst_55682);
} else {
if((state_val_55695 === (13))){
var inst_55677 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
var statearr_55702_56389 = state_55694__$1;
(statearr_55702_56389[(2)] = inst_55677);

(statearr_55702_56389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (6))){
var inst_55651 = (state_55694[(7)]);
var inst_55679 = inst_55651.length;
var inst_55680 = (inst_55679 > (0));
var state_55694__$1 = state_55694;
if(cljs.core.truth_(inst_55680)){
var statearr_55703_56390 = state_55694__$1;
(statearr_55703_56390[(1)] = (15));

} else {
var statearr_55704_56391 = state_55694__$1;
(statearr_55704_56391[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (17))){
var inst_55687 = (state_55694[(2)]);
var inst_55688 = cljs.core.async.close_BANG_(out);
var state_55694__$1 = (function (){var statearr_55705 = state_55694;
(statearr_55705[(10)] = inst_55687);

return statearr_55705;
})();
var statearr_55706_56394 = state_55694__$1;
(statearr_55706_56394[(2)] = inst_55688);

(statearr_55706_56394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (3))){
var inst_55692 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55694__$1,inst_55692);
} else {
if((state_val_55695 === (12))){
var inst_55651 = (state_55694[(7)]);
var inst_55670 = cljs.core.vec(inst_55651);
var state_55694__$1 = state_55694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55694__$1,(14),out,inst_55670);
} else {
if((state_val_55695 === (2))){
var state_55694__$1 = state_55694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55694__$1,(4),ch);
} else {
if((state_val_55695 === (11))){
var inst_55651 = (state_55694[(7)]);
var inst_55655 = (state_55694[(9)]);
var inst_55659 = (state_55694[(11)]);
var inst_55667 = inst_55651.push(inst_55655);
var tmp55707 = inst_55651;
var inst_55651__$1 = tmp55707;
var inst_55652 = inst_55659;
var state_55694__$1 = (function (){var statearr_55708 = state_55694;
(statearr_55708[(12)] = inst_55667);

(statearr_55708[(7)] = inst_55651__$1);

(statearr_55708[(8)] = inst_55652);

return statearr_55708;
})();
var statearr_55709_56395 = state_55694__$1;
(statearr_55709_56395[(2)] = null);

(statearr_55709_56395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (9))){
var inst_55652 = (state_55694[(8)]);
var inst_55663 = cljs.core.keyword_identical_QMARK_(inst_55652,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_55694__$1 = state_55694;
var statearr_55710_56396 = state_55694__$1;
(statearr_55710_56396[(2)] = inst_55663);

(statearr_55710_56396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (5))){
var inst_55655 = (state_55694[(9)]);
var inst_55659 = (state_55694[(11)]);
var inst_55652 = (state_55694[(8)]);
var inst_55660 = (state_55694[(13)]);
var inst_55659__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55655) : f.call(null,inst_55655));
var inst_55660__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55659__$1,inst_55652);
var state_55694__$1 = (function (){var statearr_55711 = state_55694;
(statearr_55711[(11)] = inst_55659__$1);

(statearr_55711[(13)] = inst_55660__$1);

return statearr_55711;
})();
if(inst_55660__$1){
var statearr_55712_56398 = state_55694__$1;
(statearr_55712_56398[(1)] = (8));

} else {
var statearr_55713_56399 = state_55694__$1;
(statearr_55713_56399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (14))){
var inst_55655 = (state_55694[(9)]);
var inst_55659 = (state_55694[(11)]);
var inst_55672 = (state_55694[(2)]);
var inst_55673 = [];
var inst_55674 = inst_55673.push(inst_55655);
var inst_55651 = inst_55673;
var inst_55652 = inst_55659;
var state_55694__$1 = (function (){var statearr_55714 = state_55694;
(statearr_55714[(14)] = inst_55672);

(statearr_55714[(15)] = inst_55674);

(statearr_55714[(7)] = inst_55651);

(statearr_55714[(8)] = inst_55652);

return statearr_55714;
})();
var statearr_55715_56400 = state_55694__$1;
(statearr_55715_56400[(2)] = null);

(statearr_55715_56400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (16))){
var state_55694__$1 = state_55694;
var statearr_55716_56401 = state_55694__$1;
(statearr_55716_56401[(2)] = null);

(statearr_55716_56401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (10))){
var inst_55665 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
if(cljs.core.truth_(inst_55665)){
var statearr_55717_56402 = state_55694__$1;
(statearr_55717_56402[(1)] = (11));

} else {
var statearr_55718_56403 = state_55694__$1;
(statearr_55718_56403[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (18))){
var inst_55684 = (state_55694[(2)]);
var state_55694__$1 = state_55694;
var statearr_55719_56404 = state_55694__$1;
(statearr_55719_56404[(2)] = inst_55684);

(statearr_55719_56404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55695 === (8))){
var inst_55660 = (state_55694[(13)]);
var state_55694__$1 = state_55694;
var statearr_55720_56405 = state_55694__$1;
(statearr_55720_56405[(2)] = inst_55660);

(statearr_55720_56405[(1)] = (10));


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
var cljs$core$async$state_machine__54030__auto__ = null;
var cljs$core$async$state_machine__54030__auto____0 = (function (){
var statearr_55721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55721[(0)] = cljs$core$async$state_machine__54030__auto__);

(statearr_55721[(1)] = (1));

return statearr_55721;
});
var cljs$core$async$state_machine__54030__auto____1 = (function (state_55694){
while(true){
var ret_value__54031__auto__ = (function (){try{while(true){
var result__54032__auto__ = switch__54029__auto__(state_55694);
if(cljs.core.keyword_identical_QMARK_(result__54032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54032__auto__;
}
break;
}
}catch (e55722){var ex__54033__auto__ = e55722;
var statearr_55723_56406 = state_55694;
(statearr_55723_56406[(2)] = ex__54033__auto__);


if(cljs.core.seq((state_55694[(4)]))){
var statearr_55724_56407 = state_55694;
(statearr_55724_56407[(1)] = cljs.core.first((state_55694[(4)])));

} else {
throw ex__54033__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56408 = state_55694;
state_55694 = G__56408;
continue;
} else {
return ret_value__54031__auto__;
}
break;
}
});
cljs$core$async$state_machine__54030__auto__ = function(state_55694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54030__auto____1.call(this,state_55694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54030__auto____0;
cljs$core$async$state_machine__54030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54030__auto____1;
return cljs$core$async$state_machine__54030__auto__;
})()
})();
var state__54102__auto__ = (function (){var statearr_55725 = f__54101__auto__();
(statearr_55725[(6)] = c__54100__auto___56384);

return statearr_55725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54102__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
