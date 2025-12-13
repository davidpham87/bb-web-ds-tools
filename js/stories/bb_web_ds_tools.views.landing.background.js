var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.views.landing.background.js");

goog.provide('bb_web_ds_tools.views.landing.background');
/**
 * Updates the color state based on CSS variables.
 */
bb_web_ds_tools.views.landing.background.update_background_colors = (function bb_web_ds_tools$views$landing$background$update_background_colors(colors){
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
bb_web_ds_tools.views.landing.background.draw_background_pattern = (function bb_web_ds_tools$views$landing$background$draw_background_pattern(ctx,width,height,t,cols){
ctx.clearRect((0),(0),width,height);

(ctx.lineWidth = (2));

(ctx.globalAlpha = 0.15);

var n__5616__auto___24999 = (20);
var i_25000 = (0);
while(true){
if((i_25000 < n__5616__auto___24999)){
var seed_25001 = (t + (i_25000 * 0.1));
var scale_25002 = ((100) + ((50) * Math.sin(seed_25001)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__24982 = cljs.core.mod(i_25000,(4));
switch (G__24982) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24982)].join('')));

}
})());

var n__5616__auto___25004__$1 = (100);
var j_25005 = (0);
while(true){
if((j_25005 < n__5616__auto___25004__$1)){
var angle_25006 = ((j_25005 * 0.1) + seed_25001);
var r_25007 = (scale_25002 + ((scale_25002 * 0.5) * Math.cos((angle_25006 * (3)))));
var x_25008 = ((width / (2)) + (r_25007 * Math.cos(angle_25006)));
var y_25009 = ((height / (2)) + (r_25007 * Math.sin(angle_25006)));
if((j_25005 === (0))){
ctx.moveTo(x_25008,y_25009);
} else {
ctx.lineTo(x_25008,y_25009);
}

var G__25010 = (j_25005 + (1));
j_25005 = G__25010;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__25011 = (i_25000 + (1));
i_25000 = G__25011;
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
var wave_t_25012 = (t + (i * 1.5));
var y_offset_25013 = ((height / (2)) + ((200) * Math.sin(wave_t_25012)));
(ctx.fillStyle = (function (){var G__24983 = cljs.core.mod(i,(3));
switch (G__24983) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24983)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__24984_25017 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__24985_25018 = null;
var count__24986_25019 = (0);
var i__24987_25020 = (0);
while(true){
if((i__24987_25020 < count__24986_25019)){
var x_25022 = chunk__24985_25018.cljs$core$IIndexed$_nth$arity$2(null,i__24987_25020);
var y_25023 = (y_offset_25013 + ((100) * Math.sin((wave_t_25012 + (x_25022 * 0.005)))));
ctx.lineTo(x_25022,y_25023);


var G__25024 = seq__24984_25017;
var G__25025 = chunk__24985_25018;
var G__25026 = count__24986_25019;
var G__25027 = (i__24987_25020 + (1));
seq__24984_25017 = G__25024;
chunk__24985_25018 = G__25025;
count__24986_25019 = G__25026;
i__24987_25020 = G__25027;
continue;
} else {
var temp__5825__auto___25028 = cljs.core.seq(seq__24984_25017);
if(temp__5825__auto___25028){
var seq__24984_25029__$1 = temp__5825__auto___25028;
if(cljs.core.chunked_seq_QMARK_(seq__24984_25029__$1)){
var c__5548__auto___25030 = cljs.core.chunk_first(seq__24984_25029__$1);
var G__25031 = cljs.core.chunk_rest(seq__24984_25029__$1);
var G__25032 = c__5548__auto___25030;
var G__25033 = cljs.core.count(c__5548__auto___25030);
var G__25034 = (0);
seq__24984_25017 = G__25031;
chunk__24985_25018 = G__25032;
count__24986_25019 = G__25033;
i__24987_25020 = G__25034;
continue;
} else {
var x_25035 = cljs.core.first(seq__24984_25029__$1);
var y_25036 = (y_offset_25013 + ((100) * Math.sin((wave_t_25012 + (x_25035 * 0.005)))));
ctx.lineTo(x_25035,y_25036);


var G__25037 = cljs.core.next(seq__24984_25029__$1);
var G__25038 = null;
var G__25039 = (0);
var G__25040 = (0);
seq__24984_25017 = G__25037;
chunk__24985_25018 = G__25038;
count__24986_25019 = G__25039;
i__24987_25020 = G__25040;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__25041 = (i + (1));
i = G__25041;
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
bb_web_ds_tools.views.landing.background.background_canvas = (function bb_web_ds_tools$views$landing$background$background_canvas(){
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

bb_web_ds_tools.views.landing.background.update_background_colors(colors);

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$views$landing$background$background_canvas_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__24994 = cljs.core.deref(dimensions);
var map__24994__$1 = cljs.core.__destructure_map(map__24994);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24994__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24994__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var t = (elapsed * 2.0E-4);
var cols = cljs.core.deref(colors);
if((((width > (0))) && ((height > (0))))){
bb_web_ds_tools.views.landing.background.draw_background_pattern(ctx,width,height,t,cols);
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$views$landing$background$background_canvas_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___25045 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___25045)){
var id_25046 = temp__5825__auto___25045;
cancelAnimationFrame(id_25046);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__24988_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__24988_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.background.js.map
