goog.provide('verification.e2e.sample_test');
verification.e2e.sample_test.check = (function verification$e2e$sample_test$check(val,msg){
if(cljs.core.truth_(val)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PASS:",msg], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAIL:",msg], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Assertion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
verification.e2e.sample_test.with_page = (function verification$e2e$sample_test$with_page(f){
var executable_path = (function (){var or__5025__auto__ = process.env.CHROME_BIN;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return process.env.PUPPETEER_EXECUTABLE_PATH;
}
})();
var launch_options = (cljs.core.truth_(executable_path)?({"headless": true, "executablePath": executable_path}):({"headless": true}));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___43596__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(shadow.js.shim.module$playwright.chromium.launch(launch_options)),(function (browser){
return promesa.protocols._mcat(promesa.protocols._promise(browser.newContext()),(function (context){
return promesa.protocols._mcat(promesa.protocols._promise(context.newPage()),(function (page){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(page) : f.call(null,page)),(function (){
return browser.close();
})));
}));
}));
}));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Test failed inside with-page:",e], 0));

return verification.e2e.sample_test.check(false,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}));
});
verification.e2e.sample_test.simple_sync_test = (function verification$e2e$sample_test$simple_sync_test(){
return verification.e2e.sample_test.check(true,"Sync test runs");
});

verification.e2e.core.register(new cljs.core.Symbol(null,"simple-sync-test","simple-sync-test",320672860,null),verification.e2e.sample_test.simple_sync_test);
verification.e2e.sample_test.navigate_tabs_test = (function verification$e2e$sample_test$navigate_tabs_test(){
return verification.e2e.sample_test.with_page((function (page){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___43596__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating to http://localhost:8080"], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto("http://localhost:8080")),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForLoadState("networkidle")),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(page.locator("button[title='Menu']")),(function (menu_btn){
return promesa.protocols._mcat(promesa.protocols._promise(menu_btn.isVisible()),(function (is_visible){
return promesa.protocols._mcat(promesa.protocols._promise((cljs.core.truth_(is_visible)?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicking Menu button"], 0));

return menu_btn.click();
})()
:null)),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForTimeout((1000))),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicking Settings"], 0))),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise(page.click("a[href='#/settings']")),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("h2:has-text('Settings')")),(function (___$7){
return promesa.protocols._mcat(promesa.protocols._promise(page.url()),(function (url){
return promesa.protocols._mcat(promesa.protocols._promise(verification.e2e.sample_test.check(clojure.string.includes_QMARK_(url,"settings"),"URL should contain 'settings'")),(function (___43564__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigation test passed"], 0)));
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

verification.e2e.core.register(new cljs.core.Symbol(null,"navigate-tabs-test","navigate-tabs-test",454216799,null),verification.e2e.sample_test.navigate_tabs_test);
verification.e2e.sample_test.change_theme_test = (function verification$e2e$sample_test$change_theme_test(){
return verification.e2e.sample_test.with_page((function (page){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___43596__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating to Settings directly"], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto("http://localhost:8080/#/settings")),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("h2:has-text('Settings')")),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("select")),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Changing theme to 'nord'"], 0))),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(page.selectOption("select","nord")),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForTimeout((500))),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise(page.inputValue("select")),(function (val){
return promesa.protocols._mcat(promesa.protocols._promise(verification.e2e.sample_test.check(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nord",val),"Selected theme should be 'nord'")),(function (___43564__auto__){
return promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Theme test passed"], 0)));
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

verification.e2e.core.register(new cljs.core.Symbol(null,"change-theme-test","change-theme-test",297110413,null),verification.e2e.sample_test.change_theme_test);

//# sourceMappingURL=verification.e2e.sample_test.js.map
