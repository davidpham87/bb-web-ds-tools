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
var G__22639__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22640__i = 0, G__22640__a = new Array(arguments.length -  0);
while (G__22640__i < G__22640__a.length) {G__22640__a[G__22640__i] = arguments[G__22640__i + 0]; ++G__22640__i;}
  args = new cljs.core.IndexedSeq(G__22640__a,0,null);
} 
return G__22639__delegate.call(this,args);};
G__22639.cljs$lang$maxFixedArity = 0;
G__22639.cljs$lang$applyTo = (function (arglist__22641){
var args = cljs.core.seq(arglist__22641);
return G__22639__delegate(args);
});
G__22639.cljs$core$IFn$_invoke$arity$variadic = G__22639__delegate;
return G__22639;
})()
);

(o.error = (function() { 
var G__22642__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22645__i = 0, G__22645__a = new Array(arguments.length -  0);
while (G__22645__i < G__22645__a.length) {G__22645__a[G__22645__i] = arguments[G__22645__i + 0]; ++G__22645__i;}
  args = new cljs.core.IndexedSeq(G__22645__a,0,null);
} 
return G__22642__delegate.call(this,args);};
G__22642.cljs$lang$maxFixedArity = 0;
G__22642.cljs$lang$applyTo = (function (arglist__22646){
var args = cljs.core.seq(arglist__22646);
return G__22642__delegate(args);
});
G__22642.cljs$core$IFn$_invoke$arity$variadic = G__22642__delegate;
return G__22642;
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
