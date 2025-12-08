goog.provide('bb_web_ds_tools.components.navigation');
/**
 * Renders a menu button that toggles a dropdown navigation menu.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.navigation.menu_button = (function bb_web_ds_tools$components$navigation$menu_button(){
var with_let28765 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let28765","with-let28765",1143377641));
var temp__5829__auto___28788 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___28788 == null)){
} else {
var c__23452__auto___28789 = temp__5829__auto___28788;
if((with_let28765.generation === c__23452__auto___28789.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let28765.generation = c__23452__auto___28789.ratomGeneration);
}

var init28766 = (with_let28765.length === (0));
var open_QMARK_ = ((((init28766) || (cljs.core.not(with_let28765.hasOwnProperty((0))))))?(with_let28765[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let28765[(0)]));
var close_fn = ((((init28766) || (cljs.core.not(with_let28765.hasOwnProperty((1))))))?(with_let28765[(1)] = (function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
})):(with_let28765[(1)]));
var res28767 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-2 rounded hover:bg-white/10 transition-colors ",bb_web_ds_tools.theme.text_primary].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"title","title",636505583),"Menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-6 h-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"], null)], null)], null)], null),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute left-0 top-full mt-1 w-56 rounded-md shadow-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," z-50 py-1"].join(''),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),close_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"landing-page","landing-page",1687415187)),new cljs.core.Keyword(null,"class","class",-2030961996),["block px-4 py-2 text-sm ",bb_web_ds_tools.theme.text_primary," hover:bg-white/5"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),"Home"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["border-t ",bb_web_ds_tools.theme.border_subtle," my-1"].join('')], null)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$navigation$menu_button_$_iter__28771(s__28772){
return (new cljs.core.LazySeq(null,(function (){
var s__28772__$1 = s__28772;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__28772__$1);
if(temp__5825__auto__){
var s__28772__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28772__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__28772__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__28774 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__28773 = (0);
while(true){
if((i__28773 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__28773);
cljs.core.chunk_append(b__28774,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"class","class",-2030961996),["block px-4 py-2 text-sm ",bb_web_ds_tools.theme.text_primary," hover:bg-white/5 flex items-center gap-2"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__28790 = (i__28773 + (1));
i__28773 = G__28790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28774),bb_web_ds_tools$components$navigation$menu_button_$_iter__28771(cljs.core.chunk_rest(s__28772__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28774),null);
}
} else {
var item = cljs.core.first(s__28772__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"class","class",-2030961996),["block px-4 py-2 text-sm ",bb_web_ds_tools.theme.text_primary," hover:bg-white/5 flex items-center gap-2"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)], null)),bb_web_ds_tools$components$navigation$menu_button_$_iter__28771(cljs.core.rest(s__28772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.components.common.nav_items);
})()], null):null)], null);
return res28767;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.components.navigation","set-top-bar-ref","bb-web-ds-tools.components.navigation/set-top-bar-ref",1693658101),(function (db,p__28775){
var vec__28776 = p__28775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28776,(0),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28776,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"navigation","navigation",369417),new cljs.core.Keyword(null,"top-bar-ref","top-bar-ref",-971317764)], null),ref);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.components.navigation","top-bar-ref","bb-web-ds-tools.components.navigation/top-bar-ref",-836321251),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),new cljs.core.Keyword(null,"navigation","navigation",369417),new cljs.core.Keyword(null,"top-bar-ref","top-bar-ref",-971317764)], null));
})], 0));
/**
 * Renders children into the top bar via a portal.
 * 
 *   Args:
 *  children (rest): Child elements to render.
 * 
 *   Returns:
 *  ReactPortal: The portal element.
 */
bb_web_ds_tools.components.navigation.portal_to_top_bar = (function bb_web_ds_tools$components$navigation$portal_to_top_bar(var_args){
var args__5755__auto__ = [];
var len__5749__auto___28793 = arguments.length;
var i__5750__auto___28794 = (0);
while(true){
if((i__5750__auto___28794 < len__5749__auto___28793)){
args__5755__auto__.push((arguments[i__5750__auto___28794]));

var G__28795 = (i__5750__auto___28794 + (1));
i__5750__auto___28794 = G__28795;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.components.navigation.portal_to_top_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.components.navigation.portal_to_top_bar.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var el = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.components.navigation","top-bar-ref","bb-web-ds-tools.components.navigation/top-bar-ref",-836321251)], null)));
if(cljs.core.truth_(el)){
return shadow.js.shim.module$react_dom.createPortal(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full flex items-center"], null)], null),children)),el);
} else {
return null;
}
}));

(bb_web_ds_tools.components.navigation.portal_to_top_bar.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.components.navigation.portal_to_top_bar.cljs$lang$applyTo = (function (seq28779){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28779));
}));

/**
 * Renders the top navigation bar.
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :active-label (string): The label of the current section.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.navigation.top_bar = (function bb_web_ds_tools$components$navigation$top_bar(p__28782){
var map__28783 = p__28782;
var map__28783__$1 = cljs.core.__destructure_map(map__28783);
var active_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28783__$1,new cljs.core.Keyword(null,"active-label","active-label",1965964916));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center w-full h-12 px-4 border-b ",bb_web_ds_tools.theme.border_main," ",bb_web_ds_tools.theme.bg_toolbar].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.navigation.menu_button], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-4 font-bold text-lg ",bb_web_ds_tools.theme.text_accent].join('')], null),active_label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow h-full flex items-center justify-end",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.components.navigation","set-top-bar-ref","bb-web-ds-tools.components.navigation/set-top-bar-ref",1693658101),el], null));
})], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.components.navigation.js.map
