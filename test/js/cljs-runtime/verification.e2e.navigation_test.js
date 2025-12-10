goog.provide('verification.e2e.navigation_test');
verification.e2e.navigation_test.verify_direct_url_access = (function verification$e2e$navigation_test$verify_direct_url_access(){
return verification.e2e.core.with_page((function (page){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto__){
return promesa.protocols._mcat(promesa.protocols._promise("http://localhost:8080/#/editor"),(function (target_url){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating directly to",target_url], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto(target_url)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("text=Save Code",({"timeout": (10000)}))),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(page.url()),(function (url){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Current URL:",url], 0))),(function (___44360__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(verification.e2e.core.check(clojure.string.includes_QMARK_(url,"editor"),"URL should verify we are on the editor page")),(function (___44360__auto____$1){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Direct URL navigation verification passed"], 0)));
}));
}));
}));
}));
}));
}));
}));
}));
}));
});

verification.e2e.core.register(new cljs.core.Symbol(null,"verify-direct-url-access","verify-direct-url-access",-1882573553,null),verification.e2e.navigation_test.verify_direct_url_access);

//# sourceMappingURL=verification.e2e.navigation_test.js.map
