goog.provide('bb_web_ds_tools.views.vega_lite.core');
/**
 * Loads a Vega-Lite example into the state.
 */
bb_web_ds_tools.views.vega_lite.core.load_example = (function bb_web_ds_tools$views$vega_lite$core$load_example(fmt,structure){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-format","bb-web-ds-tools.views.vega-lite.events/set-format",-370233380),fmt], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-structure","bb-web-ds-tools.views.vega-lite.events/set-structure",234846197),structure], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-data-input","bb-web-ds-tools.views.vega-lite.events/set-data-input",1499556021),bb_web_ds_tools.utils.dataset_processing.example_data.cljs$core$IFn$_invoke$arity$2(fmt,structure)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","parse-data","bb-web-ds-tools.views.vega-lite.events/parse-data",1051780767)], null));
});
/**
 * Renders the Vega-Lite visualization into the DOM.
 */
bb_web_ds_tools.views.vega_lite.core.render_vega = (function bb_web_ds_tools$views$vega_lite$core$render_vega(component,spec_obj,data){
if(cljs.core.truth_((function (){var and__5023__auto__ = spec_obj;
if(cljs.core.truth_(and__5023__auto__)){
return data;
} else {
return and__5023__auto__;
}
})())){
try{var spec_with_data = Object.assign(({}),spec_obj);
(spec_with_data.data = ({"values": cljs.core.clj__GT_js(data)}));

return vegaEmbed(shadow.js.shim.module$react_dom.findDOMNode(component),spec_with_data);
}catch (e60949){if((e60949 instanceof Error)){
var e = e60949;
return console.warn("Vega render error",e);
} else {
throw e60949;

}
}} else {
return null;
}
});
/**
 * Wrapper component for Vega-Lite visualization.
 */
bb_web_ds_tools.views.vega_lite.core.vega_viz = (function bb_web_ds_tools$views$vega_lite$core$vega_viz(p__60950){
var map__60951 = p__60950;
var map__60951__$1 = cljs.core.__destructure_map(map__60951);
var spec_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60951__$1,new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60951__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega-viz",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return bb_web_ds_tools.views.vega_lite.core.render_vega(this$,new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return bb_web_ds_tools.views.vega_lite.core.render_vega(this$,new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reagent.core.props(this$)));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
})], null));
});
bb_web_ds_tools.views.vega_lite.core.save_config_modal = (function bb_web_ds_tools$views$vega_lite$core$save_config_modal(){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var name_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative inline-block"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(open_QMARK_,true);
})], null),"Save"], null),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute top-8 right-0 z-50 p-2 rounded shadow-lg border ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.border_default," flex items-center space-x-2"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-32 text-xs",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Name",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(name_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60952_SHARP_){
return cljs.core.reset_BANG_(name_input,p1__60952_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-green-400 !px-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","save-config","bb-web-ds-tools.views.vega-lite.events/save-config",549818302),cljs.core.deref(name_input)], null));

return cljs.core.reset_BANG_(open_QMARK_,false);
})], null),"\u2713"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-400 !px-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(open_QMARK_,false);
})], null),"\u2717"], null)], null):null)], null);
});
});
bb_web_ds_tools.views.vega_lite.core.data_tab_content = (function bb_web_ds_tools$views$vega_lite$core$data_tab_content(){
var data_input = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","data-input","bb-web-ds-tools.views.vega-lite.subs/data-input",-378223886)], null)));
var format = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","format","bb-web-ds-tools.views.vega-lite.subs/format",-1741530576)], null)));
var datasets = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.datasets","items","bb-web-ds-tools.views.datasets/items",-2099094664)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 gap-2 flex-wrap border-b border-[#3f3f3f] bg-[#1c2128] items-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.core.load_example(new cljs.core.Keyword(null,"csv","csv",-1164440893),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.core.load_example(new cljs.core.Keyword(null,"tsv","tsv",-1254214356),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"TSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.core.load_example(new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"MD"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.core.load_example(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
})], null),"JSON Maps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.core.load_example(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"row-arrays","row-arrays",1352579974));
})], null),"JSON Arrays"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.core.load_example(new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"row-maps","row-maps",-2115135284));
})], null),"EDN Maps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return bb_web_ds_tools.views.vega_lite.core.load_example(new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"columnar","columnar",-1122999701));
})], null),"EDN Col"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative group ml-auto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"border-dashed border-white/50"], null),"Import Dataset \u25BC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute hidden group-hover:block right-0 ",bb_web_ds_tools.theme.bg_input," border ",bb_web_ds_tools.theme.border_default," p-1 rounded shadow-lg z-10 w-48 max-h-60 overflow-y-auto"].join('')], null),((cljs.core.seq(datasets))?(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$vega_lite$core$data_tab_content_$_iter__60953(s__60954){
return (new cljs.core.LazySeq(null,(function (){
var s__60954__$1 = s__60954;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60954__$1);
if(temp__5825__auto__){
var s__60954__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60954__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__60954__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__60956 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__60955 = (0);
while(true){
if((i__60955 < size__5502__auto__)){
var vec__60957 = cljs.core._nth(c__5501__auto__,i__60955);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60957,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60957,(1),null);
cljs.core.chunk_append(b__60956,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer px-2 py-1 text-xs ",bb_web_ds_tools.theme.bg_item_hover," truncate"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60955,vec__60957,id,ds,c__5501__auto__,size__5502__auto__,b__60956,s__60954__$2,temp__5825__auto__,data_input,format,datasets){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","import-dataset","bb-web-ds-tools.views.vega-lite.events/import-dataset",-1293640811),id], null));
});})(i__60955,vec__60957,id,ds,c__5501__auto__,size__5502__auto__,b__60956,s__60954__$2,temp__5825__auto__,data_input,format,datasets))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null));

var G__60990 = (i__60955 + (1));
i__60955 = G__60990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60956),bb_web_ds_tools$views$vega_lite$core$data_tab_content_$_iter__60953(cljs.core.chunk_rest(s__60954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60956),null);
}
} else {
var vec__60960 = cljs.core.first(s__60954__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60960,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60960,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer px-2 py-1 text-xs ",bb_web_ds_tools.theme.bg_item_hover," truncate"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__60960,id,ds,s__60954__$2,temp__5825__auto__,data_input,format,datasets){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","import-dataset","bb-web-ds-tools.views.vega-lite.events/import-dataset",-1293640811),id], null));
});})(vec__60960,id,ds,s__60954__$2,temp__5825__auto__,data_input,format,datasets))
], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ds)], null),bb_web_ds_tools$views$vega_lite$core$data_tab_content_$_iter__60953(cljs.core.rest(s__60954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(datasets);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-500 p-2"], null),"No datasets created."], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),data_input,new cljs.core.Keyword(null,"language","language",-1591107564),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"clojure"),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-data-input","bb-web-ds-tools.views.vega-lite.events/set-data-input",1499556021),val], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","parse-data","bb-web-ds-tools.views.vega-lite.events/parse-data",1051780767)], null));
})], null)], null)], null)], null);
});
bb_web_ds_tools.views.vega_lite.core.config_tab_content = (function bb_web_ds_tools$views$vega_lite$core$config_tab_content(){
var config_input = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","config-input","bb-web-ds-tools.views.vega-lite.subs/config-input",120073368)], null)));
var config_mode = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","config-mode","bb-web-ds-tools.views.vega-lite.subs/config-mode",-220878037)], null)));
var saved_configs = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","saved-configs","bb-web-ds-tools.views.vega-lite.subs/saved-configs",-1955417371)], null)));
var active_config_name = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","active-config-name","bb-web-ds-tools.views.vega-lite.subs/active-config-name",1399037625)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 gap-2 border-b border-[#3f3f3f] bg-[#1c2128] items-center justify-between"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center text-xs text-gray-400"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Mode:"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1 cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"config-mode",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_mode,new cljs.core.Keyword(null,"json","json",1279968570)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-mode","bb-web-ds-tools.views.vega-lite.events/set-config-mode",-2057938962),new cljs.core.Keyword(null,"json","json",1279968570)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"JSON"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-1 cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"config-mode",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_mode,new cljs.core.Keyword(null,"edn","edn",1317840885)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-mode","bb-web-ds-tools.views.vega-lite.events/set-config-mode",-2057938962),new cljs.core.Keyword(null,"edn","edn",1317840885)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"EDN"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-x-2 items-center"], null),((cljs.core.seq(saved_configs))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs py-1 px-2 rounded ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5025__auto__ = active_config_name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60963_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","load-config","bb-web-ds-tools.views.vega-lite.events/load-config",1873202338),p1__60963_SHARP_.target.value], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Select Config..."], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$vega_lite$core$config_tab_content_$_iter__60965(s__60966){
return (new cljs.core.LazySeq(null,(function (){
var s__60966__$1 = s__60966;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60966__$1);
if(temp__5825__auto__){
var s__60966__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60966__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__60966__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__60968 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__60967 = (0);
while(true){
if((i__60967 < size__5502__auto__)){
var name = cljs.core._nth(c__5501__auto__,i__60967);
cljs.core.chunk_append(b__60968,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"value","value",305978217),name], null),name], null));

var G__60997 = (i__60967 + (1));
i__60967 = G__60997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60968),bb_web_ds_tools$views$vega_lite$core$config_tab_content_$_iter__60965(cljs.core.chunk_rest(s__60966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60968),null);
}
} else {
var name = cljs.core.first(s__60966__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"value","value",305978217),name], null),name], null),bb_web_ds_tools$views$vega_lite$core$config_tab_content_$_iter__60965(cljs.core.rest(s__60966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.keys(saved_configs));
})()], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.core.save_config_modal], null),(cljs.core.truth_(active_config_name)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-400 !px-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","delete-config","bb-web-ds-tools.views.vega-lite.events/delete-config",223100310),active_config_name], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.dustbin_icon], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),config_input,new cljs.core.Keyword(null,"language","language",-1591107564),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(config_mode,new cljs.core.Keyword(null,"json","json",1279968570)))?"json":"clojure"),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60964_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-config-input","bb-web-ds-tools.views.vega-lite.events/set-config-input",-195817504),p1__60964_SHARP_], null));
})], null)], null)], null)], null);
});
bb_web_ds_tools.views.vega_lite.core.left_panel = (function bb_web_ds_tools$views$vega_lite$core$left_panel(){
var active_left_tab = (function (){var or__5025__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","active-left-tab","bb-web-ds-tools.views.vega-lite.subs/active-left-tab",728986835)], null)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"data","data",-232669377);
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-1/2 md:h-full overflow-auto border-b md:border-b-0 md:border-r border-[#3f3f3f] w-full md:max-w-3xl flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden relative"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"items-center gap-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.tabs.tabs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"label","label",1718410804),"Data"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"label","label",1718410804),"Config"], null)], null),new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_left_tab,new cljs.core.Keyword(null,"class","class",-2030961996),"border-b-0 bg-transparent px-0",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60969_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-left-tab","bb-web-ds-tools.views.vega-lite.events/set-active-left-tab",-880549579),p1__60969_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Vega-Lite",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"], null)], null)], null),(function (){var G__60970 = active_left_tab;
var G__60970__$1 = (((G__60970 instanceof cljs.core.Keyword))?G__60970.fqn:null);
switch (G__60970__$1) {
case "data":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.core.data_tab_content], null);

break;
case "config":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.core.config_tab_content], null);

break;
default:
return null;

}
})()], null)], null)], null);
});
bb_web_ds_tools.views.vega_lite.core.right_panel = (function bb_web_ds_tools$views$vega_lite$core$right_panel(){
var active_right_tab = (function (){var or__5025__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","active-right-tab","bb-web-ds-tools.views.vega-lite.subs/active-right-tab",810687396)], null)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"plot","plot",2086832225);
}
})();
var parsed_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","parsed-data","bb-web-ds-tools.views.vega-lite.subs/parsed-data",-1744887782)], null)));
var inferred_schema = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","inferred-schema","bb-web-ds-tools.views.vega-lite.subs/inferred-schema",1993863107)], null)));
var parsed_config_obj = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.subs","parsed-config-obj","bb-web-ds-tools.views.vega-lite.subs/parsed-config-obj",854518547)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-1/2 md:h-full overflow-auto flex-grow"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.tabs.tabs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tabs","tabs",-779855354),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"plot","plot",2086832225),new cljs.core.Keyword(null,"label","label",1718410804),"Plot"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"parsed","parsed",-819589156),new cljs.core.Keyword(null,"label","label",1718410804),"Parsed Data"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"label","label",1718410804),"Schema"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"portal","portal",2002989957),new cljs.core.Keyword(null,"label","label",1718410804),"Portal"], null)], null),new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694),active_right_tab,new cljs.core.Keyword(null,"class","class",-2030961996),"border-b-0 bg-transparent px-0",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__60971_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","set-active-right-tab","bb-web-ds-tools.views.vega-lite.events/set-active-right-tab",688298150),p1__60971_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow overflow-hidden relative bg-white"], null),(function (){var G__60972 = active_right_tab;
var G__60972__$1 = (((G__60972 instanceof cljs.core.Keyword))?G__60972.fqn:null);
switch (G__60972__$1) {
case "plot":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full overflow-auto p-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var config_edn = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed_config_obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var final_edn = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config_edn,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),parsed_data], null));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),final_edn], null));
})], null),"Send to Portal"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.core.vega_viz,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec-obj","spec-obj",-642575778),parsed_config_obj,new cljs.core.Keyword(null,"data","data",-232669377),parsed_data], null)], null)], null);

break;
case "parsed":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full ",bb_web_ds_tools.theme.bg_page].join('')], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60975_61004 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60976_61005 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60977_61006 = true;
var _STAR_print_fn_STAR__temp_val__60978_61007 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60977_61006);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60978_61007);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.views.vega_lite.common.limit_preview(parsed_data));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60976_61005);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60975_61004);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),active_right_tab], null))], null);

break;
case "schema":
if(cljs.core.seq(parsed_data)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full ",bb_web_ds_tools.theme.bg_page].join('')], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60979_61008 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60980_61009 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60981_61010 = true;
var _STAR_print_fn_STAR__temp_val__60982_61011 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60981_61010);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60982_61011);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(inferred_schema);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60980_61009);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60979_61008);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})(),new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),active_right_tab], null))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-full w-full flex items-center justify-center ",bb_web_ds_tools.theme.bg_page," ",bb_web_ds_tools.theme.text_secondary].join('')], null),"No data available to infer schema."], null);
}

break;
case "portal":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full flex-grow overflow-hidden"], null),(function (){var config_edn = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(parsed_config_obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var final_edn = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config_edn,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),parsed_data], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_panel,final_edn,new cljs.core.Keyword("portal.viewer","vega-lite","portal.viewer/vega-lite",-646682422)], null);
})()], null);

break;
default:
return null;

}
})()], null)], null)], null);
});
bb_web_ds_tools.views.vega_lite.core.panel_render = (function bb_web_ds_tools$views$vega_lite$core$panel_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-full"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col md:flex-row h-full w-full overflow-hidden"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.core.left_panel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.vega_lite.core.right_panel], null)], null)], null);
});
bb_web_ds_tools.views.vega_lite.core.panel = (function bb_web_ds_tools$views$vega_lite$core$panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.create_panel,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"vega-lite-panel",new cljs.core.Keyword(null,"init-event","init-event",-2064696416),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.vega-lite.events","initialize","bb-web-ds-tools.views.vega-lite.events/initialize",-1222516143)], null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),bb_web_ds_tools.views.vega_lite.core.panel_render], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.vega_lite.core.js.map
