goog.provide('bb_web_ds_tools.views.repl_selection_test');
bb_web_ds_tools.views.repl_selection_test.get_code_to_eval_test = (function bb_web_ds_tools$views$repl_selection_test$get_code_to_eval_test(){
return cljs.test.test_var(bb_web_ds_tools.views.repl_selection_test.get_code_to_eval_test.cljs$lang$var);
});
bb_web_ds_tools.views.repl_selection_test.get_code_to_eval_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["returns full buffer when no selection"], 0));

try{var mock_editor_42589 = ({"getSelection": (function (){
return ({"isEmpty": (function (){
return true;
})});
}), "getModel": (function (){
return null;
}), "getValue": (function (){
return "full code";
})});
try{var values__11365__auto___42590 = (new cljs.core.List(null,"full code",(new cljs.core.List(null,bb_web_ds_tools.components.editor.get_code_to_eval(mock_editor_42589),null,(1),null)),(2),null));
var result__11366__auto___42591 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___42590);
if(cljs.core.truth_(result__11366__auto___42591)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),11,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"full code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),10,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42590),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),11,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"full code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),10,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42590),null,(1),null)),(2),null)),null]));
}

}catch (e42584){var t__11416__auto___42593 = e42584;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),11,10,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"full code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),10,t__11416__auto___42593,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["returns selected text when selection exists"], 0));

try{var mock_editor_42594 = ({"getSelection": (function (){
return ({"isEmpty": (function (){
return false;
})});
}), "getModel": (function (){
return ({"getValueInRange": (function (sel){
return "selected code";
})});
}), "getValue": (function (){
return "full code";
})});
try{var values__11365__auto___42596 = (new cljs.core.List(null,"selected code",(new cljs.core.List(null,bb_web_ds_tools.components.editor.get_code_to_eval(mock_editor_42594),null,(1),null)),(2),null));
var result__11366__auto___42597 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___42596);
if(cljs.core.truth_(result__11366__auto___42597)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",65,new cljs.core.Keyword(null,"pass","pass",1574159993),11,16,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"selected code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),16,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42596),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",65,new cljs.core.Keyword(null,"fail","fail",1706214930),11,16,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"selected code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),16,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42596),null,(1),null)),(2),null)),null]));
}

}catch (e42585){var t__11416__auto___42598 = e42585;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",65,new cljs.core.Keyword(null,"error","error",-978969032),11,16,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"selected code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),16,t__11416__auto___42598,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["returns full buffer when selection is null"], 0));

try{var mock_editor = ({"getSelection": (function (){
return null;
}), "getModel": (function (){
return null;
}), "getValue": (function (){
return "full code";
})});
try{var values__11365__auto__ = (new cljs.core.List(null,"full code",(new cljs.core.List(null,bb_web_ds_tools.components.editor.get_code_to_eval(mock_editor),null,(1),null)),(2),null));
var result__11366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto__);
if(cljs.core.truth_(result__11366__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),11,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"full code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),22,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),11,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"full code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),22,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto__),null,(1),null)),(2),null)),null]));
}

return result__11366__auto__;
}catch (e42586){var t__11416__auto__ = e42586;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/views/repl_selection_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),11,22,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"full code",cljs.core.list(new cljs.core.Symbol("sut","get-code-to-eval","sut/get-code-to-eval",1814935082,null),new cljs.core.Symbol(null,"mock-editor","mock-editor",1622743954,null))),22,t__11416__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.views.repl_selection_test.get_code_to_eval_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.views.repl_selection_test.get_code_to_eval_test;},new cljs.core.Symbol("bb-web-ds-tools.views.repl-selection-test","get-code-to-eval-test","bb-web-ds-tools.views.repl-selection-test/get-code-to-eval-test",852246534,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.views.repl-selection-test","bb-web-ds-tools.views.repl-selection-test",844340209,null),new cljs.core.Symbol(null,"get-code-to-eval-test","get-code-to-eval-test",1054764672,null),"bb_web_ds_tools/views/repl_selection_test.cljs",31,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.views.repl_selection_test.get_code_to_eval_test)?bb_web_ds_tools.views.repl_selection_test.get_code_to_eval_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.views.repl_selection_test.js.map
