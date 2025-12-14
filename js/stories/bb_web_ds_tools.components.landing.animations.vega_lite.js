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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.vega_lite.js");

goog.provide('bb_web_ds_tools.components.landing.animations.vega_lite');
bb_web_ds_tools.components.landing.animations.vega_lite.draw_vega_lite = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_vega_lite(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
var code_snippet = "{:mark :bar :encoding ...}";
var font_size = (14);
if((phase < (2000))){
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

(ctx.textBaseline = "middle");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var progress = (phase / (1500));
var chars_to_show = (function (){var x__5113__auto__ = ((code_snippet).length);
var y__5114__auto__ = Math.floor((progress * ((code_snippet).length)));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(code_snippet,(0),chars_to_show),cx,cy);
} else {
var chart_phase = (phase - (2000));
var chart_duration = (2000);
var transition = (500);
if((chart_phase < (2000))){
var progress_25282 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (chart_phase / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_25283 = (((chart_phase > (1500)))?(1.0 - ((chart_phase - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_25282 * alpha_25283));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var bar_w_25284 = (40);
var gap_25285 = (20);
var start_x_25286 = (cx - (1.5 * (bar_w_25284 + gap_25285)));
var n__5616__auto___25287 = (3);
var i_25288 = (0);
while(true){
if((i_25288 < n__5616__auto___25287)){
var h_25289__$1 = ((50) + (i_25288 * (30)));
var x_25290 = (start_x_25286 + (i_25288 * (bar_w_25284 + gap_25285)));
ctx.fillRect(x_25290,(cy - (h_25289__$1 - (50))),bar_w_25284,h_25289__$1);

var G__25291 = (i_25288 + (1));
i_25288 = G__25291;
continue;
} else {
}
break;
}
} else {
}

if((((chart_phase >= (2000))) && ((chart_phase < (4000))))){
var local_t_25292 = (chart_phase - (2000));
var progress_25293 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_25292 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_25294 = (((local_t_25292 > (1500)))?(1.0 - ((local_t_25292 - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_25293 * alpha_25294));

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (4));

ctx.beginPath();

var points_25295 = (10);
var step_25296 = (w / points_25295);
var n__5616__auto___25297 = points_25295;
var i_25298 = (0);
while(true){
if((i_25298 < n__5616__auto___25297)){
var x_25299 = (i_25298 * step_25296);
var y_25300 = (cy + ((60) * Math.sin((i_25298 * 0.8))));
if((i_25298 === (0))){
ctx.moveTo(x_25299,y_25300);
} else {
ctx.lineTo(x_25299,y_25300);
}

var G__25301 = (i_25298 + (1));
i_25298 = G__25301;
continue;
} else {
}
break;
}

ctx.stroke();
} else {
}

if((chart_phase >= (4000))){
var local_t_25302 = (chart_phase - (4000));
var progress_25303 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_25302 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
(ctx.globalAlpha = progress_25303);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___25304 = (20);
var i_25305 = (0);
while(true){
if((i_25305 < n__5616__auto___25304)){
var x_25306 = ((cljs.core.mod((i_25305 * (123)),w)) + (- (w / (2))));
var y_25307 = ((cljs.core.mod((i_25305 * (456)),h)) + (- (h / (2))));
ctx.beginPath();

ctx.arc((cx + (Math.cos(i_25305) * (i_25305 * (5)))),(cy + (Math.sin(i_25305) * (i_25305 * (3)))),(5),(0),(Math.PI * (2)));

ctx.fill();

var G__25308 = (i_25305 + (1));
i_25305 = G__25308;
continue;
} else {
}
break;
}
} else {
}

return (ctx.globalAlpha = 1.0);

}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.vega_lite.js.map
