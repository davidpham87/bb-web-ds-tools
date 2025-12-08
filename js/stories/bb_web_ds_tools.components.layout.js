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
var len__5749__auto___25151 = arguments.length;
var i__5750__auto___25152 = (0);
while(true){
if((i__5750__auto___25152 < len__5749__auto___25151)){
args__5755__auto__.push((arguments[i__5750__auto___25152]));

var G__25153 = (i__5750__auto___25152 + (1));
i__5750__auto___25152 = G__25153;
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
(bb_web_ds_tools.components.layout.page_container.cljs$lang$applyTo = (function (seq25115){
var G__25116 = cljs.core.first(seq25115);
var seq25115__$1 = cljs.core.next(seq25115);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25116,seq25115__$1);
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
var len__5749__auto___25154 = arguments.length;
var i__5750__auto___25155 = (0);
while(true){
if((i__5750__auto___25155 < len__5749__auto___25154)){
args__5755__auto__.push((arguments[i__5750__auto___25155]));

var G__25156 = (i__5750__auto___25155 + (1));
i__5750__auto___25155 = G__25156;
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
(bb_web_ds_tools.components.layout.container.cljs$lang$applyTo = (function (seq25117){
var G__25118 = cljs.core.first(seq25117);
var seq25117__$1 = cljs.core.next(seq25117);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25118,seq25117__$1);
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
var len__5749__auto___25157 = arguments.length;
var i__5750__auto___25158 = (0);
while(true){
if((i__5750__auto___25158 < len__5749__auto___25157)){
args__5755__auto__.push((arguments[i__5750__auto___25158]));

var G__25159 = (i__5750__auto___25158 + (1));
i__5750__auto___25158 = G__25159;
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
(bb_web_ds_tools.components.layout.section.cljs$lang$applyTo = (function (seq25124){
var G__25125 = cljs.core.first(seq25124);
var seq25124__$1 = cljs.core.next(seq25124);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25125,seq25124__$1);
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
var len__5749__auto___25160 = arguments.length;
var i__5750__auto___25161 = (0);
while(true){
if((i__5750__auto___25161 < len__5749__auto___25160)){
args__5755__auto__.push((arguments[i__5750__auto___25161]));

var G__25162 = (i__5750__auto___25161 + (1));
i__5750__auto___25161 = G__25162;
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
(bb_web_ds_tools.components.layout.grid.cljs$lang$applyTo = (function (seq25126){
var G__25127 = cljs.core.first(seq25126);
var seq25126__$1 = cljs.core.next(seq25126);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25127,seq25126__$1);
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
var len__5749__auto___25163 = arguments.length;
var i__5750__auto___25164 = (0);
while(true){
if((i__5750__auto___25164 < len__5749__auto___25163)){
args__5755__auto__.push((arguments[i__5750__auto___25164]));

var G__25165 = (i__5750__auto___25164 + (1));
i__5750__auto___25164 = G__25165;
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
(bb_web_ds_tools.components.layout.flex_row.cljs$lang$applyTo = (function (seq25130){
var G__25131 = cljs.core.first(seq25130);
var seq25130__$1 = cljs.core.next(seq25130);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25131,seq25130__$1);
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
var len__5749__auto___25166 = arguments.length;
var i__5750__auto___25167 = (0);
while(true){
if((i__5750__auto___25167 < len__5749__auto___25166)){
args__5755__auto__.push((arguments[i__5750__auto___25167]));

var G__25168 = (i__5750__auto___25167 + (1));
i__5750__auto___25167 = G__25168;
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
(bb_web_ds_tools.components.layout.flex_col.cljs$lang$applyTo = (function (seq25133){
var G__25134 = cljs.core.first(seq25133);
var seq25133__$1 = cljs.core.next(seq25133);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25134,seq25133__$1);
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
var len__5749__auto___25170 = arguments.length;
var i__5750__auto___25171 = (0);
while(true){
if((i__5750__auto___25171 < len__5749__auto___25170)){
args__5755__auto__.push((arguments[i__5750__auto___25171]));

var G__25172 = (i__5750__auto___25171 + (1));
i__5750__auto___25171 = G__25172;
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
(bb_web_ds_tools.components.layout.header.cljs$lang$applyTo = (function (seq25137){
var G__25138 = cljs.core.first(seq25137);
var seq25137__$1 = cljs.core.next(seq25137);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25138,seq25137__$1);
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
var len__5749__auto___25173 = arguments.length;
var i__5750__auto___25174 = (0);
while(true){
if((i__5750__auto___25174 < len__5749__auto___25173)){
args__5755__auto__.push((arguments[i__5750__auto___25174]));

var G__25175 = (i__5750__auto___25174 + (1));
i__5750__auto___25174 = G__25175;
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
(bb_web_ds_tools.components.layout.main.cljs$lang$applyTo = (function (seq25139){
var G__25140 = cljs.core.first(seq25139);
var seq25139__$1 = cljs.core.next(seq25139);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25140,seq25139__$1);
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
var len__5749__auto___25177 = arguments.length;
var i__5750__auto___25178 = (0);
while(true){
if((i__5750__auto___25178 < len__5749__auto___25177)){
args__5755__auto__.push((arguments[i__5750__auto___25178]));

var G__25179 = (i__5750__auto___25178 + (1));
i__5750__auto___25178 = G__25179;
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
(bb_web_ds_tools.components.layout.row.cljs$lang$applyTo = (function (seq25143){
var G__25144 = cljs.core.first(seq25143);
var seq25143__$1 = cljs.core.next(seq25143);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25144,seq25143__$1);
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
var len__5749__auto___25180 = arguments.length;
var i__5750__auto___25181 = (0);
while(true){
if((i__5750__auto___25181 < len__5749__auto___25180)){
args__5755__auto__.push((arguments[i__5750__auto___25181]));

var G__25182 = (i__5750__auto___25181 + (1));
i__5750__auto___25181 = G__25182;
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
(bb_web_ds_tools.components.layout.col.cljs$lang$applyTo = (function (seq25145){
var G__25146 = cljs.core.first(seq25145);
var seq25145__$1 = cljs.core.next(seq25145);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25146,seq25145__$1);
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
bb_web_ds_tools.components.layout.split_view = (function bb_web_ds_tools$components$layout$split_view(p__25147,left,right){
var map__25148 = p__25147;
var map__25148__$1 = cljs.core.__destructure_map(map__25148);
var props = map__25148__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__25148__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630));
var left_width = (function (){var G__25149 = ratio;
var G__25149__$1 = (((G__25149 instanceof cljs.core.Keyword))?G__25149.fqn:null);
switch (G__25149__$1) {
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
var right_width = (function (){var G__25150 = ratio;
var G__25150__$1 = (((G__25150 instanceof cljs.core.Keyword))?G__25150.fqn:null);
switch (G__25150__$1) {
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
