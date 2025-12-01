goog.provide('spec_tools.data_spec');

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
spec_tools.data_spec.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k50500,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__50505 = k50500;
var G__50505__$1 = (((G__50505 instanceof cljs.core.Keyword))?G__50505.fqn:null);
switch (G__50505__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50500,else__5326__auto__);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__50506){
var vec__50508 = p__50506;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50508,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#spec-tools.data-spec.OptionalKey{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50499){
var self__ = this;
var G__50499__$1 = this;
return (new cljs.core.RecordIter((0),G__50499__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-261180351 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50501,other50502){
var self__ = this;
var this50501__$1 = this;
return (((!((other50502 == null)))) && ((((this50501__$1.constructor === other50502.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50501__$1.k,other50502.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50501__$1.__extmap,other50502.__extmap)))))));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k50500){
var self__ = this;
var this__5330__auto____$1 = this;
var G__50515 = k50500;
var G__50515__$1 = (((G__50515 instanceof cljs.core.Keyword))?G__50515.fqn:null);
switch (G__50515__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50500);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__50499){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__50517 = cljs.core.keyword_identical_QMARK_;
var expr__50518 = k__5332__auto__;
if(cljs.core.truth_((pred__50517.cljs$core$IFn$_invoke$arity$2 ? pred__50517.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__50518) : pred__50517.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__50518)))){
return (new spec_tools.data_spec.OptionalKey(G__50499,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__50499),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__50499){
var self__ = this;
var this__5322__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,G__50499,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(spec_tools.data_spec.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$type = true);

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/OptionalKey",null,(1),null));
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"spec-tools.data-spec/OptionalKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/OptionalKey.
 */
spec_tools.data_spec.__GT_OptionalKey = (function spec_tools$data_spec$__GT_OptionalKey(k){
return (new spec_tools.data_spec.OptionalKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/OptionalKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_OptionalKey = (function spec_tools$data_spec$map__GT_OptionalKey(G__50503){
var extmap__5365__auto__ = (function (){var G__50536 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50503,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__50503)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50536);
} else {
return G__50536;
}
})();
return (new spec_tools.data_spec.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__50503),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
spec_tools.data_spec.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k50542,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__50562 = k50542;
var G__50562__$1 = (((G__50562 instanceof cljs.core.Keyword))?G__50562.fqn:null);
switch (G__50562__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50542,else__5326__auto__);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__50570){
var vec__50571 = p__50570;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50571,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50571,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#spec-tools.data-spec.RequiredKey{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50541){
var self__ = this;
var G__50541__$1 = this;
return (new cljs.core.RecordIter((0),G__50541__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-470971127 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50547,other50548){
var self__ = this;
var this50547__$1 = this;
return (((!((other50548 == null)))) && ((((this50547__$1.constructor === other50548.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50547__$1.k,other50548.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50547__$1.__extmap,other50548.__extmap)))))));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k50542){
var self__ = this;
var this__5330__auto____$1 = this;
var G__50583 = k50542;
var G__50583__$1 = (((G__50583 instanceof cljs.core.Keyword))?G__50583.fqn:null);
switch (G__50583__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50542);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__50541){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__50585 = cljs.core.keyword_identical_QMARK_;
var expr__50586 = k__5332__auto__;
if(cljs.core.truth_((pred__50585.cljs$core$IFn$_invoke$arity$2 ? pred__50585.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__50586) : pred__50585.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__50586)))){
return (new spec_tools.data_spec.RequiredKey(G__50541,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__50541),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__50541){
var self__ = this;
var this__5322__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,G__50541,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(spec_tools.data_spec.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$type = true);

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/RequiredKey",null,(1),null));
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"spec-tools.data-spec/RequiredKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/RequiredKey.
 */
spec_tools.data_spec.__GT_RequiredKey = (function spec_tools$data_spec$__GT_RequiredKey(k){
return (new spec_tools.data_spec.RequiredKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/RequiredKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_RequiredKey = (function spec_tools$data_spec$map__GT_RequiredKey(G__50549){
var extmap__5365__auto__ = (function (){var G__50593 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50549,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__50549)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50593);
} else {
return G__50593;
}
})();
return (new spec_tools.data_spec.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__50549),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
spec_tools.data_spec.Maybe = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k50595,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__50611 = k50595;
var G__50611__$1 = (((G__50611 instanceof cljs.core.Keyword))?G__50611.fqn:null);
switch (G__50611__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50595,else__5326__auto__);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__50613){
var vec__50614 = p__50613;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50614,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#spec-tools.data-spec.Maybe{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50594){
var self__ = this;
var G__50594__$1 = this;
return (new cljs.core.RecordIter((0),G__50594__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1150224619 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50596,other50597){
var self__ = this;
var this50596__$1 = this;
return (((!((other50597 == null)))) && ((((this50596__$1.constructor === other50597.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50596__$1.v,other50597.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50596__$1.__extmap,other50597.__extmap)))))));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k50595){
var self__ = this;
var this__5330__auto____$1 = this;
var G__50630 = k50595;
var G__50630__$1 = (((G__50630 instanceof cljs.core.Keyword))?G__50630.fqn:null);
switch (G__50630__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50595);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__50594){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__50639 = cljs.core.keyword_identical_QMARK_;
var expr__50640 = k__5332__auto__;
if(cljs.core.truth_((pred__50639.cljs$core$IFn$_invoke$arity$2 ? pred__50639.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__50640) : pred__50639.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__50640)))){
return (new spec_tools.data_spec.Maybe(G__50594,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__50594),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__50594){
var self__ = this;
var this__5322__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,G__50594,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(spec_tools.data_spec.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Maybe.cljs$lang$type = true);

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Maybe",null,(1),null));
}));

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"spec-tools.data-spec/Maybe");
}));

/**
 * Positional factory function for spec-tools.data-spec/Maybe.
 */
spec_tools.data_spec.__GT_Maybe = (function spec_tools$data_spec$__GT_Maybe(v){
return (new spec_tools.data_spec.Maybe(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Maybe, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Maybe = (function spec_tools$data_spec$map__GT_Maybe(G__50602){
var extmap__5365__auto__ = (function (){var G__50661 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50602,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__50602)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50661);
} else {
return G__50661;
}
})();
return (new spec_tools.data_spec.Maybe(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__50602),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
spec_tools.data_spec.Or = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k50667,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__50687 = k50667;
var G__50687__$1 = (((G__50687 instanceof cljs.core.Keyword))?G__50687.fqn:null);
switch (G__50687__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50667,else__5326__auto__);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__50692){
var vec__50693 = p__50692;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50693,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50693,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#spec-tools.data-spec.Or{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50666){
var self__ = this;
var G__50666__$1 = this;
return (new cljs.core.RecordIter((0),G__50666__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1620079539 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50668,other50669){
var self__ = this;
var this50668__$1 = this;
return (((!((other50669 == null)))) && ((((this50668__$1.constructor === other50669.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50668__$1.v,other50669.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50668__$1.__extmap,other50669.__extmap)))))));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k50667){
var self__ = this;
var this__5330__auto____$1 = this;
var G__50728 = k50667;
var G__50728__$1 = (((G__50728 instanceof cljs.core.Keyword))?G__50728.fqn:null);
switch (G__50728__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50667);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__50666){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__50729 = cljs.core.keyword_identical_QMARK_;
var expr__50730 = k__5332__auto__;
if(cljs.core.truth_((pred__50729.cljs$core$IFn$_invoke$arity$2 ? pred__50729.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__50730) : pred__50729.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__50730)))){
return (new spec_tools.data_spec.Or(G__50666,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__50666),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__50666){
var self__ = this;
var this__5322__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,G__50666,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(spec_tools.data_spec.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Or.cljs$lang$type = true);

(spec_tools.data_spec.Or.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Or",null,(1),null));
}));

(spec_tools.data_spec.Or.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"spec-tools.data-spec/Or");
}));

/**
 * Positional factory function for spec-tools.data-spec/Or.
 */
spec_tools.data_spec.__GT_Or = (function spec_tools$data_spec$__GT_Or(v){
return (new spec_tools.data_spec.Or(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Or, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Or = (function spec_tools$data_spec$map__GT_Or(G__50671){
var extmap__5365__auto__ = (function (){var G__50733 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50671,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__50671)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50733);
} else {
return G__50733;
}
})();
return (new spec_tools.data_spec.Or(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__50671),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

/**
 * Makes a key optional:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/opt :age) int?}
 *   ```
 */
spec_tools.data_spec.opt = (function spec_tools$data_spec$opt(k){
return spec_tools.data_spec.__GT_OptionalKey(k);
});
/**
 * Test if the key is wrapped with [[opt]]
 */
spec_tools.data_spec.opt_QMARK_ = (function spec_tools$data_spec$opt_QMARK_(x){
return (x instanceof spec_tools.data_spec.OptionalKey);
});
/**
 * Makes a key required:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/req :age) int?}
 *   ```
 */
spec_tools.data_spec.req = (function spec_tools$data_spec$req(k){
return spec_tools.data_spec.__GT_RequiredKey(k);
});
/**
 * Test if the key is wrapped with [[req]]
 */
spec_tools.data_spec.req_QMARK_ = (function spec_tools$data_spec$req_QMARK_(x){
return (!(spec_tools.data_spec.opt_QMARK_(x)));
});
/**
 * Makes a value nillable:
 * 
 *   ```clojure
 *   {:name string?
 * :age (ds/maybe int?)}
 *   ```
 */
spec_tools.data_spec.maybe = (function spec_tools$data_spec$maybe(v){
return spec_tools.data_spec.__GT_Maybe(v);
});
/**
 * Test if the value is wrapped with [[maybe]]
 */
spec_tools.data_spec.maybe_QMARK_ = (function spec_tools$data_spec$maybe_QMARK_(x){
return (x instanceof spec_tools.data_spec.Maybe);
});
spec_tools.data_spec.or = (function spec_tools$data_spec$or(v){
return spec_tools.data_spec.__GT_Or(v);
});
spec_tools.data_spec.or_QMARK_ = (function spec_tools$data_spec$or_QMARK_(x){
return (x instanceof spec_tools.data_spec.Or);
});
/**
 * Test if the key is wrapped with [[opt]] or [[req]]
 */
spec_tools.data_spec.wrapped_key_QMARK_ = (function spec_tools$data_spec$wrapped_key_QMARK_(x){
return ((spec_tools.data_spec.opt_QMARK_(x)) || ((x instanceof spec_tools.data_spec.RequiredKey)));
});
/**
 * Unwrap the [[opt]] or [[req]] key.
 */
spec_tools.data_spec.unwrap_key = (function spec_tools$data_spec$unwrap_key(x){
if(spec_tools.data_spec.wrapped_key_QMARK_(x)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.data_spec._nested_key = (function spec_tools$data_spec$_nested_key(n,k){
if(cljs.core.qualified_keyword_QMARK_(n)){
} else {
throw (new Error(["Assert failed: ","spec must have a qualified name","\n","(qualified-keyword? n)"].join('')));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(n),"$",cljs.core.name(n),(function (){var temp__5823__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5823__auto__)){
var kns = temp__5823__auto__;
return ["$",kns].join('');
} else {
return null;
}
})(),"/",cljs.core.name(k)].join(''));
});
spec_tools.data_spec._map_spec = (function spec_tools$data_spec$_map_spec(data,p__50740){
var map__50741 = p__50740;
var map__50741__$1 = cljs.core.__destructure_map(map__50741);
var opts = map__50741__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var keys_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50741__$1,new cljs.core.Keyword(null,"keys-spec","keys-spec",920288948),spec_tools.impl.keys_spec);
var keys_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50741__$1,new cljs.core.Keyword(null,"keys-default","keys-default",-1790373239));
var temp__5823__auto__ = (function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data));
if(and__5023__auto__){
var vec__50742 = cljs.core.first(data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50742,(1),null);
var and__5023__auto____$1 = (!((((k instanceof cljs.core.Keyword)) || (spec_tools.data_spec.wrapped_key_QMARK_(k)))));
if(and__5023__auto____$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var vec__50745 = temp__5823__auto__;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50745,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50745,(1),null);
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.map_of_spec((spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(n,k_SINGLEQUOTE_) : spec_tools.data_spec.spec.call(null,n,k_SINGLEQUOTE_)),(function (){var G__50748 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"spec","spec",347520401),v_SINGLEQUOTE_], null);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__50748) : spec_tools.data_spec.spec.call(null,G__50748));
})())], null));
} else {
var m = cljs.core.reduce_kv((function (acc,k,v){
var k__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = keys_default;
if(cljs.core.truth_(and__5023__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__5023__auto__;
}
})())?(keys_default.cljs$core$IFn$_invoke$arity$1 ? keys_default.cljs$core$IFn$_invoke$arity$1(k) : keys_default.call(null,k)):k);
var kv = spec_tools.data_spec.unwrap_key(k__$1);
var rk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([((spec_tools.data_spec.req_QMARK_(k__$1))?"req":"opt"),(((!(cljs.core.qualified_keyword_QMARK_(kv))))?"-un":null)].join(''));
var vec__50749 = ((spec_tools.data_spec.maybe_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(v),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__50738_SHARP_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),p1__50738_SHARP_], null));
}),spec_tools.impl.nilable_spec)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.identity], null));
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50749,(0),null);
var wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50749,(1),null);
var vec__50752 = ((cljs.core.qualified_keyword_QMARK_(kv))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kv,v__$1))?kv:null)], null):(function (){var k_SINGLEQUOTE_ = spec_tools.data_spec._nested_key(n,spec_tools.data_spec.unwrap_key(kv));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,k_SINGLEQUOTE_], null);
})());
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50752,(0),null);
var n_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50752,(1),null);
var v_SINGLEQUOTE_ = (cljs.core.truth_(n_SINGLEQUOTE_)?(function (){var G__50755 = (function (){var G__50756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),n_SINGLEQUOTE_),new cljs.core.Keyword(null,"spec","spec",347520401),v__$1);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__50756) : spec_tools.data_spec.spec.call(null,G__50756));
})();
return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__50755) : wrap.call(null,G__50755));
})():null);
var G__50757 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,rk,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),k_SINGLEQUOTE_);
if(cljs.core.truth_(v_SINGLEQUOTE_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__50757,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_], null));
} else {
return G__50757;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
var defs = new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298).cljs$core$IFn$_invoke$arity$1(m);
var data__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298))));
var seq__50758_50829 = cljs.core.seq(defs);
var chunk__50759_50830 = null;
var count__50760_50831 = (0);
var i__50761_50832 = (0);
while(true){
if((i__50761_50832 < count__50760_50831)){
var vec__50770_50833 = chunk__50759_50830.cljs$core$IIndexed$_nth$arity$2(null,i__50761_50832);
var k_50834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50770_50833,(0),null);
var s_50835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50770_50833,(1),null);
var synthetic_QMARK__50836 = (function (){var and__5023__auto__ = spec_tools.core.spec_QMARK_(s_50835);
if(cljs.core.truth_(and__5023__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_50835)));
} else {
return and__5023__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_50834,(function (){var G__50773 = s_50835;
if(cljs.core.truth_(synthetic_QMARK__50836)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50773,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__50773;
}
})());


var G__50837 = seq__50758_50829;
var G__50838 = chunk__50759_50830;
var G__50839 = count__50760_50831;
var G__50840 = (i__50761_50832 + (1));
seq__50758_50829 = G__50837;
chunk__50759_50830 = G__50838;
count__50760_50831 = G__50839;
i__50761_50832 = G__50840;
continue;
} else {
var temp__5825__auto___50841 = cljs.core.seq(seq__50758_50829);
if(temp__5825__auto___50841){
var seq__50758_50842__$1 = temp__5825__auto___50841;
if(cljs.core.chunked_seq_QMARK_(seq__50758_50842__$1)){
var c__5548__auto___50843 = cljs.core.chunk_first(seq__50758_50842__$1);
var G__50844 = cljs.core.chunk_rest(seq__50758_50842__$1);
var G__50845 = c__5548__auto___50843;
var G__50846 = cljs.core.count(c__5548__auto___50843);
var G__50847 = (0);
seq__50758_50829 = G__50844;
chunk__50759_50830 = G__50845;
count__50760_50831 = G__50846;
i__50761_50832 = G__50847;
continue;
} else {
var vec__50774_50848 = cljs.core.first(seq__50758_50842__$1);
var k_50849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50774_50848,(0),null);
var s_50850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50774_50848,(1),null);
var synthetic_QMARK__50852 = (function (){var and__5023__auto__ = spec_tools.core.spec_QMARK_(s_50850);
if(cljs.core.truth_(and__5023__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_50850)));
} else {
return and__5023__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_50849,(function (){var G__50777 = s_50850;
if(cljs.core.truth_(synthetic_QMARK__50852)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50777,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__50777;
}
})());


var G__50853 = cljs.core.next(seq__50758_50842__$1);
var G__50854 = null;
var G__50855 = (0);
var G__50856 = (0);
seq__50758_50829 = G__50853;
chunk__50759_50830 = G__50854;
count__50760_50831 = G__50855;
i__50761_50832 = G__50856;
continue;
}
} else {
}
}
break;
}

return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),(keys_spec.cljs$core$IFn$_invoke$arity$1 ? keys_spec.cljs$core$IFn$_invoke$arity$1(data__$1) : keys_spec.call(null,data__$1))], null));
}
});
spec_tools.data_spec._coll_spec = (function spec_tools$data_spec$_coll_spec(data,p__50778){
var map__50779 = p__50778;
var map__50779__$1 = cljs.core.__destructure_map(map__50779);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50779__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," should be homogeneous, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," values found"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"values","values",372645556),data], null));
}

var spec = (function (){var G__50780 = n;
var G__50781 = cljs.core.first(data);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__50780,G__50781) : spec_tools.data_spec.spec.call(null,G__50780,G__50781));
})();
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.coll_of_spec(spec,kind)], null));
});
spec_tools.data_spec._or_spec = (function spec_tools$data_spec$_or_spec(n,v){
if(((cljs.core.map_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(v))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec or must be a map of keyword keys -> specs, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," found"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}

return spec_tools.impl.or_spec(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var iter__5503__auto__ = (function spec_tools$data_spec$_or_spec_$_iter__50782(s__50783){
return (new cljs.core.LazySeq(null,(function (){
var s__50783__$1 = s__50783;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__50783__$1);
if(temp__5825__auto__){
var s__50783__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50783__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__50783__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__50785 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__50784 = (0);
while(true){
if((i__50784 < size__5502__auto__)){
var vec__50786 = cljs.core._nth(c__5501__auto__,i__50784);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50786,(1),null);
cljs.core.chunk_append(b__50785,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__50789 = spec_tools.data_spec._nested_key(n,k);
var G__50790 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__50789,G__50790) : spec_tools.data_spec.spec.call(null,G__50789,G__50790));
})()], null));

var G__50860 = (i__50784 + (1));
i__50784 = G__50860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50785),spec_tools$data_spec$_or_spec_$_iter__50782(cljs.core.chunk_rest(s__50783__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50785),null);
}
} else {
var vec__50791 = cljs.core.first(s__50783__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50791,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50791,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__50794 = spec_tools.data_spec._nested_key(n,k);
var G__50795 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__50794,G__50795) : spec_tools.data_spec.spec.call(null,G__50794,G__50795));
})()], null),spec_tools$data_spec$_or_spec_$_iter__50782(cljs.core.rest(s__50783__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(v);
})(),cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Creates a `clojure.spec.alpha/Spec` out of a data-spec. Supports 2 arities:
 * 
 *   ```clojure
 *   ;; arity1
 *   (ds/spec
 *  {:spec {:i int?}
 *   :name ::map})
 * 
 *   ;; arity2 (legacy)
 *   (ds/spec ::map {:i int?})
 *   ```
 * 
 *   The following options are valid for the 1 arity case:
 * 
 *   | Key              | Description
 *   | -----------------|----------------
 *   | `:spec`          | The wrapped data-spec.
 *   | `:name`          | Qualified root spec name - used to generate unique names for sub-specs.
 *   | `:keys-spec`     | Function to generate the keys-specs, default [[keys-specs]].
 *   | `:keys-default`  | Function to wrap not-wrapped keys, e.g. [[opt]] to make keys optional by default.
 */
spec_tools.data_spec.spec = (function spec_tools$data_spec$spec(var_args){
var G__50799 = arguments.length;
switch (G__50799) {
case 1:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 = (function (p__50800){
var map__50801 = p__50800;
var map__50801__$1 = cljs.core.__destructure_map(map__50801);
var opts = map__50801__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50801__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50801__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var nested_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50801__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973));
if(cljs.core.truth_(spec_tools.data_spec.spec)){
} else {
throw (new Error(["Assert failed: ","missing :spec predicate in data-spec","\n","spec"].join('')));
}

var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"spec","spec",347520401));
var named_spec = (function (p1__50796_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50796_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
var maybe_named_spec = (function (p1__50797_SHARP_){
var G__50802 = p1__50797_SHARP_;
if(cljs.core.not(nested_QMARK_)){
return named_spec(G__50802);
} else {
return G__50802;
}
});
var nested_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973),true);
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(data))){
return maybe_named_spec(data);
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(data))){
return data;
} else {
if(spec_tools.data_spec.or_QMARK_(data)){
return spec_tools.data_spec._or_spec(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(spec_tools.data_spec.maybe_QMARK_(data)){
return spec_tools.impl.nilable_spec(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data)));
} else {
if(cljs.core.map_QMARK_(data)){
return named_spec(spec_tools.data_spec._map_spec(data,nested_opts));
} else {
if(cljs.core.set_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentHashSet.EMPTY)));
} else {
if(cljs.core.vector_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentVector.EMPTY)));
} else {
return maybe_named_spec(spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),data], null)));

}
}
}
}
}
}
}
}));

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"spec","spec",347520401),data], null));
}));

(spec_tools.data_spec.spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.data_spec.js.map
