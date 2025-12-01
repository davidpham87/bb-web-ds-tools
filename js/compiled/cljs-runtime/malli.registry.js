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

var malli$registry$Registry$_schema$dyn_38940 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_38940(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_38941 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_38941(this$);
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
malli.registry.t_malli$registry38897 = (function (m,fm,meta38898){
this.m = m;
this.fm = fm;
this.meta38898 = meta38898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38899,meta38898__$1){
var self__ = this;
var _38899__$1 = this;
return (new malli.registry.t_malli$registry38897(self__.m,self__.fm,meta38898__$1));
}));

(malli.registry.t_malli$registry38897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38899){
var self__ = this;
var _38899__$1 = this;
return self__.meta38898;
}));

(malli.registry.t_malli$registry38897.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38897.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38897.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38898","meta38898",-673426161,null)], null);
}));

(malli.registry.t_malli$registry38897.cljs$lang$type = true);

(malli.registry.t_malli$registry38897.cljs$lang$ctorStr = "malli.registry/t_malli$registry38897");

(malli.registry.t_malli$registry38897.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38897");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38897.
 */
malli.registry.__GT_t_malli$registry38897 = (function malli$registry$__GT_t_malli$registry38897(m,fm,meta38898){
return (new malli.registry.t_malli$registry38897(m,fm,meta38898));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38897(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38903 = (function (m,meta38904){
this.m = m;
this.meta38904 = meta38904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38905,meta38904__$1){
var self__ = this;
var _38905__$1 = this;
return (new malli.registry.t_malli$registry38903(self__.m,meta38904__$1));
}));

(malli.registry.t_malli$registry38903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38905){
var self__ = this;
var _38905__$1 = this;
return self__.meta38904;
}));

(malli.registry.t_malli$registry38903.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38903.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38903.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38904","meta38904",-763995731,null)], null);
}));

(malli.registry.t_malli$registry38903.cljs$lang$type = true);

(malli.registry.t_malli$registry38903.cljs$lang$ctorStr = "malli.registry/t_malli$registry38903");

(malli.registry.t_malli$registry38903.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38903");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38903.
 */
malli.registry.__GT_t_malli$registry38903 = (function malli$registry$__GT_t_malli$registry38903(m,meta38904){
return (new malli.registry.t_malli$registry38903(m,meta38904));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38903(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38907 = (function (meta38908){
this.meta38908 = meta38908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38909,meta38908__$1){
var self__ = this;
var _38909__$1 = this;
return (new malli.registry.t_malli$registry38907(meta38908__$1));
}));

(malli.registry.t_malli$registry38907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38909){
var self__ = this;
var _38909__$1 = this;
return self__.meta38908;
}));

(malli.registry.t_malli$registry38907.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38907.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38907.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38908","meta38908",-1832280931,null)], null);
}));

(malli.registry.t_malli$registry38907.cljs$lang$type = true);

(malli.registry.t_malli$registry38907.cljs$lang$ctorStr = "malli.registry/t_malli$registry38907");

(malli.registry.t_malli$registry38907.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38907");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38907.
 */
malli.registry.__GT_t_malli$registry38907 = (function malli$registry$__GT_t_malli$registry38907(meta38908){
return (new malli.registry.t_malli$registry38907(meta38908));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38907(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38914 = (function (_QMARK_registries,registries,meta38915){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38915 = meta38915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38916,meta38915__$1){
var self__ = this;
var _38916__$1 = this;
return (new malli.registry.t_malli$registry38914(self__._QMARK_registries,self__.registries,meta38915__$1));
}));

(malli.registry.t_malli$registry38914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38916){
var self__ = this;
var _38916__$1 = this;
return self__.meta38915;
}));

(malli.registry.t_malli$registry38914.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38914.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38910_SHARP_){
return malli.registry._schema(p1__38910_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38914.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38915","meta38915",354631939,null)], null);
}));

(malli.registry.t_malli$registry38914.cljs$lang$type = true);

(malli.registry.t_malli$registry38914.cljs$lang$ctorStr = "malli.registry/t_malli$registry38914");

(malli.registry.t_malli$registry38914.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38914");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38914.
 */
malli.registry.__GT_t_malli$registry38914 = (function malli$registry$__GT_t_malli$registry38914(_QMARK_registries,registries,meta38915){
return (new malli.registry.t_malli$registry38914(_QMARK_registries,registries,meta38915));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38942 = arguments.length;
var i__5750__auto___38943 = (0);
while(true){
if((i__5750__auto___38943 < len__5749__auto___38942)){
args__5755__auto__.push((arguments[i__5750__auto___38943]));

var G__38944 = (i__5750__auto___38943 + (1));
i__5750__auto___38943 = G__38944;
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
return (new malli.registry.t_malli$registry38914(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38911){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38911));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38917 = (function (db,meta38918){
this.db = db;
this.meta38918 = meta38918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38919,meta38918__$1){
var self__ = this;
var _38919__$1 = this;
return (new malli.registry.t_malli$registry38917(self__.db,meta38918__$1));
}));

(malli.registry.t_malli$registry38917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38919){
var self__ = this;
var _38919__$1 = this;
return self__.meta38918;
}));

(malli.registry.t_malli$registry38917.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38917.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38917.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38918","meta38918",400463833,null)], null);
}));

(malli.registry.t_malli$registry38917.cljs$lang$type = true);

(malli.registry.t_malli$registry38917.cljs$lang$ctorStr = "malli.registry/t_malli$registry38917");

(malli.registry.t_malli$registry38917.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38917");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38917.
 */
malli.registry.__GT_t_malli$registry38917 = (function malli$registry$__GT_t_malli$registry38917(db,meta38918){
return (new malli.registry.t_malli$registry38917(db,meta38918));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38917(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38926 = (function (meta38927){
this.meta38927 = meta38927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38928,meta38927__$1){
var self__ = this;
var _38928__$1 = this;
return (new malli.registry.t_malli$registry38926(meta38927__$1));
}));

(malli.registry.t_malli$registry38926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38928){
var self__ = this;
var _38928__$1 = this;
return self__.meta38927;
}));

(malli.registry.t_malli$registry38926.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38926.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry38926.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry38926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38927","meta38927",-493981882,null)], null);
}));

(malli.registry.t_malli$registry38926.cljs$lang$type = true);

(malli.registry.t_malli$registry38926.cljs$lang$ctorStr = "malli.registry/t_malli$registry38926");

(malli.registry.t_malli$registry38926.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38926");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38926.
 */
malli.registry.__GT_t_malli$registry38926 = (function malli$registry$__GT_t_malli$registry38926(meta38927){
return (new malli.registry.t_malli$registry38926(meta38927));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry38926(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38930 = (function (meta38931){
this.meta38931 = meta38931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38932,meta38931__$1){
var self__ = this;
var _38932__$1 = this;
return (new malli.registry.t_malli$registry38930(meta38931__$1));
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
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry38930.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry38930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38931","meta38931",1033026857,null)], null);
}));

(malli.registry.t_malli$registry38930.cljs$lang$type = true);

(malli.registry.t_malli$registry38930.cljs$lang$ctorStr = "malli.registry/t_malli$registry38930");

(malli.registry.t_malli$registry38930.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38930");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38930.
 */
malli.registry.__GT_t_malli$registry38930 = (function malli$registry$__GT_t_malli$registry38930(meta38931){
return (new malli.registry.t_malli$registry38930(meta38931));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry38930(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38933 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta38934){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta38934 = meta38934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38935,meta38934__$1){
var self__ = this;
var _38935__$1 = this;
return (new malli.registry.t_malli$registry38933(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta38934__$1));
}));

(malli.registry.t_malli$registry38933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38935){
var self__ = this;
var _38935__$1 = this;
return self__.meta38934;
}));

(malli.registry.t_malli$registry38933.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38933.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__38936 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__38936.cljs$core$IFn$_invoke$arity$1 ? fexpr__38936.cljs$core$IFn$_invoke$arity$1(name) : fexpr__38936.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__38937 = name;
var G__38938 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__38937,G__38938) : self__.provider.call(null,G__38937,G__38938));
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

(malli.registry.t_malli$registry38933.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry38933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta38934","meta38934",569997856,null)], null);
}));

(malli.registry.t_malli$registry38933.cljs$lang$type = true);

(malli.registry.t_malli$registry38933.cljs$lang$ctorStr = "malli.registry/t_malli$registry38933");

(malli.registry.t_malli$registry38933.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38933");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38933.
 */
malli.registry.__GT_t_malli$registry38933 = (function malli$registry$__GT_t_malli$registry38933(default_registry,provider,cache_STAR_,registry_STAR_,meta38934){
return (new malli.registry.t_malli$registry38933(default_registry,provider,cache_STAR_,registry_STAR_,meta38934));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry38933(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
