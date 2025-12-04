goog.provide('bb_web_ds_tools.test_setup');
bb_web_ds_tools.test_setup.suppress_re_frame_warnings = (function bb_web_ds_tools$test_setup$suppress_re_frame_warnings(f){
var orig_warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frame.loggers.get_loggers(),new cljs.core.Keyword(null,"warn","warn",-436710552));
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),(function() { 
var G__55884__delegate = function (args){
var msg = cljs.core.first(args);
if(((typeof msg === 'string') && (clojure.string.includes_QMARK_(msg,"Subscribe was called outside of a reactive context")))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(orig_warn,args);
}
};
var G__55884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55886__i = 0, G__55886__a = new Array(arguments.length -  0);
while (G__55886__i < G__55886__a.length) {G__55886__a[G__55886__i] = arguments[G__55886__i + 0]; ++G__55886__i;}
  args = new cljs.core.IndexedSeq(G__55886__a,0,null);
} 
return G__55884__delegate.call(this,args);};
G__55884.cljs$lang$maxFixedArity = 0;
G__55884.cljs$lang$applyTo = (function (arglist__55887){
var args = cljs.core.seq(arglist__55887);
return G__55884__delegate(args);
});
G__55884.cljs$core$IFn$_invoke$arity$variadic = G__55884__delegate;
return G__55884;
})()
], null));

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),orig_warn], null));
}});

//# sourceMappingURL=bb_web_ds_tools.test_setup.js.map
