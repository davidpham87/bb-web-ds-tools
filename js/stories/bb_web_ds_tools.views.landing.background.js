var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.core.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution = {});
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
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
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

var n__5616__auto___25029 = (20);
var i_25030 = (0);
while(true){
if((i_25030 < n__5616__auto___25029)){
var seed_25031 = (t + (i_25030 * 0.1));
var scale_25032 = ((100) + ((50) * Math.sin(seed_25031)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__25005 = cljs.core.mod(i_25030,(4));
switch (G__25005) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25005)].join('')));

}
})());

var n__5616__auto___25034__$1 = (100);
var j_25035 = (0);
while(true){
if((j_25035 < n__5616__auto___25034__$1)){
var angle_25036 = ((j_25035 * 0.1) + seed_25031);
var r_25037 = (scale_25032 + ((scale_25032 * 0.5) * Math.cos((angle_25036 * (3)))));
var x_25038 = ((width / (2)) + (r_25037 * Math.cos(angle_25036)));
var y_25039 = ((height / (2)) + (r_25037 * Math.sin(angle_25036)));
if((j_25035 === (0))){
ctx.moveTo(x_25038,y_25039);
} else {
ctx.lineTo(x_25038,y_25039);
}

var G__25040 = (j_25035 + (1));
j_25035 = G__25040;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__25041 = (i_25030 + (1));
i_25030 = G__25041;
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
var wave_t_25042 = (t + (i * 1.5));
var y_offset_25043 = ((height / (2)) + ((200) * Math.sin(wave_t_25042)));
(ctx.fillStyle = (function (){var G__25012 = cljs.core.mod(i,(3));
switch (G__25012) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25012)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__25013_25045 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__25014_25046 = null;
var count__25015_25047 = (0);
var i__25016_25048 = (0);
while(true){
if((i__25016_25048 < count__25015_25047)){
var x_25049 = chunk__25014_25046.cljs$core$IIndexed$_nth$arity$2(null,i__25016_25048);
var y_25050 = (y_offset_25043 + ((100) * Math.sin((wave_t_25042 + (x_25049 * 0.005)))));
ctx.lineTo(x_25049,y_25050);


var G__25051 = seq__25013_25045;
var G__25052 = chunk__25014_25046;
var G__25053 = count__25015_25047;
var G__25054 = (i__25016_25048 + (1));
seq__25013_25045 = G__25051;
chunk__25014_25046 = G__25052;
count__25015_25047 = G__25053;
i__25016_25048 = G__25054;
continue;
} else {
var temp__5825__auto___25055 = cljs.core.seq(seq__25013_25045);
if(temp__5825__auto___25055){
var seq__25013_25056__$1 = temp__5825__auto___25055;
if(cljs.core.chunked_seq_QMARK_(seq__25013_25056__$1)){
var c__5548__auto___25057 = cljs.core.chunk_first(seq__25013_25056__$1);
var G__25058 = cljs.core.chunk_rest(seq__25013_25056__$1);
var G__25059 = c__5548__auto___25057;
var G__25060 = cljs.core.count(c__5548__auto___25057);
var G__25061 = (0);
seq__25013_25045 = G__25058;
chunk__25014_25046 = G__25059;
count__25015_25047 = G__25060;
i__25016_25048 = G__25061;
continue;
} else {
var x_25062 = cljs.core.first(seq__25013_25056__$1);
var y_25063 = (y_offset_25043 + ((100) * Math.sin((wave_t_25042 + (x_25062 * 0.005)))));
ctx.lineTo(x_25062,y_25063);


var G__25064 = cljs.core.next(seq__25013_25056__$1);
var G__25065 = null;
var G__25066 = (0);
var G__25067 = (0);
seq__25013_25045 = G__25064;
chunk__25014_25046 = G__25065;
count__25015_25047 = G__25066;
i__25016_25048 = G__25067;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__25068 = (i + (1));
i = G__25068;
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
var map__25028 = cljs.core.deref(dimensions);
var map__25028__$1 = cljs.core.__destructure_map(map__25028);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25028__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25028__$1,new cljs.core.Keyword(null,"height","height",1025178622));
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
var temp__5825__auto___25069 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___25069)){
var id_25070 = temp__5825__auto___25069;
cancelAnimationFrame(id_25070);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__25024_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__25024_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.background.js.map
