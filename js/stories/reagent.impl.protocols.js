var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var re_frame=$CLJS.re_frame || ($CLJS.re_frame = {});
var module$shadow_js_shim_module$react=$CLJS.module$shadow_js_shim_module$react || ($CLJS.module$shadow_js_shim_module$react = {});
var reitit=$CLJS.reitit || ($CLJS.reitit = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var bb_web_ds_tools=$CLJS.bb_web_ds_tools || ($CLJS.bb_web_ds_tools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var module$shadow_js_shim_module$papaparse=$CLJS.module$shadow_js_shim_module$papaparse || ($CLJS.module$shadow_js_shim_module$papaparse = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var module$shadow_js_shim_module$react_dom=$CLJS.module$shadow_js_shim_module$react_dom || ($CLJS.module$shadow_js_shim_module$react_dom = {});
var meta_merge=$CLJS.meta_merge || ($CLJS.meta_merge = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var reagent=$CLJS.reagent || ($CLJS.reagent = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("reagent.impl.protocols.js");

goog.provide('reagent.impl.protocols');

/**
 * @interface
 */
reagent.impl.protocols.Compiler = function(){};

var reagent$impl$protocols$Compiler$get_id$dyn_21791 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reagent.impl.protocols.get_id[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (reagent.impl.protocols.get_id["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Compiler.get-id",this$);
}
}
});
reagent.impl.protocols.get_id = (function reagent$impl$protocols$get_id(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$get_id$arity$1 == null)))))){
return this$.reagent$impl$protocols$Compiler$get_id$arity$1(this$);
} else {
return reagent$impl$protocols$Compiler$get_id$dyn_21791(this$);
}
});

var reagent$impl$protocols$Compiler$parse_tag$dyn_21792 = (function (this$,tag_name,tag_value){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reagent.impl.protocols.parse_tag[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag_name,tag_value) : m__5374__auto__.call(null,this$,tag_name,tag_value));
} else {
var m__5372__auto__ = (reagent.impl.protocols.parse_tag["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(this$,tag_name,tag_value) : m__5372__auto__.call(null,this$,tag_name,tag_value));
} else {
throw cljs.core.missing_protocol("Compiler.parse-tag",this$);
}
}
});
reagent.impl.protocols.parse_tag = (function reagent$impl$protocols$parse_tag(this$,tag_name,tag_value){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$parse_tag$arity$3 == null)))))){
return this$.reagent$impl$protocols$Compiler$parse_tag$arity$3(this$,tag_name,tag_value);
} else {
return reagent$impl$protocols$Compiler$parse_tag$dyn_21792(this$,tag_name,tag_value);
}
});

var reagent$impl$protocols$Compiler$as_element$dyn_21793 = (function (this$,x){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reagent.impl.protocols.as_element[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5374__auto__.call(null,this$,x));
} else {
var m__5372__auto__ = (reagent.impl.protocols.as_element["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5372__auto__.call(null,this$,x));
} else {
throw cljs.core.missing_protocol("Compiler.as-element",this$);
}
}
});
reagent.impl.protocols.as_element = (function reagent$impl$protocols$as_element(this$,x){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$as_element$arity$2 == null)))))){
return this$.reagent$impl$protocols$Compiler$as_element$arity$2(this$,x);
} else {
return reagent$impl$protocols$Compiler$as_element$dyn_21793(this$,x);
}
});

var reagent$impl$protocols$Compiler$make_element$dyn_21794 = (function (this$,argv,component,jsprops,first_child){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reagent.impl.protocols.make_element[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$5(this$,argv,component,jsprops,first_child) : m__5374__auto__.call(null,this$,argv,component,jsprops,first_child));
} else {
var m__5372__auto__ = (reagent.impl.protocols.make_element["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$5(this$,argv,component,jsprops,first_child) : m__5372__auto__.call(null,this$,argv,component,jsprops,first_child));
} else {
throw cljs.core.missing_protocol("Compiler.make-element",this$);
}
}
});
reagent.impl.protocols.make_element = (function reagent$impl$protocols$make_element(this$,argv,component,jsprops,first_child){
if((((!((this$ == null)))) && ((!((this$.reagent$impl$protocols$Compiler$make_element$arity$5 == null)))))){
return this$.reagent$impl$protocols$Compiler$make_element$arity$5(this$,argv,component,jsprops,first_child);
} else {
return reagent$impl$protocols$Compiler$make_element$dyn_21794(this$,argv,component,jsprops,first_child);
}
});


//# sourceMappingURL=reagent.impl.protocols.js.map
