var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.components.layout.js");
require("./reagent.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.stories.layout_stories.js");

goog.provide('bb_web_ds_tools.stories.layout_stories');
goog.scope(function(){
  bb_web_ds_tools.stories.layout_stories.goog$module$goog$object = goog.module.get('goog.object');
});
bb_web_ds_tools.stories.layout_stories.meta_data = ({"title": "Layout/Components"});
bb_web_ds_tools.stories.layout_stories.PageContainerDefault = (function bb_web_ds_tools$stories$layout_stories$PageContainerDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.page_container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Page Container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This component takes full height and sets the background color."], null)], null));
});
bb_web_ds_tools.stories.layout_stories.ContainerDefault = (function bb_web_ds_tools$stories$layout_stories$ContainerDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.container,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#4f4f4f] text-white p-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Container"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Centered container with horizontal padding."], null)], null));
});
bb_web_ds_tools.stories.layout_stories.SectionDefault = (function bb_web_ds_tools$stories$layout_stories$SectionDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.section,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-[#2f2f2f] text-white border border-gray-500"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Section"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A generic section with vertical padding."], null)], null));
});
bb_web_ds_tools.stories.layout_stories.GridDefault = (function bb_web_ds_tools$stories$layout_stories$GridDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.grid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid-cols-3 gap-4 p-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-red-500 p-4"], null),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-green-500 p-4"], null),"2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-blue-500 p-4"], null),"3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-yellow-500 p-4"], null),"4"], null)], null));
});
bb_web_ds_tools.stories.layout_stories.FlexRowDefault = (function bb_web_ds_tools$stories$layout_stories$FlexRowDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gap-4 p-4 bg-[#2f2f2f]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-red-500 p-4"], null),"Row Item 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-blue-500 p-4"], null),"Row Item 2"], null)], null));
});
bb_web_ds_tools.stories.layout_stories.FlexColDefault = (function bb_web_ds_tools$stories$layout_stories$FlexColDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gap-4 p-4 bg-[#2f2f2f]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-red-500 p-4"], null),"Col Item 1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-blue-500 p-4"], null),"Col Item 2"], null)], null));
});
bb_web_ds_tools.stories.layout_stories.SidebarDefault = (function bb_web_ds_tools$stories$layout_stories$SidebarDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-64 border border-gray-500"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.sidebar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"static h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4 text-white"], null),"Sidebar Content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.main,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4 text-white"], null),"Main Content"], null)], null)], null));
});
bb_web_ds_tools.stories.layout_stories.RowColDefault = (function bb_web_ds_tools$stories$layout_stories$RowColDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-red-500 p-4 text-white"], null),"Col 1/2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 bg-blue-500 p-4 text-white"], null),"Col 1/2"], null)], null)], null));
});
bb_web_ds_tools.stories.layout_stories.goog$module$goog$object.set(module.exports,"default",bb_web_ds_tools.stories.layout_stories.meta_data);
Object.defineProperty(module.exports, "PageContainerDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.PageContainerDefault; } });
Object.defineProperty(module.exports, "ContainerDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.ContainerDefault; } });
Object.defineProperty(module.exports, "SectionDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.SectionDefault; } });
Object.defineProperty(module.exports, "GridDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.GridDefault; } });
Object.defineProperty(module.exports, "FlexRowDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.FlexRowDefault; } });
Object.defineProperty(module.exports, "FlexColDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.FlexColDefault; } });
Object.defineProperty(module.exports, "SidebarDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.SidebarDefault; } });
Object.defineProperty(module.exports, "RowColDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.layout_stories.RowColDefault; } });
//# sourceMappingURL=bb_web_ds_tools.stories.layout_stories.js.map
