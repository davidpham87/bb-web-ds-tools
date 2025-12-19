goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43812 = arguments.length;
var i__5750__auto___43813 = (0);
while(true){
if((i__5750__auto___43813 < len__5749__auto___43812)){
args__5755__auto__.push((arguments[i__5750__auto___43813]));

var G__43814 = (i__5750__auto___43813 + (1));
i__5750__auto___43813 = G__43814;
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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq43668){
var G__43669 = cljs.core.first(seq43668);
var seq43668__$1 = cljs.core.next(seq43668);
var G__43670 = cljs.core.first(seq43668__$1);
var seq43668__$2 = cljs.core.next(seq43668__$1);
var G__43671 = cljs.core.first(seq43668__$2);
var seq43668__$3 = cljs.core.next(seq43668__$2);
var G__43672 = cljs.core.first(seq43668__$3);
var seq43668__$4 = cljs.core.next(seq43668__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43669,G__43670,G__43671,G__43672,seq43668__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43815 = arguments.length;
var i__5750__auto___43816 = (0);
while(true){
if((i__5750__auto___43816 < len__5749__auto___43815)){
args__5755__auto__.push((arguments[i__5750__auto___43816]));

var G__43817 = (i__5750__auto___43816 + (1));
i__5750__auto___43816 = G__43817;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__43633__auto__,rest__43634__auto__){
var convert_case__43635__auto__ = (function (p1__43632__43636__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__43632__43636__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43634__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43633__auto__,convert_case__43635__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq43680){
var G__43681 = cljs.core.first(seq43680);
var seq43680__$1 = cljs.core.next(seq43680);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43681,seq43680__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43818 = arguments.length;
var i__5750__auto___43819 = (0);
while(true){
if((i__5750__auto___43819 < len__5749__auto___43818)){
args__5755__auto__.push((arguments[i__5750__auto___43819]));

var G__43820 = (i__5750__auto___43819 + (1));
i__5750__auto___43819 = G__43820;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq43683){
var G__43684 = cljs.core.first(seq43683);
var seq43683__$1 = cljs.core.next(seq43683);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43684,seq43683__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43821 = arguments.length;
var i__5750__auto___43822 = (0);
while(true){
if((i__5750__auto___43822 < len__5749__auto___43821)){
args__5755__auto__.push((arguments[i__5750__auto___43822]));

var G__43823 = (i__5750__auto___43822 + (1));
i__5750__auto___43822 = G__43823;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq43693){
var G__43694 = cljs.core.first(seq43693);
var seq43693__$1 = cljs.core.next(seq43693);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43694,seq43693__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43824 = arguments.length;
var i__5750__auto___43825 = (0);
while(true){
if((i__5750__auto___43825 < len__5749__auto___43824)){
args__5755__auto__.push((arguments[i__5750__auto___43825]));

var G__43826 = (i__5750__auto___43825 + (1));
i__5750__auto___43825 = G__43826;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq43695){
var G__43696 = cljs.core.first(seq43695);
var seq43695__$1 = cljs.core.next(seq43695);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43696,seq43695__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43829 = arguments.length;
var i__5750__auto___43830 = (0);
while(true){
if((i__5750__auto___43830 < len__5749__auto___43829)){
args__5755__auto__.push((arguments[i__5750__auto___43830]));

var G__43831 = (i__5750__auto___43830 + (1));
i__5750__auto___43830 = G__43831;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43633__auto__,rest__43634__auto__){
var convert_case__43635__auto__ = (function (p1__43632__43636__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__43632__43636__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43634__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43633__auto__,convert_case__43635__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq43702){
var G__43703 = cljs.core.first(seq43702);
var seq43702__$1 = cljs.core.next(seq43702);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43703,seq43702__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43832 = arguments.length;
var i__5750__auto___43833 = (0);
while(true){
if((i__5750__auto___43833 < len__5749__auto___43832)){
args__5755__auto__.push((arguments[i__5750__auto___43833]));

var G__43834 = (i__5750__auto___43833 + (1));
i__5750__auto___43833 = G__43834;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq43706){
var G__43707 = cljs.core.first(seq43706);
var seq43706__$1 = cljs.core.next(seq43706);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43707,seq43706__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43844 = arguments.length;
var i__5750__auto___43845 = (0);
while(true){
if((i__5750__auto___43845 < len__5749__auto___43844)){
args__5755__auto__.push((arguments[i__5750__auto___43845]));

var G__43846 = (i__5750__auto___43845 + (1));
i__5750__auto___43845 = G__43846;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq43714){
var G__43715 = cljs.core.first(seq43714);
var seq43714__$1 = cljs.core.next(seq43714);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43715,seq43714__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43847 = arguments.length;
var i__5750__auto___43848 = (0);
while(true){
if((i__5750__auto___43848 < len__5749__auto___43847)){
args__5755__auto__.push((arguments[i__5750__auto___43848]));

var G__43849 = (i__5750__auto___43848 + (1));
i__5750__auto___43848 = G__43849;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq43716){
var G__43717 = cljs.core.first(seq43716);
var seq43716__$1 = cljs.core.next(seq43716);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43717,seq43716__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43850 = arguments.length;
var i__5750__auto___43851 = (0);
while(true){
if((i__5750__auto___43851 < len__5749__auto___43850)){
args__5755__auto__.push((arguments[i__5750__auto___43851]));

var G__43852 = (i__5750__auto___43851 + (1));
i__5750__auto___43851 = G__43852;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__43633__auto__,rest__43634__auto__){
var convert_case__43635__auto__ = (function (p1__43632__43636__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__43632__43636__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43634__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43633__auto__,convert_case__43635__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq43723){
var G__43724 = cljs.core.first(seq43723);
var seq43723__$1 = cljs.core.next(seq43723);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43724,seq43723__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43853 = arguments.length;
var i__5750__auto___43854 = (0);
while(true){
if((i__5750__auto___43854 < len__5749__auto___43853)){
args__5755__auto__.push((arguments[i__5750__auto___43854]));

var G__43855 = (i__5750__auto___43854 + (1));
i__5750__auto___43854 = G__43855;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq43731){
var G__43732 = cljs.core.first(seq43731);
var seq43731__$1 = cljs.core.next(seq43731);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43732,seq43731__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43860 = arguments.length;
var i__5750__auto___43861 = (0);
while(true){
if((i__5750__auto___43861 < len__5749__auto___43860)){
args__5755__auto__.push((arguments[i__5750__auto___43861]));

var G__43862 = (i__5750__auto___43861 + (1));
i__5750__auto___43861 = G__43862;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq43733){
var G__43734 = cljs.core.first(seq43733);
var seq43733__$1 = cljs.core.next(seq43733);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43734,seq43733__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43863 = arguments.length;
var i__5750__auto___43865 = (0);
while(true){
if((i__5750__auto___43865 < len__5749__auto___43863)){
args__5755__auto__.push((arguments[i__5750__auto___43865]));

var G__43866 = (i__5750__auto___43865 + (1));
i__5750__auto___43865 = G__43866;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq43740){
var G__43741 = cljs.core.first(seq43740);
var seq43740__$1 = cljs.core.next(seq43740);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43741,seq43740__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43868 = arguments.length;
var i__5750__auto___43869 = (0);
while(true){
if((i__5750__auto___43869 < len__5749__auto___43868)){
args__5755__auto__.push((arguments[i__5750__auto___43869]));

var G__43870 = (i__5750__auto___43869 + (1));
i__5750__auto___43869 = G__43870;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__43633__auto__,rest__43634__auto__){
var convert_case__43635__auto__ = (function (p1__43632__43636__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__43632__43636__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43634__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43633__auto__,convert_case__43635__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq43747){
var G__43748 = cljs.core.first(seq43747);
var seq43747__$1 = cljs.core.next(seq43747);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43748,seq43747__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43871 = arguments.length;
var i__5750__auto___43872 = (0);
while(true){
if((i__5750__auto___43872 < len__5749__auto___43871)){
args__5755__auto__.push((arguments[i__5750__auto___43872]));

var G__43873 = (i__5750__auto___43872 + (1));
i__5750__auto___43872 = G__43873;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq43754){
var G__43755 = cljs.core.first(seq43754);
var seq43754__$1 = cljs.core.next(seq43754);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43755,seq43754__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43877 = arguments.length;
var i__5750__auto___43878 = (0);
while(true){
if((i__5750__auto___43878 < len__5749__auto___43877)){
args__5755__auto__.push((arguments[i__5750__auto___43878]));

var G__43879 = (i__5750__auto___43878 + (1));
i__5750__auto___43878 = G__43879;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq43758){
var G__43759 = cljs.core.first(seq43758);
var seq43758__$1 = cljs.core.next(seq43758);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43759,seq43758__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43880 = arguments.length;
var i__5750__auto___43881 = (0);
while(true){
if((i__5750__auto___43881 < len__5749__auto___43880)){
args__5755__auto__.push((arguments[i__5750__auto___43881]));

var G__43882 = (i__5750__auto___43881 + (1));
i__5750__auto___43881 = G__43882;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq43764){
var G__43765 = cljs.core.first(seq43764);
var seq43764__$1 = cljs.core.next(seq43764);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43765,seq43764__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43883 = arguments.length;
var i__5750__auto___43884 = (0);
while(true){
if((i__5750__auto___43884 < len__5749__auto___43883)){
args__5755__auto__.push((arguments[i__5750__auto___43884]));

var G__43885 = (i__5750__auto___43884 + (1));
i__5750__auto___43884 = G__43885;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43633__auto__,rest__43634__auto__){
var convert_case__43635__auto__ = (function (p1__43632__43636__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__43632__43636__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43634__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43633__auto__,convert_case__43635__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq43779){
var G__43780 = cljs.core.first(seq43779);
var seq43779__$1 = cljs.core.next(seq43779);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43780,seq43779__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43890 = arguments.length;
var i__5750__auto___43891 = (0);
while(true){
if((i__5750__auto___43891 < len__5749__auto___43890)){
args__5755__auto__.push((arguments[i__5750__auto___43891]));

var G__43892 = (i__5750__auto___43891 + (1));
i__5750__auto___43891 = G__43892;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq43783){
var G__43784 = cljs.core.first(seq43783);
var seq43783__$1 = cljs.core.next(seq43783);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43784,seq43783__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43893 = arguments.length;
var i__5750__auto___43894 = (0);
while(true){
if((i__5750__auto___43894 < len__5749__auto___43893)){
args__5755__auto__.push((arguments[i__5750__auto___43894]));

var G__43895 = (i__5750__auto___43894 + (1));
i__5750__auto___43894 = G__43895;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq43787){
var G__43788 = cljs.core.first(seq43787);
var seq43787__$1 = cljs.core.next(seq43787);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43788,seq43787__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43896 = arguments.length;
var i__5750__auto___43897 = (0);
while(true){
if((i__5750__auto___43897 < len__5749__auto___43896)){
args__5755__auto__.push((arguments[i__5750__auto___43897]));

var G__43898 = (i__5750__auto___43897 + (1));
i__5750__auto___43897 = G__43898;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq43792){
var G__43793 = cljs.core.first(seq43792);
var seq43792__$1 = cljs.core.next(seq43792);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43793,seq43792__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43899 = arguments.length;
var i__5750__auto___43900 = (0);
while(true){
if((i__5750__auto___43900 < len__5749__auto___43899)){
args__5755__auto__.push((arguments[i__5750__auto___43900]));

var G__43901 = (i__5750__auto___43900 + (1));
i__5750__auto___43900 = G__43901;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43633__auto__,rest__43634__auto__){
var convert_case__43635__auto__ = (function (p1__43632__43636__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__43632__43636__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43634__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43633__auto__,convert_case__43635__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq43795){
var G__43796 = cljs.core.first(seq43795);
var seq43795__$1 = cljs.core.next(seq43795);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43796,seq43795__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43905 = arguments.length;
var i__5750__auto___43906 = (0);
while(true){
if((i__5750__auto___43906 < len__5749__auto___43905)){
args__5755__auto__.push((arguments[i__5750__auto___43906]));

var G__43907 = (i__5750__auto___43906 + (1));
i__5750__auto___43906 = G__43907;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq43797){
var G__43798 = cljs.core.first(seq43797);
var seq43797__$1 = cljs.core.next(seq43797);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43798,seq43797__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43908 = arguments.length;
var i__5750__auto___43909 = (0);
while(true){
if((i__5750__auto___43909 < len__5749__auto___43908)){
args__5755__auto__.push((arguments[i__5750__auto___43909]));

var G__43910 = (i__5750__auto___43909 + (1));
i__5750__auto___43909 = G__43910;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq43799){
var G__43800 = cljs.core.first(seq43799);
var seq43799__$1 = cljs.core.next(seq43799);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43800,seq43799__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43911 = arguments.length;
var i__5750__auto___43912 = (0);
while(true){
if((i__5750__auto___43912 < len__5749__auto___43911)){
args__5755__auto__.push((arguments[i__5750__auto___43912]));

var G__43913 = (i__5750__auto___43912 + (1));
i__5750__auto___43912 = G__43913;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq43801){
var G__43802 = cljs.core.first(seq43801);
var seq43801__$1 = cljs.core.next(seq43801);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43802,seq43801__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43914 = arguments.length;
var i__5750__auto___43915 = (0);
while(true){
if((i__5750__auto___43915 < len__5749__auto___43914)){
args__5755__auto__.push((arguments[i__5750__auto___43915]));

var G__43916 = (i__5750__auto___43915 + (1));
i__5750__auto___43915 = G__43916;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43633__auto__,rest__43634__auto__){
var convert_case__43635__auto__ = (function (p1__43632__43636__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__43632__43636__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43634__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43633__auto__,convert_case__43635__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq43803){
var G__43804 = cljs.core.first(seq43803);
var seq43803__$1 = cljs.core.next(seq43803);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43804,seq43803__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43918 = arguments.length;
var i__5750__auto___43919 = (0);
while(true){
if((i__5750__auto___43919 < len__5749__auto___43918)){
args__5755__auto__.push((arguments[i__5750__auto___43919]));

var G__43920 = (i__5750__auto___43919 + (1));
i__5750__auto___43919 = G__43920;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq43805){
var G__43806 = cljs.core.first(seq43805);
var seq43805__$1 = cljs.core.next(seq43805);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43806,seq43805__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43921 = arguments.length;
var i__5750__auto___43922 = (0);
while(true){
if((i__5750__auto___43922 < len__5749__auto___43921)){
args__5755__auto__.push((arguments[i__5750__auto___43922]));

var G__43923 = (i__5750__auto___43922 + (1));
i__5750__auto___43922 = G__43923;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq43808){
var G__43809 = cljs.core.first(seq43808);
var seq43808__$1 = cljs.core.next(seq43808);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43809,seq43808__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43924 = arguments.length;
var i__5750__auto___43925 = (0);
while(true){
if((i__5750__auto___43925 < len__5749__auto___43924)){
args__5755__auto__.push((arguments[i__5750__auto___43925]));

var G__43926 = (i__5750__auto___43925 + (1));
i__5750__auto___43925 = G__43926;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq43810){
var G__43811 = cljs.core.first(seq43810);
var seq43810__$1 = cljs.core.next(seq43810);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43811,seq43810__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
