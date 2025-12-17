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

var n__5616__auto___52689 = cols;
var i_52690 = (0);
while(true){
if((i_52690 < n__5616__auto___52689)){
var n__5616__auto___52691__$1 = rows;
var j_52692 = (0);
while(true){
if((j_52692 < n__5616__auto___52691__$1)){
(ctx.fillStyle = ((cljs.core.even_QMARK_((i_52690 + j_52692)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((start_x + (i_52690 * cell_w)),(start_y + (j_52692 * cell_h)),(cell_w - (2)),(cell_h - (2)));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + (i_52690 * cell_w)) + (4)),((start_y + (j_52692 * cell_h)) + (4)),(12),(4));

var G__52693 = (j_52692 + (1));
j_52692 = G__52693;
continue;
} else {
}
break;
}

var G__52694 = (i_52690 + (1));
i_52690 = G__52694;
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

var n__5616__auto___52695 = rows;
var j_52696 = (0);
while(true){
if((j_52696 < n__5616__auto___52695)){
var row_progress_52697 = cljs.core.mod(((t * 0.002) + (j_52696 * 0.2)),1.0);
var x_52698 = ((start_x + ((4) * cell_w)) + (row_progress_52697 * (40)));
var y_52699 = (start_y + (j_52696 * cell_h));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(x_52698,y_52699,(12),(4));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-remove","portal.colors/diff-remove",-1316767592).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + ((4) * cell_w)) + (20)),start_y,(2),(rows * cell_h));

var G__52700 = (j_52696 + (1));
j_52696 = G__52700;
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

var n__5616__auto___52701 = rows;
var i_52702 = (0);
while(true){
if((i_52702 < n__5616__auto___52701)){
var n__5616__auto___52703__$1 = cols;
var j_52704 = (0);
while(true){
if((j_52704 < n__5616__auto___52703__$1)){
(ctx.fillStyle = ((cljs.core.even_QMARK_((i_52702 + j_52704)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((start_x + (i_52702 * cell_w)),(start_y + (j_52704 * cell_h)),(cell_w - (2)),(cell_h - (2)));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + (i_52702 * cell_w)) + (4)),((start_y + (j_52704 * cell_h)) + (4)),(12),(4));

var G__52705 = (j_52704 + (1));
j_52704 = G__52705;
continue;
} else {
}
break;
}

var G__52706 = (i_52702 + (1));
i_52702 = G__52706;
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

var n__5616__auto___52707 = cols;
var i_52708 = (0);
while(true){
if((i_52708 < n__5616__auto___52707)){
var freq_52709 = (0.002 + (i_52708 * 0.001));
var height_52710 = ((20) + ((30) * Math.abs(Math.sin((t * freq_52709)))));
var x_52711 = (start_x + (i_52708 * (bar_w + gap)));
var y_52712 = (base_y - height_52710);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","uri","portal.colors/uri",1909526219).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),cljs.core.mod(i_52708,(5))));

ctx.fillRect(x_52711,y_52712,bar_w,height_52710);

var G__52713 = (i_52708 + (1));
i_52708 = G__52713;
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
