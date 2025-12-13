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
var ret__36536__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36536__auto__)){
continue;
} else {
return ret__36536__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37336 = null;
if (arguments.length > 0) {
var G__38234__i = 0, G__38234__a = new Array(arguments.length -  0);
while (G__38234__i < G__38234__a.length) {G__38234__a[G__38234__i] = arguments[G__38234__i + 0]; ++G__38234__i;}
  G__37336 = new cljs.core.IndexedSeq(G__38234__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37336);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__38236){
var G__37336 = cljs.core.seq(arglist__38236);
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
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37337,var_args){
var G__37338 = null;
if (arguments.length > 1) {
var G__38237__i = 0, G__38237__a = new Array(arguments.length -  1);
while (G__38237__i < G__38237__a.length) {G__38237__a[G__38237__i] = arguments[G__38237__i + 1]; ++G__38237__i;}
  G__37338 = new cljs.core.IndexedSeq(G__38237__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37337,G__37338);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__38238){
var G__37337 = cljs.core.first(arglist__38238);
var G__37338 = cljs.core.rest(arglist__38238);
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
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37339,G__37340,var_args){
var G__37341 = null;
if (arguments.length > 2) {
var G__38239__i = 0, G__38239__a = new Array(arguments.length -  2);
while (G__38239__i < G__38239__a.length) {G__38239__a[G__38239__i] = arguments[G__38239__i + 2]; ++G__38239__i;}
  G__37341 = new cljs.core.IndexedSeq(G__38239__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37339,G__37340,G__37341);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__38240){
var G__37339 = cljs.core.first(arglist__38240);
arglist__38240 = cljs.core.next(arglist__38240);
var G__37340 = cljs.core.first(arglist__38240);
var G__37341 = cljs.core.rest(arglist__38240);
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
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37342,G__37343,G__37344,var_args){
var G__37345 = null;
if (arguments.length > 3) {
var G__38242__i = 0, G__38242__a = new Array(arguments.length -  3);
while (G__38242__i < G__38242__a.length) {G__38242__a[G__38242__i] = arguments[G__38242__i + 3]; ++G__38242__i;}
  G__37345 = new cljs.core.IndexedSeq(G__38242__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37342,G__37343,G__37344,G__37345);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__38243){
var G__37342 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37343 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37344 = cljs.core.first(arglist__38243);
var G__37345 = cljs.core.rest(arglist__38243);
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
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37346,G__37347,G__37348,G__37349,var_args){
var G__37350 = null;
if (arguments.length > 4) {
var G__38245__i = 0, G__38245__a = new Array(arguments.length -  4);
while (G__38245__i < G__38245__a.length) {G__38245__a[G__38245__i] = arguments[G__38245__i + 4]; ++G__38245__i;}
  G__37350 = new cljs.core.IndexedSeq(G__38245__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37346,G__37347,G__37348,G__37349,G__37350);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__38246){
var G__37346 = cljs.core.first(arglist__38246);
arglist__38246 = cljs.core.next(arglist__38246);
var G__37347 = cljs.core.first(arglist__38246);
arglist__38246 = cljs.core.next(arglist__38246);
var G__37348 = cljs.core.first(arglist__38246);
arglist__38246 = cljs.core.next(arglist__38246);
var G__37349 = cljs.core.first(arglist__38246);
var G__37350 = cljs.core.rest(arglist__38246);
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
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37351,G__37352,G__37353,G__37354,G__37355,var_args){
var G__37356 = null;
if (arguments.length > 5) {
var G__38251__i = 0, G__38251__a = new Array(arguments.length -  5);
while (G__38251__i < G__38251__a.length) {G__38251__a[G__38251__i] = arguments[G__38251__i + 5]; ++G__38251__i;}
  G__37356 = new cljs.core.IndexedSeq(G__38251__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__38252){
var G__37351 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37352 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37353 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37354 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37355 = cljs.core.first(arglist__38252);
var G__37356 = cljs.core.rest(arglist__38252);
return sci$impl$fns$arity_5__delegate(G__37351,G__37352,G__37353,G__37354,G__37355,G__37356);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,G__37371){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37365);

(invoc_array[(1)] = G__37366);

(invoc_array[(2)] = G__37367);

(invoc_array[(3)] = G__37368);

(invoc_array[(4)] = G__37369);

(invoc_array[(5)] = G__37370);

(invoc_array[vararg_idx] = G__37371);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,var_args){
var G__37371 = null;
if (arguments.length > 6) {
var G__38253__i = 0, G__38253__a = new Array(arguments.length -  6);
while (G__38253__i < G__38253__a.length) {G__38253__a[G__38253__i] = arguments[G__38253__i + 6]; ++G__38253__i;}
  G__37371 = new cljs.core.IndexedSeq(G__38253__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,G__37371);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__38254){
var G__37365 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37366 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37367 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37368 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37369 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37370 = cljs.core.first(arglist__38254);
var G__37371 = cljs.core.rest(arglist__38254);
return sci$impl$fns$arity_6__delegate(G__37365,G__37366,G__37367,G__37368,G__37369,G__37370,G__37371);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37372,G__37373,G__37374,G__37375,G__37376,G__37377,G__37378,G__37379){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37372);

(invoc_array[(1)] = G__37373);

(invoc_array[(2)] = G__37374);

(invoc_array[(3)] = G__37375);

(invoc_array[(4)] = G__37376);

(invoc_array[(5)] = G__37377);

(invoc_array[(6)] = G__37378);

(invoc_array[vararg_idx] = G__37379);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37372,G__37373,G__37374,G__37375,G__37376,G__37377,G__37378,var_args){
var G__37379 = null;
if (arguments.length > 7) {
var G__38257__i = 0, G__38257__a = new Array(arguments.length -  7);
while (G__38257__i < G__38257__a.length) {G__38257__a[G__38257__i] = arguments[G__38257__i + 7]; ++G__38257__i;}
  G__37379 = new cljs.core.IndexedSeq(G__38257__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37372,G__37373,G__37374,G__37375,G__37376,G__37377,G__37378,G__37379);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__38258){
var G__37372 = cljs.core.first(arglist__38258);
arglist__38258 = cljs.core.next(arglist__38258);
var G__37373 = cljs.core.first(arglist__38258);
arglist__38258 = cljs.core.next(arglist__38258);
var G__37374 = cljs.core.first(arglist__38258);
arglist__38258 = cljs.core.next(arglist__38258);
var G__37375 = cljs.core.first(arglist__38258);
arglist__38258 = cljs.core.next(arglist__38258);
var G__37376 = cljs.core.first(arglist__38258);
arglist__38258 = cljs.core.next(arglist__38258);
var G__37377 = cljs.core.first(arglist__38258);
arglist__38258 = cljs.core.next(arglist__38258);
var G__37378 = cljs.core.first(arglist__38258);
var G__37379 = cljs.core.rest(arglist__38258);
return sci$impl$fns$arity_7__delegate(G__37372,G__37373,G__37374,G__37375,G__37376,G__37377,G__37378,G__37379);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37380,G__37381,G__37382,G__37383,G__37384,G__37385,G__37386,G__37387,G__37388){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37380);

(invoc_array[(1)] = G__37381);

(invoc_array[(2)] = G__37382);

(invoc_array[(3)] = G__37383);

(invoc_array[(4)] = G__37384);

(invoc_array[(5)] = G__37385);

(invoc_array[(6)] = G__37386);

(invoc_array[(7)] = G__37387);

(invoc_array[vararg_idx] = G__37388);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37380,G__37381,G__37382,G__37383,G__37384,G__37385,G__37386,G__37387,var_args){
var G__37388 = null;
if (arguments.length > 8) {
var G__38260__i = 0, G__38260__a = new Array(arguments.length -  8);
while (G__38260__i < G__38260__a.length) {G__38260__a[G__38260__i] = arguments[G__38260__i + 8]; ++G__38260__i;}
  G__37388 = new cljs.core.IndexedSeq(G__38260__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37380,G__37381,G__37382,G__37383,G__37384,G__37385,G__37386,G__37387,G__37388);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__38263){
var G__37380 = cljs.core.first(arglist__38263);
arglist__38263 = cljs.core.next(arglist__38263);
var G__37381 = cljs.core.first(arglist__38263);
arglist__38263 = cljs.core.next(arglist__38263);
var G__37382 = cljs.core.first(arglist__38263);
arglist__38263 = cljs.core.next(arglist__38263);
var G__37383 = cljs.core.first(arglist__38263);
arglist__38263 = cljs.core.next(arglist__38263);
var G__37384 = cljs.core.first(arglist__38263);
arglist__38263 = cljs.core.next(arglist__38263);
var G__37385 = cljs.core.first(arglist__38263);
arglist__38263 = cljs.core.next(arglist__38263);
var G__37386 = cljs.core.first(arglist__38263);
arglist__38263 = cljs.core.next(arglist__38263);
var G__37387 = cljs.core.first(arglist__38263);
var G__37388 = cljs.core.rest(arglist__38263);
return sci$impl$fns$arity_8__delegate(G__37380,G__37381,G__37382,G__37383,G__37384,G__37385,G__37386,G__37387,G__37388);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37394,G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37394);

(invoc_array[(1)] = G__37395);

(invoc_array[(2)] = G__37396);

(invoc_array[(3)] = G__37397);

(invoc_array[(4)] = G__37398);

(invoc_array[(5)] = G__37399);

(invoc_array[(6)] = G__37400);

(invoc_array[(7)] = G__37401);

(invoc_array[(8)] = G__37402);

(invoc_array[vararg_idx] = G__37403);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37394,G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,var_args){
var G__37403 = null;
if (arguments.length > 9) {
var G__38265__i = 0, G__38265__a = new Array(arguments.length -  9);
while (G__38265__i < G__38265__a.length) {G__38265__a[G__38265__i] = arguments[G__38265__i + 9]; ++G__38265__i;}
  G__37403 = new cljs.core.IndexedSeq(G__38265__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37394,G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__38266){
var G__37394 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37395 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37396 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37397 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37398 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37399 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37400 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37401 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37402 = cljs.core.first(arglist__38266);
var G__37403 = cljs.core.rest(arglist__38266);
return sci$impl$fns$arity_9__delegate(G__37394,G__37395,G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402,G__37403);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37407);

(invoc_array[(1)] = G__37408);

(invoc_array[(2)] = G__37409);

(invoc_array[(3)] = G__37410);

(invoc_array[(4)] = G__37411);

(invoc_array[(5)] = G__37412);

(invoc_array[(6)] = G__37413);

(invoc_array[(7)] = G__37414);

(invoc_array[(8)] = G__37415);

(invoc_array[(9)] = G__37416);

(invoc_array[vararg_idx] = G__37417);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,var_args){
var G__37417 = null;
if (arguments.length > 10) {
var G__38270__i = 0, G__38270__a = new Array(arguments.length -  10);
while (G__38270__i < G__38270__a.length) {G__38270__a[G__38270__i] = arguments[G__38270__i + 10]; ++G__38270__i;}
  G__37417 = new cljs.core.IndexedSeq(G__38270__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__38271){
var G__37407 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37408 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37409 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37410 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37411 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37412 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37413 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37414 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37415 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37416 = cljs.core.first(arglist__38271);
var G__37417 = cljs.core.rest(arglist__38271);
return sci$impl$fns$arity_10__delegate(G__37407,G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430){
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

(invoc_array[(7)] = G__37426);

(invoc_array[(8)] = G__37427);

(invoc_array[(9)] = G__37428);

(invoc_array[(10)] = G__37429);

(invoc_array[vararg_idx] = G__37430);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,var_args){
var G__37430 = null;
if (arguments.length > 11) {
var G__38281__i = 0, G__38281__a = new Array(arguments.length -  11);
while (G__38281__i < G__38281__a.length) {G__38281__a[G__38281__i] = arguments[G__38281__i + 11]; ++G__38281__i;}
  G__37430 = new cljs.core.IndexedSeq(G__38281__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__38283){
var G__37419 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37420 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37421 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37422 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37423 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37424 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37425 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37426 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37427 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37428 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37429 = cljs.core.first(arglist__38283);
var G__37430 = cljs.core.rest(arglist__38283);
return sci$impl$fns$arity_11__delegate(G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37442);

(invoc_array[(1)] = G__37443);

(invoc_array[(2)] = G__37444);

(invoc_array[(3)] = G__37445);

(invoc_array[(4)] = G__37446);

(invoc_array[(5)] = G__37447);

(invoc_array[(6)] = G__37448);

(invoc_array[(7)] = G__37449);

(invoc_array[(8)] = G__37450);

(invoc_array[(9)] = G__37451);

(invoc_array[(10)] = G__37452);

(invoc_array[(11)] = G__37453);

(invoc_array[vararg_idx] = G__37454);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,var_args){
var G__37454 = null;
if (arguments.length > 12) {
var G__38298__i = 0, G__38298__a = new Array(arguments.length -  12);
while (G__38298__i < G__38298__a.length) {G__38298__a[G__38298__i] = arguments[G__38298__i + 12]; ++G__38298__i;}
  G__37454 = new cljs.core.IndexedSeq(G__38298__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__38299){
var G__37442 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37443 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37444 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37445 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37446 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37447 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37448 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37449 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37450 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37451 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37452 = cljs.core.first(arglist__38299);
arglist__38299 = cljs.core.next(arglist__38299);
var G__37453 = cljs.core.first(arglist__38299);
var G__37454 = cljs.core.rest(arglist__38299);
return sci$impl$fns$arity_12__delegate(G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453,G__37454);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37458,G__37459,G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37458);

(invoc_array[(1)] = G__37459);

(invoc_array[(2)] = G__37460);

(invoc_array[(3)] = G__37461);

(invoc_array[(4)] = G__37462);

(invoc_array[(5)] = G__37463);

(invoc_array[(6)] = G__37464);

(invoc_array[(7)] = G__37465);

(invoc_array[(8)] = G__37466);

(invoc_array[(9)] = G__37467);

(invoc_array[(10)] = G__37468);

(invoc_array[(11)] = G__37469);

(invoc_array[(12)] = G__37470);

(invoc_array[vararg_idx] = G__37471);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37458,G__37459,G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,var_args){
var G__37471 = null;
if (arguments.length > 13) {
var G__38306__i = 0, G__38306__a = new Array(arguments.length -  13);
while (G__38306__i < G__38306__a.length) {G__38306__a[G__38306__i] = arguments[G__38306__i + 13]; ++G__38306__i;}
  G__37471 = new cljs.core.IndexedSeq(G__38306__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37458,G__37459,G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__38307){
var G__37458 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37459 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37460 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37461 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37462 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37463 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37464 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37465 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37466 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37467 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37468 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37469 = cljs.core.first(arglist__38307);
arglist__38307 = cljs.core.next(arglist__38307);
var G__37470 = cljs.core.first(arglist__38307);
var G__37471 = cljs.core.rest(arglist__38307);
return sci$impl$fns$arity_13__delegate(G__37458,G__37459,G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37481);

(invoc_array[(1)] = G__37482);

(invoc_array[(2)] = G__37483);

(invoc_array[(3)] = G__37484);

(invoc_array[(4)] = G__37485);

(invoc_array[(5)] = G__37486);

(invoc_array[(6)] = G__37487);

(invoc_array[(7)] = G__37488);

(invoc_array[(8)] = G__37489);

(invoc_array[(9)] = G__37490);

(invoc_array[(10)] = G__37491);

(invoc_array[(11)] = G__37492);

(invoc_array[(12)] = G__37493);

(invoc_array[(13)] = G__37494);

(invoc_array[vararg_idx] = G__37495);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,var_args){
var G__37495 = null;
if (arguments.length > 14) {
var G__38315__i = 0, G__38315__a = new Array(arguments.length -  14);
while (G__38315__i < G__38315__a.length) {G__38315__a[G__38315__i] = arguments[G__38315__i + 14]; ++G__38315__i;}
  G__37495 = new cljs.core.IndexedSeq(G__38315__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__38316){
var G__37481 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37482 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37483 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37484 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37485 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37486 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37487 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37488 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37489 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37490 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37491 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37492 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37493 = cljs.core.first(arglist__38316);
arglist__38316 = cljs.core.next(arglist__38316);
var G__37494 = cljs.core.first(arglist__38316);
var G__37495 = cljs.core.rest(arglist__38316);
return sci$impl$fns$arity_14__delegate(G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515){
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

(invoc_array[(14)] = G__37514);

(invoc_array[vararg_idx] = G__37515);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,var_args){
var G__37515 = null;
if (arguments.length > 15) {
var G__38318__i = 0, G__38318__a = new Array(arguments.length -  15);
while (G__38318__i < G__38318__a.length) {G__38318__a[G__38318__i] = arguments[G__38318__i + 15]; ++G__38318__i;}
  G__37515 = new cljs.core.IndexedSeq(G__38318__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__38319){
var G__37500 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37501 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37502 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37503 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37504 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37505 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37506 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37507 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37508 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37509 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37510 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37511 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37512 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37513 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37514 = cljs.core.first(arglist__38319);
var G__37515 = cljs.core.rest(arglist__38319);
return sci$impl$fns$arity_15__delegate(G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515);
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
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,var_args){
var G__37547 = null;
if (arguments.length > 16) {
var G__38321__i = 0, G__38321__a = new Array(arguments.length -  16);
while (G__38321__i < G__38321__a.length) {G__38321__a[G__38321__i] = arguments[G__38321__i + 16]; ++G__38321__i;}
  G__37547 = new cljs.core.IndexedSeq(G__38321__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__38322){
var G__37531 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37532 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37533 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37534 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37535 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37536 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37537 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37538 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37539 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37540 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37541 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37542 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37543 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37544 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37545 = cljs.core.first(arglist__38322);
arglist__38322 = cljs.core.next(arglist__38322);
var G__37546 = cljs.core.first(arglist__38322);
var G__37547 = cljs.core.rest(arglist__38322);
return sci$impl$fns$arity_16__delegate(G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569){
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

(invoc_array[(13)] = G__37565);

(invoc_array[(14)] = G__37566);

(invoc_array[(15)] = G__37567);

(invoc_array[(16)] = G__37568);

(invoc_array[vararg_idx] = G__37569);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,var_args){
var G__37569 = null;
if (arguments.length > 17) {
var G__38330__i = 0, G__38330__a = new Array(arguments.length -  17);
while (G__38330__i < G__38330__a.length) {G__38330__a[G__38330__i] = arguments[G__38330__i + 17]; ++G__38330__i;}
  G__37569 = new cljs.core.IndexedSeq(G__38330__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__38331){
var G__37552 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37553 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37554 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37555 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37556 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37557 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37558 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37559 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37560 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37561 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37562 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37563 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37564 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37565 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37566 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37567 = cljs.core.first(arglist__38331);
arglist__38331 = cljs.core.next(arglist__38331);
var G__37568 = cljs.core.first(arglist__38331);
var G__37569 = cljs.core.rest(arglist__38331);
return sci$impl$fns$arity_17__delegate(G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37584,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37602,G__37603,G__37606){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37584);

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

(invoc_array[(16)] = G__37602);

(invoc_array[(17)] = G__37603);

(invoc_array[vararg_idx] = G__37606);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37584,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37602,G__37603,var_args){
var G__37606 = null;
if (arguments.length > 18) {
var G__38343__i = 0, G__38343__a = new Array(arguments.length -  18);
while (G__38343__i < G__38343__a.length) {G__38343__a[G__38343__i] = arguments[G__38343__i + 18]; ++G__38343__i;}
  G__37606 = new cljs.core.IndexedSeq(G__38343__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37584,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37602,G__37603,G__37606);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__38344){
var G__37584 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37586 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37587 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37588 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37589 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37590 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37591 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37592 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37593 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37594 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37595 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37596 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37597 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37598 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37599 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37600 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37602 = cljs.core.first(arglist__38344);
arglist__38344 = cljs.core.next(arglist__38344);
var G__37603 = cljs.core.first(arglist__38344);
var G__37606 = cljs.core.rest(arglist__38344);
return sci$impl$fns$arity_18__delegate(G__37584,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37602,G__37603,G__37606);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626){
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

(invoc_array[(7)] = G__37614);

(invoc_array[(8)] = G__37615);

(invoc_array[(9)] = G__37616);

(invoc_array[(10)] = G__37617);

(invoc_array[(11)] = G__37618);

(invoc_array[(12)] = G__37619);

(invoc_array[(13)] = G__37620);

(invoc_array[(14)] = G__37621);

(invoc_array[(15)] = G__37622);

(invoc_array[(16)] = G__37623);

(invoc_array[(17)] = G__37624);

(invoc_array[(18)] = G__37625);

(invoc_array[vararg_idx] = G__37626);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,var_args){
var G__37626 = null;
if (arguments.length > 19) {
var G__38352__i = 0, G__38352__a = new Array(arguments.length -  19);
while (G__38352__i < G__38352__a.length) {G__38352__a[G__38352__i] = arguments[G__38352__i + 19]; ++G__38352__i;}
  G__37626 = new cljs.core.IndexedSeq(G__38352__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__38353){
var G__37607 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37608 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37609 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37610 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37611 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37612 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37613 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37614 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37615 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37616 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37617 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37618 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37619 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37620 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37621 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37622 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37623 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37624 = cljs.core.first(arglist__38353);
arglist__38353 = cljs.core.next(arglist__38353);
var G__37625 = cljs.core.first(arglist__38353);
var G__37626 = cljs.core.rest(arglist__38353);
return sci$impl$fns$arity_19__delegate(G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37636);

(invoc_array[(1)] = G__37637);

(invoc_array[(2)] = G__37638);

(invoc_array[(3)] = G__37639);

(invoc_array[(4)] = G__37640);

(invoc_array[(5)] = G__37641);

(invoc_array[(6)] = G__37642);

(invoc_array[(7)] = G__37643);

(invoc_array[(8)] = G__37644);

(invoc_array[(9)] = G__37645);

(invoc_array[(10)] = G__37646);

(invoc_array[(11)] = G__37647);

(invoc_array[(12)] = G__37648);

(invoc_array[(13)] = G__37649);

(invoc_array[(14)] = G__37650);

(invoc_array[(15)] = G__37651);

(invoc_array[(16)] = G__37652);

(invoc_array[(17)] = G__37653);

(invoc_array[(18)] = G__37654);

(invoc_array[(19)] = G__37655);

(invoc_array[vararg_idx] = G__37656);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,var_args){
var G__37656 = null;
if (arguments.length > 20) {
var G__38368__i = 0, G__38368__a = new Array(arguments.length -  20);
while (G__38368__i < G__38368__a.length) {G__38368__a[G__38368__i] = arguments[G__38368__i + 20]; ++G__38368__i;}
  G__37656 = new cljs.core.IndexedSeq(G__38368__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__38369){
var G__37636 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37637 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37638 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37639 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37640 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37641 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37642 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37643 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37644 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37645 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37646 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37647 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37648 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37649 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37650 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37651 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37652 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37653 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37654 = cljs.core.first(arglist__38369);
arglist__38369 = cljs.core.next(arglist__38369);
var G__37655 = cljs.core.first(arglist__38369);
var G__37656 = cljs.core.rest(arglist__38369);
return sci$impl$fns$arity_20__delegate(G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37335)].join('')));

}
})():(function (){var G__37659 = fixed_arity;
switch (G__37659) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36536__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36536__auto__)){
continue;
} else {
return ret__36536__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37660){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37660);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37669,G__37670){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37669);

(invoc_array[(1)] = G__37670);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37672,G__37673,G__37674){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37672);

(invoc_array[(1)] = G__37673);

(invoc_array[(2)] = G__37674);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37678,G__37679,G__37680,G__37681){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37678);

(invoc_array[(1)] = G__37679);

(invoc_array[(2)] = G__37680);

(invoc_array[(3)] = G__37681);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37685,G__37686,G__37687,G__37688,G__37689){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37685);

(invoc_array[(1)] = G__37686);

(invoc_array[(2)] = G__37687);

(invoc_array[(3)] = G__37688);

(invoc_array[(4)] = G__37689);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37690,G__37691,G__37692,G__37693,G__37694,G__37695){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37690);

(invoc_array[(1)] = G__37691);

(invoc_array[(2)] = G__37692);

(invoc_array[(3)] = G__37693);

(invoc_array[(4)] = G__37694);

(invoc_array[(5)] = G__37695);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37697,G__37698,G__37699,G__37700,G__37701,G__37702,G__37703){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37697);

(invoc_array[(1)] = G__37698);

(invoc_array[(2)] = G__37699);

(invoc_array[(3)] = G__37700);

(invoc_array[(4)] = G__37701);

(invoc_array[(5)] = G__37702);

(invoc_array[(6)] = G__37703);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37716,G__37717,G__37718,G__37719,G__37720,G__37721,G__37722,G__37723){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37716);

(invoc_array[(1)] = G__37717);

(invoc_array[(2)] = G__37718);

(invoc_array[(3)] = G__37719);

(invoc_array[(4)] = G__37720);

(invoc_array[(5)] = G__37721);

(invoc_array[(6)] = G__37722);

(invoc_array[(7)] = G__37723);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37747,G__37748,G__37749,G__37750,G__37751,G__37752,G__37753,G__37754,G__37755){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37747);

(invoc_array[(1)] = G__37748);

(invoc_array[(2)] = G__37749);

(invoc_array[(3)] = G__37750);

(invoc_array[(4)] = G__37751);

(invoc_array[(5)] = G__37752);

(invoc_array[(6)] = G__37753);

(invoc_array[(7)] = G__37754);

(invoc_array[(8)] = G__37755);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37760,G__37761,G__37762,G__37763,G__37764,G__37765,G__37766,G__37767,G__37768,G__37769){
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

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37772,G__37773,G__37774,G__37775,G__37776,G__37777,G__37778,G__37779,G__37780,G__37781,G__37782){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37772);

(invoc_array[(1)] = G__37773);

(invoc_array[(2)] = G__37774);

(invoc_array[(3)] = G__37775);

(invoc_array[(4)] = G__37776);

(invoc_array[(5)] = G__37777);

(invoc_array[(6)] = G__37778);

(invoc_array[(7)] = G__37779);

(invoc_array[(8)] = G__37780);

(invoc_array[(9)] = G__37781);

(invoc_array[(10)] = G__37782);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37801,G__37802,G__37803,G__37804,G__37805,G__37806,G__37807,G__37808,G__37809,G__37810,G__37811,G__37812){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37801);

(invoc_array[(1)] = G__37802);

(invoc_array[(2)] = G__37803);

(invoc_array[(3)] = G__37804);

(invoc_array[(4)] = G__37805);

(invoc_array[(5)] = G__37806);

(invoc_array[(6)] = G__37807);

(invoc_array[(7)] = G__37808);

(invoc_array[(8)] = G__37809);

(invoc_array[(9)] = G__37810);

(invoc_array[(10)] = G__37811);

(invoc_array[(11)] = G__37812);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37821,G__37822,G__37823,G__37824,G__37825,G__37826,G__37827,G__37828,G__37829,G__37830,G__37831,G__37832,G__37833){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37821);

(invoc_array[(1)] = G__37822);

(invoc_array[(2)] = G__37823);

(invoc_array[(3)] = G__37824);

(invoc_array[(4)] = G__37825);

(invoc_array[(5)] = G__37826);

(invoc_array[(6)] = G__37827);

(invoc_array[(7)] = G__37828);

(invoc_array[(8)] = G__37829);

(invoc_array[(9)] = G__37830);

(invoc_array[(10)] = G__37831);

(invoc_array[(11)] = G__37832);

(invoc_array[(12)] = G__37833);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37917,G__37918,G__37919,G__37920,G__37921,G__37922,G__37923,G__37924,G__37925,G__37926,G__37927,G__37928,G__37929,G__37930){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37917);

(invoc_array[(1)] = G__37918);

(invoc_array[(2)] = G__37919);

(invoc_array[(3)] = G__37920);

(invoc_array[(4)] = G__37921);

(invoc_array[(5)] = G__37922);

(invoc_array[(6)] = G__37923);

(invoc_array[(7)] = G__37924);

(invoc_array[(8)] = G__37925);

(invoc_array[(9)] = G__37926);

(invoc_array[(10)] = G__37927);

(invoc_array[(11)] = G__37928);

(invoc_array[(12)] = G__37929);

(invoc_array[(13)] = G__37930);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37944,G__37945,G__37946,G__37947,G__37948,G__37949,G__37950,G__37951,G__37952,G__37953,G__37954,G__37955,G__37956,G__37957,G__37958){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37944);

(invoc_array[(1)] = G__37945);

(invoc_array[(2)] = G__37946);

(invoc_array[(3)] = G__37947);

(invoc_array[(4)] = G__37948);

(invoc_array[(5)] = G__37949);

(invoc_array[(6)] = G__37950);

(invoc_array[(7)] = G__37951);

(invoc_array[(8)] = G__37952);

(invoc_array[(9)] = G__37953);

(invoc_array[(10)] = G__37954);

(invoc_array[(11)] = G__37955);

(invoc_array[(12)] = G__37956);

(invoc_array[(13)] = G__37957);

(invoc_array[(14)] = G__37958);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37981,G__37982,G__37983,G__37984,G__37985,G__37986,G__37987,G__37988,G__37989,G__37990,G__37991,G__37992,G__37993,G__37994,G__37995,G__37996){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37981);

(invoc_array[(1)] = G__37982);

(invoc_array[(2)] = G__37983);

(invoc_array[(3)] = G__37984);

(invoc_array[(4)] = G__37985);

(invoc_array[(5)] = G__37986);

(invoc_array[(6)] = G__37987);

(invoc_array[(7)] = G__37988);

(invoc_array[(8)] = G__37989);

(invoc_array[(9)] = G__37990);

(invoc_array[(10)] = G__37991);

(invoc_array[(11)] = G__37992);

(invoc_array[(12)] = G__37993);

(invoc_array[(13)] = G__37994);

(invoc_array[(14)] = G__37995);

(invoc_array[(15)] = G__37996);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37997,G__37998,G__37999,G__38000,G__38001,G__38002,G__38003,G__38004,G__38005,G__38006,G__38007,G__38008,G__38009,G__38010,G__38011,G__38012,G__38013){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37997);

(invoc_array[(1)] = G__37998);

(invoc_array[(2)] = G__37999);

(invoc_array[(3)] = G__38000);

(invoc_array[(4)] = G__38001);

(invoc_array[(5)] = G__38002);

(invoc_array[(6)] = G__38003);

(invoc_array[(7)] = G__38004);

(invoc_array[(8)] = G__38005);

(invoc_array[(9)] = G__38006);

(invoc_array[(10)] = G__38007);

(invoc_array[(11)] = G__38008);

(invoc_array[(12)] = G__38009);

(invoc_array[(13)] = G__38010);

(invoc_array[(14)] = G__38011);

(invoc_array[(15)] = G__38012);

(invoc_array[(16)] = G__38013);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__38036,G__38037,G__38038,G__38039,G__38040,G__38041,G__38042,G__38043,G__38044,G__38045,G__38046,G__38047,G__38048,G__38049,G__38050,G__38051,G__38052,G__38053){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__38036);

(invoc_array[(1)] = G__38037);

(invoc_array[(2)] = G__38038);

(invoc_array[(3)] = G__38039);

(invoc_array[(4)] = G__38040);

(invoc_array[(5)] = G__38041);

(invoc_array[(6)] = G__38042);

(invoc_array[(7)] = G__38043);

(invoc_array[(8)] = G__38044);

(invoc_array[(9)] = G__38045);

(invoc_array[(10)] = G__38046);

(invoc_array[(11)] = G__38047);

(invoc_array[(12)] = G__38048);

(invoc_array[(13)] = G__38049);

(invoc_array[(14)] = G__38050);

(invoc_array[(15)] = G__38051);

(invoc_array[(16)] = G__38052);

(invoc_array[(17)] = G__38053);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__38063,G__38064,G__38065,G__38066,G__38067,G__38068,G__38069,G__38070,G__38071,G__38072,G__38073,G__38074,G__38075,G__38076,G__38077,G__38078,G__38079,G__38080,G__38081){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__38063);

(invoc_array[(1)] = G__38064);

(invoc_array[(2)] = G__38065);

(invoc_array[(3)] = G__38066);

(invoc_array[(4)] = G__38067);

(invoc_array[(5)] = G__38068);

(invoc_array[(6)] = G__38069);

(invoc_array[(7)] = G__38070);

(invoc_array[(8)] = G__38071);

(invoc_array[(9)] = G__38072);

(invoc_array[(10)] = G__38073);

(invoc_array[(11)] = G__38074);

(invoc_array[(12)] = G__38075);

(invoc_array[(13)] = G__38076);

(invoc_array[(14)] = G__38077);

(invoc_array[(15)] = G__38078);

(invoc_array[(16)] = G__38079);

(invoc_array[(17)] = G__38080);

(invoc_array[(18)] = G__38081);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__38090,G__38091,G__38092,G__38093,G__38094,G__38095,G__38096,G__38097,G__38098,G__38099,G__38100,G__38101,G__38102,G__38103,G__38104,G__38105,G__38106,G__38107,G__38108,G__38109){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__38090);

(invoc_array[(1)] = G__38091);

(invoc_array[(2)] = G__38092);

(invoc_array[(3)] = G__38093);

(invoc_array[(4)] = G__38094);

(invoc_array[(5)] = G__38095);

(invoc_array[(6)] = G__38096);

(invoc_array[(7)] = G__38097);

(invoc_array[(8)] = G__38098);

(invoc_array[(9)] = G__38099);

(invoc_array[(10)] = G__38100);

(invoc_array[(11)] = G__38101);

(invoc_array[(12)] = G__38102);

(invoc_array[(13)] = G__38103);

(invoc_array[(14)] = G__38104);

(invoc_array[(15)] = G__38105);

(invoc_array[(16)] = G__38106);

(invoc_array[(17)] = G__38107);

(invoc_array[(18)] = G__38108);

(invoc_array[(19)] = G__38109);

while(true){
var ret__36537__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36537__auto__)){
continue;
} else {
return ret__36537__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37659)].join('')));

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
var G__38435 = cljs.core.next(params__$1);
var G__38436 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38437 = lets;
params__$1 = G__38435;
new_params = G__38436;
lets = G__38437;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38441 = cljs.core.next(params__$1);
var G__38442 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38443 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38441;
new_params = G__38442;
lets = G__38443;
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
var len__5749__auto___38446 = arguments.length;
var i__5750__auto___38447 = (0);
while(true){
if((i__5750__auto___38447 < len__5749__auto___38446)){
args__5755__auto__.push((arguments[i__5750__auto___38447]));

var G__38448 = (i__5750__auto___38447 + (1));
i__5750__auto___38447 = G__38448;
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

var vec__38166 = sig;
var seq__38167 = cljs.core.seq(vec__38166);
var first__38168 = cljs.core.first(seq__38167);
var seq__38167__$1 = cljs.core.next(seq__38167);
var params = first__38168;
var body = seq__38167__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq38154){
var G__38155 = cljs.core.first(seq38154);
var seq38154__$1 = cljs.core.next(seq38154);
var G__38156 = cljs.core.first(seq38154__$1);
var seq38154__$2 = cljs.core.next(seq38154__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38155,G__38156,seq38154__$2);
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
var G__38462 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38463 = cljs.core.next(fdecls);
ret = G__38462;
fdecls = G__38463;
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
var len__5749__auto___38464 = arguments.length;
var i__5750__auto___38465 = (0);
while(true){
if((i__5750__auto___38465 < len__5749__auto___38464)){
args__5755__auto__.push((arguments[i__5750__auto___38465]));

var G__38466 = (i__5750__auto___38465 + (1));
i__5750__auto___38465 = G__38466;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq38189){
var G__38190 = cljs.core.first(seq38189);
var seq38189__$1 = cljs.core.next(seq38189);
var G__38191 = cljs.core.first(seq38189__$1);
var seq38189__$2 = cljs.core.next(seq38189__$1);
var G__38192 = cljs.core.first(seq38189__$2);
var seq38189__$3 = cljs.core.next(seq38189__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38190,G__38191,G__38192,seq38189__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38475 = arguments.length;
var i__5750__auto___38476 = (0);
while(true){
if((i__5750__auto___38476 < len__5749__auto___38475)){
args__5755__auto__.push((arguments[i__5750__auto___38476]));

var G__38477 = (i__5750__auto___38476 + (1));
i__5750__auto___38476 = G__38477;
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
var G__38478 = cljs.core.cons(f,p);
var G__38479 = cljs.core.next(args__$1);
p = G__38478;
args__$1 = G__38479;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38480 = cljs.core.cons(f,p);
var G__38481 = cljs.core.next(args__$1);
p = G__38480;
args__$1 = G__38481;
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
var G__38482 = cljs.core.next(fd);
fd = G__38482;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38485 = cljs.core.next(fd);
fd = G__38485;
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
var G__38487 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38488 = cljs.core.next(ds);
acc = G__38487;
ds = G__38488;
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
var G__38491 = cljs.core.next(p);
var G__38492 = cljs.core.cons(cljs.core.first(p),d);
p = G__38491;
d = G__38492;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq38200){
var G__38201 = cljs.core.first(seq38200);
var seq38200__$1 = cljs.core.next(seq38200);
var G__38202 = cljs.core.first(seq38200__$1);
var seq38200__$2 = cljs.core.next(seq38200__$1);
var G__38203 = cljs.core.first(seq38200__$2);
var seq38200__$3 = cljs.core.next(seq38200__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38201,G__38202,G__38203,seq38200__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
