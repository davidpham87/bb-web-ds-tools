var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.registry.js");
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("malli.provider.js");

goog.provide('malli.provider');
malli.provider._preferences = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(cljs.core.reverse(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null)], null)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$0())),new cljs.core.Symbol(null,"any?","any?",-318999933,null),(-14),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"some?","some?",234752293,null),(-13),new cljs.core.Keyword(null,"or","or",235744169),(-12),new cljs.core.Keyword(null,"and","and",-971899817),(-11),new cljs.core.Keyword(null,"any","any",1705907423),(-10),new cljs.core.Keyword(null,"some","some",-1951079573),(-9)], 0));
malli.provider._safe_QMARK_ = (function malli$provider$_safe_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32778 = arguments.length;
var i__5750__auto___32779 = (0);
while(true){
if((i__5750__auto___32779 < len__5749__auto___32778)){
args__5755__auto__.push((arguments[i__5750__auto___32779]));

var G__32781 = (i__5750__auto___32779 + (1));
i__5750__auto___32779 = G__32781;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e32485){if((e32485 instanceof Error)){
var _ = e32485;
return false;
} else {
throw e32485;

}
}}));

(malli.provider._safe_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(malli.provider._safe_QMARK_.cljs$lang$applyTo = (function (seq32473){
var G__32474 = cljs.core.first(seq32473);
var seq32473__$1 = cljs.core.next(seq32473);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32474,seq32473__$1);
}));


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
malli.provider.Hinted = (function (value,hint,__meta,__extmap,__hash){
this.value = value;
this.hint = hint;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(malli.provider.Hinted.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(malli.provider.Hinted.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k32495,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__32506 = k32495;
var G__32506__$1 = (((G__32506 instanceof cljs.core.Keyword))?G__32506.fqn:null);
switch (G__32506__$1) {
case "value":
return self__.value;

break;
case "hint":
return self__.hint;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32495,else__5326__auto__);

}
}));

(malli.provider.Hinted.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__32509){
var vec__32510 = p__32509;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32510,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32510,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(malli.provider.Hinted.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#malli.provider.Hinted{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hint","hint",439639918),self__.hint],null))], null),self__.__extmap));
}));

(malli.provider.Hinted.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32494){
var self__ = this;
var G__32494__$1 = this;
return (new cljs.core.RecordIter((0),G__32494__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hint","hint",439639918)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(malli.provider.Hinted.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(malli.provider.Hinted.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new malli.provider.Hinted(self__.value,self__.hint,self__.__meta,self__.__extmap,self__.__hash));
}));

(malli.provider.Hinted.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(malli.provider.Hinted.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1623670857 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(malli.provider.Hinted.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32496,other32497){
var self__ = this;
var this32496__$1 = this;
return (((!((other32497 == null)))) && ((((this32496__$1.constructor === other32497.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32496__$1.value,other32497.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32496__$1.hint,other32497.hint)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32496__$1.__extmap,other32497.__extmap)))))))));
}));

(malli.provider.Hinted.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"hint","hint",439639918),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new malli.provider.Hinted(self__.value,self__.hint,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(malli.provider.Hinted.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k32495){
var self__ = this;
var this__5330__auto____$1 = this;
var G__32548 = k32495;
var G__32548__$1 = (((G__32548 instanceof cljs.core.Keyword))?G__32548.fqn:null);
switch (G__32548__$1) {
case "value":
case "hint":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32495);

}
}));

(malli.provider.Hinted.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__32494){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__32550 = cljs.core.keyword_identical_QMARK_;
var expr__32551 = k__5332__auto__;
if(cljs.core.truth_((pred__32550.cljs$core$IFn$_invoke$arity$2 ? pred__32550.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__32551) : pred__32550.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__32551)))){
return (new malli.provider.Hinted(G__32494,self__.hint,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32550.cljs$core$IFn$_invoke$arity$2 ? pred__32550.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hint","hint",439639918),expr__32551) : pred__32550.call(null,new cljs.core.Keyword(null,"hint","hint",439639918),expr__32551)))){
return (new malli.provider.Hinted(self__.value,G__32494,self__.__meta,self__.__extmap,null));
} else {
return (new malli.provider.Hinted(self__.value,self__.hint,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__32494),null));
}
}
}));

(malli.provider.Hinted.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hint","hint",439639918),self__.hint,null))], null),self__.__extmap));
}));

(malli.provider.Hinted.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__32494){
var self__ = this;
var this__5322__auto____$1 = this;
return (new malli.provider.Hinted(self__.value,self__.hint,G__32494,self__.__extmap,self__.__hash));
}));

(malli.provider.Hinted.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(malli.provider.Hinted.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"hint","hint",2080171445,null)], null);
}));

(malli.provider.Hinted.cljs$lang$type = true);

(malli.provider.Hinted.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"malli.provider/Hinted",null,(1),null));
}));

(malli.provider.Hinted.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"malli.provider/Hinted");
}));

/**
 * Positional factory function for malli.provider/Hinted.
 */
malli.provider.__GT_Hinted = (function malli$provider$__GT_Hinted(value,hint){
return (new malli.provider.Hinted(value,hint,null,null,null));
});

/**
 * Factory function for malli.provider/Hinted, taking a map of keywords to field values.
 */
malli.provider.map__GT_Hinted = (function malli$provider$map__GT_Hinted(G__32498){
var extmap__5365__auto__ = (function (){var G__32569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32498,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918)], 0));
if(cljs.core.record_QMARK_(G__32498)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32569);
} else {
return G__32569;
}
})();
return (new malli.provider.Hinted(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__32498),new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(G__32498),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

malli.provider._hinted = (function malli$provider$_hinted(x,hint){
return malli.provider.__GT_Hinted(x,hint);
});
malli.provider._value_hint = (function malli$provider$_value_hint(x){
if((x instanceof malli.provider.Hinted)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.value,x.hint], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(function (){var G__32587 = x;
var G__32587__$1 = (((G__32587 == null))?null:cljs.core.meta(G__32587));
if((G__32587__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("malli.provider","hint","malli.provider/hint",1344617496).cljs$core$IFn$_invoke$arity$1(G__32587__$1);
}
})()], null);
}
});
malli.provider._inferrer = (function malli$provider$_inferrer(options){
var schemas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32589_SHARP_){
return malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic(malli.core.schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__32589_SHARP_], 0));
}),cljs.core.vals(malli.registry._schemas(malli.core._registry.cljs$core$IFn$_invoke$arity$1(options))));
var form__GT_validator = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(malli.core.form,malli.core.validator),schemas));
var infer_value = (function (x){
return cljs.core.reduce_kv((function (acc,f,v){
var G__32603 = acc;
if(cljs.core.truth_(malli.provider._safe_QMARK_.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32603,f,(1));
} else {
return G__32603;
}
}),cljs.core.PersistentArrayMap.EMPTY,form__GT_validator);
});
var entry_inferrer = (function (infer){
return (function (acc,k,v){
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(acc,new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.update,k,infer,v);
});
});
var infer_map = (function (infer){
return (function (acc,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce_kv(entry_inferrer(infer),acc,x),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
});
});
var infer_seq = (function (infer){
return (function (acc,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,acc,x),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),x);
});
});
var merge_PLUS_ = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__32590_SHARP_,p2__32591_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__32590_SHARP_,p2__32591_SHARP_], 0));
}),cljs.core.PersistentArrayMap.EMPTY);
return (function malli$provider$_inferrer_$_infer(acc,x){
var vec__32612 = malli.provider._value_hint(x);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32612,(0),null);
var hint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32612,(1),null);
var type = (((x__$1 == null))?new cljs.core.Keyword(null,"nil","nil",99600501):((cljs.core.map_QMARK_(x__$1))?new cljs.core.Keyword(null,"map","map",1371690461):((cljs.core.set_QMARK_(x__$1))?new cljs.core.Keyword(null,"set","set",304602554):((cljs.core.vector_QMARK_(x__$1))?new cljs.core.Keyword(null,"vector","vector",1902966158):((cljs.core.sequential_QMARK_(x__$1))?new cljs.core.Keyword(null,"sequential","sequential",-1082983960):new cljs.core.Keyword(null,"value","value",305978217)
)))));
var __GT_type = (function (p1__32593_SHARP_){
var $ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__32593_SHARP_,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
var $__$1 = (function (){var G__32615 = $;
if(cljs.core.truth_(hint)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__32615,new cljs.core.Keyword(null,"hints","hints",-991113151),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),hint);
} else {
return G__32615;
}
})();
var G__32617 = type;
var G__32617__$1 = (((G__32617 instanceof cljs.core.Keyword))?G__32617.fqn:null);
switch (G__32617__$1) {
case "value":
case "nil":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$1,new cljs.core.Keyword(null,"values","values",372645556),merge_PLUS_,cljs.core.PersistentArrayMap.createAsIfByAssoc([x__$1,(1)])),new cljs.core.Keyword(null,"schemas","schemas",575070579),merge_PLUS_,infer_value(x__$1));

break;
case "map":
return infer_map(malli$provider$_inferrer_$_infer)($__$1,x__$1);

break;
case "set":
case "vector":
case "sequential":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4($__$1,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(infer_seq(malli$provider$_inferrer_$_infer),cljs.core.PersistentArrayMap.EMPTY),x__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32617__$1)].join('')));

}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),new cljs.core.Keyword(null,"types","types",590030639),cljs.core.update,type,__GT_type);
});
});
malli.provider._value_schema = (function malli$provider$_value_schema(p__32631){
var map__32632 = p__32631;
var map__32632__$1 = cljs.core.__destructure_map(map__32632);
var stats = map__32632__$1;
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32632__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var hints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32632__$1,new cljs.core.Keyword(null,"hints","hints",-991113151));
var or__5025__auto__ = (function (){var temp__5825__auto__ = (function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(hints));
if(and__5023__auto__){
return cljs.core.first(hints);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var hint = temp__5825__auto__;
var G__32635 = hint;
var G__32635__$1 = (((G__32635 instanceof cljs.core.Keyword))?G__32635.fqn:null);
switch (G__32635__$1) {
case "enum":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),cljs.core.keys(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(stats)));

break;
default:
return hint;

}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(schemas));
return cljs.core.ffirst(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32637){
var vec__32638 = p__32637;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32638,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(malli.provider._preferences.cljs$core$IFn$_invoke$arity$2 ? malli.provider._preferences.cljs$core$IFn$_invoke$arity$2(k,(-1)) : malli.provider._preferences.call(null,k,(-1)))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32620_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,cljs.core.val(p1__32620_SHARP_));
}),schemas))));
}
});
malli.provider._sequential_schema = (function malli$provider$_sequential_schema(p__32644,type,schema,p__32645){
var map__32646 = p__32644;
var map__32646__$1 = cljs.core.__destructure_map(map__32646);
var stats = map__32646__$1;
var tc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32646__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var map__32647 = p__32645;
var map__32647__$1 = cljs.core.__destructure_map(map__32647);
var options = map__32647__$1;
var infer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32647__$1,new cljs.core.Keyword("malli.provider","infer","malli.provider/infer",-1513557228));
var tuple_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32647__$1,new cljs.core.Keyword("malli.provider","tuple-threshold","malli.provider/tuple-threshold",-1099408553));
var vstats_STAR_ = (new cljs.core.Delay((function (){
var G__32651 = new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(stats);
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(G__32651) : type.call(null,G__32651));
}),null));
var data_STAR_ = (new cljs.core.Delay((function (){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vstats_STAR_)));
}),null));
var vs_STAR_ = (new cljs.core.Delay((function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32641_SHARP_){
var G__32652 = (function (){var G__32653 = cljs.core.PersistentArrayMap.EMPTY;
var G__32654 = p1__32641_SHARP_;
return (infer.cljs$core$IFn$_invoke$arity$2 ? infer.cljs$core$IFn$_invoke$arity$2(G__32653,G__32654) : infer.call(null,G__32653,G__32654));
})();
return (schema.cljs$core$IFn$_invoke$arity$1 ? schema.cljs$core$IFn$_invoke$arity$1(G__32652) : schema.call(null,G__32652));
}),x);
}),cljs.core.deref(data_STAR_));
}),null));
var tuple_QMARK__STAR_ = (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.deref(vs_STAR_)));
}),null));
var or__5025__auto__ = (function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vector","vector",1902966158),type);
if(and__5023__auto__){
var or__5025__auto__ = (cljs.core.truth_((function (){var and__5023__auto____$1 = (function (){var G__32656 = cljs.core.deref(vstats_STAR_);
var G__32656__$1 = (((G__32656 == null))?null:new cljs.core.Keyword(null,"hints","hints",-991113151).cljs$core$IFn$_invoke$arity$1(G__32656));
if((G__32656__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__32656__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),null], null), null));
}
})();
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.deref(tuple_QMARK__STAR_);
} else {
return and__5023__auto____$1;
}
})())?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32642_SHARP_){
var G__32657 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,p1__32642_SHARP_);
var G__32658 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__32657,G__32658) : schema.call(null,G__32657,G__32658));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.deref(data_STAR_)))):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (cljs.core.truth_((function (){var and__5023__auto____$1 = tuple_threshold;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tc,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vstats_STAR_)));
} else {
return and__5023__auto____$1;
}
})())?tuple_threshold:null);
if(cljs.core.truth_(temp__5825__auto__)){
var tuple_threshold__$1 = temp__5825__auto__;
if(cljs.core.truth_((function (){var and__5023__auto____$1 = (tc >= tuple_threshold__$1);
if(and__5023__auto____$1){
return cljs.core.deref(tuple_QMARK__STAR_);
} else {
return and__5023__auto____$1;
}
})())){
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.deref(vs_STAR_)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284)], null),cljs.core.first(cljs.core.deref(vs_STAR_)));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var G__32659 = new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(vstats_STAR_));
var G__32660 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__32659,G__32660) : schema.call(null,G__32659,G__32660));
})()], null);
}
});
malli.provider._map_of_accept = (function malli$provider$_map_of_accept(stats){
var ks = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(stats)], 0));
return (cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(ks)) > Math.pow(cljs.core.count(ks),0.7));
});
malli.provider._map_schema = (function malli$provider$_map_schema(p__32667,schema,p__32668){
var map__32673 = p__32667;
var map__32673__$1 = cljs.core.__destructure_map(map__32673);
var stats = map__32673__$1;
var tc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32673__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var map__32674 = p__32668;
var map__32674__$1 = cljs.core.__destructure_map(map__32674);
var options = map__32674__$1;
var infer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32674__$1,new cljs.core.Keyword("malli.provider","infer","malli.provider/infer",-1513557228));
var map_of_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32674__$1,new cljs.core.Keyword("malli.provider","map-of-threshold","malli.provider/map-of-threshold",606404300));
var map_of_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32674__$1,new cljs.core.Keyword("malli.provider","map-of-accept","malli.provider/map-of-accept",1852032968),malli.provider._map_of_accept);
var entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32679){
var vec__32680 = p__32679;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32680,(0),null);
var vstats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32680,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"vs","vs",-2022097090),(schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(vstats,options) : schema.call(null,vstats,options)),new cljs.core.Keyword(null,"vc","vc",194349650),new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(vstats)], null);
}),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(stats));
var ks_STAR_ = (new cljs.core.Delay((function (){
var G__32684 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),entries));
var G__32685 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__32684,G__32685) : schema.call(null,G__32684,G__32685));
}),null));
var _QMARK_ks_STAR_ = (new cljs.core.Delay((function (){
var kss = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32663_SHARP_){
var G__32689 = (function (){var G__32691 = cljs.core.PersistentArrayMap.EMPTY;
var G__32692 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__32663_SHARP_);
return (infer.cljs$core$IFn$_invoke$arity$2 ? infer.cljs$core$IFn$_invoke$arity$2(G__32691,G__32692) : infer.call(null,G__32691,G__32692));
})();
var G__32690 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__32689,G__32690) : schema.call(null,G__32689,G__32690));
}),entries);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,kss))){
return cljs.core.first(kss);
} else {
return null;
}
}),null));
var vs_STAR_ = (new cljs.core.Delay((function (){
var G__32694 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vals,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(stats)], 0)));
var G__32695 = options;
return (schema.cljs$core$IFn$_invoke$arity$2 ? schema.cljs$core$IFn$_invoke$arity$2(G__32694,G__32695) : schema.call(null,G__32694,G__32695));
}),null));
var vss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vs","vs",-2022097090),entries);
var or__5025__auto__ = (cljs.core.truth_((function (){var G__32696 = stats;
var G__32696__$1 = (((G__32696 == null))?null:new cljs.core.Keyword(null,"hints","hints",-991113151).cljs$core$IFn$_invoke$arity$1(G__32696));
if((G__32696__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__32696__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),null], null), null));
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.deref(ks_STAR_),cljs.core.deref(vs_STAR_)], null):null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (cljs.core.truth_((function (){var and__5023__auto__ = (function (){var G__32700 = map_of_threshold;
if((G__32700 == null)){
return null;
} else {
return (tc >= G__32700);
}
})();
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.deref(_QMARK_ks_STAR_);
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,vss);
if(cljs.core.truth_(and__5023__auto____$2)){
return (map_of_accept.cljs$core$IFn$_invoke$arity$1 ? map_of_accept.cljs$core$IFn$_invoke$arity$1(stats) : map_of_accept.call(null,stats));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.deref(_QMARK_ks_STAR_),cljs.core.first(vss)], null):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32705){
var map__32706 = p__32705;
var map__32706__$1 = cljs.core.__destructure_map(map__32706);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32706__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var vs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32706__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var vc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32706__$1,new cljs.core.Keyword(null,"vc","vc",194349650));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tc,vc)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),vs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,vs], null);
}
}),entries));
}
}
});
malli.provider._decoded = (function malli$provider$_decoded(p__32710,vp,t){
var map__32711 = p__32710;
var map__32711__$1 = cljs.core.__destructure_map(map__32711);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32711__$1,new cljs.core.Keyword(null,"values","values",372645556));
var vs = cljs.core.keys(values);
var _LT__LT_ = (function (f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,v){
var v_SINGLEQUOTE_ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
var or__5025__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,v_SINGLEQUOTE_);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.reduced(false);
}
}),false,vs);
});
return cljs.core.reduce_kv((function (acc,s,f){
if(cljs.core.truth_(_LT__LT_(f))){
return cljs.core.reduced(s);
} else {
return acc;
}
}),t,vp);
});
malli.provider._schema = (function malli$provider$_schema(var_args){
var G__32725 = arguments.length;
switch (G__32725) {
case 1:
return malli.provider._schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.provider._schema.cljs$core$IFn$_invoke$arity$1 = (function (stats){
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2(stats,null);
}));

(malli.provider._schema.cljs$core$IFn$_invoke$arity$2 = (function (p__32731,p__32732){
var map__32733 = p__32731;
var map__32733__$1 = cljs.core.__destructure_map(map__32733);
var stats = map__32733__$1;
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32733__$1,new cljs.core.Keyword(null,"types","types",590030639));
var map__32734 = p__32732;
var map__32734__$1 = cljs.core.__destructure_map(map__32734);
var options = map__32734__$1;
var value_decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32734__$1,new cljs.core.Keyword("malli.provider","value-decoders","malli.provider/value-decoders",-1333074129));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.keys(types)))){
var type = cljs.core.first(cljs.core.keys(types));
var G__32736 = type;
var G__32736__$1 = (((G__32736 instanceof cljs.core.Keyword))?G__32736.fqn:null);
switch (G__32736__$1) {
case "nil":
return new cljs.core.Keyword(null,"nil","nil",99600501);

break;
case "value":
var t = (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(types) : type.call(null,types));
var vs = malli.provider._value_schema(t);
var vp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(value_decoders,vs);
var G__32740 = vs;
if(cljs.core.truth_(vp)){
return malli.provider._decoded(t,vp,G__32740);
} else {
return G__32740;
}

break;
case "set":
case "vector":
case "sequential":
return malli.provider._sequential_schema(stats,type,malli.provider._schema,options);

break;
case "map":
return malli.provider._map_schema((type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(types) : type.call(null,types)),malli.provider._schema,options);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32736__$1)].join('')));

}
} else {
if((types == null)){
return new cljs.core.Keyword(null,"any","any",1705907423);
} else {
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32747){
var vec__32748 = p__32747;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32748,(0),null);
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$4(stats,new cljs.core.Keyword(null,"types","types",590030639),cljs.core.select_keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null)),options);
}),types);
var without_nils = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32723_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32723_SHARP_,new cljs.core.Keyword(null,"nil","nil",99600501));
}),children);
var vec__32743 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [children,without_nils], null));
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32743,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32743,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),c2)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560)], null),without_nils);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c1,c2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169)], null),without_nils)], null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169)], null),children);

}
}

}
}
}));

(malli.provider._schema.cljs$lang$maxFixedArity = 2);

/**
 * Returns a inferring function of `values -> schema`. Supports the following options:
 * 
 *   - `:malli.provider/tuple-threshold, how many identical value schemas need for :tuple
 *   - `:malli.provider/map-of-threshold, how many identical value schemas need for :map-of
 *   - `:malli.provider/map-of-accept, function of type `stats -> boolean` to identify :map-of
 *   - `:malli.provider/value-decoders, function of `type -> target-type -> value -> decoded-value`
 */
malli.provider.provider = (function malli$provider$provider(var_args){
var G__32758 = arguments.length;
switch (G__32758) {
case 0:
return malli.provider.provider.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.provider.provider.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.provider.provider.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.provider.provider.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.provider.provider.cljs$core$IFn$_invoke$arity$1 = (function (options){
var infer = malli.provider._inferrer(options);
return (function (xs){
return malli.provider._schema.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(infer,cljs.core.PersistentArrayMap.EMPTY,xs),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.provider","infer","malli.provider/infer",-1513557228),infer));
});
}));

(malli.provider.provider.cljs$lang$maxFixedArity = 1);

/**
 * Given an sequence of example values, returns a Schema that can all values are valid against.
 * For better performance, use [[provider]] instead. See [[provider]] for available options.
 */
malli.provider.provide = (function malli$provider$provide(var_args){
var G__32767 = arguments.length;
switch (G__32767) {
case 1:
return malli.provider.provide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.provider.provide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.provider.provide.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return malli.provider.provide.cljs$core$IFn$_invoke$arity$2(xs,null);
}));

(malli.provider.provide.cljs$core$IFn$_invoke$arity$2 = (function (xs,options){
return malli.provider.provider.cljs$core$IFn$_invoke$arity$1(options)(xs);
}));

(malli.provider.provide.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.provider.js.map
