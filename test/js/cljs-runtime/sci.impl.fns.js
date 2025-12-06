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
var ret__36300__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36300__auto__)){
continue;
} else {
return ret__36300__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__37103 = null;
if (arguments.length > 0) {
var G__37756__i = 0, G__37756__a = new Array(arguments.length -  0);
while (G__37756__i < G__37756__a.length) {G__37756__a[G__37756__i] = arguments[G__37756__i + 0]; ++G__37756__i;}
  G__37103 = new cljs.core.IndexedSeq(G__37756__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__37103);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__37757){
var G__37103 = cljs.core.seq(arglist__37757);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__37104,var_args){
var G__37105 = null;
if (arguments.length > 1) {
var G__37758__i = 0, G__37758__a = new Array(arguments.length -  1);
while (G__37758__i < G__37758__a.length) {G__37758__a[G__37758__i] = arguments[G__37758__i + 1]; ++G__37758__i;}
  G__37105 = new cljs.core.IndexedSeq(G__37758__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__37104,G__37105);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__37759){
var G__37104 = cljs.core.first(arglist__37759);
var G__37105 = cljs.core.rest(arglist__37759);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__37106,G__37107,var_args){
var G__37108 = null;
if (arguments.length > 2) {
var G__37760__i = 0, G__37760__a = new Array(arguments.length -  2);
while (G__37760__i < G__37760__a.length) {G__37760__a[G__37760__i] = arguments[G__37760__i + 2]; ++G__37760__i;}
  G__37108 = new cljs.core.IndexedSeq(G__37760__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__37106,G__37107,G__37108);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__37761){
var G__37106 = cljs.core.first(arglist__37761);
arglist__37761 = cljs.core.next(arglist__37761);
var G__37107 = cljs.core.first(arglist__37761);
var G__37108 = cljs.core.rest(arglist__37761);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__37109,G__37110,G__37111,var_args){
var G__37112 = null;
if (arguments.length > 3) {
var G__37764__i = 0, G__37764__a = new Array(arguments.length -  3);
while (G__37764__i < G__37764__a.length) {G__37764__a[G__37764__i] = arguments[G__37764__i + 3]; ++G__37764__i;}
  G__37112 = new cljs.core.IndexedSeq(G__37764__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__37109,G__37110,G__37111,G__37112);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__37765){
var G__37109 = cljs.core.first(arglist__37765);
arglist__37765 = cljs.core.next(arglist__37765);
var G__37110 = cljs.core.first(arglist__37765);
arglist__37765 = cljs.core.next(arglist__37765);
var G__37111 = cljs.core.first(arglist__37765);
var G__37112 = cljs.core.rest(arglist__37765);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__37113,G__37114,G__37115,G__37116,var_args){
var G__37117 = null;
if (arguments.length > 4) {
var G__37768__i = 0, G__37768__a = new Array(arguments.length -  4);
while (G__37768__i < G__37768__a.length) {G__37768__a[G__37768__i] = arguments[G__37768__i + 4]; ++G__37768__i;}
  G__37117 = new cljs.core.IndexedSeq(G__37768__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__37113,G__37114,G__37115,G__37116,G__37117);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__37769){
var G__37113 = cljs.core.first(arglist__37769);
arglist__37769 = cljs.core.next(arglist__37769);
var G__37114 = cljs.core.first(arglist__37769);
arglist__37769 = cljs.core.next(arglist__37769);
var G__37115 = cljs.core.first(arglist__37769);
arglist__37769 = cljs.core.next(arglist__37769);
var G__37116 = cljs.core.first(arglist__37769);
var G__37117 = cljs.core.rest(arglist__37769);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__37118,G__37119,G__37120,G__37121,G__37122,var_args){
var G__37123 = null;
if (arguments.length > 5) {
var G__37773__i = 0, G__37773__a = new Array(arguments.length -  5);
while (G__37773__i < G__37773__a.length) {G__37773__a[G__37773__i] = arguments[G__37773__i + 5]; ++G__37773__i;}
  G__37123 = new cljs.core.IndexedSeq(G__37773__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__37118,G__37119,G__37120,G__37121,G__37122,G__37123);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__37774){
var G__37118 = cljs.core.first(arglist__37774);
arglist__37774 = cljs.core.next(arglist__37774);
var G__37119 = cljs.core.first(arglist__37774);
arglist__37774 = cljs.core.next(arglist__37774);
var G__37120 = cljs.core.first(arglist__37774);
arglist__37774 = cljs.core.next(arglist__37774);
var G__37121 = cljs.core.first(arglist__37774);
arglist__37774 = cljs.core.next(arglist__37774);
var G__37122 = cljs.core.first(arglist__37774);
var G__37123 = cljs.core.rest(arglist__37774);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__37124,G__37125,G__37126,G__37127,G__37128,G__37129,var_args){
var G__37130 = null;
if (arguments.length > 6) {
var G__37776__i = 0, G__37776__a = new Array(arguments.length -  6);
while (G__37776__i < G__37776__a.length) {G__37776__a[G__37776__i] = arguments[G__37776__i + 6]; ++G__37776__i;}
  G__37130 = new cljs.core.IndexedSeq(G__37776__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__37124,G__37125,G__37126,G__37127,G__37128,G__37129,G__37130);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__37777){
var G__37124 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37125 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37126 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37127 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37128 = cljs.core.first(arglist__37777);
arglist__37777 = cljs.core.next(arglist__37777);
var G__37129 = cljs.core.first(arglist__37777);
var G__37130 = cljs.core.rest(arglist__37777);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__37131,G__37132,G__37133,G__37134,G__37135,G__37136,G__37137,var_args){
var G__37138 = null;
if (arguments.length > 7) {
var G__37778__i = 0, G__37778__a = new Array(arguments.length -  7);
while (G__37778__i < G__37778__a.length) {G__37778__a[G__37778__i] = arguments[G__37778__i + 7]; ++G__37778__i;}
  G__37138 = new cljs.core.IndexedSeq(G__37778__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__37131,G__37132,G__37133,G__37134,G__37135,G__37136,G__37137,G__37138);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__37779){
var G__37131 = cljs.core.first(arglist__37779);
arglist__37779 = cljs.core.next(arglist__37779);
var G__37132 = cljs.core.first(arglist__37779);
arglist__37779 = cljs.core.next(arglist__37779);
var G__37133 = cljs.core.first(arglist__37779);
arglist__37779 = cljs.core.next(arglist__37779);
var G__37134 = cljs.core.first(arglist__37779);
arglist__37779 = cljs.core.next(arglist__37779);
var G__37135 = cljs.core.first(arglist__37779);
arglist__37779 = cljs.core.next(arglist__37779);
var G__37136 = cljs.core.first(arglist__37779);
arglist__37779 = cljs.core.next(arglist__37779);
var G__37137 = cljs.core.first(arglist__37779);
var G__37138 = cljs.core.rest(arglist__37779);
return sci$impl$fns$arity_7__delegate(G__37131,G__37132,G__37133,G__37134,G__37135,G__37136,G__37137,G__37138);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__37143,G__37144,G__37145,G__37146,G__37147,G__37148,G__37149,G__37150,G__37151){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37143);

(invoc_array[(1)] = G__37144);

(invoc_array[(2)] = G__37145);

(invoc_array[(3)] = G__37146);

(invoc_array[(4)] = G__37147);

(invoc_array[(5)] = G__37148);

(invoc_array[(6)] = G__37149);

(invoc_array[(7)] = G__37150);

(invoc_array[vararg_idx] = G__37151);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__37143,G__37144,G__37145,G__37146,G__37147,G__37148,G__37149,G__37150,var_args){
var G__37151 = null;
if (arguments.length > 8) {
var G__37780__i = 0, G__37780__a = new Array(arguments.length -  8);
while (G__37780__i < G__37780__a.length) {G__37780__a[G__37780__i] = arguments[G__37780__i + 8]; ++G__37780__i;}
  G__37151 = new cljs.core.IndexedSeq(G__37780__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__37143,G__37144,G__37145,G__37146,G__37147,G__37148,G__37149,G__37150,G__37151);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__37781){
var G__37143 = cljs.core.first(arglist__37781);
arglist__37781 = cljs.core.next(arglist__37781);
var G__37144 = cljs.core.first(arglist__37781);
arglist__37781 = cljs.core.next(arglist__37781);
var G__37145 = cljs.core.first(arglist__37781);
arglist__37781 = cljs.core.next(arglist__37781);
var G__37146 = cljs.core.first(arglist__37781);
arglist__37781 = cljs.core.next(arglist__37781);
var G__37147 = cljs.core.first(arglist__37781);
arglist__37781 = cljs.core.next(arglist__37781);
var G__37148 = cljs.core.first(arglist__37781);
arglist__37781 = cljs.core.next(arglist__37781);
var G__37149 = cljs.core.first(arglist__37781);
arglist__37781 = cljs.core.next(arglist__37781);
var G__37150 = cljs.core.first(arglist__37781);
var G__37151 = cljs.core.rest(arglist__37781);
return sci$impl$fns$arity_8__delegate(G__37143,G__37144,G__37145,G__37146,G__37147,G__37148,G__37149,G__37150,G__37151);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__37152,G__37153,G__37154,G__37155,G__37156,G__37157,G__37158,G__37159,G__37160,G__37161){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37152);

(invoc_array[(1)] = G__37153);

(invoc_array[(2)] = G__37154);

(invoc_array[(3)] = G__37155);

(invoc_array[(4)] = G__37156);

(invoc_array[(5)] = G__37157);

(invoc_array[(6)] = G__37158);

(invoc_array[(7)] = G__37159);

(invoc_array[(8)] = G__37160);

(invoc_array[vararg_idx] = G__37161);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__37152,G__37153,G__37154,G__37155,G__37156,G__37157,G__37158,G__37159,G__37160,var_args){
var G__37161 = null;
if (arguments.length > 9) {
var G__37786__i = 0, G__37786__a = new Array(arguments.length -  9);
while (G__37786__i < G__37786__a.length) {G__37786__a[G__37786__i] = arguments[G__37786__i + 9]; ++G__37786__i;}
  G__37161 = new cljs.core.IndexedSeq(G__37786__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__37152,G__37153,G__37154,G__37155,G__37156,G__37157,G__37158,G__37159,G__37160,G__37161);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__37787){
var G__37152 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37153 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37154 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37155 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37156 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37157 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37158 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37159 = cljs.core.first(arglist__37787);
arglist__37787 = cljs.core.next(arglist__37787);
var G__37160 = cljs.core.first(arglist__37787);
var G__37161 = cljs.core.rest(arglist__37787);
return sci$impl$fns$arity_9__delegate(G__37152,G__37153,G__37154,G__37155,G__37156,G__37157,G__37158,G__37159,G__37160,G__37161);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__37162,G__37163,G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,var_args){
var G__37172 = null;
if (arguments.length > 10) {
var G__37792__i = 0, G__37792__a = new Array(arguments.length -  10);
while (G__37792__i < G__37792__a.length) {G__37792__a[G__37792__i] = arguments[G__37792__i + 10]; ++G__37792__i;}
  G__37172 = new cljs.core.IndexedSeq(G__37792__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__37162,G__37163,G__37164,G__37165,G__37166,G__37167,G__37168,G__37169,G__37170,G__37171,G__37172);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__37793){
var G__37162 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37163 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37164 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37165 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37166 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37167 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37168 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37169 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37170 = cljs.core.first(arglist__37793);
arglist__37793 = cljs.core.next(arglist__37793);
var G__37171 = cljs.core.first(arglist__37793);
var G__37172 = cljs.core.rest(arglist__37793);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__37173,G__37174,G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,var_args){
var G__37184 = null;
if (arguments.length > 11) {
var G__37794__i = 0, G__37794__a = new Array(arguments.length -  11);
while (G__37794__i < G__37794__a.length) {G__37794__a[G__37794__i] = arguments[G__37794__i + 11]; ++G__37794__i;}
  G__37184 = new cljs.core.IndexedSeq(G__37794__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__37173,G__37174,G__37175,G__37176,G__37177,G__37178,G__37179,G__37180,G__37181,G__37182,G__37183,G__37184);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__37795){
var G__37173 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37174 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37175 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37176 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37177 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37178 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37179 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37180 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37181 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37182 = cljs.core.first(arglist__37795);
arglist__37795 = cljs.core.next(arglist__37795);
var G__37183 = cljs.core.first(arglist__37795);
var G__37184 = cljs.core.rest(arglist__37795);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__37185,G__37186,G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,var_args){
var G__37197 = null;
if (arguments.length > 12) {
var G__37796__i = 0, G__37796__a = new Array(arguments.length -  12);
while (G__37796__i < G__37796__a.length) {G__37796__a[G__37796__i] = arguments[G__37796__i + 12]; ++G__37796__i;}
  G__37197 = new cljs.core.IndexedSeq(G__37796__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__37185,G__37186,G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,G__37197);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__37797){
var G__37185 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37186 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37187 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37188 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37189 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37190 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37191 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37192 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37193 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37194 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37195 = cljs.core.first(arglist__37797);
arglist__37797 = cljs.core.next(arglist__37797);
var G__37196 = cljs.core.first(arglist__37797);
var G__37197 = cljs.core.rest(arglist__37797);
return sci$impl$fns$arity_12__delegate(G__37185,G__37186,G__37187,G__37188,G__37189,G__37190,G__37191,G__37192,G__37193,G__37194,G__37195,G__37196,G__37197);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__37201,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211,G__37212,G__37213,G__37214,G__37215){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37201);

(invoc_array[(1)] = G__37203);

(invoc_array[(2)] = G__37204);

(invoc_array[(3)] = G__37205);

(invoc_array[(4)] = G__37206);

(invoc_array[(5)] = G__37207);

(invoc_array[(6)] = G__37208);

(invoc_array[(7)] = G__37209);

(invoc_array[(8)] = G__37210);

(invoc_array[(9)] = G__37211);

(invoc_array[(10)] = G__37212);

(invoc_array[(11)] = G__37213);

(invoc_array[(12)] = G__37214);

(invoc_array[vararg_idx] = G__37215);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__37201,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211,G__37212,G__37213,G__37214,var_args){
var G__37215 = null;
if (arguments.length > 13) {
var G__37802__i = 0, G__37802__a = new Array(arguments.length -  13);
while (G__37802__i < G__37802__a.length) {G__37802__a[G__37802__i] = arguments[G__37802__i + 13]; ++G__37802__i;}
  G__37215 = new cljs.core.IndexedSeq(G__37802__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__37201,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211,G__37212,G__37213,G__37214,G__37215);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__37803){
var G__37201 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37203 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37204 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37205 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37206 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37207 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37208 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37209 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37210 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37211 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37212 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37213 = cljs.core.first(arglist__37803);
arglist__37803 = cljs.core.next(arglist__37803);
var G__37214 = cljs.core.first(arglist__37803);
var G__37215 = cljs.core.rest(arglist__37803);
return sci$impl$fns$arity_13__delegate(G__37201,G__37203,G__37204,G__37205,G__37206,G__37207,G__37208,G__37209,G__37210,G__37211,G__37212,G__37213,G__37214,G__37215);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228,G__37229,G__37230,G__37231,G__37232,G__37233,G__37234,G__37235,G__37236){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37222);

(invoc_array[(1)] = G__37223);

(invoc_array[(2)] = G__37224);

(invoc_array[(3)] = G__37225);

(invoc_array[(4)] = G__37226);

(invoc_array[(5)] = G__37227);

(invoc_array[(6)] = G__37228);

(invoc_array[(7)] = G__37229);

(invoc_array[(8)] = G__37230);

(invoc_array[(9)] = G__37231);

(invoc_array[(10)] = G__37232);

(invoc_array[(11)] = G__37233);

(invoc_array[(12)] = G__37234);

(invoc_array[(13)] = G__37235);

(invoc_array[vararg_idx] = G__37236);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228,G__37229,G__37230,G__37231,G__37232,G__37233,G__37234,G__37235,var_args){
var G__37236 = null;
if (arguments.length > 14) {
var G__37807__i = 0, G__37807__a = new Array(arguments.length -  14);
while (G__37807__i < G__37807__a.length) {G__37807__a[G__37807__i] = arguments[G__37807__i + 14]; ++G__37807__i;}
  G__37236 = new cljs.core.IndexedSeq(G__37807__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228,G__37229,G__37230,G__37231,G__37232,G__37233,G__37234,G__37235,G__37236);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__37808){
var G__37222 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37223 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37224 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37225 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37226 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37227 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37228 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37229 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37230 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37231 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37232 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37233 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37234 = cljs.core.first(arglist__37808);
arglist__37808 = cljs.core.next(arglist__37808);
var G__37235 = cljs.core.first(arglist__37808);
var G__37236 = cljs.core.rest(arglist__37808);
return sci$impl$fns$arity_14__delegate(G__37222,G__37223,G__37224,G__37225,G__37226,G__37227,G__37228,G__37229,G__37230,G__37231,G__37232,G__37233,G__37234,G__37235,G__37236);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,G__37264,G__37265,G__37266,G__37267,G__37268){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37253);

(invoc_array[(1)] = G__37254);

(invoc_array[(2)] = G__37255);

(invoc_array[(3)] = G__37256);

(invoc_array[(4)] = G__37257);

(invoc_array[(5)] = G__37258);

(invoc_array[(6)] = G__37259);

(invoc_array[(7)] = G__37260);

(invoc_array[(8)] = G__37261);

(invoc_array[(9)] = G__37262);

(invoc_array[(10)] = G__37263);

(invoc_array[(11)] = G__37264);

(invoc_array[(12)] = G__37265);

(invoc_array[(13)] = G__37266);

(invoc_array[(14)] = G__37267);

(invoc_array[vararg_idx] = G__37268);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,G__37264,G__37265,G__37266,G__37267,var_args){
var G__37268 = null;
if (arguments.length > 15) {
var G__37810__i = 0, G__37810__a = new Array(arguments.length -  15);
while (G__37810__i < G__37810__a.length) {G__37810__a[G__37810__i] = arguments[G__37810__i + 15]; ++G__37810__i;}
  G__37268 = new cljs.core.IndexedSeq(G__37810__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,G__37264,G__37265,G__37266,G__37267,G__37268);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__37811){
var G__37253 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37254 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37255 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37256 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37257 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37258 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37259 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37260 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37261 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37262 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37263 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37264 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37265 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37266 = cljs.core.first(arglist__37811);
arglist__37811 = cljs.core.next(arglist__37811);
var G__37267 = cljs.core.first(arglist__37811);
var G__37268 = cljs.core.rest(arglist__37811);
return sci$impl$fns$arity_15__delegate(G__37253,G__37254,G__37255,G__37256,G__37257,G__37258,G__37259,G__37260,G__37261,G__37262,G__37263,G__37264,G__37265,G__37266,G__37267,G__37268);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,G__37281,G__37282,G__37283,G__37284,G__37285){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37269);

(invoc_array[(1)] = G__37270);

(invoc_array[(2)] = G__37271);

(invoc_array[(3)] = G__37272);

(invoc_array[(4)] = G__37273);

(invoc_array[(5)] = G__37274);

(invoc_array[(6)] = G__37275);

(invoc_array[(7)] = G__37276);

(invoc_array[(8)] = G__37277);

(invoc_array[(9)] = G__37278);

(invoc_array[(10)] = G__37279);

(invoc_array[(11)] = G__37280);

(invoc_array[(12)] = G__37281);

(invoc_array[(13)] = G__37282);

(invoc_array[(14)] = G__37283);

(invoc_array[(15)] = G__37284);

(invoc_array[vararg_idx] = G__37285);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,G__37281,G__37282,G__37283,G__37284,var_args){
var G__37285 = null;
if (arguments.length > 16) {
var G__37816__i = 0, G__37816__a = new Array(arguments.length -  16);
while (G__37816__i < G__37816__a.length) {G__37816__a[G__37816__i] = arguments[G__37816__i + 16]; ++G__37816__i;}
  G__37285 = new cljs.core.IndexedSeq(G__37816__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,G__37281,G__37282,G__37283,G__37284,G__37285);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__37817){
var G__37269 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37270 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37271 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37272 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37273 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37274 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37275 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37276 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37277 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37278 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37279 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37280 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37281 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37282 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37283 = cljs.core.first(arglist__37817);
arglist__37817 = cljs.core.next(arglist__37817);
var G__37284 = cljs.core.first(arglist__37817);
var G__37285 = cljs.core.rest(arglist__37817);
return sci$impl$fns$arity_16__delegate(G__37269,G__37270,G__37271,G__37272,G__37273,G__37274,G__37275,G__37276,G__37277,G__37278,G__37279,G__37280,G__37281,G__37282,G__37283,G__37284,G__37285);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298,G__37299,G__37300,G__37301,G__37302,var_args){
var G__37303 = null;
if (arguments.length > 17) {
var G__37822__i = 0, G__37822__a = new Array(arguments.length -  17);
while (G__37822__i < G__37822__a.length) {G__37822__a[G__37822__i] = arguments[G__37822__i + 17]; ++G__37822__i;}
  G__37303 = new cljs.core.IndexedSeq(G__37822__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298,G__37299,G__37300,G__37301,G__37302,G__37303);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__37824){
var G__37286 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37287 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37288 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37289 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37290 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37291 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37292 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37293 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37294 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37295 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37296 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37297 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37298 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37299 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37300 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37301 = cljs.core.first(arglist__37824);
arglist__37824 = cljs.core.next(arglist__37824);
var G__37302 = cljs.core.first(arglist__37824);
var G__37303 = cljs.core.rest(arglist__37824);
return sci$impl$fns$arity_17__delegate(G__37286,G__37287,G__37288,G__37289,G__37290,G__37291,G__37292,G__37293,G__37294,G__37295,G__37296,G__37297,G__37298,G__37299,G__37300,G__37301,G__37302,G__37303);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,G__37322,G__37323,G__37324){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37306);

(invoc_array[(1)] = G__37307);

(invoc_array[(2)] = G__37308);

(invoc_array[(3)] = G__37309);

(invoc_array[(4)] = G__37310);

(invoc_array[(5)] = G__37311);

(invoc_array[(6)] = G__37312);

(invoc_array[(7)] = G__37313);

(invoc_array[(8)] = G__37314);

(invoc_array[(9)] = G__37315);

(invoc_array[(10)] = G__37316);

(invoc_array[(11)] = G__37317);

(invoc_array[(12)] = G__37318);

(invoc_array[(13)] = G__37319);

(invoc_array[(14)] = G__37320);

(invoc_array[(15)] = G__37321);

(invoc_array[(16)] = G__37322);

(invoc_array[(17)] = G__37323);

(invoc_array[vararg_idx] = G__37324);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,G__37322,G__37323,var_args){
var G__37324 = null;
if (arguments.length > 18) {
var G__37829__i = 0, G__37829__a = new Array(arguments.length -  18);
while (G__37829__i < G__37829__a.length) {G__37829__a[G__37829__i] = arguments[G__37829__i + 18]; ++G__37829__i;}
  G__37324 = new cljs.core.IndexedSeq(G__37829__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,G__37322,G__37323,G__37324);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__37830){
var G__37306 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37307 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37308 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37309 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37310 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37311 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37312 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37313 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37314 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37315 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37316 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37317 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37318 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37319 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37320 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37321 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37322 = cljs.core.first(arglist__37830);
arglist__37830 = cljs.core.next(arglist__37830);
var G__37323 = cljs.core.first(arglist__37830);
var G__37324 = cljs.core.rest(arglist__37830);
return sci$impl$fns$arity_18__delegate(G__37306,G__37307,G__37308,G__37309,G__37310,G__37311,G__37312,G__37313,G__37314,G__37315,G__37316,G__37317,G__37318,G__37319,G__37320,G__37321,G__37322,G__37323,G__37324);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__37325,G__37326,G__37327,G__37328,G__37329,G__37330,G__37331,G__37332,G__37333,G__37334,G__37335,G__37336,G__37337,G__37338,G__37339,G__37340,G__37341,G__37342,G__37343,var_args){
var G__37344 = null;
if (arguments.length > 19) {
var G__37835__i = 0, G__37835__a = new Array(arguments.length -  19);
while (G__37835__i < G__37835__a.length) {G__37835__a[G__37835__i] = arguments[G__37835__i + 19]; ++G__37835__i;}
  G__37344 = new cljs.core.IndexedSeq(G__37835__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__37325,G__37326,G__37327,G__37328,G__37329,G__37330,G__37331,G__37332,G__37333,G__37334,G__37335,G__37336,G__37337,G__37338,G__37339,G__37340,G__37341,G__37342,G__37343,G__37344);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__37836){
var G__37325 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37326 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37327 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37328 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37329 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37330 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37331 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37332 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37333 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37334 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37335 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37336 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37337 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37338 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37339 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37340 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37341 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37342 = cljs.core.first(arglist__37836);
arglist__37836 = cljs.core.next(arglist__37836);
var G__37343 = cljs.core.first(arglist__37836);
var G__37344 = cljs.core.rest(arglist__37836);
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__37345,G__37346,G__37347,G__37348,G__37349,G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,var_args){
var G__37365 = null;
if (arguments.length > 20) {
var G__37840__i = 0, G__37840__a = new Array(arguments.length -  20);
while (G__37840__i < G__37840__a.length) {G__37840__a[G__37840__i] = arguments[G__37840__i + 20]; ++G__37840__i;}
  G__37365 = new cljs.core.IndexedSeq(G__37840__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__37345,G__37346,G__37347,G__37348,G__37349,G__37350,G__37351,G__37352,G__37353,G__37354,G__37355,G__37356,G__37357,G__37358,G__37359,G__37360,G__37361,G__37362,G__37363,G__37364,G__37365);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__37841){
var G__37345 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37346 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37347 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37348 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37349 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37350 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37351 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37352 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37353 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37354 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37355 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37356 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37357 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37358 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37359 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37360 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37361 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37362 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37363 = cljs.core.first(arglist__37841);
arglist__37841 = cljs.core.next(arglist__37841);
var G__37364 = cljs.core.first(arglist__37841);
var G__37365 = cljs.core.rest(arglist__37841);
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
})():(function (){var G__37367 = fixed_arity;
switch (G__37367) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__36300__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36300__auto__)){
continue;
} else {
return ret__36300__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__37368){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37368);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__37369,G__37370){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37369);

(invoc_array[(1)] = G__37370);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__37374,G__37375,G__37376){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37374);

(invoc_array[(1)] = G__37375);

(invoc_array[(2)] = G__37376);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__37382,G__37383,G__37384,G__37385){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37382);

(invoc_array[(1)] = G__37383);

(invoc_array[(2)] = G__37384);

(invoc_array[(3)] = G__37385);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__37386,G__37387,G__37388,G__37389,G__37390){
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

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__37391,G__37392,G__37393,G__37394,G__37395,G__37396){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37391);

(invoc_array[(1)] = G__37392);

(invoc_array[(2)] = G__37393);

(invoc_array[(3)] = G__37394);

(invoc_array[(4)] = G__37395);

(invoc_array[(5)] = G__37396);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__37401,G__37402,G__37403,G__37404,G__37405,G__37406,G__37407){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37401);

(invoc_array[(1)] = G__37402);

(invoc_array[(2)] = G__37403);

(invoc_array[(3)] = G__37404);

(invoc_array[(4)] = G__37405);

(invoc_array[(5)] = G__37406);

(invoc_array[(6)] = G__37407);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__37408,G__37409,G__37410,G__37411,G__37412,G__37413,G__37414,G__37415){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37408);

(invoc_array[(1)] = G__37409);

(invoc_array[(2)] = G__37410);

(invoc_array[(3)] = G__37411);

(invoc_array[(4)] = G__37412);

(invoc_array[(5)] = G__37413);

(invoc_array[(6)] = G__37414);

(invoc_array[(7)] = G__37415);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__37416,G__37417,G__37418,G__37419,G__37420,G__37421,G__37422,G__37423,G__37424){
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

(invoc_array[(6)] = G__37422);

(invoc_array[(7)] = G__37423);

(invoc_array[(8)] = G__37424);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
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
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__37443,G__37444,G__37445,G__37446,G__37447,G__37448,G__37449,G__37450,G__37451,G__37452,G__37453){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37443);

(invoc_array[(1)] = G__37444);

(invoc_array[(2)] = G__37445);

(invoc_array[(3)] = G__37446);

(invoc_array[(4)] = G__37447);

(invoc_array[(5)] = G__37448);

(invoc_array[(6)] = G__37449);

(invoc_array[(7)] = G__37450);

(invoc_array[(8)] = G__37451);

(invoc_array[(9)] = G__37452);

(invoc_array[(10)] = G__37453);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__37454,G__37455,G__37456,G__37457,G__37458,G__37459,G__37460,G__37461,G__37462,G__37463,G__37464,G__37465){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37454);

(invoc_array[(1)] = G__37455);

(invoc_array[(2)] = G__37456);

(invoc_array[(3)] = G__37457);

(invoc_array[(4)] = G__37458);

(invoc_array[(5)] = G__37459);

(invoc_array[(6)] = G__37460);

(invoc_array[(7)] = G__37461);

(invoc_array[(8)] = G__37462);

(invoc_array[(9)] = G__37463);

(invoc_array[(10)] = G__37464);

(invoc_array[(11)] = G__37465);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__37481,G__37482,G__37483,G__37484,G__37485,G__37486,G__37487,G__37488,G__37489,G__37490,G__37491,G__37492,G__37493){
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

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__37494,G__37495,G__37496,G__37497,G__37498,G__37499,G__37500,G__37501,G__37502,G__37503,G__37504,G__37505,G__37506,G__37507){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37494);

(invoc_array[(1)] = G__37495);

(invoc_array[(2)] = G__37496);

(invoc_array[(3)] = G__37497);

(invoc_array[(4)] = G__37498);

(invoc_array[(5)] = G__37499);

(invoc_array[(6)] = G__37500);

(invoc_array[(7)] = G__37501);

(invoc_array[(8)] = G__37502);

(invoc_array[(9)] = G__37503);

(invoc_array[(10)] = G__37504);

(invoc_array[(11)] = G__37505);

(invoc_array[(12)] = G__37506);

(invoc_array[(13)] = G__37507);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__37511,G__37512,G__37513,G__37514,G__37515,G__37516,G__37517,G__37518,G__37519,G__37520,G__37521,G__37522,G__37523,G__37524,G__37525){
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

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__37534,G__37535,G__37536,G__37537,G__37538,G__37539,G__37540,G__37541,G__37542,G__37543,G__37544,G__37545,G__37546,G__37547,G__37548,G__37549){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37534);

(invoc_array[(1)] = G__37535);

(invoc_array[(2)] = G__37536);

(invoc_array[(3)] = G__37537);

(invoc_array[(4)] = G__37538);

(invoc_array[(5)] = G__37539);

(invoc_array[(6)] = G__37540);

(invoc_array[(7)] = G__37541);

(invoc_array[(8)] = G__37542);

(invoc_array[(9)] = G__37543);

(invoc_array[(10)] = G__37544);

(invoc_array[(11)] = G__37545);

(invoc_array[(12)] = G__37546);

(invoc_array[(13)] = G__37547);

(invoc_array[(14)] = G__37548);

(invoc_array[(15)] = G__37549);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__37552,G__37553,G__37554,G__37555,G__37556,G__37557,G__37558,G__37559,G__37560,G__37561,G__37562,G__37563,G__37564,G__37565,G__37566,G__37567,G__37568){
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

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__37576,G__37577,G__37578,G__37579,G__37580,G__37582,G__37583,G__37584,G__37585,G__37586,G__37587,G__37588,G__37589,G__37590,G__37591,G__37592,G__37593,G__37594){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37576);

(invoc_array[(1)] = G__37577);

(invoc_array[(2)] = G__37578);

(invoc_array[(3)] = G__37579);

(invoc_array[(4)] = G__37580);

(invoc_array[(5)] = G__37582);

(invoc_array[(6)] = G__37583);

(invoc_array[(7)] = G__37584);

(invoc_array[(8)] = G__37585);

(invoc_array[(9)] = G__37586);

(invoc_array[(10)] = G__37587);

(invoc_array[(11)] = G__37588);

(invoc_array[(12)] = G__37589);

(invoc_array[(13)] = G__37590);

(invoc_array[(14)] = G__37591);

(invoc_array[(15)] = G__37592);

(invoc_array[(16)] = G__37593);

(invoc_array[(17)] = G__37594);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__37608,G__37609,G__37610,G__37611,G__37612,G__37613,G__37614,G__37615,G__37616,G__37617,G__37618,G__37619,G__37620,G__37621,G__37622,G__37623,G__37624,G__37625,G__37626){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37608);

(invoc_array[(1)] = G__37609);

(invoc_array[(2)] = G__37610);

(invoc_array[(3)] = G__37611);

(invoc_array[(4)] = G__37612);

(invoc_array[(5)] = G__37613);

(invoc_array[(6)] = G__37614);

(invoc_array[(7)] = G__37615);

(invoc_array[(8)] = G__37616);

(invoc_array[(9)] = G__37617);

(invoc_array[(10)] = G__37618);

(invoc_array[(11)] = G__37619);

(invoc_array[(12)] = G__37620);

(invoc_array[(13)] = G__37621);

(invoc_array[(14)] = G__37622);

(invoc_array[(15)] = G__37623);

(invoc_array[(16)] = G__37624);

(invoc_array[(17)] = G__37625);

(invoc_array[(18)] = G__37626);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__37633,G__37634,G__37635,G__37636,G__37637,G__37638,G__37639,G__37640,G__37641,G__37642,G__37643,G__37644,G__37645,G__37646,G__37647,G__37648,G__37649,G__37650,G__37651,G__37652){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__37633);

(invoc_array[(1)] = G__37634);

(invoc_array[(2)] = G__37635);

(invoc_array[(3)] = G__37636);

(invoc_array[(4)] = G__37637);

(invoc_array[(5)] = G__37638);

(invoc_array[(6)] = G__37639);

(invoc_array[(7)] = G__37640);

(invoc_array[(8)] = G__37641);

(invoc_array[(9)] = G__37642);

(invoc_array[(10)] = G__37643);

(invoc_array[(11)] = G__37644);

(invoc_array[(12)] = G__37645);

(invoc_array[(13)] = G__37646);

(invoc_array[(14)] = G__37647);

(invoc_array[(15)] = G__37648);

(invoc_array[(16)] = G__37649);

(invoc_array[(17)] = G__37650);

(invoc_array[(18)] = G__37651);

(invoc_array[(19)] = G__37652);

while(true){
var ret__36301__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__36301__auto__)){
continue;
} else {
return ret__36301__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37367)].join('')));

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
var G__37887 = cljs.core.next(params__$1);
var G__37888 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__37889 = lets;
params__$1 = G__37887;
new_params = G__37888;
lets = G__37889;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__37891 = cljs.core.next(params__$1);
var G__37892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__37893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__37891;
new_params = G__37892;
lets = G__37893;
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
var len__5749__auto___37899 = arguments.length;
var i__5750__auto___37900 = (0);
while(true){
if((i__5750__auto___37900 < len__5749__auto___37899)){
args__5755__auto__.push((arguments[i__5750__auto___37900]));

var G__37906 = (i__5750__auto___37900 + (1));
i__5750__auto___37900 = G__37906;
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

var vec__37698 = sig;
var seq__37699 = cljs.core.seq(vec__37698);
var first__37700 = cljs.core.first(seq__37699);
var seq__37699__$1 = cljs.core.next(seq__37699);
var params = first__37700;
var body = seq__37699__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq37687){
var G__37689 = cljs.core.first(seq37687);
var seq37687__$1 = cljs.core.next(seq37687);
var G__37690 = cljs.core.first(seq37687__$1);
var seq37687__$2 = cljs.core.next(seq37687__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37689,G__37690,seq37687__$2);
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
var G__37925 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__37926 = cljs.core.next(fdecls);
ret = G__37925;
fdecls = G__37926;
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
var len__5749__auto___37927 = arguments.length;
var i__5750__auto___37928 = (0);
while(true){
if((i__5750__auto___37928 < len__5749__auto___37927)){
args__5755__auto__.push((arguments[i__5750__auto___37928]));

var G__37929 = (i__5750__auto___37928 + (1));
i__5750__auto___37928 = G__37929;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq37713){
var G__37714 = cljs.core.first(seq37713);
var seq37713__$1 = cljs.core.next(seq37713);
var G__37715 = cljs.core.first(seq37713__$1);
var seq37713__$2 = cljs.core.next(seq37713__$1);
var G__37716 = cljs.core.first(seq37713__$2);
var seq37713__$3 = cljs.core.next(seq37713__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37714,G__37715,G__37716,seq37713__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37935 = arguments.length;
var i__5750__auto___37936 = (0);
while(true){
if((i__5750__auto___37936 < len__5749__auto___37935)){
args__5755__auto__.push((arguments[i__5750__auto___37936]));

var G__37937 = (i__5750__auto___37936 + (1));
i__5750__auto___37936 = G__37937;
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
var G__37948 = cljs.core.cons(f,p);
var G__37949 = cljs.core.next(args__$1);
p = G__37948;
args__$1 = G__37949;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__37950 = cljs.core.cons(f,p);
var G__37951 = cljs.core.next(args__$1);
p = G__37950;
args__$1 = G__37951;
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
var G__37952 = cljs.core.next(fd);
fd = G__37952;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__37954 = cljs.core.next(fd);
fd = G__37954;
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
var G__37958 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__37959 = cljs.core.next(ds);
acc = G__37958;
ds = G__37959;
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
var G__37960 = cljs.core.next(p);
var G__37961 = cljs.core.cons(cljs.core.first(p),d);
p = G__37960;
d = G__37961;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq37725){
var G__37726 = cljs.core.first(seq37725);
var seq37725__$1 = cljs.core.next(seq37725);
var G__37727 = cljs.core.first(seq37725__$1);
var seq37725__$2 = cljs.core.next(seq37725__$1);
var G__37728 = cljs.core.first(seq37725__$2);
var seq37725__$3 = cljs.core.next(seq37725__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37726,G__37727,G__37728,seq37725__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
