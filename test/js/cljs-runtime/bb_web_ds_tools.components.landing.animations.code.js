goog.provide('bb_web_ds_tools.components.landing.animations.code');
bb_web_ds_tools.components.landing.animations.code.zenburn = bb_web_ds_tools.utils.themes.get_theme(new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
bb_web_ds_tools.components.landing.animations.code.code_lines = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(partition 2 1"," (range 4))"], null);
bb_web_ds_tools.components.landing.animations.code.result_lines = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((0 1) (1 2)"," (2 3))"], null);
bb_web_ds_tools.components.landing.animations.code.font_size = (14);
bb_web_ds_tools.components.landing.animations.code.line_h = (20);
bb_web_ds_tools.components.landing.animations.code.type_duration = (2000);
bb_web_ds_tools.components.landing.animations.code.highlight_duration = (1500);
bb_web_ds_tools.components.landing.animations.code.exec_duration = (1000);
bb_web_ds_tools.components.landing.animations.code.setup_font = (function bb_web_ds_tools$components$landing$animations$code$setup_font(ctx){
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.font_size),"px monospace"].join(''));

(ctx.textAlign = "left");

return (ctx.textBaseline = "middle");
});
bb_web_ds_tools.components.landing.animations.code.draw_text = (function bb_web_ds_tools$components$landing$animations$code$draw_text(ctx,lines,start_x,start_y){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

var n__5616__auto__ = cljs.core.count(lines);
var i = (0);
while(true){
if((i < n__5616__auto__)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,i),start_x,(start_y + (i * bb_web_ds_tools.components.landing.animations.code.line_h)));

var G__52741 = (i + (1));
i = G__52741;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.code.draw_typing = (function bb_web_ds_tools$components$landing$animations$code$draw_typing(ctx,_w,_h,_t,phase,start_x,start_y){
var progress = (phase / bb_web_ds_tools.components.landing.animations.code.type_duration);
var total_chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,bb_web_ds_tools.components.landing.animations.code.code_lines));
var chars_to_show = Math.floor((progress * total_chars));
var lines = bb_web_ds_tools.components.landing.animations.code.code_lines;
var line_idx = (0);
var chars_left = chars_to_show;
while(true){
if(((cljs.core.seq(lines)) && ((chars_left > (0))))){
var line = cljs.core.first(lines);
var len = cljs.core.count(line);
var show_len = (function (){var x__5113__auto__ = len;
var y__5114__auto__ = chars_left;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var y = (start_y + (line_idx * bb_web_ds_tools.components.landing.animations.code.line_h));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line,(0),show_len),start_x,y);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_len,chars_left)) && ((chars_left > (0))))){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","cursor","portal.colors/cursor",1548854822).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

ctx.fillRect((start_x + (show_len * 8.5)),(y - (8)),(2),(16));
} else {
}

var G__52744 = cljs.core.rest(lines);
var G__52745 = (line_idx + (1));
var G__52746 = (chars_left - show_len);
lines = G__52744;
line_idx = G__52745;
chars_left = G__52746;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.code.draw_highlight = (function bb_web_ds_tools$components$landing$animations$code$draw_highlight(ctx,_w,_h,_t,_phase,start_x,start_y){
(ctx.fillStyle = "rgba(255, 255, 255, 0.2)");

var n__5616__auto___52747 = cljs.core.count(bb_web_ds_tools.components.landing.animations.code.code_lines);
var i_52748 = (0);
while(true){
if((i_52748 < n__5616__auto___52747)){
ctx.fillRect((start_x - (2)),((start_y + (i_52748 * bb_web_ds_tools.components.landing.animations.code.line_h)) - (10)),(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.code.code_lines,i_52748)) * 8.5),(20));

var G__52749 = (i_52748 + (1));
i_52748 = G__52749;
continue;
} else {
}
break;
}

return bb_web_ds_tools.components.landing.animations.code.draw_text(ctx,bb_web_ds_tools.components.landing.animations.code.code_lines,start_x,start_y);
});
bb_web_ds_tools.components.landing.animations.code.draw_execute_cue = (function bb_web_ds_tools$components$landing$animations$code$draw_execute_cue(ctx,_w,_h,_t,phase,start_x,start_y){
bb_web_ds_tools.components.landing.animations.code.draw_text(ctx,bb_web_ds_tools.components.landing.animations.code.code_lines,start_x,start_y);

var local_t = ((phase - bb_web_ds_tools.components.landing.animations.code.type_duration) - bb_web_ds_tools.components.landing.animations.code.highlight_duration);
var hint_alpha = Math.sin((local_t * 0.005));
var is_mac = cljs.core.re_find(/mac/i,(function (){var or__5025__auto__ = navigator.platform;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var key_text = (cljs.core.truth_(is_mac)?"Cmd+Enter":"Ctrl+Enter");
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

(ctx.globalAlpha = hint_alpha);

(ctx.font = "bold 12px sans-serif");

ctx.fillText(key_text,(start_x + (80)),((start_y + (cljs.core.count(bb_web_ds_tools.components.landing.animations.code.code_lines) * bb_web_ds_tools.components.landing.animations.code.line_h)) + (10)));

(ctx.globalAlpha = 1.0);

return (ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.font_size),"px monospace"].join(''));
});
bb_web_ds_tools.components.landing.animations.code.draw_result = (function bb_web_ds_tools$components$landing$animations$code$draw_result(ctx,_w,_h,_t,_phase,start_x,start_y){
bb_web_ds_tools.components.landing.animations.code.draw_text(ctx,bb_web_ds_tools.components.landing.animations.code.code_lines,start_x,start_y);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

var n__5616__auto__ = cljs.core.count(bb_web_ds_tools.components.landing.animations.code.result_lines);
var i = (0);
while(true){
if((i < n__5616__auto__)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.landing.animations.code.result_lines,i),start_x,(start_y + (((cljs.core.count(bb_web_ds_tools.components.landing.animations.code.code_lines) + (1)) + i) * bb_web_ds_tools.components.landing.animations.code.line_h)));

var G__52751 = (i + (1));
i = G__52751;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.animations.code.draw_code = (function bb_web_ds_tools$components$landing$animations$code$draw_code(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
var start_x = ((w / (2)) - (60));
var start_y = ((h / (2)) - (40));
bb_web_ds_tools.components.landing.animations.code.setup_font(ctx);

if((phase < bb_web_ds_tools.components.landing.animations.code.type_duration)){
return bb_web_ds_tools.components.landing.animations.code.draw_typing(ctx,w,h,t,phase,start_x,start_y);
} else {
if((phase < (bb_web_ds_tools.components.landing.animations.code.type_duration + bb_web_ds_tools.components.landing.animations.code.highlight_duration))){
return bb_web_ds_tools.components.landing.animations.code.draw_highlight(ctx,w,h,t,phase,start_x,start_y);
} else {
if((phase < ((bb_web_ds_tools.components.landing.animations.code.type_duration + bb_web_ds_tools.components.landing.animations.code.highlight_duration) + bb_web_ds_tools.components.landing.animations.code.exec_duration))){
return bb_web_ds_tools.components.landing.animations.code.draw_execute_cue(ctx,w,h,t,phase,start_x,start_y);
} else {
return bb_web_ds_tools.components.landing.animations.code.draw_result(ctx,w,h,t,phase,start_x,start_y);

}
}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.code.js.map
