goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__37325 = arguments.length;
switch (G__37325) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__37326 = fixed_arity;
switch (G__37326) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__37327){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__37327);

while(true){
var ret__36505__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36505__auto__)){
continue;
} else {
return ret__36505__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37327 = null;
if (arguments.length > 0) {
var G__38021__i = 0, G__38021__a = new Array(arguments.length -  0);
while (G__38021__i < G__38021__a.length) {G__38021__a[G__38021__i] = arguments[G__38021__i + 0]; ++G__38021__i;}
  G__37327 = new cljs.core.IndexedSeq(G__38021__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37327);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__38022){
var G__37327 = cljs.core.seq(arglist__38022);
return sci$impl$fns$arity_0__delegate(G__37327);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__37328,G__37329){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37328);

(invoc_array[vararg_idx] = G__37329);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37328,var_args){
var G__37329 = null;
if (arguments.length > 1) {
var G__38024__i = 0, G__38024__a = new Array(arguments.length -  1);
while (G__38024__i < G__38024__a.length) {G__38024__a[G__38024__i] = arguments[G__38024__i + 1]; ++G__38024__i;}
  G__37329 = new cljs.core.IndexedSeq(G__38024__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37328,G__37329);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__38025){
var G__37328 = cljs.core.first(arglist__38025);
var G__37329 = cljs.core.rest(arglist__38025);
return sci$impl$fns$arity_1__delegate(G__37328,G__37329);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__37330,G__37331,G__37332){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37330);

(invoc_array[(1)] = G__37331);

(invoc_array[vararg_idx] = G__37332);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37330,G__37331,var_args){
var G__37332 = null;
if (arguments.length > 2) {
var G__38031__i = 0, G__38031__a = new Array(arguments.length -  2);
while (G__38031__i < G__38031__a.length) {G__38031__a[G__38031__i] = arguments[G__38031__i + 2]; ++G__38031__i;}
  G__37332 = new cljs.core.IndexedSeq(G__38031__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37330,G__37331,G__37332);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__38032){
var G__37330 = cljs.core.first(arglist__38032);
arglist__38032 = cljs.core.next(arglist__38032);
var G__37331 = cljs.core.first(arglist__38032);
var G__37332 = cljs.core.rest(arglist__38032);
return sci$impl$fns$arity_2__delegate(G__37330,G__37331,G__37332);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__37337,G__37338,G__37339,G__37340){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37337);

(invoc_array[(1)] = G__37338);

(invoc_array[(2)] = G__37339);

(invoc_array[vararg_idx] = G__37340);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37337,G__37338,G__37339,var_args){
var G__37340 = null;
if (arguments.length > 3) {
var G__38034__i = 0, G__38034__a = new Array(arguments.length -  3);
while (G__38034__i < G__38034__a.length) {G__38034__a[G__38034__i] = arguments[G__38034__i + 3]; ++G__38034__i;}
  G__37340 = new cljs.core.IndexedSeq(G__38034__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37337,G__37338,G__37339,G__37340);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__38035){
var G__37337 = cljs.core.first(arglist__38035);
arglist__38035 = cljs.core.next(arglist__38035);
var G__37338 = cljs.core.first(arglist__38035);
arglist__38035 = cljs.core.next(arglist__38035);
var G__37339 = cljs.core.first(arglist__38035);
var G__37340 = cljs.core.rest(arglist__38035);
return sci$impl$fns$arity_3__delegate(G__37337,G__37338,G__37339,G__37340);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__37341,G__37342,G__37343,G__37344,G__37345){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37341);

(invoc_array[(1)] = G__37342);

(invoc_array[(2)] = G__37343);

(invoc_array[(3)] = G__37344);

(invoc_array[vararg_idx] = G__37345);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37341,G__37342,G__37343,G__37344,var_args){
var G__37345 = null;
if (arguments.length > 4) {
var G__38038__i = 0, G__38038__a = new Array(arguments.length -  4);
while (G__38038__i < G__38038__a.length) {G__38038__a[G__38038__i] = arguments[G__38038__i + 4]; ++G__38038__i;}
  G__37345 = new cljs.core.IndexedSeq(G__38038__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37341,G__37342,G__37343,G__37344,G__37345);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__38041){
var G__37341 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37342 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37343 = cljs.core.first(arglist__38041);
arglist__38041 = cljs.core.next(arglist__38041);
var G__37344 = cljs.core.first(arglist__38041);
var G__37345 = cljs.core.rest(arglist__38041);
return sci$impl$fns$arity_4__delegate(G__37341,G__37342,G__37343,G__37344,G__37345);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__37346,G__37347,G__37348,G__37349,G__37350,G__37351){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37346);

(invoc_array[(1)] = G__37347);

(invoc_array[(2)] = G__37348);

(invoc_array[(3)] = G__37349);

(invoc_array[(4)] = G__37350);

(invoc_array[vararg_idx] = G__37351);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37346,G__37347,G__37348,G__37349,G__37350,var_args){
var G__37351 = null;
if (arguments.length > 5) {
var G__38043__i = 0, G__38043__a = new Array(arguments.length -  5);
while (G__38043__i < G__38043__a.length) {G__38043__a[G__38043__i] = arguments[G__38043__i + 5]; ++G__38043__i;}
  G__37351 = new cljs.core.IndexedSeq(G__38043__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37346,G__37347,G__37348,G__37349,G__37350,G__37351);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__38044){
var G__37346 = cljs.core.first(arglist__38044);
arglist__38044 = cljs.core.next(arglist__38044);
var G__37347 = cljs.core.first(arglist__38044);
arglist__38044 = cljs.core.next(arglist__38044);
var G__37348 = cljs.core.first(arglist__38044);
arglist__38044 = cljs.core.next(arglist__38044);
var G__37349 = cljs.core.first(arglist__38044);
arglist__38044 = cljs.core.next(arglist__38044);
var G__37350 = cljs.core.first(arglist__38044);
var G__37351 = cljs.core.rest(arglist__38044);
return sci$impl$fns$arity_5__delegate(G__37346,G__37347,G__37348,G__37349,G__37350,G__37351);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37352);

(invoc_array[(1)] = G__37353);

(invoc_array[(2)] = G__37354);

(invoc_array[(3)] = G__37355);

(invoc_array[(4)] = G__37356);

(invoc_array[(5)] = G__37357);

(invoc_array[vararg_idx] = G__37358);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,var_args){
var G__37358 = null;
if (arguments.length > 6) {
var G__38047__i = 0, G__38047__a = new Array(arguments.length -  6);
while (G__38047__i < G__38047__a.length) {G__38047__a[G__38047__i] = arguments[G__38047__i + 6]; ++G__38047__i;}
  G__37358 = new cljs.core.IndexedSeq(G__38047__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__38049){
var G__37352 = cljs.core.first(arglist__38049);
arglist__38049 = cljs.core.next(arglist__38049);
var G__37353 = cljs.core.first(arglist__38049);
arglist__38049 = cljs.core.next(arglist__38049);
var G__37354 = cljs.core.first(arglist__38049);
arglist__38049 = cljs.core.next(arglist__38049);
var G__37355 = cljs.core.first(arglist__38049);
arglist__38049 = cljs.core.next(arglist__38049);
var G__37356 = cljs.core.first(arglist__38049);
arglist__38049 = cljs.core.next(arglist__38049);
var G__37357 = cljs.core.first(arglist__38049);
var G__37358 = cljs.core.rest(arglist__38049);
return sci$impl$fns$arity_6__delegate(G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365,G__37366){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37359);

(invoc_array[(1)] = G__37360);

(invoc_array[(2)] = G__37361);

(invoc_array[(3)] = G__37362);

(invoc_array[(4)] = G__37363);

(invoc_array[(5)] = G__37364);

(invoc_array[(6)] = G__37365);

(invoc_array[vararg_idx] = G__37366);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365,var_args){
var G__37366 = null;
if (arguments.length > 7) {
var G__38052__i = 0, G__38052__a = new Array(arguments.length -  7);
while (G__38052__i < G__38052__a.length) {G__38052__a[G__38052__i] = arguments[G__38052__i + 7]; ++G__38052__i;}
  G__37366 = new cljs.core.IndexedSeq(G__38052__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365,G__37366);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__38053){
var G__37359 = cljs.core.first(arglist__38053);
arglist__38053 = cljs.core.next(arglist__38053);
var G__37360 = cljs.core.first(arglist__38053);
arglist__38053 = cljs.core.next(arglist__38053);
var G__37361 = cljs.core.first(arglist__38053);
arglist__38053 = cljs.core.next(arglist__38053);
var G__37362 = cljs.core.first(arglist__38053);
arglist__38053 = cljs.core.next(arglist__38053);
var G__37363 = cljs.core.first(arglist__38053);
arglist__38053 = cljs.core.next(arglist__38053);
var G__37364 = cljs.core.first(arglist__38053);
arglist__38053 = cljs.core.next(arglist__38053);
var G__37365 = cljs.core.first(arglist__38053);
var G__37366 = cljs.core.rest(arglist__38053);
return sci$impl$fns$arity_7__delegate(G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365,G__37366);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37367,G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,G__37375){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37367);

(invoc_array[(1)] = G__37368);

(invoc_array[(2)] = G__37369);

(invoc_array[(3)] = G__37370);

(invoc_array[(4)] = G__37371);

(invoc_array[(5)] = G__37372);

(invoc_array[(6)] = G__37373);

(invoc_array[(7)] = G__37374);

(invoc_array[vararg_idx] = G__37375);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37367,G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,var_args){
var G__37375 = null;
if (arguments.length > 8) {
var G__38060__i = 0, G__38060__a = new Array(arguments.length -  8);
while (G__38060__i < G__38060__a.length) {G__38060__a[G__38060__i] = arguments[G__38060__i + 8]; ++G__38060__i;}
  G__37375 = new cljs.core.IndexedSeq(G__38060__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37367,G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,G__37375);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__38061){
var G__37367 = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var G__37368 = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var G__37369 = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var G__37370 = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var G__37371 = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var G__37372 = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var G__37373 = cljs.core.first(arglist__38061);
arglist__38061 = cljs.core.next(arglist__38061);
var G__37374 = cljs.core.first(arglist__38061);
var G__37375 = cljs.core.rest(arglist__38061);
return sci$impl$fns$arity_8__delegate(G__37367,G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,G__37375);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384,G__37385){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37376);

(invoc_array[(1)] = G__37377);

(invoc_array[(2)] = G__37378);

(invoc_array[(3)] = G__37379);

(invoc_array[(4)] = G__37380);

(invoc_array[(5)] = G__37381);

(invoc_array[(6)] = G__37382);

(invoc_array[(7)] = G__37383);

(invoc_array[(8)] = G__37384);

(invoc_array[vararg_idx] = G__37385);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384,var_args){
var G__37385 = null;
if (arguments.length > 9) {
var G__38065__i = 0, G__38065__a = new Array(arguments.length -  9);
while (G__38065__i < G__38065__a.length) {G__38065__a[G__38065__i] = arguments[G__38065__i + 9]; ++G__38065__i;}
  G__37385 = new cljs.core.IndexedSeq(G__38065__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384,G__37385);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__38066){
var G__37376 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37377 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37378 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37379 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37380 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37381 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37382 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37383 = cljs.core.first(arglist__38066);
arglist__38066 = cljs.core.next(arglist__38066);
var G__37384 = cljs.core.first(arglist__38066);
var G__37385 = cljs.core.rest(arglist__38066);
return sci$impl$fns$arity_9__delegate(G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384,G__37385);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394,G__37395,G__37396){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37386);

(invoc_array[(1)] = G__37387);

(invoc_array[(2)] = G__37388);

(invoc_array[(3)] = G__37389);

(invoc_array[(4)] = G__37390);

(invoc_array[(5)] = G__37391);

(invoc_array[(6)] = G__37392);

(invoc_array[(7)] = G__37393);

(invoc_array[(8)] = G__37394);

(invoc_array[(9)] = G__37395);

(invoc_array[vararg_idx] = G__37396);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394,G__37395,var_args){
var G__37396 = null;
if (arguments.length > 10) {
var G__38074__i = 0, G__38074__a = new Array(arguments.length -  10);
while (G__38074__i < G__38074__a.length) {G__38074__a[G__38074__i] = arguments[G__38074__i + 10]; ++G__38074__i;}
  G__37396 = new cljs.core.IndexedSeq(G__38074__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394,G__37395,G__37396);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__38075){
var G__37386 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37387 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37388 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37389 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37390 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37391 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37392 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37393 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37394 = cljs.core.first(arglist__38075);
arglist__38075 = cljs.core.next(arglist__38075);
var G__37395 = cljs.core.first(arglist__38075);
var G__37396 = cljs.core.rest(arglist__38075);
return sci$impl$fns$arity_10__delegate(G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394,G__37395,G__37396);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,G__37405,G__37406,G__37407,G__37408){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37397);

(invoc_array[(1)] = G__37398);

(invoc_array[(2)] = G__37399);

(invoc_array[(3)] = G__37400);

(invoc_array[(4)] = G__37401);

(invoc_array[(5)] = G__37402);

(invoc_array[(6)] = G__37403);

(invoc_array[(7)] = G__37404);

(invoc_array[(8)] = G__37405);

(invoc_array[(9)] = G__37406);

(invoc_array[(10)] = G__37407);

(invoc_array[vararg_idx] = G__37408);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,G__37405,G__37406,G__37407,var_args){
var G__37408 = null;
if (arguments.length > 11) {
var G__38077__i = 0, G__38077__a = new Array(arguments.length -  11);
while (G__38077__i < G__38077__a.length) {G__38077__a[G__38077__i] = arguments[G__38077__i + 11]; ++G__38077__i;}
  G__37408 = new cljs.core.IndexedSeq(G__38077__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,G__37405,G__37406,G__37407,G__37408);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__38078){
var G__37397 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37398 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37399 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37400 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37401 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37402 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37403 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37404 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37405 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37406 = cljs.core.first(arglist__38078);
arglist__38078 = cljs.core.next(arglist__38078);
var G__37407 = cljs.core.first(arglist__38078);
var G__37408 = cljs.core.rest(arglist__38078);
return sci$impl$fns$arity_11__delegate(G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,G__37405,G__37406,G__37407,G__37408);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37409);

(invoc_array[(1)] = G__37410);

(invoc_array[(2)] = G__37411);

(invoc_array[(3)] = G__37412);

(invoc_array[(4)] = G__37413);

(invoc_array[(5)] = G__37414);

(invoc_array[(6)] = G__37415);

(invoc_array[(7)] = G__37416);

(invoc_array[(8)] = G__37417);

(invoc_array[(9)] = G__37418);

(invoc_array[(10)] = G__37419);

(invoc_array[(11)] = G__37420);

(invoc_array[vararg_idx] = G__37421);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,var_args){
var G__37421 = null;
if (arguments.length > 12) {
var G__38084__i = 0, G__38084__a = new Array(arguments.length -  12);
while (G__38084__i < G__38084__a.length) {G__38084__a[G__38084__i] = arguments[G__38084__i + 12]; ++G__38084__i;}
  G__37421 = new cljs.core.IndexedSeq(G__38084__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__38086){
var G__37409 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37410 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37411 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37412 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37413 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37414 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37415 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37416 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37417 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37418 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37419 = cljs.core.first(arglist__38086);
arglist__38086 = cljs.core.next(arglist__38086);
var G__37420 = cljs.core.first(arglist__38086);
var G__37421 = cljs.core.rest(arglist__38086);
return sci$impl$fns$arity_12__delegate(G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37424);

(invoc_array[(1)] = G__37425);

(invoc_array[(2)] = G__37426);

(invoc_array[(3)] = G__37427);

(invoc_array[(4)] = G__37428);

(invoc_array[(5)] = G__37429);

(invoc_array[(6)] = G__37430);

(invoc_array[(7)] = G__37431);

(invoc_array[(8)] = G__37432);

(invoc_array[(9)] = G__37433);

(invoc_array[(10)] = G__37434);

(invoc_array[(11)] = G__37435);

(invoc_array[(12)] = G__37436);

(invoc_array[vararg_idx] = G__37437);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,var_args){
var G__37437 = null;
if (arguments.length > 13) {
var G__38089__i = 0, G__38089__a = new Array(arguments.length -  13);
while (G__38089__i < G__38089__a.length) {G__38089__a[G__38089__i] = arguments[G__38089__i + 13]; ++G__38089__i;}
  G__37437 = new cljs.core.IndexedSeq(G__38089__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__38090){
var G__37424 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37425 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37426 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37427 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37428 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37429 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37430 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37431 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37432 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37433 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37434 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37435 = cljs.core.first(arglist__38090);
arglist__38090 = cljs.core.next(arglist__38090);
var G__37436 = cljs.core.first(arglist__38090);
var G__37437 = cljs.core.rest(arglist__38090);
return sci$impl$fns$arity_13__delegate(G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37446);

(invoc_array[(1)] = G__37447);

(invoc_array[(2)] = G__37448);

(invoc_array[(3)] = G__37449);

(invoc_array[(4)] = G__37450);

(invoc_array[(5)] = G__37451);

(invoc_array[(6)] = G__37452);

(invoc_array[(7)] = G__37453);

(invoc_array[(8)] = G__37454);

(invoc_array[(9)] = G__37455);

(invoc_array[(10)] = G__37456);

(invoc_array[(11)] = G__37457);

(invoc_array[(12)] = G__37458);

(invoc_array[(13)] = G__37459);

(invoc_array[vararg_idx] = G__37460);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,var_args){
var G__37460 = null;
if (arguments.length > 14) {
var G__38092__i = 0, G__38092__a = new Array(arguments.length -  14);
while (G__38092__i < G__38092__a.length) {G__38092__a[G__38092__i] = arguments[G__38092__i + 14]; ++G__38092__i;}
  G__37460 = new cljs.core.IndexedSeq(G__38092__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__38095){
var G__37446 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37447 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37448 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37449 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37450 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37451 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37452 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37453 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37454 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37455 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37456 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37457 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37458 = cljs.core.first(arglist__38095);
arglist__38095 = cljs.core.next(arglist__38095);
var G__37459 = cljs.core.first(arglist__38095);
var G__37460 = cljs.core.rest(arglist__38095);
return sci$impl$fns$arity_14__delegate(G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37465);

(invoc_array[(1)] = G__37466);

(invoc_array[(2)] = G__37467);

(invoc_array[(3)] = G__37468);

(invoc_array[(4)] = G__37469);

(invoc_array[(5)] = G__37470);

(invoc_array[(6)] = G__37471);

(invoc_array[(7)] = G__37472);

(invoc_array[(8)] = G__37473);

(invoc_array[(9)] = G__37474);

(invoc_array[(10)] = G__37475);

(invoc_array[(11)] = G__37476);

(invoc_array[(12)] = G__37477);

(invoc_array[(13)] = G__37478);

(invoc_array[(14)] = G__37479);

(invoc_array[vararg_idx] = G__37480);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,var_args){
var G__37480 = null;
if (arguments.length > 15) {
var G__38101__i = 0, G__38101__a = new Array(arguments.length -  15);
while (G__38101__i < G__38101__a.length) {G__38101__a[G__38101__i] = arguments[G__38101__i + 15]; ++G__38101__i;}
  G__37480 = new cljs.core.IndexedSeq(G__38101__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__38103){
var G__37465 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37466 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37467 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37468 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37469 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37470 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37471 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37472 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37473 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37474 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37475 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37476 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37477 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37478 = cljs.core.first(arglist__38103);
arglist__38103 = cljs.core.next(arglist__38103);
var G__37479 = cljs.core.first(arglist__38103);
var G__37480 = cljs.core.rest(arglist__38103);
return sci$impl$fns$arity_15__delegate(G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37485);

(invoc_array[(1)] = G__37486);

(invoc_array[(2)] = G__37487);

(invoc_array[(3)] = G__37488);

(invoc_array[(4)] = G__37489);

(invoc_array[(5)] = G__37490);

(invoc_array[(6)] = G__37491);

(invoc_array[(7)] = G__37492);

(invoc_array[(8)] = G__37493);

(invoc_array[(9)] = G__37494);

(invoc_array[(10)] = G__37495);

(invoc_array[(11)] = G__37496);

(invoc_array[(12)] = G__37497);

(invoc_array[(13)] = G__37498);

(invoc_array[(14)] = G__37499);

(invoc_array[(15)] = G__37500);

(invoc_array[vararg_idx] = G__37501);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,var_args){
var G__37501 = null;
if (arguments.length > 16) {
var G__38110__i = 0, G__38110__a = new Array(arguments.length -  16);
while (G__38110__i < G__38110__a.length) {G__38110__a[G__38110__i] = arguments[G__38110__i + 16]; ++G__38110__i;}
  G__37501 = new cljs.core.IndexedSeq(G__38110__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__38112){
var G__37485 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37486 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37487 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37488 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37489 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37490 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37491 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37492 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37493 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37494 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37495 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37496 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37497 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37498 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37499 = cljs.core.first(arglist__38112);
arglist__38112 = cljs.core.next(arglist__38112);
var G__37500 = cljs.core.first(arglist__38112);
var G__37501 = cljs.core.rest(arglist__38112);
return sci$impl$fns$arity_16__delegate(G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37514);

(invoc_array[(1)] = G__37515);

(invoc_array[(2)] = G__37516);

(invoc_array[(3)] = G__37517);

(invoc_array[(4)] = G__37518);

(invoc_array[(5)] = G__37519);

(invoc_array[(6)] = G__37520);

(invoc_array[(7)] = G__37521);

(invoc_array[(8)] = G__37522);

(invoc_array[(9)] = G__37523);

(invoc_array[(10)] = G__37524);

(invoc_array[(11)] = G__37525);

(invoc_array[(12)] = G__37526);

(invoc_array[(13)] = G__37527);

(invoc_array[(14)] = G__37528);

(invoc_array[(15)] = G__37529);

(invoc_array[(16)] = G__37530);

(invoc_array[vararg_idx] = G__37531);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,var_args){
var G__37531 = null;
if (arguments.length > 17) {
var G__38124__i = 0, G__38124__a = new Array(arguments.length -  17);
while (G__38124__i < G__38124__a.length) {G__38124__a[G__38124__i] = arguments[G__38124__i + 17]; ++G__38124__i;}
  G__37531 = new cljs.core.IndexedSeq(G__38124__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__38126){
var G__37514 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37515 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37516 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37517 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37518 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37519 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37520 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37521 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37522 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37523 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37524 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37525 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37526 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37527 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37528 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37529 = cljs.core.first(arglist__38126);
arglist__38126 = cljs.core.next(arglist__38126);
var G__37530 = cljs.core.first(arglist__38126);
var G__37531 = cljs.core.rest(arglist__38126);
return sci$impl$fns$arity_17__delegate(G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37532);

(invoc_array[(1)] = G__37533);

(invoc_array[(2)] = G__37534);

(invoc_array[(3)] = G__37535);

(invoc_array[(4)] = G__37536);

(invoc_array[(5)] = G__37537);

(invoc_array[(6)] = G__37538);

(invoc_array[(7)] = G__37539);

(invoc_array[(8)] = G__37540);

(invoc_array[(9)] = G__37541);

(invoc_array[(10)] = G__37542);

(invoc_array[(11)] = G__37543);

(invoc_array[(12)] = G__37544);

(invoc_array[(13)] = G__37545);

(invoc_array[(14)] = G__37546);

(invoc_array[(15)] = G__37547);

(invoc_array[(16)] = G__37548);

(invoc_array[(17)] = G__37549);

(invoc_array[vararg_idx] = G__37550);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,var_args){
var G__37550 = null;
if (arguments.length > 18) {
var G__38134__i = 0, G__38134__a = new Array(arguments.length -  18);
while (G__38134__i < G__38134__a.length) {G__38134__a[G__38134__i] = arguments[G__38134__i + 18]; ++G__38134__i;}
  G__37550 = new cljs.core.IndexedSeq(G__38134__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__38135){
var G__37532 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37533 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37534 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37535 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37536 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37537 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37538 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37539 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37540 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37541 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37542 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37543 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37544 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37545 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37546 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37547 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37548 = cljs.core.first(arglist__38135);
arglist__38135 = cljs.core.next(arglist__38135);
var G__37549 = cljs.core.first(arglist__38135);
var G__37550 = cljs.core.rest(arglist__38135);
return sci$impl$fns$arity_18__delegate(G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37551);

(invoc_array[(1)] = G__37552);

(invoc_array[(2)] = G__37553);

(invoc_array[(3)] = G__37554);

(invoc_array[(4)] = G__37555);

(invoc_array[(5)] = G__37556);

(invoc_array[(6)] = G__37557);

(invoc_array[(7)] = G__37558);

(invoc_array[(8)] = G__37559);

(invoc_array[(9)] = G__37560);

(invoc_array[(10)] = G__37561);

(invoc_array[(11)] = G__37562);

(invoc_array[(12)] = G__37563);

(invoc_array[(13)] = G__37564);

(invoc_array[(14)] = G__37565);

(invoc_array[(15)] = G__37566);

(invoc_array[(16)] = G__37567);

(invoc_array[(17)] = G__37568);

(invoc_array[(18)] = G__37569);

(invoc_array[vararg_idx] = G__37570);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,var_args){
var G__37570 = null;
if (arguments.length > 19) {
var G__38142__i = 0, G__38142__a = new Array(arguments.length -  19);
while (G__38142__i < G__38142__a.length) {G__38142__a[G__38142__i] = arguments[G__38142__i + 19]; ++G__38142__i;}
  G__37570 = new cljs.core.IndexedSeq(G__38142__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__38143){
var G__37551 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37552 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37553 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37554 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37555 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37556 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37557 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37558 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37559 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37560 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37561 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37562 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37563 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37564 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37565 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37566 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37567 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37568 = cljs.core.first(arglist__38143);
arglist__38143 = cljs.core.next(arglist__38143);
var G__37569 = cljs.core.first(arglist__38143);
var G__37570 = cljs.core.rest(arglist__38143);
return sci$impl$fns$arity_19__delegate(G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37572);

(invoc_array[(1)] = G__37573);

(invoc_array[(2)] = G__37574);

(invoc_array[(3)] = G__37575);

(invoc_array[(4)] = G__37576);

(invoc_array[(5)] = G__37577);

(invoc_array[(6)] = G__37578);

(invoc_array[(7)] = G__37579);

(invoc_array[(8)] = G__37580);

(invoc_array[(9)] = G__37581);

(invoc_array[(10)] = G__37582);

(invoc_array[(11)] = G__37583);

(invoc_array[(12)] = G__37584);

(invoc_array[(13)] = G__37585);

(invoc_array[(14)] = G__37586);

(invoc_array[(15)] = G__37587);

(invoc_array[(16)] = G__37588);

(invoc_array[(17)] = G__37589);

(invoc_array[(18)] = G__37590);

(invoc_array[(19)] = G__37591);

(invoc_array[vararg_idx] = G__37592);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,var_args){
var G__37592 = null;
if (arguments.length > 20) {
var G__38181__i = 0, G__38181__a = new Array(arguments.length -  20);
while (G__38181__i < G__38181__a.length) {G__38181__a[G__38181__i] = arguments[G__38181__i + 20]; ++G__38181__i;}
  G__37592 = new cljs.core.IndexedSeq(G__38181__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__38188){
var G__37572 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37573 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37574 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37575 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37576 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37577 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37578 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37579 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37580 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37581 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37582 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37583 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37584 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37585 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37586 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37587 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37588 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37589 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37590 = cljs.core.first(arglist__38188);
arglist__38188 = cljs.core.next(arglist__38188);
var G__37591 = cljs.core.first(arglist__38188);
var G__37592 = cljs.core.rest(arglist__38188);
return sci$impl$fns$arity_20__delegate(G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37326)].join('')));

}
})():(function (){var G__37597 = fixed_arity;
switch (G__37597) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36505__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36505__auto__)){
continue;
} else {
return ret__36505__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37600){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37600);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37601,G__37602){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37601);

(invoc_array[(1)] = G__37602);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37603,G__37604,G__37605){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37603);

(invoc_array[(1)] = G__37604);

(invoc_array[(2)] = G__37605);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37609,G__37610,G__37611,G__37612){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37609);

(invoc_array[(1)] = G__37610);

(invoc_array[(2)] = G__37611);

(invoc_array[(3)] = G__37612);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37615,G__37616,G__37617,G__37618,G__37619){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37615);

(invoc_array[(1)] = G__37616);

(invoc_array[(2)] = G__37617);

(invoc_array[(3)] = G__37618);

(invoc_array[(4)] = G__37619);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37620,G__37621,G__37622,G__37623,G__37624,G__37625){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37620);

(invoc_array[(1)] = G__37621);

(invoc_array[(2)] = G__37622);

(invoc_array[(3)] = G__37623);

(invoc_array[(4)] = G__37624);

(invoc_array[(5)] = G__37625);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37627);

(invoc_array[(1)] = G__37628);

(invoc_array[(2)] = G__37629);

(invoc_array[(3)] = G__37630);

(invoc_array[(4)] = G__37631);

(invoc_array[(5)] = G__37632);

(invoc_array[(6)] = G__37633);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37634);

(invoc_array[(1)] = G__37635);

(invoc_array[(2)] = G__37636);

(invoc_array[(3)] = G__37637);

(invoc_array[(4)] = G__37638);

(invoc_array[(5)] = G__37639);

(invoc_array[(6)] = G__37640);

(invoc_array[(7)] = G__37641);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37642);

(invoc_array[(1)] = G__37643);

(invoc_array[(2)] = G__37644);

(invoc_array[(3)] = G__37645);

(invoc_array[(4)] = G__37646);

(invoc_array[(5)] = G__37647);

(invoc_array[(6)] = G__37648);

(invoc_array[(7)] = G__37649);

(invoc_array[(8)] = G__37650);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37651);

(invoc_array[(1)] = G__37652);

(invoc_array[(2)] = G__37653);

(invoc_array[(3)] = G__37654);

(invoc_array[(4)] = G__37655);

(invoc_array[(5)] = G__37656);

(invoc_array[(6)] = G__37657);

(invoc_array[(7)] = G__37658);

(invoc_array[(8)] = G__37659);

(invoc_array[(9)] = G__37660);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679){
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

(invoc_array[(8)] = G__37677);

(invoc_array[(9)] = G__37678);

(invoc_array[(10)] = G__37679);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37681,G__37682,G__37683,G__37684,G__37685,G__37686,G__37687,G__37688,G__37689,G__37690,G__37691,G__37692){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37681);

(invoc_array[(1)] = G__37682);

(invoc_array[(2)] = G__37683);

(invoc_array[(3)] = G__37684);

(invoc_array[(4)] = G__37685);

(invoc_array[(5)] = G__37686);

(invoc_array[(6)] = G__37687);

(invoc_array[(7)] = G__37688);

(invoc_array[(8)] = G__37689);

(invoc_array[(9)] = G__37690);

(invoc_array[(10)] = G__37691);

(invoc_array[(11)] = G__37692);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703,G__37704,G__37705){
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

(invoc_array[(5)] = G__37698);

(invoc_array[(6)] = G__37699);

(invoc_array[(7)] = G__37700);

(invoc_array[(8)] = G__37701);

(invoc_array[(9)] = G__37702);

(invoc_array[(10)] = G__37703);

(invoc_array[(11)] = G__37704);

(invoc_array[(12)] = G__37705);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37714,G__37715,G__37716,G__37717,G__37718,G__37719,G__37720,G__37721,G__37722,G__37723,G__37724,G__37725,G__37726,G__37727){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37714);

(invoc_array[(1)] = G__37715);

(invoc_array[(2)] = G__37716);

(invoc_array[(3)] = G__37717);

(invoc_array[(4)] = G__37718);

(invoc_array[(5)] = G__37719);

(invoc_array[(6)] = G__37720);

(invoc_array[(7)] = G__37721);

(invoc_array[(8)] = G__37722);

(invoc_array[(9)] = G__37723);

(invoc_array[(10)] = G__37724);

(invoc_array[(11)] = G__37725);

(invoc_array[(12)] = G__37726);

(invoc_array[(13)] = G__37727);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37730,G__37731,G__37732,G__37733,G__37734,G__37735,G__37736,G__37737,G__37738,G__37739,G__37740,G__37741,G__37742,G__37743,G__37744){
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

(invoc_array[(5)] = G__37735);

(invoc_array[(6)] = G__37736);

(invoc_array[(7)] = G__37737);

(invoc_array[(8)] = G__37738);

(invoc_array[(9)] = G__37739);

(invoc_array[(10)] = G__37740);

(invoc_array[(11)] = G__37741);

(invoc_array[(12)] = G__37742);

(invoc_array[(13)] = G__37743);

(invoc_array[(14)] = G__37744);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37754,G__37755,G__37756,G__37757,G__37758,G__37759,G__37760,G__37761,G__37762,G__37763,G__37764,G__37765,G__37766,G__37767,G__37768,G__37769){
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

(invoc_array[(8)] = G__37762);

(invoc_array[(9)] = G__37763);

(invoc_array[(10)] = G__37764);

(invoc_array[(11)] = G__37765);

(invoc_array[(12)] = G__37766);

(invoc_array[(13)] = G__37767);

(invoc_array[(14)] = G__37768);

(invoc_array[(15)] = G__37769);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37770,G__37771,G__37772,G__37773,G__37774,G__37775,G__37776,G__37777,G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785,G__37786){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37770);

(invoc_array[(1)] = G__37771);

(invoc_array[(2)] = G__37772);

(invoc_array[(3)] = G__37773);

(invoc_array[(4)] = G__37774);

(invoc_array[(5)] = G__37775);

(invoc_array[(6)] = G__37776);

(invoc_array[(7)] = G__37777);

(invoc_array[(8)] = G__37778);

(invoc_array[(9)] = G__37779);

(invoc_array[(10)] = G__37780);

(invoc_array[(11)] = G__37781);

(invoc_array[(12)] = G__37782);

(invoc_array[(13)] = G__37783);

(invoc_array[(14)] = G__37784);

(invoc_array[(15)] = G__37785);

(invoc_array[(16)] = G__37786);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37799,G__37800,G__37801,G__37802,G__37803,G__37804,G__37805,G__37806,G__37807,G__37808,G__37809,G__37810,G__37811,G__37812,G__37813,G__37814,G__37815,G__37816){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37799);

(invoc_array[(1)] = G__37800);

(invoc_array[(2)] = G__37801);

(invoc_array[(3)] = G__37802);

(invoc_array[(4)] = G__37803);

(invoc_array[(5)] = G__37804);

(invoc_array[(6)] = G__37805);

(invoc_array[(7)] = G__37806);

(invoc_array[(8)] = G__37807);

(invoc_array[(9)] = G__37808);

(invoc_array[(10)] = G__37809);

(invoc_array[(11)] = G__37810);

(invoc_array[(12)] = G__37811);

(invoc_array[(13)] = G__37812);

(invoc_array[(14)] = G__37813);

(invoc_array[(15)] = G__37814);

(invoc_array[(16)] = G__37815);

(invoc_array[(17)] = G__37816);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37817,G__37818,G__37819,G__37820,G__37821,G__37822,G__37823,G__37824,G__37825,G__37826,G__37827,G__37828,G__37829,G__37830,G__37831,G__37832,G__37833,G__37834,G__37835){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37817);

(invoc_array[(1)] = G__37818);

(invoc_array[(2)] = G__37819);

(invoc_array[(3)] = G__37820);

(invoc_array[(4)] = G__37821);

(invoc_array[(5)] = G__37822);

(invoc_array[(6)] = G__37823);

(invoc_array[(7)] = G__37824);

(invoc_array[(8)] = G__37825);

(invoc_array[(9)] = G__37826);

(invoc_array[(10)] = G__37827);

(invoc_array[(11)] = G__37828);

(invoc_array[(12)] = G__37829);

(invoc_array[(13)] = G__37830);

(invoc_array[(14)] = G__37831);

(invoc_array[(15)] = G__37832);

(invoc_array[(16)] = G__37833);

(invoc_array[(17)] = G__37834);

(invoc_array[(18)] = G__37835);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37844,G__37845,G__37846,G__37847,G__37848,G__37849,G__37851,G__37852,G__37853,G__37854,G__37855,G__37856,G__37857,G__37858,G__37859,G__37860,G__37861,G__37862,G__37863,G__37864){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37844);

(invoc_array[(1)] = G__37845);

(invoc_array[(2)] = G__37846);

(invoc_array[(3)] = G__37847);

(invoc_array[(4)] = G__37848);

(invoc_array[(5)] = G__37849);

(invoc_array[(6)] = G__37851);

(invoc_array[(7)] = G__37852);

(invoc_array[(8)] = G__37853);

(invoc_array[(9)] = G__37854);

(invoc_array[(10)] = G__37855);

(invoc_array[(11)] = G__37856);

(invoc_array[(12)] = G__37857);

(invoc_array[(13)] = G__37858);

(invoc_array[(14)] = G__37859);

(invoc_array[(15)] = G__37860);

(invoc_array[(16)] = G__37861);

(invoc_array[(17)] = G__37862);

(invoc_array[(18)] = G__37863);

(invoc_array[(19)] = G__37864);

while(true){
var ret__36509__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36509__auto__)){
continue;
} else {
return ret__36509__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37597)].join('')));

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
var G__38269 = cljs.core.next(params__$1);
var G__38270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38271 = lets;
params__$1 = G__38269;
new_params = G__38270;
lets = G__38271;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38272 = cljs.core.next(params__$1);
var G__38273 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38274 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38272;
new_params = G__38273;
lets = G__38274;
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
var len__5749__auto___38275 = arguments.length;
var i__5750__auto___38276 = (0);
while(true){
if((i__5750__auto___38276 < len__5749__auto___38275)){
args__5755__auto__.push((arguments[i__5750__auto___38276]));

var G__38277 = (i__5750__auto___38276 + (1));
i__5750__auto___38276 = G__38277;
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

var vec__37895 = sig;
var seq__37896 = cljs.core.seq(vec__37895);
var first__37897 = cljs.core.first(seq__37896);
var seq__37896__$1 = cljs.core.next(seq__37896);
var params = first__37897;
var body = seq__37896__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq37888){
var G__37889 = cljs.core.first(seq37888);
var seq37888__$1 = cljs.core.next(seq37888);
var G__37890 = cljs.core.first(seq37888__$1);
var seq37888__$2 = cljs.core.next(seq37888__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37889,G__37890,seq37888__$2);
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
var G__38284 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38285 = cljs.core.next(fdecls);
ret = G__38284;
fdecls = G__38285;
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
var len__5749__auto___38288 = arguments.length;
var i__5750__auto___38289 = (0);
while(true){
if((i__5750__auto___38289 < len__5749__auto___38288)){
args__5755__auto__.push((arguments[i__5750__auto___38289]));

var G__38290 = (i__5750__auto___38289 + (1));
i__5750__auto___38289 = G__38290;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq37943){
var G__37945 = cljs.core.first(seq37943);
var seq37943__$1 = cljs.core.next(seq37943);
var G__37949 = cljs.core.first(seq37943__$1);
var seq37943__$2 = cljs.core.next(seq37943__$1);
var G__37950 = cljs.core.first(seq37943__$2);
var seq37943__$3 = cljs.core.next(seq37943__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37945,G__37949,G__37950,seq37943__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38298 = arguments.length;
var i__5750__auto___38299 = (0);
while(true){
if((i__5750__auto___38299 < len__5749__auto___38298)){
args__5755__auto__.push((arguments[i__5750__auto___38299]));

var G__38300 = (i__5750__auto___38299 + (1));
i__5750__auto___38299 = G__38300;
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
var G__38309 = cljs.core.cons(f,p);
var G__38310 = cljs.core.next(args__$1);
p = G__38309;
args__$1 = G__38310;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38312 = cljs.core.cons(f,p);
var G__38313 = cljs.core.next(args__$1);
p = G__38312;
args__$1 = G__38313;
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
var G__38314 = cljs.core.next(fd);
fd = G__38314;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38316 = cljs.core.next(fd);
fd = G__38316;
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
var G__38326 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38327 = cljs.core.next(ds);
acc = G__38326;
ds = G__38327;
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
var G__38333 = cljs.core.next(p);
var G__38334 = cljs.core.cons(cljs.core.first(p),d);
p = G__38333;
d = G__38334;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq37986){
var G__37987 = cljs.core.first(seq37986);
var seq37986__$1 = cljs.core.next(seq37986);
var G__37988 = cljs.core.first(seq37986__$1);
var seq37986__$2 = cljs.core.next(seq37986__$1);
var G__37989 = cljs.core.first(seq37986__$2);
var seq37986__$3 = cljs.core.next(seq37986__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37987,G__37988,G__37989,seq37986__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
