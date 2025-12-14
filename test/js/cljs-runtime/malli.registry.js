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

var malli$registry$Registry$_schema$dyn_52527 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_52527(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52528 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_52528(this$);
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
malli.registry.t_malli$registry52373 = (function (m,fm,meta52374){
this.m = m;
this.fm = fm;
this.meta52374 = meta52374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52375,meta52374__$1){
var self__ = this;
var _52375__$1 = this;
return (new malli.registry.t_malli$registry52373(self__.m,self__.fm,meta52374__$1));
}));

(malli.registry.t_malli$registry52373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52375){
var self__ = this;
var _52375__$1 = this;
return self__.meta52374;
}));

(malli.registry.t_malli$registry52373.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52373.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52373.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52374","meta52374",237737990,null)], null);
}));

(malli.registry.t_malli$registry52373.cljs$lang$type = true);

(malli.registry.t_malli$registry52373.cljs$lang$ctorStr = "malli.registry/t_malli$registry52373");

(malli.registry.t_malli$registry52373.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52373");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52373.
 */
malli.registry.__GT_t_malli$registry52373 = (function malli$registry$__GT_t_malli$registry52373(m,fm,meta52374){
return (new malli.registry.t_malli$registry52373(m,fm,meta52374));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry52373(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52377 = (function (m,meta52378){
this.m = m;
this.meta52378 = meta52378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52379,meta52378__$1){
var self__ = this;
var _52379__$1 = this;
return (new malli.registry.t_malli$registry52377(self__.m,meta52378__$1));
}));

(malli.registry.t_malli$registry52377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52379){
var self__ = this;
var _52379__$1 = this;
return self__.meta52378;
}));

(malli.registry.t_malli$registry52377.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52377.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52377.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52378","meta52378",-1526427327,null)], null);
}));

(malli.registry.t_malli$registry52377.cljs$lang$type = true);

(malli.registry.t_malli$registry52377.cljs$lang$ctorStr = "malli.registry/t_malli$registry52377");

(malli.registry.t_malli$registry52377.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52377");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52377.
 */
malli.registry.__GT_t_malli$registry52377 = (function malli$registry$__GT_t_malli$registry52377(m,meta52378){
return (new malli.registry.t_malli$registry52377(m,meta52378));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry52377(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry52383 = (function (meta52384){
this.meta52384 = meta52384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52385,meta52384__$1){
var self__ = this;
var _52385__$1 = this;
return (new malli.registry.t_malli$registry52383(meta52384__$1));
}));

(malli.registry.t_malli$registry52383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52385){
var self__ = this;
var _52385__$1 = this;
return self__.meta52384;
}));

(malli.registry.t_malli$registry52383.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52383.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52383.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52384","meta52384",-199170873,null)], null);
}));

(malli.registry.t_malli$registry52383.cljs$lang$type = true);

(malli.registry.t_malli$registry52383.cljs$lang$ctorStr = "malli.registry/t_malli$registry52383");

(malli.registry.t_malli$registry52383.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52383");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52383.
 */
malli.registry.__GT_t_malli$registry52383 = (function malli$registry$__GT_t_malli$registry52383(meta52384){
return (new malli.registry.t_malli$registry52383(meta52384));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry52383(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52402 = (function (_QMARK_registries,registries,meta52403){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52403 = meta52403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52404,meta52403__$1){
var self__ = this;
var _52404__$1 = this;
return (new malli.registry.t_malli$registry52402(self__._QMARK_registries,self__.registries,meta52403__$1));
}));

(malli.registry.t_malli$registry52402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52404){
var self__ = this;
var _52404__$1 = this;
return self__.meta52403;
}));

(malli.registry.t_malli$registry52402.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52402.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52399_SHARP_){
return malli.registry._schema(p1__52399_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52402.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52403","meta52403",1200743090,null)], null);
}));

(malli.registry.t_malli$registry52402.cljs$lang$type = true);

(malli.registry.t_malli$registry52402.cljs$lang$ctorStr = "malli.registry/t_malli$registry52402");

(malli.registry.t_malli$registry52402.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52402");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52402.
 */
malli.registry.__GT_t_malli$registry52402 = (function malli$registry$__GT_t_malli$registry52402(_QMARK_registries,registries,meta52403){
return (new malli.registry.t_malli$registry52402(_QMARK_registries,registries,meta52403));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52578 = arguments.length;
var i__5750__auto___52579 = (0);
while(true){
if((i__5750__auto___52579 < len__5749__auto___52578)){
args__5755__auto__.push((arguments[i__5750__auto___52579]));

var G__52580 = (i__5750__auto___52579 + (1));
i__5750__auto___52579 = G__52580;
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
return (new malli.registry.t_malli$registry52402(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52400){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52400));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52421 = (function (db,meta52422){
this.db = db;
this.meta52422 = meta52422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52423,meta52422__$1){
var self__ = this;
var _52423__$1 = this;
return (new malli.registry.t_malli$registry52421(self__.db,meta52422__$1));
}));

(malli.registry.t_malli$registry52421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52423){
var self__ = this;
var _52423__$1 = this;
return self__.meta52422;
}));

(malli.registry.t_malli$registry52421.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52421.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52421.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52422","meta52422",1779303273,null)], null);
}));

(malli.registry.t_malli$registry52421.cljs$lang$type = true);

(malli.registry.t_malli$registry52421.cljs$lang$ctorStr = "malli.registry/t_malli$registry52421");

(malli.registry.t_malli$registry52421.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52421");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52421.
 */
malli.registry.__GT_t_malli$registry52421 = (function malli$registry$__GT_t_malli$registry52421(db,meta52422){
return (new malli.registry.t_malli$registry52421(db,meta52422));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry52421(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52444 = (function (meta52445){
this.meta52445 = meta52445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52446,meta52445__$1){
var self__ = this;
var _52446__$1 = this;
return (new malli.registry.t_malli$registry52444(meta52445__$1));
}));

(malli.registry.t_malli$registry52444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52446){
var self__ = this;
var _52446__$1 = this;
return self__.meta52445;
}));

(malli.registry.t_malli$registry52444.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52444.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry52444.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry52444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52445","meta52445",2023902670,null)], null);
}));

(malli.registry.t_malli$registry52444.cljs$lang$type = true);

(malli.registry.t_malli$registry52444.cljs$lang$ctorStr = "malli.registry/t_malli$registry52444");

(malli.registry.t_malli$registry52444.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52444");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52444.
 */
malli.registry.__GT_t_malli$registry52444 = (function malli$registry$__GT_t_malli$registry52444(meta52445){
return (new malli.registry.t_malli$registry52444(meta52445));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry52444(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52453 = (function (meta52454){
this.meta52454 = meta52454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52455,meta52454__$1){
var self__ = this;
var _52455__$1 = this;
return (new malli.registry.t_malli$registry52453(meta52454__$1));
}));

(malli.registry.t_malli$registry52453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52455){
var self__ = this;
var _52455__$1 = this;
return self__.meta52454;
}));

(malli.registry.t_malli$registry52453.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52453.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52453.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52454","meta52454",1848200927,null)], null);
}));

(malli.registry.t_malli$registry52453.cljs$lang$type = true);

(malli.registry.t_malli$registry52453.cljs$lang$ctorStr = "malli.registry/t_malli$registry52453");

(malli.registry.t_malli$registry52453.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52453");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52453.
 */
malli.registry.__GT_t_malli$registry52453 = (function malli$registry$__GT_t_malli$registry52453(meta52454){
return (new malli.registry.t_malli$registry52453(meta52454));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry52453(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52471 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52472){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52472 = meta52472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52473,meta52472__$1){
var self__ = this;
var _52473__$1 = this;
return (new malli.registry.t_malli$registry52471(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52472__$1));
}));

(malli.registry.t_malli$registry52471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52473){
var self__ = this;
var _52473__$1 = this;
return self__.meta52472;
}));

(malli.registry.t_malli$registry52471.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52471.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__52487 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52487.cljs$core$IFn$_invoke$arity$1 ? fexpr__52487.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52487.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__52489 = name;
var G__52490 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52489,G__52490) : self__.provider.call(null,G__52489,G__52490));
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

(malli.registry.t_malli$registry52471.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52472","meta52472",-1952044307,null)], null);
}));

(malli.registry.t_malli$registry52471.cljs$lang$type = true);

(malli.registry.t_malli$registry52471.cljs$lang$ctorStr = "malli.registry/t_malli$registry52471");

(malli.registry.t_malli$registry52471.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52471");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52471.
 */
malli.registry.__GT_t_malli$registry52471 = (function malli$registry$__GT_t_malli$registry52471(default_registry,provider,cache_STAR_,registry_STAR_,meta52472){
return (new malli.registry.t_malli$registry52471(default_registry,provider,cache_STAR_,registry_STAR_,meta52472));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry52471(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
