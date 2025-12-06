goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__37101 = arguments.length;
switch (G__37101) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__37102 = fixed_arity;
switch (G__37102) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__37103){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__37103);

while(true){
var ret__36306__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36306__auto__)){
continue;
} else {
return ret__36306__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37103 = null;
if (arguments.length > 0) {
var G__37760__i = 0, G__37760__a = new Array(arguments.length -  0);
while (G__37760__i < G__37760__a.length) {G__37760__a[G__37760__i] = arguments[G__37760__i + 0]; ++G__37760__i;}
  G__37103 = new cljs.core.IndexedSeq(G__37760__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37103);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__37761){
var G__37103 = cljs.core.seq(arglist__37761);
return sci$impl$fns$arity_0__delegate(G__37103);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__37104,G__37105){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37104);

(invoc_array[vararg_idx] = G__37105);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37104,var_args){
var G__37105 = null;
if (arguments.length > 1) {
var G__37763__i = 0, G__37763__a = new Array(arguments.length -  1);
while (G__37763__i < G__37763__a.length) {G__37763__a[G__37763__i] = arguments[G__37763__i + 1]; ++G__37763__i;}
  G__37105 = new cljs.core.IndexedSeq(G__37763__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37104,G__37105);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__37765){
var G__37104 = cljs.core.first(arglist__37765);
var G__37105 = cljs.core.rest(arglist__37765);
return sci$impl$fns$arity_1__delegate(G__37104,G__37105);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__37106,G__37107,G__37108){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37106);

(invoc_array[(1)] = G__37107);

(invoc_array[vararg_idx] = G__37108);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37106,G__37107,var_args){
var G__37108 = null;
if (arguments.length > 2) {
var G__37766__i = 0, G__37766__a = new Array(arguments.length -  2);
while (G__37766__i < G__37766__a.length) {G__37766__a[G__37766__i] = arguments[G__37766__i + 2]; ++G__37766__i;}
  G__37108 = new cljs.core.IndexedSeq(G__37766__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37106,G__37107,G__37108);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__37767){
var G__37106 = cljs.core.first(arglist__37767);
arglist__37767 = cljs.core.next(arglist__37767);
var G__37107 = cljs.core.first(arglist__37767);
var G__37108 = cljs.core.rest(arglist__37767);
return sci$impl$fns$arity_2__delegate(G__37106,G__37107,G__37108);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__37109,G__37110,G__37111,G__37112){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37109);

(invoc_array[(1)] = G__37110);

(invoc_array[(2)] = G__37111);

(invoc_array[vararg_idx] = G__37112);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37109,G__37110,G__37111,var_args){
var G__37112 = null;
if (arguments.length > 3) {
var G__37770__i = 0, G__37770__a = new Array(arguments.length -  3);
while (G__37770__i < G__37770__a.length) {G__37770__a[G__37770__i] = arguments[G__37770__i + 3]; ++G__37770__i;}
  G__37112 = new cljs.core.IndexedSeq(G__37770__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37109,G__37110,G__37111,G__37112);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__37771){
var G__37109 = cljs.core.first(arglist__37771);
arglist__37771 = cljs.core.next(arglist__37771);
var G__37110 = cljs.core.first(arglist__37771);
arglist__37771 = cljs.core.next(arglist__37771);
var G__37111 = cljs.core.first(arglist__37771);
var G__37112 = cljs.core.rest(arglist__37771);
return sci$impl$fns$arity_3__delegate(G__37109,G__37110,G__37111,G__37112);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__37113,G__37114,G__37115,G__37116,G__37117){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37113);

(invoc_array[(1)] = G__37114);

(invoc_array[(2)] = G__37115);

(invoc_array[(3)] = G__37116);

(invoc_array[vararg_idx] = G__37117);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37113,G__37114,G__37115,G__37116,var_args){
var G__37117 = null;
if (arguments.length > 4) {
var G__37772__i = 0, G__37772__a = new Array(arguments.length -  4);
while (G__37772__i < G__37772__a.length) {G__37772__a[G__37772__i] = arguments[G__37772__i + 4]; ++G__37772__i;}
  G__37117 = new cljs.core.IndexedSeq(G__37772__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37113,G__37114,G__37115,G__37116,G__37117);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__37773){
var G__37113 = cljs.core.first(arglist__37773);
arglist__37773 = cljs.core.next(arglist__37773);
var G__37114 = cljs.core.first(arglist__37773);
arglist__37773 = cljs.core.next(arglist__37773);
var G__37115 = cljs.core.first(arglist__37773);
arglist__37773 = cljs.core.next(arglist__37773);
var G__37116 = cljs.core.first(arglist__37773);
var G__37117 = cljs.core.rest(arglist__37773);
return sci$impl$fns$arity_4__delegate(G__37113,G__37114,G__37115,G__37116,G__37117);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__37118,G__37119,G__37120,G__37121,G__37122,G__37123){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37118);

(invoc_array[(1)] = G__37119);

(invoc_array[(2)] = G__37120);

(invoc_array[(3)] = G__37121);

(invoc_array[(4)] = G__37122);

(invoc_array[vararg_idx] = G__37123);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37118,G__37119,G__37120,G__37121,G__37122,var_args){
var G__37123 = null;
if (arguments.length > 5) {
var G__37776__i = 0, G__37776__a = new Array(arguments.length -  5);
while (G__37776__i < G__37776__a.length) {G__37776__a[G__37776__i] = arguments[G__37776__i + 5]; ++G__37776__i;}
  G__37123 = new cljs.core.IndexedSeq(G__37776__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37118,G__37119,G__37120,G__37121,G__37122,G__37123);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__37777){
var G__37118 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37119 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37120 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37121 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37122 = cljs.core.first(arglist__37777);
var G__37123 = cljs.core.rest(arglist__37777);
return sci$impl$fns$arity_5__delegate(G__37118,G__37119,G__37120,G__37121,G__37122,G__37123);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__37124,G__37125,G__37126,G__37127,G__37128,G__37129,G__37130){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37124);

(invoc_array[(1)] = G__37125);

(invoc_array[(2)] = G__37126);

(invoc_array[(3)] = G__37127);

(invoc_array[(4)] = G__37128);

(invoc_array[(5)] = G__37129);

(invoc_array[vararg_idx] = G__37130);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37124,G__37125,G__37126,G__37127,G__37128,G__37129,var_args){
var G__37130 = null;
if (arguments.length > 6) {
var G__37779__i = 0, G__37779__a = new Array(arguments.length -  6);
while (G__37779__i < G__37779__a.length) {G__37779__a[G__37779__i] = arguments[G__37779__i + 6]; ++G__37779__i;}
  G__37130 = new cljs.core.IndexedSeq(G__37779__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37124,G__37125,G__37126,G__37127,G__37128,G__37129,G__37130);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__37780){
var G__37124 = cljs.core.first(arglist__37780);
arglist__37780 = cljs.core.next(arglist__37780);
var G__37125 = cljs.core.first(arglist__37780);
arglist__37780 = cljs.core.next(arglist__37780);
var G__37126 = cljs.core.first(arglist__37780);
arglist__37780 = cljs.core.next(arglist__37780);
var G__37127 = cljs.core.first(arglist__37780);
arglist__37780 = cljs.core.next(arglist__37780);
var G__37128 = cljs.core.first(arglist__37780);
arglist__37780 = cljs.core.next(arglist__37780);
var G__37129 = cljs.core.first(arglist__37780);
var G__37130 = cljs.core.rest(arglist__37780);
return sci$impl$fns$arity_6__delegate(G__37124,G__37125,G__37126,G__37127,G__37128,G__37129,G__37130);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__37131,G__37132,G__37133,G__37134,G__37135,G__37136,G__37137,G__37138){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37131);

(invoc_array[(1)] = G__37132);

(invoc_array[(2)] = G__37133);

(invoc_array[(3)] = G__37134);

(invoc_array[(4)] = G__37135);

(invoc_array[(5)] = G__37136);

(invoc_array[(6)] = G__37137);

(invoc_array[vararg_idx] = G__37138);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37131,G__37132,G__37133,G__37134,G__37135,G__37136,G__37137,var_args){
var G__37138 = null;
if (arguments.length > 7) {
var G__37786__i = 0, G__37786__a = new Array(arguments.length -  7);
while (G__37786__i < G__37786__a.length) {G__37786__a[G__37786__i] = arguments[G__37786__i + 7]; ++G__37786__i;}
  G__37138 = new cljs.core.IndexedSeq(G__37786__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37131,G__37132,G__37133,G__37134,G__37135,G__37136,G__37137,G__37138);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__37787){
var G__37131 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37132 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37133 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37134 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37135 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37136 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37137 = cljs.core.first(arglist__37787);
var G__37138 = cljs.core.rest(arglist__37787);
return sci$impl$fns$arity_7__delegate(G__37131,G__37132,G__37133,G__37134,G__37135,G__37136,G__37137,G__37138);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37139,G__37140,G__37141,G__37142,G__37143,G__37144,G__37145,G__37146,G__37147){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37139);

(invoc_array[(1)] = G__37140);

(invoc_array[(2)] = G__37141);

(invoc_array[(3)] = G__37142);

(invoc_array[(4)] = G__37143);

(invoc_array[(5)] = G__37144);

(invoc_array[(6)] = G__37145);

(invoc_array[(7)] = G__37146);

(invoc_array[vararg_idx] = G__37147);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37139,G__37140,G__37141,G__37142,G__37143,G__37144,G__37145,G__37146,var_args){
var G__37147 = null;
if (arguments.length > 8) {
var G__37792__i = 0, G__37792__a = new Array(arguments.length -  8);
while (G__37792__i < G__37792__a.length) {G__37792__a[G__37792__i] = arguments[G__37792__i + 8]; ++G__37792__i;}
  G__37147 = new cljs.core.IndexedSeq(G__37792__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37139,G__37140,G__37141,G__37142,G__37143,G__37144,G__37145,G__37146,G__37147);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__37794){
var G__37139 = cljs.core.first(arglist__37794);
arglist__37794 = cljs.core.next(arglist__37794);
var G__37140 = cljs.core.first(arglist__37794);
arglist__37794 = cljs.core.next(arglist__37794);
var G__37141 = cljs.core.first(arglist__37794);
arglist__37794 = cljs.core.next(arglist__37794);
var G__37142 = cljs.core.first(arglist__37794);
arglist__37794 = cljs.core.next(arglist__37794);
var G__37143 = cljs.core.first(arglist__37794);
arglist__37794 = cljs.core.next(arglist__37794);
var G__37144 = cljs.core.first(arglist__37794);
arglist__37794 = cljs.core.next(arglist__37794);
var G__37145 = cljs.core.first(arglist__37794);
arglist__37794 = cljs.core.next(arglist__37794);
var G__37146 = cljs.core.first(arglist__37794);
var G__37147 = cljs.core.rest(arglist__37794);
return sci$impl$fns$arity_8__delegate(G__37139,G__37140,G__37141,G__37142,G__37143,G__37144,G__37145,G__37146,G__37147);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37148,G__37149,G__37150,G__37151,G__37152,G__37153,G__37154,G__37155,G__37156,G__37157){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37148);

(invoc_array[(1)] = G__37149);

(invoc_array[(2)] = G__37150);

(invoc_array[(3)] = G__37151);

(invoc_array[(4)] = G__37152);

(invoc_array[(5)] = G__37153);

(invoc_array[(6)] = G__37154);

(invoc_array[(7)] = G__37155);

(invoc_array[(8)] = G__37156);

(invoc_array[vararg_idx] = G__37157);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37148,G__37149,G__37150,G__37151,G__37152,G__37153,G__37154,G__37155,G__37156,var_args){
var G__37157 = null;
if (arguments.length > 9) {
var G__37800__i = 0, G__37800__a = new Array(arguments.length -  9);
while (G__37800__i < G__37800__a.length) {G__37800__a[G__37800__i] = arguments[G__37800__i + 9]; ++G__37800__i;}
  G__37157 = new cljs.core.IndexedSeq(G__37800__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37148,G__37149,G__37150,G__37151,G__37152,G__37153,G__37154,G__37155,G__37156,G__37157);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__37801){
var G__37148 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37149 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37150 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37151 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37152 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37153 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37154 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37155 = cljs.core.first(arglist__37801);
arglist__37801 = cljs.core.next(arglist__37801);
var G__37156 = cljs.core.first(arglist__37801);
var G__37157 = cljs.core.rest(arglist__37801);
return sci$impl$fns$arity_9__delegate(G__37148,G__37149,G__37150,G__37151,G__37152,G__37153,G__37154,G__37155,G__37156,G__37157);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__37162,G__37163,G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,G__37172){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37162);

(invoc_array[(1)] = G__37163);

(invoc_array[(2)] = G__37164);

(invoc_array[(3)] = G__37165);

(invoc_array[(4)] = G__37166);

(invoc_array[(5)] = G__37167);

(invoc_array[(6)] = G__37168);

(invoc_array[(7)] = G__37169);

(invoc_array[(8)] = G__37170);

(invoc_array[(9)] = G__37171);

(invoc_array[vararg_idx] = G__37172);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37162,G__37163,G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,var_args){
var G__37172 = null;
if (arguments.length > 10) {
var G__37804__i = 0, G__37804__a = new Array(arguments.length -  10);
while (G__37804__i < G__37804__a.length) {G__37804__a[G__37804__i] = arguments[G__37804__i + 10]; ++G__37804__i;}
  G__37172 = new cljs.core.IndexedSeq(G__37804__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37162,G__37163,G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,G__37172);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__37805){
var G__37162 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37163 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37164 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37165 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37166 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37167 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37168 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37169 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37170 = cljs.core.first(arglist__37805);
arglist__37805 = cljs.core.next(arglist__37805);
var G__37171 = cljs.core.first(arglist__37805);
var G__37172 = cljs.core.rest(arglist__37805);
return sci$impl$fns$arity_10__delegate(G__37162,G__37163,G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,G__37172);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__37173,G__37174,G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,G__37184){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37173);

(invoc_array[(1)] = G__37174);

(invoc_array[(2)] = G__37175);

(invoc_array[(3)] = G__37176);

(invoc_array[(4)] = G__37177);

(invoc_array[(5)] = G__37178);

(invoc_array[(6)] = G__37179);

(invoc_array[(7)] = G__37180);

(invoc_array[(8)] = G__37181);

(invoc_array[(9)] = G__37182);

(invoc_array[(10)] = G__37183);

(invoc_array[vararg_idx] = G__37184);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37173,G__37174,G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,var_args){
var G__37184 = null;
if (arguments.length > 11) {
var G__37811__i = 0, G__37811__a = new Array(arguments.length -  11);
while (G__37811__i < G__37811__a.length) {G__37811__a[G__37811__i] = arguments[G__37811__i + 11]; ++G__37811__i;}
  G__37184 = new cljs.core.IndexedSeq(G__37811__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37173,G__37174,G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,G__37184);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__37812){
var G__37173 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37174 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37175 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37176 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37177 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37178 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37179 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37180 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37181 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37182 = cljs.core.first(arglist__37812);
arglist__37812 = cljs.core.next(arglist__37812);
var G__37183 = cljs.core.first(arglist__37812);
var G__37184 = cljs.core.rest(arglist__37812);
return sci$impl$fns$arity_11__delegate(G__37173,G__37174,G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,G__37184);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__37185,G__37186,G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,G__37197){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37185);

(invoc_array[(1)] = G__37186);

(invoc_array[(2)] = G__37187);

(invoc_array[(3)] = G__37188);

(invoc_array[(4)] = G__37189);

(invoc_array[(5)] = G__37190);

(invoc_array[(6)] = G__37191);

(invoc_array[(7)] = G__37192);

(invoc_array[(8)] = G__37193);

(invoc_array[(9)] = G__37194);

(invoc_array[(10)] = G__37195);

(invoc_array[(11)] = G__37196);

(invoc_array[vararg_idx] = G__37197);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37185,G__37186,G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,var_args){
var G__37197 = null;
if (arguments.length > 12) {
var G__37816__i = 0, G__37816__a = new Array(arguments.length -  12);
while (G__37816__i < G__37816__a.length) {G__37816__a[G__37816__i] = arguments[G__37816__i + 12]; ++G__37816__i;}
  G__37197 = new cljs.core.IndexedSeq(G__37816__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37185,G__37186,G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,G__37197);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__37817){
var G__37185 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37186 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37187 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37188 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37189 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37190 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37191 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37192 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37193 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37194 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37195 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37196 = cljs.core.first(arglist__37817);
var G__37197 = cljs.core.rest(arglist__37817);
return sci$impl$fns$arity_12__delegate(G__37185,G__37186,G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,G__37197);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37198,G__37199,G__37200,G__37201,G__37202,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37198);

(invoc_array[(1)] = G__37199);

(invoc_array[(2)] = G__37200);

(invoc_array[(3)] = G__37201);

(invoc_array[(4)] = G__37202);

(invoc_array[(5)] = G__37203);

(invoc_array[(6)] = G__37204);

(invoc_array[(7)] = G__37205);

(invoc_array[(8)] = G__37206);

(invoc_array[(9)] = G__37207);

(invoc_array[(10)] = G__37208);

(invoc_array[(11)] = G__37209);

(invoc_array[(12)] = G__37210);

(invoc_array[vararg_idx] = G__37211);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37198,G__37199,G__37200,G__37201,G__37202,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,var_args){
var G__37211 = null;
if (arguments.length > 13) {
var G__37828__i = 0, G__37828__a = new Array(arguments.length -  13);
while (G__37828__i < G__37828__a.length) {G__37828__a[G__37828__i] = arguments[G__37828__i + 13]; ++G__37828__i;}
  G__37211 = new cljs.core.IndexedSeq(G__37828__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37198,G__37199,G__37200,G__37201,G__37202,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__37830){
var G__37198 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37199 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37200 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37201 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37202 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37203 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37204 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37205 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37206 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37207 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37208 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37209 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37210 = cljs.core.first(arglist__37830);
var G__37211 = cljs.core.rest(arglist__37830);
return sci$impl$fns$arity_13__delegate(G__37198,G__37199,G__37200,G__37201,G__37202,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37214,G__37215,G__37216,G__37217,G__37218,G__37219,G__37220,G__37221,G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37214);

(invoc_array[(1)] = G__37215);

(invoc_array[(2)] = G__37216);

(invoc_array[(3)] = G__37217);

(invoc_array[(4)] = G__37218);

(invoc_array[(5)] = G__37219);

(invoc_array[(6)] = G__37220);

(invoc_array[(7)] = G__37221);

(invoc_array[(8)] = G__37222);

(invoc_array[(9)] = G__37223);

(invoc_array[(10)] = G__37224);

(invoc_array[(11)] = G__37225);

(invoc_array[(12)] = G__37226);

(invoc_array[(13)] = G__37227);

(invoc_array[vararg_idx] = G__37228);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37214,G__37215,G__37216,G__37217,G__37218,G__37219,G__37220,G__37221,G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,var_args){
var G__37228 = null;
if (arguments.length > 14) {
var G__37835__i = 0, G__37835__a = new Array(arguments.length -  14);
while (G__37835__i < G__37835__a.length) {G__37835__a[G__37835__i] = arguments[G__37835__i + 14]; ++G__37835__i;}
  G__37228 = new cljs.core.IndexedSeq(G__37835__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37214,G__37215,G__37216,G__37217,G__37218,G__37219,G__37220,G__37221,G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__37836){
var G__37214 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37215 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37216 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37217 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37218 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37219 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37220 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37221 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37222 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37223 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37224 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37225 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37226 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37227 = cljs.core.first(arglist__37836);
var G__37228 = cljs.core.rest(arglist__37836);
return sci$impl$fns$arity_14__delegate(G__37214,G__37215,G__37216,G__37217,G__37218,G__37219,G__37220,G__37221,G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37249,G__37250,G__37251,G__37252,G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,G__37264){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37249);

(invoc_array[(1)] = G__37250);

(invoc_array[(2)] = G__37251);

(invoc_array[(3)] = G__37252);

(invoc_array[(4)] = G__37253);

(invoc_array[(5)] = G__37254);

(invoc_array[(6)] = G__37255);

(invoc_array[(7)] = G__37256);

(invoc_array[(8)] = G__37257);

(invoc_array[(9)] = G__37258);

(invoc_array[(10)] = G__37259);

(invoc_array[(11)] = G__37260);

(invoc_array[(12)] = G__37261);

(invoc_array[(13)] = G__37262);

(invoc_array[(14)] = G__37263);

(invoc_array[vararg_idx] = G__37264);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37249,G__37250,G__37251,G__37252,G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,var_args){
var G__37264 = null;
if (arguments.length > 15) {
var G__37837__i = 0, G__37837__a = new Array(arguments.length -  15);
while (G__37837__i < G__37837__a.length) {G__37837__a[G__37837__i] = arguments[G__37837__i + 15]; ++G__37837__i;}
  G__37264 = new cljs.core.IndexedSeq(G__37837__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37249,G__37250,G__37251,G__37252,G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,G__37264);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__37838){
var G__37249 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37250 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37251 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37252 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37253 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37254 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37255 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37256 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37257 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37258 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37259 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37260 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37261 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37262 = cljs.core.first(arglist__37838);
arglist__37838 = cljs.core.next(arglist__37838);
var G__37263 = cljs.core.first(arglist__37838);
var G__37264 = cljs.core.rest(arglist__37838);
return sci$impl$fns$arity_15__delegate(G__37249,G__37250,G__37251,G__37252,G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,G__37264);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37265,G__37266,G__37267,G__37268,G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,G__37281){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37265);

(invoc_array[(1)] = G__37266);

(invoc_array[(2)] = G__37267);

(invoc_array[(3)] = G__37268);

(invoc_array[(4)] = G__37269);

(invoc_array[(5)] = G__37270);

(invoc_array[(6)] = G__37271);

(invoc_array[(7)] = G__37272);

(invoc_array[(8)] = G__37273);

(invoc_array[(9)] = G__37274);

(invoc_array[(10)] = G__37275);

(invoc_array[(11)] = G__37276);

(invoc_array[(12)] = G__37277);

(invoc_array[(13)] = G__37278);

(invoc_array[(14)] = G__37279);

(invoc_array[(15)] = G__37280);

(invoc_array[vararg_idx] = G__37281);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37265,G__37266,G__37267,G__37268,G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,var_args){
var G__37281 = null;
if (arguments.length > 16) {
var G__37845__i = 0, G__37845__a = new Array(arguments.length -  16);
while (G__37845__i < G__37845__a.length) {G__37845__a[G__37845__i] = arguments[G__37845__i + 16]; ++G__37845__i;}
  G__37281 = new cljs.core.IndexedSeq(G__37845__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37265,G__37266,G__37267,G__37268,G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,G__37281);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__37847){
var G__37265 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37266 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37267 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37268 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37269 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37270 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37271 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37272 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37273 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37274 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37275 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37276 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37277 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37278 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37279 = cljs.core.first(arglist__37847);
arglist__37847 = cljs.core.next(arglist__37847);
var G__37280 = cljs.core.first(arglist__37847);
var G__37281 = cljs.core.rest(arglist__37847);
return sci$impl$fns$arity_16__delegate(G__37265,G__37266,G__37267,G__37268,G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,G__37281);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298,G__37299,G__37300,G__37301,G__37302,G__37303){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37286);

(invoc_array[(1)] = G__37287);

(invoc_array[(2)] = G__37288);

(invoc_array[(3)] = G__37289);

(invoc_array[(4)] = G__37290);

(invoc_array[(5)] = G__37291);

(invoc_array[(6)] = G__37292);

(invoc_array[(7)] = G__37293);

(invoc_array[(8)] = G__37294);

(invoc_array[(9)] = G__37295);

(invoc_array[(10)] = G__37296);

(invoc_array[(11)] = G__37297);

(invoc_array[(12)] = G__37298);

(invoc_array[(13)] = G__37299);

(invoc_array[(14)] = G__37300);

(invoc_array[(15)] = G__37301);

(invoc_array[(16)] = G__37302);

(invoc_array[vararg_idx] = G__37303);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298,G__37299,G__37300,G__37301,G__37302,var_args){
var G__37303 = null;
if (arguments.length > 17) {
var G__37849__i = 0, G__37849__a = new Array(arguments.length -  17);
while (G__37849__i < G__37849__a.length) {G__37849__a[G__37849__i] = arguments[G__37849__i + 17]; ++G__37849__i;}
  G__37303 = new cljs.core.IndexedSeq(G__37849__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298,G__37299,G__37300,G__37301,G__37302,G__37303);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__37850){
var G__37286 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37287 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37288 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37289 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37290 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37291 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37292 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37293 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37294 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37295 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37296 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37297 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37298 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37299 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37300 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37301 = cljs.core.first(arglist__37850);
arglist__37850 = cljs.core.next(arglist__37850);
var G__37302 = cljs.core.first(arglist__37850);
var G__37303 = cljs.core.rest(arglist__37850);
return sci$impl$fns$arity_17__delegate(G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298,G__37299,G__37300,G__37301,G__37302,G__37303);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37304,G__37305,G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,G__37322){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37304);

(invoc_array[(1)] = G__37305);

(invoc_array[(2)] = G__37306);

(invoc_array[(3)] = G__37307);

(invoc_array[(4)] = G__37308);

(invoc_array[(5)] = G__37309);

(invoc_array[(6)] = G__37310);

(invoc_array[(7)] = G__37311);

(invoc_array[(8)] = G__37312);

(invoc_array[(9)] = G__37313);

(invoc_array[(10)] = G__37314);

(invoc_array[(11)] = G__37315);

(invoc_array[(12)] = G__37316);

(invoc_array[(13)] = G__37317);

(invoc_array[(14)] = G__37318);

(invoc_array[(15)] = G__37319);

(invoc_array[(16)] = G__37320);

(invoc_array[(17)] = G__37321);

(invoc_array[vararg_idx] = G__37322);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37304,G__37305,G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,var_args){
var G__37322 = null;
if (arguments.length > 18) {
var G__37858__i = 0, G__37858__a = new Array(arguments.length -  18);
while (G__37858__i < G__37858__a.length) {G__37858__a[G__37858__i] = arguments[G__37858__i + 18]; ++G__37858__i;}
  G__37322 = new cljs.core.IndexedSeq(G__37858__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37304,G__37305,G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,G__37322);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__37861){
var G__37304 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37305 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37306 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37307 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37308 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37309 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37310 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37311 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37312 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37313 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37314 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37315 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37316 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37317 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37318 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37319 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37320 = cljs.core.first(arglist__37861);
arglist__37861 = cljs.core.next(arglist__37861);
var G__37321 = cljs.core.first(arglist__37861);
var G__37322 = cljs.core.rest(arglist__37861);
return sci$impl$fns$arity_18__delegate(G__37304,G__37305,G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,G__37322);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__37325,G__37326,G__37327,G__37328,G__37329,G__37330,G__37331,G__37332,G__37333,G__37334,G__37335,G__37336,G__37337,G__37338,G__37339,G__37340,G__37341,G__37342,G__37343,G__37344){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37325);

(invoc_array[(1)] = G__37326);

(invoc_array[(2)] = G__37327);

(invoc_array[(3)] = G__37328);

(invoc_array[(4)] = G__37329);

(invoc_array[(5)] = G__37330);

(invoc_array[(6)] = G__37331);

(invoc_array[(7)] = G__37332);

(invoc_array[(8)] = G__37333);

(invoc_array[(9)] = G__37334);

(invoc_array[(10)] = G__37335);

(invoc_array[(11)] = G__37336);

(invoc_array[(12)] = G__37337);

(invoc_array[(13)] = G__37338);

(invoc_array[(14)] = G__37339);

(invoc_array[(15)] = G__37340);

(invoc_array[(16)] = G__37341);

(invoc_array[(17)] = G__37342);

(invoc_array[(18)] = G__37343);

(invoc_array[vararg_idx] = G__37344);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37325,G__37326,G__37327,G__37328,G__37329,G__37330,G__37331,G__37332,G__37333,G__37334,G__37335,G__37336,G__37337,G__37338,G__37339,G__37340,G__37341,G__37342,G__37343,var_args){
var G__37344 = null;
if (arguments.length > 19) {
var G__37867__i = 0, G__37867__a = new Array(arguments.length -  19);
while (G__37867__i < G__37867__a.length) {G__37867__a[G__37867__i] = arguments[G__37867__i + 19]; ++G__37867__i;}
  G__37344 = new cljs.core.IndexedSeq(G__37867__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37325,G__37326,G__37327,G__37328,G__37329,G__37330,G__37331,G__37332,G__37333,G__37334,G__37335,G__37336,G__37337,G__37338,G__37339,G__37340,G__37341,G__37342,G__37343,G__37344);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__37869){
var G__37325 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37326 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37327 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37328 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37329 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37330 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37331 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37332 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37333 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37334 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37335 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37336 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37337 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37338 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37339 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37340 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37341 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37342 = cljs.core.first(arglist__37869);
arglist__37869 = cljs.core.next(arglist__37869);
var G__37343 = cljs.core.first(arglist__37869);
var G__37344 = cljs.core.rest(arglist__37869);
return sci$impl$fns$arity_19__delegate(G__37325,G__37326,G__37327,G__37328,G__37329,G__37330,G__37331,G__37332,G__37333,G__37334,G__37335,G__37336,G__37337,G__37338,G__37339,G__37340,G__37341,G__37342,G__37343,G__37344);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__37345,G__37346,G__37347,G__37348,G__37349,G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37345);

(invoc_array[(1)] = G__37346);

(invoc_array[(2)] = G__37347);

(invoc_array[(3)] = G__37348);

(invoc_array[(4)] = G__37349);

(invoc_array[(5)] = G__37350);

(invoc_array[(6)] = G__37351);

(invoc_array[(7)] = G__37352);

(invoc_array[(8)] = G__37353);

(invoc_array[(9)] = G__37354);

(invoc_array[(10)] = G__37355);

(invoc_array[(11)] = G__37356);

(invoc_array[(12)] = G__37357);

(invoc_array[(13)] = G__37358);

(invoc_array[(14)] = G__37359);

(invoc_array[(15)] = G__37360);

(invoc_array[(16)] = G__37361);

(invoc_array[(17)] = G__37362);

(invoc_array[(18)] = G__37363);

(invoc_array[(19)] = G__37364);

(invoc_array[vararg_idx] = G__37365);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37345,G__37346,G__37347,G__37348,G__37349,G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,var_args){
var G__37365 = null;
if (arguments.length > 20) {
var G__37870__i = 0, G__37870__a = new Array(arguments.length -  20);
while (G__37870__i < G__37870__a.length) {G__37870__a[G__37870__i] = arguments[G__37870__i + 20]; ++G__37870__i;}
  G__37365 = new cljs.core.IndexedSeq(G__37870__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37345,G__37346,G__37347,G__37348,G__37349,G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__37871){
var G__37345 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37346 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37347 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37348 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37349 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37350 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37351 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37352 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37353 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37354 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37355 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37356 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37357 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37358 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37359 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37360 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37361 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37362 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37363 = cljs.core.first(arglist__37871);
arglist__37871 = cljs.core.next(arglist__37871);
var G__37364 = cljs.core.first(arglist__37871);
var G__37365 = cljs.core.rest(arglist__37871);
return sci$impl$fns$arity_20__delegate(G__37345,G__37346,G__37347,G__37348,G__37349,G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37102)].join('')));

}
})():(function (){var G__37371 = fixed_arity;
switch (G__37371) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36306__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36306__auto__)){
continue;
} else {
return ret__36306__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37372){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37372);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37373,G__37374){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37373);

(invoc_array[(1)] = G__37374);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37375,G__37376,G__37377){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37375);

(invoc_array[(1)] = G__37376);

(invoc_array[(2)] = G__37377);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37381,G__37382,G__37383,G__37384){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37381);

(invoc_array[(1)] = G__37382);

(invoc_array[(2)] = G__37383);

(invoc_array[(3)] = G__37384);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37385,G__37386,G__37387,G__37388,G__37389){
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

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37390,G__37391,G__37392,G__37393,G__37394,G__37395){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37390);

(invoc_array[(1)] = G__37391);

(invoc_array[(2)] = G__37392);

(invoc_array[(3)] = G__37393);

(invoc_array[(4)] = G__37394);

(invoc_array[(5)] = G__37395);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37396,G__37397,G__37398,G__37399,G__37400,G__37401,G__37402){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37396);

(invoc_array[(1)] = G__37397);

(invoc_array[(2)] = G__37398);

(invoc_array[(3)] = G__37399);

(invoc_array[(4)] = G__37400);

(invoc_array[(5)] = G__37401);

(invoc_array[(6)] = G__37402);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37410,G__37411,G__37412,G__37413,G__37414,G__37415,G__37416,G__37417){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37410);

(invoc_array[(1)] = G__37411);

(invoc_array[(2)] = G__37412);

(invoc_array[(3)] = G__37413);

(invoc_array[(4)] = G__37414);

(invoc_array[(5)] = G__37415);

(invoc_array[(6)] = G__37416);

(invoc_array[(7)] = G__37417);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37420,G__37421,G__37422,G__37423,G__37424,G__37425,G__37426,G__37427,G__37428){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37420);

(invoc_array[(1)] = G__37421);

(invoc_array[(2)] = G__37422);

(invoc_array[(3)] = G__37423);

(invoc_array[(4)] = G__37424);

(invoc_array[(5)] = G__37425);

(invoc_array[(6)] = G__37426);

(invoc_array[(7)] = G__37427);

(invoc_array[(8)] = G__37428);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__37433,G__37434,G__37435,G__37436,G__37437,G__37438,G__37439,G__37440,G__37441,G__37442){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37433);

(invoc_array[(1)] = G__37434);

(invoc_array[(2)] = G__37435);

(invoc_array[(3)] = G__37436);

(invoc_array[(4)] = G__37437);

(invoc_array[(5)] = G__37438);

(invoc_array[(6)] = G__37439);

(invoc_array[(7)] = G__37440);

(invoc_array[(8)] = G__37441);

(invoc_array[(9)] = G__37442);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37449,G__37450,G__37451,G__37452,G__37453,G__37454,G__37455,G__37456,G__37457,G__37458,G__37459){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37449);

(invoc_array[(1)] = G__37450);

(invoc_array[(2)] = G__37451);

(invoc_array[(3)] = G__37452);

(invoc_array[(4)] = G__37453);

(invoc_array[(5)] = G__37454);

(invoc_array[(6)] = G__37455);

(invoc_array[(7)] = G__37456);

(invoc_array[(8)] = G__37457);

(invoc_array[(9)] = G__37458);

(invoc_array[(10)] = G__37459);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37460,G__37461,G__37462,G__37463,G__37464,G__37465,G__37466,G__37467,G__37468,G__37469,G__37470,G__37471){
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

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37476,G__37477,G__37478,G__37479,G__37480,G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488){
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

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37493,G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506){
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

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37507,G__37508,G__37509,G__37510,G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37507);

(invoc_array[(1)] = G__37508);

(invoc_array[(2)] = G__37509);

(invoc_array[(3)] = G__37510);

(invoc_array[(4)] = G__37511);

(invoc_array[(5)] = G__37512);

(invoc_array[(6)] = G__37513);

(invoc_array[(7)] = G__37514);

(invoc_array[(8)] = G__37515);

(invoc_array[(9)] = G__37516);

(invoc_array[(10)] = G__37517);

(invoc_array[(11)] = G__37518);

(invoc_array[(12)] = G__37519);

(invoc_array[(13)] = G__37520);

(invoc_array[(14)] = G__37521);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37522,G__37523,G__37524,G__37525,G__37526,G__37527,G__37528,G__37529,G__37530,G__37531,G__37532,G__37533,G__37534,G__37535,G__37536,G__37537){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37522);

(invoc_array[(1)] = G__37523);

(invoc_array[(2)] = G__37524);

(invoc_array[(3)] = G__37525);

(invoc_array[(4)] = G__37526);

(invoc_array[(5)] = G__37527);

(invoc_array[(6)] = G__37528);

(invoc_array[(7)] = G__37529);

(invoc_array[(8)] = G__37530);

(invoc_array[(9)] = G__37531);

(invoc_array[(10)] = G__37532);

(invoc_array[(11)] = G__37533);

(invoc_array[(12)] = G__37534);

(invoc_array[(13)] = G__37535);

(invoc_array[(14)] = G__37536);

(invoc_array[(15)] = G__37537);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549,G__37550,G__37551,G__37552,G__37553,G__37554){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37538);

(invoc_array[(1)] = G__37539);

(invoc_array[(2)] = G__37540);

(invoc_array[(3)] = G__37541);

(invoc_array[(4)] = G__37542);

(invoc_array[(5)] = G__37543);

(invoc_array[(6)] = G__37544);

(invoc_array[(7)] = G__37545);

(invoc_array[(8)] = G__37546);

(invoc_array[(9)] = G__37547);

(invoc_array[(10)] = G__37548);

(invoc_array[(11)] = G__37549);

(invoc_array[(12)] = G__37550);

(invoc_array[(13)] = G__37551);

(invoc_array[(14)] = G__37552);

(invoc_array[(15)] = G__37553);

(invoc_array[(16)] = G__37554);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37567,G__37568,G__37569,G__37570,G__37571,G__37572,G__37573,G__37574,G__37575,G__37576,G__37577,G__37578,G__37579,G__37580,G__37581,G__37582,G__37583,G__37584){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37567);

(invoc_array[(1)] = G__37568);

(invoc_array[(2)] = G__37569);

(invoc_array[(3)] = G__37570);

(invoc_array[(4)] = G__37571);

(invoc_array[(5)] = G__37572);

(invoc_array[(6)] = G__37573);

(invoc_array[(7)] = G__37574);

(invoc_array[(8)] = G__37575);

(invoc_array[(9)] = G__37576);

(invoc_array[(10)] = G__37577);

(invoc_array[(11)] = G__37578);

(invoc_array[(12)] = G__37579);

(invoc_array[(13)] = G__37580);

(invoc_array[(14)] = G__37581);

(invoc_array[(15)] = G__37582);

(invoc_array[(16)] = G__37583);

(invoc_array[(17)] = G__37584);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594,G__37595,G__37596,G__37597,G__37598,G__37599,G__37600,G__37601,G__37602,G__37603){
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

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37604,G__37605,G__37606,G__37607,G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37604);

(invoc_array[(1)] = G__37605);

(invoc_array[(2)] = G__37606);

(invoc_array[(3)] = G__37607);

(invoc_array[(4)] = G__37608);

(invoc_array[(5)] = G__37609);

(invoc_array[(6)] = G__37610);

(invoc_array[(7)] = G__37611);

(invoc_array[(8)] = G__37612);

(invoc_array[(9)] = G__37613);

(invoc_array[(10)] = G__37614);

(invoc_array[(11)] = G__37615);

(invoc_array[(12)] = G__37616);

(invoc_array[(13)] = G__37617);

(invoc_array[(14)] = G__37618);

(invoc_array[(15)] = G__37619);

(invoc_array[(16)] = G__37620);

(invoc_array[(17)] = G__37621);

(invoc_array[(18)] = G__37622);

(invoc_array[(19)] = G__37623);

while(true){
var ret__36307__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36307__auto__)){
continue;
} else {
return ret__36307__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37371)].join('')));

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
var G__37908 = cljs.core.next(params__$1);
var G__37909 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__37910 = lets;
params__$1 = G__37908;
new_params = G__37909;
lets = G__37910;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__37911 = cljs.core.next(params__$1);
var G__37912 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__37913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__37911;
new_params = G__37912;
lets = G__37913;
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
var len__5749__auto___37916 = arguments.length;
var i__5750__auto___37918 = (0);
while(true){
if((i__5750__auto___37918 < len__5749__auto___37916)){
args__5755__auto__.push((arguments[i__5750__auto___37918]));

var G__37920 = (i__5750__auto___37918 + (1));
i__5750__auto___37918 = G__37920;
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

var vec__37670 = sig;
var seq__37671 = cljs.core.seq(vec__37670);
var first__37672 = cljs.core.first(seq__37671);
var seq__37671__$1 = cljs.core.next(seq__37671);
var params = first__37672;
var body = seq__37671__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq37651){
var G__37652 = cljs.core.first(seq37651);
var seq37651__$1 = cljs.core.next(seq37651);
var G__37653 = cljs.core.first(seq37651__$1);
var seq37651__$2 = cljs.core.next(seq37651__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37652,G__37653,seq37651__$2);
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
var G__37921 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__37922 = cljs.core.next(fdecls);
ret = G__37921;
fdecls = G__37922;
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
var len__5749__auto___37923 = arguments.length;
var i__5750__auto___37924 = (0);
while(true){
if((i__5750__auto___37924 < len__5749__auto___37923)){
args__5755__auto__.push((arguments[i__5750__auto___37924]));

var G__37925 = (i__5750__auto___37924 + (1));
i__5750__auto___37924 = G__37925;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq37698){
var G__37699 = cljs.core.first(seq37698);
var seq37698__$1 = cljs.core.next(seq37698);
var G__37700 = cljs.core.first(seq37698__$1);
var seq37698__$2 = cljs.core.next(seq37698__$1);
var G__37701 = cljs.core.first(seq37698__$2);
var seq37698__$3 = cljs.core.next(seq37698__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37699,G__37700,G__37701,seq37698__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37932 = arguments.length;
var i__5750__auto___37933 = (0);
while(true){
if((i__5750__auto___37933 < len__5749__auto___37932)){
args__5755__auto__.push((arguments[i__5750__auto___37933]));

var G__37934 = (i__5750__auto___37933 + (1));
i__5750__auto___37933 = G__37934;
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
var G__37935 = cljs.core.cons(f,p);
var G__37936 = cljs.core.next(args__$1);
p = G__37935;
args__$1 = G__37936;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__37937 = cljs.core.cons(f,p);
var G__37938 = cljs.core.next(args__$1);
p = G__37937;
args__$1 = G__37938;
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
var G__37939 = cljs.core.next(fd);
fd = G__37939;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__37940 = cljs.core.next(fd);
fd = G__37940;
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
var G__37941 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__37942 = cljs.core.next(ds);
acc = G__37941;
ds = G__37942;
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
var G__37944 = cljs.core.next(p);
var G__37945 = cljs.core.cons(cljs.core.first(p),d);
p = G__37944;
d = G__37945;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq37723){
var G__37724 = cljs.core.first(seq37723);
var seq37723__$1 = cljs.core.next(seq37723);
var G__37725 = cljs.core.first(seq37723__$1);
var seq37723__$2 = cljs.core.next(seq37723__$1);
var G__37726 = cljs.core.first(seq37723__$2);
var seq37723__$3 = cljs.core.next(seq37723__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37724,G__37725,G__37726,seq37723__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
