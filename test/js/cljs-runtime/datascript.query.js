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

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k48243,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__48247 = k48243;
var G__48247__$1 = (((G__48247 instanceof cljs.core.Keyword))?G__48247.fqn:null);
switch (G__48247__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48243,else__5326__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__48248){
var vec__48249 = p__48248;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(1),null);
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

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48242){
var self__ = this;
var G__48242__$1 = this;
return (new cljs.core.RecordIter((0),G__48242__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48244,other48245){
var self__ = this;
var this48244__$1 = this;
return (((!((other48245 == null)))) && ((((this48244__$1.constructor === other48245.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48244__$1.rels,other48245.rels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48244__$1.sources,other48245.sources)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48244__$1.rules,other48245.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48244__$1.__extmap,other48245.__extmap)))))))))));
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

(datascript.query.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k48243){
var self__ = this;
var this__5330__auto____$1 = this;
var G__48256 = k48243;
var G__48256__$1 = (((G__48256 instanceof cljs.core.Keyword))?G__48256.fqn:null);
switch (G__48256__$1) {
case "rels":
case "sources":
case "rules":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48243);

}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__48242){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__48257 = cljs.core.keyword_identical_QMARK_;
var expr__48258 = k__5332__auto__;
if(cljs.core.truth_((pred__48257.cljs$core$IFn$_invoke$arity$2 ? pred__48257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rels","rels",1770187185),expr__48258) : pred__48257.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__48258)))){
return (new datascript.query.Context(G__48242,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48257.cljs$core$IFn$_invoke$arity$2 ? pred__48257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424),expr__48258) : pred__48257.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__48258)))){
return (new datascript.query.Context(self__.rels,G__48242,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48257.cljs$core$IFn$_invoke$arity$2 ? pred__48257.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366),expr__48258) : pred__48257.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__48258)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__48242,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__48242),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__48242){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__48242,self__.__extmap,self__.__hash));
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
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__48246){
var extmap__5365__auto__ = (function (){var G__48261 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48246,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__48246)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48261);
} else {
return G__48261;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__48246),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__48246),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__48246),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k48263,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__48267 = k48263;
var G__48267__$1 = (((G__48267 instanceof cljs.core.Keyword))?G__48267.fqn:null);
switch (G__48267__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48263,else__5326__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__48269){
var vec__48270 = p__48269;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48270,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48270,(1),null);
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

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48262){
var self__ = this;
var G__48262__$1 = this;
return (new cljs.core.RecordIter((0),G__48262__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48264,other48265){
var self__ = this;
var this48264__$1 = this;
return (((!((other48265 == null)))) && ((((this48264__$1.constructor === other48265.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48264__$1.attrs,other48265.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48264__$1.tuples,other48265.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48264__$1.__extmap,other48265.__extmap)))))))));
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

(datascript.query.Relation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k48263){
var self__ = this;
var this__5330__auto____$1 = this;
var G__48275 = k48263;
var G__48275__$1 = (((G__48275 instanceof cljs.core.Keyword))?G__48275.fqn:null);
switch (G__48275__$1) {
case "attrs":
case "tuples":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48263);

}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__48262){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__48276 = cljs.core.keyword_identical_QMARK_;
var expr__48277 = k__5332__auto__;
if(cljs.core.truth_((pred__48276.cljs$core$IFn$_invoke$arity$2 ? pred__48276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__48277) : pred__48276.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__48277)))){
return (new datascript.query.Relation(G__48262,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48276.cljs$core$IFn$_invoke$arity$2 ? pred__48276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__48277) : pred__48276.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__48277)))){
return (new datascript.query.Relation(self__.attrs,G__48262,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__48262),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__48262){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__48262,self__.__extmap,self__.__hash));
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
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__48266){
var extmap__5365__auto__ = (function (){var G__48281 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48266,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__48266)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48281);
} else {
return G__48281;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__48266),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__48266),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var len__5749__auto___48673 = arguments.length;
var i__5750__auto___48674 = (0);
while(true){
if((i__5750__auto___48674 < len__5749__auto___48673)){
args__5755__auto__.push((arguments[i__5750__auto___48674]));

var G__48675 = (i__5750__auto___48674 + (1));
i__5750__auto___48674 = G__48675;
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
(datascript.query.concatv.cljs$lang$applyTo = (function (seq48282){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48282));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__48288 = arguments.length;
switch (G__48288) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___48677 = arguments.length;
var i__5750__auto___48678 = (0);
while(true){
if((i__5750__auto___48678 < len__5749__auto___48677)){
args_arr__5774__auto__.push((arguments[i__5750__auto___48678]));

var G__48679 = (i__5750__auto___48678 + (1));
i__5750__auto___48678 = G__48679;
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
(datascript.query.zip.cljs$lang$applyTo = (function (seq48285){
var G__48286 = cljs.core.first(seq48285);
var seq48285__$1 = cljs.core.next(seq48285);
var G__48287 = cljs.core.first(seq48285__$1);
var seq48285__$2 = cljs.core.next(seq48285__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48286,G__48287,seq48285__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (((cljs.core.every_QMARK_((function (p1__48289_SHARP_){
return cljs.core.contains_QMARK_(b,p1__48289_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__48290_SHARP_){
return cljs.core.contains_QMARK_(b,p1__48290_SHARP_);
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
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__48292){
var vec__48293 = p__48292;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48293,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48293,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__48296){
var vec__48297 = p__48296;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48297,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48297,(1),null);
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
var n__5616__auto___48680 = l1;
var i_48681 = (0);
while(true){
if((i_48681 < n__5616__auto___48680)){
(res[i_48681] = (t1[(idxs1[i_48681])]));

var G__48682 = (i_48681 + (1));
i_48681 = G__48682;
continue;
} else {
}
break;
}

var n__5616__auto___48683 = l2;
var i_48684 = (0);
while(true){
if((i_48684 < n__5616__auto___48683)){
(res[(l1 + i_48684)] = (t2[(idxs2[i_48684])]));

var G__48685 = (i_48684 + (1));
i_48684 = G__48685;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__48302 = a;
var map__48302__$1 = cljs.core.__destructure_map(map__48302);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48302__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48302__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__48303 = b;
var map__48303__$1 = cljs.core.__destructure_map(map__48303);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48303__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48303__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__5503__auto__ = (function datascript$query$sum_rel_$_iter__48305(s__48306){
return (new cljs.core.LazySeq(null,(function (){
var s__48306__$1 = s__48306;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48306__$1);
if(temp__5825__auto__){
var s__48306__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48306__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48306__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48308 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48307 = (0);
while(true){
if((i__48307 < size__5502__auto__)){
var vec__48309 = cljs.core._nth(c__5501__auto__,i__48307);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48309,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48309,(1),null);
cljs.core.chunk_append(b__48308,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__48688 = (i__48307 + (1));
i__48307 = G__48688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48308),datascript$query$sum_rel_$_iter__48305(cljs.core.chunk_rest(s__48306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48308),null);
}
} else {
var vec__48312 = cljs.core.first(s__48306__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48312,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48312,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__48305(cljs.core.rest(s__48306__$2)));
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
var seq__48315_48689 = cljs.core.seq(idxb__GT_idxa);
var chunk__48316_48690 = null;
var count__48317_48691 = (0);
var i__48318_48692 = (0);
while(true){
if((i__48318_48692 < count__48317_48691)){
var vec__48326_48693 = chunk__48316_48690.cljs$core$IIndexed$_nth$arity$2(null,i__48318_48692);
var idx_b_48694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48326_48693,(0),null);
var idx_a_48695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48326_48693,(1),null);
(tuple_SINGLEQUOTE_[idx_a_48695] = (tuple_b[idx_b_48694]));


var G__48696 = seq__48315_48689;
var G__48697 = chunk__48316_48690;
var G__48698 = count__48317_48691;
var G__48699 = (i__48318_48692 + (1));
seq__48315_48689 = G__48696;
chunk__48316_48690 = G__48697;
count__48317_48691 = G__48698;
i__48318_48692 = G__48699;
continue;
} else {
var temp__5825__auto___48700 = cljs.core.seq(seq__48315_48689);
if(temp__5825__auto___48700){
var seq__48315_48701__$1 = temp__5825__auto___48700;
if(cljs.core.chunked_seq_QMARK_(seq__48315_48701__$1)){
var c__5548__auto___48702 = cljs.core.chunk_first(seq__48315_48701__$1);
var G__48703 = cljs.core.chunk_rest(seq__48315_48701__$1);
var G__48704 = c__5548__auto___48702;
var G__48705 = cljs.core.count(c__5548__auto___48702);
var G__48706 = (0);
seq__48315_48689 = G__48703;
chunk__48316_48690 = G__48704;
count__48317_48691 = G__48705;
i__48318_48692 = G__48706;
continue;
} else {
var vec__48330_48707 = cljs.core.first(seq__48315_48701__$1);
var idx_b_48708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48330_48707,(0),null);
var idx_a_48709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48330_48707,(1),null);
(tuple_SINGLEQUOTE_[idx_a_48709] = (tuple_b[idx_b_48708]));


var G__48710 = cljs.core.next(seq__48315_48701__$1);
var G__48711 = null;
var G__48712 = (0);
var G__48713 = (0);
seq__48315_48689 = G__48710;
chunk__48316_48690 = G__48711;
count__48317_48691 = G__48712;
i__48318_48692 = G__48713;
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
var G__48333 = (function (){var G__48335 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__48336 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__48335,G__48336) : datascript.query.sum_rel.call(null,G__48335,G__48336));
})();
var G__48334 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__48333,G__48334) : datascript.query.sum_rel.call(null,G__48333,G__48334));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__48338 = arguments.length;
switch (G__48338) {
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

var datascript$query$IBinding$in__GT_rel$dyn_48715 = (function (binding,value){
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
return datascript$query$IBinding$in__GT_rel$dyn_48715(binding,value);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48340_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__48340_SHARP_);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__48341_SHARP_,p2__48342_SHARP_){
return datascript.query.in__GT_rel(p1__48341_SHARP_,p2__48342_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__48345){
var vec__48346 = p__48345;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48346,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48346,(1),null);
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Extra inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48349_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__48349_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Too few inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48350_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__48350_SHARP_));
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

var G__48720 = (i + (1));
i = G__48720;
continue;
} else {
return ((function (i,getters_arr,n){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters_arr.map(((function (i,getters_arr,n){
return (function (p1__48353_SHARP_){
return (p1__48353_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48353_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__48353_SHARP_.call(null,tuple));
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
var map__48357 = a;
var map__48357__$1 = cljs.core.__destructure_map(map__48357);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48357__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__48358 = b;
var map__48358__$1 = cljs.core.__destructure_map(map__48358);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48358__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48358__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = cljs.core.vec(datascript.query.intersect_keys(attrs_a,attrs_b));
var key_fn_b = datascript.query.tuple_key_fn(attrs_b,attrs);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var key_fn_a = datascript.query.tuple_key_fn(attrs_a,attrs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__48356_SHARP_){
return ((function (){var G__48359 = key_fn_a(p1__48356_SHARP_);
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__48359) : hash.call(null,G__48359));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48360_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48360_SHARP_,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (datascript.query.free_var_QMARK_(p1__48360_SHARP_)))){
return null;
} else {
return p1__48360_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48362){
var vec__48363 = p__48362;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48363,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48363,(1),null);
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
var G__48721 = cljs.core.next(tuple__$1);
var G__48722 = cljs.core.next(pattern__$1);
tuple__$1 = G__48721;
pattern__$1 = G__48722;
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
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48367_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__48367_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48368){
var vec__48369 = p__48368;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48369,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48369,(1),null);
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
var G__48723 = cljs.core.next(rels__$1);
var G__48724 = datascript.query.hash_join(rel,new_rel__$1);
var G__48725 = acc;
rels__$1 = G__48723;
new_rel__$1 = G__48724;
acc = G__48725;
continue;
} else {
var G__48726 = cljs.core.next(rels__$1);
var G__48727 = new_rel__$1;
var G__48728 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__48726;
new_rel__$1 = G__48727;
acc = G__48728;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__48374_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__48374_SHARP_),sym)){
return p1__48374_SHARP_;
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
return (tuple[(function (){var fexpr__48376 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__48376.cljs$core$IFn$_invoke$arity$1 ? fexpr__48376.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__48376.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__48377_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__48377_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48378_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__48378_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__48379_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__48379_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__5616__auto___48729 = len;
var i_48730 = (0);
while(true){
if((i_48730 < n__5616__auto___48729)){
var arg_48732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_48730);
if((arg_48732 instanceof cljs.core.Symbol)){
var temp__5827__auto___48733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_48732);
if((temp__5827__auto___48733 == null)){
(tuples_args[i_48730] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_48732));
} else {
var source_48734 = temp__5827__auto___48733;
(static_args[i_48730] = source_48734);
}
} else {
(static_args[i_48730] = arg_48732);
}

var G__48736 = (i_48730 + (1));
i_48730 = G__48736;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__5616__auto___48737 = len;
var i_48738 = (0);
while(true){
if((i_48738 < n__5616__auto___48737)){
var temp__5829__auto___48739 = (tuples_args[i_48738]);
if((temp__5829__auto___48739 == null)){
} else {
var tuple_idx_48740 = temp__5829__auto___48739;
var v_48741 = (tuple[tuple_idx_48740]);
(args__$1[i_48738] = v_48741);
}

var G__48742 = (i_48738 + (1));
i_48738 = G__48742;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__5616__auto___48743 = len;
var i_48744 = (0);
while(true){
if((i_48744 < n__5616__auto___48743)){
var temp__5829__auto___48745 = (tuples_args[i_48744]);
if((temp__5829__auto___48745 == null)){
} else {
var tuple_idx_48746 = temp__5829__auto___48745;
var v_48747 = (tuple[tuple_idx_48746]);
(static_args[i_48744] = v_48747);
}

var G__48748 = (i_48744 + (1));
i_48744 = G__48748;
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
var vec__48384 = clause;
var vec__48387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48384,(0),null);
var seq__48388 = cljs.core.seq(vec__48387);
var first__48389 = cljs.core.first(seq__48388);
var seq__48388__$1 = cljs.core.next(seq__48388);
var f = first__48389;
var args = seq__48388__$1;
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
var vec__48390 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48390,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48390,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__48383_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__48383_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__48394 = clause;
var vec__48397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(0),null);
var seq__48398 = cljs.core.seq(vec__48397);
var first__48399 = cljs.core.first(seq__48398);
var seq__48398__$1 = cljs.core.next(seq__48398);
var f = first__48399;
var args = seq__48398__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48394,(1),null);
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
var vec__48400 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48400,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48400,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__5503__auto__ = (function datascript$query$bind_by_fn_$_iter__48404(s__48405){
return (new cljs.core.LazySeq(null,(function (){
var s__48405__$1 = s__48405;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48405__$1);
if(temp__5825__auto__){
var s__48405__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48405__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48405__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48407 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48406 = (0);
while(true){
if((i__48406 < size__5502__auto__)){
var tuple = cljs.core._nth(c__5501__auto__,i__48406);
var val = tuple_fn(tuple);
if((!((val == null)))){
cljs.core.chunk_append(b__48407,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__48749 = (i__48406 + (1));
i__48406 = G__48749;
continue;
} else {
var G__48750 = (i__48406 + (1));
i__48406 = G__48750;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48407),datascript$query$bind_by_fn_$_iter__48404(cljs.core.chunk_rest(s__48405__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48407),null);
}
} else {
var tuple = cljs.core.first(s__48405__$2);
var val = tuple_fn(tuple);
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__48404(cljs.core.rest(s__48405__$2)));
} else {
var G__48751 = cljs.core.rest(s__48405__$2);
s__48405__$1 = G__48751;
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
var vec__48411 = clause;
var seq__48412 = cljs.core.seq(vec__48411);
var first__48413 = cljs.core.first(seq__48412);
var seq__48412__$1 = cljs.core.next(seq__48412);
var rule = first__48413;
var call_args = seq__48412__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__5503__auto__ = (function datascript$query$expand_rule_$_iter__48414(s__48415){
return (new cljs.core.LazySeq(null,(function (){
var s__48415__$1 = s__48415;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48415__$1);
if(temp__5825__auto__){
var s__48415__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48415__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48415__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48417 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48416 = (0);
while(true){
if((i__48416 < size__5502__auto__)){
var branch = cljs.core._nth(c__5501__auto__,i__48416);
var vec__48418 = branch;
var seq__48419 = cljs.core.seq(vec__48418);
var first__48420 = cljs.core.first(seq__48419);
var seq__48419__$1 = cljs.core.next(seq__48419);
var vec__48421 = first__48420;
var seq__48422 = cljs.core.seq(vec__48421);
var first__48423 = cljs.core.first(seq__48422);
var seq__48422__$1 = cljs.core.next(seq__48422);
var _ = first__48423;
var rule_args = seq__48422__$1;
var clauses = seq__48419__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__48417,clojure.walk.postwalk(((function (i__48416,vec__48418,seq__48419,first__48420,seq__48419__$1,vec__48421,seq__48422,first__48423,seq__48422__$1,_,rule_args,clauses,replacements,branch,c__5501__auto__,size__5502__auto__,b__48417,s__48415__$2,temp__5825__auto__,vec__48411,seq__48412,first__48413,seq__48412__$1,rule,call_args,seqid,branches){
return (function (p1__48409_SHARP_){
if(datascript.query.free_var_QMARK_(p1__48409_SHARP_)){
var x__44005__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__48409_SHARP_) : replacements.call(null,p1__48409_SHARP_));
if((x__44005__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__48409_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__44005__auto__;
}
} else {
return p1__48409_SHARP_;
}
});})(i__48416,vec__48418,seq__48419,first__48420,seq__48419__$1,vec__48421,seq__48422,first__48423,seq__48422__$1,_,rule_args,clauses,replacements,branch,c__5501__auto__,size__5502__auto__,b__48417,s__48415__$2,temp__5825__auto__,vec__48411,seq__48412,first__48413,seq__48412__$1,rule,call_args,seqid,branches))
,clauses));

var G__48752 = (i__48416 + (1));
i__48416 = G__48752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48417),datascript$query$expand_rule_$_iter__48414(cljs.core.chunk_rest(s__48415__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48417),null);
}
} else {
var branch = cljs.core.first(s__48415__$2);
var vec__48425 = branch;
var seq__48426 = cljs.core.seq(vec__48425);
var first__48427 = cljs.core.first(seq__48426);
var seq__48426__$1 = cljs.core.next(seq__48426);
var vec__48428 = first__48427;
var seq__48429 = cljs.core.seq(vec__48428);
var first__48430 = cljs.core.first(seq__48429);
var seq__48429__$1 = cljs.core.next(seq__48429);
var _ = first__48430;
var rule_args = seq__48429__$1;
var clauses = seq__48426__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__48425,seq__48426,first__48427,seq__48426__$1,vec__48428,seq__48429,first__48430,seq__48429__$1,_,rule_args,clauses,replacements,branch,s__48415__$2,temp__5825__auto__,vec__48411,seq__48412,first__48413,seq__48412__$1,rule,call_args,seqid,branches){
return (function (p1__48409_SHARP_){
if(datascript.query.free_var_QMARK_(p1__48409_SHARP_)){
var x__44005__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__48409_SHARP_) : replacements.call(null,p1__48409_SHARP_));
if((x__44005__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__48409_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__44005__auto__;
}
} else {
return p1__48409_SHARP_;
}
});})(vec__48425,seq__48426,first__48427,seq__48426__$1,vec__48428,seq__48429,first__48430,seq__48429__$1,_,rule_args,clauses,replacements,branch,s__48415__$2,temp__5825__auto__,vec__48411,seq__48412,first__48413,seq__48412__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__48414(cljs.core.rest(s__48415__$2)));
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
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48431){
var vec__48432 = p__48431;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48432,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48432,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__48436 = rule_clause;
var seq__48437 = cljs.core.seq(vec__48436);
var first__48438 = cljs.core.first(seq__48437);
var seq__48437__$1 = cljs.core.next(seq__48437);
var rule = first__48438;
var call_args = seq__48437__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__5503__auto__ = (function datascript$query$rule_gen_guards_$_iter__48439(s__48440){
return (new cljs.core.LazySeq(null,(function (){
var s__48440__$1 = s__48440;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48440__$1);
if(temp__5825__auto__){
var s__48440__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48440__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48440__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48442 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48441 = (0);
while(true){
if((i__48441 < size__5502__auto__)){
var prev_args = cljs.core._nth(c__5501__auto__,i__48441);
var vec__48443 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48443,(1),null);
cljs.core.chunk_append(b__48442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__48753 = (i__48441 + (1));
i__48441 = G__48753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48442),datascript$query$rule_gen_guards_$_iter__48439(cljs.core.chunk_rest(s__48440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48442),null);
}
} else {
var prev_args = cljs.core.first(s__48440__$2);
var vec__48446 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48446,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48446,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__48439(cljs.core.rest(s__48440__$2)));
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
clojure.walk.postwalk((function (p1__48450_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__48450_SHARP_) : pred.call(null,p1__48450_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__48450_SHARP_);
} else {
}

return p1__48450_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__48451){
var vec__48452 = p__48451;
var vec__48455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48452,(0),null);
var seq__48456 = cljs.core.seq(vec__48455);
var first__48457 = cljs.core.first(seq__48456);
var seq__48456__$1 = cljs.core.next(seq__48456);
var _ = first__48457;
var vars = seq__48456__$1;
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
return cljs.core.some((function (p1__48458_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__48458_SHARP_));
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
var vec__48478 = cljs.core.split_with(((function (stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__48459_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__48459_SHARP_)));
});})(stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48478,(0),null);
var vec__48481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48478,(1),null);
var seq__48482 = cljs.core.seq(vec__48481);
var first__48483 = cljs.core.first(seq__48482);
var seq__48482__$1 = cljs.core.next(seq__48482);
var rule_clause = first__48483;
var next_clauses = seq__48482__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__48754 = cljs.core.next(stack);
var G__48755 = datascript.query.sum_rel(rel,new_rel);
stack = G__48754;
rel = G__48755;
continue;
} else {
var vec__48484 = rule_clause;
var seq__48485 = cljs.core.seq(vec__48484);
var first__48486 = cljs.core.first(seq__48485);
var seq__48485__$1 = cljs.core.next(seq__48485);
var rule = first__48486;
var call_args = seq__48485__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__48487 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__48484,seq__48485,first__48486,seq__48485__$1,rule,call_args,guards,vec__48487,active_gs,pending_gs,vec__48478,clauses,vec__48481,seq__48482,first__48483,seq__48482__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__48460_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48460_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__48484,seq__48485,first__48486,seq__48485__$1,rule,call_args,guards,vec__48487,active_gs,pending_gs,vec__48478,clauses,vec__48481,seq__48482,first__48483,seq__48482__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__48756 = cljs.core.next(stack);
var G__48757 = rel;
stack = G__48756;
rel = G__48757;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__48758 = cljs.core.next(stack);
var G__48759 = rel;
stack = G__48758;
rel = G__48759;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__48761 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5503__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48484,seq__48485,first__48486,seq__48485__$1,rule,call_args,guards,vec__48487,active_gs,pending_gs,vec__48478,clauses,vec__48481,seq__48482,first__48483,seq__48482__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__48491(s__48492){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48484,seq__48485,first__48486,seq__48485__$1,rule,call_args,guards,vec__48487,active_gs,pending_gs,vec__48478,clauses,vec__48481,seq__48482,first__48483,seq__48482__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__48492__$1 = s__48492;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48492__$1);
if(temp__5825__auto__){
var s__48492__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48492__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48492__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48494 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48493 = (0);
while(true){
if((i__48493 < size__5502__auto__)){
var branch = cljs.core._nth(c__5501__auto__,i__48493);
cljs.core.chunk_append(b__48494,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__48764 = (i__48493 + (1));
i__48493 = G__48764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48494),datascript$query$solve_rule_$_iter__48491(cljs.core.chunk_rest(s__48492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48494),null);
}
} else {
var branch = cljs.core.first(s__48492__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__48491(cljs.core.rest(s__48492__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48484,seq__48485,first__48486,seq__48485__$1,rule,call_args,guards,vec__48487,active_gs,pending_gs,vec__48478,clauses,vec__48481,seq__48482,first__48483,seq__48482__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__48484,seq__48485,first__48486,seq__48485__$1,rule,call_args,guards,vec__48487,active_gs,pending_gs,vec__48478,clauses,vec__48481,seq__48482,first__48483,seq__48482__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__5503__auto__(branches);
})(),cljs.core.next(stack));
var G__48762 = rel;
stack = G__48761;
rel = G__48762;
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
var vec__48497 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48497,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48497,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48497,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48497,(3),null);
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
var vec__48501 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48501,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48501,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48501,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48501,(3),null);
var G__48504 = cljs.core.PersistentHashSet.EMPTY;
var G__48504__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48504,e):G__48504);
var G__48504__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48504__$1,tx):G__48504__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48504__$2,v);
} else {
return G__48504__$2;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__48505_SHARP_){
return datascript.query.limit_rel(p1__48505_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__48507_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__48507_SHARP_));
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
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48508_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__48508_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__48510 = cljs.core.seq(branches);
var chunk__48511 = null;
var count__48512 = (0);
var i__48513 = (0);
while(true){
if((i__48513 < count__48512)){
var branch = chunk__48511.cljs$core$IIndexed$_nth$arity$2(null,i__48513);
var temp__5829__auto___48765 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___48765 == null)){
} else {
var missing_48766 = temp__5829__auto___48765;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_48766], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_48766], null));
}


var G__48767 = seq__48510;
var G__48768 = chunk__48511;
var G__48769 = count__48512;
var G__48770 = (i__48513 + (1));
seq__48510 = G__48767;
chunk__48511 = G__48768;
count__48512 = G__48769;
i__48513 = G__48770;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__48510);
if(temp__5825__auto__){
var seq__48510__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48510__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__48510__$1);
var G__48772 = cljs.core.chunk_rest(seq__48510__$1);
var G__48773 = c__5548__auto__;
var G__48774 = cljs.core.count(c__5548__auto__);
var G__48775 = (0);
seq__48510 = G__48772;
chunk__48511 = G__48773;
count__48512 = G__48774;
i__48513 = G__48775;
continue;
} else {
var branch = cljs.core.first(seq__48510__$1);
var temp__5829__auto___48776 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___48776 == null)){
} else {
var missing_48778 = temp__5829__auto___48776;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_48778], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_48778], null));
}


var G__48779 = cljs.core.next(seq__48510__$1);
var G__48780 = null;
var G__48781 = (0);
var G__48782 = (0);
seq__48510 = G__48779;
chunk__48511 = G__48780;
count__48512 = G__48781;
i__48513 = G__48782;
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
var G__48523 = arguments.length;
switch (G__48523) {
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
var pred__48525 = datascript.query.looks_like_QMARK_;
var expr__48526 = clause;
if(cljs.core.truth_((function (){var G__48528 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__48529 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48528,G__48529) : pred__48525.call(null,G__48528,G__48529));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__48530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__48531 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48530,G__48531) : pred__48525.call(null,G__48530,G__48531));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__48533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48534 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48533,G__48534) : pred__48525.call(null,G__48533,G__48534));
})())){
var vec__48535 = clause;
var seq__48536 = cljs.core.seq(vec__48535);
var first__48537 = cljs.core.first(seq__48536);
var seq__48536__$1 = cljs.core.next(seq__48536);
var source_sym = first__48537;
var rest = seq__48536__$1;
var _STAR_implicit_source_STAR__orig_val__48538 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__48539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__48539);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__48538);
}} else {
if(cljs.core.truth_((function (){var G__48540 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48541 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48540,G__48541) : pred__48525.call(null,G__48540,G__48541));
})())){
var vec__48543 = clause;
var seq__48544 = cljs.core.seq(vec__48543);
var first__48545 = cljs.core.first(seq__48544);
var seq__48544__$1 = cljs.core.next(seq__48544);
var _ = first__48545;
var branches = seq__48544__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48543,seq__48544,first__48545,seq__48544__$1,_,branches,___$1,pred__48525,expr__48526){
return (function (p1__48517_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__48517_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__48517_SHARP_));
});})(context,clause,orig_clause,vec__48543,seq__48544,first__48545,seq__48544__$1,_,branches,___$1,pred__48525,expr__48526))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48543,seq__48544,first__48545,seq__48544__$1,_,branches,___$1,contexts,pred__48525,expr__48526){
return (function (p1__48518_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__48518_SHARP_));
});})(context,clause,orig_clause,vec__48543,seq__48544,first__48545,seq__48544__$1,_,branches,___$1,contexts,pred__48525,expr__48526))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__48546 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48547 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48546,G__48547) : pred__48525.call(null,G__48546,G__48547));
})())){
var vec__48548 = clause;
var seq__48549 = cljs.core.seq(vec__48548);
var first__48550 = cljs.core.first(seq__48549);
var seq__48549__$1 = cljs.core.next(seq__48549);
var _ = first__48550;
var first__48550__$1 = cljs.core.first(seq__48549__$1);
var seq__48549__$2 = cljs.core.next(seq__48549__$1);
var vec__48551 = first__48550__$1;
var seq__48552 = cljs.core.seq(vec__48551);
var first__48553 = cljs.core.first(seq__48552);
var seq__48552__$1 = cljs.core.next(seq__48552);
var req_vars = first__48553;
var vars = seq__48552__$1;
var branches = seq__48549__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__48784 = context;
var G__48785 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__48786 = clause;
context = G__48784;
clause = G__48785;
orig_clause = G__48786;
continue;
} else {
if(cljs.core.truth_((function (){var G__48555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48556 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48555,G__48556) : pred__48525.call(null,G__48555,G__48556));
})())){
var vec__48557 = clause;
var seq__48558 = cljs.core.seq(vec__48557);
var first__48559 = cljs.core.first(seq__48558);
var seq__48558__$1 = cljs.core.next(seq__48558);
var _ = first__48559;
var first__48559__$1 = cljs.core.first(seq__48558__$1);
var seq__48558__$2 = cljs.core.next(seq__48558__$1);
var vars = first__48559__$1;
var branches = seq__48558__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48557,seq__48558,first__48559,seq__48558__$1,_,first__48559__$1,seq__48558__$2,vars,branches,vars__$1,___$1,join_context,pred__48525,expr__48526){
return (function (p1__48520_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__48520_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__48520_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__48557,seq__48558,first__48559,seq__48558__$1,_,first__48559__$1,seq__48558__$2,vars,branches,vars__$1,___$1,join_context,pred__48525,expr__48526))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__48557,seq__48558,first__48559,seq__48558__$1,_,first__48559__$1,seq__48558__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__48525,expr__48526){
return (function (p1__48521_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__48521_SHARP_));
});})(context,clause,orig_clause,vec__48557,seq__48558,first__48559,seq__48558__$1,_,first__48559__$1,seq__48558__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__48525,expr__48526))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__48561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48562 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48561,G__48562) : pred__48525.call(null,G__48561,G__48562));
})())){
var vec__48563 = clause;
var seq__48564 = cljs.core.seq(vec__48563);
var first__48565 = cljs.core.first(seq__48564);
var seq__48564__$1 = cljs.core.next(seq__48564);
var _ = first__48565;
var clauses = seq__48564__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__48566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48567 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48566,G__48567) : pred__48525.call(null,G__48566,G__48567));
})())){
var vec__48568 = clause;
var seq__48569 = cljs.core.seq(vec__48568);
var first__48570 = cljs.core.first(seq__48569);
var seq__48569__$1 = cljs.core.next(seq__48569);
var _ = first__48570;
var clauses = seq__48569__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__48572 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48573 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48572,G__48573) : pred__48525.call(null,G__48572,G__48573));
})())){
var vec__48574 = clause;
var seq__48575 = cljs.core.seq(vec__48574);
var first__48576 = cljs.core.first(seq__48575);
var seq__48575__$1 = cljs.core.next(seq__48575);
var _ = first__48576;
var first__48576__$1 = cljs.core.first(seq__48575__$1);
var seq__48575__$2 = cljs.core.next(seq__48575__$1);
var vars = first__48576__$1;
var clauses = seq__48575__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__48578 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__48579 = expr__48526;
return (pred__48525.cljs$core$IFn$_invoke$arity$2 ? pred__48525.cljs$core$IFn$_invoke$arity$2(G__48578,G__48579) : pred__48525.call(null,G__48578,G__48579));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__48580 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__48581 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__48581);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__48580);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__48526)].join('')));
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
var _STAR_implicit_source_STAR__orig_val__48583 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__48584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__48584);

try{var G__48585 = context;
var G__48586 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__48585,G__48586) : datascript.query.resolve_clause.call(null,G__48585,G__48586));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__48583);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__48587 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__48588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__48588);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__48587);
}});
datascript.query._collect_tuples = (function datascript$query$_collect_tuples(acc,rel,len,copy_map){
return cljs.core.__GT_Eduction(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t1){
return cljs.core.__GT_Eduction(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t2){
var res = cljs.core.aclone(t1);
var n__5616__auto___48789 = len;
var i_48790 = (0);
while(true){
if((i_48790 < n__5616__auto___48789)){
var temp__5829__auto___48791 = (copy_map[i_48790]);
if((temp__5829__auto___48791 == null)){
} else {
var idx_48792 = temp__5829__auto___48791;
(res[i_48790] = (t2[idx_48792]));
}

var G__48793 = (i_48790 + (1));
i_48790 = G__48793;
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
var G__48591 = arguments.length;
switch (G__48591) {
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
var G__48796 = acc;
var G__48797 = cljs.core.next(rels);
var G__48798 = symbols;
acc = G__48796;
rels = G__48797;
symbols = G__48798;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__48589_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__48589_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count(symbols);
var G__48799 = datascript.query._collect_tuples(acc,rel,len,copy_map);
var G__48800 = cljs.core.next(rels);
var G__48801 = symbols;
acc = G__48799;
rels = G__48800;
symbols = G__48801;
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

var datascript$query$IContextResolve$_context_resolve$dyn_48802 = (function (var$,context){
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
return datascript$query$IContextResolve$_context_resolve$dyn_48802(var$,context);
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
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48595_SHARP_){
return datascript.query._context_resolve(p1__48595_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48596_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__48596_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__48597_SHARP_,p2__48598_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__48597_SHARP_) : pred.call(null,p1__48597_SHARP_)))){
return p2__48598_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48600_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__48600_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__5503__auto__ = (function datascript$query$aggregate_$_iter__48601(s__48602){
return (new cljs.core.LazySeq(null,(function (){
var s__48602__$1 = s__48602;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48602__$1);
if(temp__5825__auto__){
var s__48602__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48602__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48602__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48604 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48603 = (0);
while(true){
if((i__48603 < size__5502__auto__)){
var vec__48605 = cljs.core._nth(c__5501__auto__,i__48603);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48605,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48605,(1),null);
cljs.core.chunk_append(b__48604,datascript.query._aggregate(find_elements,context,tuples));

var G__48805 = (i__48603 + (1));
i__48603 = G__48805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48604),datascript$query$aggregate_$_iter__48601(cljs.core.chunk_rest(s__48602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48604),null);
}
} else {
var vec__48608 = cljs.core.first(s__48602__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48608,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48608,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__48601(cljs.core.rest(s__48602__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48611_SHARP_,p2__48612_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48611_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__48612_SHARP_) : f.call(null,p2__48612_SHARP_)));
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

var datascript$query$IPostProcess$_post_process$dyn_48806 = (function (find,return_map,tuples){
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
return datascript$query$IPostProcess$_post_process$dyn_48806(find,return_map,tuples);
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
var resolved = (function (){var iter__5503__auto__ = (function datascript$query$pull_$_iter__48629(s__48630){
return (new cljs.core.LazySeq(null,(function (){
var s__48630__$1 = s__48630;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48630__$1);
if(temp__5825__auto__){
var s__48630__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48630__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48630__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48632 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48631 = (0);
while(true){
if((i__48631 < size__5502__auto__)){
var find = cljs.core._nth(c__5501__auto__,i__48631);
cljs.core.chunk_append(b__48632,((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null));

var G__48809 = (i__48631 + (1));
i__48631 = G__48809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48632),datascript$query$pull_$_iter__48629(cljs.core.chunk_rest(s__48630__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48632),null);
}
} else {
var find = cljs.core.first(s__48630__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null),datascript$query$pull_$_iter__48629(cljs.core.rest(s__48630__$2)));
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
var iter__5503__auto__ = (function datascript$query$pull_$_iter__48634(s__48635){
return (new cljs.core.LazySeq(null,(function (){
var s__48635__$1 = s__48635;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__48635__$1);
if(temp__5825__auto__){
var s__48635__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48635__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__48635__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__48637 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__48636 = (0);
while(true){
if((i__48636 < size__5502__auto__)){
var tuple = cljs.core._nth(c__5501__auto__,i__48636);
cljs.core.chunk_append(b__48637,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__48636,tuple,c__5501__auto__,size__5502__auto__,b__48637,s__48635__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(i__48636,tuple,c__5501__auto__,size__5502__auto__,b__48637,s__48635__$2,temp__5825__auto__,resolved))
,resolved,tuple));

var G__48810 = (i__48636 + (1));
i__48636 = G__48810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48637),datascript$query$pull_$_iter__48634(cljs.core.chunk_rest(s__48635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48637),null);
}
} else {
var tuple = cljs.core.first(s__48635__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__48635__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(tuple,s__48635__$2,temp__5825__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__48634(cljs.core.rest(s__48635__$2)));
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
var len__5749__auto___48811 = arguments.length;
var i__5750__auto___48812 = (0);
while(true){
if((i__5750__auto___48812 < len__5749__auto___48811)){
args__5755__auto__.push((arguments[i__5750__auto___48812]));

var G__48813 = (i__5750__auto___48812 + (1));
i__5750__auto___48812 = G__48813;
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
var q__$1 = (function (){var G__48653 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__48653);
} else {
return G__48653;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__48654 = resultset;
var G__48654__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__48638_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__48638_SHARP_,(0),result_arity));
}),G__48654):G__48654);
var G__48654__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__48654__$1):G__48654__$1);
var G__48654__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__48654__$2):G__48654__$2);
return datascript.query._post_process(find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__48654__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq48639){
var G__48640 = cljs.core.first(seq48639);
var seq48639__$1 = cljs.core.next(seq48639);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48640,seq48639__$1);
}));


//# sourceMappingURL=datascript.query.js.map
