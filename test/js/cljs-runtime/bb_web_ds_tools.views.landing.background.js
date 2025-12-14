goog.provide('bb_web_ds_tools.views.landing.background');
/**
 * Updates the color state based on CSS variables.
 */
bb_web_ds_tools.views.landing.background.update_background_colors = (function bb_web_ds_tools$views$landing$background$update_background_colors(colors){
var style = getComputedStyle(document.body);
var get_color = (function (k){
var v = style.getPropertyValue(k);
if(cljs.core.empty_QMARK_(v)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(colors),k);
} else {
return clojure.string.trim(v);
}
});
return cljs.core.reset_BANG_(colors,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c1","c1",1132530803),get_color("--text-accent"),new cljs.core.Keyword(null,"c2","c2",-1561880371),get_color("--text-secondary"),new cljs.core.Keyword(null,"c3","c3",-1171815738),get_color("--bg-button-primary"),new cljs.core.Keyword(null,"c4","c4",1028045610),get_color("--text-danger")], null));
});
/**
 * Draws the animated background pattern on the canvas.
 */
bb_web_ds_tools.views.landing.background.draw_background_pattern = (function bb_web_ds_tools$views$landing$background$draw_background_pattern(ctx,width,height,t,cols){
ctx.clearRect((0),(0),width,height);

(ctx.lineWidth = (2));

(ctx.globalAlpha = 0.15);

var n__5616__auto___51437 = (20);
var i_51438 = (0);
while(true){
if((i_51438 < n__5616__auto___51437)){
var seed_51439 = (t + (i_51438 * 0.1));
var scale_51440 = ((100) + ((50) * Math.sin(seed_51439)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__51420 = cljs.core.mod(i_51438,(4));
switch (G__51420) {
case (0):
return new cljs.core.Keyword(null,"c1","c1",1132530803).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (1):
return new cljs.core.Keyword(null,"c2","c2",-1561880371).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (2):
return new cljs.core.Keyword(null,"c3","c3",-1171815738).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (3):
return new cljs.core.Keyword(null,"c4","c4",1028045610).cljs$core$IFn$_invoke$arity$1(cols);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51420)].join('')));

}
})());

var n__5616__auto___51442__$1 = (100);
var j_51443 = (0);
while(true){
if((j_51443 < n__5616__auto___51442__$1)){
var angle_51444 = ((j_51443 * 0.1) + seed_51439);
var r_51445 = (scale_51440 + ((scale_51440 * 0.5) * Math.cos((angle_51444 * (3)))));
var x_51446 = ((width / (2)) + (r_51445 * Math.cos(angle_51444)));
var y_51447 = ((height / (2)) + (r_51445 * Math.sin(angle_51444)));
if((j_51443 === (0))){
ctx.moveTo(x_51446,y_51447);
} else {
ctx.lineTo(x_51446,y_51447);
}

var G__51448 = (j_51443 + (1));
j_51443 = G__51448;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__51449 = (i_51438 + (1));
i_51438 = G__51449;
continue;
} else {
}
break;
}

(ctx.globalAlpha = 0.05);

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var wave_t_51450 = (t + (i * 1.5));
var y_offset_51451 = ((height / (2)) + ((200) * Math.sin(wave_t_51450)));
(ctx.fillStyle = (function (){var G__51421 = cljs.core.mod(i,(3));
switch (G__51421) {
case (0):
return new cljs.core.Keyword(null,"c1","c1",1132530803).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (1):
return new cljs.core.Keyword(null,"c2","c2",-1561880371).cljs$core$IFn$_invoke$arity$1(cols);

break;
case (2):
return new cljs.core.Keyword(null,"c3","c3",-1171815738).cljs$core$IFn$_invoke$arity$1(cols);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51421)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__51422_51456 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__51423_51457 = null;
var count__51424_51458 = (0);
var i__51425_51459 = (0);
while(true){
if((i__51425_51459 < count__51424_51458)){
var x_51460 = chunk__51423_51457.cljs$core$IIndexed$_nth$arity$2(null,i__51425_51459);
var y_51461 = (y_offset_51451 + ((100) * Math.sin((wave_t_51450 + (x_51460 * 0.005)))));
ctx.lineTo(x_51460,y_51461);


var G__51462 = seq__51422_51456;
var G__51463 = chunk__51423_51457;
var G__51464 = count__51424_51458;
var G__51465 = (i__51425_51459 + (1));
seq__51422_51456 = G__51462;
chunk__51423_51457 = G__51463;
count__51424_51458 = G__51464;
i__51425_51459 = G__51465;
continue;
} else {
var temp__5825__auto___51466 = cljs.core.seq(seq__51422_51456);
if(temp__5825__auto___51466){
var seq__51422_51467__$1 = temp__5825__auto___51466;
if(cljs.core.chunked_seq_QMARK_(seq__51422_51467__$1)){
var c__5548__auto___51468 = cljs.core.chunk_first(seq__51422_51467__$1);
var G__51469 = cljs.core.chunk_rest(seq__51422_51467__$1);
var G__51470 = c__5548__auto___51468;
var G__51471 = cljs.core.count(c__5548__auto___51468);
var G__51472 = (0);
seq__51422_51456 = G__51469;
chunk__51423_51457 = G__51470;
count__51424_51458 = G__51471;
i__51425_51459 = G__51472;
continue;
} else {
var x_51473 = cljs.core.first(seq__51422_51467__$1);
var y_51474 = (y_offset_51451 + ((100) * Math.sin((wave_t_51450 + (x_51473 * 0.005)))));
ctx.lineTo(x_51473,y_51474);


var G__51476 = cljs.core.next(seq__51422_51467__$1);
var G__51477 = null;
var G__51478 = (0);
var G__51479 = (0);
seq__51422_51456 = G__51476;
chunk__51423_51457 = G__51477;
count__51424_51458 = G__51478;
i__51425_51459 = G__51479;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__51483 = (i + (1));
i = G__51483;
continue;
} else {
return null;
}
break;
}
});
/**
 * Renders an animated background canvas.
 */
bb_web_ds_tools.views.landing.background.background_canvas = (function bb_web_ds_tools$views$landing$background$background_canvas(){
var canvas_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animation_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var resize_observer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var dimensions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null));
var colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c1","c1",1132530803),"#8cd0d3",new cljs.core.Keyword(null,"c2","c2",-1561880371),"#dfaf8f",new cljs.core.Keyword(null,"c3","c3",-1171815738),"#9fc59f",new cljs.core.Keyword(null,"c4","c4",1028045610),"#cc9393"], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"background-canvas",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__5825__auto__ = cljs.core.deref(canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var ctx = canvas.getContext("2d");
var update_size = (function (){
var w = window.innerWidth;
var h = window.innerHeight;
cljs.core.reset_BANG_(dimensions,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null));

(canvas.width = w);

return (canvas.height = h);
});
var observer = (new ResizeObserver((function (_){
return update_size();
})));
observer.observe(document.body);

cljs.core.reset_BANG_(resize_observer,observer);

update_size();

bb_web_ds_tools.views.landing.background.update_background_colors(colors);

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$views$landing$background$background_canvas_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__51433 = cljs.core.deref(dimensions);
var map__51433__$1 = cljs.core.__destructure_map(map__51433);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51433__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51433__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var t = (elapsed * 2.0E-4);
var cols = cljs.core.deref(colors);
if((((width > (0))) && ((height > (0))))){
bb_web_ds_tools.views.landing.background.draw_background_pattern(ctx,width,height,t,cols);
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$views$landing$background$background_canvas_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___51493 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___51493)){
var id_51494 = temp__5825__auto___51493;
cancelAnimationFrame(id_51494);
} else {
}

var temp__5825__auto__ = cljs.core.deref(resize_observer);
if(cljs.core.truth_(temp__5825__auto__)){
var obs = temp__5825__auto__;
return obs.disconnect();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__51432_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__51432_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.background.js.map
