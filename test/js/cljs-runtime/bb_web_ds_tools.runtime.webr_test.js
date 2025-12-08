goog.provide('bb_web_ds_tools.runtime.webr_test');
bb_web_ds_tools.runtime.webr_test.submitted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
bb_web_ds_tools.runtime.webr_test.mock_submit = (function bb_web_ds_tools$runtime$webr_test$mock_submit(val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(bb_web_ds_tools.runtime.webr_test.submitted,cljs.core.conj,val);
});
bb_web_ds_tools.runtime.webr_test.mock_result = ({"destroy": (function (){
return null;
}), "toJs": (function (){
return (42);
}), "toString": (function (){
return "Result: 1 + 1";
})});
bb_web_ds_tools.runtime.webr_test.mock_capture_output = ({"result": bb_web_ds_tools.runtime.webr_test.mock_result, "output": [], "images": []});
bb_web_ds_tools.runtime.webr_test.MockShelter = (function bb_web_ds_tools$runtime$webr_test$MockShelter(){
var this$ = this;
(this$.captureR = (function (_,___$1){
return Promise.resolve(bb_web_ds_tools.runtime.webr_test.mock_capture_output);
}));

(this$.purge = (function (){
return Promise.resolve();
}));

return this$;
});
bb_web_ds_tools.runtime.webr_test.mock_webr_proto = ({"init": (function (){
return Promise.resolve();
}), "read": (function (){
return Promise.resolve(({"type": "closed", "data": ""}));
}), "evalR": (function (code,_){
return Promise.resolve(bb_web_ds_tools.runtime.webr_test.mock_result);
}), "Shelter": bb_web_ds_tools.runtime.webr_test.MockShelter});
bb_web_ds_tools.runtime.webr_test.mock_WebR = (function bb_web_ds_tools$runtime$webr_test$mock_WebR(_){
return bb_web_ds_tools.runtime.webr_test.mock_webr_proto;
});
bb_web_ds_tools.runtime.webr_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bb_web_ds_tools.test_setup.suppress_re_frame_warnings,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr_test.submitted,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,null);
}),new cljs.core.Keyword(null,"after","after",594996914),(function (){
return null;
})], null)], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624 = (function (orig_webr,orig_submit,meta57625){
this.orig_webr = orig_webr;
this.orig_submit = orig_submit;
this.meta57625 = meta57625;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57626,meta57625__$1){
var self__ = this;
var _57626__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624(self__.orig_webr,self__.orig_submit,meta57625__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57626){
var self__ = this;
var _57626__$1 = this;
return self__.meta57625;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57629 = (arguments.length - (1));
switch (G__57629) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.prototype.apply = (function (self__,args57627){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57627)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return bb_web_ds_tools.runtime.webr.load_runtime_main((function (){
try{var values__11365__auto___57690 = (new cljs.core.List(null,cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance),null,(1),null));
var result__11366__auto___57691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___57690);
if(cljs.core.truth_(result__11366__auto___57691)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),16,54,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),54,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57690),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),16,54,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),54,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57690),null,(1),null)),(2),null)),null]));
}

}catch (e57630){var t__11416__auto___57692 = e57630;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),16,54,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),54,t__11416__auto___57692,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(function (err){
try{var values__11365__auto___57694 = (new cljs.core.List(null,err,null,(1),null));
var result__11366__auto___57695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___57694);
if(cljs.core.truth_(result__11366__auto___57695)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),16,59,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),59,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___57694),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),16,59,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),59,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___57694),null,(1),null)),(2),null)),null]));
}

}catch (e57635){var t__11416__auto___57696 = e57635;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),16,59,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),59,t__11416__auto___57696,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-webr","orig-webr",-1577811534,null),new cljs.core.Symbol(null,"orig-submit","orig-submit",-1907733772,null),new cljs.core.Symbol(null,"meta57625","meta57625",1688591904,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57624");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57624");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57624.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test57624 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test57624(orig_webr,orig_submit,meta57625){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624(orig_webr,orig_submit,meta57625));
});


bb_web_ds_tools.runtime.webr_test.load_runtime_test = (function bb_web_ds_tools$runtime$webr_test$load_runtime_test(){
return cljs.test.test_var(bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$var);
});
bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WebR initialization"], 0));

try{var orig_webr = (((typeof WebR !== 'undefined'))?WebR:null);
var orig_submit = portal.web.submit;
(WebR = bb_web_ds_tools.runtime.webr_test.mock_WebR);

(portal.web.submit = bb_web_ds_tools.runtime.webr_test.mock_submit);

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57624(orig_webr,orig_submit,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.load_runtime_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","load-runtime-test","bb-web-ds-tools.runtime.webr-test/load-runtime-test",342926928,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"load-runtime-test","load-runtime-test",1352339408,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.load_runtime_test)?bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649 = (function (dispatched,mock_dispatch,orig_dispatch,meta57650){
this.dispatched = dispatched;
this.mock_dispatch = mock_dispatch;
this.orig_dispatch = orig_dispatch;
this.meta57650 = meta57650;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57651,meta57650__$1){
var self__ = this;
var _57651__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649(self__.dispatched,self__.mock_dispatch,self__.orig_dispatch,meta57650__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57651){
var self__ = this;
var _57651__$1 = this;
return self__.meta57650;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57657 = (arguments.length - (1));
switch (G__57657) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.prototype.apply = (function (self__,args57656){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57656)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return bb_web_ds_tools.runtime.webr.eval_in_main("1 + 1").then((function (){
try{var values__11365__auto___57704 = (new cljs.core.List(null,(function (p1__57644_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__57644_SHARP_),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__57644_SHARP_),"1 + 1")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__57644_SHARP_,(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814))))));
}),(new cljs.core.List(null,cljs.core.deref(self__.dispatched),null,(1),null)),(2),null));
var result__11366__auto___57705 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___57704);
if(cljs.core.truth_(result__11366__auto___57705)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),26,74,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)),"1 + 1"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),77,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___57704),"Code should be submitted"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),26,74,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)),"1 + 1"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),77,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___57704),null,(1),null)),(2),null)),"Code should be submitted"]));
}

}catch (e57658){var t__11416__auto___57715 = e57658;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),26,74,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null)),"1 + 1"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__57644#","p1__57644#",169519869,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),77,t__11416__auto___57715,"Code should be submitted"]));
}
var res_event_57716 = cljs.core.last(cljs.core.deref(self__.dispatched));
var res_val_57717 = cljs.core.second(res_event_57716);
var res_viewer_57718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(res_event_57716,(2));
try{var values__11365__auto___57720 = (new cljs.core.List(null,cljs.core.first(res_event_57716),(new cljs.core.List(null,new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),null,(1),null)),(2),null));
var result__11366__auto___57721 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57720);
if(cljs.core.truth_(result__11366__auto___57721)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",80,new cljs.core.Keyword(null,"pass","pass",1574159993),28,81,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),81,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57720),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",80,new cljs.core.Keyword(null,"fail","fail",1706214930),28,81,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),81,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57720),null,(1),null)),(2),null)),null]));
}

}catch (e57677){var t__11416__auto___57722 = e57677;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",80,new cljs.core.Keyword(null,"error","error",-978969032),28,81,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),81,t__11416__auto___57722,null]));
}
try{var values__11365__auto___57723 = (new cljs.core.List(null,res_val_57717,(new cljs.core.List(null,(42),null,(1),null)),(2),null));
var result__11366__auto___57724 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57723);
if(cljs.core.truth_(result__11366__auto___57724)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),28,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null),(42)),82,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57723),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),28,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null),(42)),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57723),null,(1),null)),(2),null)),null]));
}

}catch (e57679){var t__11416__auto___57725 = e57679;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),28,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null),(42)),82,t__11416__auto___57725,null]));
}
try{var values__11365__auto___57726 = (new cljs.core.List(null,res_viewer_57718,(new cljs.core.List(null,new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537),null,(1),null)),(2),null));
var result__11366__auto___57727 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57726);
if(cljs.core.truth_(result__11366__auto___57727)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),28,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),83,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57726),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),28,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57726),null,(1),null)),(2),null)),null]));
}

}catch (e57680){var t__11416__auto___57728 = e57680;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),28,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),83,t__11416__auto___57728,null]));
}
(re_frame.core.dispatch = self__.orig_dispatch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
})).catch((function (err){
try{var value__11369__auto___57741 = false;
if(value__11369__auto___57741){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___57741,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___57741,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
}

}catch (e57682){var t__11416__auto___57748 = e57682;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___57748,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
}
(re_frame.core.dispatch = self__.orig_dispatch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null),new cljs.core.Symbol(null,"mock-dispatch","mock-dispatch",1353002580,null),new cljs.core.Symbol(null,"orig-dispatch","orig-dispatch",-2070131405,null),new cljs.core.Symbol(null,"meta57650","meta57650",629704769,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57649");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57649");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57649.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test57649 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test57649(dispatched,mock_dispatch,orig_dispatch,meta57650){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649(dispatched,mock_dispatch,orig_dispatch,meta57650));
});


bb_web_ds_tools.runtime.webr_test.eval_in_main_test = (function bb_web_ds_tools$runtime$webr_test$eval_in_main_test(){
return cljs.test.test_var(bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$var);
});
bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WebR evaluation"], 0));

try{cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,bb_web_ds_tools.runtime.webr_test.mock_webr_proto);

var dispatched = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var mock_dispatch = (function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dispatched,cljs.core.conj,event);
});
var orig_dispatch = re_frame.core.dispatch;
(re_frame.core.dispatch = mock_dispatch);

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57649(dispatched,mock_dispatch,orig_dispatch,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.eval_in_main_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","eval-in-main-test","bb-web-ds-tools.runtime.webr-test/eval-in-main-test",-906090129,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"eval-in-main-test","eval-in-main-test",1950740975,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.eval_in_main_test)?bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.runtime.webr_test.js.map
