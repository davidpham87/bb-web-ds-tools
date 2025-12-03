goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__35025 = arguments.length;
switch (G__35025) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__35026 = fixed_arity;
switch (G__35026) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__35027){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__35027);

while(true){
var ret__34227__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34227__auto__)){
continue;
} else {
return ret__34227__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__35027 = null;
if (arguments.length > 0) {
var G__35697__i = 0, G__35697__a = new Array(arguments.length -  0);
while (G__35697__i < G__35697__a.length) {G__35697__a[G__35697__i] = arguments[G__35697__i + 0]; ++G__35697__i;}
  G__35027 = new cljs.core.IndexedSeq(G__35697__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__35027);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__35698){
var G__35027 = cljs.core.seq(arglist__35698);
return sci$impl$fns$arity_0__delegate(G__35027);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__35028,G__35029){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35028);

(invoc_array[vararg_idx] = G__35029);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__35028,var_args){
var G__35029 = null;
if (arguments.length > 1) {
var G__35699__i = 0, G__35699__a = new Array(arguments.length -  1);
while (G__35699__i < G__35699__a.length) {G__35699__a[G__35699__i] = arguments[G__35699__i + 1]; ++G__35699__i;}
  G__35029 = new cljs.core.IndexedSeq(G__35699__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__35028,G__35029);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__35700){
var G__35028 = cljs.core.first(arglist__35700);
var G__35029 = cljs.core.rest(arglist__35700);
return sci$impl$fns$arity_1__delegate(G__35028,G__35029);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__35030,G__35031,G__35032){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35030);

(invoc_array[(1)] = G__35031);

(invoc_array[vararg_idx] = G__35032);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__35030,G__35031,var_args){
var G__35032 = null;
if (arguments.length > 2) {
var G__35704__i = 0, G__35704__a = new Array(arguments.length -  2);
while (G__35704__i < G__35704__a.length) {G__35704__a[G__35704__i] = arguments[G__35704__i + 2]; ++G__35704__i;}
  G__35032 = new cljs.core.IndexedSeq(G__35704__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__35030,G__35031,G__35032);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__35705){
var G__35030 = cljs.core.first(arglist__35705);
arglist__35705 = cljs.core.next(arglist__35705);
var G__35031 = cljs.core.first(arglist__35705);
var G__35032 = cljs.core.rest(arglist__35705);
return sci$impl$fns$arity_2__delegate(G__35030,G__35031,G__35032);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__35033,G__35034,G__35035,G__35036){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35033);

(invoc_array[(1)] = G__35034);

(invoc_array[(2)] = G__35035);

(invoc_array[vararg_idx] = G__35036);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__35033,G__35034,G__35035,var_args){
var G__35036 = null;
if (arguments.length > 3) {
var G__35711__i = 0, G__35711__a = new Array(arguments.length -  3);
while (G__35711__i < G__35711__a.length) {G__35711__a[G__35711__i] = arguments[G__35711__i + 3]; ++G__35711__i;}
  G__35036 = new cljs.core.IndexedSeq(G__35711__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__35033,G__35034,G__35035,G__35036);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__35713){
var G__35033 = cljs.core.first(arglist__35713);
arglist__35713 = cljs.core.next(arglist__35713);
var G__35034 = cljs.core.first(arglist__35713);
arglist__35713 = cljs.core.next(arglist__35713);
var G__35035 = cljs.core.first(arglist__35713);
var G__35036 = cljs.core.rest(arglist__35713);
return sci$impl$fns$arity_3__delegate(G__35033,G__35034,G__35035,G__35036);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__35037,G__35038,G__35039,G__35040,G__35041){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35037);

(invoc_array[(1)] = G__35038);

(invoc_array[(2)] = G__35039);

(invoc_array[(3)] = G__35040);

(invoc_array[vararg_idx] = G__35041);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__35037,G__35038,G__35039,G__35040,var_args){
var G__35041 = null;
if (arguments.length > 4) {
var G__35718__i = 0, G__35718__a = new Array(arguments.length -  4);
while (G__35718__i < G__35718__a.length) {G__35718__a[G__35718__i] = arguments[G__35718__i + 4]; ++G__35718__i;}
  G__35041 = new cljs.core.IndexedSeq(G__35718__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__35037,G__35038,G__35039,G__35040,G__35041);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__35719){
var G__35037 = cljs.core.first(arglist__35719);
arglist__35719 = cljs.core.next(arglist__35719);
var G__35038 = cljs.core.first(arglist__35719);
arglist__35719 = cljs.core.next(arglist__35719);
var G__35039 = cljs.core.first(arglist__35719);
arglist__35719 = cljs.core.next(arglist__35719);
var G__35040 = cljs.core.first(arglist__35719);
var G__35041 = cljs.core.rest(arglist__35719);
return sci$impl$fns$arity_4__delegate(G__35037,G__35038,G__35039,G__35040,G__35041);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__35042,G__35043,G__35044,G__35045,G__35046,G__35047){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35042);

(invoc_array[(1)] = G__35043);

(invoc_array[(2)] = G__35044);

(invoc_array[(3)] = G__35045);

(invoc_array[(4)] = G__35046);

(invoc_array[vararg_idx] = G__35047);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__35042,G__35043,G__35044,G__35045,G__35046,var_args){
var G__35047 = null;
if (arguments.length > 5) {
var G__35720__i = 0, G__35720__a = new Array(arguments.length -  5);
while (G__35720__i < G__35720__a.length) {G__35720__a[G__35720__i] = arguments[G__35720__i + 5]; ++G__35720__i;}
  G__35047 = new cljs.core.IndexedSeq(G__35720__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__35042,G__35043,G__35044,G__35045,G__35046,G__35047);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__35721){
var G__35042 = cljs.core.first(arglist__35721);
arglist__35721 = cljs.core.next(arglist__35721);
var G__35043 = cljs.core.first(arglist__35721);
arglist__35721 = cljs.core.next(arglist__35721);
var G__35044 = cljs.core.first(arglist__35721);
arglist__35721 = cljs.core.next(arglist__35721);
var G__35045 = cljs.core.first(arglist__35721);
arglist__35721 = cljs.core.next(arglist__35721);
var G__35046 = cljs.core.first(arglist__35721);
var G__35047 = cljs.core.rest(arglist__35721);
return sci$impl$fns$arity_5__delegate(G__35042,G__35043,G__35044,G__35045,G__35046,G__35047);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__35048,G__35049,G__35050,G__35051,G__35052,G__35053,G__35054){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35048);

(invoc_array[(1)] = G__35049);

(invoc_array[(2)] = G__35050);

(invoc_array[(3)] = G__35051);

(invoc_array[(4)] = G__35052);

(invoc_array[(5)] = G__35053);

(invoc_array[vararg_idx] = G__35054);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__35048,G__35049,G__35050,G__35051,G__35052,G__35053,var_args){
var G__35054 = null;
if (arguments.length > 6) {
var G__35722__i = 0, G__35722__a = new Array(arguments.length -  6);
while (G__35722__i < G__35722__a.length) {G__35722__a[G__35722__i] = arguments[G__35722__i + 6]; ++G__35722__i;}
  G__35054 = new cljs.core.IndexedSeq(G__35722__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__35048,G__35049,G__35050,G__35051,G__35052,G__35053,G__35054);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__35723){
var G__35048 = cljs.core.first(arglist__35723);
arglist__35723 = cljs.core.next(arglist__35723);
var G__35049 = cljs.core.first(arglist__35723);
arglist__35723 = cljs.core.next(arglist__35723);
var G__35050 = cljs.core.first(arglist__35723);
arglist__35723 = cljs.core.next(arglist__35723);
var G__35051 = cljs.core.first(arglist__35723);
arglist__35723 = cljs.core.next(arglist__35723);
var G__35052 = cljs.core.first(arglist__35723);
arglist__35723 = cljs.core.next(arglist__35723);
var G__35053 = cljs.core.first(arglist__35723);
var G__35054 = cljs.core.rest(arglist__35723);
return sci$impl$fns$arity_6__delegate(G__35048,G__35049,G__35050,G__35051,G__35052,G__35053,G__35054);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__35055,G__35056,G__35057,G__35058,G__35059,G__35060,G__35061,G__35062){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35055);

(invoc_array[(1)] = G__35056);

(invoc_array[(2)] = G__35057);

(invoc_array[(3)] = G__35058);

(invoc_array[(4)] = G__35059);

(invoc_array[(5)] = G__35060);

(invoc_array[(6)] = G__35061);

(invoc_array[vararg_idx] = G__35062);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__35055,G__35056,G__35057,G__35058,G__35059,G__35060,G__35061,var_args){
var G__35062 = null;
if (arguments.length > 7) {
var G__35724__i = 0, G__35724__a = new Array(arguments.length -  7);
while (G__35724__i < G__35724__a.length) {G__35724__a[G__35724__i] = arguments[G__35724__i + 7]; ++G__35724__i;}
  G__35062 = new cljs.core.IndexedSeq(G__35724__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__35055,G__35056,G__35057,G__35058,G__35059,G__35060,G__35061,G__35062);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__35725){
var G__35055 = cljs.core.first(arglist__35725);
arglist__35725 = cljs.core.next(arglist__35725);
var G__35056 = cljs.core.first(arglist__35725);
arglist__35725 = cljs.core.next(arglist__35725);
var G__35057 = cljs.core.first(arglist__35725);
arglist__35725 = cljs.core.next(arglist__35725);
var G__35058 = cljs.core.first(arglist__35725);
arglist__35725 = cljs.core.next(arglist__35725);
var G__35059 = cljs.core.first(arglist__35725);
arglist__35725 = cljs.core.next(arglist__35725);
var G__35060 = cljs.core.first(arglist__35725);
arglist__35725 = cljs.core.next(arglist__35725);
var G__35061 = cljs.core.first(arglist__35725);
var G__35062 = cljs.core.rest(arglist__35725);
return sci$impl$fns$arity_7__delegate(G__35055,G__35056,G__35057,G__35058,G__35059,G__35060,G__35061,G__35062);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__35063,G__35064,G__35065,G__35066,G__35067,G__35068,G__35069,G__35070,G__35071){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35063);

(invoc_array[(1)] = G__35064);

(invoc_array[(2)] = G__35065);

(invoc_array[(3)] = G__35066);

(invoc_array[(4)] = G__35067);

(invoc_array[(5)] = G__35068);

(invoc_array[(6)] = G__35069);

(invoc_array[(7)] = G__35070);

(invoc_array[vararg_idx] = G__35071);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__35063,G__35064,G__35065,G__35066,G__35067,G__35068,G__35069,G__35070,var_args){
var G__35071 = null;
if (arguments.length > 8) {
var G__35739__i = 0, G__35739__a = new Array(arguments.length -  8);
while (G__35739__i < G__35739__a.length) {G__35739__a[G__35739__i] = arguments[G__35739__i + 8]; ++G__35739__i;}
  G__35071 = new cljs.core.IndexedSeq(G__35739__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__35063,G__35064,G__35065,G__35066,G__35067,G__35068,G__35069,G__35070,G__35071);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__35740){
var G__35063 = cljs.core.first(arglist__35740);
arglist__35740 = cljs.core.next(arglist__35740);
var G__35064 = cljs.core.first(arglist__35740);
arglist__35740 = cljs.core.next(arglist__35740);
var G__35065 = cljs.core.first(arglist__35740);
arglist__35740 = cljs.core.next(arglist__35740);
var G__35066 = cljs.core.first(arglist__35740);
arglist__35740 = cljs.core.next(arglist__35740);
var G__35067 = cljs.core.first(arglist__35740);
arglist__35740 = cljs.core.next(arglist__35740);
var G__35068 = cljs.core.first(arglist__35740);
arglist__35740 = cljs.core.next(arglist__35740);
var G__35069 = cljs.core.first(arglist__35740);
arglist__35740 = cljs.core.next(arglist__35740);
var G__35070 = cljs.core.first(arglist__35740);
var G__35071 = cljs.core.rest(arglist__35740);
return sci$impl$fns$arity_8__delegate(G__35063,G__35064,G__35065,G__35066,G__35067,G__35068,G__35069,G__35070,G__35071);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__35072,G__35073,G__35074,G__35075,G__35076,G__35077,G__35078,G__35079,G__35080,G__35081){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35072);

(invoc_array[(1)] = G__35073);

(invoc_array[(2)] = G__35074);

(invoc_array[(3)] = G__35075);

(invoc_array[(4)] = G__35076);

(invoc_array[(5)] = G__35077);

(invoc_array[(6)] = G__35078);

(invoc_array[(7)] = G__35079);

(invoc_array[(8)] = G__35080);

(invoc_array[vararg_idx] = G__35081);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__35072,G__35073,G__35074,G__35075,G__35076,G__35077,G__35078,G__35079,G__35080,var_args){
var G__35081 = null;
if (arguments.length > 9) {
var G__35751__i = 0, G__35751__a = new Array(arguments.length -  9);
while (G__35751__i < G__35751__a.length) {G__35751__a[G__35751__i] = arguments[G__35751__i + 9]; ++G__35751__i;}
  G__35081 = new cljs.core.IndexedSeq(G__35751__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__35072,G__35073,G__35074,G__35075,G__35076,G__35077,G__35078,G__35079,G__35080,G__35081);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__35752){
var G__35072 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35073 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35074 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35075 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35076 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35077 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35078 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35079 = cljs.core.first(arglist__35752);
arglist__35752 = cljs.core.next(arglist__35752);
var G__35080 = cljs.core.first(arglist__35752);
var G__35081 = cljs.core.rest(arglist__35752);
return sci$impl$fns$arity_9__delegate(G__35072,G__35073,G__35074,G__35075,G__35076,G__35077,G__35078,G__35079,G__35080,G__35081);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__35082,G__35083,G__35084,G__35085,G__35086,G__35087,G__35088,G__35089,G__35090,G__35091,G__35092){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35082);

(invoc_array[(1)] = G__35083);

(invoc_array[(2)] = G__35084);

(invoc_array[(3)] = G__35085);

(invoc_array[(4)] = G__35086);

(invoc_array[(5)] = G__35087);

(invoc_array[(6)] = G__35088);

(invoc_array[(7)] = G__35089);

(invoc_array[(8)] = G__35090);

(invoc_array[(9)] = G__35091);

(invoc_array[vararg_idx] = G__35092);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__35082,G__35083,G__35084,G__35085,G__35086,G__35087,G__35088,G__35089,G__35090,G__35091,var_args){
var G__35092 = null;
if (arguments.length > 10) {
var G__35758__i = 0, G__35758__a = new Array(arguments.length -  10);
while (G__35758__i < G__35758__a.length) {G__35758__a[G__35758__i] = arguments[G__35758__i + 10]; ++G__35758__i;}
  G__35092 = new cljs.core.IndexedSeq(G__35758__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__35082,G__35083,G__35084,G__35085,G__35086,G__35087,G__35088,G__35089,G__35090,G__35091,G__35092);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__35759){
var G__35082 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35083 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35084 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35085 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35086 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35087 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35088 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35089 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35090 = cljs.core.first(arglist__35759);
arglist__35759 = cljs.core.next(arglist__35759);
var G__35091 = cljs.core.first(arglist__35759);
var G__35092 = cljs.core.rest(arglist__35759);
return sci$impl$fns$arity_10__delegate(G__35082,G__35083,G__35084,G__35085,G__35086,G__35087,G__35088,G__35089,G__35090,G__35091,G__35092);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__35097,G__35098,G__35099,G__35100,G__35101,G__35102,G__35103,G__35104,G__35105,G__35106,G__35107,G__35108){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35097);

(invoc_array[(1)] = G__35098);

(invoc_array[(2)] = G__35099);

(invoc_array[(3)] = G__35100);

(invoc_array[(4)] = G__35101);

(invoc_array[(5)] = G__35102);

(invoc_array[(6)] = G__35103);

(invoc_array[(7)] = G__35104);

(invoc_array[(8)] = G__35105);

(invoc_array[(9)] = G__35106);

(invoc_array[(10)] = G__35107);

(invoc_array[vararg_idx] = G__35108);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__35097,G__35098,G__35099,G__35100,G__35101,G__35102,G__35103,G__35104,G__35105,G__35106,G__35107,var_args){
var G__35108 = null;
if (arguments.length > 11) {
var G__35763__i = 0, G__35763__a = new Array(arguments.length -  11);
while (G__35763__i < G__35763__a.length) {G__35763__a[G__35763__i] = arguments[G__35763__i + 11]; ++G__35763__i;}
  G__35108 = new cljs.core.IndexedSeq(G__35763__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__35097,G__35098,G__35099,G__35100,G__35101,G__35102,G__35103,G__35104,G__35105,G__35106,G__35107,G__35108);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__35783){
var G__35097 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35098 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35099 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35100 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35101 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35102 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35103 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35104 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35105 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35106 = cljs.core.first(arglist__35783);
arglist__35783 = cljs.core.next(arglist__35783);
var G__35107 = cljs.core.first(arglist__35783);
var G__35108 = cljs.core.rest(arglist__35783);
return sci$impl$fns$arity_11__delegate(G__35097,G__35098,G__35099,G__35100,G__35101,G__35102,G__35103,G__35104,G__35105,G__35106,G__35107,G__35108);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__35109,G__35110,G__35111,G__35112,G__35113,G__35114,G__35115,G__35116,G__35117,G__35118,G__35119,G__35120,G__35121){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35109);

(invoc_array[(1)] = G__35110);

(invoc_array[(2)] = G__35111);

(invoc_array[(3)] = G__35112);

(invoc_array[(4)] = G__35113);

(invoc_array[(5)] = G__35114);

(invoc_array[(6)] = G__35115);

(invoc_array[(7)] = G__35116);

(invoc_array[(8)] = G__35117);

(invoc_array[(9)] = G__35118);

(invoc_array[(10)] = G__35119);

(invoc_array[(11)] = G__35120);

(invoc_array[vararg_idx] = G__35121);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__35109,G__35110,G__35111,G__35112,G__35113,G__35114,G__35115,G__35116,G__35117,G__35118,G__35119,G__35120,var_args){
var G__35121 = null;
if (arguments.length > 12) {
var G__35810__i = 0, G__35810__a = new Array(arguments.length -  12);
while (G__35810__i < G__35810__a.length) {G__35810__a[G__35810__i] = arguments[G__35810__i + 12]; ++G__35810__i;}
  G__35121 = new cljs.core.IndexedSeq(G__35810__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__35109,G__35110,G__35111,G__35112,G__35113,G__35114,G__35115,G__35116,G__35117,G__35118,G__35119,G__35120,G__35121);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__35817){
var G__35109 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35110 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35111 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35112 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35113 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35114 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35115 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35116 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35117 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35118 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35119 = cljs.core.first(arglist__35817);
arglist__35817 = cljs.core.next(arglist__35817);
var G__35120 = cljs.core.first(arglist__35817);
var G__35121 = cljs.core.rest(arglist__35817);
return sci$impl$fns$arity_12__delegate(G__35109,G__35110,G__35111,G__35112,G__35113,G__35114,G__35115,G__35116,G__35117,G__35118,G__35119,G__35120,G__35121);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__35122,G__35123,G__35124,G__35125,G__35126,G__35127,G__35128,G__35129,G__35130,G__35131,G__35132,G__35133,G__35134,G__35135){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35122);

(invoc_array[(1)] = G__35123);

(invoc_array[(2)] = G__35124);

(invoc_array[(3)] = G__35125);

(invoc_array[(4)] = G__35126);

(invoc_array[(5)] = G__35127);

(invoc_array[(6)] = G__35128);

(invoc_array[(7)] = G__35129);

(invoc_array[(8)] = G__35130);

(invoc_array[(9)] = G__35131);

(invoc_array[(10)] = G__35132);

(invoc_array[(11)] = G__35133);

(invoc_array[(12)] = G__35134);

(invoc_array[vararg_idx] = G__35135);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__35122,G__35123,G__35124,G__35125,G__35126,G__35127,G__35128,G__35129,G__35130,G__35131,G__35132,G__35133,G__35134,var_args){
var G__35135 = null;
if (arguments.length > 13) {
var G__35847__i = 0, G__35847__a = new Array(arguments.length -  13);
while (G__35847__i < G__35847__a.length) {G__35847__a[G__35847__i] = arguments[G__35847__i + 13]; ++G__35847__i;}
  G__35135 = new cljs.core.IndexedSeq(G__35847__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__35122,G__35123,G__35124,G__35125,G__35126,G__35127,G__35128,G__35129,G__35130,G__35131,G__35132,G__35133,G__35134,G__35135);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__35851){
var G__35122 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35123 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35124 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35125 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35126 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35127 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35128 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35129 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35130 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35131 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35132 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35133 = cljs.core.first(arglist__35851);
arglist__35851 = cljs.core.next(arglist__35851);
var G__35134 = cljs.core.first(arglist__35851);
var G__35135 = cljs.core.rest(arglist__35851);
return sci$impl$fns$arity_13__delegate(G__35122,G__35123,G__35124,G__35125,G__35126,G__35127,G__35128,G__35129,G__35130,G__35131,G__35132,G__35133,G__35134,G__35135);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__35136,G__35137,G__35138,G__35139,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149,G__35150){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35136);

(invoc_array[(1)] = G__35137);

(invoc_array[(2)] = G__35138);

(invoc_array[(3)] = G__35139);

(invoc_array[(4)] = G__35140);

(invoc_array[(5)] = G__35141);

(invoc_array[(6)] = G__35142);

(invoc_array[(7)] = G__35143);

(invoc_array[(8)] = G__35144);

(invoc_array[(9)] = G__35145);

(invoc_array[(10)] = G__35146);

(invoc_array[(11)] = G__35147);

(invoc_array[(12)] = G__35148);

(invoc_array[(13)] = G__35149);

(invoc_array[vararg_idx] = G__35150);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__35136,G__35137,G__35138,G__35139,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149,var_args){
var G__35150 = null;
if (arguments.length > 14) {
var G__35876__i = 0, G__35876__a = new Array(arguments.length -  14);
while (G__35876__i < G__35876__a.length) {G__35876__a[G__35876__i] = arguments[G__35876__i + 14]; ++G__35876__i;}
  G__35150 = new cljs.core.IndexedSeq(G__35876__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__35136,G__35137,G__35138,G__35139,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149,G__35150);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__35878){
var G__35136 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35137 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35138 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35139 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35140 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35141 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35142 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35143 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35144 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35145 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35146 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35147 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35148 = cljs.core.first(arglist__35878);
arglist__35878 = cljs.core.next(arglist__35878);
var G__35149 = cljs.core.first(arglist__35878);
var G__35150 = cljs.core.rest(arglist__35878);
return sci$impl$fns$arity_14__delegate(G__35136,G__35137,G__35138,G__35139,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149,G__35150);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__35151,G__35152,G__35153,G__35154,G__35155,G__35156,G__35157,G__35158,G__35159,G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,G__35166){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35151);

(invoc_array[(1)] = G__35152);

(invoc_array[(2)] = G__35153);

(invoc_array[(3)] = G__35154);

(invoc_array[(4)] = G__35155);

(invoc_array[(5)] = G__35156);

(invoc_array[(6)] = G__35157);

(invoc_array[(7)] = G__35158);

(invoc_array[(8)] = G__35159);

(invoc_array[(9)] = G__35160);

(invoc_array[(10)] = G__35161);

(invoc_array[(11)] = G__35162);

(invoc_array[(12)] = G__35163);

(invoc_array[(13)] = G__35164);

(invoc_array[(14)] = G__35165);

(invoc_array[vararg_idx] = G__35166);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__35151,G__35152,G__35153,G__35154,G__35155,G__35156,G__35157,G__35158,G__35159,G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,var_args){
var G__35166 = null;
if (arguments.length > 15) {
var G__35887__i = 0, G__35887__a = new Array(arguments.length -  15);
while (G__35887__i < G__35887__a.length) {G__35887__a[G__35887__i] = arguments[G__35887__i + 15]; ++G__35887__i;}
  G__35166 = new cljs.core.IndexedSeq(G__35887__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__35151,G__35152,G__35153,G__35154,G__35155,G__35156,G__35157,G__35158,G__35159,G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,G__35166);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__35888){
var G__35151 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35152 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35153 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35154 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35155 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35156 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35157 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35158 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35159 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35160 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35161 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35162 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35163 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35164 = cljs.core.first(arglist__35888);
arglist__35888 = cljs.core.next(arglist__35888);
var G__35165 = cljs.core.first(arglist__35888);
var G__35166 = cljs.core.rest(arglist__35888);
return sci$impl$fns$arity_15__delegate(G__35151,G__35152,G__35153,G__35154,G__35155,G__35156,G__35157,G__35158,G__35159,G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,G__35166);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__35167,G__35168,G__35169,G__35170,G__35171,G__35172,G__35173,G__35174,G__35175,G__35176,G__35177,G__35178,G__35179,G__35180,G__35181,G__35182,G__35183){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35167);

(invoc_array[(1)] = G__35168);

(invoc_array[(2)] = G__35169);

(invoc_array[(3)] = G__35170);

(invoc_array[(4)] = G__35171);

(invoc_array[(5)] = G__35172);

(invoc_array[(6)] = G__35173);

(invoc_array[(7)] = G__35174);

(invoc_array[(8)] = G__35175);

(invoc_array[(9)] = G__35176);

(invoc_array[(10)] = G__35177);

(invoc_array[(11)] = G__35178);

(invoc_array[(12)] = G__35179);

(invoc_array[(13)] = G__35180);

(invoc_array[(14)] = G__35181);

(invoc_array[(15)] = G__35182);

(invoc_array[vararg_idx] = G__35183);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__35167,G__35168,G__35169,G__35170,G__35171,G__35172,G__35173,G__35174,G__35175,G__35176,G__35177,G__35178,G__35179,G__35180,G__35181,G__35182,var_args){
var G__35183 = null;
if (arguments.length > 16) {
var G__35894__i = 0, G__35894__a = new Array(arguments.length -  16);
while (G__35894__i < G__35894__a.length) {G__35894__a[G__35894__i] = arguments[G__35894__i + 16]; ++G__35894__i;}
  G__35183 = new cljs.core.IndexedSeq(G__35894__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__35167,G__35168,G__35169,G__35170,G__35171,G__35172,G__35173,G__35174,G__35175,G__35176,G__35177,G__35178,G__35179,G__35180,G__35181,G__35182,G__35183);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__35895){
var G__35167 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35168 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35169 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35170 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35171 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35172 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35173 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35174 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35175 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35176 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35177 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35178 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35179 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35180 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35181 = cljs.core.first(arglist__35895);
arglist__35895 = cljs.core.next(arglist__35895);
var G__35182 = cljs.core.first(arglist__35895);
var G__35183 = cljs.core.rest(arglist__35895);
return sci$impl$fns$arity_16__delegate(G__35167,G__35168,G__35169,G__35170,G__35171,G__35172,G__35173,G__35174,G__35175,G__35176,G__35177,G__35178,G__35179,G__35180,G__35181,G__35182,G__35183);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__35184,G__35185,G__35186,G__35187,G__35188,G__35189,G__35190,G__35191,G__35192,G__35193,G__35194,G__35195,G__35196,G__35197,G__35198,G__35199,G__35200,G__35201){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35184);

(invoc_array[(1)] = G__35185);

(invoc_array[(2)] = G__35186);

(invoc_array[(3)] = G__35187);

(invoc_array[(4)] = G__35188);

(invoc_array[(5)] = G__35189);

(invoc_array[(6)] = G__35190);

(invoc_array[(7)] = G__35191);

(invoc_array[(8)] = G__35192);

(invoc_array[(9)] = G__35193);

(invoc_array[(10)] = G__35194);

(invoc_array[(11)] = G__35195);

(invoc_array[(12)] = G__35196);

(invoc_array[(13)] = G__35197);

(invoc_array[(14)] = G__35198);

(invoc_array[(15)] = G__35199);

(invoc_array[(16)] = G__35200);

(invoc_array[vararg_idx] = G__35201);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__35184,G__35185,G__35186,G__35187,G__35188,G__35189,G__35190,G__35191,G__35192,G__35193,G__35194,G__35195,G__35196,G__35197,G__35198,G__35199,G__35200,var_args){
var G__35201 = null;
if (arguments.length > 17) {
var G__35898__i = 0, G__35898__a = new Array(arguments.length -  17);
while (G__35898__i < G__35898__a.length) {G__35898__a[G__35898__i] = arguments[G__35898__i + 17]; ++G__35898__i;}
  G__35201 = new cljs.core.IndexedSeq(G__35898__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__35184,G__35185,G__35186,G__35187,G__35188,G__35189,G__35190,G__35191,G__35192,G__35193,G__35194,G__35195,G__35196,G__35197,G__35198,G__35199,G__35200,G__35201);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__35899){
var G__35184 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35185 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35186 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35187 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35188 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35189 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35190 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35191 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35192 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35193 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35194 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35195 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35196 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35197 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35198 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35199 = cljs.core.first(arglist__35899);
arglist__35899 = cljs.core.next(arglist__35899);
var G__35200 = cljs.core.first(arglist__35899);
var G__35201 = cljs.core.rest(arglist__35899);
return sci$impl$fns$arity_17__delegate(G__35184,G__35185,G__35186,G__35187,G__35188,G__35189,G__35190,G__35191,G__35192,G__35193,G__35194,G__35195,G__35196,G__35197,G__35198,G__35199,G__35200,G__35201);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__35202,G__35203,G__35204,G__35205,G__35206,G__35207,G__35208,G__35209,G__35210,G__35211,G__35212,G__35213,G__35214,G__35215,G__35216,G__35217,G__35218,G__35219,G__35220){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35202);

(invoc_array[(1)] = G__35203);

(invoc_array[(2)] = G__35204);

(invoc_array[(3)] = G__35205);

(invoc_array[(4)] = G__35206);

(invoc_array[(5)] = G__35207);

(invoc_array[(6)] = G__35208);

(invoc_array[(7)] = G__35209);

(invoc_array[(8)] = G__35210);

(invoc_array[(9)] = G__35211);

(invoc_array[(10)] = G__35212);

(invoc_array[(11)] = G__35213);

(invoc_array[(12)] = G__35214);

(invoc_array[(13)] = G__35215);

(invoc_array[(14)] = G__35216);

(invoc_array[(15)] = G__35217);

(invoc_array[(16)] = G__35218);

(invoc_array[(17)] = G__35219);

(invoc_array[vararg_idx] = G__35220);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__35202,G__35203,G__35204,G__35205,G__35206,G__35207,G__35208,G__35209,G__35210,G__35211,G__35212,G__35213,G__35214,G__35215,G__35216,G__35217,G__35218,G__35219,var_args){
var G__35220 = null;
if (arguments.length > 18) {
var G__35906__i = 0, G__35906__a = new Array(arguments.length -  18);
while (G__35906__i < G__35906__a.length) {G__35906__a[G__35906__i] = arguments[G__35906__i + 18]; ++G__35906__i;}
  G__35220 = new cljs.core.IndexedSeq(G__35906__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__35202,G__35203,G__35204,G__35205,G__35206,G__35207,G__35208,G__35209,G__35210,G__35211,G__35212,G__35213,G__35214,G__35215,G__35216,G__35217,G__35218,G__35219,G__35220);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__35907){
var G__35202 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35203 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35204 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35205 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35206 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35207 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35208 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35209 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35210 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35211 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35212 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35213 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35214 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35215 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35216 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35217 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35218 = cljs.core.first(arglist__35907);
arglist__35907 = cljs.core.next(arglist__35907);
var G__35219 = cljs.core.first(arglist__35907);
var G__35220 = cljs.core.rest(arglist__35907);
return sci$impl$fns$arity_18__delegate(G__35202,G__35203,G__35204,G__35205,G__35206,G__35207,G__35208,G__35209,G__35210,G__35211,G__35212,G__35213,G__35214,G__35215,G__35216,G__35217,G__35218,G__35219,G__35220);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__35221,G__35222,G__35223,G__35224,G__35225,G__35226,G__35227,G__35228,G__35229,G__35230,G__35231,G__35232,G__35233,G__35234,G__35235,G__35236,G__35237,G__35238,G__35239,G__35240){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35221);

(invoc_array[(1)] = G__35222);

(invoc_array[(2)] = G__35223);

(invoc_array[(3)] = G__35224);

(invoc_array[(4)] = G__35225);

(invoc_array[(5)] = G__35226);

(invoc_array[(6)] = G__35227);

(invoc_array[(7)] = G__35228);

(invoc_array[(8)] = G__35229);

(invoc_array[(9)] = G__35230);

(invoc_array[(10)] = G__35231);

(invoc_array[(11)] = G__35232);

(invoc_array[(12)] = G__35233);

(invoc_array[(13)] = G__35234);

(invoc_array[(14)] = G__35235);

(invoc_array[(15)] = G__35236);

(invoc_array[(16)] = G__35237);

(invoc_array[(17)] = G__35238);

(invoc_array[(18)] = G__35239);

(invoc_array[vararg_idx] = G__35240);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__35221,G__35222,G__35223,G__35224,G__35225,G__35226,G__35227,G__35228,G__35229,G__35230,G__35231,G__35232,G__35233,G__35234,G__35235,G__35236,G__35237,G__35238,G__35239,var_args){
var G__35240 = null;
if (arguments.length > 19) {
var G__35908__i = 0, G__35908__a = new Array(arguments.length -  19);
while (G__35908__i < G__35908__a.length) {G__35908__a[G__35908__i] = arguments[G__35908__i + 19]; ++G__35908__i;}
  G__35240 = new cljs.core.IndexedSeq(G__35908__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__35221,G__35222,G__35223,G__35224,G__35225,G__35226,G__35227,G__35228,G__35229,G__35230,G__35231,G__35232,G__35233,G__35234,G__35235,G__35236,G__35237,G__35238,G__35239,G__35240);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__35911){
var G__35221 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35222 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35223 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35224 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35225 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35226 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35227 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35228 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35229 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35230 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35231 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35232 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35233 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35234 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35235 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35236 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35237 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35238 = cljs.core.first(arglist__35911);
arglist__35911 = cljs.core.next(arglist__35911);
var G__35239 = cljs.core.first(arglist__35911);
var G__35240 = cljs.core.rest(arglist__35911);
return sci$impl$fns$arity_19__delegate(G__35221,G__35222,G__35223,G__35224,G__35225,G__35226,G__35227,G__35228,G__35229,G__35230,G__35231,G__35232,G__35233,G__35234,G__35235,G__35236,G__35237,G__35238,G__35239,G__35240);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__35241,G__35242,G__35243,G__35244,G__35245,G__35246,G__35247,G__35248,G__35249,G__35250,G__35251,G__35252,G__35253,G__35254,G__35255,G__35256,G__35257,G__35258,G__35259,G__35260,G__35261){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35241);

(invoc_array[(1)] = G__35242);

(invoc_array[(2)] = G__35243);

(invoc_array[(3)] = G__35244);

(invoc_array[(4)] = G__35245);

(invoc_array[(5)] = G__35246);

(invoc_array[(6)] = G__35247);

(invoc_array[(7)] = G__35248);

(invoc_array[(8)] = G__35249);

(invoc_array[(9)] = G__35250);

(invoc_array[(10)] = G__35251);

(invoc_array[(11)] = G__35252);

(invoc_array[(12)] = G__35253);

(invoc_array[(13)] = G__35254);

(invoc_array[(14)] = G__35255);

(invoc_array[(15)] = G__35256);

(invoc_array[(16)] = G__35257);

(invoc_array[(17)] = G__35258);

(invoc_array[(18)] = G__35259);

(invoc_array[(19)] = G__35260);

(invoc_array[vararg_idx] = G__35261);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__35241,G__35242,G__35243,G__35244,G__35245,G__35246,G__35247,G__35248,G__35249,G__35250,G__35251,G__35252,G__35253,G__35254,G__35255,G__35256,G__35257,G__35258,G__35259,G__35260,var_args){
var G__35261 = null;
if (arguments.length > 20) {
var G__35917__i = 0, G__35917__a = new Array(arguments.length -  20);
while (G__35917__i < G__35917__a.length) {G__35917__a[G__35917__i] = arguments[G__35917__i + 20]; ++G__35917__i;}
  G__35261 = new cljs.core.IndexedSeq(G__35917__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__35241,G__35242,G__35243,G__35244,G__35245,G__35246,G__35247,G__35248,G__35249,G__35250,G__35251,G__35252,G__35253,G__35254,G__35255,G__35256,G__35257,G__35258,G__35259,G__35260,G__35261);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__35919){
var G__35241 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35242 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35243 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35244 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35245 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35246 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35247 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35248 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35249 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35250 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35251 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35252 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35253 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35254 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35255 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35256 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35257 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35258 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35259 = cljs.core.first(arglist__35919);
arglist__35919 = cljs.core.next(arglist__35919);
var G__35260 = cljs.core.first(arglist__35919);
var G__35261 = cljs.core.rest(arglist__35919);
return sci$impl$fns$arity_20__delegate(G__35241,G__35242,G__35243,G__35244,G__35245,G__35246,G__35247,G__35248,G__35249,G__35250,G__35251,G__35252,G__35253,G__35254,G__35255,G__35256,G__35257,G__35258,G__35259,G__35260,G__35261);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35026)].join('')));

}
})():(function (){var G__35262 = fixed_arity;
switch (G__35262) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__34227__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34227__auto__)){
continue;
} else {
return ret__34227__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__35263){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35263);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__35264,G__35265){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35264);

(invoc_array[(1)] = G__35265);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__35266,G__35267,G__35268){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35266);

(invoc_array[(1)] = G__35267);

(invoc_array[(2)] = G__35268);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__35269,G__35270,G__35271,G__35272){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35269);

(invoc_array[(1)] = G__35270);

(invoc_array[(2)] = G__35271);

(invoc_array[(3)] = G__35272);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__35273,G__35274,G__35275,G__35276,G__35277){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35273);

(invoc_array[(1)] = G__35274);

(invoc_array[(2)] = G__35275);

(invoc_array[(3)] = G__35276);

(invoc_array[(4)] = G__35277);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__35278,G__35279,G__35281,G__35282,G__35283,G__35284){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35278);

(invoc_array[(1)] = G__35279);

(invoc_array[(2)] = G__35281);

(invoc_array[(3)] = G__35282);

(invoc_array[(4)] = G__35283);

(invoc_array[(5)] = G__35284);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__35288,G__35289,G__35290,G__35291,G__35292,G__35293,G__35294){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35288);

(invoc_array[(1)] = G__35289);

(invoc_array[(2)] = G__35290);

(invoc_array[(3)] = G__35291);

(invoc_array[(4)] = G__35292);

(invoc_array[(5)] = G__35293);

(invoc_array[(6)] = G__35294);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__35301,G__35302,G__35303,G__35304,G__35305,G__35306,G__35307,G__35308){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35301);

(invoc_array[(1)] = G__35302);

(invoc_array[(2)] = G__35303);

(invoc_array[(3)] = G__35304);

(invoc_array[(4)] = G__35305);

(invoc_array[(5)] = G__35306);

(invoc_array[(6)] = G__35307);

(invoc_array[(7)] = G__35308);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__35313,G__35314,G__35315,G__35316,G__35317,G__35318,G__35319,G__35320,G__35321){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35313);

(invoc_array[(1)] = G__35314);

(invoc_array[(2)] = G__35315);

(invoc_array[(3)] = G__35316);

(invoc_array[(4)] = G__35317);

(invoc_array[(5)] = G__35318);

(invoc_array[(6)] = G__35319);

(invoc_array[(7)] = G__35320);

(invoc_array[(8)] = G__35321);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__35322,G__35323,G__35324,G__35325,G__35326,G__35327,G__35328,G__35329,G__35330,G__35331){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35322);

(invoc_array[(1)] = G__35323);

(invoc_array[(2)] = G__35324);

(invoc_array[(3)] = G__35325);

(invoc_array[(4)] = G__35326);

(invoc_array[(5)] = G__35327);

(invoc_array[(6)] = G__35328);

(invoc_array[(7)] = G__35329);

(invoc_array[(8)] = G__35330);

(invoc_array[(9)] = G__35331);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__35333,G__35334,G__35335,G__35336,G__35337,G__35338,G__35339,G__35340,G__35341,G__35342,G__35343){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35333);

(invoc_array[(1)] = G__35334);

(invoc_array[(2)] = G__35335);

(invoc_array[(3)] = G__35336);

(invoc_array[(4)] = G__35337);

(invoc_array[(5)] = G__35338);

(invoc_array[(6)] = G__35339);

(invoc_array[(7)] = G__35340);

(invoc_array[(8)] = G__35341);

(invoc_array[(9)] = G__35342);

(invoc_array[(10)] = G__35343);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__35347,G__35348,G__35349,G__35350,G__35351,G__35352,G__35353,G__35354,G__35355,G__35356,G__35357,G__35358){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35347);

(invoc_array[(1)] = G__35348);

(invoc_array[(2)] = G__35349);

(invoc_array[(3)] = G__35350);

(invoc_array[(4)] = G__35351);

(invoc_array[(5)] = G__35352);

(invoc_array[(6)] = G__35353);

(invoc_array[(7)] = G__35354);

(invoc_array[(8)] = G__35355);

(invoc_array[(9)] = G__35356);

(invoc_array[(10)] = G__35357);

(invoc_array[(11)] = G__35358);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__35371,G__35372,G__35373,G__35374,G__35375,G__35376,G__35377,G__35378,G__35379,G__35380,G__35381,G__35382,G__35383){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35371);

(invoc_array[(1)] = G__35372);

(invoc_array[(2)] = G__35373);

(invoc_array[(3)] = G__35374);

(invoc_array[(4)] = G__35375);

(invoc_array[(5)] = G__35376);

(invoc_array[(6)] = G__35377);

(invoc_array[(7)] = G__35378);

(invoc_array[(8)] = G__35379);

(invoc_array[(9)] = G__35380);

(invoc_array[(10)] = G__35381);

(invoc_array[(11)] = G__35382);

(invoc_array[(12)] = G__35383);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__35384,G__35385,G__35386,G__35387,G__35388,G__35389,G__35390,G__35391,G__35392,G__35393,G__35394,G__35395,G__35396,G__35397){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35384);

(invoc_array[(1)] = G__35385);

(invoc_array[(2)] = G__35386);

(invoc_array[(3)] = G__35387);

(invoc_array[(4)] = G__35388);

(invoc_array[(5)] = G__35389);

(invoc_array[(6)] = G__35390);

(invoc_array[(7)] = G__35391);

(invoc_array[(8)] = G__35392);

(invoc_array[(9)] = G__35393);

(invoc_array[(10)] = G__35394);

(invoc_array[(11)] = G__35395);

(invoc_array[(12)] = G__35396);

(invoc_array[(13)] = G__35397);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__35405,G__35406,G__35407,G__35408,G__35409,G__35410,G__35411,G__35412,G__35413,G__35414,G__35415,G__35416,G__35417,G__35418,G__35419){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35405);

(invoc_array[(1)] = G__35406);

(invoc_array[(2)] = G__35407);

(invoc_array[(3)] = G__35408);

(invoc_array[(4)] = G__35409);

(invoc_array[(5)] = G__35410);

(invoc_array[(6)] = G__35411);

(invoc_array[(7)] = G__35412);

(invoc_array[(8)] = G__35413);

(invoc_array[(9)] = G__35414);

(invoc_array[(10)] = G__35415);

(invoc_array[(11)] = G__35416);

(invoc_array[(12)] = G__35417);

(invoc_array[(13)] = G__35418);

(invoc_array[(14)] = G__35419);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__35420,G__35421,G__35422,G__35423,G__35424,G__35425,G__35426,G__35427,G__35428,G__35429,G__35430,G__35431,G__35432,G__35433,G__35434,G__35435){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35420);

(invoc_array[(1)] = G__35421);

(invoc_array[(2)] = G__35422);

(invoc_array[(3)] = G__35423);

(invoc_array[(4)] = G__35424);

(invoc_array[(5)] = G__35425);

(invoc_array[(6)] = G__35426);

(invoc_array[(7)] = G__35427);

(invoc_array[(8)] = G__35428);

(invoc_array[(9)] = G__35429);

(invoc_array[(10)] = G__35430);

(invoc_array[(11)] = G__35431);

(invoc_array[(12)] = G__35432);

(invoc_array[(13)] = G__35433);

(invoc_array[(14)] = G__35434);

(invoc_array[(15)] = G__35435);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__35440,G__35441,G__35442,G__35443,G__35444,G__35445,G__35446,G__35447,G__35448,G__35449,G__35450,G__35451,G__35452,G__35453,G__35454,G__35455,G__35456){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35440);

(invoc_array[(1)] = G__35441);

(invoc_array[(2)] = G__35442);

(invoc_array[(3)] = G__35443);

(invoc_array[(4)] = G__35444);

(invoc_array[(5)] = G__35445);

(invoc_array[(6)] = G__35446);

(invoc_array[(7)] = G__35447);

(invoc_array[(8)] = G__35448);

(invoc_array[(9)] = G__35449);

(invoc_array[(10)] = G__35450);

(invoc_array[(11)] = G__35451);

(invoc_array[(12)] = G__35452);

(invoc_array[(13)] = G__35453);

(invoc_array[(14)] = G__35454);

(invoc_array[(15)] = G__35455);

(invoc_array[(16)] = G__35456);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__35457,G__35458,G__35459,G__35460,G__35461,G__35462,G__35463,G__35464,G__35465,G__35466,G__35467,G__35468,G__35469,G__35470,G__35471,G__35472,G__35473,G__35474){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35457);

(invoc_array[(1)] = G__35458);

(invoc_array[(2)] = G__35459);

(invoc_array[(3)] = G__35460);

(invoc_array[(4)] = G__35461);

(invoc_array[(5)] = G__35462);

(invoc_array[(6)] = G__35463);

(invoc_array[(7)] = G__35464);

(invoc_array[(8)] = G__35465);

(invoc_array[(9)] = G__35466);

(invoc_array[(10)] = G__35467);

(invoc_array[(11)] = G__35468);

(invoc_array[(12)] = G__35469);

(invoc_array[(13)] = G__35470);

(invoc_array[(14)] = G__35471);

(invoc_array[(15)] = G__35472);

(invoc_array[(16)] = G__35473);

(invoc_array[(17)] = G__35474);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__35483,G__35484,G__35485,G__35486,G__35487,G__35488,G__35489,G__35490,G__35491,G__35492,G__35493,G__35494,G__35495,G__35496,G__35497,G__35498,G__35499,G__35500,G__35501){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35483);

(invoc_array[(1)] = G__35484);

(invoc_array[(2)] = G__35485);

(invoc_array[(3)] = G__35486);

(invoc_array[(4)] = G__35487);

(invoc_array[(5)] = G__35488);

(invoc_array[(6)] = G__35489);

(invoc_array[(7)] = G__35490);

(invoc_array[(8)] = G__35491);

(invoc_array[(9)] = G__35492);

(invoc_array[(10)] = G__35493);

(invoc_array[(11)] = G__35494);

(invoc_array[(12)] = G__35495);

(invoc_array[(13)] = G__35496);

(invoc_array[(14)] = G__35497);

(invoc_array[(15)] = G__35498);

(invoc_array[(16)] = G__35499);

(invoc_array[(17)] = G__35500);

(invoc_array[(18)] = G__35501);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__35504,G__35505,G__35506,G__35507,G__35508,G__35509,G__35510,G__35511,G__35512,G__35513,G__35514,G__35515,G__35516,G__35517,G__35518,G__35519,G__35520,G__35521,G__35522,G__35523){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__35504);

(invoc_array[(1)] = G__35505);

(invoc_array[(2)] = G__35506);

(invoc_array[(3)] = G__35507);

(invoc_array[(4)] = G__35508);

(invoc_array[(5)] = G__35509);

(invoc_array[(6)] = G__35510);

(invoc_array[(7)] = G__35511);

(invoc_array[(8)] = G__35512);

(invoc_array[(9)] = G__35513);

(invoc_array[(10)] = G__35514);

(invoc_array[(11)] = G__35515);

(invoc_array[(12)] = G__35516);

(invoc_array[(13)] = G__35517);

(invoc_array[(14)] = G__35518);

(invoc_array[(15)] = G__35519);

(invoc_array[(16)] = G__35520);

(invoc_array[(17)] = G__35521);

(invoc_array[(18)] = G__35522);

(invoc_array[(19)] = G__35523);

while(true){
var ret__34228__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__34228__auto__)){
continue;
} else {
return ret__34228__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35262)].join('')));

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
var G__35951 = cljs.core.next(params__$1);
var G__35952 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__35953 = lets;
params__$1 = G__35951;
new_params = G__35952;
lets = G__35953;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__35954 = cljs.core.next(params__$1);
var G__35955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__35956 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__35954;
new_params = G__35955;
lets = G__35956;
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
var len__5749__auto___35957 = arguments.length;
var i__5750__auto___35958 = (0);
while(true){
if((i__5750__auto___35958 < len__5749__auto___35957)){
args__5755__auto__.push((arguments[i__5750__auto___35958]));

var G__35960 = (i__5750__auto___35958 + (1));
i__5750__auto___35958 = G__35960;
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

var vec__35564 = sig;
var seq__35565 = cljs.core.seq(vec__35564);
var first__35566 = cljs.core.first(seq__35565);
var seq__35565__$1 = cljs.core.next(seq__35565);
var params = first__35566;
var body = seq__35565__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq35553){
var G__35554 = cljs.core.first(seq35553);
var seq35553__$1 = cljs.core.next(seq35553);
var G__35555 = cljs.core.first(seq35553__$1);
var seq35553__$2 = cljs.core.next(seq35553__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35554,G__35555,seq35553__$2);
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
var G__35977 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__35978 = cljs.core.next(fdecls);
ret = G__35977;
fdecls = G__35978;
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
var len__5749__auto___35979 = arguments.length;
var i__5750__auto___35980 = (0);
while(true){
if((i__5750__auto___35980 < len__5749__auto___35979)){
args__5755__auto__.push((arguments[i__5750__auto___35980]));

var G__35981 = (i__5750__auto___35980 + (1));
i__5750__auto___35980 = G__35981;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq35577){
var G__35578 = cljs.core.first(seq35577);
var seq35577__$1 = cljs.core.next(seq35577);
var G__35579 = cljs.core.first(seq35577__$1);
var seq35577__$2 = cljs.core.next(seq35577__$1);
var G__35580 = cljs.core.first(seq35577__$2);
var seq35577__$3 = cljs.core.next(seq35577__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35578,G__35579,G__35580,seq35577__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35995 = arguments.length;
var i__5750__auto___35996 = (0);
while(true){
if((i__5750__auto___35996 < len__5749__auto___35995)){
args__5755__auto__.push((arguments[i__5750__auto___35996]));

var G__35997 = (i__5750__auto___35996 + (1));
i__5750__auto___35996 = G__35997;
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
var G__35998 = cljs.core.cons(f,p);
var G__35999 = cljs.core.next(args__$1);
p = G__35998;
args__$1 = G__35999;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__36001 = cljs.core.cons(f,p);
var G__36002 = cljs.core.next(args__$1);
p = G__36001;
args__$1 = G__36002;
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
var G__36005 = cljs.core.next(fd);
fd = G__36005;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__36006 = cljs.core.next(fd);
fd = G__36006;
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
var G__36007 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__36008 = cljs.core.next(ds);
acc = G__36007;
ds = G__36008;
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
var G__36014 = cljs.core.next(p);
var G__36015 = cljs.core.cons(cljs.core.first(p),d);
p = G__36014;
d = G__36015;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq35628){
var G__35629 = cljs.core.first(seq35628);
var seq35628__$1 = cljs.core.next(seq35628);
var G__35630 = cljs.core.first(seq35628__$1);
var seq35628__$2 = cljs.core.next(seq35628__$1);
var G__35631 = cljs.core.first(seq35628__$2);
var seq35628__$3 = cljs.core.next(seq35628__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35629,G__35630,G__35631,seq35628__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
