var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("malli.registry.js");

goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_25328 = (function (this$,type){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5374__auto__.call(null,this$,type));
} else {
var m__5372__auto__ = (malli.registry._schema["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5372__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_25328(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_25334 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schemas[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (malli.registry._schemas["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_25334(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25117 = (function (m,fm,meta25118){
this.m = m;
this.fm = fm;
this.meta25118 = meta25118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25119,meta25118__$1){
var self__ = this;
var _25119__$1 = this;
return (new malli.registry.t_malli$registry25117(self__.m,self__.fm,meta25118__$1));
}));

(malli.registry.t_malli$registry25117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25119){
var self__ = this;
var _25119__$1 = this;
return self__.meta25118;
}));

(malli.registry.t_malli$registry25117.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25117.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry25117.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry25117.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta25118","meta25118",745956229,null)], null);
}));

(malli.registry.t_malli$registry25117.cljs$lang$type = true);

(malli.registry.t_malli$registry25117.cljs$lang$ctorStr = "malli.registry/t_malli$registry25117");

(malli.registry.t_malli$registry25117.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25117");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25117.
 */
malli.registry.__GT_t_malli$registry25117 = (function malli$registry$__GT_t_malli$registry25117(m,fm,meta25118){
return (new malli.registry.t_malli$registry25117(m,fm,meta25118));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry25117(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25145 = (function (m,meta25146){
this.m = m;
this.meta25146 = meta25146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25147,meta25146__$1){
var self__ = this;
var _25147__$1 = this;
return (new malli.registry.t_malli$registry25145(self__.m,meta25146__$1));
}));

(malli.registry.t_malli$registry25145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25147){
var self__ = this;
var _25147__$1 = this;
return self__.meta25146;
}));

(malli.registry.t_malli$registry25145.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25145.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry25145.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry25145.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta25146","meta25146",181144181,null)], null);
}));

(malli.registry.t_malli$registry25145.cljs$lang$type = true);

(malli.registry.t_malli$registry25145.cljs$lang$ctorStr = "malli.registry/t_malli$registry25145");

(malli.registry.t_malli$registry25145.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25145");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25145.
 */
malli.registry.__GT_t_malli$registry25145 = (function malli$registry$__GT_t_malli$registry25145(m,meta25146){
return (new malli.registry.t_malli$registry25145(m,meta25146));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry25145(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25161 = (function (meta25162){
this.meta25162 = meta25162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25163,meta25162__$1){
var self__ = this;
var _25163__$1 = this;
return (new malli.registry.t_malli$registry25161(meta25162__$1));
}));

(malli.registry.t_malli$registry25161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25163){
var self__ = this;
var _25163__$1 = this;
return self__.meta25162;
}));

(malli.registry.t_malli$registry25161.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25161.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry25161.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry25161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25162","meta25162",-1671101281,null)], null);
}));

(malli.registry.t_malli$registry25161.cljs$lang$type = true);

(malli.registry.t_malli$registry25161.cljs$lang$ctorStr = "malli.registry/t_malli$registry25161");

(malli.registry.t_malli$registry25161.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25161");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25161.
 */
malli.registry.__GT_t_malli$registry25161 = (function malli$registry$__GT_t_malli$registry25161(meta25162){
return (new malli.registry.t_malli$registry25161(meta25162));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry25161(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25197 = (function (_QMARK_registries,registries,meta25198){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta25198 = meta25198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25199,meta25198__$1){
var self__ = this;
var _25199__$1 = this;
return (new malli.registry.t_malli$registry25197(self__._QMARK_registries,self__.registries,meta25198__$1));
}));

(malli.registry.t_malli$registry25197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25199){
var self__ = this;
var _25199__$1 = this;
return self__.meta25198;
}));

(malli.registry.t_malli$registry25197.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25197.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__25180_SHARP_){
return malli.registry._schema(p1__25180_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry25197.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry25197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta25198","meta25198",-265831635,null)], null);
}));

(malli.registry.t_malli$registry25197.cljs$lang$type = true);

(malli.registry.t_malli$registry25197.cljs$lang$ctorStr = "malli.registry/t_malli$registry25197");

(malli.registry.t_malli$registry25197.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25197");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25197.
 */
malli.registry.__GT_t_malli$registry25197 = (function malli$registry$__GT_t_malli$registry25197(_QMARK_registries,registries,meta25198){
return (new malli.registry.t_malli$registry25197(_QMARK_registries,registries,meta25198));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25340 = arguments.length;
var i__5750__auto___25341 = (0);
while(true){
if((i__5750__auto___25341 < len__5749__auto___25340)){
args__5755__auto__.push((arguments[i__5750__auto___25341]));

var G__25342 = (i__5750__auto___25341 + (1));
i__5750__auto___25341 = G__25342;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry25197(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq25181){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25181));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25222 = (function (db,meta25223){
this.db = db;
this.meta25223 = meta25223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25224,meta25223__$1){
var self__ = this;
var _25224__$1 = this;
return (new malli.registry.t_malli$registry25222(self__.db,meta25223__$1));
}));

(malli.registry.t_malli$registry25222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25224){
var self__ = this;
var _25224__$1 = this;
return self__.meta25223;
}));

(malli.registry.t_malli$registry25222.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25222.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry25222.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry25222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta25223","meta25223",261671066,null)], null);
}));

(malli.registry.t_malli$registry25222.cljs$lang$type = true);

(malli.registry.t_malli$registry25222.cljs$lang$ctorStr = "malli.registry/t_malli$registry25222");

(malli.registry.t_malli$registry25222.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25222");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25222.
 */
malli.registry.__GT_t_malli$registry25222 = (function malli$registry$__GT_t_malli$registry25222(db,meta25223){
return (new malli.registry.t_malli$registry25222(db,meta25223));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry25222(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25242 = (function (meta25243){
this.meta25243 = meta25243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25244,meta25243__$1){
var self__ = this;
var _25244__$1 = this;
return (new malli.registry.t_malli$registry25242(meta25243__$1));
}));

(malli.registry.t_malli$registry25242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25244){
var self__ = this;
var _25244__$1 = this;
return self__.meta25243;
}));

(malli.registry.t_malli$registry25242.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25242.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry25242.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry25242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25243","meta25243",-396627495,null)], null);
}));

(malli.registry.t_malli$registry25242.cljs$lang$type = true);

(malli.registry.t_malli$registry25242.cljs$lang$ctorStr = "malli.registry/t_malli$registry25242");

(malli.registry.t_malli$registry25242.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25242");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25242.
 */
malli.registry.__GT_t_malli$registry25242 = (function malli$registry$__GT_t_malli$registry25242(meta25243){
return (new malli.registry.t_malli$registry25242(meta25243));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry25242(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25268 = (function (meta25269){
this.meta25269 = meta25269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25270,meta25269__$1){
var self__ = this;
var _25270__$1 = this;
return (new malli.registry.t_malli$registry25268(meta25269__$1));
}));

(malli.registry.t_malli$registry25268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25270){
var self__ = this;
var _25270__$1 = this;
return self__.meta25269;
}));

(malli.registry.t_malli$registry25268.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25268.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry25268.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry25268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25269","meta25269",-743637674,null)], null);
}));

(malli.registry.t_malli$registry25268.cljs$lang$type = true);

(malli.registry.t_malli$registry25268.cljs$lang$ctorStr = "malli.registry/t_malli$registry25268");

(malli.registry.t_malli$registry25268.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25268");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25268.
 */
malli.registry.__GT_t_malli$registry25268 = (function malli$registry$__GT_t_malli$registry25268(meta25269){
return (new malli.registry.t_malli$registry25268(meta25269));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry25268(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25294 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta25295){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta25295 = meta25295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25296,meta25295__$1){
var self__ = this;
var _25296__$1 = this;
return (new malli.registry.t_malli$registry25294(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta25295__$1));
}));

(malli.registry.t_malli$registry25294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25296){
var self__ = this;
var _25296__$1 = this;
return self__.meta25295;
}));

(malli.registry.t_malli$registry25294.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25294.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__25307 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__25307.cljs$core$IFn$_invoke$arity$1 ? fexpr__25307.cljs$core$IFn$_invoke$arity$1(name) : fexpr__25307.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__25313 = name;
var G__25314 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__25313,G__25314) : self__.provider.call(null,G__25313,G__25314));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry25294.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry25294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta25295","meta25295",46630586,null)], null);
}));

(malli.registry.t_malli$registry25294.cljs$lang$type = true);

(malli.registry.t_malli$registry25294.cljs$lang$ctorStr = "malli.registry/t_malli$registry25294");

(malli.registry.t_malli$registry25294.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25294");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25294.
 */
malli.registry.__GT_t_malli$registry25294 = (function malli$registry$__GT_t_malli$registry25294(default_registry,provider,cache_STAR_,registry_STAR_,meta25295){
return (new malli.registry.t_malli$registry25294(default_registry,provider,cache_STAR_,registry_STAR_,meta25295));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry25294(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
