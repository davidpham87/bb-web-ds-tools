goog.provide('verification.e2e.theme_test');
verification.e2e.theme_test.verify_theme = (function verification$e2e$theme_test$verify_theme(){
return verification.e2e.core.with_page((function (page){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto__){
return promesa.protocols._mcat(promesa.protocols._promise("http://localhost:8080/#/settings"),(function (url){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating to",url], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto(url)),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("text=Settings")),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("text=Appearance")),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(page.getByRole("button",({"name": "Menu"}))),(function (menu_btn){
return promesa.protocols._mcat(promesa.protocols._promise(menu_btn.locator("xpath=../..")),(function (top_bar){
return promesa.protocols._mcat(promesa.protocols._promise(top_bar.getAttribute("class")),(function (class_attr){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Top Bar Classes:",class_attr], 0))),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(top_bar.evaluate("el => window.getComputedStyle(el).backgroundColor")),(function (initial_bg){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initial Top Bar BG:",initial_bg], 0))),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise(page.locator("div:has(> label:has-text('Theme')) >> select")),(function (select){
return promesa.protocols._mcat(promesa.protocols._promise(select.selectOption("nord-light")),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForTimeout((1000))),(function (___$7){
return promesa.protocols._mcat(promesa.protocols._promise(top_bar.evaluate("el => window.getComputedStyle(el).backgroundColor")),(function (new_bg){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New Top Bar BG (nord-light):",new_bg], 0))),(function (___$8){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_((function (){var and__5023__auto__ = new_bg;
if(cljs.core.truth_(and__5023__auto__)){
return clojure.string.includes_QMARK_(new_bg,"rgb(236, 239, 244)");
} else {
return and__5023__auto__;
}
})())?cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SUCCESS: Navigation background changed correctly for nord-light."], 0)):cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAILURE: Navigation background did not match expected nord-light color. Got:",new_bg], 0)))),(function (___44360__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Theme verification complete"], 0)));
}));
}));
}));
}));
}));
}));
}));
}));
}));
}));
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

verification.e2e.core.register(new cljs.core.Symbol(null,"verify-theme","verify-theme",570412879,null),verification.e2e.theme_test.verify_theme);

//# sourceMappingURL=verification.e2e.theme_test.js.map
