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

var malli$registry$Registry$_schema$dyn_45462 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45462(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45463 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45463(this$);
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
malli.registry.t_malli$registry45317 = (function (m,fm,meta45318){
this.m = m;
this.fm = fm;
this.meta45318 = meta45318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45319,meta45318__$1){
var self__ = this;
var _45319__$1 = this;
return (new malli.registry.t_malli$registry45317(self__.m,self__.fm,meta45318__$1));
}));

(malli.registry.t_malli$registry45317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45319){
var self__ = this;
var _45319__$1 = this;
return self__.meta45318;
}));

(malli.registry.t_malli$registry45317.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45317.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45317.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45318","meta45318",-213939233,null)], null);
}));

(malli.registry.t_malli$registry45317.cljs$lang$type = true);

(malli.registry.t_malli$registry45317.cljs$lang$ctorStr = "malli.registry/t_malli$registry45317");

(malli.registry.t_malli$registry45317.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45317");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45317.
 */
malli.registry.__GT_t_malli$registry45317 = (function malli$registry$__GT_t_malli$registry45317(m,fm,meta45318){
return (new malli.registry.t_malli$registry45317(m,fm,meta45318));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45317(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45350 = (function (m,meta45351){
this.m = m;
this.meta45351 = meta45351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45352,meta45351__$1){
var self__ = this;
var _45352__$1 = this;
return (new malli.registry.t_malli$registry45350(self__.m,meta45351__$1));
}));

(malli.registry.t_malli$registry45350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45352){
var self__ = this;
var _45352__$1 = this;
return self__.meta45351;
}));

(malli.registry.t_malli$registry45350.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45350.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45350.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45351","meta45351",601488052,null)], null);
}));

(malli.registry.t_malli$registry45350.cljs$lang$type = true);

(malli.registry.t_malli$registry45350.cljs$lang$ctorStr = "malli.registry/t_malli$registry45350");

(malli.registry.t_malli$registry45350.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45350");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45350.
 */
malli.registry.__GT_t_malli$registry45350 = (function malli$registry$__GT_t_malli$registry45350(m,meta45351){
return (new malli.registry.t_malli$registry45350(m,meta45351));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45350(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45403 = (function (meta45404){
this.meta45404 = meta45404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45405,meta45404__$1){
var self__ = this;
var _45405__$1 = this;
return (new malli.registry.t_malli$registry45403(meta45404__$1));
}));

(malli.registry.t_malli$registry45403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45405){
var self__ = this;
var _45405__$1 = this;
return self__.meta45404;
}));

(malli.registry.t_malli$registry45403.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45403.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45403.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45404","meta45404",106967010,null)], null);
}));

(malli.registry.t_malli$registry45403.cljs$lang$type = true);

(malli.registry.t_malli$registry45403.cljs$lang$ctorStr = "malli.registry/t_malli$registry45403");

(malli.registry.t_malli$registry45403.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45403");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45403.
 */
malli.registry.__GT_t_malli$registry45403 = (function malli$registry$__GT_t_malli$registry45403(meta45404){
return (new malli.registry.t_malli$registry45403(meta45404));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45403(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45409 = (function (_QMARK_registries,registries,meta45410){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45410 = meta45410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45411,meta45410__$1){
var self__ = this;
var _45411__$1 = this;
return (new malli.registry.t_malli$registry45409(self__._QMARK_registries,self__.registries,meta45410__$1));
}));

(malli.registry.t_malli$registry45409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45411){
var self__ = this;
var _45411__$1 = this;
return self__.meta45410;
}));

(malli.registry.t_malli$registry45409.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45409.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45406_SHARP_){
return malli.registry._schema(p1__45406_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45409.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45410","meta45410",-1395849287,null)], null);
}));

(malli.registry.t_malli$registry45409.cljs$lang$type = true);

(malli.registry.t_malli$registry45409.cljs$lang$ctorStr = "malli.registry/t_malli$registry45409");

(malli.registry.t_malli$registry45409.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45409");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45409.
 */
malli.registry.__GT_t_malli$registry45409 = (function malli$registry$__GT_t_malli$registry45409(_QMARK_registries,registries,meta45410){
return (new malli.registry.t_malli$registry45409(_QMARK_registries,registries,meta45410));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45470 = arguments.length;
var i__5750__auto___45471 = (0);
while(true){
if((i__5750__auto___45471 < len__5749__auto___45470)){
args__5755__auto__.push((arguments[i__5750__auto___45471]));

var G__45472 = (i__5750__auto___45471 + (1));
i__5750__auto___45471 = G__45472;
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
return (new malli.registry.t_malli$registry45409(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45407){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45407));
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
malli.registry.t_malli$registry45436 = (function (meta45437){
this.meta45437 = meta45437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45438,meta45437__$1){
var self__ = this;
var _45438__$1 = this;
return (new malli.registry.t_malli$registry45436(meta45437__$1));
}));

(malli.registry.t_malli$registry45436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45438){
var self__ = this;
var _45438__$1 = this;
return self__.meta45437;
}));

(malli.registry.t_malli$registry45436.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45436.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45436.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45437","meta45437",889476399,null)], null);
}));

(malli.registry.t_malli$registry45436.cljs$lang$type = true);

(malli.registry.t_malli$registry45436.cljs$lang$ctorStr = "malli.registry/t_malli$registry45436");

(malli.registry.t_malli$registry45436.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45436");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45436.
 */
malli.registry.__GT_t_malli$registry45436 = (function malli$registry$__GT_t_malli$registry45436(meta45437){
return (new malli.registry.t_malli$registry45436(meta45437));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45436(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45450 = (function (meta45451){
this.meta45451 = meta45451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45452,meta45451__$1){
var self__ = this;
var _45452__$1 = this;
return (new malli.registry.t_malli$registry45450(meta45451__$1));
}));

(malli.registry.t_malli$registry45450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45452){
var self__ = this;
var _45452__$1 = this;
return self__.meta45451;
}));

(malli.registry.t_malli$registry45450.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45450.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45450.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45451","meta45451",531257269,null)], null);
}));

(malli.registry.t_malli$registry45450.cljs$lang$type = true);

(malli.registry.t_malli$registry45450.cljs$lang$ctorStr = "malli.registry/t_malli$registry45450");

(malli.registry.t_malli$registry45450.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45450");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45450.
 */
malli.registry.__GT_t_malli$registry45450 = (function malli$registry$__GT_t_malli$registry45450(meta45451){
return (new malli.registry.t_malli$registry45450(meta45451));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45450(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45454 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45455){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45455 = meta45455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45456,meta45455__$1){
var self__ = this;
var _45456__$1 = this;
return (new malli.registry.t_malli$registry45454(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45455__$1));
}));

(malli.registry.t_malli$registry45454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45456){
var self__ = this;
var _45456__$1 = this;
return self__.meta45455;
}));

(malli.registry.t_malli$registry45454.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45454.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45459 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45459.cljs$core$IFn$_invoke$arity$1 ? fexpr__45459.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45459.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45460 = name;
var G__45461 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45460,G__45461) : self__.provider.call(null,G__45460,G__45461));
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

(malli.registry.t_malli$registry45454.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45455","meta45455",486793821,null)], null);
}));

(malli.registry.t_malli$registry45454.cljs$lang$type = true);

(malli.registry.t_malli$registry45454.cljs$lang$ctorStr = "malli.registry/t_malli$registry45454");

(malli.registry.t_malli$registry45454.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45454");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45454.
 */
malli.registry.__GT_t_malli$registry45454 = (function malli$registry$__GT_t_malli$registry45454(default_registry,provider,cache_STAR_,registry_STAR_,meta45455){
return (new malli.registry.t_malli$registry45454(default_registry,provider,cache_STAR_,registry_STAR_,meta45455));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45454(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
