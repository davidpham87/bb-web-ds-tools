goog.provide('bb_web_ds_tools.components.landing');
bb_web_ds_tools.components.landing.setup_canvas = (function bb_web_ds_tools$components$landing$setup_canvas(canvas,width,height){
var ctx = canvas.getContext("2d");
var dpr = (function (){var or__5025__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
(canvas.width = (width * dpr));

(canvas.height = (height * dpr));

ctx.scale(dpr,dpr);

return ctx;
});
/**
 * A card with a canvas animation header.
 * 
 *   Args:
 *  props (map):
 *    - :label (string): Title.
 *    - :description (string): Description text.
 *    - :route (keyword): Navigation route.
 *    - :draw-fn (fn [ctx width height timestamp]): Animation function.
 *   
 */
bb_web_ds_tools.components.landing.canvas_card = (function bb_web_ds_tools$components$landing$canvas_card(p__43911){
var map__43912 = p__43911;
var map__43912__$1 = cljs.core.__destructure_map(map__43912);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912__$1,new cljs.core.Keyword(null,"route","route",329891309));
var draw_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43912__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var canvas_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animation_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var resize_observer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var dimensions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),["canvas-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__5825__auto__ = cljs.core.deref(canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var ctx = canvas.getContext("2d");
var update_size = (function (){
var w = canvas.offsetWidth;
var h = canvas.offsetHeight;
cljs.core.reset_BANG_(dimensions,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null));

return bb_web_ds_tools.components.landing.setup_canvas(canvas,w,h);
});
var observer = (new ResizeObserver((function (_){
return update_size();
})));
observer.observe(canvas);

cljs.core.reset_BANG_(resize_observer,observer);

update_size();

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$components$landing$canvas_card_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__43914 = cljs.core.deref(dimensions);
var map__43914__$1 = cljs.core.__destructure_map(map__43914);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43914__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43914__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((((width > (0))) && ((height > (0))))){
(draw_fn.cljs$core$IFn$_invoke$arity$4 ? draw_fn.cljs$core$IFn$_invoke$arity$4(ctx,width,height,elapsed) : draw_fn.call(null,ctx,width,height,elapsed));
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$components$landing$canvas_card_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___44019 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___44019)){
var id_44020 = temp__5825__auto___44019;
cancelAnimationFrame(id_44020);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col h-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer border ",bb_web_ds_tools.theme.border_subtle," ",bb_web_ds_tools.theme.border_hover," ",bb_web_ds_tools.theme.bg_card].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),route,null,null], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative h-40 w-full ",bb_web_ds_tools.theme.bg_sidebar," border-b ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__43909_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__43909_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full block"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-5 flex flex-col flex-grow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-lg font-bold mb-2 ",bb_web_ds_tools.theme.text_accent].join('')], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-sm leading-relaxed ",bb_web_ds_tools.theme.text_primary," opacity-90"].join('')], null),description], null)], null)], null);
})], null));
});
bb_web_ds_tools.components.landing.clear = (function bb_web_ds_tools$components$landing$clear(ctx,w,h){
(ctx.fillStyle = new cljs.core.Keyword(null,"bg-sidebar","bg-sidebar",-1016595894).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.theme.colors));

return ctx.fillRect((0),(0),w,h);
});
bb_web_ds_tools.components.landing.colors = bb_web_ds_tools.theme.colors;
bb_web_ds_tools.components.landing.zenburn = bb_web_ds_tools.theme.zenburn;
bb_web_ds_tools.components.landing.draw_workspaces = (function bb_web_ds_tools$components$landing$draw_workspaces(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cycle = cljs.core.mod(t,(4000));
var open_phase = (cycle < (2000));
var angle = ((open_phase)?((Math.PI * 0.1) * Math.sin((t * 0.003))):(0));
var cx = (w / (2));
var cy = (h / (2));
(ctx.strokeStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.save();

ctx.translate(cx,cy);

ctx.beginPath();

ctx.moveTo((-40),(-30));

ctx.lineTo((40),(-30));

ctx.lineTo((40),(30));

ctx.lineTo((-40),(30));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","tag","bb-web-ds-tools.theme/tag",50610303).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.moveTo((-40),(30));

ctx.lineTo((40),(30));

ctx.lineTo(((40) + (Math.sin(angle) * (10))),((-30) + (Math.cos(angle) * (-10))));

ctx.lineTo(((-40) + (Math.sin(angle) * (10))),((-30) + (Math.cos(angle) * (-10))));

ctx.fill();

return ctx.restore();
});
bb_web_ds_tools.components.landing.draw_app_db = (function bb_web_ds_tools$components$landing$draw_app_db(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy - (20)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

ctx.beginPath();

ctx.rect((cx - (40)),(cy - (20)),(80),(50));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","background","bb-web-ds-tools.theme/background",1016235781).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (30)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (25)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_44031 = (i * (1000));
var y_pos_44032 = ((-50) + cljs.core.mod(((t + offset_44031) * 0.05),(100)));
var x_pos_44033 = (cx + ((60) * Math.sin(((t + offset_44031) * 0.002))));
if((((y_pos_44032 > (-50))) && ((y_pos_44032 < (50))))){
ctx.beginPath();

ctx.arc(x_pos_44033,(cy + y_pos_44032),(3),(0),(Math.PI * (2)));

ctx.fill();
} else {
}

var G__44035 = (i + (1));
i = G__44035;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.draw_code = (function bb_web_ds_tools$components$landing$draw_code(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var line_h = (14);
var start_x = (40);
var start_y = (40);
var chars_per_line = (30);
var total_lines = (8);
var typer_pos = cljs.core.mod(Math.floor((t / (50))),(chars_per_line * total_lines));
(ctx.font = "12px monospace");

var n__5616__auto___44036 = total_lines;
var i_44037 = (0);
while(true){
if((i_44037 < n__5616__auto___44036)){
var y_44038 = (start_y + (i_44037 * line_h));
var chars_44039 = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (typer_pos - (i_44037 * chars_per_line));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((chars_44039 > (0))){
(ctx.fillStyle = ((cljs.core.even_QMARK_(i_44037))?new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn):new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)));

ctx.fillRect(start_x,y_44038,(chars_44039 * (5)),(8));
} else {
}

var G__44040 = (i_44037 + (1));
i_44037 = G__44040;
continue;
} else {
}
break;
}

var current_line = Math.floor((typer_pos / chars_per_line));
var current_char = cljs.core.mod(typer_pos,chars_per_line);
if((current_line < total_lines)){
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

return ctx.fillRect((start_x + (current_char * (5))),(start_y + (current_line * line_h)),(2),(12));
} else {
return null;
}
});
bb_web_ds_tools.components.landing.draw_datasets = (function bb_web_ds_tools$components$landing$draw_datasets(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cols = (5);
var bar_w = (20);
var gap = (10);
var total_w = ((cols * bar_w) + ((cols - (1)) * gap));
var start_x = ((w / (2)) - (total_w / (2)));
var base_y = ((h / (2)) + (40));
var n__5616__auto__ = cols;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var freq_44041 = (0.002 + (i * 0.001));
var height_44042 = ((30) + ((40) * Math.abs(Math.sin((t * freq_44041)))));
var x_44043 = (start_x + (i * (bar_w + gap)));
var y_44044 = (base_y - height_44042);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("bb-web-ds-tools.theme","uri","bb-web-ds-tools.theme/uri",-500913257).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),cljs.core.mod(i,(5))));

ctx.fillRect(x_44043,y_44044,bar_w,height_44042);

var G__44045 = (i + (1));
i = G__44045;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.draw_malli = (function bb_web_ds_tools$components$landing$draw_malli(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var radius = (40);
(ctx.strokeStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (5));

ctx.beginPath();

ctx.arc(cx,cy,radius,(0),(Math.PI * (2)));

ctx.stroke();

var progress_44046 = cljs.core.mod((t * 0.001),(2));
var p_44047 = (function (){var x__5113__auto__ = (1);
var y__5114__auto__ = progress_44046;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((p_44047 > (0))){
ctx.beginPath();

ctx.moveTo((cx - (20)),cy);

ctx.lineTo((cx - (5)),(cy + (15)));

if((p_44047 > 0.5)){
ctx.lineTo((cx + (25)),(cy - (20)));
} else {
}

ctx.stroke();
} else {
}

(ctx.font = "20px sans-serif");

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.textAlign = "center");

return ctx.fillText("Valid",cx,(cy + (60)));
});
bb_web_ds_tools.components.landing.draw_honeysql = (function bb_web_ds_tools$components$landing$draw_honeysql(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var orbit_r = (60);
var angle = (t * 0.001);
(ctx.font = "bold 24px sans-serif");

(ctx.textAlign = "center");

(ctx.textBaseline = "middle");

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","tag","bb-web-ds-tools.theme/tag",50610303).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillText("{}",cx,cy);

var seq__43932 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("bb-web-ds-tools.theme","keyword","bb-web-ds-tools.theme/keyword",6462773).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("bb-web-ds-tools.theme","string","bb-web-ds-tools.theme/string",1496885044).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null)], null));
var chunk__43933 = null;
var count__43934 = (0);
var i__43935 = (0);
while(true){
if((i__43935 < count__43934)){
var vec__43945 = chunk__43933.cljs$core$IIndexed$_nth$arity$2(null,i__43935);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43945,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43945,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43945,(2),null);
var theta_44048 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_44049 = (cx + (orbit_r * Math.cos(theta_44048)));
var y_44050 = (cy + (orbit_r * Math.sin(theta_44048)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_44049,y_44050);


var G__44051 = seq__43932;
var G__44052 = chunk__43933;
var G__44053 = count__43934;
var G__44054 = (i__43935 + (1));
seq__43932 = G__44051;
chunk__43933 = G__44052;
count__43934 = G__44053;
i__43935 = G__44054;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43932);
if(temp__5825__auto__){
var seq__43932__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43932__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__43932__$1);
var G__44055 = cljs.core.chunk_rest(seq__43932__$1);
var G__44056 = c__5548__auto__;
var G__44057 = cljs.core.count(c__5548__auto__);
var G__44058 = (0);
seq__43932 = G__44055;
chunk__43933 = G__44056;
count__43934 = G__44057;
i__43935 = G__44058;
continue;
} else {
var vec__43950 = cljs.core.first(seq__43932__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43950,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43950,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43950,(2),null);
var theta_44060 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_44061 = (cx + (orbit_r * Math.cos(theta_44060)));
var y_44062 = (cy + (orbit_r * Math.sin(theta_44060)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_44061,y_44062);


var G__44063 = cljs.core.next(seq__43932__$1);
var G__44064 = null;
var G__44065 = (0);
var G__44066 = (0);
seq__43932 = G__44063;
chunk__43933 = G__44064;
count__43934 = G__44065;
i__43935 = G__44066;
continue;
}
} else {
return null;
}
}
break;
}
});
bb_web_ds_tools.components.landing.draw_vega_lite = (function bb_web_ds_tools$components$landing$draw_vega_lite(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
ctx.beginPath();

(ctx.strokeStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","number","bb-web-ds-tools.theme/number",-309038900).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

var n__5616__auto___44067 = (100);
var i_44068 = (0);
while(true){
if((i_44068 < n__5616__auto___44067)){
var x_44069 = ((cx - (100)) + (i_44068 * (2)));
var y_44070 = (cy + ((40) * Math.sin(((i_44068 * 0.1) + (t * 0.005)))));
if((i_44068 === (0))){
ctx.moveTo(x_44069,y_44070);
} else {
ctx.lineTo(x_44069,y_44070);
}

var G__44071 = (i_44068 + (1));
i_44068 = G__44071;
continue;
} else {
}
break;
}

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-remove","bb-web-ds-tools.theme/diff-remove",563091268).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_44084 = (i * (20));
var x_44085 = ((cx - (100)) + (offset_44084 * (2)));
var y_44086 = (cy + ((40) * Math.sin(((offset_44084 * 0.1) + (t * 0.005)))));
ctx.beginPath();

ctx.arc(x_44085,y_44086,(4),(0),(Math.PI * (2)));

ctx.fill();

var G__44087 = (i + (1));
i = G__44087;
continue;
} else {
return null;
}
break;
}
});
bb_web_ds_tools.components.landing.draw_gemma = (function bb_web_ds_tools$components$landing$draw_gemma(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scale = ((1) + (0.1 * Math.sin((t * 0.005))));
ctx.save();

ctx.translate(cx,cy);

ctx.scale(scale,scale);

(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-30),(-30),(60),(60));

(ctx.fillStyle = new cljs.core.Keyword(null,"bg-sidebar","bg-sidebar",-1016595894).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.theme.colors));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));

var blink_44088 = cljs.core.mod((t * 5.0E-4),(5));
if((blink_44088 > 4.8)){
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","diff-add","bb-web-ds-tools.theme/diff-add",-617408210).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));
} else {
}

return ctx.restore();
});
bb_web_ds_tools.components.landing.draw_settings = (function bb_web_ds_tools$components$landing$draw_settings(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var draw_gear = (function (x,y,r,teeth,speed,color){
ctx.save();

ctx.translate(x,y);

ctx.rotate((t * speed));

(ctx.fillStyle = color);

ctx.beginPath();

var outer_r_44091 = r;
var inner_r_44092 = (r * 0.8);
var hole_r_44093 = (r * 0.3);
var n__5616__auto___44094 = (teeth * (2));
var i_44095 = (0);
while(true){
if((i_44095 < n__5616__auto___44094)){
var angle_44096 = (i_44095 * (Math.PI / teeth));
var rad_44097 = ((cljs.core.even_QMARK_(i_44095))?outer_r_44091:inner_r_44092);
ctx.lineTo((rad_44097 * Math.cos(angle_44096)),(rad_44097 * Math.sin(angle_44096)));

var G__44098 = (i_44095 + (1));
i_44095 = G__44098;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),hole_r_44093,(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

return ctx.restore();
});
draw_gear(cx,cy,(40),(8),0.001,new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

return draw_gear((cx + (50)),(cy + (50)),(25),(6),-0.002,new cljs.core.Keyword("bb-web-ds-tools.theme","namespace","bb-web-ds-tools.theme/namespace",-1179516902).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));
});
bb_web_ds_tools.components.landing.draw_changelog = (function bb_web_ds_tools$components$landing$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("bb-web-ds-tools.theme","text","bb-web-ds-tools.theme/text",1169202269).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__43989 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__43990 = null;
var count__43991 = (0);
var i__43992 = (0);
while(true){
if((i__43992 < count__43991)){
var i = chunk__43990.cljs$core$IIndexed$_nth$arity$2(null,i__43992);
var y_44106 = (((200) + (i * (20))) - scroll_y);
if((((y_44106 > (0))) && ((y_44106 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_44106);
} else {
}


var G__44107 = seq__43989;
var G__44108 = chunk__43990;
var G__44109 = count__43991;
var G__44110 = (i__43992 + (1));
seq__43989 = G__44107;
chunk__43990 = G__44108;
count__43991 = G__44109;
i__43992 = G__44110;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__43989);
if(temp__5825__auto__){
var seq__43989__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43989__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__43989__$1);
var G__44111 = cljs.core.chunk_rest(seq__43989__$1);
var G__44112 = c__5548__auto__;
var G__44113 = cljs.core.count(c__5548__auto__);
var G__44114 = (0);
seq__43989 = G__44111;
chunk__43990 = G__44112;
count__43991 = G__44113;
i__43992 = G__44114;
continue;
} else {
var i = cljs.core.first(seq__43989__$1);
var y_44115 = (((200) + (i * (20))) - scroll_y);
if((((y_44115 > (0))) && ((y_44115 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_44115);
} else {
}


var G__44116 = cljs.core.next(seq__43989__$1);
var G__44117 = null;
var G__44118 = (0);
var G__44119 = (0);
seq__43989 = G__44116;
chunk__43990 = G__44117;
count__43991 = G__44118;
i__43992 = G__44119;
continue;
}
} else {
return null;
}
}
break;
}
});
bb_web_ds_tools.components.landing.feature_cards = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Workspaces",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"workspaces","workspaces",168825563),new cljs.core.Keyword(null,"description","description",-1428560544),"Persist your mess. Save your scripts before you accidentally close the tab and cry.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_workspaces], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"description","description",-1428560544),"Inspect the state of the universe. See the matrix code behind the curtain.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_app_db], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"description","description",-1428560544),"It's VS Code, but just the editor part. Includes Python, R, and Clojure support.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_code], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"description","description",-1428560544),"Import CSVs, TSVs, JSON. Edit in a grid. Pretend you're using Excel.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_datasets], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"description","description",-1428560544),"Schema Inference & Generation. A spellchecker for your data structures.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_malli], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"description","description",-1428560544),"SQL for Clojurists. Because writing strings is for cavemen.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_honeysql], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"description","description",-1428560544),"Charts on the fly. Paste data, write spec, boom. Interactive charts.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_vega_lite], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"description","description",-1428560544),"Your Private AI Buddy. Uses your local GPU. Fans will spin.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_gemma], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"description","description",-1428560544),"Tweak the knobs. Change the font size until you can read it.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_settings], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"description","description",-1428560544),"What's new? Probably some bugs we fixed and some new ones we added.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_changelog], null)], null);

//# sourceMappingURL=bb_web_ds_tools.components.landing.js.map
