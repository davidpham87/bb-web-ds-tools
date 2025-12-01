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

var malli$registry$Registry$_schema$dyn_38945 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_38945(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_38946 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_38946(this$);
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
malli.registry.t_malli$registry38909 = (function (m,fm,meta38910){
this.m = m;
this.fm = fm;
this.meta38910 = meta38910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38911,meta38910__$1){
var self__ = this;
var _38911__$1 = this;
return (new malli.registry.t_malli$registry38909(self__.m,self__.fm,meta38910__$1));
}));

(malli.registry.t_malli$registry38909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38911){
var self__ = this;
var _38911__$1 = this;
return self__.meta38910;
}));

(malli.registry.t_malli$registry38909.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38909.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38909.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38910","meta38910",-1330132141,null)], null);
}));

(malli.registry.t_malli$registry38909.cljs$lang$type = true);

(malli.registry.t_malli$registry38909.cljs$lang$ctorStr = "malli.registry/t_malli$registry38909");

(malli.registry.t_malli$registry38909.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38909");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38909.
 */
malli.registry.__GT_t_malli$registry38909 = (function malli$registry$__GT_t_malli$registry38909(m,fm,meta38910){
return (new malli.registry.t_malli$registry38909(m,fm,meta38910));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38909(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38912 = (function (m,meta38913){
this.m = m;
this.meta38913 = meta38913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38914,meta38913__$1){
var self__ = this;
var _38914__$1 = this;
return (new malli.registry.t_malli$registry38912(self__.m,meta38913__$1));
}));

(malli.registry.t_malli$registry38912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38914){
var self__ = this;
var _38914__$1 = this;
return self__.meta38913;
}));

(malli.registry.t_malli$registry38912.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38912.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38912.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38913","meta38913",1259731807,null)], null);
}));

(malli.registry.t_malli$registry38912.cljs$lang$type = true);

(malli.registry.t_malli$registry38912.cljs$lang$ctorStr = "malli.registry/t_malli$registry38912");

(malli.registry.t_malli$registry38912.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38912");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38912.
 */
malli.registry.__GT_t_malli$registry38912 = (function malli$registry$__GT_t_malli$registry38912(m,meta38913){
return (new malli.registry.t_malli$registry38912(m,meta38913));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38912(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38916 = (function (meta38917){
this.meta38917 = meta38917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38918,meta38917__$1){
var self__ = this;
var _38918__$1 = this;
return (new malli.registry.t_malli$registry38916(meta38917__$1));
}));

(malli.registry.t_malli$registry38916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38918){
var self__ = this;
var _38918__$1 = this;
return self__.meta38917;
}));

(malli.registry.t_malli$registry38916.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38916.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38916.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38917","meta38917",1891336779,null)], null);
}));

(malli.registry.t_malli$registry38916.cljs$lang$type = true);

(malli.registry.t_malli$registry38916.cljs$lang$ctorStr = "malli.registry/t_malli$registry38916");

(malli.registry.t_malli$registry38916.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38916");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38916.
 */
malli.registry.__GT_t_malli$registry38916 = (function malli$registry$__GT_t_malli$registry38916(meta38917){
return (new malli.registry.t_malli$registry38916(meta38917));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38916(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38922 = (function (_QMARK_registries,registries,meta38923){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38923 = meta38923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38924,meta38923__$1){
var self__ = this;
var _38924__$1 = this;
return (new malli.registry.t_malli$registry38922(self__._QMARK_registries,self__.registries,meta38923__$1));
}));

(malli.registry.t_malli$registry38922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38924){
var self__ = this;
var _38924__$1 = this;
return self__.meta38923;
}));

(malli.registry.t_malli$registry38922.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38922.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38920_SHARP_){
return malli.registry._schema(p1__38920_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38922.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38923","meta38923",-1568300776,null)], null);
}));

(malli.registry.t_malli$registry38922.cljs$lang$type = true);

(malli.registry.t_malli$registry38922.cljs$lang$ctorStr = "malli.registry/t_malli$registry38922");

(malli.registry.t_malli$registry38922.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38922");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38922.
 */
malli.registry.__GT_t_malli$registry38922 = (function malli$registry$__GT_t_malli$registry38922(_QMARK_registries,registries,meta38923){
return (new malli.registry.t_malli$registry38922(_QMARK_registries,registries,meta38923));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38953 = arguments.length;
var i__5750__auto___38954 = (0);
while(true){
if((i__5750__auto___38954 < len__5749__auto___38953)){
args__5755__auto__.push((arguments[i__5750__auto___38954]));

var G__38956 = (i__5750__auto___38954 + (1));
i__5750__auto___38954 = G__38956;
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
return (new malli.registry.t_malli$registry38922(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38921){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38921));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38928 = (function (db,meta38929){
this.db = db;
this.meta38929 = meta38929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38930,meta38929__$1){
var self__ = this;
var _38930__$1 = this;
return (new malli.registry.t_malli$registry38928(self__.db,meta38929__$1));
}));

(malli.registry.t_malli$registry38928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38930){
var self__ = this;
var _38930__$1 = this;
return self__.meta38929;
}));

(malli.registry.t_malli$registry38928.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38928.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38928.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38929","meta38929",-2061930264,null)], null);
}));

(malli.registry.t_malli$registry38928.cljs$lang$type = true);

(malli.registry.t_malli$registry38928.cljs$lang$ctorStr = "malli.registry/t_malli$registry38928");

(malli.registry.t_malli$registry38928.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38928");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38928.
 */
malli.registry.__GT_t_malli$registry38928 = (function malli$registry$__GT_t_malli$registry38928(db,meta38929){
return (new malli.registry.t_malli$registry38928(db,meta38929));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38928(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38931 = (function (meta38932){
this.meta38932 = meta38932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38933,meta38932__$1){
var self__ = this;
var _38933__$1 = this;
return (new malli.registry.t_malli$registry38931(meta38932__$1));
}));

(malli.registry.t_malli$registry38931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38933){
var self__ = this;
var _38933__$1 = this;
return self__.meta38932;
}));

(malli.registry.t_malli$registry38931.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38931.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry38931.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry38931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38932","meta38932",-945688264,null)], null);
}));

(malli.registry.t_malli$registry38931.cljs$lang$type = true);

(malli.registry.t_malli$registry38931.cljs$lang$ctorStr = "malli.registry/t_malli$registry38931");

(malli.registry.t_malli$registry38931.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38931");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38931.
 */
malli.registry.__GT_t_malli$registry38931 = (function malli$registry$__GT_t_malli$registry38931(meta38932){
return (new malli.registry.t_malli$registry38931(meta38932));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry38931(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38935 = (function (meta38936){
this.meta38936 = meta38936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38937,meta38936__$1){
var self__ = this;
var _38937__$1 = this;
return (new malli.registry.t_malli$registry38935(meta38936__$1));
}));

(malli.registry.t_malli$registry38935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38937){
var self__ = this;
var _38937__$1 = this;
return self__.meta38936;
}));

(malli.registry.t_malli$registry38935.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38935.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry38935.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry38935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38936","meta38936",770789243,null)], null);
}));

(malli.registry.t_malli$registry38935.cljs$lang$type = true);

(malli.registry.t_malli$registry38935.cljs$lang$ctorStr = "malli.registry/t_malli$registry38935");

(malli.registry.t_malli$registry38935.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38935");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38935.
 */
malli.registry.__GT_t_malli$registry38935 = (function malli$registry$__GT_t_malli$registry38935(meta38936){
return (new malli.registry.t_malli$registry38935(meta38936));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry38935(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38939 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta38940){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta38940 = meta38940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38941,meta38940__$1){
var self__ = this;
var _38941__$1 = this;
return (new malli.registry.t_malli$registry38939(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta38940__$1));
}));

(malli.registry.t_malli$registry38939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38941){
var self__ = this;
var _38941__$1 = this;
return self__.meta38940;
}));

(malli.registry.t_malli$registry38939.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38939.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__38942 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__38942.cljs$core$IFn$_invoke$arity$1 ? fexpr__38942.cljs$core$IFn$_invoke$arity$1(name) : fexpr__38942.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__38943 = name;
var G__38944 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__38943,G__38944) : self__.provider.call(null,G__38943,G__38944));
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

(malli.registry.t_malli$registry38939.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry38939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta38940","meta38940",245202579,null)], null);
}));

(malli.registry.t_malli$registry38939.cljs$lang$type = true);

(malli.registry.t_malli$registry38939.cljs$lang$ctorStr = "malli.registry/t_malli$registry38939");

(malli.registry.t_malli$registry38939.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38939");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38939.
 */
malli.registry.__GT_t_malli$registry38939 = (function malli$registry$__GT_t_malli$registry38939(default_registry,provider,cache_STAR_,registry_STAR_,meta38940){
return (new malli.registry.t_malli$registry38939(default_registry,provider,cache_STAR_,registry_STAR_,meta38940));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry38939(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
