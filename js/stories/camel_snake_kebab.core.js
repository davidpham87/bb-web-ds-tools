var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./camel_snake_kebab.internals.misc.js");
require("./camel_snake_kebab.internals.alter_name.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution = {});
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
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
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
var len__5749__auto___47320 = arguments.length;
var i__5750__auto___47321 = (0);
while(true){
if((i__5750__auto___47321 < len__5749__auto___47320)){
args__5755__auto__.push((arguments[i__5750__auto___47321]));

var G__47323 = (i__5750__auto___47321 + (1));
i__5750__auto___47321 = G__47323;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq47196){
var G__47197 = cljs.core.first(seq47196);
var seq47196__$1 = cljs.core.next(seq47196);
var G__47198 = cljs.core.first(seq47196__$1);
var seq47196__$2 = cljs.core.next(seq47196__$1);
var G__47199 = cljs.core.first(seq47196__$2);
var seq47196__$3 = cljs.core.next(seq47196__$2);
var G__47200 = cljs.core.first(seq47196__$3);
var seq47196__$4 = cljs.core.next(seq47196__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47197,G__47198,G__47199,G__47200,seq47196__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47325 = arguments.length;
var i__5750__auto___47326 = (0);
while(true){
if((i__5750__auto___47326 < len__5749__auto___47325)){
args__5755__auto__.push((arguments[i__5750__auto___47326]));

var G__47328 = (i__5750__auto___47326 + (1));
i__5750__auto___47326 = G__47328;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47161__auto__,rest__47162__auto__){
var convert_case__47163__auto__ = (function (p1__47160__47164__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__47160__47164__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47162__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47161__auto__,convert_case__47163__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq47201){
var G__47202 = cljs.core.first(seq47201);
var seq47201__$1 = cljs.core.next(seq47201);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47202,seq47201__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47332 = arguments.length;
var i__5750__auto___47333 = (0);
while(true){
if((i__5750__auto___47333 < len__5749__auto___47332)){
args__5755__auto__.push((arguments[i__5750__auto___47333]));

var G__47334 = (i__5750__auto___47333 + (1));
i__5750__auto___47333 = G__47334;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq47203){
var G__47204 = cljs.core.first(seq47203);
var seq47203__$1 = cljs.core.next(seq47203);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47204,seq47203__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47337 = arguments.length;
var i__5750__auto___47338 = (0);
while(true){
if((i__5750__auto___47338 < len__5749__auto___47337)){
args__5755__auto__.push((arguments[i__5750__auto___47338]));

var G__47339 = (i__5750__auto___47338 + (1));
i__5750__auto___47338 = G__47339;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq47206){
var G__47207 = cljs.core.first(seq47206);
var seq47206__$1 = cljs.core.next(seq47206);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47207,seq47206__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47340 = arguments.length;
var i__5750__auto___47341 = (0);
while(true){
if((i__5750__auto___47341 < len__5749__auto___47340)){
args__5755__auto__.push((arguments[i__5750__auto___47341]));

var G__47342 = (i__5750__auto___47341 + (1));
i__5750__auto___47341 = G__47342;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq47208){
var G__47209 = cljs.core.first(seq47208);
var seq47208__$1 = cljs.core.next(seq47208);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47209,seq47208__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47343 = arguments.length;
var i__5750__auto___47344 = (0);
while(true){
if((i__5750__auto___47344 < len__5749__auto___47343)){
args__5755__auto__.push((arguments[i__5750__auto___47344]));

var G__47345 = (i__5750__auto___47344 + (1));
i__5750__auto___47344 = G__47345;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47161__auto__,rest__47162__auto__){
var convert_case__47163__auto__ = (function (p1__47160__47164__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__47160__47164__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47162__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47161__auto__,convert_case__47163__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq47213){
var G__47214 = cljs.core.first(seq47213);
var seq47213__$1 = cljs.core.next(seq47213);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47214,seq47213__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47346 = arguments.length;
var i__5750__auto___47347 = (0);
while(true){
if((i__5750__auto___47347 < len__5749__auto___47346)){
args__5755__auto__.push((arguments[i__5750__auto___47347]));

var G__47348 = (i__5750__auto___47347 + (1));
i__5750__auto___47347 = G__47348;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq47218){
var G__47219 = cljs.core.first(seq47218);
var seq47218__$1 = cljs.core.next(seq47218);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47219,seq47218__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47349 = arguments.length;
var i__5750__auto___47350 = (0);
while(true){
if((i__5750__auto___47350 < len__5749__auto___47349)){
args__5755__auto__.push((arguments[i__5750__auto___47350]));

var G__47351 = (i__5750__auto___47350 + (1));
i__5750__auto___47350 = G__47351;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq47220){
var G__47221 = cljs.core.first(seq47220);
var seq47220__$1 = cljs.core.next(seq47220);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47221,seq47220__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47353 = arguments.length;
var i__5750__auto___47354 = (0);
while(true){
if((i__5750__auto___47354 < len__5749__auto___47353)){
args__5755__auto__.push((arguments[i__5750__auto___47354]));

var G__47356 = (i__5750__auto___47354 + (1));
i__5750__auto___47354 = G__47356;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq47223){
var G__47224 = cljs.core.first(seq47223);
var seq47223__$1 = cljs.core.next(seq47223);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47224,seq47223__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47360 = arguments.length;
var i__5750__auto___47361 = (0);
while(true){
if((i__5750__auto___47361 < len__5749__auto___47360)){
args__5755__auto__.push((arguments[i__5750__auto___47361]));

var G__47362 = (i__5750__auto___47361 + (1));
i__5750__auto___47361 = G__47362;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__47161__auto__,rest__47162__auto__){
var convert_case__47163__auto__ = (function (p1__47160__47164__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__47160__47164__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47162__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47161__auto__,convert_case__47163__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq47225){
var G__47226 = cljs.core.first(seq47225);
var seq47225__$1 = cljs.core.next(seq47225);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47226,seq47225__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47363 = arguments.length;
var i__5750__auto___47364 = (0);
while(true){
if((i__5750__auto___47364 < len__5749__auto___47363)){
args__5755__auto__.push((arguments[i__5750__auto___47364]));

var G__47365 = (i__5750__auto___47364 + (1));
i__5750__auto___47364 = G__47365;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq47227){
var G__47228 = cljs.core.first(seq47227);
var seq47227__$1 = cljs.core.next(seq47227);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47228,seq47227__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47366 = arguments.length;
var i__5750__auto___47367 = (0);
while(true){
if((i__5750__auto___47367 < len__5749__auto___47366)){
args__5755__auto__.push((arguments[i__5750__auto___47367]));

var G__47368 = (i__5750__auto___47367 + (1));
i__5750__auto___47367 = G__47368;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq47229){
var G__47230 = cljs.core.first(seq47229);
var seq47229__$1 = cljs.core.next(seq47229);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47230,seq47229__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47369 = arguments.length;
var i__5750__auto___47370 = (0);
while(true){
if((i__5750__auto___47370 < len__5749__auto___47369)){
args__5755__auto__.push((arguments[i__5750__auto___47370]));

var G__47371 = (i__5750__auto___47370 + (1));
i__5750__auto___47370 = G__47371;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq47231){
var G__47232 = cljs.core.first(seq47231);
var seq47231__$1 = cljs.core.next(seq47231);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47232,seq47231__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47372 = arguments.length;
var i__5750__auto___47373 = (0);
while(true){
if((i__5750__auto___47373 < len__5749__auto___47372)){
args__5755__auto__.push((arguments[i__5750__auto___47373]));

var G__47374 = (i__5750__auto___47373 + (1));
i__5750__auto___47373 = G__47374;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__47161__auto__,rest__47162__auto__){
var convert_case__47163__auto__ = (function (p1__47160__47164__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__47160__47164__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47162__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47161__auto__,convert_case__47163__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq47233){
var G__47234 = cljs.core.first(seq47233);
var seq47233__$1 = cljs.core.next(seq47233);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47234,seq47233__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47375 = arguments.length;
var i__5750__auto___47376 = (0);
while(true){
if((i__5750__auto___47376 < len__5749__auto___47375)){
args__5755__auto__.push((arguments[i__5750__auto___47376]));

var G__47377 = (i__5750__auto___47376 + (1));
i__5750__auto___47376 = G__47377;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq47235){
var G__47236 = cljs.core.first(seq47235);
var seq47235__$1 = cljs.core.next(seq47235);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47236,seq47235__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47378 = arguments.length;
var i__5750__auto___47379 = (0);
while(true){
if((i__5750__auto___47379 < len__5749__auto___47378)){
args__5755__auto__.push((arguments[i__5750__auto___47379]));

var G__47380 = (i__5750__auto___47379 + (1));
i__5750__auto___47379 = G__47380;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq47237){
var G__47238 = cljs.core.first(seq47237);
var seq47237__$1 = cljs.core.next(seq47237);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47238,seq47237__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47381 = arguments.length;
var i__5750__auto___47382 = (0);
while(true){
if((i__5750__auto___47382 < len__5749__auto___47381)){
args__5755__auto__.push((arguments[i__5750__auto___47382]));

var G__47383 = (i__5750__auto___47382 + (1));
i__5750__auto___47382 = G__47383;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq47239){
var G__47240 = cljs.core.first(seq47239);
var seq47239__$1 = cljs.core.next(seq47239);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47240,seq47239__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47384 = arguments.length;
var i__5750__auto___47385 = (0);
while(true){
if((i__5750__auto___47385 < len__5749__auto___47384)){
args__5755__auto__.push((arguments[i__5750__auto___47385]));

var G__47386 = (i__5750__auto___47385 + (1));
i__5750__auto___47385 = G__47386;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47161__auto__,rest__47162__auto__){
var convert_case__47163__auto__ = (function (p1__47160__47164__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__47160__47164__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47162__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47161__auto__,convert_case__47163__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq47241){
var G__47242 = cljs.core.first(seq47241);
var seq47241__$1 = cljs.core.next(seq47241);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47242,seq47241__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47387 = arguments.length;
var i__5750__auto___47388 = (0);
while(true){
if((i__5750__auto___47388 < len__5749__auto___47387)){
args__5755__auto__.push((arguments[i__5750__auto___47388]));

var G__47389 = (i__5750__auto___47388 + (1));
i__5750__auto___47388 = G__47389;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq47243){
var G__47244 = cljs.core.first(seq47243);
var seq47243__$1 = cljs.core.next(seq47243);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47244,seq47243__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47390 = arguments.length;
var i__5750__auto___47391 = (0);
while(true){
if((i__5750__auto___47391 < len__5749__auto___47390)){
args__5755__auto__.push((arguments[i__5750__auto___47391]));

var G__47392 = (i__5750__auto___47391 + (1));
i__5750__auto___47391 = G__47392;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq47249){
var G__47250 = cljs.core.first(seq47249);
var seq47249__$1 = cljs.core.next(seq47249);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47250,seq47249__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47395 = arguments.length;
var i__5750__auto___47396 = (0);
while(true){
if((i__5750__auto___47396 < len__5749__auto___47395)){
args__5755__auto__.push((arguments[i__5750__auto___47396]));

var G__47397 = (i__5750__auto___47396 + (1));
i__5750__auto___47396 = G__47397;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq47255){
var G__47256 = cljs.core.first(seq47255);
var seq47255__$1 = cljs.core.next(seq47255);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47256,seq47255__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47398 = arguments.length;
var i__5750__auto___47399 = (0);
while(true){
if((i__5750__auto___47399 < len__5749__auto___47398)){
args__5755__auto__.push((arguments[i__5750__auto___47399]));

var G__47400 = (i__5750__auto___47399 + (1));
i__5750__auto___47399 = G__47400;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47161__auto__,rest__47162__auto__){
var convert_case__47163__auto__ = (function (p1__47160__47164__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__47160__47164__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47162__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47161__auto__,convert_case__47163__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq47262){
var G__47263 = cljs.core.first(seq47262);
var seq47262__$1 = cljs.core.next(seq47262);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47263,seq47262__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47401 = arguments.length;
var i__5750__auto___47402 = (0);
while(true){
if((i__5750__auto___47402 < len__5749__auto___47401)){
args__5755__auto__.push((arguments[i__5750__auto___47402]));

var G__47404 = (i__5750__auto___47402 + (1));
i__5750__auto___47402 = G__47404;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq47267){
var G__47268 = cljs.core.first(seq47267);
var seq47267__$1 = cljs.core.next(seq47267);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47268,seq47267__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47409 = arguments.length;
var i__5750__auto___47410 = (0);
while(true){
if((i__5750__auto___47410 < len__5749__auto___47409)){
args__5755__auto__.push((arguments[i__5750__auto___47410]));

var G__47411 = (i__5750__auto___47410 + (1));
i__5750__auto___47410 = G__47411;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq47276){
var G__47277 = cljs.core.first(seq47276);
var seq47276__$1 = cljs.core.next(seq47276);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47277,seq47276__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47415 = arguments.length;
var i__5750__auto___47416 = (0);
while(true){
if((i__5750__auto___47416 < len__5749__auto___47415)){
args__5755__auto__.push((arguments[i__5750__auto___47416]));

var G__47417 = (i__5750__auto___47416 + (1));
i__5750__auto___47416 = G__47417;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq47285){
var G__47287 = cljs.core.first(seq47285);
var seq47285__$1 = cljs.core.next(seq47285);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47287,seq47285__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47421 = arguments.length;
var i__5750__auto___47422 = (0);
while(true){
if((i__5750__auto___47422 < len__5749__auto___47421)){
args__5755__auto__.push((arguments[i__5750__auto___47422]));

var G__47423 = (i__5750__auto___47422 + (1));
i__5750__auto___47422 = G__47423;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__47161__auto__,rest__47162__auto__){
var convert_case__47163__auto__ = (function (p1__47160__47164__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__47160__47164__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47162__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__47161__auto__,convert_case__47163__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq47299){
var G__47300 = cljs.core.first(seq47299);
var seq47299__$1 = cljs.core.next(seq47299);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47300,seq47299__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47424 = arguments.length;
var i__5750__auto___47425 = (0);
while(true){
if((i__5750__auto___47425 < len__5749__auto___47424)){
args__5755__auto__.push((arguments[i__5750__auto___47425]));

var G__47426 = (i__5750__auto___47425 + (1));
i__5750__auto___47425 = G__47426;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq47306){
var G__47307 = cljs.core.first(seq47306);
var seq47306__$1 = cljs.core.next(seq47306);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47307,seq47306__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47427 = arguments.length;
var i__5750__auto___47428 = (0);
while(true){
if((i__5750__auto___47428 < len__5749__auto___47427)){
args__5755__auto__.push((arguments[i__5750__auto___47428]));

var G__47429 = (i__5750__auto___47428 + (1));
i__5750__auto___47428 = G__47429;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq47308){
var G__47309 = cljs.core.first(seq47308);
var seq47308__$1 = cljs.core.next(seq47308);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47309,seq47308__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___47430 = arguments.length;
var i__5750__auto___47431 = (0);
while(true){
if((i__5750__auto___47431 < len__5749__auto___47430)){
args__5755__auto__.push((arguments[i__5750__auto___47431]));

var G__47432 = (i__5750__auto___47431 + (1));
i__5750__auto___47431 = G__47432;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__47166__auto__,rest__47167__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__47166__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__47167__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq47312){
var G__47313 = cljs.core.first(seq47312);
var seq47312__$1 = cljs.core.next(seq47312);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47313,seq47312__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
