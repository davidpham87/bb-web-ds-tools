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
cljs.core.async.t_cljs$core$async45223 = (function (f,blockable,meta45224){
this.f = f;
this.blockable = blockable;
this.meta45224 = meta45224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45225,meta45224__$1){
var self__ = this;
var _45225__$1 = this;
return (new cljs.core.async.t_cljs$core$async45223(self__.f,self__.blockable,meta45224__$1));
}));

(cljs.core.async.t_cljs$core$async45223.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45225){
var self__ = this;
var _45225__$1 = this;
return self__.meta45224;
}));

(cljs.core.async.t_cljs$core$async45223.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45223.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45223.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45224","meta45224",346433857,null)], null);
}));

(cljs.core.async.t_cljs$core$async45223.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45223");

(cljs.core.async.t_cljs$core$async45223.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45223");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45223.
 */
cljs.core.async.__GT_t_cljs$core$async45223 = (function cljs$core$async$__GT_t_cljs$core$async45223(f,blockable,meta45224){
return (new cljs.core.async.t_cljs$core$async45223(f,blockable,meta45224));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45222 = arguments.length;
switch (G__45222) {
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
return (new cljs.core.async.t_cljs$core$async45223(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45232 = arguments.length;
switch (G__45232) {
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
var G__45234 = arguments.length;
switch (G__45234) {
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
var G__45238 = arguments.length;
switch (G__45238) {
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
var val_46796 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46796) : fn1.call(null,val_46796));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46796) : fn1.call(null,val_46796));
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
var G__45242 = arguments.length;
switch (G__45242) {
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
var n__5616__auto___46798 = n;
var x_46799 = (0);
while(true){
if((x_46799 < n__5616__auto___46798)){
(a[x_46799] = x_46799);

var G__46800 = (x_46799 + (1));
x_46799 = G__46800;
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
cljs.core.async.t_cljs$core$async45259 = (function (flag,meta45260){
this.flag = flag;
this.meta45260 = meta45260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45261,meta45260__$1){
var self__ = this;
var _45261__$1 = this;
return (new cljs.core.async.t_cljs$core$async45259(self__.flag,meta45260__$1));
}));

(cljs.core.async.t_cljs$core$async45259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45261){
var self__ = this;
var _45261__$1 = this;
return self__.meta45260;
}));

(cljs.core.async.t_cljs$core$async45259.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45260","meta45260",1961031040,null)], null);
}));

(cljs.core.async.t_cljs$core$async45259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45259");

(cljs.core.async.t_cljs$core$async45259.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45259.
 */
cljs.core.async.__GT_t_cljs$core$async45259 = (function cljs$core$async$__GT_t_cljs$core$async45259(flag,meta45260){
return (new cljs.core.async.t_cljs$core$async45259(flag,meta45260));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async45259(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45264 = (function (flag,cb,meta45265){
this.flag = flag;
this.cb = cb;
this.meta45265 = meta45265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45266,meta45265__$1){
var self__ = this;
var _45266__$1 = this;
return (new cljs.core.async.t_cljs$core$async45264(self__.flag,self__.cb,meta45265__$1));
}));

(cljs.core.async.t_cljs$core$async45264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45266){
var self__ = this;
var _45266__$1 = this;
return self__.meta45265;
}));

(cljs.core.async.t_cljs$core$async45264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45265","meta45265",-1794396275,null)], null);
}));

(cljs.core.async.t_cljs$core$async45264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45264");

(cljs.core.async.t_cljs$core$async45264.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45264.
 */
cljs.core.async.__GT_t_cljs$core$async45264 = (function cljs$core$async$__GT_t_cljs$core$async45264(flag,cb,meta45265){
return (new cljs.core.async.t_cljs$core$async45264(flag,cb,meta45265));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async45264(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_46801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_46801)){
if((!(((port_46801.cljs$core$IFn$_invoke$arity$1 ? port_46801.cljs$core$IFn$_invoke$arity$1((1)) : port_46801.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__46802 = (i + (1));
i = G__46802;
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
return (function (p1__45270_SHARP_){
var G__45272 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45270_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45272) : fret.call(null,G__45272));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__45271_SHARP_){
var G__45273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45271_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45273) : fret.call(null,G__45273));
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
var G__46805 = (i + (1));
i = G__46805;
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
var len__5749__auto___46812 = arguments.length;
var i__5750__auto___46813 = (0);
while(true){
if((i__5750__auto___46813 < len__5749__auto___46812)){
args__5755__auto__.push((arguments[i__5750__auto___46813]));

var G__46814 = (i__5750__auto___46813 + (1));
i__5750__auto___46813 = G__46814;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45276){
var map__45277 = p__45276;
var map__45277__$1 = cljs.core.__destructure_map(map__45277);
var opts = map__45277__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45274){
var G__45275 = cljs.core.first(seq45274);
var seq45274__$1 = cljs.core.next(seq45274);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45275,seq45274__$1);
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
var G__45279 = arguments.length;
switch (G__45279) {
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
var c__45154__auto___46820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45340){
var state_val_45350 = (state_45340[(1)]);
if((state_val_45350 === (7))){
var inst_45326 = (state_45340[(2)]);
var state_45340__$1 = state_45340;
var statearr_45390_46821 = state_45340__$1;
(statearr_45390_46821[(2)] = inst_45326);

(statearr_45390_46821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (1))){
var state_45340__$1 = state_45340;
var statearr_45396_46826 = state_45340__$1;
(statearr_45396_46826[(2)] = null);

(statearr_45396_46826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (4))){
var inst_45306 = (state_45340[(7)]);
var inst_45306__$1 = (state_45340[(2)]);
var inst_45308 = (inst_45306__$1 == null);
var state_45340__$1 = (function (){var statearr_45397 = state_45340;
(statearr_45397[(7)] = inst_45306__$1);

return statearr_45397;
})();
if(cljs.core.truth_(inst_45308)){
var statearr_45398_46827 = state_45340__$1;
(statearr_45398_46827[(1)] = (5));

} else {
var statearr_45399_46828 = state_45340__$1;
(statearr_45399_46828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (13))){
var state_45340__$1 = state_45340;
var statearr_45400_46829 = state_45340__$1;
(statearr_45400_46829[(2)] = null);

(statearr_45400_46829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (6))){
var inst_45306 = (state_45340[(7)]);
var state_45340__$1 = state_45340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45340__$1,(11),to,inst_45306);
} else {
if((state_val_45350 === (3))){
var inst_45328 = (state_45340[(2)]);
var state_45340__$1 = state_45340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45340__$1,inst_45328);
} else {
if((state_val_45350 === (12))){
var state_45340__$1 = state_45340;
var statearr_45402_46830 = state_45340__$1;
(statearr_45402_46830[(2)] = null);

(statearr_45402_46830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (2))){
var state_45340__$1 = state_45340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45340__$1,(4),from);
} else {
if((state_val_45350 === (11))){
var inst_45319 = (state_45340[(2)]);
var state_45340__$1 = state_45340;
if(cljs.core.truth_(inst_45319)){
var statearr_45403_46838 = state_45340__$1;
(statearr_45403_46838[(1)] = (12));

} else {
var statearr_45404_46839 = state_45340__$1;
(statearr_45404_46839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (9))){
var state_45340__$1 = state_45340;
var statearr_45405_46840 = state_45340__$1;
(statearr_45405_46840[(2)] = null);

(statearr_45405_46840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (5))){
var state_45340__$1 = state_45340;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45406_46841 = state_45340__$1;
(statearr_45406_46841[(1)] = (8));

} else {
var statearr_45411_46842 = state_45340__$1;
(statearr_45411_46842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (14))){
var inst_45324 = (state_45340[(2)]);
var state_45340__$1 = state_45340;
var statearr_45416_46843 = state_45340__$1;
(statearr_45416_46843[(2)] = inst_45324);

(statearr_45416_46843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (10))){
var inst_45316 = (state_45340[(2)]);
var state_45340__$1 = state_45340;
var statearr_45421_46844 = state_45340__$1;
(statearr_45421_46844[(2)] = inst_45316);

(statearr_45421_46844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45350 === (8))){
var inst_45313 = cljs.core.async.close_BANG_(to);
var state_45340__$1 = state_45340;
var statearr_45422_46848 = state_45340__$1;
(statearr_45422_46848[(2)] = inst_45313);

(statearr_45422_46848[(1)] = (10));


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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_45423 = [null,null,null,null,null,null,null,null];
(statearr_45423[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_45423[(1)] = (1));

return statearr_45423;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_45340){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45340);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45424){var ex__45083__auto__ = e45424;
var statearr_45425_46852 = state_45340;
(statearr_45425_46852[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45340[(4)]))){
var statearr_45426_46853 = state_45340;
(statearr_45426_46853[(1)] = cljs.core.first((state_45340[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46854 = state_45340;
state_45340 = G__46854;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_45340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_45340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45428 = f__45155__auto__();
(statearr_45428[(6)] = c__45154__auto___46820);

return statearr_45428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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
var process__$1 = (function (p__45429){
var vec__45430 = p__45429;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45430,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45430,(1),null);
var job = vec__45430;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45154__auto___46858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45437){
var state_val_45438 = (state_45437[(1)]);
if((state_val_45438 === (1))){
var state_45437__$1 = state_45437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45437__$1,(2),res,v);
} else {
if((state_val_45438 === (2))){
var inst_45434 = (state_45437[(2)]);
var inst_45435 = cljs.core.async.close_BANG_(res);
var state_45437__$1 = (function (){var statearr_45439 = state_45437;
(statearr_45439[(7)] = inst_45434);

return statearr_45439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45437__$1,inst_45435);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0 = (function (){
var statearr_45440 = [null,null,null,null,null,null,null,null];
(statearr_45440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__);

(statearr_45440[(1)] = (1));

return statearr_45440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1 = (function (state_45437){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45437);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45441){var ex__45083__auto__ = e45441;
var statearr_45442_46859 = state_45437;
(statearr_45442_46859[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45437[(4)]))){
var statearr_45443_46860 = state_45437;
(statearr_45443_46860[(1)] = cljs.core.first((state_45437[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46861 = state_45437;
state_45437 = G__46861;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = function(state_45437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1.call(this,state_45437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45444 = f__45155__auto__();
(statearr_45444[(6)] = c__45154__auto___46858);

return statearr_45444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45445){
var vec__45446 = p__45445;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45446,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45446,(1),null);
var job = vec__45446;
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
var n__5616__auto___46862 = n;
var __46863 = (0);
while(true){
if((__46863 < n__5616__auto___46862)){
var G__45449_46864 = type;
var G__45449_46865__$1 = (((G__45449_46864 instanceof cljs.core.Keyword))?G__45449_46864.fqn:null);
switch (G__45449_46865__$1) {
case "compute":
var c__45154__auto___46867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46863,c__45154__auto___46867,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async){
return (function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = ((function (__46863,c__45154__auto___46867,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async){
return (function (state_45462){
var state_val_45463 = (state_45462[(1)]);
if((state_val_45463 === (1))){
var state_45462__$1 = state_45462;
var statearr_45464_46868 = state_45462__$1;
(statearr_45464_46868[(2)] = null);

(statearr_45464_46868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45463 === (2))){
var state_45462__$1 = state_45462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45462__$1,(4),jobs);
} else {
if((state_val_45463 === (3))){
var inst_45460 = (state_45462[(2)]);
var state_45462__$1 = state_45462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45462__$1,inst_45460);
} else {
if((state_val_45463 === (4))){
var inst_45452 = (state_45462[(2)]);
var inst_45453 = process__$1(inst_45452);
var state_45462__$1 = state_45462;
if(cljs.core.truth_(inst_45453)){
var statearr_45465_46869 = state_45462__$1;
(statearr_45465_46869[(1)] = (5));

} else {
var statearr_45466_46870 = state_45462__$1;
(statearr_45466_46870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45463 === (5))){
var state_45462__$1 = state_45462;
var statearr_45467_46871 = state_45462__$1;
(statearr_45467_46871[(2)] = null);

(statearr_45467_46871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45463 === (6))){
var state_45462__$1 = state_45462;
var statearr_45468_46872 = state_45462__$1;
(statearr_45468_46872[(2)] = null);

(statearr_45468_46872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45463 === (7))){
var inst_45458 = (state_45462[(2)]);
var state_45462__$1 = state_45462;
var statearr_45469_46873 = state_45462__$1;
(statearr_45469_46873[(2)] = inst_45458);

(statearr_45469_46873[(1)] = (3));


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
});})(__46863,c__45154__auto___46867,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async))
;
return ((function (__46863,switch__45079__auto__,c__45154__auto___46867,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0 = (function (){
var statearr_45470 = [null,null,null,null,null,null,null];
(statearr_45470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__);

(statearr_45470[(1)] = (1));

return statearr_45470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1 = (function (state_45462){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45462);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45471){var ex__45083__auto__ = e45471;
var statearr_45472_46874 = state_45462;
(statearr_45472_46874[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45462[(4)]))){
var statearr_45473_46875 = state_45462;
(statearr_45473_46875[(1)] = cljs.core.first((state_45462[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46876 = state_45462;
state_45462 = G__46876;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = function(state_45462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1.call(this,state_45462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__;
})()
;})(__46863,switch__45079__auto__,c__45154__auto___46867,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async))
})();
var state__45156__auto__ = (function (){var statearr_45474 = f__45155__auto__();
(statearr_45474[(6)] = c__45154__auto___46867);

return statearr_45474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
});})(__46863,c__45154__auto___46867,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async))
);


break;
case "async":
var c__45154__auto___46877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46863,c__45154__auto___46877,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async){
return (function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = ((function (__46863,c__45154__auto___46877,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async){
return (function (state_45487){
var state_val_45488 = (state_45487[(1)]);
if((state_val_45488 === (1))){
var state_45487__$1 = state_45487;
var statearr_45489_46878 = state_45487__$1;
(statearr_45489_46878[(2)] = null);

(statearr_45489_46878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (2))){
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45487__$1,(4),jobs);
} else {
if((state_val_45488 === (3))){
var inst_45485 = (state_45487[(2)]);
var state_45487__$1 = state_45487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45487__$1,inst_45485);
} else {
if((state_val_45488 === (4))){
var inst_45477 = (state_45487[(2)]);
var inst_45478 = async(inst_45477);
var state_45487__$1 = state_45487;
if(cljs.core.truth_(inst_45478)){
var statearr_45490_46879 = state_45487__$1;
(statearr_45490_46879[(1)] = (5));

} else {
var statearr_45491_46880 = state_45487__$1;
(statearr_45491_46880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (5))){
var state_45487__$1 = state_45487;
var statearr_45492_46881 = state_45487__$1;
(statearr_45492_46881[(2)] = null);

(statearr_45492_46881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (6))){
var state_45487__$1 = state_45487;
var statearr_45493_46882 = state_45487__$1;
(statearr_45493_46882[(2)] = null);

(statearr_45493_46882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45488 === (7))){
var inst_45483 = (state_45487[(2)]);
var state_45487__$1 = state_45487;
var statearr_45494_46883 = state_45487__$1;
(statearr_45494_46883[(2)] = inst_45483);

(statearr_45494_46883[(1)] = (3));


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
});})(__46863,c__45154__auto___46877,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async))
;
return ((function (__46863,switch__45079__auto__,c__45154__auto___46877,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0 = (function (){
var statearr_45495 = [null,null,null,null,null,null,null];
(statearr_45495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__);

(statearr_45495[(1)] = (1));

return statearr_45495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1 = (function (state_45487){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45487);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45496){var ex__45083__auto__ = e45496;
var statearr_45497_46884 = state_45487;
(statearr_45497_46884[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45487[(4)]))){
var statearr_45498_46885 = state_45487;
(statearr_45498_46885[(1)] = cljs.core.first((state_45487[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46886 = state_45487;
state_45487 = G__46886;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = function(state_45487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1.call(this,state_45487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__;
})()
;})(__46863,switch__45079__auto__,c__45154__auto___46877,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async))
})();
var state__45156__auto__ = (function (){var statearr_45499 = f__45155__auto__();
(statearr_45499[(6)] = c__45154__auto___46877);

return statearr_45499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
});})(__46863,c__45154__auto___46877,G__45449_46864,G__45449_46865__$1,n__5616__auto___46862,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45449_46865__$1)].join('')));

}

var G__46887 = (__46863 + (1));
__46863 = G__46887;
continue;
} else {
}
break;
}

var c__45154__auto___46888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45521){
var state_val_45522 = (state_45521[(1)]);
if((state_val_45522 === (7))){
var inst_45517 = (state_45521[(2)]);
var state_45521__$1 = state_45521;
var statearr_45523_46889 = state_45521__$1;
(statearr_45523_46889[(2)] = inst_45517);

(statearr_45523_46889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (1))){
var state_45521__$1 = state_45521;
var statearr_45524_46890 = state_45521__$1;
(statearr_45524_46890[(2)] = null);

(statearr_45524_46890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (4))){
var inst_45502 = (state_45521[(7)]);
var inst_45502__$1 = (state_45521[(2)]);
var inst_45503 = (inst_45502__$1 == null);
var state_45521__$1 = (function (){var statearr_45525 = state_45521;
(statearr_45525[(7)] = inst_45502__$1);

return statearr_45525;
})();
if(cljs.core.truth_(inst_45503)){
var statearr_45526_46891 = state_45521__$1;
(statearr_45526_46891[(1)] = (5));

} else {
var statearr_45527_46892 = state_45521__$1;
(statearr_45527_46892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (6))){
var inst_45502 = (state_45521[(7)]);
var inst_45507 = (state_45521[(8)]);
var inst_45507__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45508 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45509 = [inst_45502,inst_45507__$1];
var inst_45510 = (new cljs.core.PersistentVector(null,2,(5),inst_45508,inst_45509,null));
var state_45521__$1 = (function (){var statearr_45528 = state_45521;
(statearr_45528[(8)] = inst_45507__$1);

return statearr_45528;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45521__$1,(8),jobs,inst_45510);
} else {
if((state_val_45522 === (3))){
var inst_45519 = (state_45521[(2)]);
var state_45521__$1 = state_45521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45521__$1,inst_45519);
} else {
if((state_val_45522 === (2))){
var state_45521__$1 = state_45521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45521__$1,(4),from);
} else {
if((state_val_45522 === (9))){
var inst_45514 = (state_45521[(2)]);
var state_45521__$1 = (function (){var statearr_45529 = state_45521;
(statearr_45529[(9)] = inst_45514);

return statearr_45529;
})();
var statearr_45530_46893 = state_45521__$1;
(statearr_45530_46893[(2)] = null);

(statearr_45530_46893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (5))){
var inst_45505 = cljs.core.async.close_BANG_(jobs);
var state_45521__$1 = state_45521;
var statearr_45531_46894 = state_45521__$1;
(statearr_45531_46894[(2)] = inst_45505);

(statearr_45531_46894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45522 === (8))){
var inst_45507 = (state_45521[(8)]);
var inst_45512 = (state_45521[(2)]);
var state_45521__$1 = (function (){var statearr_45532 = state_45521;
(statearr_45532[(10)] = inst_45512);

return statearr_45532;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45521__$1,(9),results,inst_45507);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0 = (function (){
var statearr_45533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45533[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__);

(statearr_45533[(1)] = (1));

return statearr_45533;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1 = (function (state_45521){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45521);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45534){var ex__45083__auto__ = e45534;
var statearr_45535_46895 = state_45521;
(statearr_45535_46895[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45521[(4)]))){
var statearr_45536_46896 = state_45521;
(statearr_45536_46896[(1)] = cljs.core.first((state_45521[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46897 = state_45521;
state_45521 = G__46897;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = function(state_45521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1.call(this,state_45521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45537 = f__45155__auto__();
(statearr_45537[(6)] = c__45154__auto___46888);

return statearr_45537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));


var c__45154__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45575){
var state_val_45576 = (state_45575[(1)]);
if((state_val_45576 === (7))){
var inst_45571 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45577_46902 = state_45575__$1;
(statearr_45577_46902[(2)] = inst_45571);

(statearr_45577_46902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (20))){
var state_45575__$1 = state_45575;
var statearr_45578_46907 = state_45575__$1;
(statearr_45578_46907[(2)] = null);

(statearr_45578_46907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (1))){
var state_45575__$1 = state_45575;
var statearr_45579_46912 = state_45575__$1;
(statearr_45579_46912[(2)] = null);

(statearr_45579_46912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (4))){
var inst_45540 = (state_45575[(7)]);
var inst_45540__$1 = (state_45575[(2)]);
var inst_45541 = (inst_45540__$1 == null);
var state_45575__$1 = (function (){var statearr_45580 = state_45575;
(statearr_45580[(7)] = inst_45540__$1);

return statearr_45580;
})();
if(cljs.core.truth_(inst_45541)){
var statearr_45581_46923 = state_45575__$1;
(statearr_45581_46923[(1)] = (5));

} else {
var statearr_45582_46924 = state_45575__$1;
(statearr_45582_46924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (15))){
var inst_45553 = (state_45575[(8)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45575__$1,(18),to,inst_45553);
} else {
if((state_val_45576 === (21))){
var inst_45566 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45583_46930 = state_45575__$1;
(statearr_45583_46930[(2)] = inst_45566);

(statearr_45583_46930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (13))){
var inst_45568 = (state_45575[(2)]);
var state_45575__$1 = (function (){var statearr_45584 = state_45575;
(statearr_45584[(9)] = inst_45568);

return statearr_45584;
})();
var statearr_45585_46931 = state_45575__$1;
(statearr_45585_46931[(2)] = null);

(statearr_45585_46931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (6))){
var inst_45540 = (state_45575[(7)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45575__$1,(11),inst_45540);
} else {
if((state_val_45576 === (17))){
var inst_45561 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
if(cljs.core.truth_(inst_45561)){
var statearr_45586_46932 = state_45575__$1;
(statearr_45586_46932[(1)] = (19));

} else {
var statearr_45587_46933 = state_45575__$1;
(statearr_45587_46933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (3))){
var inst_45573 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45575__$1,inst_45573);
} else {
if((state_val_45576 === (12))){
var inst_45550 = (state_45575[(10)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45575__$1,(14),inst_45550);
} else {
if((state_val_45576 === (2))){
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45575__$1,(4),results);
} else {
if((state_val_45576 === (19))){
var state_45575__$1 = state_45575;
var statearr_45588_46934 = state_45575__$1;
(statearr_45588_46934[(2)] = null);

(statearr_45588_46934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (11))){
var inst_45550 = (state_45575[(2)]);
var state_45575__$1 = (function (){var statearr_45589 = state_45575;
(statearr_45589[(10)] = inst_45550);

return statearr_45589;
})();
var statearr_45590_46935 = state_45575__$1;
(statearr_45590_46935[(2)] = null);

(statearr_45590_46935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (9))){
var state_45575__$1 = state_45575;
var statearr_45591_46936 = state_45575__$1;
(statearr_45591_46936[(2)] = null);

(statearr_45591_46936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (5))){
var state_45575__$1 = state_45575;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45592_46937 = state_45575__$1;
(statearr_45592_46937[(1)] = (8));

} else {
var statearr_45593_46938 = state_45575__$1;
(statearr_45593_46938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (14))){
var inst_45553 = (state_45575[(8)]);
var inst_45555 = (state_45575[(11)]);
var inst_45553__$1 = (state_45575[(2)]);
var inst_45554 = (inst_45553__$1 == null);
var inst_45555__$1 = cljs.core.not(inst_45554);
var state_45575__$1 = (function (){var statearr_45594 = state_45575;
(statearr_45594[(8)] = inst_45553__$1);

(statearr_45594[(11)] = inst_45555__$1);

return statearr_45594;
})();
if(inst_45555__$1){
var statearr_45595_46939 = state_45575__$1;
(statearr_45595_46939[(1)] = (15));

} else {
var statearr_45596_46940 = state_45575__$1;
(statearr_45596_46940[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (16))){
var inst_45555 = (state_45575[(11)]);
var state_45575__$1 = state_45575;
var statearr_45597_46941 = state_45575__$1;
(statearr_45597_46941[(2)] = inst_45555);

(statearr_45597_46941[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (10))){
var inst_45547 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45598_46942 = state_45575__$1;
(statearr_45598_46942[(2)] = inst_45547);

(statearr_45598_46942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (18))){
var inst_45558 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45599_46943 = state_45575__$1;
(statearr_45599_46943[(2)] = inst_45558);

(statearr_45599_46943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (8))){
var inst_45544 = cljs.core.async.close_BANG_(to);
var state_45575__$1 = state_45575;
var statearr_45600_46944 = state_45575__$1;
(statearr_45600_46944[(2)] = inst_45544);

(statearr_45600_46944[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0 = (function (){
var statearr_45601 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45601[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__);

(statearr_45601[(1)] = (1));

return statearr_45601;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1 = (function (state_45575){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45575);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45602){var ex__45083__auto__ = e45602;
var statearr_45603_46945 = state_45575;
(statearr_45603_46945[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45575[(4)]))){
var statearr_45604_46946 = state_45575;
(statearr_45604_46946[(1)] = cljs.core.first((state_45575[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46947 = state_45575;
state_45575 = G__46947;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__ = function(state_45575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1.call(this,state_45575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45605 = f__45155__auto__();
(statearr_45605[(6)] = c__45154__auto__);

return statearr_45605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));

return c__45154__auto__;
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
var G__45607 = arguments.length;
switch (G__45607) {
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
var G__45609 = arguments.length;
switch (G__45609) {
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
var G__45611 = arguments.length;
switch (G__45611) {
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
var c__45154__auto___46957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45637){
var state_val_45638 = (state_45637[(1)]);
if((state_val_45638 === (7))){
var inst_45633 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
var statearr_45639_46958 = state_45637__$1;
(statearr_45639_46958[(2)] = inst_45633);

(statearr_45639_46958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (1))){
var state_45637__$1 = state_45637;
var statearr_45640_46959 = state_45637__$1;
(statearr_45640_46959[(2)] = null);

(statearr_45640_46959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (4))){
var inst_45614 = (state_45637[(7)]);
var inst_45614__$1 = (state_45637[(2)]);
var inst_45615 = (inst_45614__$1 == null);
var state_45637__$1 = (function (){var statearr_45641 = state_45637;
(statearr_45641[(7)] = inst_45614__$1);

return statearr_45641;
})();
if(cljs.core.truth_(inst_45615)){
var statearr_45642_46960 = state_45637__$1;
(statearr_45642_46960[(1)] = (5));

} else {
var statearr_45643_46961 = state_45637__$1;
(statearr_45643_46961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (13))){
var state_45637__$1 = state_45637;
var statearr_45644_46962 = state_45637__$1;
(statearr_45644_46962[(2)] = null);

(statearr_45644_46962[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (6))){
var inst_45614 = (state_45637[(7)]);
var inst_45620 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45614) : p.call(null,inst_45614));
var state_45637__$1 = state_45637;
if(cljs.core.truth_(inst_45620)){
var statearr_45645_46963 = state_45637__$1;
(statearr_45645_46963[(1)] = (9));

} else {
var statearr_45646_46964 = state_45637__$1;
(statearr_45646_46964[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (3))){
var inst_45635 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45637__$1,inst_45635);
} else {
if((state_val_45638 === (12))){
var state_45637__$1 = state_45637;
var statearr_45647_46965 = state_45637__$1;
(statearr_45647_46965[(2)] = null);

(statearr_45647_46965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (2))){
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45637__$1,(4),ch);
} else {
if((state_val_45638 === (11))){
var inst_45614 = (state_45637[(7)]);
var inst_45624 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45637__$1,(8),inst_45624,inst_45614);
} else {
if((state_val_45638 === (9))){
var state_45637__$1 = state_45637;
var statearr_45648_46966 = state_45637__$1;
(statearr_45648_46966[(2)] = tc);

(statearr_45648_46966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (5))){
var inst_45617 = cljs.core.async.close_BANG_(tc);
var inst_45618 = cljs.core.async.close_BANG_(fc);
var state_45637__$1 = (function (){var statearr_45649 = state_45637;
(statearr_45649[(8)] = inst_45617);

return statearr_45649;
})();
var statearr_45650_46967 = state_45637__$1;
(statearr_45650_46967[(2)] = inst_45618);

(statearr_45650_46967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (14))){
var inst_45631 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
var statearr_45651_46968 = state_45637__$1;
(statearr_45651_46968[(2)] = inst_45631);

(statearr_45651_46968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (10))){
var state_45637__$1 = state_45637;
var statearr_45652_46969 = state_45637__$1;
(statearr_45652_46969[(2)] = fc);

(statearr_45652_46969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45638 === (8))){
var inst_45626 = (state_45637[(2)]);
var state_45637__$1 = state_45637;
if(cljs.core.truth_(inst_45626)){
var statearr_45653_46970 = state_45637__$1;
(statearr_45653_46970[(1)] = (12));

} else {
var statearr_45654_46971 = state_45637__$1;
(statearr_45654_46971[(1)] = (13));

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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_45655 = [null,null,null,null,null,null,null,null,null];
(statearr_45655[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_45655[(1)] = (1));

return statearr_45655;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_45637){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45637);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45656){var ex__45083__auto__ = e45656;
var statearr_45657_46972 = state_45637;
(statearr_45657_46972[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45637[(4)]))){
var statearr_45658_46973 = state_45637;
(statearr_45658_46973[(1)] = cljs.core.first((state_45637[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46974 = state_45637;
state_45637 = G__46974;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_45637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_45637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45659 = f__45155__auto__();
(statearr_45659[(6)] = c__45154__auto___46957);

return statearr_45659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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
var c__45154__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45681){
var state_val_45682 = (state_45681[(1)]);
if((state_val_45682 === (7))){
var inst_45677 = (state_45681[(2)]);
var state_45681__$1 = state_45681;
var statearr_45683_46975 = state_45681__$1;
(statearr_45683_46975[(2)] = inst_45677);

(statearr_45683_46975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45682 === (1))){
var inst_45660 = init;
var inst_45661 = inst_45660;
var state_45681__$1 = (function (){var statearr_45684 = state_45681;
(statearr_45684[(7)] = inst_45661);

return statearr_45684;
})();
var statearr_45685_46976 = state_45681__$1;
(statearr_45685_46976[(2)] = null);

(statearr_45685_46976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45682 === (4))){
var inst_45664 = (state_45681[(8)]);
var inst_45664__$1 = (state_45681[(2)]);
var inst_45665 = (inst_45664__$1 == null);
var state_45681__$1 = (function (){var statearr_45686 = state_45681;
(statearr_45686[(8)] = inst_45664__$1);

return statearr_45686;
})();
if(cljs.core.truth_(inst_45665)){
var statearr_45687_46977 = state_45681__$1;
(statearr_45687_46977[(1)] = (5));

} else {
var statearr_45688_46978 = state_45681__$1;
(statearr_45688_46978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45682 === (6))){
var inst_45661 = (state_45681[(7)]);
var inst_45664 = (state_45681[(8)]);
var inst_45668 = (state_45681[(9)]);
var inst_45668__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45661,inst_45664) : f.call(null,inst_45661,inst_45664));
var inst_45669 = cljs.core.reduced_QMARK_(inst_45668__$1);
var state_45681__$1 = (function (){var statearr_45689 = state_45681;
(statearr_45689[(9)] = inst_45668__$1);

return statearr_45689;
})();
if(inst_45669){
var statearr_45690_46979 = state_45681__$1;
(statearr_45690_46979[(1)] = (8));

} else {
var statearr_45691_46980 = state_45681__$1;
(statearr_45691_46980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45682 === (3))){
var inst_45679 = (state_45681[(2)]);
var state_45681__$1 = state_45681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45681__$1,inst_45679);
} else {
if((state_val_45682 === (2))){
var state_45681__$1 = state_45681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45681__$1,(4),ch);
} else {
if((state_val_45682 === (9))){
var inst_45668 = (state_45681[(9)]);
var inst_45661 = inst_45668;
var state_45681__$1 = (function (){var statearr_45692 = state_45681;
(statearr_45692[(7)] = inst_45661);

return statearr_45692;
})();
var statearr_45693_46981 = state_45681__$1;
(statearr_45693_46981[(2)] = null);

(statearr_45693_46981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45682 === (5))){
var inst_45661 = (state_45681[(7)]);
var state_45681__$1 = state_45681;
var statearr_45694_46982 = state_45681__$1;
(statearr_45694_46982[(2)] = inst_45661);

(statearr_45694_46982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45682 === (10))){
var inst_45675 = (state_45681[(2)]);
var state_45681__$1 = state_45681;
var statearr_45695_46983 = state_45681__$1;
(statearr_45695_46983[(2)] = inst_45675);

(statearr_45695_46983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45682 === (8))){
var inst_45668 = (state_45681[(9)]);
var inst_45671 = cljs.core.deref(inst_45668);
var state_45681__$1 = state_45681;
var statearr_45696_46984 = state_45681__$1;
(statearr_45696_46984[(2)] = inst_45671);

(statearr_45696_46984[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45080__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45080__auto____0 = (function (){
var statearr_45697 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45697[(0)] = cljs$core$async$reduce_$_state_machine__45080__auto__);

(statearr_45697[(1)] = (1));

return statearr_45697;
});
var cljs$core$async$reduce_$_state_machine__45080__auto____1 = (function (state_45681){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45681);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45698){var ex__45083__auto__ = e45698;
var statearr_45699_46985 = state_45681;
(statearr_45699_46985[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45681[(4)]))){
var statearr_45700_46986 = state_45681;
(statearr_45700_46986[(1)] = cljs.core.first((state_45681[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46987 = state_45681;
state_45681 = G__46987;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45080__auto__ = function(state_45681){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45080__auto____1.call(this,state_45681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45080__auto____0;
cljs$core$async$reduce_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45080__auto____1;
return cljs$core$async$reduce_$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45701 = f__45155__auto__();
(statearr_45701[(6)] = c__45154__auto__);

return statearr_45701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));

return c__45154__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45154__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45707){
var state_val_45708 = (state_45707[(1)]);
if((state_val_45708 === (1))){
var inst_45702 = cljs.core.async.reduce(f__$1,init,ch);
var state_45707__$1 = state_45707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45707__$1,(2),inst_45702);
} else {
if((state_val_45708 === (2))){
var inst_45704 = (state_45707[(2)]);
var inst_45705 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45704) : f__$1.call(null,inst_45704));
var state_45707__$1 = state_45707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45707__$1,inst_45705);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45080__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45080__auto____0 = (function (){
var statearr_45709 = [null,null,null,null,null,null,null];
(statearr_45709[(0)] = cljs$core$async$transduce_$_state_machine__45080__auto__);

(statearr_45709[(1)] = (1));

return statearr_45709;
});
var cljs$core$async$transduce_$_state_machine__45080__auto____1 = (function (state_45707){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45707);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45710){var ex__45083__auto__ = e45710;
var statearr_45711_46988 = state_45707;
(statearr_45711_46988[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45707[(4)]))){
var statearr_45712_46989 = state_45707;
(statearr_45712_46989[(1)] = cljs.core.first((state_45707[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46990 = state_45707;
state_45707 = G__46990;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45080__auto__ = function(state_45707){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45080__auto____1.call(this,state_45707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45080__auto____0;
cljs$core$async$transduce_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45080__auto____1;
return cljs$core$async$transduce_$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45713 = f__45155__auto__();
(statearr_45713[(6)] = c__45154__auto__);

return statearr_45713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));

return c__45154__auto__;
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
var G__45715 = arguments.length;
switch (G__45715) {
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
var c__45154__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45740){
var state_val_45741 = (state_45740[(1)]);
if((state_val_45741 === (7))){
var inst_45722 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45742_46992 = state_45740__$1;
(statearr_45742_46992[(2)] = inst_45722);

(statearr_45742_46992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (1))){
var inst_45716 = cljs.core.seq(coll);
var inst_45717 = inst_45716;
var state_45740__$1 = (function (){var statearr_45743 = state_45740;
(statearr_45743[(7)] = inst_45717);

return statearr_45743;
})();
var statearr_45744_46993 = state_45740__$1;
(statearr_45744_46993[(2)] = null);

(statearr_45744_46993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (4))){
var inst_45717 = (state_45740[(7)]);
var inst_45720 = cljs.core.first(inst_45717);
var state_45740__$1 = state_45740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45740__$1,(7),ch,inst_45720);
} else {
if((state_val_45741 === (13))){
var inst_45734 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45745_46994 = state_45740__$1;
(statearr_45745_46994[(2)] = inst_45734);

(statearr_45745_46994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (6))){
var inst_45725 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
if(cljs.core.truth_(inst_45725)){
var statearr_45746_46995 = state_45740__$1;
(statearr_45746_46995[(1)] = (8));

} else {
var statearr_45747_46996 = state_45740__$1;
(statearr_45747_46996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (3))){
var inst_45738 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45740__$1,inst_45738);
} else {
if((state_val_45741 === (12))){
var state_45740__$1 = state_45740;
var statearr_45748_46997 = state_45740__$1;
(statearr_45748_46997[(2)] = null);

(statearr_45748_46997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (2))){
var inst_45717 = (state_45740[(7)]);
var state_45740__$1 = state_45740;
if(cljs.core.truth_(inst_45717)){
var statearr_45749_46998 = state_45740__$1;
(statearr_45749_46998[(1)] = (4));

} else {
var statearr_45750_46999 = state_45740__$1;
(statearr_45750_46999[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (11))){
var inst_45731 = cljs.core.async.close_BANG_(ch);
var state_45740__$1 = state_45740;
var statearr_45751_47000 = state_45740__$1;
(statearr_45751_47000[(2)] = inst_45731);

(statearr_45751_47000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (9))){
var state_45740__$1 = state_45740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45752_47001 = state_45740__$1;
(statearr_45752_47001[(1)] = (11));

} else {
var statearr_45753_47002 = state_45740__$1;
(statearr_45753_47002[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (5))){
var inst_45717 = (state_45740[(7)]);
var state_45740__$1 = state_45740;
var statearr_45754_47003 = state_45740__$1;
(statearr_45754_47003[(2)] = inst_45717);

(statearr_45754_47003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (10))){
var inst_45736 = (state_45740[(2)]);
var state_45740__$1 = state_45740;
var statearr_45755_47004 = state_45740__$1;
(statearr_45755_47004[(2)] = inst_45736);

(statearr_45755_47004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45741 === (8))){
var inst_45717 = (state_45740[(7)]);
var inst_45727 = cljs.core.next(inst_45717);
var inst_45717__$1 = inst_45727;
var state_45740__$1 = (function (){var statearr_45756 = state_45740;
(statearr_45756[(7)] = inst_45717__$1);

return statearr_45756;
})();
var statearr_45757_47005 = state_45740__$1;
(statearr_45757_47005[(2)] = null);

(statearr_45757_47005[(1)] = (2));


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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_45758 = [null,null,null,null,null,null,null,null];
(statearr_45758[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_45758[(1)] = (1));

return statearr_45758;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_45740){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45740);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45759){var ex__45083__auto__ = e45759;
var statearr_45760_47006 = state_45740;
(statearr_45760_47006[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45740[(4)]))){
var statearr_45761_47007 = state_45740;
(statearr_45761_47007[(1)] = cljs.core.first((state_45740[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47008 = state_45740;
state_45740 = G__47008;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_45740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_45740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45762 = f__45155__auto__();
(statearr_45762[(6)] = c__45154__auto__);

return statearr_45762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));

return c__45154__auto__;
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
var G__45764 = arguments.length;
switch (G__45764) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_47010 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_47010(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47012 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_47012(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47013 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_47013(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47014 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_47014(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45765 = (function (ch,cs,meta45766){
this.ch = ch;
this.cs = cs;
this.meta45766 = meta45766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45767,meta45766__$1){
var self__ = this;
var _45767__$1 = this;
return (new cljs.core.async.t_cljs$core$async45765(self__.ch,self__.cs,meta45766__$1));
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45767){
var self__ = this;
var _45767__$1 = this;
return self__.meta45766;
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45765.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45766","meta45766",-1003005709,null)], null);
}));

(cljs.core.async.t_cljs$core$async45765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45765");

(cljs.core.async.t_cljs$core$async45765.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45765.
 */
cljs.core.async.__GT_t_cljs$core$async45765 = (function cljs$core$async$__GT_t_cljs$core$async45765(ch,cs,meta45766){
return (new cljs.core.async.t_cljs$core$async45765(ch,cs,meta45766));
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
var m = (new cljs.core.async.t_cljs$core$async45765(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45154__auto___47016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_45900){
var state_val_45901 = (state_45900[(1)]);
if((state_val_45901 === (7))){
var inst_45896 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45902_47017 = state_45900__$1;
(statearr_45902_47017[(2)] = inst_45896);

(statearr_45902_47017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (20))){
var inst_45801 = (state_45900[(7)]);
var inst_45813 = cljs.core.first(inst_45801);
var inst_45814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45813,(0),null);
var inst_45815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45813,(1),null);
var state_45900__$1 = (function (){var statearr_45903 = state_45900;
(statearr_45903[(8)] = inst_45814);

return statearr_45903;
})();
if(cljs.core.truth_(inst_45815)){
var statearr_45904_47018 = state_45900__$1;
(statearr_45904_47018[(1)] = (22));

} else {
var statearr_45905_47019 = state_45900__$1;
(statearr_45905_47019[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (27))){
var inst_45843 = (state_45900[(9)]);
var inst_45845 = (state_45900[(10)]);
var inst_45850 = (state_45900[(11)]);
var inst_45770 = (state_45900[(12)]);
var inst_45850__$1 = cljs.core._nth(inst_45843,inst_45845);
var inst_45851 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45850__$1,inst_45770,done);
var state_45900__$1 = (function (){var statearr_45906 = state_45900;
(statearr_45906[(11)] = inst_45850__$1);

return statearr_45906;
})();
if(cljs.core.truth_(inst_45851)){
var statearr_45907_47020 = state_45900__$1;
(statearr_45907_47020[(1)] = (30));

} else {
var statearr_45908_47021 = state_45900__$1;
(statearr_45908_47021[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (1))){
var state_45900__$1 = state_45900;
var statearr_45909_47022 = state_45900__$1;
(statearr_45909_47022[(2)] = null);

(statearr_45909_47022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (24))){
var inst_45801 = (state_45900[(7)]);
var inst_45820 = (state_45900[(2)]);
var inst_45821 = cljs.core.next(inst_45801);
var inst_45779 = inst_45821;
var inst_45780 = null;
var inst_45781 = (0);
var inst_45782 = (0);
var state_45900__$1 = (function (){var statearr_45910 = state_45900;
(statearr_45910[(13)] = inst_45820);

(statearr_45910[(14)] = inst_45779);

(statearr_45910[(15)] = inst_45780);

(statearr_45910[(16)] = inst_45781);

(statearr_45910[(17)] = inst_45782);

return statearr_45910;
})();
var statearr_45911_47027 = state_45900__$1;
(statearr_45911_47027[(2)] = null);

(statearr_45911_47027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (39))){
var state_45900__$1 = state_45900;
var statearr_45915_47028 = state_45900__$1;
(statearr_45915_47028[(2)] = null);

(statearr_45915_47028[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (4))){
var inst_45770 = (state_45900[(12)]);
var inst_45770__$1 = (state_45900[(2)]);
var inst_45771 = (inst_45770__$1 == null);
var state_45900__$1 = (function (){var statearr_45916 = state_45900;
(statearr_45916[(12)] = inst_45770__$1);

return statearr_45916;
})();
if(cljs.core.truth_(inst_45771)){
var statearr_45917_47029 = state_45900__$1;
(statearr_45917_47029[(1)] = (5));

} else {
var statearr_45918_47030 = state_45900__$1;
(statearr_45918_47030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (15))){
var inst_45782 = (state_45900[(17)]);
var inst_45779 = (state_45900[(14)]);
var inst_45780 = (state_45900[(15)]);
var inst_45781 = (state_45900[(16)]);
var inst_45797 = (state_45900[(2)]);
var inst_45798 = (inst_45782 + (1));
var tmp45912 = inst_45779;
var tmp45913 = inst_45780;
var tmp45914 = inst_45781;
var inst_45779__$1 = tmp45912;
var inst_45780__$1 = tmp45913;
var inst_45781__$1 = tmp45914;
var inst_45782__$1 = inst_45798;
var state_45900__$1 = (function (){var statearr_45919 = state_45900;
(statearr_45919[(18)] = inst_45797);

(statearr_45919[(14)] = inst_45779__$1);

(statearr_45919[(15)] = inst_45780__$1);

(statearr_45919[(16)] = inst_45781__$1);

(statearr_45919[(17)] = inst_45782__$1);

return statearr_45919;
})();
var statearr_45920_47035 = state_45900__$1;
(statearr_45920_47035[(2)] = null);

(statearr_45920_47035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (21))){
var inst_45824 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45924_47037 = state_45900__$1;
(statearr_45924_47037[(2)] = inst_45824);

(statearr_45924_47037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (31))){
var inst_45850 = (state_45900[(11)]);
var inst_45854 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45850);
var state_45900__$1 = state_45900;
var statearr_45925_47041 = state_45900__$1;
(statearr_45925_47041[(2)] = inst_45854);

(statearr_45925_47041[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (32))){
var inst_45845 = (state_45900[(10)]);
var inst_45842 = (state_45900[(19)]);
var inst_45843 = (state_45900[(9)]);
var inst_45844 = (state_45900[(20)]);
var inst_45856 = (state_45900[(2)]);
var inst_45857 = (inst_45845 + (1));
var tmp45921 = inst_45843;
var tmp45922 = inst_45844;
var tmp45923 = inst_45842;
var inst_45842__$1 = tmp45923;
var inst_45843__$1 = tmp45921;
var inst_45844__$1 = tmp45922;
var inst_45845__$1 = inst_45857;
var state_45900__$1 = (function (){var statearr_45926 = state_45900;
(statearr_45926[(21)] = inst_45856);

(statearr_45926[(19)] = inst_45842__$1);

(statearr_45926[(9)] = inst_45843__$1);

(statearr_45926[(20)] = inst_45844__$1);

(statearr_45926[(10)] = inst_45845__$1);

return statearr_45926;
})();
var statearr_45927_47042 = state_45900__$1;
(statearr_45927_47042[(2)] = null);

(statearr_45927_47042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (40))){
var inst_45869 = (state_45900[(22)]);
var inst_45873 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45869);
var state_45900__$1 = state_45900;
var statearr_45928_47043 = state_45900__$1;
(statearr_45928_47043[(2)] = inst_45873);

(statearr_45928_47043[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (33))){
var inst_45860 = (state_45900[(23)]);
var inst_45862 = cljs.core.chunked_seq_QMARK_(inst_45860);
var state_45900__$1 = state_45900;
if(inst_45862){
var statearr_45929_47044 = state_45900__$1;
(statearr_45929_47044[(1)] = (36));

} else {
var statearr_45930_47045 = state_45900__$1;
(statearr_45930_47045[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (13))){
var inst_45791 = (state_45900[(24)]);
var inst_45794 = cljs.core.async.close_BANG_(inst_45791);
var state_45900__$1 = state_45900;
var statearr_45931_47046 = state_45900__$1;
(statearr_45931_47046[(2)] = inst_45794);

(statearr_45931_47046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (22))){
var inst_45814 = (state_45900[(8)]);
var inst_45817 = cljs.core.async.close_BANG_(inst_45814);
var state_45900__$1 = state_45900;
var statearr_45932_47048 = state_45900__$1;
(statearr_45932_47048[(2)] = inst_45817);

(statearr_45932_47048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (36))){
var inst_45860 = (state_45900[(23)]);
var inst_45864 = cljs.core.chunk_first(inst_45860);
var inst_45865 = cljs.core.chunk_rest(inst_45860);
var inst_45866 = cljs.core.count(inst_45864);
var inst_45842 = inst_45865;
var inst_45843 = inst_45864;
var inst_45844 = inst_45866;
var inst_45845 = (0);
var state_45900__$1 = (function (){var statearr_45933 = state_45900;
(statearr_45933[(19)] = inst_45842);

(statearr_45933[(9)] = inst_45843);

(statearr_45933[(20)] = inst_45844);

(statearr_45933[(10)] = inst_45845);

return statearr_45933;
})();
var statearr_45934_47052 = state_45900__$1;
(statearr_45934_47052[(2)] = null);

(statearr_45934_47052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (41))){
var inst_45860 = (state_45900[(23)]);
var inst_45875 = (state_45900[(2)]);
var inst_45876 = cljs.core.next(inst_45860);
var inst_45842 = inst_45876;
var inst_45843 = null;
var inst_45844 = (0);
var inst_45845 = (0);
var state_45900__$1 = (function (){var statearr_45935 = state_45900;
(statearr_45935[(25)] = inst_45875);

(statearr_45935[(19)] = inst_45842);

(statearr_45935[(9)] = inst_45843);

(statearr_45935[(20)] = inst_45844);

(statearr_45935[(10)] = inst_45845);

return statearr_45935;
})();
var statearr_45936_47053 = state_45900__$1;
(statearr_45936_47053[(2)] = null);

(statearr_45936_47053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (43))){
var state_45900__$1 = state_45900;
var statearr_45937_47054 = state_45900__$1;
(statearr_45937_47054[(2)] = null);

(statearr_45937_47054[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (29))){
var inst_45884 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45938_47056 = state_45900__$1;
(statearr_45938_47056[(2)] = inst_45884);

(statearr_45938_47056[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (44))){
var inst_45893 = (state_45900[(2)]);
var state_45900__$1 = (function (){var statearr_45939 = state_45900;
(statearr_45939[(26)] = inst_45893);

return statearr_45939;
})();
var statearr_45940_47060 = state_45900__$1;
(statearr_45940_47060[(2)] = null);

(statearr_45940_47060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (6))){
var inst_45834 = (state_45900[(27)]);
var inst_45833 = cljs.core.deref(cs);
var inst_45834__$1 = cljs.core.keys(inst_45833);
var inst_45835 = cljs.core.count(inst_45834__$1);
var inst_45836 = cljs.core.reset_BANG_(dctr,inst_45835);
var inst_45841 = cljs.core.seq(inst_45834__$1);
var inst_45842 = inst_45841;
var inst_45843 = null;
var inst_45844 = (0);
var inst_45845 = (0);
var state_45900__$1 = (function (){var statearr_45941 = state_45900;
(statearr_45941[(27)] = inst_45834__$1);

(statearr_45941[(28)] = inst_45836);

(statearr_45941[(19)] = inst_45842);

(statearr_45941[(9)] = inst_45843);

(statearr_45941[(20)] = inst_45844);

(statearr_45941[(10)] = inst_45845);

return statearr_45941;
})();
var statearr_45942_47061 = state_45900__$1;
(statearr_45942_47061[(2)] = null);

(statearr_45942_47061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (28))){
var inst_45842 = (state_45900[(19)]);
var inst_45860 = (state_45900[(23)]);
var inst_45860__$1 = cljs.core.seq(inst_45842);
var state_45900__$1 = (function (){var statearr_45943 = state_45900;
(statearr_45943[(23)] = inst_45860__$1);

return statearr_45943;
})();
if(inst_45860__$1){
var statearr_45944_47063 = state_45900__$1;
(statearr_45944_47063[(1)] = (33));

} else {
var statearr_45945_47064 = state_45900__$1;
(statearr_45945_47064[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (25))){
var inst_45845 = (state_45900[(10)]);
var inst_45844 = (state_45900[(20)]);
var inst_45847 = (inst_45845 < inst_45844);
var inst_45848 = inst_45847;
var state_45900__$1 = state_45900;
if(cljs.core.truth_(inst_45848)){
var statearr_45946_47065 = state_45900__$1;
(statearr_45946_47065[(1)] = (27));

} else {
var statearr_45947_47066 = state_45900__$1;
(statearr_45947_47066[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (34))){
var state_45900__$1 = state_45900;
var statearr_45948_47068 = state_45900__$1;
(statearr_45948_47068[(2)] = null);

(statearr_45948_47068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (17))){
var state_45900__$1 = state_45900;
var statearr_45949_47069 = state_45900__$1;
(statearr_45949_47069[(2)] = null);

(statearr_45949_47069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (3))){
var inst_45898 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45900__$1,inst_45898);
} else {
if((state_val_45901 === (12))){
var inst_45829 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45950_47074 = state_45900__$1;
(statearr_45950_47074[(2)] = inst_45829);

(statearr_45950_47074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (2))){
var state_45900__$1 = state_45900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45900__$1,(4),ch);
} else {
if((state_val_45901 === (23))){
var state_45900__$1 = state_45900;
var statearr_45951_47075 = state_45900__$1;
(statearr_45951_47075[(2)] = null);

(statearr_45951_47075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (35))){
var inst_45882 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45952_47076 = state_45900__$1;
(statearr_45952_47076[(2)] = inst_45882);

(statearr_45952_47076[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (19))){
var inst_45801 = (state_45900[(7)]);
var inst_45805 = cljs.core.chunk_first(inst_45801);
var inst_45806 = cljs.core.chunk_rest(inst_45801);
var inst_45807 = cljs.core.count(inst_45805);
var inst_45779 = inst_45806;
var inst_45780 = inst_45805;
var inst_45781 = inst_45807;
var inst_45782 = (0);
var state_45900__$1 = (function (){var statearr_45953 = state_45900;
(statearr_45953[(14)] = inst_45779);

(statearr_45953[(15)] = inst_45780);

(statearr_45953[(16)] = inst_45781);

(statearr_45953[(17)] = inst_45782);

return statearr_45953;
})();
var statearr_45954_47077 = state_45900__$1;
(statearr_45954_47077[(2)] = null);

(statearr_45954_47077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (11))){
var inst_45779 = (state_45900[(14)]);
var inst_45801 = (state_45900[(7)]);
var inst_45801__$1 = cljs.core.seq(inst_45779);
var state_45900__$1 = (function (){var statearr_45955 = state_45900;
(statearr_45955[(7)] = inst_45801__$1);

return statearr_45955;
})();
if(inst_45801__$1){
var statearr_45956_47078 = state_45900__$1;
(statearr_45956_47078[(1)] = (16));

} else {
var statearr_45957_47079 = state_45900__$1;
(statearr_45957_47079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (9))){
var inst_45831 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45958_47080 = state_45900__$1;
(statearr_45958_47080[(2)] = inst_45831);

(statearr_45958_47080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (5))){
var inst_45777 = cljs.core.deref(cs);
var inst_45778 = cljs.core.seq(inst_45777);
var inst_45779 = inst_45778;
var inst_45780 = null;
var inst_45781 = (0);
var inst_45782 = (0);
var state_45900__$1 = (function (){var statearr_45959 = state_45900;
(statearr_45959[(14)] = inst_45779);

(statearr_45959[(15)] = inst_45780);

(statearr_45959[(16)] = inst_45781);

(statearr_45959[(17)] = inst_45782);

return statearr_45959;
})();
var statearr_45960_47081 = state_45900__$1;
(statearr_45960_47081[(2)] = null);

(statearr_45960_47081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (14))){
var state_45900__$1 = state_45900;
var statearr_45961_47082 = state_45900__$1;
(statearr_45961_47082[(2)] = null);

(statearr_45961_47082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (45))){
var inst_45890 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45962_47083 = state_45900__$1;
(statearr_45962_47083[(2)] = inst_45890);

(statearr_45962_47083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (26))){
var inst_45834 = (state_45900[(27)]);
var inst_45886 = (state_45900[(2)]);
var inst_45887 = cljs.core.seq(inst_45834);
var state_45900__$1 = (function (){var statearr_45963 = state_45900;
(statearr_45963[(29)] = inst_45886);

return statearr_45963;
})();
if(inst_45887){
var statearr_45964_47084 = state_45900__$1;
(statearr_45964_47084[(1)] = (42));

} else {
var statearr_45965_47085 = state_45900__$1;
(statearr_45965_47085[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (16))){
var inst_45801 = (state_45900[(7)]);
var inst_45803 = cljs.core.chunked_seq_QMARK_(inst_45801);
var state_45900__$1 = state_45900;
if(inst_45803){
var statearr_45966_47086 = state_45900__$1;
(statearr_45966_47086[(1)] = (19));

} else {
var statearr_45967_47087 = state_45900__$1;
(statearr_45967_47087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (38))){
var inst_45879 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45968_47088 = state_45900__$1;
(statearr_45968_47088[(2)] = inst_45879);

(statearr_45968_47088[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (30))){
var state_45900__$1 = state_45900;
var statearr_45969_47089 = state_45900__$1;
(statearr_45969_47089[(2)] = null);

(statearr_45969_47089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (10))){
var inst_45780 = (state_45900[(15)]);
var inst_45782 = (state_45900[(17)]);
var inst_45790 = cljs.core._nth(inst_45780,inst_45782);
var inst_45791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45790,(0),null);
var inst_45792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45790,(1),null);
var state_45900__$1 = (function (){var statearr_45970 = state_45900;
(statearr_45970[(24)] = inst_45791);

return statearr_45970;
})();
if(cljs.core.truth_(inst_45792)){
var statearr_45971_47091 = state_45900__$1;
(statearr_45971_47091[(1)] = (13));

} else {
var statearr_45972_47092 = state_45900__$1;
(statearr_45972_47092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (18))){
var inst_45827 = (state_45900[(2)]);
var state_45900__$1 = state_45900;
var statearr_45973_47096 = state_45900__$1;
(statearr_45973_47096[(2)] = inst_45827);

(statearr_45973_47096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (42))){
var state_45900__$1 = state_45900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45900__$1,(45),dchan);
} else {
if((state_val_45901 === (37))){
var inst_45860 = (state_45900[(23)]);
var inst_45869 = (state_45900[(22)]);
var inst_45770 = (state_45900[(12)]);
var inst_45869__$1 = cljs.core.first(inst_45860);
var inst_45870 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45869__$1,inst_45770,done);
var state_45900__$1 = (function (){var statearr_45974 = state_45900;
(statearr_45974[(22)] = inst_45869__$1);

return statearr_45974;
})();
if(cljs.core.truth_(inst_45870)){
var statearr_45975_47097 = state_45900__$1;
(statearr_45975_47097[(1)] = (39));

} else {
var statearr_45976_47098 = state_45900__$1;
(statearr_45976_47098[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45901 === (8))){
var inst_45782 = (state_45900[(17)]);
var inst_45781 = (state_45900[(16)]);
var inst_45784 = (inst_45782 < inst_45781);
var inst_45785 = inst_45784;
var state_45900__$1 = state_45900;
if(cljs.core.truth_(inst_45785)){
var statearr_45977_47099 = state_45900__$1;
(statearr_45977_47099[(1)] = (10));

} else {
var statearr_45978_47100 = state_45900__$1;
(statearr_45978_47100[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45080__auto__ = null;
var cljs$core$async$mult_$_state_machine__45080__auto____0 = (function (){
var statearr_45979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45979[(0)] = cljs$core$async$mult_$_state_machine__45080__auto__);

(statearr_45979[(1)] = (1));

return statearr_45979;
});
var cljs$core$async$mult_$_state_machine__45080__auto____1 = (function (state_45900){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_45900);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e45980){var ex__45083__auto__ = e45980;
var statearr_45981_47105 = state_45900;
(statearr_45981_47105[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_45900[(4)]))){
var statearr_45982_47106 = state_45900;
(statearr_45982_47106[(1)] = cljs.core.first((state_45900[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47107 = state_45900;
state_45900 = G__47107;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45080__auto__ = function(state_45900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45080__auto____1.call(this,state_45900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45080__auto____0;
cljs$core$async$mult_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45080__auto____1;
return cljs$core$async$mult_$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_45983 = f__45155__auto__();
(statearr_45983[(6)] = c__45154__auto___47016);

return statearr_45983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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
var G__45985 = arguments.length;
switch (G__45985) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47113 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47113(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47114 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47114(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47115 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47115(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47116 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47116(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47121 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47121(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47125 = arguments.length;
var i__5750__auto___47126 = (0);
while(true){
if((i__5750__auto___47126 < len__5749__auto___47125)){
args__5755__auto__.push((arguments[i__5750__auto___47126]));

var G__47127 = (i__5750__auto___47126 + (1));
i__5750__auto___47126 = G__47127;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45990){
var map__45991 = p__45990;
var map__45991__$1 = cljs.core.__destructure_map(map__45991);
var opts = map__45991__$1;
var statearr_45992_47130 = state;
(statearr_45992_47130[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45993_47131 = state;
(statearr_45993_47131[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_45994_47132 = state;
(statearr_45994_47132[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45986){
var G__45987 = cljs.core.first(seq45986);
var seq45986__$1 = cljs.core.next(seq45986);
var G__45988 = cljs.core.first(seq45986__$1);
var seq45986__$2 = cljs.core.next(seq45986__$1);
var G__45989 = cljs.core.first(seq45986__$2);
var seq45986__$3 = cljs.core.next(seq45986__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45987,G__45988,G__45989,seq45986__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45995 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45996){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45996 = meta45996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45997,meta45996__$1){
var self__ = this;
var _45997__$1 = this;
return (new cljs.core.async.t_cljs$core$async45995(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45996__$1));
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45997){
var self__ = this;
var _45997__$1 = this;
return self__.meta45996;
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45995.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45996","meta45996",730849529,null)], null);
}));

(cljs.core.async.t_cljs$core$async45995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45995");

(cljs.core.async.t_cljs$core$async45995.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45995.
 */
cljs.core.async.__GT_t_cljs$core$async45995 = (function cljs$core$async$__GT_t_cljs$core$async45995(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45996){
return (new cljs.core.async.t_cljs$core$async45995(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45996));
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
var m = (new cljs.core.async.t_cljs$core$async45995(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__45154__auto___47148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46065){
var state_val_46066 = (state_46065[(1)]);
if((state_val_46066 === (7))){
var inst_46025 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
if(cljs.core.truth_(inst_46025)){
var statearr_46067_47149 = state_46065__$1;
(statearr_46067_47149[(1)] = (8));

} else {
var statearr_46068_47150 = state_46065__$1;
(statearr_46068_47150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (20))){
var inst_46018 = (state_46065[(7)]);
var state_46065__$1 = state_46065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46065__$1,(23),out,inst_46018);
} else {
if((state_val_46066 === (1))){
var inst_46001 = calc_state();
var inst_46002 = cljs.core.__destructure_map(inst_46001);
var inst_46003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46002,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46002,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46002,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46006 = inst_46001;
var state_46065__$1 = (function (){var statearr_46069 = state_46065;
(statearr_46069[(8)] = inst_46003);

(statearr_46069[(9)] = inst_46004);

(statearr_46069[(10)] = inst_46005);

(statearr_46069[(11)] = inst_46006);

return statearr_46069;
})();
var statearr_46070_47151 = state_46065__$1;
(statearr_46070_47151[(2)] = null);

(statearr_46070_47151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (24))){
var inst_46009 = (state_46065[(12)]);
var inst_46006 = inst_46009;
var state_46065__$1 = (function (){var statearr_46071 = state_46065;
(statearr_46071[(11)] = inst_46006);

return statearr_46071;
})();
var statearr_46072_47152 = state_46065__$1;
(statearr_46072_47152[(2)] = null);

(statearr_46072_47152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (4))){
var inst_46018 = (state_46065[(7)]);
var inst_46020 = (state_46065[(13)]);
var inst_46017 = (state_46065[(2)]);
var inst_46018__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46017,(0),null);
var inst_46019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46017,(1),null);
var inst_46020__$1 = (inst_46018__$1 == null);
var state_46065__$1 = (function (){var statearr_46073 = state_46065;
(statearr_46073[(7)] = inst_46018__$1);

(statearr_46073[(14)] = inst_46019);

(statearr_46073[(13)] = inst_46020__$1);

return statearr_46073;
})();
if(cljs.core.truth_(inst_46020__$1)){
var statearr_46074_47154 = state_46065__$1;
(statearr_46074_47154[(1)] = (5));

} else {
var statearr_46075_47155 = state_46065__$1;
(statearr_46075_47155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (15))){
var inst_46010 = (state_46065[(15)]);
var inst_46039 = (state_46065[(16)]);
var inst_46039__$1 = cljs.core.empty_QMARK_(inst_46010);
var state_46065__$1 = (function (){var statearr_46076 = state_46065;
(statearr_46076[(16)] = inst_46039__$1);

return statearr_46076;
})();
if(inst_46039__$1){
var statearr_46077_47159 = state_46065__$1;
(statearr_46077_47159[(1)] = (17));

} else {
var statearr_46078_47160 = state_46065__$1;
(statearr_46078_47160[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (21))){
var inst_46009 = (state_46065[(12)]);
var inst_46006 = inst_46009;
var state_46065__$1 = (function (){var statearr_46079 = state_46065;
(statearr_46079[(11)] = inst_46006);

return statearr_46079;
})();
var statearr_46080_47161 = state_46065__$1;
(statearr_46080_47161[(2)] = null);

(statearr_46080_47161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (13))){
var inst_46032 = (state_46065[(2)]);
var inst_46033 = calc_state();
var inst_46006 = inst_46033;
var state_46065__$1 = (function (){var statearr_46081 = state_46065;
(statearr_46081[(17)] = inst_46032);

(statearr_46081[(11)] = inst_46006);

return statearr_46081;
})();
var statearr_46082_47163 = state_46065__$1;
(statearr_46082_47163[(2)] = null);

(statearr_46082_47163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (22))){
var inst_46059 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
var statearr_46083_47164 = state_46065__$1;
(statearr_46083_47164[(2)] = inst_46059);

(statearr_46083_47164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (6))){
var inst_46019 = (state_46065[(14)]);
var inst_46023 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46019,change);
var state_46065__$1 = state_46065;
var statearr_46084_47165 = state_46065__$1;
(statearr_46084_47165[(2)] = inst_46023);

(statearr_46084_47165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (25))){
var state_46065__$1 = state_46065;
var statearr_46085_47166 = state_46065__$1;
(statearr_46085_47166[(2)] = null);

(statearr_46085_47166[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (17))){
var inst_46011 = (state_46065[(18)]);
var inst_46019 = (state_46065[(14)]);
var inst_46041 = (inst_46011.cljs$core$IFn$_invoke$arity$1 ? inst_46011.cljs$core$IFn$_invoke$arity$1(inst_46019) : inst_46011.call(null,inst_46019));
var inst_46042 = cljs.core.not(inst_46041);
var state_46065__$1 = state_46065;
var statearr_46086_47168 = state_46065__$1;
(statearr_46086_47168[(2)] = inst_46042);

(statearr_46086_47168[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (3))){
var inst_46063 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46065__$1,inst_46063);
} else {
if((state_val_46066 === (12))){
var state_46065__$1 = state_46065;
var statearr_46087_47169 = state_46065__$1;
(statearr_46087_47169[(2)] = null);

(statearr_46087_47169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (2))){
var inst_46006 = (state_46065[(11)]);
var inst_46009 = (state_46065[(12)]);
var inst_46009__$1 = cljs.core.__destructure_map(inst_46006);
var inst_46010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46009__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46009__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46009__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46065__$1 = (function (){var statearr_46088 = state_46065;
(statearr_46088[(12)] = inst_46009__$1);

(statearr_46088[(15)] = inst_46010);

(statearr_46088[(18)] = inst_46011);

return statearr_46088;
})();
return cljs.core.async.ioc_alts_BANG_(state_46065__$1,(4),inst_46012);
} else {
if((state_val_46066 === (23))){
var inst_46050 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
if(cljs.core.truth_(inst_46050)){
var statearr_46089_47170 = state_46065__$1;
(statearr_46089_47170[(1)] = (24));

} else {
var statearr_46090_47171 = state_46065__$1;
(statearr_46090_47171[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (19))){
var inst_46045 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
var statearr_46091_47172 = state_46065__$1;
(statearr_46091_47172[(2)] = inst_46045);

(statearr_46091_47172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (11))){
var inst_46019 = (state_46065[(14)]);
var inst_46029 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46019);
var state_46065__$1 = state_46065;
var statearr_46092_47173 = state_46065__$1;
(statearr_46092_47173[(2)] = inst_46029);

(statearr_46092_47173[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (9))){
var inst_46010 = (state_46065[(15)]);
var inst_46019 = (state_46065[(14)]);
var inst_46036 = (state_46065[(19)]);
var inst_46036__$1 = (inst_46010.cljs$core$IFn$_invoke$arity$1 ? inst_46010.cljs$core$IFn$_invoke$arity$1(inst_46019) : inst_46010.call(null,inst_46019));
var state_46065__$1 = (function (){var statearr_46093 = state_46065;
(statearr_46093[(19)] = inst_46036__$1);

return statearr_46093;
})();
if(cljs.core.truth_(inst_46036__$1)){
var statearr_46094_47174 = state_46065__$1;
(statearr_46094_47174[(1)] = (14));

} else {
var statearr_46095_47175 = state_46065__$1;
(statearr_46095_47175[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (5))){
var inst_46020 = (state_46065[(13)]);
var state_46065__$1 = state_46065;
var statearr_46096_47180 = state_46065__$1;
(statearr_46096_47180[(2)] = inst_46020);

(statearr_46096_47180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (14))){
var inst_46036 = (state_46065[(19)]);
var state_46065__$1 = state_46065;
var statearr_46097_47181 = state_46065__$1;
(statearr_46097_47181[(2)] = inst_46036);

(statearr_46097_47181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (26))){
var inst_46055 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
var statearr_46098_47182 = state_46065__$1;
(statearr_46098_47182[(2)] = inst_46055);

(statearr_46098_47182[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (16))){
var inst_46047 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
if(cljs.core.truth_(inst_46047)){
var statearr_46099_47183 = state_46065__$1;
(statearr_46099_47183[(1)] = (20));

} else {
var statearr_46100_47184 = state_46065__$1;
(statearr_46100_47184[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (10))){
var inst_46061 = (state_46065[(2)]);
var state_46065__$1 = state_46065;
var statearr_46101_47185 = state_46065__$1;
(statearr_46101_47185[(2)] = inst_46061);

(statearr_46101_47185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (18))){
var inst_46039 = (state_46065[(16)]);
var state_46065__$1 = state_46065;
var statearr_46102_47186 = state_46065__$1;
(statearr_46102_47186[(2)] = inst_46039);

(statearr_46102_47186[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46066 === (8))){
var inst_46018 = (state_46065[(7)]);
var inst_46027 = (inst_46018 == null);
var state_46065__$1 = state_46065;
if(cljs.core.truth_(inst_46027)){
var statearr_46103_47187 = state_46065__$1;
(statearr_46103_47187[(1)] = (11));

} else {
var statearr_46104_47188 = state_46065__$1;
(statearr_46104_47188[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__45080__auto__ = null;
var cljs$core$async$mix_$_state_machine__45080__auto____0 = (function (){
var statearr_46105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46105[(0)] = cljs$core$async$mix_$_state_machine__45080__auto__);

(statearr_46105[(1)] = (1));

return statearr_46105;
});
var cljs$core$async$mix_$_state_machine__45080__auto____1 = (function (state_46065){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46065);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46106){var ex__45083__auto__ = e46106;
var statearr_46107_47189 = state_46065;
(statearr_46107_47189[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46065[(4)]))){
var statearr_46108_47190 = state_46065;
(statearr_46108_47190[(1)] = cljs.core.first((state_46065[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47191 = state_46065;
state_46065 = G__47191;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45080__auto__ = function(state_46065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45080__auto____1.call(this,state_46065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45080__auto____0;
cljs$core$async$mix_$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45080__auto____1;
return cljs$core$async$mix_$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46109 = f__45155__auto__();
(statearr_46109[(6)] = c__45154__auto___47148);

return statearr_46109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47192 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_47192(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47193 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_47193(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47194 = (function() {
var G__47195 = null;
var G__47195__1 = (function (p){
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
var G__47195__2 = (function (p,v){
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
G__47195 = function(p,v){
switch(arguments.length){
case 1:
return G__47195__1.call(this,p);
case 2:
return G__47195__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47195.cljs$core$IFn$_invoke$arity$1 = G__47195__1;
G__47195.cljs$core$IFn$_invoke$arity$2 = G__47195__2;
return G__47195;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46111 = arguments.length;
switch (G__46111) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47194(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47194(p,v);
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
cljs.core.async.t_cljs$core$async46115 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46116){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46116 = meta46116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46117,meta46116__$1){
var self__ = this;
var _46117__$1 = this;
return (new cljs.core.async.t_cljs$core$async46115(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46116__$1));
}));

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46117){
var self__ = this;
var _46117__$1 = this;
return self__.meta46116;
}));

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46116","meta46116",708279236,null)], null);
}));

(cljs.core.async.t_cljs$core$async46115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46115");

(cljs.core.async.t_cljs$core$async46115.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46115.
 */
cljs.core.async.__GT_t_cljs$core$async46115 = (function cljs$core$async$__GT_t_cljs$core$async46115(ch,topic_fn,buf_fn,mults,ensure_mult,meta46116){
return (new cljs.core.async.t_cljs$core$async46115(ch,topic_fn,buf_fn,mults,ensure_mult,meta46116));
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
var G__46114 = arguments.length;
switch (G__46114) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46112_SHARP_){
if(cljs.core.truth_((p1__46112_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46112_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46112_SHARP_.call(null,topic)))){
return p1__46112_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46112_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async46115(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__45154__auto___47201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46189){
var state_val_46190 = (state_46189[(1)]);
if((state_val_46190 === (7))){
var inst_46185 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
var statearr_46191_47202 = state_46189__$1;
(statearr_46191_47202[(2)] = inst_46185);

(statearr_46191_47202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (20))){
var state_46189__$1 = state_46189;
var statearr_46192_47203 = state_46189__$1;
(statearr_46192_47203[(2)] = null);

(statearr_46192_47203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (1))){
var state_46189__$1 = state_46189;
var statearr_46193_47204 = state_46189__$1;
(statearr_46193_47204[(2)] = null);

(statearr_46193_47204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (24))){
var inst_46168 = (state_46189[(7)]);
var inst_46177 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46168);
var state_46189__$1 = state_46189;
var statearr_46194_47205 = state_46189__$1;
(statearr_46194_47205[(2)] = inst_46177);

(statearr_46194_47205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (4))){
var inst_46120 = (state_46189[(8)]);
var inst_46120__$1 = (state_46189[(2)]);
var inst_46121 = (inst_46120__$1 == null);
var state_46189__$1 = (function (){var statearr_46195 = state_46189;
(statearr_46195[(8)] = inst_46120__$1);

return statearr_46195;
})();
if(cljs.core.truth_(inst_46121)){
var statearr_46196_47206 = state_46189__$1;
(statearr_46196_47206[(1)] = (5));

} else {
var statearr_46197_47207 = state_46189__$1;
(statearr_46197_47207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (15))){
var inst_46162 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
var statearr_46198_47208 = state_46189__$1;
(statearr_46198_47208[(2)] = inst_46162);

(statearr_46198_47208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (21))){
var inst_46182 = (state_46189[(2)]);
var state_46189__$1 = (function (){var statearr_46199 = state_46189;
(statearr_46199[(9)] = inst_46182);

return statearr_46199;
})();
var statearr_46200_47209 = state_46189__$1;
(statearr_46200_47209[(2)] = null);

(statearr_46200_47209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (13))){
var inst_46144 = (state_46189[(10)]);
var inst_46146 = cljs.core.chunked_seq_QMARK_(inst_46144);
var state_46189__$1 = state_46189;
if(inst_46146){
var statearr_46201_47210 = state_46189__$1;
(statearr_46201_47210[(1)] = (16));

} else {
var statearr_46202_47211 = state_46189__$1;
(statearr_46202_47211[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (22))){
var inst_46174 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
if(cljs.core.truth_(inst_46174)){
var statearr_46203_47212 = state_46189__$1;
(statearr_46203_47212[(1)] = (23));

} else {
var statearr_46204_47213 = state_46189__$1;
(statearr_46204_47213[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (6))){
var inst_46120 = (state_46189[(8)]);
var inst_46168 = (state_46189[(7)]);
var inst_46170 = (state_46189[(11)]);
var inst_46168__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46120) : topic_fn.call(null,inst_46120));
var inst_46169 = cljs.core.deref(mults);
var inst_46170__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46169,inst_46168__$1);
var state_46189__$1 = (function (){var statearr_46205 = state_46189;
(statearr_46205[(7)] = inst_46168__$1);

(statearr_46205[(11)] = inst_46170__$1);

return statearr_46205;
})();
if(cljs.core.truth_(inst_46170__$1)){
var statearr_46206_47214 = state_46189__$1;
(statearr_46206_47214[(1)] = (19));

} else {
var statearr_46207_47215 = state_46189__$1;
(statearr_46207_47215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (25))){
var inst_46179 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
var statearr_46208_47216 = state_46189__$1;
(statearr_46208_47216[(2)] = inst_46179);

(statearr_46208_47216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (17))){
var inst_46144 = (state_46189[(10)]);
var inst_46153 = cljs.core.first(inst_46144);
var inst_46154 = cljs.core.async.muxch_STAR_(inst_46153);
var inst_46155 = cljs.core.async.close_BANG_(inst_46154);
var inst_46156 = cljs.core.next(inst_46144);
var inst_46130 = inst_46156;
var inst_46131 = null;
var inst_46132 = (0);
var inst_46133 = (0);
var state_46189__$1 = (function (){var statearr_46209 = state_46189;
(statearr_46209[(12)] = inst_46155);

(statearr_46209[(13)] = inst_46130);

(statearr_46209[(14)] = inst_46131);

(statearr_46209[(15)] = inst_46132);

(statearr_46209[(16)] = inst_46133);

return statearr_46209;
})();
var statearr_46210_47217 = state_46189__$1;
(statearr_46210_47217[(2)] = null);

(statearr_46210_47217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (3))){
var inst_46187 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46189__$1,inst_46187);
} else {
if((state_val_46190 === (12))){
var inst_46164 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
var statearr_46211_47222 = state_46189__$1;
(statearr_46211_47222[(2)] = inst_46164);

(statearr_46211_47222[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (2))){
var state_46189__$1 = state_46189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46189__$1,(4),ch);
} else {
if((state_val_46190 === (23))){
var state_46189__$1 = state_46189;
var statearr_46212_47223 = state_46189__$1;
(statearr_46212_47223[(2)] = null);

(statearr_46212_47223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (19))){
var inst_46170 = (state_46189[(11)]);
var inst_46120 = (state_46189[(8)]);
var inst_46172 = cljs.core.async.muxch_STAR_(inst_46170);
var state_46189__$1 = state_46189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46189__$1,(22),inst_46172,inst_46120);
} else {
if((state_val_46190 === (11))){
var inst_46130 = (state_46189[(13)]);
var inst_46144 = (state_46189[(10)]);
var inst_46144__$1 = cljs.core.seq(inst_46130);
var state_46189__$1 = (function (){var statearr_46213 = state_46189;
(statearr_46213[(10)] = inst_46144__$1);

return statearr_46213;
})();
if(inst_46144__$1){
var statearr_46214_47224 = state_46189__$1;
(statearr_46214_47224[(1)] = (13));

} else {
var statearr_46215_47225 = state_46189__$1;
(statearr_46215_47225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (9))){
var inst_46166 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
var statearr_46216_47226 = state_46189__$1;
(statearr_46216_47226[(2)] = inst_46166);

(statearr_46216_47226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (5))){
var inst_46127 = cljs.core.deref(mults);
var inst_46128 = cljs.core.vals(inst_46127);
var inst_46129 = cljs.core.seq(inst_46128);
var inst_46130 = inst_46129;
var inst_46131 = null;
var inst_46132 = (0);
var inst_46133 = (0);
var state_46189__$1 = (function (){var statearr_46217 = state_46189;
(statearr_46217[(13)] = inst_46130);

(statearr_46217[(14)] = inst_46131);

(statearr_46217[(15)] = inst_46132);

(statearr_46217[(16)] = inst_46133);

return statearr_46217;
})();
var statearr_46218_47227 = state_46189__$1;
(statearr_46218_47227[(2)] = null);

(statearr_46218_47227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (14))){
var state_46189__$1 = state_46189;
var statearr_46222_47228 = state_46189__$1;
(statearr_46222_47228[(2)] = null);

(statearr_46222_47228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (16))){
var inst_46144 = (state_46189[(10)]);
var inst_46148 = cljs.core.chunk_first(inst_46144);
var inst_46149 = cljs.core.chunk_rest(inst_46144);
var inst_46150 = cljs.core.count(inst_46148);
var inst_46130 = inst_46149;
var inst_46131 = inst_46148;
var inst_46132 = inst_46150;
var inst_46133 = (0);
var state_46189__$1 = (function (){var statearr_46223 = state_46189;
(statearr_46223[(13)] = inst_46130);

(statearr_46223[(14)] = inst_46131);

(statearr_46223[(15)] = inst_46132);

(statearr_46223[(16)] = inst_46133);

return statearr_46223;
})();
var statearr_46224_47229 = state_46189__$1;
(statearr_46224_47229[(2)] = null);

(statearr_46224_47229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (10))){
var inst_46131 = (state_46189[(14)]);
var inst_46133 = (state_46189[(16)]);
var inst_46130 = (state_46189[(13)]);
var inst_46132 = (state_46189[(15)]);
var inst_46138 = cljs.core._nth(inst_46131,inst_46133);
var inst_46139 = cljs.core.async.muxch_STAR_(inst_46138);
var inst_46140 = cljs.core.async.close_BANG_(inst_46139);
var inst_46141 = (inst_46133 + (1));
var tmp46219 = inst_46131;
var tmp46220 = inst_46130;
var tmp46221 = inst_46132;
var inst_46130__$1 = tmp46220;
var inst_46131__$1 = tmp46219;
var inst_46132__$1 = tmp46221;
var inst_46133__$1 = inst_46141;
var state_46189__$1 = (function (){var statearr_46225 = state_46189;
(statearr_46225[(17)] = inst_46140);

(statearr_46225[(13)] = inst_46130__$1);

(statearr_46225[(14)] = inst_46131__$1);

(statearr_46225[(15)] = inst_46132__$1);

(statearr_46225[(16)] = inst_46133__$1);

return statearr_46225;
})();
var statearr_46226_47230 = state_46189__$1;
(statearr_46226_47230[(2)] = null);

(statearr_46226_47230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (18))){
var inst_46159 = (state_46189[(2)]);
var state_46189__$1 = state_46189;
var statearr_46227_47231 = state_46189__$1;
(statearr_46227_47231[(2)] = inst_46159);

(statearr_46227_47231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46190 === (8))){
var inst_46133 = (state_46189[(16)]);
var inst_46132 = (state_46189[(15)]);
var inst_46135 = (inst_46133 < inst_46132);
var inst_46136 = inst_46135;
var state_46189__$1 = state_46189;
if(cljs.core.truth_(inst_46136)){
var statearr_46228_47236 = state_46189__$1;
(statearr_46228_47236[(1)] = (10));

} else {
var statearr_46229_47237 = state_46189__$1;
(statearr_46229_47237[(1)] = (11));

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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46230[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46230[(1)] = (1));

return statearr_46230;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46189){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46189);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46231){var ex__45083__auto__ = e46231;
var statearr_46232_47238 = state_46189;
(statearr_46232_47238[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46189[(4)]))){
var statearr_46233_47239 = state_46189;
(statearr_46233_47239[(1)] = cljs.core.first((state_46189[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47240 = state_46189;
state_46189 = G__47240;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46234 = f__45155__auto__();
(statearr_46234[(6)] = c__45154__auto___47201);

return statearr_46234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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
var G__46236 = arguments.length;
switch (G__46236) {
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
var G__46238 = arguments.length;
switch (G__46238) {
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
var G__46240 = arguments.length;
switch (G__46240) {
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
var c__45154__auto___47245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46283){
var state_val_46284 = (state_46283[(1)]);
if((state_val_46284 === (7))){
var state_46283__$1 = state_46283;
var statearr_46285_47246 = state_46283__$1;
(statearr_46285_47246[(2)] = null);

(statearr_46285_47246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (1))){
var state_46283__$1 = state_46283;
var statearr_46286_47247 = state_46283__$1;
(statearr_46286_47247[(2)] = null);

(statearr_46286_47247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (4))){
var inst_46244 = (state_46283[(7)]);
var inst_46243 = (state_46283[(8)]);
var inst_46246 = (inst_46244 < inst_46243);
var state_46283__$1 = state_46283;
if(cljs.core.truth_(inst_46246)){
var statearr_46287_47248 = state_46283__$1;
(statearr_46287_47248[(1)] = (6));

} else {
var statearr_46288_47249 = state_46283__$1;
(statearr_46288_47249[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (15))){
var inst_46269 = (state_46283[(9)]);
var inst_46274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46269);
var state_46283__$1 = state_46283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46283__$1,(17),out,inst_46274);
} else {
if((state_val_46284 === (13))){
var inst_46269 = (state_46283[(9)]);
var inst_46269__$1 = (state_46283[(2)]);
var inst_46270 = cljs.core.some(cljs.core.nil_QMARK_,inst_46269__$1);
var state_46283__$1 = (function (){var statearr_46289 = state_46283;
(statearr_46289[(9)] = inst_46269__$1);

return statearr_46289;
})();
if(cljs.core.truth_(inst_46270)){
var statearr_46290_47251 = state_46283__$1;
(statearr_46290_47251[(1)] = (14));

} else {
var statearr_46291_47252 = state_46283__$1;
(statearr_46291_47252[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (6))){
var state_46283__$1 = state_46283;
var statearr_46292_47253 = state_46283__$1;
(statearr_46292_47253[(2)] = null);

(statearr_46292_47253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (17))){
var inst_46276 = (state_46283[(2)]);
var state_46283__$1 = (function (){var statearr_46294 = state_46283;
(statearr_46294[(10)] = inst_46276);

return statearr_46294;
})();
var statearr_46295_47254 = state_46283__$1;
(statearr_46295_47254[(2)] = null);

(statearr_46295_47254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (3))){
var inst_46281 = (state_46283[(2)]);
var state_46283__$1 = state_46283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46283__$1,inst_46281);
} else {
if((state_val_46284 === (12))){
var _ = (function (){var statearr_46296 = state_46283;
(statearr_46296[(4)] = cljs.core.rest((state_46283[(4)])));

return statearr_46296;
})();
var state_46283__$1 = state_46283;
var ex46293 = (state_46283__$1[(2)]);
var statearr_46297_47255 = state_46283__$1;
(statearr_46297_47255[(5)] = ex46293);


if((ex46293 instanceof Object)){
var statearr_46298_47256 = state_46283__$1;
(statearr_46298_47256[(1)] = (11));

(statearr_46298_47256[(5)] = null);

} else {
throw ex46293;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (2))){
var inst_46242 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46243 = cnt;
var inst_46244 = (0);
var state_46283__$1 = (function (){var statearr_46299 = state_46283;
(statearr_46299[(11)] = inst_46242);

(statearr_46299[(8)] = inst_46243);

(statearr_46299[(7)] = inst_46244);

return statearr_46299;
})();
var statearr_46300_47261 = state_46283__$1;
(statearr_46300_47261[(2)] = null);

(statearr_46300_47261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (11))){
var inst_46248 = (state_46283[(2)]);
var inst_46249 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46283__$1 = (function (){var statearr_46301 = state_46283;
(statearr_46301[(12)] = inst_46248);

return statearr_46301;
})();
var statearr_46302_47262 = state_46283__$1;
(statearr_46302_47262[(2)] = inst_46249);

(statearr_46302_47262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (9))){
var inst_46244 = (state_46283[(7)]);
var _ = (function (){var statearr_46303 = state_46283;
(statearr_46303[(4)] = cljs.core.cons((12),(state_46283[(4)])));

return statearr_46303;
})();
var inst_46255 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46244) : chs__$1.call(null,inst_46244));
var inst_46256 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46244) : done.call(null,inst_46244));
var inst_46257 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46255,inst_46256);
var ___$1 = (function (){var statearr_46304 = state_46283;
(statearr_46304[(4)] = cljs.core.rest((state_46283[(4)])));

return statearr_46304;
})();
var state_46283__$1 = state_46283;
var statearr_46305_47263 = state_46283__$1;
(statearr_46305_47263[(2)] = inst_46257);

(statearr_46305_47263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (5))){
var inst_46267 = (state_46283[(2)]);
var state_46283__$1 = (function (){var statearr_46306 = state_46283;
(statearr_46306[(13)] = inst_46267);

return statearr_46306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46283__$1,(13),dchan);
} else {
if((state_val_46284 === (14))){
var inst_46272 = cljs.core.async.close_BANG_(out);
var state_46283__$1 = state_46283;
var statearr_46307_47264 = state_46283__$1;
(statearr_46307_47264[(2)] = inst_46272);

(statearr_46307_47264[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (16))){
var inst_46279 = (state_46283[(2)]);
var state_46283__$1 = state_46283;
var statearr_46308_47265 = state_46283__$1;
(statearr_46308_47265[(2)] = inst_46279);

(statearr_46308_47265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (10))){
var inst_46244 = (state_46283[(7)]);
var inst_46260 = (state_46283[(2)]);
var inst_46261 = (inst_46244 + (1));
var inst_46244__$1 = inst_46261;
var state_46283__$1 = (function (){var statearr_46309 = state_46283;
(statearr_46309[(14)] = inst_46260);

(statearr_46309[(7)] = inst_46244__$1);

return statearr_46309;
})();
var statearr_46310_47266 = state_46283__$1;
(statearr_46310_47266[(2)] = null);

(statearr_46310_47266[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46284 === (8))){
var inst_46265 = (state_46283[(2)]);
var state_46283__$1 = state_46283;
var statearr_46311_47267 = state_46283__$1;
(statearr_46311_47267[(2)] = inst_46265);

(statearr_46311_47267[(1)] = (5));


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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46312[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46312[(1)] = (1));

return statearr_46312;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46283){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46283);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46313){var ex__45083__auto__ = e46313;
var statearr_46314_47268 = state_46283;
(statearr_46314_47268[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46283[(4)]))){
var statearr_46315_47269 = state_46283;
(statearr_46315_47269[(1)] = cljs.core.first((state_46283[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47270 = state_46283;
state_46283 = G__47270;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46316 = f__45155__auto__();
(statearr_46316[(6)] = c__45154__auto___47245);

return statearr_46316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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
var G__46319 = arguments.length;
switch (G__46319) {
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
var c__45154__auto___47272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46351){
var state_val_46352 = (state_46351[(1)]);
if((state_val_46352 === (7))){
var inst_46330 = (state_46351[(7)]);
var inst_46331 = (state_46351[(8)]);
var inst_46330__$1 = (state_46351[(2)]);
var inst_46331__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46330__$1,(0),null);
var inst_46332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46330__$1,(1),null);
var inst_46333 = (inst_46331__$1 == null);
var state_46351__$1 = (function (){var statearr_46353 = state_46351;
(statearr_46353[(7)] = inst_46330__$1);

(statearr_46353[(8)] = inst_46331__$1);

(statearr_46353[(9)] = inst_46332);

return statearr_46353;
})();
if(cljs.core.truth_(inst_46333)){
var statearr_46354_47273 = state_46351__$1;
(statearr_46354_47273[(1)] = (8));

} else {
var statearr_46355_47274 = state_46351__$1;
(statearr_46355_47274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (1))){
var inst_46320 = cljs.core.vec(chs);
var inst_46321 = inst_46320;
var state_46351__$1 = (function (){var statearr_46356 = state_46351;
(statearr_46356[(10)] = inst_46321);

return statearr_46356;
})();
var statearr_46357_47275 = state_46351__$1;
(statearr_46357_47275[(2)] = null);

(statearr_46357_47275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (4))){
var inst_46321 = (state_46351[(10)]);
var state_46351__$1 = state_46351;
return cljs.core.async.ioc_alts_BANG_(state_46351__$1,(7),inst_46321);
} else {
if((state_val_46352 === (6))){
var inst_46347 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
var statearr_46358_47276 = state_46351__$1;
(statearr_46358_47276[(2)] = inst_46347);

(statearr_46358_47276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (3))){
var inst_46349 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46351__$1,inst_46349);
} else {
if((state_val_46352 === (2))){
var inst_46321 = (state_46351[(10)]);
var inst_46323 = cljs.core.count(inst_46321);
var inst_46324 = (inst_46323 > (0));
var state_46351__$1 = state_46351;
if(cljs.core.truth_(inst_46324)){
var statearr_46360_47277 = state_46351__$1;
(statearr_46360_47277[(1)] = (4));

} else {
var statearr_46361_47278 = state_46351__$1;
(statearr_46361_47278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (11))){
var inst_46321 = (state_46351[(10)]);
var inst_46340 = (state_46351[(2)]);
var tmp46359 = inst_46321;
var inst_46321__$1 = tmp46359;
var state_46351__$1 = (function (){var statearr_46362 = state_46351;
(statearr_46362[(11)] = inst_46340);

(statearr_46362[(10)] = inst_46321__$1);

return statearr_46362;
})();
var statearr_46363_47280 = state_46351__$1;
(statearr_46363_47280[(2)] = null);

(statearr_46363_47280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (9))){
var inst_46331 = (state_46351[(8)]);
var state_46351__$1 = state_46351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46351__$1,(11),out,inst_46331);
} else {
if((state_val_46352 === (5))){
var inst_46345 = cljs.core.async.close_BANG_(out);
var state_46351__$1 = state_46351;
var statearr_46364_47281 = state_46351__$1;
(statearr_46364_47281[(2)] = inst_46345);

(statearr_46364_47281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (10))){
var inst_46343 = (state_46351[(2)]);
var state_46351__$1 = state_46351;
var statearr_46365_47282 = state_46351__$1;
(statearr_46365_47282[(2)] = inst_46343);

(statearr_46365_47282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46352 === (8))){
var inst_46321 = (state_46351[(10)]);
var inst_46330 = (state_46351[(7)]);
var inst_46331 = (state_46351[(8)]);
var inst_46332 = (state_46351[(9)]);
var inst_46335 = (function (){var cs = inst_46321;
var vec__46326 = inst_46330;
var v = inst_46331;
var c = inst_46332;
return (function (p1__46317_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46317_SHARP_);
});
})();
var inst_46336 = cljs.core.filterv(inst_46335,inst_46321);
var inst_46321__$1 = inst_46336;
var state_46351__$1 = (function (){var statearr_46366 = state_46351;
(statearr_46366[(10)] = inst_46321__$1);

return statearr_46366;
})();
var statearr_46367_47283 = state_46351__$1;
(statearr_46367_47283[(2)] = null);

(statearr_46367_47283[(1)] = (2));


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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46368 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46368[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46368[(1)] = (1));

return statearr_46368;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46351){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46351);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46369){var ex__45083__auto__ = e46369;
var statearr_46370_47285 = state_46351;
(statearr_46370_47285[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46351[(4)]))){
var statearr_46371_47287 = state_46351;
(statearr_46371_47287[(1)] = cljs.core.first((state_46351[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47289 = state_46351;
state_46351 = G__47289;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46372 = f__45155__auto__();
(statearr_46372[(6)] = c__45154__auto___47272);

return statearr_46372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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
var G__46374 = arguments.length;
switch (G__46374) {
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
var c__45154__auto___47294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46398){
var state_val_46399 = (state_46398[(1)]);
if((state_val_46399 === (7))){
var inst_46380 = (state_46398[(7)]);
var inst_46380__$1 = (state_46398[(2)]);
var inst_46381 = (inst_46380__$1 == null);
var inst_46382 = cljs.core.not(inst_46381);
var state_46398__$1 = (function (){var statearr_46400 = state_46398;
(statearr_46400[(7)] = inst_46380__$1);

return statearr_46400;
})();
if(inst_46382){
var statearr_46401_47295 = state_46398__$1;
(statearr_46401_47295[(1)] = (8));

} else {
var statearr_46402_47300 = state_46398__$1;
(statearr_46402_47300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (1))){
var inst_46375 = (0);
var state_46398__$1 = (function (){var statearr_46403 = state_46398;
(statearr_46403[(8)] = inst_46375);

return statearr_46403;
})();
var statearr_46404_47301 = state_46398__$1;
(statearr_46404_47301[(2)] = null);

(statearr_46404_47301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (4))){
var state_46398__$1 = state_46398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46398__$1,(7),ch);
} else {
if((state_val_46399 === (6))){
var inst_46393 = (state_46398[(2)]);
var state_46398__$1 = state_46398;
var statearr_46405_47302 = state_46398__$1;
(statearr_46405_47302[(2)] = inst_46393);

(statearr_46405_47302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (3))){
var inst_46395 = (state_46398[(2)]);
var inst_46396 = cljs.core.async.close_BANG_(out);
var state_46398__$1 = (function (){var statearr_46406 = state_46398;
(statearr_46406[(9)] = inst_46395);

return statearr_46406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46398__$1,inst_46396);
} else {
if((state_val_46399 === (2))){
var inst_46375 = (state_46398[(8)]);
var inst_46377 = (inst_46375 < n);
var state_46398__$1 = state_46398;
if(cljs.core.truth_(inst_46377)){
var statearr_46407_47303 = state_46398__$1;
(statearr_46407_47303[(1)] = (4));

} else {
var statearr_46408_47304 = state_46398__$1;
(statearr_46408_47304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (11))){
var inst_46375 = (state_46398[(8)]);
var inst_46385 = (state_46398[(2)]);
var inst_46386 = (inst_46375 + (1));
var inst_46375__$1 = inst_46386;
var state_46398__$1 = (function (){var statearr_46409 = state_46398;
(statearr_46409[(10)] = inst_46385);

(statearr_46409[(8)] = inst_46375__$1);

return statearr_46409;
})();
var statearr_46410_47305 = state_46398__$1;
(statearr_46410_47305[(2)] = null);

(statearr_46410_47305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (9))){
var state_46398__$1 = state_46398;
var statearr_46411_47306 = state_46398__$1;
(statearr_46411_47306[(2)] = null);

(statearr_46411_47306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (5))){
var state_46398__$1 = state_46398;
var statearr_46412_47307 = state_46398__$1;
(statearr_46412_47307[(2)] = null);

(statearr_46412_47307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (10))){
var inst_46390 = (state_46398[(2)]);
var state_46398__$1 = state_46398;
var statearr_46413_47308 = state_46398__$1;
(statearr_46413_47308[(2)] = inst_46390);

(statearr_46413_47308[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46399 === (8))){
var inst_46380 = (state_46398[(7)]);
var state_46398__$1 = state_46398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46398__$1,(11),out,inst_46380);
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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46414 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46414[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46414[(1)] = (1));

return statearr_46414;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46398){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46398);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46415){var ex__45083__auto__ = e46415;
var statearr_46416_47309 = state_46398;
(statearr_46416_47309[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46398[(4)]))){
var statearr_46417_47310 = state_46398;
(statearr_46417_47310[(1)] = cljs.core.first((state_46398[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47311 = state_46398;
state_46398 = G__47311;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46418 = f__45155__auto__();
(statearr_46418[(6)] = c__45154__auto___47294);

return statearr_46418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
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
cljs.core.async.t_cljs$core$async46423 = (function (f,ch,meta46421,_,fn1,meta46424){
this.f = f;
this.ch = ch;
this.meta46421 = meta46421;
this._ = _;
this.fn1 = fn1;
this.meta46424 = meta46424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46425,meta46424__$1){
var self__ = this;
var _46425__$1 = this;
return (new cljs.core.async.t_cljs$core$async46423(self__.f,self__.ch,self__.meta46421,self__._,self__.fn1,meta46424__$1));
}));

(cljs.core.async.t_cljs$core$async46423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46425){
var self__ = this;
var _46425__$1 = this;
return self__.meta46424;
}));

(cljs.core.async.t_cljs$core$async46423.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46423.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46423.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46423.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46419_SHARP_){
var G__46426 = (((p1__46419_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46419_SHARP_) : self__.f.call(null,p1__46419_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46426) : f1.call(null,G__46426));
});
}));

(cljs.core.async.t_cljs$core$async46423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46421","meta46421",-1870386857,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46420","cljs.core.async/t_cljs$core$async46420",1778358573,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46424","meta46424",935903963,null)], null);
}));

(cljs.core.async.t_cljs$core$async46423.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46423");

(cljs.core.async.t_cljs$core$async46423.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46423");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46423.
 */
cljs.core.async.__GT_t_cljs$core$async46423 = (function cljs$core$async$__GT_t_cljs$core$async46423(f,ch,meta46421,_,fn1,meta46424){
return (new cljs.core.async.t_cljs$core$async46423(f,ch,meta46421,_,fn1,meta46424));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46420 = (function (f,ch,meta46421){
this.f = f;
this.ch = ch;
this.meta46421 = meta46421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46422,meta46421__$1){
var self__ = this;
var _46422__$1 = this;
return (new cljs.core.async.t_cljs$core$async46420(self__.f,self__.ch,meta46421__$1));
}));

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46422){
var self__ = this;
var _46422__$1 = this;
return self__.meta46421;
}));

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async46423(self__.f,self__.ch,self__.meta46421,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46427 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46427) : self__.f.call(null,G__46427));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46421","meta46421",-1870386857,null)], null);
}));

(cljs.core.async.t_cljs$core$async46420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46420");

(cljs.core.async.t_cljs$core$async46420.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46420.
 */
cljs.core.async.__GT_t_cljs$core$async46420 = (function cljs$core$async$__GT_t_cljs$core$async46420(f,ch,meta46421){
return (new cljs.core.async.t_cljs$core$async46420(f,ch,meta46421));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async46420(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46428 = (function (f,ch,meta46429){
this.f = f;
this.ch = ch;
this.meta46429 = meta46429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46430,meta46429__$1){
var self__ = this;
var _46430__$1 = this;
return (new cljs.core.async.t_cljs$core$async46428(self__.f,self__.ch,meta46429__$1));
}));

(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46430){
var self__ = this;
var _46430__$1 = this;
return self__.meta46429;
}));

(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46429","meta46429",-884303785,null)], null);
}));

(cljs.core.async.t_cljs$core$async46428.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46428");

(cljs.core.async.t_cljs$core$async46428.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46428");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46428.
 */
cljs.core.async.__GT_t_cljs$core$async46428 = (function cljs$core$async$__GT_t_cljs$core$async46428(f,ch,meta46429){
return (new cljs.core.async.t_cljs$core$async46428(f,ch,meta46429));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async46428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46431 = (function (p,ch,meta46432){
this.p = p;
this.ch = ch;
this.meta46432 = meta46432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46433,meta46432__$1){
var self__ = this;
var _46433__$1 = this;
return (new cljs.core.async.t_cljs$core$async46431(self__.p,self__.ch,meta46432__$1));
}));

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46433){
var self__ = this;
var _46433__$1 = this;
return self__.meta46432;
}));

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46432","meta46432",5408491,null)], null);
}));

(cljs.core.async.t_cljs$core$async46431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46431");

(cljs.core.async.t_cljs$core$async46431.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46431.
 */
cljs.core.async.__GT_t_cljs$core$async46431 = (function cljs$core$async$__GT_t_cljs$core$async46431(p,ch,meta46432){
return (new cljs.core.async.t_cljs$core$async46431(p,ch,meta46432));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async46431(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46435 = arguments.length;
switch (G__46435) {
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
var c__45154__auto___47325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46456){
var state_val_46457 = (state_46456[(1)]);
if((state_val_46457 === (7))){
var inst_46452 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
var statearr_46458_47326 = state_46456__$1;
(statearr_46458_47326[(2)] = inst_46452);

(statearr_46458_47326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (1))){
var state_46456__$1 = state_46456;
var statearr_46459_47327 = state_46456__$1;
(statearr_46459_47327[(2)] = null);

(statearr_46459_47327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (4))){
var inst_46438 = (state_46456[(7)]);
var inst_46438__$1 = (state_46456[(2)]);
var inst_46439 = (inst_46438__$1 == null);
var state_46456__$1 = (function (){var statearr_46460 = state_46456;
(statearr_46460[(7)] = inst_46438__$1);

return statearr_46460;
})();
if(cljs.core.truth_(inst_46439)){
var statearr_46461_47328 = state_46456__$1;
(statearr_46461_47328[(1)] = (5));

} else {
var statearr_46462_47329 = state_46456__$1;
(statearr_46462_47329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (6))){
var inst_46438 = (state_46456[(7)]);
var inst_46443 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46438) : p.call(null,inst_46438));
var state_46456__$1 = state_46456;
if(cljs.core.truth_(inst_46443)){
var statearr_46463_47330 = state_46456__$1;
(statearr_46463_47330[(1)] = (8));

} else {
var statearr_46464_47331 = state_46456__$1;
(statearr_46464_47331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (3))){
var inst_46454 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46456__$1,inst_46454);
} else {
if((state_val_46457 === (2))){
var state_46456__$1 = state_46456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46456__$1,(4),ch);
} else {
if((state_val_46457 === (11))){
var inst_46446 = (state_46456[(2)]);
var state_46456__$1 = state_46456;
var statearr_46465_47332 = state_46456__$1;
(statearr_46465_47332[(2)] = inst_46446);

(statearr_46465_47332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (9))){
var state_46456__$1 = state_46456;
var statearr_46466_47333 = state_46456__$1;
(statearr_46466_47333[(2)] = null);

(statearr_46466_47333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (5))){
var inst_46441 = cljs.core.async.close_BANG_(out);
var state_46456__$1 = state_46456;
var statearr_46467_47338 = state_46456__$1;
(statearr_46467_47338[(2)] = inst_46441);

(statearr_46467_47338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (10))){
var inst_46449 = (state_46456[(2)]);
var state_46456__$1 = (function (){var statearr_46468 = state_46456;
(statearr_46468[(8)] = inst_46449);

return statearr_46468;
})();
var statearr_46469_47339 = state_46456__$1;
(statearr_46469_47339[(2)] = null);

(statearr_46469_47339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46457 === (8))){
var inst_46438 = (state_46456[(7)]);
var state_46456__$1 = state_46456;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46456__$1,(11),out,inst_46438);
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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46470 = [null,null,null,null,null,null,null,null,null];
(statearr_46470[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46470[(1)] = (1));

return statearr_46470;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46456){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46456);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46471){var ex__45083__auto__ = e46471;
var statearr_46472_47340 = state_46456;
(statearr_46472_47340[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46456[(4)]))){
var statearr_46473_47341 = state_46456;
(statearr_46473_47341[(1)] = cljs.core.first((state_46456[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47342 = state_46456;
state_46456 = G__47342;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46474 = f__45155__auto__();
(statearr_46474[(6)] = c__45154__auto___47325);

return statearr_46474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46476 = arguments.length;
switch (G__46476) {
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
var c__45154__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46538){
var state_val_46539 = (state_46538[(1)]);
if((state_val_46539 === (7))){
var inst_46534 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46540_47345 = state_46538__$1;
(statearr_46540_47345[(2)] = inst_46534);

(statearr_46540_47345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (20))){
var inst_46504 = (state_46538[(7)]);
var inst_46515 = (state_46538[(2)]);
var inst_46516 = cljs.core.next(inst_46504);
var inst_46490 = inst_46516;
var inst_46491 = null;
var inst_46492 = (0);
var inst_46493 = (0);
var state_46538__$1 = (function (){var statearr_46541 = state_46538;
(statearr_46541[(8)] = inst_46515);

(statearr_46541[(9)] = inst_46490);

(statearr_46541[(10)] = inst_46491);

(statearr_46541[(11)] = inst_46492);

(statearr_46541[(12)] = inst_46493);

return statearr_46541;
})();
var statearr_46542_47346 = state_46538__$1;
(statearr_46542_47346[(2)] = null);

(statearr_46542_47346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (1))){
var state_46538__$1 = state_46538;
var statearr_46543_47347 = state_46538__$1;
(statearr_46543_47347[(2)] = null);

(statearr_46543_47347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (4))){
var inst_46479 = (state_46538[(13)]);
var inst_46479__$1 = (state_46538[(2)]);
var inst_46480 = (inst_46479__$1 == null);
var state_46538__$1 = (function (){var statearr_46544 = state_46538;
(statearr_46544[(13)] = inst_46479__$1);

return statearr_46544;
})();
if(cljs.core.truth_(inst_46480)){
var statearr_46545_47348 = state_46538__$1;
(statearr_46545_47348[(1)] = (5));

} else {
var statearr_46546_47349 = state_46538__$1;
(statearr_46546_47349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (15))){
var state_46538__$1 = state_46538;
var statearr_46550_47350 = state_46538__$1;
(statearr_46550_47350[(2)] = null);

(statearr_46550_47350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (21))){
var state_46538__$1 = state_46538;
var statearr_46551_47351 = state_46538__$1;
(statearr_46551_47351[(2)] = null);

(statearr_46551_47351[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (13))){
var inst_46493 = (state_46538[(12)]);
var inst_46490 = (state_46538[(9)]);
var inst_46491 = (state_46538[(10)]);
var inst_46492 = (state_46538[(11)]);
var inst_46500 = (state_46538[(2)]);
var inst_46501 = (inst_46493 + (1));
var tmp46547 = inst_46490;
var tmp46548 = inst_46492;
var tmp46549 = inst_46491;
var inst_46490__$1 = tmp46547;
var inst_46491__$1 = tmp46549;
var inst_46492__$1 = tmp46548;
var inst_46493__$1 = inst_46501;
var state_46538__$1 = (function (){var statearr_46552 = state_46538;
(statearr_46552[(14)] = inst_46500);

(statearr_46552[(9)] = inst_46490__$1);

(statearr_46552[(10)] = inst_46491__$1);

(statearr_46552[(11)] = inst_46492__$1);

(statearr_46552[(12)] = inst_46493__$1);

return statearr_46552;
})();
var statearr_46553_47352 = state_46538__$1;
(statearr_46553_47352[(2)] = null);

(statearr_46553_47352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (22))){
var state_46538__$1 = state_46538;
var statearr_46554_47355 = state_46538__$1;
(statearr_46554_47355[(2)] = null);

(statearr_46554_47355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (6))){
var inst_46479 = (state_46538[(13)]);
var inst_46488 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46479) : f.call(null,inst_46479));
var inst_46489 = cljs.core.seq(inst_46488);
var inst_46490 = inst_46489;
var inst_46491 = null;
var inst_46492 = (0);
var inst_46493 = (0);
var state_46538__$1 = (function (){var statearr_46555 = state_46538;
(statearr_46555[(9)] = inst_46490);

(statearr_46555[(10)] = inst_46491);

(statearr_46555[(11)] = inst_46492);

(statearr_46555[(12)] = inst_46493);

return statearr_46555;
})();
var statearr_46556_47356 = state_46538__$1;
(statearr_46556_47356[(2)] = null);

(statearr_46556_47356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (17))){
var inst_46504 = (state_46538[(7)]);
var inst_46508 = cljs.core.chunk_first(inst_46504);
var inst_46509 = cljs.core.chunk_rest(inst_46504);
var inst_46510 = cljs.core.count(inst_46508);
var inst_46490 = inst_46509;
var inst_46491 = inst_46508;
var inst_46492 = inst_46510;
var inst_46493 = (0);
var state_46538__$1 = (function (){var statearr_46557 = state_46538;
(statearr_46557[(9)] = inst_46490);

(statearr_46557[(10)] = inst_46491);

(statearr_46557[(11)] = inst_46492);

(statearr_46557[(12)] = inst_46493);

return statearr_46557;
})();
var statearr_46558_47357 = state_46538__$1;
(statearr_46558_47357[(2)] = null);

(statearr_46558_47357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (3))){
var inst_46536 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46538__$1,inst_46536);
} else {
if((state_val_46539 === (12))){
var inst_46524 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46559_47358 = state_46538__$1;
(statearr_46559_47358[(2)] = inst_46524);

(statearr_46559_47358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (2))){
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46538__$1,(4),in$);
} else {
if((state_val_46539 === (23))){
var inst_46532 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46560_47359 = state_46538__$1;
(statearr_46560_47359[(2)] = inst_46532);

(statearr_46560_47359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (19))){
var inst_46519 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46561_47361 = state_46538__$1;
(statearr_46561_47361[(2)] = inst_46519);

(statearr_46561_47361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (11))){
var inst_46490 = (state_46538[(9)]);
var inst_46504 = (state_46538[(7)]);
var inst_46504__$1 = cljs.core.seq(inst_46490);
var state_46538__$1 = (function (){var statearr_46562 = state_46538;
(statearr_46562[(7)] = inst_46504__$1);

return statearr_46562;
})();
if(inst_46504__$1){
var statearr_46563_47362 = state_46538__$1;
(statearr_46563_47362[(1)] = (14));

} else {
var statearr_46564_47363 = state_46538__$1;
(statearr_46564_47363[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (9))){
var inst_46526 = (state_46538[(2)]);
var inst_46527 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46538__$1 = (function (){var statearr_46565 = state_46538;
(statearr_46565[(15)] = inst_46526);

return statearr_46565;
})();
if(cljs.core.truth_(inst_46527)){
var statearr_46566_47364 = state_46538__$1;
(statearr_46566_47364[(1)] = (21));

} else {
var statearr_46567_47365 = state_46538__$1;
(statearr_46567_47365[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (5))){
var inst_46482 = cljs.core.async.close_BANG_(out);
var state_46538__$1 = state_46538;
var statearr_46568_47366 = state_46538__$1;
(statearr_46568_47366[(2)] = inst_46482);

(statearr_46568_47366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (14))){
var inst_46504 = (state_46538[(7)]);
var inst_46506 = cljs.core.chunked_seq_QMARK_(inst_46504);
var state_46538__$1 = state_46538;
if(inst_46506){
var statearr_46569_47367 = state_46538__$1;
(statearr_46569_47367[(1)] = (17));

} else {
var statearr_46570_47368 = state_46538__$1;
(statearr_46570_47368[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (16))){
var inst_46522 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46571_47369 = state_46538__$1;
(statearr_46571_47369[(2)] = inst_46522);

(statearr_46571_47369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (10))){
var inst_46491 = (state_46538[(10)]);
var inst_46493 = (state_46538[(12)]);
var inst_46498 = cljs.core._nth(inst_46491,inst_46493);
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46538__$1,(13),out,inst_46498);
} else {
if((state_val_46539 === (18))){
var inst_46504 = (state_46538[(7)]);
var inst_46513 = cljs.core.first(inst_46504);
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46538__$1,(20),out,inst_46513);
} else {
if((state_val_46539 === (8))){
var inst_46493 = (state_46538[(12)]);
var inst_46492 = (state_46538[(11)]);
var inst_46495 = (inst_46493 < inst_46492);
var inst_46496 = inst_46495;
var state_46538__$1 = state_46538;
if(cljs.core.truth_(inst_46496)){
var statearr_46572_47370 = state_46538__$1;
(statearr_46572_47370[(1)] = (10));

} else {
var statearr_46573_47371 = state_46538__$1;
(statearr_46573_47371[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45080__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45080__auto____0 = (function (){
var statearr_46574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46574[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45080__auto__);

(statearr_46574[(1)] = (1));

return statearr_46574;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45080__auto____1 = (function (state_46538){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46538);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46575){var ex__45083__auto__ = e46575;
var statearr_46576_47372 = state_46538;
(statearr_46576_47372[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46538[(4)]))){
var statearr_46577_47373 = state_46538;
(statearr_46577_47373[(1)] = cljs.core.first((state_46538[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47374 = state_46538;
state_46538 = G__47374;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45080__auto__ = function(state_46538){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45080__auto____1.call(this,state_46538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46578 = f__45155__auto__();
(statearr_46578[(6)] = c__45154__auto__);

return statearr_46578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));

return c__45154__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46580 = arguments.length;
switch (G__46580) {
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
var G__46582 = arguments.length;
switch (G__46582) {
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
var G__46584 = arguments.length;
switch (G__46584) {
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
var c__45154__auto___47383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46608){
var state_val_46609 = (state_46608[(1)]);
if((state_val_46609 === (7))){
var inst_46603 = (state_46608[(2)]);
var state_46608__$1 = state_46608;
var statearr_46610_47384 = state_46608__$1;
(statearr_46610_47384[(2)] = inst_46603);

(statearr_46610_47384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46609 === (1))){
var inst_46585 = null;
var state_46608__$1 = (function (){var statearr_46611 = state_46608;
(statearr_46611[(7)] = inst_46585);

return statearr_46611;
})();
var statearr_46612_47385 = state_46608__$1;
(statearr_46612_47385[(2)] = null);

(statearr_46612_47385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46609 === (4))){
var inst_46588 = (state_46608[(8)]);
var inst_46588__$1 = (state_46608[(2)]);
var inst_46589 = (inst_46588__$1 == null);
var inst_46590 = cljs.core.not(inst_46589);
var state_46608__$1 = (function (){var statearr_46613 = state_46608;
(statearr_46613[(8)] = inst_46588__$1);

return statearr_46613;
})();
if(inst_46590){
var statearr_46614_47389 = state_46608__$1;
(statearr_46614_47389[(1)] = (5));

} else {
var statearr_46615_47390 = state_46608__$1;
(statearr_46615_47390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46609 === (6))){
var state_46608__$1 = state_46608;
var statearr_46616_47391 = state_46608__$1;
(statearr_46616_47391[(2)] = null);

(statearr_46616_47391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46609 === (3))){
var inst_46605 = (state_46608[(2)]);
var inst_46606 = cljs.core.async.close_BANG_(out);
var state_46608__$1 = (function (){var statearr_46617 = state_46608;
(statearr_46617[(9)] = inst_46605);

return statearr_46617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46608__$1,inst_46606);
} else {
if((state_val_46609 === (2))){
var state_46608__$1 = state_46608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46608__$1,(4),ch);
} else {
if((state_val_46609 === (11))){
var inst_46588 = (state_46608[(8)]);
var inst_46597 = (state_46608[(2)]);
var inst_46585 = inst_46588;
var state_46608__$1 = (function (){var statearr_46618 = state_46608;
(statearr_46618[(10)] = inst_46597);

(statearr_46618[(7)] = inst_46585);

return statearr_46618;
})();
var statearr_46619_47395 = state_46608__$1;
(statearr_46619_47395[(2)] = null);

(statearr_46619_47395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46609 === (9))){
var inst_46588 = (state_46608[(8)]);
var state_46608__$1 = state_46608;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46608__$1,(11),out,inst_46588);
} else {
if((state_val_46609 === (5))){
var inst_46588 = (state_46608[(8)]);
var inst_46585 = (state_46608[(7)]);
var inst_46592 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46588,inst_46585);
var state_46608__$1 = state_46608;
if(inst_46592){
var statearr_46621_47396 = state_46608__$1;
(statearr_46621_47396[(1)] = (8));

} else {
var statearr_46622_47397 = state_46608__$1;
(statearr_46622_47397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46609 === (10))){
var inst_46600 = (state_46608[(2)]);
var state_46608__$1 = state_46608;
var statearr_46623_47398 = state_46608__$1;
(statearr_46623_47398[(2)] = inst_46600);

(statearr_46623_47398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46609 === (8))){
var inst_46585 = (state_46608[(7)]);
var tmp46620 = inst_46585;
var inst_46585__$1 = tmp46620;
var state_46608__$1 = (function (){var statearr_46624 = state_46608;
(statearr_46624[(7)] = inst_46585__$1);

return statearr_46624;
})();
var statearr_46625_47399 = state_46608__$1;
(statearr_46625_47399[(2)] = null);

(statearr_46625_47399[(1)] = (2));


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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46626[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46626[(1)] = (1));

return statearr_46626;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46608){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46608);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46627){var ex__45083__auto__ = e46627;
var statearr_46628_47401 = state_46608;
(statearr_46628_47401[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46608[(4)]))){
var statearr_46629_47402 = state_46608;
(statearr_46629_47402[(1)] = cljs.core.first((state_46608[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47403 = state_46608;
state_46608 = G__47403;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46630 = f__45155__auto__();
(statearr_46630[(6)] = c__45154__auto___47383);

return statearr_46630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46632 = arguments.length;
switch (G__46632) {
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
var c__45154__auto___47405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46670){
var state_val_46671 = (state_46670[(1)]);
if((state_val_46671 === (7))){
var inst_46666 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46672_47406 = state_46670__$1;
(statearr_46672_47406[(2)] = inst_46666);

(statearr_46672_47406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (1))){
var inst_46633 = (new Array(n));
var inst_46634 = inst_46633;
var inst_46635 = (0);
var state_46670__$1 = (function (){var statearr_46673 = state_46670;
(statearr_46673[(7)] = inst_46634);

(statearr_46673[(8)] = inst_46635);

return statearr_46673;
})();
var statearr_46674_47407 = state_46670__$1;
(statearr_46674_47407[(2)] = null);

(statearr_46674_47407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (4))){
var inst_46638 = (state_46670[(9)]);
var inst_46638__$1 = (state_46670[(2)]);
var inst_46639 = (inst_46638__$1 == null);
var inst_46640 = cljs.core.not(inst_46639);
var state_46670__$1 = (function (){var statearr_46675 = state_46670;
(statearr_46675[(9)] = inst_46638__$1);

return statearr_46675;
})();
if(inst_46640){
var statearr_46676_47408 = state_46670__$1;
(statearr_46676_47408[(1)] = (5));

} else {
var statearr_46677_47409 = state_46670__$1;
(statearr_46677_47409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (15))){
var inst_46660 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46678_47410 = state_46670__$1;
(statearr_46678_47410[(2)] = inst_46660);

(statearr_46678_47410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (13))){
var state_46670__$1 = state_46670;
var statearr_46679_47411 = state_46670__$1;
(statearr_46679_47411[(2)] = null);

(statearr_46679_47411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (6))){
var inst_46635 = (state_46670[(8)]);
var inst_46656 = (inst_46635 > (0));
var state_46670__$1 = state_46670;
if(cljs.core.truth_(inst_46656)){
var statearr_46680_47412 = state_46670__$1;
(statearr_46680_47412[(1)] = (12));

} else {
var statearr_46681_47413 = state_46670__$1;
(statearr_46681_47413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (3))){
var inst_46668 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46670__$1,inst_46668);
} else {
if((state_val_46671 === (12))){
var inst_46634 = (state_46670[(7)]);
var inst_46658 = cljs.core.vec(inst_46634);
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46670__$1,(15),out,inst_46658);
} else {
if((state_val_46671 === (2))){
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46670__$1,(4),ch);
} else {
if((state_val_46671 === (11))){
var inst_46650 = (state_46670[(2)]);
var inst_46651 = (new Array(n));
var inst_46634 = inst_46651;
var inst_46635 = (0);
var state_46670__$1 = (function (){var statearr_46682 = state_46670;
(statearr_46682[(10)] = inst_46650);

(statearr_46682[(7)] = inst_46634);

(statearr_46682[(8)] = inst_46635);

return statearr_46682;
})();
var statearr_46683_47414 = state_46670__$1;
(statearr_46683_47414[(2)] = null);

(statearr_46683_47414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (9))){
var inst_46634 = (state_46670[(7)]);
var inst_46648 = cljs.core.vec(inst_46634);
var state_46670__$1 = state_46670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46670__$1,(11),out,inst_46648);
} else {
if((state_val_46671 === (5))){
var inst_46634 = (state_46670[(7)]);
var inst_46635 = (state_46670[(8)]);
var inst_46638 = (state_46670[(9)]);
var inst_46643 = (state_46670[(11)]);
var inst_46642 = (inst_46634[inst_46635] = inst_46638);
var inst_46643__$1 = (inst_46635 + (1));
var inst_46644 = (inst_46643__$1 < n);
var state_46670__$1 = (function (){var statearr_46684 = state_46670;
(statearr_46684[(12)] = inst_46642);

(statearr_46684[(11)] = inst_46643__$1);

return statearr_46684;
})();
if(cljs.core.truth_(inst_46644)){
var statearr_46685_47418 = state_46670__$1;
(statearr_46685_47418[(1)] = (8));

} else {
var statearr_46686_47419 = state_46670__$1;
(statearr_46686_47419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (14))){
var inst_46663 = (state_46670[(2)]);
var inst_46664 = cljs.core.async.close_BANG_(out);
var state_46670__$1 = (function (){var statearr_46688 = state_46670;
(statearr_46688[(13)] = inst_46663);

return statearr_46688;
})();
var statearr_46689_47420 = state_46670__$1;
(statearr_46689_47420[(2)] = inst_46664);

(statearr_46689_47420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (10))){
var inst_46654 = (state_46670[(2)]);
var state_46670__$1 = state_46670;
var statearr_46690_47421 = state_46670__$1;
(statearr_46690_47421[(2)] = inst_46654);

(statearr_46690_47421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46671 === (8))){
var inst_46634 = (state_46670[(7)]);
var inst_46643 = (state_46670[(11)]);
var tmp46687 = inst_46634;
var inst_46634__$1 = tmp46687;
var inst_46635 = inst_46643;
var state_46670__$1 = (function (){var statearr_46691 = state_46670;
(statearr_46691[(7)] = inst_46634__$1);

(statearr_46691[(8)] = inst_46635);

return statearr_46691;
})();
var statearr_46692_47422 = state_46670__$1;
(statearr_46692_47422[(2)] = null);

(statearr_46692_47422[(1)] = (2));


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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46693[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46693[(1)] = (1));

return statearr_46693;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46670){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46670);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46694){var ex__45083__auto__ = e46694;
var statearr_46695_47423 = state_46670;
(statearr_46695_47423[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46670[(4)]))){
var statearr_46696_47424 = state_46670;
(statearr_46696_47424[(1)] = cljs.core.first((state_46670[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47425 = state_46670;
state_46670 = G__47425;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46697 = f__45155__auto__();
(statearr_46697[(6)] = c__45154__auto___47405);

return statearr_46697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46699 = arguments.length;
switch (G__46699) {
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
var c__45154__auto___47427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45155__auto__ = (function (){var switch__45079__auto__ = (function (state_46744){
var state_val_46745 = (state_46744[(1)]);
if((state_val_46745 === (7))){
var inst_46740 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46746_47428 = state_46744__$1;
(statearr_46746_47428[(2)] = inst_46740);

(statearr_46746_47428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (1))){
var inst_46700 = [];
var inst_46701 = inst_46700;
var inst_46702 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46744__$1 = (function (){var statearr_46747 = state_46744;
(statearr_46747[(7)] = inst_46701);

(statearr_46747[(8)] = inst_46702);

return statearr_46747;
})();
var statearr_46748_47429 = state_46744__$1;
(statearr_46748_47429[(2)] = null);

(statearr_46748_47429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (4))){
var inst_46705 = (state_46744[(9)]);
var inst_46705__$1 = (state_46744[(2)]);
var inst_46706 = (inst_46705__$1 == null);
var inst_46707 = cljs.core.not(inst_46706);
var state_46744__$1 = (function (){var statearr_46749 = state_46744;
(statearr_46749[(9)] = inst_46705__$1);

return statearr_46749;
})();
if(inst_46707){
var statearr_46750_47430 = state_46744__$1;
(statearr_46750_47430[(1)] = (5));

} else {
var statearr_46751_47431 = state_46744__$1;
(statearr_46751_47431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (15))){
var inst_46701 = (state_46744[(7)]);
var inst_46732 = cljs.core.vec(inst_46701);
var state_46744__$1 = state_46744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46744__$1,(18),out,inst_46732);
} else {
if((state_val_46745 === (13))){
var inst_46727 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46752_47432 = state_46744__$1;
(statearr_46752_47432[(2)] = inst_46727);

(statearr_46752_47432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (6))){
var inst_46701 = (state_46744[(7)]);
var inst_46729 = inst_46701.length;
var inst_46730 = (inst_46729 > (0));
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46730)){
var statearr_46753_47433 = state_46744__$1;
(statearr_46753_47433[(1)] = (15));

} else {
var statearr_46754_47434 = state_46744__$1;
(statearr_46754_47434[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (17))){
var inst_46737 = (state_46744[(2)]);
var inst_46738 = cljs.core.async.close_BANG_(out);
var state_46744__$1 = (function (){var statearr_46755 = state_46744;
(statearr_46755[(10)] = inst_46737);

return statearr_46755;
})();
var statearr_46756_47435 = state_46744__$1;
(statearr_46756_47435[(2)] = inst_46738);

(statearr_46756_47435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (3))){
var inst_46742 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46744__$1,inst_46742);
} else {
if((state_val_46745 === (12))){
var inst_46701 = (state_46744[(7)]);
var inst_46720 = cljs.core.vec(inst_46701);
var state_46744__$1 = state_46744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46744__$1,(14),out,inst_46720);
} else {
if((state_val_46745 === (2))){
var state_46744__$1 = state_46744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46744__$1,(4),ch);
} else {
if((state_val_46745 === (11))){
var inst_46701 = (state_46744[(7)]);
var inst_46705 = (state_46744[(9)]);
var inst_46709 = (state_46744[(11)]);
var inst_46717 = inst_46701.push(inst_46705);
var tmp46757 = inst_46701;
var inst_46701__$1 = tmp46757;
var inst_46702 = inst_46709;
var state_46744__$1 = (function (){var statearr_46758 = state_46744;
(statearr_46758[(12)] = inst_46717);

(statearr_46758[(7)] = inst_46701__$1);

(statearr_46758[(8)] = inst_46702);

return statearr_46758;
})();
var statearr_46759_47436 = state_46744__$1;
(statearr_46759_47436[(2)] = null);

(statearr_46759_47436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (9))){
var inst_46702 = (state_46744[(8)]);
var inst_46713 = cljs.core.keyword_identical_QMARK_(inst_46702,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46744__$1 = state_46744;
var statearr_46760_47437 = state_46744__$1;
(statearr_46760_47437[(2)] = inst_46713);

(statearr_46760_47437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (5))){
var inst_46705 = (state_46744[(9)]);
var inst_46709 = (state_46744[(11)]);
var inst_46702 = (state_46744[(8)]);
var inst_46710 = (state_46744[(13)]);
var inst_46709__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46705) : f.call(null,inst_46705));
var inst_46710__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46709__$1,inst_46702);
var state_46744__$1 = (function (){var statearr_46761 = state_46744;
(statearr_46761[(11)] = inst_46709__$1);

(statearr_46761[(13)] = inst_46710__$1);

return statearr_46761;
})();
if(inst_46710__$1){
var statearr_46762_47438 = state_46744__$1;
(statearr_46762_47438[(1)] = (8));

} else {
var statearr_46763_47439 = state_46744__$1;
(statearr_46763_47439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (14))){
var inst_46705 = (state_46744[(9)]);
var inst_46709 = (state_46744[(11)]);
var inst_46722 = (state_46744[(2)]);
var inst_46723 = [];
var inst_46724 = inst_46723.push(inst_46705);
var inst_46701 = inst_46723;
var inst_46702 = inst_46709;
var state_46744__$1 = (function (){var statearr_46764 = state_46744;
(statearr_46764[(14)] = inst_46722);

(statearr_46764[(15)] = inst_46724);

(statearr_46764[(7)] = inst_46701);

(statearr_46764[(8)] = inst_46702);

return statearr_46764;
})();
var statearr_46765_47440 = state_46744__$1;
(statearr_46765_47440[(2)] = null);

(statearr_46765_47440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (16))){
var state_46744__$1 = state_46744;
var statearr_46766_47441 = state_46744__$1;
(statearr_46766_47441[(2)] = null);

(statearr_46766_47441[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (10))){
var inst_46715 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
if(cljs.core.truth_(inst_46715)){
var statearr_46767_47442 = state_46744__$1;
(statearr_46767_47442[(1)] = (11));

} else {
var statearr_46768_47443 = state_46744__$1;
(statearr_46768_47443[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (18))){
var inst_46734 = (state_46744[(2)]);
var state_46744__$1 = state_46744;
var statearr_46769_47444 = state_46744__$1;
(statearr_46769_47444[(2)] = inst_46734);

(statearr_46769_47444[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46745 === (8))){
var inst_46710 = (state_46744[(13)]);
var state_46744__$1 = state_46744;
var statearr_46770_47445 = state_46744__$1;
(statearr_46770_47445[(2)] = inst_46710);

(statearr_46770_47445[(1)] = (10));


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
var cljs$core$async$state_machine__45080__auto__ = null;
var cljs$core$async$state_machine__45080__auto____0 = (function (){
var statearr_46771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46771[(0)] = cljs$core$async$state_machine__45080__auto__);

(statearr_46771[(1)] = (1));

return statearr_46771;
});
var cljs$core$async$state_machine__45080__auto____1 = (function (state_46744){
while(true){
var ret_value__45081__auto__ = (function (){try{while(true){
var result__45082__auto__ = switch__45079__auto__(state_46744);
if(cljs.core.keyword_identical_QMARK_(result__45082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45082__auto__;
}
break;
}
}catch (e46772){var ex__45083__auto__ = e46772;
var statearr_46773_47446 = state_46744;
(statearr_46773_47446[(2)] = ex__45083__auto__);


if(cljs.core.seq((state_46744[(4)]))){
var statearr_46774_47447 = state_46744;
(statearr_46774_47447[(1)] = cljs.core.first((state_46744[(4)])));

} else {
throw ex__45083__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47448 = state_46744;
state_46744 = G__47448;
continue;
} else {
return ret_value__45081__auto__;
}
break;
}
});
cljs$core$async$state_machine__45080__auto__ = function(state_46744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45080__auto____1.call(this,state_46744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45080__auto____0;
cljs$core$async$state_machine__45080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45080__auto____1;
return cljs$core$async$state_machine__45080__auto__;
})()
})();
var state__45156__auto__ = (function (){var statearr_46775 = f__45155__auto__();
(statearr_46775[(6)] = c__45154__auto___47427);

return statearr_46775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45156__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
