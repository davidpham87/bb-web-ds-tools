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
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204 = (function (orig_webr,orig_submit,meta40205){
this.orig_webr = orig_webr;
this.orig_submit = orig_submit;
this.meta40205 = meta40205;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40206,meta40205__$1){
var self__ = this;
var _40206__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204(self__.orig_webr,self__.orig_submit,meta40205__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40206){
var self__ = this;
var _40206__$1 = this;
return self__.meta40205;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__40215 = (arguments.length - (1));
switch (G__40215) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.prototype.apply = (function (self__,args40211){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40211)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return bb_web_ds_tools.runtime.webr.load_runtime_main((function (){
try{var values__11365__auto___40290 = (new cljs.core.List(null,cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance),null,(1),null));
var result__11366__auto___40291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___40290);
if(cljs.core.truth_(result__11366__auto___40291)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),16,55,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),55,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___40290),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),16,55,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),55,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___40290),null,(1),null)),(2),null)),null]));
}

}catch (e40232){var t__11416__auto___40295 = e40232;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),16,55,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),55,t__11416__auto___40295,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(function (err){
try{var values__11365__auto___40297 = (new cljs.core.List(null,err,null,(1),null));
var result__11366__auto___40298 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___40297);
if(cljs.core.truth_(result__11366__auto___40298)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),16,60,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),60,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___40297),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),16,60,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),60,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___40297),null,(1),null)),(2),null)),null]));
}

}catch (e40235){var t__11416__auto___40303 = e40235;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),16,60,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),60,t__11416__auto___40303,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-webr","orig-webr",-1577811534,null),new cljs.core.Symbol(null,"orig-submit","orig-submit",-1907733772,null),new cljs.core.Symbol(null,"meta40205","meta40205",-706286553,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test40204");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test40204");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test40204.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test40204 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test40204(orig_webr,orig_submit,meta40205){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204(orig_webr,orig_submit,meta40205));
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

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40204(orig_webr,orig_submit,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.load_runtime_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","load-runtime-test","bb-web-ds-tools.runtime.webr-test/load-runtime-test",342926928,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"load-runtime-test","load-runtime-test",1352339408,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.load_runtime_test)?bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245 = (function (dispatched,mock_dispatch,orig_dispatch,meta40246){
this.dispatched = dispatched;
this.mock_dispatch = mock_dispatch;
this.orig_dispatch = orig_dispatch;
this.meta40246 = meta40246;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40247,meta40246__$1){
var self__ = this;
var _40247__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245(self__.dispatched,self__.mock_dispatch,self__.orig_dispatch,meta40246__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40247){
var self__ = this;
var _40247__$1 = this;
return self__.meta40246;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__40253 = (arguments.length - (1));
switch (G__40253) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.prototype.apply = (function (self__,args40249){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40249)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(bb_web_ds_tools.runtime.webr.eval_in_main("1 + 1"),(function (_){
try{var values__11365__auto___40308 = (new cljs.core.List(null,(function (p1__40243_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__40243_SHARP_),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__40243_SHARP_),"1 + 1")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__40243_SHARP_,(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814))))));
}),(new cljs.core.List(null,cljs.core.deref(self__.dispatched),null,(1),null)),(2),null));
var result__11366__auto___40309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___40308);
if(cljs.core.truth_(result__11366__auto___40309)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),24,75,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)),"1 + 1"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),78,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___40308),"Code should be submitted"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),24,75,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)),"1 + 1"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),78,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___40308),null,(1),null)),(2),null)),"Code should be submitted"]));
}

}catch (e40261){var t__11416__auto___40322 = e40261;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),24,75,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null)),"1 + 1"),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__40243#","p1__40243#",2118297758,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),78,t__11416__auto___40322,"Code should be submitted"]));
}
var res_event_40323 = cljs.core.last(cljs.core.deref(self__.dispatched));
var res_val_40324 = cljs.core.second(res_event_40323);
var res_viewer_40325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(res_event_40323,(2));
try{var values__11365__auto___40326 = (new cljs.core.List(null,cljs.core.first(res_event_40323),(new cljs.core.List(null,new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),null,(1),null)),(2),null));
var result__11366__auto___40327 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___40326);
if(cljs.core.truth_(result__11366__auto___40327)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),26,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),82,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___40326),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),26,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),82,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___40326),null,(1),null)),(2),null)),null]));
}

}catch (e40273){var t__11416__auto___40328 = e40273;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),26,82,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),82,t__11416__auto___40328,null]));
}
try{var values__11365__auto___40337 = (new cljs.core.List(null,res_val_40324,(new cljs.core.List(null,(42),null,(1),null)),(2),null));
var result__11366__auto___40338 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___40337);
if(cljs.core.truth_(result__11366__auto___40338)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),26,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null),(42)),83,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___40337),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),26,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null),(42)),83,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___40337),null,(1),null)),(2),null)),null]));
}

}catch (e40274){var t__11416__auto___40341 = e40274;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),26,83,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null),(42)),83,t__11416__auto___40341,null]));
}
try{var values__11365__auto___40342 = (new cljs.core.List(null,res_viewer_40325,(new cljs.core.List(null,new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537),null,(1),null)),(2),null));
var result__11366__auto___40343 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___40342);
if(cljs.core.truth_(result__11366__auto___40343)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",59,new cljs.core.Keyword(null,"pass","pass",1574159993),26,84,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),84,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___40342),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",59,new cljs.core.Keyword(null,"fail","fail",1706214930),26,84,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),84,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___40342),null,(1),null)),(2),null)),null]));
}

}catch (e40275){var t__11416__auto___40349 = e40275;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",59,new cljs.core.Keyword(null,"error","error",-978969032),26,84,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),84,t__11416__auto___40349,null]));
}
(re_frame.core.dispatch = self__.orig_dispatch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null),new cljs.core.Symbol(null,"mock-dispatch","mock-dispatch",1353002580,null),new cljs.core.Symbol(null,"orig-dispatch","orig-dispatch",-2070131405,null),new cljs.core.Symbol(null,"meta40246","meta40246",1605977932,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test40245");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test40245");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test40245.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test40245 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test40245(dispatched,mock_dispatch,orig_dispatch,meta40246){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245(dispatched,mock_dispatch,orig_dispatch,meta40246));
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

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test40245(dispatched,mock_dispatch,orig_dispatch,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.eval_in_main_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","eval-in-main-test","bb-web-ds-tools.runtime.webr-test/eval-in-main-test",-906090129,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"eval-in-main-test","eval-in-main-test",1950740975,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,65,65,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.eval_in_main_test)?bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.runtime.webr_test.js.map
