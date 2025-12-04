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

var malli$registry$Registry$_schema$dyn_45268 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_45268(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_45269 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_45269(this$);
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
malli.registry.t_malli$registry45159 = (function (m,fm,meta45160){
this.m = m;
this.fm = fm;
this.meta45160 = meta45160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45161,meta45160__$1){
var self__ = this;
var _45161__$1 = this;
return (new malli.registry.t_malli$registry45159(self__.m,self__.fm,meta45160__$1));
}));

(malli.registry.t_malli$registry45159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45161){
var self__ = this;
var _45161__$1 = this;
return self__.meta45160;
}));

(malli.registry.t_malli$registry45159.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45159.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry45159.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta45160","meta45160",56149145,null)], null);
}));

(malli.registry.t_malli$registry45159.cljs$lang$type = true);

(malli.registry.t_malli$registry45159.cljs$lang$ctorStr = "malli.registry/t_malli$registry45159");

(malli.registry.t_malli$registry45159.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45159");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45159.
 */
malli.registry.__GT_t_malli$registry45159 = (function malli$registry$__GT_t_malli$registry45159(m,fm,meta45160){
return (new malli.registry.t_malli$registry45159(m,fm,meta45160));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry45159(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45165 = (function (m,meta45166){
this.m = m;
this.meta45166 = meta45166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45167,meta45166__$1){
var self__ = this;
var _45167__$1 = this;
return (new malli.registry.t_malli$registry45165(self__.m,meta45166__$1));
}));

(malli.registry.t_malli$registry45165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45167){
var self__ = this;
var _45167__$1 = this;
return self__.meta45166;
}));

(malli.registry.t_malli$registry45165.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45165.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry45165.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry45165.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45166","meta45166",-10183685,null)], null);
}));

(malli.registry.t_malli$registry45165.cljs$lang$type = true);

(malli.registry.t_malli$registry45165.cljs$lang$ctorStr = "malli.registry/t_malli$registry45165");

(malli.registry.t_malli$registry45165.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45165");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45165.
 */
malli.registry.__GT_t_malli$registry45165 = (function malli$registry$__GT_t_malli$registry45165(m,meta45166){
return (new malli.registry.t_malli$registry45165(m,meta45166));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry45165(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry45188 = (function (meta45189){
this.meta45189 = meta45189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45190,meta45189__$1){
var self__ = this;
var _45190__$1 = this;
return (new malli.registry.t_malli$registry45188(meta45189__$1));
}));

(malli.registry.t_malli$registry45188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45190){
var self__ = this;
var _45190__$1 = this;
return self__.meta45189;
}));

(malli.registry.t_malli$registry45188.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45188.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry45188.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry45188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45189","meta45189",-785500977,null)], null);
}));

(malli.registry.t_malli$registry45188.cljs$lang$type = true);

(malli.registry.t_malli$registry45188.cljs$lang$ctorStr = "malli.registry/t_malli$registry45188");

(malli.registry.t_malli$registry45188.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45188");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45188.
 */
malli.registry.__GT_t_malli$registry45188 = (function malli$registry$__GT_t_malli$registry45188(meta45189){
return (new malli.registry.t_malli$registry45188(meta45189));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry45188(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45193 = (function (_QMARK_registries,registries,meta45194){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta45194 = meta45194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45195,meta45194__$1){
var self__ = this;
var _45195__$1 = this;
return (new malli.registry.t_malli$registry45193(self__._QMARK_registries,self__.registries,meta45194__$1));
}));

(malli.registry.t_malli$registry45193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45195){
var self__ = this;
var _45195__$1 = this;
return self__.meta45194;
}));

(malli.registry.t_malli$registry45193.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45193.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__45191_SHARP_){
return malli.registry._schema(p1__45191_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry45193.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry45193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta45194","meta45194",-1476227870,null)], null);
}));

(malli.registry.t_malli$registry45193.cljs$lang$type = true);

(malli.registry.t_malli$registry45193.cljs$lang$ctorStr = "malli.registry/t_malli$registry45193");

(malli.registry.t_malli$registry45193.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45193");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45193.
 */
malli.registry.__GT_t_malli$registry45193 = (function malli$registry$__GT_t_malli$registry45193(_QMARK_registries,registries,meta45194){
return (new malli.registry.t_malli$registry45193(_QMARK_registries,registries,meta45194));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___45272 = arguments.length;
var i__5750__auto___45273 = (0);
while(true){
if((i__5750__auto___45273 < len__5749__auto___45272)){
args__5755__auto__.push((arguments[i__5750__auto___45273]));

var G__45274 = (i__5750__auto___45273 + (1));
i__5750__auto___45273 = G__45274;
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
return (new malli.registry.t_malli$registry45193(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq45192){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45192));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45196 = (function (db,meta45197){
this.db = db;
this.meta45197 = meta45197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45198,meta45197__$1){
var self__ = this;
var _45198__$1 = this;
return (new malli.registry.t_malli$registry45196(self__.db,meta45197__$1));
}));

(malli.registry.t_malli$registry45196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45198){
var self__ = this;
var _45198__$1 = this;
return self__.meta45197;
}));

(malli.registry.t_malli$registry45196.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45196.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry45196.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry45196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta45197","meta45197",1028296486,null)], null);
}));

(malli.registry.t_malli$registry45196.cljs$lang$type = true);

(malli.registry.t_malli$registry45196.cljs$lang$ctorStr = "malli.registry/t_malli$registry45196");

(malli.registry.t_malli$registry45196.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45196");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45196.
 */
malli.registry.__GT_t_malli$registry45196 = (function malli$registry$__GT_t_malli$registry45196(db,meta45197){
return (new malli.registry.t_malli$registry45196(db,meta45197));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry45196(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45206 = (function (meta45207){
this.meta45207 = meta45207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45208,meta45207__$1){
var self__ = this;
var _45208__$1 = this;
return (new malli.registry.t_malli$registry45206(meta45207__$1));
}));

(malli.registry.t_malli$registry45206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45208){
var self__ = this;
var _45208__$1 = this;
return self__.meta45207;
}));

(malli.registry.t_malli$registry45206.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45206.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry45206.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry45206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45207","meta45207",-1710280852,null)], null);
}));

(malli.registry.t_malli$registry45206.cljs$lang$type = true);

(malli.registry.t_malli$registry45206.cljs$lang$ctorStr = "malli.registry/t_malli$registry45206");

(malli.registry.t_malli$registry45206.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45206");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45206.
 */
malli.registry.__GT_t_malli$registry45206 = (function malli$registry$__GT_t_malli$registry45206(meta45207){
return (new malli.registry.t_malli$registry45206(meta45207));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry45206(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45219 = (function (meta45220){
this.meta45220 = meta45220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45221,meta45220__$1){
var self__ = this;
var _45221__$1 = this;
return (new malli.registry.t_malli$registry45219(meta45220__$1));
}));

(malli.registry.t_malli$registry45219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45221){
var self__ = this;
var _45221__$1 = this;
return self__.meta45220;
}));

(malli.registry.t_malli$registry45219.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45219.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry45219.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry45219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta45220","meta45220",-819963652,null)], null);
}));

(malli.registry.t_malli$registry45219.cljs$lang$type = true);

(malli.registry.t_malli$registry45219.cljs$lang$ctorStr = "malli.registry/t_malli$registry45219");

(malli.registry.t_malli$registry45219.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45219");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45219.
 */
malli.registry.__GT_t_malli$registry45219 = (function malli$registry$__GT_t_malli$registry45219(meta45220){
return (new malli.registry.t_malli$registry45219(meta45220));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry45219(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry45238 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta45239){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta45239 = meta45239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry45238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45240,meta45239__$1){
var self__ = this;
var _45240__$1 = this;
return (new malli.registry.t_malli$registry45238(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta45239__$1));
}));

(malli.registry.t_malli$registry45238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45240){
var self__ = this;
var _45240__$1 = this;
return self__.meta45239;
}));

(malli.registry.t_malli$registry45238.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry45238.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__45260 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__45260.cljs$core$IFn$_invoke$arity$1 ? fexpr__45260.cljs$core$IFn$_invoke$arity$1(name) : fexpr__45260.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__45261 = name;
var G__45262 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__45261,G__45262) : self__.provider.call(null,G__45261,G__45262));
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

(malli.registry.t_malli$registry45238.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry45238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta45239","meta45239",-406545856,null)], null);
}));

(malli.registry.t_malli$registry45238.cljs$lang$type = true);

(malli.registry.t_malli$registry45238.cljs$lang$ctorStr = "malli.registry/t_malli$registry45238");

(malli.registry.t_malli$registry45238.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry45238");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry45238.
 */
malli.registry.__GT_t_malli$registry45238 = (function malli$registry$__GT_t_malli$registry45238(default_registry,provider,cache_STAR_,registry_STAR_,meta45239){
return (new malli.registry.t_malli$registry45238(default_registry,provider,cache_STAR_,registry_STAR_,meta45239));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry45238(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
