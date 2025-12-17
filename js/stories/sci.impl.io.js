var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./sci.impl.copy_vars.js");
require("./sci.impl.records.js");
require("./sci.impl.unrestrict.js");
require("./sci.impl.utils.js");
require("./sci.impl.vars.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("sci.impl.io.js");

goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__44096 = arguments.length;
switch (G__44096) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__44104 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44105 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44105);

try{var G__44106 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__44106);

return G__44106;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44104);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__44107 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44108 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44108);

try{var G__44109 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__44109);

return G__44109;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44107);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__44113 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44114 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44114);

try{var G__44116 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__44116);

return G__44116;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44113);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__44117 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44118 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44118);

try{var G__44119 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__44119);

return G__44119;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44117);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__44122 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__44123 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__44123);

try{var G__44124 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__44124);

return G__44124;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__44122);
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
var _STAR_print_fn_STAR__orig_val__44127 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__44128 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44128);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44127);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44311 = arguments.length;
var i__5750__auto___44312 = (0);
while(true){
if((i__5750__auto___44312 < len__5749__auto___44311)){
args__5755__auto__.push((arguments[i__5750__auto___44312]));

var G__44313 = (i__5750__auto___44312 + (1));
i__5750__auto___44312 = G__44313;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44132 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44133 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44134 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44135 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44136 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44137 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44138 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44139 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44140 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44141 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44142 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44143 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44144 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44145 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44146 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44147 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44140);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44141);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44142);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44143);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44144);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44145);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44146);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44147);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44139);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44138);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44137);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44136);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44135);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44134);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44133);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44132);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq44129){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44129));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__44156 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__44157 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44157);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44156);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44319 = arguments.length;
var i__5750__auto___44320 = (0);
while(true){
if((i__5750__auto___44320 < len__5749__auto___44319)){
args__5755__auto__.push((arguments[i__5750__auto___44320]));

var G__44321 = (i__5750__auto___44320 + (1));
i__5750__auto___44320 = G__44321;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44163 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44164 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44165 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44166 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44167 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44168 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44169 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44170 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44171 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44172 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44173 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44174 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44175 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44176 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44170);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44171);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44172);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44173);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44174);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44175);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44176);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44169);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44168);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44167);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44166);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44165);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44164);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44163);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq44162){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44162));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44322 = arguments.length;
var i__5750__auto___44323 = (0);
while(true){
if((i__5750__auto___44323 < len__5749__auto___44322)){
args__5755__auto__.push((arguments[i__5750__auto___44323]));

var G__44324 = (i__5750__auto___44323 + (1));
i__5750__auto___44323 = G__44324;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44187 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44188 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44189 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44190 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44191 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44192 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44193 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44194 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44195 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44196 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44197 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44198 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44199 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44200 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44201 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44202 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44195);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44196);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44197);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44198);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44199);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44200);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44201);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44202);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44194);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44193);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44192);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44191);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44190);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44189);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44188);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44187);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq44186){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44186));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44325 = arguments.length;
var i__5750__auto___44326 = (0);
while(true){
if((i__5750__auto___44326 < len__5749__auto___44325)){
args__5755__auto__.push((arguments[i__5750__auto___44326]));

var G__44327 = (i__5750__auto___44326 + (1));
i__5750__auto___44326 = G__44327;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44206 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44207 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44208 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44209 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44210 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44211 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44212 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44213 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44214 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44215 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44216 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44217 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44218 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44219 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44213);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44214);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44215);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44216);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44217);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44218);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44219);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44212);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44211);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44210);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44209);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44208);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44207);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44206);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq44205){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44205));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44330 = arguments.length;
var i__5750__auto___44331 = (0);
while(true){
if((i__5750__auto___44331 < len__5749__auto___44330)){
args__5755__auto__.push((arguments[i__5750__auto___44331]));

var G__44332 = (i__5750__auto___44331 + (1));
i__5750__auto___44331 = G__44332;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44223 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44224 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44225 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44226 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44227 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44228 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44229 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44230 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44231 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44232 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__44233 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44234 = null;
var _STAR_print_newline_STAR__temp_val__44235 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44236 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44230);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44231);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44232);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44233);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44234);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44235);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44236);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44229);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44228);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44227);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44226);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44225);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44224);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44223);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq44221){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44221));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44345 = arguments.length;
var i__5750__auto___44346 = (0);
while(true){
if((i__5750__auto___44346 < len__5749__auto___44345)){
args__5755__auto__.push((arguments[i__5750__auto___44346]));

var G__44347 = (i__5750__auto___44346 + (1));
i__5750__auto___44346 = G__44347;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44254 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44255 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44256 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44257 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44258 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44259 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44260 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44261 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44262 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44263 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44264 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44265 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44266 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44267 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44261);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44262);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44263);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44264);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44265);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44266);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44267);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44260);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44259);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44258);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44257);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44256);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44255);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44254);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq44253){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44253));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44351 = arguments.length;
var i__5750__auto___44352 = (0);
while(true){
if((i__5750__auto___44352 < len__5749__auto___44351)){
args__5755__auto__.push((arguments[i__5750__auto___44352]));

var G__44353 = (i__5750__auto___44352 + (1));
i__5750__auto___44352 = G__44353;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44269 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44270 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44271 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44272 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44273 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44274 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44275 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44276 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44277 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44278 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44279 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44280 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44281 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44282 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44283 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44284 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44277);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44278);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44279);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44280);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44281);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44282);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44283);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44284);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44276);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44275);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44274);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44273);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44272);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44271);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44270);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44269);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq44268){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44268));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44357 = arguments.length;
var i__5750__auto___44358 = (0);
while(true){
if((i__5750__auto___44358 < len__5749__auto___44357)){
args__5755__auto__.push((arguments[i__5750__auto___44358]));

var G__44359 = (i__5750__auto___44358 + (1));
i__5750__auto___44358 = G__44359;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__44285__auto__","s__44285__auto__",-169977061,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__44286__auto__","x__44286__auto__",1820483685,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__44285__auto__","s__44285__auto__",-169977061,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__44286__auto__","x__44286__auto__",1820483685,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__44285__auto__","s__44285__auto__",-169977061,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq44287){
var G__44288 = cljs.core.first(seq44287);
var seq44287__$1 = cljs.core.next(seq44287);
var G__44289 = cljs.core.first(seq44287__$1);
var seq44287__$2 = cljs.core.next(seq44287__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44288,G__44289,seq44287__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
