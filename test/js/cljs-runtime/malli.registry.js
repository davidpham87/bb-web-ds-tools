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

var malli$registry$Registry$_schema$dyn_53089 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_53089(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_53090 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_53090(this$);
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
malli.registry.t_malli$registry52989 = (function (m,fm,meta52990){
this.m = m;
this.fm = fm;
this.meta52990 = meta52990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52991,meta52990__$1){
var self__ = this;
var _52991__$1 = this;
return (new malli.registry.t_malli$registry52989(self__.m,self__.fm,meta52990__$1));
}));

(malli.registry.t_malli$registry52989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52991){
var self__ = this;
var _52991__$1 = this;
return self__.meta52990;
}));

(malli.registry.t_malli$registry52989.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52989.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52989.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52990","meta52990",-1356277021,null)], null);
}));

(malli.registry.t_malli$registry52989.cljs$lang$type = true);

(malli.registry.t_malli$registry52989.cljs$lang$ctorStr = "malli.registry/t_malli$registry52989");

(malli.registry.t_malli$registry52989.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52989");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52989.
 */
malli.registry.__GT_t_malli$registry52989 = (function malli$registry$__GT_t_malli$registry52989(m,fm,meta52990){
return (new malli.registry.t_malli$registry52989(m,fm,meta52990));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry52989(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53001 = (function (m,meta53002){
this.m = m;
this.meta53002 = meta53002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53003,meta53002__$1){
var self__ = this;
var _53003__$1 = this;
return (new malli.registry.t_malli$registry53001(self__.m,meta53002__$1));
}));

(malli.registry.t_malli$registry53001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53003){
var self__ = this;
var _53003__$1 = this;
return self__.meta53002;
}));

(malli.registry.t_malli$registry53001.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53001.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry53001.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry53001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta53002","meta53002",-734849597,null)], null);
}));

(malli.registry.t_malli$registry53001.cljs$lang$type = true);

(malli.registry.t_malli$registry53001.cljs$lang$ctorStr = "malli.registry/t_malli$registry53001");

(malli.registry.t_malli$registry53001.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry53001");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53001.
 */
malli.registry.__GT_t_malli$registry53001 = (function malli$registry$__GT_t_malli$registry53001(m,meta53002){
return (new malli.registry.t_malli$registry53001(m,meta53002));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry53001(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry53010 = (function (meta53011){
this.meta53011 = meta53011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53012,meta53011__$1){
var self__ = this;
var _53012__$1 = this;
return (new malli.registry.t_malli$registry53010(meta53011__$1));
}));

(malli.registry.t_malli$registry53010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53012){
var self__ = this;
var _53012__$1 = this;
return self__.meta53011;
}));

(malli.registry.t_malli$registry53010.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53010.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry53010.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry53010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53011","meta53011",-1175441479,null)], null);
}));

(malli.registry.t_malli$registry53010.cljs$lang$type = true);

(malli.registry.t_malli$registry53010.cljs$lang$ctorStr = "malli.registry/t_malli$registry53010");

(malli.registry.t_malli$registry53010.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry53010");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53010.
 */
malli.registry.__GT_t_malli$registry53010 = (function malli$registry$__GT_t_malli$registry53010(meta53011){
return (new malli.registry.t_malli$registry53010(meta53011));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry53010(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53027 = (function (_QMARK_registries,registries,meta53028){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta53028 = meta53028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53029,meta53028__$1){
var self__ = this;
var _53029__$1 = this;
return (new malli.registry.t_malli$registry53027(self__._QMARK_registries,self__.registries,meta53028__$1));
}));

(malli.registry.t_malli$registry53027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53029){
var self__ = this;
var _53029__$1 = this;
return self__.meta53028;
}));

(malli.registry.t_malli$registry53027.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53027.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__53023_SHARP_){
return malli.registry._schema(p1__53023_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry53027.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry53027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta53028","meta53028",1098939818,null)], null);
}));

(malli.registry.t_malli$registry53027.cljs$lang$type = true);

(malli.registry.t_malli$registry53027.cljs$lang$ctorStr = "malli.registry/t_malli$registry53027");

(malli.registry.t_malli$registry53027.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry53027");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53027.
 */
malli.registry.__GT_t_malli$registry53027 = (function malli$registry$__GT_t_malli$registry53027(_QMARK_registries,registries,meta53028){
return (new malli.registry.t_malli$registry53027(_QMARK_registries,registries,meta53028));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53092 = arguments.length;
var i__5750__auto___53093 = (0);
while(true){
if((i__5750__auto___53093 < len__5749__auto___53092)){
args__5755__auto__.push((arguments[i__5750__auto___53093]));

var G__53094 = (i__5750__auto___53093 + (1));
i__5750__auto___53093 = G__53094;
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
return (new malli.registry.t_malli$registry53027(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq53026){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53026));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53034 = (function (db,meta53035){
this.db = db;
this.meta53035 = meta53035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53036,meta53035__$1){
var self__ = this;
var _53036__$1 = this;
return (new malli.registry.t_malli$registry53034(self__.db,meta53035__$1));
}));

(malli.registry.t_malli$registry53034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53036){
var self__ = this;
var _53036__$1 = this;
return self__.meta53035;
}));

(malli.registry.t_malli$registry53034.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53034.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry53034.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry53034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta53035","meta53035",1755948578,null)], null);
}));

(malli.registry.t_malli$registry53034.cljs$lang$type = true);

(malli.registry.t_malli$registry53034.cljs$lang$ctorStr = "malli.registry/t_malli$registry53034");

(malli.registry.t_malli$registry53034.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry53034");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53034.
 */
malli.registry.__GT_t_malli$registry53034 = (function malli$registry$__GT_t_malli$registry53034(db,meta53035){
return (new malli.registry.t_malli$registry53034(db,meta53035));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry53034(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53046 = (function (meta53047){
this.meta53047 = meta53047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53048,meta53047__$1){
var self__ = this;
var _53048__$1 = this;
return (new malli.registry.t_malli$registry53046(meta53047__$1));
}));

(malli.registry.t_malli$registry53046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53048){
var self__ = this;
var _53048__$1 = this;
return self__.meta53047;
}));

(malli.registry.t_malli$registry53046.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53046.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry53046.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry53046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53047","meta53047",1597019789,null)], null);
}));

(malli.registry.t_malli$registry53046.cljs$lang$type = true);

(malli.registry.t_malli$registry53046.cljs$lang$ctorStr = "malli.registry/t_malli$registry53046");

(malli.registry.t_malli$registry53046.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry53046");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53046.
 */
malli.registry.__GT_t_malli$registry53046 = (function malli$registry$__GT_t_malli$registry53046(meta53047){
return (new malli.registry.t_malli$registry53046(meta53047));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry53046(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53067 = (function (meta53068){
this.meta53068 = meta53068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53069,meta53068__$1){
var self__ = this;
var _53069__$1 = this;
return (new malli.registry.t_malli$registry53067(meta53068__$1));
}));

(malli.registry.t_malli$registry53067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53069){
var self__ = this;
var _53069__$1 = this;
return self__.meta53068;
}));

(malli.registry.t_malli$registry53067.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53067.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry53067.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry53067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta53068","meta53068",-293920264,null)], null);
}));

(malli.registry.t_malli$registry53067.cljs$lang$type = true);

(malli.registry.t_malli$registry53067.cljs$lang$ctorStr = "malli.registry/t_malli$registry53067");

(malli.registry.t_malli$registry53067.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry53067");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53067.
 */
malli.registry.__GT_t_malli$registry53067 = (function malli$registry$__GT_t_malli$registry53067(meta53068){
return (new malli.registry.t_malli$registry53067(meta53068));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry53067(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry53074 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta53075){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta53075 = meta53075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry53074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53076,meta53075__$1){
var self__ = this;
var _53076__$1 = this;
return (new malli.registry.t_malli$registry53074(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta53075__$1));
}));

(malli.registry.t_malli$registry53074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53076){
var self__ = this;
var _53076__$1 = this;
return self__.meta53075;
}));

(malli.registry.t_malli$registry53074.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry53074.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__53083 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__53083.cljs$core$IFn$_invoke$arity$1 ? fexpr__53083.cljs$core$IFn$_invoke$arity$1(name) : fexpr__53083.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__53087 = name;
var G__53088 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__53087,G__53088) : self__.provider.call(null,G__53087,G__53088));
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

(malli.registry.t_malli$registry53074.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry53074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta53075","meta53075",608534154,null)], null);
}));

(malli.registry.t_malli$registry53074.cljs$lang$type = true);

(malli.registry.t_malli$registry53074.cljs$lang$ctorStr = "malli.registry/t_malli$registry53074");

(malli.registry.t_malli$registry53074.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry53074");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry53074.
 */
malli.registry.__GT_t_malli$registry53074 = (function malli$registry$__GT_t_malli$registry53074(default_registry,provider,cache_STAR_,registry_STAR_,meta53075){
return (new malli.registry.t_malli$registry53074(default_registry,provider,cache_STAR_,registry_STAR_,meta53075));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry53074(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
