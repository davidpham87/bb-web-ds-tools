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
var v = (((sci.impl.utils.var_unbound === init__$1))?(function (){var G__30634 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30634,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__30634;
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
var G__30636 = arguments.length;
switch (G__30636) {
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
try{var _STAR_in_try_STAR__orig_val__30648 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__30649 = (function (){var or__5025__auto__ = (cljs.core.truth_(sci_error)?new cljs.core.Keyword("sci","error","sci/error",-979082803):null);
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
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__30649);

try{return sci.impl.types.eval(body,ctx,bindings);
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__30648);
}}catch (e30638){var e = e30638;
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
var vec__30645 = temp__5823__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645,(1),null);
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
var G__30654 = arguments.length;
switch (G__30654) {
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
var res = cljs.core.second((function (){var fexpr__30657 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__30657.cljs$core$IFn$_invoke$arity$3 ? fexpr__30657.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__30657.call(null,ctx,sym__$1,false));
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
var len__5749__auto___30926 = arguments.length;
var i__5750__auto___30927 = (0);
while(true){
if((i__5750__auto___30927 < len__5749__auto___30926)){
args__5755__auto__.push((arguments[i__5750__auto___30927]));

var G__30947 = (i__5750__auto___30927 + (1));
i__5750__auto___30927 = G__30947;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30660_SHARP_){
if(((cljs.core.seq_QMARK_(p1__30660_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__30660_SHARP_))))){
return cljs.core.second(p1__30660_SHARP_);
} else {
return p1__30660_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__30663 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30663,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30663,(1),null);
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
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq30661){
var G__30662 = cljs.core.first(seq30661);
var seq30661__$1 = cljs.core.next(seq30661);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30662,seq30661__$1);
}));

sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__30862 = cljs.core.count(args);
switch (G__30862) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg30670 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg30670) : f.call(null,arg30670));

break;
case (2):
var arg30671 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30672 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg30671,arg30672) : f.call(null,arg30671,arg30672));

break;
case (3):
var arg30673 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30674 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30675 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg30673,arg30674,arg30675) : f.call(null,arg30673,arg30674,arg30675));

break;
case (4):
var arg30676 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30677 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30678 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30679 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg30676,arg30677,arg30678,arg30679) : f.call(null,arg30676,arg30677,arg30678,arg30679));

break;
case (5):
var arg30680 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30681 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30682 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30683 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30684 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg30680,arg30681,arg30682,arg30683,arg30684) : f.call(null,arg30680,arg30681,arg30682,arg30683,arg30684));

break;
case (6):
var arg30685 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30686 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30687 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30688 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30689 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30690 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg30685,arg30686,arg30687,arg30688,arg30689,arg30690) : f.call(null,arg30685,arg30686,arg30687,arg30688,arg30689,arg30690));

break;
case (7):
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
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg30691,arg30692,arg30693,arg30694,arg30695,arg30696,arg30697) : f.call(null,arg30691,arg30692,arg30693,arg30694,arg30695,arg30696,arg30697));

break;
case (8):
var arg30698 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30699 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30700 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30701 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30702 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30703 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30704 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30705 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg30698,arg30699,arg30700,arg30701,arg30702,arg30703,arg30704,arg30705) : f.call(null,arg30698,arg30699,arg30700,arg30701,arg30702,arg30703,arg30704,arg30705));

break;
case (9):
var arg30706 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30707 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30708 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30709 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30710 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30711 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30712 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30713 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30714 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg30706,arg30707,arg30708,arg30709,arg30710,arg30711,arg30712,arg30713,arg30714) : f.call(null,arg30706,arg30707,arg30708,arg30709,arg30710,arg30711,arg30712,arg30713,arg30714));

break;
case (10):
var arg30716 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30717 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30718 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30719 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30720 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30721 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30722 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30723 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30724 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30725 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg30716,arg30717,arg30718,arg30719,arg30720,arg30721,arg30722,arg30723,arg30724,arg30725) : f.call(null,arg30716,arg30717,arg30718,arg30719,arg30720,arg30721,arg30722,arg30723,arg30724,arg30725));

break;
case (11):
var arg30726 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30727 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30728 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30729 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30730 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30731 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30732 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30733 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30734 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30735 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30736 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg30726,arg30727,arg30728,arg30729,arg30730,arg30731,arg30732,arg30733,arg30734,arg30735,arg30736) : f.call(null,arg30726,arg30727,arg30728,arg30729,arg30730,arg30731,arg30732,arg30733,arg30734,arg30735,arg30736));

break;
case (12):
var arg30737 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30738 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30739 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30740 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30741 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30742 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30743 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30744 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30745 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30746 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30747 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30748 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg30737,arg30738,arg30739,arg30740,arg30741,arg30742,arg30743,arg30744,arg30745,arg30746,arg30747,arg30748) : f.call(null,arg30737,arg30738,arg30739,arg30740,arg30741,arg30742,arg30743,arg30744,arg30745,arg30746,arg30747,arg30748));

break;
case (13):
var arg30750 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30751 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30752 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30753 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30754 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30755 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30756 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30757 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30758 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30759 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30760 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30761 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30762 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg30750,arg30751,arg30752,arg30753,arg30754,arg30755,arg30756,arg30757,arg30758,arg30759,arg30760,arg30761,arg30762) : f.call(null,arg30750,arg30751,arg30752,arg30753,arg30754,arg30755,arg30756,arg30757,arg30758,arg30759,arg30760,arg30761,arg30762));

break;
case (14):
var arg30763 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30764 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30765 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30766 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30767 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30768 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30769 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30770 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30771 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30772 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30773 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30774 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30775 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30776 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg30763,arg30764,arg30765,arg30766,arg30767,arg30768,arg30769,arg30770,arg30771,arg30772,arg30773,arg30774,arg30775,arg30776) : f.call(null,arg30763,arg30764,arg30765,arg30766,arg30767,arg30768,arg30769,arg30770,arg30771,arg30772,arg30773,arg30774,arg30775,arg30776));

break;
case (15):
var arg30777 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30778 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30779 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30780 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30781 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30782 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30783 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30784 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30785 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30786 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30787 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30788 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30789 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30790 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30791 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg30777,arg30778,arg30779,arg30780,arg30781,arg30782,arg30783,arg30784,arg30785,arg30786,arg30787,arg30788,arg30789,arg30790,arg30791) : f.call(null,arg30777,arg30778,arg30779,arg30780,arg30781,arg30782,arg30783,arg30784,arg30785,arg30786,arg30787,arg30788,arg30789,arg30790,arg30791));

break;
case (16):
var arg30792 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30793 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30794 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30795 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30796 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30797 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30798 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30799 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30800 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30801 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30802 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30803 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30804 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30805 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30806 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30807 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg30792,arg30793,arg30794,arg30795,arg30796,arg30797,arg30798,arg30799,arg30800,arg30801,arg30802,arg30803,arg30804,arg30805,arg30806,arg30807) : f.call(null,arg30792,arg30793,arg30794,arg30795,arg30796,arg30797,arg30798,arg30799,arg30800,arg30801,arg30802,arg30803,arg30804,arg30805,arg30806,arg30807));

break;
case (17):
var arg30808 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30809 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30810 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30811 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30812 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30813 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30814 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30815 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30816 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30817 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30818 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30819 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30820 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30821 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30822 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30823 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg30824 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg30808,arg30809,arg30810,arg30811,arg30812,arg30813,arg30814,arg30815,arg30816,arg30817,arg30818,arg30819,arg30820,arg30821,arg30822,arg30823,arg30824) : f.call(null,arg30808,arg30809,arg30810,arg30811,arg30812,arg30813,arg30814,arg30815,arg30816,arg30817,arg30818,arg30819,arg30820,arg30821,arg30822,arg30823,arg30824));

break;
case (18):
var arg30825 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30826 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30827 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30828 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30829 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30830 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30831 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30832 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30833 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30834 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30835 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30836 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30837 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30838 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30839 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30840 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg30841 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg30842 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg30825,arg30826,arg30827,arg30828,arg30829,arg30830,arg30831,arg30832,arg30833,arg30834,arg30835,arg30836,arg30837,arg30838,arg30839,arg30840,arg30841,arg30842) : f.call(null,arg30825,arg30826,arg30827,arg30828,arg30829,arg30830,arg30831,arg30832,arg30833,arg30834,arg30835,arg30836,arg30837,arg30838,arg30839,arg30840,arg30841,arg30842));

break;
case (19):
var arg30843 = sci.impl.types.eval(cljs.core.first(args),ctx,bindings);
var args__$1 = cljs.core.rest(args);
var arg30844 = sci.impl.types.eval(cljs.core.first(args__$1),ctx,bindings);
var args__$2 = cljs.core.rest(args__$1);
var arg30845 = sci.impl.types.eval(cljs.core.first(args__$2),ctx,bindings);
var args__$3 = cljs.core.rest(args__$2);
var arg30846 = sci.impl.types.eval(cljs.core.first(args__$3),ctx,bindings);
var args__$4 = cljs.core.rest(args__$3);
var arg30847 = sci.impl.types.eval(cljs.core.first(args__$4),ctx,bindings);
var args__$5 = cljs.core.rest(args__$4);
var arg30848 = sci.impl.types.eval(cljs.core.first(args__$5),ctx,bindings);
var args__$6 = cljs.core.rest(args__$5);
var arg30849 = sci.impl.types.eval(cljs.core.first(args__$6),ctx,bindings);
var args__$7 = cljs.core.rest(args__$6);
var arg30850 = sci.impl.types.eval(cljs.core.first(args__$7),ctx,bindings);
var args__$8 = cljs.core.rest(args__$7);
var arg30851 = sci.impl.types.eval(cljs.core.first(args__$8),ctx,bindings);
var args__$9 = cljs.core.rest(args__$8);
var arg30852 = sci.impl.types.eval(cljs.core.first(args__$9),ctx,bindings);
var args__$10 = cljs.core.rest(args__$9);
var arg30853 = sci.impl.types.eval(cljs.core.first(args__$10),ctx,bindings);
var args__$11 = cljs.core.rest(args__$10);
var arg30854 = sci.impl.types.eval(cljs.core.first(args__$11),ctx,bindings);
var args__$12 = cljs.core.rest(args__$11);
var arg30855 = sci.impl.types.eval(cljs.core.first(args__$12),ctx,bindings);
var args__$13 = cljs.core.rest(args__$12);
var arg30856 = sci.impl.types.eval(cljs.core.first(args__$13),ctx,bindings);
var args__$14 = cljs.core.rest(args__$13);
var arg30857 = sci.impl.types.eval(cljs.core.first(args__$14),ctx,bindings);
var args__$15 = cljs.core.rest(args__$14);
var arg30858 = sci.impl.types.eval(cljs.core.first(args__$15),ctx,bindings);
var args__$16 = cljs.core.rest(args__$15);
var arg30859 = sci.impl.types.eval(cljs.core.first(args__$16),ctx,bindings);
var args__$17 = cljs.core.rest(args__$16);
var arg30860 = sci.impl.types.eval(cljs.core.first(args__$17),ctx,bindings);
var args__$18 = cljs.core.rest(args__$17);
var arg30861 = sci.impl.types.eval(cljs.core.first(args__$18),ctx,bindings);
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg30843,arg30844,arg30845,arg30846,arg30847,arg30848,arg30849,arg30850,arg30851,arg30852,arg30853,arg30854,arg30855,arg30856,arg30857,arg30858,arg30859,arg30860,arg30861) : f.call(null,arg30843,arg30844,arg30845,arg30846,arg30847,arg30848,arg30849,arg30850,arg30851,arg30852,arg30853,arg30854,arg30855,arg30856,arg30857,arg30858,arg30859,arg30860,arg30861));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30391_SHARP_){
return sci.impl.types.eval(p1__30391_SHARP_,ctx,bindings);
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});

//# sourceMappingURL=sci.impl.evaluator.js.map
