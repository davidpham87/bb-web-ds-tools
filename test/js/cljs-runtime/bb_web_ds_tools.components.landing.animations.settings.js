goog.provide('bb_web_ds_tools.components.landing.animations.settings');
bb_web_ds_tools.components.landing.animations.settings.draw_gear = (function bb_web_ds_tools$components$landing$animations$settings$draw_gear(ctx,t,x,y,r,teeth,speed,color){
ctx.save();

ctx.translate(x,y);

ctx.rotate((t * speed));

(ctx.fillStyle = color);

ctx.beginPath();

var outer_r = r;
var inner_r = (r * 0.8);
var hole_r = (r * 0.3);
var n__5616__auto___52940 = (teeth * (2));
var i_52941 = (0);
while(true){
if((i_52941 < n__5616__auto___52940)){
var angle_52942 = (i_52941 * (Math.PI / teeth));
var rad_52943 = ((cljs.core.even_QMARK_(i_52941))?outer_r:inner_r);
ctx.lineTo((rad_52943 * Math.cos(angle_52942)),(rad_52943 * Math.sin(angle_52942)));

var G__52944 = (i_52941 + (1));
i_52941 = G__52944;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),hole_r,(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

return ctx.restore();
});
bb_web_ds_tools.components.landing.animations.settings.draw_settings = (function bb_web_ds_tools$components$landing$animations$settings$draw_settings(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.common.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
bb_web_ds_tools.components.landing.animations.settings.draw_gear(ctx,t,cx,cy,(40),(8),0.001,new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

return bb_web_ds_tools.components.landing.animations.settings.draw_gear(ctx,t,(cx + (50)),(cy + (50)),(25),(6),-0.002,new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.settings.js.map
