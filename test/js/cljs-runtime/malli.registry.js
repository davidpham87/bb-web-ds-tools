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

var malli$registry$Registry$_schema$dyn_52459 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_52459(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52460 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_52460(this$);
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
malli.registry.t_malli$registry52375 = (function (m,fm,meta52376){
this.m = m;
this.fm = fm;
this.meta52376 = meta52376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52377,meta52376__$1){
var self__ = this;
var _52377__$1 = this;
return (new malli.registry.t_malli$registry52375(self__.m,self__.fm,meta52376__$1));
}));

(malli.registry.t_malli$registry52375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52377){
var self__ = this;
var _52377__$1 = this;
return self__.meta52376;
}));

(malli.registry.t_malli$registry52375.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52375.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52375.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52376","meta52376",526082818,null)], null);
}));

(malli.registry.t_malli$registry52375.cljs$lang$type = true);

(malli.registry.t_malli$registry52375.cljs$lang$ctorStr = "malli.registry/t_malli$registry52375");

(malli.registry.t_malli$registry52375.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52375");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52375.
 */
malli.registry.__GT_t_malli$registry52375 = (function malli$registry$__GT_t_malli$registry52375(m,fm,meta52376){
return (new malli.registry.t_malli$registry52375(m,fm,meta52376));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry52375(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52379 = (function (m,meta52380){
this.m = m;
this.meta52380 = meta52380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52381,meta52380__$1){
var self__ = this;
var _52381__$1 = this;
return (new malli.registry.t_malli$registry52379(self__.m,meta52380__$1));
}));

(malli.registry.t_malli$registry52379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52381){
var self__ = this;
var _52381__$1 = this;
return self__.meta52380;
}));

(malli.registry.t_malli$registry52379.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52379.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52379.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52380","meta52380",266937933,null)], null);
}));

(malli.registry.t_malli$registry52379.cljs$lang$type = true);

(malli.registry.t_malli$registry52379.cljs$lang$ctorStr = "malli.registry/t_malli$registry52379");

(malli.registry.t_malli$registry52379.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52379");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52379.
 */
malli.registry.__GT_t_malli$registry52379 = (function malli$registry$__GT_t_malli$registry52379(m,meta52380){
return (new malli.registry.t_malli$registry52379(m,meta52380));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry52379(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry52384 = (function (meta52385){
this.meta52385 = meta52385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52386,meta52385__$1){
var self__ = this;
var _52386__$1 = this;
return (new malli.registry.t_malli$registry52384(meta52385__$1));
}));

(malli.registry.t_malli$registry52384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52386){
var self__ = this;
var _52386__$1 = this;
return self__.meta52385;
}));

(malli.registry.t_malli$registry52384.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52384.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52384.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52385","meta52385",-1579551939,null)], null);
}));

(malli.registry.t_malli$registry52384.cljs$lang$type = true);

(malli.registry.t_malli$registry52384.cljs$lang$ctorStr = "malli.registry/t_malli$registry52384");

(malli.registry.t_malli$registry52384.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52384");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52384.
 */
malli.registry.__GT_t_malli$registry52384 = (function malli$registry$__GT_t_malli$registry52384(meta52385){
return (new malli.registry.t_malli$registry52384(meta52385));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry52384(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52390 = (function (_QMARK_registries,registries,meta52391){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52391 = meta52391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52392,meta52391__$1){
var self__ = this;
var _52392__$1 = this;
return (new malli.registry.t_malli$registry52390(self__._QMARK_registries,self__.registries,meta52391__$1));
}));

(malli.registry.t_malli$registry52390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52392){
var self__ = this;
var _52392__$1 = this;
return self__.meta52391;
}));

(malli.registry.t_malli$registry52390.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52390.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52387_SHARP_){
return malli.registry._schema(p1__52387_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52390.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52391","meta52391",-1315160617,null)], null);
}));

(malli.registry.t_malli$registry52390.cljs$lang$type = true);

(malli.registry.t_malli$registry52390.cljs$lang$ctorStr = "malli.registry/t_malli$registry52390");

(malli.registry.t_malli$registry52390.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52390");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52390.
 */
malli.registry.__GT_t_malli$registry52390 = (function malli$registry$__GT_t_malli$registry52390(_QMARK_registries,registries,meta52391){
return (new malli.registry.t_malli$registry52390(_QMARK_registries,registries,meta52391));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52472 = arguments.length;
var i__5750__auto___52473 = (0);
while(true){
if((i__5750__auto___52473 < len__5749__auto___52472)){
args__5755__auto__.push((arguments[i__5750__auto___52473]));

var G__52474 = (i__5750__auto___52473 + (1));
i__5750__auto___52473 = G__52474;
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
return (new malli.registry.t_malli$registry52390(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52388){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52388));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52394 = (function (db,meta52395){
this.db = db;
this.meta52395 = meta52395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52396,meta52395__$1){
var self__ = this;
var _52396__$1 = this;
return (new malli.registry.t_malli$registry52394(self__.db,meta52395__$1));
}));

(malli.registry.t_malli$registry52394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52396){
var self__ = this;
var _52396__$1 = this;
return self__.meta52395;
}));

(malli.registry.t_malli$registry52394.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52394.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52394.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52395","meta52395",-93944122,null)], null);
}));

(malli.registry.t_malli$registry52394.cljs$lang$type = true);

(malli.registry.t_malli$registry52394.cljs$lang$ctorStr = "malli.registry/t_malli$registry52394");

(malli.registry.t_malli$registry52394.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52394");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52394.
 */
malli.registry.__GT_t_malli$registry52394 = (function malli$registry$__GT_t_malli$registry52394(db,meta52395){
return (new malli.registry.t_malli$registry52394(db,meta52395));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry52394(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52407 = (function (meta52408){
this.meta52408 = meta52408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52409,meta52408__$1){
var self__ = this;
var _52409__$1 = this;
return (new malli.registry.t_malli$registry52407(meta52408__$1));
}));

(malli.registry.t_malli$registry52407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52409){
var self__ = this;
var _52409__$1 = this;
return self__.meta52408;
}));

(malli.registry.t_malli$registry52407.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52407.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry52407.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry52407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52408","meta52408",800467964,null)], null);
}));

(malli.registry.t_malli$registry52407.cljs$lang$type = true);

(malli.registry.t_malli$registry52407.cljs$lang$ctorStr = "malli.registry/t_malli$registry52407");

(malli.registry.t_malli$registry52407.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52407");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52407.
 */
malli.registry.__GT_t_malli$registry52407 = (function malli$registry$__GT_t_malli$registry52407(meta52408){
return (new malli.registry.t_malli$registry52407(meta52408));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry52407(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52415 = (function (meta52416){
this.meta52416 = meta52416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52417,meta52416__$1){
var self__ = this;
var _52417__$1 = this;
return (new malli.registry.t_malli$registry52415(meta52416__$1));
}));

(malli.registry.t_malli$registry52415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52417){
var self__ = this;
var _52417__$1 = this;
return self__.meta52416;
}));

(malli.registry.t_malli$registry52415.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52415.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52415.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52416","meta52416",1119540629,null)], null);
}));

(malli.registry.t_malli$registry52415.cljs$lang$type = true);

(malli.registry.t_malli$registry52415.cljs$lang$ctorStr = "malli.registry/t_malli$registry52415");

(malli.registry.t_malli$registry52415.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52415");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52415.
 */
malli.registry.__GT_t_malli$registry52415 = (function malli$registry$__GT_t_malli$registry52415(meta52416){
return (new malli.registry.t_malli$registry52415(meta52416));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry52415(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52423 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52424){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52424 = meta52424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52425,meta52424__$1){
var self__ = this;
var _52425__$1 = this;
return (new malli.registry.t_malli$registry52423(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52424__$1));
}));

(malli.registry.t_malli$registry52423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52425){
var self__ = this;
var _52425__$1 = this;
return self__.meta52424;
}));

(malli.registry.t_malli$registry52423.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52423.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__52426 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52426.cljs$core$IFn$_invoke$arity$1 ? fexpr__52426.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52426.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__52427 = name;
var G__52428 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52427,G__52428) : self__.provider.call(null,G__52427,G__52428));
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

(malli.registry.t_malli$registry52423.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52424","meta52424",-1326526813,null)], null);
}));

(malli.registry.t_malli$registry52423.cljs$lang$type = true);

(malli.registry.t_malli$registry52423.cljs$lang$ctorStr = "malli.registry/t_malli$registry52423");

(malli.registry.t_malli$registry52423.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52423");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52423.
 */
malli.registry.__GT_t_malli$registry52423 = (function malli$registry$__GT_t_malli$registry52423(default_registry,provider,cache_STAR_,registry_STAR_,meta52424){
return (new malli.registry.t_malli$registry52423(default_registry,provider,cache_STAR_,registry_STAR_,meta52424));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry52423(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
