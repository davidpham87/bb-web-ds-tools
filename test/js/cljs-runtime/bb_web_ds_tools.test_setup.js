goog.provide('bb_web_ds_tools.test_setup');
bb_web_ds_tools.test_setup.suppress_re_frame_warnings = (function bb_web_ds_tools$test_setup$suppress_re_frame_warnings(f){
var orig_warn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frame.loggers.get_loggers(),new cljs.core.Keyword(null,"warn","warn",-436710552));
re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),(function() { 
var G__55861__delegate = function (args){
var msg = cljs.core.first(args);
if(((typeof msg === 'string') && (clojure.string.includes_QMARK_(msg,"Subscribe was called outside of a reactive context")))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(orig_warn,args);
}
};
var G__55861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55862__i = 0, G__55862__a = new Array(arguments.length -  0);
while (G__55862__i < G__55862__a.length) {G__55862__a[G__55862__i] = arguments[G__55862__i + 0]; ++G__55862__i;}
  args = new cljs.core.IndexedSeq(G__55862__a,0,null);
} 
return G__55861__delegate.call(this,args);};
G__55861.cljs$lang$maxFixedArity = 0;
G__55861.cljs$lang$applyTo = (function (arglist__55863){
var args = cljs.core.seq(arglist__55863);
return G__55861__delegate(args);
});
G__55861.cljs$core$IFn$_invoke$arity$variadic = G__55861__delegate;
return G__55861;
})()
], null));

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),orig_warn], null));
}});

//# sourceMappingURL=bb_web_ds_tools.test_setup.js.map
