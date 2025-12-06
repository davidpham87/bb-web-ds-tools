goog.provide('bb_web_ds_tools.views.landing');
/**
 * Renders the landing page with animated feature cards.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.landing.landing_page = (function bb_web_ds_tools$views$landing$landing_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-full p-8 flex flex-col items-center justify-center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center mb-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl font-extrabold mb-4 ",bb_web_ds_tools.theme.text_accent," tracking-tight"].join('')], null),"The \"Swiss Army Knife\" of Data Science"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl ",bb_web_ds_tools.theme.text_secondary," max-w-3xl mx-auto leading-relaxed"].join('')], null),"Because sometimes you just want to run Python, R, Clojure, and a Large Language Model in your browser simultaneously while editing SQL and validating JSON schemas, and you don't want to open a new tab."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$landing$landing_page_$_iter__44370(s__44371){
return (new cljs.core.LazySeq(null,(function (){
var s__44371__$1 = s__44371;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__44371__$1);
if(temp__5825__auto__){
var s__44371__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44371__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__44371__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__44373 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__44372 = (0);
while(true){
if((i__44372 < size__5502__auto__)){
var card = cljs.core._nth(c__5501__auto__,i__44372);
cljs.core.chunk_append(b__44373,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__44374 = (i__44372 + (1));
i__44372 = G__44374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44373),bb_web_ds_tools$views$landing$landing_page_$_iter__44370(cljs.core.chunk_rest(s__44371__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44373),null);
}
} else {
var card = cljs.core.first(s__44371__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)),bb_web_ds_tools$views$landing$landing_page_$_iter__44370(cljs.core.rest(s__44371__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.components.landing.feature_cards);
})()], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.js.map
