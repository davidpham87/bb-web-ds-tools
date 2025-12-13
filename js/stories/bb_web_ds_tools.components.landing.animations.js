var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.utils.themes.js");
require("./bb_web_ds_tools.components.landing.animations.app_db.js");
require("./bb_web_ds_tools.components.landing.animations.datasets.js");
require("./bb_web_ds_tools.components.landing.animations.code.js");
require("./bb_web_ds_tools.components.landing.animations.malli.js");
require("./bb_web_ds_tools.components.landing.animations.workspaces.js");
require("./bb_web_ds_tools.components.landing.animations.fast_io.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.js");

goog.provide('bb_web_ds_tools.components.landing.animations');
bb_web_ds_tools.components.landing.animations.zenburn = bb_web_ds_tools.utils.themes.get_theme(new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
bb_web_ds_tools.components.landing.animations.clear = (function bb_web_ds_tools$components$landing$animations$clear(ctx,w,h){
return ctx.clearRect((0),(0),w,h);
});
bb_web_ds_tools.components.landing.animations.clear_rect = (function bb_web_ds_tools$components$landing$animations$clear_rect(ctx,w,h){
return ctx.clearRect((0),(0),w,h);
});
bb_web_ds_tools.components.landing.animations.draw_workspaces = bb_web_ds_tools.components.landing.animations.workspaces.draw_workspaces;
bb_web_ds_tools.components.landing.animations.draw_app_db = bb_web_ds_tools.components.landing.animations.app_db.draw_app_db;
bb_web_ds_tools.components.landing.animations.draw_datasets = bb_web_ds_tools.components.landing.animations.datasets.draw_datasets;
bb_web_ds_tools.components.landing.animations.draw_code = bb_web_ds_tools.components.landing.animations.code.draw_code;
bb_web_ds_tools.components.landing.animations.draw_malli = bb_web_ds_tools.components.landing.animations.malli.draw_malli;
bb_web_ds_tools.components.landing.animations.draw_fast_io = bb_web_ds_tools.components.landing.animations.fast_io.draw_fast_io;
bb_web_ds_tools.components.landing.animations.draw_instant_charts = (function bb_web_ds_tools$components$landing$animations$draw_instant_charts(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.clear_rect(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var cycle = (5000);
var phase = cljs.core.mod(t,cycle);
var font_size = (14);
var col_names = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Value 1","Value 2"], null);
var data_rows = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["USA",123.45,67.89], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CAN",98.76,54.32], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MEX",23.45,87.65], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BRA",76.54,21.09], null)], null);
var row_h = (18);
var col_w = (70);
var total_cols = cljs.core.count(col_names);
var grid_w = (total_cols * col_w);
var start_data_x = (cx - (grid_w / (2)));
var start_data_y = (cy - (50));
var plot_w = (70);
var plot_h = (50);
var density_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx - (60)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy - (25))], null);
var box_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx + (60)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy - (25))], null);
var scatter_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (50))], null);
if((phase < (1500))){
var progress = (phase / (1500));
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px monospace"].join(''));

(ctx.textAlign = "left");

var n__5616__auto___25158 = total_cols;
var i_25159 = (0);
while(true){
if((i_25159 < n__5616__auto___25158)){
var x_25160 = (start_data_x + (i_25159 * col_w));
var y_25161 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_25159),x_25160,y_25161);

var G__25162 = (i_25159 + (1));
i_25159 = G__25162;
continue;
} else {
}
break;
}

var n__5616__auto__ = cljs.core.count(data_rows);
var j = (0);
while(true){
if((j < n__5616__auto__)){
var row_25163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j);
var n__5616__auto___25164__$1 = total_cols;
var i_25165 = (0);
while(true){
if((i_25165 < n__5616__auto___25164__$1)){
var val_25166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_25163,i_25165);
var x_25167 = (start_data_x + (i_25165 * col_w));
var y_25168 = (start_data_y + (((j + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_25166),x_25167,y_25168);

var G__25169 = (i_25165 + (1));
i_25165 = G__25169;
continue;
} else {
}
break;
}

var G__25170 = (j + (1));
j = G__25170;
continue;
} else {
return null;
}
break;
}
} else {
if((phase < (3500))){
var progress = ((phase - (1500)) / (2000));
var ease_progress = ((1) - Math.pow(((1) - progress),(3)));
var alpha_data = (1.0 - ease_progress);
var alpha_plots = ease_progress;
ctx.save();

(ctx.globalAlpha = alpha_data);

(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px monospace"].join(''));

(ctx.textAlign = "left");

var n__5616__auto___25171 = total_cols;
var i_25172 = (0);
while(true){
if((i_25172 < n__5616__auto___25171)){
var x_25173 = (start_data_x + (i_25172 * col_w));
var y_25174 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_25172),x_25173,y_25174);

var G__25175 = (i_25172 + (1));
i_25172 = G__25175;
continue;
} else {
}
break;
}

var n__5616__auto___25176 = cljs.core.count(data_rows);
var j_25177 = (0);
while(true){
if((j_25177 < n__5616__auto___25176)){
var row_25178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j_25177);
var n__5616__auto___25179__$1 = total_cols;
var i_25180 = (0);
while(true){
if((i_25180 < n__5616__auto___25179__$1)){
var val_25181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_25178,i_25180);
var x_25182 = (start_data_x + (i_25180 * col_w));
var y_25183 = (start_data_y + (((j_25177 + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_25181),x_25182,y_25183);

var G__25184 = (i_25180 + (1));
i_25180 = G__25184;
continue;
} else {
}
break;
}

var G__25185 = (j_25177 + (1));
j_25177 = G__25185;
continue;
} else {
}
break;
}

ctx.restore();

ctx.save();

ctx.translate(cx,cy);

ctx.scale((0.5 + (0.5 * ease_progress)),(0.5 + (0.5 * ease_progress)));

ctx.translate((- cx),(- cy));

(ctx.globalAlpha = alpha_plots);

var bx_25186 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_25187 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.beginPath();

ctx.moveTo((bx_25186 - (plot_w / (2))),(by_25187 + (plot_h / (2))));

var n__5616__auto___25188 = plot_w;
var i_25189 = (0);
while(true){
if((i_25189 < n__5616__auto___25188)){
var x_25190 = ((bx_25186 - (plot_w / (2))) + i_25189);
var norm_x_25191 = ((i_25189 - (plot_w / (2))) / (10));
var y_25192 = ((by_25187 + (plot_h / (2))) - ((35) * Math.exp(((-0.5 * norm_x_25191) * norm_x_25191))));
ctx.lineTo(x_25190,y_25192);

var G__25193 = (i_25189 + (1));
i_25189 = G__25193;
continue;
} else {
}
break;
}

ctx.lineTo((bx_25186 + (plot_w / (2))),(by_25187 + (plot_h / (2))));

ctx.fill();

var bx_25194 = (cx + (50));
var by_25195 = (cy - (20));
var box_w_25196 = (20);
var box_h_25197 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_25194,(by_25195 - (25)));

ctx.lineTo(bx_25194,(by_25195 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_25194 - (box_w_25196 / (2))),(by_25195 - (box_h_25197 / (2))),box_w_25196,box_h_25197);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_25194 - (box_w_25196 / (2))),by_25195,box_w_25196,(2));

var bx_25198 = cx;
var by_25199 = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto___25200 = (15);
var i_25201 = (0);
while(true){
if((i_25201 < n__5616__auto___25200)){
var offset_25202 = cljs.core.mod(((i_25201 * (73)) + t),(1000));
var angle_25203 = (i_25201 * 2.4);
var dist_25204 = ((10) + ((15) * Math.sin((angle_25203 + (t * 0.002)))));
var x_25205 = (bx_25198 + (dist_25204 * Math.cos(angle_25203)));
var y_25206 = (by_25199 + (dist_25204 * Math.sin(angle_25203)));
ctx.beginPath();

ctx.arc(x_25205,y_25206,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__25209 = (i_25201 + (1));
i_25201 = G__25209;
continue;
} else {
}
break;
}

ctx.restore();

return (ctx.globalAlpha = 1.0);
} else {
var plot_w__$1 = (60);
var plot_h__$1 = (40);
var bx_25210 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_25211 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.beginPath();

ctx.moveTo((bx_25210 - (plot_w__$1 / (2))),(by_25211 + (plot_h__$1 / (2))));

var n__5616__auto___25212 = plot_w__$1;
var i_25213 = (0);
while(true){
if((i_25213 < n__5616__auto___25212)){
var x_25214 = ((bx_25210 - (plot_w__$1 / (2))) + i_25213);
var norm_x_25215 = ((i_25213 - (plot_w__$1 / (2))) / (10));
var y_25216 = ((by_25211 + (plot_h__$1 / (2))) - ((35) * Math.exp(((-0.5 * norm_x_25215) * norm_x_25215))));
ctx.lineTo(x_25214,y_25216);

var G__25217 = (i_25213 + (1));
i_25213 = G__25217;
continue;
} else {
}
break;
}

ctx.lineTo((bx_25210 + (plot_w__$1 / (2))),(by_25211 + (plot_h__$1 / (2))));

ctx.fill();

var bx_25218 = (cx + (50));
var by_25219 = (cy - (20));
var box_w_25220 = (20);
var box_h_25221 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_25218,(by_25219 - (25)));

ctx.lineTo(bx_25218,(by_25219 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_25218 - (box_w_25220 / (2))),(by_25219 - (box_h_25221 / (2))),box_w_25220,box_h_25221);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_25218 - (box_w_25220 / (2))),by_25219,box_w_25220,(2));

var bx = cx;
var by = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto__ = (15);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_25222 = cljs.core.mod(((i * (73)) + t),(1000));
var angle_25223 = (i * 2.4);
var dist_25224 = ((10) + ((15) * Math.sin((angle_25223 + (t * 0.002)))));
var x_25225 = (bx + (dist_25224 * Math.cos(angle_25223)));
var y_25226 = (by + (dist_25224 * Math.sin(angle_25223)));
ctx.beginPath();

ctx.arc(x_25225,y_25226,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__25228 = (i + (1));
i = G__25228;
continue;
} else {
return null;
}
break;
}

}
}
});
bb_web_ds_tools.components.landing.animations.draw_multi_runtime = (function bb_web_ds_tools$components$landing$animations$draw_multi_runtime(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.clear_rect(ctx,w,h);

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
var n__5616__auto___25230 = total_lines;
var i_25231 = (0);
while(true){
if((i_25231 < n__5616__auto___25230)){
var line_25232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_25231);
var line_chars_start_25233 = (i_25231 * chars_per_line);
var chars_for_this_line_25234 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (chars_to_show - line_chars_start_25233);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y_25235 = ((cy - (30)) - (((1) - i_25231) * (20)));
if((chars_for_this_line_25234 > (0))){
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i_25231));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_25232,(0),chars_for_this_line_25234),cx,y_25235);
} else {
}

var G__25236 = (i_25231 + (1));
i_25231 = G__25236;
continue;
} else {
}
break;
}

(phase < (5500));

var progress_25237__$1 = ((phase - (4000)) / (1500));
var box_size_25238 = ((70) + ((10) * Math.sin((t * 0.01))));
var n__5616__auto___25239 = (3);
var i_25240 = (0);
while(true){
if((i_25240 < n__5616__auto___25239)){
var start_y_25241 = ((cy - (30)) - (((1) - i_25240) * (20)));
var target_y_25242 = cy;
var curr_y_25243 = (start_y_25241 + ((target_y_25242 - start_y_25241) * progress_25237__$1));
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i_25240));

(ctx.globalAlpha = (1.0 - progress_25237__$1));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_25240),cx,curr_y_25243);

var G__25244 = (i_25240 + (1));
i_25240 = G__25244;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 1.0);

(ctx.globalAlpha = progress_25237__$1);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((cx - (box_size_25238 / (2))),(cy - (box_size_25238 / (2))),box_size_25238,box_size_25238);


var box_size_25245 = (80);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.shadowColor = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.shadowBlur = ((10) + ((10) * Math.sin((t * 0.01)))));

ctx.fillRect((cx - (box_size_25245 / (2))),(cy - (box_size_25245 / (2))),box_size_25245,box_size_25245);

(ctx.shadowBlur = (0));

var inner_r_25246 = (box_size_25245 * 0.35);
ctx.save();

ctx.translate(cx,cy);

ctx.rotate((t * 0.005));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.beginPath();

var n__5616__auto___25247 = (8);
var i_25248 = (0);
while(true){
if((i_25248 < n__5616__auto___25247)){
var angle_25249 = (i_25248 * (Math.PI / (4)));
var r_25250 = ((cljs.core.even_QMARK_(i_25248))?inner_r_25246:(inner_r_25246 * 0.7));
if((i_25248 === (0))){
ctx.moveTo((r_25250 * Math.cos(angle_25249)),(r_25250 * Math.sin(angle_25249)));
} else {
ctx.lineTo((r_25250 * Math.cos(angle_25249)),(r_25250 * Math.sin(angle_25249)));
}

var G__25251 = (i_25248 + (1));
i_25248 = G__25251;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),(inner_r_25246 * 0.3),(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

ctx.restore();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto___25252 = (5);
var i_25253 = (0);
while(true){
if((i_25253 < n__5616__auto___25252)){
var offset_25254 = (i_25253 * (200));
var p_progress_25255 = cljs.core.mod(((t + offset_25254) / (1000)),1.0);
var y_25256 = ((cy + (box_size_25245 / (2))) + (p_progress_25255 * (60)));
var alpha_25257 = (1.0 - p_progress_25255);
if((p_progress_25255 < 1.0)){
(ctx.globalAlpha = alpha_25257);

ctx.fillRect((cx - (2)),y_25256,(4),(4));
} else {
}

var G__25258 = (i_25253 + (1));
i_25253 = G__25258;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
} else {
return null;
}
});
bb_web_ds_tools.components.landing.animations.draw_honeysql = (function bb_web_ds_tools$components$landing$animations$draw_honeysql(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.clear_rect(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var cycle = (6000);
var phase = cljs.core.mod(t,cycle);
var orbit_r = (60);
var angle = (t * 0.001);
var sql_lines = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT *","FROM users","WHERE id > 10"], null);
var font_size = (24);
var text_align = "center";
var text_baseline = "middle";
(ctx.font = ["bold ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px sans-serif"].join(''));

(ctx.textAlign = text_align);

(ctx.textBaseline = text_baseline);

if((phase < (3000))){
var alpha = (((phase > (2500)))?(1.0 - ((phase - (2500)) / (500))):1.0);
(ctx.globalAlpha = alpha);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText("{}",cx,cy);

var seq__25138_25259 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn)], null)], null));
var chunk__25139_25260 = null;
var count__25140_25261 = (0);
var i__25141_25262 = (0);
while(true){
if((i__25141_25262 < count__25140_25261)){
var vec__25148_25265 = chunk__25139_25260.cljs$core$IIndexed$_nth$arity$2(null,i__25141_25262);
var i_25266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148_25265,(0),null);
var text_25267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148_25265,(1),null);
var color_25268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25148_25265,(2),null);
var theta_25269 = (angle + (i_25266 * ((Math.PI * (2)) / (3))));
var x_25270 = (cx + (orbit_r * Math.cos(theta_25269)));
var y_25271 = (cy + (orbit_r * Math.sin(theta_25269)));
(ctx.fillStyle = color_25268);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25267,x_25270,y_25271);


var G__25272 = seq__25138_25259;
var G__25273 = chunk__25139_25260;
var G__25274 = count__25140_25261;
var G__25275 = (i__25141_25262 + (1));
seq__25138_25259 = G__25272;
chunk__25139_25260 = G__25273;
count__25140_25261 = G__25274;
i__25141_25262 = G__25275;
continue;
} else {
var temp__5825__auto___25276 = cljs.core.seq(seq__25138_25259);
if(temp__5825__auto___25276){
var seq__25138_25277__$1 = temp__5825__auto___25276;
if(cljs.core.chunked_seq_QMARK_(seq__25138_25277__$1)){
var c__5548__auto___25278 = cljs.core.chunk_first(seq__25138_25277__$1);
var G__25279 = cljs.core.chunk_rest(seq__25138_25277__$1);
var G__25280 = c__5548__auto___25278;
var G__25281 = cljs.core.count(c__5548__auto___25278);
var G__25282 = (0);
seq__25138_25259 = G__25279;
chunk__25139_25260 = G__25280;
count__25140_25261 = G__25281;
i__25141_25262 = G__25282;
continue;
} else {
var vec__25151_25283 = cljs.core.first(seq__25138_25277__$1);
var i_25284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25151_25283,(0),null);
var text_25285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25151_25283,(1),null);
var color_25286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25151_25283,(2),null);
var theta_25287 = (angle + (i_25284 * ((Math.PI * (2)) / (3))));
var x_25288 = (cx + (orbit_r * Math.cos(theta_25287)));
var y_25289 = (cy + (orbit_r * Math.sin(theta_25287)));
(ctx.fillStyle = color_25286);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25285,x_25288,y_25289);


var G__25290 = cljs.core.next(seq__25138_25277__$1);
var G__25291 = null;
var G__25292 = (0);
var G__25293 = (0);
seq__25138_25259 = G__25290;
chunk__25139_25260 = G__25291;
count__25140_25261 = G__25292;
i__25141_25262 = G__25293;
continue;
}
} else {
}
}
break;
}

return (ctx.globalAlpha = 1.0);
} else {
var progress = ((phase - (3000)) / (1000));
var alpha = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = progress;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var start_x = (cx - (80));
var start_y = (cy - (20));
var line_h = (24);
(ctx.globalAlpha = alpha);

(ctx.font = "16px monospace");

(ctx.textAlign = "left");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto___25294 = cljs.core.count(sql_lines);
var i_25295 = (0);
while(true){
if((i_25295 < n__5616__auto___25294)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_25295),start_x,(start_y + (i_25295 * line_h)));

var G__25296 = (i_25295 + (1));
i_25295 = G__25296;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);

}
});
bb_web_ds_tools.components.landing.animations.draw_vega_lite = (function bb_web_ds_tools$components$landing$animations$draw_vega_lite(ctx,w,h,t){
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

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

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
var progress_25297 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (chart_phase / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_25298 = (((chart_phase > (1500)))?(1.0 - ((chart_phase - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_25297 * alpha_25298));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var bar_w_25299 = (40);
var gap_25300 = (20);
var start_x_25301 = (cx - (1.5 * (bar_w_25299 + gap_25300)));
var n__5616__auto___25302 = (3);
var i_25303 = (0);
while(true){
if((i_25303 < n__5616__auto___25302)){
var h_25304__$1 = ((50) + (i_25303 * (30)));
var x_25305 = (start_x_25301 + (i_25303 * (bar_w_25299 + gap_25300)));
ctx.fillRect(x_25305,(cy - (h_25304__$1 - (50))),bar_w_25299,h_25304__$1);

var G__25306 = (i_25303 + (1));
i_25303 = G__25306;
continue;
} else {
}
break;
}
} else {
}

if((((chart_phase >= (2000))) && ((chart_phase < (4000))))){
var local_t_25307 = (chart_phase - (2000));
var progress_25308 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_25307 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_25309 = (((local_t_25307 > (1500)))?(1.0 - ((local_t_25307 - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_25308 * alpha_25309));

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.lineWidth = (4));

ctx.beginPath();

var points_25310 = (10);
var step_25311 = (w / points_25310);
var n__5616__auto___25312 = points_25310;
var i_25313 = (0);
while(true){
if((i_25313 < n__5616__auto___25312)){
var x_25314 = (i_25313 * step_25311);
var y_25315 = (cy + ((60) * Math.sin((i_25313 * 0.8))));
if((i_25313 === (0))){
ctx.moveTo(x_25314,y_25315);
} else {
ctx.lineTo(x_25314,y_25315);
}

var G__25316 = (i_25313 + (1));
i_25313 = G__25316;
continue;
} else {
}
break;
}

ctx.stroke();
} else {
}

if((chart_phase >= (4000))){
var local_t_25317 = (chart_phase - (4000));
var progress_25318 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_25317 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
(ctx.globalAlpha = progress_25318);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto___25319 = (20);
var i_25320 = (0);
while(true){
if((i_25320 < n__5616__auto___25319)){
var x_25321 = ((cljs.core.mod((i_25320 * (123)),w)) + (- (w / (2))));
var y_25322 = ((cljs.core.mod((i_25320 * (456)),h)) + (- (h / (2))));
ctx.beginPath();

ctx.arc((cx + (Math.cos(i_25320) * (i_25320 * (5)))),(cy + (Math.sin(i_25320) * (i_25320 * (3)))),(5),(0),(Math.PI * (2)));

ctx.fill();

var G__25323 = (i_25320 + (1));
i_25320 = G__25323;
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
bb_web_ds_tools.components.landing.animations.draw_gemma = (function bb_web_ds_tools$components$landing$animations$draw_gemma(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scale = ((1) + (0.1 * Math.sin((t * 0.005))));
ctx.save();

ctx.translate(cx,cy);

ctx.scale(scale,scale);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((-30),(-30),(60),(60));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));

var blink_25325 = cljs.core.mod((t * 5.0E-4),(5));
if((blink_25325 > 4.8)){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));
} else {
}

return ctx.restore();
});
bb_web_ds_tools.components.landing.animations.draw_settings = (function bb_web_ds_tools$components$landing$animations$draw_settings(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var draw_gear = (function (x,y,r,teeth,speed,color){
ctx.save();

ctx.translate(x,y);

ctx.rotate((t * speed));

(ctx.fillStyle = color);

ctx.beginPath();

var outer_r = r;
var inner_r = (r * 0.8);
var hole_r = (r * 0.3);
var n__5616__auto___25326 = (teeth * (2));
var i_25327 = (0);
while(true){
if((i_25327 < n__5616__auto___25326)){
var angle_25328 = (i_25327 * (Math.PI / teeth));
var rad_25329 = ((cljs.core.even_QMARK_(i_25327))?outer_r:inner_r);
ctx.lineTo((rad_25329 * Math.cos(angle_25328)),(rad_25329 * Math.sin(angle_25328)));

var G__25330 = (i_25327 + (1));
i_25327 = G__25330;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),hole_r,(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

return ctx.restore();
});
draw_gear(cx,cy,(40),(8),0.001,new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

return draw_gear((cx + (50)),(cy + (50)),(25),(6),-0.002,new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));
});
bb_web_ds_tools.components.landing.animations.draw_changelog = (function bb_web_ds_tools$components$landing$animations$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__25154 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__25155 = null;
var count__25156 = (0);
var i__25157 = (0);
while(true){
if((i__25157 < count__25156)){
var i = chunk__25155.cljs$core$IIndexed$_nth$arity$2(null,i__25157);
var y_25331 = (((200) + (i * (20))) - scroll_y);
if((((y_25331 > (0))) && ((y_25331 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_25331);
} else {
}


var G__25332 = seq__25154;
var G__25333 = chunk__25155;
var G__25334 = count__25156;
var G__25335 = (i__25157 + (1));
seq__25154 = G__25332;
chunk__25155 = G__25333;
count__25156 = G__25334;
i__25157 = G__25335;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25154);
if(temp__5825__auto__){
var seq__25154__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25154__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25154__$1);
var G__25336 = cljs.core.chunk_rest(seq__25154__$1);
var G__25337 = c__5548__auto__;
var G__25338 = cljs.core.count(c__5548__auto__);
var G__25339 = (0);
seq__25154 = G__25336;
chunk__25155 = G__25337;
count__25156 = G__25338;
i__25157 = G__25339;
continue;
} else {
var i = cljs.core.first(seq__25154__$1);
var y_25340 = (((200) + (i * (20))) - scroll_y);
if((((y_25340 > (0))) && ((y_25340 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_25340);
} else {
}


var G__25341 = cljs.core.next(seq__25154__$1);
var G__25342 = null;
var G__25343 = (0);
var G__25344 = (0);
seq__25154 = G__25341;
chunk__25155 = G__25342;
count__25156 = G__25343;
i__25157 = G__25344;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.js.map
