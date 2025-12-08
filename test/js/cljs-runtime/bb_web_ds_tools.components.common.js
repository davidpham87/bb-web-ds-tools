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
var len__5749__auto___27006 = arguments.length;
var i__5750__auto___27007 = (0);
while(true){
if((i__5750__auto___27007 < len__5749__auto___27006)){
args__5755__auto__.push((arguments[i__5750__auto___27007]));

var G__27008 = (i__5750__auto___27007 + (1));
i__5750__auto___27007 = G__27008;
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
(bb_web_ds_tools.components.common.button.cljs$lang$applyTo = (function (seq26836){
var G__26837 = cljs.core.first(seq26836);
var seq26836__$1 = cljs.core.next(seq26836);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26837,seq26836__$1);
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
var len__5749__auto___27015 = arguments.length;
var i__5750__auto___27016 = (0);
while(true){
if((i__5750__auto___27016 < len__5749__auto___27015)){
args__5755__auto__.push((arguments[i__5750__auto___27016]));

var G__27017 = (i__5750__auto___27016 + (1));
i__5750__auto___27016 = G__27017;
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
(bb_web_ds_tools.components.common.button_xs.cljs$lang$applyTo = (function (seq26852){
var G__26853 = cljs.core.first(seq26852);
var seq26852__$1 = cljs.core.next(seq26852);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26853,seq26852__$1);
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
var len__5749__auto___27018 = arguments.length;
var i__5750__auto___27019 = (0);
while(true){
if((i__5750__auto___27019 < len__5749__auto___27018)){
args__5755__auto__.push((arguments[i__5750__auto___27019]));

var G__27020 = (i__5750__auto___27019 + (1));
i__5750__auto___27019 = G__27020;
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
(bb_web_ds_tools.components.common.button_info.cljs$lang$applyTo = (function (seq26869){
var G__26870 = cljs.core.first(seq26869);
var seq26869__$1 = cljs.core.next(seq26869);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26870,seq26869__$1);
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
bb_web_ds_tools.components.common.input = (function bb_web_ds_tools$components$common$input(p__26885){
var map__26886 = p__26885;
var map__26886__$1 = cljs.core.__destructure_map(map__26886);
var props = map__26886__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26886__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26886__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26886__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26886__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26886__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26886__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26886__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
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
var len__5749__auto___27026 = arguments.length;
var i__5750__auto___27027 = (0);
while(true){
if((i__5750__auto___27027 < len__5749__auto___27026)){
args__5755__auto__.push((arguments[i__5750__auto___27027]));

var G__27028 = (i__5750__auto___27027 + (1));
i__5750__auto___27027 = G__27028;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__26896 = props;
var map__26896__$1 = cljs.core.__destructure_map(map__26896);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26896__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26896__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
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
(bb_web_ds_tools.components.common.select.cljs$lang$applyTo = (function (seq26894){
var G__26895 = cljs.core.first(seq26894);
var seq26894__$1 = cljs.core.next(seq26894);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26895,seq26894__$1);
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
bb_web_ds_tools.components.common.textarea = (function bb_web_ds_tools$components$common$textarea(p__26927){
var map__26928 = p__26927;
var map__26928__$1 = cljs.core.__destructure_map(map__26928);
var props = map__26928__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26928__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
bb_web_ds_tools.components.common.pre_block = (function bb_web_ds_tools$components$common$pre_block(p__26929){
var map__26930 = p__26929;
var map__26930__$1 = cljs.core.__destructure_map(map__26930);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26930__$1,new cljs.core.Keyword(null,"content","content",15833224));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26930__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
return bb_web_ds_tools.components.common.card.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.card.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.theme.bg_card," rounded shadow-md ",bb_web_ds_tools.theme.text_primary," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.common.card.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.card.cljs$lang$applyTo = (function (seq26931){
var G__26932 = cljs.core.first(seq26931);
var seq26931__$1 = cljs.core.next(seq26931);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26932,seq26931__$1);
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
var len__5749__auto___27036 = arguments.length;
var i__5750__auto___27037 = (0);
while(true){
if((i__5750__auto___27037 < len__5749__auto___27036)){
args__5755__auto__.push((arguments[i__5750__auto___27037]));

var G__27038 = (i__5750__auto___27037 + (1));
i__5750__auto___27037 = G__27038;
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
(bb_web_ds_tools.components.common.table_container.cljs$lang$applyTo = (function (seq26938){
var G__26939 = cljs.core.first(seq26938);
var seq26938__$1 = cljs.core.next(seq26938);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26939,seq26938__$1);
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
var len__5749__auto___27039 = arguments.length;
var i__5750__auto___27040 = (0);
while(true){
if((i__5750__auto___27040 < len__5749__auto___27039)){
args__5755__auto__.push((arguments[i__5750__auto___27040]));

var G__27041 = (i__5750__auto___27040 + (1));
i__5750__auto___27040 = G__27041;
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
(bb_web_ds_tools.components.common.table.cljs$lang$applyTo = (function (seq26944){
var G__26945 = cljs.core.first(seq26944);
var seq26944__$1 = cljs.core.next(seq26944);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26945,seq26944__$1);
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
var len__5749__auto___27043 = arguments.length;
var i__5750__auto___27044 = (0);
while(true){
if((i__5750__auto___27044 < len__5749__auto___27043)){
args__5755__auto__.push((arguments[i__5750__auto___27044]));

var G__27045 = (i__5750__auto___27044 + (1));
i__5750__auto___27044 = G__27045;
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
(bb_web_ds_tools.components.common.thead.cljs$lang$applyTo = (function (seq26946){
var G__26947 = cljs.core.first(seq26946);
var seq26946__$1 = cljs.core.next(seq26946);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26947,seq26946__$1);
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
var len__5749__auto___27046 = arguments.length;
var i__5750__auto___27047 = (0);
while(true){
if((i__5750__auto___27047 < len__5749__auto___27046)){
args__5755__auto__.push((arguments[i__5750__auto___27047]));

var G__27048 = (i__5750__auto___27047 + (1));
i__5750__auto___27047 = G__27048;
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
(bb_web_ds_tools.components.common.tbody.cljs$lang$applyTo = (function (seq26948){
var G__26949 = cljs.core.first(seq26948);
var seq26948__$1 = cljs.core.next(seq26948);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26949,seq26948__$1);
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
var len__5749__auto___27049 = arguments.length;
var i__5750__auto___27050 = (0);
while(true){
if((i__5750__auto___27050 < len__5749__auto___27049)){
args__5755__auto__.push((arguments[i__5750__auto___27050]));

var G__27051 = (i__5750__auto___27050 + (1));
i__5750__auto___27050 = G__27051;
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
(bb_web_ds_tools.components.common.tr.cljs$lang$applyTo = (function (seq26950){
var G__26951 = cljs.core.first(seq26950);
var seq26950__$1 = cljs.core.next(seq26950);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26951,seq26950__$1);
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
var len__5749__auto___27056 = arguments.length;
var i__5750__auto___27057 = (0);
while(true){
if((i__5750__auto___27057 < len__5749__auto___27056)){
args__5755__auto__.push((arguments[i__5750__auto___27057]));

var G__27058 = (i__5750__auto___27057 + (1));
i__5750__auto___27057 = G__27058;
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
(bb_web_ds_tools.components.common.th.cljs$lang$applyTo = (function (seq26958){
var G__26959 = cljs.core.first(seq26958);
var seq26958__$1 = cljs.core.next(seq26958);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26959,seq26958__$1);
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
var len__5749__auto___27060 = arguments.length;
var i__5750__auto___27061 = (0);
while(true){
if((i__5750__auto___27061 < len__5749__auto___27060)){
args__5755__auto__.push((arguments[i__5750__auto___27061]));

var G__27062 = (i__5750__auto___27061 + (1));
i__5750__auto___27061 = G__27062;
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
(bb_web_ds_tools.components.common.td.cljs$lang$applyTo = (function (seq26964){
var G__26965 = cljs.core.first(seq26964);
var seq26964__$1 = cljs.core.next(seq26964);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26965,seq26964__$1);
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
var len__5749__auto___27064 = arguments.length;
var i__5750__auto___27065 = (0);
while(true){
if((i__5750__auto___27065 < len__5749__auto___27064)){
args__5755__auto__.push((arguments[i__5750__auto___27065]));

var G__27066 = (i__5750__auto___27065 + (1));
i__5750__auto___27065 = G__27066;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__26968){
var vec__26969 = p__26968;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26969,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null),props], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.052.68-.107 1.022-.166m-1.022.165L5.34 19.673a2.25 2.25 0 0 0 2.244 2.077H8.084a2.25 2.25 0 0 0 2.244-2.077L14.74 9m-6.42 10.668L9.26 9m9.968-3.21c-1.378-.225-2.776-.39-4.188-.475M6.887 5.79c1.378-.225 2.776-.39 4.188-.475m0 0V4.868a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.912m-6 0h6m-6 0a48.11 48.11 0 0 1-3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"], null)], null)], null);
}));

(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$applyTo = (function (seq26966){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26966));
}));

bb_web_ds_tools.components.common.nav_items = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Workspaces",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"workspaces","workspaces",168825563),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC2"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDDC4\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCBB"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCA"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2705"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDF6F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC8"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83E\uDD16"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2699\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCDC"], null)], null);
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
bb_web_ds_tools.components.common.tabs = (function bb_web_ds_tools$components$common$tabs(p__26975){
var map__26976 = p__26975;
var map__26976__$1 = cljs.core.__destructure_map(map__26976);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26976__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26976__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26976__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26976__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26976__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 border-b ",bb_web_ds_tools.theme.border_default," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$tabs_$_iter__26977(s__26978){
return (new cljs.core.LazySeq(null,(function (){
var s__26978__$1 = s__26978;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26978__$1);
if(temp__5825__auto__){
var s__26978__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26978__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__26978__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__26980 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__26979 = (0);
while(true){
if((i__26979 < size__5502__auto__)){
var map__26986 = cljs.core._nth(c__5501__auto__,i__26979);
var map__26986__$1 = cljs.core.__destructure_map(map__26986);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26986__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26986__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26986__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
cljs.core.chunk_append(b__26980,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26979,map__26986,map__26986__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26980,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__26979,map__26986,map__26986__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26980,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26979,map__26986,map__26986__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26980,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(i__26979,map__26986,map__26986__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__26980,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__27072 = (i__26979 + (1));
i__26979 = G__27072;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26980),bb_web_ds_tools$components$common$tabs_$_iter__26977(cljs.core.chunk_rest(s__26978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26980),null);
}
} else {
var map__26989 = cljs.core.first(s__26978__$2);
var map__26989__$1 = cljs.core.__destructure_map(map__26989);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26989,map__26989__$1,id,label,on_close,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__26989,map__26989__$1,id,label,on_close,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26989,map__26989__$1,id,label,on_close,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(map__26989,map__26989__$1,id,label,on_close,s__26978__$2,temp__5825__auto__,map__26976,map__26976__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$tabs_$_iter__26977(cljs.core.rest(s__26978__$2)));
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
bb_web_ds_tools.components.common.nav_tabs = (function bb_web_ds_tools$components$common$nav_tabs(p__26994){
var map__26995 = p__26994;
var map__26995__$1 = cljs.core.__destructure_map(map__26995);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26995__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-row space-x-6 border-b ",bb_web_ds_tools.theme.border_default," px-4 ",bb_web_ds_tools.theme.bg_toolbar," shrink-0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$nav_tabs_$_iter__26996(s__26997){
return (new cljs.core.LazySeq(null,(function (){
var s__26997__$1 = s__26997;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__26997__$1);
if(temp__5825__auto__){
var s__26997__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26997__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__26997__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__26999 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__26998 = (0);
while(true){
if((i__26998 < size__5502__auto__)){
var map__27000 = cljs.core._nth(c__5501__auto__,i__26998);
var map__27000__$1 = cljs.core.__destructure_map(map__27000);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27000__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27000__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__26999,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26998,map__27000,map__27000__$1,id,label,c__5501__auto__,size__5502__auto__,b__26999,s__26997__$2,temp__5825__auto__,map__26995,map__26995__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__26998,map__27000,map__27000__$1,id,label,c__5501__auto__,size__5502__auto__,b__26999,s__26997__$2,temp__5825__auto__,map__26995,map__26995__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__27076 = (i__26998 + (1));
i__26998 = G__27076;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26999),bb_web_ds_tools$components$common$nav_tabs_$_iter__26996(cljs.core.chunk_rest(s__26997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26999),null);
}
} else {
var map__27001 = cljs.core.first(s__26997__$2);
var map__27001__$1 = cljs.core.__destructure_map(map__27001);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27001__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27001__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27001,map__27001__$1,id,label,s__26997__$2,temp__5825__auto__,map__26995,map__26995__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__27001,map__27001__$1,id,label,s__26997__$2,temp__5825__auto__,map__26995,map__26995__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$nav_tabs_$_iter__26996(cljs.core.rest(s__26997__$2)));
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
