goog.provide('bb_web_ds_tools.editor_bug_test');
bb_web_ds_tools.editor_bug_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583 = (function (meta42584){
this.meta42584 = meta42584;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42585,meta42584__$1){
var self__ = this;
var _42585__$1 = this;
return (new bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583(meta42584__$1));
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42585){
var self__ = this;
var _42585__$1 = this;
return self__.meta42584;
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__42632 = (arguments.length - (1));
switch (G__42632) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.prototype.apply = (function (self__,args42619){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42619)));
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
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
try{var value__11369__auto___42680 = false;
if(value__11369__auto___42680){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___42680,"Editor was not mounted (editor-ref is nil)"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___42680,"Editor was not mounted (editor-ref is nil)"]));
}

}catch (e42643){var t__11416__auto___42681 = e42643;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___42681,"Editor was not mounted (editor-ref is nil)"]));
}
reagent.dom.unmount_component_at_node(div);

document.body.removeChild(div);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
} else {
var model = cljs.core.deref(editor_ref).getModel();
if((model == null)){
try{var value__11369__auto___42682 = false;
if(value__11369__auto___42682){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___42682,"Editor model is nil"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___42682,"Editor model is nil"]));
}

}catch (e42644){var t__11416__auto___42684 = e42644;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___42684,"Editor model is nil"]));
}
reagent.dom.unmount_component_at_node(div);

document.body.removeChild(div);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
} else {
try{var values__11365__auto___42685 = (new cljs.core.List(null,"clojure",(new cljs.core.List(null,model.getLanguageId(),null,(1),null)),(2),null));
var result__11366__auto___42686 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___42685);
if(cljs.core.truth_(result__11366__auto___42686)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",63,new cljs.core.Keyword(null,"pass","pass",1574159993),27,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"clojure",cljs.core.list(new cljs.core.Symbol(null,".getLanguageId",".getLanguageId",1768377697,null),new cljs.core.Symbol(null,"model","model",1971684742,null))),40,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42685),"Initial language should be clojure"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",63,new cljs.core.Keyword(null,"fail","fail",1706214930),27,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"clojure",cljs.core.list(new cljs.core.Symbol(null,".getLanguageId",".getLanguageId",1768377697,null),new cljs.core.Symbol(null,"model","model",1971684742,null))),40,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42685),null,(1),null)),(2),null)),"Initial language should be clojure"]));
}

}catch (e42657){var t__11416__auto___42705 = e42657;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",63,new cljs.core.Keyword(null,"error","error",-978969032),27,40,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"clojure",cljs.core.list(new cljs.core.Symbol(null,".getLanguageId",".getLanguageId",1768377697,null),new cljs.core.Symbol(null,"model","model",1971684742,null))),40,t__11416__auto___42705,"Initial language should be clojure"]));
}
cljs.core.reset_BANG_(language,"r");

reagent.core.flush();

return setTimeout((function (){
var model_42710__$1 = cljs.core.deref(editor_ref).getModel();
if(cljs.core.truth_(model_42710__$1)){
var new_lang_42711 = model_42710__$1.getLanguageId();
try{var values__11365__auto___42712 = (new cljs.core.List(null,"r",(new cljs.core.List(null,new_lang_42711,null,(1),null)),(2),null));
var result__11366__auto___42713 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___42712);
if(cljs.core.truth_(result__11366__auto___42713)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",52,new cljs.core.Keyword(null,"pass","pass",1574159993),36,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"r",new cljs.core.Symbol(null,"new-lang","new-lang",-367490306,null)),53,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42712),["Language should update to r, but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_lang_42711)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",52,new cljs.core.Keyword(null,"fail","fail",1706214930),36,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"r",new cljs.core.Symbol(null,"new-lang","new-lang",-367490306,null)),53,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___42712),null,(1),null)),(2),null)),["Language should update to r, but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_lang_42711)].join('')]));
}

}catch (e42658){var t__11416__auto___42714 = e42658;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/editor_bug_test.cljs",52,new cljs.core.Keyword(null,"error","error",-978969032),36,53,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"r",new cljs.core.Symbol(null,"new-lang","new-lang",-367490306,null)),53,t__11416__auto___42714,["Language should update to r, but got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_lang_42711)].join('')]));
}} else {
try{var value__11369__auto___42718 = false;
if(value__11369__auto___42718){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___42718,"Model disappeared?"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___42718,"Model disappeared?"]));
}

}catch (e42667){var t__11416__auto___42721 = e42667;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___42721,"Model disappeared?"]));
}}

reagent.dom.unmount_component_at_node(div);

document.body.removeChild(div);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(500));
}
}
}),(500));
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42584","meta42584",-1866442039,null)], null);
}));

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.cljs$lang$type = true);

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.cljs$lang$ctorStr = "bb-web-ds-tools.editor-bug-test/t_bb_web_ds_tools$editor_bug_test42583");

(bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.editor-bug-test/t_bb_web_ds_tools$editor_bug_test42583");
}));

/**
 * Positional factory function for bb-web-ds-tools.editor-bug-test/t_bb_web_ds_tools$editor_bug_test42583.
 */
bb_web_ds_tools.editor_bug_test.__GT_t_bb_web_ds_tools$editor_bug_test42583 = (function bb_web_ds_tools$editor_bug_test$__GT_t_bb_web_ds_tools$editor_bug_test42583(meta42584){
return (new bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583(meta42584));
});


bb_web_ds_tools.editor_bug_test.language_update_test = (function bb_web_ds_tools$editor_bug_test$language_update_test(){
return cljs.test.test_var(bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$var);
});
bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.editor_bug_test.t_bb_web_ds_tools$editor_bug_test42583(null));
});

(bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.editor_bug_test.language_update_test;},new cljs.core.Symbol("bb-web-ds-tools.editor-bug-test","language-update-test","bb-web-ds-tools.editor-bug-test/language-update-test",-1885253409,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.editor-bug-test","bb-web-ds-tools.editor-bug-test",1590537972,null),new cljs.core.Symbol(null,"language-update-test","language-update-test",239321535,null),"bb_web_ds_tools/editor_bug_test.cljs",30,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.editor_bug_test.language_update_test)?bb_web_ds_tools.editor_bug_test.language_update_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.editor_bug_test.js.map
