goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__37445 = arguments.length;
switch (G__37445) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__37446 = fixed_arity;
switch (G__37446) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__37447){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__37447);

while(true){
var ret__36606__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36606__auto__)){
continue;
} else {
return ret__36606__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37447 = null;
if (arguments.length > 0) {
var G__37983__i = 0, G__37983__a = new Array(arguments.length -  0);
while (G__37983__i < G__37983__a.length) {G__37983__a[G__37983__i] = arguments[G__37983__i + 0]; ++G__37983__i;}
  G__37447 = new cljs.core.IndexedSeq(G__37983__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37447);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__37984){
var G__37447 = cljs.core.seq(arglist__37984);
return sci$impl$fns$arity_0__delegate(G__37447);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__37448,G__37449){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37448);

(invoc_array[vararg_idx] = G__37449);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37448,var_args){
var G__37449 = null;
if (arguments.length > 1) {
var G__37985__i = 0, G__37985__a = new Array(arguments.length -  1);
while (G__37985__i < G__37985__a.length) {G__37985__a[G__37985__i] = arguments[G__37985__i + 1]; ++G__37985__i;}
  G__37449 = new cljs.core.IndexedSeq(G__37985__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37448,G__37449);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__37986){
var G__37448 = cljs.core.first(arglist__37986);
var G__37449 = cljs.core.rest(arglist__37986);
return sci$impl$fns$arity_1__delegate(G__37448,G__37449);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__37450,G__37451,G__37452){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37450);

(invoc_array[(1)] = G__37451);

(invoc_array[vararg_idx] = G__37452);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37450,G__37451,var_args){
var G__37452 = null;
if (arguments.length > 2) {
var G__37987__i = 0, G__37987__a = new Array(arguments.length -  2);
while (G__37987__i < G__37987__a.length) {G__37987__a[G__37987__i] = arguments[G__37987__i + 2]; ++G__37987__i;}
  G__37452 = new cljs.core.IndexedSeq(G__37987__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37450,G__37451,G__37452);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__37988){
var G__37450 = cljs.core.first(arglist__37988);
arglist__37988 = cljs.core.next(arglist__37988);
var G__37451 = cljs.core.first(arglist__37988);
var G__37452 = cljs.core.rest(arglist__37988);
return sci$impl$fns$arity_2__delegate(G__37450,G__37451,G__37452);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__37453,G__37454,G__37455,G__37456){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37453);

(invoc_array[(1)] = G__37454);

(invoc_array[(2)] = G__37455);

(invoc_array[vararg_idx] = G__37456);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37453,G__37454,G__37455,var_args){
var G__37456 = null;
if (arguments.length > 3) {
var G__37989__i = 0, G__37989__a = new Array(arguments.length -  3);
while (G__37989__i < G__37989__a.length) {G__37989__a[G__37989__i] = arguments[G__37989__i + 3]; ++G__37989__i;}
  G__37456 = new cljs.core.IndexedSeq(G__37989__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37453,G__37454,G__37455,G__37456);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__37990){
var G__37453 = cljs.core.first(arglist__37990);
arglist__37990 = cljs.core.next(arglist__37990);
var G__37454 = cljs.core.first(arglist__37990);
arglist__37990 = cljs.core.next(arglist__37990);
var G__37455 = cljs.core.first(arglist__37990);
var G__37456 = cljs.core.rest(arglist__37990);
return sci$impl$fns$arity_3__delegate(G__37453,G__37454,G__37455,G__37456);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__37457,G__37458,G__37459,G__37460,G__37461){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37457);

(invoc_array[(1)] = G__37458);

(invoc_array[(2)] = G__37459);

(invoc_array[(3)] = G__37460);

(invoc_array[vararg_idx] = G__37461);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37457,G__37458,G__37459,G__37460,var_args){
var G__37461 = null;
if (arguments.length > 4) {
var G__37991__i = 0, G__37991__a = new Array(arguments.length -  4);
while (G__37991__i < G__37991__a.length) {G__37991__a[G__37991__i] = arguments[G__37991__i + 4]; ++G__37991__i;}
  G__37461 = new cljs.core.IndexedSeq(G__37991__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37457,G__37458,G__37459,G__37460,G__37461);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__37992){
var G__37457 = cljs.core.first(arglist__37992);
arglist__37992 = cljs.core.next(arglist__37992);
var G__37458 = cljs.core.first(arglist__37992);
arglist__37992 = cljs.core.next(arglist__37992);
var G__37459 = cljs.core.first(arglist__37992);
arglist__37992 = cljs.core.next(arglist__37992);
var G__37460 = cljs.core.first(arglist__37992);
var G__37461 = cljs.core.rest(arglist__37992);
return sci$impl$fns$arity_4__delegate(G__37457,G__37458,G__37459,G__37460,G__37461);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__37462,G__37463,G__37464,G__37465,G__37466,G__37467){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37462);

(invoc_array[(1)] = G__37463);

(invoc_array[(2)] = G__37464);

(invoc_array[(3)] = G__37465);

(invoc_array[(4)] = G__37466);

(invoc_array[vararg_idx] = G__37467);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37462,G__37463,G__37464,G__37465,G__37466,var_args){
var G__37467 = null;
if (arguments.length > 5) {
var G__37993__i = 0, G__37993__a = new Array(arguments.length -  5);
while (G__37993__i < G__37993__a.length) {G__37993__a[G__37993__i] = arguments[G__37993__i + 5]; ++G__37993__i;}
  G__37467 = new cljs.core.IndexedSeq(G__37993__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__37994){
var G__37462 = cljs.core.first(arglist__37994);
arglist__37994 = cljs.core.next(arglist__37994);
var G__37463 = cljs.core.first(arglist__37994);
arglist__37994 = cljs.core.next(arglist__37994);
var G__37464 = cljs.core.first(arglist__37994);
arglist__37994 = cljs.core.next(arglist__37994);
var G__37465 = cljs.core.first(arglist__37994);
arglist__37994 = cljs.core.next(arglist__37994);
var G__37466 = cljs.core.first(arglist__37994);
var G__37467 = cljs.core.rest(arglist__37994);
return sci$impl$fns$arity_5__delegate(G__37462,G__37463,G__37464,G__37465,G__37466,G__37467);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37468);

(invoc_array[(1)] = G__37469);

(invoc_array[(2)] = G__37470);

(invoc_array[(3)] = G__37471);

(invoc_array[(4)] = G__37472);

(invoc_array[(5)] = G__37473);

(invoc_array[vararg_idx] = G__37474);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,var_args){
var G__37474 = null;
if (arguments.length > 6) {
var G__37995__i = 0, G__37995__a = new Array(arguments.length -  6);
while (G__37995__i < G__37995__a.length) {G__37995__a[G__37995__i] = arguments[G__37995__i + 6]; ++G__37995__i;}
  G__37474 = new cljs.core.IndexedSeq(G__37995__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__37996){
var G__37468 = cljs.core.first(arglist__37996);
arglist__37996 = cljs.core.next(arglist__37996);
var G__37469 = cljs.core.first(arglist__37996);
arglist__37996 = cljs.core.next(arglist__37996);
var G__37470 = cljs.core.first(arglist__37996);
arglist__37996 = cljs.core.next(arglist__37996);
var G__37471 = cljs.core.first(arglist__37996);
arglist__37996 = cljs.core.next(arglist__37996);
var G__37472 = cljs.core.first(arglist__37996);
arglist__37996 = cljs.core.next(arglist__37996);
var G__37473 = cljs.core.first(arglist__37996);
var G__37474 = cljs.core.rest(arglist__37996);
return sci$impl$fns$arity_6__delegate(G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37475);

(invoc_array[(1)] = G__37476);

(invoc_array[(2)] = G__37477);

(invoc_array[(3)] = G__37478);

(invoc_array[(4)] = G__37479);

(invoc_array[(5)] = G__37480);

(invoc_array[(6)] = G__37481);

(invoc_array[vararg_idx] = G__37482);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,var_args){
var G__37482 = null;
if (arguments.length > 7) {
var G__37999__i = 0, G__37999__a = new Array(arguments.length -  7);
while (G__37999__i < G__37999__a.length) {G__37999__a[G__37999__i] = arguments[G__37999__i + 7]; ++G__37999__i;}
  G__37482 = new cljs.core.IndexedSeq(G__37999__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__38000){
var G__37475 = cljs.core.first(arglist__38000);
arglist__38000 = cljs.core.next(arglist__38000);
var G__37476 = cljs.core.first(arglist__38000);
arglist__38000 = cljs.core.next(arglist__38000);
var G__37477 = cljs.core.first(arglist__38000);
arglist__38000 = cljs.core.next(arglist__38000);
var G__37478 = cljs.core.first(arglist__38000);
arglist__38000 = cljs.core.next(arglist__38000);
var G__37479 = cljs.core.first(arglist__38000);
arglist__38000 = cljs.core.next(arglist__38000);
var G__37480 = cljs.core.first(arglist__38000);
arglist__38000 = cljs.core.next(arglist__38000);
var G__37481 = cljs.core.first(arglist__38000);
var G__37482 = cljs.core.rest(arglist__38000);
return sci$impl$fns$arity_7__delegate(G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37483);

(invoc_array[(1)] = G__37484);

(invoc_array[(2)] = G__37485);

(invoc_array[(3)] = G__37486);

(invoc_array[(4)] = G__37487);

(invoc_array[(5)] = G__37488);

(invoc_array[(6)] = G__37489);

(invoc_array[(7)] = G__37490);

(invoc_array[vararg_idx] = G__37491);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,var_args){
var G__37491 = null;
if (arguments.length > 8) {
var G__38009__i = 0, G__38009__a = new Array(arguments.length -  8);
while (G__38009__i < G__38009__a.length) {G__38009__a[G__38009__i] = arguments[G__38009__i + 8]; ++G__38009__i;}
  G__37491 = new cljs.core.IndexedSeq(G__38009__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__38010){
var G__37483 = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var G__37484 = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var G__37485 = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var G__37486 = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var G__37487 = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var G__37488 = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var G__37489 = cljs.core.first(arglist__38010);
arglist__38010 = cljs.core.next(arglist__38010);
var G__37490 = cljs.core.first(arglist__38010);
var G__37491 = cljs.core.rest(arglist__38010);
return sci$impl$fns$arity_8__delegate(G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37492);

(invoc_array[(1)] = G__37493);

(invoc_array[(2)] = G__37494);

(invoc_array[(3)] = G__37495);

(invoc_array[(4)] = G__37496);

(invoc_array[(5)] = G__37497);

(invoc_array[(6)] = G__37498);

(invoc_array[(7)] = G__37499);

(invoc_array[(8)] = G__37500);

(invoc_array[vararg_idx] = G__37501);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,var_args){
var G__37501 = null;
if (arguments.length > 9) {
var G__38015__i = 0, G__38015__a = new Array(arguments.length -  9);
while (G__38015__i < G__38015__a.length) {G__38015__a[G__38015__i] = arguments[G__38015__i + 9]; ++G__38015__i;}
  G__37501 = new cljs.core.IndexedSeq(G__38015__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__38016){
var G__37492 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37493 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37494 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37495 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37496 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37497 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37498 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37499 = cljs.core.first(arglist__38016);
arglist__38016 = cljs.core.next(arglist__38016);
var G__37500 = cljs.core.first(arglist__38016);
var G__37501 = cljs.core.rest(arglist__38016);
return sci$impl$fns$arity_9__delegate(G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37502);

(invoc_array[(1)] = G__37503);

(invoc_array[(2)] = G__37504);

(invoc_array[(3)] = G__37505);

(invoc_array[(4)] = G__37506);

(invoc_array[(5)] = G__37507);

(invoc_array[(6)] = G__37508);

(invoc_array[(7)] = G__37509);

(invoc_array[(8)] = G__37510);

(invoc_array[(9)] = G__37511);

(invoc_array[vararg_idx] = G__37512);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,var_args){
var G__37512 = null;
if (arguments.length > 10) {
var G__38019__i = 0, G__38019__a = new Array(arguments.length -  10);
while (G__38019__i < G__38019__a.length) {G__38019__a[G__38019__i] = arguments[G__38019__i + 10]; ++G__38019__i;}
  G__37512 = new cljs.core.IndexedSeq(G__38019__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__38020){
var G__37502 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37503 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37504 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37505 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37506 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37507 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37508 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37509 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37510 = cljs.core.first(arglist__38020);
arglist__38020 = cljs.core.next(arglist__38020);
var G__37511 = cljs.core.first(arglist__38020);
var G__37512 = cljs.core.rest(arglist__38020);
return sci$impl$fns$arity_10__delegate(G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37513);

(invoc_array[(1)] = G__37514);

(invoc_array[(2)] = G__37515);

(invoc_array[(3)] = G__37516);

(invoc_array[(4)] = G__37517);

(invoc_array[(5)] = G__37518);

(invoc_array[(6)] = G__37519);

(invoc_array[(7)] = G__37520);

(invoc_array[(8)] = G__37521);

(invoc_array[(9)] = G__37522);

(invoc_array[(10)] = G__37523);

(invoc_array[vararg_idx] = G__37524);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,var_args){
var G__37524 = null;
if (arguments.length > 11) {
var G__38021__i = 0, G__38021__a = new Array(arguments.length -  11);
while (G__38021__i < G__38021__a.length) {G__38021__a[G__38021__i] = arguments[G__38021__i + 11]; ++G__38021__i;}
  G__37524 = new cljs.core.IndexedSeq(G__38021__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__38022){
var G__37513 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37514 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37515 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37516 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37517 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37518 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37519 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37520 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37521 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37522 = cljs.core.first(arglist__38022);
arglist__38022 = cljs.core.next(arglist__38022);
var G__37523 = cljs.core.first(arglist__38022);
var G__37524 = cljs.core.rest(arglist__38022);
return sci$impl$fns$arity_11__delegate(G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37526);

(invoc_array[(1)] = G__37527);

(invoc_array[(2)] = G__37528);

(invoc_array[(3)] = G__37529);

(invoc_array[(4)] = G__37530);

(invoc_array[(5)] = G__37531);

(invoc_array[(6)] = G__37532);

(invoc_array[(7)] = G__37533);

(invoc_array[(8)] = G__37534);

(invoc_array[(9)] = G__37535);

(invoc_array[(10)] = G__37536);

(invoc_array[(11)] = G__37537);

(invoc_array[vararg_idx] = G__37538);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,var_args){
var G__37538 = null;
if (arguments.length > 12) {
var G__38023__i = 0, G__38023__a = new Array(arguments.length -  12);
while (G__38023__i < G__38023__a.length) {G__38023__a[G__38023__i] = arguments[G__38023__i + 12]; ++G__38023__i;}
  G__37538 = new cljs.core.IndexedSeq(G__38023__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__38024){
var G__37526 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37527 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37528 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37529 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37530 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37531 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37532 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37533 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37534 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37535 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37536 = cljs.core.first(arglist__38024);
arglist__38024 = cljs.core.next(arglist__38024);
var G__37537 = cljs.core.first(arglist__38024);
var G__37538 = cljs.core.rest(arglist__38024);
return sci$impl$fns$arity_12__delegate(G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37542);

(invoc_array[(1)] = G__37543);

(invoc_array[(2)] = G__37544);

(invoc_array[(3)] = G__37545);

(invoc_array[(4)] = G__37546);

(invoc_array[(5)] = G__37547);

(invoc_array[(6)] = G__37548);

(invoc_array[(7)] = G__37549);

(invoc_array[(8)] = G__37550);

(invoc_array[(9)] = G__37551);

(invoc_array[(10)] = G__37552);

(invoc_array[(11)] = G__37553);

(invoc_array[(12)] = G__37554);

(invoc_array[vararg_idx] = G__37555);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,var_args){
var G__37555 = null;
if (arguments.length > 13) {
var G__38027__i = 0, G__38027__a = new Array(arguments.length -  13);
while (G__38027__i < G__38027__a.length) {G__38027__a[G__38027__i] = arguments[G__38027__i + 13]; ++G__38027__i;}
  G__37555 = new cljs.core.IndexedSeq(G__38027__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__38031){
var G__37542 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37543 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37544 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37545 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37546 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37547 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37548 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37549 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37550 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37551 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37552 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37553 = cljs.core.first(arglist__38031);
arglist__38031 = cljs.core.next(arglist__38031);
var G__37554 = cljs.core.first(arglist__38031);
var G__37555 = cljs.core.rest(arglist__38031);
return sci$impl$fns$arity_13__delegate(G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37556);

(invoc_array[(1)] = G__37557);

(invoc_array[(2)] = G__37558);

(invoc_array[(3)] = G__37559);

(invoc_array[(4)] = G__37560);

(invoc_array[(5)] = G__37561);

(invoc_array[(6)] = G__37562);

(invoc_array[(7)] = G__37563);

(invoc_array[(8)] = G__37564);

(invoc_array[(9)] = G__37565);

(invoc_array[(10)] = G__37566);

(invoc_array[(11)] = G__37567);

(invoc_array[(12)] = G__37568);

(invoc_array[(13)] = G__37569);

(invoc_array[vararg_idx] = G__37570);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,var_args){
var G__37570 = null;
if (arguments.length > 14) {
var G__38039__i = 0, G__38039__a = new Array(arguments.length -  14);
while (G__38039__i < G__38039__a.length) {G__38039__a[G__38039__i] = arguments[G__38039__i + 14]; ++G__38039__i;}
  G__37570 = new cljs.core.IndexedSeq(G__38039__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__38041){
var G__37556 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37557 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37558 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37559 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37560 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37561 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37562 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37563 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37564 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37565 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37566 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37567 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37568 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37569 = cljs.core.first(arglist__38041);
var G__37570 = cljs.core.rest(arglist__38041);
return sci$impl$fns$arity_14__delegate(G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37571);

(invoc_array[(1)] = G__37572);

(invoc_array[(2)] = G__37573);

(invoc_array[(3)] = G__37574);

(invoc_array[(4)] = G__37575);

(invoc_array[(5)] = G__37576);

(invoc_array[(6)] = G__37577);

(invoc_array[(7)] = G__37578);

(invoc_array[(8)] = G__37579);

(invoc_array[(9)] = G__37580);

(invoc_array[(10)] = G__37581);

(invoc_array[(11)] = G__37582);

(invoc_array[(12)] = G__37583);

(invoc_array[(13)] = G__37584);

(invoc_array[(14)] = G__37585);

(invoc_array[vararg_idx] = G__37586);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,var_args){
var G__37586 = null;
if (arguments.length > 15) {
var G__38044__i = 0, G__38044__a = new Array(arguments.length -  15);
while (G__38044__i < G__38044__a.length) {G__38044__a[G__38044__i] = arguments[G__38044__i + 15]; ++G__38044__i;}
  G__37586 = new cljs.core.IndexedSeq(G__38044__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__38045){
var G__37571 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37572 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37573 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37574 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37575 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37576 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37577 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37578 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37579 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37580 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37581 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37582 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37583 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37584 = cljs.core.first(arglist__38045);
arglist__38045 = cljs.core.next(arglist__38045);
var G__37585 = cljs.core.first(arglist__38045);
var G__37586 = cljs.core.rest(arglist__38045);
return sci$impl$fns$arity_15__delegate(G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37587);

(invoc_array[(1)] = G__37588);

(invoc_array[(2)] = G__37589);

(invoc_array[(3)] = G__37590);

(invoc_array[(4)] = G__37591);

(invoc_array[(5)] = G__37592);

(invoc_array[(6)] = G__37593);

(invoc_array[(7)] = G__37594);

(invoc_array[(8)] = G__37595);

(invoc_array[(9)] = G__37596);

(invoc_array[(10)] = G__37597);

(invoc_array[(11)] = G__37598);

(invoc_array[(12)] = G__37599);

(invoc_array[(13)] = G__37600);

(invoc_array[(14)] = G__37601);

(invoc_array[(15)] = G__37602);

(invoc_array[vararg_idx] = G__37603);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,var_args){
var G__37603 = null;
if (arguments.length > 16) {
var G__38046__i = 0, G__38046__a = new Array(arguments.length -  16);
while (G__38046__i < G__38046__a.length) {G__38046__a[G__38046__i] = arguments[G__38046__i + 16]; ++G__38046__i;}
  G__37603 = new cljs.core.IndexedSeq(G__38046__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__38047){
var G__37587 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37588 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37589 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37590 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37591 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37592 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37593 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37594 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37595 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37596 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37597 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37598 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37599 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37600 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37601 = cljs.core.first(arglist__38047);
arglist__38047 = cljs.core.next(arglist__38047);
var G__37602 = cljs.core.first(arglist__38047);
var G__37603 = cljs.core.rest(arglist__38047);
return sci$impl$fns$arity_16__delegate(G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37604);

(invoc_array[(1)] = G__37605);

(invoc_array[(2)] = G__37606);

(invoc_array[(3)] = G__37607);

(invoc_array[(4)] = G__37608);

(invoc_array[(5)] = G__37609);

(invoc_array[(6)] = G__37610);

(invoc_array[(7)] = G__37611);

(invoc_array[(8)] = G__37612);

(invoc_array[(9)] = G__37613);

(invoc_array[(10)] = G__37614);

(invoc_array[(11)] = G__37615);

(invoc_array[(12)] = G__37616);

(invoc_array[(13)] = G__37617);

(invoc_array[(14)] = G__37618);

(invoc_array[(15)] = G__37619);

(invoc_array[(16)] = G__37620);

(invoc_array[vararg_idx] = G__37621);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,var_args){
var G__37621 = null;
if (arguments.length > 17) {
var G__38050__i = 0, G__38050__a = new Array(arguments.length -  17);
while (G__38050__i < G__38050__a.length) {G__38050__a[G__38050__i] = arguments[G__38050__i + 17]; ++G__38050__i;}
  G__37621 = new cljs.core.IndexedSeq(G__38050__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__38051){
var G__37604 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37605 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37606 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37607 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37608 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37609 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37610 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37611 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37612 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37613 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37614 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37615 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37616 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37617 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37618 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37619 = cljs.core.first(arglist__38051);
arglist__38051 = cljs.core.next(arglist__38051);
var G__37620 = cljs.core.first(arglist__38051);
var G__37621 = cljs.core.rest(arglist__38051);
return sci$impl$fns$arity_17__delegate(G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37622);

(invoc_array[(1)] = G__37623);

(invoc_array[(2)] = G__37624);

(invoc_array[(3)] = G__37625);

(invoc_array[(4)] = G__37626);

(invoc_array[(5)] = G__37627);

(invoc_array[(6)] = G__37628);

(invoc_array[(7)] = G__37629);

(invoc_array[(8)] = G__37630);

(invoc_array[(9)] = G__37631);

(invoc_array[(10)] = G__37632);

(invoc_array[(11)] = G__37633);

(invoc_array[(12)] = G__37634);

(invoc_array[(13)] = G__37635);

(invoc_array[(14)] = G__37636);

(invoc_array[(15)] = G__37637);

(invoc_array[(16)] = G__37638);

(invoc_array[(17)] = G__37639);

(invoc_array[vararg_idx] = G__37640);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,var_args){
var G__37640 = null;
if (arguments.length > 18) {
var G__38064__i = 0, G__38064__a = new Array(arguments.length -  18);
while (G__38064__i < G__38064__a.length) {G__38064__a[G__38064__i] = arguments[G__38064__i + 18]; ++G__38064__i;}
  G__37640 = new cljs.core.IndexedSeq(G__38064__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__38065){
var G__37622 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37623 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37624 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37625 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37626 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37627 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37628 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37629 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37630 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37631 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37632 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37633 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37634 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37635 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37636 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37637 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37638 = cljs.core.first(arglist__38065);
arglist__38065 = cljs.core.next(arglist__38065);
var G__37639 = cljs.core.first(arglist__38065);
var G__37640 = cljs.core.rest(arglist__38065);
return sci$impl$fns$arity_18__delegate(G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37641);

(invoc_array[(1)] = G__37642);

(invoc_array[(2)] = G__37643);

(invoc_array[(3)] = G__37644);

(invoc_array[(4)] = G__37645);

(invoc_array[(5)] = G__37646);

(invoc_array[(6)] = G__37647);

(invoc_array[(7)] = G__37648);

(invoc_array[(8)] = G__37649);

(invoc_array[(9)] = G__37650);

(invoc_array[(10)] = G__37651);

(invoc_array[(11)] = G__37652);

(invoc_array[(12)] = G__37653);

(invoc_array[(13)] = G__37654);

(invoc_array[(14)] = G__37655);

(invoc_array[(15)] = G__37656);

(invoc_array[(16)] = G__37657);

(invoc_array[(17)] = G__37658);

(invoc_array[(18)] = G__37659);

(invoc_array[vararg_idx] = G__37660);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,var_args){
var G__37660 = null;
if (arguments.length > 19) {
var G__38067__i = 0, G__38067__a = new Array(arguments.length -  19);
while (G__38067__i < G__38067__a.length) {G__38067__a[G__38067__i] = arguments[G__38067__i + 19]; ++G__38067__i;}
  G__37660 = new cljs.core.IndexedSeq(G__38067__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__38068){
var G__37641 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37642 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37643 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37644 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37645 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37646 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37647 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37648 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37649 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37650 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37651 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37652 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37653 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37654 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37655 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37656 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37657 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37658 = cljs.core.first(arglist__38068);
arglist__38068 = cljs.core.next(arglist__38068);
var G__37659 = cljs.core.first(arglist__38068);
var G__37660 = cljs.core.rest(arglist__38068);
return sci$impl$fns$arity_19__delegate(G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,G__37681){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37661);

(invoc_array[(1)] = G__37662);

(invoc_array[(2)] = G__37663);

(invoc_array[(3)] = G__37664);

(invoc_array[(4)] = G__37665);

(invoc_array[(5)] = G__37666);

(invoc_array[(6)] = G__37667);

(invoc_array[(7)] = G__37668);

(invoc_array[(8)] = G__37669);

(invoc_array[(9)] = G__37670);

(invoc_array[(10)] = G__37671);

(invoc_array[(11)] = G__37672);

(invoc_array[(12)] = G__37673);

(invoc_array[(13)] = G__37674);

(invoc_array[(14)] = G__37675);

(invoc_array[(15)] = G__37676);

(invoc_array[(16)] = G__37677);

(invoc_array[(17)] = G__37678);

(invoc_array[(18)] = G__37679);

(invoc_array[(19)] = G__37680);

(invoc_array[vararg_idx] = G__37681);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,var_args){
var G__37681 = null;
if (arguments.length > 20) {
var G__38069__i = 0, G__38069__a = new Array(arguments.length -  20);
while (G__38069__i < G__38069__a.length) {G__38069__a[G__38069__i] = arguments[G__38069__i + 20]; ++G__38069__i;}
  G__37681 = new cljs.core.IndexedSeq(G__38069__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,G__37681);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__38071){
var G__37661 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37662 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37663 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37664 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37665 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37666 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37667 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37668 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37669 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37670 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37671 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37672 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37673 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37674 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37675 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37676 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37677 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37678 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37679 = cljs.core.first(arglist__38071);
arglist__38071 = cljs.core.next(arglist__38071);
var G__37680 = cljs.core.first(arglist__38071);
var G__37681 = cljs.core.rest(arglist__38071);
return sci$impl$fns$arity_20__delegate(G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,G__37681);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37446)].join('')));

}
})():(function (){var G__37682 = fixed_arity;
switch (G__37682) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36606__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36606__auto__)){
continue;
} else {
return ret__36606__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37683){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37683);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37684,G__37685){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37684);

(invoc_array[(1)] = G__37685);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37686,G__37687,G__37688){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37686);

(invoc_array[(1)] = G__37687);

(invoc_array[(2)] = G__37688);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37689,G__37690,G__37691,G__37692){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37689);

(invoc_array[(1)] = G__37690);

(invoc_array[(2)] = G__37691);

(invoc_array[(3)] = G__37692);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37693,G__37694,G__37695,G__37696,G__37697){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37693);

(invoc_array[(1)] = G__37694);

(invoc_array[(2)] = G__37695);

(invoc_array[(3)] = G__37696);

(invoc_array[(4)] = G__37697);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37698,G__37699,G__37700,G__37701,G__37702,G__37703){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37698);

(invoc_array[(1)] = G__37699);

(invoc_array[(2)] = G__37700);

(invoc_array[(3)] = G__37701);

(invoc_array[(4)] = G__37702);

(invoc_array[(5)] = G__37703);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37704);

(invoc_array[(1)] = G__37705);

(invoc_array[(2)] = G__37706);

(invoc_array[(3)] = G__37707);

(invoc_array[(4)] = G__37708);

(invoc_array[(5)] = G__37709);

(invoc_array[(6)] = G__37710);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37712,G__37713,G__37714,G__37715,G__37716,G__37717,G__37718,G__37719){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37712);

(invoc_array[(1)] = G__37713);

(invoc_array[(2)] = G__37714);

(invoc_array[(3)] = G__37715);

(invoc_array[(4)] = G__37716);

(invoc_array[(5)] = G__37717);

(invoc_array[(6)] = G__37718);

(invoc_array[(7)] = G__37719);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37723,G__37724,G__37725,G__37726,G__37727,G__37728,G__37729,G__37730,G__37731){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37723);

(invoc_array[(1)] = G__37724);

(invoc_array[(2)] = G__37725);

(invoc_array[(3)] = G__37726);

(invoc_array[(4)] = G__37727);

(invoc_array[(5)] = G__37728);

(invoc_array[(6)] = G__37729);

(invoc_array[(7)] = G__37730);

(invoc_array[(8)] = G__37731);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37738,G__37739,G__37740,G__37741,G__37742,G__37743,G__37744,G__37745,G__37746,G__37747){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37738);

(invoc_array[(1)] = G__37739);

(invoc_array[(2)] = G__37740);

(invoc_array[(3)] = G__37741);

(invoc_array[(4)] = G__37742);

(invoc_array[(5)] = G__37743);

(invoc_array[(6)] = G__37744);

(invoc_array[(7)] = G__37745);

(invoc_array[(8)] = G__37746);

(invoc_array[(9)] = G__37747);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37748,G__37749,G__37750,G__37751,G__37752,G__37753,G__37754,G__37755,G__37756,G__37757,G__37758){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37748);

(invoc_array[(1)] = G__37749);

(invoc_array[(2)] = G__37750);

(invoc_array[(3)] = G__37751);

(invoc_array[(4)] = G__37752);

(invoc_array[(5)] = G__37753);

(invoc_array[(6)] = G__37754);

(invoc_array[(7)] = G__37755);

(invoc_array[(8)] = G__37756);

(invoc_array[(9)] = G__37757);

(invoc_array[(10)] = G__37758);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37763,G__37764,G__37765,G__37766,G__37767,G__37768,G__37769,G__37770,G__37771,G__37772,G__37773,G__37774){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37763);

(invoc_array[(1)] = G__37764);

(invoc_array[(2)] = G__37765);

(invoc_array[(3)] = G__37766);

(invoc_array[(4)] = G__37767);

(invoc_array[(5)] = G__37768);

(invoc_array[(6)] = G__37769);

(invoc_array[(7)] = G__37770);

(invoc_array[(8)] = G__37771);

(invoc_array[(9)] = G__37772);

(invoc_array[(10)] = G__37773);

(invoc_array[(11)] = G__37774);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37775,G__37776,G__37777,G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785,G__37786,G__37787){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37775);

(invoc_array[(1)] = G__37776);

(invoc_array[(2)] = G__37777);

(invoc_array[(3)] = G__37778);

(invoc_array[(4)] = G__37779);

(invoc_array[(5)] = G__37780);

(invoc_array[(6)] = G__37781);

(invoc_array[(7)] = G__37782);

(invoc_array[(8)] = G__37783);

(invoc_array[(9)] = G__37784);

(invoc_array[(10)] = G__37785);

(invoc_array[(11)] = G__37786);

(invoc_array[(12)] = G__37787);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37792,G__37793,G__37794,G__37795,G__37796,G__37797,G__37798,G__37799,G__37800,G__37801,G__37802,G__37803,G__37804,G__37805){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37792);

(invoc_array[(1)] = G__37793);

(invoc_array[(2)] = G__37794);

(invoc_array[(3)] = G__37795);

(invoc_array[(4)] = G__37796);

(invoc_array[(5)] = G__37797);

(invoc_array[(6)] = G__37798);

(invoc_array[(7)] = G__37799);

(invoc_array[(8)] = G__37800);

(invoc_array[(9)] = G__37801);

(invoc_array[(10)] = G__37802);

(invoc_array[(11)] = G__37803);

(invoc_array[(12)] = G__37804);

(invoc_array[(13)] = G__37805);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37814,G__37815,G__37816,G__37817,G__37818,G__37819,G__37820,G__37821,G__37822,G__37823,G__37824,G__37825,G__37826,G__37827,G__37828){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37814);

(invoc_array[(1)] = G__37815);

(invoc_array[(2)] = G__37816);

(invoc_array[(3)] = G__37817);

(invoc_array[(4)] = G__37818);

(invoc_array[(5)] = G__37819);

(invoc_array[(6)] = G__37820);

(invoc_array[(7)] = G__37821);

(invoc_array[(8)] = G__37822);

(invoc_array[(9)] = G__37823);

(invoc_array[(10)] = G__37824);

(invoc_array[(11)] = G__37825);

(invoc_array[(12)] = G__37826);

(invoc_array[(13)] = G__37827);

(invoc_array[(14)] = G__37828);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37831,G__37832,G__37833,G__37834,G__37835,G__37836,G__37837,G__37838,G__37839,G__37840,G__37841,G__37842,G__37843,G__37844,G__37845,G__37846){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37831);

(invoc_array[(1)] = G__37832);

(invoc_array[(2)] = G__37833);

(invoc_array[(3)] = G__37834);

(invoc_array[(4)] = G__37835);

(invoc_array[(5)] = G__37836);

(invoc_array[(6)] = G__37837);

(invoc_array[(7)] = G__37838);

(invoc_array[(8)] = G__37839);

(invoc_array[(9)] = G__37840);

(invoc_array[(10)] = G__37841);

(invoc_array[(11)] = G__37842);

(invoc_array[(12)] = G__37843);

(invoc_array[(13)] = G__37844);

(invoc_array[(14)] = G__37845);

(invoc_array[(15)] = G__37846);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37850,G__37851,G__37852,G__37853,G__37854,G__37855,G__37856,G__37857,G__37858,G__37859,G__37860,G__37861,G__37862,G__37863,G__37864,G__37865,G__37866){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37850);

(invoc_array[(1)] = G__37851);

(invoc_array[(2)] = G__37852);

(invoc_array[(3)] = G__37853);

(invoc_array[(4)] = G__37854);

(invoc_array[(5)] = G__37855);

(invoc_array[(6)] = G__37856);

(invoc_array[(7)] = G__37857);

(invoc_array[(8)] = G__37858);

(invoc_array[(9)] = G__37859);

(invoc_array[(10)] = G__37860);

(invoc_array[(11)] = G__37861);

(invoc_array[(12)] = G__37862);

(invoc_array[(13)] = G__37863);

(invoc_array[(14)] = G__37864);

(invoc_array[(15)] = G__37865);

(invoc_array[(16)] = G__37866);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37871,G__37872,G__37873,G__37874,G__37875,G__37876,G__37877,G__37878,G__37879,G__37880,G__37881,G__37882,G__37883,G__37884,G__37885,G__37886,G__37887,G__37888){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37871);

(invoc_array[(1)] = G__37872);

(invoc_array[(2)] = G__37873);

(invoc_array[(3)] = G__37874);

(invoc_array[(4)] = G__37875);

(invoc_array[(5)] = G__37876);

(invoc_array[(6)] = G__37877);

(invoc_array[(7)] = G__37878);

(invoc_array[(8)] = G__37879);

(invoc_array[(9)] = G__37880);

(invoc_array[(10)] = G__37881);

(invoc_array[(11)] = G__37882);

(invoc_array[(12)] = G__37883);

(invoc_array[(13)] = G__37884);

(invoc_array[(14)] = G__37885);

(invoc_array[(15)] = G__37886);

(invoc_array[(16)] = G__37887);

(invoc_array[(17)] = G__37888);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37894,G__37895,G__37896,G__37897,G__37898,G__37899,G__37900,G__37901,G__37902,G__37903,G__37904,G__37905,G__37906,G__37907,G__37908,G__37909,G__37910,G__37911,G__37912){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37894);

(invoc_array[(1)] = G__37895);

(invoc_array[(2)] = G__37896);

(invoc_array[(3)] = G__37897);

(invoc_array[(4)] = G__37898);

(invoc_array[(5)] = G__37899);

(invoc_array[(6)] = G__37900);

(invoc_array[(7)] = G__37901);

(invoc_array[(8)] = G__37902);

(invoc_array[(9)] = G__37903);

(invoc_array[(10)] = G__37904);

(invoc_array[(11)] = G__37905);

(invoc_array[(12)] = G__37906);

(invoc_array[(13)] = G__37907);

(invoc_array[(14)] = G__37908);

(invoc_array[(15)] = G__37909);

(invoc_array[(16)] = G__37910);

(invoc_array[(17)] = G__37911);

(invoc_array[(18)] = G__37912);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37913,G__37914,G__37915,G__37916,G__37917,G__37918,G__37919,G__37920,G__37921,G__37922,G__37923,G__37924,G__37925,G__37926,G__37927,G__37928,G__37929,G__37930,G__37931,G__37932){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37913);

(invoc_array[(1)] = G__37914);

(invoc_array[(2)] = G__37915);

(invoc_array[(3)] = G__37916);

(invoc_array[(4)] = G__37917);

(invoc_array[(5)] = G__37918);

(invoc_array[(6)] = G__37919);

(invoc_array[(7)] = G__37920);

(invoc_array[(8)] = G__37921);

(invoc_array[(9)] = G__37922);

(invoc_array[(10)] = G__37923);

(invoc_array[(11)] = G__37924);

(invoc_array[(12)] = G__37925);

(invoc_array[(13)] = G__37926);

(invoc_array[(14)] = G__37927);

(invoc_array[(15)] = G__37928);

(invoc_array[(16)] = G__37929);

(invoc_array[(17)] = G__37930);

(invoc_array[(18)] = G__37931);

(invoc_array[(19)] = G__37932);

while(true){
var ret__36607__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36607__auto__)){
continue;
} else {
return ret__36607__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37682)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__38117 = cljs.core.next(params__$1);
var G__38118 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38119 = lets;
params__$1 = G__38117;
new_params = G__38118;
lets = G__38119;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38121 = cljs.core.next(params__$1);
var G__38122 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38123 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38121;
new_params = G__38122;
lets = G__38123;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38126 = arguments.length;
var i__5750__auto___38129 = (0);
while(true){
if((i__5750__auto___38129 < len__5749__auto___38126)){
args__5755__auto__.push((arguments[i__5750__auto___38129]));

var G__38132 = (i__5750__auto___38129 + (1));
i__5750__auto___38129 = G__38132;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__37944 = sig;
var seq__37945 = cljs.core.seq(vec__37944);
var first__37946 = cljs.core.first(seq__37945);
var seq__37945__$1 = cljs.core.next(seq__37945);
var params = first__37946;
var body = seq__37945__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5025__auto__ = conds;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq37939){
var G__37940 = cljs.core.first(seq37939);
var seq37939__$1 = cljs.core.next(seq37939);
var G__37941 = cljs.core.first(seq37939__$1);
var seq37939__$2 = cljs.core.next(seq37939__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37940,G__37941,seq37939__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__38135 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38136 = cljs.core.next(fdecls);
ret = G__38135;
fdecls = G__38136;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38137 = arguments.length;
var i__5750__auto___38138 = (0);
while(true){
if((i__5750__auto___38138 < len__5749__auto___38137)){
args__5755__auto__.push((arguments[i__5750__auto___38138]));

var G__38139 = (i__5750__auto___38138 + (1));
i__5750__auto___38138 = G__38139;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5025__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq37953){
var G__37954 = cljs.core.first(seq37953);
var seq37953__$1 = cljs.core.next(seq37953);
var G__37955 = cljs.core.first(seq37953__$1);
var seq37953__$2 = cljs.core.next(seq37953__$1);
var G__37956 = cljs.core.first(seq37953__$2);
var seq37953__$3 = cljs.core.next(seq37953__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37954,G__37955,G__37956,seq37953__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38150 = arguments.length;
var i__5750__auto___38151 = (0);
while(true){
if((i__5750__auto___38151 < len__5749__auto___38150)){
args__5755__auto__.push((arguments[i__5750__auto___38151]));

var G__38152 = (i__5750__auto___38151 + (1));
i__5750__auto___38151 = G__38152;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__38154 = cljs.core.cons(f,p);
var G__38155 = cljs.core.next(args__$1);
p = G__38154;
args__$1 = G__38155;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38157 = cljs.core.cons(f,p);
var G__38158 = cljs.core.next(args__$1);
p = G__38157;
args__$1 = G__38158;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__38159 = cljs.core.next(fd);
fd = G__38159;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38160 = cljs.core.next(fd);
fd = G__38160;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__38161 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38162 = cljs.core.next(ds);
acc = G__38161;
ds = G__38162;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__38163 = cljs.core.next(p);
var G__38164 = cljs.core.cons(cljs.core.first(p),d);
p = G__38163;
d = G__38164;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq37957){
var G__37958 = cljs.core.first(seq37957);
var seq37957__$1 = cljs.core.next(seq37957);
var G__37959 = cljs.core.first(seq37957__$1);
var seq37957__$2 = cljs.core.next(seq37957__$1);
var G__37960 = cljs.core.first(seq37957__$2);
var seq37957__$3 = cljs.core.next(seq37957__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37958,G__37959,G__37960,seq37957__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
