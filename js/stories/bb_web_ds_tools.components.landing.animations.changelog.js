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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.landing.animations.changelog.js");

goog.provide('bb_web_ds_tools.components.landing.animations.changelog');
bb_web_ds_tools.components.landing.animations.changelog.draw_log_entry = (function bb_web_ds_tools$components$landing$animations$changelog$draw_log_entry(ctx,i,scroll_y){
var y = (((200) + (i * (20))) - scroll_y);
if((((y > (0))) && ((y < (200))))){
return ctx.fillText(["- Update ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)," fixed stuff"].join(''),(20),y);
} else {
return null;
}
});
bb_web_ds_tools.components.landing.animations.changelog.draw_changelog = (function bb_web_ds_tools$components$landing$animations$changelog$draw_changelog(ctx,w,h,t){
bb_web_ds_tools.components.landing.animations.common.clear(ctx,w,h);

var scroll_y = cljs.core.mod((t * 0.05),(200));
(ctx.fillStyle = new cljs.core.Keyword("portal.colors","text","portal.colors/text",1967472969).cljs$core$IFn$_invoke$arity$1(bb_web_ds_tools.components.landing.animations.common.zenburn));

(ctx.font = "12px monospace");

(ctx.textAlign = "left");

var seq__25255 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__25256 = null;
var count__25257 = (0);
var i__25258 = (0);
while(true){
if((i__25258 < count__25257)){
var i = chunk__25256.cljs$core$IIndexed$_nth$arity$2(null,i__25258);
bb_web_ds_tools.components.landing.animations.changelog.draw_log_entry(ctx,i,scroll_y);


var G__25259 = seq__25255;
var G__25260 = chunk__25256;
var G__25261 = count__25257;
var G__25262 = (i__25258 + (1));
seq__25255 = G__25259;
chunk__25256 = G__25260;
count__25257 = G__25261;
i__25258 = G__25262;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__25255);
if(temp__5825__auto__){
var seq__25255__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25255__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__25255__$1);
var G__25263 = cljs.core.chunk_rest(seq__25255__$1);
var G__25264 = c__5548__auto__;
var G__25265 = cljs.core.count(c__5548__auto__);
var G__25266 = (0);
seq__25255 = G__25263;
chunk__25256 = G__25264;
count__25257 = G__25265;
i__25258 = G__25266;
continue;
} else {
var i = cljs.core.first(seq__25255__$1);
bb_web_ds_tools.components.landing.animations.changelog.draw_log_entry(ctx,i,scroll_y);


var G__25267 = cljs.core.next(seq__25255__$1);
var G__25268 = null;
var G__25269 = (0);
var G__25270 = (0);
seq__25255 = G__25267;
chunk__25256 = G__25268;
count__25257 = G__25269;
i__25258 = G__25270;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=bb_web_ds_tools.components.landing.animations.changelog.js.map
