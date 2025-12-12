goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40278 = cljs.core.get_global_hierarchy;
return (fexpr__40278.cljs$core$IFn$_invoke$arity$0 ? fexpr__40278.cljs$core$IFn$_invoke$arity$0() : fexpr__40278.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__40280.cljs$core$IFn$_invoke$arity$1 ? fexpr__40280.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__40280.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
if((function (){var or__5025__auto__ = (x instanceof cljs.core.Atom);
if(or__5025__auto__){
return or__5025__auto__;
} else {
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return cljs.core.deref(x);
} else {
return sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x);
}
});
sci.impl.core_protocols.cljs_core_ns = sci.lang.__GT_Namespace(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null);
sci.impl.core_protocols.deref_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IDeref","cljs.core.IDeref",-783543206,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IDeref,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40311 = cljs.core.get_global_hierarchy;
return (fexpr__40311.cljs$core$IFn$_invoke$arity$0 ? fexpr__40311.cljs$core$IFn$_invoke$arity$0() : fexpr__40311.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40312 = cljs.core.get_global_hierarchy;
return (fexpr__40312.cljs$core$IFn$_invoke$arity$0 ? fexpr__40312.cljs$core$IFn$_invoke$arity$0() : fexpr__40312.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__40373 = null;
var G__40373__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__40313.cljs$core$IFn$_invoke$arity$2 ? fexpr__40313.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__40313.call(null,ref,f));
});
var G__40373__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__40314.cljs$core$IFn$_invoke$arity$3 ? fexpr__40314.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__40314.call(null,ref,f,a1));
});
var G__40373__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__40316.cljs$core$IFn$_invoke$arity$4 ? fexpr__40316.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__40316.call(null,ref,f,a1,a2));
});
var G__40373__5 = (function() { 
var G__40374__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__40374 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__40377__i = 0, G__40377__a = new Array(arguments.length -  4);
while (G__40377__i < G__40377__a.length) {G__40377__a[G__40377__i] = arguments[G__40377__i + 4]; ++G__40377__i;}
  args = new cljs.core.IndexedSeq(G__40377__a,0,null);
} 
return G__40374__delegate.call(this,ref,f,a1,a2,args);};
G__40374.cljs$lang$maxFixedArity = 4;
G__40374.cljs$lang$applyTo = (function (arglist__40378){
var ref = cljs.core.first(arglist__40378);
arglist__40378 = cljs.core.next(arglist__40378);
var f = cljs.core.first(arglist__40378);
arglist__40378 = cljs.core.next(arglist__40378);
var a1 = cljs.core.first(arglist__40378);
arglist__40378 = cljs.core.next(arglist__40378);
var a2 = cljs.core.first(arglist__40378);
var args = cljs.core.rest(arglist__40378);
return G__40374__delegate(ref,f,a1,a2,args);
});
G__40374.cljs$core$IFn$_invoke$arity$variadic = G__40374__delegate;
return G__40374;
})()
;
G__40373 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__40373__2.call(this,ref,f);
case 3:
return G__40373__3.call(this,ref,f,a1);
case 4:
return G__40373__4.call(this,ref,f,a1,a2);
default:
var G__40383 = null;
if (arguments.length > 4) {
var G__40384__i = 0, G__40384__a = new Array(arguments.length -  4);
while (G__40384__i < G__40384__a.length) {G__40384__a[G__40384__i] = arguments[G__40384__i + 4]; ++G__40384__i;}
G__40383 = new cljs.core.IndexedSeq(G__40384__a,0,null);
}
return G__40373__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__40383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40373.cljs$lang$maxFixedArity = 4;
G__40373.cljs$lang$applyTo = G__40373__5.cljs$lang$applyTo;
G__40373.cljs$core$IFn$_invoke$arity$2 = G__40373__2;
G__40373.cljs$core$IFn$_invoke$arity$3 = G__40373__3;
G__40373.cljs$core$IFn$_invoke$arity$4 = G__40373__4;
G__40373.cljs$core$IFn$_invoke$arity$variadic = G__40373__5.cljs$core$IFn$_invoke$arity$variadic;
return G__40373;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__40326.cljs$core$IFn$_invoke$arity$2 ? fexpr__40326.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__40326.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__40389__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__40389 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__40390__i = 0, G__40390__a = new Array(arguments.length -  2);
while (G__40390__i < G__40390__a.length) {G__40390__a[G__40390__i] = arguments[G__40390__i + 2]; ++G__40390__i;}
  args = new cljs.core.IndexedSeq(G__40390__a,0,null);
} 
return G__40389__delegate.call(this,ref,f,args);};
G__40389.cljs$lang$maxFixedArity = 2;
G__40389.cljs$lang$applyTo = (function (arglist__40391){
var ref = cljs.core.first(arglist__40391);
arglist__40391 = cljs.core.next(arglist__40391);
var f = cljs.core.first(arglist__40391);
var args = cljs.core.rest(arglist__40391);
return G__40389__delegate(ref,f,args);
});
G__40389.cljs$core$IFn$_invoke$arity$variadic = G__40389__delegate;
return G__40389;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40392 = arguments.length;
var i__5750__auto___40393 = (0);
while(true){
if((i__5750__auto___40393 < len__5749__auto___40392)){
args__5755__auto__.push((arguments[i__5750__auto___40393]));

var G__40394 = (i__5750__auto___40393 + (1));
i__5750__auto___40393 = G__40394;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if((function (){var or__5025__auto__ = (ref instanceof cljs.core.Atom);
if(or__5025__auto__){
return or__5025__auto__;
} else {
if((!((ref == null)))){
if((((ref.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === ref.cljs$core$ISwap$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
} else {
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f);
}
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq40333){
var G__40334 = cljs.core.first(seq40333);
var seq40333__$1 = cljs.core.next(seq40333);
var G__40335 = cljs.core.first(seq40333__$1);
var seq40333__$2 = cljs.core.next(seq40333__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40334,G__40335,seq40333__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
if((function (){var or__5025__auto__ = (ref instanceof cljs.core.Atom);
if(or__5025__auto__){
return or__5025__auto__;
} else {
if((!((ref == null)))){
if((((ref.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === ref.cljs$core$IReset$)))){
return true;
} else {
return false;
}
} else {
return false;
}
}
})()){
return cljs.core.reset_BANG_(ref,v);
} else {
return sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v);
}
});
sci.impl.core_protocols.swap_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.ISwap","cljs.core.ISwap",2045511362,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.ISwap,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.utils.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"cljs.core.IReset","cljs.core.IReset",348905844,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.IReset,new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));

//# sourceMappingURL=sci.impl.core_protocols.js.map
