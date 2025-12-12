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
var update_colors = (function (){
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
var observer = (new ResizeObserver((function (_){
return update_size();
})));
observer.observe(document.body);

cljs.core.reset_BANG_(resize_observer,observer);

update_size();

update_colors();

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$views$landing$background_canvas_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__25099 = cljs.core.deref(dimensions);
var map__25099__$1 = cljs.core.__destructure_map(map__25099);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25099__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25099__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var t = (elapsed * 2.0E-4);
var cols = cljs.core.deref(colors);
if((((width > (0))) && ((height > (0))))){
ctx.clearRect((0),(0),width,height);

(ctx.lineWidth = (2));

(ctx.globalAlpha = 0.15);

var n__5616__auto___25164 = (20);
var i_25165 = (0);
while(true){
if((i_25165 < n__5616__auto___25164)){
var seed_25166 = (t + (i_25165 * 0.1));
var scale_25167 = ((100) + ((50) * Math.sin(seed_25166)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__25111 = cljs.core.mod(i_25165,(4));
switch (G__25111) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25111)].join('')));

}
})());

var n__5616__auto___25169__$1 = (100);
var j_25170 = (0);
while(true){
if((j_25170 < n__5616__auto___25169__$1)){
var angle_25171 = ((j_25170 * 0.1) + seed_25166);
var r_25172 = (scale_25167 + ((scale_25167 * 0.5) * Math.cos((angle_25171 * (3)))));
var x_25173 = ((width / (2)) + (r_25172 * Math.cos(angle_25171)));
var y_25174 = ((height / (2)) + (r_25172 * Math.sin(angle_25171)));
if((j_25170 === (0))){
ctx.moveTo(x_25173,y_25174);
} else {
ctx.lineTo(x_25173,y_25174);
}

var G__25175 = (j_25170 + (1));
j_25170 = G__25175;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__25176 = (i_25165 + (1));
i_25165 = G__25176;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 0.05);

var n__5616__auto___25177 = (5);
var i_25178 = (0);
while(true){
if((i_25178 < n__5616__auto___25177)){
var wave_t_25179 = (t + (i_25178 * 1.5));
var y_offset_25180 = ((height / (2)) + ((200) * Math.sin(wave_t_25179)));
(ctx.fillStyle = (function (){var G__25138 = cljs.core.mod(i_25178,(3));
switch (G__25138) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25138)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__25143_25182 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__25144_25183 = null;
var count__25145_25184 = (0);
var i__25146_25185 = (0);
while(true){
if((i__25146_25185 < count__25145_25184)){
var x_25186 = chunk__25144_25183.cljs$core$IIndexed$_nth$arity$2(null,i__25146_25185);
var y_25189 = (y_offset_25180 + ((100) * Math.sin((wave_t_25179 + (x_25186 * 0.005)))));
ctx.lineTo(x_25186,y_25189);


var G__25190 = seq__25143_25182;
var G__25191 = chunk__25144_25183;
var G__25192 = count__25145_25184;
var G__25193 = (i__25146_25185 + (1));
seq__25143_25182 = G__25190;
chunk__25144_25183 = G__25191;
count__25145_25184 = G__25192;
i__25146_25185 = G__25193;
continue;
} else {
var temp__5825__auto___25194__$1 = cljs.core.seq(seq__25143_25182);
if(temp__5825__auto___25194__$1){
var seq__25143_25195__$1 = temp__5825__auto___25194__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25143_25195__$1)){
var c__5548__auto___25196 = cljs.core.chunk_first(seq__25143_25195__$1);
var G__25197 = cljs.core.chunk_rest(seq__25143_25195__$1);
var G__25198 = c__5548__auto___25196;
var G__25199 = cljs.core.count(c__5548__auto___25196);
var G__25200 = (0);
seq__25143_25182 = G__25197;
chunk__25144_25183 = G__25198;
count__25145_25184 = G__25199;
i__25146_25185 = G__25200;
continue;
} else {
var x_25201 = cljs.core.first(seq__25143_25195__$1);
var y_25202 = (y_offset_25180 + ((100) * Math.sin((wave_t_25179 + (x_25201 * 0.005)))));
ctx.lineTo(x_25201,y_25202);


var G__25203 = cljs.core.next(seq__25143_25195__$1);
var G__25204 = null;
var G__25205 = (0);
var G__25206 = (0);
seq__25143_25182 = G__25203;
chunk__25144_25183 = G__25204;
count__25145_25184 = G__25205;
i__25146_25185 = G__25206;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__25207 = (i_25178 + (1));
i_25178 = G__25207;
continue;
} else {
}
break;
}
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$views$landing$background_canvas_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___25208 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___25208)){
var id_25209 = temp__5825__auto___25208;
cancelAnimationFrame(id_25209);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__25071_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__25071_SHARP_);
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-full flex flex-col items-center relative overflow-hidden"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.background_canvas], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl w-full flex-grow flex flex-col justify-center z-10 p-8"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center mb-16 space-y-8 animate-fade-in-up"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl md:text-7xl font-extrabold mb-4 ",bb_web_ds_tools.theme.text_accent," tracking-tight drop-shadow-lg"].join('')], null),"The \"Swiss Army Knife\" of Data Science"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl md:text-2xl ",bb_web_ds_tools.theme.text_secondary," max-w-4xl mx-auto leading-relaxed font-light"].join('')], null),"Decrease I/O friction. Copy paste data like a pro. Visualize without tears."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-4xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\u26A1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Zero I/O Friction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_muted].join('')], null),"Stop wrestling with file paths. Just paste your data and go."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-4xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\uD83D\uDCCA"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Instant Visuals"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_muted].join('')], null),"Charts that look handwritten, generated in milliseconds."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-4xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\uD83D\uDEE0\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Multi-Runtime"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm ",bb_web_ds_tools.theme.text_muted].join('')], null),"Clojure, Python, R. Run them all. Simultaneously. Chaos awaits."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["mt-8 text-lg ",bb_web_ds_tools.theme.text_secondary," max-w-3xl mx-auto italic opacity-80"].join('')], null),"\"It's like having a data science team in your pocket, but they don't ask for equity.\""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-8"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$landing$landing_page_$_iter__25155(s__25156){
return (new cljs.core.LazySeq(null,(function (){
var s__25156__$1 = s__25156;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__25156__$1);
if(temp__5825__auto__){
var s__25156__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25156__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__25156__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__25158 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__25157 = (0);
while(true){
if((i__25157 < size__5502__auto__)){
var card = cljs.core._nth(c__5501__auto__,i__25157);
cljs.core.chunk_append(b__25158,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__25212 = (i__25157 + (1));
i__25157 = G__25212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25158),bb_web_ds_tools$views$landing$landing_page_$_iter__25155(cljs.core.chunk_rest(s__25156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25158),null);
}
} else {
var card = cljs.core.first(s__25156__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)),bb_web_ds_tools$views$landing$landing_page_$_iter__25155(cljs.core.rest(s__25156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.components.landing.feature_cards);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full py-8 mt-16 border-t ",bb_web_ds_tools.theme.border_default," z-10 bg-opacity-80 backdrop-blur-sm ",bb_web_ds_tools.theme.bg_page].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center gap-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"wiki/",new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),"Wiki"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"blog/",new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),"Blog"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/davidpham87/bb-web-ds-tools",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),["flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),bb_web_ds_tools.views.landing.github_icon,"View on GitHub"], null)], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.js.map
