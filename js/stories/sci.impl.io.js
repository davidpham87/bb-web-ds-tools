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
var G__33090 = arguments.length;
switch (G__33090) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__33091 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33092 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33092);

try{var G__33093 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__33093);

return G__33093;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33091);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__33094 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33095 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33095);

try{var G__33096 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__33096);

return G__33096;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33094);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__33097 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33098 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33098);

try{var G__33099 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__33099);

return G__33099;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33097);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__33100 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33101 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33101);

try{var G__33102 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__33102);

return G__33102;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33100);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__33103 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33104 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33104);

try{var G__33105 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__33105);

return G__33105;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33103);
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
var _STAR_print_fn_STAR__orig_val__33106 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__33107 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33107);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33106);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33292 = arguments.length;
var i__5750__auto___33293 = (0);
while(true){
if((i__5750__auto___33293 < len__5749__auto___33292)){
args__5755__auto__.push((arguments[i__5750__auto___33293]));

var G__33294 = (i__5750__auto___33293 + (1));
i__5750__auto___33293 = G__33294;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__33109 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__33110 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33111 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33112 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33113 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33114 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33115 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33116 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__33117 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__33118 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33119 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33120 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33121 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33122 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33123 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33124 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33117);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33118);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33119);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33120);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33121);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33122);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33123);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33124);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33116);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33115);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33114);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33113);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33112);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33111);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33110);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33109);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq33108){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33108));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__33130 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__33131 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33131);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33130);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33295 = arguments.length;
var i__5750__auto___33296 = (0);
while(true){
if((i__5750__auto___33296 < len__5749__auto___33295)){
args__5755__auto__.push((arguments[i__5750__auto___33296]));

var G__33297 = (i__5750__auto___33296 + (1));
i__5750__auto___33296 = G__33297;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__33135 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33136 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33137 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33138 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33139 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33140 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33141 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__33142 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33143 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33144 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33145 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33146 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33147 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33148 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33142);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33143);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33144);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33145);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33146);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33147);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33148);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33141);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33140);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33139);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33138);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33137);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33136);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33135);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq33133){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33133));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33299 = arguments.length;
var i__5750__auto___33300 = (0);
while(true){
if((i__5750__auto___33300 < len__5749__auto___33299)){
args__5755__auto__.push((arguments[i__5750__auto___33300]));

var G__33301 = (i__5750__auto___33300 + (1));
i__5750__auto___33300 = G__33301;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__33154 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__33155 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33156 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33157 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33158 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33159 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33160 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33161 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__33162 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__33163 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33164 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33165 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33166 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33167 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33168 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33169 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33162);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33163);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33164);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33165);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33166);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33167);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33168);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33169);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33161);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33160);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33159);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33158);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33157);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33156);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33155);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33154);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq33153){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33153));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33302 = arguments.length;
var i__5750__auto___33303 = (0);
while(true){
if((i__5750__auto___33303 < len__5749__auto___33302)){
args__5755__auto__.push((arguments[i__5750__auto___33303]));

var G__33304 = (i__5750__auto___33303 + (1));
i__5750__auto___33303 = G__33304;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__33171 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33172 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33173 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33174 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33175 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33176 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33177 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__33178 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33179 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33180 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33181 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33182 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33183 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33184 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33178);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33179);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33180);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33181);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33183);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33184);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33177);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33176);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33175);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33174);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33173);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33172);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33171);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq33170){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33170));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33308 = arguments.length;
var i__5750__auto___33309 = (0);
while(true){
if((i__5750__auto___33309 < len__5749__auto___33308)){
args__5755__auto__.push((arguments[i__5750__auto___33309]));

var G__33310 = (i__5750__auto___33309 + (1));
i__5750__auto___33309 = G__33310;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__33191 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__33192 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33193 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33194 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33195 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33196 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33197 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__33198 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__33199 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33200 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__33201 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33202 = null;
var _STAR_print_newline_STAR__temp_val__33203 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33204 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33198);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33199);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33200);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33201);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33202);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33203);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33204);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33197);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33196);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33195);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33194);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33193);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33192);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33191);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq33190){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33190));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33311 = arguments.length;
var i__5750__auto___33312 = (0);
while(true){
if((i__5750__auto___33312 < len__5749__auto___33311)){
args__5755__auto__.push((arguments[i__5750__auto___33312]));

var G__33313 = (i__5750__auto___33312 + (1));
i__5750__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__33211 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33212 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33213 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33214 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33215 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33216 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33217 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__33221 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33222 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33223 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33224 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33225 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33226 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33227 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33221);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33222);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33223);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33224);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33225);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33226);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33227);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33217);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33216);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33215);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33214);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33213);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33212);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33211);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq33206){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33206));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33314 = arguments.length;
var i__5750__auto___33315 = (0);
while(true){
if((i__5750__auto___33315 < len__5749__auto___33314)){
args__5755__auto__.push((arguments[i__5750__auto___33315]));

var G__33316 = (i__5750__auto___33315 + (1));
i__5750__auto___33315 = G__33316;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__33239 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__33240 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33241 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33242 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33243 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33244 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33245 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33246 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__33247 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__33248 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33249 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33250 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33251 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33252 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33253 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33254 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33247);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33248);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33249);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33250);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33251);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33252);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33253);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33254);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33246);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33245);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33244);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33243);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33242);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33241);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33240);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33239);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq33235){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33235));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33319 = arguments.length;
var i__5750__auto___33320 = (0);
while(true){
if((i__5750__auto___33320 < len__5749__auto___33319)){
args__5755__auto__.push((arguments[i__5750__auto___33320]));

var G__33321 = (i__5750__auto___33320 + (1));
i__5750__auto___33320 = G__33321;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__33262__auto__","s__33262__auto__",1668164758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__33263__auto__","x__33263__auto__",-633507515,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__33262__auto__","s__33262__auto__",1668164758,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33263__auto__","x__33263__auto__",-633507515,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__33262__auto__","s__33262__auto__",1668164758,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq33266){
var G__33267 = cljs.core.first(seq33266);
var seq33266__$1 = cljs.core.next(seq33266);
var G__33268 = cljs.core.first(seq33266__$1);
var seq33266__$2 = cljs.core.next(seq33266__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33267,G__33268,seq33266__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
