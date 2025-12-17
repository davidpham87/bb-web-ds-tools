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
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
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
cljs.core.async.t_cljs$core$async54657 = (function (f,blockable,meta54658){
this.f = f;
this.blockable = blockable;
this.meta54658 = meta54658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54659,meta54658__$1){
var self__ = this;
var _54659__$1 = this;
return (new cljs.core.async.t_cljs$core$async54657(self__.f,self__.blockable,meta54658__$1));
}));

(cljs.core.async.t_cljs$core$async54657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54659){
var self__ = this;
var _54659__$1 = this;
return self__.meta54658;
}));

(cljs.core.async.t_cljs$core$async54657.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54657.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54657.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54657.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54658","meta54658",-1007966484,null)], null);
}));

(cljs.core.async.t_cljs$core$async54657.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54657");

(cljs.core.async.t_cljs$core$async54657.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54657");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54657.
 */
cljs.core.async.__GT_t_cljs$core$async54657 = (function cljs$core$async$__GT_t_cljs$core$async54657(f,blockable,meta54658){
return (new cljs.core.async.t_cljs$core$async54657(f,blockable,meta54658));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54656 = arguments.length;
switch (G__54656) {
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
return (new cljs.core.async.t_cljs$core$async54657(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54666 = arguments.length;
switch (G__54666) {
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
var G__54672 = arguments.length;
switch (G__54672) {
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
var G__54678 = arguments.length;
switch (G__54678) {
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
var val_56238 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56238) : fn1.call(null,val_56238));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56238) : fn1.call(null,val_56238));
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
var G__54680 = arguments.length;
switch (G__54680) {
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
var n__5616__auto___56240 = n;
var x_56241 = (0);
while(true){
if((x_56241 < n__5616__auto___56240)){
(a[x_56241] = x_56241);

var G__56242 = (x_56241 + (1));
x_56241 = G__56242;
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
cljs.core.async.t_cljs$core$async54701 = (function (flag,meta54702){
this.flag = flag;
this.meta54702 = meta54702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54703,meta54702__$1){
var self__ = this;
var _54703__$1 = this;
return (new cljs.core.async.t_cljs$core$async54701(self__.flag,meta54702__$1));
}));

(cljs.core.async.t_cljs$core$async54701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54703){
var self__ = this;
var _54703__$1 = this;
return self__.meta54702;
}));

(cljs.core.async.t_cljs$core$async54701.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54702","meta54702",250260852,null)], null);
}));

(cljs.core.async.t_cljs$core$async54701.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54701");

(cljs.core.async.t_cljs$core$async54701.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54701");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54701.
 */
cljs.core.async.__GT_t_cljs$core$async54701 = (function cljs$core$async$__GT_t_cljs$core$async54701(flag,meta54702){
return (new cljs.core.async.t_cljs$core$async54701(flag,meta54702));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async54701(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54709 = (function (flag,cb,meta54710){
this.flag = flag;
this.cb = cb;
this.meta54710 = meta54710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54711,meta54710__$1){
var self__ = this;
var _54711__$1 = this;
return (new cljs.core.async.t_cljs$core$async54709(self__.flag,self__.cb,meta54710__$1));
}));

(cljs.core.async.t_cljs$core$async54709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54711){
var self__ = this;
var _54711__$1 = this;
return self__.meta54710;
}));

(cljs.core.async.t_cljs$core$async54709.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54710","meta54710",483542851,null)], null);
}));

(cljs.core.async.t_cljs$core$async54709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54709");

(cljs.core.async.t_cljs$core$async54709.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54709.
 */
cljs.core.async.__GT_t_cljs$core$async54709 = (function cljs$core$async$__GT_t_cljs$core$async54709(flag,cb,meta54710){
return (new cljs.core.async.t_cljs$core$async54709(flag,cb,meta54710));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async54709(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_56243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_56243)){
if((!(((port_56243.cljs$core$IFn$_invoke$arity$1 ? port_56243.cljs$core$IFn$_invoke$arity$1((1)) : port_56243.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__56244 = (i + (1));
i = G__56244;
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
return (function (p1__54712_SHARP_){
var G__54714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54712_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54714) : fret.call(null,G__54714));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__54713_SHARP_){
var G__54715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54713_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54715) : fret.call(null,G__54715));
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
var G__56245 = (i + (1));
i = G__56245;
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
var len__5749__auto___56246 = arguments.length;
var i__5750__auto___56247 = (0);
while(true){
if((i__5750__auto___56247 < len__5749__auto___56246)){
args__5755__auto__.push((arguments[i__5750__auto___56247]));

var G__56248 = (i__5750__auto___56247 + (1));
i__5750__auto___56247 = G__56248;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54719){
var map__54720 = p__54719;
var map__54720__$1 = cljs.core.__destructure_map(map__54720);
var opts = map__54720__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54717){
var G__54718 = cljs.core.first(seq54717);
var seq54717__$1 = cljs.core.next(seq54717);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54718,seq54717__$1);
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
var G__54732 = arguments.length;
switch (G__54732) {
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
var c__54596__auto___56250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_54840){
var state_val_54845 = (state_54840[(1)]);
if((state_val_54845 === (7))){
var inst_54832 = (state_54840[(2)]);
var state_54840__$1 = state_54840;
var statearr_54851_56251 = state_54840__$1;
(statearr_54851_56251[(2)] = inst_54832);

(statearr_54851_56251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (1))){
var state_54840__$1 = state_54840;
var statearr_54852_56252 = state_54840__$1;
(statearr_54852_56252[(2)] = null);

(statearr_54852_56252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (4))){
var inst_54804 = (state_54840[(7)]);
var inst_54804__$1 = (state_54840[(2)]);
var inst_54815 = (inst_54804__$1 == null);
var state_54840__$1 = (function (){var statearr_54853 = state_54840;
(statearr_54853[(7)] = inst_54804__$1);

return statearr_54853;
})();
if(cljs.core.truth_(inst_54815)){
var statearr_54854_56253 = state_54840__$1;
(statearr_54854_56253[(1)] = (5));

} else {
var statearr_54855_56254 = state_54840__$1;
(statearr_54855_56254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (13))){
var state_54840__$1 = state_54840;
var statearr_54856_56255 = state_54840__$1;
(statearr_54856_56255[(2)] = null);

(statearr_54856_56255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (6))){
var inst_54804 = (state_54840[(7)]);
var state_54840__$1 = state_54840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54840__$1,(11),to,inst_54804);
} else {
if((state_val_54845 === (3))){
var inst_54834 = (state_54840[(2)]);
var state_54840__$1 = state_54840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54840__$1,inst_54834);
} else {
if((state_val_54845 === (12))){
var state_54840__$1 = state_54840;
var statearr_54857_56256 = state_54840__$1;
(statearr_54857_56256[(2)] = null);

(statearr_54857_56256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (2))){
var state_54840__$1 = state_54840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54840__$1,(4),from);
} else {
if((state_val_54845 === (11))){
var inst_54824 = (state_54840[(2)]);
var state_54840__$1 = state_54840;
if(cljs.core.truth_(inst_54824)){
var statearr_54858_56257 = state_54840__$1;
(statearr_54858_56257[(1)] = (12));

} else {
var statearr_54859_56258 = state_54840__$1;
(statearr_54859_56258[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (9))){
var state_54840__$1 = state_54840;
var statearr_54860_56259 = state_54840__$1;
(statearr_54860_56259[(2)] = null);

(statearr_54860_56259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (5))){
var state_54840__$1 = state_54840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54861_56260 = state_54840__$1;
(statearr_54861_56260[(1)] = (8));

} else {
var statearr_54862_56261 = state_54840__$1;
(statearr_54862_56261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (14))){
var inst_54830 = (state_54840[(2)]);
var state_54840__$1 = state_54840;
var statearr_54863_56262 = state_54840__$1;
(statearr_54863_56262[(2)] = inst_54830);

(statearr_54863_56262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (10))){
var inst_54821 = (state_54840[(2)]);
var state_54840__$1 = state_54840;
var statearr_54864_56263 = state_54840__$1;
(statearr_54864_56263[(2)] = inst_54821);

(statearr_54864_56263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54845 === (8))){
var inst_54818 = cljs.core.async.close_BANG_(to);
var state_54840__$1 = state_54840;
var statearr_54865_56264 = state_54840__$1;
(statearr_54865_56264[(2)] = inst_54818);

(statearr_54865_56264[(1)] = (10));


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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_54866 = [null,null,null,null,null,null,null,null];
(statearr_54866[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_54866[(1)] = (1));

return statearr_54866;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_54840){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_54840);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e54867){var ex__54525__auto__ = e54867;
var statearr_54868_56265 = state_54840;
(statearr_54868_56265[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_54840[(4)]))){
var statearr_54869_56266 = state_54840;
(statearr_54869_56266[(1)] = cljs.core.first((state_54840[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56267 = state_54840;
state_54840 = G__56267;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_54840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_54840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_54870 = f__54597__auto__();
(statearr_54870[(6)] = c__54596__auto___56250);

return statearr_54870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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
var process__$1 = (function (p__54871){
var vec__54872 = p__54871;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54872,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54872,(1),null);
var job = vec__54872;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54596__auto___56268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_54879){
var state_val_54880 = (state_54879[(1)]);
if((state_val_54880 === (1))){
var state_54879__$1 = state_54879;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54879__$1,(2),res,v);
} else {
if((state_val_54880 === (2))){
var inst_54876 = (state_54879[(2)]);
var inst_54877 = cljs.core.async.close_BANG_(res);
var state_54879__$1 = (function (){var statearr_54881 = state_54879;
(statearr_54881[(7)] = inst_54876);

return statearr_54881;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54879__$1,inst_54877);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0 = (function (){
var statearr_54882 = [null,null,null,null,null,null,null,null];
(statearr_54882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__);

(statearr_54882[(1)] = (1));

return statearr_54882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1 = (function (state_54879){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_54879);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e54883){var ex__54525__auto__ = e54883;
var statearr_54884_56271 = state_54879;
(statearr_54884_56271[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_54879[(4)]))){
var statearr_54885_56272 = state_54879;
(statearr_54885_56272[(1)] = cljs.core.first((state_54879[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56275 = state_54879;
state_54879 = G__56275;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = function(state_54879){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1.call(this,state_54879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_54886 = f__54597__auto__();
(statearr_54886[(6)] = c__54596__auto___56268);

return statearr_54886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54887){
var vec__54888 = p__54887;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54888,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54888,(1),null);
var job = vec__54888;
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
var n__5616__auto___56276 = n;
var __56277 = (0);
while(true){
if((__56277 < n__5616__auto___56276)){
var G__54891_56278 = type;
var G__54891_56279__$1 = (((G__54891_56278 instanceof cljs.core.Keyword))?G__54891_56278.fqn:null);
switch (G__54891_56279__$1) {
case "compute":
var c__54596__auto___56281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56277,c__54596__auto___56281,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async){
return (function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = ((function (__56277,c__54596__auto___56281,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async){
return (function (state_54904){
var state_val_54905 = (state_54904[(1)]);
if((state_val_54905 === (1))){
var state_54904__$1 = state_54904;
var statearr_54906_56283 = state_54904__$1;
(statearr_54906_56283[(2)] = null);

(statearr_54906_56283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (2))){
var state_54904__$1 = state_54904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54904__$1,(4),jobs);
} else {
if((state_val_54905 === (3))){
var inst_54902 = (state_54904[(2)]);
var state_54904__$1 = state_54904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54904__$1,inst_54902);
} else {
if((state_val_54905 === (4))){
var inst_54894 = (state_54904[(2)]);
var inst_54895 = process__$1(inst_54894);
var state_54904__$1 = state_54904;
if(cljs.core.truth_(inst_54895)){
var statearr_54907_56287 = state_54904__$1;
(statearr_54907_56287[(1)] = (5));

} else {
var statearr_54908_56288 = state_54904__$1;
(statearr_54908_56288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (5))){
var state_54904__$1 = state_54904;
var statearr_54909_56289 = state_54904__$1;
(statearr_54909_56289[(2)] = null);

(statearr_54909_56289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (6))){
var state_54904__$1 = state_54904;
var statearr_54910_56290 = state_54904__$1;
(statearr_54910_56290[(2)] = null);

(statearr_54910_56290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54905 === (7))){
var inst_54900 = (state_54904[(2)]);
var state_54904__$1 = state_54904;
var statearr_54911_56291 = state_54904__$1;
(statearr_54911_56291[(2)] = inst_54900);

(statearr_54911_56291[(1)] = (3));


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
});})(__56277,c__54596__auto___56281,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async))
;
return ((function (__56277,switch__54521__auto__,c__54596__auto___56281,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0 = (function (){
var statearr_54912 = [null,null,null,null,null,null,null];
(statearr_54912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__);

(statearr_54912[(1)] = (1));

return statearr_54912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1 = (function (state_54904){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_54904);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e54913){var ex__54525__auto__ = e54913;
var statearr_54914_56292 = state_54904;
(statearr_54914_56292[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_54904[(4)]))){
var statearr_54915_56293 = state_54904;
(statearr_54915_56293[(1)] = cljs.core.first((state_54904[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56294 = state_54904;
state_54904 = G__56294;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = function(state_54904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1.call(this,state_54904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__;
})()
;})(__56277,switch__54521__auto__,c__54596__auto___56281,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async))
})();
var state__54598__auto__ = (function (){var statearr_54916 = f__54597__auto__();
(statearr_54916[(6)] = c__54596__auto___56281);

return statearr_54916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
});})(__56277,c__54596__auto___56281,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async))
);


break;
case "async":
var c__54596__auto___56296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56277,c__54596__auto___56296,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async){
return (function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = ((function (__56277,c__54596__auto___56296,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async){
return (function (state_54929){
var state_val_54930 = (state_54929[(1)]);
if((state_val_54930 === (1))){
var state_54929__$1 = state_54929;
var statearr_54931_56300 = state_54929__$1;
(statearr_54931_56300[(2)] = null);

(statearr_54931_56300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54930 === (2))){
var state_54929__$1 = state_54929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54929__$1,(4),jobs);
} else {
if((state_val_54930 === (3))){
var inst_54927 = (state_54929[(2)]);
var state_54929__$1 = state_54929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54929__$1,inst_54927);
} else {
if((state_val_54930 === (4))){
var inst_54919 = (state_54929[(2)]);
var inst_54920 = async(inst_54919);
var state_54929__$1 = state_54929;
if(cljs.core.truth_(inst_54920)){
var statearr_54932_56301 = state_54929__$1;
(statearr_54932_56301[(1)] = (5));

} else {
var statearr_54933_56302 = state_54929__$1;
(statearr_54933_56302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54930 === (5))){
var state_54929__$1 = state_54929;
var statearr_54934_56303 = state_54929__$1;
(statearr_54934_56303[(2)] = null);

(statearr_54934_56303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54930 === (6))){
var state_54929__$1 = state_54929;
var statearr_54935_56304 = state_54929__$1;
(statearr_54935_56304[(2)] = null);

(statearr_54935_56304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54930 === (7))){
var inst_54925 = (state_54929[(2)]);
var state_54929__$1 = state_54929;
var statearr_54936_56305 = state_54929__$1;
(statearr_54936_56305[(2)] = inst_54925);

(statearr_54936_56305[(1)] = (3));


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
});})(__56277,c__54596__auto___56296,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async))
;
return ((function (__56277,switch__54521__auto__,c__54596__auto___56296,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0 = (function (){
var statearr_54937 = [null,null,null,null,null,null,null];
(statearr_54937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__);

(statearr_54937[(1)] = (1));

return statearr_54937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1 = (function (state_54929){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_54929);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e54938){var ex__54525__auto__ = e54938;
var statearr_54939_56306 = state_54929;
(statearr_54939_56306[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_54929[(4)]))){
var statearr_54940_56307 = state_54929;
(statearr_54940_56307[(1)] = cljs.core.first((state_54929[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56308 = state_54929;
state_54929 = G__56308;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = function(state_54929){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1.call(this,state_54929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__;
})()
;})(__56277,switch__54521__auto__,c__54596__auto___56296,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async))
})();
var state__54598__auto__ = (function (){var statearr_54941 = f__54597__auto__();
(statearr_54941[(6)] = c__54596__auto___56296);

return statearr_54941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
});})(__56277,c__54596__auto___56296,G__54891_56278,G__54891_56279__$1,n__5616__auto___56276,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54891_56279__$1)].join('')));

}

var G__56309 = (__56277 + (1));
__56277 = G__56309;
continue;
} else {
}
break;
}

var c__54596__auto___56310 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_54963){
var state_val_54964 = (state_54963[(1)]);
if((state_val_54964 === (7))){
var inst_54959 = (state_54963[(2)]);
var state_54963__$1 = state_54963;
var statearr_54965_56311 = state_54963__$1;
(statearr_54965_56311[(2)] = inst_54959);

(statearr_54965_56311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (1))){
var state_54963__$1 = state_54963;
var statearr_54966_56312 = state_54963__$1;
(statearr_54966_56312[(2)] = null);

(statearr_54966_56312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (4))){
var inst_54944 = (state_54963[(7)]);
var inst_54944__$1 = (state_54963[(2)]);
var inst_54945 = (inst_54944__$1 == null);
var state_54963__$1 = (function (){var statearr_54967 = state_54963;
(statearr_54967[(7)] = inst_54944__$1);

return statearr_54967;
})();
if(cljs.core.truth_(inst_54945)){
var statearr_54968_56313 = state_54963__$1;
(statearr_54968_56313[(1)] = (5));

} else {
var statearr_54969_56314 = state_54963__$1;
(statearr_54969_56314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (6))){
var inst_54944 = (state_54963[(7)]);
var inst_54949 = (state_54963[(8)]);
var inst_54949__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54951 = [inst_54944,inst_54949__$1];
var inst_54952 = (new cljs.core.PersistentVector(null,2,(5),inst_54950,inst_54951,null));
var state_54963__$1 = (function (){var statearr_54970 = state_54963;
(statearr_54970[(8)] = inst_54949__$1);

return statearr_54970;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54963__$1,(8),jobs,inst_54952);
} else {
if((state_val_54964 === (3))){
var inst_54961 = (state_54963[(2)]);
var state_54963__$1 = state_54963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54963__$1,inst_54961);
} else {
if((state_val_54964 === (2))){
var state_54963__$1 = state_54963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54963__$1,(4),from);
} else {
if((state_val_54964 === (9))){
var inst_54956 = (state_54963[(2)]);
var state_54963__$1 = (function (){var statearr_54971 = state_54963;
(statearr_54971[(9)] = inst_54956);

return statearr_54971;
})();
var statearr_54972_56319 = state_54963__$1;
(statearr_54972_56319[(2)] = null);

(statearr_54972_56319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (5))){
var inst_54947 = cljs.core.async.close_BANG_(jobs);
var state_54963__$1 = state_54963;
var statearr_54973_56320 = state_54963__$1;
(statearr_54973_56320[(2)] = inst_54947);

(statearr_54973_56320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54964 === (8))){
var inst_54949 = (state_54963[(8)]);
var inst_54954 = (state_54963[(2)]);
var state_54963__$1 = (function (){var statearr_54974 = state_54963;
(statearr_54974[(10)] = inst_54954);

return statearr_54974;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54963__$1,(9),results,inst_54949);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0 = (function (){
var statearr_54975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__);

(statearr_54975[(1)] = (1));

return statearr_54975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1 = (function (state_54963){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_54963);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e54976){var ex__54525__auto__ = e54976;
var statearr_54977_56321 = state_54963;
(statearr_54977_56321[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_54963[(4)]))){
var statearr_54978_56322 = state_54963;
(statearr_54978_56322[(1)] = cljs.core.first((state_54963[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56323 = state_54963;
state_54963 = G__56323;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = function(state_54963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1.call(this,state_54963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_54979 = f__54597__auto__();
(statearr_54979[(6)] = c__54596__auto___56310);

return statearr_54979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));


var c__54596__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55017){
var state_val_55018 = (state_55017[(1)]);
if((state_val_55018 === (7))){
var inst_55013 = (state_55017[(2)]);
var state_55017__$1 = state_55017;
var statearr_55019_56324 = state_55017__$1;
(statearr_55019_56324[(2)] = inst_55013);

(statearr_55019_56324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (20))){
var state_55017__$1 = state_55017;
var statearr_55020_56325 = state_55017__$1;
(statearr_55020_56325[(2)] = null);

(statearr_55020_56325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (1))){
var state_55017__$1 = state_55017;
var statearr_55021_56326 = state_55017__$1;
(statearr_55021_56326[(2)] = null);

(statearr_55021_56326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (4))){
var inst_54982 = (state_55017[(7)]);
var inst_54982__$1 = (state_55017[(2)]);
var inst_54983 = (inst_54982__$1 == null);
var state_55017__$1 = (function (){var statearr_55022 = state_55017;
(statearr_55022[(7)] = inst_54982__$1);

return statearr_55022;
})();
if(cljs.core.truth_(inst_54983)){
var statearr_55023_56331 = state_55017__$1;
(statearr_55023_56331[(1)] = (5));

} else {
var statearr_55024_56332 = state_55017__$1;
(statearr_55024_56332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (15))){
var inst_54995 = (state_55017[(8)]);
var state_55017__$1 = state_55017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55017__$1,(18),to,inst_54995);
} else {
if((state_val_55018 === (21))){
var inst_55008 = (state_55017[(2)]);
var state_55017__$1 = state_55017;
var statearr_55025_56336 = state_55017__$1;
(statearr_55025_56336[(2)] = inst_55008);

(statearr_55025_56336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (13))){
var inst_55010 = (state_55017[(2)]);
var state_55017__$1 = (function (){var statearr_55026 = state_55017;
(statearr_55026[(9)] = inst_55010);

return statearr_55026;
})();
var statearr_55027_56337 = state_55017__$1;
(statearr_55027_56337[(2)] = null);

(statearr_55027_56337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (6))){
var inst_54982 = (state_55017[(7)]);
var state_55017__$1 = state_55017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55017__$1,(11),inst_54982);
} else {
if((state_val_55018 === (17))){
var inst_55003 = (state_55017[(2)]);
var state_55017__$1 = state_55017;
if(cljs.core.truth_(inst_55003)){
var statearr_55028_56338 = state_55017__$1;
(statearr_55028_56338[(1)] = (19));

} else {
var statearr_55029_56339 = state_55017__$1;
(statearr_55029_56339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (3))){
var inst_55015 = (state_55017[(2)]);
var state_55017__$1 = state_55017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55017__$1,inst_55015);
} else {
if((state_val_55018 === (12))){
var inst_54992 = (state_55017[(10)]);
var state_55017__$1 = state_55017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55017__$1,(14),inst_54992);
} else {
if((state_val_55018 === (2))){
var state_55017__$1 = state_55017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55017__$1,(4),results);
} else {
if((state_val_55018 === (19))){
var state_55017__$1 = state_55017;
var statearr_55030_56341 = state_55017__$1;
(statearr_55030_56341[(2)] = null);

(statearr_55030_56341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (11))){
var inst_54992 = (state_55017[(2)]);
var state_55017__$1 = (function (){var statearr_55031 = state_55017;
(statearr_55031[(10)] = inst_54992);

return statearr_55031;
})();
var statearr_55032_56344 = state_55017__$1;
(statearr_55032_56344[(2)] = null);

(statearr_55032_56344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (9))){
var state_55017__$1 = state_55017;
var statearr_55033_56345 = state_55017__$1;
(statearr_55033_56345[(2)] = null);

(statearr_55033_56345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (5))){
var state_55017__$1 = state_55017;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55034_56346 = state_55017__$1;
(statearr_55034_56346[(1)] = (8));

} else {
var statearr_55035_56347 = state_55017__$1;
(statearr_55035_56347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (14))){
var inst_54995 = (state_55017[(8)]);
var inst_54997 = (state_55017[(11)]);
var inst_54995__$1 = (state_55017[(2)]);
var inst_54996 = (inst_54995__$1 == null);
var inst_54997__$1 = cljs.core.not(inst_54996);
var state_55017__$1 = (function (){var statearr_55036 = state_55017;
(statearr_55036[(8)] = inst_54995__$1);

(statearr_55036[(11)] = inst_54997__$1);

return statearr_55036;
})();
if(inst_54997__$1){
var statearr_55037_56351 = state_55017__$1;
(statearr_55037_56351[(1)] = (15));

} else {
var statearr_55038_56352 = state_55017__$1;
(statearr_55038_56352[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (16))){
var inst_54997 = (state_55017[(11)]);
var state_55017__$1 = state_55017;
var statearr_55039_56353 = state_55017__$1;
(statearr_55039_56353[(2)] = inst_54997);

(statearr_55039_56353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (10))){
var inst_54989 = (state_55017[(2)]);
var state_55017__$1 = state_55017;
var statearr_55040_56354 = state_55017__$1;
(statearr_55040_56354[(2)] = inst_54989);

(statearr_55040_56354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (18))){
var inst_55000 = (state_55017[(2)]);
var state_55017__$1 = state_55017;
var statearr_55041_56355 = state_55017__$1;
(statearr_55041_56355[(2)] = inst_55000);

(statearr_55041_56355[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55018 === (8))){
var inst_54986 = cljs.core.async.close_BANG_(to);
var state_55017__$1 = state_55017;
var statearr_55042_56356 = state_55017__$1;
(statearr_55042_56356[(2)] = inst_54986);

(statearr_55042_56356[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0 = (function (){
var statearr_55043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__);

(statearr_55043[(1)] = (1));

return statearr_55043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1 = (function (state_55017){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55017);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55044){var ex__54525__auto__ = e55044;
var statearr_55045_56360 = state_55017;
(statearr_55045_56360[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55017[(4)]))){
var statearr_55046_56361 = state_55017;
(statearr_55046_56361[(1)] = cljs.core.first((state_55017[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56362 = state_55017;
state_55017 = G__56362;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__ = function(state_55017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1.call(this,state_55017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55047 = f__54597__auto__();
(statearr_55047[(6)] = c__54596__auto__);

return statearr_55047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));

return c__54596__auto__;
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
var G__55049 = arguments.length;
switch (G__55049) {
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
var G__55051 = arguments.length;
switch (G__55051) {
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
var G__55053 = arguments.length;
switch (G__55053) {
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
var c__54596__auto___56366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55079){
var state_val_55080 = (state_55079[(1)]);
if((state_val_55080 === (7))){
var inst_55075 = (state_55079[(2)]);
var state_55079__$1 = state_55079;
var statearr_55081_56367 = state_55079__$1;
(statearr_55081_56367[(2)] = inst_55075);

(statearr_55081_56367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (1))){
var state_55079__$1 = state_55079;
var statearr_55082_56368 = state_55079__$1;
(statearr_55082_56368[(2)] = null);

(statearr_55082_56368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (4))){
var inst_55056 = (state_55079[(7)]);
var inst_55056__$1 = (state_55079[(2)]);
var inst_55057 = (inst_55056__$1 == null);
var state_55079__$1 = (function (){var statearr_55083 = state_55079;
(statearr_55083[(7)] = inst_55056__$1);

return statearr_55083;
})();
if(cljs.core.truth_(inst_55057)){
var statearr_55084_56369 = state_55079__$1;
(statearr_55084_56369[(1)] = (5));

} else {
var statearr_55085_56370 = state_55079__$1;
(statearr_55085_56370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (13))){
var state_55079__$1 = state_55079;
var statearr_55086_56371 = state_55079__$1;
(statearr_55086_56371[(2)] = null);

(statearr_55086_56371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (6))){
var inst_55056 = (state_55079[(7)]);
var inst_55062 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55056) : p.call(null,inst_55056));
var state_55079__$1 = state_55079;
if(cljs.core.truth_(inst_55062)){
var statearr_55087_56372 = state_55079__$1;
(statearr_55087_56372[(1)] = (9));

} else {
var statearr_55088_56373 = state_55079__$1;
(statearr_55088_56373[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (3))){
var inst_55077 = (state_55079[(2)]);
var state_55079__$1 = state_55079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55079__$1,inst_55077);
} else {
if((state_val_55080 === (12))){
var state_55079__$1 = state_55079;
var statearr_55089_56374 = state_55079__$1;
(statearr_55089_56374[(2)] = null);

(statearr_55089_56374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (2))){
var state_55079__$1 = state_55079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55079__$1,(4),ch);
} else {
if((state_val_55080 === (11))){
var inst_55056 = (state_55079[(7)]);
var inst_55066 = (state_55079[(2)]);
var state_55079__$1 = state_55079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55079__$1,(8),inst_55066,inst_55056);
} else {
if((state_val_55080 === (9))){
var state_55079__$1 = state_55079;
var statearr_55090_56375 = state_55079__$1;
(statearr_55090_56375[(2)] = tc);

(statearr_55090_56375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (5))){
var inst_55059 = cljs.core.async.close_BANG_(tc);
var inst_55060 = cljs.core.async.close_BANG_(fc);
var state_55079__$1 = (function (){var statearr_55091 = state_55079;
(statearr_55091[(8)] = inst_55059);

return statearr_55091;
})();
var statearr_55092_56376 = state_55079__$1;
(statearr_55092_56376[(2)] = inst_55060);

(statearr_55092_56376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (14))){
var inst_55073 = (state_55079[(2)]);
var state_55079__$1 = state_55079;
var statearr_55093_56377 = state_55079__$1;
(statearr_55093_56377[(2)] = inst_55073);

(statearr_55093_56377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (10))){
var state_55079__$1 = state_55079;
var statearr_55094_56378 = state_55079__$1;
(statearr_55094_56378[(2)] = fc);

(statearr_55094_56378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55080 === (8))){
var inst_55068 = (state_55079[(2)]);
var state_55079__$1 = state_55079;
if(cljs.core.truth_(inst_55068)){
var statearr_55095_56379 = state_55079__$1;
(statearr_55095_56379[(1)] = (12));

} else {
var statearr_55096_56380 = state_55079__$1;
(statearr_55096_56380[(1)] = (13));

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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_55097 = [null,null,null,null,null,null,null,null,null];
(statearr_55097[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_55097[(1)] = (1));

return statearr_55097;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_55079){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55079);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55098){var ex__54525__auto__ = e55098;
var statearr_55099_56381 = state_55079;
(statearr_55099_56381[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55079[(4)]))){
var statearr_55100_56382 = state_55079;
(statearr_55100_56382[(1)] = cljs.core.first((state_55079[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56383 = state_55079;
state_55079 = G__56383;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_55079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_55079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55101 = f__54597__auto__();
(statearr_55101[(6)] = c__54596__auto___56366);

return statearr_55101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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
var c__54596__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55123){
var state_val_55124 = (state_55123[(1)]);
if((state_val_55124 === (7))){
var inst_55119 = (state_55123[(2)]);
var state_55123__$1 = state_55123;
var statearr_55125_56384 = state_55123__$1;
(statearr_55125_56384[(2)] = inst_55119);

(statearr_55125_56384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55124 === (1))){
var inst_55102 = init;
var inst_55103 = inst_55102;
var state_55123__$1 = (function (){var statearr_55126 = state_55123;
(statearr_55126[(7)] = inst_55103);

return statearr_55126;
})();
var statearr_55127_56385 = state_55123__$1;
(statearr_55127_56385[(2)] = null);

(statearr_55127_56385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55124 === (4))){
var inst_55106 = (state_55123[(8)]);
var inst_55106__$1 = (state_55123[(2)]);
var inst_55107 = (inst_55106__$1 == null);
var state_55123__$1 = (function (){var statearr_55128 = state_55123;
(statearr_55128[(8)] = inst_55106__$1);

return statearr_55128;
})();
if(cljs.core.truth_(inst_55107)){
var statearr_55129_56386 = state_55123__$1;
(statearr_55129_56386[(1)] = (5));

} else {
var statearr_55130_56387 = state_55123__$1;
(statearr_55130_56387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55124 === (6))){
var inst_55103 = (state_55123[(7)]);
var inst_55106 = (state_55123[(8)]);
var inst_55110 = (state_55123[(9)]);
var inst_55110__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_55103,inst_55106) : f.call(null,inst_55103,inst_55106));
var inst_55111 = cljs.core.reduced_QMARK_(inst_55110__$1);
var state_55123__$1 = (function (){var statearr_55131 = state_55123;
(statearr_55131[(9)] = inst_55110__$1);

return statearr_55131;
})();
if(inst_55111){
var statearr_55132_56388 = state_55123__$1;
(statearr_55132_56388[(1)] = (8));

} else {
var statearr_55133_56389 = state_55123__$1;
(statearr_55133_56389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55124 === (3))){
var inst_55121 = (state_55123[(2)]);
var state_55123__$1 = state_55123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55123__$1,inst_55121);
} else {
if((state_val_55124 === (2))){
var state_55123__$1 = state_55123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55123__$1,(4),ch);
} else {
if((state_val_55124 === (9))){
var inst_55110 = (state_55123[(9)]);
var inst_55103 = inst_55110;
var state_55123__$1 = (function (){var statearr_55134 = state_55123;
(statearr_55134[(7)] = inst_55103);

return statearr_55134;
})();
var statearr_55135_56390 = state_55123__$1;
(statearr_55135_56390[(2)] = null);

(statearr_55135_56390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55124 === (5))){
var inst_55103 = (state_55123[(7)]);
var state_55123__$1 = state_55123;
var statearr_55136_56391 = state_55123__$1;
(statearr_55136_56391[(2)] = inst_55103);

(statearr_55136_56391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55124 === (10))){
var inst_55117 = (state_55123[(2)]);
var state_55123__$1 = state_55123;
var statearr_55137_56392 = state_55123__$1;
(statearr_55137_56392[(2)] = inst_55117);

(statearr_55137_56392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55124 === (8))){
var inst_55110 = (state_55123[(9)]);
var inst_55113 = cljs.core.deref(inst_55110);
var state_55123__$1 = state_55123;
var statearr_55138_56393 = state_55123__$1;
(statearr_55138_56393[(2)] = inst_55113);

(statearr_55138_56393[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54522__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54522__auto____0 = (function (){
var statearr_55139 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55139[(0)] = cljs$core$async$reduce_$_state_machine__54522__auto__);

(statearr_55139[(1)] = (1));

return statearr_55139;
});
var cljs$core$async$reduce_$_state_machine__54522__auto____1 = (function (state_55123){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55123);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55140){var ex__54525__auto__ = e55140;
var statearr_55141_56394 = state_55123;
(statearr_55141_56394[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55123[(4)]))){
var statearr_55142_56395 = state_55123;
(statearr_55142_56395[(1)] = cljs.core.first((state_55123[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56396 = state_55123;
state_55123 = G__56396;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54522__auto__ = function(state_55123){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54522__auto____1.call(this,state_55123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54522__auto____0;
cljs$core$async$reduce_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54522__auto____1;
return cljs$core$async$reduce_$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55143 = f__54597__auto__();
(statearr_55143[(6)] = c__54596__auto__);

return statearr_55143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));

return c__54596__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54596__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55149){
var state_val_55150 = (state_55149[(1)]);
if((state_val_55150 === (1))){
var inst_55144 = cljs.core.async.reduce(f__$1,init,ch);
var state_55149__$1 = state_55149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55149__$1,(2),inst_55144);
} else {
if((state_val_55150 === (2))){
var inst_55146 = (state_55149[(2)]);
var inst_55147 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_55146) : f__$1.call(null,inst_55146));
var state_55149__$1 = state_55149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55149__$1,inst_55147);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54522__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54522__auto____0 = (function (){
var statearr_55151 = [null,null,null,null,null,null,null];
(statearr_55151[(0)] = cljs$core$async$transduce_$_state_machine__54522__auto__);

(statearr_55151[(1)] = (1));

return statearr_55151;
});
var cljs$core$async$transduce_$_state_machine__54522__auto____1 = (function (state_55149){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55149);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55152){var ex__54525__auto__ = e55152;
var statearr_55153_56405 = state_55149;
(statearr_55153_56405[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55149[(4)]))){
var statearr_55154_56413 = state_55149;
(statearr_55154_56413[(1)] = cljs.core.first((state_55149[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56424 = state_55149;
state_55149 = G__56424;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54522__auto__ = function(state_55149){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54522__auto____1.call(this,state_55149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54522__auto____0;
cljs$core$async$transduce_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54522__auto____1;
return cljs$core$async$transduce_$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55155 = f__54597__auto__();
(statearr_55155[(6)] = c__54596__auto__);

return statearr_55155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));

return c__54596__auto__;
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
var G__55157 = arguments.length;
switch (G__55157) {
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
var c__54596__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55182){
var state_val_55183 = (state_55182[(1)]);
if((state_val_55183 === (7))){
var inst_55164 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55184_56434 = state_55182__$1;
(statearr_55184_56434[(2)] = inst_55164);

(statearr_55184_56434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (1))){
var inst_55158 = cljs.core.seq(coll);
var inst_55159 = inst_55158;
var state_55182__$1 = (function (){var statearr_55185 = state_55182;
(statearr_55185[(7)] = inst_55159);

return statearr_55185;
})();
var statearr_55186_56435 = state_55182__$1;
(statearr_55186_56435[(2)] = null);

(statearr_55186_56435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (4))){
var inst_55159 = (state_55182[(7)]);
var inst_55162 = cljs.core.first(inst_55159);
var state_55182__$1 = state_55182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55182__$1,(7),ch,inst_55162);
} else {
if((state_val_55183 === (13))){
var inst_55176 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55187_56436 = state_55182__$1;
(statearr_55187_56436[(2)] = inst_55176);

(statearr_55187_56436[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (6))){
var inst_55167 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
if(cljs.core.truth_(inst_55167)){
var statearr_55188_56437 = state_55182__$1;
(statearr_55188_56437[(1)] = (8));

} else {
var statearr_55189_56438 = state_55182__$1;
(statearr_55189_56438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (3))){
var inst_55180 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55182__$1,inst_55180);
} else {
if((state_val_55183 === (12))){
var state_55182__$1 = state_55182;
var statearr_55190_56439 = state_55182__$1;
(statearr_55190_56439[(2)] = null);

(statearr_55190_56439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (2))){
var inst_55159 = (state_55182[(7)]);
var state_55182__$1 = state_55182;
if(cljs.core.truth_(inst_55159)){
var statearr_55191_56440 = state_55182__$1;
(statearr_55191_56440[(1)] = (4));

} else {
var statearr_55192_56441 = state_55182__$1;
(statearr_55192_56441[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (11))){
var inst_55173 = cljs.core.async.close_BANG_(ch);
var state_55182__$1 = state_55182;
var statearr_55193_56442 = state_55182__$1;
(statearr_55193_56442[(2)] = inst_55173);

(statearr_55193_56442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (9))){
var state_55182__$1 = state_55182;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55194_56443 = state_55182__$1;
(statearr_55194_56443[(1)] = (11));

} else {
var statearr_55195_56444 = state_55182__$1;
(statearr_55195_56444[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (5))){
var inst_55159 = (state_55182[(7)]);
var state_55182__$1 = state_55182;
var statearr_55196_56445 = state_55182__$1;
(statearr_55196_56445[(2)] = inst_55159);

(statearr_55196_56445[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (10))){
var inst_55178 = (state_55182[(2)]);
var state_55182__$1 = state_55182;
var statearr_55197_56446 = state_55182__$1;
(statearr_55197_56446[(2)] = inst_55178);

(statearr_55197_56446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55183 === (8))){
var inst_55159 = (state_55182[(7)]);
var inst_55169 = cljs.core.next(inst_55159);
var inst_55159__$1 = inst_55169;
var state_55182__$1 = (function (){var statearr_55198 = state_55182;
(statearr_55198[(7)] = inst_55159__$1);

return statearr_55198;
})();
var statearr_55199_56447 = state_55182__$1;
(statearr_55199_56447[(2)] = null);

(statearr_55199_56447[(1)] = (2));


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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_55200 = [null,null,null,null,null,null,null,null];
(statearr_55200[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_55200[(1)] = (1));

return statearr_55200;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_55182){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55182);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55201){var ex__54525__auto__ = e55201;
var statearr_55202_56448 = state_55182;
(statearr_55202_56448[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55182[(4)]))){
var statearr_55203_56449 = state_55182;
(statearr_55203_56449[(1)] = cljs.core.first((state_55182[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56450 = state_55182;
state_55182 = G__56450;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_55182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_55182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55204 = f__54597__auto__();
(statearr_55204[(6)] = c__54596__auto__);

return statearr_55204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));

return c__54596__auto__;
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
var G__55206 = arguments.length;
switch (G__55206) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_56452 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_56452(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56453 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_56453(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56454 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_56454(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56455 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_56455(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55207 = (function (ch,cs,meta55208){
this.ch = ch;
this.cs = cs;
this.meta55208 = meta55208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55209,meta55208__$1){
var self__ = this;
var _55209__$1 = this;
return (new cljs.core.async.t_cljs$core$async55207(self__.ch,self__.cs,meta55208__$1));
}));

(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55209){
var self__ = this;
var _55209__$1 = this;
return self__.meta55208;
}));

(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async55207.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async55207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55208","meta55208",770622307,null)], null);
}));

(cljs.core.async.t_cljs$core$async55207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55207");

(cljs.core.async.t_cljs$core$async55207.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55207.
 */
cljs.core.async.__GT_t_cljs$core$async55207 = (function cljs$core$async$__GT_t_cljs$core$async55207(ch,cs,meta55208){
return (new cljs.core.async.t_cljs$core$async55207(ch,cs,meta55208));
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
var m = (new cljs.core.async.t_cljs$core$async55207(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54596__auto___56457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55342){
var state_val_55343 = (state_55342[(1)]);
if((state_val_55343 === (7))){
var inst_55338 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55344_56458 = state_55342__$1;
(statearr_55344_56458[(2)] = inst_55338);

(statearr_55344_56458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (20))){
var inst_55243 = (state_55342[(7)]);
var inst_55255 = cljs.core.first(inst_55243);
var inst_55256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55255,(0),null);
var inst_55257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55255,(1),null);
var state_55342__$1 = (function (){var statearr_55345 = state_55342;
(statearr_55345[(8)] = inst_55256);

return statearr_55345;
})();
if(cljs.core.truth_(inst_55257)){
var statearr_55346_56459 = state_55342__$1;
(statearr_55346_56459[(1)] = (22));

} else {
var statearr_55347_56460 = state_55342__$1;
(statearr_55347_56460[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (27))){
var inst_55285 = (state_55342[(9)]);
var inst_55287 = (state_55342[(10)]);
var inst_55292 = (state_55342[(11)]);
var inst_55212 = (state_55342[(12)]);
var inst_55292__$1 = cljs.core._nth(inst_55285,inst_55287);
var inst_55293 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55292__$1,inst_55212,done);
var state_55342__$1 = (function (){var statearr_55348 = state_55342;
(statearr_55348[(11)] = inst_55292__$1);

return statearr_55348;
})();
if(cljs.core.truth_(inst_55293)){
var statearr_55349_56462 = state_55342__$1;
(statearr_55349_56462[(1)] = (30));

} else {
var statearr_55350_56463 = state_55342__$1;
(statearr_55350_56463[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (1))){
var state_55342__$1 = state_55342;
var statearr_55351_56464 = state_55342__$1;
(statearr_55351_56464[(2)] = null);

(statearr_55351_56464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (24))){
var inst_55243 = (state_55342[(7)]);
var inst_55262 = (state_55342[(2)]);
var inst_55263 = cljs.core.next(inst_55243);
var inst_55221 = inst_55263;
var inst_55222 = null;
var inst_55223 = (0);
var inst_55224 = (0);
var state_55342__$1 = (function (){var statearr_55352 = state_55342;
(statearr_55352[(13)] = inst_55262);

(statearr_55352[(14)] = inst_55221);

(statearr_55352[(15)] = inst_55222);

(statearr_55352[(16)] = inst_55223);

(statearr_55352[(17)] = inst_55224);

return statearr_55352;
})();
var statearr_55353_56465 = state_55342__$1;
(statearr_55353_56465[(2)] = null);

(statearr_55353_56465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (39))){
var state_55342__$1 = state_55342;
var statearr_55357_56466 = state_55342__$1;
(statearr_55357_56466[(2)] = null);

(statearr_55357_56466[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (4))){
var inst_55212 = (state_55342[(12)]);
var inst_55212__$1 = (state_55342[(2)]);
var inst_55213 = (inst_55212__$1 == null);
var state_55342__$1 = (function (){var statearr_55358 = state_55342;
(statearr_55358[(12)] = inst_55212__$1);

return statearr_55358;
})();
if(cljs.core.truth_(inst_55213)){
var statearr_55359_56467 = state_55342__$1;
(statearr_55359_56467[(1)] = (5));

} else {
var statearr_55360_56468 = state_55342__$1;
(statearr_55360_56468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (15))){
var inst_55224 = (state_55342[(17)]);
var inst_55221 = (state_55342[(14)]);
var inst_55222 = (state_55342[(15)]);
var inst_55223 = (state_55342[(16)]);
var inst_55239 = (state_55342[(2)]);
var inst_55240 = (inst_55224 + (1));
var tmp55354 = inst_55221;
var tmp55355 = inst_55222;
var tmp55356 = inst_55223;
var inst_55221__$1 = tmp55354;
var inst_55222__$1 = tmp55355;
var inst_55223__$1 = tmp55356;
var inst_55224__$1 = inst_55240;
var state_55342__$1 = (function (){var statearr_55361 = state_55342;
(statearr_55361[(18)] = inst_55239);

(statearr_55361[(14)] = inst_55221__$1);

(statearr_55361[(15)] = inst_55222__$1);

(statearr_55361[(16)] = inst_55223__$1);

(statearr_55361[(17)] = inst_55224__$1);

return statearr_55361;
})();
var statearr_55362_56469 = state_55342__$1;
(statearr_55362_56469[(2)] = null);

(statearr_55362_56469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (21))){
var inst_55266 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55366_56470 = state_55342__$1;
(statearr_55366_56470[(2)] = inst_55266);

(statearr_55366_56470[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (31))){
var inst_55292 = (state_55342[(11)]);
var inst_55296 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55292);
var state_55342__$1 = state_55342;
var statearr_55367_56471 = state_55342__$1;
(statearr_55367_56471[(2)] = inst_55296);

(statearr_55367_56471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (32))){
var inst_55287 = (state_55342[(10)]);
var inst_55284 = (state_55342[(19)]);
var inst_55285 = (state_55342[(9)]);
var inst_55286 = (state_55342[(20)]);
var inst_55298 = (state_55342[(2)]);
var inst_55299 = (inst_55287 + (1));
var tmp55363 = inst_55285;
var tmp55364 = inst_55286;
var tmp55365 = inst_55284;
var inst_55284__$1 = tmp55365;
var inst_55285__$1 = tmp55363;
var inst_55286__$1 = tmp55364;
var inst_55287__$1 = inst_55299;
var state_55342__$1 = (function (){var statearr_55368 = state_55342;
(statearr_55368[(21)] = inst_55298);

(statearr_55368[(19)] = inst_55284__$1);

(statearr_55368[(9)] = inst_55285__$1);

(statearr_55368[(20)] = inst_55286__$1);

(statearr_55368[(10)] = inst_55287__$1);

return statearr_55368;
})();
var statearr_55369_56476 = state_55342__$1;
(statearr_55369_56476[(2)] = null);

(statearr_55369_56476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (40))){
var inst_55311 = (state_55342[(22)]);
var inst_55315 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55311);
var state_55342__$1 = state_55342;
var statearr_55370_56478 = state_55342__$1;
(statearr_55370_56478[(2)] = inst_55315);

(statearr_55370_56478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (33))){
var inst_55302 = (state_55342[(23)]);
var inst_55304 = cljs.core.chunked_seq_QMARK_(inst_55302);
var state_55342__$1 = state_55342;
if(inst_55304){
var statearr_55371_56482 = state_55342__$1;
(statearr_55371_56482[(1)] = (36));

} else {
var statearr_55372_56483 = state_55342__$1;
(statearr_55372_56483[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (13))){
var inst_55233 = (state_55342[(24)]);
var inst_55236 = cljs.core.async.close_BANG_(inst_55233);
var state_55342__$1 = state_55342;
var statearr_55373_56484 = state_55342__$1;
(statearr_55373_56484[(2)] = inst_55236);

(statearr_55373_56484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (22))){
var inst_55256 = (state_55342[(8)]);
var inst_55259 = cljs.core.async.close_BANG_(inst_55256);
var state_55342__$1 = state_55342;
var statearr_55374_56486 = state_55342__$1;
(statearr_55374_56486[(2)] = inst_55259);

(statearr_55374_56486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (36))){
var inst_55302 = (state_55342[(23)]);
var inst_55306 = cljs.core.chunk_first(inst_55302);
var inst_55307 = cljs.core.chunk_rest(inst_55302);
var inst_55308 = cljs.core.count(inst_55306);
var inst_55284 = inst_55307;
var inst_55285 = inst_55306;
var inst_55286 = inst_55308;
var inst_55287 = (0);
var state_55342__$1 = (function (){var statearr_55375 = state_55342;
(statearr_55375[(19)] = inst_55284);

(statearr_55375[(9)] = inst_55285);

(statearr_55375[(20)] = inst_55286);

(statearr_55375[(10)] = inst_55287);

return statearr_55375;
})();
var statearr_55376_56490 = state_55342__$1;
(statearr_55376_56490[(2)] = null);

(statearr_55376_56490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (41))){
var inst_55302 = (state_55342[(23)]);
var inst_55317 = (state_55342[(2)]);
var inst_55318 = cljs.core.next(inst_55302);
var inst_55284 = inst_55318;
var inst_55285 = null;
var inst_55286 = (0);
var inst_55287 = (0);
var state_55342__$1 = (function (){var statearr_55377 = state_55342;
(statearr_55377[(25)] = inst_55317);

(statearr_55377[(19)] = inst_55284);

(statearr_55377[(9)] = inst_55285);

(statearr_55377[(20)] = inst_55286);

(statearr_55377[(10)] = inst_55287);

return statearr_55377;
})();
var statearr_55378_56491 = state_55342__$1;
(statearr_55378_56491[(2)] = null);

(statearr_55378_56491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (43))){
var state_55342__$1 = state_55342;
var statearr_55379_56492 = state_55342__$1;
(statearr_55379_56492[(2)] = null);

(statearr_55379_56492[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (29))){
var inst_55326 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55380_56493 = state_55342__$1;
(statearr_55380_56493[(2)] = inst_55326);

(statearr_55380_56493[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (44))){
var inst_55335 = (state_55342[(2)]);
var state_55342__$1 = (function (){var statearr_55381 = state_55342;
(statearr_55381[(26)] = inst_55335);

return statearr_55381;
})();
var statearr_55382_56494 = state_55342__$1;
(statearr_55382_56494[(2)] = null);

(statearr_55382_56494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (6))){
var inst_55276 = (state_55342[(27)]);
var inst_55275 = cljs.core.deref(cs);
var inst_55276__$1 = cljs.core.keys(inst_55275);
var inst_55277 = cljs.core.count(inst_55276__$1);
var inst_55278 = cljs.core.reset_BANG_(dctr,inst_55277);
var inst_55283 = cljs.core.seq(inst_55276__$1);
var inst_55284 = inst_55283;
var inst_55285 = null;
var inst_55286 = (0);
var inst_55287 = (0);
var state_55342__$1 = (function (){var statearr_55383 = state_55342;
(statearr_55383[(27)] = inst_55276__$1);

(statearr_55383[(28)] = inst_55278);

(statearr_55383[(19)] = inst_55284);

(statearr_55383[(9)] = inst_55285);

(statearr_55383[(20)] = inst_55286);

(statearr_55383[(10)] = inst_55287);

return statearr_55383;
})();
var statearr_55384_56499 = state_55342__$1;
(statearr_55384_56499[(2)] = null);

(statearr_55384_56499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (28))){
var inst_55284 = (state_55342[(19)]);
var inst_55302 = (state_55342[(23)]);
var inst_55302__$1 = cljs.core.seq(inst_55284);
var state_55342__$1 = (function (){var statearr_55385 = state_55342;
(statearr_55385[(23)] = inst_55302__$1);

return statearr_55385;
})();
if(inst_55302__$1){
var statearr_55386_56504 = state_55342__$1;
(statearr_55386_56504[(1)] = (33));

} else {
var statearr_55387_56505 = state_55342__$1;
(statearr_55387_56505[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (25))){
var inst_55287 = (state_55342[(10)]);
var inst_55286 = (state_55342[(20)]);
var inst_55289 = (inst_55287 < inst_55286);
var inst_55290 = inst_55289;
var state_55342__$1 = state_55342;
if(cljs.core.truth_(inst_55290)){
var statearr_55388_56506 = state_55342__$1;
(statearr_55388_56506[(1)] = (27));

} else {
var statearr_55389_56507 = state_55342__$1;
(statearr_55389_56507[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (34))){
var state_55342__$1 = state_55342;
var statearr_55390_56509 = state_55342__$1;
(statearr_55390_56509[(2)] = null);

(statearr_55390_56509[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (17))){
var state_55342__$1 = state_55342;
var statearr_55391_56510 = state_55342__$1;
(statearr_55391_56510[(2)] = null);

(statearr_55391_56510[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (3))){
var inst_55340 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55342__$1,inst_55340);
} else {
if((state_val_55343 === (12))){
var inst_55271 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55392_56512 = state_55342__$1;
(statearr_55392_56512[(2)] = inst_55271);

(statearr_55392_56512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (2))){
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55342__$1,(4),ch);
} else {
if((state_val_55343 === (23))){
var state_55342__$1 = state_55342;
var statearr_55393_56517 = state_55342__$1;
(statearr_55393_56517[(2)] = null);

(statearr_55393_56517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (35))){
var inst_55324 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55394_56518 = state_55342__$1;
(statearr_55394_56518[(2)] = inst_55324);

(statearr_55394_56518[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (19))){
var inst_55243 = (state_55342[(7)]);
var inst_55247 = cljs.core.chunk_first(inst_55243);
var inst_55248 = cljs.core.chunk_rest(inst_55243);
var inst_55249 = cljs.core.count(inst_55247);
var inst_55221 = inst_55248;
var inst_55222 = inst_55247;
var inst_55223 = inst_55249;
var inst_55224 = (0);
var state_55342__$1 = (function (){var statearr_55395 = state_55342;
(statearr_55395[(14)] = inst_55221);

(statearr_55395[(15)] = inst_55222);

(statearr_55395[(16)] = inst_55223);

(statearr_55395[(17)] = inst_55224);

return statearr_55395;
})();
var statearr_55396_56519 = state_55342__$1;
(statearr_55396_56519[(2)] = null);

(statearr_55396_56519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (11))){
var inst_55221 = (state_55342[(14)]);
var inst_55243 = (state_55342[(7)]);
var inst_55243__$1 = cljs.core.seq(inst_55221);
var state_55342__$1 = (function (){var statearr_55397 = state_55342;
(statearr_55397[(7)] = inst_55243__$1);

return statearr_55397;
})();
if(inst_55243__$1){
var statearr_55398_56520 = state_55342__$1;
(statearr_55398_56520[(1)] = (16));

} else {
var statearr_55399_56521 = state_55342__$1;
(statearr_55399_56521[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (9))){
var inst_55273 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55400_56522 = state_55342__$1;
(statearr_55400_56522[(2)] = inst_55273);

(statearr_55400_56522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (5))){
var inst_55219 = cljs.core.deref(cs);
var inst_55220 = cljs.core.seq(inst_55219);
var inst_55221 = inst_55220;
var inst_55222 = null;
var inst_55223 = (0);
var inst_55224 = (0);
var state_55342__$1 = (function (){var statearr_55401 = state_55342;
(statearr_55401[(14)] = inst_55221);

(statearr_55401[(15)] = inst_55222);

(statearr_55401[(16)] = inst_55223);

(statearr_55401[(17)] = inst_55224);

return statearr_55401;
})();
var statearr_55402_56523 = state_55342__$1;
(statearr_55402_56523[(2)] = null);

(statearr_55402_56523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (14))){
var state_55342__$1 = state_55342;
var statearr_55403_56524 = state_55342__$1;
(statearr_55403_56524[(2)] = null);

(statearr_55403_56524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (45))){
var inst_55332 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55404_56525 = state_55342__$1;
(statearr_55404_56525[(2)] = inst_55332);

(statearr_55404_56525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (26))){
var inst_55276 = (state_55342[(27)]);
var inst_55328 = (state_55342[(2)]);
var inst_55329 = cljs.core.seq(inst_55276);
var state_55342__$1 = (function (){var statearr_55405 = state_55342;
(statearr_55405[(29)] = inst_55328);

return statearr_55405;
})();
if(inst_55329){
var statearr_55406_56526 = state_55342__$1;
(statearr_55406_56526[(1)] = (42));

} else {
var statearr_55407_56527 = state_55342__$1;
(statearr_55407_56527[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (16))){
var inst_55243 = (state_55342[(7)]);
var inst_55245 = cljs.core.chunked_seq_QMARK_(inst_55243);
var state_55342__$1 = state_55342;
if(inst_55245){
var statearr_55408_56529 = state_55342__$1;
(statearr_55408_56529[(1)] = (19));

} else {
var statearr_55409_56533 = state_55342__$1;
(statearr_55409_56533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (38))){
var inst_55321 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55410_56534 = state_55342__$1;
(statearr_55410_56534[(2)] = inst_55321);

(statearr_55410_56534[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (30))){
var state_55342__$1 = state_55342;
var statearr_55411_56535 = state_55342__$1;
(statearr_55411_56535[(2)] = null);

(statearr_55411_56535[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (10))){
var inst_55222 = (state_55342[(15)]);
var inst_55224 = (state_55342[(17)]);
var inst_55232 = cljs.core._nth(inst_55222,inst_55224);
var inst_55233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55232,(0),null);
var inst_55234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55232,(1),null);
var state_55342__$1 = (function (){var statearr_55412 = state_55342;
(statearr_55412[(24)] = inst_55233);

return statearr_55412;
})();
if(cljs.core.truth_(inst_55234)){
var statearr_55413_56537 = state_55342__$1;
(statearr_55413_56537[(1)] = (13));

} else {
var statearr_55414_56541 = state_55342__$1;
(statearr_55414_56541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (18))){
var inst_55269 = (state_55342[(2)]);
var state_55342__$1 = state_55342;
var statearr_55415_56542 = state_55342__$1;
(statearr_55415_56542[(2)] = inst_55269);

(statearr_55415_56542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (42))){
var state_55342__$1 = state_55342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55342__$1,(45),dchan);
} else {
if((state_val_55343 === (37))){
var inst_55302 = (state_55342[(23)]);
var inst_55311 = (state_55342[(22)]);
var inst_55212 = (state_55342[(12)]);
var inst_55311__$1 = cljs.core.first(inst_55302);
var inst_55312 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55311__$1,inst_55212,done);
var state_55342__$1 = (function (){var statearr_55416 = state_55342;
(statearr_55416[(22)] = inst_55311__$1);

return statearr_55416;
})();
if(cljs.core.truth_(inst_55312)){
var statearr_55417_56547 = state_55342__$1;
(statearr_55417_56547[(1)] = (39));

} else {
var statearr_55418_56548 = state_55342__$1;
(statearr_55418_56548[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55343 === (8))){
var inst_55224 = (state_55342[(17)]);
var inst_55223 = (state_55342[(16)]);
var inst_55226 = (inst_55224 < inst_55223);
var inst_55227 = inst_55226;
var state_55342__$1 = state_55342;
if(cljs.core.truth_(inst_55227)){
var statearr_55419_56549 = state_55342__$1;
(statearr_55419_56549[(1)] = (10));

} else {
var statearr_55420_56550 = state_55342__$1;
(statearr_55420_56550[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54522__auto__ = null;
var cljs$core$async$mult_$_state_machine__54522__auto____0 = (function (){
var statearr_55421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55421[(0)] = cljs$core$async$mult_$_state_machine__54522__auto__);

(statearr_55421[(1)] = (1));

return statearr_55421;
});
var cljs$core$async$mult_$_state_machine__54522__auto____1 = (function (state_55342){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55342);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55422){var ex__54525__auto__ = e55422;
var statearr_55423_56556 = state_55342;
(statearr_55423_56556[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55342[(4)]))){
var statearr_55424_56557 = state_55342;
(statearr_55424_56557[(1)] = cljs.core.first((state_55342[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56558 = state_55342;
state_55342 = G__56558;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54522__auto__ = function(state_55342){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54522__auto____1.call(this,state_55342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54522__auto____0;
cljs$core$async$mult_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54522__auto____1;
return cljs$core$async$mult_$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55425 = f__54597__auto__();
(statearr_55425[(6)] = c__54596__auto___56457);

return statearr_55425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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
var G__55427 = arguments.length;
switch (G__55427) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56568 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56568(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56569 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56569(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56570 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56570(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56572 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56572(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56576 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56576(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56578 = arguments.length;
var i__5750__auto___56582 = (0);
while(true){
if((i__5750__auto___56582 < len__5749__auto___56578)){
args__5755__auto__.push((arguments[i__5750__auto___56582]));

var G__56583 = (i__5750__auto___56582 + (1));
i__5750__auto___56582 = G__56583;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55432){
var map__55433 = p__55432;
var map__55433__$1 = cljs.core.__destructure_map(map__55433);
var opts = map__55433__$1;
var statearr_55434_56587 = state;
(statearr_55434_56587[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55435_56588 = state;
(statearr_55435_56588[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_55436_56591 = state;
(statearr_55436_56591[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55428){
var G__55429 = cljs.core.first(seq55428);
var seq55428__$1 = cljs.core.next(seq55428);
var G__55430 = cljs.core.first(seq55428__$1);
var seq55428__$2 = cljs.core.next(seq55428__$1);
var G__55431 = cljs.core.first(seq55428__$2);
var seq55428__$3 = cljs.core.next(seq55428__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55429,G__55430,G__55431,seq55428__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55437 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55438){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55438 = meta55438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55439,meta55438__$1){
var self__ = this;
var _55439__$1 = this;
return (new cljs.core.async.t_cljs$core$async55437(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55438__$1));
}));

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55439){
var self__ = this;
var _55439__$1 = this;
return self__.meta55438;
}));

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55437.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55438","meta55438",-1790170542,null)], null);
}));

(cljs.core.async.t_cljs$core$async55437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55437");

(cljs.core.async.t_cljs$core$async55437.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55437.
 */
cljs.core.async.__GT_t_cljs$core$async55437 = (function cljs$core$async$__GT_t_cljs$core$async55437(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55438){
return (new cljs.core.async.t_cljs$core$async55437(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55438));
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
var m = (new cljs.core.async.t_cljs$core$async55437(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__54596__auto___56611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55507){
var state_val_55508 = (state_55507[(1)]);
if((state_val_55508 === (7))){
var inst_55467 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
if(cljs.core.truth_(inst_55467)){
var statearr_55509_56613 = state_55507__$1;
(statearr_55509_56613[(1)] = (8));

} else {
var statearr_55510_56614 = state_55507__$1;
(statearr_55510_56614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (20))){
var inst_55460 = (state_55507[(7)]);
var state_55507__$1 = state_55507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55507__$1,(23),out,inst_55460);
} else {
if((state_val_55508 === (1))){
var inst_55443 = calc_state();
var inst_55444 = cljs.core.__destructure_map(inst_55443);
var inst_55445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55444,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55444,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55444,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55448 = inst_55443;
var state_55507__$1 = (function (){var statearr_55511 = state_55507;
(statearr_55511[(8)] = inst_55445);

(statearr_55511[(9)] = inst_55446);

(statearr_55511[(10)] = inst_55447);

(statearr_55511[(11)] = inst_55448);

return statearr_55511;
})();
var statearr_55512_56616 = state_55507__$1;
(statearr_55512_56616[(2)] = null);

(statearr_55512_56616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (24))){
var inst_55451 = (state_55507[(12)]);
var inst_55448 = inst_55451;
var state_55507__$1 = (function (){var statearr_55513 = state_55507;
(statearr_55513[(11)] = inst_55448);

return statearr_55513;
})();
var statearr_55514_56617 = state_55507__$1;
(statearr_55514_56617[(2)] = null);

(statearr_55514_56617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (4))){
var inst_55460 = (state_55507[(7)]);
var inst_55462 = (state_55507[(13)]);
var inst_55459 = (state_55507[(2)]);
var inst_55460__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55459,(0),null);
var inst_55461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55459,(1),null);
var inst_55462__$1 = (inst_55460__$1 == null);
var state_55507__$1 = (function (){var statearr_55515 = state_55507;
(statearr_55515[(7)] = inst_55460__$1);

(statearr_55515[(14)] = inst_55461);

(statearr_55515[(13)] = inst_55462__$1);

return statearr_55515;
})();
if(cljs.core.truth_(inst_55462__$1)){
var statearr_55516_56618 = state_55507__$1;
(statearr_55516_56618[(1)] = (5));

} else {
var statearr_55517_56619 = state_55507__$1;
(statearr_55517_56619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (15))){
var inst_55452 = (state_55507[(15)]);
var inst_55481 = (state_55507[(16)]);
var inst_55481__$1 = cljs.core.empty_QMARK_(inst_55452);
var state_55507__$1 = (function (){var statearr_55518 = state_55507;
(statearr_55518[(16)] = inst_55481__$1);

return statearr_55518;
})();
if(inst_55481__$1){
var statearr_55519_56624 = state_55507__$1;
(statearr_55519_56624[(1)] = (17));

} else {
var statearr_55520_56625 = state_55507__$1;
(statearr_55520_56625[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (21))){
var inst_55451 = (state_55507[(12)]);
var inst_55448 = inst_55451;
var state_55507__$1 = (function (){var statearr_55521 = state_55507;
(statearr_55521[(11)] = inst_55448);

return statearr_55521;
})();
var statearr_55522_56626 = state_55507__$1;
(statearr_55522_56626[(2)] = null);

(statearr_55522_56626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (13))){
var inst_55474 = (state_55507[(2)]);
var inst_55475 = calc_state();
var inst_55448 = inst_55475;
var state_55507__$1 = (function (){var statearr_55523 = state_55507;
(statearr_55523[(17)] = inst_55474);

(statearr_55523[(11)] = inst_55448);

return statearr_55523;
})();
var statearr_55524_56627 = state_55507__$1;
(statearr_55524_56627[(2)] = null);

(statearr_55524_56627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (22))){
var inst_55501 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55525_56628 = state_55507__$1;
(statearr_55525_56628[(2)] = inst_55501);

(statearr_55525_56628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (6))){
var inst_55461 = (state_55507[(14)]);
var inst_55465 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55461,change);
var state_55507__$1 = state_55507;
var statearr_55526_56629 = state_55507__$1;
(statearr_55526_56629[(2)] = inst_55465);

(statearr_55526_56629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (25))){
var state_55507__$1 = state_55507;
var statearr_55527_56630 = state_55507__$1;
(statearr_55527_56630[(2)] = null);

(statearr_55527_56630[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (17))){
var inst_55453 = (state_55507[(18)]);
var inst_55461 = (state_55507[(14)]);
var inst_55483 = (inst_55453.cljs$core$IFn$_invoke$arity$1 ? inst_55453.cljs$core$IFn$_invoke$arity$1(inst_55461) : inst_55453.call(null,inst_55461));
var inst_55484 = cljs.core.not(inst_55483);
var state_55507__$1 = state_55507;
var statearr_55528_56631 = state_55507__$1;
(statearr_55528_56631[(2)] = inst_55484);

(statearr_55528_56631[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (3))){
var inst_55505 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55507__$1,inst_55505);
} else {
if((state_val_55508 === (12))){
var state_55507__$1 = state_55507;
var statearr_55529_56632 = state_55507__$1;
(statearr_55529_56632[(2)] = null);

(statearr_55529_56632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (2))){
var inst_55448 = (state_55507[(11)]);
var inst_55451 = (state_55507[(12)]);
var inst_55451__$1 = cljs.core.__destructure_map(inst_55448);
var inst_55452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55451__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55451__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55451__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55507__$1 = (function (){var statearr_55530 = state_55507;
(statearr_55530[(12)] = inst_55451__$1);

(statearr_55530[(15)] = inst_55452);

(statearr_55530[(18)] = inst_55453);

return statearr_55530;
})();
return cljs.core.async.ioc_alts_BANG_(state_55507__$1,(4),inst_55454);
} else {
if((state_val_55508 === (23))){
var inst_55492 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
if(cljs.core.truth_(inst_55492)){
var statearr_55531_56633 = state_55507__$1;
(statearr_55531_56633[(1)] = (24));

} else {
var statearr_55532_56634 = state_55507__$1;
(statearr_55532_56634[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (19))){
var inst_55487 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55533_56635 = state_55507__$1;
(statearr_55533_56635[(2)] = inst_55487);

(statearr_55533_56635[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (11))){
var inst_55461 = (state_55507[(14)]);
var inst_55471 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55461);
var state_55507__$1 = state_55507;
var statearr_55534_56636 = state_55507__$1;
(statearr_55534_56636[(2)] = inst_55471);

(statearr_55534_56636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (9))){
var inst_55452 = (state_55507[(15)]);
var inst_55461 = (state_55507[(14)]);
var inst_55478 = (state_55507[(19)]);
var inst_55478__$1 = (inst_55452.cljs$core$IFn$_invoke$arity$1 ? inst_55452.cljs$core$IFn$_invoke$arity$1(inst_55461) : inst_55452.call(null,inst_55461));
var state_55507__$1 = (function (){var statearr_55535 = state_55507;
(statearr_55535[(19)] = inst_55478__$1);

return statearr_55535;
})();
if(cljs.core.truth_(inst_55478__$1)){
var statearr_55536_56637 = state_55507__$1;
(statearr_55536_56637[(1)] = (14));

} else {
var statearr_55537_56638 = state_55507__$1;
(statearr_55537_56638[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (5))){
var inst_55462 = (state_55507[(13)]);
var state_55507__$1 = state_55507;
var statearr_55538_56639 = state_55507__$1;
(statearr_55538_56639[(2)] = inst_55462);

(statearr_55538_56639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (14))){
var inst_55478 = (state_55507[(19)]);
var state_55507__$1 = state_55507;
var statearr_55539_56640 = state_55507__$1;
(statearr_55539_56640[(2)] = inst_55478);

(statearr_55539_56640[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (26))){
var inst_55497 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55540_56641 = state_55507__$1;
(statearr_55540_56641[(2)] = inst_55497);

(statearr_55540_56641[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (16))){
var inst_55489 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
if(cljs.core.truth_(inst_55489)){
var statearr_55541_56642 = state_55507__$1;
(statearr_55541_56642[(1)] = (20));

} else {
var statearr_55542_56643 = state_55507__$1;
(statearr_55542_56643[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (10))){
var inst_55503 = (state_55507[(2)]);
var state_55507__$1 = state_55507;
var statearr_55543_56644 = state_55507__$1;
(statearr_55543_56644[(2)] = inst_55503);

(statearr_55543_56644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (18))){
var inst_55481 = (state_55507[(16)]);
var state_55507__$1 = state_55507;
var statearr_55544_56645 = state_55507__$1;
(statearr_55544_56645[(2)] = inst_55481);

(statearr_55544_56645[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55508 === (8))){
var inst_55460 = (state_55507[(7)]);
var inst_55469 = (inst_55460 == null);
var state_55507__$1 = state_55507;
if(cljs.core.truth_(inst_55469)){
var statearr_55545_56646 = state_55507__$1;
(statearr_55545_56646[(1)] = (11));

} else {
var statearr_55546_56647 = state_55507__$1;
(statearr_55546_56647[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54522__auto__ = null;
var cljs$core$async$mix_$_state_machine__54522__auto____0 = (function (){
var statearr_55547 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55547[(0)] = cljs$core$async$mix_$_state_machine__54522__auto__);

(statearr_55547[(1)] = (1));

return statearr_55547;
});
var cljs$core$async$mix_$_state_machine__54522__auto____1 = (function (state_55507){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55507);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55548){var ex__54525__auto__ = e55548;
var statearr_55549_56649 = state_55507;
(statearr_55549_56649[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55507[(4)]))){
var statearr_55550_56650 = state_55507;
(statearr_55550_56650[(1)] = cljs.core.first((state_55507[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56652 = state_55507;
state_55507 = G__56652;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54522__auto__ = function(state_55507){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54522__auto____1.call(this,state_55507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54522__auto____0;
cljs$core$async$mix_$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54522__auto____1;
return cljs$core$async$mix_$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55551 = f__54597__auto__();
(statearr_55551[(6)] = c__54596__auto___56611);

return statearr_55551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56653 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56653(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56656 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56656(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56657 = (function() {
var G__56658 = null;
var G__56658__1 = (function (p){
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
var G__56658__2 = (function (p,v){
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
G__56658 = function(p,v){
switch(arguments.length){
case 1:
return G__56658__1.call(this,p);
case 2:
return G__56658__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56658.cljs$core$IFn$_invoke$arity$1 = G__56658__1;
G__56658.cljs$core$IFn$_invoke$arity$2 = G__56658__2;
return G__56658;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55553 = arguments.length;
switch (G__55553) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56657(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56657(p,v);
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
cljs.core.async.t_cljs$core$async55557 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55558){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55558 = meta55558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55559,meta55558__$1){
var self__ = this;
var _55559__$1 = this;
return (new cljs.core.async.t_cljs$core$async55557(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55558__$1));
}));

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55559){
var self__ = this;
var _55559__$1 = this;
return self__.meta55558;
}));

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55558","meta55558",689400501,null)], null);
}));

(cljs.core.async.t_cljs$core$async55557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55557");

(cljs.core.async.t_cljs$core$async55557.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55557.
 */
cljs.core.async.__GT_t_cljs$core$async55557 = (function cljs$core$async$__GT_t_cljs$core$async55557(ch,topic_fn,buf_fn,mults,ensure_mult,meta55558){
return (new cljs.core.async.t_cljs$core$async55557(ch,topic_fn,buf_fn,mults,ensure_mult,meta55558));
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
var G__55556 = arguments.length;
switch (G__55556) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55554_SHARP_){
if(cljs.core.truth_((p1__55554_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55554_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55554_SHARP_.call(null,topic)))){
return p1__55554_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55554_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async55557(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__54596__auto___56666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55631){
var state_val_55632 = (state_55631[(1)]);
if((state_val_55632 === (7))){
var inst_55627 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
var statearr_55633_56667 = state_55631__$1;
(statearr_55633_56667[(2)] = inst_55627);

(statearr_55633_56667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (20))){
var state_55631__$1 = state_55631;
var statearr_55634_56668 = state_55631__$1;
(statearr_55634_56668[(2)] = null);

(statearr_55634_56668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (1))){
var state_55631__$1 = state_55631;
var statearr_55635_56669 = state_55631__$1;
(statearr_55635_56669[(2)] = null);

(statearr_55635_56669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (24))){
var inst_55610 = (state_55631[(7)]);
var inst_55619 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55610);
var state_55631__$1 = state_55631;
var statearr_55636_56670 = state_55631__$1;
(statearr_55636_56670[(2)] = inst_55619);

(statearr_55636_56670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (4))){
var inst_55562 = (state_55631[(8)]);
var inst_55562__$1 = (state_55631[(2)]);
var inst_55563 = (inst_55562__$1 == null);
var state_55631__$1 = (function (){var statearr_55637 = state_55631;
(statearr_55637[(8)] = inst_55562__$1);

return statearr_55637;
})();
if(cljs.core.truth_(inst_55563)){
var statearr_55638_56671 = state_55631__$1;
(statearr_55638_56671[(1)] = (5));

} else {
var statearr_55639_56672 = state_55631__$1;
(statearr_55639_56672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (15))){
var inst_55604 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
var statearr_55640_56673 = state_55631__$1;
(statearr_55640_56673[(2)] = inst_55604);

(statearr_55640_56673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (21))){
var inst_55624 = (state_55631[(2)]);
var state_55631__$1 = (function (){var statearr_55641 = state_55631;
(statearr_55641[(9)] = inst_55624);

return statearr_55641;
})();
var statearr_55642_56678 = state_55631__$1;
(statearr_55642_56678[(2)] = null);

(statearr_55642_56678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (13))){
var inst_55586 = (state_55631[(10)]);
var inst_55588 = cljs.core.chunked_seq_QMARK_(inst_55586);
var state_55631__$1 = state_55631;
if(inst_55588){
var statearr_55643_56679 = state_55631__$1;
(statearr_55643_56679[(1)] = (16));

} else {
var statearr_55644_56680 = state_55631__$1;
(statearr_55644_56680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (22))){
var inst_55616 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
if(cljs.core.truth_(inst_55616)){
var statearr_55645_56681 = state_55631__$1;
(statearr_55645_56681[(1)] = (23));

} else {
var statearr_55646_56682 = state_55631__$1;
(statearr_55646_56682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (6))){
var inst_55562 = (state_55631[(8)]);
var inst_55610 = (state_55631[(7)]);
var inst_55612 = (state_55631[(11)]);
var inst_55610__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55562) : topic_fn.call(null,inst_55562));
var inst_55611 = cljs.core.deref(mults);
var inst_55612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55611,inst_55610__$1);
var state_55631__$1 = (function (){var statearr_55647 = state_55631;
(statearr_55647[(7)] = inst_55610__$1);

(statearr_55647[(11)] = inst_55612__$1);

return statearr_55647;
})();
if(cljs.core.truth_(inst_55612__$1)){
var statearr_55648_56683 = state_55631__$1;
(statearr_55648_56683[(1)] = (19));

} else {
var statearr_55649_56684 = state_55631__$1;
(statearr_55649_56684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (25))){
var inst_55621 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
var statearr_55650_56685 = state_55631__$1;
(statearr_55650_56685[(2)] = inst_55621);

(statearr_55650_56685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (17))){
var inst_55586 = (state_55631[(10)]);
var inst_55595 = cljs.core.first(inst_55586);
var inst_55596 = cljs.core.async.muxch_STAR_(inst_55595);
var inst_55597 = cljs.core.async.close_BANG_(inst_55596);
var inst_55598 = cljs.core.next(inst_55586);
var inst_55572 = inst_55598;
var inst_55573 = null;
var inst_55574 = (0);
var inst_55575 = (0);
var state_55631__$1 = (function (){var statearr_55651 = state_55631;
(statearr_55651[(12)] = inst_55597);

(statearr_55651[(13)] = inst_55572);

(statearr_55651[(14)] = inst_55573);

(statearr_55651[(15)] = inst_55574);

(statearr_55651[(16)] = inst_55575);

return statearr_55651;
})();
var statearr_55652_56687 = state_55631__$1;
(statearr_55652_56687[(2)] = null);

(statearr_55652_56687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (3))){
var inst_55629 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55631__$1,inst_55629);
} else {
if((state_val_55632 === (12))){
var inst_55606 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
var statearr_55653_56688 = state_55631__$1;
(statearr_55653_56688[(2)] = inst_55606);

(statearr_55653_56688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (2))){
var state_55631__$1 = state_55631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55631__$1,(4),ch);
} else {
if((state_val_55632 === (23))){
var state_55631__$1 = state_55631;
var statearr_55654_56689 = state_55631__$1;
(statearr_55654_56689[(2)] = null);

(statearr_55654_56689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (19))){
var inst_55612 = (state_55631[(11)]);
var inst_55562 = (state_55631[(8)]);
var inst_55614 = cljs.core.async.muxch_STAR_(inst_55612);
var state_55631__$1 = state_55631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55631__$1,(22),inst_55614,inst_55562);
} else {
if((state_val_55632 === (11))){
var inst_55572 = (state_55631[(13)]);
var inst_55586 = (state_55631[(10)]);
var inst_55586__$1 = cljs.core.seq(inst_55572);
var state_55631__$1 = (function (){var statearr_55655 = state_55631;
(statearr_55655[(10)] = inst_55586__$1);

return statearr_55655;
})();
if(inst_55586__$1){
var statearr_55656_56691 = state_55631__$1;
(statearr_55656_56691[(1)] = (13));

} else {
var statearr_55657_56692 = state_55631__$1;
(statearr_55657_56692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (9))){
var inst_55608 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
var statearr_55658_56693 = state_55631__$1;
(statearr_55658_56693[(2)] = inst_55608);

(statearr_55658_56693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (5))){
var inst_55569 = cljs.core.deref(mults);
var inst_55570 = cljs.core.vals(inst_55569);
var inst_55571 = cljs.core.seq(inst_55570);
var inst_55572 = inst_55571;
var inst_55573 = null;
var inst_55574 = (0);
var inst_55575 = (0);
var state_55631__$1 = (function (){var statearr_55659 = state_55631;
(statearr_55659[(13)] = inst_55572);

(statearr_55659[(14)] = inst_55573);

(statearr_55659[(15)] = inst_55574);

(statearr_55659[(16)] = inst_55575);

return statearr_55659;
})();
var statearr_55660_56694 = state_55631__$1;
(statearr_55660_56694[(2)] = null);

(statearr_55660_56694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (14))){
var state_55631__$1 = state_55631;
var statearr_55664_56695 = state_55631__$1;
(statearr_55664_56695[(2)] = null);

(statearr_55664_56695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (16))){
var inst_55586 = (state_55631[(10)]);
var inst_55590 = cljs.core.chunk_first(inst_55586);
var inst_55591 = cljs.core.chunk_rest(inst_55586);
var inst_55592 = cljs.core.count(inst_55590);
var inst_55572 = inst_55591;
var inst_55573 = inst_55590;
var inst_55574 = inst_55592;
var inst_55575 = (0);
var state_55631__$1 = (function (){var statearr_55665 = state_55631;
(statearr_55665[(13)] = inst_55572);

(statearr_55665[(14)] = inst_55573);

(statearr_55665[(15)] = inst_55574);

(statearr_55665[(16)] = inst_55575);

return statearr_55665;
})();
var statearr_55666_56700 = state_55631__$1;
(statearr_55666_56700[(2)] = null);

(statearr_55666_56700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (10))){
var inst_55573 = (state_55631[(14)]);
var inst_55575 = (state_55631[(16)]);
var inst_55572 = (state_55631[(13)]);
var inst_55574 = (state_55631[(15)]);
var inst_55580 = cljs.core._nth(inst_55573,inst_55575);
var inst_55581 = cljs.core.async.muxch_STAR_(inst_55580);
var inst_55582 = cljs.core.async.close_BANG_(inst_55581);
var inst_55583 = (inst_55575 + (1));
var tmp55661 = inst_55573;
var tmp55662 = inst_55574;
var tmp55663 = inst_55572;
var inst_55572__$1 = tmp55663;
var inst_55573__$1 = tmp55661;
var inst_55574__$1 = tmp55662;
var inst_55575__$1 = inst_55583;
var state_55631__$1 = (function (){var statearr_55667 = state_55631;
(statearr_55667[(17)] = inst_55582);

(statearr_55667[(13)] = inst_55572__$1);

(statearr_55667[(14)] = inst_55573__$1);

(statearr_55667[(15)] = inst_55574__$1);

(statearr_55667[(16)] = inst_55575__$1);

return statearr_55667;
})();
var statearr_55668_56701 = state_55631__$1;
(statearr_55668_56701[(2)] = null);

(statearr_55668_56701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (18))){
var inst_55601 = (state_55631[(2)]);
var state_55631__$1 = state_55631;
var statearr_55669_56702 = state_55631__$1;
(statearr_55669_56702[(2)] = inst_55601);

(statearr_55669_56702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55632 === (8))){
var inst_55575 = (state_55631[(16)]);
var inst_55574 = (state_55631[(15)]);
var inst_55577 = (inst_55575 < inst_55574);
var inst_55578 = inst_55577;
var state_55631__$1 = state_55631;
if(cljs.core.truth_(inst_55578)){
var statearr_55670_56703 = state_55631__$1;
(statearr_55670_56703[(1)] = (10));

} else {
var statearr_55671_56704 = state_55631__$1;
(statearr_55671_56704[(1)] = (11));

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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_55672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55672[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_55672[(1)] = (1));

return statearr_55672;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_55631){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55631);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55673){var ex__54525__auto__ = e55673;
var statearr_55674_56705 = state_55631;
(statearr_55674_56705[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55631[(4)]))){
var statearr_55675_56706 = state_55631;
(statearr_55675_56706[(1)] = cljs.core.first((state_55631[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56707 = state_55631;
state_55631 = G__56707;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_55631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_55631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55676 = f__54597__auto__();
(statearr_55676[(6)] = c__54596__auto___56666);

return statearr_55676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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
var G__55678 = arguments.length;
switch (G__55678) {
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
var G__55680 = arguments.length;
switch (G__55680) {
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
var G__55682 = arguments.length;
switch (G__55682) {
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
var c__54596__auto___56715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55725){
var state_val_55726 = (state_55725[(1)]);
if((state_val_55726 === (7))){
var state_55725__$1 = state_55725;
var statearr_55727_56716 = state_55725__$1;
(statearr_55727_56716[(2)] = null);

(statearr_55727_56716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (1))){
var state_55725__$1 = state_55725;
var statearr_55728_56717 = state_55725__$1;
(statearr_55728_56717[(2)] = null);

(statearr_55728_56717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (4))){
var inst_55686 = (state_55725[(7)]);
var inst_55685 = (state_55725[(8)]);
var inst_55688 = (inst_55686 < inst_55685);
var state_55725__$1 = state_55725;
if(cljs.core.truth_(inst_55688)){
var statearr_55729_56718 = state_55725__$1;
(statearr_55729_56718[(1)] = (6));

} else {
var statearr_55730_56719 = state_55725__$1;
(statearr_55730_56719[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (15))){
var inst_55711 = (state_55725[(9)]);
var inst_55716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55711);
var state_55725__$1 = state_55725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55725__$1,(17),out,inst_55716);
} else {
if((state_val_55726 === (13))){
var inst_55711 = (state_55725[(9)]);
var inst_55711__$1 = (state_55725[(2)]);
var inst_55712 = cljs.core.some(cljs.core.nil_QMARK_,inst_55711__$1);
var state_55725__$1 = (function (){var statearr_55731 = state_55725;
(statearr_55731[(9)] = inst_55711__$1);

return statearr_55731;
})();
if(cljs.core.truth_(inst_55712)){
var statearr_55732_56720 = state_55725__$1;
(statearr_55732_56720[(1)] = (14));

} else {
var statearr_55733_56721 = state_55725__$1;
(statearr_55733_56721[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (6))){
var state_55725__$1 = state_55725;
var statearr_55734_56722 = state_55725__$1;
(statearr_55734_56722[(2)] = null);

(statearr_55734_56722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (17))){
var inst_55718 = (state_55725[(2)]);
var state_55725__$1 = (function (){var statearr_55736 = state_55725;
(statearr_55736[(10)] = inst_55718);

return statearr_55736;
})();
var statearr_55737_56723 = state_55725__$1;
(statearr_55737_56723[(2)] = null);

(statearr_55737_56723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (3))){
var inst_55723 = (state_55725[(2)]);
var state_55725__$1 = state_55725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55725__$1,inst_55723);
} else {
if((state_val_55726 === (12))){
var _ = (function (){var statearr_55738 = state_55725;
(statearr_55738[(4)] = cljs.core.rest((state_55725[(4)])));

return statearr_55738;
})();
var state_55725__$1 = state_55725;
var ex55735 = (state_55725__$1[(2)]);
var statearr_55739_56724 = state_55725__$1;
(statearr_55739_56724[(5)] = ex55735);


if((ex55735 instanceof Object)){
var statearr_55740_56725 = state_55725__$1;
(statearr_55740_56725[(1)] = (11));

(statearr_55740_56725[(5)] = null);

} else {
throw ex55735;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (2))){
var inst_55684 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55685 = cnt;
var inst_55686 = (0);
var state_55725__$1 = (function (){var statearr_55741 = state_55725;
(statearr_55741[(11)] = inst_55684);

(statearr_55741[(8)] = inst_55685);

(statearr_55741[(7)] = inst_55686);

return statearr_55741;
})();
var statearr_55742_56730 = state_55725__$1;
(statearr_55742_56730[(2)] = null);

(statearr_55742_56730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (11))){
var inst_55690 = (state_55725[(2)]);
var inst_55691 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55725__$1 = (function (){var statearr_55743 = state_55725;
(statearr_55743[(12)] = inst_55690);

return statearr_55743;
})();
var statearr_55744_56731 = state_55725__$1;
(statearr_55744_56731[(2)] = inst_55691);

(statearr_55744_56731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (9))){
var inst_55686 = (state_55725[(7)]);
var _ = (function (){var statearr_55745 = state_55725;
(statearr_55745[(4)] = cljs.core.cons((12),(state_55725[(4)])));

return statearr_55745;
})();
var inst_55697 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55686) : chs__$1.call(null,inst_55686));
var inst_55698 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55686) : done.call(null,inst_55686));
var inst_55699 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55697,inst_55698);
var ___$1 = (function (){var statearr_55746 = state_55725;
(statearr_55746[(4)] = cljs.core.rest((state_55725[(4)])));

return statearr_55746;
})();
var state_55725__$1 = state_55725;
var statearr_55747_56732 = state_55725__$1;
(statearr_55747_56732[(2)] = inst_55699);

(statearr_55747_56732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (5))){
var inst_55709 = (state_55725[(2)]);
var state_55725__$1 = (function (){var statearr_55748 = state_55725;
(statearr_55748[(13)] = inst_55709);

return statearr_55748;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55725__$1,(13),dchan);
} else {
if((state_val_55726 === (14))){
var inst_55714 = cljs.core.async.close_BANG_(out);
var state_55725__$1 = state_55725;
var statearr_55749_56733 = state_55725__$1;
(statearr_55749_56733[(2)] = inst_55714);

(statearr_55749_56733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (16))){
var inst_55721 = (state_55725[(2)]);
var state_55725__$1 = state_55725;
var statearr_55750_56734 = state_55725__$1;
(statearr_55750_56734[(2)] = inst_55721);

(statearr_55750_56734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (10))){
var inst_55686 = (state_55725[(7)]);
var inst_55702 = (state_55725[(2)]);
var inst_55703 = (inst_55686 + (1));
var inst_55686__$1 = inst_55703;
var state_55725__$1 = (function (){var statearr_55751 = state_55725;
(statearr_55751[(14)] = inst_55702);

(statearr_55751[(7)] = inst_55686__$1);

return statearr_55751;
})();
var statearr_55752_56735 = state_55725__$1;
(statearr_55752_56735[(2)] = null);

(statearr_55752_56735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55726 === (8))){
var inst_55707 = (state_55725[(2)]);
var state_55725__$1 = state_55725;
var statearr_55753_56736 = state_55725__$1;
(statearr_55753_56736[(2)] = inst_55707);

(statearr_55753_56736[(1)] = (5));


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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_55754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55754[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_55754[(1)] = (1));

return statearr_55754;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_55725){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55725);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55755){var ex__54525__auto__ = e55755;
var statearr_55756_56738 = state_55725;
(statearr_55756_56738[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55725[(4)]))){
var statearr_55757_56739 = state_55725;
(statearr_55757_56739[(1)] = cljs.core.first((state_55725[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56741 = state_55725;
state_55725 = G__56741;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_55725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_55725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55758 = f__54597__auto__();
(statearr_55758[(6)] = c__54596__auto___56715);

return statearr_55758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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
var G__55761 = arguments.length;
switch (G__55761) {
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
var c__54596__auto___56747 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55793){
var state_val_55794 = (state_55793[(1)]);
if((state_val_55794 === (7))){
var inst_55772 = (state_55793[(7)]);
var inst_55773 = (state_55793[(8)]);
var inst_55772__$1 = (state_55793[(2)]);
var inst_55773__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55772__$1,(0),null);
var inst_55774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55772__$1,(1),null);
var inst_55775 = (inst_55773__$1 == null);
var state_55793__$1 = (function (){var statearr_55795 = state_55793;
(statearr_55795[(7)] = inst_55772__$1);

(statearr_55795[(8)] = inst_55773__$1);

(statearr_55795[(9)] = inst_55774);

return statearr_55795;
})();
if(cljs.core.truth_(inst_55775)){
var statearr_55796_56748 = state_55793__$1;
(statearr_55796_56748[(1)] = (8));

} else {
var statearr_55797_56749 = state_55793__$1;
(statearr_55797_56749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (1))){
var inst_55762 = cljs.core.vec(chs);
var inst_55763 = inst_55762;
var state_55793__$1 = (function (){var statearr_55798 = state_55793;
(statearr_55798[(10)] = inst_55763);

return statearr_55798;
})();
var statearr_55799_56750 = state_55793__$1;
(statearr_55799_56750[(2)] = null);

(statearr_55799_56750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (4))){
var inst_55763 = (state_55793[(10)]);
var state_55793__$1 = state_55793;
return cljs.core.async.ioc_alts_BANG_(state_55793__$1,(7),inst_55763);
} else {
if((state_val_55794 === (6))){
var inst_55789 = (state_55793[(2)]);
var state_55793__$1 = state_55793;
var statearr_55800_56751 = state_55793__$1;
(statearr_55800_56751[(2)] = inst_55789);

(statearr_55800_56751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (3))){
var inst_55791 = (state_55793[(2)]);
var state_55793__$1 = state_55793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55793__$1,inst_55791);
} else {
if((state_val_55794 === (2))){
var inst_55763 = (state_55793[(10)]);
var inst_55765 = cljs.core.count(inst_55763);
var inst_55766 = (inst_55765 > (0));
var state_55793__$1 = state_55793;
if(cljs.core.truth_(inst_55766)){
var statearr_55802_56752 = state_55793__$1;
(statearr_55802_56752[(1)] = (4));

} else {
var statearr_55803_56753 = state_55793__$1;
(statearr_55803_56753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (11))){
var inst_55763 = (state_55793[(10)]);
var inst_55782 = (state_55793[(2)]);
var tmp55801 = inst_55763;
var inst_55763__$1 = tmp55801;
var state_55793__$1 = (function (){var statearr_55804 = state_55793;
(statearr_55804[(11)] = inst_55782);

(statearr_55804[(10)] = inst_55763__$1);

return statearr_55804;
})();
var statearr_55805_56754 = state_55793__$1;
(statearr_55805_56754[(2)] = null);

(statearr_55805_56754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (9))){
var inst_55773 = (state_55793[(8)]);
var state_55793__$1 = state_55793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55793__$1,(11),out,inst_55773);
} else {
if((state_val_55794 === (5))){
var inst_55787 = cljs.core.async.close_BANG_(out);
var state_55793__$1 = state_55793;
var statearr_55806_56755 = state_55793__$1;
(statearr_55806_56755[(2)] = inst_55787);

(statearr_55806_56755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (10))){
var inst_55785 = (state_55793[(2)]);
var state_55793__$1 = state_55793;
var statearr_55807_56756 = state_55793__$1;
(statearr_55807_56756[(2)] = inst_55785);

(statearr_55807_56756[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55794 === (8))){
var inst_55763 = (state_55793[(10)]);
var inst_55772 = (state_55793[(7)]);
var inst_55773 = (state_55793[(8)]);
var inst_55774 = (state_55793[(9)]);
var inst_55777 = (function (){var cs = inst_55763;
var vec__55768 = inst_55772;
var v = inst_55773;
var c = inst_55774;
return (function (p1__55759_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55759_SHARP_);
});
})();
var inst_55778 = cljs.core.filterv(inst_55777,inst_55763);
var inst_55763__$1 = inst_55778;
var state_55793__$1 = (function (){var statearr_55808 = state_55793;
(statearr_55808[(10)] = inst_55763__$1);

return statearr_55808;
})();
var statearr_55809_56759 = state_55793__$1;
(statearr_55809_56759[(2)] = null);

(statearr_55809_56759[(1)] = (2));


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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_55810 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55810[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_55810[(1)] = (1));

return statearr_55810;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_55793){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55793);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55811){var ex__54525__auto__ = e55811;
var statearr_55812_56761 = state_55793;
(statearr_55812_56761[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55793[(4)]))){
var statearr_55813_56762 = state_55793;
(statearr_55813_56762[(1)] = cljs.core.first((state_55793[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56764 = state_55793;
state_55793 = G__56764;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_55793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_55793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55814 = f__54597__auto__();
(statearr_55814[(6)] = c__54596__auto___56747);

return statearr_55814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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
var G__55816 = arguments.length;
switch (G__55816) {
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
var c__54596__auto___56768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55840){
var state_val_55841 = (state_55840[(1)]);
if((state_val_55841 === (7))){
var inst_55822 = (state_55840[(7)]);
var inst_55822__$1 = (state_55840[(2)]);
var inst_55823 = (inst_55822__$1 == null);
var inst_55824 = cljs.core.not(inst_55823);
var state_55840__$1 = (function (){var statearr_55842 = state_55840;
(statearr_55842[(7)] = inst_55822__$1);

return statearr_55842;
})();
if(inst_55824){
var statearr_55843_56770 = state_55840__$1;
(statearr_55843_56770[(1)] = (8));

} else {
var statearr_55844_56771 = state_55840__$1;
(statearr_55844_56771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (1))){
var inst_55817 = (0);
var state_55840__$1 = (function (){var statearr_55845 = state_55840;
(statearr_55845[(8)] = inst_55817);

return statearr_55845;
})();
var statearr_55846_56772 = state_55840__$1;
(statearr_55846_56772[(2)] = null);

(statearr_55846_56772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (4))){
var state_55840__$1 = state_55840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55840__$1,(7),ch);
} else {
if((state_val_55841 === (6))){
var inst_55835 = (state_55840[(2)]);
var state_55840__$1 = state_55840;
var statearr_55847_56773 = state_55840__$1;
(statearr_55847_56773[(2)] = inst_55835);

(statearr_55847_56773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (3))){
var inst_55837 = (state_55840[(2)]);
var inst_55838 = cljs.core.async.close_BANG_(out);
var state_55840__$1 = (function (){var statearr_55848 = state_55840;
(statearr_55848[(9)] = inst_55837);

return statearr_55848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55840__$1,inst_55838);
} else {
if((state_val_55841 === (2))){
var inst_55817 = (state_55840[(8)]);
var inst_55819 = (inst_55817 < n);
var state_55840__$1 = state_55840;
if(cljs.core.truth_(inst_55819)){
var statearr_55849_56774 = state_55840__$1;
(statearr_55849_56774[(1)] = (4));

} else {
var statearr_55850_56775 = state_55840__$1;
(statearr_55850_56775[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (11))){
var inst_55817 = (state_55840[(8)]);
var inst_55827 = (state_55840[(2)]);
var inst_55828 = (inst_55817 + (1));
var inst_55817__$1 = inst_55828;
var state_55840__$1 = (function (){var statearr_55851 = state_55840;
(statearr_55851[(10)] = inst_55827);

(statearr_55851[(8)] = inst_55817__$1);

return statearr_55851;
})();
var statearr_55852_56776 = state_55840__$1;
(statearr_55852_56776[(2)] = null);

(statearr_55852_56776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (9))){
var state_55840__$1 = state_55840;
var statearr_55853_56777 = state_55840__$1;
(statearr_55853_56777[(2)] = null);

(statearr_55853_56777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (5))){
var state_55840__$1 = state_55840;
var statearr_55854_56778 = state_55840__$1;
(statearr_55854_56778[(2)] = null);

(statearr_55854_56778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (10))){
var inst_55832 = (state_55840[(2)]);
var state_55840__$1 = state_55840;
var statearr_55855_56779 = state_55840__$1;
(statearr_55855_56779[(2)] = inst_55832);

(statearr_55855_56779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55841 === (8))){
var inst_55822 = (state_55840[(7)]);
var state_55840__$1 = state_55840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55840__$1,(11),out,inst_55822);
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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_55856 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55856[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_55856[(1)] = (1));

return statearr_55856;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_55840){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55840);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55857){var ex__54525__auto__ = e55857;
var statearr_55858_56780 = state_55840;
(statearr_55858_56780[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55840[(4)]))){
var statearr_55859_56781 = state_55840;
(statearr_55859_56781[(1)] = cljs.core.first((state_55840[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56782 = state_55840;
state_55840 = G__56782;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_55840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_55840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55860 = f__54597__auto__();
(statearr_55860[(6)] = c__54596__auto___56768);

return statearr_55860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
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
cljs.core.async.t_cljs$core$async55865 = (function (f,ch,meta55863,_,fn1,meta55866){
this.f = f;
this.ch = ch;
this.meta55863 = meta55863;
this._ = _;
this.fn1 = fn1;
this.meta55866 = meta55866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55867,meta55866__$1){
var self__ = this;
var _55867__$1 = this;
return (new cljs.core.async.t_cljs$core$async55865(self__.f,self__.ch,self__.meta55863,self__._,self__.fn1,meta55866__$1));
}));

(cljs.core.async.t_cljs$core$async55865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55867){
var self__ = this;
var _55867__$1 = this;
return self__.meta55866;
}));

(cljs.core.async.t_cljs$core$async55865.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55865.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55861_SHARP_){
var G__55868 = (((p1__55861_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55861_SHARP_) : self__.f.call(null,p1__55861_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55868) : f1.call(null,G__55868));
});
}));

(cljs.core.async.t_cljs$core$async55865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55863","meta55863",347142283,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55862","cljs.core.async/t_cljs$core$async55862",1000519020,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55866","meta55866",2054172129,null)], null);
}));

(cljs.core.async.t_cljs$core$async55865.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55865");

(cljs.core.async.t_cljs$core$async55865.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55865");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55865.
 */
cljs.core.async.__GT_t_cljs$core$async55865 = (function cljs$core$async$__GT_t_cljs$core$async55865(f,ch,meta55863,_,fn1,meta55866){
return (new cljs.core.async.t_cljs$core$async55865(f,ch,meta55863,_,fn1,meta55866));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55862 = (function (f,ch,meta55863){
this.f = f;
this.ch = ch;
this.meta55863 = meta55863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55864,meta55863__$1){
var self__ = this;
var _55864__$1 = this;
return (new cljs.core.async.t_cljs$core$async55862(self__.f,self__.ch,meta55863__$1));
}));

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55864){
var self__ = this;
var _55864__$1 = this;
return self__.meta55863;
}));

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async55865(self__.f,self__.ch,self__.meta55863,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55869 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55869) : self__.f.call(null,G__55869));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55863","meta55863",347142283,null)], null);
}));

(cljs.core.async.t_cljs$core$async55862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55862");

(cljs.core.async.t_cljs$core$async55862.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55862.
 */
cljs.core.async.__GT_t_cljs$core$async55862 = (function cljs$core$async$__GT_t_cljs$core$async55862(f,ch,meta55863){
return (new cljs.core.async.t_cljs$core$async55862(f,ch,meta55863));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55862(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55870 = (function (f,ch,meta55871){
this.f = f;
this.ch = ch;
this.meta55871 = meta55871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55872,meta55871__$1){
var self__ = this;
var _55872__$1 = this;
return (new cljs.core.async.t_cljs$core$async55870(self__.f,self__.ch,meta55871__$1));
}));

(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55872){
var self__ = this;
var _55872__$1 = this;
return self__.meta55871;
}));

(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55870.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55871","meta55871",742167802,null)], null);
}));

(cljs.core.async.t_cljs$core$async55870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55870");

(cljs.core.async.t_cljs$core$async55870.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55870.
 */
cljs.core.async.__GT_t_cljs$core$async55870 = (function cljs$core$async$__GT_t_cljs$core$async55870(f,ch,meta55871){
return (new cljs.core.async.t_cljs$core$async55870(f,ch,meta55871));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55870(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55873 = (function (p,ch,meta55874){
this.p = p;
this.ch = ch;
this.meta55874 = meta55874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55875,meta55874__$1){
var self__ = this;
var _55875__$1 = this;
return (new cljs.core.async.t_cljs$core$async55873(self__.p,self__.ch,meta55874__$1));
}));

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55875){
var self__ = this;
var _55875__$1 = this;
return self__.meta55874;
}));

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55874","meta55874",688010943,null)], null);
}));

(cljs.core.async.t_cljs$core$async55873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55873");

(cljs.core.async.t_cljs$core$async55873.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55873.
 */
cljs.core.async.__GT_t_cljs$core$async55873 = (function cljs$core$async$__GT_t_cljs$core$async55873(p,ch,meta55874){
return (new cljs.core.async.t_cljs$core$async55873(p,ch,meta55874));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async55873(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55877 = arguments.length;
switch (G__55877) {
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
var c__54596__auto___56792 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55898){
var state_val_55899 = (state_55898[(1)]);
if((state_val_55899 === (7))){
var inst_55894 = (state_55898[(2)]);
var state_55898__$1 = state_55898;
var statearr_55900_56793 = state_55898__$1;
(statearr_55900_56793[(2)] = inst_55894);

(statearr_55900_56793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (1))){
var state_55898__$1 = state_55898;
var statearr_55901_56794 = state_55898__$1;
(statearr_55901_56794[(2)] = null);

(statearr_55901_56794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (4))){
var inst_55880 = (state_55898[(7)]);
var inst_55880__$1 = (state_55898[(2)]);
var inst_55881 = (inst_55880__$1 == null);
var state_55898__$1 = (function (){var statearr_55902 = state_55898;
(statearr_55902[(7)] = inst_55880__$1);

return statearr_55902;
})();
if(cljs.core.truth_(inst_55881)){
var statearr_55903_56799 = state_55898__$1;
(statearr_55903_56799[(1)] = (5));

} else {
var statearr_55904_56800 = state_55898__$1;
(statearr_55904_56800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (6))){
var inst_55880 = (state_55898[(7)]);
var inst_55885 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55880) : p.call(null,inst_55880));
var state_55898__$1 = state_55898;
if(cljs.core.truth_(inst_55885)){
var statearr_55905_56801 = state_55898__$1;
(statearr_55905_56801[(1)] = (8));

} else {
var statearr_55906_56802 = state_55898__$1;
(statearr_55906_56802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (3))){
var inst_55896 = (state_55898[(2)]);
var state_55898__$1 = state_55898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55898__$1,inst_55896);
} else {
if((state_val_55899 === (2))){
var state_55898__$1 = state_55898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55898__$1,(4),ch);
} else {
if((state_val_55899 === (11))){
var inst_55888 = (state_55898[(2)]);
var state_55898__$1 = state_55898;
var statearr_55907_56803 = state_55898__$1;
(statearr_55907_56803[(2)] = inst_55888);

(statearr_55907_56803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (9))){
var state_55898__$1 = state_55898;
var statearr_55908_56804 = state_55898__$1;
(statearr_55908_56804[(2)] = null);

(statearr_55908_56804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (5))){
var inst_55883 = cljs.core.async.close_BANG_(out);
var state_55898__$1 = state_55898;
var statearr_55909_56805 = state_55898__$1;
(statearr_55909_56805[(2)] = inst_55883);

(statearr_55909_56805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (10))){
var inst_55891 = (state_55898[(2)]);
var state_55898__$1 = (function (){var statearr_55910 = state_55898;
(statearr_55910[(8)] = inst_55891);

return statearr_55910;
})();
var statearr_55911_56806 = state_55898__$1;
(statearr_55911_56806[(2)] = null);

(statearr_55911_56806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55899 === (8))){
var inst_55880 = (state_55898[(7)]);
var state_55898__$1 = state_55898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55898__$1,(11),out,inst_55880);
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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_55912 = [null,null,null,null,null,null,null,null,null];
(statearr_55912[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_55912[(1)] = (1));

return statearr_55912;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_55898){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55898);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e55913){var ex__54525__auto__ = e55913;
var statearr_55914_56808 = state_55898;
(statearr_55914_56808[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55898[(4)]))){
var statearr_55915_56809 = state_55898;
(statearr_55915_56809[(1)] = cljs.core.first((state_55898[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56810 = state_55898;
state_55898 = G__56810;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_55898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_55898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_55916 = f__54597__auto__();
(statearr_55916[(6)] = c__54596__auto___56792);

return statearr_55916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55918 = arguments.length;
switch (G__55918) {
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
var c__54596__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_55980){
var state_val_55981 = (state_55980[(1)]);
if((state_val_55981 === (7))){
var inst_55976 = (state_55980[(2)]);
var state_55980__$1 = state_55980;
var statearr_55982_56812 = state_55980__$1;
(statearr_55982_56812[(2)] = inst_55976);

(statearr_55982_56812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (20))){
var inst_55946 = (state_55980[(7)]);
var inst_55957 = (state_55980[(2)]);
var inst_55958 = cljs.core.next(inst_55946);
var inst_55932 = inst_55958;
var inst_55933 = null;
var inst_55934 = (0);
var inst_55935 = (0);
var state_55980__$1 = (function (){var statearr_55983 = state_55980;
(statearr_55983[(8)] = inst_55957);

(statearr_55983[(9)] = inst_55932);

(statearr_55983[(10)] = inst_55933);

(statearr_55983[(11)] = inst_55934);

(statearr_55983[(12)] = inst_55935);

return statearr_55983;
})();
var statearr_55984_56813 = state_55980__$1;
(statearr_55984_56813[(2)] = null);

(statearr_55984_56813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (1))){
var state_55980__$1 = state_55980;
var statearr_55985_56814 = state_55980__$1;
(statearr_55985_56814[(2)] = null);

(statearr_55985_56814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (4))){
var inst_55921 = (state_55980[(13)]);
var inst_55921__$1 = (state_55980[(2)]);
var inst_55922 = (inst_55921__$1 == null);
var state_55980__$1 = (function (){var statearr_55986 = state_55980;
(statearr_55986[(13)] = inst_55921__$1);

return statearr_55986;
})();
if(cljs.core.truth_(inst_55922)){
var statearr_55987_56815 = state_55980__$1;
(statearr_55987_56815[(1)] = (5));

} else {
var statearr_55988_56816 = state_55980__$1;
(statearr_55988_56816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (15))){
var state_55980__$1 = state_55980;
var statearr_55992_56817 = state_55980__$1;
(statearr_55992_56817[(2)] = null);

(statearr_55992_56817[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (21))){
var state_55980__$1 = state_55980;
var statearr_55993_56818 = state_55980__$1;
(statearr_55993_56818[(2)] = null);

(statearr_55993_56818[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (13))){
var inst_55935 = (state_55980[(12)]);
var inst_55932 = (state_55980[(9)]);
var inst_55933 = (state_55980[(10)]);
var inst_55934 = (state_55980[(11)]);
var inst_55942 = (state_55980[(2)]);
var inst_55943 = (inst_55935 + (1));
var tmp55989 = inst_55933;
var tmp55990 = inst_55934;
var tmp55991 = inst_55932;
var inst_55932__$1 = tmp55991;
var inst_55933__$1 = tmp55989;
var inst_55934__$1 = tmp55990;
var inst_55935__$1 = inst_55943;
var state_55980__$1 = (function (){var statearr_55994 = state_55980;
(statearr_55994[(14)] = inst_55942);

(statearr_55994[(9)] = inst_55932__$1);

(statearr_55994[(10)] = inst_55933__$1);

(statearr_55994[(11)] = inst_55934__$1);

(statearr_55994[(12)] = inst_55935__$1);

return statearr_55994;
})();
var statearr_55995_56821 = state_55980__$1;
(statearr_55995_56821[(2)] = null);

(statearr_55995_56821[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (22))){
var state_55980__$1 = state_55980;
var statearr_55996_56822 = state_55980__$1;
(statearr_55996_56822[(2)] = null);

(statearr_55996_56822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (6))){
var inst_55921 = (state_55980[(13)]);
var inst_55930 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55921) : f.call(null,inst_55921));
var inst_55931 = cljs.core.seq(inst_55930);
var inst_55932 = inst_55931;
var inst_55933 = null;
var inst_55934 = (0);
var inst_55935 = (0);
var state_55980__$1 = (function (){var statearr_55997 = state_55980;
(statearr_55997[(9)] = inst_55932);

(statearr_55997[(10)] = inst_55933);

(statearr_55997[(11)] = inst_55934);

(statearr_55997[(12)] = inst_55935);

return statearr_55997;
})();
var statearr_55998_56823 = state_55980__$1;
(statearr_55998_56823[(2)] = null);

(statearr_55998_56823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (17))){
var inst_55946 = (state_55980[(7)]);
var inst_55950 = cljs.core.chunk_first(inst_55946);
var inst_55951 = cljs.core.chunk_rest(inst_55946);
var inst_55952 = cljs.core.count(inst_55950);
var inst_55932 = inst_55951;
var inst_55933 = inst_55950;
var inst_55934 = inst_55952;
var inst_55935 = (0);
var state_55980__$1 = (function (){var statearr_55999 = state_55980;
(statearr_55999[(9)] = inst_55932);

(statearr_55999[(10)] = inst_55933);

(statearr_55999[(11)] = inst_55934);

(statearr_55999[(12)] = inst_55935);

return statearr_55999;
})();
var statearr_56000_56824 = state_55980__$1;
(statearr_56000_56824[(2)] = null);

(statearr_56000_56824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (3))){
var inst_55978 = (state_55980[(2)]);
var state_55980__$1 = state_55980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55980__$1,inst_55978);
} else {
if((state_val_55981 === (12))){
var inst_55966 = (state_55980[(2)]);
var state_55980__$1 = state_55980;
var statearr_56001_56826 = state_55980__$1;
(statearr_56001_56826[(2)] = inst_55966);

(statearr_56001_56826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (2))){
var state_55980__$1 = state_55980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55980__$1,(4),in$);
} else {
if((state_val_55981 === (23))){
var inst_55974 = (state_55980[(2)]);
var state_55980__$1 = state_55980;
var statearr_56002_56827 = state_55980__$1;
(statearr_56002_56827[(2)] = inst_55974);

(statearr_56002_56827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (19))){
var inst_55961 = (state_55980[(2)]);
var state_55980__$1 = state_55980;
var statearr_56003_56828 = state_55980__$1;
(statearr_56003_56828[(2)] = inst_55961);

(statearr_56003_56828[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (11))){
var inst_55932 = (state_55980[(9)]);
var inst_55946 = (state_55980[(7)]);
var inst_55946__$1 = cljs.core.seq(inst_55932);
var state_55980__$1 = (function (){var statearr_56004 = state_55980;
(statearr_56004[(7)] = inst_55946__$1);

return statearr_56004;
})();
if(inst_55946__$1){
var statearr_56005_56829 = state_55980__$1;
(statearr_56005_56829[(1)] = (14));

} else {
var statearr_56006_56830 = state_55980__$1;
(statearr_56006_56830[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (9))){
var inst_55968 = (state_55980[(2)]);
var inst_55969 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55980__$1 = (function (){var statearr_56007 = state_55980;
(statearr_56007[(15)] = inst_55968);

return statearr_56007;
})();
if(cljs.core.truth_(inst_55969)){
var statearr_56008_56831 = state_55980__$1;
(statearr_56008_56831[(1)] = (21));

} else {
var statearr_56009_56832 = state_55980__$1;
(statearr_56009_56832[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (5))){
var inst_55924 = cljs.core.async.close_BANG_(out);
var state_55980__$1 = state_55980;
var statearr_56010_56833 = state_55980__$1;
(statearr_56010_56833[(2)] = inst_55924);

(statearr_56010_56833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (14))){
var inst_55946 = (state_55980[(7)]);
var inst_55948 = cljs.core.chunked_seq_QMARK_(inst_55946);
var state_55980__$1 = state_55980;
if(inst_55948){
var statearr_56011_56834 = state_55980__$1;
(statearr_56011_56834[(1)] = (17));

} else {
var statearr_56012_56835 = state_55980__$1;
(statearr_56012_56835[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (16))){
var inst_55964 = (state_55980[(2)]);
var state_55980__$1 = state_55980;
var statearr_56013_56836 = state_55980__$1;
(statearr_56013_56836[(2)] = inst_55964);

(statearr_56013_56836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55981 === (10))){
var inst_55933 = (state_55980[(10)]);
var inst_55935 = (state_55980[(12)]);
var inst_55940 = cljs.core._nth(inst_55933,inst_55935);
var state_55980__$1 = state_55980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55980__$1,(13),out,inst_55940);
} else {
if((state_val_55981 === (18))){
var inst_55946 = (state_55980[(7)]);
var inst_55955 = cljs.core.first(inst_55946);
var state_55980__$1 = state_55980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55980__$1,(20),out,inst_55955);
} else {
if((state_val_55981 === (8))){
var inst_55935 = (state_55980[(12)]);
var inst_55934 = (state_55980[(11)]);
var inst_55937 = (inst_55935 < inst_55934);
var inst_55938 = inst_55937;
var state_55980__$1 = state_55980;
if(cljs.core.truth_(inst_55938)){
var statearr_56014_56837 = state_55980__$1;
(statearr_56014_56837[(1)] = (10));

} else {
var statearr_56015_56838 = state_55980__$1;
(statearr_56015_56838[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54522__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54522__auto____0 = (function (){
var statearr_56016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56016[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54522__auto__);

(statearr_56016[(1)] = (1));

return statearr_56016;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54522__auto____1 = (function (state_55980){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_55980);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e56017){var ex__54525__auto__ = e56017;
var statearr_56018_56839 = state_55980;
(statearr_56018_56839[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_55980[(4)]))){
var statearr_56019_56840 = state_55980;
(statearr_56019_56840[(1)] = cljs.core.first((state_55980[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56841 = state_55980;
state_55980 = G__56841;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54522__auto__ = function(state_55980){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54522__auto____1.call(this,state_55980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54522__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54522__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_56020 = f__54597__auto__();
(statearr_56020[(6)] = c__54596__auto__);

return statearr_56020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));

return c__54596__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__56022 = arguments.length;
switch (G__56022) {
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
var G__56024 = arguments.length;
switch (G__56024) {
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
var G__56026 = arguments.length;
switch (G__56026) {
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
var c__54596__auto___56850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_56050){
var state_val_56051 = (state_56050[(1)]);
if((state_val_56051 === (7))){
var inst_56045 = (state_56050[(2)]);
var state_56050__$1 = state_56050;
var statearr_56052_56851 = state_56050__$1;
(statearr_56052_56851[(2)] = inst_56045);

(statearr_56052_56851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56051 === (1))){
var inst_56027 = null;
var state_56050__$1 = (function (){var statearr_56053 = state_56050;
(statearr_56053[(7)] = inst_56027);

return statearr_56053;
})();
var statearr_56054_56852 = state_56050__$1;
(statearr_56054_56852[(2)] = null);

(statearr_56054_56852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56051 === (4))){
var inst_56030 = (state_56050[(8)]);
var inst_56030__$1 = (state_56050[(2)]);
var inst_56031 = (inst_56030__$1 == null);
var inst_56032 = cljs.core.not(inst_56031);
var state_56050__$1 = (function (){var statearr_56055 = state_56050;
(statearr_56055[(8)] = inst_56030__$1);

return statearr_56055;
})();
if(inst_56032){
var statearr_56056_56856 = state_56050__$1;
(statearr_56056_56856[(1)] = (5));

} else {
var statearr_56057_56857 = state_56050__$1;
(statearr_56057_56857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56051 === (6))){
var state_56050__$1 = state_56050;
var statearr_56058_56858 = state_56050__$1;
(statearr_56058_56858[(2)] = null);

(statearr_56058_56858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56051 === (3))){
var inst_56047 = (state_56050[(2)]);
var inst_56048 = cljs.core.async.close_BANG_(out);
var state_56050__$1 = (function (){var statearr_56059 = state_56050;
(statearr_56059[(9)] = inst_56047);

return statearr_56059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56050__$1,inst_56048);
} else {
if((state_val_56051 === (2))){
var state_56050__$1 = state_56050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56050__$1,(4),ch);
} else {
if((state_val_56051 === (11))){
var inst_56030 = (state_56050[(8)]);
var inst_56039 = (state_56050[(2)]);
var inst_56027 = inst_56030;
var state_56050__$1 = (function (){var statearr_56060 = state_56050;
(statearr_56060[(10)] = inst_56039);

(statearr_56060[(7)] = inst_56027);

return statearr_56060;
})();
var statearr_56061_56862 = state_56050__$1;
(statearr_56061_56862[(2)] = null);

(statearr_56061_56862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56051 === (9))){
var inst_56030 = (state_56050[(8)]);
var state_56050__$1 = state_56050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56050__$1,(11),out,inst_56030);
} else {
if((state_val_56051 === (5))){
var inst_56030 = (state_56050[(8)]);
var inst_56027 = (state_56050[(7)]);
var inst_56034 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56030,inst_56027);
var state_56050__$1 = state_56050;
if(inst_56034){
var statearr_56063_56863 = state_56050__$1;
(statearr_56063_56863[(1)] = (8));

} else {
var statearr_56064_56864 = state_56050__$1;
(statearr_56064_56864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56051 === (10))){
var inst_56042 = (state_56050[(2)]);
var state_56050__$1 = state_56050;
var statearr_56065_56865 = state_56050__$1;
(statearr_56065_56865[(2)] = inst_56042);

(statearr_56065_56865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56051 === (8))){
var inst_56027 = (state_56050[(7)]);
var tmp56062 = inst_56027;
var inst_56027__$1 = tmp56062;
var state_56050__$1 = (function (){var statearr_56066 = state_56050;
(statearr_56066[(7)] = inst_56027__$1);

return statearr_56066;
})();
var statearr_56067_56866 = state_56050__$1;
(statearr_56067_56866[(2)] = null);

(statearr_56067_56866[(1)] = (2));


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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_56068 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56068[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_56068[(1)] = (1));

return statearr_56068;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_56050){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_56050);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e56069){var ex__54525__auto__ = e56069;
var statearr_56070_56868 = state_56050;
(statearr_56070_56868[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_56050[(4)]))){
var statearr_56071_56869 = state_56050;
(statearr_56071_56869[(1)] = cljs.core.first((state_56050[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56870 = state_56050;
state_56050 = G__56870;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_56050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_56050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_56072 = f__54597__auto__();
(statearr_56072[(6)] = c__54596__auto___56850);

return statearr_56072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__56074 = arguments.length;
switch (G__56074) {
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
var c__54596__auto___56872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_56112){
var state_val_56113 = (state_56112[(1)]);
if((state_val_56113 === (7))){
var inst_56108 = (state_56112[(2)]);
var state_56112__$1 = state_56112;
var statearr_56114_56873 = state_56112__$1;
(statearr_56114_56873[(2)] = inst_56108);

(statearr_56114_56873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (1))){
var inst_56075 = (new Array(n));
var inst_56076 = inst_56075;
var inst_56077 = (0);
var state_56112__$1 = (function (){var statearr_56115 = state_56112;
(statearr_56115[(7)] = inst_56076);

(statearr_56115[(8)] = inst_56077);

return statearr_56115;
})();
var statearr_56116_56874 = state_56112__$1;
(statearr_56116_56874[(2)] = null);

(statearr_56116_56874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (4))){
var inst_56080 = (state_56112[(9)]);
var inst_56080__$1 = (state_56112[(2)]);
var inst_56081 = (inst_56080__$1 == null);
var inst_56082 = cljs.core.not(inst_56081);
var state_56112__$1 = (function (){var statearr_56117 = state_56112;
(statearr_56117[(9)] = inst_56080__$1);

return statearr_56117;
})();
if(inst_56082){
var statearr_56118_56875 = state_56112__$1;
(statearr_56118_56875[(1)] = (5));

} else {
var statearr_56119_56876 = state_56112__$1;
(statearr_56119_56876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (15))){
var inst_56102 = (state_56112[(2)]);
var state_56112__$1 = state_56112;
var statearr_56120_56877 = state_56112__$1;
(statearr_56120_56877[(2)] = inst_56102);

(statearr_56120_56877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (13))){
var state_56112__$1 = state_56112;
var statearr_56121_56878 = state_56112__$1;
(statearr_56121_56878[(2)] = null);

(statearr_56121_56878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (6))){
var inst_56077 = (state_56112[(8)]);
var inst_56098 = (inst_56077 > (0));
var state_56112__$1 = state_56112;
if(cljs.core.truth_(inst_56098)){
var statearr_56122_56879 = state_56112__$1;
(statearr_56122_56879[(1)] = (12));

} else {
var statearr_56123_56880 = state_56112__$1;
(statearr_56123_56880[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (3))){
var inst_56110 = (state_56112[(2)]);
var state_56112__$1 = state_56112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56112__$1,inst_56110);
} else {
if((state_val_56113 === (12))){
var inst_56076 = (state_56112[(7)]);
var inst_56100 = cljs.core.vec(inst_56076);
var state_56112__$1 = state_56112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56112__$1,(15),out,inst_56100);
} else {
if((state_val_56113 === (2))){
var state_56112__$1 = state_56112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56112__$1,(4),ch);
} else {
if((state_val_56113 === (11))){
var inst_56092 = (state_56112[(2)]);
var inst_56093 = (new Array(n));
var inst_56076 = inst_56093;
var inst_56077 = (0);
var state_56112__$1 = (function (){var statearr_56124 = state_56112;
(statearr_56124[(10)] = inst_56092);

(statearr_56124[(7)] = inst_56076);

(statearr_56124[(8)] = inst_56077);

return statearr_56124;
})();
var statearr_56125_56881 = state_56112__$1;
(statearr_56125_56881[(2)] = null);

(statearr_56125_56881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (9))){
var inst_56076 = (state_56112[(7)]);
var inst_56090 = cljs.core.vec(inst_56076);
var state_56112__$1 = state_56112;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56112__$1,(11),out,inst_56090);
} else {
if((state_val_56113 === (5))){
var inst_56076 = (state_56112[(7)]);
var inst_56077 = (state_56112[(8)]);
var inst_56080 = (state_56112[(9)]);
var inst_56085 = (state_56112[(11)]);
var inst_56084 = (inst_56076[inst_56077] = inst_56080);
var inst_56085__$1 = (inst_56077 + (1));
var inst_56086 = (inst_56085__$1 < n);
var state_56112__$1 = (function (){var statearr_56126 = state_56112;
(statearr_56126[(12)] = inst_56084);

(statearr_56126[(11)] = inst_56085__$1);

return statearr_56126;
})();
if(cljs.core.truth_(inst_56086)){
var statearr_56127_56884 = state_56112__$1;
(statearr_56127_56884[(1)] = (8));

} else {
var statearr_56128_56885 = state_56112__$1;
(statearr_56128_56885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (14))){
var inst_56105 = (state_56112[(2)]);
var inst_56106 = cljs.core.async.close_BANG_(out);
var state_56112__$1 = (function (){var statearr_56130 = state_56112;
(statearr_56130[(13)] = inst_56105);

return statearr_56130;
})();
var statearr_56131_56887 = state_56112__$1;
(statearr_56131_56887[(2)] = inst_56106);

(statearr_56131_56887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (10))){
var inst_56096 = (state_56112[(2)]);
var state_56112__$1 = state_56112;
var statearr_56132_56888 = state_56112__$1;
(statearr_56132_56888[(2)] = inst_56096);

(statearr_56132_56888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56113 === (8))){
var inst_56076 = (state_56112[(7)]);
var inst_56085 = (state_56112[(11)]);
var tmp56129 = inst_56076;
var inst_56076__$1 = tmp56129;
var inst_56077 = inst_56085;
var state_56112__$1 = (function (){var statearr_56133 = state_56112;
(statearr_56133[(7)] = inst_56076__$1);

(statearr_56133[(8)] = inst_56077);

return statearr_56133;
})();
var statearr_56134_56889 = state_56112__$1;
(statearr_56134_56889[(2)] = null);

(statearr_56134_56889[(1)] = (2));


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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_56135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56135[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_56135[(1)] = (1));

return statearr_56135;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_56112){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_56112);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e56136){var ex__54525__auto__ = e56136;
var statearr_56137_56890 = state_56112;
(statearr_56137_56890[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_56112[(4)]))){
var statearr_56138_56891 = state_56112;
(statearr_56138_56891[(1)] = cljs.core.first((state_56112[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56892 = state_56112;
state_56112 = G__56892;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_56112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_56112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_56139 = f__54597__auto__();
(statearr_56139[(6)] = c__54596__auto___56872);

return statearr_56139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56141 = arguments.length;
switch (G__56141) {
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
var c__54596__auto___56894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54597__auto__ = (function (){var switch__54521__auto__ = (function (state_56186){
var state_val_56187 = (state_56186[(1)]);
if((state_val_56187 === (7))){
var inst_56182 = (state_56186[(2)]);
var state_56186__$1 = state_56186;
var statearr_56188_56895 = state_56186__$1;
(statearr_56188_56895[(2)] = inst_56182);

(statearr_56188_56895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (1))){
var inst_56142 = [];
var inst_56143 = inst_56142;
var inst_56144 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56186__$1 = (function (){var statearr_56189 = state_56186;
(statearr_56189[(7)] = inst_56143);

(statearr_56189[(8)] = inst_56144);

return statearr_56189;
})();
var statearr_56190_56896 = state_56186__$1;
(statearr_56190_56896[(2)] = null);

(statearr_56190_56896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (4))){
var inst_56147 = (state_56186[(9)]);
var inst_56147__$1 = (state_56186[(2)]);
var inst_56148 = (inst_56147__$1 == null);
var inst_56149 = cljs.core.not(inst_56148);
var state_56186__$1 = (function (){var statearr_56191 = state_56186;
(statearr_56191[(9)] = inst_56147__$1);

return statearr_56191;
})();
if(inst_56149){
var statearr_56192_56897 = state_56186__$1;
(statearr_56192_56897[(1)] = (5));

} else {
var statearr_56193_56898 = state_56186__$1;
(statearr_56193_56898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (15))){
var inst_56143 = (state_56186[(7)]);
var inst_56174 = cljs.core.vec(inst_56143);
var state_56186__$1 = state_56186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56186__$1,(18),out,inst_56174);
} else {
if((state_val_56187 === (13))){
var inst_56169 = (state_56186[(2)]);
var state_56186__$1 = state_56186;
var statearr_56194_56899 = state_56186__$1;
(statearr_56194_56899[(2)] = inst_56169);

(statearr_56194_56899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (6))){
var inst_56143 = (state_56186[(7)]);
var inst_56171 = inst_56143.length;
var inst_56172 = (inst_56171 > (0));
var state_56186__$1 = state_56186;
if(cljs.core.truth_(inst_56172)){
var statearr_56195_56900 = state_56186__$1;
(statearr_56195_56900[(1)] = (15));

} else {
var statearr_56196_56901 = state_56186__$1;
(statearr_56196_56901[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (17))){
var inst_56179 = (state_56186[(2)]);
var inst_56180 = cljs.core.async.close_BANG_(out);
var state_56186__$1 = (function (){var statearr_56197 = state_56186;
(statearr_56197[(10)] = inst_56179);

return statearr_56197;
})();
var statearr_56198_56902 = state_56186__$1;
(statearr_56198_56902[(2)] = inst_56180);

(statearr_56198_56902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (3))){
var inst_56184 = (state_56186[(2)]);
var state_56186__$1 = state_56186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56186__$1,inst_56184);
} else {
if((state_val_56187 === (12))){
var inst_56143 = (state_56186[(7)]);
var inst_56162 = cljs.core.vec(inst_56143);
var state_56186__$1 = state_56186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56186__$1,(14),out,inst_56162);
} else {
if((state_val_56187 === (2))){
var state_56186__$1 = state_56186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56186__$1,(4),ch);
} else {
if((state_val_56187 === (11))){
var inst_56143 = (state_56186[(7)]);
var inst_56147 = (state_56186[(9)]);
var inst_56151 = (state_56186[(11)]);
var inst_56159 = inst_56143.push(inst_56147);
var tmp56199 = inst_56143;
var inst_56143__$1 = tmp56199;
var inst_56144 = inst_56151;
var state_56186__$1 = (function (){var statearr_56200 = state_56186;
(statearr_56200[(12)] = inst_56159);

(statearr_56200[(7)] = inst_56143__$1);

(statearr_56200[(8)] = inst_56144);

return statearr_56200;
})();
var statearr_56201_56903 = state_56186__$1;
(statearr_56201_56903[(2)] = null);

(statearr_56201_56903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (9))){
var inst_56144 = (state_56186[(8)]);
var inst_56155 = cljs.core.keyword_identical_QMARK_(inst_56144,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_56186__$1 = state_56186;
var statearr_56202_56904 = state_56186__$1;
(statearr_56202_56904[(2)] = inst_56155);

(statearr_56202_56904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (5))){
var inst_56147 = (state_56186[(9)]);
var inst_56151 = (state_56186[(11)]);
var inst_56144 = (state_56186[(8)]);
var inst_56152 = (state_56186[(13)]);
var inst_56151__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56147) : f.call(null,inst_56147));
var inst_56152__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56151__$1,inst_56144);
var state_56186__$1 = (function (){var statearr_56203 = state_56186;
(statearr_56203[(11)] = inst_56151__$1);

(statearr_56203[(13)] = inst_56152__$1);

return statearr_56203;
})();
if(inst_56152__$1){
var statearr_56204_56905 = state_56186__$1;
(statearr_56204_56905[(1)] = (8));

} else {
var statearr_56205_56906 = state_56186__$1;
(statearr_56205_56906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (14))){
var inst_56147 = (state_56186[(9)]);
var inst_56151 = (state_56186[(11)]);
var inst_56164 = (state_56186[(2)]);
var inst_56165 = [];
var inst_56166 = inst_56165.push(inst_56147);
var inst_56143 = inst_56165;
var inst_56144 = inst_56151;
var state_56186__$1 = (function (){var statearr_56206 = state_56186;
(statearr_56206[(14)] = inst_56164);

(statearr_56206[(15)] = inst_56166);

(statearr_56206[(7)] = inst_56143);

(statearr_56206[(8)] = inst_56144);

return statearr_56206;
})();
var statearr_56207_56907 = state_56186__$1;
(statearr_56207_56907[(2)] = null);

(statearr_56207_56907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (16))){
var state_56186__$1 = state_56186;
var statearr_56208_56908 = state_56186__$1;
(statearr_56208_56908[(2)] = null);

(statearr_56208_56908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (10))){
var inst_56157 = (state_56186[(2)]);
var state_56186__$1 = state_56186;
if(cljs.core.truth_(inst_56157)){
var statearr_56209_56909 = state_56186__$1;
(statearr_56209_56909[(1)] = (11));

} else {
var statearr_56210_56910 = state_56186__$1;
(statearr_56210_56910[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (18))){
var inst_56176 = (state_56186[(2)]);
var state_56186__$1 = state_56186;
var statearr_56211_56911 = state_56186__$1;
(statearr_56211_56911[(2)] = inst_56176);

(statearr_56211_56911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56187 === (8))){
var inst_56152 = (state_56186[(13)]);
var state_56186__$1 = state_56186;
var statearr_56212_56912 = state_56186__$1;
(statearr_56212_56912[(2)] = inst_56152);

(statearr_56212_56912[(1)] = (10));


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
var cljs$core$async$state_machine__54522__auto__ = null;
var cljs$core$async$state_machine__54522__auto____0 = (function (){
var statearr_56213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56213[(0)] = cljs$core$async$state_machine__54522__auto__);

(statearr_56213[(1)] = (1));

return statearr_56213;
});
var cljs$core$async$state_machine__54522__auto____1 = (function (state_56186){
while(true){
var ret_value__54523__auto__ = (function (){try{while(true){
var result__54524__auto__ = switch__54521__auto__(state_56186);
if(cljs.core.keyword_identical_QMARK_(result__54524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54524__auto__;
}
break;
}
}catch (e56214){var ex__54525__auto__ = e56214;
var statearr_56215_56913 = state_56186;
(statearr_56215_56913[(2)] = ex__54525__auto__);


if(cljs.core.seq((state_56186[(4)]))){
var statearr_56216_56914 = state_56186;
(statearr_56216_56914[(1)] = cljs.core.first((state_56186[(4)])));

} else {
throw ex__54525__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56915 = state_56186;
state_56186 = G__56915;
continue;
} else {
return ret_value__54523__auto__;
}
break;
}
});
cljs$core$async$state_machine__54522__auto__ = function(state_56186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54522__auto____1.call(this,state_56186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54522__auto____0;
cljs$core$async$state_machine__54522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54522__auto____1;
return cljs$core$async$state_machine__54522__auto__;
})()
})();
var state__54598__auto__ = (function (){var statearr_56217 = f__54597__auto__();
(statearr_56217[(6)] = c__54596__auto___56894);

return statearr_56217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54598__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
