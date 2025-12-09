goog.provide('verification.e2e.theme_test');
verification.e2e.theme_test.check = (function verification$e2e$theme_test$check(val,msg){
if(cljs.core.truth_(val)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PASS:",msg], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAIL:",msg], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Assertion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
verification.e2e.theme_test.with_page = (function verification$e2e$theme_test$with_page(f){
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

return verification.e2e.theme_test.check(false,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}));
});
verification.e2e.theme_test.theme_verification_test = (function verification$e2e$theme_test$theme_verification_test(){
return verification.e2e.theme_test.with_page((function (page){
return promesa.protocols._mcat(promesa.protocols._promise(null),(function (___43596__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating to Settings"], 0))),(function (_){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto("http://localhost:8080/#/settings")),(function (___$1){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForSelector("h2:has-text('Settings')")),(function (___$2){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Checking toolbar existence"], 0))),(function (___$3){
return promesa.protocols._mcat(promesa.protocols._promise(page.locator("div.h-12.flex.items-center.w-full")),(function (top_bar){
return promesa.protocols._mcat(promesa.protocols._promise(top_bar.waitFor()),(function (___$4){
return promesa.protocols._mcat(promesa.protocols._promise(top_bar.innerText()),(function (text){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Top Bar Text:",text], 0))),(function (___$5){
return promesa.protocols._mcat(promesa.protocols._promise(verification.e2e.theme_test.check(clojure.string.includes_QMARK_(text,"Settings"),"Top bar should contain 'Settings'")),(function (___$6){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Changing theme to 'nord-light'"], 0))),(function (___$7){
return promesa.protocols._mcat(promesa.protocols._promise(page.selectOption("select","nord-light")),(function (___$8){
return promesa.protocols._mcat(promesa.protocols._promise(page.waitForTimeout((1000))),(function (___$9){
return promesa.protocols._mcat(promesa.protocols._promise(page.inputValue("select")),(function (val){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Selected value:",val], 0))),(function (___$10){
return promesa.protocols._mcat(promesa.protocols._promise(verification.e2e.theme_test.check(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nord-light",val),"Selected theme should be 'nord-light'")),(function (___$11){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Navigating to Code view"], 0))),(function (___$12){
return promesa.protocols._mcat(promesa.protocols._promise(page.goto("http://localhost:8080/#/code")),(function (___$13){
return promesa.protocols._mcat(promesa.protocols._promise(page.locator(".monaco-editor")),(function (editor){
return promesa.protocols._mcat(promesa.protocols._promise(editor.waitFor()),(function (___$14){
return promesa.protocols._mcat(promesa.protocols._promise(cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Code view loaded and editor found"], 0))),(function (___$15){
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
}));
}));
}));
});

verification.e2e.core.register(new cljs.core.Symbol(null,"theme-verification-test","theme-verification-test",-1684314465,null),verification.e2e.theme_test.theme_verification_test);

//# sourceMappingURL=verification.e2e.theme_test.js.map
