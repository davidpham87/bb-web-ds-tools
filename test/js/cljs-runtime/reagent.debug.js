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
var G__22679__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22680__i = 0, G__22680__a = new Array(arguments.length -  0);
while (G__22680__i < G__22680__a.length) {G__22680__a[G__22680__i] = arguments[G__22680__i + 0]; ++G__22680__i;}
  args = new cljs.core.IndexedSeq(G__22680__a,0,null);
} 
return G__22679__delegate.call(this,args);};
G__22679.cljs$lang$maxFixedArity = 0;
G__22679.cljs$lang$applyTo = (function (arglist__22681){
var args = cljs.core.seq(arglist__22681);
return G__22679__delegate(args);
});
G__22679.cljs$core$IFn$_invoke$arity$variadic = G__22679__delegate;
return G__22679;
})()
);

(o.error = (function() { 
var G__22682__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22683__i = 0, G__22683__a = new Array(arguments.length -  0);
while (G__22683__i < G__22683__a.length) {G__22683__a[G__22683__i] = arguments[G__22683__i + 0]; ++G__22683__i;}
  args = new cljs.core.IndexedSeq(G__22683__a,0,null);
} 
return G__22682__delegate.call(this,args);};
G__22682.cljs$lang$maxFixedArity = 0;
G__22682.cljs$lang$applyTo = (function (arglist__22684){
var args = cljs.core.seq(arglist__22684);
return G__22682__delegate(args);
});
G__22682.cljs$core$IFn$_invoke$arity$variadic = G__22682__delegate;
return G__22682;
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
