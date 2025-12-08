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

var malli$registry$Registry$_schema$dyn_51388 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_51388(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_51389 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_51389(this$);
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
malli.registry.t_malli$registry51256 = (function (m,fm,meta51257){
this.m = m;
this.fm = fm;
this.meta51257 = meta51257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51258,meta51257__$1){
var self__ = this;
var _51258__$1 = this;
return (new malli.registry.t_malli$registry51256(self__.m,self__.fm,meta51257__$1));
}));

(malli.registry.t_malli$registry51256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51258){
var self__ = this;
var _51258__$1 = this;
return self__.meta51257;
}));

(malli.registry.t_malli$registry51256.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51256.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry51256.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry51256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta51257","meta51257",-1657992484,null)], null);
}));

(malli.registry.t_malli$registry51256.cljs$lang$type = true);

(malli.registry.t_malli$registry51256.cljs$lang$ctorStr = "malli.registry/t_malli$registry51256");

(malli.registry.t_malli$registry51256.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51256");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51256.
 */
malli.registry.__GT_t_malli$registry51256 = (function malli$registry$__GT_t_malli$registry51256(m,fm,meta51257){
return (new malli.registry.t_malli$registry51256(m,fm,meta51257));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry51256(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry51263 = (function (m,meta51264){
this.m = m;
this.meta51264 = meta51264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51265,meta51264__$1){
var self__ = this;
var _51265__$1 = this;
return (new malli.registry.t_malli$registry51263(self__.m,meta51264__$1));
}));

(malli.registry.t_malli$registry51263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51265){
var self__ = this;
var _51265__$1 = this;
return self__.meta51264;
}));

(malli.registry.t_malli$registry51263.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51263.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry51263.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry51263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta51264","meta51264",-368557674,null)], null);
}));

(malli.registry.t_malli$registry51263.cljs$lang$type = true);

(malli.registry.t_malli$registry51263.cljs$lang$ctorStr = "malli.registry/t_malli$registry51263");

(malli.registry.t_malli$registry51263.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51263");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51263.
 */
malli.registry.__GT_t_malli$registry51263 = (function malli$registry$__GT_t_malli$registry51263(m,meta51264){
return (new malli.registry.t_malli$registry51263(m,meta51264));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry51263(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry51268 = (function (meta51269){
this.meta51269 = meta51269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51270,meta51269__$1){
var self__ = this;
var _51270__$1 = this;
return (new malli.registry.t_malli$registry51268(meta51269__$1));
}));

(malli.registry.t_malli$registry51268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51270){
var self__ = this;
var _51270__$1 = this;
return self__.meta51269;
}));

(malli.registry.t_malli$registry51268.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51268.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry51268.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry51268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51269","meta51269",-1851590448,null)], null);
}));

(malli.registry.t_malli$registry51268.cljs$lang$type = true);

(malli.registry.t_malli$registry51268.cljs$lang$ctorStr = "malli.registry/t_malli$registry51268");

(malli.registry.t_malli$registry51268.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51268");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51268.
 */
malli.registry.__GT_t_malli$registry51268 = (function malli$registry$__GT_t_malli$registry51268(meta51269){
return (new malli.registry.t_malli$registry51268(meta51269));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry51268(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry51303 = (function (_QMARK_registries,registries,meta51304){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta51304 = meta51304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51305,meta51304__$1){
var self__ = this;
var _51305__$1 = this;
return (new malli.registry.t_malli$registry51303(self__._QMARK_registries,self__.registries,meta51304__$1));
}));

(malli.registry.t_malli$registry51303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51305){
var self__ = this;
var _51305__$1 = this;
return self__.meta51304;
}));

(malli.registry.t_malli$registry51303.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51303.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__51286_SHARP_){
return malli.registry._schema(p1__51286_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry51303.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry51303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta51304","meta51304",-1242522595,null)], null);
}));

(malli.registry.t_malli$registry51303.cljs$lang$type = true);

(malli.registry.t_malli$registry51303.cljs$lang$ctorStr = "malli.registry/t_malli$registry51303");

(malli.registry.t_malli$registry51303.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51303");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51303.
 */
malli.registry.__GT_t_malli$registry51303 = (function malli$registry$__GT_t_malli$registry51303(_QMARK_registries,registries,meta51304){
return (new malli.registry.t_malli$registry51303(_QMARK_registries,registries,meta51304));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51391 = arguments.length;
var i__5750__auto___51392 = (0);
while(true){
if((i__5750__auto___51392 < len__5749__auto___51391)){
args__5755__auto__.push((arguments[i__5750__auto___51392]));

var G__51393 = (i__5750__auto___51392 + (1));
i__5750__auto___51392 = G__51393;
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
return (new malli.registry.t_malli$registry51303(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq51293){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51293));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry51333 = (function (db,meta51334){
this.db = db;
this.meta51334 = meta51334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51335,meta51334__$1){
var self__ = this;
var _51335__$1 = this;
return (new malli.registry.t_malli$registry51333(self__.db,meta51334__$1));
}));

(malli.registry.t_malli$registry51333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51335){
var self__ = this;
var _51335__$1 = this;
return self__.meta51334;
}));

(malli.registry.t_malli$registry51333.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51333.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry51333.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry51333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta51334","meta51334",-95480997,null)], null);
}));

(malli.registry.t_malli$registry51333.cljs$lang$type = true);

(malli.registry.t_malli$registry51333.cljs$lang$ctorStr = "malli.registry/t_malli$registry51333");

(malli.registry.t_malli$registry51333.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51333");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51333.
 */
malli.registry.__GT_t_malli$registry51333 = (function malli$registry$__GT_t_malli$registry51333(db,meta51334){
return (new malli.registry.t_malli$registry51333(db,meta51334));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry51333(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry51345 = (function (meta51346){
this.meta51346 = meta51346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51347,meta51346__$1){
var self__ = this;
var _51347__$1 = this;
return (new malli.registry.t_malli$registry51345(meta51346__$1));
}));

(malli.registry.t_malli$registry51345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51347){
var self__ = this;
var _51347__$1 = this;
return self__.meta51346;
}));

(malli.registry.t_malli$registry51345.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51345.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry51345.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry51345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51346","meta51346",-2051959245,null)], null);
}));

(malli.registry.t_malli$registry51345.cljs$lang$type = true);

(malli.registry.t_malli$registry51345.cljs$lang$ctorStr = "malli.registry/t_malli$registry51345");

(malli.registry.t_malli$registry51345.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51345");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51345.
 */
malli.registry.__GT_t_malli$registry51345 = (function malli$registry$__GT_t_malli$registry51345(meta51346){
return (new malli.registry.t_malli$registry51345(meta51346));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry51345(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry51350 = (function (meta51351){
this.meta51351 = meta51351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51352,meta51351__$1){
var self__ = this;
var _51352__$1 = this;
return (new malli.registry.t_malli$registry51350(meta51351__$1));
}));

(malli.registry.t_malli$registry51350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51352){
var self__ = this;
var _51352__$1 = this;
return self__.meta51351;
}));

(malli.registry.t_malli$registry51350.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51350.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry51350.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry51350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta51351","meta51351",1747291769,null)], null);
}));

(malli.registry.t_malli$registry51350.cljs$lang$type = true);

(malli.registry.t_malli$registry51350.cljs$lang$ctorStr = "malli.registry/t_malli$registry51350");

(malli.registry.t_malli$registry51350.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51350");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51350.
 */
malli.registry.__GT_t_malli$registry51350 = (function malli$registry$__GT_t_malli$registry51350(meta51351){
return (new malli.registry.t_malli$registry51350(meta51351));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry51350(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry51361 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta51362){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta51362 = meta51362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry51361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51363,meta51362__$1){
var self__ = this;
var _51363__$1 = this;
return (new malli.registry.t_malli$registry51361(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta51362__$1));
}));

(malli.registry.t_malli$registry51361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51363){
var self__ = this;
var _51363__$1 = this;
return self__.meta51362;
}));

(malli.registry.t_malli$registry51361.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry51361.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__51371 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__51371.cljs$core$IFn$_invoke$arity$1 ? fexpr__51371.cljs$core$IFn$_invoke$arity$1(name) : fexpr__51371.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__51373 = name;
var G__51374 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__51373,G__51374) : self__.provider.call(null,G__51373,G__51374));
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

(malli.registry.t_malli$registry51361.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry51361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta51362","meta51362",-1387798914,null)], null);
}));

(malli.registry.t_malli$registry51361.cljs$lang$type = true);

(malli.registry.t_malli$registry51361.cljs$lang$ctorStr = "malli.registry/t_malli$registry51361");

(malli.registry.t_malli$registry51361.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry51361");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry51361.
 */
malli.registry.__GT_t_malli$registry51361 = (function malli$registry$__GT_t_malli$registry51361(default_registry,provider,cache_STAR_,registry_STAR_,meta51362){
return (new malli.registry.t_malli$registry51361(default_registry,provider,cache_STAR_,registry_STAR_,meta51362));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry51361(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
