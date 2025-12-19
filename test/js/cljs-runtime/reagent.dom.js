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

var _STAR_always_update_STAR__orig_val__66152 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__66153 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__66153);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__66157 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__66158 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__66158);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__66157);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__66152);
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
var G__66182 = arguments.length;
switch (G__66182) {
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

var vec__66194 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66194,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66194,(1),null);
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

var seq__66197_66222 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__66198_66223 = null;
var count__66199_66224 = (0);
var i__66200_66225 = (0);
while(true){
if((i__66200_66225 < count__66199_66224)){
var vec__66209_66226 = chunk__66198_66223.cljs$core$IIndexed$_nth$arity$2(null,i__66200_66225);
var container_66227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66209_66226,(0),null);
var comp_66228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66209_66226,(1),null);
reagent.dom.re_render_component(comp_66228,container_66227);


var G__66229 = seq__66197_66222;
var G__66230 = chunk__66198_66223;
var G__66231 = count__66199_66224;
var G__66232 = (i__66200_66225 + (1));
seq__66197_66222 = G__66229;
chunk__66198_66223 = G__66230;
count__66199_66224 = G__66231;
i__66200_66225 = G__66232;
continue;
} else {
var temp__5825__auto___66233 = cljs.core.seq(seq__66197_66222);
if(temp__5825__auto___66233){
var seq__66197_66234__$1 = temp__5825__auto___66233;
if(cljs.core.chunked_seq_QMARK_(seq__66197_66234__$1)){
var c__5548__auto___66235 = cljs.core.chunk_first(seq__66197_66234__$1);
var G__66236 = cljs.core.chunk_rest(seq__66197_66234__$1);
var G__66237 = c__5548__auto___66235;
var G__66238 = cljs.core.count(c__5548__auto___66235);
var G__66239 = (0);
seq__66197_66222 = G__66236;
chunk__66198_66223 = G__66237;
count__66199_66224 = G__66238;
i__66200_66225 = G__66239;
continue;
} else {
var vec__66212_66240 = cljs.core.first(seq__66197_66234__$1);
var container_66241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66212_66240,(0),null);
var comp_66242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66212_66240,(1),null);
reagent.dom.re_render_component(comp_66242,container_66241);


var G__66248 = cljs.core.next(seq__66197_66234__$1);
var G__66249 = null;
var G__66250 = (0);
var G__66251 = (0);
seq__66197_66222 = G__66248;
chunk__66198_66223 = G__66249;
count__66199_66224 = G__66250;
i__66200_66225 = G__66251;
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
