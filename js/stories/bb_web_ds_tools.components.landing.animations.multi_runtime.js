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
var line_25183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines,i);
var line_chars_start_25184 = (i * chars_per_line);
var chars_for_this_line_25185 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (chars_to_show - line_chars_start_25184);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y_25186 = ((cy - (30)) - (((1) - i) * (20)));
if((chars_for_this_line_25185 > (0))){
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.colors,i));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_25183,(0),chars_for_this_line_25185),cx,y_25186);
} else {
}

var G__25187 = (i + (1));
i = G__25187;
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
var n__5616__auto___25188 = (3);
var i_25189 = (0);
while(true){
if((i_25189 < n__5616__auto___25188)){
var start_y_25190 = ((cy - (30)) - (((1) - i_25189) * (20)));
var target_y_25191 = cy;
var curr_y_25192 = (start_y_25190 + ((target_y_25191 - start_y_25190) * progress));
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.colors,i_25189));

(ctx.globalAlpha = (1.0 - progress));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines,i_25189),cx,curr_y_25192);

var G__25193 = (i_25189 + (1));
i_25189 = G__25193;
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

var inner_r_25197 = (box_size * 0.35);
ctx.save();

ctx.translate(cx,cy);

ctx.rotate((t * 0.005));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

var n__5616__auto___25198 = (8);
var i_25199 = (0);
while(true){
if((i_25199 < n__5616__auto___25198)){
var angle_25200 = (i_25199 * (Math.PI / (4)));
var r_25201 = ((cljs.core.even_QMARK_(i_25199))?inner_r_25197:(inner_r_25197 * 0.7));
if((i_25199 === (0))){
ctx.moveTo((r_25201 * Math.cos(angle_25200)),(r_25201 * Math.sin(angle_25200)));
} else {
ctx.lineTo((r_25201 * Math.cos(angle_25200)),(r_25201 * Math.sin(angle_25200)));
}

var G__25202 = (i_25199 + (1));
i_25199 = G__25202;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),(inner_r_25197 * 0.3),(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

ctx.restore();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___25203 = (5);
var i_25204 = (0);
while(true){
if((i_25204 < n__5616__auto___25203)){
var offset_25205 = (i_25204 * (200));
var p_progress_25206 = cljs.core.mod(((t + offset_25205) / (1000)),1.0);
var y_25207 = ((cy + (box_size / (2))) + (p_progress_25206 * (60)));
var alpha_25208 = (1.0 - p_progress_25206);
if((p_progress_25206 < 1.0)){
(ctx.globalAlpha = alpha_25208);

ctx.fillRect((cx - (2)),y_25207,(4),(4));
} else {
}

var G__25209 = (i_25204 + (1));
i_25204 = G__25209;
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
