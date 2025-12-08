goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__43104 = arguments.length;
switch (G__43104) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__43105 = fixed_arity;
switch (G__43105) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__43106){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__43106);

while(true){
var ret__42320__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42320__auto__)){
continue;
} else {
return ret__42320__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__43106 = null;
if (arguments.length > 0) {
var G__43889__i = 0, G__43889__a = new Array(arguments.length -  0);
while (G__43889__i < G__43889__a.length) {G__43889__a[G__43889__i] = arguments[G__43889__i + 0]; ++G__43889__i;}
  G__43106 = new cljs.core.IndexedSeq(G__43889__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__43106);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__43890){
var G__43106 = cljs.core.seq(arglist__43890);
return sci$impl$fns$arity_0__delegate(G__43106);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__43107,G__43108){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43107);

(invoc_array[vararg_idx] = G__43108);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__43107,var_args){
var G__43108 = null;
if (arguments.length > 1) {
var G__43892__i = 0, G__43892__a = new Array(arguments.length -  1);
while (G__43892__i < G__43892__a.length) {G__43892__a[G__43892__i] = arguments[G__43892__i + 1]; ++G__43892__i;}
  G__43108 = new cljs.core.IndexedSeq(G__43892__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__43107,G__43108);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__43894){
var G__43107 = cljs.core.first(arglist__43894);
var G__43108 = cljs.core.rest(arglist__43894);
return sci$impl$fns$arity_1__delegate(G__43107,G__43108);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__43109,G__43110,G__43111){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43109);

(invoc_array[(1)] = G__43110);

(invoc_array[vararg_idx] = G__43111);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__43109,G__43110,var_args){
var G__43111 = null;
if (arguments.length > 2) {
var G__43896__i = 0, G__43896__a = new Array(arguments.length -  2);
while (G__43896__i < G__43896__a.length) {G__43896__a[G__43896__i] = arguments[G__43896__i + 2]; ++G__43896__i;}
  G__43111 = new cljs.core.IndexedSeq(G__43896__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__43109,G__43110,G__43111);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__43897){
var G__43109 = cljs.core.first(arglist__43897);
arglist__43897 = cljs.core.next(arglist__43897);
var G__43110 = cljs.core.first(arglist__43897);
var G__43111 = cljs.core.rest(arglist__43897);
return sci$impl$fns$arity_2__delegate(G__43109,G__43110,G__43111);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__43112,G__43113,G__43114,G__43115){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43112);

(invoc_array[(1)] = G__43113);

(invoc_array[(2)] = G__43114);

(invoc_array[vararg_idx] = G__43115);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__43112,G__43113,G__43114,var_args){
var G__43115 = null;
if (arguments.length > 3) {
var G__43899__i = 0, G__43899__a = new Array(arguments.length -  3);
while (G__43899__i < G__43899__a.length) {G__43899__a[G__43899__i] = arguments[G__43899__i + 3]; ++G__43899__i;}
  G__43115 = new cljs.core.IndexedSeq(G__43899__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__43112,G__43113,G__43114,G__43115);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__43900){
var G__43112 = cljs.core.first(arglist__43900);
arglist__43900 = cljs.core.next(arglist__43900);
var G__43113 = cljs.core.first(arglist__43900);
arglist__43900 = cljs.core.next(arglist__43900);
var G__43114 = cljs.core.first(arglist__43900);
var G__43115 = cljs.core.rest(arglist__43900);
return sci$impl$fns$arity_3__delegate(G__43112,G__43113,G__43114,G__43115);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__43116,G__43117,G__43118,G__43119,G__43120){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43116);

(invoc_array[(1)] = G__43117);

(invoc_array[(2)] = G__43118);

(invoc_array[(3)] = G__43119);

(invoc_array[vararg_idx] = G__43120);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__43116,G__43117,G__43118,G__43119,var_args){
var G__43120 = null;
if (arguments.length > 4) {
var G__43901__i = 0, G__43901__a = new Array(arguments.length -  4);
while (G__43901__i < G__43901__a.length) {G__43901__a[G__43901__i] = arguments[G__43901__i + 4]; ++G__43901__i;}
  G__43120 = new cljs.core.IndexedSeq(G__43901__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__43116,G__43117,G__43118,G__43119,G__43120);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__43902){
var G__43116 = cljs.core.first(arglist__43902);
arglist__43902 = cljs.core.next(arglist__43902);
var G__43117 = cljs.core.first(arglist__43902);
arglist__43902 = cljs.core.next(arglist__43902);
var G__43118 = cljs.core.first(arglist__43902);
arglist__43902 = cljs.core.next(arglist__43902);
var G__43119 = cljs.core.first(arglist__43902);
var G__43120 = cljs.core.rest(arglist__43902);
return sci$impl$fns$arity_4__delegate(G__43116,G__43117,G__43118,G__43119,G__43120);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__43121,G__43122,G__43123,G__43124,G__43125,G__43126){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43121);

(invoc_array[(1)] = G__43122);

(invoc_array[(2)] = G__43123);

(invoc_array[(3)] = G__43124);

(invoc_array[(4)] = G__43125);

(invoc_array[vararg_idx] = G__43126);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__43121,G__43122,G__43123,G__43124,G__43125,var_args){
var G__43126 = null;
if (arguments.length > 5) {
var G__43906__i = 0, G__43906__a = new Array(arguments.length -  5);
while (G__43906__i < G__43906__a.length) {G__43906__a[G__43906__i] = arguments[G__43906__i + 5]; ++G__43906__i;}
  G__43126 = new cljs.core.IndexedSeq(G__43906__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__43121,G__43122,G__43123,G__43124,G__43125,G__43126);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__43907){
var G__43121 = cljs.core.first(arglist__43907);
arglist__43907 = cljs.core.next(arglist__43907);
var G__43122 = cljs.core.first(arglist__43907);
arglist__43907 = cljs.core.next(arglist__43907);
var G__43123 = cljs.core.first(arglist__43907);
arglist__43907 = cljs.core.next(arglist__43907);
var G__43124 = cljs.core.first(arglist__43907);
arglist__43907 = cljs.core.next(arglist__43907);
var G__43125 = cljs.core.first(arglist__43907);
var G__43126 = cljs.core.rest(arglist__43907);
return sci$impl$fns$arity_5__delegate(G__43121,G__43122,G__43123,G__43124,G__43125,G__43126);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__43127,G__43128,G__43129,G__43130,G__43131,G__43132,G__43133){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43127);

(invoc_array[(1)] = G__43128);

(invoc_array[(2)] = G__43129);

(invoc_array[(3)] = G__43130);

(invoc_array[(4)] = G__43131);

(invoc_array[(5)] = G__43132);

(invoc_array[vararg_idx] = G__43133);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__43127,G__43128,G__43129,G__43130,G__43131,G__43132,var_args){
var G__43133 = null;
if (arguments.length > 6) {
var G__43908__i = 0, G__43908__a = new Array(arguments.length -  6);
while (G__43908__i < G__43908__a.length) {G__43908__a[G__43908__i] = arguments[G__43908__i + 6]; ++G__43908__i;}
  G__43133 = new cljs.core.IndexedSeq(G__43908__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__43127,G__43128,G__43129,G__43130,G__43131,G__43132,G__43133);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__43909){
var G__43127 = cljs.core.first(arglist__43909);
arglist__43909 = cljs.core.next(arglist__43909);
var G__43128 = cljs.core.first(arglist__43909);
arglist__43909 = cljs.core.next(arglist__43909);
var G__43129 = cljs.core.first(arglist__43909);
arglist__43909 = cljs.core.next(arglist__43909);
var G__43130 = cljs.core.first(arglist__43909);
arglist__43909 = cljs.core.next(arglist__43909);
var G__43131 = cljs.core.first(arglist__43909);
arglist__43909 = cljs.core.next(arglist__43909);
var G__43132 = cljs.core.first(arglist__43909);
var G__43133 = cljs.core.rest(arglist__43909);
return sci$impl$fns$arity_6__delegate(G__43127,G__43128,G__43129,G__43130,G__43131,G__43132,G__43133);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__43134,G__43135,G__43136,G__43137,G__43138,G__43139,G__43140,G__43141){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43134);

(invoc_array[(1)] = G__43135);

(invoc_array[(2)] = G__43136);

(invoc_array[(3)] = G__43137);

(invoc_array[(4)] = G__43138);

(invoc_array[(5)] = G__43139);

(invoc_array[(6)] = G__43140);

(invoc_array[vararg_idx] = G__43141);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__43134,G__43135,G__43136,G__43137,G__43138,G__43139,G__43140,var_args){
var G__43141 = null;
if (arguments.length > 7) {
var G__43910__i = 0, G__43910__a = new Array(arguments.length -  7);
while (G__43910__i < G__43910__a.length) {G__43910__a[G__43910__i] = arguments[G__43910__i + 7]; ++G__43910__i;}
  G__43141 = new cljs.core.IndexedSeq(G__43910__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__43134,G__43135,G__43136,G__43137,G__43138,G__43139,G__43140,G__43141);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__43911){
var G__43134 = cljs.core.first(arglist__43911);
arglist__43911 = cljs.core.next(arglist__43911);
var G__43135 = cljs.core.first(arglist__43911);
arglist__43911 = cljs.core.next(arglist__43911);
var G__43136 = cljs.core.first(arglist__43911);
arglist__43911 = cljs.core.next(arglist__43911);
var G__43137 = cljs.core.first(arglist__43911);
arglist__43911 = cljs.core.next(arglist__43911);
var G__43138 = cljs.core.first(arglist__43911);
arglist__43911 = cljs.core.next(arglist__43911);
var G__43139 = cljs.core.first(arglist__43911);
arglist__43911 = cljs.core.next(arglist__43911);
var G__43140 = cljs.core.first(arglist__43911);
var G__43141 = cljs.core.rest(arglist__43911);
return sci$impl$fns$arity_7__delegate(G__43134,G__43135,G__43136,G__43137,G__43138,G__43139,G__43140,G__43141);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__43150,G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157,G__43158){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43150);

(invoc_array[(1)] = G__43151);

(invoc_array[(2)] = G__43152);

(invoc_array[(3)] = G__43153);

(invoc_array[(4)] = G__43154);

(invoc_array[(5)] = G__43155);

(invoc_array[(6)] = G__43156);

(invoc_array[(7)] = G__43157);

(invoc_array[vararg_idx] = G__43158);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__43150,G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157,var_args){
var G__43158 = null;
if (arguments.length > 8) {
var G__43912__i = 0, G__43912__a = new Array(arguments.length -  8);
while (G__43912__i < G__43912__a.length) {G__43912__a[G__43912__i] = arguments[G__43912__i + 8]; ++G__43912__i;}
  G__43158 = new cljs.core.IndexedSeq(G__43912__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__43150,G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157,G__43158);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__43913){
var G__43150 = cljs.core.first(arglist__43913);
arglist__43913 = cljs.core.next(arglist__43913);
var G__43151 = cljs.core.first(arglist__43913);
arglist__43913 = cljs.core.next(arglist__43913);
var G__43152 = cljs.core.first(arglist__43913);
arglist__43913 = cljs.core.next(arglist__43913);
var G__43153 = cljs.core.first(arglist__43913);
arglist__43913 = cljs.core.next(arglist__43913);
var G__43154 = cljs.core.first(arglist__43913);
arglist__43913 = cljs.core.next(arglist__43913);
var G__43155 = cljs.core.first(arglist__43913);
arglist__43913 = cljs.core.next(arglist__43913);
var G__43156 = cljs.core.first(arglist__43913);
arglist__43913 = cljs.core.next(arglist__43913);
var G__43157 = cljs.core.first(arglist__43913);
var G__43158 = cljs.core.rest(arglist__43913);
return sci$impl$fns$arity_8__delegate(G__43150,G__43151,G__43152,G__43153,G__43154,G__43155,G__43156,G__43157,G__43158);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,G__43165,G__43166,G__43167,G__43168){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43159);

(invoc_array[(1)] = G__43160);

(invoc_array[(2)] = G__43161);

(invoc_array[(3)] = G__43162);

(invoc_array[(4)] = G__43163);

(invoc_array[(5)] = G__43164);

(invoc_array[(6)] = G__43165);

(invoc_array[(7)] = G__43166);

(invoc_array[(8)] = G__43167);

(invoc_array[vararg_idx] = G__43168);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,G__43165,G__43166,G__43167,var_args){
var G__43168 = null;
if (arguments.length > 9) {
var G__43916__i = 0, G__43916__a = new Array(arguments.length -  9);
while (G__43916__i < G__43916__a.length) {G__43916__a[G__43916__i] = arguments[G__43916__i + 9]; ++G__43916__i;}
  G__43168 = new cljs.core.IndexedSeq(G__43916__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,G__43165,G__43166,G__43167,G__43168);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__43917){
var G__43159 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43160 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43161 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43162 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43163 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43164 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43165 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43166 = cljs.core.first(arglist__43917);
arglist__43917 = cljs.core.next(arglist__43917);
var G__43167 = cljs.core.first(arglist__43917);
var G__43168 = cljs.core.rest(arglist__43917);
return sci$impl$fns$arity_9__delegate(G__43159,G__43160,G__43161,G__43162,G__43163,G__43164,G__43165,G__43166,G__43167,G__43168);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177,G__43178,G__43179){
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

(invoc_array[(8)] = G__43177);

(invoc_array[(9)] = G__43178);

(invoc_array[vararg_idx] = G__43179);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177,G__43178,var_args){
var G__43179 = null;
if (arguments.length > 10) {
var G__43921__i = 0, G__43921__a = new Array(arguments.length -  10);
while (G__43921__i < G__43921__a.length) {G__43921__a[G__43921__i] = arguments[G__43921__i + 10]; ++G__43921__i;}
  G__43179 = new cljs.core.IndexedSeq(G__43921__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177,G__43178,G__43179);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__43922){
var G__43169 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43170 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43171 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43172 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43173 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43174 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43175 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43176 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43177 = cljs.core.first(arglist__43922);
arglist__43922 = cljs.core.next(arglist__43922);
var G__43178 = cljs.core.first(arglist__43922);
var G__43179 = cljs.core.rest(arglist__43922);
return sci$impl$fns$arity_10__delegate(G__43169,G__43170,G__43171,G__43172,G__43173,G__43174,G__43175,G__43176,G__43177,G__43178,G__43179);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__43185,G__43186,G__43187,G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43185);

(invoc_array[(1)] = G__43186);

(invoc_array[(2)] = G__43187);

(invoc_array[(3)] = G__43188);

(invoc_array[(4)] = G__43189);

(invoc_array[(5)] = G__43190);

(invoc_array[(6)] = G__43191);

(invoc_array[(7)] = G__43192);

(invoc_array[(8)] = G__43193);

(invoc_array[(9)] = G__43194);

(invoc_array[(10)] = G__43195);

(invoc_array[vararg_idx] = G__43196);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__43185,G__43186,G__43187,G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,var_args){
var G__43196 = null;
if (arguments.length > 11) {
var G__43923__i = 0, G__43923__a = new Array(arguments.length -  11);
while (G__43923__i < G__43923__a.length) {G__43923__a[G__43923__i] = arguments[G__43923__i + 11]; ++G__43923__i;}
  G__43196 = new cljs.core.IndexedSeq(G__43923__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__43185,G__43186,G__43187,G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__43924){
var G__43185 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43186 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43187 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43188 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43189 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43190 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43191 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43192 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43193 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43194 = cljs.core.first(arglist__43924);
arglist__43924 = cljs.core.next(arglist__43924);
var G__43195 = cljs.core.first(arglist__43924);
var G__43196 = cljs.core.rest(arglist__43924);
return sci$impl$fns$arity_11__delegate(G__43185,G__43186,G__43187,G__43188,G__43189,G__43190,G__43191,G__43192,G__43193,G__43194,G__43195,G__43196);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__43197,G__43198,G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43197);

(invoc_array[(1)] = G__43198);

(invoc_array[(2)] = G__43199);

(invoc_array[(3)] = G__43200);

(invoc_array[(4)] = G__43201);

(invoc_array[(5)] = G__43202);

(invoc_array[(6)] = G__43203);

(invoc_array[(7)] = G__43204);

(invoc_array[(8)] = G__43205);

(invoc_array[(9)] = G__43206);

(invoc_array[(10)] = G__43207);

(invoc_array[(11)] = G__43208);

(invoc_array[vararg_idx] = G__43209);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__43197,G__43198,G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,var_args){
var G__43209 = null;
if (arguments.length > 12) {
var G__43925__i = 0, G__43925__a = new Array(arguments.length -  12);
while (G__43925__i < G__43925__a.length) {G__43925__a[G__43925__i] = arguments[G__43925__i + 12]; ++G__43925__i;}
  G__43209 = new cljs.core.IndexedSeq(G__43925__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__43197,G__43198,G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__43926){
var G__43197 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43198 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43199 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43200 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43201 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43202 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43203 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43204 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43205 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43206 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43207 = cljs.core.first(arglist__43926);
arglist__43926 = cljs.core.next(arglist__43926);
var G__43208 = cljs.core.first(arglist__43926);
var G__43209 = cljs.core.rest(arglist__43926);
return sci$impl$fns$arity_12__delegate(G__43197,G__43198,G__43199,G__43200,G__43201,G__43202,G__43203,G__43204,G__43205,G__43206,G__43207,G__43208,G__43209);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223,G__43224,G__43225,G__43226){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43213);

(invoc_array[(1)] = G__43214);

(invoc_array[(2)] = G__43215);

(invoc_array[(3)] = G__43216);

(invoc_array[(4)] = G__43217);

(invoc_array[(5)] = G__43218);

(invoc_array[(6)] = G__43219);

(invoc_array[(7)] = G__43220);

(invoc_array[(8)] = G__43221);

(invoc_array[(9)] = G__43222);

(invoc_array[(10)] = G__43223);

(invoc_array[(11)] = G__43224);

(invoc_array[(12)] = G__43225);

(invoc_array[vararg_idx] = G__43226);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223,G__43224,G__43225,var_args){
var G__43226 = null;
if (arguments.length > 13) {
var G__43927__i = 0, G__43927__a = new Array(arguments.length -  13);
while (G__43927__i < G__43927__a.length) {G__43927__a[G__43927__i] = arguments[G__43927__i + 13]; ++G__43927__i;}
  G__43226 = new cljs.core.IndexedSeq(G__43927__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223,G__43224,G__43225,G__43226);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__43928){
var G__43213 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43214 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43215 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43216 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43217 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43218 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43219 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43220 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43221 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43222 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43223 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43224 = cljs.core.first(arglist__43928);
arglist__43928 = cljs.core.next(arglist__43928);
var G__43225 = cljs.core.first(arglist__43928);
var G__43226 = cljs.core.rest(arglist__43928);
return sci$impl$fns$arity_13__delegate(G__43213,G__43214,G__43215,G__43216,G__43217,G__43218,G__43219,G__43220,G__43221,G__43222,G__43223,G__43224,G__43225,G__43226);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__43237,G__43238,G__43239,G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,G__43251){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43237);

(invoc_array[(1)] = G__43238);

(invoc_array[(2)] = G__43239);

(invoc_array[(3)] = G__43240);

(invoc_array[(4)] = G__43241);

(invoc_array[(5)] = G__43242);

(invoc_array[(6)] = G__43243);

(invoc_array[(7)] = G__43244);

(invoc_array[(8)] = G__43245);

(invoc_array[(9)] = G__43246);

(invoc_array[(10)] = G__43247);

(invoc_array[(11)] = G__43248);

(invoc_array[(12)] = G__43249);

(invoc_array[(13)] = G__43250);

(invoc_array[vararg_idx] = G__43251);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__43237,G__43238,G__43239,G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,var_args){
var G__43251 = null;
if (arguments.length > 14) {
var G__43932__i = 0, G__43932__a = new Array(arguments.length -  14);
while (G__43932__i < G__43932__a.length) {G__43932__a[G__43932__i] = arguments[G__43932__i + 14]; ++G__43932__i;}
  G__43251 = new cljs.core.IndexedSeq(G__43932__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__43237,G__43238,G__43239,G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,G__43251);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__43933){
var G__43237 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43238 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43239 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43240 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43241 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43242 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43243 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43244 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43245 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43246 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43247 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43248 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43249 = cljs.core.first(arglist__43933);
arglist__43933 = cljs.core.next(arglist__43933);
var G__43250 = cljs.core.first(arglist__43933);
var G__43251 = cljs.core.rest(arglist__43933);
return sci$impl$fns$arity_14__delegate(G__43237,G__43238,G__43239,G__43240,G__43241,G__43242,G__43243,G__43244,G__43245,G__43246,G__43247,G__43248,G__43249,G__43250,G__43251);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__43266,G__43267,G__43268,G__43269,G__43270,G__43271,G__43272,G__43273,G__43274,G__43275,G__43276,G__43277,G__43278,G__43279,G__43280,G__43281){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43266);

(invoc_array[(1)] = G__43267);

(invoc_array[(2)] = G__43268);

(invoc_array[(3)] = G__43269);

(invoc_array[(4)] = G__43270);

(invoc_array[(5)] = G__43271);

(invoc_array[(6)] = G__43272);

(invoc_array[(7)] = G__43273);

(invoc_array[(8)] = G__43274);

(invoc_array[(9)] = G__43275);

(invoc_array[(10)] = G__43276);

(invoc_array[(11)] = G__43277);

(invoc_array[(12)] = G__43278);

(invoc_array[(13)] = G__43279);

(invoc_array[(14)] = G__43280);

(invoc_array[vararg_idx] = G__43281);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__43266,G__43267,G__43268,G__43269,G__43270,G__43271,G__43272,G__43273,G__43274,G__43275,G__43276,G__43277,G__43278,G__43279,G__43280,var_args){
var G__43281 = null;
if (arguments.length > 15) {
var G__43934__i = 0, G__43934__a = new Array(arguments.length -  15);
while (G__43934__i < G__43934__a.length) {G__43934__a[G__43934__i] = arguments[G__43934__i + 15]; ++G__43934__i;}
  G__43281 = new cljs.core.IndexedSeq(G__43934__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__43266,G__43267,G__43268,G__43269,G__43270,G__43271,G__43272,G__43273,G__43274,G__43275,G__43276,G__43277,G__43278,G__43279,G__43280,G__43281);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__43935){
var G__43266 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43267 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43268 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43269 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43270 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43271 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43272 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43273 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43274 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43275 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43276 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43277 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43278 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43279 = cljs.core.first(arglist__43935);
arglist__43935 = cljs.core.next(arglist__43935);
var G__43280 = cljs.core.first(arglist__43935);
var G__43281 = cljs.core.rest(arglist__43935);
return sci$impl$fns$arity_15__delegate(G__43266,G__43267,G__43268,G__43269,G__43270,G__43271,G__43272,G__43273,G__43274,G__43275,G__43276,G__43277,G__43278,G__43279,G__43280,G__43281);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__43286,G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43286);

(invoc_array[(1)] = G__43287);

(invoc_array[(2)] = G__43288);

(invoc_array[(3)] = G__43289);

(invoc_array[(4)] = G__43290);

(invoc_array[(5)] = G__43291);

(invoc_array[(6)] = G__43292);

(invoc_array[(7)] = G__43293);

(invoc_array[(8)] = G__43294);

(invoc_array[(9)] = G__43295);

(invoc_array[(10)] = G__43296);

(invoc_array[(11)] = G__43297);

(invoc_array[(12)] = G__43298);

(invoc_array[(13)] = G__43299);

(invoc_array[(14)] = G__43300);

(invoc_array[(15)] = G__43301);

(invoc_array[vararg_idx] = G__43302);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__43286,G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,var_args){
var G__43302 = null;
if (arguments.length > 16) {
var G__43939__i = 0, G__43939__a = new Array(arguments.length -  16);
while (G__43939__i < G__43939__a.length) {G__43939__a[G__43939__i] = arguments[G__43939__i + 16]; ++G__43939__i;}
  G__43302 = new cljs.core.IndexedSeq(G__43939__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__43286,G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__43941){
var G__43286 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43287 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43288 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43289 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43290 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43291 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43292 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43293 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43294 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43295 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43296 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43297 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43298 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43299 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43300 = cljs.core.first(arglist__43941);
arglist__43941 = cljs.core.next(arglist__43941);
var G__43301 = cljs.core.first(arglist__43941);
var G__43302 = cljs.core.rest(arglist__43941);
return sci$impl$fns$arity_16__delegate(G__43286,G__43287,G__43288,G__43289,G__43290,G__43291,G__43292,G__43293,G__43294,G__43295,G__43296,G__43297,G__43298,G__43299,G__43300,G__43301,G__43302);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,G__43321,G__43322,G__43323){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43306);

(invoc_array[(1)] = G__43307);

(invoc_array[(2)] = G__43308);

(invoc_array[(3)] = G__43309);

(invoc_array[(4)] = G__43310);

(invoc_array[(5)] = G__43311);

(invoc_array[(6)] = G__43312);

(invoc_array[(7)] = G__43313);

(invoc_array[(8)] = G__43314);

(invoc_array[(9)] = G__43315);

(invoc_array[(10)] = G__43316);

(invoc_array[(11)] = G__43317);

(invoc_array[(12)] = G__43318);

(invoc_array[(13)] = G__43319);

(invoc_array[(14)] = G__43320);

(invoc_array[(15)] = G__43321);

(invoc_array[(16)] = G__43322);

(invoc_array[vararg_idx] = G__43323);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,G__43321,G__43322,var_args){
var G__43323 = null;
if (arguments.length > 17) {
var G__43944__i = 0, G__43944__a = new Array(arguments.length -  17);
while (G__43944__i < G__43944__a.length) {G__43944__a[G__43944__i] = arguments[G__43944__i + 17]; ++G__43944__i;}
  G__43323 = new cljs.core.IndexedSeq(G__43944__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,G__43321,G__43322,G__43323);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__43945){
var G__43306 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43307 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43308 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43309 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43310 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43311 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43312 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43313 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43314 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43315 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43316 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43317 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43318 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43319 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43320 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43321 = cljs.core.first(arglist__43945);
arglist__43945 = cljs.core.next(arglist__43945);
var G__43322 = cljs.core.first(arglist__43945);
var G__43323 = cljs.core.rest(arglist__43945);
return sci$impl$fns$arity_17__delegate(G__43306,G__43307,G__43308,G__43309,G__43310,G__43311,G__43312,G__43313,G__43314,G__43315,G__43316,G__43317,G__43318,G__43319,G__43320,G__43321,G__43322,G__43323);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__43324,G__43325,G__43326,G__43327,G__43328,G__43329,G__43330,G__43331,G__43332,G__43333,G__43334,G__43335,G__43336,G__43337,G__43338,G__43339,G__43340,G__43341,G__43342){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43324);

(invoc_array[(1)] = G__43325);

(invoc_array[(2)] = G__43326);

(invoc_array[(3)] = G__43327);

(invoc_array[(4)] = G__43328);

(invoc_array[(5)] = G__43329);

(invoc_array[(6)] = G__43330);

(invoc_array[(7)] = G__43331);

(invoc_array[(8)] = G__43332);

(invoc_array[(9)] = G__43333);

(invoc_array[(10)] = G__43334);

(invoc_array[(11)] = G__43335);

(invoc_array[(12)] = G__43336);

(invoc_array[(13)] = G__43337);

(invoc_array[(14)] = G__43338);

(invoc_array[(15)] = G__43339);

(invoc_array[(16)] = G__43340);

(invoc_array[(17)] = G__43341);

(invoc_array[vararg_idx] = G__43342);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__43324,G__43325,G__43326,G__43327,G__43328,G__43329,G__43330,G__43331,G__43332,G__43333,G__43334,G__43335,G__43336,G__43337,G__43338,G__43339,G__43340,G__43341,var_args){
var G__43342 = null;
if (arguments.length > 18) {
var G__43946__i = 0, G__43946__a = new Array(arguments.length -  18);
while (G__43946__i < G__43946__a.length) {G__43946__a[G__43946__i] = arguments[G__43946__i + 18]; ++G__43946__i;}
  G__43342 = new cljs.core.IndexedSeq(G__43946__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__43324,G__43325,G__43326,G__43327,G__43328,G__43329,G__43330,G__43331,G__43332,G__43333,G__43334,G__43335,G__43336,G__43337,G__43338,G__43339,G__43340,G__43341,G__43342);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__43947){
var G__43324 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43325 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43326 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43327 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43328 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43329 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43330 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43331 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43332 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43333 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43334 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43335 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43336 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43337 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43338 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43339 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43340 = cljs.core.first(arglist__43947);
arglist__43947 = cljs.core.next(arglist__43947);
var G__43341 = cljs.core.first(arglist__43947);
var G__43342 = cljs.core.rest(arglist__43947);
return sci$impl$fns$arity_18__delegate(G__43324,G__43325,G__43326,G__43327,G__43328,G__43329,G__43330,G__43331,G__43332,G__43333,G__43334,G__43335,G__43336,G__43337,G__43338,G__43339,G__43340,G__43341,G__43342);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,G__43360,G__43361,G__43362){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43343);

(invoc_array[(1)] = G__43344);

(invoc_array[(2)] = G__43345);

(invoc_array[(3)] = G__43346);

(invoc_array[(4)] = G__43347);

(invoc_array[(5)] = G__43348);

(invoc_array[(6)] = G__43349);

(invoc_array[(7)] = G__43350);

(invoc_array[(8)] = G__43351);

(invoc_array[(9)] = G__43352);

(invoc_array[(10)] = G__43353);

(invoc_array[(11)] = G__43354);

(invoc_array[(12)] = G__43355);

(invoc_array[(13)] = G__43356);

(invoc_array[(14)] = G__43357);

(invoc_array[(15)] = G__43358);

(invoc_array[(16)] = G__43359);

(invoc_array[(17)] = G__43360);

(invoc_array[(18)] = G__43361);

(invoc_array[vararg_idx] = G__43362);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,G__43360,G__43361,var_args){
var G__43362 = null;
if (arguments.length > 19) {
var G__43948__i = 0, G__43948__a = new Array(arguments.length -  19);
while (G__43948__i < G__43948__a.length) {G__43948__a[G__43948__i] = arguments[G__43948__i + 19]; ++G__43948__i;}
  G__43362 = new cljs.core.IndexedSeq(G__43948__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,G__43360,G__43361,G__43362);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__43949){
var G__43343 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43344 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43345 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43346 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43347 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43348 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43349 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43350 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43351 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43352 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43353 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43354 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43355 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43356 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43357 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43358 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43359 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43360 = cljs.core.first(arglist__43949);
arglist__43949 = cljs.core.next(arglist__43949);
var G__43361 = cljs.core.first(arglist__43949);
var G__43362 = cljs.core.rest(arglist__43949);
return sci$impl$fns$arity_19__delegate(G__43343,G__43344,G__43345,G__43346,G__43347,G__43348,G__43349,G__43350,G__43351,G__43352,G__43353,G__43354,G__43355,G__43356,G__43357,G__43358,G__43359,G__43360,G__43361,G__43362);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382,G__43383,G__43384,G__43385,G__43386,G__43387,G__43388,G__43389){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43369);

(invoc_array[(1)] = G__43370);

(invoc_array[(2)] = G__43371);

(invoc_array[(3)] = G__43372);

(invoc_array[(4)] = G__43373);

(invoc_array[(5)] = G__43374);

(invoc_array[(6)] = G__43375);

(invoc_array[(7)] = G__43376);

(invoc_array[(8)] = G__43377);

(invoc_array[(9)] = G__43378);

(invoc_array[(10)] = G__43379);

(invoc_array[(11)] = G__43380);

(invoc_array[(12)] = G__43381);

(invoc_array[(13)] = G__43382);

(invoc_array[(14)] = G__43383);

(invoc_array[(15)] = G__43384);

(invoc_array[(16)] = G__43385);

(invoc_array[(17)] = G__43386);

(invoc_array[(18)] = G__43387);

(invoc_array[(19)] = G__43388);

(invoc_array[vararg_idx] = G__43389);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382,G__43383,G__43384,G__43385,G__43386,G__43387,G__43388,var_args){
var G__43389 = null;
if (arguments.length > 20) {
var G__43950__i = 0, G__43950__a = new Array(arguments.length -  20);
while (G__43950__i < G__43950__a.length) {G__43950__a[G__43950__i] = arguments[G__43950__i + 20]; ++G__43950__i;}
  G__43389 = new cljs.core.IndexedSeq(G__43950__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382,G__43383,G__43384,G__43385,G__43386,G__43387,G__43388,G__43389);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__43951){
var G__43369 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43370 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43371 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43372 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43373 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43374 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43375 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43376 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43377 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43378 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43379 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43380 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43381 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43382 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43383 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43384 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43385 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43386 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43387 = cljs.core.first(arglist__43951);
arglist__43951 = cljs.core.next(arglist__43951);
var G__43388 = cljs.core.first(arglist__43951);
var G__43389 = cljs.core.rest(arglist__43951);
return sci$impl$fns$arity_20__delegate(G__43369,G__43370,G__43371,G__43372,G__43373,G__43374,G__43375,G__43376,G__43377,G__43378,G__43379,G__43380,G__43381,G__43382,G__43383,G__43384,G__43385,G__43386,G__43387,G__43388,G__43389);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43105)].join('')));

}
})():(function (){var G__43391 = fixed_arity;
switch (G__43391) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__42320__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42320__auto__)){
continue;
} else {
return ret__42320__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__43393){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43393);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__43394,G__43395){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43394);

(invoc_array[(1)] = G__43395);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__43396,G__43397,G__43398){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43396);

(invoc_array[(1)] = G__43397);

(invoc_array[(2)] = G__43398);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__43406,G__43407,G__43408,G__43409){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43406);

(invoc_array[(1)] = G__43407);

(invoc_array[(2)] = G__43408);

(invoc_array[(3)] = G__43409);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__43410,G__43411,G__43412,G__43413,G__43414){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43410);

(invoc_array[(1)] = G__43411);

(invoc_array[(2)] = G__43412);

(invoc_array[(3)] = G__43413);

(invoc_array[(4)] = G__43414);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__43415,G__43416,G__43417,G__43418,G__43419,G__43420){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43415);

(invoc_array[(1)] = G__43416);

(invoc_array[(2)] = G__43417);

(invoc_array[(3)] = G__43418);

(invoc_array[(4)] = G__43419);

(invoc_array[(5)] = G__43420);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__43424,G__43425,G__43426,G__43427,G__43428,G__43429,G__43430){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43424);

(invoc_array[(1)] = G__43425);

(invoc_array[(2)] = G__43426);

(invoc_array[(3)] = G__43427);

(invoc_array[(4)] = G__43428);

(invoc_array[(5)] = G__43429);

(invoc_array[(6)] = G__43430);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__43444,G__43445,G__43446,G__43447,G__43448,G__43449,G__43450,G__43451){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43444);

(invoc_array[(1)] = G__43445);

(invoc_array[(2)] = G__43446);

(invoc_array[(3)] = G__43447);

(invoc_array[(4)] = G__43448);

(invoc_array[(5)] = G__43449);

(invoc_array[(6)] = G__43450);

(invoc_array[(7)] = G__43451);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__43456,G__43457,G__43458,G__43459,G__43460,G__43461,G__43462,G__43463,G__43464){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43456);

(invoc_array[(1)] = G__43457);

(invoc_array[(2)] = G__43458);

(invoc_array[(3)] = G__43459);

(invoc_array[(4)] = G__43460);

(invoc_array[(5)] = G__43461);

(invoc_array[(6)] = G__43462);

(invoc_array[(7)] = G__43463);

(invoc_array[(8)] = G__43464);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__43465,G__43466,G__43467,G__43468,G__43469,G__43470,G__43471,G__43472,G__43473,G__43474){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43465);

(invoc_array[(1)] = G__43466);

(invoc_array[(2)] = G__43467);

(invoc_array[(3)] = G__43468);

(invoc_array[(4)] = G__43469);

(invoc_array[(5)] = G__43470);

(invoc_array[(6)] = G__43471);

(invoc_array[(7)] = G__43472);

(invoc_array[(8)] = G__43473);

(invoc_array[(9)] = G__43474);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__43493,G__43494,G__43495,G__43496,G__43497,G__43498,G__43499,G__43500,G__43501,G__43502,G__43503){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43493);

(invoc_array[(1)] = G__43494);

(invoc_array[(2)] = G__43495);

(invoc_array[(3)] = G__43496);

(invoc_array[(4)] = G__43497);

(invoc_array[(5)] = G__43498);

(invoc_array[(6)] = G__43499);

(invoc_array[(7)] = G__43500);

(invoc_array[(8)] = G__43501);

(invoc_array[(9)] = G__43502);

(invoc_array[(10)] = G__43503);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__43512,G__43513,G__43514,G__43515,G__43516,G__43517,G__43518,G__43519,G__43520,G__43521,G__43522,G__43523){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43512);

(invoc_array[(1)] = G__43513);

(invoc_array[(2)] = G__43514);

(invoc_array[(3)] = G__43515);

(invoc_array[(4)] = G__43516);

(invoc_array[(5)] = G__43517);

(invoc_array[(6)] = G__43518);

(invoc_array[(7)] = G__43519);

(invoc_array[(8)] = G__43520);

(invoc_array[(9)] = G__43521);

(invoc_array[(10)] = G__43522);

(invoc_array[(11)] = G__43523);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__43526,G__43527,G__43528,G__43529,G__43530,G__43531,G__43532,G__43533,G__43534,G__43535,G__43536,G__43537,G__43538){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43526);

(invoc_array[(1)] = G__43527);

(invoc_array[(2)] = G__43528);

(invoc_array[(3)] = G__43529);

(invoc_array[(4)] = G__43530);

(invoc_array[(5)] = G__43531);

(invoc_array[(6)] = G__43532);

(invoc_array[(7)] = G__43533);

(invoc_array[(8)] = G__43534);

(invoc_array[(9)] = G__43535);

(invoc_array[(10)] = G__43536);

(invoc_array[(11)] = G__43537);

(invoc_array[(12)] = G__43538);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__43550,G__43551,G__43552,G__43553,G__43554,G__43555,G__43556,G__43557,G__43558,G__43559,G__43560,G__43561,G__43562,G__43563){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43550);

(invoc_array[(1)] = G__43551);

(invoc_array[(2)] = G__43552);

(invoc_array[(3)] = G__43553);

(invoc_array[(4)] = G__43554);

(invoc_array[(5)] = G__43555);

(invoc_array[(6)] = G__43556);

(invoc_array[(7)] = G__43557);

(invoc_array[(8)] = G__43558);

(invoc_array[(9)] = G__43559);

(invoc_array[(10)] = G__43560);

(invoc_array[(11)] = G__43561);

(invoc_array[(12)] = G__43562);

(invoc_array[(13)] = G__43563);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__43567,G__43568,G__43569,G__43570,G__43571,G__43572,G__43573,G__43574,G__43575,G__43576,G__43577,G__43578,G__43579,G__43580,G__43581){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43567);

(invoc_array[(1)] = G__43568);

(invoc_array[(2)] = G__43569);

(invoc_array[(3)] = G__43570);

(invoc_array[(4)] = G__43571);

(invoc_array[(5)] = G__43572);

(invoc_array[(6)] = G__43573);

(invoc_array[(7)] = G__43574);

(invoc_array[(8)] = G__43575);

(invoc_array[(9)] = G__43576);

(invoc_array[(10)] = G__43577);

(invoc_array[(11)] = G__43578);

(invoc_array[(12)] = G__43579);

(invoc_array[(13)] = G__43580);

(invoc_array[(14)] = G__43581);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__43584,G__43585,G__43586,G__43587,G__43588,G__43589,G__43590,G__43591,G__43592,G__43593,G__43594,G__43595,G__43596,G__43597,G__43598,G__43599){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43584);

(invoc_array[(1)] = G__43585);

(invoc_array[(2)] = G__43586);

(invoc_array[(3)] = G__43587);

(invoc_array[(4)] = G__43588);

(invoc_array[(5)] = G__43589);

(invoc_array[(6)] = G__43590);

(invoc_array[(7)] = G__43591);

(invoc_array[(8)] = G__43592);

(invoc_array[(9)] = G__43593);

(invoc_array[(10)] = G__43594);

(invoc_array[(11)] = G__43595);

(invoc_array[(12)] = G__43596);

(invoc_array[(13)] = G__43597);

(invoc_array[(14)] = G__43598);

(invoc_array[(15)] = G__43599);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__43600,G__43601,G__43602,G__43603,G__43604,G__43605,G__43606,G__43607,G__43608,G__43609,G__43610,G__43611,G__43612,G__43613,G__43614,G__43615,G__43616){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43600);

(invoc_array[(1)] = G__43601);

(invoc_array[(2)] = G__43602);

(invoc_array[(3)] = G__43603);

(invoc_array[(4)] = G__43604);

(invoc_array[(5)] = G__43605);

(invoc_array[(6)] = G__43606);

(invoc_array[(7)] = G__43607);

(invoc_array[(8)] = G__43608);

(invoc_array[(9)] = G__43609);

(invoc_array[(10)] = G__43610);

(invoc_array[(11)] = G__43611);

(invoc_array[(12)] = G__43612);

(invoc_array[(13)] = G__43613);

(invoc_array[(14)] = G__43614);

(invoc_array[(15)] = G__43615);

(invoc_array[(16)] = G__43616);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__43621,G__43622,G__43623,G__43624,G__43625,G__43626,G__43627,G__43628,G__43629,G__43630,G__43631,G__43632,G__43633,G__43634,G__43635,G__43636,G__43637,G__43638){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43621);

(invoc_array[(1)] = G__43622);

(invoc_array[(2)] = G__43623);

(invoc_array[(3)] = G__43624);

(invoc_array[(4)] = G__43625);

(invoc_array[(5)] = G__43626);

(invoc_array[(6)] = G__43627);

(invoc_array[(7)] = G__43628);

(invoc_array[(8)] = G__43629);

(invoc_array[(9)] = G__43630);

(invoc_array[(10)] = G__43631);

(invoc_array[(11)] = G__43632);

(invoc_array[(12)] = G__43633);

(invoc_array[(13)] = G__43634);

(invoc_array[(14)] = G__43635);

(invoc_array[(15)] = G__43636);

(invoc_array[(16)] = G__43637);

(invoc_array[(17)] = G__43638);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__43647,G__43648,G__43649,G__43650,G__43651,G__43652,G__43653,G__43654,G__43655,G__43656,G__43657,G__43658,G__43659,G__43660,G__43661,G__43662,G__43663,G__43664,G__43665){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43647);

(invoc_array[(1)] = G__43648);

(invoc_array[(2)] = G__43649);

(invoc_array[(3)] = G__43650);

(invoc_array[(4)] = G__43651);

(invoc_array[(5)] = G__43652);

(invoc_array[(6)] = G__43653);

(invoc_array[(7)] = G__43654);

(invoc_array[(8)] = G__43655);

(invoc_array[(9)] = G__43656);

(invoc_array[(10)] = G__43657);

(invoc_array[(11)] = G__43658);

(invoc_array[(12)] = G__43659);

(invoc_array[(13)] = G__43660);

(invoc_array[(14)] = G__43661);

(invoc_array[(15)] = G__43662);

(invoc_array[(16)] = G__43663);

(invoc_array[(17)] = G__43664);

(invoc_array[(18)] = G__43665);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__43668,G__43669,G__43670,G__43671,G__43672,G__43673,G__43674,G__43675,G__43676,G__43677,G__43678,G__43679,G__43680,G__43681,G__43682,G__43683,G__43684,G__43685,G__43686,G__43687){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__43668);

(invoc_array[(1)] = G__43669);

(invoc_array[(2)] = G__43670);

(invoc_array[(3)] = G__43671);

(invoc_array[(4)] = G__43672);

(invoc_array[(5)] = G__43673);

(invoc_array[(6)] = G__43674);

(invoc_array[(7)] = G__43675);

(invoc_array[(8)] = G__43676);

(invoc_array[(9)] = G__43677);

(invoc_array[(10)] = G__43678);

(invoc_array[(11)] = G__43679);

(invoc_array[(12)] = G__43680);

(invoc_array[(13)] = G__43681);

(invoc_array[(14)] = G__43682);

(invoc_array[(15)] = G__43683);

(invoc_array[(16)] = G__43684);

(invoc_array[(17)] = G__43685);

(invoc_array[(18)] = G__43686);

(invoc_array[(19)] = G__43687);

while(true){
var ret__42321__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__42321__auto__)){
continue;
} else {
return ret__42321__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43391)].join('')));

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
var G__43973 = cljs.core.next(params__$1);
var G__43974 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__43975 = lets;
params__$1 = G__43973;
new_params = G__43974;
lets = G__43975;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__43976 = cljs.core.next(params__$1);
var G__43977 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__43978 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__43976;
new_params = G__43977;
lets = G__43978;
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
var len__5749__auto___43979 = arguments.length;
var i__5750__auto___43980 = (0);
while(true){
if((i__5750__auto___43980 < len__5749__auto___43979)){
args__5755__auto__.push((arguments[i__5750__auto___43980]));

var G__43981 = (i__5750__auto___43980 + (1));
i__5750__auto___43980 = G__43981;
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

var vec__43733 = sig;
var seq__43734 = cljs.core.seq(vec__43733);
var first__43735 = cljs.core.first(seq__43734);
var seq__43734__$1 = cljs.core.next(seq__43734);
var params = first__43735;
var body = seq__43734__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq43729){
var G__43730 = cljs.core.first(seq43729);
var seq43729__$1 = cljs.core.next(seq43729);
var G__43731 = cljs.core.first(seq43729__$1);
var seq43729__$2 = cljs.core.next(seq43729__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43730,G__43731,seq43729__$2);
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
var G__43993 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__43994 = cljs.core.next(fdecls);
ret = G__43993;
fdecls = G__43994;
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
var len__5749__auto___43995 = arguments.length;
var i__5750__auto___43996 = (0);
while(true){
if((i__5750__auto___43996 < len__5749__auto___43995)){
args__5755__auto__.push((arguments[i__5750__auto___43996]));

var G__43997 = (i__5750__auto___43996 + (1));
i__5750__auto___43996 = G__43997;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq43747){
var G__43748 = cljs.core.first(seq43747);
var seq43747__$1 = cljs.core.next(seq43747);
var G__43749 = cljs.core.first(seq43747__$1);
var seq43747__$2 = cljs.core.next(seq43747__$1);
var G__43750 = cljs.core.first(seq43747__$2);
var seq43747__$3 = cljs.core.next(seq43747__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43748,G__43749,G__43750,seq43747__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44006 = arguments.length;
var i__5750__auto___44007 = (0);
while(true){
if((i__5750__auto___44007 < len__5749__auto___44006)){
args__5755__auto__.push((arguments[i__5750__auto___44007]));

var G__44008 = (i__5750__auto___44007 + (1));
i__5750__auto___44007 = G__44008;
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
var G__44009 = cljs.core.cons(f,p);
var G__44010 = cljs.core.next(args__$1);
p = G__44009;
args__$1 = G__44010;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__44011 = cljs.core.cons(f,p);
var G__44012 = cljs.core.next(args__$1);
p = G__44011;
args__$1 = G__44012;
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
var G__44013 = cljs.core.next(fd);
fd = G__44013;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__44014 = cljs.core.next(fd);
fd = G__44014;
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
var G__44015 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__44016 = cljs.core.next(ds);
acc = G__44015;
ds = G__44016;
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
var G__44017 = cljs.core.next(p);
var G__44018 = cljs.core.cons(cljs.core.first(p),d);
p = G__44017;
d = G__44018;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq43774){
var G__43775 = cljs.core.first(seq43774);
var seq43774__$1 = cljs.core.next(seq43774);
var G__43776 = cljs.core.first(seq43774__$1);
var seq43774__$2 = cljs.core.next(seq43774__$1);
var G__43777 = cljs.core.first(seq43774__$2);
var seq43774__$3 = cljs.core.next(seq43774__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43775,G__43776,G__43777,seq43774__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
