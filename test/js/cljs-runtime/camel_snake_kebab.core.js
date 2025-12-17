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
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq43674){
var G__43675 = cljs.core.first(seq43674);
var seq43674__$1 = cljs.core.next(seq43674);
var G__43676 = cljs.core.first(seq43674__$1);
var seq43674__$2 = cljs.core.next(seq43674__$1);
var G__43677 = cljs.core.first(seq43674__$2);
var seq43674__$3 = cljs.core.next(seq43674__$2);
var G__43678 = cljs.core.first(seq43674__$3);
var seq43674__$4 = cljs.core.next(seq43674__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43675,G__43676,G__43677,G__43678,seq43674__$4);
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
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq43688){
var G__43689 = cljs.core.first(seq43688);
var seq43688__$1 = cljs.core.next(seq43688);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43689,seq43688__$1);
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
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq43700){
var G__43701 = cljs.core.first(seq43700);
var seq43700__$1 = cljs.core.next(seq43700);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43701,seq43700__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
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
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq43709){
var G__43710 = cljs.core.first(seq43709);
var seq43709__$1 = cljs.core.next(seq43709);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43710,seq43709__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43833 = arguments.length;
var i__5750__auto___43834 = (0);
while(true){
if((i__5750__auto___43834 < len__5749__auto___43833)){
args__5755__auto__.push((arguments[i__5750__auto___43834]));

var G__43835 = (i__5750__auto___43834 + (1));
i__5750__auto___43834 = G__43835;
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
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq43721){
var G__43722 = cljs.core.first(seq43721);
var seq43721__$1 = cljs.core.next(seq43721);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43722,seq43721__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43836 = arguments.length;
var i__5750__auto___43837 = (0);
while(true){
if((i__5750__auto___43837 < len__5749__auto___43836)){
args__5755__auto__.push((arguments[i__5750__auto___43837]));

var G__43838 = (i__5750__auto___43837 + (1));
i__5750__auto___43837 = G__43838;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq43729){
var G__43730 = cljs.core.first(seq43729);
var seq43729__$1 = cljs.core.next(seq43729);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43730,seq43729__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43839 = arguments.length;
var i__5750__auto___43840 = (0);
while(true){
if((i__5750__auto___43840 < len__5749__auto___43839)){
args__5755__auto__.push((arguments[i__5750__auto___43840]));

var G__43841 = (i__5750__auto___43840 + (1));
i__5750__auto___43840 = G__43841;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq43733){
var G__43735 = cljs.core.first(seq43733);
var seq43733__$1 = cljs.core.next(seq43733);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43735,seq43733__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43842 = arguments.length;
var i__5750__auto___43843 = (0);
while(true){
if((i__5750__auto___43843 < len__5749__auto___43842)){
args__5755__auto__.push((arguments[i__5750__auto___43843]));

var G__43844 = (i__5750__auto___43843 + (1));
i__5750__auto___43843 = G__43844;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq43741){
var G__43742 = cljs.core.first(seq43741);
var seq43741__$1 = cljs.core.next(seq43741);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43742,seq43741__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43845 = arguments.length;
var i__5750__auto___43846 = (0);
while(true){
if((i__5750__auto___43846 < len__5749__auto___43845)){
args__5755__auto__.push((arguments[i__5750__auto___43846]));

var G__43847 = (i__5750__auto___43846 + (1));
i__5750__auto___43846 = G__43847;
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
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq43751){
var G__43752 = cljs.core.first(seq43751);
var seq43751__$1 = cljs.core.next(seq43751);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43752,seq43751__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43848 = arguments.length;
var i__5750__auto___43849 = (0);
while(true){
if((i__5750__auto___43849 < len__5749__auto___43848)){
args__5755__auto__.push((arguments[i__5750__auto___43849]));

var G__43850 = (i__5750__auto___43849 + (1));
i__5750__auto___43849 = G__43850;
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
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq43757){
var G__43758 = cljs.core.first(seq43757);
var seq43757__$1 = cljs.core.next(seq43757);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43758,seq43757__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43851 = arguments.length;
var i__5750__auto___43852 = (0);
while(true){
if((i__5750__auto___43852 < len__5749__auto___43851)){
args__5755__auto__.push((arguments[i__5750__auto___43852]));

var G__43853 = (i__5750__auto___43852 + (1));
i__5750__auto___43852 = G__43853;
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
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq43759){
var G__43760 = cljs.core.first(seq43759);
var seq43759__$1 = cljs.core.next(seq43759);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43760,seq43759__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43854 = arguments.length;
var i__5750__auto___43855 = (0);
while(true){
if((i__5750__auto___43855 < len__5749__auto___43854)){
args__5755__auto__.push((arguments[i__5750__auto___43855]));

var G__43856 = (i__5750__auto___43855 + (1));
i__5750__auto___43855 = G__43856;
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
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq43761){
var G__43762 = cljs.core.first(seq43761);
var seq43761__$1 = cljs.core.next(seq43761);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43762,seq43761__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43859 = arguments.length;
var i__5750__auto___43860 = (0);
while(true){
if((i__5750__auto___43860 < len__5749__auto___43859)){
args__5755__auto__.push((arguments[i__5750__auto___43860]));

var G__43861 = (i__5750__auto___43860 + (1));
i__5750__auto___43860 = G__43861;
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
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq43767){
var G__43768 = cljs.core.first(seq43767);
var seq43767__$1 = cljs.core.next(seq43767);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43768,seq43767__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43862 = arguments.length;
var i__5750__auto___43863 = (0);
while(true){
if((i__5750__auto___43863 < len__5749__auto___43862)){
args__5755__auto__.push((arguments[i__5750__auto___43863]));

var G__43864 = (i__5750__auto___43863 + (1));
i__5750__auto___43863 = G__43864;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq43771){
var G__43772 = cljs.core.first(seq43771);
var seq43771__$1 = cljs.core.next(seq43771);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43772,seq43771__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43866 = arguments.length;
var i__5750__auto___43867 = (0);
while(true){
if((i__5750__auto___43867 < len__5749__auto___43866)){
args__5755__auto__.push((arguments[i__5750__auto___43867]));

var G__43868 = (i__5750__auto___43867 + (1));
i__5750__auto___43867 = G__43868;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq43774){
var G__43775 = cljs.core.first(seq43774);
var seq43774__$1 = cljs.core.next(seq43774);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43775,seq43774__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43869 = arguments.length;
var i__5750__auto___43870 = (0);
while(true){
if((i__5750__auto___43870 < len__5749__auto___43869)){
args__5755__auto__.push((arguments[i__5750__auto___43870]));

var G__43871 = (i__5750__auto___43870 + (1));
i__5750__auto___43870 = G__43871;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq43779){
var G__43780 = cljs.core.first(seq43779);
var seq43779__$1 = cljs.core.next(seq43779);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43780,seq43779__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43872 = arguments.length;
var i__5750__auto___43873 = (0);
while(true){
if((i__5750__auto___43873 < len__5749__auto___43872)){
args__5755__auto__.push((arguments[i__5750__auto___43873]));

var G__43874 = (i__5750__auto___43873 + (1));
i__5750__auto___43873 = G__43874;
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
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq43781){
var G__43782 = cljs.core.first(seq43781);
var seq43781__$1 = cljs.core.next(seq43781);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43782,seq43781__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43875 = arguments.length;
var i__5750__auto___43876 = (0);
while(true){
if((i__5750__auto___43876 < len__5749__auto___43875)){
args__5755__auto__.push((arguments[i__5750__auto___43876]));

var G__43877 = (i__5750__auto___43876 + (1));
i__5750__auto___43876 = G__43877;
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
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq43783){
var G__43784 = cljs.core.first(seq43783);
var seq43783__$1 = cljs.core.next(seq43783);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43784,seq43783__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43878 = arguments.length;
var i__5750__auto___43879 = (0);
while(true){
if((i__5750__auto___43879 < len__5749__auto___43878)){
args__5755__auto__.push((arguments[i__5750__auto___43879]));

var G__43880 = (i__5750__auto___43879 + (1));
i__5750__auto___43879 = G__43880;
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
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq43788){
var G__43789 = cljs.core.first(seq43788);
var seq43788__$1 = cljs.core.next(seq43788);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43789,seq43788__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43881 = arguments.length;
var i__5750__auto___43882 = (0);
while(true){
if((i__5750__auto___43882 < len__5749__auto___43881)){
args__5755__auto__.push((arguments[i__5750__auto___43882]));

var G__43884 = (i__5750__auto___43882 + (1));
i__5750__auto___43882 = G__43884;
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
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq43790){
var G__43791 = cljs.core.first(seq43790);
var seq43790__$1 = cljs.core.next(seq43790);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43791,seq43790__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43887 = arguments.length;
var i__5750__auto___43888 = (0);
while(true){
if((i__5750__auto___43888 < len__5749__auto___43887)){
args__5755__auto__.push((arguments[i__5750__auto___43888]));

var G__43889 = (i__5750__auto___43888 + (1));
i__5750__auto___43888 = G__43889;
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
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq43794){
var G__43795 = cljs.core.first(seq43794);
var seq43794__$1 = cljs.core.next(seq43794);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43795,seq43794__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
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
var len__5749__auto___43902 = arguments.length;
var i__5750__auto___43903 = (0);
while(true){
if((i__5750__auto___43903 < len__5749__auto___43902)){
args__5755__auto__.push((arguments[i__5750__auto___43903]));

var G__43904 = (i__5750__auto___43903 + (1));
i__5750__auto___43903 = G__43904;
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
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43638__auto__,rest__43639__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__43638__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43639__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq43807){
var G__43808 = cljs.core.first(seq43807);
var seq43807__$1 = cljs.core.next(seq43807);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43808,seq43807__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43914 = arguments.length;
var i__5750__auto___43915 = (0);
while(true){
if((i__5750__auto___43915 < len__5749__auto___43914)){
args__5755__auto__.push((arguments[i__5750__auto___43915]));

var G__43919 = (i__5750__auto___43915 + (1));
i__5750__auto___43915 = G__43919;
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
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq43809){
var G__43810 = cljs.core.first(seq43809);
var seq43809__$1 = cljs.core.next(seq43809);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43810,seq43809__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
