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
cljs.core.async.t_cljs$core$async54177 = (function (f,blockable,meta54178){
this.f = f;
this.blockable = blockable;
this.meta54178 = meta54178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54179,meta54178__$1){
var self__ = this;
var _54179__$1 = this;
return (new cljs.core.async.t_cljs$core$async54177(self__.f,self__.blockable,meta54178__$1));
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
return true;
}));

(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54178","meta54178",363216509,null)], null);
}));

(cljs.core.async.t_cljs$core$async54177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54177");

(cljs.core.async.t_cljs$core$async54177.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54177.
 */
cljs.core.async.__GT_t_cljs$core$async54177 = (function cljs$core$async$__GT_t_cljs$core$async54177(f,blockable,meta54178){
return (new cljs.core.async.t_cljs$core$async54177(f,blockable,meta54178));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54174 = arguments.length;
switch (G__54174) {
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
return (new cljs.core.async.t_cljs$core$async54177(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54197 = arguments.length;
switch (G__54197) {
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
var G__54199 = arguments.length;
switch (G__54199) {
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
var G__54204 = arguments.length;
switch (G__54204) {
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
var G__54206 = arguments.length;
switch (G__54206) {
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
var n__5616__auto___55746 = n;
var x_55747 = (0);
while(true){
if((x_55747 < n__5616__auto___55746)){
(a[x_55747] = x_55747);

var G__55748 = (x_55747 + (1));
x_55747 = G__55748;
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
cljs.core.async.t_cljs$core$async54212 = (function (flag,meta54213){
this.flag = flag;
this.meta54213 = meta54213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54214,meta54213__$1){
var self__ = this;
var _54214__$1 = this;
return (new cljs.core.async.t_cljs$core$async54212(self__.flag,meta54213__$1));
}));

(cljs.core.async.t_cljs$core$async54212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54214){
var self__ = this;
var _54214__$1 = this;
return self__.meta54213;
}));

(cljs.core.async.t_cljs$core$async54212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54212.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54213","meta54213",369058848,null)], null);
}));

(cljs.core.async.t_cljs$core$async54212.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54212");

(cljs.core.async.t_cljs$core$async54212.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54212");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54212.
 */
cljs.core.async.__GT_t_cljs$core$async54212 = (function cljs$core$async$__GT_t_cljs$core$async54212(flag,meta54213){
return (new cljs.core.async.t_cljs$core$async54212(flag,meta54213));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async54212(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54215 = (function (flag,cb,meta54216){
this.flag = flag;
this.cb = cb;
this.meta54216 = meta54216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54217,meta54216__$1){
var self__ = this;
var _54217__$1 = this;
return (new cljs.core.async.t_cljs$core$async54215(self__.flag,self__.cb,meta54216__$1));
}));

(cljs.core.async.t_cljs$core$async54215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54217){
var self__ = this;
var _54217__$1 = this;
return self__.meta54216;
}));

(cljs.core.async.t_cljs$core$async54215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54216","meta54216",-792534902,null)], null);
}));

(cljs.core.async.t_cljs$core$async54215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54215");

(cljs.core.async.t_cljs$core$async54215.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54215.
 */
cljs.core.async.__GT_t_cljs$core$async54215 = (function cljs$core$async$__GT_t_cljs$core$async54215(flag,cb,meta54216){
return (new cljs.core.async.t_cljs$core$async54215(flag,cb,meta54216));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async54215(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_55753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_55753)){
if((!(((port_55753.cljs$core$IFn$_invoke$arity$1 ? port_55753.cljs$core$IFn$_invoke$arity$1((1)) : port_55753.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__55754 = (i + (1));
i = G__55754;
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
return (function (p1__54218_SHARP_){
var G__54220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54218_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54220) : fret.call(null,G__54220));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__54219_SHARP_){
var G__54221 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54219_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54221) : fret.call(null,G__54221));
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
var G__55759 = (i + (1));
i = G__55759;
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
var len__5749__auto___55764 = arguments.length;
var i__5750__auto___55765 = (0);
while(true){
if((i__5750__auto___55765 < len__5749__auto___55764)){
args__5755__auto__.push((arguments[i__5750__auto___55765]));

var G__55766 = (i__5750__auto___55765 + (1));
i__5750__auto___55765 = G__55766;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54224){
var map__54225 = p__54224;
var map__54225__$1 = cljs.core.__destructure_map(map__54225);
var opts = map__54225__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54222){
var G__54223 = cljs.core.first(seq54222);
var seq54222__$1 = cljs.core.next(seq54222);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54223,seq54222__$1);
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
var G__54228 = arguments.length;
switch (G__54228) {
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
var c__54102__auto___55772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54341){
var state_val_54343 = (state_54341[(1)]);
if((state_val_54343 === (7))){
var inst_54326 = (state_54341[(2)]);
var state_54341__$1 = state_54341;
var statearr_54356_55773 = state_54341__$1;
(statearr_54356_55773[(2)] = inst_54326);

(statearr_54356_55773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (1))){
var state_54341__$1 = state_54341;
var statearr_54357_55774 = state_54341__$1;
(statearr_54357_55774[(2)] = null);

(statearr_54357_55774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (4))){
var inst_54257 = (state_54341[(7)]);
var inst_54257__$1 = (state_54341[(2)]);
var inst_54279 = (inst_54257__$1 == null);
var state_54341__$1 = (function (){var statearr_54359 = state_54341;
(statearr_54359[(7)] = inst_54257__$1);

return statearr_54359;
})();
if(cljs.core.truth_(inst_54279)){
var statearr_54360_55779 = state_54341__$1;
(statearr_54360_55779[(1)] = (5));

} else {
var statearr_54361_55780 = state_54341__$1;
(statearr_54361_55780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (13))){
var state_54341__$1 = state_54341;
var statearr_54362_55784 = state_54341__$1;
(statearr_54362_55784[(2)] = null);

(statearr_54362_55784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (6))){
var inst_54257 = (state_54341[(7)]);
var state_54341__$1 = state_54341;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54341__$1,(11),to,inst_54257);
} else {
if((state_val_54343 === (3))){
var inst_54339 = (state_54341[(2)]);
var state_54341__$1 = state_54341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54341__$1,inst_54339);
} else {
if((state_val_54343 === (12))){
var state_54341__$1 = state_54341;
var statearr_54363_55785 = state_54341__$1;
(statearr_54363_55785[(2)] = null);

(statearr_54363_55785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (2))){
var state_54341__$1 = state_54341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54341__$1,(4),from);
} else {
if((state_val_54343 === (11))){
var inst_54309 = (state_54341[(2)]);
var state_54341__$1 = state_54341;
if(cljs.core.truth_(inst_54309)){
var statearr_54364_55789 = state_54341__$1;
(statearr_54364_55789[(1)] = (12));

} else {
var statearr_54365_55790 = state_54341__$1;
(statearr_54365_55790[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (9))){
var state_54341__$1 = state_54341;
var statearr_54366_55791 = state_54341__$1;
(statearr_54366_55791[(2)] = null);

(statearr_54366_55791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (5))){
var state_54341__$1 = state_54341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54367_55792 = state_54341__$1;
(statearr_54367_55792[(1)] = (8));

} else {
var statearr_54368_55796 = state_54341__$1;
(statearr_54368_55796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (14))){
var inst_54324 = (state_54341[(2)]);
var state_54341__$1 = state_54341;
var statearr_54369_55797 = state_54341__$1;
(statearr_54369_55797[(2)] = inst_54324);

(statearr_54369_55797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (10))){
var inst_54306 = (state_54341[(2)]);
var state_54341__$1 = state_54341;
var statearr_54370_55798 = state_54341__$1;
(statearr_54370_55798[(2)] = inst_54306);

(statearr_54370_55798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54343 === (8))){
var inst_54293 = cljs.core.async.close_BANG_(to);
var state_54341__$1 = state_54341;
var statearr_54371_55799 = state_54341__$1;
(statearr_54371_55799[(2)] = inst_54293);

(statearr_54371_55799[(1)] = (10));


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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_54372 = [null,null,null,null,null,null,null,null];
(statearr_54372[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_54372[(1)] = (1));

return statearr_54372;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_54341){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54341);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54373){var ex__54031__auto__ = e54373;
var statearr_54374_55803 = state_54341;
(statearr_54374_55803[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54341[(4)]))){
var statearr_54375_55804 = state_54341;
(statearr_54375_55804[(1)] = cljs.core.first((state_54341[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55805 = state_54341;
state_54341 = G__55805;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_54341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_54341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54376 = f__54103__auto__();
(statearr_54376[(6)] = c__54102__auto___55772);

return statearr_54376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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
var process__$1 = (function (p__54377){
var vec__54378 = p__54377;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54378,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54378,(1),null);
var job = vec__54378;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54102__auto___55806 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54385){
var state_val_54386 = (state_54385[(1)]);
if((state_val_54386 === (1))){
var state_54385__$1 = state_54385;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54385__$1,(2),res,v);
} else {
if((state_val_54386 === (2))){
var inst_54382 = (state_54385[(2)]);
var inst_54383 = cljs.core.async.close_BANG_(res);
var state_54385__$1 = (function (){var statearr_54387 = state_54385;
(statearr_54387[(7)] = inst_54382);

return statearr_54387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54385__$1,inst_54383);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0 = (function (){
var statearr_54388 = [null,null,null,null,null,null,null,null];
(statearr_54388[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__);

(statearr_54388[(1)] = (1));

return statearr_54388;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1 = (function (state_54385){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54385);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54389){var ex__54031__auto__ = e54389;
var statearr_54390_55807 = state_54385;
(statearr_54390_55807[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54385[(4)]))){
var statearr_54391_55808 = state_54385;
(statearr_54391_55808[(1)] = cljs.core.first((state_54385[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55809 = state_54385;
state_54385 = G__55809;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = function(state_54385){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1.call(this,state_54385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54392 = f__54103__auto__();
(statearr_54392[(6)] = c__54102__auto___55806);

return statearr_54392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54393){
var vec__54394 = p__54393;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54394,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54394,(1),null);
var job = vec__54394;
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
var n__5616__auto___55810 = n;
var __55811 = (0);
while(true){
if((__55811 < n__5616__auto___55810)){
var G__54397_55812 = type;
var G__54397_55813__$1 = (((G__54397_55812 instanceof cljs.core.Keyword))?G__54397_55812.fqn:null);
switch (G__54397_55813__$1) {
case "compute":
var c__54102__auto___55815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55811,c__54102__auto___55815,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async){
return (function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = ((function (__55811,c__54102__auto___55815,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async){
return (function (state_54410){
var state_val_54411 = (state_54410[(1)]);
if((state_val_54411 === (1))){
var state_54410__$1 = state_54410;
var statearr_54412_55816 = state_54410__$1;
(statearr_54412_55816[(2)] = null);

(statearr_54412_55816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54411 === (2))){
var state_54410__$1 = state_54410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54410__$1,(4),jobs);
} else {
if((state_val_54411 === (3))){
var inst_54408 = (state_54410[(2)]);
var state_54410__$1 = state_54410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54410__$1,inst_54408);
} else {
if((state_val_54411 === (4))){
var inst_54400 = (state_54410[(2)]);
var inst_54401 = process__$1(inst_54400);
var state_54410__$1 = state_54410;
if(cljs.core.truth_(inst_54401)){
var statearr_54413_55817 = state_54410__$1;
(statearr_54413_55817[(1)] = (5));

} else {
var statearr_54414_55818 = state_54410__$1;
(statearr_54414_55818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54411 === (5))){
var state_54410__$1 = state_54410;
var statearr_54415_55819 = state_54410__$1;
(statearr_54415_55819[(2)] = null);

(statearr_54415_55819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54411 === (6))){
var state_54410__$1 = state_54410;
var statearr_54416_55820 = state_54410__$1;
(statearr_54416_55820[(2)] = null);

(statearr_54416_55820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54411 === (7))){
var inst_54406 = (state_54410[(2)]);
var state_54410__$1 = state_54410;
var statearr_54417_55821 = state_54410__$1;
(statearr_54417_55821[(2)] = inst_54406);

(statearr_54417_55821[(1)] = (3));


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
});})(__55811,c__54102__auto___55815,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async))
;
return ((function (__55811,switch__54027__auto__,c__54102__auto___55815,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0 = (function (){
var statearr_54418 = [null,null,null,null,null,null,null];
(statearr_54418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__);

(statearr_54418[(1)] = (1));

return statearr_54418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1 = (function (state_54410){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54410);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54419){var ex__54031__auto__ = e54419;
var statearr_54420_55822 = state_54410;
(statearr_54420_55822[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54410[(4)]))){
var statearr_54421_55823 = state_54410;
(statearr_54421_55823[(1)] = cljs.core.first((state_54410[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55824 = state_54410;
state_54410 = G__55824;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = function(state_54410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1.call(this,state_54410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__;
})()
;})(__55811,switch__54027__auto__,c__54102__auto___55815,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async))
})();
var state__54104__auto__ = (function (){var statearr_54422 = f__54103__auto__();
(statearr_54422[(6)] = c__54102__auto___55815);

return statearr_54422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
});})(__55811,c__54102__auto___55815,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async))
);


break;
case "async":
var c__54102__auto___55825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55811,c__54102__auto___55825,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async){
return (function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = ((function (__55811,c__54102__auto___55825,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async){
return (function (state_54435){
var state_val_54436 = (state_54435[(1)]);
if((state_val_54436 === (1))){
var state_54435__$1 = state_54435;
var statearr_54437_55826 = state_54435__$1;
(statearr_54437_55826[(2)] = null);

(statearr_54437_55826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (2))){
var state_54435__$1 = state_54435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54435__$1,(4),jobs);
} else {
if((state_val_54436 === (3))){
var inst_54433 = (state_54435[(2)]);
var state_54435__$1 = state_54435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54435__$1,inst_54433);
} else {
if((state_val_54436 === (4))){
var inst_54425 = (state_54435[(2)]);
var inst_54426 = async(inst_54425);
var state_54435__$1 = state_54435;
if(cljs.core.truth_(inst_54426)){
var statearr_54438_55827 = state_54435__$1;
(statearr_54438_55827[(1)] = (5));

} else {
var statearr_54439_55828 = state_54435__$1;
(statearr_54439_55828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (5))){
var state_54435__$1 = state_54435;
var statearr_54440_55829 = state_54435__$1;
(statearr_54440_55829[(2)] = null);

(statearr_54440_55829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (6))){
var state_54435__$1 = state_54435;
var statearr_54441_55830 = state_54435__$1;
(statearr_54441_55830[(2)] = null);

(statearr_54441_55830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54436 === (7))){
var inst_54431 = (state_54435[(2)]);
var state_54435__$1 = state_54435;
var statearr_54442_55831 = state_54435__$1;
(statearr_54442_55831[(2)] = inst_54431);

(statearr_54442_55831[(1)] = (3));


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
});})(__55811,c__54102__auto___55825,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async))
;
return ((function (__55811,switch__54027__auto__,c__54102__auto___55825,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0 = (function (){
var statearr_54443 = [null,null,null,null,null,null,null];
(statearr_54443[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__);

(statearr_54443[(1)] = (1));

return statearr_54443;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1 = (function (state_54435){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54435);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54444){var ex__54031__auto__ = e54444;
var statearr_54445_55832 = state_54435;
(statearr_54445_55832[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54435[(4)]))){
var statearr_54446_55833 = state_54435;
(statearr_54446_55833[(1)] = cljs.core.first((state_54435[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55834 = state_54435;
state_54435 = G__55834;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = function(state_54435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1.call(this,state_54435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__;
})()
;})(__55811,switch__54027__auto__,c__54102__auto___55825,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async))
})();
var state__54104__auto__ = (function (){var statearr_54447 = f__54103__auto__();
(statearr_54447[(6)] = c__54102__auto___55825);

return statearr_54447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
});})(__55811,c__54102__auto___55825,G__54397_55812,G__54397_55813__$1,n__5616__auto___55810,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54397_55813__$1)].join('')));

}

var G__55835 = (__55811 + (1));
__55811 = G__55835;
continue;
} else {
}
break;
}

var c__54102__auto___55836 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54469){
var state_val_54470 = (state_54469[(1)]);
if((state_val_54470 === (7))){
var inst_54465 = (state_54469[(2)]);
var state_54469__$1 = state_54469;
var statearr_54471_55837 = state_54469__$1;
(statearr_54471_55837[(2)] = inst_54465);

(statearr_54471_55837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54470 === (1))){
var state_54469__$1 = state_54469;
var statearr_54472_55838 = state_54469__$1;
(statearr_54472_55838[(2)] = null);

(statearr_54472_55838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54470 === (4))){
var inst_54450 = (state_54469[(7)]);
var inst_54450__$1 = (state_54469[(2)]);
var inst_54451 = (inst_54450__$1 == null);
var state_54469__$1 = (function (){var statearr_54473 = state_54469;
(statearr_54473[(7)] = inst_54450__$1);

return statearr_54473;
})();
if(cljs.core.truth_(inst_54451)){
var statearr_54474_55839 = state_54469__$1;
(statearr_54474_55839[(1)] = (5));

} else {
var statearr_54475_55844 = state_54469__$1;
(statearr_54475_55844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54470 === (6))){
var inst_54450 = (state_54469[(7)]);
var inst_54455 = (state_54469[(8)]);
var inst_54455__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54456 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54457 = [inst_54450,inst_54455__$1];
var inst_54458 = (new cljs.core.PersistentVector(null,2,(5),inst_54456,inst_54457,null));
var state_54469__$1 = (function (){var statearr_54476 = state_54469;
(statearr_54476[(8)] = inst_54455__$1);

return statearr_54476;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54469__$1,(8),jobs,inst_54458);
} else {
if((state_val_54470 === (3))){
var inst_54467 = (state_54469[(2)]);
var state_54469__$1 = state_54469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54469__$1,inst_54467);
} else {
if((state_val_54470 === (2))){
var state_54469__$1 = state_54469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54469__$1,(4),from);
} else {
if((state_val_54470 === (9))){
var inst_54462 = (state_54469[(2)]);
var state_54469__$1 = (function (){var statearr_54477 = state_54469;
(statearr_54477[(9)] = inst_54462);

return statearr_54477;
})();
var statearr_54478_55868 = state_54469__$1;
(statearr_54478_55868[(2)] = null);

(statearr_54478_55868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54470 === (5))){
var inst_54453 = cljs.core.async.close_BANG_(jobs);
var state_54469__$1 = state_54469;
var statearr_54479_55869 = state_54469__$1;
(statearr_54479_55869[(2)] = inst_54453);

(statearr_54479_55869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54470 === (8))){
var inst_54455 = (state_54469[(8)]);
var inst_54460 = (state_54469[(2)]);
var state_54469__$1 = (function (){var statearr_54480 = state_54469;
(statearr_54480[(10)] = inst_54460);

return statearr_54480;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54469__$1,(9),results,inst_54455);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0 = (function (){
var statearr_54481 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__);

(statearr_54481[(1)] = (1));

return statearr_54481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1 = (function (state_54469){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54469);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54482){var ex__54031__auto__ = e54482;
var statearr_54483_55870 = state_54469;
(statearr_54483_55870[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54469[(4)]))){
var statearr_54484_55871 = state_54469;
(statearr_54484_55871[(1)] = cljs.core.first((state_54469[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55872 = state_54469;
state_54469 = G__55872;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = function(state_54469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1.call(this,state_54469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54485 = f__54103__auto__();
(statearr_54485[(6)] = c__54102__auto___55836);

return statearr_54485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));


var c__54102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54523){
var state_val_54524 = (state_54523[(1)]);
if((state_val_54524 === (7))){
var inst_54519 = (state_54523[(2)]);
var state_54523__$1 = state_54523;
var statearr_54525_55873 = state_54523__$1;
(statearr_54525_55873[(2)] = inst_54519);

(statearr_54525_55873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (20))){
var state_54523__$1 = state_54523;
var statearr_54526_55874 = state_54523__$1;
(statearr_54526_55874[(2)] = null);

(statearr_54526_55874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (1))){
var state_54523__$1 = state_54523;
var statearr_54527_55875 = state_54523__$1;
(statearr_54527_55875[(2)] = null);

(statearr_54527_55875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (4))){
var inst_54488 = (state_54523[(7)]);
var inst_54488__$1 = (state_54523[(2)]);
var inst_54489 = (inst_54488__$1 == null);
var state_54523__$1 = (function (){var statearr_54528 = state_54523;
(statearr_54528[(7)] = inst_54488__$1);

return statearr_54528;
})();
if(cljs.core.truth_(inst_54489)){
var statearr_54529_55876 = state_54523__$1;
(statearr_54529_55876[(1)] = (5));

} else {
var statearr_54530_55877 = state_54523__$1;
(statearr_54530_55877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (15))){
var inst_54501 = (state_54523[(8)]);
var state_54523__$1 = state_54523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54523__$1,(18),to,inst_54501);
} else {
if((state_val_54524 === (21))){
var inst_54514 = (state_54523[(2)]);
var state_54523__$1 = state_54523;
var statearr_54531_55880 = state_54523__$1;
(statearr_54531_55880[(2)] = inst_54514);

(statearr_54531_55880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (13))){
var inst_54516 = (state_54523[(2)]);
var state_54523__$1 = (function (){var statearr_54532 = state_54523;
(statearr_54532[(9)] = inst_54516);

return statearr_54532;
})();
var statearr_54533_55881 = state_54523__$1;
(statearr_54533_55881[(2)] = null);

(statearr_54533_55881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (6))){
var inst_54488 = (state_54523[(7)]);
var state_54523__$1 = state_54523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54523__$1,(11),inst_54488);
} else {
if((state_val_54524 === (17))){
var inst_54509 = (state_54523[(2)]);
var state_54523__$1 = state_54523;
if(cljs.core.truth_(inst_54509)){
var statearr_54534_55882 = state_54523__$1;
(statearr_54534_55882[(1)] = (19));

} else {
var statearr_54535_55883 = state_54523__$1;
(statearr_54535_55883[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (3))){
var inst_54521 = (state_54523[(2)]);
var state_54523__$1 = state_54523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54523__$1,inst_54521);
} else {
if((state_val_54524 === (12))){
var inst_54498 = (state_54523[(10)]);
var state_54523__$1 = state_54523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54523__$1,(14),inst_54498);
} else {
if((state_val_54524 === (2))){
var state_54523__$1 = state_54523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54523__$1,(4),results);
} else {
if((state_val_54524 === (19))){
var state_54523__$1 = state_54523;
var statearr_54536_55888 = state_54523__$1;
(statearr_54536_55888[(2)] = null);

(statearr_54536_55888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (11))){
var inst_54498 = (state_54523[(2)]);
var state_54523__$1 = (function (){var statearr_54537 = state_54523;
(statearr_54537[(10)] = inst_54498);

return statearr_54537;
})();
var statearr_54538_55889 = state_54523__$1;
(statearr_54538_55889[(2)] = null);

(statearr_54538_55889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (9))){
var state_54523__$1 = state_54523;
var statearr_54539_55890 = state_54523__$1;
(statearr_54539_55890[(2)] = null);

(statearr_54539_55890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (5))){
var state_54523__$1 = state_54523;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54540_55891 = state_54523__$1;
(statearr_54540_55891[(1)] = (8));

} else {
var statearr_54541_55892 = state_54523__$1;
(statearr_54541_55892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (14))){
var inst_54501 = (state_54523[(8)]);
var inst_54503 = (state_54523[(11)]);
var inst_54501__$1 = (state_54523[(2)]);
var inst_54502 = (inst_54501__$1 == null);
var inst_54503__$1 = cljs.core.not(inst_54502);
var state_54523__$1 = (function (){var statearr_54542 = state_54523;
(statearr_54542[(8)] = inst_54501__$1);

(statearr_54542[(11)] = inst_54503__$1);

return statearr_54542;
})();
if(inst_54503__$1){
var statearr_54543_55893 = state_54523__$1;
(statearr_54543_55893[(1)] = (15));

} else {
var statearr_54544_55894 = state_54523__$1;
(statearr_54544_55894[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (16))){
var inst_54503 = (state_54523[(11)]);
var state_54523__$1 = state_54523;
var statearr_54545_55895 = state_54523__$1;
(statearr_54545_55895[(2)] = inst_54503);

(statearr_54545_55895[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (10))){
var inst_54495 = (state_54523[(2)]);
var state_54523__$1 = state_54523;
var statearr_54546_55896 = state_54523__$1;
(statearr_54546_55896[(2)] = inst_54495);

(statearr_54546_55896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (18))){
var inst_54506 = (state_54523[(2)]);
var state_54523__$1 = state_54523;
var statearr_54547_55897 = state_54523__$1;
(statearr_54547_55897[(2)] = inst_54506);

(statearr_54547_55897[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54524 === (8))){
var inst_54492 = cljs.core.async.close_BANG_(to);
var state_54523__$1 = state_54523;
var statearr_54548_55898 = state_54523__$1;
(statearr_54548_55898[(2)] = inst_54492);

(statearr_54548_55898[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0 = (function (){
var statearr_54549 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__);

(statearr_54549[(1)] = (1));

return statearr_54549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1 = (function (state_54523){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54523);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54550){var ex__54031__auto__ = e54550;
var statearr_54551_55899 = state_54523;
(statearr_54551_55899[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54523[(4)]))){
var statearr_54552_55900 = state_54523;
(statearr_54552_55900[(1)] = cljs.core.first((state_54523[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55901 = state_54523;
state_54523 = G__55901;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__ = function(state_54523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1.call(this,state_54523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54028__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54553 = f__54103__auto__();
(statearr_54553[(6)] = c__54102__auto__);

return statearr_54553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));

return c__54102__auto__;
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
var G__54555 = arguments.length;
switch (G__54555) {
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
var G__54557 = arguments.length;
switch (G__54557) {
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
var G__54559 = arguments.length;
switch (G__54559) {
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
var c__54102__auto___55905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54585){
var state_val_54586 = (state_54585[(1)]);
if((state_val_54586 === (7))){
var inst_54581 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54587_55906 = state_54585__$1;
(statearr_54587_55906[(2)] = inst_54581);

(statearr_54587_55906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (1))){
var state_54585__$1 = state_54585;
var statearr_54588_55907 = state_54585__$1;
(statearr_54588_55907[(2)] = null);

(statearr_54588_55907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (4))){
var inst_54562 = (state_54585[(7)]);
var inst_54562__$1 = (state_54585[(2)]);
var inst_54563 = (inst_54562__$1 == null);
var state_54585__$1 = (function (){var statearr_54589 = state_54585;
(statearr_54589[(7)] = inst_54562__$1);

return statearr_54589;
})();
if(cljs.core.truth_(inst_54563)){
var statearr_54590_55908 = state_54585__$1;
(statearr_54590_55908[(1)] = (5));

} else {
var statearr_54591_55909 = state_54585__$1;
(statearr_54591_55909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (13))){
var state_54585__$1 = state_54585;
var statearr_54592_55910 = state_54585__$1;
(statearr_54592_55910[(2)] = null);

(statearr_54592_55910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (6))){
var inst_54562 = (state_54585[(7)]);
var inst_54568 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54562) : p.call(null,inst_54562));
var state_54585__$1 = state_54585;
if(cljs.core.truth_(inst_54568)){
var statearr_54593_55911 = state_54585__$1;
(statearr_54593_55911[(1)] = (9));

} else {
var statearr_54594_55912 = state_54585__$1;
(statearr_54594_55912[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (3))){
var inst_54583 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54585__$1,inst_54583);
} else {
if((state_val_54586 === (12))){
var state_54585__$1 = state_54585;
var statearr_54595_55914 = state_54585__$1;
(statearr_54595_55914[(2)] = null);

(statearr_54595_55914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (2))){
var state_54585__$1 = state_54585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54585__$1,(4),ch);
} else {
if((state_val_54586 === (11))){
var inst_54562 = (state_54585[(7)]);
var inst_54572 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54585__$1,(8),inst_54572,inst_54562);
} else {
if((state_val_54586 === (9))){
var state_54585__$1 = state_54585;
var statearr_54596_55915 = state_54585__$1;
(statearr_54596_55915[(2)] = tc);

(statearr_54596_55915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (5))){
var inst_54565 = cljs.core.async.close_BANG_(tc);
var inst_54566 = cljs.core.async.close_BANG_(fc);
var state_54585__$1 = (function (){var statearr_54597 = state_54585;
(statearr_54597[(8)] = inst_54565);

return statearr_54597;
})();
var statearr_54598_55916 = state_54585__$1;
(statearr_54598_55916[(2)] = inst_54566);

(statearr_54598_55916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (14))){
var inst_54579 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
var statearr_54599_55917 = state_54585__$1;
(statearr_54599_55917[(2)] = inst_54579);

(statearr_54599_55917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (10))){
var state_54585__$1 = state_54585;
var statearr_54600_55918 = state_54585__$1;
(statearr_54600_55918[(2)] = fc);

(statearr_54600_55918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54586 === (8))){
var inst_54574 = (state_54585[(2)]);
var state_54585__$1 = state_54585;
if(cljs.core.truth_(inst_54574)){
var statearr_54601_55919 = state_54585__$1;
(statearr_54601_55919[(1)] = (12));

} else {
var statearr_54602_55920 = state_54585__$1;
(statearr_54602_55920[(1)] = (13));

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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_54603 = [null,null,null,null,null,null,null,null,null];
(statearr_54603[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_54603[(1)] = (1));

return statearr_54603;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_54585){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54585);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54604){var ex__54031__auto__ = e54604;
var statearr_54605_55921 = state_54585;
(statearr_54605_55921[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54585[(4)]))){
var statearr_54606_55922 = state_54585;
(statearr_54606_55922[(1)] = cljs.core.first((state_54585[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55923 = state_54585;
state_54585 = G__55923;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_54585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_54585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54607 = f__54103__auto__();
(statearr_54607[(6)] = c__54102__auto___55905);

return statearr_54607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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
var c__54102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54629){
var state_val_54630 = (state_54629[(1)]);
if((state_val_54630 === (7))){
var inst_54625 = (state_54629[(2)]);
var state_54629__$1 = state_54629;
var statearr_54631_55924 = state_54629__$1;
(statearr_54631_55924[(2)] = inst_54625);

(statearr_54631_55924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54630 === (1))){
var inst_54608 = init;
var inst_54609 = inst_54608;
var state_54629__$1 = (function (){var statearr_54632 = state_54629;
(statearr_54632[(7)] = inst_54609);

return statearr_54632;
})();
var statearr_54633_55925 = state_54629__$1;
(statearr_54633_55925[(2)] = null);

(statearr_54633_55925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54630 === (4))){
var inst_54612 = (state_54629[(8)]);
var inst_54612__$1 = (state_54629[(2)]);
var inst_54613 = (inst_54612__$1 == null);
var state_54629__$1 = (function (){var statearr_54634 = state_54629;
(statearr_54634[(8)] = inst_54612__$1);

return statearr_54634;
})();
if(cljs.core.truth_(inst_54613)){
var statearr_54635_55926 = state_54629__$1;
(statearr_54635_55926[(1)] = (5));

} else {
var statearr_54636_55927 = state_54629__$1;
(statearr_54636_55927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54630 === (6))){
var inst_54609 = (state_54629[(7)]);
var inst_54612 = (state_54629[(8)]);
var inst_54616 = (state_54629[(9)]);
var inst_54616__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54609,inst_54612) : f.call(null,inst_54609,inst_54612));
var inst_54617 = cljs.core.reduced_QMARK_(inst_54616__$1);
var state_54629__$1 = (function (){var statearr_54637 = state_54629;
(statearr_54637[(9)] = inst_54616__$1);

return statearr_54637;
})();
if(inst_54617){
var statearr_54638_55928 = state_54629__$1;
(statearr_54638_55928[(1)] = (8));

} else {
var statearr_54639_55929 = state_54629__$1;
(statearr_54639_55929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54630 === (3))){
var inst_54627 = (state_54629[(2)]);
var state_54629__$1 = state_54629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54629__$1,inst_54627);
} else {
if((state_val_54630 === (2))){
var state_54629__$1 = state_54629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54629__$1,(4),ch);
} else {
if((state_val_54630 === (9))){
var inst_54616 = (state_54629[(9)]);
var inst_54609 = inst_54616;
var state_54629__$1 = (function (){var statearr_54640 = state_54629;
(statearr_54640[(7)] = inst_54609);

return statearr_54640;
})();
var statearr_54641_55930 = state_54629__$1;
(statearr_54641_55930[(2)] = null);

(statearr_54641_55930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54630 === (5))){
var inst_54609 = (state_54629[(7)]);
var state_54629__$1 = state_54629;
var statearr_54642_55931 = state_54629__$1;
(statearr_54642_55931[(2)] = inst_54609);

(statearr_54642_55931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54630 === (10))){
var inst_54623 = (state_54629[(2)]);
var state_54629__$1 = state_54629;
var statearr_54643_55932 = state_54629__$1;
(statearr_54643_55932[(2)] = inst_54623);

(statearr_54643_55932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54630 === (8))){
var inst_54616 = (state_54629[(9)]);
var inst_54619 = cljs.core.deref(inst_54616);
var state_54629__$1 = state_54629;
var statearr_54644_55933 = state_54629__$1;
(statearr_54644_55933[(2)] = inst_54619);

(statearr_54644_55933[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54028__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54028__auto____0 = (function (){
var statearr_54645 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54645[(0)] = cljs$core$async$reduce_$_state_machine__54028__auto__);

(statearr_54645[(1)] = (1));

return statearr_54645;
});
var cljs$core$async$reduce_$_state_machine__54028__auto____1 = (function (state_54629){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54629);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54646){var ex__54031__auto__ = e54646;
var statearr_54647_55934 = state_54629;
(statearr_54647_55934[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54629[(4)]))){
var statearr_54648_55935 = state_54629;
(statearr_54648_55935[(1)] = cljs.core.first((state_54629[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55936 = state_54629;
state_54629 = G__55936;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54028__auto__ = function(state_54629){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54028__auto____1.call(this,state_54629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54028__auto____0;
cljs$core$async$reduce_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54028__auto____1;
return cljs$core$async$reduce_$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54649 = f__54103__auto__();
(statearr_54649[(6)] = c__54102__auto__);

return statearr_54649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));

return c__54102__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54655){
var state_val_54656 = (state_54655[(1)]);
if((state_val_54656 === (1))){
var inst_54650 = cljs.core.async.reduce(f__$1,init,ch);
var state_54655__$1 = state_54655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54655__$1,(2),inst_54650);
} else {
if((state_val_54656 === (2))){
var inst_54652 = (state_54655[(2)]);
var inst_54653 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54652) : f__$1.call(null,inst_54652));
var state_54655__$1 = state_54655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54655__$1,inst_54653);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54028__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54028__auto____0 = (function (){
var statearr_54657 = [null,null,null,null,null,null,null];
(statearr_54657[(0)] = cljs$core$async$transduce_$_state_machine__54028__auto__);

(statearr_54657[(1)] = (1));

return statearr_54657;
});
var cljs$core$async$transduce_$_state_machine__54028__auto____1 = (function (state_54655){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54655);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54658){var ex__54031__auto__ = e54658;
var statearr_54659_55938 = state_54655;
(statearr_54659_55938[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54655[(4)]))){
var statearr_54660_55939 = state_54655;
(statearr_54660_55939[(1)] = cljs.core.first((state_54655[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55940 = state_54655;
state_54655 = G__55940;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54028__auto__ = function(state_54655){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54028__auto____1.call(this,state_54655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54028__auto____0;
cljs$core$async$transduce_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54028__auto____1;
return cljs$core$async$transduce_$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54661 = f__54103__auto__();
(statearr_54661[(6)] = c__54102__auto__);

return statearr_54661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));

return c__54102__auto__;
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
var G__54663 = arguments.length;
switch (G__54663) {
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
var c__54102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54688){
var state_val_54689 = (state_54688[(1)]);
if((state_val_54689 === (7))){
var inst_54670 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
var statearr_54690_55942 = state_54688__$1;
(statearr_54690_55942[(2)] = inst_54670);

(statearr_54690_55942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (1))){
var inst_54664 = cljs.core.seq(coll);
var inst_54665 = inst_54664;
var state_54688__$1 = (function (){var statearr_54691 = state_54688;
(statearr_54691[(7)] = inst_54665);

return statearr_54691;
})();
var statearr_54692_55943 = state_54688__$1;
(statearr_54692_55943[(2)] = null);

(statearr_54692_55943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (4))){
var inst_54665 = (state_54688[(7)]);
var inst_54668 = cljs.core.first(inst_54665);
var state_54688__$1 = state_54688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54688__$1,(7),ch,inst_54668);
} else {
if((state_val_54689 === (13))){
var inst_54682 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
var statearr_54693_55945 = state_54688__$1;
(statearr_54693_55945[(2)] = inst_54682);

(statearr_54693_55945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (6))){
var inst_54673 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
if(cljs.core.truth_(inst_54673)){
var statearr_54694_55949 = state_54688__$1;
(statearr_54694_55949[(1)] = (8));

} else {
var statearr_54695_55950 = state_54688__$1;
(statearr_54695_55950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (3))){
var inst_54686 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54688__$1,inst_54686);
} else {
if((state_val_54689 === (12))){
var state_54688__$1 = state_54688;
var statearr_54696_55951 = state_54688__$1;
(statearr_54696_55951[(2)] = null);

(statearr_54696_55951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (2))){
var inst_54665 = (state_54688[(7)]);
var state_54688__$1 = state_54688;
if(cljs.core.truth_(inst_54665)){
var statearr_54697_55952 = state_54688__$1;
(statearr_54697_55952[(1)] = (4));

} else {
var statearr_54698_55953 = state_54688__$1;
(statearr_54698_55953[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (11))){
var inst_54679 = cljs.core.async.close_BANG_(ch);
var state_54688__$1 = state_54688;
var statearr_54699_55954 = state_54688__$1;
(statearr_54699_55954[(2)] = inst_54679);

(statearr_54699_55954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (9))){
var state_54688__$1 = state_54688;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54700_55955 = state_54688__$1;
(statearr_54700_55955[(1)] = (11));

} else {
var statearr_54701_55956 = state_54688__$1;
(statearr_54701_55956[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (5))){
var inst_54665 = (state_54688[(7)]);
var state_54688__$1 = state_54688;
var statearr_54702_55957 = state_54688__$1;
(statearr_54702_55957[(2)] = inst_54665);

(statearr_54702_55957[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (10))){
var inst_54684 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
var statearr_54703_55958 = state_54688__$1;
(statearr_54703_55958[(2)] = inst_54684);

(statearr_54703_55958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (8))){
var inst_54665 = (state_54688[(7)]);
var inst_54675 = cljs.core.next(inst_54665);
var inst_54665__$1 = inst_54675;
var state_54688__$1 = (function (){var statearr_54704 = state_54688;
(statearr_54704[(7)] = inst_54665__$1);

return statearr_54704;
})();
var statearr_54705_55959 = state_54688__$1;
(statearr_54705_55959[(2)] = null);

(statearr_54705_55959[(1)] = (2));


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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_54706 = [null,null,null,null,null,null,null,null];
(statearr_54706[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_54706[(1)] = (1));

return statearr_54706;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_54688){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54688);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54707){var ex__54031__auto__ = e54707;
var statearr_54708_55960 = state_54688;
(statearr_54708_55960[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54688[(4)]))){
var statearr_54709_55961 = state_54688;
(statearr_54709_55961[(1)] = cljs.core.first((state_54688[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55962 = state_54688;
state_54688 = G__55962;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_54688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_54688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54710 = f__54103__auto__();
(statearr_54710[(6)] = c__54102__auto__);

return statearr_54710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));

return c__54102__auto__;
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
var G__54712 = arguments.length;
switch (G__54712) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_55964 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_55964(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_55965 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_55965(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_55970 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_55970(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_55975 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_55975(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54713 = (function (ch,cs,meta54714){
this.ch = ch;
this.cs = cs;
this.meta54714 = meta54714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54715,meta54714__$1){
var self__ = this;
var _54715__$1 = this;
return (new cljs.core.async.t_cljs$core$async54713(self__.ch,self__.cs,meta54714__$1));
}));

(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54715){
var self__ = this;
var _54715__$1 = this;
return self__.meta54714;
}));

(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54713.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54714","meta54714",-169279789,null)], null);
}));

(cljs.core.async.t_cljs$core$async54713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54713");

(cljs.core.async.t_cljs$core$async54713.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54713.
 */
cljs.core.async.__GT_t_cljs$core$async54713 = (function cljs$core$async$__GT_t_cljs$core$async54713(ch,cs,meta54714){
return (new cljs.core.async.t_cljs$core$async54713(ch,cs,meta54714));
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
var m = (new cljs.core.async.t_cljs$core$async54713(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54102__auto___55980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_54848){
var state_val_54849 = (state_54848[(1)]);
if((state_val_54849 === (7))){
var inst_54844 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54850_55981 = state_54848__$1;
(statearr_54850_55981[(2)] = inst_54844);

(statearr_54850_55981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (20))){
var inst_54749 = (state_54848[(7)]);
var inst_54761 = cljs.core.first(inst_54749);
var inst_54762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54761,(0),null);
var inst_54763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54761,(1),null);
var state_54848__$1 = (function (){var statearr_54851 = state_54848;
(statearr_54851[(8)] = inst_54762);

return statearr_54851;
})();
if(cljs.core.truth_(inst_54763)){
var statearr_54852_55982 = state_54848__$1;
(statearr_54852_55982[(1)] = (22));

} else {
var statearr_54853_55983 = state_54848__$1;
(statearr_54853_55983[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (27))){
var inst_54791 = (state_54848[(9)]);
var inst_54793 = (state_54848[(10)]);
var inst_54798 = (state_54848[(11)]);
var inst_54718 = (state_54848[(12)]);
var inst_54798__$1 = cljs.core._nth(inst_54791,inst_54793);
var inst_54799 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54798__$1,inst_54718,done);
var state_54848__$1 = (function (){var statearr_54854 = state_54848;
(statearr_54854[(11)] = inst_54798__$1);

return statearr_54854;
})();
if(cljs.core.truth_(inst_54799)){
var statearr_54855_55984 = state_54848__$1;
(statearr_54855_55984[(1)] = (30));

} else {
var statearr_54856_55985 = state_54848__$1;
(statearr_54856_55985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (1))){
var state_54848__$1 = state_54848;
var statearr_54857_55986 = state_54848__$1;
(statearr_54857_55986[(2)] = null);

(statearr_54857_55986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (24))){
var inst_54749 = (state_54848[(7)]);
var inst_54768 = (state_54848[(2)]);
var inst_54769 = cljs.core.next(inst_54749);
var inst_54727 = inst_54769;
var inst_54728 = null;
var inst_54729 = (0);
var inst_54730 = (0);
var state_54848__$1 = (function (){var statearr_54858 = state_54848;
(statearr_54858[(13)] = inst_54768);

(statearr_54858[(14)] = inst_54727);

(statearr_54858[(15)] = inst_54728);

(statearr_54858[(16)] = inst_54729);

(statearr_54858[(17)] = inst_54730);

return statearr_54858;
})();
var statearr_54859_55987 = state_54848__$1;
(statearr_54859_55987[(2)] = null);

(statearr_54859_55987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (39))){
var state_54848__$1 = state_54848;
var statearr_54863_55988 = state_54848__$1;
(statearr_54863_55988[(2)] = null);

(statearr_54863_55988[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (4))){
var inst_54718 = (state_54848[(12)]);
var inst_54718__$1 = (state_54848[(2)]);
var inst_54719 = (inst_54718__$1 == null);
var state_54848__$1 = (function (){var statearr_54864 = state_54848;
(statearr_54864[(12)] = inst_54718__$1);

return statearr_54864;
})();
if(cljs.core.truth_(inst_54719)){
var statearr_54865_55989 = state_54848__$1;
(statearr_54865_55989[(1)] = (5));

} else {
var statearr_54866_55990 = state_54848__$1;
(statearr_54866_55990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (15))){
var inst_54730 = (state_54848[(17)]);
var inst_54727 = (state_54848[(14)]);
var inst_54728 = (state_54848[(15)]);
var inst_54729 = (state_54848[(16)]);
var inst_54745 = (state_54848[(2)]);
var inst_54746 = (inst_54730 + (1));
var tmp54860 = inst_54729;
var tmp54861 = inst_54727;
var tmp54862 = inst_54728;
var inst_54727__$1 = tmp54861;
var inst_54728__$1 = tmp54862;
var inst_54729__$1 = tmp54860;
var inst_54730__$1 = inst_54746;
var state_54848__$1 = (function (){var statearr_54867 = state_54848;
(statearr_54867[(18)] = inst_54745);

(statearr_54867[(14)] = inst_54727__$1);

(statearr_54867[(15)] = inst_54728__$1);

(statearr_54867[(16)] = inst_54729__$1);

(statearr_54867[(17)] = inst_54730__$1);

return statearr_54867;
})();
var statearr_54868_55991 = state_54848__$1;
(statearr_54868_55991[(2)] = null);

(statearr_54868_55991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (21))){
var inst_54772 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54872_55992 = state_54848__$1;
(statearr_54872_55992[(2)] = inst_54772);

(statearr_54872_55992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (31))){
var inst_54798 = (state_54848[(11)]);
var inst_54802 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54798);
var state_54848__$1 = state_54848;
var statearr_54873_55997 = state_54848__$1;
(statearr_54873_55997[(2)] = inst_54802);

(statearr_54873_55997[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (32))){
var inst_54793 = (state_54848[(10)]);
var inst_54790 = (state_54848[(19)]);
var inst_54791 = (state_54848[(9)]);
var inst_54792 = (state_54848[(20)]);
var inst_54804 = (state_54848[(2)]);
var inst_54805 = (inst_54793 + (1));
var tmp54869 = inst_54790;
var tmp54870 = inst_54791;
var tmp54871 = inst_54792;
var inst_54790__$1 = tmp54869;
var inst_54791__$1 = tmp54870;
var inst_54792__$1 = tmp54871;
var inst_54793__$1 = inst_54805;
var state_54848__$1 = (function (){var statearr_54874 = state_54848;
(statearr_54874[(21)] = inst_54804);

(statearr_54874[(19)] = inst_54790__$1);

(statearr_54874[(9)] = inst_54791__$1);

(statearr_54874[(20)] = inst_54792__$1);

(statearr_54874[(10)] = inst_54793__$1);

return statearr_54874;
})();
var statearr_54875_55999 = state_54848__$1;
(statearr_54875_55999[(2)] = null);

(statearr_54875_55999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (40))){
var inst_54817 = (state_54848[(22)]);
var inst_54821 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54817);
var state_54848__$1 = state_54848;
var statearr_54876_56000 = state_54848__$1;
(statearr_54876_56000[(2)] = inst_54821);

(statearr_54876_56000[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (33))){
var inst_54808 = (state_54848[(23)]);
var inst_54810 = cljs.core.chunked_seq_QMARK_(inst_54808);
var state_54848__$1 = state_54848;
if(inst_54810){
var statearr_54877_56002 = state_54848__$1;
(statearr_54877_56002[(1)] = (36));

} else {
var statearr_54878_56006 = state_54848__$1;
(statearr_54878_56006[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (13))){
var inst_54739 = (state_54848[(24)]);
var inst_54742 = cljs.core.async.close_BANG_(inst_54739);
var state_54848__$1 = state_54848;
var statearr_54879_56008 = state_54848__$1;
(statearr_54879_56008[(2)] = inst_54742);

(statearr_54879_56008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (22))){
var inst_54762 = (state_54848[(8)]);
var inst_54765 = cljs.core.async.close_BANG_(inst_54762);
var state_54848__$1 = state_54848;
var statearr_54880_56009 = state_54848__$1;
(statearr_54880_56009[(2)] = inst_54765);

(statearr_54880_56009[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (36))){
var inst_54808 = (state_54848[(23)]);
var inst_54812 = cljs.core.chunk_first(inst_54808);
var inst_54813 = cljs.core.chunk_rest(inst_54808);
var inst_54814 = cljs.core.count(inst_54812);
var inst_54790 = inst_54813;
var inst_54791 = inst_54812;
var inst_54792 = inst_54814;
var inst_54793 = (0);
var state_54848__$1 = (function (){var statearr_54881 = state_54848;
(statearr_54881[(19)] = inst_54790);

(statearr_54881[(9)] = inst_54791);

(statearr_54881[(20)] = inst_54792);

(statearr_54881[(10)] = inst_54793);

return statearr_54881;
})();
var statearr_54882_56010 = state_54848__$1;
(statearr_54882_56010[(2)] = null);

(statearr_54882_56010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (41))){
var inst_54808 = (state_54848[(23)]);
var inst_54823 = (state_54848[(2)]);
var inst_54824 = cljs.core.next(inst_54808);
var inst_54790 = inst_54824;
var inst_54791 = null;
var inst_54792 = (0);
var inst_54793 = (0);
var state_54848__$1 = (function (){var statearr_54883 = state_54848;
(statearr_54883[(25)] = inst_54823);

(statearr_54883[(19)] = inst_54790);

(statearr_54883[(9)] = inst_54791);

(statearr_54883[(20)] = inst_54792);

(statearr_54883[(10)] = inst_54793);

return statearr_54883;
})();
var statearr_54884_56011 = state_54848__$1;
(statearr_54884_56011[(2)] = null);

(statearr_54884_56011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (43))){
var state_54848__$1 = state_54848;
var statearr_54885_56012 = state_54848__$1;
(statearr_54885_56012[(2)] = null);

(statearr_54885_56012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (29))){
var inst_54832 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54886_56013 = state_54848__$1;
(statearr_54886_56013[(2)] = inst_54832);

(statearr_54886_56013[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (44))){
var inst_54841 = (state_54848[(2)]);
var state_54848__$1 = (function (){var statearr_54887 = state_54848;
(statearr_54887[(26)] = inst_54841);

return statearr_54887;
})();
var statearr_54888_56014 = state_54848__$1;
(statearr_54888_56014[(2)] = null);

(statearr_54888_56014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (6))){
var inst_54782 = (state_54848[(27)]);
var inst_54781 = cljs.core.deref(cs);
var inst_54782__$1 = cljs.core.keys(inst_54781);
var inst_54783 = cljs.core.count(inst_54782__$1);
var inst_54784 = cljs.core.reset_BANG_(dctr,inst_54783);
var inst_54789 = cljs.core.seq(inst_54782__$1);
var inst_54790 = inst_54789;
var inst_54791 = null;
var inst_54792 = (0);
var inst_54793 = (0);
var state_54848__$1 = (function (){var statearr_54889 = state_54848;
(statearr_54889[(27)] = inst_54782__$1);

(statearr_54889[(28)] = inst_54784);

(statearr_54889[(19)] = inst_54790);

(statearr_54889[(9)] = inst_54791);

(statearr_54889[(20)] = inst_54792);

(statearr_54889[(10)] = inst_54793);

return statearr_54889;
})();
var statearr_54890_56015 = state_54848__$1;
(statearr_54890_56015[(2)] = null);

(statearr_54890_56015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (28))){
var inst_54790 = (state_54848[(19)]);
var inst_54808 = (state_54848[(23)]);
var inst_54808__$1 = cljs.core.seq(inst_54790);
var state_54848__$1 = (function (){var statearr_54891 = state_54848;
(statearr_54891[(23)] = inst_54808__$1);

return statearr_54891;
})();
if(inst_54808__$1){
var statearr_54892_56016 = state_54848__$1;
(statearr_54892_56016[(1)] = (33));

} else {
var statearr_54893_56017 = state_54848__$1;
(statearr_54893_56017[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (25))){
var inst_54793 = (state_54848[(10)]);
var inst_54792 = (state_54848[(20)]);
var inst_54795 = (inst_54793 < inst_54792);
var inst_54796 = inst_54795;
var state_54848__$1 = state_54848;
if(cljs.core.truth_(inst_54796)){
var statearr_54894_56019 = state_54848__$1;
(statearr_54894_56019[(1)] = (27));

} else {
var statearr_54895_56023 = state_54848__$1;
(statearr_54895_56023[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (34))){
var state_54848__$1 = state_54848;
var statearr_54896_56024 = state_54848__$1;
(statearr_54896_56024[(2)] = null);

(statearr_54896_56024[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (17))){
var state_54848__$1 = state_54848;
var statearr_54897_56025 = state_54848__$1;
(statearr_54897_56025[(2)] = null);

(statearr_54897_56025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (3))){
var inst_54846 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54848__$1,inst_54846);
} else {
if((state_val_54849 === (12))){
var inst_54777 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54898_56026 = state_54848__$1;
(statearr_54898_56026[(2)] = inst_54777);

(statearr_54898_56026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (2))){
var state_54848__$1 = state_54848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54848__$1,(4),ch);
} else {
if((state_val_54849 === (23))){
var state_54848__$1 = state_54848;
var statearr_54899_56031 = state_54848__$1;
(statearr_54899_56031[(2)] = null);

(statearr_54899_56031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (35))){
var inst_54830 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54900_56032 = state_54848__$1;
(statearr_54900_56032[(2)] = inst_54830);

(statearr_54900_56032[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (19))){
var inst_54749 = (state_54848[(7)]);
var inst_54753 = cljs.core.chunk_first(inst_54749);
var inst_54754 = cljs.core.chunk_rest(inst_54749);
var inst_54755 = cljs.core.count(inst_54753);
var inst_54727 = inst_54754;
var inst_54728 = inst_54753;
var inst_54729 = inst_54755;
var inst_54730 = (0);
var state_54848__$1 = (function (){var statearr_54901 = state_54848;
(statearr_54901[(14)] = inst_54727);

(statearr_54901[(15)] = inst_54728);

(statearr_54901[(16)] = inst_54729);

(statearr_54901[(17)] = inst_54730);

return statearr_54901;
})();
var statearr_54902_56034 = state_54848__$1;
(statearr_54902_56034[(2)] = null);

(statearr_54902_56034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (11))){
var inst_54727 = (state_54848[(14)]);
var inst_54749 = (state_54848[(7)]);
var inst_54749__$1 = cljs.core.seq(inst_54727);
var state_54848__$1 = (function (){var statearr_54903 = state_54848;
(statearr_54903[(7)] = inst_54749__$1);

return statearr_54903;
})();
if(inst_54749__$1){
var statearr_54904_56038 = state_54848__$1;
(statearr_54904_56038[(1)] = (16));

} else {
var statearr_54905_56039 = state_54848__$1;
(statearr_54905_56039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (9))){
var inst_54779 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54906_56040 = state_54848__$1;
(statearr_54906_56040[(2)] = inst_54779);

(statearr_54906_56040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (5))){
var inst_54725 = cljs.core.deref(cs);
var inst_54726 = cljs.core.seq(inst_54725);
var inst_54727 = inst_54726;
var inst_54728 = null;
var inst_54729 = (0);
var inst_54730 = (0);
var state_54848__$1 = (function (){var statearr_54907 = state_54848;
(statearr_54907[(14)] = inst_54727);

(statearr_54907[(15)] = inst_54728);

(statearr_54907[(16)] = inst_54729);

(statearr_54907[(17)] = inst_54730);

return statearr_54907;
})();
var statearr_54908_56042 = state_54848__$1;
(statearr_54908_56042[(2)] = null);

(statearr_54908_56042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (14))){
var state_54848__$1 = state_54848;
var statearr_54909_56044 = state_54848__$1;
(statearr_54909_56044[(2)] = null);

(statearr_54909_56044[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (45))){
var inst_54838 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54910_56048 = state_54848__$1;
(statearr_54910_56048[(2)] = inst_54838);

(statearr_54910_56048[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (26))){
var inst_54782 = (state_54848[(27)]);
var inst_54834 = (state_54848[(2)]);
var inst_54835 = cljs.core.seq(inst_54782);
var state_54848__$1 = (function (){var statearr_54911 = state_54848;
(statearr_54911[(29)] = inst_54834);

return statearr_54911;
})();
if(inst_54835){
var statearr_54912_56049 = state_54848__$1;
(statearr_54912_56049[(1)] = (42));

} else {
var statearr_54913_56050 = state_54848__$1;
(statearr_54913_56050[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (16))){
var inst_54749 = (state_54848[(7)]);
var inst_54751 = cljs.core.chunked_seq_QMARK_(inst_54749);
var state_54848__$1 = state_54848;
if(inst_54751){
var statearr_54914_56055 = state_54848__$1;
(statearr_54914_56055[(1)] = (19));

} else {
var statearr_54915_56056 = state_54848__$1;
(statearr_54915_56056[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (38))){
var inst_54827 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54916_56057 = state_54848__$1;
(statearr_54916_56057[(2)] = inst_54827);

(statearr_54916_56057[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (30))){
var state_54848__$1 = state_54848;
var statearr_54917_56058 = state_54848__$1;
(statearr_54917_56058[(2)] = null);

(statearr_54917_56058[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (10))){
var inst_54728 = (state_54848[(15)]);
var inst_54730 = (state_54848[(17)]);
var inst_54738 = cljs.core._nth(inst_54728,inst_54730);
var inst_54739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54738,(0),null);
var inst_54740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54738,(1),null);
var state_54848__$1 = (function (){var statearr_54918 = state_54848;
(statearr_54918[(24)] = inst_54739);

return statearr_54918;
})();
if(cljs.core.truth_(inst_54740)){
var statearr_54919_56063 = state_54848__$1;
(statearr_54919_56063[(1)] = (13));

} else {
var statearr_54920_56064 = state_54848__$1;
(statearr_54920_56064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (18))){
var inst_54775 = (state_54848[(2)]);
var state_54848__$1 = state_54848;
var statearr_54921_56065 = state_54848__$1;
(statearr_54921_56065[(2)] = inst_54775);

(statearr_54921_56065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (42))){
var state_54848__$1 = state_54848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54848__$1,(45),dchan);
} else {
if((state_val_54849 === (37))){
var inst_54808 = (state_54848[(23)]);
var inst_54817 = (state_54848[(22)]);
var inst_54718 = (state_54848[(12)]);
var inst_54817__$1 = cljs.core.first(inst_54808);
var inst_54818 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54817__$1,inst_54718,done);
var state_54848__$1 = (function (){var statearr_54922 = state_54848;
(statearr_54922[(22)] = inst_54817__$1);

return statearr_54922;
})();
if(cljs.core.truth_(inst_54818)){
var statearr_54923_56066 = state_54848__$1;
(statearr_54923_56066[(1)] = (39));

} else {
var statearr_54924_56067 = state_54848__$1;
(statearr_54924_56067[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54849 === (8))){
var inst_54730 = (state_54848[(17)]);
var inst_54729 = (state_54848[(16)]);
var inst_54732 = (inst_54730 < inst_54729);
var inst_54733 = inst_54732;
var state_54848__$1 = state_54848;
if(cljs.core.truth_(inst_54733)){
var statearr_54925_56068 = state_54848__$1;
(statearr_54925_56068[(1)] = (10));

} else {
var statearr_54926_56069 = state_54848__$1;
(statearr_54926_56069[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54028__auto__ = null;
var cljs$core$async$mult_$_state_machine__54028__auto____0 = (function (){
var statearr_54927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54927[(0)] = cljs$core$async$mult_$_state_machine__54028__auto__);

(statearr_54927[(1)] = (1));

return statearr_54927;
});
var cljs$core$async$mult_$_state_machine__54028__auto____1 = (function (state_54848){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_54848);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e54928){var ex__54031__auto__ = e54928;
var statearr_54929_56074 = state_54848;
(statearr_54929_56074[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_54848[(4)]))){
var statearr_54930_56075 = state_54848;
(statearr_54930_56075[(1)] = cljs.core.first((state_54848[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56076 = state_54848;
state_54848 = G__56076;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54028__auto__ = function(state_54848){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54028__auto____1.call(this,state_54848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54028__auto____0;
cljs$core$async$mult_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54028__auto____1;
return cljs$core$async$mult_$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_54931 = f__54103__auto__();
(statearr_54931[(6)] = c__54102__auto___55980);

return statearr_54931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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
var G__54933 = arguments.length;
switch (G__54933) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56087 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56087(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56090 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56090(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56095 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56095(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56105 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56105(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56110 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56110(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56113 = arguments.length;
var i__5750__auto___56114 = (0);
while(true){
if((i__5750__auto___56114 < len__5749__auto___56113)){
args__5755__auto__.push((arguments[i__5750__auto___56114]));

var G__56115 = (i__5750__auto___56114 + (1));
i__5750__auto___56114 = G__56115;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__54938){
var map__54939 = p__54938;
var map__54939__$1 = cljs.core.__destructure_map(map__54939);
var opts = map__54939__$1;
var statearr_54940_56120 = state;
(statearr_54940_56120[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_54941_56121 = state;
(statearr_54941_56121[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_54942_56122 = state;
(statearr_54942_56122[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq54934){
var G__54935 = cljs.core.first(seq54934);
var seq54934__$1 = cljs.core.next(seq54934);
var G__54936 = cljs.core.first(seq54934__$1);
var seq54934__$2 = cljs.core.next(seq54934__$1);
var G__54937 = cljs.core.first(seq54934__$2);
var seq54934__$3 = cljs.core.next(seq54934__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54935,G__54936,G__54937,seq54934__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54943 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54944){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta54944 = meta54944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54945,meta54944__$1){
var self__ = this;
var _54945__$1 = this;
return (new cljs.core.async.t_cljs$core$async54943(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta54944__$1));
}));

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54945){
var self__ = this;
var _54945__$1 = this;
return self__.meta54944;
}));

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54943.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async54943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta54944","meta54944",-77053533,null)], null);
}));

(cljs.core.async.t_cljs$core$async54943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54943");

(cljs.core.async.t_cljs$core$async54943.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54943.
 */
cljs.core.async.__GT_t_cljs$core$async54943 = (function cljs$core$async$__GT_t_cljs$core$async54943(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54944){
return (new cljs.core.async.t_cljs$core$async54943(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta54944));
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
var m = (new cljs.core.async.t_cljs$core$async54943(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__54102__auto___56132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55013){
var state_val_55014 = (state_55013[(1)]);
if((state_val_55014 === (7))){
var inst_54973 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
if(cljs.core.truth_(inst_54973)){
var statearr_55015_56133 = state_55013__$1;
(statearr_55015_56133[(1)] = (8));

} else {
var statearr_55016_56134 = state_55013__$1;
(statearr_55016_56134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (20))){
var inst_54966 = (state_55013[(7)]);
var state_55013__$1 = state_55013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55013__$1,(23),out,inst_54966);
} else {
if((state_val_55014 === (1))){
var inst_54949 = calc_state();
var inst_54950 = cljs.core.__destructure_map(inst_54949);
var inst_54951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54950,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54950,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54950,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_54954 = inst_54949;
var state_55013__$1 = (function (){var statearr_55017 = state_55013;
(statearr_55017[(8)] = inst_54951);

(statearr_55017[(9)] = inst_54952);

(statearr_55017[(10)] = inst_54953);

(statearr_55017[(11)] = inst_54954);

return statearr_55017;
})();
var statearr_55018_56135 = state_55013__$1;
(statearr_55018_56135[(2)] = null);

(statearr_55018_56135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (24))){
var inst_54957 = (state_55013[(12)]);
var inst_54954 = inst_54957;
var state_55013__$1 = (function (){var statearr_55019 = state_55013;
(statearr_55019[(11)] = inst_54954);

return statearr_55019;
})();
var statearr_55020_56140 = state_55013__$1;
(statearr_55020_56140[(2)] = null);

(statearr_55020_56140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (4))){
var inst_54966 = (state_55013[(7)]);
var inst_54968 = (state_55013[(13)]);
var inst_54965 = (state_55013[(2)]);
var inst_54966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54965,(0),null);
var inst_54967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54965,(1),null);
var inst_54968__$1 = (inst_54966__$1 == null);
var state_55013__$1 = (function (){var statearr_55021 = state_55013;
(statearr_55021[(7)] = inst_54966__$1);

(statearr_55021[(14)] = inst_54967);

(statearr_55021[(13)] = inst_54968__$1);

return statearr_55021;
})();
if(cljs.core.truth_(inst_54968__$1)){
var statearr_55022_56141 = state_55013__$1;
(statearr_55022_56141[(1)] = (5));

} else {
var statearr_55023_56142 = state_55013__$1;
(statearr_55023_56142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (15))){
var inst_54958 = (state_55013[(15)]);
var inst_54987 = (state_55013[(16)]);
var inst_54987__$1 = cljs.core.empty_QMARK_(inst_54958);
var state_55013__$1 = (function (){var statearr_55024 = state_55013;
(statearr_55024[(16)] = inst_54987__$1);

return statearr_55024;
})();
if(inst_54987__$1){
var statearr_55025_56144 = state_55013__$1;
(statearr_55025_56144[(1)] = (17));

} else {
var statearr_55026_56145 = state_55013__$1;
(statearr_55026_56145[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (21))){
var inst_54957 = (state_55013[(12)]);
var inst_54954 = inst_54957;
var state_55013__$1 = (function (){var statearr_55027 = state_55013;
(statearr_55027[(11)] = inst_54954);

return statearr_55027;
})();
var statearr_55028_56146 = state_55013__$1;
(statearr_55028_56146[(2)] = null);

(statearr_55028_56146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (13))){
var inst_54980 = (state_55013[(2)]);
var inst_54981 = calc_state();
var inst_54954 = inst_54981;
var state_55013__$1 = (function (){var statearr_55029 = state_55013;
(statearr_55029[(17)] = inst_54980);

(statearr_55029[(11)] = inst_54954);

return statearr_55029;
})();
var statearr_55030_56148 = state_55013__$1;
(statearr_55030_56148[(2)] = null);

(statearr_55030_56148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (22))){
var inst_55007 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
var statearr_55031_56149 = state_55013__$1;
(statearr_55031_56149[(2)] = inst_55007);

(statearr_55031_56149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (6))){
var inst_54967 = (state_55013[(14)]);
var inst_54971 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_54967,change);
var state_55013__$1 = state_55013;
var statearr_55032_56150 = state_55013__$1;
(statearr_55032_56150[(2)] = inst_54971);

(statearr_55032_56150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (25))){
var state_55013__$1 = state_55013;
var statearr_55033_56155 = state_55013__$1;
(statearr_55033_56155[(2)] = null);

(statearr_55033_56155[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (17))){
var inst_54959 = (state_55013[(18)]);
var inst_54967 = (state_55013[(14)]);
var inst_54989 = (inst_54959.cljs$core$IFn$_invoke$arity$1 ? inst_54959.cljs$core$IFn$_invoke$arity$1(inst_54967) : inst_54959.call(null,inst_54967));
var inst_54990 = cljs.core.not(inst_54989);
var state_55013__$1 = state_55013;
var statearr_55034_56156 = state_55013__$1;
(statearr_55034_56156[(2)] = inst_54990);

(statearr_55034_56156[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (3))){
var inst_55011 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55013__$1,inst_55011);
} else {
if((state_val_55014 === (12))){
var state_55013__$1 = state_55013;
var statearr_55035_56157 = state_55013__$1;
(statearr_55035_56157[(2)] = null);

(statearr_55035_56157[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (2))){
var inst_54954 = (state_55013[(11)]);
var inst_54957 = (state_55013[(12)]);
var inst_54957__$1 = cljs.core.__destructure_map(inst_54954);
var inst_54958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54957__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_54959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54957__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_54960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54957__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55013__$1 = (function (){var statearr_55036 = state_55013;
(statearr_55036[(12)] = inst_54957__$1);

(statearr_55036[(15)] = inst_54958);

(statearr_55036[(18)] = inst_54959);

return statearr_55036;
})();
return cljs.core.async.ioc_alts_BANG_(state_55013__$1,(4),inst_54960);
} else {
if((state_val_55014 === (23))){
var inst_54998 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
if(cljs.core.truth_(inst_54998)){
var statearr_55037_56158 = state_55013__$1;
(statearr_55037_56158[(1)] = (24));

} else {
var statearr_55038_56159 = state_55013__$1;
(statearr_55038_56159[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (19))){
var inst_54993 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
var statearr_55039_56160 = state_55013__$1;
(statearr_55039_56160[(2)] = inst_54993);

(statearr_55039_56160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (11))){
var inst_54967 = (state_55013[(14)]);
var inst_54977 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_54967);
var state_55013__$1 = state_55013;
var statearr_55040_56161 = state_55013__$1;
(statearr_55040_56161[(2)] = inst_54977);

(statearr_55040_56161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (9))){
var inst_54958 = (state_55013[(15)]);
var inst_54967 = (state_55013[(14)]);
var inst_54984 = (state_55013[(19)]);
var inst_54984__$1 = (inst_54958.cljs$core$IFn$_invoke$arity$1 ? inst_54958.cljs$core$IFn$_invoke$arity$1(inst_54967) : inst_54958.call(null,inst_54967));
var state_55013__$1 = (function (){var statearr_55041 = state_55013;
(statearr_55041[(19)] = inst_54984__$1);

return statearr_55041;
})();
if(cljs.core.truth_(inst_54984__$1)){
var statearr_55042_56162 = state_55013__$1;
(statearr_55042_56162[(1)] = (14));

} else {
var statearr_55043_56163 = state_55013__$1;
(statearr_55043_56163[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (5))){
var inst_54968 = (state_55013[(13)]);
var state_55013__$1 = state_55013;
var statearr_55044_56168 = state_55013__$1;
(statearr_55044_56168[(2)] = inst_54968);

(statearr_55044_56168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (14))){
var inst_54984 = (state_55013[(19)]);
var state_55013__$1 = state_55013;
var statearr_55045_56169 = state_55013__$1;
(statearr_55045_56169[(2)] = inst_54984);

(statearr_55045_56169[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (26))){
var inst_55003 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
var statearr_55046_56170 = state_55013__$1;
(statearr_55046_56170[(2)] = inst_55003);

(statearr_55046_56170[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (16))){
var inst_54995 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
if(cljs.core.truth_(inst_54995)){
var statearr_55047_56171 = state_55013__$1;
(statearr_55047_56171[(1)] = (20));

} else {
var statearr_55048_56172 = state_55013__$1;
(statearr_55048_56172[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (10))){
var inst_55009 = (state_55013[(2)]);
var state_55013__$1 = state_55013;
var statearr_55049_56173 = state_55013__$1;
(statearr_55049_56173[(2)] = inst_55009);

(statearr_55049_56173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (18))){
var inst_54987 = (state_55013[(16)]);
var state_55013__$1 = state_55013;
var statearr_55050_56174 = state_55013__$1;
(statearr_55050_56174[(2)] = inst_54987);

(statearr_55050_56174[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55014 === (8))){
var inst_54966 = (state_55013[(7)]);
var inst_54975 = (inst_54966 == null);
var state_55013__$1 = state_55013;
if(cljs.core.truth_(inst_54975)){
var statearr_55051_56175 = state_55013__$1;
(statearr_55051_56175[(1)] = (11));

} else {
var statearr_55052_56176 = state_55013__$1;
(statearr_55052_56176[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54028__auto__ = null;
var cljs$core$async$mix_$_state_machine__54028__auto____0 = (function (){
var statearr_55053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55053[(0)] = cljs$core$async$mix_$_state_machine__54028__auto__);

(statearr_55053[(1)] = (1));

return statearr_55053;
});
var cljs$core$async$mix_$_state_machine__54028__auto____1 = (function (state_55013){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55013);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55054){var ex__54031__auto__ = e55054;
var statearr_55055_56181 = state_55013;
(statearr_55055_56181[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55013[(4)]))){
var statearr_55056_56182 = state_55013;
(statearr_55056_56182[(1)] = cljs.core.first((state_55013[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56183 = state_55013;
state_55013 = G__56183;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54028__auto__ = function(state_55013){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54028__auto____1.call(this,state_55013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54028__auto____0;
cljs$core$async$mix_$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54028__auto____1;
return cljs$core$async$mix_$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55057 = f__54103__auto__();
(statearr_55057[(6)] = c__54102__auto___56132);

return statearr_55057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56186 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56186(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56191 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56191(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56192 = (function() {
var G__56193 = null;
var G__56193__1 = (function (p){
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
var G__56193__2 = (function (p,v){
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
G__56193 = function(p,v){
switch(arguments.length){
case 1:
return G__56193__1.call(this,p);
case 2:
return G__56193__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56193.cljs$core$IFn$_invoke$arity$1 = G__56193__1;
G__56193.cljs$core$IFn$_invoke$arity$2 = G__56193__2;
return G__56193;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55059 = arguments.length;
switch (G__55059) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56192(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56192(p,v);
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
cljs.core.async.t_cljs$core$async55063 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55064){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55064 = meta55064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55065,meta55064__$1){
var self__ = this;
var _55065__$1 = this;
return (new cljs.core.async.t_cljs$core$async55063(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55064__$1));
}));

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55065){
var self__ = this;
var _55065__$1 = this;
return self__.meta55064;
}));

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55063.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55064","meta55064",-1993399469,null)], null);
}));

(cljs.core.async.t_cljs$core$async55063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55063");

(cljs.core.async.t_cljs$core$async55063.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55063.
 */
cljs.core.async.__GT_t_cljs$core$async55063 = (function cljs$core$async$__GT_t_cljs$core$async55063(ch,topic_fn,buf_fn,mults,ensure_mult,meta55064){
return (new cljs.core.async.t_cljs$core$async55063(ch,topic_fn,buf_fn,mults,ensure_mult,meta55064));
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
var G__55062 = arguments.length;
switch (G__55062) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55060_SHARP_){
if(cljs.core.truth_((p1__55060_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55060_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55060_SHARP_.call(null,topic)))){
return p1__55060_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55060_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async55063(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__54102__auto___56203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55137){
var state_val_55138 = (state_55137[(1)]);
if((state_val_55138 === (7))){
var inst_55133 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55139_56208 = state_55137__$1;
(statearr_55139_56208[(2)] = inst_55133);

(statearr_55139_56208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (20))){
var state_55137__$1 = state_55137;
var statearr_55140_56209 = state_55137__$1;
(statearr_55140_56209[(2)] = null);

(statearr_55140_56209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (1))){
var state_55137__$1 = state_55137;
var statearr_55141_56210 = state_55137__$1;
(statearr_55141_56210[(2)] = null);

(statearr_55141_56210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (24))){
var inst_55116 = (state_55137[(7)]);
var inst_55125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55116);
var state_55137__$1 = state_55137;
var statearr_55142_56211 = state_55137__$1;
(statearr_55142_56211[(2)] = inst_55125);

(statearr_55142_56211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (4))){
var inst_55068 = (state_55137[(8)]);
var inst_55068__$1 = (state_55137[(2)]);
var inst_55069 = (inst_55068__$1 == null);
var state_55137__$1 = (function (){var statearr_55143 = state_55137;
(statearr_55143[(8)] = inst_55068__$1);

return statearr_55143;
})();
if(cljs.core.truth_(inst_55069)){
var statearr_55144_56212 = state_55137__$1;
(statearr_55144_56212[(1)] = (5));

} else {
var statearr_55145_56213 = state_55137__$1;
(statearr_55145_56213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (15))){
var inst_55110 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55146_56214 = state_55137__$1;
(statearr_55146_56214[(2)] = inst_55110);

(statearr_55146_56214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (21))){
var inst_55130 = (state_55137[(2)]);
var state_55137__$1 = (function (){var statearr_55147 = state_55137;
(statearr_55147[(9)] = inst_55130);

return statearr_55147;
})();
var statearr_55148_56215 = state_55137__$1;
(statearr_55148_56215[(2)] = null);

(statearr_55148_56215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (13))){
var inst_55092 = (state_55137[(10)]);
var inst_55094 = cljs.core.chunked_seq_QMARK_(inst_55092);
var state_55137__$1 = state_55137;
if(inst_55094){
var statearr_55149_56216 = state_55137__$1;
(statearr_55149_56216[(1)] = (16));

} else {
var statearr_55150_56217 = state_55137__$1;
(statearr_55150_56217[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (22))){
var inst_55122 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
if(cljs.core.truth_(inst_55122)){
var statearr_55151_56218 = state_55137__$1;
(statearr_55151_56218[(1)] = (23));

} else {
var statearr_55152_56219 = state_55137__$1;
(statearr_55152_56219[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (6))){
var inst_55068 = (state_55137[(8)]);
var inst_55116 = (state_55137[(7)]);
var inst_55118 = (state_55137[(11)]);
var inst_55116__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55068) : topic_fn.call(null,inst_55068));
var inst_55117 = cljs.core.deref(mults);
var inst_55118__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55117,inst_55116__$1);
var state_55137__$1 = (function (){var statearr_55153 = state_55137;
(statearr_55153[(7)] = inst_55116__$1);

(statearr_55153[(11)] = inst_55118__$1);

return statearr_55153;
})();
if(cljs.core.truth_(inst_55118__$1)){
var statearr_55154_56224 = state_55137__$1;
(statearr_55154_56224[(1)] = (19));

} else {
var statearr_55155_56225 = state_55137__$1;
(statearr_55155_56225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (25))){
var inst_55127 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55156_56226 = state_55137__$1;
(statearr_55156_56226[(2)] = inst_55127);

(statearr_55156_56226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (17))){
var inst_55092 = (state_55137[(10)]);
var inst_55101 = cljs.core.first(inst_55092);
var inst_55102 = cljs.core.async.muxch_STAR_(inst_55101);
var inst_55103 = cljs.core.async.close_BANG_(inst_55102);
var inst_55104 = cljs.core.next(inst_55092);
var inst_55078 = inst_55104;
var inst_55079 = null;
var inst_55080 = (0);
var inst_55081 = (0);
var state_55137__$1 = (function (){var statearr_55157 = state_55137;
(statearr_55157[(12)] = inst_55103);

(statearr_55157[(13)] = inst_55078);

(statearr_55157[(14)] = inst_55079);

(statearr_55157[(15)] = inst_55080);

(statearr_55157[(16)] = inst_55081);

return statearr_55157;
})();
var statearr_55158_56227 = state_55137__$1;
(statearr_55158_56227[(2)] = null);

(statearr_55158_56227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (3))){
var inst_55135 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55137__$1,inst_55135);
} else {
if((state_val_55138 === (12))){
var inst_55112 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55159_56228 = state_55137__$1;
(statearr_55159_56228[(2)] = inst_55112);

(statearr_55159_56228[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (2))){
var state_55137__$1 = state_55137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55137__$1,(4),ch);
} else {
if((state_val_55138 === (23))){
var state_55137__$1 = state_55137;
var statearr_55160_56229 = state_55137__$1;
(statearr_55160_56229[(2)] = null);

(statearr_55160_56229[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (19))){
var inst_55118 = (state_55137[(11)]);
var inst_55068 = (state_55137[(8)]);
var inst_55120 = cljs.core.async.muxch_STAR_(inst_55118);
var state_55137__$1 = state_55137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55137__$1,(22),inst_55120,inst_55068);
} else {
if((state_val_55138 === (11))){
var inst_55078 = (state_55137[(13)]);
var inst_55092 = (state_55137[(10)]);
var inst_55092__$1 = cljs.core.seq(inst_55078);
var state_55137__$1 = (function (){var statearr_55161 = state_55137;
(statearr_55161[(10)] = inst_55092__$1);

return statearr_55161;
})();
if(inst_55092__$1){
var statearr_55162_56234 = state_55137__$1;
(statearr_55162_56234[(1)] = (13));

} else {
var statearr_55163_56235 = state_55137__$1;
(statearr_55163_56235[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (9))){
var inst_55114 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55164_56236 = state_55137__$1;
(statearr_55164_56236[(2)] = inst_55114);

(statearr_55164_56236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (5))){
var inst_55075 = cljs.core.deref(mults);
var inst_55076 = cljs.core.vals(inst_55075);
var inst_55077 = cljs.core.seq(inst_55076);
var inst_55078 = inst_55077;
var inst_55079 = null;
var inst_55080 = (0);
var inst_55081 = (0);
var state_55137__$1 = (function (){var statearr_55165 = state_55137;
(statearr_55165[(13)] = inst_55078);

(statearr_55165[(14)] = inst_55079);

(statearr_55165[(15)] = inst_55080);

(statearr_55165[(16)] = inst_55081);

return statearr_55165;
})();
var statearr_55166_56237 = state_55137__$1;
(statearr_55166_56237[(2)] = null);

(statearr_55166_56237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (14))){
var state_55137__$1 = state_55137;
var statearr_55170_56238 = state_55137__$1;
(statearr_55170_56238[(2)] = null);

(statearr_55170_56238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (16))){
var inst_55092 = (state_55137[(10)]);
var inst_55096 = cljs.core.chunk_first(inst_55092);
var inst_55097 = cljs.core.chunk_rest(inst_55092);
var inst_55098 = cljs.core.count(inst_55096);
var inst_55078 = inst_55097;
var inst_55079 = inst_55096;
var inst_55080 = inst_55098;
var inst_55081 = (0);
var state_55137__$1 = (function (){var statearr_55171 = state_55137;
(statearr_55171[(13)] = inst_55078);

(statearr_55171[(14)] = inst_55079);

(statearr_55171[(15)] = inst_55080);

(statearr_55171[(16)] = inst_55081);

return statearr_55171;
})();
var statearr_55172_56240 = state_55137__$1;
(statearr_55172_56240[(2)] = null);

(statearr_55172_56240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (10))){
var inst_55079 = (state_55137[(14)]);
var inst_55081 = (state_55137[(16)]);
var inst_55078 = (state_55137[(13)]);
var inst_55080 = (state_55137[(15)]);
var inst_55086 = cljs.core._nth(inst_55079,inst_55081);
var inst_55087 = cljs.core.async.muxch_STAR_(inst_55086);
var inst_55088 = cljs.core.async.close_BANG_(inst_55087);
var inst_55089 = (inst_55081 + (1));
var tmp55167 = inst_55079;
var tmp55168 = inst_55078;
var tmp55169 = inst_55080;
var inst_55078__$1 = tmp55168;
var inst_55079__$1 = tmp55167;
var inst_55080__$1 = tmp55169;
var inst_55081__$1 = inst_55089;
var state_55137__$1 = (function (){var statearr_55173 = state_55137;
(statearr_55173[(17)] = inst_55088);

(statearr_55173[(13)] = inst_55078__$1);

(statearr_55173[(14)] = inst_55079__$1);

(statearr_55173[(15)] = inst_55080__$1);

(statearr_55173[(16)] = inst_55081__$1);

return statearr_55173;
})();
var statearr_55174_56241 = state_55137__$1;
(statearr_55174_56241[(2)] = null);

(statearr_55174_56241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (18))){
var inst_55107 = (state_55137[(2)]);
var state_55137__$1 = state_55137;
var statearr_55175_56242 = state_55137__$1;
(statearr_55175_56242[(2)] = inst_55107);

(statearr_55175_56242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55138 === (8))){
var inst_55081 = (state_55137[(16)]);
var inst_55080 = (state_55137[(15)]);
var inst_55083 = (inst_55081 < inst_55080);
var inst_55084 = inst_55083;
var state_55137__$1 = state_55137;
if(cljs.core.truth_(inst_55084)){
var statearr_55176_56243 = state_55137__$1;
(statearr_55176_56243[(1)] = (10));

} else {
var statearr_55177_56244 = state_55137__$1;
(statearr_55177_56244[(1)] = (11));

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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55178 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55178[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55178[(1)] = (1));

return statearr_55178;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55137){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55137);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55179){var ex__54031__auto__ = e55179;
var statearr_55180_56247 = state_55137;
(statearr_55180_56247[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55137[(4)]))){
var statearr_55181_56248 = state_55137;
(statearr_55181_56248[(1)] = cljs.core.first((state_55137[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56249 = state_55137;
state_55137 = G__56249;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55182 = f__54103__auto__();
(statearr_55182[(6)] = c__54102__auto___56203);

return statearr_55182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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
var G__55184 = arguments.length;
switch (G__55184) {
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
var G__55186 = arguments.length;
switch (G__55186) {
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
var G__55188 = arguments.length;
switch (G__55188) {
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
var c__54102__auto___56254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55231){
var state_val_55232 = (state_55231[(1)]);
if((state_val_55232 === (7))){
var state_55231__$1 = state_55231;
var statearr_55233_56255 = state_55231__$1;
(statearr_55233_56255[(2)] = null);

(statearr_55233_56255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (1))){
var state_55231__$1 = state_55231;
var statearr_55234_56256 = state_55231__$1;
(statearr_55234_56256[(2)] = null);

(statearr_55234_56256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (4))){
var inst_55192 = (state_55231[(7)]);
var inst_55191 = (state_55231[(8)]);
var inst_55194 = (inst_55192 < inst_55191);
var state_55231__$1 = state_55231;
if(cljs.core.truth_(inst_55194)){
var statearr_55235_56257 = state_55231__$1;
(statearr_55235_56257[(1)] = (6));

} else {
var statearr_55236_56258 = state_55231__$1;
(statearr_55236_56258[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (15))){
var inst_55217 = (state_55231[(9)]);
var inst_55222 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55217);
var state_55231__$1 = state_55231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55231__$1,(17),out,inst_55222);
} else {
if((state_val_55232 === (13))){
var inst_55217 = (state_55231[(9)]);
var inst_55217__$1 = (state_55231[(2)]);
var inst_55218 = cljs.core.some(cljs.core.nil_QMARK_,inst_55217__$1);
var state_55231__$1 = (function (){var statearr_55237 = state_55231;
(statearr_55237[(9)] = inst_55217__$1);

return statearr_55237;
})();
if(cljs.core.truth_(inst_55218)){
var statearr_55238_56259 = state_55231__$1;
(statearr_55238_56259[(1)] = (14));

} else {
var statearr_55239_56260 = state_55231__$1;
(statearr_55239_56260[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (6))){
var state_55231__$1 = state_55231;
var statearr_55240_56261 = state_55231__$1;
(statearr_55240_56261[(2)] = null);

(statearr_55240_56261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (17))){
var inst_55224 = (state_55231[(2)]);
var state_55231__$1 = (function (){var statearr_55242 = state_55231;
(statearr_55242[(10)] = inst_55224);

return statearr_55242;
})();
var statearr_55243_56262 = state_55231__$1;
(statearr_55243_56262[(2)] = null);

(statearr_55243_56262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (3))){
var inst_55229 = (state_55231[(2)]);
var state_55231__$1 = state_55231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55231__$1,inst_55229);
} else {
if((state_val_55232 === (12))){
var _ = (function (){var statearr_55244 = state_55231;
(statearr_55244[(4)] = cljs.core.rest((state_55231[(4)])));

return statearr_55244;
})();
var state_55231__$1 = state_55231;
var ex55241 = (state_55231__$1[(2)]);
var statearr_55245_56263 = state_55231__$1;
(statearr_55245_56263[(5)] = ex55241);


if((ex55241 instanceof Object)){
var statearr_55246_56264 = state_55231__$1;
(statearr_55246_56264[(1)] = (11));

(statearr_55246_56264[(5)] = null);

} else {
throw ex55241;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (2))){
var inst_55190 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55191 = cnt;
var inst_55192 = (0);
var state_55231__$1 = (function (){var statearr_55247 = state_55231;
(statearr_55247[(11)] = inst_55190);

(statearr_55247[(8)] = inst_55191);

(statearr_55247[(7)] = inst_55192);

return statearr_55247;
})();
var statearr_55248_56265 = state_55231__$1;
(statearr_55248_56265[(2)] = null);

(statearr_55248_56265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (11))){
var inst_55196 = (state_55231[(2)]);
var inst_55197 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55231__$1 = (function (){var statearr_55249 = state_55231;
(statearr_55249[(12)] = inst_55196);

return statearr_55249;
})();
var statearr_55250_56267 = state_55231__$1;
(statearr_55250_56267[(2)] = inst_55197);

(statearr_55250_56267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (9))){
var inst_55192 = (state_55231[(7)]);
var _ = (function (){var statearr_55251 = state_55231;
(statearr_55251[(4)] = cljs.core.cons((12),(state_55231[(4)])));

return statearr_55251;
})();
var inst_55203 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55192) : chs__$1.call(null,inst_55192));
var inst_55204 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55192) : done.call(null,inst_55192));
var inst_55205 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55203,inst_55204);
var ___$1 = (function (){var statearr_55252 = state_55231;
(statearr_55252[(4)] = cljs.core.rest((state_55231[(4)])));

return statearr_55252;
})();
var state_55231__$1 = state_55231;
var statearr_55253_56268 = state_55231__$1;
(statearr_55253_56268[(2)] = inst_55205);

(statearr_55253_56268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (5))){
var inst_55215 = (state_55231[(2)]);
var state_55231__$1 = (function (){var statearr_55254 = state_55231;
(statearr_55254[(13)] = inst_55215);

return statearr_55254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55231__$1,(13),dchan);
} else {
if((state_val_55232 === (14))){
var inst_55220 = cljs.core.async.close_BANG_(out);
var state_55231__$1 = state_55231;
var statearr_55255_56269 = state_55231__$1;
(statearr_55255_56269[(2)] = inst_55220);

(statearr_55255_56269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (16))){
var inst_55227 = (state_55231[(2)]);
var state_55231__$1 = state_55231;
var statearr_55256_56270 = state_55231__$1;
(statearr_55256_56270[(2)] = inst_55227);

(statearr_55256_56270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (10))){
var inst_55192 = (state_55231[(7)]);
var inst_55208 = (state_55231[(2)]);
var inst_55209 = (inst_55192 + (1));
var inst_55192__$1 = inst_55209;
var state_55231__$1 = (function (){var statearr_55257 = state_55231;
(statearr_55257[(14)] = inst_55208);

(statearr_55257[(7)] = inst_55192__$1);

return statearr_55257;
})();
var statearr_55258_56275 = state_55231__$1;
(statearr_55258_56275[(2)] = null);

(statearr_55258_56275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55232 === (8))){
var inst_55213 = (state_55231[(2)]);
var state_55231__$1 = state_55231;
var statearr_55259_56276 = state_55231__$1;
(statearr_55259_56276[(2)] = inst_55213);

(statearr_55259_56276[(1)] = (5));


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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55260[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55260[(1)] = (1));

return statearr_55260;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55231){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55231);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55261){var ex__54031__auto__ = e55261;
var statearr_55262_56277 = state_55231;
(statearr_55262_56277[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55231[(4)]))){
var statearr_55263_56279 = state_55231;
(statearr_55263_56279[(1)] = cljs.core.first((state_55231[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56282 = state_55231;
state_55231 = G__56282;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55264 = f__54103__auto__();
(statearr_55264[(6)] = c__54102__auto___56254);

return statearr_55264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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
var G__55267 = arguments.length;
switch (G__55267) {
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
var c__54102__auto___56287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55299){
var state_val_55300 = (state_55299[(1)]);
if((state_val_55300 === (7))){
var inst_55278 = (state_55299[(7)]);
var inst_55279 = (state_55299[(8)]);
var inst_55278__$1 = (state_55299[(2)]);
var inst_55279__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55278__$1,(0),null);
var inst_55280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55278__$1,(1),null);
var inst_55281 = (inst_55279__$1 == null);
var state_55299__$1 = (function (){var statearr_55301 = state_55299;
(statearr_55301[(7)] = inst_55278__$1);

(statearr_55301[(8)] = inst_55279__$1);

(statearr_55301[(9)] = inst_55280);

return statearr_55301;
})();
if(cljs.core.truth_(inst_55281)){
var statearr_55302_56288 = state_55299__$1;
(statearr_55302_56288[(1)] = (8));

} else {
var statearr_55303_56289 = state_55299__$1;
(statearr_55303_56289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55300 === (1))){
var inst_55268 = cljs.core.vec(chs);
var inst_55269 = inst_55268;
var state_55299__$1 = (function (){var statearr_55304 = state_55299;
(statearr_55304[(10)] = inst_55269);

return statearr_55304;
})();
var statearr_55305_56290 = state_55299__$1;
(statearr_55305_56290[(2)] = null);

(statearr_55305_56290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55300 === (4))){
var inst_55269 = (state_55299[(10)]);
var state_55299__$1 = state_55299;
return cljs.core.async.ioc_alts_BANG_(state_55299__$1,(7),inst_55269);
} else {
if((state_val_55300 === (6))){
var inst_55295 = (state_55299[(2)]);
var state_55299__$1 = state_55299;
var statearr_55306_56291 = state_55299__$1;
(statearr_55306_56291[(2)] = inst_55295);

(statearr_55306_56291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55300 === (3))){
var inst_55297 = (state_55299[(2)]);
var state_55299__$1 = state_55299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55299__$1,inst_55297);
} else {
if((state_val_55300 === (2))){
var inst_55269 = (state_55299[(10)]);
var inst_55271 = cljs.core.count(inst_55269);
var inst_55272 = (inst_55271 > (0));
var state_55299__$1 = state_55299;
if(cljs.core.truth_(inst_55272)){
var statearr_55308_56293 = state_55299__$1;
(statearr_55308_56293[(1)] = (4));

} else {
var statearr_55309_56294 = state_55299__$1;
(statearr_55309_56294[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55300 === (11))){
var inst_55269 = (state_55299[(10)]);
var inst_55288 = (state_55299[(2)]);
var tmp55307 = inst_55269;
var inst_55269__$1 = tmp55307;
var state_55299__$1 = (function (){var statearr_55310 = state_55299;
(statearr_55310[(11)] = inst_55288);

(statearr_55310[(10)] = inst_55269__$1);

return statearr_55310;
})();
var statearr_55311_56295 = state_55299__$1;
(statearr_55311_56295[(2)] = null);

(statearr_55311_56295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55300 === (9))){
var inst_55279 = (state_55299[(8)]);
var state_55299__$1 = state_55299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55299__$1,(11),out,inst_55279);
} else {
if((state_val_55300 === (5))){
var inst_55293 = cljs.core.async.close_BANG_(out);
var state_55299__$1 = state_55299;
var statearr_55312_56296 = state_55299__$1;
(statearr_55312_56296[(2)] = inst_55293);

(statearr_55312_56296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55300 === (10))){
var inst_55291 = (state_55299[(2)]);
var state_55299__$1 = state_55299;
var statearr_55313_56297 = state_55299__$1;
(statearr_55313_56297[(2)] = inst_55291);

(statearr_55313_56297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55300 === (8))){
var inst_55269 = (state_55299[(10)]);
var inst_55278 = (state_55299[(7)]);
var inst_55279 = (state_55299[(8)]);
var inst_55280 = (state_55299[(9)]);
var inst_55283 = (function (){var cs = inst_55269;
var vec__55274 = inst_55278;
var v = inst_55279;
var c = inst_55280;
return (function (p1__55265_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55265_SHARP_);
});
})();
var inst_55284 = cljs.core.filterv(inst_55283,inst_55269);
var inst_55269__$1 = inst_55284;
var state_55299__$1 = (function (){var statearr_55314 = state_55299;
(statearr_55314[(10)] = inst_55269__$1);

return statearr_55314;
})();
var statearr_55315_56298 = state_55299__$1;
(statearr_55315_56298[(2)] = null);

(statearr_55315_56298[(1)] = (2));


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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55316 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55316[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55316[(1)] = (1));

return statearr_55316;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55299){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55299);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55317){var ex__54031__auto__ = e55317;
var statearr_55318_56299 = state_55299;
(statearr_55318_56299[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55299[(4)]))){
var statearr_55319_56300 = state_55299;
(statearr_55319_56300[(1)] = cljs.core.first((state_55299[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56301 = state_55299;
state_55299 = G__56301;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55320 = f__54103__auto__();
(statearr_55320[(6)] = c__54102__auto___56287);

return statearr_55320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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
var G__55322 = arguments.length;
switch (G__55322) {
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
var c__54102__auto___56303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55346){
var state_val_55347 = (state_55346[(1)]);
if((state_val_55347 === (7))){
var inst_55328 = (state_55346[(7)]);
var inst_55328__$1 = (state_55346[(2)]);
var inst_55329 = (inst_55328__$1 == null);
var inst_55330 = cljs.core.not(inst_55329);
var state_55346__$1 = (function (){var statearr_55348 = state_55346;
(statearr_55348[(7)] = inst_55328__$1);

return statearr_55348;
})();
if(inst_55330){
var statearr_55349_56304 = state_55346__$1;
(statearr_55349_56304[(1)] = (8));

} else {
var statearr_55350_56305 = state_55346__$1;
(statearr_55350_56305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (1))){
var inst_55323 = (0);
var state_55346__$1 = (function (){var statearr_55351 = state_55346;
(statearr_55351[(8)] = inst_55323);

return statearr_55351;
})();
var statearr_55352_56306 = state_55346__$1;
(statearr_55352_56306[(2)] = null);

(statearr_55352_56306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (4))){
var state_55346__$1 = state_55346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55346__$1,(7),ch);
} else {
if((state_val_55347 === (6))){
var inst_55341 = (state_55346[(2)]);
var state_55346__$1 = state_55346;
var statearr_55353_56307 = state_55346__$1;
(statearr_55353_56307[(2)] = inst_55341);

(statearr_55353_56307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (3))){
var inst_55343 = (state_55346[(2)]);
var inst_55344 = cljs.core.async.close_BANG_(out);
var state_55346__$1 = (function (){var statearr_55354 = state_55346;
(statearr_55354[(9)] = inst_55343);

return statearr_55354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55346__$1,inst_55344);
} else {
if((state_val_55347 === (2))){
var inst_55323 = (state_55346[(8)]);
var inst_55325 = (inst_55323 < n);
var state_55346__$1 = state_55346;
if(cljs.core.truth_(inst_55325)){
var statearr_55355_56310 = state_55346__$1;
(statearr_55355_56310[(1)] = (4));

} else {
var statearr_55356_56311 = state_55346__$1;
(statearr_55356_56311[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (11))){
var inst_55323 = (state_55346[(8)]);
var inst_55333 = (state_55346[(2)]);
var inst_55334 = (inst_55323 + (1));
var inst_55323__$1 = inst_55334;
var state_55346__$1 = (function (){var statearr_55357 = state_55346;
(statearr_55357[(10)] = inst_55333);

(statearr_55357[(8)] = inst_55323__$1);

return statearr_55357;
})();
var statearr_55358_56313 = state_55346__$1;
(statearr_55358_56313[(2)] = null);

(statearr_55358_56313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (9))){
var state_55346__$1 = state_55346;
var statearr_55359_56314 = state_55346__$1;
(statearr_55359_56314[(2)] = null);

(statearr_55359_56314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (5))){
var state_55346__$1 = state_55346;
var statearr_55360_56315 = state_55346__$1;
(statearr_55360_56315[(2)] = null);

(statearr_55360_56315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (10))){
var inst_55338 = (state_55346[(2)]);
var state_55346__$1 = state_55346;
var statearr_55361_56316 = state_55346__$1;
(statearr_55361_56316[(2)] = inst_55338);

(statearr_55361_56316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55347 === (8))){
var inst_55328 = (state_55346[(7)]);
var state_55346__$1 = state_55346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55346__$1,(11),out,inst_55328);
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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55362 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55362[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55362[(1)] = (1));

return statearr_55362;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55346){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55346);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55363){var ex__54031__auto__ = e55363;
var statearr_55364_56317 = state_55346;
(statearr_55364_56317[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55346[(4)]))){
var statearr_55365_56318 = state_55346;
(statearr_55365_56318[(1)] = cljs.core.first((state_55346[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56319 = state_55346;
state_55346 = G__56319;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55366 = f__54103__auto__();
(statearr_55366[(6)] = c__54102__auto___56303);

return statearr_55366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
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
cljs.core.async.t_cljs$core$async55371 = (function (f,ch,meta55369,_,fn1,meta55372){
this.f = f;
this.ch = ch;
this.meta55369 = meta55369;
this._ = _;
this.fn1 = fn1;
this.meta55372 = meta55372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55373,meta55372__$1){
var self__ = this;
var _55373__$1 = this;
return (new cljs.core.async.t_cljs$core$async55371(self__.f,self__.ch,self__.meta55369,self__._,self__.fn1,meta55372__$1));
}));

(cljs.core.async.t_cljs$core$async55371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55373){
var self__ = this;
var _55373__$1 = this;
return self__.meta55372;
}));

(cljs.core.async.t_cljs$core$async55371.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55371.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55367_SHARP_){
var G__55374 = (((p1__55367_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55367_SHARP_) : self__.f.call(null,p1__55367_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55374) : f1.call(null,G__55374));
});
}));

(cljs.core.async.t_cljs$core$async55371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55369","meta55369",2072072579,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55368","cljs.core.async/t_cljs$core$async55368",-1400969551,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55372","meta55372",-1405614056,null)], null);
}));

(cljs.core.async.t_cljs$core$async55371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55371");

(cljs.core.async.t_cljs$core$async55371.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55371.
 */
cljs.core.async.__GT_t_cljs$core$async55371 = (function cljs$core$async$__GT_t_cljs$core$async55371(f,ch,meta55369,_,fn1,meta55372){
return (new cljs.core.async.t_cljs$core$async55371(f,ch,meta55369,_,fn1,meta55372));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55368 = (function (f,ch,meta55369){
this.f = f;
this.ch = ch;
this.meta55369 = meta55369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55370,meta55369__$1){
var self__ = this;
var _55370__$1 = this;
return (new cljs.core.async.t_cljs$core$async55368(self__.f,self__.ch,meta55369__$1));
}));

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55370){
var self__ = this;
var _55370__$1 = this;
return self__.meta55369;
}));

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async55371(self__.f,self__.ch,self__.meta55369,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55375 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55375) : self__.f.call(null,G__55375));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55369","meta55369",2072072579,null)], null);
}));

(cljs.core.async.t_cljs$core$async55368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55368");

(cljs.core.async.t_cljs$core$async55368.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55368.
 */
cljs.core.async.__GT_t_cljs$core$async55368 = (function cljs$core$async$__GT_t_cljs$core$async55368(f,ch,meta55369){
return (new cljs.core.async.t_cljs$core$async55368(f,ch,meta55369));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55368(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55376 = (function (f,ch,meta55377){
this.f = f;
this.ch = ch;
this.meta55377 = meta55377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55378,meta55377__$1){
var self__ = this;
var _55378__$1 = this;
return (new cljs.core.async.t_cljs$core$async55376(self__.f,self__.ch,meta55377__$1));
}));

(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55378){
var self__ = this;
var _55378__$1 = this;
return self__.meta55377;
}));

(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55377","meta55377",-1873843328,null)], null);
}));

(cljs.core.async.t_cljs$core$async55376.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55376");

(cljs.core.async.t_cljs$core$async55376.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55376");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55376.
 */
cljs.core.async.__GT_t_cljs$core$async55376 = (function cljs$core$async$__GT_t_cljs$core$async55376(f,ch,meta55377){
return (new cljs.core.async.t_cljs$core$async55376(f,ch,meta55377));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55379 = (function (p,ch,meta55380){
this.p = p;
this.ch = ch;
this.meta55380 = meta55380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55381,meta55380__$1){
var self__ = this;
var _55381__$1 = this;
return (new cljs.core.async.t_cljs$core$async55379(self__.p,self__.ch,meta55380__$1));
}));

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55381){
var self__ = this;
var _55381__$1 = this;
return self__.meta55380;
}));

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55380","meta55380",418800505,null)], null);
}));

(cljs.core.async.t_cljs$core$async55379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55379");

(cljs.core.async.t_cljs$core$async55379.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55379.
 */
cljs.core.async.__GT_t_cljs$core$async55379 = (function cljs$core$async$__GT_t_cljs$core$async55379(p,ch,meta55380){
return (new cljs.core.async.t_cljs$core$async55379(p,ch,meta55380));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async55379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55383 = arguments.length;
switch (G__55383) {
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
var c__54102__auto___56331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55404){
var state_val_55405 = (state_55404[(1)]);
if((state_val_55405 === (7))){
var inst_55400 = (state_55404[(2)]);
var state_55404__$1 = state_55404;
var statearr_55406_56335 = state_55404__$1;
(statearr_55406_56335[(2)] = inst_55400);

(statearr_55406_56335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (1))){
var state_55404__$1 = state_55404;
var statearr_55407_56336 = state_55404__$1;
(statearr_55407_56336[(2)] = null);

(statearr_55407_56336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (4))){
var inst_55386 = (state_55404[(7)]);
var inst_55386__$1 = (state_55404[(2)]);
var inst_55387 = (inst_55386__$1 == null);
var state_55404__$1 = (function (){var statearr_55408 = state_55404;
(statearr_55408[(7)] = inst_55386__$1);

return statearr_55408;
})();
if(cljs.core.truth_(inst_55387)){
var statearr_55409_56338 = state_55404__$1;
(statearr_55409_56338[(1)] = (5));

} else {
var statearr_55410_56342 = state_55404__$1;
(statearr_55410_56342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (6))){
var inst_55386 = (state_55404[(7)]);
var inst_55391 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55386) : p.call(null,inst_55386));
var state_55404__$1 = state_55404;
if(cljs.core.truth_(inst_55391)){
var statearr_55411_56343 = state_55404__$1;
(statearr_55411_56343[(1)] = (8));

} else {
var statearr_55412_56344 = state_55404__$1;
(statearr_55412_56344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (3))){
var inst_55402 = (state_55404[(2)]);
var state_55404__$1 = state_55404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55404__$1,inst_55402);
} else {
if((state_val_55405 === (2))){
var state_55404__$1 = state_55404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55404__$1,(4),ch);
} else {
if((state_val_55405 === (11))){
var inst_55394 = (state_55404[(2)]);
var state_55404__$1 = state_55404;
var statearr_55413_56349 = state_55404__$1;
(statearr_55413_56349[(2)] = inst_55394);

(statearr_55413_56349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (9))){
var state_55404__$1 = state_55404;
var statearr_55414_56350 = state_55404__$1;
(statearr_55414_56350[(2)] = null);

(statearr_55414_56350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (5))){
var inst_55389 = cljs.core.async.close_BANG_(out);
var state_55404__$1 = state_55404;
var statearr_55415_56351 = state_55404__$1;
(statearr_55415_56351[(2)] = inst_55389);

(statearr_55415_56351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (10))){
var inst_55397 = (state_55404[(2)]);
var state_55404__$1 = (function (){var statearr_55416 = state_55404;
(statearr_55416[(8)] = inst_55397);

return statearr_55416;
})();
var statearr_55417_56356 = state_55404__$1;
(statearr_55417_56356[(2)] = null);

(statearr_55417_56356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55405 === (8))){
var inst_55386 = (state_55404[(7)]);
var state_55404__$1 = state_55404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55404__$1,(11),out,inst_55386);
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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55418 = [null,null,null,null,null,null,null,null,null];
(statearr_55418[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55418[(1)] = (1));

return statearr_55418;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55404){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55404);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55419){var ex__54031__auto__ = e55419;
var statearr_55420_56361 = state_55404;
(statearr_55420_56361[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55404[(4)]))){
var statearr_55421_56362 = state_55404;
(statearr_55421_56362[(1)] = cljs.core.first((state_55404[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56363 = state_55404;
state_55404 = G__56363;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55422 = f__54103__auto__();
(statearr_55422[(6)] = c__54102__auto___56331);

return statearr_55422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55424 = arguments.length;
switch (G__55424) {
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
var c__54102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55486){
var state_val_55487 = (state_55486[(1)]);
if((state_val_55487 === (7))){
var inst_55482 = (state_55486[(2)]);
var state_55486__$1 = state_55486;
var statearr_55488_56368 = state_55486__$1;
(statearr_55488_56368[(2)] = inst_55482);

(statearr_55488_56368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (20))){
var inst_55452 = (state_55486[(7)]);
var inst_55463 = (state_55486[(2)]);
var inst_55464 = cljs.core.next(inst_55452);
var inst_55438 = inst_55464;
var inst_55439 = null;
var inst_55440 = (0);
var inst_55441 = (0);
var state_55486__$1 = (function (){var statearr_55489 = state_55486;
(statearr_55489[(8)] = inst_55463);

(statearr_55489[(9)] = inst_55438);

(statearr_55489[(10)] = inst_55439);

(statearr_55489[(11)] = inst_55440);

(statearr_55489[(12)] = inst_55441);

return statearr_55489;
})();
var statearr_55490_56375 = state_55486__$1;
(statearr_55490_56375[(2)] = null);

(statearr_55490_56375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (1))){
var state_55486__$1 = state_55486;
var statearr_55491_56376 = state_55486__$1;
(statearr_55491_56376[(2)] = null);

(statearr_55491_56376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (4))){
var inst_55427 = (state_55486[(13)]);
var inst_55427__$1 = (state_55486[(2)]);
var inst_55428 = (inst_55427__$1 == null);
var state_55486__$1 = (function (){var statearr_55492 = state_55486;
(statearr_55492[(13)] = inst_55427__$1);

return statearr_55492;
})();
if(cljs.core.truth_(inst_55428)){
var statearr_55493_56378 = state_55486__$1;
(statearr_55493_56378[(1)] = (5));

} else {
var statearr_55494_56379 = state_55486__$1;
(statearr_55494_56379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (15))){
var state_55486__$1 = state_55486;
var statearr_55498_56380 = state_55486__$1;
(statearr_55498_56380[(2)] = null);

(statearr_55498_56380[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (21))){
var state_55486__$1 = state_55486;
var statearr_55499_56381 = state_55486__$1;
(statearr_55499_56381[(2)] = null);

(statearr_55499_56381[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (13))){
var inst_55441 = (state_55486[(12)]);
var inst_55438 = (state_55486[(9)]);
var inst_55439 = (state_55486[(10)]);
var inst_55440 = (state_55486[(11)]);
var inst_55448 = (state_55486[(2)]);
var inst_55449 = (inst_55441 + (1));
var tmp55495 = inst_55439;
var tmp55496 = inst_55438;
var tmp55497 = inst_55440;
var inst_55438__$1 = tmp55496;
var inst_55439__$1 = tmp55495;
var inst_55440__$1 = tmp55497;
var inst_55441__$1 = inst_55449;
var state_55486__$1 = (function (){var statearr_55500 = state_55486;
(statearr_55500[(14)] = inst_55448);

(statearr_55500[(9)] = inst_55438__$1);

(statearr_55500[(10)] = inst_55439__$1);

(statearr_55500[(11)] = inst_55440__$1);

(statearr_55500[(12)] = inst_55441__$1);

return statearr_55500;
})();
var statearr_55501_56386 = state_55486__$1;
(statearr_55501_56386[(2)] = null);

(statearr_55501_56386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (22))){
var state_55486__$1 = state_55486;
var statearr_55502_56387 = state_55486__$1;
(statearr_55502_56387[(2)] = null);

(statearr_55502_56387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (6))){
var inst_55427 = (state_55486[(13)]);
var inst_55436 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55427) : f.call(null,inst_55427));
var inst_55437 = cljs.core.seq(inst_55436);
var inst_55438 = inst_55437;
var inst_55439 = null;
var inst_55440 = (0);
var inst_55441 = (0);
var state_55486__$1 = (function (){var statearr_55503 = state_55486;
(statearr_55503[(9)] = inst_55438);

(statearr_55503[(10)] = inst_55439);

(statearr_55503[(11)] = inst_55440);

(statearr_55503[(12)] = inst_55441);

return statearr_55503;
})();
var statearr_55504_56388 = state_55486__$1;
(statearr_55504_56388[(2)] = null);

(statearr_55504_56388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (17))){
var inst_55452 = (state_55486[(7)]);
var inst_55456 = cljs.core.chunk_first(inst_55452);
var inst_55457 = cljs.core.chunk_rest(inst_55452);
var inst_55458 = cljs.core.count(inst_55456);
var inst_55438 = inst_55457;
var inst_55439 = inst_55456;
var inst_55440 = inst_55458;
var inst_55441 = (0);
var state_55486__$1 = (function (){var statearr_55505 = state_55486;
(statearr_55505[(9)] = inst_55438);

(statearr_55505[(10)] = inst_55439);

(statearr_55505[(11)] = inst_55440);

(statearr_55505[(12)] = inst_55441);

return statearr_55505;
})();
var statearr_55506_56390 = state_55486__$1;
(statearr_55506_56390[(2)] = null);

(statearr_55506_56390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (3))){
var inst_55484 = (state_55486[(2)]);
var state_55486__$1 = state_55486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55486__$1,inst_55484);
} else {
if((state_val_55487 === (12))){
var inst_55472 = (state_55486[(2)]);
var state_55486__$1 = state_55486;
var statearr_55507_56391 = state_55486__$1;
(statearr_55507_56391[(2)] = inst_55472);

(statearr_55507_56391[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (2))){
var state_55486__$1 = state_55486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55486__$1,(4),in$);
} else {
if((state_val_55487 === (23))){
var inst_55480 = (state_55486[(2)]);
var state_55486__$1 = state_55486;
var statearr_55508_56392 = state_55486__$1;
(statearr_55508_56392[(2)] = inst_55480);

(statearr_55508_56392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (19))){
var inst_55467 = (state_55486[(2)]);
var state_55486__$1 = state_55486;
var statearr_55509_56393 = state_55486__$1;
(statearr_55509_56393[(2)] = inst_55467);

(statearr_55509_56393[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (11))){
var inst_55438 = (state_55486[(9)]);
var inst_55452 = (state_55486[(7)]);
var inst_55452__$1 = cljs.core.seq(inst_55438);
var state_55486__$1 = (function (){var statearr_55510 = state_55486;
(statearr_55510[(7)] = inst_55452__$1);

return statearr_55510;
})();
if(inst_55452__$1){
var statearr_55511_56396 = state_55486__$1;
(statearr_55511_56396[(1)] = (14));

} else {
var statearr_55512_56398 = state_55486__$1;
(statearr_55512_56398[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (9))){
var inst_55474 = (state_55486[(2)]);
var inst_55475 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55486__$1 = (function (){var statearr_55513 = state_55486;
(statearr_55513[(15)] = inst_55474);

return statearr_55513;
})();
if(cljs.core.truth_(inst_55475)){
var statearr_55514_56400 = state_55486__$1;
(statearr_55514_56400[(1)] = (21));

} else {
var statearr_55515_56401 = state_55486__$1;
(statearr_55515_56401[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (5))){
var inst_55430 = cljs.core.async.close_BANG_(out);
var state_55486__$1 = state_55486;
var statearr_55516_56402 = state_55486__$1;
(statearr_55516_56402[(2)] = inst_55430);

(statearr_55516_56402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (14))){
var inst_55452 = (state_55486[(7)]);
var inst_55454 = cljs.core.chunked_seq_QMARK_(inst_55452);
var state_55486__$1 = state_55486;
if(inst_55454){
var statearr_55517_56403 = state_55486__$1;
(statearr_55517_56403[(1)] = (17));

} else {
var statearr_55518_56404 = state_55486__$1;
(statearr_55518_56404[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (16))){
var inst_55470 = (state_55486[(2)]);
var state_55486__$1 = state_55486;
var statearr_55519_56406 = state_55486__$1;
(statearr_55519_56406[(2)] = inst_55470);

(statearr_55519_56406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55487 === (10))){
var inst_55439 = (state_55486[(10)]);
var inst_55441 = (state_55486[(12)]);
var inst_55446 = cljs.core._nth(inst_55439,inst_55441);
var state_55486__$1 = state_55486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55486__$1,(13),out,inst_55446);
} else {
if((state_val_55487 === (18))){
var inst_55452 = (state_55486[(7)]);
var inst_55461 = cljs.core.first(inst_55452);
var state_55486__$1 = state_55486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55486__$1,(20),out,inst_55461);
} else {
if((state_val_55487 === (8))){
var inst_55441 = (state_55486[(12)]);
var inst_55440 = (state_55486[(11)]);
var inst_55443 = (inst_55441 < inst_55440);
var inst_55444 = inst_55443;
var state_55486__$1 = state_55486;
if(cljs.core.truth_(inst_55444)){
var statearr_55520_56410 = state_55486__$1;
(statearr_55520_56410[(1)] = (10));

} else {
var statearr_55521_56411 = state_55486__$1;
(statearr_55521_56411[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54028__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54028__auto____0 = (function (){
var statearr_55522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55522[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54028__auto__);

(statearr_55522[(1)] = (1));

return statearr_55522;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54028__auto____1 = (function (state_55486){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55486);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55523){var ex__54031__auto__ = e55523;
var statearr_55524_56414 = state_55486;
(statearr_55524_56414[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55486[(4)]))){
var statearr_55525_56415 = state_55486;
(statearr_55525_56415[(1)] = cljs.core.first((state_55486[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56417 = state_55486;
state_55486 = G__56417;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54028__auto__ = function(state_55486){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54028__auto____1.call(this,state_55486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54028__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54028__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55526 = f__54103__auto__();
(statearr_55526[(6)] = c__54102__auto__);

return statearr_55526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));

return c__54102__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55528 = arguments.length;
switch (G__55528) {
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
var G__55530 = arguments.length;
switch (G__55530) {
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
var G__55532 = arguments.length;
switch (G__55532) {
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
var c__54102__auto___56425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55556){
var state_val_55557 = (state_55556[(1)]);
if((state_val_55557 === (7))){
var inst_55551 = (state_55556[(2)]);
var state_55556__$1 = state_55556;
var statearr_55558_56426 = state_55556__$1;
(statearr_55558_56426[(2)] = inst_55551);

(statearr_55558_56426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55557 === (1))){
var inst_55533 = null;
var state_55556__$1 = (function (){var statearr_55559 = state_55556;
(statearr_55559[(7)] = inst_55533);

return statearr_55559;
})();
var statearr_55560_56427 = state_55556__$1;
(statearr_55560_56427[(2)] = null);

(statearr_55560_56427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55557 === (4))){
var inst_55536 = (state_55556[(8)]);
var inst_55536__$1 = (state_55556[(2)]);
var inst_55537 = (inst_55536__$1 == null);
var inst_55538 = cljs.core.not(inst_55537);
var state_55556__$1 = (function (){var statearr_55561 = state_55556;
(statearr_55561[(8)] = inst_55536__$1);

return statearr_55561;
})();
if(inst_55538){
var statearr_55562_56428 = state_55556__$1;
(statearr_55562_56428[(1)] = (5));

} else {
var statearr_55563_56429 = state_55556__$1;
(statearr_55563_56429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55557 === (6))){
var state_55556__$1 = state_55556;
var statearr_55564_56430 = state_55556__$1;
(statearr_55564_56430[(2)] = null);

(statearr_55564_56430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55557 === (3))){
var inst_55553 = (state_55556[(2)]);
var inst_55554 = cljs.core.async.close_BANG_(out);
var state_55556__$1 = (function (){var statearr_55565 = state_55556;
(statearr_55565[(9)] = inst_55553);

return statearr_55565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55556__$1,inst_55554);
} else {
if((state_val_55557 === (2))){
var state_55556__$1 = state_55556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55556__$1,(4),ch);
} else {
if((state_val_55557 === (11))){
var inst_55536 = (state_55556[(8)]);
var inst_55545 = (state_55556[(2)]);
var inst_55533 = inst_55536;
var state_55556__$1 = (function (){var statearr_55566 = state_55556;
(statearr_55566[(10)] = inst_55545);

(statearr_55566[(7)] = inst_55533);

return statearr_55566;
})();
var statearr_55567_56432 = state_55556__$1;
(statearr_55567_56432[(2)] = null);

(statearr_55567_56432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55557 === (9))){
var inst_55536 = (state_55556[(8)]);
var state_55556__$1 = state_55556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55556__$1,(11),out,inst_55536);
} else {
if((state_val_55557 === (5))){
var inst_55536 = (state_55556[(8)]);
var inst_55533 = (state_55556[(7)]);
var inst_55540 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55536,inst_55533);
var state_55556__$1 = state_55556;
if(inst_55540){
var statearr_55569_56433 = state_55556__$1;
(statearr_55569_56433[(1)] = (8));

} else {
var statearr_55570_56434 = state_55556__$1;
(statearr_55570_56434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55557 === (10))){
var inst_55548 = (state_55556[(2)]);
var state_55556__$1 = state_55556;
var statearr_55571_56435 = state_55556__$1;
(statearr_55571_56435[(2)] = inst_55548);

(statearr_55571_56435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55557 === (8))){
var inst_55533 = (state_55556[(7)]);
var tmp55568 = inst_55533;
var inst_55533__$1 = tmp55568;
var state_55556__$1 = (function (){var statearr_55572 = state_55556;
(statearr_55572[(7)] = inst_55533__$1);

return statearr_55572;
})();
var statearr_55573_56436 = state_55556__$1;
(statearr_55573_56436[(2)] = null);

(statearr_55573_56436[(1)] = (2));


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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55574 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55574[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55574[(1)] = (1));

return statearr_55574;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55556){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55556);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55575){var ex__54031__auto__ = e55575;
var statearr_55576_56437 = state_55556;
(statearr_55576_56437[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55556[(4)]))){
var statearr_55577_56438 = state_55556;
(statearr_55577_56438[(1)] = cljs.core.first((state_55556[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56440 = state_55556;
state_55556 = G__56440;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55578 = f__54103__auto__();
(statearr_55578[(6)] = c__54102__auto___56425);

return statearr_55578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55580 = arguments.length;
switch (G__55580) {
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
var c__54102__auto___56442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55618){
var state_val_55619 = (state_55618[(1)]);
if((state_val_55619 === (7))){
var inst_55614 = (state_55618[(2)]);
var state_55618__$1 = state_55618;
var statearr_55620_56443 = state_55618__$1;
(statearr_55620_56443[(2)] = inst_55614);

(statearr_55620_56443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (1))){
var inst_55581 = (new Array(n));
var inst_55582 = inst_55581;
var inst_55583 = (0);
var state_55618__$1 = (function (){var statearr_55621 = state_55618;
(statearr_55621[(7)] = inst_55582);

(statearr_55621[(8)] = inst_55583);

return statearr_55621;
})();
var statearr_55622_56444 = state_55618__$1;
(statearr_55622_56444[(2)] = null);

(statearr_55622_56444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (4))){
var inst_55586 = (state_55618[(9)]);
var inst_55586__$1 = (state_55618[(2)]);
var inst_55587 = (inst_55586__$1 == null);
var inst_55588 = cljs.core.not(inst_55587);
var state_55618__$1 = (function (){var statearr_55623 = state_55618;
(statearr_55623[(9)] = inst_55586__$1);

return statearr_55623;
})();
if(inst_55588){
var statearr_55624_56445 = state_55618__$1;
(statearr_55624_56445[(1)] = (5));

} else {
var statearr_55625_56446 = state_55618__$1;
(statearr_55625_56446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (15))){
var inst_55608 = (state_55618[(2)]);
var state_55618__$1 = state_55618;
var statearr_55626_56447 = state_55618__$1;
(statearr_55626_56447[(2)] = inst_55608);

(statearr_55626_56447[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (13))){
var state_55618__$1 = state_55618;
var statearr_55627_56448 = state_55618__$1;
(statearr_55627_56448[(2)] = null);

(statearr_55627_56448[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (6))){
var inst_55583 = (state_55618[(8)]);
var inst_55604 = (inst_55583 > (0));
var state_55618__$1 = state_55618;
if(cljs.core.truth_(inst_55604)){
var statearr_55628_56449 = state_55618__$1;
(statearr_55628_56449[(1)] = (12));

} else {
var statearr_55629_56450 = state_55618__$1;
(statearr_55629_56450[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (3))){
var inst_55616 = (state_55618[(2)]);
var state_55618__$1 = state_55618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55618__$1,inst_55616);
} else {
if((state_val_55619 === (12))){
var inst_55582 = (state_55618[(7)]);
var inst_55606 = cljs.core.vec(inst_55582);
var state_55618__$1 = state_55618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55618__$1,(15),out,inst_55606);
} else {
if((state_val_55619 === (2))){
var state_55618__$1 = state_55618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55618__$1,(4),ch);
} else {
if((state_val_55619 === (11))){
var inst_55598 = (state_55618[(2)]);
var inst_55599 = (new Array(n));
var inst_55582 = inst_55599;
var inst_55583 = (0);
var state_55618__$1 = (function (){var statearr_55630 = state_55618;
(statearr_55630[(10)] = inst_55598);

(statearr_55630[(7)] = inst_55582);

(statearr_55630[(8)] = inst_55583);

return statearr_55630;
})();
var statearr_55631_56456 = state_55618__$1;
(statearr_55631_56456[(2)] = null);

(statearr_55631_56456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (9))){
var inst_55582 = (state_55618[(7)]);
var inst_55596 = cljs.core.vec(inst_55582);
var state_55618__$1 = state_55618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55618__$1,(11),out,inst_55596);
} else {
if((state_val_55619 === (5))){
var inst_55582 = (state_55618[(7)]);
var inst_55583 = (state_55618[(8)]);
var inst_55586 = (state_55618[(9)]);
var inst_55591 = (state_55618[(11)]);
var inst_55590 = (inst_55582[inst_55583] = inst_55586);
var inst_55591__$1 = (inst_55583 + (1));
var inst_55592 = (inst_55591__$1 < n);
var state_55618__$1 = (function (){var statearr_55632 = state_55618;
(statearr_55632[(12)] = inst_55590);

(statearr_55632[(11)] = inst_55591__$1);

return statearr_55632;
})();
if(cljs.core.truth_(inst_55592)){
var statearr_55633_56458 = state_55618__$1;
(statearr_55633_56458[(1)] = (8));

} else {
var statearr_55634_56459 = state_55618__$1;
(statearr_55634_56459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (14))){
var inst_55611 = (state_55618[(2)]);
var inst_55612 = cljs.core.async.close_BANG_(out);
var state_55618__$1 = (function (){var statearr_55636 = state_55618;
(statearr_55636[(13)] = inst_55611);

return statearr_55636;
})();
var statearr_55637_56463 = state_55618__$1;
(statearr_55637_56463[(2)] = inst_55612);

(statearr_55637_56463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (10))){
var inst_55602 = (state_55618[(2)]);
var state_55618__$1 = state_55618;
var statearr_55638_56464 = state_55618__$1;
(statearr_55638_56464[(2)] = inst_55602);

(statearr_55638_56464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55619 === (8))){
var inst_55582 = (state_55618[(7)]);
var inst_55591 = (state_55618[(11)]);
var tmp55635 = inst_55582;
var inst_55582__$1 = tmp55635;
var inst_55583 = inst_55591;
var state_55618__$1 = (function (){var statearr_55639 = state_55618;
(statearr_55639[(7)] = inst_55582__$1);

(statearr_55639[(8)] = inst_55583);

return statearr_55639;
})();
var statearr_55640_56465 = state_55618__$1;
(statearr_55640_56465[(2)] = null);

(statearr_55640_56465[(1)] = (2));


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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55641[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55641[(1)] = (1));

return statearr_55641;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55618){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55618);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55642){var ex__54031__auto__ = e55642;
var statearr_55643_56470 = state_55618;
(statearr_55643_56470[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55618[(4)]))){
var statearr_55644_56471 = state_55618;
(statearr_55644_56471[(1)] = cljs.core.first((state_55618[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56472 = state_55618;
state_55618 = G__56472;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55645 = f__54103__auto__();
(statearr_55645[(6)] = c__54102__auto___56442);

return statearr_55645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55647 = arguments.length;
switch (G__55647) {
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
var c__54102__auto___56478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54103__auto__ = (function (){var switch__54027__auto__ = (function (state_55692){
var state_val_55693 = (state_55692[(1)]);
if((state_val_55693 === (7))){
var inst_55688 = (state_55692[(2)]);
var state_55692__$1 = state_55692;
var statearr_55694_56479 = state_55692__$1;
(statearr_55694_56479[(2)] = inst_55688);

(statearr_55694_56479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (1))){
var inst_55648 = [];
var inst_55649 = inst_55648;
var inst_55650 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55692__$1 = (function (){var statearr_55695 = state_55692;
(statearr_55695[(7)] = inst_55649);

(statearr_55695[(8)] = inst_55650);

return statearr_55695;
})();
var statearr_55696_56482 = state_55692__$1;
(statearr_55696_56482[(2)] = null);

(statearr_55696_56482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (4))){
var inst_55653 = (state_55692[(9)]);
var inst_55653__$1 = (state_55692[(2)]);
var inst_55654 = (inst_55653__$1 == null);
var inst_55655 = cljs.core.not(inst_55654);
var state_55692__$1 = (function (){var statearr_55697 = state_55692;
(statearr_55697[(9)] = inst_55653__$1);

return statearr_55697;
})();
if(inst_55655){
var statearr_55698_56484 = state_55692__$1;
(statearr_55698_56484[(1)] = (5));

} else {
var statearr_55699_56485 = state_55692__$1;
(statearr_55699_56485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (15))){
var inst_55649 = (state_55692[(7)]);
var inst_55680 = cljs.core.vec(inst_55649);
var state_55692__$1 = state_55692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55692__$1,(18),out,inst_55680);
} else {
if((state_val_55693 === (13))){
var inst_55675 = (state_55692[(2)]);
var state_55692__$1 = state_55692;
var statearr_55700_56490 = state_55692__$1;
(statearr_55700_56490[(2)] = inst_55675);

(statearr_55700_56490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (6))){
var inst_55649 = (state_55692[(7)]);
var inst_55677 = inst_55649.length;
var inst_55678 = (inst_55677 > (0));
var state_55692__$1 = state_55692;
if(cljs.core.truth_(inst_55678)){
var statearr_55701_56491 = state_55692__$1;
(statearr_55701_56491[(1)] = (15));

} else {
var statearr_55702_56492 = state_55692__$1;
(statearr_55702_56492[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (17))){
var inst_55685 = (state_55692[(2)]);
var inst_55686 = cljs.core.async.close_BANG_(out);
var state_55692__$1 = (function (){var statearr_55703 = state_55692;
(statearr_55703[(10)] = inst_55685);

return statearr_55703;
})();
var statearr_55704_56493 = state_55692__$1;
(statearr_55704_56493[(2)] = inst_55686);

(statearr_55704_56493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (3))){
var inst_55690 = (state_55692[(2)]);
var state_55692__$1 = state_55692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55692__$1,inst_55690);
} else {
if((state_val_55693 === (12))){
var inst_55649 = (state_55692[(7)]);
var inst_55668 = cljs.core.vec(inst_55649);
var state_55692__$1 = state_55692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55692__$1,(14),out,inst_55668);
} else {
if((state_val_55693 === (2))){
var state_55692__$1 = state_55692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55692__$1,(4),ch);
} else {
if((state_val_55693 === (11))){
var inst_55649 = (state_55692[(7)]);
var inst_55653 = (state_55692[(9)]);
var inst_55657 = (state_55692[(11)]);
var inst_55665 = inst_55649.push(inst_55653);
var tmp55705 = inst_55649;
var inst_55649__$1 = tmp55705;
var inst_55650 = inst_55657;
var state_55692__$1 = (function (){var statearr_55706 = state_55692;
(statearr_55706[(12)] = inst_55665);

(statearr_55706[(7)] = inst_55649__$1);

(statearr_55706[(8)] = inst_55650);

return statearr_55706;
})();
var statearr_55707_56498 = state_55692__$1;
(statearr_55707_56498[(2)] = null);

(statearr_55707_56498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (9))){
var inst_55650 = (state_55692[(8)]);
var inst_55661 = cljs.core.keyword_identical_QMARK_(inst_55650,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_55692__$1 = state_55692;
var statearr_55708_56499 = state_55692__$1;
(statearr_55708_56499[(2)] = inst_55661);

(statearr_55708_56499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (5))){
var inst_55653 = (state_55692[(9)]);
var inst_55657 = (state_55692[(11)]);
var inst_55650 = (state_55692[(8)]);
var inst_55658 = (state_55692[(13)]);
var inst_55657__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55653) : f.call(null,inst_55653));
var inst_55658__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55657__$1,inst_55650);
var state_55692__$1 = (function (){var statearr_55709 = state_55692;
(statearr_55709[(11)] = inst_55657__$1);

(statearr_55709[(13)] = inst_55658__$1);

return statearr_55709;
})();
if(inst_55658__$1){
var statearr_55710_56504 = state_55692__$1;
(statearr_55710_56504[(1)] = (8));

} else {
var statearr_55711_56505 = state_55692__$1;
(statearr_55711_56505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (14))){
var inst_55653 = (state_55692[(9)]);
var inst_55657 = (state_55692[(11)]);
var inst_55670 = (state_55692[(2)]);
var inst_55671 = [];
var inst_55672 = inst_55671.push(inst_55653);
var inst_55649 = inst_55671;
var inst_55650 = inst_55657;
var state_55692__$1 = (function (){var statearr_55712 = state_55692;
(statearr_55712[(14)] = inst_55670);

(statearr_55712[(15)] = inst_55672);

(statearr_55712[(7)] = inst_55649);

(statearr_55712[(8)] = inst_55650);

return statearr_55712;
})();
var statearr_55713_56506 = state_55692__$1;
(statearr_55713_56506[(2)] = null);

(statearr_55713_56506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (16))){
var state_55692__$1 = state_55692;
var statearr_55714_56507 = state_55692__$1;
(statearr_55714_56507[(2)] = null);

(statearr_55714_56507[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (10))){
var inst_55663 = (state_55692[(2)]);
var state_55692__$1 = state_55692;
if(cljs.core.truth_(inst_55663)){
var statearr_55715_56508 = state_55692__$1;
(statearr_55715_56508[(1)] = (11));

} else {
var statearr_55716_56509 = state_55692__$1;
(statearr_55716_56509[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (18))){
var inst_55682 = (state_55692[(2)]);
var state_55692__$1 = state_55692;
var statearr_55717_56510 = state_55692__$1;
(statearr_55717_56510[(2)] = inst_55682);

(statearr_55717_56510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55693 === (8))){
var inst_55658 = (state_55692[(13)]);
var state_55692__$1 = state_55692;
var statearr_55718_56511 = state_55692__$1;
(statearr_55718_56511[(2)] = inst_55658);

(statearr_55718_56511[(1)] = (10));


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
var cljs$core$async$state_machine__54028__auto__ = null;
var cljs$core$async$state_machine__54028__auto____0 = (function (){
var statearr_55719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55719[(0)] = cljs$core$async$state_machine__54028__auto__);

(statearr_55719[(1)] = (1));

return statearr_55719;
});
var cljs$core$async$state_machine__54028__auto____1 = (function (state_55692){
while(true){
var ret_value__54029__auto__ = (function (){try{while(true){
var result__54030__auto__ = switch__54027__auto__(state_55692);
if(cljs.core.keyword_identical_QMARK_(result__54030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54030__auto__;
}
break;
}
}catch (e55720){var ex__54031__auto__ = e55720;
var statearr_55721_56515 = state_55692;
(statearr_55721_56515[(2)] = ex__54031__auto__);


if(cljs.core.seq((state_55692[(4)]))){
var statearr_55722_56517 = state_55692;
(statearr_55722_56517[(1)] = cljs.core.first((state_55692[(4)])));

} else {
throw ex__54031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56518 = state_55692;
state_55692 = G__56518;
continue;
} else {
return ret_value__54029__auto__;
}
break;
}
});
cljs$core$async$state_machine__54028__auto__ = function(state_55692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54028__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54028__auto____1.call(this,state_55692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54028__auto____0;
cljs$core$async$state_machine__54028__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54028__auto____1;
return cljs$core$async$state_machine__54028__auto__;
})()
})();
var state__54104__auto__ = (function (){var statearr_55723 = f__54103__auto__();
(statearr_55723[(6)] = c__54102__auto___56478);

return statearr_55723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54104__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
