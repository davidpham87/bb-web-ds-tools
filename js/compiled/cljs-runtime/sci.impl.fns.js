goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__32404 = arguments.length;
switch (G__32404) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__32405 = fixed_arity;
switch (G__32405) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__32406){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__32406);

while(true){
var ret__31581__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31581__auto__)){
continue;
} else {
return ret__31581__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__32406 = null;
if (arguments.length > 0) {
var G__33159__i = 0, G__33159__a = new Array(arguments.length -  0);
while (G__33159__i < G__33159__a.length) {G__33159__a[G__33159__i] = arguments[G__33159__i + 0]; ++G__33159__i;}
  G__32406 = new cljs.core.IndexedSeq(G__33159__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__32406);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__33160){
var G__32406 = cljs.core.seq(arglist__33160);
return sci$impl$fns$arity_0__delegate(G__32406);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__32407,G__32408){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32407);

(invoc_array[vararg_idx] = G__32408);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__32407,var_args){
var G__32408 = null;
if (arguments.length > 1) {
var G__33161__i = 0, G__33161__a = new Array(arguments.length -  1);
while (G__33161__i < G__33161__a.length) {G__33161__a[G__33161__i] = arguments[G__33161__i + 1]; ++G__33161__i;}
  G__32408 = new cljs.core.IndexedSeq(G__33161__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__32407,G__32408);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__33162){
var G__32407 = cljs.core.first(arglist__33162);
var G__32408 = cljs.core.rest(arglist__33162);
return sci$impl$fns$arity_1__delegate(G__32407,G__32408);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__32409,G__32410,G__32411){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32409);

(invoc_array[(1)] = G__32410);

(invoc_array[vararg_idx] = G__32411);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__32409,G__32410,var_args){
var G__32411 = null;
if (arguments.length > 2) {
var G__33163__i = 0, G__33163__a = new Array(arguments.length -  2);
while (G__33163__i < G__33163__a.length) {G__33163__a[G__33163__i] = arguments[G__33163__i + 2]; ++G__33163__i;}
  G__32411 = new cljs.core.IndexedSeq(G__33163__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__32409,G__32410,G__32411);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__33164){
var G__32409 = cljs.core.first(arglist__33164);
arglist__33164 = cljs.core.next(arglist__33164);
var G__32410 = cljs.core.first(arglist__33164);
var G__32411 = cljs.core.rest(arglist__33164);
return sci$impl$fns$arity_2__delegate(G__32409,G__32410,G__32411);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__32412,G__32413,G__32414,G__32415){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32412);

(invoc_array[(1)] = G__32413);

(invoc_array[(2)] = G__32414);

(invoc_array[vararg_idx] = G__32415);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__32412,G__32413,G__32414,var_args){
var G__32415 = null;
if (arguments.length > 3) {
var G__33165__i = 0, G__33165__a = new Array(arguments.length -  3);
while (G__33165__i < G__33165__a.length) {G__33165__a[G__33165__i] = arguments[G__33165__i + 3]; ++G__33165__i;}
  G__32415 = new cljs.core.IndexedSeq(G__33165__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__32412,G__32413,G__32414,G__32415);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__33166){
var G__32412 = cljs.core.first(arglist__33166);
arglist__33166 = cljs.core.next(arglist__33166);
var G__32413 = cljs.core.first(arglist__33166);
arglist__33166 = cljs.core.next(arglist__33166);
var G__32414 = cljs.core.first(arglist__33166);
var G__32415 = cljs.core.rest(arglist__33166);
return sci$impl$fns$arity_3__delegate(G__32412,G__32413,G__32414,G__32415);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__32416,G__32417,G__32418,G__32419,G__32420){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32416);

(invoc_array[(1)] = G__32417);

(invoc_array[(2)] = G__32418);

(invoc_array[(3)] = G__32419);

(invoc_array[vararg_idx] = G__32420);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__32416,G__32417,G__32418,G__32419,var_args){
var G__32420 = null;
if (arguments.length > 4) {
var G__33167__i = 0, G__33167__a = new Array(arguments.length -  4);
while (G__33167__i < G__33167__a.length) {G__33167__a[G__33167__i] = arguments[G__33167__i + 4]; ++G__33167__i;}
  G__32420 = new cljs.core.IndexedSeq(G__33167__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__32416,G__32417,G__32418,G__32419,G__32420);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__33168){
var G__32416 = cljs.core.first(arglist__33168);
arglist__33168 = cljs.core.next(arglist__33168);
var G__32417 = cljs.core.first(arglist__33168);
arglist__33168 = cljs.core.next(arglist__33168);
var G__32418 = cljs.core.first(arglist__33168);
arglist__33168 = cljs.core.next(arglist__33168);
var G__32419 = cljs.core.first(arglist__33168);
var G__32420 = cljs.core.rest(arglist__33168);
return sci$impl$fns$arity_4__delegate(G__32416,G__32417,G__32418,G__32419,G__32420);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__32421,G__32422,G__32423,G__32424,G__32425,G__32426){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32421);

(invoc_array[(1)] = G__32422);

(invoc_array[(2)] = G__32423);

(invoc_array[(3)] = G__32424);

(invoc_array[(4)] = G__32425);

(invoc_array[vararg_idx] = G__32426);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__32421,G__32422,G__32423,G__32424,G__32425,var_args){
var G__32426 = null;
if (arguments.length > 5) {
var G__33169__i = 0, G__33169__a = new Array(arguments.length -  5);
while (G__33169__i < G__33169__a.length) {G__33169__a[G__33169__i] = arguments[G__33169__i + 5]; ++G__33169__i;}
  G__32426 = new cljs.core.IndexedSeq(G__33169__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__32421,G__32422,G__32423,G__32424,G__32425,G__32426);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__33171){
var G__32421 = cljs.core.first(arglist__33171);
arglist__33171 = cljs.core.next(arglist__33171);
var G__32422 = cljs.core.first(arglist__33171);
arglist__33171 = cljs.core.next(arglist__33171);
var G__32423 = cljs.core.first(arglist__33171);
arglist__33171 = cljs.core.next(arglist__33171);
var G__32424 = cljs.core.first(arglist__33171);
arglist__33171 = cljs.core.next(arglist__33171);
var G__32425 = cljs.core.first(arglist__33171);
var G__32426 = cljs.core.rest(arglist__33171);
return sci$impl$fns$arity_5__delegate(G__32421,G__32422,G__32423,G__32424,G__32425,G__32426);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__32427,G__32428,G__32429,G__32430,G__32431,G__32432,G__32433){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32427);

(invoc_array[(1)] = G__32428);

(invoc_array[(2)] = G__32429);

(invoc_array[(3)] = G__32430);

(invoc_array[(4)] = G__32431);

(invoc_array[(5)] = G__32432);

(invoc_array[vararg_idx] = G__32433);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__32427,G__32428,G__32429,G__32430,G__32431,G__32432,var_args){
var G__32433 = null;
if (arguments.length > 6) {
var G__33174__i = 0, G__33174__a = new Array(arguments.length -  6);
while (G__33174__i < G__33174__a.length) {G__33174__a[G__33174__i] = arguments[G__33174__i + 6]; ++G__33174__i;}
  G__32433 = new cljs.core.IndexedSeq(G__33174__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__32427,G__32428,G__32429,G__32430,G__32431,G__32432,G__32433);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__33175){
var G__32427 = cljs.core.first(arglist__33175);
arglist__33175 = cljs.core.next(arglist__33175);
var G__32428 = cljs.core.first(arglist__33175);
arglist__33175 = cljs.core.next(arglist__33175);
var G__32429 = cljs.core.first(arglist__33175);
arglist__33175 = cljs.core.next(arglist__33175);
var G__32430 = cljs.core.first(arglist__33175);
arglist__33175 = cljs.core.next(arglist__33175);
var G__32431 = cljs.core.first(arglist__33175);
arglist__33175 = cljs.core.next(arglist__33175);
var G__32432 = cljs.core.first(arglist__33175);
var G__32433 = cljs.core.rest(arglist__33175);
return sci$impl$fns$arity_6__delegate(G__32427,G__32428,G__32429,G__32430,G__32431,G__32432,G__32433);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__32434,G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,G__32441){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32434);

(invoc_array[(1)] = G__32435);

(invoc_array[(2)] = G__32436);

(invoc_array[(3)] = G__32437);

(invoc_array[(4)] = G__32438);

(invoc_array[(5)] = G__32439);

(invoc_array[(6)] = G__32440);

(invoc_array[vararg_idx] = G__32441);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__32434,G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,var_args){
var G__32441 = null;
if (arguments.length > 7) {
var G__33178__i = 0, G__33178__a = new Array(arguments.length -  7);
while (G__33178__i < G__33178__a.length) {G__33178__a[G__33178__i] = arguments[G__33178__i + 7]; ++G__33178__i;}
  G__32441 = new cljs.core.IndexedSeq(G__33178__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__32434,G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,G__32441);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__33179){
var G__32434 = cljs.core.first(arglist__33179);
arglist__33179 = cljs.core.next(arglist__33179);
var G__32435 = cljs.core.first(arglist__33179);
arglist__33179 = cljs.core.next(arglist__33179);
var G__32436 = cljs.core.first(arglist__33179);
arglist__33179 = cljs.core.next(arglist__33179);
var G__32437 = cljs.core.first(arglist__33179);
arglist__33179 = cljs.core.next(arglist__33179);
var G__32438 = cljs.core.first(arglist__33179);
arglist__33179 = cljs.core.next(arglist__33179);
var G__32439 = cljs.core.first(arglist__33179);
arglist__33179 = cljs.core.next(arglist__33179);
var G__32440 = cljs.core.first(arglist__33179);
var G__32441 = cljs.core.rest(arglist__33179);
return sci$impl$fns$arity_7__delegate(G__32434,G__32435,G__32436,G__32437,G__32438,G__32439,G__32440,G__32441);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__32442,G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32442);

(invoc_array[(1)] = G__32443);

(invoc_array[(2)] = G__32444);

(invoc_array[(3)] = G__32445);

(invoc_array[(4)] = G__32446);

(invoc_array[(5)] = G__32447);

(invoc_array[(6)] = G__32448);

(invoc_array[(7)] = G__32449);

(invoc_array[vararg_idx] = G__32450);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__32442,G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,var_args){
var G__32450 = null;
if (arguments.length > 8) {
var G__33183__i = 0, G__33183__a = new Array(arguments.length -  8);
while (G__33183__i < G__33183__a.length) {G__33183__a[G__33183__i] = arguments[G__33183__i + 8]; ++G__33183__i;}
  G__32450 = new cljs.core.IndexedSeq(G__33183__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__32442,G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__33184){
var G__32442 = cljs.core.first(arglist__33184);
arglist__33184 = cljs.core.next(arglist__33184);
var G__32443 = cljs.core.first(arglist__33184);
arglist__33184 = cljs.core.next(arglist__33184);
var G__32444 = cljs.core.first(arglist__33184);
arglist__33184 = cljs.core.next(arglist__33184);
var G__32445 = cljs.core.first(arglist__33184);
arglist__33184 = cljs.core.next(arglist__33184);
var G__32446 = cljs.core.first(arglist__33184);
arglist__33184 = cljs.core.next(arglist__33184);
var G__32447 = cljs.core.first(arglist__33184);
arglist__33184 = cljs.core.next(arglist__33184);
var G__32448 = cljs.core.first(arglist__33184);
arglist__33184 = cljs.core.next(arglist__33184);
var G__32449 = cljs.core.first(arglist__33184);
var G__32450 = cljs.core.rest(arglist__33184);
return sci$impl$fns$arity_8__delegate(G__32442,G__32443,G__32444,G__32445,G__32446,G__32447,G__32448,G__32449,G__32450);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__32451,G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32451);

(invoc_array[(1)] = G__32452);

(invoc_array[(2)] = G__32453);

(invoc_array[(3)] = G__32454);

(invoc_array[(4)] = G__32455);

(invoc_array[(5)] = G__32456);

(invoc_array[(6)] = G__32457);

(invoc_array[(7)] = G__32458);

(invoc_array[(8)] = G__32459);

(invoc_array[vararg_idx] = G__32460);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__32451,G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,var_args){
var G__32460 = null;
if (arguments.length > 9) {
var G__33185__i = 0, G__33185__a = new Array(arguments.length -  9);
while (G__33185__i < G__33185__a.length) {G__33185__a[G__33185__i] = arguments[G__33185__i + 9]; ++G__33185__i;}
  G__32460 = new cljs.core.IndexedSeq(G__33185__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__32451,G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__33186){
var G__32451 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32452 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32453 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32454 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32455 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32456 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32457 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32458 = cljs.core.first(arglist__33186);
arglist__33186 = cljs.core.next(arglist__33186);
var G__32459 = cljs.core.first(arglist__33186);
var G__32460 = cljs.core.rest(arglist__33186);
return sci$impl$fns$arity_9__delegate(G__32451,G__32452,G__32453,G__32454,G__32455,G__32456,G__32457,G__32458,G__32459,G__32460);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472,G__32473,G__32474,G__32475){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32465);

(invoc_array[(1)] = G__32466);

(invoc_array[(2)] = G__32467);

(invoc_array[(3)] = G__32468);

(invoc_array[(4)] = G__32469);

(invoc_array[(5)] = G__32470);

(invoc_array[(6)] = G__32471);

(invoc_array[(7)] = G__32472);

(invoc_array[(8)] = G__32473);

(invoc_array[(9)] = G__32474);

(invoc_array[vararg_idx] = G__32475);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472,G__32473,G__32474,var_args){
var G__32475 = null;
if (arguments.length > 10) {
var G__33187__i = 0, G__33187__a = new Array(arguments.length -  10);
while (G__33187__i < G__33187__a.length) {G__33187__a[G__33187__i] = arguments[G__33187__i + 10]; ++G__33187__i;}
  G__32475 = new cljs.core.IndexedSeq(G__33187__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472,G__32473,G__32474,G__32475);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__33189){
var G__32465 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32466 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32467 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32468 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32469 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32470 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32471 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32472 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32473 = cljs.core.first(arglist__33189);
arglist__33189 = cljs.core.next(arglist__33189);
var G__32474 = cljs.core.first(arglist__33189);
var G__32475 = cljs.core.rest(arglist__33189);
return sci$impl$fns$arity_10__delegate(G__32465,G__32466,G__32467,G__32468,G__32469,G__32470,G__32471,G__32472,G__32473,G__32474,G__32475);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,G__32484,G__32485,G__32486,G__32487){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32476);

(invoc_array[(1)] = G__32477);

(invoc_array[(2)] = G__32478);

(invoc_array[(3)] = G__32479);

(invoc_array[(4)] = G__32480);

(invoc_array[(5)] = G__32481);

(invoc_array[(6)] = G__32482);

(invoc_array[(7)] = G__32483);

(invoc_array[(8)] = G__32484);

(invoc_array[(9)] = G__32485);

(invoc_array[(10)] = G__32486);

(invoc_array[vararg_idx] = G__32487);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,G__32484,G__32485,G__32486,var_args){
var G__32487 = null;
if (arguments.length > 11) {
var G__33192__i = 0, G__33192__a = new Array(arguments.length -  11);
while (G__33192__i < G__33192__a.length) {G__33192__a[G__33192__i] = arguments[G__33192__i + 11]; ++G__33192__i;}
  G__32487 = new cljs.core.IndexedSeq(G__33192__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,G__32484,G__32485,G__32486,G__32487);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__33196){
var G__32476 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32477 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32478 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32479 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32480 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32481 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32482 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32483 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32484 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32485 = cljs.core.first(arglist__33196);
arglist__33196 = cljs.core.next(arglist__33196);
var G__32486 = cljs.core.first(arglist__33196);
var G__32487 = cljs.core.rest(arglist__33196);
return sci$impl$fns$arity_11__delegate(G__32476,G__32477,G__32478,G__32479,G__32480,G__32481,G__32482,G__32483,G__32484,G__32485,G__32486,G__32487);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__32488,G__32489,G__32490,G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,G__32500){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32488);

(invoc_array[(1)] = G__32489);

(invoc_array[(2)] = G__32490);

(invoc_array[(3)] = G__32491);

(invoc_array[(4)] = G__32492);

(invoc_array[(5)] = G__32493);

(invoc_array[(6)] = G__32494);

(invoc_array[(7)] = G__32495);

(invoc_array[(8)] = G__32496);

(invoc_array[(9)] = G__32497);

(invoc_array[(10)] = G__32498);

(invoc_array[(11)] = G__32499);

(invoc_array[vararg_idx] = G__32500);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__32488,G__32489,G__32490,G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,var_args){
var G__32500 = null;
if (arguments.length > 12) {
var G__33204__i = 0, G__33204__a = new Array(arguments.length -  12);
while (G__33204__i < G__33204__a.length) {G__33204__a[G__33204__i] = arguments[G__33204__i + 12]; ++G__33204__i;}
  G__32500 = new cljs.core.IndexedSeq(G__33204__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__32488,G__32489,G__32490,G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,G__32500);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__33205){
var G__32488 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32489 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32490 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32491 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32492 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32493 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32494 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32495 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32496 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32497 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32498 = cljs.core.first(arglist__33205);
arglist__33205 = cljs.core.next(arglist__33205);
var G__32499 = cljs.core.first(arglist__33205);
var G__32500 = cljs.core.rest(arglist__33205);
return sci$impl$fns$arity_12__delegate(G__32488,G__32489,G__32490,G__32491,G__32492,G__32493,G__32494,G__32495,G__32496,G__32497,G__32498,G__32499,G__32500);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__32505,G__32506,G__32507,G__32508,G__32509,G__32510,G__32511,G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,G__32518){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32505);

(invoc_array[(1)] = G__32506);

(invoc_array[(2)] = G__32507);

(invoc_array[(3)] = G__32508);

(invoc_array[(4)] = G__32509);

(invoc_array[(5)] = G__32510);

(invoc_array[(6)] = G__32511);

(invoc_array[(7)] = G__32512);

(invoc_array[(8)] = G__32513);

(invoc_array[(9)] = G__32514);

(invoc_array[(10)] = G__32515);

(invoc_array[(11)] = G__32516);

(invoc_array[(12)] = G__32517);

(invoc_array[vararg_idx] = G__32518);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__32505,G__32506,G__32507,G__32508,G__32509,G__32510,G__32511,G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,var_args){
var G__32518 = null;
if (arguments.length > 13) {
var G__33208__i = 0, G__33208__a = new Array(arguments.length -  13);
while (G__33208__i < G__33208__a.length) {G__33208__a[G__33208__i] = arguments[G__33208__i + 13]; ++G__33208__i;}
  G__32518 = new cljs.core.IndexedSeq(G__33208__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__32505,G__32506,G__32507,G__32508,G__32509,G__32510,G__32511,G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,G__32518);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__33209){
var G__32505 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32506 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32507 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32508 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32509 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32510 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32511 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32512 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32513 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32514 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32515 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32516 = cljs.core.first(arglist__33209);
arglist__33209 = cljs.core.next(arglist__33209);
var G__32517 = cljs.core.first(arglist__33209);
var G__32518 = cljs.core.rest(arglist__33209);
return sci$impl$fns$arity_13__delegate(G__32505,G__32506,G__32507,G__32508,G__32509,G__32510,G__32511,G__32512,G__32513,G__32514,G__32515,G__32516,G__32517,G__32518);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,G__32525,G__32526,G__32527,G__32528,G__32529,G__32530,G__32531,G__32532,G__32533){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32519);

(invoc_array[(1)] = G__32520);

(invoc_array[(2)] = G__32521);

(invoc_array[(3)] = G__32522);

(invoc_array[(4)] = G__32523);

(invoc_array[(5)] = G__32524);

(invoc_array[(6)] = G__32525);

(invoc_array[(7)] = G__32526);

(invoc_array[(8)] = G__32527);

(invoc_array[(9)] = G__32528);

(invoc_array[(10)] = G__32529);

(invoc_array[(11)] = G__32530);

(invoc_array[(12)] = G__32531);

(invoc_array[(13)] = G__32532);

(invoc_array[vararg_idx] = G__32533);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,G__32525,G__32526,G__32527,G__32528,G__32529,G__32530,G__32531,G__32532,var_args){
var G__32533 = null;
if (arguments.length > 14) {
var G__33210__i = 0, G__33210__a = new Array(arguments.length -  14);
while (G__33210__i < G__33210__a.length) {G__33210__a[G__33210__i] = arguments[G__33210__i + 14]; ++G__33210__i;}
  G__32533 = new cljs.core.IndexedSeq(G__33210__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,G__32525,G__32526,G__32527,G__32528,G__32529,G__32530,G__32531,G__32532,G__32533);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__33211){
var G__32519 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32520 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32521 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32522 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32523 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32524 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32525 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32526 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32527 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32528 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32529 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32530 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32531 = cljs.core.first(arglist__33211);
arglist__33211 = cljs.core.next(arglist__33211);
var G__32532 = cljs.core.first(arglist__33211);
var G__32533 = cljs.core.rest(arglist__33211);
return sci$impl$fns$arity_14__delegate(G__32519,G__32520,G__32521,G__32522,G__32523,G__32524,G__32525,G__32526,G__32527,G__32528,G__32529,G__32530,G__32531,G__32532,G__32533);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__32534,G__32535,G__32536,G__32537,G__32538,G__32539,G__32540,G__32541,G__32542,G__32543,G__32544,G__32545,G__32546,G__32547,G__32548,G__32549){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32534);

(invoc_array[(1)] = G__32535);

(invoc_array[(2)] = G__32536);

(invoc_array[(3)] = G__32537);

(invoc_array[(4)] = G__32538);

(invoc_array[(5)] = G__32539);

(invoc_array[(6)] = G__32540);

(invoc_array[(7)] = G__32541);

(invoc_array[(8)] = G__32542);

(invoc_array[(9)] = G__32543);

(invoc_array[(10)] = G__32544);

(invoc_array[(11)] = G__32545);

(invoc_array[(12)] = G__32546);

(invoc_array[(13)] = G__32547);

(invoc_array[(14)] = G__32548);

(invoc_array[vararg_idx] = G__32549);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__32534,G__32535,G__32536,G__32537,G__32538,G__32539,G__32540,G__32541,G__32542,G__32543,G__32544,G__32545,G__32546,G__32547,G__32548,var_args){
var G__32549 = null;
if (arguments.length > 15) {
var G__33212__i = 0, G__33212__a = new Array(arguments.length -  15);
while (G__33212__i < G__33212__a.length) {G__33212__a[G__33212__i] = arguments[G__33212__i + 15]; ++G__33212__i;}
  G__32549 = new cljs.core.IndexedSeq(G__33212__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__32534,G__32535,G__32536,G__32537,G__32538,G__32539,G__32540,G__32541,G__32542,G__32543,G__32544,G__32545,G__32546,G__32547,G__32548,G__32549);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__33216){
var G__32534 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32535 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32536 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32537 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32538 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32539 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32540 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32541 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32542 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32543 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32544 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32545 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32546 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32547 = cljs.core.first(arglist__33216);
arglist__33216 = cljs.core.next(arglist__33216);
var G__32548 = cljs.core.first(arglist__33216);
var G__32549 = cljs.core.rest(arglist__33216);
return sci$impl$fns$arity_15__delegate(G__32534,G__32535,G__32536,G__32537,G__32538,G__32539,G__32540,G__32541,G__32542,G__32543,G__32544,G__32545,G__32546,G__32547,G__32548,G__32549);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,G__32558,G__32559,G__32560,G__32561,G__32562,G__32563,G__32564,G__32565,G__32566){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32550);

(invoc_array[(1)] = G__32551);

(invoc_array[(2)] = G__32552);

(invoc_array[(3)] = G__32553);

(invoc_array[(4)] = G__32554);

(invoc_array[(5)] = G__32555);

(invoc_array[(6)] = G__32556);

(invoc_array[(7)] = G__32557);

(invoc_array[(8)] = G__32558);

(invoc_array[(9)] = G__32559);

(invoc_array[(10)] = G__32560);

(invoc_array[(11)] = G__32561);

(invoc_array[(12)] = G__32562);

(invoc_array[(13)] = G__32563);

(invoc_array[(14)] = G__32564);

(invoc_array[(15)] = G__32565);

(invoc_array[vararg_idx] = G__32566);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,G__32558,G__32559,G__32560,G__32561,G__32562,G__32563,G__32564,G__32565,var_args){
var G__32566 = null;
if (arguments.length > 16) {
var G__33222__i = 0, G__33222__a = new Array(arguments.length -  16);
while (G__33222__i < G__33222__a.length) {G__33222__a[G__33222__i] = arguments[G__33222__i + 16]; ++G__33222__i;}
  G__32566 = new cljs.core.IndexedSeq(G__33222__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,G__32558,G__32559,G__32560,G__32561,G__32562,G__32563,G__32564,G__32565,G__32566);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__33225){
var G__32550 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32551 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32552 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32553 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32554 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32555 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32556 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32557 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32558 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32559 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32560 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32561 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32562 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32563 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32564 = cljs.core.first(arglist__33225);
arglist__33225 = cljs.core.next(arglist__33225);
var G__32565 = cljs.core.first(arglist__33225);
var G__32566 = cljs.core.rest(arglist__33225);
return sci$impl$fns$arity_16__delegate(G__32550,G__32551,G__32552,G__32553,G__32554,G__32555,G__32556,G__32557,G__32558,G__32559,G__32560,G__32561,G__32562,G__32563,G__32564,G__32565,G__32566);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__32572,G__32573,G__32574,G__32575,G__32576,G__32577,G__32578,G__32579,G__32580,G__32581,G__32582,G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,G__32589){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32572);

(invoc_array[(1)] = G__32573);

(invoc_array[(2)] = G__32574);

(invoc_array[(3)] = G__32575);

(invoc_array[(4)] = G__32576);

(invoc_array[(5)] = G__32577);

(invoc_array[(6)] = G__32578);

(invoc_array[(7)] = G__32579);

(invoc_array[(8)] = G__32580);

(invoc_array[(9)] = G__32581);

(invoc_array[(10)] = G__32582);

(invoc_array[(11)] = G__32583);

(invoc_array[(12)] = G__32584);

(invoc_array[(13)] = G__32585);

(invoc_array[(14)] = G__32586);

(invoc_array[(15)] = G__32587);

(invoc_array[(16)] = G__32588);

(invoc_array[vararg_idx] = G__32589);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__32572,G__32573,G__32574,G__32575,G__32576,G__32577,G__32578,G__32579,G__32580,G__32581,G__32582,G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,var_args){
var G__32589 = null;
if (arguments.length > 17) {
var G__33229__i = 0, G__33229__a = new Array(arguments.length -  17);
while (G__33229__i < G__33229__a.length) {G__33229__a[G__33229__i] = arguments[G__33229__i + 17]; ++G__33229__i;}
  G__32589 = new cljs.core.IndexedSeq(G__33229__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__32572,G__32573,G__32574,G__32575,G__32576,G__32577,G__32578,G__32579,G__32580,G__32581,G__32582,G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,G__32589);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__33230){
var G__32572 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32573 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32574 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32575 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32576 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32577 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32578 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32579 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32580 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32581 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32582 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32583 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32584 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32585 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32586 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32587 = cljs.core.first(arglist__33230);
arglist__33230 = cljs.core.next(arglist__33230);
var G__32588 = cljs.core.first(arglist__33230);
var G__32589 = cljs.core.rest(arglist__33230);
return sci$impl$fns$arity_17__delegate(G__32572,G__32573,G__32574,G__32575,G__32576,G__32577,G__32578,G__32579,G__32580,G__32581,G__32582,G__32583,G__32584,G__32585,G__32586,G__32587,G__32588,G__32589);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599,G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,G__32608){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32590);

(invoc_array[(1)] = G__32591);

(invoc_array[(2)] = G__32592);

(invoc_array[(3)] = G__32593);

(invoc_array[(4)] = G__32594);

(invoc_array[(5)] = G__32595);

(invoc_array[(6)] = G__32596);

(invoc_array[(7)] = G__32597);

(invoc_array[(8)] = G__32598);

(invoc_array[(9)] = G__32599);

(invoc_array[(10)] = G__32600);

(invoc_array[(11)] = G__32601);

(invoc_array[(12)] = G__32602);

(invoc_array[(13)] = G__32603);

(invoc_array[(14)] = G__32604);

(invoc_array[(15)] = G__32605);

(invoc_array[(16)] = G__32606);

(invoc_array[(17)] = G__32607);

(invoc_array[vararg_idx] = G__32608);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599,G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,var_args){
var G__32608 = null;
if (arguments.length > 18) {
var G__33231__i = 0, G__33231__a = new Array(arguments.length -  18);
while (G__33231__i < G__33231__a.length) {G__33231__a[G__33231__i] = arguments[G__33231__i + 18]; ++G__33231__i;}
  G__32608 = new cljs.core.IndexedSeq(G__33231__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599,G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,G__32608);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__33232){
var G__32590 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32591 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32592 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32593 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32594 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32595 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32596 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32597 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32598 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32599 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32600 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32601 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32602 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32603 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32604 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32605 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32606 = cljs.core.first(arglist__33232);
arglist__33232 = cljs.core.next(arglist__33232);
var G__32607 = cljs.core.first(arglist__33232);
var G__32608 = cljs.core.rest(arglist__33232);
return sci$impl$fns$arity_18__delegate(G__32590,G__32591,G__32592,G__32593,G__32594,G__32595,G__32596,G__32597,G__32598,G__32599,G__32600,G__32601,G__32602,G__32603,G__32604,G__32605,G__32606,G__32607,G__32608);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__32613,G__32614,G__32615,G__32616,G__32617,G__32618,G__32619,G__32620,G__32621,G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,G__32629,G__32630,G__32631,G__32632){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32613);

(invoc_array[(1)] = G__32614);

(invoc_array[(2)] = G__32615);

(invoc_array[(3)] = G__32616);

(invoc_array[(4)] = G__32617);

(invoc_array[(5)] = G__32618);

(invoc_array[(6)] = G__32619);

(invoc_array[(7)] = G__32620);

(invoc_array[(8)] = G__32621);

(invoc_array[(9)] = G__32622);

(invoc_array[(10)] = G__32623);

(invoc_array[(11)] = G__32624);

(invoc_array[(12)] = G__32625);

(invoc_array[(13)] = G__32626);

(invoc_array[(14)] = G__32627);

(invoc_array[(15)] = G__32628);

(invoc_array[(16)] = G__32629);

(invoc_array[(17)] = G__32630);

(invoc_array[(18)] = G__32631);

(invoc_array[vararg_idx] = G__32632);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__32613,G__32614,G__32615,G__32616,G__32617,G__32618,G__32619,G__32620,G__32621,G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,G__32629,G__32630,G__32631,var_args){
var G__32632 = null;
if (arguments.length > 19) {
var G__33234__i = 0, G__33234__a = new Array(arguments.length -  19);
while (G__33234__i < G__33234__a.length) {G__33234__a[G__33234__i] = arguments[G__33234__i + 19]; ++G__33234__i;}
  G__32632 = new cljs.core.IndexedSeq(G__33234__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__32613,G__32614,G__32615,G__32616,G__32617,G__32618,G__32619,G__32620,G__32621,G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,G__32629,G__32630,G__32631,G__32632);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__33235){
var G__32613 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32614 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32615 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32616 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32617 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32618 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32619 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32620 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32621 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32622 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32623 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32624 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32625 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32626 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32627 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32628 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32629 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32630 = cljs.core.first(arglist__33235);
arglist__33235 = cljs.core.next(arglist__33235);
var G__32631 = cljs.core.first(arglist__33235);
var G__32632 = cljs.core.rest(arglist__33235);
return sci$impl$fns$arity_19__delegate(G__32613,G__32614,G__32615,G__32616,G__32617,G__32618,G__32619,G__32620,G__32621,G__32622,G__32623,G__32624,G__32625,G__32626,G__32627,G__32628,G__32629,G__32630,G__32631,G__32632);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,G__32643,G__32644,G__32645,G__32646,G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32636);

(invoc_array[(1)] = G__32637);

(invoc_array[(2)] = G__32638);

(invoc_array[(3)] = G__32639);

(invoc_array[(4)] = G__32640);

(invoc_array[(5)] = G__32641);

(invoc_array[(6)] = G__32642);

(invoc_array[(7)] = G__32643);

(invoc_array[(8)] = G__32644);

(invoc_array[(9)] = G__32645);

(invoc_array[(10)] = G__32646);

(invoc_array[(11)] = G__32647);

(invoc_array[(12)] = G__32648);

(invoc_array[(13)] = G__32649);

(invoc_array[(14)] = G__32650);

(invoc_array[(15)] = G__32651);

(invoc_array[(16)] = G__32652);

(invoc_array[(17)] = G__32653);

(invoc_array[(18)] = G__32654);

(invoc_array[(19)] = G__32655);

(invoc_array[vararg_idx] = G__32656);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,G__32643,G__32644,G__32645,G__32646,G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,var_args){
var G__32656 = null;
if (arguments.length > 20) {
var G__33242__i = 0, G__33242__a = new Array(arguments.length -  20);
while (G__33242__i < G__33242__a.length) {G__33242__a[G__33242__i] = arguments[G__33242__i + 20]; ++G__33242__i;}
  G__32656 = new cljs.core.IndexedSeq(G__33242__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,G__32643,G__32644,G__32645,G__32646,G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__33244){
var G__32636 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32637 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32638 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32639 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32640 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32641 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32642 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32643 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32644 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32645 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32646 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32647 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32648 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32649 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32650 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32651 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32652 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32653 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32654 = cljs.core.first(arglist__33244);
arglist__33244 = cljs.core.next(arglist__33244);
var G__32655 = cljs.core.first(arglist__33244);
var G__32656 = cljs.core.rest(arglist__33244);
return sci$impl$fns$arity_20__delegate(G__32636,G__32637,G__32638,G__32639,G__32640,G__32641,G__32642,G__32643,G__32644,G__32645,G__32646,G__32647,G__32648,G__32649,G__32650,G__32651,G__32652,G__32653,G__32654,G__32655,G__32656);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32405)].join('')));

}
})():(function (){var G__32660 = fixed_arity;
switch (G__32660) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__31581__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31581__auto__)){
continue;
} else {
return ret__31581__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__32662){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32662);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__32679,G__32680){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32679);

(invoc_array[(1)] = G__32680);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__32681,G__32682,G__32683){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32681);

(invoc_array[(1)] = G__32682);

(invoc_array[(2)] = G__32683);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__32688,G__32689,G__32690,G__32691){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32688);

(invoc_array[(1)] = G__32689);

(invoc_array[(2)] = G__32690);

(invoc_array[(3)] = G__32691);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__32704,G__32705,G__32706,G__32707,G__32708){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32704);

(invoc_array[(1)] = G__32705);

(invoc_array[(2)] = G__32706);

(invoc_array[(3)] = G__32707);

(invoc_array[(4)] = G__32708);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__32709,G__32710,G__32711,G__32712,G__32713,G__32714){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32709);

(invoc_array[(1)] = G__32710);

(invoc_array[(2)] = G__32711);

(invoc_array[(3)] = G__32712);

(invoc_array[(4)] = G__32713);

(invoc_array[(5)] = G__32714);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__32722,G__32723,G__32724,G__32725,G__32726,G__32727,G__32728){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32722);

(invoc_array[(1)] = G__32723);

(invoc_array[(2)] = G__32724);

(invoc_array[(3)] = G__32725);

(invoc_array[(4)] = G__32726);

(invoc_array[(5)] = G__32727);

(invoc_array[(6)] = G__32728);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__32733,G__32734,G__32735,G__32736,G__32737,G__32738,G__32739,G__32740){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32733);

(invoc_array[(1)] = G__32734);

(invoc_array[(2)] = G__32735);

(invoc_array[(3)] = G__32736);

(invoc_array[(4)] = G__32737);

(invoc_array[(5)] = G__32738);

(invoc_array[(6)] = G__32739);

(invoc_array[(7)] = G__32740);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__32748,G__32749,G__32750,G__32751,G__32752,G__32753,G__32754,G__32755,G__32756){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32748);

(invoc_array[(1)] = G__32749);

(invoc_array[(2)] = G__32750);

(invoc_array[(3)] = G__32751);

(invoc_array[(4)] = G__32752);

(invoc_array[(5)] = G__32753);

(invoc_array[(6)] = G__32754);

(invoc_array[(7)] = G__32755);

(invoc_array[(8)] = G__32756);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__32764,G__32765,G__32766,G__32767,G__32768,G__32769,G__32770,G__32771,G__32772,G__32773){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32764);

(invoc_array[(1)] = G__32765);

(invoc_array[(2)] = G__32766);

(invoc_array[(3)] = G__32767);

(invoc_array[(4)] = G__32768);

(invoc_array[(5)] = G__32769);

(invoc_array[(6)] = G__32770);

(invoc_array[(7)] = G__32771);

(invoc_array[(8)] = G__32772);

(invoc_array[(9)] = G__32773);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__32781,G__32782,G__32783,G__32784,G__32785,G__32786,G__32787,G__32788,G__32789,G__32790,G__32791){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32781);

(invoc_array[(1)] = G__32782);

(invoc_array[(2)] = G__32783);

(invoc_array[(3)] = G__32784);

(invoc_array[(4)] = G__32785);

(invoc_array[(5)] = G__32786);

(invoc_array[(6)] = G__32787);

(invoc_array[(7)] = G__32788);

(invoc_array[(8)] = G__32789);

(invoc_array[(9)] = G__32790);

(invoc_array[(10)] = G__32791);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__32792,G__32793,G__32794,G__32795,G__32796,G__32797,G__32798,G__32799,G__32800,G__32801,G__32802,G__32803){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32792);

(invoc_array[(1)] = G__32793);

(invoc_array[(2)] = G__32794);

(invoc_array[(3)] = G__32795);

(invoc_array[(4)] = G__32796);

(invoc_array[(5)] = G__32797);

(invoc_array[(6)] = G__32798);

(invoc_array[(7)] = G__32799);

(invoc_array[(8)] = G__32800);

(invoc_array[(9)] = G__32801);

(invoc_array[(10)] = G__32802);

(invoc_array[(11)] = G__32803);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__32812,G__32813,G__32814,G__32815,G__32816,G__32817,G__32818,G__32819,G__32820,G__32821,G__32822,G__32823,G__32824){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32812);

(invoc_array[(1)] = G__32813);

(invoc_array[(2)] = G__32814);

(invoc_array[(3)] = G__32815);

(invoc_array[(4)] = G__32816);

(invoc_array[(5)] = G__32817);

(invoc_array[(6)] = G__32818);

(invoc_array[(7)] = G__32819);

(invoc_array[(8)] = G__32820);

(invoc_array[(9)] = G__32821);

(invoc_array[(10)] = G__32822);

(invoc_array[(11)] = G__32823);

(invoc_array[(12)] = G__32824);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__32825,G__32826,G__32827,G__32828,G__32829,G__32830,G__32831,G__32832,G__32833,G__32834,G__32835,G__32836,G__32837,G__32838){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32825);

(invoc_array[(1)] = G__32826);

(invoc_array[(2)] = G__32827);

(invoc_array[(3)] = G__32828);

(invoc_array[(4)] = G__32829);

(invoc_array[(5)] = G__32830);

(invoc_array[(6)] = G__32831);

(invoc_array[(7)] = G__32832);

(invoc_array[(8)] = G__32833);

(invoc_array[(9)] = G__32834);

(invoc_array[(10)] = G__32835);

(invoc_array[(11)] = G__32836);

(invoc_array[(12)] = G__32837);

(invoc_array[(13)] = G__32838);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__32843,G__32844,G__32845,G__32846,G__32847,G__32848,G__32849,G__32850,G__32851,G__32852,G__32853,G__32854,G__32855,G__32856,G__32857){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32843);

(invoc_array[(1)] = G__32844);

(invoc_array[(2)] = G__32845);

(invoc_array[(3)] = G__32846);

(invoc_array[(4)] = G__32847);

(invoc_array[(5)] = G__32848);

(invoc_array[(6)] = G__32849);

(invoc_array[(7)] = G__32850);

(invoc_array[(8)] = G__32851);

(invoc_array[(9)] = G__32852);

(invoc_array[(10)] = G__32853);

(invoc_array[(11)] = G__32854);

(invoc_array[(12)] = G__32855);

(invoc_array[(13)] = G__32856);

(invoc_array[(14)] = G__32857);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__32858,G__32859,G__32860,G__32861,G__32862,G__32863,G__32864,G__32865,G__32866,G__32867,G__32868,G__32869,G__32870,G__32871,G__32872,G__32873){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32858);

(invoc_array[(1)] = G__32859);

(invoc_array[(2)] = G__32860);

(invoc_array[(3)] = G__32861);

(invoc_array[(4)] = G__32862);

(invoc_array[(5)] = G__32863);

(invoc_array[(6)] = G__32864);

(invoc_array[(7)] = G__32865);

(invoc_array[(8)] = G__32866);

(invoc_array[(9)] = G__32867);

(invoc_array[(10)] = G__32868);

(invoc_array[(11)] = G__32869);

(invoc_array[(12)] = G__32870);

(invoc_array[(13)] = G__32871);

(invoc_array[(14)] = G__32872);

(invoc_array[(15)] = G__32873);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__32878,G__32879,G__32880,G__32881,G__32882,G__32883,G__32884,G__32885,G__32886,G__32887,G__32888,G__32889,G__32890,G__32891,G__32892,G__32893,G__32894){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32878);

(invoc_array[(1)] = G__32879);

(invoc_array[(2)] = G__32880);

(invoc_array[(3)] = G__32881);

(invoc_array[(4)] = G__32882);

(invoc_array[(5)] = G__32883);

(invoc_array[(6)] = G__32884);

(invoc_array[(7)] = G__32885);

(invoc_array[(8)] = G__32886);

(invoc_array[(9)] = G__32887);

(invoc_array[(10)] = G__32888);

(invoc_array[(11)] = G__32889);

(invoc_array[(12)] = G__32890);

(invoc_array[(13)] = G__32891);

(invoc_array[(14)] = G__32892);

(invoc_array[(15)] = G__32893);

(invoc_array[(16)] = G__32894);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__32896,G__32897,G__32898,G__32899,G__32900,G__32901,G__32902,G__32903,G__32904,G__32905,G__32906,G__32907,G__32908,G__32909,G__32910,G__32911,G__32912,G__32913){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32896);

(invoc_array[(1)] = G__32897);

(invoc_array[(2)] = G__32898);

(invoc_array[(3)] = G__32899);

(invoc_array[(4)] = G__32900);

(invoc_array[(5)] = G__32901);

(invoc_array[(6)] = G__32902);

(invoc_array[(7)] = G__32903);

(invoc_array[(8)] = G__32904);

(invoc_array[(9)] = G__32905);

(invoc_array[(10)] = G__32906);

(invoc_array[(11)] = G__32907);

(invoc_array[(12)] = G__32908);

(invoc_array[(13)] = G__32909);

(invoc_array[(14)] = G__32910);

(invoc_array[(15)] = G__32911);

(invoc_array[(16)] = G__32912);

(invoc_array[(17)] = G__32913);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__32917,G__32918,G__32919,G__32920,G__32921,G__32922,G__32923,G__32924,G__32925,G__32926,G__32927,G__32928,G__32929,G__32930,G__32931,G__32932,G__32933,G__32934,G__32935){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32917);

(invoc_array[(1)] = G__32918);

(invoc_array[(2)] = G__32919);

(invoc_array[(3)] = G__32920);

(invoc_array[(4)] = G__32921);

(invoc_array[(5)] = G__32922);

(invoc_array[(6)] = G__32923);

(invoc_array[(7)] = G__32924);

(invoc_array[(8)] = G__32925);

(invoc_array[(9)] = G__32926);

(invoc_array[(10)] = G__32927);

(invoc_array[(11)] = G__32928);

(invoc_array[(12)] = G__32929);

(invoc_array[(13)] = G__32930);

(invoc_array[(14)] = G__32931);

(invoc_array[(15)] = G__32932);

(invoc_array[(16)] = G__32933);

(invoc_array[(17)] = G__32934);

(invoc_array[(18)] = G__32935);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__32944,G__32945,G__32946,G__32947,G__32948,G__32949,G__32950,G__32951,G__32952,G__32953,G__32954,G__32955,G__32956,G__32957,G__32958,G__32959,G__32960,G__32961,G__32962,G__32963){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__32944);

(invoc_array[(1)] = G__32945);

(invoc_array[(2)] = G__32946);

(invoc_array[(3)] = G__32947);

(invoc_array[(4)] = G__32948);

(invoc_array[(5)] = G__32949);

(invoc_array[(6)] = G__32950);

(invoc_array[(7)] = G__32951);

(invoc_array[(8)] = G__32952);

(invoc_array[(9)] = G__32953);

(invoc_array[(10)] = G__32954);

(invoc_array[(11)] = G__32955);

(invoc_array[(12)] = G__32956);

(invoc_array[(13)] = G__32957);

(invoc_array[(14)] = G__32958);

(invoc_array[(15)] = G__32959);

(invoc_array[(16)] = G__32960);

(invoc_array[(17)] = G__32961);

(invoc_array[(18)] = G__32962);

(invoc_array[(19)] = G__32963);

while(true){
var ret__31582__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__31582__auto__)){
continue;
} else {
return ret__31582__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32660)].join('')));

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
var G__33286 = cljs.core.next(params__$1);
var G__33287 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__33288 = lets;
params__$1 = G__33286;
new_params = G__33287;
lets = G__33288;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__33290 = cljs.core.next(params__$1);
var G__33291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__33292 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__33290;
new_params = G__33291;
lets = G__33292;
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
var len__5749__auto___33296 = arguments.length;
var i__5750__auto___33297 = (0);
while(true){
if((i__5750__auto___33297 < len__5749__auto___33296)){
args__5755__auto__.push((arguments[i__5750__auto___33297]));

var G__33299 = (i__5750__auto___33297 + (1));
i__5750__auto___33297 = G__33299;
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

var vec__33016 = sig;
var seq__33017 = cljs.core.seq(vec__33016);
var first__33018 = cljs.core.first(seq__33017);
var seq__33017__$1 = cljs.core.next(seq__33017);
var params = first__33018;
var body = seq__33017__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq32996){
var G__32997 = cljs.core.first(seq32996);
var seq32996__$1 = cljs.core.next(seq32996);
var G__32998 = cljs.core.first(seq32996__$1);
var seq32996__$2 = cljs.core.next(seq32996__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32997,G__32998,seq32996__$2);
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
var G__33308 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__33309 = cljs.core.next(fdecls);
ret = G__33308;
fdecls = G__33309;
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
var len__5749__auto___33311 = arguments.length;
var i__5750__auto___33312 = (0);
while(true){
if((i__5750__auto___33312 < len__5749__auto___33311)){
args__5755__auto__.push((arguments[i__5750__auto___33312]));

var G__33313 = (i__5750__auto___33312 + (1));
i__5750__auto___33312 = G__33313;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq33065){
var G__33066 = cljs.core.first(seq33065);
var seq33065__$1 = cljs.core.next(seq33065);
var G__33067 = cljs.core.first(seq33065__$1);
var seq33065__$2 = cljs.core.next(seq33065__$1);
var G__33068 = cljs.core.first(seq33065__$2);
var seq33065__$3 = cljs.core.next(seq33065__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33066,G__33067,G__33068,seq33065__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33318 = arguments.length;
var i__5750__auto___33320 = (0);
while(true){
if((i__5750__auto___33320 < len__5749__auto___33318)){
args__5755__auto__.push((arguments[i__5750__auto___33320]));

var G__33321 = (i__5750__auto___33320 + (1));
i__5750__auto___33320 = G__33321;
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
var G__33325 = cljs.core.cons(f,p);
var G__33326 = cljs.core.next(args__$1);
p = G__33325;
args__$1 = G__33326;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__33327 = cljs.core.cons(f,p);
var G__33328 = cljs.core.next(args__$1);
p = G__33327;
args__$1 = G__33328;
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
var G__33329 = cljs.core.next(fd);
fd = G__33329;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__33330 = cljs.core.next(fd);
fd = G__33330;
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
var G__33331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__33332 = cljs.core.next(ds);
acc = G__33331;
ds = G__33332;
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
var G__33333 = cljs.core.next(p);
var G__33334 = cljs.core.cons(cljs.core.first(p),d);
p = G__33333;
d = G__33334;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq33125){
var G__33126 = cljs.core.first(seq33125);
var seq33125__$1 = cljs.core.next(seq33125);
var G__33127 = cljs.core.first(seq33125__$1);
var seq33125__$2 = cljs.core.next(seq33125__$1);
var G__33128 = cljs.core.first(seq33125__$2);
var seq33125__$3 = cljs.core.next(seq33125__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33126,G__33127,G__33128,seq33125__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
