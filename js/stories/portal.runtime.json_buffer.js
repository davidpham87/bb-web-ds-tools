var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("portal.runtime.json_buffer.js");

goog.provide('portal.runtime.json_buffer');
portal.runtime.json_buffer._shift = (function portal$runtime$json_buffer$_shift(this$){
return (this$.cljs$core$IFn$_invoke$arity$0 ? this$.cljs$core$IFn$_invoke$arity$0() : this$.call(null));
});
portal.runtime.json_buffer.shifter = (function portal$runtime$json_buffer$shifter(source){
var this$ = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"n","n",562130025),(0)], null));
return (function (){
var n = this$.n;
var result = (source[n]);
(this$.n = (n + (1)));

return result;
});
});
portal.runtime.json_buffer.__GT_reader = (function portal$runtime$json_buffer$__GT_reader(data){
return portal.runtime.json_buffer.shifter(JSON.parse(data));
});
portal.runtime.json_buffer.push_null = (function portal$runtime$json_buffer$push_null(buffer){
var G__36251 = buffer;
G__36251.push(null);

return G__36251;
});
portal.runtime.json_buffer.push_bool = (function portal$runtime$json_buffer$push_bool(buffer,value){
var G__36252 = buffer;
G__36252.push(value);

return G__36252;
});
portal.runtime.json_buffer.push_long = (function portal$runtime$json_buffer$push_long(buffer,value){
var G__36253 = buffer;
G__36253.push(value);

return G__36253;
});
portal.runtime.json_buffer.push_double = (function portal$runtime$json_buffer$push_double(buffer,value){
var G__36262 = buffer;
G__36262.push(value);

return G__36262;
});
portal.runtime.json_buffer.push_string = (function portal$runtime$json_buffer$push_string(buffer,value){
var G__36268 = buffer;
G__36268.push(value);

return G__36268;
});
portal.runtime.json_buffer.push_value = (function portal$runtime$json_buffer$push_value(buffer,value){
if((value == null)){
return portal.runtime.json_buffer.push_null(buffer);
} else {
if(cljs.core.boolean_QMARK_(value)){
return portal.runtime.json_buffer.push_bool(buffer,value);
} else {
if(cljs.core.int_QMARK_(value)){
return portal.runtime.json_buffer.push_long(buffer,value);
} else {
if(cljs.core.double_QMARK_(value)){
return portal.runtime.json_buffer.push_double(buffer,value);
} else {
if(typeof value === 'string'){
return portal.runtime.json_buffer.push_string(buffer,value);
} else {
return null;
}
}
}
}
}
});
portal.runtime.json_buffer.next_null = (function portal$runtime$json_buffer$next_null(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_bool = (function portal$runtime$json_buffer$next_bool(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_long = (function portal$runtime$json_buffer$next_long(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_double = (function portal$runtime$json_buffer$next_double(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_string = (function portal$runtime$json_buffer$next_string(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.next_value = (function portal$runtime$json_buffer$next_value(buffer){
return portal.runtime.json_buffer._shift(buffer);
});
portal.runtime.json_buffer.with_buffer = (function portal$runtime$json_buffer$with_buffer(f,value){
return JSON.stringify((function (){var G__36307 = (new Array());
var G__36308 = value;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__36307,G__36308) : f.call(null,G__36307,G__36308));
})());
});

//# sourceMappingURL=portal.runtime.json_buffer.js.map
