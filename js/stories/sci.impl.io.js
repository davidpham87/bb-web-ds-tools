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
var G__33101 = arguments.length;
switch (G__33101) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__33105 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33106 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33106);

try{var G__33107 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__33107);

return G__33107;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33105);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__33108 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33109 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33109);

try{var G__33110 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__33110);

return G__33110;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33108);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__33111 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33112 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33112);

try{var G__33113 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__33113);

return G__33113;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33111);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__33114 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33115 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33115);

try{var G__33116 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__33116);

return G__33116;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33114);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__33117 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__33118 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__33118);

try{var G__33119 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__33119);

return G__33119;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__33117);
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
var _STAR_print_fn_STAR__orig_val__33120 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__33121 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33121);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33120);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33286 = arguments.length;
var i__5750__auto___33287 = (0);
while(true){
if((i__5750__auto___33287 < len__5749__auto___33286)){
args__5755__auto__.push((arguments[i__5750__auto___33287]));

var G__33288 = (i__5750__auto___33287 + (1));
i__5750__auto___33287 = G__33288;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__33123 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__33124 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33125 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33126 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33127 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33128 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33129 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33130 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__33131 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__33132 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33133 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33134 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33135 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33136 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33137 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33138 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33131);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33132);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33133);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33134);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33135);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33136);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33137);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33138);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33130);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33129);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33128);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33127);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33126);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33125);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33124);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33123);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq33122){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33122));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__33140 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__33141 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33141);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33140);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33289 = arguments.length;
var i__5750__auto___33290 = (0);
while(true){
if((i__5750__auto___33290 < len__5749__auto___33289)){
args__5755__auto__.push((arguments[i__5750__auto___33290]));

var G__33291 = (i__5750__auto___33290 + (1));
i__5750__auto___33290 = G__33291;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__33146 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33147 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33148 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33149 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33150 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33151 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33152 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__33153 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33154 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33155 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33156 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33157 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33158 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33159 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33153);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33154);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33155);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33156);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33157);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33158);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33159);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33152);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33151);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33150);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33149);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33148);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33147);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33146);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq33143){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33143));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33296 = arguments.length;
var i__5750__auto___33297 = (0);
while(true){
if((i__5750__auto___33297 < len__5749__auto___33296)){
args__5755__auto__.push((arguments[i__5750__auto___33297]));

var G__33298 = (i__5750__auto___33297 + (1));
i__5750__auto___33297 = G__33298;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__33169 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__33170 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33171 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33172 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33173 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33174 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33175 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33176 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__33177 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__33178 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33179 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33180 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33181 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33182 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33183 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33184 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33177);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33178);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33179);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33180);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33181);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33182);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33183);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33184);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33176);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33175);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33174);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33173);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33172);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33171);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33170);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33169);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq33167){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33167));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33300 = arguments.length;
var i__5750__auto___33301 = (0);
while(true){
if((i__5750__auto___33301 < len__5749__auto___33300)){
args__5755__auto__.push((arguments[i__5750__auto___33301]));

var G__33302 = (i__5750__auto___33301 + (1));
i__5750__auto___33301 = G__33302;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__33186 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33187 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33188 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33189 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33190 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33191 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33192 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__33193 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33194 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33195 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33196 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33197 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33198 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33199 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33193);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33194);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33195);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33196);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33197);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33198);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33199);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33192);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33191);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33190);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33189);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33188);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33187);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33186);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq33185){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33185));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33305 = arguments.length;
var i__5750__auto___33306 = (0);
while(true){
if((i__5750__auto___33306 < len__5749__auto___33305)){
args__5755__auto__.push((arguments[i__5750__auto___33306]));

var G__33307 = (i__5750__auto___33306 + (1));
i__5750__auto___33306 = G__33307;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__33201 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__33202 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33203 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33204 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33205 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33207 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__33208 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__33209 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33210 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__33211 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33212 = null;
var _STAR_print_newline_STAR__temp_val__33213 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33214 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33208);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33209);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33210);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33211);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33212);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33213);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33214);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33207);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33206);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33205);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33204);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33203);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33202);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33201);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq33200){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33200));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33318 = arguments.length;
var i__5750__auto___33319 = (0);
while(true){
if((i__5750__auto___33319 < len__5749__auto___33318)){
args__5755__auto__.push((arguments[i__5750__auto___33319]));

var G__33320 = (i__5750__auto___33319 + (1));
i__5750__auto___33319 = G__33320;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__33222 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__33223 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__33224 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__33225 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__33226 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__33227 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__33228 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__33229 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__33230 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__33231 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__33232 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__33233 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__33234 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__33235 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__33229);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__33230);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__33231);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__33232);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__33233);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33234);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__33235);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__33228);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33227);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__33226);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__33225);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__33224);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__33223);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__33222);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq33216){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33216));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33326 = arguments.length;
var i__5750__auto___33327 = (0);
while(true){
if((i__5750__auto___33327 < len__5749__auto___33326)){
args__5755__auto__.push((arguments[i__5750__auto___33327]));

var G__33328 = (i__5750__auto___33327 + (1));
i__5750__auto___33327 = G__33328;
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
(sci.impl.io.println.cljs$lang$applyTo = (function (seq33237){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33237));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33333 = arguments.length;
var i__5750__auto___33334 = (0);
while(true){
if((i__5750__auto___33334 < len__5749__auto___33333)){
args__5755__auto__.push((arguments[i__5750__auto___33334]));

var G__33335 = (i__5750__auto___33334 + (1));
i__5750__auto___33334 = G__33335;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__33264__auto__","s__33264__auto__",271936021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__33265__auto__","x__33265__auto__",-272612958,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__33264__auto__","s__33264__auto__",271936021,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__33265__auto__","x__33265__auto__",-272612958,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__33264__auto__","s__33264__auto__",271936021,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
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
