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

var malli$registry$Registry$_schema$dyn_44988 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_44988(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_44989 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_44989(this$);
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
malli.registry.t_malli$registry44897 = (function (m,fm,meta44898){
this.m = m;
this.fm = fm;
this.meta44898 = meta44898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44899,meta44898__$1){
var self__ = this;
var _44899__$1 = this;
return (new malli.registry.t_malli$registry44897(self__.m,self__.fm,meta44898__$1));
}));

(malli.registry.t_malli$registry44897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44899){
var self__ = this;
var _44899__$1 = this;
return self__.meta44898;
}));

(malli.registry.t_malli$registry44897.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44897.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry44897.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry44897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta44898","meta44898",-78931893,null)], null);
}));

(malli.registry.t_malli$registry44897.cljs$lang$type = true);

(malli.registry.t_malli$registry44897.cljs$lang$ctorStr = "malli.registry/t_malli$registry44897");

(malli.registry.t_malli$registry44897.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44897");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44897.
 */
malli.registry.__GT_t_malli$registry44897 = (function malli$registry$__GT_t_malli$registry44897(m,fm,meta44898){
return (new malli.registry.t_malli$registry44897(m,fm,meta44898));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry44897(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44903 = (function (m,meta44904){
this.m = m;
this.meta44904 = meta44904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44905,meta44904__$1){
var self__ = this;
var _44905__$1 = this;
return (new malli.registry.t_malli$registry44903(self__.m,meta44904__$1));
}));

(malli.registry.t_malli$registry44903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44905){
var self__ = this;
var _44905__$1 = this;
return self__.meta44904;
}));

(malli.registry.t_malli$registry44903.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44903.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry44903.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry44903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta44904","meta44904",1102036053,null)], null);
}));

(malli.registry.t_malli$registry44903.cljs$lang$type = true);

(malli.registry.t_malli$registry44903.cljs$lang$ctorStr = "malli.registry/t_malli$registry44903");

(malli.registry.t_malli$registry44903.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44903");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44903.
 */
malli.registry.__GT_t_malli$registry44903 = (function malli$registry$__GT_t_malli$registry44903(m,meta44904){
return (new malli.registry.t_malli$registry44903(m,meta44904));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry44903(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry44917 = (function (meta44918){
this.meta44918 = meta44918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44919,meta44918__$1){
var self__ = this;
var _44919__$1 = this;
return (new malli.registry.t_malli$registry44917(meta44918__$1));
}));

(malli.registry.t_malli$registry44917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44919){
var self__ = this;
var _44919__$1 = this;
return self__.meta44918;
}));

(malli.registry.t_malli$registry44917.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44917.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry44917.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry44917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44918","meta44918",1822646239,null)], null);
}));

(malli.registry.t_malli$registry44917.cljs$lang$type = true);

(malli.registry.t_malli$registry44917.cljs$lang$ctorStr = "malli.registry/t_malli$registry44917");

(malli.registry.t_malli$registry44917.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44917");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44917.
 */
malli.registry.__GT_t_malli$registry44917 = (function malli$registry$__GT_t_malli$registry44917(meta44918){
return (new malli.registry.t_malli$registry44917(meta44918));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry44917(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44922 = (function (_QMARK_registries,registries,meta44923){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta44923 = meta44923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44924,meta44923__$1){
var self__ = this;
var _44924__$1 = this;
return (new malli.registry.t_malli$registry44922(self__._QMARK_registries,self__.registries,meta44923__$1));
}));

(malli.registry.t_malli$registry44922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44924){
var self__ = this;
var _44924__$1 = this;
return self__.meta44923;
}));

(malli.registry.t_malli$registry44922.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44922.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__44920_SHARP_){
return malli.registry._schema(p1__44920_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry44922.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry44922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta44923","meta44923",1857802080,null)], null);
}));

(malli.registry.t_malli$registry44922.cljs$lang$type = true);

(malli.registry.t_malli$registry44922.cljs$lang$ctorStr = "malli.registry/t_malli$registry44922");

(malli.registry.t_malli$registry44922.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44922");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44922.
 */
malli.registry.__GT_t_malli$registry44922 = (function malli$registry$__GT_t_malli$registry44922(_QMARK_registries,registries,meta44923){
return (new malli.registry.t_malli$registry44922(_QMARK_registries,registries,meta44923));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44997 = arguments.length;
var i__5750__auto___44998 = (0);
while(true){
if((i__5750__auto___44998 < len__5749__auto___44997)){
args__5755__auto__.push((arguments[i__5750__auto___44998]));

var G__44999 = (i__5750__auto___44998 + (1));
i__5750__auto___44998 = G__44999;
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
return (new malli.registry.t_malli$registry44922(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq44921){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44921));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44934 = (function (db,meta44935){
this.db = db;
this.meta44935 = meta44935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44936,meta44935__$1){
var self__ = this;
var _44936__$1 = this;
return (new malli.registry.t_malli$registry44934(self__.db,meta44935__$1));
}));

(malli.registry.t_malli$registry44934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44936){
var self__ = this;
var _44936__$1 = this;
return self__.meta44935;
}));

(malli.registry.t_malli$registry44934.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44934.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry44934.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry44934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta44935","meta44935",-1264194397,null)], null);
}));

(malli.registry.t_malli$registry44934.cljs$lang$type = true);

(malli.registry.t_malli$registry44934.cljs$lang$ctorStr = "malli.registry/t_malli$registry44934");

(malli.registry.t_malli$registry44934.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44934");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44934.
 */
malli.registry.__GT_t_malli$registry44934 = (function malli$registry$__GT_t_malli$registry44934(db,meta44935){
return (new malli.registry.t_malli$registry44934(db,meta44935));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry44934(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44939 = (function (meta44940){
this.meta44940 = meta44940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44941,meta44940__$1){
var self__ = this;
var _44941__$1 = this;
return (new malli.registry.t_malli$registry44939(meta44940__$1));
}));

(malli.registry.t_malli$registry44939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44941){
var self__ = this;
var _44941__$1 = this;
return self__.meta44940;
}));

(malli.registry.t_malli$registry44939.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44939.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry44939.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry44939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44940","meta44940",-72147433,null)], null);
}));

(malli.registry.t_malli$registry44939.cljs$lang$type = true);

(malli.registry.t_malli$registry44939.cljs$lang$ctorStr = "malli.registry/t_malli$registry44939");

(malli.registry.t_malli$registry44939.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44939");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44939.
 */
malli.registry.__GT_t_malli$registry44939 = (function malli$registry$__GT_t_malli$registry44939(meta44940){
return (new malli.registry.t_malli$registry44939(meta44940));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry44939(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44952 = (function (meta44953){
this.meta44953 = meta44953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44954,meta44953__$1){
var self__ = this;
var _44954__$1 = this;
return (new malli.registry.t_malli$registry44952(meta44953__$1));
}));

(malli.registry.t_malli$registry44952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44954){
var self__ = this;
var _44954__$1 = this;
return self__.meta44953;
}));

(malli.registry.t_malli$registry44952.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44952.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry44952.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry44952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44953","meta44953",-56836766,null)], null);
}));

(malli.registry.t_malli$registry44952.cljs$lang$type = true);

(malli.registry.t_malli$registry44952.cljs$lang$ctorStr = "malli.registry/t_malli$registry44952");

(malli.registry.t_malli$registry44952.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44952");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44952.
 */
malli.registry.__GT_t_malli$registry44952 = (function malli$registry$__GT_t_malli$registry44952(meta44953){
return (new malli.registry.t_malli$registry44952(meta44953));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry44952(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44972 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta44973){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta44973 = meta44973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44974,meta44973__$1){
var self__ = this;
var _44974__$1 = this;
return (new malli.registry.t_malli$registry44972(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta44973__$1));
}));

(malli.registry.t_malli$registry44972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44974){
var self__ = this;
var _44974__$1 = this;
return self__.meta44973;
}));

(malli.registry.t_malli$registry44972.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44972.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__44979 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__44979.cljs$core$IFn$_invoke$arity$1 ? fexpr__44979.cljs$core$IFn$_invoke$arity$1(name) : fexpr__44979.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__44980 = name;
var G__44981 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__44980,G__44981) : self__.provider.call(null,G__44980,G__44981));
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

(malli.registry.t_malli$registry44972.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry44972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta44973","meta44973",533453122,null)], null);
}));

(malli.registry.t_malli$registry44972.cljs$lang$type = true);

(malli.registry.t_malli$registry44972.cljs$lang$ctorStr = "malli.registry/t_malli$registry44972");

(malli.registry.t_malli$registry44972.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry44972");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44972.
 */
malli.registry.__GT_t_malli$registry44972 = (function malli$registry$__GT_t_malli$registry44972(default_registry,provider,cache_STAR_,registry_STAR_,meta44973){
return (new malli.registry.t_malli$registry44972(default_registry,provider,cache_STAR_,registry_STAR_,meta44973));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry44972(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
