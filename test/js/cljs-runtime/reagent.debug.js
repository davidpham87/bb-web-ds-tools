goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22668__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22669__i = 0, G__22669__a = new Array(arguments.length -  0);
while (G__22669__i < G__22669__a.length) {G__22669__a[G__22669__i] = arguments[G__22669__i + 0]; ++G__22669__i;}
  args = new cljs.core.IndexedSeq(G__22669__a,0,null);
} 
return G__22668__delegate.call(this,args);};
G__22668.cljs$lang$maxFixedArity = 0;
G__22668.cljs$lang$applyTo = (function (arglist__22670){
var args = cljs.core.seq(arglist__22670);
return G__22668__delegate(args);
});
G__22668.cljs$core$IFn$_invoke$arity$variadic = G__22668__delegate;
return G__22668;
})()
);

(o.error = (function() { 
var G__22672__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22673__i = 0, G__22673__a = new Array(arguments.length -  0);
while (G__22673__i < G__22673__a.length) {G__22673__a[G__22673__i] = arguments[G__22673__i + 0]; ++G__22673__i;}
  args = new cljs.core.IndexedSeq(G__22673__a,0,null);
} 
return G__22672__delegate.call(this,args);};
G__22672.cljs$lang$maxFixedArity = 0;
G__22672.cljs$lang$applyTo = (function (arglist__22674){
var args = cljs.core.seq(arglist__22674);
return G__22672__delegate(args);
});
G__22672.cljs$core$IFn$_invoke$arity$variadic = G__22672__delegate;
return G__22672;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
