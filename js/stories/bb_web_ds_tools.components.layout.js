var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.theme.js");
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
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.layout.js");

goog.provide('bb_web_ds_tools.components.layout');
/**
 * Renders the top-level page container.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.page_container = (function bb_web_ds_tools$components$layout$page_container(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25015 = arguments.length;
var i__5750__auto___25016 = (0);
while(true){
if((i__5750__auto___25016 < len__5749__auto___25015)){
args__5755__auto__.push((arguments[i__5750__auto___25016]));

var G__25018 = (i__5750__auto___25016 + (1));
i__5750__auto___25016 = G__25018;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.page_container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.page_container.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-screen w-full flex overflow-hidden ",bb_web_ds_tools.theme.bg_page," ",bb_web_ds_tools.theme.text_primary," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.page_container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.page_container.cljs$lang$applyTo = (function (seq24955){
var G__24956 = cljs.core.first(seq24955);
var seq24955__$1 = cljs.core.next(seq24955);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24956,seq24955__$1);
}));

/**
 * Renders a centered container.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.container = (function bb_web_ds_tools$components$layout$container(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25020 = arguments.length;
var i__5750__auto___25021 = (0);
while(true){
if((i__5750__auto___25021 < len__5749__auto___25020)){
args__5755__auto__.push((arguments[i__5750__auto___25021]));

var G__25022 = (i__5750__auto___25021 + (1));
i__5750__auto___25021 = G__25022;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.container.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.container.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["container mx-auto px-4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.container.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.container.cljs$lang$applyTo = (function (seq24964){
var G__24965 = cljs.core.first(seq24964);
var seq24964__$1 = cljs.core.next(seq24964);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24965,seq24964__$1);
}));

/**
 * Renders a section element.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.section = (function bb_web_ds_tools$components$layout$section(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25023 = arguments.length;
var i__5750__auto___25024 = (0);
while(true){
if((i__5750__auto___25024 < len__5749__auto___25023)){
args__5755__auto__.push((arguments[i__5750__auto___25024]));

var G__25025 = (i__5750__auto___25024 + (1));
i__5750__auto___25024 = G__25025;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.section.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["py-16 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.section.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.section.cljs$lang$applyTo = (function (seq24973){
var G__24974 = cljs.core.first(seq24973);
var seq24973__$1 = cljs.core.next(seq24973);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24974,seq24973__$1);
}));

/**
 * Renders a grid container.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.grid = (function bb_web_ds_tools$components$layout$grid(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25026 = arguments.length;
var i__5750__auto___25027 = (0);
while(true){
if((i__5750__auto___25027 < len__5749__auto___25026)){
args__5755__auto__.push((arguments[i__5750__auto___25027]));

var G__25028 = (i__5750__auto___25027 + (1));
i__5750__auto___25027 = G__25028;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.grid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.grid.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["grid gap-8 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.grid.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.grid.cljs$lang$applyTo = (function (seq24975){
var G__24976 = cljs.core.first(seq24975);
var seq24975__$1 = cljs.core.next(seq24975);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24976,seq24975__$1);
}));

/**
 * Renders a flex row container.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.flex_row = (function bb_web_ds_tools$components$layout$flex_row(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25029 = arguments.length;
var i__5750__auto___25030 = (0);
while(true){
if((i__5750__auto___25030 < len__5749__auto___25029)){
args__5755__auto__.push((arguments[i__5750__auto___25030]));

var G__25031 = (i__5750__auto___25030 + (1));
i__5750__auto___25030 = G__25031;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.flex_row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.flex_row.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.flex_row.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.flex_row.cljs$lang$applyTo = (function (seq24977){
var G__24978 = cljs.core.first(seq24977);
var seq24977__$1 = cljs.core.next(seq24977);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24978,seq24977__$1);
}));

/**
 * Renders a flex column container.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.flex_col = (function bb_web_ds_tools$components$layout$flex_col(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25032 = arguments.length;
var i__5750__auto___25033 = (0);
while(true){
if((i__5750__auto___25033 < len__5749__auto___25032)){
args__5755__auto__.push((arguments[i__5750__auto___25033]));

var G__25034 = (i__5750__auto___25033 + (1));
i__5750__auto___25033 = G__25034;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.flex_col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.flex_col.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.flex_col.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.flex_col.cljs$lang$applyTo = (function (seq24982){
var G__24983 = cljs.core.first(seq24982);
var seq24982__$1 = cljs.core.next(seq24982);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24983,seq24982__$1);
}));

/**
 * Renders a header element.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.header = (function bb_web_ds_tools$components$layout$header(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25035 = arguments.length;
var i__5750__auto___25036 = (0);
while(true){
if((i__5750__auto___25036 < len__5749__auto___25035)){
args__5755__auto__.push((arguments[i__5750__auto___25036]));

var G__25037 = (i__5750__auto___25036 + (1));
i__5750__auto___25036 = G__25037;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.header.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["mb-6 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.header.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.header.cljs$lang$applyTo = (function (seq24986){
var G__24987 = cljs.core.first(seq24986);
var seq24986__$1 = cljs.core.next(seq24986);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24987,seq24986__$1);
}));

/**
 * Renders a main element.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.main = (function bb_web_ds_tools$components$layout$main(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25038 = arguments.length;
var i__5750__auto___25039 = (0);
while(true){
if((i__5750__auto___25039 < len__5749__auto___25038)){
args__5755__auto__.push((arguments[i__5750__auto___25039]));

var G__25040 = (i__5750__auto___25039 + (1));
i__5750__auto___25039 = G__25040;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.main.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow flex flex-col overflow-hidden relative ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.main.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.main.cljs$lang$applyTo = (function (seq24993){
var G__24994 = cljs.core.first(seq24993);
var seq24993__$1 = cljs.core.next(seq24993);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24994,seq24993__$1);
}));

/**
 * Renders a bootstrap-like row.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.row = (function bb_web_ds_tools$components$layout$row(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25041 = arguments.length;
var i__5750__auto___25042 = (0);
while(true){
if((i__5750__auto___25042 < len__5749__auto___25041)){
args__5755__auto__.push((arguments[i__5750__auto___25042]));

var G__25043 = (i__5750__auto___25042 + (1));
i__5750__auto___25042 = G__25043;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.row.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-wrap -mx-4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.row.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.row.cljs$lang$applyTo = (function (seq24998){
var G__24999 = cljs.core.first(seq24998);
var seq24998__$1 = cljs.core.next(seq24998);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24999,seq24998__$1);
}));

/**
 * Renders a bootstrap-like column.
 * 
 *   Args:
 *  props (map): HTML attributes.
 *  children (rest): Child elements.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.col = (function bb_web_ds_tools$components$layout$col(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25044 = arguments.length;
var i__5750__auto___25045 = (0);
while(true){
if((i__5750__auto___25045 < len__5749__auto___25044)){
args__5755__auto__.push((arguments[i__5750__auto___25045]));

var G__25046 = (i__5750__auto___25045 + (1));
i__5750__auto___25045 = G__25046;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return bb_web_ds_tools.components.layout.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(bb_web_ds_tools.components.layout.col.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["px-4 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props))].join('')], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996))], 0))], null),children);
}));

(bb_web_ds_tools.components.layout.col.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bb_web_ds_tools.components.layout.col.cljs$lang$applyTo = (function (seq25004){
var G__25005 = cljs.core.first(seq25004);
var seq25004__$1 = cljs.core.next(seq25004);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25005,seq25004__$1);
}));

/**
 * Renders a split view layout (left/right).
 * 
 *   Args:
 *  props (map): Props. Keys:
 *    - :ratio (keyword): Split ratio (:1-1, :2-1, :1-2, :1-3).
 *  left (element): Left content.
 *  right (element): Right content.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.layout.split_view = (function bb_web_ds_tools$components$layout$split_view(p__25011,left,right){
var map__25012 = p__25011;
var map__25012__$1 = cljs.core.__destructure_map(map__25012);
var props = map__25012__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25012__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630));
var left_width = (function (){var G__25013 = ratio;
var G__25013__$1 = (((G__25013 instanceof cljs.core.Keyword))?G__25013.fqn:null);
switch (G__25013__$1) {
case "1-1":
return "w-full";

break;
case "2-1":
return "w-full md:w-2/3";

break;
case "1-2":
return "w-full md:w-1/3";

break;
case "1-3":
return "w-full md:w-1/4";

break;
default:
return "w-full md:w-1/3";

}
})();
var right_width = (function (){var G__25014 = ratio;
var G__25014__$1 = (((G__25014 instanceof cljs.core.Keyword))?G__25014.fqn:null);
switch (G__25014__$1) {
case "1-1":
return "w-full md:w-1/2";

break;
case "2-1":
return "w-full md:w-1/3";

break;
case "1-2":
return "w-full md:w-2/3";

break;
case "1-3":
return "w-full md:w-3/4";

break;
default:
return "w-full md:w-2/3";

}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col md:flex-row h-full w-full overflow-hidden"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-1/2 md:h-full overflow-auto border-b md:border-b-0 md:border-r border-[#3f3f3f] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(left_width)].join('')], null),left], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["h-1/2 md:h-full overflow-auto ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(right_width)].join('')], null),right], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.components.layout.js.map
