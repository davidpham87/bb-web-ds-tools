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
bb_web_ds_tools.runtime.webr_test.mock_webr_proto = ({"init": (function (){
return Promise.resolve();
}), "read": (function (){
return Promise.resolve(({"type": "closed", "data": ""}));
}), "evalR": (function (code,_){
return Promise.resolve(bb_web_ds_tools.runtime.webr_test.mock_result);
})});
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
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867 = (function (orig_webr,orig_submit,meta57868){
this.orig_webr = orig_webr;
this.orig_submit = orig_submit;
this.meta57868 = meta57868;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57869,meta57868__$1){
var self__ = this;
var _57869__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867(self__.orig_webr,self__.orig_submit,meta57868__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57869){
var self__ = this;
var _57869__$1 = this;
return self__.meta57868;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57871 = (arguments.length - (1));
switch (G__57871) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.prototype.apply = (function (self__,args57870){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57870)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return bb_web_ds_tools.runtime.webr.load_runtime_main((function (){
try{var values__11365__auto___57891 = (new cljs.core.List(null,cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance),null,(1),null));
var result__11366__auto___57892 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___57891);
if(cljs.core.truth_(result__11366__auto___57892)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),16,42,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),42,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57891),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),16,42,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),42,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57891),null,(1),null)),(2),null)),null]));
}

}catch (e57872){var t__11416__auto___57893 = e57872;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),16,42,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),42,t__11416__auto___57893,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(function (err){
try{var values__11365__auto___57901 = (new cljs.core.List(null,err,null,(1),null));
var result__11366__auto___57902 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___57901);
if(cljs.core.truth_(result__11366__auto___57902)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),16,47,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),47,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___57901),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),16,47,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),47,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___57901),null,(1),null)),(2),null)),null]));
}

}catch (e57873){var t__11416__auto___57904 = e57873;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),16,47,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),47,t__11416__auto___57904,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-webr","orig-webr",-1577811534,null),new cljs.core.Symbol(null,"orig-submit","orig-submit",-1907733772,null),new cljs.core.Symbol(null,"meta57868","meta57868",-1889947331,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57867");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57867");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57867.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test57867 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test57867(orig_webr,orig_submit,meta57868){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867(orig_webr,orig_submit,meta57868));
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

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57867(orig_webr,orig_submit,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.load_runtime_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","load-runtime-test","bb-web-ds-tools.runtime.webr-test/load-runtime-test",342926928,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"load-runtime-test","load-runtime-test",1352339408,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.load_runtime_test)?bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875 = (function (dispatched,mock_dispatch,orig_dispatch,meta57876){
this.dispatched = dispatched;
this.mock_dispatch = mock_dispatch;
this.orig_dispatch = orig_dispatch;
this.meta57876 = meta57876;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57877,meta57876__$1){
var self__ = this;
var _57877__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875(self__.dispatched,self__.mock_dispatch,self__.orig_dispatch,meta57876__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57877){
var self__ = this;
var _57877__$1 = this;
return self__.meta57876;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57879 = (arguments.length - (1));
switch (G__57879) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.prototype.apply = (function (self__,args57878){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57878)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return bb_web_ds_tools.runtime.webr.eval_in_main("1 + 1").then((function (){
try{var values__11365__auto___57906 = (new cljs.core.List(null,(function (p1__57874_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__57874_SHARP_),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__57874_SHARP_)),new cljs.core.Keyword(null,"code","code",1586293142))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__57874_SHARP_,(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814))))));
}),(new cljs.core.List(null,cljs.core.deref(self__.dispatched),null,(1),null)),(2),null));
var result__11366__auto___57907 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___57906);
if(cljs.core.truth_(result__11366__auto___57907)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),26,62,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null))),new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),65,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___57906),"Code should be submitted"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),26,62,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null))),new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),65,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___57906),null,(1),null)),(2),null)),"Code should be submitted"]));
}

}catch (e57880){var t__11416__auto___57908 = e57880;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),26,62,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null)], null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null))),new cljs.core.Keyword(null,"code","code",1586293142)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"p1__57874#","p1__57874#",-1932723359,null),(2)),new cljs.core.Keyword("portal.viewer","code","portal.viewer/code",-1645894814)))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null))),65,t__11416__auto___57908,"Code should be submitted"]));
}
var res_event_57909 = cljs.core.last(cljs.core.deref(self__.dispatched));
var res_val_57910 = cljs.core.second(res_event_57909);
var res_viewer_57911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(res_event_57909,(2));
try{var values__11365__auto___57912 = (new cljs.core.List(null,cljs.core.first(res_event_57909),(new cljs.core.List(null,new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846),null,(1),null)),(2),null));
var result__11366__auto___57913 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57912);
if(cljs.core.truth_(result__11366__auto___57913)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",80,new cljs.core.Keyword(null,"pass","pass",1574159993),28,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),69,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57912),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",80,new cljs.core.Keyword(null,"fail","fail",1706214930),28,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),69,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57912),null,(1),null)),(2),null)),null]));
}

}catch (e57881){var t__11416__auto___57914 = e57881;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",80,new cljs.core.Keyword(null,"error","error",-978969032),28,69,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"res-event","res-event",606502555,null)),new cljs.core.Keyword("bb-web-ds-tools.portal","submit","bb-web-ds-tools.portal/submit",1366041846)),69,t__11416__auto___57914,null]));
}
try{var values__11365__auto___57915 = (new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res_val_57910),(new cljs.core.List(null,new cljs.core.Keyword(null,"result","result",1415092211),null,(1),null)),(2),null));
var result__11366__auto___57916 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57915);
if(cljs.core.truth_(result__11366__auto___57916)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",55,new cljs.core.Keyword(null,"pass","pass",1574159993),28,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null)),new cljs.core.Keyword(null,"result","result",1415092211)),70,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57915),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",55,new cljs.core.Keyword(null,"fail","fail",1706214930),28,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null)),new cljs.core.Keyword(null,"result","result",1415092211)),70,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57915),null,(1),null)),(2),null)),null]));
}

}catch (e57882){var t__11416__auto___57917 = e57882;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",55,new cljs.core.Keyword(null,"error","error",-978969032),28,70,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null)),new cljs.core.Keyword(null,"result","result",1415092211)),70,t__11416__auto___57917,null]));
}
try{var values__11365__auto___57918 = (new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res_val_57910),(new cljs.core.List(null,(42),null,(1),null)),(2),null));
var result__11366__auto___57919 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57918);
if(cljs.core.truth_(result__11366__auto___57919)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),28,71,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null)),(42)),71,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57918),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),28,71,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null)),(42)),71,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57918),null,(1),null)),(2),null)),null]));
}

}catch (e57883){var t__11416__auto___57920 = e57883;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),28,71,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"res-val","res-val",-1238961522,null)),(42)),71,t__11416__auto___57920,null]));
}
try{var values__11365__auto___57921 = (new cljs.core.List(null,res_viewer_57911,(new cljs.core.List(null,new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537),null,(1),null)),(2),null));
var result__11366__auto___57922 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57921);
if(cljs.core.truth_(result__11366__auto___57922)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",61,new cljs.core.Keyword(null,"pass","pass",1574159993),28,72,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),72,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57921),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",61,new cljs.core.Keyword(null,"fail","fail",1706214930),28,72,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),72,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57921),null,(1),null)),(2),null)),null]));
}

}catch (e57884){var t__11416__auto___57923 = e57884;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",61,new cljs.core.Keyword(null,"error","error",-978969032),28,72,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"res-viewer","res-viewer",1415142091,null),new cljs.core.Keyword("portal.viewer","edn","portal.viewer/edn",1319461537)),72,t__11416__auto___57923,null]));
}
(re_frame.core.dispatch = self__.orig_dispatch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
})).catch((function (err){
try{var value__11369__auto___57924 = false;
if(value__11369__auto___57924){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___57924,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___57924,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
}

}catch (e57886){var t__11416__auto___57925 = e57886;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___57925,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
}
(re_frame.core.dispatch = self__.orig_dispatch);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatched","dispatched",1335394591,null),new cljs.core.Symbol(null,"mock-dispatch","mock-dispatch",1353002580,null),new cljs.core.Symbol(null,"orig-dispatch","orig-dispatch",-2070131405,null),new cljs.core.Symbol(null,"meta57876","meta57876",1954647558,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57875");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57875");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57875.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test57875 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test57875(dispatched,mock_dispatch,orig_dispatch,meta57876){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875(dispatched,mock_dispatch,orig_dispatch,meta57876));
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

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57875(dispatched,mock_dispatch,orig_dispatch,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.eval_in_main_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","eval-in-main-test","bb-web-ds-tools.runtime.webr-test/eval-in-main-test",-906090129,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"eval-in-main-test","eval-in-main-test",1950740975,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,52,52,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.eval_in_main_test)?bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.runtime.webr_test.js.map
