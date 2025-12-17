goog.provide('bb_web_ds_tools.components.landing.animations.malli');
bb_web_ds_tools.components.landing.animations.malli.font_size = (12);
bb_web_ds_tools.components.landing.animations.malli.setup_font = (function bb_web_ds_tools$components$landing$animations$malli$setup_font(ctx){
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.malli.font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

return (ctx.textBaseline = "middle");
});
bb_web_ds_tools.components.landing.animations.malli.draw_raw_data = (function bb_web_ds_tools$components$landing$animations$malli$draw_raw_data(ctx,_w,_h,_t,phase,cx,cy){
var alpha = (((phase > (1500)))?(1.0 - ((phase - (1500)) / (500))):1.0);
(ctx.globalAlpha = alpha);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText("[{:a 1} {:a 2}]",cx,cy);

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.malli.draw_schema_inference = (function bb_web_ds_tools$components$landing$animations$malli$draw_schema_inference(ctx,_w,_h,_t,phase,cx,cy){
var progress = ((phase - (2000)) / (1000));
var alpha_in = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = progress;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var alpha_out = (((phase > (4500)))?(1.0 - ((phase - (4500)) / (500))):1.0);
(ctx.globalAlpha = (alpha_in * alpha_out));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText("[{:a 1} {:a 2}]",cx,(cy - (20)));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.font = "20 sans-serif");

ctx.fillText("\u2B07",cx,(cy + (5)));

(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.malli.font_size),"px monospace"].join(''));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText("[:map [:a :int]]",cx,(cy + (30)));

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.malli.draw_validation = (function bb_web_ds_tools$components$landing$animations$malli$draw_validation(ctx,_w,_h,_t,phase,cx,cy){
var progress = ((phase - (5000)) / (500));
var alpha = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = progress;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var radius = (30);
(ctx.globalAlpha = alpha);

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (4));

ctx.beginPath();

ctx.arc(cx,cy,radius,(0),(Math.PI * (2)));

ctx.stroke();

ctx.beginPath();

ctx.moveTo((cx - (15)),cy);

ctx.lineTo((cx - (5)),(cy + (10)));

ctx.lineTo((cx + (20)),(cy - (15)));

ctx.stroke();

(ctx.font = "16 sans-serif");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText("Valid",cx,(cy + (50)));

return (ctx.globalAlpha = 1.0);
});
/**
 * Draws the Malli feature animation.
 * 
 *   Args:
 *  ctx (object): Canvas context.
 *  w (number): Width.
 *  h (number): Height.
 *  t (number): Time.
 * 
 *   Returns:
 *  nil.
 */
bb_web_ds_tools.components.landing.animations.malli.draw_malli = (function bb_web_ds_tools$components$landing$animations$malli$draw_malli(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
bb_web_ds_tools.components.landing.animations.malli.setup_font(ctx);

if((phase < (2000))){
return bb_web_ds_tools.components.landing.animations.malli.draw_raw_data(ctx,w,h,t,phase,cx,cy);
} else {
if((phase < (5000))){
return bb_web_ds_tools.components.landing.animations.malli.draw_schema_inference(ctx,w,h,t,phase,cx,cy);
} else {
return bb_web_ds_tools.components.landing.animations.malli.draw_validation(ctx,w,h,t,phase,cx,cy);

}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.malli.js.map
