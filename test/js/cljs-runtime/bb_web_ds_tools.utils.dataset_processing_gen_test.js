goog.provide('bb_web_ds_tools.utils.dataset_processing_gen_test');
bb_web_ds_tools.utils.dataset_processing_gen_test.gen_val = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.string,clojure.test.check.generators.boolean$,clojure.test.check.generators.double_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),false], null))], null));
bb_web_ds_tools.utils.dataset_processing_gen_test.gen_keys = clojure.test.check.generators.not_empty(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.keyword));
bb_web_ds_tools.utils.dataset_processing_gen_test.gen_row_from_keys = (function bb_web_ds_tools$utils$dataset_processing_gen_test$gen_row_from_keys(ks){
return clojure.test.check.generators.fmap(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.zipmap,ks),clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.utils.dataset_processing_gen_test.gen_val,cljs.core.count(ks)));
});
bb_web_ds_tools.utils.dataset_processing_gen_test.gen_uniform_rows = clojure.test.check.generators.bind(bb_web_ds_tools.utils.dataset_processing_gen_test.gen_keys,(function (ks){
return clojure.test.check.generators.bind(clojure.test.check.generators.not_empty(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.utils.dataset_processing_gen_test.gen_row_from_keys(ks))),(function (rows){
var val__39447__auto__ = rows;
if(clojure.test.check.generators.generator_QMARK_(val__39447__auto__)){
return val__39447__auto__;
} else {
return clojure.test.check.generators.return$(val__39447__auto__);
}
}));
}));
bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec = (function bb_web_ds_tools$utils$dataset_processing_gen_test$normalize_columnar_spec(var_args){
var G__43945 = arguments.length;
switch (G__43945) {
case 0:
return bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___44066 = arguments.length;
var i__5750__auto___44067 = (0);
while(true){
if((i__5750__auto___44067 < len__5749__auto___44066)){
args_arr__5774__auto__.push((arguments[i__5750__auto___44067]));

var G__44068 = (i__5750__auto___44067 + (1));
i__5750__auto___44067 = G__44068;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});
bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$lang$test = (function (){
return clojure.test.check.clojure_test.assert_check(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"normalize-columnar-spec","normalize-columnar-spec",-1972500309,null))));
});

(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$core$IFn$_invoke$arity$0 = (function (){
var options__42348__auto__ = clojure.test.check.clojure_test.process_options((100));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options__42348__auto__),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,options__42348__auto__));
}));

(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$core$IFn$_invoke$arity$variadic = (function (times__42349__auto__,p__43954){
var map__43955 = p__43954;
var map__43955__$1 = cljs.core.__destructure_map(map__43955);
var quick_check_opts__42350__auto__ = map__43955__$1;
var options__42348__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.clojure_test.process_options((100)),quick_check_opts__42350__auto__], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.test.check.quick_check,times__42349__auto__,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.utils.dataset_processing_gen_test.gen_uniform_rows], null),(function (rows){
var columnar = (function (){var fexpr__43956 = new cljs.core.Var(function(){return bb_web_ds_tools.utils.dataset_processing.to_columnar;},new cljs.core.Symbol("bb-web-ds-tools.utils.dataset-processing","to-columnar","bb-web-ds-tools.utils.dataset-processing/to-columnar",-813450023,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"bb-web-ds-tools.utils.dataset-processing","bb-web-ds-tools.utils.dataset-processing",1441668279,null),new cljs.core.Symbol(null,"to-columnar","to-columnar",824879401,null),"bb_web_ds_tools/utils/dataset_processing.cljs",19,1,203,203,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null)),"Converts a sequence of row maps to columnar format.",(cljs.core.truth_(bb_web_ds_tools.utils.dataset_processing.to_columnar)?bb_web_ds_tools.utils.dataset_processing.to_columnar.cljs$lang$test:null)]));
return (fexpr__43956.cljs$core$IFn$_invoke$arity$1 ? fexpr__43956.cljs$core$IFn$_invoke$arity$1(rows) : fexpr__43956.call(null,rows));
})();
var normalized = bb_web_ds_tools.utils.dataset_processing.normalize_columnar(columnar);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rows,normalized);
})),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"normalize-columnar-spec","normalize-columnar-spec",-1972500309,null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,options__42348__auto__));
}));

/** @this {Function} */
(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$lang$applyTo = (function (seq43943){
var G__43944 = cljs.core.first(seq43943);
var seq43943__$1 = cljs.core.next(seq43943);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43944,seq43943__$1);
}));

(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_columnar_spec.cljs$lang$maxFixedArity = (1));

bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec = (function bb_web_ds_tools$utils$dataset_processing_gen_test$normalize_row_arrays_spec(var_args){
var G__43985 = arguments.length;
switch (G__43985) {
case 0:
return bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___44076 = arguments.length;
var i__5750__auto___44077 = (0);
while(true){
if((i__5750__auto___44077 < len__5749__auto___44076)){
args_arr__5774__auto__.push((arguments[i__5750__auto___44077]));

var G__44078 = (i__5750__auto___44077 + (1));
i__5750__auto___44077 = G__44078;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});
bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$lang$test = (function (){
return clojure.test.check.clojure_test.assert_check(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"normalize-row-arrays-spec","normalize-row-arrays-spec",-711200680,null))));
});

(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$core$IFn$_invoke$arity$0 = (function (){
var options__42348__auto__ = clojure.test.check.clojure_test.process_options((100));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options__42348__auto__),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,options__42348__auto__));
}));

(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$core$IFn$_invoke$arity$variadic = (function (times__42349__auto__,p__43993){
var map__43994 = p__43993;
var map__43994__$1 = cljs.core.__destructure_map(map__43994);
var quick_check_opts__42350__auto__ = map__43994__$1;
var options__42348__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.clojure_test.process_options((100)),quick_check_opts__42350__auto__], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.test.check.quick_check,times__42349__auto__,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.utils.dataset_processing_gen_test.gen_uniform_rows], null),(function (rows){
var row_arrays = (function (){var fexpr__43996 = new cljs.core.Var(function(){return bb_web_ds_tools.utils.dataset_processing.to_row_arrays;},new cljs.core.Symbol("bb-web-ds-tools.utils.dataset-processing","to-row-arrays","bb-web-ds-tools.utils.dataset-processing/to-row-arrays",-599099935,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"bb-web-ds-tools.utils.dataset-processing","bb-web-ds-tools.utils.dataset-processing",1441668279,null),new cljs.core.Symbol(null,"to-row-arrays","to-row-arrays",-97297807,null),"bb_web_ds_tools/utils/dataset_processing.cljs",21,1,212,212,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null)),"Converts a sequence of row maps to row-array format (with header).",(cljs.core.truth_(bb_web_ds_tools.utils.dataset_processing.to_row_arrays)?bb_web_ds_tools.utils.dataset_processing.to_row_arrays.cljs$lang$test:null)]));
return (fexpr__43996.cljs$core$IFn$_invoke$arity$1 ? fexpr__43996.cljs$core$IFn$_invoke$arity$1(rows) : fexpr__43996.call(null,rows));
})();
var normalized = bb_web_ds_tools.utils.dataset_processing.normalize_row_arrays(row_arrays);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rows,normalized);
})),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"normalize-row-arrays-spec","normalize-row-arrays-spec",-711200680,null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,options__42348__auto__));
}));

/** @this {Function} */
(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$lang$applyTo = (function (seq43981){
var G__43984 = cljs.core.first(seq43981);
var seq43981__$1 = cljs.core.next(seq43981);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43984,seq43981__$1);
}));

(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_row_arrays_spec.cljs$lang$maxFixedArity = (1));

bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec = (function bb_web_ds_tools$utils$dataset_processing_gen_test$parse_markdown_row_robustness_spec(var_args){
var G__44005 = arguments.length;
switch (G__44005) {
case 0:
return bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___44085 = arguments.length;
var i__5750__auto___44086 = (0);
while(true){
if((i__5750__auto___44086 < len__5749__auto___44085)){
args_arr__5774__auto__.push((arguments[i__5750__auto___44086]));

var G__44087 = (i__5750__auto___44086 + (1));
i__5750__auto___44086 = G__44087;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});
bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$lang$test = (function (){
return clojure.test.check.clojure_test.assert_check(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"test-var","test-var",-1105918373),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"parse-markdown-row-robustness-spec","parse-markdown-row-robustness-spec",1476226846,null))));
});

(bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$core$IFn$_invoke$arity$0 = (function (){
var options__42348__auto__ = clojure.test.check.clojure_test.process_options((100));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec,new cljs.core.Keyword(null,"num-tests","num-tests",2050041354).cljs$core$IFn$_invoke$arity$1(options__42348__auto__),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,options__42348__auto__));
}));

(bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$core$IFn$_invoke$arity$variadic = (function (times__42349__auto__,p__44009){
var map__44010 = p__44009;
var map__44010__$1 = cljs.core.__destructure_map(map__44010);
var quick_check_opts__42350__auto__ = map__44010__$1;
var options__42348__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.clojure_test.process_options((100)),quick_check_opts__42350__auto__], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.test.check.quick_check,times__42349__auto__,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.string], null),(function (s){
var res = (function (){var fexpr__44012 = new cljs.core.Var(function(){return bb_web_ds_tools.utils.dataset_processing.parse_markdown_row;},new cljs.core.Symbol("bb-web-ds-tools.utils.dataset-processing","parse-markdown-row","bb-web-ds-tools.utils.dataset-processing/parse-markdown-row",340020035,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"bb-web-ds-tools.utils.dataset-processing","bb-web-ds-tools.utils.dataset-processing",1441668279,null),new cljs.core.Symbol(null,"parse-markdown-row","parse-markdown-row",1042523571,null),"bb_web_ds_tools/utils/dataset_processing.cljs",26,1,150,150,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"line","line",1852876762,null)], null)),null,(cljs.core.truth_(bb_web_ds_tools.utils.dataset_processing.parse_markdown_row)?bb_web_ds_tools.utils.dataset_processing.parse_markdown_row.cljs$lang$test:null)]));
return (fexpr__44012.cljs$core$IFn$_invoke$arity$1 ? fexpr__44012.cljs$core$IFn$_invoke$arity$1(s) : fexpr__44012.call(null,s));
})();
return cljs.core.vector_QMARK_(res);
})),cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"parse-markdown-row-robustness-spec","parse-markdown-row-robustness-spec",1476226846,null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,options__42348__auto__));
}));

/** @this {Function} */
(bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$lang$applyTo = (function (seq44002){
var G__44003 = cljs.core.first(seq44002);
var seq44002__$1 = cljs.core.next(seq44002);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44003,seq44002__$1);
}));

(bb_web_ds_tools.utils.dataset_processing_gen_test.parse_markdown_row_robustness_spec.cljs$lang$maxFixedArity = (1));

bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_column_name_test = (function bb_web_ds_tools$utils$dataset_processing_gen_test$normalize_column_name_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_column_name_test.cljs$lang$var);
});
bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_column_name_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["normalize-column-name handles various cases"], 0));

try{try{var values__11365__auto___44089 = (new cljs.core.List(null,"foo_bar",(new cljs.core.List(null,bb_web_ds_tools.utils.dataset_processing.normalize_column_name(new cljs.core.Keyword(null,"foo-bar","foo-bar",367672016),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null)),null,(1),null)),(2),null));
var result__11366__auto___44090 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___44089);
if(cljs.core.truth_(result__11366__auto___44090)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",95,new cljs.core.Keyword(null,"pass","pass",1574159993),9,50,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"foo_bar",cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),new cljs.core.Keyword(null,"foo-bar","foo-bar",367672016),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null))),50,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___44089),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",95,new cljs.core.Keyword(null,"fail","fail",1706214930),9,50,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"foo_bar",cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),new cljs.core.Keyword(null,"foo-bar","foo-bar",367672016),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null))),50,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___44089),null,(1),null)),(2),null)),null]));
}

}catch (e44023){var t__11416__auto___44092 = e44023;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",95,new cljs.core.Keyword(null,"error","error",-978969032),9,50,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"foo_bar",cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),new cljs.core.Keyword(null,"foo-bar","foo-bar",367672016),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null))),50,t__11416__auto___44092,null]));
}
try{var values__11365__auto___44094 = (new cljs.core.List(null,new cljs.core.Keyword(null,"FooBar","FooBar",621175460),(new cljs.core.List(null,bb_web_ds_tools.utils.dataset_processing.normalize_column_name("foo_bar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)),null,(1),null)),(2),null));
var result__11366__auto___44095 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___44094);
if(cljs.core.truth_(result__11366__auto___44095)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",94,new cljs.core.Keyword(null,"pass","pass",1574159993),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"FooBar","FooBar",621175460),cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),"foo_bar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))),51,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___44094),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",94,new cljs.core.Keyword(null,"fail","fail",1706214930),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"FooBar","FooBar",621175460),cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),"foo_bar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))),51,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___44094),null,(1),null)),(2),null)),null]));
}

}catch (e44025){var t__11416__auto___44096 = e44025;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",94,new cljs.core.Keyword(null,"error","error",-978969032),9,51,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"FooBar","FooBar",621175460),cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),"foo_bar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null))),51,t__11416__auto___44096,null]));
}
try{var values__11365__auto___44097 = (new cljs.core.List(null,new cljs.core.Symbol(null,"foo-bar","foo-bar",2008203543,null),(new cljs.core.List(null,bb_web_ds_tools.utils.dataset_processing.normalize_column_name("FooBar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),null,(1),null)),(2),null));
var result__11366__auto___44098 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___44097);
if(cljs.core.truth_(result__11366__auto___44098)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",94,new cljs.core.Keyword(null,"pass","pass",1574159993),9,52,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo-bar","foo-bar",2008203543,null)),cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),"FooBar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null))),52,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___44097),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",94,new cljs.core.Keyword(null,"fail","fail",1706214930),9,52,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo-bar","foo-bar",2008203543,null)),cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),"FooBar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null))),52,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___44097),null,(1),null)),(2),null)),null]));
}

}catch (e44032){var t__11416__auto___44105 = e44032;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",94,new cljs.core.Keyword(null,"error","error",-978969032),9,52,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"foo-bar","foo-bar",2008203543,null)),cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),"FooBar",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null))),52,t__11416__auto___44105,null]));
}
try{var values__11365__auto__ = (new cljs.core.List(null,"a",(new cljs.core.List(null,bb_web_ds_tools.utils.dataset_processing.normalize_column_name(new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null)),null,(1),null)),(2),null));
var result__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto__);
if(cljs.core.truth_(result__11366__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",83,new cljs.core.Keyword(null,"pass","pass",1574159993),9,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null))),53,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",83,new cljs.core.Keyword(null,"fail","fail",1706214930),9,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null))),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto__),null,(1),null)),(2),null)),null]));
}

return result__11366__auto__;
}catch (e44034){var t__11416__auto__ = e44034;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",83,new cljs.core.Keyword(null,"error","error",-978969032),9,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"a",cljs.core.list(new cljs.core.Symbol("sut","normalize-column-name","sut/normalize-column-name",1920964140,null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"string","string",-1989541586)], null))),53,t__11416__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_column_name_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_column_name_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.dataset-processing-gen-test","normalize-column-name-test","bb-web-ds-tools.utils.dataset-processing-gen-test/normalize-column-name-test",-1562447386,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.dataset-processing-gen-test","bb-web-ds-tools.utils.dataset-processing-gen-test",234543033,null),new cljs.core.Symbol(null,"normalize-column-name-test","normalize-column-name-test",-1397531046,null),"bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",36,1,48,48,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_column_name_test)?bb_web_ds_tools.utils.dataset_processing_gen_test.normalize_column_name_test.cljs$lang$test:null)])));
bb_web_ds_tools.utils.dataset_processing_gen_test.to_markdown_table_test = (function bb_web_ds_tools$utils$dataset_processing_gen_test$to_markdown_table_test(){
return cljs.test.test_var(bb_web_ds_tools.utils.dataset_processing_gen_test.to_markdown_table_test.cljs$lang$var);
});
bb_web_ds_tools.utils.dataset_processing_gen_test.to_markdown_table_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["to-markdown-table formats correctly"], 0));

try{var rows = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(1),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(3),new cljs.core.Keyword(null,"b","b",1482224470),(4)], null)], null);
var table = (function (){var fexpr__44040 = new cljs.core.Var(function(){return bb_web_ds_tools.utils.dataset_processing.to_markdown_table;},new cljs.core.Symbol("bb-web-ds-tools.utils.dataset-processing","to-markdown-table","bb-web-ds-tools.utils.dataset-processing/to-markdown-table",-1610082554,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"bb-web-ds-tools.utils.dataset-processing","bb-web-ds-tools.utils.dataset-processing",1441668279,null),new cljs.core.Symbol(null,"to-markdown-table","to-markdown-table",-957223530,null),"bb_web_ds_tools/utils/dataset_processing.cljs",25,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),2,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),2,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"conf","conf",656610243,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"conf","conf",656610243,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),1,219,219,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"conf","conf",656610243,null)], null)),"Formats data as a Markdown table.",(cljs.core.truth_(bb_web_ds_tools.utils.dataset_processing.to_markdown_table)?bb_web_ds_tools.utils.dataset_processing.to_markdown_table.cljs$lang$test:null)]));
return (fexpr__44040.cljs$core$IFn$_invoke$arity$1 ? fexpr__44040.cljs$core$IFn$_invoke$arity$1(rows) : fexpr__44040.call(null,rows));
})();
try{var values__11365__auto___44109 = (new cljs.core.List(null,table,(new cljs.core.List(null,"| a | b |",null,(1),null)),(2),null));
var result__11366__auto___44110 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.includes_QMARK_,values__11365__auto___44109);
if(cljs.core.truth_(result__11366__auto___44110)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),11,59,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| a | b |"),59,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto___44109),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),11,59,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| a | b |"),59,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto___44109),null,(1),null)),(2),null)),null]));
}

}catch (e44049){var t__11416__auto___44112 = e44049;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),11,59,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| a | b |"),59,t__11416__auto___44112,null]));
}
try{var values__11365__auto___44113 = (new cljs.core.List(null,table,(new cljs.core.List(null,"| --- | --- |",null,(1),null)),(2),null));
var result__11366__auto___44114 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.includes_QMARK_,values__11365__auto___44113);
if(cljs.core.truth_(result__11366__auto___44114)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",48,new cljs.core.Keyword(null,"pass","pass",1574159993),11,60,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| --- | --- |"),60,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto___44113),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",48,new cljs.core.Keyword(null,"fail","fail",1706214930),11,60,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| --- | --- |"),60,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto___44113),null,(1),null)),(2),null)),null]));
}

}catch (e44052){var t__11416__auto___44116 = e44052;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",48,new cljs.core.Keyword(null,"error","error",-978969032),11,60,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| --- | --- |"),60,t__11416__auto___44116,null]));
}
try{var values__11365__auto___44117 = (new cljs.core.List(null,table,(new cljs.core.List(null,"| 1 | 2 |",null,(1),null)),(2),null));
var result__11366__auto___44118 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.includes_QMARK_,values__11365__auto___44117);
if(cljs.core.truth_(result__11366__auto___44118)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),11,61,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| 1 | 2 |"),61,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto___44117),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),11,61,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| 1 | 2 |"),61,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto___44117),null,(1),null)),(2),null)),null]));
}

}catch (e44053){var t__11416__auto___44121 = e44053;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),11,61,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| 1 | 2 |"),61,t__11416__auto___44121,null]));
}
try{var values__11365__auto__ = (new cljs.core.List(null,table,(new cljs.core.List(null,"| 3 | 4 |",null,(1),null)),(2),null));
var result__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.string.includes_QMARK_,values__11365__auto__);
if(cljs.core.truth_(result__11366__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),11,62,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| 3 | 4 |"),62,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),11,62,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| 3 | 4 |"),62,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),values__11365__auto__),null,(1),null)),(2),null)),null]));
}

return result__11366__auto__;
}catch (e44055){var t__11416__auto__ = e44055;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),11,62,cljs.core.list(new cljs.core.Symbol("str","includes?","str/includes?",-2049398758,null),new cljs.core.Symbol(null,"table","table",1075588491,null),"| 3 | 4 |"),62,t__11416__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.utils.dataset_processing_gen_test.to_markdown_table_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.utils.dataset_processing_gen_test.to_markdown_table_test;},new cljs.core.Symbol("bb-web-ds-tools.utils.dataset-processing-gen-test","to-markdown-table-test","bb-web-ds-tools.utils.dataset-processing-gen-test/to-markdown-table-test",-2069653177,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.utils.dataset-processing-gen-test","bb-web-ds-tools.utils.dataset-processing-gen-test",234543033,null),new cljs.core.Symbol(null,"to-markdown-table-test","to-markdown-table-test",-21552685,null),"bb_web_ds_tools/utils/dataset_processing_gen_test.cljs",32,1,55,55,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.utils.dataset_processing_gen_test.to_markdown_table_test)?bb_web_ds_tools.utils.dataset_processing_gen_test.to_markdown_table_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.utils.dataset_processing_gen_test.js.map
