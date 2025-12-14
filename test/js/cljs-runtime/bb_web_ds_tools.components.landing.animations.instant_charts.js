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

var n__5616__auto___52092 = total_cols;
var i_52093 = (0);
while(true){
if((i_52093 < n__5616__auto___52092)){
var x_52094 = (start_data_x + (i_52093 * col_w));
var y_52095 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_52093),x_52094,y_52095);

var G__52096 = (i_52093 + (1));
i_52093 = G__52096;
continue;
} else {
}
break;
}

var n__5616__auto__ = cljs.core.count(data_rows);
var j = (0);
while(true){
if((j < n__5616__auto__)){
var row_52097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j);
var n__5616__auto___52098__$1 = total_cols;
var i_52099 = (0);
while(true){
if((i_52099 < n__5616__auto___52098__$1)){
var val_52100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_52097,i_52099);
var x_52101 = (start_data_x + (i_52099 * col_w));
var y_52102 = (start_data_y + (((j + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_52100),x_52101,y_52102);

var G__52103 = (i_52099 + (1));
i_52099 = G__52103;
continue;
} else {
}
break;
}

var G__52104 = (j + (1));
j = G__52104;
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

var n__5616__auto___52105 = total_cols;
var i_52106 = (0);
while(true){
if((i_52106 < n__5616__auto___52105)){
var x_52107 = (start_data_x + (i_52106 * col_w));
var y_52108 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(col_names,i_52106),x_52107,y_52108);

var G__52109 = (i_52106 + (1));
i_52106 = G__52109;
continue;
} else {
}
break;
}

var n__5616__auto___52110 = cljs.core.count(data_rows);
var j_52111 = (0);
while(true){
if((j_52111 < n__5616__auto___52110)){
var row_52112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(data_rows,j_52111);
var n__5616__auto___52113__$1 = total_cols;
var i_52114 = (0);
while(true){
if((i_52114 < n__5616__auto___52113__$1)){
var val_52115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_52112,i_52114);
var x_52116 = (start_data_x + (i_52114 * col_w));
var y_52117 = (start_data_y + (((j_52111 + (1)) * row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_52115),x_52116,y_52117);

var G__52118 = (i_52114 + (1));
i_52114 = G__52118;
continue;
} else {
}
break;
}

var G__52119 = (j_52111 + (1));
j_52111 = G__52119;
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

var bx_52120 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_52121 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.moveTo((bx_52120 - (plot_w / (2))),(by_52121 + (plot_h / (2))));

var n__5616__auto___52122 = plot_w;
var i_52123 = (0);
while(true){
if((i_52123 < n__5616__auto___52122)){
var x_52124 = ((bx_52120 - (plot_w / (2))) + i_52123);
var norm_x_52125 = ((i_52123 - (plot_w / (2))) / (10));
var y_52126 = ((by_52121 + (plot_h / (2))) - ((35) * Math.exp(((-0.5 * norm_x_52125) * norm_x_52125))));
ctx.lineTo(x_52124,y_52126);

var G__52127 = (i_52123 + (1));
i_52123 = G__52127;
continue;
} else {
}
break;
}

ctx.lineTo((bx_52120 + (plot_w / (2))),(by_52121 + (plot_h / (2))));

ctx.fill();

var bx_52128 = (cx + (50));
var by_52129 = (cy - (20));
var box_w_52130 = (20);
var box_h_52131 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_52128,(by_52129 - (25)));

ctx.lineTo(bx_52128,(by_52129 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_52128 - (box_w_52130 / (2))),(by_52129 - (box_h_52131 / (2))),box_w_52130,box_h_52131);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_52128 - (box_w_52130 / (2))),by_52129,box_w_52130,(2));

var bx_52132 = cx;
var by_52133 = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___52134 = (15);
var i_52135 = (0);
while(true){
if((i_52135 < n__5616__auto___52134)){
var offset_52136 = cljs.core.mod(((i_52135 * (73)) + t),(1000));
var angle_52137 = (i_52135 * 2.4);
var dist_52138 = ((10) + ((15) * Math.sin((angle_52137 + (t * 0.002)))));
var x_52139 = (bx_52132 + (dist_52138 * Math.cos(angle_52137)));
var y_52140 = (by_52133 + (dist_52138 * Math.sin(angle_52137)));
ctx.beginPath();

ctx.arc(x_52139,y_52140,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__52141 = (i_52135 + (1));
i_52135 = G__52141;
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
var bx_52142 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos);
var by_52143 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.moveTo((bx_52142 - (plot_w__$1 / (2))),(by_52143 + (plot_h__$1 / (2))));

var n__5616__auto___52144 = plot_w__$1;
var i_52145 = (0);
while(true){
if((i_52145 < n__5616__auto___52144)){
var x_52146 = ((bx_52142 - (plot_w__$1 / (2))) + i_52145);
var norm_x_52147 = ((i_52145 - (plot_w__$1 / (2))) / (10));
var y_52148 = ((by_52143 + (plot_h__$1 / (2))) - ((35) * Math.exp(((-0.5 * norm_x_52147) * norm_x_52147))));
ctx.lineTo(x_52146,y_52148);

var G__52149 = (i_52145 + (1));
i_52145 = G__52149;
continue;
} else {
}
break;
}

ctx.lineTo((bx_52142 + (plot_w__$1 / (2))),(by_52143 + (plot_h__$1 / (2))));

ctx.fill();

var bx_52150 = (cx + (50));
var by_52151 = (cy - (20));
var box_w_52152 = (20);
var box_h_52153 = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx_52150,(by_52151 - (25)));

ctx.lineTo(bx_52150,(by_52151 + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_52150 - (box_w_52152 / (2))),(by_52151 - (box_h_52153 / (2))),box_w_52152,box_h_52153);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx_52150 - (box_w_52152 / (2))),by_52151,box_w_52152,(2));

var bx = cx;
var by = (cy + (40));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto__ = (15);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_52154 = cljs.core.mod(((i * (73)) + t),(1000));
var angle_52155 = (i * 2.4);
var dist_52156 = ((10) + ((15) * Math.sin((angle_52155 + (t * 0.002)))));
var x_52157 = (bx + (dist_52156 * Math.cos(angle_52155)));
var y_52158 = (by + (dist_52156 * Math.sin(angle_52155)));
ctx.beginPath();

ctx.arc(x_52157,y_52158,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__52159 = (i + (1));
i = G__52159;
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
