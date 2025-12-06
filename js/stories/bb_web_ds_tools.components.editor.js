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

$CLJS.SHADOW_ENV.setLoaded("bb_web_ds_tools.components.editor.js");

goog.provide('bb_web_ds_tools.components.editor');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.components !== 'undefined') && (typeof bb_web_ds_tools.components.editor !== 'undefined') && (typeof bb_web_ds_tools.components.editor.theme_initialized !== 'undefined')){
} else {
bb_web_ds_tools.components.editor.theme_initialized = (function (){try{shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.defineTheme("zenburn",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"base","base",185279322),"vs-dark",new cljs.core.Keyword(null,"inherit","inherit",-1840815422),true,new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"bg-page","bg-page",-494934192)),new cljs.core.Keyword(null,"foreground","foreground",499022036),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"text-primary","text-primary",803135474))], null)], null),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"editor.background","editor.background",2026633319),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"bg-page","bg-page",-494934192)),new cljs.core.Keyword(null,"editor.foreground","editor.foreground",1303499970),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"text-primary","text-primary",803135474)),new cljs.core.Keyword(null,"editorCursor.foreground","editorCursor.foreground",1866693001),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"text-muted","text-muted",1792287758)),new cljs.core.Keyword(null,"editor.lineHighlightBackground","editor.lineHighlightBackground",-130612686),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"bg-card","bg-card",-1712632517)),new cljs.core.Keyword(null,"editor.selectionBackground","editor.selectionBackground",-454164974),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"bg-button","bg-button",40627543)),new cljs.core.Keyword(null,"editor.inactiveSelectionBackground","editor.inactiveSelectionBackground",997371136),bb_web_ds_tools.theme.color(new cljs.core.Keyword(null,"bg-card","bg-card",-1712632517))], null)], null)));

return true;
}catch (e24828){if((e24828 instanceof Error)){
var e = e24828;
console.warn("Failed to define Zenburn theme",e);

return false;
} else {
throw e24828;

}
}})();
}
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
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),"monaco-editor",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
try{var map__24830 = reagent.core.props(this$);
var map__24830__$1 = cljs.core.__destructure_map(map__24830);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24830__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var node = shadow.js.shim.module$react_dom.findDOMNode(this$);
var lang = (function (){var or__5025__auto__ = language;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__24831 = mode;
switch (G__24831) {
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
var editor = shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.create(node,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"minimap","minimap",-1428643929),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"scrollBeyondLastLine","scrollBeyondLastLine",1848448074),new cljs.core.Keyword(null,"automaticLayout","automaticLayout",464261837),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"language","language",-1591107564),new cljs.core.Keyword(null,"linenumber","linenumber",-2041594922),new cljs.core.Keyword(null,"fontSize","fontSize",919623033)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),false,true,"zenburn","Menlo, Monaco, 'Courier New', monospace",lang,"off",(14)]),options], 0))));
cljs.core.reset_BANG_(editor_instance,editor);

cljs.core.reset_BANG_(on_change_ref,on_change);

if(cljs.core.truth_(on_mount)){
(on_mount.cljs$core$IFn$_invoke$arity$1 ? on_mount.cljs$core$IFn$_invoke$arity$1(editor) : on_mount.call(null,editor));
} else {
}

var sub_24857 = editor.onDidChangeModelContent((function (){
cljs.core.reset_BANG_(ignore_change_QMARK_,true);

var new_val_24858 = editor.getValue();
var temp__5825__auto___24859 = cljs.core.deref(on_change_ref);
if(cljs.core.truth_(temp__5825__auto___24859)){
var handler_24860 = temp__5825__auto___24859;
if(cljs.core.vector_QMARK_(handler_24860)){
re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(handler_24860,new_val_24858));
} else {
(handler_24860.cljs$core$IFn$_invoke$arity$1 ? handler_24860.cljs$core$IFn$_invoke$arity$1(new_val_24858) : handler_24860.call(null,new_val_24858));
}
} else {
}

return cljs.core.reset_BANG_(ignore_change_QMARK_,false);
}));
cljs.core.reset_BANG_(subscription,sub_24857);

if(cljs.core.truth_(on_focus)){
editor.onDidFocusEditorText(on_focus);
} else {
}

if(cljs.core.truth_(on_blur)){
return editor.onDidBlurEditorText(on_blur);
} else {
return null;
}
}catch (e24829){if((e24829 instanceof Error)){
var e = e24829;
return console.error("Monaco initialization failed:",e);
} else {
throw e24829;

}
}}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__24834){
var vec__24835 = p__24834;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24835,(0),null);
var old_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24835,(1),null);
var map__24838 = reagent.core.props(this$);
var map__24838__$1 = cljs.core.__destructure_map(map__24838);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24838__$1,new cljs.core.Keyword(null,"value","value",305978217));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24838__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24838__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24838__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24838__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var editor = cljs.core.deref(editor_instance);
cljs.core.reset_BANG_(on_change_ref,on_change);

if(cljs.core.truth_(editor)){
if(((cljs.core.not(cljs.core.deref(ignore_change_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(editor.getValue(),value)))){
editor.setValue((function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
} else {
}

var lang_24861 = (function (){var or__5025__auto__ = language;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__24839 = mode;
switch (G__24839) {
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
var model_24862 = editor.getModel();
var current_lang_24863 = (cljs.core.truth_(model_24862)?model_24862.getLanguageId():null);
if(cljs.core.truth_((function (){var and__5023__auto__ = model_24862;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = lang_24861;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_lang_24863,lang_24861);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setModelLanguage(model_24862,lang_24861);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(old_props),options)){
return editor.updateOptions(cljs.core.clj__GT_js(options));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var temp__5825__auto___24865 = cljs.core.deref(subscription);
if(cljs.core.truth_(temp__5825__auto___24865)){
var sub_24866 = temp__5825__auto___24865;
sub_24866.dispose();
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
var map__24842 = props;
var map__24842__$1 = cljs.core.__destructure_map(map__24842);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24842__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24842__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var G__24843 = bb_web_ds_tools.components.editor.get_code_to_eval(ed);
return (eval_action.cljs$core$IFn$_invoke$arity$1 ? eval_action.cljs$core$IFn$_invoke$arity$1(G__24843) : eval_action.call(null,G__24843));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$editor$render_output_$_iter__24844(s__24845){
return (new cljs.core.LazySeq(null,(function (){
var s__24845__$1 = s__24845;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__24845__$1);
if(temp__5825__auto__){
var s__24845__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24845__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__24845__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__24847 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__24846 = (0);
while(true){
if((i__24846 < size__5502__auto__)){
var map__24850 = cljs.core._nth(c__5501__auto__,i__24846);
var map__24850__$1 = cljs.core.__destructure_map(map__24850);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append(b__24847,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__24851 = type;
var G__24851__$1 = (((G__24851 instanceof cljs.core.Keyword))?G__24851.fqn:null);
switch (G__24851__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24851__$1)].join('')));

}
})()], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__24870 = (i__24846 + (1));
i__24846 = G__24870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24847),bb_web_ds_tools$components$editor$render_output_$_iter__24844(cljs.core.chunk_rest(s__24845__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24847),null);
}
} else {
var map__24852 = cljs.core.first(s__24845__$2);
var map__24852__$1 = cljs.core.__destructure_map(map__24852);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24852__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__24853 = type;
var G__24853__$1 = (((G__24853 instanceof cljs.core.Keyword))?G__24853.fqn:null);
switch (G__24853__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24853__$1)].join('')));

}
})()], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),bb_web_ds_tools$components$editor$render_output_$_iter__24844(cljs.core.rest(s__24845__$2)));
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
