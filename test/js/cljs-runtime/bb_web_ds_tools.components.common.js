goog.provide('bb_web_ds_tools.components.common');
/**
 * Returns CSS classes for a button based on variant and disabled state.
 */
bb_web_ds_tools.components.common.get_button_classes = (function bb_web_ds_tools$components$common$get_button_classes(variant,disabled_QMARK_,size){
var size_classes = (function (){var G__22332 = size;
var G__22332__$1 = (((G__22332 instanceof cljs.core.Keyword))?G__22332.fqn:null);
switch (G__22332__$1) {
case "xs":
return ["text-xs px-2 py-1 ",bb_web_ds_tools.theme.bg_button_xs," ",bb_web_ds_tools.theme.bg_button_xs_hover," ",bb_web_ds_tools.theme.text_button," rounded transition-colors"].join('');

break;
case "sm":
return "py-1 px-3 text-sm font-medium rounded shadow-sm transition-all duration-200";

break;
default:
return "py-2 px-4 text-sm font-bold rounded shadow-sm transition-all duration-200";

}
})();
var color_classes = (cljs.core.truth_(disabled_QMARK_)?[bb_web_ds_tools.theme.bg_button_disabled," ",bb_web_ds_tools.theme.text_disabled," cursor-not-allowed"].join(''):(function (){var G__22333 = variant;
var G__22333__$1 = (((G__22333 instanceof cljs.core.Keyword))?G__22333.fqn:null);
switch (G__22333__$1) {
case "primary":
return [bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.bg_button_primary_hover," ",bb_web_ds_tools.theme.text_button_primary].join('');

break;
case "danger":
return [bb_web_ds_tools.theme.bg_button_danger," ",bb_web_ds_tools.theme.bg_button_danger_hover," text-white"].join('');

break;
default:
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(size,new cljs.core.Keyword(null,"xs","xs",649443341))){
return "";
} else {
return [bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," ",bb_web_ds_tools.theme.text_button].join('');
}

}
})());
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size_classes)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_classes)].join('');
});
/**
 * Renders a styled button component.
 * Unified component.
 * 
 *   Args:
 *  props (map): Standard HTML attributes.
 *    - :size (keyword): :sm, :xs, or :md (default).
 *    - :variant (keyword): :primary, :danger, or nil (default).
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.button = (function bb_web_ds_tools$components$common$button(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22544 = arguments.length;
var i__5750__auto___22545 = (0);
while(true){
if((i__5750__auto___22545 < len__5749__auto___22544)){
args__5755__auto__.push((arguments[i__5750__auto___22545]));

var G__22546 = (i__5750__auto___22545 + (1));
i__5750__auto___22545 = G__22546;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__22387 = props;
var map__22387__$1 = cljs.core.__destructure_map(map__22387);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22387__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22387__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22387__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22387__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655));
var clean_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"variant","variant",-424354234),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"size","size",1098693007)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clean_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.components.common.get_button_classes(variant,disabled,size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button.cljs$lang$applyTo = (function (seq22339){
var G__22347 = cljs.core.first(seq22339);
var seq22339__$1 = cljs.core.next(seq22339);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22347,seq22339__$1);
}));

/**
 * Renders an informational button (blue style).
 * 
 *   Args:
 *  props (map): Standard HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.button_info = (function bb_web_ds_tools$components$common$button_info(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22547 = arguments.length;
var i__5750__auto___22548 = (0);
while(true){
if((i__5750__auto___22548 < len__5749__auto___22547)){
args__5755__auto__.push((arguments[i__5750__auto___22548]));

var G__22549 = (i__5750__auto___22548 + (1));
i__5750__auto___22548 = G__22549;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_info.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341),new cljs.core.Keyword(null,"class","class",-2030961996),["!bg-blue-600 hover:!bg-blue-700 !text-white ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null)], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button_info.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_info.cljs$lang$applyTo = (function (seq22397){
var G__22398 = cljs.core.first(seq22397);
var seq22397__$1 = cljs.core.next(seq22397);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22398,seq22397__$1);
}));

/**
 * Renders an icon button that acts as a link, opening in a new tab.
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :href (string): The URL.
 *    - :icon (hiccup): The icon SVG.
 *    - :title (string): Tooltip.
 *    - :class (string): Extra classes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.icon_button_link = (function bb_web_ds_tools$components$common$icon_button_link(p__22419){
var map__22420 = p__22419;
var map__22420__$1 = cljs.core.__destructure_map(map__22420);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,new cljs.core.Keyword(null,"title","title",636505583));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22420__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer",new cljs.core.Keyword(null,"class","class",-2030961996),["p-2 rounded hover:bg-white/10 transition-colors ",bb_web_ds_tools.theme.text_secondary," hover:text-white flex items-center justify-center ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"title","title",636505583),title], null),icon], null);
});
bb_web_ds_tools.components.common.help_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"], null)], null)], null);
/**
 * Renders a help button linking to a URL.
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :href (string): The URL.
 *    - :title (string): Tooltip.
 *    - :class (string): Extra classes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.help_button = (function bb_web_ds_tools$components$common$help_button(p__22434){
var map__22435 = p__22434;
var map__22435__$1 = cljs.core.__destructure_map(map__22435);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22435__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22435__$1,new cljs.core.Keyword(null,"title","title",636505583));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22435__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.icon_button_link,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"title","title",636505583),(function (){var or__5025__auto__ = title;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "Help";
}
})(),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "!p-1 !w-5 !h-5 opacity-50 hover:opacity-100 mb-2";
}
})(),new cljs.core.Keyword(null,"icon","icon",1679606541),bb_web_ds_tools.components.common.help_icon], null)], null);
});
/**
 * Renders a styled input element. Dispatches a re-frame event on change if provided.
 * 
 *   Args:
 *  props (map): Input attributes. Keys:
 *    - :value (any): Current value.
 *    - :on-change (fn): Callback function.
 *    - :on-change-event (vector): Re-frame event vector to dispatch on change (value appended).
 *    - :placeholder (string): Placeholder text.
 *    - :class (string): CSS classes.
 *    - :type (string): Input type (default 'text').
 *    - :checked (boolean): Checked state for checkboxes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.input = (function bb_web_ds_tools$components$common$input(p__22436){
var map__22437 = p__22436;
var map__22437__$1 = cljs.core.__destructure_map(map__22437);
var props = map__22437__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22437__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22437__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22437__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22437__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22437__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22437__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22437__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var handle_change = (function (e){
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
} else {
}

if(cljs.core.truth_(on_change_event)){
var new_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"checkbox"))?e.target.checked:e.target.value);
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_change_event,new_val));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," border ",bb_web_ds_tools.theme.border_default," rounded px-2 py-1 ",bb_web_ds_tools.theme.border_focus," ",bb_web_ds_tools.theme.outline_none," ",bb_web_ds_tools.theme.ring_focus," transition-colors ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5025__auto__ = type;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "text";
}
})(),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checked","checked",-50955819)], 0))], 0))], null);
});
/**
 * Renders a styled select dropdown.
 * 
 *   Args:
 *  props (map): Select attributes. Keys:
 *    - :value (any): Selected value.
 *    - :on-change (fn): Callback function.
 *    - :on-change-event (vector): Re-frame event vector.
 *    - :class (string): CSS classes.
 *  children (rest): Option elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.select = (function bb_web_ds_tools$components$common$select(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22557 = arguments.length;
var i__5750__auto___22558 = (0);
while(true){
if((i__5750__auto___22558 < len__5749__auto___22557)){
args__5755__auto__.push((arguments[i__5750__auto___22558]));

var G__22559 = (i__5750__auto___22558 + (1));
i__5750__auto___22558 = G__22559;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__22440 = props;
var map__22440__$1 = cljs.core.__destructure_map(map__22440);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22440__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22440__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var handle_change = (function (e){
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
} else {
}

if(cljs.core.truth_(on_change_event)){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_change_event,e.target.value));
} else {
return null;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," p-2 rounded border ",bb_web_ds_tools.theme.border_default," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359)], 0))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.select.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.select.cljs$lang$applyTo = (function (seq22438){
var G__22439 = cljs.core.first(seq22438);
var seq22438__$1 = cljs.core.next(seq22438);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22439,seq22438__$1);
}));

/**
 * Renders a styled textarea element.
 * 
 *   Args:
 *  props (map): Textarea attributes.
 *    - :value (string): Content.
 *    - :on-change (fn): Callback.
 *    - :on-change-event (vector): Re-frame event.
 *    - :placeholder (string): Placeholder text.
 *    - :class (string): CSS classes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.textarea = (function bb_web_ds_tools$components$common$textarea(p__22441){
var map__22442 = p__22441;
var map__22442__$1 = cljs.core.__destructure_map(map__22442);
var props = map__22442__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var handle_change = (function (e){
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));
} else {
}

if(cljs.core.truth_(on_change_event)){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_change_event,e.target.value));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_primary," border ",bb_web_ds_tools.theme.border_default," rounded p-4 font-mono text-sm ",bb_web_ds_tools.theme.border_focus," ",bb_web_ds_tools.theme.outline_none," focus:ring-1 ",bb_web_ds_tools.theme.ring_focus," transition-colors ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),handle_change], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359)], 0))], 0))], null);
});
/**
 * Renders a preformatted code block.
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :content (string): The text content.
 *    - :class (string): CSS classes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.pre_block = (function bb_web_ds_tools$components$common$pre_block(p__22451){
var map__22452 = p__22451;
var map__22452__$1 = cljs.core.__destructure_map(map__22452);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22452__$1,new cljs.core.Keyword(null,"content","content",15833224));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22452__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full ",bb_web_ds_tools.theme.bg_input," ",bb_web_ds_tools.theme.text_code," border ",bb_web_ds_tools.theme.border_subtle," rounded p-4 font-mono text-sm overflow-auto scrollbar-thin ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),content], null);
});
/**
 * Renders a card container component.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.card = (function bb_web_ds_tools$components$common$card(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22565 = arguments.length;
var i__5750__auto___22566 = (0);
while(true){
if((i__5750__auto___22566 < len__5749__auto___22565)){
args__5755__auto__.push((arguments[i__5750__auto___22566]));

var G__22567 = (i__5750__auto___22566 + (1));
i__5750__auto___22566 = G__22567;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.card.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_card," rounded shadow-md ",bb_web_ds_tools.theme.text_primary," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.card.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.card.cljs$lang$applyTo = (function (seq22466){
var G__22467 = cljs.core.first(seq22466);
var seq22466__$1 = cljs.core.next(seq22466);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22467,seq22466__$1);
}));

/**
 * Renders a responsive container for a table.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.table_container = (function bb_web_ds_tools$components$common$table_container(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22568 = arguments.length;
var i__5750__auto___22569 = (0);
while(true){
if((i__5750__auto___22569 < len__5749__auto___22568)){
args__5755__auto__.push((arguments[i__5750__auto___22569]));

var G__22570 = (i__5750__auto___22569 + (1));
i__5750__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.table_container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.table_container.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["overflow-x-auto ",bb_web_ds_tools.theme.bg_table_body," rounded shadow-md border ",bb_web_ds_tools.theme.border_subtle," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null)], null),children);
}));

(bb_web_ds_tools.components.common.table_container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.table_container.cljs$lang$applyTo = (function (seq22468){
var G__22469 = cljs.core.first(seq22468);
var seq22468__$1 = cljs.core.next(seq22468);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22469,seq22468__$1);
}));

/**
 * Renders a styled table element.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.table = (function bb_web_ds_tools$components$common$table(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22571 = arguments.length;
var i__5750__auto___22572 = (0);
while(true){
if((i__5750__auto___22572 < len__5749__auto___22571)){
args__5755__auto__.push((arguments[i__5750__auto___22572]));

var G__22573 = (i__5750__auto___22572 + (1));
i__5750__auto___22572 = G__22573;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.table.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["min-w-full divide-y ",bb_web_ds_tools.theme.border_subtle," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.table.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.table.cljs$lang$applyTo = (function (seq22470){
var G__22471 = cljs.core.first(seq22470);
var seq22470__$1 = cljs.core.next(seq22470);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22471,seq22470__$1);
}));

/**
 * Renders a table head element.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.thead = (function bb_web_ds_tools$components$common$thead(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22574 = arguments.length;
var i__5750__auto___22575 = (0);
while(true){
if((i__5750__auto___22575 < len__5749__auto___22574)){
args__5755__auto__.push((arguments[i__5750__auto___22575]));

var G__22576 = (i__5750__auto___22575 + (1));
i__5750__auto___22575 = G__22576;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.thead.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_table_head," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.thead.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.thead.cljs$lang$applyTo = (function (seq22472){
var G__22473 = cljs.core.first(seq22472);
var seq22472__$1 = cljs.core.next(seq22472);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22473,seq22472__$1);
}));

/**
 * Renders a table body element.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.tbody = (function bb_web_ds_tools$components$common$tbody(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22579 = arguments.length;
var i__5750__auto___22580 = (0);
while(true){
if((i__5750__auto___22580 < len__5749__auto___22579)){
args__5755__auto__.push((arguments[i__5750__auto___22580]));

var G__22581 = (i__5750__auto___22580 + (1));
i__5750__auto___22580 = G__22581;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_table_body," divide-y ",bb_web_ds_tools.theme.border_subtle," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.tbody.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.tbody.cljs$lang$applyTo = (function (seq22474){
var G__22475 = cljs.core.first(seq22474);
var seq22474__$1 = cljs.core.next(seq22474);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22475,seq22474__$1);
}));

/**
 * Renders a table row element.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.tr = (function bb_web_ds_tools$components$common$tr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22584 = arguments.length;
var i__5750__auto___22585 = (0);
while(true){
if((i__5750__auto___22585 < len__5749__auto___22584)){
args__5755__auto__.push((arguments[i__5750__auto___22585]));

var G__22586 = (i__5750__auto___22585 + (1));
i__5750__auto___22585 = G__22586;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.tr.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_table_row_hover," transition-colors ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.tr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.tr.cljs$lang$applyTo = (function (seq22476){
var G__22477 = cljs.core.first(seq22476);
var seq22476__$1 = cljs.core.next(seq22476);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22477,seq22476__$1);
}));

/**
 * Renders a table header cell.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.th = (function bb_web_ds_tools$components$common$th(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22587 = arguments.length;
var i__5750__auto___22588 = (0);
while(true){
if((i__5750__auto___22588 < len__5749__auto___22587)){
args__5755__auto__.push((arguments[i__5750__auto___22588]));

var G__22589 = (i__5750__auto___22588 + (1));
i__5750__auto___22588 = G__22589;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.th.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-3 py-2 text-left text-xs font-medium ",bb_web_ds_tools.theme.text_accent," uppercase tracking-wider ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.th.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.th.cljs$lang$applyTo = (function (seq22478){
var G__22479 = cljs.core.first(seq22478);
var seq22478__$1 = cljs.core.next(seq22478);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22479,seq22478__$1);
}));

/**
 * Renders a table data cell.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.td = (function bb_web_ds_tools$components$common$td(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22591 = arguments.length;
var i__5750__auto___22592 = (0);
while(true){
if((i__5750__auto___22592 < len__5749__auto___22591)){
args__5755__auto__.push((arguments[i__5750__auto___22592]));

var G__22593 = (i__5750__auto___22592 + (1));
i__5750__auto___22592 = G__22593;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.td.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-3 py-1.5 whitespace-nowrap text-sm ",bb_web_ds_tools.theme.text_primary," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.td.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.td.cljs$lang$applyTo = (function (seq22480){
var G__22481 = cljs.core.first(seq22480);
var seq22480__$1 = cljs.core.next(seq22480);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22481,seq22480__$1);
}));

/**
 * Renders a standard page header.
 * 
 *   Args:
 *  text (string): Header text.
 *  children (rest): Optional additional content (e.g., buttons) to place on the right.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.page_header = (function bb_web_ds_tools$components$common$page_header(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22595 = arguments.length;
var i__5750__auto___22597 = (0);
while(true){
if((i__5750__auto___22597 < len__5749__auto___22595)){
args__5755__auto__.push((arguments[i__5750__auto___22597]));

var G__22599 = (i__5750__auto___22597 + (1));
i__5750__auto___22597 = G__22599;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.page_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.page_header.cljs$core$IFn$_invoke$arity$variadic = (function (text,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center justify-between mb-6 pb-2 border-b ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl font-bold ",bb_web_ds_tools.theme.text_accent].join('')], null),text], null)], null),children);
}));

(bb_web_ds_tools.components.common.page_header.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.page_header.cljs$lang$applyTo = (function (seq22482){
var G__22483 = cljs.core.first(seq22482);
var seq22482__$1 = cljs.core.next(seq22482);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22483,seq22482__$1);
}));

/**
 * Renders a standard section header.
 * 
 *   Args:
 *  text (string): Header text.
 *  children (rest): Optional additional content.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.section_header = (function bb_web_ds_tools$components$common$section_header(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22600 = arguments.length;
var i__5750__auto___22611 = (0);
while(true){
if((i__5750__auto___22611 < len__5749__auto___22600)){
args__5755__auto__.push((arguments[i__5750__auto___22611]));

var G__22612 = (i__5750__auto___22611 + (1));
i__5750__auto___22611 = G__22612;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.section_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.section_header.cljs$core$IFn$_invoke$arity$variadic = (function (text,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-semibold ",bb_web_ds_tools.theme.text_accent].join('')], null),text], null)], null),children);
}));

(bb_web_ds_tools.components.common.section_header.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.section_header.cljs$lang$applyTo = (function (seq22484){
var G__22485 = cljs.core.first(seq22484);
var seq22484__$1 = cljs.core.next(seq22484);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22485,seq22484__$1);
}));

/**
 * Renders a label element.
 * 
 *   Args:
 *  text (string): The label text.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.label = (function bb_web_ds_tools$components$common$label(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["block text-sm font-medium ",bb_web_ds_tools.theme.text_secondary," mb-2"].join('')], null),text], null);
});
/**
 * Renders a trash/delete icon SVG.
 * 
 *   Args:
 *  props (map, optional): SVG attributes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.dustbin_icon = (function bb_web_ds_tools$components$common$dustbin_icon(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22628 = arguments.length;
var i__5750__auto___22629 = (0);
while(true){
if((i__5750__auto___22629 < len__5749__auto___22628)){
args__5755__auto__.push((arguments[i__5750__auto___22629]));

var G__22630 = (i__5750__auto___22629 + (1));
i__5750__auto___22629 = G__22630;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__22487){
var vec__22488 = p__22487;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22488,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null),props], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.052.68-.107 1.022-.166m-1.022.165L5.34 19.673a2.25 2.25 0 0 0 2.244 2.077H8.084a2.25 2.25 0 0 0 2.244-2.077L14.74 9m-6.42 10.668L9.26 9m9.968-3.21c-1.378-.225-2.776-.39-4.188-.475M6.887 5.79c1.378-.225 2.776-.39 4.188-.475m0 0V4.868a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.912m-6 0h6m-6 0a48.11 48.11 0 0 1-3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"], null)], null)], null);
}));

(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$applyTo = (function (seq22486){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22486));
}));

bb_web_ds_tools.components.common.nav_items = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCA"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC8"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCBB"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2705"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDF6F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83E\uDD16"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDDC4\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2699\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCDC"], null)], null);
/**
 * Renders a top-level navigation tab bar (secondary nav).
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :tabs (seq): List of maps with :id, :label.
 *    - :active-tab-id (any): ID of active tab.
 *    - :on-change (fn): Callback(id).
 *    - :class (string): CSS classes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.nav_tabs = (function bb_web_ds_tools$components$common$nav_tabs(p__22497){
var map__22498 = p__22497;
var map__22498__$1 = cljs.core.__destructure_map(map__22498);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22498__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-row space-x-6 border-b ",bb_web_ds_tools.theme.border_default," px-4 ",bb_web_ds_tools.theme.bg_toolbar," shrink-0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$nav_tabs_$_iter__22508(s__22509){
return (new cljs.core.LazySeq(null,(function (){
var s__22509__$1 = s__22509;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22509__$1);
if(temp__5825__auto__){
var s__22509__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22509__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22509__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22511 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22510 = (0);
while(true){
if((i__22510 < size__5502__auto__)){
var map__22512 = cljs.core._nth(c__5501__auto__,i__22510);
var map__22512__$1 = cljs.core.__destructure_map(map__22512);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22512__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22512__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__22511,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__22510,map__22512,map__22512__$1,id,label,c__5501__auto__,size__5502__auto__,b__22511,s__22509__$2,temp__5825__auto__,map__22498,map__22498__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__22510,map__22512,map__22512__$1,id,label,c__5501__auto__,size__5502__auto__,b__22511,s__22509__$2,temp__5825__auto__,map__22498,map__22498__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__22655 = (i__22510 + (1));
i__22510 = G__22655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22511),bb_web_ds_tools$components$common$nav_tabs_$_iter__22508(cljs.core.chunk_rest(s__22509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22511),null);
}
} else {
var map__22513 = cljs.core.first(s__22509__$2);
var map__22513__$1 = cljs.core.__destructure_map(map__22513);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22513__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22513,map__22513__$1,id,label,s__22509__$2,temp__5825__auto__,map__22498,map__22498__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__22513,map__22513__$1,id,label,s__22509__$2,temp__5825__auto__,map__22498,map__22498__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$nav_tabs_$_iter__22508(cljs.core.rest(s__22509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(tabs);
})()], null);
});
/**
 * Renders a card that can be collapsed vertically.
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :title (string): The card title.
 *    - :default-expanded? (boolean): Initial state (default true).
 *    - :class (string): Extra classes for the container.
 *    - :header-class (string): Extra classes for the header.
 *    - :body-class (string): Extra classes for the body.
 *  children (rest): The content of the card.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.collapsible_card = (function bb_web_ds_tools$components$common$collapsible_card(var_args){
var args__5755__auto__ = [];
var len__5749__auto___22657 = arguments.length;
var i__5750__auto___22658 = (0);
while(true){
if((i__5750__auto___22658 < len__5749__auto___22657)){
args__5755__auto__.push((arguments[i__5750__auto___22658]));

var G__22659 = (i__5750__auto___22658 + (1));
i__5750__auto___22658 = G__22659;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.collapsible_card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.collapsible_card.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var with_let22517 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let22517","with-let22517",1815866462));
var temp__5829__auto___22660 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5829__auto___22660 == null)){
} else {
var c__20886__auto___22661 = temp__5829__auto___22660;
if((with_let22517.generation === c__20886__auto___22661.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let22517.generation = c__20886__auto___22661.ratomGeneration);
}

var init22519 = (with_let22517.length === (0));
var expanded_QMARK_ = ((((init22519) || (cljs.core.not(with_let22517.hasOwnProperty((0))))))?(with_let22517[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default-expanded?","default-expanded?",1897894874).cljs$core$IFn$_invoke$arity$2(props,true))):(with_let22517[(0)]));
var res22520 = (function (){var map__22539 = props;
var map__22539__$1 = cljs.core.__destructure_map(map__22539);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,new cljs.core.Keyword(null,"title","title",636505583));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var header_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,new cljs.core.Keyword(null,"header-class","header-class",-689805555));
var body_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22539__$1,new cljs.core.Keyword(null,"body-class","body-class",-633564203));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_card," rounded shadow-md ",bb_web_ds_tools.theme.text_primary," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center justify-between px-4 py-3 cursor-pointer select-none ",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?["border-b ",bb_web_ds_tools.theme.border_subtle].join(''):null)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(header_class)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["font-bold text-sm ",bb_web_ds_tools.theme.text_accent].join('')], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["focus:outline-none transition-transform duration-200 ",(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?"rotate-180":"rotate-0")].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"m19.5 8.25-7.5 7.5-7.5-7.5"], null)], null)], null)], null)], null),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(body_class)].join('')], null)], null),children):null)], null);
})();
return res22520;
}));

(bb_web_ds_tools.components.common.collapsible_card.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.collapsible_card.cljs$lang$applyTo = (function (seq22514){
var G__22515 = cljs.core.first(seq22514);
var seq22514__$1 = cljs.core.next(seq22514);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22515,seq22514__$1);
}));


//# sourceMappingURL=bb_web_ds_tools.components.common.js.map
