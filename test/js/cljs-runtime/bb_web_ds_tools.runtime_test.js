goog.provide('bb_web_ds_tools.runtime_test');
bb_web_ds_tools.runtime_test.test_sci_main_eval = (function bb_web_ds_tools$runtime_test$test_sci_main_eval(){
return cljs.test.test_var(bb_web_ds_tools.runtime_test.test_sci_main_eval.cljs$lang$var);
});
bb_web_ds_tools.runtime_test.test_sci_main_eval.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["eval-in-main executes code"], 0));

try{var results = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var submit_orig_val__57353 = portal.web.submit;
var submit_temp_val__57354 = (function (res){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,res);
});
(portal.web.submit = submit_temp_val__57354);

try{bb_web_ds_tools.runtime.sci.eval_in_main("(+ 1 2)");

try{var values__11365__auto__ = (new cljs.core.List(null,"3",(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.deref(results))),null,(1),null)),(2),null));
var result__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto__);
if(cljs.core.truth_(result__11366__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),13,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"3",cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null))))),11,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),13,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"3",cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null))))),11,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto__),null,(1),null)),(2),null)),null]));
}

return result__11366__auto__;
}catch (e57356){var t__11416__auto__ = e57356;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),13,11,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"3",cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null))))),11,t__11416__auto__,null]));
}}finally {(portal.web.submit = submit_orig_val__57353);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime_test.test_sci_main_eval.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime_test.test_sci_main_eval;},new cljs.core.Symbol("bb-web-ds-tools.runtime-test","test-sci-main-eval","bb-web-ds-tools.runtime-test/test-sci-main-eval",1897468908,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime-test","bb-web-ds-tools.runtime-test",-1907479202,null),new cljs.core.Symbol(null,"test-sci-main-eval","test-sci-main-eval",2139962238,null),"bb_web_ds_tools/runtime_test.cljs",28,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime_test.test_sci_main_eval)?bb_web_ds_tools.runtime_test.test_sci_main_eval.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.runtime_test.js.map
