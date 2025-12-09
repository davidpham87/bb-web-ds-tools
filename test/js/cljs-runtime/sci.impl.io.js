goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__46239 = arguments.length;
switch (G__46239) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__46240 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46241 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46241);

try{var G__46242 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__46242);

return G__46242;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46240);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__46243 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46244 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46244);

try{var G__46245 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__46245);

return G__46245;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46243);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__46246 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46247 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46247);

try{var G__46248 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__46248);

return G__46248;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46246);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__46249 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46250 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46250);

try{var G__46251 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__46251);

return G__46251;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46249);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__46252 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__46253 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__46253);

try{var G__46254 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__46254);

return G__46254;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__46252);
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
var _STAR_print_fn_STAR__orig_val__46255 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__46256 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46256);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46255);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46390 = arguments.length;
var i__5750__auto___46391 = (0);
while(true){
if((i__5750__auto___46391 < len__5749__auto___46390)){
args__5755__auto__.push((arguments[i__5750__auto___46391]));

var G__46392 = (i__5750__auto___46391 + (1));
i__5750__auto___46391 = G__46392;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46258 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46259 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46260 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46261 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46262 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46263 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46264 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46265 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46266 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46267 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46268 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46269 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46270 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46271 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46272 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46273 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46266);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46267);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46268);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46269);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46270);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46271);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46272);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46273);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46265);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46264);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46263);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46262);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46261);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46260);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46259);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46258);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq46257){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46257));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__46274 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__46275 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46275);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46274);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46393 = arguments.length;
var i__5750__auto___46394 = (0);
while(true){
if((i__5750__auto___46394 < len__5749__auto___46393)){
args__5755__auto__.push((arguments[i__5750__auto___46394]));

var G__46395 = (i__5750__auto___46394 + (1));
i__5750__auto___46394 = G__46395;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__46278 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46279 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46280 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46281 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46282 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46283 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46284 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__46285 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46286 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46287 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46288 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46289 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46290 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46291 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46285);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46286);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46287);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46288);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46289);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46290);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46291);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46284);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46283);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46282);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46281);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46280);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46279);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46278);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq46277){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46277));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46401 = arguments.length;
var i__5750__auto___46402 = (0);
while(true){
if((i__5750__auto___46402 < len__5749__auto___46401)){
args__5755__auto__.push((arguments[i__5750__auto___46402]));

var G__46403 = (i__5750__auto___46402 + (1));
i__5750__auto___46402 = G__46403;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46293 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46294 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46295 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46296 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46297 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46298 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46299 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46300 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46301 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46302 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46303 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46304 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46305 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46306 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46307 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46308 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46301);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46302);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46303);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46304);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46305);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46306);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46307);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46308);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46300);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46299);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46298);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46297);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46296);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46295);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46294);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46293);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq46292){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46292));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46405 = arguments.length;
var i__5750__auto___46406 = (0);
while(true){
if((i__5750__auto___46406 < len__5749__auto___46405)){
args__5755__auto__.push((arguments[i__5750__auto___46406]));

var G__46407 = (i__5750__auto___46406 + (1));
i__5750__auto___46406 = G__46407;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__46310 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46311 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46312 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46313 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46314 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46315 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46316 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__46317 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46318 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46319 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46320 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46321 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46322 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46323 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46317);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46318);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46319);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46320);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46321);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46322);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46323);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46316);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46315);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46314);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46313);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46312);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46311);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46310);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq46309){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46309));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46409 = arguments.length;
var i__5750__auto___46410 = (0);
while(true){
if((i__5750__auto___46410 < len__5749__auto___46409)){
args__5755__auto__.push((arguments[i__5750__auto___46410]));

var G__46411 = (i__5750__auto___46410 + (1));
i__5750__auto___46410 = G__46411;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46329 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46330 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46331 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46332 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46333 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46335 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46336 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46337 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46338 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__46339 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46340 = null;
var _STAR_print_newline_STAR__temp_val__46341 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46342 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46336);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46337);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46338);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46339);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46340);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46341);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46342);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46335);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46334);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46333);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46332);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46331);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46330);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46329);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq46327){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46327));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46420 = arguments.length;
var i__5750__auto___46421 = (0);
while(true){
if((i__5750__auto___46421 < len__5749__auto___46420)){
args__5755__auto__.push((arguments[i__5750__auto___46421]));

var G__46422 = (i__5750__auto___46421 + (1));
i__5750__auto___46421 = G__46422;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__46351 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46352 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46353 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46354 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46355 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46356 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46357 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__46358 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46359 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46360 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46361 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46362 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46363 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46364 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46358);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46359);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46360);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46361);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46362);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46363);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46364);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46357);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46356);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46355);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46354);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46353);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46352);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46351);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq46350){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46350));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46430 = arguments.length;
var i__5750__auto___46431 = (0);
while(true){
if((i__5750__auto___46431 < len__5749__auto___46430)){
args__5755__auto__.push((arguments[i__5750__auto___46431]));

var G__46432 = (i__5750__auto___46431 + (1));
i__5750__auto___46431 = G__46432;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__46366 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__46367 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__46368 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__46369 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__46370 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__46371 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__46372 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__46373 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__46374 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__46375 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__46376 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__46377 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__46378 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__46379 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__46380 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__46381 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46374);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__46375);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__46376);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__46377);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__46378);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__46379);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46380);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__46381);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__46373);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46372);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__46371);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__46370);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__46369);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__46368);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__46367);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46366);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq46365){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46365));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___46433 = arguments.length;
var i__5750__auto___46434 = (0);
while(true){
if((i__5750__auto___46434 < len__5749__auto___46433)){
args__5755__auto__.push((arguments[i__5750__auto___46434]));

var G__46435 = (i__5750__auto___46434 + (1));
i__5750__auto___46434 = G__46435;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__46383__auto__","s__46383__auto__",-419458719,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__46384__auto__","x__46384__auto__",-1880700832,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__46383__auto__","s__46383__auto__",-419458719,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__46384__auto__","x__46384__auto__",-1880700832,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__46383__auto__","s__46383__auto__",-419458719,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq46385){
var G__46386 = cljs.core.first(seq46385);
var seq46385__$1 = cljs.core.next(seq46385);
var G__46387 = cljs.core.first(seq46385__$1);
var seq46385__$2 = cljs.core.next(seq46385__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46386,G__46387,seq46385__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
