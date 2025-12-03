goog.provide('bb_web_ds_tools.components.async_buffer_test');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061 = (function (meta56062){
this.meta56062 = meta56062;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56063,meta56062__$1){
var self__ = this;
var _56063__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061(meta56062__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56063){
var self__ = this;
var _56063__$1 = this;
return self__.meta56062;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56065 = (arguments.length - (1));
switch (G__56065) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.prototype.apply = (function (self__,args56064){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56064)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_56231){
var state_val_56232 = (state_56231[(1)]);
if((state_val_56232 === (7))){
var inst_56081 = (state_56231[(2)]);
var inst_56082 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56083 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56084 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,19,inst_56083,19,inst_56081,"Buffer should not flush automatically without timer"];
var inst_56085 = cljs.core.PersistentHashMap.fromArrays(inst_56082,inst_56084);
var inst_56086 = cljs.test.report.call(null,inst_56085);
var state_56231__$1 = state_56231;
var statearr_56233_56844 = state_56231__$1;
(statearr_56233_56844[(2)] = inst_56086);

(statearr_56233_56844[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (20))){
var inst_56073 = (state_56231[(7)]);
var inst_56176 = (state_56231[(2)]);
var inst_56177 = (inst_56073.cljs$core$IFn$_invoke$arity$0 ? inst_56073.cljs$core$IFn$_invoke$arity$0() : inst_56073.call(null));
var inst_56178 = cljs.core.async.timeout((20));
var state_56231__$1 = (function (){var statearr_56234 = state_56231;
(statearr_56234[(8)] = inst_56176);

(statearr_56234[(9)] = inst_56177);

return statearr_56234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56231__$1,(21),inst_56178);
} else {
if((state_val_56232 === (27))){
var inst_56203 = (state_56231[(10)]);
var inst_56214 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56215 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56216 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56217 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56218 = cljs.core.cons(inst_56217,inst_56203);
var inst_56219 = (new cljs.core.List(null,inst_56218,null,(1),null));
var inst_56220 = (new cljs.core.List(null,inst_56216,inst_56219,(2),null));
var inst_56221 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"fail","fail",1706214930),13,29,inst_56215,29,inst_56220,"Subsequent flush should work"];
var inst_56222 = cljs.core.PersistentHashMap.fromArrays(inst_56214,inst_56221);
var inst_56223 = cljs.test.report.call(null,inst_56222);
var state_56231__$1 = state_56231;
var statearr_56235_56845 = state_56231__$1;
(statearr_56235_56845[(2)] = inst_56223);

(statearr_56235_56845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (1))){
var inst_56066 = (state_56231[(11)]);
var inst_56068 = (state_56231[(12)]);
var inst_56066__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56067 = cljs.core.PersistentVector.EMPTY;
var inst_56068__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56067);
var inst_56069 = (function (){var input_ch = inst_56066__$1;
var results = inst_56068__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56070 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56071 = [inst_56066__$1,inst_56069];
var inst_56072 = cljs.core.PersistentHashMap.fromArrays(inst_56070,inst_56071);
var inst_56073 = bb_web_ds_tools.components.async_buffer.create(inst_56072);
var state_56231__$1 = (function (){var statearr_56237 = state_56231;
(statearr_56237[(11)] = inst_56066__$1);

(statearr_56237[(12)] = inst_56068__$1);

(statearr_56237[(7)] = inst_56073);

return statearr_56237;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56231__$1,(2),inst_56066__$1,(1));
} else {
if((state_val_56232 === (24))){
var inst_56181 = (state_56231[(2)]);
var inst_56182 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56183 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56184 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"error","error",-978969032),13,29,inst_56183,29,inst_56181,"Subsequent flush should work"];
var inst_56185 = cljs.core.PersistentHashMap.fromArrays(inst_56182,inst_56184);
var inst_56186 = cljs.test.report.call(null,inst_56185);
var state_56231__$1 = state_56231;
var statearr_56239_56847 = state_56231__$1;
(statearr_56239_56847[(2)] = inst_56186);

(statearr_56239_56847[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (4))){
var inst_56080 = (state_56231[(2)]);
var state_56231__$1 = (function (){var statearr_56240 = state_56231;
(statearr_56240[(13)] = inst_56080);

return statearr_56240;
})();
var statearr_56241_56848 = state_56231__$1;
(statearr_56241_56848[(2)] = null);

(statearr_56241_56848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (15))){
var inst_56124 = (state_56231[(2)]);
var inst_56125 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56126 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56127 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,24,inst_56126,24,inst_56124,"Manual flush should flush all items"];
var inst_56128 = cljs.core.PersistentHashMap.fromArrays(inst_56125,inst_56127);
var inst_56129 = cljs.test.report.call(null,inst_56128);
var state_56231__$1 = state_56231;
var statearr_56244_56854 = state_56231__$1;
(statearr_56244_56854[(2)] = inst_56129);

(statearr_56244_56854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (21))){
var inst_56180 = (state_56231[(2)]);
var state_56231__$1 = (function (){var statearr_56245 = state_56231;
(statearr_56245[(14)] = inst_56180);

return statearr_56245;
})();
var statearr_56246_56855 = state_56231__$1;
(statearr_56246_56855[(2)] = null);

(statearr_56246_56855[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (13))){
var inst_56068 = (state_56231[(12)]);
var inst_56148 = (state_56231[(15)]);
var inst_56150 = (state_56231[(16)]);
var _ = (function (){var statearr_56247 = state_56231;
(statearr_56247[(4)] = cljs.core.cons((16),(state_56231[(4)])));

return statearr_56247;
})();
var inst_56135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56142 = [(1),(2)];
var inst_56143 = (new cljs.core.PersistentVector(null,2,(5),inst_56136,inst_56142,null));
var inst_56144 = [inst_56143];
var inst_56145 = (new cljs.core.PersistentVector(null,1,(5),inst_56135,inst_56144,null));
var inst_56146 = cljs.core.deref(inst_56068);
var inst_56147 = (new cljs.core.List(null,inst_56146,null,(1),null));
var inst_56148__$1 = (new cljs.core.List(null,inst_56145,inst_56147,(2),null));
var inst_56150__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56148__$1);
var state_56231__$1 = (function (){var statearr_56248 = state_56231;
(statearr_56248[(15)] = inst_56148__$1);

(statearr_56248[(16)] = inst_56150__$1);

return statearr_56248;
})();
if(cljs.core.truth_(inst_56150__$1)){
var statearr_56249_56858 = state_56231__$1;
(statearr_56249_56858[(1)] = (17));

} else {
var statearr_56250_56859 = state_56231__$1;
(statearr_56250_56859[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (22))){
var inst_56068 = (state_56231[(12)]);
var inst_56203 = (state_56231[(10)]);
var inst_56204 = (state_56231[(17)]);
var _ = (function (){var statearr_56252 = state_56231;
(statearr_56252[(4)] = cljs.core.cons((25),(state_56231[(4)])));

return statearr_56252;
})();
var inst_56192 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56193 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56194 = [(1),(2)];
var inst_56195 = (new cljs.core.PersistentVector(null,2,(5),inst_56193,inst_56194,null));
var inst_56196 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56197 = [(3)];
var inst_56198 = (new cljs.core.PersistentVector(null,1,(5),inst_56196,inst_56197,null));
var inst_56199 = [inst_56195,inst_56198];
var inst_56200 = (new cljs.core.PersistentVector(null,2,(5),inst_56192,inst_56199,null));
var inst_56201 = cljs.core.deref(inst_56068);
var inst_56202 = (new cljs.core.List(null,inst_56201,null,(1),null));
var inst_56203__$1 = (new cljs.core.List(null,inst_56200,inst_56202,(2),null));
var inst_56204__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56203__$1);
var state_56231__$1 = (function (){var statearr_56253 = state_56231;
(statearr_56253[(10)] = inst_56203__$1);

(statearr_56253[(17)] = inst_56204__$1);

return statearr_56253;
})();
if(cljs.core.truth_(inst_56204__$1)){
var statearr_56254_56869 = state_56231__$1;
(statearr_56254_56869[(1)] = (26));

} else {
var statearr_56255_56870 = state_56231__$1;
(statearr_56255_56870[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (6))){
var inst_56073 = (state_56231[(7)]);
var inst_56119 = (state_56231[(2)]);
var inst_56120 = (inst_56073.cljs$core$IFn$_invoke$arity$0 ? inst_56073.cljs$core$IFn$_invoke$arity$0() : inst_56073.call(null));
var inst_56121 = cljs.core.async.timeout((20));
var state_56231__$1 = (function (){var statearr_56257 = state_56231;
(statearr_56257[(18)] = inst_56119);

(statearr_56257[(19)] = inst_56120);

return statearr_56257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56231__$1,(12),inst_56121);
} else {
if((state_val_56232 === (28))){
var inst_56204 = (state_56231[(17)]);
var inst_56225 = (state_56231[(2)]);
var _ = (function (){var statearr_56258 = state_56231;
(statearr_56258[(4)] = cljs.core.rest((state_56231[(4)])));

return statearr_56258;
})();
var state_56231__$1 = (function (){var statearr_56261 = state_56231;
(statearr_56261[(20)] = inst_56225);

return statearr_56261;
})();
var statearr_56262_56872 = state_56231__$1;
(statearr_56262_56872[(2)] = inst_56204);

(statearr_56262_56872[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (25))){
var _ = (function (){var statearr_56263 = state_56231;
(statearr_56263[(4)] = cljs.core.rest((state_56231[(4)])));

return statearr_56263;
})();
var state_56231__$1 = state_56231;
var ex56256 = (state_56231__$1[(2)]);
var statearr_56265_56873 = state_56231__$1;
(statearr_56265_56873[(5)] = ex56256);


var statearr_56269_56874 = state_56231__$1;
(statearr_56269_56874[(1)] = (24));

(statearr_56269_56874[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (17))){
var inst_56148 = (state_56231[(15)]);
var inst_56152 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56153 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56154 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56155 = cljs.core.cons(inst_56154,inst_56148);
var inst_56156 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,24,inst_56153,24,inst_56155,"Manual flush should flush all items"];
var inst_56157 = cljs.core.PersistentHashMap.fromArrays(inst_56152,inst_56156);
var inst_56158 = cljs.test.report.call(null,inst_56157);
var state_56231__$1 = state_56231;
var statearr_56273_56875 = state_56231__$1;
(statearr_56273_56875[(2)] = inst_56158);

(statearr_56273_56875[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (3))){
var inst_56077 = (state_56231[(2)]);
var inst_56078 = cljs.core.async.timeout((20));
var state_56231__$1 = (function (){var statearr_56274 = state_56231;
(statearr_56274[(21)] = inst_56077);

return statearr_56274;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56231__$1,(4),inst_56078);
} else {
if((state_val_56232 === (12))){
var inst_56123 = (state_56231[(2)]);
var state_56231__$1 = (function (){var statearr_56276 = state_56231;
(statearr_56276[(22)] = inst_56123);

return statearr_56276;
})();
var statearr_56277_56876 = state_56231__$1;
(statearr_56277_56876[(2)] = null);

(statearr_56277_56876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (2))){
var inst_56066 = (state_56231[(11)]);
var inst_56075 = (state_56231[(2)]);
var state_56231__$1 = (function (){var statearr_56278 = state_56231;
(statearr_56278[(23)] = inst_56075);

return statearr_56278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56231__$1,(3),inst_56066,(2));
} else {
if((state_val_56232 === (23))){
var inst_56228 = (state_56231[(2)]);
var inst_56229 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56231__$1 = (function (){var statearr_56279 = state_56231;
(statearr_56279[(24)] = inst_56228);

return statearr_56279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56231__$1,inst_56229);
} else {
if((state_val_56232 === (19))){
var inst_56150 = (state_56231[(16)]);
var inst_56171 = (state_56231[(2)]);
var _ = (function (){var statearr_56280 = state_56231;
(statearr_56280[(4)] = cljs.core.rest((state_56231[(4)])));

return statearr_56280;
})();
var state_56231__$1 = (function (){var statearr_56281 = state_56231;
(statearr_56281[(25)] = inst_56171);

return statearr_56281;
})();
var statearr_56282_56878 = state_56231__$1;
(statearr_56282_56878[(2)] = inst_56150);

(statearr_56282_56878[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (11))){
var inst_56094 = (state_56231[(26)]);
var inst_56116 = (state_56231[(2)]);
var _ = (function (){var statearr_56283 = state_56231;
(statearr_56283[(4)] = cljs.core.rest((state_56231[(4)])));

return statearr_56283;
})();
var state_56231__$1 = (function (){var statearr_56284 = state_56231;
(statearr_56284[(27)] = inst_56116);

return statearr_56284;
})();
var statearr_56285_56880 = state_56231__$1;
(statearr_56285_56880[(2)] = inst_56094);

(statearr_56285_56880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (9))){
var inst_56093 = (state_56231[(28)]);
var inst_56097 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56098 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56099 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56100 = cljs.core.cons(inst_56099,inst_56093);
var inst_56101 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,19,inst_56098,19,inst_56100,"Buffer should not flush automatically without timer"];
var inst_56102 = cljs.core.PersistentHashMap.fromArrays(inst_56097,inst_56101);
var inst_56103 = cljs.test.report.call(null,inst_56102);
var state_56231__$1 = state_56231;
var statearr_56286_56881 = state_56231__$1;
(statearr_56286_56881[(2)] = inst_56103);

(statearr_56286_56881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (5))){
var inst_56068 = (state_56231[(12)]);
var inst_56093 = (state_56231[(28)]);
var inst_56094 = (state_56231[(26)]);
var _ = (function (){var statearr_56288 = state_56231;
(statearr_56288[(4)] = cljs.core.cons((8),(state_56231[(4)])));

return statearr_56288;
})();
var inst_56092 = cljs.core.deref(inst_56068);
var inst_56093__$1 = (new cljs.core.List(null,inst_56092,null,(1),null));
var inst_56094__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56093__$1);
var state_56231__$1 = (function (){var statearr_56289 = state_56231;
(statearr_56289[(28)] = inst_56093__$1);

(statearr_56289[(26)] = inst_56094__$1);

return statearr_56289;
})();
if(cljs.core.truth_(inst_56094__$1)){
var statearr_56290_56882 = state_56231__$1;
(statearr_56290_56882[(1)] = (9));

} else {
var statearr_56291_56883 = state_56231__$1;
(statearr_56291_56883[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (14))){
var inst_56066 = (state_56231[(11)]);
var inst_56174 = (state_56231[(2)]);
var state_56231__$1 = (function (){var statearr_56293 = state_56231;
(statearr_56293[(29)] = inst_56174);

return statearr_56293;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56231__$1,(20),inst_56066,(3));
} else {
if((state_val_56232 === (26))){
var inst_56203 = (state_56231[(10)]);
var inst_56206 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56207 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56208 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56209 = cljs.core.cons(inst_56208,inst_56203);
var inst_56210 = ["bb_web_ds_tools/components/async_buffer_test.cljs",37,new cljs.core.Keyword(null,"pass","pass",1574159993),13,29,inst_56207,29,inst_56209,"Subsequent flush should work"];
var inst_56211 = cljs.core.PersistentHashMap.fromArrays(inst_56206,inst_56210);
var inst_56212 = cljs.test.report.call(null,inst_56211);
var state_56231__$1 = state_56231;
var statearr_56294_56884 = state_56231__$1;
(statearr_56294_56884[(2)] = inst_56212);

(statearr_56294_56884[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (16))){
var _ = (function (){var statearr_56295 = state_56231;
(statearr_56295[(4)] = cljs.core.rest((state_56231[(4)])));

return statearr_56295;
})();
var state_56231__$1 = state_56231;
var ex56292 = (state_56231__$1[(2)]);
var statearr_56296_56885 = state_56231__$1;
(statearr_56296_56885[(5)] = ex56292);


var statearr_56297_56886 = state_56231__$1;
(statearr_56297_56886[(1)] = (15));

(statearr_56297_56886[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (10))){
var inst_56093 = (state_56231[(28)]);
var inst_56105 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56106 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56107 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56108 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56109 = cljs.core.cons(inst_56108,inst_56093);
var inst_56110 = (new cljs.core.List(null,inst_56109,null,(1),null));
var inst_56111 = (new cljs.core.List(null,inst_56107,inst_56110,(2),null));
var inst_56112 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,19,inst_56106,19,inst_56111,"Buffer should not flush automatically without timer"];
var inst_56113 = cljs.core.PersistentHashMap.fromArrays(inst_56105,inst_56112);
var inst_56114 = cljs.test.report.call(null,inst_56113);
var state_56231__$1 = state_56231;
var statearr_56299_56887 = state_56231__$1;
(statearr_56299_56887[(2)] = inst_56114);

(statearr_56299_56887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (18))){
var inst_56148 = (state_56231[(15)]);
var inst_56160 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56161 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56162 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56163 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56164 = cljs.core.cons(inst_56163,inst_56148);
var inst_56165 = (new cljs.core.List(null,inst_56164,null,(1),null));
var inst_56166 = (new cljs.core.List(null,inst_56162,inst_56165,(2),null));
var inst_56167 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,24,inst_56161,24,inst_56166,"Manual flush should flush all items"];
var inst_56168 = cljs.core.PersistentHashMap.fromArrays(inst_56160,inst_56167);
var inst_56169 = cljs.test.report.call(null,inst_56168);
var state_56231__$1 = state_56231;
var statearr_56300_56888 = state_56231__$1;
(statearr_56300_56888[(2)] = inst_56169);

(statearr_56300_56888[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56232 === (8))){
var _ = (function (){var statearr_56301 = state_56231;
(statearr_56301[(4)] = cljs.core.rest((state_56231[(4)])));

return statearr_56301;
})();
var state_56231__$1 = state_56231;
var ex56298 = (state_56231__$1[(2)]);
var statearr_56302_56889 = state_56231__$1;
(statearr_56302_56889[(5)] = ex56298);


var statearr_56303_56890 = state_56231__$1;
(statearr_56303_56890[(1)] = (7));

(statearr_56303_56890[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0 = (function (){
var statearr_56304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56304[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__);

(statearr_56304[(1)] = (1));

return statearr_56304;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1 = (function (state_56231){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_56231);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e56305){var ex__50434__auto__ = e56305;
var statearr_56306_56893 = state_56231;
(statearr_56306_56893[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_56231[(4)]))){
var statearr_56308_56894 = state_56231;
(statearr_56308_56894[(1)] = cljs.core.first((state_56231[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56895 = state_56231;
state_56231 = G__56895;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__ = function(state_56231){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1.call(this,state_56231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_56309 = f__50502__auto__();
(statearr_56309[(6)] = c__50501__auto__);

return statearr_56309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56062","meta56062",1776658638,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56061");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56061");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56061.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56061 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56061(meta56062){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061(meta56062));
});


bb_web_ds_tools.components.async_buffer_test.manual_flush_test = (function bb_web_ds_tools$components$async_buffer_test$manual_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56061(null));
});

(bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.manual_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","manual-flush-test","bb-web-ds-tools.components.async-buffer-test/manual-flush-test",-2120011291,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"manual-flush-test","manual-flush-test",-1990864282,null),"bb_web_ds_tools/components/async_buffer_test.cljs",27,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.manual_flush_test)?bb_web_ds_tools.components.async_buffer_test.manual_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315 = (function (meta56316){
this.meta56316 = meta56316;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56317,meta56316__$1){
var self__ = this;
var _56317__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315(meta56316__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56317){
var self__ = this;
var _56317__$1 = this;
return self__.meta56316;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56319 = (arguments.length - (1));
switch (G__56319) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.prototype.apply = (function (self__,args56318){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56318)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_56585){
var state_val_56586 = (state_56585[(1)]);
if((state_val_56586 === (7))){
var inst_56337 = (state_56585[(2)]);
var inst_56338 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56339 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56340 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"error","error",-978969032),13,47,inst_56339,47,inst_56337,"Should not flush before timeout"];
var inst_56341 = cljs.core.PersistentHashMap.fromArrays(inst_56338,inst_56340);
var inst_56342 = cljs.test.report.call(null,inst_56341);
var state_56585__$1 = state_56585;
var statearr_56592_56900 = state_56585__$1;
(statearr_56592_56900[(2)] = inst_56342);

(statearr_56592_56900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (20))){
var inst_56425 = (state_56585[(2)]);
var inst_56426 = cljs.core.async.timeout((50));
var state_56585__$1 = (function (){var statearr_56593 = state_56585;
(statearr_56593[(7)] = inst_56425);

return statearr_56593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56585__$1,(21),inst_56426);
} else {
if((state_val_56586 === (27))){
var _ = (function (){var statearr_56596 = state_56585;
(statearr_56596[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56596;
})();
var state_56585__$1 = state_56585;
var ex56587 = (state_56585__$1[(2)]);
var statearr_56597_56902 = state_56585__$1;
(statearr_56597_56902[(5)] = ex56587);


var statearr_56598_56903 = state_56585__$1;
(statearr_56598_56903[(1)] = (26));

(statearr_56598_56903[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (1))){
var inst_56320 = (state_56585[(8)]);
var inst_56322 = (state_56585[(9)]);
var inst_56320__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56321 = cljs.core.PersistentVector.EMPTY;
var inst_56322__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56321);
var inst_56323 = (function (){var input_ch = inst_56320__$1;
var results = inst_56322__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56324 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"flush-interval-ms","flush-interval-ms",825614360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56325 = [inst_56320__$1,(100),inst_56323];
var inst_56326 = cljs.core.PersistentHashMap.fromArrays(inst_56324,inst_56325);
var inst_56327 = bb_web_ds_tools.components.async_buffer.create(inst_56326);
var state_56585__$1 = (function (){var statearr_56600 = state_56585;
(statearr_56600[(8)] = inst_56320__$1);

(statearr_56600[(9)] = inst_56322__$1);

(statearr_56600[(10)] = inst_56327);

return statearr_56600;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56585__$1,(2),inst_56320__$1,(1));
} else {
if((state_val_56586 === (24))){
var inst_56322 = (state_56585[(9)]);
var inst_56453 = (state_56585[(11)]);
var inst_56454 = (state_56585[(12)]);
var _ = (function (){var statearr_56601 = state_56585;
(statearr_56601[(4)] = cljs.core.cons((27),(state_56585[(4)])));

return statearr_56601;
})();
var inst_56445 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56447 = [(1),(2)];
var inst_56448 = (new cljs.core.PersistentVector(null,2,(5),inst_56446,inst_56447,null));
var inst_56449 = [inst_56448];
var inst_56450 = (new cljs.core.PersistentVector(null,1,(5),inst_56445,inst_56449,null));
var inst_56451 = cljs.core.deref(inst_56322);
var inst_56452 = (new cljs.core.List(null,inst_56451,null,(1),null));
var inst_56453__$1 = (new cljs.core.List(null,inst_56450,inst_56452,(2),null));
var inst_56454__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56453__$1);
var state_56585__$1 = (function (){var statearr_56604 = state_56585;
(statearr_56604[(11)] = inst_56453__$1);

(statearr_56604[(12)] = inst_56454__$1);

return statearr_56604;
})();
if(cljs.core.truth_(inst_56454__$1)){
var statearr_56606_56907 = state_56585__$1;
(statearr_56606_56907[(1)] = (28));

} else {
var statearr_56609_56909 = state_56585__$1;
(statearr_56609_56909[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (4))){
var inst_56336 = (state_56585[(2)]);
var state_56585__$1 = (function (){var statearr_56612 = state_56585;
(statearr_56612[(13)] = inst_56336);

return statearr_56612;
})();
var statearr_56613_56910 = state_56585__$1;
(statearr_56613_56910[(2)] = null);

(statearr_56613_56910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (15))){
var inst_56378 = (state_56585[(2)]);
var inst_56379 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56380 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56381 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,50,inst_56380,50,inst_56378,"Should flush after timeout"];
var inst_56382 = cljs.core.PersistentHashMap.fromArrays(inst_56379,inst_56381);
var inst_56383 = cljs.test.report.call(null,inst_56382);
var state_56585__$1 = state_56585;
var statearr_56618_56911 = state_56585__$1;
(statearr_56618_56911[(2)] = inst_56383);

(statearr_56618_56911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (21))){
var inst_56320 = (state_56585[(8)]);
var inst_56428 = (state_56585[(2)]);
var state_56585__$1 = (function (){var statearr_56619 = state_56585;
(statearr_56619[(14)] = inst_56428);

return statearr_56619;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56585__$1,(22),inst_56320,(4));
} else {
if((state_val_56586 === (31))){
var inst_56481 = (state_56585[(2)]);
var state_56585__$1 = (function (){var statearr_56621 = state_56585;
(statearr_56621[(15)] = inst_56481);

return statearr_56621;
})();
var statearr_56622_56912 = state_56585__$1;
(statearr_56622_56912[(2)] = null);

(statearr_56622_56912[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (32))){
var inst_56322 = (state_56585[(9)]);
var inst_56516 = (state_56585[(16)]);
var inst_56517 = (state_56585[(17)]);
var _ = (function (){var statearr_56626 = state_56585;
(statearr_56626[(4)] = cljs.core.cons((35),(state_56585[(4)])));

return statearr_56626;
})();
var inst_56501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56503 = [(1),(2)];
var inst_56504 = (new cljs.core.PersistentVector(null,2,(5),inst_56502,inst_56503,null));
var inst_56509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56510 = [(3),(4)];
var inst_56511 = (new cljs.core.PersistentVector(null,2,(5),inst_56509,inst_56510,null));
var inst_56512 = [inst_56504,inst_56511];
var inst_56513 = (new cljs.core.PersistentVector(null,2,(5),inst_56501,inst_56512,null));
var inst_56514 = cljs.core.deref(inst_56322);
var inst_56515 = (new cljs.core.List(null,inst_56514,null,(1),null));
var inst_56516__$1 = (new cljs.core.List(null,inst_56513,inst_56515,(2),null));
var inst_56517__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56516__$1);
var state_56585__$1 = (function (){var statearr_56630 = state_56585;
(statearr_56630[(16)] = inst_56516__$1);

(statearr_56630[(17)] = inst_56517__$1);

return statearr_56630;
})();
if(cljs.core.truth_(inst_56517__$1)){
var statearr_56631_56915 = state_56585__$1;
(statearr_56631_56915[(1)] = (36));

} else {
var statearr_56632_56916 = state_56585__$1;
(statearr_56632_56916[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (33))){
var inst_56547 = (state_56585[(2)]);
var inst_56549 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56585__$1 = (function (){var statearr_56636 = state_56585;
(statearr_56636[(18)] = inst_56547);

return statearr_56636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56585__$1,inst_56549);
} else {
if((state_val_56586 === (13))){
var inst_56322 = (state_56585[(9)]);
var inst_56397 = (state_56585[(19)]);
var inst_56398 = (state_56585[(20)]);
var _ = (function (){var statearr_56638 = state_56585;
(statearr_56638[(4)] = cljs.core.cons((16),(state_56585[(4)])));

return statearr_56638;
})();
var inst_56389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56390 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56391 = [(1),(2)];
var inst_56392 = (new cljs.core.PersistentVector(null,2,(5),inst_56390,inst_56391,null));
var inst_56393 = [inst_56392];
var inst_56394 = (new cljs.core.PersistentVector(null,1,(5),inst_56389,inst_56393,null));
var inst_56395 = cljs.core.deref(inst_56322);
var inst_56396 = (new cljs.core.List(null,inst_56395,null,(1),null));
var inst_56397__$1 = (new cljs.core.List(null,inst_56394,inst_56396,(2),null));
var inst_56398__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56397__$1);
var state_56585__$1 = (function (){var statearr_56639 = state_56585;
(statearr_56639[(19)] = inst_56397__$1);

(statearr_56639[(20)] = inst_56398__$1);

return statearr_56639;
})();
if(cljs.core.truth_(inst_56398__$1)){
var statearr_56640_56920 = state_56585__$1;
(statearr_56640_56920[(1)] = (17));

} else {
var statearr_56641_56921 = state_56585__$1;
(statearr_56641_56921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (22))){
var inst_56430 = (state_56585[(2)]);
var inst_56431 = cljs.core.async.timeout((20));
var state_56585__$1 = (function (){var statearr_56642 = state_56585;
(statearr_56642[(21)] = inst_56430);

return statearr_56642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56585__$1,(23),inst_56431);
} else {
if((state_val_56586 === (36))){
var inst_56516 = (state_56585[(16)]);
var inst_56525 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56526 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56527 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56528 = cljs.core.cons(inst_56527,inst_56516);
var inst_56529 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"pass","pass",1574159993),13,60,inst_56526,60,inst_56528,"Should flush 3,4 after timeout from first message"];
var inst_56530 = cljs.core.PersistentHashMap.fromArrays(inst_56525,inst_56529);
var inst_56531 = cljs.test.report.call(null,inst_56530);
var state_56585__$1 = state_56585;
var statearr_56643_56922 = state_56585__$1;
(statearr_56643_56922[(2)] = inst_56531);

(statearr_56643_56922[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (29))){
var inst_56453 = (state_56585[(11)]);
var inst_56464 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56465 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56466 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56467 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56468 = cljs.core.cons(inst_56467,inst_56453);
var inst_56469 = (new cljs.core.List(null,inst_56468,null,(1),null));
var inst_56470 = (new cljs.core.List(null,inst_56466,inst_56469,(2),null));
var inst_56471 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,57,inst_56465,57,inst_56470,"Should not flush 3,4 yet"];
var inst_56472 = cljs.core.PersistentHashMap.fromArrays(inst_56464,inst_56471);
var inst_56473 = cljs.test.report.call(null,inst_56472);
var state_56585__$1 = state_56585;
var statearr_56644_56923 = state_56585__$1;
(statearr_56644_56923[(2)] = inst_56473);

(statearr_56644_56923[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (6))){
var inst_56374 = (state_56585[(2)]);
var inst_56375 = cljs.core.async.timeout((100));
var state_56585__$1 = (function (){var statearr_56645 = state_56585;
(statearr_56645[(22)] = inst_56374);

return statearr_56645;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56585__$1,(12),inst_56375);
} else {
if((state_val_56586 === (28))){
var inst_56453 = (state_56585[(11)]);
var inst_56456 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56457 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56458 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56459 = cljs.core.cons(inst_56458,inst_56453);
var inst_56460 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,57,inst_56457,57,inst_56459,"Should not flush 3,4 yet"];
var inst_56461 = cljs.core.PersistentHashMap.fromArrays(inst_56456,inst_56460);
var inst_56462 = cljs.test.report.call(null,inst_56461);
var state_56585__$1 = state_56585;
var statearr_56646_56926 = state_56585__$1;
(statearr_56646_56926[(2)] = inst_56462);

(statearr_56646_56926[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (25))){
var inst_56478 = (state_56585[(2)]);
var inst_56479 = cljs.core.async.timeout((80));
var state_56585__$1 = (function (){var statearr_56647 = state_56585;
(statearr_56647[(23)] = inst_56478);

return statearr_56647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56585__$1,(31),inst_56479);
} else {
if((state_val_56586 === (34))){
var inst_56482 = (state_56585[(2)]);
var inst_56486 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56487 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56488 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"error","error",-978969032),13,60,inst_56487,60,inst_56482,"Should flush 3,4 after timeout from first message"];
var inst_56489 = cljs.core.PersistentHashMap.fromArrays(inst_56486,inst_56488);
var inst_56490 = cljs.test.report.call(null,inst_56489);
var state_56585__$1 = state_56585;
var statearr_56648_56928 = state_56585__$1;
(statearr_56648_56928[(2)] = inst_56490);

(statearr_56648_56928[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (17))){
var inst_56397 = (state_56585[(19)]);
var inst_56401 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56402 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56403 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56404 = cljs.core.cons(inst_56403,inst_56397);
var inst_56405 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"pass","pass",1574159993),13,50,inst_56402,50,inst_56404,"Should flush after timeout"];
var inst_56406 = cljs.core.PersistentHashMap.fromArrays(inst_56401,inst_56405);
var inst_56407 = cljs.test.report.call(null,inst_56406);
var state_56585__$1 = state_56585;
var statearr_56649_56929 = state_56585__$1;
(statearr_56649_56929[(2)] = inst_56407);

(statearr_56649_56929[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (3))){
var inst_56333 = (state_56585[(2)]);
var inst_56334 = cljs.core.async.timeout((50));
var state_56585__$1 = (function (){var statearr_56650 = state_56585;
(statearr_56650[(24)] = inst_56333);

return statearr_56650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56585__$1,(4),inst_56334);
} else {
if((state_val_56586 === (12))){
var inst_56377 = (state_56585[(2)]);
var state_56585__$1 = (function (){var statearr_56651 = state_56585;
(statearr_56651[(25)] = inst_56377);

return statearr_56651;
})();
var statearr_56652_56931 = state_56585__$1;
(statearr_56652_56931[(2)] = null);

(statearr_56652_56931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (2))){
var inst_56320 = (state_56585[(8)]);
var inst_56331 = (state_56585[(2)]);
var state_56585__$1 = (function (){var statearr_56654 = state_56585;
(statearr_56654[(26)] = inst_56331);

return statearr_56654;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56585__$1,(3),inst_56320,(2));
} else {
if((state_val_56586 === (23))){
var inst_56433 = (state_56585[(2)]);
var state_56585__$1 = (function (){var statearr_56655 = state_56585;
(statearr_56655[(27)] = inst_56433);

return statearr_56655;
})();
var statearr_56656_56932 = state_56585__$1;
(statearr_56656_56932[(2)] = null);

(statearr_56656_56932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (35))){
var _ = (function (){var statearr_56657 = state_56585;
(statearr_56657[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56657;
})();
var state_56585__$1 = state_56585;
var ex56653 = (state_56585__$1[(2)]);
var statearr_56658_56933 = state_56585__$1;
(statearr_56658_56933[(5)] = ex56653);


var statearr_56659_56934 = state_56585__$1;
(statearr_56659_56934[(1)] = (34));

(statearr_56659_56934[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (19))){
var inst_56398 = (state_56585[(20)]);
var inst_56420 = (state_56585[(2)]);
var _ = (function (){var statearr_56660 = state_56585;
(statearr_56660[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56660;
})();
var state_56585__$1 = (function (){var statearr_56661 = state_56585;
(statearr_56661[(28)] = inst_56420);

return statearr_56661;
})();
var statearr_56662_56935 = state_56585__$1;
(statearr_56662_56935[(2)] = inst_56398);

(statearr_56662_56935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (11))){
var inst_56350 = (state_56585[(29)]);
var inst_56371 = (state_56585[(2)]);
var _ = (function (){var statearr_56663 = state_56585;
(statearr_56663[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56663;
})();
var state_56585__$1 = (function (){var statearr_56664 = state_56585;
(statearr_56664[(30)] = inst_56371);

return statearr_56664;
})();
var statearr_56665_56936 = state_56585__$1;
(statearr_56665_56936[(2)] = inst_56350);

(statearr_56665_56936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (9))){
var inst_56349 = (state_56585[(31)]);
var inst_56352 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56353 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56354 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56355 = cljs.core.cons(inst_56354,inst_56349);
var inst_56356 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"pass","pass",1574159993),13,47,inst_56353,47,inst_56355,"Should not flush before timeout"];
var inst_56357 = cljs.core.PersistentHashMap.fromArrays(inst_56352,inst_56356);
var inst_56358 = cljs.test.report.call(null,inst_56357);
var state_56585__$1 = state_56585;
var statearr_56666_56937 = state_56585__$1;
(statearr_56666_56937[(2)] = inst_56358);

(statearr_56666_56937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (5))){
var inst_56322 = (state_56585[(9)]);
var inst_56349 = (state_56585[(31)]);
var inst_56350 = (state_56585[(29)]);
var _ = (function (){var statearr_56667 = state_56585;
(statearr_56667[(4)] = cljs.core.cons((8),(state_56585[(4)])));

return statearr_56667;
})();
var inst_56348 = cljs.core.deref(inst_56322);
var inst_56349__$1 = (new cljs.core.List(null,inst_56348,null,(1),null));
var inst_56350__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,inst_56349__$1);
var state_56585__$1 = (function (){var statearr_56668 = state_56585;
(statearr_56668[(31)] = inst_56349__$1);

(statearr_56668[(29)] = inst_56350__$1);

return statearr_56668;
})();
if(cljs.core.truth_(inst_56350__$1)){
var statearr_56669_56938 = state_56585__$1;
(statearr_56669_56938[(1)] = (9));

} else {
var statearr_56670_56939 = state_56585__$1;
(statearr_56670_56939[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (14))){
var inst_56320 = (state_56585[(8)]);
var inst_56423 = (state_56585[(2)]);
var state_56585__$1 = (function (){var statearr_56672 = state_56585;
(statearr_56672[(32)] = inst_56423);

return statearr_56672;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56585__$1,(20),inst_56320,(3));
} else {
if((state_val_56586 === (26))){
var inst_56434 = (state_56585[(2)]);
var inst_56435 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56436 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56437 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"error","error",-978969032),13,57,inst_56436,57,inst_56434,"Should not flush 3,4 yet"];
var inst_56438 = cljs.core.PersistentHashMap.fromArrays(inst_56435,inst_56437);
var inst_56439 = cljs.test.report.call(null,inst_56438);
var state_56585__$1 = state_56585;
var statearr_56673_56941 = state_56585__$1;
(statearr_56673_56941[(2)] = inst_56439);

(statearr_56673_56941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (16))){
var _ = (function (){var statearr_56674 = state_56585;
(statearr_56674[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56674;
})();
var state_56585__$1 = state_56585;
var ex56671 = (state_56585__$1[(2)]);
var statearr_56675_56942 = state_56585__$1;
(statearr_56675_56942[(5)] = ex56671);


var statearr_56676_56943 = state_56585__$1;
(statearr_56676_56943[(1)] = (15));

(statearr_56676_56943[(5)] = null);



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (38))){
var inst_56517 = (state_56585[(17)]);
var inst_56544 = (state_56585[(2)]);
var _ = (function (){var statearr_56677 = state_56585;
(statearr_56677[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56677;
})();
var state_56585__$1 = (function (){var statearr_56678 = state_56585;
(statearr_56678[(33)] = inst_56544);

return statearr_56678;
})();
var statearr_56679_56944 = state_56585__$1;
(statearr_56679_56944[(2)] = inst_56517);

(statearr_56679_56944[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (30))){
var inst_56454 = (state_56585[(12)]);
var inst_56475 = (state_56585[(2)]);
var _ = (function (){var statearr_56680 = state_56585;
(statearr_56680[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56680;
})();
var state_56585__$1 = (function (){var statearr_56681 = state_56585;
(statearr_56681[(34)] = inst_56475);

return statearr_56681;
})();
var statearr_56682_56945 = state_56585__$1;
(statearr_56682_56945[(2)] = inst_56454);

(statearr_56682_56945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (10))){
var inst_56349 = (state_56585[(31)]);
var inst_56360 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56361 = cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56362 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56363 = new cljs.core.Symbol(null,"empty?","empty?",76408555,null);
var inst_56364 = cljs.core.cons(inst_56363,inst_56349);
var inst_56365 = (new cljs.core.List(null,inst_56364,null,(1),null));
var inst_56366 = (new cljs.core.List(null,inst_56362,inst_56365,(2),null));
var inst_56367 = ["bb_web_ds_tools/components/async_buffer_test.cljs",30,new cljs.core.Keyword(null,"fail","fail",1706214930),13,47,inst_56361,47,inst_56366,"Should not flush before timeout"];
var inst_56368 = cljs.core.PersistentHashMap.fromArrays(inst_56360,inst_56367);
var inst_56369 = cljs.test.report.call(null,inst_56368);
var state_56585__$1 = state_56585;
var statearr_56683_56949 = state_56585__$1;
(statearr_56683_56949[(2)] = inst_56369);

(statearr_56683_56949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (18))){
var inst_56397 = (state_56585[(19)]);
var inst_56409 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56410 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56411 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56412 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56413 = cljs.core.cons(inst_56412,inst_56397);
var inst_56414 = (new cljs.core.List(null,inst_56413,null,(1),null));
var inst_56415 = (new cljs.core.List(null,inst_56411,inst_56414,(2),null));
var inst_56416 = ["bb_web_ds_tools/components/async_buffer_test.cljs",33,new cljs.core.Keyword(null,"fail","fail",1706214930),13,50,inst_56410,50,inst_56415,"Should flush after timeout"];
var inst_56417 = cljs.core.PersistentHashMap.fromArrays(inst_56409,inst_56416);
var inst_56418 = cljs.test.report.call(null,inst_56417);
var state_56585__$1 = state_56585;
var statearr_56685_56950 = state_56585__$1;
(statearr_56685_56950[(2)] = inst_56418);

(statearr_56685_56950[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (37))){
var inst_56516 = (state_56585[(16)]);
var inst_56533 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56534 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56535 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56536 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56537 = cljs.core.cons(inst_56536,inst_56516);
var inst_56538 = (new cljs.core.List(null,inst_56537,null,(1),null));
var inst_56539 = (new cljs.core.List(null,inst_56535,inst_56538,(2),null));
var inst_56540 = ["bb_web_ds_tools/components/async_buffer_test.cljs",39,new cljs.core.Keyword(null,"fail","fail",1706214930),13,60,inst_56534,60,inst_56539,"Should flush 3,4 after timeout from first message"];
var inst_56541 = cljs.core.PersistentHashMap.fromArrays(inst_56533,inst_56540);
var inst_56542 = cljs.test.report.call(null,inst_56541);
var state_56585__$1 = state_56585;
var statearr_56686_56951 = state_56585__$1;
(statearr_56686_56951[(2)] = inst_56542);

(statearr_56686_56951[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56586 === (8))){
var _ = (function (){var statearr_56687 = state_56585;
(statearr_56687[(4)] = cljs.core.rest((state_56585[(4)])));

return statearr_56687;
})();
var state_56585__$1 = state_56585;
var ex56684 = (state_56585__$1[(2)]);
var statearr_56688_56952 = state_56585__$1;
(statearr_56688_56952[(5)] = ex56684);


var statearr_56689_56953 = state_56585__$1;
(statearr_56689_56953[(1)] = (7));

(statearr_56689_56953[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0 = (function (){
var statearr_56690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56690[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__);

(statearr_56690[(1)] = (1));

return statearr_56690;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1 = (function (state_56585){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_56585);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e56691){var ex__50434__auto__ = e56691;
var statearr_56692_56954 = state_56585;
(statearr_56692_56954[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_56585[(4)]))){
var statearr_56693_56955 = state_56585;
(statearr_56693_56955[(1)] = cljs.core.first((state_56585[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56957 = state_56585;
state_56585 = G__56957;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__ = function(state_56585){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1.call(this,state_56585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_56694 = f__50502__auto__();
(statearr_56694[(6)] = c__50501__auto__);

return statearr_56694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56316","meta56316",-707523994,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56315");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56315");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56315.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56315 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56315(meta56316){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315(meta56316));
});


bb_web_ds_tools.components.async_buffer_test.timer_flush_test = (function bb_web_ds_tools$components$async_buffer_test$timer_flush_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56315(null));
});

(bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.timer_flush_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","timer-flush-test","bb-web-ds-tools.components.async-buffer-test/timer-flush-test",-1806599894,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"timer-flush-test","timer-flush-test",-1662887255,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,33,33,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.timer_flush_test)?bb_web_ds_tools.components.async_buffer_test.timer_flush_test.cljs$lang$test:null)])));

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708 = (function (meta56709){
this.meta56709 = meta56709;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56710,meta56709__$1){
var self__ = this;
var _56710__$1 = this;
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708(meta56709__$1));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56710){
var self__ = this;
var _56710__$1 = this;
return self__.meta56709;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.prototype.cljs$test$IAsyncTest$ = cljs.core.PROTOCOL_SENTINEL);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.prototype.call = (function (unused__11801__auto__){
var self__ = this;
var self__ = this;
var G__56716 = (arguments.length - (1));
switch (G__56716) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.prototype.apply = (function (self__,args56711){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56711)));
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___11447__auto__ = this;
var c__50501__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50502__auto__ = (function (){var switch__50430__auto__ = (function (state_56788){
var state_val_56789 = (state_56788[(1)]);
if((state_val_56789 === (7))){
var inst_56741 = (state_56788[(2)]);
var inst_56742 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56743 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56744 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"error","error",-978969032),13,78,inst_56743,78,inst_56741,"Closing input should flush remaining"];
var inst_56745 = cljs.core.PersistentHashMap.fromArrays(inst_56742,inst_56744);
var inst_56746 = cljs.test.report.call(null,inst_56745);
var state_56788__$1 = state_56788;
var statearr_56790_56959 = state_56788__$1;
(statearr_56790_56959[(2)] = inst_56746);

(statearr_56790_56959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56789 === (1))){
var inst_56724 = (state_56788[(7)]);
var inst_56726 = (state_56788[(8)]);
var inst_56724__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_56725 = cljs.core.PersistentVector.EMPTY;
var inst_56726__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(inst_56725);
var inst_56727 = (function (){var input_ch = inst_56724__$1;
var results = inst_56726__$1;
return (function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,items);
});
})();
var inst_56728 = [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),new cljs.core.Keyword(null,"on-flush","on-flush",1802855488)];
var inst_56729 = [inst_56724__$1,inst_56727];
var inst_56730 = cljs.core.PersistentHashMap.fromArrays(inst_56728,inst_56729);
var inst_56731 = bb_web_ds_tools.components.async_buffer.create(inst_56730);
var state_56788__$1 = (function (){var statearr_56791 = state_56788;
(statearr_56791[(7)] = inst_56724__$1);

(statearr_56791[(8)] = inst_56726__$1);

(statearr_56791[(9)] = inst_56731);

return statearr_56791;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56788__$1,(2),inst_56724__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
} else {
if((state_val_56789 === (4))){
var inst_56739 = (state_56788[(2)]);
var state_56788__$1 = (function (){var statearr_56792 = state_56788;
(statearr_56792[(10)] = inst_56739);

return statearr_56792;
})();
var statearr_56793_56962 = state_56788__$1;
(statearr_56793_56962[(2)] = null);

(statearr_56793_56962[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56789 === (6))){
var inst_56785 = (state_56788[(2)]);
var inst_56786 = (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
var state_56788__$1 = (function (){var statearr_56794 = state_56788;
(statearr_56794[(11)] = inst_56785);

return statearr_56794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56788__$1,inst_56786);
} else {
if((state_val_56789 === (3))){
var inst_56724 = (state_56788[(7)]);
var inst_56735 = (state_56788[(2)]);
var inst_56736 = cljs.core.async.close_BANG_(inst_56724);
var inst_56737 = cljs.core.async.timeout((20));
var state_56788__$1 = (function (){var statearr_56798 = state_56788;
(statearr_56798[(12)] = inst_56735);

(statearr_56798[(13)] = inst_56736);

return statearr_56798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56788__$1,(4),inst_56737);
} else {
if((state_val_56789 === (2))){
var inst_56724 = (state_56788[(7)]);
var inst_56733 = (state_56788[(2)]);
var state_56788__$1 = (function (){var statearr_56799 = state_56788;
(statearr_56799[(14)] = inst_56733);

return statearr_56799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56788__$1,(3),inst_56724,new cljs.core.Keyword(null,"b","b",1482224470));
} else {
if((state_val_56789 === (11))){
var inst_56761 = (state_56788[(15)]);
var inst_56782 = (state_56788[(2)]);
var _ = (function (){var statearr_56800 = state_56788;
(statearr_56800[(4)] = cljs.core.rest((state_56788[(4)])));

return statearr_56800;
})();
var state_56788__$1 = (function (){var statearr_56801 = state_56788;
(statearr_56801[(16)] = inst_56782);

return statearr_56801;
})();
var statearr_56802_56965 = state_56788__$1;
(statearr_56802_56965[(2)] = inst_56761);

(statearr_56802_56965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56789 === (9))){
var inst_56760 = (state_56788[(17)]);
var inst_56763 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56764 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56765 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56766 = cljs.core.cons(inst_56765,inst_56760);
var inst_56767 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"pass","pass",1574159993),13,78,inst_56764,78,inst_56766,"Closing input should flush remaining"];
var inst_56768 = cljs.core.PersistentHashMap.fromArrays(inst_56763,inst_56767);
var inst_56769 = cljs.test.report.call(null,inst_56768);
var state_56788__$1 = state_56788;
var statearr_56803_56966 = state_56788__$1;
(statearr_56803_56966[(2)] = inst_56769);

(statearr_56803_56966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56789 === (5))){
var inst_56726 = (state_56788[(8)]);
var inst_56760 = (state_56788[(17)]);
var inst_56761 = (state_56788[(15)]);
var _ = (function (){var statearr_56808 = state_56788;
(statearr_56808[(4)] = cljs.core.cons((8),(state_56788[(4)])));

return statearr_56808;
})();
var inst_56752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56753 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56754 = [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)];
var inst_56755 = (new cljs.core.PersistentVector(null,2,(5),inst_56753,inst_56754,null));
var inst_56756 = [inst_56755];
var inst_56757 = (new cljs.core.PersistentVector(null,1,(5),inst_56752,inst_56756,null));
var inst_56758 = cljs.core.deref(inst_56726);
var inst_56759 = (new cljs.core.List(null,inst_56758,null,(1),null));
var inst_56760__$1 = (new cljs.core.List(null,inst_56757,inst_56759,(2),null));
var inst_56761__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,inst_56760__$1);
var state_56788__$1 = (function (){var statearr_56809 = state_56788;
(statearr_56809[(17)] = inst_56760__$1);

(statearr_56809[(15)] = inst_56761__$1);

return statearr_56809;
})();
if(cljs.core.truth_(inst_56761__$1)){
var statearr_56812_56969 = state_56788__$1;
(statearr_56812_56969[(1)] = (9));

} else {
var statearr_56813_56970 = state_56788__$1;
(statearr_56813_56970[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56789 === (10))){
var inst_56760 = (state_56788[(17)]);
var inst_56771 = [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_56772 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),new cljs.core.Symbol(null,"results","results",506361414,null)));
var inst_56773 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_56774 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_56775 = cljs.core.cons(inst_56774,inst_56760);
var inst_56776 = (new cljs.core.List(null,inst_56775,null,(1),null));
var inst_56777 = (new cljs.core.List(null,inst_56773,inst_56776,(2),null));
var inst_56778 = ["bb_web_ds_tools/components/async_buffer_test.cljs",35,new cljs.core.Keyword(null,"fail","fail",1706214930),13,78,inst_56772,78,inst_56777,"Closing input should flush remaining"];
var inst_56779 = cljs.core.PersistentHashMap.fromArrays(inst_56771,inst_56778);
var inst_56780 = cljs.test.report.call(null,inst_56779);
var state_56788__$1 = state_56788;
var statearr_56814_56973 = state_56788__$1;
(statearr_56814_56973[(2)] = inst_56780);

(statearr_56814_56973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56789 === (8))){
var _ = (function (){var statearr_56815 = state_56788;
(statearr_56815[(4)] = cljs.core.rest((state_56788[(4)])));

return statearr_56815;
})();
var state_56788__$1 = state_56788;
var ex56804 = (state_56788__$1[(2)]);
var statearr_56816_56974 = state_56788__$1;
(statearr_56816_56974[(5)] = ex56804);


var statearr_56818_56975 = state_56788__$1;
(statearr_56818_56975[(1)] = (7));

(statearr_56818_56975[(5)] = null);



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
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__ = null;
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0 = (function (){
var statearr_56822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56822[(0)] = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__);

(statearr_56822[(1)] = (1));

return statearr_56822;
});
var bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1 = (function (state_56788){
while(true){
var ret_value__50432__auto__ = (function (){try{while(true){
var result__50433__auto__ = switch__50430__auto__(state_56788);
if(cljs.core.keyword_identical_QMARK_(result__50433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50433__auto__;
}
break;
}
}catch (e56823){var ex__50434__auto__ = e56823;
var statearr_56824_56976 = state_56788;
(statearr_56824_56976[(2)] = ex__50434__auto__);


if(cljs.core.seq((state_56788[(4)]))){
var statearr_56825_56977 = state_56788;
(statearr_56825_56977[(1)] = cljs.core.first((state_56788[(4)])));

} else {
throw ex__50434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56978 = state_56788;
state_56788 = G__56978;
continue;
} else {
return ret_value__50432__auto__;
}
break;
}
});
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__ = function(state_56788){
switch(arguments.length){
case 0:
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0.call(this);
case 1:
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1.call(this,state_56788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$0 = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____0;
bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__.cljs$core$IFn$_invoke$arity$1 = bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto____1;
return bb_web_ds_tools$components$async_buffer_test$state_machine__50431__auto__;
})()
})();
var state__50503__auto__ = (function (){var statearr_56826 = f__50502__auto__();
(statearr_56826[(6)] = c__50501__auto__);

return statearr_56826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50503__auto__);
}));

return c__50501__auto__;
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56709","meta56709",-771946585,null)], null);
}));

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.cljs$lang$type = true);

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.cljs$lang$ctorStr = "bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56708");

(bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56708");
}));

/**
 * Positional factory function for bb-web-ds-tools.components.async-buffer-test/t_bb_web_ds_tools$components$async_buffer_test56708.
 */
bb_web_ds_tools.components.async_buffer_test.__GT_t_bb_web_ds_tools$components$async_buffer_test56708 = (function bb_web_ds_tools$components$async_buffer_test$__GT_t_bb_web_ds_tools$components$async_buffer_test56708(meta56709){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708(meta56709));
});


bb_web_ds_tools.components.async_buffer_test.close_input_test = (function bb_web_ds_tools$components$async_buffer_test$close_input_test(){
return cljs.test.test_var(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var);
});
bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test = (function (){
return (new bb_web_ds_tools.components.async_buffer_test.t_bb_web_ds_tools$components$async_buffer_test56708(null));
});

(bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$var = new cljs.core.Var(function(){return bb_web_ds_tools.components.async_buffer_test.close_input_test;},new cljs.core.Symbol("bb-web-ds-tools.components.async-buffer-test","close-input-test","bb-web-ds-tools.components.async-buffer-test/close-input-test",388546531,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bb-web-ds-tools.components.async-buffer-test","bb-web-ds-tools.components.async-buffer-test",-1811661949,null),new cljs.core.Symbol(null,"close-input-test","close-input-test",517558380,null),"bb_web_ds_tools/components/async_buffer_test.cljs",26,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(bb_web_ds_tools.components.async_buffer_test.close_input_test)?bb_web_ds_tools.components.async_buffer_test.close_input_test.cljs$lang$test:null)])));

//# sourceMappingURL=bb_web_ds_tools.components.async_buffer_test.js.map
