goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__40224 = arguments.length;
switch (G__40224) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__40225 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40226 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40226);

try{var G__40227 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__40227);

return G__40227;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40225);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__40228 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40229 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40229);

try{var G__40230 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__40230);

return G__40230;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40228);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__40235 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40236 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40236);

try{var G__40237 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__40237);

return G__40237;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40235);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40238 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40239 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40239);

try{var G__40240 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__40240);

return G__40240;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40238);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40241 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40242 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40242);

try{var G__40244 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__40244);

return G__40244;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40241);
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
var _STAR_print_fn_STAR__orig_val__40266 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40267 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40267);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40266);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40463 = arguments.length;
var i__5750__auto___40464 = (0);
while(true){
if((i__5750__auto___40464 < len__5749__auto___40463)){
args__5755__auto__.push((arguments[i__5750__auto___40464]));

var G__40468 = (i__5750__auto___40464 + (1));
i__5750__auto___40464 = G__40468;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40275 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40276 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40277 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40278 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40279 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40280 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40281 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40282 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40283 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40284 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40285 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40286 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40287 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40288 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40289 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40290 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40283);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40284);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40285);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40286);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40287);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40288);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40289);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40290);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40282);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40281);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40280);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40279);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40278);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40277);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40276);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40275);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq40268){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40268));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__40291 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40292 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40292);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40291);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40476 = arguments.length;
var i__5750__auto___40477 = (0);
while(true){
if((i__5750__auto___40477 < len__5749__auto___40476)){
args__5755__auto__.push((arguments[i__5750__auto___40477]));

var G__40478 = (i__5750__auto___40477 + (1));
i__5750__auto___40477 = G__40478;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40297 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40298 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40299 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40300 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40301 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40302 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40303 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40304 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40305 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40306 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40307 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40308 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40309 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40310 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40304);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40305);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40306);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40307);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40308);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40309);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40310);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40303);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40302);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40301);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40300);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40299);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40298);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40297);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq40293){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40293));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40481 = arguments.length;
var i__5750__auto___40482 = (0);
while(true){
if((i__5750__auto___40482 < len__5749__auto___40481)){
args__5755__auto__.push((arguments[i__5750__auto___40482]));

var G__40483 = (i__5750__auto___40482 + (1));
i__5750__auto___40482 = G__40483;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40314 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40315 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40316 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40317 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40318 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40319 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40320 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40321 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40322 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40323 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40324 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40325 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40326 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40327 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40328 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40329 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40322);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40323);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40324);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40325);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40326);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40327);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40328);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40329);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40321);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40320);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40319);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40318);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40317);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40316);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40315);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40314);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq40313){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40313));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40490 = arguments.length;
var i__5750__auto___40491 = (0);
while(true){
if((i__5750__auto___40491 < len__5749__auto___40490)){
args__5755__auto__.push((arguments[i__5750__auto___40491]));

var G__40492 = (i__5750__auto___40491 + (1));
i__5750__auto___40491 = G__40492;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40333 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40334 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40335 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40336 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40337 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40338 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40339 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40340 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40341 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40342 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40343 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40344 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40345 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40346 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40340);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40341);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40342);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40343);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40345);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40346);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40339);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40338);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40337);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40336);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40335);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40334);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40333);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq40332){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40332));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40500 = arguments.length;
var i__5750__auto___40501 = (0);
while(true){
if((i__5750__auto___40501 < len__5749__auto___40500)){
args__5755__auto__.push((arguments[i__5750__auto___40501]));

var G__40502 = (i__5750__auto___40501 + (1));
i__5750__auto___40501 = G__40502;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40351 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40352 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40353 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40354 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40355 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40357 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40358 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40359 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40360 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__40361 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40362 = null;
var _STAR_print_newline_STAR__temp_val__40363 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40364 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40358);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40359);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40360);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40361);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40362);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40363);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40364);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40357);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40356);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40355);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40354);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40353);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40352);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40351);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq40348){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40348));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40503 = arguments.length;
var i__5750__auto___40504 = (0);
while(true){
if((i__5750__auto___40504 < len__5749__auto___40503)){
args__5755__auto__.push((arguments[i__5750__auto___40504]));

var G__40505 = (i__5750__auto___40504 + (1));
i__5750__auto___40504 = G__40505;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40368 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40369 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40370 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40371 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40372 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40373 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40374 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40375 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40376 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40377 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40378 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40379 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40380 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40381 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40375);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40376);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40377);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40378);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40379);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40380);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40381);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40374);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40373);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40372);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40371);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40370);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40369);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40368);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq40366){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40366));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40507 = arguments.length;
var i__5750__auto___40508 = (0);
while(true){
if((i__5750__auto___40508 < len__5749__auto___40507)){
args__5755__auto__.push((arguments[i__5750__auto___40508]));

var G__40509 = (i__5750__auto___40508 + (1));
i__5750__auto___40508 = G__40509;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40399 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40400 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40401 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40402 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40403 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40404 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40405 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40406 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40407 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40408 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40409 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40410 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40411 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40412 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40413 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40414 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40407);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40408);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40409);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40410);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40411);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40412);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40413);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40414);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40406);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40405);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40404);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40403);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40402);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40401);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40400);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40399);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq40389){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40389));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40511 = arguments.length;
var i__5750__auto___40512 = (0);
while(true){
if((i__5750__auto___40512 < len__5749__auto___40511)){
args__5755__auto__.push((arguments[i__5750__auto___40512]));

var G__40513 = (i__5750__auto___40512 + (1));
i__5750__auto___40512 = G__40513;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__40423__auto__","s__40423__auto__",947161541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__40424__auto__","x__40424__auto__",-2113375333,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40423__auto__","s__40423__auto__",947161541,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__40424__auto__","x__40424__auto__",-2113375333,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40423__auto__","s__40423__auto__",947161541,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq40426){
var G__40427 = cljs.core.first(seq40426);
var seq40426__$1 = cljs.core.next(seq40426);
var G__40428 = cljs.core.first(seq40426__$1);
var seq40426__$2 = cljs.core.next(seq40426__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40427,G__40428,seq40426__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
