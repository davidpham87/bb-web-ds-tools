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
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
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

var malli$registry$Registry$_schema$dyn_25325 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_25325(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_25326 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_25326(this$);
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
malli.registry.t_malli$registry25205 = (function (m,fm,meta25206){
this.m = m;
this.fm = fm;
this.meta25206 = meta25206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25207,meta25206__$1){
var self__ = this;
var _25207__$1 = this;
return (new malli.registry.t_malli$registry25205(self__.m,self__.fm,meta25206__$1));
}));

(malli.registry.t_malli$registry25205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25207){
var self__ = this;
var _25207__$1 = this;
return self__.meta25206;
}));

(malli.registry.t_malli$registry25205.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25205.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry25205.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry25205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta25206","meta25206",-361527156,null)], null);
}));

(malli.registry.t_malli$registry25205.cljs$lang$type = true);

(malli.registry.t_malli$registry25205.cljs$lang$ctorStr = "malli.registry/t_malli$registry25205");

(malli.registry.t_malli$registry25205.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25205");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25205.
 */
malli.registry.__GT_t_malli$registry25205 = (function malli$registry$__GT_t_malli$registry25205(m,fm,meta25206){
return (new malli.registry.t_malli$registry25205(m,fm,meta25206));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry25205(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25214 = (function (m,meta25215){
this.m = m;
this.meta25215 = meta25215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25216,meta25215__$1){
var self__ = this;
var _25216__$1 = this;
return (new malli.registry.t_malli$registry25214(self__.m,meta25215__$1));
}));

(malli.registry.t_malli$registry25214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25216){
var self__ = this;
var _25216__$1 = this;
return self__.meta25215;
}));

(malli.registry.t_malli$registry25214.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25214.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry25214.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry25214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta25215","meta25215",967607764,null)], null);
}));

(malli.registry.t_malli$registry25214.cljs$lang$type = true);

(malli.registry.t_malli$registry25214.cljs$lang$ctorStr = "malli.registry/t_malli$registry25214");

(malli.registry.t_malli$registry25214.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25214");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25214.
 */
malli.registry.__GT_t_malli$registry25214 = (function malli$registry$__GT_t_malli$registry25214(m,meta25215){
return (new malli.registry.t_malli$registry25214(m,meta25215));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry25214(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry25229 = (function (meta25230){
this.meta25230 = meta25230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25231,meta25230__$1){
var self__ = this;
var _25231__$1 = this;
return (new malli.registry.t_malli$registry25229(meta25230__$1));
}));

(malli.registry.t_malli$registry25229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25231){
var self__ = this;
var _25231__$1 = this;
return self__.meta25230;
}));

(malli.registry.t_malli$registry25229.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25229.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry25229.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry25229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25230","meta25230",-156021009,null)], null);
}));

(malli.registry.t_malli$registry25229.cljs$lang$type = true);

(malli.registry.t_malli$registry25229.cljs$lang$ctorStr = "malli.registry/t_malli$registry25229");

(malli.registry.t_malli$registry25229.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25229");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25229.
 */
malli.registry.__GT_t_malli$registry25229 = (function malli$registry$__GT_t_malli$registry25229(meta25230){
return (new malli.registry.t_malli$registry25229(meta25230));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry25229(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25240 = (function (_QMARK_registries,registries,meta25241){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta25241 = meta25241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25242,meta25241__$1){
var self__ = this;
var _25242__$1 = this;
return (new malli.registry.t_malli$registry25240(self__._QMARK_registries,self__.registries,meta25241__$1));
}));

(malli.registry.t_malli$registry25240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25242){
var self__ = this;
var _25242__$1 = this;
return self__.meta25241;
}));

(malli.registry.t_malli$registry25240.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25240.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__25236_SHARP_){
return malli.registry._schema(p1__25236_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry25240.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry25240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta25241","meta25241",966199587,null)], null);
}));

(malli.registry.t_malli$registry25240.cljs$lang$type = true);

(malli.registry.t_malli$registry25240.cljs$lang$ctorStr = "malli.registry/t_malli$registry25240");

(malli.registry.t_malli$registry25240.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25240");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25240.
 */
malli.registry.__GT_t_malli$registry25240 = (function malli$registry$__GT_t_malli$registry25240(_QMARK_registries,registries,meta25241){
return (new malli.registry.t_malli$registry25240(_QMARK_registries,registries,meta25241));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25337 = arguments.length;
var i__5750__auto___25339 = (0);
while(true){
if((i__5750__auto___25339 < len__5749__auto___25337)){
args__5755__auto__.push((arguments[i__5750__auto___25339]));

var G__25340 = (i__5750__auto___25339 + (1));
i__5750__auto___25339 = G__25340;
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
return (new malli.registry.t_malli$registry25240(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq25238){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25238));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25247 = (function (db,meta25248){
this.db = db;
this.meta25248 = meta25248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25249,meta25248__$1){
var self__ = this;
var _25249__$1 = this;
return (new malli.registry.t_malli$registry25247(self__.db,meta25248__$1));
}));

(malli.registry.t_malli$registry25247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25249){
var self__ = this;
var _25249__$1 = this;
return self__.meta25248;
}));

(malli.registry.t_malli$registry25247.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25247.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry25247.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry25247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta25248","meta25248",609050014,null)], null);
}));

(malli.registry.t_malli$registry25247.cljs$lang$type = true);

(malli.registry.t_malli$registry25247.cljs$lang$ctorStr = "malli.registry/t_malli$registry25247");

(malli.registry.t_malli$registry25247.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25247");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25247.
 */
malli.registry.__GT_t_malli$registry25247 = (function malli$registry$__GT_t_malli$registry25247(db,meta25248){
return (new malli.registry.t_malli$registry25247(db,meta25248));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry25247(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry25253 = (function (meta25254){
this.meta25254 = meta25254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25255,meta25254__$1){
var self__ = this;
var _25255__$1 = this;
return (new malli.registry.t_malli$registry25253(meta25254__$1));
}));

(malli.registry.t_malli$registry25253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25255){
var self__ = this;
var _25255__$1 = this;
return self__.meta25254;
}));

(malli.registry.t_malli$registry25253.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25253.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry25253.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry25253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta25254","meta25254",1265987028,null)], null);
}));

(malli.registry.t_malli$registry25253.cljs$lang$type = true);

(malli.registry.t_malli$registry25253.cljs$lang$ctorStr = "malli.registry/t_malli$registry25253");

(malli.registry.t_malli$registry25253.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25253");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25253.
 */
malli.registry.__GT_t_malli$registry25253 = (function malli$registry$__GT_t_malli$registry25253(meta25254){
return (new malli.registry.t_malli$registry25253(meta25254));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry25253(cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry25295 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta25296){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta25296 = meta25296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry25295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25297,meta25296__$1){
var self__ = this;
var _25297__$1 = this;
return (new malli.registry.t_malli$registry25295(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta25296__$1));
}));

(malli.registry.t_malli$registry25295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25297){
var self__ = this;
var _25297__$1 = this;
return self__.meta25296;
}));

(malli.registry.t_malli$registry25295.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry25295.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__25303 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__25303.cljs$core$IFn$_invoke$arity$1 ? fexpr__25303.cljs$core$IFn$_invoke$arity$1(name) : fexpr__25303.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__25304 = name;
var G__25305 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__25304,G__25305) : self__.provider.call(null,G__25304,G__25305));
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

(malli.registry.t_malli$registry25295.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry25295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta25296","meta25296",1927192831,null)], null);
}));

(malli.registry.t_malli$registry25295.cljs$lang$type = true);

(malli.registry.t_malli$registry25295.cljs$lang$ctorStr = "malli.registry/t_malli$registry25295");

(malli.registry.t_malli$registry25295.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry25295");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry25295.
 */
malli.registry.__GT_t_malli$registry25295 = (function malli$registry$__GT_t_malli$registry25295(default_registry,provider,cache_STAR_,registry_STAR_,meta25296){
return (new malli.registry.t_malli$registry25295(default_registry,provider,cache_STAR_,registry_STAR_,meta25296));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry25295(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
