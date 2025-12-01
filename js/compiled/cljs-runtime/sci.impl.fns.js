goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__32401 = arguments.length;
switch (G__32401) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__32402 = fixed_arity;
switch (G__32402) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__32403){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__32403);

while(true){
var ret__31587__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31587__auto__)){
continue;
} else {
return ret__31587__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__32403 = null;
if (arguments.length > 0) {
var G__33227__i = 0, G__33227__a = new Array(arguments.length -  0);
while (G__33227__i < G__33227__a.length) {G__33227__a[G__33227__i] = arguments[G__33227__i + 0]; ++G__33227__i;}
  G__32403 = new cljs.core.IndexedSeq(G__33227__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__32403);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__33228){
var G__32403 = cljs.core.seq(arglist__33228);
return sci$impl$fns$arity_0__delegate(G__32403);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__32404,G__32405){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32404);

(invoc_array[vararg_idx] = G__32405);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__32404,var_args){
var G__32405 = null;
if (arguments.length > 1) {
var G__33229__i = 0, G__33229__a = new Array(arguments.length -  1);
while (G__33229__i < G__33229__a.length) {G__33229__a[G__33229__i] = arguments[G__33229__i + 1]; ++G__33229__i;}
  G__32405 = new cljs.core.IndexedSeq(G__33229__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__32404,G__32405);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__33230){
var G__32404 = cljs.core.first(arglist__33230);
var G__32405 = cljs.core.rest(arglist__33230);
return sci$impl$fns$arity_1__delegate(G__32404,G__32405);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__32406,G__32407,G__32408){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32406);

(invoc_array[(1)] = G__32407);

(invoc_array[vararg_idx] = G__32408);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__32406,G__32407,var_args){
var G__32408 = null;
if (arguments.length > 2) {
var G__33231__i = 0, G__33231__a = new Array(arguments.length -  2);
while (G__33231__i < G__33231__a.length) {G__33231__a[G__33231__i] = arguments[G__33231__i + 2]; ++G__33231__i;}
  G__32408 = new cljs.core.IndexedSeq(G__33231__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__32406,G__32407,G__32408);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__33233){
var G__32406 = cljs.core.first(arglist__33233);
arglist__33233 = cljs.core.next(arglist__33233);
var G__32407 = cljs.core.first(arglist__33233);
var G__32408 = cljs.core.rest(arglist__33233);
return sci$impl$fns$arity_2__delegate(G__32406,G__32407,G__32408);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__32413,G__32414,G__32415,G__32416){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32413);

(invoc_array[(1)] = G__32414);

(invoc_array[(2)] = G__32415);

(invoc_array[vararg_idx] = G__32416);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__32413,G__32414,G__32415,var_args){
var G__32416 = null;
if (arguments.length > 3) {
var G__33236__i = 0, G__33236__a = new Array(arguments.length -  3);
while (G__33236__i < G__33236__a.length) {G__33236__a[G__33236__i] = arguments[G__33236__i + 3]; ++G__33236__i;}
  G__32416 = new cljs.core.IndexedSeq(G__33236__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__32413,G__32414,G__32415,G__32416);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__33237){
var G__32413 = cljs.core.first(arglist__33237);
arglist__33237 = cljs.core.next(arglist__33237);
var G__32414 = cljs.core.first(arglist__33237);
arglist__33237 = cljs.core.next(arglist__33237);
var G__32415 = cljs.core.first(arglist__33237);
var G__32416 = cljs.core.rest(arglist__33237);
return sci$impl$fns$arity_3__delegate(G__32413,G__32414,G__32415,G__32416);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__32417,G__32418,G__32419,G__32420,G__32421){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32417);

(invoc_array[(1)] = G__32418);

(invoc_array[(2)] = G__32419);

(invoc_array[(3)] = G__32420);

(invoc_array[vararg_idx] = G__32421);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__32417,G__32418,G__32419,G__32420,var_args){
var G__32421 = null;
if (arguments.length > 4) {
var G__33238__i = 0, G__33238__a = new Array(arguments.length -  4);
while (G__33238__i < G__33238__a.length) {G__33238__a[G__33238__i] = arguments[G__33238__i + 4]; ++G__33238__i;}
  G__32421 = new cljs.core.IndexedSeq(G__33238__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__32417,G__32418,G__32419,G__32420,G__32421);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__33239){
var G__32417 = cljs.core.first(arglist__33239);
arglist__33239 = cljs.core.next(arglist__33239);
var G__32418 = cljs.core.first(arglist__33239);
arglist__33239 = cljs.core.next(arglist__33239);
var G__32419 = cljs.core.first(arglist__33239);
arglist__33239 = cljs.core.next(arglist__33239);
var G__32420 = cljs.core.first(arglist__33239);
var G__32421 = cljs.core.rest(arglist__33239);
return sci$impl$fns$arity_4__delegate(G__32417,G__32418,G__32419,G__32420,G__32421);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__32422,G__32423,G__32424,G__32425,G__32426,G__32427){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32422);

(invoc_array[(1)] = G__32423);

(invoc_array[(2)] = G__32424);

(invoc_array[(3)] = G__32425);

(invoc_array[(4)] = G__32426);

(invoc_array[vararg_idx] = G__32427);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__32422,G__32423,G__32424,G__32425,G__32426,var_args){
var G__32427 = null;
if (arguments.length > 5) {
var G__33247__i = 0, G__33247__a = new Array(arguments.length -  5);
while (G__33247__i < G__33247__a.length) {G__33247__a[G__33247__i] = arguments[G__33247__i + 5]; ++G__33247__i;}
  G__32427 = new cljs.core.IndexedSeq(G__33247__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__32422,G__32423,G__32424,G__32425,G__32426,G__32427);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__33248){
var G__32422 = cljs.core.first(arglist__33248);
arglist__33248 = cljs.core.next(arglist__33248);
var G__32423 = cljs.core.first(arglist__33248);
arglist__33248 = cljs.core.next(arglist__33248);
var G__32424 = cljs.core.first(arglist__33248);
arglist__33248 = cljs.core.next(arglist__33248);
var G__32425 = cljs.core.first(arglist__33248);
arglist__33248 = cljs.core.next(arglist__33248);
var G__32426 = cljs.core.first(arglist__33248);
var G__32427 = cljs.core.rest(arglist__33248);
return sci$impl$fns$arity_5__delegate(G__32422,G__32423,G__32424,G__32425,G__32426,G__32427);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__32428,G__32429,G__32430,G__32431,G__32432,G__32433,G__32434){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32428);

(invoc_array[(1)] = G__32429);

(invoc_array[(2)] = G__32430);

(invoc_array[(3)] = G__32431);

(invoc_array[(4)] = G__32432);

(invoc_array[(5)] = G__32433);

(invoc_array[vararg_idx] = G__32434);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__32428,G__32429,G__32430,G__32431,G__32432,G__32433,var_args){
var G__32434 = null;
if (arguments.length > 6) {
var G__33250__i = 0, G__33250__a = new Array(arguments.length -  6);
while (G__33250__i < G__33250__a.length) {G__33250__a[G__33250__i] = arguments[G__33250__i + 6]; ++G__33250__i;}
  G__32434 = new cljs.core.IndexedSeq(G__33250__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__32428,G__32429,G__32430,G__32431,G__32432,G__32433,G__32434);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__33251){
var G__32428 = cljs.core.first(arglist__33251);
arglist__33251 = cljs.core.next(arglist__33251);
var G__32429 = cljs.core.first(arglist__33251);
arglist__33251 = cljs.core.next(arglist__33251);
var G__32430 = cljs.core.first(arglist__33251);
arglist__33251 = cljs.core.next(arglist__33251);
var G__32431 = cljs.core.first(arglist__33251);
arglist__33251 = cljs.core.next(arglist__33251);
var G__32432 = cljs.core.first(arglist__33251);
arglist__33251 = cljs.core.next(arglist__33251);
var G__32433 = cljs.core.first(arglist__33251);
var G__32434 = cljs.core.rest(arglist__33251);
return sci$impl$fns$arity_6__delegate(G__32428,G__32429,G__32430,G__32431,G__32432,G__32433,G__32434);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,G__32441,G__32442){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32435);

(invoc_array[(1)] = G__32436);

(invoc_array[(2)] = G__32437);

(invoc_array[(3)] = G__32438);

(invoc_array[(4)] = G__32439);

(invoc_array[(5)] = G__32440);

(invoc_array[(6)] = G__32441);

(invoc_array[vararg_idx] = G__32442);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,G__32441,var_args){
var G__32442 = null;
if (arguments.length > 7) {
var G__33252__i = 0, G__33252__a = new Array(arguments.length -  7);
while (G__33252__i < G__33252__a.length) {G__33252__a[G__33252__i] = arguments[G__33252__i + 7]; ++G__33252__i;}
  G__32442 = new cljs.core.IndexedSeq(G__33252__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,G__32441,G__32442);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__33253){
var G__32435 = cljs.core.first(arglist__33253);
arglist__33253 = cljs.core.next(arglist__33253);
var G__32436 = cljs.core.first(arglist__33253);
arglist__33253 = cljs.core.next(arglist__33253);
var G__32437 = cljs.core.first(arglist__33253);
arglist__33253 = cljs.core.next(arglist__33253);
var G__32438 = cljs.core.first(arglist__33253);
arglist__33253 = cljs.core.next(arglist__33253);
var G__32439 = cljs.core.first(arglist__33253);
arglist__33253 = cljs.core.next(arglist__33253);
var G__32440 = cljs.core.first(arglist__33253);
arglist__33253 = cljs.core.next(arglist__33253);
var G__32441 = cljs.core.first(arglist__33253);
var G__32442 = cljs.core.rest(arglist__33253);
return sci$impl$fns$arity_7__delegate(G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,G__32441,G__32442);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450,G__32451){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32443);

(invoc_array[(1)] = G__32444);

(invoc_array[(2)] = G__32445);

(invoc_array[(3)] = G__32446);

(invoc_array[(4)] = G__32447);

(invoc_array[(5)] = G__32448);

(invoc_array[(6)] = G__32449);

(invoc_array[(7)] = G__32450);

(invoc_array[vararg_idx] = G__32451);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450,var_args){
var G__32451 = null;
if (arguments.length > 8) {
var G__33254__i = 0, G__33254__a = new Array(arguments.length -  8);
while (G__33254__i < G__33254__a.length) {G__33254__a[G__33254__i] = arguments[G__33254__i + 8]; ++G__33254__i;}
  G__32451 = new cljs.core.IndexedSeq(G__33254__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450,G__32451);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__33257){
var G__32443 = cljs.core.first(arglist__33257);
arglist__33257 = cljs.core.next(arglist__33257);
var G__32444 = cljs.core.first(arglist__33257);
arglist__33257 = cljs.core.next(arglist__33257);
var G__32445 = cljs.core.first(arglist__33257);
arglist__33257 = cljs.core.next(arglist__33257);
var G__32446 = cljs.core.first(arglist__33257);
arglist__33257 = cljs.core.next(arglist__33257);
var G__32447 = cljs.core.first(arglist__33257);
arglist__33257 = cljs.core.next(arglist__33257);
var G__32448 = cljs.core.first(arglist__33257);
arglist__33257 = cljs.core.next(arglist__33257);
var G__32449 = cljs.core.first(arglist__33257);
arglist__33257 = cljs.core.next(arglist__33257);
var G__32450 = cljs.core.first(arglist__33257);
var G__32451 = cljs.core.rest(arglist__33257);
return sci$impl$fns$arity_8__delegate(G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450,G__32451);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460,G__32461){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32452);

(invoc_array[(1)] = G__32453);

(invoc_array[(2)] = G__32454);

(invoc_array[(3)] = G__32455);

(invoc_array[(4)] = G__32456);

(invoc_array[(5)] = G__32457);

(invoc_array[(6)] = G__32458);

(invoc_array[(7)] = G__32459);

(invoc_array[(8)] = G__32460);

(invoc_array[vararg_idx] = G__32461);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460,var_args){
var G__32461 = null;
if (arguments.length > 9) {
var G__33262__i = 0, G__33262__a = new Array(arguments.length -  9);
while (G__33262__i < G__33262__a.length) {G__33262__a[G__33262__i] = arguments[G__33262__i + 9]; ++G__33262__i;}
  G__32461 = new cljs.core.IndexedSeq(G__33262__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460,G__32461);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__33263){
var G__32452 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32453 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32454 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32455 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32456 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32457 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32458 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32459 = cljs.core.first(arglist__33263);
arglist__33263 = cljs.core.next(arglist__33263);
var G__32460 = cljs.core.first(arglist__33263);
var G__32461 = cljs.core.rest(arglist__33263);
return sci$impl$fns$arity_9__delegate(G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460,G__32461);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__32462,G__32463,G__32464,G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32462);

(invoc_array[(1)] = G__32463);

(invoc_array[(2)] = G__32464);

(invoc_array[(3)] = G__32465);

(invoc_array[(4)] = G__32466);

(invoc_array[(5)] = G__32467);

(invoc_array[(6)] = G__32468);

(invoc_array[(7)] = G__32469);

(invoc_array[(8)] = G__32470);

(invoc_array[(9)] = G__32471);

(invoc_array[vararg_idx] = G__32472);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__32462,G__32463,G__32464,G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,var_args){
var G__32472 = null;
if (arguments.length > 10) {
var G__33266__i = 0, G__33266__a = new Array(arguments.length -  10);
while (G__33266__i < G__33266__a.length) {G__33266__a[G__33266__i] = arguments[G__33266__i + 10]; ++G__33266__i;}
  G__32472 = new cljs.core.IndexedSeq(G__33266__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__32462,G__32463,G__32464,G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__33267){
var G__32462 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32463 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32464 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32465 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32466 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32467 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32468 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32469 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32470 = cljs.core.first(arglist__33267);
arglist__33267 = cljs.core.next(arglist__33267);
var G__32471 = cljs.core.first(arglist__33267);
var G__32472 = cljs.core.rest(arglist__33267);
return sci$impl$fns$arity_10__delegate(G__32462,G__32463,G__32464,G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__32473,G__32474,G__32475,G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,G__32484){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32473);

(invoc_array[(1)] = G__32474);

(invoc_array[(2)] = G__32475);

(invoc_array[(3)] = G__32476);

(invoc_array[(4)] = G__32477);

(invoc_array[(5)] = G__32478);

(invoc_array[(6)] = G__32479);

(invoc_array[(7)] = G__32480);

(invoc_array[(8)] = G__32481);

(invoc_array[(9)] = G__32482);

(invoc_array[(10)] = G__32483);

(invoc_array[vararg_idx] = G__32484);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__32473,G__32474,G__32475,G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,var_args){
var G__32484 = null;
if (arguments.length > 11) {
var G__33268__i = 0, G__33268__a = new Array(arguments.length -  11);
while (G__33268__i < G__33268__a.length) {G__33268__a[G__33268__i] = arguments[G__33268__i + 11]; ++G__33268__i;}
  G__32484 = new cljs.core.IndexedSeq(G__33268__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__32473,G__32474,G__32475,G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,G__32484);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__33269){
var G__32473 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32474 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32475 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32476 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32477 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32478 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32479 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32480 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32481 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32482 = cljs.core.first(arglist__33269);
arglist__33269 = cljs.core.next(arglist__33269);
var G__32483 = cljs.core.first(arglist__33269);
var G__32484 = cljs.core.rest(arglist__33269);
return sci$impl$fns$arity_11__delegate(G__32473,G__32474,G__32475,G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,G__32484);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,G__32500,G__32501,G__32502,G__32503){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32491);

(invoc_array[(1)] = G__32492);

(invoc_array[(2)] = G__32493);

(invoc_array[(3)] = G__32494);

(invoc_array[(4)] = G__32495);

(invoc_array[(5)] = G__32496);

(invoc_array[(6)] = G__32497);

(invoc_array[(7)] = G__32498);

(invoc_array[(8)] = G__32499);

(invoc_array[(9)] = G__32500);

(invoc_array[(10)] = G__32501);

(invoc_array[(11)] = G__32502);

(invoc_array[vararg_idx] = G__32503);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,G__32500,G__32501,G__32502,var_args){
var G__32503 = null;
if (arguments.length > 12) {
var G__33273__i = 0, G__33273__a = new Array(arguments.length -  12);
while (G__33273__i < G__33273__a.length) {G__33273__a[G__33273__i] = arguments[G__33273__i + 12]; ++G__33273__i;}
  G__32503 = new cljs.core.IndexedSeq(G__33273__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,G__32500,G__32501,G__32502,G__32503);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__33274){
var G__32491 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32492 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32493 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32494 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32495 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32496 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32497 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32498 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32499 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32500 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32501 = cljs.core.first(arglist__33274);
arglist__33274 = cljs.core.next(arglist__33274);
var G__32502 = cljs.core.first(arglist__33274);
var G__32503 = cljs.core.rest(arglist__33274);
return sci$impl$fns$arity_12__delegate(G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,G__32500,G__32501,G__32502,G__32503);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,G__32518,G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,G__32525){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32512);

(invoc_array[(1)] = G__32513);

(invoc_array[(2)] = G__32514);

(invoc_array[(3)] = G__32515);

(invoc_array[(4)] = G__32516);

(invoc_array[(5)] = G__32517);

(invoc_array[(6)] = G__32518);

(invoc_array[(7)] = G__32519);

(invoc_array[(8)] = G__32520);

(invoc_array[(9)] = G__32521);

(invoc_array[(10)] = G__32522);

(invoc_array[(11)] = G__32523);

(invoc_array[(12)] = G__32524);

(invoc_array[vararg_idx] = G__32525);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,G__32518,G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,var_args){
var G__32525 = null;
if (arguments.length > 13) {
var G__33279__i = 0, G__33279__a = new Array(arguments.length -  13);
while (G__33279__i < G__33279__a.length) {G__33279__a[G__33279__i] = arguments[G__33279__i + 13]; ++G__33279__i;}
  G__32525 = new cljs.core.IndexedSeq(G__33279__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,G__32518,G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,G__32525);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__33281){
var G__32512 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32513 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32514 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32515 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32516 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32517 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32518 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32519 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32520 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32521 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32522 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32523 = cljs.core.first(arglist__33281);
arglist__33281 = cljs.core.next(arglist__33281);
var G__32524 = cljs.core.first(arglist__33281);
var G__32525 = cljs.core.rest(arglist__33281);
return sci$impl$fns$arity_13__delegate(G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,G__32518,G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,G__32525);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__32544,G__32545,G__32546,G__32547,G__32548,G__32549,G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,G__32558){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32544);

(invoc_array[(1)] = G__32545);

(invoc_array[(2)] = G__32546);

(invoc_array[(3)] = G__32547);

(invoc_array[(4)] = G__32548);

(invoc_array[(5)] = G__32549);

(invoc_array[(6)] = G__32550);

(invoc_array[(7)] = G__32551);

(invoc_array[(8)] = G__32552);

(invoc_array[(9)] = G__32553);

(invoc_array[(10)] = G__32554);

(invoc_array[(11)] = G__32555);

(invoc_array[(12)] = G__32556);

(invoc_array[(13)] = G__32557);

(invoc_array[vararg_idx] = G__32558);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__32544,G__32545,G__32546,G__32547,G__32548,G__32549,G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,var_args){
var G__32558 = null;
if (arguments.length > 14) {
var G__33282__i = 0, G__33282__a = new Array(arguments.length -  14);
while (G__33282__i < G__33282__a.length) {G__33282__a[G__33282__i] = arguments[G__33282__i + 14]; ++G__33282__i;}
  G__32558 = new cljs.core.IndexedSeq(G__33282__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__32544,G__32545,G__32546,G__32547,G__32548,G__32549,G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,G__32558);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__33283){
var G__32544 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32545 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32546 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32547 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32548 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32549 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32550 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32551 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32552 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32553 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32554 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32555 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32556 = cljs.core.first(arglist__33283);
arglist__33283 = cljs.core.next(arglist__33283);
var G__32557 = cljs.core.first(arglist__33283);
var G__32558 = cljs.core.rest(arglist__33283);
return sci$impl$fns$arity_14__delegate(G__32544,G__32545,G__32546,G__32547,G__32548,G__32549,G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,G__32558);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__32562,G__32563,G__32564,G__32565,G__32566,G__32567,G__32568,G__32569,G__32570,G__32571,G__32572,G__32573,G__32574,G__32575,G__32576,G__32577){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32562);

(invoc_array[(1)] = G__32563);

(invoc_array[(2)] = G__32564);

(invoc_array[(3)] = G__32565);

(invoc_array[(4)] = G__32566);

(invoc_array[(5)] = G__32567);

(invoc_array[(6)] = G__32568);

(invoc_array[(7)] = G__32569);

(invoc_array[(8)] = G__32570);

(invoc_array[(9)] = G__32571);

(invoc_array[(10)] = G__32572);

(invoc_array[(11)] = G__32573);

(invoc_array[(12)] = G__32574);

(invoc_array[(13)] = G__32575);

(invoc_array[(14)] = G__32576);

(invoc_array[vararg_idx] = G__32577);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__32562,G__32563,G__32564,G__32565,G__32566,G__32567,G__32568,G__32569,G__32570,G__32571,G__32572,G__32573,G__32574,G__32575,G__32576,var_args){
var G__32577 = null;
if (arguments.length > 15) {
var G__33287__i = 0, G__33287__a = new Array(arguments.length -  15);
while (G__33287__i < G__33287__a.length) {G__33287__a[G__33287__i] = arguments[G__33287__i + 15]; ++G__33287__i;}
  G__32577 = new cljs.core.IndexedSeq(G__33287__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__32562,G__32563,G__32564,G__32565,G__32566,G__32567,G__32568,G__32569,G__32570,G__32571,G__32572,G__32573,G__32574,G__32575,G__32576,G__32577);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__33289){
var G__32562 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32563 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32564 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32565 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32566 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32567 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32568 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32569 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32570 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32571 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32572 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32573 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32574 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32575 = cljs.core.first(arglist__33289);
arglist__33289 = cljs.core.next(arglist__33289);
var G__32576 = cljs.core.first(arglist__33289);
var G__32577 = cljs.core.rest(arglist__33289);
return sci$impl$fns$arity_15__delegate(G__32562,G__32563,G__32564,G__32565,G__32566,G__32567,G__32568,G__32569,G__32570,G__32571,G__32572,G__32573,G__32574,G__32575,G__32576,G__32577);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,G__32589,G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32583);

(invoc_array[(1)] = G__32584);

(invoc_array[(2)] = G__32585);

(invoc_array[(3)] = G__32586);

(invoc_array[(4)] = G__32587);

(invoc_array[(5)] = G__32588);

(invoc_array[(6)] = G__32589);

(invoc_array[(7)] = G__32590);

(invoc_array[(8)] = G__32591);

(invoc_array[(9)] = G__32592);

(invoc_array[(10)] = G__32593);

(invoc_array[(11)] = G__32594);

(invoc_array[(12)] = G__32595);

(invoc_array[(13)] = G__32596);

(invoc_array[(14)] = G__32597);

(invoc_array[(15)] = G__32598);

(invoc_array[vararg_idx] = G__32599);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,G__32589,G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,var_args){
var G__32599 = null;
if (arguments.length > 16) {
var G__33294__i = 0, G__33294__a = new Array(arguments.length -  16);
while (G__33294__i < G__33294__a.length) {G__33294__a[G__33294__i] = arguments[G__33294__i + 16]; ++G__33294__i;}
  G__32599 = new cljs.core.IndexedSeq(G__33294__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,G__32589,G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__33295){
var G__32583 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32584 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32585 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32586 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32587 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32588 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32589 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32590 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32591 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32592 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32593 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32594 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32595 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32596 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32597 = cljs.core.first(arglist__33295);
arglist__33295 = cljs.core.next(arglist__33295);
var G__32598 = cljs.core.first(arglist__33295);
var G__32599 = cljs.core.rest(arglist__33295);
return sci$impl$fns$arity_16__delegate(G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,G__32589,G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,G__32608,G__32609,G__32610,G__32611,G__32612,G__32613,G__32614,G__32615,G__32616,G__32617){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32600);

(invoc_array[(1)] = G__32601);

(invoc_array[(2)] = G__32602);

(invoc_array[(3)] = G__32603);

(invoc_array[(4)] = G__32604);

(invoc_array[(5)] = G__32605);

(invoc_array[(6)] = G__32606);

(invoc_array[(7)] = G__32607);

(invoc_array[(8)] = G__32608);

(invoc_array[(9)] = G__32609);

(invoc_array[(10)] = G__32610);

(invoc_array[(11)] = G__32611);

(invoc_array[(12)] = G__32612);

(invoc_array[(13)] = G__32613);

(invoc_array[(14)] = G__32614);

(invoc_array[(15)] = G__32615);

(invoc_array[(16)] = G__32616);

(invoc_array[vararg_idx] = G__32617);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,G__32608,G__32609,G__32610,G__32611,G__32612,G__32613,G__32614,G__32615,G__32616,var_args){
var G__32617 = null;
if (arguments.length > 17) {
var G__33296__i = 0, G__33296__a = new Array(arguments.length -  17);
while (G__33296__i < G__33296__a.length) {G__33296__a[G__33296__i] = arguments[G__33296__i + 17]; ++G__33296__i;}
  G__32617 = new cljs.core.IndexedSeq(G__33296__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,G__32608,G__32609,G__32610,G__32611,G__32612,G__32613,G__32614,G__32615,G__32616,G__32617);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__33298){
var G__32600 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32601 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32602 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32603 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32604 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32605 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32606 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32607 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32608 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32609 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32610 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32611 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32612 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32613 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32614 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32615 = cljs.core.first(arglist__33298);
arglist__33298 = cljs.core.next(arglist__33298);
var G__32616 = cljs.core.first(arglist__33298);
var G__32617 = cljs.core.rest(arglist__33298);
return sci$impl$fns$arity_17__delegate(G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,G__32608,G__32609,G__32610,G__32611,G__32612,G__32613,G__32614,G__32615,G__32616,G__32617);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__32624,G__32625,G__32626,G__32628,G__32629,G__32630,G__32631,G__32632,G__32633,G__32634,G__32635,G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,G__32643){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32624);

(invoc_array[(1)] = G__32625);

(invoc_array[(2)] = G__32626);

(invoc_array[(3)] = G__32628);

(invoc_array[(4)] = G__32629);

(invoc_array[(5)] = G__32630);

(invoc_array[(6)] = G__32631);

(invoc_array[(7)] = G__32632);

(invoc_array[(8)] = G__32633);

(invoc_array[(9)] = G__32634);

(invoc_array[(10)] = G__32635);

(invoc_array[(11)] = G__32636);

(invoc_array[(12)] = G__32637);

(invoc_array[(13)] = G__32638);

(invoc_array[(14)] = G__32639);

(invoc_array[(15)] = G__32640);

(invoc_array[(16)] = G__32641);

(invoc_array[(17)] = G__32642);

(invoc_array[vararg_idx] = G__32643);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__32624,G__32625,G__32626,G__32628,G__32629,G__32630,G__32631,G__32632,G__32633,G__32634,G__32635,G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,var_args){
var G__32643 = null;
if (arguments.length > 18) {
var G__33306__i = 0, G__33306__a = new Array(arguments.length -  18);
while (G__33306__i < G__33306__a.length) {G__33306__a[G__33306__i] = arguments[G__33306__i + 18]; ++G__33306__i;}
  G__32643 = new cljs.core.IndexedSeq(G__33306__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__32624,G__32625,G__32626,G__32628,G__32629,G__32630,G__32631,G__32632,G__32633,G__32634,G__32635,G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,G__32643);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__33307){
var G__32624 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32625 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32626 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32628 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32629 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32630 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32631 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32632 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32633 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32634 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32635 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32636 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32637 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32638 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32639 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32640 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32641 = cljs.core.first(arglist__33307);
arglist__33307 = cljs.core.next(arglist__33307);
var G__32642 = cljs.core.first(arglist__33307);
var G__32643 = cljs.core.rest(arglist__33307);
return sci$impl$fns$arity_18__delegate(G__32624,G__32625,G__32626,G__32628,G__32629,G__32630,G__32631,G__32632,G__32633,G__32634,G__32635,G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,G__32643);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656,G__32657,G__32658,G__32659,G__32660,G__32661,G__32662,G__32663,G__32664,G__32665,G__32666){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32647);

(invoc_array[(1)] = G__32648);

(invoc_array[(2)] = G__32649);

(invoc_array[(3)] = G__32650);

(invoc_array[(4)] = G__32651);

(invoc_array[(5)] = G__32652);

(invoc_array[(6)] = G__32653);

(invoc_array[(7)] = G__32654);

(invoc_array[(8)] = G__32655);

(invoc_array[(9)] = G__32656);

(invoc_array[(10)] = G__32657);

(invoc_array[(11)] = G__32658);

(invoc_array[(12)] = G__32659);

(invoc_array[(13)] = G__32660);

(invoc_array[(14)] = G__32661);

(invoc_array[(15)] = G__32662);

(invoc_array[(16)] = G__32663);

(invoc_array[(17)] = G__32664);

(invoc_array[(18)] = G__32665);

(invoc_array[vararg_idx] = G__32666);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656,G__32657,G__32658,G__32659,G__32660,G__32661,G__32662,G__32663,G__32664,G__32665,var_args){
var G__32666 = null;
if (arguments.length > 19) {
var G__33312__i = 0, G__33312__a = new Array(arguments.length -  19);
while (G__33312__i < G__33312__a.length) {G__33312__a[G__33312__i] = arguments[G__33312__i + 19]; ++G__33312__i;}
  G__32666 = new cljs.core.IndexedSeq(G__33312__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656,G__32657,G__32658,G__32659,G__32660,G__32661,G__32662,G__32663,G__32664,G__32665,G__32666);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__33313){
var G__32647 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32648 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32649 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32650 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32651 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32652 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32653 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32654 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32655 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32656 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32657 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32658 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32659 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32660 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32661 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32662 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32663 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32664 = cljs.core.first(arglist__33313);
arglist__33313 = cljs.core.next(arglist__33313);
var G__32665 = cljs.core.first(arglist__33313);
var G__32666 = cljs.core.rest(arglist__33313);
return sci$impl$fns$arity_19__delegate(G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656,G__32657,G__32658,G__32659,G__32660,G__32661,G__32662,G__32663,G__32664,G__32665,G__32666);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__32675,G__32676,G__32677,G__32678,G__32679,G__32680,G__32681,G__32682,G__32683,G__32684,G__32685,G__32686,G__32687,G__32688,G__32689,G__32690,G__32691,G__32692,G__32693,G__32694,G__32695){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32675);

(invoc_array[(1)] = G__32676);

(invoc_array[(2)] = G__32677);

(invoc_array[(3)] = G__32678);

(invoc_array[(4)] = G__32679);

(invoc_array[(5)] = G__32680);

(invoc_array[(6)] = G__32681);

(invoc_array[(7)] = G__32682);

(invoc_array[(8)] = G__32683);

(invoc_array[(9)] = G__32684);

(invoc_array[(10)] = G__32685);

(invoc_array[(11)] = G__32686);

(invoc_array[(12)] = G__32687);

(invoc_array[(13)] = G__32688);

(invoc_array[(14)] = G__32689);

(invoc_array[(15)] = G__32690);

(invoc_array[(16)] = G__32691);

(invoc_array[(17)] = G__32692);

(invoc_array[(18)] = G__32693);

(invoc_array[(19)] = G__32694);

(invoc_array[vararg_idx] = G__32695);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__32675,G__32676,G__32677,G__32678,G__32679,G__32680,G__32681,G__32682,G__32683,G__32684,G__32685,G__32686,G__32687,G__32688,G__32689,G__32690,G__32691,G__32692,G__32693,G__32694,var_args){
var G__32695 = null;
if (arguments.length > 20) {
var G__33316__i = 0, G__33316__a = new Array(arguments.length -  20);
while (G__33316__i < G__33316__a.length) {G__33316__a[G__33316__i] = arguments[G__33316__i + 20]; ++G__33316__i;}
  G__32695 = new cljs.core.IndexedSeq(G__33316__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__32675,G__32676,G__32677,G__32678,G__32679,G__32680,G__32681,G__32682,G__32683,G__32684,G__32685,G__32686,G__32687,G__32688,G__32689,G__32690,G__32691,G__32692,G__32693,G__32694,G__32695);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__33317){
var G__32675 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32676 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32677 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32678 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32679 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32680 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32681 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32682 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32683 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32684 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32685 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32686 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32687 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32688 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32689 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32690 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32691 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32692 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32693 = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var G__32694 = cljs.core.first(arglist__33317);
var G__32695 = cljs.core.rest(arglist__33317);
return sci$impl$fns$arity_20__delegate(G__32675,G__32676,G__32677,G__32678,G__32679,G__32680,G__32681,G__32682,G__32683,G__32684,G__32685,G__32686,G__32687,G__32688,G__32689,G__32690,G__32691,G__32692,G__32693,G__32694,G__32695);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32402)].join('')));

}
})():(function (){var G__32700 = fixed_arity;
switch (G__32700) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__31587__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31587__auto__)){
continue;
} else {
return ret__31587__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__32720){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32720);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__32725,G__32726){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32725);

(invoc_array[(1)] = G__32726);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__32727,G__32728,G__32729){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32727);

(invoc_array[(1)] = G__32728);

(invoc_array[(2)] = G__32729);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__32739,G__32740,G__32741,G__32742){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32739);

(invoc_array[(1)] = G__32740);

(invoc_array[(2)] = G__32741);

(invoc_array[(3)] = G__32742);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__32750,G__32751,G__32752,G__32753,G__32754){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32750);

(invoc_array[(1)] = G__32751);

(invoc_array[(2)] = G__32752);

(invoc_array[(3)] = G__32753);

(invoc_array[(4)] = G__32754);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__32755,G__32756,G__32757,G__32758,G__32759,G__32760){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32755);

(invoc_array[(1)] = G__32756);

(invoc_array[(2)] = G__32757);

(invoc_array[(3)] = G__32758);

(invoc_array[(4)] = G__32759);

(invoc_array[(5)] = G__32760);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__32774,G__32775,G__32776,G__32777,G__32778,G__32779,G__32780){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32774);

(invoc_array[(1)] = G__32775);

(invoc_array[(2)] = G__32776);

(invoc_array[(3)] = G__32777);

(invoc_array[(4)] = G__32778);

(invoc_array[(5)] = G__32779);

(invoc_array[(6)] = G__32780);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__32782,G__32783,G__32784,G__32785,G__32786,G__32787,G__32788,G__32789){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32782);

(invoc_array[(1)] = G__32783);

(invoc_array[(2)] = G__32784);

(invoc_array[(3)] = G__32785);

(invoc_array[(4)] = G__32786);

(invoc_array[(5)] = G__32787);

(invoc_array[(6)] = G__32788);

(invoc_array[(7)] = G__32789);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__32794,G__32795,G__32796,G__32797,G__32798,G__32799,G__32800,G__32801,G__32802){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32794);

(invoc_array[(1)] = G__32795);

(invoc_array[(2)] = G__32796);

(invoc_array[(3)] = G__32797);

(invoc_array[(4)] = G__32798);

(invoc_array[(5)] = G__32799);

(invoc_array[(6)] = G__32800);

(invoc_array[(7)] = G__32801);

(invoc_array[(8)] = G__32802);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__32814,G__32815,G__32816,G__32817,G__32818,G__32819,G__32820,G__32821,G__32822,G__32823){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32814);

(invoc_array[(1)] = G__32815);

(invoc_array[(2)] = G__32816);

(invoc_array[(3)] = G__32817);

(invoc_array[(4)] = G__32818);

(invoc_array[(5)] = G__32819);

(invoc_array[(6)] = G__32820);

(invoc_array[(7)] = G__32821);

(invoc_array[(8)] = G__32822);

(invoc_array[(9)] = G__32823);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__32828,G__32829,G__32830,G__32831,G__32832,G__32833,G__32834,G__32835,G__32836,G__32837,G__32838){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32828);

(invoc_array[(1)] = G__32829);

(invoc_array[(2)] = G__32830);

(invoc_array[(3)] = G__32831);

(invoc_array[(4)] = G__32832);

(invoc_array[(5)] = G__32833);

(invoc_array[(6)] = G__32834);

(invoc_array[(7)] = G__32835);

(invoc_array[(8)] = G__32836);

(invoc_array[(9)] = G__32837);

(invoc_array[(10)] = G__32838);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__32839,G__32840,G__32841,G__32842,G__32843,G__32844,G__32845,G__32846,G__32847,G__32848,G__32849,G__32850){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32839);

(invoc_array[(1)] = G__32840);

(invoc_array[(2)] = G__32841);

(invoc_array[(3)] = G__32842);

(invoc_array[(4)] = G__32843);

(invoc_array[(5)] = G__32844);

(invoc_array[(6)] = G__32845);

(invoc_array[(7)] = G__32846);

(invoc_array[(8)] = G__32847);

(invoc_array[(9)] = G__32848);

(invoc_array[(10)] = G__32849);

(invoc_array[(11)] = G__32850);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__32866,G__32867,G__32868,G__32869,G__32870,G__32871,G__32872,G__32873,G__32874,G__32875,G__32876,G__32877,G__32878){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32866);

(invoc_array[(1)] = G__32867);

(invoc_array[(2)] = G__32868);

(invoc_array[(3)] = G__32869);

(invoc_array[(4)] = G__32870);

(invoc_array[(5)] = G__32871);

(invoc_array[(6)] = G__32872);

(invoc_array[(7)] = G__32873);

(invoc_array[(8)] = G__32874);

(invoc_array[(9)] = G__32875);

(invoc_array[(10)] = G__32876);

(invoc_array[(11)] = G__32877);

(invoc_array[(12)] = G__32878);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__32882,G__32883,G__32884,G__32885,G__32886,G__32887,G__32888,G__32889,G__32890,G__32891,G__32892,G__32893,G__32894,G__32895){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32882);

(invoc_array[(1)] = G__32883);

(invoc_array[(2)] = G__32884);

(invoc_array[(3)] = G__32885);

(invoc_array[(4)] = G__32886);

(invoc_array[(5)] = G__32887);

(invoc_array[(6)] = G__32888);

(invoc_array[(7)] = G__32889);

(invoc_array[(8)] = G__32890);

(invoc_array[(9)] = G__32891);

(invoc_array[(10)] = G__32892);

(invoc_array[(11)] = G__32893);

(invoc_array[(12)] = G__32894);

(invoc_array[(13)] = G__32895);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__32905,G__32906,G__32907,G__32908,G__32909,G__32910,G__32911,G__32912,G__32913,G__32914,G__32915,G__32916,G__32917,G__32918,G__32919){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32905);

(invoc_array[(1)] = G__32906);

(invoc_array[(2)] = G__32907);

(invoc_array[(3)] = G__32908);

(invoc_array[(4)] = G__32909);

(invoc_array[(5)] = G__32910);

(invoc_array[(6)] = G__32911);

(invoc_array[(7)] = G__32912);

(invoc_array[(8)] = G__32913);

(invoc_array[(9)] = G__32914);

(invoc_array[(10)] = G__32915);

(invoc_array[(11)] = G__32916);

(invoc_array[(12)] = G__32917);

(invoc_array[(13)] = G__32918);

(invoc_array[(14)] = G__32919);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__32927,G__32928,G__32929,G__32930,G__32931,G__32932,G__32933,G__32934,G__32935,G__32936,G__32937,G__32938,G__32939,G__32940,G__32941,G__32942){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32927);

(invoc_array[(1)] = G__32928);

(invoc_array[(2)] = G__32929);

(invoc_array[(3)] = G__32930);

(invoc_array[(4)] = G__32931);

(invoc_array[(5)] = G__32932);

(invoc_array[(6)] = G__32933);

(invoc_array[(7)] = G__32934);

(invoc_array[(8)] = G__32935);

(invoc_array[(9)] = G__32936);

(invoc_array[(10)] = G__32937);

(invoc_array[(11)] = G__32938);

(invoc_array[(12)] = G__32939);

(invoc_array[(13)] = G__32940);

(invoc_array[(14)] = G__32941);

(invoc_array[(15)] = G__32942);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__32952,G__32953,G__32954,G__32955,G__32956,G__32957,G__32958,G__32959,G__32960,G__32961,G__32962,G__32963,G__32964,G__32965,G__32966,G__32967,G__32968){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32952);

(invoc_array[(1)] = G__32953);

(invoc_array[(2)] = G__32954);

(invoc_array[(3)] = G__32955);

(invoc_array[(4)] = G__32956);

(invoc_array[(5)] = G__32957);

(invoc_array[(6)] = G__32958);

(invoc_array[(7)] = G__32959);

(invoc_array[(8)] = G__32960);

(invoc_array[(9)] = G__32961);

(invoc_array[(10)] = G__32962);

(invoc_array[(11)] = G__32963);

(invoc_array[(12)] = G__32964);

(invoc_array[(13)] = G__32965);

(invoc_array[(14)] = G__32966);

(invoc_array[(15)] = G__32967);

(invoc_array[(16)] = G__32968);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__32981,G__32982,G__32983,G__32984,G__32985,G__32986,G__32987,G__32988,G__32989,G__32990,G__32991,G__32992,G__32993,G__32994,G__32995,G__32996,G__32997,G__32998){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32981);

(invoc_array[(1)] = G__32982);

(invoc_array[(2)] = G__32983);

(invoc_array[(3)] = G__32984);

(invoc_array[(4)] = G__32985);

(invoc_array[(5)] = G__32986);

(invoc_array[(6)] = G__32987);

(invoc_array[(7)] = G__32988);

(invoc_array[(8)] = G__32989);

(invoc_array[(9)] = G__32990);

(invoc_array[(10)] = G__32991);

(invoc_array[(11)] = G__32992);

(invoc_array[(12)] = G__32993);

(invoc_array[(13)] = G__32994);

(invoc_array[(14)] = G__32995);

(invoc_array[(15)] = G__32996);

(invoc_array[(16)] = G__32997);

(invoc_array[(17)] = G__32998);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__33004,G__33005,G__33006,G__33007,G__33008,G__33009,G__33010,G__33011,G__33012,G__33013,G__33014,G__33015,G__33016,G__33017,G__33018,G__33019,G__33020,G__33021,G__33022){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__33004);

(invoc_array[(1)] = G__33005);

(invoc_array[(2)] = G__33006);

(invoc_array[(3)] = G__33007);

(invoc_array[(4)] = G__33008);

(invoc_array[(5)] = G__33009);

(invoc_array[(6)] = G__33010);

(invoc_array[(7)] = G__33011);

(invoc_array[(8)] = G__33012);

(invoc_array[(9)] = G__33013);

(invoc_array[(10)] = G__33014);

(invoc_array[(11)] = G__33015);

(invoc_array[(12)] = G__33016);

(invoc_array[(13)] = G__33017);

(invoc_array[(14)] = G__33018);

(invoc_array[(15)] = G__33019);

(invoc_array[(16)] = G__33020);

(invoc_array[(17)] = G__33021);

(invoc_array[(18)] = G__33022);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__33040,G__33041,G__33042,G__33043,G__33044,G__33045,G__33046,G__33047,G__33048,G__33049,G__33050,G__33051,G__33052,G__33053,G__33054,G__33055,G__33056,G__33057,G__33058,G__33059){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__33040);

(invoc_array[(1)] = G__33041);

(invoc_array[(2)] = G__33042);

(invoc_array[(3)] = G__33043);

(invoc_array[(4)] = G__33044);

(invoc_array[(5)] = G__33045);

(invoc_array[(6)] = G__33046);

(invoc_array[(7)] = G__33047);

(invoc_array[(8)] = G__33048);

(invoc_array[(9)] = G__33049);

(invoc_array[(10)] = G__33050);

(invoc_array[(11)] = G__33051);

(invoc_array[(12)] = G__33052);

(invoc_array[(13)] = G__33053);

(invoc_array[(14)] = G__33054);

(invoc_array[(15)] = G__33055);

(invoc_array[(16)] = G__33056);

(invoc_array[(17)] = G__33057);

(invoc_array[(18)] = G__33058);

(invoc_array[(19)] = G__33059);

while(true){
var ret__31588__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31588__auto__)){
continue;
} else {
return ret__31588__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32700)].join('')));

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
var G__33357 = cljs.core.next(params__$1);
var G__33358 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__33359 = lets;
params__$1 = G__33357;
new_params = G__33358;
lets = G__33359;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__33360 = cljs.core.next(params__$1);
var G__33361 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__33362 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__33360;
new_params = G__33361;
lets = G__33362;
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
var len__5749__auto___33363 = arguments.length;
var i__5750__auto___33364 = (0);
while(true){
if((i__5750__auto___33364 < len__5749__auto___33363)){
args__5755__auto__.push((arguments[i__5750__auto___33364]));

var G__33366 = (i__5750__auto___33364 + (1));
i__5750__auto___33364 = G__33366;
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

var vec__33149 = sig;
var seq__33150 = cljs.core.seq(vec__33149);
var first__33151 = cljs.core.first(seq__33150);
var seq__33150__$1 = cljs.core.next(seq__33150);
var params = first__33151;
var body = seq__33150__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq33139){
var G__33140 = cljs.core.first(seq33139);
var seq33139__$1 = cljs.core.next(seq33139);
var G__33141 = cljs.core.first(seq33139__$1);
var seq33139__$2 = cljs.core.next(seq33139__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33140,G__33141,seq33139__$2);
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
var G__33399 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__33400 = cljs.core.next(fdecls);
ret = G__33399;
fdecls = G__33400;
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
var len__5749__auto___33406 = arguments.length;
var i__5750__auto___33407 = (0);
while(true){
if((i__5750__auto___33407 < len__5749__auto___33406)){
args__5755__auto__.push((arguments[i__5750__auto___33407]));

var G__33408 = (i__5750__auto___33407 + (1));
i__5750__auto___33407 = G__33408;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq33183){
var G__33184 = cljs.core.first(seq33183);
var seq33183__$1 = cljs.core.next(seq33183);
var G__33185 = cljs.core.first(seq33183__$1);
var seq33183__$2 = cljs.core.next(seq33183__$1);
var G__33186 = cljs.core.first(seq33183__$2);
var seq33183__$3 = cljs.core.next(seq33183__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33184,G__33185,G__33186,seq33183__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33412 = arguments.length;
var i__5750__auto___33413 = (0);
while(true){
if((i__5750__auto___33413 < len__5749__auto___33412)){
args__5755__auto__.push((arguments[i__5750__auto___33413]));

var G__33414 = (i__5750__auto___33413 + (1));
i__5750__auto___33413 = G__33414;
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
var G__33416 = cljs.core.cons(f,p);
var G__33417 = cljs.core.next(args__$1);
p = G__33416;
args__$1 = G__33417;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__33418 = cljs.core.cons(f,p);
var G__33419 = cljs.core.next(args__$1);
p = G__33418;
args__$1 = G__33419;
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
var G__33420 = cljs.core.next(fd);
fd = G__33420;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__33421 = cljs.core.next(fd);
fd = G__33421;
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
var G__33422 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__33423 = cljs.core.next(ds);
acc = G__33422;
ds = G__33423;
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
var G__33428 = cljs.core.next(p);
var G__33429 = cljs.core.cons(cljs.core.first(p),d);
p = G__33428;
d = G__33429;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq33195){
var G__33196 = cljs.core.first(seq33195);
var seq33195__$1 = cljs.core.next(seq33195);
var G__33197 = cljs.core.first(seq33195__$1);
var seq33195__$2 = cljs.core.next(seq33195__$1);
var G__33198 = cljs.core.first(seq33195__$2);
var seq33195__$3 = cljs.core.next(seq33195__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33196,G__33197,G__33198,seq33195__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
