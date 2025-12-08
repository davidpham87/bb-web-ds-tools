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
var ret__36578__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36578__auto__)){
continue;
} else {
return ret__36578__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37391 = null;
if (arguments.length > 0) {
var G__38228__i = 0, G__38228__a = new Array(arguments.length -  0);
while (G__38228__i < G__38228__a.length) {G__38228__a[G__38228__i] = arguments[G__38228__i + 0]; ++G__38228__i;}
  G__37391 = new cljs.core.IndexedSeq(G__38228__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37391);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__38229){
var G__37391 = cljs.core.seq(arglist__38229);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37392,var_args){
var G__37393 = null;
if (arguments.length > 1) {
var G__38232__i = 0, G__38232__a = new Array(arguments.length -  1);
while (G__38232__i < G__38232__a.length) {G__38232__a[G__38232__i] = arguments[G__38232__i + 1]; ++G__38232__i;}
  G__37393 = new cljs.core.IndexedSeq(G__38232__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37392,G__37393);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__38233){
var G__37392 = cljs.core.first(arglist__38233);
var G__37393 = cljs.core.rest(arglist__38233);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37394,G__37395,var_args){
var G__37396 = null;
if (arguments.length > 2) {
var G__38235__i = 0, G__38235__a = new Array(arguments.length -  2);
while (G__38235__i < G__38235__a.length) {G__38235__a[G__38235__i] = arguments[G__38235__i + 2]; ++G__38235__i;}
  G__37396 = new cljs.core.IndexedSeq(G__38235__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37394,G__37395,G__37396);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__38236){
var G__37394 = cljs.core.first(arglist__38236);
arglist__38236 = cljs.core.next(arglist__38236);
var G__37395 = cljs.core.first(arglist__38236);
var G__37396 = cljs.core.rest(arglist__38236);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37397,G__37398,G__37399,var_args){
var G__37400 = null;
if (arguments.length > 3) {
var G__38238__i = 0, G__38238__a = new Array(arguments.length -  3);
while (G__38238__i < G__38238__a.length) {G__38238__a[G__38238__i] = arguments[G__38238__i + 3]; ++G__38238__i;}
  G__37400 = new cljs.core.IndexedSeq(G__38238__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37397,G__37398,G__37399,G__37400);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__38239){
var G__37397 = cljs.core.first(arglist__38239);
arglist__38239 = cljs.core.next(arglist__38239);
var G__37398 = cljs.core.first(arglist__38239);
arglist__38239 = cljs.core.next(arglist__38239);
var G__37399 = cljs.core.first(arglist__38239);
var G__37400 = cljs.core.rest(arglist__38239);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37401,G__37402,G__37403,G__37404,var_args){
var G__37405 = null;
if (arguments.length > 4) {
var G__38240__i = 0, G__38240__a = new Array(arguments.length -  4);
while (G__38240__i < G__38240__a.length) {G__38240__a[G__38240__i] = arguments[G__38240__i + 4]; ++G__38240__i;}
  G__37405 = new cljs.core.IndexedSeq(G__38240__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37401,G__37402,G__37403,G__37404,G__37405);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__38241){
var G__37401 = cljs.core.first(arglist__38241);
arglist__38241 = cljs.core.next(arglist__38241);
var G__37402 = cljs.core.first(arglist__38241);
arglist__38241 = cljs.core.next(arglist__38241);
var G__37403 = cljs.core.first(arglist__38241);
arglist__38241 = cljs.core.next(arglist__38241);
var G__37404 = cljs.core.first(arglist__38241);
var G__37405 = cljs.core.rest(arglist__38241);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37406,G__37407,G__37408,G__37409,G__37410,var_args){
var G__37411 = null;
if (arguments.length > 5) {
var G__38242__i = 0, G__38242__a = new Array(arguments.length -  5);
while (G__38242__i < G__38242__a.length) {G__38242__a[G__38242__i] = arguments[G__38242__i + 5]; ++G__38242__i;}
  G__37411 = new cljs.core.IndexedSeq(G__38242__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37406,G__37407,G__37408,G__37409,G__37410,G__37411);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__38243){
var G__37406 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37407 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37408 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37409 = cljs.core.first(arglist__38243);
arglist__38243 = cljs.core.next(arglist__38243);
var G__37410 = cljs.core.first(arglist__38243);
var G__37411 = cljs.core.rest(arglist__38243);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,var_args){
var G__37418 = null;
if (arguments.length > 6) {
var G__38244__i = 0, G__38244__a = new Array(arguments.length -  6);
while (G__38244__i < G__38244__a.length) {G__38244__a[G__38244__i] = arguments[G__38244__i + 6]; ++G__38244__i;}
  G__37418 = new cljs.core.IndexedSeq(G__38244__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417,G__37418);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__38247){
var G__37412 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37413 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37414 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37415 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37416 = cljs.core.first(arglist__38247);
arglist__38247 = cljs.core.next(arglist__38247);
var G__37417 = cljs.core.first(arglist__38247);
var G__37418 = cljs.core.rest(arglist__38247);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,var_args){
var G__37426 = null;
if (arguments.length > 7) {
var G__38251__i = 0, G__38251__a = new Array(arguments.length -  7);
while (G__38251__i < G__38251__a.length) {G__38251__a[G__38251__i] = arguments[G__38251__i + 7]; ++G__38251__i;}
  G__37426 = new cljs.core.IndexedSeq(G__38251__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__38252){
var G__37419 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37420 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37421 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37422 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37423 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37424 = cljs.core.first(arglist__38252);
arglist__38252 = cljs.core.next(arglist__38252);
var G__37425 = cljs.core.first(arglist__38252);
var G__37426 = cljs.core.rest(arglist__38252);
return sci$impl$fns$arity_7__delegate(G__37419,G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,var_args){
var G__37439 = null;
if (arguments.length > 8) {
var G__38258__i = 0, G__38258__a = new Array(arguments.length -  8);
while (G__38258__i < G__38258__a.length) {G__38258__a[G__38258__i] = arguments[G__38258__i + 8]; ++G__38258__i;}
  G__37439 = new cljs.core.IndexedSeq(G__38258__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37431,G__37432,G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__38260){
var G__37431 = cljs.core.first(arglist__38260);
arglist__38260 = cljs.core.next(arglist__38260);
var G__37432 = cljs.core.first(arglist__38260);
arglist__38260 = cljs.core.next(arglist__38260);
var G__37433 = cljs.core.first(arglist__38260);
arglist__38260 = cljs.core.next(arglist__38260);
var G__37434 = cljs.core.first(arglist__38260);
arglist__38260 = cljs.core.next(arglist__38260);
var G__37435 = cljs.core.first(arglist__38260);
arglist__38260 = cljs.core.next(arglist__38260);
var G__37436 = cljs.core.first(arglist__38260);
arglist__38260 = cljs.core.next(arglist__38260);
var G__37437 = cljs.core.first(arglist__38260);
arglist__38260 = cljs.core.next(arglist__38260);
var G__37438 = cljs.core.first(arglist__38260);
var G__37439 = cljs.core.rest(arglist__38260);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,var_args){
var G__37449 = null;
if (arguments.length > 9) {
var G__38265__i = 0, G__38265__a = new Array(arguments.length -  9);
while (G__38265__i < G__38265__a.length) {G__38265__a[G__38265__i] = arguments[G__38265__i + 9]; ++G__38265__i;}
  G__37449 = new cljs.core.IndexedSeq(G__38265__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37440,G__37441,G__37442,G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__38266){
var G__37440 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37441 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37442 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37443 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37444 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37445 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37446 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37447 = cljs.core.first(arglist__38266);
arglist__38266 = cljs.core.next(arglist__38266);
var G__37448 = cljs.core.first(arglist__38266);
var G__37449 = cljs.core.rest(arglist__38266);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,var_args){
var G__37460 = null;
if (arguments.length > 10) {
var G__38267__i = 0, G__38267__a = new Array(arguments.length -  10);
while (G__38267__i < G__38267__a.length) {G__38267__a[G__38267__i] = arguments[G__38267__i + 10]; ++G__38267__i;}
  G__37460 = new cljs.core.IndexedSeq(G__38267__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__38268){
var G__37450 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37451 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37452 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37453 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37454 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37455 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37456 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37457 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37458 = cljs.core.first(arglist__38268);
arglist__38268 = cljs.core.next(arglist__38268);
var G__37459 = cljs.core.first(arglist__38268);
var G__37460 = cljs.core.rest(arglist__38268);
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
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,var_args){
var G__37472 = null;
if (arguments.length > 11) {
var G__38269__i = 0, G__38269__a = new Array(arguments.length -  11);
while (G__38269__i < G__38269__a.length) {G__38269__a[G__38269__i] = arguments[G__38269__i + 11]; ++G__38269__i;}
  G__37472 = new cljs.core.IndexedSeq(G__38269__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__38270){
var G__37461 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37462 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37463 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37464 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37465 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37466 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37467 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37468 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37469 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37470 = cljs.core.first(arglist__38270);
arglist__38270 = cljs.core.next(arglist__38270);
var G__37471 = cljs.core.first(arglist__38270);
var G__37472 = cljs.core.rest(arglist__38270);
return sci$impl$fns$arity_11__delegate(G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471,G__37472);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37488);

(invoc_array[(1)] = G__37489);

(invoc_array[(2)] = G__37490);

(invoc_array[(3)] = G__37491);

(invoc_array[(4)] = G__37492);

(invoc_array[(5)] = G__37493);

(invoc_array[(6)] = G__37494);

(invoc_array[(7)] = G__37495);

(invoc_array[(8)] = G__37496);

(invoc_array[(9)] = G__37497);

(invoc_array[(10)] = G__37498);

(invoc_array[(11)] = G__37499);

(invoc_array[vararg_idx] = G__37500);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,var_args){
var G__37500 = null;
if (arguments.length > 12) {
var G__38271__i = 0, G__38271__a = new Array(arguments.length -  12);
while (G__38271__i < G__38271__a.length) {G__38271__a[G__38271__i] = arguments[G__38271__i + 12]; ++G__38271__i;}
  G__37500 = new cljs.core.IndexedSeq(G__38271__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__38272){
var G__37488 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37489 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37490 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37491 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37492 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37493 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37494 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37495 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37496 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37497 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37498 = cljs.core.first(arglist__38272);
arglist__38272 = cljs.core.next(arglist__38272);
var G__37499 = cljs.core.first(arglist__38272);
var G__37500 = cljs.core.rest(arglist__38272);
return sci$impl$fns$arity_12__delegate(G__37488,G__37489,G__37490,G__37491,G__37492,G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37508);

(invoc_array[(1)] = G__37509);

(invoc_array[(2)] = G__37510);

(invoc_array[(3)] = G__37511);

(invoc_array[(4)] = G__37512);

(invoc_array[(5)] = G__37513);

(invoc_array[(6)] = G__37514);

(invoc_array[(7)] = G__37515);

(invoc_array[(8)] = G__37516);

(invoc_array[(9)] = G__37517);

(invoc_array[(10)] = G__37518);

(invoc_array[(11)] = G__37519);

(invoc_array[(12)] = G__37520);

(invoc_array[vararg_idx] = G__37521);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,var_args){
var G__37521 = null;
if (arguments.length > 13) {
var G__38280__i = 0, G__38280__a = new Array(arguments.length -  13);
while (G__38280__i < G__38280__a.length) {G__38280__a[G__38280__i] = arguments[G__38280__i + 13]; ++G__38280__i;}
  G__37521 = new cljs.core.IndexedSeq(G__38280__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__38282){
var G__37508 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37509 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37510 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37511 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37512 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37513 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37514 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37515 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37516 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37517 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37518 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37519 = cljs.core.first(arglist__38282);
arglist__38282 = cljs.core.next(arglist__38282);
var G__37520 = cljs.core.first(arglist__38282);
var G__37521 = cljs.core.rest(arglist__38282);
return sci$impl$fns$arity_13__delegate(G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540){
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

(invoc_array[vararg_idx] = G__37540);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,var_args){
var G__37540 = null;
if (arguments.length > 14) {
var G__38286__i = 0, G__38286__a = new Array(arguments.length -  14);
while (G__38286__i < G__38286__a.length) {G__38286__a[G__38286__i] = arguments[G__38286__i + 14]; ++G__38286__i;}
  G__37540 = new cljs.core.IndexedSeq(G__38286__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__38287){
var G__37526 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37527 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37528 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37529 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37530 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37531 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37532 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37533 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37534 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37535 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37536 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37537 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37538 = cljs.core.first(arglist__38287);
arglist__38287 = cljs.core.next(arglist__38287);
var G__37539 = cljs.core.first(arglist__38287);
var G__37540 = cljs.core.rest(arglist__38287);
return sci$impl$fns$arity_14__delegate(G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565){
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

(invoc_array[vararg_idx] = G__37565);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,var_args){
var G__37565 = null;
if (arguments.length > 15) {
var G__38292__i = 0, G__38292__a = new Array(arguments.length -  15);
while (G__38292__i < G__38292__a.length) {G__38292__a[G__38292__i] = arguments[G__38292__i + 15]; ++G__38292__i;}
  G__37565 = new cljs.core.IndexedSeq(G__38292__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__38293){
var G__37550 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37551 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37552 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37553 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37554 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37555 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37556 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37557 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37558 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37559 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37560 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37561 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37562 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37563 = cljs.core.first(arglist__38293);
arglist__38293 = cljs.core.next(arglist__38293);
var G__37564 = cljs.core.first(arglist__38293);
var G__37565 = cljs.core.rest(arglist__38293);
return sci$impl$fns$arity_15__delegate(G__37550,G__37551,G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582){
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

(invoc_array[vararg_idx] = G__37582);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,var_args){
var G__37582 = null;
if (arguments.length > 16) {
var G__38295__i = 0, G__38295__a = new Array(arguments.length -  16);
while (G__38295__i < G__38295__a.length) {G__38295__a[G__38295__i] = arguments[G__38295__i + 16]; ++G__38295__i;}
  G__37582 = new cljs.core.IndexedSeq(G__38295__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__38296){
var G__37566 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37567 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37568 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37569 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37570 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37571 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37572 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37573 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37574 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37575 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37576 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37577 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37578 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37579 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37580 = cljs.core.first(arglist__38296);
arglist__38296 = cljs.core.next(arglist__38296);
var G__37581 = cljs.core.first(arglist__38296);
var G__37582 = cljs.core.rest(arglist__38296);
return sci$impl$fns$arity_16__delegate(G__37566,G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37590);

(invoc_array[(1)] = G__37591);

(invoc_array[(2)] = G__37592);

(invoc_array[(3)] = G__37593);

(invoc_array[(4)] = G__37594);

(invoc_array[(5)] = G__37595);

(invoc_array[(6)] = G__37596);

(invoc_array[(7)] = G__37597);

(invoc_array[(8)] = G__37598);

(invoc_array[(9)] = G__37599);

(invoc_array[(10)] = G__37600);

(invoc_array[(11)] = G__37601);

(invoc_array[(12)] = G__37602);

(invoc_array[(13)] = G__37603);

(invoc_array[(14)] = G__37604);

(invoc_array[(15)] = G__37605);

(invoc_array[(16)] = G__37606);

(invoc_array[vararg_idx] = G__37607);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,var_args){
var G__37607 = null;
if (arguments.length > 17) {
var G__38302__i = 0, G__38302__a = new Array(arguments.length -  17);
while (G__38302__i < G__38302__a.length) {G__38302__a[G__38302__i] = arguments[G__38302__i + 17]; ++G__38302__i;}
  G__37607 = new cljs.core.IndexedSeq(G__38302__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__38304){
var G__37590 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37591 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37592 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37593 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37594 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37595 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37596 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37597 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37598 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37599 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37600 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37601 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37602 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37603 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37604 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37605 = cljs.core.first(arglist__38304);
arglist__38304 = cljs.core.next(arglist__38304);
var G__37606 = cljs.core.first(arglist__38304);
var G__37607 = cljs.core.rest(arglist__38304);
return sci$impl$fns$arity_17__delegate(G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603,G__37604,G__37605,G__37606,G__37607);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37612);

(invoc_array[(1)] = G__37613);

(invoc_array[(2)] = G__37614);

(invoc_array[(3)] = G__37615);

(invoc_array[(4)] = G__37616);

(invoc_array[(5)] = G__37617);

(invoc_array[(6)] = G__37618);

(invoc_array[(7)] = G__37619);

(invoc_array[(8)] = G__37620);

(invoc_array[(9)] = G__37621);

(invoc_array[(10)] = G__37622);

(invoc_array[(11)] = G__37623);

(invoc_array[(12)] = G__37624);

(invoc_array[(13)] = G__37625);

(invoc_array[(14)] = G__37626);

(invoc_array[(15)] = G__37627);

(invoc_array[(16)] = G__37628);

(invoc_array[(17)] = G__37629);

(invoc_array[vararg_idx] = G__37630);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,var_args){
var G__37630 = null;
if (arguments.length > 18) {
var G__38307__i = 0, G__38307__a = new Array(arguments.length -  18);
while (G__38307__i < G__38307__a.length) {G__38307__a[G__38307__i] = arguments[G__38307__i + 18]; ++G__38307__i;}
  G__37630 = new cljs.core.IndexedSeq(G__38307__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__38308){
var G__37612 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37613 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37614 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37615 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37616 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37617 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37618 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37619 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37620 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37621 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37622 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37623 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37624 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37625 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37626 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37627 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37628 = cljs.core.first(arglist__38308);
arglist__38308 = cljs.core.next(arglist__38308);
var G__37629 = cljs.core.first(arglist__38308);
var G__37630 = cljs.core.rest(arglist__38308);
return sci$impl$fns$arity_18__delegate(G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626,G__37627,G__37628,G__37629,G__37630);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37632);

(invoc_array[(1)] = G__37633);

(invoc_array[(2)] = G__37634);

(invoc_array[(3)] = G__37635);

(invoc_array[(4)] = G__37636);

(invoc_array[(5)] = G__37637);

(invoc_array[(6)] = G__37638);

(invoc_array[(7)] = G__37639);

(invoc_array[(8)] = G__37640);

(invoc_array[(9)] = G__37641);

(invoc_array[(10)] = G__37642);

(invoc_array[(11)] = G__37643);

(invoc_array[(12)] = G__37644);

(invoc_array[(13)] = G__37645);

(invoc_array[(14)] = G__37646);

(invoc_array[(15)] = G__37647);

(invoc_array[(16)] = G__37648);

(invoc_array[(17)] = G__37649);

(invoc_array[(18)] = G__37650);

(invoc_array[vararg_idx] = G__37651);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,var_args){
var G__37651 = null;
if (arguments.length > 19) {
var G__38311__i = 0, G__38311__a = new Array(arguments.length -  19);
while (G__38311__i < G__38311__a.length) {G__38311__a[G__38311__i] = arguments[G__38311__i + 19]; ++G__38311__i;}
  G__37651 = new cljs.core.IndexedSeq(G__38311__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__38312){
var G__37632 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37633 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37634 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37635 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37636 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37637 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37638 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37639 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37640 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37641 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37642 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37643 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37644 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37645 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37646 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37647 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37648 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37649 = cljs.core.first(arglist__38312);
arglist__38312 = cljs.core.next(arglist__38312);
var G__37650 = cljs.core.first(arglist__38312);
var G__37651 = cljs.core.rest(arglist__38312);
return sci$impl$fns$arity_19__delegate(G__37632,G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37659);

(invoc_array[(1)] = G__37660);

(invoc_array[(2)] = G__37661);

(invoc_array[(3)] = G__37662);

(invoc_array[(4)] = G__37663);

(invoc_array[(5)] = G__37664);

(invoc_array[(6)] = G__37665);

(invoc_array[(7)] = G__37666);

(invoc_array[(8)] = G__37667);

(invoc_array[(9)] = G__37668);

(invoc_array[(10)] = G__37669);

(invoc_array[(11)] = G__37670);

(invoc_array[(12)] = G__37671);

(invoc_array[(13)] = G__37672);

(invoc_array[(14)] = G__37673);

(invoc_array[(15)] = G__37674);

(invoc_array[(16)] = G__37675);

(invoc_array[(17)] = G__37676);

(invoc_array[(18)] = G__37677);

(invoc_array[(19)] = G__37678);

(invoc_array[vararg_idx] = G__37679);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,var_args){
var G__37679 = null;
if (arguments.length > 20) {
var G__38317__i = 0, G__38317__a = new Array(arguments.length -  20);
while (G__38317__i < G__38317__a.length) {G__38317__a[G__38317__i] = arguments[G__38317__i + 20]; ++G__38317__i;}
  G__37679 = new cljs.core.IndexedSeq(G__38317__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__38319){
var G__37659 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37660 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37661 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37662 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37663 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37664 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37665 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37666 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37667 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37668 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37669 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37670 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37671 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37672 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37673 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37674 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37675 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37676 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37677 = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var G__37678 = cljs.core.first(arglist__38319);
var G__37679 = cljs.core.rest(arglist__38319);
return sci$impl$fns$arity_20__delegate(G__37659,G__37660,G__37661,G__37662,G__37663,G__37664,G__37665,G__37666,G__37667,G__37668,G__37669,G__37670,G__37671,G__37672,G__37673,G__37674,G__37675,G__37676,G__37677,G__37678,G__37679);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37390)].join('')));

}
})():(function (){var G__37681 = fixed_arity;
switch (G__37681) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36578__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36578__auto__)){
continue;
} else {
return ret__36578__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37693){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37693);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37694,G__37695){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37694);

(invoc_array[(1)] = G__37695);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37700,G__37701,G__37702){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37700);

(invoc_array[(1)] = G__37701);

(invoc_array[(2)] = G__37702);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37712,G__37713,G__37714,G__37715){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37712);

(invoc_array[(1)] = G__37713);

(invoc_array[(2)] = G__37714);

(invoc_array[(3)] = G__37715);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37721,G__37722,G__37723,G__37724,G__37725){
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

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37727,G__37728,G__37729,G__37730,G__37731,G__37732){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37727);

(invoc_array[(1)] = G__37728);

(invoc_array[(2)] = G__37729);

(invoc_array[(3)] = G__37730);

(invoc_array[(4)] = G__37731);

(invoc_array[(5)] = G__37732);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37740,G__37741,G__37742,G__37743,G__37744,G__37745,G__37746){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37740);

(invoc_array[(1)] = G__37741);

(invoc_array[(2)] = G__37742);

(invoc_array[(3)] = G__37743);

(invoc_array[(4)] = G__37744);

(invoc_array[(5)] = G__37745);

(invoc_array[(6)] = G__37746);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37759,G__37760,G__37761,G__37762,G__37763,G__37764,G__37765,G__37766){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37759);

(invoc_array[(1)] = G__37760);

(invoc_array[(2)] = G__37761);

(invoc_array[(3)] = G__37762);

(invoc_array[(4)] = G__37763);

(invoc_array[(5)] = G__37764);

(invoc_array[(6)] = G__37765);

(invoc_array[(7)] = G__37766);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37768,G__37769,G__37770,G__37771,G__37772,G__37773,G__37774,G__37775,G__37776){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37768);

(invoc_array[(1)] = G__37769);

(invoc_array[(2)] = G__37770);

(invoc_array[(3)] = G__37771);

(invoc_array[(4)] = G__37772);

(invoc_array[(5)] = G__37773);

(invoc_array[(6)] = G__37774);

(invoc_array[(7)] = G__37775);

(invoc_array[(8)] = G__37776);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37788,G__37789,G__37790,G__37791,G__37792,G__37793,G__37794,G__37795,G__37796,G__37797){
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

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37803,G__37804,G__37805,G__37806,G__37807,G__37808,G__37809,G__37810,G__37811,G__37812,G__37813){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37803);

(invoc_array[(1)] = G__37804);

(invoc_array[(2)] = G__37805);

(invoc_array[(3)] = G__37806);

(invoc_array[(4)] = G__37807);

(invoc_array[(5)] = G__37808);

(invoc_array[(6)] = G__37809);

(invoc_array[(7)] = G__37810);

(invoc_array[(8)] = G__37811);

(invoc_array[(9)] = G__37812);

(invoc_array[(10)] = G__37813);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37814,G__37815,G__37816,G__37817,G__37818,G__37819,G__37820,G__37821,G__37822,G__37823,G__37824,G__37825){
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

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37826,G__37827,G__37828,G__37829,G__37830,G__37831,G__37832,G__37833,G__37834,G__37835,G__37836,G__37837,G__37838){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37826);

(invoc_array[(1)] = G__37827);

(invoc_array[(2)] = G__37828);

(invoc_array[(3)] = G__37829);

(invoc_array[(4)] = G__37830);

(invoc_array[(5)] = G__37831);

(invoc_array[(6)] = G__37832);

(invoc_array[(7)] = G__37833);

(invoc_array[(8)] = G__37834);

(invoc_array[(9)] = G__37835);

(invoc_array[(10)] = G__37836);

(invoc_array[(11)] = G__37837);

(invoc_array[(12)] = G__37838);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37848,G__37849,G__37850,G__37851,G__37852,G__37853,G__37854,G__37855,G__37856,G__37857,G__37858,G__37859,G__37860,G__37861){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37848);

(invoc_array[(1)] = G__37849);

(invoc_array[(2)] = G__37850);

(invoc_array[(3)] = G__37851);

(invoc_array[(4)] = G__37852);

(invoc_array[(5)] = G__37853);

(invoc_array[(6)] = G__37854);

(invoc_array[(7)] = G__37855);

(invoc_array[(8)] = G__37856);

(invoc_array[(9)] = G__37857);

(invoc_array[(10)] = G__37858);

(invoc_array[(11)] = G__37859);

(invoc_array[(12)] = G__37860);

(invoc_array[(13)] = G__37861);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37868,G__37869,G__37870,G__37871,G__37872,G__37873,G__37874,G__37875,G__37876,G__37877,G__37878,G__37879,G__37880,G__37881,G__37882){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37868);

(invoc_array[(1)] = G__37869);

(invoc_array[(2)] = G__37870);

(invoc_array[(3)] = G__37871);

(invoc_array[(4)] = G__37872);

(invoc_array[(5)] = G__37873);

(invoc_array[(6)] = G__37874);

(invoc_array[(7)] = G__37875);

(invoc_array[(8)] = G__37876);

(invoc_array[(9)] = G__37877);

(invoc_array[(10)] = G__37878);

(invoc_array[(11)] = G__37879);

(invoc_array[(12)] = G__37880);

(invoc_array[(13)] = G__37881);

(invoc_array[(14)] = G__37882);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37883,G__37884,G__37885,G__37886,G__37887,G__37888,G__37889,G__37890,G__37891,G__37892,G__37893,G__37894,G__37895,G__37896,G__37897,G__37898){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37883);

(invoc_array[(1)] = G__37884);

(invoc_array[(2)] = G__37885);

(invoc_array[(3)] = G__37886);

(invoc_array[(4)] = G__37887);

(invoc_array[(5)] = G__37888);

(invoc_array[(6)] = G__37889);

(invoc_array[(7)] = G__37890);

(invoc_array[(8)] = G__37891);

(invoc_array[(9)] = G__37892);

(invoc_array[(10)] = G__37893);

(invoc_array[(11)] = G__37894);

(invoc_array[(12)] = G__37895);

(invoc_array[(13)] = G__37896);

(invoc_array[(14)] = G__37897);

(invoc_array[(15)] = G__37898);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37923,G__37924,G__37925,G__37926,G__37927,G__37928,G__37929,G__37930,G__37931,G__37932,G__37933,G__37934,G__37935,G__37936,G__37937,G__37938,G__37939){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37923);

(invoc_array[(1)] = G__37924);

(invoc_array[(2)] = G__37925);

(invoc_array[(3)] = G__37926);

(invoc_array[(4)] = G__37927);

(invoc_array[(5)] = G__37928);

(invoc_array[(6)] = G__37929);

(invoc_array[(7)] = G__37930);

(invoc_array[(8)] = G__37931);

(invoc_array[(9)] = G__37932);

(invoc_array[(10)] = G__37933);

(invoc_array[(11)] = G__37934);

(invoc_array[(12)] = G__37935);

(invoc_array[(13)] = G__37936);

(invoc_array[(14)] = G__37937);

(invoc_array[(15)] = G__37938);

(invoc_array[(16)] = G__37939);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37940,G__37941,G__37942,G__37943,G__37944,G__37945,G__37946,G__37947,G__37948,G__37949,G__37950,G__37951,G__37952,G__37953,G__37954,G__37955,G__37956,G__37957){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37940);

(invoc_array[(1)] = G__37941);

(invoc_array[(2)] = G__37942);

(invoc_array[(3)] = G__37943);

(invoc_array[(4)] = G__37944);

(invoc_array[(5)] = G__37945);

(invoc_array[(6)] = G__37946);

(invoc_array[(7)] = G__37947);

(invoc_array[(8)] = G__37948);

(invoc_array[(9)] = G__37949);

(invoc_array[(10)] = G__37950);

(invoc_array[(11)] = G__37951);

(invoc_array[(12)] = G__37952);

(invoc_array[(13)] = G__37953);

(invoc_array[(14)] = G__37954);

(invoc_array[(15)] = G__37955);

(invoc_array[(16)] = G__37956);

(invoc_array[(17)] = G__37957);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37971,G__37972,G__37973,G__37974,G__37975,G__37976,G__37977,G__37978,G__37979,G__37980,G__37981,G__37982,G__37983,G__37984,G__37985,G__37986,G__37987,G__37988,G__37989){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37971);

(invoc_array[(1)] = G__37972);

(invoc_array[(2)] = G__37973);

(invoc_array[(3)] = G__37974);

(invoc_array[(4)] = G__37975);

(invoc_array[(5)] = G__37976);

(invoc_array[(6)] = G__37977);

(invoc_array[(7)] = G__37978);

(invoc_array[(8)] = G__37979);

(invoc_array[(9)] = G__37980);

(invoc_array[(10)] = G__37981);

(invoc_array[(11)] = G__37982);

(invoc_array[(12)] = G__37983);

(invoc_array[(13)] = G__37984);

(invoc_array[(14)] = G__37985);

(invoc_array[(15)] = G__37986);

(invoc_array[(16)] = G__37987);

(invoc_array[(17)] = G__37988);

(invoc_array[(18)] = G__37989);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37994,G__37995,G__37996,G__37997,G__37998,G__37999,G__38000,G__38001,G__38002,G__38003,G__38004,G__38005,G__38006,G__38007,G__38008,G__38009,G__38010,G__38011,G__38012,G__38013){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37994);

(invoc_array[(1)] = G__37995);

(invoc_array[(2)] = G__37996);

(invoc_array[(3)] = G__37997);

(invoc_array[(4)] = G__37998);

(invoc_array[(5)] = G__37999);

(invoc_array[(6)] = G__38000);

(invoc_array[(7)] = G__38001);

(invoc_array[(8)] = G__38002);

(invoc_array[(9)] = G__38003);

(invoc_array[(10)] = G__38004);

(invoc_array[(11)] = G__38005);

(invoc_array[(12)] = G__38006);

(invoc_array[(13)] = G__38007);

(invoc_array[(14)] = G__38008);

(invoc_array[(15)] = G__38009);

(invoc_array[(16)] = G__38010);

(invoc_array[(17)] = G__38011);

(invoc_array[(18)] = G__38012);

(invoc_array[(19)] = G__38013);

while(true){
var ret__36583__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36583__auto__)){
continue;
} else {
return ret__36583__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37681)].join('')));

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
var G__38378 = cljs.core.next(params__$1);
var G__38379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__38380 = lets;
params__$1 = G__38378;
new_params = G__38379;
lets = G__38380;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__38381 = cljs.core.next(params__$1);
var G__38382 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__38383 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__38381;
new_params = G__38382;
lets = G__38383;
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
var len__5749__auto___38389 = arguments.length;
var i__5750__auto___38390 = (0);
while(true){
if((i__5750__auto___38390 < len__5749__auto___38389)){
args__5755__auto__.push((arguments[i__5750__auto___38390]));

var G__38393 = (i__5750__auto___38390 + (1));
i__5750__auto___38390 = G__38393;
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

var vec__38061 = sig;
var seq__38062 = cljs.core.seq(vec__38061);
var first__38063 = cljs.core.first(seq__38062);
var seq__38062__$1 = cljs.core.next(seq__38062);
var params = first__38063;
var body = seq__38062__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq38040){
var G__38042 = cljs.core.first(seq38040);
var seq38040__$1 = cljs.core.next(seq38040);
var G__38043 = cljs.core.first(seq38040__$1);
var seq38040__$2 = cljs.core.next(seq38040__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38042,G__38043,seq38040__$2);
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
var G__38407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__38408 = cljs.core.next(fdecls);
ret = G__38407;
fdecls = G__38408;
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
var len__5749__auto___38412 = arguments.length;
var i__5750__auto___38413 = (0);
while(true){
if((i__5750__auto___38413 < len__5749__auto___38412)){
args__5755__auto__.push((arguments[i__5750__auto___38413]));

var G__38414 = (i__5750__auto___38413 + (1));
i__5750__auto___38413 = G__38414;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq38092){
var G__38093 = cljs.core.first(seq38092);
var seq38092__$1 = cljs.core.next(seq38092);
var G__38094 = cljs.core.first(seq38092__$1);
var seq38092__$2 = cljs.core.next(seq38092__$1);
var G__38095 = cljs.core.first(seq38092__$2);
var seq38092__$3 = cljs.core.next(seq38092__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38093,G__38094,G__38095,seq38092__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38429 = arguments.length;
var i__5750__auto___38430 = (0);
while(true){
if((i__5750__auto___38430 < len__5749__auto___38429)){
args__5755__auto__.push((arguments[i__5750__auto___38430]));

var G__38435 = (i__5750__auto___38430 + (1));
i__5750__auto___38430 = G__38435;
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
var G__38439 = cljs.core.cons(f,p);
var G__38440 = cljs.core.next(args__$1);
p = G__38439;
args__$1 = G__38440;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__38442 = cljs.core.cons(f,p);
var G__38443 = cljs.core.next(args__$1);
p = G__38442;
args__$1 = G__38443;
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
var G__38444 = cljs.core.next(fd);
fd = G__38444;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__38446 = cljs.core.next(fd);
fd = G__38446;
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
var G__38449 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__38450 = cljs.core.next(ds);
acc = G__38449;
ds = G__38450;
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
var G__38454 = cljs.core.next(p);
var G__38455 = cljs.core.cons(cljs.core.first(p),d);
p = G__38454;
d = G__38455;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq38135){
var G__38136 = cljs.core.first(seq38135);
var seq38135__$1 = cljs.core.next(seq38135);
var G__38137 = cljs.core.first(seq38135__$1);
var seq38135__$2 = cljs.core.next(seq38135__$1);
var G__38138 = cljs.core.first(seq38135__$2);
var seq38135__$3 = cljs.core.next(seq38135__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38136,G__38137,G__38138,seq38135__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
