goog.provide('bb_web_ds_tools.impl.datasets_gen_test');
bb_web_ds_tools.impl.datasets_gen_test.simple_value_gen = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.int$,clojure.test.check.generators.boolean$,clojure.test.check.generators.string_alphanumeric], null));
bb_web_ds_tools.impl.datasets_gen_test.row_map_gen = clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.keyword,bb_web_ds_tools.impl.datasets_gen_test.simple_value_gen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(1),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(5)], null));
bb_web_ds_tools.impl.datasets_gen_test.row_maps_gen = clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.impl.datasets_gen_test.row_map_gen);
bb_web_ds_tools.impl.datasets_gen_test.columnar_gen = clojure.test.check.generators.bind(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.keyword,(1),(5)),(function (keys){
return clojure.test.check.generators.bind(clojure.test.check.generators.choose((0),(10)),(function (len){
return clojure.test.check.generators.bind(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.impl.datasets_gen_test.simple_value_gen,len),cljs.core.count(keys)),(function (cols){
var val__39447__auto__ = cljs.core.zipmap(keys,cols);
if(clojure.test.check.generators.generator_QMARK_(val__39447__auto__)){
return val__39447__auto__;
} else {
return clojure.test.check.generators.return$(val__39447__auto__);
}
}));
}));
}));
bb_web_ds_tools.impl.datasets_gen_test.rows_gen = clojure.test.check.generators.bind(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.keyword,(1),(5)),(function (header){
return clojure.test.check.generators.bind(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.impl.datasets_gen_test.simple_value_gen,cljs.core.count(header))),(function (rows){
var val__39447__auto__ = cljs.core.vec(cljs.core.cons(header,rows));
if(clojure.test.check.generators.generator_QMARK_(val__39447__auto__)){
return val__39447__auto__;
} else {
return clojure.test.check.generators.return$(val__39447__auto__);
}
}));
}));
bb_web_ds_tools.impl.datasets_gen_test.detect_structure_prop = clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.impl.datasets_gen_test.row_maps_gen,bb_web_ds_tools.impl.datasets_gen_test.columnar_gen,bb_web_ds_tools.impl.datasets_gen_test.rows_gen], null),(function (rm,col,rows){
return ((((cljs.core.empty_QMARK_(rm)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),bb_web_ds_tools.impl.datasets.detect_structure(rm))))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"columnar","columnar",-1122999701),bb_web_ds_tools.impl.datasets.detect_structure(col))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),bb_web_ds_tools.impl.datasets.detect_structure(rows))))));
}));
bb_web_ds_tools.impl.datasets_gen_test.consistent_row_maps_gen_2 = clojure.test.check.generators.bind(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators.keyword,(1),(5)),(function (keys){
return clojure.test.check.generators.bind(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.impl.datasets_gen_test.simple_value_gen,cljs.core.count(keys))),(function (val_vecs){
var val__39447__auto__ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (vals){
return cljs.core.zipmap(keys,vals);
}),val_vecs);
if(clojure.test.check.generators.generator_QMARK_(val__39447__auto__)){
return val__39447__auto__;
} else {
return clojure.test.check.generators.return$(val__39447__auto__);
}
}));
}));
bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_prop = clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.impl.datasets_gen_test.consistent_row_maps_gen_2], null),(function (data){
var col = bb_web_ds_tools.impl.datasets.transform.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
var rows = bb_web_ds_tools.impl.datasets.transform.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284),new cljs.core.Keyword(null,"rows","rows",850049680));
var back_from_col = bb_web_ds_tools.impl.datasets.transform.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword(null,"columnar","columnar",-1122999701),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
var back_from_rows = bb_web_ds_tools.impl.datasets.transform.cljs$core$IFn$_invoke$arity$3(rows,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,back_from_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,back_from_rows)));
}));
bb_web_ds_tools.impl.datasets_gen_test.detect_structure_test = (function bb_web_ds_tools$impl$datasets_gen_test$detect_structure_test(){
return cljs.test.test_var(bb_web_ds_tools.impl.datasets_gen_test.detect_structure_test.cljs$lang$var);
});
bb_web_ds_tools.impl.datasets_gen_test.detect_structure_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Generative structure detection"], 0));

try{var result = clojure.test.check.quick_check((50),bb_web_ds_tools.impl.datasets_gen_test.detect_structure_prop);
try{var value__11369__auto__ = new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(value__11369__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/impl/datasets_gen_test.cljc",26,new cljs.core.Keyword(null,"pass","pass",1574159993),11,59,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),59,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/impl/datasets_gen_test.cljc",26,new cljs.core.Keyword(null,"fail","fail",1706214930),11,59,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),59,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}

return value__11369__auto__;
}catch (e42809){var t__11416__auto__ = e42809;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/impl/datasets_gen_test.cljc",26,new cljs.core.Keyword(null,"error","error",-978969032),11,59,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),59,t__11416__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.impl.datasets_gen_test.detect_structure_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.impl.datasets_gen_test.detect_structure_test;},new cljs.core.Symbol("bb-web-ds-tools.impl.datasets-gen-test","detect-structure-test","bb-web-ds-tools.impl.datasets-gen-test/detect-structure-test",-176705057,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.impl.datasets-gen-test","bb-web-ds-tools.impl.datasets-gen-test",1802881094,null),new cljs.core.Symbol(null,"detect-structure-test","detect-structure-test",-891295107,null),"bb_web_ds_tools/impl/datasets_gen_test.cljc",31,1,56,56,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.impl.datasets_gen_test.detect_structure_test)?bb_web_ds_tools.impl.datasets_gen_test.detect_structure_test.cljs$lang$test:null)])));
bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_test = (function bb_web_ds_tools$impl$datasets_gen_test$transform_cycle_test(){
return cljs.test.test_var(bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_test.cljs$lang$var);
});
bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Generative transform cycles"], 0));

try{var result = clojure.test.check.quick_check((50),bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_prop);
try{var value__11369__auto__ = new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(value__11369__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/impl/datasets_gen_test.cljc",26,new cljs.core.Keyword(null,"pass","pass",1574159993),11,64,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),64,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/impl/datasets_gen_test.cljc",26,new cljs.core.Keyword(null,"fail","fail",1706214930),11,64,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),64,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}

return value__11369__auto__;
}catch (e42842){var t__11416__auto__ = e42842;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/impl/datasets_gen_test.cljc",26,new cljs.core.Keyword(null,"error","error",-978969032),11,64,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),64,t__11416__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_test;},new cljs.core.Symbol("bb-web-ds-tools.impl.datasets-gen-test","transform-cycle-test","bb-web-ds-tools.impl.datasets-gen-test/transform-cycle-test",-1259150713,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.impl.datasets-gen-test","bb-web-ds-tools.impl.datasets-gen-test",1802881094,null),new cljs.core.Symbol(null,"transform-cycle-test","transform-cycle-test",-548062623,null),"bb_web_ds_tools/impl/datasets_gen_test.cljc",30,1,61,61,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_test)?bb_web_ds_tools.impl.datasets_gen_test.transform_cycle_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.impl.datasets_gen_test.js.map
