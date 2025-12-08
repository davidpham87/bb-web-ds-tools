goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__40516 = arguments.length;
switch (G__40516) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__40518 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40519 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40519);

try{var G__40521 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__40521);

return G__40521;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40518);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__40522 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40523 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40523);

try{var G__40524 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__40524);

return G__40524;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40522);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__40525 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40526 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40526);

try{var G__40533 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__40533);

return G__40533;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40525);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40540 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40541 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40541);

try{var G__40542 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__40542);

return G__40542;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40540);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40544 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40545 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40545);

try{var G__40546 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__40546);

return G__40546;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40544);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__40555 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40556 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40556);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40555);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40763 = arguments.length;
var i__5750__auto___40764 = (0);
while(true){
if((i__5750__auto___40764 < len__5749__auto___40763)){
args__5755__auto__.push((arguments[i__5750__auto___40764]));

var G__40765 = (i__5750__auto___40764 + (1));
i__5750__auto___40764 = G__40765;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40558 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40559 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40560 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40561 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40562 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40563 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40565 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40566 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40567 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40568 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40569 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40570 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40571 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40572 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40573 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40566);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40567);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40568);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40569);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40570);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40571);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40572);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40573);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40565);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40564);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40563);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40562);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40561);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40560);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40559);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40558);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq40557){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40557));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__40575 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40576 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40576);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40575);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40777 = arguments.length;
var i__5750__auto___40778 = (0);
while(true){
if((i__5750__auto___40778 < len__5749__auto___40777)){
args__5755__auto__.push((arguments[i__5750__auto___40778]));

var G__40779 = (i__5750__auto___40778 + (1));
i__5750__auto___40778 = G__40779;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40596 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40597 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40598 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40599 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40600 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40601 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40602 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40604 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40605 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40606 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40607 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40608 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40609 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40610 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40604);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40605);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40606);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40607);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40608);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40609);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40610);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40602);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40601);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40600);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40599);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40598);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40597);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40596);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq40594){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40594));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40780 = arguments.length;
var i__5750__auto___40781 = (0);
while(true){
if((i__5750__auto___40781 < len__5749__auto___40780)){
args__5755__auto__.push((arguments[i__5750__auto___40781]));

var G__40782 = (i__5750__auto___40781 + (1));
i__5750__auto___40781 = G__40782;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40617 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40618 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40619 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40620 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40621 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40623 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40624 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40625 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40626 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40627 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40628 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40629 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40630 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40631 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40624);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40625);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40626);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40627);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40628);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40629);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40630);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40631);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40622);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40621);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40620);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40619);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40618);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40617);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40616);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq40612){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40612));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40792 = arguments.length;
var i__5750__auto___40793 = (0);
while(true){
if((i__5750__auto___40793 < len__5749__auto___40792)){
args__5755__auto__.push((arguments[i__5750__auto___40793]));

var G__40794 = (i__5750__auto___40793 + (1));
i__5750__auto___40793 = G__40794;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40635 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40636 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40637 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40638 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40639 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40640 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40641 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40642 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40643 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40644 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40645 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40646 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40647 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40648 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40642);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40643);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40644);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40645);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40646);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40647);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40648);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40641);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40640);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40639);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40638);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40637);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40636);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40635);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq40633){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40633));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40800 = arguments.length;
var i__5750__auto___40801 = (0);
while(true){
if((i__5750__auto___40801 < len__5749__auto___40800)){
args__5755__auto__.push((arguments[i__5750__auto___40801]));

var G__40802 = (i__5750__auto___40801 + (1));
i__5750__auto___40801 = G__40802;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40667 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40668 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40669 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40670 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40671 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40672 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40673 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40674 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40675 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40676 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__40677 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40678 = null;
var _STAR_print_newline_STAR__temp_val__40679 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40680 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40674);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40675);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40676);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40677);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40679);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40680);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40673);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40672);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40671);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40670);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40669);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40668);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40667);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq40650){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40650));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40804 = arguments.length;
var i__5750__auto___40805 = (0);
while(true){
if((i__5750__auto___40805 < len__5749__auto___40804)){
args__5755__auto__.push((arguments[i__5750__auto___40805]));

var G__40806 = (i__5750__auto___40805 + (1));
i__5750__auto___40805 = G__40806;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40682 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40683 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40684 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40685 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40686 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40688 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40689 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40690 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40691 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40692 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40693 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40694 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40695 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40689);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40690);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40691);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40692);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40693);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40694);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40695);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40688);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40687);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40686);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40685);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40684);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40683);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40682);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq40681){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40681));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40817 = arguments.length;
var i__5750__auto___40818 = (0);
while(true){
if((i__5750__auto___40818 < len__5749__auto___40817)){
args__5755__auto__.push((arguments[i__5750__auto___40818]));

var G__40819 = (i__5750__auto___40818 + (1));
i__5750__auto___40818 = G__40819;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40702 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40703 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40704 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40705 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40706 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40707 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40708 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40709 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40710 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40711 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40712 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40713 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40714 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40715 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40716 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40717 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40710);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40711);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40712);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40713);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40714);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40715);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40716);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40717);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40709);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40708);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40707);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40706);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40705);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40704);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40703);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40702);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq40700){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40700));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40826 = arguments.length;
var i__5750__auto___40827 = (0);
while(true){
if((i__5750__auto___40827 < len__5749__auto___40826)){
args__5755__auto__.push((arguments[i__5750__auto___40827]));

var G__40828 = (i__5750__auto___40827 + (1));
i__5750__auto___40827 = G__40828;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__40721__auto__","s__40721__auto__",110277064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__40722__auto__","x__40722__auto__",1638434427,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40721__auto__","s__40721__auto__",110277064,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__40722__auto__","x__40722__auto__",1638434427,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40721__auto__","s__40721__auto__",110277064,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq40723){
var G__40724 = cljs.core.first(seq40723);
var seq40723__$1 = cljs.core.next(seq40723);
var G__40725 = cljs.core.first(seq40723__$1);
var seq40723__$2 = cljs.core.next(seq40723__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40724,G__40725,seq40723__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
