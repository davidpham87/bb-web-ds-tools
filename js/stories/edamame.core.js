var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./cljs.tools.reader.reader_types.js");
require("./edamame.impl.ns_parser.js");
require("./edamame.impl.parser.js");
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

$CLJS.SHADOW_ENV.setLoaded("edamame.core.js");

goog.provide('edamame.core');
/**
 * Parses first EDN value from string.
 * 
 *   Supported parsing options can be `true` for default behavior or a function
 *   that is called on the form and returns a form in its place:
 * 
 *   `:deref`: parse forms starting with `@`. If `true`, the resulting
 *   expression will be parsed as `(deref expr)`.
 * 
 *   `:fn`: parse function literals (`#(inc %)`). If `true`, will be parsed as `(fn [%1] (inc %))`.
 * 
 *   `:quote`: parse quoted expression `'foo`. If `true`, will be parsed as `(quote foo)`.
 * 
 *   `:read-eval`: parse read-eval (`#=(+ 1 2 3)`). If `true`, the
 *   resulting expression will be parsed as `(read-eval (+ 1 2 3))`.
 * 
 *   `:regex`: parse regex literals (`#"foo"`). If `true`, defaults to
 *   `re-pattern`.
 * 
 *   `:var`: parse var literals (`#'foo`). If `true`, the resulting
 *   expression will be parsed as `(var foo)`.
 * 
 *   `:map`: parse map literal using a custom function, e.g. `flatland.ordered.map/ordered-map`
 * 
 *   `:set`: parse set literal using a custom function, e.g. `flatland.ordered.set/ordered-set`
 * 
 *   `:syntax-quote`: parse syntax-quote (`(+ 1 2 3)`). Symbols get
 *   qualified using `:resolve-symbol` which defaults to `identity`:
 *   ```clojure
 *   (parse-string "`x" {:syntax-quote {:resolve-symbol #(symbol "user" (str %))}})
 *   ;;=> (quote user/x)
 *   ```
 *   By default, also parses `unquote` and `unquote-splicing` literals,
 *   resolving them accordingly.
 * 
 *   `:unquote`: parse unquote (`~x`). Requires `:syntax-quote` to be set.
 *   If `true` and not inside `syntax-quote`, defaults to `clojure.core/unquote`.
 * 
 *   `:unquote-splicing`: parse unquote-splicing (`~@x`). Requires `:syntax-quote`
 *   to be set. If `true` and not inside `syntax-quote`, defaults
 *   to `clojure.core/unquote-splicing`.
 * 
 *   `:all`: when `true`, the above options will be set to `true` unless
 *   explicitly provided.
 * 
 *   Supported options for processing reader conditionals:
 * 
 *   `:read-cond`: - `:allow` to process reader conditionals, or
 *                `:preserve` to keep all branches
 *   `:features`: - persistent set of feature keywords for reader conditionals (e.g. `#{:clj}`).
 * 
 *   `:auto-resolve`: map of alias to namespace symbols for
 *   auto-resolving keywords. Use `:current` as the alias for the current
 *   namespace.
 * 
 *   `:readers`: data readers.
 * 
 *   `:postprocess`: a function that is called with a map containing
 *   `:obj`, the read value, and `:loc`, the location metadata. This can
 *   be used to handle objects that cannot carry metadata differently. If
 *   this option is provided, attaching location metadata is not
 *   automatically added to the object.
 * 
 *   `:location?`: a predicate that is called with the parsed
 *   object. Should return a truthy value to determine if location
 *   information will be added.
 * 
 *   `:uneval`: a function of a map with `:uneval` and `:next` to preserve `#_` expressions by combining them with next value.
 * 
 *   `:suppress-read`: counterpart to *suppress-read* in clojure
 * 
 *   Additional arguments to tools.reader may be passed with
 *   `:tools.reader/opts`, like `:readers` for passing reader tag functions.
 *   
 */
edamame.core.parse_string = (function edamame$core$parse_string(var_args){
var G__28600 = arguments.length;
switch (G__28600) {
case 1:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string(s,null);
}));

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string(s,opts);
}));

(edamame.core.parse_string.cljs$lang$maxFixedArity = 2);

/**
 * Like `parse-string` but parses all values from string and returns them
 *   in a vector.
 */
edamame.core.parse_string_all = (function edamame$core$parse_string_all(var_args){
var G__28603 = arguments.length;
switch (G__28603) {
case 1:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string_all(s,null);
}));

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string_all(s,opts);
}));

(edamame.core.parse_string_all.cljs$lang$maxFixedArity = 2);

/**
 * Coerces x into indexing pushback-reader to be used with
 *   parse-next. Accepts string or `java.io.Reader`
 */
edamame.core.reader = (function edamame$core$reader(x){
return edamame.impl.parser.reader(x);
});
/**
 * Coerces x into source-logging-reader to be used with
 *   parse-next. Accepts string or `java.io.Reader`
 */
edamame.core.source_reader = (function edamame$core$source_reader(x){
return edamame.impl.parser.source_logging_reader(x);
});
edamame.core.get_line_number = (function edamame$core$get_line_number(reader){
return edamame.impl.parser.get_line_number(reader);
});
edamame.core.get_column_number = (function edamame$core$get_column_number(reader){
return edamame.impl.parser.get_column_number(reader);
});
/**
 * Expands `opts` into normalized opts, e.g. `:all true` is expanded
 *   into explicit options.
 */
edamame.core.normalize_opts = (function edamame$core$normalize_opts(opts){
return edamame.impl.parser.normalize_opts(opts);
});
/**
 * Parses next form from reader. Accepts same opts as `parse-string`,
 *   but must be normalized with `normalize-opts` first.
 */
edamame.core.parse_next = (function edamame$core$parse_next(var_args){
var G__28623 = arguments.length;
switch (G__28623) {
case 1:
return edamame.core.parse_next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_next.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return edamame.core.parse_next.cljs$core$IFn$_invoke$arity$2(reader,edamame.impl.parser.normalize_opts(cljs.core.PersistentArrayMap.EMPTY));
}));

(edamame.core.parse_next.cljs$core$IFn$_invoke$arity$2 = (function (reader,normalized_opts){
if(cljs.tools.reader.reader_types.source_logging_reader_QMARK_(reader)){
var buf_28641 = edamame.impl.parser.buf(reader);
buf_28641.clear();
} else {
}

var v = edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(normalized_opts,reader);
if((edamame.impl.parser.eof === v)){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(normalized_opts,new cljs.core.Keyword(null,"eof","eof",-489063237));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword("edamame.core","eof","edamame.core/eof",1855384188);
}
} else {
return v;
}
}));

(edamame.core.parse_next.cljs$lang$maxFixedArity = 2);

/**
 * Parses next form from reader. Accepts same opts as `parse-string`,
 *   but must be normalized with `normalize-opts` first.
 *   Returns read value + string read (whitespace-trimmed).
 */
edamame.core.parse_next_PLUS_string = (function edamame$core$parse_next_PLUS_string(var_args){
var G__28627 = arguments.length;
switch (G__28627) {
case 1:
return edamame.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return edamame.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$2(reader,edamame.impl.parser.normalize_opts(cljs.core.PersistentArrayMap.EMPTY));
}));

(edamame.core.parse_next_PLUS_string.cljs$core$IFn$_invoke$arity$2 = (function (reader,normalized_opts){
if(cljs.tools.reader.reader_types.source_logging_reader_QMARK_(reader)){
var v = edamame.core.parse_next.cljs$core$IFn$_invoke$arity$2(reader,normalized_opts);
var s = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(edamame.impl.parser.buf(reader)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,s], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("parse-next+string must be called with source-reader",cljs.core.PersistentArrayMap.EMPTY);
}
}));

(edamame.core.parse_next_PLUS_string.cljs$lang$maxFixedArity = 2);

/**
 * Returns true if obj can carry metadata.
 */
edamame.core.iobj_QMARK_ = (function edamame$core$iobj_QMARK_(obj){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj);
}
});
/**
 * Parses `ns-form`, an s-expression, into map with:
 *   - `:name`: the name of the namespace
 *   - `:aliases`: a map of aliases to lib names
 */
edamame.core.parse_ns_form = (function edamame$core$parse_ns_form(ns_form){
return edamame.impl.ns_parser.parse_ns_form(ns_form);
});
/**
 * Singleton value to be used as return value in `:read-cond` fn to indicate to continue parsing the next form
 */
edamame.core.continue$ = edamame.impl.parser.continue$;

//# sourceMappingURL=edamame.core.js.map
