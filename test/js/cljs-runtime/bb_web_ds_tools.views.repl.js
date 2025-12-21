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
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),(function (_,p__32624){
var vec__32625 = p__32624;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32625,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32625,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32625,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),code], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","code","bb-web-ds-tools.views.repl/code",568271212),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null),(function (instances,p__32630){
var vec__32636 = p__32630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32636,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32636,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(instances,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_id,new cljs.core.Keyword(null,"code","code",1586293142)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","mac-os?","bb-web-ds-tools.views.repl/mac-os?",-334402215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","repl-instance-state","bb-web-ds-tools.views.repl/repl-instance-state",1214249521),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__32643,_){
var vec__32644 = p__32643;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32644,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32644,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","code","bb-web-ds-tools.views.repl/code",568271212),instance_id], null)),re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","mac-os?","bb-web-ds-tools.views.repl/mac-os?",-334402215)], null))], null);
}),(function (p__32647,_){
var vec__32648 = p__32647;
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648,(0),null);
var mac_os_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137),mac_os_QMARK_], null);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","update-code","bb-web-ds-tools.views.repl/update-code",-179820027),(function (db,p__32651){
var vec__32652 = p__32651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32652,(2),null);
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
var G__32691 = (i - (1));
var G__32692 = stack;
var G__32693 = false;
i = G__32691;
stack = G__32692;
in_string_QMARK_ = G__32693;
continue;
} else {
if(in_string_QMARK_){
var G__32694 = (i - (1));
var G__32695 = stack;
var G__32696 = true;
i = G__32694;
stack = G__32695;
in_string_QMARK_ = G__32696;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\"")){
var G__32697 = (i - (1));
var G__32698 = stack;
var G__32699 = true;
i = G__32697;
stack = G__32698;
in_string_QMARK_ = G__32699;
continue;
} else {
if(cljs.core.contains_QMARK_(delims,c)){
var G__32700 = (i - (1));
var G__32701 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,(delims.cljs$core$IFn$_invoke$arity$1 ? delims.cljs$core$IFn$_invoke$arity$1(c) : delims.call(null,c)));
var G__32702 = false;
i = G__32700;
stack = G__32701;
in_string_QMARK_ = G__32702;
continue;
} else {
if(cljs.core.contains_QMARK_(openers,c)){
var expected = cljs.core.peek(stack);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,expected)){
var new_stack = cljs.core.pop(stack);
if(cljs.core.empty_QMARK_(new_stack)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(trimmed,i);
} else {
var G__32703 = (i - (1));
var G__32704 = new_stack;
var G__32705 = false;
i = G__32703;
stack = G__32704;
in_string_QMARK_ = G__32705;
continue;
}
} else {
var G__32706 = (i - (1));
var G__32707 = stack;
var G__32708 = false;
i = G__32706;
stack = G__32707;
in_string_QMARK_ = G__32708;
continue;
}
} else {
var G__32709 = (i - (1));
var G__32710 = stack;
var G__32711 = false;
i = G__32709;
stack = G__32710;
in_string_QMARK_ = G__32711;
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
var G__32712 = (i - (1));
i = G__32712;
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
bb_web_ds_tools.views.repl.repl_instance = (function bb_web_ds_tools$views$repl$repl_instance(p__32662){
var map__32663 = p__32662;
var map__32663__$1 = cljs.core.__destructure_map(map__32663);
var instance_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663__$1,new cljs.core.Keyword(null,"instance-id","instance-id",951361263));
var header_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663__$1,new cljs.core.Keyword(null,"header-content","header-content",-2015916786));
var state_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","repl-instance-state","bb-web-ds-tools.views.repl/repl-instance-state",1214249521),instance_id], null));
return (function (){
var map__32664 = cljs.core.deref(state_sub);
var map__32664__$1 = cljs.core.__destructure_map(map__32664);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32664__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var mac_os_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32664__$1,new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.tool_view.tool_view,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Clojure Code",new cljs.core.Keyword(null,"wiki-key","wiki-key",-1495409073),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__32660_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","update-code","bb-web-ds-tools.views.repl/update-code",-179820027),instance_id,p1__32660_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__32661_SHARP_){
return bb_web_ds_tools.views.repl.setup_editor_actions(p1__32661_SHARP_,instance_id,mac_os_QMARK_);
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
var map__32667 = msg;
var map__32667__$1 = cljs.core.__destructure_map(map__32667);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32667__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32667__$1,new cljs.core.Keyword(null,"event","event",301435442));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32667__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__32668 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__32668__$1 = (((G__32668 instanceof cljs.core.Keyword))?G__32668.fqn:null);
switch (G__32668__$1) {
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
var len__5749__auto___32714 = arguments.length;
var i__5750__auto___32715 = (0);
while(true){
if((i__5750__auto___32715 < len__5749__auto___32714)){
args__5755__auto__.push((arguments[i__5750__auto___32715]));

var G__32717 = (i__5750__auto___32715 + (1));
i__5750__auto___32715 = G__32717;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return bb_web_ds_tools.views.repl.panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(bb_web_ds_tools.views.repl.panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__32671){
var vec__32672 = p__32671;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32672,(0),null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return bb_web_ds_tools.runtime.sci.init_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bb_web_ds_tools.views.repl.on_worker_message], 0));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__32720__delegate = function (p__32675){
var vec__32676 = p__32675;
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32676,(0),null);
var instances = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col h-full overflow-y-clip"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$repl$iter__32679(s__32680){
return (new cljs.core.LazySeq(null,(function (){
var s__32680__$1 = s__32680;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__32680__$1);
if(temp__5825__auto__){
var s__32680__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32680__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__32680__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__32682 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__32681 = (0);
while(true){
if((i__32681 < size__5502__auto__)){
var vec__32684 = cljs.core._nth(c__5501__auto__,i__32681);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32684,(0),null);
cljs.core.chunk_append(b__32682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.repl_instance,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance-id","instance-id",951361263),instance_id], null),props__$1], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),instance_id], null)));

var G__32721 = (i__32681 + (1));
i__32681 = G__32721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32682),bb_web_ds_tools$views$repl$iter__32679(cljs.core.chunk_rest(s__32680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32682),null);
}
} else {
var vec__32687 = cljs.core.first(s__32680__$2);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32687,(0),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.repl_instance,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance-id","instance-id",951361263),instance_id], null),props__$1], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),instance_id], null)),bb_web_ds_tools$views$repl$iter__32679(cljs.core.rest(s__32680__$2)));
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
var G__32720 = function (var_args){
var p__32675 = null;
if (arguments.length > 0) {
var G__32726__i = 0, G__32726__a = new Array(arguments.length -  0);
while (G__32726__i < G__32726__a.length) {G__32726__a[G__32726__i] = arguments[G__32726__i + 0]; ++G__32726__i;}
  p__32675 = new cljs.core.IndexedSeq(G__32726__a,0,null);
} 
return G__32720__delegate.call(this,p__32675);};
G__32720.cljs$lang$maxFixedArity = 0;
G__32720.cljs$lang$applyTo = (function (arglist__32727){
var p__32675 = cljs.core.seq(arglist__32727);
return G__32720__delegate(p__32675);
});
G__32720.cljs$core$IFn$_invoke$arity$variadic = G__32720__delegate;
return G__32720;
})()
], null));
}));

(bb_web_ds_tools.views.repl.panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bb_web_ds_tools.views.repl.panel.cljs$lang$applyTo = (function (seq32669){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32669));
}));


//# sourceMappingURL=bb_web_ds_tools.views.repl.js.map
