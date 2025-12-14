goog.provide('bb_web_ds_tools.runtime.sci');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.runtime !== 'undefined') && (typeof bb_web_ds_tools.runtime.sci !== 'undefined') && (typeof bb_web_ds_tools.runtime.sci.sci_worker !== 'undefined')){
} else {
bb_web_ds_tools.runtime.sci.sci_worker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Default handler for messages from the SCI worker.
 * 
 *   Args:
 *  msg (map): The message map containing :type, :event, :value, or :text.
 * 
 *   Returns:
 *  nil: Performs side-effects (dispatch or console log).
 */
bb_web_ds_tools.runtime.sci.default_on_message = (function bb_web_ds_tools$runtime$sci$default_on_message(msg){
var map__49268 = msg;
var map__49268__$1 = cljs.core.__destructure_map(map__49268);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49268__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49268__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49268__$1,new cljs.core.Keyword(null,"value","value",305978217));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49268__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var patch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49268__$1,new cljs.core.Keyword(null,"patch","patch",380775109));
var G__49269 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__49269__$1 = (((G__49269 instanceof cljs.core.Keyword))?G__49269.fqn:null);
switch (G__49269__$1) {
case "dispatch":
return re_frame.core.dispatch(event);

break;
case "patch-datasets":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","patch-datasets","bb-web-ds-tools.views.datasets/patch-datasets",-67060040),patch], null));

break;
default:
return console.warn("Unknown worker msg:",msg);

}
});
/**
 * Subscribes to datasets changes and sends them to the worker.
 */
bb_web_ds_tools.runtime.sci.sync_datasets_BANG_ = (function bb_web_ds_tools$runtime$sci$sync_datasets_BANG_(){
var datasets_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null));
cljs.core.add_watch(datasets_sub,new cljs.core.Keyword(null,"sci-worker-sync","sci-worker-sync",1496434447),(function (_,___$1,___$2,new_val){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker))){
return bb_web_ds_tools.utils.worker.post_message(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-datasets",new cljs.core.Keyword(null,"datasets","datasets",1896364419),new_val], null));
} else {
return null;
}
}));

if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker))){
return bb_web_ds_tools.utils.worker.post_message(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"update-datasets",new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.deref(datasets_sub)], null));
} else {
return null;
}
});
/**
 * Initializes the SCI worker if it hasn't been initialized yet.
 * 
 *   Args:
 *  on-message (fn, optional): Custom message handler. Defaults to `default-on-message`.
 * 
 *   Returns:
 *  nil: Sets the global sci-worker atom.
 */
bb_web_ds_tools.runtime.sci.init_BANG_ = (function bb_web_ds_tools$runtime$sci$init_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49302 = arguments.length;
var i__5750__auto___49303 = (0);
while(true){
if((i__5750__auto___49303 < len__5749__auto___49302)){
args__5755__auto__.push((arguments[i__5750__auto___49303]));

var G__49304 = (i__5750__auto___49303 + (1));
i__5750__auto___49303 = G__49304;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.runtime.sci.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.runtime.sci.init_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__49274){
var vec__49275 = p__49274;
var on_message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(0),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker))){
return null;
} else {
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.sci.sci_worker,bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("js/compiled/sci-worker.js",(function (){var or__5025__auto__ = on_message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return bb_web_ds_tools.runtime.sci.default_on_message;
}
})()));

return bb_web_ds_tools.runtime.sci.sync_datasets_BANG_();
}
}));

(bb_web_ds_tools.runtime.sci.init_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.runtime.sci.init_BANG_.cljs$lang$applyTo = (function (seq49270){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49270));
}));

/**
 * Evaluates Clojure code in the SCI worker.
 * 
 *   Args:
 *  code (string): The Clojure source code to evaluate.
 * 
 *   Returns:
 *  nil: Posts a message to the worker.
 */
bb_web_ds_tools.runtime.sci.eval_in_worker = (function bb_web_ds_tools$runtime$sci$eval_in_worker(code){
bb_web_ds_tools.runtime.sci.init_BANG_();

return bb_web_ds_tools.utils.worker.post_message(cljs.core.deref(bb_web_ds_tools.runtime.sci.sci_worker),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"eval",new cljs.core.Keyword(null,"code","code",1586293142),code], null));
});
bb_web_ds_tools.runtime.sci.sci_ctx = sci.core.init(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"println","println",-733595439,null),(function() { 
var G__49305__delegate = function (args){
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stdout","stdout",-531490018),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",args))], null));
};
var G__49305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49314__i = 0, G__49314__a = new Array(arguments.length -  0);
while (G__49314__i < G__49314__a.length) {G__49314__a[G__49314__i] = arguments[G__49314__i + 0]; ++G__49314__i;}
  args = new cljs.core.IndexedSeq(G__49314__a,0,null);
} 
return G__49305__delegate.call(this,args);};
G__49305.cljs$lang$maxFixedArity = 0;
G__49305.cljs$lang$applyTo = (function (arglist__49316){
var args = cljs.core.seq(arglist__49316);
return G__49305__delegate(args);
});
G__49305.cljs$core$IFn$_invoke$arity$variadic = G__49305__delegate;
return G__49305;
})()
], null),new cljs.core.Symbol(null,"re-frame.core","re-frame.core",-1549073474,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),re_frame.core.dispatch,new cljs.core.Symbol(null,"subscribe","subscribe",2056785283,null),(function (_){
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"stderr","stderr",-1571650309),new cljs.core.Keyword(null,"text","text",-1790561697),"rf/subscribe is not supported in SCI main thread yet."], null));

return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
})], null)], null)], null));
/**
 * Evaluates Clojure code in the main thread using SCI.
 * 
 *   Args:
 *  code (string): The Clojure source code to evaluate.
 * 
 *   Returns:
 *  vector: A vector of results or error maps from evaluating the forms.
 */
bb_web_ds_tools.runtime.sci.eval_in_main = (function bb_web_ds_tools$runtime$sci$eval_in_main(code){
var rdr = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(code);
try{var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var form = (function (){try{return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3(rdr,false,new cljs.core.Keyword(null,"eof","eof",-489063237));
}catch (e49297){var e = e49297;
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

var G__49317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
acc = G__49317;
continue;
} else {
var res = (function (){try{return sci.core.eval_form(bb_web_ds_tools.runtime.sci.sci_ctx,form);
}catch (e49298){var e = e49298;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),["Eval Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}})();
portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(res)], null));

var G__49335 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,res);
acc = G__49335;
continue;
}
}
break;
}
}catch (e49294){var e = e49294;
return portal.web.submit(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)], null));
}});

//# sourceMappingURL=bb_web_ds_tools.runtime.sci.js.map
