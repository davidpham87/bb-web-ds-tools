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

var malli$registry$Registry$_schema$dyn_45243 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45243(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45244 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45244(this$);
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
malli.registry.t_malli$registry45138 = (function (m,fm,meta45139){
this.m = m;
this.fm = fm;
this.meta45139 = meta45139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45140,meta45139__$1){
var self__ = this;
var _45140__$1 = this;
return (new malli.registry.t_malli$registry45138(self__.m,self__.fm,meta45139__$1));
}));

(malli.registry.t_malli$registry45138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45140){
var self__ = this;
var _45140__$1 = this;
return self__.meta45139;
}));

(malli.registry.t_malli$registry45138.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45138.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45138.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45139","meta45139",-1641153184,null)], null);
}));

(malli.registry.t_malli$registry45138.cljs$lang$type = true);

(malli.registry.t_malli$registry45138.cljs$lang$ctorStr = "malli.registry/t_malli$registry45138");

(malli.registry.t_malli$registry45138.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45138");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45138.
 */
malli.registry.__GT_t_malli$registry45138 = (function malli$registry$__GT_t_malli$registry45138(m,fm,meta45139){
return (new malli.registry.t_malli$registry45138(m,fm,meta45139));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45138(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45158 = (function (m,meta45159){
this.m = m;
this.meta45159 = meta45159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45160,meta45159__$1){
var self__ = this;
var _45160__$1 = this;
return (new malli.registry.t_malli$registry45158(self__.m,meta45159__$1));
}));

(malli.registry.t_malli$registry45158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45160){
var self__ = this;
var _45160__$1 = this;
return self__.meta45159;
}));

(malli.registry.t_malli$registry45158.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45158.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45158.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45159","meta45159",-149857240,null)], null);
}));

(malli.registry.t_malli$registry45158.cljs$lang$type = true);

(malli.registry.t_malli$registry45158.cljs$lang$ctorStr = "malli.registry/t_malli$registry45158");

(malli.registry.t_malli$registry45158.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45158");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45158.
 */
malli.registry.__GT_t_malli$registry45158 = (function malli$registry$__GT_t_malli$registry45158(m,meta45159){
return (new malli.registry.t_malli$registry45158(m,meta45159));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45158(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45164 = (function (meta45165){
this.meta45165 = meta45165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45166,meta45165__$1){
var self__ = this;
var _45166__$1 = this;
return (new malli.registry.t_malli$registry45164(meta45165__$1));
}));

(malli.registry.t_malli$registry45164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45166){
var self__ = this;
var _45166__$1 = this;
return self__.meta45165;
}));

(malli.registry.t_malli$registry45164.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45164.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45164.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45165","meta45165",-1467095151,null)], null);
}));

(malli.registry.t_malli$registry45164.cljs$lang$type = true);

(malli.registry.t_malli$registry45164.cljs$lang$ctorStr = "malli.registry/t_malli$registry45164");

(malli.registry.t_malli$registry45164.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45164");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45164.
 */
malli.registry.__GT_t_malli$registry45164 = (function malli$registry$__GT_t_malli$registry45164(meta45165){
return (new malli.registry.t_malli$registry45164(meta45165));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45164(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45169 = (function (_QMARK_registries,registries,meta45170){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45170 = meta45170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45171,meta45170__$1){
var self__ = this;
var _45171__$1 = this;
return (new malli.registry.t_malli$registry45169(self__._QMARK_registries,self__.registries,meta45170__$1));
}));

(malli.registry.t_malli$registry45169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45171){
var self__ = this;
var _45171__$1 = this;
return self__.meta45170;
}));

(malli.registry.t_malli$registry45169.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45169.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45167_SHARP_){
return malli.registry._schema(p1__45167_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45169.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45170","meta45170",-235249512,null)], null);
}));

(malli.registry.t_malli$registry45169.cljs$lang$type = true);

(malli.registry.t_malli$registry45169.cljs$lang$ctorStr = "malli.registry/t_malli$registry45169");

(malli.registry.t_malli$registry45169.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45169");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45169.
 */
malli.registry.__GT_t_malli$registry45169 = (function malli$registry$__GT_t_malli$registry45169(_QMARK_registries,registries,meta45170){
return (new malli.registry.t_malli$registry45169(_QMARK_registries,registries,meta45170));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45251 = arguments.length;
var i__5750__auto___45252 = (0);
while(true){
if((i__5750__auto___45252 < len__5749__auto___45251)){
args__5755__auto__.push((arguments[i__5750__auto___45252]));

var G__45253 = (i__5750__auto___45252 + (1));
i__5750__auto___45252 = G__45253;
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
return (new malli.registry.t_malli$registry45169(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45168){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45168));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45173 = (function (db,meta45174){
this.db = db;
this.meta45174 = meta45174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45175,meta45174__$1){
var self__ = this;
var _45175__$1 = this;
return (new malli.registry.t_malli$registry45173(self__.db,meta45174__$1));
}));

(malli.registry.t_malli$registry45173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45175){
var self__ = this;
var _45175__$1 = this;
return self__.meta45174;
}));

(malli.registry.t_malli$registry45173.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45173.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45173.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45174","meta45174",776722447,null)], null);
}));

(malli.registry.t_malli$registry45173.cljs$lang$type = true);

(malli.registry.t_malli$registry45173.cljs$lang$ctorStr = "malli.registry/t_malli$registry45173");

(malli.registry.t_malli$registry45173.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45173");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45173.
 */
malli.registry.__GT_t_malli$registry45173 = (function malli$registry$__GT_t_malli$registry45173(db,meta45174){
return (new malli.registry.t_malli$registry45173(db,meta45174));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45173(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45181 = (function (meta45182){
this.meta45182 = meta45182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45183,meta45182__$1){
var self__ = this;
var _45183__$1 = this;
return (new malli.registry.t_malli$registry45181(meta45182__$1));
}));

(malli.registry.t_malli$registry45181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45183){
var self__ = this;
var _45183__$1 = this;
return self__.meta45182;
}));

(malli.registry.t_malli$registry45181.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45181.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45181.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45182","meta45182",-140171156,null)], null);
}));

(malli.registry.t_malli$registry45181.cljs$lang$type = true);

(malli.registry.t_malli$registry45181.cljs$lang$ctorStr = "malli.registry/t_malli$registry45181");

(malli.registry.t_malli$registry45181.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45181");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45181.
 */
malli.registry.__GT_t_malli$registry45181 = (function malli$registry$__GT_t_malli$registry45181(meta45182){
return (new malli.registry.t_malli$registry45181(meta45182));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45181(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45194 = (function (meta45195){
this.meta45195 = meta45195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45196,meta45195__$1){
var self__ = this;
var _45196__$1 = this;
return (new malli.registry.t_malli$registry45194(meta45195__$1));
}));

(malli.registry.t_malli$registry45194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45196){
var self__ = this;
var _45196__$1 = this;
return self__.meta45195;
}));

(malli.registry.t_malli$registry45194.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45194.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45194.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45195","meta45195",2129052179,null)], null);
}));

(malli.registry.t_malli$registry45194.cljs$lang$type = true);

(malli.registry.t_malli$registry45194.cljs$lang$ctorStr = "malli.registry/t_malli$registry45194");

(malli.registry.t_malli$registry45194.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45194");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45194.
 */
malli.registry.__GT_t_malli$registry45194 = (function malli$registry$__GT_t_malli$registry45194(meta45195){
return (new malli.registry.t_malli$registry45194(meta45195));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45194(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45199 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45200){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45200 = meta45200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45201,meta45200__$1){
var self__ = this;
var _45201__$1 = this;
return (new malli.registry.t_malli$registry45199(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45200__$1));
}));

(malli.registry.t_malli$registry45199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45201){
var self__ = this;
var _45201__$1 = this;
return self__.meta45200;
}));

(malli.registry.t_malli$registry45199.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45199.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45207 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45207.cljs$core$IFn$_invoke$arity$1 ? fexpr__45207.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45207.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45208 = name;
var G__45209 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45208,G__45209) : self__.provider.call(null,G__45208,G__45209));
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

(malli.registry.t_malli$registry45199.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45200","meta45200",1785701602,null)], null);
}));

(malli.registry.t_malli$registry45199.cljs$lang$type = true);

(malli.registry.t_malli$registry45199.cljs$lang$ctorStr = "malli.registry/t_malli$registry45199");

(malli.registry.t_malli$registry45199.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45199");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45199.
 */
malli.registry.__GT_t_malli$registry45199 = (function malli$registry$__GT_t_malli$registry45199(default_registry,provider,cache_STAR_,registry_STAR_,meta45200){
return (new malli.registry.t_malli$registry45199(default_registry,provider,cache_STAR_,registry_STAR_,meta45200));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45199(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
