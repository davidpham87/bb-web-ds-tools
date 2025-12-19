goog.provide('bb_web_ds_tools.components.landing.animations.instant_charts');
bb_web_ds_tools.components.landing.animations.instant_charts.col_names = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Country","Value 1","Value 2"], null);
bb_web_ds_tools.components.landing.animations.instant_charts.data_rows = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["USA",123.45,67.89], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["CAN",98.76,54.32], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MEX",23.45,87.65], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["BRA",76.54,21.09], null)], null);
bb_web_ds_tools.components.landing.animations.instant_charts.font_size = (14);
bb_web_ds_tools.components.landing.animations.instant_charts.row_h = (18);
bb_web_ds_tools.components.landing.animations.instant_charts.col_w = (70);
bb_web_ds_tools.components.landing.animations.instant_charts.total_cols = cljs.core.count(bb_web_ds_tools.components.landing.animations.instant_charts.col_names);
bb_web_ds_tools.components.landing.animations.instant_charts.grid_w = (bb_web_ds_tools.components.landing.animations.instant_charts.total_cols * bb_web_ds_tools.components.landing.animations.instant_charts.col_w);
bb_web_ds_tools.components.landing.animations.instant_charts.plot_w = (60);
bb_web_ds_tools.components.landing.animations.instant_charts.plot_h = (40);
bb_web_ds_tools.components.landing.animations.instant_charts.draw_data = (function bb_web_ds_tools$components$landing$animations$instant_charts$draw_data(ctx,start_data_x,start_data_y){
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.instant_charts.font_size),"px monospace"].join(''));

(ctx.textAlign = "left");

var n__5616__auto___52808 = bb_web_ds_tools.components.landing.animations.instant_charts.total_cols;
var i_52809 = (0);
while(true){
if((i_52809 < n__5616__auto___52808)){
var x_52810 = (start_data_x + (i_52809 * bb_web_ds_tools.components.landing.animations.instant_charts.col_w));
var y_52811 = start_data_y;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.instant_charts.col_names,i_52809),x_52810,y_52811);

var G__52812 = (i_52809 + (1));
i_52809 = G__52812;
continue;
} else {
}
break;
}

var n__5616__auto__ = cljs.core.count(bb_web_ds_tools.components.landing.animations.instant_charts.data_rows);
var j = (0);
while(true){
if((j < n__5616__auto__)){
var row_52813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.instant_charts.data_rows,j);
var n__5616__auto___52814__$1 = bb_web_ds_tools.components.landing.animations.instant_charts.total_cols;
var i_52815 = (0);
while(true){
if((i_52815 < n__5616__auto___52814__$1)){
var val_52816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row_52813,i_52815);
var x_52817 = (start_data_x + (i_52815 * bb_web_ds_tools.components.landing.animations.instant_charts.col_w));
var y_52818 = (start_data_y + (((j + (1)) * bb_web_ds_tools.components.landing.animations.instant_charts.row_h) * 1.2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_52816),x_52817,y_52818);

var G__52819 = (i_52815 + (1));
i_52815 = G__52819;
continue;
} else {
}
break;
}

var G__52820 = (j + (1));
j = G__52820;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.instant_charts.draw_density_plot = (function bb_web_ds_tools$components$landing$animations$instant_charts$draw_density_plot(ctx,bx,by){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.moveTo((bx - (bb_web_ds_tools.components.landing.animations.instant_charts.plot_w / (2))),(by + (bb_web_ds_tools.components.landing.animations.instant_charts.plot_h / (2))));

var n__5616__auto___52821 = bb_web_ds_tools.components.landing.animations.instant_charts.plot_w;
var i_52822 = (0);
while(true){
if((i_52822 < n__5616__auto___52821)){
var x_52823 = ((bx - (bb_web_ds_tools.components.landing.animations.instant_charts.plot_w / (2))) + i_52822);
var norm_x_52824 = ((i_52822 - (bb_web_ds_tools.components.landing.animations.instant_charts.plot_w / (2))) / (10));
var y_52825 = ((by + (bb_web_ds_tools.components.landing.animations.instant_charts.plot_h / (2))) - ((35) * Math.exp(((-0.5 * norm_x_52824) * norm_x_52824))));
ctx.lineTo(x_52823,y_52825);

var G__52826 = (i_52822 + (1));
i_52822 = G__52826;
continue;
} else {
}
break;
}

ctx.lineTo((bx + (bb_web_ds_tools.components.landing.animations.instant_charts.plot_w / (2))),(by + (bb_web_ds_tools.components.landing.animations.instant_charts.plot_h / (2))));

return ctx.fill();
});
bb_web_ds_tools.components.landing.animations.instant_charts.draw_box_plot = (function bb_web_ds_tools$components$landing$animations$instant_charts$draw_box_plot(ctx,bx,by){
var box_w = (20);
var box_h = (30);
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (2));

ctx.beginPath();

ctx.moveTo(bx,(by - (25)));

ctx.lineTo(bx,(by + (25)));

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((bx - (box_w / (2))),(by - (box_h / (2))),box_w,box_h);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

return ctx.fillRect((bx - (box_w / (2))),by,box_w,(2));
});
bb_web_ds_tools.components.landing.animations.instant_charts.draw_scatter_plot = (function bb_web_ds_tools$components$landing$animations$instant_charts$draw_scatter_plot(ctx,bx,by,t){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto__ = (15);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_52827 = cljs.core.mod(((i * (73)) + t),(1000));
var angle_52828 = (i * 2.4);
var dist_52829 = ((10) + ((15) * Math.sin((angle_52828 + (t * 0.002)))));
var x_52830 = (bx + (dist_52829 * Math.cos(angle_52828)));
var y_52831 = (by + (dist_52829 * Math.sin(angle_52828)));
ctx.beginPath();

ctx.arc(x_52830,y_52831,(2),(0),(Math.PI * (2)));

ctx.fill();

var G__52832 = (i + (1));
i = G__52832;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.instant_charts.draw_plots = (function bb_web_ds_tools$components$landing$animations$instant_charts$draw_plots(ctx,t,cx,cy,density_pos,box_pos,scatter_pos){
bb_web_ds_tools.components.landing.animations.instant_charts.draw_density_plot(ctx,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(density_pos),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(density_pos));

bb_web_ds_tools.components.landing.animations.instant_charts.draw_box_plot(ctx,(cx + (50)),(cy - (20)));

return bb_web_ds_tools.components.landing.animations.instant_charts.draw_scatter_plot(ctx,cx,(cy + (40)),t);
});
bb_web_ds_tools.components.landing.animations.instant_charts.draw_instant_charts = (function bb_web_ds_tools$components$landing$animations$instant_charts$draw_instant_charts(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (5000);
var phase = cljs.core.mod(t,cycle);
var start_data_x = (cx - (bb_web_ds_tools.components.landing.animations.instant_charts.grid_w / (2)));
var start_data_y = (cy - (50));
var density_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx - (60)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy - (25))], null);
var box_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx + (60)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy - (25))], null);
var scatter_pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cx,new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (50))], null);
if((phase < (1500))){
return bb_web_ds_tools.components.landing.animations.instant_charts.draw_data(ctx,start_data_x,start_data_y);
} else {
if((phase < (3500))){
var progress = ((phase - (1500)) / (2000));
var ease_progress = ((1) - Math.pow(((1) - progress),(3)));
var alpha_data = (1.0 - ease_progress);
var alpha_plots = ease_progress;
ctx.save();

(ctx.globalAlpha = alpha_data);

bb_web_ds_tools.components.landing.animations.instant_charts.draw_data(ctx,start_data_x,start_data_y);

ctx.restore();

ctx.save();

ctx.translate(cx,cy);

ctx.scale((0.5 + (0.5 * ease_progress)),(0.5 + (0.5 * ease_progress)));

ctx.translate((- cx),(- cy));

(ctx.globalAlpha = alpha_plots);

bb_web_ds_tools.components.landing.animations.instant_charts.draw_plots(ctx,t,cx,cy,density_pos,box_pos,scatter_pos);

ctx.restore();

return (ctx.globalAlpha = 1.0);
} else {
return bb_web_ds_tools.components.landing.animations.instant_charts.draw_plots(ctx,t,cx,cy,density_pos,box_pos,scatter_pos);

}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.instant_charts.js.map
