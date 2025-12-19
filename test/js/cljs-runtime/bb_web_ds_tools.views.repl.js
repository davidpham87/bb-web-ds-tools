goog.provide('bb_web_ds_tools.views.repl');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.Keyword(null,"repl","repl",-35398667));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","add-instance","bb-web-ds-tools.views.repl/add-instance",1684010627),(function (db,_){
var new_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"repl","repl",-35398667),new_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"code","code",1586293142),""], null));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),(function (code){
return bb_web_ds_tools.runtime.sci.eval_in_worker(code);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),(function (_,p__32469){
var vec__32470 = p__32469;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),code], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","code","bb-web-ds-tools.views.repl/code",568271212),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null),(function (instances,p__32473){
var vec__32474 = p__32473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32474,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32474,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(instances,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_id,new cljs.core.Keyword(null,"code","code",1586293142)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","mac-os?","bb-web-ds-tools.views.repl/mac-os?",-334402215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","repl-instance-state","bb-web-ds-tools.views.repl/repl-instance-state",1214249521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__32477,_){
var vec__32478 = p__32477;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32478,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32478,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","code","bb-web-ds-tools.views.repl/code",568271212),instance_id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","mac-os?","bb-web-ds-tools.views.repl/mac-os?",-334402215)], null))], null);
}),(function (p__32481,_){
var vec__32483 = p__32481;
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32483,(0),null);
var mac_os_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32483,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137),mac_os_QMARK_], null);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","update-code","bb-web-ds-tools.views.repl/update-code",-179820027),(function (db,p__32487){
var vec__32488 = p__32487;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32488,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32488,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32488,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"repl","repl",-35398667),instance_id,new cljs.core.Keyword(null,"code","code",1586293142)], null),code);
}));
/**
 * Finds the last S-expression before the cursor position.
 * 
 *   Args:
 *  text (string): The code text.
 *  cursor-pos (number): The cursor index.
 * 
 *   Returns:
 *  string: The found S-expression or empty string.
 */
bb_web_ds_tools.views.repl.find_last_sexpr = (function bb_web_ds_tools$views$repl$find_last_sexpr(text,cursor_pos){
var substr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),cursor_pos);
var trimmed = clojure.string.trimr(substr);
var end_idx = ((trimmed).length);
if((end_idx === (0))){
return "";
} else {
var last_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(trimmed,(end_idx - (1)));
var delims = new cljs.core.PersistentArrayMap(null, 3, [")","(","]","[","}","{"], null);
var openers = cljs.core.set(cljs.core.vals(delims));
if(cljs.core.contains_QMARK_(delims,last_char)){
var i = (end_idx - (1));
var stack = cljs.core.PersistentVector.EMPTY;
var in_string_QMARK_ = false;
while(true){
if((i < (0))){
return trimmed;
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(trimmed,i);
if(((in_string_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\"")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(trimmed,(i - (1))),"\\")))))){
var G__32545 = (i - (1));
var G__32546 = stack;
var G__32547 = false;
i = G__32545;
stack = G__32546;
in_string_QMARK_ = G__32547;
continue;
} else {
if(in_string_QMARK_){
var G__32548 = (i - (1));
var G__32549 = stack;
var G__32550 = true;
i = G__32548;
stack = G__32549;
in_string_QMARK_ = G__32550;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\"")){
var G__32551 = (i - (1));
var G__32552 = stack;
var G__32553 = true;
i = G__32551;
stack = G__32552;
in_string_QMARK_ = G__32553;
continue;
} else {
if(cljs.core.contains_QMARK_(delims,c)){
var G__32554 = (i - (1));
var G__32555 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,(delims.cljs$core$IFn$_invoke$arity$1 ? delims.cljs$core$IFn$_invoke$arity$1(c) : delims.call(null,c)));
var G__32556 = false;
i = G__32554;
stack = G__32555;
in_string_QMARK_ = G__32556;
continue;
} else {
if(cljs.core.contains_QMARK_(openers,c)){
var expected = cljs.core.peek(stack);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,expected)){
var new_stack = cljs.core.pop(stack);
if(cljs.core.empty_QMARK_(new_stack)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(trimmed,i);
} else {
var G__32557 = (i - (1));
var G__32558 = new_stack;
var G__32559 = false;
i = G__32557;
stack = G__32558;
in_string_QMARK_ = G__32559;
continue;
}
} else {
var G__32560 = (i - (1));
var G__32561 = stack;
var G__32562 = false;
i = G__32560;
stack = G__32561;
in_string_QMARK_ = G__32562;
continue;
}
} else {
var G__32563 = (i - (1));
var G__32564 = stack;
var G__32565 = false;
i = G__32563;
stack = G__32564;
in_string_QMARK_ = G__32565;
continue;

}
}
}
}
}
}
break;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_char,"\"")){
var i = (end_idx - (2));
while(true){
if((i < (0))){
return trimmed;
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(trimmed,i);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\"")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(trimmed,(i - (1))),"\\")))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(trimmed,i);
} else {
var G__32566 = (i - (1));
i = G__32566;
continue;
}
}
break;
}
} else {
var match = cljs.core.re_find(/[^\s\(\)\[\]\{\}\"]+$/,trimmed);
var or__5025__auto__ = match;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return trimmed;
}

}
}
}
});
/**
 * Combines two key codes into a chord.
 * 
 *   Args:
 *  first-part (number): The first key code.
 *  second-part (number): The second key code.
 * 
 *   Returns:
 *  number: The combined chord.
 */
bb_web_ds_tools.views.repl.key_chord = (function bb_web_ds_tools$views$repl$key_chord(first_part,second_part){
return (first_part | (second_part << (16)));
});
/**
 * Configures custom actions for the Monaco editor.
 * 
 *   Args:
 *  editor (object): The Monaco editor instance.
 *  instance-id (string): The REPL instance ID.
 *  mac-os? (boolean): Whether running on macOS.
 * 
 *   Returns:
 *  nil: Modifies the editor instance.
 */
bb_web_ds_tools.views.repl.setup_editor_actions = (function bb_web_ds_tools$views$repl$setup_editor_actions(editor,instance_id,mac_os_QMARK_){
var eval_action = (function (code){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),instance_id,code], null));
});
var ctrl_key = bb_web_ds_tools.components.editor.get_ctrl_key(mac_os_QMARK_);
bb_web_ds_tools.components.editor.setup_editor_actions(editor,mac_os_QMARK_,eval_action);

return editor.addAction(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"eval-sexpr",new cljs.core.Keyword(null,"label","label",1718410804),"Evaluate Expression",new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.key_chord((ctrl_key | shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.KeyCode.KeyX),(ctrl_key | shadow.js.shim.module$monaco_editor$esm$vs$editor$editor_api.KeyCode.KeyE))], null),new cljs.core.Keyword(null,"run","run",-1821166653),(function (ed){
var pos = ed.getPosition();
var offset = ed.getModel().getOffsetAt(pos);
var code = ed.getValue();
var sexpr = bb_web_ds_tools.views.repl.find_last_sexpr(code,offset);
if((!(cljs.core.empty_QMARK_(sexpr)))){
return eval_action(sexpr);
} else {
return null;
}
})], null)));
});
/**
 * Renders a single REPL instance.
 * 
 *   Args:
 *  props (map): Contains :instance-id and optional :header-content.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.repl.repl_instance = (function bb_web_ds_tools$views$repl$repl_instance(p__32505){
var map__32506 = p__32505;
var map__32506__$1 = cljs.core.__destructure_map(map__32506);
var instance_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32506__$1,new cljs.core.Keyword(null,"instance-id","instance-id",951361263));
var header_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32506__$1,new cljs.core.Keyword(null,"header-content","header-content",-2015916786));
var state_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","repl-instance-state","bb-web-ds-tools.views.repl/repl-instance-state",1214249521),instance_id], null));
return (function (){
var map__32507 = cljs.core.deref(state_sub);
var map__32507__$1 = cljs.core.__destructure_map(map__32507);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32507__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var mac_os_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32507__$1,new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Clojure Code",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32503_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","update-code","bb-web-ds-tools.views.repl/update-code",-179820027),instance_id,p1__32503_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__32504_SHARP_){
return bb_web_ds_tools.views.repl.setup_editor_actions(p1__32504_SHARP_,instance_id,mac_os_QMARK_);
})], null)], null),new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),instance_id,code], null));
})], null),"Eval"], null)], null)], null);
});
});
/**
 * Handles messages from the SCI worker.
 * 
 *   Args:
 *  msg (map): The message object.
 * 
 *   Returns:
 *  nil: Dispatches events.
 */
bb_web_ds_tools.views.repl.on_worker_message = (function bb_web_ds_tools$views$repl$on_worker_message(msg){
var map__32508 = msg;
var map__32508__$1 = cljs.core.__destructure_map(map__32508);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32508__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32508__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32508__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__32509 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__32509__$1 = (((G__32509 instanceof cljs.core.Keyword))?G__32509.fqn:null);
switch (G__32509__$1) {
case "dispatch":
return re_frame.core.dispatch(event);

break;
case "error":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),msg], null));

break;
case "result":
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),value], null));

break;
default:
return console.warn("Unknown worker msg:",msg);

}
});
/**
 * Main component for the Clojure REPL view. Initializes SCI on mount.
 * 
 *   Args:
 *  props (map, optional): Configuration props.
 * 
 *   Returns:
 *  vector: A hiccup vector.
 */
bb_web_ds_tools.views.repl.panel = (function bb_web_ds_tools$views$repl$panel(var_args){
var args__5755__auto__ = [];
var len__5749__auto___32572 = arguments.length;
var i__5750__auto___32573 = (0);
while(true){
if((i__5750__auto___32573 < len__5749__auto___32572)){
args__5755__auto__.push((arguments[i__5750__auto___32573]));

var G__32574 = (i__5750__auto___32573 + (1));
i__5750__auto___32573 = G__32574;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.repl.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.repl.panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__32517){
var vec__32518 = p__32517;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32518,(0),null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return bb_web_ds_tools.runtime.sci.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bb_web_ds_tools.views.repl.on_worker_message], 0));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__32575__delegate = function (p__32521){
var vec__32522 = p__32521;
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32522,(0),null);
var instances = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col h-full overflow-y-clip"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$repl$iter__32525(s__32526){
return (new cljs.core.LazySeq(null,(function (){
var s__32526__$1 = s__32526;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__32526__$1);
if(temp__5825__auto__){
var s__32526__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32526__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__32526__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__32528 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__32527 = (0);
while(true){
if((i__32527 < size__5502__auto__)){
var vec__32529 = cljs.core._nth(c__5501__auto__,i__32527);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32529,(0),null);
cljs.core.chunk_append(b__32528,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.repl_instance,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance-id","instance-id",951361263),instance_id], null),props__$1], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),instance_id], null)));

var G__32582 = (i__32527 + (1));
i__32527 = G__32582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32528),bb_web_ds_tools$views$repl$iter__32525(cljs.core.chunk_rest(s__32526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32528),null);
}
} else {
var vec__32532 = cljs.core.first(s__32526__$2);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32532,(0),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.repl_instance,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance-id","instance-id",951361263),instance_id], null),props__$1], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),instance_id], null)),bb_web_ds_tools$views$repl$iter__32525(cljs.core.rest(s__32526__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.deref(instances));
})())], null);
};
var G__32575 = function (var_args){
var p__32521 = null;
if (arguments.length > 0) {
var G__32583__i = 0, G__32583__a = new Array(arguments.length -  0);
while (G__32583__i < G__32583__a.length) {G__32583__a[G__32583__i] = arguments[G__32583__i + 0]; ++G__32583__i;}
  p__32521 = new cljs.core.IndexedSeq(G__32583__a,0,null);
} 
return G__32575__delegate.call(this,p__32521);};
G__32575.cljs$lang$maxFixedArity = 0;
G__32575.cljs$lang$applyTo = (function (arglist__32585){
var p__32521 = cljs.core.seq(arglist__32585);
return G__32575__delegate(p__32521);
});
G__32575.cljs$core$IFn$_invoke$arity$variadic = G__32575__delegate;
return G__32575;
})()
], null));
}));

(bb_web_ds_tools.views.repl.panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.repl.panel.cljs$lang$applyTo = (function (seq32514){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32514));
}));


//# sourceMappingURL=bb_web_ds_tools.views.repl.js.map
