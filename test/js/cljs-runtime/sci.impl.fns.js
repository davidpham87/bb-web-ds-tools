goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__37329 = arguments.length;
switch (G__37329) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__37331 = fixed_arity;
switch (G__37331) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__37332){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__37332);

while(true){
var ret__36526__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36526__auto__)){
continue;
} else {
return ret__36526__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37332 = null;
if (arguments.length > 0) {
var G__38134__i = 0, G__38134__a = new Array(arguments.length -  0);
while (G__38134__i < G__38134__a.length) {G__38134__a[G__38134__i] = arguments[G__38134__i + 0]; ++G__38134__i;}
  G__37332 = new cljs.core.IndexedSeq(G__38134__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37332);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__38135){
var G__37332 = cljs.core.seq(arglist__38135);
return sci$impl$fns$arity_0__delegate(G__37332);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__37333,G__37334){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37333);

(invoc_array[vararg_idx] = G__37334);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37333,var_args){
var G__37334 = null;
if (arguments.length > 1) {
var G__38138__i = 0, G__38138__a = new Array(arguments.length -  1);
while (G__38138__i < G__38138__a.length) {G__38138__a[G__38138__i] = arguments[G__38138__i + 1]; ++G__38138__i;}
  G__37334 = new cljs.core.IndexedSeq(G__38138__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37333,G__37334);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__38139){
var G__37333 = cljs.core.first(arglist__38139);
var G__37334 = cljs.core.rest(arglist__38139);
return sci$impl$fns$arity_1__delegate(G__37333,G__37334);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__37335,G__37336,G__37337){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37335);

(invoc_array[(1)] = G__37336);

(invoc_array[vararg_idx] = G__37337);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37335,G__37336,var_args){
var G__37337 = null;
if (arguments.length > 2) {
var G__38140__i = 0, G__38140__a = new Array(arguments.length -  2);
while (G__38140__i < G__38140__a.length) {G__38140__a[G__38140__i] = arguments[G__38140__i + 2]; ++G__38140__i;}
  G__37337 = new cljs.core.IndexedSeq(G__38140__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37335,G__37336,G__37337);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__38141){
var G__37335 = cljs.core.first(arglist__38141);
arglist__38141 = cljs.core.next(arglist__38141);
var G__37336 = cljs.core.first(arglist__38141);
var G__37337 = cljs.core.rest(arglist__38141);
return sci$impl$fns$arity_2__delegate(G__37335,G__37336,G__37337);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__37338,G__37339,G__37340,G__37341){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37338);

(invoc_array[(1)] = G__37339);

(invoc_array[(2)] = G__37340);

(invoc_array[vararg_idx] = G__37341);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37338,G__37339,G__37340,var_args){
var G__37341 = null;
if (arguments.length > 3) {
var G__38144__i = 0, G__38144__a = new Array(arguments.length -  3);
while (G__38144__i < G__38144__a.length) {G__38144__a[G__38144__i] = arguments[G__38144__i + 3]; ++G__38144__i;}
  G__37341 = new cljs.core.IndexedSeq(G__38144__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37338,G__37339,G__37340,G__37341);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__38145){
var G__37338 = cljs.core.first(arglist__38145);
arglist__38145 = cljs.core.next(arglist__38145);
var G__37339 = cljs.core.first(arglist__38145);
arglist__38145 = cljs.core.next(arglist__38145);
var G__37340 = cljs.core.first(arglist__38145);
var G__37341 = cljs.core.rest(arglist__38145);
return sci$impl$fns$arity_3__delegate(G__37338,G__37339,G__37340,G__37341);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__37342,G__37343,G__37344,G__37345,G__37346){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37342);

(invoc_array[(1)] = G__37343);

(invoc_array[(2)] = G__37344);

(invoc_array[(3)] = G__37345);

(invoc_array[vararg_idx] = G__37346);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37342,G__37343,G__37344,G__37345,var_args){
var G__37346 = null;
if (arguments.length > 4) {
var G__38147__i = 0, G__38147__a = new Array(arguments.length -  4);
while (G__38147__i < G__38147__a.length) {G__38147__a[G__38147__i] = arguments[G__38147__i + 4]; ++G__38147__i;}
  G__37346 = new cljs.core.IndexedSeq(G__38147__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37342,G__37343,G__37344,G__37345,G__37346);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__38149){
var G__37342 = cljs.core.first(arglist__38149);
arglist__38149 = cljs.core.next(arglist__38149);
var G__37343 = cljs.core.first(arglist__38149);
arglist__38149 = cljs.core.next(arglist__38149);
var G__37344 = cljs.core.first(arglist__38149);
arglist__38149 = cljs.core.next(arglist__38149);
var G__37345 = cljs.core.first(arglist__38149);
var G__37346 = cljs.core.rest(arglist__38149);
return sci$impl$fns$arity_4__delegate(G__37342,G__37343,G__37344,G__37345,G__37346);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__37351,G__37352,G__37353,G__37354,G__37355,G__37356){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37351);

(invoc_array[(1)] = G__37352);

(invoc_array[(2)] = G__37353);

(invoc_array[(3)] = G__37354);

(invoc_array[(4)] = G__37355);

(invoc_array[vararg_idx] = G__37356);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37351,G__37352,G__37353,G__37354,G__37355,var_args){
var G__37356 = null;
if (arguments.length > 5) {
var G__38153__i = 0, G__38153__a = new Array(arguments.length -  5);
while (G__38153__i < G__38153__a.length) {G__38153__a[G__38153__i] = arguments[G__38153__i + 5]; ++G__38153__i;}
  G__37356 = new cljs.core.IndexedSeq(G__38153__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__38154){
var G__37351 = cljs.core.first(arglist__38154);
arglist__38154 = cljs.core.next(arglist__38154);
var G__37352 = cljs.core.first(arglist__38154);
arglist__38154 = cljs.core.next(arglist__38154);
var G__37353 = cljs.core.first(arglist__38154);
arglist__38154 = cljs.core.next(arglist__38154);
var G__37354 = cljs.core.first(arglist__38154);
arglist__38154 = cljs.core.next(arglist__38154);
var G__37355 = cljs.core.first(arglist__38154);
var G__37356 = cljs.core.rest(arglist__38154);
return sci$impl$fns$arity_5__delegate(G__37351,G__37352,G__37353,G__37354,G__37355,G__37356);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37357);

(invoc_array[(1)] = G__37358);

(invoc_array[(2)] = G__37359);

(invoc_array[(3)] = G__37360);

(invoc_array[(4)] = G__37361);

(invoc_array[(5)] = G__37362);

(invoc_array[vararg_idx] = G__37363);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,var_args){
var G__37363 = null;
if (arguments.length > 6) {
var G__38155__i = 0, G__38155__a = new Array(arguments.length -  6);
while (G__38155__i < G__38155__a.length) {G__38155__a[G__38155__i] = arguments[G__38155__i + 6]; ++G__38155__i;}
  G__37363 = new cljs.core.IndexedSeq(G__38155__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__38157){
var G__37357 = cljs.core.first(arglist__38157);
arglist__38157 = cljs.core.next(arglist__38157);
var G__37358 = cljs.core.first(arglist__38157);
arglist__38157 = cljs.core.next(arglist__38157);
var G__37359 = cljs.core.first(arglist__38157);
arglist__38157 = cljs.core.next(arglist__38157);
var G__37360 = cljs.core.first(arglist__38157);
arglist__38157 = cljs.core.next(arglist__38157);
var G__37361 = cljs.core.first(arglist__38157);
arglist__38157 = cljs.core.next(arglist__38157);
var G__37362 = cljs.core.first(arglist__38157);
var G__37363 = cljs.core.rest(arglist__38157);
return sci$impl$fns$arity_6__delegate(G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37364,G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,G__37371){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37364);

(invoc_array[(1)] = G__37365);

(invoc_array[(2)] = G__37366);

(invoc_array[(3)] = G__37367);

(invoc_array[(4)] = G__37368);

(invoc_array[(5)] = G__37369);

(invoc_array[(6)] = G__37370);

(invoc_array[vararg_idx] = G__37371);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37364,G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,var_args){
var G__37371 = null;
if (arguments.length > 7) {
var G__38161__i = 0, G__38161__a = new Array(arguments.length -  7);
while (G__38161__i < G__38161__a.length) {G__38161__a[G__38161__i] = arguments[G__38161__i + 7]; ++G__38161__i;}
  G__37371 = new cljs.core.IndexedSeq(G__38161__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37364,G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,G__37371);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__38162){
var G__37364 = cljs.core.first(arglist__38162);
arglist__38162 = cljs.core.next(arglist__38162);
var G__37365 = cljs.core.first(arglist__38162);
arglist__38162 = cljs.core.next(arglist__38162);
var G__37366 = cljs.core.first(arglist__38162);
arglist__38162 = cljs.core.next(arglist__38162);
var G__37367 = cljs.core.first(arglist__38162);
arglist__38162 = cljs.core.next(arglist__38162);
var G__37368 = cljs.core.first(arglist__38162);
arglist__38162 = cljs.core.next(arglist__38162);
var G__37369 = cljs.core.first(arglist__38162);
arglist__38162 = cljs.core.next(arglist__38162);
var G__37370 = cljs.core.first(arglist__38162);
var G__37371 = cljs.core.rest(arglist__38162);
return sci$impl$fns$arity_7__delegate(G__37364,G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,G__37371);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384){
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

(invoc_array[vararg_idx] = G__37384);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,var_args){
var G__37384 = null;
if (arguments.length > 8) {
var G__38166__i = 0, G__38166__a = new Array(arguments.length -  8);
while (G__38166__i < G__38166__a.length) {G__38166__a[G__38166__i] = arguments[G__38166__i + 8]; ++G__38166__i;}
  G__37384 = new cljs.core.IndexedSeq(G__38166__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__38167){
var G__37376 = cljs.core.first(arglist__38167);
arglist__38167 = cljs.core.next(arglist__38167);
var G__37377 = cljs.core.first(arglist__38167);
arglist__38167 = cljs.core.next(arglist__38167);
var G__37378 = cljs.core.first(arglist__38167);
arglist__38167 = cljs.core.next(arglist__38167);
var G__37379 = cljs.core.first(arglist__38167);
arglist__38167 = cljs.core.next(arglist__38167);
var G__37380 = cljs.core.first(arglist__38167);
arglist__38167 = cljs.core.next(arglist__38167);
var G__37381 = cljs.core.first(arglist__38167);
arglist__38167 = cljs.core.next(arglist__38167);
var G__37382 = cljs.core.first(arglist__38167);
arglist__38167 = cljs.core.next(arglist__38167);
var G__37383 = cljs.core.first(arglist__38167);
var G__37384 = cljs.core.rest(arglist__38167);
return sci$impl$fns$arity_8__delegate(G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37385);

(invoc_array[(1)] = G__37386);

(invoc_array[(2)] = G__37387);

(invoc_array[(3)] = G__37388);

(invoc_array[(4)] = G__37389);

(invoc_array[(5)] = G__37390);

(invoc_array[(6)] = G__37391);

(invoc_array[(7)] = G__37392);

(invoc_array[(8)] = G__37393);

(invoc_array[vararg_idx] = G__37394);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,var_args){
var G__37394 = null;
if (arguments.length > 9) {
var G__38169__i = 0, G__38169__a = new Array(arguments.length -  9);
while (G__38169__i < G__38169__a.length) {G__38169__a[G__38169__i] = arguments[G__38169__i + 9]; ++G__38169__i;}
  G__37394 = new cljs.core.IndexedSeq(G__38169__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__38170){
var G__37385 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37386 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37387 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37388 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37389 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37390 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37391 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37392 = cljs.core.first(arglist__38170);
arglist__38170 = cljs.core.next(arglist__38170);
var G__37393 = cljs.core.first(arglist__38170);
var G__37394 = cljs.core.rest(arglist__38170);
return sci$impl$fns$arity_9__delegate(G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422,G__37423){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37413);

(invoc_array[(1)] = G__37414);

(invoc_array[(2)] = G__37415);

(invoc_array[(3)] = G__37416);

(invoc_array[(4)] = G__37417);

(invoc_array[(5)] = G__37418);

(invoc_array[(6)] = G__37419);

(invoc_array[(7)] = G__37420);

(invoc_array[(8)] = G__37421);

(invoc_array[(9)] = G__37422);

(invoc_array[vararg_idx] = G__37423);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422,var_args){
var G__37423 = null;
if (arguments.length > 10) {
var G__38176__i = 0, G__38176__a = new Array(arguments.length -  10);
while (G__38176__i < G__38176__a.length) {G__38176__a[G__38176__i] = arguments[G__38176__i + 10]; ++G__38176__i;}
  G__37423 = new cljs.core.IndexedSeq(G__38176__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422,G__37423);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__38177){
var G__37413 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37414 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37415 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37416 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37417 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37418 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37419 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37420 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37421 = cljs.core.first(arglist__38177);
arglist__38177 = cljs.core.next(arglist__38177);
var G__37422 = cljs.core.first(arglist__38177);
var G__37423 = cljs.core.rest(arglist__38177);
return sci$impl$fns$arity_10__delegate(G__37413,G__37414,G__37415,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422,G__37423);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37430);

(invoc_array[(1)] = G__37431);

(invoc_array[(2)] = G__37432);

(invoc_array[(3)] = G__37433);

(invoc_array[(4)] = G__37434);

(invoc_array[(5)] = G__37435);

(invoc_array[(6)] = G__37436);

(invoc_array[(7)] = G__37437);

(invoc_array[(8)] = G__37438);

(invoc_array[(9)] = G__37439);

(invoc_array[(10)] = G__37440);

(invoc_array[vararg_idx] = G__37441);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,var_args){
var G__37441 = null;
if (arguments.length > 11) {
var G__38181__i = 0, G__38181__a = new Array(arguments.length -  11);
while (G__38181__i < G__38181__a.length) {G__38181__a[G__38181__i] = arguments[G__38181__i + 11]; ++G__38181__i;}
  G__37441 = new cljs.core.IndexedSeq(G__38181__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__38182){
var G__37430 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37431 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37432 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37433 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37434 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37435 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37436 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37437 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37438 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37439 = cljs.core.first(arglist__38182);
arglist__38182 = cljs.core.next(arglist__38182);
var G__37440 = cljs.core.first(arglist__38182);
var G__37441 = cljs.core.rest(arglist__38182);
return sci$impl$fns$arity_11__delegate(G__37430,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460,G__37461,G__37462){
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

(invoc_array[(10)] = G__37460);

(invoc_array[(11)] = G__37461);

(invoc_array[vararg_idx] = G__37462);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460,G__37461,var_args){
var G__37462 = null;
if (arguments.length > 12) {
var G__38190__i = 0, G__38190__a = new Array(arguments.length -  12);
while (G__38190__i < G__38190__a.length) {G__38190__a[G__38190__i] = arguments[G__38190__i + 12]; ++G__38190__i;}
  G__37462 = new cljs.core.IndexedSeq(G__38190__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460,G__37461,G__37462);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__38191){
var G__37450 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37451 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37452 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37453 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37454 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37455 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37456 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37457 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37458 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37459 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37460 = cljs.core.first(arglist__38191);
arglist__38191 = cljs.core.next(arglist__38191);
var G__37461 = cljs.core.first(arglist__38191);
var G__37462 = cljs.core.rest(arglist__38191);
return sci$impl$fns$arity_12__delegate(G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460,G__37461,G__37462);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37471);

(invoc_array[(1)] = G__37472);

(invoc_array[(2)] = G__37473);

(invoc_array[(3)] = G__37474);

(invoc_array[(4)] = G__37475);

(invoc_array[(5)] = G__37476);

(invoc_array[(6)] = G__37477);

(invoc_array[(7)] = G__37478);

(invoc_array[(8)] = G__37479);

(invoc_array[(9)] = G__37480);

(invoc_array[(10)] = G__37481);

(invoc_array[(11)] = G__37482);

(invoc_array[(12)] = G__37483);

(invoc_array[vararg_idx] = G__37484);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,var_args){
var G__37484 = null;
if (arguments.length > 13) {
var G__38193__i = 0, G__38193__a = new Array(arguments.length -  13);
while (G__38193__i < G__38193__a.length) {G__38193__a[G__38193__i] = arguments[G__38193__i + 13]; ++G__38193__i;}
  G__37484 = new cljs.core.IndexedSeq(G__38193__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__38194){
var G__37471 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37472 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37473 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37474 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37475 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37476 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37477 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37478 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37479 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37480 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37481 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37482 = cljs.core.first(arglist__38194);
arglist__38194 = cljs.core.next(arglist__38194);
var G__37483 = cljs.core.first(arglist__38194);
var G__37484 = cljs.core.rest(arglist__38194);
return sci$impl$fns$arity_13__delegate(G__37471,G__37472,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500){
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

(invoc_array[(13)] = G__37499);

(invoc_array[vararg_idx] = G__37500);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,var_args){
var G__37500 = null;
if (arguments.length > 14) {
var G__38199__i = 0, G__38199__a = new Array(arguments.length -  14);
while (G__38199__i < G__38199__a.length) {G__38199__a[G__38199__i] = arguments[G__38199__i + 14]; ++G__38199__i;}
  G__37500 = new cljs.core.IndexedSeq(G__38199__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__38200){
var G__37486 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37487 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37488 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37489 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37490 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37491 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37492 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37493 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37494 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37495 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37496 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37497 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37498 = cljs.core.first(arglist__38200);
arglist__38200 = cljs.core.next(arglist__38200);
var G__37499 = cljs.core.first(arglist__38200);
var G__37500 = cljs.core.rest(arglist__38200);
return sci$impl$fns$arity_14__delegate(G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37504);

(invoc_array[(1)] = G__37505);

(invoc_array[(2)] = G__37506);

(invoc_array[(3)] = G__37507);

(invoc_array[(4)] = G__37508);

(invoc_array[(5)] = G__37509);

(invoc_array[(6)] = G__37510);

(invoc_array[(7)] = G__37511);

(invoc_array[(8)] = G__37512);

(invoc_array[(9)] = G__37513);

(invoc_array[(10)] = G__37514);

(invoc_array[(11)] = G__37515);

(invoc_array[(12)] = G__37516);

(invoc_array[(13)] = G__37517);

(invoc_array[(14)] = G__37518);

(invoc_array[vararg_idx] = G__37519);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,var_args){
var G__37519 = null;
if (arguments.length > 15) {
var G__38205__i = 0, G__38205__a = new Array(arguments.length -  15);
while (G__38205__i < G__38205__a.length) {G__38205__a[G__38205__i] = arguments[G__38205__i + 15]; ++G__38205__i;}
  G__37519 = new cljs.core.IndexedSeq(G__38205__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__38206){
var G__37504 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37505 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37506 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37507 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37508 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37509 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37510 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37511 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37512 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37513 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37514 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37515 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37516 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37517 = cljs.core.first(arglist__38206);
arglist__38206 = cljs.core.next(arglist__38206);
var G__37518 = cljs.core.first(arglist__38206);
var G__37519 = cljs.core.rest(arglist__38206);
return sci$impl$fns$arity_15__delegate(G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542){
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

(invoc_array[(12)] = G__37538);

(invoc_array[(13)] = G__37539);

(invoc_array[(14)] = G__37540);

(invoc_array[(15)] = G__37541);

(invoc_array[vararg_idx] = G__37542);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,var_args){
var G__37542 = null;
if (arguments.length > 16) {
var G__38207__i = 0, G__38207__a = new Array(arguments.length -  16);
while (G__38207__i < G__38207__a.length) {G__38207__a[G__38207__i] = arguments[G__38207__i + 16]; ++G__38207__i;}
  G__37542 = new cljs.core.IndexedSeq(G__38207__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__38208){
var G__37526 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37527 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37528 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37529 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37530 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37531 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37532 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37533 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37534 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37535 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37536 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37537 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37538 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37539 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37540 = cljs.core.first(arglist__38208);
arglist__38208 = cljs.core.next(arglist__38208);
var G__37541 = cljs.core.first(arglist__38208);
var G__37542 = cljs.core.rest(arglist__38208);
return sci$impl$fns$arity_16__delegate(G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37550);

(invoc_array[(1)] = G__37551);

(invoc_array[(2)] = G__37552);

(invoc_array[(3)] = G__37553);

(invoc_array[(4)] = G__37554);

(invoc_array[(5)] = G__37555);

(invoc_array[(6)] = G__37556);

(invoc_array[(7)] = G__37557);

(invoc_array[(8)] = G__37558);

(invoc_array[(9)] = G__37559);

(invoc_array[(10)] = G__37560);

(invoc_array[(11)] = G__37561);

(invoc_array[(12)] = G__37562);

(invoc_array[(13)] = G__37563);

(invoc_array[(14)] = G__37564);

(invoc_array[(15)] = G__37565);

(invoc_array[(16)] = G__37566);

(invoc_array[vararg_idx] = G__37567);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,var_args){
var G__37567 = null;
if (arguments.length > 17) {
var G__38215__i = 0, G__38215__a = new Array(arguments.length -  17);
while (G__38215__i < G__38215__a.length) {G__38215__a[G__38215__i] = arguments[G__38215__i + 17]; ++G__38215__i;}
  G__37567 = new cljs.core.IndexedSeq(G__38215__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__38216){
var G__37550 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37551 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37552 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37553 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37554 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37555 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37556 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37557 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37558 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37559 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37560 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37561 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37562 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37563 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37564 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37565 = cljs.core.first(arglist__38216);
arglist__38216 = cljs.core.next(arglist__38216);
var G__37566 = cljs.core.first(arglist__38216);
var G__37567 = cljs.core.rest(arglist__38216);
return sci$impl$fns$arity_17__delegate(G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37573);

(invoc_array[(1)] = G__37574);

(invoc_array[(2)] = G__37575);

(invoc_array[(3)] = G__37576);

(invoc_array[(4)] = G__37577);

(invoc_array[(5)] = G__37578);

(invoc_array[(6)] = G__37579);

(invoc_array[(7)] = G__37580);

(invoc_array[(8)] = G__37581);

(invoc_array[(9)] = G__37582);

(invoc_array[(10)] = G__37583);

(invoc_array[(11)] = G__37584);

(invoc_array[(12)] = G__37585);

(invoc_array[(13)] = G__37586);

(invoc_array[(14)] = G__37587);

(invoc_array[(15)] = G__37588);

(invoc_array[(16)] = G__37589);

(invoc_array[(17)] = G__37590);

(invoc_array[vararg_idx] = G__37591);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,var_args){
var G__37591 = null;
if (arguments.length > 18) {
var G__38219__i = 0, G__38219__a = new Array(arguments.length -  18);
while (G__38219__i < G__38219__a.length) {G__38219__a[G__38219__i] = arguments[G__38219__i + 18]; ++G__38219__i;}
  G__37591 = new cljs.core.IndexedSeq(G__38219__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__38220){
var G__37573 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37574 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37575 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37576 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37577 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37578 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37579 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37580 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37581 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37582 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37583 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37584 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37585 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37586 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37587 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37588 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37589 = cljs.core.first(arglist__38220);
arglist__38220 = cljs.core.next(arglist__38220);
var G__37590 = cljs.core.first(arglist__38220);
var G__37591 = cljs.core.rest(arglist__38220);
return sci$impl$fns$arity_18__delegate(G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628){
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

(invoc_array[(16)] = G__37625);

(invoc_array[(17)] = G__37626);

(invoc_array[(18)] = G__37627);

(invoc_array[vararg_idx] = G__37628);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,var_args){
var G__37628 = null;
if (arguments.length > 19) {
var G__38221__i = 0, G__38221__a = new Array(arguments.length -  19);
while (G__38221__i < G__38221__a.length) {G__38221__a[G__38221__i] = arguments[G__38221__i + 19]; ++G__38221__i;}
  G__37628 = new cljs.core.IndexedSeq(G__38221__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__38222){
var G__37609 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37610 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37611 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37612 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37613 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37614 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37615 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37616 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37617 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37618 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37619 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37620 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37621 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37622 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37623 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37624 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37625 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37626 = cljs.core.first(arglist__38222);
arglist__38222 = cljs.core.next(arglist__38222);
var G__37627 = cljs.core.first(arglist__38222);
var G__37628 = cljs.core.rest(arglist__38222);
return sci$impl$fns$arity_19__delegate(G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37629);

(invoc_array[(1)] = G__37630);

(invoc_array[(2)] = G__37631);

(invoc_array[(3)] = G__37632);

(invoc_array[(4)] = G__37633);

(invoc_array[(5)] = G__37634);

(invoc_array[(6)] = G__37635);

(invoc_array[(7)] = G__37636);

(invoc_array[(8)] = G__37637);

(invoc_array[(9)] = G__37638);

(invoc_array[(10)] = G__37639);

(invoc_array[(11)] = G__37640);

(invoc_array[(12)] = G__37641);

(invoc_array[(13)] = G__37642);

(invoc_array[(14)] = G__37643);

(invoc_array[(15)] = G__37644);

(invoc_array[(16)] = G__37645);

(invoc_array[(17)] = G__37646);

(invoc_array[(18)] = G__37647);

(invoc_array[(19)] = G__37648);

(invoc_array[vararg_idx] = G__37649);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,var_args){
var G__37649 = null;
if (arguments.length > 20) {
var G__38231__i = 0, G__38231__a = new Array(arguments.length -  20);
while (G__38231__i < G__38231__a.length) {G__38231__a[G__38231__i] = arguments[G__38231__i + 20]; ++G__38231__i;}
  G__37649 = new cljs.core.IndexedSeq(G__38231__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__38232){
var G__37629 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37630 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37631 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37632 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37633 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37634 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37635 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37636 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37637 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37638 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37639 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37640 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37641 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37642 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37643 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37644 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37645 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37646 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37647 = cljs.core.first(arglist__38232);
arglist__38232 = cljs.core.next(arglist__38232);
var G__37648 = cljs.core.first(arglist__38232);
var G__37649 = cljs.core.rest(arglist__38232);
return sci$impl$fns$arity_20__delegate(G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37331)].join('')));

}
})():(function (){var G__37667 = fixed_arity;
switch (G__37667) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36526__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36526__auto__)){
continue;
} else {
return ret__36526__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37671){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37671);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37677,G__37678){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37677);

(invoc_array[(1)] = G__37678);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37685,G__37686,G__37687){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37685);

(invoc_array[(1)] = G__37686);

(invoc_array[(2)] = G__37687);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37688,G__37689,G__37690,G__37691){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37688);

(invoc_array[(1)] = G__37689);

(invoc_array[(2)] = G__37690);

(invoc_array[(3)] = G__37691);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37696,G__37697,G__37698,G__37699,G__37700){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37696);

(invoc_array[(1)] = G__37697);

(invoc_array[(2)] = G__37698);

(invoc_array[(3)] = G__37699);

(invoc_array[(4)] = G__37700);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37711,G__37712,G__37713,G__37714,G__37715,G__37716){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37711);

(invoc_array[(1)] = G__37712);

(invoc_array[(2)] = G__37713);

(invoc_array[(3)] = G__37714);

(invoc_array[(4)] = G__37715);

(invoc_array[(5)] = G__37716);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37717,G__37718,G__37719,G__37720,G__37721,G__37722,G__37723){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37717);

(invoc_array[(1)] = G__37718);

(invoc_array[(2)] = G__37719);

(invoc_array[(3)] = G__37720);

(invoc_array[(4)] = G__37721);

(invoc_array[(5)] = G__37722);

(invoc_array[(6)] = G__37723);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37724,G__37725,G__37726,G__37727,G__37728,G__37729,G__37730,G__37731){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37724);

(invoc_array[(1)] = G__37725);

(invoc_array[(2)] = G__37726);

(invoc_array[(3)] = G__37727);

(invoc_array[(4)] = G__37728);

(invoc_array[(5)] = G__37729);

(invoc_array[(6)] = G__37730);

(invoc_array[(7)] = G__37731);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37741,G__37742,G__37743,G__37744,G__37745,G__37746,G__37747,G__37748,G__37749){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37741);

(invoc_array[(1)] = G__37742);

(invoc_array[(2)] = G__37743);

(invoc_array[(3)] = G__37744);

(invoc_array[(4)] = G__37745);

(invoc_array[(5)] = G__37746);

(invoc_array[(6)] = G__37747);

(invoc_array[(7)] = G__37748);

(invoc_array[(8)] = G__37749);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37750,G__37751,G__37752,G__37753,G__37754,G__37755,G__37756,G__37757,G__37758,G__37759){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37750);

(invoc_array[(1)] = G__37751);

(invoc_array[(2)] = G__37752);

(invoc_array[(3)] = G__37753);

(invoc_array[(4)] = G__37754);

(invoc_array[(5)] = G__37755);

(invoc_array[(6)] = G__37756);

(invoc_array[(7)] = G__37757);

(invoc_array[(8)] = G__37758);

(invoc_array[(9)] = G__37759);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37791,G__37792,G__37793,G__37794,G__37795,G__37796,G__37797,G__37798,G__37799,G__37800,G__37801){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37791);

(invoc_array[(1)] = G__37792);

(invoc_array[(2)] = G__37793);

(invoc_array[(3)] = G__37794);

(invoc_array[(4)] = G__37795);

(invoc_array[(5)] = G__37796);

(invoc_array[(6)] = G__37797);

(invoc_array[(7)] = G__37798);

(invoc_array[(8)] = G__37799);

(invoc_array[(9)] = G__37800);

(invoc_array[(10)] = G__37801);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37805,G__37806,G__37807,G__37808,G__37809,G__37810,G__37811,G__37812,G__37813,G__37814,G__37815,G__37816){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37805);

(invoc_array[(1)] = G__37806);

(invoc_array[(2)] = G__37807);

(invoc_array[(3)] = G__37808);

(invoc_array[(4)] = G__37809);

(invoc_array[(5)] = G__37810);

(invoc_array[(6)] = G__37811);

(invoc_array[(7)] = G__37812);

(invoc_array[(8)] = G__37813);

(invoc_array[(9)] = G__37814);

(invoc_array[(10)] = G__37815);

(invoc_array[(11)] = G__37816);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37820,G__37821,G__37822,G__37823,G__37824,G__37825,G__37826,G__37827,G__37828,G__37829,G__37830,G__37831,G__37832){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37820);

(invoc_array[(1)] = G__37821);

(invoc_array[(2)] = G__37822);

(invoc_array[(3)] = G__37823);

(invoc_array[(4)] = G__37824);

(invoc_array[(5)] = G__37825);

(invoc_array[(6)] = G__37826);

(invoc_array[(7)] = G__37827);

(invoc_array[(8)] = G__37828);

(invoc_array[(9)] = G__37829);

(invoc_array[(10)] = G__37830);

(invoc_array[(11)] = G__37831);

(invoc_array[(12)] = G__37832);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37845,G__37846,G__37847,G__37848,G__37849,G__37850,G__37851,G__37852,G__37853,G__37854,G__37855,G__37856,G__37857,G__37858){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37845);

(invoc_array[(1)] = G__37846);

(invoc_array[(2)] = G__37847);

(invoc_array[(3)] = G__37848);

(invoc_array[(4)] = G__37849);

(invoc_array[(5)] = G__37850);

(invoc_array[(6)] = G__37851);

(invoc_array[(7)] = G__37852);

(invoc_array[(8)] = G__37853);

(invoc_array[(9)] = G__37854);

(invoc_array[(10)] = G__37855);

(invoc_array[(11)] = G__37856);

(invoc_array[(12)] = G__37857);

(invoc_array[(13)] = G__37858);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37895,G__37896,G__37897,G__37898,G__37899,G__37900,G__37901,G__37902,G__37903,G__37904,G__37905,G__37906,G__37907,G__37908,G__37909){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37895);

(invoc_array[(1)] = G__37896);

(invoc_array[(2)] = G__37897);

(invoc_array[(3)] = G__37898);

(invoc_array[(4)] = G__37899);

(invoc_array[(5)] = G__37900);

(invoc_array[(6)] = G__37901);

(invoc_array[(7)] = G__37902);

(invoc_array[(8)] = G__37903);

(invoc_array[(9)] = G__37904);

(invoc_array[(10)] = G__37905);

(invoc_array[(11)] = G__37906);

(invoc_array[(12)] = G__37907);

(invoc_array[(13)] = G__37908);

(invoc_array[(14)] = G__37909);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37941,G__37942,G__37943,G__37944,G__37945,G__37946,G__37947,G__37948,G__37949,G__37950,G__37951,G__37952,G__37953,G__37954,G__37955,G__37956){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37941);

(invoc_array[(1)] = G__37942);

(invoc_array[(2)] = G__37943);

(invoc_array[(3)] = G__37944);

(invoc_array[(4)] = G__37945);

(invoc_array[(5)] = G__37946);

(invoc_array[(6)] = G__37947);

(invoc_array[(7)] = G__37948);

(invoc_array[(8)] = G__37949);

(invoc_array[(9)] = G__37950);

(invoc_array[(10)] = G__37951);

(invoc_array[(11)] = G__37952);

(invoc_array[(12)] = G__37953);

(invoc_array[(13)] = G__37954);

(invoc_array[(14)] = G__37955);

(invoc_array[(15)] = G__37956);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37963,G__37964,G__37965,G__37966,G__37967,G__37968,G__37969,G__37970,G__37971,G__37972,G__37973,G__37974,G__37975,G__37977,G__37978,G__37979,G__37980){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37963);

(invoc_array[(1)] = G__37964);

(invoc_array[(2)] = G__37965);

(invoc_array[(3)] = G__37966);

(invoc_array[(4)] = G__37967);

(invoc_array[(5)] = G__37968);

(invoc_array[(6)] = G__37969);

(invoc_array[(7)] = G__37970);

(invoc_array[(8)] = G__37971);

(invoc_array[(9)] = G__37972);

(invoc_array[(10)] = G__37973);

(invoc_array[(11)] = G__37974);

(invoc_array[(12)] = G__37975);

(invoc_array[(13)] = G__37977);

(invoc_array[(14)] = G__37978);

(invoc_array[(15)] = G__37979);

(invoc_array[(16)] = G__37980);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37986,G__37987,G__37988,G__37989,G__37990,G__37991,G__37992,G__37993,G__37994,G__37995,G__37996,G__37997,G__37998,G__37999,G__38000,G__38001,G__38002,G__38003){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37986);

(invoc_array[(1)] = G__37987);

(invoc_array[(2)] = G__37988);

(invoc_array[(3)] = G__37989);

(invoc_array[(4)] = G__37990);

(invoc_array[(5)] = G__37991);

(invoc_array[(6)] = G__37992);

(invoc_array[(7)] = G__37993);

(invoc_array[(8)] = G__37994);

(invoc_array[(9)] = G__37995);

(invoc_array[(10)] = G__37996);

(invoc_array[(11)] = G__37997);

(invoc_array[(12)] = G__37998);

(invoc_array[(13)] = G__37999);

(invoc_array[(14)] = G__38000);

(invoc_array[(15)] = G__38001);

(invoc_array[(16)] = G__38002);

(invoc_array[(17)] = G__38003);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__38013,G__38014,G__38015,G__38016,G__38017,G__38018,G__38019,G__38020,G__38021,G__38022,G__38023,G__38024,G__38025,G__38026,G__38027,G__38028,G__38029,G__38030,G__38031){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__38013);

(invoc_array[(1)] = G__38014);

(invoc_array[(2)] = G__38015);

(invoc_array[(3)] = G__38016);

(invoc_array[(4)] = G__38017);

(invoc_array[(5)] = G__38018);

(invoc_array[(6)] = G__38019);

(invoc_array[(7)] = G__38020);

(invoc_array[(8)] = G__38021);

(invoc_array[(9)] = G__38022);

(invoc_array[(10)] = G__38023);

(invoc_array[(11)] = G__38024);

(invoc_array[(12)] = G__38025);

(invoc_array[(13)] = G__38026);

(invoc_array[(14)] = G__38027);

(invoc_array[(15)] = G__38028);

(invoc_array[(16)] = G__38029);

(invoc_array[(17)] = G__38030);

(invoc_array[(18)] = G__38031);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__38043,G__38044,G__38045,G__38046,G__38047,G__38048,G__38049,G__38050,G__38051,G__38052,G__38053,G__38054,G__38055,G__38056,G__38057,G__38058,G__38059,G__38060,G__38061,G__38062){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__38043);

(invoc_array[(1)] = G__38044);

(invoc_array[(2)] = G__38045);

(invoc_array[(3)] = G__38046);

(invoc_array[(4)] = G__38047);

(invoc_array[(5)] = G__38048);

(invoc_array[(6)] = G__38049);

(invoc_array[(7)] = G__38050);

(invoc_array[(8)] = G__38051);

(invoc_array[(9)] = G__38052);

(invoc_array[(10)] = G__38053);

(invoc_array[(11)] = G__38054);

(invoc_array[(12)] = G__38055);

(invoc_array[(13)] = G__38056);

(invoc_array[(14)] = G__38057);

(invoc_array[(15)] = G__38058);

(invoc_array[(16)] = G__38059);

(invoc_array[(17)] = G__38060);

(invoc_array[(18)] = G__38061);

(invoc_array[(19)] = G__38062);

while(true){
var ret__36527__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36527__auto__)){
continue;
} else {
return ret__36527__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37667)].join('')));

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
var G__38273 = cljs.core.next(params__$1);
var G__38274 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38275 = lets;
params__$1 = G__38273;
new_params = G__38274;
lets = G__38275;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38276 = cljs.core.next(params__$1);
var G__38277 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38278 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38276;
new_params = G__38277;
lets = G__38278;
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
var len__5749__auto___38279 = arguments.length;
var i__5750__auto___38280 = (0);
while(true){
if((i__5750__auto___38280 < len__5749__auto___38279)){
args__5755__auto__.push((arguments[i__5750__auto___38280]));

var G__38281 = (i__5750__auto___38280 + (1));
i__5750__auto___38280 = G__38281;
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

var vec__38075 = sig;
var seq__38076 = cljs.core.seq(vec__38075);
var first__38077 = cljs.core.first(seq__38076);
var seq__38076__$1 = cljs.core.next(seq__38076);
var params = first__38077;
var body = seq__38076__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq38072){
var G__38073 = cljs.core.first(seq38072);
var seq38072__$1 = cljs.core.next(seq38072);
var G__38074 = cljs.core.first(seq38072__$1);
var seq38072__$2 = cljs.core.next(seq38072__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38073,G__38074,seq38072__$2);
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
var G__38290 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38291 = cljs.core.next(fdecls);
ret = G__38290;
fdecls = G__38291;
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
var len__5749__auto___38293 = arguments.length;
var i__5750__auto___38294 = (0);
while(true){
if((i__5750__auto___38294 < len__5749__auto___38293)){
args__5755__auto__.push((arguments[i__5750__auto___38294]));

var G__38295 = (i__5750__auto___38294 + (1));
i__5750__auto___38294 = G__38295;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq38091){
var G__38092 = cljs.core.first(seq38091);
var seq38091__$1 = cljs.core.next(seq38091);
var G__38093 = cljs.core.first(seq38091__$1);
var seq38091__$2 = cljs.core.next(seq38091__$1);
var G__38094 = cljs.core.first(seq38091__$2);
var seq38091__$3 = cljs.core.next(seq38091__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38092,G__38093,G__38094,seq38091__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38303 = arguments.length;
var i__5750__auto___38313 = (0);
while(true){
if((i__5750__auto___38313 < len__5749__auto___38303)){
args__5755__auto__.push((arguments[i__5750__auto___38313]));

var G__38315 = (i__5750__auto___38313 + (1));
i__5750__auto___38313 = G__38315;
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
var G__38326 = cljs.core.cons(f,p);
var G__38327 = cljs.core.next(args__$1);
p = G__38326;
args__$1 = G__38327;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38332 = cljs.core.cons(f,p);
var G__38333 = cljs.core.next(args__$1);
p = G__38332;
args__$1 = G__38333;
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
var G__38334 = cljs.core.next(fd);
fd = G__38334;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38335 = cljs.core.next(fd);
fd = G__38335;
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
var G__38342 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38343 = cljs.core.next(ds);
acc = G__38342;
ds = G__38343;
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
var G__38344 = cljs.core.next(p);
var G__38345 = cljs.core.cons(cljs.core.first(p),d);
p = G__38344;
d = G__38345;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq38112){
var G__38113 = cljs.core.first(seq38112);
var seq38112__$1 = cljs.core.next(seq38112);
var G__38114 = cljs.core.first(seq38112__$1);
var seq38112__$2 = cljs.core.next(seq38112__$1);
var G__38115 = cljs.core.first(seq38112__$2);
var seq38112__$3 = cljs.core.next(seq38112__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38113,G__38114,G__38115,seq38112__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
