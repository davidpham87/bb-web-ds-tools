goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__32192 = arguments.length;
switch (G__32192) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__32193 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32194 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32194);

try{var G__32195 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__32195);

return G__32195;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32193);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__32196 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32197 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32197);

try{var G__32198 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__32198);

return G__32198;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32196);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__32199 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32200 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32200);

try{var G__32201 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__32201);

return G__32201;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32199);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__32202 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32203 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32203);

try{var G__32204 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__32204);

return G__32204;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32202);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__32205 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__32206 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__32206);

try{var G__32207 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__32207);

return G__32207;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__32205);
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
var _STAR_print_fn_STAR__orig_val__32208 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__32209 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32209);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32208);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32361 = arguments.length;
var i__5750__auto___32362 = (0);
while(true){
if((i__5750__auto___32362 < len__5749__auto___32361)){
args__5755__auto__.push((arguments[i__5750__auto___32362]));

var G__32363 = (i__5750__auto___32362 + (1));
i__5750__auto___32362 = G__32363;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32211 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32212 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32213 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32214 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32215 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32216 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32217 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32218 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32219 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32220 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32221 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32222 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32223 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32224 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32225 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32226 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32219);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32220);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32221);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32222);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32223);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32224);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32225);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32226);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32218);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32217);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32216);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32215);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32214);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32213);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32212);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32211);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq32210){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32210));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__32228 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__32229 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32229);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32228);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32364 = arguments.length;
var i__5750__auto___32365 = (0);
while(true){
if((i__5750__auto___32365 < len__5749__auto___32364)){
args__5755__auto__.push((arguments[i__5750__auto___32365]));

var G__32366 = (i__5750__auto___32365 + (1));
i__5750__auto___32365 = G__32366;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32239 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32240 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32241 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32242 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32243 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32244 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32245 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__32246 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32247 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32248 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32249 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32250 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32251 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32252 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32246);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32247);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32248);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32249);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32250);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32251);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32252);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32245);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32244);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32243);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32242);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32241);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32240);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32239);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq32231){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32231));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32367 = arguments.length;
var i__5750__auto___32368 = (0);
while(true){
if((i__5750__auto___32368 < len__5749__auto___32367)){
args__5755__auto__.push((arguments[i__5750__auto___32368]));

var G__32369 = (i__5750__auto___32368 + (1));
i__5750__auto___32368 = G__32369;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32257 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32258 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32259 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32260 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32261 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32262 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32263 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32264 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32265 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32266 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32267 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32268 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32269 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32270 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32271 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32272 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32265);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32266);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32267);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32268);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32269);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32270);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32271);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32272);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32264);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32263);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32262);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32261);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32260);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32259);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32258);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32257);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq32256){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32256));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32371 = arguments.length;
var i__5750__auto___32372 = (0);
while(true){
if((i__5750__auto___32372 < len__5749__auto___32371)){
args__5755__auto__.push((arguments[i__5750__auto___32372]));

var G__32373 = (i__5750__auto___32372 + (1));
i__5750__auto___32372 = G__32373;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__32274 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32275 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32276 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32277 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32278 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32279 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32280 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__32281 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32282 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32283 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32284 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32285 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32286 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32287 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32281);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32282);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32283);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32284);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32285);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32286);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32287);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32280);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32279);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32278);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32277);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32276);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32275);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32274);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq32273){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32273));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32375 = arguments.length;
var i__5750__auto___32376 = (0);
while(true){
if((i__5750__auto___32376 < len__5749__auto___32375)){
args__5755__auto__.push((arguments[i__5750__auto___32376]));

var G__32377 = (i__5750__auto___32376 + (1));
i__5750__auto___32376 = G__32377;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32290 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32291 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32292 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32293 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32294 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32296 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32297 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32298 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32299 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__32300 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32301 = null;
var _STAR_print_newline_STAR__temp_val__32302 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32303 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32297);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32298);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32299);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32300);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32301);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32302);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32303);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32296);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32295);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32294);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32293);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32292);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32291);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32290);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq32288){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32288));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32378 = arguments.length;
var i__5750__auto___32379 = (0);
while(true){
if((i__5750__auto___32379 < len__5749__auto___32378)){
args__5755__auto__.push((arguments[i__5750__auto___32379]));

var G__32380 = (i__5750__auto___32379 + (1));
i__5750__auto___32379 = G__32380;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
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

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32314);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32313);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32312);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32311);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32310);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32309);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32308);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq32307){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32307));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32381 = arguments.length;
var i__5750__auto___32382 = (0);
while(true){
if((i__5750__auto___32382 < len__5749__auto___32381)){
args__5755__auto__.push((arguments[i__5750__auto___32382]));

var G__32383 = (i__5750__auto___32382 + (1));
i__5750__auto___32382 = G__32383;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__32324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__32325 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__32326 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__32327 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__32328 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__32329 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__32330 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__32331 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__32332 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__32333 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__32334 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__32335 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__32336 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__32337 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__32338 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__32339 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32332);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__32333);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__32334);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__32335);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__32336);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__32337);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32338);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__32339);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__32331);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32330);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__32329);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__32328);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__32327);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__32326);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__32325);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32324);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq32322){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32322));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32390 = arguments.length;
var i__5750__auto___32391 = (0);
while(true){
if((i__5750__auto___32391 < len__5749__auto___32390)){
args__5755__auto__.push((arguments[i__5750__auto___32391]));

var G__32398 = (i__5750__auto___32391 + (1));
i__5750__auto___32391 = G__32398;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__32345__auto__","s__32345__auto__",-722879437,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__32347__auto__","x__32347__auto__",-344796854,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32345__auto__","s__32345__auto__",-722879437,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__32347__auto__","x__32347__auto__",-344796854,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__32345__auto__","s__32345__auto__",-722879437,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq32348){
var G__32349 = cljs.core.first(seq32348);
var seq32348__$1 = cljs.core.next(seq32348);
var G__32350 = cljs.core.first(seq32348__$1);
var seq32348__$2 = cljs.core.next(seq32348__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32349,G__32350,seq32348__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
