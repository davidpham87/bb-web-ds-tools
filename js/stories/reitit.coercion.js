var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.walk.js");
require("./reitit.impl.js");
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
var module$shadow_js_shim_module$$js_joda$core=$CLJS.module$shadow_js_shim_module$$js_joda$core || ($CLJS.module$shadow_js_shim_module$$js_joda$core = {});
var portal=$CLJS.portal || ($CLJS.portal = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$python$python_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$r$r_contribution = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var fork=$CLJS.fork || ($CLJS.fork = {});
var module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api=$CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api || ($CLJS.module$shadow_js_shim_module$monaco_editor$esm$vs$editor$editor_api = {});

$CLJS.SHADOW_ENV.setLoaded("reitit.coercion.js");

goog.provide('reitit.coercion');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

var reitit$coercion$Coercion$_get_name$dyn_36414 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._get_name[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (reitit.coercion._get_name["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-name",this$);
}
}
});
/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_name$dyn_36414(this$);
}
});

var reitit$coercion$Coercion$_get_options$dyn_36417 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._get_options[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (reitit.coercion._get_options["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-options",this$);
}
}
});
/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null)))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
return reitit$coercion$Coercion$_get_options$dyn_36417(this$);
}
});

var reitit$coercion$Coercion$_get_apidocs$dyn_36418 = (function (this$,specification,data){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5374__auto__.call(null,this$,specification,data));
} else {
var m__5372__auto__ = (reitit.coercion._get_apidocs["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__5372__auto__.call(null,this$,specification,data));
} else {
throw cljs.core.missing_protocol("Coercion.-get-apidocs",this$);
}
}
});
/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
return reitit$coercion$Coercion$_get_apidocs$dyn_36418(this$,specification,data);
}
});

var reitit$coercion$Coercion$_get_model_apidocs$dyn_36420 = (function (this$,specification,model,options){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._get_model_apidocs[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5374__auto__.call(null,this$,specification,model,options));
} else {
var m__5372__auto__ = (reitit.coercion._get_model_apidocs["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(this$,specification,model,options) : m__5372__auto__.call(null,this$,specification,model,options));
} else {
throw cljs.core.missing_protocol("Coercion.-get-model-apidocs",this$);
}
}
});
/**
 * Convert model into a format that can be used in api docs
 */
reitit.coercion._get_model_apidocs = (function reitit$coercion$_get_model_apidocs(this$,specification,model,options){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4 == null)))))){
return this$.reitit$coercion$Coercion$_get_model_apidocs$arity$4(this$,specification,model,options);
} else {
return reitit$coercion$Coercion$_get_model_apidocs$dyn_36420(this$,specification,model,options);
}
});

var reitit$coercion$Coercion$_compile_model$dyn_36421 = (function (this$,model,name){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5374__auto__.call(null,this$,model,name));
} else {
var m__5372__auto__ = (reitit.coercion._compile_model["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__5372__auto__.call(null,this$,model,name));
} else {
throw cljs.core.missing_protocol("Coercion.-compile-model",this$);
}
}
});
/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
return reitit$coercion$Coercion$_compile_model$dyn_36421(this$,model,name);
}
});

var reitit$coercion$Coercion$_open_model$dyn_36425 = (function (this$,model){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._open_model[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5374__auto__.call(null,this$,model));
} else {
var m__5372__auto__ = (reitit.coercion._open_model["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5372__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-open-model",this$);
}
}
});
/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_open_model$dyn_36425(this$,model);
}
});

var reitit$coercion$Coercion$_encode_error$dyn_36426 = (function (this$,error){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5374__auto__.call(null,this$,error));
} else {
var m__5372__auto__ = (reitit.coercion._encode_error["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__5372__auto__.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("Coercion.-encode-error",this$);
}
}
});
/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
return reitit$coercion$Coercion$_encode_error$dyn_36426(this$,error);
}
});

var reitit$coercion$Coercion$_request_coercer$dyn_36427 = (function (this$,type,model){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5374__auto__.call(null,this$,type,model));
} else {
var m__5372__auto__ = (reitit.coercion._request_coercer["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__5372__auto__.call(null,this$,type,model));
} else {
throw cljs.core.missing_protocol("Coercion.-request-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null)))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
return reitit$coercion$Coercion$_request_coercer$dyn_36427(this$,type,model);
}
});

var reitit$coercion$Coercion$_response_coercer$dyn_36428 = (function (this$,model){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5374__auto__.call(null,this$,model));
} else {
var m__5372__auto__ = (reitit.coercion._response_coercer["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__5372__auto__.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-response-coercer",this$);
}
}
});
/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null)))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
return reitit$coercion$Coercion$_response_coercer$dyn_36428(this$,model);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k36211,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__36221 = k36211;
switch (G__36221) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36211,else__5326__auto__);

}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__36227){
var vec__36228 = p__36227;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36228,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36210){
var self__ = this;
var G__36210__$1 = this;
return (new cljs.core.RecordIter((0),G__36210__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36212,other36213){
var self__ = this;
var this36212__$1 = this;
return (((!((other36213 == null)))) && ((((this36212__$1.constructor === other36213.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36212__$1.__extmap,other36213.__extmap)))));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k36211){
var self__ = this;
var this__5330__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k36211);
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__36210){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__36235 = cljs.core.keyword_identical_QMARK_;
var expr__36236 = k__5332__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__36210),null));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__36210){
var self__ = this;
var this__5322__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__36210,self__.__extmap,self__.__hash));
}));

(reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(reitit.coercion.CoercionError.cljs$lang$type = true);

(reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
}));

(reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"reitit.coercion/CoercionError");
}));

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__36214){
var extmap__5365__auto__ = (function (){var G__36239 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__36214);
if(cljs.core.record_QMARK_(G__36214)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36239);
} else {
return G__36239;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty(extmap__5365__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k36243,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__36249 = k36243;
var G__36249__$1 = (((G__36249 instanceof cljs.core.Keyword))?G__36249.fqn:null);
switch (G__36249__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36243,else__5326__auto__);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__36252){
var vec__36253 = p__36252;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36253,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36253,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"style","style",-496642736),self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36242){
var self__ = this;
var G__36242__$1 = this;
return (new cljs.core.RecordIter((0),G__36242__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36244,other36245){
var self__ = this;
var this36244__$1 = this;
return (((!((other36245 == null)))) && ((((this36244__$1.constructor === other36245.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36244__$1.in,other36245.in)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36244__$1.style,other36245.style)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36244__$1.keywordize_QMARK_,other36245.keywordize_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36244__$1.open_QMARK_,other36245.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36244__$1.__extmap,other36245.__extmap)))))))))))));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k36243){
var self__ = this;
var this__5330__auto____$1 = this;
var G__36275 = k36243;
var G__36275__$1 = (((G__36275 instanceof cljs.core.Keyword))?G__36275.fqn:null);
switch (G__36275__$1) {
case "in":
case "style":
case "keywordize?":
case "open?":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36243);

}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__36242){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__36276 = cljs.core.keyword_identical_QMARK_;
var expr__36277 = k__5332__auto__;
if(cljs.core.truth_((pred__36276.cljs$core$IFn$_invoke$arity$2 ? pred__36276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__36277) : pred__36276.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__36277)))){
return (new reitit.coercion.ParameterCoercion(G__36242,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36276.cljs$core$IFn$_invoke$arity$2 ? pred__36276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"style","style",-496642736),expr__36277) : pred__36276.call(null,new cljs.core.Keyword(null,"style","style",-496642736),expr__36277)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__36242,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36276.cljs$core$IFn$_invoke$arity$2 ? pred__36276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__36277) : pred__36276.call(null,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),expr__36277)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__36242,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36276.cljs$core$IFn$_invoke$arity$2 ? pred__36276.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open?","open?",1238443125),expr__36277) : pred__36276.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__36277)))){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__36242,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__36242),null));
}
}
}
}
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"style","style",-496642736),self__.style,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_,null))], null),self__.__extmap));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__36242){
var self__ = this;
var this__5322__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__36242,self__.__extmap,self__.__hash));
}));

(reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"keywordize?","keywordize?",1406224615,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(reitit.coercion.ParameterCoercion.cljs$lang$type = true);

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
}));

(reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"reitit.coercion/ParameterCoercion");
}));

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__36246){
var extmap__5365__auto__ = (function (){var G__36279 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36246,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912),new cljs.core.Keyword(null,"open?","open?",1238443125)], 0));
if(cljs.core.record_QMARK_(G__36246)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36279);
} else {
return G__36279;
}
})();
return (new reitit.coercion.ParameterCoercion(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__36246),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(G__36246),new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912).cljs$core$IFn$_invoke$arity$1(G__36246),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__36246),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"query","query",-1288509510),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"body","body",-2049205669),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"body-params","body-params",-369749490),new cljs.core.Keyword(null,"body","body",-2049205669),false,false),new cljs.core.Keyword(null,"form","form",-1624062471),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"header","header",119441134),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"path","path",-188191168),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"string","string",-1989541586),true,true),new cljs.core.Keyword(null,"fragment","fragment",826775688),reitit.coercion.__GT_ParameterCoercion(new cljs.core.Keyword(null,"fragment","fragment",826775688),new cljs.core.Keyword(null,"string","string",-1989541586),true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?["Request coercion failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))].join(''):"Request coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","request-coercion","reitit.coercion/request-coercion",47377205)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),in$], null)),new cljs.core.Keyword(null,"request","request",1772954723),request)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response,serialize_failed_result){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(serialize_failed_result)?["Response coercion failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))].join(''):"Response coercion failed"),cljs.core.persistent_BANG_(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3((function (){var $ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,$,result);
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","response-coercion","reitit.coercion/response-coercion",-1532049609)),new cljs.core.Keyword(null,"coercion","coercion",904067157),coercion),new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"body","body",-2049205669)], null)),new cljs.core.Keyword(null,"request","request",1772954723),request),new cljs.core.Keyword(null,"response","response",-1068424192),response)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","request","muuntaja/request",-1616403792).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion._identity_coercer = (function reitit$coercion$_identity_coercer(value,_format){
return value;
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__36300){
var map__36301 = p__36300;
var map__36301__$1 = cljs.core.__destructure_map(map__36301);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36301__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36301__$1,new cljs.core.Keyword("reitit.coercion","parameter-coercion","reitit.coercion/parameter-coercion",-1825124100),reitit.coercion.default_parameter_coercion);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36301__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
var skip = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36301__$1,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),cljs.core.PersistentHashSet.EMPTY);
if(cljs.core.truth_(coercion)){
var temp__5825__auto__ = (parameter_coercion.cljs$core$IFn$_invoke$arity$1 ? parameter_coercion.cljs$core$IFn$_invoke$arity$1(type) : parameter_coercion.call(null,type));
if(cljs.core.truth_(temp__5825__auto__)){
var map__36302 = temp__5825__auto__;
var map__36302__$1 = cljs.core.__destructure_map(map__36302);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"keywordize?","keywordize?",-234306912));
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36302__$1,new cljs.core.Keyword(null,"style","style",-496642736));
if(cljs.core.truth_((skip.cljs$core$IFn$_invoke$arity$1 ? skip.cljs$core$IFn$_invoke$arity$1(style) : skip.call(null,style)))){
return null;
} else {
var transform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var __GT_open = (cljs.core.truth_(open_QMARK_)?(function (p1__36296_SHARP_){
return reitit.coercion._open_model(coercion,p1__36296_SHARP_);
}):cljs.core.identity);
var coercer = reitit.coercion._request_coercer(coercion,style,(__GT_open.cljs$core$IFn$_invoke$arity$1 ? __GT_open.cljs$core$IFn$_invoke$arity$1(model) : __GT_open.call(null,model)));
if(cljs.core.truth_(coercer)){
return (function (request){
var value = transform(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.get_default = (function reitit$coercion$get_default(request_or_response){
var or__5025__auto__ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(request_or_response));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__36303 = request_or_response;
var G__36303__$1 = (((G__36303 == null))?null:new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__36303));
if((G__36303__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),G__36303__$1);
}
}
});
reitit.coercion.content_request_coercer = (function reitit$coercion$content_request_coercer(coercion,p__36305,p__36306){
var map__36307 = p__36305;
var map__36307__$1 = cljs.core.__destructure_map(map__36307);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36307__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36307__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__36308 = p__36306;
var map__36308__$1 = cljs.core.__destructure_map(map__36308);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36308__$1,new cljs.core.Keyword("reitit.coercion","extract-request-format","reitit.coercion/extract-request-format",-1687953607),reitit.coercion.extract_request_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36308__$1,new cljs.core.Keyword("reitit.coercion","serialize-failed-result","reitit.coercion/serialize-failed-result",786287704));
if(cljs.core.truth_(coercion)){
var in$ = new cljs.core.Keyword(null,"body-params","body-params",-369749490);
var format__GT_coercer = (function (){var G__36309 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),body)], null)], null):null),(function (){var iter__5503__auto__ = (function reitit$coercion$content_request_coercer_$_iter__36310(s__36311){
return (new cljs.core.LazySeq(null,(function (){
var s__36311__$1 = s__36311;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36311__$1);
if(temp__5825__auto__){
var s__36311__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36311__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36311__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36313 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36312 = (0);
while(true){
if((i__36312 < size__5502__auto__)){
var vec__36314 = cljs.core._nth(c__5501__auto__,i__36312);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(0),null);
var map__36317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36314,(1),null);
var map__36317__$1 = cljs.core.__destructure_map(map__36317);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36317__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__36313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null));

var G__36449 = (i__36312 + (1));
i__36312 = G__36449;
continue;
} else {
var G__36450 = (i__36312 + (1));
i__36312 = G__36450;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36313),reitit$coercion$content_request_coercer_$_iter__36310(cljs.core.chunk_rest(s__36311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36313),null);
}
} else {
var vec__36320 = cljs.core.first(s__36311__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36320,(0),null);
var map__36323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36320,(1),null);
var map__36323__$1 = cljs.core.__destructure_map(map__36323);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._request_coercer(coercion,new cljs.core.Keyword(null,"body","body",-2049205669),schema)], null),reitit$coercion$content_request_coercer_$_iter__36310(cljs.core.rest(s__36311__$2)));
} else {
var G__36451 = cljs.core.rest(s__36311__$2);
s__36311__$1 = G__36451;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(content);
})());
var G__36309__$1 = (((G__36309 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__36309));
var G__36309__$2 = (((G__36309__$1 == null))?null:cljs.core.seq(G__36309__$1));
if((G__36309__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36309__$2);
}
})();
if(cljs.core.truth_(format__GT_coercer)){
return (function (request){
var value = in$.cljs$core$IFn$_invoke$arity$1(request);
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var coercer = (function (){var or__5025__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null,format));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return reitit.coercion._identity_coercer;
}
}
})();
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("muuntaja","response","muuntaja/response",-1772248613).cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,p__36338,p__36339){
var map__36340 = p__36338;
var map__36340__$1 = cljs.core.__destructure_map(map__36340);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36340__$1,new cljs.core.Keyword(null,"content","content",15833224));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36340__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var map__36341 = p__36339;
var map__36341__$1 = cljs.core.__destructure_map(map__36341);
var extract_response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36341__$1,new cljs.core.Keyword(null,"extract-response-format","extract-response-format",-303544140),reitit.coercion.extract_response_format_default);
var serialize_failed_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36341__$1,new cljs.core.Keyword(null,"serialize-failed-result","serialize-failed-result",391398953));
if(cljs.core.truth_(coercion)){
var format__GT_coercer = (function (){var G__36342 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(body)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion._response_coercer(coercion,body)], null)], null):null),(function (){var iter__5503__auto__ = (function reitit$coercion$response_coercer_$_iter__36346(s__36347){
return (new cljs.core.LazySeq(null,(function (){
var s__36347__$1 = s__36347;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36347__$1);
if(temp__5825__auto__){
var s__36347__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36347__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36347__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36349 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36348 = (0);
while(true){
if((i__36348 < size__5502__auto__)){
var vec__36350 = cljs.core._nth(c__5501__auto__,i__36348);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36350,(0),null);
var map__36353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36350,(1),null);
var map__36353__$1 = cljs.core.__destructure_map(map__36353);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36353__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
cljs.core.chunk_append(b__36349,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null));

var G__36453 = (i__36348 + (1));
i__36348 = G__36453;
continue;
} else {
var G__36454 = (i__36348 + (1));
i__36348 = G__36454;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36349),reitit$coercion$response_coercer_$_iter__36346(cljs.core.chunk_rest(s__36347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36349),null);
}
} else {
var vec__36354 = cljs.core.first(s__36347__$2);
var format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36354,(0),null);
var map__36357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36354,(1),null);
var map__36357__$1 = cljs.core.__destructure_map(map__36357);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36357__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_(schema)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format,reitit.coercion._response_coercer(coercion,schema)], null),reitit$coercion$response_coercer_$_iter__36346(cljs.core.rest(s__36347__$2)));
} else {
var G__36455 = cljs.core.rest(s__36347__$2);
s__36347__$1 = G__36455;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(content);
})());
var G__36342__$1 = (((G__36342 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__36342));
var G__36342__$2 = (((G__36342__$1 == null))?null:cljs.core.seq(G__36342__$1));
if((G__36342__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36342__$2);
}
})();
if(cljs.core.truth_(format__GT_coercer)){
return (function (request,response){
var format = (extract_response_format.cljs$core$IFn$_invoke$arity$2 ? extract_response_format.cljs$core$IFn$_invoke$arity$2(request,response) : extract_response_format.call(null,request,response));
var value = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var coercer = (function (){var or__5025__auto__ = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(format) : format__GT_coercer.call(null,format));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (format__GT_coercer.cljs$core$IFn$_invoke$arity$1 ? format__GT_coercer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : format__GT_coercer.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return reitit.coercion._identity_coercer;
}
}
})();
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(reitit.coercion.error_QMARK_(result)){
return reitit.coercion.response_coercion_failed_BANG_(result,coercion,value,request,response,serialize_failed_result);
} else {
return result;
}
});
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error(new cljs.core.Keyword(null,"coercion","coercion",904067157).cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"response","response",-1068424192)], 0)),new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv((function (acc,k,coercer){
return reitit.impl.fast_assoc(acc,k,(coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(request) : coercer.call(null,request)));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5823__auto__ = (function (){var or__5025__auto__ = (function (){var G__36359 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__36359) : coercers.call(null,G__36359));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328)) : coercers.call(null,new cljs.core.Keyword(null,"default","default",-1987822328)));
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var coercer = temp__5823__auto__;
return reitit.impl.fast_assoc(response,new cljs.core.Keyword(null,"body","body",-2049205669),(coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(request,response) : coercer.call(null,request,response)));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(var_args){
var G__36361 = arguments.length;
switch (G__36361) {
case 3:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3 = (function (coercion,parameters,opts){
var G__36362 = (function (){var iter__5503__auto__ = (function reitit$coercion$iter__36363(s__36364){
return (new cljs.core.LazySeq(null,(function (){
var s__36364__$1 = s__36364;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36364__$1);
if(temp__5825__auto__){
var s__36364__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36364__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36364__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36366 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36365 = (0);
while(true){
if((i__36365 < size__5502__auto__)){
var vec__36369 = cljs.core._nth(c__5501__auto__,i__36365);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36369,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__36366,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null));

var G__36460 = (i__36365 + (1));
i__36365 = G__36460;
continue;
} else {
var G__36461 = (i__36365 + (1));
i__36365 = G__36461;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36366),reitit$coercion$iter__36363(cljs.core.chunk_rest(s__36364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36366),null);
}
} else {
var vec__36372 = cljs.core.first(s__36364__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36372,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null),reitit$coercion$iter__36363(cljs.core.rest(s__36364__$2)));
} else {
var G__36462 = cljs.core.rest(s__36364__$2);
s__36364__$1 = G__36462;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(parameters);
})();
var G__36362__$1 = (((G__36362 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__36362));
var G__36362__$2 = (((G__36362__$1 == null))?null:cljs.core.seq(G__36362__$1));
if((G__36362__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36362__$2);
}
}));

(reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$4 = (function (coercion,parameters,route_request,opts){
var crc = (cljs.core.truth_(route_request)?(function (){var G__36387 = reitit.coercion.content_request_coercer(coercion,route_request,opts);
if((G__36387 == null)){
return null;
} else {
return (new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"request","request",1772954723),G__36387],null));
}
})():null);
var rcs = reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters,(function (){var G__36388 = opts;
if(cljs.core.truth_(route_request)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36388,new cljs.core.Keyword("reitit.coercion","skip","reitit.coercion/skip",-2123160930),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null));
} else {
return G__36388;
}
})());
if(cljs.core.truth_((function (){var and__5023__auto__ = crc;
if(cljs.core.truth_(and__5023__auto__)){
return rcs;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(crc,cljs.core.vec(rcs));
} else {
var or__5025__auto__ = crc;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rcs;
}
}
}));

(reitit.coercion.request_coercers.cljs$lang$maxFixedArity = 4);

reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
var G__36389 = (function (){var iter__5503__auto__ = (function reitit$coercion$response_coercers_$_iter__36390(s__36391){
return (new cljs.core.LazySeq(null,(function (){
var s__36391__$1 = s__36391;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36391__$1);
if(temp__5825__auto__){
var s__36391__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36391__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36391__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36393 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36392 = (0);
while(true){
if((i__36392 < size__5502__auto__)){
var vec__36396 = cljs.core._nth(c__5501__auto__,i__36392);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36396,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36396,(1),null);
cljs.core.chunk_append(b__36393,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,model,opts)], null));

var G__36464 = (i__36392 + (1));
i__36392 = G__36464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36393),reitit$coercion$response_coercers_$_iter__36390(cljs.core.chunk_rest(s__36391__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36393),null);
}
} else {
var vec__36400 = cljs.core.first(s__36391__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,(0),null);
var model = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,model,opts)], null),reitit$coercion$response_coercers_$_iter__36390(cljs.core.rest(s__36391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(responses);
})();
var G__36389__$1 = (((G__36389 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__36389));
var G__36389__$2 = (((G__36389__$1 == null))?null:cljs.core.seq(G__36389__$1));
if((G__36389__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36389__$2);
}
});
reitit.coercion._compile_parameters = (function reitit$coercion$_compile_parameters(data,coercion){
return reitit.impl.path_update(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.any_QMARK_], null),(function (p1__36406_SHARP_){
return reitit.coercion._compile_model(coercion,p1__36406_SHARP_,null);
})], null)], null));
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to both compile the schemas and create compiled coercers
 *   into Match under `:result with the following keys:
 * 
 * | key       | description
 * | ----------|-------------
 * | `:data`   | data with compiled schemas
 * | `:coerce` | function of `Match -> coerced parameters` to coerce parameters
 * 
 *   A pre-requisite to use [[coerce!]].
 * 
 *   NOTE: this is not needed with ring/http, where the coercion compilation is
 *   managed in the request coercion middleware/interceptors.
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__36407,opts){
var vec__36408 = p__36407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36408,(0),null);
var map__36411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36408,(1),null);
var map__36411__$1 = cljs.core.__destructure_map(map__36411);
var data = map__36411__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36411__$1,new cljs.core.Keyword(null,"coercion","coercion",904067157));
if(cljs.core.truth_((function (){var and__5023__auto__ = parameters;
if(cljs.core.truth_(and__5023__auto__)){
return coercion;
} else {
return and__5023__auto__;
}
})())){
var map__36412 = reitit.coercion._compile_parameters(data,coercion);
var map__36412__$1 = cljs.core.__destructure_map(map__36412);
var data__$1 = map__36412__$1;
var parameters__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36412__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504),reitit.coercion.request_coercers.cljs$core$IFn$_invoke$arity$3(coercion,parameters__$1,opts)], null);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled coercers in `Match`
 *   under path `[:result :coerce]` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced. If coercion or parameters
 *   are not defined, returns `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5823__auto__ = new cljs.core.Keyword(null,"coerce","coerce",1917884504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(match));
if(cljs.core.truth_(temp__5823__auto__)){
var coercers = temp__5823__auto__;
return reitit.coercion.coerce_request(coercers,match);
} else {
return null;
}
});

//# sourceMappingURL=reitit.coercion.js.map
