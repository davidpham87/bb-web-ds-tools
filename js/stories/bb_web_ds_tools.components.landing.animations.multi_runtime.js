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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.multi_runtime.js");

goog.provide('bb_web_ds_tools.components.landing.animations.multi_runtime');
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_multi_runtime = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_multi_runtime(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
var code_lines = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(->> ms (map :x)...","sum([m['x'] for m...])","Reduce(+, Filter..."], null);
var colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#dca3a3","#72d5a3","#94bff3"], null);
var font_size = (14);
(ctx.font = ["bold ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

(ctx.textBaseline = "middle");

if((phase < (4000))){
var progress = (phase / (4000));
var total_lines = cljs.core.count(code_lines);
var chars_per_line = (20);
var total_chars = (total_lines * chars_per_line);
var chars_to_show = Math.floor((progress * total_chars));
var n__5616__auto__ = total_lines;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var line_25258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i);
var line_chars_start_25259 = (i * chars_per_line);
var chars_for_this_line_25260 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (chars_to_show - line_chars_start_25259);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y_25261 = ((cy - (30)) - (((1) - i) * (20)));
if((chars_for_this_line_25260 > (0))){
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_25258,(0),chars_for_this_line_25260),cx,y_25261);
} else {
}

var G__25262 = (i + (1));
i = G__25262;
continue;
} else {
return null;
}
break;
}
} else {
if((phase < (5500))){
var progress = ((phase - (4000)) / (1500));
var box_size = ((70) + ((10) * Math.sin((t * 0.01))));
var n__5616__auto___25263 = (3);
var i_25264 = (0);
while(true){
if((i_25264 < n__5616__auto___25263)){
var start_y_25265 = ((cy - (30)) - (((1) - i_25264) * (20)));
var target_y_25266 = cy;
var curr_y_25267 = (start_y_25265 + ((target_y_25266 - start_y_25265) * progress));
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i_25264));

(ctx.globalAlpha = (1.0 - progress));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_25264),cx,curr_y_25267);

var G__25268 = (i_25264 + (1));
i_25264 = G__25268;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 1.0);

(ctx.globalAlpha = progress);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

return ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);
} else {
var box_size = (80);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowColor = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowBlur = ((10) + ((10) * Math.sin((t * 0.01)))));

ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);

(ctx.shadowBlur = (0));

var inner_r_25269 = (box_size * 0.35);
ctx.save();

ctx.translate(cx,cy);

ctx.rotate((t * 0.005));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

var n__5616__auto___25270 = (8);
var i_25271 = (0);
while(true){
if((i_25271 < n__5616__auto___25270)){
var angle_25272 = (i_25271 * (Math.PI / (4)));
var r_25273 = ((cljs.core.even_QMARK_(i_25271))?inner_r_25269:(inner_r_25269 * 0.7));
if((i_25271 === (0))){
ctx.moveTo((r_25273 * Math.cos(angle_25272)),(r_25273 * Math.sin(angle_25272)));
} else {
ctx.lineTo((r_25273 * Math.cos(angle_25272)),(r_25273 * Math.sin(angle_25272)));
}

var G__25274 = (i_25271 + (1));
i_25271 = G__25274;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),(inner_r_25269 * 0.3),(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

ctx.restore();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___25275 = (5);
var i_25276 = (0);
while(true){
if((i_25276 < n__5616__auto___25275)){
var offset_25277 = (i_25276 * (200));
var p_progress_25278 = cljs.core.mod(((t + offset_25277) / (1000)),1.0);
var y_25279 = ((cy + (box_size / (2))) + (p_progress_25278 * (60)));
var alpha_25280 = (1.0 - p_progress_25278);
if((p_progress_25278 < 1.0)){
(ctx.globalAlpha = alpha_25280);

ctx.fillRect((cx - (2)),y_25279,(4),(4));
} else {
}

var G__25281 = (i_25276 + (1));
i_25276 = G__25281;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);

}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.multi_runtime.js.map
