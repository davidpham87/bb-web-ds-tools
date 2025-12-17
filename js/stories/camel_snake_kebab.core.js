var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./camel_snake_kebab.internals.misc.js");
require("./camel_snake_kebab.internals.alter_name.js");
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
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
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

$CLJS.SHADOW_ENV.setLoaded("camel_snake_kebab.core.js");

goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47450 = arguments.length;
var i__5750__auto___47451 = (0);
while(true){
if((i__5750__auto___47451 < len__5749__auto___47450)){
args__5755__auto__.push((arguments[i__5750__auto___47451]));

var G__47452 = (i__5750__auto___47451 + (1));
i__5750__auto___47451 = G__47452;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq47304){
var G__47305 = cljs.core.first(seq47304);
var seq47304__$1 = cljs.core.next(seq47304);
var G__47306 = cljs.core.first(seq47304__$1);
var seq47304__$2 = cljs.core.next(seq47304__$1);
var G__47307 = cljs.core.first(seq47304__$2);
var seq47304__$3 = cljs.core.next(seq47304__$2);
var G__47308 = cljs.core.first(seq47304__$3);
var seq47304__$4 = cljs.core.next(seq47304__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47305,G__47306,G__47307,G__47308,seq47304__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47453 = arguments.length;
var i__5750__auto___47454 = (0);
while(true){
if((i__5750__auto___47454 < len__5749__auto___47453)){
args__5755__auto__.push((arguments[i__5750__auto___47454]));

var G__47455 = (i__5750__auto___47454 + (1));
i__5750__auto___47454 = G__47455;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47269__auto__,rest__47270__auto__){
var convert_case__47271__auto__ = (function (p1__47268__47272__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__47268__47272__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47270__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47269__auto__,convert_case__47271__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq47313){
var G__47314 = cljs.core.first(seq47313);
var seq47313__$1 = cljs.core.next(seq47313);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47314,seq47313__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47456 = arguments.length;
var i__5750__auto___47457 = (0);
while(true){
if((i__5750__auto___47457 < len__5749__auto___47456)){
args__5755__auto__.push((arguments[i__5750__auto___47457]));

var G__47458 = (i__5750__auto___47457 + (1));
i__5750__auto___47457 = G__47458;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq47315){
var G__47316 = cljs.core.first(seq47315);
var seq47315__$1 = cljs.core.next(seq47315);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47316,seq47315__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47468 = arguments.length;
var i__5750__auto___47469 = (0);
while(true){
if((i__5750__auto___47469 < len__5749__auto___47468)){
args__5755__auto__.push((arguments[i__5750__auto___47469]));

var G__47470 = (i__5750__auto___47469 + (1));
i__5750__auto___47469 = G__47470;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq47317){
var G__47318 = cljs.core.first(seq47317);
var seq47317__$1 = cljs.core.next(seq47317);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47318,seq47317__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47471 = arguments.length;
var i__5750__auto___47472 = (0);
while(true){
if((i__5750__auto___47472 < len__5749__auto___47471)){
args__5755__auto__.push((arguments[i__5750__auto___47472]));

var G__47473 = (i__5750__auto___47472 + (1));
i__5750__auto___47472 = G__47473;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq47319){
var G__47320 = cljs.core.first(seq47319);
var seq47319__$1 = cljs.core.next(seq47319);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47320,seq47319__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47476 = arguments.length;
var i__5750__auto___47477 = (0);
while(true){
if((i__5750__auto___47477 < len__5749__auto___47476)){
args__5755__auto__.push((arguments[i__5750__auto___47477]));

var G__47478 = (i__5750__auto___47477 + (1));
i__5750__auto___47477 = G__47478;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47269__auto__,rest__47270__auto__){
var convert_case__47271__auto__ = (function (p1__47268__47272__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__47268__47272__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47270__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47269__auto__,convert_case__47271__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq47321){
var G__47322 = cljs.core.first(seq47321);
var seq47321__$1 = cljs.core.next(seq47321);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47322,seq47321__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47479 = arguments.length;
var i__5750__auto___47480 = (0);
while(true){
if((i__5750__auto___47480 < len__5749__auto___47479)){
args__5755__auto__.push((arguments[i__5750__auto___47480]));

var G__47481 = (i__5750__auto___47480 + (1));
i__5750__auto___47480 = G__47481;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq47326){
var G__47327 = cljs.core.first(seq47326);
var seq47326__$1 = cljs.core.next(seq47326);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47327,seq47326__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47482 = arguments.length;
var i__5750__auto___47483 = (0);
while(true){
if((i__5750__auto___47483 < len__5749__auto___47482)){
args__5755__auto__.push((arguments[i__5750__auto___47483]));

var G__47484 = (i__5750__auto___47483 + (1));
i__5750__auto___47483 = G__47484;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq47329){
var G__47331 = cljs.core.first(seq47329);
var seq47329__$1 = cljs.core.next(seq47329);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47331,seq47329__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47489 = arguments.length;
var i__5750__auto___47490 = (0);
while(true){
if((i__5750__auto___47490 < len__5749__auto___47489)){
args__5755__auto__.push((arguments[i__5750__auto___47490]));

var G__47491 = (i__5750__auto___47490 + (1));
i__5750__auto___47490 = G__47491;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq47338){
var G__47339 = cljs.core.first(seq47338);
var seq47338__$1 = cljs.core.next(seq47338);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47339,seq47338__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47492 = arguments.length;
var i__5750__auto___47493 = (0);
while(true){
if((i__5750__auto___47493 < len__5749__auto___47492)){
args__5755__auto__.push((arguments[i__5750__auto___47493]));

var G__47494 = (i__5750__auto___47493 + (1));
i__5750__auto___47493 = G__47494;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47269__auto__,rest__47270__auto__){
var convert_case__47271__auto__ = (function (p1__47268__47272__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__47268__47272__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47270__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47269__auto__,convert_case__47271__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq47344){
var G__47345 = cljs.core.first(seq47344);
var seq47344__$1 = cljs.core.next(seq47344);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47345,seq47344__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47495 = arguments.length;
var i__5750__auto___47496 = (0);
while(true){
if((i__5750__auto___47496 < len__5749__auto___47495)){
args__5755__auto__.push((arguments[i__5750__auto___47496]));

var G__47497 = (i__5750__auto___47496 + (1));
i__5750__auto___47496 = G__47497;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq47349){
var G__47350 = cljs.core.first(seq47349);
var seq47349__$1 = cljs.core.next(seq47349);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47350,seq47349__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47498 = arguments.length;
var i__5750__auto___47499 = (0);
while(true){
if((i__5750__auto___47499 < len__5749__auto___47498)){
args__5755__auto__.push((arguments[i__5750__auto___47499]));

var G__47500 = (i__5750__auto___47499 + (1));
i__5750__auto___47499 = G__47500;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq47356){
var G__47357 = cljs.core.first(seq47356);
var seq47356__$1 = cljs.core.next(seq47356);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47357,seq47356__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47501 = arguments.length;
var i__5750__auto___47502 = (0);
while(true){
if((i__5750__auto___47502 < len__5749__auto___47501)){
args__5755__auto__.push((arguments[i__5750__auto___47502]));

var G__47503 = (i__5750__auto___47502 + (1));
i__5750__auto___47502 = G__47503;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq47366){
var G__47368 = cljs.core.first(seq47366);
var seq47366__$1 = cljs.core.next(seq47366);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47368,seq47366__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47509 = arguments.length;
var i__5750__auto___47510 = (0);
while(true){
if((i__5750__auto___47510 < len__5749__auto___47509)){
args__5755__auto__.push((arguments[i__5750__auto___47510]));

var G__47511 = (i__5750__auto___47510 + (1));
i__5750__auto___47510 = G__47511;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__47269__auto__,rest__47270__auto__){
var convert_case__47271__auto__ = (function (p1__47268__47272__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__47268__47272__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47270__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47269__auto__,convert_case__47271__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq47380){
var G__47381 = cljs.core.first(seq47380);
var seq47380__$1 = cljs.core.next(seq47380);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47381,seq47380__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47512 = arguments.length;
var i__5750__auto___47513 = (0);
while(true){
if((i__5750__auto___47513 < len__5749__auto___47512)){
args__5755__auto__.push((arguments[i__5750__auto___47513]));

var G__47514 = (i__5750__auto___47513 + (1));
i__5750__auto___47513 = G__47514;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq47390){
var G__47391 = cljs.core.first(seq47390);
var seq47390__$1 = cljs.core.next(seq47390);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47391,seq47390__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47515 = arguments.length;
var i__5750__auto___47516 = (0);
while(true){
if((i__5750__auto___47516 < len__5749__auto___47515)){
args__5755__auto__.push((arguments[i__5750__auto___47516]));

var G__47517 = (i__5750__auto___47516 + (1));
i__5750__auto___47516 = G__47517;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq47394){
var G__47395 = cljs.core.first(seq47394);
var seq47394__$1 = cljs.core.next(seq47394);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47395,seq47394__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47518 = arguments.length;
var i__5750__auto___47519 = (0);
while(true){
if((i__5750__auto___47519 < len__5749__auto___47518)){
args__5755__auto__.push((arguments[i__5750__auto___47519]));

var G__47520 = (i__5750__auto___47519 + (1));
i__5750__auto___47519 = G__47520;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq47400){
var G__47401 = cljs.core.first(seq47400);
var seq47400__$1 = cljs.core.next(seq47400);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47401,seq47400__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47521 = arguments.length;
var i__5750__auto___47522 = (0);
while(true){
if((i__5750__auto___47522 < len__5749__auto___47521)){
args__5755__auto__.push((arguments[i__5750__auto___47522]));

var G__47523 = (i__5750__auto___47522 + (1));
i__5750__auto___47522 = G__47523;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47269__auto__,rest__47270__auto__){
var convert_case__47271__auto__ = (function (p1__47268__47272__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__47268__47272__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47270__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47269__auto__,convert_case__47271__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq47411){
var G__47412 = cljs.core.first(seq47411);
var seq47411__$1 = cljs.core.next(seq47411);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47412,seq47411__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47524 = arguments.length;
var i__5750__auto___47525 = (0);
while(true){
if((i__5750__auto___47525 < len__5749__auto___47524)){
args__5755__auto__.push((arguments[i__5750__auto___47525]));

var G__47526 = (i__5750__auto___47525 + (1));
i__5750__auto___47525 = G__47526;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq47424){
var G__47425 = cljs.core.first(seq47424);
var seq47424__$1 = cljs.core.next(seq47424);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47425,seq47424__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47527 = arguments.length;
var i__5750__auto___47528 = (0);
while(true){
if((i__5750__auto___47528 < len__5749__auto___47527)){
args__5755__auto__.push((arguments[i__5750__auto___47528]));

var G__47529 = (i__5750__auto___47528 + (1));
i__5750__auto___47528 = G__47529;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq47427){
var G__47428 = cljs.core.first(seq47427);
var seq47427__$1 = cljs.core.next(seq47427);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47428,seq47427__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47530 = arguments.length;
var i__5750__auto___47531 = (0);
while(true){
if((i__5750__auto___47531 < len__5749__auto___47530)){
args__5755__auto__.push((arguments[i__5750__auto___47531]));

var G__47535 = (i__5750__auto___47531 + (1));
i__5750__auto___47531 = G__47535;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq47429){
var G__47430 = cljs.core.first(seq47429);
var seq47429__$1 = cljs.core.next(seq47429);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47430,seq47429__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47536 = arguments.length;
var i__5750__auto___47537 = (0);
while(true){
if((i__5750__auto___47537 < len__5749__auto___47536)){
args__5755__auto__.push((arguments[i__5750__auto___47537]));

var G__47538 = (i__5750__auto___47537 + (1));
i__5750__auto___47537 = G__47538;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47269__auto__,rest__47270__auto__){
var convert_case__47271__auto__ = (function (p1__47268__47272__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__47268__47272__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47270__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47269__auto__,convert_case__47271__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq47431){
var G__47432 = cljs.core.first(seq47431);
var seq47431__$1 = cljs.core.next(seq47431);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47432,seq47431__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47539 = arguments.length;
var i__5750__auto___47540 = (0);
while(true){
if((i__5750__auto___47540 < len__5749__auto___47539)){
args__5755__auto__.push((arguments[i__5750__auto___47540]));

var G__47541 = (i__5750__auto___47540 + (1));
i__5750__auto___47540 = G__47541;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq47433){
var G__47434 = cljs.core.first(seq47433);
var seq47433__$1 = cljs.core.next(seq47433);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47434,seq47433__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47542 = arguments.length;
var i__5750__auto___47543 = (0);
while(true){
if((i__5750__auto___47543 < len__5749__auto___47542)){
args__5755__auto__.push((arguments[i__5750__auto___47543]));

var G__47544 = (i__5750__auto___47543 + (1));
i__5750__auto___47543 = G__47544;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq47435){
var G__47436 = cljs.core.first(seq47435);
var seq47435__$1 = cljs.core.next(seq47435);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47436,seq47435__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47545 = arguments.length;
var i__5750__auto___47546 = (0);
while(true){
if((i__5750__auto___47546 < len__5749__auto___47545)){
args__5755__auto__.push((arguments[i__5750__auto___47546]));

var G__47547 = (i__5750__auto___47546 + (1));
i__5750__auto___47546 = G__47547;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq47438){
var G__47439 = cljs.core.first(seq47438);
var seq47438__$1 = cljs.core.next(seq47438);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47439,seq47438__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47548 = arguments.length;
var i__5750__auto___47549 = (0);
while(true){
if((i__5750__auto___47549 < len__5749__auto___47548)){
args__5755__auto__.push((arguments[i__5750__auto___47549]));

var G__47550 = (i__5750__auto___47549 + (1));
i__5750__auto___47549 = G__47550;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47269__auto__,rest__47270__auto__){
var convert_case__47271__auto__ = (function (p1__47268__47272__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__47268__47272__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47270__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47269__auto__,convert_case__47271__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq47440){
var G__47441 = cljs.core.first(seq47440);
var seq47440__$1 = cljs.core.next(seq47440);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47441,seq47440__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47551 = arguments.length;
var i__5750__auto___47552 = (0);
while(true){
if((i__5750__auto___47552 < len__5749__auto___47551)){
args__5755__auto__.push((arguments[i__5750__auto___47552]));

var G__47553 = (i__5750__auto___47552 + (1));
i__5750__auto___47552 = G__47553;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq47442){
var G__47443 = cljs.core.first(seq47442);
var seq47442__$1 = cljs.core.next(seq47442);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47443,seq47442__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47554 = arguments.length;
var i__5750__auto___47555 = (0);
while(true){
if((i__5750__auto___47555 < len__5749__auto___47554)){
args__5755__auto__.push((arguments[i__5750__auto___47555]));

var G__47556 = (i__5750__auto___47555 + (1));
i__5750__auto___47555 = G__47556;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq47444){
var G__47445 = cljs.core.first(seq47444);
var seq47444__$1 = cljs.core.next(seq47444);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47445,seq47444__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47557 = arguments.length;
var i__5750__auto___47558 = (0);
while(true){
if((i__5750__auto___47558 < len__5749__auto___47557)){
args__5755__auto__.push((arguments[i__5750__auto___47558]));

var G__47559 = (i__5750__auto___47558 + (1));
i__5750__auto___47558 = G__47559;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47274__auto__,rest__47275__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47274__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47275__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq47446){
var G__47447 = cljs.core.first(seq47446);
var seq47446__$1 = cljs.core.next(seq47446);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47447,seq47446__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
