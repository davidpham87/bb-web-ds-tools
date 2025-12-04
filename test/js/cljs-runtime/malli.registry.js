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

var malli$registry$Registry$_schema$dyn_45291 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45291(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45292 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45292(this$);
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
malli.registry.t_malli$registry45159 = (function (m,fm,meta45160){
this.m = m;
this.fm = fm;
this.meta45160 = meta45160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45161,meta45160__$1){
var self__ = this;
var _45161__$1 = this;
return (new malli.registry.t_malli$registry45159(self__.m,self__.fm,meta45160__$1));
}));

(malli.registry.t_malli$registry45159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45161){
var self__ = this;
var _45161__$1 = this;
return self__.meta45160;
}));

(malli.registry.t_malli$registry45159.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45159.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45159.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45160","meta45160",56149145,null)], null);
}));

(malli.registry.t_malli$registry45159.cljs$lang$type = true);

(malli.registry.t_malli$registry45159.cljs$lang$ctorStr = "malli.registry/t_malli$registry45159");

(malli.registry.t_malli$registry45159.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45159");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45159.
 */
malli.registry.__GT_t_malli$registry45159 = (function malli$registry$__GT_t_malli$registry45159(m,fm,meta45160){
return (new malli.registry.t_malli$registry45159(m,fm,meta45160));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45159(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45163 = (function (m,meta45164){
this.m = m;
this.meta45164 = meta45164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45165,meta45164__$1){
var self__ = this;
var _45165__$1 = this;
return (new malli.registry.t_malli$registry45163(self__.m,meta45164__$1));
}));

(malli.registry.t_malli$registry45163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45165){
var self__ = this;
var _45165__$1 = this;
return self__.meta45164;
}));

(malli.registry.t_malli$registry45163.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45163.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45163.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45163.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45164","meta45164",-372957994,null)], null);
}));

(malli.registry.t_malli$registry45163.cljs$lang$type = true);

(malli.registry.t_malli$registry45163.cljs$lang$ctorStr = "malli.registry/t_malli$registry45163");

(malli.registry.t_malli$registry45163.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45163");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45163.
 */
malli.registry.__GT_t_malli$registry45163 = (function malli$registry$__GT_t_malli$registry45163(m,meta45164){
return (new malli.registry.t_malli$registry45163(m,meta45164));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45163(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45167 = (function (meta45168){
this.meta45168 = meta45168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45169,meta45168__$1){
var self__ = this;
var _45169__$1 = this;
return (new malli.registry.t_malli$registry45167(meta45168__$1));
}));

(malli.registry.t_malli$registry45167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45169){
var self__ = this;
var _45169__$1 = this;
return self__.meta45168;
}));

(malli.registry.t_malli$registry45167.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45167.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45167.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45168","meta45168",347409220,null)], null);
}));

(malli.registry.t_malli$registry45167.cljs$lang$type = true);

(malli.registry.t_malli$registry45167.cljs$lang$ctorStr = "malli.registry/t_malli$registry45167");

(malli.registry.t_malli$registry45167.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45167");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45167.
 */
malli.registry.__GT_t_malli$registry45167 = (function malli$registry$__GT_t_malli$registry45167(meta45168){
return (new malli.registry.t_malli$registry45167(meta45168));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45167(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45197 = (function (_QMARK_registries,registries,meta45198){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45198 = meta45198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45199,meta45198__$1){
var self__ = this;
var _45199__$1 = this;
return (new malli.registry.t_malli$registry45197(self__._QMARK_registries,self__.registries,meta45198__$1));
}));

(malli.registry.t_malli$registry45197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45199){
var self__ = this;
var _45199__$1 = this;
return self__.meta45198;
}));

(malli.registry.t_malli$registry45197.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45197.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45190_SHARP_){
return malli.registry._schema(p1__45190_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45197.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45198","meta45198",41773888,null)], null);
}));

(malli.registry.t_malli$registry45197.cljs$lang$type = true);

(malli.registry.t_malli$registry45197.cljs$lang$ctorStr = "malli.registry/t_malli$registry45197");

(malli.registry.t_malli$registry45197.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45197");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45197.
 */
malli.registry.__GT_t_malli$registry45197 = (function malli$registry$__GT_t_malli$registry45197(_QMARK_registries,registries,meta45198){
return (new malli.registry.t_malli$registry45197(_QMARK_registries,registries,meta45198));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45294 = arguments.length;
var i__5750__auto___45295 = (0);
while(true){
if((i__5750__auto___45295 < len__5749__auto___45294)){
args__5755__auto__.push((arguments[i__5750__auto___45295]));

var G__45296 = (i__5750__auto___45295 + (1));
i__5750__auto___45295 = G__45296;
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
return (new malli.registry.t_malli$registry45197(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45191){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45191));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45234 = (function (db,meta45235){
this.db = db;
this.meta45235 = meta45235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45236,meta45235__$1){
var self__ = this;
var _45236__$1 = this;
return (new malli.registry.t_malli$registry45234(self__.db,meta45235__$1));
}));

(malli.registry.t_malli$registry45234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45236){
var self__ = this;
var _45236__$1 = this;
return self__.meta45235;
}));

(malli.registry.t_malli$registry45234.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45234.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45234.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45235","meta45235",-253063147,null)], null);
}));

(malli.registry.t_malli$registry45234.cljs$lang$type = true);

(malli.registry.t_malli$registry45234.cljs$lang$ctorStr = "malli.registry/t_malli$registry45234");

(malli.registry.t_malli$registry45234.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45234");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45234.
 */
malli.registry.__GT_t_malli$registry45234 = (function malli$registry$__GT_t_malli$registry45234(db,meta45235){
return (new malli.registry.t_malli$registry45234(db,meta45235));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45234(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45251 = (function (meta45252){
this.meta45252 = meta45252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45253,meta45252__$1){
var self__ = this;
var _45253__$1 = this;
return (new malli.registry.t_malli$registry45251(meta45252__$1));
}));

(malli.registry.t_malli$registry45251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45253){
var self__ = this;
var _45253__$1 = this;
return self__.meta45252;
}));

(malli.registry.t_malli$registry45251.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45251.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45251.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45252","meta45252",82657086,null)], null);
}));

(malli.registry.t_malli$registry45251.cljs$lang$type = true);

(malli.registry.t_malli$registry45251.cljs$lang$ctorStr = "malli.registry/t_malli$registry45251");

(malli.registry.t_malli$registry45251.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45251");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45251.
 */
malli.registry.__GT_t_malli$registry45251 = (function malli$registry$__GT_t_malli$registry45251(meta45252){
return (new malli.registry.t_malli$registry45251(meta45252));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45251(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45254 = (function (meta45255){
this.meta45255 = meta45255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45256,meta45255__$1){
var self__ = this;
var _45256__$1 = this;
return (new malli.registry.t_malli$registry45254(meta45255__$1));
}));

(malli.registry.t_malli$registry45254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45256){
var self__ = this;
var _45256__$1 = this;
return self__.meta45255;
}));

(malli.registry.t_malli$registry45254.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45254.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45254.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45255","meta45255",-728385203,null)], null);
}));

(malli.registry.t_malli$registry45254.cljs$lang$type = true);

(malli.registry.t_malli$registry45254.cljs$lang$ctorStr = "malli.registry/t_malli$registry45254");

(malli.registry.t_malli$registry45254.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45254");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45254.
 */
malli.registry.__GT_t_malli$registry45254 = (function malli$registry$__GT_t_malli$registry45254(meta45255){
return (new malli.registry.t_malli$registry45254(meta45255));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45254(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45269 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45270){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45270 = meta45270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45271,meta45270__$1){
var self__ = this;
var _45271__$1 = this;
return (new malli.registry.t_malli$registry45269(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45270__$1));
}));

(malli.registry.t_malli$registry45269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45271){
var self__ = this;
var _45271__$1 = this;
return self__.meta45270;
}));

(malli.registry.t_malli$registry45269.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45269.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45278 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45278.cljs$core$IFn$_invoke$arity$1 ? fexpr__45278.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45278.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45280 = name;
var G__45281 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45280,G__45281) : self__.provider.call(null,G__45280,G__45281));
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

(malli.registry.t_malli$registry45269.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45270","meta45270",793200234,null)], null);
}));

(malli.registry.t_malli$registry45269.cljs$lang$type = true);

(malli.registry.t_malli$registry45269.cljs$lang$ctorStr = "malli.registry/t_malli$registry45269");

(malli.registry.t_malli$registry45269.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45269");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45269.
 */
malli.registry.__GT_t_malli$registry45269 = (function malli$registry$__GT_t_malli$registry45269(default_registry,provider,cache_STAR_,registry_STAR_,meta45270){
return (new malli.registry.t_malli$registry45269(default_registry,provider,cache_STAR_,registry_STAR_,meta45270));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45269(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
