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

var _STAR_always_update_STAR__orig_val__53027 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__53028 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__53028);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__53030 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__53031 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__53031);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__53030);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__53027);
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
var G__53037 = arguments.length;
switch (G__53037) {
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

var vec__53038 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53038,(1),null);
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

var seq__53041_53058 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__53042_53059 = null;
var count__53043_53060 = (0);
var i__53044_53061 = (0);
while(true){
if((i__53044_53061 < count__53043_53060)){
var vec__53051_53062 = chunk__53042_53059.cljs$core$IIndexed$_nth$arity$2(null,i__53044_53061);
var container_53063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53051_53062,(0),null);
var comp_53064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53051_53062,(1),null);
reagent.dom.re_render_component(comp_53064,container_53063);


var G__53065 = seq__53041_53058;
var G__53066 = chunk__53042_53059;
var G__53067 = count__53043_53060;
var G__53068 = (i__53044_53061 + (1));
seq__53041_53058 = G__53065;
chunk__53042_53059 = G__53066;
count__53043_53060 = G__53067;
i__53044_53061 = G__53068;
continue;
} else {
var temp__5825__auto___53069 = cljs.core.seq(seq__53041_53058);
if(temp__5825__auto___53069){
var seq__53041_53070__$1 = temp__5825__auto___53069;
if(cljs.core.chunked_seq_QMARK_(seq__53041_53070__$1)){
var c__5548__auto___53071 = cljs.core.chunk_first(seq__53041_53070__$1);
var G__53072 = cljs.core.chunk_rest(seq__53041_53070__$1);
var G__53073 = c__5548__auto___53071;
var G__53074 = cljs.core.count(c__5548__auto___53071);
var G__53075 = (0);
seq__53041_53058 = G__53072;
chunk__53042_53059 = G__53073;
count__53043_53060 = G__53074;
i__53044_53061 = G__53075;
continue;
} else {
var vec__53054_53076 = cljs.core.first(seq__53041_53070__$1);
var container_53077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53054_53076,(0),null);
var comp_53078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53054_53076,(1),null);
reagent.dom.re_render_component(comp_53078,container_53077);


var G__53079 = cljs.core.next(seq__53041_53070__$1);
var G__53080 = null;
var G__53081 = (0);
var G__53082 = (0);
seq__53041_53058 = G__53079;
chunk__53042_53059 = G__53080;
count__53043_53060 = G__53081;
i__53044_53061 = G__53082;
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
