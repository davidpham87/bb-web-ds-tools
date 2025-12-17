goog.provide('bb_web_ds_tools.components.landing.animations.multi_runtime');
bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(->> ms (map :x)...","sum([m['x'] for m...])","Reduce(+, Filter..."], null);
bb_web_ds_tools.components.landing.animations.multi_runtime.colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#dca3a3","#72d5a3","#94bff3"], null);
bb_web_ds_tools.components.landing.animations.multi_runtime.font_size = (14);
bb_web_ds_tools.components.landing.animations.multi_runtime.setup_font = (function bb_web_ds_tools$components$landing$animations$multi_runtime$setup_font(ctx){
(ctx.font = ["bold ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.multi_runtime.font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

return (ctx.textBaseline = "middle");
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_typing = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_typing(ctx,_w,_h,_t,phase,cx,cy){
var progress = (phase / (4000));
var total_lines = cljs.core.count(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines);
var chars_per_line = (20);
var total_chars = (total_lines * chars_per_line);
var chars_to_show = Math.floor((progress * total_chars));
var n__5616__auto__ = total_lines;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var line_52879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines,i);
var line_chars_start_52880 = (i * chars_per_line);
var chars_for_this_line_52881 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (chars_to_show - line_chars_start_52880);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y_52882 = ((cy - (30)) - (((1) - i) * (20)));
if((chars_for_this_line_52881 > (0))){
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.colors,i));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_52879,(0),chars_for_this_line_52881),cx,y_52882);
} else {
}

var G__52883 = (i + (1));
i = G__52883;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_converging = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_converging(ctx,_w,_h,t,phase,cx,cy){
var progress = ((phase - (4000)) / (1500));
var box_size = ((70) + ((10) * Math.sin((t * 0.01))));
var n__5616__auto___52884 = (3);
var i_52885 = (0);
while(true){
if((i_52885 < n__5616__auto___52884)){
var start_y_52886 = ((cy - (30)) - (((1) - i_52885) * (20)));
var target_y_52887 = cy;
var curr_y_52888 = (start_y_52886 + ((target_y_52887 - start_y_52886) * progress));
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.colors,i_52885));

(ctx.globalAlpha = (1.0 - progress));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.multi_runtime.code_lines,i_52885),cx,curr_y_52888);

var G__52889 = (i_52885 + (1));
i_52885 = G__52889;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 1.0);

(ctx.globalAlpha = progress);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

return ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_processing = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_processing(ctx,_w,_h,t,_phase,cx,cy){
var box_size = (80);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowColor = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowBlur = ((10) + ((10) * Math.sin((t * 0.01)))));

ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);

(ctx.shadowBlur = (0));

var inner_r_52890 = (box_size * 0.35);
ctx.save();

ctx.translate(cx,cy);

ctx.rotate((t * 0.005));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

var n__5616__auto___52891 = (8);
var i_52892 = (0);
while(true){
if((i_52892 < n__5616__auto___52891)){
var angle_52893 = (i_52892 * (Math.PI / (4)));
var r_52894 = ((cljs.core.even_QMARK_(i_52892))?inner_r_52890:(inner_r_52890 * 0.7));
if((i_52892 === (0))){
ctx.moveTo((r_52894 * Math.cos(angle_52893)),(r_52894 * Math.sin(angle_52893)));
} else {
ctx.lineTo((r_52894 * Math.cos(angle_52893)),(r_52894 * Math.sin(angle_52893)));
}

var G__52895 = (i_52892 + (1));
i_52892 = G__52895;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),(inner_r_52890 * 0.3),(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

ctx.restore();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___52896 = (5);
var i_52897 = (0);
while(true){
if((i_52897 < n__5616__auto___52896)){
var offset_52898 = (i_52897 * (200));
var p_progress_52899 = cljs.core.mod(((t + offset_52898) / (1000)),1.0);
var y_52900 = ((cy + (box_size / (2))) + (p_progress_52899 * (60)));
var alpha_52901 = (1.0 - p_progress_52899);
if((p_progress_52899 < 1.0)){
(ctx.globalAlpha = alpha_52901);

ctx.fillRect((cx - (2)),y_52900,(4),(4));
} else {
}

var G__52902 = (i_52897 + (1));
i_52897 = G__52902;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_multi_runtime = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_multi_runtime(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
bb_web_ds_tools.components.landing.animations.multi_runtime.setup_font(ctx);

if((phase < (4000))){
return bb_web_ds_tools.components.landing.animations.multi_runtime.draw_typing(ctx,w,h,t,phase,cx,cy);
} else {
if((phase < (5500))){
return bb_web_ds_tools.components.landing.animations.multi_runtime.draw_converging(ctx,w,h,t,phase,cx,cy);
} else {
return bb_web_ds_tools.components.landing.animations.multi_runtime.draw_processing(ctx,w,h,t,phase,cx,cy);

}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.multi_runtime.js.map
