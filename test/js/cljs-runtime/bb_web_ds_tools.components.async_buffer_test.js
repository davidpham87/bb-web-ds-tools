goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095 = (function (meta56096){
this.meta56096 = meta56096;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56097,meta56096__$1){
var self__ = this;
var _56097__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095(meta56096__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56097){
var self__ = this;
var _56097__$1 = this;
return self__.meta56096;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56099 = (arguments.length - (1));
switch (G__56099) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.prototype.apply = (function (self__,args56098){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56098)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56271){
var state_val_56272 = (state_56271[(1)]);
if((state_val_56272 === (7))){
var inst_56120 = (state_56271[(2)]);
var inst_56125 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56126 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56127 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56126,19,inst_56120,"Buffer should not flush automatically without timer"];
var inst_56129 = cljs.core.PersistentHashMap.fromArrays(inst_56125,inst_56127);
var inst_56130 = cljs.test.report.call(null,inst_56129);
var state_56271__$1 = state_56271;
var statearr_56283_56878 = state_56271__$1;
(statearr_56283_56878[(2)] = inst_56130);

(statearr_56283_56878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (20))){
var inst_56108 = (state_56271[(7)]);
var inst_56214 = (state_56271[(2)]);
var inst_56215 = (inst_56108.cljs$core$IFn$_invoke$arity$0 ? inst_56108.cljs$core$IFn$_invoke$arity$0() : inst_56108.call(null));
var inst_56216 = cljs.core.async.timeout((20));
var state_56271__$1 = (function (){var statearr_56284 = state_56271;
(statearr_56284[(8)] = inst_56214);

(statearr_56284[(9)] = inst_56215);

return statearr_56284;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56271__$1,(21),inst_56216);
} else {
if((state_val_56272 === (27))){
var inst_56241 = (state_56271[(10)]);
var inst_56253 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56254 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56255 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56256 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56257 = cljs.core.cons(inst_56256,inst_56241);
var inst_56258 = (new cljs.core.List(null,inst_56257,null,(1),null));
var inst_56259 = (new cljs.core.List(null,inst_56255,inst_56258,(2),null));
var inst_56260 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56254,29,inst_56259,"Subsequent flush should work"];
var inst_56261 = cljs.core.PersistentHashMap.fromArrays(inst_56253,inst_56260);
var inst_56262 = cljs.test.report.call(null,inst_56261);
var state_56271__$1 = state_56271;
var statearr_56285_56880 = state_56271__$1;
(statearr_56285_56880[(2)] = inst_56262);

(statearr_56285_56880[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (1))){
var inst_56101 = (state_56271[(11)]);
var inst_56103 = (state_56271[(12)]);
var inst_56101__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56102 = cljs.core.PersistentVector.EMPTY;
var inst_56103__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56102);
var inst_56104 = (function (){var input_ch = inst_56101__$1;
var results = inst_56103__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56105 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56106 = [inst_56101__$1,inst_56104];
var inst_56107 = cljs.core.PersistentHashMap.fromArrays(inst_56105,inst_56106);
var inst_56108 = bb_web_ds_tools.components.async_buffer.create(inst_56107);
var state_56271__$1 = (function (){var statearr_56286 = state_56271;
(statearr_56286[(11)] = inst_56101__$1);

(statearr_56286[(12)] = inst_56103__$1);

(statearr_56286[(7)] = inst_56108);

return statearr_56286;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56271__$1,(2),inst_56101__$1,(1));
} else {
if((state_val_56272 === (24))){
var inst_56219 = (state_56271[(2)]);
var inst_56220 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56221 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56222 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56221,29,inst_56219,"Subsequent flush should work"];
var inst_56223 = cljs.core.PersistentHashMap.fromArrays(inst_56220,inst_56222);
var inst_56224 = cljs.test.report.call(null,inst_56223);
var state_56271__$1 = state_56271;
var statearr_56288_56886 = state_56271__$1;
(statearr_56288_56886[(2)] = inst_56224);

(statearr_56288_56886[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (4))){
var inst_56115 = (state_56271[(2)]);
var state_56271__$1 = (function (){var statearr_56289 = state_56271;
(statearr_56289[(13)] = inst_56115);

return statearr_56289;
})();
var statearr_56290_56887 = state_56271__$1;
(statearr_56290_56887[(2)] = null);

(statearr_56290_56887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (15))){
var inst_56167 = (state_56271[(2)]);
var inst_56168 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56169 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56170 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56169,24,inst_56167,"Manual flush should flush all items"];
var inst_56171 = cljs.core.PersistentHashMap.fromArrays(inst_56168,inst_56170);
var inst_56172 = cljs.test.report.call(null,inst_56171);
var state_56271__$1 = state_56271;
var statearr_56291_56888 = state_56271__$1;
(statearr_56291_56888[(2)] = inst_56172);

(statearr_56291_56888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (21))){
var inst_56218 = (state_56271[(2)]);
var state_56271__$1 = (function (){var statearr_56292 = state_56271;
(statearr_56292[(14)] = inst_56218);

return statearr_56292;
})();
var statearr_56293_56889 = state_56271__$1;
(statearr_56293_56889[(2)] = null);

(statearr_56293_56889[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (13))){
var inst_56103 = (state_56271[(12)]);
var inst_56187 = (state_56271[(15)]);
var inst_56188 = (state_56271[(16)]);
var _ = (function (){var statearr_56294 = state_56271;
(statearr_56294[(4)] = cljs.core.cons((16),(state_56271[(4)])));

return statearr_56294;
})();
var inst_56178 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56180 = [(1),(2)];
var inst_56181 = (new cljs.core.PersistentVector(null,2,(5),inst_56179,inst_56180,null));
var inst_56182 = [inst_56181];
var inst_56183 = (new cljs.core.PersistentVector(null,1,(5),inst_56178,inst_56182,null));
var inst_56185 = cljs.core.deref(inst_56103);
var inst_56186 = (new cljs.core.List(null,inst_56185,null,(1),null));
var inst_56187__$1 = (new cljs.core.List(null,inst_56183,inst_56186,(2),null));
var inst_56188__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56187__$1);
var state_56271__$1 = (function (){var statearr_56295 = state_56271;
(statearr_56295[(15)] = inst_56187__$1);

(statearr_56295[(16)] = inst_56188__$1);

return statearr_56295;
})();
if(cljs.core.truth_(inst_56188__$1)){
var statearr_56303_56892 = state_56271__$1;
(statearr_56303_56892[(1)] = (17));

} else {
var statearr_56304_56893 = state_56271__$1;
(statearr_56304_56893[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (22))){
var inst_56103 = (state_56271[(12)]);
var inst_56241 = (state_56271[(10)]);
var inst_56242 = (state_56271[(17)]);
var _ = (function (){var statearr_56306 = state_56271;
(statearr_56306[(4)] = cljs.core.cons((25),(state_56271[(4)])));

return statearr_56306;
})();
var inst_56230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56231 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56232 = [(1),(2)];
var inst_56233 = (new cljs.core.PersistentVector(null,2,(5),inst_56231,inst_56232,null));
var inst_56234 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56235 = [(3)];
var inst_56236 = (new cljs.core.PersistentVector(null,1,(5),inst_56234,inst_56235,null));
var inst_56237 = [inst_56233,inst_56236];
var inst_56238 = (new cljs.core.PersistentVector(null,2,(5),inst_56230,inst_56237,null));
var inst_56239 = cljs.core.deref(inst_56103);
var inst_56240 = (new cljs.core.List(null,inst_56239,null,(1),null));
var inst_56241__$1 = (new cljs.core.List(null,inst_56238,inst_56240,(2),null));
var inst_56242__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56241__$1);
var state_56271__$1 = (function (){var statearr_56307 = state_56271;
(statearr_56307[(10)] = inst_56241__$1);

(statearr_56307[(17)] = inst_56242__$1);

return statearr_56307;
})();
if(cljs.core.truth_(inst_56242__$1)){
var statearr_56308_56897 = state_56271__$1;
(statearr_56308_56897[(1)] = (26));

} else {
var statearr_56309_56898 = state_56271__$1;
(statearr_56309_56898[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (6))){
var inst_56108 = (state_56271[(7)]);
var inst_56162 = (state_56271[(2)]);
var inst_56163 = (inst_56108.cljs$core$IFn$_invoke$arity$0 ? inst_56108.cljs$core$IFn$_invoke$arity$0() : inst_56108.call(null));
var inst_56164 = cljs.core.async.timeout((20));
var state_56271__$1 = (function (){var statearr_56312 = state_56271;
(statearr_56312[(18)] = inst_56162);

(statearr_56312[(19)] = inst_56163);

return statearr_56312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56271__$1,(12),inst_56164);
} else {
if((state_val_56272 === (28))){
var inst_56242 = (state_56271[(17)]);
var inst_56264 = (state_56271[(2)]);
var _ = (function (){var statearr_56313 = state_56271;
(statearr_56313[(4)] = cljs.core.rest((state_56271[(4)])));

return statearr_56313;
})();
var state_56271__$1 = (function (){var statearr_56314 = state_56271;
(statearr_56314[(20)] = inst_56264);

return statearr_56314;
})();
var statearr_56315_56906 = state_56271__$1;
(statearr_56315_56906[(2)] = inst_56242);

(statearr_56315_56906[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (25))){
var _ = (function (){var statearr_56317 = state_56271;
(statearr_56317[(4)] = cljs.core.rest((state_56271[(4)])));

return statearr_56317;
})();
var state_56271__$1 = state_56271;
var ex56310 = (state_56271__$1[(2)]);
var statearr_56321_56907 = state_56271__$1;
(statearr_56321_56907[(5)] = ex56310);


var statearr_56322_56908 = state_56271__$1;
(statearr_56322_56908[(1)] = (24));

(statearr_56322_56908[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (17))){
var inst_56187 = (state_56271[(15)]);
var inst_56190 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56191 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56192 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56193 = cljs.core.cons(inst_56192,inst_56187);
var inst_56194 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56191,24,inst_56193,"Manual flush should flush all items"];
var inst_56195 = cljs.core.PersistentHashMap.fromArrays(inst_56190,inst_56194);
var inst_56196 = cljs.test.report.call(null,inst_56195);
var state_56271__$1 = state_56271;
var statearr_56323_56909 = state_56271__$1;
(statearr_56323_56909[(2)] = inst_56196);

(statearr_56323_56909[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (3))){
var inst_56112 = (state_56271[(2)]);
var inst_56113 = cljs.core.async.timeout((20));
var state_56271__$1 = (function (){var statearr_56324 = state_56271;
(statearr_56324[(21)] = inst_56112);

return statearr_56324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56271__$1,(4),inst_56113);
} else {
if((state_val_56272 === (12))){
var inst_56166 = (state_56271[(2)]);
var state_56271__$1 = (function (){var statearr_56325 = state_56271;
(statearr_56325[(22)] = inst_56166);

return statearr_56325;
})();
var statearr_56326_56910 = state_56271__$1;
(statearr_56326_56910[(2)] = null);

(statearr_56326_56910[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (2))){
var inst_56101 = (state_56271[(11)]);
var inst_56110 = (state_56271[(2)]);
var state_56271__$1 = (function (){var statearr_56327 = state_56271;
(statearr_56327[(23)] = inst_56110);

return statearr_56327;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56271__$1,(3),inst_56101,(2));
} else {
if((state_val_56272 === (23))){
var inst_56267 = (state_56271[(2)]);
var inst_56268 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56271__$1 = (function (){var statearr_56328 = state_56271;
(statearr_56328[(24)] = inst_56267);

return statearr_56328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56271__$1,inst_56268);
} else {
if((state_val_56272 === (19))){
var inst_56188 = (state_56271[(16)]);
var inst_56209 = (state_56271[(2)]);
var _ = (function (){var statearr_56346 = state_56271;
(statearr_56346[(4)] = cljs.core.rest((state_56271[(4)])));

return statearr_56346;
})();
var state_56271__$1 = (function (){var statearr_56347 = state_56271;
(statearr_56347[(25)] = inst_56209);

return statearr_56347;
})();
var statearr_56348_56911 = state_56271__$1;
(statearr_56348_56911[(2)] = inst_56188);

(statearr_56348_56911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (11))){
var inst_56138 = (state_56271[(26)]);
var inst_56159 = (state_56271[(2)]);
var _ = (function (){var statearr_56349 = state_56271;
(statearr_56349[(4)] = cljs.core.rest((state_56271[(4)])));

return statearr_56349;
})();
var state_56271__$1 = (function (){var statearr_56350 = state_56271;
(statearr_56350[(27)] = inst_56159);

return statearr_56350;
})();
var statearr_56351_56912 = state_56271__$1;
(statearr_56351_56912[(2)] = inst_56138);

(statearr_56351_56912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (9))){
var inst_56137 = (state_56271[(28)]);
var inst_56140 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56141 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56142 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56143 = cljs.core.cons(inst_56142,inst_56137);
var inst_56144 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56141,19,inst_56143,"Buffer should not flush automatically without timer"];
var inst_56145 = cljs.core.PersistentHashMap.fromArrays(inst_56140,inst_56144);
var inst_56146 = cljs.test.report.call(null,inst_56145);
var state_56271__$1 = state_56271;
var statearr_56352_56913 = state_56271__$1;
(statearr_56352_56913[(2)] = inst_56146);

(statearr_56352_56913[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (5))){
var inst_56103 = (state_56271[(12)]);
var inst_56137 = (state_56271[(28)]);
var inst_56138 = (state_56271[(26)]);
var _ = (function (){var statearr_56353 = state_56271;
(statearr_56353[(4)] = cljs.core.cons((8),(state_56271[(4)])));

return statearr_56353;
})();
var inst_56136 = cljs.core.deref(inst_56103);
var inst_56137__$1 = (new cljs.core.List(null,inst_56136,null,(1),null));
var inst_56138__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56137__$1);
var state_56271__$1 = (function (){var statearr_56354 = state_56271;
(statearr_56354[(28)] = inst_56137__$1);

(statearr_56354[(26)] = inst_56138__$1);

return statearr_56354;
})();
if(cljs.core.truth_(inst_56138__$1)){
var statearr_56355_56914 = state_56271__$1;
(statearr_56355_56914[(1)] = (9));

} else {
var statearr_56356_56915 = state_56271__$1;
(statearr_56356_56915[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (14))){
var inst_56101 = (state_56271[(11)]);
var inst_56212 = (state_56271[(2)]);
var state_56271__$1 = (function (){var statearr_56358 = state_56271;
(statearr_56358[(29)] = inst_56212);

return statearr_56358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56271__$1,(20),inst_56101,(3));
} else {
if((state_val_56272 === (26))){
var inst_56241 = (state_56271[(10)]);
var inst_56244 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56245 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56246 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56247 = cljs.core.cons(inst_56246,inst_56241);
var inst_56248 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56245,29,inst_56247,"Subsequent flush should work"];
var inst_56249 = cljs.core.PersistentHashMap.fromArrays(inst_56244,inst_56248);
var inst_56250 = cljs.test.report.call(null,inst_56249);
var state_56271__$1 = state_56271;
var statearr_56375_56917 = state_56271__$1;
(statearr_56375_56917[(2)] = inst_56250);

(statearr_56375_56917[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (16))){
var _ = (function (){var statearr_56376 = state_56271;
(statearr_56376[(4)] = cljs.core.rest((state_56271[(4)])));

return statearr_56376;
})();
var state_56271__$1 = state_56271;
var ex56357 = (state_56271__$1[(2)]);
var statearr_56377_56919 = state_56271__$1;
(statearr_56377_56919[(5)] = ex56357);


var statearr_56378_56920 = state_56271__$1;
(statearr_56378_56920[(1)] = (15));

(statearr_56378_56920[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (10))){
var inst_56137 = (state_56271[(28)]);
var inst_56148 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56149 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56150 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56151 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56152 = cljs.core.cons(inst_56151,inst_56137);
var inst_56153 = (new cljs.core.List(null,inst_56152,null,(1),null));
var inst_56154 = (new cljs.core.List(null,inst_56150,inst_56153,(2),null));
var inst_56155 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56149,19,inst_56154,"Buffer should not flush automatically without timer"];
var inst_56156 = cljs.core.PersistentHashMap.fromArrays(inst_56148,inst_56155);
var inst_56157 = cljs.test.report.call(null,inst_56156);
var state_56271__$1 = state_56271;
var statearr_56380_56921 = state_56271__$1;
(statearr_56380_56921[(2)] = inst_56157);

(statearr_56380_56921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (18))){
var inst_56187 = (state_56271[(15)]);
var inst_56198 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56199 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56200 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56201 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56202 = cljs.core.cons(inst_56201,inst_56187);
var inst_56203 = (new cljs.core.List(null,inst_56202,null,(1),null));
var inst_56204 = (new cljs.core.List(null,inst_56200,inst_56203,(2),null));
var inst_56205 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56199,24,inst_56204,"Manual flush should flush all items"];
var inst_56206 = cljs.core.PersistentHashMap.fromArrays(inst_56198,inst_56205);
var inst_56207 = cljs.test.report.call(null,inst_56206);
var state_56271__$1 = state_56271;
var statearr_56381_56922 = state_56271__$1;
(statearr_56381_56922[(2)] = inst_56207);

(statearr_56381_56922[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56272 === (8))){
var _ = (function (){var statearr_56405 = state_56271;
(statearr_56405[(4)] = cljs.core.rest((state_56271[(4)])));

return statearr_56405;
})();
var state_56271__$1 = state_56271;
var ex56379 = (state_56271__$1[(2)]);
var statearr_56406_56923 = state_56271__$1;
(statearr_56406_56923[(5)] = ex56379);


var statearr_56407_56924 = state_56271__$1;
(statearr_56407_56924[(1)] = (7));

(statearr_56407_56924[(5)] = null);



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
var statearr_56408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56408[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56408[(1)] = (1));

return statearr_56408;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56271){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56271);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56409){var ex__32294__auto__ = e56409;
var statearr_56410_56925 = state_56271;
(statearr_56410_56925[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56271[(4)]))){
var statearr_56411_56926 = state_56271;
(statearr_56411_56926[(1)] = cljs.core.first((state_56271[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56927 = state_56271;
state_56271 = G__56927;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56271){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56421 = f__32362__auto__();
(statearr_56421[(6)] = c__32361__auto__);

return statearr_56421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56096","meta56096",949382065,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56095");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56095");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56095.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56095 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56095(meta56096){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095(meta56096));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56095(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428 = (function (meta56429){
this.meta56429 = meta56429;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56430,meta56429__$1){
var self__ = this;
var _56430__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428(meta56429__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56430){
var self__ = this;
var _56430__$1 = this;
return self__.meta56429;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56438 = (arguments.length - (1));
switch (G__56438) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.prototype.apply = (function (self__,args56433){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56433)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56648){
var state_val_56649 = (state_56648[(1)]);
if((state_val_56649 === (7))){
var inst_56454 = (state_56648[(2)]);
var inst_56455 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56456 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56457 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56456,47,inst_56454,"Should not flush before timeout"];
var inst_56458 = cljs.core.PersistentHashMap.fromArrays(inst_56455,inst_56457);
var inst_56459 = cljs.test.report.call(null,inst_56458);
var state_56648__$1 = state_56648;
var statearr_56651_56929 = state_56648__$1;
(statearr_56651_56929[(2)] = inst_56459);

(statearr_56651_56929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (20))){
var inst_56541 = (state_56648[(2)]);
var inst_56542 = cljs.core.async.timeout((50));
var state_56648__$1 = (function (){var statearr_56652 = state_56648;
(statearr_56652[(7)] = inst_56541);

return statearr_56652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56648__$1,(21),inst_56542);
} else {
if((state_val_56649 === (27))){
var _ = (function (){var statearr_56653 = state_56648;
(statearr_56653[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56653;
})();
var state_56648__$1 = state_56648;
var ex56650 = (state_56648__$1[(2)]);
var statearr_56654_56931 = state_56648__$1;
(statearr_56654_56931[(5)] = ex56650);


var statearr_56655_56932 = state_56648__$1;
(statearr_56655_56932[(1)] = (26));

(statearr_56655_56932[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (1))){
var inst_56439 = (state_56648[(8)]);
var inst_56441 = (state_56648[(9)]);
var inst_56439__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56440 = cljs.core.PersistentVector.EMPTY;
var inst_56441__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56440);
var inst_56442 = (function (){var input_ch = inst_56439__$1;
var results = inst_56441__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56443 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56444 = [inst_56439__$1,(100),inst_56442];
var inst_56445 = cljs.core.PersistentHashMap.fromArrays(inst_56443,inst_56444);
var inst_56446 = bb_web_ds_tools.components.async_buffer.create(inst_56445);
var state_56648__$1 = (function (){var statearr_56656 = state_56648;
(statearr_56656[(8)] = inst_56439__$1);

(statearr_56656[(9)] = inst_56441__$1);

(statearr_56656[(10)] = inst_56446);

return statearr_56656;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56648__$1,(2),inst_56439__$1,(1));
} else {
if((state_val_56649 === (24))){
var inst_56441 = (state_56648[(9)]);
var inst_56569 = (state_56648[(11)]);
var inst_56570 = (state_56648[(12)]);
var _ = (function (){var statearr_56657 = state_56648;
(statearr_56657[(4)] = cljs.core.cons((27),(state_56648[(4)])));

return statearr_56657;
})();
var inst_56561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56563 = [(1),(2)];
var inst_56564 = (new cljs.core.PersistentVector(null,2,(5),inst_56562,inst_56563,null));
var inst_56565 = [inst_56564];
var inst_56566 = (new cljs.core.PersistentVector(null,1,(5),inst_56561,inst_56565,null));
var inst_56567 = cljs.core.deref(inst_56441);
var inst_56568 = (new cljs.core.List(null,inst_56567,null,(1),null));
var inst_56569__$1 = (new cljs.core.List(null,inst_56566,inst_56568,(2),null));
var inst_56570__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56569__$1);
var state_56648__$1 = (function (){var statearr_56658 = state_56648;
(statearr_56658[(11)] = inst_56569__$1);

(statearr_56658[(12)] = inst_56570__$1);

return statearr_56658;
})();
if(cljs.core.truth_(inst_56570__$1)){
var statearr_56659_56934 = state_56648__$1;
(statearr_56659_56934[(1)] = (28));

} else {
var statearr_56660_56935 = state_56648__$1;
(statearr_56660_56935[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (4))){
var inst_56453 = (state_56648[(2)]);
var state_56648__$1 = (function (){var statearr_56661 = state_56648;
(statearr_56661[(13)] = inst_56453);

return statearr_56661;
})();
var statearr_56662_56936 = state_56648__$1;
(statearr_56662_56936[(2)] = null);

(statearr_56662_56936[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (15))){
var inst_56495 = (state_56648[(2)]);
var inst_56496 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56497 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56498 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56497,50,inst_56495,"Should flush after timeout"];
var inst_56499 = cljs.core.PersistentHashMap.fromArrays(inst_56496,inst_56498);
var inst_56500 = cljs.test.report.call(null,inst_56499);
var state_56648__$1 = state_56648;
var statearr_56663_56938 = state_56648__$1;
(statearr_56663_56938[(2)] = inst_56500);

(statearr_56663_56938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (21))){
var inst_56439 = (state_56648[(8)]);
var inst_56544 = (state_56648[(2)]);
var state_56648__$1 = (function (){var statearr_56664 = state_56648;
(statearr_56664[(14)] = inst_56544);

return statearr_56664;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56648__$1,(22),inst_56439,(4));
} else {
if((state_val_56649 === (31))){
var inst_56597 = (state_56648[(2)]);
var state_56648__$1 = (function (){var statearr_56665 = state_56648;
(statearr_56665[(15)] = inst_56597);

return statearr_56665;
})();
var statearr_56666_56939 = state_56648__$1;
(statearr_56666_56939[(2)] = null);

(statearr_56666_56939[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (32))){
var inst_56441 = (state_56648[(9)]);
var inst_56620 = (state_56648[(16)]);
var inst_56621 = (state_56648[(17)]);
var _ = (function (){var statearr_56667 = state_56648;
(statearr_56667[(4)] = cljs.core.cons((35),(state_56648[(4)])));

return statearr_56667;
})();
var inst_56609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56610 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56611 = [(1),(2)];
var inst_56612 = (new cljs.core.PersistentVector(null,2,(5),inst_56610,inst_56611,null));
var inst_56613 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56614 = [(3),(4)];
var inst_56615 = (new cljs.core.PersistentVector(null,2,(5),inst_56613,inst_56614,null));
var inst_56616 = [inst_56612,inst_56615];
var inst_56617 = (new cljs.core.PersistentVector(null,2,(5),inst_56609,inst_56616,null));
var inst_56618 = cljs.core.deref(inst_56441);
var inst_56619 = (new cljs.core.List(null,inst_56618,null,(1),null));
var inst_56620__$1 = (new cljs.core.List(null,inst_56617,inst_56619,(2),null));
var inst_56621__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56620__$1);
var state_56648__$1 = (function (){var statearr_56668 = state_56648;
(statearr_56668[(16)] = inst_56620__$1);

(statearr_56668[(17)] = inst_56621__$1);

return statearr_56668;
})();
if(cljs.core.truth_(inst_56621__$1)){
var statearr_56669_56940 = state_56648__$1;
(statearr_56669_56940[(1)] = (36));

} else {
var statearr_56670_56941 = state_56648__$1;
(statearr_56670_56941[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (33))){
var inst_56645 = (state_56648[(2)]);
var inst_56646 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56648__$1 = (function (){var statearr_56671 = state_56648;
(statearr_56671[(18)] = inst_56645);

return statearr_56671;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56648__$1,inst_56646);
} else {
if((state_val_56649 === (13))){
var inst_56441 = (state_56648[(9)]);
var inst_56514 = (state_56648[(19)]);
var inst_56515 = (state_56648[(20)]);
var _ = (function (){var statearr_56672 = state_56648;
(statearr_56672[(4)] = cljs.core.cons((16),(state_56648[(4)])));

return statearr_56672;
})();
var inst_56506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56508 = [(1),(2)];
var inst_56509 = (new cljs.core.PersistentVector(null,2,(5),inst_56507,inst_56508,null));
var inst_56510 = [inst_56509];
var inst_56511 = (new cljs.core.PersistentVector(null,1,(5),inst_56506,inst_56510,null));
var inst_56512 = cljs.core.deref(inst_56441);
var inst_56513 = (new cljs.core.List(null,inst_56512,null,(1),null));
var inst_56514__$1 = (new cljs.core.List(null,inst_56511,inst_56513,(2),null));
var inst_56515__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56514__$1);
var state_56648__$1 = (function (){var statearr_56673 = state_56648;
(statearr_56673[(19)] = inst_56514__$1);

(statearr_56673[(20)] = inst_56515__$1);

return statearr_56673;
})();
if(cljs.core.truth_(inst_56515__$1)){
var statearr_56674_56945 = state_56648__$1;
(statearr_56674_56945[(1)] = (17));

} else {
var statearr_56675_56946 = state_56648__$1;
(statearr_56675_56946[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (22))){
var inst_56546 = (state_56648[(2)]);
var inst_56547 = cljs.core.async.timeout((20));
var state_56648__$1 = (function (){var statearr_56676 = state_56648;
(statearr_56676[(21)] = inst_56546);

return statearr_56676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56648__$1,(23),inst_56547);
} else {
if((state_val_56649 === (36))){
var inst_56620 = (state_56648[(16)]);
var inst_56623 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56624 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56625 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56626 = cljs.core.cons(inst_56625,inst_56620);
var inst_56627 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56624,60,inst_56626,"Should flush 3,4 after timeout from first message"];
var inst_56628 = cljs.core.PersistentHashMap.fromArrays(inst_56623,inst_56627);
var inst_56629 = cljs.test.report.call(null,inst_56628);
var state_56648__$1 = state_56648;
var statearr_56677_56947 = state_56648__$1;
(statearr_56677_56947[(2)] = inst_56629);

(statearr_56677_56947[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (29))){
var inst_56569 = (state_56648[(11)]);
var inst_56580 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56581 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56582 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56583 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56584 = cljs.core.cons(inst_56583,inst_56569);
var inst_56585 = (new cljs.core.List(null,inst_56584,null,(1),null));
var inst_56586 = (new cljs.core.List(null,inst_56582,inst_56585,(2),null));
var inst_56587 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56581,57,inst_56586,"Should not flush 3,4 yet"];
var inst_56588 = cljs.core.PersistentHashMap.fromArrays(inst_56580,inst_56587);
var inst_56589 = cljs.test.report.call(null,inst_56588);
var state_56648__$1 = state_56648;
var statearr_56678_56948 = state_56648__$1;
(statearr_56678_56948[(2)] = inst_56589);

(statearr_56678_56948[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (6))){
var inst_56491 = (state_56648[(2)]);
var inst_56492 = cljs.core.async.timeout((100));
var state_56648__$1 = (function (){var statearr_56679 = state_56648;
(statearr_56679[(22)] = inst_56491);

return statearr_56679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56648__$1,(12),inst_56492);
} else {
if((state_val_56649 === (28))){
var inst_56569 = (state_56648[(11)]);
var inst_56572 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56573 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56574 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56575 = cljs.core.cons(inst_56574,inst_56569);
var inst_56576 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56573,57,inst_56575,"Should not flush 3,4 yet"];
var inst_56577 = cljs.core.PersistentHashMap.fromArrays(inst_56572,inst_56576);
var inst_56578 = cljs.test.report.call(null,inst_56577);
var state_56648__$1 = state_56648;
var statearr_56680_56949 = state_56648__$1;
(statearr_56680_56949[(2)] = inst_56578);

(statearr_56680_56949[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (25))){
var inst_56594 = (state_56648[(2)]);
var inst_56595 = cljs.core.async.timeout((80));
var state_56648__$1 = (function (){var statearr_56681 = state_56648;
(statearr_56681[(23)] = inst_56594);

return statearr_56681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56648__$1,(31),inst_56595);
} else {
if((state_val_56649 === (34))){
var inst_56598 = (state_56648[(2)]);
var inst_56599 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56600 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56601 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56600,60,inst_56598,"Should flush 3,4 after timeout from first message"];
var inst_56602 = cljs.core.PersistentHashMap.fromArrays(inst_56599,inst_56601);
var inst_56603 = cljs.test.report.call(null,inst_56602);
var state_56648__$1 = state_56648;
var statearr_56682_56953 = state_56648__$1;
(statearr_56682_56953[(2)] = inst_56603);

(statearr_56682_56953[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (17))){
var inst_56514 = (state_56648[(19)]);
var inst_56517 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56518 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56519 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56520 = cljs.core.cons(inst_56519,inst_56514);
var inst_56521 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56518,50,inst_56520,"Should flush after timeout"];
var inst_56522 = cljs.core.PersistentHashMap.fromArrays(inst_56517,inst_56521);
var inst_56523 = cljs.test.report.call(null,inst_56522);
var state_56648__$1 = state_56648;
var statearr_56683_56955 = state_56648__$1;
(statearr_56683_56955[(2)] = inst_56523);

(statearr_56683_56955[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (3))){
var inst_56450 = (state_56648[(2)]);
var inst_56451 = cljs.core.async.timeout((50));
var state_56648__$1 = (function (){var statearr_56684 = state_56648;
(statearr_56684[(24)] = inst_56450);

return statearr_56684;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56648__$1,(4),inst_56451);
} else {
if((state_val_56649 === (12))){
var inst_56494 = (state_56648[(2)]);
var state_56648__$1 = (function (){var statearr_56685 = state_56648;
(statearr_56685[(25)] = inst_56494);

return statearr_56685;
})();
var statearr_56686_56956 = state_56648__$1;
(statearr_56686_56956[(2)] = null);

(statearr_56686_56956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (2))){
var inst_56439 = (state_56648[(8)]);
var inst_56448 = (state_56648[(2)]);
var state_56648__$1 = (function (){var statearr_56688 = state_56648;
(statearr_56688[(26)] = inst_56448);

return statearr_56688;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56648__$1,(3),inst_56439,(2));
} else {
if((state_val_56649 === (23))){
var inst_56549 = (state_56648[(2)]);
var state_56648__$1 = (function (){var statearr_56689 = state_56648;
(statearr_56689[(27)] = inst_56549);

return statearr_56689;
})();
var statearr_56690_56957 = state_56648__$1;
(statearr_56690_56957[(2)] = null);

(statearr_56690_56957[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (35))){
var _ = (function (){var statearr_56691 = state_56648;
(statearr_56691[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56691;
})();
var state_56648__$1 = state_56648;
var ex56687 = (state_56648__$1[(2)]);
var statearr_56692_56958 = state_56648__$1;
(statearr_56692_56958[(5)] = ex56687);


var statearr_56693_56959 = state_56648__$1;
(statearr_56693_56959[(1)] = (34));

(statearr_56693_56959[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (19))){
var inst_56515 = (state_56648[(20)]);
var inst_56536 = (state_56648[(2)]);
var _ = (function (){var statearr_56694 = state_56648;
(statearr_56694[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56694;
})();
var state_56648__$1 = (function (){var statearr_56695 = state_56648;
(statearr_56695[(28)] = inst_56536);

return statearr_56695;
})();
var statearr_56696_56961 = state_56648__$1;
(statearr_56696_56961[(2)] = inst_56515);

(statearr_56696_56961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (11))){
var inst_56467 = (state_56648[(29)]);
var inst_56488 = (state_56648[(2)]);
var _ = (function (){var statearr_56697 = state_56648;
(statearr_56697[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56697;
})();
var state_56648__$1 = (function (){var statearr_56698 = state_56648;
(statearr_56698[(30)] = inst_56488);

return statearr_56698;
})();
var statearr_56699_56963 = state_56648__$1;
(statearr_56699_56963[(2)] = inst_56467);

(statearr_56699_56963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (9))){
var inst_56466 = (state_56648[(31)]);
var inst_56469 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56470 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56471 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56472 = cljs.core.cons(inst_56471,inst_56466);
var inst_56473 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56470,47,inst_56472,"Should not flush before timeout"];
var inst_56474 = cljs.core.PersistentHashMap.fromArrays(inst_56469,inst_56473);
var inst_56475 = cljs.test.report.call(null,inst_56474);
var state_56648__$1 = state_56648;
var statearr_56700_56964 = state_56648__$1;
(statearr_56700_56964[(2)] = inst_56475);

(statearr_56700_56964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (5))){
var inst_56441 = (state_56648[(9)]);
var inst_56466 = (state_56648[(31)]);
var inst_56467 = (state_56648[(29)]);
var _ = (function (){var statearr_56701 = state_56648;
(statearr_56701[(4)] = cljs.core.cons((8),(state_56648[(4)])));

return statearr_56701;
})();
var inst_56465 = cljs.core.deref(inst_56441);
var inst_56466__$1 = (new cljs.core.List(null,inst_56465,null,(1),null));
var inst_56467__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56466__$1);
var state_56648__$1 = (function (){var statearr_56702 = state_56648;
(statearr_56702[(31)] = inst_56466__$1);

(statearr_56702[(29)] = inst_56467__$1);

return statearr_56702;
})();
if(cljs.core.truth_(inst_56467__$1)){
var statearr_56703_56965 = state_56648__$1;
(statearr_56703_56965[(1)] = (9));

} else {
var statearr_56704_56966 = state_56648__$1;
(statearr_56704_56966[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (14))){
var inst_56439 = (state_56648[(8)]);
var inst_56539 = (state_56648[(2)]);
var state_56648__$1 = (function (){var statearr_56706 = state_56648;
(statearr_56706[(32)] = inst_56539);

return statearr_56706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56648__$1,(20),inst_56439,(3));
} else {
if((state_val_56649 === (26))){
var inst_56550 = (state_56648[(2)]);
var inst_56551 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56552 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56553 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56552,57,inst_56550,"Should not flush 3,4 yet"];
var inst_56554 = cljs.core.PersistentHashMap.fromArrays(inst_56551,inst_56553);
var inst_56555 = cljs.test.report.call(null,inst_56554);
var state_56648__$1 = state_56648;
var statearr_56707_56968 = state_56648__$1;
(statearr_56707_56968[(2)] = inst_56555);

(statearr_56707_56968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (16))){
var _ = (function (){var statearr_56708 = state_56648;
(statearr_56708[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56708;
})();
var state_56648__$1 = state_56648;
var ex56705 = (state_56648__$1[(2)]);
var statearr_56709_56971 = state_56648__$1;
(statearr_56709_56971[(5)] = ex56705);


var statearr_56710_56972 = state_56648__$1;
(statearr_56710_56972[(1)] = (15));

(statearr_56710_56972[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (38))){
var inst_56621 = (state_56648[(17)]);
var inst_56642 = (state_56648[(2)]);
var _ = (function (){var statearr_56711 = state_56648;
(statearr_56711[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56711;
})();
var state_56648__$1 = (function (){var statearr_56712 = state_56648;
(statearr_56712[(33)] = inst_56642);

return statearr_56712;
})();
var statearr_56713_56973 = state_56648__$1;
(statearr_56713_56973[(2)] = inst_56621);

(statearr_56713_56973[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (30))){
var inst_56570 = (state_56648[(12)]);
var inst_56591 = (state_56648[(2)]);
var _ = (function (){var statearr_56714 = state_56648;
(statearr_56714[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56714;
})();
var state_56648__$1 = (function (){var statearr_56715 = state_56648;
(statearr_56715[(34)] = inst_56591);

return statearr_56715;
})();
var statearr_56716_56974 = state_56648__$1;
(statearr_56716_56974[(2)] = inst_56570);

(statearr_56716_56974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (10))){
var inst_56466 = (state_56648[(31)]);
var inst_56477 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56478 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56479 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56480 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56481 = cljs.core.cons(inst_56480,inst_56466);
var inst_56482 = (new cljs.core.List(null,inst_56481,null,(1),null));
var inst_56483 = (new cljs.core.List(null,inst_56479,inst_56482,(2),null));
var inst_56484 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56478,47,inst_56483,"Should not flush before timeout"];
var inst_56485 = cljs.core.PersistentHashMap.fromArrays(inst_56477,inst_56484);
var inst_56486 = cljs.test.report.call(null,inst_56485);
var state_56648__$1 = state_56648;
var statearr_56717_56975 = state_56648__$1;
(statearr_56717_56975[(2)] = inst_56486);

(statearr_56717_56975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (18))){
var inst_56514 = (state_56648[(19)]);
var inst_56525 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56526 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56527 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56528 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56529 = cljs.core.cons(inst_56528,inst_56514);
var inst_56530 = (new cljs.core.List(null,inst_56529,null,(1),null));
var inst_56531 = (new cljs.core.List(null,inst_56527,inst_56530,(2),null));
var inst_56532 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56526,50,inst_56531,"Should flush after timeout"];
var inst_56533 = cljs.core.PersistentHashMap.fromArrays(inst_56525,inst_56532);
var inst_56534 = cljs.test.report.call(null,inst_56533);
var state_56648__$1 = state_56648;
var statearr_56719_56976 = state_56648__$1;
(statearr_56719_56976[(2)] = inst_56534);

(statearr_56719_56976[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (37))){
var inst_56620 = (state_56648[(16)]);
var inst_56631 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56632 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56633 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56634 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56635 = cljs.core.cons(inst_56634,inst_56620);
var inst_56636 = (new cljs.core.List(null,inst_56635,null,(1),null));
var inst_56637 = (new cljs.core.List(null,inst_56633,inst_56636,(2),null));
var inst_56638 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56632,60,inst_56637,"Should flush 3,4 after timeout from first message"];
var inst_56639 = cljs.core.PersistentHashMap.fromArrays(inst_56631,inst_56638);
var inst_56640 = cljs.test.report.call(null,inst_56639);
var state_56648__$1 = state_56648;
var statearr_56731_56977 = state_56648__$1;
(statearr_56731_56977[(2)] = inst_56640);

(statearr_56731_56977[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56649 === (8))){
var _ = (function (){var statearr_56732 = state_56648;
(statearr_56732[(4)] = cljs.core.rest((state_56648[(4)])));

return statearr_56732;
})();
var state_56648__$1 = state_56648;
var ex56718 = (state_56648__$1[(2)]);
var statearr_56734_56980 = state_56648__$1;
(statearr_56734_56980[(5)] = ex56718);


var statearr_56735_56981 = state_56648__$1;
(statearr_56735_56981[(1)] = (7));

(statearr_56735_56981[(5)] = null);



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
var statearr_56737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56737[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56737[(1)] = (1));

return statearr_56737;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56648){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56648);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56738){var ex__32294__auto__ = e56738;
var statearr_56739_56983 = state_56648;
(statearr_56739_56983[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56648[(4)]))){
var statearr_56740_56984 = state_56648;
(statearr_56740_56984[(1)] = cljs.core.first((state_56648[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56985 = state_56648;
state_56648 = G__56985;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56648){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56751 = f__32362__auto__();
(statearr_56751[(6)] = c__32361__auto__);

return statearr_56751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56429","meta56429",2100647478,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56428");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56428");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56428.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56428 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56428(meta56429){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428(meta56429));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56428(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754 = (function (meta56755){
this.meta56755 = meta56755;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56756,meta56755__$1){
var self__ = this;
var _56756__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754(meta56755__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56756){
var self__ = this;
var _56756__$1 = this;
return self__.meta56755;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56758 = (arguments.length - (1));
switch (G__56758) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.prototype.apply = (function (self__,args56757){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56757)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56828){
var state_val_56829 = (state_56828[(1)]);
if((state_val_56829 === (7))){
var inst_56781 = (state_56828[(2)]);
var inst_56782 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56783 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56784 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56783,78,inst_56781,"Closing input should flush remaining"];
var inst_56785 = cljs.core.PersistentHashMap.fromArrays(inst_56782,inst_56784);
var inst_56786 = cljs.test.report.call(null,inst_56785);
var state_56828__$1 = state_56828;
var statearr_56832_56988 = state_56828__$1;
(statearr_56832_56988[(2)] = inst_56786);

(statearr_56832_56988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (1))){
var inst_56763 = (state_56828[(7)]);
var inst_56766 = (state_56828[(8)]);
var inst_56763__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56765 = cljs.core.PersistentVector.EMPTY;
var inst_56766__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56765);
var inst_56767 = (function (){var input_ch = inst_56763__$1;
var results = inst_56766__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56768 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56770 = [inst_56763__$1,inst_56767];
var inst_56771 = cljs.core.PersistentHashMap.fromArrays(inst_56768,inst_56770);
var inst_56772 = bb_web_ds_tools.components.async_buffer.create(inst_56771);
var state_56828__$1 = (function (){var statearr_56836 = state_56828;
(statearr_56836[(7)] = inst_56763__$1);

(statearr_56836[(8)] = inst_56766__$1);

(statearr_56836[(9)] = inst_56772);

return statearr_56836;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56828__$1,(2),inst_56763__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56829 === (4))){
var inst_56780 = (state_56828[(2)]);
var state_56828__$1 = (function (){var statearr_56837 = state_56828;
(statearr_56837[(10)] = inst_56780);

return statearr_56837;
})();
var statearr_56838_56989 = state_56828__$1;
(statearr_56838_56989[(2)] = null);

(statearr_56838_56989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (6))){
var inst_56825 = (state_56828[(2)]);
var inst_56826 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56828__$1 = (function (){var statearr_56839 = state_56828;
(statearr_56839[(11)] = inst_56825);

return statearr_56839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56828__$1,inst_56826);
} else {
if((state_val_56829 === (3))){
var inst_56763 = (state_56828[(7)]);
var inst_56776 = (state_56828[(2)]);
var inst_56777 = cljs.core.async.close_BANG_(inst_56763);
var inst_56778 = cljs.core.async.timeout((20));
var state_56828__$1 = (function (){var statearr_56841 = state_56828;
(statearr_56841[(12)] = inst_56776);

(statearr_56841[(13)] = inst_56777);

return statearr_56841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56828__$1,(4),inst_56778);
} else {
if((state_val_56829 === (2))){
var inst_56763 = (state_56828[(7)]);
var inst_56774 = (state_56828[(2)]);
var state_56828__$1 = (function (){var statearr_56842 = state_56828;
(statearr_56842[(14)] = inst_56774);

return statearr_56842;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56828__$1,(3),inst_56763,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56829 === (11))){
var inst_56801 = (state_56828[(15)]);
var inst_56822 = (state_56828[(2)]);
var _ = (function (){var statearr_56843 = state_56828;
(statearr_56843[(4)] = cljs.core.rest((state_56828[(4)])));

return statearr_56843;
})();
var state_56828__$1 = (function (){var statearr_56844 = state_56828;
(statearr_56844[(16)] = inst_56822);

return statearr_56844;
})();
var statearr_56845_56990 = state_56828__$1;
(statearr_56845_56990[(2)] = inst_56801);

(statearr_56845_56990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (9))){
var inst_56800 = (state_56828[(17)]);
var inst_56803 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56804 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56805 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56806 = cljs.core.cons(inst_56805,inst_56800);
var inst_56807 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56804,78,inst_56806,"Closing input should flush remaining"];
var inst_56808 = cljs.core.PersistentHashMap.fromArrays(inst_56803,inst_56807);
var inst_56809 = cljs.test.report.call(null,inst_56808);
var state_56828__$1 = state_56828;
var statearr_56846_56992 = state_56828__$1;
(statearr_56846_56992[(2)] = inst_56809);

(statearr_56846_56992[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (5))){
var inst_56766 = (state_56828[(8)]);
var inst_56800 = (state_56828[(17)]);
var inst_56801 = (state_56828[(15)]);
var _ = (function (){var statearr_56848 = state_56828;
(statearr_56848[(4)] = cljs.core.cons((8),(state_56828[(4)])));

return statearr_56848;
})();
var inst_56792 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56794 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56795 = (new cljs.core.PersistentVector(null,2,(5),inst_56793,inst_56794,null));
var inst_56796 = [inst_56795];
var inst_56797 = (new cljs.core.PersistentVector(null,1,(5),inst_56792,inst_56796,null));
var inst_56798 = cljs.core.deref(inst_56766);
var inst_56799 = (new cljs.core.List(null,inst_56798,null,(1),null));
var inst_56800__$1 = (new cljs.core.List(null,inst_56797,inst_56799,(2),null));
var inst_56801__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56800__$1);
var state_56828__$1 = (function (){var statearr_56849 = state_56828;
(statearr_56849[(17)] = inst_56800__$1);

(statearr_56849[(15)] = inst_56801__$1);

return statearr_56849;
})();
if(cljs.core.truth_(inst_56801__$1)){
var statearr_56850_56993 = state_56828__$1;
(statearr_56850_56993[(1)] = (9));

} else {
var statearr_56853_56994 = state_56828__$1;
(statearr_56853_56994[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (10))){
var inst_56800 = (state_56828[(17)]);
var inst_56811 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56812 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56813 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56814 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56815 = cljs.core.cons(inst_56814,inst_56800);
var inst_56816 = (new cljs.core.List(null,inst_56815,null,(1),null));
var inst_56817 = (new cljs.core.List(null,inst_56813,inst_56816,(2),null));
var inst_56818 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56812,78,inst_56817,"Closing input should flush remaining"];
var inst_56819 = cljs.core.PersistentHashMap.fromArrays(inst_56811,inst_56818);
var inst_56820 = cljs.test.report.call(null,inst_56819);
var state_56828__$1 = state_56828;
var statearr_56854_56998 = state_56828__$1;
(statearr_56854_56998[(2)] = inst_56820);

(statearr_56854_56998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56829 === (8))){
var _ = (function (){var statearr_56857 = state_56828;
(statearr_56857[(4)] = cljs.core.rest((state_56828[(4)])));

return statearr_56857;
})();
var state_56828__$1 = state_56828;
var ex56847 = (state_56828__$1[(2)]);
var statearr_56859_56999 = state_56828__$1;
(statearr_56859_56999[(5)] = ex56847);


var statearr_56860_57000 = state_56828__$1;
(statearr_56860_57000[(1)] = (7));

(statearr_56860_57000[(5)] = null);



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
var statearr_56862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56862[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56862[(1)] = (1));

return statearr_56862;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56828){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56828);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56863){var ex__32294__auto__ = e56863;
var statearr_56864_57001 = state_56828;
(statearr_56864_57001[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56828[(4)]))){
var statearr_56865_57002 = state_56828;
(statearr_56865_57002[(1)] = cljs.core.first((state_56828[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57003 = state_56828;
state_56828 = G__57003;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56828){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56866 = f__32362__auto__();
(statearr_56866[(6)] = c__32361__auto__);

return statearr_56866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56755","meta56755",1066241110,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56754");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56754");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56754.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56754 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56754(meta56755){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754(meta56755));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56754(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
