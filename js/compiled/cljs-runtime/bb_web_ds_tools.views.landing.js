goog.provide('bb_web_ds_tools.views.landing');
bb_web_ds_tools.views.landing.nav_card = (function bb_web_ds_tools$views$landing$nav_card(p__37634){
var map__37635 = p__37634;
var map__37635__$1 = cljs.core.__destructure_map(map__37635);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"route","route",329891309));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37635__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col items-center justify-center p-6 text-center ","cursor-pointer transition-transform transform hover:scale-105 ",bb_web_ds_tools.theme.bg_item_hover].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),route,null,null], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl mb-2"], null),icon], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-semibold"], null),label], null)], null);
});
bb_web_ds_tools.views.landing.landing_page = (function bb_web_ds_tools$views$landing$landing_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-3xl font-bold mb-6 ",bb_web_ds_tools.theme.text_accent].join('')], null),"Welcome to the Data Science Workbench"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$landing$landing_page_$_iter__37636(s__37637){
return (new cljs.core.LazySeq(null,(function (){
var s__37637__$1 = s__37637;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37637__$1);
if(temp__5825__auto__){
var s__37637__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37637__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37637__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37639 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37638 = (0);
while(true){
if((i__37638 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__37638);
cljs.core.chunk_append(b__37639,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.nav_card,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__37641 = (i__37638 + (1));
i__37638 = G__37641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37639),bb_web_ds_tools$views$landing$landing_page_$_iter__37636(cljs.core.chunk_rest(s__37637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37639),null);
}
} else {
var item = cljs.core.first(s__37637__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.nav_card,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(item)], null)),bb_web_ds_tools$views$landing$landing_page_$_iter__37636(cljs.core.rest(s__37637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.components.common.nav_items);
})()], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.js.map
