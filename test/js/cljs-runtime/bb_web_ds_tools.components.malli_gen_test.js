goog.provide('bb_web_ds_tools.components.malli_gen_test');
bb_web_ds_tools.components.malli_gen_test.simple_value_gen = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.string,clojure.test.check.generators.boolean$], null));
bb_web_ds_tools.components.malli_gen_test.simple_schema_gen = clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"double","double",884886883)], null));
bb_web_ds_tools.components.malli_gen_test.map_schema_gen = clojure.test.check.generators.fmap((function (props){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64791){
var vec__64792 = p__64791;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64792,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64792,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}),props));
}),clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.keyword,bb_web_ds_tools.components.malli_gen_test.simple_schema_gen));
bb_web_ds_tools.components.malli_gen_test.inference_validation_prop = clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.keyword,bb_web_ds_tools.components.malli_gen_test.simple_value_gen))], null),(function (data){
if(cljs.core.empty_QMARK_(data)){
return true;
} else {
var result = bb_web_ds_tools.components.malli.infer_schema.cljs$core$IFn$_invoke$arity$1(data);
var schema = (cljs.core.truth_(new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result))?new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(result):null);
var and__5023__auto__ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.every_QMARK_((function (p1__64796_SHARP_){
return malli.core.validate.cljs$core$IFn$_invoke$arity$2(schema,p1__64796_SHARP_);
}),data);
} else {
return and__5023__auto__;
}
}
}));
bb_web_ds_tools.components.malli_gen_test.generation_validation_prop = clojure.test.check.properties.for_all_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.malli_gen_test.map_schema_gen], null),(function (schema){
var gen_result = bb_web_ds_tools.components.malli.generate_data(schema,(10),new cljs.core.Keyword(null,"edn","edn",1317840885));
var generated_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(gen_result);
var validation_results = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64805_SHARP_){
return bb_web_ds_tools.components.malli.validate_data(schema,p1__64805_SHARP_);
}),generated_data);
var and__5023__auto__ = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(gen_result);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.every_QMARK_(new cljs.core.Keyword(null,"success","success",1890645906),validation_results);
} else {
return and__5023__auto__;
}
}));
bb_web_ds_tools.components.malli_gen_test.inference_validation_test = (function bb_web_ds_tools$components$malli_gen_test$inference_validation_test(){
return cljs.test.test_var(bb_web_ds_tools.components.malli_gen_test.inference_validation_test.cljs$lang$var);
});
bb_web_ds_tools.components.malli_gen_test.inference_validation_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inferred schema validates original data"], 0));

try{var result = clojure.test.check.quick_check((20),bb_web_ds_tools.components.malli_gen_test.inference_validation_prop);
try{var value__11369__auto__ = new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(value__11369__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/malli_gen_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),11,47,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),47,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/malli_gen_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),11,47,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),47,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}

return value__11369__auto__;
}catch (e64812){var t__11416__auto__ = e64812;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/malli_gen_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),11,47,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),47,t__11416__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.components.malli_gen_test.inference_validation_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.malli_gen_test.inference_validation_test;},new cljs.core.Symbol("bb-web-ds-tools.components.malli-gen-test","inference-validation-test","bb-web-ds-tools.components.malli-gen-test/inference-validation-test",-1628682967,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.malli-gen-test","bb-web-ds-tools.components.malli-gen-test",-138650642,null),new cljs.core.Symbol(null,"inference-validation-test","inference-validation-test",444177813,null),"bb_web_ds_tools/components/malli_gen_test.cljs",35,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.malli_gen_test.inference_validation_test)?bb_web_ds_tools.components.malli_gen_test.inference_validation_test.cljs$lang$test:null)])));
bb_web_ds_tools.components.malli_gen_test.generation_validation_test = (function bb_web_ds_tools$components$malli_gen_test$generation_validation_test(){
return cljs.test.test_var(bb_web_ds_tools.components.malli_gen_test.generation_validation_test.cljs$lang$var);
});
bb_web_ds_tools.components.malli_gen_test.generation_validation_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Generated data validates against schema"], 0));

try{var result = clojure.test.check.quick_check((20),bb_web_ds_tools.components.malli_gen_test.generation_validation_prop);
try{var value__11369__auto__ = new cljs.core.Keyword(null,"pass?","pass?",-424635753).cljs$core$IFn$_invoke$arity$1(result);
if(cljs.core.truth_(value__11369__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/malli_gen_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),11,52,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),52,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/malli_gen_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),11,52,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),52,value__11369__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}

return value__11369__auto__;
}catch (e64814){var t__11416__auto__ = e64814;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/components/malli_gen_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),11,52,cljs.core.list(new cljs.core.Keyword(null,"pass?","pass?",-424635753),new cljs.core.Symbol(null,"result","result",-1239343558,null)),52,t__11416__auto__,["Failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(result)], 0))].join('')]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.components.malli_gen_test.generation_validation_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.malli_gen_test.generation_validation_test;},new cljs.core.Symbol("bb-web-ds-tools.components.malli-gen-test","generation-validation-test","bb-web-ds-tools.components.malli-gen-test/generation-validation-test",-1024213253,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.malli-gen-test","bb-web-ds-tools.components.malli-gen-test",-138650642,null),new cljs.core.Symbol(null,"generation-validation-test","generation-validation-test",1231619599,null),"bb_web_ds_tools/components/malli_gen_test.cljs",36,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.malli_gen_test.generation_validation_test)?bb_web_ds_tools.components.malli_gen_test.generation_validation_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.malli_gen_test.js.map
