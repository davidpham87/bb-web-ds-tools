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

var n__5616__auto___51420 = (20);
var i_51421 = (0);
while(true){
if((i_51421 < n__5616__auto___51420)){
var seed_51422 = (t + (i_51421 * 0.1));
var scale_51423 = ((100) + ((50) * Math.sin(seed_51422)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__51360 = cljs.core.mod(i_51421,(4));
switch (G__51360) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51360)].join('')));

}
})());

var n__5616__auto___51428__$1 = (100);
var j_51429 = (0);
while(true){
if((j_51429 < n__5616__auto___51428__$1)){
var angle_51430 = ((j_51429 * 0.1) + seed_51422);
var r_51431 = (scale_51423 + ((scale_51423 * 0.5) * Math.cos((angle_51430 * (3)))));
var x_51432 = ((width / (2)) + (r_51431 * Math.cos(angle_51430)));
var y_51433 = ((height / (2)) + (r_51431 * Math.sin(angle_51430)));
if((j_51429 === (0))){
ctx.moveTo(x_51432,y_51433);
} else {
ctx.lineTo(x_51432,y_51433);
}

var G__51435 = (j_51429 + (1));
j_51429 = G__51435;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__51437 = (i_51421 + (1));
i_51421 = G__51437;
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
var wave_t_51438 = (t + (i * 1.5));
var y_offset_51439 = ((height / (2)) + ((200) * Math.sin(wave_t_51438)));
(ctx.fillStyle = (function (){var G__51367 = cljs.core.mod(i,(3));
switch (G__51367) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51367)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__51368_51441 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__51369_51442 = null;
var count__51370_51443 = (0);
var i__51371_51444 = (0);
while(true){
if((i__51371_51444 < count__51370_51443)){
var x_51445 = chunk__51369_51442.cljs$core$IIndexed$_nth$arity$2(null,i__51371_51444);
var y_51449 = (y_offset_51439 + ((100) * Math.sin((wave_t_51438 + (x_51445 * 0.005)))));
ctx.lineTo(x_51445,y_51449);


var G__51450 = seq__51368_51441;
var G__51451 = chunk__51369_51442;
var G__51452 = count__51370_51443;
var G__51453 = (i__51371_51444 + (1));
seq__51368_51441 = G__51450;
chunk__51369_51442 = G__51451;
count__51370_51443 = G__51452;
i__51371_51444 = G__51453;
continue;
} else {
var temp__5825__auto___51454 = cljs.core.seq(seq__51368_51441);
if(temp__5825__auto___51454){
var seq__51368_51455__$1 = temp__5825__auto___51454;
if(cljs.core.chunked_seq_QMARK_(seq__51368_51455__$1)){
var c__5548__auto___51456 = cljs.core.chunk_first(seq__51368_51455__$1);
var G__51457 = cljs.core.chunk_rest(seq__51368_51455__$1);
var G__51458 = c__5548__auto___51456;
var G__51459 = cljs.core.count(c__5548__auto___51456);
var G__51460 = (0);
seq__51368_51441 = G__51457;
chunk__51369_51442 = G__51458;
count__51370_51443 = G__51459;
i__51371_51444 = G__51460;
continue;
} else {
var x_51461 = cljs.core.first(seq__51368_51455__$1);
var y_51462 = (y_offset_51439 + ((100) * Math.sin((wave_t_51438 + (x_51461 * 0.005)))));
ctx.lineTo(x_51461,y_51462);


var G__51463 = cljs.core.next(seq__51368_51455__$1);
var G__51464 = null;
var G__51465 = (0);
var G__51466 = (0);
seq__51368_51441 = G__51463;
chunk__51369_51442 = G__51464;
count__51370_51443 = G__51465;
i__51371_51444 = G__51466;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__51467 = (i + (1));
i = G__51467;
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
var map__51400 = cljs.core.deref(dimensions);
var map__51400__$1 = cljs.core.__destructure_map(map__51400);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51400__$1,new cljs.core.Keyword(null,"height","height",1025178622));
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
var temp__5825__auto___51468 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___51468)){
var id_51472 = temp__5825__auto___51468;
cancelAnimationFrame(id_51472);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__51393_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__51393_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.background.js.map
