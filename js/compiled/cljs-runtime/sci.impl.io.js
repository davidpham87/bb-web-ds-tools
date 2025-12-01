goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__35513 = arguments.length;
switch (G__35513) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__35514 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35515 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35515);

try{var G__35516 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__35516);

return G__35516;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35514);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__35517 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35518 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35518);

try{var G__35519 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__35519);

return G__35519;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35517);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__35520 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35521 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35521);

try{var G__35522 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__35522);

return G__35522;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35520);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__35523 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35524 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35524);

try{var G__35525 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__35525);

return G__35525;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35523);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__35526 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__35527 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__35527);

try{var G__35529 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__35529);

return G__35529;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__35526);
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
var _STAR_print_fn_STAR__orig_val__35540 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__35541 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35541);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35540);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35697 = arguments.length;
var i__5750__auto___35698 = (0);
while(true){
if((i__5750__auto___35698 < len__5749__auto___35697)){
args__5755__auto__.push((arguments[i__5750__auto___35698]));

var G__35699 = (i__5750__auto___35698 + (1));
i__5750__auto___35698 = G__35699;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35544 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35545 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35546 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35547 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35548 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35549 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35550 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35551 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35552 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35553 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35554 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35555 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35556 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35557 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35558 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35559 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35552);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35553);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35554);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35555);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35556);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35557);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35558);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35559);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35551);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35550);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35549);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35548);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35547);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35546);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35545);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35544);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq35542){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35542));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__35560 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__35561 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35561);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35560);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35700 = arguments.length;
var i__5750__auto___35701 = (0);
while(true){
if((i__5750__auto___35701 < len__5749__auto___35700)){
args__5755__auto__.push((arguments[i__5750__auto___35701]));

var G__35702 = (i__5750__auto___35701 + (1));
i__5750__auto___35701 = G__35702;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__35564 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35565 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35566 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35567 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35568 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35569 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35570 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__35571 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35572 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35573 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35574 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35575 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35576 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35577 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35571);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35572);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35573);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35574);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35575);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35576);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35577);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35570);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35569);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35568);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35567);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35566);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35565);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35564);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq35562){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35562));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35705 = arguments.length;
var i__5750__auto___35706 = (0);
while(true){
if((i__5750__auto___35706 < len__5749__auto___35705)){
args__5755__auto__.push((arguments[i__5750__auto___35706]));

var G__35707 = (i__5750__auto___35706 + (1));
i__5750__auto___35706 = G__35707;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35579 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35580 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35581 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35582 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35583 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35584 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35585 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35586 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35587 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35588 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35589 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35590 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35591 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35592 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35593 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35594 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35587);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35588);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35589);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35590);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35591);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35592);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35593);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35594);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35586);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35585);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35584);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35583);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35582);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35581);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35580);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35579);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq35578){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35578));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35718 = arguments.length;
var i__5750__auto___35719 = (0);
while(true){
if((i__5750__auto___35719 < len__5749__auto___35718)){
args__5755__auto__.push((arguments[i__5750__auto___35719]));

var G__35720 = (i__5750__auto___35719 + (1));
i__5750__auto___35719 = G__35720;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__35597 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35598 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35599 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35600 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35601 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35603 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__35604 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35605 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35606 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35607 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35608 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35609 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35610 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35604);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35605);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35606);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35607);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35608);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35609);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35610);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35603);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35602);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35601);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35600);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35599);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35598);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35597);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq35596){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35596));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35722 = arguments.length;
var i__5750__auto___35723 = (0);
while(true){
if((i__5750__auto___35723 < len__5749__auto___35722)){
args__5755__auto__.push((arguments[i__5750__auto___35723]));

var G__35727 = (i__5750__auto___35723 + (1));
i__5750__auto___35723 = G__35727;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35617 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35618 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35619 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35620 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35621 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35623 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35624 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35625 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35626 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__35627 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35628 = null;
var _STAR_print_newline_STAR__temp_val__35629 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35630 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35624);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35625);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35626);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35627);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35628);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35629);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35630);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35622);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35621);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35620);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35619);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35618);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35617);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq35611){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35611));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35729 = arguments.length;
var i__5750__auto___35730 = (0);
while(true){
if((i__5750__auto___35730 < len__5749__auto___35729)){
args__5755__auto__.push((arguments[i__5750__auto___35730]));

var G__35731 = (i__5750__auto___35730 + (1));
i__5750__auto___35730 = G__35731;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__35632 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35633 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35634 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35635 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35636 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35637 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35638 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__35639 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35640 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35641 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35642 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35643 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35644 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35645 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35639);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35640);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35641);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35642);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35643);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35644);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35645);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35638);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35637);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35636);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35635);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35634);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35633);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35632);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq35631){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35631));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35732 = arguments.length;
var i__5750__auto___35733 = (0);
while(true){
if((i__5750__auto___35733 < len__5749__auto___35732)){
args__5755__auto__.push((arguments[i__5750__auto___35733]));

var G__35734 = (i__5750__auto___35733 + (1));
i__5750__auto___35733 = G__35734;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__35652 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__35653 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__35654 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__35655 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__35656 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__35657 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__35658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__35659 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__35660 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__35661 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__35662 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__35663 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__35664 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__35665 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__35666 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__35667 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35660);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__35661);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__35662);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__35663);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__35664);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__35665);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35666);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__35667);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__35659);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35658);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__35657);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__35656);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__35655);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__35654);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__35653);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35652);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq35651){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35651));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35735 = arguments.length;
var i__5750__auto___35736 = (0);
while(true){
if((i__5750__auto___35736 < len__5749__auto___35735)){
args__5755__auto__.push((arguments[i__5750__auto___35736]));

var G__35737 = (i__5750__auto___35736 + (1));
i__5750__auto___35736 = G__35737;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__35668__auto__","s__35668__auto__",480511896,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__35673__auto__","x__35673__auto__",228380838,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35668__auto__","s__35668__auto__",480511896,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__35673__auto__","x__35673__auto__",228380838,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__35668__auto__","s__35668__auto__",480511896,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq35674){
var G__35675 = cljs.core.first(seq35674);
var seq35674__$1 = cljs.core.next(seq35674);
var G__35676 = cljs.core.first(seq35674__$1);
var seq35674__$2 = cljs.core.next(seq35674__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35675,G__35676,seq35674__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
