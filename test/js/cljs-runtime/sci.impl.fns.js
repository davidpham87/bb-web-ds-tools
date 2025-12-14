goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__37334 = arguments.length;
switch (G__37334) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__37335 = fixed_arity;
switch (G__37335) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__37336){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__37336);

while(true){
var ret__36539__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36539__auto__)){
continue;
} else {
return ret__36539__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37336 = null;
if (arguments.length > 0) {
var G__37866__i = 0, G__37866__a = new Array(arguments.length -  0);
while (G__37866__i < G__37866__a.length) {G__37866__a[G__37866__i] = arguments[G__37866__i + 0]; ++G__37866__i;}
  G__37336 = new cljs.core.IndexedSeq(G__37866__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37336);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__37867){
var G__37336 = cljs.core.seq(arglist__37867);
return sci$impl$fns$arity_0__delegate(G__37336);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__37337,G__37338){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37337);

(invoc_array[vararg_idx] = G__37338);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37337,var_args){
var G__37338 = null;
if (arguments.length > 1) {
var G__37868__i = 0, G__37868__a = new Array(arguments.length -  1);
while (G__37868__i < G__37868__a.length) {G__37868__a[G__37868__i] = arguments[G__37868__i + 1]; ++G__37868__i;}
  G__37338 = new cljs.core.IndexedSeq(G__37868__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37337,G__37338);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__37869){
var G__37337 = cljs.core.first(arglist__37869);
var G__37338 = cljs.core.rest(arglist__37869);
return sci$impl$fns$arity_1__delegate(G__37337,G__37338);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__37339,G__37340,G__37341){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37339);

(invoc_array[(1)] = G__37340);

(invoc_array[vararg_idx] = G__37341);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37339,G__37340,var_args){
var G__37341 = null;
if (arguments.length > 2) {
var G__37870__i = 0, G__37870__a = new Array(arguments.length -  2);
while (G__37870__i < G__37870__a.length) {G__37870__a[G__37870__i] = arguments[G__37870__i + 2]; ++G__37870__i;}
  G__37341 = new cljs.core.IndexedSeq(G__37870__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37339,G__37340,G__37341);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__37871){
var G__37339 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37340 = cljs.core.first(arglist__37871);
var G__37341 = cljs.core.rest(arglist__37871);
return sci$impl$fns$arity_2__delegate(G__37339,G__37340,G__37341);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__37342,G__37343,G__37344,G__37345){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37342);

(invoc_array[(1)] = G__37343);

(invoc_array[(2)] = G__37344);

(invoc_array[vararg_idx] = G__37345);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37342,G__37343,G__37344,var_args){
var G__37345 = null;
if (arguments.length > 3) {
var G__37872__i = 0, G__37872__a = new Array(arguments.length -  3);
while (G__37872__i < G__37872__a.length) {G__37872__a[G__37872__i] = arguments[G__37872__i + 3]; ++G__37872__i;}
  G__37345 = new cljs.core.IndexedSeq(G__37872__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37342,G__37343,G__37344,G__37345);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__37873){
var G__37342 = cljs.core.first(arglist__37873);
arglist__37873 = cljs.core.next(arglist__37873);
var G__37343 = cljs.core.first(arglist__37873);
arglist__37873 = cljs.core.next(arglist__37873);
var G__37344 = cljs.core.first(arglist__37873);
var G__37345 = cljs.core.rest(arglist__37873);
return sci$impl$fns$arity_3__delegate(G__37342,G__37343,G__37344,G__37345);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__37346,G__37347,G__37348,G__37349,G__37350){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37346);

(invoc_array[(1)] = G__37347);

(invoc_array[(2)] = G__37348);

(invoc_array[(3)] = G__37349);

(invoc_array[vararg_idx] = G__37350);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37346,G__37347,G__37348,G__37349,var_args){
var G__37350 = null;
if (arguments.length > 4) {
var G__37874__i = 0, G__37874__a = new Array(arguments.length -  4);
while (G__37874__i < G__37874__a.length) {G__37874__a[G__37874__i] = arguments[G__37874__i + 4]; ++G__37874__i;}
  G__37350 = new cljs.core.IndexedSeq(G__37874__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37346,G__37347,G__37348,G__37349,G__37350);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__37875){
var G__37346 = cljs.core.first(arglist__37875);
arglist__37875 = cljs.core.next(arglist__37875);
var G__37347 = cljs.core.first(arglist__37875);
arglist__37875 = cljs.core.next(arglist__37875);
var G__37348 = cljs.core.first(arglist__37875);
arglist__37875 = cljs.core.next(arglist__37875);
var G__37349 = cljs.core.first(arglist__37875);
var G__37350 = cljs.core.rest(arglist__37875);
return sci$impl$fns$arity_4__delegate(G__37346,G__37347,G__37348,G__37349,G__37350);
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
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37351,G__37352,G__37353,G__37354,G__37355,var_args){
var G__37356 = null;
if (arguments.length > 5) {
var G__37878__i = 0, G__37878__a = new Array(arguments.length -  5);
while (G__37878__i < G__37878__a.length) {G__37878__a[G__37878__i] = arguments[G__37878__i + 5]; ++G__37878__i;}
  G__37356 = new cljs.core.IndexedSeq(G__37878__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__37879){
var G__37351 = cljs.core.first(arglist__37879);
arglist__37879 = cljs.core.next(arglist__37879);
var G__37352 = cljs.core.first(arglist__37879);
arglist__37879 = cljs.core.next(arglist__37879);
var G__37353 = cljs.core.first(arglist__37879);
arglist__37879 = cljs.core.next(arglist__37879);
var G__37354 = cljs.core.first(arglist__37879);
arglist__37879 = cljs.core.next(arglist__37879);
var G__37355 = cljs.core.first(arglist__37879);
var G__37356 = cljs.core.rest(arglist__37879);
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
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,var_args){
var G__37363 = null;
if (arguments.length > 6) {
var G__37882__i = 0, G__37882__a = new Array(arguments.length -  6);
while (G__37882__i < G__37882__a.length) {G__37882__a[G__37882__i] = arguments[G__37882__i + 6]; ++G__37882__i;}
  G__37363 = new cljs.core.IndexedSeq(G__37882__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__37883){
var G__37357 = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var G__37358 = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var G__37359 = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var G__37360 = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var G__37361 = cljs.core.first(arglist__37883);
arglist__37883 = cljs.core.next(arglist__37883);
var G__37362 = cljs.core.first(arglist__37883);
var G__37363 = cljs.core.rest(arglist__37883);
return sci$impl$fns$arity_6__delegate(G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,G__37375){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37368);

(invoc_array[(1)] = G__37369);

(invoc_array[(2)] = G__37370);

(invoc_array[(3)] = G__37371);

(invoc_array[(4)] = G__37372);

(invoc_array[(5)] = G__37373);

(invoc_array[(6)] = G__37374);

(invoc_array[vararg_idx] = G__37375);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,var_args){
var G__37375 = null;
if (arguments.length > 7) {
var G__37886__i = 0, G__37886__a = new Array(arguments.length -  7);
while (G__37886__i < G__37886__a.length) {G__37886__a[G__37886__i] = arguments[G__37886__i + 7]; ++G__37886__i;}
  G__37375 = new cljs.core.IndexedSeq(G__37886__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,G__37375);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__37887){
var G__37368 = cljs.core.first(arglist__37887);
arglist__37887 = cljs.core.next(arglist__37887);
var G__37369 = cljs.core.first(arglist__37887);
arglist__37887 = cljs.core.next(arglist__37887);
var G__37370 = cljs.core.first(arglist__37887);
arglist__37887 = cljs.core.next(arglist__37887);
var G__37371 = cljs.core.first(arglist__37887);
arglist__37887 = cljs.core.next(arglist__37887);
var G__37372 = cljs.core.first(arglist__37887);
arglist__37887 = cljs.core.next(arglist__37887);
var G__37373 = cljs.core.first(arglist__37887);
arglist__37887 = cljs.core.next(arglist__37887);
var G__37374 = cljs.core.first(arglist__37887);
var G__37375 = cljs.core.rest(arglist__37887);
return sci$impl$fns$arity_7__delegate(G__37368,G__37369,G__37370,G__37371,G__37372,G__37373,G__37374,G__37375);
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
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,var_args){
var G__37384 = null;
if (arguments.length > 8) {
var G__37888__i = 0, G__37888__a = new Array(arguments.length -  8);
while (G__37888__i < G__37888__a.length) {G__37888__a[G__37888__i] = arguments[G__37888__i + 8]; ++G__37888__i;}
  G__37384 = new cljs.core.IndexedSeq(G__37888__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37376,G__37377,G__37378,G__37379,G__37380,G__37381,G__37382,G__37383,G__37384);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__37890){
var G__37376 = cljs.core.first(arglist__37890);
arglist__37890 = cljs.core.next(arglist__37890);
var G__37377 = cljs.core.first(arglist__37890);
arglist__37890 = cljs.core.next(arglist__37890);
var G__37378 = cljs.core.first(arglist__37890);
arglist__37890 = cljs.core.next(arglist__37890);
var G__37379 = cljs.core.first(arglist__37890);
arglist__37890 = cljs.core.next(arglist__37890);
var G__37380 = cljs.core.first(arglist__37890);
arglist__37890 = cljs.core.next(arglist__37890);
var G__37381 = cljs.core.first(arglist__37890);
arglist__37890 = cljs.core.next(arglist__37890);
var G__37382 = cljs.core.first(arglist__37890);
arglist__37890 = cljs.core.next(arglist__37890);
var G__37383 = cljs.core.first(arglist__37890);
var G__37384 = cljs.core.rest(arglist__37890);
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
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,var_args){
var G__37394 = null;
if (arguments.length > 9) {
var G__37894__i = 0, G__37894__a = new Array(arguments.length -  9);
while (G__37894__i < G__37894__a.length) {G__37894__a[G__37894__i] = arguments[G__37894__i + 9]; ++G__37894__i;}
  G__37394 = new cljs.core.IndexedSeq(G__37894__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__37895){
var G__37385 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37386 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37387 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37388 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37389 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37390 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37391 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37392 = cljs.core.first(arglist__37895);
arglist__37895 = cljs.core.next(arglist__37895);
var G__37393 = cljs.core.first(arglist__37895);
var G__37394 = cljs.core.rest(arglist__37895);
return sci$impl$fns$arity_9__delegate(G__37385,G__37386,G__37387,G__37388,G__37389,G__37390,G__37391,G__37392,G__37393,G__37394);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,G__37405){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37395);

(invoc_array[(1)] = G__37396);

(invoc_array[(2)] = G__37397);

(invoc_array[(3)] = G__37398);

(invoc_array[(4)] = G__37399);

(invoc_array[(5)] = G__37400);

(invoc_array[(6)] = G__37401);

(invoc_array[(7)] = G__37402);

(invoc_array[(8)] = G__37403);

(invoc_array[(9)] = G__37404);

(invoc_array[vararg_idx] = G__37405);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,var_args){
var G__37405 = null;
if (arguments.length > 10) {
var G__37896__i = 0, G__37896__a = new Array(arguments.length -  10);
while (G__37896__i < G__37896__a.length) {G__37896__a[G__37896__i] = arguments[G__37896__i + 10]; ++G__37896__i;}
  G__37405 = new cljs.core.IndexedSeq(G__37896__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,G__37405);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__37897){
var G__37395 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37396 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37397 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37398 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37399 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37400 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37401 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37402 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37403 = cljs.core.first(arglist__37897);
arglist__37897 = cljs.core.next(arglist__37897);
var G__37404 = cljs.core.first(arglist__37897);
var G__37405 = cljs.core.rest(arglist__37897);
return sci$impl$fns$arity_10__delegate(G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403,G__37404,G__37405);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37406,G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417){
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

(invoc_array[(5)] = G__37411);

(invoc_array[(6)] = G__37412);

(invoc_array[(7)] = G__37413);

(invoc_array[(8)] = G__37414);

(invoc_array[(9)] = G__37415);

(invoc_array[(10)] = G__37416);

(invoc_array[vararg_idx] = G__37417);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37406,G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,var_args){
var G__37417 = null;
if (arguments.length > 11) {
var G__37898__i = 0, G__37898__a = new Array(arguments.length -  11);
while (G__37898__i < G__37898__a.length) {G__37898__a[G__37898__i] = arguments[G__37898__i + 11]; ++G__37898__i;}
  G__37417 = new cljs.core.IndexedSeq(G__37898__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37406,G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__37899){
var G__37406 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37407 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37408 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37409 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37410 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37411 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37412 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37413 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37414 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37415 = cljs.core.first(arglist__37899);
arglist__37899 = cljs.core.next(arglist__37899);
var G__37416 = cljs.core.first(arglist__37899);
var G__37417 = cljs.core.rest(arglist__37899);
return sci$impl$fns$arity_11__delegate(G__37406,G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37418,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37418);

(invoc_array[(1)] = G__37419);

(invoc_array[(2)] = G__37420);

(invoc_array[(3)] = G__37421);

(invoc_array[(4)] = G__37422);

(invoc_array[(5)] = G__37423);

(invoc_array[(6)] = G__37424);

(invoc_array[(7)] = G__37425);

(invoc_array[(8)] = G__37426);

(invoc_array[(9)] = G__37427);

(invoc_array[(10)] = G__37428);

(invoc_array[(11)] = G__37429);

(invoc_array[vararg_idx] = G__37430);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37418,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,var_args){
var G__37430 = null;
if (arguments.length > 12) {
var G__37908__i = 0, G__37908__a = new Array(arguments.length -  12);
while (G__37908__i < G__37908__a.length) {G__37908__a[G__37908__i] = arguments[G__37908__i + 12]; ++G__37908__i;}
  G__37430 = new cljs.core.IndexedSeq(G__37908__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37418,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__37909){
var G__37418 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37419 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37420 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37421 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37422 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37423 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37424 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37425 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37426 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37427 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37428 = cljs.core.first(arglist__37909);
arglist__37909 = cljs.core.next(arglist__37909);
var G__37429 = cljs.core.first(arglist__37909);
var G__37430 = cljs.core.rest(arglist__37909);
return sci$impl$fns$arity_12__delegate(G__37418,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441,G__37442,G__37443,G__37444){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37431);

(invoc_array[(1)] = G__37432);

(invoc_array[(2)] = G__37433);

(invoc_array[(3)] = G__37434);

(invoc_array[(4)] = G__37435);

(invoc_array[(5)] = G__37436);

(invoc_array[(6)] = G__37437);

(invoc_array[(7)] = G__37438);

(invoc_array[(8)] = G__37439);

(invoc_array[(9)] = G__37440);

(invoc_array[(10)] = G__37441);

(invoc_array[(11)] = G__37442);

(invoc_array[(12)] = G__37443);

(invoc_array[vararg_idx] = G__37444);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441,G__37442,G__37443,var_args){
var G__37444 = null;
if (arguments.length > 13) {
var G__37913__i = 0, G__37913__a = new Array(arguments.length -  13);
while (G__37913__i < G__37913__a.length) {G__37913__a[G__37913__i] = arguments[G__37913__i + 13]; ++G__37913__i;}
  G__37444 = new cljs.core.IndexedSeq(G__37913__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441,G__37442,G__37443,G__37444);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__37917){
var G__37431 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37432 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37433 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37434 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37435 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37436 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37437 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37438 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37439 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37440 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37441 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37442 = cljs.core.first(arglist__37917);
arglist__37917 = cljs.core.next(arglist__37917);
var G__37443 = cljs.core.first(arglist__37917);
var G__37444 = cljs.core.rest(arglist__37917);
return sci$impl$fns$arity_13__delegate(G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441,G__37442,G__37443,G__37444);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37445);

(invoc_array[(1)] = G__37446);

(invoc_array[(2)] = G__37447);

(invoc_array[(3)] = G__37448);

(invoc_array[(4)] = G__37449);

(invoc_array[(5)] = G__37450);

(invoc_array[(6)] = G__37451);

(invoc_array[(7)] = G__37452);

(invoc_array[(8)] = G__37453);

(invoc_array[(9)] = G__37454);

(invoc_array[(10)] = G__37455);

(invoc_array[(11)] = G__37456);

(invoc_array[(12)] = G__37457);

(invoc_array[(13)] = G__37458);

(invoc_array[vararg_idx] = G__37459);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,var_args){
var G__37459 = null;
if (arguments.length > 14) {
var G__37921__i = 0, G__37921__a = new Array(arguments.length -  14);
while (G__37921__i < G__37921__a.length) {G__37921__a[G__37921__i] = arguments[G__37921__i + 14]; ++G__37921__i;}
  G__37459 = new cljs.core.IndexedSeq(G__37921__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__37922){
var G__37445 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37446 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37447 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37448 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37449 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37450 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37451 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37452 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37453 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37454 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37455 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37456 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37457 = cljs.core.first(arglist__37922);
arglist__37922 = cljs.core.next(arglist__37922);
var G__37458 = cljs.core.first(arglist__37922);
var G__37459 = cljs.core.rest(arglist__37922);
return sci$impl$fns$arity_14__delegate(G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37460);

(invoc_array[(1)] = G__37461);

(invoc_array[(2)] = G__37462);

(invoc_array[(3)] = G__37463);

(invoc_array[(4)] = G__37464);

(invoc_array[(5)] = G__37465);

(invoc_array[(6)] = G__37466);

(invoc_array[(7)] = G__37467);

(invoc_array[(8)] = G__37468);

(invoc_array[(9)] = G__37469);

(invoc_array[(10)] = G__37470);

(invoc_array[(11)] = G__37471);

(invoc_array[(12)] = G__37472);

(invoc_array[(13)] = G__37473);

(invoc_array[(14)] = G__37474);

(invoc_array[vararg_idx] = G__37475);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,var_args){
var G__37475 = null;
if (arguments.length > 15) {
var G__37927__i = 0, G__37927__a = new Array(arguments.length -  15);
while (G__37927__i < G__37927__a.length) {G__37927__a[G__37927__i] = arguments[G__37927__i + 15]; ++G__37927__i;}
  G__37475 = new cljs.core.IndexedSeq(G__37927__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__37928){
var G__37460 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37461 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37462 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37463 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37464 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37465 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37466 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37467 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37468 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37469 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37470 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37471 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37472 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37473 = cljs.core.first(arglist__37928);
arglist__37928 = cljs.core.next(arglist__37928);
var G__37474 = cljs.core.first(arglist__37928);
var G__37475 = cljs.core.rest(arglist__37928);
return sci$impl$fns$arity_15__delegate(G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472,G__37473,G__37474,G__37475);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37476);

(invoc_array[(1)] = G__37477);

(invoc_array[(2)] = G__37478);

(invoc_array[(3)] = G__37479);

(invoc_array[(4)] = G__37480);

(invoc_array[(5)] = G__37481);

(invoc_array[(6)] = G__37482);

(invoc_array[(7)] = G__37483);

(invoc_array[(8)] = G__37484);

(invoc_array[(9)] = G__37485);

(invoc_array[(10)] = G__37486);

(invoc_array[(11)] = G__37487);

(invoc_array[(12)] = G__37488);

(invoc_array[(13)] = G__37489);

(invoc_array[(14)] = G__37490);

(invoc_array[(15)] = G__37491);

(invoc_array[vararg_idx] = G__37492);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,var_args){
var G__37492 = null;
if (arguments.length > 16) {
var G__37931__i = 0, G__37931__a = new Array(arguments.length -  16);
while (G__37931__i < G__37931__a.length) {G__37931__a[G__37931__i] = arguments[G__37931__i + 16]; ++G__37931__i;}
  G__37492 = new cljs.core.IndexedSeq(G__37931__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__37933){
var G__37476 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37477 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37478 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37479 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37480 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37481 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37482 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37483 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37484 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37485 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37486 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37487 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37488 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37489 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37490 = cljs.core.first(arglist__37933);
arglist__37933 = cljs.core.next(arglist__37933);
var G__37491 = cljs.core.first(arglist__37933);
var G__37492 = cljs.core.rest(arglist__37933);
return sci$impl$fns$arity_16__delegate(G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37493);

(invoc_array[(1)] = G__37494);

(invoc_array[(2)] = G__37495);

(invoc_array[(3)] = G__37496);

(invoc_array[(4)] = G__37497);

(invoc_array[(5)] = G__37498);

(invoc_array[(6)] = G__37499);

(invoc_array[(7)] = G__37500);

(invoc_array[(8)] = G__37501);

(invoc_array[(9)] = G__37502);

(invoc_array[(10)] = G__37503);

(invoc_array[(11)] = G__37504);

(invoc_array[(12)] = G__37505);

(invoc_array[(13)] = G__37506);

(invoc_array[(14)] = G__37507);

(invoc_array[(15)] = G__37508);

(invoc_array[(16)] = G__37509);

(invoc_array[vararg_idx] = G__37510);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,var_args){
var G__37510 = null;
if (arguments.length > 17) {
var G__37941__i = 0, G__37941__a = new Array(arguments.length -  17);
while (G__37941__i < G__37941__a.length) {G__37941__a[G__37941__i] = arguments[G__37941__i + 17]; ++G__37941__i;}
  G__37510 = new cljs.core.IndexedSeq(G__37941__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__37943){
var G__37493 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37494 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37495 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37496 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37497 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37498 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37499 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37500 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37501 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37502 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37503 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37504 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37505 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37506 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37507 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37508 = cljs.core.first(arglist__37943);
arglist__37943 = cljs.core.next(arglist__37943);
var G__37509 = cljs.core.first(arglist__37943);
var G__37510 = cljs.core.rest(arglist__37943);
return sci$impl$fns$arity_17__delegate(G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37511);

(invoc_array[(1)] = G__37512);

(invoc_array[(2)] = G__37513);

(invoc_array[(3)] = G__37514);

(invoc_array[(4)] = G__37515);

(invoc_array[(5)] = G__37516);

(invoc_array[(6)] = G__37517);

(invoc_array[(7)] = G__37518);

(invoc_array[(8)] = G__37519);

(invoc_array[(9)] = G__37520);

(invoc_array[(10)] = G__37521);

(invoc_array[(11)] = G__37522);

(invoc_array[(12)] = G__37523);

(invoc_array[(13)] = G__37524);

(invoc_array[(14)] = G__37525);

(invoc_array[(15)] = G__37526);

(invoc_array[(16)] = G__37527);

(invoc_array[(17)] = G__37528);

(invoc_array[vararg_idx] = G__37529);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,var_args){
var G__37529 = null;
if (arguments.length > 18) {
var G__37944__i = 0, G__37944__a = new Array(arguments.length -  18);
while (G__37944__i < G__37944__a.length) {G__37944__a[G__37944__i] = arguments[G__37944__i + 18]; ++G__37944__i;}
  G__37529 = new cljs.core.IndexedSeq(G__37944__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__37945){
var G__37511 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37512 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37513 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37514 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37515 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37516 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37517 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37518 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37519 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37520 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37521 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37522 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37523 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37524 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37525 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37526 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37527 = cljs.core.first(arglist__37945);
arglist__37945 = cljs.core.next(arglist__37945);
var G__37528 = cljs.core.first(arglist__37945);
var G__37529 = cljs.core.rest(arglist__37945);
return sci$impl$fns$arity_18__delegate(G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37530);

(invoc_array[(1)] = G__37531);

(invoc_array[(2)] = G__37532);

(invoc_array[(3)] = G__37533);

(invoc_array[(4)] = G__37534);

(invoc_array[(5)] = G__37535);

(invoc_array[(6)] = G__37536);

(invoc_array[(7)] = G__37537);

(invoc_array[(8)] = G__37538);

(invoc_array[(9)] = G__37539);

(invoc_array[(10)] = G__37540);

(invoc_array[(11)] = G__37541);

(invoc_array[(12)] = G__37542);

(invoc_array[(13)] = G__37543);

(invoc_array[(14)] = G__37544);

(invoc_array[(15)] = G__37545);

(invoc_array[(16)] = G__37546);

(invoc_array[(17)] = G__37547);

(invoc_array[(18)] = G__37548);

(invoc_array[vararg_idx] = G__37549);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,var_args){
var G__37549 = null;
if (arguments.length > 19) {
var G__37953__i = 0, G__37953__a = new Array(arguments.length -  19);
while (G__37953__i < G__37953__a.length) {G__37953__a[G__37953__i] = arguments[G__37953__i + 19]; ++G__37953__i;}
  G__37549 = new cljs.core.IndexedSeq(G__37953__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__37954){
var G__37530 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37531 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37532 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37533 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37534 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37535 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37536 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37537 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37538 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37539 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37540 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37541 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37542 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37543 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37544 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37545 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37546 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37547 = cljs.core.first(arglist__37954);
arglist__37954 = cljs.core.next(arglist__37954);
var G__37548 = cljs.core.first(arglist__37954);
var G__37549 = cljs.core.rest(arglist__37954);
return sci$impl$fns$arity_19__delegate(G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570){
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

(invoc_array[(17)] = G__37567);

(invoc_array[(18)] = G__37568);

(invoc_array[(19)] = G__37569);

(invoc_array[vararg_idx] = G__37570);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,var_args){
var G__37570 = null;
if (arguments.length > 20) {
var G__37958__i = 0, G__37958__a = new Array(arguments.length -  20);
while (G__37958__i < G__37958__a.length) {G__37958__a[G__37958__i] = arguments[G__37958__i + 20]; ++G__37958__i;}
  G__37570 = new cljs.core.IndexedSeq(G__37958__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__37960){
var G__37550 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37551 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37552 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37553 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37554 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37555 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37556 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37557 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37558 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37559 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37560 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37561 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37562 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37563 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37564 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37565 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37566 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37567 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37568 = cljs.core.first(arglist__37960);
arglist__37960 = cljs.core.next(arglist__37960);
var G__37569 = cljs.core.first(arglist__37960);
var G__37570 = cljs.core.rest(arglist__37960);
return sci$impl$fns$arity_20__delegate(G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569,G__37570);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37335)].join('')));

}
})():(function (){var G__37571 = fixed_arity;
switch (G__37571) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36539__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36539__auto__)){
continue;
} else {
return ret__36539__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37572){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37572);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37575,G__37576){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37575);

(invoc_array[(1)] = G__37576);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37577,G__37578,G__37579){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37577);

(invoc_array[(1)] = G__37578);

(invoc_array[(2)] = G__37579);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37588,G__37589,G__37590,G__37591){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37588);

(invoc_array[(1)] = G__37589);

(invoc_array[(2)] = G__37590);

(invoc_array[(3)] = G__37591);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37596,G__37597,G__37598,G__37599,G__37600){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37596);

(invoc_array[(1)] = G__37597);

(invoc_array[(2)] = G__37598);

(invoc_array[(3)] = G__37599);

(invoc_array[(4)] = G__37600);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37601,G__37602,G__37603,G__37604,G__37605,G__37606){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37601);

(invoc_array[(1)] = G__37602);

(invoc_array[(2)] = G__37603);

(invoc_array[(3)] = G__37604);

(invoc_array[(4)] = G__37605);

(invoc_array[(5)] = G__37606);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37607);

(invoc_array[(1)] = G__37608);

(invoc_array[(2)] = G__37609);

(invoc_array[(3)] = G__37610);

(invoc_array[(4)] = G__37611);

(invoc_array[(5)] = G__37612);

(invoc_array[(6)] = G__37613);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37614);

(invoc_array[(1)] = G__37615);

(invoc_array[(2)] = G__37616);

(invoc_array[(3)] = G__37617);

(invoc_array[(4)] = G__37618);

(invoc_array[(5)] = G__37619);

(invoc_array[(6)] = G__37620);

(invoc_array[(7)] = G__37621);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37626);

(invoc_array[(1)] = G__37627);

(invoc_array[(2)] = G__37628);

(invoc_array[(3)] = G__37629);

(invoc_array[(4)] = G__37630);

(invoc_array[(5)] = G__37631);

(invoc_array[(6)] = G__37632);

(invoc_array[(7)] = G__37633);

(invoc_array[(8)] = G__37634);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37639);

(invoc_array[(1)] = G__37640);

(invoc_array[(2)] = G__37641);

(invoc_array[(3)] = G__37642);

(invoc_array[(4)] = G__37643);

(invoc_array[(5)] = G__37644);

(invoc_array[(6)] = G__37645);

(invoc_array[(7)] = G__37646);

(invoc_array[(8)] = G__37647);

(invoc_array[(9)] = G__37648);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37653);

(invoc_array[(1)] = G__37654);

(invoc_array[(2)] = G__37655);

(invoc_array[(3)] = G__37656);

(invoc_array[(4)] = G__37657);

(invoc_array[(5)] = G__37658);

(invoc_array[(6)] = G__37659);

(invoc_array[(7)] = G__37660);

(invoc_array[(8)] = G__37661);

(invoc_array[(9)] = G__37662);

(invoc_array[(10)] = G__37663);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37664);

(invoc_array[(1)] = G__37665);

(invoc_array[(2)] = G__37666);

(invoc_array[(3)] = G__37667);

(invoc_array[(4)] = G__37668);

(invoc_array[(5)] = G__37669);

(invoc_array[(6)] = G__37670);

(invoc_array[(7)] = G__37671);

(invoc_array[(8)] = G__37672);

(invoc_array[(9)] = G__37673);

(invoc_array[(10)] = G__37674);

(invoc_array[(11)] = G__37675);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37680,G__37681,G__37682,G__37683,G__37684,G__37685,G__37686,G__37687,G__37688,G__37689,G__37690,G__37691,G__37692){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37680);

(invoc_array[(1)] = G__37681);

(invoc_array[(2)] = G__37682);

(invoc_array[(3)] = G__37683);

(invoc_array[(4)] = G__37684);

(invoc_array[(5)] = G__37685);

(invoc_array[(6)] = G__37686);

(invoc_array[(7)] = G__37687);

(invoc_array[(8)] = G__37688);

(invoc_array[(9)] = G__37689);

(invoc_array[(10)] = G__37690);

(invoc_array[(11)] = G__37691);

(invoc_array[(12)] = G__37692);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37693,G__37694,G__37695,G__37696,G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703,G__37704,G__37705,G__37706){
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

(invoc_array[(13)] = G__37706);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37707,G__37708,G__37709,G__37710,G__37711,G__37712,G__37713,G__37714,G__37715,G__37716,G__37717,G__37718,G__37719,G__37720,G__37721){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37707);

(invoc_array[(1)] = G__37708);

(invoc_array[(2)] = G__37709);

(invoc_array[(3)] = G__37710);

(invoc_array[(4)] = G__37711);

(invoc_array[(5)] = G__37712);

(invoc_array[(6)] = G__37713);

(invoc_array[(7)] = G__37714);

(invoc_array[(8)] = G__37715);

(invoc_array[(9)] = G__37716);

(invoc_array[(10)] = G__37717);

(invoc_array[(11)] = G__37718);

(invoc_array[(12)] = G__37719);

(invoc_array[(13)] = G__37720);

(invoc_array[(14)] = G__37721);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37724,G__37725,G__37726,G__37727,G__37728,G__37729,G__37730,G__37731,G__37732,G__37733,G__37734,G__37735,G__37736,G__37737,G__37738,G__37739){
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

(invoc_array[(8)] = G__37732);

(invoc_array[(9)] = G__37733);

(invoc_array[(10)] = G__37734);

(invoc_array[(11)] = G__37735);

(invoc_array[(12)] = G__37736);

(invoc_array[(13)] = G__37737);

(invoc_array[(14)] = G__37738);

(invoc_array[(15)] = G__37739);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37743,G__37744,G__37745,G__37746,G__37747,G__37748,G__37749,G__37750,G__37751,G__37752,G__37753,G__37754,G__37755,G__37756,G__37757,G__37758,G__37759){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37743);

(invoc_array[(1)] = G__37744);

(invoc_array[(2)] = G__37745);

(invoc_array[(3)] = G__37746);

(invoc_array[(4)] = G__37747);

(invoc_array[(5)] = G__37748);

(invoc_array[(6)] = G__37749);

(invoc_array[(7)] = G__37750);

(invoc_array[(8)] = G__37751);

(invoc_array[(9)] = G__37752);

(invoc_array[(10)] = G__37753);

(invoc_array[(11)] = G__37754);

(invoc_array[(12)] = G__37755);

(invoc_array[(13)] = G__37756);

(invoc_array[(14)] = G__37757);

(invoc_array[(15)] = G__37758);

(invoc_array[(16)] = G__37759);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37760,G__37761,G__37762,G__37763,G__37764,G__37765,G__37766,G__37767,G__37768,G__37769,G__37770,G__37771,G__37772,G__37773,G__37774,G__37775,G__37776,G__37777){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37760);

(invoc_array[(1)] = G__37761);

(invoc_array[(2)] = G__37762);

(invoc_array[(3)] = G__37763);

(invoc_array[(4)] = G__37764);

(invoc_array[(5)] = G__37765);

(invoc_array[(6)] = G__37766);

(invoc_array[(7)] = G__37767);

(invoc_array[(8)] = G__37768);

(invoc_array[(9)] = G__37769);

(invoc_array[(10)] = G__37770);

(invoc_array[(11)] = G__37771);

(invoc_array[(12)] = G__37772);

(invoc_array[(13)] = G__37773);

(invoc_array[(14)] = G__37774);

(invoc_array[(15)] = G__37775);

(invoc_array[(16)] = G__37776);

(invoc_array[(17)] = G__37777);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785,G__37786,G__37787,G__37788,G__37789,G__37790,G__37791,G__37792,G__37793,G__37794,G__37795,G__37796){
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

(invoc_array[(10)] = G__37788);

(invoc_array[(11)] = G__37789);

(invoc_array[(12)] = G__37790);

(invoc_array[(13)] = G__37791);

(invoc_array[(14)] = G__37792);

(invoc_array[(15)] = G__37793);

(invoc_array[(16)] = G__37794);

(invoc_array[(17)] = G__37795);

(invoc_array[(18)] = G__37796);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37797,G__37798,G__37799,G__37800,G__37801,G__37802,G__37803,G__37804,G__37805,G__37806,G__37807,G__37808,G__37809,G__37810,G__37811,G__37812,G__37813,G__37814,G__37815,G__37816){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37797);

(invoc_array[(1)] = G__37798);

(invoc_array[(2)] = G__37799);

(invoc_array[(3)] = G__37800);

(invoc_array[(4)] = G__37801);

(invoc_array[(5)] = G__37802);

(invoc_array[(6)] = G__37803);

(invoc_array[(7)] = G__37804);

(invoc_array[(8)] = G__37805);

(invoc_array[(9)] = G__37806);

(invoc_array[(10)] = G__37807);

(invoc_array[(11)] = G__37808);

(invoc_array[(12)] = G__37809);

(invoc_array[(13)] = G__37810);

(invoc_array[(14)] = G__37811);

(invoc_array[(15)] = G__37812);

(invoc_array[(16)] = G__37813);

(invoc_array[(17)] = G__37814);

(invoc_array[(18)] = G__37815);

(invoc_array[(19)] = G__37816);

while(true){
var ret__36540__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36540__auto__)){
continue;
} else {
return ret__36540__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37571)].join('')));

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
var G__38013 = cljs.core.next(params__$1);
var G__38014 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38015 = lets;
params__$1 = G__38013;
new_params = G__38014;
lets = G__38015;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38016 = cljs.core.next(params__$1);
var G__38017 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38018 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38016;
new_params = G__38017;
lets = G__38018;
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
var len__5749__auto___38019 = arguments.length;
var i__5750__auto___38020 = (0);
while(true){
if((i__5750__auto___38020 < len__5749__auto___38019)){
args__5755__auto__.push((arguments[i__5750__auto___38020]));

var G__38021 = (i__5750__auto___38020 + (1));
i__5750__auto___38020 = G__38021;
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

var vec__37830 = sig;
var seq__37831 = cljs.core.seq(vec__37830);
var first__37832 = cljs.core.first(seq__37831);
var seq__37831__$1 = cljs.core.next(seq__37831);
var params = first__37832;
var body = seq__37831__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq37824){
var G__37825 = cljs.core.first(seq37824);
var seq37824__$1 = cljs.core.next(seq37824);
var G__37826 = cljs.core.first(seq37824__$1);
var seq37824__$2 = cljs.core.next(seq37824__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37825,G__37826,seq37824__$2);
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
var G__38024 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38025 = cljs.core.next(fdecls);
ret = G__38024;
fdecls = G__38025;
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
var len__5749__auto___38026 = arguments.length;
var i__5750__auto___38027 = (0);
while(true){
if((i__5750__auto___38027 < len__5749__auto___38026)){
args__5755__auto__.push((arguments[i__5750__auto___38027]));

var G__38028 = (i__5750__auto___38027 + (1));
i__5750__auto___38027 = G__38028;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq37836){
var G__37837 = cljs.core.first(seq37836);
var seq37836__$1 = cljs.core.next(seq37836);
var G__37838 = cljs.core.first(seq37836__$1);
var seq37836__$2 = cljs.core.next(seq37836__$1);
var G__37839 = cljs.core.first(seq37836__$2);
var seq37836__$3 = cljs.core.next(seq37836__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37837,G__37838,G__37839,seq37836__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38034 = arguments.length;
var i__5750__auto___38035 = (0);
while(true){
if((i__5750__auto___38035 < len__5749__auto___38034)){
args__5755__auto__.push((arguments[i__5750__auto___38035]));

var G__38036 = (i__5750__auto___38035 + (1));
i__5750__auto___38035 = G__38036;
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
var G__38037 = cljs.core.cons(f,p);
var G__38038 = cljs.core.next(args__$1);
p = G__38037;
args__$1 = G__38038;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38039 = cljs.core.cons(f,p);
var G__38040 = cljs.core.next(args__$1);
p = G__38039;
args__$1 = G__38040;
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
var G__38041 = cljs.core.next(fd);
fd = G__38041;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38042 = cljs.core.next(fd);
fd = G__38042;
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
var G__38043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38044 = cljs.core.next(ds);
acc = G__38043;
ds = G__38044;
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
var G__38046 = cljs.core.next(p);
var G__38047 = cljs.core.cons(cljs.core.first(p),d);
p = G__38046;
d = G__38047;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq37843){
var G__37844 = cljs.core.first(seq37843);
var seq37843__$1 = cljs.core.next(seq37843);
var G__37846 = cljs.core.first(seq37843__$1);
var seq37843__$2 = cljs.core.next(seq37843__$1);
var G__37847 = cljs.core.first(seq37843__$2);
var seq37843__$3 = cljs.core.next(seq37843__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37844,G__37846,G__37847,seq37843__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
