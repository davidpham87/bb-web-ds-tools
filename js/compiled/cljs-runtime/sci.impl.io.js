goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__32220 = arguments.length;
switch (G__32220) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__32224 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32225 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32225);

try{var G__32227 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__32227);

return G__32227;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32224);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__32228 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32229 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32229);

try{var G__32230 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__32230);

return G__32230;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32228);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__32232 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32233 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32233);

try{var G__32234 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__32234);

return G__32234;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32232);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__32235 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32236 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32236);

try{var G__32237 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__32237);

return G__32237;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32235);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__32244 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32245 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32245);

try{var G__32246 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__32246);

return G__32246;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32244);
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
var _STAR_print_fn_STAR__orig_val__32267 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__32268 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32268);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32267);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32455 = arguments.length;
var i__5750__auto___32456 = (0);
while(true){
if((i__5750__auto___32456 < len__5749__auto___32455)){
args__5755__auto__.push((arguments[i__5750__auto___32456]));

var G__32457 = (i__5750__auto___32456 + (1));
i__5750__auto___32456 = G__32457;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32276 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32277 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32279 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32280 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32281 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32282 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32284 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32285 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32286 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32287 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32288 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32289 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32290 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32291 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32292 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32285);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32286);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32287);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32288);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32289);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32290);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32291);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32292);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32284);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32283);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32282);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32281);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32280);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32279);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32277);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32276);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq32272){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32272));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__32294 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__32295 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32295);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32294);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32466 = arguments.length;
var i__5750__auto___32467 = (0);
while(true){
if((i__5750__auto___32467 < len__5749__auto___32466)){
args__5755__auto__.push((arguments[i__5750__auto___32467]));

var G__32468 = (i__5750__auto___32467 + (1));
i__5750__auto___32467 = G__32468;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32308 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32309 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32310 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32311 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32312 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32313 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32314 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__32315 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32316 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32317 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32318 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32319 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32320 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32321 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32315);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32316);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32317);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32318);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32319);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32320);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32321);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32314);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32313);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32312);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32311);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32310);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32309);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32308);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq32307){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32307));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32472 = arguments.length;
var i__5750__auto___32473 = (0);
while(true){
if((i__5750__auto___32473 < len__5749__auto___32472)){
args__5755__auto__.push((arguments[i__5750__auto___32473]));

var G__32474 = (i__5750__auto___32473 + (1));
i__5750__auto___32473 = G__32474;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32340 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32341 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32342 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32343 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32344 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32345 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32346 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32347 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32348 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32349 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32350 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32351 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32352 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32353 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32354 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32355 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32348);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32349);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32350);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32351);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32352);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32353);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32354);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32355);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32347);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32346);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32345);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32344);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32343);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32342);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32341);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32340);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq32339){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32339));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32477 = arguments.length;
var i__5750__auto___32478 = (0);
while(true){
if((i__5750__auto___32478 < len__5749__auto___32477)){
args__5755__auto__.push((arguments[i__5750__auto___32478]));

var G__32479 = (i__5750__auto___32478 + (1));
i__5750__auto___32478 = G__32479;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32359 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32360 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32361 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32362 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32363 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32364 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32365 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__32366 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32367 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32368 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32369 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32370 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32371 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32372 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32366);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32367);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32368);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32369);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32370);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32371);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32372);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32365);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32364);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32363);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32362);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32361);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32360);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32359);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq32358){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32358));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32485 = arguments.length;
var i__5750__auto___32486 = (0);
while(true){
if((i__5750__auto___32486 < len__5749__auto___32485)){
args__5755__auto__.push((arguments[i__5750__auto___32486]));

var G__32488 = (i__5750__auto___32486 + (1));
i__5750__auto___32486 = G__32488;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32374 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32375 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32376 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32377 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32378 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32379 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32380 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32381 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32382 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32383 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__32384 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32385 = null;
var _STAR_print_newline_STAR__temp_val__32386 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32387 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32381);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32382);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32383);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32384);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32385);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32386);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32387);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32380);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32379);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32378);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32377);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32376);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32375);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32374);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq32373){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32373));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32492 = arguments.length;
var i__5750__auto___32493 = (0);
while(true){
if((i__5750__auto___32493 < len__5749__auto___32492)){
args__5755__auto__.push((arguments[i__5750__auto___32493]));

var G__32494 = (i__5750__auto___32493 + (1));
i__5750__auto___32493 = G__32494;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32393 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32394 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32395 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32396 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32397 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32398 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32399 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__32400 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32401 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32402 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32403 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32404 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32405 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32406 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32400);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32401);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32402);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32403);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32404);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32405);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32406);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32399);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32398);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32397);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32396);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32395);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32394);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32393);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq32392){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32392));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32497 = arguments.length;
var i__5750__auto___32498 = (0);
while(true){
if((i__5750__auto___32498 < len__5749__auto___32497)){
args__5755__auto__.push((arguments[i__5750__auto___32498]));

var G__32499 = (i__5750__auto___32498 + (1));
i__5750__auto___32498 = G__32499;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32413 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32414 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32415 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32416 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32417 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32418 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32419 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32420 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32421 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32422 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32423 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32424 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32425 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32426 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32427 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32428 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32421);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32422);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32423);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32424);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32425);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32426);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32427);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32428);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32420);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32419);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32418);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32417);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32416);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32415);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32414);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32413);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq32408){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32408));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32504 = arguments.length;
var i__5750__auto___32505 = (0);
while(true){
if((i__5750__auto___32505 < len__5749__auto___32504)){
args__5755__auto__.push((arguments[i__5750__auto___32505]));

var G__32506 = (i__5750__auto___32505 + (1));
i__5750__auto___32505 = G__32506;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__32440__auto__","s__32440__auto__",-1062370841,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__32441__auto__","x__32441__auto__",-506199689,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32440__auto__","s__32440__auto__",-1062370841,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32441__auto__","x__32441__auto__",-506199689,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32440__auto__","s__32440__auto__",-1062370841,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq32442){
var G__32443 = cljs.core.first(seq32442);
var seq32442__$1 = cljs.core.next(seq32442);
var G__32444 = cljs.core.first(seq32442__$1);
var seq32442__$2 = cljs.core.next(seq32442__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32443,G__32444,seq32442__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
