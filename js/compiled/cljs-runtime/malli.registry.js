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

var malli$registry$Registry$_schema$dyn_39030 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_39030(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_39031 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_39031(this$);
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
malli.registry.t_malli$registry38915 = (function (m,fm,meta38916){
this.m = m;
this.fm = fm;
this.meta38916 = meta38916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38917,meta38916__$1){
var self__ = this;
var _38917__$1 = this;
return (new malli.registry.t_malli$registry38915(self__.m,self__.fm,meta38916__$1));
}));

(malli.registry.t_malli$registry38915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38917){
var self__ = this;
var _38917__$1 = this;
return self__.meta38916;
}));

(malli.registry.t_malli$registry38915.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38915.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38915.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38916","meta38916",-1859194314,null)], null);
}));

(malli.registry.t_malli$registry38915.cljs$lang$type = true);

(malli.registry.t_malli$registry38915.cljs$lang$ctorStr = "malli.registry/t_malli$registry38915");

(malli.registry.t_malli$registry38915.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38915");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38915.
 */
malli.registry.__GT_t_malli$registry38915 = (function malli$registry$__GT_t_malli$registry38915(m,fm,meta38916){
return (new malli.registry.t_malli$registry38915(m,fm,meta38916));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38915(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38930 = (function (m,meta38931){
this.m = m;
this.meta38931 = meta38931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38932,meta38931__$1){
var self__ = this;
var _38932__$1 = this;
return (new malli.registry.t_malli$registry38930(self__.m,meta38931__$1));
}));

(malli.registry.t_malli$registry38930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38932){
var self__ = this;
var _38932__$1 = this;
return self__.meta38931;
}));

(malli.registry.t_malli$registry38930.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38930.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38930.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38931","meta38931",1033026857,null)], null);
}));

(malli.registry.t_malli$registry38930.cljs$lang$type = true);

(malli.registry.t_malli$registry38930.cljs$lang$ctorStr = "malli.registry/t_malli$registry38930");

(malli.registry.t_malli$registry38930.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38930");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38930.
 */
malli.registry.__GT_t_malli$registry38930 = (function malli$registry$__GT_t_malli$registry38930(m,meta38931){
return (new malli.registry.t_malli$registry38930(m,meta38931));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38930(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38940 = (function (meta38941){
this.meta38941 = meta38941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38942,meta38941__$1){
var self__ = this;
var _38942__$1 = this;
return (new malli.registry.t_malli$registry38940(meta38941__$1));
}));

(malli.registry.t_malli$registry38940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38942){
var self__ = this;
var _38942__$1 = this;
return self__.meta38941;
}));

(malli.registry.t_malli$registry38940.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38940.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38940.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38940.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38941","meta38941",-799080552,null)], null);
}));

(malli.registry.t_malli$registry38940.cljs$lang$type = true);

(malli.registry.t_malli$registry38940.cljs$lang$ctorStr = "malli.registry/t_malli$registry38940");

(malli.registry.t_malli$registry38940.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38940");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38940.
 */
malli.registry.__GT_t_malli$registry38940 = (function malli$registry$__GT_t_malli$registry38940(meta38941){
return (new malli.registry.t_malli$registry38940(meta38941));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38940(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38967 = (function (_QMARK_registries,registries,meta38968){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38968 = meta38968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38969,meta38968__$1){
var self__ = this;
var _38969__$1 = this;
return (new malli.registry.t_malli$registry38967(self__._QMARK_registries,self__.registries,meta38968__$1));
}));

(malli.registry.t_malli$registry38967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38969){
var self__ = this;
var _38969__$1 = this;
return self__.meta38968;
}));

(malli.registry.t_malli$registry38967.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38967.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38947_SHARP_){
return malli.registry._schema(p1__38947_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38967.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38968","meta38968",-1027262243,null)], null);
}));

(malli.registry.t_malli$registry38967.cljs$lang$type = true);

(malli.registry.t_malli$registry38967.cljs$lang$ctorStr = "malli.registry/t_malli$registry38967");

(malli.registry.t_malli$registry38967.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38967");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38967.
 */
malli.registry.__GT_t_malli$registry38967 = (function malli$registry$__GT_t_malli$registry38967(_QMARK_registries,registries,meta38968){
return (new malli.registry.t_malli$registry38967(_QMARK_registries,registries,meta38968));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39041 = arguments.length;
var i__5750__auto___39042 = (0);
while(true){
if((i__5750__auto___39042 < len__5749__auto___39041)){
args__5755__auto__.push((arguments[i__5750__auto___39042]));

var G__39043 = (i__5750__auto___39042 + (1));
i__5750__auto___39042 = G__39043;
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
return (new malli.registry.t_malli$registry38967(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38948){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38948));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38977 = (function (db,meta38978){
this.db = db;
this.meta38978 = meta38978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38979,meta38978__$1){
var self__ = this;
var _38979__$1 = this;
return (new malli.registry.t_malli$registry38977(self__.db,meta38978__$1));
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
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38977.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38978","meta38978",-1247064170,null)], null);
}));

(malli.registry.t_malli$registry38977.cljs$lang$type = true);

(malli.registry.t_malli$registry38977.cljs$lang$ctorStr = "malli.registry/t_malli$registry38977");

(malli.registry.t_malli$registry38977.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38977");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38977.
 */
malli.registry.__GT_t_malli$registry38977 = (function malli$registry$__GT_t_malli$registry38977(db,meta38978){
return (new malli.registry.t_malli$registry38977(db,meta38978));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38977(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38989 = (function (meta38990){
this.meta38990 = meta38990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38991,meta38990__$1){
var self__ = this;
var _38991__$1 = this;
return (new malli.registry.t_malli$registry38989(meta38990__$1));
}));

(malli.registry.t_malli$registry38989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38991){
var self__ = this;
var _38991__$1 = this;
return self__.meta38990;
}));

(malli.registry.t_malli$registry38989.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38989.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry38989.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry38989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38990","meta38990",-211240618,null)], null);
}));

(malli.registry.t_malli$registry38989.cljs$lang$type = true);

(malli.registry.t_malli$registry38989.cljs$lang$ctorStr = "malli.registry/t_malli$registry38989");

(malli.registry.t_malli$registry38989.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38989");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38989.
 */
malli.registry.__GT_t_malli$registry38989 = (function malli$registry$__GT_t_malli$registry38989(meta38990){
return (new malli.registry.t_malli$registry38989(meta38990));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry38989(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38995 = (function (meta38996){
this.meta38996 = meta38996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38997,meta38996__$1){
var self__ = this;
var _38997__$1 = this;
return (new malli.registry.t_malli$registry38995(meta38996__$1));
}));

(malli.registry.t_malli$registry38995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38997){
var self__ = this;
var _38997__$1 = this;
return self__.meta38996;
}));

(malli.registry.t_malli$registry38995.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38995.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry38995.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry38995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38996","meta38996",-573329571,null)], null);
}));

(malli.registry.t_malli$registry38995.cljs$lang$type = true);

(malli.registry.t_malli$registry38995.cljs$lang$ctorStr = "malli.registry/t_malli$registry38995");

(malli.registry.t_malli$registry38995.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38995");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38995.
 */
malli.registry.__GT_t_malli$registry38995 = (function malli$registry$__GT_t_malli$registry38995(meta38996){
return (new malli.registry.t_malli$registry38995(meta38996));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry38995(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry39003 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta39004){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta39004 = meta39004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry39003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39005,meta39004__$1){
var self__ = this;
var _39005__$1 = this;
return (new malli.registry.t_malli$registry39003(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta39004__$1));
}));

(malli.registry.t_malli$registry39003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39005){
var self__ = this;
var _39005__$1 = this;
return self__.meta39004;
}));

(malli.registry.t_malli$registry39003.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry39003.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__39011 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__39011.cljs$core$IFn$_invoke$arity$1 ? fexpr__39011.cljs$core$IFn$_invoke$arity$1(name) : fexpr__39011.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__39012 = name;
var G__39013 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__39012,G__39013) : self__.provider.call(null,G__39012,G__39013));
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

(malli.registry.t_malli$registry39003.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry39003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta39004","meta39004",1853780362,null)], null);
}));

(malli.registry.t_malli$registry39003.cljs$lang$type = true);

(malli.registry.t_malli$registry39003.cljs$lang$ctorStr = "malli.registry/t_malli$registry39003");

(malli.registry.t_malli$registry39003.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry39003");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry39003.
 */
malli.registry.__GT_t_malli$registry39003 = (function malli$registry$__GT_t_malli$registry39003(default_registry,provider,cache_STAR_,registry_STAR_,meta39004){
return (new malli.registry.t_malli$registry39003(default_registry,provider,cache_STAR_,registry_STAR_,meta39004));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry39003(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
