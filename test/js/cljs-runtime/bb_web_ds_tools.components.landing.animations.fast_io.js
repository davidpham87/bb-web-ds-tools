goog.provide('bb_web_ds_tools.components.landing.animations.fast_io');
bb_web_ds_tools.components.landing.animations.fast_io.win_w = (200);
bb_web_ds_tools.components.landing.animations.fast_io.win_h = (140);
bb_web_ds_tools.components.landing.animations.fast_io.draw_browsing_sources = (function bb_web_ds_tools$components$landing$animations$fast_io$draw_browsing_sources(ctx,_w,_h,_t,phase,win_x,win_y){
var active_tab = (cljs.core.mod((phase / (600)),(3)) | (0));
var tab_w = (bb_web_ds_tools.components.landing.animations.fast_io.win_w / (3));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(win_x,win_y,bb_web_ds_tools.components.landing.animations.fast_io.win_w,bb_web_ds_tools.components.landing.animations.fast_io.win_h);

var n__5616__auto___52784 = (3);
var i_52785 = (0);
while(true){
if((i_52785 < n__5616__auto___52784)){
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_52785,active_tab))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((win_x + (i_52785 * tab_w)),(win_y - (10)),tab_w,(10));

var G__52786 = (i_52785 + (1));
i_52785 = G__52786;
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
var len_52787 = ((20) + cljs.core.mod(((i + active_tab) * (37)),(60)));
ctx.fillRect((win_x + (10)),((win_y + (15)) + (i * (15))),len_52787,(8));

var G__52788 = (i + (1));
i = G__52788;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.fast_io.draw_selection_copy = (function bb_web_ds_tools$components$landing$animations$fast_io$draw_selection_copy(ctx,_w,_h,t,_phase,cx,cy,win_x,win_y){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect(win_x,win_y,bb_web_ds_tools.components.landing.animations.fast_io.win_w,bb_web_ds_tools.components.landing.animations.fast_io.win_h);

var n__5616__auto___52789 = (3);
var i_52790 = (0);
while(true){
if((i_52790 < n__5616__auto___52789)){
(ctx.fillStyle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_52790,(2)))?new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn):new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)));

ctx.fillRect((win_x + (i_52790 * (bb_web_ds_tools.components.landing.animations.fast_io.win_w / (3)))),(win_y - (10)),(bb_web_ds_tools.components.landing.animations.fast_io.win_w / (3)),(10));

var G__52791 = (i_52790 + (1));
i_52790 = G__52791;
continue;
} else {
}
break;
}

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___52792 = (4);
var i_52793 = (0);
while(true){
if((i_52793 < n__5616__auto___52792)){
ctx.fillRect((win_x + (10)),((win_y + (15)) + (i_52793 * (15))),(50),(8));

var G__52794 = (i_52793 + (1));
i_52793 = G__52794;
continue;
} else {
}
break;
}

var pulse = Math.sin((t * 0.01));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.globalAlpha = (0.2 + (0.1 * pulse)));

ctx.fillRect(win_x,win_y,bb_web_ds_tools.components.landing.animations.fast_io.win_w,bb_web_ds_tools.components.landing.animations.fast_io.win_h);

(ctx.globalAlpha = 1.0);

(ctx.font = "bold 14px sans-serif");

(ctx.fillStyle = "#fff");

(ctx.textAlign = "center");

return ctx.fillText("COPY",cx,cy);
});
bb_web_ds_tools.components.landing.animations.fast_io.draw_transition_paste = (function bb_web_ds_tools$components$landing$animations$fast_io$draw_transition_paste(ctx,_w,_h,_t,phase,cx,cy){
var progress = ((phase - (3000)) / (500));
var scale = ((1) - progress);
ctx.save();

ctx.translate(cx,cy);

ctx.scale(scale,scale);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillRect((- (bb_web_ds_tools.components.landing.animations.fast_io.win_w / (2))),(- (bb_web_ds_tools.components.landing.animations.fast_io.win_h / (2))),bb_web_ds_tools.components.landing.animations.fast_io.win_w,bb_web_ds_tools.components.landing.animations.fast_io.win_h);

return ctx.restore();
});
bb_web_ds_tools.components.landing.animations.fast_io.draw_result = (function bb_web_ds_tools$components$landing$animations$fast_io$draw_result(ctx,_w,_h,_t,phase,cx,cy){
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
var vec__52777 = cljs.core.first(toks);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52777,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52777,(1),null);
(ctx.fillStyle = color);

ctx.fillText(text,cur_x,y);

var G__52795 = cljs.core.rest(toks);
var G__52796 = (cur_x + ctx.measureText(text).width);
toks = G__52795;
cur_x = G__52796;
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
});
bb_web_ds_tools.components.landing.animations.fast_io.draw_fast_io = (function bb_web_ds_tools$components$landing$animations$fast_io$draw_fast_io(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (6000);
var phase = cljs.core.mod(t,cycle);
var win_x = (cx - (bb_web_ds_tools.components.landing.animations.fast_io.win_w / (2)));
var win_y = (cy - (bb_web_ds_tools.components.landing.animations.fast_io.win_h / (2)));
if((phase < (2000))){
return bb_web_ds_tools.components.landing.animations.fast_io.draw_browsing_sources(ctx,w,h,t,phase,win_x,win_y);
} else {
if((phase < (3000))){
return bb_web_ds_tools.components.landing.animations.fast_io.draw_selection_copy(ctx,w,h,t,phase,cx,cy,win_x,win_y);
} else {
if((phase < (3500))){
return bb_web_ds_tools.components.landing.animations.fast_io.draw_transition_paste(ctx,w,h,t,phase,cx,cy);
} else {
return bb_web_ds_tools.components.landing.animations.fast_io.draw_result(ctx,w,h,t,phase,cx,cy);

}
}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.fast_io.js.map
