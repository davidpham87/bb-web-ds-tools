var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.components.landing.js");
require("./bb_web_ds_tools.components.landing.animations.js");
require("./bb_web_ds_tools.theme.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.views.landing.features.js");

goog.provide('bb_web_ds_tools.views.landing.features');
bb_web_ds_tools.views.landing.features.flow_steps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.animations.draw_fast_io,new cljs.core.Keyword(null,"title","title",636505583),"Zero I/O Friction",new cljs.core.Keyword(null,"desc","desc",2093485764),"Stop wrestling with file paths. Just paste your data and go."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.animations.draw_instant_charts,new cljs.core.Keyword(null,"title","title",636505583),"Instant Visuals",new cljs.core.Keyword(null,"desc","desc",2093485764),"Charts that look handwritten, generated in milliseconds."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),bb_web_ds_tools.components.landing.animations.draw_multi_runtime,new cljs.core.Keyword(null,"title","title",636505583),"Multi-Runtime",new cljs.core.Keyword(null,"desc","desc",2093485764),"Clojure, Python, R. Run them all. Simultaneously. Chaos awaits. We\n    wanted to add JavaScript, but we did not have 10 days."], null)], null);
/**
 * Renders features as full-screen scroll-snap sections.
 */
bb_web_ds_tools.views.landing.features.features_carousel = (function bb_web_ds_tools$views$landing$features$features_carousel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__25271){
var map__25272 = p__25271;
var map__25272__$1 = cljs.core.__destructure_map(map__25272);
var draw_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"title","title",636505583));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25272__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["min-h-screen snap-start flex flex-col items-center justify-center p-8 z-10 relative ",((cljs.core.even_QMARK_(idx))?"text-left":"text-right")].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full md:w-1/2 flex justify-center ",((cljs.core.odd_QMARK_(idx))?"md:order-last":null)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["relative p-8 rounded-3xl ",bb_web_ds_tools.theme.bg_card," border ",bb_web_ds_tools.theme.border_subtle," shadow-2xl transform hover:scale-105 transition-transform duration-500"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.landing.animated_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"draw-fn","draw-fn",-1155888705),draw_fn,new cljs.core.Keyword(null,"class","class",-2030961996),"w-64 h-64 mx-auto"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full md:w-1/2 space-y-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-4xl md:text-5xl font-bold ",bb_web_ds_tools.theme.text_primary," leading-tight"].join('')], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-xl md:text-2xl ",bb_web_ds_tools.theme.text_muted," leading-relaxed"].join('')], null),desc], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null));
}),bb_web_ds_tools.views.landing.features.flow_steps)], null);
});

//# sourceMappingURL=bb_web_ds_tools.views.landing.features.js.map
