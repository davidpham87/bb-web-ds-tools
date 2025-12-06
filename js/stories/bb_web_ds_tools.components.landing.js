var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.core.js");
require("./bb_web_ds_tools.theme.js");
require("./re_frame.core.js");
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
bb_web_ds_tools.components.landing.canvas_card = (function bb_web_ds_tools$components$landing$canvas_card(p__24938){
var map__24939 = p__24938;
var map__24939__$1 = cljs.core.__destructure_map(map__24939);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"route","route",329891309));
var draw_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24939__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var canvas_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animation_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),["canvas-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__5825__auto__ = cljs.core.deref(canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
var ctx = bb_web_ds_tools.components.landing.setup_canvas(canvas,width,height);
var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$components$landing$canvas_card_$_loop_fn(){
var elapsed = (Date.now() - start_time);
(draw_fn.cljs$core$IFn$_invoke$arity$4 ? draw_fn.cljs$core$IFn$_invoke$arity$4(ctx,width,height,elapsed) : draw_fn.call(null,ctx,width,height,elapsed));

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$components$landing$canvas_card_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto__ = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
return cancelAnimationFrame(id);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border ",bb_web_ds_tools.theme.border_subtle," ",bb_web_ds_tools.theme.border_hover," ",bb_web_ds_tools.theme.bg_card].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),route,null,null], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative h-40 w-full ",bb_web_ds_tools.theme.bg_sidebar," border-b ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__24937_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__24937_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full block"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-5 flex flex-col flex-grow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-bold mb-2 ",bb_web_ds_tools.theme.text_accent].join('')], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm leading-relaxed ",bb_web_ds_tools.theme.text_primary," opacity-90"].join('')], null),description], null)], null)], null);
})], null));
});
bb_web_ds_tools.components.landing.clear = (function bb_web_ds_tools$components$landing$clear(ctx,w,h){
(ctx.fillStyle = new cljs.core.Keyword(null,"bg-sidebar","bg-sidebar",-1016595894).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.theme.colors));

return ctx.fillRect((0),(0),w,h);
});
bb_web_ds_tools.components.landing.colors = bb_web_ds_tools.theme.colors;
bb_web_ds_tools.components.landing.zenburn = bb_web_ds_tools.theme.zenburn;
bb_web_ds_tools.components.landing.draw_workspaces = (function bb_web_ds_tools$components$landing$draw_workspaces(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cycle = cljs.core.mod(t,(4000));
var open_phase = (cycle < (2000));
var angle = ((open_phase)?((Math.PI * 0.1) * Math.sin((t * 0.003))):(0));
var cx = (w / (2));
var cy = (h / (2));
(ctx.strokeStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.save();

ctx.translate(cx,cy);

ctx.beginPath();

ctx.moveTo((-40),(-30));

ctx.lineTo((40),(-30));

ctx.lineTo((40),(30));

ctx.lineTo((-40),(30));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","tag","bb-web-ds-tools.theme/tag",50610303).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

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
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy - (20)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

ctx.beginPath();

ctx.rect((cx - (40)),(cy - (20)),(80),(50));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","background","bb-web-ds-tools.theme/background",1016235781).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (30)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (25)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_24985 = (i * (1000));
var y_pos_24986 = ((-50) + cljs.core.mod(((t + offset_24985) * 0.05),(100)));
var x_pos_24987 = (cx + ((60) * Math.sin(((t + offset_24985) * 0.002))));
if((((y_pos_24986 > (-50))) && ((y_pos_24986 < (50))))){
ctx.beginPath();

ctx.arc(x_pos_24987,(cy + y_pos_24986),(3),(0),(Math.PI * (2)));

ctx.fill();
} else {
}

var G__24995 = (i + (1));
i = G__24995;
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
var start_x = (40);
var start_y = (40);
var chars_per_line = (30);
var total_lines = (8);
var typer_pos = cljs.core.mod(Math.floor((t / (50))),(chars_per_line * total_lines));
(ctx.font = "12px monospace");

var n__5616__auto___24996 = total_lines;
var i_24997 = (0);
while(true){
if((i_24997 < n__5616__auto___24996)){
var y_24998 = (start_y + (i_24997 * line_h));
var chars_24999 = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (typer_pos - (i_24997 * chars_per_line));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((chars_24999 > (0))){
(ctx.fillStyle = ((cljs.core.even_QMARK_(i_24997))?new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn):new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)));

ctx.fillRect(start_x,y_24998,(chars_24999 * (5)),(8));
} else {
}

var G__25000 = (i_24997 + (1));
i_24997 = G__25000;
continue;
} else {
}
break;
}

var current_line = Math.floor((typer_pos / chars_per_line));
var current_char = cljs.core.mod(typer_pos,chars_per_line);
if((current_line < total_lines)){
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

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
var freq_25003 = (0.002 + (i * 0.001));
var height_25004 = ((30) + ((40) * Math.abs(Math.sin((t * freq_25003)))));
var x_25005 = (start_x + (i * (bar_w + gap)));
var y_25006 = (base_y - height_25004);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","uri","bb-web-ds-tools.theme/uri",-500913257).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),cljs.core.mod(i,(5))));

ctx.fillRect(x_25005,y_25006,bar_w,height_25004);

var G__25013 = (i + (1));
i = G__25013;
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
(ctx.strokeStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (5));

ctx.beginPath();

ctx.arc(cx,cy,radius,(0),(Math.PI * (2)));

ctx.stroke();

var progress_25014 = cljs.core.mod((t * 0.001),(2));
var p_25015 = (function (){var x__5113__auto__ = (1);
var y__5114__auto__ = progress_25014;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((p_25015 > (0))){
ctx.beginPath();

ctx.moveTo((cx - (20)),cy);

ctx.lineTo((cx - (5)),(cy + (15)));

if((p_25015 > 0.5)){
ctx.lineTo((cx + (25)),(cy - (20)));
} else {
}

ctx.stroke();
} else {
}

(ctx.font = "20px sans-serif");

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

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

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","tag","bb-web-ds-tools.theme/tag",50610303).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillText("{}",cx,cy);

var seq__24940 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null)], null));
var chunk__24941 = null;
var count__24942 = (0);
var i__24943 = (0);
while(true){
if((i__24943 < count__24942)){
var vec__24950 = chunk__24941.cljs$core$IIndexed$_nth$arity$2(null,i__24943);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950,(2),null);
var theta_25020 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_25021 = (cx + (orbit_r * Math.cos(theta_25020)));
var y_25022 = (cy + (orbit_r * Math.sin(theta_25020)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_25021,y_25022);


var G__25023 = seq__24940;
var G__25024 = chunk__24941;
var G__25025 = count__24942;
var G__25026 = (i__24943 + (1));
seq__24940 = G__25023;
chunk__24941 = G__25024;
count__24942 = G__25025;
i__24943 = G__25026;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24940);
if(temp__5825__auto__){
var seq__24940__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24940__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24940__$1);
var G__25030 = cljs.core.chunk_rest(seq__24940__$1);
var G__25031 = c__5548__auto__;
var G__25032 = cljs.core.count(c__5548__auto__);
var G__25033 = (0);
seq__24940 = G__25030;
chunk__24941 = G__25031;
count__24942 = G__25032;
i__24943 = G__25033;
continue;
} else {
var vec__24953 = cljs.core.first(seq__24940__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24953,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24953,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24953,(2),null);
var theta_25034 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_25035 = (cx + (orbit_r * Math.cos(theta_25034)));
var y_25036 = (cy + (orbit_r * Math.sin(theta_25034)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_25035,y_25036);


var G__25037 = cljs.core.next(seq__24940__$1);
var G__25038 = null;
var G__25039 = (0);
var G__25040 = (0);
seq__24940 = G__25037;
chunk__24941 = G__25038;
count__24942 = G__25039;
i__24943 = G__25040;
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

(ctx.strokeStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

var n__5616__auto___25041 = (100);
var i_25042 = (0);
while(true){
if((i_25042 < n__5616__auto___25041)){
var x_25043 = ((cx - (100)) + (i_25042 * (2)));
var y_25044 = (cy + ((40) * Math.sin(((i_25042 * 0.1) + (t * 0.005)))));
if((i_25042 === (0))){
ctx.moveTo(x_25043,y_25044);
} else {
ctx.lineTo(x_25043,y_25044);
}

var G__25045 = (i_25042 + (1));
i_25042 = G__25045;
continue;
} else {
}
break;
}

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-remove","bb-web-ds-tools.theme/diff-remove",563091268).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_25046 = (i * (20));
var x_25047 = ((cx - (100)) + (offset_25046 * (2)));
var y_25048 = (cy + ((40) * Math.sin(((offset_25046 * 0.1) + (t * 0.005)))));
ctx.beginPath();

ctx.arc(x_25047,y_25048,(4),(0),(Math.PI * (2)));

ctx.fill();

var G__25049 = (i + (1));
i = G__25049;
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

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-30),(-30),(60),(60));

(ctx.fillStyle = new cljs.core.Keyword(null,"bg-sidebar","bg-sidebar",-1016595894).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.theme.colors));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));

var blink_25050 = cljs.core.mod((t * 5.0E-4),(5));
if((blink_25050 > 4.8)){
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

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

var outer_r_25051 = r;
var inner_r_25052 = (r * 0.8);
var hole_r_25053 = (r * 0.3);
var n__5616__auto___25055 = (teeth * (2));
var i_25056 = (0);
while(true){
if((i_25056 < n__5616__auto___25055)){
var angle_25057 = (i_25056 * (Math.PI / teeth));
var rad_25058 = ((cljs.core.even_QMARK_(i_25056))?outer_r_25051:inner_r_25052);
ctx.lineTo((rad_25058 * Math.cos(angle_25057)),(rad_25058 * Math.sin(angle_25057)));

var G__25059 = (i_25056 + (1));
i_25056 = G__25059;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),hole_r_25053,(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

return ctx.restore();
});
draw_gear(cx,cy,(40),(8),0.001,new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

return draw_gear((cx + (50)),(cy + (50)),(25),(6),-0.002,new cljs.core.Keyword("bb-web-ds-tools.theme","namespace","bb-web-ds-tools.theme/namespace",-1179516902).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));
});
bb_web_ds_tools.components.landing.draw_changelog = (function bb_web_ds_tools$components$landing$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__24963 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__24964 = null;
var count__24965 = (0);
var i__24966 = (0);
while(true){
if((i__24966 < count__24965)){
var i = chunk__24964.cljs$core$IIndexed$_nth$arity$2(null,i__24966);
var y_25064 = (((200) + (i * (20))) - scroll_y);
if((((y_25064 > (0))) && ((y_25064 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_25064);
} else {
}


var G__25065 = seq__24963;
var G__25066 = chunk__24964;
var G__25067 = count__24965;
var G__25068 = (i__24966 + (1));
seq__24963 = G__25065;
chunk__24964 = G__25066;
count__24965 = G__25067;
i__24966 = G__25068;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__24963);
if(temp__5825__auto__){
var seq__24963__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24963__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__24963__$1);
var G__25069 = cljs.core.chunk_rest(seq__24963__$1);
var G__25070 = c__5548__auto__;
var G__25071 = cljs.core.count(c__5548__auto__);
var G__25072 = (0);
seq__24963 = G__25069;
chunk__24964 = G__25070;
count__24965 = G__25071;
i__24966 = G__25072;
continue;
} else {
var i = cljs.core.first(seq__24963__$1);
var y_25073 = (((200) + (i * (20))) - scroll_y);
if((((y_25073 > (0))) && ((y_25073 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_25073);
} else {
}


var G__25074 = cljs.core.next(seq__24963__$1);
var G__25075 = null;
var G__25076 = (0);
var G__25077 = (0);
seq__24963 = G__25074;
chunk__24964 = G__25075;
count__24965 = G__25076;
i__24966 = G__25077;
continue;
}
} else {
return null;
}
}
break;
}
});
bb_web_ds_tools.components.landing.feature_cards = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Workspaces",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"workspaces","workspaces",168825563),new cljs.core.Keyword(null,"description","description",-1428560544),"Persist your mess. Save your scripts before you accidentally close the tab and cry.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_workspaces], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"description","description",-1428560544),"Inspect the state of the universe. See the matrix code behind the curtain.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_app_db], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"description","description",-1428560544),"It's VS Code, but just the editor part. Includes Python, R, and Clojure support.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_code], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"description","description",-1428560544),"Import CSVs, TSVs, JSON. Edit in a grid. Pretend you're using Excel.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_datasets], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"description","description",-1428560544),"Schema Inference & Generation. A spellchecker for your data structures.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_malli], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"description","description",-1428560544),"SQL for Clojurists. Because writing strings is for cavemen.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_honeysql], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"description","description",-1428560544),"Charts on the fly. Paste data, write spec, boom. Interactive charts.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_vega_lite], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"description","description",-1428560544),"Your Private AI Buddy. Uses your local GPU. Fans will spin.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_gemma], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"description","description",-1428560544),"Tweak the knobs. Change the font size until you can read it.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_settings], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"description","description",-1428560544),"What's new? Probably some bugs we fixed and some new ones we added.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_changelog], null)], null);

//# sourceMappingURL=bb_web_ds_tools.components.landing.js.map
