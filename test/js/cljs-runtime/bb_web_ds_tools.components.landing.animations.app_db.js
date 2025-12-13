goog.provide('bb_web_ds_tools.components.landing.animations.app_db');
bb_web_ds_tools.components.landing.animations.app_db.draw_app_db = (function bb_web_ds_tools$components$landing$animations$app_db$draw_app_db(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy - (20)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

ctx.beginPath();

ctx.rect((cx - (40)),(cy - (20)),(80),(50));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (30)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (25)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_51647 = (i * (1000));
var y_pos_51648 = ((-50) + cljs.core.mod(((t + offset_51647) * 0.05),(100)));
var x_pos_51649 = (cx + ((60) * Math.sin(((t + offset_51647) * 0.002))));
if((((y_pos_51648 > (-50))) && ((y_pos_51648 < (50))))){
ctx.beginPath();

ctx.arc(x_pos_51649,(cy + y_pos_51648),(3),(0),(Math.PI * (2)));

ctx.fill();
} else {
}

var G__51656 = (i + (1));
i = G__51656;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.app_db.js.map
