goog.provide('bb_web_ds_tools.code_view_test');
bb_web_ds_tools.code_view_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);
bb_web_ds_tools.code_view_test.mount_component = (function bb_web_ds_tools$code_view_test$mount_component(comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
});
bb_web_ds_tools.code_view_test.test_code_view_tab_appearance = (function bb_web_ds_tools$code_view_test$test_code_view_tab_appearance(){
return cljs.test.test_var(bb_web_ds_tools.code_view_test.test_code_view_tab_appearance.cljs$lang$var);
});
bb_web_ds_tools.code_view_test.test_code_view_tab_appearance.cljs$lang$test = (function (){
return day8.re_frame.test.run_test_sync_STAR_((function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","initialize-db","bb-web-ds-tools.core/initialize-db",-1812964254)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.code","initialize","bb-web-ds-tools.views.code/initialize",1752373785)], null));

var root = document.createElement("div");
var top_bar = document.createElement("div");
var _ = document.body.appendChild(root);
var ___$1 = root.appendChild(top_bar);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.components.navigation","set-top-bar-ref","bb-web-ds-tools.components.navigation/set-top-bar-ref",1693658101),top_bar], null));

bb_web_ds_tools.code_view_test.mount_component(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.code.panel], null),root);

reagent.core.flush();

var top_bar_text_40563 = top_bar.innerText;
var root_text_40564 = root.innerText;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Top Bar Text:",top_bar_text_40563], 0));

try{var values__11365__auto___40565 = (new cljs.core.List(null,/Clojure/,(new cljs.core.List(null,top_bar_text_40563,null,(1),null)),(2),null));
var result__11366__auto___40566 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find,values__11365__auto___40565);
if(cljs.core.truth_(result__11366__auto___40566)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/code_view_test.cljs",46,new cljs.core.Keyword(null,"pass","pass",1574159993),13,44,cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/Clojure/,new cljs.core.Symbol(null,"top-bar-text","top-bar-text",-136543980,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),values__11365__auto___40565),"Tab 'Clojure' should be in top bar"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/code_view_test.cljs",46,new cljs.core.Keyword(null,"fail","fail",1706214930),13,44,cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/Clojure/,new cljs.core.Symbol(null,"top-bar-text","top-bar-text",-136543980,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),values__11365__auto___40565),null,(1),null)),(2),null)),"Tab 'Clojure' should be in top bar"]));
}

}catch (e40555){var t__11416__auto___40567 = e40555;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/code_view_test.cljs",46,new cljs.core.Keyword(null,"error","error",-978969032),13,44,cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/Clojure/,new cljs.core.Symbol(null,"top-bar-text","top-bar-text",-136543980,null)),44,t__11416__auto___40567,"Tab 'Clojure' should be in top bar"]));
}
try{var values__11365__auto___40568 = (new cljs.core.List(null,/Python/,(new cljs.core.List(null,top_bar_text_40563,null,(1),null)),(2),null));
var result__11366__auto___40569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find,values__11365__auto___40568);
if(cljs.core.truth_(result__11366__auto___40569)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/code_view_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),13,45,cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/Python/,new cljs.core.Symbol(null,"top-bar-text","top-bar-text",-136543980,null)),45,cljs.core.cons(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),values__11365__auto___40568),"Tab 'Python' should be in top bar"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/code_view_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),13,45,cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/Python/,new cljs.core.Symbol(null,"top-bar-text","top-bar-text",-136543980,null)),45,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),values__11365__auto___40568),null,(1),null)),(2),null)),"Tab 'Python' should be in top bar"]));
}

}catch (e40556){var t__11416__auto___40570 = e40556;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/code_view_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),13,45,cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),/Python/,new cljs.core.Symbol(null,"top-bar-text","top-bar-text",-136543980,null)),45,t__11416__auto___40570,"Tab 'Python' should be in top bar"]));
}
reagent.dom.unmount_component_at_node(root);

return root.remove();
}));
});

(bb_web_ds_tools.code_view_test.test_code_view_tab_appearance.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.code_view_test.test_code_view_tab_appearance;},new cljs.core.Symbol("bb-web-ds-tools.code-view-test","test-code-view-tab-appearance","bb-web-ds-tools.code-view-test/test-code-view-tab-appearance",-520031721,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.code-view-test","bb-web-ds-tools.code-view-test",735249312,null),new cljs.core.Symbol(null,"test-code-view-tab-appearance","test-code-view-tab-appearance",564201386,null),"bb_web_ds_tools/code_view_test.cljs",39,1,17,17,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.code_view_test.test_code_view_tab_appearance)?bb_web_ds_tools.code_view_test.test_code_view_tab_appearance.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.code_view_test.js.map
