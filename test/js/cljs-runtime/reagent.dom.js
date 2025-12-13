goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

if((typeof shadow !== 'undefined') && (typeof shadow.js !== 'undefined') && (typeof shadow.js.shim !== 'undefined') && (typeof shadow.js.shim.module$react_dom !== 'undefined') && (typeof shadow.js.shim.module$react_dom.unmountComponentAtNode !== 'undefined')){
} else {
console.warn("react-dom/unmountComponentAtNode function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
if((typeof shadow !== 'undefined') && (typeof shadow.js !== 'undefined') && (typeof shadow.js.shim !== 'undefined') && (typeof shadow.js.shim.module$react_dom !== 'undefined') && (typeof shadow.js.shim.module$react_dom.render !== 'undefined')){
} else {
console.warn("react-dom/render function doesn't exist, you are likely trying to use the old DOM api with React 19. Use reagent.dom.client instead.");
}

var _STAR_always_update_STAR__orig_val__64483 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__64484 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__64484);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__64485 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__64486 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__64486);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__64485);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__64483);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * NOTE: Usable only with React 18 or older. React 19 doesn't provide
 *   react-dom/render function.
 * 
 *   Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__64491 = arguments.length;
switch (G__64491) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__64492 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64492,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64492,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__64495_64522 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__64496_64523 = null;
var count__64497_64524 = (0);
var i__64498_64525 = (0);
while(true){
if((i__64498_64525 < count__64497_64524)){
var vec__64508_64526 = chunk__64496_64523.cljs$core$IIndexed$_nth$arity$2(null,i__64498_64525);
var container_64527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64508_64526,(0),null);
var comp_64528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64508_64526,(1),null);
reagent.dom.re_render_component(comp_64528,container_64527);


var G__64529 = seq__64495_64522;
var G__64530 = chunk__64496_64523;
var G__64531 = count__64497_64524;
var G__64532 = (i__64498_64525 + (1));
seq__64495_64522 = G__64529;
chunk__64496_64523 = G__64530;
count__64497_64524 = G__64531;
i__64498_64525 = G__64532;
continue;
} else {
var temp__5825__auto___64533 = cljs.core.seq(seq__64495_64522);
if(temp__5825__auto___64533){
var seq__64495_64534__$1 = temp__5825__auto___64533;
if(cljs.core.chunked_seq_QMARK_(seq__64495_64534__$1)){
var c__5548__auto___64535 = cljs.core.chunk_first(seq__64495_64534__$1);
var G__64536 = cljs.core.chunk_rest(seq__64495_64534__$1);
var G__64537 = c__5548__auto___64535;
var G__64538 = cljs.core.count(c__5548__auto___64535);
var G__64539 = (0);
seq__64495_64522 = G__64536;
chunk__64496_64523 = G__64537;
count__64497_64524 = G__64538;
i__64498_64525 = G__64539;
continue;
} else {
var vec__64513_64540 = cljs.core.first(seq__64495_64534__$1);
var container_64541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513_64540,(0),null);
var comp_64542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64513_64540,(1),null);
reagent.dom.re_render_component(comp_64542,container_64541);


var G__64543 = cljs.core.next(seq__64495_64534__$1);
var G__64544 = null;
var G__64545 = (0);
var G__64546 = (0);
seq__64495_64522 = G__64543;
chunk__64496_64523 = G__64544;
count__64497_64524 = G__64545;
i__64498_64525 = G__64546;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
