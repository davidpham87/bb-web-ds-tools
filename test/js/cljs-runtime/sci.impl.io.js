goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__40363 = arguments.length;
switch (G__40363) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__40366 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40367 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40367);

try{var G__40368 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__40368);

return G__40368;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40366);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__40369 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40370 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40370);

try{var G__40371 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__40371);

return G__40371;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40369);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__40372 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40373 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40373);

try{var G__40374 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__40374);

return G__40374;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40372);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40375 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40376 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40376);

try{var G__40377 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__40377);

return G__40377;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40375);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40378 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40379 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40379);

try{var G__40380 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__40380);

return G__40380;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40378);
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
var _STAR_print_fn_STAR__orig_val__40391 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40392 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40392);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40391);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40584 = arguments.length;
var i__5750__auto___40585 = (0);
while(true){
if((i__5750__auto___40585 < len__5749__auto___40584)){
args__5755__auto__.push((arguments[i__5750__auto___40585]));

var G__40586 = (i__5750__auto___40585 + (1));
i__5750__auto___40585 = G__40586;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40398 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40399 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40400 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40401 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40402 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40403 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40404 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40405 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40406 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40407 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40408 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40409 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40410 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40411 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40412 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40413 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40406);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40407);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40408);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40409);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40410);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40411);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40412);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40413);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40405);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40404);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40403);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40402);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40401);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40400);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40399);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40398);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq40397){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40397));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__40420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40421 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40421);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40420);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40587 = arguments.length;
var i__5750__auto___40588 = (0);
while(true){
if((i__5750__auto___40588 < len__5749__auto___40587)){
args__5755__auto__.push((arguments[i__5750__auto___40588]));

var G__40589 = (i__5750__auto___40588 + (1));
i__5750__auto___40588 = G__40589;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40431 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40432 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40433 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40434 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40435 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40436 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40437 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40438 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40439 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40440 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40441 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40442 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40443 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40444 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40438);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40439);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40440);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40441);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40442);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40443);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40444);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40437);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40436);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40435);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40434);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40433);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40432);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40431);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq40422){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40422));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40590 = arguments.length;
var i__5750__auto___40591 = (0);
while(true){
if((i__5750__auto___40591 < len__5749__auto___40590)){
args__5755__auto__.push((arguments[i__5750__auto___40591]));

var G__40592 = (i__5750__auto___40591 + (1));
i__5750__auto___40591 = G__40592;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40446 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40447 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40448 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40449 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40450 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40451 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40452 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40453 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40454 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40455 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40456 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40457 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40458 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40459 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40460 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40461 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40454);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40455);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40456);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40457);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40458);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40459);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40460);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40461);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40453);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40452);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40451);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40450);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40449);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40448);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40447);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40446);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq40445){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40445));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40593 = arguments.length;
var i__5750__auto___40594 = (0);
while(true){
if((i__5750__auto___40594 < len__5749__auto___40593)){
args__5755__auto__.push((arguments[i__5750__auto___40594]));

var G__40595 = (i__5750__auto___40594 + (1));
i__5750__auto___40594 = G__40595;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40473 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40474 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40475 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40476 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40477 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40478 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40479 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40480 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40481 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40482 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40483 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40484 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40485 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40486 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40480);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40481);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40482);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40483);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40484);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40485);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40486);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40479);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40478);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40477);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40476);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40475);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40474);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40473);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq40472){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40472));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40596 = arguments.length;
var i__5750__auto___40597 = (0);
while(true){
if((i__5750__auto___40597 < len__5749__auto___40596)){
args__5755__auto__.push((arguments[i__5750__auto___40597]));

var G__40598 = (i__5750__auto___40597 + (1));
i__5750__auto___40597 = G__40598;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40489 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40490 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40491 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40492 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40493 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40494 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40495 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40496 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40497 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40498 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__40499 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40500 = null;
var _STAR_print_newline_STAR__temp_val__40501 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40502 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40496);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40497);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40498);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40499);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40500);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40501);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40502);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40495);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40494);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40493);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40492);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40491);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40490);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40489);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq40487){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40487));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40599 = arguments.length;
var i__5750__auto___40600 = (0);
while(true){
if((i__5750__auto___40600 < len__5749__auto___40599)){
args__5755__auto__.push((arguments[i__5750__auto___40600]));

var G__40601 = (i__5750__auto___40600 + (1));
i__5750__auto___40600 = G__40601;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40523 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40524 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40525 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40526 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40527 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40528 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40529 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40530 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40531 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40532 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40533 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40534 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40535 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40536 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40530);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40531);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40532);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40533);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40535);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40536);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40529);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40528);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40527);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40526);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40525);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40524);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40523);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq40514){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40514));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40602 = arguments.length;
var i__5750__auto___40603 = (0);
while(true){
if((i__5750__auto___40603 < len__5749__auto___40602)){
args__5755__auto__.push((arguments[i__5750__auto___40603]));

var G__40604 = (i__5750__auto___40603 + (1));
i__5750__auto___40603 = G__40604;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40541 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40542 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40543 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40544 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40545 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40546 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40547 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40548 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40549 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40550 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40551 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40552 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40553 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40554 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40555 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40556 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40549);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40550);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40551);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40552);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40553);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40554);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40555);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40556);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40548);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40547);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40546);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40545);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40544);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40543);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40542);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40541);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq40540){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40540));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40605 = arguments.length;
var i__5750__auto___40606 = (0);
while(true){
if((i__5750__auto___40606 < len__5749__auto___40605)){
args__5755__auto__.push((arguments[i__5750__auto___40606]));

var G__40607 = (i__5750__auto___40606 + (1));
i__5750__auto___40606 = G__40607;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__40565__auto__","s__40565__auto__",1368963387,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__40568__auto__","x__40568__auto__",-629009579,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40565__auto__","s__40565__auto__",1368963387,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__40568__auto__","x__40568__auto__",-629009579,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40565__auto__","s__40565__auto__",1368963387,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq40571){
var G__40572 = cljs.core.first(seq40571);
var seq40571__$1 = cljs.core.next(seq40571);
var G__40573 = cljs.core.first(seq40571__$1);
var seq40571__$2 = cljs.core.next(seq40571__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40572,G__40573,seq40571__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
