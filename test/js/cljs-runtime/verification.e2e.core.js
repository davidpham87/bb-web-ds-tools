goog.provide('verification.e2e.core');
if((typeof verification !== 'undefined') && (typeof verification.e2e !== 'undefined') && (typeof verification.e2e.core !== 'undefined') && (typeof verification.e2e.core.registry !== 'undefined')){
} else {
verification.e2e.core.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
verification.e2e.core.register = (function verification$e2e$core$register(name,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(verification.e2e.core.registry,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"f","f",-1597136552),f], null));
});
verification.e2e.core.check = (function verification$e2e$core$check(val,msg){
if(cljs.core.truth_(val)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["PASS:",msg], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FAIL:",msg], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Assertion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
verification.e2e.core.with_page = (function verification$e2e$core$with_page(f){
var executable_path = (function (){var or__5025__auto__ = process.env.CHROME_BIN;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return process.env.PUPPETEER_EXECUTABLE_PATH;
}
})();
var launch_options = (cljs.core.truth_(executable_path)?({"headless": true, "executablePath": executable_path, "args": ["--no-sandbox"]}):({"headless": true, "args": ["--no-sandbox"]}));
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(shadow.js.shim.module$playwright.chromium.launch(launch_options)),(function (browser){
return promesa.protocols._mcat(promesa.protocols._promise(browser.newContext()),(function (context){
return promesa.protocols._mcat(promesa.protocols._promise(context.newPage()),(function (page){
return promesa.protocols._mcat(promesa.protocols._promise(page.on("console",(function (msg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",msg.type())){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Browser Console Error:",msg.text()], 0));
} else {
return null;
}
}))),(function (___44360__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(page.on("pageerror",(function (err){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Browser Page Error:",err], 0));
}))),(function (___44360__auto____$1){
return promesa.protocols._promise(promesa.core.finally$.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(page) : f.call(null,page)),(function (){
return browser.close();
})));
}));
}));
}));
}));
}));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Test failed inside with-page:",e], 0));

return verification.e2e.core.check(false,["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
}));
});
verification.e2e.core.run_all = (function verification$e2e$core$run_all(){
var tests = cljs.core.deref(verification.e2e.core.registry);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running",cljs.core.count(tests),"tests"], 0));

return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_44521,reject_fn_44520){
var loop_fn_44517 = (function verification$e2e$core$run_all_$_loop_fn_44517(tests__$1){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_44518,err_44519){
if((!((err_44519 == null)))){
return (reject_fn_44520.cljs$core$IFn$_invoke$arity$1 ? reject_fn_44520.cljs$core$IFn$_invoke$arity$1(err_44519) : reject_fn_44520.call(null,err_44519));
} else {
if(promesa.core.recur_QMARK_(res_44518)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(verification$e2e$core$run_all_$_loop_fn_44517,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(res_44518));
})));

return null;
} else {
return (resolve_fn_44521.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_44521.cljs$core$IFn$_invoke$arity$1(res_44518) : resolve_fn_44521.call(null,res_44518));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44392__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(tests__$1),(function (tests__$2){
return promesa.protocols._promise(((cljs.core.seq(tests__$2))?(function (){var map__44522 = cljs.core.first(tests__$2);
var map__44522__$1 = cljs.core.__destructure_map(map__44522);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44522__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Testing",name], 0));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___44370__auto__){
return promesa.protocols._promise((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
})),(function (e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error in test",name,e], 0));

if(cljs.core.truth_(e.stack)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Stack:",e.stack], 0));
} else {
return null;
}
})),(function (_){
return promesa.core.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(tests__$2)], null));
}));
})():cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Finished all tests."], 0))));
}));
})));
});
return promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return loop_fn_44517(tests);
})));
}));
});

//# sourceMappingURL=verification.e2e.core.js.map
