var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.theme.js");
require("./re_frame.core.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.common.js");

goog.provide('bb_web_ds_tools.components.common');
/**
 * Returns CSS classes for a button based on variant and disabled state.
 */
bb_web_ds_tools.components.common.get_button_classes = (function bb_web_ds_tools$components$common$get_button_classes(variant,disabled_QMARK_){
var base = ["rounded shadow-sm transition-all duration-200 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(disabled_QMARK_)?[bb_web_ds_tools.theme.bg_button_disabled," ",bb_web_ds_tools.theme.text_disabled," cursor-not-allowed"].join(''):(function (){var G__24757 = variant;
var G__24757__$1 = (((G__24757 instanceof cljs.core.Keyword))?G__24757.fqn:null);
switch (G__24757__$1) {
case "primary":
return [bb_web_ds_tools.theme.bg_button_primary," ",bb_web_ds_tools.theme.bg_button_primary_hover," ",bb_web_ds_tools.theme.text_button_primary].join('');

break;
case "danger":
return [bb_web_ds_tools.theme.bg_button_danger," ",bb_web_ds_tools.theme.bg_button_danger_hover," text-white"].join('');

break;
default:
return [bb_web_ds_tools.theme.bg_button," ",bb_web_ds_tools.theme.bg_button_hover," ",bb_web_ds_tools.theme.text_button].join('');

}
})()))].join('');
return base;
});
/**
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
var len__5749__auto___24959 = arguments.length;
var i__5750__auto___24960 = (0);
while(true){
if((i__5750__auto___24960 < len__5749__auto___24959)){
args__5755__auto__.push((arguments[i__5750__auto___24960]));

var G__24961 = (i__5750__auto___24960 + (1));
i__5750__auto___24960 = G__24961;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button_sm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_sm.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__24765 = props;
var map__24765__$1 = cljs.core.__destructure_map(map__24765);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24765__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24765__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24765__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var clean_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"variant","variant",-424354234),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clean_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-1 px-3 text-sm font-medium ",bb_web_ds_tools.components.common.get_button_classes(variant,disabled)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button_sm.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_sm.cljs$lang$applyTo = (function (seq24763){
var G__24764 = cljs.core.first(seq24763);
var seq24763__$1 = cljs.core.next(seq24763);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24764,seq24763__$1);
}));

/**
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
var len__5749__auto___24963 = arguments.length;
var i__5750__auto___24964 = (0);
while(true){
if((i__5750__auto___24964 < len__5749__auto___24963)){
args__5755__auto__.push((arguments[i__5750__auto___24964]));

var G__24965 = (i__5750__auto___24964 + (1));
i__5750__auto___24964 = G__24965;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button_md.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button_md.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__24771 = props;
var map__24771__$1 = cljs.core.__destructure_map(map__24771);
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24771__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24771__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24771__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var clean_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"variant","variant",-424354234),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clean_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-2 px-4 text-sm font-bold ",bb_web_ds_tools.components.common.get_button_classes(variant,disabled)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null)], 0))], null),children);
}));

(bb_web_ds_tools.components.common.button_md.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button_md.cljs$lang$applyTo = (function (seq24769){
var G__24770 = cljs.core.first(seq24769);
var seq24769__$1 = cljs.core.next(seq24769);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24770,seq24769__$1);
}));

/**
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
var len__5749__auto___24966 = arguments.length;
var i__5750__auto___24967 = (0);
while(true){
if((i__5750__auto___24967 < len__5749__auto___24966)){
args__5755__auto__.push((arguments[i__5750__auto___24967]));

var G__24968 = (i__5750__auto___24967 + (1));
i__5750__auto___24967 = G__24968;
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
(bb_web_ds_tools.components.common.button_xs.cljs$lang$applyTo = (function (seq24779){
var G__24780 = cljs.core.first(seq24779);
var seq24779__$1 = cljs.core.next(seq24779);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24780,seq24779__$1);
}));

/**
 * Renders a styled button component.
 * Dispatches to specific button components based on :size prop.
 * Defaults to :md.
 * 
 *   Args:
 *  props (map): Standard HTML attributes.
 *    - :size (keyword): :sm, :xs, or :md (default).
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.common.button = (function bb_web_ds_tools$components$common$button(var_args){
var args__5755__auto__ = [];
var len__5749__auto___24969 = arguments.length;
var i__5750__auto___24970 = (0);
while(true){
if((i__5750__auto___24970 < len__5749__auto___24969)){
args__5755__auto__.push((arguments[i__5750__auto___24970]));

var G__24971 = (i__5750__auto___24970 + (1));
i__5750__auto___24970 = G__24971;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.button.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(props);
var clean_props = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"size","size",1098693007));
var G__24815 = size;
var G__24815__$1 = (((G__24815 instanceof cljs.core.Keyword))?G__24815.fqn:null);
switch (G__24815__$1) {
case "sm":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_sm,clean_props], null),children);

break;
case "xs":
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,clean_props], null),children);

break;
default:
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_md,clean_props], null),children);

}
}));

(bb_web_ds_tools.components.common.button.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.common.button.cljs$lang$applyTo = (function (seq24786){
var G__24787 = cljs.core.first(seq24786);
var seq24786__$1 = cljs.core.next(seq24786);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24787,seq24786__$1);
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
var len__5749__auto___24973 = arguments.length;
var i__5750__auto___24974 = (0);
while(true){
if((i__5750__auto___24974 < len__5749__auto___24973)){
args__5755__auto__.push((arguments[i__5750__auto___24974]));

var G__24975 = (i__5750__auto___24974 + (1));
i__5750__auto___24974 = G__24975;
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
(bb_web_ds_tools.components.common.button_info.cljs$lang$applyTo = (function (seq24821){
var G__24822 = cljs.core.first(seq24821);
var seq24821__$1 = cljs.core.next(seq24821);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24822,seq24821__$1);
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
bb_web_ds_tools.components.common.input = (function bb_web_ds_tools$components$common$input(p__24824){
var map__24825 = p__24824;
var map__24825__$1 = cljs.core.__destructure_map(map__24825);
var props = map__24825__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var checked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24825__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
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
var len__5749__auto___24976 = arguments.length;
var i__5750__auto___24977 = (0);
while(true){
if((i__5750__auto___24977 < len__5749__auto___24976)){
args__5755__auto__.push((arguments[i__5750__auto___24977]));

var G__24978 = (i__5750__auto___24977 + (1));
i__5750__auto___24977 = G__24978;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.select.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__24828 = props;
var map__24828__$1 = cljs.core.__destructure_map(map__24828);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24828__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24828__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
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
(bb_web_ds_tools.components.common.select.cljs$lang$applyTo = (function (seq24826){
var G__24827 = cljs.core.first(seq24826);
var seq24826__$1 = cljs.core.next(seq24826);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24827,seq24826__$1);
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
bb_web_ds_tools.components.common.textarea = (function bb_web_ds_tools$components$common$textarea(p__24829){
var map__24830 = p__24829;
var map__24830__$1 = cljs.core.__destructure_map(map__24830);
var props = map__24830__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_change_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"on-change-event","on-change-event",-1723026359));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
bb_web_ds_tools.components.common.pre_block = (function bb_web_ds_tools$components$common$pre_block(p__24831){
var map__24832 = p__24831;
var map__24832__$1 = cljs.core.__destructure_map(map__24832);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24832__$1,new cljs.core.Keyword(null,"content","content",15833224));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24832__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var len__5749__auto___24979 = arguments.length;
var i__5750__auto___24980 = (0);
while(true){
if((i__5750__auto___24980 < len__5749__auto___24979)){
args__5755__auto__.push((arguments[i__5750__auto___24980]));

var G__24981 = (i__5750__auto___24980 + (1));
i__5750__auto___24980 = G__24981;
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
(bb_web_ds_tools.components.common.card.cljs$lang$applyTo = (function (seq24833){
var G__24834 = cljs.core.first(seq24833);
var seq24833__$1 = cljs.core.next(seq24833);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24834,seq24833__$1);
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
var len__5749__auto___24982 = arguments.length;
var i__5750__auto___24983 = (0);
while(true){
if((i__5750__auto___24983 < len__5749__auto___24982)){
args__5755__auto__.push((arguments[i__5750__auto___24983]));

var G__24984 = (i__5750__auto___24983 + (1));
i__5750__auto___24983 = G__24984;
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
(bb_web_ds_tools.components.common.table_container.cljs$lang$applyTo = (function (seq24835){
var G__24836 = cljs.core.first(seq24835);
var seq24835__$1 = cljs.core.next(seq24835);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24836,seq24835__$1);
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
var len__5749__auto___24985 = arguments.length;
var i__5750__auto___24986 = (0);
while(true){
if((i__5750__auto___24986 < len__5749__auto___24985)){
args__5755__auto__.push((arguments[i__5750__auto___24986]));

var G__24987 = (i__5750__auto___24986 + (1));
i__5750__auto___24986 = G__24987;
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
(bb_web_ds_tools.components.common.table.cljs$lang$applyTo = (function (seq24843){
var G__24844 = cljs.core.first(seq24843);
var seq24843__$1 = cljs.core.next(seq24843);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24844,seq24843__$1);
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
var len__5749__auto___24988 = arguments.length;
var i__5750__auto___24989 = (0);
while(true){
if((i__5750__auto___24989 < len__5749__auto___24988)){
args__5755__auto__.push((arguments[i__5750__auto___24989]));

var G__24990 = (i__5750__auto___24989 + (1));
i__5750__auto___24989 = G__24990;
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
(bb_web_ds_tools.components.common.thead.cljs$lang$applyTo = (function (seq24864){
var G__24865 = cljs.core.first(seq24864);
var seq24864__$1 = cljs.core.next(seq24864);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24865,seq24864__$1);
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
var len__5749__auto___24991 = arguments.length;
var i__5750__auto___24992 = (0);
while(true){
if((i__5750__auto___24992 < len__5749__auto___24991)){
args__5755__auto__.push((arguments[i__5750__auto___24992]));

var G__24993 = (i__5750__auto___24992 + (1));
i__5750__auto___24992 = G__24993;
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
(bb_web_ds_tools.components.common.tbody.cljs$lang$applyTo = (function (seq24893){
var G__24894 = cljs.core.first(seq24893);
var seq24893__$1 = cljs.core.next(seq24893);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24894,seq24893__$1);
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
var len__5749__auto___24994 = arguments.length;
var i__5750__auto___24995 = (0);
while(true){
if((i__5750__auto___24995 < len__5749__auto___24994)){
args__5755__auto__.push((arguments[i__5750__auto___24995]));

var G__24996 = (i__5750__auto___24995 + (1));
i__5750__auto___24995 = G__24996;
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
(bb_web_ds_tools.components.common.tr.cljs$lang$applyTo = (function (seq24895){
var G__24896 = cljs.core.first(seq24895);
var seq24895__$1 = cljs.core.next(seq24895);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24896,seq24895__$1);
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
var len__5749__auto___24997 = arguments.length;
var i__5750__auto___24998 = (0);
while(true){
if((i__5750__auto___24998 < len__5749__auto___24997)){
args__5755__auto__.push((arguments[i__5750__auto___24998]));

var G__24999 = (i__5750__auto___24998 + (1));
i__5750__auto___24998 = G__24999;
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
(bb_web_ds_tools.components.common.th.cljs$lang$applyTo = (function (seq24897){
var G__24898 = cljs.core.first(seq24897);
var seq24897__$1 = cljs.core.next(seq24897);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24898,seq24897__$1);
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
var len__5749__auto___25000 = arguments.length;
var i__5750__auto___25001 = (0);
while(true){
if((i__5750__auto___25001 < len__5749__auto___25000)){
args__5755__auto__.push((arguments[i__5750__auto___25001]));

var G__25002 = (i__5750__auto___25001 + (1));
i__5750__auto___25001 = G__25002;
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
(bb_web_ds_tools.components.common.td.cljs$lang$applyTo = (function (seq24899){
var G__24900 = cljs.core.first(seq24899);
var seq24899__$1 = cljs.core.next(seq24899);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24900,seq24899__$1);
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
var len__5749__auto___25003 = arguments.length;
var i__5750__auto___25004 = (0);
while(true){
if((i__5750__auto___25004 < len__5749__auto___25003)){
args__5755__auto__.push((arguments[i__5750__auto___25004]));

var G__25005 = (i__5750__auto___25004 + (1));
i__5750__auto___25004 = G__25005;
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
(bb_web_ds_tools.components.common.page_header.cljs$lang$applyTo = (function (seq24901){
var G__24902 = cljs.core.first(seq24901);
var seq24901__$1 = cljs.core.next(seq24901);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24902,seq24901__$1);
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
var len__5749__auto___25006 = arguments.length;
var i__5750__auto___25007 = (0);
while(true){
if((i__5750__auto___25007 < len__5749__auto___25006)){
args__5755__auto__.push((arguments[i__5750__auto___25007]));

var G__25008 = (i__5750__auto___25007 + (1));
i__5750__auto___25007 = G__25008;
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
(bb_web_ds_tools.components.common.section_header.cljs$lang$applyTo = (function (seq24903){
var G__24904 = cljs.core.first(seq24903);
var seq24903__$1 = cljs.core.next(seq24903);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24904,seq24903__$1);
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
var len__5749__auto___25009 = arguments.length;
var i__5750__auto___25010 = (0);
while(true){
if((i__5750__auto___25010 < len__5749__auto___25009)){
args__5755__auto__.push((arguments[i__5750__auto___25010]));

var G__25011 = (i__5750__auto___25010 + (1));
i__5750__auto___25010 = G__25011;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.components.common.dustbin_icon.cljs$core$IFn$_invoke$arity$variadic = (function (p__24915){
var vec__24916 = p__24915;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24916,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.5",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4"], null),props], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.052.68-.107 1.022-.166m-1.022.165L5.34 19.673a2.25 2.25 0 0 0 2.244 2.077H8.084a2.25 2.25 0 0 0 2.244-2.077L14.74 9m-6.42 10.668L9.26 9m9.968-3.21c-1.378-.225-2.776-.39-4.188-.475M6.887 5.79c1.378-.225 2.776-.39 4.188-.475m0 0V4.868a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v.912m-6 0h6m-6 0a48.11 48.11 0 0 1-3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"], null)], null)], null);
}));

(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.components.common.dustbin_icon.cljs$lang$applyTo = (function (seq24913){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24913));
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
bb_web_ds_tools.components.common.tabs = (function bb_web_ds_tools$components$common$tabs(p__24920){
var map__24921 = p__24920;
var map__24921__$1 = cljs.core.__destructure_map(map__24921);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24921__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24921__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24921__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24921__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24921__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center space-x-2 border-b ",bb_web_ds_tools.theme.border_default," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow flex items-center space-x-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent px-1"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$tabs_$_iter__24923(s__24924){
return (new cljs.core.LazySeq(null,(function (){
var s__24924__$1 = s__24924;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__24924__$1);
if(temp__5825__auto__){
var s__24924__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24924__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__24924__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__24926 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__24925 = (0);
while(true){
if((i__24925 < size__5502__auto__)){
var map__24933 = cljs.core._nth(c__5501__auto__,i__24925);
var map__24933__$1 = cljs.core.__destructure_map(map__24933);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24933__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24933__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24933__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
cljs.core.chunk_append(b__24926,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24925,map__24933,map__24933__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__24926,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__24925,map__24933,map__24933__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__24926,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24925,map__24933,map__24933__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__24926,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(i__24925,map__24933,map__24933__$1,id,label,on_close,c__5501__auto__,size__5502__auto__,b__24926,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__25012 = (i__24925 + (1));
i__24925 = G__25012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24926),bb_web_ds_tools$components$common$tabs_$_iter__24923(cljs.core.chunk_rest(s__24924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24926),null);
}
} else {
var map__24934 = cljs.core.first(s__24924__$2);
var map__24934__$1 = cljs.core.__destructure_map(map__24934);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24934__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24934__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center px-4 py-2 cursor-pointer border-t border-l border-r rounded-t-md min-w-fit ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,active_tab_id))?[bb_web_ds_tools.theme.bg_card," ",bb_web_ds_tools.theme.border_default," ",bb_web_ds_tools.theme.text_accent," -mb-px pb-2.5 z-10"].join(''):[bb_web_ds_tools.theme.bg_input," border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:bg-opacity-80 pb-2 mb-0 opacity-70 hover:opacity-100"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__24934,map__24934__$1,id,label,on_close,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__24934,map__24934__$1,id,label,on_close,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"whitespace-nowrap font-medium text-sm"], null),label], null),(cljs.core.truth_(on_close)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["ml-2 p-0.5 rounded hover:bg-white/10 ",bb_web_ds_tools.theme.text_muted," hover:text-red-400 transition-colors"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__24934,map__24934__$1,id,label,on_close,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$){
return (function (e){
e.stopPropagation();

return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
});})(map__24934,map__24934__$1,id,label,on_close,s__24924__$2,temp__5825__auto__,map__24921,map__24921__$1,tabs,active_tab_id,on_change,on_add,class$))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-bold leading-none"], null),"\u2715"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$tabs_$_iter__24923(cljs.core.rest(s__24924__$2)));
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
bb_web_ds_tools.components.common.nav_tabs = (function bb_web_ds_tools$components$common$nav_tabs(p__24938){
var map__24939 = p__24938;
var map__24939__$1 = cljs.core.__destructure_map(map__24939);
var tabs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"tabs","tabs",-779855354));
var active_tab_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"active-tab-id","active-tab-id",1961631694));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-row space-x-6 border-b ",bb_web_ds_tools.theme.border_default," px-4 ",bb_web_ds_tools.theme.bg_toolbar," shrink-0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$common$nav_tabs_$_iter__24944(s__24945){
return (new cljs.core.LazySeq(null,(function (){
var s__24945__$1 = s__24945;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__24945__$1);
if(temp__5825__auto__){
var s__24945__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24945__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__24945__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__24947 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__24946 = (0);
while(true){
if((i__24946 < size__5502__auto__)){
var map__24954 = cljs.core._nth(c__5501__auto__,i__24946);
var map__24954__$1 = cljs.core.__destructure_map(map__24954);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24954__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__24947,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__24946,map__24954,map__24954__$1,id,label,c__5501__auto__,size__5502__auto__,b__24947,s__24945__$2,temp__5825__auto__,map__24939,map__24939__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(i__24946,map__24954,map__24954__$1,id,label,c__5501__auto__,size__5502__auto__,b__24947,s__24945__$2,temp__5825__auto__,map__24939,map__24939__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)));

var G__25017 = (i__24946 + (1));
i__24946 = G__25017;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24947),bb_web_ds_tools$components$common$nav_tabs_$_iter__24944(cljs.core.chunk_rest(s__24945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24947),null);
}
} else {
var map__24955 = cljs.core.first(s__24945__$2);
var map__24955__$1 = cljs.core.__destructure_map(map__24955);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24955__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24955__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-3 font-medium transition-colors border-b-2 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_tab_id,id))?["border-[#f0dfaf] ",bb_web_ds_tools.theme.text_accent].join(''):["border-transparent ",bb_web_ds_tools.theme.text_secondary," hover:text-[#dcdccc]"].join(''))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__24955,map__24955__$1,id,label,s__24945__$2,temp__5825__auto__,map__24939,map__24939__$1,tabs,active_tab_id,on_change,class$){
return (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));
} else {
return null;
}
});})(map__24955,map__24955__$1,id,label,s__24945__$2,temp__5825__auto__,map__24939,map__24939__$1,tabs,active_tab_id,on_change,class$))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null)),bb_web_ds_tools$components$common$nav_tabs_$_iter__24944(cljs.core.rest(s__24945__$2)));
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
