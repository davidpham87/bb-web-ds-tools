var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.honeysql.js");

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

var seq__25206_25222 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));
var chunk__25207_25223 = null;
var count__25208_25224 = (0);
var i__25209_25225 = (0);
while(true){
if((i__25209_25225 < count__25208_25224)){
var vec__25216_25226 = chunk__25207_25223.cljs$core$IIndexed$_nth$arity$2(null,i__25209_25225);
var i_25227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25216_25226,(0),null);
var text_25228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25216_25226,(1),null);
var color_25229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25216_25226,(2),null);
var theta_25230 = (angle + (i_25227 * ((Math.PI * (2)) / (3))));
var x_25231 = (cx + (orbit_r * Math.cos(theta_25230)));
var y_25232 = (cy + (orbit_r * Math.sin(theta_25230)));
(ctx.fillStyle = color_25229);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25228,x_25231,y_25232);


var G__25233 = seq__25206_25222;
var G__25234 = chunk__25207_25223;
var G__25235 = count__25208_25224;
var G__25236 = (i__25209_25225 + (1));
seq__25206_25222 = G__25233;
chunk__25207_25223 = G__25234;
count__25208_25224 = G__25235;
i__25209_25225 = G__25236;
continue;
} else {
var temp__5825__auto___25237 = cljs.core.seq(seq__25206_25222);
if(temp__5825__auto___25237){
var seq__25206_25238__$1 = temp__5825__auto___25237;
if(cljs.core.chunked_seq_QMARK_(seq__25206_25238__$1)){
var c__5548__auto___25239 = cljs.core.chunk_first(seq__25206_25238__$1);
var G__25240 = cljs.core.chunk_rest(seq__25206_25238__$1);
var G__25241 = c__5548__auto___25239;
var G__25242 = cljs.core.count(c__5548__auto___25239);
var G__25243 = (0);
seq__25206_25222 = G__25240;
chunk__25207_25223 = G__25241;
count__25208_25224 = G__25242;
i__25209_25225 = G__25243;
continue;
} else {
var vec__25219_25244 = cljs.core.first(seq__25206_25238__$1);
var i_25245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25219_25244,(0),null);
var text_25246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25219_25244,(1),null);
var color_25247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25219_25244,(2),null);
var theta_25248 = (angle + (i_25245 * ((Math.PI * (2)) / (3))));
var x_25249 = (cx + (orbit_r * Math.cos(theta_25248)));
var y_25250 = (cy + (orbit_r * Math.sin(theta_25248)));
(ctx.fillStyle = color_25247);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25246,x_25249,y_25250);


var G__25251 = cljs.core.next(seq__25206_25238__$1);
var G__25252 = null;
var G__25253 = (0);
var G__25254 = (0);
seq__25206_25222 = G__25251;
chunk__25207_25223 = G__25252;
count__25208_25224 = G__25253;
i__25209_25225 = G__25254;
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

var n__5616__auto___25255 = cljs.core.count(sql_lines);
var i_25256 = (0);
while(true){
if((i_25256 < n__5616__auto___25255)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_25256),start_x,(start_y + (i_25256 * line_h)));

var G__25257 = (i_25256 + (1));
i_25256 = G__25257;
continue;
} else {
}
break;
}

return (ctx.globalAlpha = 1.0);

}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.honeysql.js.map
