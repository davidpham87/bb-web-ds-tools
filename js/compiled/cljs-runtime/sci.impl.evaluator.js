goog.provide('sci.impl.evaluator');
sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = sci.impl.types.eval(init,ctx,bindings);
var m__$1 = sci.impl.types.eval(m,ctx,bindings);
var cnn = sci.impl.types.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.utils.var_QMARK_(prev))))?(new sci.lang.Var(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false,false,null)):prev);
var v = (((sci.impl.utils.var_unbound === init__$1))?(function (){var G__30455 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30455,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__30455;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)),cnn),var_name);
});
sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__30461 = arguments.length;
switch (G__30461) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(case_map,v,new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426));
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426),found)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
} else {
return sci.impl.types.eval(found,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = sci.impl.types.eval(case_val,ctx,bindings);
var found = cljs.core.get.cljs$core$IFn$_invoke$arity$3(case_map,v,new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426));
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.evaluator","not-found","sci.impl.evaluator/not-found",1684798426),found)){
return sci.impl.types.eval(case_default,ctx,bindings);
} else {
return sci.impl.types.eval(found,ctx,bindings);
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$,sci_error){
try{var _STAR_in_try_STAR__orig_val__30470 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__30471 = (function (){var or__5025__auto__ = (cljs.core.truth_(sci_error)?new cljs.core.Keyword("sci","error","sci/error",-979082803):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.seq(catches);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
return sci.impl.utils._STAR_in_try_STAR_;
}
}
})();
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__30471);

try{return sci.impl.types.eval(body,ctx,bindings);
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__30470);
}}catch (e30464){var e = e30464;
var temp__5823__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword(null,"default","default",-1987822328),clazz);
if(or__5025__auto__){
return or__5025__auto__;
} else {
if((clazz instanceof sci.impl.types.NodeR)){
var c__5058__auto__ = sci.impl.types.eval(clazz,ctx,bindings);
var x__5059__auto__ = e;
return (x__5059__auto__ instanceof c__5058__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.evaluator","try-result","sci.impl.evaluator/try-result",-1394897780),(function (){
(bindings[new cljs.core.Keyword(null,"ex-idx","ex-idx",795118805).cljs$core$IFn$_invoke$arity$1(c)] = e);

return sci.impl.types.eval(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c),ctx,bindings);
})()
], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__30467 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30467,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30467,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
}finally {sci.impl.types.eval(finally$,ctx,bindings);
}});
sci.impl.evaluator.allowed_instance_method_invocation = (function sci$impl$evaluator$allowed_instance_method_invocation(ctx,bindings,instance_expr,method_str,args,arg_count){
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
return sci.impl.interop.invoke_instance_method(ctx,bindings,instance_expr_STAR_,null,method_str,args,arg_count);
});
sci.impl.evaluator.allowed_instance_field_invocation = (function sci$impl$evaluator$allowed_instance_field_invocation(ctx,bindings,instance_expr,method_str){
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,null,method_str);
});
sci.impl.evaluator.none_sentinel = (new Object());
sci.impl.evaluator.get_from_type = (function sci$impl$evaluator$get_from_type(instance,method_str,args){
if((args.length === (0))){
if((instance instanceof sci.impl.records.SciRecord)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(instance,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_str),sci.impl.evaluator.none_sentinel);
} else {
if((instance instanceof sci.impl.deftype.SciType)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(instance.sci$impl$types$IBox$getVal$arity$1(null),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(method_str),sci.impl.evaluator.none_sentinel);
} else {
return sci.impl.evaluator.none_sentinel;
}
}
} else {
return sci.impl.evaluator.none_sentinel;
}
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,field_access,args,allowed,arg_count){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = sci.impl.types.eval(instance_expr,ctx,bindings);
var v = sci.impl.evaluator.get_from_type(instance_expr_STAR_,method_str,args);
if((!((sci.impl.evaluator.none_sentinel === v)))){
return v;
} else {
var instance_class = (function (){var or__5025__auto__ = tag_class;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var env = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var class__GT_opts = new cljs.core.Keyword(null,"class->opts","class->opts",2061906477).cljs$core$IFn$_invoke$arity$1(env);
var allowed_QMARK_ = (function (){var or__5025__auto__ = allowed;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(allowed_QMARK_)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

if(cljs.core.truth_(field_access)){
return sci.impl.interop.invoke_instance_field(instance_expr_STAR_,target_class,method_str);
} else {
return sci.impl.interop.invoke_instance_method(ctx,bindings,instance_expr_STAR_,target_class,method_str,args,arg_count);
}
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__30479 = arguments.length;
switch (G__30479) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4(ctx,bindings,null,sym);
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(((cljs.core.not(env)) || ((!(cljs.core.contains_QMARK_(env,sym)))))){
var sym__$1 = sci.impl.types.eval(sym,ctx,bindings);
var res = cljs.core.second((function (){var fexpr__30487 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__30487.cljs$core$IFn$_invoke$arity$3 ? fexpr__30487.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__30487.call(null,ctx,sym__$1,false));
})());
if((res instanceof sci.impl.types.NodeR)){
return null;
} else {
return res;
}
} else {
return null;
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30750 = arguments.length;
var i__5750__auto___30751 = (0);
while(true){
if((i__5750__auto___30751 < len__5749__auto___30750)){
args__5755__auto__.push((arguments[i__5750__auto___30751]));

var G__30752 = (i__5750__auto___30751 + (1));
i__5750__auto___30751 = G__30752;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30488_SHARP_){
if(((cljs.core.seq_QMARK_(p1__30488_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__30488_SHARP_))))){
return cljs.core.second(p1__30488_SHARP_);
} else {
return p1__30488_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__30496 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30496,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5823__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5823__auto__)){
var clazz = temp__5823__auto__;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name);

return clazz;
} else {
var temp__5823__auto____$1 = (function (){var rec_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.demunge(cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$)));
var rec_var = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),rec_ns,class$], null));
return rec_var;
})();
if(cljs.core.truth_(temp__5823__auto____$1)){
var rec_var = temp__5823__auto____$1;
var cnn = sci.impl.utils.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refers","refers",158076809),class$], null),rec_var);

return cljs.core.deref(rec_var);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq30489){
var G__30490 = cljs.core.first(seq30489);
var seq30489__$1 = cljs.core.next(seq30489);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30490,seq30489__$1);
}));

sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__30710 = cljs.core.count(args);
switch (G__30710) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg30513 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg30513) : f.call(null,arg30513));

break;
case (2):
var arg30514 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30515 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg30514,arg30515) : f.call(null,arg30514,arg30515));

break;
case (3):
var arg30516 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30517 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30518 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg30516,arg30517,arg30518) : f.call(null,arg30516,arg30517,arg30518));

break;
case (4):
var arg30519 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30520 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30521 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30522 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg30519,arg30520,arg30521,arg30522) : f.call(null,arg30519,arg30520,arg30521,arg30522));

break;
case (5):
var arg30523 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30524 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30525 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30526 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30527 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg30523,arg30524,arg30525,arg30526,arg30527) : f.call(null,arg30523,arg30524,arg30525,arg30526,arg30527));

break;
case (6):
var arg30528 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30529 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30530 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30531 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30532 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30533 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg30528,arg30529,arg30530,arg30531,arg30532,arg30533) : f.call(null,arg30528,arg30529,arg30530,arg30531,arg30532,arg30533));

break;
case (7):
var arg30534 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30535 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30536 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30537 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30538 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30539 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30540 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg30534,arg30535,arg30536,arg30537,arg30538,arg30539,arg30540) : f.call(null,arg30534,arg30535,arg30536,arg30537,arg30538,arg30539,arg30540));

break;
case (8):
var arg30541 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30542 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30543 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30544 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30545 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30546 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30547 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30548 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg30541,arg30542,arg30543,arg30544,arg30545,arg30546,arg30547,arg30548) : f.call(null,arg30541,arg30542,arg30543,arg30544,arg30545,arg30546,arg30547,arg30548));

break;
case (9):
var arg30549 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30550 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30551 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30552 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30553 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30554 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30555 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30556 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30557 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg30549,arg30550,arg30551,arg30552,arg30553,arg30554,arg30555,arg30556,arg30557) : f.call(null,arg30549,arg30550,arg30551,arg30552,arg30553,arg30554,arg30555,arg30556,arg30557));

break;
case (10):
var arg30558 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30559 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30560 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30561 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30562 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30563 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30564 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30565 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30566 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30567 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg30558,arg30559,arg30560,arg30561,arg30562,arg30563,arg30564,arg30565,arg30566,arg30567) : f.call(null,arg30558,arg30559,arg30560,arg30561,arg30562,arg30563,arg30564,arg30565,arg30566,arg30567));

break;
case (11):
var arg30568 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30569 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30570 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30571 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30572 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30573 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30574 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30575 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30576 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30577 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30578 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg30568,arg30569,arg30570,arg30571,arg30572,arg30573,arg30574,arg30575,arg30576,arg30577,arg30578) : f.call(null,arg30568,arg30569,arg30570,arg30571,arg30572,arg30573,arg30574,arg30575,arg30576,arg30577,arg30578));

break;
case (12):
var arg30579 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30580 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30581 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30582 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30583 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30584 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30585 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30586 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30587 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30588 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30589 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30590 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg30579,arg30580,arg30581,arg30582,arg30583,arg30584,arg30585,arg30586,arg30587,arg30588,arg30589,arg30590) : f.call(null,arg30579,arg30580,arg30581,arg30582,arg30583,arg30584,arg30585,arg30586,arg30587,arg30588,arg30589,arg30590));

break;
case (13):
var arg30591 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30592 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30593 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30594 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30595 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30596 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30597 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30598 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30599 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30600 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30601 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30602 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30603 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg30591,arg30592,arg30593,arg30594,arg30595,arg30596,arg30597,arg30598,arg30599,arg30600,arg30601,arg30602,arg30603) : f.call(null,arg30591,arg30592,arg30593,arg30594,arg30595,arg30596,arg30597,arg30598,arg30599,arg30600,arg30601,arg30602,arg30603));

break;
case (14):
var arg30604 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30605 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30606 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30607 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30608 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30609 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30610 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30611 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30612 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30613 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30614 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30615 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30616 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30617 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg30604,arg30605,arg30606,arg30607,arg30608,arg30609,arg30610,arg30611,arg30612,arg30613,arg30614,arg30615,arg30616,arg30617) : f.call(null,arg30604,arg30605,arg30606,arg30607,arg30608,arg30609,arg30610,arg30611,arg30612,arg30613,arg30614,arg30615,arg30616,arg30617));

break;
case (15):
var arg30618 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30619 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30620 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30621 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30622 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30623 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30624 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30625 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30626 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30627 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30628 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30629 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30630 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30631 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30632 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg30618,arg30619,arg30620,arg30621,arg30622,arg30623,arg30624,arg30625,arg30626,arg30627,arg30628,arg30629,arg30630,arg30631,arg30632) : f.call(null,arg30618,arg30619,arg30620,arg30621,arg30622,arg30623,arg30624,arg30625,arg30626,arg30627,arg30628,arg30629,arg30630,arg30631,arg30632));

break;
case (16):
var arg30633 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30634 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30635 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30636 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30637 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30638 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30639 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30640 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30641 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30642 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30643 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30644 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30645 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30646 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30647 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30648 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg30633,arg30634,arg30635,arg30636,arg30637,arg30638,arg30639,arg30640,arg30641,arg30642,arg30643,arg30644,arg30645,arg30646,arg30647,arg30648) : f.call(null,arg30633,arg30634,arg30635,arg30636,arg30637,arg30638,arg30639,arg30640,arg30641,arg30642,arg30643,arg30644,arg30645,arg30646,arg30647,arg30648));

break;
case (17):
var arg30656 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30657 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30658 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30659 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30660 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30661 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30662 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30663 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30664 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30665 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30666 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30667 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30668 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30669 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30670 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30671 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg30672 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg30656,arg30657,arg30658,arg30659,arg30660,arg30661,arg30662,arg30663,arg30664,arg30665,arg30666,arg30667,arg30668,arg30669,arg30670,arg30671,arg30672) : f.call(null,arg30656,arg30657,arg30658,arg30659,arg30660,arg30661,arg30662,arg30663,arg30664,arg30665,arg30666,arg30667,arg30668,arg30669,arg30670,arg30671,arg30672));

break;
case (18):
var arg30673 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30674 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30675 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30676 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30677 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30678 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30679 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30680 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30681 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30682 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30683 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30684 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30685 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30686 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30687 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30688 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg30689 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg30690 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg30673,arg30674,arg30675,arg30676,arg30677,arg30678,arg30679,arg30680,arg30681,arg30682,arg30683,arg30684,arg30685,arg30686,arg30687,arg30688,arg30689,arg30690) : f.call(null,arg30673,arg30674,arg30675,arg30676,arg30677,arg30678,arg30679,arg30680,arg30681,arg30682,arg30683,arg30684,arg30685,arg30686,arg30687,arg30688,arg30689,arg30690));

break;
case (19):
var arg30691 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30692 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30693 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30694 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30695 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30696 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30697 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30698 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30699 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30700 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30701 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30702 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30703 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30704 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30705 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30706 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg30707 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg30708 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
var arg30709 = sci.impl.types.eval(cljs.core.first(args__$18),ctx,bindings);
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg30691,arg30692,arg30693,arg30694,arg30695,arg30696,arg30697,arg30698,arg30699,arg30700,arg30701,arg30702,arg30703,arg30704,arg30705,arg30706,arg30707,arg30708,arg30709) : f.call(null,arg30691,arg30692,arg30693,arg30694,arg30695,arg30696,arg30697,arg30698,arg30699,arg30700,arg30701,arg30702,arg30703,arg30704,arg30705,arg30706,arg30707,arg30708,arg30709));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30209_SHARP_){
return sci.impl.types.eval(p1__30209_SHARP_,ctx,bindings);
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});

//# sourceMappingURL=sci.impl.evaluator.js.map
