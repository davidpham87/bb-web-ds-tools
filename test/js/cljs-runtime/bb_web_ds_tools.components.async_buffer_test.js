goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035 = (function (meta62036){
this.meta62036 = meta62036;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62037,meta62036__$1){
var self__ = this;
var _62037__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035(meta62036__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62037){
var self__ = this;
var _62037__$1 = this;
return self__.meta62036;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__62039 = (arguments.length - (1));
switch (G__62039) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.prototype.apply = (function (self__,args62038){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args62038)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_62212){
var state_val_62213 = (state_62212[(1)]);
if((state_val_62213 === (7))){
var inst_62056 = (state_62212[(2)]);
var inst_62057 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62060 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62061 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_62060,19,inst_62056,"Buffer should not flush automatically without timer"];
var inst_62062 = cljs.core.PersistentHashMap.fromArrays(inst_62057,inst_62061);
var inst_62063 = cljs.test.report.call(null,inst_62062);
var state_62212__$1 = state_62212;
var statearr_62215_62801 = state_62212__$1;
(statearr_62215_62801[(2)] = inst_62063);

(statearr_62215_62801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (20))){
var inst_62047 = (state_62212[(7)]);
var inst_62157 = (state_62212[(2)]);
var inst_62158 = (inst_62047.cljs$core$IFn$_invoke$arity$0 ? inst_62047.cljs$core$IFn$_invoke$arity$0() : inst_62047.call(null));
var inst_62159 = cljs.core.async.timeout((20));
var state_62212__$1 = (function (){var statearr_62216 = state_62212;
(statearr_62216[(8)] = inst_62157);

(statearr_62216[(9)] = inst_62158);

return statearr_62216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62212__$1,(21),inst_62159);
} else {
if((state_val_62213 === (27))){
var inst_62184 = (state_62212[(10)]);
var inst_62195 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62196 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62197 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62198 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62199 = cljs.core.cons(inst_62198,inst_62184);
var inst_62200 = (new cljs.core.List(null,inst_62199,null,(1),null));
var inst_62201 = (new cljs.core.List(null,inst_62197,inst_62200,(2),null));
var inst_62202 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_62196,29,inst_62201,"Subsequent flush should work"];
var inst_62203 = cljs.core.PersistentHashMap.fromArrays(inst_62195,inst_62202);
var inst_62204 = cljs.test.report.call(null,inst_62203);
var state_62212__$1 = state_62212;
var statearr_62217_62802 = state_62212__$1;
(statearr_62217_62802[(2)] = inst_62204);

(statearr_62217_62802[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (1))){
var inst_62040 = (state_62212[(11)]);
var inst_62042 = (state_62212[(12)]);
var inst_62040__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_62041 = cljs.core.PersistentVector.EMPTY;
var inst_62042__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_62041);
var inst_62043 = (function (){var input_ch = inst_62040__$1;
var results = inst_62042__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_62044 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_62045 = [inst_62040__$1,inst_62043];
var inst_62046 = cljs.core.PersistentHashMap.fromArrays(inst_62044,inst_62045);
var inst_62047 = bb_web_ds_tools.components.async_buffer.create(inst_62046);
var state_62212__$1 = (function (){var statearr_62218 = state_62212;
(statearr_62218[(11)] = inst_62040__$1);

(statearr_62218[(12)] = inst_62042__$1);

(statearr_62218[(7)] = inst_62047);

return statearr_62218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62212__$1,(2),inst_62040__$1,(1));
} else {
if((state_val_62213 === (24))){
var inst_62162 = (state_62212[(2)]);
var inst_62163 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62164 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62165 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_62164,29,inst_62162,"Subsequent flush should work"];
var inst_62166 = cljs.core.PersistentHashMap.fromArrays(inst_62163,inst_62165);
var inst_62167 = cljs.test.report.call(null,inst_62166);
var state_62212__$1 = state_62212;
var statearr_62219_62803 = state_62212__$1;
(statearr_62219_62803[(2)] = inst_62167);

(statearr_62219_62803[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (4))){
var inst_62054 = (state_62212[(2)]);
var state_62212__$1 = (function (){var statearr_62220 = state_62212;
(statearr_62220[(13)] = inst_62054);

return statearr_62220;
})();
var statearr_62221_62804 = state_62212__$1;
(statearr_62221_62804[(2)] = null);

(statearr_62221_62804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (15))){
var inst_62105 = (state_62212[(2)]);
var inst_62106 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62107 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62108 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_62107,24,inst_62105,"Manual flush should flush all items"];
var inst_62109 = cljs.core.PersistentHashMap.fromArrays(inst_62106,inst_62108);
var inst_62110 = cljs.test.report.call(null,inst_62109);
var state_62212__$1 = state_62212;
var statearr_62222_62805 = state_62212__$1;
(statearr_62222_62805[(2)] = inst_62110);

(statearr_62222_62805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (21))){
var inst_62161 = (state_62212[(2)]);
var state_62212__$1 = (function (){var statearr_62223 = state_62212;
(statearr_62223[(14)] = inst_62161);

return statearr_62223;
})();
var statearr_62224_62806 = state_62212__$1;
(statearr_62224_62806[(2)] = null);

(statearr_62224_62806[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (13))){
var inst_62042 = (state_62212[(12)]);
var inst_62127 = (state_62212[(15)]);
var inst_62128 = (state_62212[(16)]);
var _ = (function (){var statearr_62225 = state_62212;
(statearr_62225[(4)] = cljs.core.cons((16),(state_62212[(4)])));

return statearr_62225;
})();
var inst_62119 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62121 = [(1),(2)];
var inst_62122 = (new cljs.core.PersistentVector(null,2,(5),inst_62120,inst_62121,null));
var inst_62123 = [inst_62122];
var inst_62124 = (new cljs.core.PersistentVector(null,1,(5),inst_62119,inst_62123,null));
var inst_62125 = cljs.core.deref(inst_62042);
var inst_62126 = (new cljs.core.List(null,inst_62125,null,(1),null));
var inst_62127__$1 = (new cljs.core.List(null,inst_62124,inst_62126,(2),null));
var inst_62128__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_62127__$1);
var state_62212__$1 = (function (){var statearr_62226 = state_62212;
(statearr_62226[(15)] = inst_62127__$1);

(statearr_62226[(16)] = inst_62128__$1);

return statearr_62226;
})();
if(cljs.core.truth_(inst_62128__$1)){
var statearr_62227_62807 = state_62212__$1;
(statearr_62227_62807[(1)] = (17));

} else {
var statearr_62228_62808 = state_62212__$1;
(statearr_62228_62808[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (22))){
var inst_62042 = (state_62212[(12)]);
var inst_62184 = (state_62212[(10)]);
var inst_62185 = (state_62212[(17)]);
var _ = (function (){var statearr_62229 = state_62212;
(statearr_62229[(4)] = cljs.core.cons((25),(state_62212[(4)])));

return statearr_62229;
})();
var inst_62173 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62175 = [(1),(2)];
var inst_62176 = (new cljs.core.PersistentVector(null,2,(5),inst_62174,inst_62175,null));
var inst_62177 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62178 = [(3)];
var inst_62179 = (new cljs.core.PersistentVector(null,1,(5),inst_62177,inst_62178,null));
var inst_62180 = [inst_62176,inst_62179];
var inst_62181 = (new cljs.core.PersistentVector(null,2,(5),inst_62173,inst_62180,null));
var inst_62182 = cljs.core.deref(inst_62042);
var inst_62183 = (new cljs.core.List(null,inst_62182,null,(1),null));
var inst_62184__$1 = (new cljs.core.List(null,inst_62181,inst_62183,(2),null));
var inst_62185__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_62184__$1);
var state_62212__$1 = (function (){var statearr_62230 = state_62212;
(statearr_62230[(10)] = inst_62184__$1);

(statearr_62230[(17)] = inst_62185__$1);

return statearr_62230;
})();
if(cljs.core.truth_(inst_62185__$1)){
var statearr_62231_62809 = state_62212__$1;
(statearr_62231_62809[(1)] = (26));

} else {
var statearr_62232_62810 = state_62212__$1;
(statearr_62232_62810[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (6))){
var inst_62047 = (state_62212[(7)]);
var inst_62095 = (state_62212[(2)]);
var inst_62096 = (inst_62047.cljs$core$IFn$_invoke$arity$0 ? inst_62047.cljs$core$IFn$_invoke$arity$0() : inst_62047.call(null));
var inst_62097 = cljs.core.async.timeout((20));
var state_62212__$1 = (function (){var statearr_62234 = state_62212;
(statearr_62234[(18)] = inst_62095);

(statearr_62234[(19)] = inst_62096);

return statearr_62234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62212__$1,(12),inst_62097);
} else {
if((state_val_62213 === (28))){
var inst_62185 = (state_62212[(17)]);
var inst_62206 = (state_62212[(2)]);
var _ = (function (){var statearr_62239 = state_62212;
(statearr_62239[(4)] = cljs.core.rest((state_62212[(4)])));

return statearr_62239;
})();
var state_62212__$1 = (function (){var statearr_62240 = state_62212;
(statearr_62240[(20)] = inst_62206);

return statearr_62240;
})();
var statearr_62241_62811 = state_62212__$1;
(statearr_62241_62811[(2)] = inst_62185);

(statearr_62241_62811[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (25))){
var _ = (function (){var statearr_62242 = state_62212;
(statearr_62242[(4)] = cljs.core.rest((state_62212[(4)])));

return statearr_62242;
})();
var state_62212__$1 = state_62212;
var ex62233 = (state_62212__$1[(2)]);
var statearr_62247_62812 = state_62212__$1;
(statearr_62247_62812[(5)] = ex62233);


var statearr_62248_62813 = state_62212__$1;
(statearr_62248_62813[(1)] = (24));

(statearr_62248_62813[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (17))){
var inst_62127 = (state_62212[(15)]);
var inst_62130 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62131 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62132 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62133 = cljs.core.cons(inst_62132,inst_62127);
var inst_62134 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_62131,24,inst_62133,"Manual flush should flush all items"];
var inst_62135 = cljs.core.PersistentHashMap.fromArrays(inst_62130,inst_62134);
var inst_62136 = cljs.test.report.call(null,inst_62135);
var state_62212__$1 = state_62212;
var statearr_62250_62814 = state_62212__$1;
(statearr_62250_62814[(2)] = inst_62136);

(statearr_62250_62814[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (3))){
var inst_62051 = (state_62212[(2)]);
var inst_62052 = cljs.core.async.timeout((20));
var state_62212__$1 = (function (){var statearr_62251 = state_62212;
(statearr_62251[(21)] = inst_62051);

return statearr_62251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62212__$1,(4),inst_62052);
} else {
if((state_val_62213 === (12))){
var inst_62099 = (state_62212[(2)]);
var state_62212__$1 = (function (){var statearr_62253 = state_62212;
(statearr_62253[(22)] = inst_62099);

return statearr_62253;
})();
var statearr_62254_62815 = state_62212__$1;
(statearr_62254_62815[(2)] = null);

(statearr_62254_62815[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (2))){
var inst_62040 = (state_62212[(11)]);
var inst_62049 = (state_62212[(2)]);
var state_62212__$1 = (function (){var statearr_62255 = state_62212;
(statearr_62255[(23)] = inst_62049);

return statearr_62255;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62212__$1,(3),inst_62040,(2));
} else {
if((state_val_62213 === (23))){
var inst_62209 = (state_62212[(2)]);
var inst_62210 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_62212__$1 = (function (){var statearr_62256 = state_62212;
(statearr_62256[(24)] = inst_62209);

return statearr_62256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62212__$1,inst_62210);
} else {
if((state_val_62213 === (19))){
var inst_62128 = (state_62212[(16)]);
var inst_62152 = (state_62212[(2)]);
var _ = (function (){var statearr_62258 = state_62212;
(statearr_62258[(4)] = cljs.core.rest((state_62212[(4)])));

return statearr_62258;
})();
var state_62212__$1 = (function (){var statearr_62259 = state_62212;
(statearr_62259[(25)] = inst_62152);

return statearr_62259;
})();
var statearr_62260_62816 = state_62212__$1;
(statearr_62260_62816[(2)] = inst_62128);

(statearr_62260_62816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (11))){
var inst_62071 = (state_62212[(26)]);
var inst_62092 = (state_62212[(2)]);
var _ = (function (){var statearr_62261 = state_62212;
(statearr_62261[(4)] = cljs.core.rest((state_62212[(4)])));

return statearr_62261;
})();
var state_62212__$1 = (function (){var statearr_62262 = state_62212;
(statearr_62262[(27)] = inst_62092);

return statearr_62262;
})();
var statearr_62264_62817 = state_62212__$1;
(statearr_62264_62817[(2)] = inst_62071);

(statearr_62264_62817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (9))){
var inst_62070 = (state_62212[(28)]);
var inst_62073 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62074 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62075 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_62076 = cljs.core.cons(inst_62075,inst_62070);
var inst_62077 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_62074,19,inst_62076,"Buffer should not flush automatically without timer"];
var inst_62078 = cljs.core.PersistentHashMap.fromArrays(inst_62073,inst_62077);
var inst_62079 = cljs.test.report.call(null,inst_62078);
var state_62212__$1 = state_62212;
var statearr_62265_62818 = state_62212__$1;
(statearr_62265_62818[(2)] = inst_62079);

(statearr_62265_62818[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (5))){
var inst_62042 = (state_62212[(12)]);
var inst_62070 = (state_62212[(28)]);
var inst_62071 = (state_62212[(26)]);
var _ = (function (){var statearr_62266 = state_62212;
(statearr_62266[(4)] = cljs.core.cons((8),(state_62212[(4)])));

return statearr_62266;
})();
var inst_62069 = cljs.core.deref(inst_62042);
var inst_62070__$1 = (new cljs.core.List(null,inst_62069,null,(1),null));
var inst_62071__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_62070__$1);
var state_62212__$1 = (function (){var statearr_62267 = state_62212;
(statearr_62267[(28)] = inst_62070__$1);

(statearr_62267[(26)] = inst_62071__$1);

return statearr_62267;
})();
if(cljs.core.truth_(inst_62071__$1)){
var statearr_62268_62819 = state_62212__$1;
(statearr_62268_62819[(1)] = (9));

} else {
var statearr_62270_62820 = state_62212__$1;
(statearr_62270_62820[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (14))){
var inst_62040 = (state_62212[(11)]);
var inst_62155 = (state_62212[(2)]);
var state_62212__$1 = (function (){var statearr_62275 = state_62212;
(statearr_62275[(29)] = inst_62155);

return statearr_62275;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62212__$1,(20),inst_62040,(3));
} else {
if((state_val_62213 === (26))){
var inst_62184 = (state_62212[(10)]);
var inst_62187 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62188 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62189 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62190 = cljs.core.cons(inst_62189,inst_62184);
var inst_62191 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_62188,29,inst_62190,"Subsequent flush should work"];
var inst_62192 = cljs.core.PersistentHashMap.fromArrays(inst_62187,inst_62191);
var inst_62193 = cljs.test.report.call(null,inst_62192);
var state_62212__$1 = state_62212;
var statearr_62276_62821 = state_62212__$1;
(statearr_62276_62821[(2)] = inst_62193);

(statearr_62276_62821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (16))){
var _ = (function (){var statearr_62277 = state_62212;
(statearr_62277[(4)] = cljs.core.rest((state_62212[(4)])));

return statearr_62277;
})();
var state_62212__$1 = state_62212;
var ex62274 = (state_62212__$1[(2)]);
var statearr_62278_62822 = state_62212__$1;
(statearr_62278_62822[(5)] = ex62274);


var statearr_62279_62823 = state_62212__$1;
(statearr_62279_62823[(1)] = (15));

(statearr_62279_62823[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (10))){
var inst_62070 = (state_62212[(28)]);
var inst_62081 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62082 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62083 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62084 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_62085 = cljs.core.cons(inst_62084,inst_62070);
var inst_62086 = (new cljs.core.List(null,inst_62085,null,(1),null));
var inst_62087 = (new cljs.core.List(null,inst_62083,inst_62086,(2),null));
var inst_62088 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_62082,19,inst_62087,"Buffer should not flush automatically without timer"];
var inst_62089 = cljs.core.PersistentHashMap.fromArrays(inst_62081,inst_62088);
var inst_62090 = cljs.test.report.call(null,inst_62089);
var state_62212__$1 = state_62212;
var statearr_62281_62824 = state_62212__$1;
(statearr_62281_62824[(2)] = inst_62090);

(statearr_62281_62824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (18))){
var inst_62127 = (state_62212[(15)]);
var inst_62138 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62139 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62143 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62144 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62145 = cljs.core.cons(inst_62144,inst_62127);
var inst_62146 = (new cljs.core.List(null,inst_62145,null,(1),null));
var inst_62147 = (new cljs.core.List(null,inst_62143,inst_62146,(2),null));
var inst_62148 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_62139,24,inst_62147,"Manual flush should flush all items"];
var inst_62149 = cljs.core.PersistentHashMap.fromArrays(inst_62138,inst_62148);
var inst_62150 = cljs.test.report.call(null,inst_62149);
var state_62212__$1 = state_62212;
var statearr_62282_62825 = state_62212__$1;
(statearr_62282_62825[(2)] = inst_62150);

(statearr_62282_62825[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62213 === (8))){
var _ = (function (){var statearr_62283 = state_62212;
(statearr_62283[(4)] = cljs.core.rest((state_62212[(4)])));

return statearr_62283;
})();
var state_62212__$1 = state_62212;
var ex62280 = (state_62212__$1[(2)]);
var statearr_62284_62826 = state_62212__$1;
(statearr_62284_62826[(5)] = ex62280);


var statearr_62285_62827 = state_62212__$1;
(statearr_62285_62827[(1)] = (7));

(statearr_62285_62827[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0 = (function (){
var statearr_62286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62286[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_62286[(1)] = (1));

return statearr_62286;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_62212){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_62212);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e62292){var ex__32350__auto__ = e62292;
var statearr_62293_62828 = state_62212;
(statearr_62293_62828[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_62212[(4)]))){
var statearr_62294_62829 = state_62212;
(statearr_62294_62829[(1)] = cljs.core.first((state_62212[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62830 = state_62212;
state_62212 = G__62830;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_62212){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_62212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_62295 = f__32432__auto__();
(statearr_62295[(6)] = c__32431__auto__);

return statearr_62295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta62036","meta62036",1242061301,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62035");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62035");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62035.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test62035 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test62035(meta62036){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035(meta62036));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62035(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296 = (function (meta62297){
this.meta62297 = meta62297;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62298,meta62297__$1){
var self__ = this;
var _62298__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296(meta62297__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62298){
var self__ = this;
var _62298__$1 = this;
return self__.meta62297;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__62300 = (arguments.length - (1));
switch (G__62300) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.prototype.apply = (function (self__,args62299){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args62299)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_62517){
var state_val_62518 = (state_62517[(1)]);
if((state_val_62518 === (7))){
var inst_62316 = (state_62517[(2)]);
var inst_62317 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62318 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62319 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_62318,47,inst_62316,"Should not flush before timeout"];
var inst_62320 = cljs.core.PersistentHashMap.fromArrays(inst_62317,inst_62319);
var inst_62321 = cljs.test.report.call(null,inst_62320);
var state_62517__$1 = state_62517;
var statearr_62520_62832 = state_62517__$1;
(statearr_62520_62832[(2)] = inst_62321);

(statearr_62520_62832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (20))){
var inst_62403 = (state_62517[(2)]);
var inst_62404 = cljs.core.async.timeout((50));
var state_62517__$1 = (function (){var statearr_62521 = state_62517;
(statearr_62521[(7)] = inst_62403);

return statearr_62521;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62517__$1,(21),inst_62404);
} else {
if((state_val_62518 === (27))){
var _ = (function (){var statearr_62522 = state_62517;
(statearr_62522[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62522;
})();
var state_62517__$1 = state_62517;
var ex62519 = (state_62517__$1[(2)]);
var statearr_62523_62833 = state_62517__$1;
(statearr_62523_62833[(5)] = ex62519);


var statearr_62525_62834 = state_62517__$1;
(statearr_62525_62834[(1)] = (26));

(statearr_62525_62834[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (1))){
var inst_62301 = (state_62517[(8)]);
var inst_62303 = (state_62517[(9)]);
var inst_62301__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_62302 = cljs.core.PersistentVector.EMPTY;
var inst_62303__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_62302);
var inst_62304 = (function (){var input_ch = inst_62301__$1;
var results = inst_62303__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_62305 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_62306 = [inst_62301__$1,(100),inst_62304];
var inst_62307 = cljs.core.PersistentHashMap.fromArrays(inst_62305,inst_62306);
var inst_62308 = bb_web_ds_tools.components.async_buffer.create(inst_62307);
var state_62517__$1 = (function (){var statearr_62526 = state_62517;
(statearr_62526[(8)] = inst_62301__$1);

(statearr_62526[(9)] = inst_62303__$1);

(statearr_62526[(10)] = inst_62308);

return statearr_62526;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62517__$1,(2),inst_62301__$1,(1));
} else {
if((state_val_62518 === (24))){
var inst_62303 = (state_62517[(9)]);
var inst_62431 = (state_62517[(11)]);
var inst_62432 = (state_62517[(12)]);
var _ = (function (){var statearr_62527 = state_62517;
(statearr_62527[(4)] = cljs.core.cons((27),(state_62517[(4)])));

return statearr_62527;
})();
var inst_62423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62425 = [(1),(2)];
var inst_62426 = (new cljs.core.PersistentVector(null,2,(5),inst_62424,inst_62425,null));
var inst_62427 = [inst_62426];
var inst_62428 = (new cljs.core.PersistentVector(null,1,(5),inst_62423,inst_62427,null));
var inst_62429 = cljs.core.deref(inst_62303);
var inst_62430 = (new cljs.core.List(null,inst_62429,null,(1),null));
var inst_62431__$1 = (new cljs.core.List(null,inst_62428,inst_62430,(2),null));
var inst_62432__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_62431__$1);
var state_62517__$1 = (function (){var statearr_62528 = state_62517;
(statearr_62528[(11)] = inst_62431__$1);

(statearr_62528[(12)] = inst_62432__$1);

return statearr_62528;
})();
if(cljs.core.truth_(inst_62432__$1)){
var statearr_62529_62835 = state_62517__$1;
(statearr_62529_62835[(1)] = (28));

} else {
var statearr_62530_62836 = state_62517__$1;
(statearr_62530_62836[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (4))){
var inst_62315 = (state_62517[(2)]);
var state_62517__$1 = (function (){var statearr_62531 = state_62517;
(statearr_62531[(13)] = inst_62315);

return statearr_62531;
})();
var statearr_62535_62837 = state_62517__$1;
(statearr_62535_62837[(2)] = null);

(statearr_62535_62837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (15))){
var inst_62357 = (state_62517[(2)]);
var inst_62358 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62359 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62360 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_62359,50,inst_62357,"Should flush after timeout"];
var inst_62361 = cljs.core.PersistentHashMap.fromArrays(inst_62358,inst_62360);
var inst_62362 = cljs.test.report.call(null,inst_62361);
var state_62517__$1 = state_62517;
var statearr_62536_62838 = state_62517__$1;
(statearr_62536_62838[(2)] = inst_62362);

(statearr_62536_62838[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (21))){
var inst_62301 = (state_62517[(8)]);
var inst_62406 = (state_62517[(2)]);
var state_62517__$1 = (function (){var statearr_62537 = state_62517;
(statearr_62537[(14)] = inst_62406);

return statearr_62537;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62517__$1,(22),inst_62301,(4));
} else {
if((state_val_62518 === (31))){
var inst_62459 = (state_62517[(2)]);
var state_62517__$1 = (function (){var statearr_62538 = state_62517;
(statearr_62538[(15)] = inst_62459);

return statearr_62538;
})();
var statearr_62539_62839 = state_62517__$1;
(statearr_62539_62839[(2)] = null);

(statearr_62539_62839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (32))){
var inst_62303 = (state_62517[(9)]);
var inst_62482 = (state_62517[(16)]);
var inst_62483 = (state_62517[(17)]);
var _ = (function (){var statearr_62540 = state_62517;
(statearr_62540[(4)] = cljs.core.cons((35),(state_62517[(4)])));

return statearr_62540;
})();
var inst_62471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62472 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62473 = [(1),(2)];
var inst_62474 = (new cljs.core.PersistentVector(null,2,(5),inst_62472,inst_62473,null));
var inst_62475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62476 = [(3),(4)];
var inst_62477 = (new cljs.core.PersistentVector(null,2,(5),inst_62475,inst_62476,null));
var inst_62478 = [inst_62474,inst_62477];
var inst_62479 = (new cljs.core.PersistentVector(null,2,(5),inst_62471,inst_62478,null));
var inst_62480 = cljs.core.deref(inst_62303);
var inst_62481 = (new cljs.core.List(null,inst_62480,null,(1),null));
var inst_62482__$1 = (new cljs.core.List(null,inst_62479,inst_62481,(2),null));
var inst_62483__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_62482__$1);
var state_62517__$1 = (function (){var statearr_62541 = state_62517;
(statearr_62541[(16)] = inst_62482__$1);

(statearr_62541[(17)] = inst_62483__$1);

return statearr_62541;
})();
if(cljs.core.truth_(inst_62483__$1)){
var statearr_62542_62840 = state_62517__$1;
(statearr_62542_62840[(1)] = (36));

} else {
var statearr_62543_62841 = state_62517__$1;
(statearr_62543_62841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (33))){
var inst_62513 = (state_62517[(2)]);
var inst_62514 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_62517__$1 = (function (){var statearr_62544 = state_62517;
(statearr_62544[(18)] = inst_62513);

return statearr_62544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62517__$1,inst_62514);
} else {
if((state_val_62518 === (13))){
var inst_62303 = (state_62517[(9)]);
var inst_62376 = (state_62517[(19)]);
var inst_62377 = (state_62517[(20)]);
var _ = (function (){var statearr_62545 = state_62517;
(statearr_62545[(4)] = cljs.core.cons((16),(state_62517[(4)])));

return statearr_62545;
})();
var inst_62368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62370 = [(1),(2)];
var inst_62371 = (new cljs.core.PersistentVector(null,2,(5),inst_62369,inst_62370,null));
var inst_62372 = [inst_62371];
var inst_62373 = (new cljs.core.PersistentVector(null,1,(5),inst_62368,inst_62372,null));
var inst_62374 = cljs.core.deref(inst_62303);
var inst_62375 = (new cljs.core.List(null,inst_62374,null,(1),null));
var inst_62376__$1 = (new cljs.core.List(null,inst_62373,inst_62375,(2),null));
var inst_62377__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_62376__$1);
var state_62517__$1 = (function (){var statearr_62546 = state_62517;
(statearr_62546[(19)] = inst_62376__$1);

(statearr_62546[(20)] = inst_62377__$1);

return statearr_62546;
})();
if(cljs.core.truth_(inst_62377__$1)){
var statearr_62547_62842 = state_62517__$1;
(statearr_62547_62842[(1)] = (17));

} else {
var statearr_62548_62843 = state_62517__$1;
(statearr_62548_62843[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (22))){
var inst_62408 = (state_62517[(2)]);
var inst_62409 = cljs.core.async.timeout((20));
var state_62517__$1 = (function (){var statearr_62558 = state_62517;
(statearr_62558[(21)] = inst_62408);

return statearr_62558;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62517__$1,(23),inst_62409);
} else {
if((state_val_62518 === (36))){
var inst_62482 = (state_62517[(16)]);
var inst_62491 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62492 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62493 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62494 = cljs.core.cons(inst_62493,inst_62482);
var inst_62495 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_62492,60,inst_62494,"Should flush 3,4 after timeout from first message"];
var inst_62496 = cljs.core.PersistentHashMap.fromArrays(inst_62491,inst_62495);
var inst_62497 = cljs.test.report.call(null,inst_62496);
var state_62517__$1 = state_62517;
var statearr_62559_62844 = state_62517__$1;
(statearr_62559_62844[(2)] = inst_62497);

(statearr_62559_62844[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (29))){
var inst_62431 = (state_62517[(11)]);
var inst_62442 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62443 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62444 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62445 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62446 = cljs.core.cons(inst_62445,inst_62431);
var inst_62447 = (new cljs.core.List(null,inst_62446,null,(1),null));
var inst_62448 = (new cljs.core.List(null,inst_62444,inst_62447,(2),null));
var inst_62449 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_62443,57,inst_62448,"Should not flush 3,4 yet"];
var inst_62450 = cljs.core.PersistentHashMap.fromArrays(inst_62442,inst_62449);
var inst_62451 = cljs.test.report.call(null,inst_62450);
var state_62517__$1 = state_62517;
var statearr_62560_62845 = state_62517__$1;
(statearr_62560_62845[(2)] = inst_62451);

(statearr_62560_62845[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (6))){
var inst_62353 = (state_62517[(2)]);
var inst_62354 = cljs.core.async.timeout((100));
var state_62517__$1 = (function (){var statearr_62561 = state_62517;
(statearr_62561[(22)] = inst_62353);

return statearr_62561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62517__$1,(12),inst_62354);
} else {
if((state_val_62518 === (28))){
var inst_62431 = (state_62517[(11)]);
var inst_62434 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62435 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62436 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62437 = cljs.core.cons(inst_62436,inst_62431);
var inst_62438 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_62435,57,inst_62437,"Should not flush 3,4 yet"];
var inst_62439 = cljs.core.PersistentHashMap.fromArrays(inst_62434,inst_62438);
var inst_62440 = cljs.test.report.call(null,inst_62439);
var state_62517__$1 = state_62517;
var statearr_62572_62846 = state_62517__$1;
(statearr_62572_62846[(2)] = inst_62440);

(statearr_62572_62846[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (25))){
var inst_62456 = (state_62517[(2)]);
var inst_62457 = cljs.core.async.timeout((80));
var state_62517__$1 = (function (){var statearr_62573 = state_62517;
(statearr_62573[(23)] = inst_62456);

return statearr_62573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62517__$1,(31),inst_62457);
} else {
if((state_val_62518 === (34))){
var inst_62460 = (state_62517[(2)]);
var inst_62461 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62462 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62463 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_62462,60,inst_62460,"Should flush 3,4 after timeout from first message"];
var inst_62464 = cljs.core.PersistentHashMap.fromArrays(inst_62461,inst_62463);
var inst_62465 = cljs.test.report.call(null,inst_62464);
var state_62517__$1 = state_62517;
var statearr_62574_62847 = state_62517__$1;
(statearr_62574_62847[(2)] = inst_62465);

(statearr_62574_62847[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (17))){
var inst_62376 = (state_62517[(19)]);
var inst_62379 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62380 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62381 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62382 = cljs.core.cons(inst_62381,inst_62376);
var inst_62383 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_62380,50,inst_62382,"Should flush after timeout"];
var inst_62384 = cljs.core.PersistentHashMap.fromArrays(inst_62379,inst_62383);
var inst_62385 = cljs.test.report.call(null,inst_62384);
var state_62517__$1 = state_62517;
var statearr_62575_62848 = state_62517__$1;
(statearr_62575_62848[(2)] = inst_62385);

(statearr_62575_62848[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (3))){
var inst_62312 = (state_62517[(2)]);
var inst_62313 = cljs.core.async.timeout((50));
var state_62517__$1 = (function (){var statearr_62576 = state_62517;
(statearr_62576[(24)] = inst_62312);

return statearr_62576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62517__$1,(4),inst_62313);
} else {
if((state_val_62518 === (12))){
var inst_62356 = (state_62517[(2)]);
var state_62517__$1 = (function (){var statearr_62577 = state_62517;
(statearr_62577[(25)] = inst_62356);

return statearr_62577;
})();
var statearr_62578_62849 = state_62517__$1;
(statearr_62578_62849[(2)] = null);

(statearr_62578_62849[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (2))){
var inst_62301 = (state_62517[(8)]);
var inst_62310 = (state_62517[(2)]);
var state_62517__$1 = (function (){var statearr_62582 = state_62517;
(statearr_62582[(26)] = inst_62310);

return statearr_62582;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62517__$1,(3),inst_62301,(2));
} else {
if((state_val_62518 === (23))){
var inst_62411 = (state_62517[(2)]);
var state_62517__$1 = (function (){var statearr_62583 = state_62517;
(statearr_62583[(27)] = inst_62411);

return statearr_62583;
})();
var statearr_62584_62850 = state_62517__$1;
(statearr_62584_62850[(2)] = null);

(statearr_62584_62850[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (35))){
var _ = (function (){var statearr_62585 = state_62517;
(statearr_62585[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62585;
})();
var state_62517__$1 = state_62517;
var ex62579 = (state_62517__$1[(2)]);
var statearr_62586_62851 = state_62517__$1;
(statearr_62586_62851[(5)] = ex62579);


var statearr_62587_62852 = state_62517__$1;
(statearr_62587_62852[(1)] = (34));

(statearr_62587_62852[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (19))){
var inst_62377 = (state_62517[(20)]);
var inst_62398 = (state_62517[(2)]);
var _ = (function (){var statearr_62588 = state_62517;
(statearr_62588[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62588;
})();
var state_62517__$1 = (function (){var statearr_62589 = state_62517;
(statearr_62589[(28)] = inst_62398);

return statearr_62589;
})();
var statearr_62590_62853 = state_62517__$1;
(statearr_62590_62853[(2)] = inst_62377);

(statearr_62590_62853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (11))){
var inst_62329 = (state_62517[(29)]);
var inst_62350 = (state_62517[(2)]);
var _ = (function (){var statearr_62591 = state_62517;
(statearr_62591[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62591;
})();
var state_62517__$1 = (function (){var statearr_62592 = state_62517;
(statearr_62592[(30)] = inst_62350);

return statearr_62592;
})();
var statearr_62593_62854 = state_62517__$1;
(statearr_62593_62854[(2)] = inst_62329);

(statearr_62593_62854[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (9))){
var inst_62328 = (state_62517[(31)]);
var inst_62331 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62332 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62333 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_62334 = cljs.core.cons(inst_62333,inst_62328);
var inst_62335 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_62332,47,inst_62334,"Should not flush before timeout"];
var inst_62336 = cljs.core.PersistentHashMap.fromArrays(inst_62331,inst_62335);
var inst_62337 = cljs.test.report.call(null,inst_62336);
var state_62517__$1 = state_62517;
var statearr_62599_62855 = state_62517__$1;
(statearr_62599_62855[(2)] = inst_62337);

(statearr_62599_62855[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (5))){
var inst_62303 = (state_62517[(9)]);
var inst_62328 = (state_62517[(31)]);
var inst_62329 = (state_62517[(29)]);
var _ = (function (){var statearr_62600 = state_62517;
(statearr_62600[(4)] = cljs.core.cons((8),(state_62517[(4)])));

return statearr_62600;
})();
var inst_62327 = cljs.core.deref(inst_62303);
var inst_62328__$1 = (new cljs.core.List(null,inst_62327,null,(1),null));
var inst_62329__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_62328__$1);
var state_62517__$1 = (function (){var statearr_62602 = state_62517;
(statearr_62602[(31)] = inst_62328__$1);

(statearr_62602[(29)] = inst_62329__$1);

return statearr_62602;
})();
if(cljs.core.truth_(inst_62329__$1)){
var statearr_62603_62856 = state_62517__$1;
(statearr_62603_62856[(1)] = (9));

} else {
var statearr_62604_62857 = state_62517__$1;
(statearr_62604_62857[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (14))){
var inst_62301 = (state_62517[(8)]);
var inst_62401 = (state_62517[(2)]);
var state_62517__$1 = (function (){var statearr_62606 = state_62517;
(statearr_62606[(32)] = inst_62401);

return statearr_62606;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62517__$1,(20),inst_62301,(3));
} else {
if((state_val_62518 === (26))){
var inst_62412 = (state_62517[(2)]);
var inst_62413 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62414 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62415 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_62414,57,inst_62412,"Should not flush 3,4 yet"];
var inst_62416 = cljs.core.PersistentHashMap.fromArrays(inst_62413,inst_62415);
var inst_62417 = cljs.test.report.call(null,inst_62416);
var state_62517__$1 = state_62517;
var statearr_62609_62858 = state_62517__$1;
(statearr_62609_62858[(2)] = inst_62417);

(statearr_62609_62858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (16))){
var _ = (function (){var statearr_62610 = state_62517;
(statearr_62610[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62610;
})();
var state_62517__$1 = state_62517;
var ex62605 = (state_62517__$1[(2)]);
var statearr_62614_62859 = state_62517__$1;
(statearr_62614_62859[(5)] = ex62605);


var statearr_62641_62860 = state_62517__$1;
(statearr_62641_62860[(1)] = (15));

(statearr_62641_62860[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (38))){
var inst_62483 = (state_62517[(17)]);
var inst_62510 = (state_62517[(2)]);
var _ = (function (){var statearr_62644 = state_62517;
(statearr_62644[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62644;
})();
var state_62517__$1 = (function (){var statearr_62646 = state_62517;
(statearr_62646[(33)] = inst_62510);

return statearr_62646;
})();
var statearr_62647_62861 = state_62517__$1;
(statearr_62647_62861[(2)] = inst_62483);

(statearr_62647_62861[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (30))){
var inst_62432 = (state_62517[(12)]);
var inst_62453 = (state_62517[(2)]);
var _ = (function (){var statearr_62648 = state_62517;
(statearr_62648[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62648;
})();
var state_62517__$1 = (function (){var statearr_62651 = state_62517;
(statearr_62651[(34)] = inst_62453);

return statearr_62651;
})();
var statearr_62652_62862 = state_62517__$1;
(statearr_62652_62862[(2)] = inst_62432);

(statearr_62652_62862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (10))){
var inst_62328 = (state_62517[(31)]);
var inst_62339 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62340 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62341 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62342 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_62343 = cljs.core.cons(inst_62342,inst_62328);
var inst_62344 = (new cljs.core.List(null,inst_62343,null,(1),null));
var inst_62345 = (new cljs.core.List(null,inst_62341,inst_62344,(2),null));
var inst_62346 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_62340,47,inst_62345,"Should not flush before timeout"];
var inst_62347 = cljs.core.PersistentHashMap.fromArrays(inst_62339,inst_62346);
var inst_62348 = cljs.test.report.call(null,inst_62347);
var state_62517__$1 = state_62517;
var statearr_62653_62863 = state_62517__$1;
(statearr_62653_62863[(2)] = inst_62348);

(statearr_62653_62863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (18))){
var inst_62376 = (state_62517[(19)]);
var inst_62387 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62388 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62389 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62390 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62391 = cljs.core.cons(inst_62390,inst_62376);
var inst_62392 = (new cljs.core.List(null,inst_62391,null,(1),null));
var inst_62393 = (new cljs.core.List(null,inst_62389,inst_62392,(2),null));
var inst_62394 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_62388,50,inst_62393,"Should flush after timeout"];
var inst_62395 = cljs.core.PersistentHashMap.fromArrays(inst_62387,inst_62394);
var inst_62396 = cljs.test.report.call(null,inst_62395);
var state_62517__$1 = state_62517;
var statearr_62657_62864 = state_62517__$1;
(statearr_62657_62864[(2)] = inst_62396);

(statearr_62657_62864[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (37))){
var inst_62482 = (state_62517[(16)]);
var inst_62499 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62500 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62501 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62502 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62503 = cljs.core.cons(inst_62502,inst_62482);
var inst_62504 = (new cljs.core.List(null,inst_62503,null,(1),null));
var inst_62505 = (new cljs.core.List(null,inst_62501,inst_62504,(2),null));
var inst_62506 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_62500,60,inst_62505,"Should flush 3,4 after timeout from first message"];
var inst_62507 = cljs.core.PersistentHashMap.fromArrays(inst_62499,inst_62506);
var inst_62508 = cljs.test.report.call(null,inst_62507);
var state_62517__$1 = state_62517;
var statearr_62673_62865 = state_62517__$1;
(statearr_62673_62865[(2)] = inst_62508);

(statearr_62673_62865[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62518 === (8))){
var _ = (function (){var statearr_62674 = state_62517;
(statearr_62674[(4)] = cljs.core.rest((state_62517[(4)])));

return statearr_62674;
})();
var state_62517__$1 = state_62517;
var ex62654 = (state_62517__$1[(2)]);
var statearr_62675_62866 = state_62517__$1;
(statearr_62675_62866[(5)] = ex62654);


var statearr_62676_62867 = state_62517__$1;
(statearr_62676_62867[(1)] = (7));

(statearr_62676_62867[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0 = (function (){
var statearr_62677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62677[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_62677[(1)] = (1));

return statearr_62677;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_62517){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_62517);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e62679){var ex__32350__auto__ = e62679;
var statearr_62684_62868 = state_62517;
(statearr_62684_62868[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_62517[(4)]))){
var statearr_62685_62869 = state_62517;
(statearr_62685_62869[(1)] = cljs.core.first((state_62517[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62870 = state_62517;
state_62517 = G__62870;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_62517){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_62517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_62686 = f__32432__auto__();
(statearr_62686[(6)] = c__32431__auto__);

return statearr_62686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta62297","meta62297",-813863086,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62296");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62296");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62296.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test62296 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test62296(meta62297){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296(meta62297));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62296(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687 = (function (meta62688){
this.meta62688 = meta62688;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62689,meta62688__$1){
var self__ = this;
var _62689__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687(meta62688__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62689){
var self__ = this;
var _62689__$1 = this;
return self__.meta62688;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__62691 = (arguments.length - (1));
switch (G__62691) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.prototype.apply = (function (self__,args62690){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args62690)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32432__auto__ = (function (){var switch__32346__auto__ = (function (state_62764){
var state_val_62765 = (state_62764[(1)]);
if((state_val_62765 === (7))){
var inst_62709 = (state_62764[(2)]);
var inst_62710 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62711 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62712 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_62711,78,inst_62709,"Closing input should flush remaining"];
var inst_62713 = cljs.core.PersistentHashMap.fromArrays(inst_62710,inst_62712);
var inst_62714 = cljs.test.report.call(null,inst_62713);
var state_62764__$1 = state_62764;
var statearr_62766_62872 = state_62764__$1;
(statearr_62766_62872[(2)] = inst_62714);

(statearr_62766_62872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62765 === (1))){
var inst_62692 = (state_62764[(7)]);
var inst_62694 = (state_62764[(8)]);
var inst_62692__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_62693 = cljs.core.PersistentVector.EMPTY;
var inst_62694__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_62693);
var inst_62695 = (function (){var input_ch = inst_62692__$1;
var results = inst_62694__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_62696 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_62697 = [inst_62692__$1,inst_62695];
var inst_62698 = cljs.core.PersistentHashMap.fromArrays(inst_62696,inst_62697);
var inst_62699 = bb_web_ds_tools.components.async_buffer.create(inst_62698);
var state_62764__$1 = (function (){var statearr_62767 = state_62764;
(statearr_62767[(7)] = inst_62692__$1);

(statearr_62767[(8)] = inst_62694__$1);

(statearr_62767[(9)] = inst_62699);

return statearr_62767;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62764__$1,(2),inst_62692__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_62765 === (4))){
var inst_62707 = (state_62764[(2)]);
var state_62764__$1 = (function (){var statearr_62771 = state_62764;
(statearr_62771[(10)] = inst_62707);

return statearr_62771;
})();
var statearr_62772_62873 = state_62764__$1;
(statearr_62772_62873[(2)] = null);

(statearr_62772_62873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62765 === (6))){
var inst_62753 = (state_62764[(2)]);
var inst_62754 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_62764__$1 = (function (){var statearr_62773 = state_62764;
(statearr_62773[(11)] = inst_62753);

return statearr_62773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62764__$1,inst_62754);
} else {
if((state_val_62765 === (3))){
var inst_62692 = (state_62764[(7)]);
var inst_62703 = (state_62764[(2)]);
var inst_62704 = cljs.core.async.close_BANG_(inst_62692);
var inst_62705 = cljs.core.async.timeout((20));
var state_62764__$1 = (function (){var statearr_62774 = state_62764;
(statearr_62774[(12)] = inst_62703);

(statearr_62774[(13)] = inst_62704);

return statearr_62774;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62764__$1,(4),inst_62705);
} else {
if((state_val_62765 === (2))){
var inst_62692 = (state_62764[(7)]);
var inst_62701 = (state_62764[(2)]);
var state_62764__$1 = (function (){var statearr_62775 = state_62764;
(statearr_62775[(14)] = inst_62701);

return statearr_62775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62764__$1,(3),inst_62692,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_62765 === (11))){
var inst_62729 = (state_62764[(15)]);
var inst_62750 = (state_62764[(2)]);
var _ = (function (){var statearr_62776 = state_62764;
(statearr_62776[(4)] = cljs.core.rest((state_62764[(4)])));

return statearr_62776;
})();
var state_62764__$1 = (function (){var statearr_62777 = state_62764;
(statearr_62777[(16)] = inst_62750);

return statearr_62777;
})();
var statearr_62784_62874 = state_62764__$1;
(statearr_62784_62874[(2)] = inst_62729);

(statearr_62784_62874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62765 === (9))){
var inst_62728 = (state_62764[(17)]);
var inst_62731 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62732 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62733 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62734 = cljs.core.cons(inst_62733,inst_62728);
var inst_62735 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_62732,78,inst_62734,"Closing input should flush remaining"];
var inst_62736 = cljs.core.PersistentHashMap.fromArrays(inst_62731,inst_62735);
var inst_62737 = cljs.test.report.call(null,inst_62736);
var state_62764__$1 = state_62764;
var statearr_62785_62875 = state_62764__$1;
(statearr_62785_62875[(2)] = inst_62737);

(statearr_62785_62875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62765 === (5))){
var inst_62694 = (state_62764[(8)]);
var inst_62728 = (state_62764[(17)]);
var inst_62729 = (state_62764[(15)]);
var _ = (function (){var statearr_62787 = state_62764;
(statearr_62787[(4)] = cljs.core.cons((8),(state_62764[(4)])));

return statearr_62787;
})();
var inst_62720 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62722 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_62723 = (new cljs.core.PersistentVector(null,2,(5),inst_62721,inst_62722,null));
var inst_62724 = [inst_62723];
var inst_62725 = (new cljs.core.PersistentVector(null,1,(5),inst_62720,inst_62724,null));
var inst_62726 = cljs.core.deref(inst_62694);
var inst_62727 = (new cljs.core.List(null,inst_62726,null,(1),null));
var inst_62728__$1 = (new cljs.core.List(null,inst_62725,inst_62727,(2),null));
var inst_62729__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_62728__$1);
var state_62764__$1 = (function (){var statearr_62788 = state_62764;
(statearr_62788[(17)] = inst_62728__$1);

(statearr_62788[(15)] = inst_62729__$1);

return statearr_62788;
})();
if(cljs.core.truth_(inst_62729__$1)){
var statearr_62789_62876 = state_62764__$1;
(statearr_62789_62876[(1)] = (9));

} else {
var statearr_62790_62877 = state_62764__$1;
(statearr_62790_62877[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62765 === (10))){
var inst_62728 = (state_62764[(17)]);
var inst_62739 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_62740 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_62741 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_62742 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_62743 = cljs.core.cons(inst_62742,inst_62728);
var inst_62744 = (new cljs.core.List(null,inst_62743,null,(1),null));
var inst_62745 = (new cljs.core.List(null,inst_62741,inst_62744,(2),null));
var inst_62746 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_62740,78,inst_62745,"Closing input should flush remaining"];
var inst_62747 = cljs.core.PersistentHashMap.fromArrays(inst_62739,inst_62746);
var inst_62748 = cljs.test.report.call(null,inst_62747);
var state_62764__$1 = state_62764;
var statearr_62791_62881 = state_62764__$1;
(statearr_62791_62881[(2)] = inst_62748);

(statearr_62791_62881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62765 === (8))){
var _ = (function (){var statearr_62792 = state_62764;
(statearr_62792[(4)] = cljs.core.rest((state_62764[(4)])));

return statearr_62792;
})();
var state_62764__$1 = state_62764;
var ex62786 = (state_62764__$1[(2)]);
var statearr_62793_62883 = state_62764__$1;
(statearr_62793_62883[(5)] = ex62786);


var statearr_62794_62884 = state_62764__$1;
(statearr_62794_62884[(1)] = (7));

(statearr_62794_62884[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0 = (function (){
var statearr_62795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62795[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__);

(statearr_62795[(1)] = (1));

return statearr_62795;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1 = (function (state_62764){
while(true){
var ret_value__32348__auto__ = (function (){try{while(true){
var result__32349__auto__ = switch__32346__auto__(state_62764);
if(cljs.core.keyword_identical_QMARK_(result__32349__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32349__auto__;
}
break;
}
}catch (e62796){var ex__32350__auto__ = e62796;
var statearr_62797_62885 = state_62764;
(statearr_62797_62885[(2)] = ex__32350__auto__);


if(cljs.core.seq((state_62764[(4)]))){
var statearr_62798_62886 = state_62764;
(statearr_62798_62886[(1)] = cljs.core.first((state_62764[(4)])));

} else {
throw ex__32350__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62887 = state_62764;
state_62764 = G__62887;
continue;
} else {
return ret_value__32348__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__ = function(state_62764){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1.call(this,state_62764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32347__auto__;
})()
})();
var state__32433__auto__ = (function (){var statearr_62799 = f__32432__auto__();
(statearr_62799[(6)] = c__32431__auto__);

return statearr_62799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32433__auto__);
}));

return c__32431__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta62688","meta62688",-196442130,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62687");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62687");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test62687.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test62687 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test62687(meta62688){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687(meta62688));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test62687(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
