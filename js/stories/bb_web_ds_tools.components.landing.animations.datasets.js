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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.datasets.js");

goog.provide('bb_web_ds_tools.components.landing.animations.datasets');
bb_web_ds_tools.components.landing.animations.datasets.phase_duration = (2000);
bb_web_ds_tools.components.landing.animations.datasets.display_time = (1500);
bb_web_ds_tools.components.landing.animations.datasets.transition_time = (500);
bb_web_ds_tools.components.landing.animations.datasets.calculate_alpha = (function bb_web_ds_tools$components$landing$animations$datasets$calculate_alpha(local_t){
var progress = (((local_t > bb_web_ds_tools.components.landing.animations.datasets.display_time))?((local_t - bb_web_ds_tools.components.landing.animations.datasets.display_time) / bb_web_ds_tools.components.landing.animations.datasets.transition_time):(0));
return (1.0 - progress);
});
bb_web_ds_tools.components.landing.animations.datasets.draw_data_table = (function bb_web_ds_tools$components$landing$animations$datasets$draw_data_table(ctx,w,h,_t,local_t){
var alpha = bb_web_ds_tools.components.landing.animations.datasets.calculate_alpha(local_t);
var rows = (4);
var cols = (4);
var cell_w = (20);
var cell_h = (12);
var start_x = ((w / (2)) - ((cols * cell_w) / (2)));
var start_y = ((h / (2)) - ((rows * cell_h) / (2)));
(ctx.globalAlpha = alpha);

var n__5616__auto___25096 = cols;
var i_25097 = (0);
while(true){
if((i_25097 < n__5616__auto___25096)){
var n__5616__auto___25098__$1 = rows;
var j_25099 = (0);
while(true){
if((j_25099 < n__5616__auto___25098__$1)){
(ctx.fillStyle = ((cljs.core.even_QMARK_((i_25097 + j_25099)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((start_x + (i_25097 * cell_w)),(start_y + (j_25099 * cell_h)),(cell_w - (2)),(cell_h - (2)));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + (i_25097 * cell_w)) + (4)),((start_y + (j_25099 * cell_h)) + (4)),(12),(4));

var G__25100 = (j_25099 + (1));
j_25099 = G__25100;
continue;
} else {
}
break;
}

var G__25101 = (i_25097 + (1));
i_25097 = G__25101;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.datasets.draw_filter_map = (function bb_web_ds_tools$components$landing$animations$datasets$draw_filter_map(ctx,w,h,t,local_t){
var progress = (((local_t > bb_web_ds_tools.components.landing.animations.datasets.display_time))?((local_t - bb_web_ds_tools.components.landing.animations.datasets.display_time) / bb_web_ds_tools.components.landing.animations.datasets.transition_time):(0));
var alpha_in = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / bb_web_ds_tools.components.landing.animations.datasets.transition_time);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_out = (1.0 - progress);
var rows = (4);
var cols = (4);
var cell_w = (20);
var cell_h = (12);
var start_x = ((w / (2)) - ((cols * cell_w) / (2)));
var start_y = ((h / (2)) - ((rows * cell_h) / (2)));
(ctx.globalAlpha = (alpha_in * alpha_out));

var n__5616__auto___25102 = rows;
var j_25103 = (0);
while(true){
if((j_25103 < n__5616__auto___25102)){
var row_progress_25104 = cljs.core.mod(((t * 0.002) + (j_25103 * 0.2)),1.0);
var x_25105 = ((start_x + ((4) * cell_w)) + (row_progress_25104 * (40)));
var y_25106 = (start_y + (j_25103 * cell_h));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(x_25105,y_25106,(12),(4));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-remove","portal.colors/diff-remove",-1316767592).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + ((4) * cell_w)) + (20)),start_y,(2),(rows * cell_h));

var G__25107 = (j_25103 + (1));
j_25103 = G__25107;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.datasets.draw_transposed_table = (function bb_web_ds_tools$components$landing$animations$datasets$draw_transposed_table(ctx,w,h,_t,local_t){
var progress = (((local_t > bb_web_ds_tools.components.landing.animations.datasets.display_time))?((local_t - bb_web_ds_tools.components.landing.animations.datasets.display_time) / bb_web_ds_tools.components.landing.animations.datasets.transition_time):(0));
var alpha_in = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / bb_web_ds_tools.components.landing.animations.datasets.transition_time);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_out = (1.0 - progress);
var rows = (4);
var cols = (4);
var cell_w = (20);
var cell_h = (12);
var start_x = ((w / (2)) - ((rows * cell_w) / (2)));
var start_y = ((h / (2)) - ((cols * cell_h) / (2)));
(ctx.globalAlpha = (alpha_in * alpha_out));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.font = "10px sans-serif");

ctx.fillText("T",(start_x - (15)),start_y);

var n__5616__auto___25108 = rows;
var i_25109 = (0);
while(true){
if((i_25109 < n__5616__auto___25108)){
var n__5616__auto___25110__$1 = cols;
var j_25111 = (0);
while(true){
if((j_25111 < n__5616__auto___25110__$1)){
(ctx.fillStyle = ((cljs.core.even_QMARK_((i_25109 + j_25111)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((start_x + (i_25109 * cell_w)),(start_y + (j_25111 * cell_h)),(cell_w - (2)),(cell_h - (2)));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + (i_25109 * cell_w)) + (4)),((start_y + (j_25111 * cell_h)) + (4)),(12),(4));

var G__25112 = (j_25111 + (1));
j_25111 = G__25112;
continue;
} else {
}
break;
}

var G__25113 = (i_25109 + (1));
i_25109 = G__25113;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.datasets.draw_vertical_bars = (function bb_web_ds_tools$components$landing$animations$datasets$draw_vertical_bars(ctx,w,h,t,local_t){
var alpha_in = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / bb_web_ds_tools.components.landing.animations.datasets.transition_time);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var cols = (5);
var bar_w = (15);
var gap = (5);
var total_w = ((cols * bar_w) + ((cols - (1)) * gap));
var start_x = ((w / (2)) - (total_w / (2)));
var base_y = ((h / (2)) + (20));
(ctx.globalAlpha = alpha_in);

var n__5616__auto___25114 = cols;
var i_25115 = (0);
while(true){
if((i_25115 < n__5616__auto___25114)){
var freq_25116 = (0.002 + (i_25115 * 0.001));
var height_25117 = ((20) + ((30) * Math.abs(Math.sin((t * freq_25116)))));
var x_25118 = (start_x + (i_25115 * (bar_w + gap)));
var y_25119 = (base_y - height_25117);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","uri","portal.colors/uri",1909526219).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),cljs.core.mod(i_25115,(5))));

ctx.fillRect(x_25118,y_25119,bar_w,height_25117);

var G__25120 = (i_25115 + (1));
i_25115 = G__25120;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.datasets.draw_datasets = (function bb_web_ds_tools$components$landing$animations$datasets$draw_datasets(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
if((phase < bb_web_ds_tools.components.landing.animations.datasets.phase_duration)){
return bb_web_ds_tools.components.landing.animations.datasets.draw_data_table(ctx,w,h,t,phase);
} else {
if((phase < ((2) * bb_web_ds_tools.components.landing.animations.datasets.phase_duration))){
return bb_web_ds_tools.components.landing.animations.datasets.draw_filter_map(ctx,w,h,t,(phase - bb_web_ds_tools.components.landing.animations.datasets.phase_duration));
} else {
if((phase < ((3) * bb_web_ds_tools.components.landing.animations.datasets.phase_duration))){
return bb_web_ds_tools.components.landing.animations.datasets.draw_transposed_table(ctx,w,h,t,(phase - ((2) * bb_web_ds_tools.components.landing.animations.datasets.phase_duration)));
} else {
return bb_web_ds_tools.components.landing.animations.datasets.draw_vertical_bars(ctx,w,h,t,(phase - ((3) * bb_web_ds_tools.components.landing.animations.datasets.phase_duration)));

}
}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.datasets.js.map
