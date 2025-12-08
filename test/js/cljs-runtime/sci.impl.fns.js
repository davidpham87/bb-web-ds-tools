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
var ret__36622__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36622__auto__)){
continue;
} else {
return ret__36622__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37447 = null;
if (arguments.length > 0) {
var G__38163__i = 0, G__38163__a = new Array(arguments.length -  0);
while (G__38163__i < G__38163__a.length) {G__38163__a[G__38163__i] = arguments[G__38163__i + 0]; ++G__38163__i;}
  G__37447 = new cljs.core.IndexedSeq(G__38163__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37447);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__38164){
var G__37447 = cljs.core.seq(arglist__38164);
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
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37448,var_args){
var G__37449 = null;
if (arguments.length > 1) {
var G__38165__i = 0, G__38165__a = new Array(arguments.length -  1);
while (G__38165__i < G__38165__a.length) {G__38165__a[G__38165__i] = arguments[G__38165__i + 1]; ++G__38165__i;}
  G__37449 = new cljs.core.IndexedSeq(G__38165__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37448,G__37449);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__38166){
var G__37448 = cljs.core.first(arglist__38166);
var G__37449 = cljs.core.rest(arglist__38166);
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
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37450,G__37451,var_args){
var G__37452 = null;
if (arguments.length > 2) {
var G__38169__i = 0, G__38169__a = new Array(arguments.length -  2);
while (G__38169__i < G__38169__a.length) {G__38169__a[G__38169__i] = arguments[G__38169__i + 2]; ++G__38169__i;}
  G__37452 = new cljs.core.IndexedSeq(G__38169__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37450,G__37451,G__37452);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__38171){
var G__37450 = cljs.core.first(arglist__38171);
arglist__38171 = cljs.core.next(arglist__38171);
var G__37451 = cljs.core.first(arglist__38171);
var G__37452 = cljs.core.rest(arglist__38171);
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
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37453,G__37454,G__37455,var_args){
var G__37456 = null;
if (arguments.length > 3) {
var G__38174__i = 0, G__38174__a = new Array(arguments.length -  3);
while (G__38174__i < G__38174__a.length) {G__38174__a[G__38174__i] = arguments[G__38174__i + 3]; ++G__38174__i;}
  G__37456 = new cljs.core.IndexedSeq(G__38174__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37453,G__37454,G__37455,G__37456);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__38175){
var G__37453 = cljs.core.first(arglist__38175);
arglist__38175 = cljs.core.next(arglist__38175);
var G__37454 = cljs.core.first(arglist__38175);
arglist__38175 = cljs.core.next(arglist__38175);
var G__37455 = cljs.core.first(arglist__38175);
var G__37456 = cljs.core.rest(arglist__38175);
return sci$impl$fns$arity_3__delegate(G__37453,G__37454,G__37455,G__37456);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__37461,G__37462,G__37463,G__37464,G__37465){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37461);

(invoc_array[(1)] = G__37462);

(invoc_array[(2)] = G__37463);

(invoc_array[(3)] = G__37464);

(invoc_array[vararg_idx] = G__37465);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37461,G__37462,G__37463,G__37464,var_args){
var G__37465 = null;
if (arguments.length > 4) {
var G__38179__i = 0, G__38179__a = new Array(arguments.length -  4);
while (G__38179__i < G__38179__a.length) {G__38179__a[G__38179__i] = arguments[G__38179__i + 4]; ++G__38179__i;}
  G__37465 = new cljs.core.IndexedSeq(G__38179__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37461,G__37462,G__37463,G__37464,G__37465);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__38180){
var G__37461 = cljs.core.first(arglist__38180);
arglist__38180 = cljs.core.next(arglist__38180);
var G__37462 = cljs.core.first(arglist__38180);
arglist__38180 = cljs.core.next(arglist__38180);
var G__37463 = cljs.core.first(arglist__38180);
arglist__38180 = cljs.core.next(arglist__38180);
var G__37464 = cljs.core.first(arglist__38180);
var G__37465 = cljs.core.rest(arglist__38180);
return sci$impl$fns$arity_4__delegate(G__37461,G__37462,G__37463,G__37464,G__37465);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__37466,G__37467,G__37468,G__37469,G__37470,G__37471){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37466);

(invoc_array[(1)] = G__37467);

(invoc_array[(2)] = G__37468);

(invoc_array[(3)] = G__37469);

(invoc_array[(4)] = G__37470);

(invoc_array[vararg_idx] = G__37471);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37466,G__37467,G__37468,G__37469,G__37470,var_args){
var G__37471 = null;
if (arguments.length > 5) {
var G__38186__i = 0, G__38186__a = new Array(arguments.length -  5);
while (G__38186__i < G__38186__a.length) {G__38186__a[G__38186__i] = arguments[G__38186__i + 5]; ++G__38186__i;}
  G__37471 = new cljs.core.IndexedSeq(G__38186__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__38189){
var G__37466 = cljs.core.first(arglist__38189);
arglist__38189 = cljs.core.next(arglist__38189);
var G__37467 = cljs.core.first(arglist__38189);
arglist__38189 = cljs.core.next(arglist__38189);
var G__37468 = cljs.core.first(arglist__38189);
arglist__38189 = cljs.core.next(arglist__38189);
var G__37469 = cljs.core.first(arglist__38189);
arglist__38189 = cljs.core.next(arglist__38189);
var G__37470 = cljs.core.first(arglist__38189);
var G__37471 = cljs.core.rest(arglist__38189);
return sci$impl$fns$arity_5__delegate(G__37466,G__37467,G__37468,G__37469,G__37470,G__37471);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37472);

(invoc_array[(1)] = G__37473);

(invoc_array[(2)] = G__37474);

(invoc_array[(3)] = G__37475);

(invoc_array[(4)] = G__37476);

(invoc_array[(5)] = G__37477);

(invoc_array[vararg_idx] = G__37478);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,var_args){
var G__37478 = null;
if (arguments.length > 6) {
var G__38193__i = 0, G__38193__a = new Array(arguments.length -  6);
while (G__38193__i < G__38193__a.length) {G__38193__a[G__38193__i] = arguments[G__38193__i + 6]; ++G__38193__i;}
  G__37478 = new cljs.core.IndexedSeq(G__38193__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__38208){
var G__37472 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37473 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37474 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37475 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37476 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37477 = cljs.core.first(arglist__38208);
var G__37478 = cljs.core.rest(arglist__38208);
return sci$impl$fns$arity_6__delegate(G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37479);

(invoc_array[(1)] = G__37480);

(invoc_array[(2)] = G__37481);

(invoc_array[(3)] = G__37482);

(invoc_array[(4)] = G__37483);

(invoc_array[(5)] = G__37484);

(invoc_array[(6)] = G__37485);

(invoc_array[vararg_idx] = G__37486);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,var_args){
var G__37486 = null;
if (arguments.length > 7) {
var G__38209__i = 0, G__38209__a = new Array(arguments.length -  7);
while (G__38209__i < G__38209__a.length) {G__38209__a[G__38209__i] = arguments[G__38209__i + 7]; ++G__38209__i;}
  G__37486 = new cljs.core.IndexedSeq(G__38209__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__38210){
var G__37479 = cljs.core.first(arglist__38210);
arglist__38210 = cljs.core.next(arglist__38210);
var G__37480 = cljs.core.first(arglist__38210);
arglist__38210 = cljs.core.next(arglist__38210);
var G__37481 = cljs.core.first(arglist__38210);
arglist__38210 = cljs.core.next(arglist__38210);
var G__37482 = cljs.core.first(arglist__38210);
arglist__38210 = cljs.core.next(arglist__38210);
var G__37483 = cljs.core.first(arglist__38210);
arglist__38210 = cljs.core.next(arglist__38210);
var G__37484 = cljs.core.first(arglist__38210);
arglist__38210 = cljs.core.next(arglist__38210);
var G__37485 = cljs.core.first(arglist__38210);
var G__37486 = cljs.core.rest(arglist__38210);
return sci$impl$fns$arity_7__delegate(G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37487);

(invoc_array[(1)] = G__37488);

(invoc_array[(2)] = G__37489);

(invoc_array[(3)] = G__37490);

(invoc_array[(4)] = G__37491);

(invoc_array[(5)] = G__37492);

(invoc_array[(6)] = G__37493);

(invoc_array[(7)] = G__37494);

(invoc_array[vararg_idx] = G__37495);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,var_args){
var G__37495 = null;
if (arguments.length > 8) {
var G__38214__i = 0, G__38214__a = new Array(arguments.length -  8);
while (G__38214__i < G__38214__a.length) {G__38214__a[G__38214__i] = arguments[G__38214__i + 8]; ++G__38214__i;}
  G__37495 = new cljs.core.IndexedSeq(G__38214__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__38215){
var G__37487 = cljs.core.first(arglist__38215);
arglist__38215 = cljs.core.next(arglist__38215);
var G__37488 = cljs.core.first(arglist__38215);
arglist__38215 = cljs.core.next(arglist__38215);
var G__37489 = cljs.core.first(arglist__38215);
arglist__38215 = cljs.core.next(arglist__38215);
var G__37490 = cljs.core.first(arglist__38215);
arglist__38215 = cljs.core.next(arglist__38215);
var G__37491 = cljs.core.first(arglist__38215);
arglist__38215 = cljs.core.next(arglist__38215);
var G__37492 = cljs.core.first(arglist__38215);
arglist__38215 = cljs.core.next(arglist__38215);
var G__37493 = cljs.core.first(arglist__38215);
arglist__38215 = cljs.core.next(arglist__38215);
var G__37494 = cljs.core.first(arglist__38215);
var G__37495 = cljs.core.rest(arglist__38215);
return sci$impl$fns$arity_8__delegate(G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37496);

(invoc_array[(1)] = G__37497);

(invoc_array[(2)] = G__37498);

(invoc_array[(3)] = G__37499);

(invoc_array[(4)] = G__37500);

(invoc_array[(5)] = G__37501);

(invoc_array[(6)] = G__37502);

(invoc_array[(7)] = G__37503);

(invoc_array[(8)] = G__37504);

(invoc_array[vararg_idx] = G__37505);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,var_args){
var G__37505 = null;
if (arguments.length > 9) {
var G__38218__i = 0, G__38218__a = new Array(arguments.length -  9);
while (G__38218__i < G__38218__a.length) {G__38218__a[G__38218__i] = arguments[G__38218__i + 9]; ++G__38218__i;}
  G__37505 = new cljs.core.IndexedSeq(G__38218__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__38219){
var G__37496 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37497 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37498 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37499 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37500 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37501 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37502 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37503 = cljs.core.first(arglist__38219);
arglist__38219 = cljs.core.next(arglist__38219);
var G__37504 = cljs.core.first(arglist__38219);
var G__37505 = cljs.core.rest(arglist__38219);
return sci$impl$fns$arity_9__delegate(G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37506);

(invoc_array[(1)] = G__37507);

(invoc_array[(2)] = G__37508);

(invoc_array[(3)] = G__37509);

(invoc_array[(4)] = G__37510);

(invoc_array[(5)] = G__37511);

(invoc_array[(6)] = G__37512);

(invoc_array[(7)] = G__37513);

(invoc_array[(8)] = G__37514);

(invoc_array[(9)] = G__37515);

(invoc_array[vararg_idx] = G__37516);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,var_args){
var G__37516 = null;
if (arguments.length > 10) {
var G__38273__i = 0, G__38273__a = new Array(arguments.length -  10);
while (G__38273__i < G__38273__a.length) {G__38273__a[G__38273__i] = arguments[G__38273__i + 10]; ++G__38273__i;}
  G__37516 = new cljs.core.IndexedSeq(G__38273__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__38276){
var G__37506 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37507 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37508 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37509 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37510 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37511 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37512 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37513 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37514 = cljs.core.first(arglist__38276);
arglist__38276 = cljs.core.next(arglist__38276);
var G__37515 = cljs.core.first(arglist__38276);
var G__37516 = cljs.core.rest(arglist__38276);
return sci$impl$fns$arity_10__delegate(G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37517);

(invoc_array[(1)] = G__37518);

(invoc_array[(2)] = G__37519);

(invoc_array[(3)] = G__37520);

(invoc_array[(4)] = G__37521);

(invoc_array[(5)] = G__37522);

(invoc_array[(6)] = G__37523);

(invoc_array[(7)] = G__37524);

(invoc_array[(8)] = G__37525);

(invoc_array[(9)] = G__37526);

(invoc_array[(10)] = G__37527);

(invoc_array[vararg_idx] = G__37528);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,var_args){
var G__37528 = null;
if (arguments.length > 11) {
var G__38300__i = 0, G__38300__a = new Array(arguments.length -  11);
while (G__38300__i < G__38300__a.length) {G__38300__a[G__38300__i] = arguments[G__38300__i + 11]; ++G__38300__i;}
  G__37528 = new cljs.core.IndexedSeq(G__38300__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__38303){
var G__37517 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37518 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37519 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37520 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37521 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37522 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37523 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37524 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37525 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37526 = cljs.core.first(arglist__38303);
arglist__38303 = cljs.core.next(arglist__38303);
var G__37527 = cljs.core.first(arglist__38303);
var G__37528 = cljs.core.rest(arglist__38303);
return sci$impl$fns$arity_11__delegate(G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37529);

(invoc_array[(1)] = G__37530);

(invoc_array[(2)] = G__37531);

(invoc_array[(3)] = G__37532);

(invoc_array[(4)] = G__37533);

(invoc_array[(5)] = G__37534);

(invoc_array[(6)] = G__37535);

(invoc_array[(7)] = G__37536);

(invoc_array[(8)] = G__37537);

(invoc_array[(9)] = G__37538);

(invoc_array[(10)] = G__37539);

(invoc_array[(11)] = G__37540);

(invoc_array[vararg_idx] = G__37541);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,var_args){
var G__37541 = null;
if (arguments.length > 12) {
var G__38308__i = 0, G__38308__a = new Array(arguments.length -  12);
while (G__38308__i < G__38308__a.length) {G__38308__a[G__38308__i] = arguments[G__38308__i + 12]; ++G__38308__i;}
  G__37541 = new cljs.core.IndexedSeq(G__38308__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__38314){
var G__37529 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37530 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37531 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37532 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37533 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37534 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37535 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37536 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37537 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37538 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37539 = cljs.core.first(arglist__38314);
arglist__38314 = cljs.core.next(arglist__38314);
var G__37540 = cljs.core.first(arglist__38314);
var G__37541 = cljs.core.rest(arglist__38314);
return sci$impl$fns$arity_12__delegate(G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37552);

(invoc_array[(1)] = G__37553);

(invoc_array[(2)] = G__37554);

(invoc_array[(3)] = G__37555);

(invoc_array[(4)] = G__37556);

(invoc_array[(5)] = G__37557);

(invoc_array[(6)] = G__37558);

(invoc_array[(7)] = G__37559);

(invoc_array[(8)] = G__37560);

(invoc_array[(9)] = G__37561);

(invoc_array[(10)] = G__37562);

(invoc_array[(11)] = G__37563);

(invoc_array[(12)] = G__37564);

(invoc_array[vararg_idx] = G__37565);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,var_args){
var G__37565 = null;
if (arguments.length > 13) {
var G__38316__i = 0, G__38316__a = new Array(arguments.length -  13);
while (G__38316__i < G__38316__a.length) {G__38316__a[G__38316__i] = arguments[G__38316__i + 13]; ++G__38316__i;}
  G__37565 = new cljs.core.IndexedSeq(G__38316__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__38317){
var G__37552 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37553 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37554 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37555 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37556 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37557 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37558 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37559 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37560 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37561 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37562 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37563 = cljs.core.first(arglist__38317);
arglist__38317 = cljs.core.next(arglist__38317);
var G__37564 = cljs.core.first(arglist__38317);
var G__37565 = cljs.core.rest(arglist__38317);
return sci$impl$fns$arity_13__delegate(G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37567);

(invoc_array[(1)] = G__37568);

(invoc_array[(2)] = G__37569);

(invoc_array[(3)] = G__37570);

(invoc_array[(4)] = G__37571);

(invoc_array[(5)] = G__37572);

(invoc_array[(6)] = G__37573);

(invoc_array[(7)] = G__37574);

(invoc_array[(8)] = G__37575);

(invoc_array[(9)] = G__37576);

(invoc_array[(10)] = G__37577);

(invoc_array[(11)] = G__37578);

(invoc_array[(12)] = G__37579);

(invoc_array[(13)] = G__37580);

(invoc_array[vararg_idx] = G__37581);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,var_args){
var G__37581 = null;
if (arguments.length > 14) {
var G__38318__i = 0, G__38318__a = new Array(arguments.length -  14);
while (G__38318__i < G__38318__a.length) {G__38318__a[G__38318__i] = arguments[G__38318__i + 14]; ++G__38318__i;}
  G__37581 = new cljs.core.IndexedSeq(G__38318__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__38319){
var G__37567 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37568 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37569 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37570 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37571 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37572 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37573 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37574 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37575 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37576 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37577 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37578 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37579 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37580 = cljs.core.first(arglist__38319);
var G__37581 = cljs.core.rest(arglist__38319);
return sci$impl$fns$arity_14__delegate(G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37586);

(invoc_array[(1)] = G__37587);

(invoc_array[(2)] = G__37588);

(invoc_array[(3)] = G__37589);

(invoc_array[(4)] = G__37590);

(invoc_array[(5)] = G__37591);

(invoc_array[(6)] = G__37592);

(invoc_array[(7)] = G__37593);

(invoc_array[(8)] = G__37594);

(invoc_array[(9)] = G__37595);

(invoc_array[(10)] = G__37596);

(invoc_array[(11)] = G__37597);

(invoc_array[(12)] = G__37598);

(invoc_array[(13)] = G__37599);

(invoc_array[(14)] = G__37600);

(invoc_array[vararg_idx] = G__37601);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,var_args){
var G__37601 = null;
if (arguments.length > 15) {
var G__38328__i = 0, G__38328__a = new Array(arguments.length -  15);
while (G__38328__i < G__38328__a.length) {G__38328__a[G__38328__i] = arguments[G__38328__i + 15]; ++G__38328__i;}
  G__37601 = new cljs.core.IndexedSeq(G__38328__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__38329){
var G__37586 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37587 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37588 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37589 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37590 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37591 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37592 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37593 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37594 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37595 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37596 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37597 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37598 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37599 = cljs.core.first(arglist__38329);
arglist__38329 = cljs.core.next(arglist__38329);
var G__37600 = cljs.core.first(arglist__38329);
var G__37601 = cljs.core.rest(arglist__38329);
return sci$impl$fns$arity_15__delegate(G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37609);

(invoc_array[(1)] = G__37610);

(invoc_array[(2)] = G__37611);

(invoc_array[(3)] = G__37612);

(invoc_array[(4)] = G__37613);

(invoc_array[(5)] = G__37614);

(invoc_array[(6)] = G__37615);

(invoc_array[(7)] = G__37616);

(invoc_array[(8)] = G__37617);

(invoc_array[(9)] = G__37618);

(invoc_array[(10)] = G__37619);

(invoc_array[(11)] = G__37620);

(invoc_array[(12)] = G__37621);

(invoc_array[(13)] = G__37622);

(invoc_array[(14)] = G__37623);

(invoc_array[(15)] = G__37624);

(invoc_array[vararg_idx] = G__37625);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,var_args){
var G__37625 = null;
if (arguments.length > 16) {
var G__38330__i = 0, G__38330__a = new Array(arguments.length -  16);
while (G__38330__i < G__38330__a.length) {G__38330__a[G__38330__i] = arguments[G__38330__i + 16]; ++G__38330__i;}
  G__37625 = new cljs.core.IndexedSeq(G__38330__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__38331){
var G__37609 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37610 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37611 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37612 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37613 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37614 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37615 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37616 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37617 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37618 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37619 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37620 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37621 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37622 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37623 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37624 = cljs.core.first(arglist__38331);
var G__37625 = cljs.core.rest(arglist__38331);
return sci$impl$fns$arity_16__delegate(G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37630);

(invoc_array[(1)] = G__37631);

(invoc_array[(2)] = G__37632);

(invoc_array[(3)] = G__37633);

(invoc_array[(4)] = G__37634);

(invoc_array[(5)] = G__37635);

(invoc_array[(6)] = G__37636);

(invoc_array[(7)] = G__37637);

(invoc_array[(8)] = G__37638);

(invoc_array[(9)] = G__37639);

(invoc_array[(10)] = G__37640);

(invoc_array[(11)] = G__37641);

(invoc_array[(12)] = G__37642);

(invoc_array[(13)] = G__37643);

(invoc_array[(14)] = G__37644);

(invoc_array[(15)] = G__37645);

(invoc_array[(16)] = G__37646);

(invoc_array[vararg_idx] = G__37647);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,var_args){
var G__37647 = null;
if (arguments.length > 17) {
var G__38336__i = 0, G__38336__a = new Array(arguments.length -  17);
while (G__38336__i < G__38336__a.length) {G__38336__a[G__38336__i] = arguments[G__38336__i + 17]; ++G__38336__i;}
  G__37647 = new cljs.core.IndexedSeq(G__38336__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__38337){
var G__37630 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37631 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37632 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37633 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37634 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37635 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37636 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37637 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37638 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37639 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37640 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37641 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37642 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37643 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37644 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37645 = cljs.core.first(arglist__38337);
arglist__38337 = cljs.core.next(arglist__38337);
var G__37646 = cljs.core.first(arglist__38337);
var G__37647 = cljs.core.rest(arglist__38337);
return sci$impl$fns$arity_17__delegate(G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37648);

(invoc_array[(1)] = G__37649);

(invoc_array[(2)] = G__37650);

(invoc_array[(3)] = G__37651);

(invoc_array[(4)] = G__37652);

(invoc_array[(5)] = G__37653);

(invoc_array[(6)] = G__37654);

(invoc_array[(7)] = G__37655);

(invoc_array[(8)] = G__37656);

(invoc_array[(9)] = G__37657);

(invoc_array[(10)] = G__37658);

(invoc_array[(11)] = G__37659);

(invoc_array[(12)] = G__37660);

(invoc_array[(13)] = G__37661);

(invoc_array[(14)] = G__37662);

(invoc_array[(15)] = G__37663);

(invoc_array[(16)] = G__37664);

(invoc_array[(17)] = G__37665);

(invoc_array[vararg_idx] = G__37666);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,var_args){
var G__37666 = null;
if (arguments.length > 18) {
var G__38342__i = 0, G__38342__a = new Array(arguments.length -  18);
while (G__38342__i < G__38342__a.length) {G__38342__a[G__38342__i] = arguments[G__38342__i + 18]; ++G__38342__i;}
  G__37666 = new cljs.core.IndexedSeq(G__38342__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__38343){
var G__37648 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37649 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37650 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37651 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37652 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37653 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37654 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37655 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37656 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37657 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37658 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37659 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37660 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37661 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37662 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37663 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37664 = cljs.core.first(arglist__38343);
arglist__38343 = cljs.core.next(arglist__38343);
var G__37665 = cljs.core.first(arglist__38343);
var G__37666 = cljs.core.rest(arglist__38343);
return sci$impl$fns$arity_18__delegate(G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,G__37681,G__37682,G__37683,G__37684,G__37685,G__37686){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37667);

(invoc_array[(1)] = G__37668);

(invoc_array[(2)] = G__37669);

(invoc_array[(3)] = G__37670);

(invoc_array[(4)] = G__37671);

(invoc_array[(5)] = G__37672);

(invoc_array[(6)] = G__37673);

(invoc_array[(7)] = G__37674);

(invoc_array[(8)] = G__37675);

(invoc_array[(9)] = G__37676);

(invoc_array[(10)] = G__37677);

(invoc_array[(11)] = G__37678);

(invoc_array[(12)] = G__37679);

(invoc_array[(13)] = G__37680);

(invoc_array[(14)] = G__37681);

(invoc_array[(15)] = G__37682);

(invoc_array[(16)] = G__37683);

(invoc_array[(17)] = G__37684);

(invoc_array[(18)] = G__37685);

(invoc_array[vararg_idx] = G__37686);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,G__37681,G__37682,G__37683,G__37684,G__37685,var_args){
var G__37686 = null;
if (arguments.length > 19) {
var G__38344__i = 0, G__38344__a = new Array(arguments.length -  19);
while (G__38344__i < G__38344__a.length) {G__38344__a[G__38344__i] = arguments[G__38344__i + 19]; ++G__38344__i;}
  G__37686 = new cljs.core.IndexedSeq(G__38344__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,G__37681,G__37682,G__37683,G__37684,G__37685,G__37686);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__38345){
var G__37667 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37668 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37669 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37670 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37671 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37672 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37673 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37674 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37675 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37676 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37677 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37678 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37679 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37680 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37681 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37682 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37683 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37684 = cljs.core.first(arglist__38345);
arglist__38345 = cljs.core.next(arglist__38345);
var G__37685 = cljs.core.first(arglist__38345);
var G__37686 = cljs.core.rest(arglist__38345);
return sci$impl$fns$arity_19__delegate(G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679,G__37680,G__37681,G__37682,G__37683,G__37684,G__37685,G__37686);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37691,G__37692,G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703,G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710,G__37711){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37691);

(invoc_array[(1)] = G__37692);

(invoc_array[(2)] = G__37693);

(invoc_array[(3)] = G__37694);

(invoc_array[(4)] = G__37695);

(invoc_array[(5)] = G__37696);

(invoc_array[(6)] = G__37697);

(invoc_array[(7)] = G__37698);

(invoc_array[(8)] = G__37699);

(invoc_array[(9)] = G__37700);

(invoc_array[(10)] = G__37701);

(invoc_array[(11)] = G__37702);

(invoc_array[(12)] = G__37703);

(invoc_array[(13)] = G__37704);

(invoc_array[(14)] = G__37705);

(invoc_array[(15)] = G__37706);

(invoc_array[(16)] = G__37707);

(invoc_array[(17)] = G__37708);

(invoc_array[(18)] = G__37709);

(invoc_array[(19)] = G__37710);

(invoc_array[vararg_idx] = G__37711);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37691,G__37692,G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703,G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710,var_args){
var G__37711 = null;
if (arguments.length > 20) {
var G__38354__i = 0, G__38354__a = new Array(arguments.length -  20);
while (G__38354__i < G__38354__a.length) {G__38354__a[G__38354__i] = arguments[G__38354__i + 20]; ++G__38354__i;}
  G__37711 = new cljs.core.IndexedSeq(G__38354__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37691,G__37692,G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703,G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710,G__37711);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__38355){
var G__37691 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37692 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37693 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37694 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37695 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37696 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37697 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37698 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37699 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37700 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37701 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37702 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37703 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37704 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37705 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37706 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37707 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37708 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37709 = cljs.core.first(arglist__38355);
arglist__38355 = cljs.core.next(arglist__38355);
var G__37710 = cljs.core.first(arglist__38355);
var G__37711 = cljs.core.rest(arglist__38355);
return sci$impl$fns$arity_20__delegate(G__37691,G__37692,G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703,G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710,G__37711);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37446)].join('')));

}
})():(function (){var G__37712 = fixed_arity;
switch (G__37712) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36622__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36622__auto__)){
continue;
} else {
return ret__36622__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37715){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37715);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37716,G__37717){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37716);

(invoc_array[(1)] = G__37717);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37720,G__37721,G__37722){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37720);

(invoc_array[(1)] = G__37721);

(invoc_array[(2)] = G__37722);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37726,G__37727,G__37728,G__37729){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37726);

(invoc_array[(1)] = G__37727);

(invoc_array[(2)] = G__37728);

(invoc_array[(3)] = G__37729);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37730,G__37731,G__37732,G__37733,G__37734){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37730);

(invoc_array[(1)] = G__37731);

(invoc_array[(2)] = G__37732);

(invoc_array[(3)] = G__37733);

(invoc_array[(4)] = G__37734);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37735,G__37736,G__37737,G__37738,G__37739,G__37740){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37735);

(invoc_array[(1)] = G__37736);

(invoc_array[(2)] = G__37737);

(invoc_array[(3)] = G__37738);

(invoc_array[(4)] = G__37739);

(invoc_array[(5)] = G__37740);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37744,G__37745,G__37746,G__37747,G__37748,G__37749,G__37750){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37744);

(invoc_array[(1)] = G__37745);

(invoc_array[(2)] = G__37746);

(invoc_array[(3)] = G__37747);

(invoc_array[(4)] = G__37748);

(invoc_array[(5)] = G__37749);

(invoc_array[(6)] = G__37750);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37754,G__37755,G__37756,G__37757,G__37758,G__37759,G__37760,G__37761){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37754);

(invoc_array[(1)] = G__37755);

(invoc_array[(2)] = G__37756);

(invoc_array[(3)] = G__37757);

(invoc_array[(4)] = G__37758);

(invoc_array[(5)] = G__37759);

(invoc_array[(6)] = G__37760);

(invoc_array[(7)] = G__37761);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37762,G__37763,G__37764,G__37765,G__37766,G__37767,G__37768,G__37769,G__37770){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37762);

(invoc_array[(1)] = G__37763);

(invoc_array[(2)] = G__37764);

(invoc_array[(3)] = G__37765);

(invoc_array[(4)] = G__37766);

(invoc_array[(5)] = G__37767);

(invoc_array[(6)] = G__37768);

(invoc_array[(7)] = G__37769);

(invoc_array[(8)] = G__37770);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785,G__37786,G__37787){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37778);

(invoc_array[(1)] = G__37779);

(invoc_array[(2)] = G__37780);

(invoc_array[(3)] = G__37781);

(invoc_array[(4)] = G__37782);

(invoc_array[(5)] = G__37783);

(invoc_array[(6)] = G__37784);

(invoc_array[(7)] = G__37785);

(invoc_array[(8)] = G__37786);

(invoc_array[(9)] = G__37787);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37788,G__37789,G__37790,G__37791,G__37792,G__37793,G__37794,G__37795,G__37796,G__37797,G__37798){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37788);

(invoc_array[(1)] = G__37789);

(invoc_array[(2)] = G__37790);

(invoc_array[(3)] = G__37791);

(invoc_array[(4)] = G__37792);

(invoc_array[(5)] = G__37793);

(invoc_array[(6)] = G__37794);

(invoc_array[(7)] = G__37795);

(invoc_array[(8)] = G__37796);

(invoc_array[(9)] = G__37797);

(invoc_array[(10)] = G__37798);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37811,G__37812,G__37813,G__37814,G__37815,G__37816,G__37817,G__37818,G__37819,G__37820,G__37821,G__37822){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37811);

(invoc_array[(1)] = G__37812);

(invoc_array[(2)] = G__37813);

(invoc_array[(3)] = G__37814);

(invoc_array[(4)] = G__37815);

(invoc_array[(5)] = G__37816);

(invoc_array[(6)] = G__37817);

(invoc_array[(7)] = G__37818);

(invoc_array[(8)] = G__37819);

(invoc_array[(9)] = G__37820);

(invoc_array[(10)] = G__37821);

(invoc_array[(11)] = G__37822);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37827,G__37828,G__37829,G__37830,G__37831,G__37832,G__37833,G__37834,G__37835,G__37836,G__37837,G__37838,G__37839){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37827);

(invoc_array[(1)] = G__37828);

(invoc_array[(2)] = G__37829);

(invoc_array[(3)] = G__37830);

(invoc_array[(4)] = G__37831);

(invoc_array[(5)] = G__37832);

(invoc_array[(6)] = G__37833);

(invoc_array[(7)] = G__37834);

(invoc_array[(8)] = G__37835);

(invoc_array[(9)] = G__37836);

(invoc_array[(10)] = G__37837);

(invoc_array[(11)] = G__37838);

(invoc_array[(12)] = G__37839);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37850,G__37851,G__37852,G__37853,G__37854,G__37855,G__37856,G__37857,G__37858,G__37859,G__37860,G__37861,G__37862,G__37863){
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

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37871,G__37872,G__37873,G__37874,G__37875,G__37876,G__37877,G__37878,G__37879,G__37880,G__37881,G__37882,G__37883,G__37884,G__37885){
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

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37899,G__37900,G__37901,G__37902,G__37903,G__37904,G__37905,G__37906,G__37907,G__37908,G__37909,G__37910,G__37911,G__37912,G__37913,G__37914){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37899);

(invoc_array[(1)] = G__37900);

(invoc_array[(2)] = G__37901);

(invoc_array[(3)] = G__37902);

(invoc_array[(4)] = G__37903);

(invoc_array[(5)] = G__37904);

(invoc_array[(6)] = G__37905);

(invoc_array[(7)] = G__37906);

(invoc_array[(8)] = G__37907);

(invoc_array[(9)] = G__37908);

(invoc_array[(10)] = G__37909);

(invoc_array[(11)] = G__37910);

(invoc_array[(12)] = G__37911);

(invoc_array[(13)] = G__37912);

(invoc_array[(14)] = G__37913);

(invoc_array[(15)] = G__37914);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37915,G__37916,G__37917,G__37918,G__37919,G__37920,G__37921,G__37922,G__37923,G__37924,G__37925,G__37926,G__37927,G__37928,G__37929,G__37930,G__37931){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37915);

(invoc_array[(1)] = G__37916);

(invoc_array[(2)] = G__37917);

(invoc_array[(3)] = G__37918);

(invoc_array[(4)] = G__37919);

(invoc_array[(5)] = G__37920);

(invoc_array[(6)] = G__37921);

(invoc_array[(7)] = G__37922);

(invoc_array[(8)] = G__37923);

(invoc_array[(9)] = G__37924);

(invoc_array[(10)] = G__37925);

(invoc_array[(11)] = G__37926);

(invoc_array[(12)] = G__37927);

(invoc_array[(13)] = G__37928);

(invoc_array[(14)] = G__37929);

(invoc_array[(15)] = G__37930);

(invoc_array[(16)] = G__37931);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37939,G__37959,G__37960,G__37961,G__37962,G__37963,G__37964,G__37965,G__37966,G__37967,G__37968,G__37969,G__37970,G__37971,G__37972,G__37973,G__37974,G__37975){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37939);

(invoc_array[(1)] = G__37959);

(invoc_array[(2)] = G__37960);

(invoc_array[(3)] = G__37961);

(invoc_array[(4)] = G__37962);

(invoc_array[(5)] = G__37963);

(invoc_array[(6)] = G__37964);

(invoc_array[(7)] = G__37965);

(invoc_array[(8)] = G__37966);

(invoc_array[(9)] = G__37967);

(invoc_array[(10)] = G__37968);

(invoc_array[(11)] = G__37969);

(invoc_array[(12)] = G__37970);

(invoc_array[(13)] = G__37971);

(invoc_array[(14)] = G__37972);

(invoc_array[(15)] = G__37973);

(invoc_array[(16)] = G__37974);

(invoc_array[(17)] = G__37975);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37978,G__37979,G__37980,G__37981,G__37982,G__37983,G__37984,G__37985,G__37986,G__37987,G__37988,G__37989,G__37990,G__37991,G__37992,G__37993,G__37994,G__37995,G__37996){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37978);

(invoc_array[(1)] = G__37979);

(invoc_array[(2)] = G__37980);

(invoc_array[(3)] = G__37981);

(invoc_array[(4)] = G__37982);

(invoc_array[(5)] = G__37983);

(invoc_array[(6)] = G__37984);

(invoc_array[(7)] = G__37985);

(invoc_array[(8)] = G__37986);

(invoc_array[(9)] = G__37987);

(invoc_array[(10)] = G__37988);

(invoc_array[(11)] = G__37989);

(invoc_array[(12)] = G__37990);

(invoc_array[(13)] = G__37991);

(invoc_array[(14)] = G__37992);

(invoc_array[(15)] = G__37993);

(invoc_array[(16)] = G__37994);

(invoc_array[(17)] = G__37995);

(invoc_array[(18)] = G__37996);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__38014,G__38015,G__38016,G__38017,G__38018,G__38019,G__38020,G__38021,G__38022,G__38023,G__38024,G__38025,G__38026,G__38027,G__38028,G__38029,G__38030,G__38031,G__38032,G__38033){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__38014);

(invoc_array[(1)] = G__38015);

(invoc_array[(2)] = G__38016);

(invoc_array[(3)] = G__38017);

(invoc_array[(4)] = G__38018);

(invoc_array[(5)] = G__38019);

(invoc_array[(6)] = G__38020);

(invoc_array[(7)] = G__38021);

(invoc_array[(8)] = G__38022);

(invoc_array[(9)] = G__38023);

(invoc_array[(10)] = G__38024);

(invoc_array[(11)] = G__38025);

(invoc_array[(12)] = G__38026);

(invoc_array[(13)] = G__38027);

(invoc_array[(14)] = G__38028);

(invoc_array[(15)] = G__38029);

(invoc_array[(16)] = G__38030);

(invoc_array[(17)] = G__38031);

(invoc_array[(18)] = G__38032);

(invoc_array[(19)] = G__38033);

while(true){
var ret__36623__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36623__auto__)){
continue;
} else {
return ret__36623__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37712)].join('')));

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
var G__38395 = cljs.core.next(params__$1);
var G__38396 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38397 = lets;
params__$1 = G__38395;
new_params = G__38396;
lets = G__38397;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38398 = cljs.core.next(params__$1);
var G__38399 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38398;
new_params = G__38399;
lets = G__38400;
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
var len__5749__auto___38401 = arguments.length;
var i__5750__auto___38402 = (0);
while(true){
if((i__5750__auto___38402 < len__5749__auto___38401)){
args__5755__auto__.push((arguments[i__5750__auto___38402]));

var G__38403 = (i__5750__auto___38402 + (1));
i__5750__auto___38402 = G__38403;
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

var vec__38082 = sig;
var seq__38083 = cljs.core.seq(vec__38082);
var first__38084 = cljs.core.first(seq__38083);
var seq__38083__$1 = cljs.core.next(seq__38083);
var params = first__38084;
var body = seq__38083__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq38071){
var G__38072 = cljs.core.first(seq38071);
var seq38071__$1 = cljs.core.next(seq38071);
var G__38074 = cljs.core.first(seq38071__$1);
var seq38071__$2 = cljs.core.next(seq38071__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38072,G__38074,seq38071__$2);
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
var G__38415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38416 = cljs.core.next(fdecls);
ret = G__38415;
fdecls = G__38416;
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
var len__5749__auto___38423 = arguments.length;
var i__5750__auto___38425 = (0);
while(true){
if((i__5750__auto___38425 < len__5749__auto___38423)){
args__5755__auto__.push((arguments[i__5750__auto___38425]));

var G__38426 = (i__5750__auto___38425 + (1));
i__5750__auto___38425 = G__38426;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq38120){
var G__38121 = cljs.core.first(seq38120);
var seq38120__$1 = cljs.core.next(seq38120);
var G__38122 = cljs.core.first(seq38120__$1);
var seq38120__$2 = cljs.core.next(seq38120__$1);
var G__38123 = cljs.core.first(seq38120__$2);
var seq38120__$3 = cljs.core.next(seq38120__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38121,G__38122,G__38123,seq38120__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38454 = arguments.length;
var i__5750__auto___38456 = (0);
while(true){
if((i__5750__auto___38456 < len__5749__auto___38454)){
args__5755__auto__.push((arguments[i__5750__auto___38456]));

var G__38457 = (i__5750__auto___38456 + (1));
i__5750__auto___38456 = G__38457;
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
var G__38458 = cljs.core.cons(f,p);
var G__38459 = cljs.core.next(args__$1);
p = G__38458;
args__$1 = G__38459;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38460 = cljs.core.cons(f,p);
var G__38461 = cljs.core.next(args__$1);
p = G__38460;
args__$1 = G__38461;
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
var G__38462 = cljs.core.next(fd);
fd = G__38462;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38463 = cljs.core.next(fd);
fd = G__38463;
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
var G__38464 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38465 = cljs.core.next(ds);
acc = G__38464;
ds = G__38465;
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
var G__38467 = cljs.core.next(p);
var G__38468 = cljs.core.cons(cljs.core.first(p),d);
p = G__38467;
d = G__38468;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq38132){
var G__38133 = cljs.core.first(seq38132);
var seq38132__$1 = cljs.core.next(seq38132);
var G__38134 = cljs.core.first(seq38132__$1);
var seq38132__$2 = cljs.core.next(seq38132__$1);
var G__38135 = cljs.core.first(seq38132__$2);
var seq38132__$3 = cljs.core.next(seq38132__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38133,G__38134,G__38135,seq38132__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
