goog.provide('sci.impl.core_protocols');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40337 = cljs.core.get_global_hierarchy;
return (fexpr__40337.cljs$core$IFn$_invoke$arity$0 ? fexpr__40337.cljs$core$IFn$_invoke$arity$0() : fexpr__40337.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-deref","-deref",-283116853,null));
return (fexpr__40338.cljs$core$IFn$_invoke$arity$1 ? fexpr__40338.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__40338.call(null,ref));
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40354 = cljs.core.get_global_hierarchy;
return (fexpr__40354.cljs$core$IFn$_invoke$arity$0 ? fexpr__40354.cljs$core$IFn$_invoke$arity$0() : fexpr__40354.call(null));
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
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40360 = cljs.core.get_global_hierarchy;
return (fexpr__40360.cljs$core$IFn$_invoke$arity$0 ? fexpr__40360.cljs$core$IFn$_invoke$arity$0() : fexpr__40360.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function() {
var G__40431 = null;
var G__40431__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__40373.cljs$core$IFn$_invoke$arity$2 ? fexpr__40373.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__40373.call(null,ref,f));
});
var G__40431__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__40374.cljs$core$IFn$_invoke$arity$3 ? fexpr__40374.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__40374.call(null,ref,f,a1));
});
var G__40431__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null));
return (fexpr__40375.cljs$core$IFn$_invoke$arity$4 ? fexpr__40375.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__40375.call(null,ref,f,a1,a2));
});
var G__40431__5 = (function() { 
var G__40436__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-swap!","-swap!",-535359318,null)),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__40436 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__40437__i = 0, G__40437__a = new Array(arguments.length -  4);
while (G__40437__i < G__40437__a.length) {G__40437__a[G__40437__i] = arguments[G__40437__i + 4]; ++G__40437__i;}
  args = new cljs.core.IndexedSeq(G__40437__a,0,null);
} 
return G__40436__delegate.call(this,ref,f,a1,a2,args);};
G__40436.cljs$lang$maxFixedArity = 4;
G__40436.cljs$lang$applyTo = (function (arglist__40438){
var ref = cljs.core.first(arglist__40438);
arglist__40438 = cljs.core.next(arglist__40438);
var f = cljs.core.first(arglist__40438);
arglist__40438 = cljs.core.next(arglist__40438);
var a1 = cljs.core.first(arglist__40438);
arglist__40438 = cljs.core.next(arglist__40438);
var a2 = cljs.core.first(arglist__40438);
var args = cljs.core.rest(arglist__40438);
return G__40436__delegate(ref,f,a1,a2,args);
});
G__40436.cljs$core$IFn$_invoke$arity$variadic = G__40436__delegate;
return G__40436;
})()
;
G__40431 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__40431__2.call(this,ref,f);
case 3:
return G__40431__3.call(this,ref,f,a1);
case 4:
return G__40431__4.call(this,ref,f,a1,a2);
default:
var G__40441 = null;
if (arguments.length > 4) {
var G__40442__i = 0, G__40442__a = new Array(arguments.length -  4);
while (G__40442__i < G__40442__a.length) {G__40442__a[G__40442__i] = arguments[G__40442__i + 4]; ++G__40442__i;}
G__40441 = new cljs.core.IndexedSeq(G__40442__a,0,null);
}
return G__40431__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__40441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40431.cljs$lang$maxFixedArity = 4;
G__40431.cljs$lang$applyTo = G__40431__5.cljs$lang$applyTo;
G__40431.cljs$core$IFn$_invoke$arity$2 = G__40431__2;
G__40431.cljs$core$IFn$_invoke$arity$3 = G__40431__3;
G__40431.cljs$core$IFn$_invoke$arity$4 = G__40431__4;
G__40431.cljs$core$IFn$_invoke$arity$variadic = G__40431__5.cljs$core$IFn$_invoke$arity$variadic;
return G__40431;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__40392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,new cljs.core.Symbol(null,"-reset!","-reset!",1965723739,null));
return (fexpr__40392.cljs$core$IFn$_invoke$arity$2 ? fexpr__40392.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__40392.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__40449__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__40449 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__40450__i = 0, G__40450__a = new Array(arguments.length -  2);
while (G__40450__i < G__40450__a.length) {G__40450__a[G__40450__i] = arguments[G__40450__i + 2]; ++G__40450__i;}
  args = new cljs.core.IndexedSeq(G__40450__a,0,null);
} 
return G__40449__delegate.call(this,ref,f,args);};
G__40449.cljs$lang$maxFixedArity = 2;
G__40449.cljs$lang$applyTo = (function (arglist__40453){
var ref = cljs.core.first(arglist__40453);
arglist__40453 = cljs.core.next(arglist__40453);
var f = cljs.core.first(arglist__40453);
var args = cljs.core.rest(arglist__40453);
return G__40449__delegate(ref,f,args);
});
G__40449.cljs$core$IFn$_invoke$arity$variadic = G__40449__delegate;
return G__40449;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40454 = arguments.length;
var i__5750__auto___40455 = (0);
while(true){
if((i__5750__auto___40455 < len__5749__auto___40454)){
args__5755__auto__.push((arguments[i__5750__auto___40455]));

var G__40456 = (i__5750__auto___40455 + (1));
i__5750__auto___40455 = G__40456;
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
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq40393){
var G__40394 = cljs.core.first(seq40393);
var seq40393__$1 = cljs.core.next(seq40393);
var G__40395 = cljs.core.first(seq40393__$1);
var seq40393__$2 = cljs.core.next(seq40393__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40394,G__40395,seq40393__$2);
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
