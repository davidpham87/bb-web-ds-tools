goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__40314 = arguments.length;
switch (G__40314) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__40319 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40320 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40320);

try{var G__40321 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__40321);

return G__40321;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40319);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__40324 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40325 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40325);

try{var G__40326 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__40326);

return G__40326;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40324);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__40328 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40329 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40329);

try{var G__40330 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__40330);

return G__40330;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40328);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40332 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40333 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40333);

try{var G__40337 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__40337);

return G__40337;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40332);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40338 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40339 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40339);

try{var G__40340 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__40340);

return G__40340;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40338);
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
var _STAR_print_fn_STAR__orig_val__40372 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40373 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40373);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40372);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40571 = arguments.length;
var i__5750__auto___40572 = (0);
while(true){
if((i__5750__auto___40572 < len__5749__auto___40571)){
args__5755__auto__.push((arguments[i__5750__auto___40572]));

var G__40573 = (i__5750__auto___40572 + (1));
i__5750__auto___40572 = G__40573;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40379 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40380 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40381 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40382 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40383 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40384 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40385 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40386 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40387 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40388 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40389 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40390 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40391 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40392 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40393 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40394 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40387);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40388);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40389);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40390);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40391);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40392);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40393);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40394);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40386);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40385);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40384);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40383);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40382);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40381);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40380);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40379);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq40375){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40375));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__40402 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40403 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40403);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40402);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40577 = arguments.length;
var i__5750__auto___40578 = (0);
while(true){
if((i__5750__auto___40578 < len__5749__auto___40577)){
args__5755__auto__.push((arguments[i__5750__auto___40578]));

var G__40579 = (i__5750__auto___40578 + (1));
i__5750__auto___40578 = G__40579;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40406 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40407 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40408 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40409 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40410 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40411 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40412 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40413 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40414 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40415 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40416 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40417 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40418 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40419 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40413);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40414);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40415);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40416);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40417);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40418);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40419);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40412);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40411);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40410);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40409);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40408);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40407);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40406);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq40404){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40404));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40588 = arguments.length;
var i__5750__auto___40589 = (0);
while(true){
if((i__5750__auto___40589 < len__5749__auto___40588)){
args__5755__auto__.push((arguments[i__5750__auto___40589]));

var G__40590 = (i__5750__auto___40589 + (1));
i__5750__auto___40589 = G__40590;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40431 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40432 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40433 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40434 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40435 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40436 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40437 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40438 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40439 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40440 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40441 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40442 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40443 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40444 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40445 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40446 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40439);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40440);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40441);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40442);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40443);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40444);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40445);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40446);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40438);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40437);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40436);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40435);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40434);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40433);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40432);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40431);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq40423){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40423));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40597 = arguments.length;
var i__5750__auto___40598 = (0);
while(true){
if((i__5750__auto___40598 < len__5749__auto___40597)){
args__5755__auto__.push((arguments[i__5750__auto___40598]));

var G__40601 = (i__5750__auto___40598 + (1));
i__5750__auto___40598 = G__40601;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40458 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40459 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40460 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40461 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40462 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40464 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40465 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40466 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40467 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40468 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40469 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40470 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40471 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40465);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40466);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40467);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40468);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40469);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40470);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40471);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40464);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40463);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40462);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40461);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40460);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40459);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40458);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq40450){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40450));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40604 = arguments.length;
var i__5750__auto___40605 = (0);
while(true){
if((i__5750__auto___40605 < len__5749__auto___40604)){
args__5755__auto__.push((arguments[i__5750__auto___40605]));

var G__40606 = (i__5750__auto___40605 + (1));
i__5750__auto___40605 = G__40606;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40480 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40481 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40482 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40483 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40484 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40485 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40486 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40487 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40488 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40489 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__40490 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40491 = null;
var _STAR_print_newline_STAR__temp_val__40492 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40493 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40487);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40488);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40489);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40490);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40491);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40492);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40493);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40486);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40485);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40484);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40483);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40482);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40481);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40480);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq40478){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40478));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40607 = arguments.length;
var i__5750__auto___40608 = (0);
while(true){
if((i__5750__auto___40608 < len__5749__auto___40607)){
args__5755__auto__.push((arguments[i__5750__auto___40608]));

var G__40609 = (i__5750__auto___40608 + (1));
i__5750__auto___40608 = G__40609;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40503 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40504 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40505 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40506 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40507 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40508 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40509 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40510 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40511 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40512 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40513 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40514 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40515 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40516 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40510);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40511);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40512);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40513);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40514);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40515);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40516);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40509);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40508);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40507);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40506);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40505);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40504);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40503);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq40498){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40498));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40610 = arguments.length;
var i__5750__auto___40611 = (0);
while(true){
if((i__5750__auto___40611 < len__5749__auto___40610)){
args__5755__auto__.push((arguments[i__5750__auto___40611]));

var G__40612 = (i__5750__auto___40611 + (1));
i__5750__auto___40611 = G__40612;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40528 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40529 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40530 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40531 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40532 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40533 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40535 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40536 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40537 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40538 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40539 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40540 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40541 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40542 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40543 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40536);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40537);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40538);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40539);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40540);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40541);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40542);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40543);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40535);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40534);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40533);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40532);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40531);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40530);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40529);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40528);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq40527){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40527));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40613 = arguments.length;
var i__5750__auto___40614 = (0);
while(true){
if((i__5750__auto___40614 < len__5749__auto___40613)){
args__5755__auto__.push((arguments[i__5750__auto___40614]));

var G__40615 = (i__5750__auto___40614 + (1));
i__5750__auto___40614 = G__40615;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__40544__auto__","s__40544__auto__",1038739777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__40545__auto__","x__40545__auto__",751468433,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40544__auto__","s__40544__auto__",1038739777,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__40545__auto__","x__40545__auto__",751468433,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40544__auto__","s__40544__auto__",1038739777,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq40546){
var G__40547 = cljs.core.first(seq40546);
var seq40546__$1 = cljs.core.next(seq40546);
var G__40548 = cljs.core.first(seq40546__$1);
var seq40546__$2 = cljs.core.next(seq40546__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40547,G__40548,seq40546__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
