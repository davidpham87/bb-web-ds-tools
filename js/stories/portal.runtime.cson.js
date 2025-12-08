var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./portal.runtime.json_buffer.js");
require("./portal.runtime.macros.js");
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

$CLJS.SHADOW_ENV.setLoaded("portal.runtime.cson.js");

goog.provide('portal.runtime.cson');
goog.scope(function(){
  portal.runtime.cson.goog$module$goog$math$Long = goog.module.get('goog.math.Long');
});

/**
 * @interface
 */
portal.runtime.cson.ToJson = function(){};

var portal$runtime$cson$ToJson$to_json_STAR_$dyn_36866 = (function (value,buffer){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (portal.runtime.cson.to_json_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(value,buffer) : m__5374__auto__.call(null,value,buffer));
} else {
var m__5372__auto__ = (portal.runtime.cson.to_json_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(value,buffer) : m__5372__auto__.call(null,value,buffer));
} else {
throw cljs.core.missing_protocol("ToJson.to-json*",value);
}
}
});
portal.runtime.cson.to_json_STAR_ = (function portal$runtime$cson$to_json_STAR_(value,buffer){
if((((!((value == null)))) && ((!((value.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 == null)))))){
return value.portal$runtime$cson$ToJson$to_json_STAR_$arity$2(value,buffer);
} else {
return portal$runtime$cson$ToJson$to_json_STAR_$dyn_36866(value,buffer);
}
});

if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.cson !== 'undefined') && (typeof portal.runtime.cson._STAR_options_STAR_ !== 'undefined')){
} else {
portal.runtime.cson._STAR_options_STAR_ = null;
}
portal.runtime.cson.transform = (function portal$runtime$cson$transform(value){
var temp__5823__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(portal.runtime.cson._STAR_options_STAR_);
if(cljs.core.truth_(temp__5823__auto__)){
var f = temp__5823__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value));
} else {
return value;
}
});
portal.runtime.cson.to_json = (function portal$runtime$cson$to_json(buffer,value){
return portal.runtime.cson.to_json_STAR_(portal.runtime.cson.transform(value),buffer);
});
portal.runtime.cson.tag = (function portal$runtime$cson$tag(buffer,tag,value){
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_),"\n","tag"].join('')));
}

return portal.runtime.cson.to_json(portal.runtime.json_buffer.push_string(buffer,tag),value);
});
portal.runtime.cson.box_long = (function portal$runtime$cson$box_long(buffer,value){
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,"long"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
(portal.runtime.cson.goog$module$goog$math$Long.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(portal.runtime.cson.goog$module$goog$math$Long.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.box_long(buffer,value__$1);
}));
portal.runtime.cson.__GT_long = (function portal$runtime$cson$__GT_long(buffer){
return portal.runtime.cson.goog$module$goog$math$Long.fromString(portal.runtime.json_buffer.next_string(buffer));
});
portal.runtime.cson.is_finite_QMARK_ = (function portal$runtime$cson$is_finite_QMARK_(value){
return Number.isFinite(value);
});
portal.runtime.cson.nan_QMARK_ = (function portal$runtime$cson$nan_QMARK_(value){
return Number.isNaN(value);
});
portal.runtime.cson.inf_QMARK_ = (function portal$runtime$cson$inf_QMARK_(value){
return (Infinity === value);
});
portal.runtime.cson._inf_QMARK_ = (function portal$runtime$cson$_inf_QMARK_(value){
return (-Infinity === value);
});
portal.runtime.cson.push_double = (function portal$runtime$cson$push_double(buffer,value){
if(cljs.core.truth_(portal.runtime.cson.is_finite_QMARK_(value))){
return portal.runtime.json_buffer.push_double(buffer,value);
} else {
if(cljs.core.truth_(portal.runtime.cson.nan_QMARK_(value))){
return portal.runtime.json_buffer.push_string(buffer,"nan");
} else {
if(portal.runtime.cson.inf_QMARK_(value)){
return portal.runtime.json_buffer.push_string(buffer,"inf");
} else {
if(portal.runtime.cson._inf_QMARK_(value)){
return portal.runtime.json_buffer.push_string(buffer,"-inf");
} else {
return null;
}
}
}
}
});
portal.runtime.cson.__GT_double = (function portal$runtime$cson$__GT_double(buffer){
return portal.runtime.json_buffer.next_double(buffer);
});
(portal.runtime.cson.ToJson["number"] = true);

(portal.runtime.cson.to_json_STAR_["number"] = (function (value,buffer){
return portal.runtime.cson.push_double(buffer,value);
}));

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {portal.runtime.cson.ToJson}
*/
portal.runtime.cson.Ratio = (function (numerator,denominator){
this.numerator = numerator;
this.denominator = denominator;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(portal.runtime.cson.Ratio.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(portal.runtime.cson.Ratio.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (_,buffer){
var self__ = this;
var ___$1 = this;
return portal.runtime.json_buffer.push_long(portal.runtime.json_buffer.push_long(portal.runtime.json_buffer.push_string(buffer,"R"),self__.numerator),self__.denominator);
}));

(portal.runtime.cson.Ratio.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_this,writer,_opts){
var self__ = this;
var _this__$1 = this;
cljs.core._write(writer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.numerator));

cljs.core._write(writer,"/");

return cljs.core._write(writer,cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.denominator));
}));

(portal.runtime.cson.Ratio.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"numerator","numerator",1479770423,null),new cljs.core.Symbol(null,"denominator","denominator",836166431,null)], null);
}));

(portal.runtime.cson.Ratio.cljs$lang$type = true);

(portal.runtime.cson.Ratio.cljs$lang$ctorStr = "portal.runtime.cson/Ratio");

(portal.runtime.cson.Ratio.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"portal.runtime.cson/Ratio");
}));

/**
 * Positional factory function for portal.runtime.cson/Ratio.
 */
portal.runtime.cson.__GT_Ratio = (function portal$runtime$cson$__GT_Ratio(numerator,denominator){
return (new portal.runtime.cson.Ratio(numerator,denominator));
});

portal.runtime.cson.__GT_ratio = (function portal$runtime$cson$__GT_ratio(buffer){
var n = portal.runtime.json_buffer.next_long(buffer);
var d = portal.runtime.json_buffer.next_long(buffer);
return (new portal.runtime.cson.Ratio(n,d));
});
portal.runtime.cson.push_string = (function portal$runtime$cson$push_string(buffer,value){
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,"s"),value);
});
(portal.runtime.cson.ToJson["string"] = true);

(portal.runtime.cson.to_json_STAR_["string"] = (function (value,buffer){
return portal.runtime.cson.push_string(buffer,value);
}));
(portal.runtime.cson.ToJson["boolean"] = true);

(portal.runtime.cson.to_json_STAR_["boolean"] = (function (value,buffer){
return portal.runtime.json_buffer.push_bool(buffer,value);
}));
(portal.runtime.cson.ToJson["null"] = true);

(portal.runtime.cson.to_json_STAR_["null"] = (function (_value,buffer){
return portal.runtime.json_buffer.push_null(buffer);
}));
portal.runtime.cson.can_meta_QMARK_ = (function portal$runtime$cson$can_meta_QMARK_(value){
if((!((value == null)))){
if((((value.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
portal.runtime.cson.__GT_meta = (function portal$runtime$cson$__GT_meta(buffer){
var m = (portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer));
var v = (portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer));
if((!(portal.runtime.cson.can_meta_QMARK_(v)))){
return v;
} else {
return cljs.core.with_meta(v,m);
}
});
portal.runtime.cson.push_meta = (function portal$runtime$cson$push_meta(buffer,m){
if(cljs.core.map_QMARK_(m)){
return portal.runtime.cson.to_json(portal.runtime.json_buffer.push_string(buffer,"^"),m);
} else {
return buffer;
}
});
portal.runtime.cson.tagged_meta = (function portal$runtime$cson$tagged_meta(buffer,value){
return portal.runtime.cson.push_meta(buffer,cljs.core.meta(value));
});
/**
 * Remove bb type tag for records which cause an infinite loop.
 */
portal.runtime.cson.bb_fix = (function portal$runtime$cson$bb_fix(tagged){
return tagged;
});
portal.runtime.cson.push_tagged = (function portal$runtime$cson$push_tagged(buffer,value){
return portal.runtime.cson.to_json(portal.runtime.json_buffer.push_string(portal.runtime.cson.tagged_meta(buffer,portal.runtime.cson.bb_fix(value)),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(value)),new cljs.core.Keyword(null,"rep","rep",-1226820564).cljs$core$IFn$_invoke$arity$1(value));
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
 * @implements {portal.runtime.cson.ToJson}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
portal.runtime.cson.Tagged = (function (tag,rep,__meta,__extmap,__hash){
this.tag = tag;
this.rep = rep;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(portal.runtime.cson.Tagged.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k36731,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__36738 = k36731;
var G__36738__$1 = (((G__36738 instanceof cljs.core.Keyword))?G__36738.fqn:null);
switch (G__36738__$1) {
case "tag":
return self__.tag;

break;
case "rep":
return self__.rep;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36731,else__5326__auto__);

}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__36739){
var vec__36740 = p__36739;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36740,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36740,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#portal.runtime.cson.Tagged{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rep","rep",-1226820564),self__.rep],null))], null),self__.__extmap));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36730){
var self__ = this;
var G__36730__$1 = this;
return (new cljs.core.RecordIter((0),G__36730__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rep","rep",-1226820564)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new portal.runtime.cson.Tagged(self__.tag,self__.rep,self__.__meta,self__.__extmap,self__.__hash));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1775160930 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36732,other36733){
var self__ = this;
var this36732__$1 = this;
return (((!((other36733 == null)))) && ((((this36732__$1.constructor === other36733.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36732__$1.tag,other36733.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36732__$1.rep,other36733.rep)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36732__$1.__extmap,other36733.__extmap)))))))));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rep","rep",-1226820564),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new portal.runtime.cson.Tagged(self__.tag,self__.rep,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k36731){
var self__ = this;
var this__5330__auto____$1 = this;
var G__36751 = k36731;
var G__36751__$1 = (((G__36751 instanceof cljs.core.Keyword))?G__36751.fqn:null);
switch (G__36751__$1) {
case "tag":
case "rep":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36731);

}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__36730){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__36752 = cljs.core.keyword_identical_QMARK_;
var expr__36753 = k__5332__auto__;
if(cljs.core.truth_((pred__36752.cljs$core$IFn$_invoke$arity$2 ? pred__36752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__36753) : pred__36752.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__36753)))){
return (new portal.runtime.cson.Tagged(G__36730,self__.rep,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36752.cljs$core$IFn$_invoke$arity$2 ? pred__36752.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),expr__36753) : pred__36752.call(null,new cljs.core.Keyword(null,"rep","rep",-1226820564),expr__36753)))){
return (new portal.runtime.cson.Tagged(self__.tag,G__36730,self__.__meta,self__.__extmap,null));
} else {
return (new portal.runtime.cson.Tagged(self__.tag,self__.rep,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__36730),null));
}
}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rep","rep",-1226820564),self__.rep,null))], null),self__.__extmap));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__36730){
var self__ = this;
var this__5322__auto____$1 = this;
return (new portal.runtime.cson.Tagged(self__.tag,self__.rep,G__36730,self__.__extmap,self__.__hash));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(portal.runtime.cson.Tagged.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(portal.runtime.cson.Tagged.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (this$,buffer){
var self__ = this;
var this$__$1 = this;
return portal.runtime.cson.push_tagged(buffer,this$__$1);
}));

(portal.runtime.cson.Tagged.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"rep","rep",413710963,null)], null);
}));

(portal.runtime.cson.Tagged.cljs$lang$type = true);

(portal.runtime.cson.Tagged.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"portal.runtime.cson/Tagged",null,(1),null));
}));

(portal.runtime.cson.Tagged.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"portal.runtime.cson/Tagged");
}));

/**
 * Positional factory function for portal.runtime.cson/Tagged.
 */
portal.runtime.cson.__GT_Tagged = (function portal$runtime$cson$__GT_Tagged(tag,rep){
return (new portal.runtime.cson.Tagged(tag,rep,null,null,null));
});

/**
 * Factory function for portal.runtime.cson/Tagged, taking a map of keywords to field values.
 */
portal.runtime.cson.map__GT_Tagged = (function portal$runtime$cson$map__GT_Tagged(G__36735){
var extmap__5365__auto__ = (function (){var G__36761 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36735,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rep","rep",-1226820564)], 0));
if(cljs.core.record_QMARK_(G__36735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36761);
} else {
return G__36761;
}
})();
return (new portal.runtime.cson.Tagged(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__36735),new cljs.core.Keyword(null,"rep","rep",-1226820564).cljs$core$IFn$_invoke$arity$1(G__36735),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.cson !== 'undefined') && (typeof portal.runtime.cson.tagged_str !== 'undefined')){
} else {
portal.runtime.cson.tagged_str = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36762 = cljs.core.get_global_hierarchy;
return (fexpr__36762.cljs$core$IFn$_invoke$arity$0 ? fexpr__36762.cljs$core$IFn$_invoke$arity$0() : fexpr__36762.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("portal.runtime.cson","tagged-str"),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
portal.runtime.cson.tagged_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36765){
var map__36766 = p__36765;
var map__36766__$1 = cljs.core.__destructure_map(map__36766);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var rep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36766__$1,new cljs.core.Keyword(null,"rep","rep",-1226820564));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rep], 0))].join('');
}));
(portal.runtime.cson.Tagged.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(portal.runtime.cson.Tagged.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_opts){
var this$__$1 = this;
return cljs.core._write(writer,portal.runtime.cson.tagged_str.cljs$core$IFn$_invoke$arity$1(this$__$1));
}));
portal.runtime.cson.tagged_value = (function portal$runtime$cson$tagged_value(tag,rep){
if(typeof tag === 'string'){
} else {
throw (new Error("Assert failed: (string? tag)"));
}

return portal.runtime.cson.__GT_Tagged(tag,rep);
});
portal.runtime.cson.tagged_value_QMARK_ = (function portal$runtime$cson$tagged_value_QMARK_(x){
return (x instanceof portal.runtime.cson.Tagged);
});
portal.runtime.cson.base64_encode = (function portal$runtime$cson$base64_encode(byte_array){
return goog.crypt.base64.encodeByteArray(byte_array);
});
portal.runtime.cson.base64_decode = (function portal$runtime$cson$base64_decode(string){
return goog.crypt.base64.decodeStringToUint8Array(string);
});
(Uint8Array.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(Uint8Array.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,"bin"),portal.runtime.cson.base64_encode(value__$1));
}));
portal.runtime.cson.__GT_bin = (function portal$runtime$cson$__GT_bin(buffer){
return portal.runtime.cson.base64_decode(portal.runtime.json_buffer.next_string(buffer));
});
portal.runtime.cson.push_bigint = (function portal$runtime$cson$push_bigint(buffer,value){
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,"N"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
(portal.runtime.cson.ToJson["bigint"] = true);

(portal.runtime.cson.to_json_STAR_["bigint"] = (function (value,buffer){
return portal.runtime.cson.push_bigint(buffer,value);
}));
portal.runtime.cson.__GT_bigint = (function portal$runtime$cson$__GT_bigint(buffer){
return BigInt(portal.runtime.json_buffer.next_string(buffer));
});
portal.runtime.cson.push_char = (function portal$runtime$cson$push_char(buffer,value){
return portal.runtime.cson.tag(buffer,"C",(value | (0)));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {portal.runtime.cson.ToJson}
*/
portal.runtime.cson.Character = (function (code){
this.code = code;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(portal.runtime.cson.Character.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(portal.runtime.cson.Character.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (_this,buffer){
var self__ = this;
var _this__$1 = this;
return portal.runtime.cson.push_char(buffer,self__.code);
}));

(portal.runtime.cson.Character.prototype.cljs$core$IHash$_hash$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.code;
}));

(portal.runtime.cson.Character.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_this,other){
var self__ = this;
var _this__$1 = this;
return (((other instanceof portal.runtime.cson.Character)) && ((self__.code === other.code)));
}));

(portal.runtime.cson.Character.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_this,writer,_opts){
var self__ = this;
var _this__$1 = this;
cljs.core._write(writer,"\\");

return cljs.core._write(writer,(function (){var G__36779 = self__.code;
switch (G__36779) {
case (10):
return "newline";

break;
case (32):
return "space";

break;
case (9):
return "tab";

break;
case (8):
return "backspace";

break;
case (12):
return "formfeed";

break;
case (13):
return "return";

break;
default:
return String.fromCharCode(self__.code);

}
})());
}));

(portal.runtime.cson.Character.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(portal.runtime.cson.Character.cljs$lang$type = true);

(portal.runtime.cson.Character.cljs$lang$ctorStr = "portal.runtime.cson/Character");

(portal.runtime.cson.Character.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"portal.runtime.cson/Character");
}));

/**
 * Positional factory function for portal.runtime.cson/Character.
 */
portal.runtime.cson.__GT_Character = (function portal$runtime$cson$__GT_Character(code){
return (new portal.runtime.cson.Character(code));
});

portal.runtime.cson.char_STAR_ = (function portal$runtime$cson$char_STAR_(code){
return (new portal.runtime.cson.Character(code));
});
portal.runtime.cson.__GT_char = (function portal$runtime$cson$__GT_char(buffer){
return portal.runtime.cson.char_STAR_((portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));
});
portal.runtime.cson.push_inst = (function portal$runtime$cson$push_inst(buffer,value){
return portal.runtime.json_buffer.push_long(portal.runtime.json_buffer.push_string(buffer,"inst"),cljs.core.inst_ms(value));
});
(Date.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.push_inst(buffer,value__$1);
}));
portal.runtime.cson.__GT_inst = (function portal$runtime$cson$__GT_inst(buffer){
return (new Date(portal.runtime.json_buffer.next_long(buffer)));
});
portal.runtime.cson.push_uuid = (function portal$runtime$cson$push_uuid(buffer,value){
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,"uuid"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
(cljs.core.UUID.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.push_uuid(buffer,value__$1);
}));
portal.runtime.cson.__GT_uuid = (function portal$runtime$cson$__GT_uuid(buffer){
return cljs.core.uuid(portal.runtime.json_buffer.next_string(buffer));
});
(URL.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(URL.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,"url"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1));
}));
portal.runtime.cson.__GT_url = (function portal$runtime$cson$__GT_url(buffer){
return (new URL(portal.runtime.json_buffer.next_string(buffer)));
});
portal.runtime.cson.push_keyword = (function portal$runtime$cson$push_keyword(buffer,value){
var temp__5823__auto__ = cljs.core.namespace(value);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,";"),ns),cljs.core.name(value));
} else {
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,":"),cljs.core.name(value));
}
});
(cljs.core.Keyword.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.push_keyword(buffer,value__$1);
}));
portal.runtime.cson.__GT_keyword = (function portal$runtime$cson$__GT_keyword(buffer){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(portal.runtime.json_buffer.next_string(buffer));
});
portal.runtime.cson.__GT_keyword_2 = (function portal$runtime$cson$__GT_keyword_2(buffer){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(portal.runtime.json_buffer.next_string(buffer),portal.runtime.json_buffer.next_string(buffer));
});
portal.runtime.cson.push_symbol = (function portal$runtime$cson$push_symbol(buffer,value){
var temp__5823__auto__ = cljs.core.namespace(value);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(portal.runtime.cson.tagged_meta(buffer,value),"%"),ns),cljs.core.name(value));
} else {
return portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(portal.runtime.cson.tagged_meta(buffer,value),"$"),cljs.core.name(value));
}
});
(cljs.core.Symbol.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.push_symbol(buffer,value__$1);
}));
portal.runtime.cson.__GT_symbol = (function portal$runtime$cson$__GT_symbol(buffer){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(portal.runtime.json_buffer.next_string(buffer));
});
portal.runtime.cson.__GT_symbol_2 = (function portal$runtime$cson$__GT_symbol_2(buffer){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(portal.runtime.json_buffer.next_string(buffer),portal.runtime.json_buffer.next_string(buffer));
});
portal.runtime.cson.tagged_coll = (function portal$runtime$cson$tagged_coll(var_args){
var G__36804 = arguments.length;
switch (G__36804) {
case 3:
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3 = (function (buffer,tag,value){
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$4(buffer,tag,cljs.core.meta(value),value);
}));

(portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$4 = (function (buffer,tag,meta_map,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(portal.runtime.cson.to_json,portal.runtime.json_buffer.push_long(portal.runtime.json_buffer.push_string(portal.runtime.cson.push_meta(buffer,meta_map),tag),cljs.core.count(value)),value);
}));

(portal.runtime.cson.tagged_coll.cljs$lang$maxFixedArity = 4);

portal.runtime.cson.coll_types = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.Cons,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.IndexedSeq,cljs.core.KeySeq,cljs.core.ValSeq,cljs.core.Repeat,cljs.core.Range,cljs.core.List,cljs.core.ChunkedCons,cljs.core.ChunkedSeq,cljs.core.RSeq,cljs.core.PersistentQueue,cljs.core.PersistentQueueSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentTreeMapSeq,cljs.core.NodeSeq,cljs.core.ArrayNodeSeq], null);
var seq__36814_36882 = cljs.core.seq(portal.runtime.cson.coll_types);
var chunk__36815_36883 = null;
var count__36816_36884 = (0);
var i__36817_36885 = (0);
while(true){
if((i__36817_36885 < count__36816_36884)){
var coll_type_36886 = chunk__36815_36883.cljs$core$IIndexed$_nth$arity$2(null,i__36817_36885);
(coll_type_36886.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(coll_type_36886.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36814_36882,chunk__36815_36883,count__36816_36884,i__36817_36885,coll_type_36886){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"(",value__$1);
});})(seq__36814_36882,chunk__36815_36883,count__36816_36884,i__36817_36885,coll_type_36886))
);


var G__36887 = seq__36814_36882;
var G__36888 = chunk__36815_36883;
var G__36889 = count__36816_36884;
var G__36890 = (i__36817_36885 + (1));
seq__36814_36882 = G__36887;
chunk__36815_36883 = G__36888;
count__36816_36884 = G__36889;
i__36817_36885 = G__36890;
continue;
} else {
var temp__5825__auto___36891 = cljs.core.seq(seq__36814_36882);
if(temp__5825__auto___36891){
var seq__36814_36892__$1 = temp__5825__auto___36891;
if(cljs.core.chunked_seq_QMARK_(seq__36814_36892__$1)){
var c__5548__auto___36893 = cljs.core.chunk_first(seq__36814_36892__$1);
var G__36894 = cljs.core.chunk_rest(seq__36814_36892__$1);
var G__36895 = c__5548__auto___36893;
var G__36896 = cljs.core.count(c__5548__auto___36893);
var G__36897 = (0);
seq__36814_36882 = G__36894;
chunk__36815_36883 = G__36895;
count__36816_36884 = G__36896;
i__36817_36885 = G__36897;
continue;
} else {
var coll_type_36898 = cljs.core.first(seq__36814_36892__$1);
(coll_type_36898.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(coll_type_36898.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36814_36882,chunk__36815_36883,count__36816_36884,i__36817_36885,coll_type_36898,seq__36814_36892__$1,temp__5825__auto___36891){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"(",value__$1);
});})(seq__36814_36882,chunk__36815_36883,count__36816_36884,i__36817_36885,coll_type_36898,seq__36814_36892__$1,temp__5825__auto___36891))
);


var G__36899 = cljs.core.next(seq__36814_36892__$1);
var G__36900 = null;
var G__36901 = (0);
var G__36902 = (0);
seq__36814_36882 = G__36899;
chunk__36815_36883 = G__36900;
count__36816_36884 = G__36901;
i__36817_36885 = G__36902;
continue;
}
} else {
}
}
break;
}
(cljs.core.IntegerRange.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IntegerRange.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"(",value__$1);
}));
portal.runtime.cson.vector_types = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector,cljs.core.Subvec,cljs.core.MapEntry], null);
var seq__36820_36903 = cljs.core.seq(portal.runtime.cson.vector_types);
var chunk__36821_36904 = null;
var count__36822_36905 = (0);
var i__36823_36906 = (0);
while(true){
if((i__36823_36906 < count__36822_36905)){
var vector_type_36907 = chunk__36821_36904.cljs$core$IIndexed$_nth$arity$2(null,i__36823_36906);
(vector_type_36907.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(vector_type_36907.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36820_36903,chunk__36821_36904,count__36822_36905,i__36823_36906,vector_type_36907){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"[",value__$1);
});})(seq__36820_36903,chunk__36821_36904,count__36822_36905,i__36823_36906,vector_type_36907))
);


var G__36908 = seq__36820_36903;
var G__36909 = chunk__36821_36904;
var G__36910 = count__36822_36905;
var G__36911 = (i__36823_36906 + (1));
seq__36820_36903 = G__36908;
chunk__36821_36904 = G__36909;
count__36822_36905 = G__36910;
i__36823_36906 = G__36911;
continue;
} else {
var temp__5825__auto___36912 = cljs.core.seq(seq__36820_36903);
if(temp__5825__auto___36912){
var seq__36820_36913__$1 = temp__5825__auto___36912;
if(cljs.core.chunked_seq_QMARK_(seq__36820_36913__$1)){
var c__5548__auto___36914 = cljs.core.chunk_first(seq__36820_36913__$1);
var G__36915 = cljs.core.chunk_rest(seq__36820_36913__$1);
var G__36916 = c__5548__auto___36914;
var G__36917 = cljs.core.count(c__5548__auto___36914);
var G__36918 = (0);
seq__36820_36903 = G__36915;
chunk__36821_36904 = G__36916;
count__36822_36905 = G__36917;
i__36823_36906 = G__36918;
continue;
} else {
var vector_type_36920 = cljs.core.first(seq__36820_36913__$1);
(vector_type_36920.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(vector_type_36920.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36820_36903,chunk__36821_36904,count__36822_36905,i__36823_36906,vector_type_36920,seq__36820_36913__$1,temp__5825__auto___36912){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"[",value__$1);
});})(seq__36820_36903,chunk__36821_36904,count__36822_36905,i__36823_36906,vector_type_36920,seq__36820_36913__$1,temp__5825__auto___36912))
);


var G__36922 = cljs.core.next(seq__36820_36913__$1);
var G__36923 = null;
var G__36924 = (0);
var G__36925 = (0);
seq__36820_36903 = G__36922;
chunk__36821_36904 = G__36923;
count__36822_36905 = G__36924;
i__36823_36906 = G__36925;
continue;
}
} else {
}
}
break;
}
portal.runtime.cson.__GT_into = (function portal$runtime$cson$__GT_into(zero,buffer){
var n = portal.runtime.json_buffer.next_long(buffer);
var i = (0);
var out = cljs.core.transient$(zero);
while(true){
if((i === n)){
return cljs.core.persistent_BANG_(out);
} else {
var G__36930 = (i + (1));
var G__36931 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));
i = G__36930;
out = G__36931;
continue;
}
break;
}
});
(cljs.core.PersistentHashSet.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"#",value__$1);
}));
(cljs.core.PersistentTreeSet.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"sset",value__$1);
}));
portal.runtime.cson.__GT_sset = (function portal$runtime$cson$__GT_sset(buffer){
var n = portal.runtime.json_buffer.next_long(buffer);
var values = (function (){var iter__5503__auto__ = (function portal$runtime$cson$__GT_sset_$_iter__36824(s__36825){
return (new cljs.core.LazySeq(null,(function (){
var s__36825__$1 = s__36825;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36825__$1);
if(temp__5825__auto__){
var s__36825__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36825__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36825__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36827 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36826 = (0);
while(true){
if((i__36826 < size__5502__auto__)){
var _ = cljs.core._nth(c__5501__auto__,i__36826);
cljs.core.chunk_append(b__36827,(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));

var G__36932 = (i__36826 + (1));
i__36826 = G__36932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36827),portal$runtime$cson$__GT_sset_$_iter__36824(cljs.core.chunk_rest(s__36825__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36827),null);
}
} else {
var _ = cljs.core.first(s__36825__$2);
return cljs.core.cons((portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),portal$runtime$cson$__GT_sset_$_iter__36824(cljs.core.rest(s__36825__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})();
var order = cljs.core.zipmap(values,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set_by((function (a,b){
return cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(order,a),cljs.core.get.cljs$core$IFn$_invoke$arity$2(order,b));
})),values);
});
portal.runtime.cson.tagged_map = (function portal$runtime$cson$tagged_map(var_args){
var G__36829 = arguments.length;
switch (G__36829) {
case 2:
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$2 = (function (buffer,value){
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$3(buffer,"{",value);
}));

(portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$3 = (function (buffer,tag,value){
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$4(buffer,tag,cljs.core.meta(value),value);
}));

(portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$4 = (function (buffer,tag,meta_map,value){
return cljs.core.reduce_kv((function (buffer__$1,k,v){
return portal.runtime.cson.to_json(portal.runtime.cson.to_json(buffer__$1,k),v);
}),portal.runtime.json_buffer.push_long(portal.runtime.json_buffer.push_string(portal.runtime.cson.push_meta(buffer,meta_map),tag),cljs.core.count(value)),value);
}));

(portal.runtime.cson.tagged_map.cljs$lang$maxFixedArity = 4);

(cljs.core.PersistentHashMap.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$2(buffer,value__$1);
}));
(cljs.core.PersistentTreeMap.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$3(buffer,"smap",value__$1);
}));
(cljs.core.PersistentArrayMap.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$2(buffer,value__$1);
}));
(cljs.core.IRecord.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IRecord.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_map.cljs$core$IFn$_invoke$arity$2(buffer,value__$1);
}));
portal.runtime.cson.__GT_map = (function portal$runtime$cson$__GT_map(buffer){
var n = portal.runtime.json_buffer.next_long(buffer);
var i = (0);
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i === n)){
return cljs.core.persistent_BANG_(m);
} else {
var G__36934 = (i + (1));
var G__36935 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));
i = G__36934;
m = G__36935;
continue;
}
break;
}
});
portal.runtime.cson.__GT_sorted_map = (function portal$runtime$cson$__GT_sorted_map(buffer){
var n = portal.runtime.json_buffer.next_long(buffer);
var pairs = (function (){var iter__5503__auto__ = (function portal$runtime$cson$__GT_sorted_map_$_iter__36830(s__36831){
return (new cljs.core.LazySeq(null,(function (){
var s__36831__$1 = s__36831;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36831__$1);
if(temp__5825__auto__){
var s__36831__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36831__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36831__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36833 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36832 = (0);
while(true){
if((i__36832 < size__5502__auto__)){
var _ = cljs.core._nth(c__5501__auto__,i__36832);
cljs.core.chunk_append(b__36833,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer))], null));

var G__36937 = (i__36832 + (1));
i__36832 = G__36937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36833),portal$runtime$cson$__GT_sorted_map_$_iter__36830(cljs.core.chunk_rest(s__36831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36833),null);
}
} else {
var _ = cljs.core.first(s__36831__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer))], null),portal$runtime$cson$__GT_sorted_map_$_iter__36830(cljs.core.rest(s__36831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})();
var order = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by((function (a,b){
return cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(order,a),cljs.core.get.cljs$core$IFn$_invoke$arity$2(order,b));
})),pairs);
});
portal.runtime.cson.push_tagged_literal = (function portal$runtime$cson$push_tagged_literal(buffer,p__36834){
var map__36835 = p__36834;
var map__36835__$1 = cljs.core.__destructure_map(map__36835);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36835__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36835__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return portal.runtime.cson.to_json(portal.runtime.json_buffer.push_string(portal.runtime.json_buffer.push_string(buffer,"tag"),(function (){var temp__5823__auto__ = cljs.core.namespace(tag);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [ns,"/",cljs.core.name(tag)].join('');
} else {
return cljs.core.name(tag);
}
})()),form);
});
(cljs.core.TaggedLiteral.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.TaggedLiteral.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.push_tagged_literal(buffer,value__$1);
}));
portal.runtime.cson.__GT_tagged_literal = (function portal$runtime$cson$__GT_tagged_literal(buffer){
return cljs.core.tagged_literal(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(portal.runtime.json_buffer.next_string(buffer)),(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));
});
portal.runtime.cson.__GT_list = (function portal$runtime$cson$__GT_list(buffer){
var or__5025__auto__ = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(portal.runtime.cson.__GT_into(cljs.core.PersistentVector.EMPTY,buffer));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return cljs.core.List.EMPTY;
}
});
portal.runtime.cson.__GT_value = (function portal$runtime$cson$__GT_value(buffer){
var op = portal.runtime.json_buffer.next_value(buffer);
if((!(typeof op === 'string'))){
return op;
} else {
return portal.runtime.cson.transform((function (){var G__36836 = op;
switch (G__36836) {
case "s":
return portal.runtime.json_buffer.next_string(buffer);

break;
case ":":
return portal.runtime.cson.__GT_keyword(buffer);

break;
case "{":
return portal.runtime.cson.__GT_map(buffer);

break;
case "$":
return portal.runtime.cson.__GT_symbol(buffer);

break;
case "[":
return portal.runtime.cson.__GT_into(cljs.core.PersistentVector.EMPTY,buffer);

break;
case "(":
return portal.runtime.cson.__GT_list(buffer);

break;
case ";":
return portal.runtime.cson.__GT_keyword_2(buffer);

break;
case "%":
return portal.runtime.cson.__GT_symbol_2(buffer);

break;
case "#":
return portal.runtime.cson.__GT_into(cljs.core.PersistentHashSet.EMPTY,buffer);

break;
case "^":
return portal.runtime.cson.__GT_meta(buffer);

break;
case "D":
return portal.runtime.cson.__GT_double(buffer);

break;
case "N":
return portal.runtime.cson.__GT_bigint(buffer);

break;
case "C":
return portal.runtime.cson.__GT_char(buffer);

break;
case "R":
return portal.runtime.cson.__GT_ratio(buffer);

break;
case "bin":
return portal.runtime.cson.__GT_bin(buffer);

break;
case "inst":
return portal.runtime.cson.__GT_inst(buffer);

break;
case "smap":
return portal.runtime.cson.__GT_sorted_map(buffer);

break;
case "sset":
return portal.runtime.cson.__GT_sset(buffer);

break;
case "url":
return portal.runtime.cson.__GT_url(buffer);

break;
case "uuid":
return portal.runtime.cson.__GT_uuid(buffer);

break;
case "tag":
return portal.runtime.cson.__GT_tagged_literal(buffer);

break;
case "long":
return portal.runtime.cson.__GT_long(buffer);

break;
case "nan":
return NaN;

break;
case "inf":
return Infinity;

break;
case "-inf":
return -Infinity;

break;
default:
var handler = new cljs.core.Keyword(null,"default-handler","default-handler",-1028159207).cljs$core$IFn$_invoke$arity$2(portal.runtime.cson._STAR_options_STAR_,portal.runtime.cson.tagged_value);
var G__36839 = op;
var G__36840 = (portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__36839,G__36840) : handler.call(null,G__36839,G__36840));

}
})());
}
});
portal.runtime.cson.write = (function portal$runtime$cson$write(var_args){
var G__36844 = arguments.length;
switch (G__36844) {
case 1:
return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$1 = (function (value){
return portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(portal.runtime.cson.write.cljs$core$IFn$_invoke$arity$2 = (function (value,options){
var _STAR_options_STAR__orig_val__36849 = portal.runtime.cson._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__36850 = options;
(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__temp_val__36850);

try{return portal.runtime.json_buffer.with_buffer(portal.runtime.cson.to_json,value);
}finally {(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__orig_val__36849);
}}));

(portal.runtime.cson.write.cljs$lang$maxFixedArity = 2);

portal.runtime.cson.read = (function portal$runtime$cson$read(var_args){
var G__36853 = arguments.length;
switch (G__36853) {
case 1:
return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$1 = (function (string){
return portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2(string,null);
}));

(portal.runtime.cson.read.cljs$core$IFn$_invoke$arity$2 = (function (string,options){
var _STAR_options_STAR__orig_val__36857 = portal.runtime.cson._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__36858 = options;
(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__temp_val__36858);

try{return portal.runtime.cson.__GT_value(portal.runtime.json_buffer.__GT_reader(string));
}finally {(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__orig_val__36857);
}}));

(portal.runtime.cson.read.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=portal.runtime.cson.js.map
