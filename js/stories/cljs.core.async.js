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
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
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
cljs.core.async.t_cljs$core$async45182 = (function (f,blockable,meta45183){
this.f = f;
this.blockable = blockable;
this.meta45183 = meta45183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45184,meta45183__$1){
var self__ = this;
var _45184__$1 = this;
return (new cljs.core.async.t_cljs$core$async45182(self__.f,self__.blockable,meta45183__$1));
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45184){
var self__ = this;
var _45184__$1 = this;
return self__.meta45183;
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45183","meta45183",-1662055727,null)], null);
}));

(cljs.core.async.t_cljs$core$async45182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45182");

(cljs.core.async.t_cljs$core$async45182.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45182.
 */
cljs.core.async.__GT_t_cljs$core$async45182 = (function cljs$core$async$__GT_t_cljs$core$async45182(f,blockable,meta45183){
return (new cljs.core.async.t_cljs$core$async45182(f,blockable,meta45183));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__45181 = arguments.length;
switch (G__45181) {
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
return (new cljs.core.async.t_cljs$core$async45182(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45191 = arguments.length;
switch (G__45191) {
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
var G__45193 = arguments.length;
switch (G__45193) {
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
var G__45195 = arguments.length;
switch (G__45195) {
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
var val_46769 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46769) : fn1.call(null,val_46769));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46769) : fn1.call(null,val_46769));
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
var G__45197 = arguments.length;
switch (G__45197) {
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
var n__5616__auto___46771 = n;
var x_46772 = (0);
while(true){
if((x_46772 < n__5616__auto___46771)){
(a[x_46772] = x_46772);

var G__46773 = (x_46772 + (1));
x_46772 = G__46773;
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
cljs.core.async.t_cljs$core$async45200 = (function (flag,meta45201){
this.flag = flag;
this.meta45201 = meta45201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45202,meta45201__$1){
var self__ = this;
var _45202__$1 = this;
return (new cljs.core.async.t_cljs$core$async45200(self__.flag,meta45201__$1));
}));

(cljs.core.async.t_cljs$core$async45200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45202){
var self__ = this;
var _45202__$1 = this;
return self__.meta45201;
}));

(cljs.core.async.t_cljs$core$async45200.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45200.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45200.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45200.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45201","meta45201",1874919960,null)], null);
}));

(cljs.core.async.t_cljs$core$async45200.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45200");

(cljs.core.async.t_cljs$core$async45200.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45200");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45200.
 */
cljs.core.async.__GT_t_cljs$core$async45200 = (function cljs$core$async$__GT_t_cljs$core$async45200(flag,meta45201){
return (new cljs.core.async.t_cljs$core$async45200(flag,meta45201));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async45200(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45203 = (function (flag,cb,meta45204){
this.flag = flag;
this.cb = cb;
this.meta45204 = meta45204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45205,meta45204__$1){
var self__ = this;
var _45205__$1 = this;
return (new cljs.core.async.t_cljs$core$async45203(self__.flag,self__.cb,meta45204__$1));
}));

(cljs.core.async.t_cljs$core$async45203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45205){
var self__ = this;
var _45205__$1 = this;
return self__.meta45204;
}));

(cljs.core.async.t_cljs$core$async45203.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45204","meta45204",937285441,null)], null);
}));

(cljs.core.async.t_cljs$core$async45203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45203");

(cljs.core.async.t_cljs$core$async45203.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45203.
 */
cljs.core.async.__GT_t_cljs$core$async45203 = (function cljs$core$async$__GT_t_cljs$core$async45203(flag,cb,meta45204){
return (new cljs.core.async.t_cljs$core$async45203(flag,cb,meta45204));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async45203(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_46774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_46774)){
if((!(((port_46774.cljs$core$IFn$_invoke$arity$1 ? port_46774.cljs$core$IFn$_invoke$arity$1((1)) : port_46774.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__46775 = (i + (1));
i = G__46775;
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
return (function (p1__45210_SHARP_){
var G__45212 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45210_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45212) : fret.call(null,G__45212));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__45211_SHARP_){
var G__45213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45211_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45213) : fret.call(null,G__45213));
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
var G__46776 = (i + (1));
i = G__46776;
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
var len__5749__auto___46777 = arguments.length;
var i__5750__auto___46778 = (0);
while(true){
if((i__5750__auto___46778 < len__5749__auto___46777)){
args__5755__auto__.push((arguments[i__5750__auto___46778]));

var G__46779 = (i__5750__auto___46778 + (1));
i__5750__auto___46778 = G__46779;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45220){
var map__45221 = p__45220;
var map__45221__$1 = cljs.core.__destructure_map(map__45221);
var opts = map__45221__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45214){
var G__45215 = cljs.core.first(seq45214);
var seq45214__$1 = cljs.core.next(seq45214);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45215,seq45214__$1);
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
var G__45223 = arguments.length;
switch (G__45223) {
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
var c__45123__auto___46781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45251){
var state_val_45252 = (state_45251[(1)]);
if((state_val_45252 === (7))){
var inst_45247 = (state_45251[(2)]);
var state_45251__$1 = state_45251;
var statearr_45255_46782 = state_45251__$1;
(statearr_45255_46782[(2)] = inst_45247);

(statearr_45255_46782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (1))){
var state_45251__$1 = state_45251;
var statearr_45256_46783 = state_45251__$1;
(statearr_45256_46783[(2)] = null);

(statearr_45256_46783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (4))){
var inst_45230 = (state_45251[(7)]);
var inst_45230__$1 = (state_45251[(2)]);
var inst_45231 = (inst_45230__$1 == null);
var state_45251__$1 = (function (){var statearr_45257 = state_45251;
(statearr_45257[(7)] = inst_45230__$1);

return statearr_45257;
})();
if(cljs.core.truth_(inst_45231)){
var statearr_45258_46784 = state_45251__$1;
(statearr_45258_46784[(1)] = (5));

} else {
var statearr_45260_46785 = state_45251__$1;
(statearr_45260_46785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (13))){
var state_45251__$1 = state_45251;
var statearr_45262_46786 = state_45251__$1;
(statearr_45262_46786[(2)] = null);

(statearr_45262_46786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (6))){
var inst_45230 = (state_45251[(7)]);
var state_45251__$1 = state_45251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45251__$1,(11),to,inst_45230);
} else {
if((state_val_45252 === (3))){
var inst_45249 = (state_45251[(2)]);
var state_45251__$1 = state_45251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45251__$1,inst_45249);
} else {
if((state_val_45252 === (12))){
var state_45251__$1 = state_45251;
var statearr_45270_46787 = state_45251__$1;
(statearr_45270_46787[(2)] = null);

(statearr_45270_46787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (2))){
var state_45251__$1 = state_45251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45251__$1,(4),from);
} else {
if((state_val_45252 === (11))){
var inst_45240 = (state_45251[(2)]);
var state_45251__$1 = state_45251;
if(cljs.core.truth_(inst_45240)){
var statearr_45274_46788 = state_45251__$1;
(statearr_45274_46788[(1)] = (12));

} else {
var statearr_45275_46789 = state_45251__$1;
(statearr_45275_46789[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (9))){
var state_45251__$1 = state_45251;
var statearr_45279_46790 = state_45251__$1;
(statearr_45279_46790[(2)] = null);

(statearr_45279_46790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (5))){
var state_45251__$1 = state_45251;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45280_46791 = state_45251__$1;
(statearr_45280_46791[(1)] = (8));

} else {
var statearr_45281_46792 = state_45251__$1;
(statearr_45281_46792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (14))){
var inst_45245 = (state_45251[(2)]);
var state_45251__$1 = state_45251;
var statearr_45282_46793 = state_45251__$1;
(statearr_45282_46793[(2)] = inst_45245);

(statearr_45282_46793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (10))){
var inst_45237 = (state_45251[(2)]);
var state_45251__$1 = state_45251;
var statearr_45283_46794 = state_45251__$1;
(statearr_45283_46794[(2)] = inst_45237);

(statearr_45283_46794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45252 === (8))){
var inst_45234 = cljs.core.async.close_BANG_(to);
var state_45251__$1 = state_45251;
var statearr_45287_46795 = state_45251__$1;
(statearr_45287_46795[(2)] = inst_45234);

(statearr_45287_46795[(1)] = (10));


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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_45288 = [null,null,null,null,null,null,null,null];
(statearr_45288[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_45288[(1)] = (1));

return statearr_45288;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_45251){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45251);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45289){var ex__45056__auto__ = e45289;
var statearr_45290_46796 = state_45251;
(statearr_45290_46796[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45251[(4)]))){
var statearr_45291_46797 = state_45251;
(statearr_45291_46797[(1)] = cljs.core.first((state_45251[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46798 = state_45251;
state_45251 = G__46798;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_45251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_45251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45292 = f__45124__auto__();
(statearr_45292[(6)] = c__45123__auto___46781);

return statearr_45292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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
var process__$1 = (function (p__45295){
var vec__45296 = p__45295;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45296,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45296,(1),null);
var job = vec__45296;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45123__auto___46799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45303){
var state_val_45307 = (state_45303[(1)]);
if((state_val_45307 === (1))){
var state_45303__$1 = state_45303;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45303__$1,(2),res,v);
} else {
if((state_val_45307 === (2))){
var inst_45300 = (state_45303[(2)]);
var inst_45301 = cljs.core.async.close_BANG_(res);
var state_45303__$1 = (function (){var statearr_45308 = state_45303;
(statearr_45308[(7)] = inst_45300);

return statearr_45308;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45303__$1,inst_45301);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0 = (function (){
var statearr_45309 = [null,null,null,null,null,null,null,null];
(statearr_45309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__);

(statearr_45309[(1)] = (1));

return statearr_45309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1 = (function (state_45303){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45303);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45310){var ex__45056__auto__ = e45310;
var statearr_45311_46800 = state_45303;
(statearr_45311_46800[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45303[(4)]))){
var statearr_45312_46803 = state_45303;
(statearr_45312_46803[(1)] = cljs.core.first((state_45303[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46804 = state_45303;
state_45303 = G__46804;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = function(state_45303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1.call(this,state_45303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45313 = f__45124__auto__();
(statearr_45313[(6)] = c__45123__auto___46799);

return statearr_45313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45314){
var vec__45315 = p__45314;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45315,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45315,(1),null);
var job = vec__45315;
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
var n__5616__auto___46807 = n;
var __46808 = (0);
while(true){
if((__46808 < n__5616__auto___46807)){
var G__45318_46809 = type;
var G__45318_46810__$1 = (((G__45318_46809 instanceof cljs.core.Keyword))?G__45318_46809.fqn:null);
switch (G__45318_46810__$1) {
case "compute":
var c__45123__auto___46812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46808,c__45123__auto___46812,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async){
return (function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = ((function (__46808,c__45123__auto___46812,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async){
return (function (state_45331){
var state_val_45332 = (state_45331[(1)]);
if((state_val_45332 === (1))){
var state_45331__$1 = state_45331;
var statearr_45333_46814 = state_45331__$1;
(statearr_45333_46814[(2)] = null);

(statearr_45333_46814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (2))){
var state_45331__$1 = state_45331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45331__$1,(4),jobs);
} else {
if((state_val_45332 === (3))){
var inst_45329 = (state_45331[(2)]);
var state_45331__$1 = state_45331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45331__$1,inst_45329);
} else {
if((state_val_45332 === (4))){
var inst_45321 = (state_45331[(2)]);
var inst_45322 = process__$1(inst_45321);
var state_45331__$1 = state_45331;
if(cljs.core.truth_(inst_45322)){
var statearr_45334_46818 = state_45331__$1;
(statearr_45334_46818[(1)] = (5));

} else {
var statearr_45335_46819 = state_45331__$1;
(statearr_45335_46819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (5))){
var state_45331__$1 = state_45331;
var statearr_45336_46820 = state_45331__$1;
(statearr_45336_46820[(2)] = null);

(statearr_45336_46820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (6))){
var state_45331__$1 = state_45331;
var statearr_45337_46821 = state_45331__$1;
(statearr_45337_46821[(2)] = null);

(statearr_45337_46821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45332 === (7))){
var inst_45327 = (state_45331[(2)]);
var state_45331__$1 = state_45331;
var statearr_45338_46822 = state_45331__$1;
(statearr_45338_46822[(2)] = inst_45327);

(statearr_45338_46822[(1)] = (3));


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
});})(__46808,c__45123__auto___46812,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async))
;
return ((function (__46808,switch__45052__auto__,c__45123__auto___46812,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0 = (function (){
var statearr_45339 = [null,null,null,null,null,null,null];
(statearr_45339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__);

(statearr_45339[(1)] = (1));

return statearr_45339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1 = (function (state_45331){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45331);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45340){var ex__45056__auto__ = e45340;
var statearr_45341_46824 = state_45331;
(statearr_45341_46824[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45331[(4)]))){
var statearr_45342_46828 = state_45331;
(statearr_45342_46828[(1)] = cljs.core.first((state_45331[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46829 = state_45331;
state_45331 = G__46829;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = function(state_45331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1.call(this,state_45331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__;
})()
;})(__46808,switch__45052__auto__,c__45123__auto___46812,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async))
})();
var state__45125__auto__ = (function (){var statearr_45343 = f__45124__auto__();
(statearr_45343[(6)] = c__45123__auto___46812);

return statearr_45343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
});})(__46808,c__45123__auto___46812,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async))
);


break;
case "async":
var c__45123__auto___46830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46808,c__45123__auto___46830,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async){
return (function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = ((function (__46808,c__45123__auto___46830,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async){
return (function (state_45356){
var state_val_45357 = (state_45356[(1)]);
if((state_val_45357 === (1))){
var state_45356__$1 = state_45356;
var statearr_45358_46831 = state_45356__$1;
(statearr_45358_46831[(2)] = null);

(statearr_45358_46831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (2))){
var state_45356__$1 = state_45356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45356__$1,(4),jobs);
} else {
if((state_val_45357 === (3))){
var inst_45354 = (state_45356[(2)]);
var state_45356__$1 = state_45356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45356__$1,inst_45354);
} else {
if((state_val_45357 === (4))){
var inst_45346 = (state_45356[(2)]);
var inst_45347 = async(inst_45346);
var state_45356__$1 = state_45356;
if(cljs.core.truth_(inst_45347)){
var statearr_45359_46832 = state_45356__$1;
(statearr_45359_46832[(1)] = (5));

} else {
var statearr_45360_46833 = state_45356__$1;
(statearr_45360_46833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (5))){
var state_45356__$1 = state_45356;
var statearr_45361_46834 = state_45356__$1;
(statearr_45361_46834[(2)] = null);

(statearr_45361_46834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (6))){
var state_45356__$1 = state_45356;
var statearr_45363_46835 = state_45356__$1;
(statearr_45363_46835[(2)] = null);

(statearr_45363_46835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45357 === (7))){
var inst_45352 = (state_45356[(2)]);
var state_45356__$1 = state_45356;
var statearr_45364_46836 = state_45356__$1;
(statearr_45364_46836[(2)] = inst_45352);

(statearr_45364_46836[(1)] = (3));


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
});})(__46808,c__45123__auto___46830,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async))
;
return ((function (__46808,switch__45052__auto__,c__45123__auto___46830,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0 = (function (){
var statearr_45365 = [null,null,null,null,null,null,null];
(statearr_45365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__);

(statearr_45365[(1)] = (1));

return statearr_45365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1 = (function (state_45356){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45356);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45366){var ex__45056__auto__ = e45366;
var statearr_45367_46837 = state_45356;
(statearr_45367_46837[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45356[(4)]))){
var statearr_45368_46838 = state_45356;
(statearr_45368_46838[(1)] = cljs.core.first((state_45356[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46840 = state_45356;
state_45356 = G__46840;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = function(state_45356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1.call(this,state_45356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__;
})()
;})(__46808,switch__45052__auto__,c__45123__auto___46830,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async))
})();
var state__45125__auto__ = (function (){var statearr_45369 = f__45124__auto__();
(statearr_45369[(6)] = c__45123__auto___46830);

return statearr_45369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
});})(__46808,c__45123__auto___46830,G__45318_46809,G__45318_46810__$1,n__5616__auto___46807,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45318_46810__$1)].join('')));

}

var G__46844 = (__46808 + (1));
__46808 = G__46844;
continue;
} else {
}
break;
}

var c__45123__auto___46845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45391){
var state_val_45392 = (state_45391[(1)]);
if((state_val_45392 === (7))){
var inst_45387 = (state_45391[(2)]);
var state_45391__$1 = state_45391;
var statearr_45416_46846 = state_45391__$1;
(statearr_45416_46846[(2)] = inst_45387);

(statearr_45416_46846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45392 === (1))){
var state_45391__$1 = state_45391;
var statearr_45417_46847 = state_45391__$1;
(statearr_45417_46847[(2)] = null);

(statearr_45417_46847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45392 === (4))){
var inst_45372 = (state_45391[(7)]);
var inst_45372__$1 = (state_45391[(2)]);
var inst_45373 = (inst_45372__$1 == null);
var state_45391__$1 = (function (){var statearr_45418 = state_45391;
(statearr_45418[(7)] = inst_45372__$1);

return statearr_45418;
})();
if(cljs.core.truth_(inst_45373)){
var statearr_45419_46848 = state_45391__$1;
(statearr_45419_46848[(1)] = (5));

} else {
var statearr_45420_46849 = state_45391__$1;
(statearr_45420_46849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45392 === (6))){
var inst_45372 = (state_45391[(7)]);
var inst_45377 = (state_45391[(8)]);
var inst_45377__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45379 = [inst_45372,inst_45377__$1];
var inst_45380 = (new cljs.core.PersistentVector(null,2,(5),inst_45378,inst_45379,null));
var state_45391__$1 = (function (){var statearr_45422 = state_45391;
(statearr_45422[(8)] = inst_45377__$1);

return statearr_45422;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45391__$1,(8),jobs,inst_45380);
} else {
if((state_val_45392 === (3))){
var inst_45389 = (state_45391[(2)]);
var state_45391__$1 = state_45391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45391__$1,inst_45389);
} else {
if((state_val_45392 === (2))){
var state_45391__$1 = state_45391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45391__$1,(4),from);
} else {
if((state_val_45392 === (9))){
var inst_45384 = (state_45391[(2)]);
var state_45391__$1 = (function (){var statearr_45425 = state_45391;
(statearr_45425[(9)] = inst_45384);

return statearr_45425;
})();
var statearr_45426_46850 = state_45391__$1;
(statearr_45426_46850[(2)] = null);

(statearr_45426_46850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45392 === (5))){
var inst_45375 = cljs.core.async.close_BANG_(jobs);
var state_45391__$1 = state_45391;
var statearr_45427_46855 = state_45391__$1;
(statearr_45427_46855[(2)] = inst_45375);

(statearr_45427_46855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45392 === (8))){
var inst_45377 = (state_45391[(8)]);
var inst_45382 = (state_45391[(2)]);
var state_45391__$1 = (function (){var statearr_45428 = state_45391;
(statearr_45428[(10)] = inst_45382);

return statearr_45428;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45391__$1,(9),results,inst_45377);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0 = (function (){
var statearr_45429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__);

(statearr_45429[(1)] = (1));

return statearr_45429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1 = (function (state_45391){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45391);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45430){var ex__45056__auto__ = e45430;
var statearr_45431_46859 = state_45391;
(statearr_45431_46859[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45391[(4)]))){
var statearr_45436_46860 = state_45391;
(statearr_45436_46860[(1)] = cljs.core.first((state_45391[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46861 = state_45391;
state_45391 = G__46861;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = function(state_45391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1.call(this,state_45391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45454 = f__45124__auto__();
(statearr_45454[(6)] = c__45123__auto___46845);

return statearr_45454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));


var c__45123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45518){
var state_val_45523 = (state_45518[(1)]);
if((state_val_45523 === (7))){
var inst_45509 = (state_45518[(2)]);
var state_45518__$1 = state_45518;
var statearr_45536_46865 = state_45518__$1;
(statearr_45536_46865[(2)] = inst_45509);

(statearr_45536_46865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (20))){
var state_45518__$1 = state_45518;
var statearr_45537_46866 = state_45518__$1;
(statearr_45537_46866[(2)] = null);

(statearr_45537_46866[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (1))){
var state_45518__$1 = state_45518;
var statearr_45538_46867 = state_45518__$1;
(statearr_45538_46867[(2)] = null);

(statearr_45538_46867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (4))){
var inst_45457 = (state_45518[(7)]);
var inst_45457__$1 = (state_45518[(2)]);
var inst_45458 = (inst_45457__$1 == null);
var state_45518__$1 = (function (){var statearr_45540 = state_45518;
(statearr_45540[(7)] = inst_45457__$1);

return statearr_45540;
})();
if(cljs.core.truth_(inst_45458)){
var statearr_45541_46868 = state_45518__$1;
(statearr_45541_46868[(1)] = (5));

} else {
var statearr_45542_46869 = state_45518__$1;
(statearr_45542_46869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (15))){
var inst_45480 = (state_45518[(8)]);
var state_45518__$1 = state_45518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45518__$1,(18),to,inst_45480);
} else {
if((state_val_45523 === (21))){
var inst_45504 = (state_45518[(2)]);
var state_45518__$1 = state_45518;
var statearr_45543_46873 = state_45518__$1;
(statearr_45543_46873[(2)] = inst_45504);

(statearr_45543_46873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (13))){
var inst_45506 = (state_45518[(2)]);
var state_45518__$1 = (function (){var statearr_45544 = state_45518;
(statearr_45544[(9)] = inst_45506);

return statearr_45544;
})();
var statearr_45545_46874 = state_45518__$1;
(statearr_45545_46874[(2)] = null);

(statearr_45545_46874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (6))){
var inst_45457 = (state_45518[(7)]);
var state_45518__$1 = state_45518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45518__$1,(11),inst_45457);
} else {
if((state_val_45523 === (17))){
var inst_45499 = (state_45518[(2)]);
var state_45518__$1 = state_45518;
if(cljs.core.truth_(inst_45499)){
var statearr_45558_46875 = state_45518__$1;
(statearr_45558_46875[(1)] = (19));

} else {
var statearr_45559_46876 = state_45518__$1;
(statearr_45559_46876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (3))){
var inst_45511 = (state_45518[(2)]);
var state_45518__$1 = state_45518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45518__$1,inst_45511);
} else {
if((state_val_45523 === (12))){
var inst_45471 = (state_45518[(10)]);
var state_45518__$1 = state_45518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45518__$1,(14),inst_45471);
} else {
if((state_val_45523 === (2))){
var state_45518__$1 = state_45518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45518__$1,(4),results);
} else {
if((state_val_45523 === (19))){
var state_45518__$1 = state_45518;
var statearr_45561_46877 = state_45518__$1;
(statearr_45561_46877[(2)] = null);

(statearr_45561_46877[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (11))){
var inst_45471 = (state_45518[(2)]);
var state_45518__$1 = (function (){var statearr_45562 = state_45518;
(statearr_45562[(10)] = inst_45471);

return statearr_45562;
})();
var statearr_45563_46878 = state_45518__$1;
(statearr_45563_46878[(2)] = null);

(statearr_45563_46878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (9))){
var state_45518__$1 = state_45518;
var statearr_45564_46882 = state_45518__$1;
(statearr_45564_46882[(2)] = null);

(statearr_45564_46882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (5))){
var state_45518__$1 = state_45518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45565_46883 = state_45518__$1;
(statearr_45565_46883[(1)] = (8));

} else {
var statearr_45566_46884 = state_45518__$1;
(statearr_45566_46884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (14))){
var inst_45480 = (state_45518[(8)]);
var inst_45489 = (state_45518[(11)]);
var inst_45480__$1 = (state_45518[(2)]);
var inst_45488 = (inst_45480__$1 == null);
var inst_45489__$1 = cljs.core.not(inst_45488);
var state_45518__$1 = (function (){var statearr_45567 = state_45518;
(statearr_45567[(8)] = inst_45480__$1);

(statearr_45567[(11)] = inst_45489__$1);

return statearr_45567;
})();
if(inst_45489__$1){
var statearr_45568_46885 = state_45518__$1;
(statearr_45568_46885[(1)] = (15));

} else {
var statearr_45569_46886 = state_45518__$1;
(statearr_45569_46886[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (16))){
var inst_45489 = (state_45518[(11)]);
var state_45518__$1 = state_45518;
var statearr_45570_46887 = state_45518__$1;
(statearr_45570_46887[(2)] = inst_45489);

(statearr_45570_46887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (10))){
var inst_45464 = (state_45518[(2)]);
var state_45518__$1 = state_45518;
var statearr_45571_46888 = state_45518__$1;
(statearr_45571_46888[(2)] = inst_45464);

(statearr_45571_46888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (18))){
var inst_45496 = (state_45518[(2)]);
var state_45518__$1 = state_45518;
var statearr_45572_46889 = state_45518__$1;
(statearr_45572_46889[(2)] = inst_45496);

(statearr_45572_46889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45523 === (8))){
var inst_45461 = cljs.core.async.close_BANG_(to);
var state_45518__$1 = state_45518;
var statearr_45573_46890 = state_45518__$1;
(statearr_45573_46890[(2)] = inst_45461);

(statearr_45573_46890[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0 = (function (){
var statearr_45574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__);

(statearr_45574[(1)] = (1));

return statearr_45574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1 = (function (state_45518){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45518);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45575){var ex__45056__auto__ = e45575;
var statearr_45576_46891 = state_45518;
(statearr_45576_46891[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45518[(4)]))){
var statearr_45577_46892 = state_45518;
(statearr_45577_46892[(1)] = cljs.core.first((state_45518[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46893 = state_45518;
state_45518 = G__46893;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__ = function(state_45518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1.call(this,state_45518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45578 = f__45124__auto__();
(statearr_45578[(6)] = c__45123__auto__);

return statearr_45578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));

return c__45123__auto__;
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
var G__45580 = arguments.length;
switch (G__45580) {
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
var G__45582 = arguments.length;
switch (G__45582) {
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
var G__45584 = arguments.length;
switch (G__45584) {
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
var c__45123__auto___46897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45610){
var state_val_45611 = (state_45610[(1)]);
if((state_val_45611 === (7))){
var inst_45606 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45612_46898 = state_45610__$1;
(statearr_45612_46898[(2)] = inst_45606);

(statearr_45612_46898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (1))){
var state_45610__$1 = state_45610;
var statearr_45613_46899 = state_45610__$1;
(statearr_45613_46899[(2)] = null);

(statearr_45613_46899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (4))){
var inst_45587 = (state_45610[(7)]);
var inst_45587__$1 = (state_45610[(2)]);
var inst_45588 = (inst_45587__$1 == null);
var state_45610__$1 = (function (){var statearr_45614 = state_45610;
(statearr_45614[(7)] = inst_45587__$1);

return statearr_45614;
})();
if(cljs.core.truth_(inst_45588)){
var statearr_45615_46900 = state_45610__$1;
(statearr_45615_46900[(1)] = (5));

} else {
var statearr_45616_46901 = state_45610__$1;
(statearr_45616_46901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (13))){
var state_45610__$1 = state_45610;
var statearr_45617_46902 = state_45610__$1;
(statearr_45617_46902[(2)] = null);

(statearr_45617_46902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (6))){
var inst_45587 = (state_45610[(7)]);
var inst_45593 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45587) : p.call(null,inst_45587));
var state_45610__$1 = state_45610;
if(cljs.core.truth_(inst_45593)){
var statearr_45618_46903 = state_45610__$1;
(statearr_45618_46903[(1)] = (9));

} else {
var statearr_45619_46904 = state_45610__$1;
(statearr_45619_46904[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (3))){
var inst_45608 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45610__$1,inst_45608);
} else {
if((state_val_45611 === (12))){
var state_45610__$1 = state_45610;
var statearr_45620_46905 = state_45610__$1;
(statearr_45620_46905[(2)] = null);

(statearr_45620_46905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (2))){
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45610__$1,(4),ch);
} else {
if((state_val_45611 === (11))){
var inst_45587 = (state_45610[(7)]);
var inst_45597 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45610__$1,(8),inst_45597,inst_45587);
} else {
if((state_val_45611 === (9))){
var state_45610__$1 = state_45610;
var statearr_45621_46906 = state_45610__$1;
(statearr_45621_46906[(2)] = tc);

(statearr_45621_46906[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (5))){
var inst_45590 = cljs.core.async.close_BANG_(tc);
var inst_45591 = cljs.core.async.close_BANG_(fc);
var state_45610__$1 = (function (){var statearr_45622 = state_45610;
(statearr_45622[(8)] = inst_45590);

return statearr_45622;
})();
var statearr_45623_46907 = state_45610__$1;
(statearr_45623_46907[(2)] = inst_45591);

(statearr_45623_46907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (14))){
var inst_45604 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45624_46908 = state_45610__$1;
(statearr_45624_46908[(2)] = inst_45604);

(statearr_45624_46908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (10))){
var state_45610__$1 = state_45610;
var statearr_45625_46909 = state_45610__$1;
(statearr_45625_46909[(2)] = fc);

(statearr_45625_46909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (8))){
var inst_45599 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
if(cljs.core.truth_(inst_45599)){
var statearr_45626_46910 = state_45610__$1;
(statearr_45626_46910[(1)] = (12));

} else {
var statearr_45627_46911 = state_45610__$1;
(statearr_45627_46911[(1)] = (13));

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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_45628 = [null,null,null,null,null,null,null,null,null];
(statearr_45628[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_45628[(1)] = (1));

return statearr_45628;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_45610){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45610);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45629){var ex__45056__auto__ = e45629;
var statearr_45630_46912 = state_45610;
(statearr_45630_46912[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45610[(4)]))){
var statearr_45631_46913 = state_45610;
(statearr_45631_46913[(1)] = cljs.core.first((state_45610[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46914 = state_45610;
state_45610 = G__46914;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_45610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_45610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45632 = f__45124__auto__();
(statearr_45632[(6)] = c__45123__auto___46897);

return statearr_45632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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
var c__45123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45654){
var state_val_45655 = (state_45654[(1)]);
if((state_val_45655 === (7))){
var inst_45650 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
var statearr_45656_46915 = state_45654__$1;
(statearr_45656_46915[(2)] = inst_45650);

(statearr_45656_46915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (1))){
var inst_45633 = init;
var inst_45634 = inst_45633;
var state_45654__$1 = (function (){var statearr_45657 = state_45654;
(statearr_45657[(7)] = inst_45634);

return statearr_45657;
})();
var statearr_45658_46916 = state_45654__$1;
(statearr_45658_46916[(2)] = null);

(statearr_45658_46916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (4))){
var inst_45637 = (state_45654[(8)]);
var inst_45637__$1 = (state_45654[(2)]);
var inst_45638 = (inst_45637__$1 == null);
var state_45654__$1 = (function (){var statearr_45659 = state_45654;
(statearr_45659[(8)] = inst_45637__$1);

return statearr_45659;
})();
if(cljs.core.truth_(inst_45638)){
var statearr_45660_46917 = state_45654__$1;
(statearr_45660_46917[(1)] = (5));

} else {
var statearr_45661_46918 = state_45654__$1;
(statearr_45661_46918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (6))){
var inst_45634 = (state_45654[(7)]);
var inst_45637 = (state_45654[(8)]);
var inst_45641 = (state_45654[(9)]);
var inst_45641__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45634,inst_45637) : f.call(null,inst_45634,inst_45637));
var inst_45642 = cljs.core.reduced_QMARK_(inst_45641__$1);
var state_45654__$1 = (function (){var statearr_45662 = state_45654;
(statearr_45662[(9)] = inst_45641__$1);

return statearr_45662;
})();
if(inst_45642){
var statearr_45663_46919 = state_45654__$1;
(statearr_45663_46919[(1)] = (8));

} else {
var statearr_45664_46920 = state_45654__$1;
(statearr_45664_46920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (3))){
var inst_45652 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45654__$1,inst_45652);
} else {
if((state_val_45655 === (2))){
var state_45654__$1 = state_45654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45654__$1,(4),ch);
} else {
if((state_val_45655 === (9))){
var inst_45641 = (state_45654[(9)]);
var inst_45634 = inst_45641;
var state_45654__$1 = (function (){var statearr_45665 = state_45654;
(statearr_45665[(7)] = inst_45634);

return statearr_45665;
})();
var statearr_45666_46921 = state_45654__$1;
(statearr_45666_46921[(2)] = null);

(statearr_45666_46921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (5))){
var inst_45634 = (state_45654[(7)]);
var state_45654__$1 = state_45654;
var statearr_45667_46922 = state_45654__$1;
(statearr_45667_46922[(2)] = inst_45634);

(statearr_45667_46922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (10))){
var inst_45648 = (state_45654[(2)]);
var state_45654__$1 = state_45654;
var statearr_45668_46923 = state_45654__$1;
(statearr_45668_46923[(2)] = inst_45648);

(statearr_45668_46923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45655 === (8))){
var inst_45641 = (state_45654[(9)]);
var inst_45644 = cljs.core.deref(inst_45641);
var state_45654__$1 = state_45654;
var statearr_45669_46924 = state_45654__$1;
(statearr_45669_46924[(2)] = inst_45644);

(statearr_45669_46924[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45053__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45053__auto____0 = (function (){
var statearr_45670 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45670[(0)] = cljs$core$async$reduce_$_state_machine__45053__auto__);

(statearr_45670[(1)] = (1));

return statearr_45670;
});
var cljs$core$async$reduce_$_state_machine__45053__auto____1 = (function (state_45654){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45654);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45671){var ex__45056__auto__ = e45671;
var statearr_45672_46925 = state_45654;
(statearr_45672_46925[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45654[(4)]))){
var statearr_45673_46926 = state_45654;
(statearr_45673_46926[(1)] = cljs.core.first((state_45654[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46927 = state_45654;
state_45654 = G__46927;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45053__auto__ = function(state_45654){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45053__auto____1.call(this,state_45654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45053__auto____0;
cljs$core$async$reduce_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45053__auto____1;
return cljs$core$async$reduce_$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45674 = f__45124__auto__();
(statearr_45674[(6)] = c__45123__auto__);

return statearr_45674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));

return c__45123__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45680){
var state_val_45681 = (state_45680[(1)]);
if((state_val_45681 === (1))){
var inst_45675 = cljs.core.async.reduce(f__$1,init,ch);
var state_45680__$1 = state_45680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45680__$1,(2),inst_45675);
} else {
if((state_val_45681 === (2))){
var inst_45677 = (state_45680[(2)]);
var inst_45678 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45677) : f__$1.call(null,inst_45677));
var state_45680__$1 = state_45680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45680__$1,inst_45678);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45053__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45053__auto____0 = (function (){
var statearr_45682 = [null,null,null,null,null,null,null];
(statearr_45682[(0)] = cljs$core$async$transduce_$_state_machine__45053__auto__);

(statearr_45682[(1)] = (1));

return statearr_45682;
});
var cljs$core$async$transduce_$_state_machine__45053__auto____1 = (function (state_45680){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45680);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45683){var ex__45056__auto__ = e45683;
var statearr_45684_46928 = state_45680;
(statearr_45684_46928[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45680[(4)]))){
var statearr_45685_46929 = state_45680;
(statearr_45685_46929[(1)] = cljs.core.first((state_45680[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46930 = state_45680;
state_45680 = G__46930;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45053__auto__ = function(state_45680){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45053__auto____1.call(this,state_45680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45053__auto____0;
cljs$core$async$transduce_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45053__auto____1;
return cljs$core$async$transduce_$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45686 = f__45124__auto__();
(statearr_45686[(6)] = c__45123__auto__);

return statearr_45686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));

return c__45123__auto__;
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
var G__45688 = arguments.length;
switch (G__45688) {
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
var c__45123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45713){
var state_val_45714 = (state_45713[(1)]);
if((state_val_45714 === (7))){
var inst_45695 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
var statearr_45715_46934 = state_45713__$1;
(statearr_45715_46934[(2)] = inst_45695);

(statearr_45715_46934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (1))){
var inst_45689 = cljs.core.seq(coll);
var inst_45690 = inst_45689;
var state_45713__$1 = (function (){var statearr_45716 = state_45713;
(statearr_45716[(7)] = inst_45690);

return statearr_45716;
})();
var statearr_45717_46935 = state_45713__$1;
(statearr_45717_46935[(2)] = null);

(statearr_45717_46935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (4))){
var inst_45690 = (state_45713[(7)]);
var inst_45693 = cljs.core.first(inst_45690);
var state_45713__$1 = state_45713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45713__$1,(7),ch,inst_45693);
} else {
if((state_val_45714 === (13))){
var inst_45707 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
var statearr_45718_46937 = state_45713__$1;
(statearr_45718_46937[(2)] = inst_45707);

(statearr_45718_46937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (6))){
var inst_45698 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
if(cljs.core.truth_(inst_45698)){
var statearr_45719_46938 = state_45713__$1;
(statearr_45719_46938[(1)] = (8));

} else {
var statearr_45720_46939 = state_45713__$1;
(statearr_45720_46939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (3))){
var inst_45711 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45713__$1,inst_45711);
} else {
if((state_val_45714 === (12))){
var state_45713__$1 = state_45713;
var statearr_45721_46944 = state_45713__$1;
(statearr_45721_46944[(2)] = null);

(statearr_45721_46944[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (2))){
var inst_45690 = (state_45713[(7)]);
var state_45713__$1 = state_45713;
if(cljs.core.truth_(inst_45690)){
var statearr_45722_46948 = state_45713__$1;
(statearr_45722_46948[(1)] = (4));

} else {
var statearr_45723_46949 = state_45713__$1;
(statearr_45723_46949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (11))){
var inst_45704 = cljs.core.async.close_BANG_(ch);
var state_45713__$1 = state_45713;
var statearr_45724_46955 = state_45713__$1;
(statearr_45724_46955[(2)] = inst_45704);

(statearr_45724_46955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (9))){
var state_45713__$1 = state_45713;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45725_46957 = state_45713__$1;
(statearr_45725_46957[(1)] = (11));

} else {
var statearr_45726_46961 = state_45713__$1;
(statearr_45726_46961[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (5))){
var inst_45690 = (state_45713[(7)]);
var state_45713__$1 = state_45713;
var statearr_45727_46962 = state_45713__$1;
(statearr_45727_46962[(2)] = inst_45690);

(statearr_45727_46962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (10))){
var inst_45709 = (state_45713[(2)]);
var state_45713__$1 = state_45713;
var statearr_45728_46963 = state_45713__$1;
(statearr_45728_46963[(2)] = inst_45709);

(statearr_45728_46963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45714 === (8))){
var inst_45690 = (state_45713[(7)]);
var inst_45700 = cljs.core.next(inst_45690);
var inst_45690__$1 = inst_45700;
var state_45713__$1 = (function (){var statearr_45729 = state_45713;
(statearr_45729[(7)] = inst_45690__$1);

return statearr_45729;
})();
var statearr_45730_46964 = state_45713__$1;
(statearr_45730_46964[(2)] = null);

(statearr_45730_46964[(1)] = (2));


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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_45731 = [null,null,null,null,null,null,null,null];
(statearr_45731[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_45731[(1)] = (1));

return statearr_45731;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_45713){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45713);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45732){var ex__45056__auto__ = e45732;
var statearr_45733_46965 = state_45713;
(statearr_45733_46965[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45713[(4)]))){
var statearr_45734_46966 = state_45713;
(statearr_45734_46966[(1)] = cljs.core.first((state_45713[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46967 = state_45713;
state_45713 = G__46967;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_45713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_45713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45735 = f__45124__auto__();
(statearr_45735[(6)] = c__45123__auto__);

return statearr_45735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));

return c__45123__auto__;
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
var G__45737 = arguments.length;
switch (G__45737) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_46969 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_46969(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46970 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_46970(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46971 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_46971(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46982 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_46982(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45738 = (function (ch,cs,meta45739){
this.ch = ch;
this.cs = cs;
this.meta45739 = meta45739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45740,meta45739__$1){
var self__ = this;
var _45740__$1 = this;
return (new cljs.core.async.t_cljs$core$async45738(self__.ch,self__.cs,meta45739__$1));
}));

(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45740){
var self__ = this;
var _45740__$1 = this;
return self__.meta45739;
}));

(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45738.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45739","meta45739",882695582,null)], null);
}));

(cljs.core.async.t_cljs$core$async45738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45738");

(cljs.core.async.t_cljs$core$async45738.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45738.
 */
cljs.core.async.__GT_t_cljs$core$async45738 = (function cljs$core$async$__GT_t_cljs$core$async45738(ch,cs,meta45739){
return (new cljs.core.async.t_cljs$core$async45738(ch,cs,meta45739));
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
var m = (new cljs.core.async.t_cljs$core$async45738(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__45123__auto___46987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_45873){
var state_val_45874 = (state_45873[(1)]);
if((state_val_45874 === (7))){
var inst_45869 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45875_46988 = state_45873__$1;
(statearr_45875_46988[(2)] = inst_45869);

(statearr_45875_46988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (20))){
var inst_45774 = (state_45873[(7)]);
var inst_45786 = cljs.core.first(inst_45774);
var inst_45787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45786,(0),null);
var inst_45788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45786,(1),null);
var state_45873__$1 = (function (){var statearr_45876 = state_45873;
(statearr_45876[(8)] = inst_45787);

return statearr_45876;
})();
if(cljs.core.truth_(inst_45788)){
var statearr_45877_46989 = state_45873__$1;
(statearr_45877_46989[(1)] = (22));

} else {
var statearr_45878_46990 = state_45873__$1;
(statearr_45878_46990[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (27))){
var inst_45816 = (state_45873[(9)]);
var inst_45818 = (state_45873[(10)]);
var inst_45823 = (state_45873[(11)]);
var inst_45743 = (state_45873[(12)]);
var inst_45823__$1 = cljs.core._nth(inst_45816,inst_45818);
var inst_45824 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45823__$1,inst_45743,done);
var state_45873__$1 = (function (){var statearr_45879 = state_45873;
(statearr_45879[(11)] = inst_45823__$1);

return statearr_45879;
})();
if(cljs.core.truth_(inst_45824)){
var statearr_45880_46992 = state_45873__$1;
(statearr_45880_46992[(1)] = (30));

} else {
var statearr_45881_46993 = state_45873__$1;
(statearr_45881_46993[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (1))){
var state_45873__$1 = state_45873;
var statearr_45882_46994 = state_45873__$1;
(statearr_45882_46994[(2)] = null);

(statearr_45882_46994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (24))){
var inst_45774 = (state_45873[(7)]);
var inst_45793 = (state_45873[(2)]);
var inst_45794 = cljs.core.next(inst_45774);
var inst_45752 = inst_45794;
var inst_45753 = null;
var inst_45754 = (0);
var inst_45755 = (0);
var state_45873__$1 = (function (){var statearr_45883 = state_45873;
(statearr_45883[(13)] = inst_45793);

(statearr_45883[(14)] = inst_45752);

(statearr_45883[(15)] = inst_45753);

(statearr_45883[(16)] = inst_45754);

(statearr_45883[(17)] = inst_45755);

return statearr_45883;
})();
var statearr_45884_46995 = state_45873__$1;
(statearr_45884_46995[(2)] = null);

(statearr_45884_46995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (39))){
var state_45873__$1 = state_45873;
var statearr_45888_46996 = state_45873__$1;
(statearr_45888_46996[(2)] = null);

(statearr_45888_46996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (4))){
var inst_45743 = (state_45873[(12)]);
var inst_45743__$1 = (state_45873[(2)]);
var inst_45744 = (inst_45743__$1 == null);
var state_45873__$1 = (function (){var statearr_45889 = state_45873;
(statearr_45889[(12)] = inst_45743__$1);

return statearr_45889;
})();
if(cljs.core.truth_(inst_45744)){
var statearr_45890_46997 = state_45873__$1;
(statearr_45890_46997[(1)] = (5));

} else {
var statearr_45891_46998 = state_45873__$1;
(statearr_45891_46998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (15))){
var inst_45755 = (state_45873[(17)]);
var inst_45752 = (state_45873[(14)]);
var inst_45753 = (state_45873[(15)]);
var inst_45754 = (state_45873[(16)]);
var inst_45770 = (state_45873[(2)]);
var inst_45771 = (inst_45755 + (1));
var tmp45885 = inst_45752;
var tmp45886 = inst_45754;
var tmp45887 = inst_45753;
var inst_45752__$1 = tmp45885;
var inst_45753__$1 = tmp45887;
var inst_45754__$1 = tmp45886;
var inst_45755__$1 = inst_45771;
var state_45873__$1 = (function (){var statearr_45892 = state_45873;
(statearr_45892[(18)] = inst_45770);

(statearr_45892[(14)] = inst_45752__$1);

(statearr_45892[(15)] = inst_45753__$1);

(statearr_45892[(16)] = inst_45754__$1);

(statearr_45892[(17)] = inst_45755__$1);

return statearr_45892;
})();
var statearr_45893_46999 = state_45873__$1;
(statearr_45893_46999[(2)] = null);

(statearr_45893_46999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (21))){
var inst_45797 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45897_47000 = state_45873__$1;
(statearr_45897_47000[(2)] = inst_45797);

(statearr_45897_47000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (31))){
var inst_45823 = (state_45873[(11)]);
var inst_45827 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45823);
var state_45873__$1 = state_45873;
var statearr_45898_47001 = state_45873__$1;
(statearr_45898_47001[(2)] = inst_45827);

(statearr_45898_47001[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (32))){
var inst_45818 = (state_45873[(10)]);
var inst_45815 = (state_45873[(19)]);
var inst_45816 = (state_45873[(9)]);
var inst_45817 = (state_45873[(20)]);
var inst_45829 = (state_45873[(2)]);
var inst_45830 = (inst_45818 + (1));
var tmp45894 = inst_45815;
var tmp45895 = inst_45816;
var tmp45896 = inst_45817;
var inst_45815__$1 = tmp45894;
var inst_45816__$1 = tmp45895;
var inst_45817__$1 = tmp45896;
var inst_45818__$1 = inst_45830;
var state_45873__$1 = (function (){var statearr_45899 = state_45873;
(statearr_45899[(21)] = inst_45829);

(statearr_45899[(19)] = inst_45815__$1);

(statearr_45899[(9)] = inst_45816__$1);

(statearr_45899[(20)] = inst_45817__$1);

(statearr_45899[(10)] = inst_45818__$1);

return statearr_45899;
})();
var statearr_45900_47002 = state_45873__$1;
(statearr_45900_47002[(2)] = null);

(statearr_45900_47002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (40))){
var inst_45842 = (state_45873[(22)]);
var inst_45846 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45842);
var state_45873__$1 = state_45873;
var statearr_45901_47004 = state_45873__$1;
(statearr_45901_47004[(2)] = inst_45846);

(statearr_45901_47004[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (33))){
var inst_45833 = (state_45873[(23)]);
var inst_45835 = cljs.core.chunked_seq_QMARK_(inst_45833);
var state_45873__$1 = state_45873;
if(inst_45835){
var statearr_45902_47005 = state_45873__$1;
(statearr_45902_47005[(1)] = (36));

} else {
var statearr_45903_47006 = state_45873__$1;
(statearr_45903_47006[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (13))){
var inst_45764 = (state_45873[(24)]);
var inst_45767 = cljs.core.async.close_BANG_(inst_45764);
var state_45873__$1 = state_45873;
var statearr_45904_47007 = state_45873__$1;
(statearr_45904_47007[(2)] = inst_45767);

(statearr_45904_47007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (22))){
var inst_45787 = (state_45873[(8)]);
var inst_45790 = cljs.core.async.close_BANG_(inst_45787);
var state_45873__$1 = state_45873;
var statearr_45905_47008 = state_45873__$1;
(statearr_45905_47008[(2)] = inst_45790);

(statearr_45905_47008[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (36))){
var inst_45833 = (state_45873[(23)]);
var inst_45837 = cljs.core.chunk_first(inst_45833);
var inst_45838 = cljs.core.chunk_rest(inst_45833);
var inst_45839 = cljs.core.count(inst_45837);
var inst_45815 = inst_45838;
var inst_45816 = inst_45837;
var inst_45817 = inst_45839;
var inst_45818 = (0);
var state_45873__$1 = (function (){var statearr_45906 = state_45873;
(statearr_45906[(19)] = inst_45815);

(statearr_45906[(9)] = inst_45816);

(statearr_45906[(20)] = inst_45817);

(statearr_45906[(10)] = inst_45818);

return statearr_45906;
})();
var statearr_45907_47009 = state_45873__$1;
(statearr_45907_47009[(2)] = null);

(statearr_45907_47009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (41))){
var inst_45833 = (state_45873[(23)]);
var inst_45848 = (state_45873[(2)]);
var inst_45849 = cljs.core.next(inst_45833);
var inst_45815 = inst_45849;
var inst_45816 = null;
var inst_45817 = (0);
var inst_45818 = (0);
var state_45873__$1 = (function (){var statearr_45908 = state_45873;
(statearr_45908[(25)] = inst_45848);

(statearr_45908[(19)] = inst_45815);

(statearr_45908[(9)] = inst_45816);

(statearr_45908[(20)] = inst_45817);

(statearr_45908[(10)] = inst_45818);

return statearr_45908;
})();
var statearr_45909_47010 = state_45873__$1;
(statearr_45909_47010[(2)] = null);

(statearr_45909_47010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (43))){
var state_45873__$1 = state_45873;
var statearr_45910_47011 = state_45873__$1;
(statearr_45910_47011[(2)] = null);

(statearr_45910_47011[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (29))){
var inst_45857 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45911_47012 = state_45873__$1;
(statearr_45911_47012[(2)] = inst_45857);

(statearr_45911_47012[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (44))){
var inst_45866 = (state_45873[(2)]);
var state_45873__$1 = (function (){var statearr_45912 = state_45873;
(statearr_45912[(26)] = inst_45866);

return statearr_45912;
})();
var statearr_45913_47013 = state_45873__$1;
(statearr_45913_47013[(2)] = null);

(statearr_45913_47013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (6))){
var inst_45807 = (state_45873[(27)]);
var inst_45806 = cljs.core.deref(cs);
var inst_45807__$1 = cljs.core.keys(inst_45806);
var inst_45808 = cljs.core.count(inst_45807__$1);
var inst_45809 = cljs.core.reset_BANG_(dctr,inst_45808);
var inst_45814 = cljs.core.seq(inst_45807__$1);
var inst_45815 = inst_45814;
var inst_45816 = null;
var inst_45817 = (0);
var inst_45818 = (0);
var state_45873__$1 = (function (){var statearr_45914 = state_45873;
(statearr_45914[(27)] = inst_45807__$1);

(statearr_45914[(28)] = inst_45809);

(statearr_45914[(19)] = inst_45815);

(statearr_45914[(9)] = inst_45816);

(statearr_45914[(20)] = inst_45817);

(statearr_45914[(10)] = inst_45818);

return statearr_45914;
})();
var statearr_45915_47014 = state_45873__$1;
(statearr_45915_47014[(2)] = null);

(statearr_45915_47014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (28))){
var inst_45815 = (state_45873[(19)]);
var inst_45833 = (state_45873[(23)]);
var inst_45833__$1 = cljs.core.seq(inst_45815);
var state_45873__$1 = (function (){var statearr_45916 = state_45873;
(statearr_45916[(23)] = inst_45833__$1);

return statearr_45916;
})();
if(inst_45833__$1){
var statearr_45917_47015 = state_45873__$1;
(statearr_45917_47015[(1)] = (33));

} else {
var statearr_45918_47016 = state_45873__$1;
(statearr_45918_47016[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (25))){
var inst_45818 = (state_45873[(10)]);
var inst_45817 = (state_45873[(20)]);
var inst_45820 = (inst_45818 < inst_45817);
var inst_45821 = inst_45820;
var state_45873__$1 = state_45873;
if(cljs.core.truth_(inst_45821)){
var statearr_45919_47017 = state_45873__$1;
(statearr_45919_47017[(1)] = (27));

} else {
var statearr_45920_47018 = state_45873__$1;
(statearr_45920_47018[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (34))){
var state_45873__$1 = state_45873;
var statearr_45921_47019 = state_45873__$1;
(statearr_45921_47019[(2)] = null);

(statearr_45921_47019[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (17))){
var state_45873__$1 = state_45873;
var statearr_45922_47020 = state_45873__$1;
(statearr_45922_47020[(2)] = null);

(statearr_45922_47020[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (3))){
var inst_45871 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45873__$1,inst_45871);
} else {
if((state_val_45874 === (12))){
var inst_45802 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45923_47021 = state_45873__$1;
(statearr_45923_47021[(2)] = inst_45802);

(statearr_45923_47021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (2))){
var state_45873__$1 = state_45873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45873__$1,(4),ch);
} else {
if((state_val_45874 === (23))){
var state_45873__$1 = state_45873;
var statearr_45924_47022 = state_45873__$1;
(statearr_45924_47022[(2)] = null);

(statearr_45924_47022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (35))){
var inst_45855 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45925_47023 = state_45873__$1;
(statearr_45925_47023[(2)] = inst_45855);

(statearr_45925_47023[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (19))){
var inst_45774 = (state_45873[(7)]);
var inst_45778 = cljs.core.chunk_first(inst_45774);
var inst_45779 = cljs.core.chunk_rest(inst_45774);
var inst_45780 = cljs.core.count(inst_45778);
var inst_45752 = inst_45779;
var inst_45753 = inst_45778;
var inst_45754 = inst_45780;
var inst_45755 = (0);
var state_45873__$1 = (function (){var statearr_45926 = state_45873;
(statearr_45926[(14)] = inst_45752);

(statearr_45926[(15)] = inst_45753);

(statearr_45926[(16)] = inst_45754);

(statearr_45926[(17)] = inst_45755);

return statearr_45926;
})();
var statearr_45927_47024 = state_45873__$1;
(statearr_45927_47024[(2)] = null);

(statearr_45927_47024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (11))){
var inst_45752 = (state_45873[(14)]);
var inst_45774 = (state_45873[(7)]);
var inst_45774__$1 = cljs.core.seq(inst_45752);
var state_45873__$1 = (function (){var statearr_45928 = state_45873;
(statearr_45928[(7)] = inst_45774__$1);

return statearr_45928;
})();
if(inst_45774__$1){
var statearr_45929_47025 = state_45873__$1;
(statearr_45929_47025[(1)] = (16));

} else {
var statearr_45930_47026 = state_45873__$1;
(statearr_45930_47026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (9))){
var inst_45804 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45931_47027 = state_45873__$1;
(statearr_45931_47027[(2)] = inst_45804);

(statearr_45931_47027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (5))){
var inst_45750 = cljs.core.deref(cs);
var inst_45751 = cljs.core.seq(inst_45750);
var inst_45752 = inst_45751;
var inst_45753 = null;
var inst_45754 = (0);
var inst_45755 = (0);
var state_45873__$1 = (function (){var statearr_45932 = state_45873;
(statearr_45932[(14)] = inst_45752);

(statearr_45932[(15)] = inst_45753);

(statearr_45932[(16)] = inst_45754);

(statearr_45932[(17)] = inst_45755);

return statearr_45932;
})();
var statearr_45933_47028 = state_45873__$1;
(statearr_45933_47028[(2)] = null);

(statearr_45933_47028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (14))){
var state_45873__$1 = state_45873;
var statearr_45934_47029 = state_45873__$1;
(statearr_45934_47029[(2)] = null);

(statearr_45934_47029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (45))){
var inst_45863 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45935_47030 = state_45873__$1;
(statearr_45935_47030[(2)] = inst_45863);

(statearr_45935_47030[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (26))){
var inst_45807 = (state_45873[(27)]);
var inst_45859 = (state_45873[(2)]);
var inst_45860 = cljs.core.seq(inst_45807);
var state_45873__$1 = (function (){var statearr_45936 = state_45873;
(statearr_45936[(29)] = inst_45859);

return statearr_45936;
})();
if(inst_45860){
var statearr_45937_47031 = state_45873__$1;
(statearr_45937_47031[(1)] = (42));

} else {
var statearr_45938_47032 = state_45873__$1;
(statearr_45938_47032[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (16))){
var inst_45774 = (state_45873[(7)]);
var inst_45776 = cljs.core.chunked_seq_QMARK_(inst_45774);
var state_45873__$1 = state_45873;
if(inst_45776){
var statearr_45939_47033 = state_45873__$1;
(statearr_45939_47033[(1)] = (19));

} else {
var statearr_45940_47034 = state_45873__$1;
(statearr_45940_47034[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (38))){
var inst_45852 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45941_47035 = state_45873__$1;
(statearr_45941_47035[(2)] = inst_45852);

(statearr_45941_47035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (30))){
var state_45873__$1 = state_45873;
var statearr_45942_47036 = state_45873__$1;
(statearr_45942_47036[(2)] = null);

(statearr_45942_47036[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (10))){
var inst_45753 = (state_45873[(15)]);
var inst_45755 = (state_45873[(17)]);
var inst_45763 = cljs.core._nth(inst_45753,inst_45755);
var inst_45764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45763,(0),null);
var inst_45765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45763,(1),null);
var state_45873__$1 = (function (){var statearr_45943 = state_45873;
(statearr_45943[(24)] = inst_45764);

return statearr_45943;
})();
if(cljs.core.truth_(inst_45765)){
var statearr_45944_47037 = state_45873__$1;
(statearr_45944_47037[(1)] = (13));

} else {
var statearr_45945_47038 = state_45873__$1;
(statearr_45945_47038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (18))){
var inst_45800 = (state_45873[(2)]);
var state_45873__$1 = state_45873;
var statearr_45946_47039 = state_45873__$1;
(statearr_45946_47039[(2)] = inst_45800);

(statearr_45946_47039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (42))){
var state_45873__$1 = state_45873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45873__$1,(45),dchan);
} else {
if((state_val_45874 === (37))){
var inst_45833 = (state_45873[(23)]);
var inst_45842 = (state_45873[(22)]);
var inst_45743 = (state_45873[(12)]);
var inst_45842__$1 = cljs.core.first(inst_45833);
var inst_45843 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45842__$1,inst_45743,done);
var state_45873__$1 = (function (){var statearr_45947 = state_45873;
(statearr_45947[(22)] = inst_45842__$1);

return statearr_45947;
})();
if(cljs.core.truth_(inst_45843)){
var statearr_45948_47040 = state_45873__$1;
(statearr_45948_47040[(1)] = (39));

} else {
var statearr_45949_47041 = state_45873__$1;
(statearr_45949_47041[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45874 === (8))){
var inst_45755 = (state_45873[(17)]);
var inst_45754 = (state_45873[(16)]);
var inst_45757 = (inst_45755 < inst_45754);
var inst_45758 = inst_45757;
var state_45873__$1 = state_45873;
if(cljs.core.truth_(inst_45758)){
var statearr_45950_47042 = state_45873__$1;
(statearr_45950_47042[(1)] = (10));

} else {
var statearr_45951_47043 = state_45873__$1;
(statearr_45951_47043[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45053__auto__ = null;
var cljs$core$async$mult_$_state_machine__45053__auto____0 = (function (){
var statearr_45952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45952[(0)] = cljs$core$async$mult_$_state_machine__45053__auto__);

(statearr_45952[(1)] = (1));

return statearr_45952;
});
var cljs$core$async$mult_$_state_machine__45053__auto____1 = (function (state_45873){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_45873);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e45953){var ex__45056__auto__ = e45953;
var statearr_45954_47044 = state_45873;
(statearr_45954_47044[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_45873[(4)]))){
var statearr_45955_47045 = state_45873;
(statearr_45955_47045[(1)] = cljs.core.first((state_45873[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47046 = state_45873;
state_45873 = G__47046;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45053__auto__ = function(state_45873){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45053__auto____1.call(this,state_45873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45053__auto____0;
cljs$core$async$mult_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45053__auto____1;
return cljs$core$async$mult_$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_45956 = f__45124__auto__();
(statearr_45956[(6)] = c__45123__auto___46987);

return statearr_45956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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
var G__45958 = arguments.length;
switch (G__45958) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_47048 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_47048(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47049 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_47049(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47050 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47050(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47055 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_47055(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47060 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47060(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47061 = arguments.length;
var i__5750__auto___47063 = (0);
while(true){
if((i__5750__auto___47063 < len__5749__auto___47061)){
args__5755__auto__.push((arguments[i__5750__auto___47063]));

var G__47064 = (i__5750__auto___47063 + (1));
i__5750__auto___47063 = G__47064;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45963){
var map__45964 = p__45963;
var map__45964__$1 = cljs.core.__destructure_map(map__45964);
var opts = map__45964__$1;
var statearr_45965_47068 = state;
(statearr_45965_47068[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45966_47069 = state;
(statearr_45966_47069[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_45967_47070 = state;
(statearr_45967_47070[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45959){
var G__45960 = cljs.core.first(seq45959);
var seq45959__$1 = cljs.core.next(seq45959);
var G__45961 = cljs.core.first(seq45959__$1);
var seq45959__$2 = cljs.core.next(seq45959__$1);
var G__45962 = cljs.core.first(seq45959__$2);
var seq45959__$3 = cljs.core.next(seq45959__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45960,G__45961,G__45962,seq45959__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45968 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45969){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45969 = meta45969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45970,meta45969__$1){
var self__ = this;
var _45970__$1 = this;
return (new cljs.core.async.t_cljs$core$async45968(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45969__$1));
}));

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45970){
var self__ = this;
var _45970__$1 = this;
return self__.meta45969;
}));

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45968.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45968.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45969","meta45969",2136248419,null)], null);
}));

(cljs.core.async.t_cljs$core$async45968.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45968");

(cljs.core.async.t_cljs$core$async45968.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async45968");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45968.
 */
cljs.core.async.__GT_t_cljs$core$async45968 = (function cljs$core$async$__GT_t_cljs$core$async45968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45969){
return (new cljs.core.async.t_cljs$core$async45968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45969));
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
var m = (new cljs.core.async.t_cljs$core$async45968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__45123__auto___47079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46038){
var state_val_46039 = (state_46038[(1)]);
if((state_val_46039 === (7))){
var inst_45998 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
if(cljs.core.truth_(inst_45998)){
var statearr_46040_47081 = state_46038__$1;
(statearr_46040_47081[(1)] = (8));

} else {
var statearr_46041_47082 = state_46038__$1;
(statearr_46041_47082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (20))){
var inst_45991 = (state_46038[(7)]);
var state_46038__$1 = state_46038;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46038__$1,(23),out,inst_45991);
} else {
if((state_val_46039 === (1))){
var inst_45974 = calc_state();
var inst_45975 = cljs.core.__destructure_map(inst_45974);
var inst_45976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45975,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45975,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45975,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45979 = inst_45974;
var state_46038__$1 = (function (){var statearr_46042 = state_46038;
(statearr_46042[(8)] = inst_45976);

(statearr_46042[(9)] = inst_45977);

(statearr_46042[(10)] = inst_45978);

(statearr_46042[(11)] = inst_45979);

return statearr_46042;
})();
var statearr_46043_47083 = state_46038__$1;
(statearr_46043_47083[(2)] = null);

(statearr_46043_47083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (24))){
var inst_45982 = (state_46038[(12)]);
var inst_45979 = inst_45982;
var state_46038__$1 = (function (){var statearr_46044 = state_46038;
(statearr_46044[(11)] = inst_45979);

return statearr_46044;
})();
var statearr_46045_47084 = state_46038__$1;
(statearr_46045_47084[(2)] = null);

(statearr_46045_47084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (4))){
var inst_45991 = (state_46038[(7)]);
var inst_45993 = (state_46038[(13)]);
var inst_45990 = (state_46038[(2)]);
var inst_45991__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45990,(0),null);
var inst_45992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45990,(1),null);
var inst_45993__$1 = (inst_45991__$1 == null);
var state_46038__$1 = (function (){var statearr_46046 = state_46038;
(statearr_46046[(7)] = inst_45991__$1);

(statearr_46046[(14)] = inst_45992);

(statearr_46046[(13)] = inst_45993__$1);

return statearr_46046;
})();
if(cljs.core.truth_(inst_45993__$1)){
var statearr_46047_47085 = state_46038__$1;
(statearr_46047_47085[(1)] = (5));

} else {
var statearr_46048_47086 = state_46038__$1;
(statearr_46048_47086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (15))){
var inst_45983 = (state_46038[(15)]);
var inst_46012 = (state_46038[(16)]);
var inst_46012__$1 = cljs.core.empty_QMARK_(inst_45983);
var state_46038__$1 = (function (){var statearr_46049 = state_46038;
(statearr_46049[(16)] = inst_46012__$1);

return statearr_46049;
})();
if(inst_46012__$1){
var statearr_46050_47087 = state_46038__$1;
(statearr_46050_47087[(1)] = (17));

} else {
var statearr_46051_47088 = state_46038__$1;
(statearr_46051_47088[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (21))){
var inst_45982 = (state_46038[(12)]);
var inst_45979 = inst_45982;
var state_46038__$1 = (function (){var statearr_46052 = state_46038;
(statearr_46052[(11)] = inst_45979);

return statearr_46052;
})();
var statearr_46053_47089 = state_46038__$1;
(statearr_46053_47089[(2)] = null);

(statearr_46053_47089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (13))){
var inst_46005 = (state_46038[(2)]);
var inst_46006 = calc_state();
var inst_45979 = inst_46006;
var state_46038__$1 = (function (){var statearr_46054 = state_46038;
(statearr_46054[(17)] = inst_46005);

(statearr_46054[(11)] = inst_45979);

return statearr_46054;
})();
var statearr_46055_47090 = state_46038__$1;
(statearr_46055_47090[(2)] = null);

(statearr_46055_47090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (22))){
var inst_46032 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
var statearr_46056_47091 = state_46038__$1;
(statearr_46056_47091[(2)] = inst_46032);

(statearr_46056_47091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (6))){
var inst_45992 = (state_46038[(14)]);
var inst_45996 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45992,change);
var state_46038__$1 = state_46038;
var statearr_46057_47092 = state_46038__$1;
(statearr_46057_47092[(2)] = inst_45996);

(statearr_46057_47092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (25))){
var state_46038__$1 = state_46038;
var statearr_46058_47093 = state_46038__$1;
(statearr_46058_47093[(2)] = null);

(statearr_46058_47093[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (17))){
var inst_45984 = (state_46038[(18)]);
var inst_45992 = (state_46038[(14)]);
var inst_46014 = (inst_45984.cljs$core$IFn$_invoke$arity$1 ? inst_45984.cljs$core$IFn$_invoke$arity$1(inst_45992) : inst_45984.call(null,inst_45992));
var inst_46015 = cljs.core.not(inst_46014);
var state_46038__$1 = state_46038;
var statearr_46059_47094 = state_46038__$1;
(statearr_46059_47094[(2)] = inst_46015);

(statearr_46059_47094[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (3))){
var inst_46036 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46038__$1,inst_46036);
} else {
if((state_val_46039 === (12))){
var state_46038__$1 = state_46038;
var statearr_46060_47095 = state_46038__$1;
(statearr_46060_47095[(2)] = null);

(statearr_46060_47095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (2))){
var inst_45979 = (state_46038[(11)]);
var inst_45982 = (state_46038[(12)]);
var inst_45982__$1 = cljs.core.__destructure_map(inst_45979);
var inst_45983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45982__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45982__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45982__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46038__$1 = (function (){var statearr_46061 = state_46038;
(statearr_46061[(12)] = inst_45982__$1);

(statearr_46061[(15)] = inst_45983);

(statearr_46061[(18)] = inst_45984);

return statearr_46061;
})();
return cljs.core.async.ioc_alts_BANG_(state_46038__$1,(4),inst_45985);
} else {
if((state_val_46039 === (23))){
var inst_46023 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
if(cljs.core.truth_(inst_46023)){
var statearr_46062_47096 = state_46038__$1;
(statearr_46062_47096[(1)] = (24));

} else {
var statearr_46063_47097 = state_46038__$1;
(statearr_46063_47097[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (19))){
var inst_46018 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
var statearr_46064_47098 = state_46038__$1;
(statearr_46064_47098[(2)] = inst_46018);

(statearr_46064_47098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (11))){
var inst_45992 = (state_46038[(14)]);
var inst_46002 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45992);
var state_46038__$1 = state_46038;
var statearr_46065_47099 = state_46038__$1;
(statearr_46065_47099[(2)] = inst_46002);

(statearr_46065_47099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (9))){
var inst_45983 = (state_46038[(15)]);
var inst_45992 = (state_46038[(14)]);
var inst_46009 = (state_46038[(19)]);
var inst_46009__$1 = (inst_45983.cljs$core$IFn$_invoke$arity$1 ? inst_45983.cljs$core$IFn$_invoke$arity$1(inst_45992) : inst_45983.call(null,inst_45992));
var state_46038__$1 = (function (){var statearr_46066 = state_46038;
(statearr_46066[(19)] = inst_46009__$1);

return statearr_46066;
})();
if(cljs.core.truth_(inst_46009__$1)){
var statearr_46067_47101 = state_46038__$1;
(statearr_46067_47101[(1)] = (14));

} else {
var statearr_46068_47102 = state_46038__$1;
(statearr_46068_47102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (5))){
var inst_45993 = (state_46038[(13)]);
var state_46038__$1 = state_46038;
var statearr_46069_47107 = state_46038__$1;
(statearr_46069_47107[(2)] = inst_45993);

(statearr_46069_47107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (14))){
var inst_46009 = (state_46038[(19)]);
var state_46038__$1 = state_46038;
var statearr_46070_47108 = state_46038__$1;
(statearr_46070_47108[(2)] = inst_46009);

(statearr_46070_47108[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (26))){
var inst_46028 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
var statearr_46071_47109 = state_46038__$1;
(statearr_46071_47109[(2)] = inst_46028);

(statearr_46071_47109[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (16))){
var inst_46020 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
if(cljs.core.truth_(inst_46020)){
var statearr_46072_47110 = state_46038__$1;
(statearr_46072_47110[(1)] = (20));

} else {
var statearr_46073_47111 = state_46038__$1;
(statearr_46073_47111[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (10))){
var inst_46034 = (state_46038[(2)]);
var state_46038__$1 = state_46038;
var statearr_46074_47112 = state_46038__$1;
(statearr_46074_47112[(2)] = inst_46034);

(statearr_46074_47112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (18))){
var inst_46012 = (state_46038[(16)]);
var state_46038__$1 = state_46038;
var statearr_46075_47113 = state_46038__$1;
(statearr_46075_47113[(2)] = inst_46012);

(statearr_46075_47113[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46039 === (8))){
var inst_45991 = (state_46038[(7)]);
var inst_46000 = (inst_45991 == null);
var state_46038__$1 = state_46038;
if(cljs.core.truth_(inst_46000)){
var statearr_46076_47114 = state_46038__$1;
(statearr_46076_47114[(1)] = (11));

} else {
var statearr_46077_47115 = state_46038__$1;
(statearr_46077_47115[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__45053__auto__ = null;
var cljs$core$async$mix_$_state_machine__45053__auto____0 = (function (){
var statearr_46078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46078[(0)] = cljs$core$async$mix_$_state_machine__45053__auto__);

(statearr_46078[(1)] = (1));

return statearr_46078;
});
var cljs$core$async$mix_$_state_machine__45053__auto____1 = (function (state_46038){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46038);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46079){var ex__45056__auto__ = e46079;
var statearr_46080_47116 = state_46038;
(statearr_46080_47116[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46038[(4)]))){
var statearr_46081_47117 = state_46038;
(statearr_46081_47117[(1)] = cljs.core.first((state_46038[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47118 = state_46038;
state_46038 = G__47118;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45053__auto__ = function(state_46038){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45053__auto____1.call(this,state_46038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45053__auto____0;
cljs$core$async$mix_$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45053__auto____1;
return cljs$core$async$mix_$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46082 = f__45124__auto__();
(statearr_46082[(6)] = c__45123__auto___47079);

return statearr_46082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_47123 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_47123(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47124 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_47124(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47125 = (function() {
var G__47126 = null;
var G__47126__1 = (function (p){
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
var G__47126__2 = (function (p,v){
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
G__47126 = function(p,v){
switch(arguments.length){
case 1:
return G__47126__1.call(this,p);
case 2:
return G__47126__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47126.cljs$core$IFn$_invoke$arity$1 = G__47126__1;
G__47126.cljs$core$IFn$_invoke$arity$2 = G__47126__2;
return G__47126;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__46084 = arguments.length;
switch (G__46084) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47125(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47125(p,v);
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
cljs.core.async.t_cljs$core$async46088 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46089){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46089 = meta46089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46090,meta46089__$1){
var self__ = this;
var _46090__$1 = this;
return (new cljs.core.async.t_cljs$core$async46088(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46089__$1));
}));

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46090){
var self__ = this;
var _46090__$1 = this;
return self__.meta46089;
}));

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46088.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46089","meta46089",529959892,null)], null);
}));

(cljs.core.async.t_cljs$core$async46088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46088");

(cljs.core.async.t_cljs$core$async46088.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46088.
 */
cljs.core.async.__GT_t_cljs$core$async46088 = (function cljs$core$async$__GT_t_cljs$core$async46088(ch,topic_fn,buf_fn,mults,ensure_mult,meta46089){
return (new cljs.core.async.t_cljs$core$async46088(ch,topic_fn,buf_fn,mults,ensure_mult,meta46089));
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
var G__46087 = arguments.length;
switch (G__46087) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46085_SHARP_){
if(cljs.core.truth_((p1__46085_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46085_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46085_SHARP_.call(null,topic)))){
return p1__46085_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46085_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async46088(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__45123__auto___47134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46162){
var state_val_46163 = (state_46162[(1)]);
if((state_val_46163 === (7))){
var inst_46158 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
var statearr_46164_47138 = state_46162__$1;
(statearr_46164_47138[(2)] = inst_46158);

(statearr_46164_47138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (20))){
var state_46162__$1 = state_46162;
var statearr_46165_47139 = state_46162__$1;
(statearr_46165_47139[(2)] = null);

(statearr_46165_47139[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (1))){
var state_46162__$1 = state_46162;
var statearr_46166_47140 = state_46162__$1;
(statearr_46166_47140[(2)] = null);

(statearr_46166_47140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (24))){
var inst_46141 = (state_46162[(7)]);
var inst_46150 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46141);
var state_46162__$1 = state_46162;
var statearr_46167_47141 = state_46162__$1;
(statearr_46167_47141[(2)] = inst_46150);

(statearr_46167_47141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (4))){
var inst_46093 = (state_46162[(8)]);
var inst_46093__$1 = (state_46162[(2)]);
var inst_46094 = (inst_46093__$1 == null);
var state_46162__$1 = (function (){var statearr_46168 = state_46162;
(statearr_46168[(8)] = inst_46093__$1);

return statearr_46168;
})();
if(cljs.core.truth_(inst_46094)){
var statearr_46169_47142 = state_46162__$1;
(statearr_46169_47142[(1)] = (5));

} else {
var statearr_46170_47143 = state_46162__$1;
(statearr_46170_47143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (15))){
var inst_46135 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
var statearr_46171_47144 = state_46162__$1;
(statearr_46171_47144[(2)] = inst_46135);

(statearr_46171_47144[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (21))){
var inst_46155 = (state_46162[(2)]);
var state_46162__$1 = (function (){var statearr_46172 = state_46162;
(statearr_46172[(9)] = inst_46155);

return statearr_46172;
})();
var statearr_46173_47145 = state_46162__$1;
(statearr_46173_47145[(2)] = null);

(statearr_46173_47145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (13))){
var inst_46117 = (state_46162[(10)]);
var inst_46119 = cljs.core.chunked_seq_QMARK_(inst_46117);
var state_46162__$1 = state_46162;
if(inst_46119){
var statearr_46174_47147 = state_46162__$1;
(statearr_46174_47147[(1)] = (16));

} else {
var statearr_46175_47151 = state_46162__$1;
(statearr_46175_47151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (22))){
var inst_46147 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
if(cljs.core.truth_(inst_46147)){
var statearr_46176_47152 = state_46162__$1;
(statearr_46176_47152[(1)] = (23));

} else {
var statearr_46177_47153 = state_46162__$1;
(statearr_46177_47153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (6))){
var inst_46093 = (state_46162[(8)]);
var inst_46141 = (state_46162[(7)]);
var inst_46143 = (state_46162[(11)]);
var inst_46141__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46093) : topic_fn.call(null,inst_46093));
var inst_46142 = cljs.core.deref(mults);
var inst_46143__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46142,inst_46141__$1);
var state_46162__$1 = (function (){var statearr_46178 = state_46162;
(statearr_46178[(7)] = inst_46141__$1);

(statearr_46178[(11)] = inst_46143__$1);

return statearr_46178;
})();
if(cljs.core.truth_(inst_46143__$1)){
var statearr_46179_47156 = state_46162__$1;
(statearr_46179_47156[(1)] = (19));

} else {
var statearr_46180_47157 = state_46162__$1;
(statearr_46180_47157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (25))){
var inst_46152 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
var statearr_46181_47158 = state_46162__$1;
(statearr_46181_47158[(2)] = inst_46152);

(statearr_46181_47158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (17))){
var inst_46117 = (state_46162[(10)]);
var inst_46126 = cljs.core.first(inst_46117);
var inst_46127 = cljs.core.async.muxch_STAR_(inst_46126);
var inst_46128 = cljs.core.async.close_BANG_(inst_46127);
var inst_46129 = cljs.core.next(inst_46117);
var inst_46103 = inst_46129;
var inst_46104 = null;
var inst_46105 = (0);
var inst_46106 = (0);
var state_46162__$1 = (function (){var statearr_46182 = state_46162;
(statearr_46182[(12)] = inst_46128);

(statearr_46182[(13)] = inst_46103);

(statearr_46182[(14)] = inst_46104);

(statearr_46182[(15)] = inst_46105);

(statearr_46182[(16)] = inst_46106);

return statearr_46182;
})();
var statearr_46183_47159 = state_46162__$1;
(statearr_46183_47159[(2)] = null);

(statearr_46183_47159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (3))){
var inst_46160 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46162__$1,inst_46160);
} else {
if((state_val_46163 === (12))){
var inst_46137 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
var statearr_46184_47160 = state_46162__$1;
(statearr_46184_47160[(2)] = inst_46137);

(statearr_46184_47160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (2))){
var state_46162__$1 = state_46162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46162__$1,(4),ch);
} else {
if((state_val_46163 === (23))){
var state_46162__$1 = state_46162;
var statearr_46185_47161 = state_46162__$1;
(statearr_46185_47161[(2)] = null);

(statearr_46185_47161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (19))){
var inst_46143 = (state_46162[(11)]);
var inst_46093 = (state_46162[(8)]);
var inst_46145 = cljs.core.async.muxch_STAR_(inst_46143);
var state_46162__$1 = state_46162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46162__$1,(22),inst_46145,inst_46093);
} else {
if((state_val_46163 === (11))){
var inst_46103 = (state_46162[(13)]);
var inst_46117 = (state_46162[(10)]);
var inst_46117__$1 = cljs.core.seq(inst_46103);
var state_46162__$1 = (function (){var statearr_46186 = state_46162;
(statearr_46186[(10)] = inst_46117__$1);

return statearr_46186;
})();
if(inst_46117__$1){
var statearr_46187_47162 = state_46162__$1;
(statearr_46187_47162[(1)] = (13));

} else {
var statearr_46188_47163 = state_46162__$1;
(statearr_46188_47163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (9))){
var inst_46139 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
var statearr_46189_47164 = state_46162__$1;
(statearr_46189_47164[(2)] = inst_46139);

(statearr_46189_47164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (5))){
var inst_46100 = cljs.core.deref(mults);
var inst_46101 = cljs.core.vals(inst_46100);
var inst_46102 = cljs.core.seq(inst_46101);
var inst_46103 = inst_46102;
var inst_46104 = null;
var inst_46105 = (0);
var inst_46106 = (0);
var state_46162__$1 = (function (){var statearr_46190 = state_46162;
(statearr_46190[(13)] = inst_46103);

(statearr_46190[(14)] = inst_46104);

(statearr_46190[(15)] = inst_46105);

(statearr_46190[(16)] = inst_46106);

return statearr_46190;
})();
var statearr_46191_47165 = state_46162__$1;
(statearr_46191_47165[(2)] = null);

(statearr_46191_47165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (14))){
var state_46162__$1 = state_46162;
var statearr_46195_47166 = state_46162__$1;
(statearr_46195_47166[(2)] = null);

(statearr_46195_47166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (16))){
var inst_46117 = (state_46162[(10)]);
var inst_46121 = cljs.core.chunk_first(inst_46117);
var inst_46122 = cljs.core.chunk_rest(inst_46117);
var inst_46123 = cljs.core.count(inst_46121);
var inst_46103 = inst_46122;
var inst_46104 = inst_46121;
var inst_46105 = inst_46123;
var inst_46106 = (0);
var state_46162__$1 = (function (){var statearr_46196 = state_46162;
(statearr_46196[(13)] = inst_46103);

(statearr_46196[(14)] = inst_46104);

(statearr_46196[(15)] = inst_46105);

(statearr_46196[(16)] = inst_46106);

return statearr_46196;
})();
var statearr_46197_47167 = state_46162__$1;
(statearr_46197_47167[(2)] = null);

(statearr_46197_47167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (10))){
var inst_46104 = (state_46162[(14)]);
var inst_46106 = (state_46162[(16)]);
var inst_46103 = (state_46162[(13)]);
var inst_46105 = (state_46162[(15)]);
var inst_46111 = cljs.core._nth(inst_46104,inst_46106);
var inst_46112 = cljs.core.async.muxch_STAR_(inst_46111);
var inst_46113 = cljs.core.async.close_BANG_(inst_46112);
var inst_46114 = (inst_46106 + (1));
var tmp46192 = inst_46105;
var tmp46193 = inst_46104;
var tmp46194 = inst_46103;
var inst_46103__$1 = tmp46194;
var inst_46104__$1 = tmp46193;
var inst_46105__$1 = tmp46192;
var inst_46106__$1 = inst_46114;
var state_46162__$1 = (function (){var statearr_46198 = state_46162;
(statearr_46198[(17)] = inst_46113);

(statearr_46198[(13)] = inst_46103__$1);

(statearr_46198[(14)] = inst_46104__$1);

(statearr_46198[(15)] = inst_46105__$1);

(statearr_46198[(16)] = inst_46106__$1);

return statearr_46198;
})();
var statearr_46199_47168 = state_46162__$1;
(statearr_46199_47168[(2)] = null);

(statearr_46199_47168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (18))){
var inst_46132 = (state_46162[(2)]);
var state_46162__$1 = state_46162;
var statearr_46200_47169 = state_46162__$1;
(statearr_46200_47169[(2)] = inst_46132);

(statearr_46200_47169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46163 === (8))){
var inst_46106 = (state_46162[(16)]);
var inst_46105 = (state_46162[(15)]);
var inst_46108 = (inst_46106 < inst_46105);
var inst_46109 = inst_46108;
var state_46162__$1 = state_46162;
if(cljs.core.truth_(inst_46109)){
var statearr_46201_47171 = state_46162__$1;
(statearr_46201_47171[(1)] = (10));

} else {
var statearr_46202_47172 = state_46162__$1;
(statearr_46202_47172[(1)] = (11));

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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46203[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46203[(1)] = (1));

return statearr_46203;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46162){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46162);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46204){var ex__45056__auto__ = e46204;
var statearr_46205_47175 = state_46162;
(statearr_46205_47175[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46162[(4)]))){
var statearr_46206_47176 = state_46162;
(statearr_46206_47176[(1)] = cljs.core.first((state_46162[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47177 = state_46162;
state_46162 = G__47177;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46207 = f__45124__auto__();
(statearr_46207[(6)] = c__45123__auto___47134);

return statearr_46207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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
var G__46209 = arguments.length;
switch (G__46209) {
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
var G__46211 = arguments.length;
switch (G__46211) {
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
var G__46213 = arguments.length;
switch (G__46213) {
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
var c__45123__auto___47190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46256){
var state_val_46257 = (state_46256[(1)]);
if((state_val_46257 === (7))){
var state_46256__$1 = state_46256;
var statearr_46258_47193 = state_46256__$1;
(statearr_46258_47193[(2)] = null);

(statearr_46258_47193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (1))){
var state_46256__$1 = state_46256;
var statearr_46259_47194 = state_46256__$1;
(statearr_46259_47194[(2)] = null);

(statearr_46259_47194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (4))){
var inst_46217 = (state_46256[(7)]);
var inst_46216 = (state_46256[(8)]);
var inst_46219 = (inst_46217 < inst_46216);
var state_46256__$1 = state_46256;
if(cljs.core.truth_(inst_46219)){
var statearr_46260_47195 = state_46256__$1;
(statearr_46260_47195[(1)] = (6));

} else {
var statearr_46261_47196 = state_46256__$1;
(statearr_46261_47196[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (15))){
var inst_46242 = (state_46256[(9)]);
var inst_46247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46242);
var state_46256__$1 = state_46256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46256__$1,(17),out,inst_46247);
} else {
if((state_val_46257 === (13))){
var inst_46242 = (state_46256[(9)]);
var inst_46242__$1 = (state_46256[(2)]);
var inst_46243 = cljs.core.some(cljs.core.nil_QMARK_,inst_46242__$1);
var state_46256__$1 = (function (){var statearr_46262 = state_46256;
(statearr_46262[(9)] = inst_46242__$1);

return statearr_46262;
})();
if(cljs.core.truth_(inst_46243)){
var statearr_46263_47197 = state_46256__$1;
(statearr_46263_47197[(1)] = (14));

} else {
var statearr_46264_47198 = state_46256__$1;
(statearr_46264_47198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (6))){
var state_46256__$1 = state_46256;
var statearr_46265_47199 = state_46256__$1;
(statearr_46265_47199[(2)] = null);

(statearr_46265_47199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (17))){
var inst_46249 = (state_46256[(2)]);
var state_46256__$1 = (function (){var statearr_46267 = state_46256;
(statearr_46267[(10)] = inst_46249);

return statearr_46267;
})();
var statearr_46268_47200 = state_46256__$1;
(statearr_46268_47200[(2)] = null);

(statearr_46268_47200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (3))){
var inst_46254 = (state_46256[(2)]);
var state_46256__$1 = state_46256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46256__$1,inst_46254);
} else {
if((state_val_46257 === (12))){
var _ = (function (){var statearr_46269 = state_46256;
(statearr_46269[(4)] = cljs.core.rest((state_46256[(4)])));

return statearr_46269;
})();
var state_46256__$1 = state_46256;
var ex46266 = (state_46256__$1[(2)]);
var statearr_46270_47201 = state_46256__$1;
(statearr_46270_47201[(5)] = ex46266);


if((ex46266 instanceof Object)){
var statearr_46271_47202 = state_46256__$1;
(statearr_46271_47202[(1)] = (11));

(statearr_46271_47202[(5)] = null);

} else {
throw ex46266;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (2))){
var inst_46215 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46216 = cnt;
var inst_46217 = (0);
var state_46256__$1 = (function (){var statearr_46272 = state_46256;
(statearr_46272[(11)] = inst_46215);

(statearr_46272[(8)] = inst_46216);

(statearr_46272[(7)] = inst_46217);

return statearr_46272;
})();
var statearr_46273_47203 = state_46256__$1;
(statearr_46273_47203[(2)] = null);

(statearr_46273_47203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (11))){
var inst_46221 = (state_46256[(2)]);
var inst_46222 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46256__$1 = (function (){var statearr_46274 = state_46256;
(statearr_46274[(12)] = inst_46221);

return statearr_46274;
})();
var statearr_46275_47204 = state_46256__$1;
(statearr_46275_47204[(2)] = inst_46222);

(statearr_46275_47204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (9))){
var inst_46217 = (state_46256[(7)]);
var _ = (function (){var statearr_46276 = state_46256;
(statearr_46276[(4)] = cljs.core.cons((12),(state_46256[(4)])));

return statearr_46276;
})();
var inst_46228 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46217) : chs__$1.call(null,inst_46217));
var inst_46229 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46217) : done.call(null,inst_46217));
var inst_46230 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46228,inst_46229);
var ___$1 = (function (){var statearr_46277 = state_46256;
(statearr_46277[(4)] = cljs.core.rest((state_46256[(4)])));

return statearr_46277;
})();
var state_46256__$1 = state_46256;
var statearr_46278_47205 = state_46256__$1;
(statearr_46278_47205[(2)] = inst_46230);

(statearr_46278_47205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (5))){
var inst_46240 = (state_46256[(2)]);
var state_46256__$1 = (function (){var statearr_46279 = state_46256;
(statearr_46279[(13)] = inst_46240);

return statearr_46279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46256__$1,(13),dchan);
} else {
if((state_val_46257 === (14))){
var inst_46245 = cljs.core.async.close_BANG_(out);
var state_46256__$1 = state_46256;
var statearr_46280_47206 = state_46256__$1;
(statearr_46280_47206[(2)] = inst_46245);

(statearr_46280_47206[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (16))){
var inst_46252 = (state_46256[(2)]);
var state_46256__$1 = state_46256;
var statearr_46281_47207 = state_46256__$1;
(statearr_46281_47207[(2)] = inst_46252);

(statearr_46281_47207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (10))){
var inst_46217 = (state_46256[(7)]);
var inst_46233 = (state_46256[(2)]);
var inst_46234 = (inst_46217 + (1));
var inst_46217__$1 = inst_46234;
var state_46256__$1 = (function (){var statearr_46282 = state_46256;
(statearr_46282[(14)] = inst_46233);

(statearr_46282[(7)] = inst_46217__$1);

return statearr_46282;
})();
var statearr_46283_47209 = state_46256__$1;
(statearr_46283_47209[(2)] = null);

(statearr_46283_47209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46257 === (8))){
var inst_46238 = (state_46256[(2)]);
var state_46256__$1 = state_46256;
var statearr_46284_47213 = state_46256__$1;
(statearr_46284_47213[(2)] = inst_46238);

(statearr_46284_47213[(1)] = (5));


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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46285[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46285[(1)] = (1));

return statearr_46285;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46256){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46256);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46286){var ex__45056__auto__ = e46286;
var statearr_46287_47214 = state_46256;
(statearr_46287_47214[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46256[(4)]))){
var statearr_46288_47215 = state_46256;
(statearr_46288_47215[(1)] = cljs.core.first((state_46256[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47216 = state_46256;
state_46256 = G__47216;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46289 = f__45124__auto__();
(statearr_46289[(6)] = c__45123__auto___47190);

return statearr_46289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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
var G__46292 = arguments.length;
switch (G__46292) {
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
var c__45123__auto___47218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46324){
var state_val_46325 = (state_46324[(1)]);
if((state_val_46325 === (7))){
var inst_46303 = (state_46324[(7)]);
var inst_46304 = (state_46324[(8)]);
var inst_46303__$1 = (state_46324[(2)]);
var inst_46304__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46303__$1,(0),null);
var inst_46305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46303__$1,(1),null);
var inst_46306 = (inst_46304__$1 == null);
var state_46324__$1 = (function (){var statearr_46326 = state_46324;
(statearr_46326[(7)] = inst_46303__$1);

(statearr_46326[(8)] = inst_46304__$1);

(statearr_46326[(9)] = inst_46305);

return statearr_46326;
})();
if(cljs.core.truth_(inst_46306)){
var statearr_46327_47223 = state_46324__$1;
(statearr_46327_47223[(1)] = (8));

} else {
var statearr_46328_47224 = state_46324__$1;
(statearr_46328_47224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (1))){
var inst_46293 = cljs.core.vec(chs);
var inst_46294 = inst_46293;
var state_46324__$1 = (function (){var statearr_46329 = state_46324;
(statearr_46329[(10)] = inst_46294);

return statearr_46329;
})();
var statearr_46330_47226 = state_46324__$1;
(statearr_46330_47226[(2)] = null);

(statearr_46330_47226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (4))){
var inst_46294 = (state_46324[(10)]);
var state_46324__$1 = state_46324;
return cljs.core.async.ioc_alts_BANG_(state_46324__$1,(7),inst_46294);
} else {
if((state_val_46325 === (6))){
var inst_46320 = (state_46324[(2)]);
var state_46324__$1 = state_46324;
var statearr_46331_47227 = state_46324__$1;
(statearr_46331_47227[(2)] = inst_46320);

(statearr_46331_47227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (3))){
var inst_46322 = (state_46324[(2)]);
var state_46324__$1 = state_46324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46324__$1,inst_46322);
} else {
if((state_val_46325 === (2))){
var inst_46294 = (state_46324[(10)]);
var inst_46296 = cljs.core.count(inst_46294);
var inst_46297 = (inst_46296 > (0));
var state_46324__$1 = state_46324;
if(cljs.core.truth_(inst_46297)){
var statearr_46333_47229 = state_46324__$1;
(statearr_46333_47229[(1)] = (4));

} else {
var statearr_46334_47230 = state_46324__$1;
(statearr_46334_47230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (11))){
var inst_46294 = (state_46324[(10)]);
var inst_46313 = (state_46324[(2)]);
var tmp46332 = inst_46294;
var inst_46294__$1 = tmp46332;
var state_46324__$1 = (function (){var statearr_46335 = state_46324;
(statearr_46335[(11)] = inst_46313);

(statearr_46335[(10)] = inst_46294__$1);

return statearr_46335;
})();
var statearr_46336_47231 = state_46324__$1;
(statearr_46336_47231[(2)] = null);

(statearr_46336_47231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (9))){
var inst_46304 = (state_46324[(8)]);
var state_46324__$1 = state_46324;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46324__$1,(11),out,inst_46304);
} else {
if((state_val_46325 === (5))){
var inst_46318 = cljs.core.async.close_BANG_(out);
var state_46324__$1 = state_46324;
var statearr_46337_47232 = state_46324__$1;
(statearr_46337_47232[(2)] = inst_46318);

(statearr_46337_47232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (10))){
var inst_46316 = (state_46324[(2)]);
var state_46324__$1 = state_46324;
var statearr_46338_47233 = state_46324__$1;
(statearr_46338_47233[(2)] = inst_46316);

(statearr_46338_47233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (8))){
var inst_46294 = (state_46324[(10)]);
var inst_46303 = (state_46324[(7)]);
var inst_46304 = (state_46324[(8)]);
var inst_46305 = (state_46324[(9)]);
var inst_46308 = (function (){var cs = inst_46294;
var vec__46299 = inst_46303;
var v = inst_46304;
var c = inst_46305;
return (function (p1__46290_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46290_SHARP_);
});
})();
var inst_46309 = cljs.core.filterv(inst_46308,inst_46294);
var inst_46294__$1 = inst_46309;
var state_46324__$1 = (function (){var statearr_46339 = state_46324;
(statearr_46339[(10)] = inst_46294__$1);

return statearr_46339;
})();
var statearr_46340_47234 = state_46324__$1;
(statearr_46340_47234[(2)] = null);

(statearr_46340_47234[(1)] = (2));


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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46341[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46341[(1)] = (1));

return statearr_46341;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46324){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46324);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46342){var ex__45056__auto__ = e46342;
var statearr_46343_47235 = state_46324;
(statearr_46343_47235[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46324[(4)]))){
var statearr_46344_47236 = state_46324;
(statearr_46344_47236[(1)] = cljs.core.first((state_46324[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47237 = state_46324;
state_46324 = G__47237;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46324){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46345 = f__45124__auto__();
(statearr_46345[(6)] = c__45123__auto___47218);

return statearr_46345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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
var G__46347 = arguments.length;
switch (G__46347) {
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
var c__45123__auto___47239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46371){
var state_val_46372 = (state_46371[(1)]);
if((state_val_46372 === (7))){
var inst_46353 = (state_46371[(7)]);
var inst_46353__$1 = (state_46371[(2)]);
var inst_46354 = (inst_46353__$1 == null);
var inst_46355 = cljs.core.not(inst_46354);
var state_46371__$1 = (function (){var statearr_46373 = state_46371;
(statearr_46373[(7)] = inst_46353__$1);

return statearr_46373;
})();
if(inst_46355){
var statearr_46374_47240 = state_46371__$1;
(statearr_46374_47240[(1)] = (8));

} else {
var statearr_46375_47241 = state_46371__$1;
(statearr_46375_47241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (1))){
var inst_46348 = (0);
var state_46371__$1 = (function (){var statearr_46376 = state_46371;
(statearr_46376[(8)] = inst_46348);

return statearr_46376;
})();
var statearr_46377_47242 = state_46371__$1;
(statearr_46377_47242[(2)] = null);

(statearr_46377_47242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (4))){
var state_46371__$1 = state_46371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46371__$1,(7),ch);
} else {
if((state_val_46372 === (6))){
var inst_46366 = (state_46371[(2)]);
var state_46371__$1 = state_46371;
var statearr_46378_47243 = state_46371__$1;
(statearr_46378_47243[(2)] = inst_46366);

(statearr_46378_47243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (3))){
var inst_46368 = (state_46371[(2)]);
var inst_46369 = cljs.core.async.close_BANG_(out);
var state_46371__$1 = (function (){var statearr_46379 = state_46371;
(statearr_46379[(9)] = inst_46368);

return statearr_46379;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46371__$1,inst_46369);
} else {
if((state_val_46372 === (2))){
var inst_46348 = (state_46371[(8)]);
var inst_46350 = (inst_46348 < n);
var state_46371__$1 = state_46371;
if(cljs.core.truth_(inst_46350)){
var statearr_46380_47244 = state_46371__$1;
(statearr_46380_47244[(1)] = (4));

} else {
var statearr_46381_47245 = state_46371__$1;
(statearr_46381_47245[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (11))){
var inst_46348 = (state_46371[(8)]);
var inst_46358 = (state_46371[(2)]);
var inst_46359 = (inst_46348 + (1));
var inst_46348__$1 = inst_46359;
var state_46371__$1 = (function (){var statearr_46382 = state_46371;
(statearr_46382[(10)] = inst_46358);

(statearr_46382[(8)] = inst_46348__$1);

return statearr_46382;
})();
var statearr_46383_47246 = state_46371__$1;
(statearr_46383_47246[(2)] = null);

(statearr_46383_47246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (9))){
var state_46371__$1 = state_46371;
var statearr_46384_47247 = state_46371__$1;
(statearr_46384_47247[(2)] = null);

(statearr_46384_47247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (5))){
var state_46371__$1 = state_46371;
var statearr_46385_47248 = state_46371__$1;
(statearr_46385_47248[(2)] = null);

(statearr_46385_47248[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (10))){
var inst_46363 = (state_46371[(2)]);
var state_46371__$1 = state_46371;
var statearr_46386_47253 = state_46371__$1;
(statearr_46386_47253[(2)] = inst_46363);

(statearr_46386_47253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46372 === (8))){
var inst_46353 = (state_46371[(7)]);
var state_46371__$1 = state_46371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46371__$1,(11),out,inst_46353);
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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46387 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46387[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46387[(1)] = (1));

return statearr_46387;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46371){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46371);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46388){var ex__45056__auto__ = e46388;
var statearr_46389_47254 = state_46371;
(statearr_46389_47254[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46371[(4)]))){
var statearr_46390_47255 = state_46371;
(statearr_46390_47255[(1)] = cljs.core.first((state_46371[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47256 = state_46371;
state_46371 = G__47256;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46391 = f__45124__auto__();
(statearr_46391[(6)] = c__45123__auto___47239);

return statearr_46391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
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
cljs.core.async.t_cljs$core$async46396 = (function (f,ch,meta46394,_,fn1,meta46397){
this.f = f;
this.ch = ch;
this.meta46394 = meta46394;
this._ = _;
this.fn1 = fn1;
this.meta46397 = meta46397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46398,meta46397__$1){
var self__ = this;
var _46398__$1 = this;
return (new cljs.core.async.t_cljs$core$async46396(self__.f,self__.ch,self__.meta46394,self__._,self__.fn1,meta46397__$1));
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46398){
var self__ = this;
var _46398__$1 = this;
return self__.meta46397;
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46392_SHARP_){
var G__46399 = (((p1__46392_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46392_SHARP_) : self__.f.call(null,p1__46392_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46399) : f1.call(null,G__46399));
});
}));

(cljs.core.async.t_cljs$core$async46396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46394","meta46394",1055863026,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46393","cljs.core.async/t_cljs$core$async46393",1310266794,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46397","meta46397",1986884802,null)], null);
}));

(cljs.core.async.t_cljs$core$async46396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46396");

(cljs.core.async.t_cljs$core$async46396.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46396.
 */
cljs.core.async.__GT_t_cljs$core$async46396 = (function cljs$core$async$__GT_t_cljs$core$async46396(f,ch,meta46394,_,fn1,meta46397){
return (new cljs.core.async.t_cljs$core$async46396(f,ch,meta46394,_,fn1,meta46397));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46393 = (function (f,ch,meta46394){
this.f = f;
this.ch = ch;
this.meta46394 = meta46394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46395,meta46394__$1){
var self__ = this;
var _46395__$1 = this;
return (new cljs.core.async.t_cljs$core$async46393(self__.f,self__.ch,meta46394__$1));
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46395){
var self__ = this;
var _46395__$1 = this;
return self__.meta46394;
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async46396(self__.f,self__.ch,self__.meta46394,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46400 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46400) : self__.f.call(null,G__46400));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46394","meta46394",1055863026,null)], null);
}));

(cljs.core.async.t_cljs$core$async46393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46393");

(cljs.core.async.t_cljs$core$async46393.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46393.
 */
cljs.core.async.__GT_t_cljs$core$async46393 = (function cljs$core$async$__GT_t_cljs$core$async46393(f,ch,meta46394){
return (new cljs.core.async.t_cljs$core$async46393(f,ch,meta46394));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async46393(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46401 = (function (f,ch,meta46402){
this.f = f;
this.ch = ch;
this.meta46402 = meta46402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46403,meta46402__$1){
var self__ = this;
var _46403__$1 = this;
return (new cljs.core.async.t_cljs$core$async46401(self__.f,self__.ch,meta46402__$1));
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46403){
var self__ = this;
var _46403__$1 = this;
return self__.meta46402;
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46402","meta46402",634878410,null)], null);
}));

(cljs.core.async.t_cljs$core$async46401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46401");

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46401.
 */
cljs.core.async.__GT_t_cljs$core$async46401 = (function cljs$core$async$__GT_t_cljs$core$async46401(f,ch,meta46402){
return (new cljs.core.async.t_cljs$core$async46401(f,ch,meta46402));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async46401(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46404 = (function (p,ch,meta46405){
this.p = p;
this.ch = ch;
this.meta46405 = meta46405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46406,meta46405__$1){
var self__ = this;
var _46406__$1 = this;
return (new cljs.core.async.t_cljs$core$async46404(self__.p,self__.ch,meta46405__$1));
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46406){
var self__ = this;
var _46406__$1 = this;
return self__.meta46405;
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46405","meta46405",-289815137,null)], null);
}));

(cljs.core.async.t_cljs$core$async46404.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46404");

(cljs.core.async.t_cljs$core$async46404.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async46404");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46404.
 */
cljs.core.async.__GT_t_cljs$core$async46404 = (function cljs$core$async$__GT_t_cljs$core$async46404(p,ch,meta46405){
return (new cljs.core.async.t_cljs$core$async46404(p,ch,meta46405));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async46404(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46408 = arguments.length;
switch (G__46408) {
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
var c__45123__auto___47261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46429){
var state_val_46430 = (state_46429[(1)]);
if((state_val_46430 === (7))){
var inst_46425 = (state_46429[(2)]);
var state_46429__$1 = state_46429;
var statearr_46431_47262 = state_46429__$1;
(statearr_46431_47262[(2)] = inst_46425);

(statearr_46431_47262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (1))){
var state_46429__$1 = state_46429;
var statearr_46432_47263 = state_46429__$1;
(statearr_46432_47263[(2)] = null);

(statearr_46432_47263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (4))){
var inst_46411 = (state_46429[(7)]);
var inst_46411__$1 = (state_46429[(2)]);
var inst_46412 = (inst_46411__$1 == null);
var state_46429__$1 = (function (){var statearr_46433 = state_46429;
(statearr_46433[(7)] = inst_46411__$1);

return statearr_46433;
})();
if(cljs.core.truth_(inst_46412)){
var statearr_46434_47264 = state_46429__$1;
(statearr_46434_47264[(1)] = (5));

} else {
var statearr_46435_47265 = state_46429__$1;
(statearr_46435_47265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (6))){
var inst_46411 = (state_46429[(7)]);
var inst_46416 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46411) : p.call(null,inst_46411));
var state_46429__$1 = state_46429;
if(cljs.core.truth_(inst_46416)){
var statearr_46436_47266 = state_46429__$1;
(statearr_46436_47266[(1)] = (8));

} else {
var statearr_46437_47267 = state_46429__$1;
(statearr_46437_47267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (3))){
var inst_46427 = (state_46429[(2)]);
var state_46429__$1 = state_46429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46429__$1,inst_46427);
} else {
if((state_val_46430 === (2))){
var state_46429__$1 = state_46429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46429__$1,(4),ch);
} else {
if((state_val_46430 === (11))){
var inst_46419 = (state_46429[(2)]);
var state_46429__$1 = state_46429;
var statearr_46438_47268 = state_46429__$1;
(statearr_46438_47268[(2)] = inst_46419);

(statearr_46438_47268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (9))){
var state_46429__$1 = state_46429;
var statearr_46439_47269 = state_46429__$1;
(statearr_46439_47269[(2)] = null);

(statearr_46439_47269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (5))){
var inst_46414 = cljs.core.async.close_BANG_(out);
var state_46429__$1 = state_46429;
var statearr_46440_47274 = state_46429__$1;
(statearr_46440_47274[(2)] = inst_46414);

(statearr_46440_47274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (10))){
var inst_46422 = (state_46429[(2)]);
var state_46429__$1 = (function (){var statearr_46441 = state_46429;
(statearr_46441[(8)] = inst_46422);

return statearr_46441;
})();
var statearr_46442_47275 = state_46429__$1;
(statearr_46442_47275[(2)] = null);

(statearr_46442_47275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46430 === (8))){
var inst_46411 = (state_46429[(7)]);
var state_46429__$1 = state_46429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46429__$1,(11),out,inst_46411);
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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46443 = [null,null,null,null,null,null,null,null,null];
(statearr_46443[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46443[(1)] = (1));

return statearr_46443;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46429){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46429);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46444){var ex__45056__auto__ = e46444;
var statearr_46445_47276 = state_46429;
(statearr_46445_47276[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46429[(4)]))){
var statearr_46446_47277 = state_46429;
(statearr_46446_47277[(1)] = cljs.core.first((state_46429[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47278 = state_46429;
state_46429 = G__47278;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46447 = f__45124__auto__();
(statearr_46447[(6)] = c__45123__auto___47261);

return statearr_46447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46449 = arguments.length;
switch (G__46449) {
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
var c__45123__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46511){
var state_val_46512 = (state_46511[(1)]);
if((state_val_46512 === (7))){
var inst_46507 = (state_46511[(2)]);
var state_46511__$1 = state_46511;
var statearr_46513_47284 = state_46511__$1;
(statearr_46513_47284[(2)] = inst_46507);

(statearr_46513_47284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (20))){
var inst_46477 = (state_46511[(7)]);
var inst_46488 = (state_46511[(2)]);
var inst_46489 = cljs.core.next(inst_46477);
var inst_46463 = inst_46489;
var inst_46464 = null;
var inst_46465 = (0);
var inst_46466 = (0);
var state_46511__$1 = (function (){var statearr_46514 = state_46511;
(statearr_46514[(8)] = inst_46488);

(statearr_46514[(9)] = inst_46463);

(statearr_46514[(10)] = inst_46464);

(statearr_46514[(11)] = inst_46465);

(statearr_46514[(12)] = inst_46466);

return statearr_46514;
})();
var statearr_46515_47285 = state_46511__$1;
(statearr_46515_47285[(2)] = null);

(statearr_46515_47285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (1))){
var state_46511__$1 = state_46511;
var statearr_46516_47286 = state_46511__$1;
(statearr_46516_47286[(2)] = null);

(statearr_46516_47286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (4))){
var inst_46452 = (state_46511[(13)]);
var inst_46452__$1 = (state_46511[(2)]);
var inst_46453 = (inst_46452__$1 == null);
var state_46511__$1 = (function (){var statearr_46517 = state_46511;
(statearr_46517[(13)] = inst_46452__$1);

return statearr_46517;
})();
if(cljs.core.truth_(inst_46453)){
var statearr_46518_47288 = state_46511__$1;
(statearr_46518_47288[(1)] = (5));

} else {
var statearr_46519_47289 = state_46511__$1;
(statearr_46519_47289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (15))){
var state_46511__$1 = state_46511;
var statearr_46523_47290 = state_46511__$1;
(statearr_46523_47290[(2)] = null);

(statearr_46523_47290[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (21))){
var state_46511__$1 = state_46511;
var statearr_46524_47291 = state_46511__$1;
(statearr_46524_47291[(2)] = null);

(statearr_46524_47291[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (13))){
var inst_46466 = (state_46511[(12)]);
var inst_46463 = (state_46511[(9)]);
var inst_46464 = (state_46511[(10)]);
var inst_46465 = (state_46511[(11)]);
var inst_46473 = (state_46511[(2)]);
var inst_46474 = (inst_46466 + (1));
var tmp46520 = inst_46464;
var tmp46521 = inst_46465;
var tmp46522 = inst_46463;
var inst_46463__$1 = tmp46522;
var inst_46464__$1 = tmp46520;
var inst_46465__$1 = tmp46521;
var inst_46466__$1 = inst_46474;
var state_46511__$1 = (function (){var statearr_46525 = state_46511;
(statearr_46525[(14)] = inst_46473);

(statearr_46525[(9)] = inst_46463__$1);

(statearr_46525[(10)] = inst_46464__$1);

(statearr_46525[(11)] = inst_46465__$1);

(statearr_46525[(12)] = inst_46466__$1);

return statearr_46525;
})();
var statearr_46526_47292 = state_46511__$1;
(statearr_46526_47292[(2)] = null);

(statearr_46526_47292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (22))){
var state_46511__$1 = state_46511;
var statearr_46527_47294 = state_46511__$1;
(statearr_46527_47294[(2)] = null);

(statearr_46527_47294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (6))){
var inst_46452 = (state_46511[(13)]);
var inst_46461 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46452) : f.call(null,inst_46452));
var inst_46462 = cljs.core.seq(inst_46461);
var inst_46463 = inst_46462;
var inst_46464 = null;
var inst_46465 = (0);
var inst_46466 = (0);
var state_46511__$1 = (function (){var statearr_46528 = state_46511;
(statearr_46528[(9)] = inst_46463);

(statearr_46528[(10)] = inst_46464);

(statearr_46528[(11)] = inst_46465);

(statearr_46528[(12)] = inst_46466);

return statearr_46528;
})();
var statearr_46529_47295 = state_46511__$1;
(statearr_46529_47295[(2)] = null);

(statearr_46529_47295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (17))){
var inst_46477 = (state_46511[(7)]);
var inst_46481 = cljs.core.chunk_first(inst_46477);
var inst_46482 = cljs.core.chunk_rest(inst_46477);
var inst_46483 = cljs.core.count(inst_46481);
var inst_46463 = inst_46482;
var inst_46464 = inst_46481;
var inst_46465 = inst_46483;
var inst_46466 = (0);
var state_46511__$1 = (function (){var statearr_46530 = state_46511;
(statearr_46530[(9)] = inst_46463);

(statearr_46530[(10)] = inst_46464);

(statearr_46530[(11)] = inst_46465);

(statearr_46530[(12)] = inst_46466);

return statearr_46530;
})();
var statearr_46531_47296 = state_46511__$1;
(statearr_46531_47296[(2)] = null);

(statearr_46531_47296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (3))){
var inst_46509 = (state_46511[(2)]);
var state_46511__$1 = state_46511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46511__$1,inst_46509);
} else {
if((state_val_46512 === (12))){
var inst_46497 = (state_46511[(2)]);
var state_46511__$1 = state_46511;
var statearr_46532_47301 = state_46511__$1;
(statearr_46532_47301[(2)] = inst_46497);

(statearr_46532_47301[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (2))){
var state_46511__$1 = state_46511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46511__$1,(4),in$);
} else {
if((state_val_46512 === (23))){
var inst_46505 = (state_46511[(2)]);
var state_46511__$1 = state_46511;
var statearr_46533_47302 = state_46511__$1;
(statearr_46533_47302[(2)] = inst_46505);

(statearr_46533_47302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (19))){
var inst_46492 = (state_46511[(2)]);
var state_46511__$1 = state_46511;
var statearr_46534_47303 = state_46511__$1;
(statearr_46534_47303[(2)] = inst_46492);

(statearr_46534_47303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (11))){
var inst_46463 = (state_46511[(9)]);
var inst_46477 = (state_46511[(7)]);
var inst_46477__$1 = cljs.core.seq(inst_46463);
var state_46511__$1 = (function (){var statearr_46535 = state_46511;
(statearr_46535[(7)] = inst_46477__$1);

return statearr_46535;
})();
if(inst_46477__$1){
var statearr_46536_47304 = state_46511__$1;
(statearr_46536_47304[(1)] = (14));

} else {
var statearr_46537_47305 = state_46511__$1;
(statearr_46537_47305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (9))){
var inst_46499 = (state_46511[(2)]);
var inst_46500 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46511__$1 = (function (){var statearr_46538 = state_46511;
(statearr_46538[(15)] = inst_46499);

return statearr_46538;
})();
if(cljs.core.truth_(inst_46500)){
var statearr_46539_47306 = state_46511__$1;
(statearr_46539_47306[(1)] = (21));

} else {
var statearr_46540_47307 = state_46511__$1;
(statearr_46540_47307[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (5))){
var inst_46455 = cljs.core.async.close_BANG_(out);
var state_46511__$1 = state_46511;
var statearr_46541_47308 = state_46511__$1;
(statearr_46541_47308[(2)] = inst_46455);

(statearr_46541_47308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (14))){
var inst_46477 = (state_46511[(7)]);
var inst_46479 = cljs.core.chunked_seq_QMARK_(inst_46477);
var state_46511__$1 = state_46511;
if(inst_46479){
var statearr_46542_47309 = state_46511__$1;
(statearr_46542_47309[(1)] = (17));

} else {
var statearr_46543_47310 = state_46511__$1;
(statearr_46543_47310[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (16))){
var inst_46495 = (state_46511[(2)]);
var state_46511__$1 = state_46511;
var statearr_46544_47311 = state_46511__$1;
(statearr_46544_47311[(2)] = inst_46495);

(statearr_46544_47311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46512 === (10))){
var inst_46464 = (state_46511[(10)]);
var inst_46466 = (state_46511[(12)]);
var inst_46471 = cljs.core._nth(inst_46464,inst_46466);
var state_46511__$1 = state_46511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46511__$1,(13),out,inst_46471);
} else {
if((state_val_46512 === (18))){
var inst_46477 = (state_46511[(7)]);
var inst_46486 = cljs.core.first(inst_46477);
var state_46511__$1 = state_46511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46511__$1,(20),out,inst_46486);
} else {
if((state_val_46512 === (8))){
var inst_46466 = (state_46511[(12)]);
var inst_46465 = (state_46511[(11)]);
var inst_46468 = (inst_46466 < inst_46465);
var inst_46469 = inst_46468;
var state_46511__$1 = state_46511;
if(cljs.core.truth_(inst_46469)){
var statearr_46545_47312 = state_46511__$1;
(statearr_46545_47312[(1)] = (10));

} else {
var statearr_46546_47313 = state_46511__$1;
(statearr_46546_47313[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45053__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45053__auto____0 = (function (){
var statearr_46547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46547[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45053__auto__);

(statearr_46547[(1)] = (1));

return statearr_46547;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45053__auto____1 = (function (state_46511){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46511);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46548){var ex__45056__auto__ = e46548;
var statearr_46549_47314 = state_46511;
(statearr_46549_47314[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46511[(4)]))){
var statearr_46550_47315 = state_46511;
(statearr_46550_47315[(1)] = cljs.core.first((state_46511[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47316 = state_46511;
state_46511 = G__47316;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45053__auto__ = function(state_46511){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45053__auto____1.call(this,state_46511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45053__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45053__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46551 = f__45124__auto__();
(statearr_46551[(6)] = c__45123__auto__);

return statearr_46551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));

return c__45123__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46553 = arguments.length;
switch (G__46553) {
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
var G__46555 = arguments.length;
switch (G__46555) {
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
var G__46557 = arguments.length;
switch (G__46557) {
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
var c__45123__auto___47322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46581){
var state_val_46582 = (state_46581[(1)]);
if((state_val_46582 === (7))){
var inst_46576 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46583_47323 = state_46581__$1;
(statearr_46583_47323[(2)] = inst_46576);

(statearr_46583_47323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (1))){
var inst_46558 = null;
var state_46581__$1 = (function (){var statearr_46584 = state_46581;
(statearr_46584[(7)] = inst_46558);

return statearr_46584;
})();
var statearr_46585_47324 = state_46581__$1;
(statearr_46585_47324[(2)] = null);

(statearr_46585_47324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (4))){
var inst_46561 = (state_46581[(8)]);
var inst_46561__$1 = (state_46581[(2)]);
var inst_46562 = (inst_46561__$1 == null);
var inst_46563 = cljs.core.not(inst_46562);
var state_46581__$1 = (function (){var statearr_46586 = state_46581;
(statearr_46586[(8)] = inst_46561__$1);

return statearr_46586;
})();
if(inst_46563){
var statearr_46587_47325 = state_46581__$1;
(statearr_46587_47325[(1)] = (5));

} else {
var statearr_46588_47326 = state_46581__$1;
(statearr_46588_47326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (6))){
var state_46581__$1 = state_46581;
var statearr_46589_47327 = state_46581__$1;
(statearr_46589_47327[(2)] = null);

(statearr_46589_47327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (3))){
var inst_46578 = (state_46581[(2)]);
var inst_46579 = cljs.core.async.close_BANG_(out);
var state_46581__$1 = (function (){var statearr_46590 = state_46581;
(statearr_46590[(9)] = inst_46578);

return statearr_46590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46581__$1,inst_46579);
} else {
if((state_val_46582 === (2))){
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46581__$1,(4),ch);
} else {
if((state_val_46582 === (11))){
var inst_46561 = (state_46581[(8)]);
var inst_46570 = (state_46581[(2)]);
var inst_46558 = inst_46561;
var state_46581__$1 = (function (){var statearr_46591 = state_46581;
(statearr_46591[(10)] = inst_46570);

(statearr_46591[(7)] = inst_46558);

return statearr_46591;
})();
var statearr_46592_47328 = state_46581__$1;
(statearr_46592_47328[(2)] = null);

(statearr_46592_47328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (9))){
var inst_46561 = (state_46581[(8)]);
var state_46581__$1 = state_46581;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46581__$1,(11),out,inst_46561);
} else {
if((state_val_46582 === (5))){
var inst_46561 = (state_46581[(8)]);
var inst_46558 = (state_46581[(7)]);
var inst_46565 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46561,inst_46558);
var state_46581__$1 = state_46581;
if(inst_46565){
var statearr_46594_47329 = state_46581__$1;
(statearr_46594_47329[(1)] = (8));

} else {
var statearr_46595_47330 = state_46581__$1;
(statearr_46595_47330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (10))){
var inst_46573 = (state_46581[(2)]);
var state_46581__$1 = state_46581;
var statearr_46596_47331 = state_46581__$1;
(statearr_46596_47331[(2)] = inst_46573);

(statearr_46596_47331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46582 === (8))){
var inst_46558 = (state_46581[(7)]);
var tmp46593 = inst_46558;
var inst_46558__$1 = tmp46593;
var state_46581__$1 = (function (){var statearr_46597 = state_46581;
(statearr_46597[(7)] = inst_46558__$1);

return statearr_46597;
})();
var statearr_46598_47332 = state_46581__$1;
(statearr_46598_47332[(2)] = null);

(statearr_46598_47332[(1)] = (2));


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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46599[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46599[(1)] = (1));

return statearr_46599;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46581){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46581);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46600){var ex__45056__auto__ = e46600;
var statearr_46601_47333 = state_46581;
(statearr_46601_47333[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46581[(4)]))){
var statearr_46602_47334 = state_46581;
(statearr_46602_47334[(1)] = cljs.core.first((state_46581[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47335 = state_46581;
state_46581 = G__47335;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46603 = f__45124__auto__();
(statearr_46603[(6)] = c__45123__auto___47322);

return statearr_46603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46605 = arguments.length;
switch (G__46605) {
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
var c__45123__auto___47339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46643){
var state_val_46644 = (state_46643[(1)]);
if((state_val_46644 === (7))){
var inst_46639 = (state_46643[(2)]);
var state_46643__$1 = state_46643;
var statearr_46645_47340 = state_46643__$1;
(statearr_46645_47340[(2)] = inst_46639);

(statearr_46645_47340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (1))){
var inst_46606 = (new Array(n));
var inst_46607 = inst_46606;
var inst_46608 = (0);
var state_46643__$1 = (function (){var statearr_46646 = state_46643;
(statearr_46646[(7)] = inst_46607);

(statearr_46646[(8)] = inst_46608);

return statearr_46646;
})();
var statearr_46647_47344 = state_46643__$1;
(statearr_46647_47344[(2)] = null);

(statearr_46647_47344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (4))){
var inst_46611 = (state_46643[(9)]);
var inst_46611__$1 = (state_46643[(2)]);
var inst_46612 = (inst_46611__$1 == null);
var inst_46613 = cljs.core.not(inst_46612);
var state_46643__$1 = (function (){var statearr_46648 = state_46643;
(statearr_46648[(9)] = inst_46611__$1);

return statearr_46648;
})();
if(inst_46613){
var statearr_46649_47345 = state_46643__$1;
(statearr_46649_47345[(1)] = (5));

} else {
var statearr_46650_47346 = state_46643__$1;
(statearr_46650_47346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (15))){
var inst_46633 = (state_46643[(2)]);
var state_46643__$1 = state_46643;
var statearr_46651_47347 = state_46643__$1;
(statearr_46651_47347[(2)] = inst_46633);

(statearr_46651_47347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (13))){
var state_46643__$1 = state_46643;
var statearr_46652_47348 = state_46643__$1;
(statearr_46652_47348[(2)] = null);

(statearr_46652_47348[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (6))){
var inst_46608 = (state_46643[(8)]);
var inst_46629 = (inst_46608 > (0));
var state_46643__$1 = state_46643;
if(cljs.core.truth_(inst_46629)){
var statearr_46653_47349 = state_46643__$1;
(statearr_46653_47349[(1)] = (12));

} else {
var statearr_46654_47350 = state_46643__$1;
(statearr_46654_47350[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (3))){
var inst_46641 = (state_46643[(2)]);
var state_46643__$1 = state_46643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46643__$1,inst_46641);
} else {
if((state_val_46644 === (12))){
var inst_46607 = (state_46643[(7)]);
var inst_46631 = cljs.core.vec(inst_46607);
var state_46643__$1 = state_46643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46643__$1,(15),out,inst_46631);
} else {
if((state_val_46644 === (2))){
var state_46643__$1 = state_46643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46643__$1,(4),ch);
} else {
if((state_val_46644 === (11))){
var inst_46623 = (state_46643[(2)]);
var inst_46624 = (new Array(n));
var inst_46607 = inst_46624;
var inst_46608 = (0);
var state_46643__$1 = (function (){var statearr_46655 = state_46643;
(statearr_46655[(10)] = inst_46623);

(statearr_46655[(7)] = inst_46607);

(statearr_46655[(8)] = inst_46608);

return statearr_46655;
})();
var statearr_46656_47351 = state_46643__$1;
(statearr_46656_47351[(2)] = null);

(statearr_46656_47351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (9))){
var inst_46607 = (state_46643[(7)]);
var inst_46621 = cljs.core.vec(inst_46607);
var state_46643__$1 = state_46643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46643__$1,(11),out,inst_46621);
} else {
if((state_val_46644 === (5))){
var inst_46607 = (state_46643[(7)]);
var inst_46608 = (state_46643[(8)]);
var inst_46611 = (state_46643[(9)]);
var inst_46616 = (state_46643[(11)]);
var inst_46615 = (inst_46607[inst_46608] = inst_46611);
var inst_46616__$1 = (inst_46608 + (1));
var inst_46617 = (inst_46616__$1 < n);
var state_46643__$1 = (function (){var statearr_46657 = state_46643;
(statearr_46657[(12)] = inst_46615);

(statearr_46657[(11)] = inst_46616__$1);

return statearr_46657;
})();
if(cljs.core.truth_(inst_46617)){
var statearr_46658_47352 = state_46643__$1;
(statearr_46658_47352[(1)] = (8));

} else {
var statearr_46659_47353 = state_46643__$1;
(statearr_46659_47353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (14))){
var inst_46636 = (state_46643[(2)]);
var inst_46637 = cljs.core.async.close_BANG_(out);
var state_46643__$1 = (function (){var statearr_46661 = state_46643;
(statearr_46661[(13)] = inst_46636);

return statearr_46661;
})();
var statearr_46662_47354 = state_46643__$1;
(statearr_46662_47354[(2)] = inst_46637);

(statearr_46662_47354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (10))){
var inst_46627 = (state_46643[(2)]);
var state_46643__$1 = state_46643;
var statearr_46663_47359 = state_46643__$1;
(statearr_46663_47359[(2)] = inst_46627);

(statearr_46663_47359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46644 === (8))){
var inst_46607 = (state_46643[(7)]);
var inst_46616 = (state_46643[(11)]);
var tmp46660 = inst_46607;
var inst_46607__$1 = tmp46660;
var inst_46608 = inst_46616;
var state_46643__$1 = (function (){var statearr_46664 = state_46643;
(statearr_46664[(7)] = inst_46607__$1);

(statearr_46664[(8)] = inst_46608);

return statearr_46664;
})();
var statearr_46665_47360 = state_46643__$1;
(statearr_46665_47360[(2)] = null);

(statearr_46665_47360[(1)] = (2));


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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46666[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46666[(1)] = (1));

return statearr_46666;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46643){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46643);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46667){var ex__45056__auto__ = e46667;
var statearr_46668_47361 = state_46643;
(statearr_46668_47361[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46643[(4)]))){
var statearr_46669_47362 = state_46643;
(statearr_46669_47362[(1)] = cljs.core.first((state_46643[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47363 = state_46643;
state_46643 = G__47363;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46670 = f__45124__auto__();
(statearr_46670[(6)] = c__45123__auto___47339);

return statearr_46670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46672 = arguments.length;
switch (G__46672) {
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
var c__45123__auto___47365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45124__auto__ = (function (){var switch__45052__auto__ = (function (state_46717){
var state_val_46718 = (state_46717[(1)]);
if((state_val_46718 === (7))){
var inst_46713 = (state_46717[(2)]);
var state_46717__$1 = state_46717;
var statearr_46719_47366 = state_46717__$1;
(statearr_46719_47366[(2)] = inst_46713);

(statearr_46719_47366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (1))){
var inst_46673 = [];
var inst_46674 = inst_46673;
var inst_46675 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46717__$1 = (function (){var statearr_46720 = state_46717;
(statearr_46720[(7)] = inst_46674);

(statearr_46720[(8)] = inst_46675);

return statearr_46720;
})();
var statearr_46721_47367 = state_46717__$1;
(statearr_46721_47367[(2)] = null);

(statearr_46721_47367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (4))){
var inst_46678 = (state_46717[(9)]);
var inst_46678__$1 = (state_46717[(2)]);
var inst_46679 = (inst_46678__$1 == null);
var inst_46680 = cljs.core.not(inst_46679);
var state_46717__$1 = (function (){var statearr_46722 = state_46717;
(statearr_46722[(9)] = inst_46678__$1);

return statearr_46722;
})();
if(inst_46680){
var statearr_46723_47368 = state_46717__$1;
(statearr_46723_47368[(1)] = (5));

} else {
var statearr_46724_47369 = state_46717__$1;
(statearr_46724_47369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (15))){
var inst_46674 = (state_46717[(7)]);
var inst_46705 = cljs.core.vec(inst_46674);
var state_46717__$1 = state_46717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46717__$1,(18),out,inst_46705);
} else {
if((state_val_46718 === (13))){
var inst_46700 = (state_46717[(2)]);
var state_46717__$1 = state_46717;
var statearr_46725_47370 = state_46717__$1;
(statearr_46725_47370[(2)] = inst_46700);

(statearr_46725_47370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (6))){
var inst_46674 = (state_46717[(7)]);
var inst_46702 = inst_46674.length;
var inst_46703 = (inst_46702 > (0));
var state_46717__$1 = state_46717;
if(cljs.core.truth_(inst_46703)){
var statearr_46726_47371 = state_46717__$1;
(statearr_46726_47371[(1)] = (15));

} else {
var statearr_46727_47372 = state_46717__$1;
(statearr_46727_47372[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (17))){
var inst_46710 = (state_46717[(2)]);
var inst_46711 = cljs.core.async.close_BANG_(out);
var state_46717__$1 = (function (){var statearr_46728 = state_46717;
(statearr_46728[(10)] = inst_46710);

return statearr_46728;
})();
var statearr_46729_47373 = state_46717__$1;
(statearr_46729_47373[(2)] = inst_46711);

(statearr_46729_47373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (3))){
var inst_46715 = (state_46717[(2)]);
var state_46717__$1 = state_46717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46717__$1,inst_46715);
} else {
if((state_val_46718 === (12))){
var inst_46674 = (state_46717[(7)]);
var inst_46693 = cljs.core.vec(inst_46674);
var state_46717__$1 = state_46717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46717__$1,(14),out,inst_46693);
} else {
if((state_val_46718 === (2))){
var state_46717__$1 = state_46717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46717__$1,(4),ch);
} else {
if((state_val_46718 === (11))){
var inst_46674 = (state_46717[(7)]);
var inst_46678 = (state_46717[(9)]);
var inst_46682 = (state_46717[(11)]);
var inst_46690 = inst_46674.push(inst_46678);
var tmp46730 = inst_46674;
var inst_46674__$1 = tmp46730;
var inst_46675 = inst_46682;
var state_46717__$1 = (function (){var statearr_46731 = state_46717;
(statearr_46731[(12)] = inst_46690);

(statearr_46731[(7)] = inst_46674__$1);

(statearr_46731[(8)] = inst_46675);

return statearr_46731;
})();
var statearr_46732_47374 = state_46717__$1;
(statearr_46732_47374[(2)] = null);

(statearr_46732_47374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (9))){
var inst_46675 = (state_46717[(8)]);
var inst_46686 = cljs.core.keyword_identical_QMARK_(inst_46675,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46717__$1 = state_46717;
var statearr_46733_47375 = state_46717__$1;
(statearr_46733_47375[(2)] = inst_46686);

(statearr_46733_47375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (5))){
var inst_46678 = (state_46717[(9)]);
var inst_46682 = (state_46717[(11)]);
var inst_46675 = (state_46717[(8)]);
var inst_46683 = (state_46717[(13)]);
var inst_46682__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46678) : f.call(null,inst_46678));
var inst_46683__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46682__$1,inst_46675);
var state_46717__$1 = (function (){var statearr_46734 = state_46717;
(statearr_46734[(11)] = inst_46682__$1);

(statearr_46734[(13)] = inst_46683__$1);

return statearr_46734;
})();
if(inst_46683__$1){
var statearr_46735_47376 = state_46717__$1;
(statearr_46735_47376[(1)] = (8));

} else {
var statearr_46736_47377 = state_46717__$1;
(statearr_46736_47377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (14))){
var inst_46678 = (state_46717[(9)]);
var inst_46682 = (state_46717[(11)]);
var inst_46695 = (state_46717[(2)]);
var inst_46696 = [];
var inst_46697 = inst_46696.push(inst_46678);
var inst_46674 = inst_46696;
var inst_46675 = inst_46682;
var state_46717__$1 = (function (){var statearr_46737 = state_46717;
(statearr_46737[(14)] = inst_46695);

(statearr_46737[(15)] = inst_46697);

(statearr_46737[(7)] = inst_46674);

(statearr_46737[(8)] = inst_46675);

return statearr_46737;
})();
var statearr_46738_47378 = state_46717__$1;
(statearr_46738_47378[(2)] = null);

(statearr_46738_47378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (16))){
var state_46717__$1 = state_46717;
var statearr_46739_47379 = state_46717__$1;
(statearr_46739_47379[(2)] = null);

(statearr_46739_47379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (10))){
var inst_46688 = (state_46717[(2)]);
var state_46717__$1 = state_46717;
if(cljs.core.truth_(inst_46688)){
var statearr_46740_47380 = state_46717__$1;
(statearr_46740_47380[(1)] = (11));

} else {
var statearr_46741_47381 = state_46717__$1;
(statearr_46741_47381[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (18))){
var inst_46707 = (state_46717[(2)]);
var state_46717__$1 = state_46717;
var statearr_46742_47382 = state_46717__$1;
(statearr_46742_47382[(2)] = inst_46707);

(statearr_46742_47382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46718 === (8))){
var inst_46683 = (state_46717[(13)]);
var state_46717__$1 = state_46717;
var statearr_46743_47383 = state_46717__$1;
(statearr_46743_47383[(2)] = inst_46683);

(statearr_46743_47383[(1)] = (10));


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
var cljs$core$async$state_machine__45053__auto__ = null;
var cljs$core$async$state_machine__45053__auto____0 = (function (){
var statearr_46744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46744[(0)] = cljs$core$async$state_machine__45053__auto__);

(statearr_46744[(1)] = (1));

return statearr_46744;
});
var cljs$core$async$state_machine__45053__auto____1 = (function (state_46717){
while(true){
var ret_value__45054__auto__ = (function (){try{while(true){
var result__45055__auto__ = switch__45052__auto__(state_46717);
if(cljs.core.keyword_identical_QMARK_(result__45055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45055__auto__;
}
break;
}
}catch (e46745){var ex__45056__auto__ = e46745;
var statearr_46746_47388 = state_46717;
(statearr_46746_47388[(2)] = ex__45056__auto__);


if(cljs.core.seq((state_46717[(4)]))){
var statearr_46747_47389 = state_46717;
(statearr_46747_47389[(1)] = cljs.core.first((state_46717[(4)])));

} else {
throw ex__45056__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47390 = state_46717;
state_46717 = G__47390;
continue;
} else {
return ret_value__45054__auto__;
}
break;
}
});
cljs$core$async$state_machine__45053__auto__ = function(state_46717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45053__auto____1.call(this,state_46717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45053__auto____0;
cljs$core$async$state_machine__45053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45053__auto____1;
return cljs$core$async$state_machine__45053__auto__;
})()
})();
var state__45125__auto__ = (function (){var statearr_46748 = f__45124__auto__();
(statearr_46748[(6)] = c__45123__auto___47365);

return statearr_46748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45125__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
