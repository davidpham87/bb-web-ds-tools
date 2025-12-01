goog.provide('bb_web_ds_tools.workers.sci');
bb_web_ds_tools.workers.sci.post_msg = (function bb_web_ds_tools$workers$sci$post_msg(msg){
return postMessage(cljs.core.clj__GT_js(msg));
});
bb_web_ds_tools.workers.sci.sci_ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"println","println",-733595439,null),(function() { 
var G__54866__delegate = function (args){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stdout","stdout",-531490018),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",args))], null));
};
var G__54866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54867__i = 0, G__54867__a = new Array(arguments.length -  0);
while (G__54867__i < G__54867__a.length) {G__54867__a[G__54867__i] = arguments[G__54867__i + 0]; ++G__54867__i;}
  args = new cljs.core.IndexedSeq(G__54867__a,0,null);
} 
return G__54866__delegate.call(this,args);};
G__54866.cljs$lang$maxFixedArity = 0;
G__54866.cljs$lang$applyTo = (function (arglist__54868){
var args = cljs.core.seq(arglist__54868);
return G__54866__delegate(args);
});
G__54866.cljs$core$IFn$_invoke$arity$variadic = G__54866__delegate;
return G__54866;
})()
], null),new cljs.core.Symbol(null,"re-frame.core","re-frame.core",-1549073474,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),(function (event){
return bb_web_ds_tools.workers.sci.post_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),event], null));
}),new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),(function (_){
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),new cljs.core.Keyword(null,"text","text",-1790561697),"rf/subscribe is not supported in the worker."], null));

return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
})], null)], null)], null));
bb_web_ds_tools.workers.sci.eval_code = (function bb_web_ds_tools$workers$sci$eval_code(code){
var rdr = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(code);
try{var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var form = (function (){try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(rdr,false,new cljs.core.Keyword(null,"eof","eof",-489063237));
}catch (e54858){var e = e54858;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),["Read Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword(null,"eof","eof",-489063237))){
return acc;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.map_QMARK_(form);
if(and__5023__auto__){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(form);
} else {
return and__5023__auto__;
}
})())){
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(form)], null));

var G__54871 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
acc = G__54871;
continue;
} else {
var res = (function (){try{return sci.core.eval_form(bb_web_ds_tools.workers.sci.sci_ctx,form);
}catch (e54860){var e = e54860;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),["Eval Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}})();
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null));

var G__54872 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,res);
acc = G__54872;
continue;
}
}
break;
}
}catch (e54854){var e = e54854;
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}});
bb_web_ds_tools.workers.sci.init = (function bb_web_ds_tools$workers$sci$init(){
return self.addEventListener("message",(function (e){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(e.data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__54862 = data;
var map__54862__$1 = cljs.core.__destructure_map(map__54862);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54862__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54862__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var G__54865 = type;
switch (G__54865) {
case "eval":
return bb_web_ds_tools.workers.sci.eval_code(code);

break;
default:
return console.warn("Unknown message type:",type);

}
}));
});

//# sourceMappingURL=bb_web_ds_tools.workers.sci.js.map
