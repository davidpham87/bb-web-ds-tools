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

var seq__52827_52843 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));
var chunk__52828_52844 = null;
var count__52829_52845 = (0);
var i__52830_52846 = (0);
while(true){
if((i__52830_52846 < count__52829_52845)){
var vec__52837_52847 = chunk__52828_52844.cljs$core$IIndexed$_nth$arity$2(null,i__52830_52846);
var i_52848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837_52847,(0),null);
var text_52849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837_52847,(1),null);
var color_52850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837_52847,(2),null);
var theta_52851 = (angle + (i_52848 * ((Math.PI * (2)) / (3))));
var x_52852 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_52851)));
var y_52853 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_52851)));
(ctx.fillStyle = color_52850);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52849,x_52852,y_52853);


var G__52854 = seq__52827_52843;
var G__52855 = chunk__52828_52844;
var G__52856 = count__52829_52845;
var G__52857 = (i__52830_52846 + (1));
seq__52827_52843 = G__52854;
chunk__52828_52844 = G__52855;
count__52829_52845 = G__52856;
i__52830_52846 = G__52857;
continue;
} else {
var temp__5825__auto___52858 = cljs.core.seq(seq__52827_52843);
if(temp__5825__auto___52858){
var seq__52827_52859__$1 = temp__5825__auto___52858;
if(cljs.core.chunked_seq_QMARK_(seq__52827_52859__$1)){
var c__5548__auto___52860 = cljs.core.chunk_first(seq__52827_52859__$1);
var G__52861 = cljs.core.chunk_rest(seq__52827_52859__$1);
var G__52862 = c__5548__auto___52860;
var G__52863 = cljs.core.count(c__5548__auto___52860);
var G__52864 = (0);
seq__52827_52843 = G__52861;
chunk__52828_52844 = G__52862;
count__52829_52845 = G__52863;
i__52830_52846 = G__52864;
continue;
} else {
var vec__52840_52865 = cljs.core.first(seq__52827_52859__$1);
var i_52866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52840_52865,(0),null);
var text_52867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52840_52865,(1),null);
var color_52868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52840_52865,(2),null);
var theta_52869 = (angle + (i_52866 * ((Math.PI * (2)) / (3))));
var x_52870 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_52869)));
var y_52871 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_52869)));
(ctx.fillStyle = color_52868);

(ctx.font = "14px sans-serif");

ctx.fillText(text_52867,x_52870,y_52871);


var G__52872 = cljs.core.next(seq__52827_52859__$1);
var G__52873 = null;
var G__52874 = (0);
var G__52875 = (0);
seq__52827_52843 = G__52872;
chunk__52828_52844 = G__52873;
count__52829_52845 = G__52874;
i__52830_52846 = G__52875;
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

var n__5616__auto___52876 = cljs.core.count(sql_lines);
var i_52877 = (0);
while(true){
if((i_52877 < n__5616__auto___52876)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_52877),start_x,(start_y + (i_52877 * line_h)));

var G__52878 = (i_52877 + (1));
i_52877 = G__52878;
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
