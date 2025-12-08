goog.provide('sci.impl.protocols');
sci.impl.protocols.extend_default_val = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.impl.protocols","default","sci.impl.protocols/default",-1134880191,null));
sci.impl.protocols.default_QMARK_ = (function sci$impl$protocols$default_QMARK_(_ctx,sym){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sci.impl.protocols.extend_default_val,sym);
});
sci.impl.protocols.__GT_sigs = (function sci$impl$protocols$__GT_sigs(signatures){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36427){
var vec__36428 = p__36427;
var seq__36429 = cljs.core.seq(vec__36428);
var first__36430 = cljs.core.first(seq__36429);
var seq__36429__$1 = cljs.core.next(seq__36429);
var name = first__36430;
var arglists = seq__36429__$1;
var l = cljs.core.last(arglists);
var vec__36431 = ((typeof l === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast(arglists),l], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglists,null], null));
var arglists__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36431,(0),null);
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36431,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists__$1,new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null)], null);
}),signatures));
});
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37148 = arguments.length;
var i__5750__auto___37149 = (0);
while(true){
if((i__5750__auto___37149 < len__5749__auto___37148)){
args__5755__auto__.push((arguments[i__5750__auto___37149]));

var G__37150 = (i__5750__auto___37149 + (1));
i__5750__auto___37149 = G__37150;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__36453 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36453,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36453,(1),null);
var vec__36456 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36456,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36456,(1),null);
var sigs_map = sci.impl.protocols.__GT_sigs(signatures__$2);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.utils.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var extend_meta = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts);
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"sigs","sigs",-1653119622),null,(1),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sigs_map,null,(1),null)),(2),null)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"var","var",-769682797),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,extend_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36459){
var vec__36460 = p__36459;
var seq__36461 = cljs.core.seq(vec__36460);
var first__36462 = cljs.core.first(seq__36461);
var seq__36461__$1 = cljs.core.next(seq__36461);
var method_name = first__36462;
var ___$2 = seq__36461__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var method_meta = cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sigs_map,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"arglists","arglists",1661989754)], null));
var method_meta__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(method_meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (a){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,a,null,(1),null)),(2),null));
}));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,method_meta__$1,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__36434__auto__","x__36434__auto__",-321205448,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36435__auto__","args__36435__auto__",1216339518,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__36436__auto__","methods__36436__auto__",1806069379,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36434__auto__","x__36434__auto__",-321205448,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__36437__auto__","m__36437__auto__",1306190551,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__36436__auto__","methods__36436__auto__",1806069379,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__36437__auto__","m__36437__auto__",1306190551,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36434__auto__","x__36434__auto__",-321205448,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36435__auto__","args__36435__auto__",1216339518,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"default__36438__auto__","default__36438__auto__",-729491128,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36438__auto__","default__36438__auto__",-729491128,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36434__auto__","x__36434__auto__",-321205448,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36435__auto__","args__36435__auto__",1216339518,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"No method ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36434__auto__","x__36434__auto__",-321205448,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(extend_meta)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__36439__auto__","x__36439__auto__",-1862343556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36440__auto__","args__36440__auto__",-593528233,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__36441__auto__","meta__36441__auto__",413167289,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36439__auto__","x__36439__auto__",-1862343556,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__36442__auto__","method__36442__auto__",1914503744,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__36441__auto__","meta__36441__auto__",413167289,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__36442__auto__","method__36442__auto__",1914503744,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__36442__auto__","method__36442__auto__",1914503744,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36439__auto__","x__36439__auto__",-1862343556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36440__auto__","args__36440__auto__",-593528233,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method__36442__auto__","method__36442__auto__",1914503744,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36439__auto__","x__36439__auto__",-1862343556,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36443__auto__","default__36443__auto__",1480800338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__36442__auto__","method__36442__auto__",1914503744,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36443__auto__","default__36443__auto__",1480800338,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__36442__auto__","method__36442__auto__",1914503744,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36439__auto__","x__36439__auto__",-1862343556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36440__auto__","args__36440__auto__",-593528233,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36439__auto__","x__36439__auto__",-1862343556,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__36444__auto__","x__36444__auto__",1507264515,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36445__auto__","args__36445__auto__",157413571,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method__36446__auto__","method__36446__auto__",1994131005,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36444__auto__","x__36444__auto__",1507264515,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36447__auto__","default__36447__auto__",-1991276671,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__36446__auto__","method__36446__auto__",1994131005,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36447__auto__","default__36447__auto__",-1991276671,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__36446__auto__","method__36446__auto__",1994131005,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36444__auto__","x__36444__auto__",1507264515,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__36445__auto__","args__36445__auto__",157413571,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__36444__auto__","x__36444__auto__",1507264515,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,protocol_name,null,(1),null)),(2),null)),null,(1),null))], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq36448){
var G__36449 = cljs.core.first(seq36448);
var seq36448__$1 = cljs.core.next(seq36448);
var G__36450 = cljs.core.first(seq36448__$1);
var seq36448__$2 = cljs.core.next(seq36448__$1);
var G__36451 = cljs.core.first(seq36448__$2);
var seq36448__$3 = cljs.core.next(seq36448__$2);
var G__36452 = cljs.core.first(seq36448__$3);
var seq36448__$4 = cljs.core.next(seq36448__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36449,G__36450,G__36451,G__36452,seq36448__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37240 = arguments.length;
var i__5750__auto___37241 = (0);
while(true){
if((i__5750__auto___37241 < len__5749__auto___37240)){
args__5755__auto__.push((arguments[i__5750__auto___37241]));

var G__37242 = (i__5750__auto___37241 + (1));
i__5750__auto___37241 = G__37242;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__36498 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__36500 = null;
var count__36501 = (0);
var i__36502 = (0);
while(true){
if((i__36502 < count__36501)){
var vec__36567 = chunk__36500.cljs$core$IIndexed$_nth$arity$2(null,i__36502);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36567,(1),null);
var extend_via_metadata_37245 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_37246 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_37247 = sci.impl.types.getName(proto_ns_37246);
var pns_str_37248 = (cljs.core.truth_(extend_via_metadata_37245)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_37247):null);
var seq__36571_37249 = cljs.core.seq(mmap);
var chunk__36572_37250 = null;
var count__36573_37251 = (0);
var i__36574_37252 = (0);
while(true){
if((i__36574_37252 < count__36573_37251)){
var vec__36617_37253 = chunk__36572_37250.cljs$core$IIndexed$_nth$arity$2(null,i__36574_37252);
var meth_name_37254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37253,(0),null);
var f_37255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36617_37253,(1),null);
var meth_str_37256 = cljs.core.name(meth_name_37254);
var meth_sym_37257 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_37256);
var env_37258 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_37259 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_37258,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_37247,meth_sym_37257], null));
var multi_method_37260 = cljs.core.deref(multi_method_var_37259);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_37260,atype,(cljs.core.truth_(extend_via_metadata_37245)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_37248,meth_str_37256);
return ((function (seq__36571_37249,chunk__36572_37250,count__36573_37251,i__36574_37252,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37256,meth_sym_37257,env_37258,multi_method_var_37259,multi_method_37260,vec__36617_37253,meth_name_37254,f_37255,extend_via_metadata_37245,proto_ns_37246,pns_37247,pns_str_37248,vec__36567,proto,mmap){
return (function() { 
var G__37263__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37255,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37255,this$,args);
}
};
var G__37263 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__37265__i = 0, G__37265__a = new Array(arguments.length -  1);
while (G__37265__i < G__37265__a.length) {G__37265__a[G__37265__i] = arguments[G__37265__i + 1]; ++G__37265__i;}
  args = new cljs.core.IndexedSeq(G__37265__a,0,null);
} 
return G__37263__delegate.call(this,this$,args);};
G__37263.cljs$lang$maxFixedArity = 1;
G__37263.cljs$lang$applyTo = (function (arglist__37266){
var this$ = cljs.core.first(arglist__37266);
var args = cljs.core.rest(arglist__37266);
return G__37263__delegate(this$,args);
});
G__37263.cljs$core$IFn$_invoke$arity$variadic = G__37263__delegate;
return G__37263;
})()
;
;})(seq__36571_37249,chunk__36572_37250,count__36573_37251,i__36574_37252,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37256,meth_sym_37257,env_37258,multi_method_var_37259,multi_method_37260,vec__36617_37253,meth_name_37254,f_37255,extend_via_metadata_37245,proto_ns_37246,pns_37247,pns_str_37248,vec__36567,proto,mmap))
})():f_37255));


var G__37267 = seq__36571_37249;
var G__37268 = chunk__36572_37250;
var G__37269 = count__36573_37251;
var G__37270 = (i__36574_37252 + (1));
seq__36571_37249 = G__37267;
chunk__36572_37250 = G__37268;
count__36573_37251 = G__37269;
i__36574_37252 = G__37270;
continue;
} else {
var temp__5825__auto___37271 = cljs.core.seq(seq__36571_37249);
if(temp__5825__auto___37271){
var seq__36571_37272__$1 = temp__5825__auto___37271;
if(cljs.core.chunked_seq_QMARK_(seq__36571_37272__$1)){
var c__5548__auto___37273 = cljs.core.chunk_first(seq__36571_37272__$1);
var G__37274 = cljs.core.chunk_rest(seq__36571_37272__$1);
var G__37275 = c__5548__auto___37273;
var G__37276 = cljs.core.count(c__5548__auto___37273);
var G__37277 = (0);
seq__36571_37249 = G__37274;
chunk__36572_37250 = G__37275;
count__36573_37251 = G__37276;
i__36574_37252 = G__37277;
continue;
} else {
var vec__36631_37278 = cljs.core.first(seq__36571_37272__$1);
var meth_name_37279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36631_37278,(0),null);
var f_37280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36631_37278,(1),null);
var meth_str_37281 = cljs.core.name(meth_name_37279);
var meth_sym_37282 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_37281);
var env_37283 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_37284 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_37283,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_37247,meth_sym_37282], null));
var multi_method_37285 = cljs.core.deref(multi_method_var_37284);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_37285,atype,(cljs.core.truth_(extend_via_metadata_37245)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_37248,meth_str_37281);
return ((function (seq__36571_37249,chunk__36572_37250,count__36573_37251,i__36574_37252,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37281,meth_sym_37282,env_37283,multi_method_var_37284,multi_method_37285,vec__36631_37278,meth_name_37279,f_37280,seq__36571_37272__$1,temp__5825__auto___37271,extend_via_metadata_37245,proto_ns_37246,pns_37247,pns_str_37248,vec__36567,proto,mmap){
return (function() { 
var G__37287__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37280,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37280,this$,args);
}
};
var G__37287 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__37288__i = 0, G__37288__a = new Array(arguments.length -  1);
while (G__37288__i < G__37288__a.length) {G__37288__a[G__37288__i] = arguments[G__37288__i + 1]; ++G__37288__i;}
  args = new cljs.core.IndexedSeq(G__37288__a,0,null);
} 
return G__37287__delegate.call(this,this$,args);};
G__37287.cljs$lang$maxFixedArity = 1;
G__37287.cljs$lang$applyTo = (function (arglist__37289){
var this$ = cljs.core.first(arglist__37289);
var args = cljs.core.rest(arglist__37289);
return G__37287__delegate(this$,args);
});
G__37287.cljs$core$IFn$_invoke$arity$variadic = G__37287__delegate;
return G__37287;
})()
;
;})(seq__36571_37249,chunk__36572_37250,count__36573_37251,i__36574_37252,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37281,meth_sym_37282,env_37283,multi_method_var_37284,multi_method_37285,vec__36631_37278,meth_name_37279,f_37280,seq__36571_37272__$1,temp__5825__auto___37271,extend_via_metadata_37245,proto_ns_37246,pns_37247,pns_str_37248,vec__36567,proto,mmap))
})():f_37280));


var G__37290 = cljs.core.next(seq__36571_37272__$1);
var G__37291 = null;
var G__37292 = (0);
var G__37293 = (0);
seq__36571_37249 = G__37290;
chunk__36572_37250 = G__37291;
count__36573_37251 = G__37292;
i__36574_37252 = G__37293;
continue;
}
} else {
}
}
break;
}


var G__37294 = seq__36498;
var G__37295 = chunk__36500;
var G__37296 = count__36501;
var G__37297 = (i__36502 + (1));
seq__36498 = G__37294;
chunk__36500 = G__37295;
count__36501 = G__37296;
i__36502 = G__37297;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__36498);
if(temp__5825__auto__){
var seq__36498__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36498__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__36498__$1);
var G__37298 = cljs.core.chunk_rest(seq__36498__$1);
var G__37299 = c__5548__auto__;
var G__37300 = cljs.core.count(c__5548__auto__);
var G__37301 = (0);
seq__36498 = G__37298;
chunk__36500 = G__37299;
count__36501 = G__37300;
i__36502 = G__37301;
continue;
} else {
var vec__36657 = cljs.core.first(seq__36498__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36657,(1),null);
var extend_via_metadata_37302 = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto);
var proto_ns_37303 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_37304 = sci.impl.types.getName(proto_ns_37303);
var pns_str_37305 = (cljs.core.truth_(extend_via_metadata_37302)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(pns_37304):null);
var seq__36660_37306 = cljs.core.seq(mmap);
var chunk__36661_37307 = null;
var count__36662_37308 = (0);
var i__36663_37309 = (0);
while(true){
if((i__36663_37309 < count__36662_37308)){
var vec__36711_37310 = chunk__36661_37307.cljs$core$IIndexed$_nth$arity$2(null,i__36663_37309);
var meth_name_37311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711_37310,(0),null);
var f_37312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36711_37310,(1),null);
var meth_str_37313 = cljs.core.name(meth_name_37311);
var meth_sym_37314 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_37313);
var env_37315 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_37316 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_37315,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_37304,meth_sym_37314], null));
var multi_method_37317 = cljs.core.deref(multi_method_var_37316);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_37317,atype,(cljs.core.truth_(extend_via_metadata_37302)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_37305,meth_str_37313);
return ((function (seq__36660_37306,chunk__36661_37307,count__36662_37308,i__36663_37309,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37313,meth_sym_37314,env_37315,multi_method_var_37316,multi_method_37317,vec__36711_37310,meth_name_37311,f_37312,extend_via_metadata_37302,proto_ns_37303,pns_37304,pns_str_37305,vec__36657,proto,mmap,seq__36498__$1,temp__5825__auto__){
return (function() { 
var G__37322__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37312,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37312,this$,args);
}
};
var G__37322 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__37328__i = 0, G__37328__a = new Array(arguments.length -  1);
while (G__37328__i < G__37328__a.length) {G__37328__a[G__37328__i] = arguments[G__37328__i + 1]; ++G__37328__i;}
  args = new cljs.core.IndexedSeq(G__37328__a,0,null);
} 
return G__37322__delegate.call(this,this$,args);};
G__37322.cljs$lang$maxFixedArity = 1;
G__37322.cljs$lang$applyTo = (function (arglist__37329){
var this$ = cljs.core.first(arglist__37329);
var args = cljs.core.rest(arglist__37329);
return G__37322__delegate(this$,args);
});
G__37322.cljs$core$IFn$_invoke$arity$variadic = G__37322__delegate;
return G__37322;
})()
;
;})(seq__36660_37306,chunk__36661_37307,count__36662_37308,i__36663_37309,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37313,meth_sym_37314,env_37315,multi_method_var_37316,multi_method_37317,vec__36711_37310,meth_name_37311,f_37312,extend_via_metadata_37302,proto_ns_37303,pns_37304,pns_str_37305,vec__36657,proto,mmap,seq__36498__$1,temp__5825__auto__))
})():f_37312));


var G__37332 = seq__36660_37306;
var G__37333 = chunk__36661_37307;
var G__37334 = count__36662_37308;
var G__37335 = (i__36663_37309 + (1));
seq__36660_37306 = G__37332;
chunk__36661_37307 = G__37333;
count__36662_37308 = G__37334;
i__36663_37309 = G__37335;
continue;
} else {
var temp__5825__auto___37336__$1 = cljs.core.seq(seq__36660_37306);
if(temp__5825__auto___37336__$1){
var seq__36660_37337__$1 = temp__5825__auto___37336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36660_37337__$1)){
var c__5548__auto___37338 = cljs.core.chunk_first(seq__36660_37337__$1);
var G__37339 = cljs.core.chunk_rest(seq__36660_37337__$1);
var G__37340 = c__5548__auto___37338;
var G__37341 = cljs.core.count(c__5548__auto___37338);
var G__37342 = (0);
seq__36660_37306 = G__37339;
chunk__36661_37307 = G__37340;
count__36662_37308 = G__37341;
i__36663_37309 = G__37342;
continue;
} else {
var vec__36730_37343 = cljs.core.first(seq__36660_37337__$1);
var meth_name_37344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36730_37343,(0),null);
var f_37345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36730_37343,(1),null);
var meth_str_37346 = cljs.core.name(meth_name_37344);
var meth_sym_37347 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(meth_str_37346);
var env_37348 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_37349 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_37348,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_37304,meth_sym_37347], null));
var multi_method_37350 = cljs.core.deref(multi_method_var_37349);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_37350,atype,(cljs.core.truth_(extend_via_metadata_37302)?(function (){var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns_str_37305,meth_str_37346);
return ((function (seq__36660_37306,chunk__36661_37307,count__36662_37308,i__36663_37309,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37346,meth_sym_37347,env_37348,multi_method_var_37349,multi_method_37350,vec__36730_37343,meth_name_37344,f_37345,seq__36660_37337__$1,temp__5825__auto___37336__$1,extend_via_metadata_37302,proto_ns_37303,pns_37304,pns_str_37305,vec__36657,proto,mmap,seq__36498__$1,temp__5825__auto__){
return (function() { 
var G__37351__delegate = function (this$,args){
var temp__5823__auto__ = cljs.core.meta(this$);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,fq);
if(cljs.core.truth_(temp__5823__auto____$1)){
var meth = temp__5823__auto____$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(meth,this$,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37345,this$,args);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_37345,this$,args);
}
};
var G__37351 = function (this$,var_args){
var args = null;
if (arguments.length > 1) {
var G__37352__i = 0, G__37352__a = new Array(arguments.length -  1);
while (G__37352__i < G__37352__a.length) {G__37352__a[G__37352__i] = arguments[G__37352__i + 1]; ++G__37352__i;}
  args = new cljs.core.IndexedSeq(G__37352__a,0,null);
} 
return G__37351__delegate.call(this,this$,args);};
G__37351.cljs$lang$maxFixedArity = 1;
G__37351.cljs$lang$applyTo = (function (arglist__37353){
var this$ = cljs.core.first(arglist__37353);
var args = cljs.core.rest(arglist__37353);
return G__37351__delegate(this$,args);
});
G__37351.cljs$core$IFn$_invoke$arity$variadic = G__37351__delegate;
return G__37351;
})()
;
;})(seq__36660_37306,chunk__36661_37307,count__36662_37308,i__36663_37309,seq__36498,chunk__36500,count__36501,i__36502,fq,meth_str_37346,meth_sym_37347,env_37348,multi_method_var_37349,multi_method_37350,vec__36730_37343,meth_name_37344,f_37345,seq__36660_37337__$1,temp__5825__auto___37336__$1,extend_via_metadata_37302,proto_ns_37303,pns_37304,pns_str_37305,vec__36657,proto,mmap,seq__36498__$1,temp__5825__auto__))
})():f_37345));


var G__37354 = cljs.core.next(seq__36660_37337__$1);
var G__37355 = null;
var G__37356 = (0);
var G__37357 = (0);
seq__36660_37306 = G__37354;
chunk__36661_37307 = G__37355;
count__36662_37308 = G__37356;
i__36663_37309 = G__37357;
continue;
}
} else {
}
}
break;
}


var G__37358 = cljs.core.next(seq__36498__$1);
var G__37359 = null;
var G__37360 = (0);
var G__37361 = (0);
seq__36498 = G__37358;
chunk__36500 = G__37359;
count__36501 = G__37360;
i__36502 = G__37361;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq36495){
var G__36496 = cljs.core.first(seq36495);
var seq36495__$1 = cljs.core.next(seq36495);
var G__36497 = cljs.core.first(seq36495__$1);
var seq36495__$2 = cljs.core.next(seq36495__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36496,G__36497,seq36495__$2);
}));

/**
 * Processes single args+body pair for extending via metadata
 */
sci.impl.protocols.process_single_extend_meta = (function sci$impl$protocols$process_single_extend_meta(fq,p__36775,default_method_QMARK_){
var vec__36777 = p__36775;
var seq__36778 = cljs.core.seq(vec__36777);
var first__36779 = cljs.core.first(seq__36778);
var seq__36778__$1 = cljs.core.next(seq__36778);
var args = first__36779;
var body = seq__36778__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,(cljs.core.truth_(default_method_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36751__auto__","farg__36751__auto__",1086067206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__36752__auto__","m__36752__auto__",831652966,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36751__auto__","farg__36751__auto__",1086067206,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__36752__auto__","m__36752__auto__",831652966,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36751__auto__","farg__36751__auto__",1086067206,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36754__auto__","default__36754__auto__",796728926,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36754__auto__","default__36754__auto__",796728926,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36751__auto__","farg__36751__auto__",1086067206,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36754__auto__","default__36754__auto__",796728926,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36754__auto__","default__36754__auto__",796728926,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36753__auto__","meth__36753__auto__",-1681691954,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36756__auto__","farg__36756__auto__",-1803297532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__36757__auto__","m__36757__auto__",-1247483314,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36756__auto__","farg__36756__auto__",-1803297532,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36758__auto__","meth__36758__auto__",-1629299182,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__36757__auto__","m__36757__auto__",-1247483314,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36758__auto__","meth__36758__auto__",-1629299182,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_single = (function sci$impl$protocols$process_single(fq,p__36865){
var vec__36867 = p__36865;
var seq__36868 = cljs.core.seq(vec__36867);
var first__36869 = cljs.core.first(seq__36868);
var seq__36868__$1 = cljs.core.next(seq__36868);
var args = first__36869;
var body = seq__36868__$1;
return (new cljs.core.List(null,args,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36862__auto__","farg__36862__auto__",1124235713,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(args),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36863__auto__","meth__36863__auto__",-2127201110,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"farg__36862__auto__","farg__36862__auto__",1124235713,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36864__auto__","default__36864__auto__",1382815014,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-method","cljs.core/get-method",-487793502,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"default__36864__auto__","default__36864__auto__",1382815014,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36863__auto__","meth__36863__auto__",-2127201110,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meth__36863__auto__","meth__36863__auto__",-2127201110,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(2),null));
});
sci.impl.protocols.process_methods = (function sci$impl$protocols$process_methods(ctx,type,meths,protocol_ns,extend_via_metadata){
var default_method_QMARK_ = sci.impl.protocols.default_QMARK_(ctx,type);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36918){
var vec__36919 = p__36918;
var seq__36920 = cljs.core.seq(vec__36919);
var first__36921 = cljs.core.first(seq__36920);
var seq__36920__$1 = cljs.core.next(seq__36920);
var meth_name = first__36921;
var fn_body = seq__36920__$1;
var fq = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(protocol_ns,cljs.core.name(meth_name));
var fn_body__$1 = (cljs.core.truth_(extend_via_metadata)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single_extend_meta(fq,fn_body,default_method_QMARK_):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36916_SHARP_){
return sci.impl.protocols.process_single_extend_meta(fq,p1__36916_SHARP_,default_method_QMARK_);
}),fn_body)):((default_method_QMARK_)?((cljs.core.vector_QMARK_(cljs.core.first(fn_body)))?sci.impl.protocols.process_single(fq,fn_body):cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36917_SHARP_){
return sci.impl.protocols.process_single(fq,p1__36917_SHARP_);
}),fn_body)):fn_body
));
if(default_method_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),fn_body__$1], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),fn_body__$1], 0))));
}
}),meths);
});
sci.impl.protocols.cljs_type_symbols = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"default","default",-347290801,null),sci.impl.protocols.extend_default_val,new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null)], null);
sci.impl.protocols.type__GT_str = (function sci$impl$protocols$type__GT_str(t){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(t);
});
sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37374 = arguments.length;
var i__5750__auto___37375 = (0);
while(true){
if((i__5750__auto___37375 < len__5749__auto___37374)){
args__5755__auto__.push((arguments[i__5750__auto___37375]));

var G__37376 = (i__5750__auto___37375 + (1));
i__5750__auto___37375 = G__37376;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,ctx,protocol_name,impls){
var print_writer_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),protocol_name);
var impls__$1 = sci.impl.utils.split_when((function (p1__36931_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__36931_SHARP_)));
}),impls);
var protocol_var = (function (){var or__5025__auto__ = (function (){var G__36955 = ctx;
var G__36956 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__36957 = protocol_name;
var fexpr__36954 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__36954.cljs$core$IFn$_invoke$arity$3 ? fexpr__36954.cljs$core$IFn$_invoke$arity$3(G__36955,G__36956,G__36957) : fexpr__36954.call(null,G__36955,G__36956,G__36957));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((print_writer_QMARK_)?new cljs.core.Keyword("sci.impl.protocols","IPrintWithWriter","sci.impl.protocols/IPrintWithWriter",1832791161):null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Protocol not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name)].join(''),form);
}
}
})();
var protocol_data = ((sci.impl.utils.var_QMARK_(protocol_var))?cljs.core.deref(protocol_var):null);
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(protocol_data);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(protocol_data);
var pns = (((protocol_var instanceof cljs.core.Keyword))?"sci.impl.protocols":cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(protocol_ns)));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36966){
var vec__36968 = p__36966;
var seq__36969 = cljs.core.seq(vec__36968);
var first__36970 = cljs.core.first(seq__36969);
var seq__36969__$1 = cljs.core.next(seq__36969);
var type = first__36970;
var meths = seq__36969__$1;
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sci.impl.protocols.cljs_type_symbols,type,type);
if(print_writer_QMARK_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alter-meta!","cljs.core/alter-meta!",574694262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,type__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("sci.impl","print-method","sci.impl/print-method",281191566),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.rest(cljs.core.first(meths))))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alter-var-root","cljs.core/alter-var-root",-1342668238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"satisfies","satisfies",-311664218),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.protocols","type->str","sci.impl.protocols/type->str",1214133319,null),null,(1),null)),(new cljs.core.List(null,type__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.protocols.process_methods(ctx,type__$1,meths,pns,extend_via_metadata)], 0))));
}
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq36936){
var G__36937 = cljs.core.first(seq36936);
var seq36936__$1 = cljs.core.next(seq36936);
var G__36939 = cljs.core.first(seq36936__$1);
var seq36936__$2 = cljs.core.next(seq36936__$1);
var G__36940 = cljs.core.first(seq36936__$2);
var seq36936__$3 = cljs.core.next(seq36936__$2);
var G__36941 = cljs.core.first(seq36936__$3);
var seq36936__$4 = cljs.core.next(seq36936__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36937,G__36939,G__36940,G__36941,seq36936__$4);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37383 = arguments.length;
var i__5750__auto___37384 = (0);
while(true){
if((i__5750__auto___37384 < len__5749__auto___37383)){
args__5755__auto__.push((arguments[i__5750__auto___37384]));

var G__37385 = (i__5750__auto___37384 + (1));
i__5750__auto___37384 = G__37385;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (form,_env,ctx,atype,proto_PLUS_meths){
var atype__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(sci.impl.protocols.cljs_type_symbols,atype,atype);
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__37000_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__37000_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37018){
var vec__37019 = p__37018;
var seq__37020 = cljs.core.seq(vec__37019);
var first__37021 = cljs.core.first(seq__37020);
var seq__37020__$1 = cljs.core.next(seq__37020);
var proto = first__37021;
var meths = seq__37020__$1;
var protocol_var = (function (){var or__5025__auto__ = (function (){var G__37023 = ctx;
var G__37024 = new cljs.core.Keyword(null,"bindingx","bindingx",679516896).cljs$core$IFn$_invoke$arity$1(ctx);
var G__37025 = proto;
var fexpr__37022 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__37022.cljs$core$IFn$_invoke$arity$3 ? fexpr__37022.cljs$core$IFn$_invoke$arity$3(G__37023,G__37024,G__37025) : fexpr__37022.call(null,G__37023,G__37024,G__37025));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Protocol not found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(proto)].join(''),form);
}
})();
var proto_data = cljs.core.deref(protocol_var);
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto_data);
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.types.getName(protocol_ns));
var extend_via_metadata = new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(proto_data);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alter-var-root","cljs.core/alter-var-root",-1342668238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,proto,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"satisfies","satisfies",-311664218),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("sci.impl.protocols","type->str","sci.impl.protocols/type->str",1214133319,null),null,(1),null)),(new cljs.core.List(null,atype__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.protocols.process_methods(ctx,atype__$1,meths,pns,extend_via_metadata)], 0))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq37001){
var G__37002 = cljs.core.first(seq37001);
var seq37001__$1 = cljs.core.next(seq37001);
var G__37003 = cljs.core.first(seq37001__$1);
var seq37001__$2 = cljs.core.next(seq37001__$1);
var G__37004 = cljs.core.first(seq37001__$2);
var seq37001__$3 = cljs.core.next(seq37001__$2);
var G__37005 = cljs.core.first(seq37001__$3);
var seq37001__$4 = cljs.core.next(seq37001__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37002,G__37003,G__37004,G__37005,seq37001__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
var or__5025__auto__ = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"satisfies","satisfies",-311664218).cljs$core$IFn$_invoke$arity$1(protocol);
if(cljs.core.truth_(temp__5825__auto__)){
var sats = temp__5825__auto__;
var or__5025__auto__ = cljs.core.contains_QMARK_(sats,sci.impl.protocols.extend_default_val);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var temp__5825__auto____$1 = sci.impl.types.type_impl(obj);
if(cljs.core.truth_(temp__5825__auto____$1)){
var t = temp__5825__auto____$1;
return cljs.core.contains_QMARK_(sats,sci.impl.protocols.type__GT_str(t));
} else {
return null;
}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.boolean$(cljs.core.some((function (p1__37041_SHARP_){
var temp__5825__auto__ = cljs.core.get_method(p1__37041_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
var ms = cljs.core.methods$(p1__37041_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,new cljs.core.Keyword(null,"default","default",-1987822328));
return (!((m === default$)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
}
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(protocol);
var or__5025__auto__ = (function (){var and__5023__auto__ = p;
if(cljs.core.truth_(and__5023__auto__)){
var pred__37069 = cljs.core._EQ_;
var expr__37070 = p;
if(cljs.core.truth_((pred__37069.cljs$core$IFn$_invoke$arity$2 ? pred__37069.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__37070) : pred__37069.call(null,cljs.core.IDeref,expr__37070)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__37069.cljs$core$IFn$_invoke$arity$2 ? pred__37069.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__37070) : pred__37069.call(null,cljs.core.ISwap,expr__37070)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__37069.cljs$core$IFn$_invoke$arity$2 ? pred__37069.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__37070) : pred__37069.call(null,cljs.core.IReset,expr__37070)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
if(cljs.core.truth_((pred__37069.cljs$core$IFn$_invoke$arity$2 ? pred__37069.cljs$core$IFn$_invoke$arity$2(cljs.core.IRecord,expr__37070) : pred__37069.call(null,cljs.core.IRecord,expr__37070)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IRecord$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37070)].join('')));
}
}
}
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if((clazz instanceof sci.lang.Type)){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.sci$impl$types$SciTypeInstance$))))?true:false):false)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,x.sci$impl$types$SciTypeInstance$_get_type$arity$1(null));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
}
} else {
if(cljs.core.map_QMARK_(clazz)){
return sci.impl.protocols.satisfies_QMARK_(clazz,x);
} else {
return (x instanceof clazz);

}
}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__37110_SHARP_){
return cljs.core.get_method(p1__37110_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
