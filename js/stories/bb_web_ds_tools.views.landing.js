var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.core.js");
require("./reagent.core.js");
require("./reagent.dom.js");
require("./bb_web_ds_tools.components.landing.js");
require("./bb_web_ds_tools.theme.js");
require("./bb_web_ds_tools.utils.themes.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.views.landing.js");

goog.provide('bb_web_ds_tools.views.landing');
bb_web_ds_tools.views.landing.github_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],["currentColor","none","round","24","http://www.w3.org/2000/svg","round","2","w-5 h-5","0 0 24 24","24"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"], null)], null)], null);
/**
 * Updates the color state based on CSS variables.
 */
bb_web_ds_tools.views.landing.update_background_colors = (function bb_web_ds_tools$views$landing$update_background_colors(colors){
var style = getComputedStyle(document.body);
var get_color = (function (k){
var v = style.getPropertyValue(k);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(colors),k);
} else {
return clojure.string.trim(v);
}
});
return cljs.core.reset_BANG_(colors,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c1","c1",1132530803),get_color("--text-accent"),new cljs.core.Keyword(null,"c2","c2",-1561880371),get_color("--text-secondary"),new cljs.core.Keyword(null,"c3","c3",-1171815738),get_color("--bg-button-primary"),new cljs.core.Keyword(null,"c4","c4",1028045610),get_color("--text-danger")], null));
});
/**
 * Draws the animated background pattern on the canvas.
 */
bb_web_ds_tools.views.landing.draw_background_pattern = (function bb_web_ds_tools$views$landing$draw_background_pattern(ctx,width,height,t,cols){
ctx.clearRect((0),(0),width,height);

(ctx.lineWidth = (2));

(ctx.globalAlpha = 0.15);

var n__5616__auto___25261 = (20);
var i_25262 = (0);
while(true){
if((i_25262 < n__5616__auto___25261)){
var seed_25263 = (t + (i_25262 * 0.1));
var scale_25264 = ((100) + ((50) * Math.sin(seed_25263)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__25130 = cljs.core.mod(i_25262,(4));
switch (G__25130) {
case (0):
return new cljs.core.Keyword(null,"c1","c1",1132530803).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (1):
return new cljs.core.Keyword(null,"c2","c2",-1561880371).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (2):
return new cljs.core.Keyword(null,"c3","c3",-1171815738).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (3):
return new cljs.core.Keyword(null,"c4","c4",1028045610).cljs$core$IFn$_invoke$arity$1(cols);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25130)].join('')));

}
})());

var n__5616__auto___25266__$1 = (100);
var j_25267 = (0);
while(true){
if((j_25267 < n__5616__auto___25266__$1)){
var angle_25268 = ((j_25267 * 0.1) + seed_25263);
var r_25269 = (scale_25264 + ((scale_25264 * 0.5) * Math.cos((angle_25268 * (3)))));
var x_25270 = ((width / (2)) + (r_25269 * Math.cos(angle_25268)));
var y_25271 = ((height / (2)) + (r_25269 * Math.sin(angle_25268)));
if((j_25267 === (0))){
ctx.moveTo(x_25270,y_25271);
} else {
ctx.lineTo(x_25270,y_25271);
}

var G__25272 = (j_25267 + (1));
j_25267 = G__25272;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__25273 = (i_25262 + (1));
i_25262 = G__25273;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 0.05);

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var wave_t_25274 = (t + (i * 1.5));
var y_offset_25275 = ((height / (2)) + ((200) * Math.sin(wave_t_25274)));
(ctx.fillStyle = (function (){var G__25148 = cljs.core.mod(i,(3));
switch (G__25148) {
case (0):
return new cljs.core.Keyword(null,"c1","c1",1132530803).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (1):
return new cljs.core.Keyword(null,"c2","c2",-1561880371).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (2):
return new cljs.core.Keyword(null,"c3","c3",-1171815738).cljs$core$IFn$_invoke$arity$1(cols);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25148)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__25151_25277 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__25152_25278 = null;
var count__25153_25279 = (0);
var i__25154_25280 = (0);
while(true){
if((i__25154_25280 < count__25153_25279)){
var x_25281 = chunk__25152_25278.cljs$core$IIndexed$_nth$arity$2(null,i__25154_25280);
var y_25282 = (y_offset_25275 + ((100) * Math.sin((wave_t_25274 + (x_25281 * 0.005)))));
ctx.lineTo(x_25281,y_25282);


var G__25283 = seq__25151_25277;
var G__25284 = chunk__25152_25278;
var G__25285 = count__25153_25279;
var G__25286 = (i__25154_25280 + (1));
seq__25151_25277 = G__25283;
chunk__25152_25278 = G__25284;
count__25153_25279 = G__25285;
i__25154_25280 = G__25286;
continue;
} else {
var temp__5825__auto___25287 = cljs.core.seq(seq__25151_25277);
if(temp__5825__auto___25287){
var seq__25151_25288__$1 = temp__5825__auto___25287;
if(cljs.core.chunked_seq_QMARK_(seq__25151_25288__$1)){
var c__5548__auto___25289 = cljs.core.chunk_first(seq__25151_25288__$1);
var G__25290 = cljs.core.chunk_rest(seq__25151_25288__$1);
var G__25291 = c__5548__auto___25289;
var G__25292 = cljs.core.count(c__5548__auto___25289);
var G__25293 = (0);
seq__25151_25277 = G__25290;
chunk__25152_25278 = G__25291;
count__25153_25279 = G__25292;
i__25154_25280 = G__25293;
continue;
} else {
var x_25294 = cljs.core.first(seq__25151_25288__$1);
var y_25295 = (y_offset_25275 + ((100) * Math.sin((wave_t_25274 + (x_25294 * 0.005)))));
ctx.lineTo(x_25294,y_25295);


var G__25296 = cljs.core.next(seq__25151_25288__$1);
var G__25297 = null;
var G__25298 = (0);
var G__25299 = (0);
seq__25151_25277 = G__25296;
chunk__25152_25278 = G__25297;
count__25153_25279 = G__25298;
i__25154_25280 = G__25299;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__25300 = (i + (1));
i = G__25300;
continue;
} else {
return null;
}
break;
}
});
/**
 * Renders an animated background canvas.
 */
bb_web_ds_tools.views.landing.background_canvas = (function bb_web_ds_tools$views$landing$background_canvas(){
var canvas_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animation_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var resize_observer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var dimensions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null));
var colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c1","c1",1132530803),"#8cd0d3",new cljs.core.Keyword(null,"c2","c2",-1561880371),"#dfaf8f",new cljs.core.Keyword(null,"c3","c3",-1171815738),"#9fc59f",new cljs.core.Keyword(null,"c4","c4",1028045610),"#cc9393"], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"background-canvas",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__5825__auto__ = cljs.core.deref(canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var ctx = canvas.getContext("2d");
var update_size = (function (){
var w = window.innerWidth;
var h = window.innerHeight;
cljs.core.reset_BANG_(dimensions,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null));

(canvas.width = w);

return (canvas.height = h);
});
var observer = (new ResizeObserver((function (_){
return update_size();
})));
observer.observe(document.body);

cljs.core.reset_BANG_(resize_observer,observer);

update_size();

bb_web_ds_tools.views.landing.update_background_colors(colors);

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$views$landing$background_canvas_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__25220 = cljs.core.deref(dimensions);
var map__25220__$1 = cljs.core.__destructure_map(map__25220);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25220__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25220__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var t = (elapsed * 2.0E-4);
var cols = cljs.core.deref(colors);
if((((width > (0))) && ((height > (0))))){
bb_web_ds_tools.views.landing.draw_background_pattern(ctx,width,height,t,cols);
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$views$landing$background_canvas_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___25301 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___25301)){
var id_25302 = temp__5825__auto___25301;
cancelAnimationFrame(id_25302);
} else {
}

var temp__5825__auto__ = cljs.core.deref(resize_observer);
if(cljs.core.truth_(temp__5825__auto__)){
var obs = temp__5825__auto__;
return obs.disconnect();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__25208_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__25208_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});
bb_web_ds_tools.views.landing.flow_steps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_fast_io,new cljs.core.Keyword(null,"title","title",636505583),"Zero I/O Friction",new cljs.core.Keyword(null,"desc","desc",2093485764),"Stop wrestling with file paths. Just paste your data and go."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_instant_charts,new cljs.core.Keyword(null,"title","title",636505583),"Instant Visuals",new cljs.core.Keyword(null,"desc","desc",2093485764),"Charts that look handwritten, generated in milliseconds."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_multi_runtime,new cljs.core.Keyword(null,"title","title",636505583),"Multi-Runtime",new cljs.core.Keyword(null,"desc","desc",2093485764),"Clojure, Python, R. Run them all. Simultaneously. Chaos awaits."], null)], null);
/**
 * Traverses up the DOM tree to find the first scrollable ancestor.
 */
bb_web_ds_tools.views.landing.get_scroll_parent = (function bb_web_ds_tools$views$landing$get_scroll_parent(node){
while(true){
if((((node == null)) || ((node === document.body)))){
return window;
} else {
var style = getComputedStyle(node);
var overflow_y = style.getPropertyValue("overflow-y");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overflow_y,"auto")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overflow_y,"scroll")))){
return node;
} else {
var G__25303 = node.parentNode;
node = G__25303;
continue;
}
}
break;
}
});
/**
 * A section that scrolls through the flow-steps using sticky positioning.
 */
bb_web_ds_tools.views.landing.scroll_flow_section = (function bb_web_ds_tools$views$landing$scroll_flow_section(){
var container_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var active_step = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var listener_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"scroll-flow-section",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__5825__auto__ = cljs.core.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var el = temp__5825__auto__;
var parent = bb_web_ds_tools.views.landing.get_scroll_parent(el);
var handle_scroll = (function (){
var temp__5825__auto____$1 = cljs.core.deref(container_ref);
if(cljs.core.truth_(temp__5825__auto____$1)){
var el__$1 = temp__5825__auto____$1;
var rect = el__$1.getBoundingClientRect();
var parent_rect = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,window))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null):parent.getBoundingClientRect());
var parent_height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,window))?window.innerHeight:parent.clientHeight);
var top = (rect.top - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(parent_rect));
var height = rect.height;
var scroll_dist = (height - parent_height);
var raw_progress = (((scroll_dist === (0)))?(0):((- top) / scroll_dist));
var progress = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = (1);
var y__5114__auto__ = raw_progress;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var step_count = cljs.core.count(bb_web_ds_tools.views.landing.flow_steps);
var current = Math.floor((progress * step_count));
return cljs.core.reset_BANG_(active_step,(function (){var x__5113__auto__ = (step_count - (1));
var y__5114__auto__ = current;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
} else {
return null;
}
});
cljs.core.reset_BANG_(listener_ref,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword(null,"handler","handler",-195596612),handle_scroll], null));

parent.addEventListener("scroll",handle_scroll);

return handle_scroll();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto__ = cljs.core.deref(listener_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var map__25244 = temp__5825__auto__;
var map__25244__$1 = cljs.core.__destructure_map(map__25244);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25244__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25244__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return parent.removeEventListener("scroll",handler);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__25241_SHARP_){
return cljs.core.reset_BANG_(container_ref,p1__25241_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"relative h-[300vh] w-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sticky top-0 h-screen flex items-center justify-center overflow-hidden"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__25245){
var map__25246 = p__25245;
var map__25246__$1 = cljs.core.__destructure_map(map__25246);
var draw_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"title","title",636505583));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25246__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,cljs.core.deref(active_step));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute transition-all duration-700 ease-in-out transform flex flex-col items-center max-w-xl p-8 rounded-xl ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-2xl ",((active_QMARK_)?"opacity-100 translate-y-0 scale-100":"opacity-0 translate-y-10 scale-95")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.animated_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),draw_fn,new cljs.core.Keyword(null,"class","class",-2030961996),"w-32 h-32 mb-6 mx-auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-4xl font-bold mb-4 ",bb_web_ds_tools.theme.text_primary," text-center"].join('')], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl ",bb_web_ds_tools.theme.text_muted," text-center leading-relaxed"].join('')], null),desc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 mt-8"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$landing$scroll_flow_section_$_iter__25247(s__25248){
return (new cljs.core.LazySeq(null,(function (){
var s__25248__$1 = s__25248;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25248__$1);
if(temp__5825__auto__){
var s__25248__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25248__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__25248__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__25250 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__25249 = (0);
while(true){
if((i__25249 < size__5502__auto__)){
var i = cljs.core._nth(c__5501__auto__,i__25249);
cljs.core.chunk_append(b__25250,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-3 h-3 rounded-full transition-colors duration-300 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,idx))?bb_web_ds_tools.theme.text_accent:[bb_web_ds_tools.theme.bg_sidebar," opacity-50"].join(''))," bg-current"].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__25304 = (i__25249 + (1));
i__25249 = G__25304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25250),bb_web_ds_tools$views$landing$scroll_flow_section_$_iter__25247(cljs.core.chunk_rest(s__25248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25250),null);
}
} else {
var i = cljs.core.first(s__25248__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-3 h-3 rounded-full transition-colors duration-300 ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,idx))?bb_web_ds_tools.theme.text_accent:[bb_web_ds_tools.theme.bg_sidebar," opacity-50"].join(''))," bg-current"].join('')], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),bb_web_ds_tools$views$landing$scroll_flow_section_$_iter__25247(cljs.core.rest(s__25248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bb_web_ds_tools.views.landing.flow_steps)));
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null));
})),bb_web_ds_tools.views.landing.flow_steps)], null)], null);
})], null));
});
/**
 * Renders the landing page with animated feature cards.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.landing.landing_page = (function bb_web_ds_tools$views$landing$landing_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-full flex flex-col items-center relative font-['Source_Code_Pro']"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }\n     .animate-float { animation: float 6s ease-in-out infinite; }\n     .animate-float-delay-1 { animation: float 6s ease-in-out infinite; animation-delay: 1s; }\n     .animate-float-delay-2 { animation: float 6s ease-in-out infinite; animation-delay: 2s; }"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.background_canvas], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl w-full flex-grow flex flex-col justify-center z-10 p-8 pb-0"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center mb-8 space-y-8 animate-fade-in-up"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-6xl md:text-8xl font-extrabold mb-4 ",bb_web_ds_tools.theme.text_accent," tracking-tight drop-shadow-lg"].join('')], null),"The \"Swiss Army Knife\" of Data Science"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl md:text-3xl ",bb_web_ds_tools.theme.text_secondary," max-w-4xl mx-auto leading-relaxed font-light"].join('')], null),"Decrease I/O friction. Copy paste data like a pro. Visualize without tears."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["mt-8 text-xl ",bb_web_ds_tools.theme.text_secondary," max-w-3xl mx-auto italic opacity-80"].join('')], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.scroll_flow_section], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.js.map
