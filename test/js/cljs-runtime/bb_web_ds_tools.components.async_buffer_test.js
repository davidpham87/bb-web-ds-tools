goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263 = (function (meta56264){
this.meta56264 = meta56264;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56265,meta56264__$1){
var self__ = this;
var _56265__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263(meta56264__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56265){
var self__ = this;
var _56265__$1 = this;
return self__.meta56264;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56271 = (arguments.length - (1));
switch (G__56271) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.prototype.apply = (function (self__,args56266){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56266)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56445){
var state_val_56446 = (state_56445[(1)]);
if((state_val_56446 === (7))){
var inst_56294 = (state_56445[(2)]);
var inst_56295 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56296 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56297 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56296,19,inst_56294,"Buffer should not flush automatically without timer"];
var inst_56298 = cljs.core.PersistentHashMap.fromArrays(inst_56295,inst_56297);
var inst_56299 = cljs.test.report.call(null,inst_56298);
var state_56445__$1 = state_56445;
var statearr_56448_57105 = state_56445__$1;
(statearr_56448_57105[(2)] = inst_56299);

(statearr_56448_57105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (20))){
var inst_56280 = (state_56445[(7)]);
var inst_56385 = (state_56445[(2)]);
var inst_56386 = (inst_56280.cljs$core$IFn$_invoke$arity$0 ? inst_56280.cljs$core$IFn$_invoke$arity$0() : inst_56280.call(null));
var inst_56387 = cljs.core.async.timeout((20));
var state_56445__$1 = (function (){var statearr_56451 = state_56445;
(statearr_56451[(8)] = inst_56385);

(statearr_56451[(9)] = inst_56386);

return statearr_56451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56445__$1,(21),inst_56387);
} else {
if((state_val_56446 === (27))){
var inst_56417 = (state_56445[(10)]);
var inst_56428 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56429 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56430 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56431 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56432 = cljs.core.cons(inst_56431,inst_56417);
var inst_56433 = (new cljs.core.List(null,inst_56432,null,(1),null));
var inst_56434 = (new cljs.core.List(null,inst_56430,inst_56433,(2),null));
var inst_56435 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56429,29,inst_56434,"Subsequent flush should work"];
var inst_56436 = cljs.core.PersistentHashMap.fromArrays(inst_56428,inst_56435);
var inst_56437 = cljs.test.report.call(null,inst_56436);
var state_56445__$1 = state_56445;
var statearr_56453_57108 = state_56445__$1;
(statearr_56453_57108[(2)] = inst_56437);

(statearr_56453_57108[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (1))){
var inst_56272 = (state_56445[(11)]);
var inst_56274 = (state_56445[(12)]);
var inst_56272__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56273 = cljs.core.PersistentVector.EMPTY;
var inst_56274__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56273);
var inst_56275 = (function (){var input_ch = inst_56272__$1;
var results = inst_56274__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56277 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56278 = [inst_56272__$1,inst_56275];
var inst_56279 = cljs.core.PersistentHashMap.fromArrays(inst_56277,inst_56278);
var inst_56280 = bb_web_ds_tools.components.async_buffer.create(inst_56279);
var state_56445__$1 = (function (){var statearr_56454 = state_56445;
(statearr_56454[(11)] = inst_56272__$1);

(statearr_56454[(12)] = inst_56274__$1);

(statearr_56454[(7)] = inst_56280);

return statearr_56454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56445__$1,(2),inst_56272__$1,(1));
} else {
if((state_val_56446 === (24))){
var inst_56390 = (state_56445[(2)]);
var inst_56391 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56392 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56393 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56392,29,inst_56390,"Subsequent flush should work"];
var inst_56394 = cljs.core.PersistentHashMap.fromArrays(inst_56391,inst_56393);
var inst_56395 = cljs.test.report.call(null,inst_56394);
var state_56445__$1 = state_56445;
var statearr_56455_57109 = state_56445__$1;
(statearr_56455_57109[(2)] = inst_56395);

(statearr_56455_57109[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (4))){
var inst_56287 = (state_56445[(2)]);
var state_56445__$1 = (function (){var statearr_56456 = state_56445;
(statearr_56456[(13)] = inst_56287);

return statearr_56456;
})();
var statearr_56457_57111 = state_56445__$1;
(statearr_56457_57111[(2)] = null);

(statearr_56457_57111[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (15))){
var inst_56337 = (state_56445[(2)]);
var inst_56338 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56339 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56340 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56339,24,inst_56337,"Manual flush should flush all items"];
var inst_56341 = cljs.core.PersistentHashMap.fromArrays(inst_56338,inst_56340);
var inst_56342 = cljs.test.report.call(null,inst_56341);
var state_56445__$1 = state_56445;
var statearr_56458_57112 = state_56445__$1;
(statearr_56458_57112[(2)] = inst_56342);

(statearr_56458_57112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (21))){
var inst_56389 = (state_56445[(2)]);
var state_56445__$1 = (function (){var statearr_56459 = state_56445;
(statearr_56459[(14)] = inst_56389);

return statearr_56459;
})();
var statearr_56460_57113 = state_56445__$1;
(statearr_56460_57113[(2)] = null);

(statearr_56460_57113[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (13))){
var inst_56274 = (state_56445[(12)]);
var inst_56357 = (state_56445[(15)]);
var inst_56358 = (state_56445[(16)]);
var _ = (function (){var statearr_56461 = state_56445;
(statearr_56461[(4)] = cljs.core.cons((16),(state_56445[(4)])));

return statearr_56461;
})();
var inst_56349 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56350 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56351 = [(1),(2)];
var inst_56352 = (new cljs.core.PersistentVector(null,2,(5),inst_56350,inst_56351,null));
var inst_56353 = [inst_56352];
var inst_56354 = (new cljs.core.PersistentVector(null,1,(5),inst_56349,inst_56353,null));
var inst_56355 = cljs.core.deref(inst_56274);
var inst_56356 = (new cljs.core.List(null,inst_56355,null,(1),null));
var inst_56357__$1 = (new cljs.core.List(null,inst_56354,inst_56356,(2),null));
var inst_56358__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56357__$1);
var state_56445__$1 = (function (){var statearr_56462 = state_56445;
(statearr_56462[(15)] = inst_56357__$1);

(statearr_56462[(16)] = inst_56358__$1);

return statearr_56462;
})();
if(cljs.core.truth_(inst_56358__$1)){
var statearr_56463_57114 = state_56445__$1;
(statearr_56463_57114[(1)] = (17));

} else {
var statearr_56464_57115 = state_56445__$1;
(statearr_56464_57115[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (22))){
var inst_56274 = (state_56445[(12)]);
var inst_56417 = (state_56445[(10)]);
var inst_56418 = (state_56445[(17)]);
var _ = (function (){var statearr_56465 = state_56445;
(statearr_56465[(4)] = cljs.core.cons((25),(state_56445[(4)])));

return statearr_56465;
})();
var inst_56401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56402 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56403 = [(1),(2)];
var inst_56404 = (new cljs.core.PersistentVector(null,2,(5),inst_56402,inst_56403,null));
var inst_56405 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56406 = [(3)];
var inst_56410 = (new cljs.core.PersistentVector(null,1,(5),inst_56405,inst_56406,null));
var inst_56411 = [inst_56404,inst_56410];
var inst_56412 = (new cljs.core.PersistentVector(null,2,(5),inst_56401,inst_56411,null));
var inst_56415 = cljs.core.deref(inst_56274);
var inst_56416 = (new cljs.core.List(null,inst_56415,null,(1),null));
var inst_56417__$1 = (new cljs.core.List(null,inst_56412,inst_56416,(2),null));
var inst_56418__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56417__$1);
var state_56445__$1 = (function (){var statearr_56466 = state_56445;
(statearr_56466[(10)] = inst_56417__$1);

(statearr_56466[(17)] = inst_56418__$1);

return statearr_56466;
})();
if(cljs.core.truth_(inst_56418__$1)){
var statearr_56467_57118 = state_56445__$1;
(statearr_56467_57118[(1)] = (26));

} else {
var statearr_56468_57120 = state_56445__$1;
(statearr_56468_57120[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (6))){
var inst_56280 = (state_56445[(7)]);
var inst_56332 = (state_56445[(2)]);
var inst_56333 = (inst_56280.cljs$core$IFn$_invoke$arity$0 ? inst_56280.cljs$core$IFn$_invoke$arity$0() : inst_56280.call(null));
var inst_56334 = cljs.core.async.timeout((20));
var state_56445__$1 = (function (){var statearr_56470 = state_56445;
(statearr_56470[(18)] = inst_56332);

(statearr_56470[(19)] = inst_56333);

return statearr_56470;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56445__$1,(12),inst_56334);
} else {
if((state_val_56446 === (28))){
var inst_56418 = (state_56445[(17)]);
var inst_56439 = (state_56445[(2)]);
var _ = (function (){var statearr_56471 = state_56445;
(statearr_56471[(4)] = cljs.core.rest((state_56445[(4)])));

return statearr_56471;
})();
var state_56445__$1 = (function (){var statearr_56472 = state_56445;
(statearr_56472[(20)] = inst_56439);

return statearr_56472;
})();
var statearr_56473_57121 = state_56445__$1;
(statearr_56473_57121[(2)] = inst_56418);

(statearr_56473_57121[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (25))){
var _ = (function (){var statearr_56474 = state_56445;
(statearr_56474[(4)] = cljs.core.rest((state_56445[(4)])));

return statearr_56474;
})();
var state_56445__$1 = state_56445;
var ex56469 = (state_56445__$1[(2)]);
var statearr_56475_57122 = state_56445__$1;
(statearr_56475_57122[(5)] = ex56469);


var statearr_56476_57123 = state_56445__$1;
(statearr_56476_57123[(1)] = (24));

(statearr_56476_57123[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (17))){
var inst_56357 = (state_56445[(15)]);
var inst_56360 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56361 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56362 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56363 = cljs.core.cons(inst_56362,inst_56357);
var inst_56364 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56361,24,inst_56363,"Manual flush should flush all items"];
var inst_56365 = cljs.core.PersistentHashMap.fromArrays(inst_56360,inst_56364);
var inst_56366 = cljs.test.report.call(null,inst_56365);
var state_56445__$1 = state_56445;
var statearr_56477_57124 = state_56445__$1;
(statearr_56477_57124[(2)] = inst_56366);

(statearr_56477_57124[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (3))){
var inst_56284 = (state_56445[(2)]);
var inst_56285 = cljs.core.async.timeout((20));
var state_56445__$1 = (function (){var statearr_56478 = state_56445;
(statearr_56478[(21)] = inst_56284);

return statearr_56478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56445__$1,(4),inst_56285);
} else {
if((state_val_56446 === (12))){
var inst_56336 = (state_56445[(2)]);
var state_56445__$1 = (function (){var statearr_56479 = state_56445;
(statearr_56479[(22)] = inst_56336);

return statearr_56479;
})();
var statearr_56480_57130 = state_56445__$1;
(statearr_56480_57130[(2)] = null);

(statearr_56480_57130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (2))){
var inst_56272 = (state_56445[(11)]);
var inst_56282 = (state_56445[(2)]);
var state_56445__$1 = (function (){var statearr_56481 = state_56445;
(statearr_56481[(23)] = inst_56282);

return statearr_56481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56445__$1,(3),inst_56272,(2));
} else {
if((state_val_56446 === (23))){
var inst_56442 = (state_56445[(2)]);
var inst_56443 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56445__$1 = (function (){var statearr_56482 = state_56445;
(statearr_56482[(24)] = inst_56442);

return statearr_56482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56445__$1,inst_56443);
} else {
if((state_val_56446 === (19))){
var inst_56358 = (state_56445[(16)]);
var inst_56380 = (state_56445[(2)]);
var _ = (function (){var statearr_56483 = state_56445;
(statearr_56483[(4)] = cljs.core.rest((state_56445[(4)])));

return statearr_56483;
})();
var state_56445__$1 = (function (){var statearr_56484 = state_56445;
(statearr_56484[(25)] = inst_56380);

return statearr_56484;
})();
var statearr_56485_57131 = state_56445__$1;
(statearr_56485_57131[(2)] = inst_56358);

(statearr_56485_57131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (11))){
var inst_56307 = (state_56445[(26)]);
var inst_56329 = (state_56445[(2)]);
var _ = (function (){var statearr_56486 = state_56445;
(statearr_56486[(4)] = cljs.core.rest((state_56445[(4)])));

return statearr_56486;
})();
var state_56445__$1 = (function (){var statearr_56487 = state_56445;
(statearr_56487[(27)] = inst_56329);

return statearr_56487;
})();
var statearr_56488_57133 = state_56445__$1;
(statearr_56488_57133[(2)] = inst_56307);

(statearr_56488_57133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (9))){
var inst_56306 = (state_56445[(28)]);
var inst_56309 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56310 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56311 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56312 = cljs.core.cons(inst_56311,inst_56306);
var inst_56313 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56310,19,inst_56312,"Buffer should not flush automatically without timer"];
var inst_56314 = cljs.core.PersistentHashMap.fromArrays(inst_56309,inst_56313);
var inst_56315 = cljs.test.report.call(null,inst_56314);
var state_56445__$1 = state_56445;
var statearr_56489_57134 = state_56445__$1;
(statearr_56489_57134[(2)] = inst_56315);

(statearr_56489_57134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (5))){
var inst_56274 = (state_56445[(12)]);
var inst_56306 = (state_56445[(28)]);
var inst_56307 = (state_56445[(26)]);
var _ = (function (){var statearr_56490 = state_56445;
(statearr_56490[(4)] = cljs.core.cons((8),(state_56445[(4)])));

return statearr_56490;
})();
var inst_56305 = cljs.core.deref(inst_56274);
var inst_56306__$1 = (new cljs.core.List(null,inst_56305,null,(1),null));
var inst_56307__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56306__$1);
var state_56445__$1 = (function (){var statearr_56491 = state_56445;
(statearr_56491[(28)] = inst_56306__$1);

(statearr_56491[(26)] = inst_56307__$1);

return statearr_56491;
})();
if(cljs.core.truth_(inst_56307__$1)){
var statearr_56492_57135 = state_56445__$1;
(statearr_56492_57135[(1)] = (9));

} else {
var statearr_56493_57136 = state_56445__$1;
(statearr_56493_57136[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (14))){
var inst_56272 = (state_56445[(11)]);
var inst_56383 = (state_56445[(2)]);
var state_56445__$1 = (function (){var statearr_56495 = state_56445;
(statearr_56495[(29)] = inst_56383);

return statearr_56495;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56445__$1,(20),inst_56272,(3));
} else {
if((state_val_56446 === (26))){
var inst_56417 = (state_56445[(10)]);
var inst_56420 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56421 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56422 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56423 = cljs.core.cons(inst_56422,inst_56417);
var inst_56424 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56421,29,inst_56423,"Subsequent flush should work"];
var inst_56425 = cljs.core.PersistentHashMap.fromArrays(inst_56420,inst_56424);
var inst_56426 = cljs.test.report.call(null,inst_56425);
var state_56445__$1 = state_56445;
var statearr_56496_57138 = state_56445__$1;
(statearr_56496_57138[(2)] = inst_56426);

(statearr_56496_57138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (16))){
var _ = (function (){var statearr_56497 = state_56445;
(statearr_56497[(4)] = cljs.core.rest((state_56445[(4)])));

return statearr_56497;
})();
var state_56445__$1 = state_56445;
var ex56494 = (state_56445__$1[(2)]);
var statearr_56498_57139 = state_56445__$1;
(statearr_56498_57139[(5)] = ex56494);


var statearr_56499_57140 = state_56445__$1;
(statearr_56499_57140[(1)] = (15));

(statearr_56499_57140[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (10))){
var inst_56306 = (state_56445[(28)]);
var inst_56317 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56318 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56320 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56321 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56322 = cljs.core.cons(inst_56321,inst_56306);
var inst_56323 = (new cljs.core.List(null,inst_56322,null,(1),null));
var inst_56324 = (new cljs.core.List(null,inst_56320,inst_56323,(2),null));
var inst_56325 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56318,19,inst_56324,"Buffer should not flush automatically without timer"];
var inst_56326 = cljs.core.PersistentHashMap.fromArrays(inst_56317,inst_56325);
var inst_56327 = cljs.test.report.call(null,inst_56326);
var state_56445__$1 = state_56445;
var statearr_56501_57143 = state_56445__$1;
(statearr_56501_57143[(2)] = inst_56327);

(statearr_56501_57143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (18))){
var inst_56357 = (state_56445[(15)]);
var inst_56368 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56369 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56370 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56372 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56373 = cljs.core.cons(inst_56372,inst_56357);
var inst_56374 = (new cljs.core.List(null,inst_56373,null,(1),null));
var inst_56375 = (new cljs.core.List(null,inst_56370,inst_56374,(2),null));
var inst_56376 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56369,24,inst_56375,"Manual flush should flush all items"];
var inst_56377 = cljs.core.PersistentHashMap.fromArrays(inst_56368,inst_56376);
var inst_56378 = cljs.test.report.call(null,inst_56377);
var state_56445__$1 = state_56445;
var statearr_56502_57145 = state_56445__$1;
(statearr_56502_57145[(2)] = inst_56378);

(statearr_56502_57145[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56446 === (8))){
var _ = (function (){var statearr_56503 = state_56445;
(statearr_56503[(4)] = cljs.core.rest((state_56445[(4)])));

return statearr_56503;
})();
var state_56445__$1 = state_56445;
var ex56500 = (state_56445__$1[(2)]);
var statearr_56504_57149 = state_56445__$1;
(statearr_56504_57149[(5)] = ex56500);


var statearr_56505_57150 = state_56445__$1;
(statearr_56505_57150[(1)] = (7));

(statearr_56505_57150[(5)] = null);



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
var statearr_56506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56506[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56506[(1)] = (1));

return statearr_56506;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56445){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56445);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56507){var ex__32294__auto__ = e56507;
var statearr_56508_57154 = state_56445;
(statearr_56508_57154[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56445[(4)]))){
var statearr_56509_57155 = state_56445;
(statearr_56509_57155[(1)] = cljs.core.first((state_56445[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57156 = state_56445;
state_56445 = G__57156;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56445){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56510 = f__32362__auto__();
(statearr_56510[(6)] = c__32361__auto__);

return statearr_56510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56264","meta56264",-1821254369,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56263");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56263");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56263.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56263 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56263(meta56264){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263(meta56264));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56263(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511 = (function (meta56512){
this.meta56512 = meta56512;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56513,meta56512__$1){
var self__ = this;
var _56513__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511(meta56512__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56513){
var self__ = this;
var _56513__$1 = this;
return self__.meta56512;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56520 = (arguments.length - (1));
switch (G__56520) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.prototype.apply = (function (self__,args56514){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56514)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56780){
var state_val_56781 = (state_56780[(1)]);
if((state_val_56781 === (7))){
var inst_56537 = (state_56780[(2)]);
var inst_56548 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56549 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56550 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56549,47,inst_56537,"Should not flush before timeout"];
var inst_56551 = cljs.core.PersistentHashMap.fromArrays(inst_56548,inst_56550);
var inst_56552 = cljs.test.report.call(null,inst_56551);
var state_56780__$1 = state_56780;
var statearr_56783_57166 = state_56780__$1;
(statearr_56783_57166[(2)] = inst_56552);

(statearr_56783_57166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (20))){
var inst_56650 = (state_56780[(2)]);
var inst_56651 = cljs.core.async.timeout((50));
var state_56780__$1 = (function (){var statearr_56784 = state_56780;
(statearr_56784[(7)] = inst_56650);

return statearr_56784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(21),inst_56651);
} else {
if((state_val_56781 === (27))){
var _ = (function (){var statearr_56786 = state_56780;
(statearr_56786[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56786;
})();
var state_56780__$1 = state_56780;
var ex56782 = (state_56780__$1[(2)]);
var statearr_56787_57167 = state_56780__$1;
(statearr_56787_57167[(5)] = ex56782);


var statearr_56788_57168 = state_56780__$1;
(statearr_56788_57168[(1)] = (26));

(statearr_56788_57168[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (1))){
var inst_56521 = (state_56780[(8)]);
var inst_56523 = (state_56780[(9)]);
var inst_56521__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56522 = cljs.core.PersistentVector.EMPTY;
var inst_56523__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56522);
var inst_56524 = (function (){var input_ch = inst_56521__$1;
var results = inst_56523__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56525 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56526 = [inst_56521__$1,(100),inst_56524];
var inst_56527 = cljs.core.PersistentHashMap.fromArrays(inst_56525,inst_56526);
var inst_56528 = bb_web_ds_tools.components.async_buffer.create(inst_56527);
var state_56780__$1 = (function (){var statearr_56789 = state_56780;
(statearr_56789[(8)] = inst_56521__$1);

(statearr_56789[(9)] = inst_56523__$1);

(statearr_56789[(10)] = inst_56528);

return statearr_56789;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(2),inst_56521__$1,(1));
} else {
if((state_val_56781 === (24))){
var inst_56523 = (state_56780[(9)]);
var inst_56678 = (state_56780[(11)]);
var inst_56679 = (state_56780[(12)]);
var _ = (function (){var statearr_56790 = state_56780;
(statearr_56790[(4)] = cljs.core.cons((27),(state_56780[(4)])));

return statearr_56790;
})();
var inst_56670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56671 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56672 = [(1),(2)];
var inst_56673 = (new cljs.core.PersistentVector(null,2,(5),inst_56671,inst_56672,null));
var inst_56674 = [inst_56673];
var inst_56675 = (new cljs.core.PersistentVector(null,1,(5),inst_56670,inst_56674,null));
var inst_56676 = cljs.core.deref(inst_56523);
var inst_56677 = (new cljs.core.List(null,inst_56676,null,(1),null));
var inst_56678__$1 = (new cljs.core.List(null,inst_56675,inst_56677,(2),null));
var inst_56679__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56678__$1);
var state_56780__$1 = (function (){var statearr_56793 = state_56780;
(statearr_56793[(11)] = inst_56678__$1);

(statearr_56793[(12)] = inst_56679__$1);

return statearr_56793;
})();
if(cljs.core.truth_(inst_56679__$1)){
var statearr_56794_57169 = state_56780__$1;
(statearr_56794_57169[(1)] = (28));

} else {
var statearr_56795_57170 = state_56780__$1;
(statearr_56795_57170[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (4))){
var inst_56536 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56797 = state_56780;
(statearr_56797[(13)] = inst_56536);

return statearr_56797;
})();
var statearr_56800_57171 = state_56780__$1;
(statearr_56800_57171[(2)] = null);

(statearr_56800_57171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (15))){
var inst_56590 = (state_56780[(2)]);
var inst_56591 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56592 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56593 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56592,50,inst_56590,"Should flush after timeout"];
var inst_56594 = cljs.core.PersistentHashMap.fromArrays(inst_56591,inst_56593);
var inst_56595 = cljs.test.report.call(null,inst_56594);
var state_56780__$1 = state_56780;
var statearr_56802_57172 = state_56780__$1;
(statearr_56802_57172[(2)] = inst_56595);

(statearr_56802_57172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (21))){
var inst_56521 = (state_56780[(8)]);
var inst_56653 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56805 = state_56780;
(statearr_56805[(14)] = inst_56653);

return statearr_56805;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(22),inst_56521,(4));
} else {
if((state_val_56781 === (31))){
var inst_56706 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56810 = state_56780;
(statearr_56810[(15)] = inst_56706);

return statearr_56810;
})();
var statearr_56812_57174 = state_56780__$1;
(statearr_56812_57174[(2)] = null);

(statearr_56812_57174[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (32))){
var inst_56523 = (state_56780[(9)]);
var inst_56729 = (state_56780[(16)]);
var inst_56730 = (state_56780[(17)]);
var _ = (function (){var statearr_56813 = state_56780;
(statearr_56813[(4)] = cljs.core.cons((35),(state_56780[(4)])));

return statearr_56813;
})();
var inst_56718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56719 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56720 = [(1),(2)];
var inst_56721 = (new cljs.core.PersistentVector(null,2,(5),inst_56719,inst_56720,null));
var inst_56722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56723 = [(3),(4)];
var inst_56724 = (new cljs.core.PersistentVector(null,2,(5),inst_56722,inst_56723,null));
var inst_56725 = [inst_56721,inst_56724];
var inst_56726 = (new cljs.core.PersistentVector(null,2,(5),inst_56718,inst_56725,null));
var inst_56727 = cljs.core.deref(inst_56523);
var inst_56728 = (new cljs.core.List(null,inst_56727,null,(1),null));
var inst_56729__$1 = (new cljs.core.List(null,inst_56726,inst_56728,(2),null));
var inst_56730__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56729__$1);
var state_56780__$1 = (function (){var statearr_56828 = state_56780;
(statearr_56828[(16)] = inst_56729__$1);

(statearr_56828[(17)] = inst_56730__$1);

return statearr_56828;
})();
if(cljs.core.truth_(inst_56730__$1)){
var statearr_56829_57176 = state_56780__$1;
(statearr_56829_57176[(1)] = (36));

} else {
var statearr_56831_57177 = state_56780__$1;
(statearr_56831_57177[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (33))){
var inst_56777 = (state_56780[(2)]);
var inst_56778 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56780__$1 = (function (){var statearr_56834 = state_56780;
(statearr_56834[(18)] = inst_56777);

return statearr_56834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56780__$1,inst_56778);
} else {
if((state_val_56781 === (13))){
var inst_56523 = (state_56780[(9)]);
var inst_56609 = (state_56780[(19)]);
var inst_56610 = (state_56780[(20)]);
var _ = (function (){var statearr_56836 = state_56780;
(statearr_56836[(4)] = cljs.core.cons((16),(state_56780[(4)])));

return statearr_56836;
})();
var inst_56601 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56603 = [(1),(2)];
var inst_56604 = (new cljs.core.PersistentVector(null,2,(5),inst_56602,inst_56603,null));
var inst_56605 = [inst_56604];
var inst_56606 = (new cljs.core.PersistentVector(null,1,(5),inst_56601,inst_56605,null));
var inst_56607 = cljs.core.deref(inst_56523);
var inst_56608 = (new cljs.core.List(null,inst_56607,null,(1),null));
var inst_56609__$1 = (new cljs.core.List(null,inst_56606,inst_56608,(2),null));
var inst_56610__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56609__$1);
var state_56780__$1 = (function (){var statearr_56845 = state_56780;
(statearr_56845[(19)] = inst_56609__$1);

(statearr_56845[(20)] = inst_56610__$1);

return statearr_56845;
})();
if(cljs.core.truth_(inst_56610__$1)){
var statearr_56848_57179 = state_56780__$1;
(statearr_56848_57179[(1)] = (17));

} else {
var statearr_56849_57180 = state_56780__$1;
(statearr_56849_57180[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (22))){
var inst_56655 = (state_56780[(2)]);
var inst_56656 = cljs.core.async.timeout((20));
var state_56780__$1 = (function (){var statearr_56862 = state_56780;
(statearr_56862[(21)] = inst_56655);

return statearr_56862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(23),inst_56656);
} else {
if((state_val_56781 === (36))){
var inst_56729 = (state_56780[(16)]);
var inst_56748 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56749 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56750 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56751 = cljs.core.cons(inst_56750,inst_56729);
var inst_56752 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56749,60,inst_56751,"Should flush 3,4 after timeout from first message"];
var inst_56753 = cljs.core.PersistentHashMap.fromArrays(inst_56748,inst_56752);
var inst_56754 = cljs.test.report.call(null,inst_56753);
var state_56780__$1 = state_56780;
var statearr_56864_57181 = state_56780__$1;
(statearr_56864_57181[(2)] = inst_56754);

(statearr_56864_57181[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (29))){
var inst_56678 = (state_56780[(11)]);
var inst_56689 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56690 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56691 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56692 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56693 = cljs.core.cons(inst_56692,inst_56678);
var inst_56694 = (new cljs.core.List(null,inst_56693,null,(1),null));
var inst_56695 = (new cljs.core.List(null,inst_56691,inst_56694,(2),null));
var inst_56696 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56690,57,inst_56695,"Should not flush 3,4 yet"];
var inst_56697 = cljs.core.PersistentHashMap.fromArrays(inst_56689,inst_56696);
var inst_56698 = cljs.test.report.call(null,inst_56697);
var state_56780__$1 = state_56780;
var statearr_56875_57184 = state_56780__$1;
(statearr_56875_57184[(2)] = inst_56698);

(statearr_56875_57184[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (6))){
var inst_56586 = (state_56780[(2)]);
var inst_56587 = cljs.core.async.timeout((100));
var state_56780__$1 = (function (){var statearr_56877 = state_56780;
(statearr_56877[(22)] = inst_56586);

return statearr_56877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(12),inst_56587);
} else {
if((state_val_56781 === (28))){
var inst_56678 = (state_56780[(11)]);
var inst_56681 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56682 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56683 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56684 = cljs.core.cons(inst_56683,inst_56678);
var inst_56685 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56682,57,inst_56684,"Should not flush 3,4 yet"];
var inst_56686 = cljs.core.PersistentHashMap.fromArrays(inst_56681,inst_56685);
var inst_56687 = cljs.test.report.call(null,inst_56686);
var state_56780__$1 = state_56780;
var statearr_56882_57186 = state_56780__$1;
(statearr_56882_57186[(2)] = inst_56687);

(statearr_56882_57186[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (25))){
var inst_56703 = (state_56780[(2)]);
var inst_56704 = cljs.core.async.timeout((80));
var state_56780__$1 = (function (){var statearr_56883 = state_56780;
(statearr_56883[(23)] = inst_56703);

return statearr_56883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(31),inst_56704);
} else {
if((state_val_56781 === (34))){
var inst_56707 = (state_56780[(2)]);
var inst_56708 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56709 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56710 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56709,60,inst_56707,"Should flush 3,4 after timeout from first message"];
var inst_56711 = cljs.core.PersistentHashMap.fromArrays(inst_56708,inst_56710);
var inst_56712 = cljs.test.report.call(null,inst_56711);
var state_56780__$1 = state_56780;
var statearr_56884_57187 = state_56780__$1;
(statearr_56884_57187[(2)] = inst_56712);

(statearr_56884_57187[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (17))){
var inst_56609 = (state_56780[(19)]);
var inst_56613 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56614 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56615 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56616 = cljs.core.cons(inst_56615,inst_56609);
var inst_56617 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56614,50,inst_56616,"Should flush after timeout"];
var inst_56618 = cljs.core.PersistentHashMap.fromArrays(inst_56613,inst_56617);
var inst_56619 = cljs.test.report.call(null,inst_56618);
var state_56780__$1 = state_56780;
var statearr_56885_57196 = state_56780__$1;
(statearr_56885_57196[(2)] = inst_56619);

(statearr_56885_57196[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (3))){
var inst_56533 = (state_56780[(2)]);
var inst_56534 = cljs.core.async.timeout((50));
var state_56780__$1 = (function (){var statearr_56886 = state_56780;
(statearr_56886[(24)] = inst_56533);

return statearr_56886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56780__$1,(4),inst_56534);
} else {
if((state_val_56781 === (12))){
var inst_56589 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56887 = state_56780;
(statearr_56887[(25)] = inst_56589);

return statearr_56887;
})();
var statearr_56888_57198 = state_56780__$1;
(statearr_56888_57198[(2)] = null);

(statearr_56888_57198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (2))){
var inst_56521 = (state_56780[(8)]);
var inst_56531 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56890 = state_56780;
(statearr_56890[(26)] = inst_56531);

return statearr_56890;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(3),inst_56521,(2));
} else {
if((state_val_56781 === (23))){
var inst_56658 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56891 = state_56780;
(statearr_56891[(27)] = inst_56658);

return statearr_56891;
})();
var statearr_56892_57199 = state_56780__$1;
(statearr_56892_57199[(2)] = null);

(statearr_56892_57199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (35))){
var _ = (function (){var statearr_56893 = state_56780;
(statearr_56893[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56893;
})();
var state_56780__$1 = state_56780;
var ex56889 = (state_56780__$1[(2)]);
var statearr_56894_57200 = state_56780__$1;
(statearr_56894_57200[(5)] = ex56889);


var statearr_56895_57201 = state_56780__$1;
(statearr_56895_57201[(1)] = (34));

(statearr_56895_57201[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (19))){
var inst_56610 = (state_56780[(20)]);
var inst_56645 = (state_56780[(2)]);
var _ = (function (){var statearr_56896 = state_56780;
(statearr_56896[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56896;
})();
var state_56780__$1 = (function (){var statearr_56897 = state_56780;
(statearr_56897[(28)] = inst_56645);

return statearr_56897;
})();
var statearr_56898_57203 = state_56780__$1;
(statearr_56898_57203[(2)] = inst_56610);

(statearr_56898_57203[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (11))){
var inst_56560 = (state_56780[(29)]);
var inst_56583 = (state_56780[(2)]);
var _ = (function (){var statearr_56899 = state_56780;
(statearr_56899[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56899;
})();
var state_56780__$1 = (function (){var statearr_56900 = state_56780;
(statearr_56900[(30)] = inst_56583);

return statearr_56900;
})();
var statearr_56901_57204 = state_56780__$1;
(statearr_56901_57204[(2)] = inst_56560);

(statearr_56901_57204[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (9))){
var inst_56559 = (state_56780[(31)]);
var inst_56563 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56564 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56565 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56566 = cljs.core.cons(inst_56565,inst_56559);
var inst_56567 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56564,47,inst_56566,"Should not flush before timeout"];
var inst_56568 = cljs.core.PersistentHashMap.fromArrays(inst_56563,inst_56567);
var inst_56569 = cljs.test.report.call(null,inst_56568);
var state_56780__$1 = state_56780;
var statearr_56902_57210 = state_56780__$1;
(statearr_56902_57210[(2)] = inst_56569);

(statearr_56902_57210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (5))){
var inst_56523 = (state_56780[(9)]);
var inst_56559 = (state_56780[(31)]);
var inst_56560 = (state_56780[(29)]);
var _ = (function (){var statearr_56903 = state_56780;
(statearr_56903[(4)] = cljs.core.cons((8),(state_56780[(4)])));

return statearr_56903;
})();
var inst_56558 = cljs.core.deref(inst_56523);
var inst_56559__$1 = (new cljs.core.List(null,inst_56558,null,(1),null));
var inst_56560__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56559__$1);
var state_56780__$1 = (function (){var statearr_56904 = state_56780;
(statearr_56904[(31)] = inst_56559__$1);

(statearr_56904[(29)] = inst_56560__$1);

return statearr_56904;
})();
if(cljs.core.truth_(inst_56560__$1)){
var statearr_56905_57211 = state_56780__$1;
(statearr_56905_57211[(1)] = (9));

} else {
var statearr_56906_57212 = state_56780__$1;
(statearr_56906_57212[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (14))){
var inst_56521 = (state_56780[(8)]);
var inst_56648 = (state_56780[(2)]);
var state_56780__$1 = (function (){var statearr_56908 = state_56780;
(statearr_56908[(32)] = inst_56648);

return statearr_56908;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56780__$1,(20),inst_56521,(3));
} else {
if((state_val_56781 === (26))){
var inst_56659 = (state_56780[(2)]);
var inst_56660 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56661 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56662 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56661,57,inst_56659,"Should not flush 3,4 yet"];
var inst_56663 = cljs.core.PersistentHashMap.fromArrays(inst_56660,inst_56662);
var inst_56664 = cljs.test.report.call(null,inst_56663);
var state_56780__$1 = state_56780;
var statearr_56911_57217 = state_56780__$1;
(statearr_56911_57217[(2)] = inst_56664);

(statearr_56911_57217[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (16))){
var _ = (function (){var statearr_56915 = state_56780;
(statearr_56915[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56915;
})();
var state_56780__$1 = state_56780;
var ex56907 = (state_56780__$1[(2)]);
var statearr_56917_57218 = state_56780__$1;
(statearr_56917_57218[(5)] = ex56907);


var statearr_56918_57219 = state_56780__$1;
(statearr_56918_57219[(1)] = (15));

(statearr_56918_57219[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (38))){
var inst_56730 = (state_56780[(17)]);
var inst_56774 = (state_56780[(2)]);
var _ = (function (){var statearr_56919 = state_56780;
(statearr_56919[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56919;
})();
var state_56780__$1 = (function (){var statearr_56920 = state_56780;
(statearr_56920[(33)] = inst_56774);

return statearr_56920;
})();
var statearr_56921_57220 = state_56780__$1;
(statearr_56921_57220[(2)] = inst_56730);

(statearr_56921_57220[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (30))){
var inst_56679 = (state_56780[(12)]);
var inst_56700 = (state_56780[(2)]);
var _ = (function (){var statearr_56924 = state_56780;
(statearr_56924[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56924;
})();
var state_56780__$1 = (function (){var statearr_56926 = state_56780;
(statearr_56926[(34)] = inst_56700);

return statearr_56926;
})();
var statearr_56928_57222 = state_56780__$1;
(statearr_56928_57222[(2)] = inst_56679);

(statearr_56928_57222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (10))){
var inst_56559 = (state_56780[(31)]);
var inst_56571 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56572 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56573 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56574 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56575 = cljs.core.cons(inst_56574,inst_56559);
var inst_56576 = (new cljs.core.List(null,inst_56575,null,(1),null));
var inst_56577 = (new cljs.core.List(null,inst_56573,inst_56576,(2),null));
var inst_56578 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56572,47,inst_56577,"Should not flush before timeout"];
var inst_56579 = cljs.core.PersistentHashMap.fromArrays(inst_56571,inst_56578);
var inst_56580 = cljs.test.report.call(null,inst_56579);
var state_56780__$1 = state_56780;
var statearr_56931_57223 = state_56780__$1;
(statearr_56931_57223[(2)] = inst_56580);

(statearr_56931_57223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (18))){
var inst_56609 = (state_56780[(19)]);
var inst_56621 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56622 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56623 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56624 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56638 = cljs.core.cons(inst_56624,inst_56609);
var inst_56639 = (new cljs.core.List(null,inst_56638,null,(1),null));
var inst_56640 = (new cljs.core.List(null,inst_56623,inst_56639,(2),null));
var inst_56641 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56622,50,inst_56640,"Should flush after timeout"];
var inst_56642 = cljs.core.PersistentHashMap.fromArrays(inst_56621,inst_56641);
var inst_56643 = cljs.test.report.call(null,inst_56642);
var state_56780__$1 = state_56780;
var statearr_56937_57226 = state_56780__$1;
(statearr_56937_57226[(2)] = inst_56643);

(statearr_56937_57226[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (37))){
var inst_56729 = (state_56780[(16)]);
var inst_56756 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56757 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56758 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56759 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56760 = cljs.core.cons(inst_56759,inst_56729);
var inst_56761 = (new cljs.core.List(null,inst_56760,null,(1),null));
var inst_56762 = (new cljs.core.List(null,inst_56758,inst_56761,(2),null));
var inst_56763 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56757,60,inst_56762,"Should flush 3,4 after timeout from first message"];
var inst_56764 = cljs.core.PersistentHashMap.fromArrays(inst_56756,inst_56763);
var inst_56765 = cljs.test.report.call(null,inst_56764);
var state_56780__$1 = state_56780;
var statearr_56938_57230 = state_56780__$1;
(statearr_56938_57230[(2)] = inst_56765);

(statearr_56938_57230[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56781 === (8))){
var _ = (function (){var statearr_56939 = state_56780;
(statearr_56939[(4)] = cljs.core.rest((state_56780[(4)])));

return statearr_56939;
})();
var state_56780__$1 = state_56780;
var ex56932 = (state_56780__$1[(2)]);
var statearr_56940_57232 = state_56780__$1;
(statearr_56940_57232[(5)] = ex56932);


var statearr_56941_57233 = state_56780__$1;
(statearr_56941_57233[(1)] = (7));

(statearr_56941_57233[(5)] = null);



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
var statearr_56944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56944[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56944[(1)] = (1));

return statearr_56944;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56780){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56780);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56945){var ex__32294__auto__ = e56945;
var statearr_56946_57234 = state_56780;
(statearr_56946_57234[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56780[(4)]))){
var statearr_56948_57235 = state_56780;
(statearr_56948_57235[(1)] = cljs.core.first((state_56780[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57236 = state_56780;
state_56780 = G__57236;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56780){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56952 = f__32362__auto__();
(statearr_56952[(6)] = c__32361__auto__);

return statearr_56952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56512","meta56512",-1450793475,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56511");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56511");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56511.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56511 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56511(meta56512){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511(meta56512));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56511(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965 = (function (meta56966){
this.meta56966 = meta56966;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56967,meta56966__$1){
var self__ = this;
var _56967__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965(meta56966__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56967){
var self__ = this;
var _56967__$1 = this;
return self__.meta56966;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56980 = (arguments.length - (1));
switch (G__56980) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.prototype.apply = (function (self__,args56970){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56970)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57047){
var state_val_57048 = (state_57047[(1)]);
if((state_val_57048 === (7))){
var inst_57000 = (state_57047[(2)]);
var inst_57001 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57002 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57003 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_57002,78,inst_57000,"Closing input should flush remaining"];
var inst_57004 = cljs.core.PersistentHashMap.fromArrays(inst_57001,inst_57003);
var inst_57005 = cljs.test.report.call(null,inst_57004);
var state_57047__$1 = state_57047;
var statearr_57051_57239 = state_57047__$1;
(statearr_57051_57239[(2)] = inst_57005);

(statearr_57051_57239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (1))){
var inst_56982 = (state_57047[(7)]);
var inst_56984 = (state_57047[(8)]);
var inst_56982__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56983 = cljs.core.PersistentVector.EMPTY;
var inst_56984__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56983);
var inst_56985 = (function (){var input_ch = inst_56982__$1;
var results = inst_56984__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56987 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56988 = [inst_56982__$1,inst_56985];
var inst_56989 = cljs.core.PersistentHashMap.fromArrays(inst_56987,inst_56988);
var inst_56990 = bb_web_ds_tools.components.async_buffer.create(inst_56989);
var state_57047__$1 = (function (){var statearr_57053 = state_57047;
(statearr_57053[(7)] = inst_56982__$1);

(statearr_57053[(8)] = inst_56984__$1);

(statearr_57053[(9)] = inst_56990);

return statearr_57053;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57047__$1,(2),inst_56982__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57048 === (4))){
var inst_56999 = (state_57047[(2)]);
var state_57047__$1 = (function (){var statearr_57057 = state_57047;
(statearr_57057[(10)] = inst_56999);

return statearr_57057;
})();
var statearr_57058_57240 = state_57047__$1;
(statearr_57058_57240[(2)] = null);

(statearr_57058_57240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (6))){
var inst_57044 = (state_57047[(2)]);
var inst_57045 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57047__$1 = (function (){var statearr_57059 = state_57047;
(statearr_57059[(11)] = inst_57044);

return statearr_57059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57047__$1,inst_57045);
} else {
if((state_val_57048 === (3))){
var inst_56982 = (state_57047[(7)]);
var inst_56994 = (state_57047[(2)]);
var inst_56995 = cljs.core.async.close_BANG_(inst_56982);
var inst_56997 = cljs.core.async.timeout((20));
var state_57047__$1 = (function (){var statearr_57063 = state_57047;
(statearr_57063[(12)] = inst_56994);

(statearr_57063[(13)] = inst_56995);

return statearr_57063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57047__$1,(4),inst_56997);
} else {
if((state_val_57048 === (2))){
var inst_56982 = (state_57047[(7)]);
var inst_56992 = (state_57047[(2)]);
var state_57047__$1 = (function (){var statearr_57065 = state_57047;
(statearr_57065[(14)] = inst_56992);

return statearr_57065;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57047__$1,(3),inst_56982,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57048 === (11))){
var inst_57020 = (state_57047[(15)]);
var inst_57041 = (state_57047[(2)]);
var _ = (function (){var statearr_57068 = state_57047;
(statearr_57068[(4)] = cljs.core.rest((state_57047[(4)])));

return statearr_57068;
})();
var state_57047__$1 = (function (){var statearr_57069 = state_57047;
(statearr_57069[(16)] = inst_57041);

return statearr_57069;
})();
var statearr_57070_57241 = state_57047__$1;
(statearr_57070_57241[(2)] = inst_57020);

(statearr_57070_57241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (9))){
var inst_57019 = (state_57047[(17)]);
var inst_57022 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57023 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57024 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57025 = cljs.core.cons(inst_57024,inst_57019);
var inst_57026 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_57023,78,inst_57025,"Closing input should flush remaining"];
var inst_57027 = cljs.core.PersistentHashMap.fromArrays(inst_57022,inst_57026);
var inst_57028 = cljs.test.report.call(null,inst_57027);
var state_57047__$1 = state_57047;
var statearr_57074_57242 = state_57047__$1;
(statearr_57074_57242[(2)] = inst_57028);

(statearr_57074_57242[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (5))){
var inst_56984 = (state_57047[(8)]);
var inst_57019 = (state_57047[(17)]);
var inst_57020 = (state_57047[(15)]);
var _ = (function (){var statearr_57077 = state_57047;
(statearr_57077[(4)] = cljs.core.cons((8),(state_57047[(4)])));

return statearr_57077;
})();
var inst_57011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57013 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_57014 = (new cljs.core.PersistentVector(null,2,(5),inst_57012,inst_57013,null));
var inst_57015 = [inst_57014];
var inst_57016 = (new cljs.core.PersistentVector(null,1,(5),inst_57011,inst_57015,null));
var inst_57017 = cljs.core.deref(inst_56984);
var inst_57018 = (new cljs.core.List(null,inst_57017,null,(1),null));
var inst_57019__$1 = (new cljs.core.List(null,inst_57016,inst_57018,(2),null));
var inst_57020__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_57019__$1);
var state_57047__$1 = (function (){var statearr_57080 = state_57047;
(statearr_57080[(17)] = inst_57019__$1);

(statearr_57080[(15)] = inst_57020__$1);

return statearr_57080;
})();
if(cljs.core.truth_(inst_57020__$1)){
var statearr_57081_57246 = state_57047__$1;
(statearr_57081_57246[(1)] = (9));

} else {
var statearr_57083_57247 = state_57047__$1;
(statearr_57083_57247[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (10))){
var inst_57019 = (state_57047[(17)]);
var inst_57030 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_57031 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_57032 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_57033 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_57034 = cljs.core.cons(inst_57033,inst_57019);
var inst_57035 = (new cljs.core.List(null,inst_57034,null,(1),null));
var inst_57036 = (new cljs.core.List(null,inst_57032,inst_57035,(2),null));
var inst_57037 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_57031,78,inst_57036,"Closing input should flush remaining"];
var inst_57038 = cljs.core.PersistentHashMap.fromArrays(inst_57030,inst_57037);
var inst_57039 = cljs.test.report.call(null,inst_57038);
var state_57047__$1 = state_57047;
var statearr_57084_57248 = state_57047__$1;
(statearr_57084_57248[(2)] = inst_57039);

(statearr_57084_57248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57048 === (8))){
var _ = (function (){var statearr_57085 = state_57047;
(statearr_57085[(4)] = cljs.core.rest((state_57047[(4)])));

return statearr_57085;
})();
var state_57047__$1 = state_57047;
var ex57075 = (state_57047__$1[(2)]);
var statearr_57086_57249 = state_57047__$1;
(statearr_57086_57249[(5)] = ex57075);


var statearr_57087_57250 = state_57047__$1;
(statearr_57087_57250[(1)] = (7));

(statearr_57087_57250[(5)] = null);



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
var statearr_57089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57089[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57089[(1)] = (1));

return statearr_57089;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57047){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57047);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57090){var ex__32294__auto__ = e57090;
var statearr_57091_57251 = state_57047;
(statearr_57091_57251[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57047[(4)]))){
var statearr_57095_57252 = state_57047;
(statearr_57095_57252[(1)] = cljs.core.first((state_57047[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57253 = state_57047;
state_57047 = G__57253;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57047){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57096 = f__32362__auto__();
(statearr_57096[(6)] = c__32361__auto__);

return statearr_57096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56966","meta56966",-100783349,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56965");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56965");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56965.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56965 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56965(meta56966){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965(meta56966));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56965(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
