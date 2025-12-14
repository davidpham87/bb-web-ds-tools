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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.instant_charts.js");

goog.provide('bb_web_ds_tools.components.landing.animations.instant_charts');
bb_web_ds_tools.components.landing.animations.instant_charts.draw_instant_charts = (function bb_web_ds_tools$components$landing$animations$instant_charts$draw_instant_charts(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

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

var n__5616__auto___25138 = total_cols;
var i_25139 = (0);
while(true){
if((i_25139 < n__5616__auto___25138)){
var x_25140 = (start_data_x + (i_25139 * col_w));
var y_25141 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_25139),x_25140,y_25141);

var G__25142 = (i_25139 + (1));
i_25139 = G__25142;
continue;
} else {
}
break;
}

var n__5616__auto__ = cljs.core.count(data_rows);
var j = (0);
while(true){
if((j < n__5616__auto__)){
var row_25143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j);
var n__5616__auto___25144__$1 = total_cols;
var i_25145 = (0);
while(true){
if((i_25145 < n__5616__auto___25144__$1)){
var val_25146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_25143,i_25145);
var x_25147 = (start_data_x + (i_25145 * col_w));
var y_25148 = (start_data_y + (((j + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_25146),x_25147,y_25148);

var G__25149 = (i_25145 + (1));
i_25145 = G__25149;
continue;
} else {
}
break;
}

var G__25150 = (j + (1));
j = G__25150;
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

var n__5616__auto___25151 = total_cols;
var i_25152 = (0);
while(true){
if((i_25152 < n__5616__auto___25151)){
var x_25153 = (start_data_x + (i_25152 * col_w));
var y_25154 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_25152),x_25153,y_25154);

var G__25155 = (i_25152 + (1));
i_25152 = G__25155;
continue;
} else {
}
break;
}

var n__5616__auto___25156 = cljs.core.count(data_rows);
var j_25157 = (0);
while(true){
if((j_25157 < n__5616__auto___25156)){
var row_25158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j_25157);
var n__5616__auto___25159__$1 = total_cols;
var i_25160 = (0);
while(true){
if((i_25160 < n__5616__auto___25159__$1)){
var val_25161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_25158,i_25160);
var x_25162 = (start_data_x + (i_25160 * col_w));
var y_25163 = (start_data_y + (((j_25157 + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_25161),x_25162,y_25163);

var G__25164 = (i_25160 + (1));
i_25160 = G__25164;
continue;
} else {
}
break;
}

var G__25165 = (j_25157 + (1));
j_25157 = G__25165;
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

var bx_25166 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_25167 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.moveTo((bx_25166 - (plot_w / (2))),(by_25167 + (plot_h / (2))));

var n__5616__auto___25168 = plot_w;
var i_25169 = (0);
while(true){
if((i_25169 < n__5616__auto___25168)){
var x_25170 = ((bx_25166 - (plot_w / (2))) + i_25169);
var norm_x_25171 = ((i_25169 - (plot_w / (2))) / (10));
var y_25172 = ((by_25167 + (plot_h / (2))) - ((35) * Math.exp(((-0.5 * norm_x_25171) * norm_x_25171))));
ctx.lineTo(x_25170,y_25172);

var G__25173 = (i_25169 + (1));
i_25169 = G__25173;
continue;
} else {
}
break;
}

ctx.lineTo((bx_25166 + (plot_w / (2))),(by_25167 + (plot_h / (2))));

ctx.fill();

var bx_25174 = (cx + (50));
var by_25175 = (cy - (20));
var box_w_25176 = (20);
var box_h_25177 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_25174,(by_25175 - (25)));

ctx.lineTo(bx_25174,(by_25175 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_25174 - (box_w_25176 / (2))),(by_25175 - (box_h_25177 / (2))),box_w_25176,box_h_25177);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_25174 - (box_w_25176 / (2))),by_25175,box_w_25176,(2));

var bx_25178 = cx;
var by_25179 = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___25180 = (15);
var i_25181 = (0);
while(true){
if((i_25181 < n__5616__auto___25180)){
var offset_25182 = cljs.core.mod(((i_25181 * (73)) + t),(1000));
var angle_25183 = (i_25181 * 2.4);
var dist_25184 = ((10) + ((15) * Math.sin((angle_25183 + (t * 0.002)))));
var x_25185 = (bx_25178 + (dist_25184 * Math.cos(angle_25183)));
var y_25186 = (by_25179 + (dist_25184 * Math.sin(angle_25183)));
ctx.beginPath();

ctx.arc(x_25185,y_25186,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__25187 = (i_25181 + (1));
i_25181 = G__25187;
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
var bx_25188 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_25189 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.moveTo((bx_25188 - (plot_w__$1 / (2))),(by_25189 + (plot_h__$1 / (2))));

var n__5616__auto___25190 = plot_w__$1;
var i_25191 = (0);
while(true){
if((i_25191 < n__5616__auto___25190)){
var x_25192 = ((bx_25188 - (plot_w__$1 / (2))) + i_25191);
var norm_x_25193 = ((i_25191 - (plot_w__$1 / (2))) / (10));
var y_25194 = ((by_25189 + (plot_h__$1 / (2))) - ((35) * Math.exp(((-0.5 * norm_x_25193) * norm_x_25193))));
ctx.lineTo(x_25192,y_25194);

var G__25195 = (i_25191 + (1));
i_25191 = G__25195;
continue;
} else {
}
break;
}

ctx.lineTo((bx_25188 + (plot_w__$1 / (2))),(by_25189 + (plot_h__$1 / (2))));

ctx.fill();

var bx_25196 = (cx + (50));
var by_25197 = (cy - (20));
var box_w_25198 = (20);
var box_h_25199 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_25196,(by_25197 - (25)));

ctx.lineTo(bx_25196,(by_25197 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_25196 - (box_w_25198 / (2))),(by_25197 - (box_h_25199 / (2))),box_w_25198,box_h_25199);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_25196 - (box_w_25198 / (2))),by_25197,box_w_25198,(2));

var bx = cx;
var by = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto__ = (15);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_25200 = cljs.core.mod(((i * (73)) + t),(1000));
var angle_25201 = (i * 2.4);
var dist_25202 = ((10) + ((15) * Math.sin((angle_25201 + (t * 0.002)))));
var x_25203 = (bx + (dist_25202 * Math.cos(angle_25201)));
var y_25204 = (by + (dist_25202 * Math.sin(angle_25201)));
ctx.beginPath();

ctx.arc(x_25203,y_25204,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__25205 = (i + (1));
i = G__25205;
continue;
} else {
return null;
}
break;
}

}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.instant_charts.js.map
