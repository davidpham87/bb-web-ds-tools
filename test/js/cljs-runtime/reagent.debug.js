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
var G__22647__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22649__i = 0, G__22649__a = new Array(arguments.length -  0);
while (G__22649__i < G__22649__a.length) {G__22649__a[G__22649__i] = arguments[G__22649__i + 0]; ++G__22649__i;}
  args = new cljs.core.IndexedSeq(G__22649__a,0,null);
} 
return G__22647__delegate.call(this,args);};
G__22647.cljs$lang$maxFixedArity = 0;
G__22647.cljs$lang$applyTo = (function (arglist__22650){
var args = cljs.core.seq(arglist__22650);
return G__22647__delegate(args);
});
G__22647.cljs$core$IFn$_invoke$arity$variadic = G__22647__delegate;
return G__22647;
})()
);

(o.error = (function() { 
var G__22651__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22652__i = 0, G__22652__a = new Array(arguments.length -  0);
while (G__22652__i < G__22652__a.length) {G__22652__a[G__22652__i] = arguments[G__22652__i + 0]; ++G__22652__i;}
  args = new cljs.core.IndexedSeq(G__22652__a,0,null);
} 
return G__22651__delegate.call(this,args);};
G__22651.cljs$lang$maxFixedArity = 0;
G__22651.cljs$lang$applyTo = (function (arglist__22653){
var args = cljs.core.seq(arglist__22653);
return G__22651__delegate(args);
});
G__22651.cljs$core$IFn$_invoke$arity$variadic = G__22651__delegate;
return G__22651;
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
