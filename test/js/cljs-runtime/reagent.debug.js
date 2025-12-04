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
var G__22698__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22699__i = 0, G__22699__a = new Array(arguments.length -  0);
while (G__22699__i < G__22699__a.length) {G__22699__a[G__22699__i] = arguments[G__22699__i + 0]; ++G__22699__i;}
  args = new cljs.core.IndexedSeq(G__22699__a,0,null);
} 
return G__22698__delegate.call(this,args);};
G__22698.cljs$lang$maxFixedArity = 0;
G__22698.cljs$lang$applyTo = (function (arglist__22700){
var args = cljs.core.seq(arglist__22700);
return G__22698__delegate(args);
});
G__22698.cljs$core$IFn$_invoke$arity$variadic = G__22698__delegate;
return G__22698;
})()
);

(o.error = (function() { 
var G__22702__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22703__i = 0, G__22703__a = new Array(arguments.length -  0);
while (G__22703__i < G__22703__a.length) {G__22703__a[G__22703__i] = arguments[G__22703__i + 0]; ++G__22703__i;}
  args = new cljs.core.IndexedSeq(G__22703__a,0,null);
} 
return G__22702__delegate.call(this,args);};
G__22702.cljs$lang$maxFixedArity = 0;
G__22702.cljs$lang$applyTo = (function (arglist__22704){
var args = cljs.core.seq(arglist__22704);
return G__22702__delegate(args);
});
G__22702.cljs$core$IFn$_invoke$arity$variadic = G__22702__delegate;
return G__22702;
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
