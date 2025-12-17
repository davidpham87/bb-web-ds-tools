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

var n__5616__auto___52286 = (20);
var i_52287 = (0);
while(true){
if((i_52287 < n__5616__auto___52286)){
var seed_52288 = (t + (i_52287 * 0.1));
var scale_52289 = ((100) + ((50) * Math.sin(seed_52288)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__52259 = cljs.core.mod(i_52287,(4));
switch (G__52259) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52259)].join('')));

}
})());

var n__5616__auto___52291__$1 = (100);
var j_52292 = (0);
while(true){
if((j_52292 < n__5616__auto___52291__$1)){
var angle_52293 = ((j_52292 * 0.1) + seed_52288);
var r_52294 = (scale_52289 + ((scale_52289 * 0.5) * Math.cos((angle_52293 * (3)))));
var x_52295 = ((width / (2)) + (r_52294 * Math.cos(angle_52293)));
var y_52296 = ((height / (2)) + (r_52294 * Math.sin(angle_52293)));
if((j_52292 === (0))){
ctx.moveTo(x_52295,y_52296);
} else {
ctx.lineTo(x_52295,y_52296);
}

var G__52297 = (j_52292 + (1));
j_52292 = G__52297;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__52298 = (i_52287 + (1));
i_52287 = G__52298;
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
var wave_t_52299 = (t + (i * 1.5));
var y_offset_52300 = ((height / (2)) + ((200) * Math.sin(wave_t_52299)));
(ctx.fillStyle = (function (){var G__52260 = cljs.core.mod(i,(3));
switch (G__52260) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52260)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__52262_52302 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__52263_52303 = null;
var count__52264_52304 = (0);
var i__52265_52305 = (0);
while(true){
if((i__52265_52305 < count__52264_52304)){
var x_52307 = chunk__52263_52303.cljs$core$IIndexed$_nth$arity$2(null,i__52265_52305);
var y_52308 = (y_offset_52300 + ((100) * Math.sin((wave_t_52299 + (x_52307 * 0.005)))));
ctx.lineTo(x_52307,y_52308);


var G__52309 = seq__52262_52302;
var G__52310 = chunk__52263_52303;
var G__52311 = count__52264_52304;
var G__52313 = (i__52265_52305 + (1));
seq__52262_52302 = G__52309;
chunk__52263_52303 = G__52310;
count__52264_52304 = G__52311;
i__52265_52305 = G__52313;
continue;
} else {
var temp__5825__auto___52316 = cljs.core.seq(seq__52262_52302);
if(temp__5825__auto___52316){
var seq__52262_52317__$1 = temp__5825__auto___52316;
if(cljs.core.chunked_seq_QMARK_(seq__52262_52317__$1)){
var c__5548__auto___52318 = cljs.core.chunk_first(seq__52262_52317__$1);
var G__52319 = cljs.core.chunk_rest(seq__52262_52317__$1);
var G__52320 = c__5548__auto___52318;
var G__52321 = cljs.core.count(c__5548__auto___52318);
var G__52322 = (0);
seq__52262_52302 = G__52319;
chunk__52263_52303 = G__52320;
count__52264_52304 = G__52321;
i__52265_52305 = G__52322;
continue;
} else {
var x_52323 = cljs.core.first(seq__52262_52317__$1);
var y_52324 = (y_offset_52300 + ((100) * Math.sin((wave_t_52299 + (x_52323 * 0.005)))));
ctx.lineTo(x_52323,y_52324);


var G__52325 = cljs.core.next(seq__52262_52317__$1);
var G__52326 = null;
var G__52327 = (0);
var G__52328 = (0);
seq__52262_52302 = G__52325;
chunk__52263_52303 = G__52326;
count__52264_52304 = G__52327;
i__52265_52305 = G__52328;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__52329 = (i + (1));
i = G__52329;
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
var map__52284 = cljs.core.deref(dimensions);
var map__52284__$1 = cljs.core.__destructure_map(map__52284);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52284__$1,new cljs.core.Keyword(null,"height","height",1025178622));
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
var temp__5825__auto___52344 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___52344)){
var id_52345 = temp__5825__auto___52344;
cancelAnimationFrame(id_52345);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__52282_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__52282_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.background.js.map
