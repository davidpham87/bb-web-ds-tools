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
var G__22663__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22664__i = 0, G__22664__a = new Array(arguments.length -  0);
while (G__22664__i < G__22664__a.length) {G__22664__a[G__22664__i] = arguments[G__22664__i + 0]; ++G__22664__i;}
  args = new cljs.core.IndexedSeq(G__22664__a,0,null);
} 
return G__22663__delegate.call(this,args);};
G__22663.cljs$lang$maxFixedArity = 0;
G__22663.cljs$lang$applyTo = (function (arglist__22665){
var args = cljs.core.seq(arglist__22665);
return G__22663__delegate(args);
});
G__22663.cljs$core$IFn$_invoke$arity$variadic = G__22663__delegate;
return G__22663;
})()
);

(o.error = (function() { 
var G__22666__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22668__i = 0, G__22668__a = new Array(arguments.length -  0);
while (G__22668__i < G__22668__a.length) {G__22668__a[G__22668__i] = arguments[G__22668__i + 0]; ++G__22668__i;}
  args = new cljs.core.IndexedSeq(G__22668__a,0,null);
} 
return G__22666__delegate.call(this,args);};
G__22666.cljs$lang$maxFixedArity = 0;
G__22666.cljs$lang$applyTo = (function (arglist__22669){
var args = cljs.core.seq(arglist__22669);
return G__22666__delegate(args);
});
G__22666.cljs$core$IFn$_invoke$arity$variadic = G__22666__delegate;
return G__22666;
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
