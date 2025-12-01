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

var malli$registry$Registry$_schema$dyn_38959 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_38959(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_38960 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_38960(this$);
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
malli.registry.t_malli$registry38910 = (function (m,fm,meta38911){
this.m = m;
this.fm = fm;
this.meta38911 = meta38911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38912,meta38911__$1){
var self__ = this;
var _38912__$1 = this;
return (new malli.registry.t_malli$registry38910(self__.m,self__.fm,meta38911__$1));
}));

(malli.registry.t_malli$registry38910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38912){
var self__ = this;
var _38912__$1 = this;
return self__.meta38911;
}));

(malli.registry.t_malli$registry38910.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38910.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38910.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38911","meta38911",-1293211896,null)], null);
}));

(malli.registry.t_malli$registry38910.cljs$lang$type = true);

(malli.registry.t_malli$registry38910.cljs$lang$ctorStr = "malli.registry/t_malli$registry38910");

(malli.registry.t_malli$registry38910.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38910");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38910.
 */
malli.registry.__GT_t_malli$registry38910 = (function malli$registry$__GT_t_malli$registry38910(m,fm,meta38911){
return (new malli.registry.t_malli$registry38910(m,fm,meta38911));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38910(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38913 = (function (m,meta38914){
this.m = m;
this.meta38914 = meta38914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38915,meta38914__$1){
var self__ = this;
var _38915__$1 = this;
return (new malli.registry.t_malli$registry38913(self__.m,meta38914__$1));
}));

(malli.registry.t_malli$registry38913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38915){
var self__ = this;
var _38915__$1 = this;
return self__.meta38914;
}));

(malli.registry.t_malli$registry38913.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38913.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38913.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38914","meta38914",-1918265314,null)], null);
}));

(malli.registry.t_malli$registry38913.cljs$lang$type = true);

(malli.registry.t_malli$registry38913.cljs$lang$ctorStr = "malli.registry/t_malli$registry38913");

(malli.registry.t_malli$registry38913.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38913");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38913.
 */
malli.registry.__GT_t_malli$registry38913 = (function malli$registry$__GT_t_malli$registry38913(m,meta38914){
return (new malli.registry.t_malli$registry38913(m,meta38914));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38913(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38924 = (function (meta38925){
this.meta38925 = meta38925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38926,meta38925__$1){
var self__ = this;
var _38926__$1 = this;
return (new malli.registry.t_malli$registry38924(meta38925__$1));
}));

(malli.registry.t_malli$registry38924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38926){
var self__ = this;
var _38926__$1 = this;
return self__.meta38925;
}));

(malli.registry.t_malli$registry38924.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38924.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38924.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38925","meta38925",-291440522,null)], null);
}));

(malli.registry.t_malli$registry38924.cljs$lang$type = true);

(malli.registry.t_malli$registry38924.cljs$lang$ctorStr = "malli.registry/t_malli$registry38924");

(malli.registry.t_malli$registry38924.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38924");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38924.
 */
malli.registry.__GT_t_malli$registry38924 = (function malli$registry$__GT_t_malli$registry38924(meta38925){
return (new malli.registry.t_malli$registry38924(meta38925));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38924(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38934 = (function (_QMARK_registries,registries,meta38935){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38935 = meta38935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38936,meta38935__$1){
var self__ = this;
var _38936__$1 = this;
return (new malli.registry.t_malli$registry38934(self__._QMARK_registries,self__.registries,meta38935__$1));
}));

(malli.registry.t_malli$registry38934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38936){
var self__ = this;
var _38936__$1 = this;
return self__.meta38935;
}));

(malli.registry.t_malli$registry38934.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38934.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38931_SHARP_){
return malli.registry._schema(p1__38931_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38934.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38935","meta38935",-526899037,null)], null);
}));

(malli.registry.t_malli$registry38934.cljs$lang$type = true);

(malli.registry.t_malli$registry38934.cljs$lang$ctorStr = "malli.registry/t_malli$registry38934");

(malli.registry.t_malli$registry38934.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38934");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38934.
 */
malli.registry.__GT_t_malli$registry38934 = (function malli$registry$__GT_t_malli$registry38934(_QMARK_registries,registries,meta38935){
return (new malli.registry.t_malli$registry38934(_QMARK_registries,registries,meta38935));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38961 = arguments.length;
var i__5750__auto___38962 = (0);
while(true){
if((i__5750__auto___38962 < len__5749__auto___38961)){
args__5755__auto__.push((arguments[i__5750__auto___38962]));

var G__38963 = (i__5750__auto___38962 + (1));
i__5750__auto___38962 = G__38963;
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
return (new malli.registry.t_malli$registry38934(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38932){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38932));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38939 = (function (db,meta38940){
this.db = db;
this.meta38940 = meta38940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38941,meta38940__$1){
var self__ = this;
var _38941__$1 = this;
return (new malli.registry.t_malli$registry38939(self__.db,meta38940__$1));
}));

(malli.registry.t_malli$registry38939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38941){
var self__ = this;
var _38941__$1 = this;
return self__.meta38940;
}));

(malli.registry.t_malli$registry38939.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38939.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38939.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38940","meta38940",245202579,null)], null);
}));

(malli.registry.t_malli$registry38939.cljs$lang$type = true);

(malli.registry.t_malli$registry38939.cljs$lang$ctorStr = "malli.registry/t_malli$registry38939");

(malli.registry.t_malli$registry38939.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38939");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38939.
 */
malli.registry.__GT_t_malli$registry38939 = (function malli$registry$__GT_t_malli$registry38939(db,meta38940){
return (new malli.registry.t_malli$registry38939(db,meta38940));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38939(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38945 = (function (meta38946){
this.meta38946 = meta38946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38947,meta38946__$1){
var self__ = this;
var _38947__$1 = this;
return (new malli.registry.t_malli$registry38945(meta38946__$1));
}));

(malli.registry.t_malli$registry38945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38947){
var self__ = this;
var _38947__$1 = this;
return self__.meta38946;
}));

(malli.registry.t_malli$registry38945.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38945.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry38945.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry38945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38946","meta38946",409188664,null)], null);
}));

(malli.registry.t_malli$registry38945.cljs$lang$type = true);

(malli.registry.t_malli$registry38945.cljs$lang$ctorStr = "malli.registry/t_malli$registry38945");

(malli.registry.t_malli$registry38945.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38945");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38945.
 */
malli.registry.__GT_t_malli$registry38945 = (function malli$registry$__GT_t_malli$registry38945(meta38946){
return (new malli.registry.t_malli$registry38945(meta38946));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry38945(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38948 = (function (meta38949){
this.meta38949 = meta38949;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38950,meta38949__$1){
var self__ = this;
var _38950__$1 = this;
return (new malli.registry.t_malli$registry38948(meta38949__$1));
}));

(malli.registry.t_malli$registry38948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38950){
var self__ = this;
var _38950__$1 = this;
return self__.meta38949;
}));

(malli.registry.t_malli$registry38948.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38948.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry38948.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry38948.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38949","meta38949",-1888311264,null)], null);
}));

(malli.registry.t_malli$registry38948.cljs$lang$type = true);

(malli.registry.t_malli$registry38948.cljs$lang$ctorStr = "malli.registry/t_malli$registry38948");

(malli.registry.t_malli$registry38948.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38948");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38948.
 */
malli.registry.__GT_t_malli$registry38948 = (function malli$registry$__GT_t_malli$registry38948(meta38949){
return (new malli.registry.t_malli$registry38948(meta38949));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry38948(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38953 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta38954){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta38954 = meta38954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38955,meta38954__$1){
var self__ = this;
var _38955__$1 = this;
return (new malli.registry.t_malli$registry38953(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta38954__$1));
}));

(malli.registry.t_malli$registry38953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38955){
var self__ = this;
var _38955__$1 = this;
return self__.meta38954;
}));

(malli.registry.t_malli$registry38953.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38953.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__38956 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__38956.cljs$core$IFn$_invoke$arity$1 ? fexpr__38956.cljs$core$IFn$_invoke$arity$1(name) : fexpr__38956.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__38957 = name;
var G__38958 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__38957,G__38958) : self__.provider.call(null,G__38957,G__38958));
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

(malli.registry.t_malli$registry38953.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry38953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta38954","meta38954",2144619329,null)], null);
}));

(malli.registry.t_malli$registry38953.cljs$lang$type = true);

(malli.registry.t_malli$registry38953.cljs$lang$ctorStr = "malli.registry/t_malli$registry38953");

(malli.registry.t_malli$registry38953.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38953");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38953.
 */
malli.registry.__GT_t_malli$registry38953 = (function malli$registry$__GT_t_malli$registry38953(default_registry,provider,cache_STAR_,registry_STAR_,meta38954){
return (new malli.registry.t_malli$registry38953(default_registry,provider,cache_STAR_,registry_STAR_,meta38954));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry38953(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
