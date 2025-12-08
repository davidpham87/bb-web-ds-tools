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

var malli$registry$Registry$_schema$dyn_45511 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45511(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45514 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45514(this$);
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
malli.registry.t_malli$registry45372 = (function (m,fm,meta45373){
this.m = m;
this.fm = fm;
this.meta45373 = meta45373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45374,meta45373__$1){
var self__ = this;
var _45374__$1 = this;
return (new malli.registry.t_malli$registry45372(self__.m,self__.fm,meta45373__$1));
}));

(malli.registry.t_malli$registry45372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45374){
var self__ = this;
var _45374__$1 = this;
return self__.meta45373;
}));

(malli.registry.t_malli$registry45372.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45372.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45372.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45373","meta45373",550234427,null)], null);
}));

(malli.registry.t_malli$registry45372.cljs$lang$type = true);

(malli.registry.t_malli$registry45372.cljs$lang$ctorStr = "malli.registry/t_malli$registry45372");

(malli.registry.t_malli$registry45372.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45372");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45372.
 */
malli.registry.__GT_t_malli$registry45372 = (function malli$registry$__GT_t_malli$registry45372(m,fm,meta45373){
return (new malli.registry.t_malli$registry45372(m,fm,meta45373));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45372(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45377 = (function (m,meta45378){
this.m = m;
this.meta45378 = meta45378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45379,meta45378__$1){
var self__ = this;
var _45379__$1 = this;
return (new malli.registry.t_malli$registry45377(self__.m,meta45378__$1));
}));

(malli.registry.t_malli$registry45377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45379){
var self__ = this;
var _45379__$1 = this;
return self__.meta45378;
}));

(malli.registry.t_malli$registry45377.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45377.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45377.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45378","meta45378",1822023155,null)], null);
}));

(malli.registry.t_malli$registry45377.cljs$lang$type = true);

(malli.registry.t_malli$registry45377.cljs$lang$ctorStr = "malli.registry/t_malli$registry45377");

(malli.registry.t_malli$registry45377.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45377");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45377.
 */
malli.registry.__GT_t_malli$registry45377 = (function malli$registry$__GT_t_malli$registry45377(m,meta45378){
return (new malli.registry.t_malli$registry45377(m,meta45378));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45377(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45401 = (function (meta45402){
this.meta45402 = meta45402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45403,meta45402__$1){
var self__ = this;
var _45403__$1 = this;
return (new malli.registry.t_malli$registry45401(meta45402__$1));
}));

(malli.registry.t_malli$registry45401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45403){
var self__ = this;
var _45403__$1 = this;
return self__.meta45402;
}));

(malli.registry.t_malli$registry45401.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45401.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45401.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45402","meta45402",-366085460,null)], null);
}));

(malli.registry.t_malli$registry45401.cljs$lang$type = true);

(malli.registry.t_malli$registry45401.cljs$lang$ctorStr = "malli.registry/t_malli$registry45401");

(malli.registry.t_malli$registry45401.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45401");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45401.
 */
malli.registry.__GT_t_malli$registry45401 = (function malli$registry$__GT_t_malli$registry45401(meta45402){
return (new malli.registry.t_malli$registry45401(meta45402));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45401(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45406 = (function (_QMARK_registries,registries,meta45407){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45407 = meta45407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45408,meta45407__$1){
var self__ = this;
var _45408__$1 = this;
return (new malli.registry.t_malli$registry45406(self__._QMARK_registries,self__.registries,meta45407__$1));
}));

(malli.registry.t_malli$registry45406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45408){
var self__ = this;
var _45408__$1 = this;
return self__.meta45407;
}));

(malli.registry.t_malli$registry45406.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45406.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45404_SHARP_){
return malli.registry._schema(p1__45404_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45406.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45407","meta45407",1520978402,null)], null);
}));

(malli.registry.t_malli$registry45406.cljs$lang$type = true);

(malli.registry.t_malli$registry45406.cljs$lang$ctorStr = "malli.registry/t_malli$registry45406");

(malli.registry.t_malli$registry45406.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45406");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45406.
 */
malli.registry.__GT_t_malli$registry45406 = (function malli$registry$__GT_t_malli$registry45406(_QMARK_registries,registries,meta45407){
return (new malli.registry.t_malli$registry45406(_QMARK_registries,registries,meta45407));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45524 = arguments.length;
var i__5750__auto___45525 = (0);
while(true){
if((i__5750__auto___45525 < len__5749__auto___45524)){
args__5755__auto__.push((arguments[i__5750__auto___45525]));

var G__45526 = (i__5750__auto___45525 + (1));
i__5750__auto___45525 = G__45526;
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
return (new malli.registry.t_malli$registry45406(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45405){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45405));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45426 = (function (db,meta45427){
this.db = db;
this.meta45427 = meta45427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45428,meta45427__$1){
var self__ = this;
var _45428__$1 = this;
return (new malli.registry.t_malli$registry45426(self__.db,meta45427__$1));
}));

(malli.registry.t_malli$registry45426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45428){
var self__ = this;
var _45428__$1 = this;
return self__.meta45427;
}));

(malli.registry.t_malli$registry45426.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45426.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45426.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45427","meta45427",1748551238,null)], null);
}));

(malli.registry.t_malli$registry45426.cljs$lang$type = true);

(malli.registry.t_malli$registry45426.cljs$lang$ctorStr = "malli.registry/t_malli$registry45426");

(malli.registry.t_malli$registry45426.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45426");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45426.
 */
malli.registry.__GT_t_malli$registry45426 = (function malli$registry$__GT_t_malli$registry45426(db,meta45427){
return (new malli.registry.t_malli$registry45426(db,meta45427));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45426(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45451 = (function (meta45452){
this.meta45452 = meta45452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45453,meta45452__$1){
var self__ = this;
var _45453__$1 = this;
return (new malli.registry.t_malli$registry45451(meta45452__$1));
}));

(malli.registry.t_malli$registry45451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45453){
var self__ = this;
var _45453__$1 = this;
return self__.meta45452;
}));

(malli.registry.t_malli$registry45451.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45451.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45451.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45452","meta45452",20177370,null)], null);
}));

(malli.registry.t_malli$registry45451.cljs$lang$type = true);

(malli.registry.t_malli$registry45451.cljs$lang$ctorStr = "malli.registry/t_malli$registry45451");

(malli.registry.t_malli$registry45451.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45451");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45451.
 */
malli.registry.__GT_t_malli$registry45451 = (function malli$registry$__GT_t_malli$registry45451(meta45452){
return (new malli.registry.t_malli$registry45451(meta45452));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45451(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45472 = (function (meta45473){
this.meta45473 = meta45473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45474,meta45473__$1){
var self__ = this;
var _45474__$1 = this;
return (new malli.registry.t_malli$registry45472(meta45473__$1));
}));

(malli.registry.t_malli$registry45472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45474){
var self__ = this;
var _45474__$1 = this;
return self__.meta45473;
}));

(malli.registry.t_malli$registry45472.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45472.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45472.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45473","meta45473",-96354264,null)], null);
}));

(malli.registry.t_malli$registry45472.cljs$lang$type = true);

(malli.registry.t_malli$registry45472.cljs$lang$ctorStr = "malli.registry/t_malli$registry45472");

(malli.registry.t_malli$registry45472.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45472");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45472.
 */
malli.registry.__GT_t_malli$registry45472 = (function malli$registry$__GT_t_malli$registry45472(meta45473){
return (new malli.registry.t_malli$registry45472(meta45473));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45472(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45484 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45485){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45485 = meta45485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45486,meta45485__$1){
var self__ = this;
var _45486__$1 = this;
return (new malli.registry.t_malli$registry45484(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45485__$1));
}));

(malli.registry.t_malli$registry45484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45486){
var self__ = this;
var _45486__$1 = this;
return self__.meta45485;
}));

(malli.registry.t_malli$registry45484.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45484.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45491 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45491.cljs$core$IFn$_invoke$arity$1 ? fexpr__45491.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45491.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45493 = name;
var G__45494 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45493,G__45494) : self__.provider.call(null,G__45493,G__45494));
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

(malli.registry.t_malli$registry45484.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45485","meta45485",776762423,null)], null);
}));

(malli.registry.t_malli$registry45484.cljs$lang$type = true);

(malli.registry.t_malli$registry45484.cljs$lang$ctorStr = "malli.registry/t_malli$registry45484");

(malli.registry.t_malli$registry45484.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45484");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45484.
 */
malli.registry.__GT_t_malli$registry45484 = (function malli$registry$__GT_t_malli$registry45484(default_registry,provider,cache_STAR_,registry_STAR_,meta45485){
return (new malli.registry.t_malli$registry45484(default_registry,provider,cache_STAR_,registry_STAR_,meta45485));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45484(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
