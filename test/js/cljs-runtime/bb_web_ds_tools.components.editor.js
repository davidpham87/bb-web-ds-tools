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
try{var map__22663 = reagent.core.props(this$);
var map__22663__$1 = cljs.core.__destructure_map(map__22663);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var on_mount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22663__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var node = shadow.js.shim.module$react_dom.findDOMNode(this$);
var lang = (function (){var or__5025__auto__ = language;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__22664 = mode;
switch (G__22664) {
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

var sub_22698 = editor.onDidChangeModelContent((function (){
cljs.core.reset_BANG_(ignore_change_QMARK_,true);

var new_val_22699 = editor.getValue();
var temp__5825__auto___22700 = cljs.core.deref(on_change_ref);
if(cljs.core.truth_(temp__5825__auto___22700)){
var handler_22701 = temp__5825__auto___22700;
if(cljs.core.vector_QMARK_(handler_22701)){
re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(handler_22701,new_val_22699));
} else {
(handler_22701.cljs$core$IFn$_invoke$arity$1 ? handler_22701.cljs$core$IFn$_invoke$arity$1(new_val_22699) : handler_22701.call(null,new_val_22699));
}
} else {
}

return cljs.core.reset_BANG_(ignore_change_QMARK_,false);
}));
cljs.core.reset_BANG_(subscription,sub_22698);

if(cljs.core.truth_(on_focus)){
editor.onDidFocusEditorText(on_focus);
} else {
}

if(cljs.core.truth_(on_blur)){
return editor.onDidBlurEditorText(on_blur);
} else {
return null;
}
}catch (e22662){if((e22662 instanceof Error)){
var e = e22662;
return console.error("Monaco initialization failed:",e);
} else {
throw e22662;

}
}}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__22672){
var vec__22673 = p__22672;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22673,(0),null);
var old_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22673,(1),null);
var map__22676 = reagent.core.props(this$);
var map__22676__$1 = cljs.core.__destructure_map(map__22676);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22676__$1,new cljs.core.Keyword(null,"value","value",305978217));
var language = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22676__$1,new cljs.core.Keyword(null,"language","language",-1591107564));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22676__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22676__$1,new cljs.core.Keyword(null,"options","options",99638489));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22676__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var editor = cljs.core.deref(editor_instance);
var settings = cljs.core.deref(global_settings);
cljs.core.reset_BANG_(on_change_ref,on_change);

if(cljs.core.truth_(editor)){
if(((cljs.core.not(cljs.core.deref(ignore_change_QMARK_))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.components.editor.normalize_value(editor.getValue()),bb_web_ds_tools.components.editor.normalize_value(value))))){
var model_22704 = editor.getModel();
var full_range_22705 = model_22704.getFullModelRange();
editor.executeEdits("update-value",cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"range","range",1639692286),full_range_22705,new cljs.core.Keyword(null,"text","text",-1790561697),(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"forceMoveMarkers","forceMoveMarkers",236880097),true], null)], null)));

editor.pushUndoStop();
} else {
}

var lang_22706 = (function (){var or__5025__auto__ = language;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__22682 = mode;
switch (G__22682) {
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
var model_22707 = editor.getModel();
var current_lang_22708 = (cljs.core.truth_(model_22707)?model_22707.getLanguageId():null);
if(cljs.core.truth_((function (){var and__5023__auto__ = model_22707;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = lang_22706;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_lang_22708,lang_22706);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.editor.setModelLanguage(model_22707,lang_22706);
} else {
}

var new_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(settings),new cljs.core.Keyword(null,"wordWrap","wordWrap",-1526424241),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926).cljs$core$IFn$_invoke$arity$1(settings)], null)], 0));
return editor.updateOptions(cljs.core.clj__GT_js(new_options));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
var temp__5825__auto___22710 = cljs.core.deref(subscription);
if(cljs.core.truth_(temp__5825__auto___22710)){
var sub_22711 = temp__5825__auto___22710;
sub_22711.dispose();
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
var map__22683 = props;
var map__22683__$1 = cljs.core.__destructure_map(map__22683);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22683__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var G__22684 = bb_web_ds_tools.components.editor.get_code_to_eval(ed);
return (eval_action.cljs$core$IFn$_invoke$arity$1 ? eval_action.cljs$core$IFn$_invoke$arity$1(G__22684) : eval_action.call(null,G__22684));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$components$editor$render_output_$_iter__22686(s__22687){
return (new cljs.core.LazySeq(null,(function (){
var s__22687__$1 = s__22687;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22687__$1);
if(temp__5825__auto__){
var s__22687__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22687__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__22687__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__22689 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__22688 = (0);
while(true){
if((i__22688 < size__5502__auto__)){
var map__22690 = cljs.core._nth(c__5501__auto__,i__22688);
var map__22690__$1 = cljs.core.__destructure_map(map__22690);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22690__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append(b__22689,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__22691 = type;
var G__22691__$1 = (((G__22691 instanceof cljs.core.Keyword))?G__22691.fqn:null);
switch (G__22691__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22691__$1)].join('')));

}
})()], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)));

var G__22713 = (i__22688 + (1));
i__22688 = G__22713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22689),bb_web_ds_tools$components$editor$render_output_$_iter__22686(cljs.core.chunk_rest(s__22687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22689),null);
}
} else {
var map__22695 = cljs.core.first(s__22687__$2);
var map__22695__$1 = cljs.core.__destructure_map(map__22695);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22695__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__22696 = type;
var G__22696__$1 = (((G__22696 instanceof cljs.core.Keyword))?G__22696.fqn:null);
switch (G__22696__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22696__$1)].join('')));

}
})()], null),text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null)),bb_web_ds_tools$components$editor$render_output_$_iter__22686(cljs.core.rest(s__22687__$2)));
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
