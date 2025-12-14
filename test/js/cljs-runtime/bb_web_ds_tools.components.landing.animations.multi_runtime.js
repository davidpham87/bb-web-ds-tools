goog.provide('bb_web_ds_tools.components.landing.animations.multi_runtime');
bb_web_ds_tools.components.landing.animations.multi_runtime.draw_multi_runtime = (function bb_web_ds_tools$components$landing$animations$multi_runtime$draw_multi_runtime(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

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
var n__5616__auto__ = total_lines;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var line_52176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i);
var line_chars_start_52177 = (i * chars_per_line);
var chars_for_this_line_52178 = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (chars_to_show - line_chars_start_52177);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y_52179 = ((cy - (30)) - (((1) - i) * (20)));
if((chars_for_this_line_52178 > (0))){
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line_52176,(0),chars_for_this_line_52178),cx,y_52179);
} else {
}

var G__52183 = (i + (1));
i = G__52183;
continue;
} else {
return null;
}
break;
}
} else {
if((phase < (5500))){
var progress = ((phase - (4000)) / (1500));
var box_size = ((70) + ((10) * Math.sin((t * 0.01))));
var n__5616__auto___52185 = (3);
var i_52186 = (0);
while(true){
if((i_52186 < n__5616__auto___52185)){
var start_y_52187 = ((cy - (30)) - (((1) - i_52186) * (20)));
var target_y_52188 = cy;
var curr_y_52189 = (start_y_52187 + ((target_y_52188 - start_y_52187) * progress));
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(colors,i_52186));

(ctx.globalAlpha = (1.0 - progress));

ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_52186),cx,curr_y_52189);

var G__52190 = (i_52186 + (1));
i_52186 = G__52190;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 1.0);

(ctx.globalAlpha = progress);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

return ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);
} else {
var box_size = (80);
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowColor = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.shadowBlur = ((10) + ((10) * Math.sin((t * 0.01)))));

ctx.fillRect((cx - (box_size / (2))),(cy - (box_size / (2))),box_size,box_size);

(ctx.shadowBlur = (0));

var inner_r_52191 = (box_size * 0.35);
ctx.save();

ctx.translate(cx,cy);

ctx.rotate((t * 0.005));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

var n__5616__auto___52192 = (8);
var i_52193 = (0);
while(true){
if((i_52193 < n__5616__auto___52192)){
var angle_52194 = (i_52193 * (Math.PI / (4)));
var r_52195 = ((cljs.core.even_QMARK_(i_52193))?inner_r_52191:(inner_r_52191 * 0.7));
if((i_52193 === (0))){
ctx.moveTo((r_52195 * Math.cos(angle_52194)),(r_52195 * Math.sin(angle_52194)));
} else {
ctx.lineTo((r_52195 * Math.cos(angle_52194)),(r_52195 * Math.sin(angle_52194)));
}

var G__52196 = (i_52193 + (1));
i_52193 = G__52196;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),(inner_r_52191 * 0.3),(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

ctx.restore();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___52197 = (5);
var i_52198 = (0);
while(true){
if((i_52198 < n__5616__auto___52197)){
var offset_52203 = (i_52198 * (200));
var p_progress_52204 = cljs.core.mod(((t + offset_52203) / (1000)),1.0);
var y_52205 = ((cy + (box_size / (2))) + (p_progress_52204 * (60)));
var alpha_52206 = (1.0 - p_progress_52204);
if((p_progress_52204 < 1.0)){
(ctx.globalAlpha = alpha_52206);

ctx.fillRect((cx - (2)),y_52205,(4),(4));
} else {
}

var G__52208 = (i_52198 + (1));
i_52198 = G__52208;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);

}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.multi_runtime.js.map
