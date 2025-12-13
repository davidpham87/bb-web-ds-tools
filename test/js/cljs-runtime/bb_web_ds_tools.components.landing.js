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
 *    - :id (string): Unique identifier for the card.
 *   
 */
bb_web_ds_tools.components.landing.canvas_card = (function bb_web_ds_tools$components$landing$canvas_card(p__51553){
var map__51554 = p__51553;
var map__51554__$1 = cljs.core.__destructure_map(map__51554);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var route = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"route","route",329891309));
var draw_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
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
var map__51562 = cljs.core.deref(dimensions);
var map__51562__$1 = cljs.core.__destructure_map(map__51562);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51562__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51562__$1,new cljs.core.Keyword(null,"height","height",1025178622));
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
var temp__5825__auto___51679 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___51679)){
var id_51680__$1 = temp__5825__auto___51679;
cancelAnimationFrame(id_51680__$1);
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col md:flex-row h-auto md:h-64 w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.01] cursor-pointer border ",bb_web_ds_tools.theme.border_subtle," ",bb_web_ds_tools.theme.border_hover," ",bb_web_ds_tools.theme.bg_card].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","navigate","bb-web-ds-tools.core/navigate",-787989557),route,null,null], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative w-full md:w-1/3 h-48 md:h-full ",bb_web_ds_tools.theme.bg_sidebar," border-b md:border-b-0 md:border-r ",bb_web_ds_tools.theme.border_main].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__51552_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__51552_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-full block"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-6 flex flex-col justify-center w-full md:w-2/3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl font-bold mb-4 ",bb_web_ds_tools.theme.text_accent].join('')], null),label], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-base leading-relaxed ",bb_web_ds_tools.theme.text_primary," opacity-90"].join('')], null),description], null)], null)], null);
})], null));
});
bb_web_ds_tools.components.landing.clear = (function bb_web_ds_tools$components$landing$clear(ctx,w,h){
var style = getComputedStyle(document.body);
var bg = style.getPropertyValue("--bg-sidebar");
(ctx.fillStyle = ((cljs.core.empty_QMARK_(bg))?"#303030":bg));

return ctx.fillRect((0),(0),w,h);
});
bb_web_ds_tools.components.landing.colors = bb_web_ds_tools.theme.colors;
bb_web_ds_tools.components.landing.zenburn = bb_web_ds_tools.utils.themes.get_theme(new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
bb_web_ds_tools.components.landing.draw_workspaces = (function bb_web_ds_tools$components$landing$draw_workspaces(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cycle = cljs.core.mod(t,(4000));
var open_phase = (cycle < (2000));
var angle = ((open_phase)?((Math.PI * 0.1) * Math.sin((t * 0.003))):(0));
var cx = (w / (2));
var cy = (h / (2));
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.save();

ctx.translate(cx,cy);

ctx.beginPath();

ctx.moveTo((-40),(-30));

ctx.lineTo((40),(-30));

ctx.lineTo((40),(30));

ctx.lineTo((-40),(30));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

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
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy - (20)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

ctx.beginPath();

ctx.rect((cx - (40)),(cy - (20)),(80),(50));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background","portal.colors/background",-1400610375).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (30)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.beginPath();

ctx.ellipse(cx,(cy + (25)),(40),(15),(0),(0),(Math.PI * (2)));

ctx.fill();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_51684 = (i * (1000));
var y_pos_51685 = ((-50) + cljs.core.mod(((t + offset_51684) * 0.05),(100)));
var x_pos_51686 = (cx + ((60) * Math.sin(((t + offset_51684) * 0.002))));
if((((y_pos_51685 > (-50))) && ((y_pos_51685 < (50))))){
ctx.beginPath();

ctx.arc(x_pos_51686,(cy + y_pos_51685),(3),(0),(Math.PI * (2)));

ctx.fill();
} else {
}

var G__51687 = (i + (1));
i = G__51687;
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
var start_x = ((w / (2)) - (80));
var start_y = ((h / (2)) - (60));
var chars_per_line = (30);
var total_lines = (8);
var typer_pos = cljs.core.mod(Math.floor((t / (50))),(chars_per_line * total_lines));
(ctx.font = "12px monospace");

var n__5616__auto___51688 = total_lines;
var i_51689 = (0);
while(true){
if((i_51689 < n__5616__auto___51688)){
var y_51690 = (start_y + (i_51689 * line_h));
var chars_51691 = (function (){var x__5113__auto__ = chars_per_line;
var y__5114__auto__ = (function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (typer_pos - (i_51689 * chars_per_line));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((chars_51691 > (0))){
(ctx.fillStyle = ((cljs.core.even_QMARK_(i_51689))?new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn):new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)));

ctx.fillRect(start_x,y_51690,(chars_51691 * (5)),(8));
} else {
}

var G__51694 = (i_51689 + (1));
i_51689 = G__51694;
continue;
} else {
}
break;
}

var current_line = Math.floor((typer_pos / chars_per_line));
var current_char = cljs.core.mod(typer_pos,chars_per_line);
if((current_line < total_lines)){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

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
var freq_51695 = (0.002 + (i * 0.001));
var height_51696 = ((30) + ((40) * Math.abs(Math.sin((t * freq_51695)))));
var x_51697 = (start_x + (i * (bar_w + gap)));
var y_51698 = (base_y - height_51696);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","uri","portal.colors/uri",1909526219).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),cljs.core.mod(i,(5))));

ctx.fillRect(x_51697,y_51698,bar_w,height_51696);

var G__51703 = (i + (1));
i = G__51703;
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
(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (5));

ctx.beginPath();

ctx.arc(cx,cy,radius,(0),(Math.PI * (2)));

ctx.stroke();

var progress_51707 = cljs.core.mod((t * 0.001),(2));
var p_51708 = (function (){var x__5113__auto__ = (1);
var y__5114__auto__ = progress_51707;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
if((p_51708 > (0))){
ctx.beginPath();

ctx.moveTo((cx - (20)),cy);

ctx.lineTo((cx - (5)),(cy + (15)));

if((p_51708 > 0.5)){
ctx.lineTo((cx + (25)),(cy - (20)));
} else {
}

ctx.stroke();
} else {
}

(ctx.font = "20px sans-serif");

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.textAlign = "center");

return ctx.fillText("Valid",cx,(cy + (60)));
});
bb_web_ds_tools.components.landing.clear_rect = (function bb_web_ds_tools$components$landing$clear_rect(ctx,w,h){
return ctx.clearRect((0),(0),w,h);
});
bb_web_ds_tools.components.landing.draw_fast_io = (function bb_web_ds_tools$components$landing$draw_fast_io(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear_rect(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scale = 1.5;
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.shadowColor = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.shadowBlur = ((10) + ((10) * Math.sin((t * 0.005)))));

ctx.save();

ctx.translate(cx,cy);

ctx.scale(scale,scale);

ctx.translate((-12),(-18));

ctx.beginPath();

ctx.moveTo((15),(0));

ctx.lineTo((0),(15));

ctx.lineTo((10),(15));

ctx.lineTo((5),(35));

ctx.lineTo((25),(12));

ctx.lineTo((15),(12));

ctx.lineTo((15),(0));

ctx.fill();

return ctx.restore();
});
bb_web_ds_tools.components.landing.draw_instant_charts = (function bb_web_ds_tools$components$landing$draw_instant_charts(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear_rect(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var cycle = (6000);
var phase = cljs.core.mod(t,cycle);
var num_violins = (3);
var violin_w = (25);
var spacing = (15);
var total_width = ((num_violins * violin_w) + ((num_violins - (1)) * spacing));
var start_x = (cx - (total_width / (2)));
if((phase < (1500))){
var font_size = (12);
var rows = (3);
var cols = (4);
var grid_w = (cols * (20));
var start_data_x = (cx - (grid_w / (2)));
var start_data_y = (cy - (20));
var progress = (phase / (1500));
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px monospace"].join(''));

(ctx.textAlign = "center");

(ctx.globalAlpha = (1.0 - progress));

var n__5616__auto___51718 = cols;
var i_51719 = (0);
while(true){
if((i_51719 < n__5616__auto___51718)){
var n__5616__auto___51720__$1 = rows;
var j_51721 = (0);
while(true){
if((j_51721 < n__5616__auto___51720__$1)){
var val_51722 = cljs.core.mod(Math.floor((((i_51719 * (10)) + (j_51721 * (5))) + (t / (200)))),(100));
var x_51723 = (start_data_x + (i_51719 * (20)));
var y_51724 = (start_data_y + (j_51721 * (16)));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillText(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_51722),x_51723,y_51724);

var G__51725 = (j_51721 + (1));
j_51721 = G__51725;
continue;
} else {
}
break;
}

var G__51726 = (i_51719 + (1));
i_51719 = G__51726;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);
} else {
if((phase < (3000))){
var progress = ((phase - (1500)) / (1500));
var max_height = (60);
var n__5616__auto__ = num_violins;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var x_51727 = ((start_x + (i * (violin_w + spacing))) + (violin_w / (2)));
var base_y_51728 = cy;
var current_h_51729 = (max_height * progress);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),i));

(ctx.globalAlpha = progress);

ctx.beginPath();

ctx.ellipse(x_51727,(base_y_51728 - (current_h_51729 / (2))),(violin_w / (2)),(current_h_51729 / (2)),(0),(0),Math.PI);

ctx.ellipse(x_51727,(base_y_51728 + (current_h_51729 / (2))),(violin_w / (2)),(current_h_51729 / (2)),(0),Math.PI,(Math.PI * (2)));

ctx.fill();

(ctx.globalAlpha = 1.0);

var G__51730 = (i + (1));
i = G__51730;
continue;
} else {
return null;
}
break;
}
} else {
var max_height = (60);
var n__5616__auto__ = num_violins;
var i = (0);
while(true){
if((i < n__5616__auto__)){
var x_51731 = ((start_x + (i * (violin_w + spacing))) + (violin_w / (2)));
var base_y_51732 = cy;
var anim_offset_51733 = ((5) * Math.sin((t * 0.002)));
var current_h_51734 = (max_height + anim_offset_51733);
(ctx.fillStyle = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn),new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),i));

ctx.beginPath();

ctx.ellipse(x_51731,(base_y_51732 - (current_h_51734 / (2))),(violin_w / (2)),(current_h_51734 / (2)),(0),(0),Math.PI);

ctx.ellipse(x_51731,(base_y_51732 + (current_h_51734 / (2))),(violin_w / (2)),(current_h_51734 / (2)),(0),Math.PI,(Math.PI * (2)));

ctx.fill();

var G__51735 = (i + (1));
i = G__51735;
continue;
} else {
return null;
}
break;
}

}
}
});
bb_web_ds_tools.components.landing.draw_multi_runtime = (function bb_web_ds_tools$components$landing$draw_multi_runtime(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear_rect(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var draw_gear = (function (x,y,r,teeth,speed,color){
ctx.save();

ctx.translate(x,y);

ctx.rotate((t * speed));

(ctx.fillStyle = color);

ctx.beginPath();

var outer_r_51736 = r;
var inner_r_51737 = (r * 0.8);
var hole_r_51738 = (r * 0.3);
var n__5616__auto___51739 = (teeth * (2));
var i_51740 = (0);
while(true){
if((i_51740 < n__5616__auto___51739)){
var angle_51741 = (i_51740 * (Math.PI / teeth));
var rad_51742 = ((cljs.core.even_QMARK_(i_51740))?outer_r_51736:inner_r_51737);
ctx.lineTo((rad_51742 * Math.cos(angle_51741)),(rad_51742 * Math.sin(angle_51741)));

var G__51743 = (i_51740 + (1));
i_51740 = G__51743;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),hole_r_51738,(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

return ctx.restore();
});
draw_gear((cx - (15)),(cy - (10)),(20),(8),0.002,new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

return draw_gear((cx + (15)),(cy + (10)),(15),(6),-0.003,new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));
});
bb_web_ds_tools.components.landing.animated_icon = (function bb_web_ds_tools$components$landing$animated_icon(p__51643){
var map__51644 = p__51643;
var map__51644__$1 = cljs.core.__destructure_map(map__51644);
var draw_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51644__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51644__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var canvas_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animation_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var resize_observer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var dimensions = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"animated-icon",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var temp__5825__auto__ = cljs.core.deref(canvas_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var canvas = temp__5825__auto__;
var ctx = canvas.getContext("2d");
var dpr = (function (){var or__5025__auto__ = window.devicePixelRatio;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
var update_size = (function (){
var w = canvas.offsetWidth;
var h = canvas.offsetHeight;
cljs.core.reset_BANG_(dimensions,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null));

(canvas.width = (w * dpr));

(canvas.height = (h * dpr));

return ctx.scale(dpr,dpr);
});
var observer = (new ResizeObserver((function (_){
return update_size();
})));
observer.observe(canvas);

cljs.core.reset_BANG_(resize_observer,observer);

update_size();

var start_time = Date.now();
var loop_fn = (function bb_web_ds_tools$components$landing$animated_icon_$_loop_fn(){
var elapsed = (Date.now() - start_time);
var map__51647 = cljs.core.deref(dimensions);
var map__51647__$1 = cljs.core.__destructure_map(map__51647);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51647__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((((width > (0))) && ((height > (0))))){
(draw_fn.cljs$core$IFn$_invoke$arity$4 ? draw_fn.cljs$core$IFn$_invoke$arity$4(ctx,width,height,elapsed) : draw_fn.call(null,ctx,width,height,elapsed));
} else {
}

return cljs.core.reset_BANG_(animation_id,requestAnimationFrame(bb_web_ds_tools$components$landing$animated_icon_$_loop_fn));
});
return loop_fn();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
var temp__5825__auto___51763 = cljs.core.deref(animation_id);
if(cljs.core.truth_(temp__5825__auto___51763)){
var id_51764 = temp__5825__auto___51763;
cancelAnimationFrame(id_51764);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__51639_SHARP_){
return cljs.core.reset_BANG_(canvas_ref,p1__51639_SHARP_);
}),new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "w-16 h-16 mb-4";
}
})()], null)], null);
})], null));
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

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","tag","portal.colors/tag",-1829243477).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillText("{}",cx,cy);

var seq__51648 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn)], null)], null));
var chunk__51649 = null;
var count__51650 = (0);
var i__51651 = (0);
while(true){
if((i__51651 < count__51650)){
var vec__51663 = chunk__51649.cljs$core$IIndexed$_nth$arity$2(null,i__51651);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51663,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51663,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51663,(2),null);
var theta_51765 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_51766 = (cx + (orbit_r * Math.cos(theta_51765)));
var y_51767 = (cy + (orbit_r * Math.sin(theta_51765)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_51766,y_51767);


var G__51768 = seq__51648;
var G__51769 = chunk__51649;
var G__51770 = count__51650;
var G__51771 = (i__51651 + (1));
seq__51648 = G__51768;
chunk__51649 = G__51769;
count__51650 = G__51770;
i__51651 = G__51771;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51648);
if(temp__5825__auto__){
var seq__51648__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51648__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__51648__$1);
var G__51772 = cljs.core.chunk_rest(seq__51648__$1);
var G__51773 = c__5548__auto__;
var G__51774 = cljs.core.count(c__5548__auto__);
var G__51775 = (0);
seq__51648 = G__51772;
chunk__51649 = G__51773;
count__51650 = G__51774;
i__51651 = G__51775;
continue;
} else {
var vec__51666 = cljs.core.first(seq__51648__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(1),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51666,(2),null);
var theta_51776 = (angle + (i * ((Math.PI * (2)) / (3))));
var x_51777 = (cx + (orbit_r * Math.cos(theta_51776)));
var y_51778 = (cy + (orbit_r * Math.sin(theta_51776)));
(ctx.fillStyle = color);

(ctx.font = "14px sans-serif");

ctx.fillText(text,x_51777,y_51778);


var G__51779 = cljs.core.next(seq__51648__$1);
var G__51780 = null;
var G__51781 = (0);
var G__51782 = (0);
seq__51648 = G__51779;
chunk__51649 = G__51780;
count__51650 = G__51781;
i__51651 = G__51782;
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

(ctx.strokeStyle = new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.lineWidth = (3));

var n__5616__auto___51783 = (100);
var i_51784 = (0);
while(true){
if((i_51784 < n__5616__auto___51783)){
var x_51785 = ((cx - (100)) + (i_51784 * (2)));
var y_51786 = (cy + ((40) * Math.sin(((i_51784 * 0.1) + (t * 0.005)))));
if((i_51784 === (0))){
ctx.moveTo(x_51785,y_51786);
} else {
ctx.lineTo(x_51785,y_51786);
}

var G__51787 = (i_51784 + (1));
i_51784 = G__51787;
continue;
} else {
}
break;
}

ctx.stroke();

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-remove","portal.colors/diff-remove",-1316767592).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

var n__5616__auto__ = (5);
var i = (0);
while(true){
if((i < n__5616__auto__)){
var offset_51788 = (i * (20));
var x_51789 = ((cx - (100)) + (offset_51788 * (2)));
var y_51790 = (cy + ((40) * Math.sin(((offset_51788 * 0.1) + (t * 0.005)))));
ctx.beginPath();

ctx.arc(x_51789,y_51790,(4),(0),(Math.PI * (2)));

ctx.fill();

var G__51795 = (i + (1));
i = G__51795;
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

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-30),(-30),(60),(60));

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","background2","portal.colors/background2",-2075622390).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

ctx.fillRect((-20),(-10),(15),(10));

ctx.fillRect((5),(-10),(15),(10));

var blink_51796 = cljs.core.mod((t * 5.0E-4),(5));
if((blink_51796 > 4.8)){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","diff-add","portal.colors/diff-add",1253946866).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

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

var outer_r_51797 = r;
var inner_r_51798 = (r * 0.8);
var hole_r_51799 = (r * 0.3);
var n__5616__auto___51800 = (teeth * (2));
var i_51801 = (0);
while(true){
if((i_51801 < n__5616__auto___51800)){
var angle_51802 = (i_51801 * (Math.PI / teeth));
var rad_51803 = ((cljs.core.even_QMARK_(i_51801))?outer_r_51797:inner_r_51798);
ctx.lineTo((rad_51803 * Math.cos(angle_51802)),(rad_51803 * Math.sin(angle_51802)));

var G__51804 = (i_51801 + (1));
i_51801 = G__51804;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.fill();

(ctx.globalCompositeOperation = "destination-out");

ctx.beginPath();

ctx.arc((0),(0),hole_r_51799,(0),(Math.PI * (2)));

ctx.fill();

(ctx.globalCompositeOperation = "source-over");

return ctx.restore();
});
draw_gear(cx,cy,(40),(8),0.001,new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

return draw_gear((cx + (50)),(cy + (50)),(25),(6),-0.002,new cljs.core.Keyword("portal.colors","namespace","portal.colors/namespace",159276238).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));
});
bb_web_ds_tools.components.landing.draw_changelog = (function bb_web_ds_tools$components$landing$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.clear(ctx,w,h);

var cx = (w / (2));
var cy = (h / (2));
var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__51675 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__51676 = null;
var count__51677 = (0);
var i__51678 = (0);
while(true){
if((i__51678 < count__51677)){
var i = chunk__51676.cljs$core$IIndexed$_nth$arity$2(null,i__51678);
var y_51806 = (((200) + (i * (20))) - scroll_y);
if((((y_51806 > (0))) && ((y_51806 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_51806);
} else {
}


var G__51807 = seq__51675;
var G__51808 = chunk__51676;
var G__51809 = count__51677;
var G__51810 = (i__51678 + (1));
seq__51675 = G__51807;
chunk__51676 = G__51808;
count__51677 = G__51809;
i__51678 = G__51810;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__51675);
if(temp__5825__auto__){
var seq__51675__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51675__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__51675__$1);
var G__51812 = cljs.core.chunk_rest(seq__51675__$1);
var G__51813 = c__5548__auto__;
var G__51814 = cljs.core.count(c__5548__auto__);
var G__51815 = (0);
seq__51675 = G__51812;
chunk__51676 = G__51813;
count__51677 = G__51814;
i__51678 = G__51815;
continue;
} else {
var i = cljs.core.first(seq__51675__$1);
var y_51816 = (((200) + (i * (20))) - scroll_y);
if((((y_51816 > (0))) && ((y_51816 < (200))))){
ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y_51816);
} else {
}


var G__51817 = cljs.core.next(seq__51675__$1);
var G__51818 = null;
var G__51819 = (0);
var G__51820 = (0);
seq__51675 = G__51817;
chunk__51676 = G__51818;
count__51677 = G__51819;
i__51678 = G__51820;
continue;
}
} else {
return null;
}
}
break;
}
});
bb_web_ds_tools.components.landing.feature_cards = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-datasets",new cljs.core.Keyword(null,"label","label",1718410804),"Datasets",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"description","description",-1428560544),"Because sometimes you just want to look at a CSV without firing up a Jupyter notebook that takes 3 minutes to load. It's like Excel, but you can feel superior about using it.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_datasets], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-vega-lite",new cljs.core.Keyword(null,"label","label",1718410804),"Vega-Lite",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"vega-lite","vega-lite",-650304770),new cljs.core.Keyword(null,"description","description",-1428560544),"Make charts that look like you spent hours on them, when in reality you just copied a JSON blob. Data visualization for the impatient and the lazy.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_vega_lite], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-code",new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"description","description",-1428560544),"Write Python, R, and Clojure in the browser because installing local environments is a form of self-harm. We downloaded the internet so you don't have to.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_code], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-malli",new cljs.core.Keyword(null,"label","label",1718410804),"Malli",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"malli","malli",814072082),new cljs.core.Keyword(null,"description","description",-1428560544),"Validate your data structures because trusting user input is a rookie mistake. It's like a strict librarian for your JSON.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_malli], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-honeysql",new cljs.core.Keyword(null,"label","label",1718410804),"HoneySQL",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"honeysql","honeysql",1617091670),new cljs.core.Keyword(null,"description","description",-1428560544),"Write SQL in Clojure data structures, because string manipulation is for people who enjoy SQL injection attacks. Be the abstraction you want to see in the world.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_honeysql], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-gemma",new cljs.core.Keyword(null,"label","label",1718410804),"Gemma",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"gemma","gemma",2017704848),new cljs.core.Keyword(null,"description","description",-1428560544),"Run an LLM locally and listen to your laptop fan simulate a jet engine takeoff. Ask it questions, getting answers is optional.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_gemma], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-settings",new cljs.core.Keyword(null,"label","label",1718410804),"Settings",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"description","description",-1428560544),"Change the font size because you're not 20 anymore. Customize the UI until it's barely usable, we won't stop you.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_settings], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-app-db",new cljs.core.Keyword(null,"label","label",1718410804),"App DB",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"description","description",-1428560544),"Stare directly into the soul of the application state. If it looks like chaos, that's because it is. Don't touch it.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_app_db], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"card-changelog",new cljs.core.Keyword(null,"label","label",1718410804),"Changelog",new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"changelog","changelog",-435725878),new cljs.core.Keyword(null,"description","description",-1428560544),"A historical record of our mistakes and the heroic efforts to fix them. Read it to feel better about your own code.",new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.draw_changelog], null)], null);

//# sourceMappingURL=bb_web_ds_tools.components.landing.js.map
