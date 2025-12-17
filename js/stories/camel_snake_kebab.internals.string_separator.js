var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("camel_snake_kebab.internals.string_separator.js");

goog.provide('camel_snake_kebab.internals.string_separator');

/**
 * @interface
 */
camel_snake_kebab.internals.string_separator.StringSeparator = function(){};

var camel_snake_kebab$internals$string_separator$StringSeparator$split$dyn_47053 = (function (this$,s){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5374__auto__.call(null,this$,s));
} else {
var m__5372__auto__ = (camel_snake_kebab.internals.string_separator.split["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,s) : m__5372__auto__.call(null,this$,s));
} else {
throw cljs.core.missing_protocol("StringSeparator.split",this$);
}
}
});
/**
 * : StringSeparator -> String -> NonEmptySeq[String]
 */
camel_snake_kebab.internals.string_separator.split = (function camel_snake_kebab$internals$string_separator$split(this$,s){
if((((!((this$ == null)))) && ((!((this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 == null)))))){
return this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2(this$,s);
} else {
return camel_snake_kebab$internals$string_separator$StringSeparator$split$dyn_47053(this$,s);
}
});

(RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,this$__$1);
}));

(camel_snake_kebab.internals.string_separator.StringSeparator["string"] = true);

(camel_snake_kebab.internals.string_separator.split["string"] = (function (this$,s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,this$);
}));
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__47018 = c;
switch (G__47018) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return new cljs.core.Keyword(null,"number","number",1570378438);

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
case "z":
return new cljs.core.Keyword(null,"lower","lower",1120320821);

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
case "Z":
return new cljs.core.Keyword(null,"upper","upper",246243906);

break;
default:
return new cljs.core.Keyword(null,"other","other",995793544);

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(camel_snake_kebab.internals.string_separator.classify_char,ss);
var ss_length = ss.length;
var result = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs,ss_length){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs,ss_length))
;
if((current >= ss_length)){
var or__5025__auto__ = cljs.core.seq(cljs.core.persistent_BANG_(result_PLUS_new(current)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cs,current),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var G__47060 = result_PLUS_new(current);
var G__47061 = next;
var G__47062 = next;
result = G__47060;
start = G__47061;
current = G__47062;
continue;
} else {
if((function (){var vec__47031 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(cs,current);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(2),null);
return ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"upper","upper",246243906))))) || (((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword(null,"number","number",1570378438))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"number","number",1570378438))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"lower","lower",1120320821))))))))));
})()){
var G__47067 = result_PLUS_new(next);
var G__47068 = next;
var G__47069 = next;
result = G__47067;
start = G__47068;
current = G__47069;
continue;
} else {
var G__47070 = result;
var G__47071 = start;
var G__47072 = next;
result = G__47070;
start = G__47071;
current = G__47072;
continue;

}
}
}
break;
}
});

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044 = (function (meta47045){
this.meta47045 = meta47045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47046,meta47045__$1){
var self__ = this;
var _47046__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044(meta47045__$1));
}));

(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47046){
var self__ = this;
var _47046__$1 = this;
return self__.meta47045;
}));

(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL);

(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split(s);
}));

(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta47045","meta47045",1750365002,null)], null);
}));

(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.cljs$lang$type = true);

(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator47044");

(camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator47044");
}));

/**
 * Positional factory function for camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator47044.
 */
camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator47044 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator47044(meta47045){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044(meta47045));
});


camel_snake_kebab.internals.string_separator.generic_separator = (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator47044(cljs.core.PersistentArrayMap.EMPTY));

//# sourceMappingURL=camel_snake_kebab.internals.string_separator.js.map
