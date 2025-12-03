goog.provide('bb_web_ds_tools.components.common');
/**
 * Renders a styled button component.
 * 
 *   Args:
 *  props (map): Standard HTML attributes (on-click, class, disabled, etc.).
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.button = (function bb_web_ds_tools$components$common$button(var_args){
var args__5755__auto__ = [];
var len__5749__auto___26991 = arguments.length;
var i__5750__auto___26992 = (0);
while(true){
if((i__5750__auto___26992 < len__5749__auto___26991)){
args__5755__auto__.push((arguments[i__5750__auto___26992]));

var G__26993 = (i__5750__auto___26992 + (1));
i__5750__auto___26992 = G__26993;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," ",bb_web_ds_tools.theme.text_button," font-bold py-2 px-6 rounded shadow-sm transition-all duration-200 ",bb_web_ds_tools.theme.bg_button_disabled," ",bb_web_ds_tools.theme.text_disabled," disabled:cursor-not-allowed ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(props)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)], 0))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button.cljs$lang$applyTo = (function (seq26814){
var G__26815 = cljs.core.first(seq26814);
var seq26814__$1 = cljs.core.next(seq26814);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26815,seq26814__$1);
}));

/**
 * Renders a small styled button component.
 * 
 *   Args:
 *  props (map): Standard HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.button_xs = (function bb_web_ds_tools$components$common$button_xs(var_args){
var args__5755__auto__ = [];
var len__5749__auto___26994 = arguments.length;
var i__5750__auto___26995 = (0);
while(true){
if((i__5750__auto___26995 < len__5749__auto___26994)){
args__5755__auto__.push((arguments[i__5750__auto___26995]));

var G__26996 = (i__5750__auto___26995 + (1));
i__5750__auto___26995 = G__26996;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button_xs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_xs.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xs ",bb_web_ds_tools.theme.bg_button_xs," ",bb_web_ds_tools.theme.bg_button_xs_hover," ",bb_web_ds_tools.theme.text_button," px-2 py-1 rounded transition-colors ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(props)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543)], 0))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button_xs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_xs.cljs$lang$applyTo = (function (seq26839){
var G__26840 = cljs.core.first(seq26839);
var seq26839__$1 = cljs.core.next(seq26839);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26840,seq26839__$1);
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
var len__5749__auto___27002 = arguments.length;
var i__5750__auto___27003 = (0);
while(true){
if((i__5750__auto___27003 < len__5749__auto___27002)){
args__5755__auto__.push((arguments[i__5750__auto___27003]));

var G__27004 = (i__5750__auto___27003 + (1));
i__5750__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_info.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["!bg-blue-600 hover:!bg-blue-700 !text-white ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null)], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button_info.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_info.cljs$lang$applyTo = (function (seq26853){
var G__26854 = cljs.core.first(seq26853);
var seq26853__$1 = cljs.core.next(seq26853);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26854,seq26853__$1);
}));

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
bb_web_ds_tools.components.common.input = (function bb_web_ds_tools$components$common$input(p__26867){
var map__26868 = p__26867;
var map__26868__$1 = cljs.core.__destructure_map(map__26868);
var props = map__26868__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26868__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
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
var len__5749__auto___27008 = arguments.length;
var i__5750__auto___27009 = (0);
while(true){
if((i__5750__auto___27009 < len__5749__auto___27008)){
args__5755__auto__.push((arguments[i__5750__auto___27009]));

var G__27013 = (i__5750__auto___27009 + (1));
i__5750__auto___27009 = G__27013;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__26901 = props;
var map__26901__$1 = cljs.core.__destructure_map(map__26901);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26901__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26901__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
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
(bb_web_ds_tools.components.common.select.cljs$lang$applyTo = (function (seq26899){
var G__26900 = cljs.core.first(seq26899);
var seq26899__$1 = cljs.core.next(seq26899);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26900,seq26899__$1);
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
bb_web_ds_tools.components.common.textarea = (function bb_web_ds_tools$components$common$textarea(p__26902){
var map__26903 = p__26902;
var map__26903__$1 = cljs.core.__destructure_map(map__26903);
var props = map__26903__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26903__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
bb_web_ds_tools.components.common.pre_block = (function bb_web_ds_tools$components$common$pre_block(p__26904){
var map__26905 = p__26904;
var map__26905__$1 = cljs.core.__destructure_map(map__26905);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26905__$1,new cljs.core.Keyword(null,"content","content",15833224));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26905__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var len__5749__auto___27014 = arguments.length;
var i__5750__auto___27015 = (0);
while(true){
if((i__5750__auto___27015 < len__5749__auto___27014)){
args__5755__auto__.push((arguments[i__5750__auto___27015]));

var G__27016 = (i__5750__auto___27015 + (1));
i__5750__auto___27015 = G__27016;
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
(bb_web_ds_tools.components.common.card.cljs$lang$applyTo = (function (seq26906){
var G__26907 = cljs.core.first(seq26906);
var seq26906__$1 = cljs.core.next(seq26906);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26907,seq26906__$1);
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
var len__5749__auto___27017 = arguments.length;
var i__5750__auto___27018 = (0);
while(true){
if((i__5750__auto___27018 < len__5749__auto___27017)){
args__5755__auto__.push((arguments[i__5750__auto___27018]));

var G__27019 = (i__5750__auto___27018 + (1));
i__5750__auto___27018 = G__27019;
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
(bb_web_ds_tools.components.common.table_container.cljs$lang$applyTo = (function (seq26908){
var G__26909 = cljs.core.first(seq26908);
var seq26908__$1 = cljs.core.next(seq26908);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26909,seq26908__$1);
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
var len__5749__auto___27020 = arguments.length;
var i__5750__auto___27021 = (0);
while(true){
if((i__5750__auto___27021 < len__5749__auto___27020)){
args__5755__auto__.push((arguments[i__5750__auto___27021]));

var G__27023 = (i__5750__auto___27021 + (1));
i__5750__auto___27021 = G__27023;
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
(bb_web_ds_tools.components.common.table.cljs$lang$applyTo = (function (seq26912){
var G__26913 = cljs.core.first(seq26912);
var seq26912__$1 = cljs.core.next(seq26912);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26913,seq26912__$1);
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
var len__5749__auto___27027 = arguments.length;
var i__5750__auto___27028 = (0);
while(true){
if((i__5750__auto___27028 < len__5749__auto___27027)){
args__5755__auto__.push((arguments[i__5750__auto___27028]));

var G__27029 = (i__5750__auto___27028 + (1));
i__5750__auto___27028 = G__27029;
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
(bb_web_ds_tools.components.common.thead.cljs$lang$applyTo = (function (seq26914){
var G__26915 = cljs.core.first(seq26914);
var seq26914__$1 = cljs.core.next(seq26914);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26915,seq26914__$1);
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
var len__5749__auto___27030 = arguments.length;
var i__5750__auto___27031 = (0);
while(true){
if((i__5750__auto___27031 < len__5749__auto___27030)){
args__5755__auto__.push((arguments[i__5750__auto___27031]));

var G__27032 = (i__5750__auto___27031 + (1));
i__5750__auto___27031 = G__27032;
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
(bb_web_ds_tools.components.common.tbody.cljs$lang$applyTo = (function (seq26916){
var G__26917 = cljs.core.first(seq26916);
var seq26916__$1 = cljs.core.next(seq26916);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26917,seq26916__$1);
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
var len__5749__auto___27033 = arguments.length;
var i__5750__auto___27034 = (0);
while(true){
if((i__5750__auto___27034 < len__5749__auto___27033)){
args__5755__auto__.push((arguments[i__5750__auto___27034]));

var G__27035 = (i__5750__auto___27034 + (1));
i__5750__auto___27034 = G__27035;
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
(bb_web_ds_tools.components.common.tr.cljs$lang$applyTo = (function (seq26919){
var G__26920 = cljs.core.first(seq26919);
var seq26919__$1 = cljs.core.next(seq26919);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26920,seq26919__$1);
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
var len__5749__auto___27036 = arguments.length;
var i__5750__auto___27038 = (0);
while(true){
if((i__5750__auto___27038 < len__5749__auto___27036)){
args__5755__auto__.push((arguments[i__5750__auto___27038]));

var G__27039 = (i__5750__auto___27038 + (1));
i__5750__auto___27038 = G__27039;
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
(bb_web_ds_tools.components.common.th.cljs$lang$applyTo = (function (seq26934){
var G__26935 = cljs.core.first(seq26934);
var seq26934__$1 = cljs.core.next(seq26934);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26935,seq26934__$1);
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
var len__5749__auto___27044 = arguments.length;
var i__5750__auto___27045 = (0);
while(true){
if((i__5750__auto___27045 < len__5749__auto___27044)){
args__5755__auto__.push((arguments[i__5750__auto___27045]));

var G__27046 = (i__5750__auto___27045 + (1));
i__5750__auto___27045 = G__27046;
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
(bb_web_ds_tools.components.common.td.cljs$lang$applyTo = (function (seq26944){
var G__26945 = cljs.core.first(seq26944);
var seq26944__$1 = cljs.core.next(seq26944);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26945,seq26944__$1);
}));

/**
 * Deprecated. Renders nothing.
 * 
 *   Args:
 *  _ (any): Unused.
 * 
 *   Returns:
 *  nil.
 */
bb_web_ds_tools.components.common.page_header = (function bb_web_ds_tools$components$common$page_header(_){
return null;
});
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
var len__5749__auto___27048 = arguments.length;
var i__5750__auto___27049 = (0);
while(true){
if((i__5750__auto___27049 < len__5749__auto___27048)){
args__5755__auto__.push((arguments[i__5750__auto___27049]));

var G__27050 = (i__5750__auto___27049 + (1));
i__5750__auto___27049 = G__27050;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__26957){
var vec__26958 = p__26957;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26958,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null),props], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.052.68-.107 1.022-.166m-1.022.165L5.34 19.673a2.25 2.25 0 0 0 2.244 2.077H8.084a2.25 2.25 0 0 0 2.244-2.077L14.74 9m-6.42 10.668L9.26 9m9.968-3.21c-1.378-.225-2.776-.39-4.188-.475M6.887 5.79c1.378-.225 2.776-.39 4.188-.475m0 0V4.868a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.912m-6 0h6m-6 0a48.11 48.11 0 0 1-3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"], null)], null)], null);
}));

(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$applyTo = (function (seq26952){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26952));
}));

bb_web_ds_tools.components.common.nav_items = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Workspaces",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"workspaces","workspaces",168825563),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC2"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDDC4\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCA"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2705"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDF6F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC8"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83E\uDD16"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Pyodide",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"pyodide","pyodide",-2009894763),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDC0D"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Editor",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCDD"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Repl",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCBB"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"R",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"r-repl","r-repl",-2114415565),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDDF7"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2699\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCDC"], null)], null);
/**
 * Renders a horizontal scrollable tab bar.
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :tabs (seq): List of maps with :id, :label, :on-close.
 *    - :active-tab-id (any): ID of active tab.
 *    - :on-change (fn): Callback(id) on tab switch.
 *    - :on-add (fn): Callback() on add button click.
 *    - :class (string): CSS classes.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.tabs = (function bb_web_ds_tools$components$common$tabs(p__26961){
var map__26962 = p__26961;
var map__26962__$1 = cljs.core.__destructure_map(map__26962);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26962__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 border-b ",bb_web_ds_tools.theme.border_default," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$tabs_$_iter__26963(s__26964){
return (new cljs.core.LazySeq(null,(function (){
var s__26964__$1 = s__26964;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26964__$1);
if(temp__5825__auto__){
var s__26964__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26964__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__26964__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__26966 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__26965 = (0);
while(true){
if((i__26965 < size__5502__auto__)){
var map__26967 = cljs.core._nth(c__5501__auto__,i__26965);
var map__26967__$1 = cljs.core.__destructure_map(map__26967);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26967__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26967__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26967__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
cljs.core.chunk_append(b__26966,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26965,map__26967,map__26967__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26966,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__26965,map__26967,map__26967__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26966,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26965,map__26967,map__26967__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26966,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(i__26965,map__26967,map__26967__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26966,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__27060 = (i__26965 + (1));
i__26965 = G__27060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26966),bb_web_ds_tools$components$common$tabs_$_iter__26963(cljs.core.chunk_rest(s__26964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26966),null);
}
} else {
var map__26968 = cljs.core.first(s__26964__$2);
var map__26968__$1 = cljs.core.__destructure_map(map__26968);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26968__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26968__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26968__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26968,map__26968__$1,id,label,on_close,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__26968,map__26968__$1,id,label,on_close,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26968,map__26968__$1,id,label,on_close,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(map__26968,map__26968__$1,id,label,on_close,s__26964__$2,temp__5825__auto__,map__26962,map__26962__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$tabs_$_iter__26963(cljs.core.rest(s__26964__$2)));
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
bb_web_ds_tools.components.common.nav_tabs = (function bb_web_ds_tools$components$common$nav_tabs(p__26979){
var map__26980 = p__26979;
var map__26980__$1 = cljs.core.__destructure_map(map__26980);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26980__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-row space-x-6 border-b ",bb_web_ds_tools.theme.border_default," px-4 ",bb_web_ds_tools.theme.bg_toolbar," shrink-0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$nav_tabs_$_iter__26981(s__26982){
return (new cljs.core.LazySeq(null,(function (){
var s__26982__$1 = s__26982;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26982__$1);
if(temp__5825__auto__){
var s__26982__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26982__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__26982__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__26984 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__26983 = (0);
while(true){
if((i__26983 < size__5502__auto__)){
var map__26985 = cljs.core._nth(c__5501__auto__,i__26983);
var map__26985__$1 = cljs.core.__destructure_map(map__26985);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26985__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26985__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__26984,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26983,map__26985,map__26985__$1,id,label,c__5501__auto__,size__5502__auto__,b__26984,s__26982__$2,temp__5825__auto__,map__26980,map__26980__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__26983,map__26985,map__26985__$1,id,label,c__5501__auto__,size__5502__auto__,b__26984,s__26982__$2,temp__5825__auto__,map__26980,map__26980__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__27067 = (i__26983 + (1));
i__26983 = G__27067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26984),bb_web_ds_tools$components$common$nav_tabs_$_iter__26981(cljs.core.chunk_rest(s__26982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26984),null);
}
} else {
var map__26986 = cljs.core.first(s__26982__$2);
var map__26986__$1 = cljs.core.__destructure_map(map__26986);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26986__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26986,map__26986__$1,id,label,s__26982__$2,temp__5825__auto__,map__26980,map__26980__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__26986,map__26986__$1,id,label,s__26982__$2,temp__5825__auto__,map__26980,map__26980__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$nav_tabs_$_iter__26981(cljs.core.rest(s__26982__$2)));
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

//# sourceMappingURL=bb_web_ds_tools.components.common.js.map
