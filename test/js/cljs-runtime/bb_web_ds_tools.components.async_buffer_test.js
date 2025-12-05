goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176 = (function (meta56177){
this.meta56177 = meta56177;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56178,meta56177__$1){
var self__ = this;
var _56178__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176(meta56177__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56178){
var self__ = this;
var _56178__$1 = this;
return self__.meta56177;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56210 = (arguments.length - (1));
switch (G__56210) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.prototype.apply = (function (self__,args56183){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56183)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56403){
var state_val_56404 = (state_56403[(1)]);
if((state_val_56404 === (7))){
var inst_56260 = (state_56403[(2)]);
var inst_56261 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56262 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56263 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56262,19,inst_56260,"Buffer should not flush automatically without timer"];
var inst_56264 = cljs.core.PersistentHashMap.fromArrays(inst_56261,inst_56263);
var inst_56265 = cljs.test.report.call(null,inst_56264);
var state_56403__$1 = state_56403;
var statearr_56405_56981 = state_56403__$1;
(statearr_56405_56981[(2)] = inst_56265);

(statearr_56405_56981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (20))){
var inst_56252 = (state_56403[(7)]);
var inst_56348 = (state_56403[(2)]);
var inst_56349 = (inst_56252.cljs$core$IFn$_invoke$arity$0 ? inst_56252.cljs$core$IFn$_invoke$arity$0() : inst_56252.call(null));
var inst_56350 = cljs.core.async.timeout((20));
var state_56403__$1 = (function (){var statearr_56406 = state_56403;
(statearr_56406[(8)] = inst_56348);

(statearr_56406[(9)] = inst_56349);

return statearr_56406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56403__$1,(21),inst_56350);
} else {
if((state_val_56404 === (27))){
var inst_56375 = (state_56403[(10)]);
var inst_56386 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56387 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56388 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56389 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56390 = cljs.core.cons(inst_56389,inst_56375);
var inst_56391 = (new cljs.core.List(null,inst_56390,null,(1),null));
var inst_56392 = (new cljs.core.List(null,inst_56388,inst_56391,(2),null));
var inst_56393 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56387,29,inst_56392,"Subsequent flush should work"];
var inst_56394 = cljs.core.PersistentHashMap.fromArrays(inst_56386,inst_56393);
var inst_56395 = cljs.test.report.call(null,inst_56394);
var state_56403__$1 = state_56403;
var statearr_56408_56982 = state_56403__$1;
(statearr_56408_56982[(2)] = inst_56395);

(statearr_56408_56982[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (1))){
var inst_56245 = (state_56403[(11)]);
var inst_56247 = (state_56403[(12)]);
var inst_56245__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56246 = cljs.core.PersistentVector.EMPTY;
var inst_56247__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56246);
var inst_56248 = (function (){var input_ch = inst_56245__$1;
var results = inst_56247__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56249 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56250 = [inst_56245__$1,inst_56248];
var inst_56251 = cljs.core.PersistentHashMap.fromArrays(inst_56249,inst_56250);
var inst_56252 = bb_web_ds_tools.components.async_buffer.create(inst_56251);
var state_56403__$1 = (function (){var statearr_56410 = state_56403;
(statearr_56410[(11)] = inst_56245__$1);

(statearr_56410[(12)] = inst_56247__$1);

(statearr_56410[(7)] = inst_56252);

return statearr_56410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56403__$1,(2),inst_56245__$1,(1));
} else {
if((state_val_56404 === (24))){
var inst_56353 = (state_56403[(2)]);
var inst_56354 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56355 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56356 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56355,29,inst_56353,"Subsequent flush should work"];
var inst_56357 = cljs.core.PersistentHashMap.fromArrays(inst_56354,inst_56356);
var inst_56358 = cljs.test.report.call(null,inst_56357);
var state_56403__$1 = state_56403;
var statearr_56414_56985 = state_56403__$1;
(statearr_56414_56985[(2)] = inst_56358);

(statearr_56414_56985[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (4))){
var inst_56259 = (state_56403[(2)]);
var state_56403__$1 = (function (){var statearr_56415 = state_56403;
(statearr_56415[(13)] = inst_56259);

return statearr_56415;
})();
var statearr_56416_56986 = state_56403__$1;
(statearr_56416_56986[(2)] = null);

(statearr_56416_56986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (15))){
var inst_56302 = (state_56403[(2)]);
var inst_56303 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56304 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56305 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56304,24,inst_56302,"Manual flush should flush all items"];
var inst_56306 = cljs.core.PersistentHashMap.fromArrays(inst_56303,inst_56305);
var inst_56307 = cljs.test.report.call(null,inst_56306);
var state_56403__$1 = state_56403;
var statearr_56417_56987 = state_56403__$1;
(statearr_56417_56987[(2)] = inst_56307);

(statearr_56417_56987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (21))){
var inst_56352 = (state_56403[(2)]);
var state_56403__$1 = (function (){var statearr_56420 = state_56403;
(statearr_56420[(14)] = inst_56352);

return statearr_56420;
})();
var statearr_56421_56988 = state_56403__$1;
(statearr_56421_56988[(2)] = null);

(statearr_56421_56988[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (13))){
var inst_56247 = (state_56403[(12)]);
var inst_56321 = (state_56403[(15)]);
var inst_56322 = (state_56403[(16)]);
var _ = (function (){var statearr_56423 = state_56403;
(statearr_56423[(4)] = cljs.core.cons((16),(state_56403[(4)])));

return statearr_56423;
})();
var inst_56313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56314 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56315 = [(1),(2)];
var inst_56316 = (new cljs.core.PersistentVector(null,2,(5),inst_56314,inst_56315,null));
var inst_56317 = [inst_56316];
var inst_56318 = (new cljs.core.PersistentVector(null,1,(5),inst_56313,inst_56317,null));
var inst_56319 = cljs.core.deref(inst_56247);
var inst_56320 = (new cljs.core.List(null,inst_56319,null,(1),null));
var inst_56321__$1 = (new cljs.core.List(null,inst_56318,inst_56320,(2),null));
var inst_56322__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56321__$1);
var state_56403__$1 = (function (){var statearr_56430 = state_56403;
(statearr_56430[(15)] = inst_56321__$1);

(statearr_56430[(16)] = inst_56322__$1);

return statearr_56430;
})();
if(cljs.core.truth_(inst_56322__$1)){
var statearr_56431_56989 = state_56403__$1;
(statearr_56431_56989[(1)] = (17));

} else {
var statearr_56432_56990 = state_56403__$1;
(statearr_56432_56990[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (22))){
var inst_56247 = (state_56403[(12)]);
var inst_56375 = (state_56403[(10)]);
var inst_56376 = (state_56403[(17)]);
var _ = (function (){var statearr_56433 = state_56403;
(statearr_56433[(4)] = cljs.core.cons((25),(state_56403[(4)])));

return statearr_56433;
})();
var inst_56364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56366 = [(1),(2)];
var inst_56367 = (new cljs.core.PersistentVector(null,2,(5),inst_56365,inst_56366,null));
var inst_56368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56369 = [(3)];
var inst_56370 = (new cljs.core.PersistentVector(null,1,(5),inst_56368,inst_56369,null));
var inst_56371 = [inst_56367,inst_56370];
var inst_56372 = (new cljs.core.PersistentVector(null,2,(5),inst_56364,inst_56371,null));
var inst_56373 = cljs.core.deref(inst_56247);
var inst_56374 = (new cljs.core.List(null,inst_56373,null,(1),null));
var inst_56375__$1 = (new cljs.core.List(null,inst_56372,inst_56374,(2),null));
var inst_56376__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56375__$1);
var state_56403__$1 = (function (){var statearr_56434 = state_56403;
(statearr_56434[(10)] = inst_56375__$1);

(statearr_56434[(17)] = inst_56376__$1);

return statearr_56434;
})();
if(cljs.core.truth_(inst_56376__$1)){
var statearr_56435_56992 = state_56403__$1;
(statearr_56435_56992[(1)] = (26));

} else {
var statearr_56436_56993 = state_56403__$1;
(statearr_56436_56993[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (6))){
var inst_56252 = (state_56403[(7)]);
var inst_56297 = (state_56403[(2)]);
var inst_56298 = (inst_56252.cljs$core$IFn$_invoke$arity$0 ? inst_56252.cljs$core$IFn$_invoke$arity$0() : inst_56252.call(null));
var inst_56299 = cljs.core.async.timeout((20));
var state_56403__$1 = (function (){var statearr_56438 = state_56403;
(statearr_56438[(18)] = inst_56297);

(statearr_56438[(19)] = inst_56298);

return statearr_56438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56403__$1,(12),inst_56299);
} else {
if((state_val_56404 === (28))){
var inst_56376 = (state_56403[(17)]);
var inst_56397 = (state_56403[(2)]);
var _ = (function (){var statearr_56439 = state_56403;
(statearr_56439[(4)] = cljs.core.rest((state_56403[(4)])));

return statearr_56439;
})();
var state_56403__$1 = (function (){var statearr_56440 = state_56403;
(statearr_56440[(20)] = inst_56397);

return statearr_56440;
})();
var statearr_56441_56995 = state_56403__$1;
(statearr_56441_56995[(2)] = inst_56376);

(statearr_56441_56995[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (25))){
var _ = (function (){var statearr_56442 = state_56403;
(statearr_56442[(4)] = cljs.core.rest((state_56403[(4)])));

return statearr_56442;
})();
var state_56403__$1 = state_56403;
var ex56437 = (state_56403__$1[(2)]);
var statearr_56443_56996 = state_56403__$1;
(statearr_56443_56996[(5)] = ex56437);


var statearr_56444_56997 = state_56403__$1;
(statearr_56444_56997[(1)] = (24));

(statearr_56444_56997[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (17))){
var inst_56321 = (state_56403[(15)]);
var inst_56324 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56325 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56326 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56327 = cljs.core.cons(inst_56326,inst_56321);
var inst_56328 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56325,24,inst_56327,"Manual flush should flush all items"];
var inst_56329 = cljs.core.PersistentHashMap.fromArrays(inst_56324,inst_56328);
var inst_56330 = cljs.test.report.call(null,inst_56329);
var state_56403__$1 = state_56403;
var statearr_56445_56999 = state_56403__$1;
(statearr_56445_56999[(2)] = inst_56330);

(statearr_56445_56999[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (3))){
var inst_56256 = (state_56403[(2)]);
var inst_56257 = cljs.core.async.timeout((20));
var state_56403__$1 = (function (){var statearr_56446 = state_56403;
(statearr_56446[(21)] = inst_56256);

return statearr_56446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56403__$1,(4),inst_56257);
} else {
if((state_val_56404 === (12))){
var inst_56301 = (state_56403[(2)]);
var state_56403__$1 = (function (){var statearr_56447 = state_56403;
(statearr_56447[(22)] = inst_56301);

return statearr_56447;
})();
var statearr_56448_57000 = state_56403__$1;
(statearr_56448_57000[(2)] = null);

(statearr_56448_57000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (2))){
var inst_56245 = (state_56403[(11)]);
var inst_56254 = (state_56403[(2)]);
var state_56403__$1 = (function (){var statearr_56450 = state_56403;
(statearr_56450[(23)] = inst_56254);

return statearr_56450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56403__$1,(3),inst_56245,(2));
} else {
if((state_val_56404 === (23))){
var inst_56400 = (state_56403[(2)]);
var inst_56401 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56403__$1 = (function (){var statearr_56451 = state_56403;
(statearr_56451[(24)] = inst_56400);

return statearr_56451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56403__$1,inst_56401);
} else {
if((state_val_56404 === (19))){
var inst_56322 = (state_56403[(16)]);
var inst_56343 = (state_56403[(2)]);
var _ = (function (){var statearr_56452 = state_56403;
(statearr_56452[(4)] = cljs.core.rest((state_56403[(4)])));

return statearr_56452;
})();
var state_56403__$1 = (function (){var statearr_56453 = state_56403;
(statearr_56453[(25)] = inst_56343);

return statearr_56453;
})();
var statearr_56454_57003 = state_56403__$1;
(statearr_56454_57003[(2)] = inst_56322);

(statearr_56454_57003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (11))){
var inst_56273 = (state_56403[(26)]);
var inst_56294 = (state_56403[(2)]);
var _ = (function (){var statearr_56455 = state_56403;
(statearr_56455[(4)] = cljs.core.rest((state_56403[(4)])));

return statearr_56455;
})();
var state_56403__$1 = (function (){var statearr_56456 = state_56403;
(statearr_56456[(27)] = inst_56294);

return statearr_56456;
})();
var statearr_56457_57005 = state_56403__$1;
(statearr_56457_57005[(2)] = inst_56273);

(statearr_56457_57005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (9))){
var inst_56272 = (state_56403[(28)]);
var inst_56275 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56276 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56277 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56278 = cljs.core.cons(inst_56277,inst_56272);
var inst_56279 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56276,19,inst_56278,"Buffer should not flush automatically without timer"];
var inst_56280 = cljs.core.PersistentHashMap.fromArrays(inst_56275,inst_56279);
var inst_56281 = cljs.test.report.call(null,inst_56280);
var state_56403__$1 = state_56403;
var statearr_56459_57006 = state_56403__$1;
(statearr_56459_57006[(2)] = inst_56281);

(statearr_56459_57006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (5))){
var inst_56247 = (state_56403[(12)]);
var inst_56272 = (state_56403[(28)]);
var inst_56273 = (state_56403[(26)]);
var _ = (function (){var statearr_56460 = state_56403;
(statearr_56460[(4)] = cljs.core.cons((8),(state_56403[(4)])));

return statearr_56460;
})();
var inst_56271 = cljs.core.deref(inst_56247);
var inst_56272__$1 = (new cljs.core.List(null,inst_56271,null,(1),null));
var inst_56273__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56272__$1);
var state_56403__$1 = (function (){var statearr_56462 = state_56403;
(statearr_56462[(28)] = inst_56272__$1);

(statearr_56462[(26)] = inst_56273__$1);

return statearr_56462;
})();
if(cljs.core.truth_(inst_56273__$1)){
var statearr_56464_57007 = state_56403__$1;
(statearr_56464_57007[(1)] = (9));

} else {
var statearr_56465_57008 = state_56403__$1;
(statearr_56465_57008[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (14))){
var inst_56245 = (state_56403[(11)]);
var inst_56346 = (state_56403[(2)]);
var state_56403__$1 = (function (){var statearr_56467 = state_56403;
(statearr_56467[(29)] = inst_56346);

return statearr_56467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56403__$1,(20),inst_56245,(3));
} else {
if((state_val_56404 === (26))){
var inst_56375 = (state_56403[(10)]);
var inst_56378 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56379 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56380 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56381 = cljs.core.cons(inst_56380,inst_56375);
var inst_56382 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56379,29,inst_56381,"Subsequent flush should work"];
var inst_56383 = cljs.core.PersistentHashMap.fromArrays(inst_56378,inst_56382);
var inst_56384 = cljs.test.report.call(null,inst_56383);
var state_56403__$1 = state_56403;
var statearr_56471_57012 = state_56403__$1;
(statearr_56471_57012[(2)] = inst_56384);

(statearr_56471_57012[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (16))){
var _ = (function (){var statearr_56473 = state_56403;
(statearr_56473[(4)] = cljs.core.rest((state_56403[(4)])));

return statearr_56473;
})();
var state_56403__$1 = state_56403;
var ex56466 = (state_56403__$1[(2)]);
var statearr_56474_57014 = state_56403__$1;
(statearr_56474_57014[(5)] = ex56466);


var statearr_56475_57015 = state_56403__$1;
(statearr_56475_57015[(1)] = (15));

(statearr_56475_57015[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (10))){
var inst_56272 = (state_56403[(28)]);
var inst_56283 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56284 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56285 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56286 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56287 = cljs.core.cons(inst_56286,inst_56272);
var inst_56288 = (new cljs.core.List(null,inst_56287,null,(1),null));
var inst_56289 = (new cljs.core.List(null,inst_56285,inst_56288,(2),null));
var inst_56290 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56284,19,inst_56289,"Buffer should not flush automatically without timer"];
var inst_56291 = cljs.core.PersistentHashMap.fromArrays(inst_56283,inst_56290);
var inst_56292 = cljs.test.report.call(null,inst_56291);
var state_56403__$1 = state_56403;
var statearr_56478_57016 = state_56403__$1;
(statearr_56478_57016[(2)] = inst_56292);

(statearr_56478_57016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (18))){
var inst_56321 = (state_56403[(15)]);
var inst_56332 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56333 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56334 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56335 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56336 = cljs.core.cons(inst_56335,inst_56321);
var inst_56337 = (new cljs.core.List(null,inst_56336,null,(1),null));
var inst_56338 = (new cljs.core.List(null,inst_56334,inst_56337,(2),null));
var inst_56339 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56333,24,inst_56338,"Manual flush should flush all items"];
var inst_56340 = cljs.core.PersistentHashMap.fromArrays(inst_56332,inst_56339);
var inst_56341 = cljs.test.report.call(null,inst_56340);
var state_56403__$1 = state_56403;
var statearr_56483_57019 = state_56403__$1;
(statearr_56483_57019[(2)] = inst_56341);

(statearr_56483_57019[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56404 === (8))){
var _ = (function (){var statearr_56484 = state_56403;
(statearr_56484[(4)] = cljs.core.rest((state_56403[(4)])));

return statearr_56484;
})();
var state_56403__$1 = state_56403;
var ex56476 = (state_56403__$1[(2)]);
var statearr_56487_57020 = state_56403__$1;
(statearr_56487_57020[(5)] = ex56476);


var statearr_56489_57021 = state_56403__$1;
(statearr_56489_57021[(1)] = (7));

(statearr_56489_57021[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0 = (function (){
var statearr_56490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56490[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56490[(1)] = (1));

return statearr_56490;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56403){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56403);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56492){var ex__32294__auto__ = e56492;
var statearr_56493_57025 = state_56403;
(statearr_56493_57025[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56403[(4)]))){
var statearr_56494_57026 = state_56403;
(statearr_56494_57026[(1)] = cljs.core.first((state_56403[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57027 = state_56403;
state_56403 = G__57027;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56403){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56497 = f__32362__auto__();
(statearr_56497[(6)] = c__32361__auto__);

return statearr_56497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56177","meta56177",1688312917,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56176");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56176");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56176.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56176 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56176(meta56177){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176(meta56177));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56176(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502 = (function (meta56503){
this.meta56503 = meta56503;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56504,meta56503__$1){
var self__ = this;
var _56504__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502(meta56503__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56504){
var self__ = this;
var _56504__$1 = this;
return self__.meta56503;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56507 = (arguments.length - (1));
switch (G__56507) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.prototype.apply = (function (self__,args56506){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56506)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56733){
var state_val_56734 = (state_56733[(1)]);
if((state_val_56734 === (7))){
var inst_56526 = (state_56733[(2)]);
var inst_56527 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56528 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56529 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56528,47,inst_56526,"Should not flush before timeout"];
var inst_56530 = cljs.core.PersistentHashMap.fromArrays(inst_56527,inst_56529);
var inst_56531 = cljs.test.report.call(null,inst_56530);
var state_56733__$1 = state_56733;
var statearr_56736_57032 = state_56733__$1;
(statearr_56736_57032[(2)] = inst_56531);

(statearr_56736_57032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (20))){
var inst_56626 = (state_56733[(2)]);
var inst_56627 = cljs.core.async.timeout((50));
var state_56733__$1 = (function (){var statearr_56737 = state_56733;
(statearr_56737[(7)] = inst_56626);

return statearr_56737;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56733__$1,(21),inst_56627);
} else {
if((state_val_56734 === (27))){
var _ = (function (){var statearr_56738 = state_56733;
(statearr_56738[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56738;
})();
var state_56733__$1 = state_56733;
var ex56735 = (state_56733__$1[(2)]);
var statearr_56739_57034 = state_56733__$1;
(statearr_56739_57034[(5)] = ex56735);


var statearr_56740_57035 = state_56733__$1;
(statearr_56740_57035[(1)] = (26));

(statearr_56740_57035[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (1))){
var inst_56511 = (state_56733[(8)]);
var inst_56513 = (state_56733[(9)]);
var inst_56511__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56512 = cljs.core.PersistentVector.EMPTY;
var inst_56513__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56512);
var inst_56514 = (function (){var input_ch = inst_56511__$1;
var results = inst_56513__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56515 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56516 = [inst_56511__$1,(100),inst_56514];
var inst_56517 = cljs.core.PersistentHashMap.fromArrays(inst_56515,inst_56516);
var inst_56518 = bb_web_ds_tools.components.async_buffer.create(inst_56517);
var state_56733__$1 = (function (){var statearr_56741 = state_56733;
(statearr_56741[(8)] = inst_56511__$1);

(statearr_56741[(9)] = inst_56513__$1);

(statearr_56741[(10)] = inst_56518);

return statearr_56741;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56733__$1,(2),inst_56511__$1,(1));
} else {
if((state_val_56734 === (24))){
var inst_56513 = (state_56733[(9)]);
var inst_56654 = (state_56733[(11)]);
var inst_56655 = (state_56733[(12)]);
var _ = (function (){var statearr_56742 = state_56733;
(statearr_56742[(4)] = cljs.core.cons((27),(state_56733[(4)])));

return statearr_56742;
})();
var inst_56646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56647 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56648 = [(1),(2)];
var inst_56649 = (new cljs.core.PersistentVector(null,2,(5),inst_56647,inst_56648,null));
var inst_56650 = [inst_56649];
var inst_56651 = (new cljs.core.PersistentVector(null,1,(5),inst_56646,inst_56650,null));
var inst_56652 = cljs.core.deref(inst_56513);
var inst_56653 = (new cljs.core.List(null,inst_56652,null,(1),null));
var inst_56654__$1 = (new cljs.core.List(null,inst_56651,inst_56653,(2),null));
var inst_56655__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56654__$1);
var state_56733__$1 = (function (){var statearr_56743 = state_56733;
(statearr_56743[(11)] = inst_56654__$1);

(statearr_56743[(12)] = inst_56655__$1);

return statearr_56743;
})();
if(cljs.core.truth_(inst_56655__$1)){
var statearr_56744_57036 = state_56733__$1;
(statearr_56744_57036[(1)] = (28));

} else {
var statearr_56745_57037 = state_56733__$1;
(statearr_56745_57037[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (4))){
var inst_56525 = (state_56733[(2)]);
var state_56733__$1 = (function (){var statearr_56746 = state_56733;
(statearr_56746[(13)] = inst_56525);

return statearr_56746;
})();
var statearr_56747_57039 = state_56733__$1;
(statearr_56747_57039[(2)] = null);

(statearr_56747_57039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (15))){
var inst_56579 = (state_56733[(2)]);
var inst_56580 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56581 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56582 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56581,50,inst_56579,"Should flush after timeout"];
var inst_56583 = cljs.core.PersistentHashMap.fromArrays(inst_56580,inst_56582);
var inst_56584 = cljs.test.report.call(null,inst_56583);
var state_56733__$1 = state_56733;
var statearr_56748_57040 = state_56733__$1;
(statearr_56748_57040[(2)] = inst_56584);

(statearr_56748_57040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (21))){
var inst_56511 = (state_56733[(8)]);
var inst_56629 = (state_56733[(2)]);
var state_56733__$1 = (function (){var statearr_56749 = state_56733;
(statearr_56749[(14)] = inst_56629);

return statearr_56749;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56733__$1,(22),inst_56511,(4));
} else {
if((state_val_56734 === (31))){
var inst_56682 = (state_56733[(2)]);
var state_56733__$1 = (function (){var statearr_56750 = state_56733;
(statearr_56750[(15)] = inst_56682);

return statearr_56750;
})();
var statearr_56751_57044 = state_56733__$1;
(statearr_56751_57044[(2)] = null);

(statearr_56751_57044[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (32))){
var inst_56513 = (state_56733[(9)]);
var inst_56705 = (state_56733[(16)]);
var inst_56706 = (state_56733[(17)]);
var _ = (function (){var statearr_56752 = state_56733;
(statearr_56752[(4)] = cljs.core.cons((35),(state_56733[(4)])));

return statearr_56752;
})();
var inst_56694 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56695 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56696 = [(1),(2)];
var inst_56697 = (new cljs.core.PersistentVector(null,2,(5),inst_56695,inst_56696,null));
var inst_56698 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56699 = [(3),(4)];
var inst_56700 = (new cljs.core.PersistentVector(null,2,(5),inst_56698,inst_56699,null));
var inst_56701 = [inst_56697,inst_56700];
var inst_56702 = (new cljs.core.PersistentVector(null,2,(5),inst_56694,inst_56701,null));
var inst_56703 = cljs.core.deref(inst_56513);
var inst_56704 = (new cljs.core.List(null,inst_56703,null,(1),null));
var inst_56705__$1 = (new cljs.core.List(null,inst_56702,inst_56704,(2),null));
var inst_56706__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56705__$1);
var state_56733__$1 = (function (){var statearr_56753 = state_56733;
(statearr_56753[(16)] = inst_56705__$1);

(statearr_56753[(17)] = inst_56706__$1);

return statearr_56753;
})();
if(cljs.core.truth_(inst_56706__$1)){
var statearr_56754_57046 = state_56733__$1;
(statearr_56754_57046[(1)] = (36));

} else {
var statearr_56755_57047 = state_56733__$1;
(statearr_56755_57047[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (33))){
var inst_56730 = (state_56733[(2)]);
var inst_56731 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56733__$1 = (function (){var statearr_56756 = state_56733;
(statearr_56756[(18)] = inst_56730);

return statearr_56756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56733__$1,inst_56731);
} else {
if((state_val_56734 === (13))){
var inst_56513 = (state_56733[(9)]);
var inst_56598 = (state_56733[(19)]);
var inst_56599 = (state_56733[(20)]);
var _ = (function (){var statearr_56757 = state_56733;
(statearr_56757[(4)] = cljs.core.cons((16),(state_56733[(4)])));

return statearr_56757;
})();
var inst_56590 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56592 = [(1),(2)];
var inst_56593 = (new cljs.core.PersistentVector(null,2,(5),inst_56591,inst_56592,null));
var inst_56594 = [inst_56593];
var inst_56595 = (new cljs.core.PersistentVector(null,1,(5),inst_56590,inst_56594,null));
var inst_56596 = cljs.core.deref(inst_56513);
var inst_56597 = (new cljs.core.List(null,inst_56596,null,(1),null));
var inst_56598__$1 = (new cljs.core.List(null,inst_56595,inst_56597,(2),null));
var inst_56599__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56598__$1);
var state_56733__$1 = (function (){var statearr_56758 = state_56733;
(statearr_56758[(19)] = inst_56598__$1);

(statearr_56758[(20)] = inst_56599__$1);

return statearr_56758;
})();
if(cljs.core.truth_(inst_56599__$1)){
var statearr_56759_57050 = state_56733__$1;
(statearr_56759_57050[(1)] = (17));

} else {
var statearr_56760_57051 = state_56733__$1;
(statearr_56760_57051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (22))){
var inst_56631 = (state_56733[(2)]);
var inst_56632 = cljs.core.async.timeout((20));
var state_56733__$1 = (function (){var statearr_56761 = state_56733;
(statearr_56761[(21)] = inst_56631);

return statearr_56761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56733__$1,(23),inst_56632);
} else {
if((state_val_56734 === (36))){
var inst_56705 = (state_56733[(16)]);
var inst_56708 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56709 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56710 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56711 = cljs.core.cons(inst_56710,inst_56705);
var inst_56712 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56709,60,inst_56711,"Should flush 3,4 after timeout from first message"];
var inst_56713 = cljs.core.PersistentHashMap.fromArrays(inst_56708,inst_56712);
var inst_56714 = cljs.test.report.call(null,inst_56713);
var state_56733__$1 = state_56733;
var statearr_56762_57054 = state_56733__$1;
(statearr_56762_57054[(2)] = inst_56714);

(statearr_56762_57054[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (29))){
var inst_56654 = (state_56733[(11)]);
var inst_56665 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56666 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56667 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56668 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56669 = cljs.core.cons(inst_56668,inst_56654);
var inst_56670 = (new cljs.core.List(null,inst_56669,null,(1),null));
var inst_56671 = (new cljs.core.List(null,inst_56667,inst_56670,(2),null));
var inst_56672 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56666,57,inst_56671,"Should not flush 3,4 yet"];
var inst_56673 = cljs.core.PersistentHashMap.fromArrays(inst_56665,inst_56672);
var inst_56674 = cljs.test.report.call(null,inst_56673);
var state_56733__$1 = state_56733;
var statearr_56763_57059 = state_56733__$1;
(statearr_56763_57059[(2)] = inst_56674);

(statearr_56763_57059[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (6))){
var inst_56575 = (state_56733[(2)]);
var inst_56576 = cljs.core.async.timeout((100));
var state_56733__$1 = (function (){var statearr_56764 = state_56733;
(statearr_56764[(22)] = inst_56575);

return statearr_56764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56733__$1,(12),inst_56576);
} else {
if((state_val_56734 === (28))){
var inst_56654 = (state_56733[(11)]);
var inst_56657 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56658 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56659 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56660 = cljs.core.cons(inst_56659,inst_56654);
var inst_56661 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56658,57,inst_56660,"Should not flush 3,4 yet"];
var inst_56662 = cljs.core.PersistentHashMap.fromArrays(inst_56657,inst_56661);
var inst_56663 = cljs.test.report.call(null,inst_56662);
var state_56733__$1 = state_56733;
var statearr_56765_57061 = state_56733__$1;
(statearr_56765_57061[(2)] = inst_56663);

(statearr_56765_57061[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (25))){
var inst_56679 = (state_56733[(2)]);
var inst_56680 = cljs.core.async.timeout((80));
var state_56733__$1 = (function (){var statearr_56766 = state_56733;
(statearr_56766[(23)] = inst_56679);

return statearr_56766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56733__$1,(31),inst_56680);
} else {
if((state_val_56734 === (34))){
var inst_56683 = (state_56733[(2)]);
var inst_56684 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56685 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56686 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56685,60,inst_56683,"Should flush 3,4 after timeout from first message"];
var inst_56687 = cljs.core.PersistentHashMap.fromArrays(inst_56684,inst_56686);
var inst_56688 = cljs.test.report.call(null,inst_56687);
var state_56733__$1 = state_56733;
var statearr_56767_57064 = state_56733__$1;
(statearr_56767_57064[(2)] = inst_56688);

(statearr_56767_57064[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (17))){
var inst_56598 = (state_56733[(19)]);
var inst_56602 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56603 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56604 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56605 = cljs.core.cons(inst_56604,inst_56598);
var inst_56606 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56603,50,inst_56605,"Should flush after timeout"];
var inst_56607 = cljs.core.PersistentHashMap.fromArrays(inst_56602,inst_56606);
var inst_56608 = cljs.test.report.call(null,inst_56607);
var state_56733__$1 = state_56733;
var statearr_56768_57066 = state_56733__$1;
(statearr_56768_57066[(2)] = inst_56608);

(statearr_56768_57066[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (3))){
var inst_56522 = (state_56733[(2)]);
var inst_56523 = cljs.core.async.timeout((50));
var state_56733__$1 = (function (){var statearr_56769 = state_56733;
(statearr_56769[(24)] = inst_56522);

return statearr_56769;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56733__$1,(4),inst_56523);
} else {
if((state_val_56734 === (12))){
var inst_56578 = (state_56733[(2)]);
var state_56733__$1 = (function (){var statearr_56770 = state_56733;
(statearr_56770[(25)] = inst_56578);

return statearr_56770;
})();
var statearr_56771_57068 = state_56733__$1;
(statearr_56771_57068[(2)] = null);

(statearr_56771_57068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (2))){
var inst_56511 = (state_56733[(8)]);
var inst_56520 = (state_56733[(2)]);
var state_56733__$1 = (function (){var statearr_56773 = state_56733;
(statearr_56773[(26)] = inst_56520);

return statearr_56773;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56733__$1,(3),inst_56511,(2));
} else {
if((state_val_56734 === (23))){
var inst_56634 = (state_56733[(2)]);
var state_56733__$1 = (function (){var statearr_56774 = state_56733;
(statearr_56774[(27)] = inst_56634);

return statearr_56774;
})();
var statearr_56775_57073 = state_56733__$1;
(statearr_56775_57073[(2)] = null);

(statearr_56775_57073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (35))){
var _ = (function (){var statearr_56776 = state_56733;
(statearr_56776[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56776;
})();
var state_56733__$1 = state_56733;
var ex56772 = (state_56733__$1[(2)]);
var statearr_56777_57075 = state_56733__$1;
(statearr_56777_57075[(5)] = ex56772);


var statearr_56778_57076 = state_56733__$1;
(statearr_56778_57076[(1)] = (34));

(statearr_56778_57076[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (19))){
var inst_56599 = (state_56733[(20)]);
var inst_56621 = (state_56733[(2)]);
var _ = (function (){var statearr_56779 = state_56733;
(statearr_56779[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56779;
})();
var state_56733__$1 = (function (){var statearr_56780 = state_56733;
(statearr_56780[(28)] = inst_56621);

return statearr_56780;
})();
var statearr_56781_57077 = state_56733__$1;
(statearr_56781_57077[(2)] = inst_56599);

(statearr_56781_57077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (11))){
var inst_56539 = (state_56733[(29)]);
var inst_56572 = (state_56733[(2)]);
var _ = (function (){var statearr_56782 = state_56733;
(statearr_56782[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56782;
})();
var state_56733__$1 = (function (){var statearr_56784 = state_56733;
(statearr_56784[(30)] = inst_56572);

return statearr_56784;
})();
var statearr_56786_57079 = state_56733__$1;
(statearr_56786_57079[(2)] = inst_56539);

(statearr_56786_57079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (9))){
var inst_56538 = (state_56733[(31)]);
var inst_56553 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56554 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56555 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56556 = cljs.core.cons(inst_56555,inst_56538);
var inst_56557 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56554,47,inst_56556,"Should not flush before timeout"];
var inst_56558 = cljs.core.PersistentHashMap.fromArrays(inst_56553,inst_56557);
var inst_56559 = cljs.test.report.call(null,inst_56558);
var state_56733__$1 = state_56733;
var statearr_56789_57083 = state_56733__$1;
(statearr_56789_57083[(2)] = inst_56559);

(statearr_56789_57083[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (5))){
var inst_56513 = (state_56733[(9)]);
var inst_56538 = (state_56733[(31)]);
var inst_56539 = (state_56733[(29)]);
var _ = (function (){var statearr_56790 = state_56733;
(statearr_56790[(4)] = cljs.core.cons((8),(state_56733[(4)])));

return statearr_56790;
})();
var inst_56537 = cljs.core.deref(inst_56513);
var inst_56538__$1 = (new cljs.core.List(null,inst_56537,null,(1),null));
var inst_56539__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56538__$1);
var state_56733__$1 = (function (){var statearr_56791 = state_56733;
(statearr_56791[(31)] = inst_56538__$1);

(statearr_56791[(29)] = inst_56539__$1);

return statearr_56791;
})();
if(cljs.core.truth_(inst_56539__$1)){
var statearr_56792_57091 = state_56733__$1;
(statearr_56792_57091[(1)] = (9));

} else {
var statearr_56793_57092 = state_56733__$1;
(statearr_56793_57092[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (14))){
var inst_56511 = (state_56733[(8)]);
var inst_56624 = (state_56733[(2)]);
var state_56733__$1 = (function (){var statearr_56795 = state_56733;
(statearr_56795[(32)] = inst_56624);

return statearr_56795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56733__$1,(20),inst_56511,(3));
} else {
if((state_val_56734 === (26))){
var inst_56635 = (state_56733[(2)]);
var inst_56636 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56637 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56638 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56637,57,inst_56635,"Should not flush 3,4 yet"];
var inst_56639 = cljs.core.PersistentHashMap.fromArrays(inst_56636,inst_56638);
var inst_56640 = cljs.test.report.call(null,inst_56639);
var state_56733__$1 = state_56733;
var statearr_56796_57100 = state_56733__$1;
(statearr_56796_57100[(2)] = inst_56640);

(statearr_56796_57100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (16))){
var _ = (function (){var statearr_56797 = state_56733;
(statearr_56797[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56797;
})();
var state_56733__$1 = state_56733;
var ex56794 = (state_56733__$1[(2)]);
var statearr_56798_57101 = state_56733__$1;
(statearr_56798_57101[(5)] = ex56794);


var statearr_56800_57102 = state_56733__$1;
(statearr_56800_57102[(1)] = (15));

(statearr_56800_57102[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (38))){
var inst_56706 = (state_56733[(17)]);
var inst_56727 = (state_56733[(2)]);
var _ = (function (){var statearr_56803 = state_56733;
(statearr_56803[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56803;
})();
var state_56733__$1 = (function (){var statearr_56808 = state_56733;
(statearr_56808[(33)] = inst_56727);

return statearr_56808;
})();
var statearr_56809_57103 = state_56733__$1;
(statearr_56809_57103[(2)] = inst_56706);

(statearr_56809_57103[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (30))){
var inst_56655 = (state_56733[(12)]);
var inst_56676 = (state_56733[(2)]);
var _ = (function (){var statearr_56810 = state_56733;
(statearr_56810[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56810;
})();
var state_56733__$1 = (function (){var statearr_56812 = state_56733;
(statearr_56812[(34)] = inst_56676);

return statearr_56812;
})();
var statearr_56813_57104 = state_56733__$1;
(statearr_56813_57104[(2)] = inst_56655);

(statearr_56813_57104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (10))){
var inst_56538 = (state_56733[(31)]);
var inst_56561 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56562 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56563 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56564 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56565 = cljs.core.cons(inst_56564,inst_56538);
var inst_56566 = (new cljs.core.List(null,inst_56565,null,(1),null));
var inst_56567 = (new cljs.core.List(null,inst_56563,inst_56566,(2),null));
var inst_56568 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56562,47,inst_56567,"Should not flush before timeout"];
var inst_56569 = cljs.core.PersistentHashMap.fromArrays(inst_56561,inst_56568);
var inst_56570 = cljs.test.report.call(null,inst_56569);
var state_56733__$1 = state_56733;
var statearr_56815_57105 = state_56733__$1;
(statearr_56815_57105[(2)] = inst_56570);

(statearr_56815_57105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (18))){
var inst_56598 = (state_56733[(19)]);
var inst_56610 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56611 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56612 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56613 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56614 = cljs.core.cons(inst_56613,inst_56598);
var inst_56615 = (new cljs.core.List(null,inst_56614,null,(1),null));
var inst_56616 = (new cljs.core.List(null,inst_56612,inst_56615,(2),null));
var inst_56617 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56611,50,inst_56616,"Should flush after timeout"];
var inst_56618 = cljs.core.PersistentHashMap.fromArrays(inst_56610,inst_56617);
var inst_56619 = cljs.test.report.call(null,inst_56618);
var state_56733__$1 = state_56733;
var statearr_56819_57111 = state_56733__$1;
(statearr_56819_57111[(2)] = inst_56619);

(statearr_56819_57111[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (37))){
var inst_56705 = (state_56733[(16)]);
var inst_56716 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56717 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56718 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56719 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56720 = cljs.core.cons(inst_56719,inst_56705);
var inst_56721 = (new cljs.core.List(null,inst_56720,null,(1),null));
var inst_56722 = (new cljs.core.List(null,inst_56718,inst_56721,(2),null));
var inst_56723 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56717,60,inst_56722,"Should flush 3,4 after timeout from first message"];
var inst_56724 = cljs.core.PersistentHashMap.fromArrays(inst_56716,inst_56723);
var inst_56725 = cljs.test.report.call(null,inst_56724);
var state_56733__$1 = state_56733;
var statearr_56824_57114 = state_56733__$1;
(statearr_56824_57114[(2)] = inst_56725);

(statearr_56824_57114[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56734 === (8))){
var _ = (function (){var statearr_56825 = state_56733;
(statearr_56825[(4)] = cljs.core.rest((state_56733[(4)])));

return statearr_56825;
})();
var state_56733__$1 = state_56733;
var ex56816 = (state_56733__$1[(2)]);
var statearr_56826_57115 = state_56733__$1;
(statearr_56826_57115[(5)] = ex56816);


var statearr_56827_57116 = state_56733__$1;
(statearr_56827_57116[(1)] = (7));

(statearr_56827_57116[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0 = (function (){
var statearr_56828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56828[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56828[(1)] = (1));

return statearr_56828;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56733){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56733);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56829){var ex__32294__auto__ = e56829;
var statearr_56830_57117 = state_56733;
(statearr_56830_57117[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56733[(4)]))){
var statearr_56833_57119 = state_56733;
(statearr_56833_57119[(1)] = cljs.core.first((state_56733[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57120 = state_56733;
state_56733 = G__57120;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56733){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56836 = f__32362__auto__();
(statearr_56836[(6)] = c__32361__auto__);

return statearr_56836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56503","meta56503",649561632,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56502");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56502");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56502.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56502 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56502(meta56503){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502(meta56503));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56502(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839 = (function (meta56840){
this.meta56840 = meta56840;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56841,meta56840__$1){
var self__ = this;
var _56841__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839(meta56840__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56841){
var self__ = this;
var _56841__$1 = this;
return self__.meta56840;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56843 = (arguments.length - (1));
switch (G__56843) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.prototype.apply = (function (self__,args56842){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56842)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56919){
var state_val_56920 = (state_56919[(1)]);
if((state_val_56920 === (7))){
var inst_56872 = (state_56919[(2)]);
var inst_56873 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56874 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56875 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56874,78,inst_56872,"Closing input should flush remaining"];
var inst_56876 = cljs.core.PersistentHashMap.fromArrays(inst_56873,inst_56875);
var inst_56877 = cljs.test.report.call(null,inst_56876);
var state_56919__$1 = state_56919;
var statearr_56923_57125 = state_56919__$1;
(statearr_56923_57125[(2)] = inst_56877);

(statearr_56923_57125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56920 === (1))){
var inst_56850 = (state_56919[(7)]);
var inst_56852 = (state_56919[(8)]);
var inst_56850__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56851 = cljs.core.PersistentVector.EMPTY;
var inst_56852__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56851);
var inst_56853 = (function (){var input_ch = inst_56850__$1;
var results = inst_56852__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56854 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56855 = [inst_56850__$1,inst_56853];
var inst_56856 = cljs.core.PersistentHashMap.fromArrays(inst_56854,inst_56855);
var inst_56857 = bb_web_ds_tools.components.async_buffer.create(inst_56856);
var state_56919__$1 = (function (){var statearr_56927 = state_56919;
(statearr_56927[(7)] = inst_56850__$1);

(statearr_56927[(8)] = inst_56852__$1);

(statearr_56927[(9)] = inst_56857);

return statearr_56927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56919__$1,(2),inst_56850__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56920 === (4))){
var inst_56870 = (state_56919[(2)]);
var state_56919__$1 = (function (){var statearr_56929 = state_56919;
(statearr_56929[(10)] = inst_56870);

return statearr_56929;
})();
var statearr_56930_57127 = state_56919__$1;
(statearr_56930_57127[(2)] = null);

(statearr_56930_57127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56920 === (6))){
var inst_56916 = (state_56919[(2)]);
var inst_56917 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56919__$1 = (function (){var statearr_56931 = state_56919;
(statearr_56931[(11)] = inst_56916);

return statearr_56931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56919__$1,inst_56917);
} else {
if((state_val_56920 === (3))){
var inst_56850 = (state_56919[(7)]);
var inst_56866 = (state_56919[(2)]);
var inst_56867 = cljs.core.async.close_BANG_(inst_56850);
var inst_56868 = cljs.core.async.timeout((20));
var state_56919__$1 = (function (){var statearr_56933 = state_56919;
(statearr_56933[(12)] = inst_56866);

(statearr_56933[(13)] = inst_56867);

return statearr_56933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56919__$1,(4),inst_56868);
} else {
if((state_val_56920 === (2))){
var inst_56850 = (state_56919[(7)]);
var inst_56864 = (state_56919[(2)]);
var state_56919__$1 = (function (){var statearr_56937 = state_56919;
(statearr_56937[(14)] = inst_56864);

return statearr_56937;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56919__$1,(3),inst_56850,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56920 === (11))){
var inst_56892 = (state_56919[(15)]);
var inst_56913 = (state_56919[(2)]);
var _ = (function (){var statearr_56938 = state_56919;
(statearr_56938[(4)] = cljs.core.rest((state_56919[(4)])));

return statearr_56938;
})();
var state_56919__$1 = (function (){var statearr_56939 = state_56919;
(statearr_56939[(16)] = inst_56913);

return statearr_56939;
})();
var statearr_56940_57129 = state_56919__$1;
(statearr_56940_57129[(2)] = inst_56892);

(statearr_56940_57129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56920 === (9))){
var inst_56891 = (state_56919[(17)]);
var inst_56894 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56895 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56896 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56897 = cljs.core.cons(inst_56896,inst_56891);
var inst_56898 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56895,78,inst_56897,"Closing input should flush remaining"];
var inst_56899 = cljs.core.PersistentHashMap.fromArrays(inst_56894,inst_56898);
var inst_56900 = cljs.test.report.call(null,inst_56899);
var state_56919__$1 = state_56919;
var statearr_56941_57130 = state_56919__$1;
(statearr_56941_57130[(2)] = inst_56900);

(statearr_56941_57130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56920 === (5))){
var inst_56852 = (state_56919[(8)]);
var inst_56891 = (state_56919[(17)]);
var inst_56892 = (state_56919[(15)]);
var _ = (function (){var statearr_56943 = state_56919;
(statearr_56943[(4)] = cljs.core.cons((8),(state_56919[(4)])));

return statearr_56943;
})();
var inst_56883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56885 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56886 = (new cljs.core.PersistentVector(null,2,(5),inst_56884,inst_56885,null));
var inst_56887 = [inst_56886];
var inst_56888 = (new cljs.core.PersistentVector(null,1,(5),inst_56883,inst_56887,null));
var inst_56889 = cljs.core.deref(inst_56852);
var inst_56890 = (new cljs.core.List(null,inst_56889,null,(1),null));
var inst_56891__$1 = (new cljs.core.List(null,inst_56888,inst_56890,(2),null));
var inst_56892__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56891__$1);
var state_56919__$1 = (function (){var statearr_56945 = state_56919;
(statearr_56945[(17)] = inst_56891__$1);

(statearr_56945[(15)] = inst_56892__$1);

return statearr_56945;
})();
if(cljs.core.truth_(inst_56892__$1)){
var statearr_56946_57134 = state_56919__$1;
(statearr_56946_57134[(1)] = (9));

} else {
var statearr_56948_57135 = state_56919__$1;
(statearr_56948_57135[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56920 === (10))){
var inst_56891 = (state_56919[(17)]);
var inst_56902 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56903 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56904 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56905 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56906 = cljs.core.cons(inst_56905,inst_56891);
var inst_56907 = (new cljs.core.List(null,inst_56906,null,(1),null));
var inst_56908 = (new cljs.core.List(null,inst_56904,inst_56907,(2),null));
var inst_56909 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56903,78,inst_56908,"Closing input should flush remaining"];
var inst_56910 = cljs.core.PersistentHashMap.fromArrays(inst_56902,inst_56909);
var inst_56911 = cljs.test.report.call(null,inst_56910);
var state_56919__$1 = state_56919;
var statearr_56952_57136 = state_56919__$1;
(statearr_56952_57136[(2)] = inst_56911);

(statearr_56952_57136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56920 === (8))){
var _ = (function (){var statearr_56953 = state_56919;
(statearr_56953[(4)] = cljs.core.rest((state_56919[(4)])));

return statearr_56953;
})();
var state_56919__$1 = state_56919;
var ex56942 = (state_56919__$1[(2)]);
var statearr_56954_57139 = state_56919__$1;
(statearr_56954_57139[(5)] = ex56942);


var statearr_56955_57140 = state_56919__$1;
(statearr_56955_57140[(1)] = (7));

(statearr_56955_57140[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0 = (function (){
var statearr_56957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56957[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56957[(1)] = (1));

return statearr_56957;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56919){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56919);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56958){var ex__32294__auto__ = e56958;
var statearr_56959_57141 = state_56919;
(statearr_56959_57141[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56919[(4)]))){
var statearr_56960_57142 = state_56919;
(statearr_56960_57142[(1)] = cljs.core.first((state_56919[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57143 = state_56919;
state_56919 = G__57143;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56919){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56962 = f__32362__auto__();
(statearr_56962[(6)] = c__32361__auto__);

return statearr_56962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56840","meta56840",-1939230607,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56839");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56839");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56839.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56839 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56839(meta56840){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839(meta56840));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56839(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
