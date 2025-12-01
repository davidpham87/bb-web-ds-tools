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

var malli$registry$Registry$_schema$dyn_38956 = (function (this$,type){
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
return malli$registry$Registry$_schema$dyn_38956(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_38957 = (function (this$){
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
return malli$registry$Registry$_schemas$dyn_38957(this$);
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
malli.registry.t_malli$registry38863 = (function (m,fm,meta38864){
this.m = m;
this.fm = fm;
this.meta38864 = meta38864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38865,meta38864__$1){
var self__ = this;
var _38865__$1 = this;
return (new malli.registry.t_malli$registry38863(self__.m,self__.fm,meta38864__$1));
}));

(malli.registry.t_malli$registry38863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38865){
var self__ = this;
var _38865__$1 = this;
return self__.meta38864;
}));

(malli.registry.t_malli$registry38863.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38863.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry38863.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta38864","meta38864",-1087005015,null)], null);
}));

(malli.registry.t_malli$registry38863.cljs$lang$type = true);

(malli.registry.t_malli$registry38863.cljs$lang$ctorStr = "malli.registry/t_malli$registry38863");

(malli.registry.t_malli$registry38863.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38863");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38863.
 */
malli.registry.__GT_t_malli$registry38863 = (function malli$registry$__GT_t_malli$registry38863(m,fm,meta38864){
return (new malli.registry.t_malli$registry38863(m,fm,meta38864));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry38863(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38866 = (function (m,meta38867){
this.m = m;
this.meta38867 = meta38867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38868,meta38867__$1){
var self__ = this;
var _38868__$1 = this;
return (new malli.registry.t_malli$registry38866(self__.m,meta38867__$1));
}));

(malli.registry.t_malli$registry38866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38868){
var self__ = this;
var _38868__$1 = this;
return self__.meta38867;
}));

(malli.registry.t_malli$registry38866.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38866.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry38866.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry38866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta38867","meta38867",1825463661,null)], null);
}));

(malli.registry.t_malli$registry38866.cljs$lang$type = true);

(malli.registry.t_malli$registry38866.cljs$lang$ctorStr = "malli.registry/t_malli$registry38866");

(malli.registry.t_malli$registry38866.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38866");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38866.
 */
malli.registry.__GT_t_malli$registry38866 = (function malli$registry$__GT_t_malli$registry38866(m,meta38867){
return (new malli.registry.t_malli$registry38866(m,meta38867));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry38866(m,cljs.core.PersistentArrayMap.EMPTY));
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
malli.registry.t_malli$registry38874 = (function (meta38875){
this.meta38875 = meta38875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38876,meta38875__$1){
var self__ = this;
var _38876__$1 = this;
return (new malli.registry.t_malli$registry38874(meta38875__$1));
}));

(malli.registry.t_malli$registry38874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38876){
var self__ = this;
var _38876__$1 = this;
return self__.meta38875;
}));

(malli.registry.t_malli$registry38874.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38874.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry38874.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry38874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38875","meta38875",-1734449453,null)], null);
}));

(malli.registry.t_malli$registry38874.cljs$lang$type = true);

(malli.registry.t_malli$registry38874.cljs$lang$ctorStr = "malli.registry/t_malli$registry38874");

(malli.registry.t_malli$registry38874.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38874");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38874.
 */
malli.registry.__GT_t_malli$registry38874 = (function malli$registry$__GT_t_malli$registry38874(meta38875){
return (new malli.registry.t_malli$registry38874(meta38875));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry38874(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38895 = (function (_QMARK_registries,registries,meta38896){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta38896 = meta38896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38897,meta38896__$1){
var self__ = this;
var _38897__$1 = this;
return (new malli.registry.t_malli$registry38895(self__._QMARK_registries,self__.registries,meta38896__$1));
}));

(malli.registry.t_malli$registry38895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38897){
var self__ = this;
var _38897__$1 = this;
return self__.meta38896;
}));

(malli.registry.t_malli$registry38895.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38895.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__38892_SHARP_){
return malli.registry._schema(p1__38892_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry38895.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry38895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta38896","meta38896",-1401342330,null)], null);
}));

(malli.registry.t_malli$registry38895.cljs$lang$type = true);

(malli.registry.t_malli$registry38895.cljs$lang$ctorStr = "malli.registry/t_malli$registry38895");

(malli.registry.t_malli$registry38895.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38895");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38895.
 */
malli.registry.__GT_t_malli$registry38895 = (function malli$registry$__GT_t_malli$registry38895(_QMARK_registries,registries,meta38896){
return (new malli.registry.t_malli$registry38895(_QMARK_registries,registries,meta38896));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38971 = arguments.length;
var i__5750__auto___38972 = (0);
while(true){
if((i__5750__auto___38972 < len__5749__auto___38971)){
args__5755__auto__.push((arguments[i__5750__auto___38972]));

var G__38973 = (i__5750__auto___38972 + (1));
i__5750__auto___38972 = G__38973;
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
return (new malli.registry.t_malli$registry38895(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq38893){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38893));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38920 = (function (db,meta38921){
this.db = db;
this.meta38921 = meta38921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38922,meta38921__$1){
var self__ = this;
var _38922__$1 = this;
return (new malli.registry.t_malli$registry38920(self__.db,meta38921__$1));
}));

(malli.registry.t_malli$registry38920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38922){
var self__ = this;
var _38922__$1 = this;
return self__.meta38921;
}));

(malli.registry.t_malli$registry38920.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38920.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry38920.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry38920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta38921","meta38921",464179592,null)], null);
}));

(malli.registry.t_malli$registry38920.cljs$lang$type = true);

(malli.registry.t_malli$registry38920.cljs$lang$ctorStr = "malli.registry/t_malli$registry38920");

(malli.registry.t_malli$registry38920.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38920");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38920.
 */
malli.registry.__GT_t_malli$registry38920 = (function malli$registry$__GT_t_malli$registry38920(db,meta38921){
return (new malli.registry.t_malli$registry38920(db,meta38921));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry38920(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38937 = (function (meta38938){
this.meta38938 = meta38938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38939,meta38938__$1){
var self__ = this;
var _38939__$1 = this;
return (new malli.registry.t_malli$registry38937(meta38938__$1));
}));

(malli.registry.t_malli$registry38937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38939){
var self__ = this;
var _38939__$1 = this;
return self__.meta38938;
}));

(malli.registry.t_malli$registry38937.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38937.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry38937.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry38937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38938","meta38938",1985082411,null)], null);
}));

(malli.registry.t_malli$registry38937.cljs$lang$type = true);

(malli.registry.t_malli$registry38937.cljs$lang$ctorStr = "malli.registry/t_malli$registry38937");

(malli.registry.t_malli$registry38937.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38937");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38937.
 */
malli.registry.__GT_t_malli$registry38937 = (function malli$registry$__GT_t_malli$registry38937(meta38938){
return (new malli.registry.t_malli$registry38937(meta38938));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry38937(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

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
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry38945.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
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


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry38945(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry38949 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta38950){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta38950 = meta38950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry38949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38951,meta38950__$1){
var self__ = this;
var _38951__$1 = this;
return (new malli.registry.t_malli$registry38949(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta38950__$1));
}));

(malli.registry.t_malli$registry38949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38951){
var self__ = this;
var _38951__$1 = this;
return self__.meta38950;
}));

(malli.registry.t_malli$registry38949.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry38949.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__38953 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__38953.cljs$core$IFn$_invoke$arity$1 ? fexpr__38953.cljs$core$IFn$_invoke$arity$1(name) : fexpr__38953.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__38954 = name;
var G__38955 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__38954,G__38955) : self__.provider.call(null,G__38954,G__38955));
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

(malli.registry.t_malli$registry38949.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry38949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta38950","meta38950",-1645707242,null)], null);
}));

(malli.registry.t_malli$registry38949.cljs$lang$type = true);

(malli.registry.t_malli$registry38949.cljs$lang$ctorStr = "malli.registry/t_malli$registry38949");

(malli.registry.t_malli$registry38949.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry38949");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry38949.
 */
malli.registry.__GT_t_malli$registry38949 = (function malli$registry$__GT_t_malli$registry38949(default_registry,provider,cache_STAR_,registry_STAR_,meta38950){
return (new malli.registry.t_malli$registry38949(default_registry,provider,cache_STAR_,registry_STAR_,meta38950));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry38949(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
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
