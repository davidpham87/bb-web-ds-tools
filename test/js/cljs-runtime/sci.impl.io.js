goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__40202 = arguments.length;
switch (G__40202) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__40203 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40204 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40204);

try{var G__40205 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__40205);

return G__40205;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40203);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__40206 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40207 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40207);

try{var G__40208 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__40208);

return G__40208;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40206);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__40209 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40210 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40210);

try{var G__40211 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__40211);

return G__40211;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40209);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40212 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40213 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40213);

try{var G__40214 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__40214);

return G__40214;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40212);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__40215 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__40216 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__40216);

try{var G__40217 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__40217);

return G__40217;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__40215);
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
var _STAR_print_fn_STAR__orig_val__40226 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40227 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40227);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40226);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40405 = arguments.length;
var i__5750__auto___40406 = (0);
while(true){
if((i__5750__auto___40406 < len__5749__auto___40405)){
args__5755__auto__.push((arguments[i__5750__auto___40406]));

var G__40407 = (i__5750__auto___40406 + (1));
i__5750__auto___40406 = G__40407;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40234 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40235 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40236 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40237 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40238 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40239 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40240 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40241 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40242 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40243 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40244 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40245 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40246 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40247 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40248 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40249 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40242);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40243);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40244);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40245);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40246);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40247);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40248);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40249);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40241);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40240);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40239);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40238);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40237);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40236);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40235);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40234);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq40233){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40233));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__40255 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__40256 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40256);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40255);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40417 = arguments.length;
var i__5750__auto___40418 = (0);
while(true){
if((i__5750__auto___40418 < len__5749__auto___40417)){
args__5755__auto__.push((arguments[i__5750__auto___40418]));

var G__40419 = (i__5750__auto___40418 + (1));
i__5750__auto___40418 = G__40419;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40258 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40259 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40260 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40261 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40262 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40263 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40264 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40265 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40266 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40267 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40268 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40269 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40270 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40271 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40265);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40266);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40267);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40268);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40269);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40270);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40271);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40264);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40263);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40262);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40261);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40260);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40259);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40258);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq40257){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40257));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40420 = arguments.length;
var i__5750__auto___40421 = (0);
while(true){
if((i__5750__auto___40421 < len__5749__auto___40420)){
args__5755__auto__.push((arguments[i__5750__auto___40421]));

var G__40422 = (i__5750__auto___40421 + (1));
i__5750__auto___40421 = G__40422;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40274 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40275 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40276 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40277 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40278 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40279 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40280 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40281 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40282 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40283 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40284 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40285 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40286 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40287 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40288 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40289 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40282);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40283);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40284);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40285);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40286);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40287);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40288);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40289);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40281);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40280);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40279);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40278);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40277);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40276);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40275);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40274);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq40272){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40272));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40423 = arguments.length;
var i__5750__auto___40424 = (0);
while(true){
if((i__5750__auto___40424 < len__5749__auto___40423)){
args__5755__auto__.push((arguments[i__5750__auto___40424]));

var G__40425 = (i__5750__auto___40424 + (1));
i__5750__auto___40424 = G__40425;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40294 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40295 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40296 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40297 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40298 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40300 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40301 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40302 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40303 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40304 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40305 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40306 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40307 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40301);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40302);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40303);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40304);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40305);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40306);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40307);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40300);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40299);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40298);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40297);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40296);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40295);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40294);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq40293){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40293));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40426 = arguments.length;
var i__5750__auto___40427 = (0);
while(true){
if((i__5750__auto___40427 < len__5749__auto___40426)){
args__5755__auto__.push((arguments[i__5750__auto___40427]));

var G__40428 = (i__5750__auto___40427 + (1));
i__5750__auto___40427 = G__40428;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40318 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40319 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40320 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40321 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40322 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40323 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40324 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40325 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40326 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40327 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__40328 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40329 = null;
var _STAR_print_newline_STAR__temp_val__40330 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40331 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40325);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40326);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40327);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40328);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40329);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40330);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40331);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40324);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40323);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40322);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40321);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40320);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40319);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40318);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq40311){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40311));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40429 = arguments.length;
var i__5750__auto___40430 = (0);
while(true){
if((i__5750__auto___40430 < len__5749__auto___40429)){
args__5755__auto__.push((arguments[i__5750__auto___40430]));

var G__40431 = (i__5750__auto___40430 + (1));
i__5750__auto___40430 = G__40431;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__40347 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40348 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40349 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40350 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40351 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40352 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40353 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__40354 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40355 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40356 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40357 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40358 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40359 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40360 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40354);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40355);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40356);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40357);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40358);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40359);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40360);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40353);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40352);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40351);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40350);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40349);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40348);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40347);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq40339){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40339));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40448 = arguments.length;
var i__5750__auto___40449 = (0);
while(true){
if((i__5750__auto___40449 < len__5749__auto___40448)){
args__5755__auto__.push((arguments[i__5750__auto___40449]));

var G__40450 = (i__5750__auto___40449 + (1));
i__5750__auto___40449 = G__40450;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__40365 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__40366 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__40367 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__40368 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__40369 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__40370 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__40371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__40372 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__40373 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__40374 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__40375 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__40376 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__40377 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__40378 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__40379 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__40380 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40373);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__40374);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__40375);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__40376);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__40377);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__40378);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40379);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__40380);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__40372);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40371);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__40370);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__40369);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__40368);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__40367);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__40366);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40365);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq40364){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40364));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___40451 = arguments.length;
var i__5750__auto___40452 = (0);
while(true){
if((i__5750__auto___40452 < len__5749__auto___40451)){
args__5755__auto__.push((arguments[i__5750__auto___40452]));

var G__40453 = (i__5750__auto___40452 + (1));
i__5750__auto___40452 = G__40453;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__40381__auto__","s__40381__auto__",-1815034768,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__40382__auto__","x__40382__auto__",-1628232804,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40381__auto__","s__40381__auto__",-1815034768,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__40382__auto__","x__40382__auto__",-1628232804,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__40381__auto__","s__40381__auto__",-1815034768,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq40383){
var G__40384 = cljs.core.first(seq40383);
var seq40383__$1 = cljs.core.next(seq40383);
var G__40385 = cljs.core.first(seq40383__$1);
var seq40383__$2 = cljs.core.next(seq40383__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40384,G__40385,seq40383__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
