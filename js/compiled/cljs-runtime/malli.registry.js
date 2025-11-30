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

var malli$registry$Registry$_schema$dyn_38799 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_38799(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_38800 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_38800(this$);
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
malli.registry.t_malli$registry38605 = (function (m,fm,meta38606){
this.m = m;
this.fm = fm;
this.meta38606 = meta38606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38607,meta38606__$1){
var self__ = this;
var _38607__$1 = this;
return (new malli.registry.t_malli$registry38605(self__.m,self__.fm,meta38606__$1));
}));

(malli.registry.t_malli$registry38605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38607){
var self__ = this;
var _38607__$1 = this;
return self__.meta38606;
}));

(malli.registry.t_malli$registry38605.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38605.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38605.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38606","meta38606",-126958709,null)], null);
}));

(malli.registry.t_malli$registry38605.cljs$lang$type = true);

(malli.registry.t_malli$registry38605.cljs$lang$ctorStr = "malli.registry/t_malli$registry38605");

(malli.registry.t_malli$registry38605.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38605");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38605.
 */
malli.registry.__GT_t_malli$registry38605 = (function malli$registry$__GT_t_malli$registry38605(m,fm,meta38606){
return (new malli.registry.t_malli$registry38605(m,fm,meta38606));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38605(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38627 = (function (m,meta38628){
this.m = m;
this.meta38628 = meta38628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38629,meta38628__$1){
var self__ = this;
var _38629__$1 = this;
return (new malli.registry.t_malli$registry38627(self__.m,meta38628__$1));
}));

(malli.registry.t_malli$registry38627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38629){
var self__ = this;
var _38629__$1 = this;
return self__.meta38628;
}));

(malli.registry.t_malli$registry38627.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38627.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38627.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38628","meta38628",-58829160,null)], null);
}));

(malli.registry.t_malli$registry38627.cljs$lang$type = true);

(malli.registry.t_malli$registry38627.cljs$lang$ctorStr = "malli.registry/t_malli$registry38627");

(malli.registry.t_malli$registry38627.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38627");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38627.
 */
malli.registry.__GT_t_malli$registry38627 = (function malli$registry$__GT_t_malli$registry38627(m,meta38628){
return (new malli.registry.t_malli$registry38627(m,meta38628));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38627(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38701 = (function (meta38702){
this.meta38702 = meta38702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38703,meta38702__$1){
var self__ = this;
var _38703__$1 = this;
return (new malli.registry.t_malli$registry38701(meta38702__$1));
}));

(malli.registry.t_malli$registry38701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38703){
var self__ = this;
var _38703__$1 = this;
return self__.meta38702;
}));

(malli.registry.t_malli$registry38701.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38701.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38701.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38702","meta38702",42956075,null)], null);
}));

(malli.registry.t_malli$registry38701.cljs$lang$type = true);

(malli.registry.t_malli$registry38701.cljs$lang$ctorStr = "malli.registry/t_malli$registry38701");

(malli.registry.t_malli$registry38701.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38701");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38701.
 */
malli.registry.__GT_t_malli$registry38701 = (function malli$registry$__GT_t_malli$registry38701(meta38702){
return (new malli.registry.t_malli$registry38701(meta38702));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38701(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38723 = (function (_QMARK_registries,registries,meta38724){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38724 = meta38724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38725,meta38724__$1){
var self__ = this;
var _38725__$1 = this;
return (new malli.registry.t_malli$registry38723(self__._QMARK_registries,self__.registries,meta38724__$1));
}));

(malli.registry.t_malli$registry38723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38725){
var self__ = this;
var _38725__$1 = this;
return self__.meta38724;
}));

(malli.registry.t_malli$registry38723.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38723.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38721_SHARP_){
return malli.registry._schema(p1__38721_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38723.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38724","meta38724",-978000474,null)], null);
}));

(malli.registry.t_malli$registry38723.cljs$lang$type = true);

(malli.registry.t_malli$registry38723.cljs$lang$ctorStr = "malli.registry/t_malli$registry38723");

(malli.registry.t_malli$registry38723.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38723");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38723.
 */
malli.registry.__GT_t_malli$registry38723 = (function malli$registry$__GT_t_malli$registry38723(_QMARK_registries,registries,meta38724){
return (new malli.registry.t_malli$registry38723(_QMARK_registries,registries,meta38724));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38807 = arguments.length;
var i__5750__auto___38808 = (0);
while(true){
if((i__5750__auto___38808 < len__5749__auto___38807)){
args__5755__auto__.push((arguments[i__5750__auto___38808]));

var G__38809 = (i__5750__auto___38808 + (1));
i__5750__auto___38808 = G__38809;
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
return (new malli.registry.t_malli$registry38723(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38722){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38722));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38740 = (function (db,meta38741){
this.db = db;
this.meta38741 = meta38741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38742,meta38741__$1){
var self__ = this;
var _38742__$1 = this;
return (new malli.registry.t_malli$registry38740(self__.db,meta38741__$1));
}));

(malli.registry.t_malli$registry38740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38742){
var self__ = this;
var _38742__$1 = this;
return self__.meta38741;
}));

(malli.registry.t_malli$registry38740.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38740.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38740.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38741","meta38741",-1189570163,null)], null);
}));

(malli.registry.t_malli$registry38740.cljs$lang$type = true);

(malli.registry.t_malli$registry38740.cljs$lang$ctorStr = "malli.registry/t_malli$registry38740");

(malli.registry.t_malli$registry38740.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38740");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38740.
 */
malli.registry.__GT_t_malli$registry38740 = (function malli$registry$__GT_t_malli$registry38740(db,meta38741){
return (new malli.registry.t_malli$registry38740(db,meta38741));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38740(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38748 = (function (meta38749){
this.meta38749 = meta38749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38750,meta38749__$1){
var self__ = this;
var _38750__$1 = this;
return (new malli.registry.t_malli$registry38748(meta38749__$1));
}));

(malli.registry.t_malli$registry38748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38750){
var self__ = this;
var _38750__$1 = this;
return self__.meta38749;
}));

(malli.registry.t_malli$registry38748.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38748.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry38748.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry38748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38749","meta38749",-269966668,null)], null);
}));

(malli.registry.t_malli$registry38748.cljs$lang$type = true);

(malli.registry.t_malli$registry38748.cljs$lang$ctorStr = "malli.registry/t_malli$registry38748");

(malli.registry.t_malli$registry38748.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38748");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38748.
 */
malli.registry.__GT_t_malli$registry38748 = (function malli$registry$__GT_t_malli$registry38748(meta38749){
return (new malli.registry.t_malli$registry38748(meta38749));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry38748(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38763 = (function (meta38764){
this.meta38764 = meta38764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38765,meta38764__$1){
var self__ = this;
var _38765__$1 = this;
return (new malli.registry.t_malli$registry38763(meta38764__$1));
}));

(malli.registry.t_malli$registry38763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38765){
var self__ = this;
var _38765__$1 = this;
return self__.meta38764;
}));

(malli.registry.t_malli$registry38763.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38763.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry38763.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry38763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38764","meta38764",361808373,null)], null);
}));

(malli.registry.t_malli$registry38763.cljs$lang$type = true);

(malli.registry.t_malli$registry38763.cljs$lang$ctorStr = "malli.registry/t_malli$registry38763");

(malli.registry.t_malli$registry38763.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38763");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38763.
 */
malli.registry.__GT_t_malli$registry38763 = (function malli$registry$__GT_t_malli$registry38763(meta38764){
return (new malli.registry.t_malli$registry38763(meta38764));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry38763(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38773 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta38774){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta38774 = meta38774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38775,meta38774__$1){
var self__ = this;
var _38775__$1 = this;
return (new malli.registry.t_malli$registry38773(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta38774__$1));
}));

(malli.registry.t_malli$registry38773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38775){
var self__ = this;
var _38775__$1 = this;
return self__.meta38774;
}));

(malli.registry.t_malli$registry38773.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38773.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__38795 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__38795.cljs$core$IFn$_invoke$arity$1 ? fexpr__38795.cljs$core$IFn$_invoke$arity$1(name) : fexpr__38795.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__38796 = name;
var G__38797 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__38796,G__38797) : self__.provider.call(null,G__38796,G__38797));
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

(malli.registry.t_malli$registry38773.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry38773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta38774","meta38774",-1153166477,null)], null);
}));

(malli.registry.t_malli$registry38773.cljs$lang$type = true);

(malli.registry.t_malli$registry38773.cljs$lang$ctorStr = "malli.registry/t_malli$registry38773");

(malli.registry.t_malli$registry38773.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38773");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38773.
 */
malli.registry.__GT_t_malli$registry38773 = (function malli$registry$__GT_t_malli$registry38773(default_registry,provider,cache_STAR_,registry_STAR_,meta38774){
return (new malli.registry.t_malli$registry38773(default_registry,provider,cache_STAR_,registry_STAR_,meta38774));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry38773(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
