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
var G__43944 = arguments.length;
switch (G__43944) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__43945 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43946 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43946);

try{var G__43947 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__43947);

return G__43947;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43945);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__43948 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43949 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43949);

try{var G__43950 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__43950);

return G__43950;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43948);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__43953 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43954 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43954);

try{var G__43959 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__43959);

return G__43959;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43953);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__43960 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43961 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43961);

try{var G__43962 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__43962);

return G__43962;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43960);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__43967 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43968 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43968);

try{var G__43971 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__43971);

return G__43971;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43967);
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
var _STAR_print_fn_STAR__orig_val__43978 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__43979 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43979);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43978);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44155 = arguments.length;
var i__5750__auto___44156 = (0);
while(true){
if((i__5750__auto___44156 < len__5749__auto___44155)){
args__5755__auto__.push((arguments[i__5750__auto___44156]));

var G__44157 = (i__5750__auto___44156 + (1));
i__5750__auto___44156 = G__44157;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__43987 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__43988 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__43989 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__43990 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__43991 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__43992 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__43993 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__43994 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__43995 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__43996 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__43997 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__43998 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__43999 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44000 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44001 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44002 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43995);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__43996);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__43997);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__43998);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__43999);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44000);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44001);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44002);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__43994);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43993);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__43992);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__43991);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__43990);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__43989);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__43988);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43987);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq43980){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43980));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__44003 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__44004 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44004);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44003);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44161 = arguments.length;
var i__5750__auto___44162 = (0);
while(true){
if((i__5750__auto___44162 < len__5749__auto___44161)){
args__5755__auto__.push((arguments[i__5750__auto___44162]));

var G__44163 = (i__5750__auto___44162 + (1));
i__5750__auto___44162 = G__44163;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44009 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44010 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44011 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44012 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44013 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44014 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44015 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44016 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44017 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44018 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44019 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44020 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44021 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44022 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44016);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44017);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44018);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44019);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44020);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44021);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44022);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44015);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44014);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44013);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44012);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44011);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44010);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44009);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq44006){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44006));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44166 = arguments.length;
var i__5750__auto___44167 = (0);
while(true){
if((i__5750__auto___44167 < len__5749__auto___44166)){
args__5755__auto__.push((arguments[i__5750__auto___44167]));

var G__44168 = (i__5750__auto___44167 + (1));
i__5750__auto___44167 = G__44168;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44024 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44025 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44026 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44027 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44028 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44029 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44030 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44031 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44032 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44033 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44034 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44035 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44036 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44037 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44038 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44039 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44032);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44033);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44034);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44035);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44036);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44037);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44038);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44039);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44031);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44030);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44029);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44028);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44027);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44026);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44025);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44024);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq44023){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44023));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44169 = arguments.length;
var i__5750__auto___44170 = (0);
while(true){
if((i__5750__auto___44170 < len__5749__auto___44169)){
args__5755__auto__.push((arguments[i__5750__auto___44170]));

var G__44171 = (i__5750__auto___44170 + (1));
i__5750__auto___44170 = G__44171;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44045 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44046 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44047 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44048 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44049 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44050 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44051 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44052 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44053 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44054 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44055 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44056 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44057 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44058 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44052);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44053);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44054);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44055);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44056);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44057);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44058);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44051);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44050);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44049);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44048);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44047);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44046);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44045);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq44044){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44044));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44182 = arguments.length;
var i__5750__auto___44183 = (0);
while(true){
if((i__5750__auto___44183 < len__5749__auto___44182)){
args__5755__auto__.push((arguments[i__5750__auto___44183]));

var G__44184 = (i__5750__auto___44183 + (1));
i__5750__auto___44183 = G__44184;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44067 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44068 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44069 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44070 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44071 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44072 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44073 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44074 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44075 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44076 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__44077 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44078 = null;
var _STAR_print_newline_STAR__temp_val__44079 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44080 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44074);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44075);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44076);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44077);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44078);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44079);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44080);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44073);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44072);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44071);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44070);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44069);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44068);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44067);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq44066){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44066));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44187 = arguments.length;
var i__5750__auto___44188 = (0);
while(true){
if((i__5750__auto___44188 < len__5749__auto___44187)){
args__5755__auto__.push((arguments[i__5750__auto___44188]));

var G__44189 = (i__5750__auto___44188 + (1));
i__5750__auto___44188 = G__44189;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44082 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44083 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44084 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44085 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44086 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44087 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44088 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44089 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44090 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44091 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44092 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44093 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44094 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44095 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44089);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44090);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44091);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44092);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44093);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44094);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44095);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44088);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44087);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44086);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44085);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44084);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44083);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44082);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq44081){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44081));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44190 = arguments.length;
var i__5750__auto___44191 = (0);
while(true){
if((i__5750__auto___44191 < len__5749__auto___44190)){
args__5755__auto__.push((arguments[i__5750__auto___44191]));

var G__44192 = (i__5750__auto___44191 + (1));
i__5750__auto___44191 = G__44192;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44097 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44098 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44099 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44100 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44101 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44102 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44103 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44104 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44105 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44106 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44107 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44108 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44109 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44110 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44111 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44112 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44105);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44106);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44107);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44108);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44109);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44110);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44111);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44112);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44104);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44103);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44102);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44101);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44100);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44099);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44098);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44097);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq44096){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44096));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44195 = arguments.length;
var i__5750__auto___44196 = (0);
while(true){
if((i__5750__auto___44196 < len__5749__auto___44195)){
args__5755__auto__.push((arguments[i__5750__auto___44196]));

var G__44198 = (i__5750__auto___44196 + (1));
i__5750__auto___44196 = G__44198;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__44114__auto__","s__44114__auto__",-1534340353,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__44115__auto__","x__44115__auto__",1878240420,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__44114__auto__","s__44114__auto__",-1534340353,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__44115__auto__","x__44115__auto__",1878240420,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__44114__auto__","s__44114__auto__",-1534340353,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq44116){
var G__44117 = cljs.core.first(seq44116);
var seq44116__$1 = cljs.core.next(seq44116);
var G__44118 = cljs.core.first(seq44116__$1);
var seq44116__$2 = cljs.core.next(seq44116__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44117,G__44118,seq44116__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
