goog.provide('bb_web_ds_tools.components.landing.animations.workspaces');
bb_web_ds_tools.components.landing.animations.workspaces.calculate_angle = (function bb_web_ds_tools$components$landing$animations$workspaces$calculate_angle(t,open_phase){
if(cljs.core.truth_(open_phase)){
return ((Math.PI * 0.1) * Math.sin((t * 0.003)));
} else {
return (0);
}
});
bb_web_ds_tools.components.landing.animations.workspaces.draw_folder_back = (function bb_web_ds_tools$components$landing$animations$workspaces$draw_folder_back(ctx){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.moveTo((-40),(-30));

ctx.lineTo((40),(-30));

ctx.lineTo((40),(30));

ctx.lineTo((-40),(30));

return ctx.fill();
});
bb_web_ds_tools.components.landing.animations.workspaces.draw_folder_flap = (function bb_web_ds_tools$components$landing$animations$workspaces$draw_folder_flap(ctx,angle){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.moveTo((-40),(30));

ctx.lineTo((40),(30));

ctx.lineTo(((40) + (Math.sin(angle) * (10))),((-30) + (Math.cos(angle) * (-10))));

ctx.lineTo(((-40) + (Math.sin(angle) * (10))),((-30) + (Math.cos(angle) * (-10))));

return ctx.fill();
});
bb_web_ds_tools.components.landing.animations.workspaces.draw_workspaces = (function bb_web_ds_tools$components$landing$animations$workspaces$draw_workspaces(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cycle = cljs.core.mod(t,(4000));
var open_phase = (cycle < (2000));
var angle = bb_web_ds_tools.components.landing.animations.workspaces.calculate_angle(t,open_phase);
var cx = (w / (2));
var cy = (h / (2));
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.lineWidth = (3));

ctx.save();

ctx.translate(cx,cy);

bb_web_ds_tools.components.landing.animations.workspaces.draw_folder_back(ctx);

bb_web_ds_tools.components.landing.animations.workspaces.draw_folder_flap(ctx,angle);

return ctx.restore();
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.workspaces.js.map
