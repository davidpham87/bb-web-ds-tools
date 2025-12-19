goog.provide('bb_web_ds_tools.components.tabs');
/**
 * Renders a horizontal scrollable tab bar.
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :id (keyword, optional): Unique ID for implicit state management.
 *    - :tabs (seq): List of maps with :id, :label, :on-close.
 *    - :active-tab-id (any): ID of active tab (controlled).
 *    - :default-tab-id (any): Default active tab ID (implicit).
 *    - :on-change (fn): Callback(id) on tab switch.
 *    - :on-add (fn): Callback() on add button click.
 *    - :class (string): CSS classes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.tabs.tabs = (function bb_web_ds_tools$components$tabs$tabs(p__60851){
var map__60852 = p__60851;
var map__60852__$1 = cljs.core.__destructure_map(map__60852);
var initial_props = map__60852__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60852__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var active_tab_sub = (cljs.core.truth_(id)?re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.tabs","active-tab","bb-web-ds-tools.events.tabs/active-tab",2002997456),id], null)):null);
return (function (p__60853){
var map__60854 = p__60853;
var map__60854__$1 = cljs.core.__destructure_map(map__60854);
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var default_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"default-tab-id","default-tab-id",-16649364));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60854__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var active_tab = (cljs.core.truth_((function (){var and__5023__auto__ = id__$1;
if(cljs.core.truth_(and__5023__auto__)){
return active_tab_sub;
} else {
return and__5023__auto__;
}
})())?cljs.core.deref(active_tab_sub):active_tab_id);
var current_tab = (function (){var or__5025__auto__ = active_tab;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(id__$1)){
var or__5025__auto____$1 = default_tab_id;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(tabs));
}
} else {
return null;
}
}
})();
var handle_change = (function (tab_id){
if(cljs.core.truth_(id__$1)){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.tabs","set-active-tab","bb-web-ds-tools.events.tabs/set-active-tab",-241402853),id__$1,tab_id], null));
} else {
}

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(tab_id) : on_change.call(null,tab_id));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 border-b ",bb_web_ds_tools.theme.border_default," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$tabs$tabs_$_iter__60855(s__60856){
return (new cljs.core.LazySeq(null,(function (){
var s__60856__$1 = s__60856;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__60856__$1);
if(temp__5825__auto__){
var s__60856__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60856__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__60856__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__60858 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__60857 = (0);
while(true){
if((i__60857 < size__5502__auto__)){
var map__60859 = cljs.core._nth(c__5501__auto__,i__60857);
var map__60859__$1 = cljs.core.__destructure_map(map__60859);
var id__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60859__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
cljs.core.chunk_append(b__60858,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$2,current_tab))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60857,map__60859,map__60859__$1,id__$2,label,on_close,c__5501__auto__,size__5502__auto__,b__60858,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id){
return (function (){
return handle_change(id__$2);
});})(i__60857,map__60859,map__60859__$1,id__$2,label,on_close,c__5501__auto__,size__5502__auto__,b__60858,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__60857,map__60859,map__60859__$1,id__$2,label,on_close,c__5501__auto__,size__5502__auto__,b__60858,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id__$2) : on_close.call(null,id__$2));
});})(i__60857,map__60859,map__60859__$1,id__$2,label,on_close,c__5501__auto__,size__5502__auto__,b__60858,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$2)], null)));

var G__60864 = (i__60857 + (1));
i__60857 = G__60864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60858),bb_web_ds_tools$components$tabs$tabs_$_iter__60855(cljs.core.chunk_rest(s__60856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60858),null);
}
} else {
var map__60860 = cljs.core.first(s__60856__$2);
var map__60860__$1 = cljs.core.__destructure_map(map__60860);
var id__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60860__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60860__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60860__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id__$2,current_tab))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__60860,map__60860__$1,id__$2,label,on_close,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id){
return (function (){
return handle_change(id__$2);
});})(map__60860,map__60860__$1,id__$2,label,on_close,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__60860,map__60860__$1,id__$2,label,on_close,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id__$2) : on_close.call(null,id__$2));
});})(map__60860,map__60860__$1,id__$2,label,on_close,s__60856__$2,temp__5825__auto__,active_tab,current_tab,handle_change,map__60854,map__60854__$1,id__$1,tabs,active_tab_id,default_tab_id,on_change,on_add,class$,active_tab_sub,map__60852,map__60852__$1,initial_props,id))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id__$2)], null)),bb_web_ds_tools$components$tabs$tabs_$_iter__60855(cljs.core.rest(s__60856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(tabs);
})()], null),(cljs.core.truth_(on_add)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-3 py-2 rounded-t-md ",bb_web_ds_tools.theme.bg_button_xs," ",bb_web_ds_tools.theme.bg_button_xs_hover," ",bb_web_ds_tools.theme.text_button," font-bold text-lg leading-none mb-0.5"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_add,new cljs.core.Keyword(null,"title","title",636505583),"Add New"], null),"+"], null):null)], null);
});
});

//# sourceMappingURL=bb_web_ds_tools.components.tabs.js.map
