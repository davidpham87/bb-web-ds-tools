var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.test.check.random.longs.bit_count_impl.js");
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

$CLJS.SHADOW_ENV.setLoaded("clojure.test.check.random.longs.js");

goog.provide('clojure.test.check.random.longs');
goog.scope(function(){
  clojure.test.check.random.longs.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});
clojure.test.check.random.longs.unsigned_bit_shift_right = (function clojure$test$check$random$longs$unsigned_bit_shift_right(x,n){
return x.shiftRightUnsigned(n);
});
clojure.test.check.random.longs._PLUS_ = (function clojure$test$check$random$longs$_PLUS_(x,y){
return x.add(y);
});
clojure.test.check.random.longs._STAR_ = (function clojure$test$check$random$longs$_STAR_(x,y){
var a48 = (x.high_ >>> (16));
var a32 = (x.high_ & (65535));
var a16 = (x.low_ >>> (16));
var a00 = (x.low_ & (65535));
var b48 = (y.high_ >>> (16));
var b32 = (y.high_ & (65535));
var b16 = (y.low_ >>> (16));
var b00 = (y.low_ & (65535));
var arr = [(0),(0),(0),(0)];
(arr[(0)] = (a00 * b00));

(arr[(1)] = ((arr[(0)]) >>> (16)));

(arr[(0)] = ((arr[(0)]) & (65535)));

(arr[(1)] = ((arr[(1)]) + (a16 * b00)));

(arr[(2)] = ((arr[(1)]) >>> (16)));

(arr[(1)] = ((arr[(1)]) & (65535)));

(arr[(1)] = ((arr[(1)]) + (a00 * b16)));

(arr[(2)] = ((arr[(2)]) + ((arr[(1)]) >>> (16))));

(arr[(1)] = ((arr[(1)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a32 * b00)));

(arr[(3)] = ((arr[(2)]) >>> (16)));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a16 * b16)));

(arr[(3)] = ((arr[(3)]) + ((arr[(2)]) >>> (16))));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(2)] = ((arr[(2)]) + (a00 * b32)));

(arr[(3)] = ((arr[(3)]) + ((arr[(2)]) >>> (16))));

(arr[(2)] = ((arr[(2)]) & (65535)));

(arr[(3)] = (((((arr[(3)]) + (a48 * b00)) + (a32 * b16)) + (a16 * b32)) + (a00 * b48)));

(arr[(3)] = ((arr[(3)]) & (65535)));

return clojure.test.check.random.longs.goog$module$goog$math$Long.fromBits((((arr[(1)]) << (16)) | (arr[(0)])),(((arr[(3)]) << (16)) | (arr[(2)])));
});
clojure.test.check.random.longs.bit_xor = (function clojure$test$check$random$longs$bit_xor(x,y){
return x.xor(y);
});
clojure.test.check.random.longs.bit_or = (function clojure$test$check$random$longs$bit_or(x,y){
return x.or(y);
});
clojure.test.check.random.longs.from_string = (function clojure$test$check$random$longs$from_string(s,radix){
return clojure.test.check.random.longs.goog$module$goog$math$Long.fromString(s,radix);
});
clojure.test.check.random.longs.from_number = (function clojure$test$check$random$longs$from_number(x){
return clojure.test.check.random.longs.goog$module$goog$math$Long.fromNumber(x);
});
/**
 * Coerces to long, or returns nil if not possible.
 */
clojure.test.check.random.longs.__GT_long = (function clojure$test$check$random$longs$__GT_long(x){
if(typeof x === 'number'){
return clojure.test.check.random.longs.goog$module$goog$math$Long.fromNumber(x);
} else {
if((x instanceof clojure.test.check.random.longs.goog$module$goog$math$Long)){
return x;
} else {
return null;
}
}
});
clojure.test.check.random.longs.ONE = clojure.test.check.random.longs.goog$module$goog$math$Long.getOne();
clojure.test.check.random.longs.bit_count = clojure.test.check.random.longs.bit_count_impl.bit_count;

//# sourceMappingURL=clojure.test.check.random.longs.js.map
