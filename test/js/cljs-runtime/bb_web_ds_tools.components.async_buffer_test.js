goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273 = (function (meta56274){
this.meta56274 = meta56274;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56275,meta56274__$1){
var self__ = this;
var _56275__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273(meta56274__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56275){
var self__ = this;
var _56275__$1 = this;
return self__.meta56274;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56279 = (arguments.length - (1));
switch (G__56279) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.prototype.apply = (function (self__,args56276){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56276)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56449){
var state_val_56450 = (state_56449[(1)]);
if((state_val_56450 === (7))){
var inst_56303 = (state_56449[(2)]);
var inst_56304 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56305 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56306 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56305,19,inst_56303,"Buffer should not flush automatically without timer"];
var inst_56307 = cljs.core.PersistentHashMap.fromArrays(inst_56304,inst_56306);
var inst_56308 = cljs.test.report.call(null,inst_56307);
var state_56449__$1 = state_56449;
var statearr_56459_57056 = state_56449__$1;
(statearr_56459_57056[(2)] = inst_56308);

(statearr_56459_57056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (20))){
var inst_56295 = (state_56449[(7)]);
var inst_56394 = (state_56449[(2)]);
var inst_56395 = (inst_56295.cljs$core$IFn$_invoke$arity$0 ? inst_56295.cljs$core$IFn$_invoke$arity$0() : inst_56295.call(null));
var inst_56396 = cljs.core.async.timeout((20));
var state_56449__$1 = (function (){var statearr_56463 = state_56449;
(statearr_56463[(8)] = inst_56394);

(statearr_56463[(9)] = inst_56395);

return statearr_56463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56449__$1,(21),inst_56396);
} else {
if((state_val_56450 === (27))){
var inst_56421 = (state_56449[(10)]);
var inst_56432 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56433 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56434 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56435 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56436 = cljs.core.cons(inst_56435,inst_56421);
var inst_56437 = (new cljs.core.List(null,inst_56436,null,(1),null));
var inst_56438 = (new cljs.core.List(null,inst_56434,inst_56437,(2),null));
var inst_56439 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56433,29,inst_56438,"Subsequent flush should work"];
var inst_56440 = cljs.core.PersistentHashMap.fromArrays(inst_56432,inst_56439);
var inst_56441 = cljs.test.report.call(null,inst_56440);
var state_56449__$1 = state_56449;
var statearr_56467_57062 = state_56449__$1;
(statearr_56467_57062[(2)] = inst_56441);

(statearr_56467_57062[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (1))){
var inst_56285 = (state_56449[(11)]);
var inst_56287 = (state_56449[(12)]);
var inst_56285__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56286 = cljs.core.PersistentVector.EMPTY;
var inst_56287__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56286);
var inst_56288 = (function (){var input_ch = inst_56285__$1;
var results = inst_56287__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56291 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56293 = [inst_56285__$1,inst_56288];
var inst_56294 = cljs.core.PersistentHashMap.fromArrays(inst_56291,inst_56293);
var inst_56295 = bb_web_ds_tools.components.async_buffer.create(inst_56294);
var state_56449__$1 = (function (){var statearr_56469 = state_56449;
(statearr_56469[(11)] = inst_56285__$1);

(statearr_56469[(12)] = inst_56287__$1);

(statearr_56469[(7)] = inst_56295);

return statearr_56469;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56449__$1,(2),inst_56285__$1,(1));
} else {
if((state_val_56450 === (24))){
var inst_56399 = (state_56449[(2)]);
var inst_56400 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56401 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56402 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56401,29,inst_56399,"Subsequent flush should work"];
var inst_56403 = cljs.core.PersistentHashMap.fromArrays(inst_56400,inst_56402);
var inst_56404 = cljs.test.report.call(null,inst_56403);
var state_56449__$1 = state_56449;
var statearr_56471_57065 = state_56449__$1;
(statearr_56471_57065[(2)] = inst_56404);

(statearr_56471_57065[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (4))){
var inst_56302 = (state_56449[(2)]);
var state_56449__$1 = (function (){var statearr_56472 = state_56449;
(statearr_56472[(13)] = inst_56302);

return statearr_56472;
})();
var statearr_56473_57066 = state_56449__$1;
(statearr_56473_57066[(2)] = null);

(statearr_56473_57066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (15))){
var inst_56347 = (state_56449[(2)]);
var inst_56349 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56350 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56351 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56350,24,inst_56347,"Manual flush should flush all items"];
var inst_56352 = cljs.core.PersistentHashMap.fromArrays(inst_56349,inst_56351);
var inst_56353 = cljs.test.report.call(null,inst_56352);
var state_56449__$1 = state_56449;
var statearr_56475_57070 = state_56449__$1;
(statearr_56475_57070[(2)] = inst_56353);

(statearr_56475_57070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (21))){
var inst_56398 = (state_56449[(2)]);
var state_56449__$1 = (function (){var statearr_56476 = state_56449;
(statearr_56476[(14)] = inst_56398);

return statearr_56476;
})();
var statearr_56477_57077 = state_56449__$1;
(statearr_56477_57077[(2)] = null);

(statearr_56477_57077[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (13))){
var inst_56287 = (state_56449[(12)]);
var inst_56367 = (state_56449[(15)]);
var inst_56368 = (state_56449[(16)]);
var _ = (function (){var statearr_56480 = state_56449;
(statearr_56480[(4)] = cljs.core.cons((16),(state_56449[(4)])));

return statearr_56480;
})();
var inst_56359 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56361 = [(1),(2)];
var inst_56362 = (new cljs.core.PersistentVector(null,2,(5),inst_56360,inst_56361,null));
var inst_56363 = [inst_56362];
var inst_56364 = (new cljs.core.PersistentVector(null,1,(5),inst_56359,inst_56363,null));
var inst_56365 = cljs.core.deref(inst_56287);
var inst_56366 = (new cljs.core.List(null,inst_56365,null,(1),null));
var inst_56367__$1 = (new cljs.core.List(null,inst_56364,inst_56366,(2),null));
var inst_56368__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56367__$1);
var state_56449__$1 = (function (){var statearr_56481 = state_56449;
(statearr_56481[(15)] = inst_56367__$1);

(statearr_56481[(16)] = inst_56368__$1);

return statearr_56481;
})();
if(cljs.core.truth_(inst_56368__$1)){
var statearr_56483_57079 = state_56449__$1;
(statearr_56483_57079[(1)] = (17));

} else {
var statearr_56484_57080 = state_56449__$1;
(statearr_56484_57080[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (22))){
var inst_56287 = (state_56449[(12)]);
var inst_56421 = (state_56449[(10)]);
var inst_56422 = (state_56449[(17)]);
var _ = (function (){var statearr_56485 = state_56449;
(statearr_56485[(4)] = cljs.core.cons((25),(state_56449[(4)])));

return statearr_56485;
})();
var inst_56410 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56411 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56412 = [(1),(2)];
var inst_56413 = (new cljs.core.PersistentVector(null,2,(5),inst_56411,inst_56412,null));
var inst_56414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56415 = [(3)];
var inst_56416 = (new cljs.core.PersistentVector(null,1,(5),inst_56414,inst_56415,null));
var inst_56417 = [inst_56413,inst_56416];
var inst_56418 = (new cljs.core.PersistentVector(null,2,(5),inst_56410,inst_56417,null));
var inst_56419 = cljs.core.deref(inst_56287);
var inst_56420 = (new cljs.core.List(null,inst_56419,null,(1),null));
var inst_56421__$1 = (new cljs.core.List(null,inst_56418,inst_56420,(2),null));
var inst_56422__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56421__$1);
var state_56449__$1 = (function (){var statearr_56487 = state_56449;
(statearr_56487[(10)] = inst_56421__$1);

(statearr_56487[(17)] = inst_56422__$1);

return statearr_56487;
})();
if(cljs.core.truth_(inst_56422__$1)){
var statearr_56488_57081 = state_56449__$1;
(statearr_56488_57081[(1)] = (26));

} else {
var statearr_56489_57082 = state_56449__$1;
(statearr_56489_57082[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (6))){
var inst_56295 = (state_56449[(7)]);
var inst_56342 = (state_56449[(2)]);
var inst_56343 = (inst_56295.cljs$core$IFn$_invoke$arity$0 ? inst_56295.cljs$core$IFn$_invoke$arity$0() : inst_56295.call(null));
var inst_56344 = cljs.core.async.timeout((20));
var state_56449__$1 = (function (){var statearr_56491 = state_56449;
(statearr_56491[(18)] = inst_56342);

(statearr_56491[(19)] = inst_56343);

return statearr_56491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56449__$1,(12),inst_56344);
} else {
if((state_val_56450 === (28))){
var inst_56422 = (state_56449[(17)]);
var inst_56443 = (state_56449[(2)]);
var _ = (function (){var statearr_56493 = state_56449;
(statearr_56493[(4)] = cljs.core.rest((state_56449[(4)])));

return statearr_56493;
})();
var state_56449__$1 = (function (){var statearr_56494 = state_56449;
(statearr_56494[(20)] = inst_56443);

return statearr_56494;
})();
var statearr_56495_57083 = state_56449__$1;
(statearr_56495_57083[(2)] = inst_56422);

(statearr_56495_57083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (25))){
var _ = (function (){var statearr_56496 = state_56449;
(statearr_56496[(4)] = cljs.core.rest((state_56449[(4)])));

return statearr_56496;
})();
var state_56449__$1 = state_56449;
var ex56490 = (state_56449__$1[(2)]);
var statearr_56497_57085 = state_56449__$1;
(statearr_56497_57085[(5)] = ex56490);


var statearr_56498_57086 = state_56449__$1;
(statearr_56498_57086[(1)] = (24));

(statearr_56498_57086[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (17))){
var inst_56367 = (state_56449[(15)]);
var inst_56370 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56371 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56372 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56373 = cljs.core.cons(inst_56372,inst_56367);
var inst_56374 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56371,24,inst_56373,"Manual flush should flush all items"];
var inst_56375 = cljs.core.PersistentHashMap.fromArrays(inst_56370,inst_56374);
var inst_56376 = cljs.test.report.call(null,inst_56375);
var state_56449__$1 = state_56449;
var statearr_56503_57088 = state_56449__$1;
(statearr_56503_57088[(2)] = inst_56376);

(statearr_56503_57088[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (3))){
var inst_56299 = (state_56449[(2)]);
var inst_56300 = cljs.core.async.timeout((20));
var state_56449__$1 = (function (){var statearr_56506 = state_56449;
(statearr_56506[(21)] = inst_56299);

return statearr_56506;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56449__$1,(4),inst_56300);
} else {
if((state_val_56450 === (12))){
var inst_56346 = (state_56449[(2)]);
var state_56449__$1 = (function (){var statearr_56508 = state_56449;
(statearr_56508[(22)] = inst_56346);

return statearr_56508;
})();
var statearr_56509_57089 = state_56449__$1;
(statearr_56509_57089[(2)] = null);

(statearr_56509_57089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (2))){
var inst_56285 = (state_56449[(11)]);
var inst_56297 = (state_56449[(2)]);
var state_56449__$1 = (function (){var statearr_56513 = state_56449;
(statearr_56513[(23)] = inst_56297);

return statearr_56513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56449__$1,(3),inst_56285,(2));
} else {
if((state_val_56450 === (23))){
var inst_56446 = (state_56449[(2)]);
var inst_56447 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56449__$1 = (function (){var statearr_56515 = state_56449;
(statearr_56515[(24)] = inst_56446);

return statearr_56515;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56449__$1,inst_56447);
} else {
if((state_val_56450 === (19))){
var inst_56368 = (state_56449[(16)]);
var inst_56389 = (state_56449[(2)]);
var _ = (function (){var statearr_56519 = state_56449;
(statearr_56519[(4)] = cljs.core.rest((state_56449[(4)])));

return statearr_56519;
})();
var state_56449__$1 = (function (){var statearr_56520 = state_56449;
(statearr_56520[(25)] = inst_56389);

return statearr_56520;
})();
var statearr_56521_57090 = state_56449__$1;
(statearr_56521_57090[(2)] = inst_56368);

(statearr_56521_57090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (11))){
var inst_56318 = (state_56449[(26)]);
var inst_56339 = (state_56449[(2)]);
var _ = (function (){var statearr_56522 = state_56449;
(statearr_56522[(4)] = cljs.core.rest((state_56449[(4)])));

return statearr_56522;
})();
var state_56449__$1 = (function (){var statearr_56523 = state_56449;
(statearr_56523[(27)] = inst_56339);

return statearr_56523;
})();
var statearr_56524_57091 = state_56449__$1;
(statearr_56524_57091[(2)] = inst_56318);

(statearr_56524_57091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (9))){
var inst_56317 = (state_56449[(28)]);
var inst_56320 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56321 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56322 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56323 = cljs.core.cons(inst_56322,inst_56317);
var inst_56324 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56321,19,inst_56323,"Buffer should not flush automatically without timer"];
var inst_56325 = cljs.core.PersistentHashMap.fromArrays(inst_56320,inst_56324);
var inst_56326 = cljs.test.report.call(null,inst_56325);
var state_56449__$1 = state_56449;
var statearr_56525_57092 = state_56449__$1;
(statearr_56525_57092[(2)] = inst_56326);

(statearr_56525_57092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (5))){
var inst_56287 = (state_56449[(12)]);
var inst_56317 = (state_56449[(28)]);
var inst_56318 = (state_56449[(26)]);
var _ = (function (){var statearr_56526 = state_56449;
(statearr_56526[(4)] = cljs.core.cons((8),(state_56449[(4)])));

return statearr_56526;
})();
var inst_56316 = cljs.core.deref(inst_56287);
var inst_56317__$1 = (new cljs.core.List(null,inst_56316,null,(1),null));
var inst_56318__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56317__$1);
var state_56449__$1 = (function (){var statearr_56527 = state_56449;
(statearr_56527[(28)] = inst_56317__$1);

(statearr_56527[(26)] = inst_56318__$1);

return statearr_56527;
})();
if(cljs.core.truth_(inst_56318__$1)){
var statearr_56528_57095 = state_56449__$1;
(statearr_56528_57095[(1)] = (9));

} else {
var statearr_56529_57096 = state_56449__$1;
(statearr_56529_57096[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (14))){
var inst_56285 = (state_56449[(11)]);
var inst_56392 = (state_56449[(2)]);
var state_56449__$1 = (function (){var statearr_56531 = state_56449;
(statearr_56531[(29)] = inst_56392);

return statearr_56531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56449__$1,(20),inst_56285,(3));
} else {
if((state_val_56450 === (26))){
var inst_56421 = (state_56449[(10)]);
var inst_56424 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56425 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56426 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56427 = cljs.core.cons(inst_56426,inst_56421);
var inst_56428 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56425,29,inst_56427,"Subsequent flush should work"];
var inst_56429 = cljs.core.PersistentHashMap.fromArrays(inst_56424,inst_56428);
var inst_56430 = cljs.test.report.call(null,inst_56429);
var state_56449__$1 = state_56449;
var statearr_56535_57097 = state_56449__$1;
(statearr_56535_57097[(2)] = inst_56430);

(statearr_56535_57097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (16))){
var _ = (function (){var statearr_56536 = state_56449;
(statearr_56536[(4)] = cljs.core.rest((state_56449[(4)])));

return statearr_56536;
})();
var state_56449__$1 = state_56449;
var ex56530 = (state_56449__$1[(2)]);
var statearr_56538_57099 = state_56449__$1;
(statearr_56538_57099[(5)] = ex56530);


var statearr_56539_57100 = state_56449__$1;
(statearr_56539_57100[(1)] = (15));

(statearr_56539_57100[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (10))){
var inst_56317 = (state_56449[(28)]);
var inst_56328 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56329 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56330 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56331 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56332 = cljs.core.cons(inst_56331,inst_56317);
var inst_56333 = (new cljs.core.List(null,inst_56332,null,(1),null));
var inst_56334 = (new cljs.core.List(null,inst_56330,inst_56333,(2),null));
var inst_56335 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56329,19,inst_56334,"Buffer should not flush automatically without timer"];
var inst_56336 = cljs.core.PersistentHashMap.fromArrays(inst_56328,inst_56335);
var inst_56337 = cljs.test.report.call(null,inst_56336);
var state_56449__$1 = state_56449;
var statearr_56541_57101 = state_56449__$1;
(statearr_56541_57101[(2)] = inst_56337);

(statearr_56541_57101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (18))){
var inst_56367 = (state_56449[(15)]);
var inst_56378 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56379 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56380 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56381 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56382 = cljs.core.cons(inst_56381,inst_56367);
var inst_56383 = (new cljs.core.List(null,inst_56382,null,(1),null));
var inst_56384 = (new cljs.core.List(null,inst_56380,inst_56383,(2),null));
var inst_56385 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56379,24,inst_56384,"Manual flush should flush all items"];
var inst_56386 = cljs.core.PersistentHashMap.fromArrays(inst_56378,inst_56385);
var inst_56387 = cljs.test.report.call(null,inst_56386);
var state_56449__$1 = state_56449;
var statearr_56542_57105 = state_56449__$1;
(statearr_56542_57105[(2)] = inst_56387);

(statearr_56542_57105[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56450 === (8))){
var _ = (function (){var statearr_56543 = state_56449;
(statearr_56543[(4)] = cljs.core.rest((state_56449[(4)])));

return statearr_56543;
})();
var state_56449__$1 = state_56449;
var ex56540 = (state_56449__$1[(2)]);
var statearr_56544_57106 = state_56449__$1;
(statearr_56544_57106[(5)] = ex56540);


var statearr_56545_57107 = state_56449__$1;
(statearr_56545_57107[(1)] = (7));

(statearr_56545_57107[(5)] = null);



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
var statearr_56546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56546[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56546[(1)] = (1));

return statearr_56546;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56449){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56449);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56547){var ex__32294__auto__ = e56547;
var statearr_56548_57109 = state_56449;
(statearr_56548_57109[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56449[(4)]))){
var statearr_56549_57112 = state_56449;
(statearr_56549_57112[(1)] = cljs.core.first((state_56449[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57114 = state_56449;
state_56449 = G__57114;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56449){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56550 = f__32362__auto__();
(statearr_56550[(6)] = c__32361__auto__);

return statearr_56550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56274","meta56274",2038096413,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56273");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56273");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56273.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56273 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56273(meta56274){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273(meta56274));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56273(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551 = (function (meta56552){
this.meta56552 = meta56552;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56553,meta56552__$1){
var self__ = this;
var _56553__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551(meta56552__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56553){
var self__ = this;
var _56553__$1 = this;
return self__.meta56552;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56555 = (arguments.length - (1));
switch (G__56555) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.prototype.apply = (function (self__,args56554){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56554)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56802){
var state_val_56803 = (state_56802[(1)]);
if((state_val_56803 === (7))){
var inst_56577 = (state_56802[(2)]);
var inst_56578 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56579 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56580 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56579,47,inst_56577,"Should not flush before timeout"];
var inst_56581 = cljs.core.PersistentHashMap.fromArrays(inst_56578,inst_56580);
var inst_56582 = cljs.test.report.call(null,inst_56581);
var state_56802__$1 = state_56802;
var statearr_56810_57121 = state_56802__$1;
(statearr_56810_57121[(2)] = inst_56582);

(statearr_56810_57121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (20))){
var inst_56668 = (state_56802[(2)]);
var inst_56673 = cljs.core.async.timeout((50));
var state_56802__$1 = (function (){var statearr_56812 = state_56802;
(statearr_56812[(7)] = inst_56668);

return statearr_56812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56802__$1,(21),inst_56673);
} else {
if((state_val_56803 === (27))){
var _ = (function (){var statearr_56814 = state_56802;
(statearr_56814[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56814;
})();
var state_56802__$1 = state_56802;
var ex56804 = (state_56802__$1[(2)]);
var statearr_56816_57122 = state_56802__$1;
(statearr_56816_57122[(5)] = ex56804);


var statearr_56818_57123 = state_56802__$1;
(statearr_56818_57123[(1)] = (26));

(statearr_56818_57123[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (1))){
var inst_56561 = (state_56802[(8)]);
var inst_56563 = (state_56802[(9)]);
var inst_56561__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56562 = cljs.core.PersistentVector.EMPTY;
var inst_56563__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56562);
var inst_56564 = (function (){var input_ch = inst_56561__$1;
var results = inst_56563__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56565 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56566 = [inst_56561__$1,(100),inst_56564];
var inst_56567 = cljs.core.PersistentHashMap.fromArrays(inst_56565,inst_56566);
var inst_56569 = bb_web_ds_tools.components.async_buffer.create(inst_56567);
var state_56802__$1 = (function (){var statearr_56821 = state_56802;
(statearr_56821[(8)] = inst_56561__$1);

(statearr_56821[(9)] = inst_56563__$1);

(statearr_56821[(10)] = inst_56569);

return statearr_56821;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56802__$1,(2),inst_56561__$1,(1));
} else {
if((state_val_56803 === (24))){
var inst_56563 = (state_56802[(9)]);
var inst_56710 = (state_56802[(11)]);
var inst_56711 = (state_56802[(12)]);
var _ = (function (){var statearr_56826 = state_56802;
(statearr_56826[(4)] = cljs.core.cons((27),(state_56802[(4)])));

return statearr_56826;
})();
var inst_56702 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56703 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56704 = [(1),(2)];
var inst_56705 = (new cljs.core.PersistentVector(null,2,(5),inst_56703,inst_56704,null));
var inst_56706 = [inst_56705];
var inst_56707 = (new cljs.core.PersistentVector(null,1,(5),inst_56702,inst_56706,null));
var inst_56708 = cljs.core.deref(inst_56563);
var inst_56709 = (new cljs.core.List(null,inst_56708,null,(1),null));
var inst_56710__$1 = (new cljs.core.List(null,inst_56707,inst_56709,(2),null));
var inst_56711__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56710__$1);
var state_56802__$1 = (function (){var statearr_56829 = state_56802;
(statearr_56829[(11)] = inst_56710__$1);

(statearr_56829[(12)] = inst_56711__$1);

return statearr_56829;
})();
if(cljs.core.truth_(inst_56711__$1)){
var statearr_56830_57128 = state_56802__$1;
(statearr_56830_57128[(1)] = (28));

} else {
var statearr_56831_57129 = state_56802__$1;
(statearr_56831_57129[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (4))){
var inst_56576 = (state_56802[(2)]);
var state_56802__$1 = (function (){var statearr_56832 = state_56802;
(statearr_56832[(13)] = inst_56576);

return statearr_56832;
})();
var statearr_56833_57130 = state_56802__$1;
(statearr_56833_57130[(2)] = null);

(statearr_56833_57130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (15))){
var inst_56618 = (state_56802[(2)]);
var inst_56619 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56620 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56621 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56620,50,inst_56618,"Should flush after timeout"];
var inst_56622 = cljs.core.PersistentHashMap.fromArrays(inst_56619,inst_56621);
var inst_56623 = cljs.test.report.call(null,inst_56622);
var state_56802__$1 = state_56802;
var statearr_56836_57131 = state_56802__$1;
(statearr_56836_57131[(2)] = inst_56623);

(statearr_56836_57131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (21))){
var inst_56561 = (state_56802[(8)]);
var inst_56675 = (state_56802[(2)]);
var state_56802__$1 = (function (){var statearr_56839 = state_56802;
(statearr_56839[(14)] = inst_56675);

return statearr_56839;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56802__$1,(22),inst_56561,(4));
} else {
if((state_val_56803 === (31))){
var inst_56738 = (state_56802[(2)]);
var state_56802__$1 = (function (){var statearr_56842 = state_56802;
(statearr_56842[(15)] = inst_56738);

return statearr_56842;
})();
var statearr_56843_57132 = state_56802__$1;
(statearr_56843_57132[(2)] = null);

(statearr_56843_57132[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (32))){
var inst_56563 = (state_56802[(9)]);
var inst_56761 = (state_56802[(16)]);
var inst_56762 = (state_56802[(17)]);
var _ = (function (){var statearr_56844 = state_56802;
(statearr_56844[(4)] = cljs.core.cons((35),(state_56802[(4)])));

return statearr_56844;
})();
var inst_56750 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56751 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56752 = [(1),(2)];
var inst_56753 = (new cljs.core.PersistentVector(null,2,(5),inst_56751,inst_56752,null));
var inst_56754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56755 = [(3),(4)];
var inst_56756 = (new cljs.core.PersistentVector(null,2,(5),inst_56754,inst_56755,null));
var inst_56757 = [inst_56753,inst_56756];
var inst_56758 = (new cljs.core.PersistentVector(null,2,(5),inst_56750,inst_56757,null));
var inst_56759 = cljs.core.deref(inst_56563);
var inst_56760 = (new cljs.core.List(null,inst_56759,null,(1),null));
var inst_56761__$1 = (new cljs.core.List(null,inst_56758,inst_56760,(2),null));
var inst_56762__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56761__$1);
var state_56802__$1 = (function (){var statearr_56845 = state_56802;
(statearr_56845[(16)] = inst_56761__$1);

(statearr_56845[(17)] = inst_56762__$1);

return statearr_56845;
})();
if(cljs.core.truth_(inst_56762__$1)){
var statearr_56846_57134 = state_56802__$1;
(statearr_56846_57134[(1)] = (36));

} else {
var statearr_56847_57135 = state_56802__$1;
(statearr_56847_57135[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (33))){
var inst_56788 = (state_56802[(2)]);
var inst_56790 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56802__$1 = (function (){var statearr_56848 = state_56802;
(statearr_56848[(18)] = inst_56788);

return statearr_56848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56802__$1,inst_56790);
} else {
if((state_val_56803 === (13))){
var inst_56563 = (state_56802[(9)]);
var inst_56637 = (state_56802[(19)]);
var inst_56638 = (state_56802[(20)]);
var _ = (function (){var statearr_56849 = state_56802;
(statearr_56849[(4)] = cljs.core.cons((16),(state_56802[(4)])));

return statearr_56849;
})();
var inst_56629 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56630 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56631 = [(1),(2)];
var inst_56632 = (new cljs.core.PersistentVector(null,2,(5),inst_56630,inst_56631,null));
var inst_56633 = [inst_56632];
var inst_56634 = (new cljs.core.PersistentVector(null,1,(5),inst_56629,inst_56633,null));
var inst_56635 = cljs.core.deref(inst_56563);
var inst_56636 = (new cljs.core.List(null,inst_56635,null,(1),null));
var inst_56637__$1 = (new cljs.core.List(null,inst_56634,inst_56636,(2),null));
var inst_56638__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56637__$1);
var state_56802__$1 = (function (){var statearr_56850 = state_56802;
(statearr_56850[(19)] = inst_56637__$1);

(statearr_56850[(20)] = inst_56638__$1);

return statearr_56850;
})();
if(cljs.core.truth_(inst_56638__$1)){
var statearr_56851_57139 = state_56802__$1;
(statearr_56851_57139[(1)] = (17));

} else {
var statearr_56852_57140 = state_56802__$1;
(statearr_56852_57140[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (22))){
var inst_56677 = (state_56802[(2)]);
var inst_56680 = cljs.core.async.timeout((20));
var state_56802__$1 = (function (){var statearr_56853 = state_56802;
(statearr_56853[(21)] = inst_56677);

return statearr_56853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56802__$1,(23),inst_56680);
} else {
if((state_val_56803 === (36))){
var inst_56761 = (state_56802[(16)]);
var inst_56766 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56767 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56768 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56769 = cljs.core.cons(inst_56768,inst_56761);
var inst_56770 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56767,60,inst_56769,"Should flush 3,4 after timeout from first message"];
var inst_56771 = cljs.core.PersistentHashMap.fromArrays(inst_56766,inst_56770);
var inst_56772 = cljs.test.report.call(null,inst_56771);
var state_56802__$1 = state_56802;
var statearr_56854_57141 = state_56802__$1;
(statearr_56854_57141[(2)] = inst_56772);

(statearr_56854_57141[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (29))){
var inst_56710 = (state_56802[(11)]);
var inst_56721 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56722 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56723 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56724 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56725 = cljs.core.cons(inst_56724,inst_56710);
var inst_56726 = (new cljs.core.List(null,inst_56725,null,(1),null));
var inst_56727 = (new cljs.core.List(null,inst_56723,inst_56726,(2),null));
var inst_56728 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56722,57,inst_56727,"Should not flush 3,4 yet"];
var inst_56729 = cljs.core.PersistentHashMap.fromArrays(inst_56721,inst_56728);
var inst_56730 = cljs.test.report.call(null,inst_56729);
var state_56802__$1 = state_56802;
var statearr_56855_57143 = state_56802__$1;
(statearr_56855_57143[(2)] = inst_56730);

(statearr_56855_57143[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (6))){
var inst_56614 = (state_56802[(2)]);
var inst_56615 = cljs.core.async.timeout((100));
var state_56802__$1 = (function (){var statearr_56856 = state_56802;
(statearr_56856[(22)] = inst_56614);

return statearr_56856;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56802__$1,(12),inst_56615);
} else {
if((state_val_56803 === (28))){
var inst_56710 = (state_56802[(11)]);
var inst_56713 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56714 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56715 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56716 = cljs.core.cons(inst_56715,inst_56710);
var inst_56717 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56714,57,inst_56716,"Should not flush 3,4 yet"];
var inst_56718 = cljs.core.PersistentHashMap.fromArrays(inst_56713,inst_56717);
var inst_56719 = cljs.test.report.call(null,inst_56718);
var state_56802__$1 = state_56802;
var statearr_56857_57144 = state_56802__$1;
(statearr_56857_57144[(2)] = inst_56719);

(statearr_56857_57144[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (25))){
var inst_56735 = (state_56802[(2)]);
var inst_56736 = cljs.core.async.timeout((80));
var state_56802__$1 = (function (){var statearr_56858 = state_56802;
(statearr_56858[(23)] = inst_56735);

return statearr_56858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56802__$1,(31),inst_56736);
} else {
if((state_val_56803 === (34))){
var inst_56739 = (state_56802[(2)]);
var inst_56740 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56741 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56742 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56741,60,inst_56739,"Should flush 3,4 after timeout from first message"];
var inst_56743 = cljs.core.PersistentHashMap.fromArrays(inst_56740,inst_56742);
var inst_56744 = cljs.test.report.call(null,inst_56743);
var state_56802__$1 = state_56802;
var statearr_56859_57145 = state_56802__$1;
(statearr_56859_57145[(2)] = inst_56744);

(statearr_56859_57145[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (17))){
var inst_56637 = (state_56802[(19)]);
var inst_56640 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56641 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56642 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56643 = cljs.core.cons(inst_56642,inst_56637);
var inst_56644 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56641,50,inst_56643,"Should flush after timeout"];
var inst_56645 = cljs.core.PersistentHashMap.fromArrays(inst_56640,inst_56644);
var inst_56646 = cljs.test.report.call(null,inst_56645);
var state_56802__$1 = state_56802;
var statearr_56860_57150 = state_56802__$1;
(statearr_56860_57150[(2)] = inst_56646);

(statearr_56860_57150[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (3))){
var inst_56573 = (state_56802[(2)]);
var inst_56574 = cljs.core.async.timeout((50));
var state_56802__$1 = (function (){var statearr_56861 = state_56802;
(statearr_56861[(24)] = inst_56573);

return statearr_56861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56802__$1,(4),inst_56574);
} else {
if((state_val_56803 === (12))){
var inst_56617 = (state_56802[(2)]);
var state_56802__$1 = (function (){var statearr_56862 = state_56802;
(statearr_56862[(25)] = inst_56617);

return statearr_56862;
})();
var statearr_56863_57151 = state_56802__$1;
(statearr_56863_57151[(2)] = null);

(statearr_56863_57151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (2))){
var inst_56561 = (state_56802[(8)]);
var inst_56571 = (state_56802[(2)]);
var state_56802__$1 = (function (){var statearr_56865 = state_56802;
(statearr_56865[(26)] = inst_56571);

return statearr_56865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56802__$1,(3),inst_56561,(2));
} else {
if((state_val_56803 === (23))){
var inst_56682 = (state_56802[(2)]);
var state_56802__$1 = (function (){var statearr_56866 = state_56802;
(statearr_56866[(27)] = inst_56682);

return statearr_56866;
})();
var statearr_56867_57154 = state_56802__$1;
(statearr_56867_57154[(2)] = null);

(statearr_56867_57154[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (35))){
var _ = (function (){var statearr_56868 = state_56802;
(statearr_56868[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56868;
})();
var state_56802__$1 = state_56802;
var ex56864 = (state_56802__$1[(2)]);
var statearr_56869_57157 = state_56802__$1;
(statearr_56869_57157[(5)] = ex56864);


var statearr_56870_57158 = state_56802__$1;
(statearr_56870_57158[(1)] = (34));

(statearr_56870_57158[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (19))){
var inst_56638 = (state_56802[(20)]);
var inst_56663 = (state_56802[(2)]);
var _ = (function (){var statearr_56871 = state_56802;
(statearr_56871[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56871;
})();
var state_56802__$1 = (function (){var statearr_56872 = state_56802;
(statearr_56872[(28)] = inst_56663);

return statearr_56872;
})();
var statearr_56873_57159 = state_56802__$1;
(statearr_56873_57159[(2)] = inst_56638);

(statearr_56873_57159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (11))){
var inst_56590 = (state_56802[(29)]);
var inst_56611 = (state_56802[(2)]);
var _ = (function (){var statearr_56874 = state_56802;
(statearr_56874[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56874;
})();
var state_56802__$1 = (function (){var statearr_56875 = state_56802;
(statearr_56875[(30)] = inst_56611);

return statearr_56875;
})();
var statearr_56876_57161 = state_56802__$1;
(statearr_56876_57161[(2)] = inst_56590);

(statearr_56876_57161[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (9))){
var inst_56589 = (state_56802[(31)]);
var inst_56592 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56593 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56594 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56595 = cljs.core.cons(inst_56594,inst_56589);
var inst_56596 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56593,47,inst_56595,"Should not flush before timeout"];
var inst_56597 = cljs.core.PersistentHashMap.fromArrays(inst_56592,inst_56596);
var inst_56598 = cljs.test.report.call(null,inst_56597);
var state_56802__$1 = state_56802;
var statearr_56877_57162 = state_56802__$1;
(statearr_56877_57162[(2)] = inst_56598);

(statearr_56877_57162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (5))){
var inst_56563 = (state_56802[(9)]);
var inst_56589 = (state_56802[(31)]);
var inst_56590 = (state_56802[(29)]);
var _ = (function (){var statearr_56878 = state_56802;
(statearr_56878[(4)] = cljs.core.cons((8),(state_56802[(4)])));

return statearr_56878;
})();
var inst_56588 = cljs.core.deref(inst_56563);
var inst_56589__$1 = (new cljs.core.List(null,inst_56588,null,(1),null));
var inst_56590__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56589__$1);
var state_56802__$1 = (function (){var statearr_56879 = state_56802;
(statearr_56879[(31)] = inst_56589__$1);

(statearr_56879[(29)] = inst_56590__$1);

return statearr_56879;
})();
if(cljs.core.truth_(inst_56590__$1)){
var statearr_56880_57166 = state_56802__$1;
(statearr_56880_57166[(1)] = (9));

} else {
var statearr_56881_57167 = state_56802__$1;
(statearr_56881_57167[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (14))){
var inst_56561 = (state_56802[(8)]);
var inst_56666 = (state_56802[(2)]);
var state_56802__$1 = (function (){var statearr_56883 = state_56802;
(statearr_56883[(32)] = inst_56666);

return statearr_56883;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56802__$1,(20),inst_56561,(3));
} else {
if((state_val_56803 === (26))){
var inst_56691 = (state_56802[(2)]);
var inst_56692 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56693 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56694 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56693,57,inst_56691,"Should not flush 3,4 yet"];
var inst_56695 = cljs.core.PersistentHashMap.fromArrays(inst_56692,inst_56694);
var inst_56696 = cljs.test.report.call(null,inst_56695);
var state_56802__$1 = state_56802;
var statearr_56884_57173 = state_56802__$1;
(statearr_56884_57173[(2)] = inst_56696);

(statearr_56884_57173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (16))){
var _ = (function (){var statearr_56885 = state_56802;
(statearr_56885[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56885;
})();
var state_56802__$1 = state_56802;
var ex56882 = (state_56802__$1[(2)]);
var statearr_56886_57174 = state_56802__$1;
(statearr_56886_57174[(5)] = ex56882);


var statearr_56887_57176 = state_56802__$1;
(statearr_56887_57176[(1)] = (15));

(statearr_56887_57176[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (38))){
var inst_56762 = (state_56802[(17)]);
var inst_56785 = (state_56802[(2)]);
var _ = (function (){var statearr_56888 = state_56802;
(statearr_56888[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56888;
})();
var state_56802__$1 = (function (){var statearr_56889 = state_56802;
(statearr_56889[(33)] = inst_56785);

return statearr_56889;
})();
var statearr_56890_57177 = state_56802__$1;
(statearr_56890_57177[(2)] = inst_56762);

(statearr_56890_57177[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (30))){
var inst_56711 = (state_56802[(12)]);
var inst_56732 = (state_56802[(2)]);
var _ = (function (){var statearr_56891 = state_56802;
(statearr_56891[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56891;
})();
var state_56802__$1 = (function (){var statearr_56892 = state_56802;
(statearr_56892[(34)] = inst_56732);

return statearr_56892;
})();
var statearr_56893_57178 = state_56802__$1;
(statearr_56893_57178[(2)] = inst_56711);

(statearr_56893_57178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (10))){
var inst_56589 = (state_56802[(31)]);
var inst_56600 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56601 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56602 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56603 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56604 = cljs.core.cons(inst_56603,inst_56589);
var inst_56605 = (new cljs.core.List(null,inst_56604,null,(1),null));
var inst_56606 = (new cljs.core.List(null,inst_56602,inst_56605,(2),null));
var inst_56607 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56601,47,inst_56606,"Should not flush before timeout"];
var inst_56608 = cljs.core.PersistentHashMap.fromArrays(inst_56600,inst_56607);
var inst_56609 = cljs.test.report.call(null,inst_56608);
var state_56802__$1 = state_56802;
var statearr_56894_57182 = state_56802__$1;
(statearr_56894_57182[(2)] = inst_56609);

(statearr_56894_57182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (18))){
var inst_56637 = (state_56802[(19)]);
var inst_56648 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56649 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56650 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56655 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56656 = cljs.core.cons(inst_56655,inst_56637);
var inst_56657 = (new cljs.core.List(null,inst_56656,null,(1),null));
var inst_56658 = (new cljs.core.List(null,inst_56650,inst_56657,(2),null));
var inst_56659 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56649,50,inst_56658,"Should flush after timeout"];
var inst_56660 = cljs.core.PersistentHashMap.fromArrays(inst_56648,inst_56659);
var inst_56661 = cljs.test.report.call(null,inst_56660);
var state_56802__$1 = state_56802;
var statearr_56896_57190 = state_56802__$1;
(statearr_56896_57190[(2)] = inst_56661);

(statearr_56896_57190[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (37))){
var inst_56761 = (state_56802[(16)]);
var inst_56774 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56775 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56776 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56777 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56778 = cljs.core.cons(inst_56777,inst_56761);
var inst_56779 = (new cljs.core.List(null,inst_56778,null,(1),null));
var inst_56780 = (new cljs.core.List(null,inst_56776,inst_56779,(2),null));
var inst_56781 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56775,60,inst_56780,"Should flush 3,4 after timeout from first message"];
var inst_56782 = cljs.core.PersistentHashMap.fromArrays(inst_56774,inst_56781);
var inst_56783 = cljs.test.report.call(null,inst_56782);
var state_56802__$1 = state_56802;
var statearr_56897_57194 = state_56802__$1;
(statearr_56897_57194[(2)] = inst_56783);

(statearr_56897_57194[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56803 === (8))){
var _ = (function (){var statearr_56898 = state_56802;
(statearr_56898[(4)] = cljs.core.rest((state_56802[(4)])));

return statearr_56898;
})();
var state_56802__$1 = state_56802;
var ex56895 = (state_56802__$1[(2)]);
var statearr_56899_57196 = state_56802__$1;
(statearr_56899_57196[(5)] = ex56895);


var statearr_56900_57199 = state_56802__$1;
(statearr_56900_57199[(1)] = (7));

(statearr_56900_57199[(5)] = null);



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
var statearr_56907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56907[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56907[(1)] = (1));

return statearr_56907;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56802){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56802);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56912){var ex__32294__auto__ = e56912;
var statearr_56913_57202 = state_56802;
(statearr_56913_57202[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56802[(4)]))){
var statearr_56915_57203 = state_56802;
(statearr_56915_57203[(1)] = cljs.core.first((state_56802[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57204 = state_56802;
state_56802 = G__57204;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56802){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56916 = f__32362__auto__();
(statearr_56916[(6)] = c__32361__auto__);

return statearr_56916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56552","meta56552",-578164154,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56551");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56551");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56551.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56551 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56551(meta56552){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551(meta56552));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56551(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931 = (function (meta56932){
this.meta56932 = meta56932;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56933,meta56932__$1){
var self__ = this;
var _56933__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931(meta56932__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56933){
var self__ = this;
var _56933__$1 = this;
return self__.meta56932;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56935 = (arguments.length - (1));
switch (G__56935) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.prototype.apply = (function (self__,args56934){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56934)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_57001){
var state_val_57002 = (state_57001[(1)]);
if((state_val_57002 === (7))){
var inst_56952 = (state_57001[(2)]);
var inst_56953 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56954 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56955 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56954,78,inst_56952,"Closing input should flush remaining"];
var inst_56956 = cljs.core.PersistentHashMap.fromArrays(inst_56953,inst_56955);
var inst_56957 = cljs.test.report.call(null,inst_56956);
var state_57001__$1 = state_57001;
var statearr_57003_57213 = state_57001__$1;
(statearr_57003_57213[(2)] = inst_56957);

(statearr_57003_57213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (1))){
var inst_56936 = (state_57001[(7)]);
var inst_56938 = (state_57001[(8)]);
var inst_56936__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56937 = cljs.core.PersistentVector.EMPTY;
var inst_56938__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56937);
var inst_56939 = (function (){var input_ch = inst_56936__$1;
var results = inst_56938__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56940 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56941 = [inst_56936__$1,inst_56939];
var inst_56942 = cljs.core.PersistentHashMap.fromArrays(inst_56940,inst_56941);
var inst_56943 = bb_web_ds_tools.components.async_buffer.create(inst_56942);
var state_57001__$1 = (function (){var statearr_57006 = state_57001;
(statearr_57006[(7)] = inst_56936__$1);

(statearr_57006[(8)] = inst_56938__$1);

(statearr_57006[(9)] = inst_56943);

return statearr_57006;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57001__$1,(2),inst_56936__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_57002 === (4))){
var inst_56951 = (state_57001[(2)]);
var state_57001__$1 = (function (){var statearr_57009 = state_57001;
(statearr_57009[(10)] = inst_56951);

return statearr_57009;
})();
var statearr_57010_57214 = state_57001__$1;
(statearr_57010_57214[(2)] = null);

(statearr_57010_57214[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (6))){
var inst_56998 = (state_57001[(2)]);
var inst_56999 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_57001__$1 = (function (){var statearr_57011 = state_57001;
(statearr_57011[(11)] = inst_56998);

return statearr_57011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57001__$1,inst_56999);
} else {
if((state_val_57002 === (3))){
var inst_56936 = (state_57001[(7)]);
var inst_56947 = (state_57001[(2)]);
var inst_56948 = cljs.core.async.close_BANG_(inst_56936);
var inst_56949 = cljs.core.async.timeout((20));
var state_57001__$1 = (function (){var statearr_57012 = state_57001;
(statearr_57012[(12)] = inst_56947);

(statearr_57012[(13)] = inst_56948);

return statearr_57012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57001__$1,(4),inst_56949);
} else {
if((state_val_57002 === (2))){
var inst_56936 = (state_57001[(7)]);
var inst_56945 = (state_57001[(2)]);
var state_57001__$1 = (function (){var statearr_57013 = state_57001;
(statearr_57013[(14)] = inst_56945);

return statearr_57013;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57001__$1,(3),inst_56936,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_57002 === (11))){
var inst_56972 = (state_57001[(15)]);
var inst_56995 = (state_57001[(2)]);
var _ = (function (){var statearr_57014 = state_57001;
(statearr_57014[(4)] = cljs.core.rest((state_57001[(4)])));

return statearr_57014;
})();
var state_57001__$1 = (function (){var statearr_57015 = state_57001;
(statearr_57015[(16)] = inst_56995);

return statearr_57015;
})();
var statearr_57018_57218 = state_57001__$1;
(statearr_57018_57218[(2)] = inst_56972);

(statearr_57018_57218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (9))){
var inst_56971 = (state_57001[(17)]);
var inst_56974 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56975 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56976 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56977 = cljs.core.cons(inst_56976,inst_56971);
var inst_56978 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56975,78,inst_56977,"Closing input should flush remaining"];
var inst_56979 = cljs.core.PersistentHashMap.fromArrays(inst_56974,inst_56978);
var inst_56980 = cljs.test.report.call(null,inst_56979);
var state_57001__$1 = state_57001;
var statearr_57022_57219 = state_57001__$1;
(statearr_57022_57219[(2)] = inst_56980);

(statearr_57022_57219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (5))){
var inst_56938 = (state_57001[(8)]);
var inst_56971 = (state_57001[(17)]);
var inst_56972 = (state_57001[(15)]);
var _ = (function (){var statearr_57025 = state_57001;
(statearr_57025[(4)] = cljs.core.cons((8),(state_57001[(4)])));

return statearr_57025;
})();
var inst_56963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56964 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56965 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56966 = (new cljs.core.PersistentVector(null,2,(5),inst_56964,inst_56965,null));
var inst_56967 = [inst_56966];
var inst_56968 = (new cljs.core.PersistentVector(null,1,(5),inst_56963,inst_56967,null));
var inst_56969 = cljs.core.deref(inst_56938);
var inst_56970 = (new cljs.core.List(null,inst_56969,null,(1),null));
var inst_56971__$1 = (new cljs.core.List(null,inst_56968,inst_56970,(2),null));
var inst_56972__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56971__$1);
var state_57001__$1 = (function (){var statearr_57026 = state_57001;
(statearr_57026[(17)] = inst_56971__$1);

(statearr_57026[(15)] = inst_56972__$1);

return statearr_57026;
})();
if(cljs.core.truth_(inst_56972__$1)){
var statearr_57027_57221 = state_57001__$1;
(statearr_57027_57221[(1)] = (9));

} else {
var statearr_57028_57222 = state_57001__$1;
(statearr_57028_57222[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (10))){
var inst_56971 = (state_57001[(17)]);
var inst_56983 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56985 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56986 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56987 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56988 = cljs.core.cons(inst_56987,inst_56971);
var inst_56989 = (new cljs.core.List(null,inst_56988,null,(1),null));
var inst_56990 = (new cljs.core.List(null,inst_56986,inst_56989,(2),null));
var inst_56991 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56985,78,inst_56990,"Closing input should flush remaining"];
var inst_56992 = cljs.core.PersistentHashMap.fromArrays(inst_56983,inst_56991);
var inst_56993 = cljs.test.report.call(null,inst_56992);
var state_57001__$1 = state_57001;
var statearr_57029_57226 = state_57001__$1;
(statearr_57029_57226[(2)] = inst_56993);

(statearr_57029_57226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57002 === (8))){
var _ = (function (){var statearr_57030 = state_57001;
(statearr_57030[(4)] = cljs.core.rest((state_57001[(4)])));

return statearr_57030;
})();
var state_57001__$1 = state_57001;
var ex57024 = (state_57001__$1[(2)]);
var statearr_57031_57229 = state_57001__$1;
(statearr_57031_57229[(5)] = ex57024);


var statearr_57032_57230 = state_57001__$1;
(statearr_57032_57230[(1)] = (7));

(statearr_57032_57230[(5)] = null);



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
var statearr_57033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57033[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_57033[(1)] = (1));

return statearr_57033;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_57001){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_57001);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e57034){var ex__32294__auto__ = e57034;
var statearr_57035_57233 = state_57001;
(statearr_57035_57233[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_57001[(4)]))){
var statearr_57038_57234 = state_57001;
(statearr_57038_57234[(1)] = cljs.core.first((state_57001[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57235 = state_57001;
state_57001 = G__57235;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_57001){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_57001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_57043 = f__32362__auto__();
(statearr_57043[(6)] = c__32361__auto__);

return statearr_57043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56932","meta56932",626957309,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56931");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56931");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56931.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56931 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56931(meta56932){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931(meta56932));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56931(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
