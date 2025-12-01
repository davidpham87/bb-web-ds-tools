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

var malli$registry$Registry$_schema$dyn_38704 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_38704(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_38706 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_38706(this$);
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
malli.registry.t_malli$registry38542 = (function (m,fm,meta38543){
this.m = m;
this.fm = fm;
this.meta38543 = meta38543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38544,meta38543__$1){
var self__ = this;
var _38544__$1 = this;
return (new malli.registry.t_malli$registry38542(self__.m,self__.fm,meta38543__$1));
}));

(malli.registry.t_malli$registry38542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38544){
var self__ = this;
var _38544__$1 = this;
return self__.meta38543;
}));

(malli.registry.t_malli$registry38542.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38542.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38542.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38543","meta38543",-2054654812,null)], null);
}));

(malli.registry.t_malli$registry38542.cljs$lang$type = true);

(malli.registry.t_malli$registry38542.cljs$lang$ctorStr = "malli.registry/t_malli$registry38542");

(malli.registry.t_malli$registry38542.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38542");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38542.
 */
malli.registry.__GT_t_malli$registry38542 = (function malli$registry$__GT_t_malli$registry38542(m,fm,meta38543){
return (new malli.registry.t_malli$registry38542(m,fm,meta38543));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38542(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38555 = (function (m,meta38556){
this.m = m;
this.meta38556 = meta38556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38557,meta38556__$1){
var self__ = this;
var _38557__$1 = this;
return (new malli.registry.t_malli$registry38555(self__.m,meta38556__$1));
}));

(malli.registry.t_malli$registry38555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38557){
var self__ = this;
var _38557__$1 = this;
return self__.meta38556;
}));

(malli.registry.t_malli$registry38555.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38555.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38555.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38556","meta38556",-1457519369,null)], null);
}));

(malli.registry.t_malli$registry38555.cljs$lang$type = true);

(malli.registry.t_malli$registry38555.cljs$lang$ctorStr = "malli.registry/t_malli$registry38555");

(malli.registry.t_malli$registry38555.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38555");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38555.
 */
malli.registry.__GT_t_malli$registry38555 = (function malli$registry$__GT_t_malli$registry38555(m,meta38556){
return (new malli.registry.t_malli$registry38555(m,meta38556));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38555(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38591 = (function (meta38592){
this.meta38592 = meta38592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38593,meta38592__$1){
var self__ = this;
var _38593__$1 = this;
return (new malli.registry.t_malli$registry38591(meta38592__$1));
}));

(malli.registry.t_malli$registry38591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38593){
var self__ = this;
var _38593__$1 = this;
return self__.meta38592;
}));

(malli.registry.t_malli$registry38591.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38591.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38591.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38592","meta38592",634122086,null)], null);
}));

(malli.registry.t_malli$registry38591.cljs$lang$type = true);

(malli.registry.t_malli$registry38591.cljs$lang$ctorStr = "malli.registry/t_malli$registry38591");

(malli.registry.t_malli$registry38591.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38591");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38591.
 */
malli.registry.__GT_t_malli$registry38591 = (function malli$registry$__GT_t_malli$registry38591(meta38592){
return (new malli.registry.t_malli$registry38591(meta38592));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38591(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38621 = (function (_QMARK_registries,registries,meta38622){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38622 = meta38622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38623,meta38622__$1){
var self__ = this;
var _38623__$1 = this;
return (new malli.registry.t_malli$registry38621(self__._QMARK_registries,self__.registries,meta38622__$1));
}));

(malli.registry.t_malli$registry38621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38623){
var self__ = this;
var _38623__$1 = this;
return self__.meta38622;
}));

(malli.registry.t_malli$registry38621.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38621.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38609_SHARP_){
return malli.registry._schema(p1__38609_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38621.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38622","meta38622",703921325,null)], null);
}));

(malli.registry.t_malli$registry38621.cljs$lang$type = true);

(malli.registry.t_malli$registry38621.cljs$lang$ctorStr = "malli.registry/t_malli$registry38621");

(malli.registry.t_malli$registry38621.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38621");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38621.
 */
malli.registry.__GT_t_malli$registry38621 = (function malli$registry$__GT_t_malli$registry38621(_QMARK_registries,registries,meta38622){
return (new malli.registry.t_malli$registry38621(_QMARK_registries,registries,meta38622));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38725 = arguments.length;
var i__5750__auto___38726 = (0);
while(true){
if((i__5750__auto___38726 < len__5749__auto___38725)){
args__5755__auto__.push((arguments[i__5750__auto___38726]));

var G__38727 = (i__5750__auto___38726 + (1));
i__5750__auto___38726 = G__38727;
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
return (new malli.registry.t_malli$registry38621(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38611){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38611));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38645 = (function (db,meta38646){
this.db = db;
this.meta38646 = meta38646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38647,meta38646__$1){
var self__ = this;
var _38647__$1 = this;
return (new malli.registry.t_malli$registry38645(self__.db,meta38646__$1));
}));

(malli.registry.t_malli$registry38645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38647){
var self__ = this;
var _38647__$1 = this;
return self__.meta38646;
}));

(malli.registry.t_malli$registry38645.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38645.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38645.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38646","meta38646",683370708,null)], null);
}));

(malli.registry.t_malli$registry38645.cljs$lang$type = true);

(malli.registry.t_malli$registry38645.cljs$lang$ctorStr = "malli.registry/t_malli$registry38645");

(malli.registry.t_malli$registry38645.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38645");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38645.
 */
malli.registry.__GT_t_malli$registry38645 = (function malli$registry$__GT_t_malli$registry38645(db,meta38646){
return (new malli.registry.t_malli$registry38645(db,meta38646));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38645(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38655 = (function (meta38656){
this.meta38656 = meta38656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38657,meta38656__$1){
var self__ = this;
var _38657__$1 = this;
return (new malli.registry.t_malli$registry38655(meta38656__$1));
}));

(malli.registry.t_malli$registry38655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38657){
var self__ = this;
var _38657__$1 = this;
return self__.meta38656;
}));

(malli.registry.t_malli$registry38655.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38655.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry38655.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry38655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38656","meta38656",-2132327527,null)], null);
}));

(malli.registry.t_malli$registry38655.cljs$lang$type = true);

(malli.registry.t_malli$registry38655.cljs$lang$ctorStr = "malli.registry/t_malli$registry38655");

(malli.registry.t_malli$registry38655.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38655");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38655.
 */
malli.registry.__GT_t_malli$registry38655 = (function malli$registry$__GT_t_malli$registry38655(meta38656){
return (new malli.registry.t_malli$registry38655(meta38656));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry38655(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38662 = (function (meta38663){
this.meta38663 = meta38663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38664,meta38663__$1){
var self__ = this;
var _38664__$1 = this;
return (new malli.registry.t_malli$registry38662(meta38663__$1));
}));

(malli.registry.t_malli$registry38662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38664){
var self__ = this;
var _38664__$1 = this;
return self__.meta38663;
}));

(malli.registry.t_malli$registry38662.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38662.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry38662.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry38662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38663","meta38663",1135937454,null)], null);
}));

(malli.registry.t_malli$registry38662.cljs$lang$type = true);

(malli.registry.t_malli$registry38662.cljs$lang$ctorStr = "malli.registry/t_malli$registry38662");

(malli.registry.t_malli$registry38662.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38662");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38662.
 */
malli.registry.__GT_t_malli$registry38662 = (function malli$registry$__GT_t_malli$registry38662(meta38663){
return (new malli.registry.t_malli$registry38662(meta38663));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry38662(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38670 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta38671){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta38671 = meta38671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38672,meta38671__$1){
var self__ = this;
var _38672__$1 = this;
return (new malli.registry.t_malli$registry38670(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta38671__$1));
}));

(malli.registry.t_malli$registry38670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38672){
var self__ = this;
var _38672__$1 = this;
return self__.meta38671;
}));

(malli.registry.t_malli$registry38670.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38670.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__38678 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__38678.cljs$core$IFn$_invoke$arity$1 ? fexpr__38678.cljs$core$IFn$_invoke$arity$1(name) : fexpr__38678.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__38680 = name;
var G__38681 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__38680,G__38681) : self__.provider.call(null,G__38680,G__38681));
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

(malli.registry.t_malli$registry38670.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry38670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta38671","meta38671",1163968254,null)], null);
}));

(malli.registry.t_malli$registry38670.cljs$lang$type = true);

(malli.registry.t_malli$registry38670.cljs$lang$ctorStr = "malli.registry/t_malli$registry38670");

(malli.registry.t_malli$registry38670.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38670");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38670.
 */
malli.registry.__GT_t_malli$registry38670 = (function malli$registry$__GT_t_malli$registry38670(default_registry,provider,cache_STAR_,registry_STAR_,meta38671){
return (new malli.registry.t_malli$registry38670(default_registry,provider,cache_STAR_,registry_STAR_,meta38671));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry38670(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
