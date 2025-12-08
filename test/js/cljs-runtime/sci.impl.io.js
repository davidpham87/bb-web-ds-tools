goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__46210 = arguments.length;
switch (G__46210) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__46213 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46214 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46214);

try{var G__46215 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__46215);

return G__46215;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46213);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__46216 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46217 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46217);

try{var G__46218 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__46218);

return G__46218;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46216);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__46219 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46220 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46220);

try{var G__46221 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__46221);

return G__46221;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46219);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__46222 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46223 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46223);

try{var G__46224 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__46224);

return G__46224;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46222);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__46225 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46226 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46226);

try{var G__46227 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__46227);

return G__46227;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46225);
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
var _STAR_print_fn_STAR__orig_val__46228 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__46229 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46229);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46228);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46365 = arguments.length;
var i__5750__auto___46366 = (0);
while(true){
if((i__5750__auto___46366 < len__5749__auto___46365)){
args__5755__auto__.push((arguments[i__5750__auto___46366]));

var G__46367 = (i__5750__auto___46366 + (1));
i__5750__auto___46366 = G__46367;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46232 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46233 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46234 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46235 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46236 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46237 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46238 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46239 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46240 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46241 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46242 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46243 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46244 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46245 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46246 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46239);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46240);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46241);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46242);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46243);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46244);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46245);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46246);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46238);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46237);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46236);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46235);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46234);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46233);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46232);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46231);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq46230){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46230));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__46247 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__46248 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46248);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46247);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46368 = arguments.length;
var i__5750__auto___46369 = (0);
while(true){
if((i__5750__auto___46369 < len__5749__auto___46368)){
args__5755__auto__.push((arguments[i__5750__auto___46369]));

var G__46370 = (i__5750__auto___46369 + (1));
i__5750__auto___46369 = G__46370;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__46251 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46252 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46253 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46254 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46255 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46256 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46257 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__46258 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46259 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46260 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46261 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46262 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46263 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46264 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46258);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46259);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46260);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46261);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46262);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46263);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46264);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46257);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46256);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46255);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46254);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46253);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46252);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46251);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq46249){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46249));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46371 = arguments.length;
var i__5750__auto___46372 = (0);
while(true){
if((i__5750__auto___46372 < len__5749__auto___46371)){
args__5755__auto__.push((arguments[i__5750__auto___46372]));

var G__46373 = (i__5750__auto___46372 + (1));
i__5750__auto___46372 = G__46373;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46269 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46270 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46271 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46272 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46273 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46274 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46275 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46276 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46277 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46278 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46279 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46280 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46281 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46282 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46283 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46284 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46277);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46278);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46279);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46280);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46281);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46282);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46283);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46284);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46276);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46275);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46274);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46273);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46272);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46271);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46270);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46269);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq46268){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46268));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46374 = arguments.length;
var i__5750__auto___46375 = (0);
while(true){
if((i__5750__auto___46375 < len__5749__auto___46374)){
args__5755__auto__.push((arguments[i__5750__auto___46375]));

var G__46376 = (i__5750__auto___46375 + (1));
i__5750__auto___46375 = G__46376;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__46286 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46287 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46288 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46289 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46290 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46291 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46292 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__46293 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46294 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46295 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46296 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46297 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46298 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46299 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46293);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46294);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46295);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46296);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46297);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46298);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46299);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46292);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46291);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46290);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46289);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46288);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46287);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46286);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq46285){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46285));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46381 = arguments.length;
var i__5750__auto___46382 = (0);
while(true){
if((i__5750__auto___46382 < len__5749__auto___46381)){
args__5755__auto__.push((arguments[i__5750__auto___46382]));

var G__46383 = (i__5750__auto___46382 + (1));
i__5750__auto___46382 = G__46383;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46301 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46302 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46303 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46304 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46305 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46306 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46307 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46308 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46309 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46310 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__46311 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46312 = null;
var _STAR_print_newline_STAR__temp_val__46313 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46314 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46308);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46309);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46310);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46311);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46312);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46313);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46314);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46307);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46306);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46305);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46304);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46303);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46302);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46301);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq46300){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46300));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46384 = arguments.length;
var i__5750__auto___46385 = (0);
while(true){
if((i__5750__auto___46385 < len__5749__auto___46384)){
args__5755__auto__.push((arguments[i__5750__auto___46385]));

var G__46386 = (i__5750__auto___46385 + (1));
i__5750__auto___46385 = G__46386;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__46316 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46317 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46318 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46319 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46320 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46321 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46322 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__46323 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46324 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46325 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46326 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46327 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46328 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46329 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46323);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46324);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46325);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46326);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46327);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46328);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46329);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46322);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46321);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46320);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46319);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46318);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46317);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46316);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq46315){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46315));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46387 = arguments.length;
var i__5750__auto___46388 = (0);
while(true){
if((i__5750__auto___46388 < len__5749__auto___46387)){
args__5755__auto__.push((arguments[i__5750__auto___46388]));

var G__46389 = (i__5750__auto___46388 + (1));
i__5750__auto___46388 = G__46389;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46331 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46332 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46333 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46334 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46335 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46336 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46337 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46338 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46339 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46340 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46341 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46342 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46343 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46344 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46345 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46346 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46339);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46340);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46341);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46342);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46343);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46345);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46346);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46338);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46337);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46336);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46335);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46334);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46333);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46332);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46331);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq46330){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46330));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46391 = arguments.length;
var i__5750__auto___46392 = (0);
while(true){
if((i__5750__auto___46392 < len__5749__auto___46391)){
args__5755__auto__.push((arguments[i__5750__auto___46392]));

var G__46393 = (i__5750__auto___46392 + (1));
i__5750__auto___46392 = G__46393;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__46347__auto__","s__46347__auto__",-1081437830,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__46348__auto__","x__46348__auto__",-533825644,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__46347__auto__","s__46347__auto__",-1081437830,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__46348__auto__","x__46348__auto__",-533825644,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__46347__auto__","s__46347__auto__",-1081437830,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq46349){
var G__46350 = cljs.core.first(seq46349);
var seq46349__$1 = cljs.core.next(seq46349);
var G__46351 = cljs.core.first(seq46349__$1);
var seq46349__$2 = cljs.core.next(seq46349__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46350,G__46351,seq46349__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
