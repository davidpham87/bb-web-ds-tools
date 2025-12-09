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

var malli$registry$Registry$_schema$dyn_52187 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_52187(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_52188 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_52188(this$);
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
malli.registry.t_malli$registry52033 = (function (m,fm,meta52034){
this.m = m;
this.fm = fm;
this.meta52034 = meta52034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52035,meta52034__$1){
var self__ = this;
var _52035__$1 = this;
return (new malli.registry.t_malli$registry52033(self__.m,self__.fm,meta52034__$1));
}));

(malli.registry.t_malli$registry52033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52035){
var self__ = this;
var _52035__$1 = this;
return self__.meta52034;
}));

(malli.registry.t_malli$registry52033.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52033.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry52033.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta52034","meta52034",-2109104017,null)], null);
}));

(malli.registry.t_malli$registry52033.cljs$lang$type = true);

(malli.registry.t_malli$registry52033.cljs$lang$ctorStr = "malli.registry/t_malli$registry52033");

(malli.registry.t_malli$registry52033.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52033");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52033.
 */
malli.registry.__GT_t_malli$registry52033 = (function malli$registry$__GT_t_malli$registry52033(m,fm,meta52034){
return (new malli.registry.t_malli$registry52033(m,fm,meta52034));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry52033(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52039 = (function (m,meta52040){
this.m = m;
this.meta52040 = meta52040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52041,meta52040__$1){
var self__ = this;
var _52041__$1 = this;
return (new malli.registry.t_malli$registry52039(self__.m,meta52040__$1));
}));

(malli.registry.t_malli$registry52039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52041){
var self__ = this;
var _52041__$1 = this;
return self__.meta52040;
}));

(malli.registry.t_malli$registry52039.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52039.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry52039.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry52039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta52040","meta52040",519942005,null)], null);
}));

(malli.registry.t_malli$registry52039.cljs$lang$type = true);

(malli.registry.t_malli$registry52039.cljs$lang$ctorStr = "malli.registry/t_malli$registry52039");

(malli.registry.t_malli$registry52039.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52039");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52039.
 */
malli.registry.__GT_t_malli$registry52039 = (function malli$registry$__GT_t_malli$registry52039(m,meta52040){
return (new malli.registry.t_malli$registry52039(m,meta52040));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry52039(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry52049 = (function (meta52050){
this.meta52050 = meta52050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52051,meta52050__$1){
var self__ = this;
var _52051__$1 = this;
return (new malli.registry.t_malli$registry52049(meta52050__$1));
}));

(malli.registry.t_malli$registry52049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52051){
var self__ = this;
var _52051__$1 = this;
return self__.meta52050;
}));

(malli.registry.t_malli$registry52049.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52049.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry52049.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry52049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52050","meta52050",2049224996,null)], null);
}));

(malli.registry.t_malli$registry52049.cljs$lang$type = true);

(malli.registry.t_malli$registry52049.cljs$lang$ctorStr = "malli.registry/t_malli$registry52049");

(malli.registry.t_malli$registry52049.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52049");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52049.
 */
malli.registry.__GT_t_malli$registry52049 = (function malli$registry$__GT_t_malli$registry52049(meta52050){
return (new malli.registry.t_malli$registry52049(meta52050));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry52049(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52062 = (function (_QMARK_registries,registries,meta52063){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta52063 = meta52063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52064,meta52063__$1){
var self__ = this;
var _52064__$1 = this;
return (new malli.registry.t_malli$registry52062(self__._QMARK_registries,self__.registries,meta52063__$1));
}));

(malli.registry.t_malli$registry52062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52064){
var self__ = this;
var _52064__$1 = this;
return self__.meta52063;
}));

(malli.registry.t_malli$registry52062.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52062.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__52060_SHARP_){
return malli.registry._schema(p1__52060_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry52062.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry52062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta52063","meta52063",8870051,null)], null);
}));

(malli.registry.t_malli$registry52062.cljs$lang$type = true);

(malli.registry.t_malli$registry52062.cljs$lang$ctorStr = "malli.registry/t_malli$registry52062");

(malli.registry.t_malli$registry52062.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52062");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52062.
 */
malli.registry.__GT_t_malli$registry52062 = (function malli$registry$__GT_t_malli$registry52062(_QMARK_registries,registries,meta52063){
return (new malli.registry.t_malli$registry52062(_QMARK_registries,registries,meta52063));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___52190 = arguments.length;
var i__5750__auto___52191 = (0);
while(true){
if((i__5750__auto___52191 < len__5749__auto___52190)){
args__5755__auto__.push((arguments[i__5750__auto___52191]));

var G__52192 = (i__5750__auto___52191 + (1));
i__5750__auto___52191 = G__52192;
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
return (new malli.registry.t_malli$registry52062(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq52061){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52061));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52094 = (function (db,meta52095){
this.db = db;
this.meta52095 = meta52095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52096,meta52095__$1){
var self__ = this;
var _52096__$1 = this;
return (new malli.registry.t_malli$registry52094(self__.db,meta52095__$1));
}));

(malli.registry.t_malli$registry52094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52096){
var self__ = this;
var _52096__$1 = this;
return self__.meta52095;
}));

(malli.registry.t_malli$registry52094.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52094.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry52094.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry52094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta52095","meta52095",1403607007,null)], null);
}));

(malli.registry.t_malli$registry52094.cljs$lang$type = true);

(malli.registry.t_malli$registry52094.cljs$lang$ctorStr = "malli.registry/t_malli$registry52094");

(malli.registry.t_malli$registry52094.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52094");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52094.
 */
malli.registry.__GT_t_malli$registry52094 = (function malli$registry$__GT_t_malli$registry52094(db,meta52095){
return (new malli.registry.t_malli$registry52094(db,meta52095));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry52094(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52123 = (function (meta52124){
this.meta52124 = meta52124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52125,meta52124__$1){
var self__ = this;
var _52125__$1 = this;
return (new malli.registry.t_malli$registry52123(meta52124__$1));
}));

(malli.registry.t_malli$registry52123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52125){
var self__ = this;
var _52125__$1 = this;
return self__.meta52124;
}));

(malli.registry.t_malli$registry52123.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52123.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry52123.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry52123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52124","meta52124",-910627335,null)], null);
}));

(malli.registry.t_malli$registry52123.cljs$lang$type = true);

(malli.registry.t_malli$registry52123.cljs$lang$ctorStr = "malli.registry/t_malli$registry52123");

(malli.registry.t_malli$registry52123.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52123");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52123.
 */
malli.registry.__GT_t_malli$registry52123 = (function malli$registry$__GT_t_malli$registry52123(meta52124){
return (new malli.registry.t_malli$registry52123(meta52124));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry52123(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52169 = (function (meta52170){
this.meta52170 = meta52170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52171,meta52170__$1){
var self__ = this;
var _52171__$1 = this;
return (new malli.registry.t_malli$registry52169(meta52170__$1));
}));

(malli.registry.t_malli$registry52169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52171){
var self__ = this;
var _52171__$1 = this;
return self__.meta52170;
}));

(malli.registry.t_malli$registry52169.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52169.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry52169.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry52169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta52170","meta52170",226338997,null)], null);
}));

(malli.registry.t_malli$registry52169.cljs$lang$type = true);

(malli.registry.t_malli$registry52169.cljs$lang$ctorStr = "malli.registry/t_malli$registry52169");

(malli.registry.t_malli$registry52169.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52169");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52169.
 */
malli.registry.__GT_t_malli$registry52169 = (function malli$registry$__GT_t_malli$registry52169(meta52170){
return (new malli.registry.t_malli$registry52169(meta52170));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry52169(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry52180 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta52181){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta52181 = meta52181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry52180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52182,meta52181__$1){
var self__ = this;
var _52182__$1 = this;
return (new malli.registry.t_malli$registry52180(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta52181__$1));
}));

(malli.registry.t_malli$registry52180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52182){
var self__ = this;
var _52182__$1 = this;
return self__.meta52181;
}));

(malli.registry.t_malli$registry52180.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry52180.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__52183 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__52183.cljs$core$IFn$_invoke$arity$1 ? fexpr__52183.cljs$core$IFn$_invoke$arity$1(name) : fexpr__52183.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__52184 = name;
var G__52185 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__52184,G__52185) : self__.provider.call(null,G__52184,G__52185));
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

(malli.registry.t_malli$registry52180.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry52180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta52181","meta52181",1816316909,null)], null);
}));

(malli.registry.t_malli$registry52180.cljs$lang$type = true);

(malli.registry.t_malli$registry52180.cljs$lang$ctorStr = "malli.registry/t_malli$registry52180");

(malli.registry.t_malli$registry52180.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry52180");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry52180.
 */
malli.registry.__GT_t_malli$registry52180 = (function malli$registry$__GT_t_malli$registry52180(default_registry,provider,cache_STAR_,registry_STAR_,meta52181){
return (new malli.registry.t_malli$registry52180(default_registry,provider,cache_STAR_,registry_STAR_,meta52181));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry52180(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
