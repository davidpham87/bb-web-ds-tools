var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./bb_web_ds_tools.components.common.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.stories.common_stories.js");

goog.provide('bb_web_ds_tools.stories.common_stories');
goog.scope(function(){
  bb_web_ds_tools.stories.common_stories.goog$module$goog$object = goog.module.get('goog.object');
});
bb_web_ds_tools.stories.common_stories.meta_data = ({"title": "Common/Components"});
bb_web_ds_tools.stories.common_stories.ButtonDefault = (function bb_web_ds_tools$stories$common_stories$ButtonDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("Clicked");
})], null),"Click Me"], null));
});
bb_web_ds_tools.stories.common_stories.ButtonDisabled = (function bb_web_ds_tools$stories$common_stories$ButtonDisabled(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Disabled"], null));
});
bb_web_ds_tools.stories.common_stories.ButtonXS = (function bb_web_ds_tools$stories$common_stories$ButtonXS(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button_xs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return console.log("XS Clicked");
})], null),"Small Button"], null));
});
bb_web_ds_tools.stories.common_stories.CardDefault = (function bb_web_ds_tools$stories$common_stories$CardDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-64"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Card Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Card content goes here."], null)], null));
});
bb_web_ds_tools.stories.common_stories.TextAreaDefault = (function bb_web_ds_tools$stories$common_stories$TextAreaDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.textarea,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"Some text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type here..."], null)], null));
});
bb_web_ds_tools.stories.common_stories.PreBlockDefault = (function bb_web_ds_tools$stories$common_stories$PreBlockDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.pre_block,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),"Code block content"], null)], null));
});
bb_web_ds_tools.stories.common_stories.PageHeaderDefault = (function bb_web_ds_tools$stories$common_stories$PageHeaderDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.page_header,"Page Title"], null));
});
bb_web_ds_tools.stories.common_stories.LabelDefault = (function bb_web_ds_tools$stories$common_stories$LabelDefault(){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Input Label"], null));
});
bb_web_ds_tools.stories.common_stories.goog$module$goog$object.set(module.exports,"default",bb_web_ds_tools.stories.common_stories.meta_data);
Object.defineProperty(module.exports, "ButtonDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.ButtonDefault; } });
Object.defineProperty(module.exports, "ButtonDisabled", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.ButtonDisabled; } });
Object.defineProperty(module.exports, "ButtonXS", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.ButtonXS; } });
Object.defineProperty(module.exports, "CardDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.CardDefault; } });
Object.defineProperty(module.exports, "TextAreaDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.TextAreaDefault; } });
Object.defineProperty(module.exports, "PreBlockDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.PreBlockDefault; } });
Object.defineProperty(module.exports, "PageHeaderDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.PageHeaderDefault; } });
Object.defineProperty(module.exports, "LabelDefault", { enumerable: true, get: function() { return bb_web_ds_tools.stories.common_stories.LabelDefault; } });
//# sourceMappingURL=bb_web_ds_tools.stories.common_stories.js.map
