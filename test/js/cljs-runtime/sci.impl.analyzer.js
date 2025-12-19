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
var G__40316 = arguments.length;
switch (G__40316) {
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
}catch (e40341){var _ = e40341;
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
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40363_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__40363_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__40363_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__40364 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__40365 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40364,G__40365) : sci.impl.analyzer.analyze.call(null,G__40364,G__40365));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var child_count = cljs.core.count(children);
if((child_count > (5))){
var node1 = (function (){var G__40366 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var G__40367 = expr;
var G__40368 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__40366,G__40367,G__40368) : sci.impl.analyzer.return_do.call(null,G__40366,G__40367,G__40368));
})();
var node2 = (function (){var G__40369 = ctx;
var G__40370 = expr;
var G__40371 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__40369,G__40370,G__40371) : sci.impl.analyzer.return_do.call(null,G__40369,G__40370,G__40371));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node1,ctx__$1,bindings);

return sci.impl.types.eval(node2,ctx__$1,bindings);
}),null);
} else {
var analyzed_children = sci.impl.analyzer.analyze_children_tail(ctx,children);
var G__40374 = child_count;
switch (G__40374) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40374)].join('')));

}
}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__40420 = ctx;
var G__40421 = expr;
var G__40422 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__40420,G__40421,G__40422) : sci.impl.analyzer.return_or.call(null,G__40420,G__40421,G__40422));
})();
var a1_SHARP_ = (function (){var G__40447 = ctx;
var G__40448 = expr;
var G__40449 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__40447,G__40448,G__40449) : sci.impl.analyzer.return_or.call(null,G__40447,G__40448,G__40449));
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
var G__40451 = child_count_SHARP_;
switch (G__40451) {
case (0):
return null;

break;
case (1):
var G__40452 = ctx;
var G__40453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40452,G__40453) : sci.impl.analyzer.analyze.call(null,G__40452,G__40453));

break;
case (2):
var a0_SHARP_ = (function (){var G__40454 = ctx;
var G__40455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40454,G__40455) : sci.impl.analyzer.analyze.call(null,G__40454,G__40455));
})();
var a1_SHARP_ = (function (){var G__40456 = ctx;
var G__40457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40456,G__40457) : sci.impl.analyzer.analyze.call(null,G__40456,G__40457));
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
var a0_SHARP_ = (function (){var G__40472 = ctx;
var G__40473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40472,G__40473) : sci.impl.analyzer.analyze.call(null,G__40472,G__40473));
})();
var a1_SHARP_ = (function (){var G__40474 = ctx;
var G__40475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40474,G__40475) : sci.impl.analyzer.analyze.call(null,G__40474,G__40475));
})();
var a2_SHARP_ = (function (){var G__40476 = ctx;
var G__40477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40476,G__40477) : sci.impl.analyzer.analyze.call(null,G__40476,G__40477));
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
var a0_SHARP_ = (function (){var G__40494 = ctx;
var G__40495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40494,G__40495) : sci.impl.analyzer.analyze.call(null,G__40494,G__40495));
})();
var a1_SHARP_ = (function (){var G__40496 = ctx;
var G__40497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40496,G__40497) : sci.impl.analyzer.analyze.call(null,G__40496,G__40497));
})();
var a2_SHARP_ = (function (){var G__40499 = ctx;
var G__40500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40499,G__40500) : sci.impl.analyzer.analyze.call(null,G__40499,G__40500));
})();
var a3_SHARP_ = (function (){var G__40501 = ctx;
var G__40502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40501,G__40502) : sci.impl.analyzer.analyze.call(null,G__40501,G__40502));
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
var a0_SHARP_ = (function (){var G__40517 = ctx;
var G__40518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40517,G__40518) : sci.impl.analyzer.analyze.call(null,G__40517,G__40518));
})();
var a1_SHARP_ = (function (){var G__40519 = ctx;
var G__40520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40519,G__40520) : sci.impl.analyzer.analyze.call(null,G__40519,G__40520));
})();
var a2_SHARP_ = (function (){var G__40521 = ctx;
var G__40522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40521,G__40522) : sci.impl.analyzer.analyze.call(null,G__40521,G__40522));
})();
var a3_SHARP_ = (function (){var G__40523 = ctx;
var G__40524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40523,G__40524) : sci.impl.analyzer.analyze.call(null,G__40523,G__40524));
})();
var a4_SHARP_ = (function (){var G__40525 = ctx;
var G__40526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40525,G__40526) : sci.impl.analyzer.analyze.call(null,G__40525,G__40526));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40451)].join('')));

}
}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__40549 = ctx;
var G__40550 = expr;
var G__40551 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__40549,G__40550,G__40551) : sci.impl.analyzer.return_and.call(null,G__40549,G__40550,G__40551));
})();
var a1_SHARP_ = (function (){var G__40552 = ctx;
var G__40553 = expr;
var G__40554 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__40552,G__40553,G__40554) : sci.impl.analyzer.return_and.call(null,G__40552,G__40553,G__40554));
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
var G__40556 = child_count_SHARP_;
switch (G__40556) {
case (0):
return true;

break;
case (1):
var G__40557 = ctx;
var G__40558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40557,G__40558) : sci.impl.analyzer.analyze.call(null,G__40557,G__40558));

break;
case (2):
var a0_SHARP_ = (function (){var G__40560 = ctx;
var G__40561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40560,G__40561) : sci.impl.analyzer.analyze.call(null,G__40560,G__40561));
})();
var a1_SHARP_ = (function (){var G__40562 = ctx;
var G__40563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40562,G__40563) : sci.impl.analyzer.analyze.call(null,G__40562,G__40563));
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
var a0_SHARP_ = (function (){var G__40564 = ctx;
var G__40565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40564,G__40565) : sci.impl.analyzer.analyze.call(null,G__40564,G__40565));
})();
var a1_SHARP_ = (function (){var G__40566 = ctx;
var G__40567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40566,G__40567) : sci.impl.analyzer.analyze.call(null,G__40566,G__40567));
})();
var a2_SHARP_ = (function (){var G__40568 = ctx;
var G__40569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40568,G__40569) : sci.impl.analyzer.analyze.call(null,G__40568,G__40569));
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
var a0_SHARP_ = (function (){var G__40580 = ctx;
var G__40581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40580,G__40581) : sci.impl.analyzer.analyze.call(null,G__40580,G__40581));
})();
var a1_SHARP_ = (function (){var G__40582 = ctx;
var G__40583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40582,G__40583) : sci.impl.analyzer.analyze.call(null,G__40582,G__40583));
})();
var a2_SHARP_ = (function (){var G__40584 = ctx;
var G__40585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40584,G__40585) : sci.impl.analyzer.analyze.call(null,G__40584,G__40585));
})();
var a3_SHARP_ = (function (){var G__40586 = ctx;
var G__40587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40586,G__40587) : sci.impl.analyzer.analyze.call(null,G__40586,G__40587));
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
var a0_SHARP_ = (function (){var G__40591 = ctx;
var G__40592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40591,G__40592) : sci.impl.analyzer.analyze.call(null,G__40591,G__40592));
})();
var a1_SHARP_ = (function (){var G__40593 = ctx;
var G__40594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40593,G__40594) : sci.impl.analyzer.analyze.call(null,G__40593,G__40594));
})();
var a2_SHARP_ = (function (){var G__40595 = ctx;
var G__40596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40595,G__40596) : sci.impl.analyzer.analyze.call(null,G__40595,G__40596));
})();
var a3_SHARP_ = (function (){var G__40599 = ctx;
var G__40600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40599,G__40600) : sci.impl.analyzer.analyze.call(null,G__40599,G__40600));
})();
var a4_SHARP_ = (function (){var G__40602 = ctx;
var G__40603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40602,G__40603) : sci.impl.analyzer.analyze.call(null,G__40602,G__40603));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40556)].join('')));

}
}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location((function (){var G__40616 = new cljs.core.Keyword(null,"no-recur-reason","no-recur-reason",-1993064353).cljs$core$IFn$_invoke$arity$1(ctx);
var G__40616__$1 = (((G__40616 instanceof cljs.core.Keyword))?G__40616.fqn:null);
switch (G__40616__$1) {
case "try":
return "Cannot recur across try";

break;
default:
return "Can only recur from tail position";

}
})(),expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__40617 = cljs.core.count(analyzed_children);
switch (G__40617) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40617)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__40641_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__40641_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__40641_SHARP_));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k40643,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__40647 = k40643;
var G__40647__$1 = (((G__40647 instanceof cljs.core.Keyword))?G__40647.fqn:null);
switch (G__40647__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40643,else__5326__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__40649){
var vec__40650 = p__40649;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40650,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40650,(1),null);
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40642){
var self__ = this;
var G__40642__$1 = this;
return (new cljs.core.RecordIter((0),G__40642__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40644,other40645){
var self__ = this;
var this40644__$1 = this;
return (((!((other40645 == null)))) && ((((this40644__$1.constructor === other40645.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40644__$1.params,other40645.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40644__$1.body,other40645.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40644__$1.fixed_arity,other40645.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40644__$1.var_arg_name,other40645.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40644__$1.self_ref_idx,other40645.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40644__$1.iden__GT_invoke_idx,other40645.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40644__$1.__extmap,other40645.__extmap)))))))))))))))));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k40643){
var self__ = this;
var this__5330__auto____$1 = this;
var G__40656 = k40643;
var G__40656__$1 = (((G__40656 instanceof cljs.core.Keyword))?G__40656.fqn:null);
switch (G__40656__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40643);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__40642){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__40662 = cljs.core.keyword_identical_QMARK_;
var expr__40663 = k__5332__auto__;
if(cljs.core.truth_((pred__40662.cljs$core$IFn$_invoke$arity$2 ? pred__40662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__40663) : pred__40662.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__40663)))){
return (new sci.impl.analyzer.FnBody(G__40642,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40662.cljs$core$IFn$_invoke$arity$2 ? pred__40662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__40663) : pred__40662.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__40663)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__40642,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40662.cljs$core$IFn$_invoke$arity$2 ? pred__40662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__40663) : pred__40662.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__40663)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__40642,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40662.cljs$core$IFn$_invoke$arity$2 ? pred__40662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__40663) : pred__40662.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__40663)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__40642,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40662.cljs$core$IFn$_invoke$arity$2 ? pred__40662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__40663) : pred__40662.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__40663)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__40642,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40662.cljs$core$IFn$_invoke$arity$2 ? pred__40662.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__40663) : pred__40662.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__40663)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__40642,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__40642),null));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__40642){
var self__ = this;
var this__5322__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__40642,self__.__extmap,self__.__hash));
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
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__40646){
var extmap__5365__auto__ = (function (){var G__40665 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40646,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__40646)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40665);
} else {
return G__40665;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__40646),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__40646),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__40646),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__40646),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__40646),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__40646),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__40670,p__40671,_macro_QMARK_,fn_name,fn_id){
var map__40672 = p__40670;
var map__40672__$1 = cljs.core.__destructure_map(map__40672);
var ctx = map__40672__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40672__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__40673 = p__40671;
var seq__40674 = cljs.core.seq(vec__40673);
var first__40675 = cljs.core.first(seq__40674);
var seq__40674__$1 = cljs.core.next(seq__40674);
var binding_vector = first__40675;
var body_exprs = seq__40674__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var vec__40676 = cljs.core.split_with((function (p1__40666_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__40666_SHARP_);
}),binding_vector);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40676,(0),null);
var vec__40679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40676,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40679,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40679,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__40682 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__40682,var_arg_name);
} else {
return G__40682;
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
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__40683 = ctx__$4;
var G__40684 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__40685 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__40683,G__40684,G__40685) : sci.impl.analyzer.update_parents.call(null,G__40683,G__40684,G__40685));
})():null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body_exprs);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__40691 = sci.impl.analyzer.__GT_FnBody(binding_vector,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40691,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__40691;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__40692 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__40693 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40692,G__40693) : sci.impl.analyzer.analyze.call(null,G__40692,G__40693));
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
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__40694_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__40694_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
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
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__40702){
var vec__40703 = p__40702;
var seq__40704 = cljs.core.seq(vec__40703);
var first__40705 = cljs.core.first(seq__40704);
var seq__40704__$1 = cljs.core.next(seq__40704);
var _fn = first__40705;
var first__40705__$1 = cljs.core.first(seq__40704__$1);
var seq__40704__$2 = cljs.core.next(seq__40704__$1);
var name_QMARK_ = first__40705__$1;
var body = seq__40704__$2;
var fn_expr = vec__40703;
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
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40709,body__$2){
var map__40710 = p__40709;
var map__40710__$1 = cljs.core.__destructure_map(map__40710);
var acc = map__40710__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40710__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
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
var vec__40706 = (((function (){var or__5025__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__40715 = closed_over_cnt;
if(cljs.core.truth_(fn_name__$1)){
return (G__40715 + (1));
} else {
return G__40715;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5825__auto__)){
var binding_idx = temp__5825__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__40720 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__40720[(0)] = binding_idx);

(G__40720[(1)] = enclosed_idx);

return G__40720;
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
var G__42016 = (idx + (1));
var G__42017 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__42016;
ret = G__42017;
continue;
} else {
return ret;
}
break;
}
}),enclosed_array_cnt], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly(null)], null));
var bindings_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40706,(0),null);
var enclosed_array_cnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40706,(1),null);
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5825__auto__)){
var invocation_idx = temp__5825__auto__;
var G__40721 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__40721[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__40721[(1)] = invocation_idx);

return G__40721;
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
var G__42018 = (idx + (1));
var G__42019 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__42018;
ret = G__42019;
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
var self_ref_in_enclosed_idx = (function (){var G__40725 = enclosed_array_cnt;
if((G__40725 == null)){
return null;
} else {
return (G__40725 - (1));
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
var G__42020__delegate = function (args){
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
var G__42020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42021__i = 0, G__42021__a = new Array(arguments.length -  0);
while (G__42021__i < G__42021__a.length) {G__42021__a[G__42021__i] = arguments[G__42021__i + 0]; ++G__42021__i;}
  args = new cljs.core.IndexedSeq(G__42021__a,0,null);
} 
return G__42020__delegate.call(this,args);};
G__42020.cljs$lang$maxFixedArity = 0;
G__42020.cljs$lang$applyTo = (function (arglist__42022){
var args = cljs.core.seq(arglist__42022);
return G__42020__delegate(args);
});
G__42020.cljs$core$IFn$_invoke$arity$variadic = G__42020__delegate;
return G__42020;
})()
;
var f__$1 = (((fn_meta__$1 == null))?f:(function (){var fn_meta__$2 = sci.impl.types.eval(fn_meta__$1,ctx__$5,bindings__$1);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$2);
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__40697_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__40697_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
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
var G__40735 = ctx;
var G__40736 = expr;
var G__40737 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings);
var G__40738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings)),exprs),cljs.core.meta(expr))], null);
return (sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4 ? sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4(G__40735,G__40736,G__40737,G__40738) : sci.impl.analyzer.analyze_let_STAR_.call(null,G__40735,G__40736,G__40737,G__40738));
} else {
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var stack = sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(expr),true);
var vec__40739 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__40746,p__40747){
var vec__40748 = p__40746;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40748,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40748,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40748,(2),null);
var vec__40751 = p__40747;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40751,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40751,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),(function (p1__40734_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40734_SHARP_,binding_name__$1),binding_name__$1,new_iden);
})),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(let_nodes,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40739,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40739,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40739,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
var G__40758 = cljs.core.count(idxs);
switch (G__40758) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40758)].join('')));

}
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__40777){
var vec__40778 = p__40777;
var seq__40779 = cljs.core.seq(vec__40778);
var first__40780 = cljs.core.first(seq__40779);
var seq__40779__$1 = cljs.core.next(seq__40779);
var _let = first__40780;
var first__40780__$1 = cljs.core.first(seq__40779__$1);
var seq__40779__$2 = cljs.core.next(seq__40779__$1);
var let_bindings = first__40780__$1;
var exprs = seq__40779__$2;
var expr = vec__40778;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_42024 = sci.impl.utils.current_ns_name();
var env_42025 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_42026 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_42025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_42024], null));
var refers_42027 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_42026);
var the_current_ns_42028__$1 = (function (){var temp__5823__auto__ = (function (){var and__5023__auto__ = refers_42027;
if(cljs.core.truth_(and__5023__auto__)){
return refers_42027.get(name);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var x = temp__5823__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_42024)].join(''),expr);
} else {
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_42026,name);
if(cljs.core.truth_(temp__5823__auto____$1)){
var the_var = temp__5823__auto____$1;
var cur_file = cljs.core.deref(sci.impl.utils.current_file);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_file,new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(the_var)))){
} else {
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(the_var,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cur_file], 0));
}

return the_current_ns_42026;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_42026,name,(function (){var G__40781 = (new sci.lang.Var(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_42024),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], null),false,false,null));
G__40781.sci$impl$vars$IVar$unbind$arity$1(null);

return G__40781;
})());
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_42025,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_42024,the_current_ns_42028__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__40787 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40787,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40787,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40787,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40787,(3),null);
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
var G__40798 = cljs.core.count(children);
switch (G__40798) {
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
var case_val = (function (){var G__40807 = ctx_wo_rt;
var G__40808 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40807,G__40808) : sci.impl.analyzer.analyze.call(null,G__40807,G__40808));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__40804 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__40809 = ctx;
var G__40810 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40809,G__40810) : sci.impl.analyzer.analyze.call(null,G__40809,G__40810));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40804,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40804,(1),null);
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
var vec__40818 = cases__$1;
var seq__40819 = cljs.core.seq(vec__40818);
var first__40820 = cljs.core.first(seq__40819);
var seq__40819__$1 = cljs.core.next(seq__40819);
var k = first__40820;
var first__40820__$1 = cljs.core.first(seq__40819__$1);
var seq__40819__$2 = cljs.core.next(seq__40819__$1);
var v = first__40820__$1;
var cases__$2 = seq__40819__$2;
if(cljs.core.seq_QMARK_(k)){
var G__42030 = cases__$2;
var G__42031 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__40818,seq__40819,first__40820,seq__40819__$1,k,first__40820__$1,seq__40819__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__40804,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__40818,seq__40819,first__40820,seq__40819__$1,k,first__40820__$1,seq__40819__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__40804,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__42030;
ret_map = G__42031;
continue;
} else {
var G__42032 = cases__$2;
var G__42033 = assoc_new(ret_map,k,v);
cases__$1 = G__42032;
ret_map = G__42033;
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
var vec__40821 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__42034 = exprs__$1;
var G__42035 = body_exprs;
var G__42036 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__42037 = finally_expr;
exprs = G__42034;
body_exprs = G__42035;
catch_exprs = G__42036;
finally_expr = G__42037;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__42038 = exprs__$1;
var G__42039 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__42040 = catch_exprs;
var G__42041 = finally_expr;
exprs = G__42038;
body_exprs = G__42039;
catch_exprs = G__42040;
finally_expr = G__42041;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40821,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40821,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40821,(2),null);
var body__$1 = (function (){var G__40828 = ctx__$1;
var G__40829 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40828,G__40829) : sci.impl.analyzer.analyze.call(null,G__40828,G__40829));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__40830 = c;
var seq__40831 = cljs.core.seq(vec__40830);
var first__40832 = cljs.core.first(seq__40831);
var seq__40831__$1 = cljs.core.next(seq__40831);
var _ = first__40832;
var first__40832__$1 = cljs.core.first(seq__40831__$1);
var seq__40831__$2 = cljs.core.next(seq__40831__$1);
var ex = first__40832__$1;
var first__40832__$2 = cljs.core.first(seq__40831__$2);
var seq__40831__$3 = cljs.core.next(seq__40831__$2);
var binding = first__40832__$2;
var body__$2 = seq__40831__$3;
var temp__5823__auto__ = (function (){var G__40833 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__40833)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__40833)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__40833)){
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
var analyzed_body = (function (){var G__40834 = ctx__$2;
var G__40835 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40834,G__40835) : sci.impl.analyzer.analyze.call(null,G__40834,G__40835));
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
var G__40840 = ex;
var G__40840__$1 = (((G__40840 == null))?null:cljs.core.meta(G__40840));
if((G__40840__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci","error","sci/error",-979082803).cljs$core$IFn$_invoke$arity$1(G__40840__$1);
}
} else {
return and__5023__auto__;
}
})();
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__40841 = ctx__$1;
var G__40842 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__40841,G__40842) : sci.impl.analyzer.analyze.call(null,G__40841,G__40842));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1,sci_error);
}),stack);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__40843){
var vec__40844 = p__40843;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40844,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40844,(1),null);
var expr = vec__40844;
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
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__40847){
var vec__40848 = p__40847;
var seq__40849 = cljs.core.seq(vec__40848);
var first__40850 = cljs.core.first(seq__40849);
var seq__40849__$1 = cljs.core.next(seq__40849);
var _dot = first__40850;
var first__40850__$1 = cljs.core.first(seq__40849__$1);
var seq__40849__$2 = cljs.core.next(seq__40849__$1);
var instance_expr = first__40850__$1;
var first__40850__$2 = cljs.core.first(seq__40849__$2);
var seq__40849__$3 = cljs.core.next(seq__40849__$2);
var method_expr = first__40850__$2;
var args = seq__40849__$3;
var expr = vec__40848;
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__40851 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__40852 = cljs.core.seq(vec__40851);
var first__40853 = cljs.core.first(seq__40852);
var seq__40852__$1 = cljs.core.next(seq__40852);
var method_expr__$1 = first__40853;
var args__$1 = seq__40852__$1;
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
return cljs.core.with_meta((function (){var G__40855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean$(allowed_QMARK_),cljs.core.boolean$(field_access)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__40855)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.allowed_instance_field_invocation(ctx__$2,bindings,instance_expr__$1,meth_name);
}),stack);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__40855)){
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
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__40857){
var vec__40858 = p__40857;
var seq__40859 = cljs.core.seq(vec__40858);
var first__40860 = cljs.core.first(seq__40859);
var seq__40859__$1 = cljs.core.next(seq__40859);
var method_name = first__40860;
var first__40860__$1 = cljs.core.first(seq__40859__$1);
var seq__40859__$2 = cljs.core.next(seq__40859__$1);
var obj = first__40860__$1;
var args = seq__40859__$2;
var expr = vec__40858;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,cljs.core.with_meta((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)),cljs.core.meta(expr)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__40864){
var vec__40865 = p__40864;
var seq__40866 = cljs.core.seq(vec__40865);
var first__40867 = cljs.core.first(seq__40866);
var seq__40866__$1 = cljs.core.next(seq__40866);
var _new = first__40867;
var first__40867__$1 = cljs.core.first(seq__40866__$1);
var seq__40866__$2 = cljs.core.next(seq__40866__$1);
var class_sym = first__40867__$1;
var args = seq__40866__$2;
var expr = vec__40865;
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
var G__40870 = ctx__$1;
var G__40871 = expr;
var G__40872 = maybe_record_constructor;
var G__40873 = args__$1;
var G__40874 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__40875 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__40870,G__40871,G__40872,G__40873,G__40874,G__40875) : sci.impl.analyzer.return_call.call(null,G__40870,G__40871,G__40872,G__40873,G__40874,G__40875));
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
var G__40876 = ctx__$1;
var G__40877 = expr;
var G__40878 = new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__40879 = args__$1;
var G__40880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__40881 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__40876,G__40877,G__40878,G__40879,G__40880,G__40881) : sci.impl.analyzer.return_call.call(null,G__40876,G__40877,G__40878,G__40879,G__40880,G__40881));
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
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__40886){
var vec__40887 = p__40886;
var seq__40888 = cljs.core.seq(vec__40887);
var first__40889 = cljs.core.first(seq__40888);
var seq__40888__$1 = cljs.core.next(seq__40888);
var constructor_sym = first__40889;
var args = seq__40888__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(constructor_sym),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e40890){if((e40890 instanceof Error)){
var e = e40890;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e40890;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__40891){
var vec__40892 = p__40891;
var seq__40893 = cljs.core.seq(vec__40892);
var first__40894 = cljs.core.first(seq__40893);
var seq__40893__$1 = cljs.core.next(seq__40893);
var _ns = first__40894;
var first__40894__$1 = cljs.core.first(seq__40893__$1);
var seq__40893__$2 = cljs.core.next(seq__40893__$1);
var ns_name = first__40894__$1;
var exprs = seq__40893__$2;
var expr = vec__40892;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__40899 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40899,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40899,(1),null);
var vec__40902 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40902,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40902,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__40910 = cljs.core.first(exprs__$3);
var seq__40911 = cljs.core.seq(vec__40910);
var first__40912 = cljs.core.first(seq__40911);
var seq__40911__$1 = cljs.core.next(seq__40911);
var k = first__40912;
var args = seq__40911__$1;
var expr__$1 = vec__40910;
var G__40913 = k;
var G__40913__$1 = (((G__40913 instanceof cljs.core.Keyword))?G__40913.fqn:null);
switch (G__40913__$1) {
case "require":
case "require-macros":
case "use":
case "import":
case "refer-clojure":
var G__42043 = cljs.core.next(exprs__$3);
var G__42044 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__40914 = k;
var G__40914__$1 = (((G__40914 instanceof cljs.core.Keyword))?G__40914.fqn:null);
switch (G__40914__$1) {
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
return ((function (exprs__$3,ret,G__40914,G__40914__$1,G__40913,G__40913__$1,vec__40910,seq__40911,first__40912,seq__40911__$1,k,args,expr__$1,vec__40899,docstring,exprs__$1,vec__40902,attr_map,exprs__$2,attr_map__$1,vec__40892,seq__40893,first__40894,seq__40893__$1,_ns,first__40894__$1,seq__40893__$2,ns_name,exprs,expr){
return (function() { 
var G__42046__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__42046 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__42047__i = 0, G__42047__a = new Array(arguments.length -  1);
while (G__42047__i < G__42047__a.length) {G__42047__a[G__42047__i] = arguments[G__42047__i + 1]; ++G__42047__i;}
  args__$1 = new cljs.core.IndexedSeq(G__42047__a,0,null);
} 
return G__42046__delegate.call(this,ctx__$1,args__$1);};
G__42046.cljs$lang$maxFixedArity = 1;
G__42046.cljs$lang$applyTo = (function (arglist__42048){
var ctx__$1 = cljs.core.first(arglist__42048);
var args__$1 = cljs.core.rest(arglist__42048);
return G__42046__delegate(ctx__$1,args__$1);
});
G__42046.cljs$core$IFn$_invoke$arity$variadic = G__42046__delegate;
return G__42046;
})()
;
;})(exprs__$3,ret,G__40914,G__40914__$1,G__40913,G__40913__$1,vec__40910,seq__40911,first__40912,seq__40911__$1,k,args,expr__$1,vec__40899,docstring,exprs__$1,vec__40902,attr_map,exprs__$2,attr_map__$1,vec__40892,seq__40893,first__40894,seq__40893__$1,_ns,first__40894__$1,seq__40893__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40914__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__42043;
ret = G__42044;
continue;

break;
case "gen-class":
var G__42049 = cljs.core.next(exprs__$3);
var G__42050 = ret;
exprs__$3 = G__42049;
ret = G__42050;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40913__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__40899,docstring,exprs__$1,vec__40902,attr_map,exprs__$2,attr_map__$1,vec__40892,seq__40893,first__40894,seq__40893__$1,_ns,first__40894__$1,seq__40893__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__40899,docstring,exprs__$1,vec__40902,attr_map,exprs__$2,attr_map__$1,vec__40892,seq__40893,first__40894,seq__40893__$1,_ns,first__40894__$1,seq__40893__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__40919){
var vec__40920 = p__40919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40920,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__40923){
var vec__40924 = p__40923;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40924,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40924,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40924,(2),null);
var expr = vec__40924;
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
var G__40933 = cljs.core.count(analyzed_children);
switch (G__40933) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__40935 = (bindings[idx]);
return (fexpr__40935.cljs$core$IFn$_invoke$arity$0 ? fexpr__40935.cljs$core$IFn$_invoke$arity$0() : fexpr__40935.call(null));
}catch (e40934){if((e40934 instanceof Error)){
var e__40015__auto__ = e40934;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40934;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40938 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__40937 = (bindings[idx]);
return (fexpr__40937.cljs$core$IFn$_invoke$arity$1 ? fexpr__40937.cljs$core$IFn$_invoke$arity$1(G__40938) : fexpr__40937.call(null,G__40938));
}catch (e40936){if((e40936 instanceof Error)){
var e__40015__auto__ = e40936;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40936;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40944 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40945 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__40943 = (bindings[idx]);
return (fexpr__40943.cljs$core$IFn$_invoke$arity$2 ? fexpr__40943.cljs$core$IFn$_invoke$arity$2(G__40944,G__40945) : fexpr__40943.call(null,G__40944,G__40945));
}catch (e40942){if((e40942 instanceof Error)){
var e__40015__auto__ = e40942;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40942;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40948 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40949 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40950 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__40947 = (bindings[idx]);
return (fexpr__40947.cljs$core$IFn$_invoke$arity$3 ? fexpr__40947.cljs$core$IFn$_invoke$arity$3(G__40948,G__40949,G__40950) : fexpr__40947.call(null,G__40948,G__40949,G__40950));
}catch (e40946){if((e40946 instanceof Error)){
var e__40015__auto__ = e40946;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40946;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__40957 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40958 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40959 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40960 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__40956 = (bindings[idx]);
return (fexpr__40956.cljs$core$IFn$_invoke$arity$4 ? fexpr__40956.cljs$core$IFn$_invoke$arity$4(G__40957,G__40958,G__40959,G__40960) : fexpr__40956.call(null,G__40957,G__40958,G__40959,G__40960));
}catch (e40951){if((e40951 instanceof Error)){
var e__40015__auto__ = e40951;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40951;

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
try{var G__40963 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40964 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40965 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40966 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40967 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__40962 = (bindings[idx]);
return (fexpr__40962.cljs$core$IFn$_invoke$arity$5 ? fexpr__40962.cljs$core$IFn$_invoke$arity$5(G__40963,G__40964,G__40965,G__40966,G__40967) : fexpr__40962.call(null,G__40963,G__40964,G__40965,G__40966,G__40967));
}catch (e40961){if((e40961 instanceof Error)){
var e__40015__auto__ = e40961;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40961;

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
try{var G__40970 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40971 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40972 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40973 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40974 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40975 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__40969 = (bindings[idx]);
return (fexpr__40969.cljs$core$IFn$_invoke$arity$6 ? fexpr__40969.cljs$core$IFn$_invoke$arity$6(G__40970,G__40971,G__40972,G__40973,G__40974,G__40975) : fexpr__40969.call(null,G__40970,G__40971,G__40972,G__40973,G__40974,G__40975));
}catch (e40968){if((e40968 instanceof Error)){
var e__40015__auto__ = e40968;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40968;

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
try{var G__40984 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40985 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40986 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40987 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40988 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40989 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40990 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__40983 = (bindings[idx]);
return (fexpr__40983.cljs$core$IFn$_invoke$arity$7 ? fexpr__40983.cljs$core$IFn$_invoke$arity$7(G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,G__40990) : fexpr__40983.call(null,G__40984,G__40985,G__40986,G__40987,G__40988,G__40989,G__40990));
}catch (e40977){if((e40977 instanceof Error)){
var e__40015__auto__ = e40977;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40977;

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
try{var G__40993 = sci.impl.types.eval(arg0,ctx,bindings);
var G__40994 = sci.impl.types.eval(arg1,ctx,bindings);
var G__40995 = sci.impl.types.eval(arg2,ctx,bindings);
var G__40996 = sci.impl.types.eval(arg3,ctx,bindings);
var G__40997 = sci.impl.types.eval(arg4,ctx,bindings);
var G__40998 = sci.impl.types.eval(arg5,ctx,bindings);
var G__40999 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41000 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__40992 = (bindings[idx]);
return (fexpr__40992.cljs$core$IFn$_invoke$arity$8 ? fexpr__40992.cljs$core$IFn$_invoke$arity$8(G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000) : fexpr__40992.call(null,G__40993,G__40994,G__40995,G__40996,G__40997,G__40998,G__40999,G__41000));
}catch (e40991){if((e40991 instanceof Error)){
var e__40015__auto__ = e40991;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e40991;

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
try{var G__41009 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41010 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41011 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41012 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41013 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41014 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41015 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41016 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41017 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__41008 = (bindings[idx]);
return (fexpr__41008.cljs$core$IFn$_invoke$arity$9 ? fexpr__41008.cljs$core$IFn$_invoke$arity$9(G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017) : fexpr__41008.call(null,G__41009,G__41010,G__41011,G__41012,G__41013,G__41014,G__41015,G__41016,G__41017));
}catch (e41007){if((e41007 instanceof Error)){
var e__40015__auto__ = e41007;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41007;

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
try{var G__41020 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41021 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41022 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41023 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41024 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41025 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41026 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41027 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41028 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41029 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__41019 = (bindings[idx]);
return (fexpr__41019.cljs$core$IFn$_invoke$arity$10 ? fexpr__41019.cljs$core$IFn$_invoke$arity$10(G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029) : fexpr__41019.call(null,G__41020,G__41021,G__41022,G__41023,G__41024,G__41025,G__41026,G__41027,G__41028,G__41029));
}catch (e41018){if((e41018 instanceof Error)){
var e__40015__auto__ = e41018;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41018;

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
try{var G__41033 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41034 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41035 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41036 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41037 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41038 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41039 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41040 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41041 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41042 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41043 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__41032 = (bindings[idx]);
return (fexpr__41032.cljs$core$IFn$_invoke$arity$11 ? fexpr__41032.cljs$core$IFn$_invoke$arity$11(G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043) : fexpr__41032.call(null,G__41033,G__41034,G__41035,G__41036,G__41037,G__41038,G__41039,G__41040,G__41041,G__41042,G__41043));
}catch (e41031){if((e41031 instanceof Error)){
var e__40015__auto__ = e41031;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41031;

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
try{var G__41050 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41051 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41052 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41053 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41054 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41055 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41056 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41057 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41058 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41059 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41060 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41061 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__41049 = (bindings[idx]);
return (fexpr__41049.cljs$core$IFn$_invoke$arity$12 ? fexpr__41049.cljs$core$IFn$_invoke$arity$12(G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061) : fexpr__41049.call(null,G__41050,G__41051,G__41052,G__41053,G__41054,G__41055,G__41056,G__41057,G__41058,G__41059,G__41060,G__41061));
}catch (e41048){if((e41048 instanceof Error)){
var e__40015__auto__ = e41048;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41048;

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
try{var G__41064 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41065 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41066 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41067 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41068 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41069 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41070 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41071 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41072 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41073 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41074 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41075 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41076 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__41063 = (bindings[idx]);
return (fexpr__41063.cljs$core$IFn$_invoke$arity$13 ? fexpr__41063.cljs$core$IFn$_invoke$arity$13(G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075,G__41076) : fexpr__41063.call(null,G__41064,G__41065,G__41066,G__41067,G__41068,G__41069,G__41070,G__41071,G__41072,G__41073,G__41074,G__41075,G__41076));
}catch (e41062){if((e41062 instanceof Error)){
var e__40015__auto__ = e41062;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41062;

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
try{var G__41086 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41087 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41088 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41089 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41090 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41091 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41092 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41093 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41094 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41095 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41096 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41097 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41098 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41099 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__41085 = (bindings[idx]);
return (fexpr__41085.cljs$core$IFn$_invoke$arity$14 ? fexpr__41085.cljs$core$IFn$_invoke$arity$14(G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099) : fexpr__41085.call(null,G__41086,G__41087,G__41088,G__41089,G__41090,G__41091,G__41092,G__41093,G__41094,G__41095,G__41096,G__41097,G__41098,G__41099));
}catch (e41084){if((e41084 instanceof Error)){
var e__40015__auto__ = e41084;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41084;

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
try{var G__41102 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41103 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41104 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41105 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41106 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41107 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41108 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41109 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41110 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41111 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41113 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41114 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41115 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41116 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41117 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__41101 = (bindings[idx]);
return (fexpr__41101.cljs$core$IFn$_invoke$arity$15 ? fexpr__41101.cljs$core$IFn$_invoke$arity$15(G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41113,G__41114,G__41115,G__41116,G__41117) : fexpr__41101.call(null,G__41102,G__41103,G__41104,G__41105,G__41106,G__41107,G__41108,G__41109,G__41110,G__41111,G__41113,G__41114,G__41115,G__41116,G__41117));
}catch (e41100){if((e41100 instanceof Error)){
var e__40015__auto__ = e41100;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41100;

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
try{var G__41123 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41124 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41125 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41126 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41127 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41128 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41129 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41130 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41131 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41132 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41133 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41134 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41135 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41136 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41137 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41138 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__41122 = (bindings[idx]);
return (fexpr__41122.cljs$core$IFn$_invoke$arity$16 ? fexpr__41122.cljs$core$IFn$_invoke$arity$16(G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137,G__41138) : fexpr__41122.call(null,G__41123,G__41124,G__41125,G__41126,G__41127,G__41128,G__41129,G__41130,G__41131,G__41132,G__41133,G__41134,G__41135,G__41136,G__41137,G__41138));
}catch (e41121){if((e41121 instanceof Error)){
var e__40015__auto__ = e41121;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41121;

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
try{var G__41141 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41142 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41143 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41144 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41145 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41146 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41147 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41148 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41149 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41150 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41151 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41152 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41153 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41154 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41155 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41156 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41157 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__41140 = (bindings[idx]);
return (fexpr__41140.cljs$core$IFn$_invoke$arity$17 ? fexpr__41140.cljs$core$IFn$_invoke$arity$17(G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157) : fexpr__41140.call(null,G__41141,G__41142,G__41143,G__41144,G__41145,G__41146,G__41147,G__41148,G__41149,G__41150,G__41151,G__41152,G__41153,G__41154,G__41155,G__41156,G__41157));
}catch (e41139){if((e41139 instanceof Error)){
var e__40015__auto__ = e41139;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41139;

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
try{var G__41160 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41161 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41162 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41163 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41164 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41165 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41166 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41167 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41168 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41169 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41170 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41171 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41172 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41173 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41174 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41175 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41176 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41177 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__41159 = (bindings[idx]);
return (fexpr__41159.cljs$core$IFn$_invoke$arity$18 ? fexpr__41159.cljs$core$IFn$_invoke$arity$18(G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176,G__41177) : fexpr__41159.call(null,G__41160,G__41161,G__41162,G__41163,G__41164,G__41165,G__41166,G__41167,G__41168,G__41169,G__41170,G__41171,G__41172,G__41173,G__41174,G__41175,G__41176,G__41177));
}catch (e41158){if((e41158 instanceof Error)){
var e__40015__auto__ = e41158;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41158;

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
try{var G__41180 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41181 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41182 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41183 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41184 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41185 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41186 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41187 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41188 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41189 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41190 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41191 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41192 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41193 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41194 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41195 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41196 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41197 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41198 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__41179 = (bindings[idx]);
return (fexpr__41179.cljs$core$IFn$_invoke$arity$19 ? fexpr__41179.cljs$core$IFn$_invoke$arity$19(G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198) : fexpr__41179.call(null,G__41180,G__41181,G__41182,G__41183,G__41184,G__41185,G__41186,G__41187,G__41188,G__41189,G__41190,G__41191,G__41192,G__41193,G__41194,G__41195,G__41196,G__41197,G__41198));
}catch (e41178){if((e41178 instanceof Error)){
var e__40015__auto__ = e41178;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40015__auto__,this$);
} else {
throw e41178;

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
var G__41204 = cljs.core.count(analyzed_children);
switch (G__41204) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41205 = ctx;
var G__41206 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41205,G__41206) : f.call(null,G__41205,G__41206));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41207 = ctx;
var G__41208 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41209 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__41207,G__41208,G__41209) : f.call(null,G__41207,G__41208,G__41209));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41210 = ctx;
var G__41211 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41212 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41213 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__41210,G__41211,G__41212,G__41213) : f.call(null,G__41210,G__41211,G__41212,G__41213));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41214 = ctx;
var G__41215 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41216 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41217 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41218 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__41214,G__41215,G__41216,G__41217,G__41218) : f.call(null,G__41214,G__41215,G__41216,G__41217,G__41218));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__41219 = ctx;
var G__41220 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41221 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41222 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41223 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41224 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__41219,G__41220,G__41221,G__41222,G__41223,G__41224) : f.call(null,G__41219,G__41220,G__41221,G__41222,G__41223,G__41224));
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
var G__41225 = ctx;
var G__41226 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41227 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41228 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41229 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41230 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41231 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__41225,G__41226,G__41227,G__41228,G__41229,G__41230,G__41231) : f.call(null,G__41225,G__41226,G__41227,G__41228,G__41229,G__41230,G__41231));
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
var G__41232 = ctx;
var G__41233 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41234 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41235 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41236 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41237 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41238 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41239 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239) : f.call(null,G__41232,G__41233,G__41234,G__41235,G__41236,G__41237,G__41238,G__41239));
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
var G__41241 = ctx;
var G__41242 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41243 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41244 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41245 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41246 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41247 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41248 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41249 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__41241,G__41242,G__41243,G__41244,G__41245,G__41246,G__41247,G__41248,G__41249) : f.call(null,G__41241,G__41242,G__41243,G__41244,G__41245,G__41246,G__41247,G__41248,G__41249));
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
var G__41254 = ctx;
var G__41255 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41256 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41257 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41258 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41259 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41260 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41261 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41262 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41263 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__41254,G__41255,G__41256,G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263) : f.call(null,G__41254,G__41255,G__41256,G__41257,G__41258,G__41259,G__41260,G__41261,G__41262,G__41263));
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
var G__41266 = ctx;
var G__41267 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41268 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41269 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41270 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41271 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41272 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41273 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41274 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41275 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41276 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272,G__41273,G__41274,G__41275,G__41276) : f.call(null,G__41266,G__41267,G__41268,G__41269,G__41270,G__41271,G__41272,G__41273,G__41274,G__41275,G__41276));
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
var G__41277 = ctx;
var G__41278 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41279 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41280 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41281 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41282 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41283 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41284 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41285 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41286 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41287 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41288 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__41277,G__41278,G__41279,G__41280,G__41281,G__41282,G__41283,G__41284,G__41285,G__41286,G__41287,G__41288) : f.call(null,G__41277,G__41278,G__41279,G__41280,G__41281,G__41282,G__41283,G__41284,G__41285,G__41286,G__41287,G__41288));
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
var G__41289 = ctx;
var G__41290 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41291 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41292 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41293 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41294 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41295 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41296 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41297 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41298 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41299 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41300 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41301 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__41289,G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301) : f.call(null,G__41289,G__41290,G__41291,G__41292,G__41293,G__41294,G__41295,G__41296,G__41297,G__41298,G__41299,G__41300,G__41301));
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
var G__41304 = ctx;
var G__41305 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41306 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41307 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41308 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41309 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41310 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41311 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41312 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41313 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41314 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41315 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41316 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41317 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__41304,G__41305,G__41306,G__41307,G__41308,G__41309,G__41310,G__41311,G__41312,G__41313,G__41314,G__41315,G__41316,G__41317) : f.call(null,G__41304,G__41305,G__41306,G__41307,G__41308,G__41309,G__41310,G__41311,G__41312,G__41313,G__41314,G__41315,G__41316,G__41317));
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
var G__41318 = ctx;
var G__41319 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41320 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41321 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41322 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41323 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41324 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41325 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41326 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41327 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41328 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41329 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41330 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41331 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41332 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332) : f.call(null,G__41318,G__41319,G__41320,G__41321,G__41322,G__41323,G__41324,G__41325,G__41326,G__41327,G__41328,G__41329,G__41330,G__41331,G__41332));
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
var G__41333 = ctx;
var G__41334 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41335 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41336 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41337 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41338 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41339 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41340 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41341 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41342 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41343 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41344 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41345 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41346 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41347 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41348 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__41333,G__41334,G__41335,G__41336,G__41337,G__41338,G__41339,G__41340,G__41341,G__41342,G__41343,G__41344,G__41345,G__41346,G__41347,G__41348) : f.call(null,G__41333,G__41334,G__41335,G__41336,G__41337,G__41338,G__41339,G__41340,G__41341,G__41342,G__41343,G__41344,G__41345,G__41346,G__41347,G__41348));
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
var G__41351 = ctx;
var G__41352 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41353 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41354 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41355 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41356 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41357 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41358 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41359 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41360 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41361 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41362 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41363 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41364 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41365 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41366 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41367 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__41351,G__41352,G__41353,G__41354,G__41355,G__41356,G__41357,G__41358,G__41359,G__41360,G__41361,G__41362,G__41363,G__41364,G__41365,G__41366,G__41367) : f.call(null,G__41351,G__41352,G__41353,G__41354,G__41355,G__41356,G__41357,G__41358,G__41359,G__41360,G__41361,G__41362,G__41363,G__41364,G__41365,G__41366,G__41367));
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
var G__41368 = ctx;
var G__41369 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41370 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41371 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41372 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41373 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41374 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41375 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41376 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41377 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41378 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41379 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41380 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41381 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41382 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41383 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41384 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41385 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__41368,G__41369,G__41370,G__41371,G__41372,G__41373,G__41374,G__41375,G__41376,G__41377,G__41378,G__41379,G__41380,G__41381,G__41382,G__41383,G__41384,G__41385) : f.call(null,G__41368,G__41369,G__41370,G__41371,G__41372,G__41373,G__41374,G__41375,G__41376,G__41377,G__41378,G__41379,G__41380,G__41381,G__41382,G__41383,G__41384,G__41385));
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
var G__41397 = ctx;
var G__41398 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41399 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41400 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41401 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41402 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41403 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41404 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41405 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41406 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41407 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41408 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41409 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41410 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41411 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41412 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41413 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41414 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41415 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__41397,G__41398,G__41399,G__41400,G__41401,G__41402,G__41403,G__41404,G__41405,G__41406,G__41407,G__41408,G__41409,G__41410,G__41411,G__41412,G__41413,G__41414,G__41415) : f.call(null,G__41397,G__41398,G__41399,G__41400,G__41401,G__41402,G__41403,G__41404,G__41405,G__41406,G__41407,G__41408,G__41409,G__41410,G__41411,G__41412,G__41413,G__41414,G__41415));
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
var G__41418 = ctx;
var G__41419 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41420 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41421 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41422 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41423 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41424 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41425 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41426 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41427 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41428 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41429 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41430 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41431 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41432 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41433 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41434 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41435 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41436 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41437 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__41418,G__41419,G__41420,G__41421,G__41422,G__41423,G__41424,G__41425,G__41426,G__41427,G__41428,G__41429,G__41430,G__41431,G__41432,G__41433,G__41434,G__41435,G__41436,G__41437) : f.call(null,G__41418,G__41419,G__41420,G__41421,G__41422,G__41423,G__41424,G__41425,G__41426,G__41427,G__41428,G__41429,G__41430,G__41431,G__41432,G__41433,G__41434,G__41435,G__41436,G__41437));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__41442 = cljs.core.count(analyzed_children);
switch (G__41442) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__41446 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41446.cljs$core$IFn$_invoke$arity$0 ? fexpr__41446.cljs$core$IFn$_invoke$arity$0() : fexpr__41446.call(null));
}catch (e41444){if((e41444 instanceof Error)){
var e__40138__auto__ = e41444;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41444;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e41447){if((e41447 instanceof Error)){
var e__40138__auto__ = e41447;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41447;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41450 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__41449 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41449.cljs$core$IFn$_invoke$arity$1 ? fexpr__41449.cljs$core$IFn$_invoke$arity$1(G__41450) : fexpr__41449.call(null,G__41450));
}catch (e41448){if((e41448 instanceof Error)){
var e__40138__auto__ = e41448;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41448;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41452 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41452) : f.call(null,G__41452));
}catch (e41451){if((e41451 instanceof Error)){
var e__40138__auto__ = e41451;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41451;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41455 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41456 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__41454 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41454.cljs$core$IFn$_invoke$arity$2 ? fexpr__41454.cljs$core$IFn$_invoke$arity$2(G__41455,G__41456) : fexpr__41454.call(null,G__41455,G__41456));
}catch (e41453){if((e41453 instanceof Error)){
var e__40138__auto__ = e41453;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41453;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41458 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41459 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__41458,G__41459) : f.call(null,G__41458,G__41459));
}catch (e41457){if((e41457 instanceof Error)){
var e__40138__auto__ = e41457;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41457;

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
try{var G__41465 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41466 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41467 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__41464 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41464.cljs$core$IFn$_invoke$arity$3 ? fexpr__41464.cljs$core$IFn$_invoke$arity$3(G__41465,G__41466,G__41467) : fexpr__41464.call(null,G__41465,G__41466,G__41467));
}catch (e41463){if((e41463 instanceof Error)){
var e__40138__auto__ = e41463;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41463;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41469 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41470 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41471 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__41469,G__41470,G__41471) : f.call(null,G__41469,G__41470,G__41471));
}catch (e41468){if((e41468 instanceof Error)){
var e__40138__auto__ = e41468;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41468;

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
try{var G__41478 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41479 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41480 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41481 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__41477 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41477.cljs$core$IFn$_invoke$arity$4 ? fexpr__41477.cljs$core$IFn$_invoke$arity$4(G__41478,G__41479,G__41480,G__41481) : fexpr__41477.call(null,G__41478,G__41479,G__41480,G__41481));
}catch (e41472){if((e41472 instanceof Error)){
var e__40138__auto__ = e41472;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41472;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41483 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41484 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41485 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41486 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__41483,G__41484,G__41485,G__41486) : f.call(null,G__41483,G__41484,G__41485,G__41486));
}catch (e41482){if((e41482 instanceof Error)){
var e__40138__auto__ = e41482;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41482;

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
try{var G__41489 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41490 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41491 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41492 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41493 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__41488 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41488.cljs$core$IFn$_invoke$arity$5 ? fexpr__41488.cljs$core$IFn$_invoke$arity$5(G__41489,G__41490,G__41491,G__41492,G__41493) : fexpr__41488.call(null,G__41489,G__41490,G__41491,G__41492,G__41493));
}catch (e41487){if((e41487 instanceof Error)){
var e__40138__auto__ = e41487;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41487;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41495 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41496 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41497 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41498 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41499 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__41495,G__41496,G__41497,G__41498,G__41499) : f.call(null,G__41495,G__41496,G__41497,G__41498,G__41499));
}catch (e41494){if((e41494 instanceof Error)){
var e__40138__auto__ = e41494;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41494;

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
try{var G__41506 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41507 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41508 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41509 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41510 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41511 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__41505 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41505.cljs$core$IFn$_invoke$arity$6 ? fexpr__41505.cljs$core$IFn$_invoke$arity$6(G__41506,G__41507,G__41508,G__41509,G__41510,G__41511) : fexpr__41505.call(null,G__41506,G__41507,G__41508,G__41509,G__41510,G__41511));
}catch (e41504){if((e41504 instanceof Error)){
var e__40138__auto__ = e41504;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41504;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41513 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41514 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41515 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41516 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41517 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41518 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__41513,G__41514,G__41515,G__41516,G__41517,G__41518) : f.call(null,G__41513,G__41514,G__41515,G__41516,G__41517,G__41518));
}catch (e41512){if((e41512 instanceof Error)){
var e__40138__auto__ = e41512;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41512;

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
try{var G__41521 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41522 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41523 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41524 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41525 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41526 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41527 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__41520 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41520.cljs$core$IFn$_invoke$arity$7 ? fexpr__41520.cljs$core$IFn$_invoke$arity$7(G__41521,G__41522,G__41523,G__41524,G__41525,G__41526,G__41527) : fexpr__41520.call(null,G__41521,G__41522,G__41523,G__41524,G__41525,G__41526,G__41527));
}catch (e41519){if((e41519 instanceof Error)){
var e__40138__auto__ = e41519;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41519;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41529 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41530 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41531 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41532 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41533 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41534 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41535 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__41529,G__41530,G__41531,G__41532,G__41533,G__41534,G__41535) : f.call(null,G__41529,G__41530,G__41531,G__41532,G__41533,G__41534,G__41535));
}catch (e41528){if((e41528 instanceof Error)){
var e__40138__auto__ = e41528;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41528;

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
try{var G__41541 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41542 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41543 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41544 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41545 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41546 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41547 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41548 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__41540 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41540.cljs$core$IFn$_invoke$arity$8 ? fexpr__41540.cljs$core$IFn$_invoke$arity$8(G__41541,G__41542,G__41543,G__41544,G__41545,G__41546,G__41547,G__41548) : fexpr__41540.call(null,G__41541,G__41542,G__41543,G__41544,G__41545,G__41546,G__41547,G__41548));
}catch (e41539){if((e41539 instanceof Error)){
var e__40138__auto__ = e41539;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41539;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41550 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41551 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41552 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41553 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41554 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41555 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41556 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41557 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__41550,G__41551,G__41552,G__41553,G__41554,G__41555,G__41556,G__41557) : f.call(null,G__41550,G__41551,G__41552,G__41553,G__41554,G__41555,G__41556,G__41557));
}catch (e41549){if((e41549 instanceof Error)){
var e__40138__auto__ = e41549;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41549;

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
try{var G__41562 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41563 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41564 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41565 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41566 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41567 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41568 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41569 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41570 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__41561 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41561.cljs$core$IFn$_invoke$arity$9 ? fexpr__41561.cljs$core$IFn$_invoke$arity$9(G__41562,G__41563,G__41564,G__41565,G__41566,G__41567,G__41568,G__41569,G__41570) : fexpr__41561.call(null,G__41562,G__41563,G__41564,G__41565,G__41566,G__41567,G__41568,G__41569,G__41570));
}catch (e41560){if((e41560 instanceof Error)){
var e__40138__auto__ = e41560;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41560;

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
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__41572,G__41573,G__41574,G__41575,G__41576,G__41577,G__41578,G__41579,G__41580) : f.call(null,G__41572,G__41573,G__41574,G__41575,G__41576,G__41577,G__41578,G__41579,G__41580));
}catch (e41571){if((e41571 instanceof Error)){
var e__40138__auto__ = e41571;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41571;

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
try{var G__41588 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41589 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41590 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41591 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41592 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41593 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41594 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41595 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41596 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41597 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__41587 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41587.cljs$core$IFn$_invoke$arity$10 ? fexpr__41587.cljs$core$IFn$_invoke$arity$10(G__41588,G__41589,G__41590,G__41591,G__41592,G__41593,G__41594,G__41595,G__41596,G__41597) : fexpr__41587.call(null,G__41588,G__41589,G__41590,G__41591,G__41592,G__41593,G__41594,G__41595,G__41596,G__41597));
}catch (e41582){if((e41582 instanceof Error)){
var e__40138__auto__ = e41582;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41582;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41605 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41606 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41607 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41608 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41609 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41610 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41611 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41612 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41613 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41614 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__41605,G__41606,G__41607,G__41608,G__41609,G__41610,G__41611,G__41612,G__41613,G__41614) : f.call(null,G__41605,G__41606,G__41607,G__41608,G__41609,G__41610,G__41611,G__41612,G__41613,G__41614));
}catch (e41604){if((e41604 instanceof Error)){
var e__40138__auto__ = e41604;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41604;

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
try{var G__41623 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41624 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41625 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41626 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41627 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41628 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41629 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41630 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41631 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41632 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41633 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__41622 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41622.cljs$core$IFn$_invoke$arity$11 ? fexpr__41622.cljs$core$IFn$_invoke$arity$11(G__41623,G__41624,G__41625,G__41626,G__41627,G__41628,G__41629,G__41630,G__41631,G__41632,G__41633) : fexpr__41622.call(null,G__41623,G__41624,G__41625,G__41626,G__41627,G__41628,G__41629,G__41630,G__41631,G__41632,G__41633));
}catch (e41621){if((e41621 instanceof Error)){
var e__40138__auto__ = e41621;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41621;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41640 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41641 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41642 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41643 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41644 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41645 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41646 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41647 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41648 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41649 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41650 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__41640,G__41641,G__41642,G__41643,G__41644,G__41645,G__41646,G__41647,G__41648,G__41649,G__41650) : f.call(null,G__41640,G__41641,G__41642,G__41643,G__41644,G__41645,G__41646,G__41647,G__41648,G__41649,G__41650));
}catch (e41635){if((e41635 instanceof Error)){
var e__40138__auto__ = e41635;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41635;

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
try{var G__41653 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41654 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41655 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41656 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41657 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41658 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41659 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41660 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41661 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41662 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41663 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41664 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__41652 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41652.cljs$core$IFn$_invoke$arity$12 ? fexpr__41652.cljs$core$IFn$_invoke$arity$12(G__41653,G__41654,G__41655,G__41656,G__41657,G__41658,G__41659,G__41660,G__41661,G__41662,G__41663,G__41664) : fexpr__41652.call(null,G__41653,G__41654,G__41655,G__41656,G__41657,G__41658,G__41659,G__41660,G__41661,G__41662,G__41663,G__41664));
}catch (e41651){if((e41651 instanceof Error)){
var e__40138__auto__ = e41651;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41651;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41667 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41668 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41669 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41670 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41671 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41672 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41673 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41674 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41675 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41676 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41677 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41678 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__41667,G__41668,G__41669,G__41670,G__41671,G__41672,G__41673,G__41674,G__41675,G__41676,G__41677,G__41678) : f.call(null,G__41667,G__41668,G__41669,G__41670,G__41671,G__41672,G__41673,G__41674,G__41675,G__41676,G__41677,G__41678));
}catch (e41665){if((e41665 instanceof Error)){
var e__40138__auto__ = e41665;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41665;

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
try{var G__41682 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41683 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41684 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41685 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41686 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41687 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41688 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41689 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41690 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41691 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41692 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41693 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41694 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__41681 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41681.cljs$core$IFn$_invoke$arity$13 ? fexpr__41681.cljs$core$IFn$_invoke$arity$13(G__41682,G__41683,G__41684,G__41685,G__41686,G__41687,G__41688,G__41689,G__41690,G__41691,G__41692,G__41693,G__41694) : fexpr__41681.call(null,G__41682,G__41683,G__41684,G__41685,G__41686,G__41687,G__41688,G__41689,G__41690,G__41691,G__41692,G__41693,G__41694));
}catch (e41680){if((e41680 instanceof Error)){
var e__40138__auto__ = e41680;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41680;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41698 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41699 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41700 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41701 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41702 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41703 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41704 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41705 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41706 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41707 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41708 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41709 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41710 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__41698,G__41699,G__41700,G__41701,G__41702,G__41703,G__41704,G__41705,G__41706,G__41707,G__41708,G__41709,G__41710) : f.call(null,G__41698,G__41699,G__41700,G__41701,G__41702,G__41703,G__41704,G__41705,G__41706,G__41707,G__41708,G__41709,G__41710));
}catch (e41697){if((e41697 instanceof Error)){
var e__40138__auto__ = e41697;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41697;

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
try{var G__41713 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41714 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41715 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41716 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41717 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41718 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41719 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41720 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41721 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41722 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41723 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41724 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41725 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41726 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__41712 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41712.cljs$core$IFn$_invoke$arity$14 ? fexpr__41712.cljs$core$IFn$_invoke$arity$14(G__41713,G__41714,G__41715,G__41716,G__41717,G__41718,G__41719,G__41720,G__41721,G__41722,G__41723,G__41724,G__41725,G__41726) : fexpr__41712.call(null,G__41713,G__41714,G__41715,G__41716,G__41717,G__41718,G__41719,G__41720,G__41721,G__41722,G__41723,G__41724,G__41725,G__41726));
}catch (e41711){if((e41711 instanceof Error)){
var e__40138__auto__ = e41711;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41711;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41728 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41729 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41730 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41731 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41732 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41733 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41734 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41735 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41736 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41737 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41738 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41739 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41740 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41741 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__41728,G__41729,G__41730,G__41731,G__41732,G__41733,G__41734,G__41735,G__41736,G__41737,G__41738,G__41739,G__41740,G__41741) : f.call(null,G__41728,G__41729,G__41730,G__41731,G__41732,G__41733,G__41734,G__41735,G__41736,G__41737,G__41738,G__41739,G__41740,G__41741));
}catch (e41727){if((e41727 instanceof Error)){
var e__40138__auto__ = e41727;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41727;

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
try{var G__41747 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41748 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41749 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41750 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41751 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41752 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41753 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41754 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41755 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41756 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41757 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41758 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41759 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41760 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41761 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__41746 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41746.cljs$core$IFn$_invoke$arity$15 ? fexpr__41746.cljs$core$IFn$_invoke$arity$15(G__41747,G__41748,G__41749,G__41750,G__41751,G__41752,G__41753,G__41754,G__41755,G__41756,G__41757,G__41758,G__41759,G__41760,G__41761) : fexpr__41746.call(null,G__41747,G__41748,G__41749,G__41750,G__41751,G__41752,G__41753,G__41754,G__41755,G__41756,G__41757,G__41758,G__41759,G__41760,G__41761));
}catch (e41745){if((e41745 instanceof Error)){
var e__40138__auto__ = e41745;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41745;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41763 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41764 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41765 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41766 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41767 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41768 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41769 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41770 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41771 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41772 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41773 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41774 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41775 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41776 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41777 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__41763,G__41764,G__41765,G__41766,G__41767,G__41768,G__41769,G__41770,G__41771,G__41772,G__41773,G__41774,G__41775,G__41776,G__41777) : f.call(null,G__41763,G__41764,G__41765,G__41766,G__41767,G__41768,G__41769,G__41770,G__41771,G__41772,G__41773,G__41774,G__41775,G__41776,G__41777));
}catch (e41762){if((e41762 instanceof Error)){
var e__40138__auto__ = e41762;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41762;

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
try{var G__41784 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41785 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41786 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41787 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41788 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41789 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41790 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41791 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41792 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41793 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41794 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41795 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41796 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41797 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41798 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41799 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__41783 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41783.cljs$core$IFn$_invoke$arity$16 ? fexpr__41783.cljs$core$IFn$_invoke$arity$16(G__41784,G__41785,G__41786,G__41787,G__41788,G__41789,G__41790,G__41791,G__41792,G__41793,G__41794,G__41795,G__41796,G__41797,G__41798,G__41799) : fexpr__41783.call(null,G__41784,G__41785,G__41786,G__41787,G__41788,G__41789,G__41790,G__41791,G__41792,G__41793,G__41794,G__41795,G__41796,G__41797,G__41798,G__41799));
}catch (e41782){if((e41782 instanceof Error)){
var e__40138__auto__ = e41782;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41782;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41801 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41802 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41803 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41804 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41805 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41806 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41807 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41808 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41809 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41810 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41811 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41812 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41813 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41814 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41815 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41816 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__41801,G__41802,G__41803,G__41804,G__41805,G__41806,G__41807,G__41808,G__41809,G__41810,G__41811,G__41812,G__41813,G__41814,G__41815,G__41816) : f.call(null,G__41801,G__41802,G__41803,G__41804,G__41805,G__41806,G__41807,G__41808,G__41809,G__41810,G__41811,G__41812,G__41813,G__41814,G__41815,G__41816));
}catch (e41800){if((e41800 instanceof Error)){
var e__40138__auto__ = e41800;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41800;

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
try{var G__41823 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41824 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41825 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41826 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41827 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41828 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41829 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41830 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41831 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41832 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41833 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41834 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41835 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41836 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41837 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41838 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41839 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__41822 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41822.cljs$core$IFn$_invoke$arity$17 ? fexpr__41822.cljs$core$IFn$_invoke$arity$17(G__41823,G__41824,G__41825,G__41826,G__41827,G__41828,G__41829,G__41830,G__41831,G__41832,G__41833,G__41834,G__41835,G__41836,G__41837,G__41838,G__41839) : fexpr__41822.call(null,G__41823,G__41824,G__41825,G__41826,G__41827,G__41828,G__41829,G__41830,G__41831,G__41832,G__41833,G__41834,G__41835,G__41836,G__41837,G__41838,G__41839));
}catch (e41821){if((e41821 instanceof Error)){
var e__40138__auto__ = e41821;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41821;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41841 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41842 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41843 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41844 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41845 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41846 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41847 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41848 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41849 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41850 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41851 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41852 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41853 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41854 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41855 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41856 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41857 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__41841,G__41842,G__41843,G__41844,G__41845,G__41846,G__41847,G__41848,G__41849,G__41850,G__41851,G__41852,G__41853,G__41854,G__41855,G__41856,G__41857) : f.call(null,G__41841,G__41842,G__41843,G__41844,G__41845,G__41846,G__41847,G__41848,G__41849,G__41850,G__41851,G__41852,G__41853,G__41854,G__41855,G__41856,G__41857));
}catch (e41840){if((e41840 instanceof Error)){
var e__40138__auto__ = e41840;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41840;

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
try{var G__41864 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41865 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41866 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41867 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41868 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41869 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41870 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41871 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41872 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41873 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41874 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41875 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41876 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41877 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41878 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41879 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41880 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41881 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__41863 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41863.cljs$core$IFn$_invoke$arity$18 ? fexpr__41863.cljs$core$IFn$_invoke$arity$18(G__41864,G__41865,G__41866,G__41867,G__41868,G__41869,G__41870,G__41871,G__41872,G__41873,G__41874,G__41875,G__41876,G__41877,G__41878,G__41879,G__41880,G__41881) : fexpr__41863.call(null,G__41864,G__41865,G__41866,G__41867,G__41868,G__41869,G__41870,G__41871,G__41872,G__41873,G__41874,G__41875,G__41876,G__41877,G__41878,G__41879,G__41880,G__41881));
}catch (e41859){if((e41859 instanceof Error)){
var e__40138__auto__ = e41859;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41859;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41883 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41884 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41885 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41886 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41887 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41888 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41889 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41890 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41891 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41892 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41893 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41894 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41895 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41896 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41897 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41898 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41899 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41900 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__41883,G__41884,G__41885,G__41886,G__41887,G__41888,G__41889,G__41890,G__41891,G__41892,G__41893,G__41894,G__41895,G__41896,G__41897,G__41898,G__41899,G__41900) : f.call(null,G__41883,G__41884,G__41885,G__41886,G__41887,G__41888,G__41889,G__41890,G__41891,G__41892,G__41893,G__41894,G__41895,G__41896,G__41897,G__41898,G__41899,G__41900));
}catch (e41882){if((e41882 instanceof Error)){
var e__40138__auto__ = e41882;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41882;

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
try{var G__41903 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41904 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41905 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41906 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41907 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41908 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41909 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41910 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41911 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41912 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41913 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41914 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41915 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41916 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41917 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41918 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41919 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41920 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41921 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__41902 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__41902.cljs$core$IFn$_invoke$arity$19 ? fexpr__41902.cljs$core$IFn$_invoke$arity$19(G__41903,G__41904,G__41905,G__41906,G__41907,G__41908,G__41909,G__41910,G__41911,G__41912,G__41913,G__41914,G__41915,G__41916,G__41917,G__41918,G__41919,G__41920,G__41921) : fexpr__41902.call(null,G__41903,G__41904,G__41905,G__41906,G__41907,G__41908,G__41909,G__41910,G__41911,G__41912,G__41913,G__41914,G__41915,G__41916,G__41917,G__41918,G__41919,G__41920,G__41921));
}catch (e41901){if((e41901 instanceof Error)){
var e__40138__auto__ = e41901;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41901;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__41923 = sci.impl.types.eval(arg0,ctx,bindings);
var G__41924 = sci.impl.types.eval(arg1,ctx,bindings);
var G__41925 = sci.impl.types.eval(arg2,ctx,bindings);
var G__41926 = sci.impl.types.eval(arg3,ctx,bindings);
var G__41927 = sci.impl.types.eval(arg4,ctx,bindings);
var G__41928 = sci.impl.types.eval(arg5,ctx,bindings);
var G__41929 = sci.impl.types.eval(arg6,ctx,bindings);
var G__41930 = sci.impl.types.eval(arg7,ctx,bindings);
var G__41931 = sci.impl.types.eval(arg8,ctx,bindings);
var G__41932 = sci.impl.types.eval(arg9,ctx,bindings);
var G__41933 = sci.impl.types.eval(arg10,ctx,bindings);
var G__41934 = sci.impl.types.eval(arg11,ctx,bindings);
var G__41935 = sci.impl.types.eval(arg12,ctx,bindings);
var G__41936 = sci.impl.types.eval(arg13,ctx,bindings);
var G__41937 = sci.impl.types.eval(arg14,ctx,bindings);
var G__41938 = sci.impl.types.eval(arg15,ctx,bindings);
var G__41939 = sci.impl.types.eval(arg16,ctx,bindings);
var G__41940 = sci.impl.types.eval(arg17,ctx,bindings);
var G__41941 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__41923,G__41924,G__41925,G__41926,G__41927,G__41928,G__41929,G__41930,G__41931,G__41932,G__41933,G__41934,G__41935,G__41936,G__41937,G__41938,G__41939,G__41940,G__41941) : f.call(null,G__41923,G__41924,G__41925,G__41926,G__41927,G__41928,G__41929,G__41930,G__41931,G__41932,G__41933,G__41934,G__41935,G__41936,G__41937,G__41938,G__41939,G__41940,G__41941));
}catch (e41922){if((e41922 instanceof Error)){
var e__40138__auto__ = e41922;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__40138__auto__,this$);
} else {
throw e41922;

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
}catch (e41949){if((e41949 instanceof Error)){
var e = e41949;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e41949;

}
}}),stack);
});
sci.impl.analyzer.dispatch_special = (function sci$impl$analyzer$dispatch_special(ctx,expr,f){
var G__41952 = f;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__41952)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__41952)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__41952)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__41952)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__41952)){
return sci.impl.analyzer.analyze_fn_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__41952)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop*","loop*",615029416,null),G__41952)){
return sci.impl.analyzer.analyze_loop_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__41952)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__41952)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__41952)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__41952)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__41952)){
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,cljs.core.second(expr),cljs.core.nnext(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__41952)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__41952)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case*","case*",-1938255072,null),G__41952)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__41952)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__41952)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__41952)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__41952)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__41952)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__41952)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__41952)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__41952)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41952)].join('')));

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
var m__40248__auto__ = m;
var loc__40249__auto__ = (cljs.core.truth_((function (){var and__5023__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = m__40248__auto__;
if(cljs.core.truth_(and__5023__auto____$1)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__40248__auto__);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(m__40248__auto__),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__40248__auto__)], null):null);
if(cljs.core.truth_(loc__40249__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = loc__40249__auto__);
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
var vec__41972 = f__$2;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41972,(0),null);
var method_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41972,(1),null);
var last_path = cljs.core.last(method_path);
var ctor_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_path,"");
var method_len = cljs.core.count(method_path);
var subpath = method_path.slice((0),(method_len - (1)));
var lookup_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),method_len))?cljs.core.constantly([class$,last_path]):(function (){
return [sci.impl.interop.get_static_fields(class$,subpath),last_path];
}));
var vec__41975 = (function (){try{return lookup_fn();
}catch (e41978){var ___$1 = e41978;
return null;
}})();
var class$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41975,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41975,(1),null);
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
var G__41989 = op;
var G__41989__$1 = (((G__41989 instanceof cljs.core.Keyword))?G__41989.fqn:null);
switch (G__41989__$1) {
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
}catch (e41983){if((e41983 instanceof Error)){
var e = e41983;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e41983;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__41992 = ccount;
switch (G__41992) {
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
}catch (e41963){var e = e41963;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$1(m)));
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}}finally {if(cljs.core.truth_(loc__40249__auto__)){
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42000_SHARP_){
return sci.impl.types.eval(p1__42000_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
cljs.core.run_BANG_((function (p1__42003_SHARP_){
return arr.push(sci.impl.types.eval(p1__42003_SHARP_,ctx__$1,bindings));
}),vs);

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__42006 = arguments.length;
switch (G__42006) {
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
