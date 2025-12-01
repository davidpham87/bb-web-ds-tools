goog.provide('bb_web_ds_tools.views.repl');
if((typeof bb_web_ds_tools !== 'undefined') && (typeof bb_web_ds_tools.views !== 'undefined') && (typeof bb_web_ds_tools.views.repl !== 'undefined') && (typeof bb_web_ds_tools.views.repl.sci_worker !== 'undefined')){
} else {
bb_web_ds_tools.views.repl.sci_worker = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
bb_web_ds_tools.views.repl.on_worker_message = (function bb_web_ds_tools$views$repl$on_worker_message(msg){
var map__49437 = msg;
var map__49437__$1 = cljs.core.__destructure_map(map__49437);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49437__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49437__$1,new cljs.core.Keyword(null,"event","event",301435442));
var G__49439 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__49439__$1 = (((G__49439 instanceof cljs.core.Keyword))?G__49439.fqn:null);
switch (G__49439__$1) {
case "dispatch":
return re_frame.core.dispatch(event);

break;
default:
return console.warn("Unknown worker msg:",msg);

}
});
bb_web_ds_tools.views.repl.ensure_worker = (function bb_web_ds_tools$views$repl$ensure_worker(){
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.views.repl.sci_worker))){
return null;
} else {
return cljs.core.reset_BANG_(bb_web_ds_tools.views.repl.sci_worker,bb_web_ds_tools.utils.worker.create_worker.cljs$core$IFn$_invoke$arity$2("js/compiled/sci-worker.js",bb_web_ds_tools.views.repl.on_worker_message));
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.core","user-input","bb-web-ds-tools.core/user-input",1937733608)], null),(function (user_input,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_input,new cljs.core.Keyword(null,"repl","repl",-35398667));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","add-instance","bb-web-ds-tools.views.repl/add-instance",1684010627),(function (db,_){
var new_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"repl","repl",-35398667),new_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"code","code",1586293142),""], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),(function (p__49451,p__49452){
var map__49454 = p__49451;
var map__49454__$1 = cljs.core.__destructure_map(map__49454);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49454__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49455 = p__49452;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49455,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49455,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49455,(2),null);
if(cljs.core.truth_(cljs.core.deref(bb_web_ds_tools.views.repl.sci_worker))){
bb_web_ds_tools.utils.worker.post_message(cljs.core.deref(bb_web_ds_tools.views.repl.sci_worker),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"eval",new cljs.core.Keyword(null,"code","code",1586293142),code], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.portal","update-portal-frame","bb-web-ds-tools.portal/update-portal-frame",-587086852)], null)], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","code","bb-web-ds-tools.views.repl/code",568271212),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null),(function (instances,p__49461){
var vec__49462 = p__49461;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49462,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49462,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(instances,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instance_id,new cljs.core.Keyword(null,"code","code",1586293142)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("bb-web-ds-tools.views.repl","mac-os?","bb-web-ds-tools.views.repl/mac-os?",-334402215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"platform","platform",-1086422114),new cljs.core.Keyword(null,"mac-os?","mac-os?",-1478507137)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("bb-web-ds-tools.views.repl","update-code","bb-web-ds-tools.views.repl/update-code",-179820027),(function (db,p__49473){
var vec__49475 = p__49473;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49475,(0),null);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49475,(1),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49475,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),new cljs.core.Keyword(null,"repl","repl",-35398667),instance_id,new cljs.core.Keyword(null,"code","code",1586293142)], null),code);
}));
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
var G__49602 = (i - (1));
var G__49603 = stack;
var G__49604 = false;
i = G__49602;
stack = G__49603;
in_string_QMARK_ = G__49604;
continue;
} else {
if(in_string_QMARK_){
var G__49605 = (i - (1));
var G__49606 = stack;
var G__49607 = true;
i = G__49605;
stack = G__49606;
in_string_QMARK_ = G__49607;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\"")){
var G__49608 = (i - (1));
var G__49609 = stack;
var G__49610 = true;
i = G__49608;
stack = G__49609;
in_string_QMARK_ = G__49610;
continue;
} else {
if(cljs.core.contains_QMARK_(delims,c)){
var G__49612 = (i - (1));
var G__49613 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,(delims.cljs$core$IFn$_invoke$arity$1 ? delims.cljs$core$IFn$_invoke$arity$1(c) : delims.call(null,c)));
var G__49614 = false;
i = G__49612;
stack = G__49613;
in_string_QMARK_ = G__49614;
continue;
} else {
if(cljs.core.contains_QMARK_(openers,c)){
var expected = cljs.core.peek(stack);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,expected)){
var new_stack = cljs.core.pop(stack);
if(cljs.core.empty_QMARK_(new_stack)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(trimmed,i);
} else {
var G__49615 = (i - (1));
var G__49616 = new_stack;
var G__49617 = false;
i = G__49615;
stack = G__49616;
in_string_QMARK_ = G__49617;
continue;
}
} else {
var G__49618 = (i - (1));
var G__49619 = stack;
var G__49620 = false;
i = G__49618;
stack = G__49619;
in_string_QMARK_ = G__49620;
continue;
}
} else {
var G__49622 = (i - (1));
var G__49623 = stack;
var G__49624 = false;
i = G__49622;
stack = G__49623;
in_string_QMARK_ = G__49624;
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
var G__49628 = (i - (1));
i = G__49628;
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
bb_web_ds_tools.views.repl.key_chord = (function bb_web_ds_tools$views$repl$key_chord(first_part,second_part){
return (first_part | (second_part << (16)));
});
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
bb_web_ds_tools.views.repl.repl_instance = (function bb_web_ds_tools$views$repl$repl_instance(p__49544){
var map__49546 = p__49544;
var map__49546__$1 = cljs.core.__destructure_map(map__49546);
var instance_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49546__$1,new cljs.core.Keyword(null,"instance-id","instance-id",951361263));
var code_sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","code","bb-web-ds-tools.views.repl/code",568271212),instance_id], null));
var mac_os_QMARK__sub = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","mac-os?","bb-web-ds-tools.views.repl/mac-os?",-334402215)], null));
return (function (){
var code = cljs.core.deref(code_sub);
var mac_os_QMARK_ = cljs.core.deref(mac_os_QMARK__sub);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-gray-700 rounded mb-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full w-screen"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-2 w-full max-w-3xl"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.layout.flex_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"justify-between"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.label,"Clojure Code"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.common.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","eval-code","bb-web-ds-tools.views.repl/eval-code",1526213909),instance_id,code], null));
})], null),"Eval"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex-grow rounded overflow-hidden border w-screen-1/2",bb_web_ds_tools.theme.border_default].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"85vh"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),code,new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rulers","rulers",756731282),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(80)], null),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),"off"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49542_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","update-code","bb-web-ds-tools.views.repl/update-code",-179820027),instance_id,p1__49542_SHARP_], null));
}),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (p1__49543_SHARP_){
return bb_web_ds_tools.views.repl.setup_editor_actions(p1__49543_SHARP_,instance_id,mac_os_QMARK_);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.portal.portal_frame], null)], null)], null);
});
});
bb_web_ds_tools.views.repl.panel = (function bb_web_ds_tools$views$repl$panel(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return bb_web_ds_tools.views.repl.ensure_worker();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var instances = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bb-web-ds-tools.views.repl","instances","bb-web-ds-tools.views.repl/instances",-1476688547)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col h-full overflow-y-clip"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var iter__5503__auto__ = (function bb_web_ds_tools$views$repl$panel_$_iter__49555(s__49556){
return (new cljs.core.LazySeq(null,(function (){
var s__49556__$1 = s__49556;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49556__$1);
if(temp__5825__auto__){
var s__49556__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49556__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__49556__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__49558 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__49557 = (0);
while(true){
if((i__49557 < size__5502__auto__)){
var vec__49565 = cljs.core._nth(c__5501__auto__,i__49557);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49565,(0),null);
cljs.core.chunk_append(b__49558,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.repl_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance-id","instance-id",951361263),instance_id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),instance_id], null)));

var G__49651 = (i__49557 + (1));
i__49557 = G__49651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49558),bb_web_ds_tools$views$repl$panel_$_iter__49555(cljs.core.chunk_rest(s__49556__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49558),null);
}
} else {
var vec__49571 = cljs.core.first(s__49556__$2);
var instance_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49571,(0),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.views.repl.repl_instance,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"instance-id","instance-id",951361263),instance_id], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),instance_id], null)),bb_web_ds_tools$views$repl$panel_$_iter__49555(cljs.core.rest(s__49556__$2)));
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
})], null));
});

//# sourceMappingURL=bb_web_ds_tools.views.repl.js.map
