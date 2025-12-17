goog.provide('datascript.query');
datascript.query._STAR_query_cache_STAR_ = datascript.lru.cache((100));



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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k48627,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__48632 = k48627;
var G__48632__$1 = (((G__48632 instanceof cljs.core.Keyword))?G__48632.fqn:null);
switch (G__48632__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48627,else__5326__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__48635){
var vec__48636 = p__48635;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48636,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48636,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.query.Context{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48626){
var self__ = this;
var G__48626__$1 = this;
return (new cljs.core.RecordIter((0),G__48626__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48628,other48629){
var self__ = this;
var this48628__$1 = this;
return (((!((other48629 == null)))) && ((((this48628__$1.constructor === other48629.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48628__$1.rels,other48629.rels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48628__$1.sources,other48629.sources)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48628__$1.rules,other48629.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48628__$1.__extmap,other48629.__extmap)))))))))));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k48627){
var self__ = this;
var this__5330__auto____$1 = this;
var G__48641 = k48627;
var G__48641__$1 = (((G__48641 instanceof cljs.core.Keyword))?G__48641.fqn:null);
switch (G__48641__$1) {
case "rels":
case "sources":
case "rules":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48627);

}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__48626){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__48643 = cljs.core.keyword_identical_QMARK_;
var expr__48644 = k__5332__auto__;
if(cljs.core.truth_((pred__48643.cljs$core$IFn$_invoke$arity$2 ? pred__48643.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rels","rels",1770187185),expr__48644) : pred__48643.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__48644)))){
return (new datascript.query.Context(G__48626,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48643.cljs$core$IFn$_invoke$arity$2 ? pred__48643.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424),expr__48644) : pred__48643.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__48644)))){
return (new datascript.query.Context(self__.rels,G__48626,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48643.cljs$core$IFn$_invoke$arity$2 ? pred__48643.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366),expr__48644) : pred__48643.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__48644)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__48626,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__48626),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__48626){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__48626,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__48630){
var extmap__5365__auto__ = (function (){var G__48647 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48630,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__48630)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48647);
} else {
return G__48647;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__48630),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__48630),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__48630),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k48650,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__48655 = k48650;
var G__48655__$1 = (((G__48655 instanceof cljs.core.Keyword))?G__48655.fqn:null);
switch (G__48655__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48650,else__5326__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__48657){
var vec__48658 = p__48657;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48658,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48658,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.query.Relation{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48649){
var self__ = this;
var G__48649__$1 = this;
return (new cljs.core.RecordIter((0),G__48649__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48651,other48652){
var self__ = this;
var this48651__$1 = this;
return (((!((other48652 == null)))) && ((((this48651__$1.constructor === other48652.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48651__$1.attrs,other48652.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48651__$1.tuples,other48652.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48651__$1.__extmap,other48652.__extmap)))))))));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k48650){
var self__ = this;
var this__5330__auto____$1 = this;
var G__48662 = k48650;
var G__48662__$1 = (((G__48662 instanceof cljs.core.Keyword))?G__48662.fqn:null);
switch (G__48662__$1) {
case "attrs":
case "tuples":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48650);

}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__48649){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__48663 = cljs.core.keyword_identical_QMARK_;
var expr__48664 = k__5332__auto__;
if(cljs.core.truth_((pred__48663.cljs$core$IFn$_invoke$arity$2 ? pred__48663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__48664) : pred__48663.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__48664)))){
return (new datascript.query.Relation(G__48649,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48663.cljs$core$IFn$_invoke$arity$2 ? pred__48663.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__48664) : pred__48663.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__48664)))){
return (new datascript.query.Relation(self__.attrs,G__48649,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__48649),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__48649){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__48649,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__48653){
var extmap__5365__auto__ = (function (){var G__48667 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48653,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__48653)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48667);
} else {
return G__48667;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__48653),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__48653),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49035 = arguments.length;
var i__5750__auto___49039 = (0);
while(true){
if((i__5750__auto___49039 < len__5749__auto___49035)){
args__5755__auto__.push((arguments[i__5750__auto___49039]));

var G__49043 = (i__5750__auto___49039 + (1));
i__5750__auto___49039 = G__49043;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
}));

(datascript.query.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(datascript.query.concatv.cljs$lang$applyTo = (function (seq48669){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48669));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__48675 = arguments.length;
switch (G__48675) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___49051 = arguments.length;
var i__5750__auto___49052 = (0);
while(true){
if((i__5750__auto___49052 < len__5749__auto___49051)){
args_arr__5774__auto__.push((arguments[i__5750__auto___49052]));

var G__49053 = (i__5750__auto___49052 + (1));
i__5750__auto___49052 = G__49053;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
}));

(datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
}));

/** @this {Function} */
(datascript.query.zip.cljs$lang$applyTo = (function (seq48672){
var G__48673 = cljs.core.first(seq48672);
var seq48672__$1 = cljs.core.next(seq48672);
var G__48674 = cljs.core.first(seq48672__$1);
var seq48672__$2 = cljs.core.next(seq48672__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48673,G__48674,seq48672__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (((cljs.core.every_QMARK_((function (p1__48677_SHARP_){
return cljs.core.contains_QMARK_(b,p1__48677_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__48678_SHARP_){
return cljs.core.contains_QMARK_(b,p1__48678_SHARP_);
}),cljs.core.keys(a))))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__48679){
var vec__48680 = p__48679;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48680,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48680,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__48684){
var vec__48685 = p__48684;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48685,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48685,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__5616__auto___49063 = l1;
var i_49064 = (0);
while(true){
if((i_49064 < n__5616__auto___49063)){
(res[i_49064] = (t1[(idxs1[i_49064])]));

var G__49068 = (i_49064 + (1));
i_49064 = G__49068;
continue;
} else {
}
break;
}

var n__5616__auto___49069 = l2;
var i_49070 = (0);
while(true){
if((i_49070 < n__5616__auto___49069)){
(res[(l1 + i_49070)] = (t2[(idxs2[i_49070])]));

var G__49071 = (i_49070 + (1));
i_49070 = G__49071;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__48689 = a;
var map__48689__$1 = cljs.core.__destructure_map(map__48689);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48689__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48689__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__48690 = b;
var map__48690__$1 = cljs.core.__destructure_map(map__48690);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48690__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__5503__auto__ = (function datascript$query$sum_rel_$_iter__48691(s__48692){
return (new cljs.core.LazySeq(null,(function (){
var s__48692__$1 = s__48692;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48692__$1);
if(temp__5825__auto__){
var s__48692__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48692__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48692__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48694 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48693 = (0);
while(true){
if((i__48693 < size__5502__auto__)){
var vec__48696 = cljs.core._nth(c__5501__auto__,i__48693);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48696,(1),null);
cljs.core.chunk_append(b__48694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__49074 = (i__48693 + (1));
i__48693 = G__49074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48694),datascript$query$sum_rel_$_iter__48691(cljs.core.chunk_rest(s__48692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48694),null);
}
} else {
var vec__48699 = cljs.core.first(s__48692__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48699,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48699,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__48691(cljs.core.rest(s__48692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__48702_49076 = cljs.core.seq(idxb__GT_idxa);
var chunk__48703_49077 = null;
var count__48704_49078 = (0);
var i__48705_49079 = (0);
while(true){
if((i__48705_49079 < count__48704_49078)){
var vec__48713_49080 = chunk__48703_49077.cljs$core$IIndexed$_nth$arity$2(null,i__48705_49079);
var idx_b_49081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713_49080,(0),null);
var idx_a_49082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713_49080,(1),null);
(tuple_SINGLEQUOTE_[idx_a_49082] = (tuple_b[idx_b_49081]));


var G__49083 = seq__48702_49076;
var G__49084 = chunk__48703_49077;
var G__49085 = count__48704_49078;
var G__49086 = (i__48705_49079 + (1));
seq__48702_49076 = G__49083;
chunk__48703_49077 = G__49084;
count__48704_49078 = G__49085;
i__48705_49079 = G__49086;
continue;
} else {
var temp__5825__auto___49087 = cljs.core.seq(seq__48702_49076);
if(temp__5825__auto___49087){
var seq__48702_49088__$1 = temp__5825__auto___49087;
if(cljs.core.chunked_seq_QMARK_(seq__48702_49088__$1)){
var c__5548__auto___49089 = cljs.core.chunk_first(seq__48702_49088__$1);
var G__49090 = cljs.core.chunk_rest(seq__48702_49088__$1);
var G__49091 = c__5548__auto___49089;
var G__49092 = cljs.core.count(c__5548__auto___49089);
var G__49093 = (0);
seq__48702_49076 = G__49090;
chunk__48703_49077 = G__49091;
count__48704_49078 = G__49092;
i__48705_49079 = G__49093;
continue;
} else {
var vec__48716_49094 = cljs.core.first(seq__48702_49088__$1);
var idx_b_49095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48716_49094,(0),null);
var idx_a_49096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48716_49094,(1),null);
(tuple_SINGLEQUOTE_[idx_a_49096] = (tuple_b[idx_b_49095]));


var G__49097 = cljs.core.next(seq__48702_49088__$1);
var G__49098 = null;
var G__49099 = (0);
var G__49100 = (0);
seq__48702_49076 = G__49097;
chunk__48703_49077 = G__49098;
count__48704_49078 = G__49099;
i__48705_49079 = G__49100;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__48720 = (function (){var G__48722 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__48723 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__48722,G__48723) : datascript.query.sum_rel.call(null,G__48722,G__48723));
})();
var G__48721 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__48720,G__48721) : datascript.query.sum_rel.call(null,G__48720,G__48721));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__48725 = arguments.length;
switch (G__48725) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
datascript.parser.parse_rules(rules__$1);

return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

var datascript$query$IBinding$in__GT_rel$dyn_49102 = (function (binding,value){
var x__5373__auto__ = (((binding == null))?null:binding);
var m__5374__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__5374__auto__.call(null,binding,value));
} else {
var m__5372__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__5372__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
});
datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
return datascript$query$IBinding$in__GT_rel$dyn_49102(binding,value);
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48728_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__48728_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0))," to bind tuple ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__48730_SHARP_,p2__48731_SHARP_){
return datascript.query.in__GT_rel(p1__48730_SHARP_,p2__48731_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__48733){
var vec__48735 = p__48733;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48735,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48735,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
var cb = cljs.core.count(bindings);
var cv = cljs.core.count(values);
if((cb < cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Extra inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48739_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__48739_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Too few inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48740_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__48740_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));

}
}
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
if(cljs.core.int_QMARK_(idx)){
var idx__$1 = (idx | (0));
return (function datascript$query$getter_fn_$_contained_int_getter_fn(tuple){
var eid = (tuple[idx__$1]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function datascript$query$getter_fn_$_contained_getter_fn(tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
}
} else {
if(cljs.core.int_QMARK_(idx)){
var idx__$1 = (idx | (0));
return (function datascript$query$getter_fn_$_int_getter(tuple){
return (tuple[idx__$1]);
});
} else {
return (function datascript$query$getter_fn_$_getter(tuple){
return (tuple[idx]);
});
}
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(attrs,common_attrs){
var n = cljs.core.count(common_attrs);
if((n === (1))){
return datascript.query.getter_fn(attrs,cljs.core.first(common_attrs));
} else {
var getters_arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(common_attrs);
var i = (0);
while(true){
if((i < n)){
(getters_arr[i] = datascript.query.getter_fn(attrs,(getters_arr[i])));

var G__49104 = (i + (1));
i = G__49104;
continue;
} else {
return ((function (i,getters_arr,n){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters_arr.map(((function (i,getters_arr,n){
return (function (p1__48743_SHARP_){
return (p1__48743_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48743_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__48743_SHARP_.call(null,tuple));
});})(i,getters_arr,n))
));
});
;})(i,getters_arr,n))
}
break;
}
}
});
datascript.query._group_by = (function datascript$query$_group_by(f,init,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,init),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
return datascript.query._group_by(key_fn,cljs.core.List.EMPTY,tuples);
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function datascript$query$hash_join_$_keeper(vec,k,_){
if(cljs.core.truth_((attrs1.cljs$core$IFn$_invoke$arity$1 ? attrs1.cljs$core$IFn$_invoke$arity$1(k) : attrs1.call(null,k)))){
return vec;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vec,k);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),attrs2));
var keep_idxs1 = cljs.core.to_array(cljs.core.vals(attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.__GT_Eduction(cljs.core.map.cljs$core$IFn$_invoke$arity$1(attrs2),keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(attrs1,common_attrs);
var key_fn2 = datascript.query.tuple_key_fn(attrs2,common_attrs);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function datascript$query$hash_join_$_outer(acc,tuple2){
var key = key_fn2(tuple2);
var temp__5827__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5827__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5827__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function datascript$query$hash_join_$_outer_$_inner(acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__48747 = a;
var map__48747__$1 = cljs.core.__destructure_map(map__48747);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48747__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48747__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__48748 = b;
var map__48748__$1 = cljs.core.__destructure_map(map__48748);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48748__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48748__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = cljs.core.vec(datascript.query.intersect_keys(attrs_a,attrs_b));
var key_fn_b = datascript.query.tuple_key_fn(attrs_b,attrs);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var key_fn_a = datascript.query.tuple_key_fn(attrs_a,attrs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__48745_SHARP_){
return ((function (){var G__48750 = key_fn_a(p1__48745_SHARP_);
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__48750) : hash.call(null,G__48750));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48751_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48751_SHARP_,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (datascript.query.free_var_QMARK_(p1__48751_SHARP_)))){
return null;
} else {
return p1__48751_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48752){
var vec__48753 = p__48752;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48753,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48753,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__5023__auto__ = tuple__$1;
if(cljs.core.truth_(and__5023__auto__)){
return pattern__$1;
} else {
return and__5023__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (((datascript.query.free_var_QMARK_(p)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))))){
var G__49107 = cljs.core.next(tuple__$1);
var G__49108 = cljs.core.next(pattern__$1);
tuple__$1 = G__49107;
pattern__$1 = G__49108;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48757_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__48757_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48759){
var vec__48760 = p__48759;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5827__auto__ = cljs.core.first(rels__$1);
if((temp__5827__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5827__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__49109 = cljs.core.next(rels__$1);
var G__49110 = datascript.query.hash_join(rel,new_rel__$1);
var G__49111 = acc;
rels__$1 = G__49109;
new_rel__$1 = G__49110;
acc = G__49111;
continue;
} else {
var G__49112 = cljs.core.next(rels__$1);
var G__49113 = new_rel__$1;
var G__49114 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__49112;
new_rel__$1 = G__49113;
acc = G__49114;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__48765_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__48765_SHARP_),sym)){
return p1__48765_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5829__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5829__auto__ == null)){
return null;
} else {
var rel = temp__5829__auto__;
var temp__5829__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5829__auto____$1 == null)){
return null;
} else {
var tuple = temp__5829__auto____$1;
return (tuple[(function (){var fexpr__48767 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__48767.cljs$core$IFn$_invoke$arity$1 ? fexpr__48767.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__48767.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__48768_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__48768_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48769_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__48769_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__48770_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__48770_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__5616__auto___49115 = len;
var i_49116 = (0);
while(true){
if((i_49116 < n__5616__auto___49115)){
var arg_49117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_49116);
if((arg_49117 instanceof cljs.core.Symbol)){
var temp__5827__auto___49118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_49117);
if((temp__5827__auto___49118 == null)){
(tuples_args[i_49116] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_49117));
} else {
var source_49119 = temp__5827__auto___49118;
(static_args[i_49116] = source_49119);
}
} else {
(static_args[i_49116] = arg_49117);
}

var G__49120 = (i_49116 + (1));
i_49116 = G__49120;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__5616__auto___49121 = len;
var i_49122 = (0);
while(true){
if((i_49122 < n__5616__auto___49121)){
var temp__5829__auto___49123 = (tuples_args[i_49122]);
if((temp__5829__auto___49123 == null)){
} else {
var tuple_idx_49124 = temp__5829__auto___49123;
var v_49125 = (tuple[tuple_idx_49124]);
(args__$1[i_49122] = v_49125);
}

var G__49126 = (i_49122 + (1));
i_49122 = G__49126;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__5616__auto___49127 = len;
var i_49128 = (0);
while(true){
if((i_49128 < n__5616__auto___49127)){
var temp__5829__auto___49129 = (tuples_args[i_49128]);
if((temp__5829__auto___49129 == null)){
} else {
var tuple_idx_49130 = temp__5829__auto___49129;
var v_49131 = (tuple[tuple_idx_49130]);
(static_args[i_49128] = v_49131);
}

var G__49132 = (i_49128 + (1));
i_49128 = G__49132;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__48773 = clause;
var vec__48776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48773,(0),null);
var seq__48777 = cljs.core.seq(vec__48776);
var first__48778 = cljs.core.first(seq__48777);
var seq__48777__$1 = cljs.core.next(seq__48777);
var f = first__48778;
var args = seq__48777__$1;
var pred = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__48779 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48779,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48779,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__48772_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__48772_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__48783 = clause;
var vec__48786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48783,(0),null);
var seq__48787 = cljs.core.seq(vec__48786);
var first__48788 = cljs.core.first(seq__48787);
var seq__48787__$1 = cljs.core.next(seq__48787);
var f = first__48788;
var args = seq__48787__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48783,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__48789 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48789,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48789,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__5503__auto__ = (function datascript$query$bind_by_fn_$_iter__48792(s__48793){
return (new cljs.core.LazySeq(null,(function (){
var s__48793__$1 = s__48793;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48793__$1);
if(temp__5825__auto__){
var s__48793__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48793__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48793__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48795 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48794 = (0);
while(true){
if((i__48794 < size__5502__auto__)){
var tuple = cljs.core._nth(c__5501__auto__,i__48794);
var val = tuple_fn(tuple);
if((!((val == null)))){
cljs.core.chunk_append(b__48795,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__49133 = (i__48794 + (1));
i__48794 = G__49133;
continue;
} else {
var G__49134 = (i__48794 + (1));
i__48794 = G__49134;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48795),datascript$query$bind_by_fn_$_iter__48792(cljs.core.chunk_rest(s__48793__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48795),null);
}
} else {
var tuple = cljs.core.first(s__48793__$2);
var val = tuple_fn(tuple);
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__48792(cljs.core.rest(s__48793__$2)));
} else {
var G__49135 = cljs.core.rest(s__48793__$2);
s__48793__$1 = G__49135;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
if((!(cljs.core.sequential_QMARK_(clause)))){
return false;
} else {
var head = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause));
if((!((head instanceof cljs.core.Symbol)))){
return false;
} else {
if(datascript.query.free_var_QMARK_(head)){
return false;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null], null), null),head)){
return false;
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),head)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause], null));
} else {
return true;

}
}
}
}
}
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__48798 = clause;
var seq__48799 = cljs.core.seq(vec__48798);
var first__48800 = cljs.core.first(seq__48799);
var seq__48799__$1 = cljs.core.next(seq__48799);
var rule = first__48800;
var call_args = seq__48799__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__5503__auto__ = (function datascript$query$expand_rule_$_iter__48801(s__48802){
return (new cljs.core.LazySeq(null,(function (){
var s__48802__$1 = s__48802;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48802__$1);
if(temp__5825__auto__){
var s__48802__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48802__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48802__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48804 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48803 = (0);
while(true){
if((i__48803 < size__5502__auto__)){
var branch = cljs.core._nth(c__5501__auto__,i__48803);
var vec__48805 = branch;
var seq__48806 = cljs.core.seq(vec__48805);
var first__48807 = cljs.core.first(seq__48806);
var seq__48806__$1 = cljs.core.next(seq__48806);
var vec__48808 = first__48807;
var seq__48809 = cljs.core.seq(vec__48808);
var first__48810 = cljs.core.first(seq__48809);
var seq__48809__$1 = cljs.core.next(seq__48809);
var _ = first__48810;
var rule_args = seq__48809__$1;
var clauses = seq__48806__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__48804,clojure.walk.postwalk(((function (i__48803,vec__48805,seq__48806,first__48807,seq__48806__$1,vec__48808,seq__48809,first__48810,seq__48809__$1,_,rule_args,clauses,replacements,branch,c__5501__auto__,size__5502__auto__,b__48804,s__48802__$2,temp__5825__auto__,vec__48798,seq__48799,first__48800,seq__48799__$1,rule,call_args,seqid,branches){
return (function (p1__48797_SHARP_){
if(datascript.query.free_var_QMARK_(p1__48797_SHARP_)){
var x__44389__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__48797_SHARP_) : replacements.call(null,p1__48797_SHARP_));
if((x__44389__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__48797_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__44389__auto__;
}
} else {
return p1__48797_SHARP_;
}
});})(i__48803,vec__48805,seq__48806,first__48807,seq__48806__$1,vec__48808,seq__48809,first__48810,seq__48809__$1,_,rule_args,clauses,replacements,branch,c__5501__auto__,size__5502__auto__,b__48804,s__48802__$2,temp__5825__auto__,vec__48798,seq__48799,first__48800,seq__48799__$1,rule,call_args,seqid,branches))
,clauses));

var G__49138 = (i__48803 + (1));
i__48803 = G__49138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48804),datascript$query$expand_rule_$_iter__48801(cljs.core.chunk_rest(s__48802__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48804),null);
}
} else {
var branch = cljs.core.first(s__48802__$2);
var vec__48811 = branch;
var seq__48812 = cljs.core.seq(vec__48811);
var first__48813 = cljs.core.first(seq__48812);
var seq__48812__$1 = cljs.core.next(seq__48812);
var vec__48814 = first__48813;
var seq__48815 = cljs.core.seq(vec__48814);
var first__48816 = cljs.core.first(seq__48815);
var seq__48815__$1 = cljs.core.next(seq__48815);
var _ = first__48816;
var rule_args = seq__48815__$1;
var clauses = seq__48812__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__48811,seq__48812,first__48813,seq__48812__$1,vec__48814,seq__48815,first__48816,seq__48815__$1,_,rule_args,clauses,replacements,branch,s__48802__$2,temp__5825__auto__,vec__48798,seq__48799,first__48800,seq__48799__$1,rule,call_args,seqid,branches){
return (function (p1__48797_SHARP_){
if(datascript.query.free_var_QMARK_(p1__48797_SHARP_)){
var x__44389__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__48797_SHARP_) : replacements.call(null,p1__48797_SHARP_));
if((x__44389__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__48797_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__44389__auto__;
}
} else {
return p1__48797_SHARP_;
}
});})(vec__48811,seq__48812,first__48813,seq__48812__$1,vec__48814,seq__48815,first__48816,seq__48815__$1,_,rule_args,clauses,replacements,branch,s__48802__$2,temp__5825__auto__,vec__48798,seq__48799,first__48800,seq__48799__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__48801(cljs.core.rest(s__48802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48817){
var vec__48818 = p__48817;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48818,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48818,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__48821 = rule_clause;
var seq__48822 = cljs.core.seq(vec__48821);
var first__48823 = cljs.core.first(seq__48822);
var seq__48822__$1 = cljs.core.next(seq__48822);
var rule = first__48823;
var call_args = seq__48822__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__5503__auto__ = (function datascript$query$rule_gen_guards_$_iter__48824(s__48825){
return (new cljs.core.LazySeq(null,(function (){
var s__48825__$1 = s__48825;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48825__$1);
if(temp__5825__auto__){
var s__48825__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48825__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48825__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48827 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48826 = (0);
while(true){
if((i__48826 < size__5502__auto__)){
var prev_args = cljs.core._nth(c__5501__auto__,i__48826);
var vec__48828 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48828,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48828,(1),null);
cljs.core.chunk_append(b__48827,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__49139 = (i__48826 + (1));
i__48826 = G__49139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48827),datascript$query$rule_gen_guards_$_iter__48824(cljs.core.chunk_rest(s__48825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48827),null);
}
} else {
var prev_args = cljs.core.first(s__48825__$2);
var vec__48831 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48831,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48831,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__48824(cljs.core.rest(s__48825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__48834_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__48834_SHARP_) : pred.call(null,p1__48834_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__48834_SHARP_);
} else {
}

return p1__48834_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__48835){
var vec__48836 = p__48835;
var vec__48839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48836,(0),null);
var seq__48840 = cljs.core.seq(vec__48839);
var first__48841 = cljs.core.first(seq__48840);
var seq__48840__$1 = cljs.core.next(seq__48840);
var _ = first__48841;
var vars = seq__48840__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__48843_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__48843_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5827__auto__ = cljs.core.first(stack);
if((temp__5827__auto__ == null)){
return rel;
} else {
var frame = temp__5827__auto__;
var vec__48863 = cljs.core.split_with(((function (stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__48844_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__48844_SHARP_)));
});})(stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48863,(0),null);
var vec__48866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48863,(1),null);
var seq__48867 = cljs.core.seq(vec__48866);
var first__48868 = cljs.core.first(seq__48867);
var seq__48867__$1 = cljs.core.next(seq__48867);
var rule_clause = first__48868;
var next_clauses = seq__48867__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__49140 = cljs.core.next(stack);
var G__49141 = datascript.query.sum_rel(rel,new_rel);
stack = G__49140;
rel = G__49141;
continue;
} else {
var vec__48869 = rule_clause;
var seq__48870 = cljs.core.seq(vec__48869);
var first__48871 = cljs.core.first(seq__48870);
var seq__48870__$1 = cljs.core.next(seq__48870);
var rule = first__48871;
var call_args = seq__48870__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__48872 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48872,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48872,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__48869,seq__48870,first__48871,seq__48870__$1,rule,call_args,guards,vec__48872,active_gs,pending_gs,vec__48863,clauses,vec__48866,seq__48867,first__48868,seq__48867__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__48845_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48845_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__48869,seq__48870,first__48871,seq__48870__$1,rule,call_args,guards,vec__48872,active_gs,pending_gs,vec__48863,clauses,vec__48866,seq__48867,first__48868,seq__48867__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__49142 = cljs.core.next(stack);
var G__49143 = rel;
stack = G__49142;
rel = G__49143;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__49144 = cljs.core.next(stack);
var G__49145 = rel;
stack = G__49144;
rel = G__49145;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__49146 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5503__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48869,seq__48870,first__48871,seq__48870__$1,rule,call_args,guards,vec__48872,active_gs,pending_gs,vec__48863,clauses,vec__48866,seq__48867,first__48868,seq__48867__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__48875(s__48876){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48869,seq__48870,first__48871,seq__48870__$1,rule,call_args,guards,vec__48872,active_gs,pending_gs,vec__48863,clauses,vec__48866,seq__48867,first__48868,seq__48867__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__48876__$1 = s__48876;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48876__$1);
if(temp__5825__auto__){
var s__48876__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48876__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48876__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48878 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48877 = (0);
while(true){
if((i__48877 < size__5502__auto__)){
var branch = cljs.core._nth(c__5501__auto__,i__48877);
cljs.core.chunk_append(b__48878,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__49148 = (i__48877 + (1));
i__48877 = G__49148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48878),datascript$query$solve_rule_$_iter__48875(cljs.core.chunk_rest(s__48876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48878),null);
}
} else {
var branch = cljs.core.first(s__48876__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__48875(cljs.core.rest(s__48876__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48869,seq__48870,first__48871,seq__48870__$1,rule,call_args,guards,vec__48872,active_gs,pending_gs,vec__48863,clauses,vec__48866,seq__48867,first__48868,seq__48867__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48869,seq__48870,first__48871,seq__48870__$1,rule,call_args,guards,vec__48872,active_gs,pending_gs,vec__48863,clauses,vec__48866,seq__48867,first__48868,seq__48867__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__5503__auto__(branches);
})(),cljs.core.next(stack));
var G__49147 = rel;
stack = G__49146;
rel = G__49147;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__48881 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5025__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__5023__auto__ = v;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = datascript.query.attr_QMARK_(a);
if(and__5023__auto____$1){
var and__5023__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__5023__auto____$2){
var or__5025__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.query.attr_QMARK_(v);
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
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__48885 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48885,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48885,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48885,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48885,(3),null);
var G__48888 = cljs.core.PersistentHashSet.EMPTY;
var G__48888__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48888,e):G__48888);
var G__48888__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48888__$1,tx):G__48888__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48888__$2,v);
} else {
return G__48888__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5829__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5829__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5829__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__48889_SHARP_){
return datascript.query.limit_rel(p1__48889_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__48890_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__48890_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
});
datascript.query.check_bound = (function datascript$query$check_bound(bound,vars,form){
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query.check_free_same = (function datascript$query$check_free_same(bound,branches,form){
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48892_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__48892_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__48893 = cljs.core.seq(branches);
var chunk__48894 = null;
var count__48895 = (0);
var i__48896 = (0);
while(true){
if((i__48896 < count__48895)){
var branch = chunk__48894.cljs$core$IIndexed$_nth$arity$2(null,i__48896);
var temp__5829__auto___49151 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___49151 == null)){
} else {
var missing_49152 = temp__5829__auto___49151;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_49152], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_49152], null));
}


var G__49153 = seq__48893;
var G__49154 = chunk__48894;
var G__49155 = count__48895;
var G__49156 = (i__48896 + (1));
seq__48893 = G__49153;
chunk__48894 = G__49154;
count__48895 = G__49155;
i__48896 = G__49156;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48893);
if(temp__5825__auto__){
var seq__48893__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48893__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__48893__$1);
var G__49157 = cljs.core.chunk_rest(seq__48893__$1);
var G__49158 = c__5548__auto__;
var G__49159 = cljs.core.count(c__5548__auto__);
var G__49160 = (0);
seq__48893 = G__49157;
chunk__48894 = G__49158;
count__48895 = G__49159;
i__48896 = G__49160;
continue;
} else {
var branch = cljs.core.first(seq__48893__$1);
var temp__5829__auto___49161 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___49161 == null)){
} else {
var missing_49162 = temp__5829__auto___49161;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_49162], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_49162], null));
}


var G__49163 = cljs.core.next(seq__48893__$1);
var G__49164 = null;
var G__49165 = (0);
var G__49166 = (0);
seq__48893 = G__49163;
chunk__48894 = G__49164;
count__48895 = G__49165;
i__48896 = G__49166;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__48904 = arguments.length;
switch (G__48904) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__48905 = datascript.query.looks_like_QMARK_;
var expr__48906 = clause;
if(cljs.core.truth_((function (){var G__48908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__48909 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48908,G__48909) : pred__48905.call(null,G__48908,G__48909));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__48911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__48912 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48911,G__48912) : pred__48905.call(null,G__48911,G__48912));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__48913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48914 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48913,G__48914) : pred__48905.call(null,G__48913,G__48914));
})())){
var vec__48915 = clause;
var seq__48916 = cljs.core.seq(vec__48915);
var first__48917 = cljs.core.first(seq__48916);
var seq__48916__$1 = cljs.core.next(seq__48916);
var source_sym = first__48917;
var rest = seq__48916__$1;
var _STAR_implicit_source_STAR__orig_val__48918 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__48919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__48919);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__48918);
}} else {
if(cljs.core.truth_((function (){var G__48920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48921 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48920,G__48921) : pred__48905.call(null,G__48920,G__48921));
})())){
var vec__48922 = clause;
var seq__48923 = cljs.core.seq(vec__48922);
var first__48924 = cljs.core.first(seq__48923);
var seq__48923__$1 = cljs.core.next(seq__48923);
var _ = first__48924;
var branches = seq__48923__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48922,seq__48923,first__48924,seq__48923__$1,_,branches,___$1,pred__48905,expr__48906){
return (function (p1__48899_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__48899_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__48899_SHARP_));
});})(context,clause,orig_clause,vec__48922,seq__48923,first__48924,seq__48923__$1,_,branches,___$1,pred__48905,expr__48906))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48922,seq__48923,first__48924,seq__48923__$1,_,branches,___$1,contexts,pred__48905,expr__48906){
return (function (p1__48900_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__48900_SHARP_));
});})(context,clause,orig_clause,vec__48922,seq__48923,first__48924,seq__48923__$1,_,branches,___$1,contexts,pred__48905,expr__48906))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__48925 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48926 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48925,G__48926) : pred__48905.call(null,G__48925,G__48926));
})())){
var vec__48927 = clause;
var seq__48928 = cljs.core.seq(vec__48927);
var first__48929 = cljs.core.first(seq__48928);
var seq__48928__$1 = cljs.core.next(seq__48928);
var _ = first__48929;
var first__48929__$1 = cljs.core.first(seq__48928__$1);
var seq__48928__$2 = cljs.core.next(seq__48928__$1);
var vec__48930 = first__48929__$1;
var seq__48931 = cljs.core.seq(vec__48930);
var first__48932 = cljs.core.first(seq__48931);
var seq__48931__$1 = cljs.core.next(seq__48931);
var req_vars = first__48932;
var vars = seq__48931__$1;
var branches = seq__48928__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__49168 = context;
var G__49169 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__49170 = clause;
context = G__49168;
clause = G__49169;
orig_clause = G__49170;
continue;
} else {
if(cljs.core.truth_((function (){var G__48934 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48935 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48934,G__48935) : pred__48905.call(null,G__48934,G__48935));
})())){
var vec__48936 = clause;
var seq__48937 = cljs.core.seq(vec__48936);
var first__48938 = cljs.core.first(seq__48937);
var seq__48937__$1 = cljs.core.next(seq__48937);
var _ = first__48938;
var first__48938__$1 = cljs.core.first(seq__48937__$1);
var seq__48937__$2 = cljs.core.next(seq__48937__$1);
var vars = first__48938__$1;
var branches = seq__48937__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48936,seq__48937,first__48938,seq__48937__$1,_,first__48938__$1,seq__48937__$2,vars,branches,vars__$1,___$1,join_context,pred__48905,expr__48906){
return (function (p1__48901_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__48901_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__48901_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__48936,seq__48937,first__48938,seq__48937__$1,_,first__48938__$1,seq__48937__$2,vars,branches,vars__$1,___$1,join_context,pred__48905,expr__48906))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48936,seq__48937,first__48938,seq__48937__$1,_,first__48938__$1,seq__48937__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__48905,expr__48906){
return (function (p1__48902_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__48902_SHARP_));
});})(context,clause,orig_clause,vec__48936,seq__48937,first__48938,seq__48937__$1,_,first__48938__$1,seq__48937__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__48905,expr__48906))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__48939 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48940 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48939,G__48940) : pred__48905.call(null,G__48939,G__48940));
})())){
var vec__48941 = clause;
var seq__48942 = cljs.core.seq(vec__48941);
var first__48943 = cljs.core.first(seq__48942);
var seq__48942__$1 = cljs.core.next(seq__48942);
var _ = first__48943;
var clauses = seq__48942__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__48944 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48945 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48944,G__48945) : pred__48905.call(null,G__48944,G__48945));
})())){
var vec__48946 = clause;
var seq__48947 = cljs.core.seq(vec__48946);
var first__48948 = cljs.core.first(seq__48947);
var seq__48947__$1 = cljs.core.next(seq__48947);
var _ = first__48948;
var clauses = seq__48947__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__48949 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48950 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48949,G__48950) : pred__48905.call(null,G__48949,G__48950));
})())){
var vec__48951 = clause;
var seq__48952 = cljs.core.seq(vec__48951);
var first__48953 = cljs.core.first(seq__48952);
var seq__48952__$1 = cljs.core.next(seq__48952);
var _ = first__48953;
var first__48953__$1 = cljs.core.first(seq__48952__$1);
var seq__48952__$2 = cljs.core.next(seq__48952__$1);
var vars = first__48953__$1;
var clauses = seq__48952__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__48955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48956 = expr__48906;
return (pred__48905.cljs$core$IFn$_invoke$arity$2 ? pred__48905.cljs$core$IFn$_invoke$arity$2(G__48955,G__48956) : pred__48905.call(null,G__48955,G__48956));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__48957 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__48958 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__48958);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__48957);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__48906)].join('')));
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
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(datascript.query.rule_QMARK_(context,clause)){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
var _STAR_implicit_source_STAR__orig_val__48960 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__48961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__48961);

try{var G__48962 = context;
var G__48963 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__48962,G__48963) : datascript.query.resolve_clause.call(null,G__48962,G__48963));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__48960);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__48964 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__48965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__48965);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__48964);
}});
datascript.query._collect_tuples = (function datascript$query$_collect_tuples(acc,rel,len,copy_map){
return cljs.core.__GT_Eduction(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t1){
return cljs.core.__GT_Eduction(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t2){
var res = cljs.core.aclone(t1);
var n__5616__auto___49173 = len;
var i_49174 = (0);
while(true){
if((i_49174 < n__5616__auto___49173)){
var temp__5829__auto___49175 = (copy_map[i_49174]);
if((temp__5829__auto___49175 == null)){
} else {
var idx_49176 = temp__5829__auto___49175;
(res[i_49174] = (t2[idx_49176]));
}

var G__49177 = (i_49174 + (1));
i_49174 = G__49177;
continue;
} else {
}
break;
}

return res;
})),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
})),cljs.core.cat),acc);
});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__48969 = arguments.length;
switch (G__48969) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var rel = cljs.core.first(rels);
if((rel == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))){
return cljs.core.PersistentVector.EMPTY;
} else {
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__49179 = acc;
var G__49180 = cljs.core.next(rels);
var G__49181 = symbols;
acc = G__49179;
rels = G__49180;
symbols = G__49181;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__48967_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__48967_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count(symbols);
var G__49182 = datascript.query._collect_tuples(acc,rel,len,copy_map);
var G__49183 = cljs.core.next(rels);
var G__49184 = symbols;
acc = G__49182;
rels = G__49183;
symbols = G__49184;
continue;

}
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

var datascript$query$IContextResolve$_context_resolve$dyn_49185 = (function (var$,context){
var x__5373__auto__ = (((var$ == null))?null:var$);
var m__5374__auto__ = (datascript.query._context_resolve[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__5374__auto__.call(null,var$,context));
} else {
var m__5372__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__5372__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
});
datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
return datascript$query$IContextResolve$_context_resolve$dyn_49185(var$,context);
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48972_SHARP_){
return datascript.query._context_resolve(p1__48972_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48973_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__48973_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__48975_SHARP_,p2__48976_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__48975_SHARP_) : pred.call(null,p1__48975_SHARP_)))){
return p2__48976_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48977_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__48977_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__5503__auto__ = (function datascript$query$aggregate_$_iter__48979(s__48980){
return (new cljs.core.LazySeq(null,(function (){
var s__48980__$1 = s__48980;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48980__$1);
if(temp__5825__auto__){
var s__48980__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48980__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48980__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48982 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48981 = (0);
while(true){
if((i__48981 < size__5502__auto__)){
var vec__48983 = cljs.core._nth(c__5501__auto__,i__48981);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48983,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48983,(1),null);
cljs.core.chunk_append(b__48982,datascript.query._aggregate(find_elements,context,tuples));

var G__49186 = (i__48981 + (1));
i__48981 = G__49186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48982),datascript$query$aggregate_$_iter__48979(cljs.core.chunk_rest(s__48980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48982),null);
}
} else {
var vec__48986 = cljs.core.first(s__48980__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48986,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48986,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__48979(cljs.core.rest(s__48980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(grouped);
});
datascript.query.map_STAR_ = (function datascript$query$map_STAR_(f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48989_SHARP_,p2__48990_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48989_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__48990_SHARP_) : f.call(null,p2__48990_SHARP_)));
}),cljs.core.empty(xs),xs);
});
datascript.query.tuples__GT_return_map = (function datascript$query$tuples__GT_return_map(return_map,tuples){
var symbols = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(return_map);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(symbols));
return datascript.query.map_STAR_((function (tuple){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(symbols,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,i));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
}),tuples);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

var datascript$query$IPostProcess$_post_process$dyn_49188 = (function (find,return_map,tuples){
var x__5373__auto__ = (((find == null))?null:find);
var m__5374__auto__ = (datascript.query._post_process[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__5374__auto__.call(null,find,return_map,tuples));
} else {
var m__5372__auto__ = (datascript.query._post_process["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__5372__auto__.call(null,find,return_map,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
});
datascript.query._post_process = (function datascript$query$_post_process(find,return_map,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$3 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$3(find,return_map,tuples);
} else {
return datascript$query$IPostProcess$_post_process$dyn_49188(find,return_map,tuples);
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((return_map == null)){
return tuples;
} else {
return datascript.query.tuples__GT_return_map(return_map,tuples);
}
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((!((return_map == null)))){
return cljs.core.first(datascript.query.tuples__GT_return_map(return_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tuples)], null)));
} else {
return cljs.core.first(tuples);
}
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__5503__auto__ = (function datascript$query$pull_$_iter__48993(s__48994){
return (new cljs.core.LazySeq(null,(function (){
var s__48994__$1 = s__48994;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48994__$1);
if(temp__5825__auto__){
var s__48994__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48994__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48994__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48996 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48995 = (0);
while(true){
if((i__48995 < size__5502__auto__)){
var find = cljs.core._nth(c__5501__auto__,i__48995);
cljs.core.chunk_append(b__48996,((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null));

var G__49189 = (i__48995 + (1));
i__48995 = G__49189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48996),datascript$query$pull_$_iter__48993(cljs.core.chunk_rest(s__48994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48996),null);
}
} else {
var find = cljs.core.first(s__48994__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null),datascript$query$pull_$_iter__48993(cljs.core.rest(s__48994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(find_elements);
})();
var iter__5503__auto__ = (function datascript$query$pull_$_iter__48997(s__48998){
return (new cljs.core.LazySeq(null,(function (){
var s__48998__$1 = s__48998;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48998__$1);
if(temp__5825__auto__){
var s__48998__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48998__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48998__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__49000 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48999 = (0);
while(true){
if((i__48999 < size__5502__auto__)){
var tuple = cljs.core._nth(c__5501__auto__,i__48999);
cljs.core.chunk_append(b__49000,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__48999,tuple,c__5501__auto__,size__5502__auto__,b__49000,s__48998__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(i__48999,tuple,c__5501__auto__,size__5502__auto__,b__49000,s__48998__$2,temp__5825__auto__,resolved))
,resolved,tuple));

var G__49190 = (i__48999 + (1));
i__48999 = G__49190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49000),datascript$query$pull_$_iter__48997(cljs.core.chunk_rest(s__48998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49000),null);
}
} else {
var tuple = cljs.core.first(s__48998__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__48998__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(tuple,s__48998__$2,temp__5825__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__48997(cljs.core.rest(s__48998__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(resultset);
});
datascript.query.q = (function datascript$query$q(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49191 = arguments.length;
var i__5750__auto___49192 = (0);
while(true){
if((i__5750__auto___49192 < len__5749__auto___49191)){
args__5755__auto__.push((arguments[i__5750__auto___49192]));

var G__49193 = (i__5750__auto___49192 + (1));
i__5750__auto___49192 = G__49193;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.lru._get(datascript.query._STAR_query_cache_STAR_,q,(function (){
return datascript.parser.parse_query(q);
}));
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__49004 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__49004);
} else {
return G__49004;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__49005 = resultset;
var G__49005__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__49001_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__49001_SHARP_,(0),result_arity));
}),G__49005):G__49005);
var G__49005__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__49005__$1):G__49005__$1);
var G__49005__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__49005__$2):G__49005__$2);
return datascript.query._post_process(find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__49005__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq49002){
var G__49003 = cljs.core.first(seq49002);
var seq49002__$1 = cljs.core.next(seq49002);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49003,seq49002__$1);
}));


//# sourceMappingURL=datascript.query.js.map
