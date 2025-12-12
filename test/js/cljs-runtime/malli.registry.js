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

var malli$registry$Registry$_schema$dyn_52497 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_52497(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52503 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_52503(this$);
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
malli.registry.t_malli$registry52273 = (function (m,fm,meta52274){
this.m = m;
this.fm = fm;
this.meta52274 = meta52274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52275,meta52274__$1){
var self__ = this;
var _52275__$1 = this;
return (new malli.registry.t_malli$registry52273(self__.m,self__.fm,meta52274__$1));
}));

(malli.registry.t_malli$registry52273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52275){
var self__ = this;
var _52275__$1 = this;
return self__.meta52274;
}));

(malli.registry.t_malli$registry52273.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52273.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52273.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52274","meta52274",699309230,null)], null);
}));

(malli.registry.t_malli$registry52273.cljs$lang$type = true);

(malli.registry.t_malli$registry52273.cljs$lang$ctorStr = "malli.registry/t_malli$registry52273");

(malli.registry.t_malli$registry52273.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52273");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52273.
 */
malli.registry.__GT_t_malli$registry52273 = (function malli$registry$__GT_t_malli$registry52273(m,fm,meta52274){
return (new malli.registry.t_malli$registry52273(m,fm,meta52274));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry52273(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52302 = (function (m,meta52303){
this.m = m;
this.meta52303 = meta52303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52304,meta52303__$1){
var self__ = this;
var _52304__$1 = this;
return (new malli.registry.t_malli$registry52302(self__.m,meta52303__$1));
}));

(malli.registry.t_malli$registry52302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52304){
var self__ = this;
var _52304__$1 = this;
return self__.meta52303;
}));

(malli.registry.t_malli$registry52302.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52302.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52302.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52302.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52303","meta52303",-1629041498,null)], null);
}));

(malli.registry.t_malli$registry52302.cljs$lang$type = true);

(malli.registry.t_malli$registry52302.cljs$lang$ctorStr = "malli.registry/t_malli$registry52302");

(malli.registry.t_malli$registry52302.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52302");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52302.
 */
malli.registry.__GT_t_malli$registry52302 = (function malli$registry$__GT_t_malli$registry52302(m,meta52303){
return (new malli.registry.t_malli$registry52302(m,meta52303));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry52302(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry52320 = (function (meta52321){
this.meta52321 = meta52321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52322,meta52321__$1){
var self__ = this;
var _52322__$1 = this;
return (new malli.registry.t_malli$registry52320(meta52321__$1));
}));

(malli.registry.t_malli$registry52320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52322){
var self__ = this;
var _52322__$1 = this;
return self__.meta52321;
}));

(malli.registry.t_malli$registry52320.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52320.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52320.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52321","meta52321",752482111,null)], null);
}));

(malli.registry.t_malli$registry52320.cljs$lang$type = true);

(malli.registry.t_malli$registry52320.cljs$lang$ctorStr = "malli.registry/t_malli$registry52320");

(malli.registry.t_malli$registry52320.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52320");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52320.
 */
malli.registry.__GT_t_malli$registry52320 = (function malli$registry$__GT_t_malli$registry52320(meta52321){
return (new malli.registry.t_malli$registry52320(meta52321));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry52320(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52331 = (function (_QMARK_registries,registries,meta52332){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52332 = meta52332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52333,meta52332__$1){
var self__ = this;
var _52333__$1 = this;
return (new malli.registry.t_malli$registry52331(self__._QMARK_registries,self__.registries,meta52332__$1));
}));

(malli.registry.t_malli$registry52331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52333){
var self__ = this;
var _52333__$1 = this;
return self__.meta52332;
}));

(malli.registry.t_malli$registry52331.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52331.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52329_SHARP_){
return malli.registry._schema(p1__52329_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52331.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52332","meta52332",-1355824174,null)], null);
}));

(malli.registry.t_malli$registry52331.cljs$lang$type = true);

(malli.registry.t_malli$registry52331.cljs$lang$ctorStr = "malli.registry/t_malli$registry52331");

(malli.registry.t_malli$registry52331.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52331");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52331.
 */
malli.registry.__GT_t_malli$registry52331 = (function malli$registry$__GT_t_malli$registry52331(_QMARK_registries,registries,meta52332){
return (new malli.registry.t_malli$registry52331(_QMARK_registries,registries,meta52332));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52527 = arguments.length;
var i__5750__auto___52528 = (0);
while(true){
if((i__5750__auto___52528 < len__5749__auto___52527)){
args__5755__auto__.push((arguments[i__5750__auto___52528]));

var G__52529 = (i__5750__auto___52528 + (1));
i__5750__auto___52528 = G__52529;
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
return (new malli.registry.t_malli$registry52331(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52330){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52330));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52346 = (function (db,meta52347){
this.db = db;
this.meta52347 = meta52347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52348,meta52347__$1){
var self__ = this;
var _52348__$1 = this;
return (new malli.registry.t_malli$registry52346(self__.db,meta52347__$1));
}));

(malli.registry.t_malli$registry52346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52348){
var self__ = this;
var _52348__$1 = this;
return self__.meta52347;
}));

(malli.registry.t_malli$registry52346.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52346.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52346.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52347","meta52347",-717155091,null)], null);
}));

(malli.registry.t_malli$registry52346.cljs$lang$type = true);

(malli.registry.t_malli$registry52346.cljs$lang$ctorStr = "malli.registry/t_malli$registry52346");

(malli.registry.t_malli$registry52346.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52346");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52346.
 */
malli.registry.__GT_t_malli$registry52346 = (function malli$registry$__GT_t_malli$registry52346(db,meta52347){
return (new malli.registry.t_malli$registry52346(db,meta52347));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry52346(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52369 = (function (meta52370){
this.meta52370 = meta52370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52371,meta52370__$1){
var self__ = this;
var _52371__$1 = this;
return (new malli.registry.t_malli$registry52369(meta52370__$1));
}));

(malli.registry.t_malli$registry52369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52371){
var self__ = this;
var _52371__$1 = this;
return self__.meta52370;
}));

(malli.registry.t_malli$registry52369.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52369.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry52369.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry52369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52370","meta52370",-240076105,null)], null);
}));

(malli.registry.t_malli$registry52369.cljs$lang$type = true);

(malli.registry.t_malli$registry52369.cljs$lang$ctorStr = "malli.registry/t_malli$registry52369");

(malli.registry.t_malli$registry52369.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52369");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52369.
 */
malli.registry.__GT_t_malli$registry52369 = (function malli$registry$__GT_t_malli$registry52369(meta52370){
return (new malli.registry.t_malli$registry52369(meta52370));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry52369(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52395 = (function (meta52396){
this.meta52396 = meta52396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52397,meta52396__$1){
var self__ = this;
var _52397__$1 = this;
return (new malli.registry.t_malli$registry52395(meta52396__$1));
}));

(malli.registry.t_malli$registry52395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52397){
var self__ = this;
var _52397__$1 = this;
return self__.meta52396;
}));

(malli.registry.t_malli$registry52395.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52395.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52395.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52396","meta52396",224762838,null)], null);
}));

(malli.registry.t_malli$registry52395.cljs$lang$type = true);

(malli.registry.t_malli$registry52395.cljs$lang$ctorStr = "malli.registry/t_malli$registry52395");

(malli.registry.t_malli$registry52395.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52395");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52395.
 */
malli.registry.__GT_t_malli$registry52395 = (function malli$registry$__GT_t_malli$registry52395(meta52396){
return (new malli.registry.t_malli$registry52395(meta52396));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry52395(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52422 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52423){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52423 = meta52423;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52422.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52424,meta52423__$1){
var self__ = this;
var _52424__$1 = this;
return (new malli.registry.t_malli$registry52422(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52423__$1));
}));

(malli.registry.t_malli$registry52422.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52424){
var self__ = this;
var _52424__$1 = this;
return self__.meta52423;
}));

(malli.registry.t_malli$registry52422.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52422.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__52432 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52432.cljs$core$IFn$_invoke$arity$1 ? fexpr__52432.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52432.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__52434 = name;
var G__52435 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52434,G__52435) : self__.provider.call(null,G__52434,G__52435));
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

(malli.registry.t_malli$registry52422.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52422.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52423","meta52423",-352443990,null)], null);
}));

(malli.registry.t_malli$registry52422.cljs$lang$type = true);

(malli.registry.t_malli$registry52422.cljs$lang$ctorStr = "malli.registry/t_malli$registry52422");

(malli.registry.t_malli$registry52422.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52422");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52422.
 */
malli.registry.__GT_t_malli$registry52422 = (function malli$registry$__GT_t_malli$registry52422(default_registry,provider,cache_STAR_,registry_STAR_,meta52423){
return (new malli.registry.t_malli$registry52422(default_registry,provider,cache_STAR_,registry_STAR_,meta52423));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry52422(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
