goog.provide('bb_web_ds_tools.components.landing.animations.vega_lite');
bb_web_ds_tools.components.landing.animations.vega_lite.draw_vega_lite = (function bb_web_ds_tools$components$landing$animations$vega_lite$draw_vega_lite(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

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

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

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
var progress_52284 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (chart_phase / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_52285 = (((chart_phase > (1500)))?(1.0 - ((chart_phase - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_52284 * alpha_52285));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var bar_w_52286 = (40);
var gap_52287 = (20);
var start_x_52288 = (cx - (1.5 * (bar_w_52286 + gap_52287)));
var n__5616__auto___52289 = (3);
var i_52290 = (0);
while(true){
if((i_52290 < n__5616__auto___52289)){
var h_52291__$1 = ((50) + (i_52290 * (30)));
var x_52292 = (start_x_52288 + (i_52290 * (bar_w_52286 + gap_52287)));
ctx.fillRect(x_52292,(cy - (h_52291__$1 - (50))),bar_w_52286,h_52291__$1);

var G__52293 = (i_52290 + (1));
i_52290 = G__52293;
continue;
} else {
}
break;
}
} else {
}

if((((chart_phase >= (2000))) && ((chart_phase < (4000))))){
var local_t_52294 = (chart_phase - (2000));
var progress_52295 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_52294 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_52296 = (((local_t_52294 > (1500)))?(1.0 - ((local_t_52294 - (1500)) / (500))):1.0);
(ctx.globalAlpha = (progress_52295 * alpha_52296));

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (4));

ctx.beginPath();

var points_52297 = (10);
var step_52298 = (w / points_52297);
var n__5616__auto___52299 = points_52297;
var i_52300 = (0);
while(true){
if((i_52300 < n__5616__auto___52299)){
var x_52301 = (i_52300 * step_52298);
var y_52302 = (cy + ((60) * Math.sin((i_52300 * 0.8))));
if((i_52300 === (0))){
ctx.moveTo(x_52301,y_52302);
} else {
ctx.lineTo(x_52301,y_52302);
}

var G__52303 = (i_52300 + (1));
i_52300 = G__52303;
continue;
} else {
}
break;
}

ctx.stroke();
} else {
}

if((chart_phase >= (4000))){
var local_t_52304 = (chart_phase - (4000));
var progress_52305 = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = (local_t_52304 / transition);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
(ctx.globalAlpha = progress_52305);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___52306 = (20);
var i_52307 = (0);
while(true){
if((i_52307 < n__5616__auto___52306)){
var x_52308 = ((cljs.core.mod((i_52307 * (123)),w)) + (- (w / (2))));
var y_52309 = ((cljs.core.mod((i_52307 * (456)),h)) + (- (h / (2))));
ctx.beginPath();

ctx.arc((cx + (Math.cos(i_52307) * (i_52307 * (5)))),(cy + (Math.sin(i_52307) * (i_52307 * (3)))),(5),(0),(Math.PI * (2)));

ctx.fill();

var G__52310 = (i_52307 + (1));
i_52307 = G__52310;
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

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.vega_lite.js.map
