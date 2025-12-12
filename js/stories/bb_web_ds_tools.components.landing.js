var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.core.js");
require("./bb_web_ds_tools.theme.js");
require("./re_frame.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.js");

goog.provide('bb_web_ds_tools.components.landing');
bb_web_ds_tools.components.landing.setup_canvas = (function bb_web_ds_tools$components$landing$setup_canvas(canvas,width,height){
var ctx = canvas.getContext("2d");
var dpr = (function (){var or__5025__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
(canvas.width = (width * dpr));

(canvas.height = (height * dpr));

ctx.scale(dpr,dpr);

return ctx;
});
/**
 * A card with a canvas animation header.
 * 
 *   Args:
 *  props (map):
 *    - :label (string): Title.
 *    - :description (string): Description text.
 *    - :route (keyword): Navigation route.
 *    - :draw-fn (fn [ctx width height timestamp]): Animation function.
 *   
 */
bb_web_ds_tools.components.landing.canvas_card = (function bb_web_ds_tools$components$landing$canvas_card(p__25014){
var map__25015 = p__25014;
var map__25015__$1 = cljs.core.__destructure_map(map__25015);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25015__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25015__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25015__$1,new cljs.core.Keyword(null,"route","route",329891309));
var draw_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25015__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var canvas_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animation_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var resize_observer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var dimensions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),["canvas-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__5825__auto__ = cljs.core.deref(canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var ctx = canvas.getContext("2d");
var update_size = (function (){
var w = canvas.offsetWidth;
var h = canvas.offsetHeight;
cljs.core.reset_BANG_(dimensions,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null));

return bb_web_ds_tools.components.landing.setup_canvas(canvas,w,h);
});
var observer = (new ResizeObserver((function (_){
return update_size();
})));
observer.observe(canvas);

cljs.core.reset_BANG_(resize_observer,observer);

update_size();

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$components$landing$canvas_card_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__25016 = cljs.core.deref(dimensions);
var map__25016__$1 = cljs.core.__destructure_map(map__25016);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25016__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25016__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((((width > (0))) && ((height > (0))))){
(draw_fn.cljs$core$IFn$_invoke$arity$4 ? draw_fn.cljs$core$IFn$_invoke$arity$4(ctx,width,height,elapsed) : draw_fn.call(null,ctx,width,height,elapsed));
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$components$landing$canvas_card_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___25037 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___25037)){
var id_25038 = temp__5825__auto___25037;
cancelAnimationFrame(id_25038);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col md:flex-row h-auto md:h-64 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer border ",bb_web_ds_tools.theme.border_subtle," ",bb_web_ds_tools.theme.border_hover," ",bb_web_ds_tools.theme.bg_card].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),route,null,null], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative w-full md:w-1/3 h-48 md:h-full ",bb_web_ds_tools.theme.bg_sidebar," border-b md:border-b-0 md:border-r ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__25013_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__25013_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full block"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 flex flex-col justify-center w-full md:w-2/3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl font-bold mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base leading-relaxed ",bb_web_ds_tools.theme.text_primary," opacity-90"].join('')], null),description], null)], null)], null);
})], null));
});
bb_web_ds_tools.components.landing.clear = (function bb_web_ds_tools$components$landing$clear(ctx,w,h){
var style = getComputedStyle(document.body);
var bg = style.getPropertyValue("--bg-sidebar");
(ctx.fillStyle = ((cljs.core.empty_QMARK_(bg))?"#303030":bg));

return ctx.fillRect((0),(0),w,h);
});
bb_web_ds_tools.components.landing.colors = bb_web_ds_tools.theme.colors;
bb_web_ds_tools.components.landing.zenburn = bb_web_ds_tools.utils.themes.get_theme(new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
bb_web_ds_tools.components.landing.draw_workspaces = (function bb_web_ds_tools$components$landing$draw_workspaces(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cycle = cljs.core.mod(t,(4000));
var open_phase = (cycle < (2000));
var angle = ((open_phase)?((Math.PI * 0.1) * Math.sin((t * 0.003))):(0));
var cx = (w / (2));
var cy = (h / (2));
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.save();

ctx.translate(cx,cy);

ctx.beginPath();

ctx.moveTo((-40),(-30));

ctx.lineTo((40),(-30));

ctx.lineTo((40),(30));

ctx.lineTo((-40),(30));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.moveTo((-40),(30));

ctx.lineTo((40),(30));

ctx.lineTo(((40) + (Math.sin(angle) * (10))),((-30) + (Math.cos(angle) * (-10))));

ctx.lineTo(((-40) + (Math.sin(angle) * (10))),((-30) + (Math.cos(angle) * (-10))));

ctx.fill();

return ctx.restore();
});
bb_web_ds_tools.components.landing.draw_app_db = (function bb_web_ds_tools$components$landing$draw_app_db(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy - (20)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

ctx.beginPath();

ctx.rect((cx - (40)),(cy - (20)),(80),(50));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (30)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (25)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_25039 = (i * (1000));
var y_pos_25040 = ((-50) + cljs.core.mod(((t + offset_25039) * 0.05),(100)));
var x_pos_25041 = (cx + ((60) * Math.sin(((t + offset_25039) * 0.002))));
if((((y_pos_25040 > (-50))) && ((y_pos_25040 < (50))))){
ctx.beginPath();

ctx.arc(x_pos_25041,(cy + y_pos_25040),(3),(0),(Math.PI * (2)));

ctx.fill();
} else {
}

var G__25042 = (i + (1));
i = G__25042;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.draw_code = (function bb_web_ds_tools$components$landing$draw_code(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var line_h = (14);
var start_x = ((w / (2)) - (80));
var start_y = ((h / (2)) - (60));
var chars_per_line = (30);
var total_lines = (8);
var typer_pos = cljs.core.mod(Math.floor((t / (50))),(chars_per_line * total_lines));
(ctx.font = "12px monospace");

var n__5616__auto___25043 = total_lines;
var i_25044 = (0);
while(true){
if((i_25044 < n__5616__auto___25043)){
var y_25045 = (start_y + (i_25044 * line_h));
var chars_25046 = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (typer_pos - (i_25044 * chars_per_line));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((chars_25046 > (0))){
(ctx.fillStyle = ((cljs.core.even_QMARK_(i_25044))?new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn):new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)));

ctx.fillRect(start_x,y_25045,(chars_25046 * (5)),(8));
} else {
}

var G__25047 = (i_25044 + (1));
i_25044 = G__25047;
continue;
} else {
}
break;
}

var current_line = Math.floor((typer_pos / chars_per_line));
var current_char = cljs.core.mod(typer_pos,chars_per_line);
if((current_line < total_lines)){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

return ctx.fillRect((start_x + (current_char * (5))),(start_y + (current_line * line_h)),(2),(12));
} else {
return null;
}
});
bb_web_ds_tools.components.landing.draw_datasets = (function bb_web_ds_tools$components$landing$draw_datasets(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cols = (5);
var bar_w = (20);
var gap = (10);
var total_w = ((cols * bar_w) + ((cols - (1)) * gap));
var start_x = ((w / (2)) - (total_w / (2)));
var base_y = ((h / (2)) + (40));
var n__5616__auto__ = cols;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var freq_25048 = (0.002 + (i * 0.001));
var height_25049 = ((30) + ((40) * Math.abs(Math.sin((t * freq_25048)))));
var x_25050 = (start_x + (i * (bar_w + gap)));
var y_25051 = (base_y - height_25049);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","uri","portal.colors/uri",1909526219).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),cljs.core.mod(i,(5))));

ctx.fillRect(x_25050,y_25051,bar_w,height_25049);

var G__25052 = (i + (1));
i = G__25052;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.draw_malli = (function bb_web_ds_tools$components$landing$draw_malli(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var radius = (40);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (5));

ctx.beginPath();

ctx.arc(cx,cy,radius,(0),(Math.PI * (2)));

ctx.stroke();

var progress_25053 = cljs.core.mod((t * 0.001),(2));
var p_25054 = (function (){var x__5113__auto__ = (1);
var y__5114__auto__ = progress_25053;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((p_25054 > (0))){
ctx.beginPath();

ctx.moveTo((cx - (20)),cy);

ctx.lineTo((cx - (5)),(cy + (15)));

if((p_25054 > 0.5)){
ctx.lineTo((cx + (25)),(cy - (20)));
} else {
}

ctx.stroke();
} else {
}

(ctx.font = "20px sans-serif");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.textAlign = "center");

return ctx.fillText("Valid",cx,(cy + (60)));
});
bb_web_ds_tools.components.landing.draw_honeysql = (function bb_web_ds_tools$components$landing$draw_honeysql(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var orbit_r = (60);
var angle = (t * 0.001);
(ctx.font = "bold 24px sans-serif");

(ctx.textAlign = "center");

(ctx.textBaseline = "middle");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillText("{}",cx,cy);

var seq__25017 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null)], null));
var chunk__25018 = null;
var count__25019 = (0);
var i__25020 = (0);
while(true){
if((i__25020 < count__25019)){
var vec__25027 = chunk__25018.cljs$core$IIndexed$_nth$arity$2(null,i__25020);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25027,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25027,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25027,(2),null);
var theta_25055 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_25056 = (cx + (orbit_r * Math.cos(theta_25055)));
var y_25057 = (cy + (orbit_r * Math.sin(theta_25055)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_25056,y_25057);


var G__25058 = seq__25017;
var G__25059 = chunk__25018;
var G__25060 = count__25019;
var G__25061 = (i__25020 + (1));
seq__25017 = G__25058;
chunk__25018 = G__25059;
count__25019 = G__25060;
i__25020 = G__25061;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25017);
if(temp__5825__auto__){
var seq__25017__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25017__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25017__$1);
var G__25062 = cljs.core.chunk_rest(seq__25017__$1);
var G__25063 = c__5548__auto__;
var G__25064 = cljs.core.count(c__5548__auto__);
var G__25065 = (0);
seq__25017 = G__25062;
chunk__25018 = G__25063;
count__25019 = G__25064;
i__25020 = G__25065;
continue;
} else {
var vec__25030 = cljs.core.first(seq__25017__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25030,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25030,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25030,(2),null);
var theta_25066 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_25067 = (cx + (orbit_r * Math.cos(theta_25066)));
var y_25068 = (cy + (orbit_r * Math.sin(theta_25066)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_25067,y_25068);


var G__25069 = cljs.core.next(seq__25017__$1);
var G__25070 = null;
var G__25071 = (0);
var G__25072 = (0);
seq__25017 = G__25069;
chunk__25018 = G__25070;
count__25019 = G__25071;
i__25020 = G__25072;
continue;
}
} else {
return null;
}
}
break;
}
});
bb_web_ds_tools.components.landing.draw_vega_lite = (function bb_web_ds_tools$components$landing$draw_vega_lite(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
ctx.beginPath();

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

var n__5616__auto___25073 = (100);
var i_25074 = (0);
while(true){
if((i_25074 < n__5616__auto___25073)){
var x_25075 = ((cx - (100)) + (i_25074 * (2)));
var y_25076 = (cy + ((40) * Math.sin(((i_25074 * 0.1) + (t * 0.005)))));
if((i_25074 === (0))){
ctx.moveTo(x_25075,y_25076);
} else {
ctx.lineTo(x_25075,y_25076);
}

var G__25077 = (i_25074 + (1));
i_25074 = G__25077;
continue;
} else {
}
break;
}

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-remove","portal.colors/diff-remove",-1316767592).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_25078 = (i * (20));
var x_25079 = ((cx - (100)) + (offset_25078 * (2)));
var y_25080 = (cy + ((40) * Math.sin(((offset_25078 * 0.1) + (t * 0.005)))));
ctx.beginPath();

ctx.arc(x_25079,y_25080,(4),(0),(Math.PI * (2)));

ctx.fill();

var G__25082 = (i + (1));
i = G__25082;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.draw_gemma = (function bb_web_ds_tools$components$landing$draw_gemma(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scale = ((1) + (0.1 * Math.sin((t * 0.005))));
ctx.save();

ctx.translate(cx,cy);

ctx.scale(scale,scale);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-30),(-30),(60),(60));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));

var blink_25083 = cljs.core.mod((t * 5.0E-4),(5));
if((blink_25083 > 4.8)){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));
} else {
}

return ctx.restore();
});
bb_web_ds_tools.components.landing.draw_settings = (function bb_web_ds_tools$components$landing$draw_settings(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var draw_gear = (function (x,y,r,teeth,speed,color){
ctx.save();

ctx.translate(x,y);

ctx.rotate((t * speed));

(ctx.fillStyle = color);

ctx.beginPath();

var outer_r_25084 = r;
var inner_r_25085 = (r * 0.8);
var hole_r_25086 = (r * 0.3);
var n__5616__auto___25087 = (teeth * (2));
var i_25088 = (0);
while(true){
if((i_25088 < n__5616__auto___25087)){
var angle_25090 = (i_25088 * (Math.PI / teeth));
var rad_25091 = ((cljs.core.even_QMARK_(i_25088))?outer_r_25084:inner_r_25085);
ctx.lineTo((rad_25091 * Math.cos(angle_25090)),(rad_25091 * Math.sin(angle_25090)));

var G__25093 = (i_25088 + (1));
i_25088 = G__25093;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),hole_r_25086,(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

return ctx.restore();
});
draw_gear(cx,cy,(40),(8),0.001,new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

return draw_gear((cx + (50)),(cy + (50)),(25),(6),-0.002,new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));
});
bb_web_ds_tools.components.landing.draw_changelog = (function bb_web_ds_tools$components$landing$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__25033 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__25034 = null;
var count__25035 = (0);
var i__25036 = (0);
while(true){
if((i__25036 < count__25035)){
var i = chunk__25034.cljs$core$IIndexed$_nth$arity$2(null,i__25036);
var y_25094 = (((200) + (i * (20))) - scroll_y);
if((((y_25094 > (0))) && ((y_25094 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_25094);
} else {
}


var G__25095 = seq__25033;
var G__25096 = chunk__25034;
var G__25097 = count__25035;
var G__25098 = (i__25036 + (1));
seq__25033 = G__25095;
chunk__25034 = G__25096;
count__25035 = G__25097;
i__25036 = G__25098;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25033);
if(temp__5825__auto__){
var seq__25033__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25033__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25033__$1);
var G__25100 = cljs.core.chunk_rest(seq__25033__$1);
var G__25101 = c__5548__auto__;
var G__25102 = cljs.core.count(c__5548__auto__);
var G__25103 = (0);
seq__25033 = G__25100;
chunk__25034 = G__25101;
count__25035 = G__25102;
i__25036 = G__25103;
continue;
} else {
var i = cljs.core.first(seq__25033__$1);
var y_25104 = (((200) + (i * (20))) - scroll_y);
if((((y_25104 > (0))) && ((y_25104 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_25104);
} else {
}


var G__25105 = cljs.core.next(seq__25033__$1);
var G__25106 = null;
var G__25107 = (0);
var G__25108 = (0);
seq__25033 = G__25105;
chunk__25034 = G__25106;
count__25035 = G__25107;
i__25036 = G__25108;
continue;
}
} else {
return null;
}
}
break;
}
});
bb_web_ds_tools.components.landing.feature_cards = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"description","description",-1428560544),"Because sometimes you just want to look at a CSV without firing up a Jupyter notebook that takes 3 minutes to load. It's like Excel, but you can feel superior about using it.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_datasets], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"description","description",-1428560544),"Make charts that look like you spent hours on them, when in reality you just copied a JSON blob. Data visualization for the impatient and the lazy.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_vega_lite], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"description","description",-1428560544),"Write Python, R, and Clojure in the browser because installing local environments is a form of self-harm. We downloaded the internet so you don't have to.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_code], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"description","description",-1428560544),"Validate your data structures because trusting user input is a rookie mistake. It's like a strict librarian for your JSON.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_malli], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"description","description",-1428560544),"Write SQL in Clojure data structures, because string manipulation is for people who enjoy SQL injection attacks. Be the abstraction you want to see in the world.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_honeysql], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"description","description",-1428560544),"Run an LLM locally and listen to your laptop fan simulate a jet engine takeoff. Ask it questions, getting answers is optional.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_gemma], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"description","description",-1428560544),"Change the font size because you're not 20 anymore. Customize the UI until it's barely usable, we won't stop you.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_settings], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"description","description",-1428560544),"Stare directly into the soul of the application state. If it looks like chaos, that's because it is. Don't touch it.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_app_db], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"description","description",-1428560544),"A historical record of our mistakes and the heroic efforts to fix them. Read it to feel better about your own code.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_changelog], null)], null);

//# sourceMappingURL=bb_web_ds_tools.components.landing.js.map
