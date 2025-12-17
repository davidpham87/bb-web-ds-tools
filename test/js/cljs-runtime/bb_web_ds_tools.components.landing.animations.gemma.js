goog.provide('bb_web_ds_tools.components.landing.animations.gemma');
bb_web_ds_tools.components.landing.animations.gemma.draw_robot_head = (function bb_web_ds_tools$components$landing$animations$gemma$draw_robot_head(ctx){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

return ctx.fillRect((-30),(-30),(60),(60));
});
bb_web_ds_tools.components.landing.animations.gemma.draw_eyes = (function bb_web_ds_tools$components$landing$animations$gemma$draw_eyes(ctx){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

return ctx.fillRect((5),(-10),(15),(10));
});
bb_web_ds_tools.components.landing.animations.gemma.draw_blinking = (function bb_web_ds_tools$components$landing$animations$gemma$draw_blinking(ctx,t){
var blink = cljs.core.mod((t * 5.0E-4),(5));
if((blink > 4.8)){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

return ctx.fillRect((5),(-10),(15),(10));
} else {
return null;
}
});
bb_web_ds_tools.components.landing.animations.gemma.draw_gemma = (function bb_web_ds_tools$components$landing$animations$gemma$draw_gemma(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.common.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scale = ((1) + (0.1 * Math.sin((t * 0.005))));
ctx.save();

ctx.translate(cx,cy);

ctx.scale(scale,scale);

bb_web_ds_tools.components.landing.animations.gemma.draw_robot_head(ctx);

bb_web_ds_tools.components.landing.animations.gemma.draw_eyes(ctx);

bb_web_ds_tools.components.landing.animations.gemma.draw_blinking(ctx,t);

return ctx.restore();
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.gemma.js.map
