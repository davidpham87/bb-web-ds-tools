goog.provide('bb_web_ds_tools.components.landing.animations.vega_lite');
bb_web_ds_tools.components.landing.animations.vega_lite.font_size = (14);
bb_web_ds_tools.components.landing.animations.vega_lite.draw_code_snippet = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_code_snippet(ctx,_w,_h,_t,phase,cx,cy){
var code_snippet = "{:mark :bar :encoding ...}";
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.vega_lite.font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

(ctx.textBaseline = "middle");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var progress = (phase / (1500));
var chars_to_show = (function (){var x__5113__auto__ = ((code_snippet).length);
var y__5114__auto__ = Math.floor((progress * ((code_snippet).length)));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(code_snippet,(0),chars_to_show),cx,cy);
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_bar_chart = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_bar_chart(ctx,_w,_h,_t,chart_phase,cx,cy){
var transition = (500);
var progress = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (chart_phase / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha = (((chart_phase > (1500)))?(1.0 - ((chart_phase - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress * alpha));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var bar_w = (40);
var gap = (20);
var start_x = (cx - (1.5 * (bar_w + gap)));
var n__5616__auto__ = (3);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var h_52911 = ((50) + (i * (30)));
var x_52912 = (start_x + (i * (bar_w + gap)));
ctx.fillRect(x_52912,(cy - (h_52911 - (50))),bar_w,h_52911);

var G__52913 = (i + (1));
i = G__52913;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_line_chart = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_line_chart(ctx,w,_h,_t,chart_phase,cy){
var transition = (500);
var local_t = (chart_phase - (2000));
var progress = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha = (((local_t > (1500)))?(1.0 - ((local_t - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress * alpha));

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (4));

ctx.beginPath();

var points_52914 = (10);
var step_52915 = (w / points_52914);
var n__5616__auto___52916 = points_52914;
var i_52917 = (0);
while(true){
if((i_52917 < n__5616__auto___52916)){
var x_52918 = (i_52917 * step_52915);
var y_52919 = (cy + ((60) * Math.sin((i_52917 * 0.8))));
if((i_52917 === (0))){
ctx.moveTo(x_52918,y_52919);
} else {
ctx.lineTo(x_52918,y_52919);
}

var G__52920 = (i_52917 + (1));
i_52917 = G__52920;
continue;
} else {
}
break;
}

return ctx.stroke();
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_scatter_plot = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_scatter_plot(ctx,w,h,_t,chart_phase,cx,cy){
var transition = (500);
var local_t = (chart_phase - (4000));
var progress = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
(ctx.globalAlpha = progress);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto__ = (20);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var x_52921 = ((cljs.core.mod((i * (123)),w)) + (- (w / (2))));
var y_52922 = ((cljs.core.mod((i * (456)),h)) + (- (h / (2))));
ctx.beginPath();

ctx.arc((cx + (Math.cos(i) * (i * (5)))),(cy + (Math.sin(i) * (i * (3)))),(5),(0),(Math.PI * (2)));

ctx.fill();

var G__52923 = (i + (1));
i = G__52923;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_charts = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_charts(ctx,w,h,t,phase,cx,cy){
var chart_phase = (phase - (2000));
if((chart_phase < (2000))){
bb_web_ds_tools.components.landing.animations.vega_lite.draw_bar_chart(ctx,w,h,t,chart_phase,cx,cy);
} else {
}

if((((chart_phase >= (2000))) && ((chart_phase < (4000))))){
bb_web_ds_tools.components.landing.animations.vega_lite.draw_line_chart(ctx,w,h,t,chart_phase,cy);
} else {
}

if((chart_phase >= (4000))){
bb_web_ds_tools.components.landing.animations.vega_lite.draw_scatter_plot(ctx,w,h,t,chart_phase,cx,cy);
} else {
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.vega_lite.draw_vega_lite = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_vega_lite(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
if((phase < (2000))){
return bb_web_ds_tools.components.landing.animations.vega_lite.draw_code_snippet(ctx,w,h,t,phase,cx,cy);
} else {
return bb_web_ds_tools.components.landing.animations.vega_lite.draw_charts(ctx,w,h,t,phase,cx,cy);

}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.vega_lite.js.map
