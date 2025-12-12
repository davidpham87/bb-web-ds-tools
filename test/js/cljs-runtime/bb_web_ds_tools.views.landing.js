goog.provide('bb_web_ds_tools.views.landing');
bb_web_ds_tools.views.landing.github_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],["currentColor","none","round","24","http://www.w3.org/2000/svg","round","2","w-5 h-5","0 0 24 24","24"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"], null)], null)], null);
/**
 * Updates the color state based on CSS variables.
 */
bb_web_ds_tools.views.landing.update_background_colors = (function bb_web_ds_tools$views$landing$update_background_colors(colors){
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
bb_web_ds_tools.views.landing.draw_background_pattern = (function bb_web_ds_tools$views$landing$draw_background_pattern(ctx,width,height,t,cols){
ctx.clearRect((0),(0),width,height);

(ctx.lineWidth = (2));

(ctx.globalAlpha = 0.15);

var n__5616__auto___51698 = (20);
var i_51699 = (0);
while(true){
if((i_51699 < n__5616__auto___51698)){
var seed_51700 = (t + (i_51699 * 0.1));
var scale_51701 = ((100) + ((50) * Math.sin(seed_51700)));
ctx.beginPath();

(ctx.strokeStyle = (function (){var G__51632 = cljs.core.mod(i_51699,(4));
switch (G__51632) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51632)].join('')));

}
})());

var n__5616__auto___51703__$1 = (100);
var j_51704 = (0);
while(true){
if((j_51704 < n__5616__auto___51703__$1)){
var angle_51705 = ((j_51704 * 0.1) + seed_51700);
var r_51706 = (scale_51701 + ((scale_51701 * 0.5) * Math.cos((angle_51705 * (3)))));
var x_51707 = ((width / (2)) + (r_51706 * Math.cos(angle_51705)));
var y_51708 = ((height / (2)) + (r_51706 * Math.sin(angle_51705)));
if((j_51704 === (0))){
ctx.moveTo(x_51707,y_51708);
} else {
ctx.lineTo(x_51707,y_51708);
}

var G__51709 = (j_51704 + (1));
j_51704 = G__51709;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

var G__51710 = (i_51699 + (1));
i_51699 = G__51710;
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
var wave_t_51711 = (t + (i * 1.5));
var y_offset_51712 = ((height / (2)) + ((200) * Math.sin(wave_t_51711)));
(ctx.fillStyle = (function (){var G__51635 = cljs.core.mod(i,(3));
switch (G__51635) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51635)].join('')));

}
})());

ctx.beginPath();

ctx.moveTo((0),height);

var seq__51639_51714 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),width,(20)));
var chunk__51640_51715 = null;
var count__51641_51716 = (0);
var i__51642_51717 = (0);
while(true){
if((i__51642_51717 < count__51641_51716)){
var x_51718 = chunk__51640_51715.cljs$core$IIndexed$_nth$arity$2(null,i__51642_51717);
var y_51719 = (y_offset_51712 + ((100) * Math.sin((wave_t_51711 + (x_51718 * 0.005)))));
ctx.lineTo(x_51718,y_51719);


var G__51720 = seq__51639_51714;
var G__51721 = chunk__51640_51715;
var G__51722 = count__51641_51716;
var G__51723 = (i__51642_51717 + (1));
seq__51639_51714 = G__51720;
chunk__51640_51715 = G__51721;
count__51641_51716 = G__51722;
i__51642_51717 = G__51723;
continue;
} else {
var temp__5825__auto___51724 = cljs.core.seq(seq__51639_51714);
if(temp__5825__auto___51724){
var seq__51639_51725__$1 = temp__5825__auto___51724;
if(cljs.core.chunked_seq_QMARK_(seq__51639_51725__$1)){
var c__5548__auto___51726 = cljs.core.chunk_first(seq__51639_51725__$1);
var G__51727 = cljs.core.chunk_rest(seq__51639_51725__$1);
var G__51728 = c__5548__auto___51726;
var G__51729 = cljs.core.count(c__5548__auto___51726);
var G__51730 = (0);
seq__51639_51714 = G__51727;
chunk__51640_51715 = G__51728;
count__51641_51716 = G__51729;
i__51642_51717 = G__51730;
continue;
} else {
var x_51731 = cljs.core.first(seq__51639_51725__$1);
var y_51732 = (y_offset_51712 + ((100) * Math.sin((wave_t_51711 + (x_51731 * 0.005)))));
ctx.lineTo(x_51731,y_51732);


var G__51733 = cljs.core.next(seq__51639_51725__$1);
var G__51734 = null;
var G__51735 = (0);
var G__51736 = (0);
seq__51639_51714 = G__51733;
chunk__51640_51715 = G__51734;
count__51641_51716 = G__51735;
i__51642_51717 = G__51736;
continue;
}
} else {
}
}
break;
}

ctx.lineTo(width,height);

ctx.fill();

var G__51737 = (i + (1));
i = G__51737;
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
bb_web_ds_tools.views.landing.background_canvas = (function bb_web_ds_tools$views$landing$background_canvas(){
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

bb_web_ds_tools.views.landing.update_background_colors(colors);

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$views$landing$background_canvas_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__51661 = cljs.core.deref(dimensions);
var map__51661__$1 = cljs.core.__destructure_map(map__51661);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51661__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51661__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var t = (elapsed * 2.0E-4);
var cols = cljs.core.deref(colors);
if((((width > (0))) && ((height > (0))))){
bb_web_ds_tools.views.landing.draw_background_pattern(ctx,width,height,t,cols);
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$views$landing$background_canvas_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___51738 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___51738)){
var id_51739 = temp__5825__auto___51738;
cancelAnimationFrame(id_51739);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__51656_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__51656_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"], null)], null);
})], null));
});
/**
 * Renders the landing page with animated feature cards.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.landing.landing_page = (function bb_web_ds_tools$views$landing$landing_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-full flex flex-col items-center relative overflow-hidden font-['Source_Code_Pro']"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),"@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }\n     .animate-float { animation: float 6s ease-in-out infinite; }\n     .animate-float-delay-1 { animation: float 6s ease-in-out infinite; animation-delay: 1s; }\n     .animate-float-delay-2 { animation: float 6s ease-in-out infinite; animation-delay: 2s; }"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.landing.background_canvas], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-7xl w-full flex-grow flex flex-col justify-center z-10 p-8"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center mb-16 space-y-8 animate-fade-in-up"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-6xl md:text-8xl font-extrabold mb-4 ",bb_web_ds_tools.theme.text_accent," tracking-tight drop-shadow-lg"].join('')], null),"The \"Swiss Army Knife\" of Data Science"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl md:text-3xl ",bb_web_ds_tools.theme.text_secondary," max-w-4xl mx-auto leading-relaxed font-light"].join('')], null),"Decrease I/O friction. Copy paste data like a pro. Visualize without tears."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mt-12"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300 animate-float"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\u26A1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Zero I/O Friction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base ",bb_web_ds_tools.theme.text_muted].join('')], null),"Stop wrestling with file paths. Just paste your data and go."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300 animate-float-delay-1"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\uD83D\uDCCA"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Instant Visuals"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base ",bb_web_ds_tools.theme.text_muted].join('')], null),"Charts that look handwritten, generated in milliseconds."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["p-6 rounded-lg ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-md transform hover:scale-105 transition-transform duration-300 animate-float-delay-2"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-5xl mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),"\uD83D\uDEE0\uFE0F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl font-bold mb-2 ",bb_web_ds_tools.theme.text_primary].join('')], null),"Multi-Runtime"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base ",bb_web_ds_tools.theme.text_muted].join('')], null),"Clojure, Python, R. Run them all. Simultaneously. Chaos awaits."], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["mt-8 text-xl ",bb_web_ds_tools.theme.text_secondary," max-w-3xl mx-auto italic opacity-80"].join('')], null),"\"It's like having a data science team in your pocket, but they don't ask for equity.\""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-8"], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$landing$landing_page_$_iter__51681(s__51682){
return (new cljs.core.LazySeq(null,(function (){
var s__51682__$1 = s__51682;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__51682__$1);
if(temp__5825__auto__){
var s__51682__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51682__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__51682__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__51684 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__51683 = (0);
while(true){
if((i__51683 < size__5502__auto__)){
var card = cljs.core._nth(c__5501__auto__,i__51683);
cljs.core.chunk_append(b__51684,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)));

var G__51743 = (i__51683 + (1));
i__51683 = G__51743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51684),bb_web_ds_tools$views$landing$landing_page_$_iter__51681(cljs.core.chunk_rest(s__51682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51684),null);
}
} else {
var card = cljs.core.first(s__51682__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.canvas_card,card], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(card)], null)),bb_web_ds_tools$views$landing$landing_page_$_iter__51681(cljs.core.rest(s__51682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(bb_web_ds_tools.components.landing.feature_cards);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full py-8 mt-16 border-t ",bb_web_ds_tools.theme.border_default," z-10 bg-opacity-80 backdrop-blur-sm ",bb_web_ds_tools.theme.bg_page].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center gap-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"wiki/",new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),"Wiki"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"blog/",new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),"Blog"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/davidpham87/bb-web-ds-tools",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg flex items-center gap-2 ",bb_web_ds_tools.theme.text_secondary," hover:text-white transition-colors"].join('')], null),bb_web_ds_tools.views.landing.github_icon,"View on GitHub"], null)], null)], null)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.js.map
