var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./sci.impl.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("sci.impl.reify.js");

goog.provide('sci.impl.reify');
sci.impl.reify.reify = (function sci$impl$reify$reify(var_args){
var args__5755__auto__ = [];
var len__5749__auto___33346 = arguments.length;
var i__5750__auto___33347 = (0);
while(true){
if((i__5750__auto___33347 < len__5749__auto___33346)){
args__5755__auto__.push((arguments[i__5750__auto___33347]));

var G__33348 = (i__5750__auto___33347 + (1));
i__5750__auto___33347 = G__33348;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(sci.impl.reify.reify.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,_ctx,args){
var map__33330 = cljs.core.group_by(cljs.core.symbol_QMARK_,args);
var map__33330__$1 = cljs.core.__destructure_map(map__33330);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33330__$1,true);
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33330__$1,false);
var methods$__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33334){
var vec__33336 = p__33334;
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(0),null);
var bodies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(1),null);
var meth__$1 = ((cljs.core.simple_symbol_QMARK_(meth))?meth:cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(meth)));
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,meth__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,bodies)))),null,(1),null))))));
}),cljs.core.group_by(cljs.core.first,methods$)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify*","cljs.core/reify*",1256833160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(classes),null,(1),null)),(new cljs.core.List(null,methods$__$1,null,(1),null))], 0))));
}));

(sci.impl.reify.reify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.reify.reify.cljs$lang$applyTo = (function (seq33323){
var G__33324 = cljs.core.first(seq33323);
var seq33323__$1 = cljs.core.next(seq33323);
var G__33325 = cljs.core.first(seq33323__$1);
var seq33323__$2 = cljs.core.next(seq33323__$1);
var G__33326 = cljs.core.first(seq33323__$2);
var seq33323__$3 = cljs.core.next(seq33323__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33324,G__33325,G__33326,seq33323__$3);
}));

sci.impl.reify.reify_STAR_ = (function sci$impl$reify$reify_STAR_(_ctx,_form,classes,methods$){
return sci.impl.types.__GT_Reified(classes,methods$,cljs.core.set(classes));
});

//# sourceMappingURL=sci.impl.reify.js.map
