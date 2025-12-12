var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./re_frame.core.js");
require("./reagent.core.js");
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

var n__5616__auto___25145 = (20);
var i_25146 = (0);
while(true){
if((i_25146 < n__5616__auto___25145)){
var seed_25147 = (t + (i_25146 * 0.1));
var scale_25148 = ((100) + ((50) * Math.sin(seed_25147)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__25081 = cljs.core.mod(i_25146,(4));
switch (G__25081) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25081)].join('')));

}
})());

var n__5616__auto___25150__$1 = (100);
var j_25151 = (0);
while(true){
if((j_25151 < n__5616__auto___25150__$1)){
var angle_25152 = ((j_25151 * 0.1) + seed_25147);
var r_25153 = (scale_25148 + ((scale_25148 * 0.5) * Math.cos((angle_25152 * (3)))));
var x_25154 = ((width / (2)) + (r_25153 * Math.cos(angle_25152)));
var y_25155 = ((height / (2)) + (r_25153 * Math.sin(angle_25152)));
if((j_25151 === (0))){
ctx.moveTo(x_25154,y_25155);
} else {
ctx.lineTo(x_25154,y_25155);
}

var G__25156 = (j_25151 + (1));
j_25151 = G__25156;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__25157 = (i_25146 + (1));
i_25146 = G__25157;
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
var wave_t_25158 = (t + (i * 1.5));
var y_offset_25159 = ((height / (2)) + ((200) * Math.sin(wave_t_25158)));
(ctx.fillStyle = (function (){var G__25110 = cljs.core.mod(i,(3));
switch (G__25110) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25110)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__25112_25165 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__25113_25166 = null;
var count__25114_25167 = (0);
var i__25115_25168 = (0);
while(true){
if((i__25115_25168 < count__25114_25167)){
var x_25169 = chunk__25113_25166.cljs$core$IIndexed$_nth$arity$2(null,i__25115_25168);
var y_25170 = (y_offset_25159 + ((100) * Math.sin((wave_t_25158 + (x_25169 * 0.005)))));
ctx.lineTo(x_25169,y_25170);


var G__25171 = seq__25112_25165;
var G__25172 = chunk__25113_25166;
var G__25173 = count__25114_25167;
var G__25174 = (i__25115_25168 + (1));
seq__25112_25165 = G__25171;
chunk__25113_25166 = G__25172;
count__25114_25167 = G__25173;
i__25115_25168 = G__25174;
continue;
} else {
var temp__5825__auto___25178 = cljs.core.seq(seq__25112_25165);
if(temp__5825__auto___25178){
var seq__25112_25179__$1 = temp__5825__auto___25178;
if(cljs.core.chunked_seq_QMARK_(seq__25112_25179__$1)){
var c__5548__auto___25180 = cljs.core.chunk_first(seq__25112_25179__$1);
var G__25181 = cljs.core.chunk_rest(seq__25112_25179__$1);
var G__25182 = c__5548__auto___25180;
var G__25183 = cljs.core.count(c__5548__auto___25180);
var G__25184 = (0);
seq__25112_25165 = G__25181;
chunk__25113_25166 = G__25182;
count__25114_25167 = G__25183;
i__25115_25168 = G__25184;
continue;
} else {
var x_25185 = cljs.core.first(seq__25112_25179__$1);
var y_25186 = (y_offset_25159 + ((100) * Math.sin((wave_t_25158 + (x_25185 * 0.005)))));
ctx.lineTo(x_25185,y_25186);


var G__25187 = cljs.core.next(seq__25112_25179__$1);
var G__25188 = null;
var G__25189 = (0);
var G__25190 = (0);
seq__25112_25165 = G__25187;
chunk__25113_25166 = G__25188;
count__25114_25167 = G__25189;
i__25115_25168 = G__25190;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__25191 = (i + (1));
i = G__25191;
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
var map__25130 = cljs.core.deref(dimensions);
var map__25130__$1 = cljs.core.__destructure_map(map__25130);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25130__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25130__$1,new cljs.core.Keyword(null,"height","height",1025178622));
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
var temp__5825__auto___25197 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___25197)){
var id_25198 = temp__5825__auto___25197;
cancelAnimationFrame(id_25198);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__25122_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__25122_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});
/**
 * Renders the landing page with animated feature cards.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.landing.landing_page = (function bb_web_ds_tools$views$landing$landing_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-full flex flex-col items-center relative overflow-hidden font-['Source_Code_Pro']"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }\n     .animate-float { animation: float 6s ease-in-out infinite; }\n     .animate-float-delay-1 { animation: float 6s ease-in-out infinite; animation-delay: 1s; }\n     .animate-float-delay-2 { animation: float 6s ease-in-out infinite; animation-delay: 2s; }"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.background_canvas], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl w-full flex-grow flex flex-col justify-center z-10 p-8"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center mb-16 space-y-8 animate-fade-in-up"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-6xl md:text-8xl font-extrabold mb-4 ",bb_web_ds_tools.theme.text_accent," tracking-tight drop-shadow-lg"].join('')], null),"The \"Swiss Army Knife\" of Data Science"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl md:text-3xl ",bb_web_ds_tools.theme.text_secondary," max-w-4xl mx-auto leading-relaxed font-light"].join('')], null),"Decrease I/O friction. Copy paste data like a pro. Visualize without tears."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mt-12"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300 animate-float"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\u26A1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Zero I/O Friction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base ",bb_web_ds_tools.theme.text_muted].join('')], null),"Stop wrestling with file paths. Just paste your data and go."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300 animate-float-delay-1"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\uD83D\uDCCA"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Instant Visuals"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base ",bb_web_ds_tools.theme.text_muted].join('')], null),"Charts that look handwritten, generated in milliseconds."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300 animate-float-delay-2"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\uD83D\uDEE0\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Multi-Runtime"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base ",bb_web_ds_tools.theme.text_muted].join('')], null),"Clojure, Python, R. Run them all. Simultaneously. Chaos awaits."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["mt-8 text-xl ",bb_web_ds_tools.theme.text_secondary," max-w-3xl mx-auto italic opacity-80"].join('')], null),"\"It's like having a data science team in your pocket, but they don't ask for equity.\""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-8"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$landing$landing_page_$_iter__25138(s__25139){
return (new cljs.core.LazySeq(null,(function (){
var s__25139__$1 = s__25139;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25139__$1);
if(temp__5825__auto__){
var s__25139__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25139__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__25139__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__25141 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__25140 = (0);
while(true){
if((i__25140 < size__5502__auto__)){
var card = cljs.core._nth(c__5501__auto__,i__25140);
cljs.core.chunk_append(b__25141,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__25201 = (i__25140 + (1));
i__25140 = G__25201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25141),bb_web_ds_tools$views$landing$landing_page_$_iter__25138(cljs.core.chunk_rest(s__25139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25141),null);
}
} else {
var card = cljs.core.first(s__25139__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)),bb_web_ds_tools$views$landing$landing_page_$_iter__25138(cljs.core.rest(s__25139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.components.landing.feature_cards);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full py-8 mt-16 border-t ",bb_web_ds_tools.theme.border_default," z-10 bg-opacity-80 backdrop-blur-sm ",bb_web_ds_tools.theme.bg_page].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center gap-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"wiki/",new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),"Wiki"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"blog/",new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),"Blog"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/davidpham87/bb-web-ds-tools",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),bb_web_ds_tools.views.landing.github_icon,"View on GitHub"], null)], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.js.map
