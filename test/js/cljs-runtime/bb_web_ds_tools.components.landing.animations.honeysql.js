goog.provide('bb_web_ds_tools.components.landing.animations.honeysql');
bb_web_ds_tools.components.landing.animations.honeysql.draw_honeysql = (function bb_web_ds_tools$components$landing$animations$honeysql$draw_honeysql(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (6000);
var phase = cljs.core.mod(t,cycle);
var orbit_r = (60);
var angle = (t * 0.001);
var sql_lines = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT *","FROM users","WHERE id > 10"], null);
var font_size = (24);
var text_align = "center";
var text_baseline = "middle";
(ctx.font = ["bold ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px sans-serif"].join(''));

(ctx.textAlign = text_align);

(ctx.textBaseline = text_baseline);

if((phase < (3000))){
var alpha = (((phase > (2500)))?(1.0 - ((phase - (2500)) / (500))):1.0);
(ctx.globalAlpha = alpha);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText("{}",cx,cy);

var seq__52210_52234 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));
var chunk__52211_52235 = null;
var count__52212_52236 = (0);
var i__52213_52237 = (0);
while(true){
if((i__52213_52237 < count__52212_52236)){
var vec__52220_52242 = chunk__52211_52235.cljs$core$IIndexed$_nth$arity$2(null,i__52213_52237);
var i_52243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52220_52242,(0),null);
var text_52244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52220_52242,(1),null);
var color_52245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52220_52242,(2),null);
var theta_52246 = (angle + (i_52243 * ((Math.PI * (2)) / (3))));
var x_52247 = (cx + (orbit_r * Math.cos(theta_52246)));
var y_52248 = (cy + (orbit_r * Math.sin(theta_52246)));
(ctx.fillStyle = color_52245);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52244,x_52247,y_52248);


var G__52254 = seq__52210_52234;
var G__52257 = chunk__52211_52235;
var G__52259 = count__52212_52236;
var G__52260 = (i__52213_52237 + (1));
seq__52210_52234 = G__52254;
chunk__52211_52235 = G__52257;
count__52212_52236 = G__52259;
i__52213_52237 = G__52260;
continue;
} else {
var temp__5825__auto___52261 = cljs.core.seq(seq__52210_52234);
if(temp__5825__auto___52261){
var seq__52210_52262__$1 = temp__5825__auto___52261;
if(cljs.core.chunked_seq_QMARK_(seq__52210_52262__$1)){
var c__5548__auto___52263 = cljs.core.chunk_first(seq__52210_52262__$1);
var G__52264 = cljs.core.chunk_rest(seq__52210_52262__$1);
var G__52265 = c__5548__auto___52263;
var G__52266 = cljs.core.count(c__5548__auto___52263);
var G__52267 = (0);
seq__52210_52234 = G__52264;
chunk__52211_52235 = G__52265;
count__52212_52236 = G__52266;
i__52213_52237 = G__52267;
continue;
} else {
var vec__52225_52268 = cljs.core.first(seq__52210_52262__$1);
var i_52269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225_52268,(0),null);
var text_52270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225_52268,(1),null);
var color_52271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225_52268,(2),null);
var theta_52273 = (angle + (i_52269 * ((Math.PI * (2)) / (3))));
var x_52274 = (cx + (orbit_r * Math.cos(theta_52273)));
var y_52275 = (cy + (orbit_r * Math.sin(theta_52273)));
(ctx.fillStyle = color_52271);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52270,x_52274,y_52275);


var G__52276 = cljs.core.next(seq__52210_52262__$1);
var G__52277 = null;
var G__52278 = (0);
var G__52279 = (0);
seq__52210_52234 = G__52276;
chunk__52211_52235 = G__52277;
count__52212_52236 = G__52278;
i__52213_52237 = G__52279;
continue;
}
} else {
}
}
break;
}

return (ctx.globalAlpha = 1.0);
} else {
var progress = ((phase - (3000)) / (1000));
var alpha = (function (){var x__5113__auto__ = 1.0;
var y__5114__auto__ = progress;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
var start_x = (cx - (80));
var start_y = (cy - (20));
var line_h = (24);
(ctx.globalAlpha = alpha);

(ctx.font = "16px monospace");

(ctx.textAlign = "left");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

var n__5616__auto___52280 = cljs.core.count(sql_lines);
var i_52281 = (0);
while(true){
if((i_52281 < n__5616__auto___52280)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_52281),start_x,(start_y + (i_52281 * line_h)));

var G__52282 = (i_52281 + (1));
i_52281 = G__52282;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);

}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.honeysql.js.map
