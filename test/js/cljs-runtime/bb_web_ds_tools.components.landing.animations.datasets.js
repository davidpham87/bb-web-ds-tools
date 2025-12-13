goog.provide('bb_web_ds_tools.components.landing.animations.datasets');
bb_web_ds_tools.components.landing.animations.datasets.draw_datasets = (function bb_web_ds_tools$components$landing$animations$datasets$draw_datasets(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
var phase_duration = (2000);
var display_time = (1500);
var transition_time = (500);
if((phase < phase_duration)){
var progress = (((phase > display_time))?((phase - display_time) / transition_time):(0));
var alpha = (1.0 - progress);
var rows = (4);
var cols = (4);
var cell_w = (20);
var cell_h = (12);
var start_x = ((w / (2)) - ((cols * cell_w) / (2)));
var start_y = ((h / (2)) - ((rows * cell_h) / (2)));
(ctx.globalAlpha = alpha);

var n__5616__auto___51667 = cols;
var i_51668 = (0);
while(true){
if((i_51668 < n__5616__auto___51667)){
var n__5616__auto___51669__$1 = rows;
var j_51670 = (0);
while(true){
if((j_51670 < n__5616__auto___51669__$1)){
(ctx.fillStyle = ((cljs.core.even_QMARK_((i_51668 + j_51670)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((start_x + (i_51668 * cell_w)),(start_y + (j_51670 * cell_h)),(cell_w - (2)),(cell_h - (2)));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + (i_51668 * cell_w)) + (4)),((start_y + (j_51670 * cell_h)) + (4)),(12),(4));

var G__51671 = (j_51670 + (1));
j_51670 = G__51671;
continue;
} else {
}
break;
}

var G__51672 = (i_51668 + (1));
i_51668 = G__51672;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
} else {
if((phase < ((2) * phase_duration))){
var local_t = (phase - phase_duration);
var progress = (((local_t > display_time))?((local_t - display_time) / transition_time):(0));
var alpha_in = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / transition_time);
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

var n__5616__auto___51673 = rows;
var j_51674 = (0);
while(true){
if((j_51674 < n__5616__auto___51673)){
var row_progress_51675 = cljs.core.mod(((t * 0.002) + (j_51674 * 0.2)),1.0);
var x_51676 = ((start_x + ((4) * cell_w)) + (row_progress_51675 * (40)));
var y_51677 = (start_y + (j_51674 * cell_h));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(x_51676,y_51677,(12),(4));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-remove","portal.colors/diff-remove",-1316767592).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + ((4) * cell_w)) + (20)),start_y,(2),(rows * cell_h));

var G__51678 = (j_51674 + (1));
j_51674 = G__51678;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
} else {
if((phase < ((3) * phase_duration))){
var local_t = (phase - ((2) * phase_duration));
var progress = (((local_t > display_time))?((local_t - display_time) / transition_time):(0));
var alpha_in = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / transition_time);
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

ctx.font("10px sans-serif");

ctx.fillText("T",(start_x - (15)),start_y);

var n__5616__auto___51679 = rows;
var i_51680 = (0);
while(true){
if((i_51680 < n__5616__auto___51679)){
var n__5616__auto___51681__$1 = cols;
var j_51682 = (0);
while(true){
if((j_51682 < n__5616__auto___51681__$1)){
(ctx.fillStyle = ((cljs.core.even_QMARK_((i_51680 + j_51682)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((start_x + (i_51680 * cell_w)),(start_y + (j_51682 * cell_h)),(cell_w - (2)),(cell_h - (2)));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(((start_x + (i_51680 * cell_w)) + (4)),((start_y + (j_51682 * cell_h)) + (4)),(12),(4));

var G__51683 = (j_51682 + (1));
j_51682 = G__51683;
continue;
} else {
}
break;
}

var G__51684 = (i_51680 + (1));
i_51680 = G__51684;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
} else {
var local_t = (phase - ((3) * phase_duration));
var alpha_in = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / transition_time);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var cols = (5);
var bar_w = (15);
var gap = (5);
var total_w = ((cols * bar_w) + ((cols - (1)) * gap));
var start_x = ((w / (2)) - (total_w / (2)));
var base_y = ((h / (2)) + (20));
(ctx.globalAlpha = alpha_in);

var n__5616__auto___51685 = cols;
var i_51686 = (0);
while(true){
if((i_51686 < n__5616__auto___51685)){
var freq_51687 = (0.002 + (i_51686 * 0.001));
var height_51688 = ((20) + ((30) * Math.abs(Math.sin((t * freq_51687)))));
var x_51689 = (start_x + (i_51686 * (bar_w + gap)));
var y_51690 = (base_y - height_51688);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn),new cljs.core.Keyword("portal.colors","uri","portal.colors/uri",1909526219).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),cljs.core.mod(i_51686,(5))));

ctx.fillRect(x_51689,y_51690,bar_w,height_51688);

var G__51691 = (i_51686 + (1));
i_51686 = G__51691;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);

}
}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.datasets.js.map
