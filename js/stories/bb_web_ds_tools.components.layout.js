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
var len__5749__auto___25069 = arguments.length;
var i__5750__auto___25070 = (0);
while(true){
if((i__5750__auto___25070 < len__5749__auto___25069)){
args__5755__auto__.push((arguments[i__5750__auto___25070]));

var G__25071 = (i__5750__auto___25070 + (1));
i__5750__auto___25070 = G__25071;
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
(bb_web_ds_tools.components.layout.page_container.cljs$lang$applyTo = (function (seq25018){
var G__25019 = cljs.core.first(seq25018);
var seq25018__$1 = cljs.core.next(seq25018);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25019,seq25018__$1);
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
var len__5749__auto___25072 = arguments.length;
var i__5750__auto___25073 = (0);
while(true){
if((i__5750__auto___25073 < len__5749__auto___25072)){
args__5755__auto__.push((arguments[i__5750__auto___25073]));

var G__25074 = (i__5750__auto___25073 + (1));
i__5750__auto___25073 = G__25074;
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
(bb_web_ds_tools.components.layout.container.cljs$lang$applyTo = (function (seq25027){
var G__25028 = cljs.core.first(seq25027);
var seq25027__$1 = cljs.core.next(seq25027);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25028,seq25027__$1);
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
var len__5749__auto___25075 = arguments.length;
var i__5750__auto___25076 = (0);
while(true){
if((i__5750__auto___25076 < len__5749__auto___25075)){
args__5755__auto__.push((arguments[i__5750__auto___25076]));

var G__25077 = (i__5750__auto___25076 + (1));
i__5750__auto___25076 = G__25077;
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
(bb_web_ds_tools.components.layout.section.cljs$lang$applyTo = (function (seq25030){
var G__25031 = cljs.core.first(seq25030);
var seq25030__$1 = cljs.core.next(seq25030);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25031,seq25030__$1);
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
var len__5749__auto___25078 = arguments.length;
var i__5750__auto___25079 = (0);
while(true){
if((i__5750__auto___25079 < len__5749__auto___25078)){
args__5755__auto__.push((arguments[i__5750__auto___25079]));

var G__25080 = (i__5750__auto___25079 + (1));
i__5750__auto___25079 = G__25080;
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
(bb_web_ds_tools.components.layout.grid.cljs$lang$applyTo = (function (seq25036){
var G__25037 = cljs.core.first(seq25036);
var seq25036__$1 = cljs.core.next(seq25036);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25037,seq25036__$1);
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
var len__5749__auto___25081 = arguments.length;
var i__5750__auto___25082 = (0);
while(true){
if((i__5750__auto___25082 < len__5749__auto___25081)){
args__5755__auto__.push((arguments[i__5750__auto___25082]));

var G__25083 = (i__5750__auto___25082 + (1));
i__5750__auto___25082 = G__25083;
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
(bb_web_ds_tools.components.layout.flex_row.cljs$lang$applyTo = (function (seq25038){
var G__25039 = cljs.core.first(seq25038);
var seq25038__$1 = cljs.core.next(seq25038);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25039,seq25038__$1);
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
var len__5749__auto___25084 = arguments.length;
var i__5750__auto___25085 = (0);
while(true){
if((i__5750__auto___25085 < len__5749__auto___25084)){
args__5755__auto__.push((arguments[i__5750__auto___25085]));

var G__25086 = (i__5750__auto___25085 + (1));
i__5750__auto___25085 = G__25086;
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
var len__5749__auto___25087 = arguments.length;
var i__5750__auto___25088 = (0);
while(true){
if((i__5750__auto___25088 < len__5749__auto___25087)){
args__5755__auto__.push((arguments[i__5750__auto___25088]));

var G__25089 = (i__5750__auto___25088 + (1));
i__5750__auto___25088 = G__25089;
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
var len__5749__auto___25090 = arguments.length;
var i__5750__auto___25091 = (0);
while(true){
if((i__5750__auto___25091 < len__5749__auto___25090)){
args__5755__auto__.push((arguments[i__5750__auto___25091]));

var G__25092 = (i__5750__auto___25091 + (1));
i__5750__auto___25091 = G__25092;
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
var len__5749__auto___25093 = arguments.length;
var i__5750__auto___25094 = (0);
while(true){
if((i__5750__auto___25094 < len__5749__auto___25093)){
args__5755__auto__.push((arguments[i__5750__auto___25094]));

var G__25095 = (i__5750__auto___25094 + (1));
i__5750__auto___25094 = G__25095;
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
(bb_web_ds_tools.components.layout.row.cljs$lang$applyTo = (function (seq25046){
var G__25047 = cljs.core.first(seq25046);
var seq25046__$1 = cljs.core.next(seq25046);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25047,seq25046__$1);
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
var len__5749__auto___25096 = arguments.length;
var i__5750__auto___25097 = (0);
while(true){
if((i__5750__auto___25097 < len__5749__auto___25096)){
args__5755__auto__.push((arguments[i__5750__auto___25097]));

var G__25098 = (i__5750__auto___25097 + (1));
i__5750__auto___25097 = G__25098;
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
(bb_web_ds_tools.components.layout.col.cljs$lang$applyTo = (function (seq25048){
var G__25049 = cljs.core.first(seq25048);
var seq25048__$1 = cljs.core.next(seq25048);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25049,seq25048__$1);
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
bb_web_ds_tools.components.layout.split_view = (function bb_web_ds_tools$components$layout$split_view(p__25065,left,right){
var map__25066 = p__25065;
var map__25066__$1 = cljs.core.__destructure_map(map__25066);
var props = map__25066__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25066__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630));
var left_width = (function (){var G__25067 = ratio;
var G__25067__$1 = (((G__25067 instanceof cljs.core.Keyword))?G__25067.fqn:null);
switch (G__25067__$1) {
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
var right_width = (function (){var G__25068 = ratio;
var G__25068__$1 = (((G__25068 instanceof cljs.core.Keyword))?G__25068.fqn:null);
switch (G__25068__$1) {
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
