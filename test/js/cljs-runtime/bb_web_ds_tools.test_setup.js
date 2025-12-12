goog.provide('bb_web_ds_tools.test_setup');
bb_web_ds_tools.test_setup.saved_warn_logger = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bb_web_ds_tools.test_setup.suppress_re_frame_warnings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
var orig_warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frame.loggers.get_loggers(),new cljs.core.Keyword(null,"warn","warn",-436710552));
cljs.core.reset_BANG_(bb_web_ds_tools.test_setup.saved_warn_logger,orig_warn);

return re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),(function() { 
var G__63315__delegate = function (args){
var msg = cljs.core.first(args);
if(((typeof msg === 'string') && (clojure.string.includes_QMARK_(msg,"Subscribe was called outside of a reactive context")))){
return null;
} else {
if(cljs.core.truth_(orig_warn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(orig_warn,args);
} else {
return console.warn(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args));
}
}
};
var G__63315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63317__i = 0, G__63317__a = new Array(arguments.length -  0);
while (G__63317__i < G__63317__a.length) {G__63317__a[G__63317__i] = arguments[G__63317__i + 0]; ++G__63317__i;}
  args = new cljs.core.IndexedSeq(G__63317__a,0,null);
} 
return G__63315__delegate.call(this,args);};
G__63315.cljs$lang$maxFixedArity = 0;
G__63315.cljs$lang$applyTo = (function (arglist__63318){
var args = cljs.core.seq(arglist__63318);
return G__63315__delegate(args);
});
G__63315.cljs$core$IFn$_invoke$arity$variadic = G__63315__delegate;
return G__63315;
})()
], null));
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
var temp__5825__auto__ = cljs.core.deref(bb_web_ds_tools.test_setup.saved_warn_logger);
if(cljs.core.truth_(temp__5825__auto__)){
var orig = temp__5825__auto__;
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),orig], null));

return cljs.core.reset_BANG_(bb_web_ds_tools.test_setup.saved_warn_logger,null);
} else {
return null;
}
})], null);

//# sourceMappingURL=bb_web_ds_tools.test_setup.js.map
