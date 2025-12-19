var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.components.landing.animations.common.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.vega_lite.js");

goog.provide('bb_web_ds_tools.components.landing.animations.vega_lite');
bb_web_ds_tools.components.landing.animations.vega_lite.font_size = (14);
bb_web_ds_tools.components.landing.animations.vega_lite.draw_code_snippet = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_code_snippet(ctx,_w,_h,_t,phase,cx,cy){
var code_snippet = "{:mark :bar :encoding ...}";
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.vega_lite.font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

(ctx.textBaseline = "middle");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var progress = (phase / (1500));
var chars_to_show = (function (){var x__5113__auto__ = ((code_snippet).length);
var y__5114__auto__ = Math.floor((progress * ((code_snippet).length)));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(code_snippet,(0),chars_to_show),cx,cy);
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_bar_chart = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_bar_chart(ctx,_w,_h,_t,chart_phase,cx,cy){
var transition = (500);
var progress = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (chart_phase / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha = (((chart_phase > (1500)))?(1.0 - ((chart_phase - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress * alpha));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var bar_w = (40);
var gap = (20);
var start_x = (cx - (1.5 * (bar_w + gap)));
var n__5616__auto__ = (3);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var h_25237 = ((50) + (i * (30)));
var x_25238 = (start_x + (i * (bar_w + gap)));
ctx.fillRect(x_25238,(cy - (h_25237 - (50))),bar_w,h_25237);

var G__25239 = (i + (1));
i = G__25239;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_line_chart = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_line_chart(ctx,w,_h,_t,chart_phase,cy){
var transition = (500);
var local_t = (chart_phase - (2000));
var progress = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha = (((local_t > (1500)))?(1.0 - ((local_t - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress * alpha));

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (4));

ctx.beginPath();

var points_25240 = (10);
var step_25241 = (w / points_25240);
var n__5616__auto___25242 = points_25240;
var i_25243 = (0);
while(true){
if((i_25243 < n__5616__auto___25242)){
var x_25244 = (i_25243 * step_25241);
var y_25245 = (cy + ((60) * Math.sin((i_25243 * 0.8))));
if((i_25243 === (0))){
ctx.moveTo(x_25244,y_25245);
} else {
ctx.lineTo(x_25244,y_25245);
}

var G__25246 = (i_25243 + (1));
i_25243 = G__25246;
continue;
} else {
}
break;
}

return ctx.stroke();
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_scatter_plot = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_scatter_plot(ctx,w,h,_t,chart_phase,cx,cy){
var transition = (500);
var local_t = (chart_phase - (4000));
var progress = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
(ctx.globalAlpha = progress);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto__ = (20);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var x_25247 = ((cljs.core.mod((i * (123)),w)) + (- (w / (2))));
var y_25248 = ((cljs.core.mod((i * (456)),h)) + (- (h / (2))));
ctx.beginPath();

ctx.arc((cx + (Math.cos(i) * (i * (5)))),(cy + (Math.sin(i) * (i * (3)))),(5),(0),(Math.PI * (2)));

ctx.fill();

var G__25249 = (i + (1));
i = G__25249;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_charts = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_charts(ctx,w,h,t,phase,cx,cy){
var chart_phase = (phase - (2000));
if((chart_phase < (2000))){
bb_web_ds_tools.components.landing.animations.vega_lite.draw_bar_chart(ctx,w,h,t,chart_phase,cx,cy);
} else {
}

if((((chart_phase >= (2000))) && ((chart_phase < (4000))))){
bb_web_ds_tools.components.landing.animations.vega_lite.draw_line_chart(ctx,w,h,t,chart_phase,cy);
} else {
}

if((chart_phase >= (4000))){
bb_web_ds_tools.components.landing.animations.vega_lite.draw_scatter_plot(ctx,w,h,t,chart_phase,cx,cy);
} else {
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_vega_lite = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_vega_lite(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
if((phase < (2000))){
return bb_web_ds_tools.components.landing.animations.vega_lite.draw_code_snippet(ctx,w,h,t,phase,cx,cy);
} else {
return bb_web_ds_tools.components.landing.animations.vega_lite.draw_charts(ctx,w,h,t,phase,cx,cy);

}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.vega_lite.js.map
