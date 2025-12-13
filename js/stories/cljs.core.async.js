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
cljs.core.async.t_cljs$core$async54249 = (function (f,blockable,meta54250){
this.f = f;
this.blockable = blockable;
this.meta54250 = meta54250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54251,meta54250__$1){
var self__ = this;
var _54251__$1 = this;
return (new cljs.core.async.t_cljs$core$async54249(self__.f,self__.blockable,meta54250__$1));
}));

(cljs.core.async.t_cljs$core$async54249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54251){
var self__ = this;
var _54251__$1 = this;
return self__.meta54250;
}));

(cljs.core.async.t_cljs$core$async54249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54250","meta54250",1854745793,null)], null);
}));

(cljs.core.async.t_cljs$core$async54249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54249");

(cljs.core.async.t_cljs$core$async54249.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54249.
 */
cljs.core.async.__GT_t_cljs$core$async54249 = (function cljs$core$async$__GT_t_cljs$core$async54249(f,blockable,meta54250){
return (new cljs.core.async.t_cljs$core$async54249(f,blockable,meta54250));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54248 = arguments.length;
switch (G__54248) {
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
return (new cljs.core.async.t_cljs$core$async54249(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54256 = arguments.length;
switch (G__54256) {
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
var G__54258 = arguments.length;
switch (G__54258) {
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
var G__54264 = arguments.length;
switch (G__54264) {
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
var val_55832 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55832) : fn1.call(null,val_55832));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_55832) : fn1.call(null,val_55832));
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
var G__54266 = arguments.length;
switch (G__54266) {
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
var n__5616__auto___55834 = n;
var x_55835 = (0);
while(true){
if((x_55835 < n__5616__auto___55834)){
(a[x_55835] = x_55835);

var G__55836 = (x_55835 + (1));
x_55835 = G__55836;
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
cljs.core.async.t_cljs$core$async54268 = (function (flag,meta54269){
this.flag = flag;
this.meta54269 = meta54269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54270,meta54269__$1){
var self__ = this;
var _54270__$1 = this;
return (new cljs.core.async.t_cljs$core$async54268(self__.flag,meta54269__$1));
}));

(cljs.core.async.t_cljs$core$async54268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54270){
var self__ = this;
var _54270__$1 = this;
return self__.meta54269;
}));

(cljs.core.async.t_cljs$core$async54268.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54268.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54268.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54268.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54269","meta54269",-171477491,null)], null);
}));

(cljs.core.async.t_cljs$core$async54268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54268");

(cljs.core.async.t_cljs$core$async54268.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54268.
 */
cljs.core.async.__GT_t_cljs$core$async54268 = (function cljs$core$async$__GT_t_cljs$core$async54268(flag,meta54269){
return (new cljs.core.async.t_cljs$core$async54268(flag,meta54269));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async54268(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54274 = (function (flag,cb,meta54275){
this.flag = flag;
this.cb = cb;
this.meta54275 = meta54275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54276,meta54275__$1){
var self__ = this;
var _54276__$1 = this;
return (new cljs.core.async.t_cljs$core$async54274(self__.flag,self__.cb,meta54275__$1));
}));

(cljs.core.async.t_cljs$core$async54274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54276){
var self__ = this;
var _54276__$1 = this;
return self__.meta54275;
}));

(cljs.core.async.t_cljs$core$async54274.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54274.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54275","meta54275",-538230990,null)], null);
}));

(cljs.core.async.t_cljs$core$async54274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54274");

(cljs.core.async.t_cljs$core$async54274.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54274.
 */
cljs.core.async.__GT_t_cljs$core$async54274 = (function cljs$core$async$__GT_t_cljs$core$async54274(flag,cb,meta54275){
return (new cljs.core.async.t_cljs$core$async54274(flag,cb,meta54275));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async54274(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_55837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_55837)){
if((!(((port_55837.cljs$core$IFn$_invoke$arity$1 ? port_55837.cljs$core$IFn$_invoke$arity$1((1)) : port_55837.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__55838 = (i + (1));
i = G__55838;
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
return (function (p1__54277_SHARP_){
var G__54283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54277_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54283) : fret.call(null,G__54283));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__54278_SHARP_){
var G__54284 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54278_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54284) : fret.call(null,G__54284));
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
var G__55839 = (i + (1));
i = G__55839;
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
var len__5749__auto___55840 = arguments.length;
var i__5750__auto___55841 = (0);
while(true){
if((i__5750__auto___55841 < len__5749__auto___55840)){
args__5755__auto__.push((arguments[i__5750__auto___55841]));

var G__55842 = (i__5750__auto___55841 + (1));
i__5750__auto___55841 = G__55842;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54288){
var map__54289 = p__54288;
var map__54289__$1 = cljs.core.__destructure_map(map__54289);
var opts = map__54289__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54285){
var G__54286 = cljs.core.first(seq54285);
var seq54285__$1 = cljs.core.next(seq54285);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54286,seq54285__$1);
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
var G__54292 = arguments.length;
switch (G__54292) {
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
var c__54186__auto___55844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54339){
var state_val_54340 = (state_54339[(1)]);
if((state_val_54340 === (7))){
var inst_54332 = (state_54339[(2)]);
var state_54339__$1 = state_54339;
var statearr_54341_55845 = state_54339__$1;
(statearr_54341_55845[(2)] = inst_54332);

(statearr_54341_55845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (1))){
var state_54339__$1 = state_54339;
var statearr_54342_55846 = state_54339__$1;
(statearr_54342_55846[(2)] = null);

(statearr_54342_55846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (4))){
var inst_54313 = (state_54339[(7)]);
var inst_54313__$1 = (state_54339[(2)]);
var inst_54314 = (inst_54313__$1 == null);
var state_54339__$1 = (function (){var statearr_54343 = state_54339;
(statearr_54343[(7)] = inst_54313__$1);

return statearr_54343;
})();
if(cljs.core.truth_(inst_54314)){
var statearr_54344_55847 = state_54339__$1;
(statearr_54344_55847[(1)] = (5));

} else {
var statearr_54345_55848 = state_54339__$1;
(statearr_54345_55848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (13))){
var state_54339__$1 = state_54339;
var statearr_54346_55849 = state_54339__$1;
(statearr_54346_55849[(2)] = null);

(statearr_54346_55849[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (6))){
var inst_54313 = (state_54339[(7)]);
var state_54339__$1 = state_54339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54339__$1,(11),to,inst_54313);
} else {
if((state_val_54340 === (3))){
var inst_54334 = (state_54339[(2)]);
var state_54339__$1 = state_54339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54339__$1,inst_54334);
} else {
if((state_val_54340 === (12))){
var state_54339__$1 = state_54339;
var statearr_54347_55850 = state_54339__$1;
(statearr_54347_55850[(2)] = null);

(statearr_54347_55850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (2))){
var state_54339__$1 = state_54339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54339__$1,(4),from);
} else {
if((state_val_54340 === (11))){
var inst_54324 = (state_54339[(2)]);
var state_54339__$1 = state_54339;
if(cljs.core.truth_(inst_54324)){
var statearr_54348_55851 = state_54339__$1;
(statearr_54348_55851[(1)] = (12));

} else {
var statearr_54349_55852 = state_54339__$1;
(statearr_54349_55852[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (9))){
var state_54339__$1 = state_54339;
var statearr_54350_55853 = state_54339__$1;
(statearr_54350_55853[(2)] = null);

(statearr_54350_55853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (5))){
var state_54339__$1 = state_54339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54351_55854 = state_54339__$1;
(statearr_54351_55854[(1)] = (8));

} else {
var statearr_54352_55855 = state_54339__$1;
(statearr_54352_55855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (14))){
var inst_54330 = (state_54339[(2)]);
var state_54339__$1 = state_54339;
var statearr_54353_55856 = state_54339__$1;
(statearr_54353_55856[(2)] = inst_54330);

(statearr_54353_55856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (10))){
var inst_54321 = (state_54339[(2)]);
var state_54339__$1 = state_54339;
var statearr_54354_55857 = state_54339__$1;
(statearr_54354_55857[(2)] = inst_54321);

(statearr_54354_55857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54340 === (8))){
var inst_54317 = cljs.core.async.close_BANG_(to);
var state_54339__$1 = state_54339;
var statearr_54355_55858 = state_54339__$1;
(statearr_54355_55858[(2)] = inst_54317);

(statearr_54355_55858[(1)] = (10));


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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_54356 = [null,null,null,null,null,null,null,null];
(statearr_54356[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_54356[(1)] = (1));

return statearr_54356;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_54339){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54339);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54357){var ex__54119__auto__ = e54357;
var statearr_54358_55859 = state_54339;
(statearr_54358_55859[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54339[(4)]))){
var statearr_54359_55860 = state_54339;
(statearr_54359_55860[(1)] = cljs.core.first((state_54339[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55861 = state_54339;
state_54339 = G__55861;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_54339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_54339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54360 = f__54187__auto__();
(statearr_54360[(6)] = c__54186__auto___55844);

return statearr_54360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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
var process__$1 = (function (p__54362){
var vec__54363 = p__54362;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54363,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54363,(1),null);
var job = vec__54363;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54186__auto___55862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54370){
var state_val_54371 = (state_54370[(1)]);
if((state_val_54371 === (1))){
var state_54370__$1 = state_54370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54370__$1,(2),res,v);
} else {
if((state_val_54371 === (2))){
var inst_54367 = (state_54370[(2)]);
var inst_54368 = cljs.core.async.close_BANG_(res);
var state_54370__$1 = (function (){var statearr_54372 = state_54370;
(statearr_54372[(7)] = inst_54367);

return statearr_54372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54370__$1,inst_54368);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0 = (function (){
var statearr_54373 = [null,null,null,null,null,null,null,null];
(statearr_54373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__);

(statearr_54373[(1)] = (1));

return statearr_54373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1 = (function (state_54370){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54370);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54374){var ex__54119__auto__ = e54374;
var statearr_54375_55863 = state_54370;
(statearr_54375_55863[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54370[(4)]))){
var statearr_54376_55864 = state_54370;
(statearr_54376_55864[(1)] = cljs.core.first((state_54370[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55865 = state_54370;
state_54370 = G__55865;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = function(state_54370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1.call(this,state_54370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54377 = f__54187__auto__();
(statearr_54377[(6)] = c__54186__auto___55862);

return statearr_54377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54382){
var vec__54385 = p__54382;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54385,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54385,(1),null);
var job = vec__54385;
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
var n__5616__auto___55870 = n;
var __55872 = (0);
while(true){
if((__55872 < n__5616__auto___55870)){
var G__54405_55873 = type;
var G__54405_55874__$1 = (((G__54405_55873 instanceof cljs.core.Keyword))?G__54405_55873.fqn:null);
switch (G__54405_55874__$1) {
case "compute":
var c__54186__auto___55879 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55872,c__54186__auto___55879,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async){
return (function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = ((function (__55872,c__54186__auto___55879,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async){
return (function (state_54418){
var state_val_54419 = (state_54418[(1)]);
if((state_val_54419 === (1))){
var state_54418__$1 = state_54418;
var statearr_54421_55880 = state_54418__$1;
(statearr_54421_55880[(2)] = null);

(statearr_54421_55880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54419 === (2))){
var state_54418__$1 = state_54418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54418__$1,(4),jobs);
} else {
if((state_val_54419 === (3))){
var inst_54416 = (state_54418[(2)]);
var state_54418__$1 = state_54418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54418__$1,inst_54416);
} else {
if((state_val_54419 === (4))){
var inst_54408 = (state_54418[(2)]);
var inst_54409 = process__$1(inst_54408);
var state_54418__$1 = state_54418;
if(cljs.core.truth_(inst_54409)){
var statearr_54424_55881 = state_54418__$1;
(statearr_54424_55881[(1)] = (5));

} else {
var statearr_54425_55882 = state_54418__$1;
(statearr_54425_55882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54419 === (5))){
var state_54418__$1 = state_54418;
var statearr_54426_55884 = state_54418__$1;
(statearr_54426_55884[(2)] = null);

(statearr_54426_55884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54419 === (6))){
var state_54418__$1 = state_54418;
var statearr_54427_55888 = state_54418__$1;
(statearr_54427_55888[(2)] = null);

(statearr_54427_55888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54419 === (7))){
var inst_54414 = (state_54418[(2)]);
var state_54418__$1 = state_54418;
var statearr_54428_55889 = state_54418__$1;
(statearr_54428_55889[(2)] = inst_54414);

(statearr_54428_55889[(1)] = (3));


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
});})(__55872,c__54186__auto___55879,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async))
;
return ((function (__55872,switch__54115__auto__,c__54186__auto___55879,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0 = (function (){
var statearr_54429 = [null,null,null,null,null,null,null];
(statearr_54429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__);

(statearr_54429[(1)] = (1));

return statearr_54429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1 = (function (state_54418){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54418);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54430){var ex__54119__auto__ = e54430;
var statearr_54431_55890 = state_54418;
(statearr_54431_55890[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54418[(4)]))){
var statearr_54436_55891 = state_54418;
(statearr_54436_55891[(1)] = cljs.core.first((state_54418[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55892 = state_54418;
state_54418 = G__55892;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = function(state_54418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1.call(this,state_54418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__;
})()
;})(__55872,switch__54115__auto__,c__54186__auto___55879,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async))
})();
var state__54188__auto__ = (function (){var statearr_54450 = f__54187__auto__();
(statearr_54450[(6)] = c__54186__auto___55879);

return statearr_54450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
});})(__55872,c__54186__auto___55879,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async))
);


break;
case "async":
var c__54186__auto___55893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__55872,c__54186__auto___55893,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async){
return (function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = ((function (__55872,c__54186__auto___55893,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async){
return (function (state_54467){
var state_val_54468 = (state_54467[(1)]);
if((state_val_54468 === (1))){
var state_54467__$1 = state_54467;
var statearr_54480_55894 = state_54467__$1;
(statearr_54480_55894[(2)] = null);

(statearr_54480_55894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (2))){
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54467__$1,(4),jobs);
} else {
if((state_val_54468 === (3))){
var inst_54465 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54467__$1,inst_54465);
} else {
if((state_val_54468 === (4))){
var inst_54457 = (state_54467[(2)]);
var inst_54458 = async(inst_54457);
var state_54467__$1 = state_54467;
if(cljs.core.truth_(inst_54458)){
var statearr_54491_55895 = state_54467__$1;
(statearr_54491_55895[(1)] = (5));

} else {
var statearr_54492_55897 = state_54467__$1;
(statearr_54492_55897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (5))){
var state_54467__$1 = state_54467;
var statearr_54498_55901 = state_54467__$1;
(statearr_54498_55901[(2)] = null);

(statearr_54498_55901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (6))){
var state_54467__$1 = state_54467;
var statearr_54506_55902 = state_54467__$1;
(statearr_54506_55902[(2)] = null);

(statearr_54506_55902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54468 === (7))){
var inst_54463 = (state_54467[(2)]);
var state_54467__$1 = state_54467;
var statearr_54516_55903 = state_54467__$1;
(statearr_54516_55903[(2)] = inst_54463);

(statearr_54516_55903[(1)] = (3));


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
});})(__55872,c__54186__auto___55893,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async))
;
return ((function (__55872,switch__54115__auto__,c__54186__auto___55893,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0 = (function (){
var statearr_54517 = [null,null,null,null,null,null,null];
(statearr_54517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__);

(statearr_54517[(1)] = (1));

return statearr_54517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1 = (function (state_54467){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54467);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54518){var ex__54119__auto__ = e54518;
var statearr_54519_55904 = state_54467;
(statearr_54519_55904[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54467[(4)]))){
var statearr_54520_55905 = state_54467;
(statearr_54520_55905[(1)] = cljs.core.first((state_54467[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55906 = state_54467;
state_54467 = G__55906;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = function(state_54467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1.call(this,state_54467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__;
})()
;})(__55872,switch__54115__auto__,c__54186__auto___55893,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async))
})();
var state__54188__auto__ = (function (){var statearr_54521 = f__54187__auto__();
(statearr_54521[(6)] = c__54186__auto___55893);

return statearr_54521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
});})(__55872,c__54186__auto___55893,G__54405_55873,G__54405_55874__$1,n__5616__auto___55870,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54405_55874__$1)].join('')));

}

var G__55907 = (__55872 + (1));
__55872 = G__55907;
continue;
} else {
}
break;
}

var c__54186__auto___55908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54544){
var state_val_54545 = (state_54544[(1)]);
if((state_val_54545 === (7))){
var inst_54540 = (state_54544[(2)]);
var state_54544__$1 = state_54544;
var statearr_54558_55909 = state_54544__$1;
(statearr_54558_55909[(2)] = inst_54540);

(statearr_54558_55909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54545 === (1))){
var state_54544__$1 = state_54544;
var statearr_54559_55910 = state_54544__$1;
(statearr_54559_55910[(2)] = null);

(statearr_54559_55910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54545 === (4))){
var inst_54524 = (state_54544[(7)]);
var inst_54524__$1 = (state_54544[(2)]);
var inst_54525 = (inst_54524__$1 == null);
var state_54544__$1 = (function (){var statearr_54560 = state_54544;
(statearr_54560[(7)] = inst_54524__$1);

return statearr_54560;
})();
if(cljs.core.truth_(inst_54525)){
var statearr_54561_55915 = state_54544__$1;
(statearr_54561_55915[(1)] = (5));

} else {
var statearr_54562_55916 = state_54544__$1;
(statearr_54562_55916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54545 === (6))){
var inst_54524 = (state_54544[(7)]);
var inst_54530 = (state_54544[(8)]);
var inst_54530__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54531 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54532 = [inst_54524,inst_54530__$1];
var inst_54533 = (new cljs.core.PersistentVector(null,2,(5),inst_54531,inst_54532,null));
var state_54544__$1 = (function (){var statearr_54563 = state_54544;
(statearr_54563[(8)] = inst_54530__$1);

return statearr_54563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54544__$1,(8),jobs,inst_54533);
} else {
if((state_val_54545 === (3))){
var inst_54542 = (state_54544[(2)]);
var state_54544__$1 = state_54544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54544__$1,inst_54542);
} else {
if((state_val_54545 === (2))){
var state_54544__$1 = state_54544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54544__$1,(4),from);
} else {
if((state_val_54545 === (9))){
var inst_54537 = (state_54544[(2)]);
var state_54544__$1 = (function (){var statearr_54565 = state_54544;
(statearr_54565[(9)] = inst_54537);

return statearr_54565;
})();
var statearr_54566_55920 = state_54544__$1;
(statearr_54566_55920[(2)] = null);

(statearr_54566_55920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54545 === (5))){
var inst_54527 = cljs.core.async.close_BANG_(jobs);
var state_54544__$1 = state_54544;
var statearr_54567_55921 = state_54544__$1;
(statearr_54567_55921[(2)] = inst_54527);

(statearr_54567_55921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54545 === (8))){
var inst_54530 = (state_54544[(8)]);
var inst_54535 = (state_54544[(2)]);
var state_54544__$1 = (function (){var statearr_54568 = state_54544;
(statearr_54568[(10)] = inst_54535);

return statearr_54568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54544__$1,(9),results,inst_54530);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0 = (function (){
var statearr_54569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__);

(statearr_54569[(1)] = (1));

return statearr_54569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1 = (function (state_54544){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54544);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54570){var ex__54119__auto__ = e54570;
var statearr_54571_55925 = state_54544;
(statearr_54571_55925[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54544[(4)]))){
var statearr_54572_55926 = state_54544;
(statearr_54572_55926[(1)] = cljs.core.first((state_54544[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55927 = state_54544;
state_54544 = G__55927;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = function(state_54544){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1.call(this,state_54544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54573 = f__54187__auto__();
(statearr_54573[(6)] = c__54186__auto___55908);

return statearr_54573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));


var c__54186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54611){
var state_val_54612 = (state_54611[(1)]);
if((state_val_54612 === (7))){
var inst_54607 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
var statearr_54613_55931 = state_54611__$1;
(statearr_54613_55931[(2)] = inst_54607);

(statearr_54613_55931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (20))){
var state_54611__$1 = state_54611;
var statearr_54614_55932 = state_54611__$1;
(statearr_54614_55932[(2)] = null);

(statearr_54614_55932[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (1))){
var state_54611__$1 = state_54611;
var statearr_54615_55933 = state_54611__$1;
(statearr_54615_55933[(2)] = null);

(statearr_54615_55933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (4))){
var inst_54576 = (state_54611[(7)]);
var inst_54576__$1 = (state_54611[(2)]);
var inst_54577 = (inst_54576__$1 == null);
var state_54611__$1 = (function (){var statearr_54616 = state_54611;
(statearr_54616[(7)] = inst_54576__$1);

return statearr_54616;
})();
if(cljs.core.truth_(inst_54577)){
var statearr_54617_55934 = state_54611__$1;
(statearr_54617_55934[(1)] = (5));

} else {
var statearr_54618_55935 = state_54611__$1;
(statearr_54618_55935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (15))){
var inst_54589 = (state_54611[(8)]);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54611__$1,(18),to,inst_54589);
} else {
if((state_val_54612 === (21))){
var inst_54602 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
var statearr_54619_55939 = state_54611__$1;
(statearr_54619_55939[(2)] = inst_54602);

(statearr_54619_55939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (13))){
var inst_54604 = (state_54611[(2)]);
var state_54611__$1 = (function (){var statearr_54620 = state_54611;
(statearr_54620[(9)] = inst_54604);

return statearr_54620;
})();
var statearr_54621_55940 = state_54611__$1;
(statearr_54621_55940[(2)] = null);

(statearr_54621_55940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (6))){
var inst_54576 = (state_54611[(7)]);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54611__$1,(11),inst_54576);
} else {
if((state_val_54612 === (17))){
var inst_54597 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
if(cljs.core.truth_(inst_54597)){
var statearr_54622_55941 = state_54611__$1;
(statearr_54622_55941[(1)] = (19));

} else {
var statearr_54623_55942 = state_54611__$1;
(statearr_54623_55942[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (3))){
var inst_54609 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54611__$1,inst_54609);
} else {
if((state_val_54612 === (12))){
var inst_54586 = (state_54611[(10)]);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54611__$1,(14),inst_54586);
} else {
if((state_val_54612 === (2))){
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54611__$1,(4),results);
} else {
if((state_val_54612 === (19))){
var state_54611__$1 = state_54611;
var statearr_54624_55943 = state_54611__$1;
(statearr_54624_55943[(2)] = null);

(statearr_54624_55943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (11))){
var inst_54586 = (state_54611[(2)]);
var state_54611__$1 = (function (){var statearr_54625 = state_54611;
(statearr_54625[(10)] = inst_54586);

return statearr_54625;
})();
var statearr_54626_55944 = state_54611__$1;
(statearr_54626_55944[(2)] = null);

(statearr_54626_55944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (9))){
var state_54611__$1 = state_54611;
var statearr_54627_55945 = state_54611__$1;
(statearr_54627_55945[(2)] = null);

(statearr_54627_55945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (5))){
var state_54611__$1 = state_54611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54628_55946 = state_54611__$1;
(statearr_54628_55946[(1)] = (8));

} else {
var statearr_54629_55947 = state_54611__$1;
(statearr_54629_55947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (14))){
var inst_54589 = (state_54611[(8)]);
var inst_54591 = (state_54611[(11)]);
var inst_54589__$1 = (state_54611[(2)]);
var inst_54590 = (inst_54589__$1 == null);
var inst_54591__$1 = cljs.core.not(inst_54590);
var state_54611__$1 = (function (){var statearr_54630 = state_54611;
(statearr_54630[(8)] = inst_54589__$1);

(statearr_54630[(11)] = inst_54591__$1);

return statearr_54630;
})();
if(inst_54591__$1){
var statearr_54631_55948 = state_54611__$1;
(statearr_54631_55948[(1)] = (15));

} else {
var statearr_54632_55949 = state_54611__$1;
(statearr_54632_55949[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (16))){
var inst_54591 = (state_54611[(11)]);
var state_54611__$1 = state_54611;
var statearr_54633_55950 = state_54611__$1;
(statearr_54633_55950[(2)] = inst_54591);

(statearr_54633_55950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (10))){
var inst_54583 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
var statearr_54634_55951 = state_54611__$1;
(statearr_54634_55951[(2)] = inst_54583);

(statearr_54634_55951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (18))){
var inst_54594 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
var statearr_54635_55952 = state_54611__$1;
(statearr_54635_55952[(2)] = inst_54594);

(statearr_54635_55952[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (8))){
var inst_54580 = cljs.core.async.close_BANG_(to);
var state_54611__$1 = state_54611;
var statearr_54636_55953 = state_54611__$1;
(statearr_54636_55953[(2)] = inst_54580);

(statearr_54636_55953[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0 = (function (){
var statearr_54637 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__);

(statearr_54637[(1)] = (1));

return statearr_54637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1 = (function (state_54611){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54611);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54638){var ex__54119__auto__ = e54638;
var statearr_54639_55954 = state_54611;
(statearr_54639_55954[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54611[(4)]))){
var statearr_54640_55955 = state_54611;
(statearr_54640_55955[(1)] = cljs.core.first((state_54611[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55956 = state_54611;
state_54611 = G__55956;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__ = function(state_54611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1.call(this,state_54611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54116__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54641 = f__54187__auto__();
(statearr_54641[(6)] = c__54186__auto__);

return statearr_54641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));

return c__54186__auto__;
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
var G__54643 = arguments.length;
switch (G__54643) {
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
var G__54645 = arguments.length;
switch (G__54645) {
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
var G__54647 = arguments.length;
switch (G__54647) {
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
var c__54186__auto___55960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54673){
var state_val_54674 = (state_54673[(1)]);
if((state_val_54674 === (7))){
var inst_54669 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54675_55961 = state_54673__$1;
(statearr_54675_55961[(2)] = inst_54669);

(statearr_54675_55961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (1))){
var state_54673__$1 = state_54673;
var statearr_54676_55962 = state_54673__$1;
(statearr_54676_55962[(2)] = null);

(statearr_54676_55962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (4))){
var inst_54650 = (state_54673[(7)]);
var inst_54650__$1 = (state_54673[(2)]);
var inst_54651 = (inst_54650__$1 == null);
var state_54673__$1 = (function (){var statearr_54677 = state_54673;
(statearr_54677[(7)] = inst_54650__$1);

return statearr_54677;
})();
if(cljs.core.truth_(inst_54651)){
var statearr_54678_55963 = state_54673__$1;
(statearr_54678_55963[(1)] = (5));

} else {
var statearr_54679_55964 = state_54673__$1;
(statearr_54679_55964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (13))){
var state_54673__$1 = state_54673;
var statearr_54680_55965 = state_54673__$1;
(statearr_54680_55965[(2)] = null);

(statearr_54680_55965[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (6))){
var inst_54650 = (state_54673[(7)]);
var inst_54656 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54650) : p.call(null,inst_54650));
var state_54673__$1 = state_54673;
if(cljs.core.truth_(inst_54656)){
var statearr_54681_55966 = state_54673__$1;
(statearr_54681_55966[(1)] = (9));

} else {
var statearr_54682_55967 = state_54673__$1;
(statearr_54682_55967[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (3))){
var inst_54671 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54673__$1,inst_54671);
} else {
if((state_val_54674 === (12))){
var state_54673__$1 = state_54673;
var statearr_54683_55968 = state_54673__$1;
(statearr_54683_55968[(2)] = null);

(statearr_54683_55968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (2))){
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54673__$1,(4),ch);
} else {
if((state_val_54674 === (11))){
var inst_54650 = (state_54673[(7)]);
var inst_54660 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54673__$1,(8),inst_54660,inst_54650);
} else {
if((state_val_54674 === (9))){
var state_54673__$1 = state_54673;
var statearr_54684_55969 = state_54673__$1;
(statearr_54684_55969[(2)] = tc);

(statearr_54684_55969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (5))){
var inst_54653 = cljs.core.async.close_BANG_(tc);
var inst_54654 = cljs.core.async.close_BANG_(fc);
var state_54673__$1 = (function (){var statearr_54685 = state_54673;
(statearr_54685[(8)] = inst_54653);

return statearr_54685;
})();
var statearr_54686_55970 = state_54673__$1;
(statearr_54686_55970[(2)] = inst_54654);

(statearr_54686_55970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (14))){
var inst_54667 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54687_55971 = state_54673__$1;
(statearr_54687_55971[(2)] = inst_54667);

(statearr_54687_55971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (10))){
var state_54673__$1 = state_54673;
var statearr_54688_55972 = state_54673__$1;
(statearr_54688_55972[(2)] = fc);

(statearr_54688_55972[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (8))){
var inst_54662 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
if(cljs.core.truth_(inst_54662)){
var statearr_54689_55973 = state_54673__$1;
(statearr_54689_55973[(1)] = (12));

} else {
var statearr_54690_55974 = state_54673__$1;
(statearr_54690_55974[(1)] = (13));

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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_54691 = [null,null,null,null,null,null,null,null,null];
(statearr_54691[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_54691[(1)] = (1));

return statearr_54691;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_54673){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54673);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54692){var ex__54119__auto__ = e54692;
var statearr_54693_55975 = state_54673;
(statearr_54693_55975[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54673[(4)]))){
var statearr_54694_55976 = state_54673;
(statearr_54694_55976[(1)] = cljs.core.first((state_54673[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55977 = state_54673;
state_54673 = G__55977;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_54673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_54673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54695 = f__54187__auto__();
(statearr_54695[(6)] = c__54186__auto___55960);

return statearr_54695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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
var c__54186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54717){
var state_val_54718 = (state_54717[(1)]);
if((state_val_54718 === (7))){
var inst_54713 = (state_54717[(2)]);
var state_54717__$1 = state_54717;
var statearr_54719_55978 = state_54717__$1;
(statearr_54719_55978[(2)] = inst_54713);

(statearr_54719_55978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54718 === (1))){
var inst_54696 = init;
var inst_54697 = inst_54696;
var state_54717__$1 = (function (){var statearr_54720 = state_54717;
(statearr_54720[(7)] = inst_54697);

return statearr_54720;
})();
var statearr_54721_55979 = state_54717__$1;
(statearr_54721_55979[(2)] = null);

(statearr_54721_55979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54718 === (4))){
var inst_54700 = (state_54717[(8)]);
var inst_54700__$1 = (state_54717[(2)]);
var inst_54701 = (inst_54700__$1 == null);
var state_54717__$1 = (function (){var statearr_54722 = state_54717;
(statearr_54722[(8)] = inst_54700__$1);

return statearr_54722;
})();
if(cljs.core.truth_(inst_54701)){
var statearr_54723_55982 = state_54717__$1;
(statearr_54723_55982[(1)] = (5));

} else {
var statearr_54724_55983 = state_54717__$1;
(statearr_54724_55983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54718 === (6))){
var inst_54697 = (state_54717[(7)]);
var inst_54700 = (state_54717[(8)]);
var inst_54704 = (state_54717[(9)]);
var inst_54704__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54697,inst_54700) : f.call(null,inst_54697,inst_54700));
var inst_54705 = cljs.core.reduced_QMARK_(inst_54704__$1);
var state_54717__$1 = (function (){var statearr_54725 = state_54717;
(statearr_54725[(9)] = inst_54704__$1);

return statearr_54725;
})();
if(inst_54705){
var statearr_54726_55984 = state_54717__$1;
(statearr_54726_55984[(1)] = (8));

} else {
var statearr_54727_55985 = state_54717__$1;
(statearr_54727_55985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54718 === (3))){
var inst_54715 = (state_54717[(2)]);
var state_54717__$1 = state_54717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54717__$1,inst_54715);
} else {
if((state_val_54718 === (2))){
var state_54717__$1 = state_54717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54717__$1,(4),ch);
} else {
if((state_val_54718 === (9))){
var inst_54704 = (state_54717[(9)]);
var inst_54697 = inst_54704;
var state_54717__$1 = (function (){var statearr_54728 = state_54717;
(statearr_54728[(7)] = inst_54697);

return statearr_54728;
})();
var statearr_54729_55986 = state_54717__$1;
(statearr_54729_55986[(2)] = null);

(statearr_54729_55986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54718 === (5))){
var inst_54697 = (state_54717[(7)]);
var state_54717__$1 = state_54717;
var statearr_54730_55991 = state_54717__$1;
(statearr_54730_55991[(2)] = inst_54697);

(statearr_54730_55991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54718 === (10))){
var inst_54711 = (state_54717[(2)]);
var state_54717__$1 = state_54717;
var statearr_54731_55992 = state_54717__$1;
(statearr_54731_55992[(2)] = inst_54711);

(statearr_54731_55992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54718 === (8))){
var inst_54704 = (state_54717[(9)]);
var inst_54707 = cljs.core.deref(inst_54704);
var state_54717__$1 = state_54717;
var statearr_54732_55996 = state_54717__$1;
(statearr_54732_55996[(2)] = inst_54707);

(statearr_54732_55996[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54116__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54116__auto____0 = (function (){
var statearr_54733 = [null,null,null,null,null,null,null,null,null,null];
(statearr_54733[(0)] = cljs$core$async$reduce_$_state_machine__54116__auto__);

(statearr_54733[(1)] = (1));

return statearr_54733;
});
var cljs$core$async$reduce_$_state_machine__54116__auto____1 = (function (state_54717){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54717);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54734){var ex__54119__auto__ = e54734;
var statearr_54735_56008 = state_54717;
(statearr_54735_56008[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54717[(4)]))){
var statearr_54736_56014 = state_54717;
(statearr_54736_56014[(1)] = cljs.core.first((state_54717[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56018 = state_54717;
state_54717 = G__56018;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54116__auto__ = function(state_54717){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54116__auto____1.call(this,state_54717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54116__auto____0;
cljs$core$async$reduce_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54116__auto____1;
return cljs$core$async$reduce_$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54737 = f__54187__auto__();
(statearr_54737[(6)] = c__54186__auto__);

return statearr_54737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));

return c__54186__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54743){
var state_val_54744 = (state_54743[(1)]);
if((state_val_54744 === (1))){
var inst_54738 = cljs.core.async.reduce(f__$1,init,ch);
var state_54743__$1 = state_54743;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54743__$1,(2),inst_54738);
} else {
if((state_val_54744 === (2))){
var inst_54740 = (state_54743[(2)]);
var inst_54741 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_54740) : f__$1.call(null,inst_54740));
var state_54743__$1 = state_54743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54743__$1,inst_54741);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54116__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54116__auto____0 = (function (){
var statearr_54745 = [null,null,null,null,null,null,null];
(statearr_54745[(0)] = cljs$core$async$transduce_$_state_machine__54116__auto__);

(statearr_54745[(1)] = (1));

return statearr_54745;
});
var cljs$core$async$transduce_$_state_machine__54116__auto____1 = (function (state_54743){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54743);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54746){var ex__54119__auto__ = e54746;
var statearr_54747_56024 = state_54743;
(statearr_54747_56024[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54743[(4)]))){
var statearr_54748_56025 = state_54743;
(statearr_54748_56025[(1)] = cljs.core.first((state_54743[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56026 = state_54743;
state_54743 = G__56026;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54116__auto__ = function(state_54743){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54116__auto____1.call(this,state_54743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54116__auto____0;
cljs$core$async$transduce_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54116__auto____1;
return cljs$core$async$transduce_$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54749 = f__54187__auto__();
(statearr_54749[(6)] = c__54186__auto__);

return statearr_54749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));

return c__54186__auto__;
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
var G__54751 = arguments.length;
switch (G__54751) {
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
var c__54186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54776){
var state_val_54777 = (state_54776[(1)]);
if((state_val_54777 === (7))){
var inst_54758 = (state_54776[(2)]);
var state_54776__$1 = state_54776;
var statearr_54778_56028 = state_54776__$1;
(statearr_54778_56028[(2)] = inst_54758);

(statearr_54778_56028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (1))){
var inst_54752 = cljs.core.seq(coll);
var inst_54753 = inst_54752;
var state_54776__$1 = (function (){var statearr_54779 = state_54776;
(statearr_54779[(7)] = inst_54753);

return statearr_54779;
})();
var statearr_54780_56029 = state_54776__$1;
(statearr_54780_56029[(2)] = null);

(statearr_54780_56029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (4))){
var inst_54753 = (state_54776[(7)]);
var inst_54756 = cljs.core.first(inst_54753);
var state_54776__$1 = state_54776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54776__$1,(7),ch,inst_54756);
} else {
if((state_val_54777 === (13))){
var inst_54770 = (state_54776[(2)]);
var state_54776__$1 = state_54776;
var statearr_54781_56030 = state_54776__$1;
(statearr_54781_56030[(2)] = inst_54770);

(statearr_54781_56030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (6))){
var inst_54761 = (state_54776[(2)]);
var state_54776__$1 = state_54776;
if(cljs.core.truth_(inst_54761)){
var statearr_54782_56031 = state_54776__$1;
(statearr_54782_56031[(1)] = (8));

} else {
var statearr_54783_56032 = state_54776__$1;
(statearr_54783_56032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (3))){
var inst_54774 = (state_54776[(2)]);
var state_54776__$1 = state_54776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54776__$1,inst_54774);
} else {
if((state_val_54777 === (12))){
var state_54776__$1 = state_54776;
var statearr_54784_56033 = state_54776__$1;
(statearr_54784_56033[(2)] = null);

(statearr_54784_56033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (2))){
var inst_54753 = (state_54776[(7)]);
var state_54776__$1 = state_54776;
if(cljs.core.truth_(inst_54753)){
var statearr_54785_56034 = state_54776__$1;
(statearr_54785_56034[(1)] = (4));

} else {
var statearr_54786_56035 = state_54776__$1;
(statearr_54786_56035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (11))){
var inst_54767 = cljs.core.async.close_BANG_(ch);
var state_54776__$1 = state_54776;
var statearr_54787_56036 = state_54776__$1;
(statearr_54787_56036[(2)] = inst_54767);

(statearr_54787_56036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (9))){
var state_54776__$1 = state_54776;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54788_56037 = state_54776__$1;
(statearr_54788_56037[(1)] = (11));

} else {
var statearr_54789_56038 = state_54776__$1;
(statearr_54789_56038[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (5))){
var inst_54753 = (state_54776[(7)]);
var state_54776__$1 = state_54776;
var statearr_54790_56039 = state_54776__$1;
(statearr_54790_56039[(2)] = inst_54753);

(statearr_54790_56039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (10))){
var inst_54772 = (state_54776[(2)]);
var state_54776__$1 = state_54776;
var statearr_54791_56040 = state_54776__$1;
(statearr_54791_56040[(2)] = inst_54772);

(statearr_54791_56040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54777 === (8))){
var inst_54753 = (state_54776[(7)]);
var inst_54763 = cljs.core.next(inst_54753);
var inst_54753__$1 = inst_54763;
var state_54776__$1 = (function (){var statearr_54792 = state_54776;
(statearr_54792[(7)] = inst_54753__$1);

return statearr_54792;
})();
var statearr_54793_56041 = state_54776__$1;
(statearr_54793_56041[(2)] = null);

(statearr_54793_56041[(1)] = (2));


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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_54794 = [null,null,null,null,null,null,null,null];
(statearr_54794[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_54794[(1)] = (1));

return statearr_54794;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_54776){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54776);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e54795){var ex__54119__auto__ = e54795;
var statearr_54796_56042 = state_54776;
(statearr_54796_56042[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54776[(4)]))){
var statearr_54797_56043 = state_54776;
(statearr_54797_56043[(1)] = cljs.core.first((state_54776[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56044 = state_54776;
state_54776 = G__56044;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_54776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_54776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_54798 = f__54187__auto__();
(statearr_54798[(6)] = c__54186__auto__);

return statearr_54798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));

return c__54186__auto__;
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
var G__54800 = arguments.length;
switch (G__54800) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_56046 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_56046(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56047 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_56047(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56048 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_56048(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56049 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_56049(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54801 = (function (ch,cs,meta54802){
this.ch = ch;
this.cs = cs;
this.meta54802 = meta54802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54803,meta54802__$1){
var self__ = this;
var _54803__$1 = this;
return (new cljs.core.async.t_cljs$core$async54801(self__.ch,self__.cs,meta54802__$1));
}));

(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54803){
var self__ = this;
var _54803__$1 = this;
return self__.meta54802;
}));

(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async54801.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async54801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta54802","meta54802",-1416822773,null)], null);
}));

(cljs.core.async.t_cljs$core$async54801.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54801");

(cljs.core.async.t_cljs$core$async54801.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54801");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54801.
 */
cljs.core.async.__GT_t_cljs$core$async54801 = (function cljs$core$async$__GT_t_cljs$core$async54801(ch,cs,meta54802){
return (new cljs.core.async.t_cljs$core$async54801(ch,cs,meta54802));
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
var m = (new cljs.core.async.t_cljs$core$async54801(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54186__auto___56051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_54936){
var state_val_54937 = (state_54936[(1)]);
if((state_val_54937 === (7))){
var inst_54932 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54938_56052 = state_54936__$1;
(statearr_54938_56052[(2)] = inst_54932);

(statearr_54938_56052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (20))){
var inst_54837 = (state_54936[(7)]);
var inst_54849 = cljs.core.first(inst_54837);
var inst_54850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54849,(0),null);
var inst_54851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54849,(1),null);
var state_54936__$1 = (function (){var statearr_54939 = state_54936;
(statearr_54939[(8)] = inst_54850);

return statearr_54939;
})();
if(cljs.core.truth_(inst_54851)){
var statearr_54940_56053 = state_54936__$1;
(statearr_54940_56053[(1)] = (22));

} else {
var statearr_54941_56054 = state_54936__$1;
(statearr_54941_56054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (27))){
var inst_54879 = (state_54936[(9)]);
var inst_54881 = (state_54936[(10)]);
var inst_54886 = (state_54936[(11)]);
var inst_54806 = (state_54936[(12)]);
var inst_54886__$1 = cljs.core._nth(inst_54879,inst_54881);
var inst_54887 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54886__$1,inst_54806,done);
var state_54936__$1 = (function (){var statearr_54942 = state_54936;
(statearr_54942[(11)] = inst_54886__$1);

return statearr_54942;
})();
if(cljs.core.truth_(inst_54887)){
var statearr_54943_56055 = state_54936__$1;
(statearr_54943_56055[(1)] = (30));

} else {
var statearr_54944_56056 = state_54936__$1;
(statearr_54944_56056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (1))){
var state_54936__$1 = state_54936;
var statearr_54945_56057 = state_54936__$1;
(statearr_54945_56057[(2)] = null);

(statearr_54945_56057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (24))){
var inst_54837 = (state_54936[(7)]);
var inst_54856 = (state_54936[(2)]);
var inst_54857 = cljs.core.next(inst_54837);
var inst_54815 = inst_54857;
var inst_54816 = null;
var inst_54817 = (0);
var inst_54818 = (0);
var state_54936__$1 = (function (){var statearr_54946 = state_54936;
(statearr_54946[(13)] = inst_54856);

(statearr_54946[(14)] = inst_54815);

(statearr_54946[(15)] = inst_54816);

(statearr_54946[(16)] = inst_54817);

(statearr_54946[(17)] = inst_54818);

return statearr_54946;
})();
var statearr_54947_56059 = state_54936__$1;
(statearr_54947_56059[(2)] = null);

(statearr_54947_56059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (39))){
var state_54936__$1 = state_54936;
var statearr_54951_56060 = state_54936__$1;
(statearr_54951_56060[(2)] = null);

(statearr_54951_56060[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (4))){
var inst_54806 = (state_54936[(12)]);
var inst_54806__$1 = (state_54936[(2)]);
var inst_54807 = (inst_54806__$1 == null);
var state_54936__$1 = (function (){var statearr_54952 = state_54936;
(statearr_54952[(12)] = inst_54806__$1);

return statearr_54952;
})();
if(cljs.core.truth_(inst_54807)){
var statearr_54953_56061 = state_54936__$1;
(statearr_54953_56061[(1)] = (5));

} else {
var statearr_54954_56062 = state_54936__$1;
(statearr_54954_56062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (15))){
var inst_54818 = (state_54936[(17)]);
var inst_54815 = (state_54936[(14)]);
var inst_54816 = (state_54936[(15)]);
var inst_54817 = (state_54936[(16)]);
var inst_54833 = (state_54936[(2)]);
var inst_54834 = (inst_54818 + (1));
var tmp54948 = inst_54815;
var tmp54949 = inst_54817;
var tmp54950 = inst_54816;
var inst_54815__$1 = tmp54948;
var inst_54816__$1 = tmp54950;
var inst_54817__$1 = tmp54949;
var inst_54818__$1 = inst_54834;
var state_54936__$1 = (function (){var statearr_54955 = state_54936;
(statearr_54955[(18)] = inst_54833);

(statearr_54955[(14)] = inst_54815__$1);

(statearr_54955[(15)] = inst_54816__$1);

(statearr_54955[(16)] = inst_54817__$1);

(statearr_54955[(17)] = inst_54818__$1);

return statearr_54955;
})();
var statearr_54956_56063 = state_54936__$1;
(statearr_54956_56063[(2)] = null);

(statearr_54956_56063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (21))){
var inst_54860 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54960_56064 = state_54936__$1;
(statearr_54960_56064[(2)] = inst_54860);

(statearr_54960_56064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (31))){
var inst_54886 = (state_54936[(11)]);
var inst_54890 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54886);
var state_54936__$1 = state_54936;
var statearr_54961_56065 = state_54936__$1;
(statearr_54961_56065[(2)] = inst_54890);

(statearr_54961_56065[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (32))){
var inst_54881 = (state_54936[(10)]);
var inst_54878 = (state_54936[(19)]);
var inst_54879 = (state_54936[(9)]);
var inst_54880 = (state_54936[(20)]);
var inst_54892 = (state_54936[(2)]);
var inst_54893 = (inst_54881 + (1));
var tmp54957 = inst_54878;
var tmp54958 = inst_54879;
var tmp54959 = inst_54880;
var inst_54878__$1 = tmp54957;
var inst_54879__$1 = tmp54958;
var inst_54880__$1 = tmp54959;
var inst_54881__$1 = inst_54893;
var state_54936__$1 = (function (){var statearr_54962 = state_54936;
(statearr_54962[(21)] = inst_54892);

(statearr_54962[(19)] = inst_54878__$1);

(statearr_54962[(9)] = inst_54879__$1);

(statearr_54962[(20)] = inst_54880__$1);

(statearr_54962[(10)] = inst_54881__$1);

return statearr_54962;
})();
var statearr_54963_56067 = state_54936__$1;
(statearr_54963_56067[(2)] = null);

(statearr_54963_56067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (40))){
var inst_54905 = (state_54936[(22)]);
var inst_54909 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_54905);
var state_54936__$1 = state_54936;
var statearr_54964_56071 = state_54936__$1;
(statearr_54964_56071[(2)] = inst_54909);

(statearr_54964_56071[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (33))){
var inst_54896 = (state_54936[(23)]);
var inst_54898 = cljs.core.chunked_seq_QMARK_(inst_54896);
var state_54936__$1 = state_54936;
if(inst_54898){
var statearr_54965_56072 = state_54936__$1;
(statearr_54965_56072[(1)] = (36));

} else {
var statearr_54966_56073 = state_54936__$1;
(statearr_54966_56073[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (13))){
var inst_54827 = (state_54936[(24)]);
var inst_54830 = cljs.core.async.close_BANG_(inst_54827);
var state_54936__$1 = state_54936;
var statearr_54967_56075 = state_54936__$1;
(statearr_54967_56075[(2)] = inst_54830);

(statearr_54967_56075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (22))){
var inst_54850 = (state_54936[(8)]);
var inst_54853 = cljs.core.async.close_BANG_(inst_54850);
var state_54936__$1 = state_54936;
var statearr_54968_56079 = state_54936__$1;
(statearr_54968_56079[(2)] = inst_54853);

(statearr_54968_56079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (36))){
var inst_54896 = (state_54936[(23)]);
var inst_54900 = cljs.core.chunk_first(inst_54896);
var inst_54901 = cljs.core.chunk_rest(inst_54896);
var inst_54902 = cljs.core.count(inst_54900);
var inst_54878 = inst_54901;
var inst_54879 = inst_54900;
var inst_54880 = inst_54902;
var inst_54881 = (0);
var state_54936__$1 = (function (){var statearr_54969 = state_54936;
(statearr_54969[(19)] = inst_54878);

(statearr_54969[(9)] = inst_54879);

(statearr_54969[(20)] = inst_54880);

(statearr_54969[(10)] = inst_54881);

return statearr_54969;
})();
var statearr_54970_56081 = state_54936__$1;
(statearr_54970_56081[(2)] = null);

(statearr_54970_56081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (41))){
var inst_54896 = (state_54936[(23)]);
var inst_54911 = (state_54936[(2)]);
var inst_54912 = cljs.core.next(inst_54896);
var inst_54878 = inst_54912;
var inst_54879 = null;
var inst_54880 = (0);
var inst_54881 = (0);
var state_54936__$1 = (function (){var statearr_54971 = state_54936;
(statearr_54971[(25)] = inst_54911);

(statearr_54971[(19)] = inst_54878);

(statearr_54971[(9)] = inst_54879);

(statearr_54971[(20)] = inst_54880);

(statearr_54971[(10)] = inst_54881);

return statearr_54971;
})();
var statearr_54972_56085 = state_54936__$1;
(statearr_54972_56085[(2)] = null);

(statearr_54972_56085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (43))){
var state_54936__$1 = state_54936;
var statearr_54973_56086 = state_54936__$1;
(statearr_54973_56086[(2)] = null);

(statearr_54973_56086[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (29))){
var inst_54920 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54974_56087 = state_54936__$1;
(statearr_54974_56087[(2)] = inst_54920);

(statearr_54974_56087[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (44))){
var inst_54929 = (state_54936[(2)]);
var state_54936__$1 = (function (){var statearr_54975 = state_54936;
(statearr_54975[(26)] = inst_54929);

return statearr_54975;
})();
var statearr_54976_56088 = state_54936__$1;
(statearr_54976_56088[(2)] = null);

(statearr_54976_56088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (6))){
var inst_54870 = (state_54936[(27)]);
var inst_54869 = cljs.core.deref(cs);
var inst_54870__$1 = cljs.core.keys(inst_54869);
var inst_54871 = cljs.core.count(inst_54870__$1);
var inst_54872 = cljs.core.reset_BANG_(dctr,inst_54871);
var inst_54877 = cljs.core.seq(inst_54870__$1);
var inst_54878 = inst_54877;
var inst_54879 = null;
var inst_54880 = (0);
var inst_54881 = (0);
var state_54936__$1 = (function (){var statearr_54977 = state_54936;
(statearr_54977[(27)] = inst_54870__$1);

(statearr_54977[(28)] = inst_54872);

(statearr_54977[(19)] = inst_54878);

(statearr_54977[(9)] = inst_54879);

(statearr_54977[(20)] = inst_54880);

(statearr_54977[(10)] = inst_54881);

return statearr_54977;
})();
var statearr_54978_56093 = state_54936__$1;
(statearr_54978_56093[(2)] = null);

(statearr_54978_56093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (28))){
var inst_54878 = (state_54936[(19)]);
var inst_54896 = (state_54936[(23)]);
var inst_54896__$1 = cljs.core.seq(inst_54878);
var state_54936__$1 = (function (){var statearr_54979 = state_54936;
(statearr_54979[(23)] = inst_54896__$1);

return statearr_54979;
})();
if(inst_54896__$1){
var statearr_54980_56094 = state_54936__$1;
(statearr_54980_56094[(1)] = (33));

} else {
var statearr_54981_56095 = state_54936__$1;
(statearr_54981_56095[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (25))){
var inst_54881 = (state_54936[(10)]);
var inst_54880 = (state_54936[(20)]);
var inst_54883 = (inst_54881 < inst_54880);
var inst_54884 = inst_54883;
var state_54936__$1 = state_54936;
if(cljs.core.truth_(inst_54884)){
var statearr_54982_56100 = state_54936__$1;
(statearr_54982_56100[(1)] = (27));

} else {
var statearr_54983_56101 = state_54936__$1;
(statearr_54983_56101[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (34))){
var state_54936__$1 = state_54936;
var statearr_54984_56102 = state_54936__$1;
(statearr_54984_56102[(2)] = null);

(statearr_54984_56102[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (17))){
var state_54936__$1 = state_54936;
var statearr_54985_56103 = state_54936__$1;
(statearr_54985_56103[(2)] = null);

(statearr_54985_56103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (3))){
var inst_54934 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54936__$1,inst_54934);
} else {
if((state_val_54937 === (12))){
var inst_54865 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54986_56105 = state_54936__$1;
(statearr_54986_56105[(2)] = inst_54865);

(statearr_54986_56105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (2))){
var state_54936__$1 = state_54936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54936__$1,(4),ch);
} else {
if((state_val_54937 === (23))){
var state_54936__$1 = state_54936;
var statearr_54987_56107 = state_54936__$1;
(statearr_54987_56107[(2)] = null);

(statearr_54987_56107[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (35))){
var inst_54918 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54988_56112 = state_54936__$1;
(statearr_54988_56112[(2)] = inst_54918);

(statearr_54988_56112[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (19))){
var inst_54837 = (state_54936[(7)]);
var inst_54841 = cljs.core.chunk_first(inst_54837);
var inst_54842 = cljs.core.chunk_rest(inst_54837);
var inst_54843 = cljs.core.count(inst_54841);
var inst_54815 = inst_54842;
var inst_54816 = inst_54841;
var inst_54817 = inst_54843;
var inst_54818 = (0);
var state_54936__$1 = (function (){var statearr_54989 = state_54936;
(statearr_54989[(14)] = inst_54815);

(statearr_54989[(15)] = inst_54816);

(statearr_54989[(16)] = inst_54817);

(statearr_54989[(17)] = inst_54818);

return statearr_54989;
})();
var statearr_54990_56113 = state_54936__$1;
(statearr_54990_56113[(2)] = null);

(statearr_54990_56113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (11))){
var inst_54815 = (state_54936[(14)]);
var inst_54837 = (state_54936[(7)]);
var inst_54837__$1 = cljs.core.seq(inst_54815);
var state_54936__$1 = (function (){var statearr_54991 = state_54936;
(statearr_54991[(7)] = inst_54837__$1);

return statearr_54991;
})();
if(inst_54837__$1){
var statearr_54992_56114 = state_54936__$1;
(statearr_54992_56114[(1)] = (16));

} else {
var statearr_54993_56115 = state_54936__$1;
(statearr_54993_56115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (9))){
var inst_54867 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54994_56116 = state_54936__$1;
(statearr_54994_56116[(2)] = inst_54867);

(statearr_54994_56116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (5))){
var inst_54813 = cljs.core.deref(cs);
var inst_54814 = cljs.core.seq(inst_54813);
var inst_54815 = inst_54814;
var inst_54816 = null;
var inst_54817 = (0);
var inst_54818 = (0);
var state_54936__$1 = (function (){var statearr_54995 = state_54936;
(statearr_54995[(14)] = inst_54815);

(statearr_54995[(15)] = inst_54816);

(statearr_54995[(16)] = inst_54817);

(statearr_54995[(17)] = inst_54818);

return statearr_54995;
})();
var statearr_54996_56117 = state_54936__$1;
(statearr_54996_56117[(2)] = null);

(statearr_54996_56117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (14))){
var state_54936__$1 = state_54936;
var statearr_54997_56118 = state_54936__$1;
(statearr_54997_56118[(2)] = null);

(statearr_54997_56118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (45))){
var inst_54926 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_54998_56119 = state_54936__$1;
(statearr_54998_56119[(2)] = inst_54926);

(statearr_54998_56119[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (26))){
var inst_54870 = (state_54936[(27)]);
var inst_54922 = (state_54936[(2)]);
var inst_54923 = cljs.core.seq(inst_54870);
var state_54936__$1 = (function (){var statearr_54999 = state_54936;
(statearr_54999[(29)] = inst_54922);

return statearr_54999;
})();
if(inst_54923){
var statearr_55000_56120 = state_54936__$1;
(statearr_55000_56120[(1)] = (42));

} else {
var statearr_55001_56121 = state_54936__$1;
(statearr_55001_56121[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (16))){
var inst_54837 = (state_54936[(7)]);
var inst_54839 = cljs.core.chunked_seq_QMARK_(inst_54837);
var state_54936__$1 = state_54936;
if(inst_54839){
var statearr_55002_56122 = state_54936__$1;
(statearr_55002_56122[(1)] = (19));

} else {
var statearr_55003_56123 = state_54936__$1;
(statearr_55003_56123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (38))){
var inst_54915 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_55004_56124 = state_54936__$1;
(statearr_55004_56124[(2)] = inst_54915);

(statearr_55004_56124[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (30))){
var state_54936__$1 = state_54936;
var statearr_55005_56126 = state_54936__$1;
(statearr_55005_56126[(2)] = null);

(statearr_55005_56126[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (10))){
var inst_54816 = (state_54936[(15)]);
var inst_54818 = (state_54936[(17)]);
var inst_54826 = cljs.core._nth(inst_54816,inst_54818);
var inst_54827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54826,(0),null);
var inst_54828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_54826,(1),null);
var state_54936__$1 = (function (){var statearr_55006 = state_54936;
(statearr_55006[(24)] = inst_54827);

return statearr_55006;
})();
if(cljs.core.truth_(inst_54828)){
var statearr_55007_56130 = state_54936__$1;
(statearr_55007_56130[(1)] = (13));

} else {
var statearr_55008_56131 = state_54936__$1;
(statearr_55008_56131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (18))){
var inst_54863 = (state_54936[(2)]);
var state_54936__$1 = state_54936;
var statearr_55009_56132 = state_54936__$1;
(statearr_55009_56132[(2)] = inst_54863);

(statearr_55009_56132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (42))){
var state_54936__$1 = state_54936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54936__$1,(45),dchan);
} else {
if((state_val_54937 === (37))){
var inst_54896 = (state_54936[(23)]);
var inst_54905 = (state_54936[(22)]);
var inst_54806 = (state_54936[(12)]);
var inst_54905__$1 = cljs.core.first(inst_54896);
var inst_54906 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_54905__$1,inst_54806,done);
var state_54936__$1 = (function (){var statearr_55010 = state_54936;
(statearr_55010[(22)] = inst_54905__$1);

return statearr_55010;
})();
if(cljs.core.truth_(inst_54906)){
var statearr_55011_56137 = state_54936__$1;
(statearr_55011_56137[(1)] = (39));

} else {
var statearr_55012_56138 = state_54936__$1;
(statearr_55012_56138[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54937 === (8))){
var inst_54818 = (state_54936[(17)]);
var inst_54817 = (state_54936[(16)]);
var inst_54820 = (inst_54818 < inst_54817);
var inst_54821 = inst_54820;
var state_54936__$1 = state_54936;
if(cljs.core.truth_(inst_54821)){
var statearr_55013_56139 = state_54936__$1;
(statearr_55013_56139[(1)] = (10));

} else {
var statearr_55014_56141 = state_54936__$1;
(statearr_55014_56141[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54116__auto__ = null;
var cljs$core$async$mult_$_state_machine__54116__auto____0 = (function (){
var statearr_55015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55015[(0)] = cljs$core$async$mult_$_state_machine__54116__auto__);

(statearr_55015[(1)] = (1));

return statearr_55015;
});
var cljs$core$async$mult_$_state_machine__54116__auto____1 = (function (state_54936){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_54936);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55016){var ex__54119__auto__ = e55016;
var statearr_55017_56146 = state_54936;
(statearr_55017_56146[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_54936[(4)]))){
var statearr_55018_56147 = state_54936;
(statearr_55018_56147[(1)] = cljs.core.first((state_54936[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56149 = state_54936;
state_54936 = G__56149;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54116__auto__ = function(state_54936){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54116__auto____1.call(this,state_54936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54116__auto____0;
cljs$core$async$mult_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54116__auto____1;
return cljs$core$async$mult_$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55019 = f__54187__auto__();
(statearr_55019[(6)] = c__54186__auto___56051);

return statearr_55019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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
var G__55021 = arguments.length;
switch (G__55021) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56159 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56159(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56163 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56163(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56164 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56164(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56165 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56165(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56170 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56170(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56171 = arguments.length;
var i__5750__auto___56172 = (0);
while(true){
if((i__5750__auto___56172 < len__5749__auto___56171)){
args__5755__auto__.push((arguments[i__5750__auto___56172]));

var G__56173 = (i__5750__auto___56172 + (1));
i__5750__auto___56172 = G__56173;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55026){
var map__55027 = p__55026;
var map__55027__$1 = cljs.core.__destructure_map(map__55027);
var opts = map__55027__$1;
var statearr_55028_56178 = state;
(statearr_55028_56178[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55029_56179 = state;
(statearr_55029_56179[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_55030_56180 = state;
(statearr_55030_56180[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55022){
var G__55023 = cljs.core.first(seq55022);
var seq55022__$1 = cljs.core.next(seq55022);
var G__55024 = cljs.core.first(seq55022__$1);
var seq55022__$2 = cljs.core.next(seq55022__$1);
var G__55025 = cljs.core.first(seq55022__$2);
var seq55022__$3 = cljs.core.next(seq55022__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55023,G__55024,G__55025,seq55022__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55031 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55032){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55032 = meta55032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55033,meta55032__$1){
var self__ = this;
var _55033__$1 = this;
return (new cljs.core.async.t_cljs$core$async55031(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55032__$1));
}));

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55033){
var self__ = this;
var _55033__$1 = this;
return self__.meta55032;
}));

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55031.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55032","meta55032",-2090187074,null)], null);
}));

(cljs.core.async.t_cljs$core$async55031.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55031");

(cljs.core.async.t_cljs$core$async55031.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55031");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55031.
 */
cljs.core.async.__GT_t_cljs$core$async55031 = (function cljs$core$async$__GT_t_cljs$core$async55031(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55032){
return (new cljs.core.async.t_cljs$core$async55031(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55032));
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
var m = (new cljs.core.async.t_cljs$core$async55031(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__54186__auto___56195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55101){
var state_val_55102 = (state_55101[(1)]);
if((state_val_55102 === (7))){
var inst_55061 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
if(cljs.core.truth_(inst_55061)){
var statearr_55103_56196 = state_55101__$1;
(statearr_55103_56196[(1)] = (8));

} else {
var statearr_55104_56197 = state_55101__$1;
(statearr_55104_56197[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (20))){
var inst_55054 = (state_55101[(7)]);
var state_55101__$1 = state_55101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55101__$1,(23),out,inst_55054);
} else {
if((state_val_55102 === (1))){
var inst_55037 = calc_state();
var inst_55038 = cljs.core.__destructure_map(inst_55037);
var inst_55039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55038,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55038,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55038,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55042 = inst_55037;
var state_55101__$1 = (function (){var statearr_55105 = state_55101;
(statearr_55105[(8)] = inst_55039);

(statearr_55105[(9)] = inst_55040);

(statearr_55105[(10)] = inst_55041);

(statearr_55105[(11)] = inst_55042);

return statearr_55105;
})();
var statearr_55106_56204 = state_55101__$1;
(statearr_55106_56204[(2)] = null);

(statearr_55106_56204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (24))){
var inst_55045 = (state_55101[(12)]);
var inst_55042 = inst_55045;
var state_55101__$1 = (function (){var statearr_55107 = state_55101;
(statearr_55107[(11)] = inst_55042);

return statearr_55107;
})();
var statearr_55108_56205 = state_55101__$1;
(statearr_55108_56205[(2)] = null);

(statearr_55108_56205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (4))){
var inst_55054 = (state_55101[(7)]);
var inst_55056 = (state_55101[(13)]);
var inst_55053 = (state_55101[(2)]);
var inst_55054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55053,(0),null);
var inst_55055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55053,(1),null);
var inst_55056__$1 = (inst_55054__$1 == null);
var state_55101__$1 = (function (){var statearr_55109 = state_55101;
(statearr_55109[(7)] = inst_55054__$1);

(statearr_55109[(14)] = inst_55055);

(statearr_55109[(13)] = inst_55056__$1);

return statearr_55109;
})();
if(cljs.core.truth_(inst_55056__$1)){
var statearr_55110_56206 = state_55101__$1;
(statearr_55110_56206[(1)] = (5));

} else {
var statearr_55111_56207 = state_55101__$1;
(statearr_55111_56207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (15))){
var inst_55046 = (state_55101[(15)]);
var inst_55075 = (state_55101[(16)]);
var inst_55075__$1 = cljs.core.empty_QMARK_(inst_55046);
var state_55101__$1 = (function (){var statearr_55112 = state_55101;
(statearr_55112[(16)] = inst_55075__$1);

return statearr_55112;
})();
if(inst_55075__$1){
var statearr_55113_56208 = state_55101__$1;
(statearr_55113_56208[(1)] = (17));

} else {
var statearr_55114_56209 = state_55101__$1;
(statearr_55114_56209[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (21))){
var inst_55045 = (state_55101[(12)]);
var inst_55042 = inst_55045;
var state_55101__$1 = (function (){var statearr_55115 = state_55101;
(statearr_55115[(11)] = inst_55042);

return statearr_55115;
})();
var statearr_55116_56210 = state_55101__$1;
(statearr_55116_56210[(2)] = null);

(statearr_55116_56210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (13))){
var inst_55068 = (state_55101[(2)]);
var inst_55069 = calc_state();
var inst_55042 = inst_55069;
var state_55101__$1 = (function (){var statearr_55117 = state_55101;
(statearr_55117[(17)] = inst_55068);

(statearr_55117[(11)] = inst_55042);

return statearr_55117;
})();
var statearr_55118_56211 = state_55101__$1;
(statearr_55118_56211[(2)] = null);

(statearr_55118_56211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (22))){
var inst_55095 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
var statearr_55119_56212 = state_55101__$1;
(statearr_55119_56212[(2)] = inst_55095);

(statearr_55119_56212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (6))){
var inst_55055 = (state_55101[(14)]);
var inst_55059 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55055,change);
var state_55101__$1 = state_55101;
var statearr_55120_56213 = state_55101__$1;
(statearr_55120_56213[(2)] = inst_55059);

(statearr_55120_56213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (25))){
var state_55101__$1 = state_55101;
var statearr_55121_56214 = state_55101__$1;
(statearr_55121_56214[(2)] = null);

(statearr_55121_56214[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (17))){
var inst_55047 = (state_55101[(18)]);
var inst_55055 = (state_55101[(14)]);
var inst_55077 = (inst_55047.cljs$core$IFn$_invoke$arity$1 ? inst_55047.cljs$core$IFn$_invoke$arity$1(inst_55055) : inst_55047.call(null,inst_55055));
var inst_55078 = cljs.core.not(inst_55077);
var state_55101__$1 = state_55101;
var statearr_55122_56216 = state_55101__$1;
(statearr_55122_56216[(2)] = inst_55078);

(statearr_55122_56216[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (3))){
var inst_55099 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55101__$1,inst_55099);
} else {
if((state_val_55102 === (12))){
var state_55101__$1 = state_55101;
var statearr_55123_56220 = state_55101__$1;
(statearr_55123_56220[(2)] = null);

(statearr_55123_56220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (2))){
var inst_55042 = (state_55101[(11)]);
var inst_55045 = (state_55101[(12)]);
var inst_55045__$1 = cljs.core.__destructure_map(inst_55042);
var inst_55046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55045__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55045__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55045__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55101__$1 = (function (){var statearr_55124 = state_55101;
(statearr_55124[(12)] = inst_55045__$1);

(statearr_55124[(15)] = inst_55046);

(statearr_55124[(18)] = inst_55047);

return statearr_55124;
})();
return cljs.core.async.ioc_alts_BANG_(state_55101__$1,(4),inst_55048);
} else {
if((state_val_55102 === (23))){
var inst_55086 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
if(cljs.core.truth_(inst_55086)){
var statearr_55125_56222 = state_55101__$1;
(statearr_55125_56222[(1)] = (24));

} else {
var statearr_55126_56223 = state_55101__$1;
(statearr_55126_56223[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (19))){
var inst_55081 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
var statearr_55127_56224 = state_55101__$1;
(statearr_55127_56224[(2)] = inst_55081);

(statearr_55127_56224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (11))){
var inst_55055 = (state_55101[(14)]);
var inst_55065 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55055);
var state_55101__$1 = state_55101;
var statearr_55128_56225 = state_55101__$1;
(statearr_55128_56225[(2)] = inst_55065);

(statearr_55128_56225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (9))){
var inst_55046 = (state_55101[(15)]);
var inst_55055 = (state_55101[(14)]);
var inst_55072 = (state_55101[(19)]);
var inst_55072__$1 = (inst_55046.cljs$core$IFn$_invoke$arity$1 ? inst_55046.cljs$core$IFn$_invoke$arity$1(inst_55055) : inst_55046.call(null,inst_55055));
var state_55101__$1 = (function (){var statearr_55129 = state_55101;
(statearr_55129[(19)] = inst_55072__$1);

return statearr_55129;
})();
if(cljs.core.truth_(inst_55072__$1)){
var statearr_55130_56227 = state_55101__$1;
(statearr_55130_56227[(1)] = (14));

} else {
var statearr_55131_56228 = state_55101__$1;
(statearr_55131_56228[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (5))){
var inst_55056 = (state_55101[(13)]);
var state_55101__$1 = state_55101;
var statearr_55132_56229 = state_55101__$1;
(statearr_55132_56229[(2)] = inst_55056);

(statearr_55132_56229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (14))){
var inst_55072 = (state_55101[(19)]);
var state_55101__$1 = state_55101;
var statearr_55133_56230 = state_55101__$1;
(statearr_55133_56230[(2)] = inst_55072);

(statearr_55133_56230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (26))){
var inst_55091 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
var statearr_55134_56231 = state_55101__$1;
(statearr_55134_56231[(2)] = inst_55091);

(statearr_55134_56231[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (16))){
var inst_55083 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
if(cljs.core.truth_(inst_55083)){
var statearr_55135_56232 = state_55101__$1;
(statearr_55135_56232[(1)] = (20));

} else {
var statearr_55136_56233 = state_55101__$1;
(statearr_55136_56233[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (10))){
var inst_55097 = (state_55101[(2)]);
var state_55101__$1 = state_55101;
var statearr_55137_56234 = state_55101__$1;
(statearr_55137_56234[(2)] = inst_55097);

(statearr_55137_56234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (18))){
var inst_55075 = (state_55101[(16)]);
var state_55101__$1 = state_55101;
var statearr_55138_56235 = state_55101__$1;
(statearr_55138_56235[(2)] = inst_55075);

(statearr_55138_56235[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55102 === (8))){
var inst_55054 = (state_55101[(7)]);
var inst_55063 = (inst_55054 == null);
var state_55101__$1 = state_55101;
if(cljs.core.truth_(inst_55063)){
var statearr_55139_56236 = state_55101__$1;
(statearr_55139_56236[(1)] = (11));

} else {
var statearr_55140_56237 = state_55101__$1;
(statearr_55140_56237[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54116__auto__ = null;
var cljs$core$async$mix_$_state_machine__54116__auto____0 = (function (){
var statearr_55141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55141[(0)] = cljs$core$async$mix_$_state_machine__54116__auto__);

(statearr_55141[(1)] = (1));

return statearr_55141;
});
var cljs$core$async$mix_$_state_machine__54116__auto____1 = (function (state_55101){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55101);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55142){var ex__54119__auto__ = e55142;
var statearr_55143_56238 = state_55101;
(statearr_55143_56238[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55101[(4)]))){
var statearr_55144_56239 = state_55101;
(statearr_55144_56239[(1)] = cljs.core.first((state_55101[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56244 = state_55101;
state_55101 = G__56244;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54116__auto__ = function(state_55101){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54116__auto____1.call(this,state_55101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54116__auto____0;
cljs$core$async$mix_$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54116__auto____1;
return cljs$core$async$mix_$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55145 = f__54187__auto__();
(statearr_55145[(6)] = c__54186__auto___56195);

return statearr_55145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56245 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56245(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56246 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56246(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56247 = (function() {
var G__56248 = null;
var G__56248__1 = (function (p){
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
var G__56248__2 = (function (p,v){
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
G__56248 = function(p,v){
switch(arguments.length){
case 1:
return G__56248__1.call(this,p);
case 2:
return G__56248__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56248.cljs$core$IFn$_invoke$arity$1 = G__56248__1;
G__56248.cljs$core$IFn$_invoke$arity$2 = G__56248__2;
return G__56248;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55147 = arguments.length;
switch (G__55147) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56247(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56247(p,v);
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
cljs.core.async.t_cljs$core$async55151 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55152){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55152 = meta55152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55153,meta55152__$1){
var self__ = this;
var _55153__$1 = this;
return (new cljs.core.async.t_cljs$core$async55151(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55152__$1));
}));

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55153){
var self__ = this;
var _55153__$1 = this;
return self__.meta55152;
}));

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55152","meta55152",77472220,null)], null);
}));

(cljs.core.async.t_cljs$core$async55151.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55151");

(cljs.core.async.t_cljs$core$async55151.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55151");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55151.
 */
cljs.core.async.__GT_t_cljs$core$async55151 = (function cljs$core$async$__GT_t_cljs$core$async55151(ch,topic_fn,buf_fn,mults,ensure_mult,meta55152){
return (new cljs.core.async.t_cljs$core$async55151(ch,topic_fn,buf_fn,mults,ensure_mult,meta55152));
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
var G__55150 = arguments.length;
switch (G__55150) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55148_SHARP_){
if(cljs.core.truth_((p1__55148_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55148_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55148_SHARP_.call(null,topic)))){
return p1__55148_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55148_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async55151(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__54186__auto___56253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55225){
var state_val_55226 = (state_55225[(1)]);
if((state_val_55226 === (7))){
var inst_55221 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
var statearr_55227_56254 = state_55225__$1;
(statearr_55227_56254[(2)] = inst_55221);

(statearr_55227_56254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (20))){
var state_55225__$1 = state_55225;
var statearr_55228_56255 = state_55225__$1;
(statearr_55228_56255[(2)] = null);

(statearr_55228_56255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (1))){
var state_55225__$1 = state_55225;
var statearr_55229_56256 = state_55225__$1;
(statearr_55229_56256[(2)] = null);

(statearr_55229_56256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (24))){
var inst_55204 = (state_55225[(7)]);
var inst_55213 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55204);
var state_55225__$1 = state_55225;
var statearr_55230_56259 = state_55225__$1;
(statearr_55230_56259[(2)] = inst_55213);

(statearr_55230_56259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (4))){
var inst_55156 = (state_55225[(8)]);
var inst_55156__$1 = (state_55225[(2)]);
var inst_55157 = (inst_55156__$1 == null);
var state_55225__$1 = (function (){var statearr_55231 = state_55225;
(statearr_55231[(8)] = inst_55156__$1);

return statearr_55231;
})();
if(cljs.core.truth_(inst_55157)){
var statearr_55232_56260 = state_55225__$1;
(statearr_55232_56260[(1)] = (5));

} else {
var statearr_55233_56261 = state_55225__$1;
(statearr_55233_56261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (15))){
var inst_55198 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
var statearr_55234_56262 = state_55225__$1;
(statearr_55234_56262[(2)] = inst_55198);

(statearr_55234_56262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (21))){
var inst_55218 = (state_55225[(2)]);
var state_55225__$1 = (function (){var statearr_55235 = state_55225;
(statearr_55235[(9)] = inst_55218);

return statearr_55235;
})();
var statearr_55236_56263 = state_55225__$1;
(statearr_55236_56263[(2)] = null);

(statearr_55236_56263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (13))){
var inst_55180 = (state_55225[(10)]);
var inst_55182 = cljs.core.chunked_seq_QMARK_(inst_55180);
var state_55225__$1 = state_55225;
if(inst_55182){
var statearr_55237_56264 = state_55225__$1;
(statearr_55237_56264[(1)] = (16));

} else {
var statearr_55238_56265 = state_55225__$1;
(statearr_55238_56265[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (22))){
var inst_55210 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
if(cljs.core.truth_(inst_55210)){
var statearr_55239_56266 = state_55225__$1;
(statearr_55239_56266[(1)] = (23));

} else {
var statearr_55240_56267 = state_55225__$1;
(statearr_55240_56267[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (6))){
var inst_55156 = (state_55225[(8)]);
var inst_55204 = (state_55225[(7)]);
var inst_55206 = (state_55225[(11)]);
var inst_55204__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55156) : topic_fn.call(null,inst_55156));
var inst_55205 = cljs.core.deref(mults);
var inst_55206__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55205,inst_55204__$1);
var state_55225__$1 = (function (){var statearr_55241 = state_55225;
(statearr_55241[(7)] = inst_55204__$1);

(statearr_55241[(11)] = inst_55206__$1);

return statearr_55241;
})();
if(cljs.core.truth_(inst_55206__$1)){
var statearr_55242_56268 = state_55225__$1;
(statearr_55242_56268[(1)] = (19));

} else {
var statearr_55243_56270 = state_55225__$1;
(statearr_55243_56270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (25))){
var inst_55215 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
var statearr_55244_56271 = state_55225__$1;
(statearr_55244_56271[(2)] = inst_55215);

(statearr_55244_56271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (17))){
var inst_55180 = (state_55225[(10)]);
var inst_55189 = cljs.core.first(inst_55180);
var inst_55190 = cljs.core.async.muxch_STAR_(inst_55189);
var inst_55191 = cljs.core.async.close_BANG_(inst_55190);
var inst_55192 = cljs.core.next(inst_55180);
var inst_55166 = inst_55192;
var inst_55167 = null;
var inst_55168 = (0);
var inst_55169 = (0);
var state_55225__$1 = (function (){var statearr_55245 = state_55225;
(statearr_55245[(12)] = inst_55191);

(statearr_55245[(13)] = inst_55166);

(statearr_55245[(14)] = inst_55167);

(statearr_55245[(15)] = inst_55168);

(statearr_55245[(16)] = inst_55169);

return statearr_55245;
})();
var statearr_55246_56272 = state_55225__$1;
(statearr_55246_56272[(2)] = null);

(statearr_55246_56272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (3))){
var inst_55223 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55225__$1,inst_55223);
} else {
if((state_val_55226 === (12))){
var inst_55200 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
var statearr_55247_56273 = state_55225__$1;
(statearr_55247_56273[(2)] = inst_55200);

(statearr_55247_56273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (2))){
var state_55225__$1 = state_55225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55225__$1,(4),ch);
} else {
if((state_val_55226 === (23))){
var state_55225__$1 = state_55225;
var statearr_55248_56274 = state_55225__$1;
(statearr_55248_56274[(2)] = null);

(statearr_55248_56274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (19))){
var inst_55206 = (state_55225[(11)]);
var inst_55156 = (state_55225[(8)]);
var inst_55208 = cljs.core.async.muxch_STAR_(inst_55206);
var state_55225__$1 = state_55225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55225__$1,(22),inst_55208,inst_55156);
} else {
if((state_val_55226 === (11))){
var inst_55166 = (state_55225[(13)]);
var inst_55180 = (state_55225[(10)]);
var inst_55180__$1 = cljs.core.seq(inst_55166);
var state_55225__$1 = (function (){var statearr_55249 = state_55225;
(statearr_55249[(10)] = inst_55180__$1);

return statearr_55249;
})();
if(inst_55180__$1){
var statearr_55250_56275 = state_55225__$1;
(statearr_55250_56275[(1)] = (13));

} else {
var statearr_55251_56276 = state_55225__$1;
(statearr_55251_56276[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (9))){
var inst_55202 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
var statearr_55252_56277 = state_55225__$1;
(statearr_55252_56277[(2)] = inst_55202);

(statearr_55252_56277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (5))){
var inst_55163 = cljs.core.deref(mults);
var inst_55164 = cljs.core.vals(inst_55163);
var inst_55165 = cljs.core.seq(inst_55164);
var inst_55166 = inst_55165;
var inst_55167 = null;
var inst_55168 = (0);
var inst_55169 = (0);
var state_55225__$1 = (function (){var statearr_55253 = state_55225;
(statearr_55253[(13)] = inst_55166);

(statearr_55253[(14)] = inst_55167);

(statearr_55253[(15)] = inst_55168);

(statearr_55253[(16)] = inst_55169);

return statearr_55253;
})();
var statearr_55254_56278 = state_55225__$1;
(statearr_55254_56278[(2)] = null);

(statearr_55254_56278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (14))){
var state_55225__$1 = state_55225;
var statearr_55258_56279 = state_55225__$1;
(statearr_55258_56279[(2)] = null);

(statearr_55258_56279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (16))){
var inst_55180 = (state_55225[(10)]);
var inst_55184 = cljs.core.chunk_first(inst_55180);
var inst_55185 = cljs.core.chunk_rest(inst_55180);
var inst_55186 = cljs.core.count(inst_55184);
var inst_55166 = inst_55185;
var inst_55167 = inst_55184;
var inst_55168 = inst_55186;
var inst_55169 = (0);
var state_55225__$1 = (function (){var statearr_55259 = state_55225;
(statearr_55259[(13)] = inst_55166);

(statearr_55259[(14)] = inst_55167);

(statearr_55259[(15)] = inst_55168);

(statearr_55259[(16)] = inst_55169);

return statearr_55259;
})();
var statearr_55260_56280 = state_55225__$1;
(statearr_55260_56280[(2)] = null);

(statearr_55260_56280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (10))){
var inst_55167 = (state_55225[(14)]);
var inst_55169 = (state_55225[(16)]);
var inst_55166 = (state_55225[(13)]);
var inst_55168 = (state_55225[(15)]);
var inst_55174 = cljs.core._nth(inst_55167,inst_55169);
var inst_55175 = cljs.core.async.muxch_STAR_(inst_55174);
var inst_55176 = cljs.core.async.close_BANG_(inst_55175);
var inst_55177 = (inst_55169 + (1));
var tmp55255 = inst_55167;
var tmp55256 = inst_55168;
var tmp55257 = inst_55166;
var inst_55166__$1 = tmp55257;
var inst_55167__$1 = tmp55255;
var inst_55168__$1 = tmp55256;
var inst_55169__$1 = inst_55177;
var state_55225__$1 = (function (){var statearr_55261 = state_55225;
(statearr_55261[(17)] = inst_55176);

(statearr_55261[(13)] = inst_55166__$1);

(statearr_55261[(14)] = inst_55167__$1);

(statearr_55261[(15)] = inst_55168__$1);

(statearr_55261[(16)] = inst_55169__$1);

return statearr_55261;
})();
var statearr_55262_56281 = state_55225__$1;
(statearr_55262_56281[(2)] = null);

(statearr_55262_56281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (18))){
var inst_55195 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
var statearr_55263_56282 = state_55225__$1;
(statearr_55263_56282[(2)] = inst_55195);

(statearr_55263_56282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (8))){
var inst_55169 = (state_55225[(16)]);
var inst_55168 = (state_55225[(15)]);
var inst_55171 = (inst_55169 < inst_55168);
var inst_55172 = inst_55171;
var state_55225__$1 = state_55225;
if(cljs.core.truth_(inst_55172)){
var statearr_55264_56283 = state_55225__$1;
(statearr_55264_56283[(1)] = (10));

} else {
var statearr_55265_56284 = state_55225__$1;
(statearr_55265_56284[(1)] = (11));

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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55266[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55266[(1)] = (1));

return statearr_55266;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55225){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55225);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55267){var ex__54119__auto__ = e55267;
var statearr_55268_56289 = state_55225;
(statearr_55268_56289[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55225[(4)]))){
var statearr_55269_56290 = state_55225;
(statearr_55269_56290[(1)] = cljs.core.first((state_55225[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56291 = state_55225;
state_55225 = G__56291;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55270 = f__54187__auto__();
(statearr_55270[(6)] = c__54186__auto___56253);

return statearr_55270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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
var G__55272 = arguments.length;
switch (G__55272) {
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
var G__55274 = arguments.length;
switch (G__55274) {
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
var G__55276 = arguments.length;
switch (G__55276) {
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
var c__54186__auto___56295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55319){
var state_val_55320 = (state_55319[(1)]);
if((state_val_55320 === (7))){
var state_55319__$1 = state_55319;
var statearr_55321_56296 = state_55319__$1;
(statearr_55321_56296[(2)] = null);

(statearr_55321_56296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (1))){
var state_55319__$1 = state_55319;
var statearr_55322_56301 = state_55319__$1;
(statearr_55322_56301[(2)] = null);

(statearr_55322_56301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (4))){
var inst_55280 = (state_55319[(7)]);
var inst_55279 = (state_55319[(8)]);
var inst_55282 = (inst_55280 < inst_55279);
var state_55319__$1 = state_55319;
if(cljs.core.truth_(inst_55282)){
var statearr_55323_56302 = state_55319__$1;
(statearr_55323_56302[(1)] = (6));

} else {
var statearr_55324_56303 = state_55319__$1;
(statearr_55324_56303[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (15))){
var inst_55305 = (state_55319[(9)]);
var inst_55310 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55305);
var state_55319__$1 = state_55319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55319__$1,(17),out,inst_55310);
} else {
if((state_val_55320 === (13))){
var inst_55305 = (state_55319[(9)]);
var inst_55305__$1 = (state_55319[(2)]);
var inst_55306 = cljs.core.some(cljs.core.nil_QMARK_,inst_55305__$1);
var state_55319__$1 = (function (){var statearr_55325 = state_55319;
(statearr_55325[(9)] = inst_55305__$1);

return statearr_55325;
})();
if(cljs.core.truth_(inst_55306)){
var statearr_55326_56304 = state_55319__$1;
(statearr_55326_56304[(1)] = (14));

} else {
var statearr_55327_56305 = state_55319__$1;
(statearr_55327_56305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (6))){
var state_55319__$1 = state_55319;
var statearr_55328_56306 = state_55319__$1;
(statearr_55328_56306[(2)] = null);

(statearr_55328_56306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (17))){
var inst_55312 = (state_55319[(2)]);
var state_55319__$1 = (function (){var statearr_55330 = state_55319;
(statearr_55330[(10)] = inst_55312);

return statearr_55330;
})();
var statearr_55331_56307 = state_55319__$1;
(statearr_55331_56307[(2)] = null);

(statearr_55331_56307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (3))){
var inst_55317 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55319__$1,inst_55317);
} else {
if((state_val_55320 === (12))){
var _ = (function (){var statearr_55332 = state_55319;
(statearr_55332[(4)] = cljs.core.rest((state_55319[(4)])));

return statearr_55332;
})();
var state_55319__$1 = state_55319;
var ex55329 = (state_55319__$1[(2)]);
var statearr_55333_56308 = state_55319__$1;
(statearr_55333_56308[(5)] = ex55329);


if((ex55329 instanceof Object)){
var statearr_55334_56309 = state_55319__$1;
(statearr_55334_56309[(1)] = (11));

(statearr_55334_56309[(5)] = null);

} else {
throw ex55329;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (2))){
var inst_55278 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55279 = cnt;
var inst_55280 = (0);
var state_55319__$1 = (function (){var statearr_55335 = state_55319;
(statearr_55335[(11)] = inst_55278);

(statearr_55335[(8)] = inst_55279);

(statearr_55335[(7)] = inst_55280);

return statearr_55335;
})();
var statearr_55336_56310 = state_55319__$1;
(statearr_55336_56310[(2)] = null);

(statearr_55336_56310[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (11))){
var inst_55284 = (state_55319[(2)]);
var inst_55285 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55319__$1 = (function (){var statearr_55337 = state_55319;
(statearr_55337[(12)] = inst_55284);

return statearr_55337;
})();
var statearr_55338_56312 = state_55319__$1;
(statearr_55338_56312[(2)] = inst_55285);

(statearr_55338_56312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (9))){
var inst_55280 = (state_55319[(7)]);
var _ = (function (){var statearr_55339 = state_55319;
(statearr_55339[(4)] = cljs.core.cons((12),(state_55319[(4)])));

return statearr_55339;
})();
var inst_55291 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55280) : chs__$1.call(null,inst_55280));
var inst_55292 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55280) : done.call(null,inst_55280));
var inst_55293 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55291,inst_55292);
var ___$1 = (function (){var statearr_55340 = state_55319;
(statearr_55340[(4)] = cljs.core.rest((state_55319[(4)])));

return statearr_55340;
})();
var state_55319__$1 = state_55319;
var statearr_55341_56313 = state_55319__$1;
(statearr_55341_56313[(2)] = inst_55293);

(statearr_55341_56313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (5))){
var inst_55303 = (state_55319[(2)]);
var state_55319__$1 = (function (){var statearr_55342 = state_55319;
(statearr_55342[(13)] = inst_55303);

return statearr_55342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55319__$1,(13),dchan);
} else {
if((state_val_55320 === (14))){
var inst_55308 = cljs.core.async.close_BANG_(out);
var state_55319__$1 = state_55319;
var statearr_55343_56314 = state_55319__$1;
(statearr_55343_56314[(2)] = inst_55308);

(statearr_55343_56314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (16))){
var inst_55315 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
var statearr_55344_56315 = state_55319__$1;
(statearr_55344_56315[(2)] = inst_55315);

(statearr_55344_56315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (10))){
var inst_55280 = (state_55319[(7)]);
var inst_55296 = (state_55319[(2)]);
var inst_55297 = (inst_55280 + (1));
var inst_55280__$1 = inst_55297;
var state_55319__$1 = (function (){var statearr_55345 = state_55319;
(statearr_55345[(14)] = inst_55296);

(statearr_55345[(7)] = inst_55280__$1);

return statearr_55345;
})();
var statearr_55346_56316 = state_55319__$1;
(statearr_55346_56316[(2)] = null);

(statearr_55346_56316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55320 === (8))){
var inst_55301 = (state_55319[(2)]);
var state_55319__$1 = state_55319;
var statearr_55347_56317 = state_55319__$1;
(statearr_55347_56317[(2)] = inst_55301);

(statearr_55347_56317[(1)] = (5));


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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55348[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55348[(1)] = (1));

return statearr_55348;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55319){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55319);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55349){var ex__54119__auto__ = e55349;
var statearr_55350_56319 = state_55319;
(statearr_55350_56319[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55319[(4)]))){
var statearr_55351_56320 = state_55319;
(statearr_55351_56320[(1)] = cljs.core.first((state_55319[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56321 = state_55319;
state_55319 = G__56321;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55352 = f__54187__auto__();
(statearr_55352[(6)] = c__54186__auto___56295);

return statearr_55352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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
var G__55355 = arguments.length;
switch (G__55355) {
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
var c__54186__auto___56324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55387){
var state_val_55388 = (state_55387[(1)]);
if((state_val_55388 === (7))){
var inst_55366 = (state_55387[(7)]);
var inst_55367 = (state_55387[(8)]);
var inst_55366__$1 = (state_55387[(2)]);
var inst_55367__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55366__$1,(0),null);
var inst_55368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55366__$1,(1),null);
var inst_55369 = (inst_55367__$1 == null);
var state_55387__$1 = (function (){var statearr_55389 = state_55387;
(statearr_55389[(7)] = inst_55366__$1);

(statearr_55389[(8)] = inst_55367__$1);

(statearr_55389[(9)] = inst_55368);

return statearr_55389;
})();
if(cljs.core.truth_(inst_55369)){
var statearr_55390_56328 = state_55387__$1;
(statearr_55390_56328[(1)] = (8));

} else {
var statearr_55391_56329 = state_55387__$1;
(statearr_55391_56329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (1))){
var inst_55356 = cljs.core.vec(chs);
var inst_55357 = inst_55356;
var state_55387__$1 = (function (){var statearr_55392 = state_55387;
(statearr_55392[(10)] = inst_55357);

return statearr_55392;
})();
var statearr_55393_56330 = state_55387__$1;
(statearr_55393_56330[(2)] = null);

(statearr_55393_56330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (4))){
var inst_55357 = (state_55387[(10)]);
var state_55387__$1 = state_55387;
return cljs.core.async.ioc_alts_BANG_(state_55387__$1,(7),inst_55357);
} else {
if((state_val_55388 === (6))){
var inst_55383 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
var statearr_55394_56331 = state_55387__$1;
(statearr_55394_56331[(2)] = inst_55383);

(statearr_55394_56331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (3))){
var inst_55385 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55387__$1,inst_55385);
} else {
if((state_val_55388 === (2))){
var inst_55357 = (state_55387[(10)]);
var inst_55359 = cljs.core.count(inst_55357);
var inst_55360 = (inst_55359 > (0));
var state_55387__$1 = state_55387;
if(cljs.core.truth_(inst_55360)){
var statearr_55396_56332 = state_55387__$1;
(statearr_55396_56332[(1)] = (4));

} else {
var statearr_55397_56333 = state_55387__$1;
(statearr_55397_56333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (11))){
var inst_55357 = (state_55387[(10)]);
var inst_55376 = (state_55387[(2)]);
var tmp55395 = inst_55357;
var inst_55357__$1 = tmp55395;
var state_55387__$1 = (function (){var statearr_55398 = state_55387;
(statearr_55398[(11)] = inst_55376);

(statearr_55398[(10)] = inst_55357__$1);

return statearr_55398;
})();
var statearr_55399_56334 = state_55387__$1;
(statearr_55399_56334[(2)] = null);

(statearr_55399_56334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (9))){
var inst_55367 = (state_55387[(8)]);
var state_55387__$1 = state_55387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55387__$1,(11),out,inst_55367);
} else {
if((state_val_55388 === (5))){
var inst_55381 = cljs.core.async.close_BANG_(out);
var state_55387__$1 = state_55387;
var statearr_55400_56335 = state_55387__$1;
(statearr_55400_56335[(2)] = inst_55381);

(statearr_55400_56335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (10))){
var inst_55379 = (state_55387[(2)]);
var state_55387__$1 = state_55387;
var statearr_55401_56336 = state_55387__$1;
(statearr_55401_56336[(2)] = inst_55379);

(statearr_55401_56336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55388 === (8))){
var inst_55357 = (state_55387[(10)]);
var inst_55366 = (state_55387[(7)]);
var inst_55367 = (state_55387[(8)]);
var inst_55368 = (state_55387[(9)]);
var inst_55371 = (function (){var cs = inst_55357;
var vec__55362 = inst_55366;
var v = inst_55367;
var c = inst_55368;
return (function (p1__55353_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55353_SHARP_);
});
})();
var inst_55372 = cljs.core.filterv(inst_55371,inst_55357);
var inst_55357__$1 = inst_55372;
var state_55387__$1 = (function (){var statearr_55402 = state_55387;
(statearr_55402[(10)] = inst_55357__$1);

return statearr_55402;
})();
var statearr_55403_56337 = state_55387__$1;
(statearr_55403_56337[(2)] = null);

(statearr_55403_56337[(1)] = (2));


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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55404 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55404[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55404[(1)] = (1));

return statearr_55404;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55387){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55387);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55405){var ex__54119__auto__ = e55405;
var statearr_55406_56338 = state_55387;
(statearr_55406_56338[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55387[(4)]))){
var statearr_55407_56339 = state_55387;
(statearr_55407_56339[(1)] = cljs.core.first((state_55387[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56340 = state_55387;
state_55387 = G__56340;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55408 = f__54187__auto__();
(statearr_55408[(6)] = c__54186__auto___56324);

return statearr_55408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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
var G__55410 = arguments.length;
switch (G__55410) {
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
var c__54186__auto___56342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55434){
var state_val_55435 = (state_55434[(1)]);
if((state_val_55435 === (7))){
var inst_55416 = (state_55434[(7)]);
var inst_55416__$1 = (state_55434[(2)]);
var inst_55417 = (inst_55416__$1 == null);
var inst_55418 = cljs.core.not(inst_55417);
var state_55434__$1 = (function (){var statearr_55436 = state_55434;
(statearr_55436[(7)] = inst_55416__$1);

return statearr_55436;
})();
if(inst_55418){
var statearr_55437_56343 = state_55434__$1;
(statearr_55437_56343[(1)] = (8));

} else {
var statearr_55438_56344 = state_55434__$1;
(statearr_55438_56344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (1))){
var inst_55411 = (0);
var state_55434__$1 = (function (){var statearr_55439 = state_55434;
(statearr_55439[(8)] = inst_55411);

return statearr_55439;
})();
var statearr_55440_56345 = state_55434__$1;
(statearr_55440_56345[(2)] = null);

(statearr_55440_56345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (4))){
var state_55434__$1 = state_55434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55434__$1,(7),ch);
} else {
if((state_val_55435 === (6))){
var inst_55429 = (state_55434[(2)]);
var state_55434__$1 = state_55434;
var statearr_55441_56346 = state_55434__$1;
(statearr_55441_56346[(2)] = inst_55429);

(statearr_55441_56346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (3))){
var inst_55431 = (state_55434[(2)]);
var inst_55432 = cljs.core.async.close_BANG_(out);
var state_55434__$1 = (function (){var statearr_55442 = state_55434;
(statearr_55442[(9)] = inst_55431);

return statearr_55442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55434__$1,inst_55432);
} else {
if((state_val_55435 === (2))){
var inst_55411 = (state_55434[(8)]);
var inst_55413 = (inst_55411 < n);
var state_55434__$1 = state_55434;
if(cljs.core.truth_(inst_55413)){
var statearr_55443_56347 = state_55434__$1;
(statearr_55443_56347[(1)] = (4));

} else {
var statearr_55444_56352 = state_55434__$1;
(statearr_55444_56352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (11))){
var inst_55411 = (state_55434[(8)]);
var inst_55421 = (state_55434[(2)]);
var inst_55422 = (inst_55411 + (1));
var inst_55411__$1 = inst_55422;
var state_55434__$1 = (function (){var statearr_55445 = state_55434;
(statearr_55445[(10)] = inst_55421);

(statearr_55445[(8)] = inst_55411__$1);

return statearr_55445;
})();
var statearr_55446_56353 = state_55434__$1;
(statearr_55446_56353[(2)] = null);

(statearr_55446_56353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (9))){
var state_55434__$1 = state_55434;
var statearr_55447_56354 = state_55434__$1;
(statearr_55447_56354[(2)] = null);

(statearr_55447_56354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (5))){
var state_55434__$1 = state_55434;
var statearr_55448_56355 = state_55434__$1;
(statearr_55448_56355[(2)] = null);

(statearr_55448_56355[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (10))){
var inst_55426 = (state_55434[(2)]);
var state_55434__$1 = state_55434;
var statearr_55449_56356 = state_55434__$1;
(statearr_55449_56356[(2)] = inst_55426);

(statearr_55449_56356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55435 === (8))){
var inst_55416 = (state_55434[(7)]);
var state_55434__$1 = state_55434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55434__$1,(11),out,inst_55416);
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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55450 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55450[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55450[(1)] = (1));

return statearr_55450;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55434){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55434);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55451){var ex__54119__auto__ = e55451;
var statearr_55452_56357 = state_55434;
(statearr_55452_56357[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55434[(4)]))){
var statearr_55453_56358 = state_55434;
(statearr_55453_56358[(1)] = cljs.core.first((state_55434[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56359 = state_55434;
state_55434 = G__56359;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55454 = f__54187__auto__();
(statearr_55454[(6)] = c__54186__auto___56342);

return statearr_55454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
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
cljs.core.async.t_cljs$core$async55459 = (function (f,ch,meta55457,_,fn1,meta55460){
this.f = f;
this.ch = ch;
this.meta55457 = meta55457;
this._ = _;
this.fn1 = fn1;
this.meta55460 = meta55460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55461,meta55460__$1){
var self__ = this;
var _55461__$1 = this;
return (new cljs.core.async.t_cljs$core$async55459(self__.f,self__.ch,self__.meta55457,self__._,self__.fn1,meta55460__$1));
}));

(cljs.core.async.t_cljs$core$async55459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55461){
var self__ = this;
var _55461__$1 = this;
return self__.meta55460;
}));

(cljs.core.async.t_cljs$core$async55459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55455_SHARP_){
var G__55462 = (((p1__55455_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55455_SHARP_) : self__.f.call(null,p1__55455_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55462) : f1.call(null,G__55462));
});
}));

(cljs.core.async.t_cljs$core$async55459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55457","meta55457",-1239712017,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55456","cljs.core.async/t_cljs$core$async55456",-767700854,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55460","meta55460",1901960019,null)], null);
}));

(cljs.core.async.t_cljs$core$async55459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55459");

(cljs.core.async.t_cljs$core$async55459.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55459.
 */
cljs.core.async.__GT_t_cljs$core$async55459 = (function cljs$core$async$__GT_t_cljs$core$async55459(f,ch,meta55457,_,fn1,meta55460){
return (new cljs.core.async.t_cljs$core$async55459(f,ch,meta55457,_,fn1,meta55460));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55456 = (function (f,ch,meta55457){
this.f = f;
this.ch = ch;
this.meta55457 = meta55457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55458,meta55457__$1){
var self__ = this;
var _55458__$1 = this;
return (new cljs.core.async.t_cljs$core$async55456(self__.f,self__.ch,meta55457__$1));
}));

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55458){
var self__ = this;
var _55458__$1 = this;
return self__.meta55457;
}));

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async55459(self__.f,self__.ch,self__.meta55457,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55463 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55463) : self__.f.call(null,G__55463));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55456.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55457","meta55457",-1239712017,null)], null);
}));

(cljs.core.async.t_cljs$core$async55456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55456");

(cljs.core.async.t_cljs$core$async55456.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55456.
 */
cljs.core.async.__GT_t_cljs$core$async55456 = (function cljs$core$async$__GT_t_cljs$core$async55456(f,ch,meta55457){
return (new cljs.core.async.t_cljs$core$async55456(f,ch,meta55457));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55456(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55464 = (function (f,ch,meta55465){
this.f = f;
this.ch = ch;
this.meta55465 = meta55465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55466,meta55465__$1){
var self__ = this;
var _55466__$1 = this;
return (new cljs.core.async.t_cljs$core$async55464(self__.f,self__.ch,meta55465__$1));
}));

(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55466){
var self__ = this;
var _55466__$1 = this;
return self__.meta55465;
}));

(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55464.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55465","meta55465",278694923,null)], null);
}));

(cljs.core.async.t_cljs$core$async55464.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55464");

(cljs.core.async.t_cljs$core$async55464.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55464");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55464.
 */
cljs.core.async.__GT_t_cljs$core$async55464 = (function cljs$core$async$__GT_t_cljs$core$async55464(f,ch,meta55465){
return (new cljs.core.async.t_cljs$core$async55464(f,ch,meta55465));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55464(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55467 = (function (p,ch,meta55468){
this.p = p;
this.ch = ch;
this.meta55468 = meta55468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55469,meta55468__$1){
var self__ = this;
var _55469__$1 = this;
return (new cljs.core.async.t_cljs$core$async55467(self__.p,self__.ch,meta55468__$1));
}));

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55469){
var self__ = this;
var _55469__$1 = this;
return self__.meta55468;
}));

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55468","meta55468",-1793021932,null)], null);
}));

(cljs.core.async.t_cljs$core$async55467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55467");

(cljs.core.async.t_cljs$core$async55467.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55467.
 */
cljs.core.async.__GT_t_cljs$core$async55467 = (function cljs$core$async$__GT_t_cljs$core$async55467(p,ch,meta55468){
return (new cljs.core.async.t_cljs$core$async55467(p,ch,meta55468));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async55467(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55471 = arguments.length;
switch (G__55471) {
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
var c__54186__auto___56367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55492){
var state_val_55493 = (state_55492[(1)]);
if((state_val_55493 === (7))){
var inst_55488 = (state_55492[(2)]);
var state_55492__$1 = state_55492;
var statearr_55494_56372 = state_55492__$1;
(statearr_55494_56372[(2)] = inst_55488);

(statearr_55494_56372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (1))){
var state_55492__$1 = state_55492;
var statearr_55495_56373 = state_55492__$1;
(statearr_55495_56373[(2)] = null);

(statearr_55495_56373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (4))){
var inst_55474 = (state_55492[(7)]);
var inst_55474__$1 = (state_55492[(2)]);
var inst_55475 = (inst_55474__$1 == null);
var state_55492__$1 = (function (){var statearr_55496 = state_55492;
(statearr_55496[(7)] = inst_55474__$1);

return statearr_55496;
})();
if(cljs.core.truth_(inst_55475)){
var statearr_55497_56374 = state_55492__$1;
(statearr_55497_56374[(1)] = (5));

} else {
var statearr_55498_56375 = state_55492__$1;
(statearr_55498_56375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (6))){
var inst_55474 = (state_55492[(7)]);
var inst_55479 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55474) : p.call(null,inst_55474));
var state_55492__$1 = state_55492;
if(cljs.core.truth_(inst_55479)){
var statearr_55499_56376 = state_55492__$1;
(statearr_55499_56376[(1)] = (8));

} else {
var statearr_55500_56377 = state_55492__$1;
(statearr_55500_56377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (3))){
var inst_55490 = (state_55492[(2)]);
var state_55492__$1 = state_55492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55492__$1,inst_55490);
} else {
if((state_val_55493 === (2))){
var state_55492__$1 = state_55492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55492__$1,(4),ch);
} else {
if((state_val_55493 === (11))){
var inst_55482 = (state_55492[(2)]);
var state_55492__$1 = state_55492;
var statearr_55501_56378 = state_55492__$1;
(statearr_55501_56378[(2)] = inst_55482);

(statearr_55501_56378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (9))){
var state_55492__$1 = state_55492;
var statearr_55502_56379 = state_55492__$1;
(statearr_55502_56379[(2)] = null);

(statearr_55502_56379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (5))){
var inst_55477 = cljs.core.async.close_BANG_(out);
var state_55492__$1 = state_55492;
var statearr_55503_56380 = state_55492__$1;
(statearr_55503_56380[(2)] = inst_55477);

(statearr_55503_56380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (10))){
var inst_55485 = (state_55492[(2)]);
var state_55492__$1 = (function (){var statearr_55504 = state_55492;
(statearr_55504[(8)] = inst_55485);

return statearr_55504;
})();
var statearr_55505_56381 = state_55492__$1;
(statearr_55505_56381[(2)] = null);

(statearr_55505_56381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55493 === (8))){
var inst_55474 = (state_55492[(7)]);
var state_55492__$1 = state_55492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55492__$1,(11),out,inst_55474);
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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55506 = [null,null,null,null,null,null,null,null,null];
(statearr_55506[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55506[(1)] = (1));

return statearr_55506;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55492){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55492);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55507){var ex__54119__auto__ = e55507;
var statearr_55508_56382 = state_55492;
(statearr_55508_56382[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55492[(4)]))){
var statearr_55509_56383 = state_55492;
(statearr_55509_56383[(1)] = cljs.core.first((state_55492[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56384 = state_55492;
state_55492 = G__56384;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55510 = f__54187__auto__();
(statearr_55510[(6)] = c__54186__auto___56367);

return statearr_55510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55512 = arguments.length;
switch (G__55512) {
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
var c__54186__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55574){
var state_val_55575 = (state_55574[(1)]);
if((state_val_55575 === (7))){
var inst_55570 = (state_55574[(2)]);
var state_55574__$1 = state_55574;
var statearr_55576_56386 = state_55574__$1;
(statearr_55576_56386[(2)] = inst_55570);

(statearr_55576_56386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (20))){
var inst_55540 = (state_55574[(7)]);
var inst_55551 = (state_55574[(2)]);
var inst_55552 = cljs.core.next(inst_55540);
var inst_55526 = inst_55552;
var inst_55527 = null;
var inst_55528 = (0);
var inst_55529 = (0);
var state_55574__$1 = (function (){var statearr_55577 = state_55574;
(statearr_55577[(8)] = inst_55551);

(statearr_55577[(9)] = inst_55526);

(statearr_55577[(10)] = inst_55527);

(statearr_55577[(11)] = inst_55528);

(statearr_55577[(12)] = inst_55529);

return statearr_55577;
})();
var statearr_55578_56387 = state_55574__$1;
(statearr_55578_56387[(2)] = null);

(statearr_55578_56387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (1))){
var state_55574__$1 = state_55574;
var statearr_55579_56390 = state_55574__$1;
(statearr_55579_56390[(2)] = null);

(statearr_55579_56390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (4))){
var inst_55515 = (state_55574[(13)]);
var inst_55515__$1 = (state_55574[(2)]);
var inst_55516 = (inst_55515__$1 == null);
var state_55574__$1 = (function (){var statearr_55580 = state_55574;
(statearr_55580[(13)] = inst_55515__$1);

return statearr_55580;
})();
if(cljs.core.truth_(inst_55516)){
var statearr_55581_56392 = state_55574__$1;
(statearr_55581_56392[(1)] = (5));

} else {
var statearr_55582_56393 = state_55574__$1;
(statearr_55582_56393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (15))){
var state_55574__$1 = state_55574;
var statearr_55586_56394 = state_55574__$1;
(statearr_55586_56394[(2)] = null);

(statearr_55586_56394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (21))){
var state_55574__$1 = state_55574;
var statearr_55587_56395 = state_55574__$1;
(statearr_55587_56395[(2)] = null);

(statearr_55587_56395[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (13))){
var inst_55529 = (state_55574[(12)]);
var inst_55526 = (state_55574[(9)]);
var inst_55527 = (state_55574[(10)]);
var inst_55528 = (state_55574[(11)]);
var inst_55536 = (state_55574[(2)]);
var inst_55537 = (inst_55529 + (1));
var tmp55583 = inst_55526;
var tmp55584 = inst_55527;
var tmp55585 = inst_55528;
var inst_55526__$1 = tmp55583;
var inst_55527__$1 = tmp55584;
var inst_55528__$1 = tmp55585;
var inst_55529__$1 = inst_55537;
var state_55574__$1 = (function (){var statearr_55588 = state_55574;
(statearr_55588[(14)] = inst_55536);

(statearr_55588[(9)] = inst_55526__$1);

(statearr_55588[(10)] = inst_55527__$1);

(statearr_55588[(11)] = inst_55528__$1);

(statearr_55588[(12)] = inst_55529__$1);

return statearr_55588;
})();
var statearr_55589_56397 = state_55574__$1;
(statearr_55589_56397[(2)] = null);

(statearr_55589_56397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (22))){
var state_55574__$1 = state_55574;
var statearr_55590_56398 = state_55574__$1;
(statearr_55590_56398[(2)] = null);

(statearr_55590_56398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (6))){
var inst_55515 = (state_55574[(13)]);
var inst_55524 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55515) : f.call(null,inst_55515));
var inst_55525 = cljs.core.seq(inst_55524);
var inst_55526 = inst_55525;
var inst_55527 = null;
var inst_55528 = (0);
var inst_55529 = (0);
var state_55574__$1 = (function (){var statearr_55591 = state_55574;
(statearr_55591[(9)] = inst_55526);

(statearr_55591[(10)] = inst_55527);

(statearr_55591[(11)] = inst_55528);

(statearr_55591[(12)] = inst_55529);

return statearr_55591;
})();
var statearr_55592_56399 = state_55574__$1;
(statearr_55592_56399[(2)] = null);

(statearr_55592_56399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (17))){
var inst_55540 = (state_55574[(7)]);
var inst_55544 = cljs.core.chunk_first(inst_55540);
var inst_55545 = cljs.core.chunk_rest(inst_55540);
var inst_55546 = cljs.core.count(inst_55544);
var inst_55526 = inst_55545;
var inst_55527 = inst_55544;
var inst_55528 = inst_55546;
var inst_55529 = (0);
var state_55574__$1 = (function (){var statearr_55593 = state_55574;
(statearr_55593[(9)] = inst_55526);

(statearr_55593[(10)] = inst_55527);

(statearr_55593[(11)] = inst_55528);

(statearr_55593[(12)] = inst_55529);

return statearr_55593;
})();
var statearr_55594_56403 = state_55574__$1;
(statearr_55594_56403[(2)] = null);

(statearr_55594_56403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (3))){
var inst_55572 = (state_55574[(2)]);
var state_55574__$1 = state_55574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55574__$1,inst_55572);
} else {
if((state_val_55575 === (12))){
var inst_55560 = (state_55574[(2)]);
var state_55574__$1 = state_55574;
var statearr_55595_56404 = state_55574__$1;
(statearr_55595_56404[(2)] = inst_55560);

(statearr_55595_56404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (2))){
var state_55574__$1 = state_55574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55574__$1,(4),in$);
} else {
if((state_val_55575 === (23))){
var inst_55568 = (state_55574[(2)]);
var state_55574__$1 = state_55574;
var statearr_55596_56405 = state_55574__$1;
(statearr_55596_56405[(2)] = inst_55568);

(statearr_55596_56405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (19))){
var inst_55555 = (state_55574[(2)]);
var state_55574__$1 = state_55574;
var statearr_55597_56406 = state_55574__$1;
(statearr_55597_56406[(2)] = inst_55555);

(statearr_55597_56406[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (11))){
var inst_55526 = (state_55574[(9)]);
var inst_55540 = (state_55574[(7)]);
var inst_55540__$1 = cljs.core.seq(inst_55526);
var state_55574__$1 = (function (){var statearr_55598 = state_55574;
(statearr_55598[(7)] = inst_55540__$1);

return statearr_55598;
})();
if(inst_55540__$1){
var statearr_55599_56407 = state_55574__$1;
(statearr_55599_56407[(1)] = (14));

} else {
var statearr_55600_56408 = state_55574__$1;
(statearr_55600_56408[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (9))){
var inst_55562 = (state_55574[(2)]);
var inst_55563 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55574__$1 = (function (){var statearr_55601 = state_55574;
(statearr_55601[(15)] = inst_55562);

return statearr_55601;
})();
if(cljs.core.truth_(inst_55563)){
var statearr_55602_56409 = state_55574__$1;
(statearr_55602_56409[(1)] = (21));

} else {
var statearr_55603_56410 = state_55574__$1;
(statearr_55603_56410[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (5))){
var inst_55518 = cljs.core.async.close_BANG_(out);
var state_55574__$1 = state_55574;
var statearr_55604_56411 = state_55574__$1;
(statearr_55604_56411[(2)] = inst_55518);

(statearr_55604_56411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (14))){
var inst_55540 = (state_55574[(7)]);
var inst_55542 = cljs.core.chunked_seq_QMARK_(inst_55540);
var state_55574__$1 = state_55574;
if(inst_55542){
var statearr_55605_56412 = state_55574__$1;
(statearr_55605_56412[(1)] = (17));

} else {
var statearr_55606_56413 = state_55574__$1;
(statearr_55606_56413[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (16))){
var inst_55558 = (state_55574[(2)]);
var state_55574__$1 = state_55574;
var statearr_55607_56414 = state_55574__$1;
(statearr_55607_56414[(2)] = inst_55558);

(statearr_55607_56414[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55575 === (10))){
var inst_55527 = (state_55574[(10)]);
var inst_55529 = (state_55574[(12)]);
var inst_55534 = cljs.core._nth(inst_55527,inst_55529);
var state_55574__$1 = state_55574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55574__$1,(13),out,inst_55534);
} else {
if((state_val_55575 === (18))){
var inst_55540 = (state_55574[(7)]);
var inst_55549 = cljs.core.first(inst_55540);
var state_55574__$1 = state_55574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55574__$1,(20),out,inst_55549);
} else {
if((state_val_55575 === (8))){
var inst_55529 = (state_55574[(12)]);
var inst_55528 = (state_55574[(11)]);
var inst_55531 = (inst_55529 < inst_55528);
var inst_55532 = inst_55531;
var state_55574__$1 = state_55574;
if(cljs.core.truth_(inst_55532)){
var statearr_55608_56415 = state_55574__$1;
(statearr_55608_56415[(1)] = (10));

} else {
var statearr_55609_56416 = state_55574__$1;
(statearr_55609_56416[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54116__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54116__auto____0 = (function (){
var statearr_55610 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55610[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54116__auto__);

(statearr_55610[(1)] = (1));

return statearr_55610;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54116__auto____1 = (function (state_55574){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55574);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55611){var ex__54119__auto__ = e55611;
var statearr_55612_56417 = state_55574;
(statearr_55612_56417[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55574[(4)]))){
var statearr_55613_56418 = state_55574;
(statearr_55613_56418[(1)] = cljs.core.first((state_55574[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56419 = state_55574;
state_55574 = G__56419;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54116__auto__ = function(state_55574){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54116__auto____1.call(this,state_55574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54116__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54116__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55614 = f__54187__auto__();
(statearr_55614[(6)] = c__54186__auto__);

return statearr_55614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));

return c__54186__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55616 = arguments.length;
switch (G__55616) {
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
var G__55618 = arguments.length;
switch (G__55618) {
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
var G__55620 = arguments.length;
switch (G__55620) {
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
var c__54186__auto___56427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55644){
var state_val_55645 = (state_55644[(1)]);
if((state_val_55645 === (7))){
var inst_55639 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55646_56428 = state_55644__$1;
(statearr_55646_56428[(2)] = inst_55639);

(statearr_55646_56428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (1))){
var inst_55621 = null;
var state_55644__$1 = (function (){var statearr_55647 = state_55644;
(statearr_55647[(7)] = inst_55621);

return statearr_55647;
})();
var statearr_55648_56429 = state_55644__$1;
(statearr_55648_56429[(2)] = null);

(statearr_55648_56429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (4))){
var inst_55624 = (state_55644[(8)]);
var inst_55624__$1 = (state_55644[(2)]);
var inst_55625 = (inst_55624__$1 == null);
var inst_55626 = cljs.core.not(inst_55625);
var state_55644__$1 = (function (){var statearr_55649 = state_55644;
(statearr_55649[(8)] = inst_55624__$1);

return statearr_55649;
})();
if(inst_55626){
var statearr_55650_56430 = state_55644__$1;
(statearr_55650_56430[(1)] = (5));

} else {
var statearr_55651_56431 = state_55644__$1;
(statearr_55651_56431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (6))){
var state_55644__$1 = state_55644;
var statearr_55652_56432 = state_55644__$1;
(statearr_55652_56432[(2)] = null);

(statearr_55652_56432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (3))){
var inst_55641 = (state_55644[(2)]);
var inst_55642 = cljs.core.async.close_BANG_(out);
var state_55644__$1 = (function (){var statearr_55653 = state_55644;
(statearr_55653[(9)] = inst_55641);

return statearr_55653;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55644__$1,inst_55642);
} else {
if((state_val_55645 === (2))){
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55644__$1,(4),ch);
} else {
if((state_val_55645 === (11))){
var inst_55624 = (state_55644[(8)]);
var inst_55633 = (state_55644[(2)]);
var inst_55621 = inst_55624;
var state_55644__$1 = (function (){var statearr_55654 = state_55644;
(statearr_55654[(10)] = inst_55633);

(statearr_55654[(7)] = inst_55621);

return statearr_55654;
})();
var statearr_55655_56433 = state_55644__$1;
(statearr_55655_56433[(2)] = null);

(statearr_55655_56433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (9))){
var inst_55624 = (state_55644[(8)]);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55644__$1,(11),out,inst_55624);
} else {
if((state_val_55645 === (5))){
var inst_55624 = (state_55644[(8)]);
var inst_55621 = (state_55644[(7)]);
var inst_55628 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55624,inst_55621);
var state_55644__$1 = state_55644;
if(inst_55628){
var statearr_55657_56438 = state_55644__$1;
(statearr_55657_56438[(1)] = (8));

} else {
var statearr_55658_56439 = state_55644__$1;
(statearr_55658_56439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (10))){
var inst_55636 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55659_56440 = state_55644__$1;
(statearr_55659_56440[(2)] = inst_55636);

(statearr_55659_56440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (8))){
var inst_55621 = (state_55644[(7)]);
var tmp55656 = inst_55621;
var inst_55621__$1 = tmp55656;
var state_55644__$1 = (function (){var statearr_55660 = state_55644;
(statearr_55660[(7)] = inst_55621__$1);

return statearr_55660;
})();
var statearr_55661_56441 = state_55644__$1;
(statearr_55661_56441[(2)] = null);

(statearr_55661_56441[(1)] = (2));


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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55662 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55662[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55662[(1)] = (1));

return statearr_55662;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55644){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55644);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55663){var ex__54119__auto__ = e55663;
var statearr_55664_56442 = state_55644;
(statearr_55664_56442[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55644[(4)]))){
var statearr_55665_56443 = state_55644;
(statearr_55665_56443[(1)] = cljs.core.first((state_55644[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56444 = state_55644;
state_55644 = G__56444;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55666 = f__54187__auto__();
(statearr_55666[(6)] = c__54186__auto___56427);

return statearr_55666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55668 = arguments.length;
switch (G__55668) {
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
var c__54186__auto___56446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55706){
var state_val_55707 = (state_55706[(1)]);
if((state_val_55707 === (7))){
var inst_55702 = (state_55706[(2)]);
var state_55706__$1 = state_55706;
var statearr_55708_56451 = state_55706__$1;
(statearr_55708_56451[(2)] = inst_55702);

(statearr_55708_56451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (1))){
var inst_55669 = (new Array(n));
var inst_55670 = inst_55669;
var inst_55671 = (0);
var state_55706__$1 = (function (){var statearr_55709 = state_55706;
(statearr_55709[(7)] = inst_55670);

(statearr_55709[(8)] = inst_55671);

return statearr_55709;
})();
var statearr_55710_56452 = state_55706__$1;
(statearr_55710_56452[(2)] = null);

(statearr_55710_56452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (4))){
var inst_55674 = (state_55706[(9)]);
var inst_55674__$1 = (state_55706[(2)]);
var inst_55675 = (inst_55674__$1 == null);
var inst_55676 = cljs.core.not(inst_55675);
var state_55706__$1 = (function (){var statearr_55711 = state_55706;
(statearr_55711[(9)] = inst_55674__$1);

return statearr_55711;
})();
if(inst_55676){
var statearr_55712_56453 = state_55706__$1;
(statearr_55712_56453[(1)] = (5));

} else {
var statearr_55713_56454 = state_55706__$1;
(statearr_55713_56454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (15))){
var inst_55696 = (state_55706[(2)]);
var state_55706__$1 = state_55706;
var statearr_55714_56455 = state_55706__$1;
(statearr_55714_56455[(2)] = inst_55696);

(statearr_55714_56455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (13))){
var state_55706__$1 = state_55706;
var statearr_55715_56456 = state_55706__$1;
(statearr_55715_56456[(2)] = null);

(statearr_55715_56456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (6))){
var inst_55671 = (state_55706[(8)]);
var inst_55692 = (inst_55671 > (0));
var state_55706__$1 = state_55706;
if(cljs.core.truth_(inst_55692)){
var statearr_55716_56457 = state_55706__$1;
(statearr_55716_56457[(1)] = (12));

} else {
var statearr_55717_56458 = state_55706__$1;
(statearr_55717_56458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (3))){
var inst_55704 = (state_55706[(2)]);
var state_55706__$1 = state_55706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55706__$1,inst_55704);
} else {
if((state_val_55707 === (12))){
var inst_55670 = (state_55706[(7)]);
var inst_55694 = cljs.core.vec(inst_55670);
var state_55706__$1 = state_55706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55706__$1,(15),out,inst_55694);
} else {
if((state_val_55707 === (2))){
var state_55706__$1 = state_55706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55706__$1,(4),ch);
} else {
if((state_val_55707 === (11))){
var inst_55686 = (state_55706[(2)]);
var inst_55687 = (new Array(n));
var inst_55670 = inst_55687;
var inst_55671 = (0);
var state_55706__$1 = (function (){var statearr_55718 = state_55706;
(statearr_55718[(10)] = inst_55686);

(statearr_55718[(7)] = inst_55670);

(statearr_55718[(8)] = inst_55671);

return statearr_55718;
})();
var statearr_55719_56460 = state_55706__$1;
(statearr_55719_56460[(2)] = null);

(statearr_55719_56460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (9))){
var inst_55670 = (state_55706[(7)]);
var inst_55684 = cljs.core.vec(inst_55670);
var state_55706__$1 = state_55706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55706__$1,(11),out,inst_55684);
} else {
if((state_val_55707 === (5))){
var inst_55670 = (state_55706[(7)]);
var inst_55671 = (state_55706[(8)]);
var inst_55674 = (state_55706[(9)]);
var inst_55679 = (state_55706[(11)]);
var inst_55678 = (inst_55670[inst_55671] = inst_55674);
var inst_55679__$1 = (inst_55671 + (1));
var inst_55680 = (inst_55679__$1 < n);
var state_55706__$1 = (function (){var statearr_55720 = state_55706;
(statearr_55720[(12)] = inst_55678);

(statearr_55720[(11)] = inst_55679__$1);

return statearr_55720;
})();
if(cljs.core.truth_(inst_55680)){
var statearr_55721_56461 = state_55706__$1;
(statearr_55721_56461[(1)] = (8));

} else {
var statearr_55722_56462 = state_55706__$1;
(statearr_55722_56462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (14))){
var inst_55699 = (state_55706[(2)]);
var inst_55700 = cljs.core.async.close_BANG_(out);
var state_55706__$1 = (function (){var statearr_55724 = state_55706;
(statearr_55724[(13)] = inst_55699);

return statearr_55724;
})();
var statearr_55725_56463 = state_55706__$1;
(statearr_55725_56463[(2)] = inst_55700);

(statearr_55725_56463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (10))){
var inst_55690 = (state_55706[(2)]);
var state_55706__$1 = state_55706;
var statearr_55726_56464 = state_55706__$1;
(statearr_55726_56464[(2)] = inst_55690);

(statearr_55726_56464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55707 === (8))){
var inst_55670 = (state_55706[(7)]);
var inst_55679 = (state_55706[(11)]);
var tmp55723 = inst_55670;
var inst_55670__$1 = tmp55723;
var inst_55671 = inst_55679;
var state_55706__$1 = (function (){var statearr_55727 = state_55706;
(statearr_55727[(7)] = inst_55670__$1);

(statearr_55727[(8)] = inst_55671);

return statearr_55727;
})();
var statearr_55728_56465 = state_55706__$1;
(statearr_55728_56465[(2)] = null);

(statearr_55728_56465[(1)] = (2));


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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55729[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55729[(1)] = (1));

return statearr_55729;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55706){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55706);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55730){var ex__54119__auto__ = e55730;
var statearr_55731_56466 = state_55706;
(statearr_55731_56466[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55706[(4)]))){
var statearr_55732_56467 = state_55706;
(statearr_55732_56467[(1)] = cljs.core.first((state_55706[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56468 = state_55706;
state_55706 = G__56468;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55733 = f__54187__auto__();
(statearr_55733[(6)] = c__54186__auto___56446);

return statearr_55733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__55735 = arguments.length;
switch (G__55735) {
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
var c__54186__auto___56472 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54187__auto__ = (function (){var switch__54115__auto__ = (function (state_55780){
var state_val_55781 = (state_55780[(1)]);
if((state_val_55781 === (7))){
var inst_55776 = (state_55780[(2)]);
var state_55780__$1 = state_55780;
var statearr_55782_56473 = state_55780__$1;
(statearr_55782_56473[(2)] = inst_55776);

(statearr_55782_56473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (1))){
var inst_55736 = [];
var inst_55737 = inst_55736;
var inst_55738 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_55780__$1 = (function (){var statearr_55783 = state_55780;
(statearr_55783[(7)] = inst_55737);

(statearr_55783[(8)] = inst_55738);

return statearr_55783;
})();
var statearr_55784_56474 = state_55780__$1;
(statearr_55784_56474[(2)] = null);

(statearr_55784_56474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (4))){
var inst_55741 = (state_55780[(9)]);
var inst_55741__$1 = (state_55780[(2)]);
var inst_55742 = (inst_55741__$1 == null);
var inst_55743 = cljs.core.not(inst_55742);
var state_55780__$1 = (function (){var statearr_55785 = state_55780;
(statearr_55785[(9)] = inst_55741__$1);

return statearr_55785;
})();
if(inst_55743){
var statearr_55786_56475 = state_55780__$1;
(statearr_55786_56475[(1)] = (5));

} else {
var statearr_55787_56476 = state_55780__$1;
(statearr_55787_56476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (15))){
var inst_55737 = (state_55780[(7)]);
var inst_55768 = cljs.core.vec(inst_55737);
var state_55780__$1 = state_55780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55780__$1,(18),out,inst_55768);
} else {
if((state_val_55781 === (13))){
var inst_55763 = (state_55780[(2)]);
var state_55780__$1 = state_55780;
var statearr_55788_56478 = state_55780__$1;
(statearr_55788_56478[(2)] = inst_55763);

(statearr_55788_56478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (6))){
var inst_55737 = (state_55780[(7)]);
var inst_55765 = inst_55737.length;
var inst_55766 = (inst_55765 > (0));
var state_55780__$1 = state_55780;
if(cljs.core.truth_(inst_55766)){
var statearr_55789_56479 = state_55780__$1;
(statearr_55789_56479[(1)] = (15));

} else {
var statearr_55790_56480 = state_55780__$1;
(statearr_55790_56480[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (17))){
var inst_55773 = (state_55780[(2)]);
var inst_55774 = cljs.core.async.close_BANG_(out);
var state_55780__$1 = (function (){var statearr_55791 = state_55780;
(statearr_55791[(10)] = inst_55773);

return statearr_55791;
})();
var statearr_55792_56481 = state_55780__$1;
(statearr_55792_56481[(2)] = inst_55774);

(statearr_55792_56481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (3))){
var inst_55778 = (state_55780[(2)]);
var state_55780__$1 = state_55780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55780__$1,inst_55778);
} else {
if((state_val_55781 === (12))){
var inst_55737 = (state_55780[(7)]);
var inst_55756 = cljs.core.vec(inst_55737);
var state_55780__$1 = state_55780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55780__$1,(14),out,inst_55756);
} else {
if((state_val_55781 === (2))){
var state_55780__$1 = state_55780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55780__$1,(4),ch);
} else {
if((state_val_55781 === (11))){
var inst_55737 = (state_55780[(7)]);
var inst_55741 = (state_55780[(9)]);
var inst_55745 = (state_55780[(11)]);
var inst_55753 = inst_55737.push(inst_55741);
var tmp55793 = inst_55737;
var inst_55737__$1 = tmp55793;
var inst_55738 = inst_55745;
var state_55780__$1 = (function (){var statearr_55794 = state_55780;
(statearr_55794[(12)] = inst_55753);

(statearr_55794[(7)] = inst_55737__$1);

(statearr_55794[(8)] = inst_55738);

return statearr_55794;
})();
var statearr_55795_56482 = state_55780__$1;
(statearr_55795_56482[(2)] = null);

(statearr_55795_56482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (9))){
var inst_55738 = (state_55780[(8)]);
var inst_55749 = cljs.core.keyword_identical_QMARK_(inst_55738,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_55780__$1 = state_55780;
var statearr_55796_56483 = state_55780__$1;
(statearr_55796_56483[(2)] = inst_55749);

(statearr_55796_56483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (5))){
var inst_55741 = (state_55780[(9)]);
var inst_55745 = (state_55780[(11)]);
var inst_55738 = (state_55780[(8)]);
var inst_55746 = (state_55780[(13)]);
var inst_55745__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55741) : f.call(null,inst_55741));
var inst_55746__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55745__$1,inst_55738);
var state_55780__$1 = (function (){var statearr_55797 = state_55780;
(statearr_55797[(11)] = inst_55745__$1);

(statearr_55797[(13)] = inst_55746__$1);

return statearr_55797;
})();
if(inst_55746__$1){
var statearr_55798_56484 = state_55780__$1;
(statearr_55798_56484[(1)] = (8));

} else {
var statearr_55799_56485 = state_55780__$1;
(statearr_55799_56485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (14))){
var inst_55741 = (state_55780[(9)]);
var inst_55745 = (state_55780[(11)]);
var inst_55758 = (state_55780[(2)]);
var inst_55759 = [];
var inst_55760 = inst_55759.push(inst_55741);
var inst_55737 = inst_55759;
var inst_55738 = inst_55745;
var state_55780__$1 = (function (){var statearr_55800 = state_55780;
(statearr_55800[(14)] = inst_55758);

(statearr_55800[(15)] = inst_55760);

(statearr_55800[(7)] = inst_55737);

(statearr_55800[(8)] = inst_55738);

return statearr_55800;
})();
var statearr_55801_56486 = state_55780__$1;
(statearr_55801_56486[(2)] = null);

(statearr_55801_56486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (16))){
var state_55780__$1 = state_55780;
var statearr_55802_56487 = state_55780__$1;
(statearr_55802_56487[(2)] = null);

(statearr_55802_56487[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (10))){
var inst_55751 = (state_55780[(2)]);
var state_55780__$1 = state_55780;
if(cljs.core.truth_(inst_55751)){
var statearr_55803_56488 = state_55780__$1;
(statearr_55803_56488[(1)] = (11));

} else {
var statearr_55804_56489 = state_55780__$1;
(statearr_55804_56489[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (18))){
var inst_55770 = (state_55780[(2)]);
var state_55780__$1 = state_55780;
var statearr_55805_56490 = state_55780__$1;
(statearr_55805_56490[(2)] = inst_55770);

(statearr_55805_56490[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55781 === (8))){
var inst_55746 = (state_55780[(13)]);
var state_55780__$1 = state_55780;
var statearr_55806_56491 = state_55780__$1;
(statearr_55806_56491[(2)] = inst_55746);

(statearr_55806_56491[(1)] = (10));


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
var cljs$core$async$state_machine__54116__auto__ = null;
var cljs$core$async$state_machine__54116__auto____0 = (function (){
var statearr_55807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55807[(0)] = cljs$core$async$state_machine__54116__auto__);

(statearr_55807[(1)] = (1));

return statearr_55807;
});
var cljs$core$async$state_machine__54116__auto____1 = (function (state_55780){
while(true){
var ret_value__54117__auto__ = (function (){try{while(true){
var result__54118__auto__ = switch__54115__auto__(state_55780);
if(cljs.core.keyword_identical_QMARK_(result__54118__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54118__auto__;
}
break;
}
}catch (e55808){var ex__54119__auto__ = e55808;
var statearr_55809_56492 = state_55780;
(statearr_55809_56492[(2)] = ex__54119__auto__);


if(cljs.core.seq((state_55780[(4)]))){
var statearr_55810_56493 = state_55780;
(statearr_55810_56493[(1)] = cljs.core.first((state_55780[(4)])));

} else {
throw ex__54119__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54117__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56494 = state_55780;
state_55780 = G__56494;
continue;
} else {
return ret_value__54117__auto__;
}
break;
}
});
cljs$core$async$state_machine__54116__auto__ = function(state_55780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54116__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54116__auto____1.call(this,state_55780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54116__auto____0;
cljs$core$async$state_machine__54116__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54116__auto____1;
return cljs$core$async$state_machine__54116__auto__;
})()
})();
var state__54188__auto__ = (function (){var statearr_55811 = f__54187__auto__();
(statearr_55811[(6)] = c__54186__auto___56472);

return statearr_55811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54188__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
