goog.provide('datascript.parser');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

var datascript$parser$ITraversable$_collect$dyn_64150 = (function (_,pred,acc){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (datascript.parser._collect[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__5374__auto__.call(null,_,pred,acc));
} else {
var m__5372__auto__ = (datascript.parser._collect["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__5372__auto__.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
});
datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
return datascript$parser$ITraversable$_collect$dyn_64150(_,pred,acc);
}
});

var datascript$parser$ITraversable$_collect_vars$dyn_64155 = (function (_,acc){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__5374__auto__.call(null,_,acc));
} else {
var m__5372__auto__ = (datascript.parser._collect_vars["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__5372__auto__.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
});
datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
return datascript$parser$ITraversable$_collect_vars$dyn_64155(_,acc);
}
});

var datascript$parser$ITraversable$_postwalk$dyn_64156 = (function (_,f){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (datascript.parser._postwalk[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5374__auto__.call(null,_,f));
} else {
var m__5372__auto__ = (datascript.parser._postwalk["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5372__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
});
datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
return datascript$parser$ITraversable$_postwalk$dyn_64156(_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__63263_SHARP_,p2__63262_SHARP_){
var temp__5823__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__63262_SHARP_) : parse_el.call(null,p2__63262_SHARP_));
if(cljs.core.truth_(temp__5823__auto__)){
var parsed = temp__5823__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__63263_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__63267 = arguments.length;
switch (G__63267) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form,cljs.core.PersistentVector.EMPTY);
}));

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form) : pred.call(null,form)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect(form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,form__$1){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
}));

(datascript.parser.collect.cljs$lang$maxFixedArity = 3);

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__5025__auto__ = cljs.core.empty_QMARK_(coll);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__63277 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63277) : f.call(null,G__63277));
} else {
if(cljs.core.map_QMARK_(form)){
var G__63278 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__63279){
var vec__63280 = p__63279;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63280,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63278) : f.call(null,G__63278));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__63283 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63274_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__63274_SHARP_,f) : datascript.parser.postwalk.call(null,p1__63274_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63283) : f.call(null,G__63283));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__63284 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63275_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__63275_SHARP_,f) : datascript.parser.postwalk.call(null,p1__63275_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__63284) : f.call(null,G__63284));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form));

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta(obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__5025__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return obj;
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63289,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63293 = k63289;
switch (G__63293) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63289,else__5326__auto__);

}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63295){
var vec__63296 = p__63295;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63296,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63296,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Placeholder{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63288){
var self__ = this;
var G__63288__$1 = this;
return (new cljs.core.RecordIter((0),G__63288__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63290,other63291){
var self__ = this;
var this63290__$1 = this;
return (((!((other63291 == null)))) && ((((this63290__$1.constructor === other63291.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63290__$1.__extmap,other63291.__extmap)))));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63289){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k63289);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63288){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63302 = cljs.core.keyword_identical_QMARK_;
var expr__63303 = k__5332__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63288),null));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63288){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Placeholder(G__63288,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63285){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63286,acc63287){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63287;
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63287){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63287;
}));

(datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.Placeholder.cljs$lang$type = true);

(datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
}));

(datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Placeholder");
}));

/**
 * Positional factory function for datascript.parser/Placeholder.
 */
datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

/**
 * Factory function for datascript.parser/Placeholder, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__63292){
var extmap__5365__auto__ = (function (){var G__63306 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__63292);
if(cljs.core.record_QMARK_(G__63292)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63306);
} else {
return G__63306;
}
})();
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63311,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63315 = k63311;
var G__63315__$1 = (((G__63315 instanceof cljs.core.Keyword))?G__63315.fqn:null);
switch (G__63315__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63311,else__5326__auto__);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63316){
var vec__63317 = p__63316;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63317,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63317,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Variable{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63310){
var self__ = this;
var G__63310__$1 = this;
return (new cljs.core.RecordIter((0),G__63310__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63312,other63313){
var self__ = this;
var this63312__$1 = this;
return (((!((other63313 == null)))) && ((((this63312__$1.constructor === other63313.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63312__$1.symbol,other63313.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63312__$1.__extmap,other63313.__extmap)))))));
}));

(datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63311){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63320 = k63311;
var G__63320__$1 = (((G__63320 instanceof cljs.core.Keyword))?G__63320.fqn:null);
switch (G__63320__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63311);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63310){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63325 = cljs.core.keyword_identical_QMARK_;
var expr__63326 = k__5332__auto__;
if(cljs.core.truth_((pred__63325.cljs$core$IFn$_invoke$arity$2 ? pred__63325.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__63326) : pred__63325.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__63326)))){
return (new datascript.parser.Variable(G__63310,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63310),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63310){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__63310,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63307){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f63307),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63308,acc63309){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63308,self__.symbol,acc63309);
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63309){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63309,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc63309,self__.symbol));
}));

(datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.Variable.cljs$lang$type = true);

(datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
}));

(datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Variable");
}));

/**
 * Positional factory function for datascript.parser/Variable.
 */
datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/Variable, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__63314){
var extmap__5365__auto__ = (function (){var G__63330 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63314,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__63314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63330);
} else {
return G__63330;
}
})();
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__63314),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63339,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63343 = k63339;
var G__63343__$1 = (((G__63343 instanceof cljs.core.Keyword))?G__63343.fqn:null);
switch (G__63343__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63339,else__5326__auto__);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63344){
var vec__63345 = p__63344;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63345,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63345,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.SrcVar{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63338){
var self__ = this;
var G__63338__$1 = this;
return (new cljs.core.RecordIter((0),G__63338__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63340,other63341){
var self__ = this;
var this63340__$1 = this;
return (((!((other63341 == null)))) && ((((this63340__$1.constructor === other63341.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63340__$1.symbol,other63341.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63340__$1.__extmap,other63341.__extmap)))))));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63339){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63348 = k63339;
var G__63348__$1 = (((G__63348 instanceof cljs.core.Keyword))?G__63348.fqn:null);
switch (G__63348__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63339);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63338){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63349 = cljs.core.keyword_identical_QMARK_;
var expr__63350 = k__5332__auto__;
if(cljs.core.truth_((pred__63349.cljs$core$IFn$_invoke$arity$2 ? pred__63349.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__63350) : pred__63349.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__63350)))){
return (new datascript.parser.SrcVar(G__63338,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63338),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63338){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__63338,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63335){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f63335),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63336,acc63337){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63336,self__.symbol,acc63337);
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63337){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63337,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc63337,self__.symbol));
}));

(datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.SrcVar.cljs$lang$type = true);

(datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
}));

(datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/SrcVar");
}));

/**
 * Positional factory function for datascript.parser/SrcVar.
 */
datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/SrcVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__63342){
var extmap__5365__auto__ = (function (){var G__63356 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63342,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__63342)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63356);
} else {
return G__63356;
}
})();
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__63342),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63361,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63365 = k63361;
switch (G__63365) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63361,else__5326__auto__);

}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63366){
var vec__63367 = p__63366;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63367,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63367,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63360){
var self__ = this;
var G__63360__$1 = this;
return (new cljs.core.RecordIter((0),G__63360__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63362,other63363){
var self__ = this;
var this63362__$1 = this;
return (((!((other63363 == null)))) && ((((this63362__$1.constructor === other63363.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63362__$1.__extmap,other63363.__extmap)))));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63361){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k63361);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63360){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63376 = cljs.core.keyword_identical_QMARK_;
var expr__63377 = k__5332__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63360),null));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63360){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__63360,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63357){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63358,acc63359){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63359;
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63359){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63359;
}));

(datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.DefaultSrc.cljs$lang$type = true);

(datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
}));

(datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/DefaultSrc");
}));

/**
 * Positional factory function for datascript.parser/DefaultSrc.
 */
datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

/**
 * Factory function for datascript.parser/DefaultSrc, taking a map of keywords to field values.
 */
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__63364){
var extmap__5365__auto__ = (function (){var G__63384 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__63364);
if(cljs.core.record_QMARK_(G__63364)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63384);
} else {
return G__63384;
}
})();
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63389,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63393 = k63389;
switch (G__63393) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63389,else__5326__auto__);

}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63394){
var vec__63395 = p__63394;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63395,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63395,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.RulesVar{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63388){
var self__ = this;
var G__63388__$1 = this;
return (new cljs.core.RecordIter((0),G__63388__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63390,other63391){
var self__ = this;
var this63390__$1 = this;
return (((!((other63391 == null)))) && ((((this63390__$1.constructor === other63391.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63390__$1.__extmap,other63391.__extmap)))));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63389){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k63389);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63388){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63398 = cljs.core.keyword_identical_QMARK_;
var expr__63399 = k__5332__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63388),null));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63388){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.RulesVar(G__63388,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63385){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63386,acc63387){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63387;
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63387){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63387;
}));

(datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.RulesVar.cljs$lang$type = true);

(datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
}));

(datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/RulesVar");
}));

/**
 * Positional factory function for datascript.parser/RulesVar.
 */
datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

/**
 * Factory function for datascript.parser/RulesVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__63392){
var extmap__5365__auto__ = (function (){var G__63405 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__63392);
if(cljs.core.record_QMARK_(G__63392)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63405);
} else {
return G__63405;
}
})();
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63410,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63414 = k63410;
var G__63414__$1 = (((G__63414 instanceof cljs.core.Keyword))?G__63414.fqn:null);
switch (G__63414__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63410,else__5326__auto__);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63415){
var vec__63416 = p__63415;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63416,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63416,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Constant{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63409){
var self__ = this;
var G__63409__$1 = this;
return (new cljs.core.RecordIter((0),G__63409__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63411,other63412){
var self__ = this;
var this63411__$1 = this;
return (((!((other63412 == null)))) && ((((this63411__$1.constructor === other63412.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63411__$1.value,other63412.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63411__$1.__extmap,other63412.__extmap)))))));
}));

(datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63410){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63425 = k63410;
var G__63425__$1 = (((G__63425 instanceof cljs.core.Keyword))?G__63425.fqn:null);
switch (G__63425__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63410);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63409){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63426 = cljs.core.keyword_identical_QMARK_;
var expr__63427 = k__5332__auto__;
if(cljs.core.truth_((pred__63426.cljs$core$IFn$_invoke$arity$2 ? pred__63426.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__63427) : pred__63426.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__63427)))){
return (new datascript.parser.Constant(G__63409,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63409),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63409){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__63409,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63406){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f63406),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63407,acc63408){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63407,self__.value,acc63408);
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63408){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63408,self__.value) : datascript.parser.collect_vars_acc.call(null,acc63408,self__.value));
}));

(datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(datascript.parser.Constant.cljs$lang$type = true);

(datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
}));

(datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Constant");
}));

/**
 * Positional factory function for datascript.parser/Constant.
 */
datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

/**
 * Factory function for datascript.parser/Constant, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__63413){
var extmap__5365__auto__ = (function (){var G__63434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63413,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__63413)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63434);
} else {
return G__63434;
}
})();
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__63413),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63439,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63443 = k63439;
var G__63443__$1 = (((G__63443 instanceof cljs.core.Keyword))?G__63443.fqn:null);
switch (G__63443__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63439,else__5326__auto__);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63444){
var vec__63445 = p__63444;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63445,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63445,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63438){
var self__ = this;
var G__63438__$1 = this;
return (new cljs.core.RecordIter((0),G__63438__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63440,other63441){
var self__ = this;
var this63440__$1 = this;
return (((!((other63441 == null)))) && ((((this63440__$1.constructor === other63441.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63440__$1.symbol,other63441.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63440__$1.__extmap,other63441.__extmap)))))));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63439){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63449 = k63439;
var G__63449__$1 = (((G__63449 instanceof cljs.core.Keyword))?G__63449.fqn:null);
switch (G__63449__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63439);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63438){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63450 = cljs.core.keyword_identical_QMARK_;
var expr__63451 = k__5332__auto__;
if(cljs.core.truth_((pred__63450.cljs$core$IFn$_invoke$arity$2 ? pred__63450.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__63451) : pred__63450.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__63451)))){
return (new datascript.parser.PlainSymbol(G__63438,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63438),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63438){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__63438,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63435){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f63435),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63436,acc63437){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63436,self__.symbol,acc63437);
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63437){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63437,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc63437,self__.symbol));
}));

(datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.PlainSymbol.cljs$lang$type = true);

(datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
}));

(datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/PlainSymbol");
}));

/**
 * Positional factory function for datascript.parser/PlainSymbol.
 */
datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/PlainSymbol, taking a map of keywords to field values.
 */
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__63442){
var extmap__5365__auto__ = (function (){var G__63456 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63442,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__63442)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63456);
} else {
return G__63456;
}
})();
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__63442),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_var_required = (function datascript$parser$parse_var_required(form){
var or__5025__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse var, expected symbol starting with ?, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-var","parser/rule-var",-1584354459),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"$")))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return null;
} else {
return (new datascript.parser.Constant(form,null,null,null));
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if((((form instanceof cljs.core.Symbol)) && (((cljs.core.not(datascript.parser.parse_variable(form))) && (((cljs.core.not(datascript.parser.parse_src_var(form))) && (((cljs.core.not(datascript.parser.parse_rules_var(form))) && (cljs.core.not(datascript.parser.parse_placeholder(form))))))))))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol(form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__5025__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63462,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63471 = k63462;
var G__63471__$1 = (((G__63471 instanceof cljs.core.Keyword))?G__63471.fqn:null);
switch (G__63471__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63462,else__5326__auto__);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63472){
var vec__63473 = p__63472;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63473,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63473,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.RuleVars{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63461){
var self__ = this;
var G__63461__$1 = this;
return (new cljs.core.RecordIter((0),G__63461__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63463,other63464){
var self__ = this;
var this63463__$1 = this;
return (((!((other63464 == null)))) && ((((this63463__$1.constructor === other63464.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63463__$1.required,other63464.required)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63463__$1.free,other63464.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63463__$1.__extmap,other63464.__extmap)))))))));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63462){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63481 = k63462;
var G__63481__$1 = (((G__63481 instanceof cljs.core.Keyword))?G__63481.fqn:null);
switch (G__63481__$1) {
case "required":
case "free":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63462);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63461){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63482 = cljs.core.keyword_identical_QMARK_;
var expr__63483 = k__5332__auto__;
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__63483)))){
return (new datascript.parser.RuleVars(G__63461,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63482.cljs$core$IFn$_invoke$arity$2 ? pred__63482.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"free","free",801364328),expr__63483) : pred__63482.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__63483)))){
return (new datascript.parser.RuleVars(self__.required,G__63461,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63461),null));
}
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"free","free",801364328),self__.free,null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63461){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__63461,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63458){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f63458),datascript.parser.postwalk(self__.free,f63458),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63459,acc63460){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63459,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63459,self__.required,acc63460));
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63460){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63485 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63460,self__.required) : datascript.parser.collect_vars_acc.call(null,acc63460,self__.required));
var G__63486 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63485,G__63486) : datascript.parser.collect_vars_acc.call(null,G__63485,G__63486));
}));

(datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
}));

(datascript.parser.RuleVars.cljs$lang$type = true);

(datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
}));

(datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/RuleVars");
}));

/**
 * Positional factory function for datascript.parser/RuleVars.
 */
datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleVars, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__63465){
var extmap__5365__auto__ = (function (){var G__63487 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63465,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"free","free",801364328)], 0));
if(cljs.core.record_QMARK_(G__63465)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63487);
} else {
return G__63487;
}
})();
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__63465),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__63465),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__63488 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63488,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63488,(1),null);
var required_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,required);
var free_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,rest);
if(((cljs.core.empty_QMARK_(required_STAR_)) && (cljs.core.empty_QMARK_(free_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Rule variables should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null):null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars)));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count(new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63495,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63503 = k63495;
switch (G__63503) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63495,else__5326__auto__);

}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63504){
var vec__63505 = p__63504;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63505,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63505,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63494){
var self__ = this;
var G__63494__$1 = this;
return (new cljs.core.RecordIter((0),G__63494__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63496,other63497){
var self__ = this;
var this63496__$1 = this;
return (((!((other63497 == null)))) && ((((this63496__$1.constructor === other63497.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63496__$1.__extmap,other63497.__extmap)))));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63495){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k63495);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63494){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63510 = cljs.core.keyword_identical_QMARK_;
var expr__63511 = k__5332__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63494),null));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63494){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__63494,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63491){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63492,acc63493){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63493;
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63493){
var self__ = this;
var ___62020__auto____$1 = this;
return acc63493;
}));

(datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.BindIgnore.cljs$lang$type = true);

(datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
}));

(datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/BindIgnore");
}));

/**
 * Positional factory function for datascript.parser/BindIgnore.
 */
datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

/**
 * Factory function for datascript.parser/BindIgnore, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__63499){
var extmap__5365__auto__ = (function (){var G__63521 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__63499);
if(cljs.core.record_QMARK_(G__63499)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63521);
} else {
return G__63521;
}
})();
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63526,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63531 = k63526;
var G__63531__$1 = (((G__63531 instanceof cljs.core.Keyword))?G__63531.fqn:null);
switch (G__63531__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63526,else__5326__auto__);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63532){
var vec__63533 = p__63532;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63533,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63533,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.BindScalar{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63525){
var self__ = this;
var G__63525__$1 = this;
return (new cljs.core.RecordIter((0),G__63525__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63527,other63528){
var self__ = this;
var this63527__$1 = this;
return (((!((other63528 == null)))) && ((((this63527__$1.constructor === other63528.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63527__$1.variable,other63528.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63527__$1.__extmap,other63528.__extmap)))))));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63526){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63552 = k63526;
var G__63552__$1 = (((G__63552 instanceof cljs.core.Keyword))?G__63552.fqn:null);
switch (G__63552__$1) {
case "variable":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63526);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63525){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63553 = cljs.core.keyword_identical_QMARK_;
var expr__63554 = k__5332__auto__;
if(cljs.core.truth_((pred__63553.cljs$core$IFn$_invoke$arity$2 ? pred__63553.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__63554) : pred__63553.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__63554)))){
return (new datascript.parser.BindScalar(G__63525,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63525),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63525){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__63525,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63522){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f63522),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63523,acc63524){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63523,self__.variable,acc63524);
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63524){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63524,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc63524,self__.variable));
}));

(datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
}));

(datascript.parser.BindScalar.cljs$lang$type = true);

(datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
}));

(datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/BindScalar");
}));

/**
 * Positional factory function for datascript.parser/BindScalar.
 */
datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

/**
 * Factory function for datascript.parser/BindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__63529){
var extmap__5365__auto__ = (function (){var G__63563 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63529,new cljs.core.Keyword(null,"variable","variable",-281346492));
if(cljs.core.record_QMARK_(G__63529)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63563);
} else {
return G__63563;
}
})();
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__63529),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63570,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63574 = k63570;
var G__63574__$1 = (((G__63574 instanceof cljs.core.Keyword))?G__63574.fqn:null);
switch (G__63574__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63570,else__5326__auto__);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63575){
var vec__63576 = p__63575;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63576,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63576,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.BindTuple{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63569){
var self__ = this;
var G__63569__$1 = this;
return (new cljs.core.RecordIter((0),G__63569__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63571,other63572){
var self__ = this;
var this63571__$1 = this;
return (((!((other63572 == null)))) && ((((this63571__$1.constructor === other63572.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63571__$1.bindings,other63572.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63571__$1.__extmap,other63572.__extmap)))))));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63570){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63585 = k63570;
var G__63585__$1 = (((G__63585 instanceof cljs.core.Keyword))?G__63585.fqn:null);
switch (G__63585__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63570);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63569){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63586 = cljs.core.keyword_identical_QMARK_;
var expr__63587 = k__5332__auto__;
if(cljs.core.truth_((pred__63586.cljs$core$IFn$_invoke$arity$2 ? pred__63586.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__63587) : pred__63586.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__63587)))){
return (new datascript.parser.BindTuple(G__63569,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63569),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63569){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__63569,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63566){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f63566),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63567,acc63568){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63567,self__.bindings,acc63568);
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63568){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63568,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc63568,self__.bindings));
}));

(datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(datascript.parser.BindTuple.cljs$lang$type = true);

(datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
}));

(datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/BindTuple");
}));

/**
 * Positional factory function for datascript.parser/BindTuple.
 */
datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

/**
 * Factory function for datascript.parser/BindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__63573){
var extmap__5365__auto__ = (function (){var G__63594 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63573,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_(G__63573)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63594);
} else {
return G__63594;
}
})();
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__63573),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63599,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63603 = k63599;
var G__63603__$1 = (((G__63603 instanceof cljs.core.Keyword))?G__63603.fqn:null);
switch (G__63603__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63599,else__5326__auto__);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63604){
var vec__63605 = p__63604;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63605,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63605,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.BindColl{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63598){
var self__ = this;
var G__63598__$1 = this;
return (new cljs.core.RecordIter((0),G__63598__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63600,other63601){
var self__ = this;
var this63600__$1 = this;
return (((!((other63601 == null)))) && ((((this63600__$1.constructor === other63601.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63600__$1.binding,other63601.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63600__$1.__extmap,other63601.__extmap)))))));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63599){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63609 = k63599;
var G__63609__$1 = (((G__63609 instanceof cljs.core.Keyword))?G__63609.fqn:null);
switch (G__63609__$1) {
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63599);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63598){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63613 = cljs.core.keyword_identical_QMARK_;
var expr__63614 = k__5332__auto__;
if(cljs.core.truth_((pred__63613.cljs$core$IFn$_invoke$arity$2 ? pred__63613.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__63614) : pred__63613.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__63614)))){
return (new datascript.parser.BindColl(G__63598,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63598),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63598){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__63598,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63595){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f63595),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63596,acc63597){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63596,self__.binding,acc63597);
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63597){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63597,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc63597,self__.binding));
}));

(datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.BindColl.cljs$lang$type = true);

(datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
}));

(datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/BindColl");
}));

/**
 * Positional factory function for datascript.parser/BindColl.
 */
datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

/**
 * Factory function for datascript.parser/BindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__63602){
var extmap__5365__auto__ = (function (){var G__63618 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63602,new cljs.core.Keyword(null,"binding","binding",539932593));
if(cljs.core.record_QMARK_(G__63602)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63618);
} else {
return G__63618;
}
})();
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__63602),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source((new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5825__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(temp__5825__auto__)){
var var$ = temp__5825__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(((datascript.parser.of_size_QMARK_(form,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),new cljs.core.Symbol(null,"...","...",-1926939749,null))))){
var temp__5823__auto__ = (function (){var G__63619 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__63619) : datascript.parser.parse_binding.call(null,G__63619));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var sub_bind = temp__5823__auto__;
return datascript.parser.with_source((new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse collection binding",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__5025__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(form) : datascript.parser.parse_binding.call(null,form));
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5825__auto__ = datascript.parser.parse_seq(datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5825__auto__)){
var sub_bindings = temp__5825__auto__;
if((!(cljs.core.empty_QMARK_(sub_bindings)))){
return datascript.parser.with_source((new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Tuple binding cannot be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(((datascript.parser.of_size_QMARK_(form,(1))) && (cljs.core.sequential_QMARK_(cljs.core.first(form))))){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__5025__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

var datascript$parser$IFindVars$_find_vars$dyn_64233 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (datascript.parser._find_vars[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (datascript.parser._find_vars["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
});
datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
return datascript$parser$IFindVars$_find_vars$dyn_64233(this$);
}
});

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(cljs.core.last(self__.args));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63636,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63641 = k63636;
var G__63641__$1 = (((G__63641 instanceof cljs.core.Keyword))?G__63641.fqn:null);
switch (G__63641__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63636,else__5326__auto__);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63642){
var vec__63643 = p__63642;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63643,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63643,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Aggregate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63635){
var self__ = this;
var G__63635__$1 = this;
return (new cljs.core.RecordIter((0),G__63635__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63637,other63638){
var self__ = this;
var this63637__$1 = this;
return (((!((other63638 == null)))) && ((((this63637__$1.constructor === other63638.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63637__$1.fn,other63638.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63637__$1.args,other63638.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63637__$1.__extmap,other63638.__extmap)))))))));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63636){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63656 = k63636;
var G__63656__$1 = (((G__63656 instanceof cljs.core.Keyword))?G__63656.fqn:null);
switch (G__63656__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63636);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63635){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63657 = cljs.core.keyword_identical_QMARK_;
var expr__63658 = k__5332__auto__;
if(cljs.core.truth_((pred__63657.cljs$core$IFn$_invoke$arity$2 ? pred__63657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63658) : pred__63657.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63658)))){
return (new datascript.parser.Aggregate(G__63635,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63657.cljs$core$IFn$_invoke$arity$2 ? pred__63657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__63658) : pred__63657.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__63658)))){
return (new datascript.parser.Aggregate(self__.fn,G__63635,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63635),null));
}
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63635){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__63635,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63632){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f63632),datascript.parser.postwalk(self__.args,f63632),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63633,acc63634){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63633,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63633,self__.fn,acc63634));
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63634){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63661 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63634,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc63634,self__.fn));
var G__63662 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63661,G__63662) : datascript.parser.collect_vars_acc.call(null,G__63661,G__63662));
}));

(datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Aggregate.cljs$lang$type = true);

(datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
}));

(datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Aggregate");
}));

/**
 * Positional factory function for datascript.parser/Aggregate.
 */
datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Aggregate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__63640){
var extmap__5365__auto__ = (function (){var G__63663 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63640,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__63640)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63663);
} else {
return G__63663;
}
})();
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63640),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__63640),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(self__.variable);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63669,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63678 = k63669;
var G__63678__$1 = (((G__63678 instanceof cljs.core.Keyword))?G__63678.fqn:null);
switch (G__63678__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63669,else__5326__auto__);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63679){
var vec__63680 = p__63679;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63680,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63680,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Pull{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63668){
var self__ = this;
var G__63668__$1 = this;
return (new cljs.core.RecordIter((0),G__63668__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63670,other63671){
var self__ = this;
var this63670__$1 = this;
return (((!((other63671 == null)))) && ((((this63670__$1.constructor === other63671.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63670__$1.source,other63671.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63670__$1.variable,other63671.variable)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63670__$1.pattern,other63671.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63670__$1.__extmap,other63671.__extmap)))))))))));
}));

(datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63669){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63686 = k63669;
var G__63686__$1 = (((G__63686 instanceof cljs.core.Keyword))?G__63686.fqn:null);
switch (G__63686__$1) {
case "source":
case "variable":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63669);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63668){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63687 = cljs.core.keyword_identical_QMARK_;
var expr__63688 = k__5332__auto__;
if(cljs.core.truth_((pred__63687.cljs$core$IFn$_invoke$arity$2 ? pred__63687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__63688) : pred__63687.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__63688)))){
return (new datascript.parser.Pull(G__63668,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63687.cljs$core$IFn$_invoke$arity$2 ? pred__63687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__63688) : pred__63687.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__63688)))){
return (new datascript.parser.Pull(self__.source,G__63668,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63687.cljs$core$IFn$_invoke$arity$2 ? pred__63687.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__63688) : pred__63687.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__63688)))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__63668,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63668),null));
}
}
}
}));

(datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63668){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__63668,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63665){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f63665),datascript.parser.postwalk(self__.variable,f63665),datascript.parser.postwalk(self__.pattern,f63665),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63666,acc63667){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63666,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63666,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63666,self__.source,acc63667)));
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63667){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63692 = (function (){var G__63694 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63667,self__.source) : datascript.parser.collect_vars_acc.call(null,acc63667,self__.source));
var G__63695 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63694,G__63695) : datascript.parser.collect_vars_acc.call(null,G__63694,G__63695));
})();
var G__63693 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63692,G__63693) : datascript.parser.collect_vars_acc.call(null,G__63692,G__63693));
}));

(datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pull.cljs$lang$type = true);

(datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
}));

(datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Pull");
}));

/**
 * Positional factory function for datascript.parser/Pull.
 */
datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pull, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__63673){
var extmap__5365__auto__ = (function (){var G__63698 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63673,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__63673)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63698);
} else {
return G__63698;
}
})();
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__63673),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__63673),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__63673),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

var datascript$parser$IFindElements$find_elements$dyn_64253 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (datascript.parser.find_elements[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (datascript.parser.find_elements["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
}
}
});
datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
return datascript$parser$IFindElements$find_elements$dyn_64253(this$);
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63705,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63709 = k63705;
var G__63709__$1 = (((G__63709 instanceof cljs.core.Keyword))?G__63709.fqn:null);
switch (G__63709__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63705,else__5326__auto__);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63710){
var vec__63711 = p__63710;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63711,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63711,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.FindRel{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63704){
var self__ = this;
var G__63704__$1 = this;
return (new cljs.core.RecordIter((0),G__63704__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63706,other63707){
var self__ = this;
var this63706__$1 = this;
return (((!((other63707 == null)))) && ((((this63706__$1.constructor === other63707.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63706__$1.elements,other63707.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63706__$1.__extmap,other63707.__extmap)))))));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63705){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63716 = k63705;
var G__63716__$1 = (((G__63716 instanceof cljs.core.Keyword))?G__63716.fqn:null);
switch (G__63716__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63705);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63704){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63717 = cljs.core.keyword_identical_QMARK_;
var expr__63718 = k__5332__auto__;
if(cljs.core.truth_((pred__63717.cljs$core$IFn$_invoke$arity$2 ? pred__63717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__63718) : pred__63717.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__63718)))){
return (new datascript.parser.FindRel(G__63704,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63704),null));
}
}));

(datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63704){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__63704,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63700){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f63700),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63701,acc63702){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63701,self__.elements,acc63702);
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63702){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63702,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc63702,self__.elements));
}));

(datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindRel.cljs$lang$type = true);

(datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
}));

(datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/FindRel");
}));

/**
 * Positional factory function for datascript.parser/FindRel.
 */
datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindRel, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__63708){
var extmap__5365__auto__ = (function (){var G__63721 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63708,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__63708)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63721);
} else {
return G__63721;
}
})();
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__63708),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63726,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63733 = k63726;
var G__63733__$1 = (((G__63733 instanceof cljs.core.Keyword))?G__63733.fqn:null);
switch (G__63733__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63726,else__5326__auto__);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63735){
var vec__63736 = p__63735;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63736,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63736,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.FindColl{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63725){
var self__ = this;
var G__63725__$1 = this;
return (new cljs.core.RecordIter((0),G__63725__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63727,other63728){
var self__ = this;
var this63727__$1 = this;
return (((!((other63728 == null)))) && ((((this63727__$1.constructor === other63728.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63727__$1.element,other63728.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63727__$1.__extmap,other63728.__extmap)))))));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63726){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63740 = k63726;
var G__63740__$1 = (((G__63740 instanceof cljs.core.Keyword))?G__63740.fqn:null);
switch (G__63740__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63726);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63725){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63741 = cljs.core.keyword_identical_QMARK_;
var expr__63742 = k__5332__auto__;
if(cljs.core.truth_((pred__63741.cljs$core$IFn$_invoke$arity$2 ? pred__63741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__63742) : pred__63741.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__63742)))){
return (new datascript.parser.FindColl(G__63725,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63725),null));
}
}));

(datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63725){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__63725,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63722){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f63722),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63723,acc63724){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63723,self__.element,acc63724);
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63724){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63724,self__.element) : datascript.parser.collect_vars_acc.call(null,acc63724,self__.element));
}));

(datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindColl.cljs$lang$type = true);

(datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
}));

(datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/FindColl");
}));

/**
 * Positional factory function for datascript.parser/FindColl.
 */
datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__63732){
var extmap__5365__auto__ = (function (){var G__63745 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63732,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__63732)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63745);
} else {
return G__63745;
}
})();
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__63732),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63750,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63755 = k63750;
var G__63755__$1 = (((G__63755 instanceof cljs.core.Keyword))?G__63755.fqn:null);
switch (G__63755__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63750,else__5326__auto__);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63756){
var vec__63757 = p__63756;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63757,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63757,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.FindScalar{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63749){
var self__ = this;
var G__63749__$1 = this;
return (new cljs.core.RecordIter((0),G__63749__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63751,other63752){
var self__ = this;
var this63751__$1 = this;
return (((!((other63752 == null)))) && ((((this63751__$1.constructor === other63752.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63751__$1.element,other63752.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63751__$1.__extmap,other63752.__extmap)))))));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63750){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63761 = k63750;
var G__63761__$1 = (((G__63761 instanceof cljs.core.Keyword))?G__63761.fqn:null);
switch (G__63761__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63750);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63749){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63762 = cljs.core.keyword_identical_QMARK_;
var expr__63763 = k__5332__auto__;
if(cljs.core.truth_((pred__63762.cljs$core$IFn$_invoke$arity$2 ? pred__63762.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__63763) : pred__63762.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__63763)))){
return (new datascript.parser.FindScalar(G__63749,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63749),null));
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63749){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__63749,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63746){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f63746),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63747,acc63748){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63747,self__.element,acc63748);
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63748){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63748,self__.element) : datascript.parser.collect_vars_acc.call(null,acc63748,self__.element));
}));

(datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindScalar.cljs$lang$type = true);

(datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
}));

(datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/FindScalar");
}));

/**
 * Positional factory function for datascript.parser/FindScalar.
 */
datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__63753){
var extmap__5365__auto__ = (function (){var G__63777 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63753,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__63753)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63777);
} else {
return G__63777;
}
})();
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__63753),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63790,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63806 = k63790;
var G__63806__$1 = (((G__63806 instanceof cljs.core.Keyword))?G__63806.fqn:null);
switch (G__63806__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63790,else__5326__auto__);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63808){
var vec__63809 = p__63808;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63809,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63809,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.FindTuple{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63789){
var self__ = this;
var G__63789__$1 = this;
return (new cljs.core.RecordIter((0),G__63789__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63791,other63792){
var self__ = this;
var this63791__$1 = this;
return (((!((other63792 == null)))) && ((((this63791__$1.constructor === other63792.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63791__$1.elements,other63792.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63791__$1.__extmap,other63792.__extmap)))))));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63790){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63816 = k63790;
var G__63816__$1 = (((G__63816 instanceof cljs.core.Keyword))?G__63816.fqn:null);
switch (G__63816__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63790);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63789){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63820 = cljs.core.keyword_identical_QMARK_;
var expr__63821 = k__5332__auto__;
if(cljs.core.truth_((pred__63820.cljs$core$IFn$_invoke$arity$2 ? pred__63820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__63821) : pred__63820.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__63821)))){
return (new datascript.parser.FindTuple(G__63789,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63789),null));
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63789){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__63789,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63786){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f63786),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63787,acc63788){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63787,self__.elements,acc63788);
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63788){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63788,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc63788,self__.elements));
}));

(datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindTuple.cljs$lang$type = true);

(datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
}));

(datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/FindTuple");
}));

/**
 * Positional factory function for datascript.parser/FindTuple.
 */
datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__63801){
var extmap__5365__auto__ = (function (){var G__63826 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63801,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__63801)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63826);
} else {
return G__63826;
}
})();
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__63801),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(datascript.parser._find_vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.find_elements(find)], 0));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if(((cljs.core.sequential_QMARK_(form)) && ((cljs.core.count(form) >= (2))))){
var vec__63829 = form;
var seq__63830 = cljs.core.seq(vec__63829);
var first__63831 = cljs.core.first(seq__63830);
var seq__63830__$1 = cljs.core.next(seq__63830);
var fn = first__63831;
var args = seq__63830__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__5023__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return args_STAR_;
} else {
return and__5023__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null))))){
if((cljs.core.count(form) >= (3))){
var vec__63832 = form;
var seq__63833 = cljs.core.seq(vec__63832);
var first__63834 = cljs.core.first(seq__63833);
var seq__63833__$1 = cljs.core.next(seq__63833);
var _ = first__63834;
var first__63834__$1 = cljs.core.first(seq__63833__$1);
var seq__63833__$2 = cljs.core.next(seq__63833__$1);
var fn = first__63834__$1;
var args = seq__63833__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__5023__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return args_STAR_;
} else {
return and__5023__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol(null,"pull","pull",779986722,null))))){
if(((((3) <= cljs.core.count(form))) && ((cljs.core.count(form) <= (4))))){
var long_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(4));
var src = ((long_QMARK_)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__63835 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63835,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63835,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__5025__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = src_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__5023__auto____$1)){
return pattern_STAR_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__5025__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__63838 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__63838 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__63838,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
if(((cljs.core.sequential_QMARK_(inner)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),new cljs.core.Symbol(null,"...","...",-1926939749,null))))))){
var G__63839 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__63839 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__63839,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if(((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),new cljs.core.Symbol(null,".",".",1975675962,null))))))){
var G__63840 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__63840 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__63840,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
var G__63841 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__63841 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__63841,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__5025__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.ReturnMap = (function (type,symbols,__meta,__extmap,__hash){
this.type = type;
this.symbols = symbols;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63846,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63850 = k63846;
var G__63850__$1 = (((G__63850 instanceof cljs.core.Keyword))?G__63850.fqn:null);
switch (G__63850__$1) {
case "type":
return self__.type;

break;
case "symbols":
return self__.symbols;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63846,else__5326__auto__);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63851){
var vec__63852 = p__63851;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63852,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63852,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.ReturnMap{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63845){
var self__ = this;
var G__63845__$1 = this;
return (new cljs.core.RecordIter((0),G__63845__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbols","symbols",1211743)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-2025547471 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63847,other63848){
var self__ = this;
var this63847__$1 = this;
return (((!((other63848 == null)))) && ((((this63847__$1.constructor === other63848.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63847__$1.type,other63848.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63847__$1.symbols,other63848.symbols)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63847__$1.__extmap,other63848.__extmap)))))))));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63846){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63855 = k63846;
var G__63855__$1 = (((G__63855 instanceof cljs.core.Keyword))?G__63855.fqn:null);
switch (G__63855__$1) {
case "type":
case "symbols":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63846);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63845){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63856 = cljs.core.keyword_identical_QMARK_;
var expr__63857 = k__5332__auto__;
if(cljs.core.truth_((pred__63856.cljs$core$IFn$_invoke$arity$2 ? pred__63856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__63857) : pred__63856.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__63857)))){
return (new datascript.parser.ReturnMap(G__63845,self__.symbols,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63856.cljs$core$IFn$_invoke$arity$2 ? pred__63856.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__63857) : pred__63856.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__63857)))){
return (new datascript.parser.ReturnMap(self__.type,G__63845,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63845),null));
}
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63845){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,G__63845,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63842){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.ReturnMap(datascript.parser.postwalk(self__.type,f63842),datascript.parser.postwalk(self__.symbols,f63842),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63843,acc63844){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63843,self__.symbols,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63843,self__.type,acc63844));
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63844){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63859 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63844,self__.type) : datascript.parser.collect_vars_acc.call(null,acc63844,self__.type));
var G__63860 = self__.symbols;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63859,G__63860) : datascript.parser.collect_vars_acc.call(null,G__63859,G__63860));
}));

(datascript.parser.ReturnMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null);
}));

(datascript.parser.ReturnMap.cljs$lang$type = true);

(datascript.parser.ReturnMap.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/ReturnMap",null,(1),null));
}));

(datascript.parser.ReturnMap.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/ReturnMap");
}));

/**
 * Positional factory function for datascript.parser/ReturnMap.
 */
datascript.parser.__GT_ReturnMap = (function datascript$parser$__GT_ReturnMap(type,symbols){
return (new datascript.parser.ReturnMap(type,symbols,null,null,null));
});

/**
 * Factory function for datascript.parser/ReturnMap, taking a map of keywords to field values.
 */
datascript.parser.map__GT_ReturnMap = (function datascript$parser$map__GT_ReturnMap(G__63849){
var extmap__5365__auto__ = (function (){var G__63861 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63849,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbols","symbols",1211743)], 0));
if(cljs.core.record_QMARK_(G__63849)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63861);
} else {
return G__63861;
}
})();
return (new datascript.parser.ReturnMap(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__63849),new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__63849),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.parse_return_map = (function datascript$parser$parse_return_map(type,form){
if((((!(cljs.core.empty_QMARK_(form)))) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,form)))){
var G__63862 = type;
var G__63862__$1 = (((G__63862 instanceof cljs.core.Keyword))?G__63862.fqn:null);
switch (G__63862__$1) {
case "keys":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,form),null,null,null));

break;
case "syms":
return (new datascript.parser.ReturnMap(type,cljs.core.vec(form),null,null,null));

break;
case "strs":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,form),null,null,null));

break;
default:
return null;

}
} else {
return null;
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__5025__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :with clause, expected [ variable+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5823__auto__ = (function (){var or__5025__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return datascript.parser.parse_plain_variable(form);
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var var$ = temp__5823__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding(form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__5025__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63867,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63871 = k63867;
var G__63871__$1 = (((G__63871 instanceof cljs.core.Keyword))?G__63871.fqn:null);
switch (G__63871__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63867,else__5326__auto__);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63872){
var vec__63873 = p__63872;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63873,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63873,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Pattern{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63866){
var self__ = this;
var G__63866__$1 = this;
return (new cljs.core.RecordIter((0),G__63866__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63868,other63869){
var self__ = this;
var this63868__$1 = this;
return (((!((other63869 == null)))) && ((((this63868__$1.constructor === other63869.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63868__$1.source,other63869.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63868__$1.pattern,other63869.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63868__$1.__extmap,other63869.__extmap)))))))));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63867){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63876 = k63867;
var G__63876__$1 = (((G__63876 instanceof cljs.core.Keyword))?G__63876.fqn:null);
switch (G__63876__$1) {
case "source":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63867);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63866){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63877 = cljs.core.keyword_identical_QMARK_;
var expr__63878 = k__5332__auto__;
if(cljs.core.truth_((pred__63877.cljs$core$IFn$_invoke$arity$2 ? pred__63877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__63878) : pred__63877.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__63878)))){
return (new datascript.parser.Pattern(G__63866,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63877.cljs$core$IFn$_invoke$arity$2 ? pred__63877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__63878) : pred__63877.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__63878)))){
return (new datascript.parser.Pattern(self__.source,G__63866,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63866),null));
}
}
}));

(datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63866){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__63866,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63863){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f63863),datascript.parser.postwalk(self__.pattern,f63863),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63864,acc63865){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63864,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63864,self__.source,acc63865));
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63865){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63880 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63865,self__.source) : datascript.parser.collect_vars_acc.call(null,acc63865,self__.source));
var G__63881 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63880,G__63881) : datascript.parser.collect_vars_acc.call(null,G__63880,G__63881));
}));

(datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pattern.cljs$lang$type = true);

(datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
}));

(datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Pattern");
}));

/**
 * Positional factory function for datascript.parser/Pattern.
 */
datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pattern, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__63870){
var extmap__5365__auto__ = (function (){var G__63882 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63870,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__63870)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63882);
} else {
return G__63882;
}
})();
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__63870),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__63870),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63887,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63891 = k63887;
var G__63891__$1 = (((G__63891 instanceof cljs.core.Keyword))?G__63891.fqn:null);
switch (G__63891__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63887,else__5326__auto__);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63892){
var vec__63893 = p__63892;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63893,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63893,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Predicate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63886){
var self__ = this;
var G__63886__$1 = this;
return (new cljs.core.RecordIter((0),G__63886__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63888,other63889){
var self__ = this;
var this63888__$1 = this;
return (((!((other63889 == null)))) && ((((this63888__$1.constructor === other63889.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63888__$1.fn,other63889.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63888__$1.args,other63889.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63888__$1.__extmap,other63889.__extmap)))))))));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63887){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63896 = k63887;
var G__63896__$1 = (((G__63896 instanceof cljs.core.Keyword))?G__63896.fqn:null);
switch (G__63896__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63887);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63886){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63897 = cljs.core.keyword_identical_QMARK_;
var expr__63898 = k__5332__auto__;
if(cljs.core.truth_((pred__63897.cljs$core$IFn$_invoke$arity$2 ? pred__63897.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63898) : pred__63897.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63898)))){
return (new datascript.parser.Predicate(G__63886,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63897.cljs$core$IFn$_invoke$arity$2 ? pred__63897.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__63898) : pred__63897.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__63898)))){
return (new datascript.parser.Predicate(self__.fn,G__63886,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63886),null));
}
}
}));

(datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63886){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__63886,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63883){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f63883),datascript.parser.postwalk(self__.args,f63883),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63884,acc63885){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63884,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63884,self__.fn,acc63885));
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63885){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63900 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63885,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc63885,self__.fn));
var G__63901 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63900,G__63901) : datascript.parser.collect_vars_acc.call(null,G__63900,G__63901));
}));

(datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Predicate.cljs$lang$type = true);

(datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
}));

(datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Predicate");
}));

/**
 * Positional factory function for datascript.parser/Predicate.
 */
datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Predicate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__63890){
var extmap__5365__auto__ = (function (){var G__63902 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63890,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__63890)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63902);
} else {
return G__63902;
}
})();
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63890),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__63890),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63907,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63911 = k63907;
var G__63911__$1 = (((G__63911 instanceof cljs.core.Keyword))?G__63911.fqn:null);
switch (G__63911__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63907,else__5326__auto__);

}
}));

(datascript.parser.Function.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63912){
var vec__63913 = p__63912;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63913,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63913,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Function{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63906){
var self__ = this;
var G__63906__$1 = this;
return (new cljs.core.RecordIter((0),G__63906__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63908,other63909){
var self__ = this;
var this63908__$1 = this;
return (((!((other63909 == null)))) && ((((this63908__$1.constructor === other63909.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63908__$1.fn,other63909.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63908__$1.args,other63909.args)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63908__$1.binding,other63909.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63908__$1.__extmap,other63909.__extmap)))))))))));
}));

(datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63907){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63916 = k63907;
var G__63916__$1 = (((G__63916 instanceof cljs.core.Keyword))?G__63916.fqn:null);
switch (G__63916__$1) {
case "fn":
case "args":
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63907);

}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63906){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63917 = cljs.core.keyword_identical_QMARK_;
var expr__63918 = k__5332__auto__;
if(cljs.core.truth_((pred__63917.cljs$core$IFn$_invoke$arity$2 ? pred__63917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63918) : pred__63917.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__63918)))){
return (new datascript.parser.Function(G__63906,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63917.cljs$core$IFn$_invoke$arity$2 ? pred__63917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__63918) : pred__63917.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__63918)))){
return (new datascript.parser.Function(self__.fn,G__63906,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63917.cljs$core$IFn$_invoke$arity$2 ? pred__63917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__63918) : pred__63917.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__63918)))){
return (new datascript.parser.Function(self__.fn,self__.args,G__63906,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63906),null));
}
}
}
}));

(datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63906){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__63906,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63903){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f63903),datascript.parser.postwalk(self__.args,f63903),datascript.parser.postwalk(self__.binding,f63903),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63904,acc63905){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63904,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63904,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63904,self__.fn,acc63905)));
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63905){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63920 = (function (){var G__63922 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63905,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc63905,self__.fn));
var G__63923 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63922,G__63923) : datascript.parser.collect_vars_acc.call(null,G__63922,G__63923));
})();
var G__63921 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63920,G__63921) : datascript.parser.collect_vars_acc.call(null,G__63920,G__63921));
}));

(datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.Function.cljs$lang$type = true);

(datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
}));

(datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Function");
}));

/**
 * Positional factory function for datascript.parser/Function.
 */
datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

/**
 * Factory function for datascript.parser/Function, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__63910){
var extmap__5365__auto__ = (function (){var G__63924 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63910,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], 0));
if(cljs.core.record_QMARK_(G__63910)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63924);
} else {
return G__63924;
}
})();
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__63910),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__63910),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__63910),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63929,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63933 = k63929;
var G__63933__$1 = (((G__63933 instanceof cljs.core.Keyword))?G__63933.fqn:null);
switch (G__63933__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63929,else__5326__auto__);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63934){
var vec__63935 = p__63934;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63935,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63935,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63928){
var self__ = this;
var G__63928__$1 = this;
return (new cljs.core.RecordIter((0),G__63928__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63930,other63931){
var self__ = this;
var this63930__$1 = this;
return (((!((other63931 == null)))) && ((((this63930__$1.constructor === other63931.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63930__$1.source,other63931.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63930__$1.name,other63931.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63930__$1.args,other63931.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63930__$1.__extmap,other63931.__extmap)))))))))));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63929){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63938 = k63929;
var G__63938__$1 = (((G__63938 instanceof cljs.core.Keyword))?G__63938.fqn:null);
switch (G__63938__$1) {
case "source":
case "name":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63929);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63928){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63939 = cljs.core.keyword_identical_QMARK_;
var expr__63940 = k__5332__auto__;
if(cljs.core.truth_((pred__63939.cljs$core$IFn$_invoke$arity$2 ? pred__63939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__63940) : pred__63939.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__63940)))){
return (new datascript.parser.RuleExpr(G__63928,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63939.cljs$core$IFn$_invoke$arity$2 ? pred__63939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__63940) : pred__63939.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__63940)))){
return (new datascript.parser.RuleExpr(self__.source,G__63928,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63939.cljs$core$IFn$_invoke$arity$2 ? pred__63939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__63940) : pred__63939.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__63940)))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__63928,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63928),null));
}
}
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63928){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__63928,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63925){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f63925),datascript.parser.postwalk(self__.name,f63925),datascript.parser.postwalk(self__.args,f63925),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63926,acc63927){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63926,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63926,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63926,self__.source,acc63927)));
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63927){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63942 = (function (){var G__63944 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63927,self__.source) : datascript.parser.collect_vars_acc.call(null,acc63927,self__.source));
var G__63945 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63944,G__63945) : datascript.parser.collect_vars_acc.call(null,G__63944,G__63945));
})();
var G__63943 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63942,G__63943) : datascript.parser.collect_vars_acc.call(null,G__63942,G__63943));
}));

(datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.RuleExpr.cljs$lang$type = true);

(datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
}));

(datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/RuleExpr");
}));

/**
 * Positional factory function for datascript.parser/RuleExpr.
 */
datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleExpr, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__63932){
var extmap__5365__auto__ = (function (){var G__63946 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63932,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__63932)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63946);
} else {
return G__63946;
}
})();
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__63932),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__63932),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__63932),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63951,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63955 = k63951;
var G__63955__$1 = (((G__63955 instanceof cljs.core.Keyword))?G__63955.fqn:null);
switch (G__63955__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63951,else__5326__auto__);

}
}));

(datascript.parser.Not.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63956){
var vec__63957 = p__63956;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63957,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63957,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Not{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63950){
var self__ = this;
var G__63950__$1 = this;
return (new cljs.core.RecordIter((0),G__63950__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63952,other63953){
var self__ = this;
var this63952__$1 = this;
return (((!((other63953 == null)))) && ((((this63952__$1.constructor === other63953.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63952__$1.source,other63953.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63952__$1.vars,other63953.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63952__$1.clauses,other63953.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63952__$1.__extmap,other63953.__extmap)))))))))));
}));

(datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63951){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63960 = k63951;
var G__63960__$1 = (((G__63960 instanceof cljs.core.Keyword))?G__63960.fqn:null);
switch (G__63960__$1) {
case "source":
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63951);

}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63950){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63961 = cljs.core.keyword_identical_QMARK_;
var expr__63962 = k__5332__auto__;
if(cljs.core.truth_((pred__63961.cljs$core$IFn$_invoke$arity$2 ? pred__63961.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__63962) : pred__63961.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__63962)))){
return (new datascript.parser.Not(G__63950,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63961.cljs$core$IFn$_invoke$arity$2 ? pred__63961.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__63962) : pred__63961.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__63962)))){
return (new datascript.parser.Not(self__.source,G__63950,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63961.cljs$core$IFn$_invoke$arity$2 ? pred__63961.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__63962) : pred__63961.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__63962)))){
return (new datascript.parser.Not(self__.source,self__.vars,G__63950,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63950),null));
}
}
}
}));

(datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63950){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__63950,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63947){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f63947),datascript.parser.postwalk(self__.vars,f63947),datascript.parser.postwalk(self__.clauses,f63947),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63948,acc63949){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63948,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63948,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63948,self__.source,acc63949)));
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63949){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63964 = (function (){var G__63966 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63949,self__.source) : datascript.parser.collect_vars_acc.call(null,acc63949,self__.source));
var G__63967 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63966,G__63967) : datascript.parser.collect_vars_acc.call(null,G__63966,G__63967));
})();
var G__63965 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63964,G__63965) : datascript.parser.collect_vars_acc.call(null,G__63964,G__63965));
}));

(datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Not.cljs$lang$type = true);

(datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
}));

(datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Not");
}));

/**
 * Positional factory function for datascript.parser/Not.
 */
datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Not, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__63954){
var extmap__5365__auto__ = (function (){var G__63968 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63954,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__63954)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63968);
} else {
return G__63968;
}
})();
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__63954),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__63954),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__63954),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63973,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63977 = k63973;
var G__63977__$1 = (((G__63977 instanceof cljs.core.Keyword))?G__63977.fqn:null);
switch (G__63977__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63973,else__5326__auto__);

}
}));

(datascript.parser.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__63978){
var vec__63979 = p__63978;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63979,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63979,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Or{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63972){
var self__ = this;
var G__63972__$1 = this;
return (new cljs.core.RecordIter((0),G__63972__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63974,other63975){
var self__ = this;
var this63974__$1 = this;
return (((!((other63975 == null)))) && ((((this63974__$1.constructor === other63975.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63974__$1.source,other63975.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63974__$1.rule_vars,other63975.rule_vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63974__$1.clauses,other63975.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63974__$1.__extmap,other63975.__extmap)))))))))));
}));

(datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63973){
var self__ = this;
var this__5330__auto____$1 = this;
var G__63982 = k63973;
var G__63982__$1 = (((G__63982 instanceof cljs.core.Keyword))?G__63982.fqn:null);
switch (G__63982__$1) {
case "source":
case "rule-vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63973);

}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63972){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__63983 = cljs.core.keyword_identical_QMARK_;
var expr__63984 = k__5332__auto__;
if(cljs.core.truth_((pred__63983.cljs$core$IFn$_invoke$arity$2 ? pred__63983.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__63984) : pred__63983.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__63984)))){
return (new datascript.parser.Or(G__63972,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63983.cljs$core$IFn$_invoke$arity$2 ? pred__63983.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__63984) : pred__63983.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__63984)))){
return (new datascript.parser.Or(self__.source,G__63972,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__63983.cljs$core$IFn$_invoke$arity$2 ? pred__63983.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__63984) : pred__63983.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__63984)))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__63972,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63972),null));
}
}
}
}));

(datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63972){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__63972,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63969){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f63969),datascript.parser.postwalk(self__.rule_vars,f63969),datascript.parser.postwalk(self__.clauses,f63969),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63970,acc63971){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63970,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63970,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63970,self__.source,acc63971)));
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63971){
var self__ = this;
var ___62020__auto____$1 = this;
var G__63986 = (function (){var G__63988 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63971,self__.source) : datascript.parser.collect_vars_acc.call(null,acc63971,self__.source));
var G__63989 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63988,G__63989) : datascript.parser.collect_vars_acc.call(null,G__63988,G__63989));
})();
var G__63987 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__63986,G__63987) : datascript.parser.collect_vars_acc.call(null,G__63986,G__63987));
}));

(datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Or.cljs$lang$type = true);

(datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
}));

(datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Or");
}));

/**
 * Positional factory function for datascript.parser/Or.
 */
datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Or, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__63976){
var extmap__5365__auto__ = (function (){var G__63990 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__63976,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__63976)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__63990);
} else {
return G__63990;
}
})();
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__63976),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__63976),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__63976),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k63995,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__63999 = k63995;
var G__63999__$1 = (((G__63999 instanceof cljs.core.Keyword))?G__63999.fqn:null);
switch (G__63999__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k63995,else__5326__auto__);

}
}));

(datascript.parser.And.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__64000){
var vec__64001 = p__64000;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64001,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64001,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.And{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__63994){
var self__ = this;
var G__63994__$1 = this;
return (new cljs.core.RecordIter((0),G__63994__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this63996,other63997){
var self__ = this;
var this63996__$1 = this;
return (((!((other63997 == null)))) && ((((this63996__$1.constructor === other63997.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63996__$1.clauses,other63997.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this63996__$1.__extmap,other63997.__extmap)))))));
}));

(datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k63995){
var self__ = this;
var this__5330__auto____$1 = this;
var G__64004 = k63995;
var G__64004__$1 = (((G__64004 instanceof cljs.core.Keyword))?G__64004.fqn:null);
switch (G__64004__$1) {
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k63995);

}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__63994){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__64005 = cljs.core.keyword_identical_QMARK_;
var expr__64006 = k__5332__auto__;
if(cljs.core.truth_((pred__64005.cljs$core$IFn$_invoke$arity$2 ? pred__64005.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__64006) : pred__64005.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__64006)))){
return (new datascript.parser.And(G__63994,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__63994),null));
}
}));

(datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__63994){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__63994,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f63991){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f63991),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred63992,acc63993){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred63992,self__.clauses,acc63993);
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc63993){
var self__ = this;
var ___62020__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc63993,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc63993,self__.clauses));
}));

(datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.And.cljs$lang$type = true);

(datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
}));

(datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/And");
}));

/**
 * Positional factory function for datascript.parser/And.
 */
datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/And, taking a map of keywords to field values.
 */
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__63998){
var extmap__5365__auto__ = (function (){var G__64008 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63998,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_(G__63998)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64008);
} else {
return G__64008;
}
})();
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__63998),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__5025__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_(form)){
var temp__5823__auto__ = datascript.parser.parse_src_var(cljs.core.first(form));
if(cljs.core.truth_(temp__5823__auto__)){
var source_STAR_ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next(form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64009 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64009,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64009,(1),null);
var temp__5825__auto____$1 = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5825__auto____$1)){
var pattern_STAR_ = temp__5825__auto____$1;
if((!(cljs.core.empty_QMARK_(pattern_STAR_)))){
return datascript.parser.with_source((new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Pattern could not be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__64012 = form;
var seq__64013 = cljs.core.seq(vec__64012);
var first__64014 = cljs.core.first(seq__64013);
var seq__64013__$1 = cljs.core.next(seq__64013);
var fn = first__64014;
var args = seq__64013__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__5025__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__5023__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return args_STAR_;
} else {
return and__5023__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(datascript.parser.of_size_QMARK_(form,(1))){
var temp__5825__auto__ = datascript.parser.parse_call(cljs.core.first(form));
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64015 = temp__5825__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64015,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64015,(1),null);
return datascript.parser.with_source((new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(datascript.parser.of_size_QMARK_(form,(2))){
var vec__64018 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64018,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64018,(1),null);
var temp__5825__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64021 = temp__5825__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64021,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64021,(1),null);
var temp__5825__auto____$1 = datascript.parser.parse_binding(binding);
if(cljs.core.truth_(temp__5825__auto____$1)){
var binding_STAR_ = temp__5825__auto____$1;
return datascript.parser.with_source((new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64024 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64024,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64024,(1),null);
var vec__64027 = next_form;
var seq__64028 = cljs.core.seq(vec__64027);
var first__64029 = cljs.core.first(seq__64028);
var seq__64028__$1 = cljs.core.next(seq__64028);
var name = first__64029;
var args = seq__64028__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol(name);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rule-expr requires at least one argument",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,form.vars);
} else {
if((form instanceof datascript.parser.Or)){
var G__64030 = acc;
var G__64031 = form.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__64030,G__64031) : datascript.parser.collect_vars_acc.call(null,G__64030,G__64031));
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars(form,acc);
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc(cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(datascript.parser.collect_vars(form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(required,free,form){
if(((cljs.core.empty_QMARK_(required)) && (cljs.core.empty_QMARK_(free)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Join variables should not be empty",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64033 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64033,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64033,(1),null);
var vec__64036 = next_form;
var seq__64037 = cljs.core.seq(vec__64036);
var first__64038 = cljs.core.first(seq__64037);
var seq__64037__$1 = cljs.core.next(seq__64037);
var sym = first__64038;
var clauses = seq__64037__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__5823__auto__ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(temp__5823__auto__)){
var clauses_STAR_ = temp__5823__auto__;
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct(clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64039 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64039,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64039,(1),null);
var vec__64042 = next_form;
var seq__64043 = cljs.core.seq(vec__64042);
var first__64044 = cljs.core.first(seq__64043);
var seq__64043__$1 = cljs.core.next(seq__64043);
var sym = first__64044;
var first__64044__$1 = cljs.core.first(seq__64043__$1);
var seq__64043__$2 = cljs.core.next(seq__64043__$1);
var vars = first__64044__$1;
var clauses = seq__64043__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__5023__auto__ = vars_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return clauses_STAR_;
} else {
return and__5023__auto__;
}
})())){
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__64045 = clause;
var map__64045__$1 = cljs.core.__destructure_map(map__64045);
var map__64046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64045__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__64046__$1 = cljs.core.__destructure_map(map__64046);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64046__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64046__$1,new cljs.core.Keyword(null,"free","free",801364328));
datascript.parser.validate_join_vars(required,free,form);

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first(form))))){
var clauses_STAR_ = (function (){var G__64047 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__64047) : datascript.parser.parse_clauses.call(null,G__64047));
})();
if(cljs.core.truth_(cljs.core.not_empty(clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'and' clause, expected [ 'and' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64048 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64048,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64048,(1),null);
var vec__64051 = next_form;
var seq__64052 = cljs.core.seq(vec__64051);
var first__64053 = cljs.core.first(seq__64052);
var seq__64052__$1 = cljs.core.next(seq__64052);
var sym = first__64053;
var clauses = seq__64052__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__5823__auto__ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5823__auto__)){
var clauses_STAR_ = temp__5823__auto__;
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct(clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__64054 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64054,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64054,(1),null);
var vec__64057 = next_form;
var seq__64058 = cljs.core.seq(vec__64057);
var first__64059 = cljs.core.first(seq__64058);
var seq__64058__$1 = cljs.core.next(seq__64058);
var sym = first__64059;
var first__64059__$1 = cljs.core.first(seq__64058__$1);
var seq__64058__$2 = cljs.core.next(seq__64058__$1);
var vars = first__64059__$1;
var clauses = seq__64058__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__5023__auto__ = vars_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return clauses_STAR_;
} else {
return and__5023__auto__;
}
})())){
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__5025__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__5025__auto____$4)){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__5025__auto____$5)){
return or__5025__auto____$5;
} else {
var or__5025__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__5025__auto____$6)){
return or__5025__auto____$6;
} else {
var or__5025__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__5025__auto____$7)){
return or__5025__auto____$7;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq(datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__5025__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse :where clause, expected [clause+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k64065,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__64069 = k64065;
var G__64069__$1 = (((G__64069 instanceof cljs.core.Keyword))?G__64069.fqn:null);
switch (G__64069__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64065,else__5326__auto__);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__64070){
var vec__64071 = p__64070;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64071,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64071,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64064){
var self__ = this;
var G__64064__$1 = this;
return (new cljs.core.RecordIter((0),G__64064__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64066,other64067){
var self__ = this;
var this64066__$1 = this;
return (((!((other64067 == null)))) && ((((this64066__$1.constructor === other64067.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64066__$1.vars,other64067.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64066__$1.clauses,other64067.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64066__$1.__extmap,other64067.__extmap)))))))));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k64065){
var self__ = this;
var this__5330__auto____$1 = this;
var G__64074 = k64065;
var G__64074__$1 = (((G__64074 instanceof cljs.core.Keyword))?G__64074.fqn:null);
switch (G__64074__$1) {
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64065);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__64064){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__64075 = cljs.core.keyword_identical_QMARK_;
var expr__64076 = k__5332__auto__;
if(cljs.core.truth_((pred__64075.cljs$core$IFn$_invoke$arity$2 ? pred__64075.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__64076) : pred__64075.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__64076)))){
return (new datascript.parser.RuleBranch(G__64064,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64075.cljs$core$IFn$_invoke$arity$2 ? pred__64075.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__64076) : pred__64075.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__64076)))){
return (new datascript.parser.RuleBranch(self__.vars,G__64064,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__64064),null));
}
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__64064){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__64064,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f64061){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f64061),datascript.parser.postwalk(self__.clauses,f64061),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred64062,acc64063){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64062,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64062,self__.vars,acc64063));
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc64063){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc64063,self__.vars),self__.clauses);
}));

(datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.RuleBranch.cljs$lang$type = true);

(datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
}));

(datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/RuleBranch");
}));

/**
 * Positional factory function for datascript.parser/RuleBranch.
 */
datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleBranch, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__64068){
var extmap__5365__auto__ = (function (){var G__64078 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64068,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__64068)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64078);
} else {
return G__64078;
}
})();
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__64068),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__64068),null,cljs.core.not_empty(extmap__5365__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k64083,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__64087 = k64083;
var G__64087__$1 = (((G__64087 instanceof cljs.core.Keyword))?G__64087.fqn:null);
switch (G__64087__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64083,else__5326__auto__);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__64088){
var vec__64089 = p__64088;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64089,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64089,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Rule{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64082){
var self__ = this;
var G__64082__$1 = this;
return (new cljs.core.RecordIter((0),G__64082__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64084,other64085){
var self__ = this;
var this64084__$1 = this;
return (((!((other64085 == null)))) && ((((this64084__$1.constructor === other64085.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64084__$1.name,other64085.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64084__$1.branches,other64085.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64084__$1.__extmap,other64085.__extmap)))))))));
}));

(datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k64083){
var self__ = this;
var this__5330__auto____$1 = this;
var G__64092 = k64083;
var G__64092__$1 = (((G__64092 instanceof cljs.core.Keyword))?G__64092.fqn:null);
switch (G__64092__$1) {
case "name":
case "branches":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64083);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__64082){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__64093 = cljs.core.keyword_identical_QMARK_;
var expr__64094 = k__5332__auto__;
if(cljs.core.truth_((pred__64093.cljs$core$IFn$_invoke$arity$2 ? pred__64093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__64094) : pred__64093.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__64094)))){
return (new datascript.parser.Rule(G__64082,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64093.cljs$core$IFn$_invoke$arity$2 ? pred__64093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__64094) : pred__64093.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__64094)))){
return (new datascript.parser.Rule(self__.name,G__64082,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__64082),null));
}
}
}));

(datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches,null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__64082){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__64082,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f64079){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f64079),datascript.parser.postwalk(self__.branches,f64079),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred64080,acc64081){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64080,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64080,self__.name,acc64081));
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc64081){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc64081,self__.name),self__.branches);
}));

(datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
}));

(datascript.parser.Rule.cljs$lang$type = true);

(datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
}));

(datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Rule");
}));

/**
 * Positional factory function for datascript.parser/Rule.
 */
datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

/**
 * Factory function for datascript.parser/Rule, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__64086){
var extmap__5365__auto__ = (function (){var G__64096 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64086,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"branches","branches",-1240337268)], 0));
if(cljs.core.record_QMARK_(G__64086)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64096);
} else {
return G__64096;
}
})();
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__64086),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__64086),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__64097 = form;
var seq__64098 = cljs.core.seq(vec__64097);
var first__64099 = cljs.core.first(seq__64098);
var seq__64098__$1 = cljs.core.next(seq__64098);
var head = first__64099;
var clauses = seq__64098__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__64100 = head;
var seq__64101 = cljs.core.seq(vec__64100);
var first__64102 = cljs.core.first(seq__64101);
var seq__64101__$1 = cljs.core.next(seq__64101);
var name = first__64102;
var vars = seq__64101__$1;
var name_STAR_ = (function (){var or__5025__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule name, expected plain-symbol",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__5025__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Rule branch should have clauses",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule head, expected [rule-name rule-vars], got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot parse rule, expected [rule-head clause+]",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(branches));
var arity0 = datascript.parser.rule_vars_arity(vars0);
var seq__64103 = cljs.core.seq(cljs.core.next(branches));
var chunk__64105 = null;
var count__64106 = (0);
var i__64107 = (0);
while(true){
if((i__64107 < count__64106)){
var b = chunk__64105.cljs$core$IIndexed$_nth$arity$2(null,i__64107);
var vars_64420 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_64420))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_64420)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__64421 = seq__64103;
var G__64422 = chunk__64105;
var G__64423 = count__64106;
var G__64424 = (i__64107 + (1));
seq__64103 = G__64421;
chunk__64105 = G__64422;
count__64106 = G__64423;
i__64107 = G__64424;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__64103);
if(temp__5825__auto__){
var seq__64103__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64103__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__64103__$1);
var G__64425 = cljs.core.chunk_rest(seq__64103__$1);
var G__64426 = c__5548__auto__;
var G__64427 = cljs.core.count(c__5548__auto__);
var G__64428 = (0);
seq__64103 = G__64425;
chunk__64105 = G__64426;
count__64106 = G__64427;
i__64107 = G__64428;
continue;
} else {
var b = cljs.core.first(seq__64103__$1);
var vars_64429 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_64429))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)),"': ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0))," vs. ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_64429)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__64433 = cljs.core.next(seq__64103__$1);
var G__64434 = null;
var G__64435 = (0);
var G__64436 = (0);
seq__64103 = G__64433;
chunk__64105 = G__64434;
count__64106 = G__64435;
i__64107 = G__64436;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec((function (){var iter__5503__auto__ = (function datascript$parser$parse_rules_$_iter__64110(s__64111){
return (new cljs.core.LazySeq(null,(function (){
var s__64111__$1 = s__64111;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__64111__$1);
if(temp__5825__auto__){
var s__64111__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64111__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__64111__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__64113 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__64112 = (0);
while(true){
if((i__64112 < size__5502__auto__)){
var vec__64114 = cljs.core._nth(c__5501__auto__,i__64112);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64114,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64114,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__64112,vec__64114,name,branches,c__5501__auto__,size__5502__auto__,b__64113,s__64111__$2,temp__5825__auto__){
return (function (p1__64109_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__64109_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__64109_SHARP_),null,null,null));
});})(i__64112,vec__64114,name,branches,c__5501__auto__,size__5502__auto__,b__64113,s__64111__$2,temp__5825__auto__))
,branches);
cljs.core.chunk_append(b__64113,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__64438 = (i__64112 + (1));
i__64112 = G__64438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64113),datascript$parser$parse_rules_$_iter__64110(cljs.core.chunk_rest(s__64111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64113),null);
}
} else {
var vec__64117 = cljs.core.first(s__64111__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64117,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64117,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__64117,name,branches,s__64111__$2,temp__5825__auto__){
return (function (p1__64109_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__64109_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__64109_SHARP_),null,null,null));
});})(vec__64117,name,branches,s__64111__$2,temp__5825__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__64110(cljs.core.rest(s__64111__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qreturn_map,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qreturn_map = qreturn_map;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k64124,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__64128 = k64124;
var G__64128__$1 = (((G__64128 instanceof cljs.core.Keyword))?G__64128.fqn:null);
switch (G__64128__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qreturn-map":
return self__.qreturn_map;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64124,else__5326__auto__);

}
}));

(datascript.parser.Query.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__64129){
var vec__64130 = p__64129;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64130,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64130,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.parser.Query{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64123){
var self__ = this;
var G__64123__$1 = this;
return (new cljs.core.RecordIter((0),G__64123__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64125,other64126){
var self__ = this;
var this64125__$1 = this;
return (((!((other64126 == null)))) && ((((this64125__$1.constructor === other64126.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64125__$1.qfind,other64126.qfind)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64125__$1.qwith,other64126.qwith)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64125__$1.qreturn_map,other64126.qreturn_map)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64125__$1.qin,other64126.qin)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64125__$1.qwhere,other64126.qwhere)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64125__$1.__extmap,other64126.__extmap)))))))))))))));
}));

(datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k64124){
var self__ = this;
var this__5330__auto____$1 = this;
var G__64133 = k64124;
var G__64133__$1 = (((G__64133 instanceof cljs.core.Keyword))?G__64133.fqn:null);
switch (G__64133__$1) {
case "qfind":
case "qwith":
case "qreturn-map":
case "qin":
case "qwhere":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k64124);

}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__64123){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__64134 = cljs.core.keyword_identical_QMARK_;
var expr__64135 = k__5332__auto__;
if(cljs.core.truth_((pred__64134.cljs$core$IFn$_invoke$arity$2 ? pred__64134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__64135) : pred__64134.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__64135)))){
return (new datascript.parser.Query(G__64123,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64134.cljs$core$IFn$_invoke$arity$2 ? pred__64134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__64135) : pred__64134.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__64135)))){
return (new datascript.parser.Query(self__.qfind,G__64123,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64134.cljs$core$IFn$_invoke$arity$2 ? pred__64134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__64135) : pred__64134.call(null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__64135)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__64123,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64134.cljs$core$IFn$_invoke$arity$2 ? pred__64134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qin","qin",1372651151),expr__64135) : pred__64134.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__64135)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,G__64123,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64134.cljs$core$IFn$_invoke$arity$2 ? pred__64134.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__64135) : pred__64134.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__64135)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,G__64123,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__64123),null));
}
}
}
}
}
}));

(datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere,null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__64123){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,G__64123,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__62017__auto__,f64120){
var self__ = this;
var this__62017__auto____$1 = this;
var new__62018__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.qfind,f64120),datascript.parser.postwalk(self__.qwith,f64120),datascript.parser.postwalk(self__.qreturn_map,f64120),datascript.parser.postwalk(self__.qin,f64120),datascript.parser.postwalk(self__.qwhere,f64120),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__62017__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__62019__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__62018__auto__,meta__62019__auto__);
} else {
return new__62018__auto__;
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___62020__auto__,pred64121,acc64122){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64121,self__.qwhere,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64121,self__.qin,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64121,self__.qreturn_map,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64121,self__.qwith,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred64121,self__.qfind,acc64122)))));
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___62020__auto__,acc64122){
var self__ = this;
var ___62020__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc64122,self__.qfind),self__.qwith),self__.qreturn_map),self__.qin),self__.qwhere);
}));

(datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qreturn-map","qreturn-map",-813219775,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
}));

(datascript.parser.Query.cljs$lang$type = true);

(datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
}));

(datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.parser/Query");
}));

/**
 * Positional factory function for datascript.parser/Query.
 */
datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qreturn_map,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qreturn_map,qin,qwhere,null,null,null));
});

/**
 * Factory function for datascript.parser/Query, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__64127){
var extmap__5365__auto__ = (function (){var G__64137 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64127,new cljs.core.Keyword(null,"qfind","qfind",1529332972),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], 0));
if(cljs.core.record_QMARK_(G__64127)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64137);
} else {
return G__64137;
}
})();
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__64127),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__64127),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(G__64127),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__64127),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__64127),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5823__auto__ = cljs.core.first(qs);
if(cljs.core.truth_(temp__5823__auto__)){
var q = temp__5823__auto__;
if((q instanceof cljs.core.Keyword)){
var G__64448 = parsed;
var G__64449 = q;
var G__64450 = cljs.core.next(qs);
parsed = G__64448;
key = G__64449;
qs = G__64450;
continue;
} else {
var G__64451 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__64452 = key;
var G__64453 = cljs.core.next(qs);
parsed = G__64451;
key = G__64452;
qs = G__64453;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.explicit_input = (function datascript$parser$explicit_input(parsed){
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(parsed);
if((parsed instanceof datascript.parser.Pattern)){
return source;
} else {
if((!((source == null)))){
if((!((source instanceof datascript.parser.DefaultSrc)))){
return source;
} else {
return null;
}
} else {
return null;
}
}
});
datascript.parser.default_in = (function datascript$parser$default_in(qwhere){
if((!(cljs.core.empty_QMARK_(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(datascript.parser.explicit_input,qwhere))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form,form_map){
var find_vars_64454 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_64455 = cljs.core.set(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_64456 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_64457 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_64458 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_64454,with_vars_64455),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_64457,in_vars_64456));
var shared_64459 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_64454,with_vars_64455);
if(cljs.core.empty_QMARK_(unknown_64458)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query for unknown vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_64458)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_64458,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_(shared_64459)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":find and :with should not use same variables: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_64459)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_64459,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var temp__5829__auto___64464 = new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q);
if((temp__5829__auto___64464 == null)){
} else {
var return_map_64465 = temp__5829__auto___64464;
if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindScalar)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_64465)], 0))," does not work with single-scalar :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindColl)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_64465)], 0))," does not work with collection :find"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}
}

var temp__5829__auto___64466 = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q));
if((temp__5829__auto___64466 == null)){
} else {
var return_symbols_64468 = temp__5829__auto___64466;
var find_elements_64469 = datascript.parser.find_elements(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(return_symbols_64468),cljs.core.count(find_elements_64469))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Count of ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q))], 0))," must match count of :find"].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"return-map","return-map",1620104901),cljs.core.cons(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q)),return_symbols_64468),new cljs.core.Keyword(null,"find","find",496279456),find_elements_64469,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}

if(((1) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(form_map)], null))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Only one of :keys/:syms/:strs must be present",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

var in_vars_64471 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_64472 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__64138_SHARP_){
return (p1__64138_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_64473 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__64139_SHARP_){
return (p1__64139_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__5023__auto__ = datascript.parser.distinct_QMARK_(in_vars_64471);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_64472);
if(cljs.core.truth_(and__5023__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_64473);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :in should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_64477 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_64477))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Vars used in :with should be distinct",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_64478 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__64140_SHARP_){
return (p1__64140_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_64479 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__64141_SHARP_){
return (p1__64141_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_64480 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_64479,in_sources_64478);
if(cljs.core.empty_QMARK_(unknown_64480)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Where uses unknown source vars: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_64480)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_64480,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__64142_SHARP_){
return (p1__64142_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__64143_SHARP_){
return (p1__64143_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if((((!(cljs.core.empty_QMARK_(rule_exprs)))) && (cljs.core.empty_QMARK_(rules_vars)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Missing rules var '%' in :in",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_(q))?q:((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(q):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Query should be a vector or a map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var qwhere = datascript.parser.parse_where(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY));
var res = datascript.parser.map__GT_Query(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datascript.parser.parse_find(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5825__auto__)){
var with$ = temp__5825__auto__;
return datascript.parser.parse_with(with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),(function (){var or__5025__auto__ = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"syms","syms",-1575891762),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return datascript.parser.parse_return_map(new cljs.core.Keyword(null,"strs","strs",1175537277),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(qm));
}
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.parser.default_in(qwhere);
}
})()),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),qwhere], null));
datascript.parser.validate_query(res,q,qm);

return res;
});

//# sourceMappingURL=datascript.parser.js.map
