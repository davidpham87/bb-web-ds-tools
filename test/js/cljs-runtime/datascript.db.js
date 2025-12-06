goog.provide('datascript.db');
goog.scope(function(){
  datascript.db.goog$module$goog$array = goog.module.get('goog.array');
});
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.e0 = (0);
datascript.db.tx0 = (536870912);
datascript.db.emax = (2147483647);
datascript.db.txmax = (2147483647);
datascript.db.implicit_schema = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null);
datascript.db.seqable_QMARK_ = (function datascript$db$seqable_QMARK_(x){
return (((!(typeof x === 'string'))) && (((cljs.core.seqable_QMARK_(x)) || (me.tonsky.persistent_sorted_set.arrays.array_QMARK_(x)))));
});
datascript.db.conjv = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY);
datascript.db.conjs = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
/**
 * Same as reduce, but `f` takes [acc el idx]
 */
datascript.db.reduce_indexed = (function datascript$db$reduce_indexed(f,init,xs){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__61537,x){
var vec__61538 = p__61537;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61538,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61538,(1),null);
var res = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(acc,x,idx) : f.call(null,acc,x,idx));
if(cljs.core.reduced_QMARK_(res)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,idx], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(idx + (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,(0)], null),xs));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
datascript.db.combine_hashes = (function datascript$db$combine_hashes(x,y){
return cljs.core.hash_combine(x,y);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.hash_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.equiv_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.seq_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__61544 = arguments.length;
switch (G__61544) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.nth_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,i], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.nth_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,i,not_found], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.db.nth_datom.cljs$lang$maxFixedArity = 3);

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.assoc_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,k,v], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.val_at_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,k,not_found], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

/**
 * @interface
 */
datascript.db.IDatom = function(){};

var datascript$db$IDatom$datom_tx$dyn_61786 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (datascript.db.datom_tx[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (datascript.db.datom_tx["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDatom.datom-tx",this$);
}
}
});
datascript.db.datom_tx = (function datascript$db$datom_tx(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_tx$arity$1 == null)))))){
return this$.datascript$db$IDatom$datom_tx$arity$1(this$);
} else {
return datascript$db$IDatom$datom_tx$dyn_61786(this$);
}
});

var datascript$db$IDatom$datom_added$dyn_61791 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (datascript.db.datom_added[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (datascript.db.datom_added["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDatom.datom-added",this$);
}
}
});
datascript.db.datom_added = (function datascript$db$datom_added(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_added$arity$1 == null)))))){
return this$.datascript$db$IDatom$datom_added$arity$1(this$);
} else {
return datascript$db$IDatom$datom_added$dyn_61791(this$);
}
});

var datascript$db$IDatom$datom_get_idx$dyn_61792 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (datascript.db.datom_get_idx[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (datascript.db.datom_get_idx["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDatom.datom-get-idx",this$);
}
}
});
datascript.db.datom_get_idx = (function datascript$db$datom_get_idx(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_get_idx$arity$1 == null)))))){
return this$.datascript$db$IDatom$datom_get_idx$arity$1(this$);
} else {
return datascript$db$IDatom$datom_get_idx$dyn_61792(this$);
}
});

var datascript$db$IDatom$datom_set_idx$dyn_61795 = (function (this$,value){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (datascript.db.datom_set_idx[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5374__auto__.call(null,this$,value));
} else {
var m__5372__auto__ = (datascript.db.datom_set_idx["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__5372__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IDatom.datom-set-idx",this$);
}
}
});
datascript.db.datom_set_idx = (function datascript$db$datom_set_idx(this$,value){
if((((!((this$ == null)))) && ((!((this$.datascript$db$IDatom$datom_set_idx$arity$2 == null)))))){
return this$.datascript$db$IDatom$datom_set_idx$arity$2(this$,value);
} else {
return datascript$db$IDatom$datom_set_idx$dyn_61795(this$,value);
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {datascript.db.IDatom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,idx,_hash){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.idx = idx;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(datascript.db.Datom.prototype.datascript$db$IDatom$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.Datom.prototype.datascript$db$IDatom$datom_tx$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__.tx > (0))){
return self__.tx;
} else {
return (- self__.tx);
}
}));

(datascript.db.Datom.prototype.datascript$db$IDatom$datom_added$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (self__.tx > (0));
}));

(datascript.db.Datom.prototype.datascript$db$IDatom$datom_get_idx$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.idx;
}));

(datascript.db.Datom.prototype.datascript$db$IDatom$datom_set_idx$arity$2 = (function (_,value){
var self__ = this;
var ___$1 = this;
return (self__.idx = (value | (0)));
}));

(datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__._hash === (0))){
return (self__._hash = datascript.db.hash_datom(d__$1));
} else {
return self__._hash;
}
}));

(datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
return (((o instanceof datascript.db.Datom)) && (datascript.db.equiv_datom(d__$1,o)));
}));

(datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return datascript.db.seq_datom(d__$1);
}));

(datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom(d__$1,k,null);
}));

(datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom(d__$1,k,nf);
}));

(datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2(this$__$1,i);
}));

(datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3(this$__$1,i,not_found);
}));

(datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return datascript.db.assoc_datom(d__$1,k,v__$1);
}));

(datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.datascript$db$IDatom$datom_tx$arity$1(null),d__$1.datascript$db$IDatom$datom_added$arity$1(null)], null));
}));

(datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),cljs.core.with_meta(new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(datascript.db.Datom.cljs$lang$type = true);

(datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom");

(datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"datascript.db/Datom");
}));

/**
 * Positional factory function for datascript.db/Datom.
 */
datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,idx,_hash){
return (new datascript.db.Datom(e,a,v,tx,idx,_hash));
});

goog.exportSymbol("datascript.db.Datom",datascript.db.Datom);
datascript.db.datom = (function datascript$db$datom(var_args){
var G__61546 = arguments.length;
switch (G__61546) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,(536870912),(0),(0)));
}));

(datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,(0),(0)));
}));

(datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,(cljs.core.truth_(added)?tx:(- tx)),(0),(0)));
}));

(datascript.db.datom.cljs$lang$maxFixedArity = 5);

datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return null;
});

datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return datascript.db.combine_hashes(datascript.db.combine_hashes(cljs.core.hash(d.e),cljs.core.hash(d.a)),cljs.core.hash(d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return null;
});

datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (((d.e === o.e)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,o.v)))));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return null;
});

datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return (new cljs.core.List(null,d.e,(new cljs.core.List(null,d.a,(new cljs.core.List(null,d.v,(new cljs.core.List(null,d.datascript$db$IDatom$datom_tx$arity$1(null),(new cljs.core.List(null,d.datascript$db$IDatom$datom_added$arity$1(null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
return null;
});

datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
if((k instanceof cljs.core.Keyword)){
var G__61547 = k;
var G__61547__$1 = (((G__61547 instanceof cljs.core.Keyword))?G__61547.fqn:null);
switch (G__61547__$1) {
case "e":
return d.e;

break;
case "a":
return d.a;

break;
case "v":
return d.v;

break;
case "tx":
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case "added":
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
return not_found;

}
} else {
if(typeof k === 'string'){
var G__61548 = k;
switch (G__61548) {
case "e":
return d.e;

break;
case "a":
return d.a;

break;
case "v":
return d.v;

break;
case "tx":
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case "added":
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
return not_found;

}
} else {
return not_found;

}
}
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__61550 = arguments.length;
switch (G__61550) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
return null;
}));

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
return null;
}));

(datascript.db.nth_datom.cljs$lang$maxFixedArity = 3);


datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__61552 = arguments.length;
switch (G__61552) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__61553 = i;
switch (G__61553) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case (4):
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
throw (new Error(["Datom/-nth: Index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

}
}));

(datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__61554 = i;
switch (G__61554) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case (4):
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
return not_found;

}
}));

(datascript.db.nth_datom.cljs$lang$maxFixedArity = 3);

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
return null;
});

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__61555 = k;
var G__61555__$1 = (((G__61555 instanceof cljs.core.Keyword))?G__61555.fqn:null);
switch (G__61555__$1) {
case "e":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(v,d.a,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "a":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,v,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "v":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "tx":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,v,d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "added":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),v);

break;
default:
throw (new datascript.db.IllegalArgumentException(["invalid key for #datascript/Datom: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(x,y){
if((x == null)){
return (0);
} else {
if((y == null)){
return (0);
} else {
return cljs.core.long$(cljs.core.compare(x,y));
}
}
});
datascript.db.class_identical_QMARK_ = (function datascript$db$class_identical_QMARK_(x,y){
return (cljs.core.type(x) === cljs.core.type(y));
});
datascript.db.class_compare = (function datascript$db$class_compare(x,y){
return datascript.db.goog$module$goog$array.defaultCompare(cljs.core.type__GT_str(cljs.core.type(x)),cljs.core.type__GT_str(cljs.core.type(y)));
});
datascript.db.ihash = (function datascript$db$ihash(x){
return cljs.core.hash(x);
});
datascript.db.value_compare = (function datascript$db$value_compare(x,y){
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)){
return (0);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition1$ & (2048))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IComparable$))))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IComparable,x))){
return cljs.core._compare(x,y);
} else {
if((!(datascript.db.class_identical_QMARK_(x,y)))){
return datascript.db.class_compare(x,y);
} else {
if(((typeof x === 'number') || (((typeof x === 'string') || (((cljs.core.array_QMARK_(x)) || (((x === true) || (x === false))))))))){
return datascript.db.goog$module$goog$array.defaultCompare(x,y);
} else {
return (datascript.db.ihash(x) - datascript.db.ihash(y));

}
}
}
}
}catch (e61560){if((e61560 instanceof Error)){
var e = e61560;
if((!(datascript.db.class_identical_QMARK_(x,y)))){
return datascript.db.class_compare(x,y);
} else {
throw e;
}
} else {
throw e61560;

}
}});
datascript.db.value_cmp = (function datascript$db$value_cmp(x,y){
if((x == null)){
return (0);
} else {
if((y == null)){
return (0);
} else {
return datascript.db.value_compare(x,y);
}
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__60685__auto__ = (d1.e - d2.e);
if(((0) === c__60685__auto__)){
var c__60685__auto____$1 = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__60685__auto____$1)){
var c__60685__auto____$2 = datascript.db.value_cmp(d1.v,d2.v);
if(((0) === c__60685__auto____$2)){
var c__60685__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__60685__auto____$3)){
return (0);
} else {
return c__60685__auto____$3;
}
} else {
return c__60685__auto____$2;
}
} else {
return c__60685__auto____$1;
}
} else {
return c__60685__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__60685__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__60685__auto__)){
var c__60685__auto____$1 = (d1.e - d2.e);
if(((0) === c__60685__auto____$1)){
var c__60685__auto____$2 = datascript.db.value_cmp(d1.v,d2.v);
if(((0) === c__60685__auto____$2)){
var c__60685__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__60685__auto____$3)){
return (0);
} else {
return c__60685__auto____$3;
}
} else {
return c__60685__auto____$2;
}
} else {
return c__60685__auto____$1;
}
} else {
return c__60685__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__60685__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__60685__auto__)){
var c__60685__auto____$1 = datascript.db.value_cmp(d1.v,d2.v);
if(((0) === c__60685__auto____$1)){
var c__60685__auto____$2 = (d1.e - d2.e);
if(((0) === c__60685__auto____$2)){
var c__60685__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__60685__auto____$3)){
return (0);
} else {
return c__60685__auto____$3;
}
} else {
return c__60685__auto____$2;
}
} else {
return c__60685__auto____$1;
}
} else {
return c__60685__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare(a1,a2);
} else {
return datascript.db.goog$module$goog$array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eav_quick = (function datascript$db$cmp_datoms_eav_quick(d1,d2){
var c__60685__auto__ = (d1.e - d2.e);
if(((0) === c__60685__auto__)){
var c__60685__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__60685__auto____$1)){
var c__60685__auto____$2 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__60685__auto____$2)){
return (0);
} else {
return c__60685__auto____$2;
}
} else {
return c__60685__auto____$1;
}
} else {
return c__60685__auto__;
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__60685__auto__ = (d1.e - d2.e);
if(((0) === c__60685__auto__)){
var c__60685__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__60685__auto____$1)){
var c__60685__auto____$2 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__60685__auto____$2)){
var c__60685__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__60685__auto____$3)){
return (0);
} else {
return c__60685__auto____$3;
}
} else {
return c__60685__auto____$2;
}
} else {
return c__60685__auto____$1;
}
} else {
return c__60685__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__60685__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__60685__auto__)){
var c__60685__auto____$1 = (d1.e - d2.e);
if(((0) === c__60685__auto____$1)){
var c__60685__auto____$2 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__60685__auto____$2)){
var c__60685__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__60685__auto____$3)){
return (0);
} else {
return c__60685__auto____$3;
}
} else {
return c__60685__auto____$2;
}
} else {
return c__60685__auto____$1;
}
} else {
return c__60685__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__60685__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__60685__auto__)){
var c__60685__auto____$1 = datascript.db.value_compare(d1.v,d2.v);
if(((0) === c__60685__auto____$1)){
var c__60685__auto____$2 = (d1.e - d2.e);
if(((0) === c__60685__auto____$2)){
var c__60685__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__60685__auto____$3)){
return (0);
} else {
return c__60685__auto____$3;
}
} else {
return c__60685__auto____$2;
}
} else {
return c__60685__auto____$1;
}
} else {
return c__60685__auto__;
}
});
datascript.db.diff_sorted = (function datascript$db$diff_sorted(a,b,cmp){
var only_a = cljs.core.PersistentVector.EMPTY;
var only_b = cljs.core.PersistentVector.EMPTY;
var both = cljs.core.PersistentVector.EMPTY;
var a__$1 = a;
var b__$1 = b;
while(true){
if(cljs.core.empty_QMARK_(a__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(only_a),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(only_b,b__$1)),cljs.core.not_empty(both)], null);
} else {
if(cljs.core.empty_QMARK_(b__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(only_a,a__$1)),cljs.core.not_empty(only_b),cljs.core.not_empty(both)], null);
} else {
var first_a = cljs.core.first(a__$1);
var first_b = cljs.core.first(b__$1);
var diff = (function (){try{return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(first_a,first_b) : cmp.call(null,first_a,first_b));
}catch (e61567){if((e61567 instanceof Error)){
var _ = e61567;
return new cljs.core.Keyword(null,"incomparable","incomparable",1634329662);
} else {
throw e61567;

}
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(diff,new cljs.core.Keyword(null,"incomparable","incomparable",1634329662))){
var G__61841 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_a,first_a);
var G__61842 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_b,first_b);
var G__61843 = both;
var G__61844 = cljs.core.next(a__$1);
var G__61845 = cljs.core.next(b__$1);
only_a = G__61841;
only_b = G__61842;
both = G__61843;
a__$1 = G__61844;
b__$1 = G__61845;
continue;
} else {
if((diff === (0))){
var G__61846 = only_a;
var G__61847 = only_b;
var G__61848 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(both,first_a);
var G__61849 = cljs.core.next(a__$1);
var G__61850 = cljs.core.next(b__$1);
only_a = G__61846;
only_b = G__61847;
both = G__61848;
a__$1 = G__61849;
b__$1 = G__61850;
continue;
} else {
if((diff < (0))){
var G__61851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_a,first_a);
var G__61852 = only_b;
var G__61853 = both;
var G__61854 = cljs.core.next(a__$1);
var G__61855 = b__$1;
only_a = G__61851;
only_b = G__61852;
both = G__61853;
a__$1 = G__61854;
b__$1 = G__61855;
continue;
} else {
if((diff > (0))){
var G__61859 = only_a;
var G__61860 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_b,first_b);
var G__61861 = both;
var G__61862 = a__$1;
var G__61863 = cljs.core.next(b__$1);
only_a = G__61859;
only_b = G__61860;
both = G__61861;
a__$1 = G__61862;
b__$1 = G__61863;
continue;
} else {
return null;
}
}
}
}

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.hash_db),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.hash_fdb),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [db], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.equiv_db),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,other], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.restore_db = (function datascript$db$restore_db(keys){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.restore_db),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.indexing_QMARK_),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,attr], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.pr_db),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,w,opts], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t,default_e,default_tx){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.resolve_datom),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v,t,default_e,default_tx], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,c0,c1,c2,c3,default_e,default_tx){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.components__GT_pattern),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,index,c0,c1,c2,c3,default_e,default_tx], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

var datascript$db$ISearch$_search$dyn_61868 = (function (data,pattern){
var x__5373__auto__ = (((data == null))?null:data);
var m__5374__auto__ = (datascript.db._search[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__5374__auto__.call(null,data,pattern));
} else {
var m__5372__auto__ = (datascript.db._search["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__5372__auto__.call(null,data,pattern));
} else {
throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
});
datascript.db._search = (function datascript$db$_search(data,pattern){
if((((!((data == null)))) && ((!((data.datascript$db$ISearch$_search$arity$2 == null)))))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
return datascript$db$ISearch$_search$dyn_61868(data,pattern);
}
});

datascript.db.fsearch = (function datascript$db$fsearch(data,pattern){
return cljs.core.first(datascript.db._search(data,pattern));
});

/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

var datascript$db$IIndexAccess$_datoms$dyn_61869 = (function (db,index,c0,c1,c2,c3){
var x__5373__auto__ = (((db == null))?null:db);
var m__5374__auto__ = (datascript.db._datoms[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$6(db,index,c0,c1,c2,c3) : m__5374__auto__.call(null,db,index,c0,c1,c2,c3));
} else {
var m__5372__auto__ = (datascript.db._datoms["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$6(db,index,c0,c1,c2,c3) : m__5372__auto__.call(null,db,index,c0,c1,c2,c3));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-datoms",db);
}
}
});
datascript.db._datoms = (function datascript$db$_datoms(db,index,c0,c1,c2,c3){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_datoms$arity$6 == null)))))){
return db.datascript$db$IIndexAccess$_datoms$arity$6(db,index,c0,c1,c2,c3);
} else {
return datascript$db$IIndexAccess$_datoms$dyn_61869(db,index,c0,c1,c2,c3);
}
});

var datascript$db$IIndexAccess$_seek_datoms$dyn_61870 = (function (db,index,c0,c1,c2,c3){
var x__5373__auto__ = (((db == null))?null:db);
var m__5374__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$6(db,index,c0,c1,c2,c3) : m__5374__auto__.call(null,db,index,c0,c1,c2,c3));
} else {
var m__5372__auto__ = (datascript.db._seek_datoms["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$6(db,index,c0,c1,c2,c3) : m__5372__auto__.call(null,db,index,c0,c1,c2,c3));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-seek-datoms",db);
}
}
});
datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,c0,c1,c2,c3){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_seek_datoms$arity$6 == null)))))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$6(db,index,c0,c1,c2,c3);
} else {
return datascript$db$IIndexAccess$_seek_datoms$dyn_61870(db,index,c0,c1,c2,c3);
}
});

var datascript$db$IIndexAccess$_rseek_datoms$dyn_61871 = (function (db,index,c0,c1,c2,c3){
var x__5373__auto__ = (((db == null))?null:db);
var m__5374__auto__ = (datascript.db._rseek_datoms[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$6(db,index,c0,c1,c2,c3) : m__5374__auto__.call(null,db,index,c0,c1,c2,c3));
} else {
var m__5372__auto__ = (datascript.db._rseek_datoms["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$6 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$6(db,index,c0,c1,c2,c3) : m__5372__auto__.call(null,db,index,c0,c1,c2,c3));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-rseek-datoms",db);
}
}
});
datascript.db._rseek_datoms = (function datascript$db$_rseek_datoms(db,index,c0,c1,c2,c3){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_rseek_datoms$arity$6 == null)))))){
return db.datascript$db$IIndexAccess$_rseek_datoms$arity$6(db,index,c0,c1,c2,c3);
} else {
return datascript$db$IIndexAccess$_rseek_datoms$dyn_61871(db,index,c0,c1,c2,c3);
}
});

var datascript$db$IIndexAccess$_index_range$dyn_61872 = (function (db,attr,start,end){
var x__5373__auto__ = (((db == null))?null:db);
var m__5374__auto__ = (datascript.db._index_range[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__5374__auto__.call(null,db,attr,start,end));
} else {
var m__5372__auto__ = (datascript.db._index_range["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__5372__auto__.call(null,db,attr,start,end));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-index-range",db);
}
}
});
datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((((!((db == null)))) && ((!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
return datascript$db$IIndexAccess$_index_range$dyn_61872(db,attr,start,end);
}
});

datascript.db.validate_indexed = (function datascript$db$validate_indexed(db,index,c0,c1,c2,c3){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new cljs.core.Keyword(null,"avet","avet",1383857032))){
var temp__5829__auto__ = c0;
if((temp__5829__auto__ == null)){
return null;
} else {
var attr = temp__5829__auto__;
if(datascript.db.indexing_QMARK_(db,attr)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))," should be marked as :db/index true"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"index-access","index-access",-1548960265),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c0,c1,c2,c3], null)], null));
}
}
} else {
return null;
}
});

/**
 * @interface
 */
datascript.db.IDB = function(){};

var datascript$db$IDB$_schema$dyn_61873 = (function (db){
var x__5373__auto__ = (((db == null))?null:db);
var m__5374__auto__ = (datascript.db._schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__5374__auto__.call(null,db));
} else {
var m__5372__auto__ = (datascript.db._schema["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__5372__auto__.call(null,db));
} else {
throw cljs.core.missing_protocol("IDB.-schema",db);
}
}
});
datascript.db._schema = (function datascript$db$_schema(db){
if((((!((db == null)))) && ((!((db.datascript$db$IDB$_schema$arity$1 == null)))))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
return datascript$db$IDB$_schema$dyn_61873(db);
}
});

var datascript$db$IDB$_attrs_by$dyn_61874 = (function (db,property){
var x__5373__auto__ = (((db == null))?null:db);
var m__5374__auto__ = (datascript.db._attrs_by[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__5374__auto__.call(null,db,property));
} else {
var m__5372__auto__ = (datascript.db._attrs_by["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__5372__auto__.call(null,db,property));
} else {
throw cljs.core.missing_protocol("IDB.-attrs-by",db);
}
}
});
datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((((!((db == null)))) && ((!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
return datascript$db$IDB$_attrs_by$dyn_61874(db,property);
}
});

datascript.db.db_transient = (function datascript$db$db_transient(db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.transient$),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.transient$),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.transient$);
});
datascript.db.db_persistent_BANG_ = (function datascript$db$db_persistent_BANG_(db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.persistent_BANG_),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.persistent_BANG_),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.persistent_BANG_);
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
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,pull_patterns,pull_attrs,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.pull_patterns = pull_patterns;
this.pull_attrs = pull_attrs;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k61574,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__61578 = k61574;
var G__61578__$1 = (((G__61578 instanceof cljs.core.Keyword))?G__61578.fqn:null);
switch (G__61578__$1) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
case "pull-patterns":
return self__.pull_patterns;

break;
case "pull-attrs":
return self__.pull_attrs;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61574,else__5326__auto__);

}
}));

(datascript.db.DB.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__61579){
var vec__61580 = p__61579;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61580,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61580,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.db.DB{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),self__.pull_patterns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),self__.pull_attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
}));

(datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61573){
var self__ = this;
var G__61573__$1 = this;
return (new cljs.core.RecordIter((0),G__61573__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1515640948 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61575,other61576){
var self__ = this;
var this61575__$1 = this;
return (((!((other61576 == null)))) && ((((this61575__$1.constructor === other61576.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.schema,other61576.schema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.eavt,other61576.eavt)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.aevt,other61576.aevt)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.avet,other61576.avet)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.max_eid,other61576.max_eid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.max_tx,other61576.max_tx)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.rschema,other61576.rschema)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.pull_patterns,other61576.pull_patterns)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.pull_attrs,other61576.pull_attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.hash,other61576.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61575__$1.__extmap,other61576.__extmap)))))))))))))))))))))))));
}));

(datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),null,new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.db.DB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k61574){
var self__ = this;
var this__5330__auto____$1 = this;
var G__61583 = k61574;
var G__61583__$1 = (((G__61583 instanceof cljs.core.Keyword))?G__61583.fqn:null);
switch (G__61583__$1) {
case "schema":
case "eavt":
case "aevt":
case "avet":
case "max-eid":
case "max-tx":
case "rschema":
case "pull-patterns":
case "pull-attrs":
case "hash":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61574);

}
}));

(datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__61573){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__61584 = cljs.core.keyword_identical_QMARK_;
var expr__61585 = k__5332__auto__;
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__61585)))){
return (new datascript.db.DB(G__61573,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__61585)))){
return (new datascript.db.DB(self__.schema,G__61573,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,G__61573,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avet","avet",1383857032),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__61573,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__61573,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__61573,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__61573,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__61573,self__.pull_attrs,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,G__61573,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61584.cljs$core$IFn$_invoke$arity$2 ? pred__61584.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),expr__61585) : pred__61584.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__61585)))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,G__61573,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__61573),null));
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
}));

(datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),self__.pull_patterns,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),self__.pull_attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash,null))], null),self__.__extmap));
}));

(datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__61573){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.pull_patterns,self__.pull_attrs,self__.hash,G__61573,self__.__extmap,self__.__hash));
}));

(datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null),new cljs.core.Symbol(null,"pull-patterns","pull-patterns",1296836479,null),new cljs.core.Symbol(null,"pull-attrs","pull-attrs",665668350,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
}));

(datascript.db.DB.cljs$lang$type = true);

(datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.db/DB",null,(1),null));
}));

(datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.db/DB");
}));

/**
 * Positional factory function for datascript.db/DB.
 */
datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,pull_patterns,pull_attrs,hash){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,pull_patterns,pull_attrs,hash,null,null,null));
});

/**
 * Factory function for datascript.db/DB, taking a map of keywords to field values.
 */
datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__61577){
var extmap__5365__auto__ = (function (){var G__61587 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61577,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),new cljs.core.Keyword(null,"hash","hash",-13781596)], 0));
if(cljs.core.record_QMARK_(G__61577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61587);
} else {
return G__61587;
}
})();
return (new datascript.db.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177).cljs$core$IFn$_invoke$arity$1(G__61577),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__61577),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


(datascript.db.DB.prototype.clojure$data$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.clojure$data$Diff$diff_similar$arity$2 = (function (a,b){
var a__$1 = this;
return datascript.db.diff_sorted(a__$1.eavt,new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(b),datascript.db.cmp_datoms_eav_quick);
}));

(datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db(db__$1,w,opts);
}));

(datascript.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(db__$1.eavt);
}));

(datascript.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq(db__$1.eavt);
}));

(datascript.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_db(db__$1);
}));

(datascript.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db(db__$1,other);
}));

(datascript.db.DB.prototype.cljs$core$IEditableCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_transient(db__$1);
}));

(datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.with_meta(datascript.db.restore_db(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db__$1.schema,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),db__$1.rschema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.empty(db__$1.eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),cljs.core.empty(db__$1.aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),cljs.core.empty(db__$1.avet)], null)),cljs.core.meta(db__$1));
}));

(datascript.db.DB.prototype.cljs$core$ITransientCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (db,key){
var db__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("datascript.DB/conj! is not supported",cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.db.DB.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_persistent_BANG_(db__$1);
}));

(datascript.db.DB.prototype.clojure$data$EqualityPartition$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.clojure$data$EqualityPartition$equality_partition$arity$1 = (function (x){
var x__$1 = this;
return new cljs.core.Keyword("datascript","db","datascript/db",-1190971692);
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$6 = (function (db,index,c0,c1,c2,c3){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,index,c0,c1,c2,c3);

return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),datascript.db.components__GT_pattern(db__$1,index,c0,c1,c2,c3,(0),(536870912)),datascript.db.components__GT_pattern(db__$1,index,c0,c1,c2,c3,(2147483647),(2147483647)));
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$6 = (function (db,index,c0,c1,c2,c3){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,index,c0,c1,c2,c3);

return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),datascript.db.components__GT_pattern(db__$1,index,c0,c1,c2,c3,(0),(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),null,null,(2147483647)));
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$6 = (function (db,index,c0,c1,c2,c3){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,index,c0,c1,c2,c3);

return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),datascript.db.components__GT_pattern(db__$1,index,c0,c1,c2,c3,(2147483647),(2147483647)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),null,null,(536870912)));
}));

(datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
datascript.db.validate_indexed(db__$1,new cljs.core.Keyword(null,"avet","avet",1383857032),attr,null,null,null);

var attr__60803__auto___61881 = attr;
if((((attr__60803__auto___61881 instanceof cljs.core.Keyword)) || (typeof attr__60803__auto___61881 === 'string'))){
} else {
var at__60804__auto___61882 = (new cljs.core.List(null,new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"db","db",-1661185010,null),(new cljs.core.List(null,attr,(new cljs.core.List(null,start,(new cljs.core.List(null,end,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto___61881], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto___61882], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto___61881,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto___61882,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}

return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db__$1.avet,datascript.db.resolve_datom(db__$1,null,attr,start,null,(0),(536870912)),datascript.db.resolve_datom(db__$1,null,attr,end,null,(2147483647),(2147483647)));
}));

(datascript.db.DB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
}));

(datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
var fexpr__61588 = db__$1.rschema;
return (fexpr__61588.cljs$core$IFn$_invoke$arity$1 ? fexpr__61588.cljs$core$IFn$_invoke$arity$1(property) : fexpr__61588.call(null,property));
}));

(datascript.db.DB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__61589 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61589,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61589,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61589,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61589,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
var pred = (function (p1__61571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__61571_SHARP_);
});
var multival_QMARK_ = cljs.core.contains_QMARK_(datascript.db._attrs_by(db__$1,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)),a);
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,(2147483647)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(2147483647)));
}
}
} else {
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return ((pred(d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
} else {
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return pred(d.v);
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if((!((v == null)))){
if(cljs.core.truth_(tx)){
if(datascript.db.indexing_QMARK_(db__$1,a)){
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,v,(2147483647))));
} else {
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return ((pred(d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
}
} else {
if(datascript.db.indexing_QMARK_(db__$1,a)){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,v,(2147483647)));
} else {
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return pred(d.v);
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.__GT_Eduction(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
})),me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647)));
}
}
} else {
if((!((v == null)))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return ((pred(d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
}),eavt);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return pred(d.v);
}),eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
}),eavt);
} else {
return eavt;
}
}
}
}
}));
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__5023__auto__ = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$ISearch$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x));
if(and__5023__auto__){
var and__5023__auto____$1 = (((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IIndexAccess$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x));
if(and__5023__auto____$1){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IDB$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k61599,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__61603 = k61599;
var G__61603__$1 = (((G__61603 instanceof cljs.core.Keyword))?G__61603.fqn:null);
switch (G__61603__$1) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61599,else__5326__auto__);

}
}));

(datascript.db.FilteredDB.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__61604){
var vec__61605 = p__61604;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61605,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.db.FilteredDB{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61598){
var self__ = this;
var G__61598__$1 = this;
return (new cljs.core.RecordIter((0),G__61598__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-351969977 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61600,other61601){
var self__ = this;
var this61600__$1 = this;
return (((!((other61601 == null)))) && ((((this61600__$1.constructor === other61601.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61600__$1.unfiltered_db,other61601.unfiltered_db)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61600__$1.pred,other61601.pred)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61600__$1.hash,other61601.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61600__$1.__extmap,other61601.__extmap)))))))))));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k61599){
var self__ = this;
var this__5330__auto____$1 = this;
var G__61608 = k61599;
var G__61608__$1 = (((G__61608 instanceof cljs.core.Keyword))?G__61608.fqn:null);
switch (G__61608__$1) {
case "unfiltered-db":
case "pred":
case "hash":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61599);

}
}));

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__61598){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__61609 = cljs.core.keyword_identical_QMARK_;
var expr__61610 = k__5332__auto__;
if(cljs.core.truth_((pred__61609.cljs$core$IFn$_invoke$arity$2 ? pred__61609.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__61610) : pred__61609.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__61610)))){
return (new datascript.db.FilteredDB(G__61598,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61609.cljs$core$IFn$_invoke$arity$2 ? pred__61609.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pred","pred",1927423397),expr__61610) : pred__61609.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__61610)))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__61598,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61609.cljs$core$IFn$_invoke$arity$2 ? pred__61609.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),expr__61610) : pred__61609.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__61610)))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__61598,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__61598),null));
}
}
}
}));

(datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash,null))], null),self__.__extmap));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__61598){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__61598,self__.__extmap,self__.__hash));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
}));

(datascript.db.FilteredDB.cljs$lang$type = true);

(datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.db/FilteredDB",null,(1),null));
}));

(datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.db/FilteredDB");
}));

/**
 * Positional factory function for datascript.db/FilteredDB.
 */
datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datascript.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

/**
 * Factory function for datascript.db/FilteredDB, taking a map of keywords to field values.
 */
datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__61602){
var extmap__5365__auto__ = (function (){var G__61612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61602,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)], 0));
if(cljs.core.record_QMARK_(G__61602)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61612);
} else {
return G__61612;
}
})();
return (new datascript.db.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__61602),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__61602),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__61602),null,cljs.core.not_empty(extmap__5365__auto__),null));
});


(datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db(db__$1,w,opts);
}));

(datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(datascript.db._datoms(db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_fdb(db__$1);
}));

(datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db(db__$1,other);
}));

(datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$6 = (function (db,index,c0,c1,c2,c3){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._datoms(db__$1.unfiltered_db,index,c0,c1,c2,c3));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$6 = (function (db,index,c0,c1,c2,c3){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._seek_datoms(db__$1.unfiltered_db,index,c0,c1,c2,c3));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$6 = (function (db,index,c0,c1,c2,c3){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._rseek_datoms(db__$1.unfiltered_db,index,c0,c1,c2,c3));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._index_range(db__$1.unfiltered_db,attr,start,end));
}));

(datascript.db.FilteredDB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema(db__$1.unfiltered_db);
}));

(datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by(db__$1.unfiltered_db,property);
}));

(datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._search(db__$1.unfiltered_db,pattern));
}));
datascript.db.unfiltered_db = (function datascript$db$unfiltered_db(db){
if((db instanceof datascript.db.FilteredDB)){
return db.unfiltered_db;
} else {
return db;
}
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
var G__61613 = v;
var G__61613__$1 = (((G__61613 instanceof cljs.core.Keyword))?G__61613.fqn:null);
switch (G__61613__$1) {
case "db.unique/identity":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.unique/value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
case "db.cardinality/many":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);

break;
case "db.type/ref":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);

break;
default:
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),k)) && (v === true))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","index","db/index",-1531680669),k)) && (v === true))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092),k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}

}
});
/**
 * e.g. :reg/semester => #{:reg/semester+course+student ...}
 */
datascript.db.attr_tuples = (function datascript$db$attr_tuples(schema,rschema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,tuple_attr){
return datascript.db.reduce_indexed((function (m__$1,src_attr,idx){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(m__$1,src_attr,cljs.core.assoc,tuple_attr,idx);
}),m,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,tuple_attr)));
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914).cljs$core$IFn$_invoke$arity$1(rschema));
});
/**
 * :db/unique           => #{attr ...}
 * :db.unique/identity  => #{attr ...}
 * :db.unique/value     => #{attr ...}
 * :db/index            => #{attr ...}
 * :db.cardinality/many => #{attr ...}
 * :db.type/ref         => #{attr ...}
 * :db/isComponent      => #{attr ...}
 * :db.type/tuple       => #{attr ...}
 * :db/attrTuples       => {attr => {tuple-attr => idx}}
 */
datascript.db.rschema = (function datascript$db$rschema(schema){
var rschema = cljs.core.reduce_kv((function (rschema,attr,attr_schema){
return cljs.core.reduce_kv((function (rschema__$1,key,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (rschema__$2,prop){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(rschema__$2,prop,datascript.db.conjs,attr);
}),rschema__$1,datascript.db.attr__GT_properties(key,value));
}),rschema,attr_schema);
}),cljs.core.PersistentArrayMap.EMPTY,schema);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rschema,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631),datascript.db.attr_tuples(schema,rschema));
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if((((v == null)) || (cljs.core.contains_QMARK_(expected,v)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([a,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v])])], 0)),", expected one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__61614 = cljs.core.seq(schema);
var chunk__61615 = null;
var count__61616 = (0);
var i__61617 = (0);
while(true){
if((i__61617 < count__61616)){
var vec__61636 = chunk__61615.cljs$core$IIndexed$_nth$arity$2(null,i__61617);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61636,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61636,(1),null);
var comp_QMARK__61919 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__5023__auto__ = comp_QMARK__61919;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__5023__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914),null,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv))) && ((!(cljs.core.contains_QMARK_(kv,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": {:db/valueType :db.type/tuple} should also have :db/tupleAttrs"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null));
} else {
}

if(cljs.core.contains_QMARK_(kv,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
var ex_data_61925 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," has :db/tupleAttrs, must be :db.cardinality/one"].join(''),ex_data_61925);
} else {
}

var attrs_61927 = new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1(kv);
if(cljs.core.sequential_QMARK_(attrs_61927)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs must be a sequential collection, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_61927], 0))].join(''),ex_data_61925);
}

if(cljs.core.empty_QMARK_(attrs_61927)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t be empty"].join(''),ex_data_61925);
} else {
}

var seq__61639_61928 = cljs.core.seq(attrs_61927);
var chunk__61641_61929 = null;
var count__61642_61930 = (0);
var i__61643_61931 = (0);
while(true){
if((i__61643_61931 < count__61642_61930)){
var attr_61932 = chunk__61641_61929.cljs$core$IIndexed$_nth$arity$2(null,i__61643_61931);
var ex_data_61933__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_61925,new cljs.core.Keyword(null,"value","value",305978217),attr_61932);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61932),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61932], 0))].join(''),ex_data_61933__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61932)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61932], 0))].join(''),ex_data_61933__$1);
} else {
}


var G__61934 = seq__61639_61928;
var G__61935 = chunk__61641_61929;
var G__61936 = count__61642_61930;
var G__61937 = (i__61643_61931 + (1));
seq__61639_61928 = G__61934;
chunk__61641_61929 = G__61935;
count__61642_61930 = G__61936;
i__61643_61931 = G__61937;
continue;
} else {
var temp__5825__auto___61938 = cljs.core.seq(seq__61639_61928);
if(temp__5825__auto___61938){
var seq__61639_61939__$1 = temp__5825__auto___61938;
if(cljs.core.chunked_seq_QMARK_(seq__61639_61939__$1)){
var c__5548__auto___61940 = cljs.core.chunk_first(seq__61639_61939__$1);
var G__61941 = cljs.core.chunk_rest(seq__61639_61939__$1);
var G__61942 = c__5548__auto___61940;
var G__61943 = cljs.core.count(c__5548__auto___61940);
var G__61944 = (0);
seq__61639_61928 = G__61941;
chunk__61641_61929 = G__61942;
count__61642_61930 = G__61943;
i__61643_61931 = G__61944;
continue;
} else {
var attr_61945 = cljs.core.first(seq__61639_61939__$1);
var ex_data_61946__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_61925,new cljs.core.Keyword(null,"value","value",305978217),attr_61945);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61945),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61945], 0))].join(''),ex_data_61946__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61945)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61945], 0))].join(''),ex_data_61946__$1);
} else {
}


var G__61948 = cljs.core.next(seq__61639_61939__$1);
var G__61949 = null;
var G__61950 = (0);
var G__61951 = (0);
seq__61639_61928 = G__61948;
chunk__61641_61929 = G__61949;
count__61642_61930 = G__61950;
i__61643_61931 = G__61951;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__61953 = seq__61614;
var G__61954 = chunk__61615;
var G__61955 = count__61616;
var G__61956 = (i__61617 + (1));
seq__61614 = G__61953;
chunk__61615 = G__61954;
count__61616 = G__61955;
i__61617 = G__61956;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__61614);
if(temp__5825__auto__){
var seq__61614__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61614__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__61614__$1);
var G__61957 = cljs.core.chunk_rest(seq__61614__$1);
var G__61958 = c__5548__auto__;
var G__61959 = cljs.core.count(c__5548__auto__);
var G__61960 = (0);
seq__61614 = G__61957;
chunk__61615 = G__61958;
count__61616 = G__61959;
i__61617 = G__61960;
continue;
} else {
var vec__61645 = cljs.core.first(seq__61614__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61645,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61645,(1),null);
var comp_QMARK__61961 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__5023__auto__ = comp_QMARK__61961;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__5023__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914),null,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key(a,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv))) && ((!(cljs.core.contains_QMARK_(kv,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": {:db/valueType :db.type/tuple} should also have :db/tupleAttrs"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null));
} else {
}

if(cljs.core.contains_QMARK_(kv,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
var ex_data_61967 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," has :db/tupleAttrs, must be :db.cardinality/one"].join(''),ex_data_61967);
} else {
}

var attrs_61968 = new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1(kv);
if(cljs.core.sequential_QMARK_(attrs_61968)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs must be a sequential collection, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_61968], 0))].join(''),ex_data_61967);
}

if(cljs.core.empty_QMARK_(attrs_61968)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t be empty"].join(''),ex_data_61967);
} else {
}

var seq__61648_61969 = cljs.core.seq(attrs_61968);
var chunk__61650_61970 = null;
var count__61651_61971 = (0);
var i__61652_61972 = (0);
while(true){
if((i__61652_61972 < count__61651_61971)){
var attr_61973 = chunk__61650_61970.cljs$core$IIndexed$_nth$arity$2(null,i__61652_61972);
var ex_data_61974__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_61967,new cljs.core.Keyword(null,"value","value",305978217),attr_61973);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61973),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61973], 0))].join(''),ex_data_61974__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61973)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61973], 0))].join(''),ex_data_61974__$1);
} else {
}


var G__61975 = seq__61648_61969;
var G__61976 = chunk__61650_61970;
var G__61977 = count__61651_61971;
var G__61978 = (i__61652_61972 + (1));
seq__61648_61969 = G__61975;
chunk__61650_61970 = G__61976;
count__61651_61971 = G__61977;
i__61652_61972 = G__61978;
continue;
} else {
var temp__5825__auto___61979__$1 = cljs.core.seq(seq__61648_61969);
if(temp__5825__auto___61979__$1){
var seq__61648_61980__$1 = temp__5825__auto___61979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__61648_61980__$1)){
var c__5548__auto___61981 = cljs.core.chunk_first(seq__61648_61980__$1);
var G__61982 = cljs.core.chunk_rest(seq__61648_61980__$1);
var G__61983 = c__5548__auto___61981;
var G__61984 = cljs.core.count(c__5548__auto___61981);
var G__61985 = (0);
seq__61648_61969 = G__61982;
chunk__61650_61970 = G__61983;
count__61651_61971 = G__61984;
i__61652_61972 = G__61985;
continue;
} else {
var attr_61986 = cljs.core.first(seq__61648_61980__$1);
var ex_data_61987__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ex_data_61967,new cljs.core.Keyword(null,"value","value",305978217),attr_61986);
if(cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61986),new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on another tuple attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61986], 0))].join(''),ex_data_61987__$1);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,attr_61986)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," :db/tupleAttrs can\u2019t depend on :db.cardinality/many attribute: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr_61986], 0))].join(''),ex_data_61987__$1);
} else {
}


var G__61988 = cljs.core.next(seq__61648_61980__$1);
var G__61989 = null;
var G__61990 = (0);
var G__61991 = (0);
seq__61648_61969 = G__61988;
chunk__61650_61970 = G__61989;
count__61651_61971 = G__61990;
i__61652_61972 = G__61991;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__61992 = cljs.core.next(seq__61614__$1);
var G__61993 = null;
var G__61994 = (0);
var G__61995 = (0);
seq__61614 = G__61992;
chunk__61615 = G__61993;
count__61616 = G__61994;
i__61617 = G__61995;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.db.empty_db = (function datascript$db$empty_db(schema,opts){
if((((schema == null)) || (cljs.core.map_QMARK_(schema)))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

datascript.db.validate_schema(schema);

return datascript.db.map__GT_DB(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)],[schema,(536870912),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),me.tonsky.persistent_sorted_set.sorted_set_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cmp","cmp",575646375),datascript.db.cmp_datoms_aevt)),me.tonsky.persistent_sorted_set.sorted_set_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cmp","cmp",575646375),datascript.db.cmp_datoms_avet)),(0),me.tonsky.persistent_sorted_set.sorted_set_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cmp","cmp",575646375),datascript.db.cmp_datoms_eavt)),datascript.lru.cache((100)),datascript.lru.cache((100)),datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema], 0)))]));
});
datascript.db.init_max_eid = (function datascript$db$init_max_eid(eavt){
var or__5025__auto__ = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(((536870912) - (1)),null,null,(2147483647)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),null,null,(536870912)))));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
});
datascript.db.init_db = (function datascript$db$init_db(datoms,schema,opts){
var temp__5829__auto___62001 = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(datascript.db.datom_QMARK_,datoms));
if((temp__5829__auto___62001 == null)){
} else {
var not_datom_62002 = temp__5829__auto___62001;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["init-db expects list of Datoms, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(not_datom_62002)], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"init-db","init-db",1595181278)], null));
}

datascript.db.validate_schema(schema);

var rschema = datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema], 0)));
var indexed = new cljs.core.Keyword("db","index","db/index",-1531680669).cljs$core$IFn$_invoke$arity$1(rschema);
var arr = (function (){var G__61654 = datoms;
if((!(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(datoms)))){
return me.tonsky.persistent_sorted_set.arrays.into_array(G__61654);
} else {
return G__61654;
}
})();
var _ = me.tonsky.persistent_sorted_set.arrays.asort(arr,datascript.db.cmp_datoms_eavt_quick);
var eavt = me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$4(datascript.db.cmp_datoms_eavt,arr,arr.length,opts);
var ___$1 = me.tonsky.persistent_sorted_set.arrays.asort(arr,datascript.db.cmp_datoms_aevt_quick);
var aevt = me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$4(datascript.db.cmp_datoms_aevt,arr,arr.length,opts);
var avet_datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return cljs.core.contains_QMARK_(indexed,d.a);
}),datoms);
var avet_arr = cljs.core.to_array(avet_datoms);
var ___$2 = me.tonsky.persistent_sorted_set.arrays.asort(avet_arr,datascript.db.cmp_datoms_avet_quick);
var avet = me.tonsky.persistent_sorted_set.from_sorted_array.cljs$core$IFn$_invoke$arity$4(datascript.db.cmp_datoms_avet,avet_arr,avet_arr.length,opts);
var max_eid = datascript.db.init_max_eid(eavt);
var max_tx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return d.datascript$db$IDatom$datom_tx$arity$1(null);
})),cljs.core.max,(536870912),eavt);
return datascript.db.map__GT_DB(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)],[schema,max_tx,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),aevt,avet,max_eid,eavt,datascript.lru.cache((100)),datascript.lru.cache((100)),rschema]));
});
datascript.db.restore_db = (function datascript$db$restore_db(p__61655){
var map__61656 = p__61655;
var map__61656__$1 = cljs.core.__destructure_map(map__61656);
var keys = map__61656__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var eavt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var aevt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"aevt","aevt",-585148059));
var avet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"avet","avet",1383857032));
var max_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075));
var max_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61656__$1,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339));
return null;
});

datascript.db.restore_db = (function datascript$db$restore_db(p__61657){
var map__61658 = p__61657;
var map__61658__$1 = cljs.core.__destructure_map(map__61658);
var keys = map__61658__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var eavt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073));
var aevt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"aevt","aevt",-585148059));
var avet = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"avet","avet",1383857032));
var max_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075));
var max_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61658__$1,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339));
return datascript.db.map__GT_DB(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),new cljs.core.Keyword(null,"rschema","rschema",-1196134054)],[schema,(function (){var or__5025__auto__ = max_tx;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (536870912);
}
})(),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),aevt,avet,(function (){var or__5025__auto__ = max_eid;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),eavt,datascript.lru.cache((100)),datascript.lru.cache((100)),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(keys);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema], 0)));
}
})()]));
});
datascript.db.with_schema = (function datascript$db$with_schema(db,schema){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if((((schema == null)) || (cljs.core.map_QMARK_(schema)))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null)], null),schema], 0))),new cljs.core.Keyword(null,"pull-patterns","pull-patterns",-343695048),datascript.lru.cache((100)),new cljs.core.Keyword(null,"pull-attrs","pull-attrs",-974863177),datascript.lru.cache((100)),new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], 0));
});
datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__62003 = cljs.core.next(xs);
var G__62004 = cljs.core.next(ys);
xs = G__62003;
ys = G__62004;
continue;
} else {
return false;

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
return null;
});

datascript.db.hash_db = (function datascript$db$hash_db(db){
var h = cljs.core.deref(db.hash);
if((h === (0))){
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(db.schema),cljs.core.hash(db.eavt)));
} else {
return h;
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
return null;
});

datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var h = cljs.core.deref(db.hash);
var datoms = (function (){var or__5025__auto__ = datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__5025__auto__ = datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(datascript.db._schema(db)),cljs.core.hash_unordered_coll(datoms__$1)));
} else {
return h;
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
return null;
});

datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
return (((((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),datascript.db._schema(other))) && (datascript.db.equiv_db_index(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null),datascript.db._datoms(other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null))))));
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
return null;
});

datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write(w,"#datascript/DB {");

cljs.core._write(w,":schema ");

cljs.core.pr_writer(datascript.db._schema(db),w,opts);

cljs.core._write(w,", :datoms ");

cljs.core.pr_sequential_writer(w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,datascript.db.datom_tx(d)], null));
}),"["," ","]",opts,datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null));

return cljs.core._write(w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__61659){
var map__61660 = p__61659;
var map__61660__$1 = cljs.core.__destructure_map(map__61660);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61660__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61660__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datascript.db.init_db(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61661){
var vec__61662 = p__61661;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61662,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61662,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61662,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61662,(3),null);
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx);
}),datoms),schema,cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.entid_strict),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,eid], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.ref_QMARK_),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,attr], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t,default_e,default_tx){
return null;
});

datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t,default_e,default_tx){
if((!((a == null)))){
var attr__60803__auto___62010 = a;
if((((attr__60803__auto___62010 instanceof cljs.core.Keyword)) || (typeof attr__60803__auto___62010 === 'string'))){
} else {
var at__60804__auto___62011 = (new cljs.core.List(null,new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null),(new cljs.core.List(null,new cljs.core.Symbol(null,"db","db",-1661185010,null),(new cljs.core.List(null,e,(new cljs.core.List(null,a,(new cljs.core.List(null,v,(new cljs.core.List(null,t,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto___62010], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto___62011], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto___62010,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto___62011,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}
} else {
}

return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((((!((e == null))))?datascript.db.entid_strict(db,e):default_e),a,(((((!((v == null)))) && (datascript.db.ref_QMARK_(db,a))))?datascript.db.entid_strict(db,v):v),(((!((t == null))))?datascript.db.entid_strict(db,t):default_tx));
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,c0,c1,c2,c3,default_e,default_tx){
return null;
});

datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,c0,c1,c2,c3,default_e,default_tx){
var G__61665 = index;
var G__61665__$1 = (((G__61665 instanceof cljs.core.Keyword))?G__61665.fqn:null);
switch (G__61665__$1) {
case "eavt":
return datascript.db.resolve_datom(db,c0,c1,c2,c3,default_e,default_tx);

break;
case "aevt":
return datascript.db.resolve_datom(db,c1,c0,c2,c3,default_e,default_tx);

break;
case "avet":
return datascript.db.resolve_datom(db,c2,c0,c1,c3,default_e,default_tx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61665__$1)].join('')));

}
});
datascript.db.find_datom = (function datascript$db$find_datom(db,index,c0,c1,c2,c3){
datascript.db.validate_indexed(db,index,c0,c1,c2,c3);

var set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,index);
var cmp = set.comparator;
var from = datascript.db.components__GT_pattern(db,index,c0,c1,c2,c3,(0),(536870912));
var to = datascript.db.components__GT_pattern(db,index,c0,c1,c2,c3,(2147483647),(2147483647));
var datom = cljs.core.first(me.tonsky.persistent_sorted_set.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(set),from));
if((((!((datom == null)))) && (((0) <= (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(to,datom) : cmp.call(null,to,datom)))))){
return datom;
} else {
return null;
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k61667,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__61671 = k61667;
var G__61671__$1 = (((G__61671 instanceof cljs.core.Keyword))?G__61671.fqn:null);
switch (G__61671__$1) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k61667,else__5326__auto__);

}
}));

(datascript.db.TxReport.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__61672){
var vec__61673 = p__61672;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61673,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61673,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#datascript.db.TxReport{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
}));

(datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__61666){
var self__ = this;
var G__61666__$1 = this;
return (new cljs.core.RecordIter((0),G__61666__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-2022644885 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this61668,other61669){
var self__ = this;
var this61668__$1 = this;
return (((!((other61669 == null)))) && ((((this61668__$1.constructor === other61669.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61668__$1.db_before,other61669.db_before)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61668__$1.db_after,other61669.db_after)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61668__$1.tx_data,other61669.tx_data)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61668__$1.tempids,other61669.tempids)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61668__$1.tx_meta,other61669.tx_meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this61668__$1.__extmap,other61669.__extmap)))))))))))))));
}));

(datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(datascript.db.TxReport.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k61667){
var self__ = this;
var this__5330__auto____$1 = this;
var G__61676 = k61667;
var G__61676__$1 = (((G__61676 instanceof cljs.core.Keyword))?G__61676.fqn:null);
switch (G__61676__$1) {
case "db-before":
case "db-after":
case "tx-data":
case "tempids":
case "tx-meta":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k61667);

}
}));

(datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__61666){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__61677 = cljs.core.keyword_identical_QMARK_;
var expr__61678 = k__5332__auto__;
if(cljs.core.truth_((pred__61677.cljs$core$IFn$_invoke$arity$2 ? pred__61677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__61678) : pred__61677.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__61678)))){
return (new datascript.db.TxReport(G__61666,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61677.cljs$core$IFn$_invoke$arity$2 ? pred__61677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__61678) : pred__61677.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__61678)))){
return (new datascript.db.TxReport(self__.db_before,G__61666,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61677.cljs$core$IFn$_invoke$arity$2 ? pred__61677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__61678) : pred__61677.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__61678)))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__61666,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61677.cljs$core$IFn$_invoke$arity$2 ? pred__61677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__61678) : pred__61677.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__61678)))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__61666,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__61677.cljs$core$IFn$_invoke$arity$2 ? pred__61677.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__61678) : pred__61677.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__61678)))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__61666,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__61666),null));
}
}
}
}
}
}));

(datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta,null))], null),self__.__extmap));
}));

(datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__61666){
var self__ = this;
var this__5322__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__61666,self__.__extmap,self__.__hash));
}));

(datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
}));

(datascript.db.TxReport.cljs$lang$type = true);

(datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"datascript.db/TxReport",null,(1),null));
}));

(datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"datascript.db/TxReport");
}));

/**
 * Positional factory function for datascript.db/TxReport.
 */
datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

/**
 * Factory function for datascript.db/TxReport, taking a map of keywords to field values.
 */
datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__61670){
var extmap__5365__auto__ = (function (){var G__61680 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__61670,new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], 0));
if(cljs.core.record_QMARK_(G__61670)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__61680);
} else {
return G__61680;
}
})();
return (new datascript.db.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__61670),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__61670),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__61670),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__61670),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__61670),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return null;
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_(datascript.db._attrs_by(db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return null;
});

datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return null;
});

datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return null;
});

datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return null;
});

datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","index","db/index",-1531680669));
});
datascript.db.tuple_QMARK_ = (function datascript$db$tuple_QMARK_(db,attr){
return null;
});

datascript.db.tuple_QMARK_ = (function datascript$db$tuple_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914));
});
datascript.db.tuple_source_QMARK_ = (function datascript$db$tuple_source_QMARK_(db,attr){
return null;
});

datascript.db.tuple_source_QMARK_ = (function datascript$db$tuple_source_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631));
});
datascript.db.entid = (function datascript$db$entid(db,eid){
return null;
});

datascript.db.entid = (function datascript$db$entid(db,eid){
while(true){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(((typeof eid === 'number') && ((eid > (0))))){
if((eid > (2147483647))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Highest supported entity id is ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2147483647)], 0)),", got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),new cljs.core.Keyword(null,"value","value",305978217),eid], null));
} else {
return eid;
}
} else {
if(cljs.core.sequential_QMARK_(eid)){
var vec__61681 = eid;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61681,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61681,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(eid),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Lookup ref should contain 2 elements: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((!(datascript.db.is_attr_QMARK_(db,attr,new cljs.core.Keyword("db","unique","db/unique",329396388))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Lookup ref attribute should be marked as :db/unique: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((value == null)){
return null;
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),attr,value,null,null)));

}
}
}
} else {
if(cljs.core.array_QMARK_(eid)){
var G__62026 = db;
var G__62027 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(eid);
db = G__62026;
eid = G__62027;
continue;
} else {
if((eid instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword("db","ident","db/ident",-737096),eid,null,null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected number or lookup ref for entity id, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
}
}
break;
}
});
datascript.db.numeric_eid_exists_QMARK_ = (function datascript$db$numeric_eid_exists_QMARK_(db,eid){
return null;
});

datascript.db.numeric_eid_exists_QMARK_ = (function datascript$db$numeric_eid_exists_QMARK_(db,eid){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eid,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._seek_datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eid,null,null,null))));
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
return null;
});

datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__5025__auto__ = datascript.db.entid(db,eid);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Nothing found for entity id ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
return null;
});

datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if((!((eid == null)))){
return datascript.db.entid_strict(db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__5023__auto__ = datom.datascript$db$IDatom$datom_added$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return datascript.db.is_attr_QMARK_(db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__5023__auto__;
}
})())){
var temp__5829__auto__ = cljs.core.not_empty(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),datom.a,datom.v,null,null));
if((temp__5829__auto__ == null)){
return null;
} else {
var found = temp__5829__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot add ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datom], 0))," because of unique constraint: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([found], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
}
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.long$(new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(report))) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (cljs.core.long$(new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db)) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,":db/current-tx")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"datomic.tx")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"datascript.tx")))))));
});
datascript.db.tempid_QMARK_ = (function datascript$db$tempid_QMARK_(x){
return ((((typeof x === 'number') && ((x < (0))))) || (typeof x === 'string'));
});
datascript.db.new_eid_QMARK_ = (function datascript$db$new_eid_QMARK_(db,eid){
return (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < (536870912))));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__61684 = db;
if(datascript.db.new_eid_QMARK_(db,eid)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61684,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid);
} else {
return G__61684;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var G__61686 = arguments.length;
switch (G__61686) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.Keyword(null,"db-after","db-after",-571884666),datascript.db.advance_max_eid,eid);
}));

(datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__61687 = report;
var G__61687__$1 = ((datascript.db.tx_id_QMARK_(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61687,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,e,eid):G__61687);
var G__61687__$2 = ((datascript.db.tempid_QMARK_(e))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61687__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,e,eid):G__61687__$1);
var G__61687__$3 = (((((!(datascript.db.tempid_QMARK_(e)))) && (datascript.db.new_eid_QMARK_(new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report),eid))))?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61687__$2,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,eid,eid):G__61687__$2);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__61687__$3,new cljs.core.Keyword(null,"db-after","db-after",-571884666),datascript.db.advance_max_eid,eid);

}));

(datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3);

datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom(db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_(db,datom.a);
if(cljs.core.truth_(datom.datascript$db$IDatom$datom_added$arity$1(null))){
var G__61688 = db;
var G__61688__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61688,new cljs.core.Keyword(null,"eavt","eavt",-666437073),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__61688__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61688__$1,new cljs.core.Keyword(null,"aevt","aevt",-585148059),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__61688__$3 = ((indexing_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61688__$2,new cljs.core.Keyword(null,"avet","avet",1383857032),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_avet_quick):G__61688__$2);
var G__61688__$4 = datascript.db.advance_max_eid(G__61688__$3,datom.e)
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61688__$4,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

} else {
var temp__5827__auto__ = datascript.db.fsearch(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null));
if((temp__5827__auto__ == null)){
return db;
} else {
var removing = temp__5827__auto__;
var G__61689 = db;
var G__61689__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61689,new cljs.core.Keyword(null,"eavt","eavt",-666437073),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__61689__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61689__$1,new cljs.core.Keyword(null,"aevt","aevt",-585148059),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__61689__$3 = ((indexing_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__61689__$2,new cljs.core.Keyword(null,"avet","avet",1383857032),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_avet_quick):G__61689__$2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61689__$3,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

}
}
});
datascript.db.queue_tuple = (function datascript$db$queue_tuple(queue,tuple,idx,db,e,a,v){
var tuple_value = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(queue,tuple);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,tuple,null,null)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),tuple))),null));
}
}
})();
var tuple_value_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tuple_value,idx,v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(queue,tuple,tuple_value_SINGLEQUOTE_);
});
datascript.db.queue_tuples = (function datascript$db$queue_tuples(queue,tuples,db,e,a,v){
return cljs.core.reduce_kv((function (queue__$1,tuple,idx){
return datascript.db.queue_tuple(queue__$1,tuple,idx,db,e,a,v);
}),queue,tuples);
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(datom);
var report_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report,new cljs.core.Keyword(null,"db-after","db-after",-571884666),datascript.db.with_datom(db,datom)),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.conj,datom);
if(datascript.db.tuple_source_QMARK_(db,a)){
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom);
var v = (cljs.core.truth_(datascript.db.datom_added(datom))?new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datom):null);
var queue = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029).cljs$core$IFn$_invoke$arity$1(report_SINGLEQUOTE_),e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var tuples = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.db._attrs_by(db,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631)),a);
var queue_SINGLEQUOTE_ = datascript.db.queue_tuples(queue,tuples,db,e,a,v);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(report_SINGLEQUOTE_,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029),cljs.core.assoc,e,queue_SINGLEQUOTE_);
} else {
return report_SINGLEQUOTE_;
}
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_(attr)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),["_",cljs.core.name(attr)].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__61690 = cljs.core.re_matches(/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61690,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61690,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61690,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1))].join('');
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
/**
 * Returns [entity' upserts]. Upsert attributes that resolve to existing entities
 * are removed from entity, rest are kept in entity for insertion. No validation is performed.
 * 
 * upserts :: {:name  {"Ivan"  1}
 *             :email {"ivan@" 2}
 *             :alias {"abc"   3
 *                     "def"   4}}}
 */
datascript.db.resolve_upserts = (function datascript$db$resolve_upserts(db,entity){
var temp__5827__auto__ = cljs.core.not_empty(datascript.db._attrs_by(db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if((temp__5827__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity,null], null);
} else {
var idents = temp__5827__auto__;
var resolve = (function (a,v){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),a,v,null,null)));
});
var split = (function (a,vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
var temp__5827__auto____$1 = resolve(a,v);
if((temp__5827__auto____$1 == null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,(0),cljs.core.conj,v);
} else {
var e = temp__5827__auto____$1;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(acc,(1),cljs.core.assoc,v,e);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),vs);
});
return cljs.core.reduce_kv((function (p__61693,a,v){
var vec__61694 = p__61693;
var entity_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61694,(0),null);
var upserts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61694,(1),null);
var attr__60803__auto___62080 = a;
if((((attr__60803__auto___62080 instanceof cljs.core.Keyword)) || (typeof attr__60803__auto___62080 === 'string'))){
} else {
var at__60804__auto___62081 = entity;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto___62080], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto___62081], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto___62080,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto___62081,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}

if((v == null)){
var at__60810__auto___62082 = entity;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot store nil as a value at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60810__auto___62082], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"context","context",-830191113),at__60810__auto___62082,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
} else {
}

if((!(cljs.core.contains_QMARK_(idents,a)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity_SINGLEQUOTE_,a,v),upserts], null);
} else {
if(((datascript.db.multival_QMARK_(db,a)) && (((me.tonsky.persistent_sorted_set.arrays.array_QMARK_(v)) || (((cljs.core.coll_QMARK_(v)) && ((!(cljs.core.map_QMARK_(v)))))))))){
var vec__61697 = split(a,v);
var insert = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61697,(0),null);
var upsert = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61697,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__61700 = entity_SINGLEQUOTE_;
if((!(cljs.core.empty_QMARK_(insert)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61700,a,insert);
} else {
return G__61700;
}
})(),(function (){var G__61701 = upserts;
if((!(cljs.core.empty_QMARK_(upsert)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61701,a,upsert);
} else {
return G__61701;
}
})()], null);
} else {
var temp__5827__auto____$1 = resolve(a,v);
if((temp__5827__auto____$1 == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity_SINGLEQUOTE_,a,v),upserts], null);
} else {
var e = temp__5827__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity_SINGLEQUOTE_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(upserts,a,cljs.core.PersistentArrayMap.createAsIfByAssoc([v,e]))], null);
}

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),entity);
}
});
/**
 * Throws if not all upserts point to the same entity. 
 * Returns single eid that all upserts point to, or null.
 */
datascript.db.validate_upserts = (function datascript$db$validate_upserts(entity,upserts){
var upsert_ids = cljs.core.reduce_kv((function (m,a,v__GT_e){
return cljs.core.reduce_kv((function (m__$1,v,e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null));
}),m,v__GT_e);
}),cljs.core.PersistentArrayMap.EMPTY,upserts);
if(((2) <= cljs.core.count(upsert_ids))){
var vec__61702 = cljs.core.first(upsert_ids);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61702,(0),null);
var vec__61705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61702,(1),null);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61705,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61705,(1),null);
var vec__61708 = cljs.core.second(upsert_ids);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61708,(0),null);
var vec__61711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61708,(1),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61711,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61711,(1),null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upserts: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a1,v1], null)], 0))," resolves to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e1], 0)),", but ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a2,v2], null)], 0))," resolves to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e2], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,a1,v1], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,a2,v2], null)], null));
} else {
var vec__61714 = cljs.core.first(upsert_ids);
var upsert_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61714,(0),null);
var vec__61717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61714,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61717,(1),null);
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if((((!((upsert_id == null)))) && ((((!((eid == null)))) && ((((!(datascript.db.tempid_QMARK_(eid)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upsert_id,eid)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upsert: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0))," resolves to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upsert_id], 0)),", but entity already has :db/id ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [upsert_id,a,v], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null)], null));
} else {
}

return upsert_id;
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if((!(((datascript.db.reverse_ref_QMARK_(a)) || (datascript.db.multival_QMARK_(db,a)))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((!(((me.tonsky.persistent_sorted_set.arrays.array_QMARK_(vs)) || (((cljs.core.coll_QMARK_(vs)) && ((!(cljs.core.map_QMARK_(vs)))))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vs),(2))) && (datascript.db.is_attr_QMARK_(db,cljs.core.first(vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var a_PLUS_vs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__61720){
var vec__61721 = p__61720;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61721,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61721,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,((datascript.db.tuple_QMARK_(db,a))?(1):(0)),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,vs], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),entity));
var iter__5503__auto__ = (function datascript$db$explode_$_iter__61724(s__61725){
return (new cljs.core.LazySeq(null,(function (){
var s__61725__$1 = s__61725;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__61725__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var vec__61730 = cljs.core.first(xs__6385__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61730,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61730,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = (function (){var attr__60803__auto__ = a;
if((((attr__60803__auto__ instanceof cljs.core.Keyword)) || (typeof attr__60803__auto__ === 'string'))){
return null;
} else {
var at__60804__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs]);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto__], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto__], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto__,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto__,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}
})();
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref(a):a);
var ___$1 = ((((reverse_QMARK_) && ((!(datascript.db.ref_QMARK_(db,straight_a))))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0)),": reverse attribute name requires {:db/valueType :db.type/ref} in schema"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs])], null))})():null);
var iterys__5499__auto__ = ((function (s__61725__$1,_,reverse_QMARK_,straight_a,___$1,vec__61730,a,vs,xs__6385__auto__,temp__5825__auto__,eid,a_PLUS_vs){
return (function datascript$db$explode_$_iter__61724_$_iter__61726(s__61727){
return (new cljs.core.LazySeq(null,((function (s__61725__$1,_,reverse_QMARK_,straight_a,___$1,vec__61730,a,vs,xs__6385__auto__,temp__5825__auto__,eid,a_PLUS_vs){
return (function (){
var s__61727__$1 = s__61727;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__61727__$1);
if(temp__5825__auto____$1){
var s__61727__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61727__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__61727__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__61729 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__61728 = (0);
while(true){
if((i__61728 < size__5502__auto__)){
var v = cljs.core._nth(c__5501__auto__,i__61728);
cljs.core.chunk_append(b__61729,((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__62090 = (i__61728 + (1));
i__61728 = G__62090;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61729),datascript$db$explode_$_iter__61724_$_iter__61726(cljs.core.chunk_rest(s__61727__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61729),null);
}
} else {
var v = cljs.core.first(s__61727__$2);
return cljs.core.cons(((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datascript$db$explode_$_iter__61724_$_iter__61726(cljs.core.rest(s__61727__$2)));
}
} else {
return null;
}
break;
}
});})(s__61725__$1,_,reverse_QMARK_,straight_a,___$1,vec__61730,a,vs,xs__6385__auto__,temp__5825__auto__,eid,a_PLUS_vs))
,null,null));
});})(s__61725__$1,_,reverse_QMARK_,straight_a,___$1,vec__61730,a,vs,xs__6385__auto__,temp__5825__auto__,eid,a_PLUS_vs))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(datascript.db.maybe_wrap_multival(db,a,vs)));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,datascript$db$explode_$_iter__61724(cljs.core.rest(s__61725__$1)));
} else {
var G__62091 = cljs.core.rest(s__61725__$1);
s__61725__$1 = G__62091;
continue;
}
} else {
var G__62092 = cljs.core.rest(s__61725__$1);
s__61725__$1 = G__62092;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(a_PLUS_vs);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__61733){
var vec__61734 = p__61733;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61734,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61734,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61734,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61734,(3),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61734,(4),null);
var ent = vec__61734;
var attr__60803__auto___62093 = a;
if((((attr__60803__auto___62093 instanceof cljs.core.Keyword)) || (typeof attr__60803__auto___62093 === 'string'))){
} else {
var at__60804__auto___62094 = ent;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto___62093], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto___62094], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto___62093,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto___62094,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}

if((v == null)){
var at__60810__auto___62095 = ent;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot store nil as a value at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60810__auto___62095], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"context","context",-830191113),at__60810__auto___62095,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
} else {
}

var tx__$1 = (function (){var or__5025__auto__ = tx;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.db.current_tx(report);
}
})();
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict(db,e);
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
var new_datom = datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e__$1,a,v__$1,tx__$1);
var multival_QMARK_ = datascript.db.multival_QMARK_(db,a);
var old_datom = ((multival_QMARK_)?datascript.db.fsearch(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)):datascript.db.fsearch(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if((old_datom == null)){
return datascript.db.transact_report(report,new_datom);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.Keyword("datascript.db","tx-redundant","datascript.db/tx-redundant",-1117921977),datascript.db.conjv,new_datom);
} else {
return datascript.db.transact_report(datascript.db.transact_report(report,datascript.db.datom.cljs$core$IFn$_invoke$arity$5(e__$1,a,old_datom.v,tx__$1,false)),new_datom);

}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx(report);
return datascript.db.transact_report(report,datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,tx,false));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return datascript.db.component_QMARK_(db,d.a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),d.v], null);
}))),datoms);
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not implemented: (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.db.transact_tx_data),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [initial_report,initial_es], null))].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(initial_report,report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(initial_report),tempid)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upsert: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tempid], 0))," resolves"," both to ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upserted_eid], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(initial_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempid], null))], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078)], null));
} else {
var tempids_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid,upserted_eid);
var report_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_report,new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempids_SINGLEQUOTE_);
return datascript.db.transact_tx_data(report_SINGLEQUOTE_,es);
}
});
datascript.db.builtin_fn_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),null,new cljs.core.Keyword("db","cas","db/cas",-451542322),null,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),null,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),null,new cljs.core.Keyword("db","retract","db/retract",-1549825231),null,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164),null,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172),null,new cljs.core.Keyword("db","add","db/add",235286841),null], null), null);
datascript.db.flush_tuples = (function datascript$db$flush_tuples(report){
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var schema = datascript.db._schema(db);
var attr_tuples = datascript.db._attrs_by(db,new cljs.core.Keyword("db","attrTuples","db/attrTuples",860541631));
return cljs.core.reduce_kv((function (entities,eid,tuples_PLUS_values){
return cljs.core.reduce_kv((function (entities__$1,tuple,value){
var value__$1 = ((cljs.core.every_QMARK_(cljs.core.nil_QMARK_,value))?null:value);
var current = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eid,tuple,null,null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,current)){
return entities__$1;
} else {
if((value__$1 == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entities__$1,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),eid,tuple,current], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datascript.db","internal","datascript.db/internal",-249301114),true], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entities__$1,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,tuple,value__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datascript.db","internal","datascript.db/internal",-249301114),true], null)));

}
}
}),entities,tuples_PLUS_values);
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029).cljs$core$IFn$_invoke$arity$1(report));
});
datascript.db.check_value_tempids = (function datascript$db$check_value_tempids(report){
var temp__5823__auto__ = new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162).cljs$core$IFn$_invoke$arity$1(report);
if(cljs.core.truth_(temp__5823__auto__)){
var tempids = temp__5823__auto__;
var all_tempids = cljs.core.transient$(tempids);
var reduce_fn = (function (tempids__$1,datom){
if(cljs.core.truth_(datascript.db.datom_added(datom))){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(tempids__$1,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(datom));
} else {
return tempids__$1;
}
});
var unused = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reduce_fn,all_tempids,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(report));
var unused__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reduce_fn,unused,new cljs.core.Keyword("datascript.db","tx-redundant","datascript.db/tx-redundant",-1117921977).cljs$core$IFn$_invoke$arity$1(report));
if((cljs.core.count(unused__$1) === (0))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(report,new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("datascript.db","tx-redundant","datascript.db/tx-redundant",-1117921977)], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Tempids used only as value in transaction: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.persistent_BANG_(unused__$1)))], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tempids","tempids",1767509089),unused__$1], null));
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(report,new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("datascript.db","tx-redundant","datascript.db/tx-redundant",-1117921977)], 0));
}
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
return null;
});

datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if((((initial_es == null)) || (cljs.core.sequential_QMARK_(initial_es)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad transaction data ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_es], 0)),", expected sequential collection"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),initial_es], null));
}

var initial_report_SINGLEQUOTE_ = initial_report;
var has_tuples_QMARK_ = (!(cljs.core.empty_QMARK_(datascript.db._attrs_by(new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(initial_report),new cljs.core.Keyword("db.type","tuple","db.type/tuple",938234914)))));
var initial_es_SINGLEQUOTE_ = ((has_tuples_QMARK_)?cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(initial_es,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("datascript.db","flush-tuples","datascript.db/flush-tuples",-797350002))):initial_es);
var report = initial_report_SINGLEQUOTE_;
var es = initial_es_SINGLEQUOTE_;
while(true){
if(cljs.core.empty_QMARK_(es)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(datascript.db.check_value_tempids(report),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.assoc,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132),datascript.db.current_tx(report)),new cljs.core.Keyword(null,"db-after","db-after",-571884666),cljs.core.update,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),cljs.core.inc);
} else {
var vec__61759 = es;
var seq__61760 = cljs.core.seq(vec__61759);
var first__61761 = cljs.core.first(seq__61760);
var seq__61760__$1 = cljs.core.next(seq__61760);
var entity = first__61761;
var entities = seq__61760__$1;
if((entity == null)){
var G__62096 = report;
var G__62097 = entities;
report = G__62096;
es = G__62097;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("datascript.db","flush-tuples","datascript.db/flush-tuples",-797350002),entity)){
if(cljs.core.contains_QMARK_(report,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029))){
var G__62098 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.Keyword("datascript.db","queued-tuples","datascript.db/queued-tuples",-762852029));
var G__62099 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.flush_tuples(report),entities);
report = G__62098;
es = G__62099;
continue;
} else {
var G__62100 = report;
var G__62101 = entities;
report = G__62100;
es = G__62101;
continue;
}
} else {
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var tempids = new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report);
if(cljs.core.map_QMARK_(entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_(old_eid)){
var id = datascript.db.current_tx(report);
var G__62102 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,id);
var G__62103 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__62102;
es = G__62103;
continue;
} else {
if(cljs.core.sequential_QMARK_(old_eid)){
var id = datascript.db.entid_strict(db,old_eid);
var G__62104 = report;
var G__62105 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__62104;
es = G__62105;
continue;
} else {
var vec__61762 = datascript.db.resolve_upserts(db,entity);
var entity_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61762,(0),null);
var upserts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61762,(1),null);
var upserted_eid = datascript.db.validate_upserts(entity_SINGLEQUOTE_,upserts);
if((!((upserted_eid == null)))){
if(((datascript.db.tempid_QMARK_(old_eid)) && (((cljs.core.contains_QMARK_(tempids,old_eid)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,old_eid))))))){
return datascript.db.retry_with_tempid(initial_report,report,initial_es,old_eid,upserted_eid);
} else {
var G__62106 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,upserted_eid),new cljs.core.Keyword("datascript.db","tx-redundant","datascript.db/tx-redundant",-1117921977),datascript.db.conjv,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(upserted_eid,null,null,(536870912)));
var G__62107 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity_SINGLEQUOTE_,new cljs.core.Keyword("db","id","db/id",-1388397098),upserted_eid)),entities);
report = G__62106;
es = G__62107;
continue;
}
} else {
if(((typeof old_eid === 'number') || ((((old_eid == null)) || (typeof old_eid === 'string'))))){
var new_eid = (((old_eid == null))?datascript.db.next_eid(db):((datascript.db.tempid_QMARK_(old_eid))?(function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,old_eid);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return datascript.db.next_eid(db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var G__62109 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,new_eid);
var G__62110 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,new_entity),entities);
report = G__62109;
es = G__62110;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected number, string or lookup ref for :db/id, got ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_eid], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_(entity)){
var vec__61765 = entity;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61765,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61765,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61765,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61765,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__61768 = entity;
var seq__61769 = cljs.core.seq(vec__61768);
var first__61770 = cljs.core.first(seq__61769);
var seq__61769__$1 = cljs.core.next(seq__61769);
var _ = first__61770;
var first__61770__$1 = cljs.core.first(seq__61769__$1);
var seq__61769__$2 = cljs.core.next(seq__61769__$1);
var f = first__61770__$1;
var args = seq__61769__$2;
var G__62115 = report;
var G__62116 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__62115;
es = G__62116;
continue;
} else {
if((((op instanceof cljs.core.Keyword)) && (cljs.core.not((datascript.db.builtin_fn_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.builtin_fn_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : datascript.db.builtin_fn_QMARK_.call(null,op)))))){
var temp__5827__auto__ = datascript.db.entid(db,op);
if((temp__5827__auto__ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t find entity for transaction fn ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
} else {
var ident = temp__5827__auto__;
var fun = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(datascript.db.fsearch(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,new cljs.core.Keyword("db","fn","db/fn",-1175261470)], null)));
var args = cljs.core.next(entity);
if(cljs.core.fn_QMARK_(fun)){
var G__62117 = report;
var G__62118 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fun,db,args),entities);
report = G__62117;
es = G__62118;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0))," expected to have :db/fn attribute with fn? value"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
}
}
} else {
if(((datascript.db.tempid_QMARK_(e)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't use tempid in '",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0)),"'. Tempids are allowed in :db/add only"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"op","op",-1882987955),entity], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","cas","db/cas",-451542322))))){
var vec__61771 = entity;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61771,(0),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61771,(1),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61771,(2),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61771,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61771,(4),null);
var e__$2 = datascript.db.entid_strict(db,e__$1);
var ___$1 = (function (){var attr__60803__auto__ = a__$1;
if((((attr__60803__auto__ instanceof cljs.core.Keyword)) || (typeof attr__60803__auto__ === 'string'))){
return null;
} else {
var at__60804__auto__ = entity;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto__], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto__], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto__,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto__,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}
})();
var ov__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,nv):nv);
var ___$2 = (((nv__$1 == null))?(function (){var at__60810__auto__ = entity;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot store nil as a value at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60810__auto__], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"context","context",-830191113),at__60810__auto__,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
})():null);
var datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null)));
if(datascript.db.multival_QMARK_(db,a__$1)){
if(cljs.core.truth_(cljs.core.some(((function (report,es,vec__61771,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__61765,op,e,a,v,db,tempids,vec__61759,seq__61760,first__61761,seq__61760__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,ov__$1);
});})(report,es,vec__61771,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__61765,op,e,a,v,db,tempids,vec__61759,seq__61760,first__61761,seq__61760__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_))
,datoms))){
var G__62119 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__62120 = entities;
report = G__62119;
es = G__62120;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":db.fn/cas failed on datom [",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),datoms)], 0)),"], expected ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov__$1)){
var G__62121 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__62122 = entities;
report = G__62121;
es = G__62122;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":db.fn/cas failed on datom [",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0)),"], expected ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first(datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_(e)){
var G__62123 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.db.current_tx(report));
var G__62124 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx(report),a,v], null),entities);
report = G__62123;
es = G__62124;
continue;
} else {
if(((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tx_id_QMARK_(v)))){
var G__62125 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.db.current_tx(report));
var G__62126 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx(report)], null),entities);
report = G__62125;
es = G__62126;
continue;
} else {
if(((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tempid_QMARK_(v)))){
var temp__5827__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,v);
if((temp__5827__auto__ == null)){
var resolved = datascript.db.next_eid(db);
var report_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$5(datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,resolved),new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162),cljs.core.assoc,resolved,v);
var G__62127 = report_SINGLEQUOTE_;
var G__62128 = es;
report = G__62127;
es = G__62128;
continue;
} else {
var resolved = temp__5827__auto__;
var report_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$5(report,new cljs.core.Keyword("datascript.db","value-tempids","datascript.db/value-tempids",244806162),cljs.core.assoc,resolved,v);
var G__62129 = report_SINGLEQUOTE_;
var G__62130 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,resolved], null),entities);
report = G__62129;
es = G__62130;
continue;
}
} else {
if(datascript.db.tempid_QMARK_(e)){
var upserted_eid = ((datascript.db.is_attr_QMARK_(db,a,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))?new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"avet","avet",1383857032),a,v,null,null))):null);
var allocated_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,e);
if(cljs.core.truth_((function (){var and__5023__auto__ = upserted_eid;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,allocated_eid);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return datascript.db.retry_with_tempid(initial_report,report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__5025__auto__ = upserted_eid;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return datascript.db.next_eid(db);
}
}
})();
var G__62131 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,eid);
var G__62132 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__62131;
es = G__62132;
continue;
}
} else {
if(((cljs.core.not(new cljs.core.Keyword("datascript.db","internal","datascript.db/internal",-249301114).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(entity)))) && (datascript.db.tuple_QMARK_(db,a)))){
var tuple_attrs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),a,new cljs.core.Keyword("db","tupleAttrs","db/tupleAttrs",250080092)], null));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(tuple_attrs),cljs.core.count(v))) && (((cljs.core.every_QMARK_(cljs.core.some_QMARK_,v)) && (cljs.core.every_QMARK_(((function (report,es,tuple_attrs,vec__61765,op,e,a,v,db,tempids,vec__61759,seq__61760,first__61761,seq__61760__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_){
return (function (p__61774){
var vec__61775 = p__61774;
var tuple_attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61775,(0),null);
var tuple_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61775,(1),null);
var db_value = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,tuple_attr,null,null)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tuple_value,db_value);
});})(report,es,tuple_attrs,vec__61765,op,e,a,v,db,tempids,vec__61759,seq__61760,first__61761,seq__61760__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,tuple_attrs,v))))))){
var G__62134 = report;
var G__62135 = entities;
report = G__62134;
es = G__62135;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t modify tuple attrs directly: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__62136 = datascript.db.transact_add(report,entity);
var G__62137 = entities;
report = G__62136;
es = G__62137;
continue;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))) && ((!((v == null)))))){
var temp__5827__auto__ = datascript.db.entid(db,e);
if((temp__5827__auto__ == null)){
var G__62138 = report;
var G__62139 = entities;
report = G__62138;
es = G__62139;
continue;
} else {
var e__$1 = temp__5827__auto__;
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
var attr__60803__auto___62140 = a;
if((((attr__60803__auto___62140 instanceof cljs.core.Keyword)) || (typeof attr__60803__auto___62140 === 'string'))){
} else {
var at__60804__auto___62141 = entity;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto___62140], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto___62141], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto___62140,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto___62141,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}

if((v__$1 == null)){
var at__60810__auto___62142 = entity;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot store nil as a value at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60810__auto___62142], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"context","context",-830191113),at__60810__auto___62142,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
} else {
}

var temp__5827__auto____$1 = datascript.db.fsearch(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null));
if((temp__5827__auto____$1 == null)){
var G__62144 = report;
var G__62145 = entities;
report = G__62144;
es = G__62145;
continue;
} else {
var old_datom = temp__5827__auto____$1;
var G__62146 = datascript.db.transact_retract_datom(report,old_datom);
var G__62147 = entities;
report = G__62146;
es = G__62147;
continue;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))))){
var temp__5827__auto__ = datascript.db.entid(db,e);
if((temp__5827__auto__ == null)){
var G__62148 = report;
var G__62149 = entities;
report = G__62148;
es = G__62149;
continue;
} else {
var e__$1 = temp__5827__auto__;
var _ = (function (){var attr__60803__auto__ = a;
if((((attr__60803__auto__ instanceof cljs.core.Keyword)) || (typeof attr__60803__auto__ === 'string'))){
return null;
} else {
var at__60804__auto__ = entity;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr__60803__auto__], 0))," at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at__60804__auto__], 0)),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr__60803__auto__,new cljs.core.Keyword(null,"context","context",-830191113),at__60804__auto__,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078)], null));
}
})();
var datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
var G__62151 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,datoms);
var G__62152 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,datoms),entities);
report = G__62151;
es = G__62152;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935))))){
var temp__5827__auto__ = datascript.db.entid(db,e);
if((temp__5827__auto__ == null)){
var G__62156 = report;
var G__62157 = entities;
report = G__62156;
es = G__62157;
continue;
} else {
var e__$1 = temp__5827__auto__;
var e_datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null)));
var v_datoms = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,es,e_datoms,e__$1,temp__5827__auto__,vec__61765,op,e,a,v,db,tempids,vec__61759,seq__61760,first__61761,seq__61760__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_){
return (function (a__$1){
return datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__5827__auto__,vec__61765,op,e,a,v,db,tempids,vec__61759,seq__61760,first__61761,seq__61760__$1,entity,entities,initial_report_SINGLEQUOTE_,has_tuples_QMARK_,initial_es_SINGLEQUOTE_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.db._attrs_by(db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))], 0)));
var G__62158 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__62159 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,e_datoms),entities);
report = G__62158;
es = G__62159;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown operation at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0)),", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute, :db.fn/retractEntity or an ident corresponding to an installed transaction function (e.g. {:db/ident <keyword> :db/fn <Ifn>}, usage of :db/ident requires {:db/unique :db.unique/identity} in schema)"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

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
} else {
if(datascript.db.datom_QMARK_(entity)){
var vec__61778 = entity;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61778,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61778,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61778,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61778,(3),null);
var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61778,(4),null);
if(cljs.core.truth_(added)){
var G__62160 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v,tx], null));
var G__62161 = entities;
report = G__62160;
es = G__62161;
continue;
} else {
var G__62162 = report;
var G__62163 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,a,v], null),entities);
report = G__62162;
es = G__62163;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity type at ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0)),", expected map or vector"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
break;
}
});

//# sourceMappingURL=datascript.db.js.map
