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
var G__37978 = arguments.length;
switch (G__37978) {
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
}catch (e37990){var _ = e37990;
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
var analyzed_children_non_tail = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38011_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(non_tail_ctx,p1__38011_SHARP_) : sci.impl.analyzer.analyze.call(null,non_tail_ctx,p1__38011_SHARP_));
}),cljs.core.butlast(children));
var ret_child = (function (){var G__38015 = sci.impl.analyzer.with_recur_target(ctx,rt);
var G__38016 = cljs.core.last(children);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38015,G__38016) : sci.impl.analyzer.analyze.call(null,G__38015,G__38016));
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(analyzed_children_non_tail,ret_child);
});
sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(ctx,expr,children){
var child_count = cljs.core.count(children);
if((child_count > (5))){
var node1 = (function (){var G__38022 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var G__38023 = expr;
var G__38024 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__38022,G__38023,G__38024) : sci.impl.analyzer.return_do.call(null,G__38022,G__38023,G__38024));
})();
var node2 = (function (){var G__38025 = ctx;
var G__38026 = expr;
var G__38027 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_do.cljs$core$IFn$_invoke$arity$3(G__38025,G__38026,G__38027) : sci.impl.analyzer.return_do.call(null,G__38025,G__38026,G__38027));
})();
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
sci.impl.types.eval(node1,ctx__$1,bindings);

return sci.impl.types.eval(node2,ctx__$1,bindings);
}),null);
} else {
var analyzed_children = sci.impl.analyzer.analyze_children_tail(ctx,children);
var G__38031 = child_count;
switch (G__38031) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38031)].join('')));

}
}
});
sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__38035 = ctx;
var G__38036 = expr;
var G__38037 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__38035,G__38036,G__38037) : sci.impl.analyzer.return_or.call(null,G__38035,G__38036,G__38037));
})();
var a1_SHARP_ = (function (){var G__38044 = ctx;
var G__38045 = expr;
var G__38046 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_or.cljs$core$IFn$_invoke$arity$3(G__38044,G__38045,G__38046) : sci.impl.analyzer.return_or.call(null,G__38044,G__38045,G__38046));
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
var G__38047 = child_count_SHARP_;
switch (G__38047) {
case (0):
return null;

break;
case (1):
var G__38048 = ctx;
var G__38049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38048,G__38049) : sci.impl.analyzer.analyze.call(null,G__38048,G__38049));

break;
case (2):
var a0_SHARP_ = (function (){var G__38050 = ctx;
var G__38051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38050,G__38051) : sci.impl.analyzer.analyze.call(null,G__38050,G__38051));
})();
var a1_SHARP_ = (function (){var G__38052 = ctx;
var G__38053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38052,G__38053) : sci.impl.analyzer.analyze.call(null,G__38052,G__38053));
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
var a0_SHARP_ = (function (){var G__38054 = ctx;
var G__38055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38054,G__38055) : sci.impl.analyzer.analyze.call(null,G__38054,G__38055));
})();
var a1_SHARP_ = (function (){var G__38056 = ctx;
var G__38057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38056,G__38057) : sci.impl.analyzer.analyze.call(null,G__38056,G__38057));
})();
var a2_SHARP_ = (function (){var G__38058 = ctx;
var G__38059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38058,G__38059) : sci.impl.analyzer.analyze.call(null,G__38058,G__38059));
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
var a0_SHARP_ = (function (){var G__38060 = ctx;
var G__38061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38060,G__38061) : sci.impl.analyzer.analyze.call(null,G__38060,G__38061));
})();
var a1_SHARP_ = (function (){var G__38062 = ctx;
var G__38063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38062,G__38063) : sci.impl.analyzer.analyze.call(null,G__38062,G__38063));
})();
var a2_SHARP_ = (function (){var G__38064 = ctx;
var G__38065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38064,G__38065) : sci.impl.analyzer.analyze.call(null,G__38064,G__38065));
})();
var a3_SHARP_ = (function (){var G__38066 = ctx;
var G__38067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38066,G__38067) : sci.impl.analyzer.analyze.call(null,G__38066,G__38067));
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
var a0_SHARP_ = (function (){var G__38068 = ctx;
var G__38069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38068,G__38069) : sci.impl.analyzer.analyze.call(null,G__38068,G__38069));
})();
var a1_SHARP_ = (function (){var G__38070 = ctx;
var G__38071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38070,G__38071) : sci.impl.analyzer.analyze.call(null,G__38070,G__38071));
})();
var a2_SHARP_ = (function (){var G__38072 = ctx;
var G__38073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38072,G__38073) : sci.impl.analyzer.analyze.call(null,G__38072,G__38073));
})();
var a3_SHARP_ = (function (){var G__38074 = ctx;
var G__38075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38074,G__38075) : sci.impl.analyzer.analyze.call(null,G__38074,G__38075));
})();
var a4_SHARP_ = (function (){var G__38076 = ctx;
var G__38077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38076,G__38077) : sci.impl.analyzer.analyze.call(null,G__38076,G__38077));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38047)].join('')));

}
}
});
sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(ctx,expr,children){
var child_count_SHARP_ = cljs.core.count(children);
if((child_count_SHARP_ > (5))){
var a0_SHARP_ = (function (){var G__38082 = ctx;
var G__38083 = expr;
var G__38084 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__38082,G__38083,G__38084) : sci.impl.analyzer.return_and.call(null,G__38082,G__38083,G__38084));
})();
var a1_SHARP_ = (function (){var G__38086 = ctx;
var G__38087 = expr;
var G__38088 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((5),children);
return (sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.return_and.cljs$core$IFn$_invoke$arity$3(G__38086,G__38087,G__38088) : sci.impl.analyzer.return_and.call(null,G__38086,G__38087,G__38088));
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
var G__38090 = child_count_SHARP_;
switch (G__38090) {
case (0):
return true;

break;
case (1):
var G__38091 = ctx;
var G__38092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38091,G__38092) : sci.impl.analyzer.analyze.call(null,G__38091,G__38092));

break;
case (2):
var a0_SHARP_ = (function (){var G__38093 = ctx;
var G__38094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38093,G__38094) : sci.impl.analyzer.analyze.call(null,G__38093,G__38094));
})();
var a1_SHARP_ = (function (){var G__38095 = ctx;
var G__38096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38095,G__38096) : sci.impl.analyzer.analyze.call(null,G__38095,G__38096));
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
var a0_SHARP_ = (function (){var G__38097 = ctx;
var G__38098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38097,G__38098) : sci.impl.analyzer.analyze.call(null,G__38097,G__38098));
})();
var a1_SHARP_ = (function (){var G__38099 = ctx;
var G__38100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38099,G__38100) : sci.impl.analyzer.analyze.call(null,G__38099,G__38100));
})();
var a2_SHARP_ = (function (){var G__38101 = ctx;
var G__38102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38101,G__38102) : sci.impl.analyzer.analyze.call(null,G__38101,G__38102));
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
var a0_SHARP_ = (function (){var G__38103 = ctx;
var G__38104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38103,G__38104) : sci.impl.analyzer.analyze.call(null,G__38103,G__38104));
})();
var a1_SHARP_ = (function (){var G__38105 = ctx;
var G__38106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38105,G__38106) : sci.impl.analyzer.analyze.call(null,G__38105,G__38106));
})();
var a2_SHARP_ = (function (){var G__38107 = ctx;
var G__38108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38107,G__38108) : sci.impl.analyzer.analyze.call(null,G__38107,G__38108));
})();
var a3_SHARP_ = (function (){var G__38110 = ctx;
var G__38111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38110,G__38111) : sci.impl.analyzer.analyze.call(null,G__38110,G__38111));
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
var a0_SHARP_ = (function (){var G__38120 = ctx;
var G__38121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(0));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38120,G__38121) : sci.impl.analyzer.analyze.call(null,G__38120,G__38121));
})();
var a1_SHARP_ = (function (){var G__38122 = ctx;
var G__38123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(1));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38122,G__38123) : sci.impl.analyzer.analyze.call(null,G__38122,G__38123));
})();
var a2_SHARP_ = (function (){var G__38124 = ctx;
var G__38125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(2));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38124,G__38125) : sci.impl.analyzer.analyze.call(null,G__38124,G__38125));
})();
var a3_SHARP_ = (function (){var G__38126 = ctx;
var G__38127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(3));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38126,G__38127) : sci.impl.analyzer.analyze.call(null,G__38126,G__38127));
})();
var a4_SHARP_ = (function (){var G__38128 = ctx;
var G__38129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,(4));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38128,G__38129) : sci.impl.analyzer.analyze.call(null,G__38128,G__38129));
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38090)].join('')));

}
}
});
sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(ctx,expr,analyzed_children){
if(cljs.core.truth_(sci.impl.analyzer.recur_target_QMARK_(ctx))){
} else {
sci.impl.analyzer.throw_error_with_location((function (){var G__38131 = new cljs.core.Keyword(null,"no-recur-reason","no-recur-reason",-1993064353).cljs$core$IFn$_invoke$arity$1(ctx);
var G__38131__$1 = (((G__38131 instanceof cljs.core.Keyword))?G__38131.fqn:null);
switch (G__38131__$1) {
case "try":
return "Cannot recur across try";

break;
default:
return "Can only recur from tail position";

}
})(),expr);
}

var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ctx);
var G__38132 = cljs.core.count(analyzed_children);
switch (G__38132) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38132)].join('')));

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38154_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__38154_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__38154_SHARP_));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k38156,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__38160 = k38156;
var G__38160__$1 = (((G__38160 instanceof cljs.core.Keyword))?G__38160.fqn:null);
switch (G__38160__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38156,else__5326__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__38163){
var vec__38164 = p__38163;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164,(1),null);
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38155){
var self__ = this;
var G__38155__$1 = this;
return (new cljs.core.RecordIter((0),G__38155__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38157,other38158){
var self__ = this;
var this38157__$1 = this;
return (((!((other38158 == null)))) && ((((this38157__$1.constructor === other38158.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38157__$1.params,other38158.params)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38157__$1.body,other38158.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38157__$1.fixed_arity,other38158.fixed_arity)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38157__$1.var_arg_name,other38158.var_arg_name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38157__$1.self_ref_idx,other38158.self_ref_idx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38157__$1.iden__GT_invoke_idx,other38158.iden__GT_invoke_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38157__$1.__extmap,other38158.__extmap)))))))))))))))));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k38156){
var self__ = this;
var this__5330__auto____$1 = this;
var G__38179 = k38156;
var G__38179__$1 = (((G__38179 instanceof cljs.core.Keyword))?G__38179.fqn:null);
switch (G__38179__$1) {
case "params":
case "body":
case "fixed-arity":
case "var-arg-name":
case "self-ref-idx":
case "iden->invoke-idx":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k38156);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__38155){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__38196 = cljs.core.keyword_identical_QMARK_;
var expr__38197 = k__5332__auto__;
if(cljs.core.truth_((pred__38196.cljs$core$IFn$_invoke$arity$2 ? pred__38196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__38197) : pred__38196.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__38197)))){
return (new sci.impl.analyzer.FnBody(G__38155,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38196.cljs$core$IFn$_invoke$arity$2 ? pred__38196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__38197) : pred__38196.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__38197)))){
return (new sci.impl.analyzer.FnBody(self__.params,G__38155,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38196.cljs$core$IFn$_invoke$arity$2 ? pred__38196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__38197) : pred__38196.call(null,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),expr__38197)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__38155,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38196.cljs$core$IFn$_invoke$arity$2 ? pred__38196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__38197) : pred__38196.call(null,new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),expr__38197)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__38155,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38196.cljs$core$IFn$_invoke$arity$2 ? pred__38196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__38197) : pred__38196.call(null,new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),expr__38197)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__38155,self__.iden__GT_invoke_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__38196.cljs$core$IFn$_invoke$arity$2 ? pred__38196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__38197) : pred__38196.call(null,new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026),expr__38197)))){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,G__38155,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__38155),null));
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

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__38155){
var self__ = this;
var this__5322__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.self_ref_idx,self__.iden__GT_invoke_idx,G__38155,self__.__extmap,self__.__hash));
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
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__38159){
var extmap__5365__auto__ = (function (){var G__38199 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38159,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026)], 0));
if(cljs.core.record_QMARK_(G__38159)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38199);
} else {
return G__38199;
}
})();
return (new sci.impl.analyzer.FnBody(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__38159),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__38159),new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(G__38159),new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(G__38159),new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(G__38159),new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(G__38159),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__38204,p__38205,_macro_QMARK_,fn_name,fn_id){
var map__38206 = p__38204;
var map__38206__$1 = cljs.core.__destructure_map(map__38206);
var ctx = map__38206__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38206__$1,new cljs.core.Keyword(null,"fn-expr","fn-expr",-933027985));
var vec__38207 = p__38205;
var seq__38208 = cljs.core.seq(vec__38207);
var first__38209 = cljs.core.first(seq__38208);
var seq__38208__$1 = cljs.core.next(seq__38208);
var binding_vector = first__38209;
var body_exprs = seq__38208__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var vec__38211 = cljs.core.split_with((function (p1__38201_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__38201_SHARP_);
}),binding_vector);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38211,(0),null);
var vec__38214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38211,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(0),null);
var var_arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38214,(1),null);
var fixed_args__$1 = cljs.core.vec(fixed_args);
var fixed_arity = cljs.core.count(fixed_args__$1);
var param_names = (function (){var G__38217 = fixed_args__$1;
if(cljs.core.truth_(var_arg_name)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38217,var_arg_name);
} else {
return G__38217;
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
var self_ref_idx = (cljs.core.truth_(fn_name)?(function (){var G__38218 = ctx__$4;
var G__38219 = new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4);
var G__38220 = fn_id;
return (sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3 ? sci.impl.analyzer.update_parents.cljs$core$IFn$_invoke$arity$3(G__38218,G__38219,G__38220) : sci.impl.analyzer.update_parents.call(null,G__38218,G__38219,G__38220));
})():null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$4,true),fn_expr,body_exprs);
var iden__GT_invoke_idx__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new cljs.core.Keyword(null,"closure-bindings","closure-bindings",112932037).cljs$core$IFn$_invoke$arity$1(ctx__$4)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parents","parents",-2027538891).cljs$core$IFn$_invoke$arity$1(ctx__$4),new cljs.core.Keyword(null,"syms","syms",-1575891762)));
var G__38221 = sci.impl.analyzer.__GT_FnBody(binding_vector,body,fixed_arity,var_arg_name,self_ref_idx,iden__GT_invoke_idx__$1);
if(cljs.core.truth_(var_arg_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38221,new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228),cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx__$1,cljs.core.last(param_idens)));
} else {
return G__38221;
}
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__38222 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"meta","meta",1499536964),true);
var G__38223 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38222,G__38223) : sci.impl.analyzer.analyze.call(null,G__38222,G__38223));
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
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__38224_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__38224_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
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
sci.impl.analyzer.analyze_fn_STAR_ = (function sci$impl$analyzer$analyze_fn_STAR_(ctx,p__38241){
var vec__38242 = p__38241;
var seq__38243 = cljs.core.seq(vec__38242);
var first__38244 = cljs.core.first(seq__38243);
var seq__38243__$1 = cljs.core.next(seq__38243);
var _fn = first__38244;
var first__38244__$1 = cljs.core.first(seq__38243__$1);
var seq__38243__$2 = cljs.core.next(seq__38243__$1);
var name_QMARK_ = first__38244__$1;
var body = seq__38243__$2;
var fn_expr = vec__38242;
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
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38264,body__$2){
var map__38265 = p__38264;
var map__38265__$1 = cljs.core.__destructure_map(map__38265);
var acc = map__38265__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38265__$1,new cljs.core.Keyword(null,"min-varargs","min-varargs",1999010596));
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
var vec__38245 = (((function (){var or__5025__auto__ = self_ref_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.seq(closed_over_iden__GT_binding_idx);
}
})())?(function (){var enclosed_array_cnt = (function (){var G__38267 = closed_over_cnt;
if(cljs.core.truth_(fn_name__$1)){
return (G__38267 + (1));
} else {
return G__38267;
}
})();
var binding__GT_enclosed = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,iden);
if(cljs.core.truth_(temp__5825__auto__)){
var binding_idx = temp__5825__auto__;
var enclosed_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(iden__GT_enclosed_idx__$1,iden);
var G__38268 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__38268[(0)] = binding_idx);

(G__38268[(1)] = enclosed_idx);

return G__38268;
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
var G__39710 = (idx + (1));
var G__39711 = (function (){var idxs = (binding__GT_enclosed[idx]);
var binding_idx = (idxs[(0)]);
var binding_val = (bindings__$1[binding_idx]);
var enclosed_idx = (idxs[(1)]);
(ret[enclosed_idx] = binding_val);

return ret;
})();
idx = G__39710;
ret = G__39711;
continue;
} else {
return ret;
}
break;
}
}),enclosed_array_cnt], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constantly(null)], null));
var bindings_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245,(0),null);
var enclosed_array_cnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38245,(1),null);
var bodies__$1 = new cljs.core.Keyword(null,"bodies","bodies",-1295887172).cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var bodies__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (body__$2){
var iden__GT_invocation_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(body__$2);
var invocation_self_idx = new cljs.core.Keyword(null,"self-ref-idx","self-ref-idx",-1384537812).cljs$core$IFn$_invoke$arity$1(body__$2);
var enclosed__GT_invocation = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (iden){
var temp__5825__auto__ = (iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1 ? iden__GT_invocation_idx.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_invocation_idx.call(null,iden));
if(cljs.core.truth_(temp__5825__auto__)){
var invocation_idx = temp__5825__auto__;
var G__38283 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__38283[(0)] = (iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1 ? iden__GT_enclosed_idx__$1.cljs$core$IFn$_invoke$arity$1(iden) : iden__GT_enclosed_idx__$1.call(null,iden)));

(G__38283[(1)] = invocation_idx);

return G__38283;
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
var G__39712 = (idx + (1));
var G__39713 = (function (){var idxs = (enclosed__GT_invocation[idx]);
var enclosed_idx = (idxs[(0)]);
var enclosed_val = (enclosed_array[enclosed_idx]);
var invoc_idx = (idxs[(1)]);
(ret[invoc_idx] = enclosed_val);

return ret;
})();
idx = G__39712;
ret = G__39713;
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
var self_ref_in_enclosed_idx = (function (){var G__38284 = enclosed_array_cnt;
if((G__38284 == null)){
return null;
} else {
return (G__38284 - (1));
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
var G__39714__delegate = function (args){
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
var G__39714 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39715__i = 0, G__39715__a = new Array(arguments.length -  0);
while (G__39715__i < G__39715__a.length) {G__39715__a[G__39715__i] = arguments[G__39715__i + 0]; ++G__39715__i;}
  args = new cljs.core.IndexedSeq(G__39715__a,0,null);
} 
return G__39714__delegate.call(this,args);};
G__39714.cljs$lang$maxFixedArity = 0;
G__39714.cljs$lang$applyTo = (function (arglist__39716){
var args = cljs.core.seq(arglist__39716);
return G__39714__delegate(args);
});
G__39714.cljs$core$IFn$_invoke$arity$variadic = G__39714__delegate;
return G__39714;
})()
;
var f__$1 = (((fn_meta__$1 == null))?f:(function (){var fn_meta__$2 = sci.impl.types.eval(fn_meta__$1,ctx__$5,bindings__$1);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$2);
})());
var f__$2 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f__$1,(function (p1__38240_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__38240_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","inner-fn","sci.impl/inner-fn",1663302998),f__$1], 0));
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
var G__38325 = ctx;
var G__38326 = expr;
var G__38327 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings);
var G__38328 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"let*","let*",1920721458,null),cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((10),destructured_let_bindings)),exprs),cljs.core.meta(expr))], null);
return (sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4 ? sci.impl.analyzer.analyze_let_STAR_.cljs$core$IFn$_invoke$arity$4(G__38325,G__38326,G__38327,G__38328) : sci.impl.analyzer.analyze_let_STAR_.call(null,G__38325,G__38326,G__38327,G__38328));
} else {
var rt = sci.impl.analyzer.recur_target(ctx);
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var stack = sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(expr),true);
var vec__38329 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38332,p__38333){
var vec__38354 = p__38332;
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38354,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38354,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38354,(2),null);
var vec__38357 = p__38333;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38357,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx__$3,new cljs.core.Keyword(null,"bindings","bindings",1271397192),(function (p1__38310_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38310_SHARP_,binding_name__$1),binding_name__$1,new_iden);
})),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(let_nodes,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(idens,new_iden)], null);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38329,(0),null);
var let_nodes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38329,(1),null);
var idens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38329,(2),null);
var body = sci.impl.analyzer.return_do(sci.impl.analyzer.with_recur_target(ctx__$2,rt),expr,exprs);
var iden__GT_invoke_idx = new cljs.core.Keyword(null,"iden->invoke-idx","iden->invoke-idx",-1797627026).cljs$core$IFn$_invoke$arity$1(ctx__$2);
var idxs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(iden__GT_invoke_idx,idens);
var G__38365 = cljs.core.count(idxs);
switch (G__38365) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38365)].join('')));

}
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.analyze_let = (function sci$impl$analyzer$analyze_let(ctx,p__38373){
var vec__38374 = p__38373;
var seq__38375 = cljs.core.seq(vec__38374);
var first__38376 = cljs.core.first(seq__38375);
var seq__38375__$1 = cljs.core.next(seq__38375);
var _let = first__38376;
var first__38376__$1 = cljs.core.first(seq__38375__$1);
var seq__38375__$2 = cljs.core.next(seq__38375__$1);
var let_bindings = first__38376__$1;
var exprs = seq__38375__$2;
var expr = vec__38374;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.init_var_BANG_ = (function sci$impl$analyzer$init_var_BANG_(ctx,name,expr){
var cnn_39718 = sci.impl.utils.current_ns_name();
var env_39719 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_39720 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_39719),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_39718], null));
var refers_39721 = new cljs.core.Keyword(null,"refers","refers",158076809).cljs$core$IFn$_invoke$arity$1(the_current_ns_39720);
var the_current_ns_39722__$1 = (function (){var temp__5823__auto__ = (function (){var and__5023__auto__ = refers_39721;
if(cljs.core.truth_(and__5023__auto__)){
return refers_39721.get(name);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var x = temp__5823__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_39718)].join(''),expr);
} else {
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_39720,name);
if(cljs.core.truth_(temp__5823__auto____$1)){
var the_var = temp__5823__auto____$1;
var cur_file = cljs.core.deref(sci.impl.utils.current_file);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur_file,new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(the_var)))){
} else {
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(the_var,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cur_file], 0));
}

return the_current_ns_39720;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns_39720,name,(function (){var G__38394 = (new sci.lang.Var(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_39718),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], null),false,false,null));
G__38394.sci$impl$vars$IVar$unbind$arity$1(null);

return G__38394;
})());
}
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_39719,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.assoc,cnn_39718,the_current_ns_39722__$1);
}));

return null;
});
sci.impl.analyzer.analyze_def = (function sci$impl$analyzer$analyze_def(ctx,expr){
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__38402 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38402,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38402,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38402,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38402,(3),null);
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
var G__38411 = cljs.core.count(children);
switch (G__38411) {
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
var case_val = (function (){var G__38419 = ctx_wo_rt;
var G__38420 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38419,G__38420) : sci.impl.analyzer.analyze.call(null,G__38419,G__38420));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__38416 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__38421 = ctx;
var G__38422 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38421,G__38422) : sci.impl.analyzer.analyze.call(null,G__38421,G__38422));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38416,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38416,(1),null);
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
var vec__38426 = cases__$1;
var seq__38427 = cljs.core.seq(vec__38426);
var first__38428 = cljs.core.first(seq__38427);
var seq__38427__$1 = cljs.core.next(seq__38427);
var k = first__38428;
var first__38428__$1 = cljs.core.first(seq__38427__$1);
var seq__38427__$2 = cljs.core.next(seq__38427__$1);
var v = first__38428__$1;
var cases__$2 = seq__38427__$2;
if(cljs.core.seq_QMARK_(k)){
var G__39724 = cases__$2;
var G__39725 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__38426,seq__38427,first__38428,seq__38427__$1,k,first__38428__$1,seq__38427__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__38416,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__38426,seq__38427,first__38428,seq__38427__$1,k,first__38428__$1,seq__38427__$2,v,cases__$2,ctx_wo_rt,case_val,clauses,match_clauses,result_clauses,vec__38416,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__39724;
ret_map = G__39725;
continue;
} else {
var G__39726 = cases__$2;
var G__39727 = assoc_new(ret_map,k,v);
cases__$1 = G__39726;
ret_map = G__39727;
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
var vec__38434 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(expr__$1))))){
var G__39728 = exprs__$1;
var G__39729 = body_exprs;
var G__39730 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__39731 = finally_expr;
exprs = G__39728;
body_exprs = G__39729;
catch_exprs = G__39730;
finally_expr = G__39731;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__39732 = exprs__$1;
var G__39733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__39734 = catch_exprs;
var G__39735 = finally_expr;
exprs = G__39732;
body_exprs = G__39733;
catch_exprs = G__39734;
finally_expr = G__39735;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(2),null);
var body__$1 = (function (){var G__38440 = ctx__$1;
var G__38441 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38440,G__38441) : sci.impl.analyzer.analyze.call(null,G__38440,G__38441));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__38442 = c;
var seq__38443 = cljs.core.seq(vec__38442);
var first__38444 = cljs.core.first(seq__38443);
var seq__38443__$1 = cljs.core.next(seq__38443);
var _ = first__38444;
var first__38444__$1 = cljs.core.first(seq__38443__$1);
var seq__38443__$2 = cljs.core.next(seq__38443__$1);
var ex = first__38444__$1;
var first__38444__$2 = cljs.core.first(seq__38443__$2);
var seq__38443__$3 = cljs.core.next(seq__38443__$2);
var binding = first__38444__$2;
var body__$2 = seq__38443__$3;
var temp__5823__auto__ = (function (){var G__38450 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),G__38450)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("js","Object","js/Object",61215323,null),G__38450)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__38450)){
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
var analyzed_body = (function (){var G__38451 = ctx__$2;
var G__38452 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38451,G__38452) : sci.impl.analyzer.analyze.call(null,G__38451,G__38452));
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
var G__38453 = ex;
var G__38453__$1 = (((G__38453 == null))?null:cljs.core.meta(G__38453));
if((G__38453__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci","error","sci/error",-979082803).cljs$core$IFn$_invoke$arity$1(G__38453__$1);
}
} else {
return and__5023__auto__;
}
})();
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__38454 = ctx__$1;
var G__38455 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__38454,G__38455) : sci.impl.analyzer.analyze.call(null,G__38454,G__38455));
})():null);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.eval_try(ctx__$2,bindings,body__$1,catches__$1,finally$__$1,sci_error);
}),stack);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__38456){
var vec__38457 = p__38456;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38457,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38457,(1),null);
var expr = vec__38457;
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
sci.impl.analyzer.analyze_dot = (function sci$impl$analyzer$analyze_dot(ctx,p__38463){
var vec__38467 = p__38463;
var seq__38468 = cljs.core.seq(vec__38467);
var first__38469 = cljs.core.first(seq__38468);
var seq__38468__$1 = cljs.core.next(seq__38468);
var _dot = first__38469;
var first__38469__$1 = cljs.core.first(seq__38468__$1);
var seq__38468__$2 = cljs.core.next(seq__38468__$1);
var instance_expr = first__38469__$1;
var first__38469__$2 = cljs.core.first(seq__38468__$2);
var seq__38468__$3 = cljs.core.next(seq__38468__$2);
var method_expr = first__38469__$2;
var args = seq__38468__$3;
var expr = vec__38467;
var ctx__$1 = sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx);
var vec__38470 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__38471 = cljs.core.seq(vec__38470);
var first__38472 = cljs.core.first(seq__38471);
var seq__38471__$1 = cljs.core.next(seq__38471);
var method_expr__$1 = first__38472;
var args__$1 = seq__38471__$1;
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
return cljs.core.with_meta((function (){var G__38473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.boolean$(allowed_QMARK_),cljs.core.boolean$(field_access)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__38473)){
return sci.impl.types.__GT_NodeR((function (this$,ctx__$2,bindings){
return sci.impl.evaluator.allowed_instance_field_invocation(ctx__$2,bindings,instance_expr__$1,meth_name);
}),stack);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__38473)){
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
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__38474){
var vec__38475 = p__38474;
var seq__38476 = cljs.core.seq(vec__38475);
var first__38477 = cljs.core.first(seq__38476);
var seq__38476__$1 = cljs.core.next(seq__38476);
var method_name = first__38477;
var first__38477__$1 = cljs.core.first(seq__38476__$1);
var seq__38476__$2 = cljs.core.next(seq__38476__$1);
var obj = first__38477__$1;
var args = seq__38476__$2;
var expr = vec__38475;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.analyze_dot(ctx,cljs.core.with_meta((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)),cljs.core.meta(expr)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__38483){
var vec__38484 = p__38483;
var seq__38485 = cljs.core.seq(vec__38484);
var first__38486 = cljs.core.first(seq__38485);
var seq__38485__$1 = cljs.core.next(seq__38485);
var _new = first__38486;
var first__38486__$1 = cljs.core.first(seq__38485__$1);
var seq__38485__$2 = cljs.core.next(seq__38485__$1);
var class_sym = first__38486__$1;
var args = seq__38485__$2;
var expr = vec__38484;
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
var G__38491 = ctx__$1;
var G__38492 = expr;
var G__38493 = maybe_record_constructor;
var G__38494 = args__$1;
var G__38495 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__38496 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__38491,G__38492,G__38493,G__38494,G__38495,G__38496) : sci.impl.analyzer.return_call.call(null,G__38491,G__38492,G__38493,G__38494,G__38495,G__38496));
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
var G__38498 = ctx__$1;
var G__38499 = expr;
var G__38501 = new cljs.core.Keyword("sci.impl","constructor","sci.impl/constructor",1320345666).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__38502 = args__$1;
var G__38503 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file)], 0));
var G__38504 = null;
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$6(G__38498,G__38499,G__38501,G__38502,G__38503,G__38504) : sci.impl.analyzer.return_call.call(null,G__38498,G__38499,G__38501,G__38502,G__38503,G__38504));
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
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__38506){
var vec__38507 = p__38506;
var seq__38508 = cljs.core.seq(vec__38507);
var first__38509 = cljs.core.first(seq__38508);
var seq__38508__$1 = cljs.core.next(seq__38508);
var constructor_sym = first__38509;
var args = seq__38508__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(constructor_sym),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns)], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}catch (e38514){if((e38514 instanceof Error)){
var e = e38514;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e38514;

}
}}),stack);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__38519){
var vec__38520 = p__38519;
var seq__38521 = cljs.core.seq(vec__38520);
var first__38522 = cljs.core.first(seq__38521);
var seq__38521__$1 = cljs.core.next(seq__38521);
var _ns = first__38522;
var first__38522__$1 = cljs.core.first(seq__38521__$1);
var seq__38521__$2 = cljs.core.next(seq__38521__$1);
var ns_name = first__38522__$1;
var exprs = seq__38521__$2;
var expr = vec__38520;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__38523 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38523,(1),null);
var vec__38526 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38526,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38526,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__38542 = cljs.core.first(exprs__$3);
var seq__38543 = cljs.core.seq(vec__38542);
var first__38544 = cljs.core.first(seq__38543);
var seq__38543__$1 = cljs.core.next(seq__38543);
var k = first__38544;
var args = seq__38543__$1;
var expr__$1 = vec__38542;
var G__38545 = k;
var G__38545__$1 = (((G__38545 instanceof cljs.core.Keyword))?G__38545.fqn:null);
switch (G__38545__$1) {
case "require":
case "require-macros":
case "use":
case "import":
case "refer-clojure":
var G__39737 = cljs.core.next(exprs__$3);
var G__39738 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__38546 = k;
var G__38546__$1 = (((G__38546 instanceof cljs.core.Keyword))?G__38546.fqn:null);
switch (G__38546__$1) {
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
return ((function (exprs__$3,ret,G__38546,G__38546__$1,G__38545,G__38545__$1,vec__38542,seq__38543,first__38544,seq__38543__$1,k,args,expr__$1,vec__38523,docstring,exprs__$1,vec__38526,attr_map,exprs__$2,attr_map__$1,vec__38520,seq__38521,first__38522,seq__38521__$1,_ns,first__38522__$1,seq__38521__$2,ns_name,exprs,expr){
return (function() { 
var G__39740__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),args__$1);
};
var G__39740 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__39741__i = 0, G__39741__a = new Array(arguments.length -  1);
while (G__39741__i < G__39741__a.length) {G__39741__a[G__39741__i] = arguments[G__39741__i + 1]; ++G__39741__i;}
  args__$1 = new cljs.core.IndexedSeq(G__39741__a,0,null);
} 
return G__39740__delegate.call(this,ctx__$1,args__$1);};
G__39740.cljs$lang$maxFixedArity = 1;
G__39740.cljs$lang$applyTo = (function (arglist__39742){
var ctx__$1 = cljs.core.first(arglist__39742);
var args__$1 = cljs.core.rest(arglist__39742);
return G__39740__delegate(ctx__$1,args__$1);
});
G__39740.cljs$core$IFn$_invoke$arity$variadic = G__39740__delegate;
return G__39740;
})()
;
;})(exprs__$3,ret,G__38546,G__38546__$1,G__38545,G__38545__$1,vec__38542,seq__38543,first__38544,seq__38543__$1,k,args,expr__$1,vec__38523,docstring,exprs__$1,vec__38526,attr_map,exprs__$2,attr_map__$1,vec__38520,seq__38521,first__38522,seq__38521__$1,_ns,first__38522__$1,seq__38521__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38546__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__39737;
ret = G__39738;
continue;

break;
case "gen-class":
var G__39743 = cljs.core.next(exprs__$3);
var G__39744 = ret;
exprs__$3 = G__39743;
ret = G__39744;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38545__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.types.__GT_NodeR(((function (exprs__$3,ret,vec__38523,docstring,exprs__$1,vec__38526,attr_map,exprs__$2,attr_map__$1,vec__38520,seq__38521,first__38522,seq__38521__$1,_ns,first__38522__$1,seq__38521__$2,ns_name,exprs,expr){
return (function (this$,ctx__$1,bindings){
sci.impl.load.add_loaded_lib(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__38523,docstring,exprs__$1,vec__38526,attr_map,exprs__$2,attr_map__$1,vec__38520,seq__38521,first__38522,seq__38521__$1,_ns,first__38522__$1,seq__38521__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__38548){
var vec__38550 = p__38548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38550,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38550,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__38560){
var vec__38561 = p__38560;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561,(2),null);
var expr = vec__38561;
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
var G__38574 = cljs.core.count(analyzed_children);
switch (G__38574) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__38576 = (bindings[idx]);
return (fexpr__38576.cljs$core$IFn$_invoke$arity$0 ? fexpr__38576.cljs$core$IFn$_invoke$arity$0() : fexpr__38576.call(null));
}catch (e38575){if((e38575 instanceof Error)){
var e__37675__auto__ = e38575;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38575;

}
}}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__38579 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__38578 = (bindings[idx]);
return (fexpr__38578.cljs$core$IFn$_invoke$arity$1 ? fexpr__38578.cljs$core$IFn$_invoke$arity$1(G__38579) : fexpr__38578.call(null,G__38579));
}catch (e38577){if((e38577 instanceof Error)){
var e__37675__auto__ = e38577;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38577;

}
}}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__38587 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38588 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__38586 = (bindings[idx]);
return (fexpr__38586.cljs$core$IFn$_invoke$arity$2 ? fexpr__38586.cljs$core$IFn$_invoke$arity$2(G__38587,G__38588) : fexpr__38586.call(null,G__38587,G__38588));
}catch (e38584){if((e38584 instanceof Error)){
var e__37675__auto__ = e38584;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38584;

}
}}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__38591 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38592 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38593 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__38590 = (bindings[idx]);
return (fexpr__38590.cljs$core$IFn$_invoke$arity$3 ? fexpr__38590.cljs$core$IFn$_invoke$arity$3(G__38591,G__38592,G__38593) : fexpr__38590.call(null,G__38591,G__38592,G__38593));
}catch (e38589){if((e38589 instanceof Error)){
var e__37675__auto__ = e38589;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38589;

}
}}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__38596 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38597 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38598 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38599 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__38595 = (bindings[idx]);
return (fexpr__38595.cljs$core$IFn$_invoke$arity$4 ? fexpr__38595.cljs$core$IFn$_invoke$arity$4(G__38596,G__38597,G__38598,G__38599) : fexpr__38595.call(null,G__38596,G__38597,G__38598,G__38599));
}catch (e38594){if((e38594 instanceof Error)){
var e__37675__auto__ = e38594;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38594;

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
try{var G__38607 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38608 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38609 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38610 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38611 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__38606 = (bindings[idx]);
return (fexpr__38606.cljs$core$IFn$_invoke$arity$5 ? fexpr__38606.cljs$core$IFn$_invoke$arity$5(G__38607,G__38608,G__38609,G__38610,G__38611) : fexpr__38606.call(null,G__38607,G__38608,G__38609,G__38610,G__38611));
}catch (e38601){if((e38601 instanceof Error)){
var e__37675__auto__ = e38601;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38601;

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
try{var G__38617 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38618 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38619 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38620 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38621 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38622 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__38616 = (bindings[idx]);
return (fexpr__38616.cljs$core$IFn$_invoke$arity$6 ? fexpr__38616.cljs$core$IFn$_invoke$arity$6(G__38617,G__38618,G__38619,G__38620,G__38621,G__38622) : fexpr__38616.call(null,G__38617,G__38618,G__38619,G__38620,G__38621,G__38622));
}catch (e38612){if((e38612 instanceof Error)){
var e__37675__auto__ = e38612;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38612;

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
try{var G__38625 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38626 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38627 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38628 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38629 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38630 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38631 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__38624 = (bindings[idx]);
return (fexpr__38624.cljs$core$IFn$_invoke$arity$7 ? fexpr__38624.cljs$core$IFn$_invoke$arity$7(G__38625,G__38626,G__38627,G__38628,G__38629,G__38630,G__38631) : fexpr__38624.call(null,G__38625,G__38626,G__38627,G__38628,G__38629,G__38630,G__38631));
}catch (e38623){if((e38623 instanceof Error)){
var e__37675__auto__ = e38623;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38623;

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
try{var G__38639 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38640 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38641 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38642 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38643 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38644 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38645 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38646 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__38638 = (bindings[idx]);
return (fexpr__38638.cljs$core$IFn$_invoke$arity$8 ? fexpr__38638.cljs$core$IFn$_invoke$arity$8(G__38639,G__38640,G__38641,G__38642,G__38643,G__38644,G__38645,G__38646) : fexpr__38638.call(null,G__38639,G__38640,G__38641,G__38642,G__38643,G__38644,G__38645,G__38646));
}catch (e38637){if((e38637 instanceof Error)){
var e__37675__auto__ = e38637;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38637;

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
try{var G__38649 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38650 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38651 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38652 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38653 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38654 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38655 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38656 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38657 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__38648 = (bindings[idx]);
return (fexpr__38648.cljs$core$IFn$_invoke$arity$9 ? fexpr__38648.cljs$core$IFn$_invoke$arity$9(G__38649,G__38650,G__38651,G__38652,G__38653,G__38654,G__38655,G__38656,G__38657) : fexpr__38648.call(null,G__38649,G__38650,G__38651,G__38652,G__38653,G__38654,G__38655,G__38656,G__38657));
}catch (e38647){if((e38647 instanceof Error)){
var e__37675__auto__ = e38647;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38647;

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
try{var G__38664 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38665 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38666 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38667 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38668 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38669 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38670 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38671 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38672 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38673 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__38663 = (bindings[idx]);
return (fexpr__38663.cljs$core$IFn$_invoke$arity$10 ? fexpr__38663.cljs$core$IFn$_invoke$arity$10(G__38664,G__38665,G__38666,G__38667,G__38668,G__38669,G__38670,G__38671,G__38672,G__38673) : fexpr__38663.call(null,G__38664,G__38665,G__38666,G__38667,G__38668,G__38669,G__38670,G__38671,G__38672,G__38673));
}catch (e38662){if((e38662 instanceof Error)){
var e__37675__auto__ = e38662;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38662;

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
try{var G__38676 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38677 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38678 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38679 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38680 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38681 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38682 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38683 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38684 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38685 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38686 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__38675 = (bindings[idx]);
return (fexpr__38675.cljs$core$IFn$_invoke$arity$11 ? fexpr__38675.cljs$core$IFn$_invoke$arity$11(G__38676,G__38677,G__38678,G__38679,G__38680,G__38681,G__38682,G__38683,G__38684,G__38685,G__38686) : fexpr__38675.call(null,G__38676,G__38677,G__38678,G__38679,G__38680,G__38681,G__38682,G__38683,G__38684,G__38685,G__38686));
}catch (e38674){if((e38674 instanceof Error)){
var e__37675__auto__ = e38674;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38674;

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
try{var G__38693 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38694 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38695 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38696 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38697 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38698 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38699 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38700 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38701 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38702 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38703 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38704 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__38692 = (bindings[idx]);
return (fexpr__38692.cljs$core$IFn$_invoke$arity$12 ? fexpr__38692.cljs$core$IFn$_invoke$arity$12(G__38693,G__38694,G__38695,G__38696,G__38697,G__38698,G__38699,G__38700,G__38701,G__38702,G__38703,G__38704) : fexpr__38692.call(null,G__38693,G__38694,G__38695,G__38696,G__38697,G__38698,G__38699,G__38700,G__38701,G__38702,G__38703,G__38704));
}catch (e38691){if((e38691 instanceof Error)){
var e__37675__auto__ = e38691;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38691;

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
try{var G__38707 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38708 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38709 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38710 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38711 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38712 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38713 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38714 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38715 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38716 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38717 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38718 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38719 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__38706 = (bindings[idx]);
return (fexpr__38706.cljs$core$IFn$_invoke$arity$13 ? fexpr__38706.cljs$core$IFn$_invoke$arity$13(G__38707,G__38708,G__38709,G__38710,G__38711,G__38712,G__38713,G__38714,G__38715,G__38716,G__38717,G__38718,G__38719) : fexpr__38706.call(null,G__38707,G__38708,G__38709,G__38710,G__38711,G__38712,G__38713,G__38714,G__38715,G__38716,G__38717,G__38718,G__38719));
}catch (e38705){if((e38705 instanceof Error)){
var e__37675__auto__ = e38705;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38705;

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
try{var G__38726 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38727 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38728 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38729 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38730 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38731 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38732 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38733 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38734 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38735 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38736 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38737 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38738 = sci.impl.types.eval(arg12,ctx,bindings);
var G__38739 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__38725 = (bindings[idx]);
return (fexpr__38725.cljs$core$IFn$_invoke$arity$14 ? fexpr__38725.cljs$core$IFn$_invoke$arity$14(G__38726,G__38727,G__38728,G__38729,G__38730,G__38731,G__38732,G__38733,G__38734,G__38735,G__38736,G__38737,G__38738,G__38739) : fexpr__38725.call(null,G__38726,G__38727,G__38728,G__38729,G__38730,G__38731,G__38732,G__38733,G__38734,G__38735,G__38736,G__38737,G__38738,G__38739));
}catch (e38724){if((e38724 instanceof Error)){
var e__37675__auto__ = e38724;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38724;

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
try{var G__38742 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38743 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38744 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38745 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38746 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38747 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38748 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38749 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38750 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38751 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38752 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38753 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38754 = sci.impl.types.eval(arg12,ctx,bindings);
var G__38755 = sci.impl.types.eval(arg13,ctx,bindings);
var G__38756 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__38741 = (bindings[idx]);
return (fexpr__38741.cljs$core$IFn$_invoke$arity$15 ? fexpr__38741.cljs$core$IFn$_invoke$arity$15(G__38742,G__38743,G__38744,G__38745,G__38746,G__38747,G__38748,G__38749,G__38750,G__38751,G__38752,G__38753,G__38754,G__38755,G__38756) : fexpr__38741.call(null,G__38742,G__38743,G__38744,G__38745,G__38746,G__38747,G__38748,G__38749,G__38750,G__38751,G__38752,G__38753,G__38754,G__38755,G__38756));
}catch (e38740){if((e38740 instanceof Error)){
var e__37675__auto__ = e38740;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38740;

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
try{var G__38761 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38762 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38763 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38764 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38765 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38766 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38767 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38768 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38769 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38770 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38771 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38772 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38773 = sci.impl.types.eval(arg12,ctx,bindings);
var G__38774 = sci.impl.types.eval(arg13,ctx,bindings);
var G__38775 = sci.impl.types.eval(arg14,ctx,bindings);
var G__38776 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__38760 = (bindings[idx]);
return (fexpr__38760.cljs$core$IFn$_invoke$arity$16 ? fexpr__38760.cljs$core$IFn$_invoke$arity$16(G__38761,G__38762,G__38763,G__38764,G__38765,G__38766,G__38767,G__38768,G__38769,G__38770,G__38771,G__38772,G__38773,G__38774,G__38775,G__38776) : fexpr__38760.call(null,G__38761,G__38762,G__38763,G__38764,G__38765,G__38766,G__38767,G__38768,G__38769,G__38770,G__38771,G__38772,G__38773,G__38774,G__38775,G__38776));
}catch (e38759){if((e38759 instanceof Error)){
var e__37675__auto__ = e38759;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38759;

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
try{var G__38781 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38782 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38783 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38784 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38785 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38786 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38787 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38788 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38789 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38790 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38791 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38792 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38793 = sci.impl.types.eval(arg12,ctx,bindings);
var G__38794 = sci.impl.types.eval(arg13,ctx,bindings);
var G__38795 = sci.impl.types.eval(arg14,ctx,bindings);
var G__38796 = sci.impl.types.eval(arg15,ctx,bindings);
var G__38797 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__38780 = (bindings[idx]);
return (fexpr__38780.cljs$core$IFn$_invoke$arity$17 ? fexpr__38780.cljs$core$IFn$_invoke$arity$17(G__38781,G__38782,G__38783,G__38784,G__38785,G__38786,G__38787,G__38788,G__38789,G__38790,G__38791,G__38792,G__38793,G__38794,G__38795,G__38796,G__38797) : fexpr__38780.call(null,G__38781,G__38782,G__38783,G__38784,G__38785,G__38786,G__38787,G__38788,G__38789,G__38790,G__38791,G__38792,G__38793,G__38794,G__38795,G__38796,G__38797));
}catch (e38779){if((e38779 instanceof Error)){
var e__37675__auto__ = e38779;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38779;

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
try{var G__38802 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38803 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38804 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38805 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38806 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38807 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38808 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38809 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38810 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38811 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38812 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38813 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38814 = sci.impl.types.eval(arg12,ctx,bindings);
var G__38815 = sci.impl.types.eval(arg13,ctx,bindings);
var G__38816 = sci.impl.types.eval(arg14,ctx,bindings);
var G__38817 = sci.impl.types.eval(arg15,ctx,bindings);
var G__38818 = sci.impl.types.eval(arg16,ctx,bindings);
var G__38819 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__38801 = (bindings[idx]);
return (fexpr__38801.cljs$core$IFn$_invoke$arity$18 ? fexpr__38801.cljs$core$IFn$_invoke$arity$18(G__38802,G__38803,G__38804,G__38805,G__38806,G__38807,G__38808,G__38809,G__38810,G__38811,G__38812,G__38813,G__38814,G__38815,G__38816,G__38817,G__38818,G__38819) : fexpr__38801.call(null,G__38802,G__38803,G__38804,G__38805,G__38806,G__38807,G__38808,G__38809,G__38810,G__38811,G__38812,G__38813,G__38814,G__38815,G__38816,G__38817,G__38818,G__38819));
}catch (e38800){if((e38800 instanceof Error)){
var e__37675__auto__ = e38800;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38800;

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
try{var G__38822 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38823 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38824 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38825 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38826 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38827 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38828 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38829 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38830 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38831 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38832 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38833 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38834 = sci.impl.types.eval(arg12,ctx,bindings);
var G__38835 = sci.impl.types.eval(arg13,ctx,bindings);
var G__38836 = sci.impl.types.eval(arg14,ctx,bindings);
var G__38837 = sci.impl.types.eval(arg15,ctx,bindings);
var G__38838 = sci.impl.types.eval(arg16,ctx,bindings);
var G__38839 = sci.impl.types.eval(arg17,ctx,bindings);
var G__38840 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__38821 = (bindings[idx]);
return (fexpr__38821.cljs$core$IFn$_invoke$arity$19 ? fexpr__38821.cljs$core$IFn$_invoke$arity$19(G__38822,G__38823,G__38824,G__38825,G__38826,G__38827,G__38828,G__38829,G__38830,G__38831,G__38832,G__38833,G__38834,G__38835,G__38836,G__38837,G__38838,G__38839,G__38840) : fexpr__38821.call(null,G__38822,G__38823,G__38824,G__38825,G__38826,G__38827,G__38828,G__38829,G__38830,G__38831,G__38832,G__38833,G__38834,G__38835,G__38836,G__38837,G__38838,G__38839,G__38840));
}catch (e38820){if((e38820 instanceof Error)){
var e__37675__auto__ = e38820;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37675__auto__,this$);
} else {
throw e38820;

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
var G__38845 = cljs.core.count(analyzed_children);
switch (G__38845) {
case (0):
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
}),stack);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__38846 = ctx;
var G__38847 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__38846,G__38847) : f.call(null,G__38846,G__38847));
}),stack);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__38852 = ctx;
var G__38853 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38854 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__38852,G__38853,G__38854) : f.call(null,G__38852,G__38853,G__38854));
}),stack);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__38855 = ctx;
var G__38856 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38857 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38858 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__38855,G__38856,G__38857,G__38858) : f.call(null,G__38855,G__38856,G__38857,G__38858));
}),stack);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__38859 = ctx;
var G__38860 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38861 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38862 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38863 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__38859,G__38860,G__38861,G__38862,G__38863) : f.call(null,G__38859,G__38860,G__38861,G__38862,G__38863));
}),stack);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
var G__38864 = ctx;
var G__38865 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38866 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38867 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38868 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38869 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__38864,G__38865,G__38866,G__38867,G__38868,G__38869) : f.call(null,G__38864,G__38865,G__38866,G__38867,G__38868,G__38869));
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
var G__38870 = ctx;
var G__38871 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38872 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38873 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38874 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38875 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38876 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__38870,G__38871,G__38872,G__38873,G__38874,G__38875,G__38876) : f.call(null,G__38870,G__38871,G__38872,G__38873,G__38874,G__38875,G__38876));
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
var G__38881 = ctx;
var G__38882 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38883 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38884 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38885 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38886 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38887 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38888 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__38881,G__38882,G__38883,G__38884,G__38885,G__38886,G__38887,G__38888) : f.call(null,G__38881,G__38882,G__38883,G__38884,G__38885,G__38886,G__38887,G__38888));
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
var G__38889 = ctx;
var G__38890 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38891 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38892 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38893 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38894 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38895 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38896 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38897 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__38889,G__38890,G__38891,G__38892,G__38893,G__38894,G__38895,G__38896,G__38897) : f.call(null,G__38889,G__38890,G__38891,G__38892,G__38893,G__38894,G__38895,G__38896,G__38897));
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
var G__38898 = ctx;
var G__38899 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38900 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38901 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38902 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38903 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38904 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38905 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38906 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38907 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__38898,G__38899,G__38900,G__38901,G__38902,G__38903,G__38904,G__38905,G__38906,G__38907) : f.call(null,G__38898,G__38899,G__38900,G__38901,G__38902,G__38903,G__38904,G__38905,G__38906,G__38907));
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
var G__38913 = ctx;
var G__38914 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38915 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38916 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38917 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38918 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38919 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38920 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38921 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38922 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38923 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__38913,G__38914,G__38915,G__38916,G__38917,G__38918,G__38919,G__38920,G__38921,G__38922,G__38923) : f.call(null,G__38913,G__38914,G__38915,G__38916,G__38917,G__38918,G__38919,G__38920,G__38921,G__38922,G__38923));
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
var G__38924 = ctx;
var G__38925 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38926 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38927 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38928 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38929 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38930 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38931 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38932 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38933 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38934 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38935 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__38924,G__38925,G__38926,G__38927,G__38928,G__38929,G__38930,G__38931,G__38932,G__38933,G__38934,G__38935) : f.call(null,G__38924,G__38925,G__38926,G__38927,G__38928,G__38929,G__38930,G__38931,G__38932,G__38933,G__38934,G__38935));
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
var G__38939 = ctx;
var G__38940 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38941 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38942 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38943 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38944 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38945 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38946 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38947 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38948 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38949 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38950 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38951 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__38939,G__38940,G__38941,G__38942,G__38943,G__38944,G__38945,G__38946,G__38947,G__38948,G__38949,G__38950,G__38951) : f.call(null,G__38939,G__38940,G__38941,G__38942,G__38943,G__38944,G__38945,G__38946,G__38947,G__38948,G__38949,G__38950,G__38951));
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
var G__38956 = ctx;
var G__38957 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38958 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38959 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38960 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38961 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38962 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38963 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38964 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38965 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38966 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38967 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38968 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38969 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__38956,G__38957,G__38958,G__38959,G__38960,G__38961,G__38962,G__38963,G__38964,G__38965,G__38966,G__38967,G__38968,G__38969) : f.call(null,G__38956,G__38957,G__38958,G__38959,G__38960,G__38961,G__38962,G__38963,G__38964,G__38965,G__38966,G__38967,G__38968,G__38969));
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
var G__38970 = ctx;
var G__38971 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38972 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38973 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38974 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38975 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38976 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38977 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38978 = sci.impl.types.eval(arg7,ctx,bindings);
var G__38979 = sci.impl.types.eval(arg8,ctx,bindings);
var G__38980 = sci.impl.types.eval(arg9,ctx,bindings);
var G__38981 = sci.impl.types.eval(arg10,ctx,bindings);
var G__38982 = sci.impl.types.eval(arg11,ctx,bindings);
var G__38983 = sci.impl.types.eval(arg12,ctx,bindings);
var G__38984 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__38970,G__38971,G__38972,G__38973,G__38974,G__38975,G__38976,G__38977,G__38978,G__38979,G__38980,G__38981,G__38982,G__38983,G__38984) : f.call(null,G__38970,G__38971,G__38972,G__38973,G__38974,G__38975,G__38976,G__38977,G__38978,G__38979,G__38980,G__38981,G__38982,G__38983,G__38984));
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
var G__38991 = ctx;
var G__38992 = sci.impl.types.eval(arg0,ctx,bindings);
var G__38993 = sci.impl.types.eval(arg1,ctx,bindings);
var G__38994 = sci.impl.types.eval(arg2,ctx,bindings);
var G__38995 = sci.impl.types.eval(arg3,ctx,bindings);
var G__38996 = sci.impl.types.eval(arg4,ctx,bindings);
var G__38997 = sci.impl.types.eval(arg5,ctx,bindings);
var G__38998 = sci.impl.types.eval(arg6,ctx,bindings);
var G__38999 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39000 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39001 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39002 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39003 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39004 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39005 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39006 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__38991,G__38992,G__38993,G__38994,G__38995,G__38996,G__38997,G__38998,G__38999,G__39000,G__39001,G__39002,G__39003,G__39004,G__39005,G__39006) : f.call(null,G__38991,G__38992,G__38993,G__38994,G__38995,G__38996,G__38997,G__38998,G__38999,G__39000,G__39001,G__39002,G__39003,G__39004,G__39005,G__39006));
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
var G__39013 = ctx;
var G__39014 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39015 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39016 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39017 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39018 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39019 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39020 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39021 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39022 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39023 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39024 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39025 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39026 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39027 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39028 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39029 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__39013,G__39014,G__39015,G__39016,G__39017,G__39018,G__39019,G__39020,G__39021,G__39022,G__39023,G__39024,G__39025,G__39026,G__39027,G__39028,G__39029) : f.call(null,G__39013,G__39014,G__39015,G__39016,G__39017,G__39018,G__39019,G__39020,G__39021,G__39022,G__39023,G__39024,G__39025,G__39026,G__39027,G__39028,G__39029));
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
var G__39030 = ctx;
var G__39031 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39032 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39033 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39034 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39035 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39036 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39037 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39038 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39039 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39040 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39041 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39042 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39043 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39044 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39045 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39046 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39047 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__39030,G__39031,G__39032,G__39033,G__39034,G__39035,G__39036,G__39037,G__39038,G__39039,G__39040,G__39041,G__39042,G__39043,G__39044,G__39045,G__39046,G__39047) : f.call(null,G__39030,G__39031,G__39032,G__39033,G__39034,G__39035,G__39036,G__39037,G__39038,G__39039,G__39040,G__39041,G__39042,G__39043,G__39044,G__39045,G__39046,G__39047));
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
var G__39053 = ctx;
var G__39054 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39055 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39056 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39057 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39058 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39059 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39060 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39061 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39062 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39063 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39064 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39065 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39066 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39067 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39068 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39069 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39070 = sci.impl.types.eval(arg16,ctx,bindings);
var G__39071 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__39053,G__39054,G__39055,G__39056,G__39057,G__39058,G__39059,G__39060,G__39061,G__39062,G__39063,G__39064,G__39065,G__39066,G__39067,G__39068,G__39069,G__39070,G__39071) : f.call(null,G__39053,G__39054,G__39055,G__39056,G__39057,G__39058,G__39059,G__39060,G__39061,G__39062,G__39063,G__39064,G__39065,G__39066,G__39067,G__39068,G__39069,G__39070,G__39071));
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
var G__39072 = ctx;
var G__39073 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39074 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39075 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39076 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39077 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39078 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39079 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39080 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39081 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39082 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39083 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39084 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39085 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39086 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39087 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39088 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39089 = sci.impl.types.eval(arg16,ctx,bindings);
var G__39090 = sci.impl.types.eval(arg17,ctx,bindings);
var G__39091 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__39072,G__39073,G__39074,G__39075,G__39076,G__39077,G__39078,G__39079,G__39080,G__39081,G__39082,G__39083,G__39084,G__39085,G__39086,G__39087,G__39088,G__39089,G__39090,G__39091) : f.call(null,G__39072,G__39073,G__39074,G__39075,G__39076,G__39077,G__39078,G__39079,G__39080,G__39081,G__39082,G__39083,G__39084,G__39085,G__39086,G__39087,G__39088,G__39089,G__39090,G__39091));
}),stack);

break;
default:
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
}),stack);

}
});
sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack,wrap){
var G__39104 = cljs.core.count(analyzed_children);
switch (G__39104) {
case (0):
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var fexpr__39106 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39106.cljs$core$IFn$_invoke$arity$0 ? fexpr__39106.cljs$core$IFn$_invoke$arity$0() : fexpr__39106.call(null));
}catch (e39105){if((e39105 instanceof Error)){
var e__37798__auto__ = e39105;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39105;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e39107){if((e39107 instanceof Error)){
var e__37798__auto__ = e39107;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39107;

}
}}),stack);
}

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39110 = sci.impl.types.eval(arg0,ctx,bindings);
var fexpr__39109 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39109.cljs$core$IFn$_invoke$arity$1 ? fexpr__39109.cljs$core$IFn$_invoke$arity$1(G__39110) : fexpr__39109.call(null,G__39110));
}catch (e39108){if((e39108 instanceof Error)){
var e__37798__auto__ = e39108;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39108;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39112 = sci.impl.types.eval(arg0,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__39112) : f.call(null,G__39112));
}catch (e39111){if((e39111 instanceof Error)){
var e__37798__auto__ = e39111;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39111;

}
}}),stack);
}

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
if(cljs.core.truth_(wrap)){
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39115 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39116 = sci.impl.types.eval(arg1,ctx,bindings);
var fexpr__39114 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39114.cljs$core$IFn$_invoke$arity$2 ? fexpr__39114.cljs$core$IFn$_invoke$arity$2(G__39115,G__39116) : fexpr__39114.call(null,G__39115,G__39116));
}catch (e39113){if((e39113 instanceof Error)){
var e__37798__auto__ = e39113;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39113;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39118 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39119 = sci.impl.types.eval(arg1,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__39118,G__39119) : f.call(null,G__39118,G__39119));
}catch (e39117){if((e39117 instanceof Error)){
var e__37798__auto__ = e39117;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39117;

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
try{var G__39122 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39123 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39124 = sci.impl.types.eval(arg2,ctx,bindings);
var fexpr__39121 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39121.cljs$core$IFn$_invoke$arity$3 ? fexpr__39121.cljs$core$IFn$_invoke$arity$3(G__39122,G__39123,G__39124) : fexpr__39121.call(null,G__39122,G__39123,G__39124));
}catch (e39120){if((e39120 instanceof Error)){
var e__37798__auto__ = e39120;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39120;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39126 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39127 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39128 = sci.impl.types.eval(arg2,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__39126,G__39127,G__39128) : f.call(null,G__39126,G__39127,G__39128));
}catch (e39125){if((e39125 instanceof Error)){
var e__37798__auto__ = e39125;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39125;

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
try{var G__39132 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39133 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39134 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39135 = sci.impl.types.eval(arg3,ctx,bindings);
var fexpr__39131 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39131.cljs$core$IFn$_invoke$arity$4 ? fexpr__39131.cljs$core$IFn$_invoke$arity$4(G__39132,G__39133,G__39134,G__39135) : fexpr__39131.call(null,G__39132,G__39133,G__39134,G__39135));
}catch (e39129){if((e39129 instanceof Error)){
var e__37798__auto__ = e39129;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39129;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39141 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39142 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39143 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39144 = sci.impl.types.eval(arg3,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__39141,G__39142,G__39143,G__39144) : f.call(null,G__39141,G__39142,G__39143,G__39144));
}catch (e39139){if((e39139 instanceof Error)){
var e__37798__auto__ = e39139;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39139;

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
try{var G__39147 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39148 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39149 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39150 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39151 = sci.impl.types.eval(arg4,ctx,bindings);
var fexpr__39146 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39146.cljs$core$IFn$_invoke$arity$5 ? fexpr__39146.cljs$core$IFn$_invoke$arity$5(G__39147,G__39148,G__39149,G__39150,G__39151) : fexpr__39146.call(null,G__39147,G__39148,G__39149,G__39150,G__39151));
}catch (e39145){if((e39145 instanceof Error)){
var e__37798__auto__ = e39145;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39145;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39153 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39154 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39155 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39156 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39157 = sci.impl.types.eval(arg4,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__39153,G__39154,G__39155,G__39156,G__39157) : f.call(null,G__39153,G__39154,G__39155,G__39156,G__39157));
}catch (e39152){if((e39152 instanceof Error)){
var e__37798__auto__ = e39152;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39152;

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
try{var G__39160 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39161 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39162 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39163 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39164 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39165 = sci.impl.types.eval(arg5,ctx,bindings);
var fexpr__39159 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39159.cljs$core$IFn$_invoke$arity$6 ? fexpr__39159.cljs$core$IFn$_invoke$arity$6(G__39160,G__39161,G__39162,G__39163,G__39164,G__39165) : fexpr__39159.call(null,G__39160,G__39161,G__39162,G__39163,G__39164,G__39165));
}catch (e39158){if((e39158 instanceof Error)){
var e__37798__auto__ = e39158;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39158;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39167 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39168 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39169 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39170 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39171 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39172 = sci.impl.types.eval(arg5,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__39167,G__39168,G__39169,G__39170,G__39171,G__39172) : f.call(null,G__39167,G__39168,G__39169,G__39170,G__39171,G__39172));
}catch (e39166){if((e39166 instanceof Error)){
var e__37798__auto__ = e39166;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39166;

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
try{var G__39176 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39177 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39178 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39179 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39180 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39181 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39182 = sci.impl.types.eval(arg6,ctx,bindings);
var fexpr__39175 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39175.cljs$core$IFn$_invoke$arity$7 ? fexpr__39175.cljs$core$IFn$_invoke$arity$7(G__39176,G__39177,G__39178,G__39179,G__39180,G__39181,G__39182) : fexpr__39175.call(null,G__39176,G__39177,G__39178,G__39179,G__39180,G__39181,G__39182));
}catch (e39173){if((e39173 instanceof Error)){
var e__37798__auto__ = e39173;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39173;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39188 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39189 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39190 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39191 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39192 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39193 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39194 = sci.impl.types.eval(arg6,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__39188,G__39189,G__39190,G__39191,G__39192,G__39193,G__39194) : f.call(null,G__39188,G__39189,G__39190,G__39191,G__39192,G__39193,G__39194));
}catch (e39187){if((e39187 instanceof Error)){
var e__37798__auto__ = e39187;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39187;

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
try{var G__39199 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39200 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39201 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39202 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39203 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39204 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39205 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39206 = sci.impl.types.eval(arg7,ctx,bindings);
var fexpr__39198 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39198.cljs$core$IFn$_invoke$arity$8 ? fexpr__39198.cljs$core$IFn$_invoke$arity$8(G__39199,G__39200,G__39201,G__39202,G__39203,G__39204,G__39205,G__39206) : fexpr__39198.call(null,G__39199,G__39200,G__39201,G__39202,G__39203,G__39204,G__39205,G__39206));
}catch (e39195){if((e39195 instanceof Error)){
var e__37798__auto__ = e39195;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39195;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39208 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39209 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39210 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39211 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39212 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39213 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39214 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39215 = sci.impl.types.eval(arg7,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__39208,G__39209,G__39210,G__39211,G__39212,G__39213,G__39214,G__39215) : f.call(null,G__39208,G__39209,G__39210,G__39211,G__39212,G__39213,G__39214,G__39215));
}catch (e39207){if((e39207 instanceof Error)){
var e__37798__auto__ = e39207;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39207;

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
try{var G__39218 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39219 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39220 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39221 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39222 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39223 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39224 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39225 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39226 = sci.impl.types.eval(arg8,ctx,bindings);
var fexpr__39217 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39217.cljs$core$IFn$_invoke$arity$9 ? fexpr__39217.cljs$core$IFn$_invoke$arity$9(G__39218,G__39219,G__39220,G__39221,G__39222,G__39223,G__39224,G__39225,G__39226) : fexpr__39217.call(null,G__39218,G__39219,G__39220,G__39221,G__39222,G__39223,G__39224,G__39225,G__39226));
}catch (e39216){if((e39216 instanceof Error)){
var e__37798__auto__ = e39216;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39216;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39228 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39229 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39230 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39231 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39232 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39233 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39234 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39235 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39236 = sci.impl.types.eval(arg8,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__39228,G__39229,G__39230,G__39231,G__39232,G__39233,G__39234,G__39235,G__39236) : f.call(null,G__39228,G__39229,G__39230,G__39231,G__39232,G__39233,G__39234,G__39235,G__39236));
}catch (e39227){if((e39227 instanceof Error)){
var e__37798__auto__ = e39227;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39227;

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
try{var G__39241 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39242 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39243 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39244 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39245 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39246 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39247 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39248 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39249 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39250 = sci.impl.types.eval(arg9,ctx,bindings);
var fexpr__39240 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39240.cljs$core$IFn$_invoke$arity$10 ? fexpr__39240.cljs$core$IFn$_invoke$arity$10(G__39241,G__39242,G__39243,G__39244,G__39245,G__39246,G__39247,G__39248,G__39249,G__39250) : fexpr__39240.call(null,G__39241,G__39242,G__39243,G__39244,G__39245,G__39246,G__39247,G__39248,G__39249,G__39250));
}catch (e39239){if((e39239 instanceof Error)){
var e__37798__auto__ = e39239;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39239;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39254 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39255 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39256 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39257 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39258 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39259 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39260 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39261 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39262 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39263 = sci.impl.types.eval(arg9,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__39254,G__39255,G__39256,G__39257,G__39258,G__39259,G__39260,G__39261,G__39262,G__39263) : f.call(null,G__39254,G__39255,G__39256,G__39257,G__39258,G__39259,G__39260,G__39261,G__39262,G__39263));
}catch (e39253){if((e39253 instanceof Error)){
var e__37798__auto__ = e39253;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39253;

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
try{var G__39268 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39269 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39270 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39271 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39272 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39273 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39274 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39275 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39276 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39277 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39278 = sci.impl.types.eval(arg10,ctx,bindings);
var fexpr__39267 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39267.cljs$core$IFn$_invoke$arity$11 ? fexpr__39267.cljs$core$IFn$_invoke$arity$11(G__39268,G__39269,G__39270,G__39271,G__39272,G__39273,G__39274,G__39275,G__39276,G__39277,G__39278) : fexpr__39267.call(null,G__39268,G__39269,G__39270,G__39271,G__39272,G__39273,G__39274,G__39275,G__39276,G__39277,G__39278));
}catch (e39266){if((e39266 instanceof Error)){
var e__37798__auto__ = e39266;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39266;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39289 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39290 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39291 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39292 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39293 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39294 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39295 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39296 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39297 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39298 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39299 = sci.impl.types.eval(arg10,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__39289,G__39290,G__39291,G__39292,G__39293,G__39294,G__39295,G__39296,G__39297,G__39298,G__39299) : f.call(null,G__39289,G__39290,G__39291,G__39292,G__39293,G__39294,G__39295,G__39296,G__39297,G__39298,G__39299));
}catch (e39288){if((e39288 instanceof Error)){
var e__37798__auto__ = e39288;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39288;

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
try{var G__39304 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39305 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39306 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39307 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39308 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39309 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39310 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39311 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39312 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39313 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39314 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39315 = sci.impl.types.eval(arg11,ctx,bindings);
var fexpr__39303 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39303.cljs$core$IFn$_invoke$arity$12 ? fexpr__39303.cljs$core$IFn$_invoke$arity$12(G__39304,G__39305,G__39306,G__39307,G__39308,G__39309,G__39310,G__39311,G__39312,G__39313,G__39314,G__39315) : fexpr__39303.call(null,G__39304,G__39305,G__39306,G__39307,G__39308,G__39309,G__39310,G__39311,G__39312,G__39313,G__39314,G__39315));
}catch (e39302){if((e39302 instanceof Error)){
var e__37798__auto__ = e39302;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39302;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39320 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39321 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39322 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39323 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39324 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39325 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39326 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39327 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39328 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39329 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39330 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39331 = sci.impl.types.eval(arg11,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__39320,G__39321,G__39322,G__39323,G__39324,G__39325,G__39326,G__39327,G__39328,G__39329,G__39330,G__39331) : f.call(null,G__39320,G__39321,G__39322,G__39323,G__39324,G__39325,G__39326,G__39327,G__39328,G__39329,G__39330,G__39331));
}catch (e39316){if((e39316 instanceof Error)){
var e__37798__auto__ = e39316;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39316;

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
try{var G__39334 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39335 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39336 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39337 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39338 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39339 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39340 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39341 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39342 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39343 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39344 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39345 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39346 = sci.impl.types.eval(arg12,ctx,bindings);
var fexpr__39333 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39333.cljs$core$IFn$_invoke$arity$13 ? fexpr__39333.cljs$core$IFn$_invoke$arity$13(G__39334,G__39335,G__39336,G__39337,G__39338,G__39339,G__39340,G__39341,G__39342,G__39343,G__39344,G__39345,G__39346) : fexpr__39333.call(null,G__39334,G__39335,G__39336,G__39337,G__39338,G__39339,G__39340,G__39341,G__39342,G__39343,G__39344,G__39345,G__39346));
}catch (e39332){if((e39332 instanceof Error)){
var e__37798__auto__ = e39332;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39332;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39350 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39351 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39352 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39353 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39354 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39355 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39356 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39357 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39358 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39359 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39360 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39361 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39362 = sci.impl.types.eval(arg12,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__39350,G__39351,G__39352,G__39353,G__39354,G__39355,G__39356,G__39357,G__39358,G__39359,G__39360,G__39361,G__39362) : f.call(null,G__39350,G__39351,G__39352,G__39353,G__39354,G__39355,G__39356,G__39357,G__39358,G__39359,G__39360,G__39361,G__39362));
}catch (e39349){if((e39349 instanceof Error)){
var e__37798__auto__ = e39349;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39349;

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
try{var G__39365 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39366 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39367 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39368 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39369 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39370 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39371 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39372 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39373 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39374 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39375 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39376 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39377 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39378 = sci.impl.types.eval(arg13,ctx,bindings);
var fexpr__39364 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39364.cljs$core$IFn$_invoke$arity$14 ? fexpr__39364.cljs$core$IFn$_invoke$arity$14(G__39365,G__39366,G__39367,G__39368,G__39369,G__39370,G__39371,G__39372,G__39373,G__39374,G__39375,G__39376,G__39377,G__39378) : fexpr__39364.call(null,G__39365,G__39366,G__39367,G__39368,G__39369,G__39370,G__39371,G__39372,G__39373,G__39374,G__39375,G__39376,G__39377,G__39378));
}catch (e39363){if((e39363 instanceof Error)){
var e__37798__auto__ = e39363;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39363;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39383 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39384 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39385 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39386 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39387 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39388 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39389 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39390 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39391 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39392 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39393 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39394 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39395 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39396 = sci.impl.types.eval(arg13,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__39383,G__39384,G__39385,G__39386,G__39387,G__39388,G__39389,G__39390,G__39391,G__39392,G__39393,G__39394,G__39395,G__39396) : f.call(null,G__39383,G__39384,G__39385,G__39386,G__39387,G__39388,G__39389,G__39390,G__39391,G__39392,G__39393,G__39394,G__39395,G__39396));
}catch (e39379){if((e39379 instanceof Error)){
var e__37798__auto__ = e39379;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39379;

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
try{var G__39403 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39404 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39405 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39406 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39407 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39408 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39409 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39410 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39411 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39412 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39413 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39414 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39415 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39416 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39417 = sci.impl.types.eval(arg14,ctx,bindings);
var fexpr__39402 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39402.cljs$core$IFn$_invoke$arity$15 ? fexpr__39402.cljs$core$IFn$_invoke$arity$15(G__39403,G__39404,G__39405,G__39406,G__39407,G__39408,G__39409,G__39410,G__39411,G__39412,G__39413,G__39414,G__39415,G__39416,G__39417) : fexpr__39402.call(null,G__39403,G__39404,G__39405,G__39406,G__39407,G__39408,G__39409,G__39410,G__39411,G__39412,G__39413,G__39414,G__39415,G__39416,G__39417));
}catch (e39398){if((e39398 instanceof Error)){
var e__37798__auto__ = e39398;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39398;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39419 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39420 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39421 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39422 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39423 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39424 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39425 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39426 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39427 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39428 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39429 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39430 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39431 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39432 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39433 = sci.impl.types.eval(arg14,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__39419,G__39420,G__39421,G__39422,G__39423,G__39424,G__39425,G__39426,G__39427,G__39428,G__39429,G__39430,G__39431,G__39432,G__39433) : f.call(null,G__39419,G__39420,G__39421,G__39422,G__39423,G__39424,G__39425,G__39426,G__39427,G__39428,G__39429,G__39430,G__39431,G__39432,G__39433));
}catch (e39418){if((e39418 instanceof Error)){
var e__37798__auto__ = e39418;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39418;

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
try{var G__39440 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39441 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39442 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39443 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39444 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39445 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39446 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39447 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39448 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39449 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39450 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39451 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39452 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39453 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39454 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39455 = sci.impl.types.eval(arg15,ctx,bindings);
var fexpr__39439 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39439.cljs$core$IFn$_invoke$arity$16 ? fexpr__39439.cljs$core$IFn$_invoke$arity$16(G__39440,G__39441,G__39442,G__39443,G__39444,G__39445,G__39446,G__39447,G__39448,G__39449,G__39450,G__39451,G__39452,G__39453,G__39454,G__39455) : fexpr__39439.call(null,G__39440,G__39441,G__39442,G__39443,G__39444,G__39445,G__39446,G__39447,G__39448,G__39449,G__39450,G__39451,G__39452,G__39453,G__39454,G__39455));
}catch (e39438){if((e39438 instanceof Error)){
var e__37798__auto__ = e39438;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39438;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39457 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39458 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39459 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39460 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39461 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39462 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39463 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39464 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39465 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39466 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39467 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39468 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39469 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39470 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39471 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39472 = sci.impl.types.eval(arg15,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__39457,G__39458,G__39459,G__39460,G__39461,G__39462,G__39463,G__39464,G__39465,G__39466,G__39467,G__39468,G__39469,G__39470,G__39471,G__39472) : f.call(null,G__39457,G__39458,G__39459,G__39460,G__39461,G__39462,G__39463,G__39464,G__39465,G__39466,G__39467,G__39468,G__39469,G__39470,G__39471,G__39472));
}catch (e39456){if((e39456 instanceof Error)){
var e__37798__auto__ = e39456;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39456;

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
try{var G__39475 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39476 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39477 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39478 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39479 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39480 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39481 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39482 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39483 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39484 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39485 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39486 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39487 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39488 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39489 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39490 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39491 = sci.impl.types.eval(arg16,ctx,bindings);
var fexpr__39474 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39474.cljs$core$IFn$_invoke$arity$17 ? fexpr__39474.cljs$core$IFn$_invoke$arity$17(G__39475,G__39476,G__39477,G__39478,G__39479,G__39480,G__39481,G__39482,G__39483,G__39484,G__39485,G__39486,G__39487,G__39488,G__39489,G__39490,G__39491) : fexpr__39474.call(null,G__39475,G__39476,G__39477,G__39478,G__39479,G__39480,G__39481,G__39482,G__39483,G__39484,G__39485,G__39486,G__39487,G__39488,G__39489,G__39490,G__39491));
}catch (e39473){if((e39473 instanceof Error)){
var e__37798__auto__ = e39473;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39473;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39496 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39497 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39498 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39499 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39500 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39501 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39502 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39503 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39504 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39505 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39506 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39507 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39508 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39509 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39510 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39511 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39512 = sci.impl.types.eval(arg16,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__39496,G__39497,G__39498,G__39499,G__39500,G__39501,G__39502,G__39503,G__39504,G__39505,G__39506,G__39507,G__39508,G__39509,G__39510,G__39511,G__39512) : f.call(null,G__39496,G__39497,G__39498,G__39499,G__39500,G__39501,G__39502,G__39503,G__39504,G__39505,G__39506,G__39507,G__39508,G__39509,G__39510,G__39511,G__39512));
}catch (e39495){if((e39495 instanceof Error)){
var e__37798__auto__ = e39495;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39495;

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
try{var G__39517 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39518 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39519 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39520 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39521 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39522 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39523 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39524 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39525 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39526 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39527 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39528 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39529 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39530 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39531 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39532 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39533 = sci.impl.types.eval(arg16,ctx,bindings);
var G__39534 = sci.impl.types.eval(arg17,ctx,bindings);
var fexpr__39516 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39516.cljs$core$IFn$_invoke$arity$18 ? fexpr__39516.cljs$core$IFn$_invoke$arity$18(G__39517,G__39518,G__39519,G__39520,G__39521,G__39522,G__39523,G__39524,G__39525,G__39526,G__39527,G__39528,G__39529,G__39530,G__39531,G__39532,G__39533,G__39534) : fexpr__39516.call(null,G__39517,G__39518,G__39519,G__39520,G__39521,G__39522,G__39523,G__39524,G__39525,G__39526,G__39527,G__39528,G__39529,G__39530,G__39531,G__39532,G__39533,G__39534));
}catch (e39515){if((e39515 instanceof Error)){
var e__37798__auto__ = e39515;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39515;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39544 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39545 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39546 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39547 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39548 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39549 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39550 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39551 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39552 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39553 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39554 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39555 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39556 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39557 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39558 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39559 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39560 = sci.impl.types.eval(arg16,ctx,bindings);
var G__39561 = sci.impl.types.eval(arg17,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__39544,G__39545,G__39546,G__39547,G__39548,G__39549,G__39550,G__39551,G__39552,G__39553,G__39554,G__39555,G__39556,G__39557,G__39558,G__39559,G__39560,G__39561) : f.call(null,G__39544,G__39545,G__39546,G__39547,G__39548,G__39549,G__39550,G__39551,G__39552,G__39553,G__39554,G__39555,G__39556,G__39557,G__39558,G__39559,G__39560,G__39561));
}catch (e39540){if((e39540 instanceof Error)){
var e__37798__auto__ = e39540;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39540;

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
try{var G__39573 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39574 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39575 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39576 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39577 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39578 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39579 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39580 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39581 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39582 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39583 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39584 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39585 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39586 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39587 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39588 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39589 = sci.impl.types.eval(arg16,ctx,bindings);
var G__39590 = sci.impl.types.eval(arg17,ctx,bindings);
var G__39591 = sci.impl.types.eval(arg18,ctx,bindings);
var fexpr__39572 = (wrap.cljs$core$IFn$_invoke$arity$3 ? wrap.cljs$core$IFn$_invoke$arity$3(ctx,bindings,f) : wrap.call(null,ctx,bindings,f));
return (fexpr__39572.cljs$core$IFn$_invoke$arity$19 ? fexpr__39572.cljs$core$IFn$_invoke$arity$19(G__39573,G__39574,G__39575,G__39576,G__39577,G__39578,G__39579,G__39580,G__39581,G__39582,G__39583,G__39584,G__39585,G__39586,G__39587,G__39588,G__39589,G__39590,G__39591) : fexpr__39572.call(null,G__39573,G__39574,G__39575,G__39576,G__39577,G__39578,G__39579,G__39580,G__39581,G__39582,G__39583,G__39584,G__39585,G__39586,G__39587,G__39588,G__39589,G__39590,G__39591));
}catch (e39571){if((e39571 instanceof Error)){
var e__37798__auto__ = e39571;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39571;

}
}}),stack);
} else {
return sci.impl.types.__GT_NodeR((function (this$,ctx,bindings){
try{var G__39598 = sci.impl.types.eval(arg0,ctx,bindings);
var G__39599 = sci.impl.types.eval(arg1,ctx,bindings);
var G__39600 = sci.impl.types.eval(arg2,ctx,bindings);
var G__39601 = sci.impl.types.eval(arg3,ctx,bindings);
var G__39602 = sci.impl.types.eval(arg4,ctx,bindings);
var G__39603 = sci.impl.types.eval(arg5,ctx,bindings);
var G__39604 = sci.impl.types.eval(arg6,ctx,bindings);
var G__39605 = sci.impl.types.eval(arg7,ctx,bindings);
var G__39606 = sci.impl.types.eval(arg8,ctx,bindings);
var G__39607 = sci.impl.types.eval(arg9,ctx,bindings);
var G__39608 = sci.impl.types.eval(arg10,ctx,bindings);
var G__39609 = sci.impl.types.eval(arg11,ctx,bindings);
var G__39610 = sci.impl.types.eval(arg12,ctx,bindings);
var G__39611 = sci.impl.types.eval(arg13,ctx,bindings);
var G__39612 = sci.impl.types.eval(arg14,ctx,bindings);
var G__39613 = sci.impl.types.eval(arg15,ctx,bindings);
var G__39614 = sci.impl.types.eval(arg16,ctx,bindings);
var G__39615 = sci.impl.types.eval(arg17,ctx,bindings);
var G__39616 = sci.impl.types.eval(arg18,ctx,bindings);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__39598,G__39599,G__39600,G__39601,G__39602,G__39603,G__39604,G__39605,G__39606,G__39607,G__39608,G__39609,G__39610,G__39611,G__39612,G__39613,G__39614,G__39615,G__39616) : f.call(null,G__39598,G__39599,G__39600,G__39601,G__39602,G__39603,G__39604,G__39605,G__39606,G__39607,G__39608,G__39609,G__39610,G__39611,G__39612,G__39613,G__39614,G__39615,G__39616));
}catch (e39597){if((e39597 instanceof Error)){
var e__37798__auto__ = e39597;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e__37798__auto__,this$);
} else {
throw e39597;

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
}catch (e39619){if((e39619 instanceof Error)){
var e = e39619;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,this$);
} else {
throw e39619;

}
}}),stack);
});
sci.impl.analyzer.dispatch_special = (function sci$impl$analyzer$dispatch_special(ctx,expr,f){
var G__39624 = f;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__39624)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__39624)){
return sci.impl.analyzer.return_and(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__39624)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__39624)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__39624)){
return sci.impl.analyzer.analyze_fn_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__39624)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop*","loop*",615029416,null),G__39624)){
return sci.impl.analyzer.analyze_loop_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__39624)){
return sci.impl.analyzer.return_do(ctx,expr,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-constructor","expand-constructor",-343741576,null),G__39624)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__39624)){
return sci.impl.analyzer.analyze_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__39624)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let*","let*",1920721458,null),G__39624)){
return sci.impl.analyzer.analyze_let_STAR_(ctx,expr,cljs.core.second(expr),cljs.core.nnext(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"expand-dot*","expand-dot*",-1946890561,null),G__39624)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),G__39624)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case*","case*",-1938255072,null),G__39624)){
return sci.impl.analyzer.analyze_case_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__39624)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__39624)){
return sci.impl.analyzer.return_recur(ctx,expr,sci.impl.analyzer.analyze_children(sci.impl.analyzer.without_recur_target.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__39624)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"var","var",870848730,null),G__39624)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__39624)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__39624)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__39624)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__39624)){
return sci.impl.analyzer.return_or(ctx,expr,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39624)].join('')));

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
var m__37908__auto__ = m;
var loc__37909__auto__ = (cljs.core.truth_((function (){var and__5023__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = m__37908__auto__;
if(cljs.core.truth_(and__5023__auto____$1)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__37908__auto__);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(m__37908__auto__),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m__37908__auto__)], null):null);
if(cljs.core.truth_(loc__37909__auto__)){
(sci.impl.utils._STAR_top_level_location_STAR_ = loc__37909__auto__);
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
var vec__39633 = f__$2;
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39633,(0),null);
var method_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39633,(1),null);
var last_path = cljs.core.last(method_path);
var ctor_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_path,"");
var method_len = cljs.core.count(method_path);
var subpath = method_path.slice((0),(method_len - (1)));
var lookup_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),method_len))?cljs.core.constantly([class$,last_path]):(function (){
return [sci.impl.interop.get_static_fields(class$,subpath),last_path];
}));
var vec__39636 = (function (){try{return lookup_fn();
}catch (e39639){var ___$1 = e39639;
return null;
}})();
var class$__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39636,(0),null);
var method_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39636,(1),null);
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
var G__39657 = op;
var G__39657__$1 = (((G__39657 instanceof cljs.core.Keyword))?G__39657.fqn:null);
switch (G__39657__$1) {
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
}catch (e39644){if((e39644 instanceof Error)){
var e = e39644;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,(function (){var stack = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(sci.impl.utils.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.deref(sci.impl.utils.current_file),new cljs.core.Keyword("sci.impl","f-meta","sci.impl/f-meta",-1735495322),f_meta], 0));
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),stack);
})());
} else {
throw e39644;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__39659 = ccount;
switch (G__39659) {
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
}catch (e39628){var e = e39628;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
return null;
}),sci.impl.utils.make_stack.cljs$core$IFn$_invoke$arity$1(m)));
}finally {if(cljs.core.truth_(eval_file)){
sci.impl.vars.pop_thread_bindings();
} else {
}
}}finally {if(cljs.core.truth_(loc__37909__auto__)){
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.js_obj,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39670_SHARP_){
return sci.impl.types.eval(p1__39670_SHARP_,ctx__$1,bindings);
}),vs__$1)));
}),null);
} else {
var vs = sci.impl.analyzer.analyze_children(ctx,v);
return sci.impl.types.__GT_NodeR((function (this$,ctx__$1,bindings){
var arr = [];
cljs.core.run_BANG_((function (p1__39671_SHARP_){
return arr.push(sci.impl.types.eval(p1__39671_SHARP_,ctx__$1,bindings));
}),vs);

return arr;
}),null);
}
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__39681 = arguments.length;
switch (G__39681) {
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
