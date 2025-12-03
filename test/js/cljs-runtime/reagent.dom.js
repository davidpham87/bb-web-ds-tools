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

var _STAR_always_update_STAR__orig_val__52610 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52611 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52611);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__52612 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52613 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52613);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52612);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52610);
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
var G__52624 = arguments.length;
switch (G__52624) {
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

var vec__52625 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52625,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52625,(1),null);
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

var seq__52628_52680 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__52629_52681 = null;
var count__52630_52682 = (0);
var i__52631_52683 = (0);
while(true){
if((i__52631_52683 < count__52630_52682)){
var vec__52649_52684 = chunk__52629_52681.cljs$core$IIndexed$_nth$arity$2(null,i__52631_52683);
var container_52685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52649_52684,(0),null);
var comp_52686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52649_52684,(1),null);
reagent.dom.re_render_component(comp_52686,container_52685);


var G__52687 = seq__52628_52680;
var G__52688 = chunk__52629_52681;
var G__52689 = count__52630_52682;
var G__52690 = (i__52631_52683 + (1));
seq__52628_52680 = G__52687;
chunk__52629_52681 = G__52688;
count__52630_52682 = G__52689;
i__52631_52683 = G__52690;
continue;
} else {
var temp__5825__auto___52691 = cljs.core.seq(seq__52628_52680);
if(temp__5825__auto___52691){
var seq__52628_52692__$1 = temp__5825__auto___52691;
if(cljs.core.chunked_seq_QMARK_(seq__52628_52692__$1)){
var c__5548__auto___52693 = cljs.core.chunk_first(seq__52628_52692__$1);
var G__52694 = cljs.core.chunk_rest(seq__52628_52692__$1);
var G__52695 = c__5548__auto___52693;
var G__52696 = cljs.core.count(c__5548__auto___52693);
var G__52697 = (0);
seq__52628_52680 = G__52694;
chunk__52629_52681 = G__52695;
count__52630_52682 = G__52696;
i__52631_52683 = G__52697;
continue;
} else {
var vec__52652_52698 = cljs.core.first(seq__52628_52692__$1);
var container_52699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52652_52698,(0),null);
var comp_52700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52652_52698,(1),null);
reagent.dom.re_render_component(comp_52700,container_52699);


var G__52701 = cljs.core.next(seq__52628_52692__$1);
var G__52702 = null;
var G__52703 = (0);
var G__52704 = (0);
seq__52628_52680 = G__52701;
chunk__52629_52681 = G__52702;
count__52630_52682 = G__52703;
i__52631_52683 = G__52704;
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
