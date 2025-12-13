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

var n__5616__auto___52122 = total_cols;
var i_52123 = (0);
while(true){
if((i_52123 < n__5616__auto___52122)){
var x_52124 = (start_data_x + (i_52123 * col_w));
var y_52125 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_52123),x_52124,y_52125);

var G__52126 = (i_52123 + (1));
i_52123 = G__52126;
continue;
} else {
}
break;
}

var n__5616__auto__ = cljs.core.count(data_rows);
var j = (0);
while(true){
if((j < n__5616__auto__)){
var row_52127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j);
var n__5616__auto___52128__$1 = total_cols;
var i_52129 = (0);
while(true){
if((i_52129 < n__5616__auto___52128__$1)){
var val_52130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_52127,i_52129);
var x_52131 = (start_data_x + (i_52129 * col_w));
var y_52132 = (start_data_y + (((j + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_52130),x_52131,y_52132);

var G__52133 = (i_52129 + (1));
i_52129 = G__52133;
continue;
} else {
}
break;
}

var G__52134 = (j + (1));
j = G__52134;
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

var n__5616__auto___52138 = total_cols;
var i_52140 = (0);
while(true){
if((i_52140 < n__5616__auto___52138)){
var x_52141 = (start_data_x + (i_52140 * col_w));
var y_52142 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_52140),x_52141,y_52142);

var G__52146 = (i_52140 + (1));
i_52140 = G__52146;
continue;
} else {
}
break;
}

var n__5616__auto___52147 = cljs.core.count(data_rows);
var j_52148 = (0);
while(true){
if((j_52148 < n__5616__auto___52147)){
var row_52149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j_52148);
var n__5616__auto___52150__$1 = total_cols;
var i_52151 = (0);
while(true){
if((i_52151 < n__5616__auto___52150__$1)){
var val_52152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_52149,i_52151);
var x_52153 = (start_data_x + (i_52151 * col_w));
var y_52154 = (start_data_y + (((j_52148 + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_52152),x_52153,y_52154);

var G__52156 = (i_52151 + (1));
i_52151 = G__52156;
continue;
} else {
}
break;
}

var G__52157 = (j_52148 + (1));
j_52148 = G__52157;
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

var bx_52158 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_52159 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.beginPath();

ctx.moveTo((bx_52158 - (plot_w / (2))),(by_52159 + (plot_h / (2))));

var n__5616__auto___52161 = plot_w;
var i_52162 = (0);
while(true){
if((i_52162 < n__5616__auto___52161)){
var x_52163 = ((bx_52158 - (plot_w / (2))) + i_52162);
var norm_x_52164 = ((i_52162 - (plot_w / (2))) / (10));
var y_52165 = ((by_52159 + (plot_h / (2))) - ((35) * Math.exp(((-0.5 * norm_x_52164) * norm_x_52164))));
ctx.lineTo(x_52163,y_52165);

var G__52166 = (i_52162 + (1));
i_52162 = G__52166;
continue;
} else {
}
break;
}

ctx.lineTo((bx_52158 + (plot_w / (2))),(by_52159 + (plot_h / (2))));

ctx.fill();

var bx_52167 = (cx + (50));
var by_52168 = (cy - (20));
var box_w_52169 = (20);
var box_h_52170 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_52167,(by_52168 - (25)));

ctx.lineTo(bx_52167,(by_52168 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_52167 - (box_w_52169 / (2))),(by_52168 - (box_h_52170 / (2))),box_w_52169,box_h_52170);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_52167 - (box_w_52169 / (2))),by_52168,box_w_52169,(2));

var bx_52171 = cx;
var by_52172 = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto___52173 = (15);
var i_52174 = (0);
while(true){
if((i_52174 < n__5616__auto___52173)){
var offset_52175 = cljs.core.mod(((i_52174 * (73)) + t),(1000));
var angle_52176 = (i_52174 * 2.4);
var dist_52177 = ((10) + ((15) * Math.sin((angle_52176 + (t * 0.002)))));
var x_52178 = (bx_52171 + (dist_52177 * Math.cos(angle_52176)));
var y_52179 = (by_52172 + (dist_52177 * Math.sin(angle_52176)));
ctx.beginPath();

ctx.arc(x_52178,y_52179,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__52180 = (i_52174 + (1));
i_52174 = G__52180;
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
var bx_52181 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_52182 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.beginPath();

ctx.moveTo((bx_52181 - (plot_w__$1 / (2))),(by_52182 + (plot_h__$1 / (2))));

var n__5616__auto___52183 = plot_w__$1;
var i_52184 = (0);
while(true){
if((i_52184 < n__5616__auto___52183)){
var x_52185 = ((bx_52181 - (plot_w__$1 / (2))) + i_52184);
var norm_x_52186 = ((i_52184 - (plot_w__$1 / (2))) / (10));
var y_52187 = ((by_52182 + (plot_h__$1 / (2))) - ((35) * Math.exp(((-0.5 * norm_x_52186) * norm_x_52186))));
ctx.lineTo(x_52185,y_52187);

var G__52188 = (i_52184 + (1));
i_52184 = G__52188;
continue;
} else {
}
break;
}

ctx.lineTo((bx_52181 + (plot_w__$1 / (2))),(by_52182 + (plot_h__$1 / (2))));

ctx.fill();

var bx_52189 = (cx + (50));
var by_52190 = (cy - (20));
var box_w_52191 = (20);
var box_h_52192 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_52189,(by_52190 - (25)));

ctx.lineTo(bx_52189,(by_52190 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_52189 - (box_w_52191 / (2))),(by_52190 - (box_h_52192 / (2))),box_w_52191,box_h_52192);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((bx_52189 - (box_w_52191 / (2))),by_52190,box_w_52191,(2));

var bx = cx;
var by = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto__ = (15);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_52194 = cljs.core.mod(((i * (73)) + t),(1000));
var angle_52195 = (i * 2.4);
var dist_52196 = ((10) + ((15) * Math.sin((angle_52195 + (t * 0.002)))));
var x_52197 = (bx + (dist_52196 * Math.cos(angle_52195)));
var y_52198 = (by + (dist_52196 * Math.sin(angle_52195)));
ctx.beginPath();

ctx.arc(x_52197,y_52198,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__52200 = (i + (1));
i = G__52200;
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
var n__5616__auto___52201 = total_lines;
var i_52202 = (0);
while(true){
if((i_52202 < n__5616__auto___52201)){
var line_52203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_52202);
var line_chars_start_52204 = (i_52202 * chars_per_line);
var chars_for_this_line_52205 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (chars_to_show - line_chars_start_52204);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y_52206 = ((cy - (30)) - (((1) - i_52202) * (20)));
if((chars_for_this_line_52205 > (0))){
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i_52202));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_52203,(0),chars_for_this_line_52205),cx,y_52206);
} else {
}

var G__52207 = (i_52202 + (1));
i_52202 = G__52207;
continue;
} else {
}
break;
}

(phase < (5500));

var progress_52208__$1 = ((phase - (4000)) / (1500));
var box_size_52209 = ((70) + ((10) * Math.sin((t * 0.01))));
var n__5616__auto___52210 = (3);
var i_52211 = (0);
while(true){
if((i_52211 < n__5616__auto___52210)){
var start_y_52212 = ((cy - (30)) - (((1) - i_52211) * (20)));
var target_y_52213 = cy;
var curr_y_52214 = (start_y_52212 + ((target_y_52213 - start_y_52212) * progress_52208__$1));
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i_52211));

(ctx.globalAlpha = (1.0 - progress_52208__$1));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_52211),cx,curr_y_52214);

var G__52215 = (i_52211 + (1));
i_52211 = G__52215;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 1.0);

(ctx.globalAlpha = progress_52208__$1);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.fillRect((cx - (box_size_52209 / (2))),(cy - (box_size_52209 / (2))),box_size_52209,box_size_52209);


var box_size_52216 = (80);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.shadowColor = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.shadowBlur = ((10) + ((10) * Math.sin((t * 0.01)))));

ctx.fillRect((cx - (box_size_52216 / (2))),(cy - (box_size_52216 / (2))),box_size_52216,box_size_52216);

(ctx.shadowBlur = (0));

var inner_r_52217 = (box_size_52216 * 0.35);
ctx.save();

ctx.translate(cx,cy);

ctx.rotate((t * 0.005));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

ctx.beginPath();

var n__5616__auto___52218 = (8);
var i_52219 = (0);
while(true){
if((i_52219 < n__5616__auto___52218)){
var angle_52220 = (i_52219 * (Math.PI / (4)));
var r_52221 = ((cljs.core.even_QMARK_(i_52219))?inner_r_52217:(inner_r_52217 * 0.7));
if((i_52219 === (0))){
ctx.moveTo((r_52221 * Math.cos(angle_52220)),(r_52221 * Math.sin(angle_52220)));
} else {
ctx.lineTo((r_52221 * Math.cos(angle_52220)),(r_52221 * Math.sin(angle_52220)));
}

var G__52222 = (i_52219 + (1));
i_52219 = G__52222;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),(inner_r_52217 * 0.3),(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

ctx.restore();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto___52223 = (5);
var i_52224 = (0);
while(true){
if((i_52224 < n__5616__auto___52223)){
var offset_52225 = (i_52224 * (200));
var p_progress_52226 = cljs.core.mod(((t + offset_52225) / (1000)),1.0);
var y_52227 = ((cy + (box_size_52216 / (2))) + (p_progress_52226 * (60)));
var alpha_52228 = (1.0 - p_progress_52226);
if((p_progress_52226 < 1.0)){
(ctx.globalAlpha = alpha_52228);

ctx.fillRect((cx - (2)),y_52227,(4),(4));
} else {
}

var G__52229 = (i_52224 + (1));
i_52224 = G__52229;
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

var seq__52082_52230 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn)], null)], null));
var chunk__52083_52231 = null;
var count__52084_52232 = (0);
var i__52085_52233 = (0);
while(true){
if((i__52085_52233 < count__52084_52232)){
var vec__52092_52234 = chunk__52083_52231.cljs$core$IIndexed$_nth$arity$2(null,i__52085_52233);
var i_52235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092_52234,(0),null);
var text_52236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092_52234,(1),null);
var color_52237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092_52234,(2),null);
var theta_52238 = (angle + (i_52235 * ((Math.PI * (2)) / (3))));
var x_52239 = (cx + (orbit_r * Math.cos(theta_52238)));
var y_52240 = (cy + (orbit_r * Math.sin(theta_52238)));
(ctx.fillStyle = color_52237);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52236,x_52239,y_52240);


var G__52241 = seq__52082_52230;
var G__52242 = chunk__52083_52231;
var G__52243 = count__52084_52232;
var G__52244 = (i__52085_52233 + (1));
seq__52082_52230 = G__52241;
chunk__52083_52231 = G__52242;
count__52084_52232 = G__52243;
i__52085_52233 = G__52244;
continue;
} else {
var temp__5825__auto___52245 = cljs.core.seq(seq__52082_52230);
if(temp__5825__auto___52245){
var seq__52082_52246__$1 = temp__5825__auto___52245;
if(cljs.core.chunked_seq_QMARK_(seq__52082_52246__$1)){
var c__5548__auto___52248 = cljs.core.chunk_first(seq__52082_52246__$1);
var G__52249 = cljs.core.chunk_rest(seq__52082_52246__$1);
var G__52250 = c__5548__auto___52248;
var G__52251 = cljs.core.count(c__5548__auto___52248);
var G__52252 = (0);
seq__52082_52230 = G__52249;
chunk__52083_52231 = G__52250;
count__52084_52232 = G__52251;
i__52085_52233 = G__52252;
continue;
} else {
var vec__52095_52254 = cljs.core.first(seq__52082_52246__$1);
var i_52255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52095_52254,(0),null);
var text_52256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52095_52254,(1),null);
var color_52257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52095_52254,(2),null);
var theta_52258 = (angle + (i_52255 * ((Math.PI * (2)) / (3))));
var x_52259 = (cx + (orbit_r * Math.cos(theta_52258)));
var y_52260 = (cy + (orbit_r * Math.sin(theta_52258)));
(ctx.fillStyle = color_52257);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52256,x_52259,y_52260);


var G__52261 = cljs.core.next(seq__52082_52246__$1);
var G__52262 = null;
var G__52263 = (0);
var G__52264 = (0);
seq__52082_52230 = G__52261;
chunk__52083_52231 = G__52262;
count__52084_52232 = G__52263;
i__52085_52233 = G__52264;
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

var n__5616__auto___52265 = cljs.core.count(sql_lines);
var i_52266 = (0);
while(true){
if((i_52266 < n__5616__auto___52265)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_52266),start_x,(start_y + (i_52266 * line_h)));

var G__52267 = (i_52266 + (1));
i_52266 = G__52267;
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
var progress_52268 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (chart_phase / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_52269 = (((chart_phase > (1500)))?(1.0 - ((chart_phase - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_52268 * alpha_52269));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var bar_w_52270 = (40);
var gap_52271 = (20);
var start_x_52272 = (cx - (1.5 * (bar_w_52270 + gap_52271)));
var n__5616__auto___52273 = (3);
var i_52274 = (0);
while(true){
if((i_52274 < n__5616__auto___52273)){
var h_52275__$1 = ((50) + (i_52274 * (30)));
var x_52276 = (start_x_52272 + (i_52274 * (bar_w_52270 + gap_52271)));
ctx.fillRect(x_52276,(cy - (h_52275__$1 - (50))),bar_w_52270,h_52275__$1);

var G__52277 = (i_52274 + (1));
i_52274 = G__52277;
continue;
} else {
}
break;
}
} else {
}

if((((chart_phase >= (2000))) && ((chart_phase < (4000))))){
var local_t_52278 = (chart_phase - (2000));
var progress_52279 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_52278 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_52280 = (((local_t_52278 > (1500)))?(1.0 - ((local_t_52278 - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_52279 * alpha_52280));

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

(ctx.lineWidth = (4));

ctx.beginPath();

var points_52286 = (10);
var step_52287 = (w / points_52286);
var n__5616__auto___52288 = points_52286;
var i_52289 = (0);
while(true){
if((i_52289 < n__5616__auto___52288)){
var x_52290 = (i_52289 * step_52287);
var y_52291 = (cy + ((60) * Math.sin((i_52289 * 0.8))));
if((i_52289 === (0))){
ctx.moveTo(x_52290,y_52291);
} else {
ctx.lineTo(x_52290,y_52291);
}

var G__52292 = (i_52289 + (1));
i_52289 = G__52292;
continue;
} else {
}
break;
}

ctx.stroke();
} else {
}

if((chart_phase >= (4000))){
var local_t_52293 = (chart_phase - (4000));
var progress_52294 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_52293 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
(ctx.globalAlpha = progress_52294);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.zenburn));

var n__5616__auto___52295 = (20);
var i_52296 = (0);
while(true){
if((i_52296 < n__5616__auto___52295)){
var x_52297 = ((cljs.core.mod((i_52296 * (123)),w)) + (- (w / (2))));
var y_52298 = ((cljs.core.mod((i_52296 * (456)),h)) + (- (h / (2))));
ctx.beginPath();

ctx.arc((cx + (Math.cos(i_52296) * (i_52296 * (5)))),(cy + (Math.sin(i_52296) * (i_52296 * (3)))),(5),(0),(Math.PI * (2)));

ctx.fill();

var G__52299 = (i_52296 + (1));
i_52296 = G__52299;
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

var blink_52300 = cljs.core.mod((t * 5.0E-4),(5));
if((blink_52300 > 4.8)){
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
var n__5616__auto___52301 = (teeth * (2));
var i_52302 = (0);
while(true){
if((i_52302 < n__5616__auto___52301)){
var angle_52303 = (i_52302 * (Math.PI / teeth));
var rad_52304 = ((cljs.core.even_QMARK_(i_52302))?outer_r:inner_r);
ctx.lineTo((rad_52304 * Math.cos(angle_52303)),(rad_52304 * Math.sin(angle_52303)));

var G__52305 = (i_52302 + (1));
i_52302 = G__52305;
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

var seq__52110 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__52111 = null;
var count__52112 = (0);
var i__52113 = (0);
while(true){
if((i__52113 < count__52112)){
var i = chunk__52111.cljs$core$IIndexed$_nth$arity$2(null,i__52113);
var y_52306 = (((200) + (i * (20))) - scroll_y);
if((((y_52306 > (0))) && ((y_52306 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_52306);
} else {
}


var G__52308 = seq__52110;
var G__52309 = chunk__52111;
var G__52310 = count__52112;
var G__52311 = (i__52113 + (1));
seq__52110 = G__52308;
chunk__52111 = G__52309;
count__52112 = G__52310;
i__52113 = G__52311;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__52110);
if(temp__5825__auto__){
var seq__52110__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52110__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__52110__$1);
var G__52312 = cljs.core.chunk_rest(seq__52110__$1);
var G__52313 = c__5548__auto__;
var G__52314 = cljs.core.count(c__5548__auto__);
var G__52315 = (0);
seq__52110 = G__52312;
chunk__52111 = G__52313;
count__52112 = G__52314;
i__52113 = G__52315;
continue;
} else {
var i = cljs.core.first(seq__52110__$1);
var y_52316 = (((200) + (i * (20))) - scroll_y);
if((((y_52316 > (0))) && ((y_52316 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_52316);
} else {
}


var G__52317 = cljs.core.next(seq__52110__$1);
var G__52318 = null;
var G__52319 = (0);
var G__52320 = (0);
seq__52110 = G__52317;
chunk__52111 = G__52318;
count__52112 = G__52319;
i__52113 = G__52320;
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
