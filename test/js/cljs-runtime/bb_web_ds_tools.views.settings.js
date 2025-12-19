goog.provide('bb_web_ds_tools.views.settings');
bb_web_ds_tools.views.settings.settings_nav = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"label","label",1718410804),"General",new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2699\uFE0F",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"appearance","appearance",-216383432),new cljs.core.Keyword(null,"label","label",1718410804),"Appearance"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"development","development",-221827732),new cljs.core.Keyword(null,"label","label",1718410804),"Development"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCA",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dataset-import","dataset-import",-690571705),new cljs.core.Keyword(null,"label","label",1718410804),"Import Defaults"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCBB",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"webr-settings","webr-settings",109361307),new cljs.core.Keyword(null,"label","label",1718410804),"WebR"], null)], null)], null)], null);
/**
 * Renders a sidebar item.
 * 
 *   Args:
 *  props (map): Contains :item, :active-id, :expanded-ids, :on-select, :on-toggle.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.sidebar_item = (function bb_web_ds_tools$views$settings$sidebar_item(p__37923){
var map__37924 = p__37923;
var map__37924__$1 = cljs.core.__destructure_map(map__37924);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"item","item",249373802));
var active_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"active-id","active-id",-59238656));
var expanded_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"expanded-ids","expanded-ids",-1743520102));
var on_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var on_toggle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774));
var has_children_QMARK_ = cljs.core.seq(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item));
var expanded_QMARK_ = cljs.core.contains_QMARK_(expanded_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-[#3f3f3f] transition-colors ",((active_QMARK_)?"bg-[#3f3f3f] text-[#f0dfaf]":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(has_children_QMARK_){
var G__37925 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (on_toggle.cljs$core$IFn$_invoke$arity$1 ? on_toggle.cljs$core$IFn$_invoke$arity$1(G__37925) : on_toggle.call(null,G__37925));
} else {
var G__37926 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__37926) : on_select.call(null,G__37926));
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center space-x-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-medium"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null),((has_children_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-gray-400"], null),((expanded_QMARK_)?"\u25BC":"\u25B6")], null):null)], null),((((has_children_QMARK_) && (expanded_QMARK_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$settings$sidebar_item_$_iter__37927(s__37928){
return (new cljs.core.LazySeq(null,(function (){
var s__37928__$1 = s__37928;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37928__$1);
if(temp__5825__auto__){
var s__37928__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37928__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37928__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37930 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37929 = (0);
while(true){
if((i__37929 < size__5502__auto__)){
var child = cljs.core._nth(c__5501__auto__,i__37929);
cljs.core.chunk_append(b__37930,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["pl-10 pr-4 py-2 text-sm cursor-pointer hover:bg-[#3f3f3f] transition-colors ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child)))?"bg-[#3f3f3f] text-[#f0dfaf]":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37929,child,c__5501__auto__,size__5502__auto__,b__37930,s__37928__$2,temp__5825__auto__,has_children_QMARK_,expanded_QMARK_,active_QMARK_,map__37924,map__37924__$1,item,active_id,expanded_ids,on_select,on_toggle){
return (function (){
var G__37931 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__37931) : on_select.call(null,G__37931));
});})(i__37929,child,c__5501__auto__,size__5502__auto__,b__37930,s__37928__$2,temp__5825__auto__,has_children_QMARK_,expanded_QMARK_,active_QMARK_,map__37924,map__37924__$1,item,active_id,expanded_ids,on_select,on_toggle))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child)], null)));

var G__38044 = (i__37929 + (1));
i__37929 = G__38044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37930),bb_web_ds_tools$views$settings$sidebar_item_$_iter__37927(cljs.core.chunk_rest(s__37928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37930),null);
}
} else {
var child = cljs.core.first(s__37928__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["pl-10 pr-4 py-2 text-sm cursor-pointer hover:bg-[#3f3f3f] transition-colors ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child)))?"bg-[#3f3f3f] text-[#f0dfaf]":null)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (child,s__37928__$2,temp__5825__auto__,has_children_QMARK_,expanded_QMARK_,active_QMARK_,map__37924,map__37924__$1,item,active_id,expanded_ids,on_select,on_toggle){
return (function (){
var G__37932 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__37932) : on_select.call(null,G__37932));
});})(child,s__37928__$2,temp__5825__auto__,has_children_QMARK_,expanded_QMARK_,active_QMARK_,map__37924,map__37924__$1,item,active_id,expanded_ids,on_select,on_toggle))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child)], null)),bb_web_ds_tools$views$settings$sidebar_item_$_iter__37927(cljs.core.rest(s__37928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item));
})()], null):null)], null);
});
/**
 * Renders the general settings view.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.general_settings = (function bb_web_ds_tools$views$settings$general_settings(){
var current_theme = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906)], null)));
var editor_settings = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","editor-settings","bb-web-ds-tools.events.settings/editor-settings",74758155)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 space-y-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold"], null),"General Settings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Theme"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(current_theme),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37939_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","set-theme","bb-web-ds-tools.events.theme/set-theme",607625894),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__37939_SHARP_.target.value)], null));
})], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$settings$general_settings_$_iter__37945(s__37946){
return (new cljs.core.LazySeq(null,(function (){
var s__37946__$1 = s__37946;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37946__$1);
if(temp__5825__auto__){
var s__37946__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37946__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37946__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37948 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37947 = (0);
while(true){
if((i__37947 < size__5502__auto__)){
var theme_name = cljs.core._nth(c__5501__auto__,i__37947);
cljs.core.chunk_append(b__37948,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(theme_name)], null),cljs.core.name(theme_name)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),theme_name], null)));

var G__38048 = (i__37947 + (1));
i__37947 = G__38048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37948),bb_web_ds_tools$views$settings$general_settings_$_iter__37945(cljs.core.chunk_rest(s__37946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37948),null);
}
} else {
var theme_name = cljs.core.first(s__37946__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(theme_name)], null),cljs.core.name(theme_name)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),theme_name], null)),bb_web_ds_tools$views$settings$general_settings_$_iter__37945(cljs.core.rest(s__37946__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(bb_web_ds_tools.utils.themes.themes)));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pt-4 border-t border-[#3f3f3f]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold mb-4"], null),"Editor Settings"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Font Size (px)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(editor_settings),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-editor-setting","bb-web-ds-tools.events.settings/set-editor-setting",-1016283821),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-xs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Editor Width (CSS value, e.g. 50%, 800px)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(editor_settings),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-editor-setting","bb-web-ds-tools.events.settings/set-editor-setting",-1016283821),new cljs.core.Keyword(null,"width","width",-384071477)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-xs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Word Wrap"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926).cljs$core$IFn$_invoke$arity$1(editor_settings),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37941_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-editor-setting","bb-web-ds-tools.events.settings/set-editor-setting",-1016283821),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),p1__37941_SHARP_.target.value], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"off"], null),"Off"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"on"], null),"On"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"wordWrapColumn"], null),"Word Wrap Column"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"bounded"], null),"Bounded"], null)], null)], null)], null)], null)], null);
});
/**
 * Renders the appearance settings view.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.appearance_settings = (function bb_web_ds_tools$views$settings$appearance_settings(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.general_settings], null);
});
/**
 * Renders the development settings view.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.development_settings = (function bb_web_ds_tools$views$settings$development_settings(){
var debounce_ms = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","vega-lite-debounce-ms","bb-web-ds-tools.events.settings/vega-lite-debounce-ms",-1548002368)], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 space-y-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold"], null),"Development Tools"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-gray-400"], null),"Tools to assist with debugging and development."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-2 bg-[#3f3f3f] hover:bg-[#4f4f4f] text-white rounded transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","open","bb-web-ds-tools.portal/open",1274924169)], null));
})], null),"Open Portal"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4 pt-4 border-t border-[#3f3f3f]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Vega-Lite Config Debounce (ms)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),debounce_ms,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-vega-lite-debounce-ms","bb-web-ds-tools.events.settings/set-vega-lite-debounce-ms",-495917023)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-xs"], null)], null)], null)], null);
});
/**
 * Renders the dataset import settings view.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.dataset_import_settings = (function bb_web_ds_tools$views$settings$dataset_import_settings(){
var col_norm = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","column-normalizer","bb-web-ds-tools.events.settings/column-normalizer",-462853964)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 space-y-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold"], null),"Dataset Import Defaults"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Default Column Name Case"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"case","case",1143702196).cljs$core$IFn$_invoke$arity$1(col_norm)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37967_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-column-normalizer-case","bb-web-ds-tools.events.settings/set-column-normalizer-case",1047395541),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__37967_SHARP_.target.value)], null));
})], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$settings$dataset_import_settings_$_iter__37970(s__37971){
return (new cljs.core.LazySeq(null,(function (){
var s__37971__$1 = s__37971;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37971__$1);
if(temp__5825__auto__){
var s__37971__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37971__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37971__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37973 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37972 = (0);
while(true){
if((i__37972 < size__5502__auto__)){
var c = cljs.core._nth(c__5501__auto__,i__37972);
cljs.core.chunk_append(b__37973,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(c)], null),cljs.core.name(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__38062 = (i__37972 + (1));
i__37972 = G__38062;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37973),bb_web_ds_tools$views$settings$dataset_import_settings_$_iter__37970(cljs.core.chunk_rest(s__37971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37973),null);
}
} else {
var c = cljs.core.first(s__37971__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(c)], null),cljs.core.name(c)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),bb_web_ds_tools$views$settings$dataset_import_settings_$_iter__37970(cljs.core.rest(s__37971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snake_case","snake_case",-83605242),new cljs.core.Keyword(null,"CamelCase","CamelCase",989004190),new cljs.core.Keyword(null,"kebab-case","kebab-case",2130396283)], null));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Default Column Name Type"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#3f3f3f] text-white rounded px-3 py-2 w-full max-w-xs border border-[#4f4f4f] focus:outline-none focus:border-[#8cd0d3]",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(col_norm)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37969_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-column-normalizer-output","bb-web-ds-tools.events.settings/set-column-normalizer-output",-483881870),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__37969_SHARP_.target.value)], null));
})], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$settings$dataset_import_settings_$_iter__37975(s__37976){
return (new cljs.core.LazySeq(null,(function (){
var s__37976__$1 = s__37976;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37976__$1);
if(temp__5825__auto__){
var s__37976__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37976__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37976__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37978 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37977 = (0);
while(true){
if((i__37977 < size__5502__auto__)){
var o = cljs.core._nth(c__5501__auto__,i__37977);
cljs.core.chunk_append(b__37978,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(o)], null),cljs.core.name(o)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)));

var G__38068 = (i__37977 + (1));
i__37977 = G__38068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37978),bb_web_ds_tools$views$settings$dataset_import_settings_$_iter__37975(cljs.core.chunk_rest(s__37976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37978),null);
}
} else {
var o = cljs.core.first(s__37976__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(o)], null),cljs.core.name(o)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),o], null)),bb_web_ds_tools$views$settings$dataset_import_settings_$_iter__37975(cljs.core.rest(s__37976__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null));
})()], null)], null)], null);
});
/**
 * Renders the WebR settings view.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.webr_settings = (function bb_web_ds_tools$views$settings$webr_settings(){
var settings = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","webr-settings","bb-web-ds-tools.events.settings/webr-settings",541893482)], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 space-y-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold"], null),"WebR Settings"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Graphic Container Width (px)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"container-width","container-width",-1461172864).cljs$core$IFn$_invoke$arity$1(settings),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-webr-setting","bb-web-ds-tools.events.settings/set-webr-setting",522713442),new cljs.core.Keyword(null,"container-width","container-width",-1461172864)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-xs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Graphic Container Height (px)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"container-height","container-height",-577782714).cljs$core$IFn$_invoke$arity$1(settings),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-webr-setting","bb-web-ds-tools.events.settings/set-webr-setting",522713442),new cljs.core.Keyword(null,"container-height","container-height",-577782714)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-xs"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block text-sm font-medium mb-2"], null),"Canvas Scale Factor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.01",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110).cljs$core$IFn$_invoke$arity$1(settings),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-webr-setting","bb-web-ds-tools.events.settings/set-webr-setting",522713442),new cljs.core.Keyword(null,"canvas-scale","canvas-scale",489552110)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full max-w-xs"], null)], null)], null)], null);
});
/**
 * Renders the content panel based on the active view.
 * 
 *   Args:
 *  active-view (keyword): The active settings view ID.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.content_panel = (function bb_web_ds_tools$views$settings$content_panel(active_view){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 h-full overflow-y-auto"], null),(function (){var G__37987 = active_view;
var G__37987__$1 = (((G__37987 instanceof cljs.core.Keyword))?G__37987.fqn:null);
switch (G__37987__$1) {
case "general":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.general_settings], null);

break;
case "appearance":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.appearance_settings], null);

break;
case "development":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.development_settings], null);

break;
case "datasets":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.dataset_import_settings], null);

break;
case "dataset-import":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.dataset_import_settings], null);

break;
case "code":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.webr_settings], null);

break;
case "webr-settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.webr_settings], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Select a setting"], null);

}
})()], null);
});
/**
 * Renders the settings panel with a sidebar layout.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.settings.panel = (function bb_web_ds_tools$views$settings$panel(){
var active_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","active-view","bb-web-ds-tools.events.settings/active-view",-1970506839)], null)));
var expanded_views = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","expanded-views","bb-web-ds-tools.events.settings/expanded-views",-1168619342)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.split_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"1-3","1-3",-870297994)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full bg-[#2b2b2b] border-r border-[#3f3f3f] overflow-y-auto py-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between px-4 mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold text-[#dcdccc]"], null),"Settings"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.help_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),bb_web_ds_tools.components.navigation.get_wiki_url(new cljs.core.Keyword(null,"settings","settings",1556144875)),new cljs.core.Keyword(null,"title","title",636505583),"Help: Settings",new cljs.core.Keyword(null,"class","class",-2030961996),"!p-1 !w-5 !h-5 opacity-50 hover:opacity-100"], null)], null)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$settings$panel_$_iter__38021(s__38022){
return (new cljs.core.LazySeq(null,(function (){
var s__38022__$1 = s__38022;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__38022__$1);
if(temp__5825__auto__){
var s__38022__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38022__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__38022__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__38024 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__38023 = (0);
while(true){
if((i__38023 < size__5502__auto__)){
var item = cljs.core._nth(c__5501__auto__,i__38023);
cljs.core.chunk_append(b__38024,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.sidebar_item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_view,new cljs.core.Keyword(null,"expanded-ids","expanded-ids",-1743520102),expanded_views,new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (i__38023,item,c__5501__auto__,size__5502__auto__,b__38024,s__38022__$2,temp__5825__auto__,active_view,expanded_views){
return (function (p1__38003_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-active-view","bb-web-ds-tools.events.settings/set-active-view",-39580680),p1__38003_SHARP_], null));
});})(i__38023,item,c__5501__auto__,size__5502__auto__,b__38024,s__38022__$2,temp__5825__auto__,active_view,expanded_views))
,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),((function (i__38023,item,c__5501__auto__,size__5502__auto__,b__38024,s__38022__$2,temp__5825__auto__,active_view,expanded_views){
return (function (p1__38004_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","toggle-expanded-view","bb-web-ds-tools.events.settings/toggle-expanded-view",1939359027),p1__38004_SHARP_], null));
});})(i__38023,item,c__5501__auto__,size__5502__auto__,b__38024,s__38022__$2,temp__5825__auto__,active_view,expanded_views))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__38078 = (i__38023 + (1));
i__38023 = G__38078;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38024),bb_web_ds_tools$views$settings$panel_$_iter__38021(cljs.core.chunk_rest(s__38022__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38024),null);
}
} else {
var item = cljs.core.first(s__38022__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.sidebar_item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"active-id","active-id",-59238656),active_view,new cljs.core.Keyword(null,"expanded-ids","expanded-ids",-1743520102),expanded_views,new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (item,s__38022__$2,temp__5825__auto__,active_view,expanded_views){
return (function (p1__38003_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","set-active-view","bb-web-ds-tools.events.settings/set-active-view",-39580680),p1__38003_SHARP_], null));
});})(item,s__38022__$2,temp__5825__auto__,active_view,expanded_views))
,new cljs.core.Keyword(null,"on-toggle","on-toggle",-695538774),((function (item,s__38022__$2,temp__5825__auto__,active_view,expanded_views){
return (function (p1__38004_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","toggle-expanded-view","bb-web-ds-tools.events.settings/toggle-expanded-view",1939359027),p1__38004_SHARP_], null));
});})(item,s__38022__$2,temp__5825__auto__,active_view,expanded_views))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null)),bb_web_ds_tools$views$settings$panel_$_iter__38021(cljs.core.rest(s__38022__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.views.settings.settings_nav);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.settings.content_panel,active_view], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.settings.js.map
