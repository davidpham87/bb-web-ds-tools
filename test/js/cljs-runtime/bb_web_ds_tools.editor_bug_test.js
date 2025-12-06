goog.provide('bb_web_ds_tools.editor_bug_test');
bb_web_ds_tools.editor_bug_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262 = (function (meta57263){
this.meta57263 = meta57263;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57264,meta57263__$1){
var self__ = this;
var _57264__$1 = this;
return (new bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262(meta57263__$1));
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57264){
var self__ = this;
var _57264__$1 = this;
return self__.meta57263;
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57268 = (arguments.length - (1));
switch (G__57268) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.prototype.apply = (function (self__,args57266){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57266)));
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var div = document.createElement("div");
var _ = document.body.appendChild(div);
var language = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("clojure");
var editor_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var comp = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.components.editor.monaco_editor,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"(+ 1 1)",new cljs.core.Keyword(null,"language","language",-1591107564),cljs.core.deref(language),new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),(function (ed){
return cljs.core.reset_BANG_(editor_ref,ed);
})], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp], null),div);

return setTimeout((function (){
if((cljs.core.deref(editor_ref) == null)){
try{var value__11369__auto___57302 = false;
if(value__11369__auto___57302){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___57302,"Editor was not mounted (editor-ref is nil)"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___57302,"Editor was not mounted (editor-ref is nil)"]));
}

}catch (e57270){var t__11416__auto___57303 = e57270;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___57303,"Editor was not mounted (editor-ref is nil)"]));
}
reagent.dom.unmount_component_at_node(div);

document.body.removeChild(div);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
} else {
var model = cljs.core.deref(editor_ref).getModel();
if((model == null)){
try{var value__11369__auto___57305 = false;
if(value__11369__auto___57305){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___57305,"Editor model is nil"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___57305,"Editor model is nil"]));
}

}catch (e57272){var t__11416__auto___57308 = e57272;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___57308,"Editor model is nil"]));
}
reagent.dom.unmount_component_at_node(div);

document.body.removeChild(div);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
} else {
try{var values__11365__auto___57309 = (new cljs.core.List(null,"clojure",(new cljs.core.List(null,model.getLanguageId(),null,(1),null)),(2),null));
var result__11366__auto___57310 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57309);
if(cljs.core.truth_(result__11366__auto___57310)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",58,new cljs.core.Keyword(null,"pass","pass",1574159993),22,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"clojure",cljs.core.list(new cljs.core.Symbol(null,".getLanguageId",".getLanguageId",1768377697,null),new cljs.core.Symbol(null,"model","model",1971684742,null))),40,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57309),"Initial language should be clojure"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",58,new cljs.core.Keyword(null,"fail","fail",1706214930),22,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"clojure",cljs.core.list(new cljs.core.Symbol(null,".getLanguageId",".getLanguageId",1768377697,null),new cljs.core.Symbol(null,"model","model",1971684742,null))),40,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57309),null,(1),null)),(2),null)),"Initial language should be clojure"]));
}

}catch (e57275){var t__11416__auto___57313 = e57275;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",58,new cljs.core.Keyword(null,"error","error",-978969032),22,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"clojure",cljs.core.list(new cljs.core.Symbol(null,".getLanguageId",".getLanguageId",1768377697,null),new cljs.core.Symbol(null,"model","model",1971684742,null))),40,t__11416__auto___57313,"Initial language should be clojure"]));
}
cljs.core.reset_BANG_(language,"r");

reagent.core.flush();

return setTimeout((function (){
var model_57315__$1 = cljs.core.deref(editor_ref).getModel();
if(cljs.core.truth_(model_57315__$1)){
var new_lang_57316 = model_57315__$1.getLanguageId();
try{var values__11365__auto___57317 = (new cljs.core.List(null,"r",(new cljs.core.List(null,new_lang_57316,null,(1),null)),(2),null));
var result__11366__auto___57318 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57317);
if(cljs.core.truth_(result__11366__auto___57318)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",48,new cljs.core.Keyword(null,"pass","pass",1574159993),32,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"r",new cljs.core.Symbol(null,"new-lang","new-lang",-367490306,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57317),["Language should update to r, but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_lang_57316)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",48,new cljs.core.Keyword(null,"fail","fail",1706214930),32,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"r",new cljs.core.Symbol(null,"new-lang","new-lang",-367490306,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57317),null,(1),null)),(2),null)),["Language should update to r, but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_lang_57316)].join('')]));
}

}catch (e57282){var t__11416__auto___57321 = e57282;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",48,new cljs.core.Keyword(null,"error","error",-978969032),32,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"r",new cljs.core.Symbol(null,"new-lang","new-lang",-367490306,null)),53,t__11416__auto___57321,["Language should update to r, but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_lang_57316)].join('')]));
}} else {
try{var value__11369__auto___57322 = false;
if(value__11369__auto___57322){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___57322,"Model disappeared?"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___57322,"Model disappeared?"]));
}

}catch (e57286){var t__11416__auto___57324 = e57286;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___57324,"Model disappeared?"]));
}}

reagent.dom.unmount_component_at_node(div);

document.body.removeChild(div);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(500));
}
}
}),(500));
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta57263","meta57263",1888580052,null)], null);
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.cljs$lang$type = true);

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.cljs$lang$ctorStr = "bb-web-ds-tools.editor-bug-test/t_bb_web_ds_tools$editor_bug_test57262");

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.editor-bug-test/t_bb_web_ds_tools$editor_bug_test57262");
}));

/**
 * Positional factory function for bb-web-ds-tools.editor-bug-test/t_bb_web_ds_tools$editor_bug_test57262.
 */
bb_web_ds_tools.editor_bug_test.__GT_t_bb_web_ds_tools$editor_bug_test57262 = (function bb_web_ds_tools$editor_bug_test$__GT_t_bb_web_ds_tools$editor_bug_test57262(meta57263){
return (new bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262(meta57263));
});


bb_web_ds_tools.editor_bug_test.language_update_test = (function bb_web_ds_tools$editor_bug_test$language_update_test(){
return cljs.test.test_var(bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$var);
});
bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test57262(null));
});

(bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.editor_bug_test.language_update_test;},new cljs.core.Symbol("bb-web-ds-tools.editor-bug-test","language-update-test","bb-web-ds-tools.editor-bug-test/language-update-test",-1885253409,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.editor-bug-test","bb-web-ds-tools.editor-bug-test",1590537972,null),new cljs.core.Symbol(null,"language-update-test","language-update-test",239321535,null),"bb_web_ds_tools/editor_bug_test.cljs",30,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.editor_bug_test.language_update_test)?bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.editor_bug_test.js.map
