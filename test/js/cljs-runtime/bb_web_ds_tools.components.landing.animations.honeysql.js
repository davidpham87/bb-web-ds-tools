goog.provide('bb_web_ds_tools.components.landing.animations.honeysql');
bb_web_ds_tools.components.landing.animations.honeysql.orbit_r = (60);
bb_web_ds_tools.components.landing.animations.honeysql.font_size = (24);
bb_web_ds_tools.components.landing.animations.honeysql.setup_font = (function bb_web_ds_tools$components$landing$animations$honeysql$setup_font(ctx){
(ctx.font = ["bold ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.honeysql.font_size),"px sans-serif"].join(''));

(ctx.textAlign = "center");

return (ctx.textBaseline = "middle");
});
bb_web_ds_tools.components.landing.animations.honeysql.draw_orbiting = (function bb_web_ds_tools$components$landing$animations$honeysql$draw_orbiting(ctx,_w,_h,t,phase,cx,cy){
var alpha = (((phase > (2500)))?(1.0 - ((phase - (2500)) / (500))):1.0);
var angle = (t * 0.001);
(ctx.globalAlpha = alpha);

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

ctx.fillText("{}",cx,cy);

var seq__52833_52850 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));
var chunk__52834_52851 = null;
var count__52835_52852 = (0);
var i__52836_52853 = (0);
while(true){
if((i__52836_52853 < count__52835_52852)){
var vec__52843_52854 = chunk__52834_52851.cljs$core$IIndexed$_nth$arity$2(null,i__52836_52853);
var i_52855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52843_52854,(0),null);
var text_52856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52843_52854,(1),null);
var color_52857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52843_52854,(2),null);
var theta_52858 = (angle + (i_52855 * ((Math.PI * (2)) / (3))));
var x_52859 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_52858)));
var y_52860 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_52858)));
(ctx.fillStyle = color_52857);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52856,x_52859,y_52860);


var G__52861 = seq__52833_52850;
var G__52862 = chunk__52834_52851;
var G__52863 = count__52835_52852;
var G__52864 = (i__52836_52853 + (1));
seq__52833_52850 = G__52861;
chunk__52834_52851 = G__52862;
count__52835_52852 = G__52863;
i__52836_52853 = G__52864;
continue;
} else {
var temp__5825__auto___52865 = cljs.core.seq(seq__52833_52850);
if(temp__5825__auto___52865){
var seq__52833_52866__$1 = temp__5825__auto___52865;
if(cljs.core.chunked_seq_QMARK_(seq__52833_52866__$1)){
var c__5548__auto___52867 = cljs.core.chunk_first(seq__52833_52866__$1);
var G__52868 = cljs.core.chunk_rest(seq__52833_52866__$1);
var G__52869 = c__5548__auto___52867;
var G__52870 = cljs.core.count(c__5548__auto___52867);
var G__52871 = (0);
seq__52833_52850 = G__52868;
chunk__52834_52851 = G__52869;
count__52835_52852 = G__52870;
i__52836_52853 = G__52871;
continue;
} else {
var vec__52846_52872 = cljs.core.first(seq__52833_52866__$1);
var i_52873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52846_52872,(0),null);
var text_52874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52846_52872,(1),null);
var color_52875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52846_52872,(2),null);
var theta_52876 = (angle + (i_52873 * ((Math.PI * (2)) / (3))));
var x_52877 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_52876)));
var y_52878 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_52876)));
(ctx.fillStyle = color_52875);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52874,x_52877,y_52878);


var G__52879 = cljs.core.next(seq__52833_52866__$1);
var G__52880 = null;
var G__52881 = (0);
var G__52882 = (0);
seq__52833_52850 = G__52879;
chunk__52834_52851 = G__52880;
count__52835_52852 = G__52881;
i__52836_52853 = G__52882;
continue;
}
} else {
}
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.honeysql.draw_sql_query = (function bb_web_ds_tools$components$landing$animations$honeysql$draw_sql_query(ctx,_w,_h,_t,phase,cx,cy){
var sql_lines = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SELECT *","FROM users","WHERE id > 10"], null);
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

var n__5616__auto___52883 = cljs.core.count(sql_lines);
var i_52884 = (0);
while(true){
if((i_52884 < n__5616__auto___52883)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_52884),start_x,(start_y + (i_52884 * line_h)));

var G__52885 = (i_52884 + (1));
i_52884 = G__52885;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
});
bb_web_ds_tools.components.landing.animations.honeysql.draw_honeysql = (function bb_web_ds_tools$components$landing$animations$honeysql$draw_honeysql(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cx = (w / (2));
var cy = (h / (2));
var cycle = (6000);
var phase = cljs.core.mod(t,cycle);
bb_web_ds_tools.components.landing.animations.honeysql.setup_font(ctx);

if((phase < (3000))){
return bb_web_ds_tools.components.landing.animations.honeysql.draw_orbiting(ctx,w,h,t,phase,cx,cy);
} else {
return bb_web_ds_tools.components.landing.animations.honeysql.draw_sql_query(ctx,w,h,t,phase,cx,cy);

}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.honeysql.js.map
