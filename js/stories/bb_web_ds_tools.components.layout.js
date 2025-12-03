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
var len__5749__auto___25082 = arguments.length;
var i__5750__auto___25083 = (0);
while(true){
if((i__5750__auto___25083 < len__5749__auto___25082)){
args__5755__auto__.push((arguments[i__5750__auto___25083]));

var G__25084 = (i__5750__auto___25083 + (1));
i__5750__auto___25083 = G__25084;
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
(bb_web_ds_tools.components.layout.page_container.cljs$lang$applyTo = (function (seq24998){
var G__24999 = cljs.core.first(seq24998);
var seq24998__$1 = cljs.core.next(seq24998);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24999,seq24998__$1);
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
var len__5749__auto___25085 = arguments.length;
var i__5750__auto___25086 = (0);
while(true){
if((i__5750__auto___25086 < len__5749__auto___25085)){
args__5755__auto__.push((arguments[i__5750__auto___25086]));

var G__25087 = (i__5750__auto___25086 + (1));
i__5750__auto___25086 = G__25087;
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
(bb_web_ds_tools.components.layout.container.cljs$lang$applyTo = (function (seq25009){
var G__25010 = cljs.core.first(seq25009);
var seq25009__$1 = cljs.core.next(seq25009);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25010,seq25009__$1);
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
var len__5749__auto___25088 = arguments.length;
var i__5750__auto___25089 = (0);
while(true){
if((i__5750__auto___25089 < len__5749__auto___25088)){
args__5755__auto__.push((arguments[i__5750__auto___25089]));

var G__25090 = (i__5750__auto___25089 + (1));
i__5750__auto___25089 = G__25090;
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
(bb_web_ds_tools.components.layout.section.cljs$lang$applyTo = (function (seq25022){
var G__25023 = cljs.core.first(seq25022);
var seq25022__$1 = cljs.core.next(seq25022);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25023,seq25022__$1);
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
var len__5749__auto___25091 = arguments.length;
var i__5750__auto___25092 = (0);
while(true){
if((i__5750__auto___25092 < len__5749__auto___25091)){
args__5755__auto__.push((arguments[i__5750__auto___25092]));

var G__25093 = (i__5750__auto___25092 + (1));
i__5750__auto___25092 = G__25093;
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
(bb_web_ds_tools.components.layout.grid.cljs$lang$applyTo = (function (seq25032){
var G__25033 = cljs.core.first(seq25032);
var seq25032__$1 = cljs.core.next(seq25032);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25033,seq25032__$1);
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
var len__5749__auto___25094 = arguments.length;
var i__5750__auto___25095 = (0);
while(true){
if((i__5750__auto___25095 < len__5749__auto___25094)){
args__5755__auto__.push((arguments[i__5750__auto___25095]));

var G__25096 = (i__5750__auto___25095 + (1));
i__5750__auto___25095 = G__25096;
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
(bb_web_ds_tools.components.layout.flex_row.cljs$lang$applyTo = (function (seq25034){
var G__25035 = cljs.core.first(seq25034);
var seq25034__$1 = cljs.core.next(seq25034);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25035,seq25034__$1);
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
var len__5749__auto___25097 = arguments.length;
var i__5750__auto___25098 = (0);
while(true){
if((i__5750__auto___25098 < len__5749__auto___25097)){
args__5755__auto__.push((arguments[i__5750__auto___25098]));

var G__25099 = (i__5750__auto___25098 + (1));
i__5750__auto___25098 = G__25099;
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
(bb_web_ds_tools.components.layout.flex_col.cljs$lang$applyTo = (function (seq25040){
var G__25041 = cljs.core.first(seq25040);
var seq25040__$1 = cljs.core.next(seq25040);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25041,seq25040__$1);
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
var len__5749__auto___25100 = arguments.length;
var i__5750__auto___25101 = (0);
while(true){
if((i__5750__auto___25101 < len__5749__auto___25100)){
args__5755__auto__.push((arguments[i__5750__auto___25101]));

var G__25102 = (i__5750__auto___25101 + (1));
i__5750__auto___25101 = G__25102;
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
(bb_web_ds_tools.components.layout.header.cljs$lang$applyTo = (function (seq25042){
var G__25043 = cljs.core.first(seq25042);
var seq25042__$1 = cljs.core.next(seq25042);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25043,seq25042__$1);
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
var len__5749__auto___25103 = arguments.length;
var i__5750__auto___25104 = (0);
while(true){
if((i__5750__auto___25104 < len__5749__auto___25103)){
args__5755__auto__.push((arguments[i__5750__auto___25104]));

var G__25105 = (i__5750__auto___25104 + (1));
i__5750__auto___25104 = G__25105;
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
(bb_web_ds_tools.components.layout.main.cljs$lang$applyTo = (function (seq25044){
var G__25045 = cljs.core.first(seq25044);
var seq25044__$1 = cljs.core.next(seq25044);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25045,seq25044__$1);
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
var len__5749__auto___25106 = arguments.length;
var i__5750__auto___25107 = (0);
while(true){
if((i__5750__auto___25107 < len__5749__auto___25106)){
args__5755__auto__.push((arguments[i__5750__auto___25107]));

var G__25108 = (i__5750__auto___25107 + (1));
i__5750__auto___25107 = G__25108;
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
(bb_web_ds_tools.components.layout.row.cljs$lang$applyTo = (function (seq25049){
var G__25050 = cljs.core.first(seq25049);
var seq25049__$1 = cljs.core.next(seq25049);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25050,seq25049__$1);
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
var len__5749__auto___25109 = arguments.length;
var i__5750__auto___25110 = (0);
while(true){
if((i__5750__auto___25110 < len__5749__auto___25109)){
args__5755__auto__.push((arguments[i__5750__auto___25110]));

var G__25111 = (i__5750__auto___25110 + (1));
i__5750__auto___25110 = G__25111;
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
(bb_web_ds_tools.components.layout.col.cljs$lang$applyTo = (function (seq25070){
var G__25072 = cljs.core.first(seq25070);
var seq25070__$1 = cljs.core.next(seq25070);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25072,seq25070__$1);
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
bb_web_ds_tools.components.layout.split_view = (function bb_web_ds_tools$components$layout$split_view(p__25078,left,right){
var map__25079 = p__25078;
var map__25079__$1 = cljs.core.__destructure_map(map__25079);
var props = map__25079__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25079__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630));
var left_width = (function (){var G__25080 = ratio;
var G__25080__$1 = (((G__25080 instanceof cljs.core.Keyword))?G__25080.fqn:null);
switch (G__25080__$1) {
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
var right_width = (function (){var G__25081 = ratio;
var G__25081__$1 = (((G__25081 instanceof cljs.core.Keyword))?G__25081.fqn:null);
switch (G__25081__$1) {
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
