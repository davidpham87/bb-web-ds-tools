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

var malli$registry$Registry$_schema$dyn_45210 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45210(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45211 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45211(this$);
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
malli.registry.t_malli$registry45113 = (function (m,fm,meta45114){
this.m = m;
this.fm = fm;
this.meta45114 = meta45114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45115,meta45114__$1){
var self__ = this;
var _45115__$1 = this;
return (new malli.registry.t_malli$registry45113(self__.m,self__.fm,meta45114__$1));
}));

(malli.registry.t_malli$registry45113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45115){
var self__ = this;
var _45115__$1 = this;
return self__.meta45114;
}));

(malli.registry.t_malli$registry45113.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45113.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45113.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45114","meta45114",-978487790,null)], null);
}));

(malli.registry.t_malli$registry45113.cljs$lang$type = true);

(malli.registry.t_malli$registry45113.cljs$lang$ctorStr = "malli.registry/t_malli$registry45113");

(malli.registry.t_malli$registry45113.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45113");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45113.
 */
malli.registry.__GT_t_malli$registry45113 = (function malli$registry$__GT_t_malli$registry45113(m,fm,meta45114){
return (new malli.registry.t_malli$registry45113(m,fm,meta45114));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45113(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45128 = (function (m,meta45129){
this.m = m;
this.meta45129 = meta45129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45130,meta45129__$1){
var self__ = this;
var _45130__$1 = this;
return (new malli.registry.t_malli$registry45128(self__.m,meta45129__$1));
}));

(malli.registry.t_malli$registry45128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45130){
var self__ = this;
var _45130__$1 = this;
return self__.meta45129;
}));

(malli.registry.t_malli$registry45128.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45128.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45128.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45129","meta45129",768585235,null)], null);
}));

(malli.registry.t_malli$registry45128.cljs$lang$type = true);

(malli.registry.t_malli$registry45128.cljs$lang$ctorStr = "malli.registry/t_malli$registry45128");

(malli.registry.t_malli$registry45128.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45128");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45128.
 */
malli.registry.__GT_t_malli$registry45128 = (function malli$registry$__GT_t_malli$registry45128(m,meta45129){
return (new malli.registry.t_malli$registry45128(m,meta45129));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45128(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45147 = (function (meta45148){
this.meta45148 = meta45148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45149,meta45148__$1){
var self__ = this;
var _45149__$1 = this;
return (new malli.registry.t_malli$registry45147(meta45148__$1));
}));

(malli.registry.t_malli$registry45147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45149){
var self__ = this;
var _45149__$1 = this;
return self__.meta45148;
}));

(malli.registry.t_malli$registry45147.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45147.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45147.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45148","meta45148",1970397807,null)], null);
}));

(malli.registry.t_malli$registry45147.cljs$lang$type = true);

(malli.registry.t_malli$registry45147.cljs$lang$ctorStr = "malli.registry/t_malli$registry45147");

(malli.registry.t_malli$registry45147.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45147");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45147.
 */
malli.registry.__GT_t_malli$registry45147 = (function malli$registry$__GT_t_malli$registry45147(meta45148){
return (new malli.registry.t_malli$registry45147(meta45148));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45147(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45170 = (function (_QMARK_registries,registries,meta45171){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45171 = meta45171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45172,meta45171__$1){
var self__ = this;
var _45172__$1 = this;
return (new malli.registry.t_malli$registry45170(self__._QMARK_registries,self__.registries,meta45171__$1));
}));

(malli.registry.t_malli$registry45170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45172){
var self__ = this;
var _45172__$1 = this;
return self__.meta45171;
}));

(malli.registry.t_malli$registry45170.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45170.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45150_SHARP_){
return malli.registry._schema(p1__45150_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45170.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45171","meta45171",-429118718,null)], null);
}));

(malli.registry.t_malli$registry45170.cljs$lang$type = true);

(malli.registry.t_malli$registry45170.cljs$lang$ctorStr = "malli.registry/t_malli$registry45170");

(malli.registry.t_malli$registry45170.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45170");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45170.
 */
malli.registry.__GT_t_malli$registry45170 = (function malli$registry$__GT_t_malli$registry45170(_QMARK_registries,registries,meta45171){
return (new malli.registry.t_malli$registry45170(_QMARK_registries,registries,meta45171));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45224 = arguments.length;
var i__5750__auto___45225 = (0);
while(true){
if((i__5750__auto___45225 < len__5749__auto___45224)){
args__5755__auto__.push((arguments[i__5750__auto___45225]));

var G__45226 = (i__5750__auto___45225 + (1));
i__5750__auto___45225 = G__45226;
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
return (new malli.registry.t_malli$registry45170(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45169){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45169));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45174 = (function (db,meta45175){
this.db = db;
this.meta45175 = meta45175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45176,meta45175__$1){
var self__ = this;
var _45176__$1 = this;
return (new malli.registry.t_malli$registry45174(self__.db,meta45175__$1));
}));

(malli.registry.t_malli$registry45174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45176){
var self__ = this;
var _45176__$1 = this;
return self__.meta45175;
}));

(malli.registry.t_malli$registry45174.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45174.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45174.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45175","meta45175",-120603543,null)], null);
}));

(malli.registry.t_malli$registry45174.cljs$lang$type = true);

(malli.registry.t_malli$registry45174.cljs$lang$ctorStr = "malli.registry/t_malli$registry45174");

(malli.registry.t_malli$registry45174.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45174");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45174.
 */
malli.registry.__GT_t_malli$registry45174 = (function malli$registry$__GT_t_malli$registry45174(db,meta45175){
return (new malli.registry.t_malli$registry45174(db,meta45175));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45174(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45177 = (function (meta45178){
this.meta45178 = meta45178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45179,meta45178__$1){
var self__ = this;
var _45179__$1 = this;
return (new malli.registry.t_malli$registry45177(meta45178__$1));
}));

(malli.registry.t_malli$registry45177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45179){
var self__ = this;
var _45179__$1 = this;
return self__.meta45178;
}));

(malli.registry.t_malli$registry45177.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45177.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45177.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45178","meta45178",921125379,null)], null);
}));

(malli.registry.t_malli$registry45177.cljs$lang$type = true);

(malli.registry.t_malli$registry45177.cljs$lang$ctorStr = "malli.registry/t_malli$registry45177");

(malli.registry.t_malli$registry45177.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45177");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45177.
 */
malli.registry.__GT_t_malli$registry45177 = (function malli$registry$__GT_t_malli$registry45177(meta45178){
return (new malli.registry.t_malli$registry45177(meta45178));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45177(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45185 = (function (meta45186){
this.meta45186 = meta45186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45187,meta45186__$1){
var self__ = this;
var _45187__$1 = this;
return (new malli.registry.t_malli$registry45185(meta45186__$1));
}));

(malli.registry.t_malli$registry45185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45187){
var self__ = this;
var _45187__$1 = this;
return self__.meta45186;
}));

(malli.registry.t_malli$registry45185.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45185.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45185.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45186","meta45186",378174648,null)], null);
}));

(malli.registry.t_malli$registry45185.cljs$lang$type = true);

(malli.registry.t_malli$registry45185.cljs$lang$ctorStr = "malli.registry/t_malli$registry45185");

(malli.registry.t_malli$registry45185.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45185");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45185.
 */
malli.registry.__GT_t_malli$registry45185 = (function malli$registry$__GT_t_malli$registry45185(meta45186){
return (new malli.registry.t_malli$registry45185(meta45186));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45185(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45194 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45195){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45195 = meta45195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45196,meta45195__$1){
var self__ = this;
var _45196__$1 = this;
return (new malli.registry.t_malli$registry45194(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45195__$1));
}));

(malli.registry.t_malli$registry45194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45196){
var self__ = this;
var _45196__$1 = this;
return self__.meta45195;
}));

(malli.registry.t_malli$registry45194.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45194.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45202 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45202.cljs$core$IFn$_invoke$arity$1 ? fexpr__45202.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45202.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45203 = name;
var G__45204 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45203,G__45204) : self__.provider.call(null,G__45203,G__45204));
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

(malli.registry.t_malli$registry45194.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45195","meta45195",2129052179,null)], null);
}));

(malli.registry.t_malli$registry45194.cljs$lang$type = true);

(malli.registry.t_malli$registry45194.cljs$lang$ctorStr = "malli.registry/t_malli$registry45194");

(malli.registry.t_malli$registry45194.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45194");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45194.
 */
malli.registry.__GT_t_malli$registry45194 = (function malli$registry$__GT_t_malli$registry45194(default_registry,provider,cache_STAR_,registry_STAR_,meta45195){
return (new malli.registry.t_malli$registry45194(default_registry,provider,cache_STAR_,registry_STAR_,meta45195));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45194(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
