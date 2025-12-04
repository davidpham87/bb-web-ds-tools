goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120 = (function (meta56121){
this.meta56121 = meta56121;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56122,meta56121__$1){
var self__ = this;
var _56122__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120(meta56121__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56122){
var self__ = this;
var _56122__$1 = this;
return self__.meta56121;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56124 = (arguments.length - (1));
switch (G__56124) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.prototype.apply = (function (self__,args56123){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56123)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56299){
var state_val_56300 = (state_56299[(1)]);
if((state_val_56300 === (7))){
var inst_56151 = (state_56299[(2)]);
var inst_56152 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56153 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56154 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56153,19,inst_56151,"Buffer should not flush automatically without timer"];
var inst_56155 = cljs.core.PersistentHashMap.fromArrays(inst_56152,inst_56154);
var inst_56156 = cljs.test.report.call(null,inst_56155);
var state_56299__$1 = state_56299;
var statearr_56314_56921 = state_56299__$1;
(statearr_56314_56921[(2)] = inst_56156);

(statearr_56314_56921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (20))){
var inst_56142 = (state_56299[(7)]);
var inst_56240 = (state_56299[(2)]);
var inst_56241 = (inst_56142.cljs$core$IFn$_invoke$arity$0 ? inst_56142.cljs$core$IFn$_invoke$arity$0() : inst_56142.call(null));
var inst_56242 = cljs.core.async.timeout((20));
var state_56299__$1 = (function (){var statearr_56315 = state_56299;
(statearr_56315[(8)] = inst_56240);

(statearr_56315[(9)] = inst_56241);

return statearr_56315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56299__$1,(21),inst_56242);
} else {
if((state_val_56300 === (27))){
var inst_56270 = (state_56299[(10)]);
var inst_56281 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56282 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56283 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56284 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56285 = cljs.core.cons(inst_56284,inst_56270);
var inst_56286 = (new cljs.core.List(null,inst_56285,null,(1),null));
var inst_56287 = (new cljs.core.List(null,inst_56283,inst_56286,(2),null));
var inst_56288 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56282,29,inst_56287,"Subsequent flush should work"];
var inst_56289 = cljs.core.PersistentHashMap.fromArrays(inst_56281,inst_56288);
var inst_56290 = cljs.test.report.call(null,inst_56289);
var state_56299__$1 = state_56299;
var statearr_56316_56924 = state_56299__$1;
(statearr_56316_56924[(2)] = inst_56290);

(statearr_56316_56924[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (1))){
var inst_56134 = (state_56299[(11)]);
var inst_56136 = (state_56299[(12)]);
var inst_56134__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56135 = cljs.core.PersistentVector.EMPTY;
var inst_56136__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56135);
var inst_56137 = (function (){var input_ch = inst_56134__$1;
var results = inst_56136__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56138 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56140 = [inst_56134__$1,inst_56137];
var inst_56141 = cljs.core.PersistentHashMap.fromArrays(inst_56138,inst_56140);
var inst_56142 = bb_web_ds_tools.components.async_buffer.create(inst_56141);
var state_56299__$1 = (function (){var statearr_56318 = state_56299;
(statearr_56318[(11)] = inst_56134__$1);

(statearr_56318[(12)] = inst_56136__$1);

(statearr_56318[(7)] = inst_56142);

return statearr_56318;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56299__$1,(2),inst_56134__$1,(1));
} else {
if((state_val_56300 === (24))){
var inst_56247 = (state_56299[(2)]);
var inst_56248 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56249 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56250 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56249,29,inst_56247,"Subsequent flush should work"];
var inst_56251 = cljs.core.PersistentHashMap.fromArrays(inst_56248,inst_56250);
var inst_56252 = cljs.test.report.call(null,inst_56251);
var state_56299__$1 = state_56299;
var statearr_56319_56925 = state_56299__$1;
(statearr_56319_56925[(2)] = inst_56252);

(statearr_56319_56925[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (4))){
var inst_56149 = (state_56299[(2)]);
var state_56299__$1 = (function (){var statearr_56321 = state_56299;
(statearr_56321[(13)] = inst_56149);

return statearr_56321;
})();
var statearr_56322_56926 = state_56299__$1;
(statearr_56322_56926[(2)] = null);

(statearr_56322_56926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (15))){
var inst_56194 = (state_56299[(2)]);
var inst_56195 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56196 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56197 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56196,24,inst_56194,"Manual flush should flush all items"];
var inst_56198 = cljs.core.PersistentHashMap.fromArrays(inst_56195,inst_56197);
var inst_56199 = cljs.test.report.call(null,inst_56198);
var state_56299__$1 = state_56299;
var statearr_56324_56927 = state_56299__$1;
(statearr_56324_56927[(2)] = inst_56199);

(statearr_56324_56927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (21))){
var inst_56244 = (state_56299[(2)]);
var state_56299__$1 = (function (){var statearr_56326 = state_56299;
(statearr_56326[(14)] = inst_56244);

return statearr_56326;
})();
var statearr_56330_56929 = state_56299__$1;
(statearr_56330_56929[(2)] = null);

(statearr_56330_56929[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (13))){
var inst_56136 = (state_56299[(12)]);
var inst_56213 = (state_56299[(15)]);
var inst_56214 = (state_56299[(16)]);
var _ = (function (){var statearr_56331 = state_56299;
(statearr_56331[(4)] = cljs.core.cons((16),(state_56299[(4)])));

return statearr_56331;
})();
var inst_56205 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56206 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56207 = [(1),(2)];
var inst_56208 = (new cljs.core.PersistentVector(null,2,(5),inst_56206,inst_56207,null));
var inst_56209 = [inst_56208];
var inst_56210 = (new cljs.core.PersistentVector(null,1,(5),inst_56205,inst_56209,null));
var inst_56211 = cljs.core.deref(inst_56136);
var inst_56212 = (new cljs.core.List(null,inst_56211,null,(1),null));
var inst_56213__$1 = (new cljs.core.List(null,inst_56210,inst_56212,(2),null));
var inst_56214__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56213__$1);
var state_56299__$1 = (function (){var statearr_56333 = state_56299;
(statearr_56333[(15)] = inst_56213__$1);

(statearr_56333[(16)] = inst_56214__$1);

return statearr_56333;
})();
if(cljs.core.truth_(inst_56214__$1)){
var statearr_56334_56931 = state_56299__$1;
(statearr_56334_56931[(1)] = (17));

} else {
var statearr_56335_56932 = state_56299__$1;
(statearr_56335_56932[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (22))){
var inst_56136 = (state_56299[(12)]);
var inst_56270 = (state_56299[(10)]);
var inst_56271 = (state_56299[(17)]);
var _ = (function (){var statearr_56337 = state_56299;
(statearr_56337[(4)] = cljs.core.cons((25),(state_56299[(4)])));

return statearr_56337;
})();
var inst_56258 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56261 = [(1),(2)];
var inst_56262 = (new cljs.core.PersistentVector(null,2,(5),inst_56260,inst_56261,null));
var inst_56263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56264 = [(3)];
var inst_56265 = (new cljs.core.PersistentVector(null,1,(5),inst_56263,inst_56264,null));
var inst_56266 = [inst_56262,inst_56265];
var inst_56267 = (new cljs.core.PersistentVector(null,2,(5),inst_56258,inst_56266,null));
var inst_56268 = cljs.core.deref(inst_56136);
var inst_56269 = (new cljs.core.List(null,inst_56268,null,(1),null));
var inst_56270__$1 = (new cljs.core.List(null,inst_56267,inst_56269,(2),null));
var inst_56271__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56270__$1);
var state_56299__$1 = (function (){var statearr_56340 = state_56299;
(statearr_56340[(10)] = inst_56270__$1);

(statearr_56340[(17)] = inst_56271__$1);

return statearr_56340;
})();
if(cljs.core.truth_(inst_56271__$1)){
var statearr_56372_56934 = state_56299__$1;
(statearr_56372_56934[(1)] = (26));

} else {
var statearr_56374_56935 = state_56299__$1;
(statearr_56374_56935[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (6))){
var inst_56142 = (state_56299[(7)]);
var inst_56189 = (state_56299[(2)]);
var inst_56190 = (inst_56142.cljs$core$IFn$_invoke$arity$0 ? inst_56142.cljs$core$IFn$_invoke$arity$0() : inst_56142.call(null));
var inst_56191 = cljs.core.async.timeout((20));
var state_56299__$1 = (function (){var statearr_56380 = state_56299;
(statearr_56380[(18)] = inst_56189);

(statearr_56380[(19)] = inst_56190);

return statearr_56380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56299__$1,(12),inst_56191);
} else {
if((state_val_56300 === (28))){
var inst_56271 = (state_56299[(17)]);
var inst_56292 = (state_56299[(2)]);
var _ = (function (){var statearr_56382 = state_56299;
(statearr_56382[(4)] = cljs.core.rest((state_56299[(4)])));

return statearr_56382;
})();
var state_56299__$1 = (function (){var statearr_56384 = state_56299;
(statearr_56384[(20)] = inst_56292);

return statearr_56384;
})();
var statearr_56385_56939 = state_56299__$1;
(statearr_56385_56939[(2)] = inst_56271);

(statearr_56385_56939[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (25))){
var _ = (function (){var statearr_56388 = state_56299;
(statearr_56388[(4)] = cljs.core.rest((state_56299[(4)])));

return statearr_56388;
})();
var state_56299__$1 = state_56299;
var ex56375 = (state_56299__$1[(2)]);
var statearr_56389_56940 = state_56299__$1;
(statearr_56389_56940[(5)] = ex56375);


var statearr_56390_56941 = state_56299__$1;
(statearr_56390_56941[(1)] = (24));

(statearr_56390_56941[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (17))){
var inst_56213 = (state_56299[(15)]);
var inst_56216 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56217 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56218 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56219 = cljs.core.cons(inst_56218,inst_56213);
var inst_56220 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56217,24,inst_56219,"Manual flush should flush all items"];
var inst_56221 = cljs.core.PersistentHashMap.fromArrays(inst_56216,inst_56220);
var inst_56222 = cljs.test.report.call(null,inst_56221);
var state_56299__$1 = state_56299;
var statearr_56407_56942 = state_56299__$1;
(statearr_56407_56942[(2)] = inst_56222);

(statearr_56407_56942[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (3))){
var inst_56146 = (state_56299[(2)]);
var inst_56147 = cljs.core.async.timeout((20));
var state_56299__$1 = (function (){var statearr_56408 = state_56299;
(statearr_56408[(21)] = inst_56146);

return statearr_56408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56299__$1,(4),inst_56147);
} else {
if((state_val_56300 === (12))){
var inst_56193 = (state_56299[(2)]);
var state_56299__$1 = (function (){var statearr_56409 = state_56299;
(statearr_56409[(22)] = inst_56193);

return statearr_56409;
})();
var statearr_56410_56946 = state_56299__$1;
(statearr_56410_56946[(2)] = null);

(statearr_56410_56946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (2))){
var inst_56134 = (state_56299[(11)]);
var inst_56144 = (state_56299[(2)]);
var state_56299__$1 = (function (){var statearr_56411 = state_56299;
(statearr_56411[(23)] = inst_56144);

return statearr_56411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56299__$1,(3),inst_56134,(2));
} else {
if((state_val_56300 === (23))){
var inst_56295 = (state_56299[(2)]);
var inst_56296 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56299__$1 = (function (){var statearr_56412 = state_56299;
(statearr_56412[(24)] = inst_56295);

return statearr_56412;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56299__$1,inst_56296);
} else {
if((state_val_56300 === (19))){
var inst_56214 = (state_56299[(16)]);
var inst_56235 = (state_56299[(2)]);
var _ = (function (){var statearr_56413 = state_56299;
(statearr_56413[(4)] = cljs.core.rest((state_56299[(4)])));

return statearr_56413;
})();
var state_56299__$1 = (function (){var statearr_56414 = state_56299;
(statearr_56414[(25)] = inst_56235);

return statearr_56414;
})();
var statearr_56415_56948 = state_56299__$1;
(statearr_56415_56948[(2)] = inst_56214);

(statearr_56415_56948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (11))){
var inst_56164 = (state_56299[(26)]);
var inst_56186 = (state_56299[(2)]);
var _ = (function (){var statearr_56416 = state_56299;
(statearr_56416[(4)] = cljs.core.rest((state_56299[(4)])));

return statearr_56416;
})();
var state_56299__$1 = (function (){var statearr_56417 = state_56299;
(statearr_56417[(27)] = inst_56186);

return statearr_56417;
})();
var statearr_56418_56950 = state_56299__$1;
(statearr_56418_56950[(2)] = inst_56164);

(statearr_56418_56950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (9))){
var inst_56163 = (state_56299[(28)]);
var inst_56167 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56168 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56169 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56170 = cljs.core.cons(inst_56169,inst_56163);
var inst_56171 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56168,19,inst_56170,"Buffer should not flush automatically without timer"];
var inst_56172 = cljs.core.PersistentHashMap.fromArrays(inst_56167,inst_56171);
var inst_56173 = cljs.test.report.call(null,inst_56172);
var state_56299__$1 = state_56299;
var statearr_56419_56952 = state_56299__$1;
(statearr_56419_56952[(2)] = inst_56173);

(statearr_56419_56952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (5))){
var inst_56136 = (state_56299[(12)]);
var inst_56163 = (state_56299[(28)]);
var inst_56164 = (state_56299[(26)]);
var _ = (function (){var statearr_56420 = state_56299;
(statearr_56420[(4)] = cljs.core.cons((8),(state_56299[(4)])));

return statearr_56420;
})();
var inst_56162 = cljs.core.deref(inst_56136);
var inst_56163__$1 = (new cljs.core.List(null,inst_56162,null,(1),null));
var inst_56164__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56163__$1);
var state_56299__$1 = (function (){var statearr_56421 = state_56299;
(statearr_56421[(28)] = inst_56163__$1);

(statearr_56421[(26)] = inst_56164__$1);

return statearr_56421;
})();
if(cljs.core.truth_(inst_56164__$1)){
var statearr_56422_56956 = state_56299__$1;
(statearr_56422_56956[(1)] = (9));

} else {
var statearr_56423_56957 = state_56299__$1;
(statearr_56423_56957[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (14))){
var inst_56134 = (state_56299[(11)]);
var inst_56238 = (state_56299[(2)]);
var state_56299__$1 = (function (){var statearr_56425 = state_56299;
(statearr_56425[(29)] = inst_56238);

return statearr_56425;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56299__$1,(20),inst_56134,(3));
} else {
if((state_val_56300 === (26))){
var inst_56270 = (state_56299[(10)]);
var inst_56273 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56274 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56275 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56276 = cljs.core.cons(inst_56275,inst_56270);
var inst_56277 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56274,29,inst_56276,"Subsequent flush should work"];
var inst_56278 = cljs.core.PersistentHashMap.fromArrays(inst_56273,inst_56277);
var inst_56279 = cljs.test.report.call(null,inst_56278);
var state_56299__$1 = state_56299;
var statearr_56426_56958 = state_56299__$1;
(statearr_56426_56958[(2)] = inst_56279);

(statearr_56426_56958[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (16))){
var _ = (function (){var statearr_56427 = state_56299;
(statearr_56427[(4)] = cljs.core.rest((state_56299[(4)])));

return statearr_56427;
})();
var state_56299__$1 = state_56299;
var ex56424 = (state_56299__$1[(2)]);
var statearr_56428_56959 = state_56299__$1;
(statearr_56428_56959[(5)] = ex56424);


var statearr_56429_56960 = state_56299__$1;
(statearr_56429_56960[(1)] = (15));

(statearr_56429_56960[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (10))){
var inst_56163 = (state_56299[(28)]);
var inst_56175 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56176 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56177 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56178 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56179 = cljs.core.cons(inst_56178,inst_56163);
var inst_56180 = (new cljs.core.List(null,inst_56179,null,(1),null));
var inst_56181 = (new cljs.core.List(null,inst_56177,inst_56180,(2),null));
var inst_56182 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56176,19,inst_56181,"Buffer should not flush automatically without timer"];
var inst_56183 = cljs.core.PersistentHashMap.fromArrays(inst_56175,inst_56182);
var inst_56184 = cljs.test.report.call(null,inst_56183);
var state_56299__$1 = state_56299;
var statearr_56431_56964 = state_56299__$1;
(statearr_56431_56964[(2)] = inst_56184);

(statearr_56431_56964[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (18))){
var inst_56213 = (state_56299[(15)]);
var inst_56224 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56225 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56226 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56227 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56228 = cljs.core.cons(inst_56227,inst_56213);
var inst_56229 = (new cljs.core.List(null,inst_56228,null,(1),null));
var inst_56230 = (new cljs.core.List(null,inst_56226,inst_56229,(2),null));
var inst_56231 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56225,24,inst_56230,"Manual flush should flush all items"];
var inst_56232 = cljs.core.PersistentHashMap.fromArrays(inst_56224,inst_56231);
var inst_56233 = cljs.test.report.call(null,inst_56232);
var state_56299__$1 = state_56299;
var statearr_56432_56966 = state_56299__$1;
(statearr_56432_56966[(2)] = inst_56233);

(statearr_56432_56966[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56300 === (8))){
var _ = (function (){var statearr_56433 = state_56299;
(statearr_56433[(4)] = cljs.core.rest((state_56299[(4)])));

return statearr_56433;
})();
var state_56299__$1 = state_56299;
var ex56430 = (state_56299__$1[(2)]);
var statearr_56434_56967 = state_56299__$1;
(statearr_56434_56967[(5)] = ex56430);


var statearr_56435_56968 = state_56299__$1;
(statearr_56435_56968[(1)] = (7));

(statearr_56435_56968[(5)] = null);



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
var statearr_56436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56436[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56436[(1)] = (1));

return statearr_56436;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56299){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56299);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56437){var ex__32294__auto__ = e56437;
var statearr_56438_56974 = state_56299;
(statearr_56438_56974[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56299[(4)]))){
var statearr_56439_56975 = state_56299;
(statearr_56439_56975[(1)] = cljs.core.first((state_56299[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56976 = state_56299;
state_56299 = G__56976;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56299){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56440 = f__32362__auto__();
(statearr_56440[(6)] = c__32361__auto__);

return statearr_56440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56121","meta56121",822326723,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56120");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56120");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56120.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56120 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56120(meta56121){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120(meta56121));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56120(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443 = (function (meta56444){
this.meta56444 = meta56444;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56445,meta56444__$1){
var self__ = this;
var _56445__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443(meta56444__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56445){
var self__ = this;
var _56445__$1 = this;
return self__.meta56444;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56451 = (arguments.length - (1));
switch (G__56451) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.prototype.apply = (function (self__,args56449){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56449)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56673){
var state_val_56674 = (state_56673[(1)]);
if((state_val_56674 === (7))){
var inst_56472 = (state_56673[(2)]);
var inst_56473 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56474 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56475 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56474,47,inst_56472,"Should not flush before timeout"];
var inst_56476 = cljs.core.PersistentHashMap.fromArrays(inst_56473,inst_56475);
var inst_56477 = cljs.test.report.call(null,inst_56476);
var state_56673__$1 = state_56673;
var statearr_56676_56982 = state_56673__$1;
(statearr_56676_56982[(2)] = inst_56477);

(statearr_56676_56982[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (20))){
var inst_56560 = (state_56673[(2)]);
var inst_56561 = cljs.core.async.timeout((50));
var state_56673__$1 = (function (){var statearr_56677 = state_56673;
(statearr_56677[(7)] = inst_56560);

return statearr_56677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56673__$1,(21),inst_56561);
} else {
if((state_val_56674 === (27))){
var _ = (function (){var statearr_56678 = state_56673;
(statearr_56678[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56678;
})();
var state_56673__$1 = state_56673;
var ex56675 = (state_56673__$1[(2)]);
var statearr_56679_56985 = state_56673__$1;
(statearr_56679_56985[(5)] = ex56675);


var statearr_56680_56986 = state_56673__$1;
(statearr_56680_56986[(1)] = (26));

(statearr_56680_56986[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (1))){
var inst_56457 = (state_56673[(8)]);
var inst_56459 = (state_56673[(9)]);
var inst_56457__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56458 = cljs.core.PersistentVector.EMPTY;
var inst_56459__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56458);
var inst_56460 = (function (){var input_ch = inst_56457__$1;
var results = inst_56459__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56461 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56462 = [inst_56457__$1,(100),inst_56460];
var inst_56463 = cljs.core.PersistentHashMap.fromArrays(inst_56461,inst_56462);
var inst_56464 = bb_web_ds_tools.components.async_buffer.create(inst_56463);
var state_56673__$1 = (function (){var statearr_56681 = state_56673;
(statearr_56681[(8)] = inst_56457__$1);

(statearr_56681[(9)] = inst_56459__$1);

(statearr_56681[(10)] = inst_56464);

return statearr_56681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56673__$1,(2),inst_56457__$1,(1));
} else {
if((state_val_56674 === (24))){
var inst_56459 = (state_56673[(9)]);
var inst_56593 = (state_56673[(11)]);
var inst_56594 = (state_56673[(12)]);
var _ = (function (){var statearr_56682 = state_56673;
(statearr_56682[(4)] = cljs.core.cons((27),(state_56673[(4)])));

return statearr_56682;
})();
var inst_56584 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56587 = [(1),(2)];
var inst_56588 = (new cljs.core.PersistentVector(null,2,(5),inst_56585,inst_56587,null));
var inst_56589 = [inst_56588];
var inst_56590 = (new cljs.core.PersistentVector(null,1,(5),inst_56584,inst_56589,null));
var inst_56591 = cljs.core.deref(inst_56459);
var inst_56592 = (new cljs.core.List(null,inst_56591,null,(1),null));
var inst_56593__$1 = (new cljs.core.List(null,inst_56590,inst_56592,(2),null));
var inst_56594__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56593__$1);
var state_56673__$1 = (function (){var statearr_56683 = state_56673;
(statearr_56683[(11)] = inst_56593__$1);

(statearr_56683[(12)] = inst_56594__$1);

return statearr_56683;
})();
if(cljs.core.truth_(inst_56594__$1)){
var statearr_56684_56989 = state_56673__$1;
(statearr_56684_56989[(1)] = (28));

} else {
var statearr_56685_56990 = state_56673__$1;
(statearr_56685_56990[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (4))){
var inst_56471 = (state_56673[(2)]);
var state_56673__$1 = (function (){var statearr_56686 = state_56673;
(statearr_56686[(13)] = inst_56471);

return statearr_56686;
})();
var statearr_56687_56992 = state_56673__$1;
(statearr_56687_56992[(2)] = null);

(statearr_56687_56992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (15))){
var inst_56513 = (state_56673[(2)]);
var inst_56514 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56515 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56516 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56515,50,inst_56513,"Should flush after timeout"];
var inst_56517 = cljs.core.PersistentHashMap.fromArrays(inst_56514,inst_56516);
var inst_56518 = cljs.test.report.call(null,inst_56517);
var state_56673__$1 = state_56673;
var statearr_56688_56993 = state_56673__$1;
(statearr_56688_56993[(2)] = inst_56518);

(statearr_56688_56993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (21))){
var inst_56457 = (state_56673[(8)]);
var inst_56563 = (state_56673[(2)]);
var state_56673__$1 = (function (){var statearr_56689 = state_56673;
(statearr_56689[(14)] = inst_56563);

return statearr_56689;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56673__$1,(22),inst_56457,(4));
} else {
if((state_val_56674 === (31))){
var inst_56622 = (state_56673[(2)]);
var state_56673__$1 = (function (){var statearr_56690 = state_56673;
(statearr_56690[(15)] = inst_56622);

return statearr_56690;
})();
var statearr_56691_56994 = state_56673__$1;
(statearr_56691_56994[(2)] = null);

(statearr_56691_56994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (32))){
var inst_56459 = (state_56673[(9)]);
var inst_56645 = (state_56673[(16)]);
var inst_56646 = (state_56673[(17)]);
var _ = (function (){var statearr_56692 = state_56673;
(statearr_56692[(4)] = cljs.core.cons((35),(state_56673[(4)])));

return statearr_56692;
})();
var inst_56634 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56636 = [(1),(2)];
var inst_56637 = (new cljs.core.PersistentVector(null,2,(5),inst_56635,inst_56636,null));
var inst_56638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56639 = [(3),(4)];
var inst_56640 = (new cljs.core.PersistentVector(null,2,(5),inst_56638,inst_56639,null));
var inst_56641 = [inst_56637,inst_56640];
var inst_56642 = (new cljs.core.PersistentVector(null,2,(5),inst_56634,inst_56641,null));
var inst_56643 = cljs.core.deref(inst_56459);
var inst_56644 = (new cljs.core.List(null,inst_56643,null,(1),null));
var inst_56645__$1 = (new cljs.core.List(null,inst_56642,inst_56644,(2),null));
var inst_56646__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56645__$1);
var state_56673__$1 = (function (){var statearr_56693 = state_56673;
(statearr_56693[(16)] = inst_56645__$1);

(statearr_56693[(17)] = inst_56646__$1);

return statearr_56693;
})();
if(cljs.core.truth_(inst_56646__$1)){
var statearr_56694_56998 = state_56673__$1;
(statearr_56694_56998[(1)] = (36));

} else {
var statearr_56695_56999 = state_56673__$1;
(statearr_56695_56999[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (33))){
var inst_56670 = (state_56673[(2)]);
var inst_56671 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56673__$1 = (function (){var statearr_56696 = state_56673;
(statearr_56696[(18)] = inst_56670);

return statearr_56696;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56673__$1,inst_56671);
} else {
if((state_val_56674 === (13))){
var inst_56459 = (state_56673[(9)]);
var inst_56533 = (state_56673[(19)]);
var inst_56534 = (state_56673[(20)]);
var _ = (function (){var statearr_56697 = state_56673;
(statearr_56697[(4)] = cljs.core.cons((16),(state_56673[(4)])));

return statearr_56697;
})();
var inst_56524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56526 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56527 = [(1),(2)];
var inst_56528 = (new cljs.core.PersistentVector(null,2,(5),inst_56526,inst_56527,null));
var inst_56529 = [inst_56528];
var inst_56530 = (new cljs.core.PersistentVector(null,1,(5),inst_56524,inst_56529,null));
var inst_56531 = cljs.core.deref(inst_56459);
var inst_56532 = (new cljs.core.List(null,inst_56531,null,(1),null));
var inst_56533__$1 = (new cljs.core.List(null,inst_56530,inst_56532,(2),null));
var inst_56534__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56533__$1);
var state_56673__$1 = (function (){var statearr_56698 = state_56673;
(statearr_56698[(19)] = inst_56533__$1);

(statearr_56698[(20)] = inst_56534__$1);

return statearr_56698;
})();
if(cljs.core.truth_(inst_56534__$1)){
var statearr_56699_57005 = state_56673__$1;
(statearr_56699_57005[(1)] = (17));

} else {
var statearr_56700_57006 = state_56673__$1;
(statearr_56700_57006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (22))){
var inst_56565 = (state_56673[(2)]);
var inst_56566 = cljs.core.async.timeout((20));
var state_56673__$1 = (function (){var statearr_56701 = state_56673;
(statearr_56701[(21)] = inst_56565);

return statearr_56701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56673__$1,(23),inst_56566);
} else {
if((state_val_56674 === (36))){
var inst_56645 = (state_56673[(16)]);
var inst_56648 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56649 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56650 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56651 = cljs.core.cons(inst_56650,inst_56645);
var inst_56652 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56649,60,inst_56651,"Should flush 3,4 after timeout from first message"];
var inst_56653 = cljs.core.PersistentHashMap.fromArrays(inst_56648,inst_56652);
var inst_56654 = cljs.test.report.call(null,inst_56653);
var state_56673__$1 = state_56673;
var statearr_56702_57008 = state_56673__$1;
(statearr_56702_57008[(2)] = inst_56654);

(statearr_56702_57008[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (29))){
var inst_56593 = (state_56673[(11)]);
var inst_56605 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56606 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56607 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56608 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56609 = cljs.core.cons(inst_56608,inst_56593);
var inst_56610 = (new cljs.core.List(null,inst_56609,null,(1),null));
var inst_56611 = (new cljs.core.List(null,inst_56607,inst_56610,(2),null));
var inst_56612 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56606,57,inst_56611,"Should not flush 3,4 yet"];
var inst_56613 = cljs.core.PersistentHashMap.fromArrays(inst_56605,inst_56612);
var inst_56614 = cljs.test.report.call(null,inst_56613);
var state_56673__$1 = state_56673;
var statearr_56703_57009 = state_56673__$1;
(statearr_56703_57009[(2)] = inst_56614);

(statearr_56703_57009[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (6))){
var inst_56509 = (state_56673[(2)]);
var inst_56510 = cljs.core.async.timeout((100));
var state_56673__$1 = (function (){var statearr_56704 = state_56673;
(statearr_56704[(22)] = inst_56509);

return statearr_56704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56673__$1,(12),inst_56510);
} else {
if((state_val_56674 === (28))){
var inst_56593 = (state_56673[(11)]);
var inst_56597 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56598 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56599 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56600 = cljs.core.cons(inst_56599,inst_56593);
var inst_56601 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56598,57,inst_56600,"Should not flush 3,4 yet"];
var inst_56602 = cljs.core.PersistentHashMap.fromArrays(inst_56597,inst_56601);
var inst_56603 = cljs.test.report.call(null,inst_56602);
var state_56673__$1 = state_56673;
var statearr_56705_57013 = state_56673__$1;
(statearr_56705_57013[(2)] = inst_56603);

(statearr_56705_57013[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (25))){
var inst_56619 = (state_56673[(2)]);
var inst_56620 = cljs.core.async.timeout((80));
var state_56673__$1 = (function (){var statearr_56706 = state_56673;
(statearr_56706[(23)] = inst_56619);

return statearr_56706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56673__$1,(31),inst_56620);
} else {
if((state_val_56674 === (34))){
var inst_56623 = (state_56673[(2)]);
var inst_56624 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56625 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56626 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56625,60,inst_56623,"Should flush 3,4 after timeout from first message"];
var inst_56627 = cljs.core.PersistentHashMap.fromArrays(inst_56624,inst_56626);
var inst_56628 = cljs.test.report.call(null,inst_56627);
var state_56673__$1 = state_56673;
var statearr_56707_57018 = state_56673__$1;
(statearr_56707_57018[(2)] = inst_56628);

(statearr_56707_57018[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (17))){
var inst_56533 = (state_56673[(19)]);
var inst_56536 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56537 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56538 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56539 = cljs.core.cons(inst_56538,inst_56533);
var inst_56540 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56537,50,inst_56539,"Should flush after timeout"];
var inst_56541 = cljs.core.PersistentHashMap.fromArrays(inst_56536,inst_56540);
var inst_56542 = cljs.test.report.call(null,inst_56541);
var state_56673__$1 = state_56673;
var statearr_56708_57022 = state_56673__$1;
(statearr_56708_57022[(2)] = inst_56542);

(statearr_56708_57022[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (3))){
var inst_56468 = (state_56673[(2)]);
var inst_56469 = cljs.core.async.timeout((50));
var state_56673__$1 = (function (){var statearr_56709 = state_56673;
(statearr_56709[(24)] = inst_56468);

return statearr_56709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56673__$1,(4),inst_56469);
} else {
if((state_val_56674 === (12))){
var inst_56512 = (state_56673[(2)]);
var state_56673__$1 = (function (){var statearr_56710 = state_56673;
(statearr_56710[(25)] = inst_56512);

return statearr_56710;
})();
var statearr_56711_57026 = state_56673__$1;
(statearr_56711_57026[(2)] = null);

(statearr_56711_57026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (2))){
var inst_56457 = (state_56673[(8)]);
var inst_56466 = (state_56673[(2)]);
var state_56673__$1 = (function (){var statearr_56713 = state_56673;
(statearr_56713[(26)] = inst_56466);

return statearr_56713;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56673__$1,(3),inst_56457,(2));
} else {
if((state_val_56674 === (23))){
var inst_56568 = (state_56673[(2)]);
var state_56673__$1 = (function (){var statearr_56714 = state_56673;
(statearr_56714[(27)] = inst_56568);

return statearr_56714;
})();
var statearr_56715_57028 = state_56673__$1;
(statearr_56715_57028[(2)] = null);

(statearr_56715_57028[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (35))){
var _ = (function (){var statearr_56716 = state_56673;
(statearr_56716[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56716;
})();
var state_56673__$1 = state_56673;
var ex56712 = (state_56673__$1[(2)]);
var statearr_56717_57032 = state_56673__$1;
(statearr_56717_57032[(5)] = ex56712);


var statearr_56718_57034 = state_56673__$1;
(statearr_56718_57034[(1)] = (34));

(statearr_56718_57034[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (19))){
var inst_56534 = (state_56673[(20)]);
var inst_56555 = (state_56673[(2)]);
var _ = (function (){var statearr_56719 = state_56673;
(statearr_56719[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56719;
})();
var state_56673__$1 = (function (){var statearr_56720 = state_56673;
(statearr_56720[(28)] = inst_56555);

return statearr_56720;
})();
var statearr_56721_57035 = state_56673__$1;
(statearr_56721_57035[(2)] = inst_56534);

(statearr_56721_57035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (11))){
var inst_56485 = (state_56673[(29)]);
var inst_56506 = (state_56673[(2)]);
var _ = (function (){var statearr_56722 = state_56673;
(statearr_56722[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56722;
})();
var state_56673__$1 = (function (){var statearr_56723 = state_56673;
(statearr_56723[(30)] = inst_56506);

return statearr_56723;
})();
var statearr_56724_57036 = state_56673__$1;
(statearr_56724_57036[(2)] = inst_56485);

(statearr_56724_57036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (9))){
var inst_56484 = (state_56673[(31)]);
var inst_56487 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56488 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56489 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56490 = cljs.core.cons(inst_56489,inst_56484);
var inst_56491 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56488,47,inst_56490,"Should not flush before timeout"];
var inst_56492 = cljs.core.PersistentHashMap.fromArrays(inst_56487,inst_56491);
var inst_56493 = cljs.test.report.call(null,inst_56492);
var state_56673__$1 = state_56673;
var statearr_56725_57037 = state_56673__$1;
(statearr_56725_57037[(2)] = inst_56493);

(statearr_56725_57037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (5))){
var inst_56459 = (state_56673[(9)]);
var inst_56484 = (state_56673[(31)]);
var inst_56485 = (state_56673[(29)]);
var _ = (function (){var statearr_56726 = state_56673;
(statearr_56726[(4)] = cljs.core.cons((8),(state_56673[(4)])));

return statearr_56726;
})();
var inst_56483 = cljs.core.deref(inst_56459);
var inst_56484__$1 = (new cljs.core.List(null,inst_56483,null,(1),null));
var inst_56485__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56484__$1);
var state_56673__$1 = (function (){var statearr_56727 = state_56673;
(statearr_56727[(31)] = inst_56484__$1);

(statearr_56727[(29)] = inst_56485__$1);

return statearr_56727;
})();
if(cljs.core.truth_(inst_56485__$1)){
var statearr_56728_57038 = state_56673__$1;
(statearr_56728_57038[(1)] = (9));

} else {
var statearr_56729_57039 = state_56673__$1;
(statearr_56729_57039[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (14))){
var inst_56457 = (state_56673[(8)]);
var inst_56558 = (state_56673[(2)]);
var state_56673__$1 = (function (){var statearr_56734 = state_56673;
(statearr_56734[(32)] = inst_56558);

return statearr_56734;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56673__$1,(20),inst_56457,(3));
} else {
if((state_val_56674 === (26))){
var inst_56571 = (state_56673[(2)]);
var inst_56572 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56573 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56574 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56573,57,inst_56571,"Should not flush 3,4 yet"];
var inst_56575 = cljs.core.PersistentHashMap.fromArrays(inst_56572,inst_56574);
var inst_56576 = cljs.test.report.call(null,inst_56575);
var state_56673__$1 = state_56673;
var statearr_56736_57040 = state_56673__$1;
(statearr_56736_57040[(2)] = inst_56576);

(statearr_56736_57040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (16))){
var _ = (function (){var statearr_56738 = state_56673;
(statearr_56738[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56738;
})();
var state_56673__$1 = state_56673;
var ex56731 = (state_56673__$1[(2)]);
var statearr_56740_57044 = state_56673__$1;
(statearr_56740_57044[(5)] = ex56731);


var statearr_56742_57045 = state_56673__$1;
(statearr_56742_57045[(1)] = (15));

(statearr_56742_57045[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (38))){
var inst_56646 = (state_56673[(17)]);
var inst_56667 = (state_56673[(2)]);
var _ = (function (){var statearr_56747 = state_56673;
(statearr_56747[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56747;
})();
var state_56673__$1 = (function (){var statearr_56748 = state_56673;
(statearr_56748[(33)] = inst_56667);

return statearr_56748;
})();
var statearr_56750_57047 = state_56673__$1;
(statearr_56750_57047[(2)] = inst_56646);

(statearr_56750_57047[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (30))){
var inst_56594 = (state_56673[(12)]);
var inst_56616 = (state_56673[(2)]);
var _ = (function (){var statearr_56751 = state_56673;
(statearr_56751[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56751;
})();
var state_56673__$1 = (function (){var statearr_56752 = state_56673;
(statearr_56752[(34)] = inst_56616);

return statearr_56752;
})();
var statearr_56753_57048 = state_56673__$1;
(statearr_56753_57048[(2)] = inst_56594);

(statearr_56753_57048[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (10))){
var inst_56484 = (state_56673[(31)]);
var inst_56495 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56496 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56497 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56498 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56499 = cljs.core.cons(inst_56498,inst_56484);
var inst_56500 = (new cljs.core.List(null,inst_56499,null,(1),null));
var inst_56501 = (new cljs.core.List(null,inst_56497,inst_56500,(2),null));
var inst_56502 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56496,47,inst_56501,"Should not flush before timeout"];
var inst_56503 = cljs.core.PersistentHashMap.fromArrays(inst_56495,inst_56502);
var inst_56504 = cljs.test.report.call(null,inst_56503);
var state_56673__$1 = state_56673;
var statearr_56755_57049 = state_56673__$1;
(statearr_56755_57049[(2)] = inst_56504);

(statearr_56755_57049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (18))){
var inst_56533 = (state_56673[(19)]);
var inst_56544 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56545 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56546 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56547 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56548 = cljs.core.cons(inst_56547,inst_56533);
var inst_56549 = (new cljs.core.List(null,inst_56548,null,(1),null));
var inst_56550 = (new cljs.core.List(null,inst_56546,inst_56549,(2),null));
var inst_56551 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56545,50,inst_56550,"Should flush after timeout"];
var inst_56552 = cljs.core.PersistentHashMap.fromArrays(inst_56544,inst_56551);
var inst_56553 = cljs.test.report.call(null,inst_56552);
var state_56673__$1 = state_56673;
var statearr_56757_57051 = state_56673__$1;
(statearr_56757_57051[(2)] = inst_56553);

(statearr_56757_57051[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (37))){
var inst_56645 = (state_56673[(16)]);
var inst_56656 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56657 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56658 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56659 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56660 = cljs.core.cons(inst_56659,inst_56645);
var inst_56661 = (new cljs.core.List(null,inst_56660,null,(1),null));
var inst_56662 = (new cljs.core.List(null,inst_56658,inst_56661,(2),null));
var inst_56663 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56657,60,inst_56662,"Should flush 3,4 after timeout from first message"];
var inst_56664 = cljs.core.PersistentHashMap.fromArrays(inst_56656,inst_56663);
var inst_56665 = cljs.test.report.call(null,inst_56664);
var state_56673__$1 = state_56673;
var statearr_56759_57052 = state_56673__$1;
(statearr_56759_57052[(2)] = inst_56665);

(statearr_56759_57052[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56674 === (8))){
var _ = (function (){var statearr_56760 = state_56673;
(statearr_56760[(4)] = cljs.core.rest((state_56673[(4)])));

return statearr_56760;
})();
var state_56673__$1 = state_56673;
var ex56756 = (state_56673__$1[(2)]);
var statearr_56762_57053 = state_56673__$1;
(statearr_56762_57053[(5)] = ex56756);


var statearr_56764_57054 = state_56673__$1;
(statearr_56764_57054[(1)] = (7));

(statearr_56764_57054[(5)] = null);



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
var statearr_56771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56771[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56771[(1)] = (1));

return statearr_56771;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56673){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56673);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56773){var ex__32294__auto__ = e56773;
var statearr_56774_57057 = state_56673;
(statearr_56774_57057[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56673[(4)]))){
var statearr_56775_57058 = state_56673;
(statearr_56775_57058[(1)] = cljs.core.first((state_56673[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57059 = state_56673;
state_56673 = G__57059;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56673){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56777 = f__32362__auto__();
(statearr_56777[(6)] = c__32361__auto__);

return statearr_56777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56444","meta56444",-1678786134,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56443");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56443");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56443.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56443 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56443(meta56444){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443(meta56444));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56443(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779 = (function (meta56780){
this.meta56780 = meta56780;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56781,meta56780__$1){
var self__ = this;
var _56781__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779(meta56780__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56781){
var self__ = this;
var _56781__$1 = this;
return self__.meta56780;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56783 = (arguments.length - (1));
switch (G__56783) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.prototype.apply = (function (self__,args56782){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56782)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__32361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32362__auto__ = (function (){var switch__32290__auto__ = (function (state_56853){
var state_val_56854 = (state_56853[(1)]);
if((state_val_56854 === (7))){
var inst_56800 = (state_56853[(2)]);
var inst_56801 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56802 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56803 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56802,78,inst_56800,"Closing input should flush remaining"];
var inst_56804 = cljs.core.PersistentHashMap.fromArrays(inst_56801,inst_56803);
var inst_56805 = cljs.test.report.call(null,inst_56804);
var state_56853__$1 = state_56853;
var statearr_56855_57065 = state_56853__$1;
(statearr_56855_57065[(2)] = inst_56805);

(statearr_56855_57065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56854 === (1))){
var inst_56784 = (state_56853[(7)]);
var inst_56786 = (state_56853[(8)]);
var inst_56784__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56785 = cljs.core.PersistentVector.EMPTY;
var inst_56786__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56785);
var inst_56787 = (function (){var input_ch = inst_56784__$1;
var results = inst_56786__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56788 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56789 = [inst_56784__$1,inst_56787];
var inst_56790 = cljs.core.PersistentHashMap.fromArrays(inst_56788,inst_56789);
var inst_56791 = bb_web_ds_tools.components.async_buffer.create(inst_56790);
var state_56853__$1 = (function (){var statearr_56856 = state_56853;
(statearr_56856[(7)] = inst_56784__$1);

(statearr_56856[(8)] = inst_56786__$1);

(statearr_56856[(9)] = inst_56791);

return statearr_56856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56853__$1,(2),inst_56784__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56854 === (4))){
var inst_56799 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56859 = state_56853;
(statearr_56859[(10)] = inst_56799);

return statearr_56859;
})();
var statearr_56860_57066 = state_56853__$1;
(statearr_56860_57066[(2)] = null);

(statearr_56860_57066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56854 === (6))){
var inst_56850 = (state_56853[(2)]);
var inst_56851 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56853__$1 = (function (){var statearr_56864 = state_56853;
(statearr_56864[(11)] = inst_56850);

return statearr_56864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56853__$1,inst_56851);
} else {
if((state_val_56854 === (3))){
var inst_56784 = (state_56853[(7)]);
var inst_56795 = (state_56853[(2)]);
var inst_56796 = cljs.core.async.close_BANG_(inst_56784);
var inst_56797 = cljs.core.async.timeout((20));
var state_56853__$1 = (function (){var statearr_56866 = state_56853;
(statearr_56866[(12)] = inst_56795);

(statearr_56866[(13)] = inst_56796);

return statearr_56866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56853__$1,(4),inst_56797);
} else {
if((state_val_56854 === (2))){
var inst_56784 = (state_56853[(7)]);
var inst_56793 = (state_56853[(2)]);
var state_56853__$1 = (function (){var statearr_56867 = state_56853;
(statearr_56867[(14)] = inst_56793);

return statearr_56867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56853__$1,(3),inst_56784,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56854 === (11))){
var inst_56822 = (state_56853[(15)]);
var inst_56847 = (state_56853[(2)]);
var _ = (function (){var statearr_56868 = state_56853;
(statearr_56868[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56868;
})();
var state_56853__$1 = (function (){var statearr_56869 = state_56853;
(statearr_56869[(16)] = inst_56847);

return statearr_56869;
})();
var statearr_56870_57067 = state_56853__$1;
(statearr_56870_57067[(2)] = inst_56822);

(statearr_56870_57067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56854 === (9))){
var inst_56821 = (state_56853[(17)]);
var inst_56824 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56826 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56827 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56828 = cljs.core.cons(inst_56827,inst_56821);
var inst_56830 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56826,78,inst_56828,"Closing input should flush remaining"];
var inst_56831 = cljs.core.PersistentHashMap.fromArrays(inst_56824,inst_56830);
var inst_56832 = cljs.test.report.call(null,inst_56831);
var state_56853__$1 = state_56853;
var statearr_56876_57068 = state_56853__$1;
(statearr_56876_57068[(2)] = inst_56832);

(statearr_56876_57068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56854 === (5))){
var inst_56786 = (state_56853[(8)]);
var inst_56821 = (state_56853[(17)]);
var inst_56822 = (state_56853[(15)]);
var _ = (function (){var statearr_56879 = state_56853;
(statearr_56879[(4)] = cljs.core.cons((8),(state_56853[(4)])));

return statearr_56879;
})();
var inst_56811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56812 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56813 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56814 = (new cljs.core.PersistentVector(null,2,(5),inst_56812,inst_56813,null));
var inst_56815 = [inst_56814];
var inst_56816 = (new cljs.core.PersistentVector(null,1,(5),inst_56811,inst_56815,null));
var inst_56819 = cljs.core.deref(inst_56786);
var inst_56820 = (new cljs.core.List(null,inst_56819,null,(1),null));
var inst_56821__$1 = (new cljs.core.List(null,inst_56816,inst_56820,(2),null));
var inst_56822__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56821__$1);
var state_56853__$1 = (function (){var statearr_56880 = state_56853;
(statearr_56880[(17)] = inst_56821__$1);

(statearr_56880[(15)] = inst_56822__$1);

return statearr_56880;
})();
if(cljs.core.truth_(inst_56822__$1)){
var statearr_56881_57070 = state_56853__$1;
(statearr_56881_57070[(1)] = (9));

} else {
var statearr_56882_57071 = state_56853__$1;
(statearr_56882_57071[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56854 === (10))){
var inst_56821 = (state_56853[(17)]);
var inst_56834 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56836 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56837 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56839 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56840 = cljs.core.cons(inst_56839,inst_56821);
var inst_56841 = (new cljs.core.List(null,inst_56840,null,(1),null));
var inst_56842 = (new cljs.core.List(null,inst_56837,inst_56841,(2),null));
var inst_56843 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56836,78,inst_56842,"Closing input should flush remaining"];
var inst_56844 = cljs.core.PersistentHashMap.fromArrays(inst_56834,inst_56843);
var inst_56845 = cljs.test.report.call(null,inst_56844);
var state_56853__$1 = state_56853;
var statearr_56887_57072 = state_56853__$1;
(statearr_56887_57072[(2)] = inst_56845);

(statearr_56887_57072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56854 === (8))){
var _ = (function (){var statearr_56888 = state_56853;
(statearr_56888[(4)] = cljs.core.rest((state_56853[(4)])));

return statearr_56888;
})();
var state_56853__$1 = state_56853;
var ex56878 = (state_56853__$1[(2)]);
var statearr_56889_57074 = state_56853__$1;
(statearr_56889_57074[(5)] = ex56878);


var statearr_56891_57075 = state_56853__$1;
(statearr_56891_57075[(1)] = (7));

(statearr_56891_57075[(5)] = null);



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
var statearr_56895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56895[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__);

(statearr_56895[(1)] = (1));

return statearr_56895;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1 = (function (state_56853){
while(true){
var ret_value__32292__auto__ = (function (){try{while(true){
var result__32293__auto__ = switch__32290__auto__(state_56853);
if(cljs.core.keyword_identical_QMARK_(result__32293__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32293__auto__;
}
break;
}
}catch (e56897){var ex__32294__auto__ = e56897;
var statearr_56898_57076 = state_56853;
(statearr_56898_57076[(2)] = ex__32294__auto__);


if(cljs.core.seq((state_56853[(4)]))){
var statearr_56899_57077 = state_56853;
(statearr_56899_57077[(1)] = cljs.core.first((state_56853[(4)])));

} else {
throw ex__32294__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57078 = state_56853;
state_56853 = G__57078;
continue;
} else {
return ret_value__32292__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__ = function(state_56853){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1.call(this,state_56853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__32291__auto__;
})()
})();
var state__32363__auto__ = (function (){var statearr_56901 = f__32362__auto__();
(statearr_56901[(6)] = c__32361__auto__);

return statearr_56901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32363__auto__);
}));

return c__32361__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56780","meta56780",1249116116,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56779");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56779");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56779.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56779 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56779(meta56780){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779(meta56780));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56779(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
