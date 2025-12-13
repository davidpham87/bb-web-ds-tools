goog.provide('bb_web_ds_tools.components.common');
/**
 * Returns CSS classes for a button based on variant and disabled state.
 */
bb_web_ds_tools.components.common.get_button_classes = (function bb_web_ds_tools$components$common$get_button_classes(variant,disabled_QMARK_,size){
var size_classes = (function (){var G__26781 = size;
var G__26781__$1 = (((G__26781 instanceof cljs.core.Keyword))?G__26781.fqn:null);
switch (G__26781__$1) {
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
var color_classes = (cljs.core.truth_(disabled_QMARK_)?[bb_web_ds_tools.theme.bg_button_disabled," ",bb_web_ds_tools.theme.text_disabled," cursor-not-allowed"].join(''):(function (){var G__26791 = variant;
var G__26791__$1 = (((G__26791 instanceof cljs.core.Keyword))?G__26791.fqn:null);
switch (G__26791__$1) {
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
 * Unified component replacing button-sm, button-md, button-xs.
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

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__26808 = props;
var map__26808__$1 = cljs.core.__destructure_map(map__26808);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26808__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26808__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26808__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26808__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655));
var clean_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"variant","variant",-424354234),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"size","size",1098693007)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clean_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[bb_web_ds_tools.components.common.get_button_classes(variant,disabled,size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button.cljs$lang$applyTo = (function (seq26796){
var G__26797 = cljs.core.first(seq26796);
var seq26796__$1 = cljs.core.next(seq26796);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26797,seq26796__$1);
}));

/**
 * DEPRECATED: Use (button {:size :sm} ...).
 * Renders a small styled button component.
 * Style: py-1 px-3 text-sm font-medium.
 * 
 *   Args:
 *  props (map): Standard HTML attributes.
 *    - :variant (keyword): :primary, :danger, or nil (default).
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.button_sm = (function bb_web_ds_tools$components$common$button_sm(var_args){
var args__5755__auto__ = [];
var len__5749__auto___27054 = arguments.length;
var i__5750__auto___27055 = (0);
while(true){
if((i__5750__auto___27055 < len__5749__auto___27054)){
args__5755__auto__.push((arguments[i__5750__auto___27055]));

var G__27056 = (i__5750__auto___27055 + (1));
i__5750__auto___27055 = G__27056;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button_sm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_sm.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"sm","sm",-1402575065))], null),children);
}));

(bb_web_ds_tools.components.common.button_sm.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_sm.cljs$lang$applyTo = (function (seq26815){
var G__26816 = cljs.core.first(seq26815);
var seq26815__$1 = cljs.core.next(seq26815);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26816,seq26815__$1);
}));

/**
 * DEPRECATED: Use (button {:size :md} ...).
 * Renders a medium (standard) styled button component.
 * Style: py-2 px-4 text-sm font-bold.
 * 
 *   Args:
 *  props (map): Standard HTML attributes.
 *    - :variant (keyword): :primary, :danger, or nil (default).
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.button_md = (function bb_web_ds_tools$components$common$button_md(var_args){
var args__5755__auto__ = [];
var len__5749__auto___27057 = arguments.length;
var i__5750__auto___27058 = (0);
while(true){
if((i__5750__auto___27058 < len__5749__auto___27057)){
args__5755__auto__.push((arguments[i__5750__auto___27058]));

var G__27059 = (i__5750__auto___27058 + (1));
i__5750__auto___27058 = G__27059;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button_md.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_md.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"md","md",707286655))], null),children);
}));

(bb_web_ds_tools.components.common.button_md.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_md.cljs$lang$applyTo = (function (seq26868){
var G__26869 = cljs.core.first(seq26868);
var seq26868__$1 = cljs.core.next(seq26868);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26869,seq26868__$1);
}));

/**
 * DEPRECATED: Use (button {:size :xs} ...).
 * Renders an extra small styled button component.
 * Style: text-xs px-2 py-1.
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
return bb_web_ds_tools.components.common.button_xs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_xs.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"xs","xs",649443341))], null),children);
}));

(bb_web_ds_tools.components.common.button_xs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_xs.cljs$lang$applyTo = (function (seq26875){
var G__26876 = cljs.core.first(seq26875);
var seq26875__$1 = cljs.core.next(seq26875);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26876,seq26875__$1);
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
var len__5749__auto___27063 = arguments.length;
var i__5750__auto___27064 = (0);
while(true){
if((i__5750__auto___27064 < len__5749__auto___27063)){
args__5755__auto__.push((arguments[i__5750__auto___27064]));

var G__27065 = (i__5750__auto___27064 + (1));
i__5750__auto___27064 = G__27065;
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
(bb_web_ds_tools.components.common.button_info.cljs$lang$applyTo = (function (seq26881){
var G__26882 = cljs.core.first(seq26881);
var seq26881__$1 = cljs.core.next(seq26881);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26882,seq26881__$1);
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
var len__5749__auto___27066 = arguments.length;
var i__5750__auto___27067 = (0);
while(true){
if((i__5750__auto___27067 < len__5749__auto___27066)){
args__5755__auto__.push((arguments[i__5750__auto___27067]));

var G__27068 = (i__5750__auto___27067 + (1));
i__5750__auto___27067 = G__27068;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__26891 = props;
var map__26891__$1 = cljs.core.__destructure_map(map__26891);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26891__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
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
(bb_web_ds_tools.components.common.select.cljs$lang$applyTo = (function (seq26889){
var G__26890 = cljs.core.first(seq26889);
var seq26889__$1 = cljs.core.next(seq26889);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26890,seq26889__$1);
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
bb_web_ds_tools.components.common.textarea = (function bb_web_ds_tools$components$common$textarea(p__26894){
var map__26895 = p__26894;
var map__26895__$1 = cljs.core.__destructure_map(map__26895);
var props = map__26895__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26895__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26895__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26895__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26895__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26895__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
bb_web_ds_tools.components.common.pre_block = (function bb_web_ds_tools$components$common$pre_block(p__26898){
var map__26899 = p__26898;
var map__26899__$1 = cljs.core.__destructure_map(map__26899);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26899__$1,new cljs.core.Keyword(null,"content","content",15833224));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26899__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var len__5749__auto___27069 = arguments.length;
var i__5750__auto___27070 = (0);
while(true){
if((i__5750__auto___27070 < len__5749__auto___27069)){
args__5755__auto__.push((arguments[i__5750__auto___27070]));

var G__27071 = (i__5750__auto___27070 + (1));
i__5750__auto___27070 = G__27071;
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
(bb_web_ds_tools.components.common.card.cljs$lang$applyTo = (function (seq26901){
var G__26902 = cljs.core.first(seq26901);
var seq26901__$1 = cljs.core.next(seq26901);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26902,seq26901__$1);
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
var len__5749__auto___27072 = arguments.length;
var i__5750__auto___27073 = (0);
while(true){
if((i__5750__auto___27073 < len__5749__auto___27072)){
args__5755__auto__.push((arguments[i__5750__auto___27073]));

var G__27074 = (i__5750__auto___27073 + (1));
i__5750__auto___27073 = G__27074;
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
(bb_web_ds_tools.components.common.table_container.cljs$lang$applyTo = (function (seq26915){
var G__26916 = cljs.core.first(seq26915);
var seq26915__$1 = cljs.core.next(seq26915);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26916,seq26915__$1);
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
var len__5749__auto___27076 = arguments.length;
var i__5750__auto___27077 = (0);
while(true){
if((i__5750__auto___27077 < len__5749__auto___27076)){
args__5755__auto__.push((arguments[i__5750__auto___27077]));

var G__27078 = (i__5750__auto___27077 + (1));
i__5750__auto___27077 = G__27078;
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
(bb_web_ds_tools.components.common.table.cljs$lang$applyTo = (function (seq26927){
var G__26928 = cljs.core.first(seq26927);
var seq26927__$1 = cljs.core.next(seq26927);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26928,seq26927__$1);
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
var len__5749__auto___27079 = arguments.length;
var i__5750__auto___27080 = (0);
while(true){
if((i__5750__auto___27080 < len__5749__auto___27079)){
args__5755__auto__.push((arguments[i__5750__auto___27080]));

var G__27081 = (i__5750__auto___27080 + (1));
i__5750__auto___27080 = G__27081;
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
(bb_web_ds_tools.components.common.thead.cljs$lang$applyTo = (function (seq26933){
var G__26934 = cljs.core.first(seq26933);
var seq26933__$1 = cljs.core.next(seq26933);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26934,seq26933__$1);
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
var len__5749__auto___27082 = arguments.length;
var i__5750__auto___27083 = (0);
while(true){
if((i__5750__auto___27083 < len__5749__auto___27082)){
args__5755__auto__.push((arguments[i__5750__auto___27083]));

var G__27084 = (i__5750__auto___27083 + (1));
i__5750__auto___27083 = G__27084;
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
(bb_web_ds_tools.components.common.tbody.cljs$lang$applyTo = (function (seq26938){
var G__26939 = cljs.core.first(seq26938);
var seq26938__$1 = cljs.core.next(seq26938);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26939,seq26938__$1);
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
var len__5749__auto___27085 = arguments.length;
var i__5750__auto___27086 = (0);
while(true){
if((i__5750__auto___27086 < len__5749__auto___27085)){
args__5755__auto__.push((arguments[i__5750__auto___27086]));

var G__27087 = (i__5750__auto___27086 + (1));
i__5750__auto___27086 = G__27087;
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
(bb_web_ds_tools.components.common.tr.cljs$lang$applyTo = (function (seq26959){
var G__26960 = cljs.core.first(seq26959);
var seq26959__$1 = cljs.core.next(seq26959);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26960,seq26959__$1);
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
var len__5749__auto___27088 = arguments.length;
var i__5750__auto___27089 = (0);
while(true){
if((i__5750__auto___27089 < len__5749__auto___27088)){
args__5755__auto__.push((arguments[i__5750__auto___27089]));

var G__27090 = (i__5750__auto___27089 + (1));
i__5750__auto___27089 = G__27090;
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
(bb_web_ds_tools.components.common.th.cljs$lang$applyTo = (function (seq26980){
var G__26981 = cljs.core.first(seq26980);
var seq26980__$1 = cljs.core.next(seq26980);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26981,seq26980__$1);
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
var len__5749__auto___27091 = arguments.length;
var i__5750__auto___27092 = (0);
while(true){
if((i__5750__auto___27092 < len__5749__auto___27091)){
args__5755__auto__.push((arguments[i__5750__auto___27092]));

var G__27093 = (i__5750__auto___27092 + (1));
i__5750__auto___27092 = G__27093;
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
(bb_web_ds_tools.components.common.td.cljs$lang$applyTo = (function (seq26988){
var G__26989 = cljs.core.first(seq26988);
var seq26988__$1 = cljs.core.next(seq26988);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26989,seq26988__$1);
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
var len__5749__auto___27094 = arguments.length;
var i__5750__auto___27095 = (0);
while(true){
if((i__5750__auto___27095 < len__5749__auto___27094)){
args__5755__auto__.push((arguments[i__5750__auto___27095]));

var G__27096 = (i__5750__auto___27095 + (1));
i__5750__auto___27095 = G__27096;
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
(bb_web_ds_tools.components.common.page_header.cljs$lang$applyTo = (function (seq27000){
var G__27001 = cljs.core.first(seq27000);
var seq27000__$1 = cljs.core.next(seq27000);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27001,seq27000__$1);
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
var len__5749__auto___27097 = arguments.length;
var i__5750__auto___27098 = (0);
while(true){
if((i__5750__auto___27098 < len__5749__auto___27097)){
args__5755__auto__.push((arguments[i__5750__auto___27098]));

var G__27099 = (i__5750__auto___27098 + (1));
i__5750__auto___27098 = G__27099;
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
(bb_web_ds_tools.components.common.section_header.cljs$lang$applyTo = (function (seq27008){
var G__27009 = cljs.core.first(seq27008);
var seq27008__$1 = cljs.core.next(seq27008);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27009,seq27008__$1);
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
var len__5749__auto___27100 = arguments.length;
var i__5750__auto___27101 = (0);
while(true){
if((i__5750__auto___27101 < len__5749__auto___27100)){
args__5755__auto__.push((arguments[i__5750__auto___27101]));

var G__27102 = (i__5750__auto___27101 + (1));
i__5750__auto___27101 = G__27102;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__27019){
var vec__27020 = p__27019;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27020,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null),props], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.052.68-.107 1.022-.166m-1.022.165L5.34 19.673a2.25 2.25 0 0 0 2.244 2.077H8.084a2.25 2.25 0 0 0 2.244-2.077L14.74 9m-6.42 10.668L9.26 9m9.968-3.21c-1.378-.225-2.776-.39-4.188-.475M6.887 5.79c1.378-.225 2.776-.39 4.188-.475m0 0V4.868a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.912m-6 0h6m-6 0a48.11 48.11 0 0 1-3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"], null)], null)], null);
}));

(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$applyTo = (function (seq27018){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27018));
}));

bb_web_ds_tools.components.common.nav_items = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCCA"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCC8"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCBB"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2705"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83C\uDF6F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83E\uDD16"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDDC4\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"icon","icon",1679606541),"\u2699\uFE0F"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"icon","icon",1679606541),"\uD83D\uDCDC"], null)], null);
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
bb_web_ds_tools.components.common.tabs = (function bb_web_ds_tools$components$common$tabs(p__27029){
var map__27030 = p__27029;
var map__27030__$1 = cljs.core.__destructure_map(map__27030);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27030__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 border-b ",bb_web_ds_tools.theme.border_default," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$tabs_$_iter__27031(s__27032){
return (new cljs.core.LazySeq(null,(function (){
var s__27032__$1 = s__27032;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27032__$1);
if(temp__5825__auto__){
var s__27032__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27032__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27032__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27034 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27033 = (0);
while(true){
if((i__27033 < size__5502__auto__)){
var map__27035 = cljs.core._nth(c__5501__auto__,i__27033);
var map__27035__$1 = cljs.core.__destructure_map(map__27035);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27035__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27035__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27035__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
cljs.core.chunk_append(b__27034,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27033,map__27035,map__27035__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__27034,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__27033,map__27035,map__27035__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__27034,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27033,map__27035,map__27035__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__27034,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(i__27033,map__27035,map__27035__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__27034,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__27103 = (i__27033 + (1));
i__27033 = G__27103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27034),bb_web_ds_tools$components$common$tabs_$_iter__27031(cljs.core.chunk_rest(s__27032__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27034),null);
}
} else {
var map__27036 = cljs.core.first(s__27032__$2);
var map__27036__$1 = cljs.core.__destructure_map(map__27036);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27036__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27036__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27036__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27036,map__27036__$1,id,label,on_close,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__27036,map__27036__$1,id,label,on_close,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27036,map__27036__$1,id,label,on_close,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(map__27036,map__27036__$1,id,label,on_close,s__27032__$2,temp__5825__auto__,map__27030,map__27030__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$tabs_$_iter__27031(cljs.core.rest(s__27032__$2)));
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
bb_web_ds_tools.components.common.nav_tabs = (function bb_web_ds_tools$components$common$nav_tabs(p__27037){
var map__27038 = p__27037;
var map__27038__$1 = cljs.core.__destructure_map(map__27038);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27038__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27038__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27038__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27038__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-row space-x-6 border-b ",bb_web_ds_tools.theme.border_default," px-4 ",bb_web_ds_tools.theme.bg_toolbar," shrink-0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$nav_tabs_$_iter__27039(s__27040){
return (new cljs.core.LazySeq(null,(function (){
var s__27040__$1 = s__27040;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__27040__$1);
if(temp__5825__auto__){
var s__27040__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27040__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__27040__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__27042 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__27041 = (0);
while(true){
if((i__27041 < size__5502__auto__)){
var map__27043 = cljs.core._nth(c__5501__auto__,i__27041);
var map__27043__$1 = cljs.core.__destructure_map(map__27043);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27043__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27043__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__27042,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27041,map__27043,map__27043__$1,id,label,c__5501__auto__,size__5502__auto__,b__27042,s__27040__$2,temp__5825__auto__,map__27038,map__27038__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__27041,map__27043,map__27043__$1,id,label,c__5501__auto__,size__5502__auto__,b__27042,s__27040__$2,temp__5825__auto__,map__27038,map__27038__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__27104 = (i__27041 + (1));
i__27041 = G__27104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27042),bb_web_ds_tools$components$common$nav_tabs_$_iter__27039(cljs.core.chunk_rest(s__27040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27042),null);
}
} else {
var map__27044 = cljs.core.first(s__27040__$2);
var map__27044__$1 = cljs.core.__destructure_map(map__27044);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27044__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27044__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27044,map__27044__$1,id,label,s__27040__$2,temp__5825__auto__,map__27038,map__27038__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__27044,map__27044__$1,id,label,s__27040__$2,temp__5825__auto__,map__27038,map__27038__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$nav_tabs_$_iter__27039(cljs.core.rest(s__27040__$2)));
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
