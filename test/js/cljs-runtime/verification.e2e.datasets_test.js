goog.provide('verification.e2e.datasets_test');
verification.e2e.core.register("Datasets View",(function (){
return verification.e2e.core.with_page((function (page){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.then.cljs$core$IFn$_invoke$arity$2(page.goto("http://localhost:8080/#/datasets"),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Page loaded."], 0));

return page.waitForSelector("text=Datasets");
})),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Datasets visible."], 0));

return page.getByText("+ New Dataset").click();
})),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicked New Dataset."], 0));

return page.waitForSelector("text=Format");
})),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Format visible."], 0));

return page.waitForSelector("text=Structure");
})),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Structure visible."], 0));

return page.waitForSelector("text=Download from URLs");
})),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Download visible."], 0));

return page.screenshot(({"path": "verification/datasets_view_cljs.png"}));
})),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Screenshot taken. Verification complete!"], 0));
}));
}));
}));

//# sourceMappingURL=verification.e2e.datasets_test.js.map
