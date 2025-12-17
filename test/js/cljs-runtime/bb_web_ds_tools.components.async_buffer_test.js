goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136 = (function (meta64137){
this.meta64137 = meta64137;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64138,meta64137__$1){
var self__ = this;
var _64138__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136(meta64137__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64138){
var self__ = this;
var _64138__$1 = this;
return self__.meta64137;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64140 = (arguments.length - (1));
switch (G__64140) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.prototype.apply = (function (self__,args64139){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64139)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_64321){
var state_val_64322 = (state_64321[(1)]);
if((state_val_64322 === (7))){
var inst_64165 = (state_64321[(2)]);
var inst_64166 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64167 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64169 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,19,inst_64167,19,inst_64165,"Buffer should not flush automatically without timer"];
var inst_64170 = cljs.core.PersistentHashMap.fromArrays(inst_64166,inst_64169);
var inst_64171 = cljs.test.report.call(null,inst_64170);
var state_64321__$1 = state_64321;
var statearr_64324_64906 = state_64321__$1;
(statearr_64324_64906[(2)] = inst_64171);

(statearr_64324_64906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (20))){
var inst_64157 = (state_64321[(7)]);
var inst_64263 = (state_64321[(2)]);
var inst_64264 = (inst_64157.cljs$core$IFn$_invoke$arity$0 ? inst_64157.cljs$core$IFn$_invoke$arity$0() : inst_64157.call(null));
var inst_64265 = cljs.core.async.timeout((20));
var state_64321__$1 = (function (){var statearr_64325 = state_64321;
(statearr_64325[(8)] = inst_64263);

(statearr_64325[(9)] = inst_64264);

return statearr_64325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64321__$1,(21),inst_64265);
} else {
if((state_val_64322 === (27))){
var inst_64292 = (state_64321[(10)]);
var inst_64304 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64305 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64306 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64307 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64308 = cljs.core.cons(inst_64307,inst_64292);
var inst_64309 = (new cljs.core.List(null,inst_64308,null,(1),null));
var inst_64310 = (new cljs.core.List(null,inst_64306,inst_64309,(2),null));
var inst_64311 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,inst_64305,29,inst_64310,"Subsequent flush should work"];
var inst_64312 = cljs.core.PersistentHashMap.fromArrays(inst_64304,inst_64311);
var inst_64313 = cljs.test.report.call(null,inst_64312);
var state_64321__$1 = state_64321;
var statearr_64326_64908 = state_64321__$1;
(statearr_64326_64908[(2)] = inst_64313);

(statearr_64326_64908[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (1))){
var inst_64142 = (state_64321[(11)]);
var inst_64144 = (state_64321[(12)]);
var inst_64142__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64143 = cljs.core.PersistentVector.EMPTY;
var inst_64144__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64143);
var inst_64145 = (function (){var input_ch = inst_64142__$1;
var results = inst_64144__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64146 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64155 = [inst_64142__$1,inst_64145];
var inst_64156 = cljs.core.PersistentHashMap.fromArrays(inst_64146,inst_64155);
var inst_64157 = bb_web_ds_tools.components.async_buffer.create(inst_64156);
var state_64321__$1 = (function (){var statearr_64327 = state_64321;
(statearr_64327[(11)] = inst_64142__$1);

(statearr_64327[(12)] = inst_64144__$1);

(statearr_64327[(7)] = inst_64157);

return statearr_64327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64321__$1,(2),inst_64142__$1,(1));
} else {
if((state_val_64322 === (24))){
var inst_64268 = (state_64321[(2)]);
var inst_64271 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64272 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64273 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),18,29,inst_64272,29,inst_64268,"Subsequent flush should work"];
var inst_64274 = cljs.core.PersistentHashMap.fromArrays(inst_64271,inst_64273);
var inst_64275 = cljs.test.report.call(null,inst_64274);
var state_64321__$1 = state_64321;
var statearr_64329_64914 = state_64321__$1;
(statearr_64329_64914[(2)] = inst_64275);

(statearr_64329_64914[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (4))){
var inst_64164 = (state_64321[(2)]);
var state_64321__$1 = (function (){var statearr_64330 = state_64321;
(statearr_64330[(13)] = inst_64164);

return statearr_64330;
})();
var statearr_64335_64919 = state_64321__$1;
(statearr_64335_64919[(2)] = null);

(statearr_64335_64919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (15))){
var inst_64215 = (state_64321[(2)]);
var inst_64218 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64219 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64220 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,24,inst_64219,24,inst_64215,"Manual flush should flush all items"];
var inst_64221 = cljs.core.PersistentHashMap.fromArrays(inst_64218,inst_64220);
var inst_64222 = cljs.test.report.call(null,inst_64221);
var state_64321__$1 = state_64321;
var statearr_64337_64921 = state_64321__$1;
(statearr_64337_64921[(2)] = inst_64222);

(statearr_64337_64921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (21))){
var inst_64267 = (state_64321[(2)]);
var state_64321__$1 = (function (){var statearr_64338 = state_64321;
(statearr_64338[(14)] = inst_64267);

return statearr_64338;
})();
var statearr_64339_64922 = state_64321__$1;
(statearr_64339_64922[(2)] = null);

(statearr_64339_64922[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (13))){
var inst_64144 = (state_64321[(12)]);
var inst_64236 = (state_64321[(15)]);
var inst_64237 = (state_64321[(16)]);
var _ = (function (){var statearr_64340 = state_64321;
(statearr_64340[(4)] = cljs.core.cons((16),(state_64321[(4)])));

return statearr_64340;
})();
var inst_64228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64230 = [(1),(2)];
var inst_64231 = (new cljs.core.PersistentVector(null,2,(5),inst_64229,inst_64230,null));
var inst_64232 = [inst_64231];
var inst_64233 = (new cljs.core.PersistentVector(null,1,(5),inst_64228,inst_64232,null));
var inst_64234 = cljs.core.deref(inst_64144);
var inst_64235 = (new cljs.core.List(null,inst_64234,null,(1),null));
var inst_64236__$1 = (new cljs.core.List(null,inst_64233,inst_64235,(2),null));
var inst_64237__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64236__$1);
var state_64321__$1 = (function (){var statearr_64341 = state_64321;
(statearr_64341[(15)] = inst_64236__$1);

(statearr_64341[(16)] = inst_64237__$1);

return statearr_64341;
})();
if(cljs.core.truth_(inst_64237__$1)){
var statearr_64342_64924 = state_64321__$1;
(statearr_64342_64924[(1)] = (17));

} else {
var statearr_64344_64926 = state_64321__$1;
(statearr_64344_64926[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (22))){
var inst_64144 = (state_64321[(12)]);
var inst_64292 = (state_64321[(10)]);
var inst_64293 = (state_64321[(17)]);
var _ = (function (){var statearr_64345 = state_64321;
(statearr_64345[(4)] = cljs.core.cons((25),(state_64321[(4)])));

return statearr_64345;
})();
var inst_64281 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64283 = [(1),(2)];
var inst_64284 = (new cljs.core.PersistentVector(null,2,(5),inst_64282,inst_64283,null));
var inst_64285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64286 = [(3)];
var inst_64287 = (new cljs.core.PersistentVector(null,1,(5),inst_64285,inst_64286,null));
var inst_64288 = [inst_64284,inst_64287];
var inst_64289 = (new cljs.core.PersistentVector(null,2,(5),inst_64281,inst_64288,null));
var inst_64290 = cljs.core.deref(inst_64144);
var inst_64291 = (new cljs.core.List(null,inst_64290,null,(1),null));
var inst_64292__$1 = (new cljs.core.List(null,inst_64289,inst_64291,(2),null));
var inst_64293__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64292__$1);
var state_64321__$1 = (function (){var statearr_64346 = state_64321;
(statearr_64346[(10)] = inst_64292__$1);

(statearr_64346[(17)] = inst_64293__$1);

return statearr_64346;
})();
if(cljs.core.truth_(inst_64293__$1)){
var statearr_64347_64928 = state_64321__$1;
(statearr_64347_64928[(1)] = (26));

} else {
var statearr_64348_64929 = state_64321__$1;
(statearr_64348_64929[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (6))){
var inst_64157 = (state_64321[(7)]);
var inst_64209 = (state_64321[(2)]);
var inst_64210 = (inst_64157.cljs$core$IFn$_invoke$arity$0 ? inst_64157.cljs$core$IFn$_invoke$arity$0() : inst_64157.call(null));
var inst_64211 = cljs.core.async.timeout((20));
var state_64321__$1 = (function (){var statearr_64351 = state_64321;
(statearr_64351[(18)] = inst_64209);

(statearr_64351[(19)] = inst_64210);

return statearr_64351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64321__$1,(12),inst_64211);
} else {
if((state_val_64322 === (28))){
var inst_64293 = (state_64321[(17)]);
var inst_64315 = (state_64321[(2)]);
var _ = (function (){var statearr_64352 = state_64321;
(statearr_64352[(4)] = cljs.core.rest((state_64321[(4)])));

return statearr_64352;
})();
var state_64321__$1 = (function (){var statearr_64353 = state_64321;
(statearr_64353[(20)] = inst_64315);

return statearr_64353;
})();
var statearr_64354_64932 = state_64321__$1;
(statearr_64354_64932[(2)] = inst_64293);

(statearr_64354_64932[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (25))){
var _ = (function (){var statearr_64355 = state_64321;
(statearr_64355[(4)] = cljs.core.rest((state_64321[(4)])));

return statearr_64355;
})();
var state_64321__$1 = state_64321;
var ex64349 = (state_64321__$1[(2)]);
var statearr_64356_64936 = state_64321__$1;
(statearr_64356_64936[(5)] = ex64349);


var statearr_64357_64937 = state_64321__$1;
(statearr_64357_64937[(1)] = (24));

(statearr_64357_64937[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (17))){
var inst_64236 = (state_64321[(15)]);
var inst_64239 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64240 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64241 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64242 = cljs.core.cons(inst_64241,inst_64236);
var inst_64243 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,24,inst_64240,24,inst_64242,"Manual flush should flush all items"];
var inst_64244 = cljs.core.PersistentHashMap.fromArrays(inst_64239,inst_64243);
var inst_64245 = cljs.test.report.call(null,inst_64244);
var state_64321__$1 = state_64321;
var statearr_64359_64941 = state_64321__$1;
(statearr_64359_64941[(2)] = inst_64245);

(statearr_64359_64941[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (3))){
var inst_64161 = (state_64321[(2)]);
var inst_64162 = cljs.core.async.timeout((20));
var state_64321__$1 = (function (){var statearr_64360 = state_64321;
(statearr_64360[(21)] = inst_64161);

return statearr_64360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64321__$1,(4),inst_64162);
} else {
if((state_val_64322 === (12))){
var inst_64213 = (state_64321[(2)]);
var state_64321__$1 = (function (){var statearr_64361 = state_64321;
(statearr_64361[(22)] = inst_64213);

return statearr_64361;
})();
var statearr_64362_64943 = state_64321__$1;
(statearr_64362_64943[(2)] = null);

(statearr_64362_64943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (2))){
var inst_64142 = (state_64321[(11)]);
var inst_64159 = (state_64321[(2)]);
var state_64321__$1 = (function (){var statearr_64363 = state_64321;
(statearr_64363[(23)] = inst_64159);

return statearr_64363;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64321__$1,(3),inst_64142,(2));
} else {
if((state_val_64322 === (23))){
var inst_64318 = (state_64321[(2)]);
var inst_64319 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64321__$1 = (function (){var statearr_64364 = state_64321;
(statearr_64364[(24)] = inst_64318);

return statearr_64364;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64321__$1,inst_64319);
} else {
if((state_val_64322 === (19))){
var inst_64237 = (state_64321[(16)]);
var inst_64258 = (state_64321[(2)]);
var _ = (function (){var statearr_64370 = state_64321;
(statearr_64370[(4)] = cljs.core.rest((state_64321[(4)])));

return statearr_64370;
})();
var state_64321__$1 = (function (){var statearr_64371 = state_64321;
(statearr_64371[(25)] = inst_64258);

return statearr_64371;
})();
var statearr_64372_64945 = state_64321__$1;
(statearr_64372_64945[(2)] = inst_64237);

(statearr_64372_64945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (11))){
var inst_64179 = (state_64321[(26)]);
var inst_64206 = (state_64321[(2)]);
var _ = (function (){var statearr_64374 = state_64321;
(statearr_64374[(4)] = cljs.core.rest((state_64321[(4)])));

return statearr_64374;
})();
var state_64321__$1 = (function (){var statearr_64377 = state_64321;
(statearr_64377[(27)] = inst_64206);

return statearr_64377;
})();
var statearr_64380_64946 = state_64321__$1;
(statearr_64380_64946[(2)] = inst_64179);

(statearr_64380_64946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (9))){
var inst_64178 = (state_64321[(28)]);
var inst_64184 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64185 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64186 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64187 = cljs.core.cons(inst_64186,inst_64178);
var inst_64188 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,19,inst_64185,19,inst_64187,"Buffer should not flush automatically without timer"];
var inst_64189 = cljs.core.PersistentHashMap.fromArrays(inst_64184,inst_64188);
var inst_64190 = cljs.test.report.call(null,inst_64189);
var state_64321__$1 = state_64321;
var statearr_64387_64947 = state_64321__$1;
(statearr_64387_64947[(2)] = inst_64190);

(statearr_64387_64947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (5))){
var inst_64144 = (state_64321[(12)]);
var inst_64178 = (state_64321[(28)]);
var inst_64179 = (state_64321[(26)]);
var _ = (function (){var statearr_64389 = state_64321;
(statearr_64389[(4)] = cljs.core.cons((8),(state_64321[(4)])));

return statearr_64389;
})();
var inst_64177 = cljs.core.deref(inst_64144);
var inst_64178__$1 = (new cljs.core.List(null,inst_64177,null,(1),null));
var inst_64179__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_64178__$1);
var state_64321__$1 = (function (){var statearr_64394 = state_64321;
(statearr_64394[(28)] = inst_64178__$1);

(statearr_64394[(26)] = inst_64179__$1);

return statearr_64394;
})();
if(cljs.core.truth_(inst_64179__$1)){
var statearr_64396_64949 = state_64321__$1;
(statearr_64396_64949[(1)] = (9));

} else {
var statearr_64397_64950 = state_64321__$1;
(statearr_64397_64950[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (14))){
var inst_64142 = (state_64321[(11)]);
var inst_64261 = (state_64321[(2)]);
var state_64321__$1 = (function (){var statearr_64401 = state_64321;
(statearr_64401[(29)] = inst_64261);

return statearr_64401;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64321__$1,(20),inst_64142,(3));
} else {
if((state_val_64322 === (26))){
var inst_64292 = (state_64321[(10)]);
var inst_64295 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64297 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64298 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64299 = cljs.core.cons(inst_64298,inst_64292);
var inst_64300 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,inst_64297,29,inst_64299,"Subsequent flush should work"];
var inst_64301 = cljs.core.PersistentHashMap.fromArrays(inst_64295,inst_64300);
var inst_64302 = cljs.test.report.call(null,inst_64301);
var state_64321__$1 = state_64321;
var statearr_64403_64951 = state_64321__$1;
(statearr_64403_64951[(2)] = inst_64302);

(statearr_64403_64951[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (16))){
var _ = (function (){var statearr_64407 = state_64321;
(statearr_64407[(4)] = cljs.core.rest((state_64321[(4)])));

return statearr_64407;
})();
var state_64321__$1 = state_64321;
var ex64400 = (state_64321__$1[(2)]);
var statearr_64408_64952 = state_64321__$1;
(statearr_64408_64952[(5)] = ex64400);


var statearr_64409_64953 = state_64321__$1;
(statearr_64409_64953[(1)] = (15));

(statearr_64409_64953[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (10))){
var inst_64178 = (state_64321[(28)]);
var inst_64194 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64196 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64197 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64198 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64199 = cljs.core.cons(inst_64198,inst_64178);
var inst_64200 = (new cljs.core.List(null,inst_64199,null,(1),null));
var inst_64201 = (new cljs.core.List(null,inst_64197,inst_64200,(2),null));
var inst_64202 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,19,inst_64196,19,inst_64201,"Buffer should not flush automatically without timer"];
var inst_64203 = cljs.core.PersistentHashMap.fromArrays(inst_64194,inst_64202);
var inst_64204 = cljs.test.report.call(null,inst_64203);
var state_64321__$1 = state_64321;
var statearr_64423_64954 = state_64321__$1;
(statearr_64423_64954[(2)] = inst_64204);

(statearr_64423_64954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (18))){
var inst_64236 = (state_64321[(15)]);
var inst_64247 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64248 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64249 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64250 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64251 = cljs.core.cons(inst_64250,inst_64236);
var inst_64252 = (new cljs.core.List(null,inst_64251,null,(1),null));
var inst_64253 = (new cljs.core.List(null,inst_64249,inst_64252,(2),null));
var inst_64254 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,24,inst_64248,24,inst_64253,"Manual flush should flush all items"];
var inst_64255 = cljs.core.PersistentHashMap.fromArrays(inst_64247,inst_64254);
var inst_64256 = cljs.test.report.call(null,inst_64255);
var state_64321__$1 = state_64321;
var statearr_64425_64955 = state_64321__$1;
(statearr_64425_64955[(2)] = inst_64256);

(statearr_64425_64955[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64322 === (8))){
var _ = (function (){var statearr_64426 = state_64321;
(statearr_64426[(4)] = cljs.core.rest((state_64321[(4)])));

return statearr_64426;
})();
var state_64321__$1 = state_64321;
var ex64411 = (state_64321__$1[(2)]);
var statearr_64431_64956 = state_64321__$1;
(statearr_64431_64956[(5)] = ex64411);


var statearr_64434_64957 = state_64321__$1;
(statearr_64434_64957[(1)] = (7));

(statearr_64434_64957[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0 = (function (){
var statearr_64436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64436[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__);

(statearr_64436[(1)] = (1));

return statearr_64436;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1 = (function (state_64321){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_64321);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e64439){var ex__32394__auto__ = e64439;
var statearr_64440_64958 = state_64321;
(statearr_64440_64958[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_64321[(4)]))){
var statearr_64441_64959 = state_64321;
(statearr_64441_64959[(1)] = cljs.core.first((state_64321[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64960 = state_64321;
state_64321 = G__64960;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__ = function(state_64321){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1.call(this,state_64321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_64443 = f__32472__auto__();
(statearr_64443[(6)] = c__32471__auto__);

return statearr_64443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64137","meta64137",1281518987,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64136");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64136");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64136.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64136 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64136(meta64137){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136(meta64137));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64136(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444 = (function (meta64445){
this.meta64445 = meta64445;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64446,meta64445__$1){
var self__ = this;
var _64446__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444(meta64445__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64446){
var self__ = this;
var _64446__$1 = this;
return self__.meta64445;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64448 = (arguments.length - (1));
switch (G__64448) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.prototype.apply = (function (self__,args64447){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64447)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_64665){
var state_val_64666 = (state_64665[(1)]);
if((state_val_64666 === (7))){
var inst_64464 = (state_64665[(2)]);
var inst_64465 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64466 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64467 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,47,inst_64466,47,inst_64464,"Should not flush before timeout"];
var inst_64468 = cljs.core.PersistentHashMap.fromArrays(inst_64465,inst_64467);
var inst_64469 = cljs.test.report.call(null,inst_64468);
var state_64665__$1 = state_64665;
var statearr_64670_64967 = state_64665__$1;
(statearr_64670_64967[(2)] = inst_64469);

(statearr_64670_64967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (20))){
var inst_64552 = (state_64665[(2)]);
var inst_64553 = cljs.core.async.timeout((50));
var state_64665__$1 = (function (){var statearr_64671 = state_64665;
(statearr_64671[(7)] = inst_64552);

return statearr_64671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64665__$1,(21),inst_64553);
} else {
if((state_val_64666 === (27))){
var _ = (function (){var statearr_64673 = state_64665;
(statearr_64673[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64673;
})();
var state_64665__$1 = state_64665;
var ex64667 = (state_64665__$1[(2)]);
var statearr_64675_64968 = state_64665__$1;
(statearr_64675_64968[(5)] = ex64667);


var statearr_64677_64969 = state_64665__$1;
(statearr_64677_64969[(1)] = (26));

(statearr_64677_64969[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (1))){
var inst_64449 = (state_64665[(8)]);
var inst_64451 = (state_64665[(9)]);
var inst_64449__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64450 = cljs.core.PersistentVector.EMPTY;
var inst_64451__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64450);
var inst_64452 = (function (){var input_ch = inst_64449__$1;
var results = inst_64451__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64453 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64454 = [inst_64449__$1,(100),inst_64452];
var inst_64455 = cljs.core.PersistentHashMap.fromArrays(inst_64453,inst_64454);
var inst_64456 = bb_web_ds_tools.components.async_buffer.create(inst_64455);
var state_64665__$1 = (function (){var statearr_64678 = state_64665;
(statearr_64678[(8)] = inst_64449__$1);

(statearr_64678[(9)] = inst_64451__$1);

(statearr_64678[(10)] = inst_64456);

return statearr_64678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64665__$1,(2),inst_64449__$1,(1));
} else {
if((state_val_64666 === (24))){
var inst_64451 = (state_64665[(9)]);
var inst_64585 = (state_64665[(11)]);
var inst_64586 = (state_64665[(12)]);
var _ = (function (){var statearr_64680 = state_64665;
(statearr_64680[(4)] = cljs.core.cons((27),(state_64665[(4)])));

return statearr_64680;
})();
var inst_64576 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64577 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64578 = [(1),(2)];
var inst_64579 = (new cljs.core.PersistentVector(null,2,(5),inst_64577,inst_64578,null));
var inst_64580 = [inst_64579];
var inst_64581 = (new cljs.core.PersistentVector(null,1,(5),inst_64576,inst_64580,null));
var inst_64583 = cljs.core.deref(inst_64451);
var inst_64584 = (new cljs.core.List(null,inst_64583,null,(1),null));
var inst_64585__$1 = (new cljs.core.List(null,inst_64581,inst_64584,(2),null));
var inst_64586__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64585__$1);
var state_64665__$1 = (function (){var statearr_64681 = state_64665;
(statearr_64681[(11)] = inst_64585__$1);

(statearr_64681[(12)] = inst_64586__$1);

return statearr_64681;
})();
if(cljs.core.truth_(inst_64586__$1)){
var statearr_64682_64970 = state_64665__$1;
(statearr_64682_64970[(1)] = (28));

} else {
var statearr_64683_64971 = state_64665__$1;
(statearr_64683_64971[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (4))){
var inst_64463 = (state_64665[(2)]);
var state_64665__$1 = (function (){var statearr_64684 = state_64665;
(statearr_64684[(13)] = inst_64463);

return statearr_64684;
})();
var statearr_64685_64972 = state_64665__$1;
(statearr_64685_64972[(2)] = null);

(statearr_64685_64972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (15))){
var inst_64505 = (state_64665[(2)]);
var inst_64506 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64507 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64508 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,50,inst_64507,50,inst_64505,"Should flush after timeout"];
var inst_64509 = cljs.core.PersistentHashMap.fromArrays(inst_64506,inst_64508);
var inst_64510 = cljs.test.report.call(null,inst_64509);
var state_64665__$1 = state_64665;
var statearr_64687_64973 = state_64665__$1;
(statearr_64687_64973[(2)] = inst_64510);

(statearr_64687_64973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (21))){
var inst_64449 = (state_64665[(8)]);
var inst_64558 = (state_64665[(2)]);
var state_64665__$1 = (function (){var statearr_64688 = state_64665;
(statearr_64688[(14)] = inst_64558);

return statearr_64688;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64665__$1,(22),inst_64449,(4));
} else {
if((state_val_64666 === (31))){
var inst_64613 = (state_64665[(2)]);
var state_64665__$1 = (function (){var statearr_64689 = state_64665;
(statearr_64689[(15)] = inst_64613);

return statearr_64689;
})();
var statearr_64690_64974 = state_64665__$1;
(statearr_64690_64974[(2)] = null);

(statearr_64690_64974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (32))){
var inst_64451 = (state_64665[(9)]);
var inst_64636 = (state_64665[(16)]);
var inst_64638 = (state_64665[(17)]);
var _ = (function (){var statearr_64692 = state_64665;
(statearr_64692[(4)] = cljs.core.cons((35),(state_64665[(4)])));

return statearr_64692;
})();
var inst_64625 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64627 = [(1),(2)];
var inst_64628 = (new cljs.core.PersistentVector(null,2,(5),inst_64626,inst_64627,null));
var inst_64629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64630 = [(3),(4)];
var inst_64631 = (new cljs.core.PersistentVector(null,2,(5),inst_64629,inst_64630,null));
var inst_64632 = [inst_64628,inst_64631];
var inst_64633 = (new cljs.core.PersistentVector(null,2,(5),inst_64625,inst_64632,null));
var inst_64634 = cljs.core.deref(inst_64451);
var inst_64635 = (new cljs.core.List(null,inst_64634,null,(1),null));
var inst_64636__$1 = (new cljs.core.List(null,inst_64633,inst_64635,(2),null));
var inst_64638__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64636__$1);
var state_64665__$1 = (function (){var statearr_64693 = state_64665;
(statearr_64693[(16)] = inst_64636__$1);

(statearr_64693[(17)] = inst_64638__$1);

return statearr_64693;
})();
if(cljs.core.truth_(inst_64638__$1)){
var statearr_64694_64976 = state_64665__$1;
(statearr_64694_64976[(1)] = (36));

} else {
var statearr_64695_64977 = state_64665__$1;
(statearr_64695_64977[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (33))){
var inst_64662 = (state_64665[(2)]);
var inst_64663 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64665__$1 = (function (){var statearr_64696 = state_64665;
(statearr_64696[(18)] = inst_64662);

return statearr_64696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64665__$1,inst_64663);
} else {
if((state_val_64666 === (13))){
var inst_64451 = (state_64665[(9)]);
var inst_64524 = (state_64665[(19)]);
var inst_64525 = (state_64665[(20)]);
var _ = (function (){var statearr_64698 = state_64665;
(statearr_64698[(4)] = cljs.core.cons((16),(state_64665[(4)])));

return statearr_64698;
})();
var inst_64516 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64517 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64518 = [(1),(2)];
var inst_64519 = (new cljs.core.PersistentVector(null,2,(5),inst_64517,inst_64518,null));
var inst_64520 = [inst_64519];
var inst_64521 = (new cljs.core.PersistentVector(null,1,(5),inst_64516,inst_64520,null));
var inst_64522 = cljs.core.deref(inst_64451);
var inst_64523 = (new cljs.core.List(null,inst_64522,null,(1),null));
var inst_64524__$1 = (new cljs.core.List(null,inst_64521,inst_64523,(2),null));
var inst_64525__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64524__$1);
var state_64665__$1 = (function (){var statearr_64699 = state_64665;
(statearr_64699[(19)] = inst_64524__$1);

(statearr_64699[(20)] = inst_64525__$1);

return statearr_64699;
})();
if(cljs.core.truth_(inst_64525__$1)){
var statearr_64700_64978 = state_64665__$1;
(statearr_64700_64978[(1)] = (17));

} else {
var statearr_64701_64979 = state_64665__$1;
(statearr_64701_64979[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (22))){
var inst_64560 = (state_64665[(2)]);
var inst_64561 = cljs.core.async.timeout((20));
var state_64665__$1 = (function (){var statearr_64703 = state_64665;
(statearr_64703[(21)] = inst_64560);

return statearr_64703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64665__$1,(23),inst_64561);
} else {
if((state_val_64666 === (36))){
var inst_64636 = (state_64665[(16)]);
var inst_64640 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64641 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64642 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64643 = cljs.core.cons(inst_64642,inst_64636);
var inst_64644 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,inst_64641,60,inst_64643,"Should flush 3,4 after timeout from first message"];
var inst_64645 = cljs.core.PersistentHashMap.fromArrays(inst_64640,inst_64644);
var inst_64646 = cljs.test.report.call(null,inst_64645);
var state_64665__$1 = state_64665;
var statearr_64704_64982 = state_64665__$1;
(statearr_64704_64982[(2)] = inst_64646);

(statearr_64704_64982[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (29))){
var inst_64585 = (state_64665[(11)]);
var inst_64596 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64597 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64598 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64599 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64600 = cljs.core.cons(inst_64599,inst_64585);
var inst_64601 = (new cljs.core.List(null,inst_64600,null,(1),null));
var inst_64602 = (new cljs.core.List(null,inst_64598,inst_64601,(2),null));
var inst_64603 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,inst_64597,57,inst_64602,"Should not flush 3,4 yet"];
var inst_64604 = cljs.core.PersistentHashMap.fromArrays(inst_64596,inst_64603);
var inst_64605 = cljs.test.report.call(null,inst_64604);
var state_64665__$1 = state_64665;
var statearr_64705_64986 = state_64665__$1;
(statearr_64705_64986[(2)] = inst_64605);

(statearr_64705_64986[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (6))){
var inst_64501 = (state_64665[(2)]);
var inst_64502 = cljs.core.async.timeout((100));
var state_64665__$1 = (function (){var statearr_64707 = state_64665;
(statearr_64707[(22)] = inst_64501);

return statearr_64707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64665__$1,(12),inst_64502);
} else {
if((state_val_64666 === (28))){
var inst_64585 = (state_64665[(11)]);
var inst_64588 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64589 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64590 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64591 = cljs.core.cons(inst_64590,inst_64585);
var inst_64592 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,inst_64589,57,inst_64591,"Should not flush 3,4 yet"];
var inst_64593 = cljs.core.PersistentHashMap.fromArrays(inst_64588,inst_64592);
var inst_64594 = cljs.test.report.call(null,inst_64593);
var state_64665__$1 = state_64665;
var statearr_64708_64988 = state_64665__$1;
(statearr_64708_64988[(2)] = inst_64594);

(statearr_64708_64988[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (25))){
var inst_64610 = (state_64665[(2)]);
var inst_64611 = cljs.core.async.timeout((80));
var state_64665__$1 = (function (){var statearr_64709 = state_64665;
(statearr_64709[(23)] = inst_64610);

return statearr_64709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64665__$1,(31),inst_64611);
} else {
if((state_val_64666 === (34))){
var inst_64614 = (state_64665[(2)]);
var inst_64615 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64616 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64617 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),18,60,inst_64616,60,inst_64614,"Should flush 3,4 after timeout from first message"];
var inst_64618 = cljs.core.PersistentHashMap.fromArrays(inst_64615,inst_64617);
var inst_64619 = cljs.test.report.call(null,inst_64618);
var state_64665__$1 = state_64665;
var statearr_64710_64989 = state_64665__$1;
(statearr_64710_64989[(2)] = inst_64619);

(statearr_64710_64989[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (17))){
var inst_64524 = (state_64665[(19)]);
var inst_64527 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64528 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64529 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64530 = cljs.core.cons(inst_64529,inst_64524);
var inst_64531 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,50,inst_64528,50,inst_64530,"Should flush after timeout"];
var inst_64532 = cljs.core.PersistentHashMap.fromArrays(inst_64527,inst_64531);
var inst_64533 = cljs.test.report.call(null,inst_64532);
var state_64665__$1 = state_64665;
var statearr_64717_64992 = state_64665__$1;
(statearr_64717_64992[(2)] = inst_64533);

(statearr_64717_64992[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (3))){
var inst_64460 = (state_64665[(2)]);
var inst_64461 = cljs.core.async.timeout((50));
var state_64665__$1 = (function (){var statearr_64719 = state_64665;
(statearr_64719[(24)] = inst_64460);

return statearr_64719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64665__$1,(4),inst_64461);
} else {
if((state_val_64666 === (12))){
var inst_64504 = (state_64665[(2)]);
var state_64665__$1 = (function (){var statearr_64725 = state_64665;
(statearr_64725[(25)] = inst_64504);

return statearr_64725;
})();
var statearr_64728_64995 = state_64665__$1;
(statearr_64728_64995[(2)] = null);

(statearr_64728_64995[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (2))){
var inst_64449 = (state_64665[(8)]);
var inst_64458 = (state_64665[(2)]);
var state_64665__$1 = (function (){var statearr_64730 = state_64665;
(statearr_64730[(26)] = inst_64458);

return statearr_64730;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64665__$1,(3),inst_64449,(2));
} else {
if((state_val_64666 === (23))){
var inst_64563 = (state_64665[(2)]);
var state_64665__$1 = (function (){var statearr_64732 = state_64665;
(statearr_64732[(27)] = inst_64563);

return statearr_64732;
})();
var statearr_64733_64998 = state_64665__$1;
(statearr_64733_64998[(2)] = null);

(statearr_64733_64998[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (35))){
var _ = (function (){var statearr_64739 = state_64665;
(statearr_64739[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64739;
})();
var state_64665__$1 = state_64665;
var ex64729 = (state_64665__$1[(2)]);
var statearr_64741_64999 = state_64665__$1;
(statearr_64741_64999[(5)] = ex64729);


var statearr_64742_65000 = state_64665__$1;
(statearr_64742_65000[(1)] = (34));

(statearr_64742_65000[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (19))){
var inst_64525 = (state_64665[(20)]);
var inst_64546 = (state_64665[(2)]);
var _ = (function (){var statearr_64749 = state_64665;
(statearr_64749[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64749;
})();
var state_64665__$1 = (function (){var statearr_64750 = state_64665;
(statearr_64750[(28)] = inst_64546);

return statearr_64750;
})();
var statearr_64751_65001 = state_64665__$1;
(statearr_64751_65001[(2)] = inst_64525);

(statearr_64751_65001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (11))){
var inst_64477 = (state_64665[(29)]);
var inst_64498 = (state_64665[(2)]);
var _ = (function (){var statearr_64759 = state_64665;
(statearr_64759[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64759;
})();
var state_64665__$1 = (function (){var statearr_64760 = state_64665;
(statearr_64760[(30)] = inst_64498);

return statearr_64760;
})();
var statearr_64761_65003 = state_64665__$1;
(statearr_64761_65003[(2)] = inst_64477);

(statearr_64761_65003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (9))){
var inst_64476 = (state_64665[(31)]);
var inst_64479 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64480 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64481 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64482 = cljs.core.cons(inst_64481,inst_64476);
var inst_64483 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,47,inst_64480,47,inst_64482,"Should not flush before timeout"];
var inst_64484 = cljs.core.PersistentHashMap.fromArrays(inst_64479,inst_64483);
var inst_64485 = cljs.test.report.call(null,inst_64484);
var state_64665__$1 = state_64665;
var statearr_64763_65007 = state_64665__$1;
(statearr_64763_65007[(2)] = inst_64485);

(statearr_64763_65007[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (5))){
var inst_64451 = (state_64665[(9)]);
var inst_64476 = (state_64665[(31)]);
var inst_64477 = (state_64665[(29)]);
var _ = (function (){var statearr_64764 = state_64665;
(statearr_64764[(4)] = cljs.core.cons((8),(state_64665[(4)])));

return statearr_64764;
})();
var inst_64475 = cljs.core.deref(inst_64451);
var inst_64476__$1 = (new cljs.core.List(null,inst_64475,null,(1),null));
var inst_64477__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_64476__$1);
var state_64665__$1 = (function (){var statearr_64765 = state_64665;
(statearr_64765[(31)] = inst_64476__$1);

(statearr_64765[(29)] = inst_64477__$1);

return statearr_64765;
})();
if(cljs.core.truth_(inst_64477__$1)){
var statearr_64766_65009 = state_64665__$1;
(statearr_64766_65009[(1)] = (9));

} else {
var statearr_64767_65010 = state_64665__$1;
(statearr_64767_65010[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (14))){
var inst_64449 = (state_64665[(8)]);
var inst_64550 = (state_64665[(2)]);
var state_64665__$1 = (function (){var statearr_64769 = state_64665;
(statearr_64769[(32)] = inst_64550);

return statearr_64769;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64665__$1,(20),inst_64449,(3));
} else {
if((state_val_64666 === (26))){
var inst_64564 = (state_64665[(2)]);
var inst_64566 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64567 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64568 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,57,inst_64567,57,inst_64564,"Should not flush 3,4 yet"];
var inst_64569 = cljs.core.PersistentHashMap.fromArrays(inst_64566,inst_64568);
var inst_64570 = cljs.test.report.call(null,inst_64569);
var state_64665__$1 = state_64665;
var statearr_64770_65015 = state_64665__$1;
(statearr_64770_65015[(2)] = inst_64570);

(statearr_64770_65015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (16))){
var _ = (function (){var statearr_64771 = state_64665;
(statearr_64771[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64771;
})();
var state_64665__$1 = state_64665;
var ex64768 = (state_64665__$1[(2)]);
var statearr_64772_65016 = state_64665__$1;
(statearr_64772_65016[(5)] = ex64768);


var statearr_64773_65017 = state_64665__$1;
(statearr_64773_65017[(1)] = (15));

(statearr_64773_65017[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (38))){
var inst_64638 = (state_64665[(17)]);
var inst_64659 = (state_64665[(2)]);
var _ = (function (){var statearr_64774 = state_64665;
(statearr_64774[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64774;
})();
var state_64665__$1 = (function (){var statearr_64775 = state_64665;
(statearr_64775[(33)] = inst_64659);

return statearr_64775;
})();
var statearr_64776_65019 = state_64665__$1;
(statearr_64776_65019[(2)] = inst_64638);

(statearr_64776_65019[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (30))){
var inst_64586 = (state_64665[(12)]);
var inst_64607 = (state_64665[(2)]);
var _ = (function (){var statearr_64777 = state_64665;
(statearr_64777[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64777;
})();
var state_64665__$1 = (function (){var statearr_64778 = state_64665;
(statearr_64778[(34)] = inst_64607);

return statearr_64778;
})();
var statearr_64779_65020 = state_64665__$1;
(statearr_64779_65020[(2)] = inst_64586);

(statearr_64779_65020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (10))){
var inst_64476 = (state_64665[(31)]);
var inst_64487 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64488 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64489 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64490 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64491 = cljs.core.cons(inst_64490,inst_64476);
var inst_64492 = (new cljs.core.List(null,inst_64491,null,(1),null));
var inst_64493 = (new cljs.core.List(null,inst_64489,inst_64492,(2),null));
var inst_64494 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,47,inst_64488,47,inst_64493,"Should not flush before timeout"];
var inst_64495 = cljs.core.PersistentHashMap.fromArrays(inst_64487,inst_64494);
var inst_64496 = cljs.test.report.call(null,inst_64495);
var state_64665__$1 = state_64665;
var statearr_64780_65022 = state_64665__$1;
(statearr_64780_65022[(2)] = inst_64496);

(statearr_64780_65022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (18))){
var inst_64524 = (state_64665[(19)]);
var inst_64535 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64536 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64537 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64538 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64539 = cljs.core.cons(inst_64538,inst_64524);
var inst_64540 = (new cljs.core.List(null,inst_64539,null,(1),null));
var inst_64541 = (new cljs.core.List(null,inst_64537,inst_64540,(2),null));
var inst_64542 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,50,inst_64536,50,inst_64541,"Should flush after timeout"];
var inst_64543 = cljs.core.PersistentHashMap.fromArrays(inst_64535,inst_64542);
var inst_64544 = cljs.test.report.call(null,inst_64543);
var state_64665__$1 = state_64665;
var statearr_64782_65028 = state_64665__$1;
(statearr_64782_65028[(2)] = inst_64544);

(statearr_64782_65028[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (37))){
var inst_64636 = (state_64665[(16)]);
var inst_64648 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64649 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64650 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64651 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64652 = cljs.core.cons(inst_64651,inst_64636);
var inst_64653 = (new cljs.core.List(null,inst_64652,null,(1),null));
var inst_64654 = (new cljs.core.List(null,inst_64650,inst_64653,(2),null));
var inst_64655 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,inst_64649,60,inst_64654,"Should flush 3,4 after timeout from first message"];
var inst_64656 = cljs.core.PersistentHashMap.fromArrays(inst_64648,inst_64655);
var inst_64657 = cljs.test.report.call(null,inst_64656);
var state_64665__$1 = state_64665;
var statearr_64783_65031 = state_64665__$1;
(statearr_64783_65031[(2)] = inst_64657);

(statearr_64783_65031[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64666 === (8))){
var _ = (function (){var statearr_64784 = state_64665;
(statearr_64784[(4)] = cljs.core.rest((state_64665[(4)])));

return statearr_64784;
})();
var state_64665__$1 = state_64665;
var ex64781 = (state_64665__$1[(2)]);
var statearr_64785_65035 = state_64665__$1;
(statearr_64785_65035[(5)] = ex64781);


var statearr_64786_65036 = state_64665__$1;
(statearr_64786_65036[(1)] = (7));

(statearr_64786_65036[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0 = (function (){
var statearr_64789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64789[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__);

(statearr_64789[(1)] = (1));

return statearr_64789;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1 = (function (state_64665){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_64665);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e64790){var ex__32394__auto__ = e64790;
var statearr_64791_65044 = state_64665;
(statearr_64791_65044[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_64665[(4)]))){
var statearr_64792_65045 = state_64665;
(statearr_64792_65045[(1)] = cljs.core.first((state_64665[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65046 = state_64665;
state_64665 = G__65046;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__ = function(state_64665){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1.call(this,state_64665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_64793 = f__32472__auto__();
(statearr_64793[(6)] = c__32471__auto__);

return statearr_64793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64445","meta64445",-249250756,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64444");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64444");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64444.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64444 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64444(meta64445){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444(meta64445));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64444(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794 = (function (meta64795){
this.meta64795 = meta64795;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64796,meta64795__$1){
var self__ = this;
var _64796__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794(meta64795__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64796){
var self__ = this;
var _64796__$1 = this;
return self__.meta64795;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64810 = (arguments.length - (1));
switch (G__64810) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.prototype.apply = (function (self__,args64800){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64800)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32471__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32472__auto__ = (function (){var switch__32390__auto__ = (function (state_64878){
var state_val_64879 = (state_64878[(1)]);
if((state_val_64879 === (7))){
var inst_64831 = (state_64878[(2)]);
var inst_64832 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64833 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64834 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),18,78,inst_64833,78,inst_64831,"Closing input should flush remaining"];
var inst_64835 = cljs.core.PersistentHashMap.fromArrays(inst_64832,inst_64834);
var inst_64836 = cljs.test.report.call(null,inst_64835);
var state_64878__$1 = state_64878;
var statearr_64880_65052 = state_64878__$1;
(statearr_64880_65052[(2)] = inst_64836);

(statearr_64880_65052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64879 === (1))){
var inst_64815 = (state_64878[(7)]);
var inst_64817 = (state_64878[(8)]);
var inst_64815__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64816 = cljs.core.PersistentVector.EMPTY;
var inst_64817__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64816);
var inst_64818 = (function (){var input_ch = inst_64815__$1;
var results = inst_64817__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64819 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64820 = [inst_64815__$1,inst_64818];
var inst_64821 = cljs.core.PersistentHashMap.fromArrays(inst_64819,inst_64820);
var inst_64822 = bb_web_ds_tools.components.async_buffer.create(inst_64821);
var state_64878__$1 = (function (){var statearr_64881 = state_64878;
(statearr_64881[(7)] = inst_64815__$1);

(statearr_64881[(8)] = inst_64817__$1);

(statearr_64881[(9)] = inst_64822);

return statearr_64881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64878__$1,(2),inst_64815__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_64879 === (4))){
var inst_64830 = (state_64878[(2)]);
var state_64878__$1 = (function (){var statearr_64882 = state_64878;
(statearr_64882[(10)] = inst_64830);

return statearr_64882;
})();
var statearr_64883_65054 = state_64878__$1;
(statearr_64883_65054[(2)] = null);

(statearr_64883_65054[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64879 === (6))){
var inst_64875 = (state_64878[(2)]);
var inst_64876 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64878__$1 = (function (){var statearr_64884 = state_64878;
(statearr_64884[(11)] = inst_64875);

return statearr_64884;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64878__$1,inst_64876);
} else {
if((state_val_64879 === (3))){
var inst_64815 = (state_64878[(7)]);
var inst_64826 = (state_64878[(2)]);
var inst_64827 = cljs.core.async.close_BANG_(inst_64815);
var inst_64828 = cljs.core.async.timeout((20));
var state_64878__$1 = (function (){var statearr_64885 = state_64878;
(statearr_64885[(12)] = inst_64826);

(statearr_64885[(13)] = inst_64827);

return statearr_64885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64878__$1,(4),inst_64828);
} else {
if((state_val_64879 === (2))){
var inst_64815 = (state_64878[(7)]);
var inst_64824 = (state_64878[(2)]);
var state_64878__$1 = (function (){var statearr_64886 = state_64878;
(statearr_64886[(14)] = inst_64824);

return statearr_64886;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64878__$1,(3),inst_64815,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_64879 === (11))){
var inst_64851 = (state_64878[(15)]);
var inst_64872 = (state_64878[(2)]);
var _ = (function (){var statearr_64887 = state_64878;
(statearr_64887[(4)] = cljs.core.rest((state_64878[(4)])));

return statearr_64887;
})();
var state_64878__$1 = (function (){var statearr_64888 = state_64878;
(statearr_64888[(16)] = inst_64872);

return statearr_64888;
})();
var statearr_64889_65057 = state_64878__$1;
(statearr_64889_65057[(2)] = inst_64851);

(statearr_64889_65057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64879 === (9))){
var inst_64850 = (state_64878[(17)]);
var inst_64853 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64854 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64855 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64856 = cljs.core.cons(inst_64855,inst_64850);
var inst_64857 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),18,78,inst_64854,78,inst_64856,"Closing input should flush remaining"];
var inst_64858 = cljs.core.PersistentHashMap.fromArrays(inst_64853,inst_64857);
var inst_64859 = cljs.test.report.call(null,inst_64858);
var state_64878__$1 = state_64878;
var statearr_64890_65059 = state_64878__$1;
(statearr_64890_65059[(2)] = inst_64859);

(statearr_64890_65059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64879 === (5))){
var inst_64817 = (state_64878[(8)]);
var inst_64850 = (state_64878[(17)]);
var inst_64851 = (state_64878[(15)]);
var _ = (function (){var statearr_64892 = state_64878;
(statearr_64892[(4)] = cljs.core.cons((8),(state_64878[(4)])));

return statearr_64892;
})();
var inst_64842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64844 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_64845 = (new cljs.core.PersistentVector(null,2,(5),inst_64843,inst_64844,null));
var inst_64846 = [inst_64845];
var inst_64847 = (new cljs.core.PersistentVector(null,1,(5),inst_64842,inst_64846,null));
var inst_64848 = cljs.core.deref(inst_64817);
var inst_64849 = (new cljs.core.List(null,inst_64848,null,(1),null));
var inst_64850__$1 = (new cljs.core.List(null,inst_64847,inst_64849,(2),null));
var inst_64851__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64850__$1);
var state_64878__$1 = (function (){var statearr_64893 = state_64878;
(statearr_64893[(17)] = inst_64850__$1);

(statearr_64893[(15)] = inst_64851__$1);

return statearr_64893;
})();
if(cljs.core.truth_(inst_64851__$1)){
var statearr_64894_65064 = state_64878__$1;
(statearr_64894_65064[(1)] = (9));

} else {
var statearr_64895_65065 = state_64878__$1;
(statearr_64895_65065[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64879 === (10))){
var inst_64850 = (state_64878[(17)]);
var inst_64861 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64862 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64863 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64864 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64865 = cljs.core.cons(inst_64864,inst_64850);
var inst_64866 = (new cljs.core.List(null,inst_64865,null,(1),null));
var inst_64867 = (new cljs.core.List(null,inst_64863,inst_64866,(2),null));
var inst_64868 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),18,78,inst_64862,78,inst_64867,"Closing input should flush remaining"];
var inst_64869 = cljs.core.PersistentHashMap.fromArrays(inst_64861,inst_64868);
var inst_64870 = cljs.test.report.call(null,inst_64869);
var state_64878__$1 = state_64878;
var statearr_64896_65068 = state_64878__$1;
(statearr_64896_65068[(2)] = inst_64870);

(statearr_64896_65068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64879 === (8))){
var _ = (function (){var statearr_64897 = state_64878;
(statearr_64897[(4)] = cljs.core.rest((state_64878[(4)])));

return statearr_64897;
})();
var state_64878__$1 = state_64878;
var ex64891 = (state_64878__$1[(2)]);
var statearr_64898_65072 = state_64878__$1;
(statearr_64898_65072[(5)] = ex64891);


var statearr_64899_65073 = state_64878__$1;
(statearr_64899_65073[(1)] = (7));

(statearr_64899_65073[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0 = (function (){
var statearr_64900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64900[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__);

(statearr_64900[(1)] = (1));

return statearr_64900;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1 = (function (state_64878){
while(true){
var ret_value__32392__auto__ = (function (){try{while(true){
var result__32393__auto__ = switch__32390__auto__(state_64878);
if(cljs.core.keyword_identical_QMARK_(result__32393__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32393__auto__;
}
break;
}
}catch (e64901){var ex__32394__auto__ = e64901;
var statearr_64902_65074 = state_64878;
(statearr_64902_65074[(2)] = ex__32394__auto__);


if(cljs.core.seq((state_64878[(4)]))){
var statearr_64903_65075 = state_64878;
(statearr_64903_65075[(1)] = cljs.core.first((state_64878[(4)])));

} else {
throw ex__32394__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32392__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65078 = state_64878;
state_64878 = G__65078;
continue;
} else {
return ret_value__32392__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__ = function(state_64878){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1.call(this,state_64878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32391__auto__;
})()
})();
var state__32473__auto__ = (function (){var statearr_64904 = f__32472__auto__();
(statearr_64904[(6)] = c__32471__auto__);

return statearr_64904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32473__auto__);
}));

return c__32471__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64795","meta64795",-1703491967,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64794");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64794");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64794.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64794 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64794(meta64795){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794(meta64795));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64794(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
