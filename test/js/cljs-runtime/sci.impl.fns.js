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
var ret__36550__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36550__auto__)){
continue;
} else {
return ret__36550__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37391 = null;
if (arguments.length > 0) {
var G__38200__i = 0, G__38200__a = new Array(arguments.length -  0);
while (G__38200__i < G__38200__a.length) {G__38200__a[G__38200__i] = arguments[G__38200__i + 0]; ++G__38200__i;}
  G__37391 = new cljs.core.IndexedSeq(G__38200__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37391);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__38201){
var G__37391 = cljs.core.seq(arglist__38201);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37392,var_args){
var G__37393 = null;
if (arguments.length > 1) {
var G__38202__i = 0, G__38202__a = new Array(arguments.length -  1);
while (G__38202__i < G__38202__a.length) {G__38202__a[G__38202__i] = arguments[G__38202__i + 1]; ++G__38202__i;}
  G__37393 = new cljs.core.IndexedSeq(G__38202__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37392,G__37393);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__38204){
var G__37392 = cljs.core.first(arglist__38204);
var G__37393 = cljs.core.rest(arglist__38204);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37394,G__37395,var_args){
var G__37396 = null;
if (arguments.length > 2) {
var G__38212__i = 0, G__38212__a = new Array(arguments.length -  2);
while (G__38212__i < G__38212__a.length) {G__38212__a[G__38212__i] = arguments[G__38212__i + 2]; ++G__38212__i;}
  G__37396 = new cljs.core.IndexedSeq(G__38212__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37394,G__37395,G__37396);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__38213){
var G__37394 = cljs.core.first(arglist__38213);
arglist__38213 = cljs.core.next(arglist__38213);
var G__37395 = cljs.core.first(arglist__38213);
var G__37396 = cljs.core.rest(arglist__38213);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37397,G__37398,G__37399,var_args){
var G__37400 = null;
if (arguments.length > 3) {
var G__38217__i = 0, G__38217__a = new Array(arguments.length -  3);
while (G__38217__i < G__38217__a.length) {G__38217__a[G__38217__i] = arguments[G__38217__i + 3]; ++G__38217__i;}
  G__37400 = new cljs.core.IndexedSeq(G__38217__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37397,G__37398,G__37399,G__37400);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__38218){
var G__37397 = cljs.core.first(arglist__38218);
arglist__38218 = cljs.core.next(arglist__38218);
var G__37398 = cljs.core.first(arglist__38218);
arglist__38218 = cljs.core.next(arglist__38218);
var G__37399 = cljs.core.first(arglist__38218);
var G__37400 = cljs.core.rest(arglist__38218);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37401,G__37402,G__37403,G__37404,var_args){
var G__37405 = null;
if (arguments.length > 4) {
var G__38222__i = 0, G__38222__a = new Array(arguments.length -  4);
while (G__38222__i < G__38222__a.length) {G__38222__a[G__38222__i] = arguments[G__38222__i + 4]; ++G__38222__i;}
  G__37405 = new cljs.core.IndexedSeq(G__38222__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37401,G__37402,G__37403,G__37404,G__37405);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__38223){
var G__37401 = cljs.core.first(arglist__38223);
arglist__38223 = cljs.core.next(arglist__38223);
var G__37402 = cljs.core.first(arglist__38223);
arglist__38223 = cljs.core.next(arglist__38223);
var G__37403 = cljs.core.first(arglist__38223);
arglist__38223 = cljs.core.next(arglist__38223);
var G__37404 = cljs.core.first(arglist__38223);
var G__37405 = cljs.core.rest(arglist__38223);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37406,G__37407,G__37408,G__37409,G__37410,var_args){
var G__37411 = null;
if (arguments.length > 5) {
var G__38224__i = 0, G__38224__a = new Array(arguments.length -  5);
while (G__38224__i < G__38224__a.length) {G__38224__a[G__38224__i] = arguments[G__38224__i + 5]; ++G__38224__i;}
  G__37411 = new cljs.core.IndexedSeq(G__38224__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37406,G__37407,G__37408,G__37409,G__37410,G__37411);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__38225){
var G__37406 = cljs.core.first(arglist__38225);
arglist__38225 = cljs.core.next(arglist__38225);
var G__37407 = cljs.core.first(arglist__38225);
arglist__38225 = cljs.core.next(arglist__38225);
var G__37408 = cljs.core.first(arglist__38225);
arglist__38225 = cljs.core.next(arglist__38225);
var G__37409 = cljs.core.first(arglist__38225);
arglist__38225 = cljs.core.next(arglist__38225);
var G__37410 = cljs.core.first(arglist__38225);
var G__37411 = cljs.core.rest(arglist__38225);
return sci$impl$fns$arity_5__delegate(G__37406,G__37407,G__37408,G__37409,G__37410,G__37411);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37416);

(invoc_array[(1)] = G__37417);

(invoc_array[(2)] = G__37418);

(invoc_array[(3)] = G__37419);

(invoc_array[(4)] = G__37420);

(invoc_array[(5)] = G__37421);

(invoc_array[vararg_idx] = G__37422);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,var_args){
var G__37422 = null;
if (arguments.length > 6) {
var G__38230__i = 0, G__38230__a = new Array(arguments.length -  6);
while (G__38230__i < G__38230__a.length) {G__38230__a[G__38230__i] = arguments[G__38230__i + 6]; ++G__38230__i;}
  G__37422 = new cljs.core.IndexedSeq(G__38230__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__38231){
var G__37416 = cljs.core.first(arglist__38231);
arglist__38231 = cljs.core.next(arglist__38231);
var G__37417 = cljs.core.first(arglist__38231);
arglist__38231 = cljs.core.next(arglist__38231);
var G__37418 = cljs.core.first(arglist__38231);
arglist__38231 = cljs.core.next(arglist__38231);
var G__37419 = cljs.core.first(arglist__38231);
arglist__38231 = cljs.core.next(arglist__38231);
var G__37420 = cljs.core.first(arglist__38231);
arglist__38231 = cljs.core.next(arglist__38231);
var G__37421 = cljs.core.first(arglist__38231);
var G__37422 = cljs.core.rest(arglist__38231);
return sci$impl$fns$arity_6__delegate(G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37423);

(invoc_array[(1)] = G__37424);

(invoc_array[(2)] = G__37425);

(invoc_array[(3)] = G__37426);

(invoc_array[(4)] = G__37427);

(invoc_array[(5)] = G__37428);

(invoc_array[(6)] = G__37429);

(invoc_array[vararg_idx] = G__37430);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,var_args){
var G__37430 = null;
if (arguments.length > 7) {
var G__38236__i = 0, G__38236__a = new Array(arguments.length -  7);
while (G__38236__i < G__38236__a.length) {G__38236__a[G__38236__i] = arguments[G__38236__i + 7]; ++G__38236__i;}
  G__37430 = new cljs.core.IndexedSeq(G__38236__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__38237){
var G__37423 = cljs.core.first(arglist__38237);
arglist__38237 = cljs.core.next(arglist__38237);
var G__37424 = cljs.core.first(arglist__38237);
arglist__38237 = cljs.core.next(arglist__38237);
var G__37425 = cljs.core.first(arglist__38237);
arglist__38237 = cljs.core.next(arglist__38237);
var G__37426 = cljs.core.first(arglist__38237);
arglist__38237 = cljs.core.next(arglist__38237);
var G__37427 = cljs.core.first(arglist__38237);
arglist__38237 = cljs.core.next(arglist__38237);
var G__37428 = cljs.core.first(arglist__38237);
arglist__38237 = cljs.core.next(arglist__38237);
var G__37429 = cljs.core.first(arglist__38237);
var G__37430 = cljs.core.rest(arglist__38237);
return sci$impl$fns$arity_7__delegate(G__37423,G__37424,G__37425,G__37426,G__37427,G__37428,G__37429,G__37430);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439){
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

(invoc_array[vararg_idx] = G__37439);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,var_args){
var G__37439 = null;
if (arguments.length > 8) {
var G__38241__i = 0, G__38241__a = new Array(arguments.length -  8);
while (G__38241__i < G__38241__a.length) {G__38241__a[G__38241__i] = arguments[G__38241__i + 8]; ++G__38241__i;}
  G__37439 = new cljs.core.IndexedSeq(G__38241__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__38243){
var G__37431 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37432 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37433 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37434 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37435 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37436 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37437 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37438 = cljs.core.first(arglist__38243);
var G__37439 = cljs.core.rest(arglist__38243);
return sci$impl$fns$arity_8__delegate(G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,var_args){
var G__37449 = null;
if (arguments.length > 9) {
var G__38246__i = 0, G__38246__a = new Array(arguments.length -  9);
while (G__38246__i < G__38246__a.length) {G__38246__a[G__38246__i] = arguments[G__38246__i + 9]; ++G__38246__i;}
  G__37449 = new cljs.core.IndexedSeq(G__38246__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__38247){
var G__37440 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37441 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37442 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37443 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37444 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37445 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37446 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37447 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37448 = cljs.core.first(arglist__38247);
var G__37449 = cljs.core.rest(arglist__38247);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,var_args){
var G__37460 = null;
if (arguments.length > 10) {
var G__38253__i = 0, G__38253__a = new Array(arguments.length -  10);
while (G__38253__i < G__38253__a.length) {G__38253__a[G__38253__i] = arguments[G__38253__i + 10]; ++G__38253__i;}
  G__37460 = new cljs.core.IndexedSeq(G__38253__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__38254){
var G__37450 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37451 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37452 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37453 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37454 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37455 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37456 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37457 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37458 = cljs.core.first(arglist__38254);
arglist__38254 = cljs.core.next(arglist__38254);
var G__37459 = cljs.core.first(arglist__38254);
var G__37460 = cljs.core.rest(arglist__38254);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,var_args){
var G__37472 = null;
if (arguments.length > 11) {
var G__38256__i = 0, G__38256__a = new Array(arguments.length -  11);
while (G__38256__i < G__38256__a.length) {G__38256__a[G__38256__i] = arguments[G__38256__i + 11]; ++G__38256__i;}
  G__37472 = new cljs.core.IndexedSeq(G__38256__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__38257){
var G__37461 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37462 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37463 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37464 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37465 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37466 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37467 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37468 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37469 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37470 = cljs.core.first(arglist__38257);
arglist__38257 = cljs.core.next(arglist__38257);
var G__37471 = cljs.core.first(arglist__38257);
var G__37472 = cljs.core.rest(arglist__38257);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,var_args){
var G__37485 = null;
if (arguments.length > 12) {
var G__38260__i = 0, G__38260__a = new Array(arguments.length -  12);
while (G__38260__i < G__38260__a.length) {G__38260__a[G__38260__i] = arguments[G__38260__i + 12]; ++G__38260__i;}
  G__37485 = new cljs.core.IndexedSeq(G__38260__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37473,G__37474,G__37475,G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__38261){
var G__37473 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37474 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37475 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37476 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37477 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37478 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37479 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37480 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37481 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37482 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37483 = cljs.core.first(arglist__38261);
arglist__38261 = cljs.core.next(arglist__38261);
var G__37484 = cljs.core.first(arglist__38261);
var G__37485 = cljs.core.rest(arglist__38261);
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,var_args){
var G__37499 = null;
if (arguments.length > 13) {
var G__38266__i = 0, G__38266__a = new Array(arguments.length -  13);
while (G__38266__i < G__38266__a.length) {G__38266__a[G__38266__i] = arguments[G__38266__i + 13]; ++G__38266__i;}
  G__37499 = new cljs.core.IndexedSeq(G__38266__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__38268){
var G__37486 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37487 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37488 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37489 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37490 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37491 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37492 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37493 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37494 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37495 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37496 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37497 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37498 = cljs.core.first(arglist__38268);
var G__37499 = cljs.core.rest(arglist__38268);
return sci$impl$fns$arity_13__delegate(G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37510);

(invoc_array[(1)] = G__37511);

(invoc_array[(2)] = G__37512);

(invoc_array[(3)] = G__37513);

(invoc_array[(4)] = G__37514);

(invoc_array[(5)] = G__37515);

(invoc_array[(6)] = G__37516);

(invoc_array[(7)] = G__37517);

(invoc_array[(8)] = G__37518);

(invoc_array[(9)] = G__37519);

(invoc_array[(10)] = G__37520);

(invoc_array[(11)] = G__37521);

(invoc_array[(12)] = G__37522);

(invoc_array[(13)] = G__37523);

(invoc_array[vararg_idx] = G__37524);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,var_args){
var G__37524 = null;
if (arguments.length > 14) {
var G__38270__i = 0, G__38270__a = new Array(arguments.length -  14);
while (G__38270__i < G__38270__a.length) {G__38270__a[G__38270__i] = arguments[G__38270__i + 14]; ++G__38270__i;}
  G__37524 = new cljs.core.IndexedSeq(G__38270__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__38271){
var G__37510 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37511 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37512 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37513 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37514 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37515 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37516 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37517 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37518 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37519 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37520 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37521 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37522 = cljs.core.first(arglist__38271);
arglist__38271 = cljs.core.next(arglist__38271);
var G__37523 = cljs.core.first(arglist__38271);
var G__37524 = cljs.core.rest(arglist__38271);
return sci$impl$fns$arity_14__delegate(G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37525);

(invoc_array[(1)] = G__37526);

(invoc_array[(2)] = G__37527);

(invoc_array[(3)] = G__37528);

(invoc_array[(4)] = G__37529);

(invoc_array[(5)] = G__37530);

(invoc_array[(6)] = G__37531);

(invoc_array[(7)] = G__37532);

(invoc_array[(8)] = G__37533);

(invoc_array[(9)] = G__37534);

(invoc_array[(10)] = G__37535);

(invoc_array[(11)] = G__37536);

(invoc_array[(12)] = G__37537);

(invoc_array[(13)] = G__37538);

(invoc_array[(14)] = G__37539);

(invoc_array[vararg_idx] = G__37540);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,var_args){
var G__37540 = null;
if (arguments.length > 15) {
var G__38274__i = 0, G__38274__a = new Array(arguments.length -  15);
while (G__38274__i < G__38274__a.length) {G__38274__a[G__38274__i] = arguments[G__38274__i + 15]; ++G__38274__i;}
  G__37540 = new cljs.core.IndexedSeq(G__38274__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__38277){
var G__37525 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37526 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37527 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37528 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37529 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37530 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37531 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37532 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37533 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37534 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37535 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37536 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37537 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37538 = cljs.core.first(arglist__38277);
arglist__38277 = cljs.core.next(arglist__38277);
var G__37539 = cljs.core.first(arglist__38277);
var G__37540 = cljs.core.rest(arglist__38277);
return sci$impl$fns$arity_15__delegate(G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37553);

(invoc_array[(1)] = G__37554);

(invoc_array[(2)] = G__37555);

(invoc_array[(3)] = G__37556);

(invoc_array[(4)] = G__37557);

(invoc_array[(5)] = G__37558);

(invoc_array[(6)] = G__37559);

(invoc_array[(7)] = G__37560);

(invoc_array[(8)] = G__37561);

(invoc_array[(9)] = G__37562);

(invoc_array[(10)] = G__37563);

(invoc_array[(11)] = G__37564);

(invoc_array[(12)] = G__37565);

(invoc_array[(13)] = G__37566);

(invoc_array[(14)] = G__37567);

(invoc_array[(15)] = G__37568);

(invoc_array[vararg_idx] = G__37569);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,var_args){
var G__37569 = null;
if (arguments.length > 16) {
var G__38282__i = 0, G__38282__a = new Array(arguments.length -  16);
while (G__38282__i < G__38282__a.length) {G__38282__a[G__38282__i] = arguments[G__38282__i + 16]; ++G__38282__i;}
  G__37569 = new cljs.core.IndexedSeq(G__38282__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__38283){
var G__37553 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37554 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37555 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37556 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37557 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37558 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37559 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37560 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37561 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37562 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37563 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37564 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37565 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37566 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37567 = cljs.core.first(arglist__38283);
arglist__38283 = cljs.core.next(arglist__38283);
var G__37568 = cljs.core.first(arglist__38283);
var G__37569 = cljs.core.rest(arglist__38283);
return sci$impl$fns$arity_16__delegate(G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568,G__37569);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37574);

(invoc_array[(1)] = G__37575);

(invoc_array[(2)] = G__37576);

(invoc_array[(3)] = G__37577);

(invoc_array[(4)] = G__37578);

(invoc_array[(5)] = G__37579);

(invoc_array[(6)] = G__37580);

(invoc_array[(7)] = G__37581);

(invoc_array[(8)] = G__37582);

(invoc_array[(9)] = G__37583);

(invoc_array[(10)] = G__37584);

(invoc_array[(11)] = G__37585);

(invoc_array[(12)] = G__37586);

(invoc_array[(13)] = G__37587);

(invoc_array[(14)] = G__37588);

(invoc_array[(15)] = G__37589);

(invoc_array[(16)] = G__37590);

(invoc_array[vararg_idx] = G__37591);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,var_args){
var G__37591 = null;
if (arguments.length > 17) {
var G__38288__i = 0, G__38288__a = new Array(arguments.length -  17);
while (G__38288__i < G__38288__a.length) {G__38288__a[G__38288__i] = arguments[G__38288__i + 17]; ++G__38288__i;}
  G__37591 = new cljs.core.IndexedSeq(G__38288__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__38291){
var G__37574 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37575 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37576 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37577 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37578 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37579 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37580 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37581 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37582 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37583 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37584 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37585 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37586 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37587 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37588 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37589 = cljs.core.first(arglist__38291);
arglist__38291 = cljs.core.next(arglist__38291);
var G__37590 = cljs.core.first(arglist__38291);
var G__37591 = cljs.core.rest(arglist__38291);
return sci$impl$fns$arity_17__delegate(G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614){
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

(invoc_array[(5)] = G__37601);

(invoc_array[(6)] = G__37602);

(invoc_array[(7)] = G__37603);

(invoc_array[(8)] = G__37604);

(invoc_array[(9)] = G__37605);

(invoc_array[(10)] = G__37606);

(invoc_array[(11)] = G__37607);

(invoc_array[(12)] = G__37608);

(invoc_array[(13)] = G__37609);

(invoc_array[(14)] = G__37610);

(invoc_array[(15)] = G__37611);

(invoc_array[(16)] = G__37612);

(invoc_array[(17)] = G__37613);

(invoc_array[vararg_idx] = G__37614);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,var_args){
var G__37614 = null;
if (arguments.length > 18) {
var G__38294__i = 0, G__38294__a = new Array(arguments.length -  18);
while (G__38294__i < G__38294__a.length) {G__38294__a[G__38294__i] = arguments[G__38294__i + 18]; ++G__38294__i;}
  G__37614 = new cljs.core.IndexedSeq(G__38294__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__38296){
var G__37596 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37597 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37598 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37599 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37600 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37601 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37602 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37603 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37604 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37605 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37606 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37607 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37608 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37609 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37610 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37611 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37612 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37613 = cljs.core.first(arglist__38296);
var G__37614 = cljs.core.rest(arglist__38296);
return sci$impl$fns$arity_18__delegate(G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639){
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

(invoc_array[(6)] = G__37626);

(invoc_array[(7)] = G__37627);

(invoc_array[(8)] = G__37628);

(invoc_array[(9)] = G__37629);

(invoc_array[(10)] = G__37630);

(invoc_array[(11)] = G__37631);

(invoc_array[(12)] = G__37632);

(invoc_array[(13)] = G__37633);

(invoc_array[(14)] = G__37634);

(invoc_array[(15)] = G__37635);

(invoc_array[(16)] = G__37636);

(invoc_array[(17)] = G__37637);

(invoc_array[(18)] = G__37638);

(invoc_array[vararg_idx] = G__37639);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,var_args){
var G__37639 = null;
if (arguments.length > 19) {
var G__38301__i = 0, G__38301__a = new Array(arguments.length -  19);
while (G__38301__i < G__38301__a.length) {G__38301__a[G__38301__i] = arguments[G__38301__i + 19]; ++G__38301__i;}
  G__37639 = new cljs.core.IndexedSeq(G__38301__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__38302){
var G__37620 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37621 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37622 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37623 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37624 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37625 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37626 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37627 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37628 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37629 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37630 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37631 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37632 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37633 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37634 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37635 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37636 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37637 = cljs.core.first(arglist__38302);
arglist__38302 = cljs.core.next(arglist__38302);
var G__37638 = cljs.core.first(arglist__38302);
var G__37639 = cljs.core.rest(arglist__38302);
return sci$impl$fns$arity_19__delegate(G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630,G__37631,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37645);

(invoc_array[(1)] = G__37646);

(invoc_array[(2)] = G__37647);

(invoc_array[(3)] = G__37648);

(invoc_array[(4)] = G__37649);

(invoc_array[(5)] = G__37650);

(invoc_array[(6)] = G__37651);

(invoc_array[(7)] = G__37652);

(invoc_array[(8)] = G__37653);

(invoc_array[(9)] = G__37654);

(invoc_array[(10)] = G__37655);

(invoc_array[(11)] = G__37656);

(invoc_array[(12)] = G__37657);

(invoc_array[(13)] = G__37658);

(invoc_array[(14)] = G__37659);

(invoc_array[(15)] = G__37660);

(invoc_array[(16)] = G__37661);

(invoc_array[(17)] = G__37662);

(invoc_array[(18)] = G__37663);

(invoc_array[(19)] = G__37664);

(invoc_array[vararg_idx] = G__37665);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,var_args){
var G__37665 = null;
if (arguments.length > 20) {
var G__38307__i = 0, G__38307__a = new Array(arguments.length -  20);
while (G__38307__i < G__38307__a.length) {G__38307__a[G__38307__i] = arguments[G__38307__i + 20]; ++G__38307__i;}
  G__37665 = new cljs.core.IndexedSeq(G__38307__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__38308){
var G__37645 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37646 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37647 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37648 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37649 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37650 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37651 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37652 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37653 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37654 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37655 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37656 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37657 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37658 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37659 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37660 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37661 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37662 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37663 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37664 = cljs.core.first(arglist__38308);
var G__37665 = cljs.core.rest(arglist__38308);
return sci$impl$fns$arity_20__delegate(G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652,G__37653,G__37654,G__37655,G__37656,G__37657,G__37658,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37390)].join('')));

}
})():(function (){var G__37666 = fixed_arity;
switch (G__37666) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36550__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36550__auto__)){
continue;
} else {
return ret__36550__auto__;
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
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37672,G__37673){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37672);

(invoc_array[(1)] = G__37673);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37676,G__37677,G__37678){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37676);

(invoc_array[(1)] = G__37677);

(invoc_array[(2)] = G__37678);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37680,G__37681,G__37682,G__37683){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37680);

(invoc_array[(1)] = G__37681);

(invoc_array[(2)] = G__37682);

(invoc_array[(3)] = G__37683);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37691,G__37692,G__37693,G__37694,G__37695){
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

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37696,G__37697,G__37698,G__37699,G__37700,G__37701){
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

(invoc_array[(5)] = G__37701);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37702,G__37703,G__37704,G__37705,G__37706,G__37707,G__37708){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37702);

(invoc_array[(1)] = G__37703);

(invoc_array[(2)] = G__37704);

(invoc_array[(3)] = G__37705);

(invoc_array[(4)] = G__37706);

(invoc_array[(5)] = G__37707);

(invoc_array[(6)] = G__37708);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37713,G__37714,G__37715,G__37716,G__37717,G__37718,G__37719,G__37720){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37713);

(invoc_array[(1)] = G__37714);

(invoc_array[(2)] = G__37715);

(invoc_array[(3)] = G__37716);

(invoc_array[(4)] = G__37717);

(invoc_array[(5)] = G__37718);

(invoc_array[(6)] = G__37719);

(invoc_array[(7)] = G__37720);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37721,G__37722,G__37723,G__37724,G__37725,G__37726,G__37727,G__37728,G__37729){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37721);

(invoc_array[(1)] = G__37722);

(invoc_array[(2)] = G__37723);

(invoc_array[(3)] = G__37724);

(invoc_array[(4)] = G__37725);

(invoc_array[(5)] = G__37726);

(invoc_array[(6)] = G__37727);

(invoc_array[(7)] = G__37728);

(invoc_array[(8)] = G__37729);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37737,G__37738,G__37739,G__37740,G__37741,G__37742,G__37743,G__37744,G__37745,G__37746){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37737);

(invoc_array[(1)] = G__37738);

(invoc_array[(2)] = G__37739);

(invoc_array[(3)] = G__37740);

(invoc_array[(4)] = G__37741);

(invoc_array[(5)] = G__37742);

(invoc_array[(6)] = G__37743);

(invoc_array[(7)] = G__37744);

(invoc_array[(8)] = G__37745);

(invoc_array[(9)] = G__37746);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37755,G__37756,G__37757,G__37758,G__37759,G__37760,G__37761,G__37762,G__37763,G__37764,G__37765){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37755);

(invoc_array[(1)] = G__37756);

(invoc_array[(2)] = G__37757);

(invoc_array[(3)] = G__37758);

(invoc_array[(4)] = G__37759);

(invoc_array[(5)] = G__37760);

(invoc_array[(6)] = G__37761);

(invoc_array[(7)] = G__37762);

(invoc_array[(8)] = G__37763);

(invoc_array[(9)] = G__37764);

(invoc_array[(10)] = G__37765);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37774,G__37775,G__37776,G__37777,G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37774);

(invoc_array[(1)] = G__37775);

(invoc_array[(2)] = G__37776);

(invoc_array[(3)] = G__37777);

(invoc_array[(4)] = G__37778);

(invoc_array[(5)] = G__37779);

(invoc_array[(6)] = G__37780);

(invoc_array[(7)] = G__37781);

(invoc_array[(8)] = G__37782);

(invoc_array[(9)] = G__37783);

(invoc_array[(10)] = G__37784);

(invoc_array[(11)] = G__37785);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37793,G__37794,G__37795,G__37796,G__37797,G__37798,G__37799,G__37800,G__37801,G__37802,G__37803,G__37804,G__37805){
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

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37808,G__37809,G__37810,G__37811,G__37812,G__37813,G__37814,G__37815,G__37816,G__37817,G__37818,G__37819,G__37820,G__37821){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37808);

(invoc_array[(1)] = G__37809);

(invoc_array[(2)] = G__37810);

(invoc_array[(3)] = G__37811);

(invoc_array[(4)] = G__37812);

(invoc_array[(5)] = G__37813);

(invoc_array[(6)] = G__37814);

(invoc_array[(7)] = G__37815);

(invoc_array[(8)] = G__37816);

(invoc_array[(9)] = G__37817);

(invoc_array[(10)] = G__37818);

(invoc_array[(11)] = G__37819);

(invoc_array[(12)] = G__37820);

(invoc_array[(13)] = G__37821);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37822,G__37823,G__37824,G__37825,G__37826,G__37827,G__37828,G__37829,G__37830,G__37831,G__37832,G__37833,G__37834,G__37835,G__37836){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37822);

(invoc_array[(1)] = G__37823);

(invoc_array[(2)] = G__37824);

(invoc_array[(3)] = G__37825);

(invoc_array[(4)] = G__37826);

(invoc_array[(5)] = G__37827);

(invoc_array[(6)] = G__37828);

(invoc_array[(7)] = G__37829);

(invoc_array[(8)] = G__37830);

(invoc_array[(9)] = G__37831);

(invoc_array[(10)] = G__37832);

(invoc_array[(11)] = G__37833);

(invoc_array[(12)] = G__37834);

(invoc_array[(13)] = G__37835);

(invoc_array[(14)] = G__37836);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37844,G__37845,G__37846,G__37847,G__37848,G__37849,G__37850,G__37851,G__37852,G__37853,G__37854,G__37855,G__37856,G__37857,G__37858,G__37859){
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

(invoc_array[(6)] = G__37850);

(invoc_array[(7)] = G__37851);

(invoc_array[(8)] = G__37852);

(invoc_array[(9)] = G__37853);

(invoc_array[(10)] = G__37854);

(invoc_array[(11)] = G__37855);

(invoc_array[(12)] = G__37856);

(invoc_array[(13)] = G__37857);

(invoc_array[(14)] = G__37858);

(invoc_array[(15)] = G__37859);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37860,G__37861,G__37862,G__37863,G__37864,G__37865,G__37866,G__37867,G__37868,G__37869,G__37870,G__37871,G__37872,G__37873,G__37874,G__37875,G__37876){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37860);

(invoc_array[(1)] = G__37861);

(invoc_array[(2)] = G__37862);

(invoc_array[(3)] = G__37863);

(invoc_array[(4)] = G__37864);

(invoc_array[(5)] = G__37865);

(invoc_array[(6)] = G__37866);

(invoc_array[(7)] = G__37867);

(invoc_array[(8)] = G__37868);

(invoc_array[(9)] = G__37869);

(invoc_array[(10)] = G__37870);

(invoc_array[(11)] = G__37871);

(invoc_array[(12)] = G__37872);

(invoc_array[(13)] = G__37873);

(invoc_array[(14)] = G__37874);

(invoc_array[(15)] = G__37875);

(invoc_array[(16)] = G__37876);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37887,G__37888,G__37889,G__37890,G__37891,G__37892,G__37893,G__37894,G__37895,G__37896,G__37897,G__37898,G__37899,G__37900,G__37901,G__37902,G__37903,G__37904){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37887);

(invoc_array[(1)] = G__37888);

(invoc_array[(2)] = G__37889);

(invoc_array[(3)] = G__37890);

(invoc_array[(4)] = G__37891);

(invoc_array[(5)] = G__37892);

(invoc_array[(6)] = G__37893);

(invoc_array[(7)] = G__37894);

(invoc_array[(8)] = G__37895);

(invoc_array[(9)] = G__37896);

(invoc_array[(10)] = G__37897);

(invoc_array[(11)] = G__37898);

(invoc_array[(12)] = G__37899);

(invoc_array[(13)] = G__37900);

(invoc_array[(14)] = G__37901);

(invoc_array[(15)] = G__37902);

(invoc_array[(16)] = G__37903);

(invoc_array[(17)] = G__37904);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37911,G__37912,G__37913,G__37914,G__37915,G__37916,G__37917,G__37918,G__37919,G__37920,G__37921,G__37922,G__37923,G__37924,G__37925,G__37926,G__37927,G__37928,G__37929){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37911);

(invoc_array[(1)] = G__37912);

(invoc_array[(2)] = G__37913);

(invoc_array[(3)] = G__37914);

(invoc_array[(4)] = G__37915);

(invoc_array[(5)] = G__37916);

(invoc_array[(6)] = G__37917);

(invoc_array[(7)] = G__37918);

(invoc_array[(8)] = G__37919);

(invoc_array[(9)] = G__37920);

(invoc_array[(10)] = G__37921);

(invoc_array[(11)] = G__37922);

(invoc_array[(12)] = G__37923);

(invoc_array[(13)] = G__37924);

(invoc_array[(14)] = G__37925);

(invoc_array[(15)] = G__37926);

(invoc_array[(16)] = G__37927);

(invoc_array[(17)] = G__37928);

(invoc_array[(18)] = G__37929);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37934,G__37935,G__37936,G__37937,G__37938,G__37939,G__37940,G__37941,G__37942,G__37943,G__37944,G__37945,G__37946,G__37947,G__37948,G__37949,G__37950,G__37951,G__37952,G__37953){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37934);

(invoc_array[(1)] = G__37935);

(invoc_array[(2)] = G__37936);

(invoc_array[(3)] = G__37937);

(invoc_array[(4)] = G__37938);

(invoc_array[(5)] = G__37939);

(invoc_array[(6)] = G__37940);

(invoc_array[(7)] = G__37941);

(invoc_array[(8)] = G__37942);

(invoc_array[(9)] = G__37943);

(invoc_array[(10)] = G__37944);

(invoc_array[(11)] = G__37945);

(invoc_array[(12)] = G__37946);

(invoc_array[(13)] = G__37947);

(invoc_array[(14)] = G__37948);

(invoc_array[(15)] = G__37949);

(invoc_array[(16)] = G__37950);

(invoc_array[(17)] = G__37951);

(invoc_array[(18)] = G__37952);

(invoc_array[(19)] = G__37953);

while(true){
var ret__36551__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36551__auto__)){
continue;
} else {
return ret__36551__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37666)].join('')));

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
var G__38345 = cljs.core.next(params__$1);
var G__38346 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38347 = lets;
params__$1 = G__38345;
new_params = G__38346;
lets = G__38347;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38348 = cljs.core.next(params__$1);
var G__38349 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38350 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38348;
new_params = G__38349;
lets = G__38350;
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
var len__5749__auto___38354 = arguments.length;
var i__5750__auto___38355 = (0);
while(true){
if((i__5750__auto___38355 < len__5749__auto___38354)){
args__5755__auto__.push((arguments[i__5750__auto___38355]));

var G__38356 = (i__5750__auto___38355 + (1));
i__5750__auto___38355 = G__38356;
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

var vec__38018 = sig;
var seq__38019 = cljs.core.seq(vec__38018);
var first__38020 = cljs.core.first(seq__38019);
var seq__38019__$1 = cljs.core.next(seq__38019);
var params = first__38020;
var body = seq__38019__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq37996){
var G__37997 = cljs.core.first(seq37996);
var seq37996__$1 = cljs.core.next(seq37996);
var G__37998 = cljs.core.first(seq37996__$1);
var seq37996__$2 = cljs.core.next(seq37996__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37997,G__37998,seq37996__$2);
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
var G__38392 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38393 = cljs.core.next(fdecls);
ret = G__38392;
fdecls = G__38393;
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
var len__5749__auto___38396 = arguments.length;
var i__5750__auto___38397 = (0);
while(true){
if((i__5750__auto___38397 < len__5749__auto___38396)){
args__5755__auto__.push((arguments[i__5750__auto___38397]));

var G__38398 = (i__5750__auto___38397 + (1));
i__5750__auto___38397 = G__38398;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq38064){
var G__38065 = cljs.core.first(seq38064);
var seq38064__$1 = cljs.core.next(seq38064);
var G__38066 = cljs.core.first(seq38064__$1);
var seq38064__$2 = cljs.core.next(seq38064__$1);
var G__38067 = cljs.core.first(seq38064__$2);
var seq38064__$3 = cljs.core.next(seq38064__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38065,G__38066,G__38067,seq38064__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
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
var G__38404 = cljs.core.cons(f,p);
var G__38405 = cljs.core.next(args__$1);
p = G__38404;
args__$1 = G__38405;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38406 = cljs.core.cons(f,p);
var G__38407 = cljs.core.next(args__$1);
p = G__38406;
args__$1 = G__38407;
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
var G__38408 = cljs.core.next(fd);
fd = G__38408;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38409 = cljs.core.next(fd);
fd = G__38409;
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
var G__38417 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38418 = cljs.core.next(ds);
acc = G__38417;
ds = G__38418;
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
var G__38423 = cljs.core.next(p);
var G__38424 = cljs.core.cons(cljs.core.first(p),d);
p = G__38423;
d = G__38424;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq38090){
var G__38091 = cljs.core.first(seq38090);
var seq38090__$1 = cljs.core.next(seq38090);
var G__38092 = cljs.core.first(seq38090__$1);
var seq38090__$2 = cljs.core.next(seq38090__$1);
var G__38093 = cljs.core.first(seq38090__$2);
var seq38090__$3 = cljs.core.next(seq38090__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38091,G__38092,G__38093,seq38090__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
