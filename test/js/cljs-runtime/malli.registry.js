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

var malli$registry$Registry$_schema$dyn_45244 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45244(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45245 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45245(this$);
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
malli.registry.t_malli$registry45091 = (function (m,fm,meta45092){
this.m = m;
this.fm = fm;
this.meta45092 = meta45092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45093,meta45092__$1){
var self__ = this;
var _45093__$1 = this;
return (new malli.registry.t_malli$registry45091(self__.m,self__.fm,meta45092__$1));
}));

(malli.registry.t_malli$registry45091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45093){
var self__ = this;
var _45093__$1 = this;
return self__.meta45092;
}));

(malli.registry.t_malli$registry45091.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45091.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45091.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45092","meta45092",670134588,null)], null);
}));

(malli.registry.t_malli$registry45091.cljs$lang$type = true);

(malli.registry.t_malli$registry45091.cljs$lang$ctorStr = "malli.registry/t_malli$registry45091");

(malli.registry.t_malli$registry45091.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45091");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45091.
 */
malli.registry.__GT_t_malli$registry45091 = (function malli$registry$__GT_t_malli$registry45091(m,fm,meta45092){
return (new malli.registry.t_malli$registry45091(m,fm,meta45092));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45091(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45101 = (function (m,meta45102){
this.m = m;
this.meta45102 = meta45102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45103,meta45102__$1){
var self__ = this;
var _45103__$1 = this;
return (new malli.registry.t_malli$registry45101(self__.m,meta45102__$1));
}));

(malli.registry.t_malli$registry45101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45103){
var self__ = this;
var _45103__$1 = this;
return self__.meta45102;
}));

(malli.registry.t_malli$registry45101.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45101.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45101.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45102","meta45102",-1031247140,null)], null);
}));

(malli.registry.t_malli$registry45101.cljs$lang$type = true);

(malli.registry.t_malli$registry45101.cljs$lang$ctorStr = "malli.registry/t_malli$registry45101");

(malli.registry.t_malli$registry45101.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45101");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45101.
 */
malli.registry.__GT_t_malli$registry45101 = (function malli$registry$__GT_t_malli$registry45101(m,meta45102){
return (new malli.registry.t_malli$registry45101(m,meta45102));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45101(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45126 = (function (meta45127){
this.meta45127 = meta45127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45128,meta45127__$1){
var self__ = this;
var _45128__$1 = this;
return (new malli.registry.t_malli$registry45126(meta45127__$1));
}));

(malli.registry.t_malli$registry45126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45128){
var self__ = this;
var _45128__$1 = this;
return self__.meta45127;
}));

(malli.registry.t_malli$registry45126.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45126.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45126.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45127","meta45127",1913107229,null)], null);
}));

(malli.registry.t_malli$registry45126.cljs$lang$type = true);

(malli.registry.t_malli$registry45126.cljs$lang$ctorStr = "malli.registry/t_malli$registry45126");

(malli.registry.t_malli$registry45126.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45126");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45126.
 */
malli.registry.__GT_t_malli$registry45126 = (function malli$registry$__GT_t_malli$registry45126(meta45127){
return (new malli.registry.t_malli$registry45126(meta45127));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45126(cljs.core.PersistentArrayMap.EMPTY));
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
return cljs.core.some((function (p1__45150_SHARP_){
return malli.registry._schema(p1__45150_SHARP_,type);
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
var len__5749__auto___45248 = arguments.length;
var i__5750__auto___45249 = (0);
while(true){
if((i__5750__auto___45249 < len__5749__auto___45248)){
args__5755__auto__.push((arguments[i__5750__auto___45249]));

var G__45250 = (i__5750__auto___45249 + (1));
i__5750__auto___45249 = G__45250;
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
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45157){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45157));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45189 = (function (db,meta45190){
this.db = db;
this.meta45190 = meta45190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45191,meta45190__$1){
var self__ = this;
var _45191__$1 = this;
return (new malli.registry.t_malli$registry45189(self__.db,meta45190__$1));
}));

(malli.registry.t_malli$registry45189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45191){
var self__ = this;
var _45191__$1 = this;
return self__.meta45190;
}));

(malli.registry.t_malli$registry45189.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45189.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45189.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45190","meta45190",-1066671645,null)], null);
}));

(malli.registry.t_malli$registry45189.cljs$lang$type = true);

(malli.registry.t_malli$registry45189.cljs$lang$ctorStr = "malli.registry/t_malli$registry45189");

(malli.registry.t_malli$registry45189.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45189");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45189.
 */
malli.registry.__GT_t_malli$registry45189 = (function malli$registry$__GT_t_malli$registry45189(db,meta45190){
return (new malli.registry.t_malli$registry45189(db,meta45190));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45189(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45200 = (function (meta45201){
this.meta45201 = meta45201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45202,meta45201__$1){
var self__ = this;
var _45202__$1 = this;
return (new malli.registry.t_malli$registry45200(meta45201__$1));
}));

(malli.registry.t_malli$registry45200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45202){
var self__ = this;
var _45202__$1 = this;
return self__.meta45201;
}));

(malli.registry.t_malli$registry45200.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45200.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45200.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45201","meta45201",1874919960,null)], null);
}));

(malli.registry.t_malli$registry45200.cljs$lang$type = true);

(malli.registry.t_malli$registry45200.cljs$lang$ctorStr = "malli.registry/t_malli$registry45200");

(malli.registry.t_malli$registry45200.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45200");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45200.
 */
malli.registry.__GT_t_malli$registry45200 = (function malli$registry$__GT_t_malli$registry45200(meta45201){
return (new malli.registry.t_malli$registry45200(meta45201));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45200(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

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
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45208.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
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


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45208(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45224 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45225){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45225 = meta45225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45226,meta45225__$1){
var self__ = this;
var _45226__$1 = this;
return (new malli.registry.t_malli$registry45224(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45225__$1));
}));

(malli.registry.t_malli$registry45224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45226){
var self__ = this;
var _45226__$1 = this;
return self__.meta45225;
}));

(malli.registry.t_malli$registry45224.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45224.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45231 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45231.cljs$core$IFn$_invoke$arity$1 ? fexpr__45231.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45231.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45236 = name;
var G__45237 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45236,G__45237) : self__.provider.call(null,G__45236,G__45237));
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

(malli.registry.t_malli$registry45224.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45225","meta45225",-730052992,null)], null);
}));

(malli.registry.t_malli$registry45224.cljs$lang$type = true);

(malli.registry.t_malli$registry45224.cljs$lang$ctorStr = "malli.registry/t_malli$registry45224");

(malli.registry.t_malli$registry45224.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45224");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45224.
 */
malli.registry.__GT_t_malli$registry45224 = (function malli$registry$__GT_t_malli$registry45224(default_registry,provider,cache_STAR_,registry_STAR_,meta45225){
return (new malli.registry.t_malli$registry45224(default_registry,provider,cache_STAR_,registry_STAR_,meta45225));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45224(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
