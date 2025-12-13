var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.utils.themes.js");
require("./bb_web_ds_tools.components.landing.animations.common.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var sci=$CLJS.sci || ($CLJS.sci = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var me=$CLJS.me || ($CLJS.me = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.code.js");

goog.provide('bb_web_ds_tools.components.landing.animations.code');
bb_web_ds_tools.components.landing.animations.code.zenburn = bb_web_ds_tools.utils.themes.get_theme(new cljs.core.Keyword(null,"zenburn","zenburn",-688714384));
bb_web_ds_tools.components.landing.animations.code.draw_code = (function bb_web_ds_tools$components$landing$animations$code$draw_code(ctx,w,h,t){
(bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3 ? bb_web_ds_tools.components.landing.animations.common.clear_rect.cljs$core$IFn$_invoke$arity$3(ctx,w,h) : bb_web_ds_tools.components.landing.animations.common.clear_rect.call(null,ctx,w,h));

var cycle = (8000);
var phase = cljs.core.mod(t,cycle);
var code_lines = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(partition 2 1"," (range 4))"], null);
var result_lines = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["((0 1) (1 2)"," (2 3))"], null);
var font_size = (14);
var line_h = (20);
var start_x = ((w / (2)) - (60));
var start_y = ((h / (2)) - (40));
var type_duration = (2000);
var highlight_duration = (1500);
var exec_duration = (1000);
(ctx.font = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size),"px monospace"].join(''));

(ctx.textAlign = "left");

(ctx.textBaseline = "middle");

if((phase < type_duration)){
var progress = (phase / type_duration);
var total_chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,code_lines));
var chars_to_show = Math.floor((progress * total_chars));
var lines = code_lines;
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
var y = (start_y + (line_idx * line_h));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

ctx.fillText(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line,(0),show_len),start_x,y);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(show_len,chars_left)) && ((chars_left > (0))))){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","cursor","portal.colors/cursor",1548854822).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

ctx.fillRect((start_x + (show_len * 8.5)),(y - (8)),(2),(16));
} else {
}

var G__25108 = cljs.core.rest(lines);
var G__25109 = (line_idx + (1));
var G__25110 = (chars_left - show_len);
lines = G__25108;
line_idx = G__25109;
chars_left = G__25110;
continue;
} else {
return null;
}
break;
}
} else {
if((phase < (type_duration + highlight_duration))){
(ctx.fillStyle = "rgba(255, 255, 255, 0.2)");

var n__5616__auto___25111 = cljs.core.count(code_lines);
var i_25112 = (0);
while(true){
if((i_25112 < n__5616__auto___25111)){
ctx.fillRect((start_x - (2)),((start_y + (i_25112 * line_h)) - (10)),(cljs.core.count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_25112)) * 8.5),(20));

var G__25113 = (i_25112 + (1));
i_25112 = G__25113;
continue;
} else {
}
break;
}

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

var n__5616__auto__ = cljs.core.count(code_lines);
var i = (0);
while(true){
if((i < n__5616__auto__)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i),start_x,(start_y + (i * line_h)));

var G__25114 = (i + (1));
i = G__25114;
continue;
} else {
return null;
}
break;
}
} else {
if((phase < ((type_duration + highlight_duration) + exec_duration))){
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

var n__5616__auto___25115 = cljs.core.count(code_lines);
var i_25116 = (0);
while(true){
if((i_25116 < n__5616__auto___25115)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_25116),start_x,(start_y + (i_25116 * line_h)));

var G__25117 = (i_25116 + (1));
i_25116 = G__25117;
continue;
} else {
}
break;
}

var hint_alpha = Math.sin((((phase - type_duration) - highlight_duration) * 0.005));
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

ctx.fillText(key_text,(start_x + (80)),((start_y + (cljs.core.count(code_lines) * line_h)) + (10)));

return (ctx.globalAlpha = 1.0);
} else {
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

var n__5616__auto___25118 = cljs.core.count(code_lines);
var i_25119 = (0);
while(true){
if((i_25119 < n__5616__auto___25118)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code_lines,i_25119),start_x,(start_y + (i_25119 * line_h)));

var G__25120 = (i_25119 + (1));
i_25119 = G__25120;
continue;
} else {
}
break;
}

(ctx.fillStyle = new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.code.zenburn));

var n__5616__auto__ = cljs.core.count(result_lines);
var i = (0);
while(true){
if((i < n__5616__auto__)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(result_lines,i),start_x,(start_y + (((cljs.core.count(code_lines) + (1)) + i) * line_h)));

var G__25121 = (i + (1));
i = G__25121;
continue;
} else {
return null;
}
break;
}

}
}
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.code.js.map
