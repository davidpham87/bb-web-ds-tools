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

var malli$registry$Registry$_schema$dyn_39046 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_39046(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_39047 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_39047(this$);
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
malli.registry.t_malli$registry38954 = (function (m,fm,meta38955){
this.m = m;
this.fm = fm;
this.meta38955 = meta38955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38956,meta38955__$1){
var self__ = this;
var _38956__$1 = this;
return (new malli.registry.t_malli$registry38954(self__.m,self__.fm,meta38955__$1));
}));

(malli.registry.t_malli$registry38954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38956){
var self__ = this;
var _38956__$1 = this;
return self__.meta38955;
}));

(malli.registry.t_malli$registry38954.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38954.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38954.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38955","meta38955",916933780,null)], null);
}));

(malli.registry.t_malli$registry38954.cljs$lang$type = true);

(malli.registry.t_malli$registry38954.cljs$lang$ctorStr = "malli.registry/t_malli$registry38954");

(malli.registry.t_malli$registry38954.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38954");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38954.
 */
malli.registry.__GT_t_malli$registry38954 = (function malli$registry$__GT_t_malli$registry38954(m,fm,meta38955){
return (new malli.registry.t_malli$registry38954(m,fm,meta38955));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38954(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38961 = (function (m,meta38962){
this.m = m;
this.meta38962 = meta38962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38963,meta38962__$1){
var self__ = this;
var _38963__$1 = this;
return (new malli.registry.t_malli$registry38961(self__.m,meta38962__$1));
}));

(malli.registry.t_malli$registry38961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38963){
var self__ = this;
var _38963__$1 = this;
return self__.meta38962;
}));

(malli.registry.t_malli$registry38961.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38961.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38961.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38962","meta38962",-1850236926,null)], null);
}));

(malli.registry.t_malli$registry38961.cljs$lang$type = true);

(malli.registry.t_malli$registry38961.cljs$lang$ctorStr = "malli.registry/t_malli$registry38961");

(malli.registry.t_malli$registry38961.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38961");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38961.
 */
malli.registry.__GT_t_malli$registry38961 = (function malli$registry$__GT_t_malli$registry38961(m,meta38962){
return (new malli.registry.t_malli$registry38961(m,meta38962));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38961(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38969 = (function (meta38970){
this.meta38970 = meta38970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38971,meta38970__$1){
var self__ = this;
var _38971__$1 = this;
return (new malli.registry.t_malli$registry38969(meta38970__$1));
}));

(malli.registry.t_malli$registry38969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38971){
var self__ = this;
var _38971__$1 = this;
return self__.meta38970;
}));

(malli.registry.t_malli$registry38969.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38969.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38969.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38970","meta38970",1172968314,null)], null);
}));

(malli.registry.t_malli$registry38969.cljs$lang$type = true);

(malli.registry.t_malli$registry38969.cljs$lang$ctorStr = "malli.registry/t_malli$registry38969");

(malli.registry.t_malli$registry38969.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38969");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38969.
 */
malli.registry.__GT_t_malli$registry38969 = (function malli$registry$__GT_t_malli$registry38969(meta38970){
return (new malli.registry.t_malli$registry38969(meta38970));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38969(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38977 = (function (_QMARK_registries,registries,meta38978){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38978 = meta38978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38979,meta38978__$1){
var self__ = this;
var _38979__$1 = this;
return (new malli.registry.t_malli$registry38977(self__._QMARK_registries,self__.registries,meta38978__$1));
}));

(malli.registry.t_malli$registry38977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38979){
var self__ = this;
var _38979__$1 = this;
return self__.meta38978;
}));

(malli.registry.t_malli$registry38977.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38977.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38975_SHARP_){
return malli.registry._schema(p1__38975_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38977.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38978","meta38978",-1247064170,null)], null);
}));

(malli.registry.t_malli$registry38977.cljs$lang$type = true);

(malli.registry.t_malli$registry38977.cljs$lang$ctorStr = "malli.registry/t_malli$registry38977");

(malli.registry.t_malli$registry38977.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38977");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38977.
 */
malli.registry.__GT_t_malli$registry38977 = (function malli$registry$__GT_t_malli$registry38977(_QMARK_registries,registries,meta38978){
return (new malli.registry.t_malli$registry38977(_QMARK_registries,registries,meta38978));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39048 = arguments.length;
var i__5750__auto___39049 = (0);
while(true){
if((i__5750__auto___39049 < len__5749__auto___39048)){
args__5755__auto__.push((arguments[i__5750__auto___39049]));

var G__39050 = (i__5750__auto___39049 + (1));
i__5750__auto___39049 = G__39050;
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
return (new malli.registry.t_malli$registry38977(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38976){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38976));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38991 = (function (db,meta38992){
this.db = db;
this.meta38992 = meta38992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38993,meta38992__$1){
var self__ = this;
var _38993__$1 = this;
return (new malli.registry.t_malli$registry38991(self__.db,meta38992__$1));
}));

(malli.registry.t_malli$registry38991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38993){
var self__ = this;
var _38993__$1 = this;
return self__.meta38992;
}));

(malli.registry.t_malli$registry38991.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38991.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38991.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38992","meta38992",306704628,null)], null);
}));

(malli.registry.t_malli$registry38991.cljs$lang$type = true);

(malli.registry.t_malli$registry38991.cljs$lang$ctorStr = "malli.registry/t_malli$registry38991");

(malli.registry.t_malli$registry38991.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38991");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38991.
 */
malli.registry.__GT_t_malli$registry38991 = (function malli$registry$__GT_t_malli$registry38991(db,meta38992){
return (new malli.registry.t_malli$registry38991(db,meta38992));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38991(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39003 = (function (meta39004){
this.meta39004 = meta39004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39005,meta39004__$1){
var self__ = this;
var _39005__$1 = this;
return (new malli.registry.t_malli$registry39003(meta39004__$1));
}));

(malli.registry.t_malli$registry39003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39005){
var self__ = this;
var _39005__$1 = this;
return self__.meta39004;
}));

(malli.registry.t_malli$registry39003.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39003.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry39003.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry39003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39004","meta39004",1853780362,null)], null);
}));

(malli.registry.t_malli$registry39003.cljs$lang$type = true);

(malli.registry.t_malli$registry39003.cljs$lang$ctorStr = "malli.registry/t_malli$registry39003");

(malli.registry.t_malli$registry39003.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry39003");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39003.
 */
malli.registry.__GT_t_malli$registry39003 = (function malli$registry$__GT_t_malli$registry39003(meta39004){
return (new malli.registry.t_malli$registry39003(meta39004));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry39003(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39007 = (function (meta39008){
this.meta39008 = meta39008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39009,meta39008__$1){
var self__ = this;
var _39009__$1 = this;
return (new malli.registry.t_malli$registry39007(meta39008__$1));
}));

(malli.registry.t_malli$registry39007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39009){
var self__ = this;
var _39009__$1 = this;
return self__.meta39008;
}));

(malli.registry.t_malli$registry39007.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39007.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry39007.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry39007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta39008","meta39008",-616884208,null)], null);
}));

(malli.registry.t_malli$registry39007.cljs$lang$type = true);

(malli.registry.t_malli$registry39007.cljs$lang$ctorStr = "malli.registry/t_malli$registry39007");

(malli.registry.t_malli$registry39007.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry39007");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39007.
 */
malli.registry.__GT_t_malli$registry39007 = (function malli$registry$__GT_t_malli$registry39007(meta39008){
return (new malli.registry.t_malli$registry39007(meta39008));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry39007(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39018 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta39019){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta39019 = meta39019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39020,meta39019__$1){
var self__ = this;
var _39020__$1 = this;
return (new malli.registry.t_malli$registry39018(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta39019__$1));
}));

(malli.registry.t_malli$registry39018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39020){
var self__ = this;
var _39020__$1 = this;
return self__.meta39019;
}));

(malli.registry.t_malli$registry39018.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39018.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__39023 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__39023.cljs$core$IFn$_invoke$arity$1 ? fexpr__39023.cljs$core$IFn$_invoke$arity$1(name) : fexpr__39023.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__39024 = name;
var G__39025 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__39024,G__39025) : self__.provider.call(null,G__39024,G__39025));
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

(malli.registry.t_malli$registry39018.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry39018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta39019","meta39019",1713217933,null)], null);
}));

(malli.registry.t_malli$registry39018.cljs$lang$type = true);

(malli.registry.t_malli$registry39018.cljs$lang$ctorStr = "malli.registry/t_malli$registry39018");

(malli.registry.t_malli$registry39018.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry39018");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39018.
 */
malli.registry.__GT_t_malli$registry39018 = (function malli$registry$__GT_t_malli$registry39018(default_registry,provider,cache_STAR_,registry_STAR_,meta39019){
return (new malli.registry.t_malli$registry39018(default_registry,provider,cache_STAR_,registry_STAR_,meta39019));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry39018(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
