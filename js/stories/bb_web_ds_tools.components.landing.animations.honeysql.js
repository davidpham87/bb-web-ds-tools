var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.components.landing.animations.common.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$language$json$monaco_contribution = {});
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
var module$shadow_js_shim_module$js_yaml=$CLJS.module$shadow_js_shim_module$js_yaml || ($CLJS.module$shadow_js_shim_module$js_yaml = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var edamame=$CLJS.edamame || ($CLJS.edamame = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var datascript=$CLJS.datascript || ($CLJS.datascript = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
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

var seq__25168_25201 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"SELECT",new cljs.core.Keyword("portal.colors","keyword","portal.colors/keyword",-1873282591).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"FROM",new cljs.core.Keyword("portal.colors","string","portal.colors/string",-1452455936).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"WHERE",new cljs.core.Keyword("portal.colors","number","portal.colors/number",2107558552).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn)], null)], null));
var chunk__25169_25202 = null;
var count__25170_25203 = (0);
var i__25171_25204 = (0);
while(true){
if((i__25171_25204 < count__25170_25203)){
var vec__25195_25205 = chunk__25169_25202.cljs$core$IIndexed$_nth$arity$2(null,i__25171_25204);
var i_25206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25195_25205,(0),null);
var text_25207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25195_25205,(1),null);
var color_25208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25195_25205,(2),null);
var theta_25209 = (angle + (i_25206 * ((Math.PI * (2)) / (3))));
var x_25210 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_25209)));
var y_25211 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_25209)));
(ctx.fillStyle = color_25208);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25207,x_25210,y_25211);


var G__25212 = seq__25168_25201;
var G__25213 = chunk__25169_25202;
var G__25214 = count__25170_25203;
var G__25215 = (i__25171_25204 + (1));
seq__25168_25201 = G__25212;
chunk__25169_25202 = G__25213;
count__25170_25203 = G__25214;
i__25171_25204 = G__25215;
continue;
} else {
var temp__5825__auto___25216 = cljs.core.seq(seq__25168_25201);
if(temp__5825__auto___25216){
var seq__25168_25217__$1 = temp__5825__auto___25216;
if(cljs.core.chunked_seq_QMARK_(seq__25168_25217__$1)){
var c__5548__auto___25218 = cljs.core.chunk_first(seq__25168_25217__$1);
var G__25219 = cljs.core.chunk_rest(seq__25168_25217__$1);
var G__25220 = c__5548__auto___25218;
var G__25221 = cljs.core.count(c__5548__auto___25218);
var G__25222 = (0);
seq__25168_25201 = G__25219;
chunk__25169_25202 = G__25220;
count__25170_25203 = G__25221;
i__25171_25204 = G__25222;
continue;
} else {
var vec__25198_25223 = cljs.core.first(seq__25168_25217__$1);
var i_25224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198_25223,(0),null);
var text_25225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198_25223,(1),null);
var color_25226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25198_25223,(2),null);
var theta_25227 = (angle + (i_25224 * ((Math.PI * (2)) / (3))));
var x_25228 = (cx + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.cos(theta_25227)));
var y_25229 = (cy + (bb_web_ds_tools.components.landing.animations.honeysql.orbit_r * Math.sin(theta_25227)));
(ctx.fillStyle = color_25226);

(ctx.font = "14px sans-serif");

ctx.fillText(text_25225,x_25228,y_25229);


var G__25230 = cljs.core.next(seq__25168_25217__$1);
var G__25231 = null;
var G__25232 = (0);
var G__25233 = (0);
seq__25168_25201 = G__25230;
chunk__25169_25202 = G__25231;
count__25170_25203 = G__25232;
i__25171_25204 = G__25233;
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

var n__5616__auto___25234 = cljs.core.count(sql_lines);
var i_25235 = (0);
while(true){
if((i_25235 < n__5616__auto___25234)){
ctx.fillText(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sql_lines,i_25235),start_x,(start_y + (i_25235 * line_h)));

var G__25236 = (i_25235 + (1));
i_25235 = G__25236;
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
