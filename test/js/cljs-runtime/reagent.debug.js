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
var G__22718__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22718 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22722__i = 0, G__22722__a = new Array(arguments.length -  0);
while (G__22722__i < G__22722__a.length) {G__22722__a[G__22722__i] = arguments[G__22722__i + 0]; ++G__22722__i;}
  args = new cljs.core.IndexedSeq(G__22722__a,0,null);
} 
return G__22718__delegate.call(this,args);};
G__22718.cljs$lang$maxFixedArity = 0;
G__22718.cljs$lang$applyTo = (function (arglist__22723){
var args = cljs.core.seq(arglist__22723);
return G__22718__delegate(args);
});
G__22718.cljs$core$IFn$_invoke$arity$variadic = G__22718__delegate;
return G__22718;
})()
);

(o.error = (function() { 
var G__22724__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22725__i = 0, G__22725__a = new Array(arguments.length -  0);
while (G__22725__i < G__22725__a.length) {G__22725__a[G__22725__i] = arguments[G__22725__i + 0]; ++G__22725__i;}
  args = new cljs.core.IndexedSeq(G__22725__a,0,null);
} 
return G__22724__delegate.call(this,args);};
G__22724.cljs$lang$maxFixedArity = 0;
G__22724.cljs$lang$applyTo = (function (arglist__22726){
var args = cljs.core.seq(arglist__22726);
return G__22724__delegate(args);
});
G__22724.cljs$core$IFn$_invoke$arity$variadic = G__22724__delegate;
return G__22724;
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
