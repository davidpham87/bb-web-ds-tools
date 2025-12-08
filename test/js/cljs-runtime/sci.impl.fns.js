goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__37389 = arguments.length;
switch (G__37389) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__37390 = fixed_arity;
switch (G__37390) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__37391){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__37391);

while(true){
var ret__36566__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36566__auto__)){
continue;
} else {
return ret__36566__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37391 = null;
if (arguments.length > 0) {
var G__37914__i = 0, G__37914__a = new Array(arguments.length -  0);
while (G__37914__i < G__37914__a.length) {G__37914__a[G__37914__i] = arguments[G__37914__i + 0]; ++G__37914__i;}
  G__37391 = new cljs.core.IndexedSeq(G__37914__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37391);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__37915){
var G__37391 = cljs.core.seq(arglist__37915);
return sci$impl$fns$arity_0__delegate(G__37391);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__37392,G__37393){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37392);

(invoc_array[vararg_idx] = G__37393);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37392,var_args){
var G__37393 = null;
if (arguments.length > 1) {
var G__37917__i = 0, G__37917__a = new Array(arguments.length -  1);
while (G__37917__i < G__37917__a.length) {G__37917__a[G__37917__i] = arguments[G__37917__i + 1]; ++G__37917__i;}
  G__37393 = new cljs.core.IndexedSeq(G__37917__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37392,G__37393);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__37918){
var G__37392 = cljs.core.first(arglist__37918);
var G__37393 = cljs.core.rest(arglist__37918);
return sci$impl$fns$arity_1__delegate(G__37392,G__37393);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__37394,G__37395,G__37396){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37394);

(invoc_array[(1)] = G__37395);

(invoc_array[vararg_idx] = G__37396);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37394,G__37395,var_args){
var G__37396 = null;
if (arguments.length > 2) {
var G__37919__i = 0, G__37919__a = new Array(arguments.length -  2);
while (G__37919__i < G__37919__a.length) {G__37919__a[G__37919__i] = arguments[G__37919__i + 2]; ++G__37919__i;}
  G__37396 = new cljs.core.IndexedSeq(G__37919__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37394,G__37395,G__37396);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__37920){
var G__37394 = cljs.core.first(arglist__37920);
arglist__37920 = cljs.core.next(arglist__37920);
var G__37395 = cljs.core.first(arglist__37920);
var G__37396 = cljs.core.rest(arglist__37920);
return sci$impl$fns$arity_2__delegate(G__37394,G__37395,G__37396);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__37397,G__37398,G__37399,G__37400){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37397);

(invoc_array[(1)] = G__37398);

(invoc_array[(2)] = G__37399);

(invoc_array[vararg_idx] = G__37400);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37397,G__37398,G__37399,var_args){
var G__37400 = null;
if (arguments.length > 3) {
var G__37921__i = 0, G__37921__a = new Array(arguments.length -  3);
while (G__37921__i < G__37921__a.length) {G__37921__a[G__37921__i] = arguments[G__37921__i + 3]; ++G__37921__i;}
  G__37400 = new cljs.core.IndexedSeq(G__37921__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37397,G__37398,G__37399,G__37400);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__37922){
var G__37397 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37398 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37399 = cljs.core.first(arglist__37922);
var G__37400 = cljs.core.rest(arglist__37922);
return sci$impl$fns$arity_3__delegate(G__37397,G__37398,G__37399,G__37400);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__37401,G__37402,G__37403,G__37404,G__37405){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37401);

(invoc_array[(1)] = G__37402);

(invoc_array[(2)] = G__37403);

(invoc_array[(3)] = G__37404);

(invoc_array[vararg_idx] = G__37405);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37401,G__37402,G__37403,G__37404,var_args){
var G__37405 = null;
if (arguments.length > 4) {
var G__37923__i = 0, G__37923__a = new Array(arguments.length -  4);
while (G__37923__i < G__37923__a.length) {G__37923__a[G__37923__i] = arguments[G__37923__i + 4]; ++G__37923__i;}
  G__37405 = new cljs.core.IndexedSeq(G__37923__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37401,G__37402,G__37403,G__37404,G__37405);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__37924){
var G__37401 = cljs.core.first(arglist__37924);
arglist__37924 = cljs.core.next(arglist__37924);
var G__37402 = cljs.core.first(arglist__37924);
arglist__37924 = cljs.core.next(arglist__37924);
var G__37403 = cljs.core.first(arglist__37924);
arglist__37924 = cljs.core.next(arglist__37924);
var G__37404 = cljs.core.first(arglist__37924);
var G__37405 = cljs.core.rest(arglist__37924);
return sci$impl$fns$arity_4__delegate(G__37401,G__37402,G__37403,G__37404,G__37405);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__37406,G__37407,G__37408,G__37409,G__37410,G__37411){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37406);

(invoc_array[(1)] = G__37407);

(invoc_array[(2)] = G__37408);

(invoc_array[(3)] = G__37409);

(invoc_array[(4)] = G__37410);

(invoc_array[vararg_idx] = G__37411);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37406,G__37407,G__37408,G__37409,G__37410,var_args){
var G__37411 = null;
if (arguments.length > 5) {
var G__37925__i = 0, G__37925__a = new Array(arguments.length -  5);
while (G__37925__i < G__37925__a.length) {G__37925__a[G__37925__i] = arguments[G__37925__i + 5]; ++G__37925__i;}
  G__37411 = new cljs.core.IndexedSeq(G__37925__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37406,G__37407,G__37408,G__37409,G__37410,G__37411);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__37926){
var G__37406 = cljs.core.first(arglist__37926);
arglist__37926 = cljs.core.next(arglist__37926);
var G__37407 = cljs.core.first(arglist__37926);
arglist__37926 = cljs.core.next(arglist__37926);
var G__37408 = cljs.core.first(arglist__37926);
arglist__37926 = cljs.core.next(arglist__37926);
var G__37409 = cljs.core.first(arglist__37926);
arglist__37926 = cljs.core.next(arglist__37926);
var G__37410 = cljs.core.first(arglist__37926);
var G__37411 = cljs.core.rest(arglist__37926);
return sci$impl$fns$arity_5__delegate(G__37406,G__37407,G__37408,G__37409,G__37410,G__37411);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37412);

(invoc_array[(1)] = G__37413);

(invoc_array[(2)] = G__37414);

(invoc_array[(3)] = G__37415);

(invoc_array[(4)] = G__37416);

(invoc_array[(5)] = G__37417);

(invoc_array[vararg_idx] = G__37418);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,var_args){
var G__37418 = null;
if (arguments.length > 6) {
var G__37927__i = 0, G__37927__a = new Array(arguments.length -  6);
while (G__37927__i < G__37927__a.length) {G__37927__a[G__37927__i] = arguments[G__37927__i + 6]; ++G__37927__i;}
  G__37418 = new cljs.core.IndexedSeq(G__37927__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__37928){
var G__37412 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37413 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37414 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37415 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37416 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37417 = cljs.core.first(arglist__37928);
var G__37418 = cljs.core.rest(arglist__37928);
return sci$impl$fns$arity_6__delegate(G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37419);

(invoc_array[(1)] = G__37420);

(invoc_array[(2)] = G__37421);

(invoc_array[(3)] = G__37422);

(invoc_array[(4)] = G__37423);

(invoc_array[(5)] = G__37424);

(invoc_array[(6)] = G__37425);

(invoc_array[vararg_idx] = G__37426);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,var_args){
var G__37426 = null;
if (arguments.length > 7) {
var G__37929__i = 0, G__37929__a = new Array(arguments.length -  7);
while (G__37929__i < G__37929__a.length) {G__37929__a[G__37929__i] = arguments[G__37929__i + 7]; ++G__37929__i;}
  G__37426 = new cljs.core.IndexedSeq(G__37929__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__37932){
var G__37419 = cljs.core.first(arglist__37932);
arglist__37932 = cljs.core.next(arglist__37932);
var G__37420 = cljs.core.first(arglist__37932);
arglist__37932 = cljs.core.next(arglist__37932);
var G__37421 = cljs.core.first(arglist__37932);
arglist__37932 = cljs.core.next(arglist__37932);
var G__37422 = cljs.core.first(arglist__37932);
arglist__37932 = cljs.core.next(arglist__37932);
var G__37423 = cljs.core.first(arglist__37932);
arglist__37932 = cljs.core.next(arglist__37932);
var G__37424 = cljs.core.first(arglist__37932);
arglist__37932 = cljs.core.next(arglist__37932);
var G__37425 = cljs.core.first(arglist__37932);
var G__37426 = cljs.core.rest(arglist__37932);
return sci$impl$fns$arity_7__delegate(G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37429,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37429);

(invoc_array[(1)] = G__37432);

(invoc_array[(2)] = G__37433);

(invoc_array[(3)] = G__37434);

(invoc_array[(4)] = G__37435);

(invoc_array[(5)] = G__37436);

(invoc_array[(6)] = G__37437);

(invoc_array[(7)] = G__37438);

(invoc_array[vararg_idx] = G__37439);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37429,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,var_args){
var G__37439 = null;
if (arguments.length > 8) {
var G__37935__i = 0, G__37935__a = new Array(arguments.length -  8);
while (G__37935__i < G__37935__a.length) {G__37935__a[G__37935__i] = arguments[G__37935__i + 8]; ++G__37935__i;}
  G__37439 = new cljs.core.IndexedSeq(G__37935__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37429,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__37936){
var G__37429 = cljs.core.first(arglist__37936);
arglist__37936 = cljs.core.next(arglist__37936);
var G__37432 = cljs.core.first(arglist__37936);
arglist__37936 = cljs.core.next(arglist__37936);
var G__37433 = cljs.core.first(arglist__37936);
arglist__37936 = cljs.core.next(arglist__37936);
var G__37434 = cljs.core.first(arglist__37936);
arglist__37936 = cljs.core.next(arglist__37936);
var G__37435 = cljs.core.first(arglist__37936);
arglist__37936 = cljs.core.next(arglist__37936);
var G__37436 = cljs.core.first(arglist__37936);
arglist__37936 = cljs.core.next(arglist__37936);
var G__37437 = cljs.core.first(arglist__37936);
arglist__37936 = cljs.core.next(arglist__37936);
var G__37438 = cljs.core.first(arglist__37936);
var G__37439 = cljs.core.rest(arglist__37936);
return sci$impl$fns$arity_8__delegate(G__37429,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37440);

(invoc_array[(1)] = G__37441);

(invoc_array[(2)] = G__37442);

(invoc_array[(3)] = G__37443);

(invoc_array[(4)] = G__37444);

(invoc_array[(5)] = G__37445);

(invoc_array[(6)] = G__37446);

(invoc_array[(7)] = G__37447);

(invoc_array[(8)] = G__37448);

(invoc_array[vararg_idx] = G__37449);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,var_args){
var G__37449 = null;
if (arguments.length > 9) {
var G__37937__i = 0, G__37937__a = new Array(arguments.length -  9);
while (G__37937__i < G__37937__a.length) {G__37937__a[G__37937__i] = arguments[G__37937__i + 9]; ++G__37937__i;}
  G__37449 = new cljs.core.IndexedSeq(G__37937__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__37938){
var G__37440 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37441 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37442 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37443 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37444 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37445 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37446 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37447 = cljs.core.first(arglist__37938);
arglist__37938 = cljs.core.next(arglist__37938);
var G__37448 = cljs.core.first(arglist__37938);
var G__37449 = cljs.core.rest(arglist__37938);
return sci$impl$fns$arity_9__delegate(G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37450);

(invoc_array[(1)] = G__37451);

(invoc_array[(2)] = G__37452);

(invoc_array[(3)] = G__37453);

(invoc_array[(4)] = G__37454);

(invoc_array[(5)] = G__37455);

(invoc_array[(6)] = G__37456);

(invoc_array[(7)] = G__37457);

(invoc_array[(8)] = G__37458);

(invoc_array[(9)] = G__37459);

(invoc_array[vararg_idx] = G__37460);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,var_args){
var G__37460 = null;
if (arguments.length > 10) {
var G__37939__i = 0, G__37939__a = new Array(arguments.length -  10);
while (G__37939__i < G__37939__a.length) {G__37939__a[G__37939__i] = arguments[G__37939__i + 10]; ++G__37939__i;}
  G__37460 = new cljs.core.IndexedSeq(G__37939__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__37940){
var G__37450 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37451 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37452 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37453 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37454 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37455 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37456 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37457 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37458 = cljs.core.first(arglist__37940);
arglist__37940 = cljs.core.next(arglist__37940);
var G__37459 = cljs.core.first(arglist__37940);
var G__37460 = cljs.core.rest(arglist__37940);
return sci$impl$fns$arity_10__delegate(G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37461);

(invoc_array[(1)] = G__37462);

(invoc_array[(2)] = G__37463);

(invoc_array[(3)] = G__37464);

(invoc_array[(4)] = G__37465);

(invoc_array[(5)] = G__37466);

(invoc_array[(6)] = G__37467);

(invoc_array[(7)] = G__37468);

(invoc_array[(8)] = G__37469);

(invoc_array[(9)] = G__37470);

(invoc_array[(10)] = G__37471);

(invoc_array[vararg_idx] = G__37472);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,var_args){
var G__37472 = null;
if (arguments.length > 11) {
var G__37945__i = 0, G__37945__a = new Array(arguments.length -  11);
while (G__37945__i < G__37945__a.length) {G__37945__a[G__37945__i] = arguments[G__37945__i + 11]; ++G__37945__i;}
  G__37472 = new cljs.core.IndexedSeq(G__37945__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__37946){
var G__37461 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37462 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37463 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37464 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37465 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37466 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37467 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37468 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37469 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37470 = cljs.core.first(arglist__37946);
arglist__37946 = cljs.core.next(arglist__37946);
var G__37471 = cljs.core.first(arglist__37946);
var G__37472 = cljs.core.rest(arglist__37946);
return sci$impl$fns$arity_11__delegate(G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37473);

(invoc_array[(1)] = G__37474);

(invoc_array[(2)] = G__37475);

(invoc_array[(3)] = G__37476);

(invoc_array[(4)] = G__37477);

(invoc_array[(5)] = G__37478);

(invoc_array[(6)] = G__37479);

(invoc_array[(7)] = G__37480);

(invoc_array[(8)] = G__37481);

(invoc_array[(9)] = G__37482);

(invoc_array[(10)] = G__37483);

(invoc_array[(11)] = G__37484);

(invoc_array[vararg_idx] = G__37485);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,var_args){
var G__37485 = null;
if (arguments.length > 12) {
var G__37949__i = 0, G__37949__a = new Array(arguments.length -  12);
while (G__37949__i < G__37949__a.length) {G__37949__a[G__37949__i] = arguments[G__37949__i + 12]; ++G__37949__i;}
  G__37485 = new cljs.core.IndexedSeq(G__37949__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__37950){
var G__37473 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37474 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37475 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37476 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37477 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37478 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37479 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37480 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37481 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37482 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37483 = cljs.core.first(arglist__37950);
arglist__37950 = cljs.core.next(arglist__37950);
var G__37484 = cljs.core.first(arglist__37950);
var G__37485 = cljs.core.rest(arglist__37950);
return sci$impl$fns$arity_12__delegate(G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37486);

(invoc_array[(1)] = G__37487);

(invoc_array[(2)] = G__37488);

(invoc_array[(3)] = G__37489);

(invoc_array[(4)] = G__37490);

(invoc_array[(5)] = G__37491);

(invoc_array[(6)] = G__37492);

(invoc_array[(7)] = G__37493);

(invoc_array[(8)] = G__37494);

(invoc_array[(9)] = G__37495);

(invoc_array[(10)] = G__37496);

(invoc_array[(11)] = G__37497);

(invoc_array[(12)] = G__37498);

(invoc_array[vararg_idx] = G__37499);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,var_args){
var G__37499 = null;
if (arguments.length > 13) {
var G__37953__i = 0, G__37953__a = new Array(arguments.length -  13);
while (G__37953__i < G__37953__a.length) {G__37953__a[G__37953__i] = arguments[G__37953__i + 13]; ++G__37953__i;}
  G__37499 = new cljs.core.IndexedSeq(G__37953__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__37954){
var G__37486 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37487 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37488 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37489 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37490 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37491 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37492 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37493 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37494 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37495 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37496 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37497 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37498 = cljs.core.first(arglist__37954);
var G__37499 = cljs.core.rest(arglist__37954);
return sci$impl$fns$arity_13__delegate(G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37500);

(invoc_array[(1)] = G__37501);

(invoc_array[(2)] = G__37502);

(invoc_array[(3)] = G__37503);

(invoc_array[(4)] = G__37504);

(invoc_array[(5)] = G__37505);

(invoc_array[(6)] = G__37506);

(invoc_array[(7)] = G__37507);

(invoc_array[(8)] = G__37508);

(invoc_array[(9)] = G__37509);

(invoc_array[(10)] = G__37510);

(invoc_array[(11)] = G__37511);

(invoc_array[(12)] = G__37512);

(invoc_array[(13)] = G__37513);

(invoc_array[vararg_idx] = G__37514);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,var_args){
var G__37514 = null;
if (arguments.length > 14) {
var G__37957__i = 0, G__37957__a = new Array(arguments.length -  14);
while (G__37957__i < G__37957__a.length) {G__37957__a[G__37957__i] = arguments[G__37957__i + 14]; ++G__37957__i;}
  G__37514 = new cljs.core.IndexedSeq(G__37957__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__37960){
var G__37500 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37501 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37502 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37503 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37504 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37505 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37506 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37507 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37508 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37509 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37510 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37511 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37512 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37513 = cljs.core.first(arglist__37960);
var G__37514 = cljs.core.rest(arglist__37960);
return sci$impl$fns$arity_14__delegate(G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37515);

(invoc_array[(1)] = G__37516);

(invoc_array[(2)] = G__37517);

(invoc_array[(3)] = G__37518);

(invoc_array[(4)] = G__37519);

(invoc_array[(5)] = G__37520);

(invoc_array[(6)] = G__37521);

(invoc_array[(7)] = G__37522);

(invoc_array[(8)] = G__37523);

(invoc_array[(9)] = G__37524);

(invoc_array[(10)] = G__37525);

(invoc_array[(11)] = G__37526);

(invoc_array[(12)] = G__37527);

(invoc_array[(13)] = G__37528);

(invoc_array[(14)] = G__37529);

(invoc_array[vararg_idx] = G__37530);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,var_args){
var G__37530 = null;
if (arguments.length > 15) {
var G__37961__i = 0, G__37961__a = new Array(arguments.length -  15);
while (G__37961__i < G__37961__a.length) {G__37961__a[G__37961__i] = arguments[G__37961__i + 15]; ++G__37961__i;}
  G__37530 = new cljs.core.IndexedSeq(G__37961__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__37962){
var G__37515 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37516 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37517 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37518 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37519 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37520 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37521 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37522 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37523 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37524 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37525 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37526 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37527 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37528 = cljs.core.first(arglist__37962);
arglist__37962 = cljs.core.next(arglist__37962);
var G__37529 = cljs.core.first(arglist__37962);
var G__37530 = cljs.core.rest(arglist__37962);
return sci$impl$fns$arity_15__delegate(G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37531);

(invoc_array[(1)] = G__37532);

(invoc_array[(2)] = G__37533);

(invoc_array[(3)] = G__37534);

(invoc_array[(4)] = G__37535);

(invoc_array[(5)] = G__37536);

(invoc_array[(6)] = G__37537);

(invoc_array[(7)] = G__37538);

(invoc_array[(8)] = G__37539);

(invoc_array[(9)] = G__37540);

(invoc_array[(10)] = G__37541);

(invoc_array[(11)] = G__37542);

(invoc_array[(12)] = G__37543);

(invoc_array[(13)] = G__37544);

(invoc_array[(14)] = G__37545);

(invoc_array[(15)] = G__37546);

(invoc_array[vararg_idx] = G__37547);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,var_args){
var G__37547 = null;
if (arguments.length > 16) {
var G__37963__i = 0, G__37963__a = new Array(arguments.length -  16);
while (G__37963__i < G__37963__a.length) {G__37963__a[G__37963__i] = arguments[G__37963__i + 16]; ++G__37963__i;}
  G__37547 = new cljs.core.IndexedSeq(G__37963__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__37964){
var G__37531 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37532 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37533 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37534 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37535 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37536 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37537 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37538 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37539 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37540 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37541 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37542 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37543 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37544 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37545 = cljs.core.first(arglist__37964);
arglist__37964 = cljs.core.next(arglist__37964);
var G__37546 = cljs.core.first(arglist__37964);
var G__37547 = cljs.core.rest(arglist__37964);
return sci$impl$fns$arity_16__delegate(G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37548);

(invoc_array[(1)] = G__37549);

(invoc_array[(2)] = G__37550);

(invoc_array[(3)] = G__37551);

(invoc_array[(4)] = G__37552);

(invoc_array[(5)] = G__37553);

(invoc_array[(6)] = G__37554);

(invoc_array[(7)] = G__37555);

(invoc_array[(8)] = G__37556);

(invoc_array[(9)] = G__37557);

(invoc_array[(10)] = G__37558);

(invoc_array[(11)] = G__37559);

(invoc_array[(12)] = G__37560);

(invoc_array[(13)] = G__37561);

(invoc_array[(14)] = G__37562);

(invoc_array[(15)] = G__37563);

(invoc_array[(16)] = G__37564);

(invoc_array[vararg_idx] = G__37565);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,var_args){
var G__37565 = null;
if (arguments.length > 17) {
var G__37966__i = 0, G__37966__a = new Array(arguments.length -  17);
while (G__37966__i < G__37966__a.length) {G__37966__a[G__37966__i] = arguments[G__37966__i + 17]; ++G__37966__i;}
  G__37565 = new cljs.core.IndexedSeq(G__37966__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__37967){
var G__37548 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37549 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37550 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37551 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37552 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37553 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37554 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37555 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37556 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37557 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37558 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37559 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37560 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37561 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37562 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37563 = cljs.core.first(arglist__37967);
arglist__37967 = cljs.core.next(arglist__37967);
var G__37564 = cljs.core.first(arglist__37967);
var G__37565 = cljs.core.rest(arglist__37967);
return sci$impl$fns$arity_17__delegate(G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37566);

(invoc_array[(1)] = G__37567);

(invoc_array[(2)] = G__37568);

(invoc_array[(3)] = G__37569);

(invoc_array[(4)] = G__37570);

(invoc_array[(5)] = G__37571);

(invoc_array[(6)] = G__37572);

(invoc_array[(7)] = G__37573);

(invoc_array[(8)] = G__37574);

(invoc_array[(9)] = G__37575);

(invoc_array[(10)] = G__37576);

(invoc_array[(11)] = G__37577);

(invoc_array[(12)] = G__37578);

(invoc_array[(13)] = G__37579);

(invoc_array[(14)] = G__37580);

(invoc_array[(15)] = G__37581);

(invoc_array[(16)] = G__37582);

(invoc_array[(17)] = G__37583);

(invoc_array[vararg_idx] = G__37584);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,var_args){
var G__37584 = null;
if (arguments.length > 18) {
var G__37972__i = 0, G__37972__a = new Array(arguments.length -  18);
while (G__37972__i < G__37972__a.length) {G__37972__a[G__37972__i] = arguments[G__37972__i + 18]; ++G__37972__i;}
  G__37584 = new cljs.core.IndexedSeq(G__37972__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__37973){
var G__37566 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37567 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37568 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37569 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37570 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37571 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37572 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37573 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37574 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37575 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37576 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37577 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37578 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37579 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37580 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37581 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37582 = cljs.core.first(arglist__37973);
arglist__37973 = cljs.core.next(arglist__37973);
var G__37583 = cljs.core.first(arglist__37973);
var G__37584 = cljs.core.rest(arglist__37973);
return sci$impl$fns$arity_18__delegate(G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37585);

(invoc_array[(1)] = G__37586);

(invoc_array[(2)] = G__37587);

(invoc_array[(3)] = G__37588);

(invoc_array[(4)] = G__37589);

(invoc_array[(5)] = G__37590);

(invoc_array[(6)] = G__37591);

(invoc_array[(7)] = G__37592);

(invoc_array[(8)] = G__37593);

(invoc_array[(9)] = G__37594);

(invoc_array[(10)] = G__37595);

(invoc_array[(11)] = G__37596);

(invoc_array[(12)] = G__37597);

(invoc_array[(13)] = G__37598);

(invoc_array[(14)] = G__37599);

(invoc_array[(15)] = G__37600);

(invoc_array[(16)] = G__37601);

(invoc_array[(17)] = G__37602);

(invoc_array[(18)] = G__37603);

(invoc_array[vararg_idx] = G__37604);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,var_args){
var G__37604 = null;
if (arguments.length > 19) {
var G__37976__i = 0, G__37976__a = new Array(arguments.length -  19);
while (G__37976__i < G__37976__a.length) {G__37976__a[G__37976__i] = arguments[G__37976__i + 19]; ++G__37976__i;}
  G__37604 = new cljs.core.IndexedSeq(G__37976__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__37977){
var G__37585 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37586 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37587 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37588 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37589 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37590 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37591 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37592 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37593 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37594 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37595 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37596 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37597 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37598 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37599 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37600 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37601 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37602 = cljs.core.first(arglist__37977);
arglist__37977 = cljs.core.next(arglist__37977);
var G__37603 = cljs.core.first(arglist__37977);
var G__37604 = cljs.core.rest(arglist__37977);
return sci$impl$fns$arity_19__delegate(G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37605);

(invoc_array[(1)] = G__37606);

(invoc_array[(2)] = G__37607);

(invoc_array[(3)] = G__37608);

(invoc_array[(4)] = G__37609);

(invoc_array[(5)] = G__37610);

(invoc_array[(6)] = G__37611);

(invoc_array[(7)] = G__37612);

(invoc_array[(8)] = G__37613);

(invoc_array[(9)] = G__37614);

(invoc_array[(10)] = G__37615);

(invoc_array[(11)] = G__37616);

(invoc_array[(12)] = G__37617);

(invoc_array[(13)] = G__37618);

(invoc_array[(14)] = G__37619);

(invoc_array[(15)] = G__37620);

(invoc_array[(16)] = G__37621);

(invoc_array[(17)] = G__37622);

(invoc_array[(18)] = G__37623);

(invoc_array[(19)] = G__37624);

(invoc_array[vararg_idx] = G__37625);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,var_args){
var G__37625 = null;
if (arguments.length > 20) {
var G__37978__i = 0, G__37978__a = new Array(arguments.length -  20);
while (G__37978__i < G__37978__a.length) {G__37978__a[G__37978__i] = arguments[G__37978__i + 20]; ++G__37978__i;}
  G__37625 = new cljs.core.IndexedSeq(G__37978__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__37983){
var G__37605 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37606 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37607 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37608 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37609 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37610 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37611 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37612 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37613 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37614 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37615 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37616 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37617 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37618 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37619 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37620 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37621 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37622 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37623 = cljs.core.first(arglist__37983);
arglist__37983 = cljs.core.next(arglist__37983);
var G__37624 = cljs.core.first(arglist__37983);
var G__37625 = cljs.core.rest(arglist__37983);
return sci$impl$fns$arity_20__delegate(G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37390)].join('')));

}
})():(function (){var G__37628 = fixed_arity;
switch (G__37628) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36566__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36566__auto__)){
continue;
} else {
return ret__36566__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37629){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37629);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37630,G__37631){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37630);

(invoc_array[(1)] = G__37631);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37632,G__37633,G__37634){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37632);

(invoc_array[(1)] = G__37633);

(invoc_array[(2)] = G__37634);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37636,G__37637,G__37638,G__37639){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37636);

(invoc_array[(1)] = G__37637);

(invoc_array[(2)] = G__37638);

(invoc_array[(3)] = G__37639);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37647,G__37648,G__37649,G__37650,G__37651){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37647);

(invoc_array[(1)] = G__37648);

(invoc_array[(2)] = G__37649);

(invoc_array[(3)] = G__37650);

(invoc_array[(4)] = G__37651);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37652,G__37653,G__37654,G__37655,G__37656,G__37657){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37652);

(invoc_array[(1)] = G__37653);

(invoc_array[(2)] = G__37654);

(invoc_array[(3)] = G__37655);

(invoc_array[(4)] = G__37656);

(invoc_array[(5)] = G__37657);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37662);

(invoc_array[(1)] = G__37663);

(invoc_array[(2)] = G__37664);

(invoc_array[(3)] = G__37665);

(invoc_array[(4)] = G__37666);

(invoc_array[(5)] = G__37667);

(invoc_array[(6)] = G__37668);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37669);

(invoc_array[(1)] = G__37670);

(invoc_array[(2)] = G__37671);

(invoc_array[(3)] = G__37672);

(invoc_array[(4)] = G__37673);

(invoc_array[(5)] = G__37674);

(invoc_array[(6)] = G__37675);

(invoc_array[(7)] = G__37676);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37677,G__37678,G__37679,G__37680,G__37681,G__37682,G__37684,G__37685,G__37686){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37677);

(invoc_array[(1)] = G__37678);

(invoc_array[(2)] = G__37679);

(invoc_array[(3)] = G__37680);

(invoc_array[(4)] = G__37681);

(invoc_array[(5)] = G__37682);

(invoc_array[(6)] = G__37684);

(invoc_array[(7)] = G__37685);

(invoc_array[(8)] = G__37686);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37694);

(invoc_array[(1)] = G__37695);

(invoc_array[(2)] = G__37696);

(invoc_array[(3)] = G__37697);

(invoc_array[(4)] = G__37698);

(invoc_array[(5)] = G__37699);

(invoc_array[(6)] = G__37700);

(invoc_array[(7)] = G__37701);

(invoc_array[(8)] = G__37702);

(invoc_array[(9)] = G__37703);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37704,G__37705,G__37706,G__37707,G__37708,G__37709,G__37710,G__37711,G__37712,G__37713,G__37714){
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

(invoc_array[(7)] = G__37711);

(invoc_array[(8)] = G__37712);

(invoc_array[(9)] = G__37713);

(invoc_array[(10)] = G__37714);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37715,G__37716,G__37717,G__37718,G__37719,G__37720,G__37721,G__37722,G__37723,G__37724,G__37725,G__37726){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37715);

(invoc_array[(1)] = G__37716);

(invoc_array[(2)] = G__37717);

(invoc_array[(3)] = G__37718);

(invoc_array[(4)] = G__37719);

(invoc_array[(5)] = G__37720);

(invoc_array[(6)] = G__37721);

(invoc_array[(7)] = G__37722);

(invoc_array[(8)] = G__37723);

(invoc_array[(9)] = G__37724);

(invoc_array[(10)] = G__37725);

(invoc_array[(11)] = G__37726);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37731,G__37732,G__37733,G__37734,G__37735,G__37736,G__37737,G__37738,G__37739,G__37740,G__37741,G__37742,G__37743){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37731);

(invoc_array[(1)] = G__37732);

(invoc_array[(2)] = G__37733);

(invoc_array[(3)] = G__37734);

(invoc_array[(4)] = G__37735);

(invoc_array[(5)] = G__37736);

(invoc_array[(6)] = G__37737);

(invoc_array[(7)] = G__37738);

(invoc_array[(8)] = G__37739);

(invoc_array[(9)] = G__37740);

(invoc_array[(10)] = G__37741);

(invoc_array[(11)] = G__37742);

(invoc_array[(12)] = G__37743);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37744,G__37745,G__37746,G__37747,G__37748,G__37749,G__37750,G__37751,G__37752,G__37753,G__37754,G__37755,G__37756,G__37757){
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

(invoc_array[(7)] = G__37751);

(invoc_array[(8)] = G__37752);

(invoc_array[(9)] = G__37753);

(invoc_array[(10)] = G__37754);

(invoc_array[(11)] = G__37755);

(invoc_array[(12)] = G__37756);

(invoc_array[(13)] = G__37757);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37762,G__37763,G__37764,G__37765,G__37766,G__37767,G__37768,G__37769,G__37770,G__37771,G__37772,G__37773,G__37774,G__37775,G__37776){
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

(invoc_array[(9)] = G__37771);

(invoc_array[(10)] = G__37772);

(invoc_array[(11)] = G__37773);

(invoc_array[(12)] = G__37774);

(invoc_array[(13)] = G__37775);

(invoc_array[(14)] = G__37776);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37777,G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785,G__37786,G__37787,G__37788,G__37789,G__37790,G__37791,G__37792){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37777);

(invoc_array[(1)] = G__37778);

(invoc_array[(2)] = G__37779);

(invoc_array[(3)] = G__37780);

(invoc_array[(4)] = G__37781);

(invoc_array[(5)] = G__37782);

(invoc_array[(6)] = G__37783);

(invoc_array[(7)] = G__37784);

(invoc_array[(8)] = G__37785);

(invoc_array[(9)] = G__37786);

(invoc_array[(10)] = G__37787);

(invoc_array[(11)] = G__37788);

(invoc_array[(12)] = G__37789);

(invoc_array[(13)] = G__37790);

(invoc_array[(14)] = G__37791);

(invoc_array[(15)] = G__37792);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37793,G__37794,G__37795,G__37796,G__37797,G__37798,G__37799,G__37800,G__37801,G__37802,G__37803,G__37804,G__37805,G__37806,G__37807,G__37808,G__37809){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37793);

(invoc_array[(1)] = G__37794);

(invoc_array[(2)] = G__37795);

(invoc_array[(3)] = G__37796);

(invoc_array[(4)] = G__37797);

(invoc_array[(5)] = G__37798);

(invoc_array[(6)] = G__37799);

(invoc_array[(7)] = G__37800);

(invoc_array[(8)] = G__37801);

(invoc_array[(9)] = G__37802);

(invoc_array[(10)] = G__37803);

(invoc_array[(11)] = G__37804);

(invoc_array[(12)] = G__37805);

(invoc_array[(13)] = G__37806);

(invoc_array[(14)] = G__37807);

(invoc_array[(15)] = G__37808);

(invoc_array[(16)] = G__37809);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37810,G__37811,G__37812,G__37813,G__37814,G__37815,G__37816,G__37817,G__37818,G__37819,G__37820,G__37821,G__37822,G__37823,G__37824,G__37825,G__37826,G__37827){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37810);

(invoc_array[(1)] = G__37811);

(invoc_array[(2)] = G__37812);

(invoc_array[(3)] = G__37813);

(invoc_array[(4)] = G__37814);

(invoc_array[(5)] = G__37815);

(invoc_array[(6)] = G__37816);

(invoc_array[(7)] = G__37817);

(invoc_array[(8)] = G__37818);

(invoc_array[(9)] = G__37819);

(invoc_array[(10)] = G__37820);

(invoc_array[(11)] = G__37821);

(invoc_array[(12)] = G__37822);

(invoc_array[(13)] = G__37823);

(invoc_array[(14)] = G__37824);

(invoc_array[(15)] = G__37825);

(invoc_array[(16)] = G__37826);

(invoc_array[(17)] = G__37827);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37828,G__37829,G__37830,G__37831,G__37832,G__37833,G__37834,G__37835,G__37836,G__37837,G__37838,G__37839,G__37840,G__37841,G__37842,G__37843,G__37844,G__37845,G__37846){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37828);

(invoc_array[(1)] = G__37829);

(invoc_array[(2)] = G__37830);

(invoc_array[(3)] = G__37831);

(invoc_array[(4)] = G__37832);

(invoc_array[(5)] = G__37833);

(invoc_array[(6)] = G__37834);

(invoc_array[(7)] = G__37835);

(invoc_array[(8)] = G__37836);

(invoc_array[(9)] = G__37837);

(invoc_array[(10)] = G__37838);

(invoc_array[(11)] = G__37839);

(invoc_array[(12)] = G__37840);

(invoc_array[(13)] = G__37841);

(invoc_array[(14)] = G__37842);

(invoc_array[(15)] = G__37843);

(invoc_array[(16)] = G__37844);

(invoc_array[(17)] = G__37845);

(invoc_array[(18)] = G__37846);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37847,G__37848,G__37849,G__37850,G__37851,G__37852,G__37853,G__37854,G__37855,G__37856,G__37857,G__37858,G__37859,G__37860,G__37861,G__37862,G__37863,G__37864,G__37865,G__37866){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37847);

(invoc_array[(1)] = G__37848);

(invoc_array[(2)] = G__37849);

(invoc_array[(3)] = G__37850);

(invoc_array[(4)] = G__37851);

(invoc_array[(5)] = G__37852);

(invoc_array[(6)] = G__37853);

(invoc_array[(7)] = G__37854);

(invoc_array[(8)] = G__37855);

(invoc_array[(9)] = G__37856);

(invoc_array[(10)] = G__37857);

(invoc_array[(11)] = G__37858);

(invoc_array[(12)] = G__37859);

(invoc_array[(13)] = G__37860);

(invoc_array[(14)] = G__37861);

(invoc_array[(15)] = G__37862);

(invoc_array[(16)] = G__37863);

(invoc_array[(17)] = G__37864);

(invoc_array[(18)] = G__37865);

(invoc_array[(19)] = G__37866);

while(true){
var ret__36567__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36567__auto__)){
continue;
} else {
return ret__36567__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37628)].join('')));

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
var G__38022 = cljs.core.next(params__$1);
var G__38023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38024 = lets;
params__$1 = G__38022;
new_params = G__38023;
lets = G__38024;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38025 = cljs.core.next(params__$1);
var G__38026 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38027 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38025;
new_params = G__38026;
lets = G__38027;
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
var len__5749__auto___38028 = arguments.length;
var i__5750__auto___38029 = (0);
while(true){
if((i__5750__auto___38029 < len__5749__auto___38028)){
args__5755__auto__.push((arguments[i__5750__auto___38029]));

var G__38031 = (i__5750__auto___38029 + (1));
i__5750__auto___38029 = G__38031;
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

var vec__37881 = sig;
var seq__37882 = cljs.core.seq(vec__37881);
var first__37883 = cljs.core.first(seq__37882);
var seq__37882__$1 = cljs.core.next(seq__37882);
var params = first__37883;
var body = seq__37882__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq37878){
var G__37879 = cljs.core.first(seq37878);
var seq37878__$1 = cljs.core.next(seq37878);
var G__37880 = cljs.core.first(seq37878__$1);
var seq37878__$2 = cljs.core.next(seq37878__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37879,G__37880,seq37878__$2);
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
var G__38054 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38055 = cljs.core.next(fdecls);
ret = G__38054;
fdecls = G__38055;
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
var len__5749__auto___38058 = arguments.length;
var i__5750__auto___38060 = (0);
while(true){
if((i__5750__auto___38060 < len__5749__auto___38058)){
args__5755__auto__.push((arguments[i__5750__auto___38060]));

var G__38061 = (i__5750__auto___38060 + (1));
i__5750__auto___38060 = G__38061;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq37886){
var G__37887 = cljs.core.first(seq37886);
var seq37886__$1 = cljs.core.next(seq37886);
var G__37888 = cljs.core.first(seq37886__$1);
var seq37886__$2 = cljs.core.next(seq37886__$1);
var G__37889 = cljs.core.first(seq37886__$2);
var seq37886__$3 = cljs.core.next(seq37886__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37887,G__37888,G__37889,seq37886__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38067 = arguments.length;
var i__5750__auto___38068 = (0);
while(true){
if((i__5750__auto___38068 < len__5749__auto___38067)){
args__5755__auto__.push((arguments[i__5750__auto___38068]));

var G__38069 = (i__5750__auto___38068 + (1));
i__5750__auto___38068 = G__38069;
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
var G__38070 = cljs.core.cons(f,p);
var G__38071 = cljs.core.next(args__$1);
p = G__38070;
args__$1 = G__38071;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38072 = cljs.core.cons(f,p);
var G__38073 = cljs.core.next(args__$1);
p = G__38072;
args__$1 = G__38073;
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
var G__38074 = cljs.core.next(fd);
fd = G__38074;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38075 = cljs.core.next(fd);
fd = G__38075;
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
var G__38076 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38077 = cljs.core.next(ds);
acc = G__38076;
ds = G__38077;
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
var G__38078 = cljs.core.next(p);
var G__38079 = cljs.core.cons(cljs.core.first(p),d);
p = G__38078;
d = G__38079;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq37894){
var G__37895 = cljs.core.first(seq37894);
var seq37894__$1 = cljs.core.next(seq37894);
var G__37896 = cljs.core.first(seq37894__$1);
var seq37894__$2 = cljs.core.next(seq37894__$1);
var G__37897 = cljs.core.first(seq37894__$2);
var seq37894__$3 = cljs.core.next(seq37894__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37895,G__37896,G__37897,seq37894__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
