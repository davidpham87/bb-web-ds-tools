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

var malli$registry$Registry$_schema$dyn_45260 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45260(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45262 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45262(this$);
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
malli.registry.t_malli$registry45129 = (function (m,fm,meta45130){
this.m = m;
this.fm = fm;
this.meta45130 = meta45130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45131,meta45130__$1){
var self__ = this;
var _45131__$1 = this;
return (new malli.registry.t_malli$registry45129(self__.m,self__.fm,meta45130__$1));
}));

(malli.registry.t_malli$registry45129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45131){
var self__ = this;
var _45131__$1 = this;
return self__.meta45130;
}));

(malli.registry.t_malli$registry45129.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45129.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45129.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45130","meta45130",596833093,null)], null);
}));

(malli.registry.t_malli$registry45129.cljs$lang$type = true);

(malli.registry.t_malli$registry45129.cljs$lang$ctorStr = "malli.registry/t_malli$registry45129");

(malli.registry.t_malli$registry45129.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45129");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45129.
 */
malli.registry.__GT_t_malli$registry45129 = (function malli$registry$__GT_t_malli$registry45129(m,fm,meta45130){
return (new malli.registry.t_malli$registry45129(m,fm,meta45130));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45129(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45141 = (function (m,meta45142){
this.m = m;
this.meta45142 = meta45142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45143,meta45142__$1){
var self__ = this;
var _45143__$1 = this;
return (new malli.registry.t_malli$registry45141(self__.m,meta45142__$1));
}));

(malli.registry.t_malli$registry45141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45143){
var self__ = this;
var _45143__$1 = this;
return self__.meta45142;
}));

(malli.registry.t_malli$registry45141.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45141.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45141.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45142","meta45142",-1155058999,null)], null);
}));

(malli.registry.t_malli$registry45141.cljs$lang$type = true);

(malli.registry.t_malli$registry45141.cljs$lang$ctorStr = "malli.registry/t_malli$registry45141");

(malli.registry.t_malli$registry45141.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45141");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45141.
 */
malli.registry.__GT_t_malli$registry45141 = (function malli$registry$__GT_t_malli$registry45141(m,meta45142){
return (new malli.registry.t_malli$registry45141(m,meta45142));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45141(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45162 = (function (meta45163){
this.meta45163 = meta45163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45164,meta45163__$1){
var self__ = this;
var _45164__$1 = this;
return (new malli.registry.t_malli$registry45162(meta45163__$1));
}));

(malli.registry.t_malli$registry45162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45164){
var self__ = this;
var _45164__$1 = this;
return self__.meta45163;
}));

(malli.registry.t_malli$registry45162.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45162.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45162.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45163","meta45163",991019081,null)], null);
}));

(malli.registry.t_malli$registry45162.cljs$lang$type = true);

(malli.registry.t_malli$registry45162.cljs$lang$ctorStr = "malli.registry/t_malli$registry45162");

(malli.registry.t_malli$registry45162.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45162");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45162.
 */
malli.registry.__GT_t_malli$registry45162 = (function malli$registry$__GT_t_malli$registry45162(meta45163){
return (new malli.registry.t_malli$registry45162(meta45163));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45162(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45167 = (function (_QMARK_registries,registries,meta45168){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45168 = meta45168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45169,meta45168__$1){
var self__ = this;
var _45169__$1 = this;
return (new malli.registry.t_malli$registry45167(self__._QMARK_registries,self__.registries,meta45168__$1));
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
return cljs.core.some((function (p1__45165_SHARP_){
return malli.registry._schema(p1__45165_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45167.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45168","meta45168",347409220,null)], null);
}));

(malli.registry.t_malli$registry45167.cljs$lang$type = true);

(malli.registry.t_malli$registry45167.cljs$lang$ctorStr = "malli.registry/t_malli$registry45167");

(malli.registry.t_malli$registry45167.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45167");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45167.
 */
malli.registry.__GT_t_malli$registry45167 = (function malli$registry$__GT_t_malli$registry45167(_QMARK_registries,registries,meta45168){
return (new malli.registry.t_malli$registry45167(_QMARK_registries,registries,meta45168));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45279 = arguments.length;
var i__5750__auto___45280 = (0);
while(true){
if((i__5750__auto___45280 < len__5749__auto___45279)){
args__5755__auto__.push((arguments[i__5750__auto___45280]));

var G__45281 = (i__5750__auto___45280 + (1));
i__5750__auto___45280 = G__45281;
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
return (new malli.registry.t_malli$registry45167(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45166){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45166));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45182 = (function (db,meta45183){
this.db = db;
this.meta45183 = meta45183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45184,meta45183__$1){
var self__ = this;
var _45184__$1 = this;
return (new malli.registry.t_malli$registry45182(self__.db,meta45183__$1));
}));

(malli.registry.t_malli$registry45182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45184){
var self__ = this;
var _45184__$1 = this;
return self__.meta45183;
}));

(malli.registry.t_malli$registry45182.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45182.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45182.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45183","meta45183",-1662055727,null)], null);
}));

(malli.registry.t_malli$registry45182.cljs$lang$type = true);

(malli.registry.t_malli$registry45182.cljs$lang$ctorStr = "malli.registry/t_malli$registry45182");

(malli.registry.t_malli$registry45182.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45182");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45182.
 */
malli.registry.__GT_t_malli$registry45182 = (function malli$registry$__GT_t_malli$registry45182(db,meta45183){
return (new malli.registry.t_malli$registry45182(db,meta45183));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45182(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45208 = (function (meta45209){
this.meta45209 = meta45209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45210,meta45209__$1){
var self__ = this;
var _45210__$1 = this;
return (new malli.registry.t_malli$registry45208(meta45209__$1));
}));

(malli.registry.t_malli$registry45208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45210){
var self__ = this;
var _45210__$1 = this;
return self__.meta45209;
}));

(malli.registry.t_malli$registry45208.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45208.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45208.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45209","meta45209",1436206727,null)], null);
}));

(malli.registry.t_malli$registry45208.cljs$lang$type = true);

(malli.registry.t_malli$registry45208.cljs$lang$ctorStr = "malli.registry/t_malli$registry45208");

(malli.registry.t_malli$registry45208.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45208");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45208.
 */
malli.registry.__GT_t_malli$registry45208 = (function malli$registry$__GT_t_malli$registry45208(meta45209){
return (new malli.registry.t_malli$registry45208(meta45209));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45208(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45217 = (function (meta45218){
this.meta45218 = meta45218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45219,meta45218__$1){
var self__ = this;
var _45219__$1 = this;
return (new malli.registry.t_malli$registry45217(meta45218__$1));
}));

(malli.registry.t_malli$registry45217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45219){
var self__ = this;
var _45219__$1 = this;
return self__.meta45218;
}));

(malli.registry.t_malli$registry45217.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45217.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45217.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45218","meta45218",-236284373,null)], null);
}));

(malli.registry.t_malli$registry45217.cljs$lang$type = true);

(malli.registry.t_malli$registry45217.cljs$lang$ctorStr = "malli.registry/t_malli$registry45217");

(malli.registry.t_malli$registry45217.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45217");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45217.
 */
malli.registry.__GT_t_malli$registry45217 = (function malli$registry$__GT_t_malli$registry45217(meta45218){
return (new malli.registry.t_malli$registry45217(meta45218));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45217(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45227 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45228){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45228 = meta45228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45229,meta45228__$1){
var self__ = this;
var _45229__$1 = this;
return (new malli.registry.t_malli$registry45227(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45228__$1));
}));

(malli.registry.t_malli$registry45227.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45229){
var self__ = this;
var _45229__$1 = this;
return self__.meta45228;
}));

(malli.registry.t_malli$registry45227.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45227.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45230 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45230.cljs$core$IFn$_invoke$arity$1 ? fexpr__45230.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45230.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45232 = name;
var G__45233 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45232,G__45233) : self__.provider.call(null,G__45232,G__45233));
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

(malli.registry.t_malli$registry45227.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45227.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45228","meta45228",-1259681023,null)], null);
}));

(malli.registry.t_malli$registry45227.cljs$lang$type = true);

(malli.registry.t_malli$registry45227.cljs$lang$ctorStr = "malli.registry/t_malli$registry45227");

(malli.registry.t_malli$registry45227.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45227");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45227.
 */
malli.registry.__GT_t_malli$registry45227 = (function malli$registry$__GT_t_malli$registry45227(default_registry,provider,cache_STAR_,registry_STAR_,meta45228){
return (new malli.registry.t_malli$registry45227(default_registry,provider,cache_STAR_,registry_STAR_,meta45228));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45227(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
