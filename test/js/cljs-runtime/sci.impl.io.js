goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__38137 = arguments.length;
switch (G__38137) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__38138 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__38139 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__38139);

try{var G__38140 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__38140);

return G__38140;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__38138);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__38141 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__38142 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__38142);

try{var G__38143 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__38143);

return G__38143;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__38141);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__38145 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__38146 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__38146);

try{var G__38147 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__38147);

return G__38147;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__38145);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__38148 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__38149 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__38149);

try{var G__38150 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__38150);

return G__38150;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__38148);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__38151 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__38152 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__38152);

try{var G__38153 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__38153);

return G__38153;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__38151);
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
var _STAR_print_fn_STAR__orig_val__38170 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__38171 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38171);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38170);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38368 = arguments.length;
var i__5750__auto___38369 = (0);
while(true){
if((i__5750__auto___38369 < len__5749__auto___38368)){
args__5755__auto__.push((arguments[i__5750__auto___38369]));

var G__38370 = (i__5750__auto___38369 + (1));
i__5750__auto___38369 = G__38370;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__38180 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__38181 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__38182 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__38183 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__38184 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__38185 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__38186 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__38187 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__38188 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__38189 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__38190 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__38191 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__38192 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__38193 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__38194 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__38195 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38188);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38189);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__38190);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38191);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__38192);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38193);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38194);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38195);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38187);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38186);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38185);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__38184);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38183);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__38182);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38181);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38180);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq38178){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38178));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__38202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__38203 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38203);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38202);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38377 = arguments.length;
var i__5750__auto___38378 = (0);
while(true){
if((i__5750__auto___38378 < len__5749__auto___38377)){
args__5755__auto__.push((arguments[i__5750__auto___38378]));

var G__38379 = (i__5750__auto___38378 + (1));
i__5750__auto___38378 = G__38379;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__38225 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__38226 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__38227 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__38228 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__38229 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__38230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__38231 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__38232 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__38233 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__38234 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__38235 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__38236 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__38237 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__38238 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38232);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__38233);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38234);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__38235);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38236);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38237);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38238);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38231);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38230);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38229);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__38228);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38227);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__38226);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38225);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq38210){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38210));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38380 = arguments.length;
var i__5750__auto___38381 = (0);
while(true){
if((i__5750__auto___38381 < len__5749__auto___38380)){
args__5755__auto__.push((arguments[i__5750__auto___38381]));

var G__38382 = (i__5750__auto___38381 + (1));
i__5750__auto___38381 = G__38382;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__38248 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__38249 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__38250 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__38251 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__38252 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__38253 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__38254 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__38255 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__38256 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__38257 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__38258 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__38259 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__38260 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__38261 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__38262 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__38263 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38256);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38257);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__38258);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38259);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__38260);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38261);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38262);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38263);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38255);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38254);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38253);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__38252);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38251);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__38250);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38249);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38248);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq38239){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38239));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38383 = arguments.length;
var i__5750__auto___38384 = (0);
while(true){
if((i__5750__auto___38384 < len__5749__auto___38383)){
args__5755__auto__.push((arguments[i__5750__auto___38384]));

var G__38385 = (i__5750__auto___38384 + (1));
i__5750__auto___38384 = G__38385;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__38269 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__38270 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__38271 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__38272 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__38273 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__38274 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__38275 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__38276 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__38277 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__38278 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__38279 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__38280 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__38281 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__38282 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38276);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__38277);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38278);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__38279);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38280);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38281);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38282);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38275);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38274);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38273);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__38272);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38271);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__38270);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38269);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq38266){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38266));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38388 = arguments.length;
var i__5750__auto___38389 = (0);
while(true){
if((i__5750__auto___38389 < len__5749__auto___38388)){
args__5755__auto__.push((arguments[i__5750__auto___38389]));

var G__38390 = (i__5750__auto___38389 + (1));
i__5750__auto___38389 = G__38390;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__38286 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__38287 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__38288 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__38289 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__38290 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__38291 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__38292 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__38293 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__38294 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__38295 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__38296 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__38297 = null;
var _STAR_print_newline_STAR__temp_val__38298 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__38299 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38293);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38294);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__38295);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__38296);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38297);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38298);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38299);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38292);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38291);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38290);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__38289);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__38288);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38287);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38286);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq38285){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38285));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38391 = arguments.length;
var i__5750__auto___38392 = (0);
while(true){
if((i__5750__auto___38392 < len__5749__auto___38391)){
args__5755__auto__.push((arguments[i__5750__auto___38392]));

var G__38393 = (i__5750__auto___38392 + (1));
i__5750__auto___38392 = G__38393;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__38311 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__38312 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__38313 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__38314 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__38315 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__38316 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__38317 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__38318 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__38319 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__38320 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__38321 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__38322 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__38323 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__38324 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38318);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__38319);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38320);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__38321);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38322);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38323);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38324);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38317);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38316);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38315);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__38314);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38313);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__38312);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38311);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq38309){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38309));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38395 = arguments.length;
var i__5750__auto___38396 = (0);
while(true){
if((i__5750__auto___38396 < len__5749__auto___38395)){
args__5755__auto__.push((arguments[i__5750__auto___38396]));

var G__38397 = (i__5750__auto___38396 + (1));
i__5750__auto___38396 = G__38397;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__38335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__38336 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__38337 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__38338 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__38339 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__38340 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__38341 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__38342 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__38343 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__38344 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__38345 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__38346 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__38347 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__38348 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__38349 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__38350 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38343);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__38344);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__38345);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__38346);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__38347);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__38348);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38349);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__38350);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__38342);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38341);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__38340);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__38339);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__38338);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__38337);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__38336);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38335);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq38334){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38334));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38398 = arguments.length;
var i__5750__auto___38399 = (0);
while(true){
if((i__5750__auto___38399 < len__5749__auto___38398)){
args__5755__auto__.push((arguments[i__5750__auto___38399]));

var G__38400 = (i__5750__auto___38399 + (1));
i__5750__auto___38399 = G__38400;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__38360__auto__","s__38360__auto__",1469117084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__38361__auto__","x__38361__auto__",-775062617,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__38360__auto__","s__38360__auto__",1469117084,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__38361__auto__","x__38361__auto__",-775062617,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__38360__auto__","s__38360__auto__",1469117084,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq38362){
var G__38363 = cljs.core.first(seq38362);
var seq38362__$1 = cljs.core.next(seq38362);
var G__38364 = cljs.core.first(seq38362__$1);
var seq38362__$2 = cljs.core.next(seq38362__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38363,G__38364,seq38362__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
