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

var malli$registry$Registry$_schema$dyn_45288 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45288(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45291 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45291(this$);
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
malli.registry.t_malli$registry45171 = (function (m,fm,meta45172){
this.m = m;
this.fm = fm;
this.meta45172 = meta45172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45173,meta45172__$1){
var self__ = this;
var _45173__$1 = this;
return (new malli.registry.t_malli$registry45171(self__.m,self__.fm,meta45172__$1));
}));

(malli.registry.t_malli$registry45171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45173){
var self__ = this;
var _45173__$1 = this;
return self__.meta45172;
}));

(malli.registry.t_malli$registry45171.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45171.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45171.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45172","meta45172",-1661713127,null)], null);
}));

(malli.registry.t_malli$registry45171.cljs$lang$type = true);

(malli.registry.t_malli$registry45171.cljs$lang$ctorStr = "malli.registry/t_malli$registry45171");

(malli.registry.t_malli$registry45171.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45171");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45171.
 */
malli.registry.__GT_t_malli$registry45171 = (function malli$registry$__GT_t_malli$registry45171(m,fm,meta45172){
return (new malli.registry.t_malli$registry45171(m,fm,meta45172));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45171(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45175 = (function (m,meta45176){
this.m = m;
this.meta45176 = meta45176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45177,meta45176__$1){
var self__ = this;
var _45177__$1 = this;
return (new malli.registry.t_malli$registry45175(self__.m,meta45176__$1));
}));

(malli.registry.t_malli$registry45175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45177){
var self__ = this;
var _45177__$1 = this;
return self__.meta45176;
}));

(malli.registry.t_malli$registry45175.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45175.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45175.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45176","meta45176",-1530255568,null)], null);
}));

(malli.registry.t_malli$registry45175.cljs$lang$type = true);

(malli.registry.t_malli$registry45175.cljs$lang$ctorStr = "malli.registry/t_malli$registry45175");

(malli.registry.t_malli$registry45175.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45175");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45175.
 */
malli.registry.__GT_t_malli$registry45175 = (function malli$registry$__GT_t_malli$registry45175(m,meta45176){
return (new malli.registry.t_malli$registry45175(m,meta45176));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45175(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45198 = (function (meta45199){
this.meta45199 = meta45199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45200,meta45199__$1){
var self__ = this;
var _45200__$1 = this;
return (new malli.registry.t_malli$registry45198(meta45199__$1));
}));

(malli.registry.t_malli$registry45198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45200){
var self__ = this;
var _45200__$1 = this;
return self__.meta45199;
}));

(malli.registry.t_malli$registry45198.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45198.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45198.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45199","meta45199",1541849713,null)], null);
}));

(malli.registry.t_malli$registry45198.cljs$lang$type = true);

(malli.registry.t_malli$registry45198.cljs$lang$ctorStr = "malli.registry/t_malli$registry45198");

(malli.registry.t_malli$registry45198.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45198");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45198.
 */
malli.registry.__GT_t_malli$registry45198 = (function malli$registry$__GT_t_malli$registry45198(meta45199){
return (new malli.registry.t_malli$registry45198(meta45199));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45198(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45244 = (function (_QMARK_registries,registries,meta45245){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45245 = meta45245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45246,meta45245__$1){
var self__ = this;
var _45246__$1 = this;
return (new malli.registry.t_malli$registry45244(self__._QMARK_registries,self__.registries,meta45245__$1));
}));

(malli.registry.t_malli$registry45244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45246){
var self__ = this;
var _45246__$1 = this;
return self__.meta45245;
}));

(malli.registry.t_malli$registry45244.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45244.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45236_SHARP_){
return malli.registry._schema(p1__45236_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45244.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45245","meta45245",253071205,null)], null);
}));

(malli.registry.t_malli$registry45244.cljs$lang$type = true);

(malli.registry.t_malli$registry45244.cljs$lang$ctorStr = "malli.registry/t_malli$registry45244");

(malli.registry.t_malli$registry45244.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45244");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45244.
 */
malli.registry.__GT_t_malli$registry45244 = (function malli$registry$__GT_t_malli$registry45244(_QMARK_registries,registries,meta45245){
return (new malli.registry.t_malli$registry45244(_QMARK_registries,registries,meta45245));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45299 = arguments.length;
var i__5750__auto___45300 = (0);
while(true){
if((i__5750__auto___45300 < len__5749__auto___45299)){
args__5755__auto__.push((arguments[i__5750__auto___45300]));

var G__45301 = (i__5750__auto___45300 + (1));
i__5750__auto___45300 = G__45301;
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
return (new malli.registry.t_malli$registry45244(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45238){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45238));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45256 = (function (db,meta45257){
this.db = db;
this.meta45257 = meta45257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45258,meta45257__$1){
var self__ = this;
var _45258__$1 = this;
return (new malli.registry.t_malli$registry45256(self__.db,meta45257__$1));
}));

(malli.registry.t_malli$registry45256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45258){
var self__ = this;
var _45258__$1 = this;
return self__.meta45257;
}));

(malli.registry.t_malli$registry45256.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45256.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45256.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45257","meta45257",-78046512,null)], null);
}));

(malli.registry.t_malli$registry45256.cljs$lang$type = true);

(malli.registry.t_malli$registry45256.cljs$lang$ctorStr = "malli.registry/t_malli$registry45256");

(malli.registry.t_malli$registry45256.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45256");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45256.
 */
malli.registry.__GT_t_malli$registry45256 = (function malli$registry$__GT_t_malli$registry45256(db,meta45257){
return (new malli.registry.t_malli$registry45256(db,meta45257));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45256(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45260 = (function (meta45261){
this.meta45261 = meta45261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45262,meta45261__$1){
var self__ = this;
var _45262__$1 = this;
return (new malli.registry.t_malli$registry45260(meta45261__$1));
}));

(malli.registry.t_malli$registry45260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45262){
var self__ = this;
var _45262__$1 = this;
return self__.meta45261;
}));

(malli.registry.t_malli$registry45260.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45260.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45260.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45261","meta45261",-361189788,null)], null);
}));

(malli.registry.t_malli$registry45260.cljs$lang$type = true);

(malli.registry.t_malli$registry45260.cljs$lang$ctorStr = "malli.registry/t_malli$registry45260");

(malli.registry.t_malli$registry45260.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45260");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45260.
 */
malli.registry.__GT_t_malli$registry45260 = (function malli$registry$__GT_t_malli$registry45260(meta45261){
return (new malli.registry.t_malli$registry45260(meta45261));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45260(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45263 = (function (meta45264){
this.meta45264 = meta45264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45265,meta45264__$1){
var self__ = this;
var _45265__$1 = this;
return (new malli.registry.t_malli$registry45263(meta45264__$1));
}));

(malli.registry.t_malli$registry45263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45265){
var self__ = this;
var _45265__$1 = this;
return self__.meta45264;
}));

(malli.registry.t_malli$registry45263.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45263.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45263.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45264","meta45264",-47071736,null)], null);
}));

(malli.registry.t_malli$registry45263.cljs$lang$type = true);

(malli.registry.t_malli$registry45263.cljs$lang$ctorStr = "malli.registry/t_malli$registry45263");

(malli.registry.t_malli$registry45263.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45263");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45263.
 */
malli.registry.__GT_t_malli$registry45263 = (function malli$registry$__GT_t_malli$registry45263(meta45264){
return (new malli.registry.t_malli$registry45263(meta45264));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45263(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45266 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45267){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45267 = meta45267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45268,meta45267__$1){
var self__ = this;
var _45268__$1 = this;
return (new malli.registry.t_malli$registry45266(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45267__$1));
}));

(malli.registry.t_malli$registry45266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45268){
var self__ = this;
var _45268__$1 = this;
return self__.meta45267;
}));

(malli.registry.t_malli$registry45266.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45266.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45270 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45270.cljs$core$IFn$_invoke$arity$1 ? fexpr__45270.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45270.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45271 = name;
var G__45272 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45271,G__45272) : self__.provider.call(null,G__45271,G__45272));
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

(malli.registry.t_malli$registry45266.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45267","meta45267",1319297182,null)], null);
}));

(malli.registry.t_malli$registry45266.cljs$lang$type = true);

(malli.registry.t_malli$registry45266.cljs$lang$ctorStr = "malli.registry/t_malli$registry45266");

(malli.registry.t_malli$registry45266.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45266");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45266.
 */
malli.registry.__GT_t_malli$registry45266 = (function malli$registry$__GT_t_malli$registry45266(default_registry,provider,cache_STAR_,registry_STAR_,meta45267){
return (new malli.registry.t_malli$registry45266(default_registry,provider,cache_STAR_,registry_STAR_,meta45267));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45266(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
