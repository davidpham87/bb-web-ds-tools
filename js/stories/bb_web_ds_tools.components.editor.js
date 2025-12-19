var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./reagent.core.js");
require("./re_frame.core.js");
require("./shadow.js.shim.module$react_dom.js");
require("./shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.js");
require("./shadow.js.shim.module$monaco_editor$esm$vs$basic_languages$clojure$clojure_contribution.js");
require("./shadow.js.shim.module$monaco_editor$esm$vs$basic_languages$python$python_contribution.js");
require("./shadow.js.shim.module$monaco_editor$esm$vs$basic_languages$r$r_contribution.js");
require("./bb_web_ds_tools.theme.js");
require("./bb_web_ds_tools.events.theme.js");
require("./bb_web_ds_tools.events.settings.js");
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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.editor.js");

goog.provide('bb_web_ds_tools.components.editor');
/**
 * Normalizes line endings to LF.
 */
bb_web_ds_tools.components.editor.normalize_value = (function bb_web_ds_tools$components$editor$normalize_value(s){
return clojure.string.replace((function (){var or__5025__auto__ = s;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),/\r\n/,"\n");
});
/**
 * Renders a Monaco Editor component.
 * 
 *   Args:
 *  props (map): Props for the editor. Keys:
 *    - :value (string): Code content.
 *    - :language (string): Language mode.
 *    - :options (map): Monaco editor options.
 *    - :on-change (fn/vec): Callback or event vector.
 *    - :on-mount (fn): Callback(editor-instance).
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.editor.monaco_editor = (function bb_web_ds_tools$components$editor$monaco_editor(_){
var editor_instance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var subscription = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var on_change_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ignore_change_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var current_theme = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.theme","current-theme","bb-web-ds-tools.events.theme/current-theme",-1882747906)], null));
var global_settings = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.events.settings","editor-settings","bb-web-ds-tools.events.settings/editor-settings",74758155)], null));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),"monaco-editor",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
try{var map__24986 = reagent.core.props(this$);
var map__24986__$1 = cljs.core.__destructure_map(map__24986);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var node = shadow.js.shim.module$react_dom.findDOMNode(this$);
var lang = (function (){var or__5025__auto__ = language;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__24987 = mode;
switch (G__24987) {
case "application/json":
return "json";

break;
case "markdown":
return "markdown";

break;
default:
return "clojure";

}
}
})();
var editor = shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.create(node,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"scrollBeyondLastLine","scrollBeyondLastLine",1848448074),new cljs.core.Keyword(null,"automaticLayout","automaticLayout",464261837),new cljs.core.Keyword(null,"wordWrap","wordWrap",-1526424241),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"linenumber","linenumber",-2041594922),new cljs.core.Keyword(null,"fontSize","fontSize",919623033)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),false,true,new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(global_settings),"off"),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.name(cljs.core.deref(current_theme));
}
})(),"'Source Code Pro', monospace",lang,"off",new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(global_settings),(14))]),options], 0))));
cljs.core.reset_BANG_(editor_instance,editor);

cljs.core.reset_BANG_(on_change_ref,on_change);

if(cljs.core.truth_(on_mount)){
(on_mount.cljs$core$IFn$_invoke$arity$1 ? on_mount.cljs$core$IFn$_invoke$arity$1(editor) : on_mount.call(null,editor));
} else {
}

var sub_25006 = editor.onDidChangeModelContent((function (){
cljs.core.reset_BANG_(ignore_change_QMARK_,true);

var new_val_25007 = editor.getValue();
var temp__5825__auto___25008 = cljs.core.deref(on_change_ref);
if(cljs.core.truth_(temp__5825__auto___25008)){
var handler_25009 = temp__5825__auto___25008;
if(cljs.core.vector_QMARK_(handler_25009)){
re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(handler_25009,new_val_25007));
} else {
(handler_25009.cljs$core$IFn$_invoke$arity$1 ? handler_25009.cljs$core$IFn$_invoke$arity$1(new_val_25007) : handler_25009.call(null,new_val_25007));
}
} else {
}

return cljs.core.reset_BANG_(ignore_change_QMARK_,false);
}));
cljs.core.reset_BANG_(subscription,sub_25006);

if(cljs.core.truth_(on_focus)){
editor.onDidFocusEditorText(on_focus);
} else {
}

if(cljs.core.truth_(on_blur)){
return editor.onDidBlurEditorText(on_blur);
} else {
return null;
}
}catch (e24985){if((e24985 instanceof Error)){
var e = e24985;
return console.error("Monaco initialization failed:",e);
} else {
throw e24985;

}
}}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__24988){
var vec__24989 = p__24988;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24989,(0),null);
var old_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24989,(1),null);
var map__24992 = reagent.core.props(this$);
var map__24992__$1 = cljs.core.__destructure_map(map__24992);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24992__$1,new cljs.core.Keyword(null,"value","value",305978217));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24992__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24992__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24992__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24992__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var editor = cljs.core.deref(editor_instance);
var settings = cljs.core.deref(global_settings);
cljs.core.reset_BANG_(on_change_ref,on_change);

if(cljs.core.truth_(editor)){
if(((cljs.core.not(cljs.core.deref(ignore_change_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.editor.normalize_value(editor.getValue()),bb_web_ds_tools.components.editor.normalize_value(value))))){
var model_25010 = editor.getModel();
var full_range_25011 = model_25010.getFullModelRange();
editor.executeEdits("update-value",cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range","range",1639692286),full_range_25011,new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"forceMoveMarkers","forceMoveMarkers",236880097),true], null)], null)));

editor.pushUndoStop();
} else {
}

var lang_25017 = (function (){var or__5025__auto__ = language;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__24993 = mode;
switch (G__24993) {
case "application/json":
return "json";

break;
case "markdown":
return "markdown";

break;
default:
return "clojure";

}
}
})();
var model_25018 = editor.getModel();
var current_lang_25019 = (cljs.core.truth_(model_25018)?model_25018.getLanguageId():null);
if(cljs.core.truth_((function (){var and__5023__auto__ = model_25018;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = lang_25017;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_lang_25019,lang_25017);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setModelLanguage(model_25018,lang_25017);
} else {
}

var new_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(settings),new cljs.core.Keyword(null,"wordWrap","wordWrap",-1526424241),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926).cljs$core$IFn$_invoke$arity$1(settings)], null)], 0));
return editor.updateOptions(cljs.core.clj__GT_js(new_options));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var temp__5825__auto___25021 = cljs.core.deref(subscription);
if(cljs.core.truth_(temp__5825__auto___25021)){
var sub_25022 = temp__5825__auto___25021;
sub_25022.dispose();
} else {
}

var temp__5825__auto__ = cljs.core.deref(editor_instance);
if(cljs.core.truth_(temp__5825__auto__)){
var editor = temp__5825__auto__;
return editor.dispose();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (props){
var map__24994 = props;
var map__24994__$1 = cljs.core.__destructure_map(map__24994);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24994__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24994__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor-wrapper","div.editor-wrapper",1872306278),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null),style], 0))], null)], null);
})], null));
});
/**
 * Gets the code to evaluate from the editor (selected text or full content).
 * 
 *   Args:
 *  editor (object): The Monaco editor instance.
 * 
 *   Returns:
 *  string: The code string.
 */
bb_web_ds_tools.components.editor.get_code_to_eval = (function bb_web_ds_tools$components$editor$get_code_to_eval(editor){
var selection = editor.getSelection();
var model = editor.getModel();
if(cljs.core.truth_((function (){var and__5023__auto__ = selection;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(selection.isEmpty());
} else {
return and__5023__auto__;
}
})())){
return model.getValueInRange(selection);
} else {
return editor.getValue();
}
});
/**
 * Gets the Control key constant for the current platform.
 * 
 *   Args:
 *  mac-os? (boolean): Whether running on macOS.
 * 
 *   Returns:
 *  number: The KeyMod constant.
 */
bb_web_ds_tools.components.editor.get_ctrl_key = (function bb_web_ds_tools$components$editor$get_ctrl_key(mac_os_QMARK_){

if(cljs.core.truth_(mac_os_QMARK_)){
return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.KeyMod.WinCtrl;
} else {
return shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.KeyMod.CtrlCmd;
}
});
/**
 * Sets up standard actions (like Evaluate Buffer) for the editor.
 * 
 *   Args:
 *  editor (object): The editor instance.
 *  mac-os? (boolean): Platform flag.
 *  eval-action (fn): Callback(code) to execute.
 * 
 *   Returns:
 *  nil.
 */
bb_web_ds_tools.components.editor.setup_editor_actions = (function bb_web_ds_tools$components$editor$setup_editor_actions(editor,mac_os_QMARK_,eval_action){
var ctrl_key = bb_web_ds_tools.components.editor.get_ctrl_key(mac_os_QMARK_);
return editor.addAction(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"eval-buffer",new cljs.core.Keyword(null,"label","label",1718410804),"Evaluate Buffer",new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ctrl_key | shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.KeyCode.Enter)], null),new cljs.core.Keyword(null,"run","run",-1821166653),(function (ed){
var G__24995 = bb_web_ds_tools.components.editor.get_code_to_eval(ed);
return (eval_action.cljs$core$IFn$_invoke$arity$1 ? eval_action.cljs$core$IFn$_invoke$arity$1(G__24995) : eval_action.call(null,G__24995));
})], null)));
});
/**
 * Renders a list of output messages.
 * 
 *   Args:
 *  output (seq): List of message maps {:type :text}.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.components.editor.render_output = (function bb_web_ds_tools$components$editor$render_output(output){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$editor$render_output_$_iter__24996(s__24997){
return (new cljs.core.LazySeq(null,(function (){
var s__24997__$1 = s__24997;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__24997__$1);
if(temp__5825__auto__){
var s__24997__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24997__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__24997__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__24999 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__24998 = (0);
while(true){
if((i__24998 < size__5502__auto__)){
var map__25000 = cljs.core._nth(c__5501__auto__,i__24998);
var map__25000__$1 = cljs.core.__destructure_map(map__25000);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25000__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25000__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append(b__24999,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__25001 = type;
var G__25001__$1 = (((G__25001 instanceof cljs.core.Keyword))?G__25001.fqn:null);
switch (G__25001__$1) {
case "result":
return bb_web_ds_tools.theme.text_primary;

break;
case "stdout":
return bb_web_ds_tools.theme.text_primary;

break;
case "stderr":
return bb_web_ds_tools.theme.text_danger;

break;
case "error":
return bb_web_ds_tools.theme.text_danger;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25001__$1)].join('')));

}
})()], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__25026 = (i__24998 + (1));
i__24998 = G__25026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24999),bb_web_ds_tools$components$editor$render_output_$_iter__24996(cljs.core.chunk_rest(s__24997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24999),null);
}
} else {
var map__25002 = cljs.core.first(s__24997__$2);
var map__25002__$1 = cljs.core.__destructure_map(map__25002);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25002__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25002__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__25003 = type;
var G__25003__$1 = (((G__25003 instanceof cljs.core.Keyword))?G__25003.fqn:null);
switch (G__25003__$1) {
case "result":
return bb_web_ds_tools.theme.text_primary;

break;
case "stdout":
return bb_web_ds_tools.theme.text_primary;

break;
case "stderr":
return bb_web_ds_tools.theme.text_danger;

break;
case "error":
return bb_web_ds_tools.theme.text_danger;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25003__$1)].join('')));

}
})()], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),bb_web_ds_tools$components$editor$render_output_$_iter__24996(cljs.core.rest(s__24997__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(output);
})());
});

//# sourceMappingURL=bb_web_ds_tools.components.editor.js.map
