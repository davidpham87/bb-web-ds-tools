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

var malli$registry$Registry$_schema$dyn_52517 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_52517(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52519 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_52519(this$);
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
malli.registry.t_malli$registry52398 = (function (m,fm,meta52399){
this.m = m;
this.fm = fm;
this.meta52399 = meta52399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52400,meta52399__$1){
var self__ = this;
var _52400__$1 = this;
return (new malli.registry.t_malli$registry52398(self__.m,self__.fm,meta52399__$1));
}));

(malli.registry.t_malli$registry52398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52400){
var self__ = this;
var _52400__$1 = this;
return self__.meta52399;
}));

(malli.registry.t_malli$registry52398.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52398.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52398.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52399","meta52399",-1998265514,null)], null);
}));

(malli.registry.t_malli$registry52398.cljs$lang$type = true);

(malli.registry.t_malli$registry52398.cljs$lang$ctorStr = "malli.registry/t_malli$registry52398");

(malli.registry.t_malli$registry52398.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52398");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52398.
 */
malli.registry.__GT_t_malli$registry52398 = (function malli$registry$__GT_t_malli$registry52398(m,fm,meta52399){
return (new malli.registry.t_malli$registry52398(m,fm,meta52399));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry52398(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52408 = (function (m,meta52409){
this.m = m;
this.meta52409 = meta52409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52410,meta52409__$1){
var self__ = this;
var _52410__$1 = this;
return (new malli.registry.t_malli$registry52408(self__.m,meta52409__$1));
}));

(malli.registry.t_malli$registry52408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52410){
var self__ = this;
var _52410__$1 = this;
return self__.meta52409;
}));

(malli.registry.t_malli$registry52408.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52408.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52408.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52409","meta52409",1275629395,null)], null);
}));

(malli.registry.t_malli$registry52408.cljs$lang$type = true);

(malli.registry.t_malli$registry52408.cljs$lang$ctorStr = "malli.registry/t_malli$registry52408");

(malli.registry.t_malli$registry52408.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52408");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52408.
 */
malli.registry.__GT_t_malli$registry52408 = (function malli$registry$__GT_t_malli$registry52408(m,meta52409){
return (new malli.registry.t_malli$registry52408(m,meta52409));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry52408(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry52428 = (function (meta52429){
this.meta52429 = meta52429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52430,meta52429__$1){
var self__ = this;
var _52430__$1 = this;
return (new malli.registry.t_malli$registry52428(meta52429__$1));
}));

(malli.registry.t_malli$registry52428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52430){
var self__ = this;
var _52430__$1 = this;
return self__.meta52429;
}));

(malli.registry.t_malli$registry52428.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52428.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52428.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52429","meta52429",393115304,null)], null);
}));

(malli.registry.t_malli$registry52428.cljs$lang$type = true);

(malli.registry.t_malli$registry52428.cljs$lang$ctorStr = "malli.registry/t_malli$registry52428");

(malli.registry.t_malli$registry52428.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52428");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52428.
 */
malli.registry.__GT_t_malli$registry52428 = (function malli$registry$__GT_t_malli$registry52428(meta52429){
return (new malli.registry.t_malli$registry52428(meta52429));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry52428(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52439 = (function (_QMARK_registries,registries,meta52440){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52440 = meta52440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52441,meta52440__$1){
var self__ = this;
var _52441__$1 = this;
return (new malli.registry.t_malli$registry52439(self__._QMARK_registries,self__.registries,meta52440__$1));
}));

(malli.registry.t_malli$registry52439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52441){
var self__ = this;
var _52441__$1 = this;
return self__.meta52440;
}));

(malli.registry.t_malli$registry52439.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52439.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52437_SHARP_){
return malli.registry._schema(p1__52437_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52439.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52440","meta52440",1139574813,null)], null);
}));

(malli.registry.t_malli$registry52439.cljs$lang$type = true);

(malli.registry.t_malli$registry52439.cljs$lang$ctorStr = "malli.registry/t_malli$registry52439");

(malli.registry.t_malli$registry52439.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52439");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52439.
 */
malli.registry.__GT_t_malli$registry52439 = (function malli$registry$__GT_t_malli$registry52439(_QMARK_registries,registries,meta52440){
return (new malli.registry.t_malli$registry52439(_QMARK_registries,registries,meta52440));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52574 = arguments.length;
var i__5750__auto___52575 = (0);
while(true){
if((i__5750__auto___52575 < len__5749__auto___52574)){
args__5755__auto__.push((arguments[i__5750__auto___52575]));

var G__52576 = (i__5750__auto___52575 + (1));
i__5750__auto___52575 = G__52576;
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
return (new malli.registry.t_malli$registry52439(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52438){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52438));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52442 = (function (db,meta52443){
this.db = db;
this.meta52443 = meta52443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52444,meta52443__$1){
var self__ = this;
var _52444__$1 = this;
return (new malli.registry.t_malli$registry52442(self__.db,meta52443__$1));
}));

(malli.registry.t_malli$registry52442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52444){
var self__ = this;
var _52444__$1 = this;
return self__.meta52443;
}));

(malli.registry.t_malli$registry52442.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52442.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52442.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52443","meta52443",1535267426,null)], null);
}));

(malli.registry.t_malli$registry52442.cljs$lang$type = true);

(malli.registry.t_malli$registry52442.cljs$lang$ctorStr = "malli.registry/t_malli$registry52442");

(malli.registry.t_malli$registry52442.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52442");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52442.
 */
malli.registry.__GT_t_malli$registry52442 = (function malli$registry$__GT_t_malli$registry52442(db,meta52443){
return (new malli.registry.t_malli$registry52442(db,meta52443));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry52442(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52451 = (function (meta52452){
this.meta52452 = meta52452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52453,meta52452__$1){
var self__ = this;
var _52453__$1 = this;
return (new malli.registry.t_malli$registry52451(meta52452__$1));
}));

(malli.registry.t_malli$registry52451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52453){
var self__ = this;
var _52453__$1 = this;
return self__.meta52452;
}));

(malli.registry.t_malli$registry52451.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52451.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry52451.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry52451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52452","meta52452",-103777070,null)], null);
}));

(malli.registry.t_malli$registry52451.cljs$lang$type = true);

(malli.registry.t_malli$registry52451.cljs$lang$ctorStr = "malli.registry/t_malli$registry52451");

(malli.registry.t_malli$registry52451.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52451");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52451.
 */
malli.registry.__GT_t_malli$registry52451 = (function malli$registry$__GT_t_malli$registry52451(meta52452){
return (new malli.registry.t_malli$registry52451(meta52452));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry52451(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52461 = (function (meta52462){
this.meta52462 = meta52462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52463,meta52462__$1){
var self__ = this;
var _52463__$1 = this;
return (new malli.registry.t_malli$registry52461(meta52462__$1));
}));

(malli.registry.t_malli$registry52461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52463){
var self__ = this;
var _52463__$1 = this;
return self__.meta52462;
}));

(malli.registry.t_malli$registry52461.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52461.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52461.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52462","meta52462",-1675391812,null)], null);
}));

(malli.registry.t_malli$registry52461.cljs$lang$type = true);

(malli.registry.t_malli$registry52461.cljs$lang$ctorStr = "malli.registry/t_malli$registry52461");

(malli.registry.t_malli$registry52461.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52461");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52461.
 */
malli.registry.__GT_t_malli$registry52461 = (function malli$registry$__GT_t_malli$registry52461(meta52462){
return (new malli.registry.t_malli$registry52461(meta52462));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry52461(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52481 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52482){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52482 = meta52482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52483,meta52482__$1){
var self__ = this;
var _52483__$1 = this;
return (new malli.registry.t_malli$registry52481(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52482__$1));
}));

(malli.registry.t_malli$registry52481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52483){
var self__ = this;
var _52483__$1 = this;
return self__.meta52482;
}));

(malli.registry.t_malli$registry52481.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52481.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__52500 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52500.cljs$core$IFn$_invoke$arity$1 ? fexpr__52500.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52500.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__52502 = name;
var G__52503 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52502,G__52503) : self__.provider.call(null,G__52502,G__52503));
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

(malli.registry.t_malli$registry52481.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52482","meta52482",-1427162762,null)], null);
}));

(malli.registry.t_malli$registry52481.cljs$lang$type = true);

(malli.registry.t_malli$registry52481.cljs$lang$ctorStr = "malli.registry/t_malli$registry52481");

(malli.registry.t_malli$registry52481.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52481");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52481.
 */
malli.registry.__GT_t_malli$registry52481 = (function malli$registry$__GT_t_malli$registry52481(default_registry,provider,cache_STAR_,registry_STAR_,meta52482){
return (new malli.registry.t_malli$registry52481(default_registry,provider,cache_STAR_,registry_STAR_,meta52482));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry52481(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
