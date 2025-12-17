var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

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

$CLJS.SHADOW_ENV.setLoaded("com.cognitect.transit.util.js");

goog.provide("com.cognitect.transit.util");
goog.require("goog.object");
goog.scope(function() {
  var util = com.cognitect.transit.util, gobject = goog.object;
  if (typeof Object.keys != "undefined") {
    util.objectKeys = function(obj) {
      return Object.keys(obj);
    };
  } else {
    util.objectKeys = function(obj) {
      return gobject.getKeys(obj);
    };
  }
  if (typeof Array.isArray != "undefined") {
    util.isArray = function(obj) {
      return Array.isArray(obj);
    };
  } else {
    util.isArray = function(obj) {
      return goog.typeOf(obj) === "array";
    };
  }
  util.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";
  util.randInt = function(ub) {
    return Math.round(Math.random() * ub);
  };
  util.randHex = function() {
    return util.randInt(15).toString(16);
  };
  util.randomUUID = function() {
    var rhex = (8 | 3 & util.randInt(14)).toString(16), ret = util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + "-" + util.randHex() + util.randHex() + util.randHex() + util.randHex() + "-" + "4" + util.randHex() + util.randHex() + util.randHex() + "-" + rhex + util.randHex() + util.randHex() + util.randHex() + "-" + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + 
    util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex();
    return ret;
  };
  util.btoa = function(input) {
    if (typeof btoa != "undefined") {
      return btoa(input);
    } else {
      var str = String(input);
      for (var block, charCode, idx = 0, map = util.chars, output = ""; str.charAt(idx | 0) || (map = "\x3d", idx % 1); output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
        charCode = str.charCodeAt(idx += 3 / 4);
        if (charCode > 255) {
          throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        block = block << 8 | charCode;
      }
      return output;
    }
  };
  util.atob = function(input) {
    if (typeof atob != "undefined") {
      return atob(input);
    } else {
      var str = String(input).replace(/=+$/, "");
      if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
      }
      for (var bc = 0, bs, buffer, idx = 0, output = ""; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = util.chars.indexOf(buffer);
      }
      return output;
    }
  };
  util.Uint8ToBase64 = function(u8Arr) {
    var CHUNK_SIZE = 32768, index = 0, length = u8Arr.length, result = "", slice = null;
    while (index < length) {
      slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
      result += String.fromCharCode.apply(null, slice);
      index += CHUNK_SIZE;
    }
    return util.btoa(result);
  };
  util.Base64ToUint8 = function(base64) {
    var binary_string = util.atob(base64), len = binary_string.length, bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
      var ascii = binary_string.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  };
});

module.exports = com.cognitect.transit.util;

//# sourceMappingURL=com.cognitect.transit.util.js.map
