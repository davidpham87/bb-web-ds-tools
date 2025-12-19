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
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("sci.impl.io.js");

goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__43971 = arguments.length;
switch (G__43971) {
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

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__43972 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43973 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43973);

try{var G__43974 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__43974);

return G__43974;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43972);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__43975 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43976 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43976);

try{var G__43977 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__43977);

return G__43977;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43975);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__43978 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43979 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43979);

try{var G__43980 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__43980);

return G__43980;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43978);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__43981 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43982 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43982);

try{var G__43983 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__43983);

return G__43983;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43981);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__43984 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__43985 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__43985);

try{var G__43986 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__43986);

return G__43986;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__43984);
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
var _STAR_print_fn_STAR__orig_val__43987 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__43988 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43988);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43987);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44116 = arguments.length;
var i__5750__auto___44117 = (0);
while(true){
if((i__5750__auto___44117 < len__5749__auto___44116)){
args__5755__auto__.push((arguments[i__5750__auto___44117]));

var G__44118 = (i__5750__auto___44117 + (1));
i__5750__auto___44117 = G__44118;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__43990 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__43991 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__43992 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__43993 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__43994 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__43995 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__43996 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__43997 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__43998 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__43999 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44000 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44001 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44002 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44003 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44004 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44005 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43998);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__43999);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44000);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44001);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44002);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44003);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44004);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44005);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__43997);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43996);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__43995);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__43994);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__43993);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__43992);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__43991);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43990);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq43989){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43989));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__44006 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__44007 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44007);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44006);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44123 = arguments.length;
var i__5750__auto___44124 = (0);
while(true){
if((i__5750__auto___44124 < len__5749__auto___44123)){
args__5755__auto__.push((arguments[i__5750__auto___44124]));

var G__44125 = (i__5750__auto___44124 + (1));
i__5750__auto___44124 = G__44125;
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
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq44008){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44008));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44127 = arguments.length;
var i__5750__auto___44128 = (0);
while(true){
if((i__5750__auto___44128 < len__5749__auto___44127)){
args__5755__auto__.push((arguments[i__5750__auto___44128]));

var G__44129 = (i__5750__auto___44128 + (1));
i__5750__auto___44128 = G__44129;
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
var len__5749__auto___44130 = arguments.length;
var i__5750__auto___44131 = (0);
while(true){
if((i__5750__auto___44131 < len__5749__auto___44130)){
args__5755__auto__.push((arguments[i__5750__auto___44131]));

var G__44132 = (i__5750__auto___44131 + (1));
i__5750__auto___44131 = G__44132;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44042 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44043 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44044 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44045 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44046 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44047 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44048 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44049 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44050 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44051 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44052 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44053 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44054 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44055 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44049);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44050);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44051);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44052);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44053);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44054);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44055);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44048);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44047);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44046);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44045);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44044);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44043);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44042);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq44040){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44040));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44133 = arguments.length;
var i__5750__auto___44134 = (0);
while(true){
if((i__5750__auto___44134 < len__5749__auto___44133)){
args__5755__auto__.push((arguments[i__5750__auto___44134]));

var G__44135 = (i__5750__auto___44134 + (1));
i__5750__auto___44134 = G__44135;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44057 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44058 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44059 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44060 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44061 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44062 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44063 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44064 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44065 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44066 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__44067 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44068 = null;
var _STAR_print_newline_STAR__temp_val__44069 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44070 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44064);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44065);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44066);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44067);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44068);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44069);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44070);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44063);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44062);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44061);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44060);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44059);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44058);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44057);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq44056){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44056));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44136 = arguments.length;
var i__5750__auto___44137 = (0);
while(true){
if((i__5750__auto___44137 < len__5749__auto___44136)){
args__5755__auto__.push((arguments[i__5750__auto___44137]));

var G__44138 = (i__5750__auto___44137 + (1));
i__5750__auto___44137 = G__44138;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__44072 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44073 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44074 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44075 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44076 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44078 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__44079 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44080 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44081 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44082 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44083 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44084 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44085 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44079);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44080);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44081);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44082);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44083);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44084);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44085);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44078);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44077);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44076);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44075);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44074);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44073);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44072);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq44071){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44071));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44139 = arguments.length;
var i__5750__auto___44140 = (0);
while(true){
if((i__5750__auto___44140 < len__5749__auto___44139)){
args__5755__auto__.push((arguments[i__5750__auto___44140]));

var G__44141 = (i__5750__auto___44140 + (1));
i__5750__auto___44140 = G__44141;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__44087 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__44088 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__44089 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__44090 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__44091 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__44092 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__44093 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__44094 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__44095 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__44096 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__44097 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__44098 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__44099 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__44100 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__44101 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__44102 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44095);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44096);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44097);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__44098);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__44099);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__44100);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44101);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__44102);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__44094);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44093);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__44092);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__44091);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__44090);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44089);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44088);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44087);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq44086){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44086));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5755__auto__ = [];
var len__5749__auto___44142 = arguments.length;
var i__5750__auto___44143 = (0);
while(true){
if((i__5750__auto___44143 < len__5749__auto___44142)){
args__5755__auto__.push((arguments[i__5750__auto___44143]));

var G__44144 = (i__5750__auto___44143 + (1));
i__5750__auto___44143 = G__44144;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__44104__auto__","s__44104__auto__",-1415578171,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__44105__auto__","x__44105__auto__",988316510,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__44104__auto__","s__44104__auto__",-1415578171,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__44105__auto__","x__44105__auto__",988316510,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__44104__auto__","s__44104__auto__",-1415578171,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq44106){
var G__44107 = cljs.core.first(seq44106);
var seq44106__$1 = cljs.core.next(seq44106);
var G__44108 = cljs.core.first(seq44106__$1);
var seq44106__$2 = cljs.core.next(seq44106__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44107,G__44108,seq44106__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
