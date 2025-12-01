goog.provide('bb_web_ds_tools.runtime.sci');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.sci !== 'undefined') && (typeof bb_web_ds_tools.runtime.sci.sci_worker !== 'undefined')){
} else {
bb_web_ds_tools.runtime.sci.sci_worker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bb_web_ds_tools.runtime.sci.default_on_message = (function bb_web_ds_tools$runtime$sci$default_on_message(msg){
var map__49519 = msg;
var map__49519__$1 = cljs.core.__destructure_map(map__49519);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49519__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49519__$1,new cljs.core.Keyword(null,"event","event",301435442));
var G__49521 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__49521__$1 = (((G__49521 instanceof cljs.core.Keyword))?G__49521.fqn:null);
switch (G__49521__$1) {
case "dispatch":
return re_frame.core.dispatch(event);

break;
default:
return console.warn("Unknown worker msg:",msg);

}
});
bb_web_ds_tools.runtime.sci.init_BANG_ = (function bb_web_ds_tools$runtime$sci$init_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49571 = arguments.length;
var i__5750__auto___49572 = (0);
while(true){
if((i__5750__auto___49572 < len__5749__auto___49571)){
args__5755__auto__.push((arguments[i__5750__auto___49572]));

var G__49573 = (i__5750__auto___49572 + (1));
i__5750__auto___49572 = G__49573;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.runtime.sci.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.sci.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__49529){
var vec__49531 = p__49529;
var on_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49531,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker))){
return null;
} else {
return cljs.core.reset_BANG_(bb_web_ds_tools.runtime.sci.sci_worker,bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("js/compiled/sci-worker.js",(function (){var or__5025__auto__ = on_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return bb_web_ds_tools.runtime.sci.default_on_message;
}
})()));
}
}));

(bb_web_ds_tools.runtime.sci.init_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.runtime.sci.init_BANG_.cljs$lang$applyTo = (function (seq49525){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49525));
}));

bb_web_ds_tools.runtime.sci.eval_in_worker = (function bb_web_ds_tools$runtime$sci$eval_in_worker(code){
bb_web_ds_tools.runtime.sci.init_BANG_();

return bb_web_ds_tools.utils.worker.post_message(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"eval",new cljs.core.Keyword(null,"code","code",1586293142),code], null));
});
bb_web_ds_tools.runtime.sci.sci_ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"println","println",-733595439,null),(function() { 
var G__49579__delegate = function (args){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stdout","stdout",-531490018),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",args))], null));
};
var G__49579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49581__i = 0, G__49581__a = new Array(arguments.length -  0);
while (G__49581__i < G__49581__a.length) {G__49581__a[G__49581__i] = arguments[G__49581__i + 0]; ++G__49581__i;}
  args = new cljs.core.IndexedSeq(G__49581__a,0,null);
} 
return G__49579__delegate.call(this,args);};
G__49579.cljs$lang$maxFixedArity = 0;
G__49579.cljs$lang$applyTo = (function (arglist__49582){
var args = cljs.core.seq(arglist__49582);
return G__49579__delegate(args);
});
G__49579.cljs$core$IFn$_invoke$arity$variadic = G__49579__delegate;
return G__49579;
})()
], null),new cljs.core.Symbol(null,"re-frame.core","re-frame.core",-1549073474,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),re_frame.core.dispatch,new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),(function (_){
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),new cljs.core.Keyword(null,"text","text",-1790561697),"rf/subscribe is not supported in SCI main thread yet."], null));

return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
})], null)], null)], null));
bb_web_ds_tools.runtime.sci.eval_in_main = (function bb_web_ds_tools$runtime$sci$eval_in_main(code){
var rdr = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(code);
try{var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var form = (function (){try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(rdr,false,new cljs.core.Keyword(null,"eof","eof",-489063237));
}catch (e49559){var e = e49559;
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

var G__49588 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
acc = G__49588;
continue;
} else {
var res = (function (){try{return sci.core.eval_form(bb_web_ds_tools.runtime.sci.sci_ctx,form);
}catch (e49562){var e = e49562;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),["Eval Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}})();
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null));

var G__49590 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,res);
acc = G__49590;
continue;
}
}
break;
}
}catch (e49547){var e = e49547;
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}});

//# sourceMappingURL=bb_web_ds_tools.runtime.sci.js.map
