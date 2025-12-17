var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.tagged_literals.js");
require("./sci.impl.types.js");
require("./sci.impl.unrestrict.js");
require("./clojure.string.js");
require("./sci.impl.destructure.js");
require("./sci.impl.evaluator.js");
require("./sci.impl.faster.js");
require("./sci.impl.fns.js");
require("./sci.impl.interop.js");
require("./sci.impl.load.js");
require("./sci.impl.macros.js");
require("./sci.impl.records.js");
require("./sci.impl.resolve.js");
require("./sci.impl.utils.js");
require("./sci.impl.vars.js");
require("./sci.lang.js");
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

$CLJS.SHADOW_ENV.setLoaded("sci.impl.analyzer.js");

goog.provide('sci.impl.analyzer');
goog.scope(function(){
  sci.impl.analyzer.goog$module$goog$object = goog.module.get('goog.object');
});
sci.impl.analyzer.recur_target = (function sci$impl$analyzer$recur_target(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.with_recur_target = (function sci$impl$analyzer$with_recur_target(ctx,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),v);
});
sci.impl.analyzer.without_recur_target = (function sci$impl$analyzer$without_recur_target(var_args){
var G__43911 = arguments.length;
switch (G__43911) {
case 1:
return sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),false);
}));

(sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$2 = (function (ctx,reason){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"no-recur-reason","no-recur-reason",-1993064353),reason], 0));
}));

(sci.impl.analyzer.without_recur_target.cljs$lang$maxFixedArity = 2);

sci.impl.analyzer.recur_target_QMARK_ = (function sci$impl$analyzer$recur_target_QMARK_(ctx){
return new cljs.core.Keyword(null,"recur-target","recur-target",-1909494536).cljs$core$IFn$_invoke$arity$1(ctx);
});
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Symbol(null,"case*","case*",-1938255072,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"null",new cljs.core.Symbol(null,"loop*","loop*",615029416,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"new","new",-444906321,null),"null",new cljs.core.Symbol(null,"let*","let*",1920721458,null),"null",new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"var","var",870848730,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"throw","throw",595905694,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),"analysis"], null));
});




sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true);
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("clojure.core","defrecord","clojure.core/defrecord",581689476,null),op)){
return expr;
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,op,true);
}catch (e43923){var _ = e43923;
return new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858);
}})();
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","unresolved","sci.impl.analyzer/unresolved",308754858),f)){
return expr;
} else {
var var_QMARK_ = sci.impl.utils.var_QMARK_(f);
var macro_var_QMARK_ = (function (){var and__5023__auto__ = var_QMARK_;
if(and__5023__auto__){
return sci.impl.vars.isMacro(f);
} else {
return and__5023__auto__;
}
})();
var needs_ctx_QMARK_ = (function (){var and__5023__auto__ = var_QMARK_;
if(and__5023__auto__){
return sci.impl.vars.needs_ctx_QMARK_(f);
} else {
return and__5023__auto__;
}
})();
var f__$1 = (cljs.core.truth_(macro_var_QMARK_)?cljs.core.deref(f):f);
if(cljs.core.truth_((function (){var or__5025__auto__ = macro_var_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sci.impl.utils.macro_QMARK_(f__$1);
}
})())){
if(cljs.core.truth_(needs_ctx_QMARK_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),ctx__$1,cljs.core.rest(expr));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),cljs.core.rest(expr));
}
} else {
if(clojure.string.starts_with_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),".")){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,".",".",1975675962,null),cljs.core.second(expr),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(op),(1))),cljs.core.nnext(expr));
} else {
return expr;
}
}
}

}
}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
sci.impl.analyzer.analyze_children_tail = (function sci$impl$analyzer$analyze_children_tail(ctx,children){
var rt = sci.impl.analyzer.recur_target(ctx);
var non_tail_ctx = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__43929_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__43929_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__43929_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__43930 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__43931 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43930,G__43931) : sci.impl.analyzer.analyze.call(null,G__43930,G__43931));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var child_count = cljs.core.count(children);
if((child_count > (5))){
var node1 = (function (){var G__43932 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var G__43933 = expr;
var G__43934 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__43932,G__43933,G__43934) : sci.impl.analyzer.return_do.call(null,G__43932,G__43933,G__43934));
})();
var node2 = (function (){var G__43948 = ctx;
var G__43949 = expr;
var G__43950 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__43948,G__43949,G__43950) : sci.impl.analyzer.return_do.call(null,G__43948,G__43949,G__43950));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node1,ctx__$1,bindings);

return sci.impl.types.eval(node2,ctx__$1,bindings);
}),null);
} else {
var analyzed_children = sci.impl.analyzer.analyze_children_tail(ctx,children);
var G__43952 = child_count;
switch (G__43952) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node0,ctx__$1,bindings);

return sci.impl.types.eval(node1,ctx__$1,bindings);
}),null);

break;
case (3):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var node2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node0,ctx__$1,bindings);

sci.impl.types.eval(node1,ctx__$1,bindings);

return sci.impl.types.eval(node2,ctx__$1,bindings);
}),null);

break;
case (4):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var node2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var node3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node0,ctx__$1,bindings);

sci.impl.types.eval(node1,ctx__$1,bindings);

sci.impl.types.eval(node2,ctx__$1,bindings);

return sci.impl.types.eval(node3,ctx__$1,bindings);
}),null);

break;
case (5):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var node2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var node3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var node4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node0,ctx__$1,bindings);

sci.impl.types.eval(node1,ctx__$1,bindings);

sci.impl.types.eval(node2,ctx__$1,bindings);

sci.impl.types.eval(node3,ctx__$1,bindings);

return sci.impl.types.eval(node4,ctx__$1,bindings);
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43952)].join('')));

}
}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__43962 = ctx;
var G__43963 = expr;
var G__43964 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__43962,G__43963,G__43964) : sci.impl.analyzer.return_or.call(null,G__43962,G__43963,G__43964));
})();
var a1_SHARP_ = (function (){var G__43965 = ctx;
var G__43966 = expr;
var G__43967 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__43965,G__43966,G__43967) : sci.impl.analyzer.return_or.call(null,G__43965,G__43966,G__43967));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5025__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
}
}),null);
} else {
var children__$1 = sci.impl.analyzer.analyze_children_tail(ctx,children);
var G__43968 = child_count_SHARP_;
switch (G__43968) {
case (0):
return null;

break;
case (1):
var G__43969 = ctx;
var G__43970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43969,G__43970) : sci.impl.analyzer.analyze.call(null,G__43969,G__43970));

break;
case (2):
var a0_SHARP_ = (function (){var G__43971 = ctx;
var G__43972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43971,G__43972) : sci.impl.analyzer.analyze.call(null,G__43971,G__43972));
})();
var a1_SHARP_ = (function (){var G__43973 = ctx;
var G__43974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43973,G__43974) : sci.impl.analyzer.analyze.call(null,G__43973,G__43974));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5025__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
}
}),null);

break;
case (3):
var a0_SHARP_ = (function (){var G__43975 = ctx;
var G__43976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43975,G__43976) : sci.impl.analyzer.analyze.call(null,G__43975,G__43976));
})();
var a1_SHARP_ = (function (){var G__43977 = ctx;
var G__43978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43977,G__43978) : sci.impl.analyzer.analyze.call(null,G__43977,G__43978));
})();
var a2_SHARP_ = (function (){var G__43979 = ctx;
var G__43980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43979,G__43980) : sci.impl.analyzer.analyze.call(null,G__43979,G__43980));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5025__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return sci.impl.types.eval(a2_SHARP_,ctx__$1,bindings);
}
}
}),null);

break;
case (4):
var a0_SHARP_ = (function (){var G__43981 = ctx;
var G__43982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43981,G__43982) : sci.impl.analyzer.analyze.call(null,G__43981,G__43982));
})();
var a1_SHARP_ = (function (){var G__43983 = ctx;
var G__43984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43983,G__43984) : sci.impl.analyzer.analyze.call(null,G__43983,G__43984));
})();
var a2_SHARP_ = (function (){var G__43985 = ctx;
var G__43986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43985,G__43986) : sci.impl.analyzer.analyze.call(null,G__43985,G__43986));
})();
var a3_SHARP_ = (function (){var G__43987 = ctx;
var G__43988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43987,G__43988) : sci.impl.analyzer.analyze.call(null,G__43987,G__43988));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5025__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = sci.impl.types.eval(a2_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return sci.impl.types.eval(a3_SHARP_,ctx__$1,bindings);
}
}
}
}),null);

break;
case (5):
var a0_SHARP_ = (function (){var G__43991 = ctx;
var G__43992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43991,G__43992) : sci.impl.analyzer.analyze.call(null,G__43991,G__43992));
})();
var a1_SHARP_ = (function (){var G__43993 = ctx;
var G__43994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43993,G__43994) : sci.impl.analyzer.analyze.call(null,G__43993,G__43994));
})();
var a2_SHARP_ = (function (){var G__43995 = ctx;
var G__43996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43995,G__43996) : sci.impl.analyzer.analyze.call(null,G__43995,G__43996));
})();
var a3_SHARP_ = (function (){var G__43998 = ctx;
var G__43999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__43998,G__43999) : sci.impl.analyzer.analyze.call(null,G__43998,G__43999));
})();
var a4_SHARP_ = (function (){var G__44000 = ctx;
var G__44001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44000,G__44001) : sci.impl.analyzer.analyze.call(null,G__44000,G__44001));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var or__5025__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = sci.impl.types.eval(a2_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = sci.impl.types.eval(a3_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return sci.impl.types.eval(a4_SHARP_,ctx__$1,bindings);
}
}
}
}
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43968)].join('')));

}
}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__44002 = ctx;
var G__44003 = expr;
var G__44004 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__44002,G__44003,G__44004) : sci.impl.analyzer.return_and.call(null,G__44002,G__44003,G__44004));
})();
var a1_SHARP_ = (function (){var G__44005 = ctx;
var G__44006 = expr;
var G__44007 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__44005,G__44006,G__44007) : sci.impl.analyzer.return_and.call(null,G__44005,G__44006,G__44007));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5023__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto__)){
return sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
} else {
return and__5023__auto__;
}
}),null);
} else {
var children__$1 = sci.impl.analyzer.analyze_children_tail(ctx,children);
var G__44008 = child_count_SHARP_;
switch (G__44008) {
case (0):
return true;

break;
case (1):
var G__44009 = ctx;
var G__44010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44009,G__44010) : sci.impl.analyzer.analyze.call(null,G__44009,G__44010));

break;
case (2):
var a0_SHARP_ = (function (){var G__44011 = ctx;
var G__44012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44011,G__44012) : sci.impl.analyzer.analyze.call(null,G__44011,G__44012));
})();
var a1_SHARP_ = (function (){var G__44013 = ctx;
var G__44014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44013,G__44014) : sci.impl.analyzer.analyze.call(null,G__44013,G__44014));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5023__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto__)){
return sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
} else {
return and__5023__auto__;
}
}),null);

break;
case (3):
var a0_SHARP_ = (function (){var G__44018 = ctx;
var G__44019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44018,G__44019) : sci.impl.analyzer.analyze.call(null,G__44018,G__44019));
})();
var a1_SHARP_ = (function (){var G__44020 = ctx;
var G__44021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44020,G__44021) : sci.impl.analyzer.analyze.call(null,G__44020,G__44021));
})();
var a2_SHARP_ = (function (){var G__44022 = ctx;
var G__44023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44022,G__44023) : sci.impl.analyzer.analyze.call(null,G__44022,G__44023));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5023__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto____$1)){
return sci.impl.types.eval(a2_SHARP_,ctx__$1,bindings);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}),null);

break;
case (4):
var a0_SHARP_ = (function (){var G__44025 = ctx;
var G__44026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44025,G__44026) : sci.impl.analyzer.analyze.call(null,G__44025,G__44026));
})();
var a1_SHARP_ = (function (){var G__44027 = ctx;
var G__44028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44027,G__44028) : sci.impl.analyzer.analyze.call(null,G__44027,G__44028));
})();
var a2_SHARP_ = (function (){var G__44029 = ctx;
var G__44030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44029,G__44030) : sci.impl.analyzer.analyze.call(null,G__44029,G__44030));
})();
var a3_SHARP_ = (function (){var G__44031 = ctx;
var G__44032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44031,G__44032) : sci.impl.analyzer.analyze.call(null,G__44031,G__44032));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5023__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = sci.impl.types.eval(a2_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto____$2)){
return sci.impl.types.eval(a3_SHARP_,ctx__$1,bindings);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}),null);

break;
case (5):
var a0_SHARP_ = (function (){var G__44033 = ctx;
var G__44034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44033,G__44034) : sci.impl.analyzer.analyze.call(null,G__44033,G__44034));
})();
var a1_SHARP_ = (function (){var G__44035 = ctx;
var G__44036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44035,G__44036) : sci.impl.analyzer.analyze.call(null,G__44035,G__44036));
})();
var a2_SHARP_ = (function (){var G__44037 = ctx;
var G__44038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44037,G__44038) : sci.impl.analyzer.analyze.call(null,G__44037,G__44038));
})();
var a3_SHARP_ = (function (){var G__44039 = ctx;
var G__44040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44039,G__44040) : sci.impl.analyzer.analyze.call(null,G__44039,G__44040));
})();
var a4_SHARP_ = (function (){var G__44041 = ctx;
var G__44042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44041,G__44042) : sci.impl.analyzer.analyze.call(null,G__44041,G__44042));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var and__5023__auto__ = sci.impl.types.eval(a0_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = sci.impl.types.eval(a1_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = sci.impl.types.eval(a2_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto____$2)){
var and__5023__auto____$3 = sci.impl.types.eval(a3_SHARP_,ctx__$1,bindings);
if(cljs.core.truth_(and__5023__auto____$3)){
return sci.impl.types.eval(a4_SHARP_,ctx__$1,bindings);
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44008)].join('')));

}
}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location((function (){var G__44053 = new cljs.core.Keyword(null,"no-recur-reason","no-recur-reason",-1993064353).cljs$core$IFn$_invoke$arity$1(ctx);
var G__44053__$1 = (((G__44053 instanceof cljs.core.Keyword))?G__44053.fqn:null);
switch (G__44053__$1) {
case "try":
return "Cannot recur across try";

break;
default:
return "Can only recur from tail position";

}
})(),expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__44055 = cljs.core.count(analyzed_children);
switch (G__44055) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
(bindings[(0)] = eval_0);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var param0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var param1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var param2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var param3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var param4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var param5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var param6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var param7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var param8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var param9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var param10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var param11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var param12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var param13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var param14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var param15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var param16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var param17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
var param18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var eval_0 = sci.impl.types.eval(arg0,ctx__$1,bindings);
var eval_1 = sci.impl.types.eval(arg1,ctx__$1,bindings);
var eval_2 = sci.impl.types.eval(arg2,ctx__$1,bindings);
var eval_3 = sci.impl.types.eval(arg3,ctx__$1,bindings);
var eval_4 = sci.impl.types.eval(arg4,ctx__$1,bindings);
var eval_5 = sci.impl.types.eval(arg5,ctx__$1,bindings);
var eval_6 = sci.impl.types.eval(arg6,ctx__$1,bindings);
var eval_7 = sci.impl.types.eval(arg7,ctx__$1,bindings);
var eval_8 = sci.impl.types.eval(arg8,ctx__$1,bindings);
var eval_9 = sci.impl.types.eval(arg9,ctx__$1,bindings);
var eval_10 = sci.impl.types.eval(arg10,ctx__$1,bindings);
var eval_11 = sci.impl.types.eval(arg11,ctx__$1,bindings);
var eval_12 = sci.impl.types.eval(arg12,ctx__$1,bindings);
var eval_13 = sci.impl.types.eval(arg13,ctx__$1,bindings);
var eval_14 = sci.impl.types.eval(arg14,ctx__$1,bindings);
var eval_15 = sci.impl.types.eval(arg15,ctx__$1,bindings);
var eval_16 = sci.impl.types.eval(arg16,ctx__$1,bindings);
var eval_17 = sci.impl.types.eval(arg17,ctx__$1,bindings);
var eval_18 = sci.impl.types.eval(arg18,ctx__$1,bindings);
(bindings[(0)] = eval_0);

(bindings[(1)] = eval_1);

(bindings[(2)] = eval_2);

(bindings[(3)] = eval_3);

(bindings[(4)] = eval_4);

(bindings[(5)] = eval_5);

(bindings[(6)] = eval_6);

(bindings[(7)] = eval_7);

(bindings[(8)] = eval_8);

(bindings[(9)] = eval_9);

(bindings[(10)] = eval_10);

(bindings[(11)] = eval_11);

(bindings[(12)] = eval_12);

(bindings[(13)] = eval_13);

(bindings[(14)] = eval_14);

(bindings[(15)] = eval_15);

(bindings[(16)] = eval_16);

(bindings[(17)] = eval_17);

(bindings[(18)] = eval_18);

return new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355);
}),null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44055)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__44072_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__44072_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__44072_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.self_ref_idx = self_ref_idx;
this.iden__GT_invoke_idx = iden__GT_invoke_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k44074,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__44078 = k44074;
var G__44078__$1 = (((G__44078 instanceof cljs.core.Keyword))?G__44078.fqn:null);
switch (G__44078__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "self-ref-idx":
return self__.self_ref_idx;

break;
case "iden->invoke-idx":
return self__.iden__GT_invoke_idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44074,else__5326__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__44079){
var vec__44080 = p__44079;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44080,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44073){
var self__ = this;
var G__44073__$1 = this;
return (new cljs.core.RecordIter((0),G__44073__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44075,other44076){
var self__ = this;
var this44075__$1 = this;
return (((!((other44076 == null)))) && ((((this44075__$1.constructor === other44076.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44075__$1.params,other44076.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44075__$1.body,other44076.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44075__$1.fixed_arity,other44076.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44075__$1.var_arg_name,other44076.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44075__$1.self_ref_idx,other44076.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44075__$1.iden__GT_invoke_idx,other44076.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44075__$1.__extmap,other44076.__extmap)))))))))))))))));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k44074){
var self__ = this;
var this__5330__auto____$1 = this;
var G__44083 = k44074;
var G__44083__$1 = (((G__44083 instanceof cljs.core.Keyword))?G__44083.fqn:null);
switch (G__44083__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44074);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__44073){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__44084 = cljs.core.keyword_identical_QMARK_;
var expr__44085 = k__5332__auto__;
if(cljs.core.truth_((pred__44084.cljs$core$IFn$_invoke$arity$2 ? pred__44084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__44085) : pred__44084.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__44085)))){
return (new sci.impl.analyzer.FnBody(G__44073,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44084.cljs$core$IFn$_invoke$arity$2 ? pred__44084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__44085) : pred__44084.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__44085)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__44073,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44084.cljs$core$IFn$_invoke$arity$2 ? pred__44084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__44085) : pred__44084.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__44085)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__44073,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44084.cljs$core$IFn$_invoke$arity$2 ? pred__44084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__44085) : pred__44084.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__44085)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__44073,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44084.cljs$core$IFn$_invoke$arity$2 ? pred__44084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__44085) : pred__44084.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__44085)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__44073,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44084.cljs$core$IFn$_invoke$arity$2 ? pred__44084.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__44085) : pred__44084.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__44085)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__44073,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__44073),null));
}
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),self__.fixed_arity,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),self__.var_arg_name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),self__.self_ref_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),self__.iden__GT_invoke_idx,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__44073){
var self__ = this;
var this__5322__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__44073,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"fixed-arity","fixed-arity",-1067989900,null),new cljs.core.Symbol(null,"var-arg-name","var-arg-name",540506640,null),new cljs.core.Symbol(null,"self-ref-idx","self-ref-idx",255993715,null),new cljs.core.Symbol(null,"iden->invoke-idx","iden->invoke-idx",-157095499,null)], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__44077){
var extmap__5365__auto__ = (function (){var G__44087 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44077,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__44077)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44087);
} else {
return G__44087;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__44077),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__44077),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__44077),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__44077),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__44077),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__44077),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__44089,p__44090,_macro_QMARK_,fn_name,fn_id){
var map__44092 = p__44089;
var map__44092__$1 = cljs.core.__destructure_map(map__44092);
var ctx = map__44092__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44092__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__44093 = p__44090;
var seq__44094 = cljs.core.seq(vec__44093);
var first__44095 = cljs.core.first(seq__44094);
var seq__44094__$1 = cljs.core.next(seq__44094);
var binding_vector = first__44095;
var body_exprs = seq__44094__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var vec__44097 = cljs.core.split_with((function (p1__44088_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__44088_SHARP_);
}),binding_vector);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44097,(0),null);
var vec__44100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44097,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44100,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44100,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__44103 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__44103,var_arg_name);
} else {
return G__44103;
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"params","params",710516235),param_names);
var param_count = cljs.core.count(param_names);
var param_idens = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(param_count,cljs.core.gensym);
var param_bindings = cljs.core.zipmap(param_names,param_idens);
var iden__GT_invoke_idx = cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var bindings = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$1),param_names);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx);
var ctx__$4 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$3,new cljs.core.Keyword(null,"parents","parents",-2027538891),cljs.core.conj,(function (){var or__5025__auto__ = var_arg_name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return fixed_arity;
}
})());
var ___$1 = cljs.core._vreset_BANG_(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4),cljs.core.assoc_in(cljs.core._deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)),cljs.core.zipmap(param_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__44110 = ctx__$4;
var G__44111 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__44112 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__44110,G__44111,G__44112) : sci.impl.analyzer.update_parents.call(null,G__44110,G__44111,G__44112));
})():null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body_exprs);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__44115 = sci.impl.analyzer.__GT_FnBody(binding_vector,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44115,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__44115;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__44120 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__44121 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44120,G__44121) : sci.impl.analyzer.analyze.call(null,G__44120,G__44121));
})(),cljs.core.assoc,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905)):m);
return m__$1;
});
sci.impl.analyzer.single_arity_fn = (function sci$impl$analyzer$single_arity_fn(bindings_fn,fn_body,fn_name,self_ref_in_enclosed_idx,self_ref_QMARK_,nsm,fn_meta,macro_QMARK_){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var copy_enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,body,fn_name,macro_QMARK_,fixed_arity,copy_enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx);
var f__$1 = (((fn_meta == null))?f:(function (){var fn_meta__$1 = sci.impl.types.eval(fn_meta,ctx,bindings);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__44125_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__44125_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
})):f__$1);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[self_ref_in_enclosed_idx] = f__$2);
} else {
}

return f__$2;
}),null);
});
sci.impl.analyzer.multi_arity_fn_body = (function sci$impl$analyzer$multi_arity_fn_body(fn_body,fn_name,nsm){
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
var copy_enclosed__GT_invocation = new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body);
var invoc_size = new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body);
var body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body);
var vararg_idx = new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body);
return (function (enclosed_array){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,body,fn_name,sci.impl.utils.macro_QMARK_,fixed_arity,copy_enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx);
return f;
}),null);
});
});
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__44131){
var vec__44148 = p__44131;
var seq__44149 = cljs.core.seq(vec__44148);
var first__44150 = cljs.core.first(seq__44149);
var seq__44149__$1 = cljs.core.next(seq__44149);
var _fn = first__44150;
var first__44150__$1 = cljs.core.first(seq__44149__$1);
var seq__44149__$2 = cljs.core.next(seq__44149__$1);
var name_QMARK_ = first__44150__$1;
var body = seq__44149__$2;
var fn_expr = vec__44148;
var fn_expr_m = cljs.core.meta(fn_expr);
var fn_extra_m = new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073).cljs$core$IFn$_invoke$arity$1(fn_expr_m);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(fn_extra_m);
var defn_name = new cljs.core.Keyword(null,"fn-name","fn-name",-766594004).cljs$core$IFn$_invoke$arity$1(fn_extra_m);
var fn_expr_m__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fn_expr_m,new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073));
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985),fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var fn_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parents = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY)(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$1),fn_id);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.Keyword(null,"parents","parents",-2027538891),parents);
var ctx__$3 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),fn_id):ctx__$2);
var fn_name__$1 = (function (){var or__5025__auto__ = defn_name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return fn_name;
}
})();
var bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx__$3);
var bound_idens = cljs.core.set(cljs.core.vals(bindings));
var ctx__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"outer-idens","outer-idens",1197381241),bound_idens);
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44154,body__$2){
var map__44155 = p__44154;
var map__44155__$1 = cljs.core.__destructure_map(map__44155);
var acc = map__44155__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44155__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44155__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
var orig_body = body__$2;
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$4,body__$2,macro_QMARK_,fn_name__$1,fn_id);
var var_arg_name = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(body__$3);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(body__$3);
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__5023__auto__ = var_arg_name;
if(cljs.core.truth_(and__5023__auto__)){
return min_varargs;
} else {
return and__5023__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(var_arg_name);
if(and__5023__auto__){
var and__5023__auto____$1 = min_varargs;
if(cljs.core.truth_(and__5023__auto____$1)){
return (fixed_arity > min_varargs);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596),new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(function (){var x__5110__auto__ = fixed_arity;
var y__5111__auto__ = max_fixed;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], 0)),new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(body__$3,new cljs.core.Keyword(null,"orig","orig",-1678309870),orig_body)),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bodies","bodies",-1295887172),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"min-var-args","min-var-args",-1883389660),null,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(-1)], null),bodies);
var cb_idens_by_arity = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),parents);
var cb_idens = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.vals(cb_idens_by_arity)));
var self_ref_QMARK_ = (cljs.core.truth_(fn_name__$1)?cljs.core.contains_QMARK_(cb_idens,fn_id):null);
var closed_over_idens = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(bound_idens,cljs.core.keys(cb_idens));
var iden__GT_invoke_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(closure_bindings),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(parents),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var closed_over_iden__GT_binding_idx = (cljs.core.truth_(iden__GT_invoke_idx)?cljs.core.zipmap(closed_over_idens,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,closed_over_idens)):null);
var closed_over_cnt = cljs.core.count(closed_over_idens);
var iden__GT_enclosed_idx = cljs.core.zipmap(closed_over_idens,cljs.core.range.cljs$core$IFn$_invoke$arity$1(closed_over_cnt));
var iden__GT_enclosed_idx__$1 = (cljs.core.truth_(fn_name__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_enclosed_idx,fn_id,closed_over_cnt):iden__GT_enclosed_idx);
var vec__44151 = (((function (){var or__5025__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__44177 = closed_over_cnt;
if(cljs.core.truth_(fn_name__$1)){
return (G__44177 + (1));
} else {
return G__44177;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5825__auto__)){
var binding_idx = temp__5825__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__44178 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44178[(0)] = binding_idx);

(G__44178[(1)] = enclosed_idx);

return G__44178;
} else {
return null;
}
}),closed_over_idens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (bindings__$1){
var a__5613__auto__ = binding__GT_enclosed;
var l__5614__auto__ = a__5613__auto__.length;
var idx = (0);
var ret = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(enclosed_array_cnt);
while(true){
if((idx < l__5614__auto__)){
var G__45646 = (idx + (1));
var G__45647 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__45646;
ret = G__45647;
continue;
} else {
return ret;
}
break;
}
}),enclosed_array_cnt], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly(null)], null));
var bindings_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44151,(0),null);
var enclosed_array_cnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44151,(1),null);
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5825__auto__)){
var invocation_idx = temp__5825__auto__;
var G__44203 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44203[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__44203[(1)] = invocation_idx);

return G__44203;
} else {
return null;
}
}),closed_over_idens));
var invoc_size = cljs.core.count(iden__GT_invocation_idx);
var copy_enclosed__GT_invocation = (((enclosed__GT_invocation.length > (0)))?(function (enclosed_array,invoc_array){
var a__5613__auto__ = enclosed__GT_invocation;
var l__5614__auto__ = a__5613__auto__.length;
var idx = (0);
var ret = invoc_array;
while(true){
if((idx < l__5614__auto__)){
var G__45648 = (idx + (1));
var G__45649 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__45648;
ret = G__45649;
continue;
} else {
return ret;
}
break;
}
}):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(body__$2,new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058),invoc_size,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invocation-self-idx","invocation-self-idx",-1258983407),invocation_self_idx,new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729),copy_enclosed__GT_invocation], 0));
}),bodies__$1);
var fn_meta = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(fn_expr_m__$1,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095)], 0));
var fn_meta__$1 = ((cljs.core.seq(fn_meta))?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$4,fn_meta) : sci.impl.analyzer.analyze.call(null,ctx__$4,fn_meta)):null);
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(bodies__$2)))?cljs.core.first(bodies__$2):null);
var nsm = sci.impl.utils.current_ns_name();
var self_ref_in_enclosed_idx = (function (){var G__44204 = enclosed_array_cnt;
if((G__44204 == null)){
return null;
} else {
return (G__44204 - (1));
}
})();
var ret = (cljs.core.truth_(single_arity)?sci.impl.analyzer.single_arity_fn(bindings_fn,single_arity,fn_name__$1,self_ref_in_enclosed_idx,self_ref_QMARK_,nsm,fn_meta__$1,macro_QMARK_):(function (){var arities = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.analyzer.multi_arity_fn_body(fn_body,fn_name__$1,nsm);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,bodies__$2);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$5,bindings__$1){
var enclosed_array = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings__$1) : bindings_fn.call(null,bindings__$1));
var f = (function() { 
var G__45650__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5823__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
var f__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(enclosed_array) : f.call(null,enclosed_array));
var f__$2 = sci.impl.types.eval(f__$1,ctx__$5,bindings__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$2,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name__$1)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__45650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45651__i = 0, G__45651__a = new Array(arguments.length -  0);
while (G__45651__i < G__45651__a.length) {G__45651__a[G__45651__i] = arguments[G__45651__i + 0]; ++G__45651__i;}
  args = new cljs.core.IndexedSeq(G__45651__a,0,null);
} 
return G__45650__delegate.call(this,args);};
G__45650.cljs$lang$maxFixedArity = 0;
G__45650.cljs$lang$applyTo = (function (arglist__45652){
var args = cljs.core.seq(arglist__45652);
return G__45650__delegate(args);
});
G__45650.cljs$core$IFn$_invoke$arity$variadic = G__45650__delegate;
return G__45650;
})()
;
var f__$1 = (((fn_meta__$1 == null))?f:(function (){var fn_meta__$2 = sci.impl.types.eval(fn_meta__$1,ctx__$5,bindings__$1);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$2);
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__44130_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__44130_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
})):f__$1);
if(cljs.core.truth_(self_ref_QMARK_)){
(enclosed_array[self_ref_in_enclosed_idx] = f__$2);
} else {
}

return f__$2;
}),null);
})());
if(cljs.core.truth_(defn_name)){
return cljs.core.with_meta(ret,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(analyzed_bodies)], null));
} else {
return ret;
}
});
/**
 * :syms = closed over values
 */
sci.impl.analyzer.update_parents = (function sci$impl$analyzer$update_parents(ctx,closure_bindings,ob){
var parents = new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx);
var new_cb = cljs.core._vreset_BANG_(closure_bindings,(function (cb){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762)),(function (iden__GT_invoke_idx){
if(cljs.core.contains_QMARK_(iden__GT_invoke_idx,ob)){
return iden__GT_invoke_idx;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,ob,cljs.core.count(iden__GT_invoke_idx));
}
}));
})(cljs.core._deref(closure_bindings)));
var closure_idx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parents,new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ob], 0)));
return closure_idx;
});
sci.impl.analyzer.analyze_let_STAR_ = (function sci$impl$analyzer$analyze_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
if((cljs.core.count(destructured_let_bindings) > (10))){
var G__44237 = ctx;
var G__44238 = expr;
var G__44239 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings);
var G__44240 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings)),exprs),cljs.core.meta(expr))], null);
return (sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4 ? sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4(G__44237,G__44238,G__44239,G__44240) : sci.impl.analyzer.analyze_let_STAR_.call(null,G__44237,G__44238,G__44239,G__44240));
} else {
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var stack = sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(expr),true);
var vec__44241 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44244,p__44245){
var vec__44246 = p__44244;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44246,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44246,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44246,(2),null);
var vec__44249 = p__44245;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44249,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$2,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$2,binding_value));
var new_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cb = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idx = sci.impl.analyzer.update_parents(ctx__$2,cb,new_iden);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var iden__GT_invoke_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(iden__GT_invoke_idx,new_iden,idx);
var ctx__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$2,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),iden__GT_invoke_idx__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),(function (p1__44220_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__44220_SHARP_,binding_name__$1),binding_name__$1,new_iden);
})),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(let_nodes,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44241,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
var G__44252 = cljs.core.count(idxs);
switch (G__44252) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
return sci.impl.types.eval(body,ctx__$3,bindings);
}),stack);

break;
case (1):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(0));
var idx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
var val0 = sci.impl.types.eval(node0,ctx__$3,bindings);
(bindings[idx0] = val0);

return sci.impl.types.eval(body,ctx__$3,bindings);
}),stack);

break;
case (2):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(1));
var idx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(0));
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
var val0 = sci.impl.types.eval(node0,ctx__$3,bindings);
(bindings[idx0] = val0);

var val1 = sci.impl.types.eval(node1,ctx__$3,bindings);
(bindings[idx1] = val1);

return sci.impl.types.eval(body,ctx__$3,bindings);
}),stack);

break;
case (3):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(1));
var node2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(2));
var idx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(0));
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(1));
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
var val0 = sci.impl.types.eval(node0,ctx__$3,bindings);
(bindings[idx0] = val0);

var val1 = sci.impl.types.eval(node1,ctx__$3,bindings);
(bindings[idx1] = val1);

var val2 = sci.impl.types.eval(node2,ctx__$3,bindings);
(bindings[idx2] = val2);

return sci.impl.types.eval(body,ctx__$3,bindings);
}),stack);

break;
case (4):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(1));
var node2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(2));
var node3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(3));
var idx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(0));
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(1));
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(2));
var idx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
var val0 = sci.impl.types.eval(node0,ctx__$3,bindings);
(bindings[idx0] = val0);

var val1 = sci.impl.types.eval(node1,ctx__$3,bindings);
(bindings[idx1] = val1);

var val2 = sci.impl.types.eval(node2,ctx__$3,bindings);
(bindings[idx2] = val2);

var val3 = sci.impl.types.eval(node3,ctx__$3,bindings);
(bindings[idx3] = val3);

return sci.impl.types.eval(body,ctx__$3,bindings);
}),stack);

break;
case (5):
var node0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(0));
var node1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(1));
var node2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(2));
var node3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(3));
var node4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(let_nodes,(4));
var idx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(0));
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(1));
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(2));
var idx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(3));
var idx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(idxs,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$3,bindings){
var val0 = sci.impl.types.eval(node0,ctx__$3,bindings);
(bindings[idx0] = val0);

var val1 = sci.impl.types.eval(node1,ctx__$3,bindings);
(bindings[idx1] = val1);

var val2 = sci.impl.types.eval(node2,ctx__$3,bindings);
(bindings[idx2] = val2);

var val3 = sci.impl.types.eval(node3,ctx__$3,bindings);
(bindings[idx3] = val3);

var val4 = sci.impl.types.eval(node4,ctx__$3,bindings);
(bindings[idx4] = val4);

return sci.impl.types.eval(body,ctx__$3,bindings);
}),stack);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44252)].join('')));

}
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__44290){
var vec__44291 = p__44290;
var seq__44292 = cljs.core.seq(vec__44291);
var first__44293 = cljs.core.first(seq__44292);
var seq__44292__$1 = cljs.core.next(seq__44292);
var _let = first__44293;
var first__44293__$1 = cljs.core.first(seq__44292__$1);
var seq__44292__$2 = cljs.core.next(seq__44292__$1);
var let_bindings = first__44293__$1;
var exprs = seq__44292__$2;
var expr = vec__44291;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_45654 = sci.impl.utils.current_ns_name();
var env_45655 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_45656 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_45655),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_45654], null));
var refers_45657 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_45656);
var the_current_ns_45658__$1 = (function (){var temp__5823__auto__ = (function (){var and__5023__auto__ = refers_45657;
if(cljs.core.truth_(and__5023__auto__)){
return refers_45657.get(name);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var x = temp__5823__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_45654)].join(''),expr);
} else {
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_45656,name);
if(cljs.core.truth_(temp__5823__auto____$1)){
var the_var = temp__5823__auto____$1;
var cur_file = cljs.core.deref(sci.impl.utils.current_file);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_file,new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(the_var)))){
} else {
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(the_var,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cur_file], 0));
}

return the_current_ns_45656;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_45656,name,(function (){var G__44295 = (new sci.lang.Var(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_45654),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], null),false,false,null));
G__44295.sci$impl$vars$IVar$unbind$arity$1(null);

return G__44295;
})());
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_45655,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_45654,the_current_ns_45658__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__44303 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44303,(3),null);
var curr_ns = cljs.core.deref(sci.impl.utils.current_ns);
var simple_QMARK_ = cljs.core.simple_symbol_QMARK_(var_name);
if(((simple_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(curr_ns)))))){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var var_name__$1 = ((simple_QMARK_)?var_name:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(var_name)));
sci.impl.analyzer.init_var_BANG_(ctx__$1,var_name__$1,expr);

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?sci.impl.utils.var_unbound:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,init) : sci.impl.analyzer.analyze.call(null,ctx__$1,init)));
var expr_loc = cljs.core.meta(expr);
var expr_loc_QMARK_ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expr_loc);
var var_meta = cljs.core.meta(var_name__$1);
var m = (cljs.core.truth_(expr_loc_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(var_meta,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(expr_loc)),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(expr_loc)):(function (){var top_level_loc = sci.impl.utils._STAR_top_level_location_STAR_;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(var_meta,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(top_level_loc)),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(top_level_loc));
})());
var m_needs_eval_QMARK_ = var_meta;
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"ns","ns",441598760),curr_ns);
var m__$2 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m__$1);
var m__$3 = (cljs.core.truth_(m_needs_eval_QMARK_)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m__$2) : sci.impl.analyzer.analyze.call(null,ctx__$1,m__$2)):sci.impl.types.__GT_constant(m__$2));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_def(ctx__$2,bindings,var_name__$1,init__$1,m__$3);
}),null);
});
sci.impl.analyzer.analyze_loop_STAR_ = (function sci$impl$analyzer$analyze_loop_STAR_(ctx,expr){
var bv = cljs.core.second(expr);
var syms = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var body = cljs.core.nnext(expr);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,(1),null)),(new cljs.core.List(null,bv,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(syms),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null))], 0))));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ctx__$1 = sci.impl.analyzer.with_recur_target(ctx,true);
var ana = sci.impl.analyzer.return_do(ctx__$1,expr,body);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.types.eval(ana,ctx__$2,bindings);
}),null,null));
}),null);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
var G__44328 = cljs.core.count(children);
switch (G__44328) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return null;
}
}),stack);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.types.eval(condition,ctx__$1,bindings))){
return sci.impl.types.eval(then,ctx__$1,bindings);
} else {
return sci.impl.types.eval(else$,ctx__$1,bindings);
}
}),stack);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case_STAR_ = (function sci$impl$analyzer$analyze_case_STAR_(ctx,expr){
var ctx_wo_rt = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var case_val = (function (){var G__44337 = ctx_wo_rt;
var G__44338 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44337,G__44338) : sci.impl.analyzer.analyze.call(null,G__44337,G__44338));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__44334 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__44340 = ctx;
var G__44341 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44340,G__44341) : sci.impl.analyzer.analyze.call(null,G__44340,G__44341));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44334,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44334,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__44348 = cases__$1;
var seq__44349 = cljs.core.seq(vec__44348);
var first__44350 = cljs.core.first(seq__44349);
var seq__44349__$1 = cljs.core.next(seq__44349);
var k = first__44350;
var first__44350__$1 = cljs.core.first(seq__44349__$1);
var seq__44349__$2 = cljs.core.next(seq__44349__$1);
var v = first__44350__$1;
var cases__$2 = seq__44349__$2;
if(cljs.core.seq_QMARK_(k)){
var G__45660 = cases__$2;
var G__45661 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__44348,seq__44349,first__44350,seq__44349__$1,k,first__44350__$1,seq__44349__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__44334,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__44348,seq__44349,first__44350,seq__44349__$1,k,first__44350__$1,seq__44349__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__44334,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__45660;
ret_map = G__45661;
continue;
} else {
var G__45662 = cases__$2;
var G__45663 = assoc_new(ret_map,k,v);
cases__$1 = G__45662;
ret_map = G__45663;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}),null):sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}),null));
return f;
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"try","try",1380742522));
var body = cljs.core.next(expr);
var stack = sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(expr),true);
var vec__44354 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__45664 = exprs__$1;
var G__45665 = body_exprs;
var G__45666 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__45667 = finally_expr;
exprs = G__45664;
body_exprs = G__45665;
catch_exprs = G__45666;
finally_expr = G__45667;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__45668 = exprs__$1;
var G__45669 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__45670 = catch_exprs;
var G__45671 = finally_expr;
exprs = G__45668;
body_exprs = G__45669;
catch_exprs = G__45670;
finally_expr = G__45671;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44354,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44354,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44354,(2),null);
var body__$1 = (function (){var G__44364 = ctx__$1;
var G__44365 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44364,G__44365) : sci.impl.analyzer.analyze.call(null,G__44364,G__44365));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__44366 = c;
var seq__44367 = cljs.core.seq(vec__44366);
var first__44368 = cljs.core.first(seq__44367);
var seq__44367__$1 = cljs.core.next(seq__44367);
var _ = first__44368;
var first__44368__$1 = cljs.core.first(seq__44367__$1);
var seq__44367__$2 = cljs.core.next(seq__44367__$1);
var ex = first__44368__$1;
var first__44368__$2 = cljs.core.first(seq__44367__$2);
var seq__44367__$3 = cljs.core.next(seq__44367__$2);
var binding = first__44368__$2;
var body__$2 = seq__44367__$3;
var temp__5823__auto__ = (function (){var G__44373 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__44373)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__44373)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__44373)){
return new cljs.core.Keyword(null,"default","default",-1987822328);
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var clazz = temp__5823__auto__;
var ex_iden = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var closure_bindings = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$1);
var ex_idx = sci.impl.analyzer.update_parents(ctx__$1,closure_bindings,ex_iden);
var ctx__$2 = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ctx__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(function (bindings){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bindings,binding),binding,ex_iden);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),ex_iden], null),ex_idx);
var analyzed_body = (function (){var G__44374 = ctx__$2;
var G__44375 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44374,G__44375) : sci.impl.analyzer.analyze.call(null,G__44374,G__44375));
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),clazz,new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805),ex_idx,new cljs.core.Keyword(null,"body","body",-2049205669),analyzed_body,new cljs.core.Keyword(null,"ex","ex",-1413771341),ex], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var sci_error = (function (){var fst = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(catches__$1)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(catches__$1,(0)):null);
var ex = new cljs.core.Keyword(null,"ex","ex",-1413771341).cljs$core$IFn$_invoke$arity$1(fst);
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),ex);
if(and__5023__auto__){
var G__44381 = ex;
var G__44381__$1 = (((G__44381 == null))?null:cljs.core.meta(G__44381));
if((G__44381__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci","error","sci/error",-979082803).cljs$core$IFn$_invoke$arity$1(G__44381__$1);
}
} else {
return and__5023__auto__;
}
})();
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__44382 = ctx__$1;
var G__44383 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__44382,G__44383) : sci.impl.analyzer.analyze.call(null,G__44382,G__44383));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1,sci_error);
}),stack);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__44388){
var vec__44390 = p__44388;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44390,(1),null);
var expr = vec__44390;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,ex) : sci.impl.analyzer.analyze.call(null,ctx__$1,ex));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword(null,"special","special",-1125941630),true], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx__$2,bindings,sci.impl.types.eval(ana,ctx__$2,bindings),this$);
}),stack);
});
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__44396){
var vec__44399 = p__44396;
var seq__44400 = cljs.core.seq(vec__44399);
var first__44401 = cljs.core.first(seq__44400);
var seq__44400__$1 = cljs.core.next(seq__44400);
var _dot = first__44401;
var first__44401__$1 = cljs.core.first(seq__44400__$1);
var seq__44400__$2 = cljs.core.next(seq__44400__$1);
var instance_expr = first__44401__$1;
var first__44401__$2 = cljs.core.first(seq__44400__$2);
var seq__44400__$3 = cljs.core.next(seq__44400__$2);
var method_expr = first__44401__$2;
var args = seq__44400__$3;
var expr = vec__44399;
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__44402 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__44403 = cljs.core.seq(vec__44402);
var first__44404 = cljs.core.first(seq__44403);
var seq__44403__$1 = cljs.core.next(seq__44403);
var method_expr__$1 = first__44404;
var args__$1 = seq__44403__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx__$1,instance_expr));
var method_name = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx__$1,args__$1):null);
var res = (function (){var field_access = clojure.string.starts_with_QMARK_(method_name,"-");
var meth_name = ((field_access)?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_name,(1)):method_name);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var allowed_QMARK_ = (function (){var or__5025__auto__ = sci.impl.unrestrict._STAR_unrestricted_STAR_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (method_expr__$1 === sci.impl.utils.allowed_append);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"allow","allow",-1857325745).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1))));
}
}
})();
var args__$3 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args__$2);
return cljs.core.with_meta((function (){var G__44409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean$(allowed_QMARK_),cljs.core.boolean$(field_access)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__44409)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.allowed_instance_field_invocation(ctx__$2,bindings,instance_expr__$1,meth_name);
}),stack);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__44409)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.allowed_instance_method_invocation(ctx__$2,bindings,instance_expr__$1,meth_name,args__$3,null);
}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$2,bindings,instance_expr__$1,meth_name,field_access,args__$3,allowed_QMARK_,null);
}),stack);

}
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719),instance_expr__$1,new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667),method_name], null));
})();
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__44418){
var vec__44419 = p__44418;
var seq__44420 = cljs.core.seq(vec__44419);
var first__44421 = cljs.core.first(seq__44420);
var seq__44420__$1 = cljs.core.next(seq__44420);
var method_name = first__44421;
var first__44421__$1 = cljs.core.first(seq__44420__$1);
var seq__44420__$2 = cljs.core.next(seq__44420__$1);
var obj = first__44421__$1;
var args = seq__44420__$2;
var expr = vec__44419;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,cljs.core.with_meta((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)),cljs.core.meta(expr)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__44423){
var vec__44424 = p__44423;
var seq__44425 = cljs.core.seq(vec__44424);
var first__44426 = cljs.core.first(seq__44425);
var seq__44425__$1 = cljs.core.next(seq__44425);
var _new = first__44426;
var first__44426__$1 = cljs.core.first(seq__44425__$1);
var seq__44425__$2 = cljs.core.next(seq__44425__$1);
var class_sym = first__44426__$1;
var args = seq__44425__$2;
var expr = vec__44424;
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
if((class_sym instanceof cljs.core.Symbol)){
var temp__5823__auto__ = (function (){var or__5025__auto__ = (function (){var temp__5825__auto__ = (function (){var temp__5825__auto__ = sci.impl.interop.resolve_class_opts(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5825__auto__)){
var opts = temp__5825__auto__;
var or__5025__auto__ = new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(opts);
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var clazz = temp__5825__auto__;
return clazz;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx__$1,class_sym,false);
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var class$ = temp__5823__auto__;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var var_QMARK_ = sci.impl.utils.var_QMARK_(class$);
var maybe_var = ((var_QMARK_)?class$:null);
var maybe_record = ((var_QMARK_)?cljs.core.deref(maybe_var):(((class$ instanceof cljs.core.Symbol))?class$:null));
var maybe_record_constructor = (cljs.core.truth_(maybe_record)?new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(maybe_record)):null);
if(cljs.core.truth_(maybe_record_constructor)){
var G__44430 = ctx__$1;
var G__44431 = expr;
var G__44432 = maybe_record_constructor;
var G__44433 = args__$1;
var G__44434 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__44435 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__44430,G__44431,G__44432,G__44433,G__44434,G__44435) : sci.impl.analyzer.return_call.call(null,G__44430,G__44431,G__44432,G__44433,G__44434,G__44435));
} else {
if(var_QMARK_){
var args__$2 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args__$1);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_js_constructor_STAR_(ctx__$2,bindings,cljs.core.deref(maybe_var),args__$2);
}),null);
} else {
if((class$ instanceof sci.impl.types.NodeR)){
var args__$2 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args__$1);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_js_constructor_STAR_(ctx__$2,bindings,sci.impl.types.eval(class$,ctx__$2,bindings),args__$2);
}),null);
} else {
var args__$2 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args__$1);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_js_constructor_STAR_(ctx__$2,bindings,class$,args__$2);
}),null);

}
}
}
} else {
var temp__5823__auto____$1 = sci.impl.records.resolve_record_class(ctx__$1,class_sym);
if(cljs.core.truth_(temp__5823__auto____$1)){
var record = temp__5823__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var G__44440 = ctx__$1;
var G__44441 = expr;
var G__44442 = new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__44443 = args__$1;
var G__44444 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__44445 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__44440,G__44441,G__44442,G__44443,G__44444,G__44445) : sci.impl.analyzer.return_call.call(null,G__44440,G__44441,G__44442,G__44443,G__44444,G__44445));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
} else {
var class$ = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,class_sym) : sci.impl.analyzer.analyze.call(null,ctx__$1,class_sym));
var args__$1 = sci.impl.analyzer.analyze_children(ctx__$1,args);
var args__$2 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args__$1);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.interop.invoke_js_constructor_STAR_(ctx__$2,bindings,sci.impl.types.eval(class$,ctx__$2,bindings),args__$2);
}),null);
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__44450){
var vec__44451 = p__44450;
var seq__44452 = cljs.core.seq(vec__44451);
var first__44453 = cljs.core.first(seq__44452);
var seq__44452__$1 = cljs.core.next(seq__44452);
var constructor_sym = first__44453;
var args = seq__44452__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(constructor_sym),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e44455){if((e44455 instanceof Error)){
var e = e44455;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e44455;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__44459){
var vec__44460 = p__44459;
var seq__44461 = cljs.core.seq(vec__44460);
var first__44462 = cljs.core.first(seq__44461);
var seq__44461__$1 = cljs.core.next(seq__44461);
var _ns = first__44462;
var first__44462__$1 = cljs.core.first(seq__44461__$1);
var seq__44461__$2 = cljs.core.next(seq__44461__$1);
var ns_name = first__44462__$1;
var exprs = seq__44461__$2;
var expr = vec__44460;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__44467 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44467,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44467,(1),null);
var vec__44470 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44470,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44470,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__44487 = cljs.core.first(exprs__$3);
var seq__44488 = cljs.core.seq(vec__44487);
var first__44489 = cljs.core.first(seq__44488);
var seq__44488__$1 = cljs.core.next(seq__44488);
var k = first__44489;
var args = seq__44488__$1;
var expr__$1 = vec__44487;
var G__44490 = k;
var G__44490__$1 = (((G__44490 instanceof cljs.core.Keyword))?G__44490.fqn:null);
switch (G__44490__$1) {
case "require":
case "require-macros":
case "use":
case "import":
case "refer-clojure":
var G__45673 = cljs.core.next(exprs__$3);
var G__45674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__44491 = k;
var G__44491__$1 = (((G__44491 instanceof cljs.core.Keyword))?G__44491.fqn:null);
switch (G__44491__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "require-macros":
return sci.impl.load.eval_require_macros;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__44491,G__44491__$1,G__44490,G__44490__$1,vec__44487,seq__44488,first__44489,seq__44488__$1,k,args,expr__$1,vec__44467,docstring,exprs__$1,vec__44470,attr_map,exprs__$2,attr_map__$1,vec__44460,seq__44461,first__44462,seq__44461__$1,_ns,first__44462__$1,seq__44461__$2,ns_name,exprs,expr){
return (function() { 
var G__45676__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__45676 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__45677__i = 0, G__45677__a = new Array(arguments.length -  1);
while (G__45677__i < G__45677__a.length) {G__45677__a[G__45677__i] = arguments[G__45677__i + 1]; ++G__45677__i;}
  args__$1 = new cljs.core.IndexedSeq(G__45677__a,0,null);
} 
return G__45676__delegate.call(this,ctx__$1,args__$1);};
G__45676.cljs$lang$maxFixedArity = 1;
G__45676.cljs$lang$applyTo = (function (arglist__45678){
var ctx__$1 = cljs.core.first(arglist__45678);
var args__$1 = cljs.core.rest(arglist__45678);
return G__45676__delegate(ctx__$1,args__$1);
});
G__45676.cljs$core$IFn$_invoke$arity$variadic = G__45676__delegate;
return G__45676;
})()
;
;})(exprs__$3,ret,G__44491,G__44491__$1,G__44490,G__44490__$1,vec__44487,seq__44488,first__44489,seq__44488__$1,k,args,expr__$1,vec__44467,docstring,exprs__$1,vec__44470,attr_map,exprs__$2,attr_map__$1,vec__44460,seq__44461,first__44462,seq__44461__$1,_ns,first__44462__$1,seq__44461__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44491__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__45673;
ret = G__45674;
continue;

break;
case "gen-class":
var G__45679 = cljs.core.next(exprs__$3);
var G__45680 = ret;
exprs__$3 = G__45679;
ret = G__45680;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44490__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__44467,docstring,exprs__$1,vec__44470,attr_map,exprs__$2,attr_map__$1,vec__44460,seq__44461,first__44462,seq__44461__$1,_ns,first__44462__$1,seq__44461__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__44467,docstring,exprs__$1,vec__44470,attr_map,exprs__$2,attr_map__$1,vec__44460,seq__44461,first__44462,seq__44461__$1,_ns,first__44462__$1,seq__44461__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__44492){
var vec__44493 = p__44492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44493,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44493,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__44505){
var vec__44506 = p__44505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44506,(2),null);
var expr = vec__44506;
if((obj instanceof cljs.core.Symbol)){
var sym = obj;
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
if(sci.impl.utils.var_QMARK_(obj__$1)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.types.setVal(obj__$1,v__$2);
}),null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj__$1)))){
var instance = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Symbol(null,"__sci_this","__sci_this",-193704996,null));
var mutator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->mutator","local->mutator",1004070878).cljs$core$IFn$_invoke$arity$1(ctx),sym);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
var instance__$1 = sci.impl.types.eval(instance,ctx__$1,bindings);
return (mutator.cljs$core$IFn$_invoke$arity$2 ? mutator.cljs$core$IFn$_invoke$arity$2(instance__$1,v__$2) : mutator.call(null,instance__$1,v__$2));
}),null);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var info = cljs.core.meta(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl.analyzer","method-name","sci.impl.analyzer/method-name",-842600667).cljs$core$IFn$_invoke$arity$1(info),(1));
var obj__$2 = new cljs.core.Keyword("sci.impl.analyzer","instance-expr","sci.impl.analyzer/instance-expr",629338719).cljs$core$IFn$_invoke$arity$1(info);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var obj__$3 = sci.impl.types.eval(obj__$2,ctx__$1,bindings);
var v__$2 = sci.impl.types.eval(v__$1,ctx__$1,bindings);
return sci.impl.analyzer.goog$module$goog$object.set(obj__$3,k,v__$2);
}),null);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,idx,f,analyzed_children,stack){
var G__44515 = cljs.core.count(analyzed_children);
switch (G__44515) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__44517 = (bindings[idx]);
return (fexpr__44517.cljs$core$IFn$_invoke$arity$0 ? fexpr__44517.cljs$core$IFn$_invoke$arity$0() : fexpr__44517.call(null));
}catch (e44516){if((e44516 instanceof Error)){
var e__43611__auto__ = e44516;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44516;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44525 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__44524 = (bindings[idx]);
return (fexpr__44524.cljs$core$IFn$_invoke$arity$1 ? fexpr__44524.cljs$core$IFn$_invoke$arity$1(G__44525) : fexpr__44524.call(null,G__44525));
}catch (e44519){if((e44519 instanceof Error)){
var e__43611__auto__ = e44519;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44519;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44528 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44529 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__44527 = (bindings[idx]);
return (fexpr__44527.cljs$core$IFn$_invoke$arity$2 ? fexpr__44527.cljs$core$IFn$_invoke$arity$2(G__44528,G__44529) : fexpr__44527.call(null,G__44528,G__44529));
}catch (e44526){if((e44526 instanceof Error)){
var e__43611__auto__ = e44526;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44526;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44535 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44536 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44537 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__44534 = (bindings[idx]);
return (fexpr__44534.cljs$core$IFn$_invoke$arity$3 ? fexpr__44534.cljs$core$IFn$_invoke$arity$3(G__44535,G__44536,G__44537) : fexpr__44534.call(null,G__44535,G__44536,G__44537));
}catch (e44533){if((e44533 instanceof Error)){
var e__43611__auto__ = e44533;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44533;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44541 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44542 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44543 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44544 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__44540 = (bindings[idx]);
return (fexpr__44540.cljs$core$IFn$_invoke$arity$4 ? fexpr__44540.cljs$core$IFn$_invoke$arity$4(G__44541,G__44542,G__44543,G__44544) : fexpr__44540.call(null,G__44541,G__44542,G__44543,G__44544));
}catch (e44538){if((e44538 instanceof Error)){
var e__43611__auto__ = e44538;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44538;

}
}}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44551 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44552 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44553 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44554 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44555 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__44550 = (bindings[idx]);
return (fexpr__44550.cljs$core$IFn$_invoke$arity$5 ? fexpr__44550.cljs$core$IFn$_invoke$arity$5(G__44551,G__44552,G__44553,G__44554,G__44555) : fexpr__44550.call(null,G__44551,G__44552,G__44553,G__44554,G__44555));
}catch (e44549){if((e44549 instanceof Error)){
var e__43611__auto__ = e44549;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44549;

}
}}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44558 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44559 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44560 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44561 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44562 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44563 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__44557 = (bindings[idx]);
return (fexpr__44557.cljs$core$IFn$_invoke$arity$6 ? fexpr__44557.cljs$core$IFn$_invoke$arity$6(G__44558,G__44559,G__44560,G__44561,G__44562,G__44563) : fexpr__44557.call(null,G__44558,G__44559,G__44560,G__44561,G__44562,G__44563));
}catch (e44556){if((e44556 instanceof Error)){
var e__43611__auto__ = e44556;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44556;

}
}}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44570 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44571 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44572 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44573 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44574 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44575 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44576 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__44569 = (bindings[idx]);
return (fexpr__44569.cljs$core$IFn$_invoke$arity$7 ? fexpr__44569.cljs$core$IFn$_invoke$arity$7(G__44570,G__44571,G__44572,G__44573,G__44574,G__44575,G__44576) : fexpr__44569.call(null,G__44570,G__44571,G__44572,G__44573,G__44574,G__44575,G__44576));
}catch (e44564){if((e44564 instanceof Error)){
var e__43611__auto__ = e44564;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44564;

}
}}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44579 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44580 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44581 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44582 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44583 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44584 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44585 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44586 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__44578 = (bindings[idx]);
return (fexpr__44578.cljs$core$IFn$_invoke$arity$8 ? fexpr__44578.cljs$core$IFn$_invoke$arity$8(G__44579,G__44580,G__44581,G__44582,G__44583,G__44584,G__44585,G__44586) : fexpr__44578.call(null,G__44579,G__44580,G__44581,G__44582,G__44583,G__44584,G__44585,G__44586));
}catch (e44577){if((e44577 instanceof Error)){
var e__43611__auto__ = e44577;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44577;

}
}}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44589 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44590 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44591 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44592 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44593 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44594 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44595 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44596 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44597 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__44588 = (bindings[idx]);
return (fexpr__44588.cljs$core$IFn$_invoke$arity$9 ? fexpr__44588.cljs$core$IFn$_invoke$arity$9(G__44589,G__44590,G__44591,G__44592,G__44593,G__44594,G__44595,G__44596,G__44597) : fexpr__44588.call(null,G__44589,G__44590,G__44591,G__44592,G__44593,G__44594,G__44595,G__44596,G__44597));
}catch (e44587){if((e44587 instanceof Error)){
var e__43611__auto__ = e44587;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44587;

}
}}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44604 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44605 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44606 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44607 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44608 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44609 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44610 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44611 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44612 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44613 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__44603 = (bindings[idx]);
return (fexpr__44603.cljs$core$IFn$_invoke$arity$10 ? fexpr__44603.cljs$core$IFn$_invoke$arity$10(G__44604,G__44605,G__44606,G__44607,G__44608,G__44609,G__44610,G__44611,G__44612,G__44613) : fexpr__44603.call(null,G__44604,G__44605,G__44606,G__44607,G__44608,G__44609,G__44610,G__44611,G__44612,G__44613));
}catch (e44602){if((e44602 instanceof Error)){
var e__43611__auto__ = e44602;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44602;

}
}}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44620 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44621 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44622 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44623 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44624 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44625 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44626 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44627 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44628 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44629 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44630 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__44619 = (bindings[idx]);
return (fexpr__44619.cljs$core$IFn$_invoke$arity$11 ? fexpr__44619.cljs$core$IFn$_invoke$arity$11(G__44620,G__44621,G__44622,G__44623,G__44624,G__44625,G__44626,G__44627,G__44628,G__44629,G__44630) : fexpr__44619.call(null,G__44620,G__44621,G__44622,G__44623,G__44624,G__44625,G__44626,G__44627,G__44628,G__44629,G__44630));
}catch (e44618){if((e44618 instanceof Error)){
var e__43611__auto__ = e44618;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44618;

}
}}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44633 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44634 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44635 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44636 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44637 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44638 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44639 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44640 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44641 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44642 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44643 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44644 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__44632 = (bindings[idx]);
return (fexpr__44632.cljs$core$IFn$_invoke$arity$12 ? fexpr__44632.cljs$core$IFn$_invoke$arity$12(G__44633,G__44634,G__44635,G__44636,G__44637,G__44638,G__44639,G__44640,G__44641,G__44642,G__44643,G__44644) : fexpr__44632.call(null,G__44633,G__44634,G__44635,G__44636,G__44637,G__44638,G__44639,G__44640,G__44641,G__44642,G__44643,G__44644));
}catch (e44631){if((e44631 instanceof Error)){
var e__43611__auto__ = e44631;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44631;

}
}}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44647 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44648 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44649 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44650 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44651 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44652 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44653 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44654 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44655 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44656 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44657 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44658 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44659 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__44646 = (bindings[idx]);
return (fexpr__44646.cljs$core$IFn$_invoke$arity$13 ? fexpr__44646.cljs$core$IFn$_invoke$arity$13(G__44647,G__44648,G__44649,G__44650,G__44651,G__44652,G__44653,G__44654,G__44655,G__44656,G__44657,G__44658,G__44659) : fexpr__44646.call(null,G__44647,G__44648,G__44649,G__44650,G__44651,G__44652,G__44653,G__44654,G__44655,G__44656,G__44657,G__44658,G__44659));
}catch (e44645){if((e44645 instanceof Error)){
var e__43611__auto__ = e44645;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44645;

}
}}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44664 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44665 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44666 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44667 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44668 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44669 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44670 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44671 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44672 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44673 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44674 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44675 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44676 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44677 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__44663 = (bindings[idx]);
return (fexpr__44663.cljs$core$IFn$_invoke$arity$14 ? fexpr__44663.cljs$core$IFn$_invoke$arity$14(G__44664,G__44665,G__44666,G__44667,G__44668,G__44669,G__44670,G__44671,G__44672,G__44673,G__44674,G__44675,G__44676,G__44677) : fexpr__44663.call(null,G__44664,G__44665,G__44666,G__44667,G__44668,G__44669,G__44670,G__44671,G__44672,G__44673,G__44674,G__44675,G__44676,G__44677));
}catch (e44662){if((e44662 instanceof Error)){
var e__43611__auto__ = e44662;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44662;

}
}}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44680 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44681 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44682 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44683 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44684 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44685 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44686 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44687 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44688 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44689 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44690 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44691 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44692 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44693 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44694 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__44679 = (bindings[idx]);
return (fexpr__44679.cljs$core$IFn$_invoke$arity$15 ? fexpr__44679.cljs$core$IFn$_invoke$arity$15(G__44680,G__44681,G__44682,G__44683,G__44684,G__44685,G__44686,G__44687,G__44688,G__44689,G__44690,G__44691,G__44692,G__44693,G__44694) : fexpr__44679.call(null,G__44680,G__44681,G__44682,G__44683,G__44684,G__44685,G__44686,G__44687,G__44688,G__44689,G__44690,G__44691,G__44692,G__44693,G__44694));
}catch (e44678){if((e44678 instanceof Error)){
var e__43611__auto__ = e44678;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44678;

}
}}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44699 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44700 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44701 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44702 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44703 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44704 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44705 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44706 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44707 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44708 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44709 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44710 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44711 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44712 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44713 = sci.impl.types.eval(arg14,ctx,bindings);
var G__44714 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__44698 = (bindings[idx]);
return (fexpr__44698.cljs$core$IFn$_invoke$arity$16 ? fexpr__44698.cljs$core$IFn$_invoke$arity$16(G__44699,G__44700,G__44701,G__44702,G__44703,G__44704,G__44705,G__44706,G__44707,G__44708,G__44709,G__44710,G__44711,G__44712,G__44713,G__44714) : fexpr__44698.call(null,G__44699,G__44700,G__44701,G__44702,G__44703,G__44704,G__44705,G__44706,G__44707,G__44708,G__44709,G__44710,G__44711,G__44712,G__44713,G__44714));
}catch (e44697){if((e44697 instanceof Error)){
var e__43611__auto__ = e44697;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44697;

}
}}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44719 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44720 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44721 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44722 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44723 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44724 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44725 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44726 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44727 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44728 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44729 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44730 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44731 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44732 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44733 = sci.impl.types.eval(arg14,ctx,bindings);
var G__44734 = sci.impl.types.eval(arg15,ctx,bindings);
var G__44735 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__44718 = (bindings[idx]);
return (fexpr__44718.cljs$core$IFn$_invoke$arity$17 ? fexpr__44718.cljs$core$IFn$_invoke$arity$17(G__44719,G__44720,G__44721,G__44722,G__44723,G__44724,G__44725,G__44726,G__44727,G__44728,G__44729,G__44730,G__44731,G__44732,G__44733,G__44734,G__44735) : fexpr__44718.call(null,G__44719,G__44720,G__44721,G__44722,G__44723,G__44724,G__44725,G__44726,G__44727,G__44728,G__44729,G__44730,G__44731,G__44732,G__44733,G__44734,G__44735));
}catch (e44717){if((e44717 instanceof Error)){
var e__43611__auto__ = e44717;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44717;

}
}}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44742 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44743 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44744 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44745 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44746 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44747 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44748 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44749 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44750 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44751 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44752 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44753 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44754 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44755 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44756 = sci.impl.types.eval(arg14,ctx,bindings);
var G__44757 = sci.impl.types.eval(arg15,ctx,bindings);
var G__44758 = sci.impl.types.eval(arg16,ctx,bindings);
var G__44759 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__44741 = (bindings[idx]);
return (fexpr__44741.cljs$core$IFn$_invoke$arity$18 ? fexpr__44741.cljs$core$IFn$_invoke$arity$18(G__44742,G__44743,G__44744,G__44745,G__44746,G__44747,G__44748,G__44749,G__44750,G__44751,G__44752,G__44753,G__44754,G__44755,G__44756,G__44757,G__44758,G__44759) : fexpr__44741.call(null,G__44742,G__44743,G__44744,G__44745,G__44746,G__44747,G__44748,G__44749,G__44750,G__44751,G__44752,G__44753,G__44754,G__44755,G__44756,G__44757,G__44758,G__44759));
}catch (e44740){if((e44740 instanceof Error)){
var e__43611__auto__ = e44740;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44740;

}
}}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__44762 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44763 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44764 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44765 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44766 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44767 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44768 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44769 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44770 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44771 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44772 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44773 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44774 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44775 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44776 = sci.impl.types.eval(arg14,ctx,bindings);
var G__44777 = sci.impl.types.eval(arg15,ctx,bindings);
var G__44778 = sci.impl.types.eval(arg16,ctx,bindings);
var G__44779 = sci.impl.types.eval(arg17,ctx,bindings);
var G__44780 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__44761 = (bindings[idx]);
return (fexpr__44761.cljs$core$IFn$_invoke$arity$19 ? fexpr__44761.cljs$core$IFn$_invoke$arity$19(G__44762,G__44763,G__44764,G__44765,G__44766,G__44767,G__44768,G__44769,G__44770,G__44771,G__44772,G__44773,G__44774,G__44775,G__44776,G__44777,G__44778,G__44779,G__44780) : fexpr__44761.call(null,G__44762,G__44763,G__44764,G__44765,G__44766,G__44767,G__44768,G__44769,G__44770,G__44771,G__44772,G__44773,G__44774,G__44775,G__44776,G__44777,G__44778,G__44779,G__44780));
}catch (e44760){if((e44760 instanceof Error)){
var e__43611__auto__ = e44760;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43611__auto__,this$);
} else {
throw e44760;

}
}}),stack);

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(bindings[idx]),analyzed_children);
});

}
});
sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
var G__44785 = cljs.core.count(analyzed_children);
switch (G__44785) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44790 = ctx;
var G__44791 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44790,G__44791) : f.call(null,G__44790,G__44791));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44792 = ctx;
var G__44793 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44794 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44792,G__44793,G__44794) : f.call(null,G__44792,G__44793,G__44794));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44795 = ctx;
var G__44796 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44797 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44798 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__44795,G__44796,G__44797,G__44798) : f.call(null,G__44795,G__44796,G__44797,G__44798));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44799 = ctx;
var G__44800 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44801 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44802 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44803 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__44799,G__44800,G__44801,G__44802,G__44803) : f.call(null,G__44799,G__44800,G__44801,G__44802,G__44803));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44804 = ctx;
var G__44805 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44806 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44807 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44808 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44809 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__44804,G__44805,G__44806,G__44807,G__44808,G__44809) : f.call(null,G__44804,G__44805,G__44806,G__44807,G__44808,G__44809));
}),stack);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44810 = ctx;
var G__44811 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44812 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44813 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44814 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44815 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44816 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__44810,G__44811,G__44812,G__44813,G__44814,G__44815,G__44816) : f.call(null,G__44810,G__44811,G__44812,G__44813,G__44814,G__44815,G__44816));
}),stack);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44822 = ctx;
var G__44823 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44824 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44825 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44826 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44827 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44828 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44829 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__44822,G__44823,G__44824,G__44825,G__44826,G__44827,G__44828,G__44829) : f.call(null,G__44822,G__44823,G__44824,G__44825,G__44826,G__44827,G__44828,G__44829));
}),stack);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44830 = ctx;
var G__44831 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44832 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44833 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44834 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44835 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44836 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44837 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44838 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__44830,G__44831,G__44832,G__44833,G__44834,G__44835,G__44836,G__44837,G__44838) : f.call(null,G__44830,G__44831,G__44832,G__44833,G__44834,G__44835,G__44836,G__44837,G__44838));
}),stack);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44839 = ctx;
var G__44840 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44841 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44842 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44843 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44844 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44845 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44846 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44847 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44848 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__44839,G__44840,G__44841,G__44842,G__44843,G__44844,G__44845,G__44846,G__44847,G__44848) : f.call(null,G__44839,G__44840,G__44841,G__44842,G__44843,G__44844,G__44845,G__44846,G__44847,G__44848));
}),stack);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44849 = ctx;
var G__44850 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44851 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44852 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44853 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44854 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44855 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44856 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44857 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44858 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44859 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__44849,G__44850,G__44851,G__44852,G__44853,G__44854,G__44855,G__44856,G__44857,G__44858,G__44859) : f.call(null,G__44849,G__44850,G__44851,G__44852,G__44853,G__44854,G__44855,G__44856,G__44857,G__44858,G__44859));
}),stack);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44863 = ctx;
var G__44864 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44865 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44866 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44867 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44868 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44869 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44870 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44871 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44872 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44873 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44874 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__44863,G__44864,G__44865,G__44866,G__44867,G__44868,G__44869,G__44870,G__44871,G__44872,G__44873,G__44874) : f.call(null,G__44863,G__44864,G__44865,G__44866,G__44867,G__44868,G__44869,G__44870,G__44871,G__44872,G__44873,G__44874));
}),stack);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44879 = ctx;
var G__44880 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44881 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44882 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44883 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44884 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44885 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44886 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44887 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44888 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44889 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44890 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44891 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__44879,G__44880,G__44881,G__44882,G__44883,G__44884,G__44885,G__44886,G__44887,G__44888,G__44889,G__44890,G__44891) : f.call(null,G__44879,G__44880,G__44881,G__44882,G__44883,G__44884,G__44885,G__44886,G__44887,G__44888,G__44889,G__44890,G__44891));
}),stack);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44898 = ctx;
var G__44899 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44900 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44901 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44902 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44903 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44904 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44905 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44906 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44907 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44908 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44909 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44910 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44911 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__44898,G__44899,G__44900,G__44901,G__44902,G__44903,G__44904,G__44905,G__44906,G__44907,G__44908,G__44909,G__44910,G__44911) : f.call(null,G__44898,G__44899,G__44900,G__44901,G__44902,G__44903,G__44904,G__44905,G__44906,G__44907,G__44908,G__44909,G__44910,G__44911));
}),stack);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44918 = ctx;
var G__44919 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44920 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44921 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44922 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44923 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44924 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44925 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44926 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44927 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44928 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44929 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44930 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44931 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44932 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__44918,G__44919,G__44920,G__44921,G__44922,G__44923,G__44924,G__44925,G__44926,G__44927,G__44928,G__44929,G__44930,G__44931,G__44932) : f.call(null,G__44918,G__44919,G__44920,G__44921,G__44922,G__44923,G__44924,G__44925,G__44926,G__44927,G__44928,G__44929,G__44930,G__44931,G__44932));
}),stack);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44933 = ctx;
var G__44934 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44935 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44936 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44937 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44938 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44939 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44940 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44941 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44942 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44943 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44944 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44945 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44946 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44947 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44948 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__44933,G__44934,G__44935,G__44936,G__44937,G__44938,G__44939,G__44940,G__44941,G__44942,G__44943,G__44944,G__44945,G__44946,G__44947,G__44948) : f.call(null,G__44933,G__44934,G__44935,G__44936,G__44937,G__44938,G__44939,G__44940,G__44941,G__44942,G__44943,G__44944,G__44945,G__44946,G__44947,G__44948));
}),stack);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44950 = ctx;
var G__44951 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44952 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44953 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44954 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44955 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44956 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44957 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44958 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44959 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44960 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44961 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44962 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44963 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44964 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44965 = sci.impl.types.eval(arg14,ctx,bindings);
var G__44966 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__44950,G__44951,G__44952,G__44953,G__44954,G__44955,G__44956,G__44957,G__44958,G__44959,G__44960,G__44961,G__44962,G__44963,G__44964,G__44965,G__44966) : f.call(null,G__44950,G__44951,G__44952,G__44953,G__44954,G__44955,G__44956,G__44957,G__44958,G__44959,G__44960,G__44961,G__44962,G__44963,G__44964,G__44965,G__44966));
}),stack);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44971 = ctx;
var G__44972 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44973 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44974 = sci.impl.types.eval(arg2,ctx,bindings);
var G__44975 = sci.impl.types.eval(arg3,ctx,bindings);
var G__44976 = sci.impl.types.eval(arg4,ctx,bindings);
var G__44977 = sci.impl.types.eval(arg5,ctx,bindings);
var G__44978 = sci.impl.types.eval(arg6,ctx,bindings);
var G__44979 = sci.impl.types.eval(arg7,ctx,bindings);
var G__44980 = sci.impl.types.eval(arg8,ctx,bindings);
var G__44981 = sci.impl.types.eval(arg9,ctx,bindings);
var G__44982 = sci.impl.types.eval(arg10,ctx,bindings);
var G__44983 = sci.impl.types.eval(arg11,ctx,bindings);
var G__44984 = sci.impl.types.eval(arg12,ctx,bindings);
var G__44985 = sci.impl.types.eval(arg13,ctx,bindings);
var G__44986 = sci.impl.types.eval(arg14,ctx,bindings);
var G__44987 = sci.impl.types.eval(arg15,ctx,bindings);
var G__44988 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__44971,G__44972,G__44973,G__44974,G__44975,G__44976,G__44977,G__44978,G__44979,G__44980,G__44981,G__44982,G__44983,G__44984,G__44985,G__44986,G__44987,G__44988) : f.call(null,G__44971,G__44972,G__44973,G__44974,G__44975,G__44976,G__44977,G__44978,G__44979,G__44980,G__44981,G__44982,G__44983,G__44984,G__44985,G__44986,G__44987,G__44988));
}),stack);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__44996 = ctx;
var G__44997 = sci.impl.types.eval(arg0,ctx,bindings);
var G__44998 = sci.impl.types.eval(arg1,ctx,bindings);
var G__44999 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45000 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45001 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45002 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45003 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45004 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45005 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45006 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45007 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45008 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45009 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45010 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45011 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45012 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45013 = sci.impl.types.eval(arg16,ctx,bindings);
var G__45014 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__44996,G__44997,G__44998,G__44999,G__45000,G__45001,G__45002,G__45003,G__45004,G__45005,G__45006,G__45007,G__45008,G__45009,G__45010,G__45011,G__45012,G__45013,G__45014) : f.call(null,G__44996,G__44997,G__44998,G__44999,G__45000,G__45001,G__45002,G__45003,G__45004,G__45005,G__45006,G__45007,G__45008,G__45009,G__45010,G__45011,G__45012,G__45013,G__45014));
}),stack);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__45015 = ctx;
var G__45016 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45017 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45018 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45019 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45020 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45021 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45022 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45023 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45024 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45025 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45026 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45027 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45028 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45029 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45030 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45031 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45032 = sci.impl.types.eval(arg16,ctx,bindings);
var G__45033 = sci.impl.types.eval(arg17,ctx,bindings);
var G__45034 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__45015,G__45016,G__45017,G__45018,G__45019,G__45020,G__45021,G__45022,G__45023,G__45024,G__45025,G__45026,G__45027,G__45028,G__45029,G__45030,G__45031,G__45032,G__45033,G__45034) : f.call(null,G__45015,G__45016,G__45017,G__45018,G__45019,G__45020,G__45021,G__45022,G__45023,G__45024,G__45025,G__45026,G__45027,G__45028,G__45029,G__45030,G__45031,G__45032,G__45033,G__45034));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__45040 = cljs.core.count(analyzed_children);
switch (G__45040) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__45042 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45042.cljs$core$IFn$_invoke$arity$0 ? fexpr__45042.cljs$core$IFn$_invoke$arity$0() : fexpr__45042.call(null));
}catch (e45041){if((e45041 instanceof Error)){
var e__43734__auto__ = e45041;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45041;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e45043){if((e45043 instanceof Error)){
var e__43734__auto__ = e45043;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45043;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45046 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__45045 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45045.cljs$core$IFn$_invoke$arity$1 ? fexpr__45045.cljs$core$IFn$_invoke$arity$1(G__45046) : fexpr__45045.call(null,G__45046));
}catch (e45044){if((e45044 instanceof Error)){
var e__43734__auto__ = e45044;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45044;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45048 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45048) : f.call(null,G__45048));
}catch (e45047){if((e45047 instanceof Error)){
var e__43734__auto__ = e45047;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45047;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45051 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45052 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__45050 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45050.cljs$core$IFn$_invoke$arity$2 ? fexpr__45050.cljs$core$IFn$_invoke$arity$2(G__45051,G__45052) : fexpr__45050.call(null,G__45051,G__45052));
}catch (e45049){if((e45049 instanceof Error)){
var e__43734__auto__ = e45049;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45049;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45054 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45055 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45054,G__45055) : f.call(null,G__45054,G__45055));
}catch (e45053){if((e45053 instanceof Error)){
var e__43734__auto__ = e45053;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45053;

}
}}),stack);
}

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45058 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45059 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45060 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__45057 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45057.cljs$core$IFn$_invoke$arity$3 ? fexpr__45057.cljs$core$IFn$_invoke$arity$3(G__45058,G__45059,G__45060) : fexpr__45057.call(null,G__45058,G__45059,G__45060));
}catch (e45056){if((e45056 instanceof Error)){
var e__43734__auto__ = e45056;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45056;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45062 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45063 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45064 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45062,G__45063,G__45064) : f.call(null,G__45062,G__45063,G__45064));
}catch (e45061){if((e45061 instanceof Error)){
var e__43734__auto__ = e45061;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45061;

}
}}),stack);
}

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45072 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45073 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45074 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45075 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__45071 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45071.cljs$core$IFn$_invoke$arity$4 ? fexpr__45071.cljs$core$IFn$_invoke$arity$4(G__45072,G__45073,G__45074,G__45075) : fexpr__45071.call(null,G__45072,G__45073,G__45074,G__45075));
}catch (e45069){if((e45069 instanceof Error)){
var e__43734__auto__ = e45069;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45069;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45077 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45078 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45079 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45080 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__45077,G__45078,G__45079,G__45080) : f.call(null,G__45077,G__45078,G__45079,G__45080));
}catch (e45076){if((e45076 instanceof Error)){
var e__43734__auto__ = e45076;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45076;

}
}}),stack);
}

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45083 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45084 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45085 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45086 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45087 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__45082 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45082.cljs$core$IFn$_invoke$arity$5 ? fexpr__45082.cljs$core$IFn$_invoke$arity$5(G__45083,G__45084,G__45085,G__45086,G__45087) : fexpr__45082.call(null,G__45083,G__45084,G__45085,G__45086,G__45087));
}catch (e45081){if((e45081 instanceof Error)){
var e__43734__auto__ = e45081;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45081;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45089 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45090 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45091 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45092 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45093 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__45089,G__45090,G__45091,G__45092,G__45093) : f.call(null,G__45089,G__45090,G__45091,G__45092,G__45093));
}catch (e45088){if((e45088 instanceof Error)){
var e__43734__auto__ = e45088;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45088;

}
}}),stack);
}

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45096 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45097 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45098 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45099 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45100 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45101 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__45095 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45095.cljs$core$IFn$_invoke$arity$6 ? fexpr__45095.cljs$core$IFn$_invoke$arity$6(G__45096,G__45097,G__45098,G__45099,G__45100,G__45101) : fexpr__45095.call(null,G__45096,G__45097,G__45098,G__45099,G__45100,G__45101));
}catch (e45094){if((e45094 instanceof Error)){
var e__43734__auto__ = e45094;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45094;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45103 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45104 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45105 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45106 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45107 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45108 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__45103,G__45104,G__45105,G__45106,G__45107,G__45108) : f.call(null,G__45103,G__45104,G__45105,G__45106,G__45107,G__45108));
}catch (e45102){if((e45102 instanceof Error)){
var e__43734__auto__ = e45102;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45102;

}
}}),stack);
}

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45116 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45117 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45118 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45119 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45120 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45121 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45122 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__45115 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45115.cljs$core$IFn$_invoke$arity$7 ? fexpr__45115.cljs$core$IFn$_invoke$arity$7(G__45116,G__45117,G__45118,G__45119,G__45120,G__45121,G__45122) : fexpr__45115.call(null,G__45116,G__45117,G__45118,G__45119,G__45120,G__45121,G__45122));
}catch (e45114){if((e45114 instanceof Error)){
var e__43734__auto__ = e45114;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45114;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45125 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45126 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45127 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45128 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45129 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45130 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45131 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__45125,G__45126,G__45127,G__45128,G__45129,G__45130,G__45131) : f.call(null,G__45125,G__45126,G__45127,G__45128,G__45129,G__45130,G__45131));
}catch (e45123){if((e45123 instanceof Error)){
var e__43734__auto__ = e45123;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45123;

}
}}),stack);
}

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45135 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45136 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45137 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45138 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45139 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45140 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45141 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45142 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__45134 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45134.cljs$core$IFn$_invoke$arity$8 ? fexpr__45134.cljs$core$IFn$_invoke$arity$8(G__45135,G__45136,G__45137,G__45138,G__45139,G__45140,G__45141,G__45142) : fexpr__45134.call(null,G__45135,G__45136,G__45137,G__45138,G__45139,G__45140,G__45141,G__45142));
}catch (e45133){if((e45133 instanceof Error)){
var e__43734__auto__ = e45133;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45133;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45144 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45145 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45146 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45147 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45148 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45149 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45150 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45151 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__45144,G__45145,G__45146,G__45147,G__45148,G__45149,G__45150,G__45151) : f.call(null,G__45144,G__45145,G__45146,G__45147,G__45148,G__45149,G__45150,G__45151));
}catch (e45143){if((e45143 instanceof Error)){
var e__43734__auto__ = e45143;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45143;

}
}}),stack);
}

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45156 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45157 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45158 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45159 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45160 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45161 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45162 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45163 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45164 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__45155 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45155.cljs$core$IFn$_invoke$arity$9 ? fexpr__45155.cljs$core$IFn$_invoke$arity$9(G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,G__45162,G__45163,G__45164) : fexpr__45155.call(null,G__45156,G__45157,G__45158,G__45159,G__45160,G__45161,G__45162,G__45163,G__45164));
}catch (e45152){if((e45152 instanceof Error)){
var e__43734__auto__ = e45152;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45152;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45166 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45167 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45168 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45169 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45170 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45171 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45172 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45173 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45174 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__45166,G__45167,G__45168,G__45169,G__45170,G__45171,G__45172,G__45173,G__45174) : f.call(null,G__45166,G__45167,G__45168,G__45169,G__45170,G__45171,G__45172,G__45173,G__45174));
}catch (e45165){if((e45165 instanceof Error)){
var e__43734__auto__ = e45165;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45165;

}
}}),stack);
}

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45179 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45180 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45181 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45182 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45183 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45184 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45185 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45186 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45187 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45188 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__45178 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45178.cljs$core$IFn$_invoke$arity$10 ? fexpr__45178.cljs$core$IFn$_invoke$arity$10(G__45179,G__45180,G__45181,G__45182,G__45183,G__45184,G__45185,G__45186,G__45187,G__45188) : fexpr__45178.call(null,G__45179,G__45180,G__45181,G__45182,G__45183,G__45184,G__45185,G__45186,G__45187,G__45188));
}catch (e45177){if((e45177 instanceof Error)){
var e__43734__auto__ = e45177;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45177;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45192 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45193 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45194 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45195 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45196 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45197 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45198 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45199 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45200 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45201 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__45192,G__45193,G__45194,G__45195,G__45196,G__45197,G__45198,G__45199,G__45200,G__45201) : f.call(null,G__45192,G__45193,G__45194,G__45195,G__45196,G__45197,G__45198,G__45199,G__45200,G__45201));
}catch (e45191){if((e45191 instanceof Error)){
var e__43734__auto__ = e45191;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45191;

}
}}),stack);
}

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45215 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45216 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45217 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45218 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45219 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45220 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45221 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45222 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45223 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45224 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45225 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__45214 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45214.cljs$core$IFn$_invoke$arity$11 ? fexpr__45214.cljs$core$IFn$_invoke$arity$11(G__45215,G__45216,G__45217,G__45218,G__45219,G__45220,G__45221,G__45222,G__45223,G__45224,G__45225) : fexpr__45214.call(null,G__45215,G__45216,G__45217,G__45218,G__45219,G__45220,G__45221,G__45222,G__45223,G__45224,G__45225));
}catch (e45213){if((e45213 instanceof Error)){
var e__43734__auto__ = e45213;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45213;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45227 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45228 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45229 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45230 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45231 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45232 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45233 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45234 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45235 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45236 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45237 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__45227,G__45228,G__45229,G__45230,G__45231,G__45232,G__45233,G__45234,G__45235,G__45236,G__45237) : f.call(null,G__45227,G__45228,G__45229,G__45230,G__45231,G__45232,G__45233,G__45234,G__45235,G__45236,G__45237));
}catch (e45226){if((e45226 instanceof Error)){
var e__43734__auto__ = e45226;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45226;

}
}}),stack);
}

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45243 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45244 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45245 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45246 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45247 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45248 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45249 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45250 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45251 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45252 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45253 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45254 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__45242 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45242.cljs$core$IFn$_invoke$arity$12 ? fexpr__45242.cljs$core$IFn$_invoke$arity$12(G__45243,G__45244,G__45245,G__45246,G__45247,G__45248,G__45249,G__45250,G__45251,G__45252,G__45253,G__45254) : fexpr__45242.call(null,G__45243,G__45244,G__45245,G__45246,G__45247,G__45248,G__45249,G__45250,G__45251,G__45252,G__45253,G__45254));
}catch (e45241){if((e45241 instanceof Error)){
var e__43734__auto__ = e45241;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45241;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45258 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45259 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45260 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45261 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45262 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45263 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45264 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45265 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45266 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45267 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45268 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45269 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__45258,G__45259,G__45260,G__45261,G__45262,G__45263,G__45264,G__45265,G__45266,G__45267,G__45268,G__45269) : f.call(null,G__45258,G__45259,G__45260,G__45261,G__45262,G__45263,G__45264,G__45265,G__45266,G__45267,G__45268,G__45269));
}catch (e45257){if((e45257 instanceof Error)){
var e__43734__auto__ = e45257;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45257;

}
}}),stack);
}

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45272 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45273 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45274 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45275 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45276 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45277 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45278 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45279 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45280 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45281 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45282 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45283 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45284 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__45271 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45271.cljs$core$IFn$_invoke$arity$13 ? fexpr__45271.cljs$core$IFn$_invoke$arity$13(G__45272,G__45273,G__45274,G__45275,G__45276,G__45277,G__45278,G__45279,G__45280,G__45281,G__45282,G__45283,G__45284) : fexpr__45271.call(null,G__45272,G__45273,G__45274,G__45275,G__45276,G__45277,G__45278,G__45279,G__45280,G__45281,G__45282,G__45283,G__45284));
}catch (e45270){if((e45270 instanceof Error)){
var e__43734__auto__ = e45270;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45270;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45289 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45290 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45291 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45292 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45293 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45294 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45295 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45296 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45297 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45298 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45299 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45300 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45301 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__45289,G__45290,G__45291,G__45292,G__45293,G__45294,G__45295,G__45296,G__45297,G__45298,G__45299,G__45300,G__45301) : f.call(null,G__45289,G__45290,G__45291,G__45292,G__45293,G__45294,G__45295,G__45296,G__45297,G__45298,G__45299,G__45300,G__45301));
}catch (e45288){if((e45288 instanceof Error)){
var e__43734__auto__ = e45288;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45288;

}
}}),stack);
}

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45308 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45309 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45310 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45311 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45312 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45313 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45314 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45315 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45316 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45317 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45318 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45319 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45320 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45321 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__45307 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45307.cljs$core$IFn$_invoke$arity$14 ? fexpr__45307.cljs$core$IFn$_invoke$arity$14(G__45308,G__45309,G__45310,G__45311,G__45312,G__45313,G__45314,G__45315,G__45316,G__45317,G__45318,G__45319,G__45320,G__45321) : fexpr__45307.call(null,G__45308,G__45309,G__45310,G__45311,G__45312,G__45313,G__45314,G__45315,G__45316,G__45317,G__45318,G__45319,G__45320,G__45321));
}catch (e45306){if((e45306 instanceof Error)){
var e__43734__auto__ = e45306;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45306;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45323 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45324 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45325 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45326 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45327 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45328 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45329 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45330 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45331 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45332 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45333 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45334 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45335 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45336 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__45323,G__45324,G__45325,G__45326,G__45327,G__45328,G__45329,G__45330,G__45331,G__45332,G__45333,G__45334,G__45335,G__45336) : f.call(null,G__45323,G__45324,G__45325,G__45326,G__45327,G__45328,G__45329,G__45330,G__45331,G__45332,G__45333,G__45334,G__45335,G__45336));
}catch (e45322){if((e45322 instanceof Error)){
var e__43734__auto__ = e45322;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45322;

}
}}),stack);
}

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45343 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45344 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45345 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45346 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45347 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45348 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45349 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45350 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45351 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45352 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45353 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45354 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45355 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45356 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45357 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__45342 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45342.cljs$core$IFn$_invoke$arity$15 ? fexpr__45342.cljs$core$IFn$_invoke$arity$15(G__45343,G__45344,G__45345,G__45346,G__45347,G__45348,G__45349,G__45350,G__45351,G__45352,G__45353,G__45354,G__45355,G__45356,G__45357) : fexpr__45342.call(null,G__45343,G__45344,G__45345,G__45346,G__45347,G__45348,G__45349,G__45350,G__45351,G__45352,G__45353,G__45354,G__45355,G__45356,G__45357));
}catch (e45341){if((e45341 instanceof Error)){
var e__43734__auto__ = e45341;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45341;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45359 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45360 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45361 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45362 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45363 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45364 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45365 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45366 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45367 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45368 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45369 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45370 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45371 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45372 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45373 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__45359,G__45360,G__45361,G__45362,G__45363,G__45364,G__45365,G__45366,G__45367,G__45368,G__45369,G__45370,G__45371,G__45372,G__45373) : f.call(null,G__45359,G__45360,G__45361,G__45362,G__45363,G__45364,G__45365,G__45366,G__45367,G__45368,G__45369,G__45370,G__45371,G__45372,G__45373));
}catch (e45358){if((e45358 instanceof Error)){
var e__43734__auto__ = e45358;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45358;

}
}}),stack);
}

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45376 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45377 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45378 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45379 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45380 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45381 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45382 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45383 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45384 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45385 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45386 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45387 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45388 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45389 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45390 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45391 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__45375 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45375.cljs$core$IFn$_invoke$arity$16 ? fexpr__45375.cljs$core$IFn$_invoke$arity$16(G__45376,G__45377,G__45378,G__45379,G__45380,G__45381,G__45382,G__45383,G__45384,G__45385,G__45386,G__45387,G__45388,G__45389,G__45390,G__45391) : fexpr__45375.call(null,G__45376,G__45377,G__45378,G__45379,G__45380,G__45381,G__45382,G__45383,G__45384,G__45385,G__45386,G__45387,G__45388,G__45389,G__45390,G__45391));
}catch (e45374){if((e45374 instanceof Error)){
var e__43734__auto__ = e45374;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45374;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45396 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45397 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45398 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45399 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45400 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45401 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45402 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45403 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45404 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45405 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45406 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45407 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45408 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45409 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45410 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45411 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__45396,G__45397,G__45398,G__45399,G__45400,G__45401,G__45402,G__45403,G__45404,G__45405,G__45406,G__45407,G__45408,G__45409,G__45410,G__45411) : f.call(null,G__45396,G__45397,G__45398,G__45399,G__45400,G__45401,G__45402,G__45403,G__45404,G__45405,G__45406,G__45407,G__45408,G__45409,G__45410,G__45411));
}catch (e45395){if((e45395 instanceof Error)){
var e__43734__auto__ = e45395;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45395;

}
}}),stack);
}

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45416 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45417 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45418 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45419 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45420 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45421 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45422 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45423 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45424 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45425 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45426 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45427 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45428 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45429 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45430 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45431 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45432 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__45415 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45415.cljs$core$IFn$_invoke$arity$17 ? fexpr__45415.cljs$core$IFn$_invoke$arity$17(G__45416,G__45417,G__45418,G__45419,G__45420,G__45421,G__45422,G__45423,G__45424,G__45425,G__45426,G__45427,G__45428,G__45429,G__45430,G__45431,G__45432) : fexpr__45415.call(null,G__45416,G__45417,G__45418,G__45419,G__45420,G__45421,G__45422,G__45423,G__45424,G__45425,G__45426,G__45427,G__45428,G__45429,G__45430,G__45431,G__45432));
}catch (e45414){if((e45414 instanceof Error)){
var e__43734__auto__ = e45414;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45414;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45442 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45443 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45444 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45445 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45446 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45447 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45448 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45449 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45450 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45451 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45452 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45453 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45454 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45455 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45456 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45457 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45458 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__45442,G__45443,G__45444,G__45445,G__45446,G__45447,G__45448,G__45449,G__45450,G__45451,G__45452,G__45453,G__45454,G__45455,G__45456,G__45457,G__45458) : f.call(null,G__45442,G__45443,G__45444,G__45445,G__45446,G__45447,G__45448,G__45449,G__45450,G__45451,G__45452,G__45453,G__45454,G__45455,G__45456,G__45457,G__45458));
}catch (e45441){if((e45441 instanceof Error)){
var e__43734__auto__ = e45441;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45441;

}
}}),stack);
}

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45471 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45472 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45473 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45474 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45475 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45476 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45477 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45478 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45479 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45480 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45481 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45482 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45483 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45484 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45485 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45486 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45487 = sci.impl.types.eval(arg16,ctx,bindings);
var G__45488 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__45470 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45470.cljs$core$IFn$_invoke$arity$18 ? fexpr__45470.cljs$core$IFn$_invoke$arity$18(G__45471,G__45472,G__45473,G__45474,G__45475,G__45476,G__45477,G__45478,G__45479,G__45480,G__45481,G__45482,G__45483,G__45484,G__45485,G__45486,G__45487,G__45488) : fexpr__45470.call(null,G__45471,G__45472,G__45473,G__45474,G__45475,G__45476,G__45477,G__45478,G__45479,G__45480,G__45481,G__45482,G__45483,G__45484,G__45485,G__45486,G__45487,G__45488));
}catch (e45468){if((e45468 instanceof Error)){
var e__43734__auto__ = e45468;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45468;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45494 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45495 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45496 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45497 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45498 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45499 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45500 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45501 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45502 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45503 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45504 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45505 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45506 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45507 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45508 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45509 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45510 = sci.impl.types.eval(arg16,ctx,bindings);
var G__45511 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__45494,G__45495,G__45496,G__45497,G__45498,G__45499,G__45500,G__45501,G__45502,G__45503,G__45504,G__45505,G__45506,G__45507,G__45508,G__45509,G__45510,G__45511) : f.call(null,G__45494,G__45495,G__45496,G__45497,G__45498,G__45499,G__45500,G__45501,G__45502,G__45503,G__45504,G__45505,G__45506,G__45507,G__45508,G__45509,G__45510,G__45511));
}catch (e45493){if((e45493 instanceof Error)){
var e__43734__auto__ = e45493;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45493;

}
}}),stack);
}

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45516 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45517 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45518 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45519 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45520 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45521 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45522 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45523 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45524 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45525 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45526 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45527 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45528 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45529 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45530 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45531 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45532 = sci.impl.types.eval(arg16,ctx,bindings);
var G__45533 = sci.impl.types.eval(arg17,ctx,bindings);
var G__45534 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__45515 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__45515.cljs$core$IFn$_invoke$arity$19 ? fexpr__45515.cljs$core$IFn$_invoke$arity$19(G__45516,G__45517,G__45518,G__45519,G__45520,G__45521,G__45522,G__45523,G__45524,G__45525,G__45526,G__45527,G__45528,G__45529,G__45530,G__45531,G__45532,G__45533,G__45534) : fexpr__45515.call(null,G__45516,G__45517,G__45518,G__45519,G__45520,G__45521,G__45522,G__45523,G__45524,G__45525,G__45526,G__45527,G__45528,G__45529,G__45530,G__45531,G__45532,G__45533,G__45534));
}catch (e45514){if((e45514 instanceof Error)){
var e__43734__auto__ = e45514;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45514;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__45537 = sci.impl.types.eval(arg0,ctx,bindings);
var G__45538 = sci.impl.types.eval(arg1,ctx,bindings);
var G__45539 = sci.impl.types.eval(arg2,ctx,bindings);
var G__45540 = sci.impl.types.eval(arg3,ctx,bindings);
var G__45541 = sci.impl.types.eval(arg4,ctx,bindings);
var G__45542 = sci.impl.types.eval(arg5,ctx,bindings);
var G__45543 = sci.impl.types.eval(arg6,ctx,bindings);
var G__45544 = sci.impl.types.eval(arg7,ctx,bindings);
var G__45545 = sci.impl.types.eval(arg8,ctx,bindings);
var G__45546 = sci.impl.types.eval(arg9,ctx,bindings);
var G__45547 = sci.impl.types.eval(arg10,ctx,bindings);
var G__45548 = sci.impl.types.eval(arg11,ctx,bindings);
var G__45549 = sci.impl.types.eval(arg12,ctx,bindings);
var G__45550 = sci.impl.types.eval(arg13,ctx,bindings);
var G__45551 = sci.impl.types.eval(arg14,ctx,bindings);
var G__45552 = sci.impl.types.eval(arg15,ctx,bindings);
var G__45553 = sci.impl.types.eval(arg16,ctx,bindings);
var G__45554 = sci.impl.types.eval(arg17,ctx,bindings);
var G__45555 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__45537,G__45538,G__45539,G__45540,G__45541,G__45542,G__45543,G__45544,G__45545,G__45546,G__45547,G__45548,G__45549,G__45550,G__45551,G__45552,G__45553,G__45554,G__45555) : f.call(null,G__45537,G__45538,G__45539,G__45540,G__45541,G__45542,G__45543,G__45544,G__45545,G__45546,G__45547,G__45548,G__45549,G__45550,G__45551,G__45552,G__45553,G__45554,G__45555));
}catch (e45536){if((e45536 instanceof Error)){
var e__43734__auto__ = e45536;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__43734__auto__,this$);
} else {
throw e45536;

}
}}),stack);
}

break;
default:
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,(wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f)),analyzed_children);
}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
}),stack);
}

}
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.types.__GT_constant(snd);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}catch (e45557){if((e45557 instanceof Error)){
var e = e45557;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e45557;

}
}}),stack);
});
sci.impl.analyzer.dispatch_special = (function sci$impl$analyzer$dispatch_special(ctx,expr,f){
var G__45560 = f;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__45560)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__45560)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__45560)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__45560)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__45560)){
return sci.impl.analyzer.analyze_fn_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__45560)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop*","loop*",615029416,null),G__45560)){
return sci.impl.analyzer.analyze_loop_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__45560)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__45560)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__45560)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__45560)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__45560)){
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,cljs.core.second(expr),cljs.core.nnext(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__45560)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__45560)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case*","case*",-1938255072,null),G__45560)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__45560)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__45560)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__45560)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__45560)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__45560)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__45560)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__45560)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__45560)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45560)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,m,top_level_QMARK_){
var m__43844__auto__ = m;
var loc__43845__auto__ = (cljs.core.truth_((function (){var and__5023__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = m__43844__auto__;
if(cljs.core.truth_(and__5023__auto____$1)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__43844__auto__);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(m__43844__auto__),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__43844__auto__)], null):null);
if(cljs.core.truth_(loc__43845__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = loc__43845__auto__);
} else {
}

try{var eval_file = new cljs.core.Keyword("clojure.core","eval-file","clojure.core/eval-file",801420726).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(eval_file)){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.utils.current_file,eval_file]));
} else {
}

try{var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var fsym = f;
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__5023__auto__ = special_sym;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"check-permissions","check-permissions",669054317).cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__5023__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__5025__auto__ = special_sym;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__5023__auto__ = f_meta;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5023__auto__;
}
})();
var fast_path = new cljs.core.Keyword("sci.impl","fast-path","sci.impl/fast-path",1273254676).cljs$core$IFn$_invoke$arity$1(f_meta);
var f__$2 = (function (){var or__5025__auto__ = fast_path;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return f__$1;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = f_meta;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword("sci.impl.analyzer","static-access","sci.impl.analyzer/static-access",-79014000).cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__5023__auto__;
}
})())){
var vec__45591 = f__$2;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45591,(0),null);
var method_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45591,(1),null);
var last_path = cljs.core.last(method_path);
var ctor_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_path,"");
var method_len = cljs.core.count(method_path);
var subpath = method_path.slice((0),(method_len - (1)));
var lookup_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),method_len))?cljs.core.constantly([class$,last_path]):(function (){
return [sci.impl.interop.get_static_fields(class$,subpath),last_path];
}));
var vec__45594 = (function (){try{return lookup_fn();
}catch (e45597){var ___$1 = e45597;
return null;
}})();
var class$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45594,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45594,(1),null);
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var children__$1 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(children);
if(cljs.core.truth_(class$__$1)){
if(ctor_QMARK_){
var ctor = class$__$1;
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.interop.invoke_js_constructor_STAR_(ctx__$1,bindings,ctor,children__$1);
}),null);
} else {
var method = (class$__$1[method_name]);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return sci.impl.interop.invoke_static_method(ctx__$1,bindings,class$__$1,method,children__$1);
}),null);
}
} else {
if(ctor_QMARK_){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = lookup_fn();
var ctor = (arr[(0)]);
return sci.impl.interop.invoke_js_constructor_STAR_(ctx__$1,bindings,ctor,children__$1);
}),null);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = lookup_fn();
var class$__$2 = (arr[(0)]);
var method_name__$1 = (arr[(1)]);
var method = (class$__$2[method_name__$1]);
return sci.impl.interop.invoke_static_method(ctx__$1,bindings,class$__$2,method,children__$1);
}),null);
}
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(eval_QMARK_);
if(and__5023__auto__){
var and__5023__auto____$1 = (f__$2 instanceof cljs.core.Symbol);
if(and__5023__auto____$1){
var or__5025__auto__ = special_sym;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$2);
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return sci.impl.analyzer.dispatch_special(ctx,expr,f__$2);
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$2))){
var needs_ctx_QMARK_ = (function (){var and__5023__auto__ = sci.impl.utils.var_QMARK_(f__$2);
if(and__5023__auto__){
return sci.impl.vars.needs_ctx_QMARK_(f__$2);
} else {
return and__5023__auto__;
}
})();
var f__$3 = ((sci.impl.utils.var_QMARK_(f__$2))?cljs.core.deref(f__$2):f__$2);
var f__$4 = (function (){var or__5025__auto__ = f__$3.afn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return f__$3;
}
})();
var v = (cljs.core.truth_(needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$4,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$4,expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825).cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__5023__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(v))));
} else {
return and__5023__auto__;
}
})())?sci.impl.types.__GT_EvalForm((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v)):(function (){var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,v__$1,top_level_QMARK_) : sci.impl.analyzer.analyze.call(null,ctx,v__$1,top_level_QMARK_));
})()
));
return expanded;
} else {
var temp__5823__auto__ = new cljs.core.Keyword("sci.impl","inlined","sci.impl/inlined",-478453593).cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5823__auto__)){
var f__$3 = temp__5823__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$3,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);
} else {
var temp__5823__auto____$1 = new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$2));
if(cljs.core.truth_(temp__5823__auto____$1)){
var op = temp__5823__auto____$1;
var G__45612 = op;
var G__45612__$1 = (((G__45612 instanceof cljs.core.Keyword))?G__45612.fqn:null);
switch (G__45612__$1) {
case "resolve-sym":
return sci.impl.analyzer.return_binding_call(ctx,expr,new cljs.core.Keyword("sci.impl","idx","sci.impl/idx",700902278).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$2)),f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)));

break;
default:
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$2,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),null);

}
} else {
var needs_ctx_QMARK_ = (function (){var and__5023__auto__ = sci.impl.utils.var_QMARK_(f__$2);
if(and__5023__auto__){
return sci.impl.vars.needs_ctx_QMARK_(f__$2);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(needs_ctx_QMARK_)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var self_ref_QMARK_ = new cljs.core.Keyword(null,"self-ref?","self-ref?",412808630).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__5023__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self_ref_QMARK_.cljs$core$IFn$_invoke$arity$1(f__$2) : self_ref_QMARK_.call(null,f__$2));
} else {
return and__5023__auto__;
}
})())){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$2,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),(function (___$1,bindings,___$2){
return cljs.core.deref(bindings.get(fsym));
}));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$2,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0)),((sci.impl.utils.var_QMARK_(f__$2))?(function (___$1,___$2,v){
return cljs.core.deref(v);
}):null));
}
}
}
}
}
}catch (e45601){if((e45601 instanceof Error)){
var e = e45601;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e45601;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__45617 = ccount;
switch (G__45617) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.types.eval(arg,ctx__$1,bindings));
}),null);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.types.eval(arg0,ctx__$1,bindings),sci.impl.types.eval(arg1,ctx__$1,bindings));
}),null);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,stack,((sci.impl.utils.var_QMARK_(f__$1))?(function (ctx__$1,bindings,f__$2){
return sci.impl.types.eval(cljs.core.deref(f__$2),ctx__$1,bindings);
}):(function (ctx__$1,bindings,f__$2){
return sci.impl.types.eval(f__$2,ctx__$1,bindings);
})));

}
}
}catch (e45583){var e = e45583;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$1(m)));
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}}finally {if(cljs.core.truth_(loc__43845__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = null);
} else {
}
}});
sci.impl.analyzer.map_fn = (function sci$impl$analyzer$map_fn(children_count){
if((children_count <= (16))){
return cljs.core.array_map;
} else {
return cljs.core.hash_map;
}
});
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map,analyzed_children){
var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);

return sci.impl.analyzer.return_call(ctx,the_map,mf,analyzed_children,null,null);
});
sci.impl.analyzer.constant_node_QMARK_ = (function sci$impl$analyzer$constant_node_QMARK_(x){
return (!((x instanceof sci.impl.types.NodeR)));
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,expr);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,children);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var same_QMARK_ = ((const_QMARK_)?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(children,analyzed_children):null);
var const_val = ((const_QMARK_)?(cljs.core.truth_(same_QMARK_)?expr:(function (){var mf = sci.impl.analyzer.map_fn(cljs.core.count(analyzed_children));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mf,analyzed_children);
})()):null);
var analyzed_map = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_map(ctx__$1,expr,analyzed_children));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_map,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,f1,f2,expr,m){
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,m) : sci.impl.analyzer.analyze.call(null,ctx__$1,m)):null);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx__$1,expr);
var const_QMARK_ = cljs.core.every_QMARK_(sci.impl.analyzer.constant_node_QMARK_,analyzed_children);
var set_expr_QMARK_ = cljs.core.set_QMARK_(expr);
var same_QMARK_ = ((const_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((set_expr_QMARK_)?(function (){var or__5025__auto__ = cljs.core.seq(expr);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})():expr),analyzed_children)));
var const_val = ((const_QMARK_)?((same_QMARK_)?((cljs.core.empty_QMARK_(expr))?((set_expr_QMARK_)?cljs.core.PersistentHashSet.EMPTY:cljs.core.PersistentVector.EMPTY):expr):(f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(analyzed_children) : f1.call(null,analyzed_children))):null);
var analyzed_coll = ((const_QMARK_)?sci.impl.types.__GT_constant(const_val):sci.impl.analyzer.return_call(ctx__$1,expr,f2,analyzed_children,null,null));
var ret = (cljs.core.truth_(analyzed_meta)?sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
var coll = sci.impl.types.eval(analyzed_coll,ctx__$2,bindings);
var md = sci.impl.types.eval(analyzed_meta,ctx__$2,bindings);
return cljs.core.with_meta(coll,md);
}),null):analyzed_coll);
return ret;
});
sci.impl.analyzer.analyze_js_obj = (function sci$impl$analyzer$analyze_js_obj(ctx,js_val){
var v = js_val.val;
if(cljs.core.map_QMARK_(v)){
var ks = cljs.core.keys(v);
var ks__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,ks);
var vs = cljs.core.vals(v);
var vs__$1 = sci.impl.analyzer.analyze_children(ctx,vs);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45623_SHARP_){
return sci.impl.types.eval(p1__45623_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
cljs.core.run_BANG_((function (p1__45624_SHARP_){
return arr.push(sci.impl.types.eval(p1__45624_SHARP_,ctx__$1,bindings));
}),vs);

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__45626 = arguments.length;
switch (G__45626) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return sci.impl.types.__GT_constant(expr);
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return sci.impl.types.__GT_constant(v);
} else {
if(sci.impl.utils.var_QMARK_(v)){
if(cljs.core.truth_((function (){var and__5023__auto__ = sci.impl.vars.needs_ctx_QMARK_(v);
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599).cljs$core$IFn$_invoke$arity$1(mv);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return cljs.core._deref(v);
}),null);
}
}
}
} else {
return v;

}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if((expr instanceof cljs.tagged_literals.JSValue)){
return sci.impl.analyzer.analyze_js_obj(ctx,expr);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,m,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);

cljs.core.vreset_BANG_(sci.impl.utils.analyze,sci.impl.analyzer.analyze);

//# sourceMappingURL=sci.impl.analyzer.js.map
