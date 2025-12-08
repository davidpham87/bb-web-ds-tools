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

var portal$runtime$cson$ToJson$to_json_STAR_$dyn_36909 = (function (value,buffer){
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
return portal$runtime$cson$ToJson$to_json_STAR_$dyn_36909(value,buffer);
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

(portal.runtime.cson.Tagged.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k36779,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__36787 = k36779;
var G__36787__$1 = (((G__36787 instanceof cljs.core.Keyword))?G__36787.fqn:null);
switch (G__36787__$1) {
case "tag":
return self__.tag;

break;
case "rep":
return self__.rep;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36779,else__5326__auto__);

}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__36790){
var vec__36791 = p__36790;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36791,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36791,(1),null);
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

(portal.runtime.cson.Tagged.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36778){
var self__ = this;
var G__36778__$1 = this;
return (new cljs.core.RecordIter((0),G__36778__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rep","rep",-1226820564)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(portal.runtime.cson.Tagged.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36780,other36781){
var self__ = this;
var this36780__$1 = this;
return (((!((other36781 == null)))) && ((((this36780__$1.constructor === other36781.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36780__$1.tag,other36781.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36780__$1.rep,other36781.rep)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36780__$1.__extmap,other36781.__extmap)))))))));
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

(portal.runtime.cson.Tagged.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k36779){
var self__ = this;
var this__5330__auto____$1 = this;
var G__36802 = k36779;
var G__36802__$1 = (((G__36802 instanceof cljs.core.Keyword))?G__36802.fqn:null);
switch (G__36802__$1) {
case "tag":
case "rep":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36779);

}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__36778){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__36803 = cljs.core.keyword_identical_QMARK_;
var expr__36804 = k__5332__auto__;
if(cljs.core.truth_((pred__36803.cljs$core$IFn$_invoke$arity$2 ? pred__36803.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__36804) : pred__36803.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__36804)))){
return (new portal.runtime.cson.Tagged(G__36778,self__.rep,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36803.cljs$core$IFn$_invoke$arity$2 ? pred__36803.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),expr__36804) : pred__36803.call(null,new cljs.core.Keyword(null,"rep","rep",-1226820564),expr__36804)))){
return (new portal.runtime.cson.Tagged(self__.tag,G__36778,self__.__meta,self__.__extmap,null));
} else {
return (new portal.runtime.cson.Tagged(self__.tag,self__.rep,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__36778),null));
}
}
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rep","rep",-1226820564),self__.rep,null))], null),self__.__extmap));
}));

(portal.runtime.cson.Tagged.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__36778){
var self__ = this;
var this__5322__auto____$1 = this;
return (new portal.runtime.cson.Tagged(self__.tag,self__.rep,G__36778,self__.__extmap,self__.__hash));
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
portal.runtime.cson.map__GT_Tagged = (function portal$runtime$cson$map__GT_Tagged(G__36784){
var extmap__5365__auto__ = (function (){var G__36812 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36784,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rep","rep",-1226820564)], 0));
if(cljs.core.record_QMARK_(G__36784)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36812);
} else {
return G__36812;
}
})();
return (new portal.runtime.cson.Tagged(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__36784),new cljs.core.Keyword(null,"rep","rep",-1226820564).cljs$core$IFn$_invoke$arity$1(G__36784),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

if((typeof portal !== 'undefined') && (typeof portal.runtime !== 'undefined') && (typeof portal.runtime.cson !== 'undefined') && (typeof portal.runtime.cson.tagged_str !== 'undefined')){
} else {
portal.runtime.cson.tagged_str = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36813 = cljs.core.get_global_hierarchy;
return (fexpr__36813.cljs$core$IFn$_invoke$arity$0 ? fexpr__36813.cljs$core$IFn$_invoke$arity$0() : fexpr__36813.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("portal.runtime.cson","tagged-str"),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
portal.runtime.cson.tagged_str.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36816){
var map__36817 = p__36816;
var map__36817__$1 = cljs.core.__destructure_map(map__36817);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var rep = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36817__$1,new cljs.core.Keyword(null,"rep","rep",-1226820564));
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

return cljs.core._write(writer,(function (){var G__36830 = self__.code;
switch (G__36830) {
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
var G__36855 = arguments.length;
switch (G__36855) {
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
var seq__36861_36929 = cljs.core.seq(portal.runtime.cson.coll_types);
var chunk__36862_36930 = null;
var count__36863_36931 = (0);
var i__36864_36932 = (0);
while(true){
if((i__36864_36932 < count__36863_36931)){
var coll_type_36933 = chunk__36862_36930.cljs$core$IIndexed$_nth$arity$2(null,i__36864_36932);
(coll_type_36933.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(coll_type_36933.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36861_36929,chunk__36862_36930,count__36863_36931,i__36864_36932,coll_type_36933){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"(",value__$1);
});})(seq__36861_36929,chunk__36862_36930,count__36863_36931,i__36864_36932,coll_type_36933))
);


var G__36934 = seq__36861_36929;
var G__36935 = chunk__36862_36930;
var G__36936 = count__36863_36931;
var G__36937 = (i__36864_36932 + (1));
seq__36861_36929 = G__36934;
chunk__36862_36930 = G__36935;
count__36863_36931 = G__36936;
i__36864_36932 = G__36937;
continue;
} else {
var temp__5825__auto___36938 = cljs.core.seq(seq__36861_36929);
if(temp__5825__auto___36938){
var seq__36861_36939__$1 = temp__5825__auto___36938;
if(cljs.core.chunked_seq_QMARK_(seq__36861_36939__$1)){
var c__5548__auto___36940 = cljs.core.chunk_first(seq__36861_36939__$1);
var G__36941 = cljs.core.chunk_rest(seq__36861_36939__$1);
var G__36942 = c__5548__auto___36940;
var G__36943 = cljs.core.count(c__5548__auto___36940);
var G__36944 = (0);
seq__36861_36929 = G__36941;
chunk__36862_36930 = G__36942;
count__36863_36931 = G__36943;
i__36864_36932 = G__36944;
continue;
} else {
var coll_type_36945 = cljs.core.first(seq__36861_36939__$1);
(coll_type_36945.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(coll_type_36945.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36861_36929,chunk__36862_36930,count__36863_36931,i__36864_36932,coll_type_36945,seq__36861_36939__$1,temp__5825__auto___36938){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"(",value__$1);
});})(seq__36861_36929,chunk__36862_36930,count__36863_36931,i__36864_36932,coll_type_36945,seq__36861_36939__$1,temp__5825__auto___36938))
);


var G__36948 = cljs.core.next(seq__36861_36939__$1);
var G__36949 = null;
var G__36950 = (0);
var G__36951 = (0);
seq__36861_36929 = G__36948;
chunk__36862_36930 = G__36949;
count__36863_36931 = G__36950;
i__36864_36932 = G__36951;
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
var seq__36871_36952 = cljs.core.seq(portal.runtime.cson.vector_types);
var chunk__36872_36953 = null;
var count__36873_36954 = (0);
var i__36874_36955 = (0);
while(true){
if((i__36874_36955 < count__36873_36954)){
var vector_type_36956 = chunk__36872_36953.cljs$core$IIndexed$_nth$arity$2(null,i__36874_36955);
(vector_type_36956.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(vector_type_36956.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36871_36952,chunk__36872_36953,count__36873_36954,i__36874_36955,vector_type_36956){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"[",value__$1);
});})(seq__36871_36952,chunk__36872_36953,count__36873_36954,i__36874_36955,vector_type_36956))
);


var G__36957 = seq__36871_36952;
var G__36958 = chunk__36872_36953;
var G__36959 = count__36873_36954;
var G__36960 = (i__36874_36955 + (1));
seq__36871_36952 = G__36957;
chunk__36872_36953 = G__36958;
count__36873_36954 = G__36959;
i__36874_36955 = G__36960;
continue;
} else {
var temp__5825__auto___36961 = cljs.core.seq(seq__36871_36952);
if(temp__5825__auto___36961){
var seq__36871_36962__$1 = temp__5825__auto___36961;
if(cljs.core.chunked_seq_QMARK_(seq__36871_36962__$1)){
var c__5548__auto___36963 = cljs.core.chunk_first(seq__36871_36962__$1);
var G__36964 = cljs.core.chunk_rest(seq__36871_36962__$1);
var G__36965 = c__5548__auto___36963;
var G__36966 = cljs.core.count(c__5548__auto___36963);
var G__36967 = (0);
seq__36871_36952 = G__36964;
chunk__36872_36953 = G__36965;
count__36873_36954 = G__36966;
i__36874_36955 = G__36967;
continue;
} else {
var vector_type_36968 = cljs.core.first(seq__36871_36962__$1);
(vector_type_36968.prototype.portal$runtime$cson$ToJson$ = cljs.core.PROTOCOL_SENTINEL);

(vector_type_36968.prototype.portal$runtime$cson$ToJson$to_json_STAR_$arity$2 = ((function (seq__36871_36952,chunk__36872_36953,count__36873_36954,i__36874_36955,vector_type_36968,seq__36871_36962__$1,temp__5825__auto___36961){
return (function (value,buffer){
var value__$1 = this;
return portal.runtime.cson.tagged_coll.cljs$core$IFn$_invoke$arity$3(buffer,"[",value__$1);
});})(seq__36871_36952,chunk__36872_36953,count__36873_36954,i__36874_36955,vector_type_36968,seq__36871_36962__$1,temp__5825__auto___36961))
);


var G__36971 = cljs.core.next(seq__36871_36962__$1);
var G__36972 = null;
var G__36973 = (0);
var G__36974 = (0);
seq__36871_36952 = G__36971;
chunk__36872_36953 = G__36972;
count__36873_36954 = G__36973;
i__36874_36955 = G__36974;
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
var G__36975 = (i + (1));
var G__36976 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));
i = G__36975;
out = G__36976;
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
var values = (function (){var iter__5503__auto__ = (function portal$runtime$cson$__GT_sset_$_iter__36875(s__36876){
return (new cljs.core.LazySeq(null,(function (){
var s__36876__$1 = s__36876;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36876__$1);
if(temp__5825__auto__){
var s__36876__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36876__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36876__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36878 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36877 = (0);
while(true){
if((i__36877 < size__5502__auto__)){
var _ = cljs.core._nth(c__5501__auto__,i__36877);
cljs.core.chunk_append(b__36878,(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));

var G__36979 = (i__36877 + (1));
i__36877 = G__36979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36878),portal$runtime$cson$__GT_sset_$_iter__36875(cljs.core.chunk_rest(s__36876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36878),null);
}
} else {
var _ = cljs.core.first(s__36876__$2);
return cljs.core.cons((portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),portal$runtime$cson$__GT_sset_$_iter__36875(cljs.core.rest(s__36876__$2)));
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
var G__36880 = arguments.length;
switch (G__36880) {
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
var G__36985 = (i + (1));
var G__36986 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)));
i = G__36985;
m = G__36986;
continue;
}
break;
}
});
portal.runtime.cson.__GT_sorted_map = (function portal$runtime$cson$__GT_sorted_map(buffer){
var n = portal.runtime.json_buffer.next_long(buffer);
var pairs = (function (){var iter__5503__auto__ = (function portal$runtime$cson$__GT_sorted_map_$_iter__36881(s__36882){
return (new cljs.core.LazySeq(null,(function (){
var s__36882__$1 = s__36882;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__36882__$1);
if(temp__5825__auto__){
var s__36882__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36882__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__36882__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__36884 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__36883 = (0);
while(true){
if((i__36883 < size__5502__auto__)){
var _ = cljs.core._nth(c__5501__auto__,i__36883);
cljs.core.chunk_append(b__36884,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer))], null));

var G__36987 = (i__36883 + (1));
i__36883 = G__36987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36884),portal$runtime$cson$__GT_sorted_map_$_iter__36881(cljs.core.chunk_rest(s__36882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36884),null);
}
} else {
var _ = cljs.core.first(s__36882__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer)),(portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer))], null),portal$runtime$cson$__GT_sorted_map_$_iter__36881(cljs.core.rest(s__36882__$2)));
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
portal.runtime.cson.push_tagged_literal = (function portal$runtime$cson$push_tagged_literal(buffer,p__36885){
var map__36886 = p__36885;
var map__36886__$1 = cljs.core.__destructure_map(map__36886);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36886__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
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
return portal.runtime.cson.transform((function (){var G__36887 = op;
switch (G__36887) {
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
var G__36888 = op;
var G__36889 = (portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1 ? portal.runtime.cson.__GT_value.cljs$core$IFn$_invoke$arity$1(buffer) : portal.runtime.cson.__GT_value.call(null,buffer));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__36888,G__36889) : handler.call(null,G__36888,G__36889));

}
})());
}
});
portal.runtime.cson.write = (function portal$runtime$cson$write(var_args){
var G__36891 = arguments.length;
switch (G__36891) {
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
var _STAR_options_STAR__orig_val__36892 = portal.runtime.cson._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__36893 = options;
(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__temp_val__36893);

try{return portal.runtime.json_buffer.with_buffer(portal.runtime.cson.to_json,value);
}finally {(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__orig_val__36892);
}}));

(portal.runtime.cson.write.cljs$lang$maxFixedArity = 2);

portal.runtime.cson.read = (function portal$runtime$cson$read(var_args){
var G__36895 = arguments.length;
switch (G__36895) {
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
var _STAR_options_STAR__orig_val__36896 = portal.runtime.cson._STAR_options_STAR_;
var _STAR_options_STAR__temp_val__36897 = options;
(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__temp_val__36897);

try{return portal.runtime.cson.__GT_value(portal.runtime.json_buffer.__GT_reader(string));
}finally {(portal.runtime.cson._STAR_options_STAR_ = _STAR_options_STAR__orig_val__36896);
}}));

(portal.runtime.cson.read.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=portal.runtime.cson.js.map
