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
var G__40284 = arguments.length;
switch (G__40284) {
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
}catch (e40288){var _ = e40288;
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
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40293_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__40293_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__40293_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__40294 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__40295 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40294,G__40295) : sci.impl.analyzer.analyze.call(null,G__40294,G__40295));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var child_count = cljs.core.count(children);
if((child_count > (5))){
var node1 = (function (){var G__40297 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var G__40298 = expr;
var G__40299 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__40297,G__40298,G__40299) : sci.impl.analyzer.return_do.call(null,G__40297,G__40298,G__40299));
})();
var node2 = (function (){var G__40300 = ctx;
var G__40301 = expr;
var G__40302 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__40300,G__40301,G__40302) : sci.impl.analyzer.return_do.call(null,G__40300,G__40301,G__40302));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node1,ctx__$1,bindings);

return sci.impl.types.eval(node2,ctx__$1,bindings);
}),null);
} else {
var analyzed_children = sci.impl.analyzer.analyze_children_tail(ctx,children);
var G__40304 = child_count;
switch (G__40304) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40304)].join('')));

}
}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__40305 = ctx;
var G__40306 = expr;
var G__40307 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__40305,G__40306,G__40307) : sci.impl.analyzer.return_or.call(null,G__40305,G__40306,G__40307));
})();
var a1_SHARP_ = (function (){var G__40309 = ctx;
var G__40310 = expr;
var G__40311 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__40309,G__40310,G__40311) : sci.impl.analyzer.return_or.call(null,G__40309,G__40310,G__40311));
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
var G__40324 = child_count_SHARP_;
switch (G__40324) {
case (0):
return null;

break;
case (1):
var G__40325 = ctx;
var G__40326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40325,G__40326) : sci.impl.analyzer.analyze.call(null,G__40325,G__40326));

break;
case (2):
var a0_SHARP_ = (function (){var G__40327 = ctx;
var G__40328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40327,G__40328) : sci.impl.analyzer.analyze.call(null,G__40327,G__40328));
})();
var a1_SHARP_ = (function (){var G__40330 = ctx;
var G__40331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40330,G__40331) : sci.impl.analyzer.analyze.call(null,G__40330,G__40331));
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
var a0_SHARP_ = (function (){var G__40338 = ctx;
var G__40339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40338,G__40339) : sci.impl.analyzer.analyze.call(null,G__40338,G__40339));
})();
var a1_SHARP_ = (function (){var G__40340 = ctx;
var G__40341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40340,G__40341) : sci.impl.analyzer.analyze.call(null,G__40340,G__40341));
})();
var a2_SHARP_ = (function (){var G__40342 = ctx;
var G__40343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40342,G__40343) : sci.impl.analyzer.analyze.call(null,G__40342,G__40343));
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
var a0_SHARP_ = (function (){var G__40345 = ctx;
var G__40346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40345,G__40346) : sci.impl.analyzer.analyze.call(null,G__40345,G__40346));
})();
var a1_SHARP_ = (function (){var G__40347 = ctx;
var G__40348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40347,G__40348) : sci.impl.analyzer.analyze.call(null,G__40347,G__40348));
})();
var a2_SHARP_ = (function (){var G__40350 = ctx;
var G__40351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40350,G__40351) : sci.impl.analyzer.analyze.call(null,G__40350,G__40351));
})();
var a3_SHARP_ = (function (){var G__40353 = ctx;
var G__40354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40353,G__40354) : sci.impl.analyzer.analyze.call(null,G__40353,G__40354));
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
var a0_SHARP_ = (function (){var G__40356 = ctx;
var G__40357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40356,G__40357) : sci.impl.analyzer.analyze.call(null,G__40356,G__40357));
})();
var a1_SHARP_ = (function (){var G__40358 = ctx;
var G__40359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40358,G__40359) : sci.impl.analyzer.analyze.call(null,G__40358,G__40359));
})();
var a2_SHARP_ = (function (){var G__40360 = ctx;
var G__40361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40360,G__40361) : sci.impl.analyzer.analyze.call(null,G__40360,G__40361));
})();
var a3_SHARP_ = (function (){var G__40362 = ctx;
var G__40363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40362,G__40363) : sci.impl.analyzer.analyze.call(null,G__40362,G__40363));
})();
var a4_SHARP_ = (function (){var G__40364 = ctx;
var G__40365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40364,G__40365) : sci.impl.analyzer.analyze.call(null,G__40364,G__40365));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40324)].join('')));

}
}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__40366 = ctx;
var G__40367 = expr;
var G__40368 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__40366,G__40367,G__40368) : sci.impl.analyzer.return_and.call(null,G__40366,G__40367,G__40368));
})();
var a1_SHARP_ = (function (){var G__40369 = ctx;
var G__40370 = expr;
var G__40371 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__40369,G__40370,G__40371) : sci.impl.analyzer.return_and.call(null,G__40369,G__40370,G__40371));
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
var G__40372 = child_count_SHARP_;
switch (G__40372) {
case (0):
return true;

break;
case (1):
var G__40373 = ctx;
var G__40374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40373,G__40374) : sci.impl.analyzer.analyze.call(null,G__40373,G__40374));

break;
case (2):
var a0_SHARP_ = (function (){var G__40375 = ctx;
var G__40376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40375,G__40376) : sci.impl.analyzer.analyze.call(null,G__40375,G__40376));
})();
var a1_SHARP_ = (function (){var G__40377 = ctx;
var G__40378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40377,G__40378) : sci.impl.analyzer.analyze.call(null,G__40377,G__40378));
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
var a0_SHARP_ = (function (){var G__40386 = ctx;
var G__40387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40386,G__40387) : sci.impl.analyzer.analyze.call(null,G__40386,G__40387));
})();
var a1_SHARP_ = (function (){var G__40388 = ctx;
var G__40389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40388,G__40389) : sci.impl.analyzer.analyze.call(null,G__40388,G__40389));
})();
var a2_SHARP_ = (function (){var G__40390 = ctx;
var G__40391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40390,G__40391) : sci.impl.analyzer.analyze.call(null,G__40390,G__40391));
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
var a0_SHARP_ = (function (){var G__40392 = ctx;
var G__40393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40392,G__40393) : sci.impl.analyzer.analyze.call(null,G__40392,G__40393));
})();
var a1_SHARP_ = (function (){var G__40394 = ctx;
var G__40395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40394,G__40395) : sci.impl.analyzer.analyze.call(null,G__40394,G__40395));
})();
var a2_SHARP_ = (function (){var G__40396 = ctx;
var G__40397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40396,G__40397) : sci.impl.analyzer.analyze.call(null,G__40396,G__40397));
})();
var a3_SHARP_ = (function (){var G__40398 = ctx;
var G__40399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40398,G__40399) : sci.impl.analyzer.analyze.call(null,G__40398,G__40399));
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
var a0_SHARP_ = (function (){var G__40400 = ctx;
var G__40401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40400,G__40401) : sci.impl.analyzer.analyze.call(null,G__40400,G__40401));
})();
var a1_SHARP_ = (function (){var G__40402 = ctx;
var G__40403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40402,G__40403) : sci.impl.analyzer.analyze.call(null,G__40402,G__40403));
})();
var a2_SHARP_ = (function (){var G__40404 = ctx;
var G__40405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40404,G__40405) : sci.impl.analyzer.analyze.call(null,G__40404,G__40405));
})();
var a3_SHARP_ = (function (){var G__40414 = ctx;
var G__40415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40414,G__40415) : sci.impl.analyzer.analyze.call(null,G__40414,G__40415));
})();
var a4_SHARP_ = (function (){var G__40416 = ctx;
var G__40417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40416,G__40417) : sci.impl.analyzer.analyze.call(null,G__40416,G__40417));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40372)].join('')));

}
}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location((function (){var G__40423 = new cljs.core.Keyword(null,"no-recur-reason","no-recur-reason",-1993064353).cljs$core$IFn$_invoke$arity$1(ctx);
var G__40423__$1 = (((G__40423 instanceof cljs.core.Keyword))?G__40423.fqn:null);
switch (G__40423__$1) {
case "try":
return "Cannot recur across try";

break;
default:
return "Can only recur from tail position";

}
})(),expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__40424 = cljs.core.count(analyzed_children);
switch (G__40424) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40424)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40585_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__40585_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__40585_SHARP_));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k40590,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__40596 = k40590;
var G__40596__$1 = (((G__40596 instanceof cljs.core.Keyword))?G__40596.fqn:null);
switch (G__40596__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40590,else__5326__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__40602){
var vec__40603 = p__40602;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40603,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40603,(1),null);
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40589){
var self__ = this;
var G__40589__$1 = this;
return (new cljs.core.RecordIter((0),G__40589__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40591,other40592){
var self__ = this;
var this40591__$1 = this;
return (((!((other40592 == null)))) && ((((this40591__$1.constructor === other40592.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40591__$1.params,other40592.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40591__$1.body,other40592.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40591__$1.fixed_arity,other40592.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40591__$1.var_arg_name,other40592.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40591__$1.self_ref_idx,other40592.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40591__$1.iden__GT_invoke_idx,other40592.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40591__$1.__extmap,other40592.__extmap)))))))))))))))));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k40590){
var self__ = this;
var this__5330__auto____$1 = this;
var G__40616 = k40590;
var G__40616__$1 = (((G__40616 instanceof cljs.core.Keyword))?G__40616.fqn:null);
switch (G__40616__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40590);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__40589){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__40619 = cljs.core.keyword_identical_QMARK_;
var expr__40620 = k__5332__auto__;
if(cljs.core.truth_((pred__40619.cljs$core$IFn$_invoke$arity$2 ? pred__40619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__40620) : pred__40619.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__40620)))){
return (new sci.impl.analyzer.FnBody(G__40589,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40619.cljs$core$IFn$_invoke$arity$2 ? pred__40619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__40620) : pred__40619.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__40620)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__40589,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40619.cljs$core$IFn$_invoke$arity$2 ? pred__40619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__40620) : pred__40619.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__40620)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__40589,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40619.cljs$core$IFn$_invoke$arity$2 ? pred__40619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__40620) : pred__40619.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__40620)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__40589,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40619.cljs$core$IFn$_invoke$arity$2 ? pred__40619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__40620) : pred__40619.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__40620)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__40589,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40619.cljs$core$IFn$_invoke$arity$2 ? pred__40619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__40620) : pred__40619.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__40620)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__40589,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__40589),null));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__40589){
var self__ = this;
var this__5322__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__40589,self__.__extmap,self__.__hash));
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
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__40593){
var extmap__5365__auto__ = (function (){var G__40626 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40593,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__40593)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40626);
} else {
return G__40626;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__40593),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__40593),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__40593),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__40593),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__40593),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__40593),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__40628,p__40629,_macro_QMARK_,fn_name,fn_id){
var map__40630 = p__40628;
var map__40630__$1 = cljs.core.__destructure_map(map__40630);
var ctx = map__40630__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40630__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__40631 = p__40629;
var seq__40632 = cljs.core.seq(vec__40631);
var first__40633 = cljs.core.first(seq__40632);
var seq__40632__$1 = cljs.core.next(seq__40632);
var binding_vector = first__40633;
var body_exprs = seq__40632__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var vec__40634 = cljs.core.split_with((function (p1__40627_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__40627_SHARP_);
}),binding_vector);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40634,(0),null);
var vec__40637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40634,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40637,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40637,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__40640 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__40640,var_arg_name);
} else {
return G__40640;
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
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__40641 = ctx__$4;
var G__40642 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__40643 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__40641,G__40642,G__40643) : sci.impl.analyzer.update_parents.call(null,G__40641,G__40642,G__40643));
})():null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body_exprs);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__40644 = sci.impl.analyzer.__GT_FnBody(binding_vector,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40644,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__40644;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__40646 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__40647 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40646,G__40647) : sci.impl.analyzer.analyze.call(null,G__40646,G__40647));
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
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__40648_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__40648_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
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
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__40652){
var vec__40653 = p__40652;
var seq__40654 = cljs.core.seq(vec__40653);
var first__40655 = cljs.core.first(seq__40654);
var seq__40654__$1 = cljs.core.next(seq__40654);
var _fn = first__40655;
var first__40655__$1 = cljs.core.first(seq__40654__$1);
var seq__40654__$2 = cljs.core.next(seq__40654__$1);
var name_QMARK_ = first__40655__$1;
var body = seq__40654__$2;
var fn_expr = vec__40653;
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
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40659,body__$2){
var map__40660 = p__40659;
var map__40660__$1 = cljs.core.__destructure_map(map__40660);
var acc = map__40660__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40660__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40660__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
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
var vec__40656 = (((function (){var or__5025__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__40663 = closed_over_cnt;
if(cljs.core.truth_(fn_name__$1)){
return (G__40663 + (1));
} else {
return G__40663;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5825__auto__)){
var binding_idx = temp__5825__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__40664 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__40664[(0)] = binding_idx);

(G__40664[(1)] = enclosed_idx);

return G__40664;
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
var G__42009 = (idx + (1));
var G__42010 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__42009;
ret = G__42010;
continue;
} else {
return ret;
}
break;
}
}),enclosed_array_cnt], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly(null)], null));
var bindings_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40656,(0),null);
var enclosed_array_cnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40656,(1),null);
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5825__auto__)){
var invocation_idx = temp__5825__auto__;
var G__40665 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__40665[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__40665[(1)] = invocation_idx);

return G__40665;
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
var G__42011 = (idx + (1));
var G__42012 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__42011;
ret = G__42012;
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
var self_ref_in_enclosed_idx = (function (){var G__40666 = enclosed_array_cnt;
if((G__40666 == null)){
return null;
} else {
return (G__40666 - (1));
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
var G__42013__delegate = function (args){
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
var G__42013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42014__i = 0, G__42014__a = new Array(arguments.length -  0);
while (G__42014__i < G__42014__a.length) {G__42014__a[G__42014__i] = arguments[G__42014__i + 0]; ++G__42014__i;}
  args = new cljs.core.IndexedSeq(G__42014__a,0,null);
} 
return G__42013__delegate.call(this,args);};
G__42013.cljs$lang$maxFixedArity = 0;
G__42013.cljs$lang$applyTo = (function (arglist__42015){
var args = cljs.core.seq(arglist__42015);
return G__42013__delegate(args);
});
G__42013.cljs$core$IFn$_invoke$arity$variadic = G__42013__delegate;
return G__42013;
})()
;
var f__$1 = (((fn_meta__$1 == null))?f:(function (){var fn_meta__$2 = sci.impl.types.eval(fn_meta__$1,ctx__$5,bindings__$1);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$2);
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__40651_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__40651_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
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
var G__40669 = ctx;
var G__40670 = expr;
var G__40671 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings);
var G__40672 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings)),exprs),cljs.core.meta(expr))], null);
return (sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4 ? sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4(G__40669,G__40670,G__40671,G__40672) : sci.impl.analyzer.analyze_let_STAR_.call(null,G__40669,G__40670,G__40671,G__40672));
} else {
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var stack = sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(expr),true);
var vec__40673 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40677,p__40678){
var vec__40679 = p__40677;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40679,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40679,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40679,(2),null);
var vec__40682 = p__40678;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40682,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40682,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),(function (p1__40668_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40668_SHARP_,binding_name__$1),binding_name__$1,new_iden);
})),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(let_nodes,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40673,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40673,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40673,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
var G__40686 = cljs.core.count(idxs);
switch (G__40686) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40686)].join('')));

}
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__40687){
var vec__40688 = p__40687;
var seq__40689 = cljs.core.seq(vec__40688);
var first__40690 = cljs.core.first(seq__40689);
var seq__40689__$1 = cljs.core.next(seq__40689);
var _let = first__40690;
var first__40690__$1 = cljs.core.first(seq__40689__$1);
var seq__40689__$2 = cljs.core.next(seq__40689__$1);
var let_bindings = first__40690__$1;
var exprs = seq__40689__$2;
var expr = vec__40688;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_42017 = sci.impl.utils.current_ns_name();
var env_42018 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_42019 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_42018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_42017], null));
var refers_42020 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_42019);
var the_current_ns_42021__$1 = (function (){var temp__5823__auto__ = (function (){var and__5023__auto__ = refers_42020;
if(cljs.core.truth_(and__5023__auto__)){
return refers_42020.get(name);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var x = temp__5823__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_42017)].join(''),expr);
} else {
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_42019,name);
if(cljs.core.truth_(temp__5823__auto____$1)){
var the_var = temp__5823__auto____$1;
var cur_file = cljs.core.deref(sci.impl.utils.current_file);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_file,new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(the_var)))){
} else {
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(the_var,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cur_file], 0));
}

return the_current_ns_42019;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_42019,name,(function (){var G__40691 = (new sci.lang.Var(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_42017),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], null),false,false,null));
G__40691.sci$impl$vars$IVar$unbind$arity$1(null);

return G__40691;
})());
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_42018,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_42017,the_current_ns_42021__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__40692 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40692,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40692,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40692,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40692,(3),null);
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
var G__40711 = cljs.core.count(children);
switch (G__40711) {
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
var case_val = (function (){var G__40715 = ctx_wo_rt;
var G__40716 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40715,G__40716) : sci.impl.analyzer.analyze.call(null,G__40715,G__40716));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__40712 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__40721 = ctx;
var G__40722 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40721,G__40722) : sci.impl.analyzer.analyze.call(null,G__40721,G__40722));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40712,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40712,(1),null);
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
var vec__40726 = cases__$1;
var seq__40727 = cljs.core.seq(vec__40726);
var first__40728 = cljs.core.first(seq__40727);
var seq__40727__$1 = cljs.core.next(seq__40727);
var k = first__40728;
var first__40728__$1 = cljs.core.first(seq__40727__$1);
var seq__40727__$2 = cljs.core.next(seq__40727__$1);
var v = first__40728__$1;
var cases__$2 = seq__40727__$2;
if(cljs.core.seq_QMARK_(k)){
var G__42023 = cases__$2;
var G__42024 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__40726,seq__40727,first__40728,seq__40727__$1,k,first__40728__$1,seq__40727__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__40712,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__40726,seq__40727,first__40728,seq__40727__$1,k,first__40728__$1,seq__40727__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__40712,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__42023;
ret_map = G__42024;
continue;
} else {
var G__42025 = cases__$2;
var G__42026 = assoc_new(ret_map,k,v);
cases__$1 = G__42025;
ret_map = G__42026;
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
var vec__40734 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__42028 = exprs__$1;
var G__42029 = body_exprs;
var G__42030 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__42031 = finally_expr;
exprs = G__42028;
body_exprs = G__42029;
catch_exprs = G__42030;
finally_expr = G__42031;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__42032 = exprs__$1;
var G__42033 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__42034 = catch_exprs;
var G__42035 = finally_expr;
exprs = G__42032;
body_exprs = G__42033;
catch_exprs = G__42034;
finally_expr = G__42035;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40734,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40734,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40734,(2),null);
var body__$1 = (function (){var G__40740 = ctx__$1;
var G__40741 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40740,G__40741) : sci.impl.analyzer.analyze.call(null,G__40740,G__40741));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__40742 = c;
var seq__40743 = cljs.core.seq(vec__40742);
var first__40744 = cljs.core.first(seq__40743);
var seq__40743__$1 = cljs.core.next(seq__40743);
var _ = first__40744;
var first__40744__$1 = cljs.core.first(seq__40743__$1);
var seq__40743__$2 = cljs.core.next(seq__40743__$1);
var ex = first__40744__$1;
var first__40744__$2 = cljs.core.first(seq__40743__$2);
var seq__40743__$3 = cljs.core.next(seq__40743__$2);
var binding = first__40744__$2;
var body__$2 = seq__40743__$3;
var temp__5823__auto__ = (function (){var G__40745 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__40745)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__40745)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__40745)){
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
var analyzed_body = (function (){var G__40751 = ctx__$2;
var G__40752 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40751,G__40752) : sci.impl.analyzer.analyze.call(null,G__40751,G__40752));
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
var G__40753 = ex;
var G__40753__$1 = (((G__40753 == null))?null:cljs.core.meta(G__40753));
if((G__40753__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci","error","sci/error",-979082803).cljs$core$IFn$_invoke$arity$1(G__40753__$1);
}
} else {
return and__5023__auto__;
}
})();
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__40754 = ctx__$1;
var G__40755 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40754,G__40755) : sci.impl.analyzer.analyze.call(null,G__40754,G__40755));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1,sci_error);
}),stack);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__40756){
var vec__40757 = p__40756;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40757,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40757,(1),null);
var expr = vec__40757;
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
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__40762){
var vec__40763 = p__40762;
var seq__40764 = cljs.core.seq(vec__40763);
var first__40765 = cljs.core.first(seq__40764);
var seq__40764__$1 = cljs.core.next(seq__40764);
var _dot = first__40765;
var first__40765__$1 = cljs.core.first(seq__40764__$1);
var seq__40764__$2 = cljs.core.next(seq__40764__$1);
var instance_expr = first__40765__$1;
var first__40765__$2 = cljs.core.first(seq__40764__$2);
var seq__40764__$3 = cljs.core.next(seq__40764__$2);
var method_expr = first__40765__$2;
var args = seq__40764__$3;
var expr = vec__40763;
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__40766 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__40767 = cljs.core.seq(vec__40766);
var first__40768 = cljs.core.first(seq__40767);
var seq__40767__$1 = cljs.core.next(seq__40767);
var method_expr__$1 = first__40768;
var args__$1 = seq__40767__$1;
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
return cljs.core.with_meta((function (){var G__40773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean$(allowed_QMARK_),cljs.core.boolean$(field_access)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__40773)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.allowed_instance_field_invocation(ctx__$2,bindings,instance_expr__$1,meth_name);
}),stack);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__40773)){
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
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__40778){
var vec__40779 = p__40778;
var seq__40780 = cljs.core.seq(vec__40779);
var first__40781 = cljs.core.first(seq__40780);
var seq__40780__$1 = cljs.core.next(seq__40780);
var method_name = first__40781;
var first__40781__$1 = cljs.core.first(seq__40780__$1);
var seq__40780__$2 = cljs.core.next(seq__40780__$1);
var obj = first__40781__$1;
var args = seq__40780__$2;
var expr = vec__40779;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,cljs.core.with_meta((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)),cljs.core.meta(expr)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__40787){
var vec__40788 = p__40787;
var seq__40789 = cljs.core.seq(vec__40788);
var first__40790 = cljs.core.first(seq__40789);
var seq__40789__$1 = cljs.core.next(seq__40789);
var _new = first__40790;
var first__40790__$1 = cljs.core.first(seq__40789__$1);
var seq__40789__$2 = cljs.core.next(seq__40789__$1);
var class_sym = first__40790__$1;
var args = seq__40789__$2;
var expr = vec__40788;
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
var G__40791 = ctx__$1;
var G__40792 = expr;
var G__40793 = maybe_record_constructor;
var G__40794 = args__$1;
var G__40795 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__40796 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__40791,G__40792,G__40793,G__40794,G__40795,G__40796) : sci.impl.analyzer.return_call.call(null,G__40791,G__40792,G__40793,G__40794,G__40795,G__40796));
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
var G__40800 = ctx__$1;
var G__40801 = expr;
var G__40802 = new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__40803 = args__$1;
var G__40804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__40805 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__40800,G__40801,G__40802,G__40803,G__40804,G__40805) : sci.impl.analyzer.return_call.call(null,G__40800,G__40801,G__40802,G__40803,G__40804,G__40805));
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
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__40810){
var vec__40811 = p__40810;
var seq__40812 = cljs.core.seq(vec__40811);
var first__40813 = cljs.core.first(seq__40812);
var seq__40812__$1 = cljs.core.next(seq__40812);
var constructor_sym = first__40813;
var args = seq__40812__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(constructor_sym),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e40818){if((e40818 instanceof Error)){
var e = e40818;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e40818;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__40819){
var vec__40820 = p__40819;
var seq__40821 = cljs.core.seq(vec__40820);
var first__40822 = cljs.core.first(seq__40821);
var seq__40821__$1 = cljs.core.next(seq__40821);
var _ns = first__40822;
var first__40822__$1 = cljs.core.first(seq__40821__$1);
var seq__40821__$2 = cljs.core.next(seq__40821__$1);
var ns_name = first__40822__$1;
var exprs = seq__40821__$2;
var expr = vec__40820;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__40823 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40823,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40823,(1),null);
var vec__40826 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40826,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40826,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__40842 = cljs.core.first(exprs__$3);
var seq__40843 = cljs.core.seq(vec__40842);
var first__40844 = cljs.core.first(seq__40843);
var seq__40843__$1 = cljs.core.next(seq__40843);
var k = first__40844;
var args = seq__40843__$1;
var expr__$1 = vec__40842;
var G__40845 = k;
var G__40845__$1 = (((G__40845 instanceof cljs.core.Keyword))?G__40845.fqn:null);
switch (G__40845__$1) {
case "require":
case "require-macros":
case "use":
case "import":
case "refer-clojure":
var G__42037 = cljs.core.next(exprs__$3);
var G__42038 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__40846 = k;
var G__40846__$1 = (((G__40846 instanceof cljs.core.Keyword))?G__40846.fqn:null);
switch (G__40846__$1) {
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
return ((function (exprs__$3,ret,G__40846,G__40846__$1,G__40845,G__40845__$1,vec__40842,seq__40843,first__40844,seq__40843__$1,k,args,expr__$1,vec__40823,docstring,exprs__$1,vec__40826,attr_map,exprs__$2,attr_map__$1,vec__40820,seq__40821,first__40822,seq__40821__$1,_ns,first__40822__$1,seq__40821__$2,ns_name,exprs,expr){
return (function() { 
var G__42040__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__42040 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__42041__i = 0, G__42041__a = new Array(arguments.length -  1);
while (G__42041__i < G__42041__a.length) {G__42041__a[G__42041__i] = arguments[G__42041__i + 1]; ++G__42041__i;}
  args__$1 = new cljs.core.IndexedSeq(G__42041__a,0,null);
} 
return G__42040__delegate.call(this,ctx__$1,args__$1);};
G__42040.cljs$lang$maxFixedArity = 1;
G__42040.cljs$lang$applyTo = (function (arglist__42042){
var ctx__$1 = cljs.core.first(arglist__42042);
var args__$1 = cljs.core.rest(arglist__42042);
return G__42040__delegate(ctx__$1,args__$1);
});
G__42040.cljs$core$IFn$_invoke$arity$variadic = G__42040__delegate;
return G__42040;
})()
;
;})(exprs__$3,ret,G__40846,G__40846__$1,G__40845,G__40845__$1,vec__40842,seq__40843,first__40844,seq__40843__$1,k,args,expr__$1,vec__40823,docstring,exprs__$1,vec__40826,attr_map,exprs__$2,attr_map__$1,vec__40820,seq__40821,first__40822,seq__40821__$1,_ns,first__40822__$1,seq__40821__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40846__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__42037;
ret = G__42038;
continue;

break;
case "gen-class":
var G__42043 = cljs.core.next(exprs__$3);
var G__42044 = ret;
exprs__$3 = G__42043;
ret = G__42044;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40845__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__40823,docstring,exprs__$1,vec__40826,attr_map,exprs__$2,attr_map__$1,vec__40820,seq__40821,first__40822,seq__40821__$1,_ns,first__40822__$1,seq__40821__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__40823,docstring,exprs__$1,vec__40826,attr_map,exprs__$2,attr_map__$1,vec__40820,seq__40821,first__40822,seq__40821__$1,_ns,first__40822__$1,seq__40821__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__40856){
var vec__40857 = p__40856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40857,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40857,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__40860){
var vec__40861 = p__40860;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40861,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40861,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40861,(2),null);
var expr = vec__40861;
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
var G__40874 = cljs.core.count(analyzed_children);
switch (G__40874) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__40877 = (bindings[idx]);
return (fexpr__40877.cljs$core$IFn$_invoke$arity$0 ? fexpr__40877.cljs$core$IFn$_invoke$arity$0() : fexpr__40877.call(null));
}catch (e40875){if((e40875 instanceof Error)){
var e__39975__auto__ = e40875;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40875;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40884 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__40883 = (bindings[idx]);
return (fexpr__40883.cljs$core$IFn$_invoke$arity$1 ? fexpr__40883.cljs$core$IFn$_invoke$arity$1(G__40884) : fexpr__40883.call(null,G__40884));
}catch (e40882){if((e40882 instanceof Error)){
var e__39975__auto__ = e40882;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40882;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40887 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40888 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__40886 = (bindings[idx]);
return (fexpr__40886.cljs$core$IFn$_invoke$arity$2 ? fexpr__40886.cljs$core$IFn$_invoke$arity$2(G__40887,G__40888) : fexpr__40886.call(null,G__40887,G__40888));
}catch (e40885){if((e40885 instanceof Error)){
var e__39975__auto__ = e40885;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40885;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40891 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40892 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40893 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__40890 = (bindings[idx]);
return (fexpr__40890.cljs$core$IFn$_invoke$arity$3 ? fexpr__40890.cljs$core$IFn$_invoke$arity$3(G__40891,G__40892,G__40893) : fexpr__40890.call(null,G__40891,G__40892,G__40893));
}catch (e40889){if((e40889 instanceof Error)){
var e__39975__auto__ = e40889;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40889;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40901 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40902 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40903 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40904 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__40900 = (bindings[idx]);
return (fexpr__40900.cljs$core$IFn$_invoke$arity$4 ? fexpr__40900.cljs$core$IFn$_invoke$arity$4(G__40901,G__40902,G__40903,G__40904) : fexpr__40900.call(null,G__40901,G__40902,G__40903,G__40904));
}catch (e40899){if((e40899 instanceof Error)){
var e__39975__auto__ = e40899;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40899;

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
try{var G__40910 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40911 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40912 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40913 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40914 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__40909 = (bindings[idx]);
return (fexpr__40909.cljs$core$IFn$_invoke$arity$5 ? fexpr__40909.cljs$core$IFn$_invoke$arity$5(G__40910,G__40911,G__40912,G__40913,G__40914) : fexpr__40909.call(null,G__40910,G__40911,G__40912,G__40913,G__40914));
}catch (e40908){if((e40908 instanceof Error)){
var e__39975__auto__ = e40908;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40908;

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
try{var G__40922 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40923 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40924 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40925 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40926 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40927 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__40921 = (bindings[idx]);
return (fexpr__40921.cljs$core$IFn$_invoke$arity$6 ? fexpr__40921.cljs$core$IFn$_invoke$arity$6(G__40922,G__40923,G__40924,G__40925,G__40926,G__40927) : fexpr__40921.call(null,G__40922,G__40923,G__40924,G__40925,G__40926,G__40927));
}catch (e40915){if((e40915 instanceof Error)){
var e__39975__auto__ = e40915;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40915;

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
try{var G__40930 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40931 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40932 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40933 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40934 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40935 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40936 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__40929 = (bindings[idx]);
return (fexpr__40929.cljs$core$IFn$_invoke$arity$7 ? fexpr__40929.cljs$core$IFn$_invoke$arity$7(G__40930,G__40931,G__40932,G__40933,G__40934,G__40935,G__40936) : fexpr__40929.call(null,G__40930,G__40931,G__40932,G__40933,G__40934,G__40935,G__40936));
}catch (e40928){if((e40928 instanceof Error)){
var e__39975__auto__ = e40928;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40928;

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
try{var G__40939 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40940 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40941 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40942 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40943 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40944 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40945 = sci.impl.types.eval(arg6,ctx,bindings);
var G__40946 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__40938 = (bindings[idx]);
return (fexpr__40938.cljs$core$IFn$_invoke$arity$8 ? fexpr__40938.cljs$core$IFn$_invoke$arity$8(G__40939,G__40940,G__40941,G__40942,G__40943,G__40944,G__40945,G__40946) : fexpr__40938.call(null,G__40939,G__40940,G__40941,G__40942,G__40943,G__40944,G__40945,G__40946));
}catch (e40937){if((e40937 instanceof Error)){
var e__39975__auto__ = e40937;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40937;

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
try{var G__40953 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40954 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40955 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40956 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40957 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40958 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40959 = sci.impl.types.eval(arg6,ctx,bindings);
var G__40960 = sci.impl.types.eval(arg7,ctx,bindings);
var G__40961 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__40952 = (bindings[idx]);
return (fexpr__40952.cljs$core$IFn$_invoke$arity$9 ? fexpr__40952.cljs$core$IFn$_invoke$arity$9(G__40953,G__40954,G__40955,G__40956,G__40957,G__40958,G__40959,G__40960,G__40961) : fexpr__40952.call(null,G__40953,G__40954,G__40955,G__40956,G__40957,G__40958,G__40959,G__40960,G__40961));
}catch (e40951){if((e40951 instanceof Error)){
var e__39975__auto__ = e40951;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40951;

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
try{var G__40964 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40965 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40966 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40967 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40968 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40969 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40970 = sci.impl.types.eval(arg6,ctx,bindings);
var G__40971 = sci.impl.types.eval(arg7,ctx,bindings);
var G__40972 = sci.impl.types.eval(arg8,ctx,bindings);
var G__40973 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__40963 = (bindings[idx]);
return (fexpr__40963.cljs$core$IFn$_invoke$arity$10 ? fexpr__40963.cljs$core$IFn$_invoke$arity$10(G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970,G__40971,G__40972,G__40973) : fexpr__40963.call(null,G__40964,G__40965,G__40966,G__40967,G__40968,G__40969,G__40970,G__40971,G__40972,G__40973));
}catch (e40962){if((e40962 instanceof Error)){
var e__39975__auto__ = e40962;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40962;

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
try{var G__40980 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40981 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40982 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40983 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40984 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40985 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40986 = sci.impl.types.eval(arg6,ctx,bindings);
var G__40987 = sci.impl.types.eval(arg7,ctx,bindings);
var G__40988 = sci.impl.types.eval(arg8,ctx,bindings);
var G__40989 = sci.impl.types.eval(arg9,ctx,bindings);
var G__40990 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__40979 = (bindings[idx]);
return (fexpr__40979.cljs$core$IFn$_invoke$arity$11 ? fexpr__40979.cljs$core$IFn$_invoke$arity$11(G__40980,G__40981,G__40982,G__40983,G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,G__40990) : fexpr__40979.call(null,G__40980,G__40981,G__40982,G__40983,G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,G__40990));
}catch (e40978){if((e40978 instanceof Error)){
var e__39975__auto__ = e40978;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40978;

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
try{var G__40993 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40994 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40995 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40996 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40997 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40998 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40999 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41000 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41001 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41002 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41003 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41004 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__40992 = (bindings[idx]);
return (fexpr__40992.cljs$core$IFn$_invoke$arity$12 ? fexpr__40992.cljs$core$IFn$_invoke$arity$12(G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001,G__41002,G__41003,G__41004) : fexpr__40992.call(null,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000,G__41001,G__41002,G__41003,G__41004));
}catch (e40991){if((e40991 instanceof Error)){
var e__39975__auto__ = e40991;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e40991;

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
try{var G__41007 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41008 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41009 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41010 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41011 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41012 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41013 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41014 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41015 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41016 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41017 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41018 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41019 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__41006 = (bindings[idx]);
return (fexpr__41006.cljs$core$IFn$_invoke$arity$13 ? fexpr__41006.cljs$core$IFn$_invoke$arity$13(G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017,G__41018,G__41019) : fexpr__41006.call(null,G__41007,G__41008,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017,G__41018,G__41019));
}catch (e41005){if((e41005 instanceof Error)){
var e__39975__auto__ = e41005;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e41005;

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
try{var G__41023 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41024 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41025 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41026 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41027 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41028 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41029 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41030 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41031 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41032 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41033 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41034 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41035 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41036 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__41022 = (bindings[idx]);
return (fexpr__41022.cljs$core$IFn$_invoke$arity$14 ? fexpr__41022.cljs$core$IFn$_invoke$arity$14(G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033,G__41034,G__41035,G__41036) : fexpr__41022.call(null,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029,G__41030,G__41031,G__41032,G__41033,G__41034,G__41035,G__41036));
}catch (e41020){if((e41020 instanceof Error)){
var e__39975__auto__ = e41020;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e41020;

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
try{var G__41042 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41043 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41044 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41045 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41046 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41047 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41048 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41049 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41050 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41051 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41052 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41053 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41054 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41055 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41056 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__41041 = (bindings[idx]);
return (fexpr__41041.cljs$core$IFn$_invoke$arity$15 ? fexpr__41041.cljs$core$IFn$_invoke$arity$15(G__41042,G__41043,G__41044,G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056) : fexpr__41041.call(null,G__41042,G__41043,G__41044,G__41045,G__41046,G__41047,G__41048,G__41049,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056));
}catch (e41040){if((e41040 instanceof Error)){
var e__39975__auto__ = e41040;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e41040;

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
try{var G__41059 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41060 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41061 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41062 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41063 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41064 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41065 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41066 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41067 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41068 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41069 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41070 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41071 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41072 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41073 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41074 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__41058 = (bindings[idx]);
return (fexpr__41058.cljs$core$IFn$_invoke$arity$16 ? fexpr__41058.cljs$core$IFn$_invoke$arity$16(G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074) : fexpr__41058.call(null,G__41059,G__41060,G__41061,G__41062,G__41063,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074));
}catch (e41057){if((e41057 instanceof Error)){
var e__39975__auto__ = e41057;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e41057;

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
try{var G__41077 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41078 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41079 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41080 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41081 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41082 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41083 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41084 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41085 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41086 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41087 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41088 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41089 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41090 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41091 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41092 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41093 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__41076 = (bindings[idx]);
return (fexpr__41076.cljs$core$IFn$_invoke$arity$17 ? fexpr__41076.cljs$core$IFn$_invoke$arity$17(G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093) : fexpr__41076.call(null,G__41077,G__41078,G__41079,G__41080,G__41081,G__41082,G__41083,G__41084,G__41085,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093));
}catch (e41075){if((e41075 instanceof Error)){
var e__39975__auto__ = e41075;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e41075;

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
try{var G__41096 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41097 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41098 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41099 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41100 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41101 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41102 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41103 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41104 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41105 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41106 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41107 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41108 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41109 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41110 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41111 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41112 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41113 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__41095 = (bindings[idx]);
return (fexpr__41095.cljs$core$IFn$_invoke$arity$18 ? fexpr__41095.cljs$core$IFn$_invoke$arity$18(G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113) : fexpr__41095.call(null,G__41096,G__41097,G__41098,G__41099,G__41100,G__41101,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41112,G__41113));
}catch (e41094){if((e41094 instanceof Error)){
var e__39975__auto__ = e41094;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e41094;

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
try{var G__41118 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41119 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41120 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41121 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41122 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41123 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41124 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41125 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41126 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41127 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41128 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41129 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41130 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41131 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41132 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41133 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41134 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41135 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41136 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__41117 = (bindings[idx]);
return (fexpr__41117.cljs$core$IFn$_invoke$arity$19 ? fexpr__41117.cljs$core$IFn$_invoke$arity$19(G__41118,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136) : fexpr__41117.call(null,G__41118,G__41119,G__41120,G__41121,G__41122,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136));
}catch (e41116){if((e41116 instanceof Error)){
var e__39975__auto__ = e41116;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__39975__auto__,this$);
} else {
throw e41116;

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
var G__41137 = cljs.core.count(analyzed_children);
switch (G__41137) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41140 = ctx;
var G__41141 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41140,G__41141) : f.call(null,G__41140,G__41141));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41142 = ctx;
var G__41143 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41144 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__41142,G__41143,G__41144) : f.call(null,G__41142,G__41143,G__41144));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41145 = ctx;
var G__41146 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41147 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41148 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__41145,G__41146,G__41147,G__41148) : f.call(null,G__41145,G__41146,G__41147,G__41148));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41151 = ctx;
var G__41152 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41153 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41154 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41155 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__41151,G__41152,G__41153,G__41154,G__41155) : f.call(null,G__41151,G__41152,G__41153,G__41154,G__41155));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41156 = ctx;
var G__41157 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41158 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41159 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41160 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41161 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__41156,G__41157,G__41158,G__41159,G__41160,G__41161) : f.call(null,G__41156,G__41157,G__41158,G__41159,G__41160,G__41161));
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
var G__41162 = ctx;
var G__41163 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41164 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41165 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41166 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41167 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41168 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168) : f.call(null,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168));
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
var G__41173 = ctx;
var G__41174 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41175 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41176 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41177 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41178 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41179 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41180 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__41173,G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180) : f.call(null,G__41173,G__41174,G__41175,G__41176,G__41177,G__41178,G__41179,G__41180));
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
var G__41181 = ctx;
var G__41182 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41183 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41184 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41185 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41186 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41187 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41188 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41189 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189) : f.call(null,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189));
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
var G__41190 = ctx;
var G__41191 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41192 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41193 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41194 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41195 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41196 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41197 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41198 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41199 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198,G__41199) : f.call(null,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198,G__41199));
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
var G__41204 = ctx;
var G__41205 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41206 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41207 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41208 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41209 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41210 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41211 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41212 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41213 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41214 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__41204,G__41205,G__41206,G__41207,G__41208,G__41209,G__41210,G__41211,G__41212,G__41213,G__41214) : f.call(null,G__41204,G__41205,G__41206,G__41207,G__41208,G__41209,G__41210,G__41211,G__41212,G__41213,G__41214));
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
var G__41215 = ctx;
var G__41216 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41217 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41218 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41219 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41220 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41221 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41222 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41223 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41224 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41225 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41226 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__41215,G__41216,G__41217,G__41218,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224,G__41225,G__41226) : f.call(null,G__41215,G__41216,G__41217,G__41218,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224,G__41225,G__41226));
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
var G__41231 = ctx;
var G__41232 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41233 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41234 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41235 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41236 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41237 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41238 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41239 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41240 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41241 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41242 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41243 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239,G__41240,G__41241,G__41242,G__41243) : f.call(null,G__41231,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239,G__41240,G__41241,G__41242,G__41243));
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
var G__41244 = ctx;
var G__41245 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41246 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41247 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41248 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41249 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41250 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41251 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41252 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41253 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41254 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41255 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41256 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41257 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__41244,G__41245,G__41246,G__41247,G__41248,G__41249,G__41250,G__41251,G__41252,G__41253,G__41254,G__41255,G__41256,G__41257) : f.call(null,G__41244,G__41245,G__41246,G__41247,G__41248,G__41249,G__41250,G__41251,G__41252,G__41253,G__41254,G__41255,G__41256,G__41257));
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
var G__41258 = ctx;
var G__41259 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41260 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41261 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41262 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41263 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41264 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41265 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41266 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41267 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41268 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41269 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41270 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41271 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41272 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272) : f.call(null,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263,G__41264,G__41265,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272));
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
var G__41274 = ctx;
var G__41275 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41276 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41277 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41278 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41280 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41281 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41282 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41283 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41284 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41285 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41286 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41287 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41288 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41289 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41290 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__41274,G__41275,G__41276,G__41277,G__41278,G__41280,G__41281,G__41282,G__41283,G__41284,G__41285,G__41286,G__41287,G__41288,G__41289,G__41290) : f.call(null,G__41274,G__41275,G__41276,G__41277,G__41278,G__41280,G__41281,G__41282,G__41283,G__41284,G__41285,G__41286,G__41287,G__41288,G__41289,G__41290));
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
var G__41294 = ctx;
var G__41295 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41296 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41297 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41298 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41299 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41300 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41301 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41302 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41303 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41304 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41305 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41306 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41307 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41308 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41309 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41310 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,G__41307,G__41308,G__41309,G__41310) : f.call(null,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301,G__41302,G__41303,G__41304,G__41305,G__41306,G__41307,G__41308,G__41309,G__41310));
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
var G__41311 = ctx;
var G__41312 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41313 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41314 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41315 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41316 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41317 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41318 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41319 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41320 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41321 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41322 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41323 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41324 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41325 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41326 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41327 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41328 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__41311,G__41312,G__41313,G__41314,G__41315,G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328) : f.call(null,G__41311,G__41312,G__41313,G__41314,G__41315,G__41316,G__41317,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328));
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
var G__41332 = ctx;
var G__41333 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41334 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41335 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41336 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41337 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41338 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41339 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41340 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41341 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41342 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41343 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41344 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41345 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41346 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41347 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41348 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41349 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41350 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__41332,G__41333,G__41334,G__41335,G__41336,G__41337,G__41338,G__41339,G__41340,G__41341,G__41342,G__41343,G__41344,G__41345,G__41346,G__41347,G__41348,G__41349,G__41350) : f.call(null,G__41332,G__41333,G__41334,G__41335,G__41336,G__41337,G__41338,G__41339,G__41340,G__41341,G__41342,G__41343,G__41344,G__41345,G__41346,G__41347,G__41348,G__41349,G__41350));
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
var G__41355 = ctx;
var G__41356 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41357 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41358 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41359 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41360 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41361 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41362 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41363 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41364 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41365 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41366 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41367 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41368 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41369 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41370 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41371 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41372 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41373 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41374 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__41355,G__41356,G__41357,G__41358,G__41359,G__41360,G__41361,G__41362,G__41363,G__41364,G__41365,G__41366,G__41367,G__41368,G__41369,G__41370,G__41371,G__41372,G__41373,G__41374) : f.call(null,G__41355,G__41356,G__41357,G__41358,G__41359,G__41360,G__41361,G__41362,G__41363,G__41364,G__41365,G__41366,G__41367,G__41368,G__41369,G__41370,G__41371,G__41372,G__41373,G__41374));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__41388 = cljs.core.count(analyzed_children);
switch (G__41388) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__41390 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41390.cljs$core$IFn$_invoke$arity$0 ? fexpr__41390.cljs$core$IFn$_invoke$arity$0() : fexpr__41390.call(null));
}catch (e41389){if((e41389 instanceof Error)){
var e__40098__auto__ = e41389;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41389;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e41391){if((e41391 instanceof Error)){
var e__40098__auto__ = e41391;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41391;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41394 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__41393 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41393.cljs$core$IFn$_invoke$arity$1 ? fexpr__41393.cljs$core$IFn$_invoke$arity$1(G__41394) : fexpr__41393.call(null,G__41394));
}catch (e41392){if((e41392 instanceof Error)){
var e__40098__auto__ = e41392;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41392;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41397 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41397) : f.call(null,G__41397));
}catch (e41396){if((e41396 instanceof Error)){
var e__40098__auto__ = e41396;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41396;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41400 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41401 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__41399 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41399.cljs$core$IFn$_invoke$arity$2 ? fexpr__41399.cljs$core$IFn$_invoke$arity$2(G__41400,G__41401) : fexpr__41399.call(null,G__41400,G__41401));
}catch (e41398){if((e41398 instanceof Error)){
var e__40098__auto__ = e41398;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41398;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41407 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41408 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41407,G__41408) : f.call(null,G__41407,G__41408));
}catch (e41406){if((e41406 instanceof Error)){
var e__40098__auto__ = e41406;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41406;

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
try{var G__41411 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41412 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41413 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__41410 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41410.cljs$core$IFn$_invoke$arity$3 ? fexpr__41410.cljs$core$IFn$_invoke$arity$3(G__41411,G__41412,G__41413) : fexpr__41410.call(null,G__41411,G__41412,G__41413));
}catch (e41409){if((e41409 instanceof Error)){
var e__40098__auto__ = e41409;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41409;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41415 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41416 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41417 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__41415,G__41416,G__41417) : f.call(null,G__41415,G__41416,G__41417));
}catch (e41414){if((e41414 instanceof Error)){
var e__40098__auto__ = e41414;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41414;

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
try{var G__41427 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41428 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41429 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41430 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__41426 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41426.cljs$core$IFn$_invoke$arity$4 ? fexpr__41426.cljs$core$IFn$_invoke$arity$4(G__41427,G__41428,G__41429,G__41430) : fexpr__41426.call(null,G__41427,G__41428,G__41429,G__41430));
}catch (e41424){if((e41424 instanceof Error)){
var e__40098__auto__ = e41424;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41424;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41432 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41433 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41434 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41435 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__41432,G__41433,G__41434,G__41435) : f.call(null,G__41432,G__41433,G__41434,G__41435));
}catch (e41431){if((e41431 instanceof Error)){
var e__40098__auto__ = e41431;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41431;

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
try{var G__41438 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41439 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41440 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41441 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41442 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__41437 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41437.cljs$core$IFn$_invoke$arity$5 ? fexpr__41437.cljs$core$IFn$_invoke$arity$5(G__41438,G__41439,G__41440,G__41441,G__41442) : fexpr__41437.call(null,G__41438,G__41439,G__41440,G__41441,G__41442));
}catch (e41436){if((e41436 instanceof Error)){
var e__40098__auto__ = e41436;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41436;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41447 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41448 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41449 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41451 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41452 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__41447,G__41448,G__41449,G__41451,G__41452) : f.call(null,G__41447,G__41448,G__41449,G__41451,G__41452));
}catch (e41443){if((e41443 instanceof Error)){
var e__40098__auto__ = e41443;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41443;

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
try{var G__41455 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41456 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41457 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41458 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41459 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41460 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__41454 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41454.cljs$core$IFn$_invoke$arity$6 ? fexpr__41454.cljs$core$IFn$_invoke$arity$6(G__41455,G__41456,G__41457,G__41458,G__41459,G__41460) : fexpr__41454.call(null,G__41455,G__41456,G__41457,G__41458,G__41459,G__41460));
}catch (e41453){if((e41453 instanceof Error)){
var e__40098__auto__ = e41453;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41453;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41462 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41463 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41464 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41465 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41466 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41467 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__41462,G__41463,G__41464,G__41465,G__41466,G__41467) : f.call(null,G__41462,G__41463,G__41464,G__41465,G__41466,G__41467));
}catch (e41461){if((e41461 instanceof Error)){
var e__40098__auto__ = e41461;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41461;

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
try{var G__41470 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41471 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41472 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41473 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41474 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41475 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41476 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__41469 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41469.cljs$core$IFn$_invoke$arity$7 ? fexpr__41469.cljs$core$IFn$_invoke$arity$7(G__41470,G__41471,G__41472,G__41473,G__41474,G__41475,G__41476) : fexpr__41469.call(null,G__41470,G__41471,G__41472,G__41473,G__41474,G__41475,G__41476));
}catch (e41468){if((e41468 instanceof Error)){
var e__40098__auto__ = e41468;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41468;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41478 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41479 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41480 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41481 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41482 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41483 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41484 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__41478,G__41479,G__41480,G__41481,G__41482,G__41483,G__41484) : f.call(null,G__41478,G__41479,G__41480,G__41481,G__41482,G__41483,G__41484));
}catch (e41477){if((e41477 instanceof Error)){
var e__40098__auto__ = e41477;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41477;

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
try{var G__41487 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41488 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41489 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41490 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41491 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41492 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41493 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41494 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__41486 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41486.cljs$core$IFn$_invoke$arity$8 ? fexpr__41486.cljs$core$IFn$_invoke$arity$8(G__41487,G__41488,G__41489,G__41490,G__41491,G__41492,G__41493,G__41494) : fexpr__41486.call(null,G__41487,G__41488,G__41489,G__41490,G__41491,G__41492,G__41493,G__41494));
}catch (e41485){if((e41485 instanceof Error)){
var e__40098__auto__ = e41485;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41485;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41496 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41497 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41498 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41499 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41500 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41501 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41502 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41503 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__41496,G__41497,G__41498,G__41499,G__41500,G__41501,G__41502,G__41503) : f.call(null,G__41496,G__41497,G__41498,G__41499,G__41500,G__41501,G__41502,G__41503));
}catch (e41495){if((e41495 instanceof Error)){
var e__40098__auto__ = e41495;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41495;

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
try{var G__41506 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41507 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41508 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41509 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41510 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41511 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41512 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41513 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41514 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__41505 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41505.cljs$core$IFn$_invoke$arity$9 ? fexpr__41505.cljs$core$IFn$_invoke$arity$9(G__41506,G__41507,G__41508,G__41509,G__41510,G__41511,G__41512,G__41513,G__41514) : fexpr__41505.call(null,G__41506,G__41507,G__41508,G__41509,G__41510,G__41511,G__41512,G__41513,G__41514));
}catch (e41504){if((e41504 instanceof Error)){
var e__40098__auto__ = e41504;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41504;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41517 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41518 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41519 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41520 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41521 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41522 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41523 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41524 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41525 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__41517,G__41518,G__41519,G__41520,G__41521,G__41522,G__41523,G__41524,G__41525) : f.call(null,G__41517,G__41518,G__41519,G__41520,G__41521,G__41522,G__41523,G__41524,G__41525));
}catch (e41515){if((e41515 instanceof Error)){
var e__40098__auto__ = e41515;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41515;

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
try{var G__41532 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41533 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41534 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41535 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41536 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41537 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41538 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41539 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41540 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41541 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__41531 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41531.cljs$core$IFn$_invoke$arity$10 ? fexpr__41531.cljs$core$IFn$_invoke$arity$10(G__41532,G__41533,G__41534,G__41535,G__41536,G__41537,G__41538,G__41539,G__41540,G__41541) : fexpr__41531.call(null,G__41532,G__41533,G__41534,G__41535,G__41536,G__41537,G__41538,G__41539,G__41540,G__41541));
}catch (e41530){if((e41530 instanceof Error)){
var e__40098__auto__ = e41530;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41530;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41543 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41544 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41545 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41546 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41547 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41548 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41549 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41550 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41551 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41552 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__41543,G__41544,G__41545,G__41546,G__41547,G__41548,G__41549,G__41550,G__41551,G__41552) : f.call(null,G__41543,G__41544,G__41545,G__41546,G__41547,G__41548,G__41549,G__41550,G__41551,G__41552));
}catch (e41542){if((e41542 instanceof Error)){
var e__40098__auto__ = e41542;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41542;

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
try{var G__41555 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41556 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41557 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41558 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41559 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41560 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41561 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41562 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41563 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41564 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41565 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__41554 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41554.cljs$core$IFn$_invoke$arity$11 ? fexpr__41554.cljs$core$IFn$_invoke$arity$11(G__41555,G__41556,G__41557,G__41558,G__41559,G__41560,G__41561,G__41562,G__41563,G__41564,G__41565) : fexpr__41554.call(null,G__41555,G__41556,G__41557,G__41558,G__41559,G__41560,G__41561,G__41562,G__41563,G__41564,G__41565));
}catch (e41553){if((e41553 instanceof Error)){
var e__40098__auto__ = e41553;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41553;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41572 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41573 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41574 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41575 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41576 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41577 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41578 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41579 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41580 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41581 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41582 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__41572,G__41573,G__41574,G__41575,G__41576,G__41577,G__41578,G__41579,G__41580,G__41581,G__41582) : f.call(null,G__41572,G__41573,G__41574,G__41575,G__41576,G__41577,G__41578,G__41579,G__41580,G__41581,G__41582));
}catch (e41567){if((e41567 instanceof Error)){
var e__40098__auto__ = e41567;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41567;

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
try{var G__41587 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41588 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41589 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41590 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41591 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41592 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41593 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41594 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41595 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41596 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41597 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41598 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__41586 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41586.cljs$core$IFn$_invoke$arity$12 ? fexpr__41586.cljs$core$IFn$_invoke$arity$12(G__41587,G__41588,G__41589,G__41590,G__41591,G__41592,G__41593,G__41594,G__41595,G__41596,G__41597,G__41598) : fexpr__41586.call(null,G__41587,G__41588,G__41589,G__41590,G__41591,G__41592,G__41593,G__41594,G__41595,G__41596,G__41597,G__41598));
}catch (e41585){if((e41585 instanceof Error)){
var e__40098__auto__ = e41585;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41585;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41600 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41601 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41602 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41603 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41604 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41605 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41606 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41607 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41608 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41609 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41610 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41611 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__41600,G__41601,G__41602,G__41603,G__41604,G__41605,G__41606,G__41607,G__41608,G__41609,G__41610,G__41611) : f.call(null,G__41600,G__41601,G__41602,G__41603,G__41604,G__41605,G__41606,G__41607,G__41608,G__41609,G__41610,G__41611));
}catch (e41599){if((e41599 instanceof Error)){
var e__40098__auto__ = e41599;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41599;

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
try{var G__41616 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41617 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41618 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41619 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41620 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41621 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41622 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41623 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41624 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41625 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41626 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41627 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41628 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__41615 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41615.cljs$core$IFn$_invoke$arity$13 ? fexpr__41615.cljs$core$IFn$_invoke$arity$13(G__41616,G__41617,G__41618,G__41619,G__41620,G__41621,G__41622,G__41623,G__41624,G__41625,G__41626,G__41627,G__41628) : fexpr__41615.call(null,G__41616,G__41617,G__41618,G__41619,G__41620,G__41621,G__41622,G__41623,G__41624,G__41625,G__41626,G__41627,G__41628));
}catch (e41614){if((e41614 instanceof Error)){
var e__40098__auto__ = e41614;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41614;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41632 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41633 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41634 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41635 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41636 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41637 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41638 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41639 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41640 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41641 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41642 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41643 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41644 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__41632,G__41633,G__41634,G__41635,G__41636,G__41637,G__41638,G__41639,G__41640,G__41641,G__41642,G__41643,G__41644) : f.call(null,G__41632,G__41633,G__41634,G__41635,G__41636,G__41637,G__41638,G__41639,G__41640,G__41641,G__41642,G__41643,G__41644));
}catch (e41631){if((e41631 instanceof Error)){
var e__40098__auto__ = e41631;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41631;

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
try{var G__41649 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41650 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41651 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41652 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41653 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41654 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41655 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41656 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41657 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41658 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41659 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41660 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41661 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41662 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__41648 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41648.cljs$core$IFn$_invoke$arity$14 ? fexpr__41648.cljs$core$IFn$_invoke$arity$14(G__41649,G__41650,G__41651,G__41652,G__41653,G__41654,G__41655,G__41656,G__41657,G__41658,G__41659,G__41660,G__41661,G__41662) : fexpr__41648.call(null,G__41649,G__41650,G__41651,G__41652,G__41653,G__41654,G__41655,G__41656,G__41657,G__41658,G__41659,G__41660,G__41661,G__41662));
}catch (e41647){if((e41647 instanceof Error)){
var e__40098__auto__ = e41647;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41647;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41675 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41676 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41677 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41678 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41679 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41680 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41681 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41682 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41683 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41684 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41685 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41686 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41687 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41688 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__41675,G__41676,G__41677,G__41678,G__41679,G__41680,G__41681,G__41682,G__41683,G__41684,G__41685,G__41686,G__41687,G__41688) : f.call(null,G__41675,G__41676,G__41677,G__41678,G__41679,G__41680,G__41681,G__41682,G__41683,G__41684,G__41685,G__41686,G__41687,G__41688));
}catch (e41672){if((e41672 instanceof Error)){
var e__40098__auto__ = e41672;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41672;

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
try{var G__41694 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41695 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41696 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41697 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41698 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41699 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41700 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41701 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41702 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41703 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41704 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41705 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41706 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41707 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41708 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__41693 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41693.cljs$core$IFn$_invoke$arity$15 ? fexpr__41693.cljs$core$IFn$_invoke$arity$15(G__41694,G__41695,G__41696,G__41697,G__41698,G__41699,G__41700,G__41701,G__41702,G__41703,G__41704,G__41705,G__41706,G__41707,G__41708) : fexpr__41693.call(null,G__41694,G__41695,G__41696,G__41697,G__41698,G__41699,G__41700,G__41701,G__41702,G__41703,G__41704,G__41705,G__41706,G__41707,G__41708));
}catch (e41692){if((e41692 instanceof Error)){
var e__40098__auto__ = e41692;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41692;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41710 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41711 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41712 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41713 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41714 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41715 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41716 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41717 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41718 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41719 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41720 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41721 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41722 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41723 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41724 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__41710,G__41711,G__41712,G__41713,G__41714,G__41715,G__41716,G__41717,G__41718,G__41719,G__41720,G__41721,G__41722,G__41723,G__41724) : f.call(null,G__41710,G__41711,G__41712,G__41713,G__41714,G__41715,G__41716,G__41717,G__41718,G__41719,G__41720,G__41721,G__41722,G__41723,G__41724));
}catch (e41709){if((e41709 instanceof Error)){
var e__40098__auto__ = e41709;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41709;

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
try{var G__41729 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41730 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41731 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41732 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41733 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41734 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41735 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41736 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41737 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41738 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41739 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41740 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41741 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41742 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41743 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41744 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__41728 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41728.cljs$core$IFn$_invoke$arity$16 ? fexpr__41728.cljs$core$IFn$_invoke$arity$16(G__41729,G__41730,G__41731,G__41732,G__41733,G__41734,G__41735,G__41736,G__41737,G__41738,G__41739,G__41740,G__41741,G__41742,G__41743,G__41744) : fexpr__41728.call(null,G__41729,G__41730,G__41731,G__41732,G__41733,G__41734,G__41735,G__41736,G__41737,G__41738,G__41739,G__41740,G__41741,G__41742,G__41743,G__41744));
}catch (e41727){if((e41727 instanceof Error)){
var e__40098__auto__ = e41727;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41727;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41746 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41747 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41748 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41749 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41750 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41751 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41752 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41753 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41754 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41755 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41756 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41757 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41758 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41759 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41760 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41761 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__41746,G__41747,G__41748,G__41749,G__41750,G__41751,G__41752,G__41753,G__41754,G__41755,G__41756,G__41757,G__41758,G__41759,G__41760,G__41761) : f.call(null,G__41746,G__41747,G__41748,G__41749,G__41750,G__41751,G__41752,G__41753,G__41754,G__41755,G__41756,G__41757,G__41758,G__41759,G__41760,G__41761));
}catch (e41745){if((e41745 instanceof Error)){
var e__40098__auto__ = e41745;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41745;

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
try{var G__41771 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41772 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41773 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41774 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41775 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41776 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41777 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41778 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41779 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41780 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41781 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41782 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41783 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41784 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41785 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41786 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41787 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__41770 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41770.cljs$core$IFn$_invoke$arity$17 ? fexpr__41770.cljs$core$IFn$_invoke$arity$17(G__41771,G__41772,G__41773,G__41774,G__41775,G__41776,G__41777,G__41778,G__41779,G__41780,G__41781,G__41782,G__41783,G__41784,G__41785,G__41786,G__41787) : fexpr__41770.call(null,G__41771,G__41772,G__41773,G__41774,G__41775,G__41776,G__41777,G__41778,G__41779,G__41780,G__41781,G__41782,G__41783,G__41784,G__41785,G__41786,G__41787));
}catch (e41765){if((e41765 instanceof Error)){
var e__40098__auto__ = e41765;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41765;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41789 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41790 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41791 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41792 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41793 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41794 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41795 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41796 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41797 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41798 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41799 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41800 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41801 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41802 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41803 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41804 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41805 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__41789,G__41790,G__41791,G__41792,G__41793,G__41794,G__41795,G__41796,G__41797,G__41798,G__41799,G__41800,G__41801,G__41802,G__41803,G__41804,G__41805) : f.call(null,G__41789,G__41790,G__41791,G__41792,G__41793,G__41794,G__41795,G__41796,G__41797,G__41798,G__41799,G__41800,G__41801,G__41802,G__41803,G__41804,G__41805));
}catch (e41788){if((e41788 instanceof Error)){
var e__40098__auto__ = e41788;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41788;

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
try{var G__41812 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41813 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41814 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41815 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41816 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41817 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41818 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41819 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41820 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41821 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41822 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41823 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41824 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41825 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41826 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41827 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41828 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41829 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__41811 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41811.cljs$core$IFn$_invoke$arity$18 ? fexpr__41811.cljs$core$IFn$_invoke$arity$18(G__41812,G__41813,G__41814,G__41815,G__41816,G__41817,G__41818,G__41819,G__41820,G__41821,G__41822,G__41823,G__41824,G__41825,G__41826,G__41827,G__41828,G__41829) : fexpr__41811.call(null,G__41812,G__41813,G__41814,G__41815,G__41816,G__41817,G__41818,G__41819,G__41820,G__41821,G__41822,G__41823,G__41824,G__41825,G__41826,G__41827,G__41828,G__41829));
}catch (e41810){if((e41810 instanceof Error)){
var e__40098__auto__ = e41810;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41810;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41831 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41832 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41833 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41834 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41835 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41836 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41837 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41838 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41839 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41840 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41841 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41842 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41843 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41844 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41845 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41846 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41847 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41848 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__41831,G__41832,G__41833,G__41834,G__41835,G__41836,G__41837,G__41838,G__41839,G__41840,G__41841,G__41842,G__41843,G__41844,G__41845,G__41846,G__41847,G__41848) : f.call(null,G__41831,G__41832,G__41833,G__41834,G__41835,G__41836,G__41837,G__41838,G__41839,G__41840,G__41841,G__41842,G__41843,G__41844,G__41845,G__41846,G__41847,G__41848));
}catch (e41830){if((e41830 instanceof Error)){
var e__40098__auto__ = e41830;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41830;

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
try{var G__41856 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41857 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41858 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41859 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41860 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41861 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41862 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41863 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41864 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41865 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41866 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41867 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41868 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41869 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41870 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41871 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41872 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41873 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41874 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__41855 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41855.cljs$core$IFn$_invoke$arity$19 ? fexpr__41855.cljs$core$IFn$_invoke$arity$19(G__41856,G__41857,G__41858,G__41859,G__41860,G__41861,G__41862,G__41863,G__41864,G__41865,G__41866,G__41867,G__41868,G__41869,G__41870,G__41871,G__41872,G__41873,G__41874) : fexpr__41855.call(null,G__41856,G__41857,G__41858,G__41859,G__41860,G__41861,G__41862,G__41863,G__41864,G__41865,G__41866,G__41867,G__41868,G__41869,G__41870,G__41871,G__41872,G__41873,G__41874));
}catch (e41852){if((e41852 instanceof Error)){
var e__40098__auto__ = e41852;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41852;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41877 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41878 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41879 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41880 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41881 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41882 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41883 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41884 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41885 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41886 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41887 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41888 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41889 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41890 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41891 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41892 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41893 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41894 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41895 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__41877,G__41878,G__41879,G__41880,G__41881,G__41882,G__41883,G__41884,G__41885,G__41886,G__41887,G__41888,G__41889,G__41890,G__41891,G__41892,G__41893,G__41894,G__41895) : f.call(null,G__41877,G__41878,G__41879,G__41880,G__41881,G__41882,G__41883,G__41884,G__41885,G__41886,G__41887,G__41888,G__41889,G__41890,G__41891,G__41892,G__41893,G__41894,G__41895));
}catch (e41876){if((e41876 instanceof Error)){
var e__40098__auto__ = e41876;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40098__auto__,this$);
} else {
throw e41876;

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
}catch (e41917){if((e41917 instanceof Error)){
var e = e41917;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e41917;

}
}}),stack);
});
sci.impl.analyzer.dispatch_special = (function sci$impl$analyzer$dispatch_special(ctx,expr,f){
var G__41920 = f;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__41920)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__41920)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__41920)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__41920)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__41920)){
return sci.impl.analyzer.analyze_fn_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__41920)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop*","loop*",615029416,null),G__41920)){
return sci.impl.analyzer.analyze_loop_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__41920)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__41920)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__41920)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__41920)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__41920)){
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,cljs.core.second(expr),cljs.core.nnext(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__41920)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__41920)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case*","case*",-1938255072,null),G__41920)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__41920)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__41920)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__41920)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__41920)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__41920)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__41920)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__41920)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__41920)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41920)].join('')));

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
var m__40208__auto__ = m;
var loc__40209__auto__ = (cljs.core.truth_((function (){var and__5023__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = m__40208__auto__;
if(cljs.core.truth_(and__5023__auto____$1)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__40208__auto__);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(m__40208__auto__),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__40208__auto__)], null):null);
if(cljs.core.truth_(loc__40209__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = loc__40209__auto__);
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
var vec__41929 = f__$2;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41929,(0),null);
var method_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41929,(1),null);
var last_path = cljs.core.last(method_path);
var ctor_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_path,"");
var method_len = cljs.core.count(method_path);
var subpath = method_path.slice((0),(method_len - (1)));
var lookup_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),method_len))?cljs.core.constantly([class$,last_path]):(function (){
return [sci.impl.interop.get_static_fields(class$,subpath),last_path];
}));
var vec__41932 = (function (){try{return lookup_fn();
}catch (e41935){var ___$1 = e41935;
return null;
}})();
var class$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41932,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41932,(1),null);
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
var G__41947 = op;
var G__41947__$1 = (((G__41947 instanceof cljs.core.Keyword))?G__41947.fqn:null);
switch (G__41947__$1) {
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
}catch (e41940){if((e41940 instanceof Error)){
var e = e41940;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e41940;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__41953 = ccount;
switch (G__41953) {
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
}catch (e41925){var e = e41925;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$1(m)));
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}}finally {if(cljs.core.truth_(loc__40209__auto__)){
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41970_SHARP_){
return sci.impl.types.eval(p1__41970_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
cljs.core.run_BANG_((function (p1__41971_SHARP_){
return arr.push(sci.impl.types.eval(p1__41971_SHARP_,ctx__$1,bindings));
}),vs);

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__41973 = arguments.length;
switch (G__41973) {
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
