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

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k64145,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__64149 = k64145;
var G__64149__$1 = (((G__64149 instanceof cljs.core.Keyword))?G__64149.fqn:null);
switch (G__64149__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64145,else__5326__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__64151){
var vec__64152 = p__64151;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64152,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64152,(1),null);
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

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64144){
var self__ = this;
var G__64144__$1 = this;
return (new cljs.core.RecordIter((0),G__64144__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64146,other64147){
var self__ = this;
var this64146__$1 = this;
return (((!((other64147 == null)))) && ((((this64146__$1.constructor === other64147.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64146__$1.rels,other64147.rels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64146__$1.sources,other64147.sources)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64146__$1.rules,other64147.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64146__$1.__extmap,other64147.__extmap)))))))))));
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

(datascript.query.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k64145){
var self__ = this;
var this__5330__auto____$1 = this;
var G__64159 = k64145;
var G__64159__$1 = (((G__64159 instanceof cljs.core.Keyword))?G__64159.fqn:null);
switch (G__64159__$1) {
case "rels":
case "sources":
case "rules":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64145);

}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__64144){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__64160 = cljs.core.keyword_identical_QMARK_;
var expr__64161 = k__5332__auto__;
if(cljs.core.truth_((pred__64160.cljs$core$IFn$_invoke$arity$2 ? pred__64160.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rels","rels",1770187185),expr__64161) : pred__64160.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__64161)))){
return (new datascript.query.Context(G__64144,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64160.cljs$core$IFn$_invoke$arity$2 ? pred__64160.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424),expr__64161) : pred__64160.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__64161)))){
return (new datascript.query.Context(self__.rels,G__64144,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64160.cljs$core$IFn$_invoke$arity$2 ? pred__64160.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366),expr__64161) : pred__64160.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__64161)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__64144,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__64144),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__64144){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__64144,self__.__extmap,self__.__hash));
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
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__64148){
var extmap__5365__auto__ = (function (){var G__64164 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64148,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__64148)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64164);
} else {
return G__64164;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__64148),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__64148),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__64148),null,cljs.core.not_empty(extmap__5365__auto__),null));
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

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k64166,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__64171 = k64166;
var G__64171__$1 = (((G__64171 instanceof cljs.core.Keyword))?G__64171.fqn:null);
switch (G__64171__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64166,else__5326__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__64173){
var vec__64174 = p__64173;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64174,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64174,(1),null);
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

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64165){
var self__ = this;
var G__64165__$1 = this;
return (new cljs.core.RecordIter((0),G__64165__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64167,other64168){
var self__ = this;
var this64167__$1 = this;
return (((!((other64168 == null)))) && ((((this64167__$1.constructor === other64168.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64167__$1.attrs,other64168.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64167__$1.tuples,other64168.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64167__$1.__extmap,other64168.__extmap)))))))));
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

(datascript.query.Relation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k64166){
var self__ = this;
var this__5330__auto____$1 = this;
var G__64180 = k64166;
var G__64180__$1 = (((G__64180 instanceof cljs.core.Keyword))?G__64180.fqn:null);
switch (G__64180__$1) {
case "attrs":
case "tuples":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64166);

}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__64165){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__64181 = cljs.core.keyword_identical_QMARK_;
var expr__64182 = k__5332__auto__;
if(cljs.core.truth_((pred__64181.cljs$core$IFn$_invoke$arity$2 ? pred__64181.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__64182) : pred__64181.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__64182)))){
return (new datascript.query.Relation(G__64165,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64181.cljs$core$IFn$_invoke$arity$2 ? pred__64181.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__64182) : pred__64181.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__64182)))){
return (new datascript.query.Relation(self__.attrs,G__64165,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__64165),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__64165){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__64165,self__.__extmap,self__.__hash));
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
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__64169){
var extmap__5365__auto__ = (function (){var G__64186 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64169,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__64169)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64186);
} else {
return G__64186;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__64169),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__64169),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
var len__5749__auto___64576 = arguments.length;
var i__5750__auto___64577 = (0);
while(true){
if((i__5750__auto___64577 < len__5749__auto___64576)){
args__5755__auto__.push((arguments[i__5750__auto___64577]));

var G__64579 = (i__5750__auto___64577 + (1));
i__5750__auto___64577 = G__64579;
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
(datascript.query.concatv.cljs$lang$applyTo = (function (seq64188){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64188));
}));

datascript.query.zip = (function datascript$query$zip(var_args){
var G__64194 = arguments.length;
switch (G__64194) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___64581 = arguments.length;
var i__5750__auto___64582 = (0);
while(true){
if((i__5750__auto___64582 < len__5749__auto___64581)){
args_arr__5774__auto__.push((arguments[i__5750__auto___64582]));

var G__64583 = (i__5750__auto___64582 + (1));
i__5750__auto___64582 = G__64583;
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
(datascript.query.zip.cljs$lang$applyTo = (function (seq64191){
var G__64192 = cljs.core.first(seq64191);
var seq64191__$1 = cljs.core.next(seq64191);
var G__64193 = cljs.core.first(seq64191__$1);
var seq64191__$2 = cljs.core.next(seq64191__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64192,G__64193,seq64191__$2);
}));

(datascript.query.zip.cljs$lang$maxFixedArity = (2));

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (((cljs.core.every_QMARK_((function (p1__64196_SHARP_){
return cljs.core.contains_QMARK_(b,p1__64196_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__64197_SHARP_){
return cljs.core.contains_QMARK_(b,p1__64197_SHARP_);
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
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__64199){
var vec__64200 = p__64199;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64200,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64200,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__64204){
var vec__64205 = p__64204;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64205,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64205,(1),null);
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
var n__5616__auto___64586 = l1;
var i_64587 = (0);
while(true){
if((i_64587 < n__5616__auto___64586)){
(res[i_64587] = (t1[(idxs1[i_64587])]));

var G__64588 = (i_64587 + (1));
i_64587 = G__64588;
continue;
} else {
}
break;
}

var n__5616__auto___64589 = l2;
var i_64590 = (0);
while(true){
if((i_64590 < n__5616__auto___64589)){
(res[(l1 + i_64590)] = (t2[(idxs2[i_64590])]));

var G__64591 = (i_64590 + (1));
i_64590 = G__64591;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__64212 = a;
var map__64212__$1 = cljs.core.__destructure_map(map__64212);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64212__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__64213 = b;
var map__64213__$1 = cljs.core.__destructure_map(map__64213);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64213__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64213__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__5503__auto__ = (function datascript$query$sum_rel_$_iter__64215(s__64216){
return (new cljs.core.LazySeq(null,(function (){
var s__64216__$1 = s__64216;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64216__$1);
if(temp__5825__auto__){
var s__64216__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64216__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64216__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64218 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64217 = (0);
while(true){
if((i__64217 < size__5502__auto__)){
var vec__64220 = cljs.core._nth(c__5501__auto__,i__64217);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64220,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64220,(1),null);
cljs.core.chunk_append(b__64218,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__64594 = (i__64217 + (1));
i__64217 = G__64594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64218),datascript$query$sum_rel_$_iter__64215(cljs.core.chunk_rest(s__64216__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64218),null);
}
} else {
var vec__64223 = cljs.core.first(s__64216__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64223,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64223,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__64215(cljs.core.rest(s__64216__$2)));
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
var seq__64226_64595 = cljs.core.seq(idxb__GT_idxa);
var chunk__64227_64596 = null;
var count__64228_64597 = (0);
var i__64229_64598 = (0);
while(true){
if((i__64229_64598 < count__64228_64597)){
var vec__64238_64599 = chunk__64227_64596.cljs$core$IIndexed$_nth$arity$2(null,i__64229_64598);
var idx_b_64600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64238_64599,(0),null);
var idx_a_64601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64238_64599,(1),null);
(tuple_SINGLEQUOTE_[idx_a_64601] = (tuple_b[idx_b_64600]));


var G__64602 = seq__64226_64595;
var G__64603 = chunk__64227_64596;
var G__64604 = count__64228_64597;
var G__64605 = (i__64229_64598 + (1));
seq__64226_64595 = G__64602;
chunk__64227_64596 = G__64603;
count__64228_64597 = G__64604;
i__64229_64598 = G__64605;
continue;
} else {
var temp__5825__auto___64606 = cljs.core.seq(seq__64226_64595);
if(temp__5825__auto___64606){
var seq__64226_64607__$1 = temp__5825__auto___64606;
if(cljs.core.chunked_seq_QMARK_(seq__64226_64607__$1)){
var c__5548__auto___64608 = cljs.core.chunk_first(seq__64226_64607__$1);
var G__64609 = cljs.core.chunk_rest(seq__64226_64607__$1);
var G__64610 = c__5548__auto___64608;
var G__64611 = cljs.core.count(c__5548__auto___64608);
var G__64612 = (0);
seq__64226_64595 = G__64609;
chunk__64227_64596 = G__64610;
count__64228_64597 = G__64611;
i__64229_64598 = G__64612;
continue;
} else {
var vec__64241_64613 = cljs.core.first(seq__64226_64607__$1);
var idx_b_64614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64241_64613,(0),null);
var idx_a_64615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64241_64613,(1),null);
(tuple_SINGLEQUOTE_[idx_a_64615] = (tuple_b[idx_b_64614]));


var G__64616 = cljs.core.next(seq__64226_64607__$1);
var G__64617 = null;
var G__64618 = (0);
var G__64619 = (0);
seq__64226_64595 = G__64616;
chunk__64227_64596 = G__64617;
count__64228_64597 = G__64618;
i__64229_64598 = G__64619;
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
var G__64245 = (function (){var G__64247 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__64248 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__64247,G__64248) : datascript.query.sum_rel.call(null,G__64247,G__64248));
})();
var G__64246 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__64245,G__64246) : datascript.query.sum_rel.call(null,G__64245,G__64246));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__64251 = arguments.length;
switch (G__64251) {
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

var datascript$query$IBinding$in__GT_rel$dyn_64623 = (function (binding,value){
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
return datascript$query$IBinding$in__GT_rel$dyn_64623(binding,value);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64256_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__64256_SHARP_);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__64258_SHARP_,p2__64259_SHARP_){
return datascript.query.in__GT_rel(p1__64258_SHARP_,p2__64259_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__64263){
var vec__64264 = p__64263;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64264,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64264,(1),null);
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Extra inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64268_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64268_SHARP_));
}),bindings)], 0)),", got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Too few inputs passed, expected: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64269_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__64269_SHARP_));
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

var G__64626 = (i + (1));
i = G__64626;
continue;
} else {
return ((function (i,getters_arr,n){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters_arr.map(((function (i,getters_arr,n){
return (function (p1__64272_SHARP_){
return (p1__64272_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__64272_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__64272_SHARP_.call(null,tuple));
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
var map__64279 = a;
var map__64279__$1 = cljs.core.__destructure_map(map__64279);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64279__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64279__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__64280 = b;
var map__64280__$1 = cljs.core.__destructure_map(map__64280);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64280__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64280__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = cljs.core.vec(datascript.query.intersect_keys(attrs_a,attrs_b));
var key_fn_b = datascript.query.tuple_key_fn(attrs_b,attrs);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var key_fn_a = datascript.query.tuple_key_fn(attrs_a,attrs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__64277_SHARP_){
return ((function (){var G__64281 = key_fn_a(p1__64277_SHARP_);
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__64281) : hash.call(null,G__64281));
})() == null);
}),tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64282_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__64282_SHARP_,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (datascript.query.free_var_QMARK_(p1__64282_SHARP_)))){
return null;
} else {
return p1__64282_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__64284){
var vec__64285 = p__64284;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64285,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64285,(1),null);
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
var G__64627 = cljs.core.next(tuple__$1);
var G__64628 = cljs.core.next(pattern__$1);
tuple__$1 = G__64627;
pattern__$1 = G__64628;
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
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64290_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__64290_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__64291){
var vec__64292 = p__64291;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64292,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64292,(1),null);
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
var G__64631 = cljs.core.next(rels__$1);
var G__64632 = datascript.query.hash_join(rel,new_rel__$1);
var G__64633 = acc;
rels__$1 = G__64631;
new_rel__$1 = G__64632;
acc = G__64633;
continue;
} else {
var G__64634 = cljs.core.next(rels__$1);
var G__64635 = new_rel__$1;
var G__64636 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__64634;
new_rel__$1 = G__64635;
acc = G__64636;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__64298_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__64298_SHARP_),sym)){
return p1__64298_SHARP_;
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
return (tuple[(function (){var fexpr__64299 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__64299.cljs$core$IFn$_invoke$arity$1 ? fexpr__64299.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__64299.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__64300_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__64300_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64302_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__64302_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__64303_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__64303_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__5616__auto___64637 = len;
var i_64638 = (0);
while(true){
if((i_64638 < n__5616__auto___64637)){
var arg_64639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_64638);
if((arg_64639 instanceof cljs.core.Symbol)){
var temp__5827__auto___64640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_64639);
if((temp__5827__auto___64640 == null)){
(tuples_args[i_64638] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_64639));
} else {
var source_64641 = temp__5827__auto___64640;
(static_args[i_64638] = source_64641);
}
} else {
(static_args[i_64638] = arg_64639);
}

var G__64642 = (i_64638 + (1));
i_64638 = G__64642;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__5616__auto___64643 = len;
var i_64644 = (0);
while(true){
if((i_64644 < n__5616__auto___64643)){
var temp__5829__auto___64645 = (tuples_args[i_64644]);
if((temp__5829__auto___64645 == null)){
} else {
var tuple_idx_64646 = temp__5829__auto___64645;
var v_64647 = (tuple[tuple_idx_64646]);
(args__$1[i_64644] = v_64647);
}

var G__64648 = (i_64644 + (1));
i_64644 = G__64648;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__5616__auto___64649 = len;
var i_64650 = (0);
while(true){
if((i_64650 < n__5616__auto___64649)){
var temp__5829__auto___64651 = (tuples_args[i_64650]);
if((temp__5829__auto___64651 == null)){
} else {
var tuple_idx_64652 = temp__5829__auto___64651;
var v_64653 = (tuple[tuple_idx_64652]);
(static_args[i_64650] = v_64653);
}

var G__64654 = (i_64650 + (1));
i_64650 = G__64654;
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
var vec__64307 = clause;
var vec__64310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64307,(0),null);
var seq__64311 = cljs.core.seq(vec__64310);
var first__64312 = cljs.core.first(seq__64311);
var seq__64311__$1 = cljs.core.next(seq__64311);
var f = first__64312;
var args = seq__64311__$1;
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
var vec__64313 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64313,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64313,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__64306_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__64306_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__64317 = clause;
var vec__64320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64317,(0),null);
var seq__64321 = cljs.core.seq(vec__64320);
var first__64322 = cljs.core.first(seq__64321);
var seq__64321__$1 = cljs.core.next(seq__64321);
var f = first__64322;
var args = seq__64321__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64317,(1),null);
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
var vec__64323 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64323,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64323,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__5503__auto__ = (function datascript$query$bind_by_fn_$_iter__64326(s__64327){
return (new cljs.core.LazySeq(null,(function (){
var s__64327__$1 = s__64327;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64327__$1);
if(temp__5825__auto__){
var s__64327__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64327__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64327__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64329 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64328 = (0);
while(true){
if((i__64328 < size__5502__auto__)){
var tuple = cljs.core._nth(c__5501__auto__,i__64328);
var val = tuple_fn(tuple);
if((!((val == null)))){
cljs.core.chunk_append(b__64329,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__64657 = (i__64328 + (1));
i__64328 = G__64657;
continue;
} else {
var G__64658 = (i__64328 + (1));
i__64328 = G__64658;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64329),datascript$query$bind_by_fn_$_iter__64326(cljs.core.chunk_rest(s__64327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64329),null);
}
} else {
var tuple = cljs.core.first(s__64327__$2);
var val = tuple_fn(tuple);
if((!((val == null)))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__64326(cljs.core.rest(s__64327__$2)));
} else {
var G__64659 = cljs.core.rest(s__64327__$2);
s__64327__$1 = G__64659;
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
var vec__64333 = clause;
var seq__64334 = cljs.core.seq(vec__64333);
var first__64335 = cljs.core.first(seq__64334);
var seq__64334__$1 = cljs.core.next(seq__64334);
var rule = first__64335;
var call_args = seq__64334__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__5503__auto__ = (function datascript$query$expand_rule_$_iter__64336(s__64337){
return (new cljs.core.LazySeq(null,(function (){
var s__64337__$1 = s__64337;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64337__$1);
if(temp__5825__auto__){
var s__64337__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64337__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64337__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64339 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64338 = (0);
while(true){
if((i__64338 < size__5502__auto__)){
var branch = cljs.core._nth(c__5501__auto__,i__64338);
var vec__64340 = branch;
var seq__64341 = cljs.core.seq(vec__64340);
var first__64342 = cljs.core.first(seq__64341);
var seq__64341__$1 = cljs.core.next(seq__64341);
var vec__64343 = first__64342;
var seq__64344 = cljs.core.seq(vec__64343);
var first__64345 = cljs.core.first(seq__64344);
var seq__64344__$1 = cljs.core.next(seq__64344);
var _ = first__64345;
var rule_args = seq__64344__$1;
var clauses = seq__64341__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__64339,clojure.walk.postwalk(((function (i__64338,vec__64340,seq__64341,first__64342,seq__64341__$1,vec__64343,seq__64344,first__64345,seq__64344__$1,_,rule_args,clauses,replacements,branch,c__5501__auto__,size__5502__auto__,b__64339,s__64337__$2,temp__5825__auto__,vec__64333,seq__64334,first__64335,seq__64334__$1,rule,call_args,seqid,branches){
return (function (p1__64332_SHARP_){
if(datascript.query.free_var_QMARK_(p1__64332_SHARP_)){
var x__59907__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__64332_SHARP_) : replacements.call(null,p1__64332_SHARP_));
if((x__59907__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__64332_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__59907__auto__;
}
} else {
return p1__64332_SHARP_;
}
});})(i__64338,vec__64340,seq__64341,first__64342,seq__64341__$1,vec__64343,seq__64344,first__64345,seq__64344__$1,_,rule_args,clauses,replacements,branch,c__5501__auto__,size__5502__auto__,b__64339,s__64337__$2,temp__5825__auto__,vec__64333,seq__64334,first__64335,seq__64334__$1,rule,call_args,seqid,branches))
,clauses));

var G__64661 = (i__64338 + (1));
i__64338 = G__64661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64339),datascript$query$expand_rule_$_iter__64336(cljs.core.chunk_rest(s__64337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64339),null);
}
} else {
var branch = cljs.core.first(s__64337__$2);
var vec__64346 = branch;
var seq__64347 = cljs.core.seq(vec__64346);
var first__64348 = cljs.core.first(seq__64347);
var seq__64347__$1 = cljs.core.next(seq__64347);
var vec__64349 = first__64348;
var seq__64350 = cljs.core.seq(vec__64349);
var first__64351 = cljs.core.first(seq__64350);
var seq__64350__$1 = cljs.core.next(seq__64350);
var _ = first__64351;
var rule_args = seq__64350__$1;
var clauses = seq__64347__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__64346,seq__64347,first__64348,seq__64347__$1,vec__64349,seq__64350,first__64351,seq__64350__$1,_,rule_args,clauses,replacements,branch,s__64337__$2,temp__5825__auto__,vec__64333,seq__64334,first__64335,seq__64334__$1,rule,call_args,seqid,branches){
return (function (p1__64332_SHARP_){
if(datascript.query.free_var_QMARK_(p1__64332_SHARP_)){
var x__59907__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__64332_SHARP_) : replacements.call(null,p1__64332_SHARP_));
if((x__59907__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(p1__64332_SHARP_),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__59907__auto__;
}
} else {
return p1__64332_SHARP_;
}
});})(vec__64346,seq__64347,first__64348,seq__64347__$1,vec__64349,seq__64350,first__64351,seq__64350__$1,_,rule_args,clauses,replacements,branch,s__64337__$2,temp__5825__auto__,vec__64333,seq__64334,first__64335,seq__64334__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__64336(cljs.core.rest(s__64337__$2)));
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
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__64352){
var vec__64353 = p__64352;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64353,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64353,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__64356 = rule_clause;
var seq__64357 = cljs.core.seq(vec__64356);
var first__64358 = cljs.core.first(seq__64357);
var seq__64357__$1 = cljs.core.next(seq__64357);
var rule = first__64358;
var call_args = seq__64357__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__5503__auto__ = (function datascript$query$rule_gen_guards_$_iter__64359(s__64360){
return (new cljs.core.LazySeq(null,(function (){
var s__64360__$1 = s__64360;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64360__$1);
if(temp__5825__auto__){
var s__64360__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64360__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64360__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64362 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64361 = (0);
while(true){
if((i__64361 < size__5502__auto__)){
var prev_args = cljs.core._nth(c__5501__auto__,i__64361);
var vec__64363 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64363,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64363,(1),null);
cljs.core.chunk_append(b__64362,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__64666 = (i__64361 + (1));
i__64361 = G__64666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64362),datascript$query$rule_gen_guards_$_iter__64359(cljs.core.chunk_rest(s__64360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64362),null);
}
} else {
var prev_args = cljs.core.first(s__64360__$2);
var vec__64366 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64366,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64366,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__64359(cljs.core.rest(s__64360__$2)));
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
clojure.walk.postwalk((function (p1__64369_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__64369_SHARP_) : pred.call(null,p1__64369_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__64369_SHARP_);
} else {
}

return p1__64369_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__64370){
var vec__64371 = p__64370;
var vec__64374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64371,(0),null);
var seq__64375 = cljs.core.seq(vec__64374);
var first__64376 = cljs.core.first(seq__64375);
var seq__64375__$1 = cljs.core.next(seq__64375);
var _ = first__64376;
var vars = seq__64375__$1;
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
return cljs.core.some((function (p1__64377_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__64377_SHARP_));
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
var vec__64399 = cljs.core.split_with(((function (stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__64378_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__64378_SHARP_)));
});})(stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64399,(0),null);
var vec__64402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64399,(1),null);
var seq__64403 = cljs.core.seq(vec__64402);
var first__64404 = cljs.core.first(seq__64403);
var seq__64403__$1 = cljs.core.next(seq__64403);
var rule_clause = first__64404;
var next_clauses = seq__64403__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__64667 = cljs.core.next(stack);
var G__64668 = datascript.query.sum_rel(rel,new_rel);
stack = G__64667;
rel = G__64668;
continue;
} else {
var vec__64405 = rule_clause;
var seq__64406 = cljs.core.seq(vec__64405);
var first__64407 = cljs.core.first(seq__64406);
var seq__64406__$1 = cljs.core.next(seq__64406);
var rule = first__64407;
var call_args = seq__64406__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__64408 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64408,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64408,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__64405,seq__64406,first__64407,seq__64406__$1,rule,call_args,guards,vec__64408,active_gs,pending_gs,vec__64399,clauses,vec__64402,seq__64403,first__64404,seq__64403__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__64379_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__64379_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__64405,seq__64406,first__64407,seq__64406__$1,rule,call_args,guards,vec__64408,active_gs,pending_gs,vec__64399,clauses,vec__64402,seq__64403,first__64404,seq__64403__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__64671 = cljs.core.next(stack);
var G__64672 = rel;
stack = G__64671;
rel = G__64672;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__64673 = cljs.core.next(stack);
var G__64674 = rel;
stack = G__64673;
rel = G__64674;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__64675 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5503__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__64405,seq__64406,first__64407,seq__64406__$1,rule,call_args,guards,vec__64408,active_gs,pending_gs,vec__64399,clauses,vec__64402,seq__64403,first__64404,seq__64403__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__64412(s__64413){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__64405,seq__64406,first__64407,seq__64406__$1,rule,call_args,guards,vec__64408,active_gs,pending_gs,vec__64399,clauses,vec__64402,seq__64403,first__64404,seq__64403__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__64413__$1 = s__64413;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64413__$1);
if(temp__5825__auto__){
var s__64413__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64413__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64413__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64415 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64414 = (0);
while(true){
if((i__64414 < size__5502__auto__)){
var branch = cljs.core._nth(c__5501__auto__,i__64414);
cljs.core.chunk_append(b__64415,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__64677 = (i__64414 + (1));
i__64414 = G__64677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64415),datascript$query$solve_rule_$_iter__64412(cljs.core.chunk_rest(s__64413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64415),null);
}
} else {
var branch = cljs.core.first(s__64413__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__64412(cljs.core.rest(s__64413__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__64405,seq__64406,first__64407,seq__64406__$1,rule,call_args,guards,vec__64408,active_gs,pending_gs,vec__64399,clauses,vec__64402,seq__64403,first__64404,seq__64403__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__64405,seq__64406,first__64407,seq__64406__$1,rule,call_args,guards,vec__64408,active_gs,pending_gs,vec__64399,clauses,vec__64402,seq__64403,first__64404,seq__64403__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__5503__auto__(branches);
})(),cljs.core.next(stack));
var G__64676 = rel;
stack = G__64675;
rel = G__64676;
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
var vec__64417 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64417,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64417,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64417,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64417,(3),null);
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
var vec__64430 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64430,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64430,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64430,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64430,(3),null);
var G__64437 = cljs.core.PersistentHashSet.EMPTY;
var G__64437__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64437,e):G__64437);
var G__64437__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64437__$1,tx):G__64437__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__64437__$2,v);
} else {
return G__64437__$2;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__64439_SHARP_){
return datascript.query.limit_rel(p1__64439_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__64441_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__64441_SHARP_));
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
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64442_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__64442_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0))," in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__64444 = cljs.core.seq(branches);
var chunk__64445 = null;
var count__64446 = (0);
var i__64447 = (0);
while(true){
if((i__64447 < count__64446)){
var branch = chunk__64445.cljs$core$IIndexed$_nth$arity$2(null,i__64447);
var temp__5829__auto___64686 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___64686 == null)){
} else {
var missing_64687 = temp__5829__auto___64686;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_64687], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_64687], null));
}


var G__64688 = seq__64444;
var G__64689 = chunk__64445;
var G__64690 = count__64446;
var G__64691 = (i__64447 + (1));
seq__64444 = G__64688;
chunk__64445 = G__64689;
count__64446 = G__64690;
i__64447 = G__64691;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__64444);
if(temp__5825__auto__){
var seq__64444__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64444__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__64444__$1);
var G__64692 = cljs.core.chunk_rest(seq__64444__$1);
var G__64693 = c__5548__auto__;
var G__64694 = cljs.core.count(c__5548__auto__);
var G__64695 = (0);
seq__64444 = G__64692;
chunk__64445 = G__64693;
count__64446 = G__64694;
i__64447 = G__64695;
continue;
} else {
var branch = cljs.core.first(seq__64444__$1);
var temp__5829__auto___64696 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___64696 == null)){
} else {
var missing_64697 = temp__5829__auto___64696;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["All clauses in 'or' must use same set of free vars, had ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_64697], 0))," not bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_64697], null));
}


var G__64698 = cljs.core.next(seq__64444__$1);
var G__64699 = null;
var G__64700 = (0);
var G__64701 = (0);
seq__64444 = G__64698;
chunk__64445 = G__64699;
count__64446 = G__64700;
i__64447 = G__64701;
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
var G__64470 = arguments.length;
switch (G__64470) {
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
var pred__64474 = datascript.query.looks_like_QMARK_;
var expr__64475 = clause;
if(cljs.core.truth_((function (){var G__64481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__64482 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64481,G__64482) : pred__64474.call(null,G__64481,G__64482));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__64483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__64484 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64483,G__64484) : pred__64474.call(null,G__64483,G__64484));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__64485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64486 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64485,G__64486) : pred__64474.call(null,G__64485,G__64486));
})())){
var vec__64487 = clause;
var seq__64488 = cljs.core.seq(vec__64487);
var first__64489 = cljs.core.first(seq__64488);
var seq__64488__$1 = cljs.core.next(seq__64488);
var source_sym = first__64489;
var rest = seq__64488__$1;
var _STAR_implicit_source_STAR__orig_val__64490 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__64491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__64491);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__64490);
}} else {
if(cljs.core.truth_((function (){var G__64492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64493 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64492,G__64493) : pred__64474.call(null,G__64492,G__64493));
})())){
var vec__64494 = clause;
var seq__64495 = cljs.core.seq(vec__64494);
var first__64496 = cljs.core.first(seq__64495);
var seq__64495__$1 = cljs.core.next(seq__64495);
var _ = first__64496;
var branches = seq__64495__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__64494,seq__64495,first__64496,seq__64495__$1,_,branches,___$1,pred__64474,expr__64475){
return (function (p1__64460_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__64460_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__64460_SHARP_));
});})(context,clause,orig_clause,vec__64494,seq__64495,first__64496,seq__64495__$1,_,branches,___$1,pred__64474,expr__64475))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__64494,seq__64495,first__64496,seq__64495__$1,_,branches,___$1,contexts,pred__64474,expr__64475){
return (function (p1__64461_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__64461_SHARP_));
});})(context,clause,orig_clause,vec__64494,seq__64495,first__64496,seq__64495__$1,_,branches,___$1,contexts,pred__64474,expr__64475))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__64497 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64498 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64497,G__64498) : pred__64474.call(null,G__64497,G__64498));
})())){
var vec__64499 = clause;
var seq__64500 = cljs.core.seq(vec__64499);
var first__64501 = cljs.core.first(seq__64500);
var seq__64500__$1 = cljs.core.next(seq__64500);
var _ = first__64501;
var first__64501__$1 = cljs.core.first(seq__64500__$1);
var seq__64500__$2 = cljs.core.next(seq__64500__$1);
var vec__64502 = first__64501__$1;
var seq__64503 = cljs.core.seq(vec__64502);
var first__64504 = cljs.core.first(seq__64503);
var seq__64503__$1 = cljs.core.next(seq__64503);
var req_vars = first__64504;
var vars = seq__64503__$1;
var branches = seq__64500__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__64714 = context;
var G__64715 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__64716 = clause;
context = G__64714;
clause = G__64715;
orig_clause = G__64716;
continue;
} else {
if(cljs.core.truth_((function (){var G__64505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64506 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64505,G__64506) : pred__64474.call(null,G__64505,G__64506));
})())){
var vec__64507 = clause;
var seq__64508 = cljs.core.seq(vec__64507);
var first__64509 = cljs.core.first(seq__64508);
var seq__64508__$1 = cljs.core.next(seq__64508);
var _ = first__64509;
var first__64509__$1 = cljs.core.first(seq__64508__$1);
var seq__64508__$2 = cljs.core.next(seq__64508__$1);
var vars = first__64509__$1;
var branches = seq__64508__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__64507,seq__64508,first__64509,seq__64508__$1,_,first__64509__$1,seq__64508__$2,vars,branches,vars__$1,___$1,join_context,pred__64474,expr__64475){
return (function (p1__64462_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__64462_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__64462_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__64507,seq__64508,first__64509,seq__64508__$1,_,first__64509__$1,seq__64508__$2,vars,branches,vars__$1,___$1,join_context,pred__64474,expr__64475))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__64507,seq__64508,first__64509,seq__64508__$1,_,first__64509__$1,seq__64508__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__64474,expr__64475){
return (function (p1__64463_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__64463_SHARP_));
});})(context,clause,orig_clause,vec__64507,seq__64508,first__64509,seq__64508__$1,_,first__64509__$1,seq__64508__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__64474,expr__64475))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__64510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64511 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64510,G__64511) : pred__64474.call(null,G__64510,G__64511));
})())){
var vec__64512 = clause;
var seq__64513 = cljs.core.seq(vec__64512);
var first__64514 = cljs.core.first(seq__64513);
var seq__64513__$1 = cljs.core.next(seq__64513);
var _ = first__64514;
var clauses = seq__64513__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__64515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64516 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64515,G__64516) : pred__64474.call(null,G__64515,G__64516));
})())){
var vec__64517 = clause;
var seq__64518 = cljs.core.seq(vec__64517);
var first__64519 = cljs.core.first(seq__64518);
var seq__64518__$1 = cljs.core.next(seq__64518);
var _ = first__64519;
var clauses = seq__64518__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0))," is bound in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__64520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64521 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64520,G__64521) : pred__64474.call(null,G__64520,G__64521));
})())){
var vec__64522 = clause;
var seq__64523 = cljs.core.seq(vec__64522);
var first__64524 = cljs.core.first(seq__64523);
var seq__64523__$1 = cljs.core.next(seq__64523);
var _ = first__64524;
var first__64524__$1 = cljs.core.first(seq__64523__$1);
var seq__64523__$2 = cljs.core.next(seq__64523__$1);
var vars = first__64524__$1;
var clauses = seq__64523__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__64525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__64526 = expr__64475;
return (pred__64474.cljs$core$IFn$_invoke$arity$2 ? pred__64474.cljs$core$IFn$_invoke$arity$2(G__64525,G__64526) : pred__64474.call(null,G__64525,G__64526));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR__orig_val__64527 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__64528 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__64528);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__64527);
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__64475)].join('')));
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
var _STAR_implicit_source_STAR__orig_val__64530 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__64531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__64531);

try{var G__64532 = context;
var G__64533 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__64532,G__64533) : datascript.query.resolve_clause.call(null,G__64532,G__64533));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__64530);
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__64534 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__64535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__64535);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__64534);
}});
datascript.query._collect_tuples = (function datascript$query$_collect_tuples(acc,rel,len,copy_map){
return cljs.core.__GT_Eduction(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t1){
return cljs.core.__GT_Eduction(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t2){
var res = cljs.core.aclone(t1);
var n__5616__auto___64724 = len;
var i_64728 = (0);
while(true){
if((i_64728 < n__5616__auto___64724)){
var temp__5829__auto___64729 = (copy_map[i_64728]);
if((temp__5829__auto___64729 == null)){
} else {
var idx_64730 = temp__5829__auto___64729;
(res[i_64728] = (t2[idx_64730]));
}

var G__64731 = (i_64728 + (1));
i_64728 = G__64731;
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
var G__64538 = arguments.length;
switch (G__64538) {
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
var G__64737 = acc;
var G__64738 = cljs.core.next(rels);
var G__64739 = symbols;
acc = G__64737;
rels = G__64738;
symbols = G__64739;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__64536_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__64536_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count(symbols);
var G__64740 = datascript.query._collect_tuples(acc,rel,len,copy_map);
var G__64741 = cljs.core.next(rels);
var G__64742 = symbols;
acc = G__64740;
rels = G__64741;
symbols = G__64742;
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

var datascript$query$IContextResolve$_context_resolve$dyn_64743 = (function (var$,context){
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
return datascript$query$IContextResolve$_context_resolve$dyn_64743(var$,context);
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
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64539_SHARP_){
return datascript.query._context_resolve(p1__64539_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64540_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__64540_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__64541_SHARP_,p2__64542_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__64541_SHARP_) : pred.call(null,p1__64541_SHARP_)))){
return p2__64542_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64543_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__64543_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__5503__auto__ = (function datascript$query$aggregate_$_iter__64544(s__64545){
return (new cljs.core.LazySeq(null,(function (){
var s__64545__$1 = s__64545;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64545__$1);
if(temp__5825__auto__){
var s__64545__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64545__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64545__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64547 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64546 = (0);
while(true){
if((i__64546 < size__5502__auto__)){
var vec__64548 = cljs.core._nth(c__5501__auto__,i__64546);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64548,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64548,(1),null);
cljs.core.chunk_append(b__64547,datascript.query._aggregate(find_elements,context,tuples));

var G__64744 = (i__64546 + (1));
i__64546 = G__64744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64547),datascript$query$aggregate_$_iter__64544(cljs.core.chunk_rest(s__64545__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64547),null);
}
} else {
var vec__64551 = cljs.core.first(s__64545__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64551,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64551,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__64544(cljs.core.rest(s__64545__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__64554_SHARP_,p2__64555_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__64554_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__64555_SHARP_) : f.call(null,p2__64555_SHARP_)));
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

var datascript$query$IPostProcess$_post_process$dyn_64745 = (function (find,return_map,tuples){
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
return datascript$query$IPostProcess$_post_process$dyn_64745(find,return_map,tuples);
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
var resolved = (function (){var iter__5503__auto__ = (function datascript$query$pull_$_iter__64556(s__64557){
return (new cljs.core.LazySeq(null,(function (){
var s__64557__$1 = s__64557;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64557__$1);
if(temp__5825__auto__){
var s__64557__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64557__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64557__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64559 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64558 = (0);
while(true){
if((i__64558 < size__5502__auto__)){
var find = cljs.core._nth(c__5501__auto__,i__64558);
cljs.core.chunk_append(b__64559,((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null));

var G__64752 = (i__64558 + (1));
i__64558 = G__64752;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64559),datascript$query$pull_$_iter__64556(cljs.core.chunk_rest(s__64557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64559),null);
}
} else {
var find = cljs.core.first(s__64557__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null),datascript$query$pull_$_iter__64556(cljs.core.rest(s__64557__$2)));
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
var iter__5503__auto__ = (function datascript$query$pull_$_iter__64560(s__64561){
return (new cljs.core.LazySeq(null,(function (){
var s__64561__$1 = s__64561;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64561__$1);
if(temp__5825__auto__){
var s__64561__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64561__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64561__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64563 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64562 = (0);
while(true){
if((i__64562 < size__5502__auto__)){
var tuple = cljs.core._nth(c__5501__auto__,i__64562);
cljs.core.chunk_append(b__64563,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__64562,tuple,c__5501__auto__,size__5502__auto__,b__64563,s__64561__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(i__64562,tuple,c__5501__auto__,size__5502__auto__,b__64563,s__64561__$2,temp__5825__auto__,resolved))
,resolved,tuple));

var G__64753 = (i__64562 + (1));
i__64562 = G__64753;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64563),datascript$query$pull_$_iter__64560(cljs.core.chunk_rest(s__64561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64563),null);
}
} else {
var tuple = cljs.core.first(s__64561__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__64561__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(tuple,s__64561__$2,temp__5825__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__64560(cljs.core.rest(s__64561__$2)));
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
var len__5749__auto___64754 = arguments.length;
var i__5750__auto___64755 = (0);
while(true){
if((i__5750__auto___64755 < len__5749__auto___64754)){
args__5755__auto__.push((arguments[i__5750__auto___64755]));

var G__64756 = (i__5750__auto___64755 + (1));
i__5750__auto___64755 = G__64756;
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
var q__$1 = (function (){var G__64567 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__64567);
} else {
return G__64567;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__64568 = resultset;
var G__64568__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__64564_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__64564_SHARP_,(0),result_arity));
}),G__64568):G__64568);
var G__64568__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__64568__$1):G__64568__$1);
var G__64568__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__64568__$2):G__64568__$2);
return datascript.query._post_process(find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__64568__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq64565){
var G__64566 = cljs.core.first(seq64565);
var seq64565__$1 = cljs.core.next(seq64565);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64566,seq64565__$1);
}));


//# sourceMappingURL=datascript.query.js.map
