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

var malli$registry$Registry$_schema$dyn_41278 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_41278(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_41279 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_41279(this$);
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
malli.registry.t_malli$registry41172 = (function (m,fm,meta41173){
this.m = m;
this.fm = fm;
this.meta41173 = meta41173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41174,meta41173__$1){
var self__ = this;
var _41174__$1 = this;
return (new malli.registry.t_malli$registry41172(self__.m,self__.fm,meta41173__$1));
}));

(malli.registry.t_malli$registry41172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41174){
var self__ = this;
var _41174__$1 = this;
return self__.meta41173;
}));

(malli.registry.t_malli$registry41172.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41172.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry41172.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry41172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta41173","meta41173",1958749516,null)], null);
}));

(malli.registry.t_malli$registry41172.cljs$lang$type = true);

(malli.registry.t_malli$registry41172.cljs$lang$ctorStr = "malli.registry/t_malli$registry41172");

(malli.registry.t_malli$registry41172.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41172");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41172.
 */
malli.registry.__GT_t_malli$registry41172 = (function malli$registry$__GT_t_malli$registry41172(m,fm,meta41173){
return (new malli.registry.t_malli$registry41172(m,fm,meta41173));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry41172(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry41175 = (function (m,meta41176){
this.m = m;
this.meta41176 = meta41176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41177,meta41176__$1){
var self__ = this;
var _41177__$1 = this;
return (new malli.registry.t_malli$registry41175(self__.m,meta41176__$1));
}));

(malli.registry.t_malli$registry41175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41177){
var self__ = this;
var _41177__$1 = this;
return self__.meta41176;
}));

(malli.registry.t_malli$registry41175.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41175.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry41175.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry41175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta41176","meta41176",1771786815,null)], null);
}));

(malli.registry.t_malli$registry41175.cljs$lang$type = true);

(malli.registry.t_malli$registry41175.cljs$lang$ctorStr = "malli.registry/t_malli$registry41175");

(malli.registry.t_malli$registry41175.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41175");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41175.
 */
malli.registry.__GT_t_malli$registry41175 = (function malli$registry$__GT_t_malli$registry41175(m,meta41176){
return (new malli.registry.t_malli$registry41175(m,meta41176));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry41175(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry41185 = (function (meta41186){
this.meta41186 = meta41186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41187,meta41186__$1){
var self__ = this;
var _41187__$1 = this;
return (new malli.registry.t_malli$registry41185(meta41186__$1));
}));

(malli.registry.t_malli$registry41185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41187){
var self__ = this;
var _41187__$1 = this;
return self__.meta41186;
}));

(malli.registry.t_malli$registry41185.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41185.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry41185.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry41185.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41186","meta41186",1255792560,null)], null);
}));

(malli.registry.t_malli$registry41185.cljs$lang$type = true);

(malli.registry.t_malli$registry41185.cljs$lang$ctorStr = "malli.registry/t_malli$registry41185");

(malli.registry.t_malli$registry41185.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41185");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41185.
 */
malli.registry.__GT_t_malli$registry41185 = (function malli$registry$__GT_t_malli$registry41185(meta41186){
return (new malli.registry.t_malli$registry41185(meta41186));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry41185(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry41199 = (function (_QMARK_registries,registries,meta41200){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta41200 = meta41200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41201,meta41200__$1){
var self__ = this;
var _41201__$1 = this;
return (new malli.registry.t_malli$registry41199(self__._QMARK_registries,self__.registries,meta41200__$1));
}));

(malli.registry.t_malli$registry41199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41201){
var self__ = this;
var _41201__$1 = this;
return self__.meta41200;
}));

(malli.registry.t_malli$registry41199.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41199.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__41194_SHARP_){
return malli.registry._schema(p1__41194_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry41199.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry41199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta41200","meta41200",1064226082,null)], null);
}));

(malli.registry.t_malli$registry41199.cljs$lang$type = true);

(malli.registry.t_malli$registry41199.cljs$lang$ctorStr = "malli.registry/t_malli$registry41199");

(malli.registry.t_malli$registry41199.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41199");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41199.
 */
malli.registry.__GT_t_malli$registry41199 = (function malli$registry$__GT_t_malli$registry41199(_QMARK_registries,registries,meta41200){
return (new malli.registry.t_malli$registry41199(_QMARK_registries,registries,meta41200));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41320 = arguments.length;
var i__5750__auto___41321 = (0);
while(true){
if((i__5750__auto___41321 < len__5749__auto___41320)){
args__5755__auto__.push((arguments[i__5750__auto___41321]));

var G__41322 = (i__5750__auto___41321 + (1));
i__5750__auto___41321 = G__41322;
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
return (new malli.registry.t_malli$registry41199(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq41195){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41195));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry41207 = (function (db,meta41208){
this.db = db;
this.meta41208 = meta41208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41209,meta41208__$1){
var self__ = this;
var _41209__$1 = this;
return (new malli.registry.t_malli$registry41207(self__.db,meta41208__$1));
}));

(malli.registry.t_malli$registry41207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41209){
var self__ = this;
var _41209__$1 = this;
return self__.meta41208;
}));

(malli.registry.t_malli$registry41207.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41207.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry41207.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry41207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta41208","meta41208",624132149,null)], null);
}));

(malli.registry.t_malli$registry41207.cljs$lang$type = true);

(malli.registry.t_malli$registry41207.cljs$lang$ctorStr = "malli.registry/t_malli$registry41207");

(malli.registry.t_malli$registry41207.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41207");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41207.
 */
malli.registry.__GT_t_malli$registry41207 = (function malli$registry$__GT_t_malli$registry41207(db,meta41208){
return (new malli.registry.t_malli$registry41207(db,meta41208));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry41207(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry41218 = (function (meta41219){
this.meta41219 = meta41219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41220,meta41219__$1){
var self__ = this;
var _41220__$1 = this;
return (new malli.registry.t_malli$registry41218(meta41219__$1));
}));

(malli.registry.t_malli$registry41218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41220){
var self__ = this;
var _41220__$1 = this;
return self__.meta41219;
}));

(malli.registry.t_malli$registry41218.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41218.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry41218.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry41218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41219","meta41219",-198620482,null)], null);
}));

(malli.registry.t_malli$registry41218.cljs$lang$type = true);

(malli.registry.t_malli$registry41218.cljs$lang$ctorStr = "malli.registry/t_malli$registry41218");

(malli.registry.t_malli$registry41218.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41218");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41218.
 */
malli.registry.__GT_t_malli$registry41218 = (function malli$registry$__GT_t_malli$registry41218(meta41219){
return (new malli.registry.t_malli$registry41218(meta41219));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry41218(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry41230 = (function (meta41231){
this.meta41231 = meta41231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41232,meta41231__$1){
var self__ = this;
var _41232__$1 = this;
return (new malli.registry.t_malli$registry41230(meta41231__$1));
}));

(malli.registry.t_malli$registry41230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41232){
var self__ = this;
var _41232__$1 = this;
return self__.meta41231;
}));

(malli.registry.t_malli$registry41230.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41230.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry41230.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry41230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41231","meta41231",427975572,null)], null);
}));

(malli.registry.t_malli$registry41230.cljs$lang$type = true);

(malli.registry.t_malli$registry41230.cljs$lang$ctorStr = "malli.registry/t_malli$registry41230");

(malli.registry.t_malli$registry41230.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41230");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41230.
 */
malli.registry.__GT_t_malli$registry41230 = (function malli$registry$__GT_t_malli$registry41230(meta41231){
return (new malli.registry.t_malli$registry41230(meta41231));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry41230(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry41237 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta41238){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta41238 = meta41238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry41237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41239,meta41238__$1){
var self__ = this;
var _41239__$1 = this;
return (new malli.registry.t_malli$registry41237(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta41238__$1));
}));

(malli.registry.t_malli$registry41237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41239){
var self__ = this;
var _41239__$1 = this;
return self__.meta41238;
}));

(malli.registry.t_malli$registry41237.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry41237.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__41240 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__41240.cljs$core$IFn$_invoke$arity$1 ? fexpr__41240.cljs$core$IFn$_invoke$arity$1(name) : fexpr__41240.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__41246 = name;
var G__41247 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__41246,G__41247) : self__.provider.call(null,G__41246,G__41247));
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

(malli.registry.t_malli$registry41237.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry41237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta41238","meta41238",-1580093509,null)], null);
}));

(malli.registry.t_malli$registry41237.cljs$lang$type = true);

(malli.registry.t_malli$registry41237.cljs$lang$ctorStr = "malli.registry/t_malli$registry41237");

(malli.registry.t_malli$registry41237.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry41237");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry41237.
 */
malli.registry.__GT_t_malli$registry41237 = (function malli$registry$__GT_t_malli$registry41237(default_registry,provider,cache_STAR_,registry_STAR_,meta41238){
return (new malli.registry.t_malli$registry41237(default_registry,provider,cache_STAR_,registry_STAR_,meta41238));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry41237(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
