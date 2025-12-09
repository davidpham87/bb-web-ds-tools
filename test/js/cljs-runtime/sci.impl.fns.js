goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__43127 = arguments.length;
switch (G__43127) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__43128 = fixed_arity;
switch (G__43128) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__43129){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__43129);

while(true){
var ret__42332__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42332__auto__)){
continue;
} else {
return ret__42332__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__43129 = null;
if (arguments.length > 0) {
var G__43940__i = 0, G__43940__a = new Array(arguments.length -  0);
while (G__43940__i < G__43940__a.length) {G__43940__a[G__43940__i] = arguments[G__43940__i + 0]; ++G__43940__i;}
  G__43129 = new cljs.core.IndexedSeq(G__43940__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__43129);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__43941){
var G__43129 = cljs.core.seq(arglist__43941);
return sci$impl$fns$arity_0__delegate(G__43129);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__43130,G__43131){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43130);

(invoc_array[vararg_idx] = G__43131);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__43130,var_args){
var G__43131 = null;
if (arguments.length > 1) {
var G__43942__i = 0, G__43942__a = new Array(arguments.length -  1);
while (G__43942__i < G__43942__a.length) {G__43942__a[G__43942__i] = arguments[G__43942__i + 1]; ++G__43942__i;}
  G__43131 = new cljs.core.IndexedSeq(G__43942__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__43130,G__43131);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__43943){
var G__43130 = cljs.core.first(arglist__43943);
var G__43131 = cljs.core.rest(arglist__43943);
return sci$impl$fns$arity_1__delegate(G__43130,G__43131);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__43132,G__43133,G__43134){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43132);

(invoc_array[(1)] = G__43133);

(invoc_array[vararg_idx] = G__43134);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__43132,G__43133,var_args){
var G__43134 = null;
if (arguments.length > 2) {
var G__43948__i = 0, G__43948__a = new Array(arguments.length -  2);
while (G__43948__i < G__43948__a.length) {G__43948__a[G__43948__i] = arguments[G__43948__i + 2]; ++G__43948__i;}
  G__43134 = new cljs.core.IndexedSeq(G__43948__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__43132,G__43133,G__43134);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__43949){
var G__43132 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43133 = cljs.core.first(arglist__43949);
var G__43134 = cljs.core.rest(arglist__43949);
return sci$impl$fns$arity_2__delegate(G__43132,G__43133,G__43134);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__43135,G__43136,G__43137,G__43138){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43135);

(invoc_array[(1)] = G__43136);

(invoc_array[(2)] = G__43137);

(invoc_array[vararg_idx] = G__43138);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__43135,G__43136,G__43137,var_args){
var G__43138 = null;
if (arguments.length > 3) {
var G__43950__i = 0, G__43950__a = new Array(arguments.length -  3);
while (G__43950__i < G__43950__a.length) {G__43950__a[G__43950__i] = arguments[G__43950__i + 3]; ++G__43950__i;}
  G__43138 = new cljs.core.IndexedSeq(G__43950__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__43135,G__43136,G__43137,G__43138);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__43951){
var G__43135 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43136 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43137 = cljs.core.first(arglist__43951);
var G__43138 = cljs.core.rest(arglist__43951);
return sci$impl$fns$arity_3__delegate(G__43135,G__43136,G__43137,G__43138);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__43139,G__43140,G__43141,G__43142,G__43143){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43139);

(invoc_array[(1)] = G__43140);

(invoc_array[(2)] = G__43141);

(invoc_array[(3)] = G__43142);

(invoc_array[vararg_idx] = G__43143);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__43139,G__43140,G__43141,G__43142,var_args){
var G__43143 = null;
if (arguments.length > 4) {
var G__43954__i = 0, G__43954__a = new Array(arguments.length -  4);
while (G__43954__i < G__43954__a.length) {G__43954__a[G__43954__i] = arguments[G__43954__i + 4]; ++G__43954__i;}
  G__43143 = new cljs.core.IndexedSeq(G__43954__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__43139,G__43140,G__43141,G__43142,G__43143);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__43955){
var G__43139 = cljs.core.first(arglist__43955);
arglist__43955 = cljs.core.next(arglist__43955);
var G__43140 = cljs.core.first(arglist__43955);
arglist__43955 = cljs.core.next(arglist__43955);
var G__43141 = cljs.core.first(arglist__43955);
arglist__43955 = cljs.core.next(arglist__43955);
var G__43142 = cljs.core.first(arglist__43955);
var G__43143 = cljs.core.rest(arglist__43955);
return sci$impl$fns$arity_4__delegate(G__43139,G__43140,G__43141,G__43142,G__43143);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__43145,G__43146,G__43147,G__43148,G__43149,G__43150){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43145);

(invoc_array[(1)] = G__43146);

(invoc_array[(2)] = G__43147);

(invoc_array[(3)] = G__43148);

(invoc_array[(4)] = G__43149);

(invoc_array[vararg_idx] = G__43150);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__43145,G__43146,G__43147,G__43148,G__43149,var_args){
var G__43150 = null;
if (arguments.length > 5) {
var G__43958__i = 0, G__43958__a = new Array(arguments.length -  5);
while (G__43958__i < G__43958__a.length) {G__43958__a[G__43958__i] = arguments[G__43958__i + 5]; ++G__43958__i;}
  G__43150 = new cljs.core.IndexedSeq(G__43958__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__43145,G__43146,G__43147,G__43148,G__43149,G__43150);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__43959){
var G__43145 = cljs.core.first(arglist__43959);
arglist__43959 = cljs.core.next(arglist__43959);
var G__43146 = cljs.core.first(arglist__43959);
arglist__43959 = cljs.core.next(arglist__43959);
var G__43147 = cljs.core.first(arglist__43959);
arglist__43959 = cljs.core.next(arglist__43959);
var G__43148 = cljs.core.first(arglist__43959);
arglist__43959 = cljs.core.next(arglist__43959);
var G__43149 = cljs.core.first(arglist__43959);
var G__43150 = cljs.core.rest(arglist__43959);
return sci$impl$fns$arity_5__delegate(G__43145,G__43146,G__43147,G__43148,G__43149,G__43150);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43151);

(invoc_array[(1)] = G__43152);

(invoc_array[(2)] = G__43153);

(invoc_array[(3)] = G__43154);

(invoc_array[(4)] = G__43155);

(invoc_array[(5)] = G__43156);

(invoc_array[vararg_idx] = G__43157);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,var_args){
var G__43157 = null;
if (arguments.length > 6) {
var G__43965__i = 0, G__43965__a = new Array(arguments.length -  6);
while (G__43965__i < G__43965__a.length) {G__43965__a[G__43965__i] = arguments[G__43965__i + 6]; ++G__43965__i;}
  G__43157 = new cljs.core.IndexedSeq(G__43965__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__43966){
var G__43151 = cljs.core.first(arglist__43966);
arglist__43966 = cljs.core.next(arglist__43966);
var G__43152 = cljs.core.first(arglist__43966);
arglist__43966 = cljs.core.next(arglist__43966);
var G__43153 = cljs.core.first(arglist__43966);
arglist__43966 = cljs.core.next(arglist__43966);
var G__43154 = cljs.core.first(arglist__43966);
arglist__43966 = cljs.core.next(arglist__43966);
var G__43155 = cljs.core.first(arglist__43966);
arglist__43966 = cljs.core.next(arglist__43966);
var G__43156 = cljs.core.first(arglist__43966);
var G__43157 = cljs.core.rest(arglist__43966);
return sci$impl$fns$arity_6__delegate(G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__43158,G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,G__43165){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43158);

(invoc_array[(1)] = G__43159);

(invoc_array[(2)] = G__43160);

(invoc_array[(3)] = G__43161);

(invoc_array[(4)] = G__43162);

(invoc_array[(5)] = G__43163);

(invoc_array[(6)] = G__43164);

(invoc_array[vararg_idx] = G__43165);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__43158,G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,var_args){
var G__43165 = null;
if (arguments.length > 7) {
var G__43967__i = 0, G__43967__a = new Array(arguments.length -  7);
while (G__43967__i < G__43967__a.length) {G__43967__a[G__43967__i] = arguments[G__43967__i + 7]; ++G__43967__i;}
  G__43165 = new cljs.core.IndexedSeq(G__43967__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__43158,G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,G__43165);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__43969){
var G__43158 = cljs.core.first(arglist__43969);
arglist__43969 = cljs.core.next(arglist__43969);
var G__43159 = cljs.core.first(arglist__43969);
arglist__43969 = cljs.core.next(arglist__43969);
var G__43160 = cljs.core.first(arglist__43969);
arglist__43969 = cljs.core.next(arglist__43969);
var G__43161 = cljs.core.first(arglist__43969);
arglist__43969 = cljs.core.next(arglist__43969);
var G__43162 = cljs.core.first(arglist__43969);
arglist__43969 = cljs.core.next(arglist__43969);
var G__43163 = cljs.core.first(arglist__43969);
arglist__43969 = cljs.core.next(arglist__43969);
var G__43164 = cljs.core.first(arglist__43969);
var G__43165 = cljs.core.rest(arglist__43969);
return sci$impl$fns$arity_7__delegate(G__43158,G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,G__43165);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43169);

(invoc_array[(1)] = G__43170);

(invoc_array[(2)] = G__43171);

(invoc_array[(3)] = G__43172);

(invoc_array[(4)] = G__43173);

(invoc_array[(5)] = G__43174);

(invoc_array[(6)] = G__43175);

(invoc_array[(7)] = G__43176);

(invoc_array[vararg_idx] = G__43177);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,var_args){
var G__43177 = null;
if (arguments.length > 8) {
var G__43972__i = 0, G__43972__a = new Array(arguments.length -  8);
while (G__43972__i < G__43972__a.length) {G__43972__a[G__43972__i] = arguments[G__43972__i + 8]; ++G__43972__i;}
  G__43177 = new cljs.core.IndexedSeq(G__43972__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__43973){
var G__43169 = cljs.core.first(arglist__43973);
arglist__43973 = cljs.core.next(arglist__43973);
var G__43170 = cljs.core.first(arglist__43973);
arglist__43973 = cljs.core.next(arglist__43973);
var G__43171 = cljs.core.first(arglist__43973);
arglist__43973 = cljs.core.next(arglist__43973);
var G__43172 = cljs.core.first(arglist__43973);
arglist__43973 = cljs.core.next(arglist__43973);
var G__43173 = cljs.core.first(arglist__43973);
arglist__43973 = cljs.core.next(arglist__43973);
var G__43174 = cljs.core.first(arglist__43973);
arglist__43973 = cljs.core.next(arglist__43973);
var G__43175 = cljs.core.first(arglist__43973);
arglist__43973 = cljs.core.next(arglist__43973);
var G__43176 = cljs.core.first(arglist__43973);
var G__43177 = cljs.core.rest(arglist__43973);
return sci$impl$fns$arity_8__delegate(G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__43178,G__43179,G__43180,G__43181,G__43182,G__43183,G__43184,G__43185,G__43186,G__43187){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43178);

(invoc_array[(1)] = G__43179);

(invoc_array[(2)] = G__43180);

(invoc_array[(3)] = G__43181);

(invoc_array[(4)] = G__43182);

(invoc_array[(5)] = G__43183);

(invoc_array[(6)] = G__43184);

(invoc_array[(7)] = G__43185);

(invoc_array[(8)] = G__43186);

(invoc_array[vararg_idx] = G__43187);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__43178,G__43179,G__43180,G__43181,G__43182,G__43183,G__43184,G__43185,G__43186,var_args){
var G__43187 = null;
if (arguments.length > 9) {
var G__43981__i = 0, G__43981__a = new Array(arguments.length -  9);
while (G__43981__i < G__43981__a.length) {G__43981__a[G__43981__i] = arguments[G__43981__i + 9]; ++G__43981__i;}
  G__43187 = new cljs.core.IndexedSeq(G__43981__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__43178,G__43179,G__43180,G__43181,G__43182,G__43183,G__43184,G__43185,G__43186,G__43187);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__43982){
var G__43178 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43179 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43180 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43181 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43182 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43183 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43184 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43185 = cljs.core.first(arglist__43982);
arglist__43982 = cljs.core.next(arglist__43982);
var G__43186 = cljs.core.first(arglist__43982);
var G__43187 = cljs.core.rest(arglist__43982);
return sci$impl$fns$arity_9__delegate(G__43178,G__43179,G__43180,G__43181,G__43182,G__43183,G__43184,G__43185,G__43186,G__43187);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196,G__43197,G__43198){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43188);

(invoc_array[(1)] = G__43189);

(invoc_array[(2)] = G__43190);

(invoc_array[(3)] = G__43191);

(invoc_array[(4)] = G__43192);

(invoc_array[(5)] = G__43193);

(invoc_array[(6)] = G__43194);

(invoc_array[(7)] = G__43195);

(invoc_array[(8)] = G__43196);

(invoc_array[(9)] = G__43197);

(invoc_array[vararg_idx] = G__43198);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196,G__43197,var_args){
var G__43198 = null;
if (arguments.length > 10) {
var G__43984__i = 0, G__43984__a = new Array(arguments.length -  10);
while (G__43984__i < G__43984__a.length) {G__43984__a[G__43984__i] = arguments[G__43984__i + 10]; ++G__43984__i;}
  G__43198 = new cljs.core.IndexedSeq(G__43984__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196,G__43197,G__43198);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__43985){
var G__43188 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43189 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43190 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43191 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43192 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43193 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43194 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43195 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43196 = cljs.core.first(arglist__43985);
arglist__43985 = cljs.core.next(arglist__43985);
var G__43197 = cljs.core.first(arglist__43985);
var G__43198 = cljs.core.rest(arglist__43985);
return sci$impl$fns$arity_10__delegate(G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196,G__43197,G__43198);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209,G__43210){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43199);

(invoc_array[(1)] = G__43200);

(invoc_array[(2)] = G__43201);

(invoc_array[(3)] = G__43202);

(invoc_array[(4)] = G__43203);

(invoc_array[(5)] = G__43204);

(invoc_array[(6)] = G__43205);

(invoc_array[(7)] = G__43206);

(invoc_array[(8)] = G__43207);

(invoc_array[(9)] = G__43208);

(invoc_array[(10)] = G__43209);

(invoc_array[vararg_idx] = G__43210);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209,var_args){
var G__43210 = null;
if (arguments.length > 11) {
var G__43986__i = 0, G__43986__a = new Array(arguments.length -  11);
while (G__43986__i < G__43986__a.length) {G__43986__a[G__43986__i] = arguments[G__43986__i + 11]; ++G__43986__i;}
  G__43210 = new cljs.core.IndexedSeq(G__43986__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209,G__43210);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__43987){
var G__43199 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43200 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43201 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43202 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43203 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43204 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43205 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43206 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43207 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43208 = cljs.core.first(arglist__43987);
arglist__43987 = cljs.core.next(arglist__43987);
var G__43209 = cljs.core.first(arglist__43987);
var G__43210 = cljs.core.rest(arglist__43987);
return sci$impl$fns$arity_11__delegate(G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209,G__43210);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__43211,G__43212,G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43211);

(invoc_array[(1)] = G__43212);

(invoc_array[(2)] = G__43213);

(invoc_array[(3)] = G__43214);

(invoc_array[(4)] = G__43215);

(invoc_array[(5)] = G__43216);

(invoc_array[(6)] = G__43217);

(invoc_array[(7)] = G__43218);

(invoc_array[(8)] = G__43219);

(invoc_array[(9)] = G__43220);

(invoc_array[(10)] = G__43221);

(invoc_array[(11)] = G__43222);

(invoc_array[vararg_idx] = G__43223);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__43211,G__43212,G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,var_args){
var G__43223 = null;
if (arguments.length > 12) {
var G__43992__i = 0, G__43992__a = new Array(arguments.length -  12);
while (G__43992__i < G__43992__a.length) {G__43992__a[G__43992__i] = arguments[G__43992__i + 12]; ++G__43992__i;}
  G__43223 = new cljs.core.IndexedSeq(G__43992__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__43211,G__43212,G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__43995){
var G__43211 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43212 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43213 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43214 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43215 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43216 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43217 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43218 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43219 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43220 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43221 = cljs.core.first(arglist__43995);
arglist__43995 = cljs.core.next(arglist__43995);
var G__43222 = cljs.core.first(arglist__43995);
var G__43223 = cljs.core.rest(arglist__43995);
return sci$impl$fns$arity_12__delegate(G__43211,G__43212,G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__43226,G__43227,G__43228,G__43229,G__43230,G__43231,G__43232,G__43233,G__43234,G__43235,G__43236,G__43237,G__43238,G__43239){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43226);

(invoc_array[(1)] = G__43227);

(invoc_array[(2)] = G__43228);

(invoc_array[(3)] = G__43229);

(invoc_array[(4)] = G__43230);

(invoc_array[(5)] = G__43231);

(invoc_array[(6)] = G__43232);

(invoc_array[(7)] = G__43233);

(invoc_array[(8)] = G__43234);

(invoc_array[(9)] = G__43235);

(invoc_array[(10)] = G__43236);

(invoc_array[(11)] = G__43237);

(invoc_array[(12)] = G__43238);

(invoc_array[vararg_idx] = G__43239);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__43226,G__43227,G__43228,G__43229,G__43230,G__43231,G__43232,G__43233,G__43234,G__43235,G__43236,G__43237,G__43238,var_args){
var G__43239 = null;
if (arguments.length > 13) {
var G__43998__i = 0, G__43998__a = new Array(arguments.length -  13);
while (G__43998__i < G__43998__a.length) {G__43998__a[G__43998__i] = arguments[G__43998__i + 13]; ++G__43998__i;}
  G__43239 = new cljs.core.IndexedSeq(G__43998__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__43226,G__43227,G__43228,G__43229,G__43230,G__43231,G__43232,G__43233,G__43234,G__43235,G__43236,G__43237,G__43238,G__43239);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__43999){
var G__43226 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43227 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43228 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43229 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43230 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43231 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43232 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43233 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43234 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43235 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43236 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43237 = cljs.core.first(arglist__43999);
arglist__43999 = cljs.core.next(arglist__43999);
var G__43238 = cljs.core.first(arglist__43999);
var G__43239 = cljs.core.rest(arglist__43999);
return sci$impl$fns$arity_13__delegate(G__43226,G__43227,G__43228,G__43229,G__43230,G__43231,G__43232,G__43233,G__43234,G__43235,G__43236,G__43237,G__43238,G__43239);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,G__43251,G__43252,G__43253,G__43254){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43240);

(invoc_array[(1)] = G__43241);

(invoc_array[(2)] = G__43242);

(invoc_array[(3)] = G__43243);

(invoc_array[(4)] = G__43244);

(invoc_array[(5)] = G__43245);

(invoc_array[(6)] = G__43246);

(invoc_array[(7)] = G__43247);

(invoc_array[(8)] = G__43248);

(invoc_array[(9)] = G__43249);

(invoc_array[(10)] = G__43250);

(invoc_array[(11)] = G__43251);

(invoc_array[(12)] = G__43252);

(invoc_array[(13)] = G__43253);

(invoc_array[vararg_idx] = G__43254);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,G__43251,G__43252,G__43253,var_args){
var G__43254 = null;
if (arguments.length > 14) {
var G__44000__i = 0, G__44000__a = new Array(arguments.length -  14);
while (G__44000__i < G__44000__a.length) {G__44000__a[G__44000__i] = arguments[G__44000__i + 14]; ++G__44000__i;}
  G__43254 = new cljs.core.IndexedSeq(G__44000__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,G__43251,G__43252,G__43253,G__43254);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__44001){
var G__43240 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43241 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43242 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43243 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43244 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43245 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43246 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43247 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43248 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43249 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43250 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43251 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43252 = cljs.core.first(arglist__44001);
arglist__44001 = cljs.core.next(arglist__44001);
var G__43253 = cljs.core.first(arglist__44001);
var G__43254 = cljs.core.rest(arglist__44001);
return sci$impl$fns$arity_14__delegate(G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,G__43251,G__43252,G__43253,G__43254);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__43255,G__43256,G__43257,G__43258,G__43259,G__43260,G__43261,G__43262,G__43263,G__43264,G__43265,G__43266,G__43267,G__43268,G__43269,G__43270){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43255);

(invoc_array[(1)] = G__43256);

(invoc_array[(2)] = G__43257);

(invoc_array[(3)] = G__43258);

(invoc_array[(4)] = G__43259);

(invoc_array[(5)] = G__43260);

(invoc_array[(6)] = G__43261);

(invoc_array[(7)] = G__43262);

(invoc_array[(8)] = G__43263);

(invoc_array[(9)] = G__43264);

(invoc_array[(10)] = G__43265);

(invoc_array[(11)] = G__43266);

(invoc_array[(12)] = G__43267);

(invoc_array[(13)] = G__43268);

(invoc_array[(14)] = G__43269);

(invoc_array[vararg_idx] = G__43270);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__43255,G__43256,G__43257,G__43258,G__43259,G__43260,G__43261,G__43262,G__43263,G__43264,G__43265,G__43266,G__43267,G__43268,G__43269,var_args){
var G__43270 = null;
if (arguments.length > 15) {
var G__44007__i = 0, G__44007__a = new Array(arguments.length -  15);
while (G__44007__i < G__44007__a.length) {G__44007__a[G__44007__i] = arguments[G__44007__i + 15]; ++G__44007__i;}
  G__43270 = new cljs.core.IndexedSeq(G__44007__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__43255,G__43256,G__43257,G__43258,G__43259,G__43260,G__43261,G__43262,G__43263,G__43264,G__43265,G__43266,G__43267,G__43268,G__43269,G__43270);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__44009){
var G__43255 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43256 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43257 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43258 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43259 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43260 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43261 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43262 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43263 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43264 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43265 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43266 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43267 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43268 = cljs.core.first(arglist__44009);
arglist__44009 = cljs.core.next(arglist__44009);
var G__43269 = cljs.core.first(arglist__44009);
var G__43270 = cljs.core.rest(arglist__44009);
return sci$impl$fns$arity_15__delegate(G__43255,G__43256,G__43257,G__43258,G__43259,G__43260,G__43261,G__43262,G__43263,G__43264,G__43265,G__43266,G__43267,G__43268,G__43269,G__43270);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302,G__43303){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43287);

(invoc_array[(1)] = G__43288);

(invoc_array[(2)] = G__43289);

(invoc_array[(3)] = G__43290);

(invoc_array[(4)] = G__43291);

(invoc_array[(5)] = G__43292);

(invoc_array[(6)] = G__43293);

(invoc_array[(7)] = G__43294);

(invoc_array[(8)] = G__43295);

(invoc_array[(9)] = G__43296);

(invoc_array[(10)] = G__43297);

(invoc_array[(11)] = G__43298);

(invoc_array[(12)] = G__43299);

(invoc_array[(13)] = G__43300);

(invoc_array[(14)] = G__43301);

(invoc_array[(15)] = G__43302);

(invoc_array[vararg_idx] = G__43303);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302,var_args){
var G__43303 = null;
if (arguments.length > 16) {
var G__44012__i = 0, G__44012__a = new Array(arguments.length -  16);
while (G__44012__i < G__44012__a.length) {G__44012__a[G__44012__i] = arguments[G__44012__i + 16]; ++G__44012__i;}
  G__43303 = new cljs.core.IndexedSeq(G__44012__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302,G__43303);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__44013){
var G__43287 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43288 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43289 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43290 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43291 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43292 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43293 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43294 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43295 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43296 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43297 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43298 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43299 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43300 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43301 = cljs.core.first(arglist__44013);
arglist__44013 = cljs.core.next(arglist__44013);
var G__43302 = cljs.core.first(arglist__44013);
var G__43303 = cljs.core.rest(arglist__44013);
return sci$impl$fns$arity_16__delegate(G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302,G__43303);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__43304,G__43305,G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,G__43321){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43304);

(invoc_array[(1)] = G__43305);

(invoc_array[(2)] = G__43306);

(invoc_array[(3)] = G__43307);

(invoc_array[(4)] = G__43308);

(invoc_array[(5)] = G__43309);

(invoc_array[(6)] = G__43310);

(invoc_array[(7)] = G__43311);

(invoc_array[(8)] = G__43312);

(invoc_array[(9)] = G__43313);

(invoc_array[(10)] = G__43314);

(invoc_array[(11)] = G__43315);

(invoc_array[(12)] = G__43316);

(invoc_array[(13)] = G__43317);

(invoc_array[(14)] = G__43318);

(invoc_array[(15)] = G__43319);

(invoc_array[(16)] = G__43320);

(invoc_array[vararg_idx] = G__43321);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__43304,G__43305,G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,var_args){
var G__43321 = null;
if (arguments.length > 17) {
var G__44014__i = 0, G__44014__a = new Array(arguments.length -  17);
while (G__44014__i < G__44014__a.length) {G__44014__a[G__44014__i] = arguments[G__44014__i + 17]; ++G__44014__i;}
  G__43321 = new cljs.core.IndexedSeq(G__44014__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__43304,G__43305,G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,G__43321);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__44017){
var G__43304 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43305 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43306 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43307 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43308 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43309 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43310 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43311 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43312 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43313 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43314 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43315 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43316 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43317 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43318 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43319 = cljs.core.first(arglist__44017);
arglist__44017 = cljs.core.next(arglist__44017);
var G__43320 = cljs.core.first(arglist__44017);
var G__43321 = cljs.core.rest(arglist__44017);
return sci$impl$fns$arity_17__delegate(G__43304,G__43305,G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,G__43321);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__43342,G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,G__43360){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43342);

(invoc_array[(1)] = G__43343);

(invoc_array[(2)] = G__43344);

(invoc_array[(3)] = G__43345);

(invoc_array[(4)] = G__43346);

(invoc_array[(5)] = G__43347);

(invoc_array[(6)] = G__43348);

(invoc_array[(7)] = G__43349);

(invoc_array[(8)] = G__43350);

(invoc_array[(9)] = G__43351);

(invoc_array[(10)] = G__43352);

(invoc_array[(11)] = G__43353);

(invoc_array[(12)] = G__43354);

(invoc_array[(13)] = G__43355);

(invoc_array[(14)] = G__43356);

(invoc_array[(15)] = G__43357);

(invoc_array[(16)] = G__43358);

(invoc_array[(17)] = G__43359);

(invoc_array[vararg_idx] = G__43360);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__43342,G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,var_args){
var G__43360 = null;
if (arguments.length > 18) {
var G__44024__i = 0, G__44024__a = new Array(arguments.length -  18);
while (G__44024__i < G__44024__a.length) {G__44024__a[G__44024__i] = arguments[G__44024__i + 18]; ++G__44024__i;}
  G__43360 = new cljs.core.IndexedSeq(G__44024__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__43342,G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,G__43360);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__44025){
var G__43342 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43343 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43344 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43345 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43346 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43347 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43348 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43349 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43350 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43351 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43352 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43353 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43354 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43355 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43356 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43357 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43358 = cljs.core.first(arglist__44025);
arglist__44025 = cljs.core.next(arglist__44025);
var G__43359 = cljs.core.first(arglist__44025);
var G__43360 = cljs.core.rest(arglist__44025);
return sci$impl$fns$arity_18__delegate(G__43342,G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,G__43360);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__43363,G__43364,G__43365,G__43366,G__43367,G__43368,G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43363);

(invoc_array[(1)] = G__43364);

(invoc_array[(2)] = G__43365);

(invoc_array[(3)] = G__43366);

(invoc_array[(4)] = G__43367);

(invoc_array[(5)] = G__43368);

(invoc_array[(6)] = G__43369);

(invoc_array[(7)] = G__43370);

(invoc_array[(8)] = G__43371);

(invoc_array[(9)] = G__43372);

(invoc_array[(10)] = G__43373);

(invoc_array[(11)] = G__43374);

(invoc_array[(12)] = G__43375);

(invoc_array[(13)] = G__43376);

(invoc_array[(14)] = G__43377);

(invoc_array[(15)] = G__43378);

(invoc_array[(16)] = G__43379);

(invoc_array[(17)] = G__43380);

(invoc_array[(18)] = G__43381);

(invoc_array[vararg_idx] = G__43382);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__43363,G__43364,G__43365,G__43366,G__43367,G__43368,G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,var_args){
var G__43382 = null;
if (arguments.length > 19) {
var G__44026__i = 0, G__44026__a = new Array(arguments.length -  19);
while (G__44026__i < G__44026__a.length) {G__44026__a[G__44026__i] = arguments[G__44026__i + 19]; ++G__44026__i;}
  G__43382 = new cljs.core.IndexedSeq(G__44026__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__43363,G__43364,G__43365,G__43366,G__43367,G__43368,G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__44027){
var G__43363 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43364 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43365 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43366 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43367 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43368 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43369 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43370 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43371 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43372 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43373 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43374 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43375 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43376 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43377 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43378 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43379 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43380 = cljs.core.first(arglist__44027);
arglist__44027 = cljs.core.next(arglist__44027);
var G__43381 = cljs.core.first(arglist__44027);
var G__43382 = cljs.core.rest(arglist__44027);
return sci$impl$fns$arity_19__delegate(G__43363,G__43364,G__43365,G__43366,G__43367,G__43368,G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__43387,G__43388,G__43389,G__43390,G__43391,G__43392,G__43393,G__43394,G__43395,G__43396,G__43397,G__43398,G__43399,G__43400,G__43401,G__43402,G__43403,G__43404,G__43405,G__43406,G__43407){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43387);

(invoc_array[(1)] = G__43388);

(invoc_array[(2)] = G__43389);

(invoc_array[(3)] = G__43390);

(invoc_array[(4)] = G__43391);

(invoc_array[(5)] = G__43392);

(invoc_array[(6)] = G__43393);

(invoc_array[(7)] = G__43394);

(invoc_array[(8)] = G__43395);

(invoc_array[(9)] = G__43396);

(invoc_array[(10)] = G__43397);

(invoc_array[(11)] = G__43398);

(invoc_array[(12)] = G__43399);

(invoc_array[(13)] = G__43400);

(invoc_array[(14)] = G__43401);

(invoc_array[(15)] = G__43402);

(invoc_array[(16)] = G__43403);

(invoc_array[(17)] = G__43404);

(invoc_array[(18)] = G__43405);

(invoc_array[(19)] = G__43406);

(invoc_array[vararg_idx] = G__43407);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__43387,G__43388,G__43389,G__43390,G__43391,G__43392,G__43393,G__43394,G__43395,G__43396,G__43397,G__43398,G__43399,G__43400,G__43401,G__43402,G__43403,G__43404,G__43405,G__43406,var_args){
var G__43407 = null;
if (arguments.length > 20) {
var G__44035__i = 0, G__44035__a = new Array(arguments.length -  20);
while (G__44035__i < G__44035__a.length) {G__44035__a[G__44035__i] = arguments[G__44035__i + 20]; ++G__44035__i;}
  G__43407 = new cljs.core.IndexedSeq(G__44035__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__43387,G__43388,G__43389,G__43390,G__43391,G__43392,G__43393,G__43394,G__43395,G__43396,G__43397,G__43398,G__43399,G__43400,G__43401,G__43402,G__43403,G__43404,G__43405,G__43406,G__43407);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__44036){
var G__43387 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43388 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43389 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43390 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43391 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43392 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43393 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43394 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43395 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43396 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43397 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43398 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43399 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43400 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43401 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43402 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43403 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43404 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43405 = cljs.core.first(arglist__44036);
arglist__44036 = cljs.core.next(arglist__44036);
var G__43406 = cljs.core.first(arglist__44036);
var G__43407 = cljs.core.rest(arglist__44036);
return sci$impl$fns$arity_20__delegate(G__43387,G__43388,G__43389,G__43390,G__43391,G__43392,G__43393,G__43394,G__43395,G__43396,G__43397,G__43398,G__43399,G__43400,G__43401,G__43402,G__43403,G__43404,G__43405,G__43406,G__43407);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43128)].join('')));

}
})():(function (){var G__43409 = fixed_arity;
switch (G__43409) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__42332__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42332__auto__)){
continue;
} else {
return ret__42332__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__43413){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43413);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__43418,G__43419){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43418);

(invoc_array[(1)] = G__43419);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__43420,G__43421,G__43422){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43420);

(invoc_array[(1)] = G__43421);

(invoc_array[(2)] = G__43422);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__43423,G__43424,G__43425,G__43426){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43423);

(invoc_array[(1)] = G__43424);

(invoc_array[(2)] = G__43425);

(invoc_array[(3)] = G__43426);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__43440,G__43441,G__43442,G__43443,G__43444){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43440);

(invoc_array[(1)] = G__43441);

(invoc_array[(2)] = G__43442);

(invoc_array[(3)] = G__43443);

(invoc_array[(4)] = G__43444);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__43445,G__43446,G__43447,G__43448,G__43449,G__43450){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43445);

(invoc_array[(1)] = G__43446);

(invoc_array[(2)] = G__43447);

(invoc_array[(3)] = G__43448);

(invoc_array[(4)] = G__43449);

(invoc_array[(5)] = G__43450);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__43454,G__43455,G__43456,G__43457,G__43458,G__43459,G__43460){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43454);

(invoc_array[(1)] = G__43455);

(invoc_array[(2)] = G__43456);

(invoc_array[(3)] = G__43457);

(invoc_array[(4)] = G__43458);

(invoc_array[(5)] = G__43459);

(invoc_array[(6)] = G__43460);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__43473,G__43474,G__43475,G__43476,G__43477,G__43478,G__43479,G__43480){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43473);

(invoc_array[(1)] = G__43474);

(invoc_array[(2)] = G__43475);

(invoc_array[(3)] = G__43476);

(invoc_array[(4)] = G__43477);

(invoc_array[(5)] = G__43478);

(invoc_array[(6)] = G__43479);

(invoc_array[(7)] = G__43480);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__43481,G__43482,G__43483,G__43484,G__43485,G__43486,G__43487,G__43488,G__43489){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43481);

(invoc_array[(1)] = G__43482);

(invoc_array[(2)] = G__43483);

(invoc_array[(3)] = G__43484);

(invoc_array[(4)] = G__43485);

(invoc_array[(5)] = G__43486);

(invoc_array[(6)] = G__43487);

(invoc_array[(7)] = G__43488);

(invoc_array[(8)] = G__43489);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__43497,G__43498,G__43499,G__43500,G__43501,G__43502,G__43503,G__43504,G__43505,G__43506){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43497);

(invoc_array[(1)] = G__43498);

(invoc_array[(2)] = G__43499);

(invoc_array[(3)] = G__43500);

(invoc_array[(4)] = G__43501);

(invoc_array[(5)] = G__43502);

(invoc_array[(6)] = G__43503);

(invoc_array[(7)] = G__43504);

(invoc_array[(8)] = G__43505);

(invoc_array[(9)] = G__43506);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__43518,G__43519,G__43520,G__43521,G__43522,G__43523,G__43524,G__43525,G__43526,G__43527,G__43528){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43518);

(invoc_array[(1)] = G__43519);

(invoc_array[(2)] = G__43520);

(invoc_array[(3)] = G__43521);

(invoc_array[(4)] = G__43522);

(invoc_array[(5)] = G__43523);

(invoc_array[(6)] = G__43524);

(invoc_array[(7)] = G__43525);

(invoc_array[(8)] = G__43526);

(invoc_array[(9)] = G__43527);

(invoc_array[(10)] = G__43528);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__43532,G__43533,G__43534,G__43535,G__43536,G__43537,G__43538,G__43539,G__43540,G__43541,G__43542,G__43543){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43532);

(invoc_array[(1)] = G__43533);

(invoc_array[(2)] = G__43534);

(invoc_array[(3)] = G__43535);

(invoc_array[(4)] = G__43536);

(invoc_array[(5)] = G__43537);

(invoc_array[(6)] = G__43538);

(invoc_array[(7)] = G__43539);

(invoc_array[(8)] = G__43540);

(invoc_array[(9)] = G__43541);

(invoc_array[(10)] = G__43542);

(invoc_array[(11)] = G__43543);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__43544,G__43545,G__43546,G__43547,G__43548,G__43549,G__43550,G__43551,G__43552,G__43553,G__43554,G__43555,G__43556){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43544);

(invoc_array[(1)] = G__43545);

(invoc_array[(2)] = G__43546);

(invoc_array[(3)] = G__43547);

(invoc_array[(4)] = G__43548);

(invoc_array[(5)] = G__43549);

(invoc_array[(6)] = G__43550);

(invoc_array[(7)] = G__43551);

(invoc_array[(8)] = G__43552);

(invoc_array[(9)] = G__43553);

(invoc_array[(10)] = G__43554);

(invoc_array[(11)] = G__43555);

(invoc_array[(12)] = G__43556);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__43564,G__43565,G__43566,G__43567,G__43568,G__43569,G__43570,G__43571,G__43572,G__43573,G__43574,G__43575,G__43576,G__43577){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43564);

(invoc_array[(1)] = G__43565);

(invoc_array[(2)] = G__43566);

(invoc_array[(3)] = G__43567);

(invoc_array[(4)] = G__43568);

(invoc_array[(5)] = G__43569);

(invoc_array[(6)] = G__43570);

(invoc_array[(7)] = G__43571);

(invoc_array[(8)] = G__43572);

(invoc_array[(9)] = G__43573);

(invoc_array[(10)] = G__43574);

(invoc_array[(11)] = G__43575);

(invoc_array[(12)] = G__43576);

(invoc_array[(13)] = G__43577);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__43578,G__43579,G__43580,G__43581,G__43582,G__43583,G__43584,G__43585,G__43586,G__43587,G__43588,G__43589,G__43590,G__43591,G__43592){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43578);

(invoc_array[(1)] = G__43579);

(invoc_array[(2)] = G__43580);

(invoc_array[(3)] = G__43581);

(invoc_array[(4)] = G__43582);

(invoc_array[(5)] = G__43583);

(invoc_array[(6)] = G__43584);

(invoc_array[(7)] = G__43585);

(invoc_array[(8)] = G__43586);

(invoc_array[(9)] = G__43587);

(invoc_array[(10)] = G__43588);

(invoc_array[(11)] = G__43589);

(invoc_array[(12)] = G__43590);

(invoc_array[(13)] = G__43591);

(invoc_array[(14)] = G__43592);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__43597,G__43598,G__43599,G__43600,G__43601,G__43602,G__43603,G__43604,G__43605,G__43606,G__43607,G__43608,G__43609,G__43610,G__43611,G__43612){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43597);

(invoc_array[(1)] = G__43598);

(invoc_array[(2)] = G__43599);

(invoc_array[(3)] = G__43600);

(invoc_array[(4)] = G__43601);

(invoc_array[(5)] = G__43602);

(invoc_array[(6)] = G__43603);

(invoc_array[(7)] = G__43604);

(invoc_array[(8)] = G__43605);

(invoc_array[(9)] = G__43606);

(invoc_array[(10)] = G__43607);

(invoc_array[(11)] = G__43608);

(invoc_array[(12)] = G__43609);

(invoc_array[(13)] = G__43610);

(invoc_array[(14)] = G__43611);

(invoc_array[(15)] = G__43612);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__43613,G__43614,G__43615,G__43616,G__43617,G__43618,G__43619,G__43620,G__43621,G__43622,G__43623,G__43624,G__43625,G__43626,G__43627,G__43628,G__43629){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43613);

(invoc_array[(1)] = G__43614);

(invoc_array[(2)] = G__43615);

(invoc_array[(3)] = G__43616);

(invoc_array[(4)] = G__43617);

(invoc_array[(5)] = G__43618);

(invoc_array[(6)] = G__43619);

(invoc_array[(7)] = G__43620);

(invoc_array[(8)] = G__43621);

(invoc_array[(9)] = G__43622);

(invoc_array[(10)] = G__43623);

(invoc_array[(11)] = G__43624);

(invoc_array[(12)] = G__43625);

(invoc_array[(13)] = G__43626);

(invoc_array[(14)] = G__43627);

(invoc_array[(15)] = G__43628);

(invoc_array[(16)] = G__43629);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__43630,G__43631,G__43632,G__43633,G__43634,G__43635,G__43636,G__43637,G__43638,G__43639,G__43640,G__43641,G__43642,G__43643,G__43644,G__43645,G__43646,G__43647){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43630);

(invoc_array[(1)] = G__43631);

(invoc_array[(2)] = G__43632);

(invoc_array[(3)] = G__43633);

(invoc_array[(4)] = G__43634);

(invoc_array[(5)] = G__43635);

(invoc_array[(6)] = G__43636);

(invoc_array[(7)] = G__43637);

(invoc_array[(8)] = G__43638);

(invoc_array[(9)] = G__43639);

(invoc_array[(10)] = G__43640);

(invoc_array[(11)] = G__43641);

(invoc_array[(12)] = G__43642);

(invoc_array[(13)] = G__43643);

(invoc_array[(14)] = G__43644);

(invoc_array[(15)] = G__43645);

(invoc_array[(16)] = G__43646);

(invoc_array[(17)] = G__43647);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__43657,G__43658,G__43659,G__43660,G__43661,G__43662,G__43663,G__43664,G__43665,G__43666,G__43667,G__43668,G__43669,G__43670,G__43671,G__43672,G__43673,G__43674,G__43675){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43657);

(invoc_array[(1)] = G__43658);

(invoc_array[(2)] = G__43659);

(invoc_array[(3)] = G__43660);

(invoc_array[(4)] = G__43661);

(invoc_array[(5)] = G__43662);

(invoc_array[(6)] = G__43663);

(invoc_array[(7)] = G__43664);

(invoc_array[(8)] = G__43665);

(invoc_array[(9)] = G__43666);

(invoc_array[(10)] = G__43667);

(invoc_array[(11)] = G__43668);

(invoc_array[(12)] = G__43669);

(invoc_array[(13)] = G__43670);

(invoc_array[(14)] = G__43671);

(invoc_array[(15)] = G__43672);

(invoc_array[(16)] = G__43673);

(invoc_array[(17)] = G__43674);

(invoc_array[(18)] = G__43675);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__43678,G__43679,G__43680,G__43681,G__43682,G__43683,G__43684,G__43685,G__43686,G__43687,G__43688,G__43689,G__43690,G__43691,G__43692,G__43693,G__43694,G__43695,G__43696,G__43697){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43678);

(invoc_array[(1)] = G__43679);

(invoc_array[(2)] = G__43680);

(invoc_array[(3)] = G__43681);

(invoc_array[(4)] = G__43682);

(invoc_array[(5)] = G__43683);

(invoc_array[(6)] = G__43684);

(invoc_array[(7)] = G__43685);

(invoc_array[(8)] = G__43686);

(invoc_array[(9)] = G__43687);

(invoc_array[(10)] = G__43688);

(invoc_array[(11)] = G__43689);

(invoc_array[(12)] = G__43690);

(invoc_array[(13)] = G__43691);

(invoc_array[(14)] = G__43692);

(invoc_array[(15)] = G__43693);

(invoc_array[(16)] = G__43694);

(invoc_array[(17)] = G__43695);

(invoc_array[(18)] = G__43696);

(invoc_array[(19)] = G__43697);

while(true){
var ret__42333__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42333__auto__)){
continue;
} else {
return ret__42333__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43409)].join('')));

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
var G__44062 = cljs.core.next(params__$1);
var G__44063 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__44064 = lets;
params__$1 = G__44062;
new_params = G__44063;
lets = G__44064;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__44065 = cljs.core.next(params__$1);
var G__44066 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__44067 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__44065;
new_params = G__44066;
lets = G__44067;
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
var len__5749__auto___44071 = arguments.length;
var i__5750__auto___44072 = (0);
while(true){
if((i__5750__auto___44072 < len__5749__auto___44071)){
args__5755__auto__.push((arguments[i__5750__auto___44072]));

var G__44073 = (i__5750__auto___44072 + (1));
i__5750__auto___44072 = G__44073;
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

var vec__43865 = sig;
var seq__43866 = cljs.core.seq(vec__43865);
var first__43867 = cljs.core.first(seq__43866);
var seq__43866__$1 = cljs.core.next(seq__43866);
var params = first__43867;
var body = seq__43866__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq43840){
var G__43841 = cljs.core.first(seq43840);
var seq43840__$1 = cljs.core.next(seq43840);
var G__43842 = cljs.core.first(seq43840__$1);
var seq43840__$2 = cljs.core.next(seq43840__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43841,G__43842,seq43840__$2);
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
var G__44081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__44082 = cljs.core.next(fdecls);
ret = G__44081;
fdecls = G__44082;
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
var len__5749__auto___44083 = arguments.length;
var i__5750__auto___44085 = (0);
while(true){
if((i__5750__auto___44085 < len__5749__auto___44083)){
args__5755__auto__.push((arguments[i__5750__auto___44085]));

var G__44086 = (i__5750__auto___44085 + (1));
i__5750__auto___44085 = G__44086;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq43882){
var G__43887 = cljs.core.first(seq43882);
var seq43882__$1 = cljs.core.next(seq43882);
var G__43888 = cljs.core.first(seq43882__$1);
var seq43882__$2 = cljs.core.next(seq43882__$1);
var G__43889 = cljs.core.first(seq43882__$2);
var seq43882__$3 = cljs.core.next(seq43882__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43887,G__43888,G__43889,seq43882__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44093 = arguments.length;
var i__5750__auto___44094 = (0);
while(true){
if((i__5750__auto___44094 < len__5749__auto___44093)){
args__5755__auto__.push((arguments[i__5750__auto___44094]));

var G__44095 = (i__5750__auto___44094 + (1));
i__5750__auto___44094 = G__44095;
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
var G__44098 = cljs.core.cons(f,p);
var G__44099 = cljs.core.next(args__$1);
p = G__44098;
args__$1 = G__44099;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__44101 = cljs.core.cons(f,p);
var G__44102 = cljs.core.next(args__$1);
p = G__44101;
args__$1 = G__44102;
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
var G__44104 = cljs.core.next(fd);
fd = G__44104;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__44105 = cljs.core.next(fd);
fd = G__44105;
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
var G__44106 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__44107 = cljs.core.next(ds);
acc = G__44106;
ds = G__44107;
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
var G__44108 = cljs.core.next(p);
var G__44109 = cljs.core.cons(cljs.core.first(p),d);
p = G__44108;
d = G__44109;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq43913){
var G__43914 = cljs.core.first(seq43913);
var seq43913__$1 = cljs.core.next(seq43913);
var G__43915 = cljs.core.first(seq43913__$1);
var seq43913__$2 = cljs.core.next(seq43913__$1);
var G__43916 = cljs.core.first(seq43913__$2);
var seq43913__$3 = cljs.core.next(seq43913__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43914,G__43915,G__43916,seq43913__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
