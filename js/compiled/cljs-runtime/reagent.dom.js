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

var _STAR_always_update_STAR__orig_val__49917 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49918 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49918);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__49920 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__49921 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__49921);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49920);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__49917);
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
var G__49942 = arguments.length;
switch (G__49942) {
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

var vec__49960 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49960,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49960,(1),null);
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

var seq__49967_50026 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__49968_50027 = null;
var count__49969_50028 = (0);
var i__49970_50029 = (0);
while(true){
if((i__49970_50029 < count__49969_50028)){
var vec__49988_50031 = chunk__49968_50027.cljs$core$IIndexed$_nth$arity$2(null,i__49970_50029);
var container_50032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49988_50031,(0),null);
var comp_50033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49988_50031,(1),null);
reagent.dom.re_render_component(comp_50033,container_50032);


var G__50035 = seq__49967_50026;
var G__50036 = chunk__49968_50027;
var G__50037 = count__49969_50028;
var G__50038 = (i__49970_50029 + (1));
seq__49967_50026 = G__50035;
chunk__49968_50027 = G__50036;
count__49969_50028 = G__50037;
i__49970_50029 = G__50038;
continue;
} else {
var temp__5825__auto___50040 = cljs.core.seq(seq__49967_50026);
if(temp__5825__auto___50040){
var seq__49967_50041__$1 = temp__5825__auto___50040;
if(cljs.core.chunked_seq_QMARK_(seq__49967_50041__$1)){
var c__5548__auto___50042 = cljs.core.chunk_first(seq__49967_50041__$1);
var G__50043 = cljs.core.chunk_rest(seq__49967_50041__$1);
var G__50044 = c__5548__auto___50042;
var G__50045 = cljs.core.count(c__5548__auto___50042);
var G__50046 = (0);
seq__49967_50026 = G__50043;
chunk__49968_50027 = G__50044;
count__49969_50028 = G__50045;
i__49970_50029 = G__50046;
continue;
} else {
var vec__49993_50047 = cljs.core.first(seq__49967_50041__$1);
var container_50048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49993_50047,(0),null);
var comp_50049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49993_50047,(1),null);
reagent.dom.re_render_component(comp_50049,container_50048);


var G__50051 = cljs.core.next(seq__49967_50041__$1);
var G__50052 = null;
var G__50053 = (0);
var G__50054 = (0);
seq__49967_50026 = G__50051;
chunk__49968_50027 = G__50052;
count__49969_50028 = G__50053;
i__49970_50029 = G__50054;
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
