goog.provide('verification.e2e.core');
if((typeof verification !== 'undefined') && (typeof verification.e2e !== 'undefined') && (typeof verification.e2e.core !== 'undefined') && (typeof verification.e2e.core.registry !== 'undefined')){
} else {
verification.e2e.core.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
verification.e2e.core.register = (function verification$e2e$core$register(name,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(verification.e2e.core.registry,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"f","f",-1597136552),f], null));
});
verification.e2e.core.run_all = (function verification$e2e$core$run_all(){
var tests = cljs.core.deref(verification.e2e.core.registry);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Running",cljs.core.count(tests),"tests"], 0));

return promesa.core.create.cljs$core$IFn$_invoke$arity$1((function (resolve_fn_68604,reject_fn_68603){
var loop_fn_68600 = (function verification$e2e$core$run_all_$_loop_fn_68600(tests__$1){
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (res_68601,err_68602){
if((!((err_68602 == null)))){
return (reject_fn_68603.cljs$core$IFn$_invoke$arity$1 ? reject_fn_68603.cljs$core$IFn$_invoke$arity$1(err_68602) : reject_fn_68603.call(null,err_68602));
} else {
if(promesa.core.recur_QMARK_(res_68601)){
promesa.exec.run_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vthread","vthread",441141075),promesa.exec.wrap_bindings((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(verification$e2e$core$run_all_$_loop_fn_68600,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(res_68601));
})));

return null;
} else {
return (resolve_fn_68604.cljs$core$IFn$_invoke$arity$1 ? resolve_fn_68604.cljs$core$IFn$_invoke$arity$1(res_68601) : resolve_fn_68604.call(null,res_68601));
}
}
}),promesa.protocols._mcat(promesa.protocols._promise(null),(function (___68222__auto__){
return promesa.protocols._mcat(promesa.protocols._promise(tests__$1),(function (tests__$2){
return promesa.protocols._promise(((cljs.core.seq(tests__$2))?(function (){var map__68631 = cljs.core.first(tests__$2);
var map__68631__$1 = cljs.core.__destructure_map(map__68631);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68631__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68631__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Testing",name], 0));

return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(promesa.protocols._mcat(promesa.protocols._promise(null),(function (___68200__auto__){
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
return loop_fn_68600(tests);
})));
}));
});

//# sourceMappingURL=verification.e2e.core.js.map
