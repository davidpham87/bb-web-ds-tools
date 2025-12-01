goog.provide('bb_web_ds_tools.workers.pyodide');
goog.scope(function(){
  bb_web_ds_tools.workers.pyodide.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.workers !== 'undefined') && (typeof bb_web_ds_tools.workers.pyodide !== 'undefined') && (typeof bb_web_ds_tools.workers.pyodide.pyodide_instance !== 'undefined')){
} else {
bb_web_ds_tools.workers.pyodide.pyodide_instance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bb_web_ds_tools.workers.pyodide.post_msg = (function bb_web_ds_tools$workers$pyodide$post_msg(msg){
return postMessage(cljs.core.clj__GT_js(msg));
});
bb_web_ds_tools.workers.pyodide.run_code = (function bb_web_ds_tools$workers$pyodide$run_code(code){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.workers.pyodide.pyodide_instance))){
var run_fn = bb_web_ds_tools.workers.pyodide.goog$module$goog$object.get(cljs.core.deref(bb_web_ds_tools.workers.pyodide.pyodide_instance),"runPythonAsync");
return (run_fn.cljs$core$IFn$_invoke$arity$1 ? run_fn.cljs$core$IFn$_invoke$arity$1(code) : run_fn.call(null,code)).then((function (res){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),res], null));
})).catch((function (err){
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)], null));

return bb_web_ds_tools.workers.pyodide.post_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)], null));
}));
} else {
return null;
}
});
bb_web_ds_tools.workers.pyodide.load_runtime = (function bb_web_ds_tools$workers$pyodide$load_runtime(){
try{importScripts("https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js");

return loadPyodide(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indexURL","indexURL",-1448338433),"https://cdn.jsdelivr.net/pyodide/v0.29.0/full/",new cljs.core.Keyword(null,"stdout","stdout",-531490018),(function (text){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stdout","stdout",-531490018),new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
}),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),(function (text){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
})], null))).then((function (p){
cljs.core.reset_BANG_(bb_web_ds_tools.workers.pyodide.pyodide_instance,p);

return bb_web_ds_tools.workers.pyodide.post_msg(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ready","ready",1086465795)], null));
})).catch((function (e){
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["Load Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null));

return bb_web_ds_tools.workers.pyodide.post_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["Load Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null));
}));
}catch (e54916){var e = e54916;
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["Import Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null));

return bb_web_ds_tools.workers.pyodide.post_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),["Import Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null));
}});
bb_web_ds_tools.workers.pyodide.init = (function bb_web_ds_tools$workers$pyodide$init(){
return self.addEventListener("message",(function (e){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__54920 = data;
var map__54920__$1 = cljs.core.__destructure_map(map__54920);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54920__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54920__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var G__54922 = type;
switch (G__54922) {
case "load":
return bb_web_ds_tools.workers.pyodide.load_runtime();

break;
case "run":
return bb_web_ds_tools.workers.pyodide.run_code(code);

break;
default:
return console.warn("Unknown message type:",type);

}
}));
});

//# sourceMappingURL=bb_web_ds_tools.workers.pyodide.js.map
