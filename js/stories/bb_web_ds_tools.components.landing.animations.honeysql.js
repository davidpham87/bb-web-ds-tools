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
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
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

var seq__25149_25210 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));
var chunk__25150_25211 = null;
var count__25151_25212 = (0);
var i__25152_25213 = (0);
while(true){
if((i__25152_25213 < count__25151_25212)){
var vec__25174_25214 = chunk__25150_25211.cljs$core$IIndexed$_nth$arity$2(null,i__25152_25213);
var i_25215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25174_25214,(0),null);
var text_25216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25174_25214,(1),null);
var color_25217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25174_25214,(2),null);
var theta_25218 = (angle + (i_25215 * ((Math.PI * (2)) / (3))));
var x_25219 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_25218)));
var y_25220 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_25218)));
(ctx.fillStyle = color_25217);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25216,x_25219,y_25220);


var G__25221 = seq__25149_25210;
var G__25222 = chunk__25150_25211;
var G__25223 = count__25151_25212;
var G__25224 = (i__25152_25213 + (1));
seq__25149_25210 = G__25221;
chunk__25150_25211 = G__25222;
count__25151_25212 = G__25223;
i__25152_25213 = G__25224;
continue;
} else {
var temp__5825__auto___25225 = cljs.core.seq(seq__25149_25210);
if(temp__5825__auto___25225){
var seq__25149_25226__$1 = temp__5825__auto___25225;
if(cljs.core.chunked_seq_QMARK_(seq__25149_25226__$1)){
var c__5548__auto___25227 = cljs.core.chunk_first(seq__25149_25226__$1);
var G__25228 = cljs.core.chunk_rest(seq__25149_25226__$1);
var G__25229 = c__5548__auto___25227;
var G__25230 = cljs.core.count(c__5548__auto___25227);
var G__25231 = (0);
seq__25149_25210 = G__25228;
chunk__25150_25211 = G__25229;
count__25151_25212 = G__25230;
i__25152_25213 = G__25231;
continue;
} else {
var vec__25194_25232 = cljs.core.first(seq__25149_25226__$1);
var i_25233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25194_25232,(0),null);
var text_25234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25194_25232,(1),null);
var color_25235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25194_25232,(2),null);
var theta_25236 = (angle + (i_25233 * ((Math.PI * (2)) / (3))));
var x_25237 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_25236)));
var y_25238 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_25236)));
(ctx.fillStyle = color_25235);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25234,x_25237,y_25238);


var G__25239 = cljs.core.next(seq__25149_25226__$1);
var G__25240 = null;
var G__25241 = (0);
var G__25242 = (0);
seq__25149_25210 = G__25239;
chunk__25150_25211 = G__25240;
count__25151_25212 = G__25241;
i__25152_25213 = G__25242;
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

var n__5616__auto___25243 = cljs.core.count(sql_lines);
var i_25244 = (0);
while(true){
if((i_25244 < n__5616__auto___25243)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_25244),start_x,(start_y + (i_25244 * line_h)));

var G__25245 = (i_25244 + (1));
i_25244 = G__25245;
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
