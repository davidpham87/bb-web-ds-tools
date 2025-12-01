goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__29096 = arguments.length;
switch (G__29096) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__29097 = fixed_arity;
switch (G__29097) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__29098){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__29098);

while(true){
var ret__28254__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28254__auto__)){
continue;
} else {
return ret__28254__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__29098 = null;
if (arguments.length > 0) {
var G__29899__i = 0, G__29899__a = new Array(arguments.length -  0);
while (G__29899__i < G__29899__a.length) {G__29899__a[G__29899__i] = arguments[G__29899__i + 0]; ++G__29899__i;}
  G__29098 = new cljs.core.IndexedSeq(G__29899__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__29098);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__29900){
var G__29098 = cljs.core.seq(arglist__29900);
return sci$impl$fns$arity_0__delegate(G__29098);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__29099,G__29100){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29099);

(invoc_array[vararg_idx] = G__29100);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__29099,var_args){
var G__29100 = null;
if (arguments.length > 1) {
var G__29903__i = 0, G__29903__a = new Array(arguments.length -  1);
while (G__29903__i < G__29903__a.length) {G__29903__a[G__29903__i] = arguments[G__29903__i + 1]; ++G__29903__i;}
  G__29100 = new cljs.core.IndexedSeq(G__29903__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__29099,G__29100);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__29904){
var G__29099 = cljs.core.first(arglist__29904);
var G__29100 = cljs.core.rest(arglist__29904);
return sci$impl$fns$arity_1__delegate(G__29099,G__29100);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__29101,G__29102,G__29103){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29101);

(invoc_array[(1)] = G__29102);

(invoc_array[vararg_idx] = G__29103);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__29101,G__29102,var_args){
var G__29103 = null;
if (arguments.length > 2) {
var G__29908__i = 0, G__29908__a = new Array(arguments.length -  2);
while (G__29908__i < G__29908__a.length) {G__29908__a[G__29908__i] = arguments[G__29908__i + 2]; ++G__29908__i;}
  G__29103 = new cljs.core.IndexedSeq(G__29908__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__29101,G__29102,G__29103);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__29909){
var G__29101 = cljs.core.first(arglist__29909);
arglist__29909 = cljs.core.next(arglist__29909);
var G__29102 = cljs.core.first(arglist__29909);
var G__29103 = cljs.core.rest(arglist__29909);
return sci$impl$fns$arity_2__delegate(G__29101,G__29102,G__29103);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__29104,G__29105,G__29106,G__29107){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29104);

(invoc_array[(1)] = G__29105);

(invoc_array[(2)] = G__29106);

(invoc_array[vararg_idx] = G__29107);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__29104,G__29105,G__29106,var_args){
var G__29107 = null;
if (arguments.length > 3) {
var G__29910__i = 0, G__29910__a = new Array(arguments.length -  3);
while (G__29910__i < G__29910__a.length) {G__29910__a[G__29910__i] = arguments[G__29910__i + 3]; ++G__29910__i;}
  G__29107 = new cljs.core.IndexedSeq(G__29910__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__29104,G__29105,G__29106,G__29107);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__29911){
var G__29104 = cljs.core.first(arglist__29911);
arglist__29911 = cljs.core.next(arglist__29911);
var G__29105 = cljs.core.first(arglist__29911);
arglist__29911 = cljs.core.next(arglist__29911);
var G__29106 = cljs.core.first(arglist__29911);
var G__29107 = cljs.core.rest(arglist__29911);
return sci$impl$fns$arity_3__delegate(G__29104,G__29105,G__29106,G__29107);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__29108,G__29109,G__29110,G__29111,G__29112){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29108);

(invoc_array[(1)] = G__29109);

(invoc_array[(2)] = G__29110);

(invoc_array[(3)] = G__29111);

(invoc_array[vararg_idx] = G__29112);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__29108,G__29109,G__29110,G__29111,var_args){
var G__29112 = null;
if (arguments.length > 4) {
var G__29912__i = 0, G__29912__a = new Array(arguments.length -  4);
while (G__29912__i < G__29912__a.length) {G__29912__a[G__29912__i] = arguments[G__29912__i + 4]; ++G__29912__i;}
  G__29112 = new cljs.core.IndexedSeq(G__29912__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__29108,G__29109,G__29110,G__29111,G__29112);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__29913){
var G__29108 = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var G__29109 = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var G__29110 = cljs.core.first(arglist__29913);
arglist__29913 = cljs.core.next(arglist__29913);
var G__29111 = cljs.core.first(arglist__29913);
var G__29112 = cljs.core.rest(arglist__29913);
return sci$impl$fns$arity_4__delegate(G__29108,G__29109,G__29110,G__29111,G__29112);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__29113,G__29114,G__29115,G__29116,G__29117,G__29118){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29113);

(invoc_array[(1)] = G__29114);

(invoc_array[(2)] = G__29115);

(invoc_array[(3)] = G__29116);

(invoc_array[(4)] = G__29117);

(invoc_array[vararg_idx] = G__29118);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__29113,G__29114,G__29115,G__29116,G__29117,var_args){
var G__29118 = null;
if (arguments.length > 5) {
var G__29914__i = 0, G__29914__a = new Array(arguments.length -  5);
while (G__29914__i < G__29914__a.length) {G__29914__a[G__29914__i] = arguments[G__29914__i + 5]; ++G__29914__i;}
  G__29118 = new cljs.core.IndexedSeq(G__29914__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__29113,G__29114,G__29115,G__29116,G__29117,G__29118);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__29915){
var G__29113 = cljs.core.first(arglist__29915);
arglist__29915 = cljs.core.next(arglist__29915);
var G__29114 = cljs.core.first(arglist__29915);
arglist__29915 = cljs.core.next(arglist__29915);
var G__29115 = cljs.core.first(arglist__29915);
arglist__29915 = cljs.core.next(arglist__29915);
var G__29116 = cljs.core.first(arglist__29915);
arglist__29915 = cljs.core.next(arglist__29915);
var G__29117 = cljs.core.first(arglist__29915);
var G__29118 = cljs.core.rest(arglist__29915);
return sci$impl$fns$arity_5__delegate(G__29113,G__29114,G__29115,G__29116,G__29117,G__29118);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__29119,G__29120,G__29121,G__29122,G__29123,G__29124,G__29125){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29119);

(invoc_array[(1)] = G__29120);

(invoc_array[(2)] = G__29121);

(invoc_array[(3)] = G__29122);

(invoc_array[(4)] = G__29123);

(invoc_array[(5)] = G__29124);

(invoc_array[vararg_idx] = G__29125);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__29119,G__29120,G__29121,G__29122,G__29123,G__29124,var_args){
var G__29125 = null;
if (arguments.length > 6) {
var G__29916__i = 0, G__29916__a = new Array(arguments.length -  6);
while (G__29916__i < G__29916__a.length) {G__29916__a[G__29916__i] = arguments[G__29916__i + 6]; ++G__29916__i;}
  G__29125 = new cljs.core.IndexedSeq(G__29916__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__29119,G__29120,G__29121,G__29122,G__29123,G__29124,G__29125);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__29917){
var G__29119 = cljs.core.first(arglist__29917);
arglist__29917 = cljs.core.next(arglist__29917);
var G__29120 = cljs.core.first(arglist__29917);
arglist__29917 = cljs.core.next(arglist__29917);
var G__29121 = cljs.core.first(arglist__29917);
arglist__29917 = cljs.core.next(arglist__29917);
var G__29122 = cljs.core.first(arglist__29917);
arglist__29917 = cljs.core.next(arglist__29917);
var G__29123 = cljs.core.first(arglist__29917);
arglist__29917 = cljs.core.next(arglist__29917);
var G__29124 = cljs.core.first(arglist__29917);
var G__29125 = cljs.core.rest(arglist__29917);
return sci$impl$fns$arity_6__delegate(G__29119,G__29120,G__29121,G__29122,G__29123,G__29124,G__29125);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__29130,G__29131,G__29132,G__29133,G__29134,G__29135,G__29136,G__29137){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29130);

(invoc_array[(1)] = G__29131);

(invoc_array[(2)] = G__29132);

(invoc_array[(3)] = G__29133);

(invoc_array[(4)] = G__29134);

(invoc_array[(5)] = G__29135);

(invoc_array[(6)] = G__29136);

(invoc_array[vararg_idx] = G__29137);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__29130,G__29131,G__29132,G__29133,G__29134,G__29135,G__29136,var_args){
var G__29137 = null;
if (arguments.length > 7) {
var G__29918__i = 0, G__29918__a = new Array(arguments.length -  7);
while (G__29918__i < G__29918__a.length) {G__29918__a[G__29918__i] = arguments[G__29918__i + 7]; ++G__29918__i;}
  G__29137 = new cljs.core.IndexedSeq(G__29918__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__29130,G__29131,G__29132,G__29133,G__29134,G__29135,G__29136,G__29137);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__29919){
var G__29130 = cljs.core.first(arglist__29919);
arglist__29919 = cljs.core.next(arglist__29919);
var G__29131 = cljs.core.first(arglist__29919);
arglist__29919 = cljs.core.next(arglist__29919);
var G__29132 = cljs.core.first(arglist__29919);
arglist__29919 = cljs.core.next(arglist__29919);
var G__29133 = cljs.core.first(arglist__29919);
arglist__29919 = cljs.core.next(arglist__29919);
var G__29134 = cljs.core.first(arglist__29919);
arglist__29919 = cljs.core.next(arglist__29919);
var G__29135 = cljs.core.first(arglist__29919);
arglist__29919 = cljs.core.next(arglist__29919);
var G__29136 = cljs.core.first(arglist__29919);
var G__29137 = cljs.core.rest(arglist__29919);
return sci$impl$fns$arity_7__delegate(G__29130,G__29131,G__29132,G__29133,G__29134,G__29135,G__29136,G__29137);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__29138,G__29139,G__29140,G__29141,G__29142,G__29143,G__29144,G__29145,G__29146){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29138);

(invoc_array[(1)] = G__29139);

(invoc_array[(2)] = G__29140);

(invoc_array[(3)] = G__29141);

(invoc_array[(4)] = G__29142);

(invoc_array[(5)] = G__29143);

(invoc_array[(6)] = G__29144);

(invoc_array[(7)] = G__29145);

(invoc_array[vararg_idx] = G__29146);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__29138,G__29139,G__29140,G__29141,G__29142,G__29143,G__29144,G__29145,var_args){
var G__29146 = null;
if (arguments.length > 8) {
var G__29920__i = 0, G__29920__a = new Array(arguments.length -  8);
while (G__29920__i < G__29920__a.length) {G__29920__a[G__29920__i] = arguments[G__29920__i + 8]; ++G__29920__i;}
  G__29146 = new cljs.core.IndexedSeq(G__29920__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__29138,G__29139,G__29140,G__29141,G__29142,G__29143,G__29144,G__29145,G__29146);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__29921){
var G__29138 = cljs.core.first(arglist__29921);
arglist__29921 = cljs.core.next(arglist__29921);
var G__29139 = cljs.core.first(arglist__29921);
arglist__29921 = cljs.core.next(arglist__29921);
var G__29140 = cljs.core.first(arglist__29921);
arglist__29921 = cljs.core.next(arglist__29921);
var G__29141 = cljs.core.first(arglist__29921);
arglist__29921 = cljs.core.next(arglist__29921);
var G__29142 = cljs.core.first(arglist__29921);
arglist__29921 = cljs.core.next(arglist__29921);
var G__29143 = cljs.core.first(arglist__29921);
arglist__29921 = cljs.core.next(arglist__29921);
var G__29144 = cljs.core.first(arglist__29921);
arglist__29921 = cljs.core.next(arglist__29921);
var G__29145 = cljs.core.first(arglist__29921);
var G__29146 = cljs.core.rest(arglist__29921);
return sci$impl$fns$arity_8__delegate(G__29138,G__29139,G__29140,G__29141,G__29142,G__29143,G__29144,G__29145,G__29146);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__29147,G__29148,G__29149,G__29150,G__29151,G__29152,G__29153,G__29154,G__29155,G__29156){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29147);

(invoc_array[(1)] = G__29148);

(invoc_array[(2)] = G__29149);

(invoc_array[(3)] = G__29150);

(invoc_array[(4)] = G__29151);

(invoc_array[(5)] = G__29152);

(invoc_array[(6)] = G__29153);

(invoc_array[(7)] = G__29154);

(invoc_array[(8)] = G__29155);

(invoc_array[vararg_idx] = G__29156);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__29147,G__29148,G__29149,G__29150,G__29151,G__29152,G__29153,G__29154,G__29155,var_args){
var G__29156 = null;
if (arguments.length > 9) {
var G__29922__i = 0, G__29922__a = new Array(arguments.length -  9);
while (G__29922__i < G__29922__a.length) {G__29922__a[G__29922__i] = arguments[G__29922__i + 9]; ++G__29922__i;}
  G__29156 = new cljs.core.IndexedSeq(G__29922__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__29147,G__29148,G__29149,G__29150,G__29151,G__29152,G__29153,G__29154,G__29155,G__29156);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__29923){
var G__29147 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29148 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29149 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29150 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29151 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29152 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29153 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29154 = cljs.core.first(arglist__29923);
arglist__29923 = cljs.core.next(arglist__29923);
var G__29155 = cljs.core.first(arglist__29923);
var G__29156 = cljs.core.rest(arglist__29923);
return sci$impl$fns$arity_9__delegate(G__29147,G__29148,G__29149,G__29150,G__29151,G__29152,G__29153,G__29154,G__29155,G__29156);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__29157,G__29158,G__29159,G__29160,G__29161,G__29162,G__29163,G__29164,G__29165,G__29166,G__29167){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29157);

(invoc_array[(1)] = G__29158);

(invoc_array[(2)] = G__29159);

(invoc_array[(3)] = G__29160);

(invoc_array[(4)] = G__29161);

(invoc_array[(5)] = G__29162);

(invoc_array[(6)] = G__29163);

(invoc_array[(7)] = G__29164);

(invoc_array[(8)] = G__29165);

(invoc_array[(9)] = G__29166);

(invoc_array[vararg_idx] = G__29167);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__29157,G__29158,G__29159,G__29160,G__29161,G__29162,G__29163,G__29164,G__29165,G__29166,var_args){
var G__29167 = null;
if (arguments.length > 10) {
var G__29924__i = 0, G__29924__a = new Array(arguments.length -  10);
while (G__29924__i < G__29924__a.length) {G__29924__a[G__29924__i] = arguments[G__29924__i + 10]; ++G__29924__i;}
  G__29167 = new cljs.core.IndexedSeq(G__29924__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__29157,G__29158,G__29159,G__29160,G__29161,G__29162,G__29163,G__29164,G__29165,G__29166,G__29167);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__29925){
var G__29157 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29158 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29159 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29160 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29161 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29162 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29163 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29164 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29165 = cljs.core.first(arglist__29925);
arglist__29925 = cljs.core.next(arglist__29925);
var G__29166 = cljs.core.first(arglist__29925);
var G__29167 = cljs.core.rest(arglist__29925);
return sci$impl$fns$arity_10__delegate(G__29157,G__29158,G__29159,G__29160,G__29161,G__29162,G__29163,G__29164,G__29165,G__29166,G__29167);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__29172,G__29173,G__29174,G__29175,G__29176,G__29177,G__29178,G__29179,G__29180,G__29181,G__29182,G__29183){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29172);

(invoc_array[(1)] = G__29173);

(invoc_array[(2)] = G__29174);

(invoc_array[(3)] = G__29175);

(invoc_array[(4)] = G__29176);

(invoc_array[(5)] = G__29177);

(invoc_array[(6)] = G__29178);

(invoc_array[(7)] = G__29179);

(invoc_array[(8)] = G__29180);

(invoc_array[(9)] = G__29181);

(invoc_array[(10)] = G__29182);

(invoc_array[vararg_idx] = G__29183);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__29172,G__29173,G__29174,G__29175,G__29176,G__29177,G__29178,G__29179,G__29180,G__29181,G__29182,var_args){
var G__29183 = null;
if (arguments.length > 11) {
var G__29928__i = 0, G__29928__a = new Array(arguments.length -  11);
while (G__29928__i < G__29928__a.length) {G__29928__a[G__29928__i] = arguments[G__29928__i + 11]; ++G__29928__i;}
  G__29183 = new cljs.core.IndexedSeq(G__29928__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__29172,G__29173,G__29174,G__29175,G__29176,G__29177,G__29178,G__29179,G__29180,G__29181,G__29182,G__29183);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__29929){
var G__29172 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29173 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29174 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29175 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29176 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29177 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29178 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29179 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29180 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29181 = cljs.core.first(arglist__29929);
arglist__29929 = cljs.core.next(arglist__29929);
var G__29182 = cljs.core.first(arglist__29929);
var G__29183 = cljs.core.rest(arglist__29929);
return sci$impl$fns$arity_11__delegate(G__29172,G__29173,G__29174,G__29175,G__29176,G__29177,G__29178,G__29179,G__29180,G__29181,G__29182,G__29183);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__29186,G__29187,G__29188,G__29189,G__29190,G__29191,G__29192,G__29193,G__29194,G__29195,G__29196,G__29197,G__29198){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29186);

(invoc_array[(1)] = G__29187);

(invoc_array[(2)] = G__29188);

(invoc_array[(3)] = G__29189);

(invoc_array[(4)] = G__29190);

(invoc_array[(5)] = G__29191);

(invoc_array[(6)] = G__29192);

(invoc_array[(7)] = G__29193);

(invoc_array[(8)] = G__29194);

(invoc_array[(9)] = G__29195);

(invoc_array[(10)] = G__29196);

(invoc_array[(11)] = G__29197);

(invoc_array[vararg_idx] = G__29198);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__29186,G__29187,G__29188,G__29189,G__29190,G__29191,G__29192,G__29193,G__29194,G__29195,G__29196,G__29197,var_args){
var G__29198 = null;
if (arguments.length > 12) {
var G__29932__i = 0, G__29932__a = new Array(arguments.length -  12);
while (G__29932__i < G__29932__a.length) {G__29932__a[G__29932__i] = arguments[G__29932__i + 12]; ++G__29932__i;}
  G__29198 = new cljs.core.IndexedSeq(G__29932__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__29186,G__29187,G__29188,G__29189,G__29190,G__29191,G__29192,G__29193,G__29194,G__29195,G__29196,G__29197,G__29198);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__29934){
var G__29186 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29187 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29188 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29189 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29190 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29191 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29192 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29193 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29194 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29195 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29196 = cljs.core.first(arglist__29934);
arglist__29934 = cljs.core.next(arglist__29934);
var G__29197 = cljs.core.first(arglist__29934);
var G__29198 = cljs.core.rest(arglist__29934);
return sci$impl$fns$arity_12__delegate(G__29186,G__29187,G__29188,G__29189,G__29190,G__29191,G__29192,G__29193,G__29194,G__29195,G__29196,G__29197,G__29198);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__29220,G__29221,G__29222,G__29223,G__29224,G__29225,G__29226,G__29227,G__29228,G__29229,G__29230,G__29231,G__29232,G__29233){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29220);

(invoc_array[(1)] = G__29221);

(invoc_array[(2)] = G__29222);

(invoc_array[(3)] = G__29223);

(invoc_array[(4)] = G__29224);

(invoc_array[(5)] = G__29225);

(invoc_array[(6)] = G__29226);

(invoc_array[(7)] = G__29227);

(invoc_array[(8)] = G__29228);

(invoc_array[(9)] = G__29229);

(invoc_array[(10)] = G__29230);

(invoc_array[(11)] = G__29231);

(invoc_array[(12)] = G__29232);

(invoc_array[vararg_idx] = G__29233);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__29220,G__29221,G__29222,G__29223,G__29224,G__29225,G__29226,G__29227,G__29228,G__29229,G__29230,G__29231,G__29232,var_args){
var G__29233 = null;
if (arguments.length > 13) {
var G__29935__i = 0, G__29935__a = new Array(arguments.length -  13);
while (G__29935__i < G__29935__a.length) {G__29935__a[G__29935__i] = arguments[G__29935__i + 13]; ++G__29935__i;}
  G__29233 = new cljs.core.IndexedSeq(G__29935__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__29220,G__29221,G__29222,G__29223,G__29224,G__29225,G__29226,G__29227,G__29228,G__29229,G__29230,G__29231,G__29232,G__29233);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__29936){
var G__29220 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29221 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29222 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29223 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29224 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29225 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29226 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29227 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29228 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29229 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29230 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29231 = cljs.core.first(arglist__29936);
arglist__29936 = cljs.core.next(arglist__29936);
var G__29232 = cljs.core.first(arglist__29936);
var G__29233 = cljs.core.rest(arglist__29936);
return sci$impl$fns$arity_13__delegate(G__29220,G__29221,G__29222,G__29223,G__29224,G__29225,G__29226,G__29227,G__29228,G__29229,G__29230,G__29231,G__29232,G__29233);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__29238,G__29239,G__29240,G__29241,G__29242,G__29243,G__29244,G__29245,G__29246,G__29247,G__29248,G__29249,G__29250,G__29251,G__29252){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29238);

(invoc_array[(1)] = G__29239);

(invoc_array[(2)] = G__29240);

(invoc_array[(3)] = G__29241);

(invoc_array[(4)] = G__29242);

(invoc_array[(5)] = G__29243);

(invoc_array[(6)] = G__29244);

(invoc_array[(7)] = G__29245);

(invoc_array[(8)] = G__29246);

(invoc_array[(9)] = G__29247);

(invoc_array[(10)] = G__29248);

(invoc_array[(11)] = G__29249);

(invoc_array[(12)] = G__29250);

(invoc_array[(13)] = G__29251);

(invoc_array[vararg_idx] = G__29252);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__29238,G__29239,G__29240,G__29241,G__29242,G__29243,G__29244,G__29245,G__29246,G__29247,G__29248,G__29249,G__29250,G__29251,var_args){
var G__29252 = null;
if (arguments.length > 14) {
var G__29937__i = 0, G__29937__a = new Array(arguments.length -  14);
while (G__29937__i < G__29937__a.length) {G__29937__a[G__29937__i] = arguments[G__29937__i + 14]; ++G__29937__i;}
  G__29252 = new cljs.core.IndexedSeq(G__29937__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__29238,G__29239,G__29240,G__29241,G__29242,G__29243,G__29244,G__29245,G__29246,G__29247,G__29248,G__29249,G__29250,G__29251,G__29252);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__29938){
var G__29238 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29239 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29240 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29241 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29242 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29243 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29244 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29245 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29246 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29247 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29248 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29249 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29250 = cljs.core.first(arglist__29938);
arglist__29938 = cljs.core.next(arglist__29938);
var G__29251 = cljs.core.first(arglist__29938);
var G__29252 = cljs.core.rest(arglist__29938);
return sci$impl$fns$arity_14__delegate(G__29238,G__29239,G__29240,G__29241,G__29242,G__29243,G__29244,G__29245,G__29246,G__29247,G__29248,G__29249,G__29250,G__29251,G__29252);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__29257,G__29258,G__29259,G__29260,G__29261,G__29262,G__29263,G__29264,G__29265,G__29266,G__29267,G__29268,G__29269,G__29270,G__29271,G__29272){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29257);

(invoc_array[(1)] = G__29258);

(invoc_array[(2)] = G__29259);

(invoc_array[(3)] = G__29260);

(invoc_array[(4)] = G__29261);

(invoc_array[(5)] = G__29262);

(invoc_array[(6)] = G__29263);

(invoc_array[(7)] = G__29264);

(invoc_array[(8)] = G__29265);

(invoc_array[(9)] = G__29266);

(invoc_array[(10)] = G__29267);

(invoc_array[(11)] = G__29268);

(invoc_array[(12)] = G__29269);

(invoc_array[(13)] = G__29270);

(invoc_array[(14)] = G__29271);

(invoc_array[vararg_idx] = G__29272);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__29257,G__29258,G__29259,G__29260,G__29261,G__29262,G__29263,G__29264,G__29265,G__29266,G__29267,G__29268,G__29269,G__29270,G__29271,var_args){
var G__29272 = null;
if (arguments.length > 15) {
var G__29939__i = 0, G__29939__a = new Array(arguments.length -  15);
while (G__29939__i < G__29939__a.length) {G__29939__a[G__29939__i] = arguments[G__29939__i + 15]; ++G__29939__i;}
  G__29272 = new cljs.core.IndexedSeq(G__29939__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__29257,G__29258,G__29259,G__29260,G__29261,G__29262,G__29263,G__29264,G__29265,G__29266,G__29267,G__29268,G__29269,G__29270,G__29271,G__29272);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__29940){
var G__29257 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29258 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29259 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29260 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29261 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29262 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29263 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29264 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29265 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29266 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29267 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29268 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29269 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29270 = cljs.core.first(arglist__29940);
arglist__29940 = cljs.core.next(arglist__29940);
var G__29271 = cljs.core.first(arglist__29940);
var G__29272 = cljs.core.rest(arglist__29940);
return sci$impl$fns$arity_15__delegate(G__29257,G__29258,G__29259,G__29260,G__29261,G__29262,G__29263,G__29264,G__29265,G__29266,G__29267,G__29268,G__29269,G__29270,G__29271,G__29272);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__29277,G__29278,G__29279,G__29280,G__29281,G__29282,G__29283,G__29284,G__29285,G__29286,G__29287,G__29288,G__29289,G__29290,G__29291,G__29292,G__29293){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29277);

(invoc_array[(1)] = G__29278);

(invoc_array[(2)] = G__29279);

(invoc_array[(3)] = G__29280);

(invoc_array[(4)] = G__29281);

(invoc_array[(5)] = G__29282);

(invoc_array[(6)] = G__29283);

(invoc_array[(7)] = G__29284);

(invoc_array[(8)] = G__29285);

(invoc_array[(9)] = G__29286);

(invoc_array[(10)] = G__29287);

(invoc_array[(11)] = G__29288);

(invoc_array[(12)] = G__29289);

(invoc_array[(13)] = G__29290);

(invoc_array[(14)] = G__29291);

(invoc_array[(15)] = G__29292);

(invoc_array[vararg_idx] = G__29293);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__29277,G__29278,G__29279,G__29280,G__29281,G__29282,G__29283,G__29284,G__29285,G__29286,G__29287,G__29288,G__29289,G__29290,G__29291,G__29292,var_args){
var G__29293 = null;
if (arguments.length > 16) {
var G__29941__i = 0, G__29941__a = new Array(arguments.length -  16);
while (G__29941__i < G__29941__a.length) {G__29941__a[G__29941__i] = arguments[G__29941__i + 16]; ++G__29941__i;}
  G__29293 = new cljs.core.IndexedSeq(G__29941__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__29277,G__29278,G__29279,G__29280,G__29281,G__29282,G__29283,G__29284,G__29285,G__29286,G__29287,G__29288,G__29289,G__29290,G__29291,G__29292,G__29293);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__29943){
var G__29277 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29278 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29279 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29280 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29281 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29282 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29283 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29284 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29285 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29286 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29287 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29288 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29289 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29290 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29291 = cljs.core.first(arglist__29943);
arglist__29943 = cljs.core.next(arglist__29943);
var G__29292 = cljs.core.first(arglist__29943);
var G__29293 = cljs.core.rest(arglist__29943);
return sci$impl$fns$arity_16__delegate(G__29277,G__29278,G__29279,G__29280,G__29281,G__29282,G__29283,G__29284,G__29285,G__29286,G__29287,G__29288,G__29289,G__29290,G__29291,G__29292,G__29293);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__29295,G__29296,G__29297,G__29298,G__29299,G__29300,G__29301,G__29302,G__29303,G__29304,G__29305,G__29306,G__29307,G__29308,G__29309,G__29310,G__29311,G__29312){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29295);

(invoc_array[(1)] = G__29296);

(invoc_array[(2)] = G__29297);

(invoc_array[(3)] = G__29298);

(invoc_array[(4)] = G__29299);

(invoc_array[(5)] = G__29300);

(invoc_array[(6)] = G__29301);

(invoc_array[(7)] = G__29302);

(invoc_array[(8)] = G__29303);

(invoc_array[(9)] = G__29304);

(invoc_array[(10)] = G__29305);

(invoc_array[(11)] = G__29306);

(invoc_array[(12)] = G__29307);

(invoc_array[(13)] = G__29308);

(invoc_array[(14)] = G__29309);

(invoc_array[(15)] = G__29310);

(invoc_array[(16)] = G__29311);

(invoc_array[vararg_idx] = G__29312);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__29295,G__29296,G__29297,G__29298,G__29299,G__29300,G__29301,G__29302,G__29303,G__29304,G__29305,G__29306,G__29307,G__29308,G__29309,G__29310,G__29311,var_args){
var G__29312 = null;
if (arguments.length > 17) {
var G__29948__i = 0, G__29948__a = new Array(arguments.length -  17);
while (G__29948__i < G__29948__a.length) {G__29948__a[G__29948__i] = arguments[G__29948__i + 17]; ++G__29948__i;}
  G__29312 = new cljs.core.IndexedSeq(G__29948__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__29295,G__29296,G__29297,G__29298,G__29299,G__29300,G__29301,G__29302,G__29303,G__29304,G__29305,G__29306,G__29307,G__29308,G__29309,G__29310,G__29311,G__29312);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__29949){
var G__29295 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29296 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29297 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29298 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29299 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29300 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29301 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29302 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29303 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29304 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29305 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29306 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29307 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29308 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29309 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29310 = cljs.core.first(arglist__29949);
arglist__29949 = cljs.core.next(arglist__29949);
var G__29311 = cljs.core.first(arglist__29949);
var G__29312 = cljs.core.rest(arglist__29949);
return sci$impl$fns$arity_17__delegate(G__29295,G__29296,G__29297,G__29298,G__29299,G__29300,G__29301,G__29302,G__29303,G__29304,G__29305,G__29306,G__29307,G__29308,G__29309,G__29310,G__29311,G__29312);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__29313,G__29314,G__29315,G__29316,G__29317,G__29318,G__29319,G__29320,G__29321,G__29322,G__29323,G__29324,G__29325,G__29326,G__29327,G__29328,G__29329,G__29330,G__29331){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29313);

(invoc_array[(1)] = G__29314);

(invoc_array[(2)] = G__29315);

(invoc_array[(3)] = G__29316);

(invoc_array[(4)] = G__29317);

(invoc_array[(5)] = G__29318);

(invoc_array[(6)] = G__29319);

(invoc_array[(7)] = G__29320);

(invoc_array[(8)] = G__29321);

(invoc_array[(9)] = G__29322);

(invoc_array[(10)] = G__29323);

(invoc_array[(11)] = G__29324);

(invoc_array[(12)] = G__29325);

(invoc_array[(13)] = G__29326);

(invoc_array[(14)] = G__29327);

(invoc_array[(15)] = G__29328);

(invoc_array[(16)] = G__29329);

(invoc_array[(17)] = G__29330);

(invoc_array[vararg_idx] = G__29331);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__29313,G__29314,G__29315,G__29316,G__29317,G__29318,G__29319,G__29320,G__29321,G__29322,G__29323,G__29324,G__29325,G__29326,G__29327,G__29328,G__29329,G__29330,var_args){
var G__29331 = null;
if (arguments.length > 18) {
var G__29950__i = 0, G__29950__a = new Array(arguments.length -  18);
while (G__29950__i < G__29950__a.length) {G__29950__a[G__29950__i] = arguments[G__29950__i + 18]; ++G__29950__i;}
  G__29331 = new cljs.core.IndexedSeq(G__29950__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__29313,G__29314,G__29315,G__29316,G__29317,G__29318,G__29319,G__29320,G__29321,G__29322,G__29323,G__29324,G__29325,G__29326,G__29327,G__29328,G__29329,G__29330,G__29331);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__29951){
var G__29313 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29314 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29315 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29316 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29317 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29318 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29319 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29320 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29321 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29322 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29323 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29324 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29325 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29326 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29327 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29328 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29329 = cljs.core.first(arglist__29951);
arglist__29951 = cljs.core.next(arglist__29951);
var G__29330 = cljs.core.first(arglist__29951);
var G__29331 = cljs.core.rest(arglist__29951);
return sci$impl$fns$arity_18__delegate(G__29313,G__29314,G__29315,G__29316,G__29317,G__29318,G__29319,G__29320,G__29321,G__29322,G__29323,G__29324,G__29325,G__29326,G__29327,G__29328,G__29329,G__29330,G__29331);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__29332,G__29333,G__29334,G__29335,G__29336,G__29337,G__29338,G__29339,G__29340,G__29341,G__29342,G__29343,G__29344,G__29345,G__29346,G__29347,G__29348,G__29349,G__29350,G__29351){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29332);

(invoc_array[(1)] = G__29333);

(invoc_array[(2)] = G__29334);

(invoc_array[(3)] = G__29335);

(invoc_array[(4)] = G__29336);

(invoc_array[(5)] = G__29337);

(invoc_array[(6)] = G__29338);

(invoc_array[(7)] = G__29339);

(invoc_array[(8)] = G__29340);

(invoc_array[(9)] = G__29341);

(invoc_array[(10)] = G__29342);

(invoc_array[(11)] = G__29343);

(invoc_array[(12)] = G__29344);

(invoc_array[(13)] = G__29345);

(invoc_array[(14)] = G__29346);

(invoc_array[(15)] = G__29347);

(invoc_array[(16)] = G__29348);

(invoc_array[(17)] = G__29349);

(invoc_array[(18)] = G__29350);

(invoc_array[vararg_idx] = G__29351);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__29332,G__29333,G__29334,G__29335,G__29336,G__29337,G__29338,G__29339,G__29340,G__29341,G__29342,G__29343,G__29344,G__29345,G__29346,G__29347,G__29348,G__29349,G__29350,var_args){
var G__29351 = null;
if (arguments.length > 19) {
var G__29955__i = 0, G__29955__a = new Array(arguments.length -  19);
while (G__29955__i < G__29955__a.length) {G__29955__a[G__29955__i] = arguments[G__29955__i + 19]; ++G__29955__i;}
  G__29351 = new cljs.core.IndexedSeq(G__29955__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__29332,G__29333,G__29334,G__29335,G__29336,G__29337,G__29338,G__29339,G__29340,G__29341,G__29342,G__29343,G__29344,G__29345,G__29346,G__29347,G__29348,G__29349,G__29350,G__29351);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__29956){
var G__29332 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29333 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29334 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29335 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29336 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29337 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29338 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29339 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29340 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29341 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29342 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29343 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29344 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29345 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29346 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29347 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29348 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29349 = cljs.core.first(arglist__29956);
arglist__29956 = cljs.core.next(arglist__29956);
var G__29350 = cljs.core.first(arglist__29956);
var G__29351 = cljs.core.rest(arglist__29956);
return sci$impl$fns$arity_19__delegate(G__29332,G__29333,G__29334,G__29335,G__29336,G__29337,G__29338,G__29339,G__29340,G__29341,G__29342,G__29343,G__29344,G__29345,G__29346,G__29347,G__29348,G__29349,G__29350,G__29351);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__29357,G__29358,G__29359,G__29360,G__29361,G__29362,G__29363,G__29364,G__29365,G__29366,G__29367,G__29368,G__29369,G__29370,G__29371,G__29372,G__29373,G__29374,G__29375,G__29376,G__29377){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29357);

(invoc_array[(1)] = G__29358);

(invoc_array[(2)] = G__29359);

(invoc_array[(3)] = G__29360);

(invoc_array[(4)] = G__29361);

(invoc_array[(5)] = G__29362);

(invoc_array[(6)] = G__29363);

(invoc_array[(7)] = G__29364);

(invoc_array[(8)] = G__29365);

(invoc_array[(9)] = G__29366);

(invoc_array[(10)] = G__29367);

(invoc_array[(11)] = G__29368);

(invoc_array[(12)] = G__29369);

(invoc_array[(13)] = G__29370);

(invoc_array[(14)] = G__29371);

(invoc_array[(15)] = G__29372);

(invoc_array[(16)] = G__29373);

(invoc_array[(17)] = G__29374);

(invoc_array[(18)] = G__29375);

(invoc_array[(19)] = G__29376);

(invoc_array[vararg_idx] = G__29377);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__29357,G__29358,G__29359,G__29360,G__29361,G__29362,G__29363,G__29364,G__29365,G__29366,G__29367,G__29368,G__29369,G__29370,G__29371,G__29372,G__29373,G__29374,G__29375,G__29376,var_args){
var G__29377 = null;
if (arguments.length > 20) {
var G__29962__i = 0, G__29962__a = new Array(arguments.length -  20);
while (G__29962__i < G__29962__a.length) {G__29962__a[G__29962__i] = arguments[G__29962__i + 20]; ++G__29962__i;}
  G__29377 = new cljs.core.IndexedSeq(G__29962__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__29357,G__29358,G__29359,G__29360,G__29361,G__29362,G__29363,G__29364,G__29365,G__29366,G__29367,G__29368,G__29369,G__29370,G__29371,G__29372,G__29373,G__29374,G__29375,G__29376,G__29377);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__29963){
var G__29357 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29358 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29359 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29360 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29361 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29362 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29363 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29364 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29365 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29366 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29367 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29368 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29369 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29370 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29371 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29372 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29373 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29374 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29375 = cljs.core.first(arglist__29963);
arglist__29963 = cljs.core.next(arglist__29963);
var G__29376 = cljs.core.first(arglist__29963);
var G__29377 = cljs.core.rest(arglist__29963);
return sci$impl$fns$arity_20__delegate(G__29357,G__29358,G__29359,G__29360,G__29361,G__29362,G__29363,G__29364,G__29365,G__29366,G__29367,G__29368,G__29369,G__29370,G__29371,G__29372,G__29373,G__29374,G__29375,G__29376,G__29377);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29097)].join('')));

}
})():(function (){var G__29378 = fixed_arity;
switch (G__29378) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__28254__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28254__auto__)){
continue;
} else {
return ret__28254__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__29379){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29379);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__29383,G__29384){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29383);

(invoc_array[(1)] = G__29384);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__29386,G__29387,G__29388){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29386);

(invoc_array[(1)] = G__29387);

(invoc_array[(2)] = G__29388);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__29390,G__29391,G__29392,G__29393){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29390);

(invoc_array[(1)] = G__29391);

(invoc_array[(2)] = G__29392);

(invoc_array[(3)] = G__29393);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__29394,G__29395,G__29396,G__29397,G__29398){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29394);

(invoc_array[(1)] = G__29395);

(invoc_array[(2)] = G__29396);

(invoc_array[(3)] = G__29397);

(invoc_array[(4)] = G__29398);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__29401,G__29402,G__29403,G__29404,G__29405,G__29406){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29401);

(invoc_array[(1)] = G__29402);

(invoc_array[(2)] = G__29403);

(invoc_array[(3)] = G__29404);

(invoc_array[(4)] = G__29405);

(invoc_array[(5)] = G__29406);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__29409,G__29410,G__29411,G__29412,G__29413,G__29414,G__29415){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29409);

(invoc_array[(1)] = G__29410);

(invoc_array[(2)] = G__29411);

(invoc_array[(3)] = G__29412);

(invoc_array[(4)] = G__29413);

(invoc_array[(5)] = G__29414);

(invoc_array[(6)] = G__29415);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__29417,G__29418,G__29419,G__29420,G__29421,G__29422,G__29423,G__29424){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29417);

(invoc_array[(1)] = G__29418);

(invoc_array[(2)] = G__29419);

(invoc_array[(3)] = G__29420);

(invoc_array[(4)] = G__29421);

(invoc_array[(5)] = G__29422);

(invoc_array[(6)] = G__29423);

(invoc_array[(7)] = G__29424);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__29428,G__29429,G__29430,G__29431,G__29432,G__29433,G__29434,G__29435,G__29436){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29428);

(invoc_array[(1)] = G__29429);

(invoc_array[(2)] = G__29430);

(invoc_array[(3)] = G__29431);

(invoc_array[(4)] = G__29432);

(invoc_array[(5)] = G__29433);

(invoc_array[(6)] = G__29434);

(invoc_array[(7)] = G__29435);

(invoc_array[(8)] = G__29436);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__29437,G__29438,G__29439,G__29440,G__29441,G__29442,G__29443,G__29444,G__29445,G__29446){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29437);

(invoc_array[(1)] = G__29438);

(invoc_array[(2)] = G__29439);

(invoc_array[(3)] = G__29440);

(invoc_array[(4)] = G__29441);

(invoc_array[(5)] = G__29442);

(invoc_array[(6)] = G__29443);

(invoc_array[(7)] = G__29444);

(invoc_array[(8)] = G__29445);

(invoc_array[(9)] = G__29446);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__29450,G__29451,G__29452,G__29453,G__29454,G__29455,G__29456,G__29457,G__29458,G__29459,G__29460){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29450);

(invoc_array[(1)] = G__29451);

(invoc_array[(2)] = G__29452);

(invoc_array[(3)] = G__29453);

(invoc_array[(4)] = G__29454);

(invoc_array[(5)] = G__29455);

(invoc_array[(6)] = G__29456);

(invoc_array[(7)] = G__29457);

(invoc_array[(8)] = G__29458);

(invoc_array[(9)] = G__29459);

(invoc_array[(10)] = G__29460);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__29462,G__29463,G__29464,G__29465,G__29466,G__29467,G__29468,G__29469,G__29470,G__29471,G__29472,G__29473){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29462);

(invoc_array[(1)] = G__29463);

(invoc_array[(2)] = G__29464);

(invoc_array[(3)] = G__29465);

(invoc_array[(4)] = G__29466);

(invoc_array[(5)] = G__29467);

(invoc_array[(6)] = G__29468);

(invoc_array[(7)] = G__29469);

(invoc_array[(8)] = G__29470);

(invoc_array[(9)] = G__29471);

(invoc_array[(10)] = G__29472);

(invoc_array[(11)] = G__29473);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__29478,G__29479,G__29480,G__29481,G__29482,G__29483,G__29484,G__29485,G__29486,G__29487,G__29488,G__29489,G__29490){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29478);

(invoc_array[(1)] = G__29479);

(invoc_array[(2)] = G__29480);

(invoc_array[(3)] = G__29481);

(invoc_array[(4)] = G__29482);

(invoc_array[(5)] = G__29483);

(invoc_array[(6)] = G__29484);

(invoc_array[(7)] = G__29485);

(invoc_array[(8)] = G__29486);

(invoc_array[(9)] = G__29487);

(invoc_array[(10)] = G__29488);

(invoc_array[(11)] = G__29489);

(invoc_array[(12)] = G__29490);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__29494,G__29495,G__29496,G__29497,G__29498,G__29500,G__29501,G__29502,G__29503,G__29504,G__29505,G__29506,G__29507,G__29508){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29494);

(invoc_array[(1)] = G__29495);

(invoc_array[(2)] = G__29496);

(invoc_array[(3)] = G__29497);

(invoc_array[(4)] = G__29498);

(invoc_array[(5)] = G__29500);

(invoc_array[(6)] = G__29501);

(invoc_array[(7)] = G__29502);

(invoc_array[(8)] = G__29503);

(invoc_array[(9)] = G__29504);

(invoc_array[(10)] = G__29505);

(invoc_array[(11)] = G__29506);

(invoc_array[(12)] = G__29507);

(invoc_array[(13)] = G__29508);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__29513,G__29514,G__29515,G__29516,G__29517,G__29518,G__29519,G__29520,G__29521,G__29522,G__29523,G__29524,G__29525,G__29526,G__29527){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29513);

(invoc_array[(1)] = G__29514);

(invoc_array[(2)] = G__29515);

(invoc_array[(3)] = G__29516);

(invoc_array[(4)] = G__29517);

(invoc_array[(5)] = G__29518);

(invoc_array[(6)] = G__29519);

(invoc_array[(7)] = G__29520);

(invoc_array[(8)] = G__29521);

(invoc_array[(9)] = G__29522);

(invoc_array[(10)] = G__29523);

(invoc_array[(11)] = G__29524);

(invoc_array[(12)] = G__29525);

(invoc_array[(13)] = G__29526);

(invoc_array[(14)] = G__29527);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__29528,G__29529,G__29530,G__29531,G__29532,G__29533,G__29534,G__29535,G__29536,G__29537,G__29538,G__29539,G__29540,G__29541,G__29542,G__29543){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29528);

(invoc_array[(1)] = G__29529);

(invoc_array[(2)] = G__29530);

(invoc_array[(3)] = G__29531);

(invoc_array[(4)] = G__29532);

(invoc_array[(5)] = G__29533);

(invoc_array[(6)] = G__29534);

(invoc_array[(7)] = G__29535);

(invoc_array[(8)] = G__29536);

(invoc_array[(9)] = G__29537);

(invoc_array[(10)] = G__29538);

(invoc_array[(11)] = G__29539);

(invoc_array[(12)] = G__29540);

(invoc_array[(13)] = G__29541);

(invoc_array[(14)] = G__29542);

(invoc_array[(15)] = G__29543);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__29544,G__29545,G__29546,G__29547,G__29548,G__29549,G__29550,G__29551,G__29552,G__29553,G__29554,G__29555,G__29556,G__29557,G__29558,G__29559,G__29560){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29544);

(invoc_array[(1)] = G__29545);

(invoc_array[(2)] = G__29546);

(invoc_array[(3)] = G__29547);

(invoc_array[(4)] = G__29548);

(invoc_array[(5)] = G__29549);

(invoc_array[(6)] = G__29550);

(invoc_array[(7)] = G__29551);

(invoc_array[(8)] = G__29552);

(invoc_array[(9)] = G__29553);

(invoc_array[(10)] = G__29554);

(invoc_array[(11)] = G__29555);

(invoc_array[(12)] = G__29556);

(invoc_array[(13)] = G__29557);

(invoc_array[(14)] = G__29558);

(invoc_array[(15)] = G__29559);

(invoc_array[(16)] = G__29560);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__29580,G__29581,G__29582,G__29583,G__29584,G__29585,G__29586,G__29587,G__29588,G__29589,G__29590,G__29591,G__29592,G__29593,G__29594,G__29595,G__29596,G__29597){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29580);

(invoc_array[(1)] = G__29581);

(invoc_array[(2)] = G__29582);

(invoc_array[(3)] = G__29583);

(invoc_array[(4)] = G__29584);

(invoc_array[(5)] = G__29585);

(invoc_array[(6)] = G__29586);

(invoc_array[(7)] = G__29587);

(invoc_array[(8)] = G__29588);

(invoc_array[(9)] = G__29589);

(invoc_array[(10)] = G__29590);

(invoc_array[(11)] = G__29591);

(invoc_array[(12)] = G__29592);

(invoc_array[(13)] = G__29593);

(invoc_array[(14)] = G__29594);

(invoc_array[(15)] = G__29595);

(invoc_array[(16)] = G__29596);

(invoc_array[(17)] = G__29597);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__29621,G__29622,G__29623,G__29624,G__29625,G__29626,G__29627,G__29628,G__29629,G__29630,G__29631,G__29632,G__29633,G__29634,G__29635,G__29636,G__29637,G__29638,G__29639){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29621);

(invoc_array[(1)] = G__29622);

(invoc_array[(2)] = G__29623);

(invoc_array[(3)] = G__29624);

(invoc_array[(4)] = G__29625);

(invoc_array[(5)] = G__29626);

(invoc_array[(6)] = G__29627);

(invoc_array[(7)] = G__29628);

(invoc_array[(8)] = G__29629);

(invoc_array[(9)] = G__29630);

(invoc_array[(10)] = G__29631);

(invoc_array[(11)] = G__29632);

(invoc_array[(12)] = G__29633);

(invoc_array[(13)] = G__29634);

(invoc_array[(14)] = G__29635);

(invoc_array[(15)] = G__29636);

(invoc_array[(16)] = G__29637);

(invoc_array[(17)] = G__29638);

(invoc_array[(18)] = G__29639);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__29642,G__29643,G__29644,G__29645,G__29646,G__29647,G__29648,G__29649,G__29650,G__29651,G__29652,G__29653,G__29654,G__29655,G__29656,G__29657,G__29658,G__29659,G__29660,G__29661){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__29642);

(invoc_array[(1)] = G__29643);

(invoc_array[(2)] = G__29644);

(invoc_array[(3)] = G__29645);

(invoc_array[(4)] = G__29646);

(invoc_array[(5)] = G__29647);

(invoc_array[(6)] = G__29648);

(invoc_array[(7)] = G__29649);

(invoc_array[(8)] = G__29650);

(invoc_array[(9)] = G__29651);

(invoc_array[(10)] = G__29652);

(invoc_array[(11)] = G__29653);

(invoc_array[(12)] = G__29654);

(invoc_array[(13)] = G__29655);

(invoc_array[(14)] = G__29656);

(invoc_array[(15)] = G__29657);

(invoc_array[(16)] = G__29658);

(invoc_array[(17)] = G__29659);

(invoc_array[(18)] = G__29660);

(invoc_array[(19)] = G__29661);

while(true){
var ret__28258__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__28258__auto__)){
continue;
} else {
return ret__28258__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29378)].join('')));

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
var G__29991 = cljs.core.next(params__$1);
var G__29992 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__29993 = lets;
params__$1 = G__29991;
new_params = G__29992;
lets = G__29993;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__29995 = cljs.core.next(params__$1);
var G__29996 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__29997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__29995;
new_params = G__29996;
lets = G__29997;
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
var len__5749__auto___29998 = arguments.length;
var i__5750__auto___29999 = (0);
while(true){
if((i__5750__auto___29999 < len__5749__auto___29998)){
args__5755__auto__.push((arguments[i__5750__auto___29999]));

var G__30000 = (i__5750__auto___29999 + (1));
i__5750__auto___29999 = G__30000;
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

var vec__29750 = sig;
var seq__29751 = cljs.core.seq(vec__29750);
var first__29752 = cljs.core.first(seq__29751);
var seq__29751__$1 = cljs.core.next(seq__29751);
var params = first__29752;
var body = seq__29751__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq29722){
var G__29723 = cljs.core.first(seq29722);
var seq29722__$1 = cljs.core.next(seq29722);
var G__29724 = cljs.core.first(seq29722__$1);
var seq29722__$2 = cljs.core.next(seq29722__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29723,G__29724,seq29722__$2);
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
var G__30005 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__30006 = cljs.core.next(fdecls);
ret = G__30005;
fdecls = G__30006;
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
var len__5749__auto___30009 = arguments.length;
var i__5750__auto___30010 = (0);
while(true){
if((i__5750__auto___30010 < len__5749__auto___30009)){
args__5755__auto__.push((arguments[i__5750__auto___30010]));

var G__30012 = (i__5750__auto___30010 + (1));
i__5750__auto___30010 = G__30012;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq29774){
var G__29775 = cljs.core.first(seq29774);
var seq29774__$1 = cljs.core.next(seq29774);
var G__29776 = cljs.core.first(seq29774__$1);
var seq29774__$2 = cljs.core.next(seq29774__$1);
var G__29777 = cljs.core.first(seq29774__$2);
var seq29774__$3 = cljs.core.next(seq29774__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29775,G__29776,G__29777,seq29774__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30016 = arguments.length;
var i__5750__auto___30017 = (0);
while(true){
if((i__5750__auto___30017 < len__5749__auto___30016)){
args__5755__auto__.push((arguments[i__5750__auto___30017]));

var G__30020 = (i__5750__auto___30017 + (1));
i__5750__auto___30017 = G__30020;
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
var G__30023 = cljs.core.cons(f,p);
var G__30024 = cljs.core.next(args__$1);
p = G__30023;
args__$1 = G__30024;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__30025 = cljs.core.cons(f,p);
var G__30026 = cljs.core.next(args__$1);
p = G__30025;
args__$1 = G__30026;
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
var G__30028 = cljs.core.next(fd);
fd = G__30028;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__30029 = cljs.core.next(fd);
fd = G__30029;
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
var G__30031 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__30032 = cljs.core.next(ds);
acc = G__30031;
ds = G__30032;
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
var G__30033 = cljs.core.next(p);
var G__30034 = cljs.core.cons(cljs.core.first(p),d);
p = G__30033;
d = G__30034;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq29806){
var G__29807 = cljs.core.first(seq29806);
var seq29806__$1 = cljs.core.next(seq29806);
var G__29808 = cljs.core.first(seq29806__$1);
var seq29806__$2 = cljs.core.next(seq29806__$1);
var G__29809 = cljs.core.first(seq29806__$2);
var seq29806__$3 = cljs.core.next(seq29806__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29807,G__29808,G__29809,seq29806__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
