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
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
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
cljs.core.async.t_cljs$core$async54531 = (function (f,blockable,meta54532){
this.f = f;
this.blockable = blockable;
this.meta54532 = meta54532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54533,meta54532__$1){
var self__ = this;
var _54533__$1 = this;
return (new cljs.core.async.t_cljs$core$async54531(self__.f,self__.blockable,meta54532__$1));
}));

(cljs.core.async.t_cljs$core$async54531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54533){
var self__ = this;
var _54533__$1 = this;
return self__.meta54532;
}));

(cljs.core.async.t_cljs$core$async54531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async54531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async54531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta54532","meta54532",2134374512,null)], null);
}));

(cljs.core.async.t_cljs$core$async54531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54531");

(cljs.core.async.t_cljs$core$async54531.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54531.
 */
cljs.core.async.__GT_t_cljs$core$async54531 = (function cljs$core$async$__GT_t_cljs$core$async54531(f,blockable,meta54532){
return (new cljs.core.async.t_cljs$core$async54531(f,blockable,meta54532));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__54530 = arguments.length;
switch (G__54530) {
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
return (new cljs.core.async.t_cljs$core$async54531(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__54540 = arguments.length;
switch (G__54540) {
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
var G__54546 = arguments.length;
switch (G__54546) {
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
var G__54548 = arguments.length;
switch (G__54548) {
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
var val_56102 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56102) : fn1.call(null,val_56102));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_56102) : fn1.call(null,val_56102));
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
var G__54554 = arguments.length;
switch (G__54554) {
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
var n__5616__auto___56109 = n;
var x_56110 = (0);
while(true){
if((x_56110 < n__5616__auto___56109)){
(a[x_56110] = x_56110);

var G__56111 = (x_56110 + (1));
x_56110 = G__56111;
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
cljs.core.async.t_cljs$core$async54575 = (function (flag,meta54576){
this.flag = flag;
this.meta54576 = meta54576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54577,meta54576__$1){
var self__ = this;
var _54577__$1 = this;
return (new cljs.core.async.t_cljs$core$async54575(self__.flag,meta54576__$1));
}));

(cljs.core.async.t_cljs$core$async54575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54577){
var self__ = this;
var _54577__$1 = this;
return self__.meta54576;
}));

(cljs.core.async.t_cljs$core$async54575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async54575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta54576","meta54576",582015624,null)], null);
}));

(cljs.core.async.t_cljs$core$async54575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54575");

(cljs.core.async.t_cljs$core$async54575.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54575.
 */
cljs.core.async.__GT_t_cljs$core$async54575 = (function cljs$core$async$__GT_t_cljs$core$async54575(flag,meta54576){
return (new cljs.core.async.t_cljs$core$async54575(flag,meta54576));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async54575(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async54583 = (function (flag,cb,meta54584){
this.flag = flag;
this.cb = cb;
this.meta54584 = meta54584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async54583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54585,meta54584__$1){
var self__ = this;
var _54585__$1 = this;
return (new cljs.core.async.t_cljs$core$async54583(self__.flag,self__.cb,meta54584__$1));
}));

(cljs.core.async.t_cljs$core$async54583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54585){
var self__ = this;
var _54585__$1 = this;
return self__.meta54584;
}));

(cljs.core.async.t_cljs$core$async54583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async54583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async54583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async54583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async54583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta54584","meta54584",-231807106,null)], null);
}));

(cljs.core.async.t_cljs$core$async54583.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async54583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async54583");

(cljs.core.async.t_cljs$core$async54583.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async54583");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async54583.
 */
cljs.core.async.__GT_t_cljs$core$async54583 = (function cljs$core$async$__GT_t_cljs$core$async54583(flag,cb,meta54584){
return (new cljs.core.async.t_cljs$core$async54583(flag,cb,meta54584));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async54583(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_56117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_56117)){
if((!(((port_56117.cljs$core$IFn$_invoke$arity$1 ? port_56117.cljs$core$IFn$_invoke$arity$1((1)) : port_56117.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__56118 = (i + (1));
i = G__56118;
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
return (function (p1__54586_SHARP_){
var G__54588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54586_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54588) : fret.call(null,G__54588));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__54587_SHARP_){
var G__54589 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__54587_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__54589) : fret.call(null,G__54589));
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
var G__56119 = (i + (1));
i = G__56119;
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
var len__5749__auto___56120 = arguments.length;
var i__5750__auto___56121 = (0);
while(true){
if((i__5750__auto___56121 < len__5749__auto___56120)){
args__5755__auto__.push((arguments[i__5750__auto___56121]));

var G__56122 = (i__5750__auto___56121 + (1));
i__5750__auto___56121 = G__56122;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__54592){
var map__54593 = p__54592;
var map__54593__$1 = cljs.core.__destructure_map(map__54593);
var opts = map__54593__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq54590){
var G__54591 = cljs.core.first(seq54590);
var seq54590__$1 = cljs.core.next(seq54590);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54591,seq54590__$1);
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
var G__54596 = arguments.length;
switch (G__54596) {
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
var c__54470__auto___56124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_54709){
var state_val_54710 = (state_54709[(1)]);
if((state_val_54710 === (7))){
var inst_54684 = (state_54709[(2)]);
var state_54709__$1 = state_54709;
var statearr_54712_56125 = state_54709__$1;
(statearr_54712_56125[(2)] = inst_54684);

(statearr_54712_56125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (1))){
var state_54709__$1 = state_54709;
var statearr_54713_56126 = state_54709__$1;
(statearr_54713_56126[(2)] = null);

(statearr_54713_56126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (4))){
var inst_54630 = (state_54709[(7)]);
var inst_54630__$1 = (state_54709[(2)]);
var inst_54647 = (inst_54630__$1 == null);
var state_54709__$1 = (function (){var statearr_54726 = state_54709;
(statearr_54726[(7)] = inst_54630__$1);

return statearr_54726;
})();
if(cljs.core.truth_(inst_54647)){
var statearr_54727_56127 = state_54709__$1;
(statearr_54727_56127[(1)] = (5));

} else {
var statearr_54728_56128 = state_54709__$1;
(statearr_54728_56128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (13))){
var state_54709__$1 = state_54709;
var statearr_54729_56129 = state_54709__$1;
(statearr_54729_56129[(2)] = null);

(statearr_54729_56129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (6))){
var inst_54630 = (state_54709[(7)]);
var state_54709__$1 = state_54709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54709__$1,(11),to,inst_54630);
} else {
if((state_val_54710 === (3))){
var inst_54697 = (state_54709[(2)]);
var state_54709__$1 = state_54709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54709__$1,inst_54697);
} else {
if((state_val_54710 === (12))){
var state_54709__$1 = state_54709;
var statearr_54731_56130 = state_54709__$1;
(statearr_54731_56130[(2)] = null);

(statearr_54731_56130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (2))){
var state_54709__$1 = state_54709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54709__$1,(4),from);
} else {
if((state_val_54710 === (11))){
var inst_54672 = (state_54709[(2)]);
var state_54709__$1 = state_54709;
if(cljs.core.truth_(inst_54672)){
var statearr_54732_56131 = state_54709__$1;
(statearr_54732_56131[(1)] = (12));

} else {
var statearr_54733_56132 = state_54709__$1;
(statearr_54733_56132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (9))){
var state_54709__$1 = state_54709;
var statearr_54734_56133 = state_54709__$1;
(statearr_54734_56133[(2)] = null);

(statearr_54734_56133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (5))){
var state_54709__$1 = state_54709;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54735_56134 = state_54709__$1;
(statearr_54735_56134[(1)] = (8));

} else {
var statearr_54736_56135 = state_54709__$1;
(statearr_54736_56135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (14))){
var inst_54682 = (state_54709[(2)]);
var state_54709__$1 = state_54709;
var statearr_54737_56136 = state_54709__$1;
(statearr_54737_56136[(2)] = inst_54682);

(statearr_54737_56136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (10))){
var inst_54664 = (state_54709[(2)]);
var state_54709__$1 = state_54709;
var statearr_54738_56137 = state_54709__$1;
(statearr_54738_56137[(2)] = inst_54664);

(statearr_54738_56137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54710 === (8))){
var inst_54650 = cljs.core.async.close_BANG_(to);
var state_54709__$1 = state_54709;
var statearr_54739_56138 = state_54709__$1;
(statearr_54739_56138[(2)] = inst_54650);

(statearr_54739_56138[(1)] = (10));


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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_54740 = [null,null,null,null,null,null,null,null];
(statearr_54740[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_54740[(1)] = (1));

return statearr_54740;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_54709){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54709);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e54741){var ex__54399__auto__ = e54741;
var statearr_54742_56139 = state_54709;
(statearr_54742_56139[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54709[(4)]))){
var statearr_54743_56140 = state_54709;
(statearr_54743_56140[(1)] = cljs.core.first((state_54709[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56141 = state_54709;
state_54709 = G__56141;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_54709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_54709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_54744 = f__54471__auto__();
(statearr_54744[(6)] = c__54470__auto___56124);

return statearr_54744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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
var process__$1 = (function (p__54745){
var vec__54746 = p__54745;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54746,(1),null);
var job = vec__54746;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__54470__auto___56142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_54753){
var state_val_54754 = (state_54753[(1)]);
if((state_val_54754 === (1))){
var state_54753__$1 = state_54753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54753__$1,(2),res,v);
} else {
if((state_val_54754 === (2))){
var inst_54750 = (state_54753[(2)]);
var inst_54751 = cljs.core.async.close_BANG_(res);
var state_54753__$1 = (function (){var statearr_54755 = state_54753;
(statearr_54755[(7)] = inst_54750);

return statearr_54755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54753__$1,inst_54751);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0 = (function (){
var statearr_54756 = [null,null,null,null,null,null,null,null];
(statearr_54756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__);

(statearr_54756[(1)] = (1));

return statearr_54756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1 = (function (state_54753){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54753);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e54757){var ex__54399__auto__ = e54757;
var statearr_54758_56143 = state_54753;
(statearr_54758_56143[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54753[(4)]))){
var statearr_54759_56144 = state_54753;
(statearr_54759_56144[(1)] = cljs.core.first((state_54753[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56145 = state_54753;
state_54753 = G__56145;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = function(state_54753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1.call(this,state_54753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_54760 = f__54471__auto__();
(statearr_54760[(6)] = c__54470__auto___56142);

return statearr_54760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__54761){
var vec__54762 = p__54761;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54762,(1),null);
var job = vec__54762;
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
var n__5616__auto___56146 = n;
var __56147 = (0);
while(true){
if((__56147 < n__5616__auto___56146)){
var G__54765_56148 = type;
var G__54765_56149__$1 = (((G__54765_56148 instanceof cljs.core.Keyword))?G__54765_56148.fqn:null);
switch (G__54765_56149__$1) {
case "compute":
var c__54470__auto___56151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56147,c__54470__auto___56151,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async){
return (function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = ((function (__56147,c__54470__auto___56151,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async){
return (function (state_54778){
var state_val_54779 = (state_54778[(1)]);
if((state_val_54779 === (1))){
var state_54778__$1 = state_54778;
var statearr_54780_56152 = state_54778__$1;
(statearr_54780_56152[(2)] = null);

(statearr_54780_56152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54779 === (2))){
var state_54778__$1 = state_54778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54778__$1,(4),jobs);
} else {
if((state_val_54779 === (3))){
var inst_54776 = (state_54778[(2)]);
var state_54778__$1 = state_54778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54778__$1,inst_54776);
} else {
if((state_val_54779 === (4))){
var inst_54768 = (state_54778[(2)]);
var inst_54769 = process__$1(inst_54768);
var state_54778__$1 = state_54778;
if(cljs.core.truth_(inst_54769)){
var statearr_54781_56153 = state_54778__$1;
(statearr_54781_56153[(1)] = (5));

} else {
var statearr_54782_56154 = state_54778__$1;
(statearr_54782_56154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54779 === (5))){
var state_54778__$1 = state_54778;
var statearr_54783_56155 = state_54778__$1;
(statearr_54783_56155[(2)] = null);

(statearr_54783_56155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54779 === (6))){
var state_54778__$1 = state_54778;
var statearr_54784_56156 = state_54778__$1;
(statearr_54784_56156[(2)] = null);

(statearr_54784_56156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54779 === (7))){
var inst_54774 = (state_54778[(2)]);
var state_54778__$1 = state_54778;
var statearr_54785_56157 = state_54778__$1;
(statearr_54785_56157[(2)] = inst_54774);

(statearr_54785_56157[(1)] = (3));


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
});})(__56147,c__54470__auto___56151,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async))
;
return ((function (__56147,switch__54395__auto__,c__54470__auto___56151,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0 = (function (){
var statearr_54786 = [null,null,null,null,null,null,null];
(statearr_54786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__);

(statearr_54786[(1)] = (1));

return statearr_54786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1 = (function (state_54778){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54778);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e54787){var ex__54399__auto__ = e54787;
var statearr_54788_56158 = state_54778;
(statearr_54788_56158[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54778[(4)]))){
var statearr_54789_56159 = state_54778;
(statearr_54789_56159[(1)] = cljs.core.first((state_54778[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56160 = state_54778;
state_54778 = G__56160;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = function(state_54778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1.call(this,state_54778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__;
})()
;})(__56147,switch__54395__auto__,c__54470__auto___56151,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async))
})();
var state__54472__auto__ = (function (){var statearr_54790 = f__54471__auto__();
(statearr_54790[(6)] = c__54470__auto___56151);

return statearr_54790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
});})(__56147,c__54470__auto___56151,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async))
);


break;
case "async":
var c__54470__auto___56161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__56147,c__54470__auto___56161,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async){
return (function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = ((function (__56147,c__54470__auto___56161,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async){
return (function (state_54803){
var state_val_54804 = (state_54803[(1)]);
if((state_val_54804 === (1))){
var state_54803__$1 = state_54803;
var statearr_54805_56162 = state_54803__$1;
(statearr_54805_56162[(2)] = null);

(statearr_54805_56162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (2))){
var state_54803__$1 = state_54803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54803__$1,(4),jobs);
} else {
if((state_val_54804 === (3))){
var inst_54801 = (state_54803[(2)]);
var state_54803__$1 = state_54803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54803__$1,inst_54801);
} else {
if((state_val_54804 === (4))){
var inst_54793 = (state_54803[(2)]);
var inst_54794 = async(inst_54793);
var state_54803__$1 = state_54803;
if(cljs.core.truth_(inst_54794)){
var statearr_54806_56163 = state_54803__$1;
(statearr_54806_56163[(1)] = (5));

} else {
var statearr_54807_56164 = state_54803__$1;
(statearr_54807_56164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (5))){
var state_54803__$1 = state_54803;
var statearr_54808_56165 = state_54803__$1;
(statearr_54808_56165[(2)] = null);

(statearr_54808_56165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (6))){
var state_54803__$1 = state_54803;
var statearr_54809_56166 = state_54803__$1;
(statearr_54809_56166[(2)] = null);

(statearr_54809_56166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54804 === (7))){
var inst_54799 = (state_54803[(2)]);
var state_54803__$1 = state_54803;
var statearr_54810_56167 = state_54803__$1;
(statearr_54810_56167[(2)] = inst_54799);

(statearr_54810_56167[(1)] = (3));


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
});})(__56147,c__54470__auto___56161,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async))
;
return ((function (__56147,switch__54395__auto__,c__54470__auto___56161,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0 = (function (){
var statearr_54811 = [null,null,null,null,null,null,null];
(statearr_54811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__);

(statearr_54811[(1)] = (1));

return statearr_54811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1 = (function (state_54803){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54803);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e54812){var ex__54399__auto__ = e54812;
var statearr_54813_56168 = state_54803;
(statearr_54813_56168[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54803[(4)]))){
var statearr_54814_56169 = state_54803;
(statearr_54814_56169[(1)] = cljs.core.first((state_54803[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56170 = state_54803;
state_54803 = G__56170;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = function(state_54803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1.call(this,state_54803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__;
})()
;})(__56147,switch__54395__auto__,c__54470__auto___56161,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async))
})();
var state__54472__auto__ = (function (){var statearr_54815 = f__54471__auto__();
(statearr_54815[(6)] = c__54470__auto___56161);

return statearr_54815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
});})(__56147,c__54470__auto___56161,G__54765_56148,G__54765_56149__$1,n__5616__auto___56146,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54765_56149__$1)].join('')));

}

var G__56171 = (__56147 + (1));
__56147 = G__56171;
continue;
} else {
}
break;
}

var c__54470__auto___56172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_54837){
var state_val_54838 = (state_54837[(1)]);
if((state_val_54838 === (7))){
var inst_54833 = (state_54837[(2)]);
var state_54837__$1 = state_54837;
var statearr_54839_56173 = state_54837__$1;
(statearr_54839_56173[(2)] = inst_54833);

(statearr_54839_56173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54838 === (1))){
var state_54837__$1 = state_54837;
var statearr_54840_56174 = state_54837__$1;
(statearr_54840_56174[(2)] = null);

(statearr_54840_56174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54838 === (4))){
var inst_54818 = (state_54837[(7)]);
var inst_54818__$1 = (state_54837[(2)]);
var inst_54819 = (inst_54818__$1 == null);
var state_54837__$1 = (function (){var statearr_54841 = state_54837;
(statearr_54841[(7)] = inst_54818__$1);

return statearr_54841;
})();
if(cljs.core.truth_(inst_54819)){
var statearr_54842_56175 = state_54837__$1;
(statearr_54842_56175[(1)] = (5));

} else {
var statearr_54843_56176 = state_54837__$1;
(statearr_54843_56176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54838 === (6))){
var inst_54818 = (state_54837[(7)]);
var inst_54823 = (state_54837[(8)]);
var inst_54823__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_54824 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54825 = [inst_54818,inst_54823__$1];
var inst_54826 = (new cljs.core.PersistentVector(null,2,(5),inst_54824,inst_54825,null));
var state_54837__$1 = (function (){var statearr_54844 = state_54837;
(statearr_54844[(8)] = inst_54823__$1);

return statearr_54844;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54837__$1,(8),jobs,inst_54826);
} else {
if((state_val_54838 === (3))){
var inst_54835 = (state_54837[(2)]);
var state_54837__$1 = state_54837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54837__$1,inst_54835);
} else {
if((state_val_54838 === (2))){
var state_54837__$1 = state_54837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54837__$1,(4),from);
} else {
if((state_val_54838 === (9))){
var inst_54830 = (state_54837[(2)]);
var state_54837__$1 = (function (){var statearr_54845 = state_54837;
(statearr_54845[(9)] = inst_54830);

return statearr_54845;
})();
var statearr_54846_56177 = state_54837__$1;
(statearr_54846_56177[(2)] = null);

(statearr_54846_56177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54838 === (5))){
var inst_54821 = cljs.core.async.close_BANG_(jobs);
var state_54837__$1 = state_54837;
var statearr_54847_56178 = state_54837__$1;
(statearr_54847_56178[(2)] = inst_54821);

(statearr_54847_56178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54838 === (8))){
var inst_54823 = (state_54837[(8)]);
var inst_54828 = (state_54837[(2)]);
var state_54837__$1 = (function (){var statearr_54848 = state_54837;
(statearr_54848[(10)] = inst_54828);

return statearr_54848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54837__$1,(9),results,inst_54823);
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
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0 = (function (){
var statearr_54849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__);

(statearr_54849[(1)] = (1));

return statearr_54849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1 = (function (state_54837){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54837);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e54850){var ex__54399__auto__ = e54850;
var statearr_54851_56179 = state_54837;
(statearr_54851_56179[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54837[(4)]))){
var statearr_54852_56180 = state_54837;
(statearr_54852_56180[(1)] = cljs.core.first((state_54837[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56181 = state_54837;
state_54837 = G__56181;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = function(state_54837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1.call(this,state_54837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_54853 = f__54471__auto__();
(statearr_54853[(6)] = c__54470__auto___56172);

return statearr_54853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));


var c__54470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_54891){
var state_val_54892 = (state_54891[(1)]);
if((state_val_54892 === (7))){
var inst_54887 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
var statearr_54893_56184 = state_54891__$1;
(statearr_54893_56184[(2)] = inst_54887);

(statearr_54893_56184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (20))){
var state_54891__$1 = state_54891;
var statearr_54894_56185 = state_54891__$1;
(statearr_54894_56185[(2)] = null);

(statearr_54894_56185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (1))){
var state_54891__$1 = state_54891;
var statearr_54895_56188 = state_54891__$1;
(statearr_54895_56188[(2)] = null);

(statearr_54895_56188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (4))){
var inst_54856 = (state_54891[(7)]);
var inst_54856__$1 = (state_54891[(2)]);
var inst_54857 = (inst_54856__$1 == null);
var state_54891__$1 = (function (){var statearr_54896 = state_54891;
(statearr_54896[(7)] = inst_54856__$1);

return statearr_54896;
})();
if(cljs.core.truth_(inst_54857)){
var statearr_54897_56189 = state_54891__$1;
(statearr_54897_56189[(1)] = (5));

} else {
var statearr_54898_56190 = state_54891__$1;
(statearr_54898_56190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (15))){
var inst_54869 = (state_54891[(8)]);
var state_54891__$1 = state_54891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54891__$1,(18),to,inst_54869);
} else {
if((state_val_54892 === (21))){
var inst_54882 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
var statearr_54899_56191 = state_54891__$1;
(statearr_54899_56191[(2)] = inst_54882);

(statearr_54899_56191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (13))){
var inst_54884 = (state_54891[(2)]);
var state_54891__$1 = (function (){var statearr_54900 = state_54891;
(statearr_54900[(9)] = inst_54884);

return statearr_54900;
})();
var statearr_54901_56193 = state_54891__$1;
(statearr_54901_56193[(2)] = null);

(statearr_54901_56193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (6))){
var inst_54856 = (state_54891[(7)]);
var state_54891__$1 = state_54891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54891__$1,(11),inst_54856);
} else {
if((state_val_54892 === (17))){
var inst_54877 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
if(cljs.core.truth_(inst_54877)){
var statearr_54902_56197 = state_54891__$1;
(statearr_54902_56197[(1)] = (19));

} else {
var statearr_54903_56198 = state_54891__$1;
(statearr_54903_56198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (3))){
var inst_54889 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54891__$1,inst_54889);
} else {
if((state_val_54892 === (12))){
var inst_54866 = (state_54891[(10)]);
var state_54891__$1 = state_54891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54891__$1,(14),inst_54866);
} else {
if((state_val_54892 === (2))){
var state_54891__$1 = state_54891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54891__$1,(4),results);
} else {
if((state_val_54892 === (19))){
var state_54891__$1 = state_54891;
var statearr_54904_56199 = state_54891__$1;
(statearr_54904_56199[(2)] = null);

(statearr_54904_56199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (11))){
var inst_54866 = (state_54891[(2)]);
var state_54891__$1 = (function (){var statearr_54905 = state_54891;
(statearr_54905[(10)] = inst_54866);

return statearr_54905;
})();
var statearr_54906_56200 = state_54891__$1;
(statearr_54906_56200[(2)] = null);

(statearr_54906_56200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (9))){
var state_54891__$1 = state_54891;
var statearr_54907_56202 = state_54891__$1;
(statearr_54907_56202[(2)] = null);

(statearr_54907_56202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (5))){
var state_54891__$1 = state_54891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_54908_56206 = state_54891__$1;
(statearr_54908_56206[(1)] = (8));

} else {
var statearr_54909_56207 = state_54891__$1;
(statearr_54909_56207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (14))){
var inst_54869 = (state_54891[(8)]);
var inst_54871 = (state_54891[(11)]);
var inst_54869__$1 = (state_54891[(2)]);
var inst_54870 = (inst_54869__$1 == null);
var inst_54871__$1 = cljs.core.not(inst_54870);
var state_54891__$1 = (function (){var statearr_54910 = state_54891;
(statearr_54910[(8)] = inst_54869__$1);

(statearr_54910[(11)] = inst_54871__$1);

return statearr_54910;
})();
if(inst_54871__$1){
var statearr_54911_56208 = state_54891__$1;
(statearr_54911_56208[(1)] = (15));

} else {
var statearr_54912_56209 = state_54891__$1;
(statearr_54912_56209[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (16))){
var inst_54871 = (state_54891[(11)]);
var state_54891__$1 = state_54891;
var statearr_54913_56210 = state_54891__$1;
(statearr_54913_56210[(2)] = inst_54871);

(statearr_54913_56210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (10))){
var inst_54863 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
var statearr_54914_56211 = state_54891__$1;
(statearr_54914_56211[(2)] = inst_54863);

(statearr_54914_56211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (18))){
var inst_54874 = (state_54891[(2)]);
var state_54891__$1 = state_54891;
var statearr_54915_56212 = state_54891__$1;
(statearr_54915_56212[(2)] = inst_54874);

(statearr_54915_56212[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54892 === (8))){
var inst_54860 = cljs.core.async.close_BANG_(to);
var state_54891__$1 = state_54891;
var statearr_54916_56213 = state_54891__$1;
(statearr_54916_56213[(2)] = inst_54860);

(statearr_54916_56213[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0 = (function (){
var statearr_54917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54917[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__);

(statearr_54917[(1)] = (1));

return statearr_54917;
});
var cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1 = (function (state_54891){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54891);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e54918){var ex__54399__auto__ = e54918;
var statearr_54919_56218 = state_54891;
(statearr_54919_56218[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54891[(4)]))){
var statearr_54920_56219 = state_54891;
(statearr_54920_56219[(1)] = cljs.core.first((state_54891[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56220 = state_54891;
state_54891 = G__56220;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__ = function(state_54891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1.call(this,state_54891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__54396__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_54921 = f__54471__auto__();
(statearr_54921[(6)] = c__54470__auto__);

return statearr_54921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));

return c__54470__auto__;
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
var G__54923 = arguments.length;
switch (G__54923) {
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
var G__54925 = arguments.length;
switch (G__54925) {
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
var G__54927 = arguments.length;
switch (G__54927) {
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
var c__54470__auto___56234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_54953){
var state_val_54954 = (state_54953[(1)]);
if((state_val_54954 === (7))){
var inst_54949 = (state_54953[(2)]);
var state_54953__$1 = state_54953;
var statearr_54955_56235 = state_54953__$1;
(statearr_54955_56235[(2)] = inst_54949);

(statearr_54955_56235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (1))){
var state_54953__$1 = state_54953;
var statearr_54956_56236 = state_54953__$1;
(statearr_54956_56236[(2)] = null);

(statearr_54956_56236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (4))){
var inst_54930 = (state_54953[(7)]);
var inst_54930__$1 = (state_54953[(2)]);
var inst_54931 = (inst_54930__$1 == null);
var state_54953__$1 = (function (){var statearr_54957 = state_54953;
(statearr_54957[(7)] = inst_54930__$1);

return statearr_54957;
})();
if(cljs.core.truth_(inst_54931)){
var statearr_54958_56240 = state_54953__$1;
(statearr_54958_56240[(1)] = (5));

} else {
var statearr_54959_56241 = state_54953__$1;
(statearr_54959_56241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (13))){
var state_54953__$1 = state_54953;
var statearr_54960_56242 = state_54953__$1;
(statearr_54960_56242[(2)] = null);

(statearr_54960_56242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (6))){
var inst_54930 = (state_54953[(7)]);
var inst_54936 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_54930) : p.call(null,inst_54930));
var state_54953__$1 = state_54953;
if(cljs.core.truth_(inst_54936)){
var statearr_54961_56243 = state_54953__$1;
(statearr_54961_56243[(1)] = (9));

} else {
var statearr_54962_56244 = state_54953__$1;
(statearr_54962_56244[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (3))){
var inst_54951 = (state_54953[(2)]);
var state_54953__$1 = state_54953;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54953__$1,inst_54951);
} else {
if((state_val_54954 === (12))){
var state_54953__$1 = state_54953;
var statearr_54963_56248 = state_54953__$1;
(statearr_54963_56248[(2)] = null);

(statearr_54963_56248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (2))){
var state_54953__$1 = state_54953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54953__$1,(4),ch);
} else {
if((state_val_54954 === (11))){
var inst_54930 = (state_54953[(7)]);
var inst_54940 = (state_54953[(2)]);
var state_54953__$1 = state_54953;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_54953__$1,(8),inst_54940,inst_54930);
} else {
if((state_val_54954 === (9))){
var state_54953__$1 = state_54953;
var statearr_54964_56249 = state_54953__$1;
(statearr_54964_56249[(2)] = tc);

(statearr_54964_56249[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (5))){
var inst_54933 = cljs.core.async.close_BANG_(tc);
var inst_54934 = cljs.core.async.close_BANG_(fc);
var state_54953__$1 = (function (){var statearr_54965 = state_54953;
(statearr_54965[(8)] = inst_54933);

return statearr_54965;
})();
var statearr_54966_56250 = state_54953__$1;
(statearr_54966_56250[(2)] = inst_54934);

(statearr_54966_56250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (14))){
var inst_54947 = (state_54953[(2)]);
var state_54953__$1 = state_54953;
var statearr_54967_56251 = state_54953__$1;
(statearr_54967_56251[(2)] = inst_54947);

(statearr_54967_56251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (10))){
var state_54953__$1 = state_54953;
var statearr_54968_56252 = state_54953__$1;
(statearr_54968_56252[(2)] = fc);

(statearr_54968_56252[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54954 === (8))){
var inst_54942 = (state_54953[(2)]);
var state_54953__$1 = state_54953;
if(cljs.core.truth_(inst_54942)){
var statearr_54969_56253 = state_54953__$1;
(statearr_54969_56253[(1)] = (12));

} else {
var statearr_54970_56254 = state_54953__$1;
(statearr_54970_56254[(1)] = (13));

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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_54971 = [null,null,null,null,null,null,null,null,null];
(statearr_54971[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_54971[(1)] = (1));

return statearr_54971;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_54953){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54953);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e54972){var ex__54399__auto__ = e54972;
var statearr_54973_56255 = state_54953;
(statearr_54973_56255[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54953[(4)]))){
var statearr_54974_56256 = state_54953;
(statearr_54974_56256[(1)] = cljs.core.first((state_54953[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56257 = state_54953;
state_54953 = G__56257;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_54953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_54953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_54975 = f__54471__auto__();
(statearr_54975[(6)] = c__54470__auto___56234);

return statearr_54975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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
var c__54470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_54997){
var state_val_54998 = (state_54997[(1)]);
if((state_val_54998 === (7))){
var inst_54993 = (state_54997[(2)]);
var state_54997__$1 = state_54997;
var statearr_54999_56258 = state_54997__$1;
(statearr_54999_56258[(2)] = inst_54993);

(statearr_54999_56258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54998 === (1))){
var inst_54976 = init;
var inst_54977 = inst_54976;
var state_54997__$1 = (function (){var statearr_55000 = state_54997;
(statearr_55000[(7)] = inst_54977);

return statearr_55000;
})();
var statearr_55001_56259 = state_54997__$1;
(statearr_55001_56259[(2)] = null);

(statearr_55001_56259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54998 === (4))){
var inst_54980 = (state_54997[(8)]);
var inst_54980__$1 = (state_54997[(2)]);
var inst_54981 = (inst_54980__$1 == null);
var state_54997__$1 = (function (){var statearr_55002 = state_54997;
(statearr_55002[(8)] = inst_54980__$1);

return statearr_55002;
})();
if(cljs.core.truth_(inst_54981)){
var statearr_55003_56260 = state_54997__$1;
(statearr_55003_56260[(1)] = (5));

} else {
var statearr_55004_56261 = state_54997__$1;
(statearr_55004_56261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54998 === (6))){
var inst_54977 = (state_54997[(7)]);
var inst_54980 = (state_54997[(8)]);
var inst_54984 = (state_54997[(9)]);
var inst_54984__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_54977,inst_54980) : f.call(null,inst_54977,inst_54980));
var inst_54985 = cljs.core.reduced_QMARK_(inst_54984__$1);
var state_54997__$1 = (function (){var statearr_55005 = state_54997;
(statearr_55005[(9)] = inst_54984__$1);

return statearr_55005;
})();
if(inst_54985){
var statearr_55006_56262 = state_54997__$1;
(statearr_55006_56262[(1)] = (8));

} else {
var statearr_55007_56263 = state_54997__$1;
(statearr_55007_56263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54998 === (3))){
var inst_54995 = (state_54997[(2)]);
var state_54997__$1 = state_54997;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54997__$1,inst_54995);
} else {
if((state_val_54998 === (2))){
var state_54997__$1 = state_54997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54997__$1,(4),ch);
} else {
if((state_val_54998 === (9))){
var inst_54984 = (state_54997[(9)]);
var inst_54977 = inst_54984;
var state_54997__$1 = (function (){var statearr_55008 = state_54997;
(statearr_55008[(7)] = inst_54977);

return statearr_55008;
})();
var statearr_55009_56264 = state_54997__$1;
(statearr_55009_56264[(2)] = null);

(statearr_55009_56264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54998 === (5))){
var inst_54977 = (state_54997[(7)]);
var state_54997__$1 = state_54997;
var statearr_55010_56265 = state_54997__$1;
(statearr_55010_56265[(2)] = inst_54977);

(statearr_55010_56265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54998 === (10))){
var inst_54991 = (state_54997[(2)]);
var state_54997__$1 = state_54997;
var statearr_55011_56266 = state_54997__$1;
(statearr_55011_56266[(2)] = inst_54991);

(statearr_55011_56266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54998 === (8))){
var inst_54984 = (state_54997[(9)]);
var inst_54987 = cljs.core.deref(inst_54984);
var state_54997__$1 = state_54997;
var statearr_55012_56267 = state_54997__$1;
(statearr_55012_56267[(2)] = inst_54987);

(statearr_55012_56267[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__54396__auto__ = null;
var cljs$core$async$reduce_$_state_machine__54396__auto____0 = (function (){
var statearr_55013 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55013[(0)] = cljs$core$async$reduce_$_state_machine__54396__auto__);

(statearr_55013[(1)] = (1));

return statearr_55013;
});
var cljs$core$async$reduce_$_state_machine__54396__auto____1 = (function (state_54997){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_54997);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55014){var ex__54399__auto__ = e55014;
var statearr_55015_56268 = state_54997;
(statearr_55015_56268[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_54997[(4)]))){
var statearr_55016_56269 = state_54997;
(statearr_55016_56269[(1)] = cljs.core.first((state_54997[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56270 = state_54997;
state_54997 = G__56270;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__54396__auto__ = function(state_54997){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__54396__auto____1.call(this,state_54997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__54396__auto____0;
cljs$core$async$reduce_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__54396__auto____1;
return cljs$core$async$reduce_$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55017 = f__54471__auto__();
(statearr_55017[(6)] = c__54470__auto__);

return statearr_55017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));

return c__54470__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__54470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55023){
var state_val_55024 = (state_55023[(1)]);
if((state_val_55024 === (1))){
var inst_55018 = cljs.core.async.reduce(f__$1,init,ch);
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55023__$1,(2),inst_55018);
} else {
if((state_val_55024 === (2))){
var inst_55020 = (state_55023[(2)]);
var inst_55021 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_55020) : f__$1.call(null,inst_55020));
var state_55023__$1 = state_55023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55023__$1,inst_55021);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__54396__auto__ = null;
var cljs$core$async$transduce_$_state_machine__54396__auto____0 = (function (){
var statearr_55025 = [null,null,null,null,null,null,null];
(statearr_55025[(0)] = cljs$core$async$transduce_$_state_machine__54396__auto__);

(statearr_55025[(1)] = (1));

return statearr_55025;
});
var cljs$core$async$transduce_$_state_machine__54396__auto____1 = (function (state_55023){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55023);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55026){var ex__54399__auto__ = e55026;
var statearr_55027_56271 = state_55023;
(statearr_55027_56271[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55023[(4)]))){
var statearr_55028_56272 = state_55023;
(statearr_55028_56272[(1)] = cljs.core.first((state_55023[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56273 = state_55023;
state_55023 = G__56273;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__54396__auto__ = function(state_55023){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__54396__auto____1.call(this,state_55023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__54396__auto____0;
cljs$core$async$transduce_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__54396__auto____1;
return cljs$core$async$transduce_$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55029 = f__54471__auto__();
(statearr_55029[(6)] = c__54470__auto__);

return statearr_55029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));

return c__54470__auto__;
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
var G__55031 = arguments.length;
switch (G__55031) {
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
var c__54470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55056){
var state_val_55057 = (state_55056[(1)]);
if((state_val_55057 === (7))){
var inst_55038 = (state_55056[(2)]);
var state_55056__$1 = state_55056;
var statearr_55058_56275 = state_55056__$1;
(statearr_55058_56275[(2)] = inst_55038);

(statearr_55058_56275[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (1))){
var inst_55032 = cljs.core.seq(coll);
var inst_55033 = inst_55032;
var state_55056__$1 = (function (){var statearr_55059 = state_55056;
(statearr_55059[(7)] = inst_55033);

return statearr_55059;
})();
var statearr_55060_56276 = state_55056__$1;
(statearr_55060_56276[(2)] = null);

(statearr_55060_56276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (4))){
var inst_55033 = (state_55056[(7)]);
var inst_55036 = cljs.core.first(inst_55033);
var state_55056__$1 = state_55056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55056__$1,(7),ch,inst_55036);
} else {
if((state_val_55057 === (13))){
var inst_55050 = (state_55056[(2)]);
var state_55056__$1 = state_55056;
var statearr_55061_56277 = state_55056__$1;
(statearr_55061_56277[(2)] = inst_55050);

(statearr_55061_56277[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (6))){
var inst_55041 = (state_55056[(2)]);
var state_55056__$1 = state_55056;
if(cljs.core.truth_(inst_55041)){
var statearr_55062_56278 = state_55056__$1;
(statearr_55062_56278[(1)] = (8));

} else {
var statearr_55063_56279 = state_55056__$1;
(statearr_55063_56279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (3))){
var inst_55054 = (state_55056[(2)]);
var state_55056__$1 = state_55056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55056__$1,inst_55054);
} else {
if((state_val_55057 === (12))){
var state_55056__$1 = state_55056;
var statearr_55064_56280 = state_55056__$1;
(statearr_55064_56280[(2)] = null);

(statearr_55064_56280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (2))){
var inst_55033 = (state_55056[(7)]);
var state_55056__$1 = state_55056;
if(cljs.core.truth_(inst_55033)){
var statearr_55065_56285 = state_55056__$1;
(statearr_55065_56285[(1)] = (4));

} else {
var statearr_55066_56286 = state_55056__$1;
(statearr_55066_56286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (11))){
var inst_55047 = cljs.core.async.close_BANG_(ch);
var state_55056__$1 = state_55056;
var statearr_55067_56290 = state_55056__$1;
(statearr_55067_56290[(2)] = inst_55047);

(statearr_55067_56290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (9))){
var state_55056__$1 = state_55056;
if(cljs.core.truth_(close_QMARK_)){
var statearr_55068_56291 = state_55056__$1;
(statearr_55068_56291[(1)] = (11));

} else {
var statearr_55069_56292 = state_55056__$1;
(statearr_55069_56292[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (5))){
var inst_55033 = (state_55056[(7)]);
var state_55056__$1 = state_55056;
var statearr_55070_56294 = state_55056__$1;
(statearr_55070_56294[(2)] = inst_55033);

(statearr_55070_56294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (10))){
var inst_55052 = (state_55056[(2)]);
var state_55056__$1 = state_55056;
var statearr_55071_56299 = state_55056__$1;
(statearr_55071_56299[(2)] = inst_55052);

(statearr_55071_56299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55057 === (8))){
var inst_55033 = (state_55056[(7)]);
var inst_55043 = cljs.core.next(inst_55033);
var inst_55033__$1 = inst_55043;
var state_55056__$1 = (function (){var statearr_55072 = state_55056;
(statearr_55072[(7)] = inst_55033__$1);

return statearr_55072;
})();
var statearr_55073_56302 = state_55056__$1;
(statearr_55073_56302[(2)] = null);

(statearr_55073_56302[(1)] = (2));


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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_55074 = [null,null,null,null,null,null,null,null];
(statearr_55074[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_55074[(1)] = (1));

return statearr_55074;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55056){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55056);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55075){var ex__54399__auto__ = e55075;
var statearr_55076_56312 = state_55056;
(statearr_55076_56312[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55056[(4)]))){
var statearr_55077_56313 = state_55056;
(statearr_55077_56313[(1)] = cljs.core.first((state_55056[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56318 = state_55056;
state_55056 = G__56318;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55078 = f__54471__auto__();
(statearr_55078[(6)] = c__54470__auto__);

return statearr_55078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));

return c__54470__auto__;
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
var G__55080 = arguments.length;
switch (G__55080) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_56320 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_56320(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_56321 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_56321(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_56322 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_56322(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_56323 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_56323(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55081 = (function (ch,cs,meta55082){
this.ch = ch;
this.cs = cs;
this.meta55082 = meta55082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55083,meta55082__$1){
var self__ = this;
var _55083__$1 = this;
return (new cljs.core.async.t_cljs$core$async55081(self__.ch,self__.cs,meta55082__$1));
}));

(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55083){
var self__ = this;
var _55083__$1 = this;
return self__.meta55082;
}));

(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async55081.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async55081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta55082","meta55082",-92088162,null)], null);
}));

(cljs.core.async.t_cljs$core$async55081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55081");

(cljs.core.async.t_cljs$core$async55081.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55081.
 */
cljs.core.async.__GT_t_cljs$core$async55081 = (function cljs$core$async$__GT_t_cljs$core$async55081(ch,cs,meta55082){
return (new cljs.core.async.t_cljs$core$async55081(ch,cs,meta55082));
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
var m = (new cljs.core.async.t_cljs$core$async55081(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__54470__auto___56324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55216){
var state_val_55217 = (state_55216[(1)]);
if((state_val_55217 === (7))){
var inst_55212 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55218_56325 = state_55216__$1;
(statearr_55218_56325[(2)] = inst_55212);

(statearr_55218_56325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (20))){
var inst_55117 = (state_55216[(7)]);
var inst_55129 = cljs.core.first(inst_55117);
var inst_55130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55129,(0),null);
var inst_55131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55129,(1),null);
var state_55216__$1 = (function (){var statearr_55219 = state_55216;
(statearr_55219[(8)] = inst_55130);

return statearr_55219;
})();
if(cljs.core.truth_(inst_55131)){
var statearr_55220_56326 = state_55216__$1;
(statearr_55220_56326[(1)] = (22));

} else {
var statearr_55221_56327 = state_55216__$1;
(statearr_55221_56327[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (27))){
var inst_55159 = (state_55216[(9)]);
var inst_55161 = (state_55216[(10)]);
var inst_55166 = (state_55216[(11)]);
var inst_55086 = (state_55216[(12)]);
var inst_55166__$1 = cljs.core._nth(inst_55159,inst_55161);
var inst_55167 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55166__$1,inst_55086,done);
var state_55216__$1 = (function (){var statearr_55222 = state_55216;
(statearr_55222[(11)] = inst_55166__$1);

return statearr_55222;
})();
if(cljs.core.truth_(inst_55167)){
var statearr_55223_56328 = state_55216__$1;
(statearr_55223_56328[(1)] = (30));

} else {
var statearr_55224_56329 = state_55216__$1;
(statearr_55224_56329[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (1))){
var state_55216__$1 = state_55216;
var statearr_55225_56330 = state_55216__$1;
(statearr_55225_56330[(2)] = null);

(statearr_55225_56330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (24))){
var inst_55117 = (state_55216[(7)]);
var inst_55136 = (state_55216[(2)]);
var inst_55137 = cljs.core.next(inst_55117);
var inst_55095 = inst_55137;
var inst_55096 = null;
var inst_55097 = (0);
var inst_55098 = (0);
var state_55216__$1 = (function (){var statearr_55226 = state_55216;
(statearr_55226[(13)] = inst_55136);

(statearr_55226[(14)] = inst_55095);

(statearr_55226[(15)] = inst_55096);

(statearr_55226[(16)] = inst_55097);

(statearr_55226[(17)] = inst_55098);

return statearr_55226;
})();
var statearr_55227_56331 = state_55216__$1;
(statearr_55227_56331[(2)] = null);

(statearr_55227_56331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (39))){
var state_55216__$1 = state_55216;
var statearr_55231_56332 = state_55216__$1;
(statearr_55231_56332[(2)] = null);

(statearr_55231_56332[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (4))){
var inst_55086 = (state_55216[(12)]);
var inst_55086__$1 = (state_55216[(2)]);
var inst_55087 = (inst_55086__$1 == null);
var state_55216__$1 = (function (){var statearr_55232 = state_55216;
(statearr_55232[(12)] = inst_55086__$1);

return statearr_55232;
})();
if(cljs.core.truth_(inst_55087)){
var statearr_55233_56333 = state_55216__$1;
(statearr_55233_56333[(1)] = (5));

} else {
var statearr_55234_56334 = state_55216__$1;
(statearr_55234_56334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (15))){
var inst_55098 = (state_55216[(17)]);
var inst_55095 = (state_55216[(14)]);
var inst_55096 = (state_55216[(15)]);
var inst_55097 = (state_55216[(16)]);
var inst_55113 = (state_55216[(2)]);
var inst_55114 = (inst_55098 + (1));
var tmp55228 = inst_55096;
var tmp55229 = inst_55097;
var tmp55230 = inst_55095;
var inst_55095__$1 = tmp55230;
var inst_55096__$1 = tmp55228;
var inst_55097__$1 = tmp55229;
var inst_55098__$1 = inst_55114;
var state_55216__$1 = (function (){var statearr_55235 = state_55216;
(statearr_55235[(18)] = inst_55113);

(statearr_55235[(14)] = inst_55095__$1);

(statearr_55235[(15)] = inst_55096__$1);

(statearr_55235[(16)] = inst_55097__$1);

(statearr_55235[(17)] = inst_55098__$1);

return statearr_55235;
})();
var statearr_55236_56335 = state_55216__$1;
(statearr_55236_56335[(2)] = null);

(statearr_55236_56335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (21))){
var inst_55140 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55240_56336 = state_55216__$1;
(statearr_55240_56336[(2)] = inst_55140);

(statearr_55240_56336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (31))){
var inst_55166 = (state_55216[(11)]);
var inst_55170 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55166);
var state_55216__$1 = state_55216;
var statearr_55241_56337 = state_55216__$1;
(statearr_55241_56337[(2)] = inst_55170);

(statearr_55241_56337[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (32))){
var inst_55161 = (state_55216[(10)]);
var inst_55158 = (state_55216[(19)]);
var inst_55159 = (state_55216[(9)]);
var inst_55160 = (state_55216[(20)]);
var inst_55172 = (state_55216[(2)]);
var inst_55173 = (inst_55161 + (1));
var tmp55237 = inst_55160;
var tmp55238 = inst_55159;
var tmp55239 = inst_55158;
var inst_55158__$1 = tmp55239;
var inst_55159__$1 = tmp55238;
var inst_55160__$1 = tmp55237;
var inst_55161__$1 = inst_55173;
var state_55216__$1 = (function (){var statearr_55242 = state_55216;
(statearr_55242[(21)] = inst_55172);

(statearr_55242[(19)] = inst_55158__$1);

(statearr_55242[(9)] = inst_55159__$1);

(statearr_55242[(20)] = inst_55160__$1);

(statearr_55242[(10)] = inst_55161__$1);

return statearr_55242;
})();
var statearr_55243_56338 = state_55216__$1;
(statearr_55243_56338[(2)] = null);

(statearr_55243_56338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (40))){
var inst_55185 = (state_55216[(22)]);
var inst_55189 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_55185);
var state_55216__$1 = state_55216;
var statearr_55244_56339 = state_55216__$1;
(statearr_55244_56339[(2)] = inst_55189);

(statearr_55244_56339[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (33))){
var inst_55176 = (state_55216[(23)]);
var inst_55178 = cljs.core.chunked_seq_QMARK_(inst_55176);
var state_55216__$1 = state_55216;
if(inst_55178){
var statearr_55245_56340 = state_55216__$1;
(statearr_55245_56340[(1)] = (36));

} else {
var statearr_55246_56341 = state_55216__$1;
(statearr_55246_56341[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (13))){
var inst_55107 = (state_55216[(24)]);
var inst_55110 = cljs.core.async.close_BANG_(inst_55107);
var state_55216__$1 = state_55216;
var statearr_55247_56342 = state_55216__$1;
(statearr_55247_56342[(2)] = inst_55110);

(statearr_55247_56342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (22))){
var inst_55130 = (state_55216[(8)]);
var inst_55133 = cljs.core.async.close_BANG_(inst_55130);
var state_55216__$1 = state_55216;
var statearr_55248_56343 = state_55216__$1;
(statearr_55248_56343[(2)] = inst_55133);

(statearr_55248_56343[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (36))){
var inst_55176 = (state_55216[(23)]);
var inst_55180 = cljs.core.chunk_first(inst_55176);
var inst_55181 = cljs.core.chunk_rest(inst_55176);
var inst_55182 = cljs.core.count(inst_55180);
var inst_55158 = inst_55181;
var inst_55159 = inst_55180;
var inst_55160 = inst_55182;
var inst_55161 = (0);
var state_55216__$1 = (function (){var statearr_55249 = state_55216;
(statearr_55249[(19)] = inst_55158);

(statearr_55249[(9)] = inst_55159);

(statearr_55249[(20)] = inst_55160);

(statearr_55249[(10)] = inst_55161);

return statearr_55249;
})();
var statearr_55250_56344 = state_55216__$1;
(statearr_55250_56344[(2)] = null);

(statearr_55250_56344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (41))){
var inst_55176 = (state_55216[(23)]);
var inst_55191 = (state_55216[(2)]);
var inst_55192 = cljs.core.next(inst_55176);
var inst_55158 = inst_55192;
var inst_55159 = null;
var inst_55160 = (0);
var inst_55161 = (0);
var state_55216__$1 = (function (){var statearr_55251 = state_55216;
(statearr_55251[(25)] = inst_55191);

(statearr_55251[(19)] = inst_55158);

(statearr_55251[(9)] = inst_55159);

(statearr_55251[(20)] = inst_55160);

(statearr_55251[(10)] = inst_55161);

return statearr_55251;
})();
var statearr_55252_56345 = state_55216__$1;
(statearr_55252_56345[(2)] = null);

(statearr_55252_56345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (43))){
var state_55216__$1 = state_55216;
var statearr_55253_56347 = state_55216__$1;
(statearr_55253_56347[(2)] = null);

(statearr_55253_56347[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (29))){
var inst_55200 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55254_56349 = state_55216__$1;
(statearr_55254_56349[(2)] = inst_55200);

(statearr_55254_56349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (44))){
var inst_55209 = (state_55216[(2)]);
var state_55216__$1 = (function (){var statearr_55255 = state_55216;
(statearr_55255[(26)] = inst_55209);

return statearr_55255;
})();
var statearr_55256_56350 = state_55216__$1;
(statearr_55256_56350[(2)] = null);

(statearr_55256_56350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (6))){
var inst_55150 = (state_55216[(27)]);
var inst_55149 = cljs.core.deref(cs);
var inst_55150__$1 = cljs.core.keys(inst_55149);
var inst_55151 = cljs.core.count(inst_55150__$1);
var inst_55152 = cljs.core.reset_BANG_(dctr,inst_55151);
var inst_55157 = cljs.core.seq(inst_55150__$1);
var inst_55158 = inst_55157;
var inst_55159 = null;
var inst_55160 = (0);
var inst_55161 = (0);
var state_55216__$1 = (function (){var statearr_55257 = state_55216;
(statearr_55257[(27)] = inst_55150__$1);

(statearr_55257[(28)] = inst_55152);

(statearr_55257[(19)] = inst_55158);

(statearr_55257[(9)] = inst_55159);

(statearr_55257[(20)] = inst_55160);

(statearr_55257[(10)] = inst_55161);

return statearr_55257;
})();
var statearr_55258_56351 = state_55216__$1;
(statearr_55258_56351[(2)] = null);

(statearr_55258_56351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (28))){
var inst_55158 = (state_55216[(19)]);
var inst_55176 = (state_55216[(23)]);
var inst_55176__$1 = cljs.core.seq(inst_55158);
var state_55216__$1 = (function (){var statearr_55259 = state_55216;
(statearr_55259[(23)] = inst_55176__$1);

return statearr_55259;
})();
if(inst_55176__$1){
var statearr_55260_56356 = state_55216__$1;
(statearr_55260_56356[(1)] = (33));

} else {
var statearr_55261_56357 = state_55216__$1;
(statearr_55261_56357[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (25))){
var inst_55161 = (state_55216[(10)]);
var inst_55160 = (state_55216[(20)]);
var inst_55163 = (inst_55161 < inst_55160);
var inst_55164 = inst_55163;
var state_55216__$1 = state_55216;
if(cljs.core.truth_(inst_55164)){
var statearr_55262_56358 = state_55216__$1;
(statearr_55262_56358[(1)] = (27));

} else {
var statearr_55263_56359 = state_55216__$1;
(statearr_55263_56359[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (34))){
var state_55216__$1 = state_55216;
var statearr_55264_56360 = state_55216__$1;
(statearr_55264_56360[(2)] = null);

(statearr_55264_56360[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (17))){
var state_55216__$1 = state_55216;
var statearr_55265_56361 = state_55216__$1;
(statearr_55265_56361[(2)] = null);

(statearr_55265_56361[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (3))){
var inst_55214 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55216__$1,inst_55214);
} else {
if((state_val_55217 === (12))){
var inst_55145 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55266_56362 = state_55216__$1;
(statearr_55266_56362[(2)] = inst_55145);

(statearr_55266_56362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (2))){
var state_55216__$1 = state_55216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55216__$1,(4),ch);
} else {
if((state_val_55217 === (23))){
var state_55216__$1 = state_55216;
var statearr_55267_56363 = state_55216__$1;
(statearr_55267_56363[(2)] = null);

(statearr_55267_56363[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (35))){
var inst_55198 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55268_56364 = state_55216__$1;
(statearr_55268_56364[(2)] = inst_55198);

(statearr_55268_56364[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (19))){
var inst_55117 = (state_55216[(7)]);
var inst_55121 = cljs.core.chunk_first(inst_55117);
var inst_55122 = cljs.core.chunk_rest(inst_55117);
var inst_55123 = cljs.core.count(inst_55121);
var inst_55095 = inst_55122;
var inst_55096 = inst_55121;
var inst_55097 = inst_55123;
var inst_55098 = (0);
var state_55216__$1 = (function (){var statearr_55269 = state_55216;
(statearr_55269[(14)] = inst_55095);

(statearr_55269[(15)] = inst_55096);

(statearr_55269[(16)] = inst_55097);

(statearr_55269[(17)] = inst_55098);

return statearr_55269;
})();
var statearr_55270_56365 = state_55216__$1;
(statearr_55270_56365[(2)] = null);

(statearr_55270_56365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (11))){
var inst_55095 = (state_55216[(14)]);
var inst_55117 = (state_55216[(7)]);
var inst_55117__$1 = cljs.core.seq(inst_55095);
var state_55216__$1 = (function (){var statearr_55271 = state_55216;
(statearr_55271[(7)] = inst_55117__$1);

return statearr_55271;
})();
if(inst_55117__$1){
var statearr_55272_56366 = state_55216__$1;
(statearr_55272_56366[(1)] = (16));

} else {
var statearr_55273_56367 = state_55216__$1;
(statearr_55273_56367[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (9))){
var inst_55147 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55274_56368 = state_55216__$1;
(statearr_55274_56368[(2)] = inst_55147);

(statearr_55274_56368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (5))){
var inst_55093 = cljs.core.deref(cs);
var inst_55094 = cljs.core.seq(inst_55093);
var inst_55095 = inst_55094;
var inst_55096 = null;
var inst_55097 = (0);
var inst_55098 = (0);
var state_55216__$1 = (function (){var statearr_55275 = state_55216;
(statearr_55275[(14)] = inst_55095);

(statearr_55275[(15)] = inst_55096);

(statearr_55275[(16)] = inst_55097);

(statearr_55275[(17)] = inst_55098);

return statearr_55275;
})();
var statearr_55276_56369 = state_55216__$1;
(statearr_55276_56369[(2)] = null);

(statearr_55276_56369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (14))){
var state_55216__$1 = state_55216;
var statearr_55277_56370 = state_55216__$1;
(statearr_55277_56370[(2)] = null);

(statearr_55277_56370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (45))){
var inst_55206 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55278_56371 = state_55216__$1;
(statearr_55278_56371[(2)] = inst_55206);

(statearr_55278_56371[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (26))){
var inst_55150 = (state_55216[(27)]);
var inst_55202 = (state_55216[(2)]);
var inst_55203 = cljs.core.seq(inst_55150);
var state_55216__$1 = (function (){var statearr_55279 = state_55216;
(statearr_55279[(29)] = inst_55202);

return statearr_55279;
})();
if(inst_55203){
var statearr_55280_56372 = state_55216__$1;
(statearr_55280_56372[(1)] = (42));

} else {
var statearr_55281_56373 = state_55216__$1;
(statearr_55281_56373[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (16))){
var inst_55117 = (state_55216[(7)]);
var inst_55119 = cljs.core.chunked_seq_QMARK_(inst_55117);
var state_55216__$1 = state_55216;
if(inst_55119){
var statearr_55282_56374 = state_55216__$1;
(statearr_55282_56374[(1)] = (19));

} else {
var statearr_55283_56375 = state_55216__$1;
(statearr_55283_56375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (38))){
var inst_55195 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55284_56376 = state_55216__$1;
(statearr_55284_56376[(2)] = inst_55195);

(statearr_55284_56376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (30))){
var state_55216__$1 = state_55216;
var statearr_55285_56377 = state_55216__$1;
(statearr_55285_56377[(2)] = null);

(statearr_55285_56377[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (10))){
var inst_55096 = (state_55216[(15)]);
var inst_55098 = (state_55216[(17)]);
var inst_55106 = cljs.core._nth(inst_55096,inst_55098);
var inst_55107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55106,(0),null);
var inst_55108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55106,(1),null);
var state_55216__$1 = (function (){var statearr_55286 = state_55216;
(statearr_55286[(24)] = inst_55107);

return statearr_55286;
})();
if(cljs.core.truth_(inst_55108)){
var statearr_55287_56378 = state_55216__$1;
(statearr_55287_56378[(1)] = (13));

} else {
var statearr_55288_56379 = state_55216__$1;
(statearr_55288_56379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (18))){
var inst_55143 = (state_55216[(2)]);
var state_55216__$1 = state_55216;
var statearr_55289_56380 = state_55216__$1;
(statearr_55289_56380[(2)] = inst_55143);

(statearr_55289_56380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (42))){
var state_55216__$1 = state_55216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55216__$1,(45),dchan);
} else {
if((state_val_55217 === (37))){
var inst_55176 = (state_55216[(23)]);
var inst_55185 = (state_55216[(22)]);
var inst_55086 = (state_55216[(12)]);
var inst_55185__$1 = cljs.core.first(inst_55176);
var inst_55186 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_55185__$1,inst_55086,done);
var state_55216__$1 = (function (){var statearr_55290 = state_55216;
(statearr_55290[(22)] = inst_55185__$1);

return statearr_55290;
})();
if(cljs.core.truth_(inst_55186)){
var statearr_55291_56381 = state_55216__$1;
(statearr_55291_56381[(1)] = (39));

} else {
var statearr_55292_56382 = state_55216__$1;
(statearr_55292_56382[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55217 === (8))){
var inst_55098 = (state_55216[(17)]);
var inst_55097 = (state_55216[(16)]);
var inst_55100 = (inst_55098 < inst_55097);
var inst_55101 = inst_55100;
var state_55216__$1 = state_55216;
if(cljs.core.truth_(inst_55101)){
var statearr_55293_56383 = state_55216__$1;
(statearr_55293_56383[(1)] = (10));

} else {
var statearr_55294_56384 = state_55216__$1;
(statearr_55294_56384[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__54396__auto__ = null;
var cljs$core$async$mult_$_state_machine__54396__auto____0 = (function (){
var statearr_55295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55295[(0)] = cljs$core$async$mult_$_state_machine__54396__auto__);

(statearr_55295[(1)] = (1));

return statearr_55295;
});
var cljs$core$async$mult_$_state_machine__54396__auto____1 = (function (state_55216){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55216);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55296){var ex__54399__auto__ = e55296;
var statearr_55297_56385 = state_55216;
(statearr_55297_56385[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55216[(4)]))){
var statearr_55298_56386 = state_55216;
(statearr_55298_56386[(1)] = cljs.core.first((state_55216[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56387 = state_55216;
state_55216 = G__56387;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__54396__auto__ = function(state_55216){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__54396__auto____1.call(this,state_55216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__54396__auto____0;
cljs$core$async$mult_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__54396__auto____1;
return cljs$core$async$mult_$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55299 = f__54471__auto__();
(statearr_55299[(6)] = c__54470__auto___56324);

return statearr_55299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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
var G__55301 = arguments.length;
switch (G__55301) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_56389 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_56389(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_56390 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_56390(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_56391 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_56391(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_56392 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_56392(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_56393 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_56393(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56394 = arguments.length;
var i__5750__auto___56395 = (0);
while(true){
if((i__5750__auto___56395 < len__5749__auto___56394)){
args__5755__auto__.push((arguments[i__5750__auto___56395]));

var G__56396 = (i__5750__auto___56395 + (1));
i__5750__auto___56395 = G__56396;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__55306){
var map__55307 = p__55306;
var map__55307__$1 = cljs.core.__destructure_map(map__55307);
var opts = map__55307__$1;
var statearr_55308_56397 = state;
(statearr_55308_56397[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_55309_56398 = state;
(statearr_55309_56398[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_55310_56399 = state;
(statearr_55310_56399[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq55302){
var G__55303 = cljs.core.first(seq55302);
var seq55302__$1 = cljs.core.next(seq55302);
var G__55304 = cljs.core.first(seq55302__$1);
var seq55302__$2 = cljs.core.next(seq55302__$1);
var G__55305 = cljs.core.first(seq55302__$2);
var seq55302__$3 = cljs.core.next(seq55302__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55303,G__55304,G__55305,seq55302__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55311 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55312){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta55312 = meta55312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55313,meta55312__$1){
var self__ = this;
var _55313__$1 = this;
return (new cljs.core.async.t_cljs$core$async55311(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta55312__$1));
}));

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55313){
var self__ = this;
var _55313__$1 = this;
return self__.meta55312;
}));

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55311.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async55311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta55312","meta55312",-188971549,null)], null);
}));

(cljs.core.async.t_cljs$core$async55311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55311");

(cljs.core.async.t_cljs$core$async55311.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55311.
 */
cljs.core.async.__GT_t_cljs$core$async55311 = (function cljs$core$async$__GT_t_cljs$core$async55311(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55312){
return (new cljs.core.async.t_cljs$core$async55311(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta55312));
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
var m = (new cljs.core.async.t_cljs$core$async55311(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__54470__auto___56400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55381){
var state_val_55382 = (state_55381[(1)]);
if((state_val_55382 === (7))){
var inst_55341 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
if(cljs.core.truth_(inst_55341)){
var statearr_55383_56401 = state_55381__$1;
(statearr_55383_56401[(1)] = (8));

} else {
var statearr_55384_56402 = state_55381__$1;
(statearr_55384_56402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (20))){
var inst_55334 = (state_55381[(7)]);
var state_55381__$1 = state_55381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55381__$1,(23),out,inst_55334);
} else {
if((state_val_55382 === (1))){
var inst_55317 = calc_state();
var inst_55318 = cljs.core.__destructure_map(inst_55317);
var inst_55319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55318,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55318,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55318,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_55322 = inst_55317;
var state_55381__$1 = (function (){var statearr_55385 = state_55381;
(statearr_55385[(8)] = inst_55319);

(statearr_55385[(9)] = inst_55320);

(statearr_55385[(10)] = inst_55321);

(statearr_55385[(11)] = inst_55322);

return statearr_55385;
})();
var statearr_55386_56403 = state_55381__$1;
(statearr_55386_56403[(2)] = null);

(statearr_55386_56403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (24))){
var inst_55325 = (state_55381[(12)]);
var inst_55322 = inst_55325;
var state_55381__$1 = (function (){var statearr_55387 = state_55381;
(statearr_55387[(11)] = inst_55322);

return statearr_55387;
})();
var statearr_55388_56404 = state_55381__$1;
(statearr_55388_56404[(2)] = null);

(statearr_55388_56404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (4))){
var inst_55334 = (state_55381[(7)]);
var inst_55336 = (state_55381[(13)]);
var inst_55333 = (state_55381[(2)]);
var inst_55334__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55333,(0),null);
var inst_55335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55333,(1),null);
var inst_55336__$1 = (inst_55334__$1 == null);
var state_55381__$1 = (function (){var statearr_55389 = state_55381;
(statearr_55389[(7)] = inst_55334__$1);

(statearr_55389[(14)] = inst_55335);

(statearr_55389[(13)] = inst_55336__$1);

return statearr_55389;
})();
if(cljs.core.truth_(inst_55336__$1)){
var statearr_55390_56405 = state_55381__$1;
(statearr_55390_56405[(1)] = (5));

} else {
var statearr_55391_56406 = state_55381__$1;
(statearr_55391_56406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (15))){
var inst_55326 = (state_55381[(15)]);
var inst_55355 = (state_55381[(16)]);
var inst_55355__$1 = cljs.core.empty_QMARK_(inst_55326);
var state_55381__$1 = (function (){var statearr_55392 = state_55381;
(statearr_55392[(16)] = inst_55355__$1);

return statearr_55392;
})();
if(inst_55355__$1){
var statearr_55393_56407 = state_55381__$1;
(statearr_55393_56407[(1)] = (17));

} else {
var statearr_55394_56408 = state_55381__$1;
(statearr_55394_56408[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (21))){
var inst_55325 = (state_55381[(12)]);
var inst_55322 = inst_55325;
var state_55381__$1 = (function (){var statearr_55395 = state_55381;
(statearr_55395[(11)] = inst_55322);

return statearr_55395;
})();
var statearr_55396_56409 = state_55381__$1;
(statearr_55396_56409[(2)] = null);

(statearr_55396_56409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (13))){
var inst_55348 = (state_55381[(2)]);
var inst_55349 = calc_state();
var inst_55322 = inst_55349;
var state_55381__$1 = (function (){var statearr_55397 = state_55381;
(statearr_55397[(17)] = inst_55348);

(statearr_55397[(11)] = inst_55322);

return statearr_55397;
})();
var statearr_55398_56410 = state_55381__$1;
(statearr_55398_56410[(2)] = null);

(statearr_55398_56410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (22))){
var inst_55375 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
var statearr_55399_56411 = state_55381__$1;
(statearr_55399_56411[(2)] = inst_55375);

(statearr_55399_56411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (6))){
var inst_55335 = (state_55381[(14)]);
var inst_55339 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55335,change);
var state_55381__$1 = state_55381;
var statearr_55400_56412 = state_55381__$1;
(statearr_55400_56412[(2)] = inst_55339);

(statearr_55400_56412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (25))){
var state_55381__$1 = state_55381;
var statearr_55401_56413 = state_55381__$1;
(statearr_55401_56413[(2)] = null);

(statearr_55401_56413[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (17))){
var inst_55327 = (state_55381[(18)]);
var inst_55335 = (state_55381[(14)]);
var inst_55357 = (inst_55327.cljs$core$IFn$_invoke$arity$1 ? inst_55327.cljs$core$IFn$_invoke$arity$1(inst_55335) : inst_55327.call(null,inst_55335));
var inst_55358 = cljs.core.not(inst_55357);
var state_55381__$1 = state_55381;
var statearr_55402_56414 = state_55381__$1;
(statearr_55402_56414[(2)] = inst_55358);

(statearr_55402_56414[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (3))){
var inst_55379 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55381__$1,inst_55379);
} else {
if((state_val_55382 === (12))){
var state_55381__$1 = state_55381;
var statearr_55403_56415 = state_55381__$1;
(statearr_55403_56415[(2)] = null);

(statearr_55403_56415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (2))){
var inst_55322 = (state_55381[(11)]);
var inst_55325 = (state_55381[(12)]);
var inst_55325__$1 = cljs.core.__destructure_map(inst_55322);
var inst_55326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55325__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_55327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55325__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_55328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55325__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_55381__$1 = (function (){var statearr_55404 = state_55381;
(statearr_55404[(12)] = inst_55325__$1);

(statearr_55404[(15)] = inst_55326);

(statearr_55404[(18)] = inst_55327);

return statearr_55404;
})();
return cljs.core.async.ioc_alts_BANG_(state_55381__$1,(4),inst_55328);
} else {
if((state_val_55382 === (23))){
var inst_55366 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
if(cljs.core.truth_(inst_55366)){
var statearr_55405_56416 = state_55381__$1;
(statearr_55405_56416[(1)] = (24));

} else {
var statearr_55406_56417 = state_55381__$1;
(statearr_55406_56417[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (19))){
var inst_55361 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
var statearr_55407_56419 = state_55381__$1;
(statearr_55407_56419[(2)] = inst_55361);

(statearr_55407_56419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (11))){
var inst_55335 = (state_55381[(14)]);
var inst_55345 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_55335);
var state_55381__$1 = state_55381;
var statearr_55408_56420 = state_55381__$1;
(statearr_55408_56420[(2)] = inst_55345);

(statearr_55408_56420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (9))){
var inst_55326 = (state_55381[(15)]);
var inst_55335 = (state_55381[(14)]);
var inst_55352 = (state_55381[(19)]);
var inst_55352__$1 = (inst_55326.cljs$core$IFn$_invoke$arity$1 ? inst_55326.cljs$core$IFn$_invoke$arity$1(inst_55335) : inst_55326.call(null,inst_55335));
var state_55381__$1 = (function (){var statearr_55409 = state_55381;
(statearr_55409[(19)] = inst_55352__$1);

return statearr_55409;
})();
if(cljs.core.truth_(inst_55352__$1)){
var statearr_55410_56421 = state_55381__$1;
(statearr_55410_56421[(1)] = (14));

} else {
var statearr_55411_56422 = state_55381__$1;
(statearr_55411_56422[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (5))){
var inst_55336 = (state_55381[(13)]);
var state_55381__$1 = state_55381;
var statearr_55412_56423 = state_55381__$1;
(statearr_55412_56423[(2)] = inst_55336);

(statearr_55412_56423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (14))){
var inst_55352 = (state_55381[(19)]);
var state_55381__$1 = state_55381;
var statearr_55413_56424 = state_55381__$1;
(statearr_55413_56424[(2)] = inst_55352);

(statearr_55413_56424[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (26))){
var inst_55371 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
var statearr_55414_56425 = state_55381__$1;
(statearr_55414_56425[(2)] = inst_55371);

(statearr_55414_56425[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (16))){
var inst_55363 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
if(cljs.core.truth_(inst_55363)){
var statearr_55415_56426 = state_55381__$1;
(statearr_55415_56426[(1)] = (20));

} else {
var statearr_55416_56427 = state_55381__$1;
(statearr_55416_56427[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (10))){
var inst_55377 = (state_55381[(2)]);
var state_55381__$1 = state_55381;
var statearr_55417_56428 = state_55381__$1;
(statearr_55417_56428[(2)] = inst_55377);

(statearr_55417_56428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (18))){
var inst_55355 = (state_55381[(16)]);
var state_55381__$1 = state_55381;
var statearr_55418_56429 = state_55381__$1;
(statearr_55418_56429[(2)] = inst_55355);

(statearr_55418_56429[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55382 === (8))){
var inst_55334 = (state_55381[(7)]);
var inst_55343 = (inst_55334 == null);
var state_55381__$1 = state_55381;
if(cljs.core.truth_(inst_55343)){
var statearr_55419_56431 = state_55381__$1;
(statearr_55419_56431[(1)] = (11));

} else {
var statearr_55420_56432 = state_55381__$1;
(statearr_55420_56432[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__54396__auto__ = null;
var cljs$core$async$mix_$_state_machine__54396__auto____0 = (function (){
var statearr_55421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55421[(0)] = cljs$core$async$mix_$_state_machine__54396__auto__);

(statearr_55421[(1)] = (1));

return statearr_55421;
});
var cljs$core$async$mix_$_state_machine__54396__auto____1 = (function (state_55381){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55381);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55422){var ex__54399__auto__ = e55422;
var statearr_55423_56433 = state_55381;
(statearr_55423_56433[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55381[(4)]))){
var statearr_55424_56434 = state_55381;
(statearr_55424_56434[(1)] = cljs.core.first((state_55381[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56435 = state_55381;
state_55381 = G__56435;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__54396__auto__ = function(state_55381){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__54396__auto____1.call(this,state_55381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__54396__auto____0;
cljs$core$async$mix_$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__54396__auto____1;
return cljs$core$async$mix_$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55425 = f__54471__auto__();
(statearr_55425[(6)] = c__54470__auto___56400);

return statearr_55425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_56440 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_56440(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_56445 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_56445(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_56450 = (function() {
var G__56451 = null;
var G__56451__1 = (function (p){
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
var G__56451__2 = (function (p,v){
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
G__56451 = function(p,v){
switch(arguments.length){
case 1:
return G__56451__1.call(this,p);
case 2:
return G__56451__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56451.cljs$core$IFn$_invoke$arity$1 = G__56451__1;
G__56451.cljs$core$IFn$_invoke$arity$2 = G__56451__2;
return G__56451;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__55427 = arguments.length;
switch (G__55427) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56450(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_56450(p,v);
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
cljs.core.async.t_cljs$core$async55431 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta55432){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta55432 = meta55432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55433,meta55432__$1){
var self__ = this;
var _55433__$1 = this;
return (new cljs.core.async.t_cljs$core$async55431(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta55432__$1));
}));

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55433){
var self__ = this;
var _55433__$1 = this;
return self__.meta55432;
}));

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async55431.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async55431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta55432","meta55432",1682772848,null)], null);
}));

(cljs.core.async.t_cljs$core$async55431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55431");

(cljs.core.async.t_cljs$core$async55431.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55431.
 */
cljs.core.async.__GT_t_cljs$core$async55431 = (function cljs$core$async$__GT_t_cljs$core$async55431(ch,topic_fn,buf_fn,mults,ensure_mult,meta55432){
return (new cljs.core.async.t_cljs$core$async55431(ch,topic_fn,buf_fn,mults,ensure_mult,meta55432));
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
var G__55430 = arguments.length;
switch (G__55430) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__55428_SHARP_){
if(cljs.core.truth_((p1__55428_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__55428_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__55428_SHARP_.call(null,topic)))){
return p1__55428_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55428_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async55431(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__54470__auto___56468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55505){
var state_val_55506 = (state_55505[(1)]);
if((state_val_55506 === (7))){
var inst_55501 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
var statearr_55507_56469 = state_55505__$1;
(statearr_55507_56469[(2)] = inst_55501);

(statearr_55507_56469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (20))){
var state_55505__$1 = state_55505;
var statearr_55508_56470 = state_55505__$1;
(statearr_55508_56470[(2)] = null);

(statearr_55508_56470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (1))){
var state_55505__$1 = state_55505;
var statearr_55509_56471 = state_55505__$1;
(statearr_55509_56471[(2)] = null);

(statearr_55509_56471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (24))){
var inst_55484 = (state_55505[(7)]);
var inst_55493 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_55484);
var state_55505__$1 = state_55505;
var statearr_55510_56472 = state_55505__$1;
(statearr_55510_56472[(2)] = inst_55493);

(statearr_55510_56472[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (4))){
var inst_55436 = (state_55505[(8)]);
var inst_55436__$1 = (state_55505[(2)]);
var inst_55437 = (inst_55436__$1 == null);
var state_55505__$1 = (function (){var statearr_55511 = state_55505;
(statearr_55511[(8)] = inst_55436__$1);

return statearr_55511;
})();
if(cljs.core.truth_(inst_55437)){
var statearr_55512_56473 = state_55505__$1;
(statearr_55512_56473[(1)] = (5));

} else {
var statearr_55513_56474 = state_55505__$1;
(statearr_55513_56474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (15))){
var inst_55478 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
var statearr_55514_56475 = state_55505__$1;
(statearr_55514_56475[(2)] = inst_55478);

(statearr_55514_56475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (21))){
var inst_55498 = (state_55505[(2)]);
var state_55505__$1 = (function (){var statearr_55515 = state_55505;
(statearr_55515[(9)] = inst_55498);

return statearr_55515;
})();
var statearr_55516_56476 = state_55505__$1;
(statearr_55516_56476[(2)] = null);

(statearr_55516_56476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (13))){
var inst_55460 = (state_55505[(10)]);
var inst_55462 = cljs.core.chunked_seq_QMARK_(inst_55460);
var state_55505__$1 = state_55505;
if(inst_55462){
var statearr_55517_56478 = state_55505__$1;
(statearr_55517_56478[(1)] = (16));

} else {
var statearr_55518_56482 = state_55505__$1;
(statearr_55518_56482[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (22))){
var inst_55490 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
if(cljs.core.truth_(inst_55490)){
var statearr_55519_56483 = state_55505__$1;
(statearr_55519_56483[(1)] = (23));

} else {
var statearr_55520_56484 = state_55505__$1;
(statearr_55520_56484[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (6))){
var inst_55436 = (state_55505[(8)]);
var inst_55484 = (state_55505[(7)]);
var inst_55486 = (state_55505[(11)]);
var inst_55484__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_55436) : topic_fn.call(null,inst_55436));
var inst_55485 = cljs.core.deref(mults);
var inst_55486__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55485,inst_55484__$1);
var state_55505__$1 = (function (){var statearr_55521 = state_55505;
(statearr_55521[(7)] = inst_55484__$1);

(statearr_55521[(11)] = inst_55486__$1);

return statearr_55521;
})();
if(cljs.core.truth_(inst_55486__$1)){
var statearr_55522_56485 = state_55505__$1;
(statearr_55522_56485[(1)] = (19));

} else {
var statearr_55523_56486 = state_55505__$1;
(statearr_55523_56486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (25))){
var inst_55495 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
var statearr_55524_56488 = state_55505__$1;
(statearr_55524_56488[(2)] = inst_55495);

(statearr_55524_56488[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (17))){
var inst_55460 = (state_55505[(10)]);
var inst_55469 = cljs.core.first(inst_55460);
var inst_55470 = cljs.core.async.muxch_STAR_(inst_55469);
var inst_55471 = cljs.core.async.close_BANG_(inst_55470);
var inst_55472 = cljs.core.next(inst_55460);
var inst_55446 = inst_55472;
var inst_55447 = null;
var inst_55448 = (0);
var inst_55449 = (0);
var state_55505__$1 = (function (){var statearr_55525 = state_55505;
(statearr_55525[(12)] = inst_55471);

(statearr_55525[(13)] = inst_55446);

(statearr_55525[(14)] = inst_55447);

(statearr_55525[(15)] = inst_55448);

(statearr_55525[(16)] = inst_55449);

return statearr_55525;
})();
var statearr_55526_56492 = state_55505__$1;
(statearr_55526_56492[(2)] = null);

(statearr_55526_56492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (3))){
var inst_55503 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55505__$1,inst_55503);
} else {
if((state_val_55506 === (12))){
var inst_55480 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
var statearr_55527_56494 = state_55505__$1;
(statearr_55527_56494[(2)] = inst_55480);

(statearr_55527_56494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (2))){
var state_55505__$1 = state_55505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55505__$1,(4),ch);
} else {
if((state_val_55506 === (23))){
var state_55505__$1 = state_55505;
var statearr_55528_56498 = state_55505__$1;
(statearr_55528_56498[(2)] = null);

(statearr_55528_56498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (19))){
var inst_55486 = (state_55505[(11)]);
var inst_55436 = (state_55505[(8)]);
var inst_55488 = cljs.core.async.muxch_STAR_(inst_55486);
var state_55505__$1 = state_55505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55505__$1,(22),inst_55488,inst_55436);
} else {
if((state_val_55506 === (11))){
var inst_55446 = (state_55505[(13)]);
var inst_55460 = (state_55505[(10)]);
var inst_55460__$1 = cljs.core.seq(inst_55446);
var state_55505__$1 = (function (){var statearr_55529 = state_55505;
(statearr_55529[(10)] = inst_55460__$1);

return statearr_55529;
})();
if(inst_55460__$1){
var statearr_55530_56500 = state_55505__$1;
(statearr_55530_56500[(1)] = (13));

} else {
var statearr_55531_56501 = state_55505__$1;
(statearr_55531_56501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (9))){
var inst_55482 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
var statearr_55532_56502 = state_55505__$1;
(statearr_55532_56502[(2)] = inst_55482);

(statearr_55532_56502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (5))){
var inst_55443 = cljs.core.deref(mults);
var inst_55444 = cljs.core.vals(inst_55443);
var inst_55445 = cljs.core.seq(inst_55444);
var inst_55446 = inst_55445;
var inst_55447 = null;
var inst_55448 = (0);
var inst_55449 = (0);
var state_55505__$1 = (function (){var statearr_55533 = state_55505;
(statearr_55533[(13)] = inst_55446);

(statearr_55533[(14)] = inst_55447);

(statearr_55533[(15)] = inst_55448);

(statearr_55533[(16)] = inst_55449);

return statearr_55533;
})();
var statearr_55534_56507 = state_55505__$1;
(statearr_55534_56507[(2)] = null);

(statearr_55534_56507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (14))){
var state_55505__$1 = state_55505;
var statearr_55538_56508 = state_55505__$1;
(statearr_55538_56508[(2)] = null);

(statearr_55538_56508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (16))){
var inst_55460 = (state_55505[(10)]);
var inst_55464 = cljs.core.chunk_first(inst_55460);
var inst_55465 = cljs.core.chunk_rest(inst_55460);
var inst_55466 = cljs.core.count(inst_55464);
var inst_55446 = inst_55465;
var inst_55447 = inst_55464;
var inst_55448 = inst_55466;
var inst_55449 = (0);
var state_55505__$1 = (function (){var statearr_55539 = state_55505;
(statearr_55539[(13)] = inst_55446);

(statearr_55539[(14)] = inst_55447);

(statearr_55539[(15)] = inst_55448);

(statearr_55539[(16)] = inst_55449);

return statearr_55539;
})();
var statearr_55540_56513 = state_55505__$1;
(statearr_55540_56513[(2)] = null);

(statearr_55540_56513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (10))){
var inst_55447 = (state_55505[(14)]);
var inst_55449 = (state_55505[(16)]);
var inst_55446 = (state_55505[(13)]);
var inst_55448 = (state_55505[(15)]);
var inst_55454 = cljs.core._nth(inst_55447,inst_55449);
var inst_55455 = cljs.core.async.muxch_STAR_(inst_55454);
var inst_55456 = cljs.core.async.close_BANG_(inst_55455);
var inst_55457 = (inst_55449 + (1));
var tmp55535 = inst_55446;
var tmp55536 = inst_55448;
var tmp55537 = inst_55447;
var inst_55446__$1 = tmp55535;
var inst_55447__$1 = tmp55537;
var inst_55448__$1 = tmp55536;
var inst_55449__$1 = inst_55457;
var state_55505__$1 = (function (){var statearr_55541 = state_55505;
(statearr_55541[(17)] = inst_55456);

(statearr_55541[(13)] = inst_55446__$1);

(statearr_55541[(14)] = inst_55447__$1);

(statearr_55541[(15)] = inst_55448__$1);

(statearr_55541[(16)] = inst_55449__$1);

return statearr_55541;
})();
var statearr_55542_56515 = state_55505__$1;
(statearr_55542_56515[(2)] = null);

(statearr_55542_56515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (18))){
var inst_55475 = (state_55505[(2)]);
var state_55505__$1 = state_55505;
var statearr_55543_56519 = state_55505__$1;
(statearr_55543_56519[(2)] = inst_55475);

(statearr_55543_56519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55506 === (8))){
var inst_55449 = (state_55505[(16)]);
var inst_55448 = (state_55505[(15)]);
var inst_55451 = (inst_55449 < inst_55448);
var inst_55452 = inst_55451;
var state_55505__$1 = state_55505;
if(cljs.core.truth_(inst_55452)){
var statearr_55544_56520 = state_55505__$1;
(statearr_55544_56520[(1)] = (10));

} else {
var statearr_55545_56521 = state_55505__$1;
(statearr_55545_56521[(1)] = (11));

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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_55546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55546[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_55546[(1)] = (1));

return statearr_55546;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55505){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55505);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55547){var ex__54399__auto__ = e55547;
var statearr_55548_56522 = state_55505;
(statearr_55548_56522[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55505[(4)]))){
var statearr_55549_56523 = state_55505;
(statearr_55549_56523[(1)] = cljs.core.first((state_55505[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56524 = state_55505;
state_55505 = G__56524;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55550 = f__54471__auto__();
(statearr_55550[(6)] = c__54470__auto___56468);

return statearr_55550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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
var G__55552 = arguments.length;
switch (G__55552) {
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
var G__55554 = arguments.length;
switch (G__55554) {
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
var G__55556 = arguments.length;
switch (G__55556) {
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
var c__54470__auto___56536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55599){
var state_val_55600 = (state_55599[(1)]);
if((state_val_55600 === (7))){
var state_55599__$1 = state_55599;
var statearr_55601_56537 = state_55599__$1;
(statearr_55601_56537[(2)] = null);

(statearr_55601_56537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (1))){
var state_55599__$1 = state_55599;
var statearr_55602_56538 = state_55599__$1;
(statearr_55602_56538[(2)] = null);

(statearr_55602_56538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (4))){
var inst_55560 = (state_55599[(7)]);
var inst_55559 = (state_55599[(8)]);
var inst_55562 = (inst_55560 < inst_55559);
var state_55599__$1 = state_55599;
if(cljs.core.truth_(inst_55562)){
var statearr_55603_56542 = state_55599__$1;
(statearr_55603_56542[(1)] = (6));

} else {
var statearr_55604_56543 = state_55599__$1;
(statearr_55604_56543[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (15))){
var inst_55585 = (state_55599[(9)]);
var inst_55590 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_55585);
var state_55599__$1 = state_55599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55599__$1,(17),out,inst_55590);
} else {
if((state_val_55600 === (13))){
var inst_55585 = (state_55599[(9)]);
var inst_55585__$1 = (state_55599[(2)]);
var inst_55586 = cljs.core.some(cljs.core.nil_QMARK_,inst_55585__$1);
var state_55599__$1 = (function (){var statearr_55605 = state_55599;
(statearr_55605[(9)] = inst_55585__$1);

return statearr_55605;
})();
if(cljs.core.truth_(inst_55586)){
var statearr_55606_56546 = state_55599__$1;
(statearr_55606_56546[(1)] = (14));

} else {
var statearr_55607_56547 = state_55599__$1;
(statearr_55607_56547[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (6))){
var state_55599__$1 = state_55599;
var statearr_55608_56548 = state_55599__$1;
(statearr_55608_56548[(2)] = null);

(statearr_55608_56548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (17))){
var inst_55592 = (state_55599[(2)]);
var state_55599__$1 = (function (){var statearr_55610 = state_55599;
(statearr_55610[(10)] = inst_55592);

return statearr_55610;
})();
var statearr_55611_56549 = state_55599__$1;
(statearr_55611_56549[(2)] = null);

(statearr_55611_56549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (3))){
var inst_55597 = (state_55599[(2)]);
var state_55599__$1 = state_55599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55599__$1,inst_55597);
} else {
if((state_val_55600 === (12))){
var _ = (function (){var statearr_55612 = state_55599;
(statearr_55612[(4)] = cljs.core.rest((state_55599[(4)])));

return statearr_55612;
})();
var state_55599__$1 = state_55599;
var ex55609 = (state_55599__$1[(2)]);
var statearr_55613_56551 = state_55599__$1;
(statearr_55613_56551[(5)] = ex55609);


if((ex55609 instanceof Object)){
var statearr_55614_56553 = state_55599__$1;
(statearr_55614_56553[(1)] = (11));

(statearr_55614_56553[(5)] = null);

} else {
throw ex55609;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (2))){
var inst_55558 = cljs.core.reset_BANG_(dctr,cnt);
var inst_55559 = cnt;
var inst_55560 = (0);
var state_55599__$1 = (function (){var statearr_55615 = state_55599;
(statearr_55615[(11)] = inst_55558);

(statearr_55615[(8)] = inst_55559);

(statearr_55615[(7)] = inst_55560);

return statearr_55615;
})();
var statearr_55616_56555 = state_55599__$1;
(statearr_55616_56555[(2)] = null);

(statearr_55616_56555[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (11))){
var inst_55564 = (state_55599[(2)]);
var inst_55565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_55599__$1 = (function (){var statearr_55617 = state_55599;
(statearr_55617[(12)] = inst_55564);

return statearr_55617;
})();
var statearr_55618_56559 = state_55599__$1;
(statearr_55618_56559[(2)] = inst_55565);

(statearr_55618_56559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (9))){
var inst_55560 = (state_55599[(7)]);
var _ = (function (){var statearr_55619 = state_55599;
(statearr_55619[(4)] = cljs.core.cons((12),(state_55599[(4)])));

return statearr_55619;
})();
var inst_55571 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_55560) : chs__$1.call(null,inst_55560));
var inst_55572 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_55560) : done.call(null,inst_55560));
var inst_55573 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55571,inst_55572);
var ___$1 = (function (){var statearr_55620 = state_55599;
(statearr_55620[(4)] = cljs.core.rest((state_55599[(4)])));

return statearr_55620;
})();
var state_55599__$1 = state_55599;
var statearr_55621_56560 = state_55599__$1;
(statearr_55621_56560[(2)] = inst_55573);

(statearr_55621_56560[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (5))){
var inst_55583 = (state_55599[(2)]);
var state_55599__$1 = (function (){var statearr_55622 = state_55599;
(statearr_55622[(13)] = inst_55583);

return statearr_55622;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55599__$1,(13),dchan);
} else {
if((state_val_55600 === (14))){
var inst_55588 = cljs.core.async.close_BANG_(out);
var state_55599__$1 = state_55599;
var statearr_55623_56561 = state_55599__$1;
(statearr_55623_56561[(2)] = inst_55588);

(statearr_55623_56561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (16))){
var inst_55595 = (state_55599[(2)]);
var state_55599__$1 = state_55599;
var statearr_55624_56565 = state_55599__$1;
(statearr_55624_56565[(2)] = inst_55595);

(statearr_55624_56565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (10))){
var inst_55560 = (state_55599[(7)]);
var inst_55576 = (state_55599[(2)]);
var inst_55577 = (inst_55560 + (1));
var inst_55560__$1 = inst_55577;
var state_55599__$1 = (function (){var statearr_55625 = state_55599;
(statearr_55625[(14)] = inst_55576);

(statearr_55625[(7)] = inst_55560__$1);

return statearr_55625;
})();
var statearr_55626_56566 = state_55599__$1;
(statearr_55626_56566[(2)] = null);

(statearr_55626_56566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55600 === (8))){
var inst_55581 = (state_55599[(2)]);
var state_55599__$1 = state_55599;
var statearr_55627_56569 = state_55599__$1;
(statearr_55627_56569[(2)] = inst_55581);

(statearr_55627_56569[(1)] = (5));


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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_55628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55628[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_55628[(1)] = (1));

return statearr_55628;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55599){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55599);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55629){var ex__54399__auto__ = e55629;
var statearr_55630_56574 = state_55599;
(statearr_55630_56574[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55599[(4)]))){
var statearr_55631_56575 = state_55599;
(statearr_55631_56575[(1)] = cljs.core.first((state_55599[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56576 = state_55599;
state_55599 = G__56576;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55632 = f__54471__auto__();
(statearr_55632[(6)] = c__54470__auto___56536);

return statearr_55632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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
var G__55635 = arguments.length;
switch (G__55635) {
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
var c__54470__auto___56578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55667){
var state_val_55668 = (state_55667[(1)]);
if((state_val_55668 === (7))){
var inst_55646 = (state_55667[(7)]);
var inst_55647 = (state_55667[(8)]);
var inst_55646__$1 = (state_55667[(2)]);
var inst_55647__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55646__$1,(0),null);
var inst_55648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_55646__$1,(1),null);
var inst_55649 = (inst_55647__$1 == null);
var state_55667__$1 = (function (){var statearr_55669 = state_55667;
(statearr_55669[(7)] = inst_55646__$1);

(statearr_55669[(8)] = inst_55647__$1);

(statearr_55669[(9)] = inst_55648);

return statearr_55669;
})();
if(cljs.core.truth_(inst_55649)){
var statearr_55670_56583 = state_55667__$1;
(statearr_55670_56583[(1)] = (8));

} else {
var statearr_55671_56584 = state_55667__$1;
(statearr_55671_56584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55668 === (1))){
var inst_55636 = cljs.core.vec(chs);
var inst_55637 = inst_55636;
var state_55667__$1 = (function (){var statearr_55672 = state_55667;
(statearr_55672[(10)] = inst_55637);

return statearr_55672;
})();
var statearr_55673_56586 = state_55667__$1;
(statearr_55673_56586[(2)] = null);

(statearr_55673_56586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55668 === (4))){
var inst_55637 = (state_55667[(10)]);
var state_55667__$1 = state_55667;
return cljs.core.async.ioc_alts_BANG_(state_55667__$1,(7),inst_55637);
} else {
if((state_val_55668 === (6))){
var inst_55663 = (state_55667[(2)]);
var state_55667__$1 = state_55667;
var statearr_55674_56587 = state_55667__$1;
(statearr_55674_56587[(2)] = inst_55663);

(statearr_55674_56587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55668 === (3))){
var inst_55665 = (state_55667[(2)]);
var state_55667__$1 = state_55667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55667__$1,inst_55665);
} else {
if((state_val_55668 === (2))){
var inst_55637 = (state_55667[(10)]);
var inst_55639 = cljs.core.count(inst_55637);
var inst_55640 = (inst_55639 > (0));
var state_55667__$1 = state_55667;
if(cljs.core.truth_(inst_55640)){
var statearr_55676_56589 = state_55667__$1;
(statearr_55676_56589[(1)] = (4));

} else {
var statearr_55677_56590 = state_55667__$1;
(statearr_55677_56590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55668 === (11))){
var inst_55637 = (state_55667[(10)]);
var inst_55656 = (state_55667[(2)]);
var tmp55675 = inst_55637;
var inst_55637__$1 = tmp55675;
var state_55667__$1 = (function (){var statearr_55678 = state_55667;
(statearr_55678[(11)] = inst_55656);

(statearr_55678[(10)] = inst_55637__$1);

return statearr_55678;
})();
var statearr_55679_56591 = state_55667__$1;
(statearr_55679_56591[(2)] = null);

(statearr_55679_56591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55668 === (9))){
var inst_55647 = (state_55667[(8)]);
var state_55667__$1 = state_55667;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55667__$1,(11),out,inst_55647);
} else {
if((state_val_55668 === (5))){
var inst_55661 = cljs.core.async.close_BANG_(out);
var state_55667__$1 = state_55667;
var statearr_55680_56592 = state_55667__$1;
(statearr_55680_56592[(2)] = inst_55661);

(statearr_55680_56592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55668 === (10))){
var inst_55659 = (state_55667[(2)]);
var state_55667__$1 = state_55667;
var statearr_55681_56593 = state_55667__$1;
(statearr_55681_56593[(2)] = inst_55659);

(statearr_55681_56593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55668 === (8))){
var inst_55637 = (state_55667[(10)]);
var inst_55646 = (state_55667[(7)]);
var inst_55647 = (state_55667[(8)]);
var inst_55648 = (state_55667[(9)]);
var inst_55651 = (function (){var cs = inst_55637;
var vec__55642 = inst_55646;
var v = inst_55647;
var c = inst_55648;
return (function (p1__55633_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__55633_SHARP_);
});
})();
var inst_55652 = cljs.core.filterv(inst_55651,inst_55637);
var inst_55637__$1 = inst_55652;
var state_55667__$1 = (function (){var statearr_55682 = state_55667;
(statearr_55682[(10)] = inst_55637__$1);

return statearr_55682;
})();
var statearr_55683_56598 = state_55667__$1;
(statearr_55683_56598[(2)] = null);

(statearr_55683_56598[(1)] = (2));


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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_55684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55684[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_55684[(1)] = (1));

return statearr_55684;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55667){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55667);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55685){var ex__54399__auto__ = e55685;
var statearr_55686_56599 = state_55667;
(statearr_55686_56599[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55667[(4)]))){
var statearr_55687_56600 = state_55667;
(statearr_55687_56600[(1)] = cljs.core.first((state_55667[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56601 = state_55667;
state_55667 = G__56601;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55688 = f__54471__auto__();
(statearr_55688[(6)] = c__54470__auto___56578);

return statearr_55688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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
var G__55690 = arguments.length;
switch (G__55690) {
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
var c__54470__auto___56603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55714){
var state_val_55715 = (state_55714[(1)]);
if((state_val_55715 === (7))){
var inst_55696 = (state_55714[(7)]);
var inst_55696__$1 = (state_55714[(2)]);
var inst_55697 = (inst_55696__$1 == null);
var inst_55698 = cljs.core.not(inst_55697);
var state_55714__$1 = (function (){var statearr_55716 = state_55714;
(statearr_55716[(7)] = inst_55696__$1);

return statearr_55716;
})();
if(inst_55698){
var statearr_55717_56604 = state_55714__$1;
(statearr_55717_56604[(1)] = (8));

} else {
var statearr_55718_56605 = state_55714__$1;
(statearr_55718_56605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (1))){
var inst_55691 = (0);
var state_55714__$1 = (function (){var statearr_55719 = state_55714;
(statearr_55719[(8)] = inst_55691);

return statearr_55719;
})();
var statearr_55720_56606 = state_55714__$1;
(statearr_55720_56606[(2)] = null);

(statearr_55720_56606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (4))){
var state_55714__$1 = state_55714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55714__$1,(7),ch);
} else {
if((state_val_55715 === (6))){
var inst_55709 = (state_55714[(2)]);
var state_55714__$1 = state_55714;
var statearr_55721_56607 = state_55714__$1;
(statearr_55721_56607[(2)] = inst_55709);

(statearr_55721_56607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (3))){
var inst_55711 = (state_55714[(2)]);
var inst_55712 = cljs.core.async.close_BANG_(out);
var state_55714__$1 = (function (){var statearr_55722 = state_55714;
(statearr_55722[(9)] = inst_55711);

return statearr_55722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55714__$1,inst_55712);
} else {
if((state_val_55715 === (2))){
var inst_55691 = (state_55714[(8)]);
var inst_55693 = (inst_55691 < n);
var state_55714__$1 = state_55714;
if(cljs.core.truth_(inst_55693)){
var statearr_55723_56608 = state_55714__$1;
(statearr_55723_56608[(1)] = (4));

} else {
var statearr_55724_56609 = state_55714__$1;
(statearr_55724_56609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (11))){
var inst_55691 = (state_55714[(8)]);
var inst_55701 = (state_55714[(2)]);
var inst_55702 = (inst_55691 + (1));
var inst_55691__$1 = inst_55702;
var state_55714__$1 = (function (){var statearr_55725 = state_55714;
(statearr_55725[(10)] = inst_55701);

(statearr_55725[(8)] = inst_55691__$1);

return statearr_55725;
})();
var statearr_55726_56610 = state_55714__$1;
(statearr_55726_56610[(2)] = null);

(statearr_55726_56610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (9))){
var state_55714__$1 = state_55714;
var statearr_55727_56611 = state_55714__$1;
(statearr_55727_56611[(2)] = null);

(statearr_55727_56611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (5))){
var state_55714__$1 = state_55714;
var statearr_55728_56612 = state_55714__$1;
(statearr_55728_56612[(2)] = null);

(statearr_55728_56612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (10))){
var inst_55706 = (state_55714[(2)]);
var state_55714__$1 = state_55714;
var statearr_55729_56614 = state_55714__$1;
(statearr_55729_56614[(2)] = inst_55706);

(statearr_55729_56614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55715 === (8))){
var inst_55696 = (state_55714[(7)]);
var state_55714__$1 = state_55714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55714__$1,(11),out,inst_55696);
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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_55730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55730[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_55730[(1)] = (1));

return statearr_55730;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55714){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55714);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55731){var ex__54399__auto__ = e55731;
var statearr_55732_56616 = state_55714;
(statearr_55732_56616[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55714[(4)]))){
var statearr_55733_56617 = state_55714;
(statearr_55733_56617[(1)] = cljs.core.first((state_55714[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56618 = state_55714;
state_55714 = G__56618;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55734 = f__54471__auto__();
(statearr_55734[(6)] = c__54470__auto___56603);

return statearr_55734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
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
cljs.core.async.t_cljs$core$async55739 = (function (f,ch,meta55737,_,fn1,meta55740){
this.f = f;
this.ch = ch;
this.meta55737 = meta55737;
this._ = _;
this.fn1 = fn1;
this.meta55740 = meta55740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55741,meta55740__$1){
var self__ = this;
var _55741__$1 = this;
return (new cljs.core.async.t_cljs$core$async55739(self__.f,self__.ch,self__.meta55737,self__._,self__.fn1,meta55740__$1));
}));

(cljs.core.async.t_cljs$core$async55739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55741){
var self__ = this;
var _55741__$1 = this;
return self__.meta55740;
}));

(cljs.core.async.t_cljs$core$async55739.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async55739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__55735_SHARP_){
var G__55742 = (((p1__55735_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__55735_SHARP_) : self__.f.call(null,p1__55735_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__55742) : f1.call(null,G__55742));
});
}));

(cljs.core.async.t_cljs$core$async55739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55737","meta55737",-1877419814,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async55736","cljs.core.async/t_cljs$core$async55736",-1269716687,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta55740","meta55740",-637315776,null)], null);
}));

(cljs.core.async.t_cljs$core$async55739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55739");

(cljs.core.async.t_cljs$core$async55739.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55739.
 */
cljs.core.async.__GT_t_cljs$core$async55739 = (function cljs$core$async$__GT_t_cljs$core$async55739(f,ch,meta55737,_,fn1,meta55740){
return (new cljs.core.async.t_cljs$core$async55739(f,ch,meta55737,_,fn1,meta55740));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55736 = (function (f,ch,meta55737){
this.f = f;
this.ch = ch;
this.meta55737 = meta55737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55738,meta55737__$1){
var self__ = this;
var _55738__$1 = this;
return (new cljs.core.async.t_cljs$core$async55736(self__.f,self__.ch,meta55737__$1));
}));

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55738){
var self__ = this;
var _55738__$1 = this;
return self__.meta55737;
}));

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async55739(self__.f,self__.ch,self__.meta55737,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__55743 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__55743) : self__.f.call(null,G__55743));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async55736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55737","meta55737",-1877419814,null)], null);
}));

(cljs.core.async.t_cljs$core$async55736.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55736");

(cljs.core.async.t_cljs$core$async55736.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55736");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55736.
 */
cljs.core.async.__GT_t_cljs$core$async55736 = (function cljs$core$async$__GT_t_cljs$core$async55736(f,ch,meta55737){
return (new cljs.core.async.t_cljs$core$async55736(f,ch,meta55737));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55736(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55744 = (function (f,ch,meta55745){
this.f = f;
this.ch = ch;
this.meta55745 = meta55745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55746,meta55745__$1){
var self__ = this;
var _55746__$1 = this;
return (new cljs.core.async.t_cljs$core$async55744(self__.f,self__.ch,meta55745__$1));
}));

(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55746){
var self__ = this;
var _55746__$1 = this;
return self__.meta55745;
}));

(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async55744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55745","meta55745",-878042361,null)], null);
}));

(cljs.core.async.t_cljs$core$async55744.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55744");

(cljs.core.async.t_cljs$core$async55744.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55744");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55744.
 */
cljs.core.async.__GT_t_cljs$core$async55744 = (function cljs$core$async$__GT_t_cljs$core$async55744(f,ch,meta55745){
return (new cljs.core.async.t_cljs$core$async55744(f,ch,meta55745));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async55744(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55747 = (function (p,ch,meta55748){
this.p = p;
this.ch = ch;
this.meta55748 = meta55748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55749,meta55748__$1){
var self__ = this;
var _55749__$1 = this;
return (new cljs.core.async.t_cljs$core$async55747(self__.p,self__.ch,meta55748__$1));
}));

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55749){
var self__ = this;
var _55749__$1 = this;
return self__.meta55748;
}));

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async55747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta55748","meta55748",1196280508,null)], null);
}));

(cljs.core.async.t_cljs$core$async55747.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55747");

(cljs.core.async.t_cljs$core$async55747.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async55747");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55747.
 */
cljs.core.async.__GT_t_cljs$core$async55747 = (function cljs$core$async$__GT_t_cljs$core$async55747(p,ch,meta55748){
return (new cljs.core.async.t_cljs$core$async55747(p,ch,meta55748));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async55747(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__55751 = arguments.length;
switch (G__55751) {
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
var c__54470__auto___56627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55772){
var state_val_55773 = (state_55772[(1)]);
if((state_val_55773 === (7))){
var inst_55768 = (state_55772[(2)]);
var state_55772__$1 = state_55772;
var statearr_55774_56628 = state_55772__$1;
(statearr_55774_56628[(2)] = inst_55768);

(statearr_55774_56628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (1))){
var state_55772__$1 = state_55772;
var statearr_55775_56629 = state_55772__$1;
(statearr_55775_56629[(2)] = null);

(statearr_55775_56629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (4))){
var inst_55754 = (state_55772[(7)]);
var inst_55754__$1 = (state_55772[(2)]);
var inst_55755 = (inst_55754__$1 == null);
var state_55772__$1 = (function (){var statearr_55776 = state_55772;
(statearr_55776[(7)] = inst_55754__$1);

return statearr_55776;
})();
if(cljs.core.truth_(inst_55755)){
var statearr_55777_56634 = state_55772__$1;
(statearr_55777_56634[(1)] = (5));

} else {
var statearr_55778_56635 = state_55772__$1;
(statearr_55778_56635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (6))){
var inst_55754 = (state_55772[(7)]);
var inst_55759 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_55754) : p.call(null,inst_55754));
var state_55772__$1 = state_55772;
if(cljs.core.truth_(inst_55759)){
var statearr_55779_56636 = state_55772__$1;
(statearr_55779_56636[(1)] = (8));

} else {
var statearr_55780_56637 = state_55772__$1;
(statearr_55780_56637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (3))){
var inst_55770 = (state_55772[(2)]);
var state_55772__$1 = state_55772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55772__$1,inst_55770);
} else {
if((state_val_55773 === (2))){
var state_55772__$1 = state_55772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55772__$1,(4),ch);
} else {
if((state_val_55773 === (11))){
var inst_55762 = (state_55772[(2)]);
var state_55772__$1 = state_55772;
var statearr_55781_56638 = state_55772__$1;
(statearr_55781_56638[(2)] = inst_55762);

(statearr_55781_56638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (9))){
var state_55772__$1 = state_55772;
var statearr_55782_56639 = state_55772__$1;
(statearr_55782_56639[(2)] = null);

(statearr_55782_56639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (5))){
var inst_55757 = cljs.core.async.close_BANG_(out);
var state_55772__$1 = state_55772;
var statearr_55783_56640 = state_55772__$1;
(statearr_55783_56640[(2)] = inst_55757);

(statearr_55783_56640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (10))){
var inst_55765 = (state_55772[(2)]);
var state_55772__$1 = (function (){var statearr_55784 = state_55772;
(statearr_55784[(8)] = inst_55765);

return statearr_55784;
})();
var statearr_55785_56641 = state_55772__$1;
(statearr_55785_56641[(2)] = null);

(statearr_55785_56641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55773 === (8))){
var inst_55754 = (state_55772[(7)]);
var state_55772__$1 = state_55772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55772__$1,(11),out,inst_55754);
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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_55786 = [null,null,null,null,null,null,null,null,null];
(statearr_55786[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_55786[(1)] = (1));

return statearr_55786;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55772){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55772);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55787){var ex__54399__auto__ = e55787;
var statearr_55788_56644 = state_55772;
(statearr_55788_56644[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55772[(4)]))){
var statearr_55789_56645 = state_55772;
(statearr_55789_56645[(1)] = cljs.core.first((state_55772[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56646 = state_55772;
state_55772 = G__56646;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55790 = f__54471__auto__();
(statearr_55790[(6)] = c__54470__auto___56627);

return statearr_55790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__55792 = arguments.length;
switch (G__55792) {
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
var c__54470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55854){
var state_val_55855 = (state_55854[(1)]);
if((state_val_55855 === (7))){
var inst_55850 = (state_55854[(2)]);
var state_55854__$1 = state_55854;
var statearr_55856_56650 = state_55854__$1;
(statearr_55856_56650[(2)] = inst_55850);

(statearr_55856_56650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (20))){
var inst_55820 = (state_55854[(7)]);
var inst_55831 = (state_55854[(2)]);
var inst_55832 = cljs.core.next(inst_55820);
var inst_55806 = inst_55832;
var inst_55807 = null;
var inst_55808 = (0);
var inst_55809 = (0);
var state_55854__$1 = (function (){var statearr_55857 = state_55854;
(statearr_55857[(8)] = inst_55831);

(statearr_55857[(9)] = inst_55806);

(statearr_55857[(10)] = inst_55807);

(statearr_55857[(11)] = inst_55808);

(statearr_55857[(12)] = inst_55809);

return statearr_55857;
})();
var statearr_55858_56651 = state_55854__$1;
(statearr_55858_56651[(2)] = null);

(statearr_55858_56651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (1))){
var state_55854__$1 = state_55854;
var statearr_55859_56652 = state_55854__$1;
(statearr_55859_56652[(2)] = null);

(statearr_55859_56652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (4))){
var inst_55795 = (state_55854[(13)]);
var inst_55795__$1 = (state_55854[(2)]);
var inst_55796 = (inst_55795__$1 == null);
var state_55854__$1 = (function (){var statearr_55860 = state_55854;
(statearr_55860[(13)] = inst_55795__$1);

return statearr_55860;
})();
if(cljs.core.truth_(inst_55796)){
var statearr_55861_56657 = state_55854__$1;
(statearr_55861_56657[(1)] = (5));

} else {
var statearr_55862_56658 = state_55854__$1;
(statearr_55862_56658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (15))){
var state_55854__$1 = state_55854;
var statearr_55866_56659 = state_55854__$1;
(statearr_55866_56659[(2)] = null);

(statearr_55866_56659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (21))){
var state_55854__$1 = state_55854;
var statearr_55867_56660 = state_55854__$1;
(statearr_55867_56660[(2)] = null);

(statearr_55867_56660[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (13))){
var inst_55809 = (state_55854[(12)]);
var inst_55806 = (state_55854[(9)]);
var inst_55807 = (state_55854[(10)]);
var inst_55808 = (state_55854[(11)]);
var inst_55816 = (state_55854[(2)]);
var inst_55817 = (inst_55809 + (1));
var tmp55863 = inst_55808;
var tmp55864 = inst_55806;
var tmp55865 = inst_55807;
var inst_55806__$1 = tmp55864;
var inst_55807__$1 = tmp55865;
var inst_55808__$1 = tmp55863;
var inst_55809__$1 = inst_55817;
var state_55854__$1 = (function (){var statearr_55868 = state_55854;
(statearr_55868[(14)] = inst_55816);

(statearr_55868[(9)] = inst_55806__$1);

(statearr_55868[(10)] = inst_55807__$1);

(statearr_55868[(11)] = inst_55808__$1);

(statearr_55868[(12)] = inst_55809__$1);

return statearr_55868;
})();
var statearr_55869_56661 = state_55854__$1;
(statearr_55869_56661[(2)] = null);

(statearr_55869_56661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (22))){
var state_55854__$1 = state_55854;
var statearr_55870_56662 = state_55854__$1;
(statearr_55870_56662[(2)] = null);

(statearr_55870_56662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (6))){
var inst_55795 = (state_55854[(13)]);
var inst_55804 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_55795) : f.call(null,inst_55795));
var inst_55805 = cljs.core.seq(inst_55804);
var inst_55806 = inst_55805;
var inst_55807 = null;
var inst_55808 = (0);
var inst_55809 = (0);
var state_55854__$1 = (function (){var statearr_55871 = state_55854;
(statearr_55871[(9)] = inst_55806);

(statearr_55871[(10)] = inst_55807);

(statearr_55871[(11)] = inst_55808);

(statearr_55871[(12)] = inst_55809);

return statearr_55871;
})();
var statearr_55872_56663 = state_55854__$1;
(statearr_55872_56663[(2)] = null);

(statearr_55872_56663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (17))){
var inst_55820 = (state_55854[(7)]);
var inst_55824 = cljs.core.chunk_first(inst_55820);
var inst_55825 = cljs.core.chunk_rest(inst_55820);
var inst_55826 = cljs.core.count(inst_55824);
var inst_55806 = inst_55825;
var inst_55807 = inst_55824;
var inst_55808 = inst_55826;
var inst_55809 = (0);
var state_55854__$1 = (function (){var statearr_55873 = state_55854;
(statearr_55873[(9)] = inst_55806);

(statearr_55873[(10)] = inst_55807);

(statearr_55873[(11)] = inst_55808);

(statearr_55873[(12)] = inst_55809);

return statearr_55873;
})();
var statearr_55874_56664 = state_55854__$1;
(statearr_55874_56664[(2)] = null);

(statearr_55874_56664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (3))){
var inst_55852 = (state_55854[(2)]);
var state_55854__$1 = state_55854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55854__$1,inst_55852);
} else {
if((state_val_55855 === (12))){
var inst_55840 = (state_55854[(2)]);
var state_55854__$1 = state_55854;
var statearr_55875_56665 = state_55854__$1;
(statearr_55875_56665[(2)] = inst_55840);

(statearr_55875_56665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (2))){
var state_55854__$1 = state_55854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55854__$1,(4),in$);
} else {
if((state_val_55855 === (23))){
var inst_55848 = (state_55854[(2)]);
var state_55854__$1 = state_55854;
var statearr_55876_56666 = state_55854__$1;
(statearr_55876_56666[(2)] = inst_55848);

(statearr_55876_56666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (19))){
var inst_55835 = (state_55854[(2)]);
var state_55854__$1 = state_55854;
var statearr_55877_56667 = state_55854__$1;
(statearr_55877_56667[(2)] = inst_55835);

(statearr_55877_56667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (11))){
var inst_55806 = (state_55854[(9)]);
var inst_55820 = (state_55854[(7)]);
var inst_55820__$1 = cljs.core.seq(inst_55806);
var state_55854__$1 = (function (){var statearr_55878 = state_55854;
(statearr_55878[(7)] = inst_55820__$1);

return statearr_55878;
})();
if(inst_55820__$1){
var statearr_55879_56668 = state_55854__$1;
(statearr_55879_56668[(1)] = (14));

} else {
var statearr_55880_56669 = state_55854__$1;
(statearr_55880_56669[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (9))){
var inst_55842 = (state_55854[(2)]);
var inst_55843 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_55854__$1 = (function (){var statearr_55881 = state_55854;
(statearr_55881[(15)] = inst_55842);

return statearr_55881;
})();
if(cljs.core.truth_(inst_55843)){
var statearr_55882_56670 = state_55854__$1;
(statearr_55882_56670[(1)] = (21));

} else {
var statearr_55883_56671 = state_55854__$1;
(statearr_55883_56671[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (5))){
var inst_55798 = cljs.core.async.close_BANG_(out);
var state_55854__$1 = state_55854;
var statearr_55884_56672 = state_55854__$1;
(statearr_55884_56672[(2)] = inst_55798);

(statearr_55884_56672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (14))){
var inst_55820 = (state_55854[(7)]);
var inst_55822 = cljs.core.chunked_seq_QMARK_(inst_55820);
var state_55854__$1 = state_55854;
if(inst_55822){
var statearr_55885_56673 = state_55854__$1;
(statearr_55885_56673[(1)] = (17));

} else {
var statearr_55886_56674 = state_55854__$1;
(statearr_55886_56674[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (16))){
var inst_55838 = (state_55854[(2)]);
var state_55854__$1 = state_55854;
var statearr_55887_56675 = state_55854__$1;
(statearr_55887_56675[(2)] = inst_55838);

(statearr_55887_56675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55855 === (10))){
var inst_55807 = (state_55854[(10)]);
var inst_55809 = (state_55854[(12)]);
var inst_55814 = cljs.core._nth(inst_55807,inst_55809);
var state_55854__$1 = state_55854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55854__$1,(13),out,inst_55814);
} else {
if((state_val_55855 === (18))){
var inst_55820 = (state_55854[(7)]);
var inst_55829 = cljs.core.first(inst_55820);
var state_55854__$1 = state_55854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55854__$1,(20),out,inst_55829);
} else {
if((state_val_55855 === (8))){
var inst_55809 = (state_55854[(12)]);
var inst_55808 = (state_55854[(11)]);
var inst_55811 = (inst_55809 < inst_55808);
var inst_55812 = inst_55811;
var state_55854__$1 = state_55854;
if(cljs.core.truth_(inst_55812)){
var statearr_55888_56676 = state_55854__$1;
(statearr_55888_56676[(1)] = (10));

} else {
var statearr_55889_56677 = state_55854__$1;
(statearr_55889_56677[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__54396__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__54396__auto____0 = (function (){
var statearr_55890 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55890[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__54396__auto__);

(statearr_55890[(1)] = (1));

return statearr_55890;
});
var cljs$core$async$mapcat_STAR__$_state_machine__54396__auto____1 = (function (state_55854){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55854);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55891){var ex__54399__auto__ = e55891;
var statearr_55892_56682 = state_55854;
(statearr_55892_56682[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55854[(4)]))){
var statearr_55893_56683 = state_55854;
(statearr_55893_56683[(1)] = cljs.core.first((state_55854[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56684 = state_55854;
state_55854 = G__56684;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__54396__auto__ = function(state_55854){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__54396__auto____1.call(this,state_55854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__54396__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__54396__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55894 = f__54471__auto__();
(statearr_55894[(6)] = c__54470__auto__);

return statearr_55894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));

return c__54470__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__55896 = arguments.length;
switch (G__55896) {
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
var G__55898 = arguments.length;
switch (G__55898) {
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
var G__55900 = arguments.length;
switch (G__55900) {
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
var c__54470__auto___56692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55924){
var state_val_55925 = (state_55924[(1)]);
if((state_val_55925 === (7))){
var inst_55919 = (state_55924[(2)]);
var state_55924__$1 = state_55924;
var statearr_55926_56693 = state_55924__$1;
(statearr_55926_56693[(2)] = inst_55919);

(statearr_55926_56693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55925 === (1))){
var inst_55901 = null;
var state_55924__$1 = (function (){var statearr_55927 = state_55924;
(statearr_55927[(7)] = inst_55901);

return statearr_55927;
})();
var statearr_55928_56694 = state_55924__$1;
(statearr_55928_56694[(2)] = null);

(statearr_55928_56694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55925 === (4))){
var inst_55904 = (state_55924[(8)]);
var inst_55904__$1 = (state_55924[(2)]);
var inst_55905 = (inst_55904__$1 == null);
var inst_55906 = cljs.core.not(inst_55905);
var state_55924__$1 = (function (){var statearr_55929 = state_55924;
(statearr_55929[(8)] = inst_55904__$1);

return statearr_55929;
})();
if(inst_55906){
var statearr_55930_56695 = state_55924__$1;
(statearr_55930_56695[(1)] = (5));

} else {
var statearr_55931_56696 = state_55924__$1;
(statearr_55931_56696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55925 === (6))){
var state_55924__$1 = state_55924;
var statearr_55932_56697 = state_55924__$1;
(statearr_55932_56697[(2)] = null);

(statearr_55932_56697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55925 === (3))){
var inst_55921 = (state_55924[(2)]);
var inst_55922 = cljs.core.async.close_BANG_(out);
var state_55924__$1 = (function (){var statearr_55933 = state_55924;
(statearr_55933[(9)] = inst_55921);

return statearr_55933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_55924__$1,inst_55922);
} else {
if((state_val_55925 === (2))){
var state_55924__$1 = state_55924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55924__$1,(4),ch);
} else {
if((state_val_55925 === (11))){
var inst_55904 = (state_55924[(8)]);
var inst_55913 = (state_55924[(2)]);
var inst_55901 = inst_55904;
var state_55924__$1 = (function (){var statearr_55934 = state_55924;
(statearr_55934[(10)] = inst_55913);

(statearr_55934[(7)] = inst_55901);

return statearr_55934;
})();
var statearr_55935_56698 = state_55924__$1;
(statearr_55935_56698[(2)] = null);

(statearr_55935_56698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55925 === (9))){
var inst_55904 = (state_55924[(8)]);
var state_55924__$1 = state_55924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55924__$1,(11),out,inst_55904);
} else {
if((state_val_55925 === (5))){
var inst_55904 = (state_55924[(8)]);
var inst_55901 = (state_55924[(7)]);
var inst_55908 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_55904,inst_55901);
var state_55924__$1 = state_55924;
if(inst_55908){
var statearr_55937_56699 = state_55924__$1;
(statearr_55937_56699[(1)] = (8));

} else {
var statearr_55938_56700 = state_55924__$1;
(statearr_55938_56700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55925 === (10))){
var inst_55916 = (state_55924[(2)]);
var state_55924__$1 = state_55924;
var statearr_55939_56702 = state_55924__$1;
(statearr_55939_56702[(2)] = inst_55916);

(statearr_55939_56702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55925 === (8))){
var inst_55901 = (state_55924[(7)]);
var tmp55936 = inst_55901;
var inst_55901__$1 = tmp55936;
var state_55924__$1 = (function (){var statearr_55940 = state_55924;
(statearr_55940[(7)] = inst_55901__$1);

return statearr_55940;
})();
var statearr_55941_56703 = state_55924__$1;
(statearr_55941_56703[(2)] = null);

(statearr_55941_56703[(1)] = (2));


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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_55942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55942[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_55942[(1)] = (1));

return statearr_55942;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55924){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55924);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e55943){var ex__54399__auto__ = e55943;
var statearr_55944_56704 = state_55924;
(statearr_55944_56704[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55924[(4)]))){
var statearr_55945_56706 = state_55924;
(statearr_55945_56706[(1)] = cljs.core.first((state_55924[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56707 = state_55924;
state_55924 = G__56707;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_55946 = f__54471__auto__();
(statearr_55946[(6)] = c__54470__auto___56692);

return statearr_55946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__55948 = arguments.length;
switch (G__55948) {
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
var c__54470__auto___56713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_55986){
var state_val_55987 = (state_55986[(1)]);
if((state_val_55987 === (7))){
var inst_55982 = (state_55986[(2)]);
var state_55986__$1 = state_55986;
var statearr_55988_56714 = state_55986__$1;
(statearr_55988_56714[(2)] = inst_55982);

(statearr_55988_56714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (1))){
var inst_55949 = (new Array(n));
var inst_55950 = inst_55949;
var inst_55951 = (0);
var state_55986__$1 = (function (){var statearr_55989 = state_55986;
(statearr_55989[(7)] = inst_55950);

(statearr_55989[(8)] = inst_55951);

return statearr_55989;
})();
var statearr_55990_56715 = state_55986__$1;
(statearr_55990_56715[(2)] = null);

(statearr_55990_56715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (4))){
var inst_55954 = (state_55986[(9)]);
var inst_55954__$1 = (state_55986[(2)]);
var inst_55955 = (inst_55954__$1 == null);
var inst_55956 = cljs.core.not(inst_55955);
var state_55986__$1 = (function (){var statearr_55991 = state_55986;
(statearr_55991[(9)] = inst_55954__$1);

return statearr_55991;
})();
if(inst_55956){
var statearr_55992_56716 = state_55986__$1;
(statearr_55992_56716[(1)] = (5));

} else {
var statearr_55993_56717 = state_55986__$1;
(statearr_55993_56717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (15))){
var inst_55976 = (state_55986[(2)]);
var state_55986__$1 = state_55986;
var statearr_55994_56718 = state_55986__$1;
(statearr_55994_56718[(2)] = inst_55976);

(statearr_55994_56718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (13))){
var state_55986__$1 = state_55986;
var statearr_55995_56719 = state_55986__$1;
(statearr_55995_56719[(2)] = null);

(statearr_55995_56719[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (6))){
var inst_55951 = (state_55986[(8)]);
var inst_55972 = (inst_55951 > (0));
var state_55986__$1 = state_55986;
if(cljs.core.truth_(inst_55972)){
var statearr_55996_56720 = state_55986__$1;
(statearr_55996_56720[(1)] = (12));

} else {
var statearr_55997_56721 = state_55986__$1;
(statearr_55997_56721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (3))){
var inst_55984 = (state_55986[(2)]);
var state_55986__$1 = state_55986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55986__$1,inst_55984);
} else {
if((state_val_55987 === (12))){
var inst_55950 = (state_55986[(7)]);
var inst_55974 = cljs.core.vec(inst_55950);
var state_55986__$1 = state_55986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55986__$1,(15),out,inst_55974);
} else {
if((state_val_55987 === (2))){
var state_55986__$1 = state_55986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55986__$1,(4),ch);
} else {
if((state_val_55987 === (11))){
var inst_55966 = (state_55986[(2)]);
var inst_55967 = (new Array(n));
var inst_55950 = inst_55967;
var inst_55951 = (0);
var state_55986__$1 = (function (){var statearr_55998 = state_55986;
(statearr_55998[(10)] = inst_55966);

(statearr_55998[(7)] = inst_55950);

(statearr_55998[(8)] = inst_55951);

return statearr_55998;
})();
var statearr_55999_56722 = state_55986__$1;
(statearr_55999_56722[(2)] = null);

(statearr_55999_56722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (9))){
var inst_55950 = (state_55986[(7)]);
var inst_55964 = cljs.core.vec(inst_55950);
var state_55986__$1 = state_55986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55986__$1,(11),out,inst_55964);
} else {
if((state_val_55987 === (5))){
var inst_55950 = (state_55986[(7)]);
var inst_55951 = (state_55986[(8)]);
var inst_55954 = (state_55986[(9)]);
var inst_55959 = (state_55986[(11)]);
var inst_55958 = (inst_55950[inst_55951] = inst_55954);
var inst_55959__$1 = (inst_55951 + (1));
var inst_55960 = (inst_55959__$1 < n);
var state_55986__$1 = (function (){var statearr_56000 = state_55986;
(statearr_56000[(12)] = inst_55958);

(statearr_56000[(11)] = inst_55959__$1);

return statearr_56000;
})();
if(cljs.core.truth_(inst_55960)){
var statearr_56001_56723 = state_55986__$1;
(statearr_56001_56723[(1)] = (8));

} else {
var statearr_56002_56724 = state_55986__$1;
(statearr_56002_56724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (14))){
var inst_55979 = (state_55986[(2)]);
var inst_55980 = cljs.core.async.close_BANG_(out);
var state_55986__$1 = (function (){var statearr_56004 = state_55986;
(statearr_56004[(13)] = inst_55979);

return statearr_56004;
})();
var statearr_56005_56727 = state_55986__$1;
(statearr_56005_56727[(2)] = inst_55980);

(statearr_56005_56727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (10))){
var inst_55970 = (state_55986[(2)]);
var state_55986__$1 = state_55986;
var statearr_56006_56729 = state_55986__$1;
(statearr_56006_56729[(2)] = inst_55970);

(statearr_56006_56729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55987 === (8))){
var inst_55950 = (state_55986[(7)]);
var inst_55959 = (state_55986[(11)]);
var tmp56003 = inst_55950;
var inst_55950__$1 = tmp56003;
var inst_55951 = inst_55959;
var state_55986__$1 = (function (){var statearr_56007 = state_55986;
(statearr_56007[(7)] = inst_55950__$1);

(statearr_56007[(8)] = inst_55951);

return statearr_56007;
})();
var statearr_56008_56730 = state_55986__$1;
(statearr_56008_56730[(2)] = null);

(statearr_56008_56730[(1)] = (2));


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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_56009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56009[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_56009[(1)] = (1));

return statearr_56009;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_55986){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_55986);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e56010){var ex__54399__auto__ = e56010;
var statearr_56011_56732 = state_55986;
(statearr_56011_56732[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_55986[(4)]))){
var statearr_56012_56733 = state_55986;
(statearr_56012_56733[(1)] = cljs.core.first((state_55986[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56734 = state_55986;
state_55986 = G__56734;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_55986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_55986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_56013 = f__54471__auto__();
(statearr_56013[(6)] = c__54470__auto___56713);

return statearr_56013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__56015 = arguments.length;
switch (G__56015) {
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
var c__54470__auto___56736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__54471__auto__ = (function (){var switch__54395__auto__ = (function (state_56060){
var state_val_56061 = (state_56060[(1)]);
if((state_val_56061 === (7))){
var inst_56056 = (state_56060[(2)]);
var state_56060__$1 = state_56060;
var statearr_56062_56740 = state_56060__$1;
(statearr_56062_56740[(2)] = inst_56056);

(statearr_56062_56740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (1))){
var inst_56016 = [];
var inst_56017 = inst_56016;
var inst_56018 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_56060__$1 = (function (){var statearr_56063 = state_56060;
(statearr_56063[(7)] = inst_56017);

(statearr_56063[(8)] = inst_56018);

return statearr_56063;
})();
var statearr_56064_56741 = state_56060__$1;
(statearr_56064_56741[(2)] = null);

(statearr_56064_56741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (4))){
var inst_56021 = (state_56060[(9)]);
var inst_56021__$1 = (state_56060[(2)]);
var inst_56022 = (inst_56021__$1 == null);
var inst_56023 = cljs.core.not(inst_56022);
var state_56060__$1 = (function (){var statearr_56065 = state_56060;
(statearr_56065[(9)] = inst_56021__$1);

return statearr_56065;
})();
if(inst_56023){
var statearr_56066_56742 = state_56060__$1;
(statearr_56066_56742[(1)] = (5));

} else {
var statearr_56067_56743 = state_56060__$1;
(statearr_56067_56743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (15))){
var inst_56017 = (state_56060[(7)]);
var inst_56048 = cljs.core.vec(inst_56017);
var state_56060__$1 = state_56060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56060__$1,(18),out,inst_56048);
} else {
if((state_val_56061 === (13))){
var inst_56043 = (state_56060[(2)]);
var state_56060__$1 = state_56060;
var statearr_56068_56744 = state_56060__$1;
(statearr_56068_56744[(2)] = inst_56043);

(statearr_56068_56744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (6))){
var inst_56017 = (state_56060[(7)]);
var inst_56045 = inst_56017.length;
var inst_56046 = (inst_56045 > (0));
var state_56060__$1 = state_56060;
if(cljs.core.truth_(inst_56046)){
var statearr_56069_56745 = state_56060__$1;
(statearr_56069_56745[(1)] = (15));

} else {
var statearr_56070_56746 = state_56060__$1;
(statearr_56070_56746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (17))){
var inst_56053 = (state_56060[(2)]);
var inst_56054 = cljs.core.async.close_BANG_(out);
var state_56060__$1 = (function (){var statearr_56071 = state_56060;
(statearr_56071[(10)] = inst_56053);

return statearr_56071;
})();
var statearr_56072_56747 = state_56060__$1;
(statearr_56072_56747[(2)] = inst_56054);

(statearr_56072_56747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (3))){
var inst_56058 = (state_56060[(2)]);
var state_56060__$1 = state_56060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56060__$1,inst_56058);
} else {
if((state_val_56061 === (12))){
var inst_56017 = (state_56060[(7)]);
var inst_56036 = cljs.core.vec(inst_56017);
var state_56060__$1 = state_56060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56060__$1,(14),out,inst_56036);
} else {
if((state_val_56061 === (2))){
var state_56060__$1 = state_56060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56060__$1,(4),ch);
} else {
if((state_val_56061 === (11))){
var inst_56017 = (state_56060[(7)]);
var inst_56021 = (state_56060[(9)]);
var inst_56025 = (state_56060[(11)]);
var inst_56033 = inst_56017.push(inst_56021);
var tmp56073 = inst_56017;
var inst_56017__$1 = tmp56073;
var inst_56018 = inst_56025;
var state_56060__$1 = (function (){var statearr_56074 = state_56060;
(statearr_56074[(12)] = inst_56033);

(statearr_56074[(7)] = inst_56017__$1);

(statearr_56074[(8)] = inst_56018);

return statearr_56074;
})();
var statearr_56075_56748 = state_56060__$1;
(statearr_56075_56748[(2)] = null);

(statearr_56075_56748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (9))){
var inst_56018 = (state_56060[(8)]);
var inst_56029 = cljs.core.keyword_identical_QMARK_(inst_56018,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_56060__$1 = state_56060;
var statearr_56076_56749 = state_56060__$1;
(statearr_56076_56749[(2)] = inst_56029);

(statearr_56076_56749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (5))){
var inst_56021 = (state_56060[(9)]);
var inst_56025 = (state_56060[(11)]);
var inst_56018 = (state_56060[(8)]);
var inst_56026 = (state_56060[(13)]);
var inst_56025__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_56021) : f.call(null,inst_56021));
var inst_56026__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56025__$1,inst_56018);
var state_56060__$1 = (function (){var statearr_56077 = state_56060;
(statearr_56077[(11)] = inst_56025__$1);

(statearr_56077[(13)] = inst_56026__$1);

return statearr_56077;
})();
if(inst_56026__$1){
var statearr_56078_56750 = state_56060__$1;
(statearr_56078_56750[(1)] = (8));

} else {
var statearr_56079_56751 = state_56060__$1;
(statearr_56079_56751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (14))){
var inst_56021 = (state_56060[(9)]);
var inst_56025 = (state_56060[(11)]);
var inst_56038 = (state_56060[(2)]);
var inst_56039 = [];
var inst_56040 = inst_56039.push(inst_56021);
var inst_56017 = inst_56039;
var inst_56018 = inst_56025;
var state_56060__$1 = (function (){var statearr_56080 = state_56060;
(statearr_56080[(14)] = inst_56038);

(statearr_56080[(15)] = inst_56040);

(statearr_56080[(7)] = inst_56017);

(statearr_56080[(8)] = inst_56018);

return statearr_56080;
})();
var statearr_56081_56752 = state_56060__$1;
(statearr_56081_56752[(2)] = null);

(statearr_56081_56752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (16))){
var state_56060__$1 = state_56060;
var statearr_56082_56753 = state_56060__$1;
(statearr_56082_56753[(2)] = null);

(statearr_56082_56753[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (10))){
var inst_56031 = (state_56060[(2)]);
var state_56060__$1 = state_56060;
if(cljs.core.truth_(inst_56031)){
var statearr_56083_56754 = state_56060__$1;
(statearr_56083_56754[(1)] = (11));

} else {
var statearr_56084_56755 = state_56060__$1;
(statearr_56084_56755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (18))){
var inst_56050 = (state_56060[(2)]);
var state_56060__$1 = state_56060;
var statearr_56085_56756 = state_56060__$1;
(statearr_56085_56756[(2)] = inst_56050);

(statearr_56085_56756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56061 === (8))){
var inst_56026 = (state_56060[(13)]);
var state_56060__$1 = state_56060;
var statearr_56086_56761 = state_56060__$1;
(statearr_56086_56761[(2)] = inst_56026);

(statearr_56086_56761[(1)] = (10));


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
var cljs$core$async$state_machine__54396__auto__ = null;
var cljs$core$async$state_machine__54396__auto____0 = (function (){
var statearr_56087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56087[(0)] = cljs$core$async$state_machine__54396__auto__);

(statearr_56087[(1)] = (1));

return statearr_56087;
});
var cljs$core$async$state_machine__54396__auto____1 = (function (state_56060){
while(true){
var ret_value__54397__auto__ = (function (){try{while(true){
var result__54398__auto__ = switch__54395__auto__(state_56060);
if(cljs.core.keyword_identical_QMARK_(result__54398__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__54398__auto__;
}
break;
}
}catch (e56088){var ex__54399__auto__ = e56088;
var statearr_56089_56762 = state_56060;
(statearr_56089_56762[(2)] = ex__54399__auto__);


if(cljs.core.seq((state_56060[(4)]))){
var statearr_56090_56763 = state_56060;
(statearr_56090_56763[(1)] = cljs.core.first((state_56060[(4)])));

} else {
throw ex__54399__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__54397__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56764 = state_56060;
state_56060 = G__56764;
continue;
} else {
return ret_value__54397__auto__;
}
break;
}
});
cljs$core$async$state_machine__54396__auto__ = function(state_56060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__54396__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__54396__auto____1.call(this,state_56060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__54396__auto____0;
cljs$core$async$state_machine__54396__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__54396__auto____1;
return cljs$core$async$state_machine__54396__auto__;
})()
})();
var state__54472__auto__ = (function (){var statearr_56091 = f__54471__auto__();
(statearr_56091[(6)] = c__54470__auto___56736);

return statearr_56091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__54472__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
