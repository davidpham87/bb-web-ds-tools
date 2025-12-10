goog.provide('verification.e2e.release_test');
verification.e2e.release_test.items = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),"#/malli",new cljs.core.Keyword(null,"text","text",-1790561697),"Input Data"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),"#/honeysql",new cljs.core.Keyword(null,"text","text",-1790561697),"Convert to SQL"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),"#/vega-lite",new cljs.core.Keyword(null,"text","text",-1790561697),"Import Dataset"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),"#/gemma",new cljs.core.Keyword(null,"text","text",-1790561697),"Load Gemma Model"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Pyodide",new cljs.core.Keyword(null,"route","route",329891309),"#/pyodide",new cljs.core.Keyword(null,"text","text",-1790561697),"Run"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Editor",new cljs.core.Keyword(null,"route","route",329891309),"#/editor",new cljs.core.Keyword(null,"text","text",-1790561697),"Save Code"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Repl",new cljs.core.Keyword(null,"route","route",329891309),"#/repl",new cljs.core.Keyword(null,"text","text",-1790561697),"Clojure Code"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),"#/datasets",new cljs.core.Keyword(null,"text","text",-1790561697),"Create New Dataset"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),"#/settings",new cljs.core.Keyword(null,"text","text",-1790561697),"Settings"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),"#/changelog",new cljs.core.Keyword(null,"text","text",-1790561697),"Changelog"], null)], null);
verification.e2e.release_test.verify_release = (function verification$e2e$release_test$verify_release(){
return verification.e2e.core.with_page((function (page){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating to landing page..."], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto("http://localhost:8080")),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("text=Swiss Army Knife",({"timeout": (30000)}))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Landing page loaded."], 0))),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_44542,reject_fn_44541){
var loop_fn_44538 = (function verification$e2e$release_test$verify_release_$_loop_fn_44538(items){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_44539,err_44540){
if((!((err_44540 == null)))){
return (reject_fn_44541.cljs$core$IFn$_invoke$arity$1 ? reject_fn_44541.cljs$core$IFn$_invoke$arity$1(err_44540) : reject_fn_44541.call(null,err_44540));
} else {
if(promesa.core.recur_QMARK_(res_44539)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(verification$e2e$release_test$verify_release_$_loop_fn_44538,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(res_44539));
})));

return null;
} else {
return (resolve_fn_44542.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_44542.cljs$core$IFn$_invoke$arity$1(res_44539) : resolve_fn_44542.call(null,res_44539));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto____$1){
return promesa.protocols._mcat(promesa.protocols._promise(items),(function (items__$1){
return promesa.protocols._promise(((cljs.core.seq(items__$1))?(function (){var map__44543 = cljs.core.first(items__$1);
var map__44543__$1 = cljs.core.__destructure_map(map__44543);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44543__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44543__$1,new cljs.core.Keyword(null,"route","route",329891309));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44543__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating to",label,"..."], 0));

return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44370__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto(["http://localhost:8080/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''))),(function (___44360__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(page.isVisible("text=Select Kernel")),(function (is_visible){
return promesa.protocols._promise((cljs.core.truth_(is_visible)?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Dismissing Kernel dialog..."], 0));

return page.evaluate("document.querySelectorAll('.jp-Dialog').forEach(e => e.remove())");
})()
:null));
}));
}))),(function (___44360__auto____$1){
return promesa.protocols._promise(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto____$2){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector(["text=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),({"timeout": (10000)}))),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Verified",label,"page."], 0))),(function (___44360__auto____$2){
return promesa.protocols._promise(promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(items__$1)], null)));
}));
}));
})));
}));
}));
}));
})():promesa.core.resolved(null)));
}));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return loop_fn_44538(verification.e2e.release_test.items);
})));
}))),(function (___$4){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All pages verified successfully!"], 0)));
}));
}));
}));
}));
}));
}));
}));
});

verification.e2e.core.register(new cljs.core.Symbol(null,"verify-release","verify-release",-1983929058,null),verification.e2e.release_test.verify_release);

//# sourceMappingURL=verification.e2e.release_test.js.map
