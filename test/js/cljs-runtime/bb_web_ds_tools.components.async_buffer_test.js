goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120 = (function (meta64121){
this.meta64121 = meta64121;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64122,meta64121__$1){
var self__ = this;
var _64122__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120(meta64121__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64122){
var self__ = this;
var _64122__$1 = this;
return self__.meta64121;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64125 = (arguments.length - (1));
switch (G__64125) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.prototype.apply = (function (self__,args64123){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64123)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_64287){
var state_val_64288 = (state_64287[(1)]);
if((state_val_64288 === (7))){
var inst_64141 = (state_64287[(2)]);
var inst_64142 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64144 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64145 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,19,inst_64144,19,inst_64141,"Buffer should not flush automatically without timer"];
var inst_64146 = cljs.core.PersistentHashMap.fromArrays(inst_64142,inst_64145);
var inst_64147 = cljs.test.report.call(null,inst_64146);
var state_64287__$1 = state_64287;
var statearr_64289_64815 = state_64287__$1;
(statearr_64289_64815[(2)] = inst_64147);

(statearr_64289_64815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (20))){
var inst_64133 = (state_64287[(7)]);
var inst_64232 = (state_64287[(2)]);
var inst_64233 = (inst_64133.cljs$core$IFn$_invoke$arity$0 ? inst_64133.cljs$core$IFn$_invoke$arity$0() : inst_64133.call(null));
var inst_64234 = cljs.core.async.timeout((20));
var state_64287__$1 = (function (){var statearr_64290 = state_64287;
(statearr_64290[(8)] = inst_64232);

(statearr_64290[(9)] = inst_64233);

return statearr_64290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64287__$1,(21),inst_64234);
} else {
if((state_val_64288 === (27))){
var inst_64259 = (state_64287[(10)]);
var inst_64270 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64271 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64272 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64273 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64274 = cljs.core.cons(inst_64273,inst_64259);
var inst_64275 = (new cljs.core.List(null,inst_64274,null,(1),null));
var inst_64276 = (new cljs.core.List(null,inst_64272,inst_64275,(2),null));
var inst_64277 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"fail","fail",1706214930),18,29,inst_64271,29,inst_64276,"Subsequent flush should work"];
var inst_64278 = cljs.core.PersistentHashMap.fromArrays(inst_64270,inst_64277);
var inst_64279 = cljs.test.report.call(null,inst_64278);
var state_64287__$1 = state_64287;
var statearr_64291_64816 = state_64287__$1;
(statearr_64291_64816[(2)] = inst_64279);

(statearr_64291_64816[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (1))){
var inst_64126 = (state_64287[(11)]);
var inst_64128 = (state_64287[(12)]);
var inst_64126__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64127 = cljs.core.PersistentVector.EMPTY;
var inst_64128__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64127);
var inst_64129 = (function (){var input_ch = inst_64126__$1;
var results = inst_64128__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64130 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64131 = [inst_64126__$1,inst_64129];
var inst_64132 = cljs.core.PersistentHashMap.fromArrays(inst_64130,inst_64131);
var inst_64133 = bb_web_ds_tools.components.async_buffer.create(inst_64132);
var state_64287__$1 = (function (){var statearr_64292 = state_64287;
(statearr_64292[(11)] = inst_64126__$1);

(statearr_64292[(12)] = inst_64128__$1);

(statearr_64292[(7)] = inst_64133);

return statearr_64292;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64287__$1,(2),inst_64126__$1,(1));
} else {
if((state_val_64288 === (24))){
var inst_64237 = (state_64287[(2)]);
var inst_64238 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64239 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64240 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"error","error",-978969032),18,29,inst_64239,29,inst_64237,"Subsequent flush should work"];
var inst_64241 = cljs.core.PersistentHashMap.fromArrays(inst_64238,inst_64240);
var inst_64242 = cljs.test.report.call(null,inst_64241);
var state_64287__$1 = state_64287;
var statearr_64293_64818 = state_64287__$1;
(statearr_64293_64818[(2)] = inst_64242);

(statearr_64293_64818[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (4))){
var inst_64140 = (state_64287[(2)]);
var state_64287__$1 = (function (){var statearr_64294 = state_64287;
(statearr_64294[(13)] = inst_64140);

return statearr_64294;
})();
var statearr_64295_64819 = state_64287__$1;
(statearr_64295_64819[(2)] = null);

(statearr_64295_64819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (15))){
var inst_64185 = (state_64287[(2)]);
var inst_64187 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64188 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64189 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,24,inst_64188,24,inst_64185,"Manual flush should flush all items"];
var inst_64190 = cljs.core.PersistentHashMap.fromArrays(inst_64187,inst_64189);
var inst_64191 = cljs.test.report.call(null,inst_64190);
var state_64287__$1 = state_64287;
var statearr_64296_64820 = state_64287__$1;
(statearr_64296_64820[(2)] = inst_64191);

(statearr_64296_64820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (21))){
var inst_64236 = (state_64287[(2)]);
var state_64287__$1 = (function (){var statearr_64297 = state_64287;
(statearr_64297[(14)] = inst_64236);

return statearr_64297;
})();
var statearr_64298_64821 = state_64287__$1;
(statearr_64298_64821[(2)] = null);

(statearr_64298_64821[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (13))){
var inst_64128 = (state_64287[(12)]);
var inst_64205 = (state_64287[(15)]);
var inst_64206 = (state_64287[(16)]);
var _ = (function (){var statearr_64299 = state_64287;
(statearr_64299[(4)] = cljs.core.cons((16),(state_64287[(4)])));

return statearr_64299;
})();
var inst_64197 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64198 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64199 = [(1),(2)];
var inst_64200 = (new cljs.core.PersistentVector(null,2,(5),inst_64198,inst_64199,null));
var inst_64201 = [inst_64200];
var inst_64202 = (new cljs.core.PersistentVector(null,1,(5),inst_64197,inst_64201,null));
var inst_64203 = cljs.core.deref(inst_64128);
var inst_64204 = (new cljs.core.List(null,inst_64203,null,(1),null));
var inst_64205__$1 = (new cljs.core.List(null,inst_64202,inst_64204,(2),null));
var inst_64206__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64205__$1);
var state_64287__$1 = (function (){var statearr_64300 = state_64287;
(statearr_64300[(15)] = inst_64205__$1);

(statearr_64300[(16)] = inst_64206__$1);

return statearr_64300;
})();
if(cljs.core.truth_(inst_64206__$1)){
var statearr_64301_64823 = state_64287__$1;
(statearr_64301_64823[(1)] = (17));

} else {
var statearr_64302_64824 = state_64287__$1;
(statearr_64302_64824[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (22))){
var inst_64128 = (state_64287[(12)]);
var inst_64259 = (state_64287[(10)]);
var inst_64260 = (state_64287[(17)]);
var _ = (function (){var statearr_64303 = state_64287;
(statearr_64303[(4)] = cljs.core.cons((25),(state_64287[(4)])));

return statearr_64303;
})();
var inst_64248 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64249 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64250 = [(1),(2)];
var inst_64251 = (new cljs.core.PersistentVector(null,2,(5),inst_64249,inst_64250,null));
var inst_64252 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64253 = [(3)];
var inst_64254 = (new cljs.core.PersistentVector(null,1,(5),inst_64252,inst_64253,null));
var inst_64255 = [inst_64251,inst_64254];
var inst_64256 = (new cljs.core.PersistentVector(null,2,(5),inst_64248,inst_64255,null));
var inst_64257 = cljs.core.deref(inst_64128);
var inst_64258 = (new cljs.core.List(null,inst_64257,null,(1),null));
var inst_64259__$1 = (new cljs.core.List(null,inst_64256,inst_64258,(2),null));
var inst_64260__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64259__$1);
var state_64287__$1 = (function (){var statearr_64304 = state_64287;
(statearr_64304[(10)] = inst_64259__$1);

(statearr_64304[(17)] = inst_64260__$1);

return statearr_64304;
})();
if(cljs.core.truth_(inst_64260__$1)){
var statearr_64305_64825 = state_64287__$1;
(statearr_64305_64825[(1)] = (26));

} else {
var statearr_64306_64826 = state_64287__$1;
(statearr_64306_64826[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (6))){
var inst_64133 = (state_64287[(7)]);
var inst_64180 = (state_64287[(2)]);
var inst_64181 = (inst_64133.cljs$core$IFn$_invoke$arity$0 ? inst_64133.cljs$core$IFn$_invoke$arity$0() : inst_64133.call(null));
var inst_64182 = cljs.core.async.timeout((20));
var state_64287__$1 = (function (){var statearr_64308 = state_64287;
(statearr_64308[(18)] = inst_64180);

(statearr_64308[(19)] = inst_64181);

return statearr_64308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64287__$1,(12),inst_64182);
} else {
if((state_val_64288 === (28))){
var inst_64260 = (state_64287[(17)]);
var inst_64281 = (state_64287[(2)]);
var _ = (function (){var statearr_64309 = state_64287;
(statearr_64309[(4)] = cljs.core.rest((state_64287[(4)])));

return statearr_64309;
})();
var state_64287__$1 = (function (){var statearr_64310 = state_64287;
(statearr_64310[(20)] = inst_64281);

return statearr_64310;
})();
var statearr_64311_64827 = state_64287__$1;
(statearr_64311_64827[(2)] = inst_64260);

(statearr_64311_64827[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (25))){
var _ = (function (){var statearr_64312 = state_64287;
(statearr_64312[(4)] = cljs.core.rest((state_64287[(4)])));

return statearr_64312;
})();
var state_64287__$1 = state_64287;
var ex64307 = (state_64287__$1[(2)]);
var statearr_64313_64828 = state_64287__$1;
(statearr_64313_64828[(5)] = ex64307);


var statearr_64314_64829 = state_64287__$1;
(statearr_64314_64829[(1)] = (24));

(statearr_64314_64829[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (17))){
var inst_64205 = (state_64287[(15)]);
var inst_64208 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64209 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64210 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64211 = cljs.core.cons(inst_64210,inst_64205);
var inst_64212 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,24,inst_64209,24,inst_64211,"Manual flush should flush all items"];
var inst_64213 = cljs.core.PersistentHashMap.fromArrays(inst_64208,inst_64212);
var inst_64214 = cljs.test.report.call(null,inst_64213);
var state_64287__$1 = state_64287;
var statearr_64315_64830 = state_64287__$1;
(statearr_64315_64830[(2)] = inst_64214);

(statearr_64315_64830[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (3))){
var inst_64137 = (state_64287[(2)]);
var inst_64138 = cljs.core.async.timeout((20));
var state_64287__$1 = (function (){var statearr_64316 = state_64287;
(statearr_64316[(21)] = inst_64137);

return statearr_64316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64287__$1,(4),inst_64138);
} else {
if((state_val_64288 === (12))){
var inst_64184 = (state_64287[(2)]);
var state_64287__$1 = (function (){var statearr_64317 = state_64287;
(statearr_64317[(22)] = inst_64184);

return statearr_64317;
})();
var statearr_64318_64831 = state_64287__$1;
(statearr_64318_64831[(2)] = null);

(statearr_64318_64831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (2))){
var inst_64126 = (state_64287[(11)]);
var inst_64135 = (state_64287[(2)]);
var state_64287__$1 = (function (){var statearr_64319 = state_64287;
(statearr_64319[(23)] = inst_64135);

return statearr_64319;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64287__$1,(3),inst_64126,(2));
} else {
if((state_val_64288 === (23))){
var inst_64284 = (state_64287[(2)]);
var inst_64285 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64287__$1 = (function (){var statearr_64320 = state_64287;
(statearr_64320[(24)] = inst_64284);

return statearr_64320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64287__$1,inst_64285);
} else {
if((state_val_64288 === (19))){
var inst_64206 = (state_64287[(16)]);
var inst_64227 = (state_64287[(2)]);
var _ = (function (){var statearr_64321 = state_64287;
(statearr_64321[(4)] = cljs.core.rest((state_64287[(4)])));

return statearr_64321;
})();
var state_64287__$1 = (function (){var statearr_64322 = state_64287;
(statearr_64322[(25)] = inst_64227);

return statearr_64322;
})();
var statearr_64323_64832 = state_64287__$1;
(statearr_64323_64832[(2)] = inst_64206);

(statearr_64323_64832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (11))){
var inst_64155 = (state_64287[(26)]);
var inst_64177 = (state_64287[(2)]);
var _ = (function (){var statearr_64324 = state_64287;
(statearr_64324[(4)] = cljs.core.rest((state_64287[(4)])));

return statearr_64324;
})();
var state_64287__$1 = (function (){var statearr_64325 = state_64287;
(statearr_64325[(27)] = inst_64177);

return statearr_64325;
})();
var statearr_64326_64833 = state_64287__$1;
(statearr_64326_64833[(2)] = inst_64155);

(statearr_64326_64833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (9))){
var inst_64154 = (state_64287[(28)]);
var inst_64157 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64159 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64160 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64161 = cljs.core.cons(inst_64160,inst_64154);
var inst_64162 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,19,inst_64159,19,inst_64161,"Buffer should not flush automatically without timer"];
var inst_64163 = cljs.core.PersistentHashMap.fromArrays(inst_64157,inst_64162);
var inst_64164 = cljs.test.report.call(null,inst_64163);
var state_64287__$1 = state_64287;
var statearr_64328_64834 = state_64287__$1;
(statearr_64328_64834[(2)] = inst_64164);

(statearr_64328_64834[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (5))){
var inst_64128 = (state_64287[(12)]);
var inst_64154 = (state_64287[(28)]);
var inst_64155 = (state_64287[(26)]);
var _ = (function (){var statearr_64332 = state_64287;
(statearr_64332[(4)] = cljs.core.cons((8),(state_64287[(4)])));

return statearr_64332;
})();
var inst_64153 = cljs.core.deref(inst_64128);
var inst_64154__$1 = (new cljs.core.List(null,inst_64153,null,(1),null));
var inst_64155__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_64154__$1);
var state_64287__$1 = (function (){var statearr_64333 = state_64287;
(statearr_64333[(28)] = inst_64154__$1);

(statearr_64333[(26)] = inst_64155__$1);

return statearr_64333;
})();
if(cljs.core.truth_(inst_64155__$1)){
var statearr_64334_64835 = state_64287__$1;
(statearr_64334_64835[(1)] = (9));

} else {
var statearr_64335_64836 = state_64287__$1;
(statearr_64335_64836[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (14))){
var inst_64126 = (state_64287[(11)]);
var inst_64230 = (state_64287[(2)]);
var state_64287__$1 = (function (){var statearr_64341 = state_64287;
(statearr_64341[(29)] = inst_64230);

return statearr_64341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64287__$1,(20),inst_64126,(3));
} else {
if((state_val_64288 === (26))){
var inst_64259 = (state_64287[(10)]);
var inst_64262 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64263 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64264 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64265 = cljs.core.cons(inst_64264,inst_64259);
var inst_64266 = ["bb_web_ds_tools/components/async_buffer_test.cljs",42,new cljs.core.Keyword(null,"pass","pass",1574159993),18,29,inst_64263,29,inst_64265,"Subsequent flush should work"];
var inst_64267 = cljs.core.PersistentHashMap.fromArrays(inst_64262,inst_64266);
var inst_64268 = cljs.test.report.call(null,inst_64267);
var state_64287__$1 = state_64287;
var statearr_64343_64837 = state_64287__$1;
(statearr_64343_64837[(2)] = inst_64268);

(statearr_64343_64837[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (16))){
var _ = (function (){var statearr_64344 = state_64287;
(statearr_64344[(4)] = cljs.core.rest((state_64287[(4)])));

return statearr_64344;
})();
var state_64287__$1 = state_64287;
var ex64337 = (state_64287__$1[(2)]);
var statearr_64345_64838 = state_64287__$1;
(statearr_64345_64838[(5)] = ex64337);


var statearr_64346_64840 = state_64287__$1;
(statearr_64346_64840[(1)] = (15));

(statearr_64346_64840[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (10))){
var inst_64154 = (state_64287[(28)]);
var inst_64166 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64167 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64168 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64169 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64170 = cljs.core.cons(inst_64169,inst_64154);
var inst_64171 = (new cljs.core.List(null,inst_64170,null,(1),null));
var inst_64172 = (new cljs.core.List(null,inst_64168,inst_64171,(2),null));
var inst_64173 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,19,inst_64167,19,inst_64172,"Buffer should not flush automatically without timer"];
var inst_64174 = cljs.core.PersistentHashMap.fromArrays(inst_64166,inst_64173);
var inst_64175 = cljs.test.report.call(null,inst_64174);
var state_64287__$1 = state_64287;
var statearr_64349_64841 = state_64287__$1;
(statearr_64349_64841[(2)] = inst_64175);

(statearr_64349_64841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (18))){
var inst_64205 = (state_64287[(15)]);
var inst_64216 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64217 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64218 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64219 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64220 = cljs.core.cons(inst_64219,inst_64205);
var inst_64221 = (new cljs.core.List(null,inst_64220,null,(1),null));
var inst_64222 = (new cljs.core.List(null,inst_64218,inst_64221,(2),null));
var inst_64223 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,24,inst_64217,24,inst_64222,"Manual flush should flush all items"];
var inst_64224 = cljs.core.PersistentHashMap.fromArrays(inst_64216,inst_64223);
var inst_64225 = cljs.test.report.call(null,inst_64224);
var state_64287__$1 = state_64287;
var statearr_64351_64842 = state_64287__$1;
(statearr_64351_64842[(2)] = inst_64225);

(statearr_64351_64842[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64288 === (8))){
var _ = (function (){var statearr_64352 = state_64287;
(statearr_64352[(4)] = cljs.core.rest((state_64287[(4)])));

return statearr_64352;
})();
var state_64287__$1 = state_64287;
var ex64347 = (state_64287__$1[(2)]);
var statearr_64353_64843 = state_64287__$1;
(statearr_64353_64843[(5)] = ex64347);


var statearr_64354_64844 = state_64287__$1;
(statearr_64354_64844[(1)] = (7));

(statearr_64354_64844[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0 = (function (){
var statearr_64359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64359[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__);

(statearr_64359[(1)] = (1));

return statearr_64359;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1 = (function (state_64287){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_64287);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e64360){var ex__32543__auto__ = e64360;
var statearr_64361_64845 = state_64287;
(statearr_64361_64845[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_64287[(4)]))){
var statearr_64362_64846 = state_64287;
(statearr_64362_64846[(1)] = cljs.core.first((state_64287[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64847 = state_64287;
state_64287 = G__64847;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__ = function(state_64287){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1.call(this,state_64287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_64363 = f__32611__auto__();
(statearr_64363[(6)] = c__32610__auto__);

return statearr_64363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64121","meta64121",154867632,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64120");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64120");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64120.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64120 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64120(meta64121){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120(meta64121));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64120(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373 = (function (meta64374){
this.meta64374 = meta64374;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64375,meta64374__$1){
var self__ = this;
var _64375__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373(meta64374__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64375){
var self__ = this;
var _64375__$1 = this;
return self__.meta64374;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64377 = (arguments.length - (1));
switch (G__64377) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.prototype.apply = (function (self__,args64376){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64376)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_64596){
var state_val_64597 = (state_64596[(1)]);
if((state_val_64597 === (7))){
var inst_64393 = (state_64596[(2)]);
var inst_64394 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64395 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64396 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),18,47,inst_64395,47,inst_64393,"Should not flush before timeout"];
var inst_64397 = cljs.core.PersistentHashMap.fromArrays(inst_64394,inst_64396);
var inst_64398 = cljs.test.report.call(null,inst_64397);
var state_64596__$1 = state_64596;
var statearr_64600_64849 = state_64596__$1;
(statearr_64600_64849[(2)] = inst_64398);

(statearr_64600_64849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (20))){
var inst_64484 = (state_64596[(2)]);
var inst_64485 = cljs.core.async.timeout((50));
var state_64596__$1 = (function (){var statearr_64601 = state_64596;
(statearr_64601[(7)] = inst_64484);

return statearr_64601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64596__$1,(21),inst_64485);
} else {
if((state_val_64597 === (27))){
var _ = (function (){var statearr_64602 = state_64596;
(statearr_64602[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64602;
})();
var state_64596__$1 = state_64596;
var ex64598 = (state_64596__$1[(2)]);
var statearr_64603_64850 = state_64596__$1;
(statearr_64603_64850[(5)] = ex64598);


var statearr_64604_64851 = state_64596__$1;
(statearr_64604_64851[(1)] = (26));

(statearr_64604_64851[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (1))){
var inst_64378 = (state_64596[(8)]);
var inst_64380 = (state_64596[(9)]);
var inst_64378__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64379 = cljs.core.PersistentVector.EMPTY;
var inst_64380__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64379);
var inst_64381 = (function (){var input_ch = inst_64378__$1;
var results = inst_64380__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64382 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64383 = [inst_64378__$1,(100),inst_64381];
var inst_64384 = cljs.core.PersistentHashMap.fromArrays(inst_64382,inst_64383);
var inst_64385 = bb_web_ds_tools.components.async_buffer.create(inst_64384);
var state_64596__$1 = (function (){var statearr_64608 = state_64596;
(statearr_64608[(8)] = inst_64378__$1);

(statearr_64608[(9)] = inst_64380__$1);

(statearr_64608[(10)] = inst_64385);

return statearr_64608;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64596__$1,(2),inst_64378__$1,(1));
} else {
if((state_val_64597 === (24))){
var inst_64380 = (state_64596[(9)]);
var inst_64513 = (state_64596[(11)]);
var inst_64514 = (state_64596[(12)]);
var _ = (function (){var statearr_64611 = state_64596;
(statearr_64611[(4)] = cljs.core.cons((27),(state_64596[(4)])));

return statearr_64611;
})();
var inst_64505 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64507 = [(1),(2)];
var inst_64508 = (new cljs.core.PersistentVector(null,2,(5),inst_64506,inst_64507,null));
var inst_64509 = [inst_64508];
var inst_64510 = (new cljs.core.PersistentVector(null,1,(5),inst_64505,inst_64509,null));
var inst_64511 = cljs.core.deref(inst_64380);
var inst_64512 = (new cljs.core.List(null,inst_64511,null,(1),null));
var inst_64513__$1 = (new cljs.core.List(null,inst_64510,inst_64512,(2),null));
var inst_64514__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64513__$1);
var state_64596__$1 = (function (){var statearr_64615 = state_64596;
(statearr_64615[(11)] = inst_64513__$1);

(statearr_64615[(12)] = inst_64514__$1);

return statearr_64615;
})();
if(cljs.core.truth_(inst_64514__$1)){
var statearr_64616_64852 = state_64596__$1;
(statearr_64616_64852[(1)] = (28));

} else {
var statearr_64617_64853 = state_64596__$1;
(statearr_64617_64853[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (4))){
var inst_64392 = (state_64596[(2)]);
var state_64596__$1 = (function (){var statearr_64619 = state_64596;
(statearr_64619[(13)] = inst_64392);

return statearr_64619;
})();
var statearr_64620_64854 = state_64596__$1;
(statearr_64620_64854[(2)] = null);

(statearr_64620_64854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (15))){
var inst_64434 = (state_64596[(2)]);
var inst_64435 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64436 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64437 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,50,inst_64436,50,inst_64434,"Should flush after timeout"];
var inst_64438 = cljs.core.PersistentHashMap.fromArrays(inst_64435,inst_64437);
var inst_64439 = cljs.test.report.call(null,inst_64438);
var state_64596__$1 = state_64596;
var statearr_64621_64855 = state_64596__$1;
(statearr_64621_64855[(2)] = inst_64439);

(statearr_64621_64855[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (21))){
var inst_64378 = (state_64596[(8)]);
var inst_64487 = (state_64596[(2)]);
var state_64596__$1 = (function (){var statearr_64622 = state_64596;
(statearr_64622[(14)] = inst_64487);

return statearr_64622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64596__$1,(22),inst_64378,(4));
} else {
if((state_val_64597 === (31))){
var inst_64541 = (state_64596[(2)]);
var state_64596__$1 = (function (){var statearr_64623 = state_64596;
(statearr_64623[(15)] = inst_64541);

return statearr_64623;
})();
var statearr_64624_64858 = state_64596__$1;
(statearr_64624_64858[(2)] = null);

(statearr_64624_64858[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (32))){
var inst_64380 = (state_64596[(9)]);
var inst_64566 = (state_64596[(16)]);
var inst_64567 = (state_64596[(17)]);
var _ = (function (){var statearr_64625 = state_64596;
(statearr_64625[(4)] = cljs.core.cons((35),(state_64596[(4)])));

return statearr_64625;
})();
var inst_64555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64556 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64557 = [(1),(2)];
var inst_64558 = (new cljs.core.PersistentVector(null,2,(5),inst_64556,inst_64557,null));
var inst_64559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64560 = [(3),(4)];
var inst_64561 = (new cljs.core.PersistentVector(null,2,(5),inst_64559,inst_64560,null));
var inst_64562 = [inst_64558,inst_64561];
var inst_64563 = (new cljs.core.PersistentVector(null,2,(5),inst_64555,inst_64562,null));
var inst_64564 = cljs.core.deref(inst_64380);
var inst_64565 = (new cljs.core.List(null,inst_64564,null,(1),null));
var inst_64566__$1 = (new cljs.core.List(null,inst_64563,inst_64565,(2),null));
var inst_64567__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64566__$1);
var state_64596__$1 = (function (){var statearr_64626 = state_64596;
(statearr_64626[(16)] = inst_64566__$1);

(statearr_64626[(17)] = inst_64567__$1);

return statearr_64626;
})();
if(cljs.core.truth_(inst_64567__$1)){
var statearr_64627_64862 = state_64596__$1;
(statearr_64627_64862[(1)] = (36));

} else {
var statearr_64628_64863 = state_64596__$1;
(statearr_64628_64863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (33))){
var inst_64592 = (state_64596[(2)]);
var inst_64593 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64596__$1 = (function (){var statearr_64629 = state_64596;
(statearr_64629[(18)] = inst_64592);

return statearr_64629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64596__$1,inst_64593);
} else {
if((state_val_64597 === (13))){
var inst_64380 = (state_64596[(9)]);
var inst_64457 = (state_64596[(19)]);
var inst_64458 = (state_64596[(20)]);
var _ = (function (){var statearr_64630 = state_64596;
(statearr_64630[(4)] = cljs.core.cons((16),(state_64596[(4)])));

return statearr_64630;
})();
var inst_64446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64447 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64448 = [(1),(2)];
var inst_64449 = (new cljs.core.PersistentVector(null,2,(5),inst_64447,inst_64448,null));
var inst_64450 = [inst_64449];
var inst_64451 = (new cljs.core.PersistentVector(null,1,(5),inst_64446,inst_64450,null));
var inst_64455 = cljs.core.deref(inst_64380);
var inst_64456 = (new cljs.core.List(null,inst_64455,null,(1),null));
var inst_64457__$1 = (new cljs.core.List(null,inst_64451,inst_64456,(2),null));
var inst_64458__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64457__$1);
var state_64596__$1 = (function (){var statearr_64631 = state_64596;
(statearr_64631[(19)] = inst_64457__$1);

(statearr_64631[(20)] = inst_64458__$1);

return statearr_64631;
})();
if(cljs.core.truth_(inst_64458__$1)){
var statearr_64632_64864 = state_64596__$1;
(statearr_64632_64864[(1)] = (17));

} else {
var statearr_64633_64865 = state_64596__$1;
(statearr_64633_64865[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (22))){
var inst_64489 = (state_64596[(2)]);
var inst_64490 = cljs.core.async.timeout((20));
var state_64596__$1 = (function (){var statearr_64634 = state_64596;
(statearr_64634[(21)] = inst_64489);

return statearr_64634;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64596__$1,(23),inst_64490);
} else {
if((state_val_64597 === (36))){
var inst_64566 = (state_64596[(16)]);
var inst_64569 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64570 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64571 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64572 = cljs.core.cons(inst_64571,inst_64566);
var inst_64573 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"pass","pass",1574159993),18,60,inst_64570,60,inst_64572,"Should flush 3,4 after timeout from first message"];
var inst_64574 = cljs.core.PersistentHashMap.fromArrays(inst_64569,inst_64573);
var inst_64575 = cljs.test.report.call(null,inst_64574);
var state_64596__$1 = state_64596;
var statearr_64635_64866 = state_64596__$1;
(statearr_64635_64866[(2)] = inst_64575);

(statearr_64635_64866[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (29))){
var inst_64513 = (state_64596[(11)]);
var inst_64524 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64525 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64526 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64527 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64528 = cljs.core.cons(inst_64527,inst_64513);
var inst_64529 = (new cljs.core.List(null,inst_64528,null,(1),null));
var inst_64530 = (new cljs.core.List(null,inst_64526,inst_64529,(2),null));
var inst_64531 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,57,inst_64525,57,inst_64530,"Should not flush 3,4 yet"];
var inst_64532 = cljs.core.PersistentHashMap.fromArrays(inst_64524,inst_64531);
var inst_64533 = cljs.test.report.call(null,inst_64532);
var state_64596__$1 = state_64596;
var statearr_64636_64867 = state_64596__$1;
(statearr_64636_64867[(2)] = inst_64533);

(statearr_64636_64867[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (6))){
var inst_64430 = (state_64596[(2)]);
var inst_64431 = cljs.core.async.timeout((100));
var state_64596__$1 = (function (){var statearr_64637 = state_64596;
(statearr_64637[(22)] = inst_64430);

return statearr_64637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64596__$1,(12),inst_64431);
} else {
if((state_val_64597 === (28))){
var inst_64513 = (state_64596[(11)]);
var inst_64516 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64517 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64518 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64519 = cljs.core.cons(inst_64518,inst_64513);
var inst_64520 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,57,inst_64517,57,inst_64519,"Should not flush 3,4 yet"];
var inst_64521 = cljs.core.PersistentHashMap.fromArrays(inst_64516,inst_64520);
var inst_64522 = cljs.test.report.call(null,inst_64521);
var state_64596__$1 = state_64596;
var statearr_64638_64868 = state_64596__$1;
(statearr_64638_64868[(2)] = inst_64522);

(statearr_64638_64868[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (25))){
var inst_64538 = (state_64596[(2)]);
var inst_64539 = cljs.core.async.timeout((80));
var state_64596__$1 = (function (){var statearr_64639 = state_64596;
(statearr_64639[(23)] = inst_64538);

return statearr_64639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64596__$1,(31),inst_64539);
} else {
if((state_val_64597 === (34))){
var inst_64542 = (state_64596[(2)]);
var inst_64544 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64545 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64546 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"error","error",-978969032),18,60,inst_64545,60,inst_64542,"Should flush 3,4 after timeout from first message"];
var inst_64547 = cljs.core.PersistentHashMap.fromArrays(inst_64544,inst_64546);
var inst_64548 = cljs.test.report.call(null,inst_64547);
var state_64596__$1 = state_64596;
var statearr_64640_64869 = state_64596__$1;
(statearr_64640_64869[(2)] = inst_64548);

(statearr_64640_64869[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (17))){
var inst_64457 = (state_64596[(19)]);
var inst_64460 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64461 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64462 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64463 = cljs.core.cons(inst_64462,inst_64457);
var inst_64464 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"pass","pass",1574159993),18,50,inst_64461,50,inst_64463,"Should flush after timeout"];
var inst_64465 = cljs.core.PersistentHashMap.fromArrays(inst_64460,inst_64464);
var inst_64466 = cljs.test.report.call(null,inst_64465);
var state_64596__$1 = state_64596;
var statearr_64641_64871 = state_64596__$1;
(statearr_64641_64871[(2)] = inst_64466);

(statearr_64641_64871[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (3))){
var inst_64389 = (state_64596[(2)]);
var inst_64390 = cljs.core.async.timeout((50));
var state_64596__$1 = (function (){var statearr_64642 = state_64596;
(statearr_64642[(24)] = inst_64389);

return statearr_64642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64596__$1,(4),inst_64390);
} else {
if((state_val_64597 === (12))){
var inst_64433 = (state_64596[(2)]);
var state_64596__$1 = (function (){var statearr_64643 = state_64596;
(statearr_64643[(25)] = inst_64433);

return statearr_64643;
})();
var statearr_64644_64880 = state_64596__$1;
(statearr_64644_64880[(2)] = null);

(statearr_64644_64880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (2))){
var inst_64378 = (state_64596[(8)]);
var inst_64387 = (state_64596[(2)]);
var state_64596__$1 = (function (){var statearr_64646 = state_64596;
(statearr_64646[(26)] = inst_64387);

return statearr_64646;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64596__$1,(3),inst_64378,(2));
} else {
if((state_val_64597 === (23))){
var inst_64492 = (state_64596[(2)]);
var state_64596__$1 = (function (){var statearr_64647 = state_64596;
(statearr_64647[(27)] = inst_64492);

return statearr_64647;
})();
var statearr_64648_64884 = state_64596__$1;
(statearr_64648_64884[(2)] = null);

(statearr_64648_64884[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (35))){
var _ = (function (){var statearr_64649 = state_64596;
(statearr_64649[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64649;
})();
var state_64596__$1 = state_64596;
var ex64645 = (state_64596__$1[(2)]);
var statearr_64650_64885 = state_64596__$1;
(statearr_64650_64885[(5)] = ex64645);


var statearr_64651_64887 = state_64596__$1;
(statearr_64651_64887[(1)] = (34));

(statearr_64651_64887[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (19))){
var inst_64458 = (state_64596[(20)]);
var inst_64479 = (state_64596[(2)]);
var _ = (function (){var statearr_64652 = state_64596;
(statearr_64652[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64652;
})();
var state_64596__$1 = (function (){var statearr_64653 = state_64596;
(statearr_64653[(28)] = inst_64479);

return statearr_64653;
})();
var statearr_64654_64892 = state_64596__$1;
(statearr_64654_64892[(2)] = inst_64458);

(statearr_64654_64892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (11))){
var inst_64406 = (state_64596[(29)]);
var inst_64427 = (state_64596[(2)]);
var _ = (function (){var statearr_64655 = state_64596;
(statearr_64655[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64655;
})();
var state_64596__$1 = (function (){var statearr_64656 = state_64596;
(statearr_64656[(30)] = inst_64427);

return statearr_64656;
})();
var statearr_64657_64893 = state_64596__$1;
(statearr_64657_64893[(2)] = inst_64406);

(statearr_64657_64893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (9))){
var inst_64405 = (state_64596[(31)]);
var inst_64408 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64409 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64410 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64411 = cljs.core.cons(inst_64410,inst_64405);
var inst_64412 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),18,47,inst_64409,47,inst_64411,"Should not flush before timeout"];
var inst_64413 = cljs.core.PersistentHashMap.fromArrays(inst_64408,inst_64412);
var inst_64414 = cljs.test.report.call(null,inst_64413);
var state_64596__$1 = state_64596;
var statearr_64658_64897 = state_64596__$1;
(statearr_64658_64897[(2)] = inst_64414);

(statearr_64658_64897[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (5))){
var inst_64380 = (state_64596[(9)]);
var inst_64405 = (state_64596[(31)]);
var inst_64406 = (state_64596[(29)]);
var _ = (function (){var statearr_64659 = state_64596;
(statearr_64659[(4)] = cljs.core.cons((8),(state_64596[(4)])));

return statearr_64659;
})();
var inst_64404 = cljs.core.deref(inst_64380);
var inst_64405__$1 = (new cljs.core.List(null,inst_64404,null,(1),null));
var inst_64406__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_64405__$1);
var state_64596__$1 = (function (){var statearr_64660 = state_64596;
(statearr_64660[(31)] = inst_64405__$1);

(statearr_64660[(29)] = inst_64406__$1);

return statearr_64660;
})();
if(cljs.core.truth_(inst_64406__$1)){
var statearr_64661_64901 = state_64596__$1;
(statearr_64661_64901[(1)] = (9));

} else {
var statearr_64662_64902 = state_64596__$1;
(statearr_64662_64902[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (14))){
var inst_64378 = (state_64596[(8)]);
var inst_64482 = (state_64596[(2)]);
var state_64596__$1 = (function (){var statearr_64664 = state_64596;
(statearr_64664[(32)] = inst_64482);

return statearr_64664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64596__$1,(20),inst_64378,(3));
} else {
if((state_val_64597 === (26))){
var inst_64493 = (state_64596[(2)]);
var inst_64495 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64496 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64497 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"error","error",-978969032),18,57,inst_64496,57,inst_64493,"Should not flush 3,4 yet"];
var inst_64498 = cljs.core.PersistentHashMap.fromArrays(inst_64495,inst_64497);
var inst_64499 = cljs.test.report.call(null,inst_64498);
var state_64596__$1 = state_64596;
var statearr_64666_64905 = state_64596__$1;
(statearr_64666_64905[(2)] = inst_64499);

(statearr_64666_64905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (16))){
var _ = (function (){var statearr_64667 = state_64596;
(statearr_64667[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64667;
})();
var state_64596__$1 = state_64596;
var ex64663 = (state_64596__$1[(2)]);
var statearr_64668_64906 = state_64596__$1;
(statearr_64668_64906[(5)] = ex64663);


var statearr_64669_64907 = state_64596__$1;
(statearr_64669_64907[(1)] = (15));

(statearr_64669_64907[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (38))){
var inst_64567 = (state_64596[(17)]);
var inst_64589 = (state_64596[(2)]);
var _ = (function (){var statearr_64671 = state_64596;
(statearr_64671[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64671;
})();
var state_64596__$1 = (function (){var statearr_64672 = state_64596;
(statearr_64672[(33)] = inst_64589);

return statearr_64672;
})();
var statearr_64673_64908 = state_64596__$1;
(statearr_64673_64908[(2)] = inst_64567);

(statearr_64673_64908[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (30))){
var inst_64514 = (state_64596[(12)]);
var inst_64535 = (state_64596[(2)]);
var _ = (function (){var statearr_64675 = state_64596;
(statearr_64675[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64675;
})();
var state_64596__$1 = (function (){var statearr_64676 = state_64596;
(statearr_64676[(34)] = inst_64535);

return statearr_64676;
})();
var statearr_64677_64909 = state_64596__$1;
(statearr_64677_64909[(2)] = inst_64514);

(statearr_64677_64909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (10))){
var inst_64405 = (state_64596[(31)]);
var inst_64416 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64417 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64418 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64419 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_64420 = cljs.core.cons(inst_64419,inst_64405);
var inst_64421 = (new cljs.core.List(null,inst_64420,null,(1),null));
var inst_64422 = (new cljs.core.List(null,inst_64418,inst_64421,(2),null));
var inst_64423 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),18,47,inst_64417,47,inst_64422,"Should not flush before timeout"];
var inst_64424 = cljs.core.PersistentHashMap.fromArrays(inst_64416,inst_64423);
var inst_64425 = cljs.test.report.call(null,inst_64424);
var state_64596__$1 = state_64596;
var statearr_64680_64910 = state_64596__$1;
(statearr_64680_64910[(2)] = inst_64425);

(statearr_64680_64910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (18))){
var inst_64457 = (state_64596[(19)]);
var inst_64468 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64469 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64470 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64471 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64472 = cljs.core.cons(inst_64471,inst_64457);
var inst_64473 = (new cljs.core.List(null,inst_64472,null,(1),null));
var inst_64474 = (new cljs.core.List(null,inst_64470,inst_64473,(2),null));
var inst_64475 = ["bb_web_ds_tools/components/async_buffer_test.cljs",38,new cljs.core.Keyword(null,"fail","fail",1706214930),18,50,inst_64469,50,inst_64474,"Should flush after timeout"];
var inst_64476 = cljs.core.PersistentHashMap.fromArrays(inst_64468,inst_64475);
var inst_64477 = cljs.test.report.call(null,inst_64476);
var state_64596__$1 = state_64596;
var statearr_64683_64911 = state_64596__$1;
(statearr_64683_64911[(2)] = inst_64477);

(statearr_64683_64911[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (37))){
var inst_64566 = (state_64596[(16)]);
var inst_64577 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64579 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64580 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64581 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64582 = cljs.core.cons(inst_64581,inst_64566);
var inst_64583 = (new cljs.core.List(null,inst_64582,null,(1),null));
var inst_64584 = (new cljs.core.List(null,inst_64580,inst_64583,(2),null));
var inst_64585 = ["bb_web_ds_tools/components/async_buffer_test.cljs",44,new cljs.core.Keyword(null,"fail","fail",1706214930),18,60,inst_64579,60,inst_64584,"Should flush 3,4 after timeout from first message"];
var inst_64586 = cljs.core.PersistentHashMap.fromArrays(inst_64577,inst_64585);
var inst_64587 = cljs.test.report.call(null,inst_64586);
var state_64596__$1 = state_64596;
var statearr_64688_64912 = state_64596__$1;
(statearr_64688_64912[(2)] = inst_64587);

(statearr_64688_64912[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64597 === (8))){
var _ = (function (){var statearr_64689 = state_64596;
(statearr_64689[(4)] = cljs.core.rest((state_64596[(4)])));

return statearr_64689;
})();
var state_64596__$1 = state_64596;
var ex64681 = (state_64596__$1[(2)]);
var statearr_64690_64913 = state_64596__$1;
(statearr_64690_64913[(5)] = ex64681);


var statearr_64691_64914 = state_64596__$1;
(statearr_64691_64914[(1)] = (7));

(statearr_64691_64914[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0 = (function (){
var statearr_64697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64697[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__);

(statearr_64697[(1)] = (1));

return statearr_64697;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1 = (function (state_64596){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_64596);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e64698){var ex__32543__auto__ = e64698;
var statearr_64699_64915 = state_64596;
(statearr_64699_64915[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_64596[(4)]))){
var statearr_64700_64917 = state_64596;
(statearr_64700_64917[(1)] = cljs.core.first((state_64596[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64918 = state_64596;
state_64596 = G__64918;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__ = function(state_64596){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1.call(this,state_64596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_64701 = f__32611__auto__();
(statearr_64701[(6)] = c__32610__auto__);

return statearr_64701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64374","meta64374",1667739497,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64373");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64373");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64373.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64373 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64373(meta64374){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373(meta64374));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64373(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703 = (function (meta64704){
this.meta64704 = meta64704;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64705,meta64704__$1){
var self__ = this;
var _64705__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703(meta64704__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64705){
var self__ = this;
var _64705__$1 = this;
return self__.meta64704;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__64707 = (arguments.length - (1));
switch (G__64707) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.prototype.apply = (function (self__,args64706){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args64706)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32610__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32611__auto__ = (function (){var switch__32539__auto__ = (function (state_64772){
var state_val_64773 = (state_64772[(1)]);
if((state_val_64773 === (7))){
var inst_64724 = (state_64772[(2)]);
var inst_64725 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64726 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64727 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"error","error",-978969032),18,78,inst_64726,78,inst_64724,"Closing input should flush remaining"];
var inst_64728 = cljs.core.PersistentHashMap.fromArrays(inst_64725,inst_64727);
var inst_64729 = cljs.test.report.call(null,inst_64728);
var state_64772__$1 = state_64772;
var statearr_64774_64936 = state_64772__$1;
(statearr_64774_64936[(2)] = inst_64729);

(statearr_64774_64936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64773 === (1))){
var inst_64708 = (state_64772[(7)]);
var inst_64710 = (state_64772[(8)]);
var inst_64708__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_64709 = cljs.core.PersistentVector.EMPTY;
var inst_64710__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_64709);
var inst_64711 = (function (){var input_ch = inst_64708__$1;
var results = inst_64710__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_64712 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_64713 = [inst_64708__$1,inst_64711];
var inst_64714 = cljs.core.PersistentHashMap.fromArrays(inst_64712,inst_64713);
var inst_64715 = bb_web_ds_tools.components.async_buffer.create(inst_64714);
var state_64772__$1 = (function (){var statearr_64775 = state_64772;
(statearr_64775[(7)] = inst_64708__$1);

(statearr_64775[(8)] = inst_64710__$1);

(statearr_64775[(9)] = inst_64715);

return statearr_64775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64772__$1,(2),inst_64708__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_64773 === (4))){
var inst_64723 = (state_64772[(2)]);
var state_64772__$1 = (function (){var statearr_64776 = state_64772;
(statearr_64776[(10)] = inst_64723);

return statearr_64776;
})();
var statearr_64777_64938 = state_64772__$1;
(statearr_64777_64938[(2)] = null);

(statearr_64777_64938[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64773 === (6))){
var inst_64769 = (state_64772[(2)]);
var inst_64770 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_64772__$1 = (function (){var statearr_64778 = state_64772;
(statearr_64778[(11)] = inst_64769);

return statearr_64778;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64772__$1,inst_64770);
} else {
if((state_val_64773 === (3))){
var inst_64708 = (state_64772[(7)]);
var inst_64719 = (state_64772[(2)]);
var inst_64720 = cljs.core.async.close_BANG_(inst_64708);
var inst_64721 = cljs.core.async.timeout((20));
var state_64772__$1 = (function (){var statearr_64780 = state_64772;
(statearr_64780[(12)] = inst_64719);

(statearr_64780[(13)] = inst_64720);

return statearr_64780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64772__$1,(4),inst_64721);
} else {
if((state_val_64773 === (2))){
var inst_64708 = (state_64772[(7)]);
var inst_64717 = (state_64772[(2)]);
var state_64772__$1 = (function (){var statearr_64781 = state_64772;
(statearr_64781[(14)] = inst_64717);

return statearr_64781;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64772__$1,(3),inst_64708,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_64773 === (11))){
var inst_64744 = (state_64772[(15)]);
var inst_64766 = (state_64772[(2)]);
var _ = (function (){var statearr_64782 = state_64772;
(statearr_64782[(4)] = cljs.core.rest((state_64772[(4)])));

return statearr_64782;
})();
var state_64772__$1 = (function (){var statearr_64783 = state_64772;
(statearr_64783[(16)] = inst_64766);

return statearr_64783;
})();
var statearr_64784_64939 = state_64772__$1;
(statearr_64784_64939[(2)] = inst_64744);

(statearr_64784_64939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64773 === (9))){
var inst_64743 = (state_64772[(17)]);
var inst_64747 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64748 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64749 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64750 = cljs.core.cons(inst_64749,inst_64743);
var inst_64751 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"pass","pass",1574159993),18,78,inst_64748,78,inst_64750,"Closing input should flush remaining"];
var inst_64752 = cljs.core.PersistentHashMap.fromArrays(inst_64747,inst_64751);
var inst_64753 = cljs.test.report.call(null,inst_64752);
var state_64772__$1 = state_64772;
var statearr_64785_64940 = state_64772__$1;
(statearr_64785_64940[(2)] = inst_64753);

(statearr_64785_64940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64773 === (5))){
var inst_64710 = (state_64772[(8)]);
var inst_64743 = (state_64772[(17)]);
var inst_64744 = (state_64772[(15)]);
var _ = (function (){var statearr_64787 = state_64772;
(statearr_64787[(4)] = cljs.core.cons((8),(state_64772[(4)])));

return statearr_64787;
})();
var inst_64735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64737 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_64738 = (new cljs.core.PersistentVector(null,2,(5),inst_64736,inst_64737,null));
var inst_64739 = [inst_64738];
var inst_64740 = (new cljs.core.PersistentVector(null,1,(5),inst_64735,inst_64739,null));
var inst_64741 = cljs.core.deref(inst_64710);
var inst_64742 = (new cljs.core.List(null,inst_64741,null,(1),null));
var inst_64743__$1 = (new cljs.core.List(null,inst_64740,inst_64742,(2),null));
var inst_64744__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_64743__$1);
var state_64772__$1 = (function (){var statearr_64788 = state_64772;
(statearr_64788[(17)] = inst_64743__$1);

(statearr_64788[(15)] = inst_64744__$1);

return statearr_64788;
})();
if(cljs.core.truth_(inst_64744__$1)){
var statearr_64789_64941 = state_64772__$1;
(statearr_64789_64941[(1)] = (9));

} else {
var statearr_64790_64942 = state_64772__$1;
(statearr_64790_64942[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64773 === (10))){
var inst_64743 = (state_64772[(17)]);
var inst_64755 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_64756 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_64757 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_64758 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_64759 = cljs.core.cons(inst_64758,inst_64743);
var inst_64760 = (new cljs.core.List(null,inst_64759,null,(1),null));
var inst_64761 = (new cljs.core.List(null,inst_64757,inst_64760,(2),null));
var inst_64762 = ["bb_web_ds_tools/components/async_buffer_test.cljs",40,new cljs.core.Keyword(null,"fail","fail",1706214930),18,78,inst_64756,78,inst_64761,"Closing input should flush remaining"];
var inst_64763 = cljs.core.PersistentHashMap.fromArrays(inst_64755,inst_64762);
var inst_64764 = cljs.test.report.call(null,inst_64763);
var state_64772__$1 = state_64772;
var statearr_64795_64943 = state_64772__$1;
(statearr_64795_64943[(2)] = inst_64764);

(statearr_64795_64943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64773 === (8))){
var _ = (function (){var statearr_64797 = state_64772;
(statearr_64797[(4)] = cljs.core.rest((state_64772[(4)])));

return statearr_64797;
})();
var state_64772__$1 = state_64772;
var ex64786 = (state_64772__$1[(2)]);
var statearr_64798_64944 = state_64772__$1;
(statearr_64798_64944[(5)] = ex64786);


var statearr_64799_64945 = state_64772__$1;
(statearr_64799_64945[(1)] = (7));

(statearr_64799_64945[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0 = (function (){
var statearr_64800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64800[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__);

(statearr_64800[(1)] = (1));

return statearr_64800;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1 = (function (state_64772){
while(true){
var ret_value__32541__auto__ = (function (){try{while(true){
var result__32542__auto__ = switch__32539__auto__(state_64772);
if(cljs.core.keyword_identical_QMARK_(result__32542__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32542__auto__;
}
break;
}
}catch (e64802){var ex__32543__auto__ = e64802;
var statearr_64803_64946 = state_64772;
(statearr_64803_64946[(2)] = ex__32543__auto__);


if(cljs.core.seq((state_64772[(4)]))){
var statearr_64804_64947 = state_64772;
(statearr_64804_64947[(1)] = cljs.core.first((state_64772[(4)])));

} else {
throw ex__32543__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32541__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64948 = state_64772;
state_64772 = G__64948;
continue;
} else {
return ret_value__32541__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__ = function(state_64772){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1.call(this,state_64772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32540__auto__;
})()
})();
var state__32612__auto__ = (function (){var statearr_64810 = f__32611__auto__();
(statearr_64810[(6)] = c__32610__auto__);

return statearr_64810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32612__auto__);
}));

return c__32610__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta64704","meta64704",2010126056,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64703");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64703");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test64703.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test64703 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test64703(meta64704){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703(meta64704));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test64703(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
