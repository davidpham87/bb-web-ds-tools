var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./sci.impl.types.js");
require("./sci.impl.utils.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("sci.impl.fns.js");

goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__40944 = arguments.length;
switch (G__40944) {
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
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__40945 = fixed_arity;
switch (G__40945) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__40946){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__40946);

while(true){
var ret__40156__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40156__auto__)){
continue;
} else {
return ret__40156__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__40946 = null;
if (arguments.length > 0) {
var G__41638__i = 0, G__41638__a = new Array(arguments.length -  0);
while (G__41638__i < G__41638__a.length) {G__41638__a[G__41638__i] = arguments[G__41638__i + 0]; ++G__41638__i;}
  G__40946 = new cljs.core.IndexedSeq(G__41638__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__40946);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__41639){
var G__40946 = cljs.core.seq(arglist__41639);
return sci$impl$fns$arity_0__delegate(G__40946);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__40947,G__40948){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40947);

(invoc_array[vararg_idx] = G__40948);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__40947,var_args){
var G__40948 = null;
if (arguments.length > 1) {
var G__41642__i = 0, G__41642__a = new Array(arguments.length -  1);
while (G__41642__i < G__41642__a.length) {G__41642__a[G__41642__i] = arguments[G__41642__i + 1]; ++G__41642__i;}
  G__40948 = new cljs.core.IndexedSeq(G__41642__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__40947,G__40948);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__41643){
var G__40947 = cljs.core.first(arglist__41643);
var G__40948 = cljs.core.rest(arglist__41643);
return sci$impl$fns$arity_1__delegate(G__40947,G__40948);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__40949,G__40950,G__40951){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40949);

(invoc_array[(1)] = G__40950);

(invoc_array[vararg_idx] = G__40951);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__40949,G__40950,var_args){
var G__40951 = null;
if (arguments.length > 2) {
var G__41645__i = 0, G__41645__a = new Array(arguments.length -  2);
while (G__41645__i < G__41645__a.length) {G__41645__a[G__41645__i] = arguments[G__41645__i + 2]; ++G__41645__i;}
  G__40951 = new cljs.core.IndexedSeq(G__41645__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__40949,G__40950,G__40951);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__41646){
var G__40949 = cljs.core.first(arglist__41646);
arglist__41646 = cljs.core.next(arglist__41646);
var G__40950 = cljs.core.first(arglist__41646);
var G__40951 = cljs.core.rest(arglist__41646);
return sci$impl$fns$arity_2__delegate(G__40949,G__40950,G__40951);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__40952,G__40953,G__40954,G__40955){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40952);

(invoc_array[(1)] = G__40953);

(invoc_array[(2)] = G__40954);

(invoc_array[vararg_idx] = G__40955);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__40952,G__40953,G__40954,var_args){
var G__40955 = null;
if (arguments.length > 3) {
var G__41647__i = 0, G__41647__a = new Array(arguments.length -  3);
while (G__41647__i < G__41647__a.length) {G__41647__a[G__41647__i] = arguments[G__41647__i + 3]; ++G__41647__i;}
  G__40955 = new cljs.core.IndexedSeq(G__41647__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__40952,G__40953,G__40954,G__40955);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__41648){
var G__40952 = cljs.core.first(arglist__41648);
arglist__41648 = cljs.core.next(arglist__41648);
var G__40953 = cljs.core.first(arglist__41648);
arglist__41648 = cljs.core.next(arglist__41648);
var G__40954 = cljs.core.first(arglist__41648);
var G__40955 = cljs.core.rest(arglist__41648);
return sci$impl$fns$arity_3__delegate(G__40952,G__40953,G__40954,G__40955);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__40956,G__40957,G__40958,G__40959,G__40960){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40956);

(invoc_array[(1)] = G__40957);

(invoc_array[(2)] = G__40958);

(invoc_array[(3)] = G__40959);

(invoc_array[vararg_idx] = G__40960);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__40956,G__40957,G__40958,G__40959,var_args){
var G__40960 = null;
if (arguments.length > 4) {
var G__41649__i = 0, G__41649__a = new Array(arguments.length -  4);
while (G__41649__i < G__41649__a.length) {G__41649__a[G__41649__i] = arguments[G__41649__i + 4]; ++G__41649__i;}
  G__40960 = new cljs.core.IndexedSeq(G__41649__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__40956,G__40957,G__40958,G__40959,G__40960);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__41650){
var G__40956 = cljs.core.first(arglist__41650);
arglist__41650 = cljs.core.next(arglist__41650);
var G__40957 = cljs.core.first(arglist__41650);
arglist__41650 = cljs.core.next(arglist__41650);
var G__40958 = cljs.core.first(arglist__41650);
arglist__41650 = cljs.core.next(arglist__41650);
var G__40959 = cljs.core.first(arglist__41650);
var G__40960 = cljs.core.rest(arglist__41650);
return sci$impl$fns$arity_4__delegate(G__40956,G__40957,G__40958,G__40959,G__40960);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__40965,G__40966,G__40967,G__40968,G__40969,G__40970){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40965);

(invoc_array[(1)] = G__40966);

(invoc_array[(2)] = G__40967);

(invoc_array[(3)] = G__40968);

(invoc_array[(4)] = G__40969);

(invoc_array[vararg_idx] = G__40970);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__40965,G__40966,G__40967,G__40968,G__40969,var_args){
var G__40970 = null;
if (arguments.length > 5) {
var G__41654__i = 0, G__41654__a = new Array(arguments.length -  5);
while (G__41654__i < G__41654__a.length) {G__41654__a[G__41654__i] = arguments[G__41654__i + 5]; ++G__41654__i;}
  G__40970 = new cljs.core.IndexedSeq(G__41654__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__41655){
var G__40965 = cljs.core.first(arglist__41655);
arglist__41655 = cljs.core.next(arglist__41655);
var G__40966 = cljs.core.first(arglist__41655);
arglist__41655 = cljs.core.next(arglist__41655);
var G__40967 = cljs.core.first(arglist__41655);
arglist__41655 = cljs.core.next(arglist__41655);
var G__40968 = cljs.core.first(arglist__41655);
arglist__41655 = cljs.core.next(arglist__41655);
var G__40969 = cljs.core.first(arglist__41655);
var G__40970 = cljs.core.rest(arglist__41655);
return sci$impl$fns$arity_5__delegate(G__40965,G__40966,G__40967,G__40968,G__40969,G__40970);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,G__40977){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40971);

(invoc_array[(1)] = G__40972);

(invoc_array[(2)] = G__40973);

(invoc_array[(3)] = G__40974);

(invoc_array[(4)] = G__40975);

(invoc_array[(5)] = G__40976);

(invoc_array[vararg_idx] = G__40977);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,var_args){
var G__40977 = null;
if (arguments.length > 6) {
var G__41662__i = 0, G__41662__a = new Array(arguments.length -  6);
while (G__41662__i < G__41662__a.length) {G__41662__a[G__41662__i] = arguments[G__41662__i + 6]; ++G__41662__i;}
  G__40977 = new cljs.core.IndexedSeq(G__41662__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,G__40977);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__41663){
var G__40971 = cljs.core.first(arglist__41663);
arglist__41663 = cljs.core.next(arglist__41663);
var G__40972 = cljs.core.first(arglist__41663);
arglist__41663 = cljs.core.next(arglist__41663);
var G__40973 = cljs.core.first(arglist__41663);
arglist__41663 = cljs.core.next(arglist__41663);
var G__40974 = cljs.core.first(arglist__41663);
arglist__41663 = cljs.core.next(arglist__41663);
var G__40975 = cljs.core.first(arglist__41663);
arglist__41663 = cljs.core.next(arglist__41663);
var G__40976 = cljs.core.first(arglist__41663);
var G__40977 = cljs.core.rest(arglist__41663);
return sci$impl$fns$arity_6__delegate(G__40971,G__40972,G__40973,G__40974,G__40975,G__40976,G__40977);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40978);

(invoc_array[(1)] = G__40979);

(invoc_array[(2)] = G__40980);

(invoc_array[(3)] = G__40981);

(invoc_array[(4)] = G__40982);

(invoc_array[(5)] = G__40983);

(invoc_array[(6)] = G__40984);

(invoc_array[vararg_idx] = G__40985);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,var_args){
var G__40985 = null;
if (arguments.length > 7) {
var G__41670__i = 0, G__41670__a = new Array(arguments.length -  7);
while (G__41670__i < G__41670__a.length) {G__41670__a[G__41670__i] = arguments[G__41670__i + 7]; ++G__41670__i;}
  G__40985 = new cljs.core.IndexedSeq(G__41670__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__41676){
var G__40978 = cljs.core.first(arglist__41676);
arglist__41676 = cljs.core.next(arglist__41676);
var G__40979 = cljs.core.first(arglist__41676);
arglist__41676 = cljs.core.next(arglist__41676);
var G__40980 = cljs.core.first(arglist__41676);
arglist__41676 = cljs.core.next(arglist__41676);
var G__40981 = cljs.core.first(arglist__41676);
arglist__41676 = cljs.core.next(arglist__41676);
var G__40982 = cljs.core.first(arglist__41676);
arglist__41676 = cljs.core.next(arglist__41676);
var G__40983 = cljs.core.first(arglist__41676);
arglist__41676 = cljs.core.next(arglist__41676);
var G__40984 = cljs.core.first(arglist__41676);
var G__40985 = cljs.core.rest(arglist__41676);
return sci$impl$fns$arity_7__delegate(G__40978,G__40979,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,G__40994){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40986);

(invoc_array[(1)] = G__40987);

(invoc_array[(2)] = G__40988);

(invoc_array[(3)] = G__40989);

(invoc_array[(4)] = G__40990);

(invoc_array[(5)] = G__40991);

(invoc_array[(6)] = G__40992);

(invoc_array[(7)] = G__40993);

(invoc_array[vararg_idx] = G__40994);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,var_args){
var G__40994 = null;
if (arguments.length > 8) {
var G__41680__i = 0, G__41680__a = new Array(arguments.length -  8);
while (G__41680__i < G__41680__a.length) {G__41680__a[G__41680__i] = arguments[G__41680__i + 8]; ++G__41680__i;}
  G__40994 = new cljs.core.IndexedSeq(G__41680__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,G__40994);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__41682){
var G__40986 = cljs.core.first(arglist__41682);
arglist__41682 = cljs.core.next(arglist__41682);
var G__40987 = cljs.core.first(arglist__41682);
arglist__41682 = cljs.core.next(arglist__41682);
var G__40988 = cljs.core.first(arglist__41682);
arglist__41682 = cljs.core.next(arglist__41682);
var G__40989 = cljs.core.first(arglist__41682);
arglist__41682 = cljs.core.next(arglist__41682);
var G__40990 = cljs.core.first(arglist__41682);
arglist__41682 = cljs.core.next(arglist__41682);
var G__40991 = cljs.core.first(arglist__41682);
arglist__41682 = cljs.core.next(arglist__41682);
var G__40992 = cljs.core.first(arglist__41682);
arglist__41682 = cljs.core.next(arglist__41682);
var G__40993 = cljs.core.first(arglist__41682);
var G__40994 = cljs.core.rest(arglist__41682);
return sci$impl$fns$arity_8__delegate(G__40986,G__40987,G__40988,G__40989,G__40990,G__40991,G__40992,G__40993,G__40994);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001,G__41002,G__41003,G__41004){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__40995);

(invoc_array[(1)] = G__40996);

(invoc_array[(2)] = G__40997);

(invoc_array[(3)] = G__40998);

(invoc_array[(4)] = G__40999);

(invoc_array[(5)] = G__41000);

(invoc_array[(6)] = G__41001);

(invoc_array[(7)] = G__41002);

(invoc_array[(8)] = G__41003);

(invoc_array[vararg_idx] = G__41004);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001,G__41002,G__41003,var_args){
var G__41004 = null;
if (arguments.length > 9) {
var G__41686__i = 0, G__41686__a = new Array(arguments.length -  9);
while (G__41686__i < G__41686__a.length) {G__41686__a[G__41686__i] = arguments[G__41686__i + 9]; ++G__41686__i;}
  G__41004 = new cljs.core.IndexedSeq(G__41686__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001,G__41002,G__41003,G__41004);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__41687){
var G__40995 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__40996 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__40997 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__40998 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__40999 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__41000 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__41001 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__41002 = cljs.core.first(arglist__41687);
arglist__41687 = cljs.core.next(arglist__41687);
var G__41003 = cljs.core.first(arglist__41687);
var G__41004 = cljs.core.rest(arglist__41687);
return sci$impl$fns$arity_9__delegate(G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001,G__41002,G__41003,G__41004);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41007);

(invoc_array[(1)] = G__41008);

(invoc_array[(2)] = G__41009);

(invoc_array[(3)] = G__41010);

(invoc_array[(4)] = G__41011);

(invoc_array[(5)] = G__41012);

(invoc_array[(6)] = G__41013);

(invoc_array[(7)] = G__41014);

(invoc_array[(8)] = G__41015);

(invoc_array[(9)] = G__41016);

(invoc_array[vararg_idx] = G__41017);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,var_args){
var G__41017 = null;
if (arguments.length > 10) {
var G__41690__i = 0, G__41690__a = new Array(arguments.length -  10);
while (G__41690__i < G__41690__a.length) {G__41690__a[G__41690__i] = arguments[G__41690__i + 10]; ++G__41690__i;}
  G__41017 = new cljs.core.IndexedSeq(G__41690__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__41691){
var G__41007 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41008 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41009 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41010 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41011 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41012 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41013 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41014 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41015 = cljs.core.first(arglist__41691);
arglist__41691 = cljs.core.next(arglist__41691);
var G__41016 = cljs.core.first(arglist__41691);
var G__41017 = cljs.core.rest(arglist__41691);
return sci$impl$fns$arity_10__delegate(G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41022);

(invoc_array[(1)] = G__41023);

(invoc_array[(2)] = G__41024);

(invoc_array[(3)] = G__41025);

(invoc_array[(4)] = G__41026);

(invoc_array[(5)] = G__41027);

(invoc_array[(6)] = G__41028);

(invoc_array[(7)] = G__41029);

(invoc_array[(8)] = G__41030);

(invoc_array[(9)] = G__41031);

(invoc_array[(10)] = G__41032);

(invoc_array[vararg_idx] = G__41033);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,var_args){
var G__41033 = null;
if (arguments.length > 11) {
var G__41696__i = 0, G__41696__a = new Array(arguments.length -  11);
while (G__41696__i < G__41696__a.length) {G__41696__a[G__41696__i] = arguments[G__41696__i + 11]; ++G__41696__i;}
  G__41033 = new cljs.core.IndexedSeq(G__41696__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__41697){
var G__41022 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41023 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41024 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41025 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41026 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41027 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41028 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41029 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41030 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41031 = cljs.core.first(arglist__41697);
arglist__41697 = cljs.core.next(arglist__41697);
var G__41032 = cljs.core.first(arglist__41697);
var G__41033 = cljs.core.rest(arglist__41697);
return sci$impl$fns$arity_11__delegate(G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41034);

(invoc_array[(1)] = G__41035);

(invoc_array[(2)] = G__41036);

(invoc_array[(3)] = G__41037);

(invoc_array[(4)] = G__41038);

(invoc_array[(5)] = G__41039);

(invoc_array[(6)] = G__41040);

(invoc_array[(7)] = G__41041);

(invoc_array[(8)] = G__41042);

(invoc_array[(9)] = G__41043);

(invoc_array[(10)] = G__41044);

(invoc_array[(11)] = G__41045);

(invoc_array[vararg_idx] = G__41046);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,var_args){
var G__41046 = null;
if (arguments.length > 12) {
var G__41704__i = 0, G__41704__a = new Array(arguments.length -  12);
while (G__41704__i < G__41704__a.length) {G__41704__a[G__41704__i] = arguments[G__41704__i + 12]; ++G__41704__i;}
  G__41046 = new cljs.core.IndexedSeq(G__41704__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__41706){
var G__41034 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41035 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41036 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41037 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41038 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41039 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41040 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41041 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41042 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41043 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41044 = cljs.core.first(arglist__41706);
arglist__41706 = cljs.core.next(arglist__41706);
var G__41045 = cljs.core.first(arglist__41706);
var G__41046 = cljs.core.rest(arglist__41706);
return sci$impl$fns$arity_12__delegate(G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043,G__41044,G__41045,G__41046);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41050);

(invoc_array[(1)] = G__41051);

(invoc_array[(2)] = G__41052);

(invoc_array[(3)] = G__41053);

(invoc_array[(4)] = G__41054);

(invoc_array[(5)] = G__41055);

(invoc_array[(6)] = G__41056);

(invoc_array[(7)] = G__41057);

(invoc_array[(8)] = G__41058);

(invoc_array[(9)] = G__41059);

(invoc_array[(10)] = G__41060);

(invoc_array[(11)] = G__41061);

(invoc_array[(12)] = G__41062);

(invoc_array[vararg_idx] = G__41063);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,var_args){
var G__41063 = null;
if (arguments.length > 13) {
var G__41714__i = 0, G__41714__a = new Array(arguments.length -  13);
while (G__41714__i < G__41714__a.length) {G__41714__a[G__41714__i] = arguments[G__41714__i + 13]; ++G__41714__i;}
  G__41063 = new cljs.core.IndexedSeq(G__41714__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__41715){
var G__41050 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41051 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41052 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41053 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41054 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41055 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41056 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41057 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41058 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41059 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41060 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41061 = cljs.core.first(arglist__41715);
arglist__41715 = cljs.core.next(arglist__41715);
var G__41062 = cljs.core.first(arglist__41715);
var G__41063 = cljs.core.rest(arglist__41715);
return sci$impl$fns$arity_13__delegate(G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061,G__41062,G__41063);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41064);

(invoc_array[(1)] = G__41065);

(invoc_array[(2)] = G__41066);

(invoc_array[(3)] = G__41067);

(invoc_array[(4)] = G__41068);

(invoc_array[(5)] = G__41069);

(invoc_array[(6)] = G__41070);

(invoc_array[(7)] = G__41071);

(invoc_array[(8)] = G__41072);

(invoc_array[(9)] = G__41073);

(invoc_array[(10)] = G__41074);

(invoc_array[(11)] = G__41075);

(invoc_array[(12)] = G__41076);

(invoc_array[(13)] = G__41077);

(invoc_array[vararg_idx] = G__41078);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,var_args){
var G__41078 = null;
if (arguments.length > 14) {
var G__41719__i = 0, G__41719__a = new Array(arguments.length -  14);
while (G__41719__i < G__41719__a.length) {G__41719__a[G__41719__i] = arguments[G__41719__i + 14]; ++G__41719__i;}
  G__41078 = new cljs.core.IndexedSeq(G__41719__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__41720){
var G__41064 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41065 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41066 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41067 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41068 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41069 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41070 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41071 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41072 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41073 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41074 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41075 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41076 = cljs.core.first(arglist__41720);
arglist__41720 = cljs.core.next(arglist__41720);
var G__41077 = cljs.core.first(arglist__41720);
var G__41078 = cljs.core.rest(arglist__41720);
return sci$impl$fns$arity_14__delegate(G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075,G__41076,G__41077,G__41078);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41079);

(invoc_array[(1)] = G__41080);

(invoc_array[(2)] = G__41081);

(invoc_array[(3)] = G__41082);

(invoc_array[(4)] = G__41083);

(invoc_array[(5)] = G__41084);

(invoc_array[(6)] = G__41085);

(invoc_array[(7)] = G__41086);

(invoc_array[(8)] = G__41087);

(invoc_array[(9)] = G__41088);

(invoc_array[(10)] = G__41089);

(invoc_array[(11)] = G__41090);

(invoc_array[(12)] = G__41091);

(invoc_array[(13)] = G__41092);

(invoc_array[(14)] = G__41093);

(invoc_array[vararg_idx] = G__41094);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,var_args){
var G__41094 = null;
if (arguments.length > 15) {
var G__41728__i = 0, G__41728__a = new Array(arguments.length -  15);
while (G__41728__i < G__41728__a.length) {G__41728__a[G__41728__i] = arguments[G__41728__i + 15]; ++G__41728__i;}
  G__41094 = new cljs.core.IndexedSeq(G__41728__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__41729){
var G__41079 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41080 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41081 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41082 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41083 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41084 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41085 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41086 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41087 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41088 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41089 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41090 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41091 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41092 = cljs.core.first(arglist__41729);
arglist__41729 = cljs.core.next(arglist__41729);
var G__41093 = cljs.core.first(arglist__41729);
var G__41094 = cljs.core.rest(arglist__41729);
return sci$impl$fns$arity_15__delegate(G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41095);

(invoc_array[(1)] = G__41096);

(invoc_array[(2)] = G__41097);

(invoc_array[(3)] = G__41098);

(invoc_array[(4)] = G__41099);

(invoc_array[(5)] = G__41100);

(invoc_array[(6)] = G__41101);

(invoc_array[(7)] = G__41102);

(invoc_array[(8)] = G__41103);

(invoc_array[(9)] = G__41104);

(invoc_array[(10)] = G__41105);

(invoc_array[(11)] = G__41106);

(invoc_array[(12)] = G__41107);

(invoc_array[(13)] = G__41108);

(invoc_array[(14)] = G__41109);

(invoc_array[(15)] = G__41110);

(invoc_array[vararg_idx] = G__41111);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,var_args){
var G__41111 = null;
if (arguments.length > 16) {
var G__41766__i = 0, G__41766__a = new Array(arguments.length -  16);
while (G__41766__i < G__41766__a.length) {G__41766__a[G__41766__i] = arguments[G__41766__i + 16]; ++G__41766__i;}
  G__41111 = new cljs.core.IndexedSeq(G__41766__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__41767){
var G__41095 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41096 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41097 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41098 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41099 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41100 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41101 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41102 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41103 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41104 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41105 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41106 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41107 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41108 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41109 = cljs.core.first(arglist__41767);
arglist__41767 = cljs.core.next(arglist__41767);
var G__41110 = cljs.core.first(arglist__41767);
var G__41111 = cljs.core.rest(arglist__41767);
return sci$impl$fns$arity_16__delegate(G__41095,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41119);

(invoc_array[(1)] = G__41120);

(invoc_array[(2)] = G__41121);

(invoc_array[(3)] = G__41122);

(invoc_array[(4)] = G__41123);

(invoc_array[(5)] = G__41124);

(invoc_array[(6)] = G__41125);

(invoc_array[(7)] = G__41126);

(invoc_array[(8)] = G__41127);

(invoc_array[(9)] = G__41128);

(invoc_array[(10)] = G__41129);

(invoc_array[(11)] = G__41130);

(invoc_array[(12)] = G__41131);

(invoc_array[(13)] = G__41132);

(invoc_array[(14)] = G__41133);

(invoc_array[(15)] = G__41134);

(invoc_array[(16)] = G__41135);

(invoc_array[vararg_idx] = G__41136);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,var_args){
var G__41136 = null;
if (arguments.length > 17) {
var G__41795__i = 0, G__41795__a = new Array(arguments.length -  17);
while (G__41795__i < G__41795__a.length) {G__41795__a[G__41795__i] = arguments[G__41795__i + 17]; ++G__41795__i;}
  G__41136 = new cljs.core.IndexedSeq(G__41795__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__41796){
var G__41119 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41120 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41121 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41122 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41123 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41124 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41125 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41126 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41127 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41128 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41129 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41130 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41131 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41132 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41133 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41134 = cljs.core.first(arglist__41796);
arglist__41796 = cljs.core.next(arglist__41796);
var G__41135 = cljs.core.first(arglist__41796);
var G__41136 = cljs.core.rest(arglist__41796);
return sci$impl$fns$arity_17__delegate(G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,G__41163){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41145);

(invoc_array[(1)] = G__41146);

(invoc_array[(2)] = G__41147);

(invoc_array[(3)] = G__41148);

(invoc_array[(4)] = G__41149);

(invoc_array[(5)] = G__41150);

(invoc_array[(6)] = G__41151);

(invoc_array[(7)] = G__41152);

(invoc_array[(8)] = G__41153);

(invoc_array[(9)] = G__41154);

(invoc_array[(10)] = G__41155);

(invoc_array[(11)] = G__41156);

(invoc_array[(12)] = G__41157);

(invoc_array[(13)] = G__41158);

(invoc_array[(14)] = G__41159);

(invoc_array[(15)] = G__41160);

(invoc_array[(16)] = G__41161);

(invoc_array[(17)] = G__41162);

(invoc_array[vararg_idx] = G__41163);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,var_args){
var G__41163 = null;
if (arguments.length > 18) {
var G__41800__i = 0, G__41800__a = new Array(arguments.length -  18);
while (G__41800__i < G__41800__a.length) {G__41800__a[G__41800__i] = arguments[G__41800__i + 18]; ++G__41800__i;}
  G__41163 = new cljs.core.IndexedSeq(G__41800__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,G__41163);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__41802){
var G__41145 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41146 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41147 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41148 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41149 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41150 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41151 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41152 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41153 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41154 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41155 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41156 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41157 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41158 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41159 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41160 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41161 = cljs.core.first(arglist__41802);
arglist__41802 = cljs.core.next(arglist__41802);
var G__41162 = cljs.core.first(arglist__41802);
var G__41163 = cljs.core.rest(arglist__41802);
return sci$impl$fns$arity_18__delegate(G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161,G__41162,G__41163);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41168);

(invoc_array[(1)] = G__41169);

(invoc_array[(2)] = G__41170);

(invoc_array[(3)] = G__41171);

(invoc_array[(4)] = G__41172);

(invoc_array[(5)] = G__41173);

(invoc_array[(6)] = G__41174);

(invoc_array[(7)] = G__41175);

(invoc_array[(8)] = G__41176);

(invoc_array[(9)] = G__41177);

(invoc_array[(10)] = G__41178);

(invoc_array[(11)] = G__41179);

(invoc_array[(12)] = G__41180);

(invoc_array[(13)] = G__41182);

(invoc_array[(14)] = G__41183);

(invoc_array[(15)] = G__41184);

(invoc_array[(16)] = G__41185);

(invoc_array[(17)] = G__41186);

(invoc_array[(18)] = G__41187);

(invoc_array[vararg_idx] = G__41188);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,var_args){
var G__41188 = null;
if (arguments.length > 19) {
var G__41814__i = 0, G__41814__a = new Array(arguments.length -  19);
while (G__41814__i < G__41814__a.length) {G__41814__a[G__41814__i] = arguments[G__41814__i + 19]; ++G__41814__i;}
  G__41188 = new cljs.core.IndexedSeq(G__41814__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__41817){
var G__41168 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41169 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41170 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41171 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41172 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41173 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41174 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41175 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41176 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41177 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41178 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41179 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41180 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41182 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41183 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41184 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41185 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41186 = cljs.core.first(arglist__41817);
arglist__41817 = cljs.core.next(arglist__41817);
var G__41187 = cljs.core.first(arglist__41817);
var G__41188 = cljs.core.rest(arglist__41817);
return sci$impl$fns$arity_19__delegate(G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,G__41204,G__41205,G__41206,G__41207,G__41208,G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,G__41216){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41196);

(invoc_array[(1)] = G__41197);

(invoc_array[(2)] = G__41198);

(invoc_array[(3)] = G__41199);

(invoc_array[(4)] = G__41200);

(invoc_array[(5)] = G__41201);

(invoc_array[(6)] = G__41202);

(invoc_array[(7)] = G__41203);

(invoc_array[(8)] = G__41204);

(invoc_array[(9)] = G__41205);

(invoc_array[(10)] = G__41206);

(invoc_array[(11)] = G__41207);

(invoc_array[(12)] = G__41208);

(invoc_array[(13)] = G__41209);

(invoc_array[(14)] = G__41210);

(invoc_array[(15)] = G__41211);

(invoc_array[(16)] = G__41212);

(invoc_array[(17)] = G__41213);

(invoc_array[(18)] = G__41214);

(invoc_array[(19)] = G__41215);

(invoc_array[vararg_idx] = G__41216);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,G__41204,G__41205,G__41206,G__41207,G__41208,G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,var_args){
var G__41216 = null;
if (arguments.length > 20) {
var G__41828__i = 0, G__41828__a = new Array(arguments.length -  20);
while (G__41828__i < G__41828__a.length) {G__41828__a[G__41828__i] = arguments[G__41828__i + 20]; ++G__41828__i;}
  G__41216 = new cljs.core.IndexedSeq(G__41828__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,G__41204,G__41205,G__41206,G__41207,G__41208,G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,G__41216);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__41830){
var G__41196 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41197 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41198 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41199 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41200 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41201 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41202 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41203 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41204 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41205 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41206 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41207 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41208 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41209 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41210 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41211 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41212 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41213 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41214 = cljs.core.first(arglist__41830);
arglist__41830 = cljs.core.next(arglist__41830);
var G__41215 = cljs.core.first(arglist__41830);
var G__41216 = cljs.core.rest(arglist__41830);
return sci$impl$fns$arity_20__delegate(G__41196,G__41197,G__41198,G__41199,G__41200,G__41201,G__41202,G__41203,G__41204,G__41205,G__41206,G__41207,G__41208,G__41209,G__41210,G__41211,G__41212,G__41213,G__41214,G__41215,G__41216);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40945)].join('')));

}
})():(function (){var G__41224 = fixed_arity;
switch (G__41224) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__40156__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40156__auto__)){
continue;
} else {
return ret__40156__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__41225){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41225);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__41227,G__41228){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41227);

(invoc_array[(1)] = G__41228);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__41229,G__41230,G__41231){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41229);

(invoc_array[(1)] = G__41230);

(invoc_array[(2)] = G__41231);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__41232,G__41233,G__41234,G__41235){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41232);

(invoc_array[(1)] = G__41233);

(invoc_array[(2)] = G__41234);

(invoc_array[(3)] = G__41235);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__41236,G__41237,G__41238,G__41239,G__41240){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41236);

(invoc_array[(1)] = G__41237);

(invoc_array[(2)] = G__41238);

(invoc_array[(3)] = G__41239);

(invoc_array[(4)] = G__41240);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__41241,G__41242,G__41243,G__41244,G__41245,G__41246){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41241);

(invoc_array[(1)] = G__41242);

(invoc_array[(2)] = G__41243);

(invoc_array[(3)] = G__41244);

(invoc_array[(4)] = G__41245);

(invoc_array[(5)] = G__41246);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__41249,G__41250,G__41251,G__41252,G__41253,G__41254,G__41255){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41249);

(invoc_array[(1)] = G__41250);

(invoc_array[(2)] = G__41251);

(invoc_array[(3)] = G__41252);

(invoc_array[(4)] = G__41253);

(invoc_array[(5)] = G__41254);

(invoc_array[(6)] = G__41255);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41257);

(invoc_array[(1)] = G__41258);

(invoc_array[(2)] = G__41259);

(invoc_array[(3)] = G__41260);

(invoc_array[(4)] = G__41261);

(invoc_array[(5)] = G__41262);

(invoc_array[(6)] = G__41263);

(invoc_array[(7)] = G__41264);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__41268,G__41269,G__41270,G__41271,G__41272,G__41273,G__41274,G__41275,G__41276){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41268);

(invoc_array[(1)] = G__41269);

(invoc_array[(2)] = G__41270);

(invoc_array[(3)] = G__41271);

(invoc_array[(4)] = G__41272);

(invoc_array[(5)] = G__41273);

(invoc_array[(6)] = G__41274);

(invoc_array[(7)] = G__41275);

(invoc_array[(8)] = G__41276);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__41281,G__41282,G__41283,G__41284,G__41285,G__41286,G__41287,G__41288,G__41289,G__41290){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41281);

(invoc_array[(1)] = G__41282);

(invoc_array[(2)] = G__41283);

(invoc_array[(3)] = G__41284);

(invoc_array[(4)] = G__41285);

(invoc_array[(5)] = G__41286);

(invoc_array[(6)] = G__41287);

(invoc_array[(7)] = G__41288);

(invoc_array[(8)] = G__41289);

(invoc_array[(9)] = G__41290);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41291);

(invoc_array[(1)] = G__41292);

(invoc_array[(2)] = G__41293);

(invoc_array[(3)] = G__41294);

(invoc_array[(4)] = G__41295);

(invoc_array[(5)] = G__41296);

(invoc_array[(6)] = G__41297);

(invoc_array[(7)] = G__41298);

(invoc_array[(8)] = G__41299);

(invoc_array[(9)] = G__41300);

(invoc_array[(10)] = G__41301);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__41302,G__41303,G__41304,G__41305,G__41306,G__41307,G__41308,G__41309,G__41310,G__41311,G__41312,G__41313){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41302);

(invoc_array[(1)] = G__41303);

(invoc_array[(2)] = G__41304);

(invoc_array[(3)] = G__41305);

(invoc_array[(4)] = G__41306);

(invoc_array[(5)] = G__41307);

(invoc_array[(6)] = G__41308);

(invoc_array[(7)] = G__41309);

(invoc_array[(8)] = G__41310);

(invoc_array[(9)] = G__41311);

(invoc_array[(10)] = G__41312);

(invoc_array[(11)] = G__41313);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__41314,G__41315,G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41314);

(invoc_array[(1)] = G__41315);

(invoc_array[(2)] = G__41316);

(invoc_array[(3)] = G__41317);

(invoc_array[(4)] = G__41318);

(invoc_array[(5)] = G__41319);

(invoc_array[(6)] = G__41320);

(invoc_array[(7)] = G__41321);

(invoc_array[(8)] = G__41322);

(invoc_array[(9)] = G__41323);

(invoc_array[(10)] = G__41324);

(invoc_array[(11)] = G__41325);

(invoc_array[(12)] = G__41326);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__41327,G__41328,G__41329,G__41330,G__41331,G__41332,G__41333,G__41334,G__41335,G__41336,G__41337,G__41338,G__41339,G__41340){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41327);

(invoc_array[(1)] = G__41328);

(invoc_array[(2)] = G__41329);

(invoc_array[(3)] = G__41330);

(invoc_array[(4)] = G__41331);

(invoc_array[(5)] = G__41332);

(invoc_array[(6)] = G__41333);

(invoc_array[(7)] = G__41334);

(invoc_array[(8)] = G__41335);

(invoc_array[(9)] = G__41336);

(invoc_array[(10)] = G__41337);

(invoc_array[(11)] = G__41338);

(invoc_array[(12)] = G__41339);

(invoc_array[(13)] = G__41340);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__41363,G__41364,G__41365,G__41366,G__41367,G__41368,G__41369,G__41370,G__41371,G__41372,G__41373,G__41374,G__41375,G__41376,G__41377){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41363);

(invoc_array[(1)] = G__41364);

(invoc_array[(2)] = G__41365);

(invoc_array[(3)] = G__41366);

(invoc_array[(4)] = G__41367);

(invoc_array[(5)] = G__41368);

(invoc_array[(6)] = G__41369);

(invoc_array[(7)] = G__41370);

(invoc_array[(8)] = G__41371);

(invoc_array[(9)] = G__41372);

(invoc_array[(10)] = G__41373);

(invoc_array[(11)] = G__41374);

(invoc_array[(12)] = G__41375);

(invoc_array[(13)] = G__41376);

(invoc_array[(14)] = G__41377);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__41383,G__41384,G__41385,G__41386,G__41387,G__41388,G__41389,G__41390,G__41391,G__41392,G__41393,G__41394,G__41395,G__41396,G__41397,G__41398){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41383);

(invoc_array[(1)] = G__41384);

(invoc_array[(2)] = G__41385);

(invoc_array[(3)] = G__41386);

(invoc_array[(4)] = G__41387);

(invoc_array[(5)] = G__41388);

(invoc_array[(6)] = G__41389);

(invoc_array[(7)] = G__41390);

(invoc_array[(8)] = G__41391);

(invoc_array[(9)] = G__41392);

(invoc_array[(10)] = G__41393);

(invoc_array[(11)] = G__41394);

(invoc_array[(12)] = G__41395);

(invoc_array[(13)] = G__41396);

(invoc_array[(14)] = G__41397);

(invoc_array[(15)] = G__41398);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__41402,G__41403,G__41404,G__41405,G__41406,G__41407,G__41408,G__41409,G__41410,G__41411,G__41412,G__41413,G__41414,G__41415,G__41416,G__41417,G__41418){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41402);

(invoc_array[(1)] = G__41403);

(invoc_array[(2)] = G__41404);

(invoc_array[(3)] = G__41405);

(invoc_array[(4)] = G__41406);

(invoc_array[(5)] = G__41407);

(invoc_array[(6)] = G__41408);

(invoc_array[(7)] = G__41409);

(invoc_array[(8)] = G__41410);

(invoc_array[(9)] = G__41411);

(invoc_array[(10)] = G__41412);

(invoc_array[(11)] = G__41413);

(invoc_array[(12)] = G__41414);

(invoc_array[(13)] = G__41415);

(invoc_array[(14)] = G__41416);

(invoc_array[(15)] = G__41417);

(invoc_array[(16)] = G__41418);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__41422,G__41423,G__41424,G__41425,G__41426,G__41427,G__41428,G__41429,G__41430,G__41431,G__41432,G__41433,G__41434,G__41435,G__41436,G__41437,G__41438,G__41439){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41422);

(invoc_array[(1)] = G__41423);

(invoc_array[(2)] = G__41424);

(invoc_array[(3)] = G__41425);

(invoc_array[(4)] = G__41426);

(invoc_array[(5)] = G__41427);

(invoc_array[(6)] = G__41428);

(invoc_array[(7)] = G__41429);

(invoc_array[(8)] = G__41430);

(invoc_array[(9)] = G__41431);

(invoc_array[(10)] = G__41432);

(invoc_array[(11)] = G__41433);

(invoc_array[(12)] = G__41434);

(invoc_array[(13)] = G__41435);

(invoc_array[(14)] = G__41436);

(invoc_array[(15)] = G__41437);

(invoc_array[(16)] = G__41438);

(invoc_array[(17)] = G__41439);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__41444,G__41445,G__41446,G__41447,G__41448,G__41449,G__41450,G__41451,G__41452,G__41453,G__41454,G__41455,G__41456,G__41457,G__41458,G__41459,G__41460,G__41461,G__41462){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41444);

(invoc_array[(1)] = G__41445);

(invoc_array[(2)] = G__41446);

(invoc_array[(3)] = G__41447);

(invoc_array[(4)] = G__41448);

(invoc_array[(5)] = G__41449);

(invoc_array[(6)] = G__41450);

(invoc_array[(7)] = G__41451);

(invoc_array[(8)] = G__41452);

(invoc_array[(9)] = G__41453);

(invoc_array[(10)] = G__41454);

(invoc_array[(11)] = G__41455);

(invoc_array[(12)] = G__41456);

(invoc_array[(13)] = G__41457);

(invoc_array[(14)] = G__41458);

(invoc_array[(15)] = G__41459);

(invoc_array[(16)] = G__41460);

(invoc_array[(17)] = G__41461);

(invoc_array[(18)] = G__41462);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__41466,G__41467,G__41468,G__41469,G__41470,G__41471,G__41472,G__41473,G__41474,G__41475,G__41476,G__41477,G__41478,G__41479,G__41480,G__41481,G__41482,G__41483,G__41484,G__41485){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__41466);

(invoc_array[(1)] = G__41467);

(invoc_array[(2)] = G__41468);

(invoc_array[(3)] = G__41469);

(invoc_array[(4)] = G__41470);

(invoc_array[(5)] = G__41471);

(invoc_array[(6)] = G__41472);

(invoc_array[(7)] = G__41473);

(invoc_array[(8)] = G__41474);

(invoc_array[(9)] = G__41475);

(invoc_array[(10)] = G__41476);

(invoc_array[(11)] = G__41477);

(invoc_array[(12)] = G__41478);

(invoc_array[(13)] = G__41479);

(invoc_array[(14)] = G__41480);

(invoc_array[(15)] = G__41481);

(invoc_array[(16)] = G__41482);

(invoc_array[(17)] = G__41483);

(invoc_array[(18)] = G__41484);

(invoc_array[(19)] = G__41485);

while(true){
var ret__40157__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__40157__auto__)){
continue;
} else {
return ret__40157__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41224)].join('')));

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
var G__41860 = cljs.core.next(params__$1);
var G__41861 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__41862 = lets;
params__$1 = G__41860;
new_params = G__41861;
lets = G__41862;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__41863 = cljs.core.next(params__$1);
var G__41864 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__41865 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__41863;
new_params = G__41864;
lets = G__41865;
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
var len__5749__auto___41867 = arguments.length;
var i__5750__auto___41868 = (0);
while(true){
if((i__5750__auto___41868 < len__5749__auto___41867)){
args__5755__auto__.push((arguments[i__5750__auto___41868]));

var G__41869 = (i__5750__auto___41868 + (1));
i__5750__auto___41868 = G__41869;
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

var vec__41515 = sig;
var seq__41516 = cljs.core.seq(vec__41515);
var first__41517 = cljs.core.first(seq__41516);
var seq__41516__$1 = cljs.core.next(seq__41516);
var params = first__41517;
var body = seq__41516__$1;
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
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq41510){
var G__41511 = cljs.core.first(seq41510);
var seq41510__$1 = cljs.core.next(seq41510);
var G__41512 = cljs.core.first(seq41510__$1);
var seq41510__$2 = cljs.core.next(seq41510__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41511,G__41512,seq41510__$2);
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
var G__41878 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__41879 = cljs.core.next(fdecls);
ret = G__41878;
fdecls = G__41879;
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
var len__5749__auto___41880 = arguments.length;
var i__5750__auto___41881 = (0);
while(true){
if((i__5750__auto___41881 < len__5749__auto___41880)){
args__5755__auto__.push((arguments[i__5750__auto___41881]));

var G__41882 = (i__5750__auto___41881 + (1));
i__5750__auto___41881 = G__41882;
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
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq41557){
var G__41558 = cljs.core.first(seq41557);
var seq41557__$1 = cljs.core.next(seq41557);
var G__41559 = cljs.core.first(seq41557__$1);
var seq41557__$2 = cljs.core.next(seq41557__$1);
var G__41560 = cljs.core.first(seq41557__$2);
var seq41557__$3 = cljs.core.next(seq41557__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41558,G__41559,G__41560,seq41557__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___41890 = arguments.length;
var i__5750__auto___41891 = (0);
while(true){
if((i__5750__auto___41891 < len__5749__auto___41890)){
args__5755__auto__.push((arguments[i__5750__auto___41891]));

var G__41894 = (i__5750__auto___41891 + (1));
i__5750__auto___41891 = G__41894;
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
var G__41896 = cljs.core.cons(f,p);
var G__41897 = cljs.core.next(args__$1);
p = G__41896;
args__$1 = G__41897;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__41900 = cljs.core.cons(f,p);
var G__41901 = cljs.core.next(args__$1);
p = G__41900;
args__$1 = G__41901;
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
var G__41903 = cljs.core.next(fd);
fd = G__41903;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__41904 = cljs.core.next(fd);
fd = G__41904;
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
var G__41906 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__41907 = cljs.core.next(ds);
acc = G__41906;
ds = G__41907;
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
var G__41912 = cljs.core.next(p);
var G__41913 = cljs.core.cons(cljs.core.first(p),d);
p = G__41912;
d = G__41913;
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
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq41590){
var G__41591 = cljs.core.first(seq41590);
var seq41590__$1 = cljs.core.next(seq41590);
var G__41592 = cljs.core.first(seq41590__$1);
var seq41590__$2 = cljs.core.next(seq41590__$1);
var G__41593 = cljs.core.first(seq41590__$2);
var seq41590__$3 = cljs.core.next(seq41590__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41591,G__41592,G__41593,seq41590__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
