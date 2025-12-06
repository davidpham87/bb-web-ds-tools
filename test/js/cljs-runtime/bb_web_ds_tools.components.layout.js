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
var len__5749__auto___26878 = arguments.length;
var i__5750__auto___26879 = (0);
while(true){
if((i__5750__auto___26879 < len__5749__auto___26878)){
args__5755__auto__.push((arguments[i__5750__auto___26879]));

var G__26880 = (i__5750__auto___26879 + (1));
i__5750__auto___26879 = G__26880;
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
(bb_web_ds_tools.components.layout.page_container.cljs$lang$applyTo = (function (seq26774){
var G__26775 = cljs.core.first(seq26774);
var seq26774__$1 = cljs.core.next(seq26774);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26775,seq26774__$1);
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
var len__5749__auto___26883 = arguments.length;
var i__5750__auto___26884 = (0);
while(true){
if((i__5750__auto___26884 < len__5749__auto___26883)){
args__5755__auto__.push((arguments[i__5750__auto___26884]));

var G__26885 = (i__5750__auto___26884 + (1));
i__5750__auto___26884 = G__26885;
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
(bb_web_ds_tools.components.layout.container.cljs$lang$applyTo = (function (seq26780){
var G__26781 = cljs.core.first(seq26780);
var seq26780__$1 = cljs.core.next(seq26780);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26781,seq26780__$1);
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
var len__5749__auto___26886 = arguments.length;
var i__5750__auto___26887 = (0);
while(true){
if((i__5750__auto___26887 < len__5749__auto___26886)){
args__5755__auto__.push((arguments[i__5750__auto___26887]));

var G__26888 = (i__5750__auto___26887 + (1));
i__5750__auto___26887 = G__26888;
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
(bb_web_ds_tools.components.layout.section.cljs$lang$applyTo = (function (seq26785){
var G__26786 = cljs.core.first(seq26785);
var seq26785__$1 = cljs.core.next(seq26785);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26786,seq26785__$1);
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
var len__5749__auto___26889 = arguments.length;
var i__5750__auto___26890 = (0);
while(true){
if((i__5750__auto___26890 < len__5749__auto___26889)){
args__5755__auto__.push((arguments[i__5750__auto___26890]));

var G__26891 = (i__5750__auto___26890 + (1));
i__5750__auto___26890 = G__26891;
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
(bb_web_ds_tools.components.layout.grid.cljs$lang$applyTo = (function (seq26796){
var G__26797 = cljs.core.first(seq26796);
var seq26796__$1 = cljs.core.next(seq26796);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26797,seq26796__$1);
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
var len__5749__auto___26894 = arguments.length;
var i__5750__auto___26895 = (0);
while(true){
if((i__5750__auto___26895 < len__5749__auto___26894)){
args__5755__auto__.push((arguments[i__5750__auto___26895]));

var G__26896 = (i__5750__auto___26895 + (1));
i__5750__auto___26895 = G__26896;
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
(bb_web_ds_tools.components.layout.flex_row.cljs$lang$applyTo = (function (seq26804){
var G__26805 = cljs.core.first(seq26804);
var seq26804__$1 = cljs.core.next(seq26804);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26805,seq26804__$1);
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
var len__5749__auto___26897 = arguments.length;
var i__5750__auto___26898 = (0);
while(true){
if((i__5750__auto___26898 < len__5749__auto___26897)){
args__5755__auto__.push((arguments[i__5750__auto___26898]));

var G__26899 = (i__5750__auto___26898 + (1));
i__5750__auto___26898 = G__26899;
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
(bb_web_ds_tools.components.layout.flex_col.cljs$lang$applyTo = (function (seq26814){
var G__26815 = cljs.core.first(seq26814);
var seq26814__$1 = cljs.core.next(seq26814);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26815,seq26814__$1);
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
var len__5749__auto___26900 = arguments.length;
var i__5750__auto___26901 = (0);
while(true){
if((i__5750__auto___26901 < len__5749__auto___26900)){
args__5755__auto__.push((arguments[i__5750__auto___26901]));

var G__26902 = (i__5750__auto___26901 + (1));
i__5750__auto___26901 = G__26902;
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
(bb_web_ds_tools.components.layout.header.cljs$lang$applyTo = (function (seq26823){
var G__26824 = cljs.core.first(seq26823);
var seq26823__$1 = cljs.core.next(seq26823);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26824,seq26823__$1);
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
var len__5749__auto___26905 = arguments.length;
var i__5750__auto___26906 = (0);
while(true){
if((i__5750__auto___26906 < len__5749__auto___26905)){
args__5755__auto__.push((arguments[i__5750__auto___26906]));

var G__26907 = (i__5750__auto___26906 + (1));
i__5750__auto___26906 = G__26907;
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
(bb_web_ds_tools.components.layout.main.cljs$lang$applyTo = (function (seq26851){
var G__26852 = cljs.core.first(seq26851);
var seq26851__$1 = cljs.core.next(seq26851);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26852,seq26851__$1);
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
var len__5749__auto___26908 = arguments.length;
var i__5750__auto___26909 = (0);
while(true){
if((i__5750__auto___26909 < len__5749__auto___26908)){
args__5755__auto__.push((arguments[i__5750__auto___26909]));

var G__26910 = (i__5750__auto___26909 + (1));
i__5750__auto___26909 = G__26910;
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
(bb_web_ds_tools.components.layout.row.cljs$lang$applyTo = (function (seq26861){
var G__26862 = cljs.core.first(seq26861);
var seq26861__$1 = cljs.core.next(seq26861);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26862,seq26861__$1);
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
var len__5749__auto___26911 = arguments.length;
var i__5750__auto___26912 = (0);
while(true){
if((i__5750__auto___26912 < len__5749__auto___26911)){
args__5755__auto__.push((arguments[i__5750__auto___26912]));

var G__26913 = (i__5750__auto___26912 + (1));
i__5750__auto___26912 = G__26913;
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
(bb_web_ds_tools.components.layout.col.cljs$lang$applyTo = (function (seq26866){
var G__26867 = cljs.core.first(seq26866);
var seq26866__$1 = cljs.core.next(seq26866);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26867,seq26866__$1);
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
bb_web_ds_tools.components.layout.split_view = (function bb_web_ds_tools$components$layout$split_view(p__26870,left,right){
var map__26871 = p__26870;
var map__26871__$1 = cljs.core.__destructure_map(map__26871);
var props = map__26871__$1;
var ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26871__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),new cljs.core.Keyword(null,"2-1","2-1",-1516160630));
var left_width = (function (){var G__26874 = ratio;
var G__26874__$1 = (((G__26874 instanceof cljs.core.Keyword))?G__26874.fqn:null);
switch (G__26874__$1) {
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
var right_width = (function (){var G__26877 = ratio;
var G__26877__$1 = (((G__26877 instanceof cljs.core.Keyword))?G__26877.fqn:null);
switch (G__26877__$1) {
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
