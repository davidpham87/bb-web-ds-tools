var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./borkdude.dynaload.js");
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

$CLJS.SHADOW_ENV.setLoaded("malli.sci.js");

goog.provide('malli.sci');
malli.sci.evaluator = (function malli$sci$evaluator(options,fail_BANG_){
var eval_string_STAR_ = borkdude.dynaload.__GT_LazyVar((function (){
if((typeof sci !== 'undefined') && (typeof sci.core !== 'undefined') && (typeof sci.core.eval_string_STAR_ !== 'undefined')){
return sci.core.eval_string_STAR_;
} else {
var temp__5823__auto__ = cljs.core.find(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5823__auto__)){
var e__27147__auto__ = temp__5823__auto__;
return cljs.core.val(e__27147__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.core","eval-string*","sci.core/eval-string*",2134763594,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("sci.core","eval-string*","sci.core/eval-string*",2134763594,null))," never required"].join('')));
}
}
}),null);
var init = borkdude.dynaload.__GT_LazyVar((function (){
if((typeof sci !== 'undefined') && (typeof sci.core !== 'undefined') && (typeof sci.core.init !== 'undefined')){
return sci.core.init;
} else {
var temp__5823__auto__ = cljs.core.find(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5823__auto__)){
var e__27147__auto__ = temp__5823__auto__;
return cljs.core.val(e__27147__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.core","init","sci.core/init",-622666095,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("sci.core","init","sci.core/init",-622666095,null))," never required"].join('')));
}
}
}),null);
var fork = borkdude.dynaload.__GT_LazyVar((function (){
if((typeof sci !== 'undefined') && (typeof sci.core !== 'undefined') && (typeof sci.core.fork !== 'undefined')){
return sci.core.fork;
} else {
var temp__5823__auto__ = cljs.core.find(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"default","default",-1987822328));
if(cljs.core.truth_(temp__5823__auto__)){
var e__27147__auto__ = temp__5823__auto__;
return cljs.core.val(e__27147__auto__);
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("sci.core","fork","sci.core/fork",-1806691042,null))," does not exist, ",cljs.core.namespace(new cljs.core.Symbol("sci.core","fork","sci.core/fork",-1806691042,null))," never required"].join('')));
}
}
}),null);
return (function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(eval_string_STAR_);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.deref(init);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.deref(fork);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var ctx = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(options) : init.call(null,options));
(eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(ctx,"(alias 'm 'malli.core)") : eval_string_STAR_.call(null,ctx,"(alias 'm 'malli.core)"));

return (function malli$sci$evaluator_$_eval(s){
var G__27319 = (fork.cljs$core$IFn$_invoke$arity$1 ? fork.cljs$core$IFn$_invoke$arity$1(ctx) : fork.call(null,ctx));
var G__27320 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
return (eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__27319,G__27320) : eval_string_STAR_.call(null,G__27319,G__27320));
});
} else {
return fail_BANG_;
}
});
});

//# sourceMappingURL=malli.sci.js.map
