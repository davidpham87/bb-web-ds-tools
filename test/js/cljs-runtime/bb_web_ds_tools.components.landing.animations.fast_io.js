goog.provide('bb_web_ds_tools.components.landing.animations.fast_io');
bb_web_ds_tools.components.landing.animations.fast_io.draw_fast_io = (function bb_web_ds_tools$components$landing$animations$fast_io$draw_fast_io(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (6000);
var phase = cljs.core.mod(t,cycle);
var win_w = (200);
var win_h = (140);
var win_x = (cx - (win_w / (2)));
var win_y = (cy - (win_h / (2)));
if((phase < (2000))){
var active_tab = (cljs.core.mod((phase / (600)),(3)) | (0));
var tab_w = (win_w / (3));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(win_x,win_y,win_w,win_h);

var n__5616__auto___51938 = (3);
var i_51939 = (0);
while(true){
if((i_51939 < n__5616__auto___51938)){
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_51939,active_tab))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((win_x + (i_51939 * tab_w)),(win_y - (10)),tab_w,(10));

var G__51940 = (i_51939 + (1));
i_51939 = G__51940;
continue;
} else {
}
break;
}

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto__ = (4);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var len_51941 = ((20) + cljs.core.mod(((i + active_tab) * (37)),(60)));
ctx.fillRect((win_x + (10)),((win_y + (15)) + (i * (15))),len_51941,(8));

var G__51942 = (i + (1));
i = G__51942;
continue;
} else {
return null;
}
break;
}
} else {
if((phase < (3000))){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(win_x,win_y,win_w,win_h);

var n__5616__auto___51943 = (3);
var i_51944 = (0);
while(true){
if((i_51944 < n__5616__auto___51943)){
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_51944,(2)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((win_x + (i_51944 * (win_w / (3)))),(win_y - (10)),(win_w / (3)),(10));

var G__51945 = (i_51944 + (1));
i_51944 = G__51945;
continue;
} else {
}
break;
}

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___51946 = (4);
var i_51947 = (0);
while(true){
if((i_51947 < n__5616__auto___51946)){
ctx.fillRect((win_x + (10)),((win_y + (15)) + (i_51947 * (15))),(50),(8));

var G__51948 = (i_51947 + (1));
i_51947 = G__51948;
continue;
} else {
}
break;
}

var pulse = Math.sin((t * 0.01));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.globalAlpha = (0.2 + (0.1 * pulse)));

ctx.fillRect(win_x,win_y,win_w,win_h);

(ctx.globalAlpha = 1.0);

(ctx.font = "bold 14px sans-serif");

(ctx.fillStyle = "#fff");

(ctx.textAlign = "center");

return ctx.fillText("COPY",cx,cy);
} else {
if((phase < (3500))){
var progress = ((phase - (3000)) / (500));
var scale = ((1) - progress);
ctx.save();

ctx.translate(cx,cy);

ctx.scale(scale,scale);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((- (win_w / (2))),(- (win_h / (2))),win_w,win_h);

return ctx.restore();
} else {
var progress = ((phase - (3500)) / (500));
var alpha = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = progress;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var font_size = (14);
var line_h = (18);
var start_x = (cx - (50));
var start_y = (cy - (10));
var draw_tokens = (function (y,tokens){
var toks = tokens;
var cur_x = start_x;
while(true){
if(cljs.core.seq(toks)){
var vec__51922 = cljs.core.first(toks);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51922,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51922,(1),null);
(ctx.fillStyle = color);

ctx.fillText(text,cur_x,y);

var G__51959 = cljs.core.rest(toks);
var G__51960 = (cur_x + ctx.measureText(text).width);
toks = G__51959;
cur_x = G__51960;
continue;
} else {
return null;
}
break;
}
});
(ctx.globalAlpha = alpha);

(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px monospace"].join(''));

(ctx.textAlign = "left");

(ctx.textBaseline = "middle");

draw_tokens(start_y,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[{",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":n",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"A\"",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":v",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));

draw_tokens((start_y + line_h),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" {",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":n",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\"B\"",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":v",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}]",new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));

return (ctx.globalAlpha = 1.0);

}
}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.fast_io.js.map
