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
bb_web_ds_tools.runtime.webr_test.cljs_test_each_fixtures = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before","before",-1633692388),(function (){
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
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654 = (function (orig_webr,orig_submit,meta57655){
this.orig_webr = orig_webr;
this.orig_submit = orig_submit;
this.meta57655 = meta57655;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57656,meta57655__$1){
var self__ = this;
var _57656__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654(self__.orig_webr,self__.orig_submit,meta57655__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57656){
var self__ = this;
var _57656__$1 = this;
return self__.meta57655;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57678 = (arguments.length - (1));
switch (G__57678) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.prototype.apply = (function (self__,args57664){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57664)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return bb_web_ds_tools.runtime.webr.load_runtime_main((function (){
try{var values__11365__auto___57785 = (new cljs.core.List(null,cljs.core.deref(bb_web_ds_tools.runtime.webr.webr_instance),null,(1),null));
var result__11366__auto___57786 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,values__11365__auto___57785);
if(cljs.core.truth_(result__11366__auto___57786)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"pass","pass",1574159993),16,39,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),39,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57785),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"fail","fail",1706214930),16,39,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),39,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some?","some?",234752293,null),values__11365__auto___57785),null,(1),null)),(2),null)),null]));
}

}catch (e57689){var t__11416__auto___57787 = e57689;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",43,new cljs.core.Keyword(null,"error","error",-978969032),16,39,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol("webr","webr-instance","webr/webr-instance",-1659390628,null))),39,t__11416__auto___57787,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}),(function (err){
try{var values__11365__auto___57788 = (new cljs.core.List(null,err,null,(1),null));
var result__11366__auto___57789 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,values__11365__auto___57788);
if(cljs.core.truth_(result__11366__auto___57789)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"pass","pass",1574159993),16,44,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),44,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___57788),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"fail","fail",1706214930),16,44,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),44,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),values__11365__auto___57788),null,(1),null)),(2),null)),null]));
}

}catch (e57694){var t__11416__auto___57790 = e57694;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",26,new cljs.core.Keyword(null,"error","error",-978969032),16,44,cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"err","err",-448925678,null)),44,t__11416__auto___57790,null]));
}
(WebR = self__.orig_webr);

(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-webr","orig-webr",-1577811534,null),new cljs.core.Symbol(null,"orig-submit","orig-submit",-1907733772,null),new cljs.core.Symbol(null,"meta57655","meta57655",446863619,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57654");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57654");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57654.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test57654 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test57654(orig_webr,orig_submit,meta57655){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654(orig_webr,orig_submit,meta57655));
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

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57654(orig_webr,orig_submit,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.load_runtime_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","load-runtime-test","bb-web-ds-tools.runtime.webr-test/load-runtime-test",342926928,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"load-runtime-test","load-runtime-test",1352339408,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,30,30,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.load_runtime_test)?bb_web_ds_tools.runtime.webr_test.load_runtime_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724 = (function (orig_submit,meta57725){
this.orig_submit = orig_submit;
this.meta57725 = meta57725;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57726,meta57725__$1){
var self__ = this;
var _57726__$1 = this;
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724(self__.orig_submit,meta57725__$1));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57726){
var self__ = this;
var _57726__$1 = this;
return self__.meta57725;
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__57745 = (arguments.length - (1));
switch (G__57745) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.prototype.apply = (function (self__,args57733){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args57733)));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
return bb_web_ds_tools.runtime.webr.eval_in_main("1 + 1").then((function (){
try{var values__11365__auto___57792 = (new cljs.core.List(null,(function (p1__57717_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__57717_SHARP_),new cljs.core.Keyword(null,"code","code",1586293142));
}),(new cljs.core.List(null,cljs.core.deref(bb_web_ds_tools.runtime.webr_test.submitted),null,(1),null)),(2),null));
var result__11366__auto___57793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some,values__11365__auto___57792);
if(cljs.core.truth_(result__11366__auto___57793)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",64,new cljs.core.Keyword(null,"pass","pass",1574159993),26,57,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57717#","p1__57717#",609110873,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__57717#","p1__57717#",609110873,null)),new cljs.core.Keyword(null,"code","code",1586293142))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"submitted","submitted",1508872565,null))),57,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___57792),"Code should be submitted"]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",64,new cljs.core.Keyword(null,"fail","fail",1706214930),26,57,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57717#","p1__57717#",609110873,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__57717#","p1__57717#",609110873,null)),new cljs.core.Keyword(null,"code","code",1586293142))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"submitted","submitted",1508872565,null))),57,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"some","some",-310548046,null),values__11365__auto___57792),null,(1),null)),(2),null)),"Code should be submitted"]));
}

}catch (e57763){var t__11416__auto___57795 = e57763;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",64,new cljs.core.Keyword(null,"error","error",-978969032),26,57,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__57717#","p1__57717#",609110873,null)], null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"p1__57717#","p1__57717#",609110873,null)),new cljs.core.Keyword(null,"code","code",1586293142))),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"submitted","submitted",1508872565,null))),57,t__11416__auto___57795,"Code should be submitted"]));
}
var res_57796 = cljs.core.last(cljs.core.deref(bb_web_ds_tools.runtime.webr_test.submitted));
try{var values__11365__auto___57798 = (new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(res_57796),(new cljs.core.List(null,new cljs.core.Keyword(null,"result","result",1415092211),null,(1),null)),(2),null));
var result__11366__auto___57799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57798);
if(cljs.core.truth_(result__11366__auto___57799)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",51,new cljs.core.Keyword(null,"pass","pass",1574159993),28,59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"res","res",245523648,null)),new cljs.core.Keyword(null,"result","result",1415092211)),59,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57798),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",51,new cljs.core.Keyword(null,"fail","fail",1706214930),28,59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"res","res",245523648,null)),new cljs.core.Keyword(null,"result","result",1415092211)),59,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57798),null,(1),null)),(2),null)),null]));
}

}catch (e57772){var t__11416__auto___57802 = e57772;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",51,new cljs.core.Keyword(null,"error","error",-978969032),28,59,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"res","res",245523648,null)),new cljs.core.Keyword(null,"result","result",1415092211)),59,t__11416__auto___57802,null]));
}
try{var values__11365__auto___57803 = (new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res_57796),(new cljs.core.List(null,(42),null,(1),null)),(2),null));
var result__11366__auto___57804 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__11365__auto___57803);
if(cljs.core.truth_(result__11366__auto___57804)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",47,new cljs.core.Keyword(null,"pass","pass",1574159993),28,60,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"res","res",245523648,null)),(42)),60,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57803),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",47,new cljs.core.Keyword(null,"fail","fail",1706214930),28,60,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"res","res",245523648,null)),(42)),60,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__11365__auto___57803),null,(1),null)),(2),null)),null]));
}

}catch (e57775){var t__11416__auto___57808 = e57775;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["bb_web_ds_tools/runtime/webr_test.cljs",47,new cljs.core.Keyword(null,"error","error",-978969032),28,60,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Symbol(null,"res","res",245523648,null)),(42)),60,t__11416__auto___57808,null]));
}
(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
})).catch((function (err){
try{var value__11369__auto___57809 = false;
if(value__11369__auto___57809){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,null,false,null,value__11369__auto___57809,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,null,false,null,value__11369__auto___57809,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
}

}catch (e57779){var t__11416__auto___57811 = e57779;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],[null,null,new cljs.core.Keyword(null,"error","error",-978969032),null,null,false,null,t__11416__auto___57811,["Evaluation failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join('')]));
}
(portal.web.submit = self__.orig_submit);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"orig-submit","orig-submit",-1907733772,null),new cljs.core.Symbol(null,"meta57725","meta57725",1523607278,null)], null);
}));

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.cljs$lang$type = true);

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.cljs$lang$ctorStr = "bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57724");

(bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57724");
}));

/**
 * Positional factory function for bb-web-ds-tools.runtime.webr-test/t_bb_web_ds_tools$runtime$webr_test57724.
 */
bb_web_ds_tools.runtime.webr_test.__GT_t_bb_web_ds_tools$runtime$webr_test57724 = (function bb_web_ds_tools$runtime$webr_test$__GT_t_bb_web_ds_tools$runtime$webr_test57724(orig_submit,meta57725){
return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724(orig_submit,meta57725));
});


bb_web_ds_tools.runtime.webr_test.eval_in_main_test = (function bb_web_ds_tools$runtime$webr_test$eval_in_main_test(){
return cljs.test.test_var(bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$var);
});
bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WebR evaluation"], 0));

try{cljs.core.reset_BANG_(bb_web_ds_tools.runtime.webr.webr_instance,bb_web_ds_tools.runtime.webr_test.mock_webr_proto);

var orig_submit = portal.web.submit;
(portal.web.submit = bb_web_ds_tools.runtime.webr_test.mock_submit);

return (new bb_web_ds_tools.runtime.webr_test.t_bb_web_ds_tools$runtime$webr_test57724(orig_submit,null));
}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.runtime.webr_test.eval_in_main_test;},new cljs.core.Symbol("bb-web-ds-tools.runtime.webr-test","eval-in-main-test","bb-web-ds-tools.runtime.webr-test/eval-in-main-test",-906090129,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.runtime.webr-test","bb-web-ds-tools.runtime.webr-test",1105268371,null),new cljs.core.Symbol(null,"eval-in-main-test","eval-in-main-test",1950740975,null),"bb_web_ds_tools/runtime/webr_test.cljs",27,1,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.runtime.webr_test.eval_in_main_test)?bb_web_ds_tools.runtime.webr_test.eval_in_main_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.runtime.webr_test.js.map
