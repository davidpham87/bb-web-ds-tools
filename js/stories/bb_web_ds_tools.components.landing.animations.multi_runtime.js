var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.components.landing.animations.common.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.multi_runtime.js");

goog.provide('bb_web_ds_tools.components.landing.animations.multi_runtime');
bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(->> ms (map :x)...","sum([m['x'] for m...])","Reduce(+, Filter..."], null);
bb_web_ds_tools.components.landing.animations.multi_runtime.colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#dca3a3","#72d5a3","#94bff3"], null);
bb_web_ds_tools.components.landing.animations.multi_runtime.font_size = (14);
bb_web_ds_tools.components.landing.animations.multi_runtime.setup_font = (function bb_web_ds_tools$components$landing$animations$multi_runtime$setup_font(ctx){
(ctx.font = ["bold ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.multi_runtime.font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

return (ctx.textBaseline = "middle");
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_typing = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_typing(ctx,_w,_h,_t,phase,cx,cy){
var progress = (phase / (4000));
var total_lines = cljs.core.count(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines);
var chars_per_line = (20);
var total_chars = (total_lines * chars_per_line);
var chars_to_show = Math.floor((progress * total_chars));
var n__5616__auto__ = total_lines;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var line_25125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines,i);
var line_chars_start_25126 = (i * chars_per_line);
var chars_for_this_line_25127 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (chars_to_show - line_chars_start_25126);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y_25128 = ((cy - (30)) - (((1) - i) * (20)));
if((chars_for_this_line_25127 > (0))){
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.colors,i));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_25125,(0),chars_for_this_line_25127),cx,y_25128);
} else {
}

var G__25129 = (i + (1));
i = G__25129;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_converging = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_converging(ctx,_w,_h,t,phase,cx,cy){
var progress = ((phase - (4000)) / (1500));
var box_size = ((70) + ((10) * Math.sin((t * 0.01))));
var n__5616__auto___25130 = (3);
var i_25131 = (0);
while(true){
if((i_25131 < n__5616__auto___25130)){
var start_y_25132 = ((cy - (30)) - (((1) - i_25131) * (20)));
var target_y_25133 = cy;
var curr_y_25134 = (start_y_25132 + ((target_y_25133 - start_y_25132) * progress));
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.colors,i_25131));

(ctx.globalAlpha = (1.0 - progress));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines,i_25131),cx,curr_y_25134);

var G__25135 = (i_25131 + (1));
i_25131 = G__25135;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 1.0);

(ctx.globalAlpha = progress);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

return ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_processing = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_processing(ctx,_w,_h,t,_phase,cx,cy){
var box_size = (80);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowColor = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowBlur = ((10) + ((10) * Math.sin((t * 0.01)))));

ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);

(ctx.shadowBlur = (0));

var inner_r_25138 = (box_size * 0.35);
ctx.save();

ctx.translate(cx,cy);

ctx.rotate((t * 0.005));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

var n__5616__auto___25140 = (8);
var i_25141 = (0);
while(true){
if((i_25141 < n__5616__auto___25140)){
var angle_25142 = (i_25141 * (Math.PI / (4)));
var r_25143 = ((cljs.core.even_QMARK_(i_25141))?inner_r_25138:(inner_r_25138 * 0.7));
if((i_25141 === (0))){
ctx.moveTo((r_25143 * Math.cos(angle_25142)),(r_25143 * Math.sin(angle_25142)));
} else {
ctx.lineTo((r_25143 * Math.cos(angle_25142)),(r_25143 * Math.sin(angle_25142)));
}

var G__25147 = (i_25141 + (1));
i_25141 = G__25147;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),(inner_r_25138 * 0.3),(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

ctx.restore();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___25151 = (5);
var i_25152 = (0);
while(true){
if((i_25152 < n__5616__auto___25151)){
var offset_25153 = (i_25152 * (200));
var p_progress_25154 = cljs.core.mod(((t + offset_25153) / (1000)),1.0);
var y_25155 = ((cy + (box_size / (2))) + (p_progress_25154 * (60)));
var alpha_25156 = (1.0 - p_progress_25154);
if((p_progress_25154 < 1.0)){
(ctx.globalAlpha = alpha_25156);

ctx.fillRect((cx - (2)),y_25155,(4),(4));
} else {
}

var G__25157 = (i_25152 + (1));
i_25152 = G__25157;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_multi_runtime = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_multi_runtime(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
bb_web_ds_tools.components.landing.animations.multi_runtime.setup_font(ctx);

if((phase < (4000))){
return bb_web_ds_tools.components.landing.animations.multi_runtime.draw_typing(ctx,w,h,t,phase,cx,cy);
} else {
if((phase < (5500))){
return bb_web_ds_tools.components.landing.animations.multi_runtime.draw_converging(ctx,w,h,t,phase,cx,cy);
} else {
return bb_web_ds_tools.components.landing.animations.multi_runtime.draw_processing(ctx,w,h,t,phase,cx,cy);

}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.multi_runtime.js.map
