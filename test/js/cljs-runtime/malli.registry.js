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

var malli$registry$Registry$_schema$dyn_52412 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_52412(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52413 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_52413(this$);
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
malli.registry.t_malli$registry52242 = (function (m,fm,meta52243){
this.m = m;
this.fm = fm;
this.meta52243 = meta52243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52244,meta52243__$1){
var self__ = this;
var _52244__$1 = this;
return (new malli.registry.t_malli$registry52242(self__.m,self__.fm,meta52243__$1));
}));

(malli.registry.t_malli$registry52242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52244){
var self__ = this;
var _52244__$1 = this;
return self__.meta52243;
}));

(malli.registry.t_malli$registry52242.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52242.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52242.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52243","meta52243",112391095,null)], null);
}));

(malli.registry.t_malli$registry52242.cljs$lang$type = true);

(malli.registry.t_malli$registry52242.cljs$lang$ctorStr = "malli.registry/t_malli$registry52242");

(malli.registry.t_malli$registry52242.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52242");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52242.
 */
malli.registry.__GT_t_malli$registry52242 = (function malli$registry$__GT_t_malli$registry52242(m,fm,meta52243){
return (new malli.registry.t_malli$registry52242(m,fm,meta52243));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry52242(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52249 = (function (m,meta52250){
this.m = m;
this.meta52250 = meta52250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52251,meta52250__$1){
var self__ = this;
var _52251__$1 = this;
return (new malli.registry.t_malli$registry52249(self__.m,meta52250__$1));
}));

(malli.registry.t_malli$registry52249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52251){
var self__ = this;
var _52251__$1 = this;
return self__.meta52250;
}));

(malli.registry.t_malli$registry52249.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52249.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52249.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52250","meta52250",-772770238,null)], null);
}));

(malli.registry.t_malli$registry52249.cljs$lang$type = true);

(malli.registry.t_malli$registry52249.cljs$lang$ctorStr = "malli.registry/t_malli$registry52249");

(malli.registry.t_malli$registry52249.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52249");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52249.
 */
malli.registry.__GT_t_malli$registry52249 = (function malli$registry$__GT_t_malli$registry52249(m,meta52250){
return (new malli.registry.t_malli$registry52249(m,meta52250));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry52249(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry52271 = (function (meta52272){
this.meta52272 = meta52272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52273,meta52272__$1){
var self__ = this;
var _52273__$1 = this;
return (new malli.registry.t_malli$registry52271(meta52272__$1));
}));

(malli.registry.t_malli$registry52271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52273){
var self__ = this;
var _52273__$1 = this;
return self__.meta52272;
}));

(malli.registry.t_malli$registry52271.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52271.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52271.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52272","meta52272",-33340193,null)], null);
}));

(malli.registry.t_malli$registry52271.cljs$lang$type = true);

(malli.registry.t_malli$registry52271.cljs$lang$ctorStr = "malli.registry/t_malli$registry52271");

(malli.registry.t_malli$registry52271.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52271");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52271.
 */
malli.registry.__GT_t_malli$registry52271 = (function malli$registry$__GT_t_malli$registry52271(meta52272){
return (new malli.registry.t_malli$registry52271(meta52272));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry52271(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52288 = (function (_QMARK_registries,registries,meta52289){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52289 = meta52289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52290,meta52289__$1){
var self__ = this;
var _52290__$1 = this;
return (new malli.registry.t_malli$registry52288(self__._QMARK_registries,self__.registries,meta52289__$1));
}));

(malli.registry.t_malli$registry52288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52290){
var self__ = this;
var _52290__$1 = this;
return self__.meta52289;
}));

(malli.registry.t_malli$registry52288.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52288.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52286_SHARP_){
return malli.registry._schema(p1__52286_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52288.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52289","meta52289",-533408925,null)], null);
}));

(malli.registry.t_malli$registry52288.cljs$lang$type = true);

(malli.registry.t_malli$registry52288.cljs$lang$ctorStr = "malli.registry/t_malli$registry52288");

(malli.registry.t_malli$registry52288.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52288");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52288.
 */
malli.registry.__GT_t_malli$registry52288 = (function malli$registry$__GT_t_malli$registry52288(_QMARK_registries,registries,meta52289){
return (new malli.registry.t_malli$registry52288(_QMARK_registries,registries,meta52289));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52473 = arguments.length;
var i__5750__auto___52474 = (0);
while(true){
if((i__5750__auto___52474 < len__5749__auto___52473)){
args__5755__auto__.push((arguments[i__5750__auto___52474]));

var G__52475 = (i__5750__auto___52474 + (1));
i__5750__auto___52474 = G__52475;
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
return (new malli.registry.t_malli$registry52288(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52287){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52287));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52300 = (function (db,meta52301){
this.db = db;
this.meta52301 = meta52301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52302,meta52301__$1){
var self__ = this;
var _52302__$1 = this;
return (new malli.registry.t_malli$registry52300(self__.db,meta52301__$1));
}));

(malli.registry.t_malli$registry52300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52302){
var self__ = this;
var _52302__$1 = this;
return self__.meta52301;
}));

(malli.registry.t_malli$registry52300.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52300.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52300.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52301","meta52301",1275069793,null)], null);
}));

(malli.registry.t_malli$registry52300.cljs$lang$type = true);

(malli.registry.t_malli$registry52300.cljs$lang$ctorStr = "malli.registry/t_malli$registry52300");

(malli.registry.t_malli$registry52300.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52300");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52300.
 */
malli.registry.__GT_t_malli$registry52300 = (function malli$registry$__GT_t_malli$registry52300(db,meta52301){
return (new malli.registry.t_malli$registry52300(db,meta52301));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry52300(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52315 = (function (meta52316){
this.meta52316 = meta52316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52317,meta52316__$1){
var self__ = this;
var _52317__$1 = this;
return (new malli.registry.t_malli$registry52315(meta52316__$1));
}));

(malli.registry.t_malli$registry52315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52317){
var self__ = this;
var _52317__$1 = this;
return self__.meta52316;
}));

(malli.registry.t_malli$registry52315.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52315.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry52315.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry52315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52316","meta52316",2036022181,null)], null);
}));

(malli.registry.t_malli$registry52315.cljs$lang$type = true);

(malli.registry.t_malli$registry52315.cljs$lang$ctorStr = "malli.registry/t_malli$registry52315");

(malli.registry.t_malli$registry52315.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52315");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52315.
 */
malli.registry.__GT_t_malli$registry52315 = (function malli$registry$__GT_t_malli$registry52315(meta52316){
return (new malli.registry.t_malli$registry52315(meta52316));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry52315(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52338 = (function (meta52339){
this.meta52339 = meta52339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52340,meta52339__$1){
var self__ = this;
var _52340__$1 = this;
return (new malli.registry.t_malli$registry52338(meta52339__$1));
}));

(malli.registry.t_malli$registry52338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52340){
var self__ = this;
var _52340__$1 = this;
return self__.meta52339;
}));

(malli.registry.t_malli$registry52338.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52338.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52338.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52339","meta52339",805178426,null)], null);
}));

(malli.registry.t_malli$registry52338.cljs$lang$type = true);

(malli.registry.t_malli$registry52338.cljs$lang$ctorStr = "malli.registry/t_malli$registry52338");

(malli.registry.t_malli$registry52338.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52338");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52338.
 */
malli.registry.__GT_t_malli$registry52338 = (function malli$registry$__GT_t_malli$registry52338(meta52339){
return (new malli.registry.t_malli$registry52338(meta52339));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry52338(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52359 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52360){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52360 = meta52360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52361,meta52360__$1){
var self__ = this;
var _52361__$1 = this;
return (new malli.registry.t_malli$registry52359(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52360__$1));
}));

(malli.registry.t_malli$registry52359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52361){
var self__ = this;
var _52361__$1 = this;
return self__.meta52360;
}));

(malli.registry.t_malli$registry52359.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52359.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__52372 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52372.cljs$core$IFn$_invoke$arity$1 ? fexpr__52372.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52372.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__52379 = name;
var G__52380 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52379,G__52380) : self__.provider.call(null,G__52379,G__52380));
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

(malli.registry.t_malli$registry52359.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52360","meta52360",-609920959,null)], null);
}));

(malli.registry.t_malli$registry52359.cljs$lang$type = true);

(malli.registry.t_malli$registry52359.cljs$lang$ctorStr = "malli.registry/t_malli$registry52359");

(malli.registry.t_malli$registry52359.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52359");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52359.
 */
malli.registry.__GT_t_malli$registry52359 = (function malli$registry$__GT_t_malli$registry52359(default_registry,provider,cache_STAR_,registry_STAR_,meta52360){
return (new malli.registry.t_malli$registry52359(default_registry,provider,cache_STAR_,registry_STAR_,meta52360));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry52359(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
