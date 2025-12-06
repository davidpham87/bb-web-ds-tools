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

var malli$registry$Registry$_schema$dyn_45350 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45350(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45351 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45351(this$);
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
malli.registry.t_malli$registry45216 = (function (m,fm,meta45217){
this.m = m;
this.fm = fm;
this.meta45217 = meta45217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45218,meta45217__$1){
var self__ = this;
var _45218__$1 = this;
return (new malli.registry.t_malli$registry45216(self__.m,self__.fm,meta45217__$1));
}));

(malli.registry.t_malli$registry45216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45218){
var self__ = this;
var _45218__$1 = this;
return self__.meta45217;
}));

(malli.registry.t_malli$registry45216.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45216.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45216.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45217","meta45217",1309057,null)], null);
}));

(malli.registry.t_malli$registry45216.cljs$lang$type = true);

(malli.registry.t_malli$registry45216.cljs$lang$ctorStr = "malli.registry/t_malli$registry45216");

(malli.registry.t_malli$registry45216.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45216");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45216.
 */
malli.registry.__GT_t_malli$registry45216 = (function malli$registry$__GT_t_malli$registry45216(m,fm,meta45217){
return (new malli.registry.t_malli$registry45216(m,fm,meta45217));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45216(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45241 = (function (m,meta45242){
this.m = m;
this.meta45242 = meta45242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45243,meta45242__$1){
var self__ = this;
var _45243__$1 = this;
return (new malli.registry.t_malli$registry45241(self__.m,meta45242__$1));
}));

(malli.registry.t_malli$registry45241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45243){
var self__ = this;
var _45243__$1 = this;
return self__.meta45242;
}));

(malli.registry.t_malli$registry45241.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45241.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45241.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45242","meta45242",1384618792,null)], null);
}));

(malli.registry.t_malli$registry45241.cljs$lang$type = true);

(malli.registry.t_malli$registry45241.cljs$lang$ctorStr = "malli.registry/t_malli$registry45241");

(malli.registry.t_malli$registry45241.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45241");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45241.
 */
malli.registry.__GT_t_malli$registry45241 = (function malli$registry$__GT_t_malli$registry45241(m,meta45242){
return (new malli.registry.t_malli$registry45241(m,meta45242));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45241(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45261 = (function (meta45262){
this.meta45262 = meta45262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45263,meta45262__$1){
var self__ = this;
var _45263__$1 = this;
return (new malli.registry.t_malli$registry45261(meta45262__$1));
}));

(malli.registry.t_malli$registry45261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45263){
var self__ = this;
var _45263__$1 = this;
return self__.meta45262;
}));

(malli.registry.t_malli$registry45261.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45261.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45261.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45262","meta45262",-883844471,null)], null);
}));

(malli.registry.t_malli$registry45261.cljs$lang$type = true);

(malli.registry.t_malli$registry45261.cljs$lang$ctorStr = "malli.registry/t_malli$registry45261");

(malli.registry.t_malli$registry45261.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45261");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45261.
 */
malli.registry.__GT_t_malli$registry45261 = (function malli$registry$__GT_t_malli$registry45261(meta45262){
return (new malli.registry.t_malli$registry45261(meta45262));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45261(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45266 = (function (_QMARK_registries,registries,meta45267){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45267 = meta45267;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45268,meta45267__$1){
var self__ = this;
var _45268__$1 = this;
return (new malli.registry.t_malli$registry45266(self__._QMARK_registries,self__.registries,meta45267__$1));
}));

(malli.registry.t_malli$registry45266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45268){
var self__ = this;
var _45268__$1 = this;
return self__.meta45267;
}));

(malli.registry.t_malli$registry45266.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45266.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45264_SHARP_){
return malli.registry._schema(p1__45264_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45266.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45266.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45267","meta45267",1319297182,null)], null);
}));

(malli.registry.t_malli$registry45266.cljs$lang$type = true);

(malli.registry.t_malli$registry45266.cljs$lang$ctorStr = "malli.registry/t_malli$registry45266");

(malli.registry.t_malli$registry45266.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45266");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45266.
 */
malli.registry.__GT_t_malli$registry45266 = (function malli$registry$__GT_t_malli$registry45266(_QMARK_registries,registries,meta45267){
return (new malli.registry.t_malli$registry45266(_QMARK_registries,registries,meta45267));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45376 = arguments.length;
var i__5750__auto___45377 = (0);
while(true){
if((i__5750__auto___45377 < len__5749__auto___45376)){
args__5755__auto__.push((arguments[i__5750__auto___45377]));

var G__45378 = (i__5750__auto___45377 + (1));
i__5750__auto___45377 = G__45378;
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
return (new malli.registry.t_malli$registry45266(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45265){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45265));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45269 = (function (db,meta45270){
this.db = db;
this.meta45270 = meta45270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45271,meta45270__$1){
var self__ = this;
var _45271__$1 = this;
return (new malli.registry.t_malli$registry45269(self__.db,meta45270__$1));
}));

(malli.registry.t_malli$registry45269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45271){
var self__ = this;
var _45271__$1 = this;
return self__.meta45270;
}));

(malli.registry.t_malli$registry45269.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45269.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45269.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45270","meta45270",793200234,null)], null);
}));

(malli.registry.t_malli$registry45269.cljs$lang$type = true);

(malli.registry.t_malli$registry45269.cljs$lang$ctorStr = "malli.registry/t_malli$registry45269");

(malli.registry.t_malli$registry45269.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45269");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45269.
 */
malli.registry.__GT_t_malli$registry45269 = (function malli$registry$__GT_t_malli$registry45269(db,meta45270){
return (new malli.registry.t_malli$registry45269(db,meta45270));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45269(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45286 = (function (meta45287){
this.meta45287 = meta45287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45288,meta45287__$1){
var self__ = this;
var _45288__$1 = this;
return (new malli.registry.t_malli$registry45286(meta45287__$1));
}));

(malli.registry.t_malli$registry45286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45288){
var self__ = this;
var _45288__$1 = this;
return self__.meta45287;
}));

(malli.registry.t_malli$registry45286.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45286.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45286.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45287","meta45287",1551056076,null)], null);
}));

(malli.registry.t_malli$registry45286.cljs$lang$type = true);

(malli.registry.t_malli$registry45286.cljs$lang$ctorStr = "malli.registry/t_malli$registry45286");

(malli.registry.t_malli$registry45286.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45286");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45286.
 */
malli.registry.__GT_t_malli$registry45286 = (function malli$registry$__GT_t_malli$registry45286(meta45287){
return (new malli.registry.t_malli$registry45286(meta45287));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45286(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45291 = (function (meta45292){
this.meta45292 = meta45292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45293,meta45292__$1){
var self__ = this;
var _45293__$1 = this;
return (new malli.registry.t_malli$registry45291(meta45292__$1));
}));

(malli.registry.t_malli$registry45291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45293){
var self__ = this;
var _45293__$1 = this;
return self__.meta45292;
}));

(malli.registry.t_malli$registry45291.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45291.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45291.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45292","meta45292",1360108303,null)], null);
}));

(malli.registry.t_malli$registry45291.cljs$lang$type = true);

(malli.registry.t_malli$registry45291.cljs$lang$ctorStr = "malli.registry/t_malli$registry45291");

(malli.registry.t_malli$registry45291.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45291");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45291.
 */
malli.registry.__GT_t_malli$registry45291 = (function malli$registry$__GT_t_malli$registry45291(meta45292){
return (new malli.registry.t_malli$registry45291(meta45292));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45291(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45327 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45328){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45328 = meta45328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45329,meta45328__$1){
var self__ = this;
var _45329__$1 = this;
return (new malli.registry.t_malli$registry45327(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45328__$1));
}));

(malli.registry.t_malli$registry45327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45329){
var self__ = this;
var _45329__$1 = this;
return self__.meta45328;
}));

(malli.registry.t_malli$registry45327.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45327.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45335 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45335.cljs$core$IFn$_invoke$arity$1 ? fexpr__45335.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45335.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45336 = name;
var G__45337 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45336,G__45337) : self__.provider.call(null,G__45336,G__45337));
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

(malli.registry.t_malli$registry45327.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45328","meta45328",-14478077,null)], null);
}));

(malli.registry.t_malli$registry45327.cljs$lang$type = true);

(malli.registry.t_malli$registry45327.cljs$lang$ctorStr = "malli.registry/t_malli$registry45327");

(malli.registry.t_malli$registry45327.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45327");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45327.
 */
malli.registry.__GT_t_malli$registry45327 = (function malli$registry$__GT_t_malli$registry45327(default_registry,provider,cache_STAR_,registry_STAR_,meta45328){
return (new malli.registry.t_malli$registry45327(default_registry,provider,cache_STAR_,registry_STAR_,meta45328));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45327(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
