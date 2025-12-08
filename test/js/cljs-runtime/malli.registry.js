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

var malli$registry$Registry$_schema$dyn_45424 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45424(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45425 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45425(this$);
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
malli.registry.t_malli$registry45335 = (function (m,fm,meta45336){
this.m = m;
this.fm = fm;
this.meta45336 = meta45336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45337,meta45336__$1){
var self__ = this;
var _45337__$1 = this;
return (new malli.registry.t_malli$registry45335(self__.m,self__.fm,meta45336__$1));
}));

(malli.registry.t_malli$registry45335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45337){
var self__ = this;
var _45337__$1 = this;
return self__.meta45336;
}));

(malli.registry.t_malli$registry45335.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45335.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45335.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45336","meta45336",262173764,null)], null);
}));

(malli.registry.t_malli$registry45335.cljs$lang$type = true);

(malli.registry.t_malli$registry45335.cljs$lang$ctorStr = "malli.registry/t_malli$registry45335");

(malli.registry.t_malli$registry45335.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45335");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45335.
 */
malli.registry.__GT_t_malli$registry45335 = (function malli$registry$__GT_t_malli$registry45335(m,fm,meta45336){
return (new malli.registry.t_malli$registry45335(m,fm,meta45336));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45335(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45338 = (function (m,meta45339){
this.m = m;
this.meta45339 = meta45339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45340,meta45339__$1){
var self__ = this;
var _45340__$1 = this;
return (new malli.registry.t_malli$registry45338(self__.m,meta45339__$1));
}));

(malli.registry.t_malli$registry45338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45340){
var self__ = this;
var _45340__$1 = this;
return self__.meta45339;
}));

(malli.registry.t_malli$registry45338.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45338.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45338.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45339","meta45339",1442897554,null)], null);
}));

(malli.registry.t_malli$registry45338.cljs$lang$type = true);

(malli.registry.t_malli$registry45338.cljs$lang$ctorStr = "malli.registry/t_malli$registry45338");

(malli.registry.t_malli$registry45338.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45338");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45338.
 */
malli.registry.__GT_t_malli$registry45338 = (function malli$registry$__GT_t_malli$registry45338(m,meta45339){
return (new malli.registry.t_malli$registry45338(m,meta45339));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45338(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45346 = (function (meta45347){
this.meta45347 = meta45347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45348,meta45347__$1){
var self__ = this;
var _45348__$1 = this;
return (new malli.registry.t_malli$registry45346(meta45347__$1));
}));

(malli.registry.t_malli$registry45346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45348){
var self__ = this;
var _45348__$1 = this;
return self__.meta45347;
}));

(malli.registry.t_malli$registry45346.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45346.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45346.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45347","meta45347",-1303606883,null)], null);
}));

(malli.registry.t_malli$registry45346.cljs$lang$type = true);

(malli.registry.t_malli$registry45346.cljs$lang$ctorStr = "malli.registry/t_malli$registry45346");

(malli.registry.t_malli$registry45346.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45346");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45346.
 */
malli.registry.__GT_t_malli$registry45346 = (function malli$registry$__GT_t_malli$registry45346(meta45347){
return (new malli.registry.t_malli$registry45346(meta45347));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45346(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45363 = (function (_QMARK_registries,registries,meta45364){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45364 = meta45364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45365,meta45364__$1){
var self__ = this;
var _45365__$1 = this;
return (new malli.registry.t_malli$registry45363(self__._QMARK_registries,self__.registries,meta45364__$1));
}));

(malli.registry.t_malli$registry45363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45365){
var self__ = this;
var _45365__$1 = this;
return self__.meta45364;
}));

(malli.registry.t_malli$registry45363.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45363.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45361_SHARP_){
return malli.registry._schema(p1__45361_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45363.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45364","meta45364",237306734,null)], null);
}));

(malli.registry.t_malli$registry45363.cljs$lang$type = true);

(malli.registry.t_malli$registry45363.cljs$lang$ctorStr = "malli.registry/t_malli$registry45363");

(malli.registry.t_malli$registry45363.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45363");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45363.
 */
malli.registry.__GT_t_malli$registry45363 = (function malli$registry$__GT_t_malli$registry45363(_QMARK_registries,registries,meta45364){
return (new malli.registry.t_malli$registry45363(_QMARK_registries,registries,meta45364));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45426 = arguments.length;
var i__5750__auto___45427 = (0);
while(true){
if((i__5750__auto___45427 < len__5749__auto___45426)){
args__5755__auto__.push((arguments[i__5750__auto___45427]));

var G__45428 = (i__5750__auto___45427 + (1));
i__5750__auto___45427 = G__45428;
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
return (new malli.registry.t_malli$registry45363(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45362){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45362));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45376 = (function (db,meta45377){
this.db = db;
this.meta45377 = meta45377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45378,meta45377__$1){
var self__ = this;
var _45378__$1 = this;
return (new malli.registry.t_malli$registry45376(self__.db,meta45377__$1));
}));

(malli.registry.t_malli$registry45376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45378){
var self__ = this;
var _45378__$1 = this;
return self__.meta45377;
}));

(malli.registry.t_malli$registry45376.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45376.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45376.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45377","meta45377",1030709777,null)], null);
}));

(malli.registry.t_malli$registry45376.cljs$lang$type = true);

(malli.registry.t_malli$registry45376.cljs$lang$ctorStr = "malli.registry/t_malli$registry45376");

(malli.registry.t_malli$registry45376.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45376");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45376.
 */
malli.registry.__GT_t_malli$registry45376 = (function malli$registry$__GT_t_malli$registry45376(db,meta45377){
return (new malli.registry.t_malli$registry45376(db,meta45377));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45376(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45390 = (function (meta45391){
this.meta45391 = meta45391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45392,meta45391__$1){
var self__ = this;
var _45392__$1 = this;
return (new malli.registry.t_malli$registry45390(meta45391__$1));
}));

(malli.registry.t_malli$registry45390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45392){
var self__ = this;
var _45392__$1 = this;
return self__.meta45391;
}));

(malli.registry.t_malli$registry45390.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45390.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45390.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45391","meta45391",-155302983,null)], null);
}));

(malli.registry.t_malli$registry45390.cljs$lang$type = true);

(malli.registry.t_malli$registry45390.cljs$lang$ctorStr = "malli.registry/t_malli$registry45390");

(malli.registry.t_malli$registry45390.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45390");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45390.
 */
malli.registry.__GT_t_malli$registry45390 = (function malli$registry$__GT_t_malli$registry45390(meta45391){
return (new malli.registry.t_malli$registry45390(meta45391));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45390(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45393 = (function (meta45394){
this.meta45394 = meta45394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45395,meta45394__$1){
var self__ = this;
var _45395__$1 = this;
return (new malli.registry.t_malli$registry45393(meta45394__$1));
}));

(malli.registry.t_malli$registry45393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45395){
var self__ = this;
var _45395__$1 = this;
return self__.meta45394;
}));

(malli.registry.t_malli$registry45393.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45393.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45393.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45394","meta45394",-820037378,null)], null);
}));

(malli.registry.t_malli$registry45393.cljs$lang$type = true);

(malli.registry.t_malli$registry45393.cljs$lang$ctorStr = "malli.registry/t_malli$registry45393");

(malli.registry.t_malli$registry45393.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45393");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45393.
 */
malli.registry.__GT_t_malli$registry45393 = (function malli$registry$__GT_t_malli$registry45393(meta45394){
return (new malli.registry.t_malli$registry45393(meta45394));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45393(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45399 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45400){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45400 = meta45400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45401,meta45400__$1){
var self__ = this;
var _45401__$1 = this;
return (new malli.registry.t_malli$registry45399(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45400__$1));
}));

(malli.registry.t_malli$registry45399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45401){
var self__ = this;
var _45401__$1 = this;
return self__.meta45400;
}));

(malli.registry.t_malli$registry45399.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45399.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45403 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45403.cljs$core$IFn$_invoke$arity$1 ? fexpr__45403.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45403.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45404 = name;
var G__45405 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45404,G__45405) : self__.provider.call(null,G__45404,G__45405));
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

(malli.registry.t_malli$registry45399.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45400","meta45400",-1695999214,null)], null);
}));

(malli.registry.t_malli$registry45399.cljs$lang$type = true);

(malli.registry.t_malli$registry45399.cljs$lang$ctorStr = "malli.registry/t_malli$registry45399");

(malli.registry.t_malli$registry45399.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45399");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45399.
 */
malli.registry.__GT_t_malli$registry45399 = (function malli$registry$__GT_t_malli$registry45399(default_registry,provider,cache_STAR_,registry_STAR_,meta45400){
return (new malli.registry.t_malli$registry45399(default_registry,provider,cache_STAR_,registry_STAR_,meta45400));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45399(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
