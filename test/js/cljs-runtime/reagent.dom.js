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

var _STAR_always_update_STAR__orig_val__59756 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__59757 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__59757);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__59758 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__59759 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__59759);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__59758);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__59756);
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
var G__59761 = arguments.length;
switch (G__59761) {
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

var vec__59763 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59763,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59763,(1),null);
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

var seq__59768_59786 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__59769_59787 = null;
var count__59770_59788 = (0);
var i__59771_59789 = (0);
while(true){
if((i__59771_59789 < count__59770_59788)){
var vec__59779_59790 = chunk__59769_59787.cljs$core$IIndexed$_nth$arity$2(null,i__59771_59789);
var container_59791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59779_59790,(0),null);
var comp_59792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59779_59790,(1),null);
reagent.dom.re_render_component(comp_59792,container_59791);


var G__59793 = seq__59768_59786;
var G__59794 = chunk__59769_59787;
var G__59795 = count__59770_59788;
var G__59796 = (i__59771_59789 + (1));
seq__59768_59786 = G__59793;
chunk__59769_59787 = G__59794;
count__59770_59788 = G__59795;
i__59771_59789 = G__59796;
continue;
} else {
var temp__5825__auto___59797 = cljs.core.seq(seq__59768_59786);
if(temp__5825__auto___59797){
var seq__59768_59798__$1 = temp__5825__auto___59797;
if(cljs.core.chunked_seq_QMARK_(seq__59768_59798__$1)){
var c__5548__auto___59799 = cljs.core.chunk_first(seq__59768_59798__$1);
var G__59800 = cljs.core.chunk_rest(seq__59768_59798__$1);
var G__59801 = c__5548__auto___59799;
var G__59802 = cljs.core.count(c__5548__auto___59799);
var G__59803 = (0);
seq__59768_59786 = G__59800;
chunk__59769_59787 = G__59801;
count__59770_59788 = G__59802;
i__59771_59789 = G__59803;
continue;
} else {
var vec__59782_59804 = cljs.core.first(seq__59768_59798__$1);
var container_59805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59782_59804,(0),null);
var comp_59806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59782_59804,(1),null);
reagent.dom.re_render_component(comp_59806,container_59805);


var G__59807 = cljs.core.next(seq__59768_59798__$1);
var G__59808 = null;
var G__59809 = (0);
var G__59810 = (0);
seq__59768_59786 = G__59807;
chunk__59769_59787 = G__59808;
count__59770_59788 = G__59809;
i__59771_59789 = G__59810;
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
